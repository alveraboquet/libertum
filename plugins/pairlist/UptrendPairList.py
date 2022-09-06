import pymongo
import time
from pymongo import MongoClient
import logging
from typing import Any, Dict, List

import arrow
from cachetools import TTLCache

from constants import ListPairsWithTimeframes
from exceptions import OperationalException
from exchange import timeframe_to_minutes
from misc import format_ms_time
from plugins.pairlist.IPairList import IPairList


logger = logging


SORT_VALUES = ['quoteVolume']

uri = "mongodb+srv://fetcher:fetcher123@cluster0.ibbbthw.mongodb.net/test"
db_client = MongoClient(uri)

db = db_client['Libertum']
data = db['coinsData']

class UptrendPairList(IPairList):

    def __init__(self, exchange, pairlistmanager,
                 config: Dict[str, Any], pairlistconfig: Dict[str, Any],
                 pairlist_pos: int) -> None:
        super().__init__(exchange, pairlistmanager, config, pairlistconfig, pairlist_pos)

        # if 'number_assets' not in self._pairlistconfig:
        #     raise OperationalException(
        #         '`number_assets` not specified. Please check your configuration '
        #         'for "pairlist.config.number_assets"')

        self._stake_currency = config['stake_currency']
        # self._number_pairs = self._pairlistconfig['number_assets']
        self._sort_key = self._pairlistconfig.get('sort_key', 'quoteVolume')
        self._min_value = self._pairlistconfig.get('min_value', 0)
        self._refresh_period = self._pairlistconfig.get('refresh_period', 1800)
        self._pair_cache: TTLCache = TTLCache(maxsize=1, ttl=self._refresh_period)
        self._lookback_days = self._pairlistconfig.get('lookback_days', 0)
        self._lookback_timeframe = self._pairlistconfig.get('lookback_timeframe', '1d')
        self._lookback_period = self._pairlistconfig.get('lookback_period', 0)
        self._def_candletype = self._config['candle_type_def']

        if (self._lookback_days > 0) & (self._lookback_period > 0):
            raise OperationalException(
                'Ambigous configuration: lookback_days and lookback_period both set in pairlist '
                'config. Please set lookback_days only or lookback_period and lookback_timeframe '
                'and restart the bot.'
            )

        # overwrite lookback timeframe and days when lookback_days is set
        if self._lookback_days > 0:
            self._lookback_timeframe = '1d'
            self._lookback_period = self._lookback_days

        # get timeframe in minutes and seconds
        self._tf_in_min = timeframe_to_minutes(self._lookback_timeframe)
        self._tf_in_sec = self._tf_in_min * 60

        # wether to use range lookback or not
        self._use_range = (self._tf_in_min > 0) & (self._lookback_period > 0)

        if self._use_range & (self._refresh_period < self._tf_in_sec):
            raise OperationalException(
                f'Refresh period of {self._refresh_period} seconds is smaller than one '
                f'timeframe of {self._lookback_timeframe}. Please adjust refresh_period '
                f'to at least {self._tf_in_sec} and restart the bot.'
            )

        if (not self._use_range and not (
                self._exchange.exchange_has('fetchTickers')
                and self._exchange._ft_has["tickers_have_quoteVolume"])):
            raise OperationalException(
                "Exchange does not support dynamic whitelist in this configuration. "
                "Please edit your config and either remove Volumepairlist, "
                "or switch to using candles. and restart the bot."
            )

        if not self._validate_keys(self._sort_key):
            raise OperationalException(
                f'key {self._sort_key} not in {SORT_VALUES}')

        candle_limit = exchange.ohlcv_candle_limit(
            self._lookback_timeframe, self._config['candle_type_def'])
        if self._lookback_period < 0:
            raise OperationalException("VolumeFilter requires lookback_period to be >= 0")
        if self._lookback_period > candle_limit:
            raise OperationalException("VolumeFilter requires lookback_period to not "
                                       f"exceed exchange max request size ({candle_limit})")


    def getCoins(self):

    # timeframes: 1m, 3m, 15m, 1h, 4h
    # conditions:
        # macd_up ($eq=1)
        # macd_crossover ($lt, $gt)
        # rsi ($lt, $gt)
        # ema_up $eq = 1
        # ema_crossover ($lt, $gt)
        # stoch_up $eq = 1
        # stoch_crossover ($lt, $gt)

        filter = { "$and": [
        {'3m.macd_up': {"$eq": 1}},
        {'3m.ema_up':{"$eq":1}},
        # {'1m.macd_crossover': {'$gt': 0.05}}

        ]}

        return data.distinct("symbol", filter)

    def filter_pairlist(self):
        pairs = list()
        while True:
            coins = self.getCoins()
            if len(coins) >= 5:
                pairs.extend(coins)
                break
        pairs = [i.replace('USDT', '/USDT') for i in pairs]
        return pairs