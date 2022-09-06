
# --- Do not remove these libs ---
from strategy import IStrategy
from strategy import CategoricalParameter, DecimalParameter, IntParameter
from pandas import DataFrame
# --------------------------------

import talib.abstract as ta
import vendor.qtpylib.indicators as qtpylib


class MACDStrategymodif(IStrategy):
    """
   

    freqtrade hyperopt --strategy MACDStrategy --hyperopt-loss <someLossFunction> --spaces buy sell

    

    """
    INTERFACE_VERSION: int = 3

    # Minimal ROI designed for the strategy.
    # This attribute will be overridden if the config file contains "minimal_roi"
    minimal_roi= {
        "0": 0.0,    # Exit after 40 minutes if the profit is not negative
        "40": 0.01,   # Exit after 30 minutes if there is at least 1% profit
        "20": 0.02,   # Exit after 20 minutes if there is at least 2% profit
        "0":  0.04    # Exit immediately if there is at least 4% profit
        }

    # box = {
	# 'upperbound' : 1,                  # in percentage                             
	# 'lowerbound' : -1,                 # in percentage
    # }

    # Optimal stoploss designed for the strategy
    # This attribute will be overridden if the config file contains "stoploss"
    stoploss = -0.008

    # Optimal timeframe for the strategy
    timeframe = '5m'

    
    buy_cci = IntParameter(low=-700, high=0, default=-50, space='buy', optimize=True)
    sell_cci = IntParameter(low=0, high=700, default=100, space='sell', optimize=True)
    buy_rsi = IntParameter(low=1, high=100, default=30, space='buy', optimize=True)
    sell_rsi = IntParameter(low=1, high=100, default=70, space='sell', optimize=True)

    # Buy hyperspace params:
    buy_params = {
        "buy_cci": -48,
        "buy_rsi": 26,
    }

    # Sell hyperspace params:
    sell_params = {
        "sell_cci": 687,
        "sell_rsi": 74,
    }

    # pairs_list = ["BTC/USDT", "ETH/USDT", "BNB/USDT", "SOL/USDT", "DOT/USDT", "AVAX/USDT", "LTC/USDT", "ETC/USDT", "BCH/USDT"]

    # def check_trade(self,profit_percent):
    #     if profit_percent < box['lowerbound']:
    #         return True

    #     elif profit_percent > box['upperbound']:
    #         box['upperbound'] = round((profit_percent + 0.15), 2)
    #         box['lowerbound'] = round((profit_percent - 0.15), 2)
    #         # please_print(box['upperbound'], box['lowerbound'])
    #         return False

    #     return False


    # def get_prices(self,sym):
    #     try:
    #         data = binance_Api('tickers',
    #                 {'symbol' : sym}).json()
    #     except socket.error:
    #         data = binance_Api('tickers',
    #                 {'symbol' : sym}).json()
    #         time.sleep(5)
    #     # print(data)
    #     if data :
    #         return data['price']


    def populate_indicators(self, dataframe: DataFrame, metadata: dict) -> DataFrame:
	    
        macd = ta.MACD(dataframe)
        dataframe['ema7'] = ta.EMA(dataframe, timeperiod=7)
        dataframe['ema25'] = ta.EMA(dataframe, timeperiod=25)
        dataframe['macd'] = macd['macd']
        dataframe['macdsignal'] = macd['macdsignal']
        dataframe['macdhist'] = macd['macdhist']
        dataframe['rsi'] = ta.RSI(dataframe)
        # dataframe['cci'] = ta.CCI(dataframe)
        

        return dataframe

    def populate_entry_trend(self, dataframe: DataFrame, metadata: dict) -> DataFrame:
        """
        Based on TA indicators, populates the buy signal for the given dataframe
        :param dataframe: DataFrame
        :return: DataFrame with buy column
        """
        dataframe.loc[
            (
                # (dataframe['macd'].iloc[-1] > dataframe['macdsignal'].iloc[-1]) &
                # (dataframe['macd'].iloc[-2] < dataframe['macdsignal'].iloc[-2]) &
            	# qtpylib.crossed_above(dataframe['ema8'], dataframe['ema24']) &
                (dataframe['macd'] > dataframe['macdsignal']) &
                # (dataframe['ema7'] > dataframe['ema25']) &
                # (dataframe['ema7'].shift(1) <= dataframe['ema25'].shift(1)) &
                # (dataframe['rsi'] > self.buy_rsi.value) &
                # (dataframe['cci'] <= self.buy_cci.value) &
                # qtpylib.crossed_above(dataframe['macd'], dataframe['macdsignal']) &
                
                (dataframe['volume'] > 0)  # Make sure Volume is not 0
            ),
            'enter_long'] = 1

        return dataframe

    def populate_exit_trend(self, dataframe: DataFrame, metadata: dict) -> DataFrame:
        """
        Based on TA indicators, populates the sell signal for the given dataframe
        :param dataframe: DataFrame
        :return: DataFrame with buy column
        """

        # curr = float(self.get_prices("BTC/USDT"))
        # percent = round((((curr/buyprice) -1 )*100) , 2)

        dataframe.loc[
            (
                # (dataframe['macd'] < dataframe['macdsignal']) &
                # (percent <= stoploss) |
                # (dataframe['macd'].iloc[-1] < dataframe['macdsignal'].iloc[-1]) & 
                # (dataframe['macd'].iloc[-2] > dataframe['macdsignal'].iloc[-2]) &
                # qtpylib.crossed_below(dataframe['ema8'], dataframe['ema24']) &
                (dataframe['macd'] < dataframe['macdsignal']) &
                # (dataframe['ema7'] < dataframe['ema25']) &
                # (dataframe['ema7'].shift(1) >= dataframe['ema25'].shift(1)) &
                # (dataframe['rsi'] < self.buy_rsi.value) &
                # (dataframe['cci'] >= self.sell_cci.value) &
                (dataframe['volume'] > 0)  # Make sure Volume is not 0
            ),
            'exit_long'] = 1

        return dataframe