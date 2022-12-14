import { b as T, f as x } from "./numberformat.a1b2908a.js";
import { d as u, n as l, u as g, r as f, c as v } from "./index.ef7539b9.js";
import { D as $, T as S } from "./TradeProfit.af2e34d4.js";
import { T as k } from "./TradeDetail.9dd3f930.js";
var B = u({
    components: { DateTimeTZ: $, TradeProfit: S },
    props: {
      trade: { type: Object, required: !0 },
      stakeCurrencyDecimals: { type: Number, required: !0 },
      showDetails: { type: Boolean, default: !1 },
    },
    setup() {
      return { formatPrice: T, formatPercent: x };
    },
  }),
  w = function () {
    var e = this,
      r = e.$createElement,
      t = e._self._c || r;
    return t(
      "div",
      { staticClass: "d-flex" },
      [
        t(
          "div",
          {
            staticClass:
              "px-1 d-flex flex-row flex-fill text-left justify-content-between align-items-center",
          },
          [
            t("span", [
              t("span", { staticClass: "mr-1 font-weight-bold" }, [
                e._v(e._s(e.trade.pair)),
              ]),
              t("small", { staticClass: "text-secondary" }, [
                e._v("(#" + e._s(e.trade.trade_id) + ")"),
              ]),
            ]),
            t(
              "small",
              [
                t("DateTimeTZ", {
                  attrs: {
                    date: e.trade.open_timestamp,
                    "date-only": !0,
                    title: "open Date",
                  },
                }),
              ],
              1
            ),
          ]
        ),
        t("trade-profit", { staticClass: "col-5", attrs: { trade: e.trade } }),
      ],
      1
    );
  },
  D = [];
const m = {};
var L = l(B, w, D, !1, P, "b49c299a", null, null);
function P(e) {
  for (let r in m) this[r] = m[r];
}
var M = (function () {
    return L.exports;
  })(),
  I = u({
    name: "CustomTradeList",
    components: { CustomTradeListEntry: M },
    props: {
      trades: { required: !0, type: Array },
      title: { default: "Trades", type: String },
      stakeCurrency: { required: !1, default: "", type: String },
      activeTrades: { default: !1, type: Boolean },
      showFilter: { default: !1, type: Boolean },
      multiBotView: { default: !1, type: Boolean },
      emptyText: { default: "No Trades to show.", type: String },
      stakeCurrencyDecimals: { default: 3, type: Number },
    },
    setup(e, { root: r }) {
      const t = g(),
        s = f(1),
        _ = f(""),
        c = e.activeTrades ? 200 : 25,
        C = v(() => e.trades.length),
        h = v(() => e.trades.slice((s.value - 1) * c, s.value * c));
      return {
        currentPage: s,
        filterText: _,
        perPage: c,
        filteredTrades: h,
        formatPriceWithDecimals: (a) => T(a, e.stakeCurrencyDecimals),
        forcesellHandler: (a, o = void 0) => {
          r.$bvModal
            .msgBoxConfirm(
              `Really forcesell trade ${a.trade_id} (Pair ${a.pair})?`
            )
            .then((n) => {
              if (n) {
                const i = { tradeid: String(a.trade_id), botId: a.botId };
                o && (i.ordertype = o),
                  t
                    .forceSellMulti(i)
                    .then((d) => console.log(d))
                    .catch((d) => console.log(d.response));
              }
            });
        },
        handleContextMenuEvent: (a, o, n) => {
          !e.activeTrades || (n.preventDefault(), console.log(a));
        },
        removeTradeHandler: (a) => {
          console.log(a),
            r.$bvModal
              .msgBoxConfirm(
                `Really delete trade ${a.trade_id} (Pair ${a.pair})?`
              )
              .then((o) => {
                if (o) {
                  const n = { tradeid: String(a.trade_id), botId: a.botId };
                  t.deleteTradeMulti(n).catch((i) => console.log(i.response));
                }
              });
        },
        tradeClick: (a) => {
          t.activeBot.setDetailTrade(a);
        },
        botStore: t,
        rows: C,
      };
    },
  }),
  E = function () {
    var e = this,
      r = e.$createElement,
      t = e._self._c || r;
    return t(
      "div",
      { staticClass: "h-100 overflow-auto p-1" },
      [
        t(
          "b-list-group",
          { attrs: { id: "tradeList" } },
          e._l(e.filteredTrades, function (s) {
            return t(
              "b-list-group-item",
              {
                key: s.trade_id,
                staticClass: "border border-secondary rounded my-05 px-1",
                on: {
                  click: function (_) {
                    return e.tradeClick(s);
                  },
                },
              },
              [
                t("CustomTradeListEntry", {
                  attrs: {
                    trade: s,
                    "stake-currency-decimals": e.stakeCurrencyDecimals,
                  },
                }),
              ],
              1
            );
          }),
          1
        ),
        e.trades.length == 0
          ? t("span", { staticClass: "mt-5" }, [e._v(e._s(e.emptyText))])
          : e._e(),
        t(
          "div",
          { staticClass: "w-100 d-flex justify-content-between mt-1" },
          [
            e.activeTrades
              ? e._e()
              : t("b-pagination", {
                  attrs: {
                    "total-rows": e.rows,
                    "per-page": e.perPage,
                    "aria-controls": "tradeList",
                  },
                  model: {
                    value: e.currentPage,
                    callback: function (s) {
                      e.currentPage = s;
                    },
                    expression: "currentPage",
                  },
                }),
            e.showFilter
              ? t("b-input", {
                  staticStyle: { width: "unset" },
                  attrs: { type: "text", placeholder: "Filter", size: "sm" },
                  model: {
                    value: e.filterText,
                    callback: function (s) {
                      e.filterText = s;
                    },
                    expression: "filterText",
                  },
                })
              : e._e(),
          ],
          1
        ),
      ],
      1
    );
  },
  z = [];
const p = {};
var j = l(I, E, z, !1, F, "cc2fc2d0", null, null);
function F(e) {
  for (let r in p) this[r] = p[r];
}
var H = (function () {
    return j.exports;
  })(),
  N = function () {
    var e = this,
      r = e.$createElement,
      t = e._self._c || r;
    return t(
      "span",
      e._b(
        {
          staticClass: "material-design-icon arrow-left-icon",
          attrs: {
            "aria-hidden": !e.title,
            "aria-label": e.title,
            role: "img",
          },
          on: {
            click: function (s) {
              return e.$emit("click", s);
            },
          },
        },
        "span",
        e.$attrs,
        !1
      ),
      [
        t(
          "svg",
          {
            staticClass: "material-design-icon__svg",
            attrs: {
              fill: e.fillColor,
              width: e.size,
              height: e.size,
              viewBox: "0 0 24 24",
            },
          },
          [
            t(
              "path",
              {
                attrs: {
                  d: "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",
                },
              },
              [e.title ? t("title", [e._v(e._s(e.title))]) : e._e()]
            ),
          ]
        ),
      ]
    );
  },
  R = [];
const q = {
    name: "ArrowLeftIcon",
    props: {
      title: { type: String },
      fillColor: { type: String, default: "currentColor" },
      size: { type: Number, default: 24 },
    },
  },
  y = {};
var Z = l(q, N, R, !1, A, null, null, null);
function A(e) {
  for (let r in y) this[r] = y[r];
}
var O = (function () {
    return Z.exports;
  })(),
  V = u({
    name: "TradesList",
    components: { CustomTradeList: H, TradeDetail: k, BackIcon: O },
    props: { history: { default: !1, type: Boolean } },
    setup() {
      return { botStore: g() };
    },
  }),
  W = function () {
    var e = this,
      r = e.$createElement,
      t = e._self._c || r;
    return t(
      "div",
      [
        !e.history && !e.botStore.activeBot.detailTradeId
          ? t("CustomTradeList", {
              attrs: {
                trades: e.botStore.activeBot.openTrades,
                title: "Open trades",
                "active-trades": !0,
                "stake-currency-decimals":
                  e.botStore.activeBot.stakeCurrencyDecimals,
                "empty-text": "No open Trades.",
              },
            })
          : e._e(),
        e.history && !e.botStore.activeBot.detailTradeId
          ? t("CustomTradeList", {
              attrs: {
                trades: e.botStore.activeBot.closedTrades,
                title: "Trade history",
                "stake-currency-decimals":
                  e.botStore.activeBot.stakeCurrencyDecimals,
                "empty-text": "No closed trades so far.",
              },
            })
          : e._e(),
        e.botStore.activeBot.detailTradeId
          ? t(
              "div",
              { staticClass: "d-flex flex-column" },
              [
                t(
                  "b-button",
                  {
                    staticClass: "align-self-start mt-1 ml-1",
                    attrs: { size: "sm" },
                    on: {
                      click: function (s) {
                        return e.botStore.activeBot.setDetailTrade(null);
                      },
                    },
                  },
                  [t("BackIcon"), e._v(" Back")],
                  1
                ),
                t("TradeDetail", {
                  attrs: {
                    trade: e.botStore.activeBot.tradeDetail,
                    "stake-currency": e.botStore.activeBot.stakeCurrency,
                  },
                }),
              ],
              1
            )
          : e._e(),
      ],
      1
    );
  },
  G = [];
const b = {};
var J = l(V, W, G, !1, K, null, null, null);
function K(e) {
  for (let r in b) this[r] = b[r];
}
var oe = (function () {
  return J.exports;
})();
export { oe as default };
//# sourceMappingURL=TradesList.9c394a68.js.map
