from typing import Any, Dict

from enums import RunMode


def start_webserver(args: Dict[str, Any]) -> None:
    """
    Main entry point for webserver mode
    """
    from configuration import Configuration
    from rpc.api_server import ApiServer

    # Initialize configuration
    config = Configuration(args, RunMode.WEBSERVER).get_config()
    ApiServer(config, standalone=True)
