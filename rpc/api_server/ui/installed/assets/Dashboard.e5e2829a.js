import { b as S } from "./numberformat.a1b2908a.js";
import {
  d as T,
  u as x,
  c as l,
  n as k,
  b as D,
  r as O,
  o as B,
  f as u,
  F as c,
} from "./index.ef7539b9.js";
import { v as _, D as w, a as I } from "./DraggableContainer.7401331f.js";
import { C as G, T as P } from "./TradesLog.4b1d0f81.js";
import { P as $ } from "./TradeProfit.af2e34d4.js";
import { T as R } from "./TradeList.dad744f9.js";
import "./install.5a6de981.js";
import "./install.0dc8b161.js";
var A = T({
    name: "BotComparisonList",
    components: { ProfitPill: $ },
    setup() {
      const t = x(),
        r = [
          { key: "botName", label: "Bot" },
          { key: "trades", label: "Trades" },
          { key: "profitOpen", label: "Open Profit" },
          { key: "profitClosed", label: "Closed Profit" },
          { key: "balance", label: "Balance" },
          { key: "winVsLoss", label: "W/L" },
        ],
        e = l(() => {
          const a = [],
            i = {
              botId: void 0,
              botName: "Summary",
              profitClosed: 0,
              profitClosedRatio: void 0,
              profitOpen: 0,
              profitOpenRatio: void 0,
              stakeCurrency: "USDT",
              wins: 0,
              losses: 0,
            };
          return (
            Object.entries(t.allProfit).forEach(([s, o]) => {
              var m, p, y, f;
              const b = t.allOpenTrades[s].reduce(
                  (n, d) => n + d.stake_amount,
                  0
                ),
                g =
                  t.allOpenTrades[s].reduce(
                    (n, d) => n + d.profit_ratio * d.stake_amount,
                    0
                  ) / b,
                h = t.allOpenTrades[s].reduce((n, d) => {
                  var C;
                  return n + ((C = d.profit_abs) != null ? C : 0);
                }, 0);
              a.push({
                botId: s,
                botName: t.availableBots[s].botName,
                trades: `${t.allOpenTradeCount[s]} / ${
                  ((m = t.allBotState[s]) == null
                    ? void 0
                    : m.max_open_trades) || "N/A"
                }`,
                profitClosed: o.profit_closed_coin,
                profitClosedRatio: o.profit_closed_ratio || 0,
                stakeCurrency:
                  ((p = t.allBotState[s]) == null
                    ? void 0
                    : p.stake_currency) || "",
                profitOpenRatio: g,
                profitOpen: h,
                wins: o.winning_trades,
                losses: o.losing_trades,
                balance: (y = t.allBalance[s]) == null ? void 0 : y.total,
                stakeCurrencyDecimals:
                  ((f = t.allBotState[s]) == null
                    ? void 0
                    : f.stake_currency_decimals) || 3,
              }),
                o.profit_closed_coin !== void 0 &&
                  ((i.profitClosed += o.profit_closed_coin),
                  (i.profitOpen += o.profit_all_coin),
                  (i.wins += o.winning_trades),
                  (i.losses += o.losing_trades));
            }),
            a.push(i),
            a
          );
        });
      return { formatPrice: S, tableFields: r, tableItems: e, botStore: t };
    },
  }),
  N = function () {
    var t = this,
      r = t.$createElement,
      e = t._self._c || r;
    return e("b-table", {
      ref: "tradesTable",
      attrs: {
        small: "",
        hover: "",
        "show-empty": "",
        "primary-key": "botId",
        items: t.tableItems,
        fields: t.tableFields,
      },
      scopedSlots: t._u([
        {
          key: "cell(botName)",
          fn: function (a) {
            return [
              e(
                "div",
                { staticClass: "d-flex flex-row" },
                [
                  a.item.botId && t.botStore.botCount > 1
                    ? e("b-form-checkbox", {
                        attrs: { title: "Show bot in Dashboard" },
                        model: {
                          value: t.botStore.botStores[a.item.botId].isSelected,
                          callback: function (i) {
                            t.$set(
                              t.botStore.botStores[a.item.botId],
                              "isSelected",
                              i
                            );
                          },
                          expression:
                            "botStore.botStores[row.item.botId].isSelected",
                        },
                      })
                    : t._e(),
                  e("span", [t._v(t._s(a.value))]),
                ],
                1
              ),
            ];
          },
        },
        {
          key: "cell(profitOpen)",
          fn: function (a) {
            return [
              a.item.profitOpen && a.item.botId != "Summary"
                ? e("profit-pill", {
                    attrs: {
                      "profit-ratio": a.item.profitOpenRatio,
                      "profit-abs": a.item.profitOpen,
                      "stake-currency": a.item.stakeCurrency,
                    },
                  })
                : t._e(),
            ];
          },
        },
        {
          key: "cell(profitClosed)",
          fn: function (a) {
            return [
              a.item.profitClosed && a.item.botId != "Summary"
                ? e("profit-pill", {
                    attrs: {
                      "profit-ratio": a.item.profitClosedRatio,
                      "profit-abs": a.item.profitClosed,
                      "stake-currency": a.item.stakeCurrency,
                    },
                  })
                : t._e(),
            ];
          },
        },
        {
          key: "cell(balance)",
          fn: function (a) {
            return [
              a.item.balance
                ? e("div", [
                    e("span", { attrs: { title: a.item.stakeCurrency } }, [
                      t._v(
                        t._s(
                          t.formatPrice(
                            a.item.balance,
                            a.item.stakeCurrencyDecimals
                          )
                        ) + " "
                      ),
                    ]),
                    e("span", { attrs: { clas: "text-small" } }, [
                      t._v(t._s(a.item.stakeCurrency)),
                    ]),
                  ])
                : t._e(),
            ];
          },
        },
        {
          key: "cell(winVsLoss)",
          fn: function (a) {
            return [
              a.item.losses !== void 0
                ? e("div", [
                    e("span", { staticClass: "text-profit" }, [
                      t._v(t._s(a.item.wins)),
                    ]),
                    t._v(" / "),
                    e("span", { staticClass: "text-loss" }, [
                      t._v(t._s(a.item.losses)),
                    ]),
                  ])
                : t._e(),
            ];
          },
        },
      ]),
    });
  },
  E = [];
const L = {};
var F = k(A, N, E, !1, j, null, null, null);
function j(t) {
  for (let r in L) this[r] = L[r];
}
var z = (function () {
    return F.exports;
  })(),
  M = T({
    name: "Dashboard",
    components: {
      GridLayout: _.exports.GridLayout,
      GridItem: _.exports.GridItem,
      DailyChart: w,
      CumProfitChart: G,
      TradesLogChart: P,
      BotComparisonList: z,
      TradeList: R,
      DraggableContainer: I,
    },
    setup() {
      const t = x(),
        r = D(),
        e = O(""),
        a = (n) => {
          e.value = n;
        },
        i = l(() => ["", "sm", "md", "lg", "xl"].includes(e.value)),
        s = l(() => r.layoutLocked || !i),
        o = l(() => (i ? r.dashboardLayout : [...r.getDashboardLayoutSm])),
        b = (n) => {
          i &&
            (console.log("newlayout", n),
            console.log("saving dashboard"),
            (r.dashboardLayout = n));
        },
        g = l(() => u(o.value, c.dailyChart)),
        h = l(() => u(o.value, c.botComparison)),
        m = l(() => u(o.value, c.allOpenTrades)),
        p = l(() => u(o.value, c.cumChartChart)),
        y = l(() => u(o.value, c.tradesLogChart)),
        f = l(() => ({ sm: r.getDashboardLayoutSm }));
      return (
        B(async () => {
          await t.allGetDaily({ timescale: 30 }),
            t.activeBot.getOpenTrades(),
            t.activeBot.getProfit();
        }),
        {
          botStore: t,
          formatPrice: S,
          isLayoutLocked: s,
          layoutUpdatedEvent: b,
          breakpointChanged: a,
          gridLayout: o,
          gridLayoutDaily: g,
          gridLayoutBotComparison: h,
          gridLayoutAllOpenTrades: m,
          gridLayoutCumChart: p,
          gridLayoutTradesLogChart: y,
          responsiveGridLayouts: f,
        }
      );
    },
  }),
  U = function () {
    var t = this,
      r = t.$createElement,
      e = t._self._c || r;
    return e(
      "GridLayout",
      {
        staticClass: "h-100 w-100",
        attrs: {
          "row-height": 50,
          layout: t.gridLayout,
          "vertical-compact": !1,
          margin: [5, 5],
          "responsive-layouts": t.responsiveGridLayouts,
          "is-resizable": !t.isLayoutLocked,
          "is-draggable": !t.isLayoutLocked,
          responsive: !0,
          "prevent-collision": !0,
          cols: { lg: 12, md: 12, sm: 12, xs: 4, xxs: 2 },
        },
        on: {
          "layout-updated": t.layoutUpdatedEvent,
          "breakpoint-changed": t.breakpointChanged,
        },
      },
      [
        e(
          "GridItem",
          {
            attrs: {
              i: t.gridLayoutDaily.i,
              x: t.gridLayoutDaily.x,
              y: t.gridLayoutDaily.y,
              w: t.gridLayoutDaily.w,
              h: t.gridLayoutDaily.h,
              "min-w": 3,
              "min-h": 4,
              "drag-allow-from": ".drag-header",
            },
          },
          [
            e(
              "DraggableContainer",
              {
                attrs: {
                  header: `Daily Profit ${
                    t.botStore.botCount > 1 ? "combined" : ""
                  }`,
                },
              },
              [
                t.botStore.allDailyStatsSelectedBots
                  ? e("DailyChart", {
                      attrs: {
                        "daily-stats": t.botStore.allDailyStatsSelectedBots,
                        "show-title": !1,
                      },
                    })
                  : t._e(),
              ],
              1
            ),
          ],
          1
        ),
        e(
          "GridItem",
          {
            attrs: {
              i: t.gridLayoutBotComparison.i,
              x: t.gridLayoutBotComparison.x,
              y: t.gridLayoutBotComparison.y,
              w: t.gridLayoutBotComparison.w,
              h: t.gridLayoutBotComparison.h,
              "min-w": 3,
              "min-h": 4,
              "drag-allow-from": ".drag-header",
            },
          },
          [
            e(
              "DraggableContainer",
              { attrs: { header: "Bot comparison" } },
              [e("bot-comparison-list")],
              1
            ),
          ],
          1
        ),
        e(
          "GridItem",
          {
            attrs: {
              i: t.gridLayoutAllOpenTrades.i,
              x: t.gridLayoutAllOpenTrades.x,
              y: t.gridLayoutAllOpenTrades.y,
              w: t.gridLayoutAllOpenTrades.w,
              h: t.gridLayoutAllOpenTrades.h,
              "min-w": 3,
              "min-h": 4,
              "drag-allow-from": ".drag-header",
            },
          },
          [
            e(
              "DraggableContainer",
              { attrs: { header: "Open Trades" } },
              [
                e("trade-list", {
                  attrs: {
                    "active-trades": !0,
                    trades: t.botStore.allOpenTradesSelectedBots,
                    "multi-bot-view": "",
                  },
                }),
              ],
              1
            ),
          ],
          1
        ),
        e(
          "GridItem",
          {
            attrs: {
              i: t.gridLayoutCumChart.i,
              x: t.gridLayoutCumChart.x,
              y: t.gridLayoutCumChart.y,
              w: t.gridLayoutCumChart.w,
              h: t.gridLayoutCumChart.h,
              "min-w": 3,
              "min-h": 4,
              "drag-allow-from": ".drag-header",
            },
          },
          [
            e(
              "DraggableContainer",
              { attrs: { header: "Cumulative Profit" } },
              [
                e("CumProfitChart", {
                  attrs: {
                    trades: t.botStore.allTradesSelectedBots,
                    "show-title": !1,
                  },
                }),
              ],
              1
            ),
          ],
          1
        ),
        e(
          "GridItem",
          {
            attrs: {
              i: t.gridLayoutTradesLogChart.i,
              x: t.gridLayoutTradesLogChart.x,
              y: t.gridLayoutTradesLogChart.y,
              w: t.gridLayoutTradesLogChart.w,
              h: t.gridLayoutTradesLogChart.h,
              "min-w": 3,
              "min-h": 4,
              "drag-allow-from": ".drag-header",
            },
          },
          [
            e(
              "DraggableContainer",
              { attrs: { header: "Trades Log" } },
              [
                e("TradesLogChart", {
                  attrs: {
                    trades: t.botStore.allTradesSelectedBots,
                    "show-title": !1,
                  },
                }),
              ],
              1
            ),
          ],
          1
        ),
      ],
      1
    );
  },
  V = [];
const v = {};
var W = k(M, U, V, !1, q, null, null, null);
function q(t) {
  for (let r in v) this[r] = v[r];
}
var et = (function () {
  return W.exports;
})();
export { et as default };
//# sourceMappingURL=Dashboard.e5e2829a.js.map
