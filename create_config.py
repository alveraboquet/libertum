import pymongo
import time
from pymongo import MongoClient
import json


uri = "mongodb+srv://fetcher:fetcher123@cluster0.ibbbthw.mongodb.net/test"
db_client = MongoClient(uri)

db = db_client['Libertum']
data = db['coinsData']

config = {'max_open_trades': 10,
 'stake_currency': 'USDT',
 'stake_amount': 22,
 'tradable_balance_ratio': 0.99,
 'fiat_display_currency': 'USD',
 'timeframe': '5m',
 'dry_run': True,
 'cancel_open_orders_on_exit': False,
 'trading_mode': 'spot',
 'margin_mode': '',
 'unfilledtimeout': {'entry': 10,
  'exit': 10,
  'exit_timeout_count': 0,
  'unit': 'minutes'},
 'entry_pricing': {'price_side': 'same',
  'use_order_book': True,
  'order_book_top': 1,
  'price_last_balance': 0.0,
  'check_depth_of_market': {'enabled': False, 'bids_to_ask_delta': 1}},
 'exit_pricing': {'price_side': 'same',
  'use_order_book': True,
  'order_book_top': 1},
 'exchange': {'name': 'binance',
  'key': '',
  'secret': '',
  'ccxt_config': {},
  'ccxt_async_config': {},
  'pair_whitelist': [],
  'pair_blacklist': []},
 'pairlists': [{'method': 'StaticPairList',
   'number_assets': 25,
   'sort_key': 'quoteVolume',
   'min_value': 0,
   'refresh_period': 1800}],
 'edge': {'enabled': False,
  'process_throttle_secs': 3600,
  'calculate_since_number_of_days': 7,
  'allowed_risk': 0.01,
  'stoploss_range_min': -0.01,
  'stoploss_range_max': -0.1,
  'stoploss_range_step': -0.01,
  'minimum_winrate': 0.6,
  'minimum_expectancy': 0.2,
  'min_trade_number': 10,
  'max_trade_duration_minute': 1440,
  'remove_pumps': False},
 'telegram': {'enabled': False, 'token': '', 'chat_id': ''},
 'api_server': {'enabled': True,
  'listen_ip_address': '127.0.0.1',
  'listen_port': 8089,
  'verbosity': 'error',
  'enable_openapi': False,
  'jwt_secret_key': '6ce00f4a95b1fa962000e64b918004d985f6445c66af0c1965c2b6932f5d2d98',
  'username': 'bot2',
  'password': '123'},
 'bot_name': 'bot',
 'to_json': True,
 'strategy': 'MACDStrategymodif',
 'initial_state': 'running',
 'force_entry_enable': False,
 'internals': {'process_throttle_secs': 5}}

class UptrendPairList:

    def __init__(self):
        pass


    def getCoins(self):

    # timeframes: 1m, 3m, 15m, 1h, 4h
    # conditions:
        # macd_up ($eq=1)
        # macd_crossover ($eq=1)
        # rsi ($lt, $gt)
        # ema_up ($eq=1)
        # ema_crossover ($eq=1)
        # stoch_up ($eq=1)
        # stoch_crossover ($eq=1)

        filter = { "$and": [
        {'5m.macd_crossover': {"$eq": 1}},
        # {'3m.ema_up':{"$eq":1}},

        ]}

        return data.distinct("symbol", filter)

    def pairlist(self):
        pairs = list()
        while True:
            coins = self.getCoins()
            if len(coins) >= 3:
                pairs.extend(coins)
                break
        pairs = [i.replace('USDT', '/USDT') for i in pairs]
        return pairs

    def create_(self):
        config['exchange']['pair_whitelist'] = self.pairlist()
        with open('config_1m2.json', 'w') as f:
            f.write(json.dumps(config))