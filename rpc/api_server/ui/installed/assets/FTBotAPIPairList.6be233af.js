import { d as v, D as p, r, u as k, o as f, n as m } from "./index.ef7539b9.js";
var _ = v({
    name: "FTBotAPIPairList",
    components: { DeleteIcon: p },
    setup() {
      const t = r(""),
        l = r(!1),
        e = r([]),
        i = k(),
        a = () => {
          i.activeBot.whitelist.length === 0 && i.activeBot.getWhitelist(),
            i.activeBot.blacklist.length === 0 && i.activeBot.getBlacklist();
        },
        c = () => {
          t.value &&
            ((l.value = !1),
            i.activeBot.addBlacklist({ blacklist: [t.value] }),
            (t.value = ""));
        },
        u = (s) => {
          console.log(s);
          const o = e.value.indexOf(s);
          o > -1 ? e.value.splice(o, 1) : e.value.push(s);
        },
        d = () => {
          if (e.value.length === 0) {
            console.log("nothing to delete");
            return;
          }
          const s = i.activeBot.blacklist.filter(
            (o, b) => e.value.indexOf(b) > -1
          );
          console.log("Deleting pairs: ", s),
            i.activeBot.deleteBlacklist(s),
            (e.value = []);
        };
      return (
        f(() => {
          a();
        }),
        {
          addBlacklistPair: c,
          deletePairs: d,
          initBlacklist: a,
          blacklistSelectClick: u,
          botStore: i,
          newblacklistpair: t,
          blackListShow: l,
          blacklistSelect: e,
        }
      );
    },
  }),
  g = function () {
    var t = this,
      l = t.$createElement,
      e = t._self._c || l;
    return e("div", [
      e("div", [
        e("h3", [t._v("Whitelist Pairs Methods")]),
        t.botStore.activeBot.pairlistMethods.length
          ? e(
              "div",
              { staticClass: "list" },
              t._l(t.botStore.activeBot.pairlistMethods, function (i, a) {
                return e(
                  "b-list-group",
                  { key: a },
                  [
                    e(
                      "b-list-group-item",
                      { staticClass: "pair white", attrs: { href: "#" } },
                      [t._v(t._s(i))]
                    ),
                  ],
                  1
                );
              }),
              1
            )
          : t._e(),
      ]),
      e("h3", [t._v("Whitelist Pairs")]),
      t.botStore.activeBot.whitelist.length
        ? e(
            "div",
            { staticClass: "list" },
            t._l(t.botStore.activeBot.whitelist, function (i, a) {
              return e(
                "b-list-group",
                { key: a },
                [
                  e("b-list-group-item", { staticClass: "pair white" }, [
                    t._v(t._s(i)),
                  ]),
                ],
                1
              );
            }),
            1
          )
        : e("p", [
            t._v(
              "List Unavailable. Please Login and make sure server is running."
            ),
          ]),
      e("hr"),
      e(
        "div",
        [
          e(
            "label",
            {
              staticClass: "mr-auto h3",
              attrs: {
                title:
                  "Blacklist - Select (followed by a click on '-') to remove pairs",
              },
            },
            [t._v("Blacklist")]
          ),
          e(
            "div",
            { staticClass: "float-right d-flex d-flex-columns pr-1" },
            [
              e(
                "b-button",
                {
                  staticClass: "mr-1",
                  class:
                    t.botStore.activeBot.botApiVersion >= 1.12 ? "col-6" : "",
                  attrs: { id: "blacklist-add-btn", size: "sm" },
                },
                [t._v("+ ")]
              ),
              t.botStore.activeBot.botApiVersion >= 1.12
                ? e(
                    "b-button",
                    {
                      staticClass: "col-6",
                      attrs: {
                        size: "sm",
                        title:
                          "Select pairs to delete pairs from your blacklist.",
                        disabled: t.blacklistSelect.length === 0,
                      },
                      on: { click: t.deletePairs },
                    },
                    [
                      e("DeleteIcon", {
                        attrs: { size: 16, title: "Delete Bot" },
                      }),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          ),
          e(
            "b-popover",
            {
              attrs: {
                title: "Add to blacklist",
                target: "blacklist-add-btn",
                triggers: "click blur",
                show: t.blackListShow,
              },
              on: {
                "update:show": function (i) {
                  t.blackListShow = i;
                },
              },
            },
            [
              e(
                "form",
                {
                  ref: "form",
                  on: {
                    submit: function (i) {
                      i.preventDefault();
                    },
                  },
                },
                [
                  e(
                    "div",
                    [
                      e(
                        "b-form-group",
                        {
                          attrs: {
                            "label-cols": "2",
                            label: "Pair",
                            "label-for": "pair-input",
                          },
                        },
                        [
                          e("b-form-input", {
                            attrs: {
                              id: "pair-input",
                              required: "",
                              autofocus: "",
                            },
                            model: {
                              value: t.newblacklistpair,
                              callback: function (i) {
                                t.newblacklistpair = i;
                              },
                              expression: "newblacklistpair",
                            },
                          }),
                        ],
                        1
                      ),
                      e(
                        "b-button",
                        {
                          staticClass: "float-right mb-2",
                          attrs: {
                            id: "blacklist-submit",
                            size: "sm",
                            type: "submit",
                          },
                          on: { click: t.addBlacklistPair },
                        },
                        [t._v(" Add")]
                      ),
                    ],
                    1
                  ),
                ]
              ),
            ]
          ),
        ],
        1
      ),
      t.botStore.activeBot.blacklist.length
        ? e(
            "div",
            { staticClass: "list" },
            t._l(t.botStore.activeBot.blacklist, function (i, a) {
              return e(
                "b-list-group",
                { key: a },
                [
                  e(
                    "b-list-group-item",
                    {
                      staticClass: "pair black",
                      attrs: { active: t.blacklistSelect.indexOf(a) > -1 },
                      on: {
                        click: function (c) {
                          return t.blacklistSelectClick(a);
                        },
                      },
                    },
                    [
                      e("span", { staticClass: "check" }, [t._v("\u2714")]),
                      t._v(t._s(i)),
                    ]
                  ),
                ],
                1
              );
            }),
            1
          )
        : e("p", [
            t._v(
              "BlackList Unavailable. Please Login and make sure server is running."
            ),
          ]),
    ]);
  },
  h = [];
const n = {};
var B = m(_, g, h, !1, S, "a4ee380a", null, null);
function S(t) {
  for (let l in n) this[l] = n[l];
}
var x = (function () {
  return B.exports;
})();
export { x as default };
//# sourceMappingURL=FTBotAPIPairList.6be233af.js.map
