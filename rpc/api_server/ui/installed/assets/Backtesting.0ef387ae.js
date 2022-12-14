import { T as E, S as j, a as H } from "./StrategySelect.520d0139.js";
import { T as A } from "./TradeList.dad744f9.js";
import {
  d as y,
  c as b,
  B as C,
  t as v,
  n as x,
  u as z,
  o as D,
  r as c,
  g as O,
  h as U,
  w as N,
} from "./index.ef7539b9.js";
import { b as S, f as r } from "./numberformat.a1b2908a.js";
import { C as V } from "./CandleChartContainer.e7b4f871.js";
import { C as I, T as W } from "./TradesLog.4b1d0f81.js";
import { P as q } from "./PairSummary.369a1ae1.js";
import "./TradeProfit.af2e34d4.js";
import "./install.0dc8b161.js";
import "./install.5a6de981.js";
import "./createSeriesDataSimply.dc3f9863.js";
var K = y({
    name: "LoginModal",
    components: { TradeList: A },
    props: { backtestResult: { required: !0, type: Object } },
    setup(t) {
      const l = b(() => !!t.backtestResult),
        e = (s) =>
          `${S(s, t.backtestResult.stake_currency_decimals)} ${
            t.backtestResult.stake_currency
          }`,
        a = (s) =>
          s.trades.slice().sort((m, _) => m.profit_ratio - _.profit_ratio),
        i = b(() => {
          const s = a(t.backtestResult),
            n = s[s.length - 1];
          return `${n.pair} ${r(n.profit_ratio, 2)}`;
        }),
        o = b(() => {
          const n = a(t.backtestResult)[0];
          return `${n.pair} ${r(n.profit_ratio, 2)}`;
        }),
        d = b(() => {
          var n, m, _, g, R;
          const s =
            ((n = t.backtestResult) == null ? void 0 : n.trade_count_short) &&
            ((m = t.backtestResult) == null ? void 0 : m.trade_count_short) > 0
              ? [
                  { metric: "___", value: "___" },
                  {
                    metric: "Long / Short",
                    value: `${t.backtestResult.trade_count_long} / ${t.backtestResult.trade_count_short}`,
                  },
                  {
                    metric: "Total profit Long",
                    value: `${r(t.backtestResult.profit_total_long || 0)} | ${e(
                      t.backtestResult.profit_total_long_abs
                    )}`,
                  },
                  {
                    metric: "Total profit Short",
                    value: `${r(
                      t.backtestResult.profit_total_short || 0
                    )} | ${e(t.backtestResult.profit_total_short_abs)}`,
                  },
                ]
              : [];
          return [
            {
              metric: "Total Profit",
              value: `${r(t.backtestResult.profit_total)} | ${e(
                t.backtestResult.profit_total_abs
              )}`,
            },
            {
              metric: "Total trades / Daily Avg Trades",
              value: `${t.backtestResult.total_trades} / ${t.backtestResult.trades_per_day}`,
            },
            {
              metric: "Best day",
              value: `${r(t.backtestResult.backtest_best_day, 2)} | ${e(
                t.backtestResult.backtest_best_day_abs
              )}`,
            },
            {
              metric: "Worst day",
              value: `${r(t.backtestResult.backtest_worst_day, 2)} | ${e(
                t.backtestResult.backtest_worst_day_abs
              )}`,
            },
            {
              metric: "Win/Draw/Loss",
              value: `${
                t.backtestResult.results_per_pair[
                  t.backtestResult.results_per_pair.length - 1
                ].wins
              } / ${
                t.backtestResult.results_per_pair[
                  t.backtestResult.results_per_pair.length - 1
                ].draws
              } / ${
                t.backtestResult.results_per_pair[
                  t.backtestResult.results_per_pair.length - 1
                ].losses
              }`,
            },
            {
              metric: "Days win/draw/loss",
              value: `${t.backtestResult.winning_days} / ${t.backtestResult.draw_days} / ${t.backtestResult.losing_days}`,
            },
            {
              metric: "Avg. Duration winners",
              value: C(t.backtestResult.winner_holding_avg),
            },
            {
              metric: "Avg. Duration Losers",
              value: C(t.backtestResult.loser_holding_avg),
            },
            {
              metric: "Rejected entry signals",
              value: t.backtestResult.rejected_signals,
            },
            {
              metric: "Entry/Exit timeouts",
              value: `${t.backtestResult.timedout_entry_orders} / ${t.backtestResult.timedout_exit_orders}`,
            },
            {
              metric: "Canceled Trade Entries",
              value:
                (_ = t.backtestResult.canceled_trade_entries) != null
                  ? _
                  : "N/A",
            },
            {
              metric: "Canceled Entry Orders",
              value:
                (g = t.backtestResult.canceled_entry_orders) != null
                  ? g
                  : "N/A",
            },
            {
              metric: "Replaced Entry Orders",
              value:
                (R = t.backtestResult.replaced_entry_orders) != null
                  ? R
                  : "N/A",
            },
            ...s,
            { metric: "___", value: "___" },
            { metric: "Min balance", value: e(t.backtestResult.csum_min) },
            { metric: "Max balance", value: e(t.backtestResult.csum_max) },
            {
              metric: "Market change",
              value: r(t.backtestResult.market_change),
            },
            { metric: "___", value: "___" },
            {
              metric: "Max Drawdown (Account)",
              value: r(t.backtestResult.max_drawdown_account),
            },
            {
              metric: "Max Drawdown ABS",
              value: e(t.backtestResult.max_drawdown_abs),
            },
            {
              metric: "Drawdown high | low",
              value: `${e(t.backtestResult.max_drawdown_high)} | ${e(
                t.backtestResult.max_drawdown_low
              )}`,
            },
            {
              metric: "Drawdown start",
              value: v(t.backtestResult.drawdown_start_ts),
            },
            {
              metric: "Drawdown end",
              value: v(t.backtestResult.drawdown_end_ts),
            },
            { metric: "___", value: "___" },
            {
              metric: "Best Pair",
              value: `${t.backtestResult.best_pair.key} ${r(
                t.backtestResult.best_pair.profit_sum
              )}`,
            },
            {
              metric: "Worst Pair",
              value: `${t.backtestResult.worst_pair.key} ${r(
                t.backtestResult.worst_pair.profit_sum
              )}`,
            },
            { metric: "Best single Trade", value: i.value },
            { metric: "Worst single Trade", value: o.value },
          ];
        }),
        h = b(() => [
          {
            setting: "Backtesting from",
            value: v(t.backtestResult.backtest_start_ts),
          },
          {
            setting: "Backtesting to",
            value: v(t.backtestResult.backtest_end_ts),
          },
          {
            setting: "BT execution time",
            value: C(
              t.backtestResult.backtest_run_end_ts -
                t.backtestResult.backtest_run_start_ts
            ),
          },
          {
            setting: "Max open trades",
            value: t.backtestResult.max_open_trades,
          },
          { setting: "Timeframe", value: t.backtestResult.timeframe },
          { setting: "Timerange", value: t.backtestResult.timerange },
          { setting: "Stoploss", value: r(t.backtestResult.stoploss, 2) },
          {
            setting: "Trailing Stoploss",
            value: t.backtestResult.trailing_stop,
          },
          {
            setting: "Trail only when offset is reached",
            value: t.backtestResult.trailing_only_offset_is_reached,
          },
          {
            setting: "Trailing Stop positive",
            value: t.backtestResult.trailing_stop_positive,
          },
          {
            setting: "Trailing stop positive offset",
            value: t.backtestResult.trailing_stop_positive_offset,
          },
          {
            setting: "Custom Stoploss",
            value: t.backtestResult.use_custom_stoploss,
          },
          { setting: "ROI", value: t.backtestResult.minimal_roi },
          {
            setting: "Use Exit Signal",
            value:
              t.backtestResult.use_exit_signal !== void 0
                ? t.backtestResult.use_exit_signal
                : t.backtestResult.use_sell_signal,
          },
          {
            setting: "Exit profit only",
            value:
              t.backtestResult.exit_profit_only !== void 0
                ? t.backtestResult.exit_profit_only
                : t.backtestResult.sell_profit_only,
          },
          {
            setting: "Exit profit offset",
            value:
              t.backtestResult.exit_profit_offset !== void 0
                ? t.backtestResult.exit_profit_offset
                : t.backtestResult.sell_profit_offset,
          },
          {
            setting: "Enable protections",
            value: t.backtestResult.enable_protections,
          },
          {
            setting: "Starting balance",
            value: e(t.backtestResult.starting_balance),
          },
          {
            setting: "Final balance",
            value: e(t.backtestResult.final_balance),
          },
          {
            setting: "Avg. stake amount",
            value: e(t.backtestResult.avg_stake_amount),
          },
          {
            setting: "Total trade volume",
            value: e(t.backtestResult.total_volume),
          },
        ]),
        k = b(() => [
          { key: "key", label: "Pair" },
          { key: "trades", label: "Buys" },
          {
            key: "profit_mean",
            label: "Avg Profit %",
            formatter: (s) => r(s, 2),
          },
          {
            key: "profit_sum",
            label: "Cum Profit %",
            formatter: (s) => r(s, 2),
          },
          {
            key: "profit_total_abs",
            label: `Tot Profit ${t.backtestResult.stake_currency}`,
            formatter: (s) => S(s, t.backtestResult.stake_currency_decimals),
          },
          {
            key: "profit_total",
            label: "Tot Profit %",
            formatter: (s) => r(s, 2),
          },
          { key: "duration_avg", label: "Avg Duration" },
          { key: "wins", label: "Wins" },
          { key: "draws", label: "Draws" },
          { key: "losses", label: "Losses" },
        ]),
        f = b(() => [
          { key: "exit_reason", label: "Exit Reason" },
          { key: "trades", label: "Buys" },
          {
            key: "profit_mean",
            label: "Avg Profit %",
            formatter: (s) => r(s, 2),
          },
          {
            key: "profit_sum",
            label: "Cum Profit %",
            formatter: (s) => r(s, 2),
          },
          {
            key: "profit_total_abs",
            label: `Tot Profit ${t.backtestResult.stake_currency}`,
            formatter: (s) => S(s, t.backtestResult.stake_currency_decimals),
          },
          {
            key: "profit_total",
            label: "Tot Profit %",
            formatter: (s) => r(s, 2),
          },
          { key: "wins", label: "Wins" },
          { key: "draws", label: "Draws" },
          { key: "losses", label: "Losses" },
        ]);
      return {
        hasBacktestResult: l,
        formatPriceStake: e,
        bestPair: i,
        worstPair: o,
        backtestResultStats: d,
        backtestResultSettings: h,
        perPairFields: k,
        perExitReason: f,
        backtestResultFields: [
          { key: "metric", label: "Metric" },
          { key: "value", label: "Value" },
        ],
        backtestsettingFields: [
          { key: "setting", label: "Setting" },
          { key: "value", label: "Value" },
        ],
      };
    },
  }),
  G = function () {
    var t = this,
      l = t.$createElement,
      e = t._self._c || l;
    return e(
      "div",
      { staticClass: "container-fluid px-0 backtestresult-container" },
      [
        e("div", { staticClass: "row d-flex justify-content-center" }, [
          e("h3", [
            t._v("Backtest-result for " + t._s(t.backtestResult.strategy_name)),
          ]),
        ]),
        e(
          "div",
          { staticClass: "row text-left ml-0" },
          [
            e("div", { staticClass: "row w-100" }, [
              e(
                "div",
                { staticClass: "col-12 col-xl-6 px-0 px-xl-0 pr-xl-1" },
                [
                  e(
                    "b-card",
                    { attrs: { header: "Strategy settings" } },
                    [
                      e("b-table", {
                        attrs: {
                          small: "",
                          borderless: "",
                          items: t.backtestResultSettings,
                          fields: t.backtestsettingFields,
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              e(
                "div",
                {
                  staticClass:
                    "col-12 col-xl-6 px-0 px-xl-0 pt-2 pt-xl-0 pl-xl-1",
                },
                [
                  e(
                    "b-card",
                    { attrs: { header: "Metrics" } },
                    [
                      e("b-table", {
                        attrs: {
                          small: "",
                          borderless: "",
                          items: t.backtestResultStats,
                          fields: t.backtestResultFields,
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
            e(
              "b-card",
              {
                staticClass: "row mt-2 w-100",
                attrs: { header: "Results per Exit-reason" },
              },
              [
                e("b-table", {
                  attrs: {
                    small: "",
                    hover: "",
                    stacked: "sm",
                    items:
                      t.backtestResult.exit_reason_summary ||
                      t.backtestResult.sell_reason_summary,
                    fields: t.perExitReason,
                  },
                }),
              ],
              1
            ),
            e(
              "b-card",
              {
                staticClass: "row mt-2 w-100",
                attrs: { header: "Results per pair" },
              },
              [
                e("b-table", {
                  attrs: {
                    small: "",
                    hover: "",
                    stacked: "sm",
                    items: t.backtestResult.results_per_pair,
                    fields: t.perPairFields,
                  },
                }),
              ],
              1
            ),
            e(
              "b-card",
              {
                staticClass: "row mt-2 w-100",
                attrs: { header: "Single trades" },
              },
              [
                e("TradeList", {
                  staticClass: "row trade-history mt-2 w-100",
                  attrs: {
                    trades: t.backtestResult.trades,
                    "show-filter": !0,
                    "stake-currency": t.backtestResult.stake_currency,
                  },
                }),
              ],
              1
            ),
          ],
          1
        ),
      ]
    );
  },
  Y = [];
const M = {};
var J = x(K, G, Y, !1, Q, "d640c3f4", null, null);
function Q(t) {
  for (let l in M) this[l] = M[l];
}
var X = (function () {
    return J.exports;
  })(),
  Z = y({
    name: "BacktestResultSelect",
    props: {
      backtestHistory: { required: !0, type: Object },
      selectedBacktestResultKey: { required: !1, default: "", type: String },
    },
    emits: ["selectionChange"],
    setup(t, { emit: l }) {
      return {
        formatPercent: r,
        setBacktestResult: (a) => {
          l("selectionChange", a);
        },
      };
    },
  }),
  tt = function () {
    var t = this,
      l = t.$createElement,
      e = t._self._c || l;
    return e(
      "div",
      { staticClass: "container d-flex flex-column align-items-center" },
      [
        e("h3", [t._v("Available results:")]),
        e(
          "b-list-group",
          { staticClass: "ml-2" },
          t._l(Object.entries(t.backtestHistory), function (a) {
            var i = a[0],
              o = a[1];
            return e(
              "b-list-group-item",
              {
                key: i,
                staticClass:
                  "d-flex justify-content-between align-items-center py-1",
                attrs: {
                  button: "",
                  active: i === t.selectedBacktestResultKey,
                },
                on: {
                  click: function (d) {
                    return t.setBacktestResult(i);
                  },
                },
              },
              [
                t._v(
                  " " +
                    t._s(i) +
                    " " +
                    t._s(o.total_trades) +
                    " " +
                    t._s(t.formatPercent(o.profit_total)) +
                    " "
                ),
              ]
            );
          }),
          1
        ),
      ],
      1
    );
  },
  et = [];
const F = {};
var at = x(Z, tt, et, !1, st, null, null, null);
function st(t) {
  for (let l in F) this[l] = F[l];
}
var lt = (function () {
    return at.exports;
  })(),
  rt = function () {
    var t = this,
      l = t.$createElement,
      e = t._self._c || l;
    return e(
      "div",
      [
        e(
          "button",
          {
            staticClass: "btn btn-secondary float-right",
            attrs: { title: "Refresh", "aria-label": "Refresh" },
            on: { click: t.botStore.activeBot.getBacktestHistory },
          },
          [t._v(" \u21BB ")]
        ),
        e("p", [
          t._v(
            " Load Historic results from disk. You can click on multiple results to load all of them into libertum. "
          ),
        ]),
        t.botStore.activeBot.backtestHistoryList
          ? e(
              "b-list-group",
              { staticClass: "ml-2" },
              t._l(t.botStore.activeBot.backtestHistoryList, function (a, i) {
                return e(
                  "b-list-group-item",
                  {
                    key: i,
                    staticClass:
                      "d-flex justify-content-between align-items-center py-1 mb-1",
                    attrs: { button: "" },
                    on: {
                      click: function (o) {
                        return t.botStore.activeBot.getBacktestHistoryResult(a);
                      },
                    },
                  },
                  [
                    e("strong", [t._v(t._s(a.strategy))]),
                    t._v(
                      " backtested on: " +
                        t._s(t.timestampms(a.backtest_start_time * 1e3)) +
                        " "
                    ),
                    e("small", [t._v(t._s(a.filename))]),
                  ]
                );
              }),
              1
            )
          : t._e(),
      ],
      1
    );
  },
  it = [];
const ct = y({
    setup() {
      const t = z();
      return (
        D(() => {
          t.activeBot.getBacktestHistory();
        }),
        { timestampms: v, botStore: t }
      );
    },
  }),
  P = {};
var ot = x(ct, rt, it, !1, nt, null, null, null);
function nt(t) {
  for (let l in P) this[l] = P[l];
}
var ut = (function () {
    return ot.exports;
  })(),
  mt = y({
    name: "Backtesting",
    components: {
      BacktestResultView: X,
      BacktestResultSelect: lt,
      BacktestHistoryLoad: ut,
      TimeRangeSelect: E,
      CandleChartContainer: V,
      CumProfitChart: I,
      TradesLogChart: W,
      StrategySelect: j,
      PairSummary: q,
      TimeframeSelect: H,
      TradeList: A,
    },
    setup() {
      const t = z(),
        l = b(() =>
          t.activeBot.backtestHistory
            ? Object.keys(t.activeBot.backtestHistory).length !== 0
            : !1
        ),
        e = b(() => {
          try {
            return t.activeBot.selectedBacktestResult.timeframe;
          } catch {
            return "";
          }
        }),
        a = c(""),
        i = c(""),
        o = c(""),
        d = c(""),
        h = c(!1),
        k = c(!1),
        f = c(!1),
        B = c(""),
        w = c(""),
        s = c(""),
        n = c("run"),
        m = c(null),
        _ = c(O(U())),
        g = (u) => {
          t.activeBot.setBacktestResultKey(u),
            (a.value = t.activeBot.selectedBacktestResult.strategy_name),
            (i.value = t.activeBot.selectedBacktestResult.timeframe),
            (o.value =
              t.activeBot.selectedBacktestResult.timeframe_detail || ""),
            (d.value = t.activeBot.selectedBacktestResult.timerange);
        },
        R = () => {
          const u = {
              strategy: a.value,
              timerange: d.value,
              enable_protections: k.value,
            },
            p = parseInt(B.value, 10);
          if ((p && (u.max_open_trades = p), f.value))
            u.stake_amount = "unlimited";
          else {
            const T = Number(w.value);
            T && (u.stake_amount = T.toString());
          }
          const $ = Number(s.value);
          $ && (u.dry_run_wallet = $),
            i.value && (u.timeframe = i.value),
            o.value && (u.timeframe_detail = o.value),
            t.activeBot.startBacktest(u);
        };
      return (
        D(() => t.activeBot.getState()),
        N(
          () => t.activeBot.backtestRunning,
          () => {
            t.activeBot.backtestRunning === !0
              ? (m.value = window.setInterval(t.activeBot.pollBacktest, 1e3))
              : m.value && (clearInterval(m.value), (m.value = null));
          }
        ),
        {
          botStore: t,
          formatPercent: r,
          hasBacktestResult: l,
          timeframe: e,
          setBacktestResult: g,
          strategy: a,
          selectedTimeframe: i,
          selectedDetailTimeframe: o,
          timerange: d,
          enableProtections: k,
          showLeftBar: h,
          stakeAmountUnlimited: f,
          maxOpenTrades: B,
          stakeAmount: w,
          startingCapital: s,
          btFormMode: n,
          selectedPlotConfig: _,
          clickBacktest: R,
        }
      );
    },
  }),
  bt = function () {
    var t = this,
      l = t.$createElement,
      e = t._self._c || l;
    return e(
      "div",
      {
        staticClass: "container-fluid",
        staticStyle: { "max-height": "calc(100vh - 60px)" },
      },
      [
        e("div", { staticClass: "container-fluid" }, [
          e("div", { staticClass: "row mb-2" }),
          t.botStore.activeBot.canRunBacktest
            ? t._e()
            : e("p", [
                t._v(" Bot must be in webserver mode to enable Backtesting. "),
              ]),
          e("div", { staticClass: "row w-100" }, [
            e("h2", { staticClass: "col-4 col-lg-3" }, [t._v("Backtesting")]),
            e(
              "div",
              {
                staticClass:
                  "col-12 col-lg-order-last col-lg-6 mx-md-5 d-flex flex-wrap justify-content-md-center justify-content-between mb-4",
                attrs: { disabled: t.botStore.activeBot.canRunBacktest },
              },
              [
                t.botStore.activeBot.botApiVersion >= 2.15
                  ? e(
                      "b-form-radio",
                      {
                        staticClass: "mx-1 flex-samesize-items",
                        attrs: {
                          name: "bt-form-radios",
                          button: "",
                          value: "historicResults",
                          disabled: !t.botStore.activeBot.canRunBacktest,
                        },
                        model: {
                          value: t.btFormMode,
                          callback: function (a) {
                            t.btFormMode = a;
                          },
                          expression: "btFormMode",
                        },
                      },
                      [t._v("Load Results")]
                    )
                  : t._e(),
                e(
                  "b-form-radio",
                  {
                    staticClass: "mx-1 flex-samesize-items",
                    attrs: {
                      name: "bt-form-radios",
                      button: "",
                      value: "run",
                      disabled: !t.botStore.activeBot.canRunBacktest,
                    },
                    model: {
                      value: t.btFormMode,
                      callback: function (a) {
                        t.btFormMode = a;
                      },
                      expression: "btFormMode",
                    },
                  },
                  [t._v("Run backtest")]
                ),
                e(
                  "b-form-radio",
                  {
                    staticClass: "mx-1 flex-samesize-items",
                    attrs: {
                      id: "bt-analyze-btn",
                      name: "bt-form-radios",
                      button: "",
                      value: "results",
                      disabled: !t.hasBacktestResult,
                    },
                    model: {
                      value: t.btFormMode,
                      callback: function (a) {
                        t.btFormMode = a;
                      },
                      expression: "btFormMode",
                    },
                  },
                  [t._v("Analyze result")]
                ),
                e(
                  "b-form-radio",
                  {
                    staticClass: "mx-1 flex-samesize-items",
                    attrs: {
                      name: "bt-form-radios",
                      button: "",
                      value: "visualize-summary",
                      disabled: !t.hasBacktestResult,
                    },
                    model: {
                      value: t.btFormMode,
                      callback: function (a) {
                        t.btFormMode = a;
                      },
                      expression: "btFormMode",
                    },
                  },
                  [t._v("Visualize summary")]
                ),
                e(
                  "b-form-radio",
                  {
                    staticClass: "mx-1 flex-samesize-items",
                    attrs: {
                      name: "bt-form-radios",
                      button: "",
                      value: "visualize",
                      disabled: !t.hasBacktestResult,
                    },
                    model: {
                      value: t.btFormMode,
                      callback: function (a) {
                        t.btFormMode = a;
                      },
                      expression: "btFormMode",
                    },
                  },
                  [t._v("Visualize result")]
                ),
              ],
              1
            ),
            e(
              "small",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.botStore.activeBot.backtestRunning,
                    expression: "botStore.activeBot.backtestRunning",
                  },
                ],
                staticClass: "text-right bt-running-label col-8 col-lg-3",
              },
              [
                t._v(
                  "Backtest running: " +
                    t._s(t.botStore.activeBot.backtestStep) +
                    " " +
                    t._s(
                      t.formatPercent(t.botStore.activeBot.backtestProgress, 2)
                    )
                ),
              ]
            ),
          ]),
        ]),
        e(
          "div",
          { staticClass: "d-md-flex" },
          [
            e(
              "div",
              {
                class: `${
                  t.showLeftBar ? "col-md-3" : ""
                } sticky-top sticky-offset mr-3 d-flex flex-column`,
              },
              [
                t.btFormMode !== "visualize"
                  ? e(
                      "b-button",
                      {
                        staticClass: "align-self-start",
                        attrs: { "aria-label": "Close", size: "sm" },
                        on: {
                          click: function (a) {
                            t.showLeftBar = !t.showLeftBar;
                          },
                        },
                      },
                      [t._v(t._s(t.showLeftBar ? "<" : ">"))]
                    )
                  : t._e(),
                e(
                  "transition",
                  { attrs: { name: "fade", mode: "in-out" } },
                  [
                    t.btFormMode !== "visualize" && t.showLeftBar
                      ? e("BacktestResultSelect", {
                          attrs: {
                            "backtest-history":
                              t.botStore.activeBot.backtestHistory,
                            "selected-backtest-result-key":
                              t.botStore.activeBot.selectedBacktestResultKey,
                          },
                          on: { selectionChange: t.setBacktestResult },
                        })
                      : t._e(),
                  ],
                  1
                ),
              ],
              1
            ),
            t.btFormMode == "historicResults"
              ? e(
                  "div",
                  { staticClass: "flex-fill row d-flex flex-column bt-config" },
                  [e("backtest-history-load")],
                  1
                )
              : t._e(),
            t.btFormMode == "run"
              ? e(
                  "div",
                  { staticClass: "flex-fill row d-flex flex-column bt-config" },
                  [
                    e(
                      "div",
                      { staticClass: "mb-2" },
                      [
                        e("span", [t._v("Strategy")]),
                        e("StrategySelect", {
                          model: {
                            value: t.strategy,
                            callback: function (a) {
                              t.strategy = a;
                            },
                            expression: "strategy",
                          },
                        }),
                      ],
                      1
                    ),
                    e(
                      "b-card",
                      {
                        attrs: {
                          "bg-variant": "light",
                          disabled: t.botStore.activeBot.backtestRunning,
                        },
                      },
                      [
                        e(
                          "b-form-group",
                          {
                            staticClass: "mb-0",
                            attrs: {
                              "label-cols-lg": "2",
                              label: "Backtest params",
                              "label-size": "sm",
                              "label-class": "font-weight-bold pt-0",
                            },
                          },
                          [
                            e(
                              "b-form-group",
                              {
                                attrs: {
                                  "label-cols-sm": "5",
                                  label: "Timeframe:",
                                  "label-align-sm": "right",
                                  "label-for": "timeframe-select",
                                },
                              },
                              [
                                e("TimeframeSelect", {
                                  attrs: { id: "timeframe-select" },
                                  model: {
                                    value: t.selectedTimeframe,
                                    callback: function (a) {
                                      t.selectedTimeframe = a;
                                    },
                                    expression: "selectedTimeframe",
                                  },
                                }),
                              ],
                              1
                            ),
                            e(
                              "b-form-group",
                              {
                                attrs: {
                                  "label-cols-sm": "5",
                                  label: "Detail Timeframe:",
                                  "label-align-sm": "right",
                                  "label-for": "timeframe-detail-select",
                                  title:
                                    "Detail timeframe, to simulate intra-candle results. Not setting this will not use this functionality.",
                                },
                              },
                              [
                                e("TimeframeSelect", {
                                  attrs: {
                                    id: "timeframe-detail-select",
                                    "below-timeframe": t.selectedTimeframe,
                                  },
                                  model: {
                                    value: t.selectedDetailTimeframe,
                                    callback: function (a) {
                                      t.selectedDetailTimeframe = a;
                                    },
                                    expression: "selectedDetailTimeframe",
                                  },
                                }),
                              ],
                              1
                            ),
                            e(
                              "b-form-group",
                              {
                                attrs: {
                                  "label-cols-sm": "5",
                                  label: "Max open trades:",
                                  "label-align-sm": "right",
                                  "label-for": "max-open-trades",
                                },
                              },
                              [
                                e("b-form-input", {
                                  attrs: {
                                    id: "max-open-trades",
                                    placeholder: "Use strategy default",
                                    type: "number",
                                  },
                                  model: {
                                    value: t.maxOpenTrades,
                                    callback: function (a) {
                                      t.maxOpenTrades = a;
                                    },
                                    expression: "maxOpenTrades",
                                  },
                                }),
                              ],
                              1
                            ),
                            e(
                              "b-form-group",
                              {
                                attrs: {
                                  "label-cols-sm": "5",
                                  label: "Starting capital:",
                                  "label-align-sm": "right",
                                  "label-for": "starting-capital",
                                },
                              },
                              [
                                e("b-form-input", {
                                  attrs: {
                                    id: "starting-capital",
                                    type: "number",
                                    step: "0.001",
                                  },
                                  model: {
                                    value: t.startingCapital,
                                    callback: function (a) {
                                      t.startingCapital = a;
                                    },
                                    expression: "startingCapital",
                                  },
                                }),
                              ],
                              1
                            ),
                            e(
                              "b-form-group",
                              {
                                attrs: {
                                  "label-cols-sm": "5",
                                  label: "Stake amount:",
                                  "label-align-sm": "right",
                                  "label-for": "stake-amount",
                                },
                              },
                              [
                                e(
                                  "div",
                                  { staticClass: "d-flex" },
                                  [
                                    e(
                                      "b-form-checkbox",
                                      {
                                        staticClass: "col-md-6",
                                        attrs: { id: "stake-amount-bool" },
                                        model: {
                                          value: t.stakeAmountUnlimited,
                                          callback: function (a) {
                                            t.stakeAmountUnlimited = a;
                                          },
                                          expression: "stakeAmountUnlimited",
                                        },
                                      },
                                      [t._v("Unlimited stake")]
                                    ),
                                    e("b-form-input", {
                                      attrs: {
                                        id: "stake-amount",
                                        type: "number",
                                        placeholder: "Use strategy default",
                                        step: "0.01",
                                        disabled: t.stakeAmountUnlimited,
                                      },
                                      model: {
                                        value: t.stakeAmount,
                                        callback: function (a) {
                                          t.stakeAmount = a;
                                        },
                                        expression: "stakeAmount",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            e(
                              "b-form-group",
                              {
                                attrs: {
                                  "label-cols-sm": "5",
                                  label: "Enable Protections:",
                                  "label-align-sm": "right",
                                  "label-for": "enable-protections",
                                },
                              },
                              [
                                e("b-form-checkbox", {
                                  attrs: { id: "enable-protections" },
                                  model: {
                                    value: t.enableProtections,
                                    callback: function (a) {
                                      t.enableProtections = a;
                                    },
                                    expression: "enableProtections",
                                  },
                                }),
                              ],
                              1
                            ),
                            e("hr"),
                            e("TimeRangeSelect", {
                              staticClass: "mt-2",
                              model: {
                                value: t.timerange,
                                callback: function (a) {
                                  t.timerange = a;
                                },
                                expression: "timerange",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e("h3", { staticClass: "mt-3" }, [
                      t._v("Backtesting summary"),
                    ]),
                    e(
                      "div",
                      {
                        staticClass:
                          "d-flex flex-wrap flex-md-nowrap justify-content-between justify-content-md-center",
                      },
                      [
                        e(
                          "b-button",
                          {
                            staticClass: "mx-1",
                            attrs: {
                              id: "start-backtest",
                              variant: "primary",
                              disabled:
                                t.botStore.activeBot.backtestRunning ||
                                !t.botStore.activeBot.canRunBacktest,
                            },
                            on: { click: t.clickBacktest },
                          },
                          [t._v(" Start backtest ")]
                        ),
                        e(
                          "b-button",
                          {
                            staticClass: "mx-1",
                            attrs: {
                              variant: "primary",
                              disabled:
                                t.botStore.activeBot.backtestRunning ||
                                !t.botStore.activeBot.canRunBacktest,
                            },
                            on: { click: t.botStore.activeBot.pollBacktest },
                          },
                          [t._v(" Load backtest result ")]
                        ),
                        e(
                          "b-button",
                          {
                            staticClass: "mx-1",
                            attrs: {
                              variant: "primary",
                              disabled: !t.botStore.activeBot.backtestRunning,
                            },
                            on: { click: t.botStore.activeBot.stopBacktest },
                          },
                          [t._v("Stop Backtest")]
                        ),
                        e(
                          "b-button",
                          {
                            staticClass: "mx-1",
                            attrs: {
                              variant: "primary",
                              disabled:
                                t.botStore.activeBot.backtestRunning ||
                                !t.botStore.activeBot.canRunBacktest,
                            },
                            on: { click: t.botStore.activeBot.removeBacktest },
                          },
                          [t._v("Reset Backtest")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : t._e(),
            t.hasBacktestResult && t.btFormMode == "results"
              ? e("BacktestResultView", {
                  staticClass: "flex-fill",
                  attrs: {
                    "backtest-result":
                      t.botStore.activeBot.selectedBacktestResult,
                  },
                })
              : t._e(),
            t.hasBacktestResult && t.btFormMode == "visualize-summary"
              ? e(
                  "div",
                  {
                    staticClass:
                      "text-center flex-fill mt-2 d-flex flex-column",
                  },
                  [
                    e("TradesLogChart", {
                      staticClass: "trades-log",
                      attrs: {
                        trades:
                          t.botStore.activeBot.selectedBacktestResult.trades,
                      },
                    }),
                    e("CumProfitChart", {
                      staticClass: "cum-profit",
                      attrs: {
                        trades:
                          t.botStore.activeBot.selectedBacktestResult.trades,
                        "profit-column": "profit_abs",
                        "show-title": !0,
                      },
                    }),
                  ],
                  1
                )
              : t._e(),
          ],
          1
        ),
        t.hasBacktestResult && t.btFormMode == "visualize"
          ? e(
              "div",
              { staticClass: "container-fluid text-center w-100 mt-2" },
              [
                e("p", { staticClass: "row" }, [
                  t._v(
                    " Graph will always show the latest values for the selected strategy. Timerange: " +
                      t._s(t.timerange) +
                      " - " +
                      t._s(t.strategy) +
                      " "
                  ),
                ]),
                e(
                  "div",
                  { staticClass: "row text-center" },
                  [
                    e("PairSummary", {
                      staticClass: "col-md-2 overflow-auto",
                      staticStyle: { "max-height": "calc(100vh - 200px)" },
                      attrs: {
                        pairlist:
                          t.botStore.activeBot.selectedBacktestResult.pairlist,
                        trades:
                          t.botStore.activeBot.selectedBacktestResult.trades,
                        "sort-method": "profit",
                        "backtest-mode": !0,
                      },
                    }),
                    e("CandleChartContainer", {
                      staticClass:
                        "col-md-10 candle-chart-container px-0 w-100 h-100",
                      attrs: {
                        "available-pairs":
                          t.botStore.activeBot.selectedBacktestResult.pairlist,
                        "historic-view": !0,
                        timeframe: t.timeframe,
                        "plot-config": t.selectedPlotConfig,
                        timerange: t.timerange,
                        strategy: t.strategy,
                        trades:
                          t.botStore.activeBot.selectedBacktestResult.trades,
                      },
                    }),
                  ],
                  1
                ),
                e(
                  "b-card",
                  {
                    staticClass: "row mt-2 w-100",
                    attrs: { header: "Single trades" },
                  },
                  [
                    e("TradeList", {
                      staticClass: "row trade-history mt-2 w-100",
                      attrs: {
                        trades:
                          t.botStore.activeBot.selectedBacktestResult.trades,
                        "show-filter": !0,
                        "stake-currency":
                          t.botStore.activeBot.selectedBacktestResult
                            .stake_currency,
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            )
          : t._e(),
      ]
    );
  },
  dt = [];
const L = {};
var _t = x(mt, bt, dt, !1, vt, "212cc60a", null, null);
function vt(t) {
  for (let l in L) this[l] = L[l];
}
var pt = (function () {
  return _t.exports;
})();
export { pt as default };
//# sourceMappingURL=Backtesting.0ef387ae.js.map
