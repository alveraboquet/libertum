from typing import Any, Dict, Iterator, Optional

from fastapi import Depends

from enums import RunMode
from persistence import Trade
from rpc.rpc import RPC, RPCException

from .webserver import ApiServer


def get_rpc_optional() -> Optional[RPC]:
    if ApiServer._has_rpc:
        return ApiServer._rpc
    return None


def get_rpc() -> Optional[Iterator[RPC]]:
    _rpc = get_rpc_optional()
    if _rpc:
        Trade.query.session.rollback()
        yield _rpc
        Trade.query.session.rollback()
    else:
        raise RPCException('Bot is not in the correct state')


def get_config() -> Dict[str, Any]:
    return ApiServer._config


def get_api_config() -> Dict[str, Any]:
    return ApiServer._config['api_server']


def get_exchange(config=Depends(get_config)):
    if not ApiServer._exchange:
        from resolvers import ExchangeResolver
        ApiServer._exchange = ExchangeResolver.load_exchange(
            config['exchange']['name'], config, load_leverage_tiers=False)
    return ApiServer._exchange


def is_webserver_mode(config=Depends(get_config)):
    if config['runmode'] != RunMode.WEBSERVER:
        raise RPCException('Bot is not in the correct state')
    return None
