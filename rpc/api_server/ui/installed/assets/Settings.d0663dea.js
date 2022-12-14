import {
  d as a,
  e as i,
  b as c,
  G as n,
  s as l,
  n as u,
} from "./index.ef7539b9.js";
var d = a({
    name: "Settings",
    setup() {
      const e = i(),
        s = c(),
        t = ["UTC", Intl.DateTimeFormat().resolvedOptions().timeZone],
        o = [
          { value: n.showPill, text: "Show pill in icon" },
          { value: n.asTitle, text: "Show in title" },
          { value: n.noOpenTrades, text: "Don't show open trades in header" },
        ];
      return {
        resetDynamicLayout: () => {
          s.resetTradingLayout(),
            s.resetDashboardLayout(),
            l("Layouts have been reset.");
        },
        settingsStore: e,
        layoutStore: s,
        timezoneOptions: t,
        openTradesOptions: o,
      };
    },
  }),
  m = function () {
    var e = this,
      s = e.$createElement,
      t = e._self._c || s;
    return t(
      "div",
      { staticClass: "container mt-3" },
      [
        t("b-card", { attrs: { header: "libertum Settings" } }, [
          t(
            "div",
            { staticClass: "text-left" },
            [
              t("p", [e._v("UI Version: " + e._s(e.settingsStore.uiVersion))]),
              t(
                "b-form-group",
                {
                  attrs: {
                    description:
                      "Lock dynamic layouts, so they cannot move anymore. Can also be set from the navbar at the top.",
                  },
                },
                [
                  t(
                    "b-checkbox",
                    {
                      model: {
                        value: e.layoutStore.layoutLocked,
                        callback: function (o) {
                          e.$set(e.layoutStore, "layoutLocked", o);
                        },
                        expression: "layoutStore.layoutLocked",
                      },
                    },
                    [e._v("Lock layout")]
                  ),
                ],
                1
              ),
              t(
                "b-form-group",
                {
                  attrs: {
                    description: "Reset dynamic layouts to how they were.",
                  },
                },
                [
                  t(
                    "b-button",
                    {
                      attrs: { size: "sm" },
                      on: { click: e.resetDynamicLayout },
                    },
                    [e._v("Reset layout")]
                  ),
                ],
                1
              ),
              t(
                "b-form-group",
                {
                  attrs: {
                    label: "Show open trades in header",
                    description: "Decide if open trades should be visualized",
                  },
                },
                [
                  t("b-form-select", {
                    attrs: { options: e.openTradesOptions },
                    model: {
                      value: e.settingsStore.openTradesInTitle,
                      callback: function (o) {
                        e.$set(e.settingsStore, "openTradesInTitle", o);
                      },
                      expression: "settingsStore.openTradesInTitle",
                    },
                  }),
                ],
                1
              ),
              t(
                "b-form-group",
                {
                  attrs: {
                    label: "UTC Timezone",
                    description:
                      "Select timezone (we recommend UTC is recommended as exchanges usually work in UTC)",
                  },
                },
                [
                  t("b-form-select", {
                    attrs: { options: e.timezoneOptions },
                    model: {
                      value: e.settingsStore.timezone,
                      callback: function (o) {
                        e.$set(e.settingsStore, "timezone", o);
                      },
                      expression: "settingsStore.timezone",
                    },
                  }),
                ],
                1
              ),
              t(
                "b-form-group",
                {
                  attrs: {
                    description:
                      "Keep background sync running while other bots are selected.",
                  },
                },
                [
                  t(
                    "b-checkbox",
                    {
                      model: {
                        value: e.settingsStore.backgroundSync,
                        callback: function (o) {
                          e.$set(e.settingsStore, "backgroundSync", o);
                        },
                        expression: "settingsStore.backgroundSync",
                      },
                    },
                    [e._v("Background sync")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]),
      ],
      1
    );
  },
  p = [];
const r = {};
var y = u(d, m, p, !1, b, null, null, null);
function b(e) {
  for (let s in r) this[s] = r[s];
}
var g = (function () {
  return y.exports;
})();
export { g as default };
//# sourceMappingURL=Settings.d0663dea.js.map
