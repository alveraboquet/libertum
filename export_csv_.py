import pandas as pd
import sqlite3

db_file = f"tradesv3.{date}.sqlite"
conn = sqlite3.connect(db_file, isolation_level=None,
                       detect_types=sqlite3.PARSE_COLNAMES)

db_df = pd.read_sql_query("SELECT * FROM trades", conn)
db_df.to_csv(f'{date}.csv', index=False)
