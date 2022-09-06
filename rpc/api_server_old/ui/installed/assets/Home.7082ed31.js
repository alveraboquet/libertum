import { d as _, B as o, n as s } from "./index.061ad1de.js";
var a = _({ name: "Home", components: { BotList: o } });
var n = function () {
    var t = this,
      r = t._self._c;
    return (
      t._self._setupProxy,
      r("div", { staticClass: "home" }, [
        r(
          "div",
          { staticClass: "container col-12 col-sm-6 col-lg-4" },
          [r("bot-list")],
          1
        ),
        r("hr"),
        r("div", {
          staticClass: "logo-svg my-5 mx-auto",
          attrs: { title: "Freqtrade logo" },
        }),
        t._m(0),
        r("div", [t._v("This page allows you to control your trading bot.")]),
        r("br"),
        t._m(1),
        t._m(2),
      ])
    );
  },
  l = [
    function () {
      var e = this,
        t = e._self._c;
      return (
        e._self._setupProxy,
        t("div", [t("h1", [e._v("Welcome to the Liberatum")])])
      );
    },
    function () {
      var e = this,
        t = e._self._c;
      return (
        e._self._setupProxy,
        t("p", [
          e._v(" "),
          t("a", { attrs: { href: "" } }, [
            e._v(""),
          ]),
          e._v(". "),
        ])
      );
    },
    function () {
      var e = this,
        t = e._self._c;
      return (
        e._self._setupProxy,
        t("p", [
          e._v(" "),
          t("i", [e._v("")]),
        ])
      );
    },
  ],
  i = s(a, n, l, !1, null, "78284c42", null, null),
  v = i.exports;
export { v as default };
//# sourceMappingURL=Home.7082ed31.js.map
