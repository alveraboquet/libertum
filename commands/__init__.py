# flake8: noqa: F401
"""
Commands module.
Contains all start-commands, subcommands and CLI Interface creation.

Note: Be careful with file-scoped imports in these subfiles.
    as they are parsed on startup, nothing containing optional modules should be loaded.
"""
from commands.analyze_commands import start_analysis_entries_exits
from commands.arguments import Arguments
from commands.build_config_commands import start_new_config
from commands.data_commands import (start_convert_data, start_convert_trades,
                                              start_download_data, start_list_data)
from commands.db_commands import start_convert_db
from commands.deploy_commands import (start_create_userdir, start_install_ui,
                                                start_new_strategy)
from commands.hyperopt_commands import start_hyperopt_list, start_hyperopt_show
from commands.list_commands import (start_list_exchanges, start_list_markets,
                                              start_list_strategies, start_list_timeframes,
                                              start_show_trades)
from commands.optimize_commands import (start_backtesting, start_backtesting_show,
                                                  start_edge, start_hyperopt)
from commands.pairlist_commands import start_test_pairlist
from commands.plot_commands import start_plot_dataframe, start_plot_profit
from commands.trade_commands import start_trading
from commands.webserver_commands import start_webserver
