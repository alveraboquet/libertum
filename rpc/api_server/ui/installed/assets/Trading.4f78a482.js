import { D as j, a as Z, v as w } from "./DraggableContainer.7401331f.js";
import N from "./Balance.13255b2a.js";
import {
  n as l,
  d as m,
  u as p,
  r as u,
  O as q,
  a as U,
  c as s,
  o as W,
  D as J,
  t as K,
  s as Q,
  b as X,
  f,
  T as y,
} from "./index.ef7539b9.js";
import { F as Y, T as tt } from "./TradeList.dad744f9.js";
import { f as G, a as et, b as S } from "./numberformat.a1b2908a.js";
import { D as rt } from "./TradeProfit.af2e34d4.js";
import { C as at } from "./CandleChartContainer.e7b4f871.js";
import ot from "./FTBotAPIPairList.6be233af.js";
import { P as it } from "./PairSummary.369a1ae1.js";
import { T as nt } from "./TradeDetail.9dd3f930.js";
import "./install.5a6de981.js";
import "./install.0dc8b161.js";
import "./createSeriesDataSimply.dc3f9863.js";
var st = function () {
    var t = this,
      e = t.$createElement,
      r = t._self._c || e;
    return r(
      "span",
      t._b(
        {
          staticClass: "material-design-icon play-icon",
          attrs: {
            "aria-hidden": !t.title,
            "aria-label": t.title,
            role: "img",
          },
          on: {
            click: function (a) {
              return t.$emit("click", a);
            },
          },
        },
        "span",
        t.$attrs,
        !1
      ),
      [
        r(
          "svg",
          {
            staticClass: "material-design-icon__svg",
            attrs: {
              fill: t.fillColor,
              width: t.size,
              height: t.size,
              viewBox: "0 0 24 24",
            },
          },
          [
            r("path", { attrs: { d: "M8,5.14V19.14L19,12.14L8,5.14Z" } }, [
              t.title ? r("title", [t._v(t._s(t.title))]) : t._e(),
            ]),
          ]
        ),
      ]
    );
  },
  lt = [];
const ct = {
    name: "PlayIcon",
    props: {
      title: { type: String },
      fillColor: { type: String, default: "currentColor" },
      size: { type: Number, default: 24 },
    },
  },
  P = {};
var dt = l(ct, st, lt, !1, ut, null, null, null);
function ut(t) {
  for (let e in P) this[e] = P[e];
}
var _t = (function () {
    return dt.exports;
  })(),
  vt = function () {
    var t = this,
      e = t.$createElement,
      r = t._self._c || e;
    return r(
      "span",
      t._b(
        {
          staticClass: "material-design-icon stop-icon",
          attrs: {
            "aria-hidden": !t.title,
            "aria-label": t.title,
            role: "img",
          },
          on: {
            click: function (a) {
              return t.$emit("click", a);
            },
          },
        },
        "span",
        t.$attrs,
        !1
      ),
      [
        r(
          "svg",
          {
            staticClass: "material-design-icon__svg",
            attrs: {
              fill: t.fillColor,
              width: t.size,
              height: t.size,
              viewBox: "0 0 24 24",
            },
          },
          [
            r("path", { attrs: { d: "M18,18H6V6H18V18Z" } }, [
              t.title ? r("title", [t._v(t._s(t.title))]) : t._e(),
            ]),
          ]
        ),
      ]
    );
  },
  mt = [];
const pt = {
    name: "StopIcon",
    props: {
      title: { type: String },
      fillColor: { type: String, default: "currentColor" },
      size: { type: Number, default: 24 },
    },
  },
  F = {};
var bt = l(pt, vt, mt, !1, ft, null, null, null);
function ft(t) {
  for (let e in F) this[e] = F[e];
}
var yt = (function () {
    return bt.exports;
  })(),
  gt = function () {
    var t = this,
      e = t.$createElement,
      r = t._self._c || e;
    return r(
      "span",
      t._b(
        {
          staticClass: "material-design-icon pause-icon",
          attrs: {
            "aria-hidden": !t.title,
            "aria-label": t.title,
            role: "img",
          },
          on: {
            click: function (a) {
              return t.$emit("click", a);
            },
          },
        },
        "span",
        t.$attrs,
        !1
      ),
      [
        r(
          "svg",
          {
            staticClass: "material-design-icon__svg",
            attrs: {
              fill: t.fillColor,
              width: t.size,
              height: t.size,
              viewBox: "0 0 24 24",
            },
          },
          [
            r("path", { attrs: { d: "M14,19H18V5H14M6,19H10V5H6V19Z" } }, [
              t.title ? r("title", [t._v(t._s(t.title))]) : t._e(),
            ]),
          ]
        ),
      ]
    );
  },
  ht = [];
const St = {
    name: "PauseIcon",
    props: {
      title: { type: String },
      fillColor: { type: String, default: "currentColor" },
      size: { type: Number, default: 24 },
    },
  },
  D = {};
var Bt = l(St, gt, ht, !1, Ct, null, null, null);
function Ct(t) {
  for (let e in D) this[e] = D[e];
}
var kt = (function () {
    return Bt.exports;
  })(),
  $t = function () {
    var t = this,
      e = t.$createElement,
      r = t._self._c || e;
    return r(
      "span",
      t._b(
        {
          staticClass: "material-design-icon reload-icon",
          attrs: {
            "aria-hidden": !t.title,
            "aria-label": t.title,
            role: "img",
          },
          on: {
            click: function (a) {
              return t.$emit("click", a);
            },
          },
        },
        "span",
        t.$attrs,
        !1
      ),
      [
        r(
          "svg",
          {
            staticClass: "material-design-icon__svg",
            attrs: {
              fill: t.fillColor,
              width: t.size,
              height: t.size,
              viewBox: "0 0 24 24",
            },
          },
          [
            r(
              "path",
              {
                attrs: {
                  d: "M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z",
                },
              },
              [t.title ? r("title", [t._v(t._s(t.title))]) : t._e()]
            ),
          ]
        ),
      ]
    );
  },
  Lt = [];
const xt = {
    name: "ReloadIcon",
    props: {
      title: { type: String },
      fillColor: { type: String, default: "currentColor" },
      size: { type: Number, default: 24 },
    },
  },
  M = {};
var Tt = l(xt, $t, Lt, !1, wt, null, null, null);
function wt(t) {
  for (let e in M) this[e] = M[e];
}
var Pt = (function () {
    return Tt.exports;
  })(),
  Ft = function () {
    var t = this,
      e = t.$createElement,
      r = t._self._c || e;
    return r(
      "span",
      t._b(
        {
          staticClass: "material-design-icon plus-box-multiple-outline-icon",
          attrs: {
            "aria-hidden": !t.title,
            "aria-label": t.title,
            role: "img",
          },
          on: {
            click: function (a) {
              return t.$emit("click", a);
            },
          },
        },
        "span",
        t.$attrs,
        !1
      ),
      [
        r(
          "svg",
          {
            staticClass: "material-design-icon__svg",
            attrs: {
              fill: t.fillColor,
              width: t.size,
              height: t.size,
              viewBox: "0 0 24 24",
            },
          },
          [
            r(
              "path",
              {
                attrs: {
                  d: "M18 11H15V14H13V11H10V9H13V6H15V9H18M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z",
                },
              },
              [t.title ? r("title", [t._v(t._s(t.title))]) : t._e()]
            ),
          ]
        ),
      ]
    );
  },
  Dt = [];
const Mt = {
    name: "PlusBoxMultipleOutlineIcon",
    props: {
      title: { type: String },
      fillColor: { type: String, default: "currentColor" },
      size: { type: Number, default: 24 },
    },
  },
  E = {};
var Et = l(Mt, Ft, Dt, !1, It, null, null, null);
function It(t) {
  for (let e in E) this[e] = E[e];
}
var Vt = (function () {
    return Et.exports;
  })(),
  Rt = m({
    name: "ForceEntryForm",
    setup(t, { root: e }) {
      const r = p(),
        a = u(),
        c = u(""),
        _ = u(null),
        i = u(null),
        v = u(""),
        b = u(q.long),
        g = () => {
          var d;
          return (d = a.value) == null ? void 0 : d.checkValidity();
        },
        o = () => {
          if (!g()) return;
          const n = { pair: c.value };
          _.value && (n.price = Number(_.value)),
            v.value && (n.ordertype = v.value),
            i.value && (n.stakeamount = i.value),
            r.activeBot.botApiVersion >= 2.13 &&
              r.activeBot.shortAllowed &&
              (n.side = b.value),
            r.activeBot.forceentry(n),
            U(() => {
              e.$bvModal.hide("forceentry-modal");
            });
        };
      return {
        handleSubmit: o,
        botStore: r,
        form: a,
        handleEntry: (n) => {
          n.preventDefault(), o();
        },
        resetForm: () => {
          var n, d, C, k, $, L, x, T;
          console.log("resetForm"),
            (c.value = ""),
            (_.value = null),
            (i.value = null),
            r.activeBot.botApiVersion > 1.1 &&
              (v.value =
                ((d =
                  (n = r.activeBot.botState) == null
                    ? void 0
                    : n.order_types) == null
                  ? void 0
                  : d.forcebuy) ||
                ((k =
                  (C = r.activeBot.botState) == null
                    ? void 0
                    : C.order_types) == null
                  ? void 0
                  : k.force_entry) ||
                ((L =
                  ($ = r.activeBot.botState) == null
                    ? void 0
                    : $.order_types) == null
                  ? void 0
                  : L.buy) ||
                ((T =
                  (x = r.activeBot.botState) == null
                    ? void 0
                    : x.order_types) == null
                  ? void 0
                  : T.entry) ||
                "limit");
        },
        pair: c,
        price: _,
        stakeAmount: i,
        ordertype: v,
        orderSide: b,
      };
    },
  }),
  Ht = function () {
    var t = this,
      e = t.$createElement,
      r = t._self._c || e;
    return r(
      "div",
      [
        r(
          "b-modal",
          {
            ref: "modal",
            attrs: { id: "forceentry-modal", title: "Force entering a trade" },
            on: { show: t.resetForm, hidden: t.resetForm, ok: t.handleEntry },
          },
          [
            r(
              "form",
              {
                ref: "form",
                on: {
                  submit: function (a) {
                    return (
                      a.stopPropagation(),
                      a.preventDefault(),
                      t.handleSubmit.apply(null, arguments)
                    );
                  },
                },
              },
              [
                t.botStore.activeBot.botApiVersion >= 2.13 &&
                t.botStore.activeBot.shortAllowed
                  ? r(
                      "b-form-group",
                      {
                        attrs: {
                          label: "Order direction (Long or Short)",
                          "label-for": "order-direction",
                          "invalid-feedback":
                            "Stake-amount must be empty or a positive number",
                        },
                      },
                      [
                        r("b-select", {
                          staticClass: "ml-2",
                          staticStyle: { "min-width": "7em" },
                          attrs: { options: ["long", "short"] },
                          model: {
                            value: t.orderSide,
                            callback: function (a) {
                              t.orderSide = a;
                            },
                            expression: "orderSide",
                          },
                        }),
                      ],
                      1
                    )
                  : t._e(),
                r(
                  "b-form-group",
                  {
                    attrs: {
                      label: "Pair",
                      "label-for": "pair-input",
                      "invalid-feedback": "Pair is required",
                    },
                  },
                  [
                    r("b-form-input", {
                      attrs: { id: "pair-input", required: "" },
                      nativeOn: {
                        keydown: function (a) {
                          return !a.type.indexOf("key") &&
                            t._k(a.keyCode, "enter", 13, a.key, "Enter")
                            ? null
                            : t.handleEntry.apply(null, arguments);
                        },
                      },
                      model: {
                        value: t.pair,
                        callback: function (a) {
                          t.pair = a;
                        },
                        expression: "pair",
                      },
                    }),
                  ],
                  1
                ),
                r(
                  "b-form-group",
                  {
                    attrs: {
                      label: "*Price [optional]",
                      "label-for": "price-input",
                      "invalid-feedback":
                        "Price must be empty or a positive number",
                    },
                  },
                  [
                    r("b-form-input", {
                      attrs: {
                        id: "price-input",
                        type: "number",
                        step: "0.00000001",
                      },
                      nativeOn: {
                        keydown: function (a) {
                          return !a.type.indexOf("key") &&
                            t._k(a.keyCode, "enter", 13, a.key, "Enter")
                            ? null
                            : t.handleEntry.apply(null, arguments);
                        },
                      },
                      model: {
                        value: t.price,
                        callback: function (a) {
                          t.price = a;
                        },
                        expression: "price",
                      },
                    }),
                  ],
                  1
                ),
                t.botStore.activeBot.botApiVersion > 1.12
                  ? r(
                      "b-form-group",
                      {
                        attrs: {
                          label: `*Stake-amount in ${t.botStore.activeBot.stakeCurrency} [optional]`,
                          "label-for": "stake-input",
                          "invalid-feedback":
                            "Stake-amount must be empty or a positive number",
                        },
                      },
                      [
                        r("b-form-input", {
                          attrs: {
                            id: "stake-input",
                            type: "number",
                            step: "0.000001",
                          },
                          nativeOn: {
                            keydown: function (a) {
                              return !a.type.indexOf("key") &&
                                t._k(a.keyCode, "enter", 13, a.key, "Enter")
                                ? null
                                : t.handleEntry.apply(null, arguments);
                            },
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
                    )
                  : t._e(),
                t.botStore.activeBot.botApiVersion > 1.1
                  ? r(
                      "b-form-group",
                      {
                        attrs: {
                          label: "*OrderType",
                          "label-for": "ordertype-input",
                          "invalid-feedback": "OrderType",
                        },
                      },
                      [
                        r("b-select", {
                          staticClass: "ml-2",
                          staticStyle: { "min-width": "7em" },
                          attrs: { options: ["market", "limit"], size: "sm" },
                          model: {
                            value: t.ordertype,
                            callback: function (a) {
                              t.ordertype = a;
                            },
                            expression: "ordertype",
                          },
                        }),
                      ],
                      1
                    )
                  : t._e(),
              ],
              1
            ),
          ]
        ),
      ],
      1
    );
  },
  zt = [];
const I = {};
var Ot = l(Rt, Ht, zt, !1, At, null, null, null);
function At(t) {
  for (let e in I) this[e] = I[e];
}
var Gt = (function () {
    return Ot.exports;
  })(),
  jt = m({
    name: "BotControls",
    components: {
      ForceEntryForm: Gt,
      PlayIcon: _t,
      StopIcon: yt,
      PauseIcon: kt,
      ReloadIcon: Pt,
      ForceExitIcon: Y,
      ForceEntryIcon: Vt,
    },
    setup(t, { root: e }) {
      const r = p(),
        a = u(!1),
        c = s(() => {
          var o;
          return (
            ((o = r.activeBot.botState) == null ? void 0 : o.state) ===
            "running"
          );
        });
      return {
        initiateForceenter: () => {
          e.$bvModal.show("forceentry-modal");
        },
        handleStopBot: () => {
          e.$bvModal.msgBoxConfirm("Stop Bot?").then((o) => {
            o && r.activeBot.stopBot();
          });
        },
        handleStopBuy: () => {
          e.$bvModal
            .msgBoxConfirm(
              "Stop buying? libertum will continue to handle open trades."
            )
            .then((o) => {
              o && r.activeBot.stopBuy();
            });
        },
        handleReloadConfig: () => {
          e.$bvModal.msgBoxConfirm("Reload configuration?").then((o) => {
            o && r.activeBot.reloadConfig();
          });
        },
        handleForceExit: () => {
          e.$bvModal.msgBoxConfirm("Really forcesell ALL trades?").then((o) => {
            if (o) {
              const h = { tradeid: "all" };
              r.activeBot.forceexit(h);
            }
          });
        },
        forcebuyShow: a,
        botStore: r,
        isRunning: c,
      };
    },
  }),
  Zt = function () {
    var t = this,
      e = t.$createElement,
      r = t._self._c || e;
    return r(
      "div",
      [
        r(
          "button",
          {
            staticClass: "btn btn-secondary btn-sm ml-1",
            attrs: {
              disabled: !t.botStore.activeBot.isTrading || t.isRunning,
              title: "Start Trading",
            },
            on: {
              click: function (a) {
                return t.botStore.activeBot.startBot();
              },
            },
          },
          [r("PlayIcon")],
          1
        ),
        r(
          "button",
          {
            staticClass: "btn btn-secondary btn-sm ml-1",
            attrs: {
              disabled: !t.botStore.activeBot.isTrading || !t.isRunning,
              title: "Stop Trading - Also stops handling open trades.",
            },
            on: {
              click: function (a) {
                return t.handleStopBot();
              },
            },
          },
          [r("StopIcon")],
          1
        ),
        r(
          "button",
          {
            staticClass: "btn btn-secondary btn-sm ml-1",
            attrs: {
              disabled: !t.botStore.activeBot.isTrading || !t.isRunning,
              title: "StopBuy - Stops buying, but still handles open trades",
            },
            on: {
              click: function (a) {
                return t.handleStopBuy();
              },
            },
          },
          [r("PauseIcon")],
          1
        ),
        r(
          "button",
          {
            staticClass: "btn btn-secondary btn-sm ml-1",
            attrs: {
              disabled: !t.botStore.activeBot.isTrading,
              title:
                "Reload Config - reloads configuration including strategy, resetting all settings changed on the fly.",
            },
            on: {
              click: function (a) {
                return t.handleReloadConfig();
              },
            },
          },
          [r("ReloadIcon")],
          1
        ),
        r(
          "button",
          {
            staticClass: "btn btn-secondary btn-sm ml-1",
            attrs: {
              disabled: !t.botStore.activeBot.isTrading,
              title: "Force exit all",
            },
            on: {
              click: function (a) {
                return t.handleForceExit();
              },
            },
          },
          [r("ForceExitIcon")],
          1
        ),
        t.botStore.activeBot.botState &&
        (t.botStore.activeBot.botState.force_entry_enable ||
          t.botStore.activeBot.botState.forcebuy_enabled)
          ? r(
              "button",
              {
                staticClass: "btn btn-secondary btn-sm ml-1",
                attrs: {
                  disabled: !t.botStore.activeBot.isTrading || !t.isRunning,
                  title:
                    "Force enter - Immediately enter a trade at an optional price. Exits are then handled according to strategy rules.",
                },
                on: { click: t.initiateForceenter },
              },
              [r("ForceEntryIcon")],
              1
            )
          : t._e(),
        (t.botStore.activeBot.isWebserverMode, t._e()),
        r("ForceEntryForm", {
          attrs: { "modal-show": t.forcebuyShow },
          on: {
            close: function (a) {
              return t.$bvModal.hide("forceentry-modal");
            },
          },
        }),
      ],
      1
    );
  },
  Nt = [];
const V = {};
var qt = l(jt, Zt, Nt, !1, Ut, null, null, null);
function Ut(t) {
  for (let e in V) this[e] = V[e];
}
var Wt = (function () {
    return qt.exports;
  })(),
  Jt = m({
    name: "BotStatus",
    components: { DateTimeTZ: rt },
    setup() {
      const t = p();
      return { formatPercent: G, formatPriceCurrency: et, botStore: t };
    },
  }),
  Kt = function () {
    var t,
      e = this,
      r = e.$createElement,
      a = e._self._c || r;
    return e.botStore.activeBot.botState
      ? a("div", [
          a("p", [
            e._v(" Running libertum "),
            a("strong", [e._v(e._s(e.botStore.activeBot.version))]),
          ]),
          a("p", [
            e._v(" Running with "),
            a("strong", [
              e._v(
                " " +
                  e._s(e.botStore.activeBot.botState.max_open_trades) +
                  "x" +
                  e._s(e.botStore.activeBot.botState.stake_amount) +
                  " " +
                  e._s(e.botStore.activeBot.botState.stake_currency) +
                  " "
              ),
            ]),
            e._v(" on "),
            a("strong", [e._v(e._s(e.botStore.activeBot.botState.exchange))]),
            e._v(" in "),
            a("strong", [
              e._v(e._s(e.botStore.activeBot.botState.trading_mode || "spot")),
            ]),
            e._v(" markets, with Strategy "),
            a("strong", [e._v(e._s(e.botStore.activeBot.botState.strategy))]),
          ]),
          a("p", [
            e._v(" Currently "),
            a("strong", [e._v(e._s(e.botStore.activeBot.botState.state))]),
            e._v(", "),
            a("strong", [
              e._v(
                "force entry: " +
                  e._s(
                    e.botStore.activeBot.botState.force_entry_enable ||
                      e.botStore.activeBot.botState.forcebuy_enabled
                  )
              ),
            ]),
          ]),
          a("p", [
            a("strong", [
              e._v(
                e._s(e.botStore.activeBot.botState.dry_run ? "Dry-Run" : "Live")
              ),
            ]),
          ]),
          a("hr"),
          a("p", [
            e._v(
              " Avg Profit " +
                e._s(
                  e.formatPercent(
                    e.botStore.activeBot.profit.profit_all_ratio_mean
                  )
                ) +
                " (\u2211 " +
                e._s(
                  e.formatPercent(
                    e.botStore.activeBot.profit.profit_all_ratio_sum
                  )
                ) +
                ") in " +
                e._s(e.botStore.activeBot.profit.trade_count) +
                " Trades, with an average duration of " +
                e._s(e.botStore.activeBot.profit.avg_duration) +
                ". Best pair: " +
                e._s(e.botStore.activeBot.profit.best_pair) +
                ". "
            ),
          ]),
          e.botStore.activeBot.profit.first_trade_timestamp
            ? a("p", [
                e._v(" First trade opened: "),
                a(
                  "strong",
                  [
                    a("DateTimeTZ", {
                      attrs: {
                        date: e.botStore.activeBot.profit.first_trade_timestamp,
                        "show-timezone": "",
                      },
                    }),
                  ],
                  1
                ),
                a("br"),
                e._v(" Last trade opened: "),
                a(
                  "strong",
                  [
                    a("DateTimeTZ", {
                      attrs: {
                        date: e.botStore.activeBot.profit
                          .latest_trade_timestamp,
                        "show-timezone": "",
                      },
                    }),
                  ],
                  1
                ),
              ])
            : e._e(),
          a("p", [
            e.botStore.activeBot.profit.profit_factor
              ? a("span", [
                  e._v(
                    " Profit factor: " +
                      e._s(
                        e.botStore.activeBot.profit.profit_factor.toFixed(2)
                      ) +
                      " "
                  ),
                ])
              : e._e(),
            a("br"),
            e.botStore.activeBot.profit.trading_volume
              ? a("span", [
                  e._v(
                    " Trading volume: " +
                      e._s(
                        e.formatPriceCurrency(
                          e.botStore.activeBot.profit.trading_volume,
                          e.botStore.activeBot.botState.stake_currency,
                          (t =
                            e.botStore.activeBot.botState
                              .stake_currency_decimals) !== null && t !== void 0
                            ? t
                            : 3
                        )
                      ) +
                      " "
                  ),
                ])
              : e._e(),
          ]),
        ])
      : e._e();
  },
  Qt = [];
const R = {};
var Xt = l(Jt, Kt, Qt, !1, Yt, null, null, null);
function Yt(t) {
  for (let e in R) this[e] = R[e];
}
var te = (function () {
    return Xt.exports;
  })(),
  ee = m({
    name: "DailyStats",
    components: { DailyChart: j },
    setup() {
      const t = p(),
        e = s(() => [
          { key: "date", label: "Day" },
          { key: "abs_profit", label: "Profit", formatter: (r) => S(r) },
          {
            key: "fiat_value",
            label: `In ${t.activeBot.dailyStats.fiat_display_currency}`,
            formatter: (r) => S(r, 2),
          },
          { key: "trade_count", label: "Trades" },
          t.activeBot.botApiVersion >= 2.16
            ? { key: "rel_profit", label: "Profit%", formatter: (r) => G(r, 2) }
            : null,
        ]);
      return (
        W(() => {
          t.activeBot.getDaily();
        }),
        { botStore: t, dailyFields: e }
      );
    },
  }),
  re = function () {
    var t = this,
      e = t.$createElement,
      r = t._self._c || e;
    return r("div", [
      r(
        "div",
        { staticClass: "mb-2" },
        [
          r("label", { staticClass: "mr-auto h3" }, [t._v("Daily Stats")]),
          r(
            "b-button",
            {
              staticClass: "float-right",
              attrs: { size: "sm" },
              on: { click: t.botStore.activeBot.getDaily },
            },
            [t._v("\u21BB")]
          ),
        ],
        1
      ),
      r(
        "div",
        [
          t.botStore.activeBot.dailyStats.data
            ? r("DailyChart", {
                attrs: { "daily-stats": t.botStore.activeBot.dailyStats },
              })
            : t._e(),
        ],
        1
      ),
      r(
        "div",
        [
          r("b-table", {
            staticClass: "table-sm",
            attrs: {
              items: t.botStore.activeBot.dailyStats.data,
              fields: t.dailyFields,
            },
          }),
        ],
        1
      ),
    ]);
  },
  ae = [];
const H = {};
var oe = l(ee, re, ae, !1, ie, null, null, null);
function ie(t) {
  for (let e in H) this[e] = H[e];
}
var ne = (function () {
    return oe.exports;
  })(),
  se = m({
    name: "PairLockList",
    components: { DeleteIcon: J },
    setup() {
      const t = p();
      return {
        timestampms: K,
        botStore: t,
        tableFields: [
          { key: "pair", label: "Pair" },
          {
            key: "lock_end_timestamp",
            label: "Until",
            formatter: "timestampms",
          },
          { key: "reason", label: "Reason" },
          { key: "actions" },
        ],
        removePairLock: (a) => {
          console.log(a),
            a.id !== void 0
              ? t.activeBot.deleteLock(a.id)
              : Q("This libertum version does not support deleting locks.");
        },
      };
    },
  }),
  le = function () {
    var t = this,
      e = t.$createElement,
      r = t._self._c || e;
    return r("div", [
      r(
        "div",
        { staticClass: "mb-2" },
        [
          r("label", { staticClass: "mr-auto h3" }, [t._v("Pair Locks")]),
          r(
            "b-button",
            {
              staticClass: "float-right",
              attrs: { size: "sm" },
              on: { click: t.botStore.activeBot.getLocks },
            },
            [t._v("\u21BB")]
          ),
        ],
        1
      ),
      r(
        "div",
        [
          r("b-table", {
            staticClass: "table-sm",
            attrs: {
              items: t.botStore.activeBot.activeLocks,
              fields: t.tableFields,
            },
            scopedSlots: t._u([
              {
                key: "cell(actions)",
                fn: function (a) {
                  return [
                    r(
                      "b-button",
                      {
                        staticClass: "btn-xs ml-1",
                        attrs: { size: "sm", title: "Delete trade" },
                        on: {
                          click: function (c) {
                            return t.removePairLock(a.item);
                          },
                        },
                      },
                      [r("DeleteIcon", { attrs: { size: 16 } })],
                      1
                    ),
                  ];
                },
              },
            ]),
          }),
        ],
        1
      ),
    ]);
  },
  ce = [];
const z = {};
var de = l(se, le, ce, !1, ue, null, null, null);
function ue(t) {
  for (let e in z) this[e] = z[e];
}
var _e = (function () {
    return de.exports;
  })(),
  ve = m({
    name: "Performance",
    setup() {
      const t = p();
      return {
        tableFields: s(() => {
          var r;
          return [
            { key: "pair", label: "Pair" },
            { key: "profit", label: "Profit %" },
            {
              key: "profit_abs",
              label: `Profit ${
                (r = t.activeBot.botState) == null ? void 0 : r.stake_currency
              }`,
              formatter: (a) => S(a, 5),
            },
            { key: "count", label: "Count" },
          ];
        }),
        botStore: t,
      };
    },
  }),
  me = function () {
    var t = this,
      e = t.$createElement,
      r = t._self._c || e;
    return r(
      "div",
      [
        t._m(0),
        r("b-table", {
          staticClass: "table-sm",
          attrs: {
            items: t.botStore.activeBot.performanceStats,
            fields: t.tableFields,
          },
        }),
      ],
      1
    );
  },
  pe = [
    function () {
      var t = this,
        e = t.$createElement,
        r = t._self._c || e;
      return r("div", { staticClass: "mb-2" }, [
        r("h3", [t._v("Performance")]),
      ]);
    },
  ];
const O = {};
var be = l(ve, me, pe, !1, fe, null, null, null);
function fe(t) {
  for (let e in O) this[e] = O[e];
}
var ye = (function () {
    return be.exports;
  })(),
  ge = m({
    name: "Trading",
    components: {
      Balance: N,
      BotControls: Wt,
      BotStatus: te,
      CandleChartContainer: at,
      DailyStats: ne,
      DraggableContainer: Z,
      FTBotAPIPairList: ot,
      GridItem: w.exports.GridItem,
      GridLayout: w.exports.GridLayout,
      PairLockList: _e,
      PairSummary: it,
      Performance: ye,
      TradeDetail: nt,
      TradeList: tt,
    },
    setup() {
      const t = p(),
        e = X(),
        r = u(""),
        a = (d) => {
          r.value = d;
        },
        c = s(() => ["", "sm", "md", "lg", "xl"].includes(r.value)),
        _ = s(() => e.layoutLocked || !c),
        i = s(() => (c ? e.tradingLayout : [...e.getTradingLayoutSm])),
        v = s(() => f(i.value, y.multiPane)),
        b = s(() => f(i.value, y.openTrades)),
        g = s(() => f(i.value, y.tradeHistory)),
        o = s(() => f(i.value, y.tradeDetail)),
        h = s(() => f(i.value, y.chartView)),
        B = s(() => ({ sm: e.getTradingLayoutSm }));
      return {
        botStore: t,
        layoutStore: e,
        breakpointChanged: a,
        layoutUpdatedEvent: (d) => {
          c && (e.tradingLayout = d);
        },
        isLayoutLocked: _,
        gridLayout: i,
        gridLayoutMultiPane: v,
        gridLayoutOpenTrades: b,
        gridLayoutTradeHistory: g,
        gridLayoutTradeDetail: o,
        gridLayoutChartView: h,
        responsiveGridLayouts: B,
        isResizableLayout: c,
      };
    },
  }),
  he = function () {
    var t = this,
      e = t.$createElement,
      r = t._self._c || e;
    return r(
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
          cols: { lg: 12, md: 12, sm: 12, xs: 4, xxs: 2 },
        },
        on: {
          "layout-updated": t.layoutUpdatedEvent,
          "breakpoint-changed": t.breakpointChanged,
        },
      },
      [
        t.gridLayoutMultiPane.h != 0
          ? r(
              "GridItem",
              {
                attrs: {
                  i: t.gridLayoutMultiPane.i,
                  x: t.gridLayoutMultiPane.x,
                  y: t.gridLayoutMultiPane.y,
                  w: t.gridLayoutMultiPane.w,
                  h: t.gridLayoutMultiPane.h,
                  "drag-allow-from": ".card-header",
                },
              },
              [
                r(
                  "DraggableContainer",
                  { attrs: { header: "Multi Pane" } },
                  [
                    r(
                      "b-tabs",
                      {
                        staticClass: "mt-1",
                        attrs: { "content-class": "mt-3" },
                      },
                      [
                        r(
                          "b-tab",
                          { attrs: { title: "Trade Pairs", active: "" } },
                          [
                            r("PairSummary", {
                              attrs: {
                                pairlist: t.botStore.activeBot.whitelist,
                                "current-locks":
                                  t.botStore.activeBot.activeLocks,
                                trades: t.botStore.activeBot.openTrades,
                              },
                            }),
                          ],
                          1
                        ),
                        r(
                          "b-tab",
                          { attrs: { title: "General Settings" } },
                          [
                            r(
                              "div",
                              { staticClass: "d-flex justify-content-center" },
                              [r("BotControls", { staticClass: "mt-1 mb-2" })],
                              1
                            ),
                            r("BotStatus"),
                          ],
                          1
                        ),
                        r(
                          "b-tab",
                          { attrs: { title: "Trade Performance" } },
                          [
                            r("Performance", {
                              staticClass: "performance-view",
                            }),
                          ],
                          1
                        ),
                        r(
                          "b-tab",
                          { attrs: { title: "Wallet Balance", lazy: "" } },
                          [r("Balance")],
                          1
                        ),
                        r(
                          "b-tab",
                          { attrs: { title: "Daily Trade Stats", lazy: "" } },
                          [r("DailyStats")],
                          1
                        ),
                        r(
                          "b-tab",
                          { attrs: { title: "Trade Pairlist", lazy: "" } },
                          [r("FTBotAPIPairList")],
                          1
                        ),
                        r(
                          "b-tab",
                          { attrs: { title: "Trade Pair Locks", lazy: "" } },
                          [r("PairLockList")],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            )
          : t._e(),
        t.gridLayoutOpenTrades.h != 0
          ? r(
              "GridItem",
              {
                attrs: {
                  i: t.gridLayoutOpenTrades.i,
                  x: t.gridLayoutOpenTrades.x,
                  y: t.gridLayoutOpenTrades.y,
                  w: t.gridLayoutOpenTrades.w,
                  h: t.gridLayoutOpenTrades.h,
                  "drag-allow-from": ".card-header",
                },
              },
              [
                r(
                  "DraggableContainer",
                  { attrs: { header: "Open Trades" } },
                  [
                    r("TradeList", {
                      staticClass: "open-trades",
                      attrs: {
                        trades: t.botStore.activeBot.openTrades,
                        title: "Open trades",
                        "active-trades": !0,
                        "empty-text": "Currently no open trades.",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            )
          : t._e(),
        t.gridLayoutTradeHistory.h != 0
          ? r(
              "GridItem",
              {
                attrs: {
                  i: t.gridLayoutTradeHistory.i,
                  x: t.gridLayoutTradeHistory.x,
                  y: t.gridLayoutTradeHistory.y,
                  w: t.gridLayoutTradeHistory.w,
                  h: t.gridLayoutTradeHistory.h,
                  "drag-allow-from": ".card-header",
                },
              },
              [
                r(
                  "DraggableContainer",
                  { attrs: { header: "Closed Trades" } },
                  [
                    r("TradeList", {
                      staticClass: "trade-history",
                      attrs: {
                        trades: t.botStore.activeBot.closedTrades,
                        title: "Trade history",
                        "show-filter": !0,
                        "empty-text": "No closed trades so far.",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            )
          : t._e(),
        t.botStore.activeBot.detailTradeId && t.gridLayoutTradeDetail.h != 0
          ? r(
              "GridItem",
              {
                attrs: {
                  i: t.gridLayoutTradeDetail.i,
                  x: t.gridLayoutTradeDetail.x,
                  y: t.gridLayoutTradeDetail.y,
                  w: t.gridLayoutTradeDetail.w,
                  h: t.gridLayoutTradeDetail.h,
                  "min-h": 4,
                  "drag-allow-from": ".card-header",
                },
              },
              [
                r(
                  "DraggableContainer",
                  { attrs: { header: "Trade Detail" } },
                  [
                    r("TradeDetail", {
                      attrs: {
                        trade: t.botStore.activeBot.tradeDetail,
                        "stake-currency": t.botStore.activeBot.stakeCurrency,
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            )
          : t._e(),
        t.gridLayoutTradeDetail.h != 0
          ? r(
              "GridItem",
              {
                attrs: {
                  i: t.gridLayoutChartView.i,
                  x: t.gridLayoutChartView.x,
                  y: t.gridLayoutChartView.y,
                  w: t.gridLayoutChartView.w,
                  h: t.gridLayoutChartView.h,
                  "min-h": 6,
                  "drag-allow-from": ".card-header",
                },
              },
              [
                r(
                  "DraggableContainer",
                  { attrs: { header: "Chart" } },
                  [
                    r("CandleChartContainer", {
                      attrs: {
                        "available-pairs": t.botStore.activeBot.whitelist,
                        "historic-view": !1,
                        timeframe: t.botStore.activeBot.timeframe,
                        trades: t.botStore.activeBot.allTrades,
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            )
          : t._e(),
      ],
      1
    );
  },
  Se = [];
const A = {};
var Be = l(ge, he, Se, !1, Ce, null, null, null);
function Ce(t) {
  for (let e in A) this[e] = A[e];
}
var Re = (function () {
  return Be.exports;
})();
export { Re as default };
//# sourceMappingURL=Trading.4f78a482.js.map
