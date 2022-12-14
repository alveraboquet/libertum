import {
  V as Oa,
  P as ey,
  d as ry,
  k as Eo,
  l as Rn,
  m as iy,
  c as Hr,
  w as En,
  p as ef,
  o as ny,
  q as ay,
  x as oy,
  a as sy,
  y as On,
} from "./index.ef7539b9.js";
function uy(r) {
  (r = r || Oa), r && !r.__composition_api_installed__ && Oa.use(ey);
}
uy(Oa);
var rf = Oa;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Xs =
  function (r, t) {
    return (
      (Xs =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, i) {
            e.__proto__ = i;
          }) ||
        function (e, i) {
          for (var n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }),
      Xs(r, t)
    );
  };
function rt(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  Xs(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype =
    t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
}
var ly = (function () {
    function r() {
      (this.firefox = !1),
        (this.ie = !1),
        (this.edge = !1),
        (this.newEdge = !1),
        (this.weChat = !1);
    }
    return r;
  })(),
  fy = (function () {
    function r() {
      (this.browser = new ly()),
        (this.node = !1),
        (this.wxa = !1),
        (this.worker = !1),
        (this.svgSupported = !1),
        (this.touchEventsSupported = !1),
        (this.pointerEventsSupported = !1),
        (this.domSupported = !1),
        (this.transformSupported = !1),
        (this.transform3dSupported = !1),
        (this.hasGlobalWindow = typeof window != "undefined");
    }
    return r;
  })(),
  Cr = new fy();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function"
  ? ((Cr.wxa = !0), (Cr.touchEventsSupported = !0))
  : typeof document == "undefined" && typeof self != "undefined"
  ? (Cr.worker = !0)
  : typeof navigator == "undefined"
  ? ((Cr.node = !0), (Cr.svgSupported = !0))
  : hy(navigator.userAgent, Cr);
function hy(r, t) {
  var e = t.browser,
    i = r.match(/Firefox\/([\d.]+)/),
    n = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/),
    a = r.match(/Edge?\/([\d.]+)/),
    o = /micromessenger/i.test(r);
  i && ((e.firefox = !0), (e.version = i[1])),
    n && ((e.ie = !0), (e.version = n[1])),
    a &&
      ((e.edge = !0),
      (e.version = a[1]),
      (e.newEdge = +a[1].split(".")[0] > 18)),
    o && (e.weChat = !0),
    (t.svgSupported = typeof SVGRect != "undefined"),
    (t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge),
    (t.pointerEventsSupported =
      "onpointerdown" in window && (e.edge || (e.ie && +e.version >= 11))),
    (t.domSupported = typeof document != "undefined");
  var s = document.documentElement.style;
  (t.transform3dSupported =
    ((e.ie && "transition" in s) ||
      e.edge ||
      ("WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix()) ||
      "MozPerspective" in s) &&
    !("OTransition" in s)),
    (t.transformSupported =
      t.transform3dSupported || (e.ie && +e.version >= 9));
}
var W = Cr,
  Ku = 12,
  vy = "sans-serif",
  Or = Ku + "px " + vy,
  cy = 20,
  dy = 100,
  py =
    "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function gy(r) {
  var t = {};
  if (typeof JSON == "undefined") return t;
  for (var e = 0; e < r.length; e++) {
    var i = String.fromCharCode(e + 32),
      n = (r.charCodeAt(e) - cy) / dy;
    t[i] = n;
  }
  return t;
}
var yy = gy(py),
  Br = {
    createCanvas: function () {
      return typeof document != "undefined" && document.createElement("canvas");
    },
    measureText: (function () {
      var r, t;
      return function (e, i) {
        if (!r) {
          var n = Br.createCanvas();
          r = n && n.getContext("2d");
        }
        if (r) return t !== i && (t = r.font = i || Or), r.measureText(e);
        (e = e || ""), (i = i || Or);
        var a = /^([0-9]*?)px$/.exec(i),
          o = +(a && a[1]) || Ku,
          s = 0;
        if (i.indexOf("mono") >= 0) s = o * e.length;
        else
          for (var u = 0; u < e.length; u++) {
            var l = yy[e[u]];
            s += l == null ? o : l * o;
          }
        return { width: s };
      };
    })(),
    loadImage: function (r, t, e) {
      var i = new Image();
      return (i.onload = t), (i.onerror = e), (i.src = r), i;
    },
  },
  cc = Ke(
    [
      "Function",
      "RegExp",
      "Date",
      "Error",
      "CanvasGradient",
      "CanvasPattern",
      "Image",
      "Canvas",
    ],
    function (r, t) {
      return (r["[object " + t + "]"] = !0), r;
    },
    {}
  ),
  dc = Ke(
    [
      "Int8",
      "Uint8",
      "Uint8Clamped",
      "Int16",
      "Uint16",
      "Int32",
      "Uint32",
      "Float32",
      "Float64",
    ],
    function (r, t) {
      return (r["[object " + t + "Array]"] = !0), r;
    },
    {}
  ),
  Cn = Object.prototype.toString,
  ao = Array.prototype,
  _y = ao.forEach,
  my = ao.filter,
  Qu = ao.slice,
  wy = ao.map,
  nf = function () {}.constructor,
  kn = nf ? nf.prototype : null,
  Ju = "__proto__",
  Sy = 2311;
function pc() {
  return Sy++;
}
function ju() {
  for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
  typeof console != "undefined" && console.error.apply(console, r);
}
function X(r) {
  if (r == null || typeof r != "object") return r;
  var t = r,
    e = Cn.call(r);
  if (e === "[object Array]") {
    if (!Ki(r)) {
      t = [];
      for (var i = 0, n = r.length; i < n; i++) t[i] = X(r[i]);
    }
  } else if (dc[e]) {
    if (!Ki(r)) {
      var a = r.constructor;
      if (a.from) t = a.from(r);
      else {
        t = new a(r.length);
        for (var i = 0, n = r.length; i < n; i++) t[i] = r[i];
      }
    }
  } else if (!cc[e] && !Ki(r) && !ka(r)) {
    t = {};
    for (var o in r) r.hasOwnProperty(o) && o !== Ju && (t[o] = X(r[o]));
  }
  return t;
}
function ut(r, t, e) {
  if (!F(t) || !F(r)) return e ? X(t) : r;
  for (var i in t)
    if (t.hasOwnProperty(i) && i !== Ju) {
      var n = r[i],
        a = t[i];
      F(a) &&
      F(n) &&
      !k(a) &&
      !k(n) &&
      !ka(a) &&
      !ka(n) &&
      !af(a) &&
      !af(n) &&
      !Ki(a) &&
      !Ki(n)
        ? ut(n, a, e)
        : (e || !(i in r)) && (r[i] = X(t[i]));
    }
  return r;
}
function O(r, t) {
  if (Object.assign) Object.assign(r, t);
  else for (var e in t) t.hasOwnProperty(e) && e !== Ju && (r[e] = t[e]);
  return r;
}
function nt(r, t, e) {
  for (var i = ft(t), n = 0; n < i.length; n++) {
    var a = i[n];
    (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
  }
  return r;
}
Br.createCanvas;
function et(r, t) {
  if (r) {
    if (r.indexOf) return r.indexOf(t);
    for (var e = 0, i = r.length; e < i; e++) if (r[e] === t) return e;
  }
  return -1;
}
function by(r, t) {
  var e = r.prototype;
  function i() {}
  (i.prototype = t.prototype), (r.prototype = new i());
  for (var n in e) e.hasOwnProperty(n) && (r.prototype[n] = e[n]);
  (r.prototype.constructor = r), (r.superClass = t);
}
function Oe(r, t, e) {
  if (
    ((r = "prototype" in r ? r.prototype : r),
    (t = "prototype" in t ? t.prototype : t),
    Object.getOwnPropertyNames)
  )
    for (var i = Object.getOwnPropertyNames(t), n = 0; n < i.length; n++) {
      var a = i[n];
      a !== "constructor" && (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
    }
  else nt(r, t, e);
}
function kt(r) {
  return !r || typeof r == "string" ? !1 : typeof r.length == "number";
}
function C(r, t, e) {
  if (!!(r && t))
    if (r.forEach && r.forEach === _y) r.forEach(t, e);
    else if (r.length === +r.length)
      for (var i = 0, n = r.length; i < n; i++) t.call(e, r[i], i, r);
    else for (var a in r) r.hasOwnProperty(a) && t.call(e, r[a], a, r);
}
function U(r, t, e) {
  if (!r) return [];
  if (!t) return tl(r);
  if (r.map && r.map === wy) return r.map(t, e);
  for (var i = [], n = 0, a = r.length; n < a; n++)
    i.push(t.call(e, r[n], n, r));
  return i;
}
function Ke(r, t, e, i) {
  if (!!(r && t)) {
    for (var n = 0, a = r.length; n < a; n++) e = t.call(i, e, r[n], n, r);
    return e;
  }
}
function zt(r, t, e) {
  if (!r) return [];
  if (!t) return tl(r);
  if (r.filter && r.filter === my) return r.filter(t, e);
  for (var i = [], n = 0, a = r.length; n < a; n++)
    t.call(e, r[n], n, r) && i.push(r[n]);
  return i;
}
function ft(r) {
  if (!r) return [];
  if (Object.keys) return Object.keys(r);
  var t = [];
  for (var e in r) r.hasOwnProperty(e) && t.push(e);
  return t;
}
function Ty(r, t) {
  for (var e = [], i = 2; i < arguments.length; i++) e[i - 2] = arguments[i];
  return function () {
    return r.apply(t, e.concat(Qu.call(arguments)));
  };
}
var st = kn && q(kn.bind) ? kn.call.bind(kn.bind) : Ty;
function gt(r) {
  for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
  return function () {
    return r.apply(this, t.concat(Qu.call(arguments)));
  };
}
function k(r) {
  return Array.isArray ? Array.isArray(r) : Cn.call(r) === "[object Array]";
}
function q(r) {
  return typeof r == "function";
}
function B(r) {
  return typeof r == "string";
}
function qs(r) {
  return Cn.call(r) === "[object String]";
}
function ht(r) {
  return typeof r == "number";
}
function F(r) {
  var t = typeof r;
  return t === "function" || (!!r && t === "object");
}
function af(r) {
  return !!cc[Cn.call(r)];
}
function Wt(r) {
  return !!dc[Cn.call(r)];
}
function ka(r) {
  return (
    typeof r == "object" &&
    typeof r.nodeType == "number" &&
    typeof r.ownerDocument == "object"
  );
}
function oo(r) {
  return r.colorStops != null;
}
function xy(r) {
  return r.image != null;
}
function Ba(r) {
  return r !== r;
}
function ln() {
  for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
  for (var e = 0, i = r.length; e < i; e++) if (r[e] != null) return r[e];
}
function K(r, t) {
  return r != null ? r : t;
}
function _a(r, t, e) {
  return r != null ? r : t != null ? t : e;
}
function tl(r) {
  for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
  return Qu.apply(r, t);
}
function gc(r) {
  if (typeof r == "number") return [r, r, r, r];
  var t = r.length;
  return t === 2
    ? [r[0], r[1], r[0], r[1]]
    : t === 3
    ? [r[0], r[1], r[2], r[1]]
    : r;
}
function Se(r, t) {
  if (!r) throw new Error(t);
}
function ye(r) {
  return r == null
    ? null
    : typeof r.trim == "function"
    ? r.trim()
    : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var yc = "__ec_primitive__";
function Fa(r) {
  r[yc] = !0;
}
function Ki(r) {
  return r[yc];
}
var Cy = (function () {
  function r(t) {
    this.data = {};
    var e = k(t);
    this.data = {};
    var i = this;
    t instanceof r ? t.each(n) : t && C(t, n);
    function n(a, o) {
      e ? i.set(a, o) : i.set(o, a);
    }
  }
  return (
    (r.prototype.get = function (t) {
      return this.data.hasOwnProperty(t) ? this.data[t] : null;
    }),
    (r.prototype.set = function (t, e) {
      return (this.data[t] = e);
    }),
    (r.prototype.each = function (t, e) {
      for (var i in this.data)
        this.data.hasOwnProperty(i) && t.call(e, this.data[i], i);
    }),
    (r.prototype.keys = function () {
      return ft(this.data);
    }),
    (r.prototype.removeKey = function (t) {
      delete this.data[t];
    }),
    r
  );
})();
function $(r) {
  return new Cy(r);
}
function Dy(r, t) {
  for (var e = new r.constructor(r.length + t.length), i = 0; i < r.length; i++)
    e[i] = r[i];
  for (var n = r.length, i = 0; i < t.length; i++) e[i + n] = t[i];
  return e;
}
function so(r, t) {
  var e;
  if (Object.create) e = Object.create(r);
  else {
    var i = function () {};
    (i.prototype = r), (e = new i());
  }
  return t && O(e, t), e;
}
function _c(r) {
  var t = r.style;
  (t.webkitUserSelect = "none"),
    (t.userSelect = "none"),
    (t.webkitTapHighlightColor = "rgba(0,0,0,0)"),
    (t["-webkit-touch-callout"] = "none");
}
function vi(r, t) {
  return r.hasOwnProperty(t);
}
function Et() {}
var My = 180 / Math.PI;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Zs =
  function (r, t) {
    return (
      (Zs =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, i) {
            e.__proto__ = i;
          }) ||
        function (e, i) {
          for (var n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }),
      Zs(r, t)
    );
  };
function Q(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  Zs(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype =
    t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
}
function gi(r, t) {
  return r == null && (r = 0), t == null && (t = 0), [r, t];
}
function Py(r) {
  return [r[0], r[1]];
}
function of(r, t, e) {
  return (r[0] = t[0] + e[0]), (r[1] = t[1] + e[1]), r;
}
function Ay(r, t, e) {
  return (r[0] = t[0] - e[0]), (r[1] = t[1] - e[1]), r;
}
function Ly(r) {
  return Math.sqrt(Iy(r));
}
function Iy(r) {
  return r[0] * r[0] + r[1] * r[1];
}
function Oo(r, t, e) {
  return (r[0] = t[0] * e), (r[1] = t[1] * e), r;
}
function Ry(r, t) {
  var e = Ly(t);
  return (
    e === 0 ? ((r[0] = 0), (r[1] = 0)) : ((r[0] = t[0] / e), (r[1] = t[1] / e)),
    r
  );
}
function Ks(r, t) {
  return Math.sqrt(
    (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1])
  );
}
var Ey = Ks;
function Oy(r, t) {
  return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
}
var oi = Oy;
function dD(r, t, e, i) {
  return (
    (r[0] = t[0] + i * (e[0] - t[0])), (r[1] = t[1] + i * (e[1] - t[1])), r
  );
}
function me(r, t, e) {
  var i = t[0],
    n = t[1];
  return (
    (r[0] = e[0] * i + e[2] * n + e[4]), (r[1] = e[1] * i + e[3] * n + e[5]), r
  );
}
function ri(r, t, e) {
  return (r[0] = Math.min(t[0], e[0])), (r[1] = Math.min(t[1], e[1])), r;
}
function ii(r, t, e) {
  return (r[0] = Math.max(t[0], e[0])), (r[1] = Math.max(t[1], e[1])), r;
}
var Gr = (function () {
    function r(t, e) {
      (this.target = t), (this.topTarget = e && e.topTarget);
    }
    return r;
  })(),
  ky = (function () {
    function r(t) {
      (this.handler = t),
        t.on("mousedown", this._dragStart, this),
        t.on("mousemove", this._drag, this),
        t.on("mouseup", this._dragEnd, this);
    }
    return (
      (r.prototype._dragStart = function (t) {
        for (var e = t.target; e && !e.draggable; )
          e = e.parent || e.__hostTarget;
        e &&
          ((this._draggingTarget = e),
          (e.dragging = !0),
          (this._x = t.offsetX),
          (this._y = t.offsetY),
          this.handler.dispatchToElement(new Gr(e, t), "dragstart", t.event));
      }),
      (r.prototype._drag = function (t) {
        var e = this._draggingTarget;
        if (e) {
          var i = t.offsetX,
            n = t.offsetY,
            a = i - this._x,
            o = n - this._y;
          (this._x = i),
            (this._y = n),
            e.drift(a, o, t),
            this.handler.dispatchToElement(new Gr(e, t), "drag", t.event);
          var s = this.handler.findHover(i, n, e).target,
            u = this._dropTarget;
          (this._dropTarget = s),
            e !== s &&
              (u &&
                s !== u &&
                this.handler.dispatchToElement(
                  new Gr(u, t),
                  "dragleave",
                  t.event
                ),
              s &&
                s !== u &&
                this.handler.dispatchToElement(
                  new Gr(s, t),
                  "dragenter",
                  t.event
                ));
        }
      }),
      (r.prototype._dragEnd = function (t) {
        var e = this._draggingTarget;
        e && (e.dragging = !1),
          this.handler.dispatchToElement(new Gr(e, t), "dragend", t.event),
          this._dropTarget &&
            this.handler.dispatchToElement(
              new Gr(this._dropTarget, t),
              "drop",
              t.event
            ),
          (this._draggingTarget = null),
          (this._dropTarget = null);
      }),
      r
    );
  })(),
  By = ky,
  Fy = (function () {
    function r(t) {
      t && (this._$eventProcessor = t);
    }
    return (
      (r.prototype.on = function (t, e, i, n) {
        this._$handlers || (this._$handlers = {});
        var a = this._$handlers;
        if (
          (typeof e == "function" && ((n = i), (i = e), (e = null)), !i || !t)
        )
          return this;
        var o = this._$eventProcessor;
        e != null && o && o.normalizeQuery && (e = o.normalizeQuery(e)),
          a[t] || (a[t] = []);
        for (var s = 0; s < a[t].length; s++) if (a[t][s].h === i) return this;
        var u = {
            h: i,
            query: e,
            ctx: n || this,
            callAtLast: i.zrEventfulCallAtLast,
          },
          l = a[t].length - 1,
          f = a[t][l];
        return f && f.callAtLast ? a[t].splice(l, 0, u) : a[t].push(u), this;
      }),
      (r.prototype.isSilent = function (t) {
        var e = this._$handlers;
        return !e || !e[t] || !e[t].length;
      }),
      (r.prototype.off = function (t, e) {
        var i = this._$handlers;
        if (!i) return this;
        if (!t) return (this._$handlers = {}), this;
        if (e) {
          if (i[t]) {
            for (var n = [], a = 0, o = i[t].length; a < o; a++)
              i[t][a].h !== e && n.push(i[t][a]);
            i[t] = n;
          }
          i[t] && i[t].length === 0 && delete i[t];
        } else delete i[t];
        return this;
      }),
      (r.prototype.trigger = function (t) {
        for (var e = [], i = 1; i < arguments.length; i++)
          e[i - 1] = arguments[i];
        if (!this._$handlers) return this;
        var n = this._$handlers[t],
          a = this._$eventProcessor;
        if (n)
          for (var o = e.length, s = n.length, u = 0; u < s; u++) {
            var l = n[u];
            if (!(a && a.filter && l.query != null && !a.filter(t, l.query)))
              switch (o) {
                case 0:
                  l.h.call(l.ctx);
                  break;
                case 1:
                  l.h.call(l.ctx, e[0]);
                  break;
                case 2:
                  l.h.call(l.ctx, e[0], e[1]);
                  break;
                default:
                  l.h.apply(l.ctx, e);
                  break;
              }
          }
        return a && a.afterTrigger && a.afterTrigger(t), this;
      }),
      (r.prototype.triggerWithContext = function (t) {
        for (var e = [], i = 1; i < arguments.length; i++)
          e[i - 1] = arguments[i];
        if (!this._$handlers) return this;
        var n = this._$handlers[t],
          a = this._$eventProcessor;
        if (n)
          for (
            var o = e.length, s = e[o - 1], u = n.length, l = 0;
            l < u;
            l++
          ) {
            var f = n[l];
            if (!(a && a.filter && f.query != null && !a.filter(t, f.query)))
              switch (o) {
                case 0:
                  f.h.call(s);
                  break;
                case 1:
                  f.h.call(s, e[0]);
                  break;
                case 2:
                  f.h.call(s, e[0], e[1]);
                  break;
                default:
                  f.h.apply(s, e.slice(1, o - 1));
                  break;
              }
          }
        return a && a.afterTrigger && a.afterTrigger(t), this;
      }),
      r
    );
  })(),
  Te = Fy,
  Ny = Math.log(2);
function Qs(r, t, e, i, n, a) {
  var o = i + "-" + n,
    s = r.length;
  if (a.hasOwnProperty(o)) return a[o];
  if (t === 1) {
    var u = Math.round(Math.log(((1 << s) - 1) & ~n) / Ny);
    return r[e][u];
  }
  for (var l = i | (1 << e), f = e + 1; i & (1 << f); ) f++;
  for (var h = 0, c = 0, v = 0; c < s; c++) {
    var d = 1 << c;
    d & n ||
      ((h += (v % 2 ? -1 : 1) * r[e][c] * Qs(r, t - 1, f, l, n | d, a)), v++);
  }
  return (a[o] = h), h;
}
function sf(r, t) {
  var e = [
      [r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]],
      [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]],
      [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]],
      [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]],
      [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]],
      [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]],
      [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]],
      [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]],
    ],
    i = {},
    n = Qs(e, 8, 0, 0, 0, i);
  if (n !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0),
          (a[s] +=
            ((((o + s) % 2 ? -1 : 1) *
              Qs(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, i)) /
              n) *
            t[o]);
    return function (u, l, f) {
      var h = l * a[6] + f * a[7] + 1;
      (u[0] = (l * a[0] + f * a[1] + a[2]) / h),
        (u[1] = (l * a[3] + f * a[4] + a[5]) / h);
    };
  }
}
var uf = "___zrEVENTSAVED",
  ko = [];
function zy(r, t, e, i, n) {
  return Js(ko, t, i, n, !0) && Js(r, e, ko[0], ko[1]);
}
function Js(r, t, e, i, n) {
  if (t.getBoundingClientRect && W.domSupported && !mc(t)) {
    var a = t[uf] || (t[uf] = {}),
      o = Hy(t, a),
      s = Gy(o, a, n);
    if (s) return s(r, e, i), !0;
  }
  return !1;
}
function Hy(r, t) {
  var e = t.markers;
  if (e) return e;
  e = t.markers = [];
  for (var i = ["left", "right"], n = ["top", "bottom"], a = 0; a < 4; a++) {
    var o = document.createElement("div"),
      s = o.style,
      u = a % 2,
      l = (a >> 1) % 2;
    (s.cssText = [
      "position: absolute",
      "visibility: hidden",
      "padding: 0",
      "margin: 0",
      "border-width: 0",
      "user-select: none",
      "width:0",
      "height:0",
      i[u] + ":0",
      n[l] + ":0",
      i[1 - u] + ":auto",
      n[1 - l] + ":auto",
      "",
    ].join("!important;")),
      r.appendChild(o),
      e.push(o);
  }
  return e;
}
function Gy(r, t, e) {
  for (
    var i = e ? "invTrans" : "trans",
      n = t[i],
      a = t.srcCoords,
      o = [],
      s = [],
      u = !0,
      l = 0;
    l < 4;
    l++
  ) {
    var f = r[l].getBoundingClientRect(),
      h = 2 * l,
      c = f.left,
      v = f.top;
    o.push(c, v),
      (u = u && a && c === a[h] && v === a[h + 1]),
      s.push(r[l].offsetLeft, r[l].offsetTop);
  }
  return u && n ? n : ((t.srcCoords = o), (t[i] = e ? sf(s, o) : sf(o, s)));
}
function mc(r) {
  return r.nodeName.toUpperCase() === "CANVAS";
}
var Vy = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  Bo = [],
  Wy = W.browser.firefox && +W.browser.version.split(".")[0] < 39;
function js(r, t, e, i) {
  return (
    (e = e || {}),
    i
      ? lf(r, t, e)
      : Wy && t.layerX != null && t.layerX !== t.offsetX
      ? ((e.zrX = t.layerX), (e.zrY = t.layerY))
      : t.offsetX != null
      ? ((e.zrX = t.offsetX), (e.zrY = t.offsetY))
      : lf(r, t, e),
    e
  );
}
function lf(r, t, e) {
  if (W.domSupported && r.getBoundingClientRect) {
    var i = t.clientX,
      n = t.clientY;
    if (mc(r)) {
      var a = r.getBoundingClientRect();
      (e.zrX = i - a.left), (e.zrY = n - a.top);
      return;
    } else if (Js(Bo, r, i, n)) {
      (e.zrX = Bo[0]), (e.zrY = Bo[1]);
      return;
    }
  }
  e.zrX = e.zrY = 0;
}
function el(r) {
  return r || window.event;
}
function Zt(r, t, e) {
  if (((t = el(t)), t.zrX != null)) return t;
  var i = t.type,
    n = i && i.indexOf("touch") >= 0;
  if (n) {
    var o = i !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    o && js(r, o, t, e);
  } else {
    js(r, t, t, e);
    var a = Uy(t);
    t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
  }
  var s = t.button;
  return (
    t.which == null &&
      s !== void 0 &&
      Vy.test(t.type) &&
      (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0),
    t
  );
}
function Uy(r) {
  var t = r.wheelDelta;
  if (t) return t;
  var e = r.deltaX,
    i = r.deltaY;
  if (e == null || i == null) return t;
  var n = Math.abs(i !== 0 ? i : e),
    a = i > 0 ? -1 : i < 0 ? 1 : e > 0 ? -1 : 1;
  return 3 * n * a;
}
function Yy(r, t, e, i) {
  r.addEventListener(t, e, i);
}
function $y(r, t, e, i) {
  r.removeEventListener(t, e, i);
}
var wc = function (r) {
  r.preventDefault(), r.stopPropagation(), (r.cancelBubble = !0);
};
function pD(r) {
  return r.which === 2 || r.which === 3;
}
var Xy = (function () {
  function r() {
    this._track = [];
  }
  return (
    (r.prototype.recognize = function (t, e, i) {
      return this._doTrack(t, e, i), this._recognize(t);
    }),
    (r.prototype.clear = function () {
      return (this._track.length = 0), this;
    }),
    (r.prototype._doTrack = function (t, e, i) {
      var n = t.touches;
      if (!!n) {
        for (
          var a = { points: [], touches: [], target: e, event: t },
            o = 0,
            s = n.length;
          o < s;
          o++
        ) {
          var u = n[o],
            l = js(i, u, {});
          a.points.push([l.zrX, l.zrY]), a.touches.push(u);
        }
        this._track.push(a);
      }
    }),
    (r.prototype._recognize = function (t) {
      for (var e in Fo)
        if (Fo.hasOwnProperty(e)) {
          var i = Fo[e](this._track, t);
          if (i) return i;
        }
    }),
    r
  );
})();
function ff(r) {
  var t = r[1][0] - r[0][0],
    e = r[1][1] - r[0][1];
  return Math.sqrt(t * t + e * e);
}
function qy(r) {
  return [(r[0][0] + r[1][0]) / 2, (r[0][1] + r[1][1]) / 2];
}
var Fo = {
    pinch: function (r, t) {
      var e = r.length;
      if (!!e) {
        var i = (r[e - 1] || {}).points,
          n = (r[e - 2] || {}).points || i;
        if (n && n.length > 1 && i && i.length > 1) {
          var a = ff(i) / ff(n);
          !isFinite(a) && (a = 1), (t.pinchScale = a);
          var o = qy(i);
          return (
            (t.pinchX = o[0]),
            (t.pinchY = o[1]),
            { type: "pinch", target: r[0].target, event: t }
          );
        }
      }
    },
  },
  Sc = "silent";
function Zy(r, t, e) {
  return {
    type: r,
    event: e,
    target: t.target,
    topTarget: t.topTarget,
    cancelBubble: !1,
    offsetX: e.zrX,
    offsetY: e.zrY,
    gestureEvent: e.gestureEvent,
    pinchX: e.pinchX,
    pinchY: e.pinchY,
    pinchScale: e.pinchScale,
    wheelDelta: e.zrDelta,
    zrByTouch: e.zrByTouch,
    which: e.which,
    stop: Ky,
  };
}
function Ky() {
  wc(this.event);
}
var Qy = (function (r) {
    Q(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.handler = null), e;
    }
    return (
      (t.prototype.dispose = function () {}),
      (t.prototype.setCursor = function () {}),
      t
    );
  })(Te),
  bi = (function () {
    function r(t, e) {
      (this.x = t), (this.y = e);
    }
    return r;
  })(),
  Jy = [
    "click",
    "dblclick",
    "mousewheel",
    "mouseout",
    "mouseup",
    "mousedown",
    "mousemove",
    "contextmenu",
  ],
  bc = (function (r) {
    Q(t, r);
    function t(e, i, n, a) {
      var o = r.call(this) || this;
      return (
        (o._hovered = new bi(0, 0)),
        (o.storage = e),
        (o.painter = i),
        (o.painterRoot = a),
        (n = n || new Qy()),
        (o.proxy = null),
        o.setHandlerProxy(n),
        (o._draggingMgr = new By(o)),
        o
      );
    }
    return (
      (t.prototype.setHandlerProxy = function (e) {
        this.proxy && this.proxy.dispose(),
          e &&
            (C(
              Jy,
              function (i) {
                e.on && e.on(i, this[i], this);
              },
              this
            ),
            (e.handler = this)),
          (this.proxy = e);
      }),
      (t.prototype.mousemove = function (e) {
        var i = e.zrX,
          n = e.zrY,
          a = Tc(this, i, n),
          o = this._hovered,
          s = o.target;
        s && !s.__zr && ((o = this.findHover(o.x, o.y)), (s = o.target));
        var u = (this._hovered = a ? new bi(i, n) : this.findHover(i, n)),
          l = u.target,
          f = this.proxy;
        f.setCursor && f.setCursor(l ? l.cursor : "default"),
          s && l !== s && this.dispatchToElement(o, "mouseout", e),
          this.dispatchToElement(u, "mousemove", e),
          l && l !== s && this.dispatchToElement(u, "mouseover", e);
      }),
      (t.prototype.mouseout = function (e) {
        var i = e.zrEventControl;
        i !== "only_globalout" &&
          this.dispatchToElement(this._hovered, "mouseout", e),
          i !== "no_globalout" &&
            this.trigger("globalout", { type: "globalout", event: e });
      }),
      (t.prototype.resize = function () {
        this._hovered = new bi(0, 0);
      }),
      (t.prototype.dispatch = function (e, i) {
        var n = this[e];
        n && n.call(this, i);
      }),
      (t.prototype.dispose = function () {
        this.proxy.dispose(),
          (this.storage = null),
          (this.proxy = null),
          (this.painter = null);
      }),
      (t.prototype.setCursorStyle = function (e) {
        var i = this.proxy;
        i.setCursor && i.setCursor(e);
      }),
      (t.prototype.dispatchToElement = function (e, i, n) {
        e = e || {};
        var a = e.target;
        if (!(a && a.silent)) {
          for (
            var o = "on" + i, s = Zy(i, e, n);
            a &&
            (a[o] && (s.cancelBubble = !!a[o].call(a, s)),
            a.trigger(i, s),
            (a = a.__hostTarget ? a.__hostTarget : a.parent),
            !s.cancelBubble);

          );
          s.cancelBubble ||
            (this.trigger(i, s),
            this.painter &&
              this.painter.eachOtherLayer &&
              this.painter.eachOtherLayer(function (u) {
                typeof u[o] == "function" && u[o].call(u, s),
                  u.trigger && u.trigger(i, s);
              }));
        }
      }),
      (t.prototype.findHover = function (e, i, n) {
        for (
          var a = this.storage.getDisplayList(),
            o = new bi(e, i),
            s = a.length - 1;
          s >= 0;
          s--
        ) {
          var u = void 0;
          if (
            a[s] !== n &&
            !a[s].ignore &&
            (u = jy(a[s], e, i)) &&
            (!o.topTarget && (o.topTarget = a[s]), u !== Sc)
          ) {
            o.target = a[s];
            break;
          }
        }
        return o;
      }),
      (t.prototype.processGesture = function (e, i) {
        this._gestureMgr || (this._gestureMgr = new Xy());
        var n = this._gestureMgr;
        i === "start" && n.clear();
        var a = n.recognize(
          e,
          this.findHover(e.zrX, e.zrY, null).target,
          this.proxy.dom
        );
        if ((i === "end" && n.clear(), a)) {
          var o = a.type;
          e.gestureEvent = o;
          var s = new bi();
          (s.target = a.target), this.dispatchToElement(s, o, a.event);
        }
      }),
      t
    );
  })(Te);
C(
  ["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"],
  function (r) {
    bc.prototype[r] = function (t) {
      var e = t.zrX,
        i = t.zrY,
        n = Tc(this, e, i),
        a,
        o;
      if (
        ((r !== "mouseup" || !n) &&
          ((a = this.findHover(e, i)), (o = a.target)),
        r === "mousedown")
      )
        (this._downEl = o),
          (this._downPoint = [t.zrX, t.zrY]),
          (this._upEl = o);
      else if (r === "mouseup") this._upEl = o;
      else if (r === "click") {
        if (
          this._downEl !== this._upEl ||
          !this._downPoint ||
          Ey(this._downPoint, [t.zrX, t.zrY]) > 4
        )
          return;
        this._downPoint = null;
      }
      this.dispatchToElement(a, r, t);
    };
  }
);
function jy(r, t, e) {
  if (r[r.rectHover ? "rectContain" : "contain"](t, e)) {
    for (var i = r, n = void 0, a = !1; i; ) {
      if ((i.ignoreClip && (a = !0), !a)) {
        var o = i.getClipPath();
        if (o && !o.contain(t, e)) return !1;
        i.silent && (n = !0);
      }
      var s = i.__hostTarget;
      i = s || i.parent;
    }
    return n ? Sc : !0;
  }
  return !1;
}
function Tc(r, t, e) {
  var i = r.painter;
  return t < 0 || t > i.getWidth() || e < 0 || e > i.getHeight();
}
var t_ = bc,
  xc = 32,
  Ti = 7;
function e_(r) {
  for (var t = 0; r >= xc; ) (t |= r & 1), (r >>= 1);
  return r + t;
}
function hf(r, t, e, i) {
  var n = t + 1;
  if (n === e) return 1;
  if (i(r[n++], r[t]) < 0) {
    for (; n < e && i(r[n], r[n - 1]) < 0; ) n++;
    r_(r, t, n);
  } else for (; n < e && i(r[n], r[n - 1]) >= 0; ) n++;
  return n - t;
}
function r_(r, t, e) {
  for (e--; t < e; ) {
    var i = r[t];
    (r[t++] = r[e]), (r[e--] = i);
  }
}
function vf(r, t, e, i, n) {
  for (i === t && i++; i < e; i++) {
    for (var a = r[i], o = t, s = i, u; o < s; )
      (u = (o + s) >>> 1), n(a, r[u]) < 0 ? (s = u) : (o = u + 1);
    var l = i - o;
    switch (l) {
      case 3:
        r[o + 3] = r[o + 2];
      case 2:
        r[o + 2] = r[o + 1];
      case 1:
        r[o + 1] = r[o];
        break;
      default:
        for (; l > 0; ) (r[o + l] = r[o + l - 1]), l--;
    }
    r[o] = a;
  }
}
function No(r, t, e, i, n, a) {
  var o = 0,
    s = 0,
    u = 1;
  if (a(r, t[e + n]) > 0) {
    for (s = i - n; u < s && a(r, t[e + n + u]) > 0; )
      (o = u), (u = (u << 1) + 1), u <= 0 && (u = s);
    u > s && (u = s), (o += n), (u += n);
  } else {
    for (s = n + 1; u < s && a(r, t[e + n - u]) <= 0; )
      (o = u), (u = (u << 1) + 1), u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    (o = n - u), (u = n - l);
  }
  for (o++; o < u; ) {
    var f = o + ((u - o) >>> 1);
    a(r, t[e + f]) > 0 ? (o = f + 1) : (u = f);
  }
  return u;
}
function zo(r, t, e, i, n, a) {
  var o = 0,
    s = 0,
    u = 1;
  if (a(r, t[e + n]) < 0) {
    for (s = n + 1; u < s && a(r, t[e + n - u]) < 0; )
      (o = u), (u = (u << 1) + 1), u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    (o = n - u), (u = n - l);
  } else {
    for (s = i - n; u < s && a(r, t[e + n + u]) >= 0; )
      (o = u), (u = (u << 1) + 1), u <= 0 && (u = s);
    u > s && (u = s), (o += n), (u += n);
  }
  for (o++; o < u; ) {
    var f = o + ((u - o) >>> 1);
    a(r, t[e + f]) < 0 ? (u = f) : (o = f + 1);
  }
  return u;
}
function i_(r, t) {
  var e = Ti,
    i,
    n,
    a = 0,
    o = [];
  (i = []), (n = []);
  function s(v, d) {
    (i[a] = v), (n[a] = d), (a += 1);
  }
  function u() {
    for (; a > 1; ) {
      var v = a - 2;
      if (
        (v >= 1 && n[v - 1] <= n[v] + n[v + 1]) ||
        (v >= 2 && n[v - 2] <= n[v] + n[v - 1])
      )
        n[v - 1] < n[v + 1] && v--;
      else if (n[v] > n[v + 1]) break;
      f(v);
    }
  }
  function l() {
    for (; a > 1; ) {
      var v = a - 2;
      v > 0 && n[v - 1] < n[v + 1] && v--, f(v);
    }
  }
  function f(v) {
    var d = i[v],
      y = n[v],
      p = i[v + 1],
      g = n[v + 1];
    (n[v] = y + g),
      v === a - 3 && ((i[v + 1] = i[v + 2]), (n[v + 1] = n[v + 2])),
      a--;
    var _ = zo(r[p], r, d, y, 0, t);
    (d += _),
      (y -= _),
      y !== 0 &&
        ((g = No(r[d + y - 1], r, p, g, g - 1, t)),
        g !== 0 && (y <= g ? h(d, y, p, g) : c(d, y, p, g)));
  }
  function h(v, d, y, p) {
    var g = 0;
    for (g = 0; g < d; g++) o[g] = r[v + g];
    var _ = 0,
      m = y,
      w = v;
    if (((r[w++] = r[m++]), --p === 0)) {
      for (g = 0; g < d; g++) r[w + g] = o[_ + g];
      return;
    }
    if (d === 1) {
      for (g = 0; g < p; g++) r[w + g] = r[m + g];
      r[w + p] = o[_];
      return;
    }
    for (var b = e, S, D, T; ; ) {
      (S = 0), (D = 0), (T = !1);
      do
        if (t(r[m], o[_]) < 0) {
          if (((r[w++] = r[m++]), D++, (S = 0), --p === 0)) {
            T = !0;
            break;
          }
        } else if (((r[w++] = o[_++]), S++, (D = 0), --d === 1)) {
          T = !0;
          break;
        }
      while ((S | D) < b);
      if (T) break;
      do {
        if (((S = zo(r[m], o, _, d, 0, t)), S !== 0)) {
          for (g = 0; g < S; g++) r[w + g] = o[_ + g];
          if (((w += S), (_ += S), (d -= S), d <= 1)) {
            T = !0;
            break;
          }
        }
        if (((r[w++] = r[m++]), --p === 0)) {
          T = !0;
          break;
        }
        if (((D = No(o[_], r, m, p, 0, t)), D !== 0)) {
          for (g = 0; g < D; g++) r[w + g] = r[m + g];
          if (((w += D), (m += D), (p -= D), p === 0)) {
            T = !0;
            break;
          }
        }
        if (((r[w++] = o[_++]), --d === 1)) {
          T = !0;
          break;
        }
        b--;
      } while (S >= Ti || D >= Ti);
      if (T) break;
      b < 0 && (b = 0), (b += 2);
    }
    if (((e = b), e < 1 && (e = 1), d === 1)) {
      for (g = 0; g < p; g++) r[w + g] = r[m + g];
      r[w + p] = o[_];
    } else {
      if (d === 0) throw new Error();
      for (g = 0; g < d; g++) r[w + g] = o[_ + g];
    }
  }
  function c(v, d, y, p) {
    var g = 0;
    for (g = 0; g < p; g++) o[g] = r[y + g];
    var _ = v + d - 1,
      m = p - 1,
      w = y + p - 1,
      b = 0,
      S = 0;
    if (((r[w--] = r[_--]), --d === 0)) {
      for (b = w - (p - 1), g = 0; g < p; g++) r[b + g] = o[g];
      return;
    }
    if (p === 1) {
      for (w -= d, _ -= d, S = w + 1, b = _ + 1, g = d - 1; g >= 0; g--)
        r[S + g] = r[b + g];
      r[w] = o[m];
      return;
    }
    for (var D = e; ; ) {
      var T = 0,
        x = 0,
        M = !1;
      do
        if (t(o[m], r[_]) < 0) {
          if (((r[w--] = r[_--]), T++, (x = 0), --d === 0)) {
            M = !0;
            break;
          }
        } else if (((r[w--] = o[m--]), x++, (T = 0), --p === 1)) {
          M = !0;
          break;
        }
      while ((T | x) < D);
      if (M) break;
      do {
        if (((T = d - zo(o[m], r, v, d, d - 1, t)), T !== 0)) {
          for (
            w -= T, _ -= T, d -= T, S = w + 1, b = _ + 1, g = T - 1;
            g >= 0;
            g--
          )
            r[S + g] = r[b + g];
          if (d === 0) {
            M = !0;
            break;
          }
        }
        if (((r[w--] = o[m--]), --p === 1)) {
          M = !0;
          break;
        }
        if (((x = p - No(r[_], o, 0, p, p - 1, t)), x !== 0)) {
          for (w -= x, m -= x, p -= x, S = w + 1, b = m + 1, g = 0; g < x; g++)
            r[S + g] = o[b + g];
          if (p <= 1) {
            M = !0;
            break;
          }
        }
        if (((r[w--] = r[_--]), --d === 0)) {
          M = !0;
          break;
        }
        D--;
      } while (T >= Ti || x >= Ti);
      if (M) break;
      D < 0 && (D = 0), (D += 2);
    }
    if (((e = D), e < 1 && (e = 1), p === 1)) {
      for (w -= d, _ -= d, S = w + 1, b = _ + 1, g = d - 1; g >= 0; g--)
        r[S + g] = r[b + g];
      r[w] = o[m];
    } else {
      if (p === 0) throw new Error();
      for (b = w - (p - 1), g = 0; g < p; g++) r[b + g] = o[g];
    }
  }
  return { mergeRuns: u, forceMergeRuns: l, pushRun: s };
}
function ma(r, t, e, i) {
  e || (e = 0), i || (i = r.length);
  var n = i - e;
  if (!(n < 2)) {
    var a = 0;
    if (n < xc) {
      (a = hf(r, e, i, t)), vf(r, e, i, e + a, t);
      return;
    }
    var o = i_(r, t),
      s = e_(n);
    do {
      if (((a = hf(r, e, i, t)), a < s)) {
        var u = n;
        u > s && (u = s), vf(r, e, e + u, e + a, t), (a = u);
      }
      o.pushRun(e, a), o.mergeRuns(), (n -= a), (e += a);
    } while (n !== 0);
    o.forceMergeRuns();
  }
}
var Gt = 1,
  Wi = 2,
  ti = 4,
  cf = !1;
function Ho() {
  cf ||
    ((cf = !0),
    console.warn(
      "z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"
    ));
}
function df(r, t) {
  return r.zlevel === t.zlevel
    ? r.z === t.z
      ? r.z2 - t.z2
      : r.z - t.z
    : r.zlevel - t.zlevel;
}
var n_ = (function () {
    function r() {
      (this._roots = []),
        (this._displayList = []),
        (this._displayListLen = 0),
        (this.displayableSortFunc = df);
    }
    return (
      (r.prototype.traverse = function (t, e) {
        for (var i = 0; i < this._roots.length; i++)
          this._roots[i].traverse(t, e);
      }),
      (r.prototype.getDisplayList = function (t, e) {
        e = e || !1;
        var i = this._displayList;
        return (t || !i.length) && this.updateDisplayList(e), i;
      }),
      (r.prototype.updateDisplayList = function (t) {
        this._displayListLen = 0;
        for (
          var e = this._roots, i = this._displayList, n = 0, a = e.length;
          n < a;
          n++
        )
          this._updateAndAddDisplayable(e[n], null, t);
        (i.length = this._displayListLen), ma(i, df);
      }),
      (r.prototype._updateAndAddDisplayable = function (t, e, i) {
        if (!(t.ignore && !i)) {
          t.beforeUpdate(), t.update(), t.afterUpdate();
          var n = t.getClipPath();
          if (t.ignoreClip) e = null;
          else if (n) {
            e ? (e = e.slice()) : (e = []);
            for (var a = n, o = t; a; )
              (a.parent = o),
                a.updateTransform(),
                e.push(a),
                (o = a),
                (a = a.getClipPath());
          }
          if (t.childrenRef) {
            for (var s = t.childrenRef(), u = 0; u < s.length; u++) {
              var l = s[u];
              t.__dirty && (l.__dirty |= Gt),
                this._updateAndAddDisplayable(l, e, i);
            }
            t.__dirty = 0;
          } else {
            var f = t;
            e && e.length
              ? (f.__clipPaths = e)
              : f.__clipPaths &&
                f.__clipPaths.length > 0 &&
                (f.__clipPaths = []),
              isNaN(f.z) && (Ho(), (f.z = 0)),
              isNaN(f.z2) && (Ho(), (f.z2 = 0)),
              isNaN(f.zlevel) && (Ho(), (f.zlevel = 0)),
              (this._displayList[this._displayListLen++] = f);
          }
          var h = t.getDecalElement && t.getDecalElement();
          h && this._updateAndAddDisplayable(h, e, i);
          var c = t.getTextGuideLine();
          c && this._updateAndAddDisplayable(c, e, i);
          var v = t.getTextContent();
          v && this._updateAndAddDisplayable(v, e, i);
        }
      }),
      (r.prototype.addRoot = function (t) {
        (t.__zr && t.__zr.storage === this) || this._roots.push(t);
      }),
      (r.prototype.delRoot = function (t) {
        if (t instanceof Array) {
          for (var e = 0, i = t.length; e < i; e++) this.delRoot(t[e]);
          return;
        }
        var n = et(this._roots, t);
        n >= 0 && this._roots.splice(n, 1);
      }),
      (r.prototype.delAllRoots = function () {
        (this._roots = []),
          (this._displayList = []),
          (this._displayListLen = 0);
      }),
      (r.prototype.getRoots = function () {
        return this._roots;
      }),
      (r.prototype.dispose = function () {
        (this._displayList = null), (this._roots = null);
      }),
      r
    );
  })(),
  a_ = n_,
  Cc;
Cc =
  (W.hasGlobalWindow &&
    ((window.requestAnimationFrame &&
      window.requestAnimationFrame.bind(window)) ||
      (window.msRequestAnimationFrame &&
        window.msRequestAnimationFrame.bind(window)) ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame)) ||
  function (r) {
    return setTimeout(r, 16);
  };
var tu = Cc,
  wa = {
    linear: function (r) {
      return r;
    },
    quadraticIn: function (r) {
      return r * r;
    },
    quadraticOut: function (r) {
      return r * (2 - r);
    },
    quadraticInOut: function (r) {
      return (r *= 2) < 1 ? 0.5 * r * r : -0.5 * (--r * (r - 2) - 1);
    },
    cubicIn: function (r) {
      return r * r * r;
    },
    cubicOut: function (r) {
      return --r * r * r + 1;
    },
    cubicInOut: function (r) {
      return (r *= 2) < 1 ? 0.5 * r * r * r : 0.5 * ((r -= 2) * r * r + 2);
    },
    quarticIn: function (r) {
      return r * r * r * r;
    },
    quarticOut: function (r) {
      return 1 - --r * r * r * r;
    },
    quarticInOut: function (r) {
      return (r *= 2) < 1
        ? 0.5 * r * r * r * r
        : -0.5 * ((r -= 2) * r * r * r - 2);
    },
    quinticIn: function (r) {
      return r * r * r * r * r;
    },
    quinticOut: function (r) {
      return --r * r * r * r * r + 1;
    },
    quinticInOut: function (r) {
      return (r *= 2) < 1
        ? 0.5 * r * r * r * r * r
        : 0.5 * ((r -= 2) * r * r * r * r + 2);
    },
    sinusoidalIn: function (r) {
      return 1 - Math.cos((r * Math.PI) / 2);
    },
    sinusoidalOut: function (r) {
      return Math.sin((r * Math.PI) / 2);
    },
    sinusoidalInOut: function (r) {
      return 0.5 * (1 - Math.cos(Math.PI * r));
    },
    exponentialIn: function (r) {
      return r === 0 ? 0 : Math.pow(1024, r - 1);
    },
    exponentialOut: function (r) {
      return r === 1 ? 1 : 1 - Math.pow(2, -10 * r);
    },
    exponentialInOut: function (r) {
      return r === 0
        ? 0
        : r === 1
        ? 1
        : (r *= 2) < 1
        ? 0.5 * Math.pow(1024, r - 1)
        : 0.5 * (-Math.pow(2, -10 * (r - 1)) + 2);
    },
    circularIn: function (r) {
      return 1 - Math.sqrt(1 - r * r);
    },
    circularOut: function (r) {
      return Math.sqrt(1 - --r * r);
    },
    circularInOut: function (r) {
      return (r *= 2) < 1
        ? -0.5 * (Math.sqrt(1 - r * r) - 1)
        : 0.5 * (Math.sqrt(1 - (r -= 2) * r) + 1);
    },
    elasticIn: function (r) {
      var t,
        e = 0.1,
        i = 0.4;
      return r === 0
        ? 0
        : r === 1
        ? 1
        : (!e || e < 1
            ? ((e = 1), (t = i / 4))
            : (t = (i * Math.asin(1 / e)) / (2 * Math.PI)),
          -(
            e *
            Math.pow(2, 10 * (r -= 1)) *
            Math.sin(((r - t) * (2 * Math.PI)) / i)
          ));
    },
    elasticOut: function (r) {
      var t,
        e = 0.1,
        i = 0.4;
      return r === 0
        ? 0
        : r === 1
        ? 1
        : (!e || e < 1
            ? ((e = 1), (t = i / 4))
            : (t = (i * Math.asin(1 / e)) / (2 * Math.PI)),
          e * Math.pow(2, -10 * r) * Math.sin(((r - t) * (2 * Math.PI)) / i) +
            1);
    },
    elasticInOut: function (r) {
      var t,
        e = 0.1,
        i = 0.4;
      return r === 0
        ? 0
        : r === 1
        ? 1
        : (!e || e < 1
            ? ((e = 1), (t = i / 4))
            : (t = (i * Math.asin(1 / e)) / (2 * Math.PI)),
          (r *= 2) < 1
            ? -0.5 *
              (e *
                Math.pow(2, 10 * (r -= 1)) *
                Math.sin(((r - t) * (2 * Math.PI)) / i))
            : e *
                Math.pow(2, -10 * (r -= 1)) *
                Math.sin(((r - t) * (2 * Math.PI)) / i) *
                0.5 +
              1);
    },
    backIn: function (r) {
      var t = 1.70158;
      return r * r * ((t + 1) * r - t);
    },
    backOut: function (r) {
      var t = 1.70158;
      return --r * r * ((t + 1) * r + t) + 1;
    },
    backInOut: function (r) {
      var t = 2.5949095;
      return (r *= 2) < 1
        ? 0.5 * (r * r * ((t + 1) * r - t))
        : 0.5 * ((r -= 2) * r * ((t + 1) * r + t) + 2);
    },
    bounceIn: function (r) {
      return 1 - wa.bounceOut(1 - r);
    },
    bounceOut: function (r) {
      return r < 1 / 2.75
        ? 7.5625 * r * r
        : r < 2 / 2.75
        ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75
        : r < 2.5 / 2.75
        ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375
        : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
    },
    bounceInOut: function (r) {
      return r < 0.5
        ? wa.bounceIn(r * 2) * 0.5
        : wa.bounceOut(r * 2 - 1) * 0.5 + 0.5;
    },
  },
  Dc = wa,
  Bn = Math.pow,
  qe = Math.sqrt,
  Na = 1e-8,
  Mc = 1e-4,
  pf = qe(3),
  Fn = 1 / 3,
  ge = gi(),
  Jt = gi(),
  si = gi();
function Ye(r) {
  return r > -Na && r < Na;
}
function Pc(r) {
  return r > Na || r < -Na;
}
function pt(r, t, e, i, n) {
  var a = 1 - n;
  return a * a * (a * r + 3 * n * t) + n * n * (n * i + 3 * a * e);
}
function gf(r, t, e, i, n) {
  var a = 1 - n;
  return 3 * (((t - r) * a + 2 * (e - t) * n) * a + (i - e) * n * n);
}
function Ac(r, t, e, i, n, a) {
  var o = i + 3 * (t - e) - r,
    s = 3 * (e - t * 2 + r),
    u = 3 * (t - r),
    l = r - n,
    f = s * s - 3 * o * u,
    h = s * u - 9 * o * l,
    c = u * u - 3 * s * l,
    v = 0;
  if (Ye(f) && Ye(h))
    if (Ye(s)) a[0] = 0;
    else {
      var d = -u / s;
      d >= 0 && d <= 1 && (a[v++] = d);
    }
  else {
    var y = h * h - 4 * f * c;
    if (Ye(y)) {
      var p = h / f,
        d = -s / o + p,
        g = -p / 2;
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g);
    } else if (y > 0) {
      var _ = qe(y),
        m = f * s + 1.5 * o * (-h + _),
        w = f * s + 1.5 * o * (-h - _);
      m < 0 ? (m = -Bn(-m, Fn)) : (m = Bn(m, Fn)),
        w < 0 ? (w = -Bn(-w, Fn)) : (w = Bn(w, Fn));
      var d = (-s - (m + w)) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d);
    } else {
      var b = (2 * f * s - 3 * o * h) / (2 * qe(f * f * f)),
        S = Math.acos(b) / 3,
        D = qe(f),
        T = Math.cos(S),
        d = (-s - 2 * D * T) / (3 * o),
        g = (-s + D * (T + pf * Math.sin(S))) / (3 * o),
        x = (-s + D * (T - pf * Math.sin(S))) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d),
        g >= 0 && g <= 1 && (a[v++] = g),
        x >= 0 && x <= 1 && (a[v++] = x);
    }
  }
  return v;
}
function Lc(r, t, e, i, n) {
  var a = 6 * e - 12 * t + 6 * r,
    o = 9 * t + 3 * i - 3 * r - 9 * e,
    s = 3 * t - 3 * r,
    u = 0;
  if (Ye(o)) {
    if (Pc(a)) {
      var l = -s / a;
      l >= 0 && l <= 1 && (n[u++] = l);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (Ye(f)) n[0] = -a / (2 * o);
    else if (f > 0) {
      var h = qe(f),
        l = (-a + h) / (2 * o),
        c = (-a - h) / (2 * o);
      l >= 0 && l <= 1 && (n[u++] = l), c >= 0 && c <= 1 && (n[u++] = c);
    }
  }
  return u;
}
function za(r, t, e, i, n, a) {
  var o = (t - r) * n + r,
    s = (e - t) * n + t,
    u = (i - e) * n + e,
    l = (s - o) * n + o,
    f = (u - s) * n + s,
    h = (f - l) * n + l;
  (a[0] = r),
    (a[1] = o),
    (a[2] = l),
    (a[3] = h),
    (a[4] = h),
    (a[5] = f),
    (a[6] = u),
    (a[7] = i);
}
function o_(r, t, e, i, n, a, o, s, u, l, f) {
  var h,
    c = 0.005,
    v = 1 / 0,
    d,
    y,
    p,
    g;
  (ge[0] = u), (ge[1] = l);
  for (var _ = 0; _ < 1; _ += 0.05)
    (Jt[0] = pt(r, e, n, o, _)),
      (Jt[1] = pt(t, i, a, s, _)),
      (p = oi(ge, Jt)),
      p < v && ((h = _), (v = p));
  v = 1 / 0;
  for (var m = 0; m < 32 && !(c < Mc); m++)
    (d = h - c),
      (y = h + c),
      (Jt[0] = pt(r, e, n, o, d)),
      (Jt[1] = pt(t, i, a, s, d)),
      (p = oi(Jt, ge)),
      d >= 0 && p < v
        ? ((h = d), (v = p))
        : ((si[0] = pt(r, e, n, o, y)),
          (si[1] = pt(t, i, a, s, y)),
          (g = oi(si, ge)),
          y <= 1 && g < v ? ((h = y), (v = g)) : (c *= 0.5));
  return f && ((f[0] = pt(r, e, n, o, h)), (f[1] = pt(t, i, a, s, h))), qe(v);
}
function s_(r, t, e, i, n, a, o, s, u) {
  for (var l = r, f = t, h = 0, c = 1 / u, v = 1; v <= u; v++) {
    var d = v * c,
      y = pt(r, e, n, o, d),
      p = pt(t, i, a, s, d),
      g = y - l,
      _ = p - f;
    (h += Math.sqrt(g * g + _ * _)), (l = y), (f = p);
  }
  return h;
}
function St(r, t, e, i) {
  var n = 1 - i;
  return n * (n * r + 2 * i * t) + i * i * e;
}
function yf(r, t, e, i) {
  return 2 * ((1 - i) * (t - r) + i * (e - t));
}
function u_(r, t, e, i, n) {
  var a = r - 2 * t + e,
    o = 2 * (t - r),
    s = r - i,
    u = 0;
  if (Ye(a)) {
    if (Pc(o)) {
      var l = -s / o;
      l >= 0 && l <= 1 && (n[u++] = l);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (Ye(f)) {
      var l = -o / (2 * a);
      l >= 0 && l <= 1 && (n[u++] = l);
    } else if (f > 0) {
      var h = qe(f),
        l = (-o + h) / (2 * a),
        c = (-o - h) / (2 * a);
      l >= 0 && l <= 1 && (n[u++] = l), c >= 0 && c <= 1 && (n[u++] = c);
    }
  }
  return u;
}
function Ic(r, t, e) {
  var i = r + e - 2 * t;
  return i === 0 ? 0.5 : (r - t) / i;
}
function Ha(r, t, e, i, n) {
  var a = (t - r) * i + r,
    o = (e - t) * i + t,
    s = (o - a) * i + a;
  (n[0] = r), (n[1] = a), (n[2] = s), (n[3] = s), (n[4] = o), (n[5] = e);
}
function l_(r, t, e, i, n, a, o, s, u) {
  var l,
    f = 0.005,
    h = 1 / 0;
  (ge[0] = o), (ge[1] = s);
  for (var c = 0; c < 1; c += 0.05) {
    (Jt[0] = St(r, e, n, c)), (Jt[1] = St(t, i, a, c));
    var v = oi(ge, Jt);
    v < h && ((l = c), (h = v));
  }
  h = 1 / 0;
  for (var d = 0; d < 32 && !(f < Mc); d++) {
    var y = l - f,
      p = l + f;
    (Jt[0] = St(r, e, n, y)), (Jt[1] = St(t, i, a, y));
    var v = oi(Jt, ge);
    if (y >= 0 && v < h) (l = y), (h = v);
    else {
      (si[0] = St(r, e, n, p)), (si[1] = St(t, i, a, p));
      var g = oi(si, ge);
      p <= 1 && g < h ? ((l = p), (h = g)) : (f *= 0.5);
    }
  }
  return u && ((u[0] = St(r, e, n, l)), (u[1] = St(t, i, a, l))), qe(h);
}
function f_(r, t, e, i, n, a, o) {
  for (var s = r, u = t, l = 0, f = 1 / o, h = 1; h <= o; h++) {
    var c = h * f,
      v = St(r, e, n, c),
      d = St(t, i, a, c),
      y = v - s,
      p = d - u;
    (l += Math.sqrt(y * y + p * p)), (s = v), (u = d);
  }
  return l;
}
var h_ = /cubic-bezier\(([0-9,\.e ]+)\)/;
function Rc(r) {
  var t = r && h_.exec(r);
  if (t) {
    var e = t[1].split(","),
      i = +ye(e[0]),
      n = +ye(e[1]),
      a = +ye(e[2]),
      o = +ye(e[3]);
    if (isNaN(i + n + a + o)) return;
    var s = [];
    return function (u) {
      return u <= 0
        ? 0
        : u >= 1
        ? 1
        : Ac(0, i, a, 1, u, s) && pt(0, n, o, 1, s[0]);
    };
  }
}
var v_ = (function () {
    function r(t) {
      (this._inited = !1),
        (this._startTime = 0),
        (this._pausedTime = 0),
        (this._paused = !1),
        (this._life = t.life || 1e3),
        (this._delay = t.delay || 0),
        (this.loop = t.loop || !1),
        (this.onframe = t.onframe || Et),
        (this.ondestroy = t.ondestroy || Et),
        (this.onrestart = t.onrestart || Et),
        t.easing && this.setEasing(t.easing);
    }
    return (
      (r.prototype.step = function (t, e) {
        if (
          (this._inited ||
            ((this._startTime = t + this._delay), (this._inited = !0)),
          this._paused)
        ) {
          this._pausedTime += e;
          return;
        }
        var i = this._life,
          n = t - this._startTime - this._pausedTime,
          a = n / i;
        a < 0 && (a = 0), (a = Math.min(a, 1));
        var o = this.easingFunc,
          s = o ? o(a) : a;
        if ((this.onframe(s), a === 1))
          if (this.loop) {
            var u = n % i;
            (this._startTime = t - u), (this._pausedTime = 0), this.onrestart();
          } else return !0;
        return !1;
      }),
      (r.prototype.pause = function () {
        this._paused = !0;
      }),
      (r.prototype.resume = function () {
        this._paused = !1;
      }),
      (r.prototype.setEasing = function (t) {
        (this.easing = t), (this.easingFunc = q(t) ? t : Dc[t] || Rc(t));
      }),
      r
    );
  })(),
  c_ = v_,
  Ec = (function () {
    function r(t) {
      this.value = t;
    }
    return r;
  })(),
  d_ = (function () {
    function r() {
      this._len = 0;
    }
    return (
      (r.prototype.insert = function (t) {
        var e = new Ec(t);
        return this.insertEntry(e), e;
      }),
      (r.prototype.insertEntry = function (t) {
        this.head
          ? ((this.tail.next = t),
            (t.prev = this.tail),
            (t.next = null),
            (this.tail = t))
          : (this.head = this.tail = t),
          this._len++;
      }),
      (r.prototype.remove = function (t) {
        var e = t.prev,
          i = t.next;
        e ? (e.next = i) : (this.head = i),
          i ? (i.prev = e) : (this.tail = e),
          (t.next = t.prev = null),
          this._len--;
      }),
      (r.prototype.len = function () {
        return this._len;
      }),
      (r.prototype.clear = function () {
        (this.head = this.tail = null), (this._len = 0);
      }),
      r
    );
  })(),
  p_ = (function () {
    function r(t) {
      (this._list = new d_()),
        (this._maxSize = 10),
        (this._map = {}),
        (this._maxSize = t);
    }
    return (
      (r.prototype.put = function (t, e) {
        var i = this._list,
          n = this._map,
          a = null;
        if (n[t] == null) {
          var o = i.len(),
            s = this._lastRemovedEntry;
          if (o >= this._maxSize && o > 0) {
            var u = i.head;
            i.remove(u),
              delete n[u.key],
              (a = u.value),
              (this._lastRemovedEntry = u);
          }
          s ? (s.value = e) : (s = new Ec(e)),
            (s.key = t),
            i.insertEntry(s),
            (n[t] = s);
        }
        return a;
      }),
      (r.prototype.get = function (t) {
        var e = this._map[t],
          i = this._list;
        if (e != null)
          return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value;
      }),
      (r.prototype.clear = function () {
        this._list.clear(), (this._map = {});
      }),
      (r.prototype.len = function () {
        return this._list.len();
      }),
      r
    );
  })(),
  Dn = p_,
  _f = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, 1],
    antiquewhite: [250, 235, 215, 1],
    aqua: [0, 255, 255, 1],
    aquamarine: [127, 255, 212, 1],
    azure: [240, 255, 255, 1],
    beige: [245, 245, 220, 1],
    bisque: [255, 228, 196, 1],
    black: [0, 0, 0, 1],
    blanchedalmond: [255, 235, 205, 1],
    blue: [0, 0, 255, 1],
    blueviolet: [138, 43, 226, 1],
    brown: [165, 42, 42, 1],
    burlywood: [222, 184, 135, 1],
    cadetblue: [95, 158, 160, 1],
    chartreuse: [127, 255, 0, 1],
    chocolate: [210, 105, 30, 1],
    coral: [255, 127, 80, 1],
    cornflowerblue: [100, 149, 237, 1],
    cornsilk: [255, 248, 220, 1],
    crimson: [220, 20, 60, 1],
    cyan: [0, 255, 255, 1],
    darkblue: [0, 0, 139, 1],
    darkcyan: [0, 139, 139, 1],
    darkgoldenrod: [184, 134, 11, 1],
    darkgray: [169, 169, 169, 1],
    darkgreen: [0, 100, 0, 1],
    darkgrey: [169, 169, 169, 1],
    darkkhaki: [189, 183, 107, 1],
    darkmagenta: [139, 0, 139, 1],
    darkolivegreen: [85, 107, 47, 1],
    darkorange: [255, 140, 0, 1],
    darkorchid: [153, 50, 204, 1],
    darkred: [139, 0, 0, 1],
    darksalmon: [233, 150, 122, 1],
    darkseagreen: [143, 188, 143, 1],
    darkslateblue: [72, 61, 139, 1],
    darkslategray: [47, 79, 79, 1],
    darkslategrey: [47, 79, 79, 1],
    darkturquoise: [0, 206, 209, 1],
    darkviolet: [148, 0, 211, 1],
    deeppink: [255, 20, 147, 1],
    deepskyblue: [0, 191, 255, 1],
    dimgray: [105, 105, 105, 1],
    dimgrey: [105, 105, 105, 1],
    dodgerblue: [30, 144, 255, 1],
    firebrick: [178, 34, 34, 1],
    floralwhite: [255, 250, 240, 1],
    forestgreen: [34, 139, 34, 1],
    fuchsia: [255, 0, 255, 1],
    gainsboro: [220, 220, 220, 1],
    ghostwhite: [248, 248, 255, 1],
    gold: [255, 215, 0, 1],
    goldenrod: [218, 165, 32, 1],
    gray: [128, 128, 128, 1],
    green: [0, 128, 0, 1],
    greenyellow: [173, 255, 47, 1],
    grey: [128, 128, 128, 1],
    honeydew: [240, 255, 240, 1],
    hotpink: [255, 105, 180, 1],
    indianred: [205, 92, 92, 1],
    indigo: [75, 0, 130, 1],
    ivory: [255, 255, 240, 1],
    khaki: [240, 230, 140, 1],
    lavender: [230, 230, 250, 1],
    lavenderblush: [255, 240, 245, 1],
    lawngreen: [124, 252, 0, 1],
    lemonchiffon: [255, 250, 205, 1],
    lightblue: [173, 216, 230, 1],
    lightcoral: [240, 128, 128, 1],
    lightcyan: [224, 255, 255, 1],
    lightgoldenrodyellow: [250, 250, 210, 1],
    lightgray: [211, 211, 211, 1],
    lightgreen: [144, 238, 144, 1],
    lightgrey: [211, 211, 211, 1],
    lightpink: [255, 182, 193, 1],
    lightsalmon: [255, 160, 122, 1],
    lightseagreen: [32, 178, 170, 1],
    lightskyblue: [135, 206, 250, 1],
    lightslategray: [119, 136, 153, 1],
    lightslategrey: [119, 136, 153, 1],
    lightsteelblue: [176, 196, 222, 1],
    lightyellow: [255, 255, 224, 1],
    lime: [0, 255, 0, 1],
    limegreen: [50, 205, 50, 1],
    linen: [250, 240, 230, 1],
    magenta: [255, 0, 255, 1],
    maroon: [128, 0, 0, 1],
    mediumaquamarine: [102, 205, 170, 1],
    mediumblue: [0, 0, 205, 1],
    mediumorchid: [186, 85, 211, 1],
    mediumpurple: [147, 112, 219, 1],
    mediumseagreen: [60, 179, 113, 1],
    mediumslateblue: [123, 104, 238, 1],
    mediumspringgreen: [0, 250, 154, 1],
    mediumturquoise: [72, 209, 204, 1],
    mediumvioletred: [199, 21, 133, 1],
    midnightblue: [25, 25, 112, 1],
    mintcream: [245, 255, 250, 1],
    mistyrose: [255, 228, 225, 1],
    moccasin: [255, 228, 181, 1],
    navajowhite: [255, 222, 173, 1],
    navy: [0, 0, 128, 1],
    oldlace: [253, 245, 230, 1],
    olive: [128, 128, 0, 1],
    olivedrab: [107, 142, 35, 1],
    orange: [255, 165, 0, 1],
    orangered: [255, 69, 0, 1],
    orchid: [218, 112, 214, 1],
    palegoldenrod: [238, 232, 170, 1],
    palegreen: [152, 251, 152, 1],
    paleturquoise: [175, 238, 238, 1],
    palevioletred: [219, 112, 147, 1],
    papayawhip: [255, 239, 213, 1],
    peachpuff: [255, 218, 185, 1],
    peru: [205, 133, 63, 1],
    pink: [255, 192, 203, 1],
    plum: [221, 160, 221, 1],
    powderblue: [176, 224, 230, 1],
    purple: [128, 0, 128, 1],
    red: [255, 0, 0, 1],
    rosybrown: [188, 143, 143, 1],
    royalblue: [65, 105, 225, 1],
    saddlebrown: [139, 69, 19, 1],
    salmon: [250, 128, 114, 1],
    sandybrown: [244, 164, 96, 1],
    seagreen: [46, 139, 87, 1],
    seashell: [255, 245, 238, 1],
    sienna: [160, 82, 45, 1],
    silver: [192, 192, 192, 1],
    skyblue: [135, 206, 235, 1],
    slateblue: [106, 90, 205, 1],
    slategray: [112, 128, 144, 1],
    slategrey: [112, 128, 144, 1],
    snow: [255, 250, 250, 1],
    springgreen: [0, 255, 127, 1],
    steelblue: [70, 130, 180, 1],
    tan: [210, 180, 140, 1],
    teal: [0, 128, 128, 1],
    thistle: [216, 191, 216, 1],
    tomato: [255, 99, 71, 1],
    turquoise: [64, 224, 208, 1],
    violet: [238, 130, 238, 1],
    wheat: [245, 222, 179, 1],
    white: [255, 255, 255, 1],
    whitesmoke: [245, 245, 245, 1],
    yellow: [255, 255, 0, 1],
    yellowgreen: [154, 205, 50, 1],
  };
function oe(r) {
  return (r = Math.round(r)), r < 0 ? 0 : r > 255 ? 255 : r;
}
function g_(r) {
  return (r = Math.round(r)), r < 0 ? 0 : r > 360 ? 360 : r;
}
function fn(r) {
  return r < 0 ? 0 : r > 1 ? 1 : r;
}
function Go(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%"
    ? oe((parseFloat(t) / 100) * 255)
    : oe(parseInt(t, 10));
}
function ci(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%"
    ? fn(parseFloat(t) / 100)
    : fn(parseFloat(t));
}
function Vo(r, t, e) {
  return (
    e < 0 ? (e += 1) : e > 1 && (e -= 1),
    e * 6 < 1
      ? r + (t - r) * e * 6
      : e * 2 < 1
      ? t
      : e * 3 < 2
      ? r + (t - r) * (2 / 3 - e) * 6
      : r
  );
}
function $e(r, t, e) {
  return r + (t - r) * e;
}
function qt(r, t, e, i, n) {
  return (r[0] = t), (r[1] = e), (r[2] = i), (r[3] = n), r;
}
function eu(r, t) {
  return (r[0] = t[0]), (r[1] = t[1]), (r[2] = t[2]), (r[3] = t[3]), r;
}
var Oc = new Dn(20),
  Nn = null;
function Vr(r, t) {
  Nn && eu(Nn, t), (Nn = Oc.put(r, Nn || t.slice()));
}
function se(r, t) {
  if (!!r) {
    t = t || [];
    var e = Oc.get(r);
    if (e) return eu(t, e);
    r = r + "";
    var i = r.replace(/ /g, "").toLowerCase();
    if (i in _f) return eu(t, _f[i]), Vr(r, t), t;
    var n = i.length;
    if (i.charAt(0) === "#") {
      if (n === 4 || n === 5) {
        var a = parseInt(i.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          qt(t, 0, 0, 0, 1);
          return;
        }
        return (
          qt(
            t,
            ((a & 3840) >> 4) | ((a & 3840) >> 8),
            (a & 240) | ((a & 240) >> 4),
            (a & 15) | ((a & 15) << 4),
            n === 5 ? parseInt(i.slice(4), 16) / 15 : 1
          ),
          Vr(r, t),
          t
        );
      } else if (n === 7 || n === 9) {
        var a = parseInt(i.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          qt(t, 0, 0, 0, 1);
          return;
        }
        return (
          qt(
            t,
            (a & 16711680) >> 16,
            (a & 65280) >> 8,
            a & 255,
            n === 9 ? parseInt(i.slice(7), 16) / 255 : 1
          ),
          Vr(r, t),
          t
        );
      }
      return;
    }
    var o = i.indexOf("("),
      s = i.indexOf(")");
    if (o !== -1 && s + 1 === n) {
      var u = i.substr(0, o),
        l = i.substr(o + 1, s - (o + 1)).split(","),
        f = 1;
      switch (u) {
        case "rgba":
          if (l.length !== 4)
            return l.length === 3
              ? qt(t, +l[0], +l[1], +l[2], 1)
              : qt(t, 0, 0, 0, 1);
          f = ci(l.pop());
        case "rgb":
          if (l.length !== 3) {
            qt(t, 0, 0, 0, 1);
            return;
          }
          return qt(t, Go(l[0]), Go(l[1]), Go(l[2]), f), Vr(r, t), t;
        case "hsla":
          if (l.length !== 4) {
            qt(t, 0, 0, 0, 1);
            return;
          }
          return (l[3] = ci(l[3])), ru(l, t), Vr(r, t), t;
        case "hsl":
          if (l.length !== 3) {
            qt(t, 0, 0, 0, 1);
            return;
          }
          return ru(l, t), Vr(r, t), t;
        default:
          return;
      }
    }
    qt(t, 0, 0, 0, 1);
  }
}
function ru(r, t) {
  var e = (((parseFloat(r[0]) % 360) + 360) % 360) / 360,
    i = ci(r[1]),
    n = ci(r[2]),
    a = n <= 0.5 ? n * (i + 1) : n + i - n * i,
    o = n * 2 - a;
  return (
    (t = t || []),
    qt(
      t,
      oe(Vo(o, a, e + 1 / 3) * 255),
      oe(Vo(o, a, e) * 255),
      oe(Vo(o, a, e - 1 / 3) * 255),
      1
    ),
    r.length === 4 && (t[3] = r[3]),
    t
  );
}
function y_(r) {
  if (!!r) {
    var t = r[0] / 255,
      e = r[1] / 255,
      i = r[2] / 255,
      n = Math.min(t, e, i),
      a = Math.max(t, e, i),
      o = a - n,
      s = (a + n) / 2,
      u,
      l;
    if (o === 0) (u = 0), (l = 0);
    else {
      s < 0.5 ? (l = o / (a + n)) : (l = o / (2 - a - n));
      var f = ((a - t) / 6 + o / 2) / o,
        h = ((a - e) / 6 + o / 2) / o,
        c = ((a - i) / 6 + o / 2) / o;
      t === a
        ? (u = c - h)
        : e === a
        ? (u = 1 / 3 + f - c)
        : i === a && (u = 2 / 3 + h - f),
        u < 0 && (u += 1),
        u > 1 && (u -= 1);
    }
    var v = [u * 360, l, s];
    return r[3] != null && v.push(r[3]), v;
  }
}
function mf(r, t) {
  var e = se(r);
  if (e) {
    for (var i = 0; i < 3; i++)
      t < 0
        ? (e[i] = (e[i] * (1 - t)) | 0)
        : (e[i] = ((255 - e[i]) * t + e[i]) | 0),
        e[i] > 255 ? (e[i] = 255) : e[i] < 0 && (e[i] = 0);
    return yi(e, e.length === 4 ? "rgba" : "rgb");
  }
}
function gD(r, t, e) {
  if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
    e = e || [];
    var i = r * (t.length - 1),
      n = Math.floor(i),
      a = Math.ceil(i),
      o = t[n],
      s = t[a],
      u = i - n;
    return (
      (e[0] = oe($e(o[0], s[0], u))),
      (e[1] = oe($e(o[1], s[1], u))),
      (e[2] = oe($e(o[2], s[2], u))),
      (e[3] = fn($e(o[3], s[3], u))),
      e
    );
  }
}
function yD(r, t, e) {
  if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
    var i = r * (t.length - 1),
      n = Math.floor(i),
      a = Math.ceil(i),
      o = se(t[n]),
      s = se(t[a]),
      u = i - n,
      l = yi(
        [
          oe($e(o[0], s[0], u)),
          oe($e(o[1], s[1], u)),
          oe($e(o[2], s[2], u)),
          fn($e(o[3], s[3], u)),
        ],
        "rgba"
      );
    return e ? { color: l, leftIndex: n, rightIndex: a, value: i } : l;
  }
}
function _D(r, t, e, i) {
  var n = se(r);
  if (r)
    return (
      (n = y_(n)),
      t != null && (n[0] = g_(t)),
      e != null && (n[1] = ci(e)),
      i != null && (n[2] = ci(i)),
      yi(ru(n), "rgba")
    );
}
function mD(r, t) {
  var e = se(r);
  if (e && t != null) return (e[3] = fn(t)), yi(e, "rgba");
}
function yi(r, t) {
  if (!(!r || !r.length)) {
    var e = r[0] + "," + r[1] + "," + r[2];
    return (
      (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]),
      t + "(" + e + ")"
    );
  }
}
function Ga(r, t) {
  var e = se(r);
  return e
    ? ((0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3]) / 255 +
        (1 - e[3]) * t
    : 0;
}
function __(r) {
  return r.type === "linear";
}
function m_(r) {
  return r.type === "radial";
}
(function () {
  return W.hasGlobalWindow && q(window.btoa)
    ? function (r) {
        return window.btoa(unescape(r));
      }
    : typeof Buffer != "undefined"
    ? function (r) {
        return Buffer.from(r).toString("base64");
      }
    : function (r) {
        return null;
      };
})();
var iu = Array.prototype.slice;
function Pe(r, t, e) {
  return (t - r) * e + r;
}
function Wo(r, t, e, i) {
  for (var n = t.length, a = 0; a < n; a++) r[a] = Pe(t[a], e[a], i);
  return r;
}
function w_(r, t, e, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++) r[o][s] = Pe(t[o][s], e[o][s], i);
  }
  return r;
}
function zn(r, t, e, i) {
  for (var n = t.length, a = 0; a < n; a++) r[a] = t[a] + e[a] * i;
  return r;
}
function wf(r, t, e, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++) r[o][s] = t[o][s] + e[o][s] * i;
  }
  return r;
}
function S_(r, t) {
  for (
    var e = r.length,
      i = t.length,
      n = e > i ? t : r,
      a = Math.min(e, i),
      o = n[a - 1] || { color: [0, 0, 0, 0], offset: 0 },
      s = a;
    s < Math.max(e, i);
    s++
  )
    n.push({ offset: o.offset, color: o.color.slice() });
}
function b_(r, t, e) {
  var i = r,
    n = t;
  if (!(!i.push || !n.push)) {
    var a = i.length,
      o = n.length;
    if (a !== o) {
      var s = a > o;
      if (s) i.length = o;
      else for (var u = a; u < o; u++) i.push(e === 1 ? n[u] : iu.call(n[u]));
    }
    for (var l = i[0] && i[0].length, u = 0; u < i.length; u++)
      if (e === 1) isNaN(i[u]) && (i[u] = n[u]);
      else for (var f = 0; f < l; f++) isNaN(i[u][f]) && (i[u][f] = n[u][f]);
  }
}
function Sa(r) {
  if (kt(r)) {
    var t = r.length;
    if (kt(r[0])) {
      for (var e = [], i = 0; i < t; i++) e.push(iu.call(r[i]));
      return e;
    }
    return iu.call(r);
  }
  return r;
}
function ba(r) {
  return (
    (r[0] = Math.floor(r[0]) || 0),
    (r[1] = Math.floor(r[1]) || 0),
    (r[2] = Math.floor(r[2]) || 0),
    (r[3] = r[3] == null ? 1 : r[3]),
    "rgba(" + r.join(",") + ")"
  );
}
function T_(r) {
  return kt(r && r[0]) ? 2 : 1;
}
var Hn = 0,
  Ta = 1,
  kc = 2,
  Ui = 3,
  nu = 4,
  au = 5,
  Sf = 6;
function bf(r) {
  return r === nu || r === au;
}
function Gn(r) {
  return r === Ta || r === kc;
}
var xi = [0, 0, 0, 0],
  x_ = (function () {
    function r(t) {
      (this.keyframes = []),
        (this.discrete = !1),
        (this._invalid = !1),
        (this._needsSort = !1),
        (this._lastFr = 0),
        (this._lastFrP = 0),
        (this.propName = t);
    }
    return (
      (r.prototype.isFinished = function () {
        return this._finished;
      }),
      (r.prototype.setFinished = function () {
        (this._finished = !0),
          this._additiveTrack && this._additiveTrack.setFinished();
      }),
      (r.prototype.needsAnimate = function () {
        return this.keyframes.length >= 1;
      }),
      (r.prototype.getAdditiveTrack = function () {
        return this._additiveTrack;
      }),
      (r.prototype.addKeyframe = function (t, e, i) {
        this._needsSort = !0;
        var n = this.keyframes,
          a = n.length,
          o = !1,
          s = Sf,
          u = e;
        if (kt(e)) {
          var l = T_(e);
          (s = l),
            ((l === 1 && !ht(e[0])) || (l === 2 && !ht(e[0][0]))) && (o = !0);
        } else if (ht(e) && !Ba(e)) s = Hn;
        else if (B(e))
          if (!isNaN(+e)) s = Hn;
          else {
            var f = se(e);
            f && ((u = f), (s = Ui));
          }
        else if (oo(e)) {
          var h = O({}, u);
          (h.colorStops = U(e.colorStops, function (v) {
            return { offset: v.offset, color: se(v.color) };
          })),
            __(e) ? (s = nu) : m_(e) && (s = au),
            (u = h);
        }
        a === 0
          ? (this.valType = s)
          : (s !== this.valType || s === Sf) && (o = !0),
          (this.discrete = this.discrete || o);
        var c = { time: t, value: u, rawValue: e, percent: 0 };
        return (
          i && ((c.easing = i), (c.easingFunc = q(i) ? i : Dc[i] || Rc(i))),
          n.push(c),
          c
        );
      }),
      (r.prototype.prepare = function (t, e) {
        var i = this.keyframes;
        this._needsSort &&
          i.sort(function (y, p) {
            return y.time - p.time;
          });
        for (
          var n = this.valType,
            a = i.length,
            o = i[a - 1],
            s = this.discrete,
            u = Gn(n),
            l = bf(n),
            f = 0;
          f < a;
          f++
        ) {
          var h = i[f],
            c = h.value,
            v = o.value;
          (h.percent = h.time / t),
            s ||
              (u && f !== a - 1
                ? b_(c, v, n)
                : l && S_(c.colorStops, v.colorStops));
        }
        if (
          !s &&
          n !== au &&
          e &&
          this.needsAnimate() &&
          e.needsAnimate() &&
          n === e.valType &&
          !e._finished
        ) {
          this._additiveTrack = e;
          for (var d = i[0].value, f = 0; f < a; f++)
            n === Hn
              ? (i[f].additiveValue = i[f].value - d)
              : n === Ui
              ? (i[f].additiveValue = zn([], i[f].value, d, -1))
              : Gn(n) &&
                (i[f].additiveValue =
                  n === Ta
                    ? zn([], i[f].value, d, -1)
                    : wf([], i[f].value, d, -1));
        }
      }),
      (r.prototype.step = function (t, e) {
        if (!this._finished) {
          this._additiveTrack &&
            this._additiveTrack._finished &&
            (this._additiveTrack = null);
          var i = this._additiveTrack != null,
            n = i ? "additiveValue" : "value",
            a = this.valType,
            o = this.keyframes,
            s = o.length,
            u = this.propName,
            l = a === Ui,
            f,
            h = this._lastFr,
            c = Math.min,
            v,
            d;
          if (s === 1) v = d = o[0];
          else {
            if (e < 0) f = 0;
            else if (e < this._lastFrP) {
              var y = c(h + 1, s - 1);
              for (f = y; f >= 0 && !(o[f].percent <= e); f--);
              f = c(f, s - 2);
            } else {
              for (f = h; f < s && !(o[f].percent > e); f++);
              f = c(f - 1, s - 2);
            }
            (d = o[f + 1]), (v = o[f]);
          }
          if (!!(v && d)) {
            (this._lastFr = f), (this._lastFrP = e);
            var p = d.percent - v.percent,
              g = p === 0 ? 1 : c((e - v.percent) / p, 1);
            d.easingFunc && (g = d.easingFunc(g));
            var _ = i ? this._additiveValue : l ? xi : t[u];
            if (
              ((Gn(a) || l) && !_ && (_ = this._additiveValue = []),
              this.discrete)
            )
              t[u] = g < 1 ? v.rawValue : d.rawValue;
            else if (Gn(a))
              a === Ta ? Wo(_, v[n], d[n], g) : w_(_, v[n], d[n], g);
            else if (bf(a)) {
              var m = v[n],
                w = d[n],
                b = a === nu;
              (t[u] = {
                type: b ? "linear" : "radial",
                x: Pe(m.x, w.x, g),
                y: Pe(m.y, w.y, g),
                colorStops: U(m.colorStops, function (D, T) {
                  var x = w.colorStops[T];
                  return {
                    offset: Pe(D.offset, x.offset, g),
                    color: ba(Wo([], D.color, x.color, g)),
                  };
                }),
                global: w.global,
              }),
                b
                  ? ((t[u].x2 = Pe(m.x2, w.x2, g)),
                    (t[u].y2 = Pe(m.y2, w.y2, g)))
                  : (t[u].r = Pe(m.r, w.r, g));
            } else if (l) Wo(_, v[n], d[n], g), i || (t[u] = ba(_));
            else {
              var S = Pe(v[n], d[n], g);
              i ? (this._additiveValue = S) : (t[u] = S);
            }
            i && this._addToTarget(t);
          }
        }
      }),
      (r.prototype._addToTarget = function (t) {
        var e = this.valType,
          i = this.propName,
          n = this._additiveValue;
        e === Hn
          ? (t[i] = t[i] + n)
          : e === Ui
          ? (se(t[i], xi), zn(xi, xi, n, 1), (t[i] = ba(xi)))
          : e === Ta
          ? zn(t[i], t[i], n, 1)
          : e === kc && wf(t[i], t[i], n, 1);
      }),
      r
    );
  })(),
  C_ = (function () {
    function r(t, e, i, n) {
      if (
        ((this._tracks = {}),
        (this._trackKeys = []),
        (this._maxTime = 0),
        (this._started = 0),
        (this._clip = null),
        (this._target = t),
        (this._loop = e),
        e && n)
      ) {
        ju("Can' use additive animation on looped animation.");
        return;
      }
      (this._additiveAnimators = n), (this._allowDiscrete = i);
    }
    return (
      (r.prototype.getMaxTime = function () {
        return this._maxTime;
      }),
      (r.prototype.getDelay = function () {
        return this._delay;
      }),
      (r.prototype.getLoop = function () {
        return this._loop;
      }),
      (r.prototype.getTarget = function () {
        return this._target;
      }),
      (r.prototype.changeTarget = function (t) {
        this._target = t;
      }),
      (r.prototype.when = function (t, e, i) {
        return this.whenWithKeys(t, e, ft(e), i);
      }),
      (r.prototype.whenWithKeys = function (t, e, i, n) {
        for (var a = this._tracks, o = 0; o < i.length; o++) {
          var s = i[o],
            u = a[s];
          if (!u) {
            u = a[s] = new x_(s);
            var l = void 0,
              f = this._getAdditiveTrack(s);
            if (f) {
              var h = f.keyframes,
                c = h[h.length - 1];
              (l = c && c.value), f.valType === Ui && l && (l = ba(l));
            } else l = this._target[s];
            if (l == null) continue;
            t > 0 && u.addKeyframe(0, Sa(l), n), this._trackKeys.push(s);
          }
          u.addKeyframe(t, Sa(e[s]), n);
        }
        return (this._maxTime = Math.max(this._maxTime, t)), this;
      }),
      (r.prototype.pause = function () {
        this._clip.pause(), (this._paused = !0);
      }),
      (r.prototype.resume = function () {
        this._clip.resume(), (this._paused = !1);
      }),
      (r.prototype.isPaused = function () {
        return !!this._paused;
      }),
      (r.prototype.duration = function (t) {
        return (this._maxTime = t), (this._force = !0), this;
      }),
      (r.prototype._doneCallback = function () {
        this._setTracksFinished(), (this._clip = null);
        var t = this._doneCbs;
        if (t) for (var e = t.length, i = 0; i < e; i++) t[i].call(this);
      }),
      (r.prototype._abortedCallback = function () {
        this._setTracksFinished();
        var t = this.animation,
          e = this._abortedCbs;
        if ((t && t.removeClip(this._clip), (this._clip = null), e))
          for (var i = 0; i < e.length; i++) e[i].call(this);
      }),
      (r.prototype._setTracksFinished = function () {
        for (
          var t = this._tracks, e = this._trackKeys, i = 0;
          i < e.length;
          i++
        )
          t[e[i]].setFinished();
      }),
      (r.prototype._getAdditiveTrack = function (t) {
        var e,
          i = this._additiveAnimators;
        if (i)
          for (var n = 0; n < i.length; n++) {
            var a = i[n].getTrack(t);
            a && (e = a);
          }
        return e;
      }),
      (r.prototype.start = function (t) {
        if (!(this._started > 0)) {
          this._started = 1;
          for (
            var e = this, i = [], n = this._maxTime || 0, a = 0;
            a < this._trackKeys.length;
            a++
          ) {
            var o = this._trackKeys[a],
              s = this._tracks[o],
              u = this._getAdditiveTrack(o),
              l = s.keyframes,
              f = l.length;
            if ((s.prepare(n, u), s.needsAnimate()))
              if (!this._allowDiscrete && s.discrete) {
                var h = l[f - 1];
                h && (e._target[s.propName] = h.rawValue), s.setFinished();
              } else i.push(s);
          }
          if (i.length || this._force) {
            var c = new c_({
              life: n,
              loop: this._loop,
              delay: this._delay || 0,
              onframe: function (v) {
                e._started = 2;
                var d = e._additiveAnimators;
                if (d) {
                  for (var y = !1, p = 0; p < d.length; p++)
                    if (d[p]._clip) {
                      y = !0;
                      break;
                    }
                  y || (e._additiveAnimators = null);
                }
                for (var p = 0; p < i.length; p++) i[p].step(e._target, v);
                var g = e._onframeCbs;
                if (g) for (var p = 0; p < g.length; p++) g[p](e._target, v);
              },
              ondestroy: function () {
                e._doneCallback();
              },
            });
            (this._clip = c),
              this.animation && this.animation.addClip(c),
              t && c.setEasing(t);
          } else this._doneCallback();
          return this;
        }
      }),
      (r.prototype.stop = function (t) {
        if (!!this._clip) {
          var e = this._clip;
          t && e.onframe(1), this._abortedCallback();
        }
      }),
      (r.prototype.delay = function (t) {
        return (this._delay = t), this;
      }),
      (r.prototype.during = function (t) {
        return (
          t &&
            (this._onframeCbs || (this._onframeCbs = []),
            this._onframeCbs.push(t)),
          this
        );
      }),
      (r.prototype.done = function (t) {
        return (
          t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)),
          this
        );
      }),
      (r.prototype.aborted = function (t) {
        return (
          t &&
            (this._abortedCbs || (this._abortedCbs = []),
            this._abortedCbs.push(t)),
          this
        );
      }),
      (r.prototype.getClip = function () {
        return this._clip;
      }),
      (r.prototype.getTrack = function (t) {
        return this._tracks[t];
      }),
      (r.prototype.getTracks = function () {
        var t = this;
        return U(this._trackKeys, function (e) {
          return t._tracks[e];
        });
      }),
      (r.prototype.stopTracks = function (t, e) {
        if (!t.length || !this._clip) return !0;
        for (
          var i = this._tracks, n = this._trackKeys, a = 0;
          a < t.length;
          a++
        ) {
          var o = i[t[a]];
          o &&
            !o.isFinished() &&
            (e
              ? o.step(this._target, 1)
              : this._started === 1 && o.step(this._target, 0),
            o.setFinished());
        }
        for (var s = !0, a = 0; a < n.length; a++)
          if (!i[n[a]].isFinished()) {
            s = !1;
            break;
          }
        return s && this._abortedCallback(), s;
      }),
      (r.prototype.saveTo = function (t, e, i) {
        if (!!t) {
          e = e || this._trackKeys;
          for (var n = 0; n < e.length; n++) {
            var a = e[n],
              o = this._tracks[a];
            if (!(!o || o.isFinished())) {
              var s = o.keyframes,
                u = s[i ? 0 : s.length - 1];
              u && (t[a] = Sa(u.rawValue));
            }
          }
        }
      }),
      (r.prototype.__changeFinalValue = function (t, e) {
        e = e || ft(t);
        for (var i = 0; i < e.length; i++) {
          var n = e[i],
            a = this._tracks[n];
          if (!!a) {
            var o = a.keyframes;
            if (o.length > 1) {
              var s = o.pop();
              a.addKeyframe(s.time, t[n]),
                a.prepare(this._maxTime, a.getAdditiveTrack());
            }
          }
        }
      }),
      r
    );
  })(),
  rl = C_;
function ni() {
  return new Date().getTime();
}
var D_ = (function (r) {
    Q(t, r);
    function t(e) {
      var i = r.call(this) || this;
      return (
        (i._running = !1),
        (i._time = 0),
        (i._pausedTime = 0),
        (i._pauseStart = 0),
        (i._paused = !1),
        (e = e || {}),
        (i.stage = e.stage || {}),
        i
      );
    }
    return (
      (t.prototype.addClip = function (e) {
        e.animation && this.removeClip(e),
          this._head
            ? ((this._tail.next = e),
              (e.prev = this._tail),
              (e.next = null),
              (this._tail = e))
            : (this._head = this._tail = e),
          (e.animation = this);
      }),
      (t.prototype.addAnimator = function (e) {
        e.animation = this;
        var i = e.getClip();
        i && this.addClip(i);
      }),
      (t.prototype.removeClip = function (e) {
        if (!!e.animation) {
          var i = e.prev,
            n = e.next;
          i ? (i.next = n) : (this._head = n),
            n ? (n.prev = i) : (this._tail = i),
            (e.next = e.prev = e.animation = null);
        }
      }),
      (t.prototype.removeAnimator = function (e) {
        var i = e.getClip();
        i && this.removeClip(i), (e.animation = null);
      }),
      (t.prototype.update = function (e) {
        for (
          var i = ni() - this._pausedTime, n = i - this._time, a = this._head;
          a;

        ) {
          var o = a.next,
            s = a.step(i, n);
          s && (a.ondestroy(), this.removeClip(a)), (a = o);
        }
        (this._time = i),
          e ||
            (this.trigger("frame", n),
            this.stage.update && this.stage.update());
      }),
      (t.prototype._startLoop = function () {
        var e = this;
        this._running = !0;
        function i() {
          e._running && (tu(i), !e._paused && e.update());
        }
        tu(i);
      }),
      (t.prototype.start = function () {
        this._running ||
          ((this._time = ni()), (this._pausedTime = 0), this._startLoop());
      }),
      (t.prototype.stop = function () {
        this._running = !1;
      }),
      (t.prototype.pause = function () {
        this._paused || ((this._pauseStart = ni()), (this._paused = !0));
      }),
      (t.prototype.resume = function () {
        this._paused &&
          ((this._pausedTime += ni() - this._pauseStart), (this._paused = !1));
      }),
      (t.prototype.clear = function () {
        for (var e = this._head; e; ) {
          var i = e.next;
          (e.prev = e.next = e.animation = null), (e = i);
        }
        this._head = this._tail = null;
      }),
      (t.prototype.isFinished = function () {
        return this._head == null;
      }),
      (t.prototype.animate = function (e, i) {
        (i = i || {}), this.start();
        var n = new rl(e, i.loop);
        return this.addAnimator(n), n;
      }),
      t
    );
  })(Te),
  M_ = D_,
  P_ = 300,
  Uo = W.domSupported,
  Yo = (function () {
    var r = [
        "click",
        "dblclick",
        "mousewheel",
        "wheel",
        "mouseout",
        "mouseup",
        "mousedown",
        "mousemove",
        "contextmenu",
      ],
      t = ["touchstart", "touchend", "touchmove"],
      e = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 },
      i = U(r, function (n) {
        var a = n.replace("mouse", "pointer");
        return e.hasOwnProperty(a) ? a : n;
      });
    return { mouse: r, touch: t, pointer: i };
  })(),
  Tf = {
    mouse: ["mousemove", "mouseup"],
    pointer: ["pointermove", "pointerup"],
  },
  xf = !1;
function ou(r) {
  var t = r.pointerType;
  return t === "pen" || t === "touch";
}
function A_(r) {
  (r.touching = !0),
    r.touchTimer != null && (clearTimeout(r.touchTimer), (r.touchTimer = null)),
    (r.touchTimer = setTimeout(function () {
      (r.touching = !1), (r.touchTimer = null);
    }, 700));
}
function $o(r) {
  r && (r.zrByTouch = !0);
}
function L_(r, t) {
  return Zt(r.dom, new I_(r, t), !0);
}
function Bc(r, t) {
  for (
    var e = t, i = !1;
    e &&
    e.nodeType !== 9 &&
    !(i = e.domBelongToZr || (e !== t && e === r.painterRoot));

  )
    e = e.parentNode;
  return i;
}
var I_ = (function () {
    function r(t, e) {
      (this.stopPropagation = Et),
        (this.stopImmediatePropagation = Et),
        (this.preventDefault = Et),
        (this.type = e.type),
        (this.target = this.currentTarget = t.dom),
        (this.pointerType = e.pointerType),
        (this.clientX = e.clientX),
        (this.clientY = e.clientY);
    }
    return r;
  })(),
  ne = {
    mousedown: function (r) {
      (r = Zt(this.dom, r)),
        (this.__mayPointerCapture = [r.zrX, r.zrY]),
        this.trigger("mousedown", r);
    },
    mousemove: function (r) {
      r = Zt(this.dom, r);
      var t = this.__mayPointerCapture;
      t &&
        (r.zrX !== t[0] || r.zrY !== t[1]) &&
        this.__togglePointerCapture(!0),
        this.trigger("mousemove", r);
    },
    mouseup: function (r) {
      (r = Zt(this.dom, r)),
        this.__togglePointerCapture(!1),
        this.trigger("mouseup", r);
    },
    mouseout: function (r) {
      r = Zt(this.dom, r);
      var t = r.toElement || r.relatedTarget;
      Bc(this, t) ||
        (this.__pointerCapturing && (r.zrEventControl = "no_globalout"),
        this.trigger("mouseout", r));
    },
    wheel: function (r) {
      (xf = !0), (r = Zt(this.dom, r)), this.trigger("mousewheel", r);
    },
    mousewheel: function (r) {
      xf || ((r = Zt(this.dom, r)), this.trigger("mousewheel", r));
    },
    touchstart: function (r) {
      (r = Zt(this.dom, r)),
        $o(r),
        (this.__lastTouchMoment = new Date()),
        this.handler.processGesture(r, "start"),
        ne.mousemove.call(this, r),
        ne.mousedown.call(this, r);
    },
    touchmove: function (r) {
      (r = Zt(this.dom, r)),
        $o(r),
        this.handler.processGesture(r, "change"),
        ne.mousemove.call(this, r);
    },
    touchend: function (r) {
      (r = Zt(this.dom, r)),
        $o(r),
        this.handler.processGesture(r, "end"),
        ne.mouseup.call(this, r),
        +new Date() - +this.__lastTouchMoment < P_ && ne.click.call(this, r);
    },
    pointerdown: function (r) {
      ne.mousedown.call(this, r);
    },
    pointermove: function (r) {
      ou(r) || ne.mousemove.call(this, r);
    },
    pointerup: function (r) {
      ne.mouseup.call(this, r);
    },
    pointerout: function (r) {
      ou(r) || ne.mouseout.call(this, r);
    },
  };
C(["click", "dblclick", "contextmenu"], function (r) {
  ne[r] = function (t) {
    (t = Zt(this.dom, t)), this.trigger(r, t);
  };
});
var su = {
  pointermove: function (r) {
    ou(r) || su.mousemove.call(this, r);
  },
  pointerup: function (r) {
    su.mouseup.call(this, r);
  },
  mousemove: function (r) {
    this.trigger("mousemove", r);
  },
  mouseup: function (r) {
    var t = this.__pointerCapturing;
    this.__togglePointerCapture(!1),
      this.trigger("mouseup", r),
      t && ((r.zrEventControl = "only_globalout"), this.trigger("mouseout", r));
  },
};
function R_(r, t) {
  var e = t.domHandlers;
  W.pointerEventsSupported
    ? C(Yo.pointer, function (i) {
        xa(t, i, function (n) {
          e[i].call(r, n);
        });
      })
    : (W.touchEventsSupported &&
        C(Yo.touch, function (i) {
          xa(t, i, function (n) {
            e[i].call(r, n), A_(t);
          });
        }),
      C(Yo.mouse, function (i) {
        xa(t, i, function (n) {
          (n = el(n)), t.touching || e[i].call(r, n);
        });
      }));
}
function E_(r, t) {
  W.pointerEventsSupported
    ? C(Tf.pointer, e)
    : W.touchEventsSupported || C(Tf.mouse, e);
  function e(i) {
    function n(a) {
      (a = el(a)),
        Bc(r, a.target) || ((a = L_(r, a)), t.domHandlers[i].call(r, a));
    }
    xa(t, i, n, { capture: !0 });
  }
}
function xa(r, t, e, i) {
  (r.mounted[t] = e), (r.listenerOpts[t] = i), Yy(r.domTarget, t, e, i);
}
function Xo(r) {
  var t = r.mounted;
  for (var e in t)
    t.hasOwnProperty(e) && $y(r.domTarget, e, t[e], r.listenerOpts[e]);
  r.mounted = {};
}
var Cf = (function () {
    function r(t, e) {
      (this.mounted = {}),
        (this.listenerOpts = {}),
        (this.touching = !1),
        (this.domTarget = t),
        (this.domHandlers = e);
    }
    return r;
  })(),
  O_ = (function (r) {
    Q(t, r);
    function t(e, i) {
      var n = r.call(this) || this;
      return (
        (n.__pointerCapturing = !1),
        (n.dom = e),
        (n.painterRoot = i),
        (n._localHandlerScope = new Cf(e, ne)),
        Uo && (n._globalHandlerScope = new Cf(document, su)),
        R_(n, n._localHandlerScope),
        n
      );
    }
    return (
      (t.prototype.dispose = function () {
        Xo(this._localHandlerScope), Uo && Xo(this._globalHandlerScope);
      }),
      (t.prototype.setCursor = function (e) {
        this.dom.style && (this.dom.style.cursor = e || "default");
      }),
      (t.prototype.__togglePointerCapture = function (e) {
        if (
          ((this.__mayPointerCapture = null),
          Uo && +this.__pointerCapturing ^ +e)
        ) {
          this.__pointerCapturing = e;
          var i = this._globalHandlerScope;
          e ? E_(this, i) : Xo(i);
        }
      }),
      t
    );
  })(Te),
  k_ = O_,
  Fc = 1;
W.hasGlobalWindow &&
  (Fc = Math.max(
    window.devicePixelRatio ||
      (window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI) ||
      1,
    1
  ));
var Va = Fc,
  uu = 0.4,
  lu = "#333",
  fu = "#ccc",
  B_ = "#eee";
function hn() {
  return [1, 0, 0, 1, 0, 0];
}
function il(r) {
  return (
    (r[0] = 1), (r[1] = 0), (r[2] = 0), (r[3] = 1), (r[4] = 0), (r[5] = 0), r
  );
}
function F_(r, t) {
  return (
    (r[0] = t[0]),
    (r[1] = t[1]),
    (r[2] = t[2]),
    (r[3] = t[3]),
    (r[4] = t[4]),
    (r[5] = t[5]),
    r
  );
}
function ui(r, t, e) {
  var i = t[0] * e[0] + t[2] * e[1],
    n = t[1] * e[0] + t[3] * e[1],
    a = t[0] * e[2] + t[2] * e[3],
    o = t[1] * e[2] + t[3] * e[3],
    s = t[0] * e[4] + t[2] * e[5] + t[4],
    u = t[1] * e[4] + t[3] * e[5] + t[5];
  return (
    (r[0] = i), (r[1] = n), (r[2] = a), (r[3] = o), (r[4] = s), (r[5] = u), r
  );
}
function hu(r, t, e) {
  return (
    (r[0] = t[0]),
    (r[1] = t[1]),
    (r[2] = t[2]),
    (r[3] = t[3]),
    (r[4] = t[4] + e[0]),
    (r[5] = t[5] + e[1]),
    r
  );
}
function nl(r, t, e) {
  var i = t[0],
    n = t[2],
    a = t[4],
    o = t[1],
    s = t[3],
    u = t[5],
    l = Math.sin(e),
    f = Math.cos(e);
  return (
    (r[0] = i * f + o * l),
    (r[1] = -i * l + o * f),
    (r[2] = n * f + s * l),
    (r[3] = -n * l + f * s),
    (r[4] = f * a + l * u),
    (r[5] = f * u - l * a),
    r
  );
}
function N_(r, t, e) {
  var i = e[0],
    n = e[1];
  return (
    (r[0] = t[0] * i),
    (r[1] = t[1] * n),
    (r[2] = t[2] * i),
    (r[3] = t[3] * n),
    (r[4] = t[4] * i),
    (r[5] = t[5] * n),
    r
  );
}
function Nc(r, t) {
  var e = t[0],
    i = t[2],
    n = t[4],
    a = t[1],
    o = t[3],
    s = t[5],
    u = e * o - a * i;
  return u
    ? ((u = 1 / u),
      (r[0] = o * u),
      (r[1] = -a * u),
      (r[2] = -i * u),
      (r[3] = e * u),
      (r[4] = (i * s - o * n) * u),
      (r[5] = (a * n - e * s) * u),
      r)
    : null;
}
var Df = il,
  Mf = 5e-5;
function rr(r) {
  return r > Mf || r < -Mf;
}
var ir = [],
  Wr = [],
  qo = hn(),
  Zo = Math.abs,
  z_ = (function () {
    function r() {}
    return (
      (r.prototype.getLocalTransform = function (t) {
        return r.getLocalTransform(this, t);
      }),
      (r.prototype.setPosition = function (t) {
        (this.x = t[0]), (this.y = t[1]);
      }),
      (r.prototype.setScale = function (t) {
        (this.scaleX = t[0]), (this.scaleY = t[1]);
      }),
      (r.prototype.setSkew = function (t) {
        (this.skewX = t[0]), (this.skewY = t[1]);
      }),
      (r.prototype.setOrigin = function (t) {
        (this.originX = t[0]), (this.originY = t[1]);
      }),
      (r.prototype.needLocalTransform = function () {
        return (
          rr(this.rotation) ||
          rr(this.x) ||
          rr(this.y) ||
          rr(this.scaleX - 1) ||
          rr(this.scaleY - 1) ||
          rr(this.skewX) ||
          rr(this.skewY)
        );
      }),
      (r.prototype.updateTransform = function () {
        var t = this.parent && this.parent.transform,
          e = this.needLocalTransform(),
          i = this.transform;
        if (!(e || t)) {
          i && Df(i);
          return;
        }
        (i = i || hn()),
          e ? this.getLocalTransform(i) : Df(i),
          t && (e ? ui(i, t, i) : F_(i, t)),
          (this.transform = i),
          this._resolveGlobalScaleRatio(i);
      }),
      (r.prototype._resolveGlobalScaleRatio = function (t) {
        var e = this.globalScaleRatio;
        if (e != null && e !== 1) {
          this.getGlobalScale(ir);
          var i = ir[0] < 0 ? -1 : 1,
            n = ir[1] < 0 ? -1 : 1,
            a = ((ir[0] - i) * e + i) / ir[0] || 0,
            o = ((ir[1] - n) * e + n) / ir[1] || 0;
          (t[0] *= a), (t[1] *= a), (t[2] *= o), (t[3] *= o);
        }
        (this.invTransform = this.invTransform || hn()),
          Nc(this.invTransform, t);
      }),
      (r.prototype.getComputedTransform = function () {
        for (var t = this, e = []; t; ) e.push(t), (t = t.parent);
        for (; (t = e.pop()); ) t.updateTransform();
        return this.transform;
      }),
      (r.prototype.setLocalTransform = function (t) {
        if (!!t) {
          var e = t[0] * t[0] + t[1] * t[1],
            i = t[2] * t[2] + t[3] * t[3],
            n = Math.atan2(t[1], t[0]),
            a = Math.PI / 2 + n - Math.atan2(t[3], t[2]);
          (i = Math.sqrt(i) * Math.cos(a)),
            (e = Math.sqrt(e)),
            (this.skewX = a),
            (this.skewY = 0),
            (this.rotation = -n),
            (this.x = +t[4]),
            (this.y = +t[5]),
            (this.scaleX = e),
            (this.scaleY = i),
            (this.originX = 0),
            (this.originY = 0);
        }
      }),
      (r.prototype.decomposeTransform = function () {
        if (!!this.transform) {
          var t = this.parent,
            e = this.transform;
          t && t.transform && (ui(Wr, t.invTransform, e), (e = Wr));
          var i = this.originX,
            n = this.originY;
          (i || n) &&
            ((qo[4] = i),
            (qo[5] = n),
            ui(Wr, e, qo),
            (Wr[4] -= i),
            (Wr[5] -= n),
            (e = Wr)),
            this.setLocalTransform(e);
        }
      }),
      (r.prototype.getGlobalScale = function (t) {
        var e = this.transform;
        return (
          (t = t || []),
          e
            ? ((t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1])),
              (t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3])),
              e[0] < 0 && (t[0] = -t[0]),
              e[3] < 0 && (t[1] = -t[1]),
              t)
            : ((t[0] = 1), (t[1] = 1), t)
        );
      }),
      (r.prototype.transformCoordToLocal = function (t, e) {
        var i = [t, e],
          n = this.invTransform;
        return n && me(i, i, n), i;
      }),
      (r.prototype.transformCoordToGlobal = function (t, e) {
        var i = [t, e],
          n = this.transform;
        return n && me(i, i, n), i;
      }),
      (r.prototype.getLineScale = function () {
        var t = this.transform;
        return t && Zo(t[0] - 1) > 1e-10 && Zo(t[3] - 1) > 1e-10
          ? Math.sqrt(Zo(t[0] * t[3] - t[2] * t[1]))
          : 1;
      }),
      (r.prototype.copyTransform = function (t) {
        H_(this, t);
      }),
      (r.getLocalTransform = function (t, e) {
        e = e || [];
        var i = t.originX || 0,
          n = t.originY || 0,
          a = t.scaleX,
          o = t.scaleY,
          s = t.anchorX,
          u = t.anchorY,
          l = t.rotation || 0,
          f = t.x,
          h = t.y,
          c = t.skewX ? Math.tan(t.skewX) : 0,
          v = t.skewY ? Math.tan(-t.skewY) : 0;
        if (i || n || s || u) {
          var d = i + s,
            y = n + u;
          (e[4] = -d * a - c * y * o), (e[5] = -y * o - v * d * a);
        } else e[4] = e[5] = 0;
        return (
          (e[0] = a),
          (e[3] = o),
          (e[1] = v * a),
          (e[2] = c * o),
          l && nl(e, e, l),
          (e[4] += i + f),
          (e[5] += n + h),
          e
        );
      }),
      (r.initDefaultProps = (function () {
        var t = r.prototype;
        (t.scaleX = t.scaleY = t.globalScaleRatio = 1),
          (t.x =
            t.y =
            t.originX =
            t.originY =
            t.skewX =
            t.skewY =
            t.rotation =
            t.anchorX =
            t.anchorY =
              0);
      })()),
      r
    );
  })(),
  vn = [
    "x",
    "y",
    "originX",
    "originY",
    "anchorX",
    "anchorY",
    "rotation",
    "scaleX",
    "scaleY",
    "skewX",
    "skewY",
  ];
function H_(r, t) {
  for (var e = 0; e < vn.length; e++) {
    var i = vn[e];
    r[i] = t[i];
  }
}
var al = z_,
  G_ = (function () {
    function r(t, e) {
      (this.x = t || 0), (this.y = e || 0);
    }
    return (
      (r.prototype.copy = function (t) {
        return (this.x = t.x), (this.y = t.y), this;
      }),
      (r.prototype.clone = function () {
        return new r(this.x, this.y);
      }),
      (r.prototype.set = function (t, e) {
        return (this.x = t), (this.y = e), this;
      }),
      (r.prototype.equal = function (t) {
        return t.x === this.x && t.y === this.y;
      }),
      (r.prototype.add = function (t) {
        return (this.x += t.x), (this.y += t.y), this;
      }),
      (r.prototype.scale = function (t) {
        (this.x *= t), (this.y *= t);
      }),
      (r.prototype.scaleAndAdd = function (t, e) {
        (this.x += t.x * e), (this.y += t.y * e);
      }),
      (r.prototype.sub = function (t) {
        return (this.x -= t.x), (this.y -= t.y), this;
      }),
      (r.prototype.dot = function (t) {
        return this.x * t.x + this.y * t.y;
      }),
      (r.prototype.len = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }),
      (r.prototype.lenSquare = function () {
        return this.x * this.x + this.y * this.y;
      }),
      (r.prototype.normalize = function () {
        var t = this.len();
        return (this.x /= t), (this.y /= t), this;
      }),
      (r.prototype.distance = function (t) {
        var e = this.x - t.x,
          i = this.y - t.y;
        return Math.sqrt(e * e + i * i);
      }),
      (r.prototype.distanceSquare = function (t) {
        var e = this.x - t.x,
          i = this.y - t.y;
        return e * e + i * i;
      }),
      (r.prototype.negate = function () {
        return (this.x = -this.x), (this.y = -this.y), this;
      }),
      (r.prototype.transform = function (t) {
        if (!!t) {
          var e = this.x,
            i = this.y;
          return (
            (this.x = t[0] * e + t[2] * i + t[4]),
            (this.y = t[1] * e + t[3] * i + t[5]),
            this
          );
        }
      }),
      (r.prototype.toArray = function (t) {
        return (t[0] = this.x), (t[1] = this.y), t;
      }),
      (r.prototype.fromArray = function (t) {
        (this.x = t[0]), (this.y = t[1]);
      }),
      (r.set = function (t, e, i) {
        (t.x = e), (t.y = i);
      }),
      (r.copy = function (t, e) {
        (t.x = e.x), (t.y = e.y);
      }),
      (r.len = function (t) {
        return Math.sqrt(t.x * t.x + t.y * t.y);
      }),
      (r.lenSquare = function (t) {
        return t.x * t.x + t.y * t.y;
      }),
      (r.dot = function (t, e) {
        return t.x * e.x + t.y * e.y;
      }),
      (r.add = function (t, e, i) {
        (t.x = e.x + i.x), (t.y = e.y + i.y);
      }),
      (r.sub = function (t, e, i) {
        (t.x = e.x - i.x), (t.y = e.y - i.y);
      }),
      (r.scale = function (t, e, i) {
        (t.x = e.x * i), (t.y = e.y * i);
      }),
      (r.scaleAndAdd = function (t, e, i, n) {
        (t.x = e.x + i.x * n), (t.y = e.y + i.y * n);
      }),
      (r.lerp = function (t, e, i, n) {
        var a = 1 - n;
        (t.x = a * e.x + n * i.x), (t.y = a * e.y + n * i.y);
      }),
      r
    );
  })(),
  J = G_,
  Vn = Math.min,
  Wn = Math.max,
  nr = new J(),
  ar = new J(),
  or = new J(),
  sr = new J(),
  Ci = new J(),
  Di = new J(),
  V_ = (function () {
    function r(t, e, i, n) {
      i < 0 && ((t = t + i), (i = -i)),
        n < 0 && ((e = e + n), (n = -n)),
        (this.x = t),
        (this.y = e),
        (this.width = i),
        (this.height = n);
    }
    return (
      (r.prototype.union = function (t) {
        var e = Vn(t.x, this.x),
          i = Vn(t.y, this.y);
        isFinite(this.x) && isFinite(this.width)
          ? (this.width = Wn(t.x + t.width, this.x + this.width) - e)
          : (this.width = t.width),
          isFinite(this.y) && isFinite(this.height)
            ? (this.height = Wn(t.y + t.height, this.y + this.height) - i)
            : (this.height = t.height),
          (this.x = e),
          (this.y = i);
      }),
      (r.prototype.applyTransform = function (t) {
        r.applyTransform(this, this, t);
      }),
      (r.prototype.calculateTransform = function (t) {
        var e = this,
          i = t.width / e.width,
          n = t.height / e.height,
          a = hn();
        return (
          hu(a, a, [-e.x, -e.y]), N_(a, a, [i, n]), hu(a, a, [t.x, t.y]), a
        );
      }),
      (r.prototype.intersect = function (t, e) {
        if (!t) return !1;
        t instanceof r || (t = r.create(t));
        var i = this,
          n = i.x,
          a = i.x + i.width,
          o = i.y,
          s = i.y + i.height,
          u = t.x,
          l = t.x + t.width,
          f = t.y,
          h = t.y + t.height,
          c = !(a < u || l < n || s < f || h < o);
        if (e) {
          var v = 1 / 0,
            d = 0,
            y = Math.abs(a - u),
            p = Math.abs(l - n),
            g = Math.abs(s - f),
            _ = Math.abs(h - o),
            m = Math.min(y, p),
            w = Math.min(g, _);
          a < u || l < n
            ? m > d && ((d = m), y < p ? J.set(Di, -y, 0) : J.set(Di, p, 0))
            : m < v && ((v = m), y < p ? J.set(Ci, y, 0) : J.set(Ci, -p, 0)),
            s < f || h < o
              ? w > d && ((d = w), g < _ ? J.set(Di, 0, -g) : J.set(Di, 0, _))
              : m < v && ((v = m), g < _ ? J.set(Ci, 0, g) : J.set(Ci, 0, -_));
        }
        return e && J.copy(e, c ? Ci : Di), c;
      }),
      (r.prototype.contain = function (t, e) {
        var i = this;
        return (
          t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
        );
      }),
      (r.prototype.clone = function () {
        return new r(this.x, this.y, this.width, this.height);
      }),
      (r.prototype.copy = function (t) {
        r.copy(this, t);
      }),
      (r.prototype.plain = function () {
        return { x: this.x, y: this.y, width: this.width, height: this.height };
      }),
      (r.prototype.isFinite = function () {
        return (
          isFinite(this.x) &&
          isFinite(this.y) &&
          isFinite(this.width) &&
          isFinite(this.height)
        );
      }),
      (r.prototype.isZero = function () {
        return this.width === 0 || this.height === 0;
      }),
      (r.create = function (t) {
        return new r(t.x, t.y, t.width, t.height);
      }),
      (r.copy = function (t, e) {
        (t.x = e.x), (t.y = e.y), (t.width = e.width), (t.height = e.height);
      }),
      (r.applyTransform = function (t, e, i) {
        if (!i) {
          t !== e && r.copy(t, e);
          return;
        }
        if (i[1] < 1e-5 && i[1] > -1e-5 && i[2] < 1e-5 && i[2] > -1e-5) {
          var n = i[0],
            a = i[3],
            o = i[4],
            s = i[5];
          (t.x = e.x * n + o),
            (t.y = e.y * a + s),
            (t.width = e.width * n),
            (t.height = e.height * a),
            t.width < 0 && ((t.x += t.width), (t.width = -t.width)),
            t.height < 0 && ((t.y += t.height), (t.height = -t.height));
          return;
        }
        (nr.x = or.x = e.x),
          (nr.y = sr.y = e.y),
          (ar.x = sr.x = e.x + e.width),
          (ar.y = or.y = e.y + e.height),
          nr.transform(i),
          sr.transform(i),
          ar.transform(i),
          or.transform(i),
          (t.x = Vn(nr.x, ar.x, or.x, sr.x)),
          (t.y = Vn(nr.y, ar.y, or.y, sr.y));
        var u = Wn(nr.x, ar.x, or.x, sr.x),
          l = Wn(nr.y, ar.y, or.y, sr.y);
        (t.width = u - t.x), (t.height = l - t.y);
      }),
      r
    );
  })(),
  j = V_,
  Pf = {};
function Vt(r, t) {
  t = t || Or;
  var e = Pf[t];
  e || (e = Pf[t] = new Dn(500));
  var i = e.get(r);
  return i == null && ((i = Br.measureText(r, t).width), e.put(r, i)), i;
}
function Af(r, t, e, i) {
  var n = Vt(r, t),
    a = ol(t),
    o = Yi(0, n, e),
    s = ei(0, a, i),
    u = new j(o, s, n, a);
  return u;
}
function zc(r, t, e, i) {
  var n = ((r || "") + "").split(`
`),
    a = n.length;
  if (a === 1) return Af(n[0], t, e, i);
  for (var o = new j(0, 0, 0, 0), s = 0; s < n.length; s++) {
    var u = Af(n[s], t, e, i);
    s === 0 ? o.copy(u) : o.union(u);
  }
  return o;
}
function Yi(r, t, e) {
  return e === "right" ? (r -= t) : e === "center" && (r -= t / 2), r;
}
function ei(r, t, e) {
  return e === "middle" ? (r -= t / 2) : e === "bottom" && (r -= t), r;
}
function ol(r) {
  return Vt("\u56FD", r);
}
function kr(r, t) {
  return typeof r == "string"
    ? r.lastIndexOf("%") >= 0
      ? (parseFloat(r) / 100) * t
      : parseFloat(r)
    : r;
}
function Hc(r, t, e) {
  var i = t.position || "inside",
    n = t.distance != null ? t.distance : 5,
    a = e.height,
    o = e.width,
    s = a / 2,
    u = e.x,
    l = e.y,
    f = "left",
    h = "top";
  if (i instanceof Array)
    (u += kr(i[0], e.width)), (l += kr(i[1], e.height)), (f = null), (h = null);
  else
    switch (i) {
      case "left":
        (u -= n), (l += s), (f = "right"), (h = "middle");
        break;
      case "right":
        (u += n + o), (l += s), (h = "middle");
        break;
      case "top":
        (u += o / 2), (l -= n), (f = "center"), (h = "bottom");
        break;
      case "bottom":
        (u += o / 2), (l += a + n), (f = "center");
        break;
      case "inside":
        (u += o / 2), (l += s), (f = "center"), (h = "middle");
        break;
      case "insideLeft":
        (u += n), (l += s), (h = "middle");
        break;
      case "insideRight":
        (u += o - n), (l += s), (f = "right"), (h = "middle");
        break;
      case "insideTop":
        (u += o / 2), (l += n), (f = "center");
        break;
      case "insideBottom":
        (u += o / 2), (l += a - n), (f = "center"), (h = "bottom");
        break;
      case "insideTopLeft":
        (u += n), (l += n);
        break;
      case "insideTopRight":
        (u += o - n), (l += n), (f = "right");
        break;
      case "insideBottomLeft":
        (u += n), (l += a - n), (h = "bottom");
        break;
      case "insideBottomRight":
        (u += o - n), (l += a - n), (f = "right"), (h = "bottom");
        break;
    }
  return (
    (r = r || {}), (r.x = u), (r.y = l), (r.align = f), (r.verticalAlign = h), r
  );
}
var Ko = "__zr_normal__",
  Qo = vn.concat(["ignore"]),
  W_ = Ke(
    vn,
    function (r, t) {
      return (r[t] = !0), r;
    },
    { ignore: !1 }
  ),
  Ur = {},
  U_ = new j(0, 0, 0, 0),
  sl = (function () {
    function r(t) {
      (this.id = pc()),
        (this.animators = []),
        (this.currentStates = []),
        (this.states = {}),
        this._init(t);
    }
    return (
      (r.prototype._init = function (t) {
        this.attr(t);
      }),
      (r.prototype.drift = function (t, e, i) {
        switch (this.draggable) {
          case "horizontal":
            e = 0;
            break;
          case "vertical":
            t = 0;
            break;
        }
        var n = this.transform;
        n || (n = this.transform = [1, 0, 0, 1, 0, 0]),
          (n[4] += t),
          (n[5] += e),
          this.decomposeTransform(),
          this.markRedraw();
      }),
      (r.prototype.beforeUpdate = function () {}),
      (r.prototype.afterUpdate = function () {}),
      (r.prototype.update = function () {
        this.updateTransform(), this.__dirty && this.updateInnerText();
      }),
      (r.prototype.updateInnerText = function (t) {
        var e = this._textContent;
        if (e && (!e.ignore || t)) {
          this.textConfig || (this.textConfig = {});
          var i = this.textConfig,
            n = i.local,
            a = e.innerTransformable,
            o = void 0,
            s = void 0,
            u = !1;
          a.parent = n ? this : null;
          var l = !1;
          if ((a.copyTransform(e), i.position != null)) {
            var f = U_;
            i.layoutRect
              ? f.copy(i.layoutRect)
              : f.copy(this.getBoundingRect()),
              n || f.applyTransform(this.transform),
              this.calculateTextPosition
                ? this.calculateTextPosition(Ur, i, f)
                : Hc(Ur, i, f),
              (a.x = Ur.x),
              (a.y = Ur.y),
              (o = Ur.align),
              (s = Ur.verticalAlign);
            var h = i.origin;
            if (h && i.rotation != null) {
              var c = void 0,
                v = void 0;
              h === "center"
                ? ((c = f.width * 0.5), (v = f.height * 0.5))
                : ((c = kr(h[0], f.width)), (v = kr(h[1], f.height))),
                (l = !0),
                (a.originX = -a.x + c + (n ? 0 : f.x)),
                (a.originY = -a.y + v + (n ? 0 : f.y));
            }
          }
          i.rotation != null && (a.rotation = i.rotation);
          var d = i.offset;
          d &&
            ((a.x += d[0]),
            (a.y += d[1]),
            l || ((a.originX = -d[0]), (a.originY = -d[1])));
          var y =
              i.inside == null
                ? typeof i.position == "string" &&
                  i.position.indexOf("inside") >= 0
                : i.inside,
            p =
              this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}),
            g = void 0,
            _ = void 0,
            m = void 0;
          y && this.canBeInsideText()
            ? ((g = i.insideFill),
              (_ = i.insideStroke),
              (g == null || g === "auto") && (g = this.getInsideTextFill()),
              (_ == null || _ === "auto") &&
                ((_ = this.getInsideTextStroke(g)), (m = !0)))
            : ((g = i.outsideFill),
              (_ = i.outsideStroke),
              (g == null || g === "auto") && (g = this.getOutsideFill()),
              (_ == null || _ === "auto") &&
                ((_ = this.getOutsideStroke(g)), (m = !0))),
            (g = g || "#000"),
            (g !== p.fill ||
              _ !== p.stroke ||
              m !== p.autoStroke ||
              o !== p.align ||
              s !== p.verticalAlign) &&
              ((u = !0),
              (p.fill = g),
              (p.stroke = _),
              (p.autoStroke = m),
              (p.align = o),
              (p.verticalAlign = s),
              e.setDefaultTextStyle(p)),
            (e.__dirty |= Gt),
            u && e.dirtyStyle(!0);
        }
      }),
      (r.prototype.canBeInsideText = function () {
        return !0;
      }),
      (r.prototype.getInsideTextFill = function () {
        return "#fff";
      }),
      (r.prototype.getInsideTextStroke = function (t) {
        return "#000";
      }),
      (r.prototype.getOutsideFill = function () {
        return this.__zr && this.__zr.isDarkMode() ? fu : lu;
      }),
      (r.prototype.getOutsideStroke = function (t) {
        var e = this.__zr && this.__zr.getBackgroundColor(),
          i = typeof e == "string" && se(e);
        i || (i = [255, 255, 255, 1]);
        for (var n = i[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
          i[o] = i[o] * n + (a ? 0 : 255) * (1 - n);
        return (i[3] = 1), yi(i, "rgba");
      }),
      (r.prototype.traverse = function (t, e) {}),
      (r.prototype.attrKV = function (t, e) {
        t === "textConfig"
          ? this.setTextConfig(e)
          : t === "textContent"
          ? this.setTextContent(e)
          : t === "clipPath"
          ? this.setClipPath(e)
          : t === "extra"
          ? ((this.extra = this.extra || {}), O(this.extra, e))
          : (this[t] = e);
      }),
      (r.prototype.hide = function () {
        (this.ignore = !0), this.markRedraw();
      }),
      (r.prototype.show = function () {
        (this.ignore = !1), this.markRedraw();
      }),
      (r.prototype.attr = function (t, e) {
        if (typeof t == "string") this.attrKV(t, e);
        else if (F(t))
          for (var i = t, n = ft(i), a = 0; a < n.length; a++) {
            var o = n[a];
            this.attrKV(o, t[o]);
          }
        return this.markRedraw(), this;
      }),
      (r.prototype.saveCurrentToNormalState = function (t) {
        this._innerSaveToNormal(t);
        for (var e = this._normalState, i = 0; i < this.animators.length; i++) {
          var n = this.animators[i],
            a = n.__fromStateTransition;
          if (!(n.getLoop() || (a && a !== Ko))) {
            var o = n.targetName,
              s = o ? e[o] : e;
            n.saveTo(s);
          }
        }
      }),
      (r.prototype._innerSaveToNormal = function (t) {
        var e = this._normalState;
        e || (e = this._normalState = {}),
          t.textConfig && !e.textConfig && (e.textConfig = this.textConfig),
          this._savePrimaryToNormal(t, e, Qo);
      }),
      (r.prototype._savePrimaryToNormal = function (t, e, i) {
        for (var n = 0; n < i.length; n++) {
          var a = i[n];
          t[a] != null && !(a in e) && (e[a] = this[a]);
        }
      }),
      (r.prototype.hasState = function () {
        return this.currentStates.length > 0;
      }),
      (r.prototype.getState = function (t) {
        return this.states[t];
      }),
      (r.prototype.ensureState = function (t) {
        var e = this.states;
        return e[t] || (e[t] = {}), e[t];
      }),
      (r.prototype.clearStates = function (t) {
        this.useState(Ko, !1, t);
      }),
      (r.prototype.useState = function (t, e, i, n) {
        var a = t === Ko,
          o = this.hasState();
        if (!(!o && a)) {
          var s = this.currentStates,
            u = this.stateTransition;
          if (!(et(s, t) >= 0 && (e || s.length === 1))) {
            var l;
            if (
              (this.stateProxy && !a && (l = this.stateProxy(t)),
              l || (l = this.states && this.states[t]),
              !l && !a)
            ) {
              ju("State " + t + " not exists.");
              return;
            }
            a || this.saveCurrentToNormalState(l);
            var f = !!((l && l.hoverLayer) || n);
            f && this._toggleHoverLayerFlag(!0),
              this._applyStateObj(
                t,
                l,
                this._normalState,
                e,
                !i && !this.__inHover && u && u.duration > 0,
                u
              );
            var h = this._textContent,
              c = this._textGuide;
            return (
              h && h.useState(t, e, i, f),
              c && c.useState(t, e, i, f),
              a
                ? ((this.currentStates = []), (this._normalState = {}))
                : e
                ? this.currentStates.push(t)
                : (this.currentStates = [t]),
              this._updateAnimationTargets(),
              this.markRedraw(),
              !f &&
                this.__inHover &&
                (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~Gt)),
              l
            );
          }
        }
      }),
      (r.prototype.useStates = function (t, e, i) {
        if (!t.length) this.clearStates();
        else {
          var n = [],
            a = this.currentStates,
            o = t.length,
            s = o === a.length;
          if (s) {
            for (var u = 0; u < o; u++)
              if (t[u] !== a[u]) {
                s = !1;
                break;
              }
          }
          if (s) return;
          for (var u = 0; u < o; u++) {
            var l = t[u],
              f = void 0;
            this.stateProxy && (f = this.stateProxy(l, t)),
              f || (f = this.states[l]),
              f && n.push(f);
          }
          var h = n[o - 1],
            c = !!((h && h.hoverLayer) || i);
          c && this._toggleHoverLayerFlag(!0);
          var v = this._mergeStates(n),
            d = this.stateTransition;
          this.saveCurrentToNormalState(v),
            this._applyStateObj(
              t.join(","),
              v,
              this._normalState,
              !1,
              !e && !this.__inHover && d && d.duration > 0,
              d
            );
          var y = this._textContent,
            p = this._textGuide;
          y && y.useStates(t, e, c),
            p && p.useStates(t, e, c),
            this._updateAnimationTargets(),
            (this.currentStates = t.slice()),
            this.markRedraw(),
            !c &&
              this.__inHover &&
              (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~Gt));
        }
      }),
      (r.prototype._updateAnimationTargets = function () {
        for (var t = 0; t < this.animators.length; t++) {
          var e = this.animators[t];
          e.targetName && e.changeTarget(this[e.targetName]);
        }
      }),
      (r.prototype.removeState = function (t) {
        var e = et(this.currentStates, t);
        if (e >= 0) {
          var i = this.currentStates.slice();
          i.splice(e, 1), this.useStates(i);
        }
      }),
      (r.prototype.replaceState = function (t, e, i) {
        var n = this.currentStates.slice(),
          a = et(n, t),
          o = et(n, e) >= 0;
        a >= 0 ? (o ? n.splice(a, 1) : (n[a] = e)) : i && !o && n.push(e),
          this.useStates(n);
      }),
      (r.prototype.toggleState = function (t, e) {
        e ? this.useState(t, !0) : this.removeState(t);
      }),
      (r.prototype._mergeStates = function (t) {
        for (var e = {}, i, n = 0; n < t.length; n++) {
          var a = t[n];
          O(e, a), a.textConfig && ((i = i || {}), O(i, a.textConfig));
        }
        return i && (e.textConfig = i), e;
      }),
      (r.prototype._applyStateObj = function (t, e, i, n, a, o) {
        var s = !(e && n);
        e && e.textConfig
          ? ((this.textConfig = O({}, n ? this.textConfig : i.textConfig)),
            O(this.textConfig, e.textConfig))
          : s && i.textConfig && (this.textConfig = i.textConfig);
        for (var u = {}, l = !1, f = 0; f < Qo.length; f++) {
          var h = Qo[f],
            c = a && W_[h];
          e && e[h] != null
            ? c
              ? ((l = !0), (u[h] = e[h]))
              : (this[h] = e[h])
            : s &&
              i[h] != null &&
              (c ? ((l = !0), (u[h] = i[h])) : (this[h] = i[h]));
        }
        if (!a)
          for (var f = 0; f < this.animators.length; f++) {
            var v = this.animators[f],
              d = v.targetName;
            v.getLoop() || v.__changeFinalValue(d ? (e || i)[d] : e || i);
          }
        l && this._transitionState(t, u, o);
      }),
      (r.prototype._attachComponent = function (t) {
        if (!(t.__zr && !t.__hostTarget) && t !== this) {
          var e = this.__zr;
          e && t.addSelfToZr(e), (t.__zr = e), (t.__hostTarget = this);
        }
      }),
      (r.prototype._detachComponent = function (t) {
        t.__zr && t.removeSelfFromZr(t.__zr),
          (t.__zr = null),
          (t.__hostTarget = null);
      }),
      (r.prototype.getClipPath = function () {
        return this._clipPath;
      }),
      (r.prototype.setClipPath = function (t) {
        this._clipPath && this._clipPath !== t && this.removeClipPath(),
          this._attachComponent(t),
          (this._clipPath = t),
          this.markRedraw();
      }),
      (r.prototype.removeClipPath = function () {
        var t = this._clipPath;
        t &&
          (this._detachComponent(t),
          (this._clipPath = null),
          this.markRedraw());
      }),
      (r.prototype.getTextContent = function () {
        return this._textContent;
      }),
      (r.prototype.setTextContent = function (t) {
        var e = this._textContent;
        e !== t &&
          (e && e !== t && this.removeTextContent(),
          (t.innerTransformable = new al()),
          this._attachComponent(t),
          (this._textContent = t),
          this.markRedraw());
      }),
      (r.prototype.setTextConfig = function (t) {
        this.textConfig || (this.textConfig = {}),
          O(this.textConfig, t),
          this.markRedraw();
      }),
      (r.prototype.removeTextConfig = function () {
        (this.textConfig = null), this.markRedraw();
      }),
      (r.prototype.removeTextContent = function () {
        var t = this._textContent;
        t &&
          ((t.innerTransformable = null),
          this._detachComponent(t),
          (this._textContent = null),
          (this._innerTextDefaultStyle = null),
          this.markRedraw());
      }),
      (r.prototype.getTextGuideLine = function () {
        return this._textGuide;
      }),
      (r.prototype.setTextGuideLine = function (t) {
        this._textGuide && this._textGuide !== t && this.removeTextGuideLine(),
          this._attachComponent(t),
          (this._textGuide = t),
          this.markRedraw();
      }),
      (r.prototype.removeTextGuideLine = function () {
        var t = this._textGuide;
        t &&
          (this._detachComponent(t),
          (this._textGuide = null),
          this.markRedraw());
      }),
      (r.prototype.markRedraw = function () {
        this.__dirty |= Gt;
        var t = this.__zr;
        t && (this.__inHover ? t.refreshHover() : t.refresh()),
          this.__hostTarget && this.__hostTarget.markRedraw();
      }),
      (r.prototype.dirty = function () {
        this.markRedraw();
      }),
      (r.prototype._toggleHoverLayerFlag = function (t) {
        this.__inHover = t;
        var e = this._textContent,
          i = this._textGuide;
        e && (e.__inHover = t), i && (i.__inHover = t);
      }),
      (r.prototype.addSelfToZr = function (t) {
        if (this.__zr !== t) {
          this.__zr = t;
          var e = this.animators;
          if (e)
            for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
          this._clipPath && this._clipPath.addSelfToZr(t),
            this._textContent && this._textContent.addSelfToZr(t),
            this._textGuide && this._textGuide.addSelfToZr(t);
        }
      }),
      (r.prototype.removeSelfFromZr = function (t) {
        if (!!this.__zr) {
          this.__zr = null;
          var e = this.animators;
          if (e)
            for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
          this._clipPath && this._clipPath.removeSelfFromZr(t),
            this._textContent && this._textContent.removeSelfFromZr(t),
            this._textGuide && this._textGuide.removeSelfFromZr(t);
        }
      }),
      (r.prototype.animate = function (t, e, i) {
        var n = t ? this[t] : this,
          a = new rl(n, e, i);
        return t && (a.targetName = t), this.addAnimator(a, t), a;
      }),
      (r.prototype.addAnimator = function (t, e) {
        var i = this.__zr,
          n = this;
        t
          .during(function () {
            n.updateDuringAnimation(e);
          })
          .done(function () {
            var a = n.animators,
              o = et(a, t);
            o >= 0 && a.splice(o, 1);
          }),
          this.animators.push(t),
          i && i.animation.addAnimator(t),
          i && i.wakeUp();
      }),
      (r.prototype.updateDuringAnimation = function (t) {
        this.markRedraw();
      }),
      (r.prototype.stopAnimation = function (t, e) {
        for (var i = this.animators, n = i.length, a = [], o = 0; o < n; o++) {
          var s = i[o];
          !t || t === s.scope ? s.stop(e) : a.push(s);
        }
        return (this.animators = a), this;
      }),
      (r.prototype.animateTo = function (t, e, i) {
        Jo(this, t, e, i);
      }),
      (r.prototype.animateFrom = function (t, e, i) {
        Jo(this, t, e, i, !0);
      }),
      (r.prototype._transitionState = function (t, e, i, n) {
        for (var a = Jo(this, e, i, n), o = 0; o < a.length; o++)
          a[o].__fromStateTransition = t;
      }),
      (r.prototype.getBoundingRect = function () {
        return null;
      }),
      (r.prototype.getPaintRect = function () {
        return null;
      }),
      (r.initDefaultProps = (function () {
        var t = r.prototype;
        (t.type = "element"),
          (t.name = ""),
          (t.ignore =
            t.silent =
            t.isGroup =
            t.draggable =
            t.dragging =
            t.ignoreClip =
            t.__inHover =
              !1),
          (t.__dirty = Gt);
        function e(i, n, a, o) {
          Object.defineProperty(t, i, {
            get: function () {
              if (!this[n]) {
                var u = (this[n] = []);
                s(this, u);
              }
              return this[n];
            },
            set: function (u) {
              (this[a] = u[0]), (this[o] = u[1]), (this[n] = u), s(this, u);
            },
          });
          function s(u, l) {
            Object.defineProperty(l, 0, {
              get: function () {
                return u[a];
              },
              set: function (f) {
                u[a] = f;
              },
            }),
              Object.defineProperty(l, 1, {
                get: function () {
                  return u[o];
                },
                set: function (f) {
                  u[o] = f;
                },
              });
          }
        }
        Object.defineProperty &&
          (e("position", "_legacyPos", "x", "y"),
          e("scale", "_legacyScale", "scaleX", "scaleY"),
          e("origin", "_legacyOrigin", "originX", "originY"));
      })()),
      r
    );
  })();
Oe(sl, Te);
Oe(sl, al);
function Jo(r, t, e, i, n) {
  e = e || {};
  var a = [];
  Gc(r, "", r, t, e, i, a, n);
  var o = a.length,
    s = !1,
    u = e.done,
    l = e.aborted,
    f = function () {
      (s = !0), o--, o <= 0 && (s ? u && u() : l && l());
    },
    h = function () {
      o--, o <= 0 && (s ? u && u() : l && l());
    };
  o || (u && u()),
    a.length > 0 &&
      e.during &&
      a[0].during(function (d, y) {
        e.during(y);
      });
  for (var c = 0; c < a.length; c++) {
    var v = a[c];
    f && v.done(f),
      h && v.aborted(h),
      e.force && v.duration(e.duration),
      v.start(e.easing);
  }
  return a;
}
function jo(r, t, e) {
  for (var i = 0; i < e; i++) r[i] = t[i];
}
function Y_(r) {
  return kt(r[0]);
}
function $_(r, t, e) {
  if (kt(t[e]))
    if ((kt(r[e]) || (r[e] = []), Wt(t[e]))) {
      var i = t[e].length;
      r[e].length !== i &&
        ((r[e] = new t[e].constructor(i)), jo(r[e], t[e], i));
    } else {
      var n = t[e],
        a = r[e],
        o = n.length;
      if (Y_(n))
        for (var s = n[0].length, u = 0; u < o; u++)
          a[u] ? jo(a[u], n[u], s) : (a[u] = Array.prototype.slice.call(n[u]));
      else jo(a, n, o);
      a.length = n.length;
    }
  else r[e] = t[e];
}
function X_(r, t) {
  return r === t || (kt(r) && kt(t) && q_(r, t));
}
function q_(r, t) {
  var e = r.length;
  if (e !== t.length) return !1;
  for (var i = 0; i < e; i++) if (r[i] !== t[i]) return !1;
  return !0;
}
function Gc(r, t, e, i, n, a, o, s) {
  for (
    var u = ft(i),
      l = n.duration,
      f = n.delay,
      h = n.additive,
      c = n.setToFinal,
      v = !F(a),
      d = r.animators,
      y = [],
      p = 0;
    p < u.length;
    p++
  ) {
    var g = u[p],
      _ = i[g];
    if (_ != null && e[g] != null && (v || a[g]))
      if (F(_) && !kt(_) && !oo(_)) {
        if (t) {
          s || ((e[g] = _), r.updateDuringAnimation(t));
          continue;
        }
        Gc(r, g, e[g], _, n, a && a[g], o, s);
      } else y.push(g);
    else s || ((e[g] = _), r.updateDuringAnimation(t), y.push(g));
  }
  var m = y.length;
  if (!h && m)
    for (var w = 0; w < d.length; w++) {
      var b = d[w];
      if (b.targetName === t) {
        var S = b.stopTracks(y);
        if (S) {
          var D = et(d, b);
          d.splice(D, 1);
        }
      }
    }
  if (
    (n.force ||
      ((y = zt(y, function (P) {
        return !X_(i[P], e[P]);
      })),
      (m = y.length)),
    m > 0 || (n.force && !o.length))
  ) {
    var T = void 0,
      x = void 0,
      M = void 0;
    if (s) {
      (x = {}), c && (T = {});
      for (var w = 0; w < m; w++) {
        var g = y[w];
        (x[g] = e[g]), c ? (T[g] = i[g]) : (e[g] = i[g]);
      }
    } else if (c) {
      M = {};
      for (var w = 0; w < m; w++) {
        var g = y[w];
        (M[g] = Sa(e[g])), $_(e, i, g);
      }
    }
    var b = new rl(
      e,
      !1,
      !1,
      h
        ? zt(d, function (A) {
            return A.targetName === t;
          })
        : null
    );
    (b.targetName = t),
      n.scope && (b.scope = n.scope),
      c && T && b.whenWithKeys(0, T, y),
      M && b.whenWithKeys(0, M, y),
      b.whenWithKeys(l == null ? 500 : l, s ? x : i, y).delay(f || 0),
      r.addAnimator(b, t),
      o.push(b);
  }
}
var Vc = sl,
  Wc = (function (r) {
    Q(t, r);
    function t(e) {
      var i = r.call(this) || this;
      return (i.isGroup = !0), (i._children = []), i.attr(e), i;
    }
    return (
      (t.prototype.childrenRef = function () {
        return this._children;
      }),
      (t.prototype.children = function () {
        return this._children.slice();
      }),
      (t.prototype.childAt = function (e) {
        return this._children[e];
      }),
      (t.prototype.childOfName = function (e) {
        for (var i = this._children, n = 0; n < i.length; n++)
          if (i[n].name === e) return i[n];
      }),
      (t.prototype.childCount = function () {
        return this._children.length;
      }),
      (t.prototype.add = function (e) {
        return (
          e &&
            e !== this &&
            e.parent !== this &&
            (this._children.push(e), this._doAdd(e)),
          this
        );
      }),
      (t.prototype.addBefore = function (e, i) {
        if (e && e !== this && e.parent !== this && i && i.parent === this) {
          var n = this._children,
            a = n.indexOf(i);
          a >= 0 && (n.splice(a, 0, e), this._doAdd(e));
        }
        return this;
      }),
      (t.prototype.replace = function (e, i) {
        var n = et(this._children, e);
        return n >= 0 && this.replaceAt(i, n), this;
      }),
      (t.prototype.replaceAt = function (e, i) {
        var n = this._children,
          a = n[i];
        if (e && e !== this && e.parent !== this && e !== a) {
          (n[i] = e), (a.parent = null);
          var o = this.__zr;
          o && a.removeSelfFromZr(o), this._doAdd(e);
        }
        return this;
      }),
      (t.prototype._doAdd = function (e) {
        e.parent && e.parent.remove(e), (e.parent = this);
        var i = this.__zr;
        i && i !== e.__zr && e.addSelfToZr(i), i && i.refresh();
      }),
      (t.prototype.remove = function (e) {
        var i = this.__zr,
          n = this._children,
          a = et(n, e);
        return a < 0
          ? this
          : (n.splice(a, 1),
            (e.parent = null),
            i && e.removeSelfFromZr(i),
            i && i.refresh(),
            this);
      }),
      (t.prototype.removeAll = function () {
        for (var e = this._children, i = this.__zr, n = 0; n < e.length; n++) {
          var a = e[n];
          i && a.removeSelfFromZr(i), (a.parent = null);
        }
        return (e.length = 0), this;
      }),
      (t.prototype.eachChild = function (e, i) {
        for (var n = this._children, a = 0; a < n.length; a++) {
          var o = n[a];
          e.call(i, o, a);
        }
        return this;
      }),
      (t.prototype.traverse = function (e, i) {
        for (var n = 0; n < this._children.length; n++) {
          var a = this._children[n],
            o = e.call(i, a);
          a.isGroup && !o && a.traverse(e, i);
        }
        return this;
      }),
      (t.prototype.addSelfToZr = function (e) {
        r.prototype.addSelfToZr.call(this, e);
        for (var i = 0; i < this._children.length; i++) {
          var n = this._children[i];
          n.addSelfToZr(e);
        }
      }),
      (t.prototype.removeSelfFromZr = function (e) {
        r.prototype.removeSelfFromZr.call(this, e);
        for (var i = 0; i < this._children.length; i++) {
          var n = this._children[i];
          n.removeSelfFromZr(e);
        }
      }),
      (t.prototype.getBoundingRect = function (e) {
        for (
          var i = new j(0, 0, 0, 0),
            n = e || this._children,
            a = [],
            o = null,
            s = 0;
          s < n.length;
          s++
        ) {
          var u = n[s];
          if (!(u.ignore || u.invisible)) {
            var l = u.getBoundingRect(),
              f = u.getLocalTransform(a);
            f
              ? (j.applyTransform(i, l, f), (o = o || i.clone()), o.union(i))
              : ((o = o || l.clone()), o.union(l));
          }
        }
        return o || i;
      }),
      t
    );
  })(Vc);
Wc.prototype.type = "group";
var be = Wc;
/*!
 * ZRender, a high performance 2d drawing library.
 *
 * Copyright (c) 2013, Baidu Inc.
 * All rights reserved.
 *
 * LICENSE
 * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
 */ var Ca = {},
  Uc = {};
function Z_(r) {
  delete Uc[r];
}
function K_(r) {
  if (!r) return !1;
  if (typeof r == "string") return Ga(r, 1) < uu;
  if (r.colorStops) {
    for (var t = r.colorStops, e = 0, i = t.length, n = 0; n < i; n++)
      e += Ga(t[n].color, 1);
    return (e /= i), e < uu;
  }
  return !1;
}
var Q_ = (function () {
  function r(t, e, i) {
    var n = this;
    (this._sleepAfterStill = 10),
      (this._stillFrameAccum = 0),
      (this._needsRefresh = !0),
      (this._needsRefreshHover = !0),
      (this._darkMode = !1),
      (i = i || {}),
      (this.dom = e),
      (this.id = t);
    var a = new a_(),
      o = i.renderer || "canvas";
    Ca[o] || (o = ft(Ca)[0]),
      (i.useDirtyRect = i.useDirtyRect == null ? !1 : i.useDirtyRect);
    var s = new Ca[o](e, a, i, t),
      u = i.ssr || s.ssrOnly;
    (this.storage = a), (this.painter = s);
    var l =
      !W.node && !W.worker && !u ? new k_(s.getViewportRoot(), s.root) : null;
    (this.handler = new t_(a, s, l, s.root)),
      (this.animation = new M_({
        stage: {
          update: u
            ? null
            : function () {
                return n._flush(!0);
              },
        },
      })),
      u || this.animation.start();
  }
  return (
    (r.prototype.add = function (t) {
      !t || (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
    }),
    (r.prototype.remove = function (t) {
      !t || (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
    }),
    (r.prototype.configLayer = function (t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e),
        this.refresh();
    }),
    (r.prototype.setBackgroundColor = function (t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t),
        this.refresh(),
        (this._backgroundColor = t),
        (this._darkMode = K_(t));
    }),
    (r.prototype.getBackgroundColor = function () {
      return this._backgroundColor;
    }),
    (r.prototype.setDarkMode = function (t) {
      this._darkMode = t;
    }),
    (r.prototype.isDarkMode = function () {
      return this._darkMode;
    }),
    (r.prototype.refreshImmediately = function (t) {
      t || this.animation.update(!0),
        (this._needsRefresh = !1),
        this.painter.refresh(),
        (this._needsRefresh = !1);
    }),
    (r.prototype.refresh = function () {
      (this._needsRefresh = !0), this.animation.start();
    }),
    (r.prototype.flush = function () {
      this._flush(!1);
    }),
    (r.prototype._flush = function (t) {
      var e,
        i = ni();
      this._needsRefresh && ((e = !0), this.refreshImmediately(t)),
        this._needsRefreshHover && ((e = !0), this.refreshHoverImmediately());
      var n = ni();
      e
        ? ((this._stillFrameAccum = 0),
          this.trigger("rendered", { elapsedTime: n - i }))
        : this._sleepAfterStill > 0 &&
          (this._stillFrameAccum++,
          this._stillFrameAccum > this._sleepAfterStill &&
            this.animation.stop());
    }),
    (r.prototype.setSleepAfterStill = function (t) {
      this._sleepAfterStill = t;
    }),
    (r.prototype.wakeUp = function () {
      this.animation.start(), (this._stillFrameAccum = 0);
    }),
    (r.prototype.refreshHover = function () {
      this._needsRefreshHover = !0;
    }),
    (r.prototype.refreshHoverImmediately = function () {
      (this._needsRefreshHover = !1),
        this.painter.refreshHover &&
          this.painter.getType() === "canvas" &&
          this.painter.refreshHover();
    }),
    (r.prototype.resize = function (t) {
      (t = t || {}),
        this.painter.resize(t.width, t.height),
        this.handler.resize();
    }),
    (r.prototype.clearAnimation = function () {
      this.animation.clear();
    }),
    (r.prototype.getWidth = function () {
      return this.painter.getWidth();
    }),
    (r.prototype.getHeight = function () {
      return this.painter.getHeight();
    }),
    (r.prototype.setCursorStyle = function (t) {
      this.handler.setCursorStyle(t);
    }),
    (r.prototype.findHover = function (t, e) {
      return this.handler.findHover(t, e);
    }),
    (r.prototype.on = function (t, e, i) {
      return this.handler.on(t, e, i), this;
    }),
    (r.prototype.off = function (t, e) {
      this.handler.off(t, e);
    }),
    (r.prototype.trigger = function (t, e) {
      this.handler.trigger(t, e);
    }),
    (r.prototype.clear = function () {
      for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
        t[e] instanceof be && t[e].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }),
    (r.prototype.dispose = function () {
      this.animation.stop(),
        this.clear(),
        this.storage.dispose(),
        this.painter.dispose(),
        this.handler.dispose(),
        (this.animation = this.storage = this.painter = this.handler = null),
        Z_(this.id);
    }),
    r
  );
})();
function Lf(r, t) {
  var e = new Q_(pc(), r, t);
  return (Uc[e.id] = e), e;
}
function J_(r, t) {
  Ca[r] = t;
}
var If = 1e-4,
  Yc = 20;
function j_(r) {
  return r.replace(/^\s+|\s+$/g, "");
}
function wD(r, t, e, i) {
  var n = t[0],
    a = t[1],
    o = e[0],
    s = e[1],
    u = a - n,
    l = s - o;
  if (u === 0) return l === 0 ? o : (o + s) / 2;
  if (i)
    if (u > 0) {
      if (r <= n) return o;
      if (r >= a) return s;
    } else {
      if (r >= n) return o;
      if (r <= a) return s;
    }
  else {
    if (r === n) return o;
    if (r === a) return s;
  }
  return ((r - n) / u) * l + o;
}
function Pt(r, t) {
  switch (r) {
    case "center":
    case "middle":
      r = "50%";
      break;
    case "left":
    case "top":
      r = "0%";
      break;
    case "right":
    case "bottom":
      r = "100%";
      break;
  }
  return B(r)
    ? j_(r).match(/%$/)
      ? (parseFloat(r) / 100) * t
      : parseFloat(r)
    : r == null
    ? NaN
    : +r;
}
function ue(r, t, e) {
  return (
    t == null && (t = 10),
    (t = Math.min(Math.max(0, t), Yc)),
    (r = (+r).toFixed(t)),
    e ? r : +r
  );
}
function SD(r) {
  return (
    r.sort(function (t, e) {
      return t - e;
    }),
    r
  );
}
function Le(r) {
  if (((r = +r), isNaN(r))) return 0;
  if (r > 1e-14) {
    for (var t = 1, e = 0; e < 15; e++, t *= 10)
      if (Math.round(r * t) / t === r) return e;
  }
  return t0(r);
}
function t0(r) {
  var t = r.toString().toLowerCase(),
    e = t.indexOf("e"),
    i = e > 0 ? +t.slice(e + 1) : 0,
    n = e > 0 ? e : t.length,
    a = t.indexOf("."),
    o = a < 0 ? 0 : n - 1 - a;
  return Math.max(0, o - i);
}
function bD(r, t) {
  var e = Math.log,
    i = Math.LN10,
    n = Math.floor(e(r[1] - r[0]) / i),
    a = Math.round(e(Math.abs(t[1] - t[0])) / i),
    o = Math.min(Math.max(-n + a, 0), 20);
  return isFinite(o) ? o : 20;
}
function TD(r, t, e) {
  if (!r[t]) return 0;
  var i = Ke(
    r,
    function (d, y) {
      return d + (isNaN(y) ? 0 : y);
    },
    0
  );
  if (i === 0) return 0;
  for (
    var n = Math.pow(10, e),
      a = U(r, function (d) {
        return ((isNaN(d) ? 0 : d) / i) * n * 100;
      }),
      o = n * 100,
      s = U(a, function (d) {
        return Math.floor(d);
      }),
      u = Ke(
        s,
        function (d, y) {
          return d + y;
        },
        0
      ),
      l = U(a, function (d, y) {
        return d - s[y];
      });
    u < o;

  ) {
    for (
      var f = Number.NEGATIVE_INFINITY, h = null, c = 0, v = l.length;
      c < v;
      ++c
    )
      l[c] > f && ((f = l[c]), (h = c));
    ++s[h], (l[h] = 0), ++u;
  }
  return s[t] / n;
}
function e0(r, t) {
  var e = Math.max(Le(r), Le(t)),
    i = r + t;
  return e > Yc ? i : ue(i, e);
}
function $c(r) {
  var t = Math.PI * 2;
  return ((r % t) + t) % t;
}
function Wa(r) {
  return r > -If && r < If;
}
var r0 =
  /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function Re(r) {
  if (r instanceof Date) return r;
  if (B(r)) {
    var t = r0.exec(r);
    if (!t) return new Date(NaN);
    if (t[8]) {
      var e = +t[4] || 0;
      return (
        t[8].toUpperCase() !== "Z" && (e -= +t[8].slice(0, 3)),
        new Date(
          Date.UTC(
            +t[1],
            +(t[2] || 1) - 1,
            +t[3] || 1,
            e,
            +(t[5] || 0),
            +t[6] || 0,
            t[7] ? +t[7].substring(0, 3) : 0
          )
        )
      );
    } else
      return new Date(
        +t[1],
        +(t[2] || 1) - 1,
        +t[3] || 1,
        +t[4] || 0,
        +(t[5] || 0),
        +t[6] || 0,
        t[7] ? +t[7].substring(0, 3) : 0
      );
  } else if (r == null) return new Date(NaN);
  return new Date(Math.round(r));
}
function i0(r) {
  return Math.pow(10, ul(r));
}
function ul(r) {
  if (r === 0) return 0;
  var t = Math.floor(Math.log(r) / Math.LN10);
  return r / Math.pow(10, t) >= 10 && t++, t;
}
function Xc(r, t) {
  var e = ul(r),
    i = Math.pow(10, e),
    n = r / i,
    a;
  return (
    t
      ? n < 1.5
        ? (a = 1)
        : n < 2.5
        ? (a = 2)
        : n < 4
        ? (a = 3)
        : n < 7
        ? (a = 5)
        : (a = 10)
      : n < 1
      ? (a = 1)
      : n < 2
      ? (a = 2)
      : n < 3
      ? (a = 3)
      : n < 5
      ? (a = 5)
      : (a = 10),
    (r = a * i),
    e >= -20 ? +r.toFixed(e < 0 ? -e : 0) : r
  );
}
function xD(r) {
  r.sort(function (u, l) {
    return s(u, l, 0) ? -1 : 1;
  });
  for (var t = -1 / 0, e = 1, i = 0; i < r.length; ) {
    for (var n = r[i].interval, a = r[i].close, o = 0; o < 2; o++)
      n[o] <= t && ((n[o] = t), (a[o] = o ? 1 : 1 - e)), (t = n[o]), (e = a[o]);
    n[0] === n[1] && a[0] * a[1] !== 1 ? r.splice(i, 1) : i++;
  }
  return r;
  function s(u, l, f) {
    return (
      u.interval[f] < l.interval[f] ||
      (u.interval[f] === l.interval[f] &&
        (u.close[f] - l.close[f] === (f ? -1 : 1) || (!f && s(u, l, 1))))
    );
  }
}
function Ua(r) {
  var t = parseFloat(r);
  return t == r && (t !== 0 || !B(r) || r.indexOf("x") <= 0) ? t : NaN;
}
function n0(r) {
  return !isNaN(Ua(r));
}
function qc() {
  return Math.round(Math.random() * 9);
}
function Zc(r, t) {
  return t === 0 ? r : Zc(t, r % t);
}
function Rf(r, t) {
  return r == null ? t : t == null ? r : (r * t) / Zc(r, t);
}
var a0 = "[ECharts] ",
  Ef = {},
  o0 = typeof console != "undefined" && console.warn && console.log;
function s0(r, t, e) {
  if (o0) {
    if (e) {
      if (Ef[t]) return;
      Ef[t] = !0;
    }
    console[r](a0 + t);
  }
}
function CD(r, t) {
  s0("warn", r, t);
}
function It(r) {
  throw new Error(r);
}
function Of(r, t, e) {
  return (t - r) * e + r;
}
var Kc = "series\0",
  Qc = "\0_ec_\0";
function xt(r) {
  return r instanceof Array ? r : r == null ? [] : [r];
}
function kf(r, t, e) {
  if (r) {
    (r[t] = r[t] || {}),
      (r.emphasis = r.emphasis || {}),
      (r.emphasis[t] = r.emphasis[t] || {});
    for (var i = 0, n = e.length; i < n; i++) {
      var a = e[i];
      !r.emphasis[t].hasOwnProperty(a) &&
        r[t].hasOwnProperty(a) &&
        (r.emphasis[t][a] = r[t][a]);
    }
  }
}
var Bf = [
  "fontStyle",
  "fontWeight",
  "fontSize",
  "fontFamily",
  "rich",
  "tag",
  "color",
  "textBorderColor",
  "textBorderWidth",
  "width",
  "height",
  "lineHeight",
  "align",
  "verticalAlign",
  "baseline",
  "shadowColor",
  "shadowBlur",
  "shadowOffsetX",
  "shadowOffsetY",
  "textShadowColor",
  "textShadowBlur",
  "textShadowOffsetX",
  "textShadowOffsetY",
  "backgroundColor",
  "borderColor",
  "borderWidth",
  "borderRadius",
  "padding",
];
function uo(r) {
  return F(r) && !k(r) && !(r instanceof Date) ? r.value : r;
}
function u0(r) {
  return F(r) && !(r instanceof Array);
}
function l0(r, t, e) {
  var i = e === "normalMerge",
    n = e === "replaceMerge",
    a = e === "replaceAll";
  (r = r || []), (t = (t || []).slice());
  var o = $();
  C(t, function (u, l) {
    if (!F(u)) {
      t[l] = null;
      return;
    }
  });
  var s = f0(r, o, e);
  return (
    (i || n) && h0(s, r, o, t),
    i && v0(s, t),
    i || n ? c0(s, t, n) : a && d0(s, t),
    p0(s),
    s
  );
}
function f0(r, t, e) {
  var i = [];
  if (e === "replaceAll") return i;
  for (var n = 0; n < r.length; n++) {
    var a = r[n];
    a && a.id != null && t.set(a.id, n),
      i.push({
        existing: e === "replaceMerge" || cn(a) ? null : a,
        newOption: null,
        keyInfo: null,
        brandNew: null,
      });
  }
  return i;
}
function h0(r, t, e, i) {
  C(i, function (n, a) {
    if (!(!n || n.id == null)) {
      var o = Qi(n.id),
        s = e.get(o);
      if (s != null) {
        var u = r[s];
        Se(!u.newOption, 'Duplicated option on id "' + o + '".'),
          (u.newOption = n),
          (u.existing = t[s]),
          (i[a] = null);
      }
    }
  });
}
function v0(r, t) {
  C(t, function (e, i) {
    if (!(!e || e.name == null))
      for (var n = 0; n < r.length; n++) {
        var a = r[n].existing;
        if (
          !r[n].newOption &&
          a &&
          (a.id == null || e.id == null) &&
          !cn(e) &&
          !cn(a) &&
          Jc("name", a, e)
        ) {
          (r[n].newOption = e), (t[i] = null);
          return;
        }
      }
  });
}
function c0(r, t, e) {
  C(t, function (i) {
    if (!!i) {
      for (
        var n, a = 0;
        (n = r[a]) &&
        (n.newOption ||
          cn(n.existing) ||
          (n.existing && i.id != null && !Jc("id", i, n.existing)));

      )
        a++;
      n
        ? ((n.newOption = i), (n.brandNew = e))
        : r.push({ newOption: i, brandNew: e, existing: null, keyInfo: null }),
        a++;
    }
  });
}
function d0(r, t) {
  C(t, function (e) {
    r.push({ newOption: e, brandNew: !0, existing: null, keyInfo: null });
  });
}
function p0(r) {
  var t = $();
  C(r, function (e) {
    var i = e.existing;
    i && t.set(i.id, e);
  }),
    C(r, function (e) {
      var i = e.newOption;
      Se(
        !i || i.id == null || !t.get(i.id) || t.get(i.id) === e,
        "id duplicates: " + (i && i.id)
      ),
        i && i.id != null && t.set(i.id, e),
        !e.keyInfo && (e.keyInfo = {});
    }),
    C(r, function (e, i) {
      var n = e.existing,
        a = e.newOption,
        o = e.keyInfo;
      if (!!F(a)) {
        if (((o.name = a.name != null ? Qi(a.name) : n ? n.name : Kc + i), n))
          o.id = Qi(n.id);
        else if (a.id != null) o.id = Qi(a.id);
        else {
          var s = 0;
          do o.id = "\0" + o.name + "\0" + s++;
          while (t.get(o.id));
        }
        t.set(o.id, e);
      }
    });
}
function Jc(r, t, e) {
  var i = le(t[r], null),
    n = le(e[r], null);
  return i != null && n != null && i === n;
}
function Qi(r) {
  return le(r, "");
}
function le(r, t) {
  return r == null ? t : B(r) ? r : ht(r) || qs(r) ? r + "" : t;
}
function ll(r) {
  var t = r.name;
  return !!(t && t.indexOf(Kc));
}
function cn(r) {
  return r && r.id != null && Qi(r.id).indexOf(Qc) === 0;
}
function DD(r) {
  return Qc + r;
}
function g0(r, t, e) {
  C(r, function (i) {
    var n = i.newOption;
    F(n) &&
      ((i.keyInfo.mainType = t), (i.keyInfo.subType = y0(t, n, i.existing, e)));
  });
}
function y0(r, t, e, i) {
  var n = t.type ? t.type : e ? e.subType : i.determineSubType(r, t);
  return n;
}
function MD(r, t) {
  var e = {},
    i = {};
  return n(r || [], e), n(t || [], i, e), [a(e), a(i)];
  function n(o, s, u) {
    for (var l = 0, f = o.length; l < f; l++) {
      var h = le(o[l].seriesId, null);
      if (h == null) return;
      for (
        var c = xt(o[l].dataIndex), v = u && u[h], d = 0, y = c.length;
        d < y;
        d++
      ) {
        var p = c[d];
        v && v[p] ? (v[p] = null) : ((s[h] || (s[h] = {}))[p] = 1);
      }
    }
  }
  function a(o, s) {
    var u = [];
    for (var l in o)
      if (o.hasOwnProperty(l) && o[l] != null)
        if (s) u.push(+l);
        else {
          var f = a(o[l], !0);
          f.length && u.push({ seriesId: l, dataIndex: f });
        }
    return u;
  }
}
function Mn(r, t) {
  if (t.dataIndexInside != null) return t.dataIndexInside;
  if (t.dataIndex != null)
    return k(t.dataIndex)
      ? U(t.dataIndex, function (e) {
          return r.indexOfRawIndex(e);
        })
      : r.indexOfRawIndex(t.dataIndex);
  if (t.name != null)
    return k(t.name)
      ? U(t.name, function (e) {
          return r.indexOfName(e);
        })
      : r.indexOfName(t.name);
}
function yt() {
  var r = "__ec_inner_" + _0++;
  return function (t) {
    return t[r] || (t[r] = {});
  };
}
var _0 = qc();
function ts(r, t, e) {
  var i = fl(t, e),
    n = i.mainTypeSpecified,
    a = i.queryOptionMap,
    o = i.others,
    s = o,
    u = e ? e.defaultMainType : null;
  return (
    !n && u && a.set(u, {}),
    a.each(function (l, f) {
      var h = Pn(r, f, l, {
        useDefault: u === f,
        enableAll: e && e.enableAll != null ? e.enableAll : !0,
        enableNone: e && e.enableNone != null ? e.enableNone : !0,
      });
      (s[f + "Models"] = h.models), (s[f + "Model"] = h.models[0]);
    }),
    s
  );
}
function fl(r, t) {
  var e;
  if (B(r)) {
    var i = {};
    (i[r + "Index"] = 0), (e = i);
  } else e = r;
  var n = $(),
    a = {},
    o = !1;
  return (
    C(e, function (s, u) {
      if (u === "dataIndex" || u === "dataIndexInside") {
        a[u] = s;
        return;
      }
      var l = u.match(/^(\w+)(Index|Id|Name)$/) || [],
        f = l[1],
        h = (l[2] || "").toLowerCase();
      if (
        !(
          !f ||
          !h ||
          (t && t.includeMainTypes && et(t.includeMainTypes, f) < 0)
        )
      ) {
        o = o || !!f;
        var c = n.get(f) || n.set(f, {});
        c[h] = s;
      }
    }),
    { mainTypeSpecified: o, queryOptionMap: n, others: a }
  );
}
var lo = { useDefault: !0, enableAll: !1, enableNone: !1 },
  PD = { useDefault: !1, enableAll: !0, enableNone: !0 };
function Pn(r, t, e, i) {
  i = i || lo;
  var n = e.index,
    a = e.id,
    o = e.name,
    s = { models: null, specified: n != null || a != null || o != null };
  if (!s.specified) {
    var u = void 0;
    return (s.models = i.useDefault && (u = r.getComponent(t)) ? [u] : []), s;
  }
  return n === "none" || n === !1
    ? (Se(
        i.enableNone,
        '`"none"` or `false` is not a valid value on index option.'
      ),
      (s.models = []),
      s)
    : (n === "all" &&
        (Se(i.enableAll, '`"all"` is not a valid value on index option.'),
        (n = a = o = null)),
      (s.models = r.queryComponents({ mainType: t, index: n, id: a, name: o })),
      s);
}
function jc(r, t, e) {
  r.setAttribute ? r.setAttribute(t, e) : (r[t] = e);
}
function m0(r, t) {
  return r.getAttribute ? r.getAttribute(t) : r[t];
}
function w0(r) {
  return r === "auto" ? (W.domSupported ? "html" : "richText") : r || "html";
}
function S0(r, t, e, i, n) {
  var a = t == null || t === "auto";
  if (i == null) return i;
  if (ht(i)) {
    var o = Of(e || 0, i, n);
    return ue(o, a ? Math.max(Le(e || 0), Le(i)) : t);
  } else {
    if (B(i)) return n < 1 ? e : i;
    for (
      var s = [], u = e, l = i, f = Math.max(u ? u.length : 0, l.length), h = 0;
      h < f;
      ++h
    ) {
      var c = r.getDimensionInfo(h);
      if (c && c.type === "ordinal") s[h] = (n < 1 && u ? u : l)[h];
      else {
        var v = u && u[h] ? u[h] : 0,
          d = l[h],
          o = Of(v, d, n);
        s[h] = ue(o, a ? Math.max(Le(v), Le(d)) : t);
      }
    }
    return s;
  }
}
var b0 = ".",
  ur = "___EC__COMPONENT__CONTAINER___",
  td = "___EC__EXTENDED_CLASS___";
function _e(r) {
  var t = { main: "", sub: "" };
  if (r) {
    var e = r.split(b0);
    (t.main = e[0] || ""), (t.sub = e[1] || "");
  }
  return t;
}
function T0(r) {
  Se(
    /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r),
    'componentType "' + r + '" illegal'
  );
}
function x0(r) {
  return !!(r && r[td]);
}
function hl(r, t) {
  (r.$constructor = r),
    (r.extend = function (e) {
      var i = this,
        n;
      return (
        C0(i)
          ? (n = (function (a) {
              rt(o, a);
              function o() {
                return a.apply(this, arguments) || this;
              }
              return o;
            })(i))
          : ((n = function () {
              (e.$constructor || i).apply(this, arguments);
            }),
            by(n, this)),
        O(n.prototype, e),
        (n[td] = !0),
        (n.extend = this.extend),
        (n.superCall = P0),
        (n.superApply = A0),
        (n.superClass = i),
        n
      );
    });
}
function C0(r) {
  return q(r) && /^class\s/.test(Function.prototype.toString.call(r));
}
function ed(r, t) {
  r.extend = t.extend;
}
var D0 = Math.round(Math.random() * 10);
function M0(r) {
  var t = ["__\0is_clz", D0++].join("_");
  (r.prototype[t] = !0),
    (r.isInstance = function (e) {
      return !!(e && e[t]);
    });
}
function P0(r, t) {
  for (var e = [], i = 2; i < arguments.length; i++) e[i - 2] = arguments[i];
  return this.superClass.prototype[t].apply(r, e);
}
function A0(r, t, e) {
  return this.superClass.prototype[t].apply(r, e);
}
function fo(r) {
  var t = {};
  (r.registerClass = function (i) {
    var n = i.type || i.prototype.type;
    if (n) {
      T0(n), (i.prototype.type = n);
      var a = _e(n);
      if (!a.sub) t[a.main] = i;
      else if (a.sub !== ur) {
        var o = e(a);
        o[a.sub] = i;
      }
    }
    return i;
  }),
    (r.getClass = function (i, n, a) {
      var o = t[i];
      if ((o && o[ur] && (o = n ? o[n] : null), a && !o))
        throw new Error(
          n
            ? "Component " + i + "." + (n || "") + " is used but not imported."
            : i + ".type should be specified."
        );
      return o;
    }),
    (r.getClassesByMainType = function (i) {
      var n = _e(i),
        a = [],
        o = t[n.main];
      return (
        o && o[ur]
          ? C(o, function (s, u) {
              u !== ur && a.push(s);
            })
          : a.push(o),
        a
      );
    }),
    (r.hasClass = function (i) {
      var n = _e(i);
      return !!t[n.main];
    }),
    (r.getAllClassMainTypes = function () {
      var i = [];
      return (
        C(t, function (n, a) {
          i.push(a);
        }),
        i
      );
    }),
    (r.hasSubTypes = function (i) {
      var n = _e(i),
        a = t[n.main];
      return a && a[ur];
    });
  function e(i) {
    var n = t[i.main];
    return (!n || !n[ur]) && ((n = t[i.main] = {}), (n[ur] = !0)), n;
  }
}
function dn(r, t) {
  for (var e = 0; e < r.length; e++) r[e][1] || (r[e][1] = r[e][0]);
  return (
    (t = t || !1),
    function (i, n, a) {
      for (var o = {}, s = 0; s < r.length; s++) {
        var u = r[s][1];
        if (!((n && et(n, u) >= 0) || (a && et(a, u) < 0))) {
          var l = i.getShallow(u, t);
          l != null && (o[r[s][0]] = l);
        }
      }
      return o;
    }
  );
}
var L0 = [
    ["fill", "color"],
    ["shadowBlur"],
    ["shadowOffsetX"],
    ["shadowOffsetY"],
    ["opacity"],
    ["shadowColor"],
  ],
  I0 = dn(L0),
  R0 = (function () {
    function r() {}
    return (
      (r.prototype.getAreaStyle = function (t, e) {
        return I0(this, t, e);
      }),
      r
    );
  })(),
  vu = new Dn(50);
function E0(r) {
  if (typeof r == "string") {
    var t = vu.get(r);
    return t && t.image;
  } else return r;
}
function rd(r, t, e, i, n) {
  if (r)
    if (typeof r == "string") {
      if ((t && t.__zrImageSrc === r) || !e) return t;
      var a = vu.get(r),
        o = { hostEl: e, cb: i, cbPayload: n };
      return (
        a
          ? ((t = a.image), !ho(t) && a.pending.push(o))
          : ((t = Br.loadImage(r, Ff, Ff)),
            (t.__zrImageSrc = r),
            vu.put(r, (t.__cachedImgObj = { image: t, pending: [o] }))),
        t
      );
    } else return r;
  else return t;
}
function Ff() {
  var r = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < r.pending.length; t++) {
    var e = r.pending[t],
      i = e.cb;
    i && i(this, e.cbPayload), e.hostEl.dirty();
  }
  r.pending.length = 0;
}
function ho(r) {
  return r && r.width && r.height;
}
var es = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function O0(r, t, e, i, n) {
  if (!t) return "";
  var a = (r + "").split(`
`);
  n = id(t, e, i, n);
  for (var o = 0, s = a.length; o < s; o++) a[o] = nd(a[o], n);
  return a.join(`
`);
}
function id(r, t, e, i) {
  i = i || {};
  var n = O({}, i);
  (n.font = t), (e = K(e, "...")), (n.maxIterations = K(i.maxIterations, 2));
  var a = (n.minChar = K(i.minChar, 0));
  n.cnCharWidth = Vt("\u56FD", t);
  var o = (n.ascCharWidth = Vt("a", t));
  n.placeholder = K(i.placeholder, "");
  for (var s = (r = Math.max(0, r - 1)), u = 0; u < a && s >= o; u++) s -= o;
  var l = Vt(e, t);
  return (
    l > s && ((e = ""), (l = 0)),
    (s = r - l),
    (n.ellipsis = e),
    (n.ellipsisWidth = l),
    (n.contentWidth = s),
    (n.containerWidth = r),
    n
  );
}
function nd(r, t) {
  var e = t.containerWidth,
    i = t.font,
    n = t.contentWidth;
  if (!e) return "";
  var a = Vt(r, i);
  if (a <= e) return r;
  for (var o = 0; ; o++) {
    if (a <= n || o >= t.maxIterations) {
      r += t.ellipsis;
      break;
    }
    var s =
      o === 0
        ? k0(r, n, t.ascCharWidth, t.cnCharWidth)
        : a > 0
        ? Math.floor((r.length * n) / a)
        : 0;
    (r = r.substr(0, s)), (a = Vt(r, i));
  }
  return r === "" && (r = t.placeholder), r;
}
function k0(r, t, e, i) {
  for (var n = 0, a = 0, o = r.length; a < o && n < t; a++) {
    var s = r.charCodeAt(a);
    n += 0 <= s && s <= 127 ? e : i;
  }
  return a;
}
function B0(r, t) {
  r != null && (r += "");
  var e = t.overflow,
    i = t.padding,
    n = t.font,
    a = e === "truncate",
    o = ol(n),
    s = K(t.lineHeight, o),
    u = !!t.backgroundColor,
    l = t.lineOverflow === "truncate",
    f = t.width,
    h;
  f != null && (e === "break" || e === "breakAll")
    ? (h = r ? ad(r, t.font, f, e === "breakAll", 0).lines : [])
    : (h = r
        ? r.split(`
`)
        : []);
  var c = h.length * s,
    v = K(t.height, c);
  if (c > v && l) {
    var d = Math.floor(v / s);
    h = h.slice(0, d);
  }
  if (r && a && f != null)
    for (
      var y = id(f, n, t.ellipsis, {
          minChar: t.truncateMinChar,
          placeholder: t.placeholder,
        }),
        p = 0;
      p < h.length;
      p++
    )
      h[p] = nd(h[p], y);
  for (var g = v, _ = 0, p = 0; p < h.length; p++) _ = Math.max(Vt(h[p], n), _);
  f == null && (f = _);
  var m = _;
  return (
    i && ((g += i[0] + i[2]), (m += i[1] + i[3]), (f += i[1] + i[3])),
    u && (m = f),
    {
      lines: h,
      height: v,
      outerWidth: m,
      outerHeight: g,
      lineHeight: s,
      calculatedLineHeight: o,
      contentWidth: _,
      contentHeight: c,
      width: f,
    }
  );
}
var F0 = (function () {
    function r() {}
    return r;
  })(),
  Nf = (function () {
    function r(t) {
      (this.tokens = []), t && (this.tokens = t);
    }
    return r;
  })(),
  N0 = (function () {
    function r() {
      (this.width = 0),
        (this.height = 0),
        (this.contentWidth = 0),
        (this.contentHeight = 0),
        (this.outerWidth = 0),
        (this.outerHeight = 0),
        (this.lines = []);
    }
    return r;
  })();
function z0(r, t) {
  var e = new N0();
  if ((r != null && (r += ""), !r)) return e;
  for (
    var i = t.width,
      n = t.height,
      a = t.overflow,
      o =
        (a === "break" || a === "breakAll") && i != null
          ? { width: i, accumWidth: 0, breakAll: a === "breakAll" }
          : null,
      s = (es.lastIndex = 0),
      u;
    (u = es.exec(r)) != null;

  ) {
    var l = u.index;
    l > s && rs(e, r.substring(s, l), t, o),
      rs(e, u[2], t, o, u[1]),
      (s = es.lastIndex);
  }
  s < r.length && rs(e, r.substring(s, r.length), t, o);
  var f = [],
    h = 0,
    c = 0,
    v = t.padding,
    d = a === "truncate",
    y = t.lineOverflow === "truncate";
  function p(N, z, V) {
    (N.width = z), (N.lineHeight = V), (h += V), (c = Math.max(c, z));
  }
  t: for (var g = 0; g < e.lines.length; g++) {
    for (var _ = e.lines[g], m = 0, w = 0, b = 0; b < _.tokens.length; b++) {
      var S = _.tokens[b],
        D = (S.styleName && t.rich[S.styleName]) || {},
        T = (S.textPadding = D.padding),
        x = T ? T[1] + T[3] : 0,
        M = (S.font = D.font || t.font);
      S.contentHeight = ol(M);
      var P = K(D.height, S.contentHeight);
      if (
        ((S.innerHeight = P),
        T && (P += T[0] + T[2]),
        (S.height = P),
        (S.lineHeight = _a(D.lineHeight, t.lineHeight, P)),
        (S.align = (D && D.align) || t.align),
        (S.verticalAlign = (D && D.verticalAlign) || "middle"),
        y && n != null && h + S.lineHeight > n)
      ) {
        b > 0
          ? ((_.tokens = _.tokens.slice(0, b)),
            p(_, w, m),
            (e.lines = e.lines.slice(0, g + 1)))
          : (e.lines = e.lines.slice(0, g));
        break t;
      }
      var A = D.width,
        L = A == null || A === "auto";
      if (typeof A == "string" && A.charAt(A.length - 1) === "%")
        (S.percentWidth = A), f.push(S), (S.contentWidth = Vt(S.text, M));
      else {
        if (L) {
          var I = D.backgroundColor,
            R = I && I.image;
          R &&
            ((R = E0(R)),
            ho(R) && (S.width = Math.max(S.width, (R.width * P) / R.height)));
        }
        var E = d && i != null ? i - w : null;
        E != null && E < S.width
          ? !L || E < x
            ? ((S.text = ""), (S.width = S.contentWidth = 0))
            : ((S.text = O0(S.text, E - x, M, t.ellipsis, {
                minChar: t.truncateMinChar,
              })),
              (S.width = S.contentWidth = Vt(S.text, M)))
          : (S.contentWidth = Vt(S.text, M));
      }
      (S.width += x), (w += S.width), D && (m = Math.max(m, S.lineHeight));
    }
    p(_, w, m);
  }
  (e.outerWidth = e.width = K(i, c)),
    (e.outerHeight = e.height = K(n, h)),
    (e.contentHeight = h),
    (e.contentWidth = c),
    v && ((e.outerWidth += v[1] + v[3]), (e.outerHeight += v[0] + v[2]));
  for (var g = 0; g < f.length; g++) {
    var S = f[g],
      G = S.percentWidth;
    S.width = (parseInt(G, 10) / 100) * e.width;
  }
  return e;
}
function rs(r, t, e, i, n) {
  var a = t === "",
    o = (n && e.rich[n]) || {},
    s = r.lines,
    u = o.font || e.font,
    l = !1,
    f,
    h;
  if (i) {
    var c = o.padding,
      v = c ? c[1] + c[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = kr(o.width, i.width) + v;
      s.length > 0 &&
        d + i.accumWidth > i.width &&
        ((f = t.split(`
`)),
        (l = !0)),
        (i.accumWidth = d);
    } else {
      var y = ad(t, u, i.width, i.breakAll, i.accumWidth);
      (i.accumWidth = y.accumWidth + v), (h = y.linesWidths), (f = y.lines);
    }
  } else
    f = t.split(`
`);
  for (var p = 0; p < f.length; p++) {
    var g = f[p],
      _ = new F0();
    if (
      ((_.styleName = n),
      (_.text = g),
      (_.isLineHolder = !g && !a),
      typeof o.width == "number"
        ? (_.width = o.width)
        : (_.width = h ? h[p] : Vt(g, u)),
      !p && !l)
    ) {
      var m = (s[s.length - 1] || (s[0] = new Nf())).tokens,
        w = m.length;
      w === 1 && m[0].isLineHolder ? (m[0] = _) : (g || !w || a) && m.push(_);
    } else s.push(new Nf([_]));
  }
}
function H0(r) {
  var t = r.charCodeAt(0);
  return t >= 33 && t <= 383;
}
var G0 = Ke(
  ",&?/;] ".split(""),
  function (r, t) {
    return (r[t] = !0), r;
  },
  {}
);
function V0(r) {
  return H0(r) ? !!G0[r] : !0;
}
function ad(r, t, e, i, n) {
  for (
    var a = [], o = [], s = "", u = "", l = 0, f = 0, h = 0;
    h < r.length;
    h++
  ) {
    var c = r.charAt(h);
    if (
      c ===
      `
`
    ) {
      u && ((s += u), (f += l)),
        a.push(s),
        o.push(f),
        (s = ""),
        (u = ""),
        (l = 0),
        (f = 0);
      continue;
    }
    var v = Vt(c, t),
      d = i ? !1 : !V0(c);
    if (a.length ? f + v > e : n + f + v > e) {
      f
        ? (s || u) &&
          (d
            ? (s || ((s = u), (u = ""), (l = 0), (f = l)),
              a.push(s),
              o.push(f - l),
              (u += c),
              (l += v),
              (s = ""),
              (f = l))
            : (u && ((s += u), (u = ""), (l = 0)),
              a.push(s),
              o.push(f),
              (s = c),
              (f = v)))
        : d
        ? (a.push(u), o.push(l), (u = c), (l = v))
        : (a.push(c), o.push(v));
      continue;
    }
    (f += v),
      d ? ((u += c), (l += v)) : (u && ((s += u), (u = ""), (l = 0)), (s += c));
  }
  return (
    !a.length && !s && ((s = r), (u = ""), (l = 0)),
    u && (s += u),
    s && (a.push(s), o.push(f)),
    a.length === 1 && (f += n),
    { accumWidth: f, lines: a, linesWidths: o }
  );
}
var cu = "__zr_style_" + Math.round(Math.random() * 10),
  Ir = {
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: "#000",
    opacity: 1,
    blend: "source-over",
  },
  vo = {
    style: {
      shadowBlur: !0,
      shadowOffsetX: !0,
      shadowOffsetY: !0,
      shadowColor: !0,
      opacity: !0,
    },
  };
Ir[cu] = !0;
var zf = ["z", "z2", "invisible"],
  W0 = ["invisible"],
  U0 = (function (r) {
    Q(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype._init = function (e) {
        for (var i = ft(e), n = 0; n < i.length; n++) {
          var a = i[n];
          a === "style"
            ? this.useStyle(e[a])
            : r.prototype.attrKV.call(this, a, e[a]);
        }
        this.style || this.useStyle({});
      }),
      (t.prototype.beforeBrush = function () {}),
      (t.prototype.afterBrush = function () {}),
      (t.prototype.innerBeforeBrush = function () {}),
      (t.prototype.innerAfterBrush = function () {}),
      (t.prototype.shouldBePainted = function (e, i, n, a) {
        var o = this.transform;
        if (
          this.ignore ||
          this.invisible ||
          this.style.opacity === 0 ||
          (this.culling && Y0(this, e, i)) ||
          (o && !o[0] && !o[3])
        )
          return !1;
        if (n && this.__clipPaths) {
          for (var s = 0; s < this.__clipPaths.length; ++s)
            if (this.__clipPaths[s].isZeroArea()) return !1;
        }
        if (a && this.parent)
          for (var u = this.parent; u; ) {
            if (u.ignore) return !1;
            u = u.parent;
          }
        return !0;
      }),
      (t.prototype.contain = function (e, i) {
        return this.rectContain(e, i);
      }),
      (t.prototype.traverse = function (e, i) {
        e.call(i, this);
      }),
      (t.prototype.rectContain = function (e, i) {
        var n = this.transformCoordToLocal(e, i),
          a = this.getBoundingRect();
        return a.contain(n[0], n[1]);
      }),
      (t.prototype.getPaintRect = function () {
        var e = this._paintRect;
        if (!this._paintRect || this.__dirty) {
          var i = this.transform,
            n = this.getBoundingRect(),
            a = this.style,
            o = a.shadowBlur || 0,
            s = a.shadowOffsetX || 0,
            u = a.shadowOffsetY || 0;
          (e = this._paintRect || (this._paintRect = new j(0, 0, 0, 0))),
            i ? j.applyTransform(e, n, i) : e.copy(n),
            (o || s || u) &&
              ((e.width += o * 2 + Math.abs(s)),
              (e.height += o * 2 + Math.abs(u)),
              (e.x = Math.min(e.x, e.x + s - o)),
              (e.y = Math.min(e.y, e.y + u - o)));
          var l = this.dirtyRectTolerance;
          e.isZero() ||
            ((e.x = Math.floor(e.x - l)),
            (e.y = Math.floor(e.y - l)),
            (e.width = Math.ceil(e.width + 1 + l * 2)),
            (e.height = Math.ceil(e.height + 1 + l * 2)));
        }
        return e;
      }),
      (t.prototype.setPrevPaintRect = function (e) {
        e
          ? ((this._prevPaintRect = this._prevPaintRect || new j(0, 0, 0, 0)),
            this._prevPaintRect.copy(e))
          : (this._prevPaintRect = null);
      }),
      (t.prototype.getPrevPaintRect = function () {
        return this._prevPaintRect;
      }),
      (t.prototype.animateStyle = function (e) {
        return this.animate("style", e);
      }),
      (t.prototype.updateDuringAnimation = function (e) {
        e === "style" ? this.dirtyStyle() : this.markRedraw();
      }),
      (t.prototype.attrKV = function (e, i) {
        e !== "style"
          ? r.prototype.attrKV.call(this, e, i)
          : this.style
          ? this.setStyle(i)
          : this.useStyle(i);
      }),
      (t.prototype.setStyle = function (e, i) {
        return (
          typeof e == "string" ? (this.style[e] = i) : O(this.style, e),
          this.dirtyStyle(),
          this
        );
      }),
      (t.prototype.dirtyStyle = function (e) {
        e || this.markRedraw(),
          (this.__dirty |= Wi),
          this._rect && (this._rect = null);
      }),
      (t.prototype.dirty = function () {
        this.dirtyStyle();
      }),
      (t.prototype.styleChanged = function () {
        return !!(this.__dirty & Wi);
      }),
      (t.prototype.styleUpdated = function () {
        this.__dirty &= ~Wi;
      }),
      (t.prototype.createStyle = function (e) {
        return so(Ir, e);
      }),
      (t.prototype.useStyle = function (e) {
        e[cu] || (e = this.createStyle(e)),
          this.__inHover ? (this.__hoverStyle = e) : (this.style = e),
          this.dirtyStyle();
      }),
      (t.prototype.isStyleObject = function (e) {
        return e[cu];
      }),
      (t.prototype._innerSaveToNormal = function (e) {
        r.prototype._innerSaveToNormal.call(this, e);
        var i = this._normalState;
        e.style &&
          !i.style &&
          (i.style = this._mergeStyle(this.createStyle(), this.style)),
          this._savePrimaryToNormal(e, i, zf);
      }),
      (t.prototype._applyStateObj = function (e, i, n, a, o, s) {
        r.prototype._applyStateObj.call(this, e, i, n, a, o, s);
        var u = !(i && a),
          l;
        if (
          (i && i.style
            ? o
              ? a
                ? (l = i.style)
                : ((l = this._mergeStyle(this.createStyle(), n.style)),
                  this._mergeStyle(l, i.style))
              : ((l = this._mergeStyle(
                  this.createStyle(),
                  a ? this.style : n.style
                )),
                this._mergeStyle(l, i.style))
            : u && (l = n.style),
          l)
        )
          if (o) {
            var f = this.style;
            if (((this.style = this.createStyle(u ? {} : f)), u))
              for (var h = ft(f), c = 0; c < h.length; c++) {
                var v = h[c];
                v in l && ((l[v] = l[v]), (this.style[v] = f[v]));
              }
            for (var d = ft(l), c = 0; c < d.length; c++) {
              var v = d[c];
              this.style[v] = this.style[v];
            }
            this._transitionState(
              e,
              { style: l },
              s,
              this.getAnimationStyleProps()
            );
          } else this.useStyle(l);
        for (var y = this.__inHover ? W0 : zf, c = 0; c < y.length; c++) {
          var v = y[c];
          i && i[v] != null
            ? (this[v] = i[v])
            : u && n[v] != null && (this[v] = n[v]);
        }
      }),
      (t.prototype._mergeStates = function (e) {
        for (
          var i = r.prototype._mergeStates.call(this, e), n, a = 0;
          a < e.length;
          a++
        ) {
          var o = e[a];
          o.style && ((n = n || {}), this._mergeStyle(n, o.style));
        }
        return n && (i.style = n), i;
      }),
      (t.prototype._mergeStyle = function (e, i) {
        return O(e, i), e;
      }),
      (t.prototype.getAnimationStyleProps = function () {
        return vo;
      }),
      (t.initDefaultProps = (function () {
        var e = t.prototype;
        (e.type = "displayable"),
          (e.invisible = !1),
          (e.z = 0),
          (e.z2 = 0),
          (e.zlevel = 0),
          (e.culling = !1),
          (e.cursor = "pointer"),
          (e.rectHover = !1),
          (e.incremental = !1),
          (e._rect = null),
          (e.dirtyRectTolerance = 0),
          (e.__dirty = Gt | Wi);
      })()),
      t
    );
  })(Vc),
  is = new j(0, 0, 0, 0),
  ns = new j(0, 0, 0, 0);
function Y0(r, t, e) {
  return (
    is.copy(r.getBoundingRect()),
    r.transform && is.applyTransform(r.transform),
    (ns.width = t),
    (ns.height = e),
    !is.intersect(ns)
  );
}
var An = U0,
  jt = Math.min,
  te = Math.max,
  as = Math.sin,
  os = Math.cos,
  lr = Math.PI * 2,
  Un = gi(),
  Yn = gi(),
  $n = gi();
function Hf(r, t, e, i, n, a) {
  (n[0] = jt(r, e)), (n[1] = jt(t, i)), (a[0] = te(r, e)), (a[1] = te(t, i));
}
var Gf = [],
  Vf = [];
function $0(r, t, e, i, n, a, o, s, u, l) {
  var f = Lc,
    h = pt,
    c = f(r, e, n, o, Gf);
  (u[0] = 1 / 0), (u[1] = 1 / 0), (l[0] = -1 / 0), (l[1] = -1 / 0);
  for (var v = 0; v < c; v++) {
    var d = h(r, e, n, o, Gf[v]);
    (u[0] = jt(d, u[0])), (l[0] = te(d, l[0]));
  }
  c = f(t, i, a, s, Vf);
  for (var v = 0; v < c; v++) {
    var y = h(t, i, a, s, Vf[v]);
    (u[1] = jt(y, u[1])), (l[1] = te(y, l[1]));
  }
  (u[0] = jt(r, u[0])),
    (l[0] = te(r, l[0])),
    (u[0] = jt(o, u[0])),
    (l[0] = te(o, l[0])),
    (u[1] = jt(t, u[1])),
    (l[1] = te(t, l[1])),
    (u[1] = jt(s, u[1])),
    (l[1] = te(s, l[1]));
}
function X0(r, t, e, i, n, a, o, s) {
  var u = Ic,
    l = St,
    f = te(jt(u(r, e, n), 1), 0),
    h = te(jt(u(t, i, a), 1), 0),
    c = l(r, e, n, f),
    v = l(t, i, a, h);
  (o[0] = jt(r, n, c)),
    (o[1] = jt(t, a, v)),
    (s[0] = te(r, n, c)),
    (s[1] = te(t, a, v));
}
function q0(r, t, e, i, n, a, o, s, u) {
  var l = ri,
    f = ii,
    h = Math.abs(n - a);
  if (h % lr < 1e-4 && h > 1e-4) {
    (s[0] = r - e), (s[1] = t - i), (u[0] = r + e), (u[1] = t + i);
    return;
  }
  if (
    ((Un[0] = os(n) * e + r),
    (Un[1] = as(n) * i + t),
    (Yn[0] = os(a) * e + r),
    (Yn[1] = as(a) * i + t),
    l(s, Un, Yn),
    f(u, Un, Yn),
    (n = n % lr),
    n < 0 && (n = n + lr),
    (a = a % lr),
    a < 0 && (a = a + lr),
    n > a && !o ? (a += lr) : n < a && o && (n += lr),
    o)
  ) {
    var c = a;
    (a = n), (n = c);
  }
  for (var v = 0; v < a; v += Math.PI / 2)
    v > n &&
      (($n[0] = os(v) * e + r),
      ($n[1] = as(v) * i + t),
      l(s, $n, s),
      f(u, $n, u));
}
var Z = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
  fr = [],
  hr = [],
  ve = [],
  Ne = [],
  ce = [],
  de = [],
  ss = Math.min,
  us = Math.max,
  vr = Math.cos,
  cr = Math.sin,
  De = Math.abs,
  du = Math.PI,
  We = du * 2,
  ls = typeof Float32Array != "undefined",
  Mi = [];
function fs(r) {
  var t = Math.round((r / du) * 1e8) / 1e8;
  return (t % 2) * du;
}
function Z0(r, t) {
  var e = fs(r[0]);
  e < 0 && (e += We);
  var i = e - r[0],
    n = r[1];
  (n += i),
    !t && n - e >= We
      ? (n = e + We)
      : t && e - n >= We
      ? (n = e - We)
      : !t && e > n
      ? (n = e + (We - fs(e - n)))
      : t && e < n && (n = e - (We - fs(n - e))),
    (r[0] = e),
    (r[1] = n);
}
var K0 = (function () {
    function r(t) {
      (this.dpr = 1),
        (this._xi = 0),
        (this._yi = 0),
        (this._x0 = 0),
        (this._y0 = 0),
        (this._len = 0),
        t && (this._saveData = !1),
        this._saveData && (this.data = []);
    }
    return (
      (r.prototype.increaseVersion = function () {
        this._version++;
      }),
      (r.prototype.getVersion = function () {
        return this._version;
      }),
      (r.prototype.setScale = function (t, e, i) {
        (i = i || 0),
          i > 0 &&
            ((this._ux = De(i / Va / t) || 0),
            (this._uy = De(i / Va / e) || 0));
      }),
      (r.prototype.setDPR = function (t) {
        this.dpr = t;
      }),
      (r.prototype.setContext = function (t) {
        this._ctx = t;
      }),
      (r.prototype.getContext = function () {
        return this._ctx;
      }),
      (r.prototype.beginPath = function () {
        return this._ctx && this._ctx.beginPath(), this.reset(), this;
      }),
      (r.prototype.reset = function () {
        this._saveData && (this._len = 0),
          this._pathSegLen && ((this._pathSegLen = null), (this._pathLen = 0)),
          this._version++;
      }),
      (r.prototype.moveTo = function (t, e) {
        return (
          this._drawPendingPt(),
          this.addData(Z.M, t, e),
          this._ctx && this._ctx.moveTo(t, e),
          (this._x0 = t),
          (this._y0 = e),
          (this._xi = t),
          (this._yi = e),
          this
        );
      }),
      (r.prototype.lineTo = function (t, e) {
        var i = De(t - this._xi),
          n = De(e - this._yi),
          a = i > this._ux || n > this._uy;
        if (
          (this.addData(Z.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a)
        )
          (this._xi = t), (this._yi = e), (this._pendingPtDist = 0);
        else {
          var o = i * i + n * n;
          o > this._pendingPtDist &&
            ((this._pendingPtX = t),
            (this._pendingPtY = e),
            (this._pendingPtDist = o));
        }
        return this;
      }),
      (r.prototype.bezierCurveTo = function (t, e, i, n, a, o) {
        return (
          this._drawPendingPt(),
          this.addData(Z.C, t, e, i, n, a, o),
          this._ctx && this._ctx.bezierCurveTo(t, e, i, n, a, o),
          (this._xi = a),
          (this._yi = o),
          this
        );
      }),
      (r.prototype.quadraticCurveTo = function (t, e, i, n) {
        return (
          this._drawPendingPt(),
          this.addData(Z.Q, t, e, i, n),
          this._ctx && this._ctx.quadraticCurveTo(t, e, i, n),
          (this._xi = i),
          (this._yi = n),
          this
        );
      }),
      (r.prototype.arc = function (t, e, i, n, a, o) {
        this._drawPendingPt(),
          (Mi[0] = n),
          (Mi[1] = a),
          Z0(Mi, o),
          (n = Mi[0]),
          (a = Mi[1]);
        var s = a - n;
        return (
          this.addData(Z.A, t, e, i, i, n, s, 0, o ? 0 : 1),
          this._ctx && this._ctx.arc(t, e, i, n, a, o),
          (this._xi = vr(a) * i + t),
          (this._yi = cr(a) * i + e),
          this
        );
      }),
      (r.prototype.arcTo = function (t, e, i, n, a) {
        return (
          this._drawPendingPt(),
          this._ctx && this._ctx.arcTo(t, e, i, n, a),
          this
        );
      }),
      (r.prototype.rect = function (t, e, i, n) {
        return (
          this._drawPendingPt(),
          this._ctx && this._ctx.rect(t, e, i, n),
          this.addData(Z.R, t, e, i, n),
          this
        );
      }),
      (r.prototype.closePath = function () {
        this._drawPendingPt(), this.addData(Z.Z);
        var t = this._ctx,
          e = this._x0,
          i = this._y0;
        return t && t.closePath(), (this._xi = e), (this._yi = i), this;
      }),
      (r.prototype.fill = function (t) {
        t && t.fill(), this.toStatic();
      }),
      (r.prototype.stroke = function (t) {
        t && t.stroke(), this.toStatic();
      }),
      (r.prototype.len = function () {
        return this._len;
      }),
      (r.prototype.setData = function (t) {
        var e = t.length;
        !(this.data && this.data.length === e) &&
          ls &&
          (this.data = new Float32Array(e));
        for (var i = 0; i < e; i++) this.data[i] = t[i];
        this._len = e;
      }),
      (r.prototype.appendPath = function (t) {
        t instanceof Array || (t = [t]);
        for (var e = t.length, i = 0, n = this._len, a = 0; a < e; a++)
          i += t[a].len();
        ls &&
          this.data instanceof Float32Array &&
          (this.data = new Float32Array(n + i));
        for (var a = 0; a < e; a++)
          for (var o = t[a].data, s = 0; s < o.length; s++)
            this.data[n++] = o[s];
        this._len = n;
      }),
      (r.prototype.addData = function (t, e, i, n, a, o, s, u, l) {
        if (!!this._saveData) {
          var f = this.data;
          this._len + arguments.length > f.length &&
            (this._expandData(), (f = this.data));
          for (var h = 0; h < arguments.length; h++)
            f[this._len++] = arguments[h];
        }
      }),
      (r.prototype._drawPendingPt = function () {
        this._pendingPtDist > 0 &&
          (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY),
          (this._pendingPtDist = 0));
      }),
      (r.prototype._expandData = function () {
        if (!(this.data instanceof Array)) {
          for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
          this.data = t;
        }
      }),
      (r.prototype.toStatic = function () {
        if (!!this._saveData) {
          this._drawPendingPt();
          var t = this.data;
          t instanceof Array &&
            ((t.length = this._len),
            ls && this._len > 11 && (this.data = new Float32Array(t)));
        }
      }),
      (r.prototype.getBoundingRect = function () {
        (ve[0] = ve[1] = ce[0] = ce[1] = Number.MAX_VALUE),
          (Ne[0] = Ne[1] = de[0] = de[1] = -Number.MAX_VALUE);
        var t = this.data,
          e = 0,
          i = 0,
          n = 0,
          a = 0,
          o;
        for (o = 0; o < this._len; ) {
          var s = t[o++],
            u = o === 1;
          switch ((u && ((e = t[o]), (i = t[o + 1]), (n = e), (a = i)), s)) {
            case Z.M:
              (e = n = t[o++]),
                (i = a = t[o++]),
                (ce[0] = n),
                (ce[1] = a),
                (de[0] = n),
                (de[1] = a);
              break;
            case Z.L:
              Hf(e, i, t[o], t[o + 1], ce, de), (e = t[o++]), (i = t[o++]);
              break;
            case Z.C:
              $0(e, i, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], ce, de),
                (e = t[o++]),
                (i = t[o++]);
              break;
            case Z.Q:
              X0(e, i, t[o++], t[o++], t[o], t[o + 1], ce, de),
                (e = t[o++]),
                (i = t[o++]);
              break;
            case Z.A:
              var l = t[o++],
                f = t[o++],
                h = t[o++],
                c = t[o++],
                v = t[o++],
                d = t[o++] + v;
              o += 1;
              var y = !t[o++];
              u && ((n = vr(v) * h + l), (a = cr(v) * c + f)),
                q0(l, f, h, c, v, d, y, ce, de),
                (e = vr(d) * h + l),
                (i = cr(d) * c + f);
              break;
            case Z.R:
              (n = e = t[o++]), (a = i = t[o++]);
              var p = t[o++],
                g = t[o++];
              Hf(n, a, n + p, a + g, ce, de);
              break;
            case Z.Z:
              (e = n), (i = a);
              break;
          }
          ri(ve, ve, ce), ii(Ne, Ne, de);
        }
        return (
          o === 0 && (ve[0] = ve[1] = Ne[0] = Ne[1] = 0),
          new j(ve[0], ve[1], Ne[0] - ve[0], Ne[1] - ve[1])
        );
      }),
      (r.prototype._calculateLength = function () {
        var t = this.data,
          e = this._len,
          i = this._ux,
          n = this._uy,
          a = 0,
          o = 0,
          s = 0,
          u = 0;
        this._pathSegLen || (this._pathSegLen = []);
        for (var l = this._pathSegLen, f = 0, h = 0, c = 0; c < e; ) {
          var v = t[c++],
            d = c === 1;
          d && ((a = t[c]), (o = t[c + 1]), (s = a), (u = o));
          var y = -1;
          switch (v) {
            case Z.M:
              (a = s = t[c++]), (o = u = t[c++]);
              break;
            case Z.L: {
              var p = t[c++],
                g = t[c++],
                _ = p - a,
                m = g - o;
              (De(_) > i || De(m) > n || c === e - 1) &&
                ((y = Math.sqrt(_ * _ + m * m)), (a = p), (o = g));
              break;
            }
            case Z.C: {
              var w = t[c++],
                b = t[c++],
                p = t[c++],
                g = t[c++],
                S = t[c++],
                D = t[c++];
              (y = s_(a, o, w, b, p, g, S, D, 10)), (a = S), (o = D);
              break;
            }
            case Z.Q: {
              var w = t[c++],
                b = t[c++],
                p = t[c++],
                g = t[c++];
              (y = f_(a, o, w, b, p, g, 10)), (a = p), (o = g);
              break;
            }
            case Z.A:
              var T = t[c++],
                x = t[c++],
                M = t[c++],
                P = t[c++],
                A = t[c++],
                L = t[c++],
                I = L + A;
              (c += 1),
                t[c++],
                d && ((s = vr(A) * M + T), (u = cr(A) * P + x)),
                (y = us(M, P) * ss(We, Math.abs(L))),
                (a = vr(I) * M + T),
                (o = cr(I) * P + x);
              break;
            case Z.R: {
              (s = a = t[c++]), (u = o = t[c++]);
              var R = t[c++],
                E = t[c++];
              y = R * 2 + E * 2;
              break;
            }
            case Z.Z: {
              var _ = s - a,
                m = u - o;
              (y = Math.sqrt(_ * _ + m * m)), (a = s), (o = u);
              break;
            }
          }
          y >= 0 && ((l[h++] = y), (f += y));
        }
        return (this._pathLen = f), f;
      }),
      (r.prototype.rebuildPath = function (t, e) {
        var i = this.data,
          n = this._ux,
          a = this._uy,
          o = this._len,
          s,
          u,
          l,
          f,
          h,
          c,
          v = e < 1,
          d,
          y,
          p = 0,
          g = 0,
          _,
          m = 0,
          w,
          b;
        if (
          v &&
          (this._pathSegLen || this._calculateLength(),
          (d = this._pathSegLen),
          (y = this._pathLen),
          (_ = e * y),
          !_)
        )
          return;
        t: for (var S = 0; S < o; ) {
          var D = i[S++],
            T = S === 1;
          switch (
            (T && ((l = i[S]), (f = i[S + 1]), (s = l), (u = f)),
            D !== Z.L && m > 0 && (t.lineTo(w, b), (m = 0)),
            D)
          ) {
            case Z.M:
              (s = l = i[S++]), (u = f = i[S++]), t.moveTo(l, f);
              break;
            case Z.L: {
              (h = i[S++]), (c = i[S++]);
              var x = De(h - l),
                M = De(c - f);
              if (x > n || M > a) {
                if (v) {
                  var P = d[g++];
                  if (p + P > _) {
                    var A = (_ - p) / P;
                    t.lineTo(l * (1 - A) + h * A, f * (1 - A) + c * A);
                    break t;
                  }
                  p += P;
                }
                t.lineTo(h, c), (l = h), (f = c), (m = 0);
              } else {
                var L = x * x + M * M;
                L > m && ((w = h), (b = c), (m = L));
              }
              break;
            }
            case Z.C: {
              var I = i[S++],
                R = i[S++],
                E = i[S++],
                G = i[S++],
                N = i[S++],
                z = i[S++];
              if (v) {
                var P = d[g++];
                if (p + P > _) {
                  var A = (_ - p) / P;
                  za(l, I, E, N, A, fr),
                    za(f, R, G, z, A, hr),
                    t.bezierCurveTo(fr[1], hr[1], fr[2], hr[2], fr[3], hr[3]);
                  break t;
                }
                p += P;
              }
              t.bezierCurveTo(I, R, E, G, N, z), (l = N), (f = z);
              break;
            }
            case Z.Q: {
              var I = i[S++],
                R = i[S++],
                E = i[S++],
                G = i[S++];
              if (v) {
                var P = d[g++];
                if (p + P > _) {
                  var A = (_ - p) / P;
                  Ha(l, I, E, A, fr),
                    Ha(f, R, G, A, hr),
                    t.quadraticCurveTo(fr[1], hr[1], fr[2], hr[2]);
                  break t;
                }
                p += P;
              }
              t.quadraticCurveTo(I, R, E, G), (l = E), (f = G);
              break;
            }
            case Z.A:
              var V = i[S++],
                at = i[S++],
                tt = i[S++],
                _t = i[S++],
                Ut = i[S++],
                Fe = i[S++],
                je = i[S++],
                tr = !i[S++],
                zr = tt > _t ? tt : _t,
                Nt = De(tt - _t) > 0.001,
                ct = Ut + Fe,
                H = !1;
              if (v) {
                var P = d[g++];
                p + P > _ && ((ct = Ut + (Fe * (_ - p)) / P), (H = !0)),
                  (p += P);
              }
              if (
                (Nt && t.ellipse
                  ? t.ellipse(V, at, tt, _t, je, Ut, ct, tr)
                  : t.arc(V, at, zr, Ut, ct, tr),
                H)
              )
                break t;
              T && ((s = vr(Ut) * tt + V), (u = cr(Ut) * _t + at)),
                (l = vr(ct) * tt + V),
                (f = cr(ct) * _t + at);
              break;
            case Z.R:
              (s = l = i[S]), (u = f = i[S + 1]), (h = i[S++]), (c = i[S++]);
              var Y = i[S++],
                er = i[S++];
              if (v) {
                var P = d[g++];
                if (p + P > _) {
                  var Ct = _ - p;
                  t.moveTo(h, c),
                    t.lineTo(h + ss(Ct, Y), c),
                    (Ct -= Y),
                    Ct > 0 && t.lineTo(h + Y, c + ss(Ct, er)),
                    (Ct -= er),
                    Ct > 0 && t.lineTo(h + us(Y - Ct, 0), c + er),
                    (Ct -= Y),
                    Ct > 0 && t.lineTo(h, c + us(er - Ct, 0));
                  break t;
                }
                p += P;
              }
              t.rect(h, c, Y, er);
              break;
            case Z.Z:
              if (v) {
                var P = d[g++];
                if (p + P > _) {
                  var A = (_ - p) / P;
                  t.lineTo(l * (1 - A) + s * A, f * (1 - A) + u * A);
                  break t;
                }
                p += P;
              }
              t.closePath(), (l = s), (f = u);
          }
        }
      }),
      (r.prototype.clone = function () {
        var t = new r(),
          e = this.data;
        return (
          (t.data = e.slice ? e.slice() : Array.prototype.slice.call(e)),
          (t._len = this._len),
          t
        );
      }),
      (r.CMD = Z),
      (r.initDefaultProps = (function () {
        var t = r.prototype;
        (t._saveData = !0),
          (t._ux = 0),
          (t._uy = 0),
          (t._pendingPtDist = 0),
          (t._version = 0);
      })()),
      r
    );
  })(),
  di = K0;
function Yr(r, t, e, i, n, a, o) {
  if (n === 0) return !1;
  var s = n,
    u = 0,
    l = r;
  if (
    (o > t + s && o > i + s) ||
    (o < t - s && o < i - s) ||
    (a > r + s && a > e + s) ||
    (a < r - s && a < e - s)
  )
    return !1;
  if (r !== e) (u = (t - i) / (r - e)), (l = (r * i - e * t) / (r - e));
  else return Math.abs(a - r) <= s / 2;
  var f = u * a - o + l,
    h = (f * f) / (u * u + 1);
  return h <= ((s / 2) * s) / 2;
}
function Q0(r, t, e, i, n, a, o, s, u, l, f) {
  if (u === 0) return !1;
  var h = u;
  if (
    (f > t + h && f > i + h && f > a + h && f > s + h) ||
    (f < t - h && f < i - h && f < a - h && f < s - h) ||
    (l > r + h && l > e + h && l > n + h && l > o + h) ||
    (l < r - h && l < e - h && l < n - h && l < o - h)
  )
    return !1;
  var c = o_(r, t, e, i, n, a, o, s, l, f, null);
  return c <= h / 2;
}
function J0(r, t, e, i, n, a, o, s, u) {
  if (o === 0) return !1;
  var l = o;
  if (
    (u > t + l && u > i + l && u > a + l) ||
    (u < t - l && u < i - l && u < a - l) ||
    (s > r + l && s > e + l && s > n + l) ||
    (s < r - l && s < e - l && s < n - l)
  )
    return !1;
  var f = l_(r, t, e, i, n, a, s, u, null);
  return f <= l / 2;
}
var Wf = Math.PI * 2;
function Xn(r) {
  return (r %= Wf), r < 0 && (r += Wf), r;
}
var Pi = Math.PI * 2;
function j0(r, t, e, i, n, a, o, s, u) {
  if (o === 0) return !1;
  var l = o;
  (s -= r), (u -= t);
  var f = Math.sqrt(s * s + u * u);
  if (f - l > e || f + l < e) return !1;
  if (Math.abs(i - n) % Pi < 1e-4) return !0;
  if (a) {
    var h = i;
    (i = Xn(n)), (n = Xn(h));
  } else (i = Xn(i)), (n = Xn(n));
  i > n && (n += Pi);
  var c = Math.atan2(u, s);
  return c < 0 && (c += Pi), (c >= i && c <= n) || (c + Pi >= i && c + Pi <= n);
}
function dr(r, t, e, i, n, a) {
  if ((a > t && a > i) || (a < t && a < i) || i === t) return 0;
  var o = (a - t) / (i - t),
    s = i < t ? 1 : -1;
  (o === 1 || o === 0) && (s = i < t ? 0.5 : -0.5);
  var u = o * (e - r) + r;
  return u === n ? 1 / 0 : u > n ? s : 0;
}
var ze = di.CMD,
  pr = Math.PI * 2,
  tm = 1e-4;
function em(r, t) {
  return Math.abs(r - t) < tm;
}
var Mt = [-1, -1, -1],
  Qt = [-1, -1];
function rm() {
  var r = Qt[0];
  (Qt[0] = Qt[1]), (Qt[1] = r);
}
function im(r, t, e, i, n, a, o, s, u, l) {
  if ((l > t && l > i && l > a && l > s) || (l < t && l < i && l < a && l < s))
    return 0;
  var f = Ac(t, i, a, s, l, Mt);
  if (f === 0) return 0;
  for (var h = 0, c = -1, v = void 0, d = void 0, y = 0; y < f; y++) {
    var p = Mt[y],
      g = p === 0 || p === 1 ? 0.5 : 1,
      _ = pt(r, e, n, o, p);
    _ < u ||
      (c < 0 &&
        ((c = Lc(t, i, a, s, Qt)),
        Qt[1] < Qt[0] && c > 1 && rm(),
        (v = pt(t, i, a, s, Qt[0])),
        c > 1 && (d = pt(t, i, a, s, Qt[1]))),
      c === 2
        ? p < Qt[0]
          ? (h += v < t ? g : -g)
          : p < Qt[1]
          ? (h += d < v ? g : -g)
          : (h += s < d ? g : -g)
        : p < Qt[0]
        ? (h += v < t ? g : -g)
        : (h += s < v ? g : -g));
  }
  return h;
}
function nm(r, t, e, i, n, a, o, s) {
  if ((s > t && s > i && s > a) || (s < t && s < i && s < a)) return 0;
  var u = u_(t, i, a, s, Mt);
  if (u === 0) return 0;
  var l = Ic(t, i, a);
  if (l >= 0 && l <= 1) {
    for (var f = 0, h = St(t, i, a, l), c = 0; c < u; c++) {
      var v = Mt[c] === 0 || Mt[c] === 1 ? 0.5 : 1,
        d = St(r, e, n, Mt[c]);
      d < o || (Mt[c] < l ? (f += h < t ? v : -v) : (f += a < h ? v : -v));
    }
    return f;
  } else {
    var v = Mt[0] === 0 || Mt[0] === 1 ? 0.5 : 1,
      d = St(r, e, n, Mt[0]);
    return d < o ? 0 : a < t ? v : -v;
  }
}
function am(r, t, e, i, n, a, o, s) {
  if (((s -= t), s > e || s < -e)) return 0;
  var u = Math.sqrt(e * e - s * s);
  (Mt[0] = -u), (Mt[1] = u);
  var l = Math.abs(i - n);
  if (l < 1e-4) return 0;
  if (l >= pr - 1e-4) {
    (i = 0), (n = pr);
    var f = a ? 1 : -1;
    return o >= Mt[0] + r && o <= Mt[1] + r ? f : 0;
  }
  if (i > n) {
    var h = i;
    (i = n), (n = h);
  }
  i < 0 && ((i += pr), (n += pr));
  for (var c = 0, v = 0; v < 2; v++) {
    var d = Mt[v];
    if (d + r > o) {
      var y = Math.atan2(s, d),
        f = a ? 1 : -1;
      y < 0 && (y = pr + y),
        ((y >= i && y <= n) || (y + pr >= i && y + pr <= n)) &&
          (y > Math.PI / 2 && y < Math.PI * 1.5 && (f = -f), (c += f));
    }
  }
  return c;
}
function od(r, t, e, i, n) {
  for (
    var a = r.data, o = r.len(), s = 0, u = 0, l = 0, f = 0, h = 0, c, v, d = 0;
    d < o;

  ) {
    var y = a[d++],
      p = d === 1;
    switch (
      (y === ze.M && d > 1 && (e || (s += dr(u, l, f, h, i, n))),
      p && ((u = a[d]), (l = a[d + 1]), (f = u), (h = l)),
      y)
    ) {
      case ze.M:
        (f = a[d++]), (h = a[d++]), (u = f), (l = h);
        break;
      case ze.L:
        if (e) {
          if (Yr(u, l, a[d], a[d + 1], t, i, n)) return !0;
        } else s += dr(u, l, a[d], a[d + 1], i, n) || 0;
        (u = a[d++]), (l = a[d++]);
        break;
      case ze.C:
        if (e) {
          if (Q0(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s +=
            im(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        (u = a[d++]), (l = a[d++]);
        break;
      case ze.Q:
        if (e) {
          if (J0(u, l, a[d++], a[d++], a[d], a[d + 1], t, i, n)) return !0;
        } else s += nm(u, l, a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        (u = a[d++]), (l = a[d++]);
        break;
      case ze.A:
        var g = a[d++],
          _ = a[d++],
          m = a[d++],
          w = a[d++],
          b = a[d++],
          S = a[d++];
        d += 1;
        var D = !!(1 - a[d++]);
        (c = Math.cos(b) * m + g),
          (v = Math.sin(b) * w + _),
          p ? ((f = c), (h = v)) : (s += dr(u, l, c, v, i, n));
        var T = ((i - g) * w) / m + g;
        if (e) {
          if (j0(g, _, w, b, b + S, D, t, T, n)) return !0;
        } else s += am(g, _, w, b, b + S, D, T, n);
        (u = Math.cos(b + S) * m + g), (l = Math.sin(b + S) * w + _);
        break;
      case ze.R:
        (f = u = a[d++]), (h = l = a[d++]);
        var x = a[d++],
          M = a[d++];
        if (((c = f + x), (v = h + M), e)) {
          if (
            Yr(f, h, c, h, t, i, n) ||
            Yr(c, h, c, v, t, i, n) ||
            Yr(c, v, f, v, t, i, n) ||
            Yr(f, v, f, h, t, i, n)
          )
            return !0;
        } else (s += dr(c, h, c, v, i, n)), (s += dr(f, v, f, h, i, n));
        break;
      case ze.Z:
        if (e) {
          if (Yr(u, l, f, h, t, i, n)) return !0;
        } else s += dr(u, l, f, h, i, n);
        (u = f), (l = h);
        break;
    }
  }
  return !e && !em(l, h) && (s += dr(u, l, f, h, i, n) || 0), s !== 0;
}
function om(r, t, e) {
  return od(r, 0, !1, t, e);
}
function sm(r, t, e, i) {
  return od(r, t, !0, e, i);
}
var sd = nt(
    {
      fill: "#000",
      stroke: null,
      strokePercent: 1,
      fillOpacity: 1,
      strokeOpacity: 1,
      lineDashOffset: 0,
      lineWidth: 1,
      lineCap: "butt",
      miterLimit: 10,
      strokeNoScale: !1,
      strokeFirst: !1,
    },
    Ir
  ),
  um = {
    style: nt(
      {
        fill: !0,
        stroke: !0,
        strokePercent: !0,
        fillOpacity: !0,
        strokeOpacity: !0,
        lineDashOffset: !0,
        lineWidth: !0,
        miterLimit: !0,
      },
      vo.style
    ),
  },
  hs = vn.concat(["invisible", "culling", "z", "z2", "zlevel", "parent"]),
  lm = (function (r) {
    Q(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.update = function () {
        var e = this;
        r.prototype.update.call(this);
        var i = this.style;
        if (i.decal) {
          var n = (this._decalEl = this._decalEl || new t());
          n.buildPath === t.prototype.buildPath &&
            (n.buildPath = function (u) {
              e.buildPath(u, e.shape);
            }),
            (n.silent = !0);
          var a = n.style;
          for (var o in i) a[o] !== i[o] && (a[o] = i[o]);
          (a.fill = i.fill ? i.decal : null),
            (a.decal = null),
            (a.shadowColor = null),
            i.strokeFirst && (a.stroke = null);
          for (var s = 0; s < hs.length; ++s) n[hs[s]] = this[hs[s]];
          n.__dirty |= Gt;
        } else this._decalEl && (this._decalEl = null);
      }),
      (t.prototype.getDecalElement = function () {
        return this._decalEl;
      }),
      (t.prototype._init = function (e) {
        var i = ft(e);
        this.shape = this.getDefaultShape();
        var n = this.getDefaultStyle();
        n && this.useStyle(n);
        for (var a = 0; a < i.length; a++) {
          var o = i[a],
            s = e[o];
          o === "style"
            ? this.style
              ? O(this.style, s)
              : this.useStyle(s)
            : o === "shape"
            ? O(this.shape, s)
            : r.prototype.attrKV.call(this, o, s);
        }
        this.style || this.useStyle({});
      }),
      (t.prototype.getDefaultStyle = function () {
        return null;
      }),
      (t.prototype.getDefaultShape = function () {
        return {};
      }),
      (t.prototype.canBeInsideText = function () {
        return this.hasFill();
      }),
      (t.prototype.getInsideTextFill = function () {
        var e = this.style.fill;
        if (e !== "none") {
          if (B(e)) {
            var i = Ga(e, 0);
            return i > 0.5 ? lu : i > 0.2 ? B_ : fu;
          } else if (e) return fu;
        }
        return lu;
      }),
      (t.prototype.getInsideTextStroke = function (e) {
        var i = this.style.fill;
        if (B(i)) {
          var n = this.__zr,
            a = !!(n && n.isDarkMode()),
            o = Ga(e, 0) < uu;
          if (a === o) return i;
        }
      }),
      (t.prototype.buildPath = function (e, i, n) {}),
      (t.prototype.pathUpdated = function () {
        this.__dirty &= ~ti;
      }),
      (t.prototype.getUpdatedPathProxy = function (e) {
        return (
          !this.path && this.createPathProxy(),
          this.path.beginPath(),
          this.buildPath(this.path, this.shape, e),
          this.path
        );
      }),
      (t.prototype.createPathProxy = function () {
        this.path = new di(!1);
      }),
      (t.prototype.hasStroke = function () {
        var e = this.style,
          i = e.stroke;
        return !(i == null || i === "none" || !(e.lineWidth > 0));
      }),
      (t.prototype.hasFill = function () {
        var e = this.style,
          i = e.fill;
        return i != null && i !== "none";
      }),
      (t.prototype.getBoundingRect = function () {
        var e = this._rect,
          i = this.style,
          n = !e;
        if (n) {
          var a = !1;
          this.path || ((a = !0), this.createPathProxy());
          var o = this.path;
          (a || this.__dirty & ti) &&
            (o.beginPath(),
            this.buildPath(o, this.shape, !1),
            this.pathUpdated()),
            (e = o.getBoundingRect());
        }
        if (
          ((this._rect = e),
          this.hasStroke() && this.path && this.path.len() > 0)
        ) {
          var s = this._rectStroke || (this._rectStroke = e.clone());
          if (this.__dirty || n) {
            s.copy(e);
            var u = i.strokeNoScale ? this.getLineScale() : 1,
              l = i.lineWidth;
            if (!this.hasFill()) {
              var f = this.strokeContainThreshold;
              l = Math.max(l, f == null ? 4 : f);
            }
            u > 1e-10 &&
              ((s.width += l / u),
              (s.height += l / u),
              (s.x -= l / u / 2),
              (s.y -= l / u / 2));
          }
          return s;
        }
        return e;
      }),
      (t.prototype.contain = function (e, i) {
        var n = this.transformCoordToLocal(e, i),
          a = this.getBoundingRect(),
          o = this.style;
        if (((e = n[0]), (i = n[1]), a.contain(e, i))) {
          var s = this.path;
          if (this.hasStroke()) {
            var u = o.lineWidth,
              l = o.strokeNoScale ? this.getLineScale() : 1;
            if (
              l > 1e-10 &&
              (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)),
              sm(s, u / l, e, i))
            )
              return !0;
          }
          if (this.hasFill()) return om(s, e, i);
        }
        return !1;
      }),
      (t.prototype.dirtyShape = function () {
        (this.__dirty |= ti),
          this._rect && (this._rect = null),
          this._decalEl && this._decalEl.dirtyShape(),
          this.markRedraw();
      }),
      (t.prototype.dirty = function () {
        this.dirtyStyle(), this.dirtyShape();
      }),
      (t.prototype.animateShape = function (e) {
        return this.animate("shape", e);
      }),
      (t.prototype.updateDuringAnimation = function (e) {
        e === "style"
          ? this.dirtyStyle()
          : e === "shape"
          ? this.dirtyShape()
          : this.markRedraw();
      }),
      (t.prototype.attrKV = function (e, i) {
        e === "shape" ? this.setShape(i) : r.prototype.attrKV.call(this, e, i);
      }),
      (t.prototype.setShape = function (e, i) {
        var n = this.shape;
        return (
          n || (n = this.shape = {}),
          typeof e == "string" ? (n[e] = i) : O(n, e),
          this.dirtyShape(),
          this
        );
      }),
      (t.prototype.shapeChanged = function () {
        return !!(this.__dirty & ti);
      }),
      (t.prototype.createStyle = function (e) {
        return so(sd, e);
      }),
      (t.prototype._innerSaveToNormal = function (e) {
        r.prototype._innerSaveToNormal.call(this, e);
        var i = this._normalState;
        e.shape && !i.shape && (i.shape = O({}, this.shape));
      }),
      (t.prototype._applyStateObj = function (e, i, n, a, o, s) {
        r.prototype._applyStateObj.call(this, e, i, n, a, o, s);
        var u = !(i && a),
          l;
        if (
          (i && i.shape
            ? o
              ? a
                ? (l = i.shape)
                : ((l = O({}, n.shape)), O(l, i.shape))
              : ((l = O({}, a ? this.shape : n.shape)), O(l, i.shape))
            : u && (l = n.shape),
          l)
        )
          if (o) {
            this.shape = O({}, this.shape);
            for (var f = {}, h = ft(l), c = 0; c < h.length; c++) {
              var v = h[c];
              typeof l[v] == "object" ? (this.shape[v] = l[v]) : (f[v] = l[v]);
            }
            this._transitionState(e, { shape: f }, s);
          } else (this.shape = l), this.dirtyShape();
      }),
      (t.prototype._mergeStates = function (e) {
        for (
          var i = r.prototype._mergeStates.call(this, e), n, a = 0;
          a < e.length;
          a++
        ) {
          var o = e[a];
          o.shape && ((n = n || {}), this._mergeStyle(n, o.shape));
        }
        return n && (i.shape = n), i;
      }),
      (t.prototype.getAnimationStyleProps = function () {
        return um;
      }),
      (t.prototype.isZeroArea = function () {
        return !1;
      }),
      (t.extend = function (e) {
        var i = (function (a) {
          Q(o, a);
          function o(s) {
            var u = a.call(this, s) || this;
            return e.init && e.init.call(u, s), u;
          }
          return (
            (o.prototype.getDefaultStyle = function () {
              return X(e.style);
            }),
            (o.prototype.getDefaultShape = function () {
              return X(e.shape);
            }),
            o
          );
        })(t);
        for (var n in e) typeof e[n] == "function" && (i.prototype[n] = e[n]);
        return i;
      }),
      (t.initDefaultProps = (function () {
        var e = t.prototype;
        (e.type = "path"),
          (e.strokeContainThreshold = 5),
          (e.segmentIgnoreThreshold = 0),
          (e.subPixelOptimize = !1),
          (e.autoBatch = !1),
          (e.__dirty = Gt | Wi | ti);
      })()),
      t
    );
  })(An),
  it = lm,
  fm = nt(
    {
      strokeFirst: !0,
      font: Or,
      x: 0,
      y: 0,
      textAlign: "left",
      textBaseline: "top",
      miterLimit: 2,
    },
    sd
  ),
  ud = (function (r) {
    Q(t, r);
    function t() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.hasStroke = function () {
        var e = this.style,
          i = e.stroke;
        return i != null && i !== "none" && e.lineWidth > 0;
      }),
      (t.prototype.hasFill = function () {
        var e = this.style,
          i = e.fill;
        return i != null && i !== "none";
      }),
      (t.prototype.createStyle = function (e) {
        return so(fm, e);
      }),
      (t.prototype.setBoundingRect = function (e) {
        this._rect = e;
      }),
      (t.prototype.getBoundingRect = function () {
        var e = this.style;
        if (!this._rect) {
          var i = e.text;
          i != null ? (i += "") : (i = "");
          var n = zc(i, e.font, e.textAlign, e.textBaseline);
          if (((n.x += e.x || 0), (n.y += e.y || 0), this.hasStroke())) {
            var a = e.lineWidth;
            (n.x -= a / 2), (n.y -= a / 2), (n.width += a), (n.height += a);
          }
          this._rect = n;
        }
        return this._rect;
      }),
      (t.initDefaultProps = (function () {
        var e = t.prototype;
        e.dirtyRectTolerance = 10;
      })()),
      t
    );
  })(An);
ud.prototype.type = "tspan";
var pu = ud,
  hm = nt({ x: 0, y: 0 }, Ir),
  vm = {
    style: nt(
      {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        sx: !0,
        sy: !0,
        sWidth: !0,
        sHeight: !0,
      },
      vo.style
    ),
  };
function cm(r) {
  return !!(r && typeof r != "string" && r.width && r.height);
}
var ld = (function (r) {
  Q(t, r);
  function t() {
    return (r !== null && r.apply(this, arguments)) || this;
  }
  return (
    (t.prototype.createStyle = function (e) {
      return so(hm, e);
    }),
    (t.prototype._getSize = function (e) {
      var i = this.style,
        n = i[e];
      if (n != null) return n;
      var a = cm(i.image) ? i.image : this.__image;
      if (!a) return 0;
      var o = e === "width" ? "height" : "width",
        s = i[o];
      return s == null ? a[e] : (a[e] / a[o]) * s;
    }),
    (t.prototype.getWidth = function () {
      return this._getSize("width");
    }),
    (t.prototype.getHeight = function () {
      return this._getSize("height");
    }),
    (t.prototype.getAnimationStyleProps = function () {
      return vm;
    }),
    (t.prototype.getBoundingRect = function () {
      var e = this.style;
      return (
        this._rect ||
          (this._rect = new j(
            e.x || 0,
            e.y || 0,
            this.getWidth(),
            this.getHeight()
          )),
        this._rect
      );
    }),
    t
  );
})(An);
ld.prototype.type = "image";
var _i = ld;
function dm(r, t) {
  var e = t.x,
    i = t.y,
    n = t.width,
    a = t.height,
    o = t.r,
    s,
    u,
    l,
    f;
  n < 0 && ((e = e + n), (n = -n)),
    a < 0 && ((i = i + a), (a = -a)),
    typeof o == "number"
      ? (s = u = l = f = o)
      : o instanceof Array
      ? o.length === 1
        ? (s = u = l = f = o[0])
        : o.length === 2
        ? ((s = l = o[0]), (u = f = o[1]))
        : o.length === 3
        ? ((s = o[0]), (u = f = o[1]), (l = o[2]))
        : ((s = o[0]), (u = o[1]), (l = o[2]), (f = o[3]))
      : (s = u = l = f = 0);
  var h;
  s + u > n && ((h = s + u), (s *= n / h), (u *= n / h)),
    l + f > n && ((h = l + f), (l *= n / h), (f *= n / h)),
    u + l > a && ((h = u + l), (u *= a / h), (l *= a / h)),
    s + f > a && ((h = s + f), (s *= a / h), (f *= a / h)),
    r.moveTo(e + s, i),
    r.lineTo(e + n - u, i),
    u !== 0 && r.arc(e + n - u, i + u, u, -Math.PI / 2, 0),
    r.lineTo(e + n, i + a - l),
    l !== 0 && r.arc(e + n - l, i + a - l, l, 0, Math.PI / 2),
    r.lineTo(e + f, i + a),
    f !== 0 && r.arc(e + f, i + a - f, f, Math.PI / 2, Math.PI),
    r.lineTo(e, i + s),
    s !== 0 && r.arc(e + s, i + s, s, Math.PI, Math.PI * 1.5);
}
var ai = Math.round;
function fd(r, t, e) {
  if (!!t) {
    var i = t.x1,
      n = t.x2,
      a = t.y1,
      o = t.y2;
    (r.x1 = i), (r.x2 = n), (r.y1 = a), (r.y2 = o);
    var s = e && e.lineWidth;
    return (
      s &&
        (ai(i * 2) === ai(n * 2) && (r.x1 = r.x2 = Mr(i, s, !0)),
        ai(a * 2) === ai(o * 2) && (r.y1 = r.y2 = Mr(a, s, !0))),
      r
    );
  }
}
function hd(r, t, e) {
  if (!!t) {
    var i = t.x,
      n = t.y,
      a = t.width,
      o = t.height;
    (r.x = i), (r.y = n), (r.width = a), (r.height = o);
    var s = e && e.lineWidth;
    return (
      s &&
        ((r.x = Mr(i, s, !0)),
        (r.y = Mr(n, s, !0)),
        (r.width = Math.max(Mr(i + a, s, !1) - r.x, a === 0 ? 0 : 1)),
        (r.height = Math.max(Mr(n + o, s, !1) - r.y, o === 0 ? 0 : 1))),
      r
    );
  }
}
function Mr(r, t, e) {
  if (!t) return r;
  var i = ai(r * 2);
  return (i + ai(t)) % 2 === 0 ? i / 2 : (i + (e ? 1 : -1)) / 2;
}
var pm = (function () {
    function r() {
      (this.x = 0), (this.y = 0), (this.width = 0), (this.height = 0);
    }
    return r;
  })(),
  gm = {},
  vd = (function (r) {
    Q(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultShape = function () {
        return new pm();
      }),
      (t.prototype.buildPath = function (e, i) {
        var n, a, o, s;
        if (this.subPixelOptimize) {
          var u = hd(gm, i, this.style);
          (n = u.x),
            (a = u.y),
            (o = u.width),
            (s = u.height),
            (u.r = i.r),
            (i = u);
        } else (n = i.x), (a = i.y), (o = i.width), (s = i.height);
        i.r ? dm(e, i) : e.rect(n, a, o, s);
      }),
      (t.prototype.isZeroArea = function () {
        return !this.shape.width || !this.shape.height;
      }),
      t
    );
  })(it);
vd.prototype.type = "rect";
var Ot = vd,
  Uf = { fill: "#000" },
  Yf = 2,
  ym = {
    style: nt(
      {
        fill: !0,
        stroke: !0,
        fillOpacity: !0,
        strokeOpacity: !0,
        lineWidth: !0,
        fontSize: !0,
        lineHeight: !0,
        width: !0,
        height: !0,
        textShadowColor: !0,
        textShadowBlur: !0,
        textShadowOffsetX: !0,
        textShadowOffsetY: !0,
        backgroundColor: !0,
        padding: !0,
        borderColor: !0,
        borderWidth: !0,
        borderRadius: !0,
      },
      vo.style
    ),
  },
  cd = (function (r) {
    Q(t, r);
    function t(e) {
      var i = r.call(this) || this;
      return (
        (i.type = "text"),
        (i._children = []),
        (i._defaultStyle = Uf),
        i.attr(e),
        i
      );
    }
    return (
      (t.prototype.childrenRef = function () {
        return this._children;
      }),
      (t.prototype.update = function () {
        r.prototype.update.call(this),
          this.styleChanged() && this._updateSubTexts();
        for (var e = 0; e < this._children.length; e++) {
          var i = this._children[e];
          (i.zlevel = this.zlevel),
            (i.z = this.z),
            (i.z2 = this.z2),
            (i.culling = this.culling),
            (i.cursor = this.cursor),
            (i.invisible = this.invisible);
        }
      }),
      (t.prototype.updateTransform = function () {
        var e = this.innerTransformable;
        e
          ? (e.updateTransform(), e.transform && (this.transform = e.transform))
          : r.prototype.updateTransform.call(this);
      }),
      (t.prototype.getLocalTransform = function (e) {
        var i = this.innerTransformable;
        return i
          ? i.getLocalTransform(e)
          : r.prototype.getLocalTransform.call(this, e);
      }),
      (t.prototype.getComputedTransform = function () {
        return (
          this.__hostTarget &&
            (this.__hostTarget.getComputedTransform(),
            this.__hostTarget.updateInnerText(!0)),
          r.prototype.getComputedTransform.call(this)
        );
      }),
      (t.prototype._updateSubTexts = function () {
        (this._childCursor = 0),
          bm(this.style),
          this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(),
          (this._children.length = this._childCursor),
          this.styleUpdated();
      }),
      (t.prototype.addSelfToZr = function (e) {
        r.prototype.addSelfToZr.call(this, e);
        for (var i = 0; i < this._children.length; i++)
          this._children[i].__zr = e;
      }),
      (t.prototype.removeSelfFromZr = function (e) {
        r.prototype.removeSelfFromZr.call(this, e);
        for (var i = 0; i < this._children.length; i++)
          this._children[i].__zr = null;
      }),
      (t.prototype.getBoundingRect = function () {
        if ((this.styleChanged() && this._updateSubTexts(), !this._rect)) {
          for (
            var e = new j(0, 0, 0, 0),
              i = this._children,
              n = [],
              a = null,
              o = 0;
            o < i.length;
            o++
          ) {
            var s = i[o],
              u = s.getBoundingRect(),
              l = s.getLocalTransform(n);
            l
              ? (e.copy(u),
                e.applyTransform(l),
                (a = a || e.clone()),
                a.union(e))
              : ((a = a || u.clone()), a.union(u));
          }
          this._rect = a || e;
        }
        return this._rect;
      }),
      (t.prototype.setDefaultTextStyle = function (e) {
        this._defaultStyle = e || Uf;
      }),
      (t.prototype.setTextContent = function (e) {}),
      (t.prototype._mergeStyle = function (e, i) {
        if (!i) return e;
        var n = i.rich,
          a = e.rich || (n && {});
        return (
          O(e, i),
          n && a ? (this._mergeRich(a, n), (e.rich = a)) : a && (e.rich = a),
          e
        );
      }),
      (t.prototype._mergeRich = function (e, i) {
        for (var n = ft(i), a = 0; a < n.length; a++) {
          var o = n[a];
          (e[o] = e[o] || {}), O(e[o], i[o]);
        }
      }),
      (t.prototype.getAnimationStyleProps = function () {
        return ym;
      }),
      (t.prototype._getOrCreateChild = function (e) {
        var i = this._children[this._childCursor];
        return (
          (!i || !(i instanceof e)) && (i = new e()),
          (this._children[this._childCursor++] = i),
          (i.__zr = this.__zr),
          (i.parent = this),
          i
        );
      }),
      (t.prototype._updatePlainTexts = function () {
        var e = this.style,
          i = e.font || Or,
          n = e.padding,
          a = Jf(e),
          o = B0(a, e),
          s = vs(e),
          u = !!e.backgroundColor,
          l = o.outerHeight,
          f = o.outerWidth,
          h = o.contentWidth,
          c = o.lines,
          v = o.lineHeight,
          d = this._defaultStyle,
          y = e.x || 0,
          p = e.y || 0,
          g = e.align || d.align || "left",
          _ = e.verticalAlign || d.verticalAlign || "top",
          m = y,
          w = ei(p, o.contentHeight, _);
        if (s || n) {
          var b = Yi(y, f, g),
            S = ei(p, l, _);
          s && this._renderBackground(e, e, b, S, f, l);
        }
        (w += v / 2),
          n &&
            ((m = Qf(y, g, n)),
            _ === "top" ? (w += n[0]) : _ === "bottom" && (w -= n[2]));
        for (
          var D = 0,
            T = !1,
            x = Kf(("fill" in e) ? e.fill : ((T = !0), d.fill)),
            M = Zf(
              ("stroke" in e)
                ? e.stroke
                : !u && (!d.autoStroke || T)
                ? ((D = Yf), d.stroke)
                : null
            ),
            P = e.textShadowBlur > 0,
            A =
              e.width != null &&
              (e.overflow === "truncate" ||
                e.overflow === "break" ||
                e.overflow === "breakAll"),
            L = o.calculatedLineHeight,
            I = 0;
          I < c.length;
          I++
        ) {
          var R = this._getOrCreateChild(pu),
            E = R.createStyle();
          R.useStyle(E),
            (E.text = c[I]),
            (E.x = m),
            (E.y = w),
            g && (E.textAlign = g),
            (E.textBaseline = "middle"),
            (E.opacity = e.opacity),
            (E.strokeFirst = !0),
            P &&
              ((E.shadowBlur = e.textShadowBlur || 0),
              (E.shadowColor = e.textShadowColor || "transparent"),
              (E.shadowOffsetX = e.textShadowOffsetX || 0),
              (E.shadowOffsetY = e.textShadowOffsetY || 0)),
            (E.stroke = M),
            (E.fill = x),
            M &&
              ((E.lineWidth = e.lineWidth || D),
              (E.lineDash = e.lineDash),
              (E.lineDashOffset = e.lineDashOffset || 0)),
            (E.font = i),
            Xf(E, e),
            (w += v),
            A &&
              R.setBoundingRect(
                new j(
                  Yi(E.x, e.width, E.textAlign),
                  ei(E.y, L, E.textBaseline),
                  h,
                  L
                )
              );
        }
      }),
      (t.prototype._updateRichTexts = function () {
        var e = this.style,
          i = Jf(e),
          n = z0(i, e),
          a = n.width,
          o = n.outerWidth,
          s = n.outerHeight,
          u = e.padding,
          l = e.x || 0,
          f = e.y || 0,
          h = this._defaultStyle,
          c = e.align || h.align,
          v = e.verticalAlign || h.verticalAlign,
          d = Yi(l, o, c),
          y = ei(f, s, v),
          p = d,
          g = y;
        u && ((p += u[3]), (g += u[0]));
        var _ = p + a;
        vs(e) && this._renderBackground(e, e, d, y, o, s);
        for (var m = !!e.backgroundColor, w = 0; w < n.lines.length; w++) {
          for (
            var b = n.lines[w],
              S = b.tokens,
              D = S.length,
              T = b.lineHeight,
              x = b.width,
              M = 0,
              P = p,
              A = _,
              L = D - 1,
              I = void 0;
            M < D && ((I = S[M]), !I.align || I.align === "left");

          )
            this._placeToken(I, e, T, g, P, "left", m),
              (x -= I.width),
              (P += I.width),
              M++;
          for (; L >= 0 && ((I = S[L]), I.align === "right"); )
            this._placeToken(I, e, T, g, A, "right", m),
              (x -= I.width),
              (A -= I.width),
              L--;
          for (P += (a - (P - p) - (_ - A) - x) / 2; M <= L; )
            (I = S[M]),
              this._placeToken(I, e, T, g, P + I.width / 2, "center", m),
              (P += I.width),
              M++;
          g += T;
        }
      }),
      (t.prototype._placeToken = function (e, i, n, a, o, s, u) {
        var l = i.rich[e.styleName] || {};
        l.text = e.text;
        var f = e.verticalAlign,
          h = a + n / 2;
        f === "top"
          ? (h = a + e.height / 2)
          : f === "bottom" && (h = a + n - e.height / 2);
        var c = !e.isLineHolder && vs(l);
        c &&
          this._renderBackground(
            l,
            i,
            s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o,
            h - e.height / 2,
            e.width,
            e.height
          );
        var v = !!l.backgroundColor,
          d = e.textPadding;
        d &&
          ((o = Qf(o, s, d)), (h -= e.height / 2 - d[0] - e.innerHeight / 2));
        var y = this._getOrCreateChild(pu),
          p = y.createStyle();
        y.useStyle(p);
        var g = this._defaultStyle,
          _ = !1,
          m = 0,
          w = Kf(
            "fill" in l ? l.fill : "fill" in i ? i.fill : ((_ = !0), g.fill)
          ),
          b = Zf(
            "stroke" in l
              ? l.stroke
              : "stroke" in i
              ? i.stroke
              : !v && !u && (!g.autoStroke || _)
              ? ((m = Yf), g.stroke)
              : null
          ),
          S = l.textShadowBlur > 0 || i.textShadowBlur > 0;
        (p.text = e.text),
          (p.x = o),
          (p.y = h),
          S &&
            ((p.shadowBlur = l.textShadowBlur || i.textShadowBlur || 0),
            (p.shadowColor =
              l.textShadowColor || i.textShadowColor || "transparent"),
            (p.shadowOffsetX = l.textShadowOffsetX || i.textShadowOffsetX || 0),
            (p.shadowOffsetY =
              l.textShadowOffsetY || i.textShadowOffsetY || 0)),
          (p.textAlign = s),
          (p.textBaseline = "middle"),
          (p.font = e.font || Or),
          (p.opacity = _a(l.opacity, i.opacity, 1)),
          Xf(p, l),
          b &&
            ((p.lineWidth = _a(l.lineWidth, i.lineWidth, m)),
            (p.lineDash = K(l.lineDash, i.lineDash)),
            (p.lineDashOffset = i.lineDashOffset || 0),
            (p.stroke = b)),
          w && (p.fill = w);
        var D = e.contentWidth,
          T = e.contentHeight;
        y.setBoundingRect(
          new j(Yi(p.x, D, p.textAlign), ei(p.y, T, p.textBaseline), D, T)
        );
      }),
      (t.prototype._renderBackground = function (e, i, n, a, o, s) {
        var u = e.backgroundColor,
          l = e.borderWidth,
          f = e.borderColor,
          h = u && u.image,
          c = u && !h,
          v = e.borderRadius,
          d = this,
          y,
          p;
        if (c || e.lineHeight || (l && f)) {
          (y = this._getOrCreateChild(Ot)),
            y.useStyle(y.createStyle()),
            (y.style.fill = null);
          var g = y.shape;
          (g.x = n),
            (g.y = a),
            (g.width = o),
            (g.height = s),
            (g.r = v),
            y.dirtyShape();
        }
        if (c) {
          var _ = y.style;
          (_.fill = u || null), (_.fillOpacity = K(e.fillOpacity, 1));
        } else if (h) {
          (p = this._getOrCreateChild(_i)),
            (p.onload = function () {
              d.dirtyStyle();
            });
          var m = p.style;
          (m.image = u.image),
            (m.x = n),
            (m.y = a),
            (m.width = o),
            (m.height = s);
        }
        if (l && f) {
          var _ = y.style;
          (_.lineWidth = l),
            (_.stroke = f),
            (_.strokeOpacity = K(e.strokeOpacity, 1)),
            (_.lineDash = e.borderDash),
            (_.lineDashOffset = e.borderDashOffset || 0),
            (y.strokeContainThreshold = 0),
            y.hasFill() &&
              y.hasStroke() &&
              ((_.strokeFirst = !0), (_.lineWidth *= 2));
        }
        var w = (y || p).style;
        (w.shadowBlur = e.shadowBlur || 0),
          (w.shadowColor = e.shadowColor || "transparent"),
          (w.shadowOffsetX = e.shadowOffsetX || 0),
          (w.shadowOffsetY = e.shadowOffsetY || 0),
          (w.opacity = _a(e.opacity, i.opacity, 1));
      }),
      (t.makeFont = function (e) {
        var i = "";
        return (
          Sm(e) &&
            (i = [
              e.fontStyle,
              e.fontWeight,
              wm(e.fontSize),
              e.fontFamily || "sans-serif",
            ].join(" ")),
          (i && ye(i)) || e.textFont || e.font
        );
      }),
      t
    );
  })(An),
  _m = { left: !0, right: 1, center: 1 },
  mm = { top: 1, bottom: 1, middle: 1 },
  $f = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function wm(r) {
  return typeof r == "string" &&
    (r.indexOf("px") !== -1 ||
      r.indexOf("rem") !== -1 ||
      r.indexOf("em") !== -1)
    ? r
    : isNaN(+r)
    ? Ku + "px"
    : r + "px";
}
function Xf(r, t) {
  for (var e = 0; e < $f.length; e++) {
    var i = $f[e],
      n = t[i];
    n != null && (r[i] = n);
  }
}
function Sm(r) {
  return r.fontSize != null || r.fontFamily || r.fontWeight;
}
function bm(r) {
  return qf(r), C(r.rich, qf), r;
}
function qf(r) {
  if (r) {
    r.font = cd.makeFont(r);
    var t = r.align;
    t === "middle" && (t = "center"),
      (r.align = t == null || _m[t] ? t : "left");
    var e = r.verticalAlign;
    e === "center" && (e = "middle"),
      (r.verticalAlign = e == null || mm[e] ? e : "top");
    var i = r.padding;
    i && (r.padding = gc(r.padding));
  }
}
function Zf(r, t) {
  return r == null || t <= 0 || r === "transparent" || r === "none"
    ? null
    : r.image || r.colorStops
    ? "#000"
    : r;
}
function Kf(r) {
  return r == null || r === "none"
    ? null
    : r.image || r.colorStops
    ? "#000"
    : r;
}
function Qf(r, t, e) {
  return t === "right"
    ? r - e[1]
    : t === "center"
    ? r + e[3] / 2 - e[1] / 2
    : r + e[3];
}
function Jf(r) {
  var t = r.text;
  return t != null && (t += ""), t;
}
function vs(r) {
  return !!(
    r.backgroundColor ||
    r.lineHeight ||
    (r.borderWidth && r.borderColor)
  );
}
var Bt = cd,
  lt = yt(),
  Tm = function (r, t, e, i) {
    if (i) {
      var n = lt(i);
      (n.dataIndex = e),
        (n.dataType = t),
        (n.seriesIndex = r),
        i.type === "group" &&
          i.traverse(function (a) {
            var o = lt(a);
            (o.seriesIndex = r), (o.dataIndex = e), (o.dataType = t);
          });
    }
  },
  jf = 1,
  th = {},
  dd = yt(),
  vl = yt(),
  cl = 0,
  co = 1,
  po = 2,
  Qe = ["emphasis", "blur", "select"],
  eh = ["normal", "emphasis", "blur", "select"],
  xm = 10,
  Cm = 9,
  Rr = "highlight",
  Da = "downplay",
  Ji = "select",
  Ma = "unselect",
  ji = "toggleSelect";
function $r(r) {
  return r != null && r !== "none";
}
var rh = new Dn(100);
function ih(r) {
  if (B(r)) {
    var t = rh.get(r);
    return t || ((t = mf(r, -0.1)), rh.put(r, t)), t;
  } else if (oo(r)) {
    var e = O({}, r);
    return (
      (e.colorStops = U(r.colorStops, function (i) {
        return { offset: i.offset, color: mf(i.color, -0.1) };
      })),
      e
    );
  }
  return r;
}
function go(r, t, e) {
  r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t),
    (r.hoverState = e);
}
function pd(r) {
  go(r, "emphasis", po);
}
function gd(r) {
  r.hoverState === po && go(r, "normal", cl);
}
function dl(r) {
  go(r, "blur", co);
}
function yd(r) {
  r.hoverState === co && go(r, "normal", cl);
}
function Dm(r) {
  r.selected = !0;
}
function Mm(r) {
  r.selected = !1;
}
function nh(r, t, e) {
  t(r, e);
}
function ke(r, t, e) {
  nh(r, t, e),
    r.isGroup &&
      r.traverse(function (i) {
        nh(i, t, e);
      });
}
function AD(r, t) {
  switch (t) {
    case "emphasis":
      r.hoverState = po;
      break;
    case "normal":
      r.hoverState = cl;
      break;
    case "blur":
      r.hoverState = co;
      break;
    case "select":
      r.selected = !0;
  }
}
function Pm(r, t, e, i) {
  for (var n = r.style, a = {}, o = 0; o < t.length; o++) {
    var s = t[o],
      u = n[s];
    a[s] = u == null ? i && i[s] : u;
  }
  for (var o = 0; o < r.animators.length; o++) {
    var l = r.animators[o];
    l.__fromStateTransition &&
      l.__fromStateTransition.indexOf(e) < 0 &&
      l.targetName === "style" &&
      l.saveTo(a, t);
  }
  return a;
}
function Am(r, t, e, i) {
  var n = e && et(e, "select") >= 0,
    a = !1;
  if (r instanceof it) {
    var o = dd(r),
      s = (n && o.selectFill) || o.normalFill,
      u = (n && o.selectStroke) || o.normalStroke;
    if ($r(s) || $r(u)) {
      i = i || {};
      var l = i.style || {};
      l.fill === "inherit"
        ? ((a = !0), (i = O({}, i)), (l = O({}, l)), (l.fill = s))
        : !$r(l.fill) && $r(s)
        ? ((a = !0), (i = O({}, i)), (l = O({}, l)), (l.fill = ih(s)))
        : !$r(l.stroke) &&
          $r(u) &&
          (a || ((i = O({}, i)), (l = O({}, l))), (l.stroke = ih(u))),
        (i.style = l);
    }
  }
  if (i && i.z2 == null) {
    a || (i = O({}, i));
    var f = r.z2EmphasisLift;
    i.z2 = r.z2 + (f != null ? f : xm);
  }
  return i;
}
function Lm(r, t, e) {
  if (e && e.z2 == null) {
    e = O({}, e);
    var i = r.z2SelectLift;
    e.z2 = r.z2 + (i != null ? i : Cm);
  }
  return e;
}
function Im(r, t, e) {
  var i = et(r.currentStates, t) >= 0,
    n = r.style.opacity,
    a = i ? null : Pm(r, ["opacity"], t, { opacity: 1 });
  e = e || {};
  var o = e.style || {};
  return (
    o.opacity == null &&
      ((e = O({}, e)),
      (o = O({ opacity: i ? n : a.opacity * 0.1 }, o)),
      (e.style = o)),
    e
  );
}
function cs(r, t) {
  var e = this.states[r];
  if (this.style) {
    if (r === "emphasis") return Am(this, r, t, e);
    if (r === "blur") return Im(this, r, e);
    if (r === "select") return Lm(this, r, e);
  }
  return e;
}
function Rm(r) {
  r.stateProxy = cs;
  var t = r.getTextContent(),
    e = r.getTextGuideLine();
  t && (t.stateProxy = cs), e && (e.stateProxy = cs);
}
function ah(r, t) {
  !Sd(r, t) && !r.__highByOuter && ke(r, pd);
}
function oh(r, t) {
  !Sd(r, t) && !r.__highByOuter && ke(r, gd);
}
function gu(r, t) {
  (r.__highByOuter |= 1 << (t || 0)), ke(r, pd);
}
function yu(r, t) {
  !(r.__highByOuter &= ~(1 << (t || 0))) && ke(r, gd);
}
function Em(r) {
  ke(r, dl);
}
function _d(r) {
  ke(r, yd);
}
function md(r) {
  ke(r, Dm);
}
function wd(r) {
  ke(r, Mm);
}
function Sd(r, t) {
  return r.__highDownSilentOnTouch && t.zrByTouch;
}
function bd(r) {
  var t = r.getModel(),
    e = [],
    i = [];
  t.eachComponent(function (n, a) {
    var o = vl(a),
      s = n === "series",
      u = s ? r.getViewOfSeriesModel(a) : r.getViewOfComponentModel(a);
    !s && i.push(u),
      o.isBlured &&
        (u.group.traverse(function (l) {
          yd(l);
        }),
        s && e.push(a)),
      (o.isBlured = !1);
  }),
    C(i, function (n) {
      n && n.toggleBlurSeries && n.toggleBlurSeries(e, !1, t);
    });
}
function _u(r, t, e, i) {
  var n = i.getModel();
  e = e || "coordinateSystem";
  function a(l, f) {
    for (var h = 0; h < f.length; h++) {
      var c = l.getItemGraphicEl(f[h]);
      c && _d(c);
    }
  }
  if (r != null && !(!t || t === "none")) {
    var o = n.getSeriesByIndex(r),
      s = o.coordinateSystem;
    s && s.master && (s = s.master);
    var u = [];
    n.eachSeries(function (l) {
      var f = o === l,
        h = l.coordinateSystem;
      h && h.master && (h = h.master);
      var c = h && s ? h === s : f;
      if (
        !(
          (e === "series" && !f) ||
          (e === "coordinateSystem" && !c) ||
          (t === "series" && f)
        )
      ) {
        var v = i.getViewOfSeriesModel(l);
        if (
          (v.group.traverse(function (p) {
            dl(p);
          }),
          kt(t))
        )
          a(l.getData(), t);
        else if (F(t))
          for (var d = ft(t), y = 0; y < d.length; y++)
            a(l.getData(d[y]), t[d[y]]);
        u.push(l), (vl(l).isBlured = !0);
      }
    }),
      n.eachComponent(function (l, f) {
        if (l !== "series") {
          var h = i.getViewOfComponentModel(f);
          h && h.toggleBlurSeries && h.toggleBlurSeries(u, !0, n);
        }
      });
  }
}
function mu(r, t, e) {
  if (!(r == null || t == null)) {
    var i = e.getModel().getComponent(r, t);
    if (!!i) {
      vl(i).isBlured = !0;
      var n = e.getViewOfComponentModel(i);
      !n ||
        !n.focusBlurEnabled ||
        n.group.traverse(function (a) {
          dl(a);
        });
    }
  }
}
function Om(r, t, e) {
  var i = r.seriesIndex,
    n = r.getData(t.dataType);
  if (!!n) {
    var a = Mn(n, t);
    a = (k(a) ? a[0] : a) || 0;
    var o = n.getItemGraphicEl(a);
    if (!o)
      for (var s = n.count(), u = 0; !o && u < s; ) o = n.getItemGraphicEl(u++);
    if (o) {
      var l = lt(o);
      _u(i, l.focus, l.blurScope, e);
    } else {
      var f = r.get(["emphasis", "focus"]),
        h = r.get(["emphasis", "blurScope"]);
      f != null && _u(i, f, h, e);
    }
  }
}
function pl(r, t, e, i) {
  var n = { focusSelf: !1, dispatchers: null };
  if (r == null || r === "series" || t == null || e == null) return n;
  var a = i.getModel().getComponent(r, t);
  if (!a) return n;
  var o = i.getViewOfComponentModel(a);
  if (!o || !o.findHighDownDispatchers) return n;
  for (var s = o.findHighDownDispatchers(e), u, l = 0; l < s.length; l++)
    if (lt(s[l]).focus === "self") {
      u = !0;
      break;
    }
  return { focusSelf: u, dispatchers: s };
}
function km(r, t, e) {
  var i = lt(r),
    n = pl(i.componentMainType, i.componentIndex, i.componentHighDownName, e),
    a = n.dispatchers,
    o = n.focusSelf;
  a
    ? (o && mu(i.componentMainType, i.componentIndex, e),
      C(a, function (s) {
        return ah(s, t);
      }))
    : (_u(i.seriesIndex, i.focus, i.blurScope, e),
      i.focus === "self" && mu(i.componentMainType, i.componentIndex, e),
      ah(r, t));
}
function Bm(r, t, e) {
  bd(e);
  var i = lt(r),
    n = pl(
      i.componentMainType,
      i.componentIndex,
      i.componentHighDownName,
      e
    ).dispatchers;
  n
    ? C(n, function (a) {
        return oh(a, t);
      })
    : oh(r, t);
}
function Fm(r, t, e) {
  if (!!bu(t)) {
    var i = t.dataType,
      n = r.getData(i),
      a = Mn(n, t);
    k(a) || (a = [a]),
      r[t.type === ji ? "toggleSelect" : t.type === Ji ? "select" : "unselect"](
        a,
        i
      );
  }
}
function sh(r) {
  var t = r.getAllData();
  C(t, function (e) {
    var i = e.data,
      n = e.type;
    i.eachItemGraphicEl(function (a, o) {
      r.isSelected(o, n) ? md(a) : wd(a);
    });
  });
}
function Nm(r) {
  var t = [];
  return (
    r.eachSeries(function (e) {
      var i = e.getAllData();
      C(i, function (n) {
        n.data;
        var a = n.type,
          o = e.getSelectedDataIndices();
        if (o.length > 0) {
          var s = { dataIndex: o, seriesIndex: e.seriesIndex };
          a != null && (s.dataType = a), t.push(s);
        }
      });
    }),
    t
  );
}
function wu(r, t, e) {
  Td(r, !0), ke(r, Rm), Hm(r, t, e);
}
function zm(r) {
  Td(r, !1);
}
function LD(r, t, e, i) {
  i ? zm(r) : wu(r, t, e);
}
function Hm(r, t, e) {
  var i = lt(r);
  t != null ? ((i.focus = t), (i.blurScope = e)) : i.focus && (i.focus = null);
}
var uh = ["emphasis", "blur", "select"],
  Gm = {
    itemStyle: "getItemStyle",
    lineStyle: "getLineStyle",
    areaStyle: "getAreaStyle",
  };
function ID(r, t, e, i) {
  e = e || "itemStyle";
  for (var n = 0; n < uh.length; n++) {
    var a = uh[n],
      o = t.getModel([a, e]),
      s = r.ensureState(a);
    s.style = i ? i(o) : o[Gm[e]]();
  }
}
function Td(r, t) {
  var e = t === !1,
    i = r;
  r.highDownSilentOnTouch &&
    (i.__highDownSilentOnTouch = r.highDownSilentOnTouch),
    (!e || i.__highDownDispatcher) &&
      ((i.__highByOuter = i.__highByOuter || 0), (i.__highDownDispatcher = !e));
}
function Su(r) {
  return !!(r && r.__highDownDispatcher);
}
function Vm(r) {
  var t = th[r];
  return t == null && jf <= 32 && (t = th[r] = jf++), t;
}
function bu(r) {
  var t = r.type;
  return t === Ji || t === Ma || t === ji;
}
function lh(r) {
  var t = r.type;
  return t === Rr || t === Da;
}
function Wm(r) {
  var t = dd(r);
  (t.normalFill = r.style.fill), (t.normalStroke = r.style.stroke);
  var e = r.states.select || {};
  (t.selectFill = (e.style && e.style.fill) || null),
    (t.selectStroke = (e.style && e.style.stroke) || null);
}
var Xr = di.CMD,
  Um = [[], [], []],
  fh = Math.sqrt,
  Ym = Math.atan2;
function $m(r, t) {
  if (!!t) {
    var e = r.data,
      i = r.len(),
      n,
      a,
      o,
      s,
      u,
      l,
      f = Xr.M,
      h = Xr.C,
      c = Xr.L,
      v = Xr.R,
      d = Xr.A,
      y = Xr.Q;
    for (o = 0, s = 0; o < i; ) {
      switch (((n = e[o++]), (s = o), (a = 0), n)) {
        case f:
          a = 1;
          break;
        case c:
          a = 1;
          break;
        case h:
          a = 3;
          break;
        case y:
          a = 2;
          break;
        case d:
          var p = t[4],
            g = t[5],
            _ = fh(t[0] * t[0] + t[1] * t[1]),
            m = fh(t[2] * t[2] + t[3] * t[3]),
            w = Ym(-t[1] / m, t[0] / _);
          (e[o] *= _),
            (e[o++] += p),
            (e[o] *= m),
            (e[o++] += g),
            (e[o++] *= _),
            (e[o++] *= m),
            (e[o++] += w),
            (e[o++] += w),
            (o += 2),
            (s = o);
          break;
        case v:
          (l[0] = e[o++]),
            (l[1] = e[o++]),
            me(l, l, t),
            (e[s++] = l[0]),
            (e[s++] = l[1]),
            (l[0] += e[o++]),
            (l[1] += e[o++]),
            me(l, l, t),
            (e[s++] = l[0]),
            (e[s++] = l[1]);
      }
      for (u = 0; u < a; u++) {
        var b = Um[u];
        (b[0] = e[o++]),
          (b[1] = e[o++]),
          me(b, b, t),
          (e[s++] = b[0]),
          (e[s++] = b[1]);
      }
    }
    r.increaseVersion();
  }
}
var ds = Math.sqrt,
  qn = Math.sin,
  Zn = Math.cos,
  Ai = Math.PI;
function hh(r) {
  return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
}
function Tu(r, t) {
  return (r[0] * t[0] + r[1] * t[1]) / (hh(r) * hh(t));
}
function vh(r, t) {
  return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(Tu(r, t));
}
function ch(r, t, e, i, n, a, o, s, u, l, f) {
  var h = u * (Ai / 180),
    c = (Zn(h) * (r - e)) / 2 + (qn(h) * (t - i)) / 2,
    v = (-1 * qn(h) * (r - e)) / 2 + (Zn(h) * (t - i)) / 2,
    d = (c * c) / (o * o) + (v * v) / (s * s);
  d > 1 && ((o *= ds(d)), (s *= ds(d)));
  var y =
      (n === a ? -1 : 1) *
        ds(
          (o * o * (s * s) - o * o * (v * v) - s * s * (c * c)) /
            (o * o * (v * v) + s * s * (c * c))
        ) || 0,
    p = (y * o * v) / s,
    g = (y * -s * c) / o,
    _ = (r + e) / 2 + Zn(h) * p - qn(h) * g,
    m = (t + i) / 2 + qn(h) * p + Zn(h) * g,
    w = vh([1, 0], [(c - p) / o, (v - g) / s]),
    b = [(c - p) / o, (v - g) / s],
    S = [(-1 * c - p) / o, (-1 * v - g) / s],
    D = vh(b, S);
  if ((Tu(b, S) <= -1 && (D = Ai), Tu(b, S) >= 1 && (D = 0), D < 0)) {
    var T = Math.round((D / Ai) * 1e6) / 1e6;
    D = Ai * 2 + (T % 2) * Ai;
  }
  f.addData(l, _, m, o, s, w, D, h, a);
}
var Xm = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
  qm = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function Zm(r) {
  var t = new di();
  if (!r) return t;
  var e = 0,
    i = 0,
    n = e,
    a = i,
    o,
    s = di.CMD,
    u = r.match(Xm);
  if (!u) return t;
  for (var l = 0; l < u.length; l++) {
    for (
      var f = u[l],
        h = f.charAt(0),
        c = void 0,
        v = f.match(qm) || [],
        d = v.length,
        y = 0;
      y < d;
      y++
    )
      v[y] = parseFloat(v[y]);
    for (var p = 0; p < d; ) {
      var g = void 0,
        _ = void 0,
        m = void 0,
        w = void 0,
        b = void 0,
        S = void 0,
        D = void 0,
        T = e,
        x = i,
        M = void 0,
        P = void 0;
      switch (h) {
        case "l":
          (e += v[p++]), (i += v[p++]), (c = s.L), t.addData(c, e, i);
          break;
        case "L":
          (e = v[p++]), (i = v[p++]), (c = s.L), t.addData(c, e, i);
          break;
        case "m":
          (e += v[p++]),
            (i += v[p++]),
            (c = s.M),
            t.addData(c, e, i),
            (n = e),
            (a = i),
            (h = "l");
          break;
        case "M":
          (e = v[p++]),
            (i = v[p++]),
            (c = s.M),
            t.addData(c, e, i),
            (n = e),
            (a = i),
            (h = "L");
          break;
        case "h":
          (e += v[p++]), (c = s.L), t.addData(c, e, i);
          break;
        case "H":
          (e = v[p++]), (c = s.L), t.addData(c, e, i);
          break;
        case "v":
          (i += v[p++]), (c = s.L), t.addData(c, e, i);
          break;
        case "V":
          (i = v[p++]), (c = s.L), t.addData(c, e, i);
          break;
        case "C":
          (c = s.C),
            t.addData(c, v[p++], v[p++], v[p++], v[p++], v[p++], v[p++]),
            (e = v[p - 2]),
            (i = v[p - 1]);
          break;
        case "c":
          (c = s.C),
            t.addData(
              c,
              v[p++] + e,
              v[p++] + i,
              v[p++] + e,
              v[p++] + i,
              v[p++] + e,
              v[p++] + i
            ),
            (e += v[p - 2]),
            (i += v[p - 1]);
          break;
        case "S":
          (g = e),
            (_ = i),
            (M = t.len()),
            (P = t.data),
            o === s.C && ((g += e - P[M - 4]), (_ += i - P[M - 3])),
            (c = s.C),
            (T = v[p++]),
            (x = v[p++]),
            (e = v[p++]),
            (i = v[p++]),
            t.addData(c, g, _, T, x, e, i);
          break;
        case "s":
          (g = e),
            (_ = i),
            (M = t.len()),
            (P = t.data),
            o === s.C && ((g += e - P[M - 4]), (_ += i - P[M - 3])),
            (c = s.C),
            (T = e + v[p++]),
            (x = i + v[p++]),
            (e += v[p++]),
            (i += v[p++]),
            t.addData(c, g, _, T, x, e, i);
          break;
        case "Q":
          (T = v[p++]),
            (x = v[p++]),
            (e = v[p++]),
            (i = v[p++]),
            (c = s.Q),
            t.addData(c, T, x, e, i);
          break;
        case "q":
          (T = v[p++] + e),
            (x = v[p++] + i),
            (e += v[p++]),
            (i += v[p++]),
            (c = s.Q),
            t.addData(c, T, x, e, i);
          break;
        case "T":
          (g = e),
            (_ = i),
            (M = t.len()),
            (P = t.data),
            o === s.Q && ((g += e - P[M - 4]), (_ += i - P[M - 3])),
            (e = v[p++]),
            (i = v[p++]),
            (c = s.Q),
            t.addData(c, g, _, e, i);
          break;
        case "t":
          (g = e),
            (_ = i),
            (M = t.len()),
            (P = t.data),
            o === s.Q && ((g += e - P[M - 4]), (_ += i - P[M - 3])),
            (e += v[p++]),
            (i += v[p++]),
            (c = s.Q),
            t.addData(c, g, _, e, i);
          break;
        case "A":
          (m = v[p++]),
            (w = v[p++]),
            (b = v[p++]),
            (S = v[p++]),
            (D = v[p++]),
            (T = e),
            (x = i),
            (e = v[p++]),
            (i = v[p++]),
            (c = s.A),
            ch(T, x, e, i, S, D, m, w, b, c, t);
          break;
        case "a":
          (m = v[p++]),
            (w = v[p++]),
            (b = v[p++]),
            (S = v[p++]),
            (D = v[p++]),
            (T = e),
            (x = i),
            (e += v[p++]),
            (i += v[p++]),
            (c = s.A),
            ch(T, x, e, i, S, D, m, w, b, c, t);
          break;
      }
    }
    (h === "z" || h === "Z") && ((c = s.Z), t.addData(c), (e = n), (i = a)),
      (o = c);
  }
  return t.toStatic(), t;
}
var xd = (function (r) {
  Q(t, r);
  function t() {
    return (r !== null && r.apply(this, arguments)) || this;
  }
  return (t.prototype.applyTransform = function (e) {}), t;
})(it);
function Cd(r) {
  return r.setData != null;
}
function Dd(r, t) {
  var e = Zm(r),
    i = O({}, t);
  return (
    (i.buildPath = function (n) {
      if (Cd(n)) {
        n.setData(e.data);
        var a = n.getContext();
        a && n.rebuildPath(a, 1);
      } else {
        var a = n;
        e.rebuildPath(a, 1);
      }
    }),
    (i.applyTransform = function (n) {
      $m(e, n), this.dirtyShape();
    }),
    i
  );
}
function Km(r, t) {
  return new xd(Dd(r, t));
}
function Qm(r, t) {
  var e = Dd(r, t),
    i = (function (n) {
      Q(a, n);
      function a(o) {
        var s = n.call(this, o) || this;
        return (
          (s.applyTransform = e.applyTransform), (s.buildPath = e.buildPath), s
        );
      }
      return a;
    })(xd);
  return i;
}
function Jm(r, t) {
  for (var e = [], i = r.length, n = 0; n < i; n++) {
    var a = r[n];
    e.push(a.getUpdatedPathProxy(!0));
  }
  var o = new it(t);
  return (
    o.createPathProxy(),
    (o.buildPath = function (s) {
      if (Cd(s)) {
        s.appendPath(e);
        var u = s.getContext();
        u && s.rebuildPath(u, 1);
      }
    }),
    o
  );
}
var jm = (function () {
    function r() {
      (this.cx = 0), (this.cy = 0), (this.r = 0);
    }
    return r;
  })(),
  Md = (function (r) {
    Q(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultShape = function () {
        return new jm();
      }),
      (t.prototype.buildPath = function (e, i) {
        e.moveTo(i.cx + i.r, i.cy), e.arc(i.cx, i.cy, i.r, 0, Math.PI * 2);
      }),
      t
    );
  })(it);
Md.prototype.type = "circle";
var gl = Md,
  t1 = (function () {
    function r() {
      (this.cx = 0), (this.cy = 0), (this.rx = 0), (this.ry = 0);
    }
    return r;
  })(),
  Pd = (function (r) {
    Q(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultShape = function () {
        return new t1();
      }),
      (t.prototype.buildPath = function (e, i) {
        var n = 0.5522848,
          a = i.cx,
          o = i.cy,
          s = i.rx,
          u = i.ry,
          l = s * n,
          f = u * n;
        e.moveTo(a - s, o),
          e.bezierCurveTo(a - s, o - f, a - l, o - u, a, o - u),
          e.bezierCurveTo(a + l, o - u, a + s, o - f, a + s, o),
          e.bezierCurveTo(a + s, o + f, a + l, o + u, a, o + u),
          e.bezierCurveTo(a - l, o + u, a - s, o + f, a - s, o),
          e.closePath();
      }),
      t
    );
  })(it);
Pd.prototype.type = "ellipse";
var Ad = Pd,
  Ld = Math.PI,
  ps = Ld * 2,
  gr = Math.sin,
  qr = Math.cos,
  e1 = Math.acos,
  mt = Math.atan2,
  dh = Math.abs,
  tn = Math.sqrt,
  $i = Math.max,
  pe = Math.min,
  ie = 1e-4;
function r1(r, t, e, i, n, a, o, s) {
  var u = e - r,
    l = i - t,
    f = o - n,
    h = s - a,
    c = h * u - f * l;
  if (!(c * c < ie))
    return (c = (f * (t - a) - h * (r - n)) / c), [r + c * u, t + c * l];
}
function Kn(r, t, e, i, n, a, o) {
  var s = r - e,
    u = t - i,
    l = (o ? a : -a) / tn(s * s + u * u),
    f = l * u,
    h = -l * s,
    c = r + f,
    v = t + h,
    d = e + f,
    y = i + h,
    p = (c + d) / 2,
    g = (v + y) / 2,
    _ = d - c,
    m = y - v,
    w = _ * _ + m * m,
    b = n - a,
    S = c * y - d * v,
    D = (m < 0 ? -1 : 1) * tn($i(0, b * b * w - S * S)),
    T = (S * m - _ * D) / w,
    x = (-S * _ - m * D) / w,
    M = (S * m + _ * D) / w,
    P = (-S * _ + m * D) / w,
    A = T - p,
    L = x - g,
    I = M - p,
    R = P - g;
  return (
    A * A + L * L > I * I + R * R && ((T = M), (x = P)),
    { cx: T, cy: x, x0: -f, y0: -h, x1: T * (n / b - 1), y1: x * (n / b - 1) }
  );
}
function i1(r) {
  var t;
  if (k(r)) {
    var e = r.length;
    if (!e) return r;
    e === 1
      ? (t = [r[0], r[0], 0, 0])
      : e === 2
      ? (t = [r[0], r[0], r[1], r[1]])
      : e === 3
      ? (t = r.concat(r[2]))
      : (t = r);
  } else t = [r, r, r, r];
  return t;
}
function n1(r, t) {
  var e,
    i = $i(t.r, 0),
    n = $i(t.r0 || 0, 0),
    a = i > 0,
    o = n > 0;
  if (!(!a && !o)) {
    if ((a || ((i = n), (n = 0)), n > i)) {
      var s = i;
      (i = n), (n = s);
    }
    var u = t.startAngle,
      l = t.endAngle;
    if (!(isNaN(u) || isNaN(l))) {
      var f = t.cx,
        h = t.cy,
        c = !!t.clockwise,
        v = dh(l - u),
        d = v > ps && v % ps;
      if ((d > ie && (v = d), !(i > ie))) r.moveTo(f, h);
      else if (v > ps - ie)
        r.moveTo(f + i * qr(u), h + i * gr(u)),
          r.arc(f, h, i, u, l, !c),
          n > ie &&
            (r.moveTo(f + n * qr(l), h + n * gr(l)), r.arc(f, h, n, l, u, c));
      else {
        var y = void 0,
          p = void 0,
          g = void 0,
          _ = void 0,
          m = void 0,
          w = void 0,
          b = void 0,
          S = void 0,
          D = void 0,
          T = void 0,
          x = void 0,
          M = void 0,
          P = void 0,
          A = void 0,
          L = void 0,
          I = void 0,
          R = i * qr(u),
          E = i * gr(u),
          G = n * qr(l),
          N = n * gr(l),
          z = v > ie;
        if (z) {
          var V = t.cornerRadius;
          V && ((e = i1(V)), (y = e[0]), (p = e[1]), (g = e[2]), (_ = e[3]));
          var at = dh(i - n) / 2;
          if (
            ((m = pe(at, g)),
            (w = pe(at, _)),
            (b = pe(at, y)),
            (S = pe(at, p)),
            (x = D = $i(m, w)),
            (M = T = $i(b, S)),
            (D > ie || T > ie) &&
              ((P = i * qr(l)),
              (A = i * gr(l)),
              (L = n * qr(u)),
              (I = n * gr(u)),
              v < Ld))
          ) {
            var tt = r1(R, E, L, I, P, A, G, N);
            if (tt) {
              var _t = R - tt[0],
                Ut = E - tt[1],
                Fe = P - tt[0],
                je = A - tt[1],
                tr =
                  1 /
                  gr(
                    e1(
                      (_t * Fe + Ut * je) /
                        (tn(_t * _t + Ut * Ut) * tn(Fe * Fe + je * je))
                    ) / 2
                  ),
                zr = tn(tt[0] * tt[0] + tt[1] * tt[1]);
              (x = pe(D, (i - zr) / (tr + 1))),
                (M = pe(T, (n - zr) / (tr - 1)));
            }
          }
        }
        if (!z) r.moveTo(f + R, h + E);
        else if (x > ie) {
          var Nt = pe(g, x),
            ct = pe(_, x),
            H = Kn(L, I, R, E, i, Nt, c),
            Y = Kn(P, A, G, N, i, ct, c);
          r.moveTo(f + H.cx + H.x0, h + H.cy + H.y0),
            x < D && Nt === ct
              ? r.arc(f + H.cx, h + H.cy, x, mt(H.y0, H.x0), mt(Y.y0, Y.x0), !c)
              : (Nt > 0 &&
                  r.arc(
                    f + H.cx,
                    h + H.cy,
                    Nt,
                    mt(H.y0, H.x0),
                    mt(H.y1, H.x1),
                    !c
                  ),
                r.arc(
                  f,
                  h,
                  i,
                  mt(H.cy + H.y1, H.cx + H.x1),
                  mt(Y.cy + Y.y1, Y.cx + Y.x1),
                  !c
                ),
                ct > 0 &&
                  r.arc(
                    f + Y.cx,
                    h + Y.cy,
                    ct,
                    mt(Y.y1, Y.x1),
                    mt(Y.y0, Y.x0),
                    !c
                  ));
        } else r.moveTo(f + R, h + E), r.arc(f, h, i, u, l, !c);
        if (!(n > ie) || !z) r.lineTo(f + G, h + N);
        else if (M > ie) {
          var Nt = pe(y, M),
            ct = pe(p, M),
            H = Kn(G, N, P, A, n, -ct, c),
            Y = Kn(R, E, L, I, n, -Nt, c);
          r.lineTo(f + H.cx + H.x0, h + H.cy + H.y0),
            M < T && Nt === ct
              ? r.arc(f + H.cx, h + H.cy, M, mt(H.y0, H.x0), mt(Y.y0, Y.x0), !c)
              : (ct > 0 &&
                  r.arc(
                    f + H.cx,
                    h + H.cy,
                    ct,
                    mt(H.y0, H.x0),
                    mt(H.y1, H.x1),
                    !c
                  ),
                r.arc(
                  f,
                  h,
                  n,
                  mt(H.cy + H.y1, H.cx + H.x1),
                  mt(Y.cy + Y.y1, Y.cx + Y.x1),
                  c
                ),
                Nt > 0 &&
                  r.arc(
                    f + Y.cx,
                    h + Y.cy,
                    Nt,
                    mt(Y.y1, Y.x1),
                    mt(Y.y0, Y.x0),
                    !c
                  ));
        } else r.lineTo(f + G, h + N), r.arc(f, h, n, l, u, c);
      }
      r.closePath();
    }
  }
}
var a1 = (function () {
    function r() {
      (this.cx = 0),
        (this.cy = 0),
        (this.r0 = 0),
        (this.r = 0),
        (this.startAngle = 0),
        (this.endAngle = Math.PI * 2),
        (this.clockwise = !0),
        (this.cornerRadius = 0);
    }
    return r;
  })(),
  Id = (function (r) {
    Q(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultShape = function () {
        return new a1();
      }),
      (t.prototype.buildPath = function (e, i) {
        n1(e, i);
      }),
      (t.prototype.isZeroArea = function () {
        return (
          this.shape.startAngle === this.shape.endAngle ||
          this.shape.r === this.shape.r0
        );
      }),
      t
    );
  })(it);
Id.prototype.type = "sector";
var Rd = Id,
  o1 = (function () {
    function r() {
      (this.cx = 0), (this.cy = 0), (this.r = 0), (this.r0 = 0);
    }
    return r;
  })(),
  Ed = (function (r) {
    Q(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultShape = function () {
        return new o1();
      }),
      (t.prototype.buildPath = function (e, i) {
        var n = i.cx,
          a = i.cy,
          o = Math.PI * 2;
        e.moveTo(n + i.r, a),
          e.arc(n, a, i.r, 0, o, !1),
          e.moveTo(n + i.r0, a),
          e.arc(n, a, i.r0, 0, o, !0);
      }),
      t
    );
  })(it);
Ed.prototype.type = "ring";
var Od = Ed;
function s1(r, t, e, i) {
  var n = [],
    a = [],
    o = [],
    s = [],
    u,
    l,
    f,
    h;
  if (i) {
    (f = [1 / 0, 1 / 0]), (h = [-1 / 0, -1 / 0]);
    for (var c = 0, v = r.length; c < v; c++) ri(f, f, r[c]), ii(h, h, r[c]);
    ri(f, f, i[0]), ii(h, h, i[1]);
  }
  for (var c = 0, v = r.length; c < v; c++) {
    var d = r[c];
    if (e) (u = r[c ? c - 1 : v - 1]), (l = r[(c + 1) % v]);
    else if (c === 0 || c === v - 1) {
      n.push(Py(r[c]));
      continue;
    } else (u = r[c - 1]), (l = r[c + 1]);
    Ay(a, l, u), Oo(a, a, t);
    var y = Ks(d, u),
      p = Ks(d, l),
      g = y + p;
    g !== 0 && ((y /= g), (p /= g)), Oo(o, a, -y), Oo(s, a, p);
    var _ = of([], d, o),
      m = of([], d, s);
    i && (ii(_, _, f), ri(_, _, h), ii(m, m, f), ri(m, m, h)),
      n.push(_),
      n.push(m);
  }
  return e && n.push(n.shift()), n;
}
function kd(r, t, e) {
  var i = t.smooth,
    n = t.points;
  if (n && n.length >= 2) {
    if (i) {
      var a = s1(n, i, e, t.smoothConstraint);
      r.moveTo(n[0][0], n[0][1]);
      for (var o = n.length, s = 0; s < (e ? o : o - 1); s++) {
        var u = a[s * 2],
          l = a[s * 2 + 1],
          f = n[(s + 1) % o];
        r.bezierCurveTo(u[0], u[1], l[0], l[1], f[0], f[1]);
      }
    } else {
      r.moveTo(n[0][0], n[0][1]);
      for (var s = 1, h = n.length; s < h; s++) r.lineTo(n[s][0], n[s][1]);
    }
    e && r.closePath();
  }
}
var u1 = (function () {
    function r() {
      (this.points = null), (this.smooth = 0), (this.smoothConstraint = null);
    }
    return r;
  })(),
  Bd = (function (r) {
    Q(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultShape = function () {
        return new u1();
      }),
      (t.prototype.buildPath = function (e, i) {
        kd(e, i, !0);
      }),
      t
    );
  })(it);
Bd.prototype.type = "polygon";
var Fd = Bd,
  l1 = (function () {
    function r() {
      (this.points = null),
        (this.percent = 1),
        (this.smooth = 0),
        (this.smoothConstraint = null);
    }
    return r;
  })(),
  Nd = (function (r) {
    Q(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultStyle = function () {
        return { stroke: "#000", fill: null };
      }),
      (t.prototype.getDefaultShape = function () {
        return new l1();
      }),
      (t.prototype.buildPath = function (e, i) {
        kd(e, i, !1);
      }),
      t
    );
  })(it);
Nd.prototype.type = "polyline";
var zd = Nd,
  f1 = {},
  h1 = (function () {
    function r() {
      (this.x1 = 0),
        (this.y1 = 0),
        (this.x2 = 0),
        (this.y2 = 0),
        (this.percent = 1);
    }
    return r;
  })(),
  Hd = (function (r) {
    Q(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultStyle = function () {
        return { stroke: "#000", fill: null };
      }),
      (t.prototype.getDefaultShape = function () {
        return new h1();
      }),
      (t.prototype.buildPath = function (e, i) {
        var n, a, o, s;
        if (this.subPixelOptimize) {
          var u = fd(f1, i, this.style);
          (n = u.x1), (a = u.y1), (o = u.x2), (s = u.y2);
        } else (n = i.x1), (a = i.y1), (o = i.x2), (s = i.y2);
        var l = i.percent;
        l !== 0 &&
          (e.moveTo(n, a),
          l < 1 && ((o = n * (1 - l) + o * l), (s = a * (1 - l) + s * l)),
          e.lineTo(o, s));
      }),
      (t.prototype.pointAt = function (e) {
        var i = this.shape;
        return [i.x1 * (1 - e) + i.x2 * e, i.y1 * (1 - e) + i.y2 * e];
      }),
      t
    );
  })(it);
Hd.prototype.type = "line";
var Ln = Hd,
  At = [],
  v1 = (function () {
    function r() {
      (this.x1 = 0),
        (this.y1 = 0),
        (this.x2 = 0),
        (this.y2 = 0),
        (this.cpx1 = 0),
        (this.cpy1 = 0),
        (this.percent = 1);
    }
    return r;
  })();
function ph(r, t, e) {
  var i = r.cpx2,
    n = r.cpy2;
  return i != null || n != null
    ? [
        (e ? gf : pt)(r.x1, r.cpx1, r.cpx2, r.x2, t),
        (e ? gf : pt)(r.y1, r.cpy1, r.cpy2, r.y2, t),
      ]
    : [
        (e ? yf : St)(r.x1, r.cpx1, r.x2, t),
        (e ? yf : St)(r.y1, r.cpy1, r.y2, t),
      ];
}
var Gd = (function (r) {
  Q(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return (
    (t.prototype.getDefaultStyle = function () {
      return { stroke: "#000", fill: null };
    }),
    (t.prototype.getDefaultShape = function () {
      return new v1();
    }),
    (t.prototype.buildPath = function (e, i) {
      var n = i.x1,
        a = i.y1,
        o = i.x2,
        s = i.y2,
        u = i.cpx1,
        l = i.cpy1,
        f = i.cpx2,
        h = i.cpy2,
        c = i.percent;
      c !== 0 &&
        (e.moveTo(n, a),
        f == null || h == null
          ? (c < 1 &&
              (Ha(n, u, o, c, At),
              (u = At[1]),
              (o = At[2]),
              Ha(a, l, s, c, At),
              (l = At[1]),
              (s = At[2])),
            e.quadraticCurveTo(u, l, o, s))
          : (c < 1 &&
              (za(n, u, f, o, c, At),
              (u = At[1]),
              (f = At[2]),
              (o = At[3]),
              za(a, l, h, s, c, At),
              (l = At[1]),
              (h = At[2]),
              (s = At[3])),
            e.bezierCurveTo(u, l, f, h, o, s)));
    }),
    (t.prototype.pointAt = function (e) {
      return ph(this.shape, e, !1);
    }),
    (t.prototype.tangentAt = function (e) {
      var i = ph(this.shape, e, !0);
      return Ry(i, i);
    }),
    t
  );
})(it);
Gd.prototype.type = "bezier-curve";
var Vd = Gd,
  c1 = (function () {
    function r() {
      (this.cx = 0),
        (this.cy = 0),
        (this.r = 0),
        (this.startAngle = 0),
        (this.endAngle = Math.PI * 2),
        (this.clockwise = !0);
    }
    return r;
  })(),
  Wd = (function (r) {
    Q(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultStyle = function () {
        return { stroke: "#000", fill: null };
      }),
      (t.prototype.getDefaultShape = function () {
        return new c1();
      }),
      (t.prototype.buildPath = function (e, i) {
        var n = i.cx,
          a = i.cy,
          o = Math.max(i.r, 0),
          s = i.startAngle,
          u = i.endAngle,
          l = i.clockwise,
          f = Math.cos(s),
          h = Math.sin(s);
        e.moveTo(f * o + n, h * o + a), e.arc(n, a, o, s, u, !l);
      }),
      t
    );
  })(it);
Wd.prototype.type = "arc";
var yl = Wd,
  d1 = (function (r) {
    Q(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = "compound"), e;
    }
    return (
      (t.prototype._updatePathDirty = function () {
        for (
          var e = this.shape.paths, i = this.shapeChanged(), n = 0;
          n < e.length;
          n++
        )
          i = i || e[n].shapeChanged();
        i && this.dirtyShape();
      }),
      (t.prototype.beforeBrush = function () {
        this._updatePathDirty();
        for (
          var e = this.shape.paths || [], i = this.getGlobalScale(), n = 0;
          n < e.length;
          n++
        )
          e[n].path || e[n].createPathProxy(),
            e[n].path.setScale(i[0], i[1], e[n].segmentIgnoreThreshold);
      }),
      (t.prototype.buildPath = function (e, i) {
        for (var n = i.paths || [], a = 0; a < n.length; a++)
          n[a].buildPath(e, n[a].shape, !0);
      }),
      (t.prototype.afterBrush = function () {
        for (var e = this.shape.paths || [], i = 0; i < e.length; i++)
          e[i].pathUpdated();
      }),
      (t.prototype.getBoundingRect = function () {
        return (
          this._updatePathDirty.call(this),
          it.prototype.getBoundingRect.call(this)
        );
      }),
      t
    );
  })(it),
  p1 = d1,
  g1 = (function () {
    function r(t) {
      this.colorStops = t || [];
    }
    return (
      (r.prototype.addColorStop = function (t, e) {
        this.colorStops.push({ offset: t, color: e });
      }),
      r
    );
  })(),
  Ud = g1,
  y1 = (function (r) {
    Q(t, r);
    function t(e, i, n, a, o, s) {
      var u = r.call(this, o) || this;
      return (
        (u.x = e == null ? 0 : e),
        (u.y = i == null ? 0 : i),
        (u.x2 = n == null ? 1 : n),
        (u.y2 = a == null ? 0 : a),
        (u.type = "linear"),
        (u.global = s || !1),
        u
      );
    }
    return t;
  })(Ud),
  _1 = y1,
  m1 = (function (r) {
    Q(t, r);
    function t(e, i, n, a, o) {
      var s = r.call(this, a) || this;
      return (
        (s.x = e == null ? 0.5 : e),
        (s.y = i == null ? 0.5 : i),
        (s.r = n == null ? 0.5 : n),
        (s.type = "radial"),
        (s.global = o || !1),
        s
      );
    }
    return t;
  })(Ud),
  w1 = m1,
  yr = [0, 0],
  _r = [0, 0],
  Qn = new J(),
  Jn = new J(),
  S1 = (function () {
    function r(t, e) {
      (this._corners = []), (this._axes = []), (this._origin = [0, 0]);
      for (var i = 0; i < 4; i++) this._corners[i] = new J();
      for (var i = 0; i < 2; i++) this._axes[i] = new J();
      t && this.fromBoundingRect(t, e);
    }
    return (
      (r.prototype.fromBoundingRect = function (t, e) {
        var i = this._corners,
          n = this._axes,
          a = t.x,
          o = t.y,
          s = a + t.width,
          u = o + t.height;
        if ((i[0].set(a, o), i[1].set(s, o), i[2].set(s, u), i[3].set(a, u), e))
          for (var l = 0; l < 4; l++) i[l].transform(e);
        J.sub(n[0], i[1], i[0]),
          J.sub(n[1], i[3], i[0]),
          n[0].normalize(),
          n[1].normalize();
        for (var l = 0; l < 2; l++) this._origin[l] = n[l].dot(i[0]);
      }),
      (r.prototype.intersect = function (t, e) {
        var i = !0,
          n = !e;
        return (
          Qn.set(1 / 0, 1 / 0),
          Jn.set(0, 0),
          (!this._intersectCheckOneSide(this, t, Qn, Jn, n, 1) &&
            ((i = !1), n)) ||
            (!this._intersectCheckOneSide(t, this, Qn, Jn, n, -1) &&
              ((i = !1), n)) ||
            n ||
            J.copy(e, i ? Qn : Jn),
          i
        );
      }),
      (r.prototype._intersectCheckOneSide = function (t, e, i, n, a, o) {
        for (var s = !0, u = 0; u < 2; u++) {
          var l = this._axes[u];
          if (
            (this._getProjMinMaxOnAxis(u, t._corners, yr),
            this._getProjMinMaxOnAxis(u, e._corners, _r),
            yr[1] < _r[0] || yr[0] > _r[1])
          ) {
            if (((s = !1), a)) return s;
            var f = Math.abs(_r[0] - yr[1]),
              h = Math.abs(yr[0] - _r[1]);
            Math.min(f, h) > n.len() &&
              (f < h ? J.scale(n, l, -f * o) : J.scale(n, l, h * o));
          } else if (i) {
            var f = Math.abs(_r[0] - yr[1]),
              h = Math.abs(yr[0] - _r[1]);
            Math.min(f, h) < i.len() &&
              (f < h ? J.scale(i, l, f * o) : J.scale(i, l, -h * o));
          }
        }
        return s;
      }),
      (r.prototype._getProjMinMaxOnAxis = function (t, e, i) {
        for (
          var n = this._axes[t],
            a = this._origin,
            o = e[0].dot(n) + a[t],
            s = o,
            u = o,
            l = 1;
          l < e.length;
          l++
        ) {
          var f = e[l].dot(n) + a[t];
          (s = Math.min(f, s)), (u = Math.max(f, u));
        }
        (i[0] = s), (i[1] = u);
      }),
      r
    );
  })(),
  Ya = S1,
  b1 = [],
  T1 = (function (r) {
    Q(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (
        (e.notClear = !0),
        (e.incremental = !0),
        (e._displayables = []),
        (e._temporaryDisplayables = []),
        (e._cursor = 0),
        e
      );
    }
    return (
      (t.prototype.traverse = function (e, i) {
        e.call(i, this);
      }),
      (t.prototype.useStyle = function () {
        this.style = {};
      }),
      (t.prototype.getCursor = function () {
        return this._cursor;
      }),
      (t.prototype.innerAfterBrush = function () {
        this._cursor = this._displayables.length;
      }),
      (t.prototype.clearDisplaybles = function () {
        (this._displayables = []),
          (this._temporaryDisplayables = []),
          (this._cursor = 0),
          this.markRedraw(),
          (this.notClear = !1);
      }),
      (t.prototype.clearTemporalDisplayables = function () {
        this._temporaryDisplayables = [];
      }),
      (t.prototype.addDisplayable = function (e, i) {
        i ? this._temporaryDisplayables.push(e) : this._displayables.push(e),
          this.markRedraw();
      }),
      (t.prototype.addDisplayables = function (e, i) {
        i = i || !1;
        for (var n = 0; n < e.length; n++) this.addDisplayable(e[n], i);
      }),
      (t.prototype.getDisplayables = function () {
        return this._displayables;
      }),
      (t.prototype.getTemporalDisplayables = function () {
        return this._temporaryDisplayables;
      }),
      (t.prototype.eachPendingDisplayable = function (e) {
        for (var i = this._cursor; i < this._displayables.length; i++)
          e && e(this._displayables[i]);
        for (var i = 0; i < this._temporaryDisplayables.length; i++)
          e && e(this._temporaryDisplayables[i]);
      }),
      (t.prototype.update = function () {
        this.updateTransform();
        for (var e = this._cursor; e < this._displayables.length; e++) {
          var i = this._displayables[e];
          (i.parent = this), i.update(), (i.parent = null);
        }
        for (var e = 0; e < this._temporaryDisplayables.length; e++) {
          var i = this._temporaryDisplayables[e];
          (i.parent = this), i.update(), (i.parent = null);
        }
      }),
      (t.prototype.getBoundingRect = function () {
        if (!this._rect) {
          for (
            var e = new j(1 / 0, 1 / 0, -1 / 0, -1 / 0), i = 0;
            i < this._displayables.length;
            i++
          ) {
            var n = this._displayables[i],
              a = n.getBoundingRect().clone();
            n.needLocalTransform() && a.applyTransform(n.getLocalTransform(b1)),
              e.union(a);
          }
          this._rect = e;
        }
        return this._rect;
      }),
      (t.prototype.contain = function (e, i) {
        var n = this.transformCoordToLocal(e, i),
          a = this.getBoundingRect();
        if (a.contain(n[0], n[1]))
          for (var o = 0; o < this._displayables.length; o++) {
            var s = this._displayables[o];
            if (s.contain(e, i)) return !0;
          }
        return !1;
      }),
      t
    );
  })(An),
  x1 = T1,
  C1 = yt();
function D1(r, t, e, i, n) {
  var a;
  if (t && t.ecModel) {
    var o = t.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = t && t.isAnimationEnabled(),
    u = r === "update";
  if (s) {
    var l = void 0,
      f = void 0,
      h = void 0;
    i
      ? ((l = K(i.duration, 200)), (f = K(i.easing, "cubicOut")), (h = 0))
      : ((l = t.getShallow(
          u ? "animationDurationUpdate" : "animationDuration"
        )),
        (f = t.getShallow(u ? "animationEasingUpdate" : "animationEasing")),
        (h = t.getShallow(u ? "animationDelayUpdate" : "animationDelay"))),
      a &&
        (a.duration != null && (l = a.duration),
        a.easing != null && (f = a.easing),
        a.delay != null && (h = a.delay)),
      q(h) && (h = h(e, n)),
      q(l) && (l = l(e));
    var c = { duration: l || 0, delay: h, easing: f };
    return c;
  } else return null;
}
function _l(r, t, e, i, n, a, o) {
  var s = !1,
    u;
  q(n)
    ? ((o = a), (a = n), (n = null))
    : F(n) &&
      ((a = n.cb),
      (o = n.during),
      (s = n.isFrom),
      (u = n.removeOpt),
      (n = n.dataIndex));
  var l = r === "leave";
  l || t.stopAnimation("leave");
  var f = D1(
    r,
    i,
    n,
    l ? u || {} : null,
    i && i.getAnimationDelayParams ? i.getAnimationDelayParams(t, n) : null
  );
  if (f && f.duration > 0) {
    var h = f.duration,
      c = f.delay,
      v = f.easing,
      d = {
        duration: h,
        delay: c || 0,
        easing: v,
        done: a,
        force: !!a || !!o,
        setToFinal: !l,
        scope: r,
        during: o,
      };
    s ? t.animateFrom(e, d) : t.animateTo(e, d);
  } else t.stopAnimation(), !s && t.attr(e), o && o(1), a && a();
}
function In(r, t, e, i, n, a) {
  _l("update", r, t, e, i, n, a);
}
function Yd(r, t, e, i, n, a) {
  _l("enter", r, t, e, i, n, a);
}
function en(r) {
  if (!r.__zr) return !0;
  for (var t = 0; t < r.animators.length; t++) {
    var e = r.animators[t];
    if (e.scope === "leave") return !0;
  }
  return !1;
}
function $d(r, t, e, i, n, a) {
  en(r) || _l("leave", r, t, e, i, n, a);
}
function gh(r, t, e, i) {
  r.removeTextContent(),
    r.removeTextGuideLine(),
    $d(r, { style: { opacity: 0 } }, t, e, i);
}
function M1(r, t, e) {
  function i() {
    r.parent && r.parent.remove(r);
  }
  r.isGroup
    ? r.traverse(function (n) {
        n.isGroup || gh(n, t, e, i);
      })
    : gh(r, t, e, i);
}
function RD(r) {
  C1(r).oldStyle = r.style;
}
var $a = Math.max,
  Xa = Math.min,
  xu = {};
function P1(r) {
  return it.extend(r);
}
var A1 = Qm;
function L1(r, t) {
  return A1(r, t);
}
function fe(r, t) {
  xu[r] = t;
}
function I1(r) {
  if (xu.hasOwnProperty(r)) return xu[r];
}
function ml(r, t, e, i) {
  var n = Km(r, t);
  return e && (i === "center" && (e = qd(e, n.getBoundingRect())), Zd(n, e)), n;
}
function Xd(r, t, e) {
  var i = new _i({
    style: { image: r, x: t.x, y: t.y, width: t.width, height: t.height },
    onload: function (n) {
      if (e === "center") {
        var a = { width: n.width, height: n.height };
        i.setStyle(qd(t, a));
      }
    },
  });
  return i;
}
function qd(r, t) {
  var e = t.width / t.height,
    i = r.height * e,
    n;
  i <= r.width ? (n = r.height) : ((i = r.width), (n = i / e));
  var a = r.x + r.width / 2,
    o = r.y + r.height / 2;
  return { x: a - i / 2, y: o - n / 2, width: i, height: n };
}
var R1 = Jm;
function Zd(r, t) {
  if (!!r.applyTransform) {
    var e = r.getBoundingRect(),
      i = e.calculateTransform(t);
    r.applyTransform(i);
  }
}
function E1(r) {
  return fd(r.shape, r.shape, r.style), r;
}
function O1(r) {
  return hd(r.shape, r.shape, r.style), r;
}
var k1 = Mr;
function B1(r, t) {
  for (var e = il([]); r && r !== t; )
    ui(e, r.getLocalTransform(), e), (r = r.parent);
  return e;
}
function wl(r, t, e) {
  return (
    t && !kt(t) && (t = al.getLocalTransform(t)),
    e && (t = Nc([], t)),
    me([], r, t)
  );
}
function F1(r, t, e) {
  var i =
      t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs((2 * t[4]) / t[0]),
    n =
      t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs((2 * t[4]) / t[2]),
    a = [
      r === "left" ? -i : r === "right" ? i : 0,
      r === "top" ? -n : r === "bottom" ? n : 0,
    ];
  return (
    (a = wl(a, t, e)),
    Math.abs(a[0]) > Math.abs(a[1])
      ? a[0] > 0
        ? "right"
        : "left"
      : a[1] > 0
      ? "bottom"
      : "top"
  );
}
function yh(r) {
  return !r.isGroup;
}
function N1(r) {
  return r.shape != null;
}
function z1(r, t, e) {
  if (!r || !t) return;
  function i(o) {
    var s = {};
    return (
      o.traverse(function (u) {
        yh(u) && u.anid && (s[u.anid] = u);
      }),
      s
    );
  }
  function n(o) {
    var s = { x: o.x, y: o.y, rotation: o.rotation };
    return N1(o) && (s.shape = O({}, o.shape)), s;
  }
  var a = i(r);
  t.traverse(function (o) {
    if (yh(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var u = n(o);
        o.attr(n(s)), In(o, u, e, lt(o).dataIndex);
      }
    }
  });
}
function H1(r, t) {
  return U(r, function (e) {
    var i = e[0];
    (i = $a(i, t.x)), (i = Xa(i, t.x + t.width));
    var n = e[1];
    return (n = $a(n, t.y)), (n = Xa(n, t.y + t.height)), [i, n];
  });
}
function G1(r, t) {
  var e = $a(r.x, t.x),
    i = Xa(r.x + r.width, t.x + t.width),
    n = $a(r.y, t.y),
    a = Xa(r.y + r.height, t.y + t.height);
  if (i >= e && a >= n) return { x: e, y: n, width: i - e, height: a - n };
}
function Sl(r, t, e) {
  var i = O({ rectHover: !0 }, t),
    n = (i.style = { strokeNoScale: !0 });
  if (((e = e || { x: -1, y: -1, width: 2, height: 2 }), r))
    return r.indexOf("image://") === 0
      ? ((n.image = r.slice(8)), nt(n, e), new _i(i))
      : ml(r.replace("path://", ""), i, e, "center");
}
function V1(r, t, e, i, n) {
  for (var a = 0, o = n[n.length - 1]; a < n.length; a++) {
    var s = n[a];
    if (Kd(r, t, e, i, s[0], s[1], o[0], o[1])) return !0;
    o = s;
  }
}
function Kd(r, t, e, i, n, a, o, s) {
  var u = e - r,
    l = i - t,
    f = o - n,
    h = s - a,
    c = gs(f, h, u, l);
  if (W1(c)) return !1;
  var v = r - n,
    d = t - a,
    y = gs(v, d, u, l) / c;
  if (y < 0 || y > 1) return !1;
  var p = gs(v, d, f, h) / c;
  return !(p < 0 || p > 1);
}
function gs(r, t, e, i) {
  return r * i - e * t;
}
function W1(r) {
  return r <= 1e-6 && r >= -1e-6;
}
function bl(r) {
  var t = r.itemTooltipOption,
    e = r.componentModel,
    i = r.itemName,
    n = B(t) ? { formatter: t } : t,
    a = e.mainType,
    o = e.componentIndex,
    s = { componentType: a, name: i, $vars: ["name"] };
  s[a + "Index"] = o;
  var u = r.formatterParamsExtra;
  u &&
    C(ft(u), function (f) {
      vi(s, f) || ((s[f] = u[f]), s.$vars.push(f));
    });
  var l = lt(r.el);
  (l.componentMainType = a),
    (l.componentIndex = o),
    (l.tooltipConfig = {
      name: i,
      option: nt({ content: i, formatterParams: s }, n),
    });
}
function _h(r, t) {
  var e;
  r.isGroup && (e = t(r)), e || r.traverse(t);
}
function Qd(r, t) {
  if (r)
    if (k(r)) for (var e = 0; e < r.length; e++) _h(r[e], t);
    else _h(r, t);
}
fe("circle", gl);
fe("ellipse", Ad);
fe("sector", Rd);
fe("ring", Od);
fe("polygon", Fd);
fe("polyline", zd);
fe("rect", Ot);
fe("line", Ln);
fe("bezierCurve", Vd);
fe("arc", yl);
var U1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        updateProps: In,
        initProps: Yd,
        removeElement: $d,
        removeElementWithFadeOut: M1,
        isElementRemoved: en,
        extendShape: P1,
        extendPath: L1,
        registerShape: fe,
        getShapeClass: I1,
        makePath: ml,
        makeImage: Xd,
        mergePath: R1,
        resizePath: Zd,
        subPixelOptimizeLine: E1,
        subPixelOptimizeRect: O1,
        subPixelOptimize: k1,
        getTransform: B1,
        applyTransform: wl,
        transformDirection: F1,
        groupTransition: z1,
        clipPointsByRect: H1,
        clipRectByRect: G1,
        createIcon: Sl,
        linePolygonIntersect: V1,
        lineLineIntersect: Kd,
        setTooltipConfig: bl,
        traverseElements: Qd,
        Group: be,
        Image: _i,
        Text: Bt,
        Circle: gl,
        Ellipse: Ad,
        Sector: Rd,
        Ring: Od,
        Polygon: Fd,
        Polyline: zd,
        Rect: Ot,
        Line: Ln,
        BezierCurve: Vd,
        Arc: yl,
        IncrementalDisplayable: x1,
        CompoundPath: p1,
        LinearGradient: _1,
        RadialGradient: w1,
        BoundingRect: j,
        OrientedBoundingRect: Ya,
        Point: J,
        Path: it,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  yo = {};
function Jd(r, t) {
  for (var e = 0; e < Qe.length; e++) {
    var i = Qe[e],
      n = t[i],
      a = r.ensureState(i);
    (a.style = a.style || {}), (a.style.text = n);
  }
  var o = r.currentStates.slice();
  r.clearStates(!0), r.setStyle({ text: t.normal }), r.useStates(o, !0);
}
function Cu(r, t, e) {
  var i = r.labelFetcher,
    n = r.labelDataIndex,
    a = r.labelDimIndex,
    o = t.normal,
    s;
  i &&
    (s = i.getFormattedLabel(
      n,
      "normal",
      null,
      a,
      o && o.get("formatter"),
      e != null ? { interpolatedValue: e } : null
    )),
    s == null &&
      (s = q(r.defaultText) ? r.defaultText(n, r, e) : r.defaultText);
  for (var u = { normal: s }, l = 0; l < Qe.length; l++) {
    var f = Qe[l],
      h = t[f];
    u[f] = K(
      i ? i.getFormattedLabel(n, f, null, a, h && h.get("formatter")) : null,
      s
    );
  }
  return u;
}
function Y1(r, t, e, i) {
  e = e || yo;
  for (var n = r instanceof Bt, a = !1, o = 0; o < eh.length; o++) {
    var s = t[eh[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var u = n ? r : r.getTextContent();
  if (a) {
    n ||
      (u || ((u = new Bt()), r.setTextContent(u)),
      r.stateProxy && (u.stateProxy = r.stateProxy));
    var l = Cu(e, t),
      f = t.normal,
      h = !!f.getShallow("show"),
      c = Je(f, i && i.normal, e, !1, !n);
    (c.text = l.normal), n || r.setTextConfig(mh(f, e, !1));
    for (var o = 0; o < Qe.length; o++) {
      var v = Qe[o],
        s = t[v];
      if (s) {
        var d = u.ensureState(v),
          y = !!K(s.getShallow("show"), h);
        if (
          (y !== h && (d.ignore = !y),
          (d.style = Je(s, i && i[v], e, !0, !n)),
          (d.style.text = l[v]),
          !n)
        ) {
          var p = r.ensureState(v);
          p.textConfig = mh(s, e, !0);
        }
      }
    }
    (u.silent = !!f.getShallow("silent")),
      u.style.x != null && (c.x = u.style.x),
      u.style.y != null && (c.y = u.style.y),
      (u.ignore = !h),
      u.useStyle(c),
      u.dirty(),
      e.enableTextSetter &&
        (Tl(u).setLabelText = function (g) {
          var _ = Cu(e, t, g);
          Jd(u, _);
        });
  } else u && (u.ignore = !0);
  r.dirty();
}
function ED(r, t) {
  t = t || "label";
  for (var e = { normal: r.getModel(t) }, i = 0; i < Qe.length; i++) {
    var n = Qe[i];
    e[n] = r.getModel([n, t]);
  }
  return e;
}
function Je(r, t, e, i, n) {
  var a = {};
  return $1(a, r, e, i, n), t && O(a, t), a;
}
function mh(r, t, e) {
  t = t || {};
  var i = {},
    n,
    a = r.getShallow("rotate"),
    o = K(r.getShallow("distance"), e ? null : 5),
    s = r.getShallow("offset");
  return (
    (n = r.getShallow("position") || (e ? null : "inside")),
    n === "outside" && (n = t.defaultOutsidePosition || "top"),
    n != null && (i.position = n),
    s != null && (i.offset = s),
    a != null && ((a *= Math.PI / 180), (i.rotation = a)),
    o != null && (i.distance = o),
    (i.outsideFill =
      r.get("color") === "inherit" ? t.inheritColor || null : "auto"),
    i
  );
}
function $1(r, t, e, i, n) {
  e = e || yo;
  var a = t.ecModel,
    o = a && a.option.textStyle,
    s = X1(t),
    u;
  if (s) {
    u = {};
    for (var l in s)
      if (s.hasOwnProperty(l)) {
        var f = t.getModel(["rich", l]);
        Th((u[l] = {}), f, o, e, i, n, !1, !0);
      }
  }
  u && (r.rich = u);
  var h = t.get("overflow");
  h && (r.overflow = h);
  var c = t.get("minMargin");
  c != null && (r.margin = c), Th(r, t, o, e, i, n, !0, !1);
}
function X1(r) {
  for (var t; r && r !== r.ecModel; ) {
    var e = (r.option || yo).rich;
    if (e) {
      t = t || {};
      for (var i = ft(e), n = 0; n < i.length; n++) {
        var a = i[n];
        t[a] = 1;
      }
    }
    r = r.parentModel;
  }
  return t;
}
var wh = [
    "fontStyle",
    "fontWeight",
    "fontSize",
    "fontFamily",
    "textShadowColor",
    "textShadowBlur",
    "textShadowOffsetX",
    "textShadowOffsetY",
  ],
  Sh = ["align", "lineHeight", "width", "height", "tag", "verticalAlign"],
  bh = [
    "padding",
    "borderWidth",
    "borderRadius",
    "borderDashOffset",
    "backgroundColor",
    "borderColor",
    "shadowColor",
    "shadowBlur",
    "shadowOffsetX",
    "shadowOffsetY",
  ];
function Th(r, t, e, i, n, a, o, s) {
  e = (!n && e) || yo;
  var u = i && i.inheritColor,
    l = t.getShallow("color"),
    f = t.getShallow("textBorderColor"),
    h = K(t.getShallow("opacity"), e.opacity);
  (l === "inherit" || l === "auto") && (u ? (l = u) : (l = null)),
    (f === "inherit" || f === "auto") && (u ? (f = u) : (f = null)),
    a || ((l = l || e.color), (f = f || e.textBorderColor)),
    l != null && (r.fill = l),
    f != null && (r.stroke = f);
  var c = K(t.getShallow("textBorderWidth"), e.textBorderWidth);
  c != null && (r.lineWidth = c);
  var v = K(t.getShallow("textBorderType"), e.textBorderType);
  v != null && (r.lineDash = v);
  var d = K(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
  d != null && (r.lineDashOffset = d),
    !n && h == null && !s && (h = i && i.defaultOpacity),
    h != null && (r.opacity = h),
    !n && !a && r.fill == null && i.inheritColor && (r.fill = i.inheritColor);
  for (var y = 0; y < wh.length; y++) {
    var p = wh[y],
      g = K(t.getShallow(p), e[p]);
    g != null && (r[p] = g);
  }
  for (var y = 0; y < Sh.length; y++) {
    var p = Sh[y],
      g = t.getShallow(p);
    g != null && (r[p] = g);
  }
  if (r.verticalAlign == null) {
    var _ = t.getShallow("baseline");
    _ != null && (r.verticalAlign = _);
  }
  if (!o || !i.disableBox) {
    for (var y = 0; y < bh.length; y++) {
      var p = bh[y],
        g = t.getShallow(p);
      g != null && (r[p] = g);
    }
    var m = t.getShallow("borderType");
    m != null && (r.borderDash = m),
      (r.backgroundColor === "auto" || r.backgroundColor === "inherit") &&
        u &&
        (r.backgroundColor = u),
      (r.borderColor === "auto" || r.borderColor === "inherit") &&
        u &&
        (r.borderColor = u);
  }
}
function q1(r, t) {
  var e = t && t.getModel("textStyle");
  return ye(
    [
      r.fontStyle || (e && e.getShallow("fontStyle")) || "",
      r.fontWeight || (e && e.getShallow("fontWeight")) || "",
      (r.fontSize || (e && e.getShallow("fontSize")) || 12) + "px",
      r.fontFamily || (e && e.getShallow("fontFamily")) || "sans-serif",
    ].join(" ")
  );
}
var Tl = yt();
function OD(r, t, e, i) {
  if (!!r) {
    var n = Tl(r);
    (n.prevValue = n.value), (n.value = e);
    var a = t.normal;
    (n.valueAnimation = a.get("valueAnimation")),
      n.valueAnimation &&
        ((n.precision = a.get("precision")),
        (n.defaultInterpolatedText = i),
        (n.statesModels = t));
  }
}
function kD(r, t, e, i, n) {
  var a = Tl(r);
  if (!a.valueAnimation || a.prevValue === a.value) return;
  var o = a.defaultInterpolatedText,
    s = K(a.interpolatedValue, a.prevValue),
    u = a.value;
  function l(f) {
    var h = S0(e, a.precision, s, u, f);
    a.interpolatedValue = f === 1 ? null : h;
    var c = Cu(
      { labelDataIndex: t, labelFetcher: n, defaultText: o ? o(h) : h + "" },
      a.statesModels,
      h
    );
    Jd(r, c);
  }
  (r.percent = 0),
    (a.prevValue == null ? Yd : In)(r, { percent: 1 }, i, t, null, l);
}
var Z1 = ["textStyle", "color"],
  ys = [
    "fontStyle",
    "fontWeight",
    "fontSize",
    "fontFamily",
    "padding",
    "lineHeight",
    "rich",
    "width",
    "height",
    "overflow",
  ],
  _s = new Bt(),
  K1 = (function () {
    function r() {}
    return (
      (r.prototype.getTextColor = function (t) {
        var e = this.ecModel;
        return this.getShallow("color") || (!t && e ? e.get(Z1) : null);
      }),
      (r.prototype.getFont = function () {
        return q1(
          {
            fontStyle: this.getShallow("fontStyle"),
            fontWeight: this.getShallow("fontWeight"),
            fontSize: this.getShallow("fontSize"),
            fontFamily: this.getShallow("fontFamily"),
          },
          this.ecModel
        );
      }),
      (r.prototype.getTextRect = function (t) {
        for (
          var e = {
              text: t,
              verticalAlign:
                this.getShallow("verticalAlign") || this.getShallow("baseline"),
            },
            i = 0;
          i < ys.length;
          i++
        )
          e[ys[i]] = this.getShallow(ys[i]);
        return _s.useStyle(e), _s.update(), _s.getBoundingRect();
      }),
      r
    );
  })(),
  Q1 = K1,
  jd = [
    ["lineWidth", "width"],
    ["stroke", "color"],
    ["opacity"],
    ["shadowBlur"],
    ["shadowOffsetX"],
    ["shadowOffsetY"],
    ["shadowColor"],
    ["lineDash", "type"],
    ["lineDashOffset", "dashOffset"],
    ["lineCap", "cap"],
    ["lineJoin", "join"],
    ["miterLimit"],
  ],
  J1 = dn(jd),
  j1 = (function () {
    function r() {}
    return (
      (r.prototype.getLineStyle = function (t) {
        return J1(this, t);
      }),
      r
    );
  })(),
  tp = [
    ["fill", "color"],
    ["stroke", "borderColor"],
    ["lineWidth", "borderWidth"],
    ["opacity"],
    ["shadowBlur"],
    ["shadowOffsetX"],
    ["shadowOffsetY"],
    ["shadowColor"],
    ["lineDash", "borderType"],
    ["lineDashOffset", "borderDashOffset"],
    ["lineCap", "borderCap"],
    ["lineJoin", "borderJoin"],
    ["miterLimit", "borderMiterLimit"],
  ],
  tw = dn(tp),
  ew = (function () {
    function r() {}
    return (
      (r.prototype.getItemStyle = function (t, e) {
        return tw(this, t, e);
      }),
      r
    );
  })(),
  Fr = (function () {
    function r(t, e, i) {
      (this.parentModel = e), (this.ecModel = i), (this.option = t);
    }
    return (
      (r.prototype.init = function (t, e, i) {
        for (var n = [], a = 3; a < arguments.length; a++)
          n[a - 3] = arguments[a];
      }),
      (r.prototype.mergeOption = function (t, e) {
        ut(this.option, t, !0);
      }),
      (r.prototype.get = function (t, e) {
        return t == null
          ? this.option
          : this._doGet(this.parsePath(t), !e && this.parentModel);
      }),
      (r.prototype.getShallow = function (t, e) {
        var i = this.option,
          n = i == null ? i : i[t];
        if (n == null && !e) {
          var a = this.parentModel;
          a && (n = a.getShallow(t));
        }
        return n;
      }),
      (r.prototype.getModel = function (t, e) {
        var i = t != null,
          n = i ? this.parsePath(t) : null,
          a = i ? this._doGet(n) : this.option;
        return (
          (e =
            e ||
            (this.parentModel &&
              this.parentModel.getModel(this.resolveParentPath(n)))),
          new r(a, e, this.ecModel)
        );
      }),
      (r.prototype.isEmpty = function () {
        return this.option == null;
      }),
      (r.prototype.restoreData = function () {}),
      (r.prototype.clone = function () {
        var t = this.constructor;
        return new t(X(this.option));
      }),
      (r.prototype.parsePath = function (t) {
        return typeof t == "string" ? t.split(".") : t;
      }),
      (r.prototype.resolveParentPath = function (t) {
        return t;
      }),
      (r.prototype.isAnimationEnabled = function () {
        if (!W.node && this.option) {
          if (this.option.animation != null) return !!this.option.animation;
          if (this.parentModel) return this.parentModel.isAnimationEnabled();
        }
      }),
      (r.prototype._doGet = function (t, e) {
        var i = this.option;
        if (!t) return i;
        for (
          var n = 0;
          n < t.length &&
          !(
            !!t[n] &&
            ((i = i && typeof i == "object" ? i[t[n]] : null), i == null)
          );
          n++
        );
        return (
          i == null &&
            e &&
            (i = e._doGet(this.resolveParentPath(t), e.parentModel)),
          i
        );
      }),
      r
    );
  })();
hl(Fr);
M0(Fr);
Oe(Fr, j1);
Oe(Fr, ew);
Oe(Fr, R0);
Oe(Fr, Q1);
var Tt = Fr,
  rw = Math.round(Math.random() * 10);
function _o(r) {
  return [r || "", rw++].join("_");
}
function iw(r) {
  var t = {};
  (r.registerSubTypeDefaulter = function (e, i) {
    var n = _e(e);
    t[n.main] = i;
  }),
    (r.determineSubType = function (e, i) {
      var n = i.type;
      if (!n) {
        var a = _e(e).main;
        r.hasSubTypes(e) && t[a] && (n = t[a](i));
      }
      return n;
    });
}
function nw(r, t) {
  r.topologicalTravel = function (a, o, s, u) {
    if (!a.length) return;
    var l = e(o),
      f = l.graph,
      h = l.noEntryList,
      c = {};
    for (
      C(a, function (_) {
        c[_] = !0;
      });
      h.length;

    ) {
      var v = h.pop(),
        d = f[v],
        y = !!c[v];
      y && (s.call(u, v, d.originalDeps.slice()), delete c[v]),
        C(d.successor, y ? g : p);
    }
    C(c, function () {
      var _ = "";
      throw new Error(_);
    });
    function p(_) {
      f[_].entryCount--, f[_].entryCount === 0 && h.push(_);
    }
    function g(_) {
      (c[_] = !0), p(_);
    }
  };
  function e(a) {
    var o = {},
      s = [];
    return (
      C(a, function (u) {
        var l = i(o, u),
          f = (l.originalDeps = t(u)),
          h = n(f, a);
        (l.entryCount = h.length),
          l.entryCount === 0 && s.push(u),
          C(h, function (c) {
            et(l.predecessor, c) < 0 && l.predecessor.push(c);
            var v = i(o, c);
            et(v.successor, c) < 0 && v.successor.push(u);
          });
      }),
      { graph: o, noEntryList: s }
    );
  }
  function i(a, o) {
    return a[o] || (a[o] = { predecessor: [], successor: [] }), a[o];
  }
  function n(a, o) {
    var s = [];
    return (
      C(a, function (u) {
        et(o, u) >= 0 && s.push(u);
      }),
      s
    );
  }
}
function aw(r, t) {
  return ut(ut({}, r, !0), t, !0);
}
var ow = {
    time: {
      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      monthAbbr: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      dayOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    legend: { selector: { all: "All", inverse: "Inv" } },
    toolbox: {
      brush: {
        title: {
          rect: "Box Select",
          polygon: "Lasso Select",
          lineX: "Horizontally Select",
          lineY: "Vertically Select",
          keep: "Keep Selections",
          clear: "Clear Selections",
        },
      },
      dataView: { title: "Data View", lang: ["Data View", "Close", "Refresh"] },
      dataZoom: { title: { zoom: "Zoom", back: "Zoom Reset" } },
      magicType: {
        title: {
          line: "Switch to Line Chart",
          bar: "Switch to Bar Chart",
          stack: "Stack",
          tiled: "Tile",
        },
      },
      restore: { title: "Restore" },
      saveAsImage: {
        title: "Save as Image",
        lang: ["Right Click to Save Image"],
      },
    },
    series: {
      typeNames: {
        pie: "Pie chart",
        bar: "Bar chart",
        line: "Line chart",
        scatter: "Scatter plot",
        effectScatter: "Ripple scatter plot",
        radar: "Radar chart",
        tree: "Tree",
        treemap: "Treemap",
        boxplot: "Boxplot",
        candlestick: "Candlestick",
        k: "K line chart",
        heatmap: "Heat map",
        map: "Map",
        parallel: "Parallel coordinate map",
        lines: "Line graph",
        graph: "Relationship graph",
        sankey: "Sankey diagram",
        funnel: "Funnel chart",
        gauge: "Gauge",
        pictorialBar: "Pictorial bar",
        themeRiver: "Theme River Map",
        sunburst: "Sunburst",
      },
    },
    aria: {
      general: {
        withTitle: 'This is a chart about "{title}"',
        withoutTitle: "This is a chart",
      },
      series: {
        single: {
          prefix: "",
          withName: " with type {seriesType} named {seriesName}.",
          withoutName: " with type {seriesType}.",
        },
        multiple: {
          prefix: ". It consists of {seriesCount} series count.",
          withName:
            " The {seriesId} series is a {seriesType} representing {seriesName}.",
          withoutName: " The {seriesId} series is a {seriesType}.",
          separator: { middle: "", end: "" },
        },
      },
      data: {
        allData: "The data is as follows: ",
        partialData: "The first {displayCnt} items are: ",
        withName: "the data for {name} is {value}",
        withoutName: "{value}",
        separator: { middle: ", ", end: ". " },
      },
    },
  },
  sw = {
    time: {
      month: [
        "\u4E00\u6708",
        "\u4E8C\u6708",
        "\u4E09\u6708",
        "\u56DB\u6708",
        "\u4E94\u6708",
        "\u516D\u6708",
        "\u4E03\u6708",
        "\u516B\u6708",
        "\u4E5D\u6708",
        "\u5341\u6708",
        "\u5341\u4E00\u6708",
        "\u5341\u4E8C\u6708",
      ],
      monthAbbr: [
        "1\u6708",
        "2\u6708",
        "3\u6708",
        "4\u6708",
        "5\u6708",
        "6\u6708",
        "7\u6708",
        "8\u6708",
        "9\u6708",
        "10\u6708",
        "11\u6708",
        "12\u6708",
      ],
      dayOfWeek: [
        "\u661F\u671F\u65E5",
        "\u661F\u671F\u4E00",
        "\u661F\u671F\u4E8C",
        "\u661F\u671F\u4E09",
        "\u661F\u671F\u56DB",
        "\u661F\u671F\u4E94",
        "\u661F\u671F\u516D",
      ],
      dayOfWeekAbbr: [
        "\u65E5",
        "\u4E00",
        "\u4E8C",
        "\u4E09",
        "\u56DB",
        "\u4E94",
        "\u516D",
      ],
    },
    legend: { selector: { all: "\u5168\u9009", inverse: "\u53CD\u9009" } },
    toolbox: {
      brush: {
        title: {
          rect: "\u77E9\u5F62\u9009\u62E9",
          polygon: "\u5708\u9009",
          lineX: "\u6A2A\u5411\u9009\u62E9",
          lineY: "\u7EB5\u5411\u9009\u62E9",
          keep: "\u4FDD\u6301\u9009\u62E9",
          clear: "\u6E05\u9664\u9009\u62E9",
        },
      },
      dataView: {
        title: "\u6570\u636E\u89C6\u56FE",
        lang: ["\u6570\u636E\u89C6\u56FE", "\u5173\u95ED", "\u5237\u65B0"],
      },
      dataZoom: {
        title: {
          zoom: "\u533A\u57DF\u7F29\u653E",
          back: "\u533A\u57DF\u7F29\u653E\u8FD8\u539F",
        },
      },
      magicType: {
        title: {
          line: "\u5207\u6362\u4E3A\u6298\u7EBF\u56FE",
          bar: "\u5207\u6362\u4E3A\u67F1\u72B6\u56FE",
          stack: "\u5207\u6362\u4E3A\u5806\u53E0",
          tiled: "\u5207\u6362\u4E3A\u5E73\u94FA",
        },
      },
      restore: { title: "\u8FD8\u539F" },
      saveAsImage: {
        title: "\u4FDD\u5B58\u4E3A\u56FE\u7247",
        lang: ["\u53F3\u952E\u53E6\u5B58\u4E3A\u56FE\u7247"],
      },
    },
    series: {
      typeNames: {
        pie: "\u997C\u56FE",
        bar: "\u67F1\u72B6\u56FE",
        line: "\u6298\u7EBF\u56FE",
        scatter: "\u6563\u70B9\u56FE",
        effectScatter: "\u6D9F\u6F2A\u6563\u70B9\u56FE",
        radar: "\u96F7\u8FBE\u56FE",
        tree: "\u6811\u56FE",
        treemap: "\u77E9\u5F62\u6811\u56FE",
        boxplot: "\u7BB1\u578B\u56FE",
        candlestick: "K\u7EBF\u56FE",
        k: "K\u7EBF\u56FE",
        heatmap: "\u70ED\u529B\u56FE",
        map: "\u5730\u56FE",
        parallel: "\u5E73\u884C\u5750\u6807\u56FE",
        lines: "\u7EBF\u56FE",
        graph: "\u5173\u7CFB\u56FE",
        sankey: "\u6851\u57FA\u56FE",
        funnel: "\u6F0F\u6597\u56FE",
        gauge: "\u4EEA\u8868\u76D8\u56FE",
        pictorialBar: "\u8C61\u5F62\u67F1\u56FE",
        themeRiver: "\u4E3B\u9898\u6CB3\u6D41\u56FE",
        sunburst: "\u65ED\u65E5\u56FE",
      },
    },
    aria: {
      general: {
        withTitle:
          "\u8FD9\u662F\u4E00\u4E2A\u5173\u4E8E\u201C{title}\u201D\u7684\u56FE\u8868\u3002",
        withoutTitle: "\u8FD9\u662F\u4E00\u4E2A\u56FE\u8868\uFF0C",
      },
      series: {
        single: {
          prefix: "",
          withName:
            "\u56FE\u8868\u7C7B\u578B\u662F{seriesType}\uFF0C\u8868\u793A{seriesName}\u3002",
          withoutName: "\u56FE\u8868\u7C7B\u578B\u662F{seriesType}\u3002",
        },
        multiple: {
          prefix:
            "\u5B83\u7531{seriesCount}\u4E2A\u56FE\u8868\u7CFB\u5217\u7EC4\u6210\u3002",
          withName:
            "\u7B2C{seriesId}\u4E2A\u7CFB\u5217\u662F\u4E00\u4E2A\u8868\u793A{seriesName}\u7684{seriesType}\uFF0C",
          withoutName:
            "\u7B2C{seriesId}\u4E2A\u7CFB\u5217\u662F\u4E00\u4E2A{seriesType}\uFF0C",
          separator: { middle: "\uFF1B", end: "\u3002" },
        },
      },
      data: {
        allData: "\u5176\u6570\u636E\u662F\u2014\u2014",
        partialData:
          "\u5176\u4E2D\uFF0C\u524D{displayCnt}\u9879\u662F\u2014\u2014",
        withName: "{name}\u7684\u6570\u636E\u662F{value}",
        withoutName: "{value}",
        separator: { middle: "\uFF0C", end: "" },
      },
    },
  },
  qa = "ZH",
  xl = "EN",
  pn = xl,
  Pa = {},
  Cl = {},
  ep = W.domSupported
    ? (function () {
        var r = (
          document.documentElement.lang ||
          navigator.language ||
          navigator.browserLanguage
        ).toUpperCase();
        return r.indexOf(qa) > -1 ? qa : pn;
      })()
    : pn;
function rp(r, t) {
  (r = r.toUpperCase()), (Cl[r] = new Tt(t)), (Pa[r] = t);
}
function uw(r) {
  if (B(r)) {
    var t = Pa[r.toUpperCase()] || {};
    return r === qa || r === xl ? X(t) : ut(X(t), X(Pa[pn]), !1);
  } else return ut(X(r), X(Pa[pn]), !1);
}
function lw(r) {
  return Cl[r];
}
function fw() {
  return Cl[pn];
}
rp(xl, ow);
rp(qa, sw);
var Dl = 1e3,
  Ml = Dl * 60,
  rn = Ml * 60,
  ee = rn * 24,
  xh = ee * 365,
  Xi = {
    year: "{yyyy}",
    month: "{MMM}",
    day: "{d}",
    hour: "{HH}:{mm}",
    minute: "{HH}:{mm}",
    second: "{HH}:{mm}:{ss}",
    millisecond: "{HH}:{mm}:{ss} {SSS}",
    none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}",
  },
  jn = "{yyyy}-{MM}-{dd}",
  Ch = {
    year: "{yyyy}",
    month: "{yyyy}-{MM}",
    day: jn,
    hour: jn + " " + Xi.hour,
    minute: jn + " " + Xi.minute,
    second: jn + " " + Xi.second,
    millisecond: Xi.none,
  },
  ms = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  ip = [
    "year",
    "half-year",
    "quarter",
    "month",
    "week",
    "half-week",
    "day",
    "half-day",
    "quarter-day",
    "hour",
    "minute",
    "second",
    "millisecond",
  ];
function mr(r, t) {
  return (r += ""), "0000".substr(0, t - r.length) + r;
}
function li(r) {
  switch (r) {
    case "half-year":
    case "quarter":
      return "month";
    case "week":
    case "half-week":
      return "day";
    case "half-day":
    case "quarter-day":
      return "hour";
    default:
      return r;
  }
}
function hw(r) {
  return r === li(r);
}
function vw(r) {
  switch (r) {
    case "year":
    case "month":
      return "day";
    case "millisecond":
      return "millisecond";
    default:
      return "second";
  }
}
function mo(r, t, e, i) {
  var n = Re(r),
    a = n[Pl(e)](),
    o = n[fi(e)]() + 1,
    s = Math.floor((o - 1) / 3) + 1,
    u = n[wo(e)](),
    l = n["get" + (e ? "UTC" : "") + "Day"](),
    f = n[gn(e)](),
    h = ((f - 1) % 12) + 1,
    c = n[So(e)](),
    v = n[bo(e)](),
    d = n[To(e)](),
    y = i instanceof Tt ? i : lw(i || ep) || fw(),
    p = y.getModel("time"),
    g = p.get("month"),
    _ = p.get("monthAbbr"),
    m = p.get("dayOfWeek"),
    w = p.get("dayOfWeekAbbr");
  return (t || "")
    .replace(/{yyyy}/g, a + "")
    .replace(/{yy}/g, (a % 100) + "")
    .replace(/{Q}/g, s + "")
    .replace(/{MMMM}/g, g[o - 1])
    .replace(/{MMM}/g, _[o - 1])
    .replace(/{MM}/g, mr(o, 2))
    .replace(/{M}/g, o + "")
    .replace(/{dd}/g, mr(u, 2))
    .replace(/{d}/g, u + "")
    .replace(/{eeee}/g, m[l])
    .replace(/{ee}/g, w[l])
    .replace(/{e}/g, l + "")
    .replace(/{HH}/g, mr(f, 2))
    .replace(/{H}/g, f + "")
    .replace(/{hh}/g, mr(h + "", 2))
    .replace(/{h}/g, h + "")
    .replace(/{mm}/g, mr(c, 2))
    .replace(/{m}/g, c + "")
    .replace(/{ss}/g, mr(v, 2))
    .replace(/{s}/g, v + "")
    .replace(/{SSS}/g, mr(d, 3))
    .replace(/{S}/g, d + "");
}
function cw(r, t, e, i, n) {
  var a = null;
  if (B(e)) a = e;
  else if (q(e)) a = e(r.value, t, { level: r.level });
  else {
    var o = O({}, Xi);
    if (r.level > 0)
      for (var s = 0; s < ms.length; ++s)
        o[ms[s]] = "{primary|" + o[ms[s]] + "}";
    var u = e ? (e.inherit === !1 ? e : nt(e, o)) : o,
      l = np(r.value, n);
    if (u[l]) a = u[l];
    else if (u.inherit) {
      for (var f = ip.indexOf(l), s = f - 1; s >= 0; --s)
        if (u[l]) {
          a = u[l];
          break;
        }
      a = a || o.none;
    }
    if (k(a)) {
      var h = r.level == null ? 0 : r.level >= 0 ? r.level : a.length + r.level;
      (h = Math.min(h, a.length - 1)), (a = a[h]);
    }
  }
  return mo(new Date(r.value), a, n, i);
}
function np(r, t) {
  var e = Re(r),
    i = e[fi(t)]() + 1,
    n = e[wo(t)](),
    a = e[gn(t)](),
    o = e[So(t)](),
    s = e[bo(t)](),
    u = e[To(t)](),
    l = u === 0,
    f = l && s === 0,
    h = f && o === 0,
    c = h && a === 0,
    v = c && n === 1,
    d = v && i === 1;
  return d
    ? "year"
    : v
    ? "month"
    : c
    ? "day"
    : h
    ? "hour"
    : f
    ? "minute"
    : l
    ? "second"
    : "millisecond";
}
function Dh(r, t, e) {
  var i = ht(r) ? Re(r) : r;
  switch (((t = t || np(r, e)), t)) {
    case "year":
      return i[Pl(e)]();
    case "half-year":
      return i[fi(e)]() >= 6 ? 1 : 0;
    case "quarter":
      return Math.floor((i[fi(e)]() + 1) / 4);
    case "month":
      return i[fi(e)]();
    case "day":
      return i[wo(e)]();
    case "half-day":
      return i[gn(e)]() / 24;
    case "hour":
      return i[gn(e)]();
    case "minute":
      return i[So(e)]();
    case "second":
      return i[bo(e)]();
    case "millisecond":
      return i[To(e)]();
  }
}
function Pl(r) {
  return r ? "getUTCFullYear" : "getFullYear";
}
function fi(r) {
  return r ? "getUTCMonth" : "getMonth";
}
function wo(r) {
  return r ? "getUTCDate" : "getDate";
}
function gn(r) {
  return r ? "getUTCHours" : "getHours";
}
function So(r) {
  return r ? "getUTCMinutes" : "getMinutes";
}
function bo(r) {
  return r ? "getUTCSeconds" : "getSeconds";
}
function To(r) {
  return r ? "getUTCMilliseconds" : "getMilliseconds";
}
function dw(r) {
  return r ? "setUTCFullYear" : "setFullYear";
}
function ap(r) {
  return r ? "setUTCMonth" : "setMonth";
}
function op(r) {
  return r ? "setUTCDate" : "setDate";
}
function sp(r) {
  return r ? "setUTCHours" : "setHours";
}
function up(r) {
  return r ? "setUTCMinutes" : "setMinutes";
}
function lp(r) {
  return r ? "setUTCSeconds" : "setSeconds";
}
function fp(r) {
  return r ? "setUTCMilliseconds" : "setMilliseconds";
}
function hp(r) {
  if (!n0(r)) return B(r) ? r : "-";
  var t = (r + "").split(".");
  return (
    t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") +
    (t.length > 1 ? "." + t[1] : "")
  );
}
function vp(r, t) {
  return (
    (r = (r || "").toLowerCase().replace(/-(.)/g, function (e, i) {
      return i.toUpperCase();
    })),
    t && r && (r = r.charAt(0).toUpperCase() + r.slice(1)),
    r
  );
}
var xo = gc,
  pw = /([&<>"'])/g,
  gw = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
function Ht(r) {
  return r == null
    ? ""
    : (r + "").replace(pw, function (t, e) {
        return gw[e];
      });
}
function Du(r, t, e) {
  var i = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function n(f) {
    return f && ye(f) ? f : "-";
  }
  function a(f) {
    return !!(f != null && !isNaN(f) && isFinite(f));
  }
  var o = t === "time",
    s = r instanceof Date;
  if (o || s) {
    var u = o ? Re(r) : r;
    if (isNaN(+u)) {
      if (s) return "-";
    } else return mo(u, i, e);
  }
  if (t === "ordinal") return qs(r) ? n(r) : ht(r) && a(r) ? r + "" : "-";
  var l = Ua(r);
  return a(l) ? hp(l) : qs(r) ? n(r) : typeof r == "boolean" ? r + "" : "-";
}
var Mh = ["a", "b", "c", "d", "e", "f", "g"],
  ws = function (r, t) {
    return "{" + r + (t == null ? "" : t) + "}";
  };
function cp(r, t, e) {
  k(t) || (t = [t]);
  var i = t.length;
  if (!i) return "";
  for (var n = t[0].$vars || [], a = 0; a < n.length; a++) {
    var o = Mh[a];
    r = r.replace(ws(o), ws(o, 0));
  }
  for (var s = 0; s < i; s++)
    for (var u = 0; u < n.length; u++) {
      var l = t[s][n[u]];
      r = r.replace(ws(Mh[u], s), e ? Ht(l) : l);
    }
  return r;
}
function BD(r, t, e) {
  return (
    C(t, function (i, n) {
      r = r.replace("{" + n + "}", e ? Ht(i) : i);
    }),
    r
  );
}
function yw(r, t) {
  var e = B(r) ? { color: r, extraCssText: t } : r || {},
    i = e.color,
    n = e.type;
  t = e.extraCssText;
  var a = e.renderMode || "html";
  if (!i) return "";
  if (a === "html")
    return n === "subItem"
      ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' +
          Ht(i) +
          ";" +
          (t || "") +
          '"></span>'
      : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' +
          Ht(i) +
          ";" +
          (t || "") +
          '"></span>';
  var o = e.markerId || "markerX";
  return {
    renderMode: a,
    content: "{" + o + "|}  ",
    style:
      n === "subItem"
        ? { width: 4, height: 4, borderRadius: 2, backgroundColor: i }
        : { width: 10, height: 10, borderRadius: 5, backgroundColor: i },
  };
}
function yn(r, t) {
  return (
    (t = t || "transparent"),
    B(r) ? r : (F(r) && r.colorStops && (r.colorStops[0] || {}).color) || t
  );
}
function Ph(r, t) {
  if (t === "_blank" || t === "blank") {
    var e = window.open();
    (e.opener = null), (e.location.href = r);
  } else window.open(r, t);
}
var Aa = C,
  _w = ["left", "right", "top", "bottom", "width", "height"],
  Pr = [
    ["width", "left", "right"],
    ["height", "top", "bottom"],
  ];
function Al(r, t, e, i, n) {
  var a = 0,
    o = 0;
  i == null && (i = 1 / 0), n == null && (n = 1 / 0);
  var s = 0;
  t.eachChild(function (u, l) {
    var f = u.getBoundingRect(),
      h = t.childAt(l + 1),
      c = h && h.getBoundingRect(),
      v,
      d;
    if (r === "horizontal") {
      var y = f.width + (c ? -c.x + f.x : 0);
      (v = a + y),
        v > i || u.newline
          ? ((a = 0), (v = y), (o += s + e), (s = f.height))
          : (s = Math.max(s, f.height));
    } else {
      var p = f.height + (c ? -c.y + f.y : 0);
      (d = o + p),
        d > n || u.newline
          ? ((a += s + e), (o = 0), (d = p), (s = f.width))
          : (s = Math.max(s, f.width));
    }
    u.newline ||
      ((u.x = a),
      (u.y = o),
      u.markRedraw(),
      r === "horizontal" ? (a = v + e) : (o = d + e));
  });
}
var hi = Al;
gt(Al, "vertical");
gt(Al, "horizontal");
function pi(r, t, e) {
  e = xo(e || 0);
  var i = t.width,
    n = t.height,
    a = Pt(r.left, i),
    o = Pt(r.top, n),
    s = Pt(r.right, i),
    u = Pt(r.bottom, n),
    l = Pt(r.width, i),
    f = Pt(r.height, n),
    h = e[2] + e[0],
    c = e[1] + e[3],
    v = r.aspect;
  switch (
    (isNaN(l) && (l = i - s - c - a),
    isNaN(f) && (f = n - u - h - o),
    v != null &&
      (isNaN(l) && isNaN(f) && (v > i / n ? (l = i * 0.8) : (f = n * 0.8)),
      isNaN(l) && (l = v * f),
      isNaN(f) && (f = l / v)),
    isNaN(a) && (a = i - s - l - c),
    isNaN(o) && (o = n - u - f - h),
    r.left || r.right)
  ) {
    case "center":
      a = i / 2 - l / 2 - e[3];
      break;
    case "right":
      a = i - l - c;
      break;
  }
  switch (r.top || r.bottom) {
    case "middle":
    case "center":
      o = n / 2 - f / 2 - e[0];
      break;
    case "bottom":
      o = n - f - h;
      break;
  }
  (a = a || 0),
    (o = o || 0),
    isNaN(l) && (l = i - c - a - (s || 0)),
    isNaN(f) && (f = n - h - o - (u || 0));
  var d = new j(a + e[3], o + e[0], l, f);
  return (d.margin = e), d;
}
function mw(r, t, e, i, n, a) {
  var o = !n || !n.hv || n.hv[0],
    s = !n || !n.hv || n.hv[1],
    u = (n && n.boundingMode) || "all";
  if (((a = a || r), (a.x = r.x), (a.y = r.y), !o && !s)) return !1;
  var l;
  if (u === "raw")
    l =
      r.type === "group"
        ? new j(0, 0, +t.width || 0, +t.height || 0)
        : r.getBoundingRect();
  else if (((l = r.getBoundingRect()), r.needLocalTransform())) {
    var f = r.getLocalTransform();
    (l = l.clone()), l.applyTransform(f);
  }
  var h = pi(nt({ width: l.width, height: l.height }, t), e, i),
    c = o ? h.x - l.x : 0,
    v = s ? h.y - l.y : 0;
  return (
    u === "raw" ? ((a.x = c), (a.y = v)) : ((a.x += c), (a.y += v)),
    a === r && r.markRedraw(),
    !0
  );
}
function FD(r, t) {
  return r[Pr[t][0]] != null || (r[Pr[t][1]] != null && r[Pr[t][2]] != null);
}
function Za(r) {
  var t = r.layoutMode || r.constructor.layoutMode;
  return F(t) ? t : t ? { type: t } : null;
}
function _n(r, t, e) {
  var i = e && e.ignoreSize;
  !k(i) && (i = [i, i]);
  var n = o(Pr[0], 0),
    a = o(Pr[1], 1);
  l(Pr[0], r, n), l(Pr[1], r, a);
  function o(f, h) {
    var c = {},
      v = 0,
      d = {},
      y = 0,
      p = 2;
    if (
      (Aa(f, function (m) {
        d[m] = r[m];
      }),
      Aa(f, function (m) {
        s(t, m) && (c[m] = d[m] = t[m]), u(c, m) && v++, u(d, m) && y++;
      }),
      i[h])
    )
      return u(t, f[1]) ? (d[f[2]] = null) : u(t, f[2]) && (d[f[1]] = null), d;
    if (y === p || !v) return d;
    if (v >= p) return c;
    for (var g = 0; g < f.length; g++) {
      var _ = f[g];
      if (!s(c, _) && s(r, _)) {
        c[_] = r[_];
        break;
      }
    }
    return c;
  }
  function s(f, h) {
    return f.hasOwnProperty(h);
  }
  function u(f, h) {
    return f[h] != null && f[h] !== "auto";
  }
  function l(f, h, c) {
    Aa(f, function (v) {
      h[v] = c[v];
    });
  }
}
function Ll(r) {
  return ww({}, r);
}
function ww(r, t) {
  return (
    t &&
      r &&
      Aa(_w, function (e) {
        t.hasOwnProperty(e) && (r[e] = t[e]);
      }),
    r
  );
}
var Sw = yt(),
  mi = (function (r) {
    rt(t, r);
    function t(e, i, n) {
      var a = r.call(this, e, i, n) || this;
      return (a.uid = _o("ec_cpt_model")), a;
    }
    return (
      (t.prototype.init = function (e, i, n) {
        this.mergeDefaultAndTheme(e, n);
      }),
      (t.prototype.mergeDefaultAndTheme = function (e, i) {
        var n = Za(this),
          a = n ? Ll(e) : {},
          o = i.getTheme();
        ut(e, o.get(this.mainType)),
          ut(e, this.getDefaultOption()),
          n && _n(e, a, n);
      }),
      (t.prototype.mergeOption = function (e, i) {
        ut(this.option, e, !0);
        var n = Za(this);
        n && _n(this.option, e, n);
      }),
      (t.prototype.optionUpdated = function (e, i) {}),
      (t.prototype.getDefaultOption = function () {
        var e = this.constructor;
        if (!x0(e)) return e.defaultOption;
        var i = Sw(this);
        if (!i.defaultOption) {
          for (var n = [], a = e; a; ) {
            var o = a.prototype.defaultOption;
            o && n.push(o), (a = a.superClass);
          }
          for (var s = {}, u = n.length - 1; u >= 0; u--) s = ut(s, n[u], !0);
          i.defaultOption = s;
        }
        return i.defaultOption;
      }),
      (t.prototype.getReferringComponents = function (e, i) {
        var n = e + "Index",
          a = e + "Id";
        return Pn(
          this.ecModel,
          e,
          { index: this.get(n, !0), id: this.get(a, !0) },
          i
        );
      }),
      (t.prototype.getBoxLayoutParams = function () {
        var e = this;
        return {
          left: e.get("left"),
          top: e.get("top"),
          right: e.get("right"),
          bottom: e.get("bottom"),
          width: e.get("width"),
          height: e.get("height"),
        };
      }),
      (t.prototype.getZLevelKey = function () {
        return "";
      }),
      (t.prototype.setZLevel = function (e) {
        this.option.zlevel = e;
      }),
      (t.protoInitialize = (function () {
        var e = t.prototype;
        (e.type = "component"),
          (e.id = ""),
          (e.name = ""),
          (e.mainType = ""),
          (e.subType = ""),
          (e.componentIndex = 0);
      })()),
      t
    );
  })(Tt);
ed(mi, Tt);
fo(mi);
iw(mi);
nw(mi, bw);
function bw(r) {
  var t = [];
  return (
    C(mi.getClassesByMainType(r), function (e) {
      t = t.concat(e.dependencies || e.prototype.dependencies || []);
    }),
    (t = U(t, function (e) {
      return _e(e).main;
    })),
    r !== "dataset" && et(t, "dataset") <= 0 && t.unshift("dataset"),
    t
  );
}
var ot = mi,
  dp = "";
typeof navigator != "undefined" && (dp = navigator.platform || "");
var Zr = "rgba(0, 0, 0, 0.2)",
  Tw = {
    darkMode: "auto",
    colorBy: "series",
    color: [
      "#5470c6",
      "#91cc75",
      "#fac858",
      "#ee6666",
      "#73c0de",
      "#3ba272",
      "#fc8452",
      "#9a60b4",
      "#ea7ccc",
    ],
    gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
    aria: {
      decal: {
        decals: [
          {
            color: Zr,
            dashArrayX: [1, 0],
            dashArrayY: [2, 5],
            symbolSize: 1,
            rotation: Math.PI / 6,
          },
          {
            color: Zr,
            symbol: "circle",
            dashArrayX: [
              [8, 8],
              [0, 8, 8, 0],
            ],
            dashArrayY: [6, 0],
            symbolSize: 0.8,
          },
          {
            color: Zr,
            dashArrayX: [1, 0],
            dashArrayY: [4, 3],
            rotation: -Math.PI / 4,
          },
          {
            color: Zr,
            dashArrayX: [
              [6, 6],
              [0, 6, 6, 0],
            ],
            dashArrayY: [6, 0],
          },
          {
            color: Zr,
            dashArrayX: [
              [1, 0],
              [1, 6],
            ],
            dashArrayY: [1, 0, 6, 0],
            rotation: Math.PI / 4,
          },
          {
            color: Zr,
            symbol: "triangle",
            dashArrayX: [
              [9, 9],
              [0, 9, 9, 0],
            ],
            dashArrayY: [7, 2],
            symbolSize: 0.75,
          },
        ],
      },
    },
    textStyle: {
      fontFamily: dp.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: "normal",
    },
    blendMode: null,
    stateAnimation: { duration: 300, easing: "cubicOut" },
    animation: "auto",
    animationDuration: 1e3,
    animationDurationUpdate: 500,
    animationEasing: "cubicInOut",
    animationEasingUpdate: "cubicInOut",
    animationThreshold: 2e3,
    progressiveThreshold: 3e3,
    progressive: 400,
    hoverLayerThreshold: 3e3,
    useUTC: !1,
  },
  pp = $([
    "tooltip",
    "label",
    "itemName",
    "itemId",
    "itemGroupId",
    "seriesName",
  ]),
  xe = "original",
  Ft = "arrayRows",
  he = "objectRows",
  Ce = "keyedColumns",
  Ze = "typedArray",
  gp = "unknown",
  we = "column",
  wi = "row",
  dt = { Must: 1, Might: 2, Not: 3 },
  yp = yt();
function xw(r) {
  yp(r).datasetMap = $();
}
function ND(r, t, e) {
  var i = {},
    n = Il(t);
  if (!n || !r) return i;
  var a = [],
    o = [],
    s = t.ecModel,
    u = yp(s).datasetMap,
    l = n.uid + "_" + e.seriesLayoutBy,
    f,
    h;
  (r = r.slice()),
    C(r, function (y, p) {
      var g = F(y) ? y : (r[p] = { name: y });
      g.type === "ordinal" && f == null && ((f = p), (h = d(g))),
        (i[g.name] = []);
    });
  var c = u.get(l) || u.set(l, { categoryWayDim: h, valueWayDim: 0 });
  C(r, function (y, p) {
    var g = y.name,
      _ = d(y);
    if (f == null) {
      var m = c.valueWayDim;
      v(i[g], m, _), v(o, m, _), (c.valueWayDim += _);
    } else if (f === p) v(i[g], 0, _), v(a, 0, _);
    else {
      var m = c.categoryWayDim;
      v(i[g], m, _), v(o, m, _), (c.categoryWayDim += _);
    }
  });
  function v(y, p, g) {
    for (var _ = 0; _ < g; _++) y.push(p + _);
  }
  function d(y) {
    var p = y.dimsDef;
    return p ? p.length : 1;
  }
  return a.length && (i.itemName = a), o.length && (i.seriesName = o), i;
}
function zD(r, t, e) {
  var i = {},
    n = Il(r);
  if (!n) return i;
  var a = t.sourceFormat,
    o = t.dimensionsDefine,
    s;
  (a === he || a === Ce) &&
    C(o, function (f, h) {
      (F(f) ? f.name : f) === "name" && (s = h);
    });
  var u = (function () {
    for (var f = {}, h = {}, c = [], v = 0, d = Math.min(5, e); v < d; v++) {
      var y = mp(t.data, a, t.seriesLayoutBy, o, t.startIndex, v);
      c.push(y);
      var p = y === dt.Not;
      if (
        (p && f.v == null && v !== s && (f.v = v),
        (f.n == null || f.n === f.v || (!p && c[f.n] === dt.Not)) && (f.n = v),
        g(f) && c[f.n] !== dt.Not)
      )
        return f;
      p ||
        (y === dt.Might && h.v == null && v !== s && (h.v = v),
        (h.n == null || h.n === h.v) && (h.n = v));
    }
    function g(_) {
      return _.v != null && _.n != null;
    }
    return g(f) ? f : g(h) ? h : null;
  })();
  if (u) {
    i.value = [u.v];
    var l = s != null ? s : u.n;
    (i.itemName = [l]), (i.seriesName = [l]);
  }
  return i;
}
function Il(r) {
  var t = r.get("data", !0);
  if (!t)
    return Pn(
      r.ecModel,
      "dataset",
      { index: r.get("datasetIndex", !0), id: r.get("datasetId", !0) },
      lo
    ).models[0];
}
function Cw(r) {
  return !r.get("transform", !0) && !r.get("fromTransformResult", !0)
    ? []
    : Pn(
        r.ecModel,
        "dataset",
        {
          index: r.get("fromDatasetIndex", !0),
          id: r.get("fromDatasetId", !0),
        },
        lo
      ).models;
}
function _p(r, t) {
  return mp(
    r.data,
    r.sourceFormat,
    r.seriesLayoutBy,
    r.dimensionsDefine,
    r.startIndex,
    t
  );
}
function mp(r, t, e, i, n, a) {
  var o,
    s = 5;
  if (Wt(r)) return dt.Not;
  var u, l;
  if (i) {
    var f = i[a];
    F(f) ? ((u = f.name), (l = f.type)) : B(f) && (u = f);
  }
  if (l != null) return l === "ordinal" ? dt.Must : dt.Not;
  if (t === Ft) {
    var h = r;
    if (e === wi) {
      for (var c = h[a], v = 0; v < (c || []).length && v < s; v++)
        if ((o = w(c[n + v])) != null) return o;
    } else
      for (var v = 0; v < h.length && v < s; v++) {
        var d = h[n + v];
        if (d && (o = w(d[a])) != null) return o;
      }
  } else if (t === he) {
    var y = r;
    if (!u) return dt.Not;
    for (var v = 0; v < y.length && v < s; v++) {
      var p = y[v];
      if (p && (o = w(p[u])) != null) return o;
    }
  } else if (t === Ce) {
    var g = r;
    if (!u) return dt.Not;
    var c = g[u];
    if (!c || Wt(c)) return dt.Not;
    for (var v = 0; v < c.length && v < s; v++)
      if ((o = w(c[v])) != null) return o;
  } else if (t === xe)
    for (var _ = r, v = 0; v < _.length && v < s; v++) {
      var p = _[v],
        m = uo(p);
      if (!k(m)) return dt.Not;
      if ((o = w(m[a])) != null) return o;
    }
  function w(b) {
    var S = B(b);
    if (b != null && isFinite(b) && b !== "") return S ? dt.Might : dt.Not;
    if (S && b !== "-") return dt.Must;
  }
  return dt.Not;
}
var Mu = $();
function HD(r, t) {
  Se(Mu.get(r) == null && t), Mu.set(r, t);
}
function Dw(r, t, e) {
  var i = Mu.get(t);
  if (!i) return e;
  var n = i(r);
  return n ? e.concat(n) : e;
}
var Ah = yt();
yt();
var Rl = (function () {
  function r() {}
  return (
    (r.prototype.getColorFromPalette = function (t, e, i) {
      var n = xt(this.get("color", !0)),
        a = this.get("colorLayer", !0);
      return Pw(this, Ah, n, a, t, e, i);
    }),
    (r.prototype.clearColorPalette = function () {
      Aw(this, Ah);
    }),
    r
  );
})();
function Mw(r, t) {
  for (var e = r.length, i = 0; i < e; i++) if (r[i].length > t) return r[i];
  return r[e - 1];
}
function Pw(r, t, e, i, n, a, o) {
  a = a || r;
  var s = t(a),
    u = s.paletteIdx || 0,
    l = (s.paletteNameMap = s.paletteNameMap || {});
  if (l.hasOwnProperty(n)) return l[n];
  var f = o == null || !i ? e : Mw(i, o);
  if (((f = f || e), !(!f || !f.length))) {
    var h = f[u];
    return n && (l[n] = h), (s.paletteIdx = (u + 1) % f.length), h;
  }
}
function Aw(r, t) {
  (t(r).paletteIdx = 0), (t(r).paletteNameMap = {});
}
var ta,
  Li,
  Lh,
  Ih = "\0_ec_inner",
  Lw = 1,
  wp = (function (r) {
    rt(t, r);
    function t() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.init = function (e, i, n, a, o, s) {
        (a = a || {}),
          (this.option = null),
          (this._theme = new Tt(a)),
          (this._locale = new Tt(o)),
          (this._optionManager = s);
      }),
      (t.prototype.setOption = function (e, i, n) {
        var a = Oh(i);
        this._optionManager.setOption(e, n, a), this._resetOption(null, a);
      }),
      (t.prototype.resetOption = function (e, i) {
        return this._resetOption(e, Oh(i));
      }),
      (t.prototype._resetOption = function (e, i) {
        var n = !1,
          a = this._optionManager;
        if (!e || e === "recreate") {
          var o = a.mountOption(e === "recreate");
          !this.option || e === "recreate"
            ? Lh(this, o)
            : (this.restoreData(), this._mergeOption(o, i)),
            (n = !0);
        }
        if (
          ((e === "timeline" || e === "media") && this.restoreData(),
          !e || e === "recreate" || e === "timeline")
        ) {
          var s = a.getTimelineOption(this);
          s && ((n = !0), this._mergeOption(s, i));
        }
        if (!e || e === "recreate" || e === "media") {
          var u = a.getMediaOption(this);
          u.length &&
            C(
              u,
              function (l) {
                (n = !0), this._mergeOption(l, i);
              },
              this
            );
        }
        return n;
      }),
      (t.prototype.mergeOption = function (e) {
        this._mergeOption(e, null);
      }),
      (t.prototype._mergeOption = function (e, i) {
        var n = this.option,
          a = this._componentsMap,
          o = this._componentsCount,
          s = [],
          u = $(),
          l = i && i.replaceMergeMainTypeMap;
        xw(this),
          C(e, function (h, c) {
            h != null &&
              (ot.hasClass(c)
                ? c && (s.push(c), u.set(c, !0))
                : (n[c] = n[c] == null ? X(h) : ut(n[c], h, !0)));
          }),
          l &&
            l.each(function (h, c) {
              ot.hasClass(c) && !u.get(c) && (s.push(c), u.set(c, !0));
            }),
          ot.topologicalTravel(s, ot.getAllClassMainTypes(), f, this);
        function f(h) {
          var c = Dw(this, h, xt(e[h])),
            v = a.get(h),
            d = v
              ? l && l.get(h)
                ? "replaceMerge"
                : "normalMerge"
              : "replaceAll",
            y = l0(v, c, d);
          g0(y, h, ot), (n[h] = null), a.set(h, null), o.set(h, 0);
          var p = [],
            g = [],
            _ = 0,
            m;
          C(
            y,
            function (w, b) {
              var S = w.existing,
                D = w.newOption;
              if (!D) S && (S.mergeOption({}, this), S.optionUpdated({}, !1));
              else {
                var T = h === "series",
                  x = ot.getClass(h, w.keyInfo.subType, !T);
                if (!x) return;
                if (h === "tooltip") {
                  if (m) return;
                  m = !0;
                }
                if (S && S.constructor === x)
                  (S.name = w.keyInfo.name),
                    S.mergeOption(D, this),
                    S.optionUpdated(D, !1);
                else {
                  var M = O({ componentIndex: b }, w.keyInfo);
                  (S = new x(D, this, this, M)),
                    O(S, M),
                    w.brandNew && (S.__requireNewView = !0),
                    S.init(D, this, this),
                    S.optionUpdated(null, !0);
                }
              }
              S
                ? (p.push(S.option), g.push(S), _++)
                : (p.push(void 0), g.push(void 0));
            },
            this
          ),
            (n[h] = p),
            a.set(h, g),
            o.set(h, _),
            h === "series" && ta(this);
        }
        this._seriesIndices || ta(this);
      }),
      (t.prototype.getOption = function () {
        var e = X(this.option);
        return (
          C(e, function (i, n) {
            if (ot.hasClass(n)) {
              for (var a = xt(i), o = a.length, s = !1, u = o - 1; u >= 0; u--)
                a[u] && !cn(a[u]) ? (s = !0) : ((a[u] = null), !s && o--);
              (a.length = o), (e[n] = a);
            }
          }),
          delete e[Ih],
          e
        );
      }),
      (t.prototype.getTheme = function () {
        return this._theme;
      }),
      (t.prototype.getLocaleModel = function () {
        return this._locale;
      }),
      (t.prototype.setUpdatePayload = function (e) {
        this._payload = e;
      }),
      (t.prototype.getUpdatePayload = function () {
        return this._payload;
      }),
      (t.prototype.getComponent = function (e, i) {
        var n = this._componentsMap.get(e);
        if (n) {
          var a = n[i || 0];
          if (a) return a;
          if (i == null) {
            for (var o = 0; o < n.length; o++) if (n[o]) return n[o];
          }
        }
      }),
      (t.prototype.queryComponents = function (e) {
        var i = e.mainType;
        if (!i) return [];
        var n = e.index,
          a = e.id,
          o = e.name,
          s = this._componentsMap.get(i);
        if (!s || !s.length) return [];
        var u;
        return (
          n != null
            ? ((u = []),
              C(xt(n), function (l) {
                s[l] && u.push(s[l]);
              }))
            : a != null
            ? (u = Rh("id", a, s))
            : o != null
            ? (u = Rh("name", o, s))
            : (u = zt(s, function (l) {
                return !!l;
              })),
          Eh(u, e)
        );
      }),
      (t.prototype.findComponents = function (e) {
        var i = e.query,
          n = e.mainType,
          a = s(i),
          o = a
            ? this.queryComponents(a)
            : zt(this._componentsMap.get(n), function (l) {
                return !!l;
              });
        return u(Eh(o, e));
        function s(l) {
          var f = n + "Index",
            h = n + "Id",
            c = n + "Name";
          return l && (l[f] != null || l[h] != null || l[c] != null)
            ? { mainType: n, index: l[f], id: l[h], name: l[c] }
            : null;
        }
        function u(l) {
          return e.filter ? zt(l, e.filter) : l;
        }
      }),
      (t.prototype.eachComponent = function (e, i, n) {
        var a = this._componentsMap;
        if (q(e)) {
          var o = i,
            s = e;
          a.each(function (h, c) {
            for (var v = 0; h && v < h.length; v++) {
              var d = h[v];
              d && s.call(o, c, d, d.componentIndex);
            }
          });
        } else
          for (
            var u = B(e) ? a.get(e) : F(e) ? this.findComponents(e) : null,
              l = 0;
            u && l < u.length;
            l++
          ) {
            var f = u[l];
            f && i.call(n, f, f.componentIndex);
          }
      }),
      (t.prototype.getSeriesByName = function (e) {
        var i = le(e, null);
        return zt(this._componentsMap.get("series"), function (n) {
          return !!n && i != null && n.name === i;
        });
      }),
      (t.prototype.getSeriesByIndex = function (e) {
        return this._componentsMap.get("series")[e];
      }),
      (t.prototype.getSeriesByType = function (e) {
        return zt(this._componentsMap.get("series"), function (i) {
          return !!i && i.subType === e;
        });
      }),
      (t.prototype.getSeries = function () {
        return zt(this._componentsMap.get("series"), function (e) {
          return !!e;
        });
      }),
      (t.prototype.getSeriesCount = function () {
        return this._componentsCount.get("series");
      }),
      (t.prototype.eachSeries = function (e, i) {
        Li(this),
          C(
            this._seriesIndices,
            function (n) {
              var a = this._componentsMap.get("series")[n];
              e.call(i, a, n);
            },
            this
          );
      }),
      (t.prototype.eachRawSeries = function (e, i) {
        C(this._componentsMap.get("series"), function (n) {
          n && e.call(i, n, n.componentIndex);
        });
      }),
      (t.prototype.eachSeriesByType = function (e, i, n) {
        Li(this),
          C(
            this._seriesIndices,
            function (a) {
              var o = this._componentsMap.get("series")[a];
              o.subType === e && i.call(n, o, a);
            },
            this
          );
      }),
      (t.prototype.eachRawSeriesByType = function (e, i, n) {
        return C(this.getSeriesByType(e), i, n);
      }),
      (t.prototype.isSeriesFiltered = function (e) {
        return Li(this), this._seriesIndicesMap.get(e.componentIndex) == null;
      }),
      (t.prototype.getCurrentSeriesIndices = function () {
        return (this._seriesIndices || []).slice();
      }),
      (t.prototype.filterSeries = function (e, i) {
        Li(this);
        var n = [];
        C(
          this._seriesIndices,
          function (a) {
            var o = this._componentsMap.get("series")[a];
            e.call(i, o, a) && n.push(a);
          },
          this
        ),
          (this._seriesIndices = n),
          (this._seriesIndicesMap = $(n));
      }),
      (t.prototype.restoreData = function (e) {
        ta(this);
        var i = this._componentsMap,
          n = [];
        i.each(function (a, o) {
          ot.hasClass(o) && n.push(o);
        }),
          ot.topologicalTravel(n, ot.getAllClassMainTypes(), function (a) {
            C(i.get(a), function (o) {
              o && (a !== "series" || !Iw(o, e)) && o.restoreData();
            });
          });
      }),
      (t.internalField = (function () {
        (ta = function (e) {
          var i = (e._seriesIndices = []);
          C(e._componentsMap.get("series"), function (n) {
            n && i.push(n.componentIndex);
          }),
            (e._seriesIndicesMap = $(i));
        }),
          (Li = function (e) {}),
          (Lh = function (e, i) {
            (e.option = {}),
              (e.option[Ih] = Lw),
              (e._componentsMap = $({ series: [] })),
              (e._componentsCount = $());
            var n = i.aria;
            F(n) && n.enabled == null && (n.enabled = !0),
              Rw(i, e._theme.option),
              ut(i, Tw, !1),
              e._mergeOption(i, null);
          });
      })()),
      t
    );
  })(Tt);
function Iw(r, t) {
  if (t) {
    var e = t.seriesIndex,
      i = t.seriesId,
      n = t.seriesName;
    return (
      (e != null && r.componentIndex !== e) ||
      (i != null && r.id !== i) ||
      (n != null && r.name !== n)
    );
  }
}
function Rw(r, t) {
  var e = r.color && !r.colorLayer;
  C(t, function (i, n) {
    (n === "colorLayer" && e) ||
      ot.hasClass(n) ||
      (typeof i == "object"
        ? (r[n] = r[n] ? ut(r[n], i, !1) : X(i))
        : r[n] == null && (r[n] = i));
  });
}
function Rh(r, t, e) {
  if (k(t)) {
    var i = $();
    return (
      C(t, function (a) {
        if (a != null) {
          var o = le(a, null);
          o != null && i.set(a, !0);
        }
      }),
      zt(e, function (a) {
        return a && i.get(a[r]);
      })
    );
  } else {
    var n = le(t, null);
    return zt(e, function (a) {
      return a && n != null && a[r] === n;
    });
  }
}
function Eh(r, t) {
  return t.hasOwnProperty("subType")
    ? zt(r, function (e) {
        return e && e.subType === t.subType;
      })
    : r;
}
function Oh(r) {
  var t = $();
  return (
    r &&
      C(xt(r.replaceMerge), function (e) {
        t.set(e, !0);
      }),
    { replaceMergeMainTypeMap: t }
  );
}
Oe(wp, Rl);
var Sp = wp,
  Ew = [
    "getDom",
    "getZr",
    "getWidth",
    "getHeight",
    "getDevicePixelRatio",
    "dispatchAction",
    "isSSR",
    "isDisposed",
    "on",
    "off",
    "getDataURL",
    "getConnectedDataURL",
    "getOption",
    "getId",
    "updateLabelLayout",
  ],
  Ow = (function () {
    function r(t) {
      C(
        Ew,
        function (e) {
          this[e] = st(t[e], t);
        },
        this
      );
    }
    return r;
  })(),
  bp = Ow,
  Ss = {},
  kw = (function () {
    function r() {
      this._coordinateSystems = [];
    }
    return (
      (r.prototype.create = function (t, e) {
        var i = [];
        C(Ss, function (n, a) {
          var o = n.create(t, e);
          i = i.concat(o || []);
        }),
          (this._coordinateSystems = i);
      }),
      (r.prototype.update = function (t, e) {
        C(this._coordinateSystems, function (i) {
          i.update && i.update(t, e);
        });
      }),
      (r.prototype.getCoordinateSystems = function () {
        return this._coordinateSystems.slice();
      }),
      (r.register = function (t, e) {
        Ss[t] = e;
      }),
      (r.get = function (t) {
        return Ss[t];
      }),
      r
    );
  })(),
  Tp = kw,
  Bw = /^(min|max)?(.+)$/,
  Fw = (function () {
    function r(t) {
      (this._timelineOptions = []),
        (this._mediaList = []),
        (this._currentMediaIndices = []),
        (this._api = t);
    }
    return (
      (r.prototype.setOption = function (t, e, i) {
        t &&
          (C(xt(t.series), function (o) {
            o && o.data && Wt(o.data) && Fa(o.data);
          }),
          C(xt(t.dataset), function (o) {
            o && o.source && Wt(o.source) && Fa(o.source);
          })),
          (t = X(t));
        var n = this._optionBackup,
          a = Nw(t, e, !n);
        (this._newBaseOption = a.baseOption),
          n
            ? (a.timelineOptions.length &&
                (n.timelineOptions = a.timelineOptions),
              a.mediaList.length && (n.mediaList = a.mediaList),
              a.mediaDefault && (n.mediaDefault = a.mediaDefault))
            : (this._optionBackup = a);
      }),
      (r.prototype.mountOption = function (t) {
        var e = this._optionBackup;
        return (
          (this._timelineOptions = e.timelineOptions),
          (this._mediaList = e.mediaList),
          (this._mediaDefault = e.mediaDefault),
          (this._currentMediaIndices = []),
          X(t ? e.baseOption : this._newBaseOption)
        );
      }),
      (r.prototype.getTimelineOption = function (t) {
        var e,
          i = this._timelineOptions;
        if (i.length) {
          var n = t.getComponent("timeline");
          n && (e = X(i[n.getCurrentIndex()]));
        }
        return e;
      }),
      (r.prototype.getMediaOption = function (t) {
        var e = this._api.getWidth(),
          i = this._api.getHeight(),
          n = this._mediaList,
          a = this._mediaDefault,
          o = [],
          s = [];
        if (!n.length && !a) return s;
        for (var u = 0, l = n.length; u < l; u++)
          zw(n[u].query, e, i) && o.push(u);
        return (
          !o.length && a && (o = [-1]),
          o.length &&
            !Gw(o, this._currentMediaIndices) &&
            (s = U(o, function (f) {
              return X(f === -1 ? a.option : n[f].option);
            })),
          (this._currentMediaIndices = o),
          s
        );
      }),
      r
    );
  })();
function Nw(r, t, e) {
  var i = [],
    n,
    a,
    o = r.baseOption,
    s = r.timeline,
    u = r.options,
    l = r.media,
    f = !!r.media,
    h = !!(u || s || (o && o.timeline));
  o
    ? ((a = o), a.timeline || (a.timeline = s))
    : ((h || f) && (r.options = r.media = null), (a = r)),
    f &&
      k(l) &&
      C(l, function (v) {
        v && v.option && (v.query ? i.push(v) : n || (n = v));
      }),
    c(a),
    C(u, function (v) {
      return c(v);
    }),
    C(i, function (v) {
      return c(v.option);
    });
  function c(v) {
    C(t, function (d) {
      d(v, e);
    });
  }
  return {
    baseOption: a,
    timelineOptions: u || [],
    mediaDefault: n,
    mediaList: i,
  };
}
function zw(r, t, e) {
  var i = { width: t, height: e, aspectratio: t / e },
    n = !0;
  return (
    C(r, function (a, o) {
      var s = o.match(Bw);
      if (!(!s || !s[1] || !s[2])) {
        var u = s[1],
          l = s[2].toLowerCase();
        Hw(i[l], a, u) || (n = !1);
      }
    }),
    n
  );
}
function Hw(r, t, e) {
  return e === "min" ? r >= t : e === "max" ? r <= t : r === t;
}
function Gw(r, t) {
  return r.join(",") === t.join(",");
}
var Vw = Fw,
  re = C,
  mn = F,
  kh = [
    "areaStyle",
    "lineStyle",
    "nodeStyle",
    "linkStyle",
    "chordStyle",
    "label",
    "labelLine",
  ];
function bs(r) {
  var t = r && r.itemStyle;
  if (!!t)
    for (var e = 0, i = kh.length; e < i; e++) {
      var n = kh[e],
        a = t.normal,
        o = t.emphasis;
      a &&
        a[n] &&
        ((r[n] = r[n] || {}),
        r[n].normal ? ut(r[n].normal, a[n]) : (r[n].normal = a[n]),
        (a[n] = null)),
        o &&
          o[n] &&
          ((r[n] = r[n] || {}),
          r[n].emphasis ? ut(r[n].emphasis, o[n]) : (r[n].emphasis = o[n]),
          (o[n] = null));
    }
}
function bt(r, t, e) {
  if (r && r[t] && (r[t].normal || r[t].emphasis)) {
    var i = r[t].normal,
      n = r[t].emphasis;
    i && (e ? ((r[t].normal = r[t].emphasis = null), nt(r[t], i)) : (r[t] = i)),
      n &&
        ((r.emphasis = r.emphasis || {}),
        (r.emphasis[t] = n),
        n.focus && (r.emphasis.focus = n.focus),
        n.blurScope && (r.emphasis.blurScope = n.blurScope));
  }
}
function qi(r) {
  bt(r, "itemStyle"),
    bt(r, "lineStyle"),
    bt(r, "areaStyle"),
    bt(r, "label"),
    bt(r, "labelLine"),
    bt(r, "upperLabel"),
    bt(r, "edgeLabel");
}
function vt(r, t) {
  var e = mn(r) && r[t],
    i = mn(e) && e.textStyle;
  if (i)
    for (var n = 0, a = Bf.length; n < a; n++) {
      var o = Bf[n];
      i.hasOwnProperty(o) && (e[o] = i[o]);
    }
}
function Kt(r) {
  r && (qi(r), vt(r, "label"), r.emphasis && vt(r.emphasis, "label"));
}
function Ww(r) {
  if (!!mn(r)) {
    bs(r),
      qi(r),
      vt(r, "label"),
      vt(r, "upperLabel"),
      vt(r, "edgeLabel"),
      r.emphasis &&
        (vt(r.emphasis, "label"),
        vt(r.emphasis, "upperLabel"),
        vt(r.emphasis, "edgeLabel"));
    var t = r.markPoint;
    t && (bs(t), Kt(t));
    var e = r.markLine;
    e && (bs(e), Kt(e));
    var i = r.markArea;
    i && Kt(i);
    var n = r.data;
    if (r.type === "graph") {
      n = n || r.nodes;
      var a = r.links || r.edges;
      if (a && !Wt(a)) for (var o = 0; o < a.length; o++) Kt(a[o]);
      C(r.categories, function (l) {
        qi(l);
      });
    }
    if (n && !Wt(n)) for (var o = 0; o < n.length; o++) Kt(n[o]);
    if (((t = r.markPoint), t && t.data))
      for (var s = t.data, o = 0; o < s.length; o++) Kt(s[o]);
    if (((e = r.markLine), e && e.data))
      for (var u = e.data, o = 0; o < u.length; o++)
        k(u[o]) ? (Kt(u[o][0]), Kt(u[o][1])) : Kt(u[o]);
    r.type === "gauge"
      ? (vt(r, "axisLabel"), vt(r, "title"), vt(r, "detail"))
      : r.type === "treemap"
      ? (bt(r.breadcrumb, "itemStyle"),
        C(r.levels, function (l) {
          qi(l);
        }))
      : r.type === "tree" && qi(r.leaves);
  }
}
function Me(r) {
  return k(r) ? r : r ? [r] : [];
}
function Bh(r) {
  return (k(r) ? r[0] : r) || {};
}
function Uw(r, t) {
  re(Me(r.series), function (i) {
    mn(i) && Ww(i);
  });
  var e = [
    "xAxis",
    "yAxis",
    "radiusAxis",
    "angleAxis",
    "singleAxis",
    "parallelAxis",
    "radar",
  ];
  t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"),
    re(e, function (i) {
      re(Me(r[i]), function (n) {
        n && (vt(n, "axisLabel"), vt(n.axisPointer, "label"));
      });
    }),
    re(Me(r.parallel), function (i) {
      var n = i && i.parallelAxisDefault;
      vt(n, "axisLabel"), vt(n && n.axisPointer, "label");
    }),
    re(Me(r.calendar), function (i) {
      bt(i, "itemStyle"),
        vt(i, "dayLabel"),
        vt(i, "monthLabel"),
        vt(i, "yearLabel");
    }),
    re(Me(r.radar), function (i) {
      vt(i, "name"),
        i.name && i.axisName == null && ((i.axisName = i.name), delete i.name),
        i.nameGap != null &&
          i.axisNameGap == null &&
          ((i.axisNameGap = i.nameGap), delete i.nameGap);
    }),
    re(Me(r.geo), function (i) {
      mn(i) &&
        (Kt(i),
        re(Me(i.regions), function (n) {
          Kt(n);
        }));
    }),
    re(Me(r.timeline), function (i) {
      Kt(i), bt(i, "label"), bt(i, "itemStyle"), bt(i, "controlStyle", !0);
      var n = i.data;
      k(n) &&
        C(n, function (a) {
          F(a) && (bt(a, "label"), bt(a, "itemStyle"));
        });
    }),
    re(Me(r.toolbox), function (i) {
      bt(i, "iconStyle"),
        re(i.feature, function (n) {
          bt(n, "iconStyle");
        });
    }),
    vt(Bh(r.axisPointer), "label"),
    vt(Bh(r.tooltip).axisPointer, "label");
}
function Yw(r, t) {
  for (
    var e = t.split(","), i = r, n = 0;
    n < e.length && ((i = i && i[e[n]]), i != null);
    n++
  );
  return i;
}
function $w(r, t, e, i) {
  for (var n = t.split(","), a = r, o, s = 0; s < n.length - 1; s++)
    (o = n[s]), a[o] == null && (a[o] = {}), (a = a[o]);
  (i || a[n[s]] == null) && (a[n[s]] = e);
}
function Fh(r) {
  r &&
    C(Xw, function (t) {
      t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]]);
    });
}
var Xw = [
    ["x", "left"],
    ["y", "top"],
    ["x2", "right"],
    ["y2", "bottom"],
  ],
  qw = [
    "grid",
    "geo",
    "parallel",
    "legend",
    "toolbox",
    "title",
    "visualMap",
    "dataZoom",
    "timeline",
  ],
  Ts = [
    ["borderRadius", "barBorderRadius"],
    ["borderColor", "barBorderColor"],
    ["borderWidth", "barBorderWidth"],
  ];
function Ii(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0; e < Ts.length; e++) {
      var i = Ts[e][1],
        n = Ts[e][0];
      t[i] != null && (t[n] = t[i]);
    }
}
function Nh(r) {
  !r ||
    (r.alignTo === "edge" &&
      r.margin != null &&
      r.edgeDistance == null &&
      (r.edgeDistance = r.margin));
}
function zh(r) {
  !r || (r.downplay && !r.blur && (r.blur = r.downplay));
}
function Zw(r) {
  !r ||
    (r.focusNodeAdjacency != null &&
      ((r.emphasis = r.emphasis || {}),
      r.emphasis.focus == null && (r.emphasis.focus = "adjacency")));
}
function xp(r, t) {
  if (r)
    for (var e = 0; e < r.length; e++) t(r[e]), r[e] && xp(r[e].children, t);
}
function Cp(r, t) {
  Uw(r, t),
    (r.series = xt(r.series)),
    C(r.series, function (e) {
      if (!!F(e)) {
        var i = e.type;
        if (i === "line") e.clipOverflow != null && (e.clip = e.clipOverflow);
        else if (i === "pie" || i === "gauge") {
          e.clockWise != null && (e.clockwise = e.clockWise), Nh(e.label);
          var n = e.data;
          if (n && !Wt(n)) for (var a = 0; a < n.length; a++) Nh(n[a]);
          e.hoverOffset != null &&
            ((e.emphasis = e.emphasis || {}),
            (e.emphasis.scaleSize = null) &&
              (e.emphasis.scaleSize = e.hoverOffset));
        } else if (i === "gauge") {
          var o = Yw(e, "pointer.color");
          o != null && $w(e, "itemStyle.color", o);
        } else if (i === "bar") {
          Ii(e), Ii(e.backgroundStyle), Ii(e.emphasis);
          var n = e.data;
          if (n && !Wt(n))
            for (var a = 0; a < n.length; a++)
              typeof n[a] == "object" && (Ii(n[a]), Ii(n[a] && n[a].emphasis));
        } else if (i === "sunburst") {
          var s = e.highlightPolicy;
          s &&
            ((e.emphasis = e.emphasis || {}),
            e.emphasis.focus || (e.emphasis.focus = s)),
            zh(e),
            xp(e.data, zh);
        } else
          i === "graph" || i === "sankey"
            ? Zw(e)
            : i === "map" &&
              (e.mapType && !e.map && (e.map = e.mapType),
              e.mapLocation && nt(e, e.mapLocation));
        e.hoverAnimation != null &&
          ((e.emphasis = e.emphasis || {}),
          e.emphasis &&
            e.emphasis.scale == null &&
            (e.emphasis.scale = e.hoverAnimation)),
          Fh(e);
      }
    }),
    r.dataRange && (r.visualMap = r.dataRange),
    C(qw, function (e) {
      var i = r[e];
      i &&
        (k(i) || (i = [i]),
        C(i, function (n) {
          Fh(n);
        }));
    });
}
function Kw(r) {
  var t = $();
  r.eachSeries(function (e) {
    var i = e.get("stack");
    if (i) {
      var n = t.get(i) || t.set(i, []),
        a = e.getData(),
        o = {
          stackResultDimension: a.getCalculationInfo("stackResultDimension"),
          stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
          stackedDimension: a.getCalculationInfo("stackedDimension"),
          stackedByDimension: a.getCalculationInfo("stackedByDimension"),
          isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
          data: a,
          seriesModel: e,
        };
      if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension))
        return;
      n.length &&
        a.setCalculationInfo("stackedOnSeries", n[n.length - 1].seriesModel),
        n.push(o);
    }
  }),
    t.each(Qw);
}
function Qw(r) {
  C(r, function (t, e) {
    var i = [],
      n = [NaN, NaN],
      a = [t.stackResultDimension, t.stackedOverDimension],
      o = t.data,
      s = t.isStackedByIndex,
      u = t.seriesModel.get("stackStrategy") || "samesign";
    o.modify(a, function (l, f, h) {
      var c = o.get(t.stackedDimension, h);
      if (isNaN(c)) return n;
      var v, d;
      s ? (d = o.getRawIndex(h)) : (v = o.get(t.stackedByDimension, h));
      for (var y = NaN, p = e - 1; p >= 0; p--) {
        var g = r[p];
        if ((s || (d = g.data.rawIndexOf(g.stackedByDimension, v)), d >= 0)) {
          var _ = g.data.getByRawIndex(g.stackResultDimension, d);
          if (
            u === "all" ||
            (u === "positive" && _ > 0) ||
            (u === "negative" && _ < 0) ||
            (u === "samesign" && c >= 0 && _ > 0) ||
            (u === "samesign" && c <= 0 && _ < 0)
          ) {
            (c = e0(c, _)), (y = _);
            break;
          }
        }
      }
      return (i[0] = c), (i[1] = y), i;
    });
  });
}
var Co = (function () {
  function r(t) {
    (this.data = t.data || (t.sourceFormat === Ce ? {} : [])),
      (this.sourceFormat = t.sourceFormat || gp),
      (this.seriesLayoutBy = t.seriesLayoutBy || we),
      (this.startIndex = t.startIndex || 0),
      (this.dimensionsDetectedCount = t.dimensionsDetectedCount),
      (this.metaRawOption = t.metaRawOption);
    var e = (this.dimensionsDefine = t.dimensionsDefine);
    if (e)
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.type == null && _p(this, i) === dt.Must && (n.type = "ordinal");
      }
  }
  return r;
})();
function El(r) {
  return r instanceof Co;
}
function Pu(r, t, e) {
  e = e || Mp(r);
  var i = t.seriesLayoutBy,
    n = jw(r, e, i, t.sourceHeader, t.dimensions),
    a = new Co({
      data: r,
      sourceFormat: e,
      seriesLayoutBy: i,
      dimensionsDefine: n.dimensionsDefine,
      startIndex: n.startIndex,
      dimensionsDetectedCount: n.dimensionsDetectedCount,
      metaRawOption: X(t),
    });
  return a;
}
function Dp(r) {
  return new Co({ data: r, sourceFormat: Wt(r) ? Ze : xe });
}
function Jw(r) {
  return new Co({
    data: r.data,
    sourceFormat: r.sourceFormat,
    seriesLayoutBy: r.seriesLayoutBy,
    dimensionsDefine: X(r.dimensionsDefine),
    startIndex: r.startIndex,
    dimensionsDetectedCount: r.dimensionsDetectedCount,
  });
}
function Mp(r) {
  var t = gp;
  if (Wt(r)) t = Ze;
  else if (k(r)) {
    r.length === 0 && (t = Ft);
    for (var e = 0, i = r.length; e < i; e++) {
      var n = r[e];
      if (n != null) {
        if (k(n)) {
          t = Ft;
          break;
        } else if (F(n)) {
          t = he;
          break;
        }
      }
    }
  } else if (F(r)) {
    for (var a in r)
      if (vi(r, a) && kt(r[a])) {
        t = Ce;
        break;
      }
  }
  return t;
}
function jw(r, t, e, i, n) {
  var a, o;
  if (!r)
    return {
      dimensionsDefine: Hh(n),
      startIndex: o,
      dimensionsDetectedCount: a,
    };
  if (t === Ft) {
    var s = r;
    i === "auto" || i == null
      ? Gh(
          function (l) {
            l != null && l !== "-" && (B(l) ? o == null && (o = 1) : (o = 0));
          },
          e,
          s,
          10
        )
      : (o = ht(i) ? i : i ? 1 : 0),
      !n &&
        o === 1 &&
        ((n = []),
        Gh(
          function (l, f) {
            n[f] = l != null ? l + "" : "";
          },
          e,
          s,
          1 / 0
        )),
      (a = n ? n.length : e === wi ? s.length : s[0] ? s[0].length : null);
  } else if (t === he) n || (n = tS(r));
  else if (t === Ce)
    n ||
      ((n = []),
      C(r, function (l, f) {
        n.push(f);
      }));
  else if (t === xe) {
    var u = uo(r[0]);
    a = (k(u) && u.length) || 1;
  }
  return { startIndex: o, dimensionsDefine: Hh(n), dimensionsDetectedCount: a };
}
function tS(r) {
  for (var t = 0, e; t < r.length && !(e = r[t++]); );
  if (e) {
    var i = [];
    return (
      C(e, function (n, a) {
        i.push(a);
      }),
      i
    );
  }
}
function Hh(r) {
  if (!!r) {
    var t = $();
    return U(r, function (e, i) {
      e = F(e) ? e : { name: e };
      var n = { name: e.name, displayName: e.displayName, type: e.type };
      if (n.name == null) return n;
      (n.name += ""), n.displayName == null && (n.displayName = n.name);
      var a = t.get(n.name);
      return a ? (n.name += "-" + a.count++) : t.set(n.name, { count: 1 }), n;
    });
  }
}
function Gh(r, t, e, i) {
  if (t === wi)
    for (var n = 0; n < e.length && n < i; n++) r(e[n] ? e[n][0] : null, n);
  else for (var a = e[0] || [], n = 0; n < a.length && n < i; n++) r(a[n], n);
}
function Pp(r) {
  var t = r.sourceFormat;
  return t === he || t === Ce;
}
var wr,
  Sr,
  br,
  Vh,
  Wh,
  Ap = (function () {
    function r(t, e) {
      var i = El(t) ? t : Dp(t);
      this._source = i;
      var n = (this._data = i.data);
      i.sourceFormat === Ze &&
        ((this._offset = 0), (this._dimSize = e), (this._data = n)),
        Wh(this, n, i);
    }
    return (
      (r.prototype.getSource = function () {
        return this._source;
      }),
      (r.prototype.count = function () {
        return 0;
      }),
      (r.prototype.getItem = function (t, e) {}),
      (r.prototype.appendData = function (t) {}),
      (r.prototype.clean = function () {}),
      (r.protoInitialize = (function () {
        var t = r.prototype;
        (t.pure = !1), (t.persistent = !0);
      })()),
      (r.internalField = (function () {
        var t;
        Wh = function (o, s, u) {
          var l = u.sourceFormat,
            f = u.seriesLayoutBy,
            h = u.startIndex,
            c = u.dimensionsDefine,
            v = Vh[Ol(l, f)];
          if ((O(o, v), l === Ze))
            (o.getItem = e), (o.count = n), (o.fillStorage = i);
          else {
            var d = Lp(l, f);
            o.getItem = st(d, null, s, h, c);
            var y = Ip(l, f);
            o.count = st(y, null, s, h, c);
          }
        };
        var e = function (o, s) {
            (o = o - this._offset), (s = s || []);
            for (
              var u = this._data, l = this._dimSize, f = l * o, h = 0;
              h < l;
              h++
            )
              s[h] = u[f + h];
            return s;
          },
          i = function (o, s, u, l) {
            for (var f = this._data, h = this._dimSize, c = 0; c < h; c++) {
              for (
                var v = l[c],
                  d = v[0] == null ? 1 / 0 : v[0],
                  y = v[1] == null ? -1 / 0 : v[1],
                  p = s - o,
                  g = u[c],
                  _ = 0;
                _ < p;
                _++
              ) {
                var m = f[_ * h + c];
                (g[o + _] = m), m < d && (d = m), m > y && (y = m);
              }
              (v[0] = d), (v[1] = y);
            }
          },
          n = function () {
            return this._data ? this._data.length / this._dimSize : 0;
          };
        Vh =
          ((t = {}),
          (t[Ft + "_" + we] = { pure: !0, appendData: a }),
          (t[Ft + "_" + wi] = {
            pure: !0,
            appendData: function () {
              throw new Error(
                'Do not support appendData when set seriesLayoutBy: "row".'
              );
            },
          }),
          (t[he] = { pure: !0, appendData: a }),
          (t[Ce] = {
            pure: !0,
            appendData: function (o) {
              var s = this._data;
              C(o, function (u, l) {
                for (
                  var f = s[l] || (s[l] = []), h = 0;
                  h < (u || []).length;
                  h++
                )
                  f.push(u[h]);
              });
            },
          }),
          (t[xe] = { appendData: a }),
          (t[Ze] = {
            persistent: !1,
            pure: !0,
            appendData: function (o) {
              this._data = o;
            },
            clean: function () {
              (this._offset += this.count()), (this._data = null);
            },
          }),
          t);
        function a(o) {
          for (var s = 0; s < o.length; s++) this._data.push(o[s]);
        }
      })()),
      r
    );
  })(),
  Uh = function (r, t, e, i) {
    return r[i];
  },
  eS =
    ((wr = {}),
    (wr[Ft + "_" + we] = function (r, t, e, i) {
      return r[i + t];
    }),
    (wr[Ft + "_" + wi] = function (r, t, e, i, n) {
      i += t;
      for (var a = n || [], o = r, s = 0; s < o.length; s++) {
        var u = o[s];
        a[s] = u ? u[i] : null;
      }
      return a;
    }),
    (wr[he] = Uh),
    (wr[Ce] = function (r, t, e, i, n) {
      for (var a = n || [], o = 0; o < e.length; o++) {
        var s = e[o].name,
          u = r[s];
        a[o] = u ? u[i] : null;
      }
      return a;
    }),
    (wr[xe] = Uh),
    wr);
function Lp(r, t) {
  var e = eS[Ol(r, t)];
  return e;
}
var Yh = function (r, t, e) {
    return r.length;
  },
  rS =
    ((Sr = {}),
    (Sr[Ft + "_" + we] = function (r, t, e) {
      return Math.max(0, r.length - t);
    }),
    (Sr[Ft + "_" + wi] = function (r, t, e) {
      var i = r[0];
      return i ? Math.max(0, i.length - t) : 0;
    }),
    (Sr[he] = Yh),
    (Sr[Ce] = function (r, t, e) {
      var i = e[0].name,
        n = r[i];
      return n ? n.length : 0;
    }),
    (Sr[xe] = Yh),
    Sr);
function Ip(r, t) {
  var e = rS[Ol(r, t)];
  return e;
}
var xs = function (r, t, e) {
    return r[t];
  },
  iS =
    ((br = {}),
    (br[Ft] = xs),
    (br[he] = function (r, t, e) {
      return r[e];
    }),
    (br[Ce] = xs),
    (br[xe] = function (r, t, e) {
      var i = uo(r);
      return i instanceof Array ? i[t] : i;
    }),
    (br[Ze] = xs),
    br);
function Rp(r) {
  var t = iS[r];
  return t;
}
function Ol(r, t) {
  return r === Ft ? r + "_" + t : r;
}
function Ka(r, t, e) {
  if (!!r) {
    var i = r.getRawDataItem(t);
    if (i != null) {
      var n = r.getStore(),
        a = n.getSource().sourceFormat;
      if (e != null) {
        var o = r.getDimensionIndex(e),
          s = n.getDimensionProperty(o);
        return Rp(a)(i, o, s);
      } else {
        var u = i;
        return a === xe && (u = uo(i)), u;
      }
    }
  }
}
var nS = /\{@(.+?)\}/g,
  aS = (function () {
    function r() {}
    return (
      (r.prototype.getDataParams = function (t, e) {
        var i = this.getData(e),
          n = this.getRawValue(t, e),
          a = i.getRawIndex(t),
          o = i.getName(t),
          s = i.getRawDataItem(t),
          u = i.getItemVisual(t, "style"),
          l = u && u[i.getItemVisual(t, "drawType") || "fill"],
          f = u && u.stroke,
          h = this.mainType,
          c = h === "series",
          v = i.userOutput && i.userOutput.get();
        return {
          componentType: h,
          componentSubType: this.subType,
          componentIndex: this.componentIndex,
          seriesType: c ? this.subType : null,
          seriesIndex: this.seriesIndex,
          seriesId: c ? this.id : null,
          seriesName: c ? this.name : null,
          name: o,
          dataIndex: a,
          data: s,
          dataType: e,
          value: n,
          color: l,
          borderColor: f,
          dimensionNames: v ? v.fullDimensions : null,
          encode: v ? v.encode : null,
          $vars: ["seriesName", "name", "value"],
        };
      }),
      (r.prototype.getFormattedLabel = function (t, e, i, n, a, o) {
        e = e || "normal";
        var s = this.getData(i),
          u = this.getDataParams(t, i);
        if (
          (o && (u.value = o.interpolatedValue),
          n != null && k(u.value) && (u.value = u.value[n]),
          !a)
        ) {
          var l = s.getItemModel(t);
          a = l.get(
            e === "normal" ? ["label", "formatter"] : [e, "label", "formatter"]
          );
        }
        if (q(a)) return (u.status = e), (u.dimensionIndex = n), a(u);
        if (B(a)) {
          var f = cp(a, u);
          return f.replace(nS, function (h, c) {
            var v = c.length,
              d = c;
            d.charAt(0) === "[" &&
              d.charAt(v - 1) === "]" &&
              (d = +d.slice(1, v - 1));
            var y = Ka(s, t, d);
            if (o && k(o.interpolatedValue)) {
              var p = s.getDimensionIndex(d);
              p >= 0 && (y = o.interpolatedValue[p]);
            }
            return y != null ? y + "" : "";
          });
        }
      }),
      (r.prototype.getRawValue = function (t, e) {
        return Ka(this.getData(e), t);
      }),
      (r.prototype.formatTooltip = function (t, e, i) {}),
      r
    );
  })();
function $h(r) {
  var t, e;
  return F(r) ? r.type && (e = r) : (t = r), { text: t, frag: e };
}
function nn(r) {
  return new oS(r);
}
var oS = (function () {
    function r(t) {
      (t = t || {}),
        (this._reset = t.reset),
        (this._plan = t.plan),
        (this._count = t.count),
        (this._onDirty = t.onDirty),
        (this._dirty = !0);
    }
    return (
      (r.prototype.perform = function (t) {
        var e = this._upstream,
          i = t && t.skip;
        if (this._dirty && e) {
          var n = this.context;
          n.data = n.outputData = e.context.outputData;
        }
        this.__pipeline && (this.__pipeline.currentTask = this);
        var a;
        this._plan && !i && (a = this._plan(this.context));
        var o = f(this._modBy),
          s = this._modDataCount || 0,
          u = f(t && t.modBy),
          l = (t && t.modDataCount) || 0;
        (o !== u || s !== l) && (a = "reset");
        function f(_) {
          return !(_ >= 1) && (_ = 1), _;
        }
        var h;
        (this._dirty || a === "reset") &&
          ((this._dirty = !1), (h = this._doReset(i))),
          (this._modBy = u),
          (this._modDataCount = l);
        var c = t && t.step;
        if (
          (e
            ? (this._dueEnd = e._outputDueEnd)
            : (this._dueEnd = this._count ? this._count(this.context) : 1 / 0),
          this._progress)
        ) {
          var v = this._dueIndex,
            d = Math.min(c != null ? this._dueIndex + c : 1 / 0, this._dueEnd);
          if (!i && (h || v < d)) {
            var y = this._progress;
            if (k(y))
              for (var p = 0; p < y.length; p++)
                this._doProgress(y[p], v, d, u, l);
            else this._doProgress(y, v, d, u, l);
          }
          this._dueIndex = d;
          var g = this._settedOutputEnd != null ? this._settedOutputEnd : d;
          this._outputDueEnd = g;
        } else
          this._dueIndex = this._outputDueEnd =
            this._settedOutputEnd != null
              ? this._settedOutputEnd
              : this._dueEnd;
        return this.unfinished();
      }),
      (r.prototype.dirty = function () {
        (this._dirty = !0), this._onDirty && this._onDirty(this.context);
      }),
      (r.prototype._doProgress = function (t, e, i, n, a) {
        Xh.reset(e, i, n, a),
          (this._callingProgress = t),
          this._callingProgress(
            { start: e, end: i, count: i - e, next: Xh.next },
            this.context
          );
      }),
      (r.prototype._doReset = function (t) {
        (this._dueIndex = this._outputDueEnd = this._dueEnd = 0),
          (this._settedOutputEnd = null);
        var e, i;
        !t &&
          this._reset &&
          ((e = this._reset(this.context)),
          e && e.progress && ((i = e.forceFirstProgress), (e = e.progress)),
          k(e) && !e.length && (e = null)),
          (this._progress = e),
          (this._modBy = this._modDataCount = null);
        var n = this._downstream;
        return n && n.dirty(), i;
      }),
      (r.prototype.unfinished = function () {
        return this._progress && this._dueIndex < this._dueEnd;
      }),
      (r.prototype.pipe = function (t) {
        (this._downstream !== t || this._dirty) &&
          ((this._downstream = t), (t._upstream = this), t.dirty());
      }),
      (r.prototype.dispose = function () {
        this._disposed ||
          (this._upstream && (this._upstream._downstream = null),
          this._downstream && (this._downstream._upstream = null),
          (this._dirty = !1),
          (this._disposed = !0));
      }),
      (r.prototype.getUpstream = function () {
        return this._upstream;
      }),
      (r.prototype.getDownstream = function () {
        return this._downstream;
      }),
      (r.prototype.setOutputEnd = function (t) {
        this._outputDueEnd = this._settedOutputEnd = t;
      }),
      r
    );
  })(),
  Xh = (function () {
    var r,
      t,
      e,
      i,
      n,
      a = {
        reset: function (u, l, f, h) {
          (t = u),
            (r = l),
            (e = f),
            (i = h),
            (n = Math.ceil(i / e)),
            (a.next = e > 1 && i > 0 ? s : o);
        },
      };
    return a;
    function o() {
      return t < r ? t++ : null;
    }
    function s() {
      var u = (t % n) * e + Math.ceil(t / n),
        l = t >= r ? null : u < i ? u : t;
      return t++, l;
    }
  })();
function La(r, t) {
  var e = t && t.type;
  return e === "ordinal"
    ? r
    : (e === "time" && !ht(r) && r != null && r !== "-" && (r = +Re(r)),
      r == null || r === "" ? NaN : +r);
}
$({
  number: function (r) {
    return parseFloat(r);
  },
  time: function (r) {
    return +Re(r);
  },
  trim: function (r) {
    return B(r) ? ye(r) : r;
  },
});
var sS = (function () {
    function r(t, e) {
      var i = t === "desc";
      (this._resultLT = i ? 1 : -1),
        e == null && (e = i ? "min" : "max"),
        (this._incomparable = e === "min" ? -1 / 0 : 1 / 0);
    }
    return (
      (r.prototype.evaluate = function (t, e) {
        var i = ht(t) ? t : Ua(t),
          n = ht(e) ? e : Ua(e),
          a = isNaN(i),
          o = isNaN(n);
        if (
          (a && (i = this._incomparable), o && (n = this._incomparable), a && o)
        ) {
          var s = B(t),
            u = B(e);
          s && (i = u ? t : 0), u && (n = s ? e : 0);
        }
        return i < n ? this._resultLT : i > n ? -this._resultLT : 0;
      }),
      r
    );
  })(),
  uS = (function () {
    function r() {}
    return (
      (r.prototype.getRawData = function () {
        throw new Error("not supported");
      }),
      (r.prototype.getRawDataItem = function (t) {
        throw new Error("not supported");
      }),
      (r.prototype.cloneRawData = function () {}),
      (r.prototype.getDimensionInfo = function (t) {}),
      (r.prototype.cloneAllDimensionInfo = function () {}),
      (r.prototype.count = function () {}),
      (r.prototype.retrieveValue = function (t, e) {}),
      (r.prototype.retrieveValueFromItem = function (t, e) {}),
      (r.prototype.convertValue = function (t, e) {
        return La(t, e);
      }),
      r
    );
  })();
function lS(r, t) {
  var e = new uS(),
    i = r.data,
    n = (e.sourceFormat = r.sourceFormat),
    a = r.startIndex,
    o = "";
  r.seriesLayoutBy !== we && It(o);
  var s = [],
    u = {},
    l = r.dimensionsDefine;
  if (l)
    C(l, function (y, p) {
      var g = y.name,
        _ = { index: p, name: g, displayName: y.displayName };
      if ((s.push(_), g != null)) {
        var m = "";
        vi(u, g) && It(m), (u[g] = _);
      }
    });
  else for (var f = 0; f < r.dimensionsDetectedCount; f++) s.push({ index: f });
  var h = Lp(n, we);
  t.__isBuiltIn &&
    ((e.getRawDataItem = function (y) {
      return h(i, a, s, y);
    }),
    (e.getRawData = st(fS, null, r))),
    (e.cloneRawData = st(hS, null, r));
  var c = Ip(n, we);
  e.count = st(c, null, i, a, s);
  var v = Rp(n);
  e.retrieveValue = function (y, p) {
    var g = h(i, a, s, y);
    return d(g, p);
  };
  var d = (e.retrieveValueFromItem = function (y, p) {
    if (y != null) {
      var g = s[p];
      if (g) return v(y, p, g.name);
    }
  });
  return (
    (e.getDimensionInfo = st(vS, null, s, u)),
    (e.cloneAllDimensionInfo = st(cS, null, s)),
    e
  );
}
function fS(r) {
  var t = r.sourceFormat;
  if (!kl(t)) {
    var e = "";
    It(e);
  }
  return r.data;
}
function hS(r) {
  var t = r.sourceFormat,
    e = r.data;
  if (!kl(t)) {
    var i = "";
    It(i);
  }
  if (t === Ft) {
    for (var n = [], a = 0, o = e.length; a < o; a++) n.push(e[a].slice());
    return n;
  } else if (t === he) {
    for (var n = [], a = 0, o = e.length; a < o; a++) n.push(O({}, e[a]));
    return n;
  }
}
function vS(r, t, e) {
  if (e != null) {
    if (ht(e) || (!isNaN(e) && !vi(t, e))) return r[e];
    if (vi(t, e)) return t[e];
  }
}
function cS(r) {
  return X(r);
}
var Ep = $();
function dS(r) {
  r = X(r);
  var t = r.type,
    e = "";
  t || It(e);
  var i = t.split(":");
  i.length !== 2 && It(e);
  var n = !1;
  i[0] === "echarts" && ((t = i[1]), (n = !0)),
    (r.__isBuiltIn = n),
    Ep.set(t, r);
}
function pS(r, t, e) {
  var i = xt(r),
    n = i.length,
    a = "";
  n || It(a);
  for (var o = 0, s = n; o < s; o++) {
    var u = i[o];
    (t = gS(u, t)), o !== s - 1 && (t.length = Math.max(t.length, 1));
  }
  return t;
}
function gS(r, t, e, i) {
  var n = "";
  t.length || It(n), F(r) || It(n);
  var a = r.type,
    o = Ep.get(a);
  o || It(n);
  var s = U(t, function (l) {
      return lS(l, o);
    }),
    u = xt(
      o.transform({ upstream: s[0], upstreamList: s, config: X(r.config) })
    );
  return U(u, function (l, f) {
    var h = "";
    F(l) || It(h), l.data || It(h);
    var c = Mp(l.data);
    kl(c) || It(h);
    var v,
      d = t[0];
    if (d && f === 0 && !l.dimensions) {
      var y = d.startIndex;
      y && (l.data = d.data.slice(0, y).concat(l.data)),
        (v = {
          seriesLayoutBy: we,
          sourceHeader: y,
          dimensions: d.metaRawOption.dimensions,
        });
    } else v = { seriesLayoutBy: we, sourceHeader: 0, dimensions: l.dimensions };
    return Pu(l.data, v, null);
  });
}
function kl(r) {
  return r === Ft || r === he;
}
var Do = "undefined",
  yS = typeof Uint32Array === Do ? Array : Uint32Array,
  _S = typeof Uint16Array === Do ? Array : Uint16Array,
  Op = typeof Int32Array === Do ? Array : Int32Array,
  qh = typeof Float64Array === Do ? Array : Float64Array,
  kp = { float: qh, int: Op, ordinal: Array, number: Array, time: qh },
  Cs;
function Ri(r) {
  return r > 65535 ? yS : _S;
}
function Kr() {
  return [1 / 0, -1 / 0];
}
function mS(r) {
  var t = r.constructor;
  return t === Array ? r.slice() : new t(r);
}
function Zh(r, t, e, i, n) {
  var a = kp[e || "float"];
  if (n) {
    var o = r[t],
      s = o && o.length;
    if (s !== i) {
      for (var u = new a(i), l = 0; l < s; l++) u[l] = o[l];
      r[t] = u;
    }
  } else r[t] = new a(i);
}
var Au = (function () {
    function r() {
      (this._chunks = []),
        (this._rawExtent = []),
        (this._extent = []),
        (this._count = 0),
        (this._rawCount = 0),
        (this._calcDimNameToIdx = $());
    }
    return (
      (r.prototype.initData = function (t, e, i) {
        (this._provider = t),
          (this._chunks = []),
          (this._indices = null),
          (this.getRawIndex = this._getRawIdxIdentity);
        var n = t.getSource(),
          a = (this.defaultDimValueGetter = Cs[n.sourceFormat]);
        (this._dimValueGetter = i || a),
          (this._rawExtent = []),
          Pp(n),
          (this._dimensions = U(e, function (o) {
            return { type: o.type, property: o.property };
          })),
          this._initDataFromProvider(0, t.count());
      }),
      (r.prototype.getProvider = function () {
        return this._provider;
      }),
      (r.prototype.getSource = function () {
        return this._provider.getSource();
      }),
      (r.prototype.ensureCalculationDimension = function (t, e) {
        var i = this._calcDimNameToIdx,
          n = this._dimensions,
          a = i.get(t);
        if (a != null) {
          if (n[a].type === e) return a;
        } else a = n.length;
        return (
          (n[a] = { type: e }),
          i.set(t, a),
          (this._chunks[a] = new kp[e || "float"](this._rawCount)),
          (this._rawExtent[a] = Kr()),
          a
        );
      }),
      (r.prototype.collectOrdinalMeta = function (t, e) {
        var i = this._chunks[t],
          n = this._dimensions[t],
          a = this._rawExtent,
          o = n.ordinalOffset || 0,
          s = i.length;
        o === 0 && (a[t] = Kr());
        for (var u = a[t], l = o; l < s; l++) {
          var f = (i[l] = e.parseAndCollect(i[l]));
          isNaN(f) || ((u[0] = Math.min(f, u[0])), (u[1] = Math.max(f, u[1])));
        }
        (n.ordinalMeta = e), (n.ordinalOffset = s), (n.type = "ordinal");
      }),
      (r.prototype.getOrdinalMeta = function (t) {
        var e = this._dimensions[t],
          i = e.ordinalMeta;
        return i;
      }),
      (r.prototype.getDimensionProperty = function (t) {
        var e = this._dimensions[t];
        return e && e.property;
      }),
      (r.prototype.appendData = function (t) {
        var e = this._provider,
          i = this.count();
        e.appendData(t);
        var n = e.count();
        return (
          e.persistent || (n += i),
          i < n && this._initDataFromProvider(i, n, !0),
          [i, n]
        );
      }),
      (r.prototype.appendValues = function (t, e) {
        for (
          var i = this._chunks,
            n = this._dimensions,
            a = n.length,
            o = this._rawExtent,
            s = this.count(),
            u = s + Math.max(t.length, e || 0),
            l = 0;
          l < a;
          l++
        ) {
          var f = n[l];
          Zh(i, l, f.type, u, !0);
        }
        for (var h = [], c = s; c < u; c++)
          for (var v = c - s, d = 0; d < a; d++) {
            var f = n[d],
              y = Cs.arrayRows.call(this, t[v] || h, f.property, v, d);
            i[d][c] = y;
            var p = o[d];
            y < p[0] && (p[0] = y), y > p[1] && (p[1] = y);
          }
        return (this._rawCount = this._count = u), { start: s, end: u };
      }),
      (r.prototype._initDataFromProvider = function (t, e, i) {
        for (
          var n = this._provider,
            a = this._chunks,
            o = this._dimensions,
            s = o.length,
            u = this._rawExtent,
            l = U(o, function (_) {
              return _.property;
            }),
            f = 0;
          f < s;
          f++
        ) {
          var h = o[f];
          u[f] || (u[f] = Kr()), Zh(a, f, h.type, e, i);
        }
        if (n.fillStorage) n.fillStorage(t, e, a, u);
        else
          for (var c = [], v = t; v < e; v++) {
            c = n.getItem(v, c);
            for (var d = 0; d < s; d++) {
              var y = a[d],
                p = this._dimValueGetter(c, l[d], v, d);
              y[v] = p;
              var g = u[d];
              p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
            }
          }
        !n.persistent && n.clean && n.clean(),
          (this._rawCount = this._count = e),
          (this._extent = []);
      }),
      (r.prototype.count = function () {
        return this._count;
      }),
      (r.prototype.get = function (t, e) {
        if (!(e >= 0 && e < this._count)) return NaN;
        var i = this._chunks[t];
        return i ? i[this.getRawIndex(e)] : NaN;
      }),
      (r.prototype.getValues = function (t, e) {
        var i = [],
          n = [];
        if (e == null) {
          (e = t), (t = []);
          for (var a = 0; a < this._dimensions.length; a++) n.push(a);
        } else n = t;
        for (var a = 0, o = n.length; a < o; a++) i.push(this.get(n[a], e));
        return i;
      }),
      (r.prototype.getByRawIndex = function (t, e) {
        if (!(e >= 0 && e < this._rawCount)) return NaN;
        var i = this._chunks[t];
        return i ? i[e] : NaN;
      }),
      (r.prototype.getSum = function (t) {
        var e = this._chunks[t],
          i = 0;
        if (e)
          for (var n = 0, a = this.count(); n < a; n++) {
            var o = this.get(t, n);
            isNaN(o) || (i += o);
          }
        return i;
      }),
      (r.prototype.getMedian = function (t) {
        var e = [];
        this.each([t], function (a) {
          isNaN(a) || e.push(a);
        });
        var i = e.sort(function (a, o) {
            return a - o;
          }),
          n = this.count();
        return n === 0
          ? 0
          : n % 2 === 1
          ? i[(n - 1) / 2]
          : (i[n / 2] + i[n / 2 - 1]) / 2;
      }),
      (r.prototype.indexOfRawIndex = function (t) {
        if (t >= this._rawCount || t < 0) return -1;
        if (!this._indices) return t;
        var e = this._indices,
          i = e[t];
        if (i != null && i < this._count && i === t) return t;
        for (var n = 0, a = this._count - 1; n <= a; ) {
          var o = ((n + a) / 2) | 0;
          if (e[o] < t) n = o + 1;
          else if (e[o] > t) a = o - 1;
          else return o;
        }
        return -1;
      }),
      (r.prototype.indicesOfNearest = function (t, e, i) {
        var n = this._chunks,
          a = n[t],
          o = [];
        if (!a) return o;
        i == null && (i = 1 / 0);
        for (
          var s = 1 / 0, u = -1, l = 0, f = 0, h = this.count();
          f < h;
          f++
        ) {
          var c = this.getRawIndex(f),
            v = e - a[c],
            d = Math.abs(v);
          d <= i &&
            ((d < s || (d === s && v >= 0 && u < 0)) &&
              ((s = d), (u = v), (l = 0)),
            v === u && (o[l++] = f));
        }
        return (o.length = l), o;
      }),
      (r.prototype.getIndices = function () {
        var t,
          e = this._indices;
        if (e) {
          var i = e.constructor,
            n = this._count;
          if (i === Array) {
            t = new i(n);
            for (var a = 0; a < n; a++) t[a] = e[a];
          } else t = new i(e.buffer, 0, n);
        } else {
          var i = Ri(this._rawCount);
          t = new i(this.count());
          for (var a = 0; a < t.length; a++) t[a] = a;
        }
        return t;
      }),
      (r.prototype.filter = function (t, e) {
        if (!this._count) return this;
        for (
          var i = this.clone(),
            n = i.count(),
            a = Ri(i._rawCount),
            o = new a(n),
            s = [],
            u = t.length,
            l = 0,
            f = t[0],
            h = i._chunks,
            c = 0;
          c < n;
          c++
        ) {
          var v = void 0,
            d = i.getRawIndex(c);
          if (u === 0) v = e(c);
          else if (u === 1) {
            var y = h[f][d];
            v = e(y, c);
          } else {
            for (var p = 0; p < u; p++) s[p] = h[t[p]][d];
            (s[p] = c), (v = e.apply(null, s));
          }
          v && (o[l++] = d);
        }
        return (
          l < n && (i._indices = o),
          (i._count = l),
          (i._extent = []),
          i._updateGetRawIdx(),
          i
        );
      }),
      (r.prototype.selectRange = function (t) {
        var e = this.clone(),
          i = e._count;
        if (!i) return this;
        var n = ft(t),
          a = n.length;
        if (!a) return this;
        var o = e.count(),
          s = Ri(e._rawCount),
          u = new s(o),
          l = 0,
          f = n[0],
          h = t[f][0],
          c = t[f][1],
          v = e._chunks,
          d = !1;
        if (!e._indices) {
          var y = 0;
          if (a === 1) {
            for (var p = v[n[0]], g = 0; g < i; g++) {
              var _ = p[g];
              ((_ >= h && _ <= c) || isNaN(_)) && (u[l++] = y), y++;
            }
            d = !0;
          } else if (a === 2) {
            for (
              var p = v[n[0]],
                m = v[n[1]],
                w = t[n[1]][0],
                b = t[n[1]][1],
                g = 0;
              g < i;
              g++
            ) {
              var _ = p[g],
                S = m[g];
              ((_ >= h && _ <= c) || isNaN(_)) &&
                ((S >= w && S <= b) || isNaN(S)) &&
                (u[l++] = y),
                y++;
            }
            d = !0;
          }
        }
        if (!d)
          if (a === 1)
            for (var g = 0; g < o; g++) {
              var D = e.getRawIndex(g),
                _ = v[n[0]][D];
              ((_ >= h && _ <= c) || isNaN(_)) && (u[l++] = D);
            }
          else
            for (var g = 0; g < o; g++) {
              for (var T = !0, D = e.getRawIndex(g), x = 0; x < a; x++) {
                var M = n[x],
                  _ = v[M][D];
                (_ < t[M][0] || _ > t[M][1]) && (T = !1);
              }
              T && (u[l++] = e.getRawIndex(g));
            }
        return (
          l < o && (e._indices = u),
          (e._count = l),
          (e._extent = []),
          e._updateGetRawIdx(),
          e
        );
      }),
      (r.prototype.map = function (t, e) {
        var i = this.clone(t);
        return this._updateDims(i, t, e), i;
      }),
      (r.prototype.modify = function (t, e) {
        this._updateDims(this, t, e);
      }),
      (r.prototype._updateDims = function (t, e, i) {
        for (
          var n = t._chunks,
            a = [],
            o = e.length,
            s = t.count(),
            u = [],
            l = t._rawExtent,
            f = 0;
          f < e.length;
          f++
        )
          l[e[f]] = Kr();
        for (var h = 0; h < s; h++) {
          for (var c = t.getRawIndex(h), v = 0; v < o; v++) u[v] = n[e[v]][c];
          u[o] = h;
          var d = i && i.apply(null, u);
          if (d != null) {
            typeof d != "object" && ((a[0] = d), (d = a));
            for (var f = 0; f < d.length; f++) {
              var y = e[f],
                p = d[f],
                g = l[y],
                _ = n[y];
              _ && (_[c] = p), p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
            }
          }
        }
      }),
      (r.prototype.lttbDownSample = function (t, e) {
        var i = this.clone([t], !0),
          n = i._chunks,
          a = n[t],
          o = this.count(),
          s = 0,
          u = Math.floor(1 / e),
          l = this.getRawIndex(0),
          f,
          h,
          c,
          v = new (Ri(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
        v[s++] = l;
        for (var d = 1; d < o - 1; d += u) {
          for (
            var y = Math.min(d + u, o - 1),
              p = Math.min(d + u * 2, o),
              g = (p + y) / 2,
              _ = 0,
              m = y;
            m < p;
            m++
          ) {
            var w = this.getRawIndex(m),
              b = a[w];
            isNaN(b) || (_ += b);
          }
          _ /= p - y;
          var S = d,
            D = Math.min(d + u, o),
            T = d - 1,
            x = a[l];
          (f = -1), (c = S);
          for (var M = -1, P = 0, m = S; m < D; m++) {
            var w = this.getRawIndex(m),
              b = a[w];
            if (isNaN(b)) {
              P++, M < 0 && (M = w);
              continue;
            }
            (h = Math.abs((T - g) * (b - x) - (T - m) * (_ - x))),
              h > f && ((f = h), (c = w));
          }
          P > 0 &&
            P < D - S &&
            ((v[s++] = Math.min(M, c)), (c = Math.max(M, c))),
            (v[s++] = c),
            (l = c);
        }
        return (
          (v[s++] = this.getRawIndex(o - 1)),
          (i._count = s),
          (i._indices = v),
          (i.getRawIndex = this._getRawIdx),
          i
        );
      }),
      (r.prototype.downSample = function (t, e, i, n) {
        for (
          var a = this.clone([t], !0),
            o = a._chunks,
            s = [],
            u = Math.floor(1 / e),
            l = o[t],
            f = this.count(),
            h = (a._rawExtent[t] = Kr()),
            c = new (Ri(this._rawCount))(Math.ceil(f / u)),
            v = 0,
            d = 0;
          d < f;
          d += u
        ) {
          u > f - d && ((u = f - d), (s.length = u));
          for (var y = 0; y < u; y++) {
            var p = this.getRawIndex(d + y);
            s[y] = l[p];
          }
          var g = i(s),
            _ = this.getRawIndex(Math.min(d + n(s, g) || 0, f - 1));
          (l[_] = g),
            g < h[0] && (h[0] = g),
            g > h[1] && (h[1] = g),
            (c[v++] = _);
        }
        return (a._count = v), (a._indices = c), a._updateGetRawIdx(), a;
      }),
      (r.prototype.each = function (t, e) {
        if (!!this._count)
          for (
            var i = t.length, n = this._chunks, a = 0, o = this.count();
            a < o;
            a++
          ) {
            var s = this.getRawIndex(a);
            switch (i) {
              case 0:
                e(a);
                break;
              case 1:
                e(n[t[0]][s], a);
                break;
              case 2:
                e(n[t[0]][s], n[t[1]][s], a);
                break;
              default:
                for (var u = 0, l = []; u < i; u++) l[u] = n[t[u]][s];
                (l[u] = a), e.apply(null, l);
            }
          }
      }),
      (r.prototype.getDataExtent = function (t) {
        var e = this._chunks[t],
          i = Kr();
        if (!e) return i;
        var n = this.count(),
          a = !this._indices,
          o;
        if (a) return this._rawExtent[t].slice();
        if (((o = this._extent[t]), o)) return o.slice();
        o = i;
        for (var s = o[0], u = o[1], l = 0; l < n; l++) {
          var f = this.getRawIndex(l),
            h = e[f];
          h < s && (s = h), h > u && (u = h);
        }
        return (o = [s, u]), (this._extent[t] = o), o;
      }),
      (r.prototype.getRawDataItem = function (t) {
        var e = this.getRawIndex(t);
        if (this._provider.persistent) return this._provider.getItem(e);
        for (var i = [], n = this._chunks, a = 0; a < n.length; a++)
          i.push(n[a][e]);
        return i;
      }),
      (r.prototype.clone = function (t, e) {
        var i = new r(),
          n = this._chunks,
          a =
            t &&
            Ke(
              t,
              function (s, u) {
                return (s[u] = !0), s;
              },
              {}
            );
        if (a)
          for (var o = 0; o < n.length; o++)
            i._chunks[o] = a[o] ? mS(n[o]) : n[o];
        else i._chunks = n;
        return (
          this._copyCommonProps(i),
          e || (i._indices = this._cloneIndices()),
          i._updateGetRawIdx(),
          i
        );
      }),
      (r.prototype._copyCommonProps = function (t) {
        (t._count = this._count),
          (t._rawCount = this._rawCount),
          (t._provider = this._provider),
          (t._dimensions = this._dimensions),
          (t._extent = X(this._extent)),
          (t._rawExtent = X(this._rawExtent));
      }),
      (r.prototype._cloneIndices = function () {
        if (this._indices) {
          var t = this._indices.constructor,
            e = void 0;
          if (t === Array) {
            var i = this._indices.length;
            e = new t(i);
            for (var n = 0; n < i; n++) e[n] = this._indices[n];
          } else e = new t(this._indices);
          return e;
        }
        return null;
      }),
      (r.prototype._getRawIdxIdentity = function (t) {
        return t;
      }),
      (r.prototype._getRawIdx = function (t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1;
      }),
      (r.prototype._updateGetRawIdx = function () {
        this.getRawIndex = this._indices
          ? this._getRawIdx
          : this._getRawIdxIdentity;
      }),
      (r.internalField = (function () {
        function t(e, i, n, a) {
          return La(e[a], this._dimensions[a]);
        }
        Cs = {
          arrayRows: t,
          objectRows: function (e, i, n, a) {
            return La(e[i], this._dimensions[a]);
          },
          keyedColumns: t,
          original: function (e, i, n, a) {
            var o = e && (e.value == null ? e : e.value);
            return La(o instanceof Array ? o[a] : o, this._dimensions[a]);
          },
          typedArray: function (e, i, n, a) {
            return e[a];
          },
        };
      })()),
      r
    );
  })(),
  Bp = (function () {
    function r(t) {
      (this._sourceList = []),
        (this._storeList = []),
        (this._upstreamSignList = []),
        (this._versionSignBase = 0),
        (this._dirty = !0),
        (this._sourceHost = t);
    }
    return (
      (r.prototype.dirty = function () {
        this._setLocalSource([], []),
          (this._storeList = []),
          (this._dirty = !0);
      }),
      (r.prototype._setLocalSource = function (t, e) {
        (this._sourceList = t),
          (this._upstreamSignList = e),
          this._versionSignBase++,
          this._versionSignBase > 9e10 && (this._versionSignBase = 0);
      }),
      (r.prototype._getVersionSign = function () {
        return this._sourceHost.uid + "_" + this._versionSignBase;
      }),
      (r.prototype.prepareSource = function () {
        this._isDirty() && (this._createSource(), (this._dirty = !1));
      }),
      (r.prototype._createSource = function () {
        this._setLocalSource([], []);
        var t = this._sourceHost,
          e = this._getUpstreamSourceManagers(),
          i = !!e.length,
          n,
          a;
        if (ea(t)) {
          var o = t,
            s = void 0,
            u = void 0,
            l = void 0;
          if (i) {
            var f = e[0];
            f.prepareSource(),
              (l = f.getSource()),
              (s = l.data),
              (u = l.sourceFormat),
              (a = [f._getVersionSign()]);
          } else (s = o.get("data", !0)), (u = Wt(s) ? Ze : xe), (a = []);
          var h = this._getSourceMetaRawOption() || {},
            c = (l && l.metaRawOption) || {},
            v = K(h.seriesLayoutBy, c.seriesLayoutBy) || null,
            d = K(h.sourceHeader, c.sourceHeader),
            y = K(h.dimensions, c.dimensions),
            p = v !== c.seriesLayoutBy || !!d != !!c.sourceHeader || y;
          n = p
            ? [Pu(s, { seriesLayoutBy: v, sourceHeader: d, dimensions: y }, u)]
            : [];
        } else {
          var g = t;
          if (i) {
            var _ = this._applyTransform(e);
            (n = _.sourceList), (a = _.upstreamSignList);
          } else {
            var m = g.get("source", !0);
            (n = [Pu(m, this._getSourceMetaRawOption(), null)]), (a = []);
          }
        }
        this._setLocalSource(n, a);
      }),
      (r.prototype._applyTransform = function (t) {
        var e = this._sourceHost,
          i = e.get("transform", !0),
          n = e.get("fromTransformResult", !0);
        if (n != null) {
          var a = "";
          t.length !== 1 && Qh(a);
        }
        var o,
          s = [],
          u = [];
        return (
          C(t, function (l) {
            l.prepareSource();
            var f = l.getSource(n || 0),
              h = "";
            n != null && !f && Qh(h), s.push(f), u.push(l._getVersionSign());
          }),
          i
            ? (o = pS(i, s, { datasetIndex: e.componentIndex }))
            : n != null && (o = [Jw(s[0])]),
          { sourceList: o, upstreamSignList: u }
        );
      }),
      (r.prototype._isDirty = function () {
        if (this._dirty) return !0;
        for (
          var t = this._getUpstreamSourceManagers(), e = 0;
          e < t.length;
          e++
        ) {
          var i = t[e];
          if (i._isDirty() || this._upstreamSignList[e] !== i._getVersionSign())
            return !0;
        }
      }),
      (r.prototype.getSource = function (t) {
        t = t || 0;
        var e = this._sourceList[t];
        if (!e) {
          var i = this._getUpstreamSourceManagers();
          return i[0] && i[0].getSource(t);
        }
        return e;
      }),
      (r.prototype.getSharedDataStore = function (t) {
        var e = t.makeStoreSchema();
        return this._innerGetDataStore(e.dimensions, t.source, e.hash);
      }),
      (r.prototype._innerGetDataStore = function (t, e, i) {
        var n = 0,
          a = this._storeList,
          o = a[n];
        o || (o = a[n] = {});
        var s = o[i];
        if (!s) {
          var u = this._getUpstreamSourceManagers()[0];
          ea(this._sourceHost) && u
            ? (s = u._innerGetDataStore(t, e, i))
            : ((s = new Au()), s.initData(new Ap(e, t.length), t)),
            (o[i] = s);
        }
        return s;
      }),
      (r.prototype._getUpstreamSourceManagers = function () {
        var t = this._sourceHost;
        if (ea(t)) {
          var e = Il(t);
          return e ? [e.getSourceManager()] : [];
        } else
          return U(Cw(t), function (i) {
            return i.getSourceManager();
          });
      }),
      (r.prototype._getSourceMetaRawOption = function () {
        var t = this._sourceHost,
          e,
          i,
          n;
        if (ea(t))
          (e = t.get("seriesLayoutBy", !0)),
            (i = t.get("sourceHeader", !0)),
            (n = t.get("dimensions", !0));
        else if (!this._getUpstreamSourceManagers().length) {
          var a = t;
          (e = a.get("seriesLayoutBy", !0)),
            (i = a.get("sourceHeader", !0)),
            (n = a.get("dimensions", !0));
        }
        return { seriesLayoutBy: e, sourceHeader: i, dimensions: n };
      }),
      r
    );
  })();
function Kh(r) {
  var t = r.option.transform;
  t && Fa(r.option.transform);
}
function ea(r) {
  return r.mainType === "series";
}
function Qh(r) {
  throw new Error(r);
}
var Fp = "line-height:1";
function Np(r, t) {
  var e = r.color || "#6e7079",
    i = r.fontSize || 12,
    n = r.fontWeight || "400",
    a = r.color || "#464646",
    o = r.fontSize || 14,
    s = r.fontWeight || "900";
  return t === "html"
    ? {
        nameStyle:
          "font-size:" +
          Ht(i + "") +
          "px;color:" +
          Ht(e) +
          ";font-weight:" +
          Ht(n + ""),
        valueStyle:
          "font-size:" +
          Ht(o + "") +
          "px;color:" +
          Ht(a) +
          ";font-weight:" +
          Ht(s + ""),
      }
    : {
        nameStyle: { fontSize: i, fill: e, fontWeight: n },
        valueStyle: { fontSize: o, fill: a, fontWeight: s },
      };
}
var wS = [0, 10, 20, 30],
  SS = [
    "",
    `
`,
    `

`,
    `


`,
  ];
function wn(r, t) {
  return (t.type = r), t;
}
function Lu(r) {
  return r.type === "section";
}
function zp(r) {
  return Lu(r) ? bS : TS;
}
function Hp(r) {
  if (Lu(r)) {
    var t = 0,
      e = r.blocks.length,
      i = e > 1 || (e > 0 && !r.noHeader);
    return (
      C(r.blocks, function (n) {
        var a = Hp(n);
        a >= t && (t = a + +(i && (!a || (Lu(n) && !n.noHeader))));
      }),
      t
    );
  }
  return 0;
}
function bS(r, t, e, i) {
  var n = t.noHeader,
    a = xS(Hp(t)),
    o = [],
    s = t.blocks || [];
  Se(!s || k(s)), (s = s || []);
  var u = r.orderMode;
  if (t.sortBlocks && u) {
    s = s.slice();
    var l = { valueAsc: "asc", valueDesc: "desc" };
    if (vi(l, u)) {
      var f = new sS(l[u], null);
      s.sort(function (d, y) {
        return f.evaluate(d.sortParam, y.sortParam);
      });
    } else u === "seriesDesc" && s.reverse();
  }
  C(s, function (d, y) {
    var p = t.valueFormatter,
      g = zp(d)(
        p ? O(O({}, r), { valueFormatter: p }) : r,
        d,
        y > 0 ? a.html : 0,
        i
      );
    g != null && o.push(g);
  });
  var h =
    r.renderMode === "richText"
      ? o.join(a.richText)
      : Iu(o.join(""), n ? e : a.html);
  if (n) return h;
  var c = Du(t.header, "ordinal", r.useUTC),
    v = Np(i, r.renderMode).nameStyle;
  return r.renderMode === "richText"
    ? Gp(r, c, v) + a.richText + h
    : Iu('<div style="' + v + ";" + Fp + ';">' + Ht(c) + "</div>" + h, e);
}
function TS(r, t, e, i) {
  var n = r.renderMode,
    a = t.noName,
    o = t.noValue,
    s = !t.markerType,
    u = t.name,
    l = r.useUTC,
    f =
      t.valueFormatter ||
      r.valueFormatter ||
      function (w) {
        return (
          (w = k(w) ? w : [w]),
          U(w, function (b, S) {
            return Du(b, k(v) ? v[S] : v, l);
          })
        );
      };
  if (!(a && o)) {
    var h = s
        ? ""
        : r.markupStyleCreator.makeTooltipMarker(
            t.markerType,
            t.markerColor || "#333",
            n
          ),
      c = a ? "" : Du(u, "ordinal", l),
      v = t.valueType,
      d = o ? [] : f(t.value),
      y = !s || !a,
      p = !s && a,
      g = Np(i, n),
      _ = g.nameStyle,
      m = g.valueStyle;
    return n === "richText"
      ? (s ? "" : h) + (a ? "" : Gp(r, c, _)) + (o ? "" : MS(r, d, y, p, m))
      : Iu(
          (s ? "" : h) + (a ? "" : CS(c, !s, _)) + (o ? "" : DS(d, y, p, m)),
          e
        );
  }
}
function Jh(r, t, e, i, n, a) {
  if (!!r) {
    var o = zp(r),
      s = {
        useUTC: n,
        renderMode: e,
        orderMode: i,
        markupStyleCreator: t,
        valueFormatter: r.valueFormatter,
      };
    return o(s, r, 0, a);
  }
}
function xS(r) {
  return { html: wS[r], richText: SS[r] };
}
function Iu(r, t) {
  var e = '<div style="clear:both"></div>',
    i = "margin: " + t + "px 0 0";
  return '<div style="' + i + ";" + Fp + ';">' + r + e + "</div>";
}
function CS(r, t, e) {
  var i = t ? "margin-left:2px" : "";
  return '<span style="' + e + ";" + i + '">' + Ht(r) + "</span>";
}
function DS(r, t, e, i) {
  var n = e ? "10px" : "20px",
    a = t ? "float:right;margin-left:" + n : "";
  return (
    (r = k(r) ? r : [r]),
    '<span style="' +
      a +
      ";" +
      i +
      '">' +
      U(r, function (o) {
        return Ht(o);
      }).join("&nbsp;&nbsp;") +
      "</span>"
  );
}
function Gp(r, t, e) {
  return r.markupStyleCreator.wrapRichTextStyle(t, e);
}
function MS(r, t, e, i, n) {
  var a = [n],
    o = i ? 10 : 20;
  return (
    e && a.push({ padding: [0, 0, 0, o], align: "right" }),
    r.markupStyleCreator.wrapRichTextStyle(k(t) ? t.join("  ") : t, a)
  );
}
function PS(r, t) {
  var e = r.getData().getItemVisual(t, "style"),
    i = e[r.visualDrawType];
  return yn(i);
}
function Vp(r, t) {
  var e = r.get("padding");
  return e != null ? e : t === "richText" ? [8, 10] : 10;
}
var Ds = (function () {
  function r() {
    (this.richTextStyles = {}), (this._nextStyleNameId = qc());
  }
  return (
    (r.prototype._generateStyleName = function () {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    }),
    (r.prototype.makeTooltipMarker = function (t, e, i) {
      var n = i === "richText" ? this._generateStyleName() : null,
        a = yw({ color: e, type: t, renderMode: i, markerId: n });
      return B(a) ? a : ((this.richTextStyles[n] = a.style), a.content);
    }),
    (r.prototype.wrapRichTextStyle = function (t, e) {
      var i = {};
      k(e)
        ? C(e, function (a) {
            return O(i, a);
          })
        : O(i, e);
      var n = this._generateStyleName();
      return (this.richTextStyles[n] = i), "{" + n + "|" + t + "}";
    }),
    r
  );
})();
function AS(r) {
  var t = r.series,
    e = r.dataIndex,
    i = r.multipleSeries,
    n = t.getData(),
    a = n.mapDimensionsAll("defaultedTooltip"),
    o = a.length,
    s = t.getRawValue(e),
    u = k(s),
    l = PS(t, e),
    f,
    h,
    c,
    v;
  if (o > 1 || (u && !o)) {
    var d = LS(s, t, e, a, l);
    (f = d.inlineValues),
      (h = d.inlineValueTypes),
      (c = d.blocks),
      (v = d.inlineValues[0]);
  } else if (o) {
    var y = n.getDimensionInfo(a[0]);
    (v = f = Ka(n, e, a[0])), (h = y.type);
  } else v = f = u ? s[0] : s;
  var p = ll(t),
    g = (p && t.name) || "",
    _ = n.getName(e),
    m = i ? g : _;
  return wn("section", {
    header: g,
    noHeader: i || !p,
    sortParam: v,
    blocks: [
      wn("nameValue", {
        markerType: "item",
        markerColor: l,
        name: m,
        noName: !ye(m),
        value: f,
        valueType: h,
      }),
    ].concat(c || []),
  });
}
function LS(r, t, e, i, n) {
  var a = t.getData(),
    o = Ke(
      r,
      function (h, c, v) {
        var d = a.getDimensionInfo(v);
        return (h = h || (d && d.tooltip !== !1 && d.displayName != null));
      },
      !1
    ),
    s = [],
    u = [],
    l = [];
  i.length
    ? C(i, function (h) {
        f(Ka(a, e, h), h);
      })
    : C(r, f);
  function f(h, c) {
    var v = a.getDimensionInfo(c);
    !v ||
      v.otherDims.tooltip === !1 ||
      (o
        ? l.push(
            wn("nameValue", {
              markerType: "subItem",
              markerColor: n,
              name: v.displayName,
              value: h,
              valueType: v.type,
            })
          )
        : (s.push(h), u.push(v.type)));
  }
  return { inlineValues: s, inlineValueTypes: u, blocks: l };
}
var He = yt();
function ra(r, t) {
  return r.getName(t) || r.getId(t);
}
var IS = "__universalTransitionEnabled",
  Mo = (function (r) {
    rt(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e._selectedDataIndicesMap = {}), e;
    }
    return (
      (t.prototype.init = function (e, i, n) {
        (this.seriesIndex = this.componentIndex),
          (this.dataTask = nn({ count: ES, reset: OS })),
          (this.dataTask.context = { model: this }),
          this.mergeDefaultAndTheme(e, n);
        var a = (He(this).sourceManager = new Bp(this));
        a.prepareSource();
        var o = this.getInitialData(e, n);
        tv(o, this),
          (this.dataTask.context.data = o),
          (He(this).dataBeforeProcessed = o),
          jh(this),
          this._initSelectedMapFromData(o);
      }),
      (t.prototype.mergeDefaultAndTheme = function (e, i) {
        var n = Za(this),
          a = n ? Ll(e) : {},
          o = this.subType;
        ot.hasClass(o) && (o += "Series"),
          ut(e, i.getTheme().get(this.subType)),
          ut(e, this.getDefaultOption()),
          kf(e, "label", ["show"]),
          this.fillDataTextStyle(e.data),
          n && _n(e, a, n);
      }),
      (t.prototype.mergeOption = function (e, i) {
        (e = ut(this.option, e, !0)), this.fillDataTextStyle(e.data);
        var n = Za(this);
        n && _n(this.option, e, n);
        var a = He(this).sourceManager;
        a.dirty(), a.prepareSource();
        var o = this.getInitialData(e, i);
        tv(o, this),
          this.dataTask.dirty(),
          (this.dataTask.context.data = o),
          (He(this).dataBeforeProcessed = o),
          jh(this),
          this._initSelectedMapFromData(o);
      }),
      (t.prototype.fillDataTextStyle = function (e) {
        if (e && !Wt(e))
          for (var i = ["show"], n = 0; n < e.length; n++)
            e[n] && e[n].label && kf(e[n], "label", i);
      }),
      (t.prototype.getInitialData = function (e, i) {}),
      (t.prototype.appendData = function (e) {
        var i = this.getRawData();
        i.appendData(e.data);
      }),
      (t.prototype.getData = function (e) {
        var i = Ru(this);
        if (i) {
          var n = i.context.data;
          return e == null ? n : n.getLinkedData(e);
        } else return He(this).data;
      }),
      (t.prototype.getAllData = function () {
        var e = this.getData();
        return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{ data: e }];
      }),
      (t.prototype.setData = function (e) {
        var i = Ru(this);
        if (i) {
          var n = i.context;
          (n.outputData = e), i !== this.dataTask && (n.data = e);
        }
        He(this).data = e;
      }),
      (t.prototype.getEncode = function () {
        var e = this.get("encode", !0);
        if (e) return $(e);
      }),
      (t.prototype.getSourceManager = function () {
        return He(this).sourceManager;
      }),
      (t.prototype.getSource = function () {
        return this.getSourceManager().getSource();
      }),
      (t.prototype.getRawData = function () {
        return He(this).dataBeforeProcessed;
      }),
      (t.prototype.getColorBy = function () {
        var e = this.get("colorBy");
        return e || "series";
      }),
      (t.prototype.isColorBySeries = function () {
        return this.getColorBy() === "series";
      }),
      (t.prototype.getBaseAxis = function () {
        var e = this.coordinateSystem;
        return e && e.getBaseAxis && e.getBaseAxis();
      }),
      (t.prototype.formatTooltip = function (e, i, n) {
        return AS({ series: this, dataIndex: e, multipleSeries: i });
      }),
      (t.prototype.isAnimationEnabled = function () {
        var e = this.ecModel;
        if (W.node && !(e && e.ssr)) return !1;
        var i = this.getShallow("animation");
        return (
          i &&
            this.getData().count() > this.getShallow("animationThreshold") &&
            (i = !1),
          !!i
        );
      }),
      (t.prototype.restoreData = function () {
        this.dataTask.dirty();
      }),
      (t.prototype.getColorFromPalette = function (e, i, n) {
        var a = this.ecModel,
          o = Rl.prototype.getColorFromPalette.call(this, e, i, n);
        return o || (o = a.getColorFromPalette(e, i, n)), o;
      }),
      (t.prototype.coordDimToDataDim = function (e) {
        return this.getRawData().mapDimensionsAll(e);
      }),
      (t.prototype.getProgressive = function () {
        return this.get("progressive");
      }),
      (t.prototype.getProgressiveThreshold = function () {
        return this.get("progressiveThreshold");
      }),
      (t.prototype.select = function (e, i) {
        this._innerSelect(this.getData(i), e);
      }),
      (t.prototype.unselect = function (e, i) {
        var n = this.option.selectedMap;
        if (!!n) {
          var a = this.option.selectedMode,
            o = this.getData(i);
          if (a === "series" || n === "all") {
            (this.option.selectedMap = {}), (this._selectedDataIndicesMap = {});
            return;
          }
          for (var s = 0; s < e.length; s++) {
            var u = e[s],
              l = ra(o, u);
            (n[l] = !1), (this._selectedDataIndicesMap[l] = -1);
          }
        }
      }),
      (t.prototype.toggleSelect = function (e, i) {
        for (var n = [], a = 0; a < e.length; a++)
          (n[0] = e[a]),
            this.isSelected(e[a], i) ? this.unselect(n, i) : this.select(n, i);
      }),
      (t.prototype.getSelectedDataIndices = function () {
        if (this.option.selectedMap === "all")
          return [].slice.call(this.getData().getIndices());
        for (
          var e = this._selectedDataIndicesMap, i = ft(e), n = [], a = 0;
          a < i.length;
          a++
        ) {
          var o = e[i[a]];
          o >= 0 && n.push(o);
        }
        return n;
      }),
      (t.prototype.isSelected = function (e, i) {
        var n = this.option.selectedMap;
        if (!n) return !1;
        var a = this.getData(i);
        return (
          (n === "all" || n[ra(a, e)]) &&
          !a.getItemModel(e).get(["select", "disabled"])
        );
      }),
      (t.prototype.isUniversalTransitionEnabled = function () {
        if (this[IS]) return !0;
        var e = this.option.universalTransition;
        return e ? (e === !0 ? !0 : e && e.enabled) : !1;
      }),
      (t.prototype._innerSelect = function (e, i) {
        var n,
          a,
          o = this.option,
          s = o.selectedMode,
          u = i.length;
        if (!(!s || !u)) {
          if (s === "series") o.selectedMap = "all";
          else if (s === "multiple") {
            F(o.selectedMap) || (o.selectedMap = {});
            for (var l = o.selectedMap, f = 0; f < u; f++) {
              var h = i[f],
                c = ra(e, h);
              (l[c] = !0), (this._selectedDataIndicesMap[c] = e.getRawIndex(h));
            }
          } else if (s === "single" || s === !0) {
            var v = i[u - 1],
              c = ra(e, v);
            (o.selectedMap = ((n = {}), (n[c] = !0), n)),
              (this._selectedDataIndicesMap =
                ((a = {}), (a[c] = e.getRawIndex(v)), a));
          }
        }
      }),
      (t.prototype._initSelectedMapFromData = function (e) {
        if (!this.option.selectedMap) {
          var i = [];
          e.hasItemOption &&
            e.each(function (n) {
              var a = e.getRawDataItem(n);
              a && a.selected && i.push(n);
            }),
            i.length > 0 && this._innerSelect(e, i);
        }
      }),
      (t.registerClass = function (e) {
        return ot.registerClass(e);
      }),
      (t.protoInitialize = (function () {
        var e = t.prototype;
        (e.type = "series.__base__"),
          (e.seriesIndex = 0),
          (e.ignoreStyleOnData = !1),
          (e.hasSymbolVisual = !1),
          (e.defaultSymbol = "circle"),
          (e.visualStyleAccessPath = "itemStyle"),
          (e.visualDrawType = "fill");
      })()),
      t
    );
  })(ot);
Oe(Mo, aS);
Oe(Mo, Rl);
ed(Mo, ot);
function jh(r) {
  var t = r.name;
  ll(r) || (r.name = RS(r) || t);
}
function RS(r) {
  var t = r.getRawData(),
    e = t.mapDimensionsAll("seriesName"),
    i = [];
  return (
    C(e, function (n) {
      var a = t.getDimensionInfo(n);
      a.displayName && i.push(a.displayName);
    }),
    i.join(" ")
  );
}
function ES(r) {
  return r.model.getRawData().count();
}
function OS(r) {
  var t = r.model;
  return t.setData(t.getRawData().cloneShallow()), kS;
}
function kS(r, t) {
  t.outputData &&
    r.end > t.outputData.count() &&
    t.model.getRawData().cloneShallow(t.outputData);
}
function tv(r, t) {
  C(Dy(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function (e) {
    r.wrapMethod(e, gt(BS, t));
  });
}
function BS(r, t) {
  var e = Ru(r);
  return e && e.setOutputEnd((t || this).count()), t;
}
function Ru(r) {
  var t = (r.ecModel || {}).scheduler,
    e = t && t.getPipeline(r.uid);
  if (e) {
    var i = e.currentTask;
    if (i) {
      var n = i.agentStubMap;
      n && (i = n.get(r.uid));
    }
    return i;
  }
}
var Qa = Mo,
  Bl = (function () {
    function r() {
      (this.group = new be()), (this.uid = _o("viewComponent"));
    }
    return (
      (r.prototype.init = function (t, e) {}),
      (r.prototype.render = function (t, e, i, n) {}),
      (r.prototype.dispose = function (t, e) {}),
      (r.prototype.updateView = function (t, e, i, n) {}),
      (r.prototype.updateLayout = function (t, e, i, n) {}),
      (r.prototype.updateVisual = function (t, e, i, n) {}),
      (r.prototype.toggleBlurSeries = function (t, e, i) {}),
      (r.prototype.eachRendered = function (t) {
        var e = this.group;
        e && e.traverse(t);
      }),
      r
    );
  })();
hl(Bl);
fo(Bl);
var Ee = Bl;
function Wp() {
  var r = yt();
  return function (t) {
    var e = r(t),
      i = t.pipelineContext,
      n = !!e.large,
      a = !!e.progressiveRender,
      o = (e.large = !!(i && i.large)),
      s = (e.progressiveRender = !!(i && i.progressiveRender));
    return (n !== o || a !== s) && "reset";
  };
}
var Up = yt(),
  FS = Wp(),
  Fl = (function () {
    function r() {
      (this.group = new be()),
        (this.uid = _o("viewChart")),
        (this.renderTask = nn({ plan: NS, reset: zS })),
        (this.renderTask.context = { view: this });
    }
    return (
      (r.prototype.init = function (t, e) {}),
      (r.prototype.render = function (t, e, i, n) {}),
      (r.prototype.highlight = function (t, e, i, n) {
        var a = t.getData(n && n.dataType);
        !a || rv(a, n, "emphasis");
      }),
      (r.prototype.downplay = function (t, e, i, n) {
        var a = t.getData(n && n.dataType);
        !a || rv(a, n, "normal");
      }),
      (r.prototype.remove = function (t, e) {
        this.group.removeAll();
      }),
      (r.prototype.dispose = function (t, e) {}),
      (r.prototype.updateView = function (t, e, i, n) {
        this.render(t, e, i, n);
      }),
      (r.prototype.updateLayout = function (t, e, i, n) {
        this.render(t, e, i, n);
      }),
      (r.prototype.updateVisual = function (t, e, i, n) {
        this.render(t, e, i, n);
      }),
      (r.prototype.eachRendered = function (t) {
        Qd(this.group, t);
      }),
      (r.markUpdateMethod = function (t, e) {
        Up(t).updateMethod = e;
      }),
      (r.protoInitialize = (function () {
        var t = r.prototype;
        t.type = "chart";
      })()),
      r
    );
  })();
function ev(r, t, e) {
  r && Su(r) && (t === "emphasis" ? gu : yu)(r, e);
}
function rv(r, t, e) {
  var i = Mn(r, t),
    n = t && t.highlightKey != null ? Vm(t.highlightKey) : null;
  i != null
    ? C(xt(i), function (a) {
        ev(r.getItemGraphicEl(a), e, n);
      })
    : r.eachItemGraphicEl(function (a) {
        ev(a, e, n);
      });
}
hl(Fl);
fo(Fl);
function NS(r) {
  return FS(r.model);
}
function zS(r) {
  var t = r.model,
    e = r.ecModel,
    i = r.api,
    n = r.payload,
    a = t.pipelineContext.progressiveRender,
    o = r.view,
    s = n && Up(n).updateMethod,
    u = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return u !== "render" && o[u](t, e, i, n), HS[u];
}
var HS = {
    incrementalPrepareRender: {
      progress: function (r, t) {
        t.view.incrementalRender(r, t.model, t.ecModel, t.api, t.payload);
      },
    },
    render: {
      forceFirstProgress: !0,
      progress: function (r, t) {
        t.view.render(t.model, t.ecModel, t.api, t.payload);
      },
    },
  },
  an = Fl,
  Ja = "\0__throttleOriginMethod",
  iv = "\0__throttleRate",
  nv = "\0__throttleType";
function Nl(r, t, e) {
  var i,
    n = 0,
    a = 0,
    o = null,
    s,
    u,
    l,
    f;
  t = t || 0;
  function h() {
    (a = new Date().getTime()), (o = null), r.apply(u, l || []);
  }
  var c = function () {
    for (var v = [], d = 0; d < arguments.length; d++) v[d] = arguments[d];
    (i = new Date().getTime()), (u = this), (l = v);
    var y = f || t,
      p = f || e;
    (f = null),
      (s = i - (p ? n : a) - y),
      clearTimeout(o),
      p ? (o = setTimeout(h, y)) : s >= 0 ? h() : (o = setTimeout(h, -s)),
      (n = i);
  };
  return (
    (c.clear = function () {
      o && (clearTimeout(o), (o = null));
    }),
    (c.debounceNextCall = function (v) {
      f = v;
    }),
    c
  );
}
function Yp(r, t, e, i) {
  var n = r[t];
  if (!!n) {
    var a = n[Ja] || n,
      o = n[nv],
      s = n[iv];
    if (s !== e || o !== i) {
      if (e == null || !i) return (r[t] = a);
      (n = r[t] = Nl(a, e, i === "debounce")),
        (n[Ja] = a),
        (n[nv] = i),
        (n[iv] = e);
    }
    return n;
  }
}
function Eu(r, t) {
  var e = r[t];
  e && e[Ja] && (e.clear && e.clear(), (r[t] = e[Ja]));
}
var av = yt(),
  ov = { itemStyle: dn(tp, !0), lineStyle: dn(jd, !0) },
  GS = { lineStyle: "stroke", itemStyle: "fill" };
function $p(r, t) {
  var e = r.visualStyleMapper || ov[t];
  return e || (console.warn("Unkown style type '" + t + "'."), ov.itemStyle);
}
function Xp(r, t) {
  var e = r.visualDrawType || GS[t];
  return e || (console.warn("Unkown style type '" + t + "'."), "fill");
}
var VS = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function (r, t) {
      var e = r.getData(),
        i = r.visualStyleAccessPath || "itemStyle",
        n = r.getModel(i),
        a = $p(r, i),
        o = a(n),
        s = n.getShallow("decal");
      s && (e.setVisual("decal", s), (s.dirty = !0));
      var u = Xp(r, i),
        l = o[u],
        f = q(l) ? l : null,
        h = o.fill === "auto" || o.stroke === "auto";
      if (!o[u] || f || h) {
        var c = r.getColorFromPalette(r.name, null, t.getSeriesCount());
        o[u] || ((o[u] = c), e.setVisual("colorFromPalette", !0)),
          (o.fill = o.fill === "auto" || q(o.fill) ? c : o.fill),
          (o.stroke = o.stroke === "auto" || q(o.stroke) ? c : o.stroke);
      }
      if (
        (e.setVisual("style", o),
        e.setVisual("drawType", u),
        !t.isSeriesFiltered(r) && f)
      )
        return (
          e.setVisual("colorFromPalette", !1),
          {
            dataEach: function (v, d) {
              var y = r.getDataParams(d),
                p = O({}, o);
              (p[u] = f(y)), v.setItemVisual(d, "style", p);
            },
          }
        );
    },
  },
  Ei = new Tt(),
  WS = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function (r, t) {
      if (!(r.ignoreStyleOnData || t.isSeriesFiltered(r))) {
        var e = r.getData(),
          i = r.visualStyleAccessPath || "itemStyle",
          n = $p(r, i),
          a = e.getVisual("drawType");
        return {
          dataEach: e.hasItemOption
            ? function (o, s) {
                var u = o.getRawDataItem(s);
                if (u && u[i]) {
                  Ei.option = u[i];
                  var l = n(Ei),
                    f = o.ensureUniqueItemVisual(s, "style");
                  O(f, l),
                    Ei.option.decal &&
                      (o.setItemVisual(s, "decal", Ei.option.decal),
                      (Ei.option.decal.dirty = !0)),
                    a in l && o.setItemVisual(s, "colorFromPalette", !1);
                }
              }
            : null,
        };
      }
    },
  },
  US = {
    performRawSeries: !0,
    overallReset: function (r) {
      var t = $();
      r.eachSeries(function (e) {
        var i = e.getColorBy();
        if (!e.isColorBySeries()) {
          var n = e.type + "-" + i,
            a = t.get(n);
          a || ((a = {}), t.set(n, a)), (av(e).scope = a);
        }
      }),
        r.eachSeries(function (e) {
          if (!(e.isColorBySeries() || r.isSeriesFiltered(e))) {
            var i = e.getRawData(),
              n = {},
              a = e.getData(),
              o = av(e).scope,
              s = e.visualStyleAccessPath || "itemStyle",
              u = Xp(e, s);
            a.each(function (l) {
              var f = a.getRawIndex(l);
              n[f] = l;
            }),
              i.each(function (l) {
                var f = n[l],
                  h = a.getItemVisual(f, "colorFromPalette");
                if (h) {
                  var c = a.ensureUniqueItemVisual(f, "style"),
                    v = i.getName(l) || l + "",
                    d = i.count();
                  c[u] = e.getColorFromPalette(v, o, d);
                }
              });
          }
        });
    },
  },
  ia = Math.PI;
function YS(r, t) {
  (t = t || {}),
    nt(t, {
      text: "loading",
      textColor: "#000",
      fontSize: 12,
      fontWeight: "normal",
      fontStyle: "normal",
      fontFamily: "sans-serif",
      maskColor: "rgba(255, 255, 255, 0.8)",
      showSpinner: !0,
      color: "#5470c6",
      spinnerRadius: 10,
      lineWidth: 5,
      zlevel: 0,
    });
  var e = new be(),
    i = new Ot({ style: { fill: t.maskColor }, zlevel: t.zlevel, z: 1e4 });
  e.add(i);
  var n = new Bt({
      style: {
        text: t.text,
        fill: t.textColor,
        fontSize: t.fontSize,
        fontWeight: t.fontWeight,
        fontStyle: t.fontStyle,
        fontFamily: t.fontFamily,
      },
      zlevel: t.zlevel,
      z: 10001,
    }),
    a = new Ot({
      style: { fill: "none" },
      textContent: n,
      textConfig: { position: "right", distance: 10 },
      zlevel: t.zlevel,
      z: 10001,
    });
  e.add(a);
  var o;
  return (
    t.showSpinner &&
      ((o = new yl({
        shape: {
          startAngle: -ia / 2,
          endAngle: -ia / 2 + 0.1,
          r: t.spinnerRadius,
        },
        style: { stroke: t.color, lineCap: "round", lineWidth: t.lineWidth },
        zlevel: t.zlevel,
        z: 10001,
      })),
      o
        .animateShape(!0)
        .when(1e3, { endAngle: (ia * 3) / 2 })
        .start("circularInOut"),
      o
        .animateShape(!0)
        .when(1e3, { startAngle: (ia * 3) / 2 })
        .delay(300)
        .start("circularInOut"),
      e.add(o)),
    (e.resize = function () {
      var s = n.getBoundingRect().width,
        u = t.showSpinner ? t.spinnerRadius : 0,
        l =
          (r.getWidth() - u * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 -
          (t.showSpinner && s ? 0 : 5 + s / 2) +
          (t.showSpinner ? 0 : s / 2) +
          (s ? 0 : u),
        f = r.getHeight() / 2;
      t.showSpinner && o.setShape({ cx: l, cy: f }),
        a.setShape({ x: l - u, y: f - u, width: u * 2, height: u * 2 }),
        i.setShape({ x: 0, y: 0, width: r.getWidth(), height: r.getHeight() });
    }),
    e.resize(),
    e
  );
}
var $S = (function () {
  function r(t, e, i, n) {
    (this._stageTaskMap = $()),
      (this.ecInstance = t),
      (this.api = e),
      (i = this._dataProcessorHandlers = i.slice()),
      (n = this._visualHandlers = n.slice()),
      (this._allHandlers = i.concat(n));
  }
  return (
    (r.prototype.restoreData = function (t, e) {
      t.restoreData(e),
        this._stageTaskMap.each(function (i) {
          var n = i.overallTask;
          n && n.dirty();
        });
    }),
    (r.prototype.getPerformArgs = function (t, e) {
      if (!!t.__pipeline) {
        var i = this._pipelineMap.get(t.__pipeline.id),
          n = i.context,
          a =
            !e &&
            i.progressiveEnabled &&
            (!n || n.progressiveRender) &&
            t.__idxInPipeline > i.blockIndex,
          o = a ? i.step : null,
          s = n && n.modDataCount,
          u = s != null ? Math.ceil(s / o) : null;
        return { step: o, modBy: u, modDataCount: s };
      }
    }),
    (r.prototype.getPipeline = function (t) {
      return this._pipelineMap.get(t);
    }),
    (r.prototype.updateStreamModes = function (t, e) {
      var i = this._pipelineMap.get(t.uid),
        n = t.getData(),
        a = n.count(),
        o =
          i.progressiveEnabled &&
          e.incrementalPrepareRender &&
          a >= i.threshold,
        s = t.get("large") && a >= t.get("largeThreshold"),
        u = t.get("progressiveChunkMode") === "mod" ? a : null;
      t.pipelineContext = i.context = {
        progressiveRender: o,
        modDataCount: u,
        large: s,
      };
    }),
    (r.prototype.restorePipelines = function (t) {
      var e = this,
        i = (e._pipelineMap = $());
      t.eachSeries(function (n) {
        var a = n.getProgressive(),
          o = n.uid;
        i.set(o, {
          id: o,
          head: null,
          tail: null,
          threshold: n.getProgressiveThreshold(),
          progressiveEnabled:
            a && !(n.preventIncremental && n.preventIncremental()),
          blockIndex: -1,
          step: Math.round(a || 700),
          count: 0,
        }),
          e._pipe(n, n.dataTask);
      });
    }),
    (r.prototype.prepareStageTasks = function () {
      var t = this._stageTaskMap,
        e = this.api.getModel(),
        i = this.api;
      C(
        this._allHandlers,
        function (n) {
          var a = t.get(n.uid) || t.set(n.uid, {}),
            o = "";
          Se(!(n.reset && n.overallReset), o),
            n.reset && this._createSeriesStageTask(n, a, e, i),
            n.overallReset && this._createOverallStageTask(n, a, e, i);
        },
        this
      );
    }),
    (r.prototype.prepareView = function (t, e, i, n) {
      var a = t.renderTask,
        o = a.context;
      (o.model = e),
        (o.ecModel = i),
        (o.api = n),
        (a.__block = !t.incrementalPrepareRender),
        this._pipe(e, a);
    }),
    (r.prototype.performDataProcessorTasks = function (t, e) {
      this._performStageTasks(this._dataProcessorHandlers, t, e, { block: !0 });
    }),
    (r.prototype.performVisualTasks = function (t, e, i) {
      this._performStageTasks(this._visualHandlers, t, e, i);
    }),
    (r.prototype._performStageTasks = function (t, e, i, n) {
      n = n || {};
      var a = !1,
        o = this;
      C(t, function (u, l) {
        if (!(n.visualType && n.visualType !== u.visualType)) {
          var f = o._stageTaskMap.get(u.uid),
            h = f.seriesTaskMap,
            c = f.overallTask;
          if (c) {
            var v,
              d = c.agentStubMap;
            d.each(function (p) {
              s(n, p) && (p.dirty(), (v = !0));
            }),
              v && c.dirty(),
              o.updatePayload(c, i);
            var y = o.getPerformArgs(c, n.block);
            d.each(function (p) {
              p.perform(y);
            }),
              c.perform(y) && (a = !0);
          } else
            h &&
              h.each(function (p, g) {
                s(n, p) && p.dirty();
                var _ = o.getPerformArgs(p, n.block);
                (_.skip =
                  !u.performRawSeries && e.isSeriesFiltered(p.context.model)),
                  o.updatePayload(p, i),
                  p.perform(_) && (a = !0);
              });
        }
      });
      function s(u, l) {
        return u.setDirty && (!u.dirtyMap || u.dirtyMap.get(l.__pipeline.id));
      }
      this.unfinished = a || this.unfinished;
    }),
    (r.prototype.performSeriesTasks = function (t) {
      var e;
      t.eachSeries(function (i) {
        e = i.dataTask.perform() || e;
      }),
        (this.unfinished = e || this.unfinished);
    }),
    (r.prototype.plan = function () {
      this._pipelineMap.each(function (t) {
        var e = t.tail;
        do {
          if (e.__block) {
            t.blockIndex = e.__idxInPipeline;
            break;
          }
          e = e.getUpstream();
        } while (e);
      });
    }),
    (r.prototype.updatePayload = function (t, e) {
      e !== "remain" && (t.context.payload = e);
    }),
    (r.prototype._createSeriesStageTask = function (t, e, i, n) {
      var a = this,
        o = e.seriesTaskMap,
        s = (e.seriesTaskMap = $()),
        u = t.seriesType,
        l = t.getTargetSeries;
      t.createOnAllSeries
        ? i.eachRawSeries(f)
        : u
        ? i.eachRawSeriesByType(u, f)
        : l && l(i, n).each(f);
      function f(h) {
        var c = h.uid,
          v = s.set(
            c,
            (o && o.get(c)) || nn({ plan: QS, reset: JS, count: tb })
          );
        (v.context = {
          model: h,
          ecModel: i,
          api: n,
          useClearVisual: t.isVisual && !t.isLayout,
          plan: t.plan,
          reset: t.reset,
          scheduler: a,
        }),
          a._pipe(h, v);
      }
    }),
    (r.prototype._createOverallStageTask = function (t, e, i, n) {
      var a = this,
        o = (e.overallTask = e.overallTask || nn({ reset: XS }));
      o.context = {
        ecModel: i,
        api: n,
        overallReset: t.overallReset,
        scheduler: a,
      };
      var s = o.agentStubMap,
        u = (o.agentStubMap = $()),
        l = t.seriesType,
        f = t.getTargetSeries,
        h = !0,
        c = !1,
        v = "";
      Se(!t.createOnAllSeries, v),
        l
          ? i.eachRawSeriesByType(l, d)
          : f
          ? f(i, n).each(d)
          : ((h = !1), C(i.getSeries(), d));
      function d(y) {
        var p = y.uid,
          g = u.set(
            p,
            (s && s.get(p)) || ((c = !0), nn({ reset: qS, onDirty: KS }))
          );
        (g.context = { model: y, overallProgress: h }),
          (g.agent = o),
          (g.__block = h),
          a._pipe(y, g);
      }
      c && o.dirty();
    }),
    (r.prototype._pipe = function (t, e) {
      var i = t.uid,
        n = this._pipelineMap.get(i);
      !n.head && (n.head = e),
        n.tail && n.tail.pipe(e),
        (n.tail = e),
        (e.__idxInPipeline = n.count++),
        (e.__pipeline = n);
    }),
    (r.wrapStageHandler = function (t, e) {
      return (
        q(t) && (t = { overallReset: t, seriesType: eb(t) }),
        (t.uid = _o("stageHandler")),
        e && (t.visualType = e),
        t
      );
    }),
    r
  );
})();
function XS(r) {
  r.overallReset(r.ecModel, r.api, r.payload);
}
function qS(r) {
  return r.overallProgress && ZS;
}
function ZS() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function KS() {
  this.agent && this.agent.dirty();
}
function QS(r) {
  return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null;
}
function JS(r) {
  r.useClearVisual && r.data.clearAllVisual();
  var t = (r.resetDefines = xt(r.reset(r.model, r.ecModel, r.api, r.payload)));
  return t.length > 1
    ? U(t, function (e, i) {
        return qp(i);
      })
    : jS;
}
var jS = qp(0);
function qp(r) {
  return function (t, e) {
    var i = e.data,
      n = e.resetDefines[r];
    if (n && n.dataEach) for (var a = t.start; a < t.end; a++) n.dataEach(i, a);
    else n && n.progress && n.progress(t, i);
  };
}
function tb(r) {
  return r.data.count();
}
function eb(r) {
  ja = null;
  try {
    r(Sn, Zp);
  } catch {}
  return ja;
}
var Sn = {},
  Zp = {},
  ja;
Kp(Sn, Sp);
Kp(Zp, bp);
Sn.eachSeriesByType = Sn.eachRawSeriesByType = function (r) {
  ja = r;
};
Sn.eachComponent = function (r) {
  r.mainType === "series" && r.subType && (ja = r.subType);
};
function Kp(r, t) {
  for (var e in t.prototype) r[e] = Et;
}
var Qp = $S,
  sv = [
    "#37A2DA",
    "#32C5E9",
    "#67E0E3",
    "#9FE6B8",
    "#FFDB5C",
    "#ff9f7f",
    "#fb7293",
    "#E062AE",
    "#E690D1",
    "#e7bcf3",
    "#9d96f5",
    "#8378EA",
    "#96BFFF",
  ],
  rb = {
    color: sv,
    colorLayer: [
      ["#37A2DA", "#ffd85c", "#fd7b5f"],
      ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
      [
        "#37A2DA",
        "#32C5E9",
        "#9FE6B8",
        "#FFDB5C",
        "#ff9f7f",
        "#fb7293",
        "#e7bcf3",
        "#8378EA",
        "#96BFFF",
      ],
      sv,
    ],
  },
  Dt = "#B9B8CE",
  uv = "#100C2A",
  na = function () {
    return {
      axisLine: { lineStyle: { color: Dt } },
      splitLine: { lineStyle: { color: "#484753" } },
      splitArea: {
        areaStyle: {
          color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"],
        },
      },
      minorSplitLine: { lineStyle: { color: "#20203B" } },
    };
  },
  lv = [
    "#4992ff",
    "#7cffb2",
    "#fddd60",
    "#ff6e76",
    "#58d9f9",
    "#05c091",
    "#ff8a45",
    "#8d48e3",
    "#dd79ff",
  ],
  Jp = {
    darkMode: !0,
    color: lv,
    backgroundColor: uv,
    axisPointer: {
      lineStyle: { color: "#817f91" },
      crossStyle: { color: "#817f91" },
      label: { color: "#fff" },
    },
    legend: { textStyle: { color: Dt } },
    textStyle: { color: Dt },
    title: {
      textStyle: { color: "#EEF1FA" },
      subtextStyle: { color: "#B9B8CE" },
    },
    toolbox: { iconStyle: { borderColor: Dt } },
    dataZoom: {
      borderColor: "#71708A",
      textStyle: { color: Dt },
      brushStyle: { color: "rgba(135,163,206,0.3)" },
      handleStyle: { color: "#353450", borderColor: "#C5CBE3" },
      moveHandleStyle: { color: "#B0B6C3", opacity: 0.3 },
      fillerColor: "rgba(135,163,206,0.2)",
      emphasis: {
        handleStyle: { borderColor: "#91B7F2", color: "#4D587D" },
        moveHandleStyle: { color: "#636D9A", opacity: 0.7 },
      },
      dataBackground: {
        lineStyle: { color: "#71708A", width: 1 },
        areaStyle: { color: "#71708A" },
      },
      selectedDataBackground: {
        lineStyle: { color: "#87A3CE" },
        areaStyle: { color: "#87A3CE" },
      },
    },
    visualMap: { textStyle: { color: Dt } },
    timeline: {
      lineStyle: { color: Dt },
      label: { color: Dt },
      controlStyle: { color: Dt, borderColor: Dt },
    },
    calendar: {
      itemStyle: { color: uv },
      dayLabel: { color: Dt },
      monthLabel: { color: Dt },
      yearLabel: { color: Dt },
    },
    timeAxis: na(),
    logAxis: na(),
    valueAxis: na(),
    categoryAxis: na(),
    line: { symbol: "circle" },
    graph: { color: lv },
    gauge: {
      title: { color: Dt },
      axisLine: { lineStyle: { color: [[1, "rgba(207,212,219,0.2)"]] } },
      axisLabel: { color: Dt },
      detail: { color: "#EEF1FA" },
    },
    candlestick: {
      itemStyle: {
        color: "#f64e56",
        color0: "#54ea92",
        borderColor: "#f64e56",
        borderColor0: "#54ea92",
      },
    },
  };
Jp.categoryAxis.splitLine.show = !1;
var ib = Jp,
  nb = (function () {
    function r() {}
    return (
      (r.prototype.normalizeQuery = function (t) {
        var e = {},
          i = {},
          n = {};
        if (B(t)) {
          var a = _e(t);
          (e.mainType = a.main || null), (e.subType = a.sub || null);
        } else {
          var o = ["Index", "Name", "Id"],
            s = { name: 1, dataIndex: 1, dataType: 1 };
          C(t, function (u, l) {
            for (var f = !1, h = 0; h < o.length; h++) {
              var c = o[h],
                v = l.lastIndexOf(c);
              if (v > 0 && v === l.length - c.length) {
                var d = l.slice(0, v);
                d !== "data" &&
                  ((e.mainType = d), (e[c.toLowerCase()] = u), (f = !0));
              }
            }
            s.hasOwnProperty(l) && ((i[l] = u), (f = !0)), f || (n[l] = u);
          });
        }
        return { cptQuery: e, dataQuery: i, otherQuery: n };
      }),
      (r.prototype.filter = function (t, e) {
        var i = this.eventInfo;
        if (!i) return !0;
        var n = i.targetEl,
          a = i.packedEvent,
          o = i.model,
          s = i.view;
        if (!o || !s) return !0;
        var u = e.cptQuery,
          l = e.dataQuery;
        return (
          f(u, o, "mainType") &&
          f(u, o, "subType") &&
          f(u, o, "index", "componentIndex") &&
          f(u, o, "name") &&
          f(u, o, "id") &&
          f(l, a, "name") &&
          f(l, a, "dataIndex") &&
          f(l, a, "dataType") &&
          (!s.filterForExposedEvent ||
            s.filterForExposedEvent(t, e.otherQuery, n, a))
        );
        function f(h, c, v, d) {
          return h[v] == null || c[d || v] === h[v];
        }
      }),
      (r.prototype.afterTrigger = function () {
        this.eventInfo = null;
      }),
      r
    );
  })(),
  Ou = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"],
  fv = Ou.concat(["symbolKeepAspect"]),
  ab = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function (r, t) {
      var e = r.getData();
      if (
        (r.legendIcon && e.setVisual("legendIcon", r.legendIcon),
        !r.hasSymbolVisual)
      )
        return;
      for (var i = {}, n = {}, a = !1, o = 0; o < Ou.length; o++) {
        var s = Ou[o],
          u = r.get(s);
        q(u) ? ((a = !0), (n[s] = u)) : (i[s] = u);
      }
      if (
        ((i.symbol = i.symbol || r.defaultSymbol),
        e.setVisual(
          O(
            {
              legendIcon: r.legendIcon || i.symbol,
              symbolKeepAspect: r.get("symbolKeepAspect"),
            },
            i
          )
        ),
        t.isSeriesFiltered(r))
      )
        return;
      var l = ft(n);
      function f(h, c) {
        for (
          var v = r.getRawValue(c), d = r.getDataParams(c), y = 0;
          y < l.length;
          y++
        ) {
          var p = l[y];
          h.setItemVisual(c, p, n[p](v, d));
        }
      }
      return { dataEach: a ? f : null };
    },
  },
  ob = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function (r, t) {
      if (!r.hasSymbolVisual || t.isSeriesFiltered(r)) return;
      var e = r.getData();
      function i(n, a) {
        for (var o = n.getItemModel(a), s = 0; s < fv.length; s++) {
          var u = fv[s],
            l = o.getShallow(u, !0);
          l != null && n.setItemVisual(a, u, l);
        }
      }
      return { dataEach: e.hasItemOption ? i : null };
    },
  };
function sb(r, t, e) {
  switch (e) {
    case "color":
      var i = r.getItemVisual(t, "style");
      return i[r.getVisual("drawType")];
    case "opacity":
      return r.getItemVisual(t, "style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getItemVisual(t, e);
  }
}
function ub(r, t) {
  switch (t) {
    case "color":
      var e = r.getVisual("style");
      return e[r.getVisual("drawType")];
    case "opacity":
      return r.getVisual("style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getVisual(t);
  }
}
function GD(r, t, e, i) {
  switch (e) {
    case "color":
      var n = r.ensureUniqueItemVisual(t, "style");
      (n[r.getVisual("drawType")] = i),
        r.setItemVisual(t, "colorFromPalette", !1);
      break;
    case "opacity":
      r.ensureUniqueItemVisual(t, "style").opacity = i;
      break;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      r.setItemVisual(t, e, i);
      break;
  }
}
function VD(r, t) {
  function e(i, n) {
    var a = [];
    return (
      i.eachComponent(
        { mainType: "series", subType: r, query: n },
        function (o) {
          a.push(o.seriesIndex);
        }
      ),
      a
    );
  }
  C(
    [
      [r + "ToggleSelect", "toggleSelect"],
      [r + "Select", "select"],
      [r + "UnSelect", "unselect"],
    ],
    function (i) {
      t(i[0], function (n, a, o) {
        (n = O({}, n)),
          o.dispatchAction(O(n, { type: i[1], seriesIndex: e(a, n) }));
      });
    }
  );
}
function Qr(r, t, e, i, n) {
  var a = r + t;
  e.isSilent(a) ||
    i.eachComponent({ mainType: "series", subType: "pie" }, function (o) {
      for (
        var s = o.seriesIndex, u = o.option.selectedMap, l = n.selected, f = 0;
        f < l.length;
        f++
      )
        if (l[f].seriesIndex === s) {
          var h = o.getData(),
            c = Mn(h, n.fromActionPayload);
          e.trigger(a, {
            type: a,
            seriesId: o.id,
            name: k(c) ? h.getName(c[0]) : h.getName(c),
            selected: B(u) ? u : O({}, u),
          });
        }
    });
}
function lb(r, t, e) {
  r.on("selectchanged", function (i) {
    var n = e.getModel();
    i.isFromClick
      ? (Qr("map", "selectchanged", t, n, i),
        Qr("pie", "selectchanged", t, n, i))
      : i.fromAction === "select"
      ? (Qr("map", "selected", t, n, i), Qr("pie", "selected", t, n, i))
      : i.fromAction === "unselect" &&
        (Qr("map", "unselected", t, n, i), Qr("pie", "unselected", t, n, i));
  });
}
function Zi(r, t, e) {
  for (var i; r && !(t(r) && ((i = r), e)); ) r = r.__hostTarget || r.parent;
  return i;
}
var fb = Math.round(Math.random() * 9),
  hb = typeof Object.defineProperty == "function",
  vb = (function () {
    function r() {
      this._id = "__ec_inner_" + fb++;
    }
    return (
      (r.prototype.get = function (t) {
        return this._guard(t)[this._id];
      }),
      (r.prototype.set = function (t, e) {
        var i = this._guard(t);
        return (
          hb
            ? Object.defineProperty(i, this._id, {
                value: e,
                enumerable: !1,
                configurable: !0,
              })
            : (i[this._id] = e),
          this
        );
      }),
      (r.prototype.delete = function (t) {
        return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1;
      }),
      (r.prototype.has = function (t) {
        return !!this._guard(t)[this._id];
      }),
      (r.prototype._guard = function (t) {
        if (t !== Object(t))
          throw TypeError("Value of WeakMap is not a non-null object.");
        return t;
      }),
      r
    );
  })(),
  cb = vb,
  db = it.extend({
    type: "triangle",
    shape: { cx: 0, cy: 0, width: 0, height: 0 },
    buildPath: function (r, t) {
      var e = t.cx,
        i = t.cy,
        n = t.width / 2,
        a = t.height / 2;
      r.moveTo(e, i - a),
        r.lineTo(e + n, i + a),
        r.lineTo(e - n, i + a),
        r.closePath();
    },
  }),
  pb = it.extend({
    type: "diamond",
    shape: { cx: 0, cy: 0, width: 0, height: 0 },
    buildPath: function (r, t) {
      var e = t.cx,
        i = t.cy,
        n = t.width / 2,
        a = t.height / 2;
      r.moveTo(e, i - a),
        r.lineTo(e + n, i),
        r.lineTo(e, i + a),
        r.lineTo(e - n, i),
        r.closePath();
    },
  }),
  gb = it.extend({
    type: "pin",
    shape: { x: 0, y: 0, width: 0, height: 0 },
    buildPath: function (r, t) {
      var e = t.x,
        i = t.y,
        n = (t.width / 5) * 3,
        a = Math.max(n, t.height),
        o = n / 2,
        s = (o * o) / (a - o),
        u = i - a + o + s,
        l = Math.asin(s / o),
        f = Math.cos(l) * o,
        h = Math.sin(l),
        c = Math.cos(l),
        v = o * 0.6,
        d = o * 0.7;
      r.moveTo(e - f, u + s),
        r.arc(e, u, o, Math.PI - l, Math.PI * 2 + l),
        r.bezierCurveTo(e + f - h * v, u + s + c * v, e, i - d, e, i),
        r.bezierCurveTo(e, i - d, e - f + h * v, u + s + c * v, e - f, u + s),
        r.closePath();
    },
  }),
  yb = it.extend({
    type: "arrow",
    shape: { x: 0, y: 0, width: 0, height: 0 },
    buildPath: function (r, t) {
      var e = t.height,
        i = t.width,
        n = t.x,
        a = t.y,
        o = (i / 3) * 2;
      r.moveTo(n, a),
        r.lineTo(n + o, a + e),
        r.lineTo(n, a + (e / 4) * 3),
        r.lineTo(n - o, a + e),
        r.lineTo(n, a),
        r.closePath();
    },
  }),
  _b = {
    line: Ln,
    rect: Ot,
    roundRect: Ot,
    square: Ot,
    circle: gl,
    diamond: pb,
    pin: gb,
    arrow: yb,
    triangle: db,
  },
  mb = {
    line: function (r, t, e, i, n) {
      (n.x1 = r), (n.y1 = t + i / 2), (n.x2 = r + e), (n.y2 = t + i / 2);
    },
    rect: function (r, t, e, i, n) {
      (n.x = r), (n.y = t), (n.width = e), (n.height = i);
    },
    roundRect: function (r, t, e, i, n) {
      (n.x = r),
        (n.y = t),
        (n.width = e),
        (n.height = i),
        (n.r = Math.min(e, i) / 4);
    },
    square: function (r, t, e, i, n) {
      var a = Math.min(e, i);
      (n.x = r), (n.y = t), (n.width = a), (n.height = a);
    },
    circle: function (r, t, e, i, n) {
      (n.cx = r + e / 2), (n.cy = t + i / 2), (n.r = Math.min(e, i) / 2);
    },
    diamond: function (r, t, e, i, n) {
      (n.cx = r + e / 2), (n.cy = t + i / 2), (n.width = e), (n.height = i);
    },
    pin: function (r, t, e, i, n) {
      (n.x = r + e / 2), (n.y = t + i / 2), (n.width = e), (n.height = i);
    },
    arrow: function (r, t, e, i, n) {
      (n.x = r + e / 2), (n.y = t + i / 2), (n.width = e), (n.height = i);
    },
    triangle: function (r, t, e, i, n) {
      (n.cx = r + e / 2), (n.cy = t + i / 2), (n.width = e), (n.height = i);
    },
  },
  ku = {};
C(_b, function (r, t) {
  ku[t] = new r();
});
var wb = it.extend({
  type: "symbol",
  shape: { symbolType: "", x: 0, y: 0, width: 0, height: 0 },
  calculateTextPosition: function (r, t, e) {
    var i = Hc(r, t, e),
      n = this.shape;
    return (
      n &&
        n.symbolType === "pin" &&
        t.position === "inside" &&
        (i.y = e.y + e.height * 0.4),
      i
    );
  },
  buildPath: function (r, t, e) {
    var i = t.symbolType;
    if (i !== "none") {
      var n = ku[i];
      n || ((i = "rect"), (n = ku[i])),
        mb[i](t.x, t.y, t.width, t.height, n.shape),
        n.buildPath(r, n.shape, e);
    }
  },
});
function Sb(r, t) {
  if (this.type !== "image") {
    var e = this.style;
    this.__isEmptyBrush
      ? ((e.stroke = r), (e.fill = t || "#fff"), (e.lineWidth = 2))
      : this.shape.symbolType === "line"
      ? (e.stroke = r)
      : (e.fill = r),
      this.markRedraw();
  }
}
function zl(r, t, e, i, n, a, o) {
  var s = r.indexOf("empty") === 0;
  s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
  var u;
  return (
    r.indexOf("image://") === 0
      ? (u = Xd(r.slice(8), new j(t, e, i, n), o ? "center" : "cover"))
      : r.indexOf("path://") === 0
      ? (u = ml(r.slice(7), {}, new j(t, e, i, n), o ? "center" : "cover"))
      : (u = new wb({
          shape: { symbolType: r, x: t, y: e, width: i, height: n },
        })),
    (u.__isEmptyBrush = s),
    (u.setColor = Sb),
    a && u.setColor(a),
    u
  );
}
function WD(r) {
  return k(r) || (r = [+r, +r]), [r[0] || 0, r[1] || 0];
}
function bb(r, t) {
  if (r != null)
    return (
      k(r) || (r = [r, r]), [Pt(r[0], t[0]) || 0, Pt(K(r[1], r[0]), t[1]) || 0]
    );
}
function Ar(r) {
  return isFinite(r);
}
function Tb(r, t, e) {
  var i = t.x == null ? 0 : t.x,
    n = t.x2 == null ? 1 : t.x2,
    a = t.y == null ? 0 : t.y,
    o = t.y2 == null ? 0 : t.y2;
  t.global ||
    ((i = i * e.width + e.x),
    (n = n * e.width + e.x),
    (a = a * e.height + e.y),
    (o = o * e.height + e.y)),
    (i = Ar(i) ? i : 0),
    (n = Ar(n) ? n : 1),
    (a = Ar(a) ? a : 0),
    (o = Ar(o) ? o : 0);
  var s = r.createLinearGradient(i, a, n, o);
  return s;
}
function xb(r, t, e) {
  var i = e.width,
    n = e.height,
    a = Math.min(i, n),
    o = t.x == null ? 0.5 : t.x,
    s = t.y == null ? 0.5 : t.y,
    u = t.r == null ? 0.5 : t.r;
  t.global || ((o = o * i + e.x), (s = s * n + e.y), (u = u * a)),
    (o = Ar(o) ? o : 0.5),
    (s = Ar(s) ? s : 0.5),
    (u = u >= 0 && Ar(u) ? u : 0.5);
  var l = r.createRadialGradient(o, s, 0, o, s, u);
  return l;
}
function Bu(r, t, e) {
  for (
    var i = t.type === "radial" ? xb(r, t, e) : Tb(r, t, e),
      n = t.colorStops,
      a = 0;
    a < n.length;
    a++
  )
    i.addColorStop(n[a].offset, n[a].color);
  return i;
}
function Cb(r, t) {
  if (r === t || (!r && !t)) return !1;
  if (!r || !t || r.length !== t.length) return !0;
  for (var e = 0; e < r.length; e++) if (r[e] !== t[e]) return !0;
  return !1;
}
function aa(r) {
  return parseInt(r, 10);
}
function oa(r, t, e) {
  var i = ["width", "height"][t],
    n = ["clientWidth", "clientHeight"][t],
    a = ["paddingLeft", "paddingTop"][t],
    o = ["paddingRight", "paddingBottom"][t];
  if (e[i] != null && e[i] !== "auto") return parseFloat(e[i]);
  var s = document.defaultView.getComputedStyle(r);
  return (
    ((r[n] || aa(s[i]) || aa(r.style[i])) - (aa(s[a]) || 0) - (aa(s[o]) || 0)) |
    0
  );
}
function Db(r, t) {
  return !r || r === "solid" || !(t > 0)
    ? null
    : r === "dashed"
    ? [4 * t, 2 * t]
    : r === "dotted"
    ? [t]
    : ht(r)
    ? [r]
    : k(r)
    ? r
    : null;
}
function jp(r) {
  var t = r.style,
    e = t.lineDash && t.lineWidth > 0 && Db(t.lineDash, t.lineWidth),
    i = t.lineDashOffset;
  if (e) {
    var n = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
    n &&
      n !== 1 &&
      ((e = U(e, function (a) {
        return a / n;
      })),
      (i /= n));
  }
  return [e, i];
}
var Mb = new di(!0);
function to(r) {
  var t = r.stroke;
  return !(t == null || t === "none" || !(r.lineWidth > 0));
}
function hv(r) {
  return typeof r == "string" && r !== "none";
}
function eo(r) {
  var t = r.fill;
  return t != null && t !== "none";
}
function vv(r, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var e = r.globalAlpha;
    (r.globalAlpha = t.fillOpacity * t.opacity), r.fill(), (r.globalAlpha = e);
  } else r.fill();
}
function cv(r, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var e = r.globalAlpha;
    (r.globalAlpha = t.strokeOpacity * t.opacity),
      r.stroke(),
      (r.globalAlpha = e);
  } else r.stroke();
}
function Fu(r, t, e) {
  var i = rd(t.image, t.__image, e);
  if (ho(i)) {
    var n = r.createPattern(i, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && n && n.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(t.x || 0, t.y || 0),
        a.rotateSelf(0, 0, (t.rotation || 0) * My),
        a.scaleSelf(t.scaleX || 1, t.scaleY || 1),
        n.setTransform(a);
    }
    return n;
  }
}
function Pb(r, t, e, i) {
  var n,
    a = to(e),
    o = eo(e),
    s = e.strokePercent,
    u = s < 1,
    l = !t.path;
  (!t.silent || u) && l && t.createPathProxy();
  var f = t.path || Mb,
    h = t.__dirty;
  if (!i) {
    var c = e.fill,
      v = e.stroke,
      d = o && !!c.colorStops,
      y = a && !!v.colorStops,
      p = o && !!c.image,
      g = a && !!v.image,
      _ = void 0,
      m = void 0,
      w = void 0,
      b = void 0,
      S = void 0;
    (d || y) && (S = t.getBoundingRect()),
      d &&
        ((_ = h ? Bu(r, c, S) : t.__canvasFillGradient),
        (t.__canvasFillGradient = _)),
      y &&
        ((m = h ? Bu(r, v, S) : t.__canvasStrokeGradient),
        (t.__canvasStrokeGradient = m)),
      p &&
        ((w =
          h || !t.__canvasFillPattern ? Fu(r, c, t) : t.__canvasFillPattern),
        (t.__canvasFillPattern = w)),
      g &&
        ((b =
          h || !t.__canvasStrokePattern
            ? Fu(r, v, t)
            : t.__canvasStrokePattern),
        (t.__canvasStrokePattern = w)),
      d ? (r.fillStyle = _) : p && (w ? (r.fillStyle = w) : (o = !1)),
      y ? (r.strokeStyle = m) : g && (b ? (r.strokeStyle = b) : (a = !1));
  }
  var D = t.getGlobalScale();
  f.setScale(D[0], D[1], t.segmentIgnoreThreshold);
  var T, x;
  r.setLineDash && e.lineDash && ((n = jp(t)), (T = n[0]), (x = n[1]));
  var M = !0;
  (l || h & ti) &&
    (f.setDPR(r.dpr),
    u ? f.setContext(null) : (f.setContext(r), (M = !1)),
    f.reset(),
    t.buildPath(f, t.shape, i),
    f.toStatic(),
    t.pathUpdated()),
    M && f.rebuildPath(r, u ? s : 1),
    T && (r.setLineDash(T), (r.lineDashOffset = x)),
    i ||
      (e.strokeFirst
        ? (a && cv(r, e), o && vv(r, e))
        : (o && vv(r, e), a && cv(r, e))),
    T && r.setLineDash([]);
}
function Ab(r, t, e) {
  var i = (t.__image = rd(e.image, t.__image, t, t.onload));
  if (!(!i || !ho(i))) {
    var n = e.x || 0,
      a = e.y || 0,
      o = t.getWidth(),
      s = t.getHeight(),
      u = i.width / i.height;
    if (
      (o == null && s != null
        ? (o = s * u)
        : s == null && o != null
        ? (s = o / u)
        : o == null && s == null && ((o = i.width), (s = i.height)),
      e.sWidth && e.sHeight)
    ) {
      var l = e.sx || 0,
        f = e.sy || 0;
      r.drawImage(i, l, f, e.sWidth, e.sHeight, n, a, o, s);
    } else if (e.sx && e.sy) {
      var l = e.sx,
        f = e.sy,
        h = o - l,
        c = s - f;
      r.drawImage(i, l, f, h, c, n, a, o, s);
    } else r.drawImage(i, n, a, o, s);
  }
}
function Lb(r, t, e) {
  var i,
    n = e.text;
  if ((n != null && (n += ""), n)) {
    (r.font = e.font || Or),
      (r.textAlign = e.textAlign),
      (r.textBaseline = e.textBaseline);
    var a = void 0,
      o = void 0;
    r.setLineDash && e.lineDash && ((i = jp(t)), (a = i[0]), (o = i[1])),
      a && (r.setLineDash(a), (r.lineDashOffset = o)),
      e.strokeFirst
        ? (to(e) && r.strokeText(n, e.x, e.y), eo(e) && r.fillText(n, e.x, e.y))
        : (eo(e) && r.fillText(n, e.x, e.y),
          to(e) && r.strokeText(n, e.x, e.y)),
      a && r.setLineDash([]);
  }
}
var dv = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"],
  pv = [
    ["lineCap", "butt"],
    ["lineJoin", "miter"],
    ["miterLimit", 10],
  ];
function tg(r, t, e, i, n) {
  var a = !1;
  if (!i && ((e = e || {}), t === e)) return !1;
  if (i || t.opacity !== e.opacity) {
    Rt(r, n), (a = !0);
    var o = Math.max(Math.min(t.opacity, 1), 0);
    r.globalAlpha = isNaN(o) ? Ir.opacity : o;
  }
  (i || t.blend !== e.blend) &&
    (a || (Rt(r, n), (a = !0)),
    (r.globalCompositeOperation = t.blend || Ir.blend));
  for (var s = 0; s < dv.length; s++) {
    var u = dv[s];
    (i || t[u] !== e[u]) &&
      (a || (Rt(r, n), (a = !0)), (r[u] = r.dpr * (t[u] || 0)));
  }
  return (
    (i || t.shadowColor !== e.shadowColor) &&
      (a || (Rt(r, n), (a = !0)),
      (r.shadowColor = t.shadowColor || Ir.shadowColor)),
    a
  );
}
function gv(r, t, e, i, n) {
  var a = bn(t, n.inHover),
    o = i ? null : (e && bn(e, n.inHover)) || {};
  if (a === o) return !1;
  var s = tg(r, a, o, i, n);
  if (
    ((i || a.fill !== o.fill) &&
      (s || (Rt(r, n), (s = !0)), hv(a.fill) && (r.fillStyle = a.fill)),
    (i || a.stroke !== o.stroke) &&
      (s || (Rt(r, n), (s = !0)), hv(a.stroke) && (r.strokeStyle = a.stroke)),
    (i || a.opacity !== o.opacity) &&
      (s || (Rt(r, n), (s = !0)),
      (r.globalAlpha = a.opacity == null ? 1 : a.opacity)),
    t.hasStroke())
  ) {
    var u = a.lineWidth,
      l = u / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    r.lineWidth !== l && (s || (Rt(r, n), (s = !0)), (r.lineWidth = l));
  }
  for (var f = 0; f < pv.length; f++) {
    var h = pv[f],
      c = h[0];
    (i || a[c] !== o[c]) && (s || (Rt(r, n), (s = !0)), (r[c] = a[c] || h[1]));
  }
  return s;
}
function Ib(r, t, e, i, n) {
  return tg(r, bn(t, n.inHover), e && bn(e, n.inHover), i, n);
}
function eg(r, t) {
  var e = t.transform,
    i = r.dpr || 1;
  e
    ? r.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5])
    : r.setTransform(i, 0, 0, i, 0, 0);
}
function Rb(r, t, e) {
  for (var i = !1, n = 0; n < r.length; n++) {
    var a = r[n];
    (i = i || a.isZeroArea()),
      eg(t, a),
      t.beginPath(),
      a.buildPath(t, a.shape),
      t.clip();
  }
  e.allClipped = i;
}
function Eb(r, t) {
  return r && t
    ? r[0] !== t[0] ||
        r[1] !== t[1] ||
        r[2] !== t[2] ||
        r[3] !== t[3] ||
        r[4] !== t[4] ||
        r[5] !== t[5]
    : !(!r && !t);
}
var yv = 1,
  _v = 2,
  mv = 3,
  wv = 4;
function Ob(r) {
  var t = eo(r),
    e = to(r);
  return !(
    r.lineDash ||
    !(+t ^ +e) ||
    (t && typeof r.fill != "string") ||
    (e && typeof r.stroke != "string") ||
    r.strokePercent < 1 ||
    r.strokeOpacity < 1 ||
    r.fillOpacity < 1
  );
}
function Rt(r, t) {
  t.batchFill && r.fill(),
    t.batchStroke && r.stroke(),
    (t.batchFill = ""),
    (t.batchStroke = "");
}
function bn(r, t) {
  return (t && r.__hoverStyle) || r.style;
}
function rg(r, t) {
  Lr(r, t, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
}
function Lr(r, t, e, i) {
  var n = t.transform;
  if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
    (t.__dirty &= ~Gt), (t.__isRendered = !1);
    return;
  }
  var a = t.__clipPaths,
    o = e.prevElClipPaths,
    s = !1,
    u = !1;
  if (
    ((!o || Cb(a, o)) &&
      (o &&
        o.length &&
        (Rt(r, e),
        r.restore(),
        (u = s = !0),
        (e.prevElClipPaths = null),
        (e.allClipped = !1),
        (e.prevEl = null)),
      a && a.length && (Rt(r, e), r.save(), Rb(a, r, e), (s = !0)),
      (e.prevElClipPaths = a)),
    e.allClipped)
  ) {
    t.__isRendered = !1;
    return;
  }
  t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
  var l = e.prevEl;
  l || (u = s = !0);
  var f = t instanceof it && t.autoBatch && Ob(t.style);
  s || Eb(n, l.transform) ? (Rt(r, e), eg(r, t)) : f || Rt(r, e);
  var h = bn(t, e.inHover);
  t instanceof it
    ? (e.lastDrawType !== yv && ((u = !0), (e.lastDrawType = yv)),
      gv(r, t, l, u, e),
      (!f || (!e.batchFill && !e.batchStroke)) && r.beginPath(),
      Pb(r, t, h, f),
      f && ((e.batchFill = h.fill || ""), (e.batchStroke = h.stroke || "")))
    : t instanceof pu
    ? (e.lastDrawType !== mv && ((u = !0), (e.lastDrawType = mv)),
      gv(r, t, l, u, e),
      Lb(r, t, h))
    : t instanceof _i
    ? (e.lastDrawType !== _v && ((u = !0), (e.lastDrawType = _v)),
      Ib(r, t, l, u, e),
      Ab(r, t, h))
    : t.getTemporalDisplayables &&
      (e.lastDrawType !== wv && ((u = !0), (e.lastDrawType = wv)), kb(r, t, e)),
    f && i && Rt(r, e),
    t.innerAfterBrush(),
    t.afterBrush && t.afterBrush(),
    (e.prevEl = t),
    (t.__dirty = 0),
    (t.__isRendered = !0);
}
function kb(r, t, e) {
  var i = t.getDisplayables(),
    n = t.getTemporalDisplayables();
  r.save();
  var a = {
      prevElClipPaths: null,
      prevEl: null,
      allClipped: !1,
      viewWidth: e.viewWidth,
      viewHeight: e.viewHeight,
      inHover: e.inHover,
    },
    o,
    s;
  for (o = t.getCursor(), s = i.length; o < s; o++) {
    var u = i[o];
    u.beforeBrush && u.beforeBrush(),
      u.innerBeforeBrush(),
      Lr(r, u, a, o === s - 1),
      u.innerAfterBrush(),
      u.afterBrush && u.afterBrush(),
      (a.prevEl = u);
  }
  for (var l = 0, f = n.length; l < f; l++) {
    var u = n[l];
    u.beforeBrush && u.beforeBrush(),
      u.innerBeforeBrush(),
      Lr(r, u, a, l === f - 1),
      u.innerAfterBrush(),
      u.afterBrush && u.afterBrush(),
      (a.prevEl = u);
  }
  t.clearTemporalDisplayables(), (t.notClear = !0), r.restore();
}
var Ms = new cb(),
  Sv = new Dn(100),
  bv = [
    "symbol",
    "symbolSize",
    "symbolKeepAspect",
    "color",
    "backgroundColor",
    "dashArrayX",
    "dashArrayY",
    "maxTileWidth",
    "maxTileHeight",
  ];
function Nu(r, t) {
  if (r === "none") return null;
  var e = t.getDevicePixelRatio(),
    i = t.getZr(),
    n = i.painter.type === "svg";
  r.dirty && Ms.delete(r);
  var a = Ms.get(r);
  if (a) return a;
  var o = nt(r, {
    symbol: "rect",
    symbolSize: 1,
    symbolKeepAspect: !0,
    color: "rgba(0, 0, 0, 0.2)",
    backgroundColor: null,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
    maxTileWidth: 512,
    maxTileHeight: 512,
  });
  o.backgroundColor === "none" && (o.backgroundColor = null);
  var s = { repeat: "repeat" };
  return (
    u(s),
    (s.rotation = o.rotation),
    (s.scaleX = s.scaleY = n ? 1 : 1 / e),
    Ms.set(r, s),
    (r.dirty = !1),
    s
  );
  function u(l) {
    for (var f = [e], h = !0, c = 0; c < bv.length; ++c) {
      var v = o[bv[c]];
      if (v != null && !k(v) && !B(v) && !ht(v) && typeof v != "boolean") {
        h = !1;
        break;
      }
      f.push(v);
    }
    var d;
    if (h) {
      d = f.join(",") + (n ? "-svg" : "");
      var y = Sv.get(d);
      y && (n ? (l.svgElement = y) : (l.image = y));
    }
    var p = ng(o.dashArrayX),
      g = Bb(o.dashArrayY),
      _ = ig(o.symbol),
      m = Fb(p),
      w = ag(g),
      b = !n && Br.createCanvas(),
      S = n && { tag: "g", attrs: {}, key: "dcl", children: [] },
      D = x(),
      T;
    b &&
      ((b.width = D.width * e),
      (b.height = D.height * e),
      (T = b.getContext("2d"))),
      M(),
      h && Sv.put(d, b || S),
      (l.image = b),
      (l.svgElement = S),
      (l.svgWidth = D.width),
      (l.svgHeight = D.height);
    function x() {
      for (var P = 1, A = 0, L = m.length; A < L; ++A) P = Rf(P, m[A]);
      for (var I = 1, A = 0, L = _.length; A < L; ++A) I = Rf(I, _[A].length);
      P *= I;
      var R = w * m.length * _.length;
      return {
        width: Math.max(1, Math.min(P, o.maxTileWidth)),
        height: Math.max(1, Math.min(R, o.maxTileHeight)),
      };
    }
    function M() {
      T &&
        (T.clearRect(0, 0, b.width, b.height),
        o.backgroundColor &&
          ((T.fillStyle = o.backgroundColor),
          T.fillRect(0, 0, b.width, b.height)));
      for (var P = 0, A = 0; A < g.length; ++A) P += g[A];
      if (P <= 0) return;
      for (var L = -w, I = 0, R = 0, E = 0; L < D.height; ) {
        if (I % 2 === 0) {
          for (
            var G = (R / 2) % _.length, N = 0, z = 0, V = 0;
            N < D.width * 2;

          ) {
            for (var at = 0, A = 0; A < p[E].length; ++A) at += p[E][A];
            if (at <= 0) break;
            if (z % 2 === 0) {
              var tt = (1 - o.symbolSize) * 0.5,
                _t = N + p[E][z] * tt,
                Ut = L + g[I] * tt,
                Fe = p[E][z] * o.symbolSize,
                je = g[I] * o.symbolSize,
                tr = (V / 2) % _[G].length;
              zr(_t, Ut, Fe, je, _[G][tr]);
            }
            (N += p[E][z]), ++V, ++z, z === p[E].length && (z = 0);
          }
          ++E, E === p.length && (E = 0);
        }
        (L += g[I]), ++R, ++I, I === g.length && (I = 0);
      }
      function zr(Nt, ct, H, Y, er) {
        var Ct = n ? 1 : e,
          jl = zl(
            er,
            Nt * Ct,
            ct * Ct,
            H * Ct,
            Y * Ct,
            o.color,
            o.symbolKeepAspect
          );
        if (n) {
          var tf = i.painter.renderOneToVNode(jl);
          tf && S.children.push(tf);
        } else rg(T, jl);
      }
    }
  }
}
function ig(r) {
  if (!r || r.length === 0) return [["rect"]];
  if (B(r)) return [[r]];
  for (var t = !0, e = 0; e < r.length; ++e)
    if (!B(r[e])) {
      t = !1;
      break;
    }
  if (t) return ig([r]);
  for (var i = [], e = 0; e < r.length; ++e)
    B(r[e]) ? i.push([r[e]]) : i.push(r[e]);
  return i;
}
function ng(r) {
  if (!r || r.length === 0) return [[0, 0]];
  if (ht(r)) {
    var t = Math.ceil(r);
    return [[t, t]];
  }
  for (var e = !0, i = 0; i < r.length; ++i)
    if (!ht(r[i])) {
      e = !1;
      break;
    }
  if (e) return ng([r]);
  for (var n = [], i = 0; i < r.length; ++i)
    if (ht(r[i])) {
      var t = Math.ceil(r[i]);
      n.push([t, t]);
    } else {
      var t = U(r[i], function (s) {
        return Math.ceil(s);
      });
      t.length % 2 === 1 ? n.push(t.concat(t)) : n.push(t);
    }
  return n;
}
function Bb(r) {
  if (!r || (typeof r == "object" && r.length === 0)) return [0, 0];
  if (ht(r)) {
    var t = Math.ceil(r);
    return [t, t];
  }
  var e = U(r, function (i) {
    return Math.ceil(i);
  });
  return r.length % 2 ? e.concat(e) : e;
}
function Fb(r) {
  return U(r, function (t) {
    return ag(t);
  });
}
function ag(r) {
  for (var t = 0, e = 0; e < r.length; ++e) t += r[e];
  return r.length % 2 === 1 ? t * 2 : t;
}
function Nb(r, t) {
  r.eachRawSeries(function (e) {
    if (!r.isSeriesFiltered(e)) {
      var i = e.getData();
      i.hasItemVisual() &&
        i.each(function (o) {
          var s = i.getItemVisual(o, "decal");
          if (s) {
            var u = i.ensureUniqueItemVisual(o, "style");
            u.decal = Nu(s, t);
          }
        });
      var n = i.getVisual("decal");
      if (n) {
        var a = i.getVisual("style");
        a.decal = Nu(n, t);
      }
    }
  });
}
var zb = new Te(),
  ae = zb,
  og = {};
function Hb(r, t) {
  og[r] = t;
}
function Gb(r) {
  return og[r];
}
var Vb = typeof window != "undefined",
  Wb = 1,
  Ub = 800,
  Yb = 900,
  $b = 1e3,
  Xb = 2e3,
  qb = 5e3,
  sg = 1e3,
  Zb = 1100,
  Hl = 2e3,
  ug = 3e3,
  Kb = 4e3,
  Po = 4500,
  Qb = 4600,
  Jb = 5e3,
  jb = 6e3,
  lg = 7e3,
  tT = {
    PROCESSOR: { FILTER: $b, SERIES_FILTER: Ub, STATISTIC: qb },
    VISUAL: {
      LAYOUT: sg,
      PROGRESSIVE_LAYOUT: Zb,
      GLOBAL: Hl,
      CHART: ug,
      POST_CHART_LAYOUT: Qb,
      COMPONENT: Kb,
      BRUSH: Jb,
      CHART_ITEM: Po,
      ARIA: jb,
      DECAL: lg,
    },
  },
  wt = "__flagInMainProcess",
  Lt = "__pendingUpdate",
  Ps = "__needsUpdateStatus",
  Tv = /^[a-zA-Z0-9_]+$/,
  As = "__connectUpdateStatus",
  xv = 0,
  eT = 1,
  rT = 2;
function fg(r) {
  return function () {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    if (this.isDisposed()) {
      this.id;
      return;
    }
    return vg(this, r, t);
  };
}
function hg(r) {
  return function () {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return vg(this, r, t);
  };
}
function vg(r, t, e) {
  return (e[0] = e[0] && e[0].toLowerCase()), Te.prototype[t].apply(r, e);
}
var cg = (function (r) {
    rt(t, r);
    function t() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return t;
  })(Te),
  dg = cg.prototype;
dg.on = hg("on");
dg.off = hg("off");
var Jr,
  Ls,
  sa,
  Ge,
  Is,
  Rs,
  Es,
  Oi,
  ki,
  Cv,
  Dv,
  Os,
  Mv,
  ua,
  Pv,
  pg,
  Yt,
  Av,
  gg = (function (r) {
    rt(t, r);
    function t(e, i, n) {
      var a = r.call(this, new nb()) || this;
      (a._chartsViews = []),
        (a._chartsMap = {}),
        (a._componentsViews = []),
        (a._componentsMap = {}),
        (a._pendingActions = []),
        (n = n || {}),
        B(i) && (i = yg[i]),
        (a._dom = e);
      var o = "canvas",
        s = !1,
        u = (a._zr = Lf(e, {
          renderer: n.renderer || o,
          devicePixelRatio: n.devicePixelRatio,
          width: n.width,
          height: n.height,
          ssr: n.ssr,
          useDirtyRect: n.useDirtyRect == null ? s : n.useDirtyRect,
        }));
      (a._ssr = n.ssr),
        (a._throttledZrFlush = Nl(st(u.flush, u), 17)),
        (i = X(i)),
        i && Cp(i, !0),
        (a._theme = i),
        (a._locale = uw(n.locale || ep)),
        (a._coordSysMgr = new Tp());
      var l = (a._api = Pv(a));
      function f(h, c) {
        return h.__prio - c.__prio;
      }
      return (
        ma(io, f),
        ma(zu, f),
        (a._scheduler = new Qp(a, l, zu, io)),
        (a._messageCenter = new cg()),
        a._initEvents(),
        (a.resize = st(a.resize, a)),
        u.animation.on("frame", a._onframe, a),
        Cv(u, a),
        Dv(u, a),
        Fa(a),
        a
      );
    }
    return (
      (t.prototype._onframe = function () {
        if (!this._disposed) {
          Av(this);
          var e = this._scheduler;
          if (this[Lt]) {
            var i = this[Lt].silent;
            this[wt] = !0;
            try {
              Jr(this), Ge.update.call(this, null, this[Lt].updateParams);
            } catch (u) {
              throw ((this[wt] = !1), (this[Lt] = null), u);
            }
            this._zr.flush(),
              (this[wt] = !1),
              (this[Lt] = null),
              Oi.call(this, i),
              ki.call(this, i);
          } else if (e.unfinished) {
            var n = Wb,
              a = this._model,
              o = this._api;
            e.unfinished = !1;
            do {
              var s = +new Date();
              e.performSeriesTasks(a),
                e.performDataProcessorTasks(a),
                Rs(this, a),
                e.performVisualTasks(a),
                ua(this, this._model, o, "remain", {}),
                (n -= +new Date() - s);
            } while (n > 0 && e.unfinished);
            e.unfinished || this._zr.flush();
          }
        }
      }),
      (t.prototype.getDom = function () {
        return this._dom;
      }),
      (t.prototype.getId = function () {
        return this.id;
      }),
      (t.prototype.getZr = function () {
        return this._zr;
      }),
      (t.prototype.isSSR = function () {
        return this._ssr;
      }),
      (t.prototype.setOption = function (e, i, n) {
        if (!this[wt]) {
          if (this._disposed) {
            this.id;
            return;
          }
          var a, o, s;
          if (
            (F(i) &&
              ((n = i.lazyUpdate),
              (a = i.silent),
              (o = i.replaceMerge),
              (s = i.transition),
              (i = i.notMerge)),
            (this[wt] = !0),
            !this._model || i)
          ) {
            var u = new Vw(this._api),
              l = this._theme,
              f = (this._model = new Sp());
            (f.scheduler = this._scheduler),
              (f.ssr = this._ssr),
              f.init(null, null, null, l, this._locale, u);
          }
          this._model.setOption(e, { replaceMerge: o }, Hu);
          var h = { seriesTransition: s, optionChanged: !0 };
          if (n)
            (this[Lt] = { silent: a, updateParams: h }),
              (this[wt] = !1),
              this.getZr().wakeUp();
          else {
            try {
              Jr(this), Ge.update.call(this, null, h);
            } catch (c) {
              throw ((this[Lt] = null), (this[wt] = !1), c);
            }
            this._ssr || this._zr.flush(),
              (this[Lt] = null),
              (this[wt] = !1),
              Oi.call(this, a),
              ki.call(this, a);
          }
        }
      }),
      (t.prototype.setTheme = function () {}),
      (t.prototype.getModel = function () {
        return this._model;
      }),
      (t.prototype.getOption = function () {
        return this._model && this._model.getOption();
      }),
      (t.prototype.getWidth = function () {
        return this._zr.getWidth();
      }),
      (t.prototype.getHeight = function () {
        return this._zr.getHeight();
      }),
      (t.prototype.getDevicePixelRatio = function () {
        return this._zr.painter.dpr || (Vb && window.devicePixelRatio) || 1;
      }),
      (t.prototype.getRenderedCanvas = function (e) {
        return this.renderToCanvas(e);
      }),
      (t.prototype.renderToCanvas = function (e) {
        e = e || {};
        var i = this._zr.painter;
        return i.getRenderedCanvas({
          backgroundColor:
            e.backgroundColor || this._model.get("backgroundColor"),
          pixelRatio: e.pixelRatio || this.getDevicePixelRatio(),
        });
      }),
      (t.prototype.renderToSVGString = function (e) {
        e = e || {};
        var i = this._zr.painter;
        return i.renderToString({ useViewBox: e.useViewBox });
      }),
      (t.prototype.getSvgDataURL = function () {
        if (!!W.svgSupported) {
          var e = this._zr,
            i = e.storage.getDisplayList();
          return (
            C(i, function (n) {
              n.stopAnimation(null, !0);
            }),
            e.painter.toDataURL()
          );
        }
      }),
      (t.prototype.getDataURL = function (e) {
        if (this._disposed) {
          this.id;
          return;
        }
        e = e || {};
        var i = e.excludeComponents,
          n = this._model,
          a = [],
          o = this;
        C(i, function (u) {
          n.eachComponent({ mainType: u }, function (l) {
            var f = o._componentsMap[l.__viewId];
            f.group.ignore || (a.push(f), (f.group.ignore = !0));
          });
        });
        var s =
          this._zr.painter.getType() === "svg"
            ? this.getSvgDataURL()
            : this.renderToCanvas(e).toDataURL(
                "image/" + ((e && e.type) || "png")
              );
        return (
          C(a, function (u) {
            u.group.ignore = !1;
          }),
          s
        );
      }),
      (t.prototype.getConnectedDataURL = function (e) {
        if (this._disposed) {
          this.id;
          return;
        }
        var i = e.type === "svg",
          n = this.group,
          a = Math.min,
          o = Math.max,
          s = 1 / 0;
        if (Lv[n]) {
          var u = s,
            l = s,
            f = -s,
            h = -s,
            c = [],
            v = (e && e.pixelRatio) || this.getDevicePixelRatio();
          C(sn, function (m, w) {
            if (m.group === n) {
              var b = i
                  ? m.getZr().painter.getSvgDom().innerHTML
                  : m.renderToCanvas(X(e)),
                S = m.getDom().getBoundingClientRect();
              (u = a(S.left, u)),
                (l = a(S.top, l)),
                (f = o(S.right, f)),
                (h = o(S.bottom, h)),
                c.push({ dom: b, left: S.left, top: S.top });
            }
          }),
            (u *= v),
            (l *= v),
            (f *= v),
            (h *= v);
          var d = f - u,
            y = h - l,
            p = Br.createCanvas(),
            g = Lf(p, { renderer: i ? "svg" : "canvas" });
          if ((g.resize({ width: d, height: y }), i)) {
            var _ = "";
            return (
              C(c, function (m) {
                var w = m.left - u,
                  b = m.top - l;
                _ +=
                  '<g transform="translate(' +
                  w +
                  "," +
                  b +
                  ')">' +
                  m.dom +
                  "</g>";
              }),
              (g.painter.getSvgRoot().innerHTML = _),
              e.connectedBackgroundColor &&
                g.painter.setBackgroundColor(e.connectedBackgroundColor),
              g.refreshImmediately(),
              g.painter.toDataURL()
            );
          } else
            return (
              e.connectedBackgroundColor &&
                g.add(
                  new Ot({
                    shape: { x: 0, y: 0, width: d, height: y },
                    style: { fill: e.connectedBackgroundColor },
                  })
                ),
              C(c, function (m) {
                var w = new _i({
                  style: { x: m.left * v - u, y: m.top * v - l, image: m.dom },
                });
                g.add(w);
              }),
              g.refreshImmediately(),
              p.toDataURL("image/" + ((e && e.type) || "png"))
            );
        } else return this.getDataURL(e);
      }),
      (t.prototype.convertToPixel = function (e, i) {
        return Is(this, "convertToPixel", e, i);
      }),
      (t.prototype.convertFromPixel = function (e, i) {
        return Is(this, "convertFromPixel", e, i);
      }),
      (t.prototype.containPixel = function (e, i) {
        if (this._disposed) {
          this.id;
          return;
        }
        var n = this._model,
          a,
          o = ts(n, e);
        return (
          C(
            o,
            function (s, u) {
              u.indexOf("Models") >= 0 &&
                C(
                  s,
                  function (l) {
                    var f = l.coordinateSystem;
                    if (f && f.containPoint) a = a || !!f.containPoint(i);
                    else if (u === "seriesModels") {
                      var h = this._chartsMap[l.__viewId];
                      h && h.containPoint && (a = a || h.containPoint(i, l));
                    }
                  },
                  this
                );
            },
            this
          ),
          !!a
        );
      }),
      (t.prototype.getVisual = function (e, i) {
        var n = this._model,
          a = ts(n, e, { defaultMainType: "series" }),
          o = a.seriesModel,
          s = o.getData(),
          u = a.hasOwnProperty("dataIndexInside")
            ? a.dataIndexInside
            : a.hasOwnProperty("dataIndex")
            ? s.indexOfRawIndex(a.dataIndex)
            : null;
        return u != null ? sb(s, u, i) : ub(s, i);
      }),
      (t.prototype.getViewOfComponentModel = function (e) {
        return this._componentsMap[e.__viewId];
      }),
      (t.prototype.getViewOfSeriesModel = function (e) {
        return this._chartsMap[e.__viewId];
      }),
      (t.prototype._initEvents = function () {
        var e = this;
        C(iT, function (i) {
          var n = function (a) {
            var o = e.getModel(),
              s = a.target,
              u,
              l = i === "globalout";
            if (
              (l
                ? (u = {})
                : s &&
                  Zi(
                    s,
                    function (d) {
                      var y = lt(d);
                      if (y && y.dataIndex != null) {
                        var p =
                          y.dataModel || o.getSeriesByIndex(y.seriesIndex);
                        return (
                          (u =
                            (p && p.getDataParams(y.dataIndex, y.dataType)) ||
                            {}),
                          !0
                        );
                      } else if (y.eventData)
                        return (u = O({}, y.eventData)), !0;
                    },
                    !0
                  ),
              u)
            ) {
              var f = u.componentType,
                h = u.componentIndex;
              (f === "markLine" || f === "markPoint" || f === "markArea") &&
                ((f = "series"), (h = u.seriesIndex));
              var c = f && h != null && o.getComponent(f, h),
                v =
                  c &&
                  e[c.mainType === "series" ? "_chartsMap" : "_componentsMap"][
                    c.__viewId
                  ];
              (u.event = a),
                (u.type = i),
                (e._$eventProcessor.eventInfo = {
                  targetEl: s,
                  packedEvent: u,
                  model: c,
                  view: v,
                }),
                e.trigger(i, u);
            }
          };
          (n.zrEventfulCallAtLast = !0), e._zr.on(i, n, e);
        }),
          C(on, function (i, n) {
            e._messageCenter.on(
              n,
              function (a) {
                this.trigger(n, a);
              },
              e
            );
          }),
          C(["selectchanged"], function (i) {
            e._messageCenter.on(
              i,
              function (n) {
                this.trigger(i, n);
              },
              e
            );
          }),
          lb(this._messageCenter, this, this._api);
      }),
      (t.prototype.isDisposed = function () {
        return this._disposed;
      }),
      (t.prototype.clear = function () {
        if (this._disposed) {
          this.id;
          return;
        }
        this.setOption({ series: [] }, !0);
      }),
      (t.prototype.dispose = function () {
        if (this._disposed) {
          this.id;
          return;
        }
        this._disposed = !0;
        var e = this.getDom();
        e && jc(this.getDom(), Vl, "");
        var i = this,
          n = i._api,
          a = i._model;
        C(i._componentsViews, function (o) {
          o.dispose(a, n);
        }),
          C(i._chartsViews, function (o) {
            o.dispose(a, n);
          }),
          i._zr.dispose(),
          (i._dom =
            i._model =
            i._chartsMap =
            i._componentsMap =
            i._chartsViews =
            i._componentsViews =
            i._scheduler =
            i._api =
            i._zr =
            i._throttledZrFlush =
            i._theme =
            i._coordSysMgr =
            i._messageCenter =
              null),
          delete sn[i.id];
      }),
      (t.prototype.resize = function (e) {
        if (!this[wt]) {
          if (this._disposed) {
            this.id;
            return;
          }
          this._zr.resize(e);
          var i = this._model;
          if ((this._loadingFX && this._loadingFX.resize(), !!i)) {
            var n = i.resetOption("media"),
              a = e && e.silent;
            this[Lt] &&
              (a == null && (a = this[Lt].silent), (n = !0), (this[Lt] = null)),
              (this[wt] = !0);
            try {
              n && Jr(this),
                Ge.update.call(this, {
                  type: "resize",
                  animation: O({ duration: 0 }, e && e.animation),
                });
            } catch (o) {
              throw ((this[wt] = !1), o);
            }
            (this[wt] = !1), Oi.call(this, a), ki.call(this, a);
          }
        }
      }),
      (t.prototype.showLoading = function (e, i) {
        if (this._disposed) {
          this.id;
          return;
        }
        if (
          (F(e) && ((i = e), (e = "")),
          (e = e || "default"),
          this.hideLoading(),
          !!Gu[e])
        ) {
          var n = Gu[e](this._api, i),
            a = this._zr;
          (this._loadingFX = n), a.add(n);
        }
      }),
      (t.prototype.hideLoading = function () {
        if (this._disposed) {
          this.id;
          return;
        }
        this._loadingFX && this._zr.remove(this._loadingFX),
          (this._loadingFX = null);
      }),
      (t.prototype.makeActionFromEvent = function (e) {
        var i = O({}, e);
        return (i.type = on[e.type]), i;
      }),
      (t.prototype.dispatchAction = function (e, i) {
        if (this._disposed) {
          this.id;
          return;
        }
        if ((F(i) || (i = { silent: !!i }), !!ro[e.type] && !!this._model)) {
          if (this[wt]) {
            this._pendingActions.push(e);
            return;
          }
          var n = i.silent;
          Es.call(this, e, n);
          var a = i.flush;
          a
            ? this._zr.flush()
            : a !== !1 && W.browser.weChat && this._throttledZrFlush(),
            Oi.call(this, n),
            ki.call(this, n);
        }
      }),
      (t.prototype.updateLabelLayout = function () {
        ae.trigger("series:layoutlabels", this._model, this._api, {
          updatedSeries: [],
        });
      }),
      (t.prototype.appendData = function (e) {
        if (this._disposed) {
          this.id;
          return;
        }
        var i = e.seriesIndex,
          n = this.getModel(),
          a = n.getSeriesByIndex(i);
        a.appendData(e),
          (this._scheduler.unfinished = !0),
          this.getZr().wakeUp();
      }),
      (t.internalField = (function () {
        (Jr = function (h) {
          var c = h._scheduler;
          c.restorePipelines(h._model),
            c.prepareStageTasks(),
            Ls(h, !0),
            Ls(h, !1),
            c.plan();
        }),
          (Ls = function (h, c) {
            for (
              var v = h._model,
                d = h._scheduler,
                y = c ? h._componentsViews : h._chartsViews,
                p = c ? h._componentsMap : h._chartsMap,
                g = h._zr,
                _ = h._api,
                m = 0;
              m < y.length;
              m++
            )
              y[m].__alive = !1;
            c
              ? v.eachComponent(function (S, D) {
                  S !== "series" && w(D);
                })
              : v.eachSeries(w);
            function w(S) {
              var D = S.__requireNewView;
              S.__requireNewView = !1;
              var T = "_ec_" + S.id + "_" + S.type,
                x = !D && p[T];
              if (!x) {
                var M = _e(S.type),
                  P = c ? Ee.getClass(M.main, M.sub) : an.getClass(M.sub);
                (x = new P()),
                  x.init(v, _),
                  (p[T] = x),
                  y.push(x),
                  g.add(x.group);
              }
              (S.__viewId = x.__id = T),
                (x.__alive = !0),
                (x.__model = S),
                (x.group.__ecComponentInfo = {
                  mainType: S.mainType,
                  index: S.componentIndex,
                }),
                !c && d.prepareView(x, S, v, _);
            }
            for (var m = 0; m < y.length; ) {
              var b = y[m];
              b.__alive
                ? m++
                : (!c && b.renderTask.dispose(),
                  g.remove(b.group),
                  b.dispose(v, _),
                  y.splice(m, 1),
                  p[b.__id] === b && delete p[b.__id],
                  (b.__id = b.group.__ecComponentInfo = null));
            }
          }),
          (sa = function (h, c, v, d, y) {
            var p = h._model;
            if ((p.setUpdatePayload(v), !d)) {
              C([].concat(h._componentsViews).concat(h._chartsViews), b);
              return;
            }
            var g = {};
            (g[d + "Id"] = v[d + "Id"]),
              (g[d + "Index"] = v[d + "Index"]),
              (g[d + "Name"] = v[d + "Name"]);
            var _ = { mainType: d, query: g };
            y && (_.subType = y);
            var m = v.excludeSeriesId,
              w;
            m != null &&
              ((w = $()),
              C(xt(m), function (S) {
                var D = le(S, null);
                D != null && w.set(D, !0);
              })),
              p &&
                p.eachComponent(
                  _,
                  function (S) {
                    var D = w && w.get(S.id) !== null;
                    if (!D)
                      if (lh(v))
                        if (S instanceof Qa)
                          v.type === Rr &&
                            !v.notBlur &&
                            !S.get(["emphasis", "disabled"]) &&
                            Om(S, v, h._api);
                        else {
                          var T = pl(
                              S.mainType,
                              S.componentIndex,
                              v.name,
                              h._api
                            ),
                            x = T.focusSelf,
                            M = T.dispatchers;
                          v.type === Rr &&
                            x &&
                            !v.notBlur &&
                            mu(S.mainType, S.componentIndex, h._api),
                            M &&
                              C(M, function (P) {
                                v.type === Rr ? gu(P) : yu(P);
                              });
                        }
                      else
                        bu(v) &&
                          S instanceof Qa &&
                          (Fm(S, v, h._api), sh(S), Yt(h));
                  },
                  h
                ),
              p &&
                p.eachComponent(
                  _,
                  function (S) {
                    var D = w && w.get(S.id) !== null;
                    D ||
                      b(
                        h[d === "series" ? "_chartsMap" : "_componentsMap"][
                          S.__viewId
                        ]
                      );
                  },
                  h
                );
            function b(S) {
              S && S.__alive && S[c] && S[c](S.__model, p, h._api, v);
            }
          }),
          (Ge = {
            prepareAndUpdate: function (h) {
              Jr(this),
                Ge.update.call(this, h, { optionChanged: h.newOption != null });
            },
            update: function (h, c) {
              var v = this._model,
                d = this._api,
                y = this._zr,
                p = this._coordSysMgr,
                g = this._scheduler;
              if (!!v) {
                v.setUpdatePayload(h),
                  g.restoreData(v, h),
                  g.performSeriesTasks(v),
                  p.create(v, d),
                  g.performDataProcessorTasks(v, h),
                  Rs(this, v),
                  p.update(v, d),
                  e(v),
                  g.performVisualTasks(v, h),
                  Os(this, v, d, h, c);
                var _ = v.get("backgroundColor") || "transparent",
                  m = v.get("darkMode");
                y.setBackgroundColor(_),
                  m != null && m !== "auto" && y.setDarkMode(m),
                  ae.trigger("afterupdate", v, d);
              }
            },
            updateTransform: function (h) {
              var c = this,
                v = this._model,
                d = this._api;
              if (!!v) {
                v.setUpdatePayload(h);
                var y = [];
                v.eachComponent(function (g, _) {
                  if (g !== "series") {
                    var m = c.getViewOfComponentModel(_);
                    if (m && m.__alive)
                      if (m.updateTransform) {
                        var w = m.updateTransform(_, v, d, h);
                        w && w.update && y.push(m);
                      } else y.push(m);
                  }
                });
                var p = $();
                v.eachSeries(function (g) {
                  var _ = c._chartsMap[g.__viewId];
                  if (_.updateTransform) {
                    var m = _.updateTransform(g, v, d, h);
                    m && m.update && p.set(g.uid, 1);
                  } else p.set(g.uid, 1);
                }),
                  e(v),
                  this._scheduler.performVisualTasks(v, h, {
                    setDirty: !0,
                    dirtyMap: p,
                  }),
                  ua(this, v, d, h, {}, p),
                  ae.trigger("afterupdate", v, d);
              }
            },
            updateView: function (h) {
              var c = this._model;
              !c ||
                (c.setUpdatePayload(h),
                an.markUpdateMethod(h, "updateView"),
                e(c),
                this._scheduler.performVisualTasks(c, h, { setDirty: !0 }),
                Os(this, c, this._api, h, {}),
                ae.trigger("afterupdate", c, this._api));
            },
            updateVisual: function (h) {
              var c = this,
                v = this._model;
              !v ||
                (v.setUpdatePayload(h),
                v.eachSeries(function (d) {
                  d.getData().clearAllVisual();
                }),
                an.markUpdateMethod(h, "updateVisual"),
                e(v),
                this._scheduler.performVisualTasks(v, h, {
                  visualType: "visual",
                  setDirty: !0,
                }),
                v.eachComponent(function (d, y) {
                  if (d !== "series") {
                    var p = c.getViewOfComponentModel(y);
                    p && p.__alive && p.updateVisual(y, v, c._api, h);
                  }
                }),
                v.eachSeries(function (d) {
                  var y = c._chartsMap[d.__viewId];
                  y.updateVisual(d, v, c._api, h);
                }),
                ae.trigger("afterupdate", v, this._api));
            },
            updateLayout: function (h) {
              Ge.update.call(this, h);
            },
          }),
          (Is = function (h, c, v, d) {
            if (h._disposed) {
              h.id;
              return;
            }
            for (
              var y = h._model,
                p = h._coordSysMgr.getCoordinateSystems(),
                g,
                _ = ts(y, v),
                m = 0;
              m < p.length;
              m++
            ) {
              var w = p[m];
              if (w[c] && (g = w[c](y, _, d)) != null) return g;
            }
          }),
          (Rs = function (h, c) {
            var v = h._chartsMap,
              d = h._scheduler;
            c.eachSeries(function (y) {
              d.updateStreamModes(y, v[y.__viewId]);
            });
          }),
          (Es = function (h, c) {
            var v = this,
              d = this.getModel(),
              y = h.type,
              p = h.escapeConnect,
              g = ro[y],
              _ = g.actionInfo,
              m = (_.update || "update").split(":"),
              w = m.pop(),
              b = m[0] != null && _e(m[0]);
            this[wt] = !0;
            var S = [h],
              D = !1;
            h.batch &&
              ((D = !0),
              (S = U(h.batch, function (I) {
                return (I = nt(O({}, I), h)), (I.batch = null), I;
              })));
            var T = [],
              x,
              M = bu(h),
              P = lh(h);
            if (
              (P && bd(this._api),
              C(S, function (I) {
                if (
                  ((x = g.action(I, v._model, v._api)),
                  (x = x || O({}, I)),
                  (x.type = _.event || x.type),
                  T.push(x),
                  P)
                ) {
                  var R = fl(h),
                    E = R.queryOptionMap,
                    G = R.mainTypeSpecified,
                    N = G ? E.keys()[0] : "series";
                  sa(v, w, I, N), Yt(v);
                } else M ? (sa(v, w, I, "series"), Yt(v)) : b && sa(v, w, I, b.main, b.sub);
              }),
              w !== "none" && !P && !M && !b)
            )
              try {
                this[Lt]
                  ? (Jr(this), Ge.update.call(this, h), (this[Lt] = null))
                  : Ge[w].call(this, h);
              } catch (I) {
                throw ((this[wt] = !1), I);
              }
            if (
              (D
                ? (x = { type: _.event || y, escapeConnect: p, batch: T })
                : (x = T[0]),
              (this[wt] = !1),
              !c)
            ) {
              var A = this._messageCenter;
              if ((A.trigger(x.type, x), M)) {
                var L = {
                  type: "selectchanged",
                  escapeConnect: p,
                  selected: Nm(d),
                  isFromClick: h.isFromClick || !1,
                  fromAction: h.type,
                  fromActionPayload: h,
                };
                A.trigger(L.type, L);
              }
            }
          }),
          (Oi = function (h) {
            for (var c = this._pendingActions; c.length; ) {
              var v = c.shift();
              Es.call(this, v, h);
            }
          }),
          (ki = function (h) {
            !h && this.trigger("updated");
          }),
          (Cv = function (h, c) {
            h.on("rendered", function (v) {
              c.trigger("rendered", v),
                h.animation.isFinished() &&
                  !c[Lt] &&
                  !c._scheduler.unfinished &&
                  !c._pendingActions.length &&
                  c.trigger("finished");
            });
          }),
          (Dv = function (h, c) {
            h.on("mouseover", function (v) {
              var d = v.target,
                y = Zi(d, Su);
              y && (km(y, v, c._api), Yt(c));
            })
              .on("mouseout", function (v) {
                var d = v.target,
                  y = Zi(d, Su);
                y && (Bm(y, v, c._api), Yt(c));
              })
              .on("click", function (v) {
                var d = v.target,
                  y = Zi(
                    d,
                    function (_) {
                      return lt(_).dataIndex != null;
                    },
                    !0
                  );
                if (y) {
                  var p = y.selected ? "unselect" : "select",
                    g = lt(y);
                  c._api.dispatchAction({
                    type: p,
                    dataType: g.dataType,
                    dataIndexInside: g.dataIndex,
                    seriesIndex: g.seriesIndex,
                    isFromClick: !0,
                  });
                }
              });
          });
        function e(h) {
          h.clearColorPalette(),
            h.eachSeries(function (c) {
              c.clearColorPalette();
            });
        }
        function i(h) {
          var c = [],
            v = [],
            d = !1;
          if (
            (h.eachComponent(function (_, m) {
              var w = m.get("zlevel") || 0,
                b = m.get("z") || 0,
                S = m.getZLevelKey();
              (d = d || !!S),
                (_ === "series" ? v : c).push({
                  zlevel: w,
                  z: b,
                  idx: m.componentIndex,
                  type: _,
                  key: S,
                });
            }),
            d)
          ) {
            var y = c.concat(v),
              p,
              g;
            ma(y, function (_, m) {
              return _.zlevel === m.zlevel ? _.z - m.z : _.zlevel - m.zlevel;
            }),
              C(y, function (_) {
                var m = h.getComponent(_.type, _.idx),
                  w = _.zlevel,
                  b = _.key;
                p != null && (w = Math.max(p, w)),
                  b
                    ? (w === p && b !== g && w++, (g = b))
                    : g && (w === p && w++, (g = "")),
                  (p = w),
                  m.setZLevel(w);
              });
          }
        }
        (Os = function (h, c, v, d, y) {
          i(c),
            Mv(h, c, v, d, y),
            C(h._chartsViews, function (p) {
              p.__alive = !1;
            }),
            ua(h, c, v, d, y),
            C(h._chartsViews, function (p) {
              p.__alive || p.remove(c, v);
            });
        }),
          (Mv = function (h, c, v, d, y, p) {
            C(p || h._componentsViews, function (g) {
              var _ = g.__model;
              l(_, g), g.render(_, c, v, d), s(_, g), f(_, g);
            });
          }),
          (ua = function (h, c, v, d, y, p) {
            var g = h._scheduler;
            (y = O(y || {}, { updatedSeries: c.getSeries() })),
              ae.trigger("series:beforeupdate", c, v, y);
            var _ = !1;
            c.eachSeries(function (m) {
              var w = h._chartsMap[m.__viewId];
              w.__alive = !0;
              var b = w.renderTask;
              g.updatePayload(b, d),
                l(m, w),
                p && p.get(m.uid) && b.dirty(),
                b.perform(g.getPerformArgs(b)) && (_ = !0),
                (w.group.silent = !!m.get("silent")),
                o(m, w),
                sh(m);
            }),
              (g.unfinished = _ || g.unfinished),
              ae.trigger("series:layoutlabels", c, v, y),
              ae.trigger("series:transition", c, v, y),
              c.eachSeries(function (m) {
                var w = h._chartsMap[m.__viewId];
                s(m, w), f(m, w);
              }),
              a(h, c),
              ae.trigger("series:afterupdate", c, v, y);
          }),
          (Yt = function (h) {
            (h[Ps] = !0), h.getZr().wakeUp();
          }),
          (Av = function (h) {
            !h[Ps] ||
              (h.getZr().storage.traverse(function (c) {
                en(c) || n(c);
              }),
              (h[Ps] = !1));
          });
        function n(h) {
          for (var c = [], v = h.currentStates, d = 0; d < v.length; d++) {
            var y = v[d];
            y === "emphasis" || y === "blur" || y === "select" || c.push(y);
          }
          h.selected && h.states.select && c.push("select"),
            h.hoverState === po && h.states.emphasis
              ? c.push("emphasis")
              : h.hoverState === co && h.states.blur && c.push("blur"),
            h.useStates(c);
        }
        function a(h, c) {
          var v = h._zr,
            d = v.storage,
            y = 0;
          d.traverse(function (p) {
            p.isGroup || y++;
          }),
            y > c.get("hoverLayerThreshold") &&
              !W.node &&
              !W.worker &&
              c.eachSeries(function (p) {
                if (!p.preventUsingHoverLayer) {
                  var g = h._chartsMap[p.__viewId];
                  g.__alive &&
                    g.eachRendered(function (_) {
                      _.states.emphasis && (_.states.emphasis.hoverLayer = !0);
                    });
                }
              });
        }
        function o(h, c) {
          var v = h.get("blendMode") || null;
          c.eachRendered(function (d) {
            d.isGroup || (d.style.blend = v);
          });
        }
        function s(h, c) {
          if (!h.preventAutoZ) {
            var v = h.get("z") || 0,
              d = h.get("zlevel") || 0;
            c.eachRendered(function (y) {
              return u(y, v, d, -1 / 0), !0;
            });
          }
        }
        function u(h, c, v, d) {
          var y = h.getTextContent(),
            p = h.getTextGuideLine(),
            g = h.isGroup;
          if (g)
            for (var _ = h.childrenRef(), m = 0; m < _.length; m++)
              d = Math.max(u(_[m], c, v, d), d);
          else (h.z = c), (h.zlevel = v), (d = Math.max(h.z2, d));
          if (
            (y && ((y.z = c), (y.zlevel = v), isFinite(d) && (y.z2 = d + 2)), p)
          ) {
            var w = h.textGuideLineConfig;
            (p.z = c),
              (p.zlevel = v),
              isFinite(d) && (p.z2 = d + (w && w.showAbove ? 1 : -1));
          }
          return d;
        }
        function l(h, c) {
          c.eachRendered(function (v) {
            if (!en(v)) {
              var d = v.getTextContent(),
                y = v.getTextGuideLine();
              v.stateTransition && (v.stateTransition = null),
                d && d.stateTransition && (d.stateTransition = null),
                y && y.stateTransition && (y.stateTransition = null),
                v.hasState()
                  ? ((v.prevStates = v.currentStates), v.clearStates())
                  : v.prevStates && (v.prevStates = null);
            }
          });
        }
        function f(h, c) {
          var v = h.getModel("stateAnimation"),
            d = h.isAnimationEnabled(),
            y = v.get("duration"),
            p =
              y > 0
                ? {
                    duration: y,
                    delay: v.get("delay"),
                    easing: v.get("easing"),
                  }
                : null;
          c.eachRendered(function (g) {
            if (g.states && g.states.emphasis) {
              if (en(g)) return;
              if ((g instanceof it && Wm(g), g.__dirty)) {
                var _ = g.prevStates;
                _ && g.useStates(_);
              }
              if (d) {
                g.stateTransition = p;
                var m = g.getTextContent(),
                  w = g.getTextGuideLine();
                m && (m.stateTransition = p), w && (w.stateTransition = p);
              }
              g.__dirty && n(g);
            }
          });
        }
        (Pv = function (h) {
          return new ((function (c) {
            rt(v, c);
            function v() {
              return (c !== null && c.apply(this, arguments)) || this;
            }
            return (
              (v.prototype.getCoordinateSystems = function () {
                return h._coordSysMgr.getCoordinateSystems();
              }),
              (v.prototype.getComponentByElement = function (d) {
                for (; d; ) {
                  var y = d.__ecComponentInfo;
                  if (y != null)
                    return h._model.getComponent(y.mainType, y.index);
                  d = d.parent;
                }
              }),
              (v.prototype.enterEmphasis = function (d, y) {
                gu(d, y), Yt(h);
              }),
              (v.prototype.leaveEmphasis = function (d, y) {
                yu(d, y), Yt(h);
              }),
              (v.prototype.enterBlur = function (d) {
                Em(d), Yt(h);
              }),
              (v.prototype.leaveBlur = function (d) {
                _d(d), Yt(h);
              }),
              (v.prototype.enterSelect = function (d) {
                md(d), Yt(h);
              }),
              (v.prototype.leaveSelect = function (d) {
                wd(d), Yt(h);
              }),
              (v.prototype.getModel = function () {
                return h.getModel();
              }),
              (v.prototype.getViewOfComponentModel = function (d) {
                return h.getViewOfComponentModel(d);
              }),
              (v.prototype.getViewOfSeriesModel = function (d) {
                return h.getViewOfSeriesModel(d);
              }),
              v
            );
          })(bp))(h);
        }),
          (pg = function (h) {
            function c(v, d) {
              for (var y = 0; y < v.length; y++) {
                var p = v[y];
                p[As] = d;
              }
            }
            C(on, function (v, d) {
              h._messageCenter.on(d, function (y) {
                if (Lv[h.group] && h[As] !== xv) {
                  if (y && y.escapeConnect) return;
                  var p = h.makeActionFromEvent(y),
                    g = [];
                  C(sn, function (_) {
                    _ !== h && _.group === h.group && g.push(_);
                  }),
                    c(g, xv),
                    C(g, function (_) {
                      _[As] !== eT && _.dispatchAction(p);
                    }),
                    c(g, rT);
                }
              });
            });
          });
      })()),
      t
    );
  })(Te),
  Gl = gg.prototype;
Gl.on = fg("on");
Gl.off = fg("off");
Gl.one = function (r, t, e) {
  var i = this;
  function n() {
    for (var a = [], o = 0; o < arguments.length; o++) a[o] = arguments[o];
    t && t.apply && t.apply(this, a), i.off(r, n);
  }
  this.on.call(this, r, n, e);
};
var iT = [
  "click",
  "dblclick",
  "mouseover",
  "mouseout",
  "mousemove",
  "mousedown",
  "mouseup",
  "globalout",
  "contextmenu",
];
var ro = {},
  on = {},
  zu = [],
  Hu = [],
  io = [],
  yg = {},
  Gu = {},
  sn = {},
  Lv = {},
  nT = +new Date() - 0,
  Vl = "_echarts_instance_";
function aT(r, t, e) {
  var i = !(e && e.ssr);
  if (i) {
    var n = oT(r);
    if (n) return n;
  }
  var a = new gg(r, t, e);
  return (
    (a.id = "ec_" + nT++),
    (sn[a.id] = a),
    i && jc(r, Vl, a.id),
    pg(a),
    ae.trigger("afterinit", a),
    a
  );
}
function oT(r) {
  return sn[m0(r, Vl)];
}
function _g(r, t) {
  yg[r] = t;
}
function mg(r) {
  et(Hu, r) < 0 && Hu.push(r);
}
function wg(r, t) {
  Ul(zu, r, t, Xb);
}
function sT(r) {
  Wl("afterinit", r);
}
function uT(r) {
  Wl("afterupdate", r);
}
function Wl(r, t) {
  ae.on(r, t);
}
function Si(r, t, e) {
  q(t) && ((e = t), (t = ""));
  var i = F(r) ? r.type : [r, (r = { event: t })][0];
  (r.event = (r.event || i).toLowerCase()),
    (t = r.event),
    !on[t] &&
      (Se(Tv.test(i) && Tv.test(t)),
      ro[i] || (ro[i] = { action: e, actionInfo: r }),
      (on[t] = i));
}
function lT(r, t) {
  Tp.register(r, t);
}
function fT(r, t) {
  Ul(io, r, t, sg, "layout");
}
function Nr(r, t) {
  Ul(io, r, t, ug, "visual");
}
var Iv = [];
function Ul(r, t, e, i, n) {
  if (((q(t) || F(t)) && ((e = t), (t = i)), !(et(Iv, e) >= 0))) {
    Iv.push(e);
    var a = Qp.wrapStageHandler(e, n);
    (a.__prio = t), (a.__raw = e), r.push(a);
  }
}
function Sg(r, t) {
  Gu[r] = t;
}
function hT(r, t, e) {
  var i = Gb("registerMap");
  i && i(r, t, e);
}
var vT = dS;
Nr(Hl, VS);
Nr(Po, WS);
Nr(Po, US);
Nr(Hl, ab);
Nr(Po, ob);
Nr(lg, Nb);
mg(Cp);
wg(Yb, Kw);
Sg("default", YS);
Si({ type: Rr, event: Rr, update: Rr }, Et);
Si({ type: Da, event: Da, update: Da }, Et);
Si({ type: Ji, event: Ji, update: Ji }, Et);
Si({ type: Ma, event: Ma, update: Ma }, Et);
Si({ type: ji, event: ji, update: ji }, Et);
_g("light", rb);
_g("dark", ib);
function Bi(r) {
  return r == null ? 0 : r.length || 1;
}
function Rv(r) {
  return r;
}
var cT = (function () {
    function r(t, e, i, n, a, o) {
      (this._old = t),
        (this._new = e),
        (this._oldKeyGetter = i || Rv),
        (this._newKeyGetter = n || Rv),
        (this.context = a),
        (this._diffModeMultiple = o === "multiple");
    }
    return (
      (r.prototype.add = function (t) {
        return (this._add = t), this;
      }),
      (r.prototype.update = function (t) {
        return (this._update = t), this;
      }),
      (r.prototype.updateManyToOne = function (t) {
        return (this._updateManyToOne = t), this;
      }),
      (r.prototype.updateOneToMany = function (t) {
        return (this._updateOneToMany = t), this;
      }),
      (r.prototype.updateManyToMany = function (t) {
        return (this._updateManyToMany = t), this;
      }),
      (r.prototype.remove = function (t) {
        return (this._remove = t), this;
      }),
      (r.prototype.execute = function () {
        this[
          this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"
        ]();
      }),
      (r.prototype._executeOneToOne = function () {
        var t = this._old,
          e = this._new,
          i = {},
          n = new Array(t.length),
          a = new Array(e.length);
        this._initIndexMap(t, null, n, "_oldKeyGetter"),
          this._initIndexMap(e, i, a, "_newKeyGetter");
        for (var o = 0; o < t.length; o++) {
          var s = n[o],
            u = i[s],
            l = Bi(u);
          if (l > 1) {
            var f = u.shift();
            u.length === 1 && (i[s] = u[0]), this._update && this._update(f, o);
          } else
            l === 1
              ? ((i[s] = null), this._update && this._update(u, o))
              : this._remove && this._remove(o);
        }
        this._performRestAdd(a, i);
      }),
      (r.prototype._executeMultiple = function () {
        var t = this._old,
          e = this._new,
          i = {},
          n = {},
          a = [],
          o = [];
        this._initIndexMap(t, i, a, "_oldKeyGetter"),
          this._initIndexMap(e, n, o, "_newKeyGetter");
        for (var s = 0; s < a.length; s++) {
          var u = a[s],
            l = i[u],
            f = n[u],
            h = Bi(l),
            c = Bi(f);
          if (h > 1 && c === 1)
            this._updateManyToOne && this._updateManyToOne(f, l), (n[u] = null);
          else if (h === 1 && c > 1)
            this._updateOneToMany && this._updateOneToMany(f, l), (n[u] = null);
          else if (h === 1 && c === 1)
            this._update && this._update(f, l), (n[u] = null);
          else if (h > 1 && c > 1)
            this._updateManyToMany && this._updateManyToMany(f, l),
              (n[u] = null);
          else if (h > 1)
            for (var v = 0; v < h; v++) this._remove && this._remove(l[v]);
          else this._remove && this._remove(l);
        }
        this._performRestAdd(o, n);
      }),
      (r.prototype._performRestAdd = function (t, e) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i],
            a = e[n],
            o = Bi(a);
          if (o > 1) for (var s = 0; s < o; s++) this._add && this._add(a[s]);
          else o === 1 && this._add && this._add(a);
          e[n] = null;
        }
      }),
      (r.prototype._initIndexMap = function (t, e, i, n) {
        for (var a = this._diffModeMultiple, o = 0; o < t.length; o++) {
          var s = "_ec_" + this[n](t[o], o);
          if ((a || (i[o] = s), !!e)) {
            var u = e[s],
              l = Bi(u);
            l === 0
              ? ((e[s] = o), a && i.push(s))
              : l === 1
              ? (e[s] = [u, o])
              : u.push(o);
          }
        }
      }),
      r
    );
  })(),
  dT = cT,
  pT = (function () {
    function r(t, e) {
      (this._encode = t), (this._schema = e);
    }
    return (
      (r.prototype.get = function () {
        return {
          fullDimensions: this._getFullDimensionNames(),
          encode: this._encode,
        };
      }),
      (r.prototype._getFullDimensionNames = function () {
        return (
          this._cachedDimNames ||
            (this._cachedDimNames = this._schema
              ? this._schema.makeOutputDimensionNames()
              : []),
          this._cachedDimNames
        );
      }),
      r
    );
  })();
function gT(r, t) {
  var e = {},
    i = (e.encode = {}),
    n = $(),
    a = [],
    o = [],
    s = {};
  C(r.dimensions, function (c) {
    var v = r.getDimensionInfo(c),
      d = v.coordDim;
    if (d) {
      var y = v.coordDimIndex;
      (ks(i, d)[y] = c),
        v.isExtraCoord ||
          (n.set(d, 1),
          yT(v.type) && (a[0] = c),
          (ks(s, d)[y] = r.getDimensionIndex(v.name))),
        v.defaultTooltip && o.push(c);
    }
    pp.each(function (p, g) {
      var _ = ks(i, g),
        m = v.otherDims[g];
      m != null && m !== !1 && (_[m] = v.name);
    });
  });
  var u = [],
    l = {};
  n.each(function (c, v) {
    var d = i[v];
    (l[v] = d[0]), (u = u.concat(d));
  }),
    (e.dataDimsOnCoord = u),
    (e.dataDimIndicesOnCoord = U(u, function (c) {
      return r.getDimensionInfo(c).storeDimIndex;
    })),
    (e.encodeFirstDimNotExtra = l);
  var f = i.label;
  f && f.length && (a = f.slice());
  var h = i.tooltip;
  return (
    h && h.length ? (o = h.slice()) : o.length || (o = a.slice()),
    (i.defaultedLabel = a),
    (i.defaultedTooltip = o),
    (e.userOutput = new pT(s, t)),
    e
  );
}
function ks(r, t) {
  return r.hasOwnProperty(t) || (r[t] = []), r[t];
}
function UD(r) {
  return r === "category" ? "ordinal" : r === "time" ? "time" : "float";
}
function yT(r) {
  return !(r === "ordinal" || r === "time");
}
var _T = (function () {
    function r(t) {
      (this.otherDims = {}), t != null && O(this, t);
    }
    return r;
  })(),
  Ia = _T,
  mT = yt(),
  wT = { float: "f", int: "i", ordinal: "o", number: "n", time: "t" },
  bg = (function () {
    function r(t) {
      (this.dimensions = t.dimensions),
        (this._dimOmitted = t.dimensionOmitted),
        (this.source = t.source),
        (this._fullDimCount = t.fullDimensionCount),
        this._updateDimOmitted(t.dimensionOmitted);
    }
    return (
      (r.prototype.isDimensionOmitted = function () {
        return this._dimOmitted;
      }),
      (r.prototype._updateDimOmitted = function (t) {
        (this._dimOmitted = t),
          t && (this._dimNameMap || (this._dimNameMap = Cg(this.source)));
      }),
      (r.prototype.getSourceDimensionIndex = function (t) {
        return K(this._dimNameMap.get(t), -1);
      }),
      (r.prototype.getSourceDimension = function (t) {
        var e = this.source.dimensionsDefine;
        if (e) return e[t];
      }),
      (r.prototype.makeStoreSchema = function () {
        for (
          var t = this._fullDimCount,
            e = Pp(this.source),
            i = !Dg(t),
            n = "",
            a = [],
            o = 0,
            s = 0;
          o < t;
          o++
        ) {
          var u = void 0,
            l = void 0,
            f = void 0,
            h = this.dimensions[s];
          if (h && h.storeDimIndex === o)
            (u = e ? h.name : null), (l = h.type), (f = h.ordinalMeta), s++;
          else {
            var c = this.getSourceDimension(o);
            c && ((u = e ? c.name : null), (l = c.type));
          }
          a.push({ property: u, type: l, ordinalMeta: f }),
            e &&
              u != null &&
              (!h || !h.isCalculationCoord) &&
              (n += i ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u),
            (n += "$"),
            (n += wT[l] || "f"),
            f && (n += f.uid),
            (n += "$");
        }
        var v = this.source,
          d = [v.seriesLayoutBy, v.startIndex, n].join("$$");
        return { dimensions: a, hash: d };
      }),
      (r.prototype.makeOutputDimensionNames = function () {
        for (var t = [], e = 0, i = 0; e < this._fullDimCount; e++) {
          var n = void 0,
            a = this.dimensions[i];
          if (a && a.storeDimIndex === e)
            a.isCalculationCoord || (n = a.name), i++;
          else {
            var o = this.getSourceDimension(e);
            o && (n = o.name);
          }
          t.push(n);
        }
        return t;
      }),
      (r.prototype.appendCalculationDimension = function (t) {
        this.dimensions.push(t),
          (t.isCalculationCoord = !0),
          this._fullDimCount++,
          this._updateDimOmitted(!0);
      }),
      r
    );
  })();
function Tg(r) {
  return r instanceof bg;
}
function xg(r) {
  for (var t = $(), e = 0; e < (r || []).length; e++) {
    var i = r[e],
      n = F(i) ? i.name : i;
    n != null && t.get(n) == null && t.set(n, e);
  }
  return t;
}
function Cg(r) {
  var t = mT(r);
  return t.dimNameMap || (t.dimNameMap = xg(r.dimensionsDefine));
}
function Dg(r) {
  return r > 30;
}
var Fi = F,
  Ve = U,
  ST = typeof Int32Array == "undefined" ? Array : Int32Array,
  bT = "e\0\0",
  Ev = -1,
  TT = [
    "hasItemOption",
    "_nameList",
    "_idList",
    "_invertedIndicesMap",
    "_dimSummary",
    "userOutput",
    "_rawData",
    "_dimValueGetter",
    "_nameDimIdx",
    "_idDimIdx",
    "_nameRepeatCount",
  ],
  xT = ["_approximateExtent"],
  Ov,
  la,
  Ni,
  zi,
  Bs,
  fa,
  Fs,
  CT = (function () {
    function r(t, e) {
      (this.type = "list"),
        (this._dimOmitted = !1),
        (this._nameList = []),
        (this._idList = []),
        (this._visual = {}),
        (this._layout = {}),
        (this._itemVisuals = []),
        (this._itemLayouts = []),
        (this._graphicEls = []),
        (this._approximateExtent = {}),
        (this._calculationInfo = {}),
        (this.hasItemOption = !1),
        (this.TRANSFERABLE_METHODS = [
          "cloneShallow",
          "downSample",
          "lttbDownSample",
          "map",
        ]),
        (this.CHANGABLE_METHODS = ["filterSelf", "selectRange"]),
        (this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"]);
      var i,
        n = !1;
      Tg(t)
        ? ((i = t.dimensions),
          (this._dimOmitted = t.isDimensionOmitted()),
          (this._schema = t))
        : ((n = !0), (i = t)),
        (i = i || ["x", "y"]);
      for (
        var a = {}, o = [], s = {}, u = !1, l = {}, f = 0;
        f < i.length;
        f++
      ) {
        var h = i[f],
          c = B(h) ? new Ia({ name: h }) : h instanceof Ia ? h : new Ia(h),
          v = c.name;
        (c.type = c.type || "float"),
          c.coordDim || ((c.coordDim = v), (c.coordDimIndex = 0));
        var d = (c.otherDims = c.otherDims || {});
        o.push(v),
          (a[v] = c),
          l[v] != null && (u = !0),
          c.createInvertedIndices && (s[v] = []),
          d.itemName === 0 && (this._nameDimIdx = f),
          d.itemId === 0 && (this._idDimIdx = f),
          n && (c.storeDimIndex = f);
      }
      if (
        ((this.dimensions = o),
        (this._dimInfos = a),
        this._initGetDimensionInfo(u),
        (this.hostModel = e),
        (this._invertedIndicesMap = s),
        this._dimOmitted)
      ) {
        var y = (this._dimIdxToName = $());
        C(o, function (p) {
          y.set(a[p].storeDimIndex, p);
        });
      }
    }
    return (
      (r.prototype.getDimension = function (t) {
        var e = this._recognizeDimIndex(t);
        if (e == null) return t;
        if (((e = t), !this._dimOmitted)) return this.dimensions[e];
        var i = this._dimIdxToName.get(e);
        if (i != null) return i;
        var n = this._schema.getSourceDimension(e);
        if (n) return n.name;
      }),
      (r.prototype.getDimensionIndex = function (t) {
        var e = this._recognizeDimIndex(t);
        if (e != null) return e;
        if (t == null) return -1;
        var i = this._getDimInfo(t);
        return i
          ? i.storeDimIndex
          : this._dimOmitted
          ? this._schema.getSourceDimensionIndex(t)
          : -1;
      }),
      (r.prototype._recognizeDimIndex = function (t) {
        if (
          ht(t) ||
          (t != null &&
            !isNaN(t) &&
            !this._getDimInfo(t) &&
            (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
        )
          return +t;
      }),
      (r.prototype._getStoreDimIndex = function (t) {
        var e = this.getDimensionIndex(t);
        return e;
      }),
      (r.prototype.getDimensionInfo = function (t) {
        return this._getDimInfo(this.getDimension(t));
      }),
      (r.prototype._initGetDimensionInfo = function (t) {
        var e = this._dimInfos;
        this._getDimInfo = t
          ? function (i) {
              return e.hasOwnProperty(i) ? e[i] : void 0;
            }
          : function (i) {
              return e[i];
            };
      }),
      (r.prototype.getDimensionsOnCoord = function () {
        return this._dimSummary.dataDimsOnCoord.slice();
      }),
      (r.prototype.mapDimension = function (t, e) {
        var i = this._dimSummary;
        if (e == null) return i.encodeFirstDimNotExtra[t];
        var n = i.encode[t];
        return n ? n[e] : null;
      }),
      (r.prototype.mapDimensionsAll = function (t) {
        var e = this._dimSummary,
          i = e.encode[t];
        return (i || []).slice();
      }),
      (r.prototype.getStore = function () {
        return this._store;
      }),
      (r.prototype.initData = function (t, e, i) {
        var n = this,
          a;
        if ((t instanceof Au && (a = t), !a)) {
          var o = this.dimensions,
            s = El(t) || kt(t) ? new Ap(t, o.length) : t;
          a = new Au();
          var u = Ve(o, function (l) {
            return { type: n._dimInfos[l].type, property: l };
          });
          a.initData(s, u, i);
        }
        (this._store = a),
          (this._nameList = (e || []).slice()),
          (this._idList = []),
          (this._nameRepeatCount = {}),
          this._doInit(0, a.count()),
          (this._dimSummary = gT(this, this._schema)),
          (this.userOutput = this._dimSummary.userOutput);
      }),
      (r.prototype.appendData = function (t) {
        var e = this._store.appendData(t);
        this._doInit(e[0], e[1]);
      }),
      (r.prototype.appendValues = function (t, e) {
        var i = this._store.appendValues(t, e.length),
          n = i.start,
          a = i.end,
          o = this._shouldMakeIdFromName();
        if ((this._updateOrdinalMeta(), e))
          for (var s = n; s < a; s++) {
            var u = s - n;
            (this._nameList[s] = e[u]), o && Fs(this, s);
          }
      }),
      (r.prototype._updateOrdinalMeta = function () {
        for (
          var t = this._store, e = this.dimensions, i = 0;
          i < e.length;
          i++
        ) {
          var n = this._dimInfos[e[i]];
          n.ordinalMeta && t.collectOrdinalMeta(n.storeDimIndex, n.ordinalMeta);
        }
      }),
      (r.prototype._shouldMakeIdFromName = function () {
        var t = this._store.getProvider();
        return (
          this._idDimIdx == null &&
          t.getSource().sourceFormat !== Ze &&
          !t.fillStorage
        );
      }),
      (r.prototype._doInit = function (t, e) {
        if (!(t >= e)) {
          var i = this._store,
            n = i.getProvider();
          this._updateOrdinalMeta();
          var a = this._nameList,
            o = this._idList,
            s = n.getSource().sourceFormat,
            u = s === xe;
          if (u && !n.pure)
            for (var l = [], f = t; f < e; f++) {
              var h = n.getItem(f, l);
              if (
                (!this.hasItemOption && u0(h) && (this.hasItemOption = !0), h)
              ) {
                var c = h.name;
                a[f] == null && c != null && (a[f] = le(c, null));
                var v = h.id;
                o[f] == null && v != null && (o[f] = le(v, null));
              }
            }
          if (this._shouldMakeIdFromName())
            for (var f = t; f < e; f++) Fs(this, f);
          Ov(this);
        }
      }),
      (r.prototype.getApproximateExtent = function (t) {
        return (
          this._approximateExtent[t] ||
          this._store.getDataExtent(this._getStoreDimIndex(t))
        );
      }),
      (r.prototype.setApproximateExtent = function (t, e) {
        (e = this.getDimension(e)), (this._approximateExtent[e] = t.slice());
      }),
      (r.prototype.getCalculationInfo = function (t) {
        return this._calculationInfo[t];
      }),
      (r.prototype.setCalculationInfo = function (t, e) {
        Fi(t) ? O(this._calculationInfo, t) : (this._calculationInfo[t] = e);
      }),
      (r.prototype.getName = function (t) {
        var e = this.getRawIndex(t),
          i = this._nameList[e];
        return (
          i == null &&
            this._nameDimIdx != null &&
            (i = Ni(this, this._nameDimIdx, e)),
          i == null && (i = ""),
          i
        );
      }),
      (r.prototype._getCategory = function (t, e) {
        var i = this._store.get(t, e),
          n = this._store.getOrdinalMeta(t);
        return n ? n.categories[i] : i;
      }),
      (r.prototype.getId = function (t) {
        return la(this, this.getRawIndex(t));
      }),
      (r.prototype.count = function () {
        return this._store.count();
      }),
      (r.prototype.get = function (t, e) {
        var i = this._store,
          n = this._dimInfos[t];
        if (n) return i.get(n.storeDimIndex, e);
      }),
      (r.prototype.getByRawIndex = function (t, e) {
        var i = this._store,
          n = this._dimInfos[t];
        if (n) return i.getByRawIndex(n.storeDimIndex, e);
      }),
      (r.prototype.getIndices = function () {
        return this._store.getIndices();
      }),
      (r.prototype.getDataExtent = function (t) {
        return this._store.getDataExtent(this._getStoreDimIndex(t));
      }),
      (r.prototype.getSum = function (t) {
        return this._store.getSum(this._getStoreDimIndex(t));
      }),
      (r.prototype.getMedian = function (t) {
        return this._store.getMedian(this._getStoreDimIndex(t));
      }),
      (r.prototype.getValues = function (t, e) {
        var i = this,
          n = this._store;
        return k(t)
          ? n.getValues(
              Ve(t, function (a) {
                return i._getStoreDimIndex(a);
              }),
              e
            )
          : n.getValues(t);
      }),
      (r.prototype.hasValue = function (t) {
        for (
          var e = this._dimSummary.dataDimIndicesOnCoord, i = 0, n = e.length;
          i < n;
          i++
        )
          if (isNaN(this._store.get(e[i], t))) return !1;
        return !0;
      }),
      (r.prototype.indexOfName = function (t) {
        for (var e = 0, i = this._store.count(); e < i; e++)
          if (this.getName(e) === t) return e;
        return -1;
      }),
      (r.prototype.getRawIndex = function (t) {
        return this._store.getRawIndex(t);
      }),
      (r.prototype.indexOfRawIndex = function (t) {
        return this._store.indexOfRawIndex(t);
      }),
      (r.prototype.rawIndexOf = function (t, e) {
        var i = t && this._invertedIndicesMap[t],
          n = i[e];
        return n == null || isNaN(n) ? Ev : n;
      }),
      (r.prototype.indicesOfNearest = function (t, e, i) {
        return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, i);
      }),
      (r.prototype.each = function (t, e, i) {
        q(t) && ((i = e), (e = t), (t = []));
        var n = i || this,
          a = Ve(zi(t), this._getStoreDimIndex, this);
        this._store.each(a, n ? st(e, n) : e);
      }),
      (r.prototype.filterSelf = function (t, e, i) {
        q(t) && ((i = e), (e = t), (t = []));
        var n = i || this,
          a = Ve(zi(t), this._getStoreDimIndex, this);
        return (this._store = this._store.filter(a, n ? st(e, n) : e)), this;
      }),
      (r.prototype.selectRange = function (t) {
        var e = this,
          i = {},
          n = ft(t);
        return (
          C(n, function (a) {
            var o = e._getStoreDimIndex(a);
            i[o] = t[a];
          }),
          (this._store = this._store.selectRange(i)),
          this
        );
      }),
      (r.prototype.mapArray = function (t, e, i) {
        q(t) && ((i = e), (e = t), (t = [])), (i = i || this);
        var n = [];
        return (
          this.each(
            t,
            function () {
              n.push(e && e.apply(this, arguments));
            },
            i
          ),
          n
        );
      }),
      (r.prototype.map = function (t, e, i, n) {
        var a = i || n || this,
          o = Ve(zi(t), this._getStoreDimIndex, this),
          s = fa(this);
        return (s._store = this._store.map(o, a ? st(e, a) : e)), s;
      }),
      (r.prototype.modify = function (t, e, i, n) {
        var a = i || n || this,
          o = Ve(zi(t), this._getStoreDimIndex, this);
        this._store.modify(o, a ? st(e, a) : e);
      }),
      (r.prototype.downSample = function (t, e, i, n) {
        var a = fa(this);
        return (
          (a._store = this._store.downSample(
            this._getStoreDimIndex(t),
            e,
            i,
            n
          )),
          a
        );
      }),
      (r.prototype.lttbDownSample = function (t, e) {
        var i = fa(this);
        return (
          (i._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e)),
          i
        );
      }),
      (r.prototype.getRawDataItem = function (t) {
        return this._store.getRawDataItem(t);
      }),
      (r.prototype.getItemModel = function (t) {
        var e = this.hostModel,
          i = this.getRawDataItem(t);
        return new Tt(i, e, e && e.ecModel);
      }),
      (r.prototype.diff = function (t) {
        var e = this;
        return new dT(
          t ? t.getStore().getIndices() : [],
          this.getStore().getIndices(),
          function (i) {
            return la(t, i);
          },
          function (i) {
            return la(e, i);
          }
        );
      }),
      (r.prototype.getVisual = function (t) {
        var e = this._visual;
        return e && e[t];
      }),
      (r.prototype.setVisual = function (t, e) {
        (this._visual = this._visual || {}),
          Fi(t) ? O(this._visual, t) : (this._visual[t] = e);
      }),
      (r.prototype.getItemVisual = function (t, e) {
        var i = this._itemVisuals[t],
          n = i && i[e];
        return n == null ? this.getVisual(e) : n;
      }),
      (r.prototype.hasItemVisual = function () {
        return this._itemVisuals.length > 0;
      }),
      (r.prototype.ensureUniqueItemVisual = function (t, e) {
        var i = this._itemVisuals,
          n = i[t];
        n || (n = i[t] = {});
        var a = n[e];
        return (
          a == null &&
            ((a = this.getVisual(e)),
            k(a) ? (a = a.slice()) : Fi(a) && (a = O({}, a)),
            (n[e] = a)),
          a
        );
      }),
      (r.prototype.setItemVisual = function (t, e, i) {
        var n = this._itemVisuals[t] || {};
        (this._itemVisuals[t] = n), Fi(e) ? O(n, e) : (n[e] = i);
      }),
      (r.prototype.clearAllVisual = function () {
        (this._visual = {}), (this._itemVisuals = []);
      }),
      (r.prototype.setLayout = function (t, e) {
        Fi(t) ? O(this._layout, t) : (this._layout[t] = e);
      }),
      (r.prototype.getLayout = function (t) {
        return this._layout[t];
      }),
      (r.prototype.getItemLayout = function (t) {
        return this._itemLayouts[t];
      }),
      (r.prototype.setItemLayout = function (t, e, i) {
        this._itemLayouts[t] = i ? O(this._itemLayouts[t] || {}, e) : e;
      }),
      (r.prototype.clearItemLayouts = function () {
        this._itemLayouts.length = 0;
      }),
      (r.prototype.setItemGraphicEl = function (t, e) {
        var i = this.hostModel && this.hostModel.seriesIndex;
        Tm(i, this.dataType, t, e), (this._graphicEls[t] = e);
      }),
      (r.prototype.getItemGraphicEl = function (t) {
        return this._graphicEls[t];
      }),
      (r.prototype.eachItemGraphicEl = function (t, e) {
        C(this._graphicEls, function (i, n) {
          i && t && t.call(e, i, n);
        });
      }),
      (r.prototype.cloneShallow = function (t) {
        return (
          t ||
            (t = new r(
              this._schema
                ? this._schema
                : Ve(this.dimensions, this._getDimInfo, this),
              this.hostModel
            )),
          Bs(t, this),
          (t._store = this._store),
          t
        );
      }),
      (r.prototype.wrapMethod = function (t, e) {
        var i = this[t];
        !q(i) ||
          ((this.__wrappedMethods = this.__wrappedMethods || []),
          this.__wrappedMethods.push(t),
          (this[t] = function () {
            var n = i.apply(this, arguments);
            return e.apply(this, [n].concat(tl(arguments)));
          }));
      }),
      (r.internalField = (function () {
        (Ov = function (t) {
          var e = t._invertedIndicesMap;
          C(e, function (i, n) {
            var a = t._dimInfos[n],
              o = a.ordinalMeta,
              s = t._store;
            if (o) {
              i = e[n] = new ST(o.categories.length);
              for (var u = 0; u < i.length; u++) i[u] = Ev;
              for (var u = 0; u < s.count(); u++)
                i[s.get(a.storeDimIndex, u)] = u;
            }
          });
        }),
          (Ni = function (t, e, i) {
            return le(t._getCategory(e, i), null);
          }),
          (la = function (t, e) {
            var i = t._idList[e];
            return (
              i == null && t._idDimIdx != null && (i = Ni(t, t._idDimIdx, e)),
              i == null && (i = bT + e),
              i
            );
          }),
          (zi = function (t) {
            return k(t) || (t = t != null ? [t] : []), t;
          }),
          (fa = function (t) {
            var e = new r(
              t._schema ? t._schema : Ve(t.dimensions, t._getDimInfo, t),
              t.hostModel
            );
            return Bs(e, t), e;
          }),
          (Bs = function (t, e) {
            C(TT.concat(e.__wrappedMethods || []), function (i) {
              e.hasOwnProperty(i) && (t[i] = e[i]);
            }),
              (t.__wrappedMethods = e.__wrappedMethods),
              C(xT, function (i) {
                t[i] = X(e[i]);
              }),
              (t._calculationInfo = O({}, e._calculationInfo));
          }),
          (Fs = function (t, e) {
            var i = t._nameList,
              n = t._idList,
              a = t._nameDimIdx,
              o = t._idDimIdx,
              s = i[e],
              u = n[e];
            if (
              (s == null && a != null && (i[e] = s = Ni(t, a, e)),
              u == null && o != null && (n[e] = u = Ni(t, o, e)),
              u == null && s != null)
            ) {
              var l = t._nameRepeatCount,
                f = (l[s] = (l[s] || 0) + 1);
              (u = s), f > 1 && (u += "__ec__" + f), (n[e] = u);
            }
          });
      })()),
      r
    );
  })(),
  YD = CT;
function $D(r, t) {
  El(r) || (r = Dp(r)), (t = t || {});
  var e = t.coordDimensions || [],
    i = t.dimensionsDefine || r.dimensionsDefine || [],
    n = $(),
    a = [],
    o = MT(r, e, i, t.dimensionsCount),
    s = t.canOmitUnusedDimensions && Dg(o),
    u = i === r.dimensionsDefine,
    l = u ? Cg(r) : xg(i),
    f = t.encodeDefine;
  !f && t.encodeDefaulter && (f = t.encodeDefaulter(r, o));
  for (var h = $(f), c = new Op(o), v = 0; v < c.length; v++) c[v] = -1;
  function d(x) {
    var M = c[x];
    if (M < 0) {
      var P = i[x],
        A = F(P) ? P : { name: P },
        L = new Ia(),
        I = A.name;
      I != null && l.get(I) != null && (L.name = L.displayName = I),
        A.type != null && (L.type = A.type),
        A.displayName != null && (L.displayName = A.displayName);
      var R = a.length;
      return (c[x] = R), (L.storeDimIndex = x), a.push(L), L;
    }
    return a[M];
  }
  if (!s) for (var v = 0; v < o; v++) d(v);
  h.each(function (x, M) {
    var P = xt(x).slice();
    if (P.length === 1 && !B(P[0]) && P[0] < 0) {
      h.set(M, !1);
      return;
    }
    var A = h.set(M, []);
    C(P, function (L, I) {
      var R = B(L) ? l.get(L) : L;
      R != null && R < o && ((A[I] = R), p(d(R), M, I));
    });
  });
  var y = 0;
  C(e, function (x) {
    var M, P, A, L;
    if (B(x)) (M = x), (L = {});
    else {
      (L = x), (M = L.name);
      var I = L.ordinalMeta;
      (L.ordinalMeta = null),
        (L = O({}, L)),
        (L.ordinalMeta = I),
        (P = L.dimsDef),
        (A = L.otherDims),
        (L.name =
          L.coordDim =
          L.coordDimIndex =
          L.dimsDef =
          L.otherDims =
            null);
    }
    var R = h.get(M);
    if (R !== !1) {
      if (((R = xt(R)), !R.length))
        for (var E = 0; E < ((P && P.length) || 1); E++) {
          for (; y < o && d(y).coordDim != null; ) y++;
          y < o && R.push(y++);
        }
      C(R, function (G, N) {
        var z = d(G);
        if (
          (u && L.type != null && (z.type = L.type),
          p(nt(z, L), M, N),
          z.name == null && P)
        ) {
          var V = P[N];
          !F(V) && (V = { name: V }),
            (z.name = z.displayName = V.name),
            (z.defaultTooltip = V.defaultTooltip);
        }
        A && nt(z.otherDims, A);
      });
    }
  });
  function p(x, M, P) {
    pp.get(M) != null
      ? (x.otherDims[M] = P)
      : ((x.coordDim = M), (x.coordDimIndex = P), n.set(M, !0));
  }
  var g = t.generateCoord,
    _ = t.generateCoordCount,
    m = _ != null;
  _ = g ? _ || 1 : 0;
  var w = g || "value";
  function b(x) {
    x.name == null && (x.name = x.coordDim);
  }
  if (s)
    C(a, function (x) {
      b(x);
    }),
      a.sort(function (x, M) {
        return x.storeDimIndex - M.storeDimIndex;
      });
  else
    for (var S = 0; S < o; S++) {
      var D = d(S),
        T = D.coordDim;
      T == null &&
        ((D.coordDim = PT(w, n, m)),
        (D.coordDimIndex = 0),
        (!g || _ <= 0) && (D.isExtraCoord = !0),
        _--),
        b(D),
        D.type == null &&
          (_p(r, S) === dt.Must ||
            (D.isExtraCoord &&
              (D.otherDims.itemName != null ||
                D.otherDims.seriesName != null))) &&
          (D.type = "ordinal");
    }
  return (
    DT(a),
    new bg({
      source: r,
      dimensions: a,
      fullDimensionCount: o,
      dimensionOmitted: s,
    })
  );
}
function DT(r) {
  for (var t = $(), e = 0; e < r.length; e++) {
    var i = r[e],
      n = i.name,
      a = t.get(n) || 0;
    a > 0 && (i.name = n + (a - 1)), a++, t.set(n, a);
  }
}
function MT(r, t, e, i) {
  var n = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, i || 0);
  return (
    C(t, function (a) {
      var o;
      F(a) && (o = a.dimsDef) && (n = Math.max(n, o.length));
    }),
    n
  );
}
function PT(r, t, e) {
  var i = t.data;
  if (e || i.hasOwnProperty(r)) {
    for (var n = 0; i.hasOwnProperty(r + n); ) n++;
    r += n;
  }
  return t.set(r, !0), r;
}
function XD(r, t, e) {
  e = e || {};
  var i = e.byIndex,
    n = e.stackedCoordDimension,
    a,
    o,
    s;
  AT(t) ? (a = t) : ((o = t.schema), (a = o.dimensions), (s = t.store));
  var u = !!(r && r.get("stack")),
    l,
    f,
    h,
    c;
  if (
    (C(a, function (_, m) {
      B(_) && (a[m] = _ = { name: _ }),
        u &&
          !_.isExtraCoord &&
          (!i && !l && _.ordinalMeta && (l = _),
          !f &&
            _.type !== "ordinal" &&
            _.type !== "time" &&
            (!n || n === _.coordDim) &&
            (f = _));
    }),
    f && !i && !l && (i = !0),
    f)
  ) {
    (h = "__\0ecstackresult_" + r.id),
      (c = "__\0ecstackedover_" + r.id),
      l && (l.createInvertedIndices = !0);
    var v = f.coordDim,
      d = f.type,
      y = 0;
    C(a, function (_) {
      _.coordDim === v && y++;
    });
    var p = {
        name: h,
        coordDim: v,
        coordDimIndex: y,
        type: d,
        isExtraCoord: !0,
        isCalculationCoord: !0,
        storeDimIndex: a.length,
      },
      g = {
        name: c,
        coordDim: c,
        coordDimIndex: y + 1,
        type: d,
        isExtraCoord: !0,
        isCalculationCoord: !0,
        storeDimIndex: a.length + 1,
      };
    o
      ? (s &&
          ((p.storeDimIndex = s.ensureCalculationDimension(c, d)),
          (g.storeDimIndex = s.ensureCalculationDimension(h, d))),
        o.appendCalculationDimension(p),
        o.appendCalculationDimension(g))
      : (a.push(p), a.push(g));
  }
  return {
    stackedDimension: f && f.name,
    stackedByDimension: l && l.name,
    isStackedByIndex: i,
    stackedOverDimension: c,
    stackResultDimension: h,
  };
}
function AT(r) {
  return !Tg(r.schema);
}
function Mg(r, t) {
  return !!t && t === r.getCalculationInfo("stackedDimension");
}
function LT(r, t) {
  return Mg(r, t) ? r.getCalculationInfo("stackResultDimension") : t;
}
var Pg = (function () {
  function r(t) {
    (this._setting = t || {}), (this._extent = [1 / 0, -1 / 0]);
  }
  return (
    (r.prototype.getSetting = function (t) {
      return this._setting[t];
    }),
    (r.prototype.unionExtent = function (t) {
      var e = this._extent;
      t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
    }),
    (r.prototype.unionExtentFromData = function (t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }),
    (r.prototype.getExtent = function () {
      return this._extent.slice();
    }),
    (r.prototype.setExtent = function (t, e) {
      var i = this._extent;
      isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e);
    }),
    (r.prototype.isInExtentRange = function (t) {
      return this._extent[0] <= t && this._extent[1] >= t;
    }),
    (r.prototype.isBlank = function () {
      return this._isBlank;
    }),
    (r.prototype.setBlank = function (t) {
      this._isBlank = t;
    }),
    r
  );
})();
fo(Pg);
var Be = Pg,
  IT = 0,
  RT = (function () {
    function r(t) {
      (this.categories = t.categories || []),
        (this._needCollect = t.needCollect),
        (this._deduplication = t.deduplication),
        (this.uid = ++IT);
    }
    return (
      (r.createByAxisModel = function (t) {
        var e = t.option,
          i = e.data,
          n = i && U(i, ET);
        return new r({
          categories: n,
          needCollect: !n,
          deduplication: e.dedplication !== !1,
        });
      }),
      (r.prototype.getOrdinal = function (t) {
        return this._getOrCreateMap().get(t);
      }),
      (r.prototype.parseAndCollect = function (t) {
        var e,
          i = this._needCollect;
        if (!B(t) && !i) return t;
        if (i && !this._deduplication)
          return (e = this.categories.length), (this.categories[e] = t), e;
        var n = this._getOrCreateMap();
        return (
          (e = n.get(t)),
          e == null &&
            (i
              ? ((e = this.categories.length),
                (this.categories[e] = t),
                n.set(t, e))
              : (e = NaN)),
          e
        );
      }),
      (r.prototype._getOrCreateMap = function () {
        return this._map || (this._map = $(this.categories));
      }),
      r
    );
  })();
function ET(r) {
  return F(r) && r.value != null ? r.value : r + "";
}
var kv = RT;
function qD(r) {
  return r.type === "interval" || r.type === "log";
}
function OT(r, t, e, i) {
  var n = {},
    a = r[1] - r[0],
    o = (n.interval = Xc(a / t, !0));
  e != null && o < e && (o = n.interval = e),
    i != null && o > i && (o = n.interval = i);
  var s = (n.intervalPrecision = Ag(o)),
    u = (n.niceTickExtent = [
      ue(Math.ceil(r[0] / o) * o, s),
      ue(Math.floor(r[1] / o) * o, s),
    ]);
  return kT(u, r), n;
}
function ZD(r) {
  var t = Math.pow(10, ul(r)),
    e = r / t;
  return (
    e ? (e === 2 ? (e = 3) : e === 3 ? (e = 5) : (e *= 2)) : (e = 1), ue(e * t)
  );
}
function Ag(r) {
  return Le(r) + 2;
}
function Bv(r, t, e) {
  r[t] = Math.max(Math.min(r[t], e[1]), e[0]);
}
function kT(r, t) {
  !isFinite(r[0]) && (r[0] = t[0]),
    !isFinite(r[1]) && (r[1] = t[1]),
    Bv(r, 0, t),
    Bv(r, 1, t),
    r[0] > r[1] && (r[0] = r[1]);
}
function Ao(r, t) {
  return r >= t[0] && r <= t[1];
}
function Lo(r, t) {
  return t[1] === t[0] ? 0.5 : (r - t[0]) / (t[1] - t[0]);
}
function Io(r, t) {
  return r * (t[1] - t[0]) + t[0];
}
var Lg = (function (r) {
  rt(t, r);
  function t(e) {
    var i = r.call(this, e) || this;
    i.type = "ordinal";
    var n = i.getSetting("ordinalMeta");
    return (
      n || (n = new kv({})),
      k(n) &&
        (n = new kv({
          categories: U(n, function (a) {
            return F(a) ? a.value : a;
          }),
        })),
      (i._ordinalMeta = n),
      (i._extent = i.getSetting("extent") || [0, n.categories.length - 1]),
      i
    );
  }
  return (
    (t.prototype.parse = function (e) {
      return e == null
        ? NaN
        : B(e)
        ? this._ordinalMeta.getOrdinal(e)
        : Math.round(e);
    }),
    (t.prototype.contain = function (e) {
      return (
        (e = this.parse(e)),
        Ao(e, this._extent) && this._ordinalMeta.categories[e] != null
      );
    }),
    (t.prototype.normalize = function (e) {
      return (e = this._getTickNumber(this.parse(e))), Lo(e, this._extent);
    }),
    (t.prototype.scale = function (e) {
      return (e = Math.round(Io(e, this._extent))), this.getRawOrdinalNumber(e);
    }),
    (t.prototype.getTicks = function () {
      for (var e = [], i = this._extent, n = i[0]; n <= i[1]; )
        e.push({ value: n }), n++;
      return e;
    }),
    (t.prototype.getMinorTicks = function (e) {}),
    (t.prototype.setSortInfo = function (e) {
      if (e == null) {
        this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
        return;
      }
      for (
        var i = e.ordinalNumbers,
          n = (this._ordinalNumbersByTick = []),
          a = (this._ticksByOrdinalNumber = []),
          o = 0,
          s = this._ordinalMeta.categories.length,
          u = Math.min(s, i.length);
        o < u;
        ++o
      ) {
        var l = i[o];
        (n[o] = l), (a[l] = o);
      }
      for (var f = 0; o < s; ++o) {
        for (; a[f] != null; ) f++;
        n.push(f), (a[f] = o);
      }
    }),
    (t.prototype._getTickNumber = function (e) {
      var i = this._ticksByOrdinalNumber;
      return i && e >= 0 && e < i.length ? i[e] : e;
    }),
    (t.prototype.getRawOrdinalNumber = function (e) {
      var i = this._ordinalNumbersByTick;
      return i && e >= 0 && e < i.length ? i[e] : e;
    }),
    (t.prototype.getLabel = function (e) {
      if (!this.isBlank()) {
        var i = this.getRawOrdinalNumber(e.value),
          n = this._ordinalMeta.categories[i];
        return n == null ? "" : n + "";
      }
    }),
    (t.prototype.count = function () {
      return this._extent[1] - this._extent[0] + 1;
    }),
    (t.prototype.unionExtentFromData = function (e, i) {
      this.unionExtent(e.getApproximateExtent(i));
    }),
    (t.prototype.isInExtentRange = function (e) {
      return (
        (e = this._getTickNumber(e)),
        this._extent[0] <= e && this._extent[1] >= e
      );
    }),
    (t.prototype.getOrdinalMeta = function () {
      return this._ordinalMeta;
    }),
    (t.prototype.calcNiceTicks = function () {}),
    (t.prototype.calcNiceExtent = function () {}),
    (t.type = "ordinal"),
    t
  );
})(Be);
Be.registerClass(Lg);
var Ig = Lg,
  Tr = ue,
  Rg = (function (r) {
    rt(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (
        (e.type = "interval"), (e._interval = 0), (e._intervalPrecision = 2), e
      );
    }
    return (
      (t.prototype.parse = function (e) {
        return e;
      }),
      (t.prototype.contain = function (e) {
        return Ao(e, this._extent);
      }),
      (t.prototype.normalize = function (e) {
        return Lo(e, this._extent);
      }),
      (t.prototype.scale = function (e) {
        return Io(e, this._extent);
      }),
      (t.prototype.setExtent = function (e, i) {
        var n = this._extent;
        isNaN(e) || (n[0] = parseFloat(e)), isNaN(i) || (n[1] = parseFloat(i));
      }),
      (t.prototype.unionExtent = function (e) {
        var i = this._extent;
        e[0] < i[0] && (i[0] = e[0]),
          e[1] > i[1] && (i[1] = e[1]),
          this.setExtent(i[0], i[1]);
      }),
      (t.prototype.getInterval = function () {
        return this._interval;
      }),
      (t.prototype.setInterval = function (e) {
        (this._interval = e),
          (this._niceExtent = this._extent.slice()),
          (this._intervalPrecision = Ag(e));
      }),
      (t.prototype.getTicks = function (e) {
        var i = this._interval,
          n = this._extent,
          a = this._niceExtent,
          o = this._intervalPrecision,
          s = [];
        if (!i) return s;
        var u = 1e4;
        n[0] < a[0] &&
          (e ? s.push({ value: Tr(a[0] - i, o) }) : s.push({ value: n[0] }));
        for (
          var l = a[0];
          l <= a[1] &&
          (s.push({ value: l }),
          (l = Tr(l + i, o)),
          l !== s[s.length - 1].value);

        )
          if (s.length > u) return [];
        var f = s.length ? s[s.length - 1].value : a[1];
        return (
          n[1] > f &&
            (e ? s.push({ value: Tr(f + i, o) }) : s.push({ value: n[1] })),
          s
        );
      }),
      (t.prototype.getMinorTicks = function (e) {
        for (
          var i = this.getTicks(!0), n = [], a = this.getExtent(), o = 1;
          o < i.length;
          o++
        ) {
          for (
            var s = i[o],
              u = i[o - 1],
              l = 0,
              f = [],
              h = s.value - u.value,
              c = h / e;
            l < e - 1;

          ) {
            var v = Tr(u.value + (l + 1) * c);
            v > a[0] && v < a[1] && f.push(v), l++;
          }
          n.push(f);
        }
        return n;
      }),
      (t.prototype.getLabel = function (e, i) {
        if (e == null) return "";
        var n = i && i.precision;
        n == null
          ? (n = Le(e.value) || 0)
          : n === "auto" && (n = this._intervalPrecision);
        var a = Tr(e.value, n, !0);
        return hp(a);
      }),
      (t.prototype.calcNiceTicks = function (e, i, n) {
        e = e || 5;
        var a = this._extent,
          o = a[1] - a[0];
        if (!!isFinite(o)) {
          o < 0 && ((o = -o), a.reverse());
          var s = OT(a, e, i, n);
          (this._intervalPrecision = s.intervalPrecision),
            (this._interval = s.interval),
            (this._niceExtent = s.niceTickExtent);
        }
      }),
      (t.prototype.calcNiceExtent = function (e) {
        var i = this._extent;
        if (i[0] === i[1])
          if (i[0] !== 0) {
            var n = i[0];
            e.fixMax || (i[1] += n / 2), (i[0] -= n / 2);
          } else i[1] = 1;
        var a = i[1] - i[0];
        isFinite(a) || ((i[0] = 0), (i[1] = 1)),
          this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
        var o = this._interval;
        e.fixMin || (i[0] = Tr(Math.floor(i[0] / o) * o)),
          e.fixMax || (i[1] = Tr(Math.ceil(i[1] / o) * o));
      }),
      (t.prototype.setNiceExtent = function (e, i) {
        this._niceExtent = [e, i];
      }),
      (t.type = "interval"),
      t
    );
  })(Be);
Be.registerClass(Rg);
var Ro = Rg,
  Eg = typeof Float32Array != "undefined",
  BT = Eg ? Float32Array : Array;
function Ns(r) {
  return k(r) ? (Eg ? new Float32Array(r) : r) : new BT(r);
}
var FT = "__ec_stack_";
function Yl(r) {
  return r.get("stack") || FT + r.seriesIndex;
}
function $l(r) {
  return r.dim + r.index;
}
function Og(r, t) {
  var e = [];
  return (
    t.eachSeriesByType(r, function (i) {
      Bg(i) && e.push(i);
    }),
    e
  );
}
function NT(r) {
  var t = {};
  C(r, function (u) {
    var l = u.coordinateSystem,
      f = l.getBaseAxis();
    if (!(f.type !== "time" && f.type !== "value"))
      for (
        var h = u.getData(),
          c = f.dim + "_" + f.index,
          v = h.getDimensionIndex(h.mapDimension(f.dim)),
          d = h.getStore(),
          y = 0,
          p = d.count();
        y < p;
        ++y
      ) {
        var g = d.get(v, y);
        t[c] ? t[c].push(g) : (t[c] = [g]);
      }
  });
  var e = {};
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      var n = t[i];
      if (n) {
        n.sort(function (u, l) {
          return u - l;
        });
        for (var a = null, o = 1; o < n.length; ++o) {
          var s = n[o] - n[o - 1];
          s > 0 && (a = a === null ? s : Math.min(a, s));
        }
        e[i] = a;
      }
    }
  return e;
}
function kg(r) {
  var t = NT(r),
    e = [];
  return (
    C(r, function (i) {
      var n = i.coordinateSystem,
        a = n.getBaseAxis(),
        o = a.getExtent(),
        s;
      if (a.type === "category") s = a.getBandWidth();
      else if (a.type === "value" || a.type === "time") {
        var u = a.dim + "_" + a.index,
          l = t[u],
          f = Math.abs(o[1] - o[0]),
          h = a.scale.getExtent(),
          c = Math.abs(h[1] - h[0]);
        s = l ? (f / c) * l : f;
      } else {
        var v = i.getData();
        s = Math.abs(o[1] - o[0]) / v.count();
      }
      var d = Pt(i.get("barWidth"), s),
        y = Pt(i.get("barMaxWidth"), s),
        p = Pt(i.get("barMinWidth") || (Fg(i) ? 0.5 : 1), s),
        g = i.get("barGap"),
        _ = i.get("barCategoryGap");
      e.push({
        bandWidth: s,
        barWidth: d,
        barMaxWidth: y,
        barMinWidth: p,
        barGap: g,
        barCategoryGap: _,
        axisKey: $l(a),
        stackId: Yl(i),
      });
    }),
    zT(e)
  );
}
function zT(r) {
  var t = {};
  C(r, function (i, n) {
    var a = i.axisKey,
      o = i.bandWidth,
      s = t[a] || {
        bandWidth: o,
        remainedWidth: o,
        autoWidthCount: 0,
        categoryGap: null,
        gap: "20%",
        stacks: {},
      },
      u = s.stacks;
    t[a] = s;
    var l = i.stackId;
    u[l] || s.autoWidthCount++, (u[l] = u[l] || { width: 0, maxWidth: 0 });
    var f = i.barWidth;
    f &&
      !u[l].width &&
      ((u[l].width = f),
      (f = Math.min(s.remainedWidth, f)),
      (s.remainedWidth -= f));
    var h = i.barMaxWidth;
    h && (u[l].maxWidth = h);
    var c = i.barMinWidth;
    c && (u[l].minWidth = c);
    var v = i.barGap;
    v != null && (s.gap = v);
    var d = i.barCategoryGap;
    d != null && (s.categoryGap = d);
  });
  var e = {};
  return (
    C(t, function (i, n) {
      e[n] = {};
      var a = i.stacks,
        o = i.bandWidth,
        s = i.categoryGap;
      if (s == null) {
        var u = ft(a).length;
        s = Math.max(35 - u * 4, 15) + "%";
      }
      var l = Pt(s, o),
        f = Pt(i.gap, 1),
        h = i.remainedWidth,
        c = i.autoWidthCount,
        v = (h - l) / (c + (c - 1) * f);
      (v = Math.max(v, 0)),
        C(a, function (g) {
          var _ = g.maxWidth,
            m = g.minWidth;
          if (g.width) {
            var w = g.width;
            _ && (w = Math.min(w, _)),
              m && (w = Math.max(w, m)),
              (g.width = w),
              (h -= w + f * w),
              c--;
          } else {
            var w = v;
            _ && _ < w && (w = Math.min(_, h)),
              m && m > w && (w = m),
              w !== v && ((g.width = w), (h -= w + f * w), c--);
          }
        }),
        (v = (h - l) / (c + (c - 1) * f)),
        (v = Math.max(v, 0));
      var d = 0,
        y;
      C(a, function (g, _) {
        g.width || (g.width = v), (y = g), (d += g.width * (1 + f));
      }),
        y && (d -= y.width * f);
      var p = -d / 2;
      C(a, function (g, _) {
        (e[n][_] = e[n][_] || { bandWidth: o, offset: p, width: g.width }),
          (p += g.width * (1 + f));
      });
    }),
    e
  );
}
function HT(r, t, e) {
  if (r && t) {
    var i = r[$l(t)];
    return i != null && e != null ? i[Yl(e)] : i;
  }
}
function KD(r, t) {
  var e = Og(r, t),
    i = kg(e);
  C(e, function (n) {
    var a = n.getData(),
      o = n.coordinateSystem,
      s = o.getBaseAxis(),
      u = Yl(n),
      l = i[$l(s)][u],
      f = l.offset,
      h = l.width;
    a.setLayout({ bandWidth: l.bandWidth, offset: f, size: h });
  });
}
function QD(r) {
  return {
    seriesType: r,
    plan: Wp(),
    reset: function (t) {
      if (!!Bg(t)) {
        var e = t.getData(),
          i = t.coordinateSystem,
          n = i.getBaseAxis(),
          a = i.getOtherAxis(n),
          o = e.getDimensionIndex(e.mapDimension(a.dim)),
          s = e.getDimensionIndex(e.mapDimension(n.dim)),
          u = t.get("showBackground", !0),
          l = e.mapDimension(a.dim),
          f = e.getCalculationInfo("stackResultDimension"),
          h = Mg(e, l) && !!e.getCalculationInfo("stackedOnSeries"),
          c = a.isHorizontal(),
          v = GT(n, a),
          d = Fg(t),
          y = t.get("barMinHeight") || 0,
          p = f && e.getDimensionIndex(f),
          g = e.getLayout("size"),
          _ = e.getLayout("offset");
        return {
          progress: function (m, w) {
            for (
              var b = m.count,
                S = d && Ns(b * 3),
                D = d && u && Ns(b * 3),
                T = d && Ns(b),
                x = i.master.getRect(),
                M = c ? x.width : x.height,
                P,
                A = w.getStore(),
                L = 0;
              (P = m.next()) != null;

            ) {
              var I = A.get(h ? p : o, P),
                R = A.get(s, P),
                E = v,
                G = void 0;
              h && (G = +I - A.get(o, P));
              var N = void 0,
                z = void 0,
                V = void 0,
                at = void 0;
              if (c) {
                var tt = i.dataToPoint([I, R]);
                if (h) {
                  var _t = i.dataToPoint([G, R]);
                  E = _t[0];
                }
                (N = E),
                  (z = tt[1] + _),
                  (V = tt[0] - E),
                  (at = g),
                  Math.abs(V) < y && (V = (V < 0 ? -1 : 1) * y);
              } else {
                var tt = i.dataToPoint([R, I]);
                if (h) {
                  var _t = i.dataToPoint([R, G]);
                  E = _t[1];
                }
                (N = tt[0] + _),
                  (z = E),
                  (V = g),
                  (at = tt[1] - E),
                  Math.abs(at) < y && (at = (at <= 0 ? -1 : 1) * y);
              }
              d
                ? ((S[L] = N),
                  (S[L + 1] = z),
                  (S[L + 2] = c ? V : at),
                  D &&
                    ((D[L] = c ? x.x : N),
                    (D[L + 1] = c ? z : x.y),
                    (D[L + 2] = M)),
                  (T[P] = P))
                : w.setItemLayout(P, { x: N, y: z, width: V, height: at }),
                (L += 3);
            }
            d &&
              w.setLayout({
                largePoints: S,
                largeDataIndices: T,
                largeBackgroundPoints: D,
                valueAxisHorizontal: c,
              });
          },
        };
      }
    },
  };
}
function Bg(r) {
  return r.coordinateSystem && r.coordinateSystem.type === "cartesian2d";
}
function Fg(r) {
  return r.pipelineContext && r.pipelineContext.large;
}
function GT(r, t) {
  return t.toGlobalCoord(t.dataToCoord(t.type === "log" ? 1 : 0));
}
var VT = function (r, t, e, i) {
    for (; e < i; ) {
      var n = (e + i) >>> 1;
      r[n][1] < t ? (e = n + 1) : (i = n);
    }
    return e;
  },
  Ng = (function (r) {
    rt(t, r);
    function t(e) {
      var i = r.call(this, e) || this;
      return (i.type = "time"), i;
    }
    return (
      (t.prototype.getLabel = function (e) {
        var i = this.getSetting("useUTC");
        return mo(
          e.value,
          Ch[vw(li(this._minLevelUnit))] || Ch.second,
          i,
          this.getSetting("locale")
        );
      }),
      (t.prototype.getFormattedLabel = function (e, i, n) {
        var a = this.getSetting("useUTC"),
          o = this.getSetting("locale");
        return cw(e, i, n, o, a);
      }),
      (t.prototype.getTicks = function () {
        var e = this._interval,
          i = this._extent,
          n = [];
        if (!e) return n;
        n.push({ value: i[0], level: 0 });
        var a = this.getSetting("useUTC"),
          o = ZT(this._minLevelUnit, this._approxInterval, a, i);
        return (n = n.concat(o)), n.push({ value: i[1], level: 0 }), n;
      }),
      (t.prototype.calcNiceExtent = function (e) {
        var i = this._extent;
        if (
          (i[0] === i[1] && ((i[0] -= ee), (i[1] += ee)),
          i[1] === -1 / 0 && i[0] === 1 / 0)
        ) {
          var n = new Date();
          (i[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate())),
            (i[0] = i[1] - ee);
        }
        this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
      }),
      (t.prototype.calcNiceTicks = function (e, i, n) {
        e = e || 10;
        var a = this._extent,
          o = a[1] - a[0];
        (this._approxInterval = o / e),
          i != null && this._approxInterval < i && (this._approxInterval = i),
          n != null && this._approxInterval > n && (this._approxInterval = n);
        var s = ha.length,
          u = Math.min(VT(ha, this._approxInterval, 0, s), s - 1);
        (this._interval = ha[u][1]),
          (this._minLevelUnit = ha[Math.max(u - 1, 0)][0]);
      }),
      (t.prototype.parse = function (e) {
        return ht(e) ? e : +Re(e);
      }),
      (t.prototype.contain = function (e) {
        return Ao(this.parse(e), this._extent);
      }),
      (t.prototype.normalize = function (e) {
        return Lo(this.parse(e), this._extent);
      }),
      (t.prototype.scale = function (e) {
        return Io(e, this._extent);
      }),
      (t.type = "time"),
      t
    );
  })(Ro),
  ha = [
    ["second", Dl],
    ["minute", Ml],
    ["hour", rn],
    ["quarter-day", rn * 6],
    ["half-day", rn * 12],
    ["day", ee * 1.2],
    ["half-week", ee * 3.5],
    ["week", ee * 7],
    ["month", ee * 31],
    ["quarter", ee * 95],
    ["half-year", xh / 2],
    ["year", xh],
  ];
function WT(r, t, e, i) {
  var n = Re(t),
    a = Re(e),
    o = function (d) {
      return Dh(n, d, i) === Dh(a, d, i);
    },
    s = function () {
      return o("year");
    },
    u = function () {
      return s() && o("month");
    },
    l = function () {
      return u() && o("day");
    },
    f = function () {
      return l() && o("hour");
    },
    h = function () {
      return f() && o("minute");
    },
    c = function () {
      return h() && o("second");
    },
    v = function () {
      return c() && o("millisecond");
    };
  switch (r) {
    case "year":
      return s();
    case "month":
      return u();
    case "day":
      return l();
    case "hour":
      return f();
    case "minute":
      return h();
    case "second":
      return c();
    case "millisecond":
      return v();
  }
}
function UT(r, t) {
  return (r /= ee), r > 16 ? 16 : r > 7.5 ? 7 : r > 3.5 ? 4 : r > 1.5 ? 2 : 1;
}
function YT(r) {
  var t = 30 * ee;
  return (r /= t), r > 6 ? 6 : r > 3 ? 3 : r > 2 ? 2 : 1;
}
function $T(r) {
  return (r /= rn), r > 12 ? 12 : r > 6 ? 6 : r > 3.5 ? 4 : r > 2 ? 2 : 1;
}
function Fv(r, t) {
  return (
    (r /= t ? Ml : Dl),
    r > 30
      ? 30
      : r > 20
      ? 20
      : r > 15
      ? 15
      : r > 10
      ? 10
      : r > 5
      ? 5
      : r > 2
      ? 2
      : 1
  );
}
function XT(r) {
  return Xc(r, !0);
}
function qT(r, t, e) {
  var i = new Date(r);
  switch (li(t)) {
    case "year":
    case "month":
      i[ap(e)](0);
    case "day":
      i[op(e)](1);
    case "hour":
      i[sp(e)](0);
    case "minute":
      i[up(e)](0);
    case "second":
      i[lp(e)](0), i[fp(e)](0);
  }
  return i.getTime();
}
function ZT(r, t, e, i) {
  var n = 1e4,
    a = ip,
    o = 0;
  function s(M, P, A, L, I, R, E) {
    for (var G = new Date(P), N = P, z = G[L](); N < A && N <= i[1]; )
      E.push({ value: N }), (z += M), G[I](z), (N = G.getTime());
    E.push({ value: N, notAdd: !0 });
  }
  function u(M, P, A) {
    var L = [],
      I = !P.length;
    if (!WT(li(M), i[0], i[1], e)) {
      I && (P = [{ value: qT(new Date(i[0]), M, e) }, { value: i[1] }]);
      for (var R = 0; R < P.length - 1; R++) {
        var E = P[R].value,
          G = P[R + 1].value;
        if (E !== G) {
          var N = void 0,
            z = void 0,
            V = void 0,
            at = !1;
          switch (M) {
            case "year":
              (N = Math.max(1, Math.round(t / ee / 365))),
                (z = Pl(e)),
                (V = dw(e));
              break;
            case "half-year":
            case "quarter":
            case "month":
              (N = YT(t)), (z = fi(e)), (V = ap(e));
              break;
            case "week":
            case "half-week":
            case "day":
              (N = UT(t)), (z = wo(e)), (V = op(e)), (at = !0);
              break;
            case "half-day":
            case "quarter-day":
            case "hour":
              (N = $T(t)), (z = gn(e)), (V = sp(e));
              break;
            case "minute":
              (N = Fv(t, !0)), (z = So(e)), (V = up(e));
              break;
            case "second":
              (N = Fv(t, !1)), (z = bo(e)), (V = lp(e));
              break;
            case "millisecond":
              (N = XT(t)), (z = To(e)), (V = fp(e));
              break;
          }
          s(N, E, G, z, V, at, L),
            M === "year" &&
              A.length > 1 &&
              R === 0 &&
              A.unshift({ value: A[0].value - N });
        }
      }
      for (var R = 0; R < L.length; R++) A.push(L[R]);
      return L;
    }
  }
  for (var l = [], f = [], h = 0, c = 0, v = 0; v < a.length && o++ < n; ++v) {
    var d = li(a[v]);
    if (!!hw(a[v])) {
      u(a[v], l[l.length - 1] || [], f);
      var y = a[v + 1] ? li(a[v + 1]) : null;
      if (d !== y) {
        if (f.length) {
          (c = h),
            f.sort(function (M, P) {
              return M.value - P.value;
            });
          for (var p = [], g = 0; g < f.length; ++g) {
            var _ = f[g].value;
            (g === 0 || f[g - 1].value !== _) &&
              (p.push(f[g]), _ >= i[0] && _ <= i[1] && h++);
          }
          var m = (i[1] - i[0]) / t;
          if ((h > m * 1.5 && c > m / 1.5) || (l.push(p), h > m || r === a[v]))
            break;
        }
        f = [];
      }
    }
  }
  for (
    var w = zt(
        U(l, function (M) {
          return zt(M, function (P) {
            return P.value >= i[0] && P.value <= i[1] && !P.notAdd;
          });
        }),
        function (M) {
          return M.length > 0;
        }
      ),
      b = [],
      S = w.length - 1,
      v = 0;
    v < w.length;
    ++v
  )
    for (var D = w[v], T = 0; T < D.length; ++T)
      b.push({ value: D[T].value, level: S - v });
  b.sort(function (M, P) {
    return M.value - P.value;
  });
  for (var x = [], v = 0; v < b.length; ++v)
    (v === 0 || b[v].value !== b[v - 1].value) && x.push(b[v]);
  return x;
}
Be.registerClass(Ng);
var KT = Ng,
  Nv = Be.prototype,
  un = Ro.prototype,
  QT = ue,
  JT = Math.floor,
  jT = Math.ceil,
  va = Math.pow,
  $t = Math.log,
  Xl = (function (r) {
    rt(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (
        (e.type = "log"),
        (e.base = 10),
        (e._originalScale = new Ro()),
        (e._interval = 0),
        e
      );
    }
    return (
      (t.prototype.getTicks = function (e) {
        var i = this._originalScale,
          n = this._extent,
          a = i.getExtent(),
          o = un.getTicks.call(this, e);
        return U(
          o,
          function (s) {
            var u = s.value,
              l = ue(va(this.base, u));
            return (
              (l = u === n[0] && this._fixMin ? ca(l, a[0]) : l),
              (l = u === n[1] && this._fixMax ? ca(l, a[1]) : l),
              { value: l }
            );
          },
          this
        );
      }),
      (t.prototype.setExtent = function (e, i) {
        var n = this.base;
        (e = $t(e) / $t(n)), (i = $t(i) / $t(n)), un.setExtent.call(this, e, i);
      }),
      (t.prototype.getExtent = function () {
        var e = this.base,
          i = Nv.getExtent.call(this);
        (i[0] = va(e, i[0])), (i[1] = va(e, i[1]));
        var n = this._originalScale,
          a = n.getExtent();
        return (
          this._fixMin && (i[0] = ca(i[0], a[0])),
          this._fixMax && (i[1] = ca(i[1], a[1])),
          i
        );
      }),
      (t.prototype.unionExtent = function (e) {
        this._originalScale.unionExtent(e);
        var i = this.base;
        (e[0] = $t(e[0]) / $t(i)),
          (e[1] = $t(e[1]) / $t(i)),
          Nv.unionExtent.call(this, e);
      }),
      (t.prototype.unionExtentFromData = function (e, i) {
        this.unionExtent(e.getApproximateExtent(i));
      }),
      (t.prototype.calcNiceTicks = function (e) {
        e = e || 10;
        var i = this._extent,
          n = i[1] - i[0];
        if (!(n === 1 / 0 || n <= 0)) {
          var a = i0(n),
            o = (e / n) * a;
          for (
            o <= 0.5 && (a *= 10);
            !isNaN(a) && Math.abs(a) < 1 && Math.abs(a) > 0;

          )
            a *= 10;
          var s = [ue(jT(i[0] / a) * a), ue(JT(i[1] / a) * a)];
          (this._interval = a), (this._niceExtent = s);
        }
      }),
      (t.prototype.calcNiceExtent = function (e) {
        un.calcNiceExtent.call(this, e),
          (this._fixMin = e.fixMin),
          (this._fixMax = e.fixMax);
      }),
      (t.prototype.parse = function (e) {
        return e;
      }),
      (t.prototype.contain = function (e) {
        return (e = $t(e) / $t(this.base)), Ao(e, this._extent);
      }),
      (t.prototype.normalize = function (e) {
        return (e = $t(e) / $t(this.base)), Lo(e, this._extent);
      }),
      (t.prototype.scale = function (e) {
        return (e = Io(e, this._extent)), va(this.base, e);
      }),
      (t.type = "log"),
      t
    );
  })(Be),
  zg = Xl.prototype;
zg.getMinorTicks = un.getMinorTicks;
zg.getLabel = un.getLabel;
function ca(r, t) {
  return QT(r, Le(t));
}
Be.registerClass(Xl);
var tx = Xl,
  ex = (function () {
    function r(t, e, i) {
      this._prepareParams(t, e, i);
    }
    return (
      (r.prototype._prepareParams = function (t, e, i) {
        i[1] < i[0] && (i = [NaN, NaN]),
          (this._dataMin = i[0]),
          (this._dataMax = i[1]);
        var n = (this._isOrdinal = t.type === "ordinal");
        this._needCrossZero =
          t.type === "interval" && e.getNeedCrossZero && e.getNeedCrossZero();
        var a = (this._modelMinRaw = e.get("min", !0));
        q(a)
          ? (this._modelMinNum = da(t, a({ min: i[0], max: i[1] })))
          : a !== "dataMin" && (this._modelMinNum = da(t, a));
        var o = (this._modelMaxRaw = e.get("max", !0));
        if (
          (q(o)
            ? (this._modelMaxNum = da(t, o({ min: i[0], max: i[1] })))
            : o !== "dataMax" && (this._modelMaxNum = da(t, o)),
          n)
        )
          this._axisDataLen = e.getCategories().length;
        else {
          var s = e.get("boundaryGap"),
            u = k(s) ? s : [s || 0, s || 0];
          typeof u[0] == "boolean" || typeof u[1] == "boolean"
            ? (this._boundaryGapInner = [0, 0])
            : (this._boundaryGapInner = [kr(u[0], 1), kr(u[1], 1)]);
        }
      }),
      (r.prototype.calculate = function () {
        var t = this._isOrdinal,
          e = this._dataMin,
          i = this._dataMax,
          n = this._axisDataLen,
          a = this._boundaryGapInner,
          o = t ? null : i - e || Math.abs(e),
          s = this._modelMinRaw === "dataMin" ? e : this._modelMinNum,
          u = this._modelMaxRaw === "dataMax" ? i : this._modelMaxNum,
          l = s != null,
          f = u != null;
        s == null && (s = t ? (n ? 0 : NaN) : e - a[0] * o),
          u == null && (u = t ? (n ? n - 1 : NaN) : i + a[1] * o),
          (s == null || !isFinite(s)) && (s = NaN),
          (u == null || !isFinite(u)) && (u = NaN);
        var h = Ba(s) || Ba(u) || (t && !n);
        this._needCrossZero &&
          (s > 0 && u > 0 && !l && (s = 0), s < 0 && u < 0 && !f && (u = 0));
        var c = this._determinedMin,
          v = this._determinedMax;
        return (
          c != null && ((s = c), (l = !0)),
          v != null && ((u = v), (f = !0)),
          { min: s, max: u, minFixed: l, maxFixed: f, isBlank: h }
        );
      }),
      (r.prototype.modifyDataMinMax = function (t, e) {
        this[ix[t]] = e;
      }),
      (r.prototype.setDeterminedMinMax = function (t, e) {
        var i = rx[t];
        this[i] = e;
      }),
      (r.prototype.freeze = function () {
        this.frozen = !0;
      }),
      r
    );
  })(),
  rx = { min: "_determinedMin", max: "_determinedMax" },
  ix = { min: "_dataMin", max: "_dataMax" };
function nx(r, t, e) {
  var i = r.rawExtentInfo;
  return i || ((i = new ex(r, t, e)), (r.rawExtentInfo = i), i);
}
function da(r, t) {
  return t == null ? null : Ba(t) ? NaN : r.parse(t);
}
function ax(r, t) {
  var e = r.type,
    i = nx(r, t, r.getExtent()).calculate();
  r.setBlank(i.isBlank);
  var n = i.min,
    a = i.max,
    o = t.ecModel;
  if (o && e === "time") {
    var s = Og("bar", o),
      u = !1;
    if (
      (C(s, function (h) {
        u = u || h.getBaseAxis() === t.axis;
      }),
      u)
    ) {
      var l = kg(s),
        f = ox(n, a, t, l);
      (n = f.min), (a = f.max);
    }
  }
  return { extent: [n, a], fixMin: i.minFixed, fixMax: i.maxFixed };
}
function ox(r, t, e, i) {
  var n = e.axis.getExtent(),
    a = n[1] - n[0],
    o = HT(i, e.axis);
  if (o === void 0) return { min: r, max: t };
  var s = 1 / 0;
  C(o, function (v) {
    s = Math.min(v.offset, s);
  });
  var u = -1 / 0;
  C(o, function (v) {
    u = Math.max(v.offset + v.width, u);
  }),
    (s = Math.abs(s)),
    (u = Math.abs(u));
  var l = s + u,
    f = t - r,
    h = 1 - (s + u) / a,
    c = f / h - f;
  return (t += c * (u / l)), (r -= c * (s / l)), { min: r, max: t };
}
function JD(r, t) {
  var e = t,
    i = ax(r, e),
    n = i.extent,
    a = e.get("splitNumber");
  r instanceof tx && (r.base = e.get("logBase"));
  var o = r.type,
    s = e.get("interval"),
    u = o === "interval" || o === "time";
  r.setExtent(n[0], n[1]),
    r.calcNiceExtent({
      splitNumber: a,
      fixMin: i.fixMin,
      fixMax: i.fixMax,
      minInterval: u ? e.get("minInterval") : null,
      maxInterval: u ? e.get("maxInterval") : null,
    }),
    s != null && r.setInterval && r.setInterval(s);
}
function jD(r, t) {
  if (((t = t || r.get("type")), t))
    switch (t) {
      case "category":
        return new Ig({
          ordinalMeta: r.getOrdinalMeta
            ? r.getOrdinalMeta()
            : r.getCategories(),
          extent: [1 / 0, -1 / 0],
        });
      case "time":
        return new KT({
          locale: r.ecModel.getLocaleModel(),
          useUTC: r.ecModel.get("useUTC"),
        });
      default:
        return new (Be.getClass(t) || Ro)();
    }
}
function tM(r) {
  var t = r.scale.getExtent(),
    e = t[0],
    i = t[1];
  return !((e > 0 && i > 0) || (e < 0 && i < 0));
}
function sx(r) {
  var t = r.getLabelModel().get("formatter"),
    e = r.type === "category" ? r.scale.getExtent()[0] : null;
  return r.scale.type === "time"
    ? (function (i) {
        return function (n, a) {
          return r.scale.getFormattedLabel(n, a, i);
        };
      })(t)
    : B(t)
    ? (function (i) {
        return function (n) {
          var a = r.scale.getLabel(n),
            o = i.replace("{value}", a != null ? a : "");
          return o;
        };
      })(t)
    : q(t)
    ? (function (i) {
        return function (n, a) {
          return (
            e != null && (a = n.value - e),
            i(ql(r, n), a, n.level != null ? { level: n.level } : null)
          );
        };
      })(t)
    : function (i) {
        return r.scale.getLabel(i);
      };
}
function ql(r, t) {
  return r.type === "category" ? r.scale.getLabel(t) : t.value;
}
function eM(r) {
  var t = r.model,
    e = r.scale;
  if (!(!t.get(["axisLabel", "show"]) || e.isBlank())) {
    var i,
      n,
      a = e.getExtent();
    e instanceof Ig ? (n = e.count()) : ((i = e.getTicks()), (n = i.length));
    var o = r.getLabelModel(),
      s = sx(r),
      u,
      l = 1;
    n > 40 && (l = Math.ceil(n / 40));
    for (var f = 0; f < n; f += l) {
      var h = i ? i[f] : { value: a[0] + f },
        c = s(h, f),
        v = o.getTextRect(c),
        d = ux(v, o.get("rotate") || 0);
      u ? u.union(d) : (u = d);
    }
    return u;
  }
}
function ux(r, t) {
  var e = (t * Math.PI) / 180,
    i = r.width,
    n = r.height,
    a = i * Math.abs(Math.cos(e)) + Math.abs(n * Math.sin(e)),
    o = i * Math.abs(Math.sin(e)) + Math.abs(n * Math.cos(e)),
    s = new j(r.x, r.y, a, o);
  return s;
}
function lx(r) {
  var t = r.get("interval");
  return t == null ? "auto" : t;
}
function fx(r) {
  return r.type === "category" && lx(r.getLabelModel()) === 0;
}
function hx(r, t) {
  var e = {};
  return (
    C(r.mapDimensionsAll(t), function (i) {
      e[LT(r, i)] = !0;
    }),
    ft(e)
  );
}
function rM(r, t, e) {
  t &&
    C(hx(t, e), function (i) {
      var n = t.getApproximateExtent(i);
      n[0] < r[0] && (r[0] = n[0]), n[1] > r[1] && (r[1] = n[1]);
    });
}
var zv = [],
  vx = {
    registerPreprocessor: mg,
    registerProcessor: wg,
    registerPostInit: sT,
    registerPostUpdate: uT,
    registerUpdateLifecycle: Wl,
    registerAction: Si,
    registerCoordinateSystem: lT,
    registerLayout: fT,
    registerVisual: Nr,
    registerTransform: vT,
    registerLoading: Sg,
    registerMap: hT,
    registerImpl: Hb,
    PRIORITY: tT,
    ComponentModel: ot,
    ComponentView: Ee,
    SeriesModel: Qa,
    ChartView: an,
    registerComponentModel: function (r) {
      ot.registerClass(r);
    },
    registerComponentView: function (r) {
      Ee.registerClass(r);
    },
    registerSeriesModel: function (r) {
      Qa.registerClass(r);
    },
    registerChartView: function (r) {
      an.registerClass(r);
    },
    registerSubTypeDefaulter: function (r, t) {
      ot.registerSubTypeDefaulter(r, t);
    },
    registerPainter: function (r, t) {
      J_(r, t);
    },
  };
function Tn(r) {
  if (k(r)) {
    C(r, function (t) {
      Tn(t);
    });
    return;
  }
  et(zv, r) >= 0 || (zv.push(r), q(r) && (r = { install: r }), r.install(vx));
}
function cx(r) {
  for (var t = [], e = 0; e < r.length; e++) {
    var i = r[e];
    if (!i.defaultAttr.ignore) {
      var n = i.label,
        a = n.getComputedTransform(),
        o = n.getBoundingRect(),
        s = !a || (a[1] < 1e-5 && a[2] < 1e-5),
        u = n.style.margin || 0,
        l = o.clone();
      l.applyTransform(a),
        (l.x -= u / 2),
        (l.y -= u / 2),
        (l.width += u),
        (l.height += u);
      var f = s ? new Ya(o, a) : null;
      t.push({
        label: n,
        labelLine: i.labelLine,
        rect: l,
        localRect: o,
        obb: f,
        priority: i.priority,
        defaultAttr: i.defaultAttr,
        layoutOption: i.computedLayoutOption,
        axisAligned: s,
        transform: a,
      });
    }
  }
  return t;
}
function Hg(r, t, e, i, n, a) {
  var o = r.length;
  if (o < 2) return;
  r.sort(function (T, x) {
    return T.rect[t] - x.rect[t];
  });
  for (var s = 0, u, l = !1, f = 0, h = 0; h < o; h++) {
    var c = r[h],
      v = c.rect;
    (u = v[t] - s), u < 0 && ((v[t] -= u), (c.label[t] -= u), (l = !0));
    var d = Math.max(-u, 0);
    (f += d), (s = v[t] + v[e]);
  }
  f > 0 && a && b(-f / o, 0, o);
  var y = r[0],
    p = r[o - 1],
    g,
    _;
  m(),
    g < 0 && S(-g, 0.8),
    _ < 0 && S(_, 0.8),
    m(),
    w(g, _, 1),
    w(_, g, -1),
    m(),
    g < 0 && D(-g),
    _ < 0 && D(_);
  function m() {
    (g = y.rect[t] - i), (_ = n - p.rect[t] - p.rect[e]);
  }
  function w(T, x, M) {
    if (T < 0) {
      var P = Math.min(x, -T);
      if (P > 0) {
        b(P * M, 0, o);
        var A = P + T;
        A < 0 && S(-A * M, 1);
      } else S(-T * M, 1);
    }
  }
  function b(T, x, M) {
    T !== 0 && (l = !0);
    for (var P = x; P < M; P++) {
      var A = r[P],
        L = A.rect;
      (L[t] += T), (A.label[t] += T);
    }
  }
  function S(T, x) {
    for (var M = [], P = 0, A = 1; A < o; A++) {
      var L = r[A - 1].rect,
        I = Math.max(r[A].rect[t] - L[t] - L[e], 0);
      M.push(I), (P += I);
    }
    if (!!P) {
      var R = Math.min(Math.abs(T) / P, x);
      if (T > 0)
        for (var A = 0; A < o - 1; A++) {
          var E = M[A] * R;
          b(E, 0, A + 1);
        }
      else
        for (var A = o - 1; A > 0; A--) {
          var E = M[A - 1] * R;
          b(-E, A, o);
        }
    }
  }
  function D(T) {
    var x = T < 0 ? -1 : 1;
    T = Math.abs(T);
    for (var M = Math.ceil(T / (o - 1)), P = 0; P < o - 1; P++)
      if ((x > 0 ? b(M, 0, P + 1) : b(-M, o - P - 1, o), (T -= M), T <= 0))
        return;
  }
  return l;
}
function iM(r, t, e, i) {
  return Hg(r, "x", "width", t, e, i);
}
function nM(r, t, e, i) {
  return Hg(r, "y", "height", t, e, i);
}
function dx(r) {
  var t = [];
  r.sort(function (y, p) {
    return p.priority - y.priority;
  });
  var e = new j(0, 0, 0, 0);
  function i(y) {
    if (!y.ignore) {
      var p = y.ensureState("emphasis");
      p.ignore == null && (p.ignore = !1);
    }
    y.ignore = !0;
  }
  for (var n = 0; n < r.length; n++) {
    var a = r[n],
      o = a.axisAligned,
      s = a.localRect,
      u = a.transform,
      l = a.label,
      f = a.labelLine;
    e.copy(a.rect),
      (e.width -= 0.1),
      (e.height -= 0.1),
      (e.x += 0.05),
      (e.y += 0.05);
    for (var h = a.obb, c = !1, v = 0; v < t.length; v++) {
      var d = t[v];
      if (!!e.intersect(d.rect)) {
        if (o && d.axisAligned) {
          c = !0;
          break;
        }
        if (
          (d.obb || (d.obb = new Ya(d.localRect, d.transform)),
          h || (h = new Ya(s, u)),
          h.intersect(d.obb))
        ) {
          c = !0;
          break;
        }
      }
    }
    c
      ? (i(l), f && i(f))
      : (l.attr("ignore", a.defaultAttr.ignore),
        f && f.attr("ignore", a.defaultAttr.labelGuideIgnore),
        t.push(a));
  }
}
var zs = null;
function px(r) {
  return (
    zs ||
      (zs = (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (t) {
          return setTimeout(t, 16);
        }
      ).bind(window)),
    zs(r)
  );
}
var Hs = null;
function gx(r) {
  Hs ||
    (Hs = (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      function (t) {
        clearTimeout(t);
      }
    ).bind(window)),
    Hs(r);
}
function yx(r) {
  var t = document.createElement("style");
  return (
    t.styleSheet
      ? (t.styleSheet.cssText = r)
      : t.appendChild(document.createTextNode(r)),
    (document.querySelector("head") || document.body).appendChild(t),
    t
  );
}
function pa(r, t) {
  t === void 0 && (t = {});
  var e = document.createElement(r);
  return (
    Object.keys(t).forEach(function (i) {
      e[i] = t[i];
    }),
    e
  );
}
function Gg(r, t, e) {
  var i = window.getComputedStyle(r, e || null) || { display: "none" };
  return i[t];
}
function Vu(r) {
  if (!document.documentElement.contains(r))
    return { detached: !0, rendered: !1 };
  for (var t = r; t !== document; ) {
    if (Gg(t, "display") === "none") return { detached: !1, rendered: !1 };
    t = t.parentNode;
  }
  return { detached: !1, rendered: !0 };
}
var _x =
    '.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}',
  Wu = 0,
  Ra = null;
function mx(r, t) {
  r.__resize_mutation_handler__ || (r.__resize_mutation_handler__ = Tx.bind(r));
  var e = r.__resize_listeners__;
  if (!e) {
    if (((r.__resize_listeners__ = []), window.ResizeObserver)) {
      var i = r.offsetWidth,
        n = r.offsetHeight,
        a = new ResizeObserver(function () {
          (!r.__resize_observer_triggered__ &&
            ((r.__resize_observer_triggered__ = !0),
            r.offsetWidth === i && r.offsetHeight === n)) ||
            no(r);
        }),
        o = Vu(r),
        s = o.detached,
        u = o.rendered;
      (r.__resize_observer_triggered__ = s === !1 && u === !1),
        (r.__resize_observer__ = a),
        a.observe(r);
    } else if (r.attachEvent && r.addEventListener)
      (r.__resize_legacy_resize_handler__ = function () {
        no(r);
      }),
        r.attachEvent("onresize", r.__resize_legacy_resize_handler__),
        document.addEventListener(
          "DOMSubtreeModified",
          r.__resize_mutation_handler__
        );
    else if (
      (Wu || (Ra = yx(_x)),
      xx(r),
      (r.__resize_rendered__ = Vu(r).rendered),
      window.MutationObserver)
    ) {
      var l = new MutationObserver(r.__resize_mutation_handler__);
      l.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0,
      }),
        (r.__resize_mutation_observer__ = l);
    }
  }
  r.__resize_listeners__.push(t), Wu++;
}
function Sx(r, t) {
  var e = r.__resize_listeners__;
  if (!!e) {
    if ((t && e.splice(e.indexOf(t), 1), !e.length || !t)) {
      if (r.detachEvent && r.removeEventListener) {
        r.detachEvent("onresize", r.__resize_legacy_resize_handler__),
          document.removeEventListener(
            "DOMSubtreeModified",
            r.__resize_mutation_handler__
          );
        return;
      }
      r.__resize_observer__
        ? (r.__resize_observer__.unobserve(r),
          r.__resize_observer__.disconnect(),
          (r.__resize_observer__ = null))
        : (r.__resize_mutation_observer__ &&
            (r.__resize_mutation_observer__.disconnect(),
            (r.__resize_mutation_observer__ = null)),
          r.removeEventListener("scroll", Zl),
          r.removeChild(r.__resize_triggers__.triggers),
          (r.__resize_triggers__ = null)),
        (r.__resize_listeners__ = null);
    }
    !--Wu && Ra && Ra.parentNode.removeChild(Ra);
  }
}
function bx(r) {
  var t = r.__resize_last__,
    e = t.width,
    i = t.height,
    n = r.offsetWidth,
    a = r.offsetHeight;
  return n !== e || a !== i ? { width: n, height: a } : null;
}
function Tx() {
  var r = Vu(this),
    t = r.rendered,
    e = r.detached;
  t !== this.__resize_rendered__ &&
    (!e &&
      this.__resize_triggers__ &&
      (Kl(this), this.addEventListener("scroll", Zl, !0)),
    (this.__resize_rendered__ = t),
    no(this));
}
function Zl() {
  var r = this;
  Kl(this),
    this.__resize_raf__ && gx(this.__resize_raf__),
    (this.__resize_raf__ = px(function () {
      var t = bx(r);
      t && ((r.__resize_last__ = t), no(r));
    }));
}
function no(r) {
  !r ||
    !r.__resize_listeners__ ||
    r.__resize_listeners__.forEach(function (t) {
      t.call(r, r);
    });
}
function xx(r) {
  var t = Gg(r, "position");
  (!t || t === "static") && (r.style.position = "relative"),
    (r.__resize_old_position__ = t),
    (r.__resize_last__ = {});
  var e = pa("div", { className: "resize-triggers" }),
    i = pa("div", { className: "resize-expand-trigger" }),
    n = pa("div"),
    a = pa("div", { className: "resize-contract-trigger" });
  i.appendChild(n),
    e.appendChild(i),
    e.appendChild(a),
    r.appendChild(e),
    (r.__resize_triggers__ = {
      triggers: e,
      expand: i,
      expandChild: n,
      contract: a,
    }),
    Kl(r),
    r.addEventListener("scroll", Zl, !0),
    (r.__resize_last__ = { width: r.offsetWidth, height: r.offsetHeight });
}
function Kl(r) {
  var t = r.__resize_triggers__,
    e = t.expand,
    i = t.expandChild,
    n = t.contract,
    a = n.scrollWidth,
    o = n.scrollHeight,
    s = e.offsetWidth,
    u = e.offsetHeight,
    l = e.scrollWidth,
    f = e.scrollHeight;
  (n.scrollLeft = a),
    (n.scrollTop = o),
    (i.style.width = s + 1 + "px"),
    (i.style.height = u + 1 + "px"),
    (e.scrollLeft = l),
    (e.scrollTop = f);
}
var Ae = function () {
    return (
      (Ae =
        Object.assign ||
        function (r) {
          for (var t, e = 1, i = arguments.length; e < i; e++)
            for (var n in (t = arguments[e]))
              Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
          return r;
        }),
      Ae.apply(this, arguments)
    );
  },
  Cx = [
    "getWidth",
    "getHeight",
    "getDom",
    "getOption",
    "resize",
    "dispatchAction",
    "convertToPixel",
    "convertFromPixel",
    "containPixel",
    "getDataURL",
    "getConnectedDataURL",
    "appendData",
    "clear",
    "isDisposed",
    "dispose",
  ];
function Dx(r) {
  return (
    (t = Object.create(null)),
    Cx.forEach(function (e) {
      t[e] = (function (i) {
        return function () {
          for (var n = [], a = 0; a < arguments.length; a++)
            n[a] = arguments[a];
          if (!r.value) throw new Error("ECharts is not initialized yet.");
          return r.value[i].apply(r.value, n);
        };
      })(e);
    }),
    t
  );
  var t;
}
var Mx = { autoresize: Boolean },
  Px = { loading: Boolean, loadingOptions: Object },
  Hv = [],
  Hi = [];
(function (r, t) {
  if (r && typeof document != "undefined") {
    var e,
      i = t.prepend === !0 ? "prepend" : "append",
      n = t.singleTag === !0,
      a =
        typeof t.container == "string"
          ? document.querySelector(t.container)
          : document.getElementsByTagName("head")[0];
    if (n) {
      var o = Hv.indexOf(a);
      o === -1 && ((o = Hv.push(a) - 1), (Hi[o] = {})),
        (e = Hi[o] && Hi[o][i] ? Hi[o][i] : (Hi[o][i] = s()));
    } else e = s();
    r.charCodeAt(0) === 65279 && (r = r.substring(1)),
      e.styleSheet
        ? (e.styleSheet.cssText += r)
        : e.appendChild(document.createTextNode(r));
  }
  function s() {
    var u = document.createElement("style");
    if ((u.setAttribute("type", "text/css"), t.attributes))
      for (var l = Object.keys(t.attributes), f = 0; f < l.length; f++)
        u.setAttribute(l[f], t.attributes[l[f]]);
    var h = i === "prepend" ? "afterbegin" : "beforeend";
    return a.insertAdjacentElement(h, u), u;
  }
})("x-vue-echarts{display:block;width:100%;height:100%}", {});
var Ax = /^on[^a-z]/,
  Lx = function (r) {
    return Ax.test(r);
  };
rf && rf.config.ignoredElements.push("x-vue-echarts");
var aM = ry({
  name: "echarts",
  props: Ae(
    Ae(
      {
        option: Object,
        theme: { type: [Object, String] },
        initOptions: Object,
        updateOptions: Object,
        group: String,
        manualUpdate: Boolean,
      },
      Mx
    ),
    Px
  ),
  inheritAttrs: !1,
  setup: function (r, t) {
    var e = t.attrs,
      i = t.listeners,
      n = Eo(),
      a = Eo(),
      o = Eo(),
      s = Rn("ecTheme", null),
      u = Rn("ecInitOptions", null),
      l = Rn("ecUpdateOptions", null),
      f = iy(r),
      h = f.autoresize,
      c = f.manualUpdate,
      v = f.loading,
      d = f.loadingOptions,
      y = Hr(function () {
        return o.value || r.option || null;
      }),
      p = Hr(function () {
        return r.theme || On(s) || {};
      }),
      g = Hr(function () {
        return r.initOptions || On(u) || {};
      }),
      _ = Hr(function () {
        return r.updateOptions || On(l) || {};
      }),
      m = Hr(function () {
        return (function (T) {
          var x = {};
          for (var M in T) Lx(M) || (x[M] = T[M]);
          return x;
        })(e);
      });
    function w(T) {
      if (n.value) {
        var x = (a.value = aT(n.value, p.value, g.value));
        r.group && (x.group = r.group);
        var M = i;
        M ||
          ((M = {}),
          Object.keys(e)
            .filter(function (A) {
              return A.indexOf("on") === 0 && A.length > 2;
            })
            .forEach(function (A) {
              var L = A.charAt(2).toLowerCase() + A.slice(3);
              L.substring(L.length - 4) === "Once" &&
                (L = "~".concat(L.substring(0, L.length - 4))),
                (M[L] = e[A]);
            })),
          Object.keys(M).forEach(function (A) {
            var L = M[A];
            if (L) {
              var I = A.toLowerCase();
              I.charAt(0) === "~" && ((I = I.substring(1)), (L.__once__ = !0));
              var R = x;
              if (
                (I.indexOf("zr:") === 0 &&
                  ((R = x.getZr()), (I = I.substring(3))),
                L.__once__)
              ) {
                delete L.__once__;
                var E = L;
                L = function () {
                  for (var G = [], N = 0; N < arguments.length; N++)
                    G[N] = arguments[N];
                  E.apply(void 0, G), R.off(I, L);
                };
              }
              R.on(I, L);
            }
          }),
          h.value
            ? sy(function () {
                x && !x.isDisposed() && x.resize(), P();
              })
            : P();
      }
      function P() {
        var A = T || y.value;
        A && x.setOption(A, _.value);
      }
    }
    function b() {
      a.value && (a.value.dispose(), (a.value = void 0));
    }
    var S = null;
    En(
      c,
      function (T) {
        typeof S == "function" && (S(), (S = null)),
          T ||
            (S = En(
              function () {
                return r.option;
              },
              function (x, M) {
                x &&
                  (a.value
                    ? a.value.setOption(
                        x,
                        Ae(
                          {
                            notMerge:
                              x.value !== (M == null ? void 0 : M.value),
                          },
                          _.value
                        )
                      )
                    : w());
              },
              { deep: !0 }
            ));
      },
      { immediate: !0 }
    ),
      En(
        [p, g],
        function () {
          b(), w();
        },
        { deep: !0 }
      ),
      ef(function () {
        r.group && a.value && (a.value.group = r.group);
      });
    var D = Dx(a);
    return (
      (function (T, x, M) {
        var P = Rn("ecLoadingOptions", {}),
          A = Hr(function () {
            return Ae(Ae({}, On(P)), M == null ? void 0 : M.value);
          });
        ef(function () {
          var L = T.value;
          L && (x.value ? L.showLoading(A.value) : L.hideLoading());
        });
      })(a, v, d),
      (function (T, x, M) {
        var P = null;
        En([M, T, x], function (A, L, I) {
          var R = A[0],
            E = A[1],
            G = A[2];
          R &&
            E &&
            G &&
            ((P = Nl(function () {
              E.resize();
            }, 100)),
            mx(R, P)),
            I(function () {
              P && R && Sx(R, P);
            });
        });
      })(a, h, n),
      ny(function () {
        w();
      }),
      ay(b),
      Ae(
        {
          chart: a,
          root: n,
          setOption: function (T, x) {
            r.manualUpdate && (o.value = T),
              a.value ? a.value.setOption(T, x || {}) : w(T);
          },
          nonEventAttrs: m,
        },
        D
      )
    );
  },
  render: function () {
    var r = Ae({}, this.nonEventAttrs);
    return (
      (r.ref = "root"),
      (r.class = r.class ? ["echarts"].concat(r.class) : "echarts"),
      oy("x-vue-echarts", r)
    );
  },
});
function Gv(r, t, e) {
  var i = Br.createCanvas(),
    n = t.getWidth(),
    a = t.getHeight(),
    o = i.style;
  return (
    o &&
      ((o.position = "absolute"),
      (o.left = "0"),
      (o.top = "0"),
      (o.width = n + "px"),
      (o.height = a + "px"),
      i.setAttribute("data-zr-dom-id", r)),
    (i.width = n * e),
    (i.height = a * e),
    i
  );
}
var Ix = (function (r) {
    Q(t, r);
    function t(e, i, n) {
      var a = r.call(this) || this;
      (a.motionBlur = !1),
        (a.lastFrameAlpha = 0.7),
        (a.dpr = 1),
        (a.virtual = !1),
        (a.config = {}),
        (a.incremental = !1),
        (a.zlevel = 0),
        (a.maxRepaintRectCount = 5),
        (a.__dirty = !0),
        (a.__firstTimePaint = !0),
        (a.__used = !1),
        (a.__drawIndex = 0),
        (a.__startIndex = 0),
        (a.__endIndex = 0),
        (a.__prevStartIndex = null),
        (a.__prevEndIndex = null);
      var o;
      (n = n || Va),
        typeof e == "string"
          ? (o = Gv(e, i, n))
          : F(e) && ((o = e), (e = o.id)),
        (a.id = e),
        (a.dom = o);
      var s = o.style;
      return (
        s &&
          (_c(o),
          (o.onselectstart = function () {
            return !1;
          }),
          (s.padding = "0"),
          (s.margin = "0"),
          (s.borderWidth = "0")),
        (a.painter = i),
        (a.dpr = n),
        a
      );
    }
    return (
      (t.prototype.getElementCount = function () {
        return this.__endIndex - this.__startIndex;
      }),
      (t.prototype.afterBrush = function () {
        (this.__prevStartIndex = this.__startIndex),
          (this.__prevEndIndex = this.__endIndex);
      }),
      (t.prototype.initContext = function () {
        (this.ctx = this.dom.getContext("2d")), (this.ctx.dpr = this.dpr);
      }),
      (t.prototype.setUnpainted = function () {
        this.__firstTimePaint = !0;
      }),
      (t.prototype.createBackBuffer = function () {
        var e = this.dpr;
        (this.domBack = Gv("back-" + this.id, this.painter, e)),
          (this.ctxBack = this.domBack.getContext("2d")),
          e !== 1 && this.ctxBack.scale(e, e);
      }),
      (t.prototype.createRepaintRects = function (e, i, n, a) {
        if (this.__firstTimePaint) return (this.__firstTimePaint = !1), null;
        var o = [],
          s = this.maxRepaintRectCount,
          u = !1,
          l = new j(0, 0, 0, 0);
        function f(_) {
          if (!(!_.isFinite() || _.isZero()))
            if (o.length === 0) {
              var m = new j(0, 0, 0, 0);
              m.copy(_), o.push(m);
            } else {
              for (var w = !1, b = 1 / 0, S = 0, D = 0; D < o.length; ++D) {
                var T = o[D];
                if (T.intersect(_)) {
                  var x = new j(0, 0, 0, 0);
                  x.copy(T), x.union(_), (o[D] = x), (w = !0);
                  break;
                } else if (u) {
                  l.copy(_), l.union(T);
                  var M = _.width * _.height,
                    P = T.width * T.height,
                    A = l.width * l.height,
                    L = A - M - P;
                  L < b && ((b = L), (S = D));
                }
              }
              if ((u && (o[S].union(_), (w = !0)), !w)) {
                var m = new j(0, 0, 0, 0);
                m.copy(_), o.push(m);
              }
              u || (u = o.length >= s);
            }
        }
        for (var h = this.__startIndex; h < this.__endIndex; ++h) {
          var c = e[h];
          if (c) {
            var v = c.shouldBePainted(n, a, !0, !0),
              d =
                c.__isRendered && (c.__dirty & Gt || !v)
                  ? c.getPrevPaintRect()
                  : null;
            d && f(d);
            var y =
              v && (c.__dirty & Gt || !c.__isRendered)
                ? c.getPaintRect()
                : null;
            y && f(y);
          }
        }
        for (var h = this.__prevStartIndex; h < this.__prevEndIndex; ++h) {
          var c = i[h],
            v = c.shouldBePainted(n, a, !0, !0);
          if (c && (!v || !c.__zr) && c.__isRendered) {
            var d = c.getPrevPaintRect();
            d && f(d);
          }
        }
        var p;
        do {
          p = !1;
          for (var h = 0; h < o.length; ) {
            if (o[h].isZero()) {
              o.splice(h, 1);
              continue;
            }
            for (var g = h + 1; g < o.length; )
              o[h].intersect(o[g])
                ? ((p = !0), o[h].union(o[g]), o.splice(g, 1))
                : g++;
            h++;
          }
        } while (p);
        return (this._paintRects = o), o;
      }),
      (t.prototype.debugGetPaintRects = function () {
        return (this._paintRects || []).slice();
      }),
      (t.prototype.resize = function (e, i) {
        var n = this.dpr,
          a = this.dom,
          o = a.style,
          s = this.domBack;
        o && ((o.width = e + "px"), (o.height = i + "px")),
          (a.width = e * n),
          (a.height = i * n),
          s &&
            ((s.width = e * n),
            (s.height = i * n),
            n !== 1 && this.ctxBack.scale(n, n));
      }),
      (t.prototype.clear = function (e, i, n) {
        var a = this.dom,
          o = this.ctx,
          s = a.width,
          u = a.height;
        i = i || this.clearColor;
        var l = this.motionBlur && !e,
          f = this.lastFrameAlpha,
          h = this.dpr,
          c = this;
        l &&
          (this.domBack || this.createBackBuffer(),
          (this.ctxBack.globalCompositeOperation = "copy"),
          this.ctxBack.drawImage(a, 0, 0, s / h, u / h));
        var v = this.domBack;
        function d(y, p, g, _) {
          if ((o.clearRect(y, p, g, _), i && i !== "transparent")) {
            var m = void 0;
            oo(i)
              ? ((m =
                  i.__canvasGradient ||
                  Bu(o, i, { x: 0, y: 0, width: g, height: _ })),
                (i.__canvasGradient = m))
              : xy(i) &&
                (m = Fu(o, i, {
                  dirty: function () {
                    c.setUnpainted(), c.__painter.refresh();
                  },
                })),
              o.save(),
              (o.fillStyle = m || i),
              o.fillRect(y, p, g, _),
              o.restore();
          }
          l &&
            (o.save(),
            (o.globalAlpha = f),
            o.drawImage(v, y, p, g, _),
            o.restore());
        }
        !n || l
          ? d(0, 0, s, u)
          : n.length &&
            C(n, function (y) {
              d(y.x * h, y.y * h, y.width * h, y.height * h);
            });
      }),
      t
    );
  })(Te),
  Gs = Ix,
  Vv = 1e5,
  xr = 314159,
  ga = 0.01,
  Rx = 0.001;
function Ex(r) {
  return r
    ? r.__builtin__
      ? !0
      : !(typeof r.resize != "function" || typeof r.refresh != "function")
    : !1;
}
function Ox(r, t) {
  var e = document.createElement("div");
  return (
    (e.style.cssText =
      [
        "position:relative",
        "width:" + r + "px",
        "height:" + t + "px",
        "padding:0",
        "margin:0",
        "border-width:0",
      ].join(";") + ";"),
    e
  );
}
var kx = (function () {
    function r(t, e, i, n) {
      (this.type = "canvas"),
        (this._zlevelList = []),
        (this._prevDisplayList = []),
        (this._layers = {}),
        (this._layerConfig = {}),
        (this._needsManuallyCompositing = !1),
        (this.type = "canvas");
      var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
      (this._opts = i = O({}, i || {})),
        (this.dpr = i.devicePixelRatio || Va),
        (this._singleCanvas = a),
        (this.root = t);
      var o = t.style;
      o && (_c(t), (t.innerHTML = "")), (this.storage = e);
      var s = this._zlevelList;
      this._prevDisplayList = [];
      var u = this._layers;
      if (a) {
        var f = t,
          h = f.width,
          c = f.height;
        i.width != null && (h = i.width),
          i.height != null && (c = i.height),
          (this.dpr = i.devicePixelRatio || 1),
          (f.width = h * this.dpr),
          (f.height = c * this.dpr),
          (this._width = h),
          (this._height = c);
        var v = new Gs(f, this, this.dpr);
        (v.__builtin__ = !0),
          v.initContext(),
          (u[xr] = v),
          (v.zlevel = xr),
          s.push(xr),
          (this._domRoot = t);
      } else {
        (this._width = oa(t, 0, i)), (this._height = oa(t, 1, i));
        var l = (this._domRoot = Ox(this._width, this._height));
        t.appendChild(l);
      }
    }
    return (
      (r.prototype.getType = function () {
        return "canvas";
      }),
      (r.prototype.isSingleCanvas = function () {
        return this._singleCanvas;
      }),
      (r.prototype.getViewportRoot = function () {
        return this._domRoot;
      }),
      (r.prototype.getViewportRootOffset = function () {
        var t = this.getViewportRoot();
        if (t)
          return { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 };
      }),
      (r.prototype.refresh = function (t) {
        var e = this.storage.getDisplayList(!0),
          i = this._prevDisplayList,
          n = this._zlevelList;
        (this._redrawId = Math.random()),
          this._paintList(e, i, t, this._redrawId);
        for (var a = 0; a < n.length; a++) {
          var o = n[a],
            s = this._layers[o];
          if (!s.__builtin__ && s.refresh) {
            var u = a === 0 ? this._backgroundColor : null;
            s.refresh(u);
          }
        }
        return (
          this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this
        );
      }),
      (r.prototype.refreshHover = function () {
        this._paintHoverList(this.storage.getDisplayList(!1));
      }),
      (r.prototype._paintHoverList = function (t) {
        var e = t.length,
          i = this._hoverlayer;
        if ((i && i.clear(), !!e)) {
          for (
            var n = {
                inHover: !0,
                viewWidth: this._width,
                viewHeight: this._height,
              },
              a,
              o = 0;
            o < e;
            o++
          ) {
            var s = t[o];
            s.__inHover &&
              (i || (i = this._hoverlayer = this.getLayer(Vv)),
              a || ((a = i.ctx), a.save()),
              Lr(a, s, n, o === e - 1));
          }
          a && a.restore();
        }
      }),
      (r.prototype.getHoverLayer = function () {
        return this.getLayer(Vv);
      }),
      (r.prototype.paintOne = function (t, e) {
        rg(t, e);
      }),
      (r.prototype._paintList = function (t, e, i, n) {
        if (this._redrawId === n) {
          (i = i || !1), this._updateLayerStatus(t);
          var a = this._doPaintList(t, e, i),
            o = a.finished,
            s = a.needsRefreshHover;
          if (
            (this._needsManuallyCompositing && this._compositeManually(),
            s && this._paintHoverList(t),
            o)
          )
            this.eachLayer(function (l) {
              l.afterBrush && l.afterBrush();
            });
          else {
            var u = this;
            tu(function () {
              u._paintList(t, e, i, n);
            });
          }
        }
      }),
      (r.prototype._compositeManually = function () {
        var t = this.getLayer(xr).ctx,
          e = this._domRoot.width,
          i = this._domRoot.height;
        t.clearRect(0, 0, e, i),
          this.eachBuiltinLayer(function (n) {
            n.virtual && t.drawImage(n.dom, 0, 0, e, i);
          });
      }),
      (r.prototype._doPaintList = function (t, e, i) {
        for (
          var n = this, a = [], o = this._opts.useDirtyRect, s = 0;
          s < this._zlevelList.length;
          s++
        ) {
          var u = this._zlevelList[s],
            l = this._layers[u];
          l.__builtin__ &&
            l !== this._hoverlayer &&
            (l.__dirty || i) &&
            a.push(l);
        }
        for (
          var f = !0,
            h = !1,
            c = function (y) {
              var p = a[y],
                g = p.ctx,
                _ = o && p.createRepaintRects(t, e, v._width, v._height),
                m = i ? p.__startIndex : p.__drawIndex,
                w = !i && p.incremental && Date.now,
                b = w && Date.now(),
                S = p.zlevel === v._zlevelList[0] ? v._backgroundColor : null;
              if (p.__startIndex === p.__endIndex) p.clear(!1, S, _);
              else if (m === p.__startIndex) {
                var D = t[m];
                (!D.incremental || !D.notClear || i) && p.clear(!1, S, _);
              }
              m === -1 &&
                (console.error("For some unknown reason. drawIndex is -1"),
                (m = p.__startIndex));
              var T,
                x = function (L) {
                  var I = {
                    inHover: !1,
                    allClipped: !1,
                    prevEl: null,
                    viewWidth: n._width,
                    viewHeight: n._height,
                  };
                  for (T = m; T < p.__endIndex; T++) {
                    var R = t[T];
                    if (
                      (R.__inHover && (h = !0),
                      n._doPaintEl(R, p, o, L, I, T === p.__endIndex - 1),
                      w)
                    ) {
                      var E = Date.now() - b;
                      if (E > 15) break;
                    }
                  }
                  I.prevElClipPaths && g.restore();
                };
              if (_)
                if (_.length === 0) T = p.__endIndex;
                else
                  for (var M = v.dpr, P = 0; P < _.length; ++P) {
                    var A = _[P];
                    g.save(),
                      g.beginPath(),
                      g.rect(A.x * M, A.y * M, A.width * M, A.height * M),
                      g.clip(),
                      x(A),
                      g.restore();
                  }
              else g.save(), x(), g.restore();
              (p.__drawIndex = T), p.__drawIndex < p.__endIndex && (f = !1);
            },
            v = this,
            d = 0;
          d < a.length;
          d++
        )
          c(d);
        return (
          W.wxa &&
            C(this._layers, function (y) {
              y && y.ctx && y.ctx.draw && y.ctx.draw();
            }),
          { finished: f, needsRefreshHover: h }
        );
      }),
      (r.prototype._doPaintEl = function (t, e, i, n, a, o) {
        var s = e.ctx;
        if (i) {
          var u = t.getPaintRect();
          (!n || (u && u.intersect(n))) &&
            (Lr(s, t, a, o), t.setPrevPaintRect(u));
        } else Lr(s, t, a, o);
      }),
      (r.prototype.getLayer = function (t, e) {
        this._singleCanvas && !this._needsManuallyCompositing && (t = xr);
        var i = this._layers[t];
        return (
          i ||
            ((i = new Gs("zr_" + t, this, this.dpr)),
            (i.zlevel = t),
            (i.__builtin__ = !0),
            this._layerConfig[t]
              ? ut(i, this._layerConfig[t], !0)
              : this._layerConfig[t - ga] &&
                ut(i, this._layerConfig[t - ga], !0),
            e && (i.virtual = e),
            this.insertLayer(t, i),
            i.initContext()),
          i
        );
      }),
      (r.prototype.insertLayer = function (t, e) {
        var i = this._layers,
          n = this._zlevelList,
          a = n.length,
          o = this._domRoot,
          s = null,
          u = -1;
        if (!i[t] && !!Ex(e)) {
          if (a > 0 && t > n[0]) {
            for (u = 0; u < a - 1 && !(n[u] < t && n[u + 1] > t); u++);
            s = i[n[u]];
          }
          if ((n.splice(u + 1, 0, t), (i[t] = e), !e.virtual))
            if (s) {
              var l = s.dom;
              l.nextSibling
                ? o.insertBefore(e.dom, l.nextSibling)
                : o.appendChild(e.dom);
            } else
              o.firstChild
                ? o.insertBefore(e.dom, o.firstChild)
                : o.appendChild(e.dom);
          e.__painter = this;
        }
      }),
      (r.prototype.eachLayer = function (t, e) {
        for (var i = this._zlevelList, n = 0; n < i.length; n++) {
          var a = i[n];
          t.call(e, this._layers[a], a);
        }
      }),
      (r.prototype.eachBuiltinLayer = function (t, e) {
        for (var i = this._zlevelList, n = 0; n < i.length; n++) {
          var a = i[n],
            o = this._layers[a];
          o.__builtin__ && t.call(e, o, a);
        }
      }),
      (r.prototype.eachOtherLayer = function (t, e) {
        for (var i = this._zlevelList, n = 0; n < i.length; n++) {
          var a = i[n],
            o = this._layers[a];
          o.__builtin__ || t.call(e, o, a);
        }
      }),
      (r.prototype.getLayers = function () {
        return this._layers;
      }),
      (r.prototype._updateLayerStatus = function (t) {
        this.eachBuiltinLayer(function (h, c) {
          h.__dirty = h.__used = !1;
        });
        function e(h) {
          a && (a.__endIndex !== h && (a.__dirty = !0), (a.__endIndex = h));
        }
        if (this._singleCanvas)
          for (var i = 1; i < t.length; i++) {
            var n = t[i];
            if (n.zlevel !== t[i - 1].zlevel || n.incremental) {
              this._needsManuallyCompositing = !0;
              break;
            }
          }
        var a = null,
          o = 0,
          s,
          u;
        for (u = 0; u < t.length; u++) {
          var n = t[u],
            l = n.zlevel,
            f = void 0;
          s !== l && ((s = l), (o = 0)),
            n.incremental
              ? ((f = this.getLayer(l + Rx, this._needsManuallyCompositing)),
                (f.incremental = !0),
                (o = 1))
              : (f = this.getLayer(
                  l + (o > 0 ? ga : 0),
                  this._needsManuallyCompositing
                )),
            f.__builtin__ ||
              ju("ZLevel " + l + " has been used by unkown layer " + f.id),
            f !== a &&
              ((f.__used = !0),
              f.__startIndex !== u && (f.__dirty = !0),
              (f.__startIndex = u),
              f.incremental ? (f.__drawIndex = -1) : (f.__drawIndex = u),
              e(u),
              (a = f)),
            n.__dirty & Gt &&
              !n.__inHover &&
              ((f.__dirty = !0),
              f.incremental && f.__drawIndex < 0 && (f.__drawIndex = u));
        }
        e(u),
          this.eachBuiltinLayer(function (h, c) {
            !h.__used &&
              h.getElementCount() > 0 &&
              ((h.__dirty = !0),
              (h.__startIndex = h.__endIndex = h.__drawIndex = 0)),
              h.__dirty &&
                h.__drawIndex < 0 &&
                (h.__drawIndex = h.__startIndex);
          });
      }),
      (r.prototype.clear = function () {
        return this.eachBuiltinLayer(this._clearLayer), this;
      }),
      (r.prototype._clearLayer = function (t) {
        t.clear();
      }),
      (r.prototype.setBackgroundColor = function (t) {
        (this._backgroundColor = t),
          C(this._layers, function (e) {
            e.setUnpainted();
          });
      }),
      (r.prototype.configLayer = function (t, e) {
        if (e) {
          var i = this._layerConfig;
          i[t] ? ut(i[t], e, !0) : (i[t] = e);
          for (var n = 0; n < this._zlevelList.length; n++) {
            var a = this._zlevelList[n];
            if (a === t || a === t + ga) {
              var o = this._layers[a];
              ut(o, i[t], !0);
            }
          }
        }
      }),
      (r.prototype.delLayer = function (t) {
        var e = this._layers,
          i = this._zlevelList,
          n = e[t];
        !n ||
          (n.dom.parentNode.removeChild(n.dom),
          delete e[t],
          i.splice(et(i, t), 1));
      }),
      (r.prototype.resize = function (t, e) {
        if (this._domRoot.style) {
          var i = this._domRoot;
          i.style.display = "none";
          var n = this._opts,
            a = this.root;
          if (
            (t != null && (n.width = t),
            e != null && (n.height = e),
            (t = oa(a, 0, n)),
            (e = oa(a, 1, n)),
            (i.style.display = ""),
            this._width !== t || e !== this._height)
          ) {
            (i.style.width = t + "px"), (i.style.height = e + "px");
            for (var o in this._layers)
              this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
            this.refresh(!0);
          }
          (this._width = t), (this._height = e);
        } else {
          if (t == null || e == null) return;
          (this._width = t), (this._height = e), this.getLayer(xr).resize(t, e);
        }
        return this;
      }),
      (r.prototype.clearLayer = function (t) {
        var e = this._layers[t];
        e && e.clear();
      }),
      (r.prototype.dispose = function () {
        (this.root.innerHTML = ""),
          (this.root = this.storage = this._domRoot = this._layers = null);
      }),
      (r.prototype.getRenderedCanvas = function (t) {
        if (((t = t || {}), this._singleCanvas && !this._compositeManually))
          return this._layers[xr].dom;
        var e = new Gs("image", this, t.pixelRatio || this.dpr);
        e.initContext(),
          e.clear(!1, t.backgroundColor || this._backgroundColor);
        var i = e.ctx;
        if (t.pixelRatio <= this.dpr) {
          this.refresh();
          var n = e.dom.width,
            a = e.dom.height;
          this.eachLayer(function (h) {
            h.__builtin__
              ? i.drawImage(h.dom, 0, 0, n, a)
              : h.renderToCanvas &&
                (i.save(), h.renderToCanvas(i), i.restore());
          });
        } else
          for (
            var o = {
                inHover: !1,
                viewWidth: this._width,
                viewHeight: this._height,
              },
              s = this.storage.getDisplayList(!0),
              u = 0,
              l = s.length;
            u < l;
            u++
          ) {
            var f = s[u];
            Lr(i, f, o, u === l - 1);
          }
        return e.dom;
      }),
      (r.prototype.getWidth = function () {
        return this._width;
      }),
      (r.prototype.getHeight = function () {
        return this._height;
      }),
      r
    );
  })(),
  Bx = kx;
function oM(r) {
  r.registerPainter("canvas", Bx);
}
function Wv(r, t, e) {
  e = e || {};
  var i = r.coordinateSystem,
    n = t.axis,
    a = {},
    o = n.getAxesOnZeroOf()[0],
    s = n.position,
    u = o ? "onZero" : s,
    l = n.dim,
    f = i.getRect(),
    h = [f.x, f.x + f.width, f.y, f.y + f.height],
    c = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
    v = t.get("offset") || 0,
    d = l === "x" ? [h[2] - v, h[3] + v] : [h[0] - v, h[1] + v];
  if (o) {
    var y = o.toGlobalCoord(o.dataToCoord(0));
    d[c.onZero] = Math.max(Math.min(y, d[1]), d[0]);
  }
  (a.position = [l === "y" ? d[c[u]] : h[0], l === "x" ? d[c[u]] : h[3]]),
    (a.rotation = (Math.PI / 2) * (l === "x" ? 0 : 1));
  var p = { top: -1, bottom: 1, left: -1, right: 1 };
  (a.labelDirection = a.tickDirection = a.nameDirection = p[s]),
    (a.labelOffset = o ? d[c[s]] - d[c.onZero] : 0),
    t.get(["axisTick", "inside"]) && (a.tickDirection = -a.tickDirection),
    ln(e.labelInside, t.get(["axisLabel", "inside"])) &&
      (a.labelDirection = -a.labelDirection);
  var g = t.get(["axisLabel", "rotate"]);
  return (a.labelRotate = u === "top" ? -g : g), (a.z2 = 1), a;
}
function sM(r) {
  return r.get("coordinateSystem") === "cartesian2d";
}
function uM(r) {
  var t = { xAxisModel: null, yAxisModel: null };
  return (
    C(t, function (e, i) {
      var n = i.replace(/Model$/, ""),
        a = r.getReferringComponents(n, lo).models[0];
      t[i] = a;
    }),
    t
  );
}
var Xe = Math.PI,
  Er = (function () {
    function r(t, e) {
      (this.group = new be()),
        (this.opt = e),
        (this.axisModel = t),
        nt(e, {
          labelOffset: 0,
          nameDirection: 1,
          tickDirection: 1,
          labelDirection: 1,
          silent: !0,
          handleAutoShown: function () {
            return !0;
          },
        });
      var i = new be({
        x: e.position[0],
        y: e.position[1],
        rotation: e.rotation,
      });
      i.updateTransform(), (this._transformGroup = i);
    }
    return (
      (r.prototype.hasBuilder = function (t) {
        return !!Uv[t];
      }),
      (r.prototype.add = function (t) {
        Uv[t](this.opt, this.axisModel, this.group, this._transformGroup);
      }),
      (r.prototype.getGroup = function () {
        return this.group;
      }),
      (r.innerTextLayout = function (t, e, i) {
        var n = $c(e - t),
          a,
          o;
        return (
          Wa(n)
            ? ((o = i > 0 ? "top" : "bottom"), (a = "center"))
            : Wa(n - Xe)
            ? ((o = i > 0 ? "bottom" : "top"), (a = "center"))
            : ((o = "middle"),
              n > 0 && n < Xe
                ? (a = i > 0 ? "right" : "left")
                : (a = i > 0 ? "left" : "right")),
          { rotation: n, textAlign: a, textVerticalAlign: o }
        );
      }),
      (r.makeAxisEventDataBase = function (t) {
        var e = { componentType: t.mainType, componentIndex: t.componentIndex };
        return (e[t.mainType + "Index"] = t.componentIndex), e;
      }),
      (r.isLabelSilent = function (t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || (e && e.show));
      }),
      r
    );
  })(),
  Uv = {
    axisLine: function (r, t, e, i) {
      var n = t.get(["axisLine", "show"]);
      if (
        (n === "auto" &&
          r.handleAutoShown &&
          (n = r.handleAutoShown("axisLine")),
        !!n)
      ) {
        var a = t.axis.getExtent(),
          o = i.transform,
          s = [a[0], 0],
          u = [a[1], 0];
        o && (me(s, s, o), me(u, u, o));
        var l = O(
            { lineCap: "round" },
            t.getModel(["axisLine", "lineStyle"]).getLineStyle()
          ),
          f = new Ln({
            subPixelOptimize: !0,
            shape: { x1: s[0], y1: s[1], x2: u[0], y2: u[1] },
            style: l,
            strokeContainThreshold: r.strokeContainThreshold || 5,
            silent: !0,
            z2: 1,
          });
        (f.anid = "line"), e.add(f);
        var h = t.get(["axisLine", "symbol"]);
        if (h != null) {
          var c = t.get(["axisLine", "symbolSize"]);
          B(h) && (h = [h, h]), (B(c) || ht(c)) && (c = [c, c]);
          var v = bb(t.get(["axisLine", "symbolOffset"]) || 0, c),
            d = c[0],
            y = c[1];
          C(
            [
              { rotate: r.rotation + Math.PI / 2, offset: v[0], r: 0 },
              {
                rotate: r.rotation - Math.PI / 2,
                offset: v[1],
                r: Math.sqrt(
                  (s[0] - u[0]) * (s[0] - u[0]) + (s[1] - u[1]) * (s[1] - u[1])
                ),
              },
            ],
            function (p, g) {
              if (h[g] !== "none" && h[g] != null) {
                var _ = zl(h[g], -d / 2, -y / 2, d, y, l.stroke, !0),
                  m = p.r + p.offset;
                _.attr({
                  rotation: p.rotate,
                  x: s[0] + m * Math.cos(r.rotation),
                  y: s[1] - m * Math.sin(r.rotation),
                  silent: !0,
                  z2: 11,
                }),
                  e.add(_);
              }
            }
          );
        }
      }
    },
    axisTickLabel: function (r, t, e, i) {
      var n = zx(e, i, t, r),
        a = Gx(e, i, t, r);
      if (
        (Nx(t, a, n),
        Hx(e, i, t, r.tickDirection),
        t.get(["axisLabel", "hideOverlap"]))
      ) {
        var o = cx(
          U(a, function (s) {
            return {
              label: s,
              priority: s.z2,
              defaultAttr: { ignore: s.ignore },
            };
          })
        );
        dx(o);
      }
    },
    axisName: function (r, t, e, i) {
      var n = ln(r.axisName, t.get("name"));
      if (!!n) {
        var a = t.get("nameLocation"),
          o = r.nameDirection,
          s = t.getModel("nameTextStyle"),
          u = t.get("nameGap") || 0,
          l = t.axis.getExtent(),
          f = l[0] > l[1] ? -1 : 1,
          h = [
            a === "start"
              ? l[0] - f * u
              : a === "end"
              ? l[1] + f * u
              : (l[0] + l[1]) / 2,
            $v(a) ? r.labelOffset + o * u : 0,
          ],
          c,
          v = t.get("nameRotate");
        v != null && (v = (v * Xe) / 180);
        var d;
        $v(a)
          ? (c = Er.innerTextLayout(r.rotation, v != null ? v : r.rotation, o))
          : ((c = Fx(r.rotation, a, v || 0, l)),
            (d = r.axisNameAvailableWidth),
            d != null &&
              ((d = Math.abs(d / Math.sin(c.rotation))),
              !isFinite(d) && (d = null)));
        var y = s.getFont(),
          p = t.get("nameTruncate", !0) || {},
          g = p.ellipsis,
          _ = ln(r.nameTruncateMaxWidth, p.maxWidth, d),
          m = new Bt({
            x: h[0],
            y: h[1],
            rotation: c.rotation,
            silent: Er.isLabelSilent(t),
            style: Je(s, {
              text: n,
              font: y,
              overflow: "truncate",
              width: _,
              ellipsis: g,
              fill:
                s.getTextColor() || t.get(["axisLine", "lineStyle", "color"]),
              align: s.get("align") || c.textAlign,
              verticalAlign: s.get("verticalAlign") || c.textVerticalAlign,
            }),
            z2: 1,
          });
        if (
          (bl({ el: m, componentModel: t, itemName: n }),
          (m.__fullText = n),
          (m.anid = "name"),
          t.get("triggerEvent"))
        ) {
          var w = Er.makeAxisEventDataBase(t);
          (w.targetType = "axisName"), (w.name = n), (lt(m).eventData = w);
        }
        i.add(m), m.updateTransform(), e.add(m), m.decomposeTransform();
      }
    },
  };
function Fx(r, t, e, i) {
  var n = $c(e - r),
    a,
    o,
    s = i[0] > i[1],
    u = (t === "start" && !s) || (t !== "start" && s);
  return (
    Wa(n - Xe / 2)
      ? ((o = u ? "bottom" : "top"), (a = "center"))
      : Wa(n - Xe * 1.5)
      ? ((o = u ? "top" : "bottom"), (a = "center"))
      : ((o = "middle"),
        n < Xe * 1.5 && n > Xe / 2
          ? (a = u ? "left" : "right")
          : (a = u ? "right" : "left")),
    { rotation: n, textAlign: a, textVerticalAlign: o }
  );
}
function Nx(r, t, e) {
  if (!fx(r.axis)) {
    var i = r.get(["axisLabel", "showMinLabel"]),
      n = r.get(["axisLabel", "showMaxLabel"]);
    (t = t || []), (e = e || []);
    var a = t[0],
      o = t[1],
      s = t[t.length - 1],
      u = t[t.length - 2],
      l = e[0],
      f = e[1],
      h = e[e.length - 1],
      c = e[e.length - 2];
    i === !1
      ? (Xt(a), Xt(l))
      : Yv(a, o) && (i ? (Xt(o), Xt(f)) : (Xt(a), Xt(l))),
      n === !1
        ? (Xt(s), Xt(h))
        : Yv(u, s) && (n ? (Xt(u), Xt(c)) : (Xt(s), Xt(h)));
  }
}
function Xt(r) {
  r && (r.ignore = !0);
}
function Yv(r, t) {
  var e = r && r.getBoundingRect().clone(),
    i = t && t.getBoundingRect().clone();
  if (!(!e || !i)) {
    var n = il([]);
    return (
      nl(n, n, -r.rotation),
      e.applyTransform(ui([], n, r.getLocalTransform())),
      i.applyTransform(ui([], n, t.getLocalTransform())),
      e.intersect(i)
    );
  }
}
function $v(r) {
  return r === "middle" || r === "center";
}
function Vg(r, t, e, i, n) {
  for (var a = [], o = [], s = [], u = 0; u < r.length; u++) {
    var l = r[u].coord;
    (o[0] = l),
      (o[1] = 0),
      (s[0] = l),
      (s[1] = e),
      t && (me(o, o, t), me(s, s, t));
    var f = new Ln({
      subPixelOptimize: !0,
      shape: { x1: o[0], y1: o[1], x2: s[0], y2: s[1] },
      style: i,
      z2: 2,
      autoBatch: !0,
      silent: !0,
    });
    (f.anid = n + "_" + r[u].tickValue), a.push(f);
  }
  return a;
}
function zx(r, t, e, i) {
  var n = e.axis,
    a = e.getModel("axisTick"),
    o = a.get("show");
  if (
    (o === "auto" && i.handleAutoShown && (o = i.handleAutoShown("axisTick")),
    !(!o || n.scale.isBlank()))
  ) {
    for (
      var s = a.getModel("lineStyle"),
        u = i.tickDirection * a.get("length"),
        l = n.getTicksCoords(),
        f = Vg(
          l,
          t.transform,
          u,
          nt(s.getLineStyle(), {
            stroke: e.get(["axisLine", "lineStyle", "color"]),
          }),
          "ticks"
        ),
        h = 0;
      h < f.length;
      h++
    )
      r.add(f[h]);
    return f;
  }
}
function Hx(r, t, e, i) {
  var n = e.axis,
    a = e.getModel("minorTick");
  if (!(!a.get("show") || n.scale.isBlank())) {
    var o = n.getMinorTicksCoords();
    if (!!o.length)
      for (
        var s = a.getModel("lineStyle"),
          u = i * a.get("length"),
          l = nt(
            s.getLineStyle(),
            nt(e.getModel("axisTick").getLineStyle(), {
              stroke: e.get(["axisLine", "lineStyle", "color"]),
            })
          ),
          f = 0;
        f < o.length;
        f++
      )
        for (
          var h = Vg(o[f], t.transform, u, l, "minorticks_" + f), c = 0;
          c < h.length;
          c++
        )
          r.add(h[c]);
  }
}
function Gx(r, t, e, i) {
  var n = e.axis,
    a = ln(i.axisLabelShow, e.get(["axisLabel", "show"]));
  if (!(!a || n.scale.isBlank())) {
    var o = e.getModel("axisLabel"),
      s = o.get("margin"),
      u = n.getViewLabels(),
      l = ((ln(i.labelRotate, o.get("rotate")) || 0) * Xe) / 180,
      f = Er.innerTextLayout(i.rotation, l, i.labelDirection),
      h = e.getCategories && e.getCategories(!0),
      c = [],
      v = Er.isLabelSilent(e),
      d = e.get("triggerEvent");
    return (
      C(u, function (y, p) {
        var g =
            n.scale.type === "ordinal"
              ? n.scale.getRawOrdinalNumber(y.tickValue)
              : y.tickValue,
          _ = y.formattedLabel,
          m = y.rawLabel,
          w = o;
        if (h && h[g]) {
          var b = h[g];
          F(b) && b.textStyle && (w = new Tt(b.textStyle, o, e.ecModel));
        }
        var S = w.getTextColor() || e.get(["axisLine", "lineStyle", "color"]),
          D = n.dataToCoord(g),
          T = new Bt({
            x: D,
            y: i.labelOffset + i.labelDirection * s,
            rotation: f.rotation,
            silent: v,
            z2: 10 + (y.level || 0),
            style: Je(w, {
              text: _,
              align: w.getShallow("align", !0) || f.textAlign,
              verticalAlign:
                w.getShallow("verticalAlign", !0) ||
                w.getShallow("baseline", !0) ||
                f.textVerticalAlign,
              fill: q(S)
                ? S(
                    n.type === "category" ? m : n.type === "value" ? g + "" : g,
                    p
                  )
                : S,
            }),
          });
        if (((T.anid = "label_" + g), d)) {
          var x = Er.makeAxisEventDataBase(e);
          (x.targetType = "axisLabel"),
            (x.value = m),
            (x.tickIndex = p),
            n.type === "category" && (x.dataIndex = g),
            (lt(T).eventData = x);
        }
        t.add(T),
          T.updateTransform(),
          c.push(T),
          r.add(T),
          T.decomposeTransform();
      }),
      c
    );
  }
}
var Vx = Er;
function Wx(r, t) {
  var e = {
    axesInfo: {},
    seriesInvolved: !1,
    coordSysAxesInfo: {},
    coordSysMap: {},
  };
  return Ux(e, r, t), e.seriesInvolved && $x(e, r), e;
}
function Ux(r, t, e) {
  var i = t.getComponent("tooltip"),
    n = t.getComponent("axisPointer"),
    a = n.get("link", !0) || [],
    o = [];
  C(e.getCoordinateSystems(), function (s) {
    if (!s.axisPointerEnabled) return;
    var u = xn(s.model),
      l = (r.coordSysAxesInfo[u] = {});
    r.coordSysMap[u] = s;
    var f = s.model,
      h = f.getModel("tooltip", i);
    if (
      (C(s.getAxes(), gt(y, !1, null)), s.getTooltipAxes && i && h.get("show"))
    ) {
      var c = h.get("trigger") === "axis",
        v = h.get(["axisPointer", "type"]) === "cross",
        d = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
      (c || v) && C(d.baseAxes, gt(y, v ? "cross" : !0, c)),
        v && C(d.otherAxes, gt(y, "cross", !1));
    }
    function y(p, g, _) {
      var m = _.model.getModel("axisPointer", n),
        w = m.get("show");
      if (!(!w || (w === "auto" && !p && !Uu(m)))) {
        g == null && (g = m.get("triggerTooltip")),
          (m = p ? Yx(_, h, n, t, p, g) : m);
        var b = m.get("snap"),
          S = xn(_.model),
          D = g || b || _.type === "category",
          T = (r.axesInfo[S] = {
            key: S,
            axis: _,
            coordSys: s,
            axisPointerModel: m,
            triggerTooltip: g,
            involveSeries: D,
            snap: b,
            useHandle: Uu(m),
            seriesModels: [],
            linkGroup: null,
          });
        (l[S] = T), (r.seriesInvolved = r.seriesInvolved || D);
        var x = Xx(a, _);
        if (x != null) {
          var M = o[x] || (o[x] = { axesInfo: {} });
          (M.axesInfo[S] = T), (M.mapper = a[x].mapper), (T.linkGroup = M);
        }
      }
    }
  });
}
function Yx(r, t, e, i, n, a) {
  var o = t.getModel("axisPointer"),
    s = [
      "type",
      "snap",
      "lineStyle",
      "shadowStyle",
      "label",
      "animation",
      "animationDurationUpdate",
      "animationEasingUpdate",
      "z",
    ],
    u = {};
  C(s, function (c) {
    u[c] = X(o.get(c));
  }),
    (u.snap = r.type !== "category" && !!a),
    o.get("type") === "cross" && (u.type = "line");
  var l = u.label || (u.label = {});
  if ((l.show == null && (l.show = !1), n === "cross")) {
    var f = o.get(["label", "show"]);
    if (((l.show = f != null ? f : !0), !a)) {
      var h = (u.lineStyle = o.get("crossStyle"));
      h && nt(l, h.textStyle);
    }
  }
  return r.model.getModel("axisPointer", new Tt(u, e, i));
}
function $x(r, t) {
  t.eachSeries(function (e) {
    var i = e.coordinateSystem,
      n = e.get(["tooltip", "trigger"], !0),
      a = e.get(["tooltip", "show"], !0);
    !i ||
      n === "none" ||
      n === !1 ||
      n === "item" ||
      a === !1 ||
      e.get(["axisPointer", "show"], !0) === !1 ||
      C(r.coordSysAxesInfo[xn(i.model)], function (o) {
        var s = o.axis;
        i.getAxis(s.dim) === s &&
          (o.seriesModels.push(e),
          o.seriesDataCount == null && (o.seriesDataCount = 0),
          (o.seriesDataCount += e.getData().count()));
      });
  });
}
function Xx(r, t) {
  for (var e = t.model, i = t.dim, n = 0; n < r.length; n++) {
    var a = r[n] || {};
    if (
      Vs(a[i + "AxisId"], e.id) ||
      Vs(a[i + "AxisIndex"], e.componentIndex) ||
      Vs(a[i + "AxisName"], e.name)
    )
      return n;
  }
}
function Vs(r, t) {
  return r === "all" || (k(r) && et(r, t) >= 0) || r === t;
}
function qx(r) {
  var t = Ql(r);
  if (!!t) {
    var e = t.axisPointerModel,
      i = t.axis.scale,
      n = e.option,
      a = e.get("status"),
      o = e.get("value");
    o != null && (o = i.parse(o));
    var s = Uu(e);
    a == null && (n.status = s ? "show" : "hide");
    var u = i.getExtent().slice();
    u[0] > u[1] && u.reverse(),
      (o == null || o > u[1]) && (o = u[1]),
      o < u[0] && (o = u[0]),
      (n.value = o),
      s && (n.status = t.axis.scale.isBlank() ? "hide" : "show");
  }
}
function Ql(r) {
  var t = (r.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return t && t.axesInfo[xn(r)];
}
function Zx(r) {
  var t = Ql(r);
  return t && t.axisPointerModel;
}
function Uu(r) {
  return !!r.get(["handle", "show"]);
}
function xn(r) {
  return r.type + "||" + r.id;
}
var Xv = {},
  Kx = (function (r) {
    rt(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = t.type), e;
    }
    return (
      (t.prototype.render = function (e, i, n, a) {
        this.axisPointerClass && qx(e),
          r.prototype.render.apply(this, arguments),
          this._doUpdateAxisPointerClass(e, n, !0);
      }),
      (t.prototype.updateAxisPointer = function (e, i, n, a) {
        this._doUpdateAxisPointerClass(e, n, !1);
      }),
      (t.prototype.remove = function (e, i) {
        var n = this._axisPointer;
        n && n.remove(i);
      }),
      (t.prototype.dispose = function (e, i) {
        this._disposeAxisPointer(i), r.prototype.dispose.apply(this, arguments);
      }),
      (t.prototype._doUpdateAxisPointerClass = function (e, i, n) {
        var a = t.getAxisPointerClass(this.axisPointerClass);
        if (!!a) {
          var o = Zx(e);
          o
            ? (this._axisPointer || (this._axisPointer = new a())).render(
                e,
                o,
                i,
                n
              )
            : this._disposeAxisPointer(i);
        }
      }),
      (t.prototype._disposeAxisPointer = function (e) {
        this._axisPointer && this._axisPointer.dispose(e),
          (this._axisPointer = null);
      }),
      (t.registerAxisPointerClass = function (e, i) {
        Xv[e] = i;
      }),
      (t.getAxisPointerClass = function (e) {
        return e && Xv[e];
      }),
      (t.type = "axis"),
      t
    );
  })(Ee),
  Qx = Kx,
  Dr = yt(),
  qv = X,
  Ws = st,
  Jx = (function () {
    function r() {
      (this._dragging = !1), (this.animationThreshold = 15);
    }
    return (
      (r.prototype.render = function (t, e, i, n) {
        var a = e.get("value"),
          o = e.get("status");
        if (
          ((this._axisModel = t),
          (this._axisPointerModel = e),
          (this._api = i),
          !(!n && this._lastValue === a && this._lastStatus === o))
        ) {
          (this._lastValue = a), (this._lastStatus = o);
          var s = this._group,
            u = this._handle;
          if (!o || o === "hide") {
            s && s.hide(), u && u.hide();
            return;
          }
          s && s.show(), u && u.show();
          var l = {};
          this.makeElOption(l, a, t, e, i);
          var f = l.graphicKey;
          f !== this._lastGraphicKey && this.clear(i),
            (this._lastGraphicKey = f);
          var h = (this._moveAnimation = this.determineAnimation(t, e));
          if (!s)
            (s = this._group = new be()),
              this.createPointerEl(s, l, t, e),
              this.createLabelEl(s, l, t, e),
              i.getZr().add(s);
          else {
            var c = gt(Zv, e, h);
            this.updatePointerEl(s, l, c), this.updateLabelEl(s, l, c, e);
          }
          Qv(s, e, !0), this._renderHandle(a);
        }
      }),
      (r.prototype.remove = function (t) {
        this.clear(t);
      }),
      (r.prototype.dispose = function (t) {
        this.clear(t);
      }),
      (r.prototype.determineAnimation = function (t, e) {
        var i = e.get("animation"),
          n = t.axis,
          a = n.type === "category",
          o = e.get("snap");
        if (!o && !a) return !1;
        if (i === "auto" || i == null) {
          var s = this.animationThreshold;
          if (a && n.getBandWidth() > s) return !0;
          if (o) {
            var u = Ql(t).seriesDataCount,
              l = n.getExtent();
            return Math.abs(l[0] - l[1]) / u > s;
          }
          return !1;
        }
        return i === !0;
      }),
      (r.prototype.makeElOption = function (t, e, i, n, a) {}),
      (r.prototype.createPointerEl = function (t, e, i, n) {
        var a = e.pointer;
        if (a) {
          var o = (Dr(t).pointerEl = new U1[a.type](qv(e.pointer)));
          t.add(o);
        }
      }),
      (r.prototype.createLabelEl = function (t, e, i, n) {
        if (e.label) {
          var a = (Dr(t).labelEl = new Bt(qv(e.label)));
          t.add(a), Kv(a, n);
        }
      }),
      (r.prototype.updatePointerEl = function (t, e, i) {
        var n = Dr(t).pointerEl;
        n &&
          e.pointer &&
          (n.setStyle(e.pointer.style), i(n, { shape: e.pointer.shape }));
      }),
      (r.prototype.updateLabelEl = function (t, e, i, n) {
        var a = Dr(t).labelEl;
        a &&
          (a.setStyle(e.label.style),
          i(a, { x: e.label.x, y: e.label.y }),
          Kv(a, n));
      }),
      (r.prototype._renderHandle = function (t) {
        if (!(this._dragging || !this.updateHandleTransform)) {
          var e = this._axisPointerModel,
            i = this._api.getZr(),
            n = this._handle,
            a = e.getModel("handle"),
            o = e.get("status");
          if (!a.get("show") || !o || o === "hide") {
            n && i.remove(n), (this._handle = null);
            return;
          }
          var s;
          this._handle ||
            ((s = !0),
            (n = this._handle =
              Sl(a.get("icon"), {
                cursor: "move",
                draggable: !0,
                onmousemove: function (l) {
                  wc(l.event);
                },
                onmousedown: Ws(this._onHandleDragMove, this, 0, 0),
                drift: Ws(this._onHandleDragMove, this),
                ondragend: Ws(this._onHandleDragEnd, this),
              })),
            i.add(n)),
            Qv(n, e, !1),
            n.setStyle(
              a.getItemStyle(null, [
                "color",
                "borderColor",
                "borderWidth",
                "opacity",
                "shadowColor",
                "shadowBlur",
                "shadowOffsetX",
                "shadowOffsetY",
              ])
            );
          var u = a.get("size");
          k(u) || (u = [u, u]),
            (n.scaleX = u[0] / 2),
            (n.scaleY = u[1] / 2),
            Yp(
              this,
              "_doDispatchAxisPointer",
              a.get("throttle") || 0,
              "fixRate"
            ),
            this._moveHandleToValue(t, s);
        }
      }),
      (r.prototype._moveHandleToValue = function (t, e) {
        Zv(
          this._axisPointerModel,
          !e && this._moveAnimation,
          this._handle,
          Us(
            this.getHandleTransform(t, this._axisModel, this._axisPointerModel)
          )
        );
      }),
      (r.prototype._onHandleDragMove = function (t, e) {
        var i = this._handle;
        if (!!i) {
          this._dragging = !0;
          var n = this.updateHandleTransform(
            Us(i),
            [t, e],
            this._axisModel,
            this._axisPointerModel
          );
          (this._payloadInfo = n),
            i.stopAnimation(),
            i.attr(Us(n)),
            (Dr(i).lastProp = null),
            this._doDispatchAxisPointer();
        }
      }),
      (r.prototype._doDispatchAxisPointer = function () {
        var t = this._handle;
        if (!!t) {
          var e = this._payloadInfo,
            i = this._axisModel;
          this._api.dispatchAction({
            type: "updateAxisPointer",
            x: e.cursorPoint[0],
            y: e.cursorPoint[1],
            tooltipOption: e.tooltipOption,
            axesInfo: [{ axisDim: i.axis.dim, axisIndex: i.componentIndex }],
          });
        }
      }),
      (r.prototype._onHandleDragEnd = function () {
        this._dragging = !1;
        var t = this._handle;
        if (!!t) {
          var e = this._axisPointerModel.get("value");
          this._moveHandleToValue(e),
            this._api.dispatchAction({ type: "hideTip" });
        }
      }),
      (r.prototype.clear = function (t) {
        (this._lastValue = null), (this._lastStatus = null);
        var e = t.getZr(),
          i = this._group,
          n = this._handle;
        e &&
          i &&
          ((this._lastGraphicKey = null),
          i && e.remove(i),
          n && e.remove(n),
          (this._group = null),
          (this._handle = null),
          (this._payloadInfo = null)),
          Eu(this, "_doDispatchAxisPointer");
      }),
      (r.prototype.doClear = function () {}),
      (r.prototype.buildLabel = function (t, e, i) {
        return (
          (i = i || 0), { x: t[i], y: t[1 - i], width: e[i], height: e[1 - i] }
        );
      }),
      r
    );
  })();
function Zv(r, t, e, i) {
  Wg(Dr(e).lastProp, i) ||
    ((Dr(e).lastProp = i), t ? In(e, i, r) : (e.stopAnimation(), e.attr(i)));
}
function Wg(r, t) {
  if (F(r) && F(t)) {
    var e = !0;
    return (
      C(t, function (i, n) {
        e = e && Wg(r[n], i);
      }),
      !!e
    );
  } else return r === t;
}
function Kv(r, t) {
  r[t.get(["label", "show"]) ? "show" : "hide"]();
}
function Us(r) {
  return { x: r.x || 0, y: r.y || 0, rotation: r.rotation || 0 };
}
function Qv(r, t, e) {
  var i = t.get("z"),
    n = t.get("zlevel");
  r &&
    r.traverse(function (a) {
      a.type !== "group" &&
        (i != null && (a.z = i), n != null && (a.zlevel = n), (a.silent = e));
    });
}
var jx = Jx;
function tC(r) {
  var t = r.get("type"),
    e = r.getModel(t + "Style"),
    i;
  return (
    t === "line"
      ? ((i = e.getLineStyle()), (i.fill = null))
      : t === "shadow" && ((i = e.getAreaStyle()), (i.stroke = null)),
    i
  );
}
function eC(r, t, e, i, n) {
  var a = e.get("value"),
    o = Ug(a, t.axis, t.ecModel, e.get("seriesDataIndices"), {
      precision: e.get(["label", "precision"]),
      formatter: e.get(["label", "formatter"]),
    }),
    s = e.getModel("label"),
    u = xo(s.get("padding") || 0),
    l = s.getFont(),
    f = zc(o, l),
    h = n.position,
    c = f.width + u[1] + u[3],
    v = f.height + u[0] + u[2],
    d = n.align;
  d === "right" && (h[0] -= c), d === "center" && (h[0] -= c / 2);
  var y = n.verticalAlign;
  y === "bottom" && (h[1] -= v),
    y === "middle" && (h[1] -= v / 2),
    rC(h, c, v, i);
  var p = s.get("backgroundColor");
  (!p || p === "auto") && (p = t.get(["axisLine", "lineStyle", "color"])),
    (r.label = {
      x: h[0],
      y: h[1],
      style: Je(s, {
        text: o,
        font: l,
        fill: s.getTextColor(),
        padding: u,
        backgroundColor: p,
      }),
      z2: 10,
    });
}
function rC(r, t, e, i) {
  var n = i.getWidth(),
    a = i.getHeight();
  (r[0] = Math.min(r[0] + t, n) - t),
    (r[1] = Math.min(r[1] + e, a) - e),
    (r[0] = Math.max(r[0], 0)),
    (r[1] = Math.max(r[1], 0));
}
function Ug(r, t, e, i, n) {
  r = t.scale.parse(r);
  var a = t.scale.getLabel({ value: r }, { precision: n.precision }),
    o = n.formatter;
  if (o) {
    var s = {
      value: ql(t, { value: r }),
      axisDimension: t.dim,
      axisIndex: t.index,
      seriesData: [],
    };
    C(i, function (u) {
      var l = e.getSeriesByIndex(u.seriesIndex),
        f = u.dataIndexInside,
        h = l && l.getDataParams(f);
      h && s.seriesData.push(h);
    }),
      B(o) ? (a = o.replace("{value}", a)) : q(o) && (a = o(s));
  }
  return a;
}
function Yg(r, t, e) {
  var i = hn();
  return (
    nl(i, i, e.rotation),
    hu(i, i, e.position),
    wl(
      [
        r.dataToCoord(t),
        (e.labelOffset || 0) + (e.labelDirection || 1) * (e.labelMargin || 0),
      ],
      i
    )
  );
}
function iC(r, t, e, i, n, a) {
  var o = Vx.innerTextLayout(e.rotation, 0, e.labelDirection);
  (e.labelMargin = n.get(["label", "margin"])),
    eC(t, i, n, a, {
      position: Yg(i.axis, r, e),
      align: o.textAlign,
      verticalAlign: o.textVerticalAlign,
    });
}
function nC(r, t, e) {
  return (e = e || 0), { x1: r[e], y1: r[1 - e], x2: t[e], y2: t[1 - e] };
}
function aC(r, t, e) {
  return (e = e || 0), { x: r[e], y: r[1 - e], width: t[e], height: t[1 - e] };
}
var oC = (function (r) {
  rt(t, r);
  function t() {
    return (r !== null && r.apply(this, arguments)) || this;
  }
  return (
    (t.prototype.makeElOption = function (e, i, n, a, o) {
      var s = n.axis,
        u = s.grid,
        l = a.get("type"),
        f = Jv(u, s).getOtherAxis(s).getGlobalExtent(),
        h = s.toGlobalCoord(s.dataToCoord(i, !0));
      if (l && l !== "none") {
        var c = tC(a),
          v = sC[l](s, h, f);
        (v.style = c), (e.graphicKey = v.type), (e.pointer = v);
      }
      var d = Wv(u.model, n);
      iC(i, e, d, n, a, o);
    }),
    (t.prototype.getHandleTransform = function (e, i, n) {
      var a = Wv(i.axis.grid.model, i, { labelInside: !1 });
      a.labelMargin = n.get(["handle", "margin"]);
      var o = Yg(i.axis, e, a);
      return {
        x: o[0],
        y: o[1],
        rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0),
      };
    }),
    (t.prototype.updateHandleTransform = function (e, i, n, a) {
      var o = n.axis,
        s = o.grid,
        u = o.getGlobalExtent(!0),
        l = Jv(s, o).getOtherAxis(o).getGlobalExtent(),
        f = o.dim === "x" ? 0 : 1,
        h = [e.x, e.y];
      (h[f] += i[f]),
        (h[f] = Math.min(u[1], h[f])),
        (h[f] = Math.max(u[0], h[f]));
      var c = (l[1] + l[0]) / 2,
        v = [c, c];
      v[f] = h[f];
      var d = [{ verticalAlign: "middle" }, { align: "center" }];
      return {
        x: h[0],
        y: h[1],
        rotation: e.rotation,
        cursorPoint: v,
        tooltipOption: d[f],
      };
    }),
    t
  );
})(jx);
function Jv(r, t) {
  var e = {};
  return (e[t.dim + "AxisIndex"] = t.index), r.getCartesian(e);
}
var sC = {
  line: function (r, t, e) {
    var i = nC([t, e[0]], [t, e[1]], jv(r));
    return { type: "Line", subPixelOptimize: !0, shape: i };
  },
  shadow: function (r, t, e) {
    var i = Math.max(1, r.getBandWidth()),
      n = e[1] - e[0];
    return { type: "Rect", shape: aC([t - i / 2, e[0]], [i, n], jv(r)) };
  },
};
function jv(r) {
  return r.dim === "x" ? 0 : 1;
}
var uC = oC,
  lC = (function (r) {
    rt(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = t.type), e;
    }
    return (
      (t.type = "axisPointer"),
      (t.defaultOption = {
        show: "auto",
        z: 50,
        type: "line",
        snap: !1,
        triggerTooltip: !0,
        value: null,
        status: null,
        link: [],
        animation: null,
        animationDurationUpdate: 200,
        lineStyle: { color: "#B9BEC9", width: 1, type: "dashed" },
        shadowStyle: { color: "rgba(210,219,238,0.2)" },
        label: {
          show: !0,
          formatter: null,
          precision: "auto",
          margin: 3,
          color: "#fff",
          padding: [5, 7, 5, 7],
          backgroundColor: "auto",
          borderColor: null,
          borderWidth: 0,
          borderRadius: 3,
        },
        handle: {
          show: !1,
          icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
          size: 45,
          margin: 50,
          color: "#333",
          shadowBlur: 3,
          shadowColor: "#aaa",
          shadowOffsetX: 0,
          shadowOffsetY: 2,
          throttle: 40,
        },
      }),
      t
    );
  })(ot),
  fC = lC,
  Ie = yt(),
  hC = C;
function $g(r, t, e) {
  if (!W.node) {
    var i = t.getZr();
    Ie(i).records || (Ie(i).records = {}), vC(i, t);
    var n = Ie(i).records[r] || (Ie(i).records[r] = {});
    n.handler = e;
  }
}
function vC(r, t) {
  if (Ie(r).initialized) return;
  (Ie(r).initialized = !0),
    e("click", gt(tc, "click")),
    e("mousemove", gt(tc, "mousemove")),
    e("globalout", dC);
  function e(i, n) {
    r.on(i, function (a) {
      var o = pC(t);
      hC(Ie(r).records, function (s) {
        s && n(s, a, o.dispatchAction);
      }),
        cC(o.pendings, t);
    });
  }
}
function cC(r, t) {
  var e = r.showTip.length,
    i = r.hideTip.length,
    n;
  e ? (n = r.showTip[e - 1]) : i && (n = r.hideTip[i - 1]),
    n && ((n.dispatchAction = null), t.dispatchAction(n));
}
function dC(r, t, e) {
  r.handler("leave", null, e);
}
function tc(r, t, e, i) {
  t.handler(r, e, i);
}
function pC(r) {
  var t = { showTip: [], hideTip: [] },
    e = function (i) {
      var n = t[i.type];
      n ? n.push(i) : ((i.dispatchAction = e), r.dispatchAction(i));
    };
  return { dispatchAction: e, pendings: t };
}
function Yu(r, t) {
  if (!W.node) {
    var e = t.getZr(),
      i = (Ie(e).records || {})[r];
    i && (Ie(e).records[r] = null);
  }
}
var gC = (function (r) {
    rt(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = t.type), e;
    }
    return (
      (t.prototype.render = function (e, i, n) {
        var a = i.getComponent("tooltip"),
          o =
            e.get("triggerOn") ||
            (a && a.get("triggerOn")) ||
            "mousemove|click";
        $g("axisPointer", n, function (s, u, l) {
          o !== "none" &&
            (s === "leave" || o.indexOf(s) >= 0) &&
            l({
              type: "updateAxisPointer",
              currTrigger: s,
              x: u && u.offsetX,
              y: u && u.offsetY,
            });
        });
      }),
      (t.prototype.remove = function (e, i) {
        Yu("axisPointer", i);
      }),
      (t.prototype.dispose = function (e, i) {
        Yu("axisPointer", i);
      }),
      (t.type = "axisPointer"),
      t
    );
  })(Ee),
  yC = gC;
function Xg(r, t) {
  var e = [],
    i = r.seriesIndex,
    n;
  if (i == null || !(n = t.getSeriesByIndex(i))) return { point: [] };
  var a = n.getData(),
    o = Mn(a, r);
  if (o == null || o < 0 || k(o)) return { point: [] };
  var s = a.getItemGraphicEl(o),
    u = n.coordinateSystem;
  if (n.getTooltipPosition) e = n.getTooltipPosition(o) || [];
  else if (u && u.dataToPoint)
    if (r.isStacked) {
      var l = u.getBaseAxis(),
        f = u.getOtherAxis(l),
        h = f.dim,
        c = l.dim,
        v = h === "x" || h === "radius" ? 1 : 0,
        d = a.mapDimension(c),
        y = [];
      (y[v] = a.get(d, o)),
        (y[1 - v] = a.get(a.getCalculationInfo("stackResultDimension"), o)),
        (e = u.dataToPoint(y) || []);
    } else
      e =
        u.dataToPoint(
          a.getValues(
            U(u.dimensions, function (g) {
              return a.mapDimension(g);
            }),
            o
          )
        ) || [];
  else if (s) {
    var p = s.getBoundingRect().clone();
    p.applyTransform(s.transform),
      (e = [p.x + p.width / 2, p.y + p.height / 2]);
  }
  return { point: e, el: s };
}
var ec = yt();
function _C(r, t, e) {
  var i = r.currTrigger,
    n = [r.x, r.y],
    a = r,
    o = r.dispatchAction || st(e.dispatchAction, e),
    s = t.getComponent("axisPointer").coordSysAxesInfo;
  if (!!s) {
    Ea(n) &&
      (n = Xg({ seriesIndex: a.seriesIndex, dataIndex: a.dataIndex }, t).point);
    var u = Ea(n),
      l = a.axesInfo,
      f = s.axesInfo,
      h = i === "leave" || Ea(n),
      c = {},
      v = {},
      d = { list: [], map: {} },
      y = { showPointer: gt(wC, v), showTooltip: gt(SC, d) };
    C(s.coordSysMap, function (g, _) {
      var m = u || g.containPoint(n);
      C(s.coordSysAxesInfo[_], function (w, b) {
        var S = w.axis,
          D = CC(l, w);
        if (!h && m && (!l || D)) {
          var T = D && D.value;
          T == null && !u && (T = S.pointToData(n)),
            T != null && rc(w, T, y, !1, c);
        }
      });
    });
    var p = {};
    return (
      C(f, function (g, _) {
        var m = g.linkGroup;
        m &&
          !v[_] &&
          C(m.axesInfo, function (w, b) {
            var S = v[b];
            if (w !== g && S) {
              var D = S.value;
              m.mapper && (D = g.axis.scale.parse(m.mapper(D, ic(w), ic(g)))),
                (p[g.key] = D);
            }
          });
      }),
      C(p, function (g, _) {
        rc(f[_], g, y, !0, c);
      }),
      bC(v, f, c),
      TC(d, n, r, o),
      xC(f, o, e),
      c
    );
  }
}
function rc(r, t, e, i, n) {
  var a = r.axis;
  if (!(a.scale.isBlank() || !a.containData(t))) {
    if (!r.involveSeries) {
      e.showPointer(r, t);
      return;
    }
    var o = mC(t, r),
      s = o.payloadBatch,
      u = o.snapToValue;
    s[0] && n.seriesIndex == null && O(n, s[0]),
      !i && r.snap && a.containData(u) && u != null && (t = u),
      e.showPointer(r, t, s),
      e.showTooltip(r, o, u);
  }
}
function mC(r, t) {
  var e = t.axis,
    i = e.dim,
    n = r,
    a = [],
    o = Number.MAX_VALUE,
    s = -1;
  return (
    C(t.seriesModels, function (u, l) {
      var f = u.getData().mapDimensionsAll(i),
        h,
        c;
      if (u.getAxisTooltipData) {
        var v = u.getAxisTooltipData(f, r, e);
        (c = v.dataIndices), (h = v.nestestValue);
      } else {
        if (
          ((c = u
            .getData()
            .indicesOfNearest(f[0], r, e.type === "category" ? 0.5 : null)),
          !c.length)
        )
          return;
        h = u.getData().get(f[0], c[0]);
      }
      if (!(h == null || !isFinite(h))) {
        var d = r - h,
          y = Math.abs(d);
        y <= o &&
          ((y < o || (d >= 0 && s < 0)) &&
            ((o = y), (s = d), (n = h), (a.length = 0)),
          C(c, function (p) {
            a.push({
              seriesIndex: u.seriesIndex,
              dataIndexInside: p,
              dataIndex: u.getData().getRawIndex(p),
            });
          }));
      }
    }),
    { payloadBatch: a, snapToValue: n }
  );
}
function wC(r, t, e, i) {
  r[t.key] = { value: e, payloadBatch: i };
}
function SC(r, t, e, i) {
  var n = e.payloadBatch,
    a = t.axis,
    o = a.model,
    s = t.axisPointerModel;
  if (!(!t.triggerTooltip || !n.length)) {
    var u = t.coordSys.model,
      l = xn(u),
      f = r.map[l];
    f ||
      ((f = r.map[l] =
        {
          coordSysId: u.id,
          coordSysIndex: u.componentIndex,
          coordSysType: u.type,
          coordSysMainType: u.mainType,
          dataByAxis: [],
        }),
      r.list.push(f)),
      f.dataByAxis.push({
        axisDim: a.dim,
        axisIndex: o.componentIndex,
        axisType: o.type,
        axisId: o.id,
        value: i,
        valueLabelOpt: {
          precision: s.get(["label", "precision"]),
          formatter: s.get(["label", "formatter"]),
        },
        seriesDataIndices: n.slice(),
      });
  }
}
function bC(r, t, e) {
  var i = (e.axesInfo = []);
  C(t, function (n, a) {
    var o = n.axisPointerModel.option,
      s = r[a];
    s
      ? (!n.useHandle && (o.status = "show"),
        (o.value = s.value),
        (o.seriesDataIndices = (s.payloadBatch || []).slice()))
      : !n.useHandle && (o.status = "hide"),
      o.status === "show" &&
        i.push({
          axisDim: n.axis.dim,
          axisIndex: n.axis.model.componentIndex,
          value: o.value,
        });
  });
}
function TC(r, t, e, i) {
  if (Ea(t) || !r.list.length) {
    i({ type: "hideTip" });
    return;
  }
  var n = ((r.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  i({
    type: "showTip",
    escapeConnect: !0,
    x: t[0],
    y: t[1],
    tooltipOption: e.tooltipOption,
    position: e.position,
    dataIndexInside: n.dataIndexInside,
    dataIndex: n.dataIndex,
    seriesIndex: n.seriesIndex,
    dataByCoordSys: r.list,
  });
}
function xC(r, t, e) {
  var i = e.getZr(),
    n = "axisPointerLastHighlights",
    a = ec(i)[n] || {},
    o = (ec(i)[n] = {});
  C(r, function (l, f) {
    var h = l.axisPointerModel.option;
    h.status === "show" &&
      C(h.seriesDataIndices, function (c) {
        var v = c.seriesIndex + " | " + c.dataIndex;
        o[v] = c;
      });
  });
  var s = [],
    u = [];
  C(a, function (l, f) {
    !o[f] && u.push(l);
  }),
    C(o, function (l, f) {
      !a[f] && s.push(l);
    }),
    u.length &&
      e.dispatchAction({
        type: "downplay",
        escapeConnect: !0,
        notBlur: !0,
        batch: u,
      }),
    s.length &&
      e.dispatchAction({
        type: "highlight",
        escapeConnect: !0,
        notBlur: !0,
        batch: s,
      });
}
function CC(r, t) {
  for (var e = 0; e < (r || []).length; e++) {
    var i = r[e];
    if (t.axis.dim === i.axisDim && t.axis.model.componentIndex === i.axisIndex)
      return i;
  }
}
function ic(r) {
  var t = r.axis.model,
    e = {},
    i = (e.axisDim = r.axis.dim);
  return (
    (e.axisIndex = e[i + "AxisIndex"] = t.componentIndex),
    (e.axisName = e[i + "AxisName"] = t.name),
    (e.axisId = e[i + "AxisId"] = t.id),
    e
  );
}
function Ea(r) {
  return !r || r[0] == null || isNaN(r[0]) || r[1] == null || isNaN(r[1]);
}
function DC(r) {
  Qx.registerAxisPointerClass("CartesianAxisPointer", uC),
    r.registerComponentModel(fC),
    r.registerComponentView(yC),
    r.registerPreprocessor(function (t) {
      if (t) {
        (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
        var e = t.axisPointer.link;
        e && !k(e) && (t.axisPointer.link = [e]);
      }
    }),
    r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, function (t, e) {
      t.getComponent("axisPointer").coordSysAxesInfo = Wx(t, e);
    }),
    r.registerAction(
      {
        type: "updateAxisPointer",
        event: "updateAxisPointer",
        update: ":updateAxisPointer",
      },
      _C
    );
}
function lM(r, t, e) {
  var i = t.getBoxLayoutParams(),
    n = t.get("padding"),
    a = { width: e.getWidth(), height: e.getHeight() },
    o = pi(i, a, n);
  hi(t.get("orient"), r, t.get("itemGap"), o.width, o.height), mw(r, i, a, n);
}
function MC(r, t) {
  var e = xo(t.get("padding")),
    i = t.getItemStyle(["color", "opacity"]);
  return (
    (i.fill = t.get("backgroundColor")),
    (r = new Ot({
      shape: {
        x: r.x - e[3],
        y: r.y - e[0],
        width: r.width + e[1] + e[3],
        height: r.height + e[0] + e[2],
        r: t.get("borderRadius"),
      },
      style: i,
      silent: !0,
      z2: -1,
    })),
    r
  );
}
var PC = (function (r) {
    rt(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = t.type), e;
    }
    return (
      (t.type = "tooltip"),
      (t.dependencies = ["axisPointer"]),
      (t.defaultOption = {
        z: 60,
        show: !0,
        showContent: !0,
        trigger: "item",
        triggerOn: "mousemove|click",
        alwaysShowContent: !1,
        displayMode: "single",
        renderMode: "auto",
        confine: null,
        showDelay: 0,
        hideDelay: 100,
        transitionDuration: 0.4,
        enterable: !1,
        backgroundColor: "#fff",
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, .2)",
        shadowOffsetX: 1,
        shadowOffsetY: 2,
        borderRadius: 4,
        borderWidth: 1,
        padding: null,
        extraCssText: "",
        axisPointer: {
          type: "line",
          axis: "auto",
          animation: "auto",
          animationDurationUpdate: 200,
          animationEasingUpdate: "exponentialOut",
          crossStyle: {
            color: "#999",
            width: 1,
            type: "dashed",
            textStyle: {},
          },
        },
        textStyle: { color: "#666", fontSize: 14 },
      }),
      t
    );
  })(ot),
  AC = PC;
function qg(r) {
  var t = r.get("confine");
  return t != null ? !!t : r.get("renderMode") === "richText";
}
function Zg(r) {
  if (!!W.domSupported) {
    for (
      var t = document.documentElement.style, e = 0, i = r.length;
      e < i;
      e++
    )
      if (r[e] in t) return r[e];
  }
}
var Kg = Zg([
    "transform",
    "webkitTransform",
    "OTransform",
    "MozTransform",
    "msTransform",
  ]),
  LC = Zg([
    "webkitTransition",
    "transition",
    "OTransition",
    "MozTransition",
    "msTransition",
  ]);
function Qg(r, t) {
  if (!r) return t;
  t = vp(t, !0);
  var e = r.indexOf(t);
  return (r = e === -1 ? t : "-" + r.slice(0, e) + "-" + t), r.toLowerCase();
}
function IC(r, t) {
  var e =
    r.currentStyle ||
    (document.defaultView && document.defaultView.getComputedStyle(r));
  return e ? (t ? e[t] : e) : null;
}
var RC = Qg(LC, "transition"),
  Jl = Qg(Kg, "transform"),
  EC =
    "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" +
    (W.transform3dSupported ? "will-change:transform;" : "");
function OC(r) {
  return (
    (r =
      r === "left"
        ? "right"
        : r === "right"
        ? "left"
        : r === "top"
        ? "bottom"
        : "top"),
    r
  );
}
function kC(r, t, e) {
  if (!B(e) || e === "inside") return "";
  var i = r.get("backgroundColor"),
    n = r.get("borderWidth");
  t = yn(t);
  var a = OC(e),
    o = Math.max(Math.round(n) * 1.5, 6),
    s = "",
    u = Jl + ":",
    l;
  et(["left", "right"], a) > -1
    ? ((s += "top:50%"),
      (u +=
        "translateY(-50%) rotate(" + (l = a === "left" ? -225 : -45) + "deg)"))
    : ((s += "left:50%"),
      (u +=
        "translateX(-50%) rotate(" + (l = a === "top" ? 225 : 45) + "deg)"));
  var f = (l * Math.PI) / 180,
    h = o + n,
    c = h * Math.abs(Math.cos(f)) + h * Math.abs(Math.sin(f)),
    v =
      Math.round(
        ((c - Math.SQRT2 * n) / 2 + Math.SQRT2 * n - (c - h) / 2) * 100
      ) / 100;
  s += ";" + a + ":-" + v + "px";
  var d = t + " solid " + n + "px;",
    y = [
      "position:absolute;width:" + o + "px;height:" + o + "px;",
      s + ";" + u + ";",
      "border-bottom:" + d,
      "border-right:" + d,
      "background-color:" + i + ";",
    ];
  return '<div style="' + y.join("") + '"></div>';
}
function BC(r, t) {
  var e = "cubic-bezier(0.23,1,0.32,1)",
    i = " " + r / 2 + "s " + e,
    n = "opacity" + i + ",visibility" + i;
  return (
    t ||
      ((i = " " + r + "s " + e),
      (n += W.transformSupported ? "," + Jl + i : ",left" + i + ",top" + i)),
    RC + ":" + n
  );
}
function nc(r, t, e) {
  var i = r.toFixed(0) + "px",
    n = t.toFixed(0) + "px";
  if (!W.transformSupported)
    return e
      ? "top:" + n + ";left:" + i + ";"
      : [
          ["top", n],
          ["left", i],
        ];
  var a = W.transform3dSupported,
    o =
      "translate" + (a ? "3d" : "") + "(" + i + "," + n + (a ? ",0" : "") + ")";
  return e
    ? "top:0;left:0;" + Jl + ":" + o + ";"
    : [
        ["top", 0],
        ["left", 0],
        [Kg, o],
      ];
}
function FC(r) {
  var t = [],
    e = r.get("fontSize"),
    i = r.getTextColor();
  i && t.push("color:" + i),
    t.push("font:" + r.getFont()),
    e && t.push("line-height:" + Math.round((e * 3) / 2) + "px");
  var n = r.get("textShadowColor"),
    a = r.get("textShadowBlur") || 0,
    o = r.get("textShadowOffsetX") || 0,
    s = r.get("textShadowOffsetY") || 0;
  return (
    n && a && t.push("text-shadow:" + o + "px " + s + "px " + a + "px " + n),
    C(["decoration", "align"], function (u) {
      var l = r.get(u);
      l && t.push("text-" + u + ":" + l);
    }),
    t.join(";")
  );
}
function NC(r, t, e) {
  var i = [],
    n = r.get("transitionDuration"),
    a = r.get("backgroundColor"),
    o = r.get("shadowBlur"),
    s = r.get("shadowColor"),
    u = r.get("shadowOffsetX"),
    l = r.get("shadowOffsetY"),
    f = r.getModel("textStyle"),
    h = Vp(r, "html"),
    c = u + "px " + l + "px " + o + "px " + s;
  return (
    i.push("box-shadow:" + c),
    t && n && i.push(BC(n, e)),
    a && i.push("background-color:" + a),
    C(["width", "color", "radius"], function (v) {
      var d = "border-" + v,
        y = vp(d),
        p = r.get(y);
      p != null && i.push(d + ":" + p + (v === "color" ? "" : "px"));
    }),
    i.push(FC(f)),
    h != null && i.push("padding:" + xo(h).join("px ") + "px"),
    i.join(";") + ";"
  );
}
function ac(r, t, e, i, n) {
  var a = t && t.painter;
  if (e) {
    var o = a && a.getViewportRoot();
    o && zy(r, o, document.body, i, n);
  } else {
    (r[0] = i), (r[1] = n);
    var s = a && a.getViewportRootOffset();
    s && ((r[0] += s.offsetLeft), (r[1] += s.offsetTop));
  }
  (r[2] = r[0] / t.getWidth()), (r[3] = r[1] / t.getHeight());
}
var zC = (function () {
    function r(t, e, i) {
      if (
        ((this._show = !1),
        (this._styleCoord = [0, 0, 0, 0]),
        (this._enterable = !0),
        (this._firstShow = !0),
        (this._longHide = !0),
        W.wxa)
      )
        return null;
      var n = document.createElement("div");
      (n.domBelongToZr = !0), (this.el = n);
      var a = (this._zr = e.getZr()),
        o = (this._appendToBody = i && i.appendToBody);
      ac(this._styleCoord, a, o, e.getWidth() / 2, e.getHeight() / 2),
        o ? document.body.appendChild(n) : t.appendChild(n),
        (this._container = t);
      var s = this;
      (n.onmouseenter = function () {
        s._enterable && (clearTimeout(s._hideTimeout), (s._show = !0)),
          (s._inContent = !0);
      }),
        (n.onmousemove = function (u) {
          if (((u = u || window.event), !s._enterable)) {
            var l = a.handler,
              f = a.painter.getViewportRoot();
            Zt(f, u, !0), l.dispatch("mousemove", u);
          }
        }),
        (n.onmouseleave = function () {
          (s._inContent = !1),
            s._enterable && s._show && s.hideLater(s._hideDelay);
        });
    }
    return (
      (r.prototype.update = function (t) {
        var e = this._container,
          i = IC(e, "position"),
          n = e.style;
        n.position !== "absolute" &&
          i !== "absolute" &&
          (n.position = "relative");
        var a = t.get("alwaysShowContent");
        a && this._moveIfResized(),
          (this.el.className = t.get("className") || "");
      }),
      (r.prototype.show = function (t, e) {
        clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
        var i = this.el,
          n = i.style,
          a = this._styleCoord;
        i.innerHTML
          ? (n.cssText =
              EC +
              NC(t, !this._firstShow, this._longHide) +
              nc(a[0], a[1], !0) +
              ("border-color:" + yn(e) + ";") +
              (t.get("extraCssText") || "") +
              (";pointer-events:" + (this._enterable ? "auto" : "none")))
          : (n.display = "none"),
          (this._show = !0),
          (this._firstShow = !1),
          (this._longHide = !1);
      }),
      (r.prototype.setContent = function (t, e, i, n, a) {
        var o = this.el;
        if (t == null) {
          o.innerHTML = "";
          return;
        }
        var s = "";
        if (
          (B(a) && i.get("trigger") === "item" && !qg(i) && (s = kC(i, n, a)),
          B(t))
        )
          o.innerHTML = t + s;
        else if (t) {
          (o.innerHTML = ""), k(t) || (t = [t]);
          for (var u = 0; u < t.length; u++)
            ka(t[u]) && t[u].parentNode !== o && o.appendChild(t[u]);
          if (s && o.childNodes.length) {
            var l = document.createElement("div");
            (l.innerHTML = s), o.appendChild(l);
          }
        }
      }),
      (r.prototype.setEnterable = function (t) {
        this._enterable = t;
      }),
      (r.prototype.getSize = function () {
        var t = this.el;
        return [t.offsetWidth, t.offsetHeight];
      }),
      (r.prototype.moveTo = function (t, e) {
        var i = this._styleCoord;
        if (
          (ac(i, this._zr, this._appendToBody, t, e),
          i[0] != null && i[1] != null)
        ) {
          var n = this.el.style,
            a = nc(i[0], i[1]);
          C(a, function (o) {
            n[o[0]] = o[1];
          });
        }
      }),
      (r.prototype._moveIfResized = function () {
        var t = this._styleCoord[2],
          e = this._styleCoord[3];
        this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
      }),
      (r.prototype.hide = function () {
        var t = this,
          e = this.el.style;
        (e.visibility = "hidden"),
          (e.opacity = "0"),
          W.transform3dSupported && (e.willChange = ""),
          (this._show = !1),
          (this._longHideTimeout = setTimeout(function () {
            return (t._longHide = !0);
          }, 500));
      }),
      (r.prototype.hideLater = function (t) {
        this._show &&
          !(this._inContent && this._enterable) &&
          (t
            ? ((this._hideDelay = t),
              (this._show = !1),
              (this._hideTimeout = setTimeout(st(this.hide, this), t)))
            : this.hide());
      }),
      (r.prototype.isShow = function () {
        return this._show;
      }),
      (r.prototype.dispose = function () {
        this.el.parentNode.removeChild(this.el);
      }),
      r
    );
  })(),
  HC = zC,
  GC = (function () {
    function r(t) {
      (this._show = !1),
        (this._styleCoord = [0, 0, 0, 0]),
        (this._enterable = !0),
        (this._zr = t.getZr()),
        sc(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
    }
    return (
      (r.prototype.update = function (t) {
        var e = t.get("alwaysShowContent");
        e && this._moveIfResized();
      }),
      (r.prototype.show = function () {
        this._hideTimeout && clearTimeout(this._hideTimeout),
          this.el.show(),
          (this._show = !0);
      }),
      (r.prototype.setContent = function (t, e, i, n, a) {
        var o = this;
        F(t) && It(""), this.el && this._zr.remove(this.el);
        var s = i.getModel("textStyle");
        (this.el = new Bt({
          style: {
            rich: e.richTextStyles,
            text: t,
            lineHeight: 22,
            borderWidth: 1,
            borderColor: n,
            textShadowColor: s.get("textShadowColor"),
            fill: i.get(["textStyle", "color"]),
            padding: Vp(i, "richText"),
            verticalAlign: "top",
            align: "left",
          },
          z: i.get("z"),
        })),
          C(
            [
              "backgroundColor",
              "borderRadius",
              "shadowColor",
              "shadowBlur",
              "shadowOffsetX",
              "shadowOffsetY",
            ],
            function (l) {
              o.el.style[l] = i.get(l);
            }
          ),
          C(
            ["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"],
            function (l) {
              o.el.style[l] = s.get(l) || 0;
            }
          ),
          this._zr.add(this.el);
        var u = this;
        this.el.on("mouseover", function () {
          u._enterable && (clearTimeout(u._hideTimeout), (u._show = !0)),
            (u._inContent = !0);
        }),
          this.el.on("mouseout", function () {
            u._enterable && u._show && u.hideLater(u._hideDelay),
              (u._inContent = !1);
          });
      }),
      (r.prototype.setEnterable = function (t) {
        this._enterable = t;
      }),
      (r.prototype.getSize = function () {
        var t = this.el,
          e = this.el.getBoundingRect(),
          i = oc(t.style);
        return [e.width + i.left + i.right, e.height + i.top + i.bottom];
      }),
      (r.prototype.moveTo = function (t, e) {
        var i = this.el;
        if (i) {
          var n = this._styleCoord;
          sc(n, this._zr, t, e), (t = n[0]), (e = n[1]);
          var a = i.style,
            o = Ue(a.borderWidth || 0),
            s = oc(a);
          (i.x = t + o + s.left), (i.y = e + o + s.top), i.markRedraw();
        }
      }),
      (r.prototype._moveIfResized = function () {
        var t = this._styleCoord[2],
          e = this._styleCoord[3];
        this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
      }),
      (r.prototype.hide = function () {
        this.el && this.el.hide(), (this._show = !1);
      }),
      (r.prototype.hideLater = function (t) {
        this._show &&
          !(this._inContent && this._enterable) &&
          (t
            ? ((this._hideDelay = t),
              (this._show = !1),
              (this._hideTimeout = setTimeout(st(this.hide, this), t)))
            : this.hide());
      }),
      (r.prototype.isShow = function () {
        return this._show;
      }),
      (r.prototype.dispose = function () {
        this._zr.remove(this.el);
      }),
      r
    );
  })();
function Ue(r) {
  return Math.max(0, r);
}
function oc(r) {
  var t = Ue(r.shadowBlur || 0),
    e = Ue(r.shadowOffsetX || 0),
    i = Ue(r.shadowOffsetY || 0);
  return {
    left: Ue(t - e),
    right: Ue(t + e),
    top: Ue(t - i),
    bottom: Ue(t + i),
  };
}
function sc(r, t, e, i) {
  (r[0] = e),
    (r[1] = i),
    (r[2] = r[0] / t.getWidth()),
    (r[3] = r[1] / t.getHeight());
}
var VC = GC,
  WC = new Ot({ shape: { x: -1, y: -1, width: 2, height: 2 } }),
  UC = (function (r) {
    rt(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = t.type), e;
    }
    return (
      (t.prototype.init = function (e, i) {
        if (!(W.node || !i.getDom())) {
          var n = e.getComponent("tooltip"),
            a = (this._renderMode = w0(n.get("renderMode")));
          this._tooltipContent =
            a === "richText"
              ? new VC(i)
              : new HC(i.getDom(), i, {
                  appendToBody: n.get("appendToBody", !0),
                });
        }
      }),
      (t.prototype.render = function (e, i, n) {
        if (!(W.node || !n.getDom())) {
          this.group.removeAll(),
            (this._tooltipModel = e),
            (this._ecModel = i),
            (this._api = n),
            (this._alwaysShowContent = e.get("alwaysShowContent"));
          var a = this._tooltipContent;
          a.update(e),
            a.setEnterable(e.get("enterable")),
            this._initGlobalListener(),
            this._keepShow(),
            this._renderMode !== "richText" && e.get("transitionDuration")
              ? Yp(this, "_updatePosition", 50, "fixRate")
              : Eu(this, "_updatePosition");
        }
      }),
      (t.prototype._initGlobalListener = function () {
        var e = this._tooltipModel,
          i = e.get("triggerOn");
        $g(
          "itemTooltip",
          this._api,
          st(function (n, a, o) {
            i !== "none" &&
              (i.indexOf(n) >= 0
                ? this._tryShow(a, o)
                : n === "leave" && this._hide(o));
          }, this)
        );
      }),
      (t.prototype._keepShow = function () {
        var e = this._tooltipModel,
          i = this._ecModel,
          n = this._api,
          a = e.get("triggerOn");
        if (
          this._lastX != null &&
          this._lastY != null &&
          a !== "none" &&
          a !== "click"
        ) {
          var o = this;
          clearTimeout(this._refreshUpdateTimeout),
            (this._refreshUpdateTimeout = setTimeout(function () {
              !n.isDisposed() &&
                o.manuallyShowTip(e, i, n, {
                  x: o._lastX,
                  y: o._lastY,
                  dataByCoordSys: o._lastDataByCoordSys,
                });
            }));
        }
      }),
      (t.prototype.manuallyShowTip = function (e, i, n, a) {
        if (!(a.from === this.uid || W.node || !n.getDom())) {
          var o = uc(a, n);
          this._ticket = "";
          var s = a.dataByCoordSys,
            u = qC(a, i, n);
          if (u) {
            var l = u.el.getBoundingRect().clone();
            l.applyTransform(u.el.transform),
              this._tryShow(
                {
                  offsetX: l.x + l.width / 2,
                  offsetY: l.y + l.height / 2,
                  target: u.el,
                  position: a.position,
                  positionDefault: "bottom",
                },
                o
              );
          } else if (a.tooltip && a.x != null && a.y != null) {
            var f = WC;
            (f.x = a.x),
              (f.y = a.y),
              f.update(),
              (lt(f).tooltipConfig = { name: null, option: a.tooltip }),
              this._tryShow({ offsetX: a.x, offsetY: a.y, target: f }, o);
          } else if (s)
            this._tryShow(
              {
                offsetX: a.x,
                offsetY: a.y,
                position: a.position,
                dataByCoordSys: s,
                tooltipOption: a.tooltipOption,
              },
              o
            );
          else if (a.seriesIndex != null) {
            if (this._manuallyAxisShowTip(e, i, n, a)) return;
            var h = Xg(a, i),
              c = h.point[0],
              v = h.point[1];
            c != null &&
              v != null &&
              this._tryShow(
                {
                  offsetX: c,
                  offsetY: v,
                  target: h.el,
                  position: a.position,
                  positionDefault: "bottom",
                },
                o
              );
          } else
            a.x != null &&
              a.y != null &&
              (n.dispatchAction({ type: "updateAxisPointer", x: a.x, y: a.y }),
              this._tryShow(
                {
                  offsetX: a.x,
                  offsetY: a.y,
                  position: a.position,
                  target: n.getZr().findHover(a.x, a.y).target,
                },
                o
              ));
        }
      }),
      (t.prototype.manuallyHideTip = function (e, i, n, a) {
        var o = this._tooltipContent;
        !this._alwaysShowContent &&
          this._tooltipModel &&
          o.hideLater(this._tooltipModel.get("hideDelay")),
          (this._lastX = this._lastY = this._lastDataByCoordSys = null),
          a.from !== this.uid && this._hide(uc(a, n));
      }),
      (t.prototype._manuallyAxisShowTip = function (e, i, n, a) {
        var o = a.seriesIndex,
          s = a.dataIndex,
          u = i.getComponent("axisPointer").coordSysAxesInfo;
        if (!(o == null || s == null || u == null)) {
          var l = i.getSeriesByIndex(o);
          if (!!l) {
            var f = l.getData(),
              h = Gi(
                [f.getItemModel(s), l, (l.coordinateSystem || {}).model],
                this._tooltipModel
              );
            if (h.get("trigger") === "axis")
              return (
                n.dispatchAction({
                  type: "updateAxisPointer",
                  seriesIndex: o,
                  dataIndex: s,
                  position: a.position,
                }),
                !0
              );
          }
        }
      }),
      (t.prototype._tryShow = function (e, i) {
        var n = e.target,
          a = this._tooltipModel;
        if (!!a) {
          (this._lastX = e.offsetX), (this._lastY = e.offsetY);
          var o = e.dataByCoordSys;
          if (o && o.length) this._showAxisTooltip(o, e);
          else if (n) {
            this._lastDataByCoordSys = null;
            var s, u;
            Zi(
              n,
              function (l) {
                if (lt(l).dataIndex != null) return (s = l), !0;
                if (lt(l).tooltipConfig != null) return (u = l), !0;
              },
              !0
            ),
              s
                ? this._showSeriesItemTooltip(e, s, i)
                : u
                ? this._showComponentItemTooltip(e, u, i)
                : this._hide(i);
          } else (this._lastDataByCoordSys = null), this._hide(i);
        }
      }),
      (t.prototype._showOrMove = function (e, i) {
        var n = e.get("showDelay");
        (i = st(i, this)),
          clearTimeout(this._showTimout),
          n > 0 ? (this._showTimout = setTimeout(i, n)) : i();
      }),
      (t.prototype._showAxisTooltip = function (e, i) {
        var n = this._ecModel,
          a = this._tooltipModel,
          o = [i.offsetX, i.offsetY],
          s = Gi([i.tooltipOption], a),
          u = this._renderMode,
          l = [],
          f = wn("section", { blocks: [], noHeader: !0 }),
          h = [],
          c = new Ds();
        C(e, function (_) {
          C(_.dataByAxis, function (m) {
            var w = n.getComponent(m.axisDim + "Axis", m.axisIndex),
              b = m.value;
            if (!(!w || b == null)) {
              var S = Ug(b, w.axis, n, m.seriesDataIndices, m.valueLabelOpt),
                D = wn("section", {
                  header: S,
                  noHeader: !ye(S),
                  sortBlocks: !0,
                  blocks: [],
                });
              f.blocks.push(D),
                C(m.seriesDataIndices, function (T) {
                  var x = n.getSeriesByIndex(T.seriesIndex),
                    M = T.dataIndexInside,
                    P = x.getDataParams(M);
                  if (!(P.dataIndex < 0)) {
                    (P.axisDim = m.axisDim),
                      (P.axisIndex = m.axisIndex),
                      (P.axisType = m.axisType),
                      (P.axisId = m.axisId),
                      (P.axisValue = ql(w.axis, { value: b })),
                      (P.axisValueLabel = S),
                      (P.marker = c.makeTooltipMarker("item", yn(P.color), u));
                    var A = $h(x.formatTooltip(M, !0, null)),
                      L = A.frag;
                    if (L) {
                      var I = Gi([x], a).get("valueFormatter");
                      D.blocks.push(I ? O({ valueFormatter: I }, L) : L);
                    }
                    A.text && h.push(A.text), l.push(P);
                  }
                });
            }
          });
        }),
          f.blocks.reverse(),
          h.reverse();
        var v = i.position,
          d = s.get("order"),
          y = Jh(f, c, u, d, n.get("useUTC"), s.get("textStyle"));
        y && h.unshift(y);
        var p =
            u === "richText"
              ? `

`
              : "<br/>",
          g = h.join(p);
        this._showOrMove(s, function () {
          this._updateContentNotChangedOnAxis(e, l)
            ? this._updatePosition(s, v, o[0], o[1], this._tooltipContent, l)
            : this._showTooltipContent(
                s,
                g,
                l,
                Math.random() + "",
                o[0],
                o[1],
                v,
                null,
                c
              );
        });
      }),
      (t.prototype._showSeriesItemTooltip = function (e, i, n) {
        var a = this._ecModel,
          o = lt(i),
          s = o.seriesIndex,
          u = a.getSeriesByIndex(s),
          l = o.dataModel || u,
          f = o.dataIndex,
          h = o.dataType,
          c = l.getData(h),
          v = this._renderMode,
          d = e.positionDefault,
          y = Gi(
            [c.getItemModel(f), l, u && (u.coordinateSystem || {}).model],
            this._tooltipModel,
            d ? { position: d } : null
          ),
          p = y.get("trigger");
        if (!(p != null && p !== "item")) {
          var g = l.getDataParams(f, h),
            _ = new Ds();
          g.marker = _.makeTooltipMarker("item", yn(g.color), v);
          var m = $h(l.formatTooltip(f, !1, h)),
            w = y.get("order"),
            b = y.get("valueFormatter"),
            S = m.frag,
            D = S
              ? Jh(
                  b ? O({ valueFormatter: b }, S) : S,
                  _,
                  v,
                  w,
                  a.get("useUTC"),
                  y.get("textStyle")
                )
              : m.text,
            T = "item_" + l.name + "_" + f;
          this._showOrMove(y, function () {
            this._showTooltipContent(
              y,
              D,
              g,
              T,
              e.offsetX,
              e.offsetY,
              e.position,
              e.target,
              _
            );
          }),
            n({
              type: "showTip",
              dataIndexInside: f,
              dataIndex: c.getRawIndex(f),
              seriesIndex: s,
              from: this.uid,
            });
        }
      }),
      (t.prototype._showComponentItemTooltip = function (e, i, n) {
        var a = lt(i),
          o = a.tooltipConfig,
          s = o.option || {};
        if (B(s)) {
          var u = s;
          s = { content: u, formatter: u };
        }
        var l = [s],
          f = this._ecModel.getComponent(a.componentMainType, a.componentIndex);
        f && l.push(f), l.push({ formatter: s.content });
        var h = e.positionDefault,
          c = Gi(l, this._tooltipModel, h ? { position: h } : null),
          v = c.get("content"),
          d = Math.random() + "",
          y = new Ds();
        this._showOrMove(c, function () {
          var p = X(c.get("formatterParams") || {});
          this._showTooltipContent(
            c,
            v,
            p,
            d,
            e.offsetX,
            e.offsetY,
            e.position,
            i,
            y
          );
        }),
          n({ type: "showTip", from: this.uid });
      }),
      (t.prototype._showTooltipContent = function (e, i, n, a, o, s, u, l, f) {
        if (((this._ticket = ""), !(!e.get("showContent") || !e.get("show")))) {
          var h = this._tooltipContent;
          h.setEnterable(e.get("enterable"));
          var c = e.get("formatter");
          u = u || e.get("position");
          var v = i,
            d = this._getNearestPoint(
              [o, s],
              n,
              e.get("trigger"),
              e.get("borderColor")
            ),
            y = d.color;
          if (c)
            if (B(c)) {
              var p = e.ecModel.get("useUTC"),
                g = k(n) ? n[0] : n,
                _ = g && g.axisType && g.axisType.indexOf("time") >= 0;
              (v = c), _ && (v = mo(g.axisValue, v, p)), (v = cp(v, n, !0));
            } else if (q(c)) {
              var m = st(function (w, b) {
                w === this._ticket &&
                  (h.setContent(b, f, e, y, u),
                  this._updatePosition(e, u, o, s, h, n, l));
              }, this);
              (this._ticket = a), (v = c(n, a, m));
            } else v = c;
          h.setContent(v, f, e, y, u),
            h.show(e, y),
            this._updatePosition(e, u, o, s, h, n, l);
        }
      }),
      (t.prototype._getNearestPoint = function (e, i, n, a) {
        if (n === "axis" || k(i))
          return {
            color: a || (this._renderMode === "html" ? "#fff" : "none"),
          };
        if (!k(i)) return { color: a || i.color || i.borderColor };
      }),
      (t.prototype._updatePosition = function (e, i, n, a, o, s, u) {
        var l = this._api.getWidth(),
          f = this._api.getHeight();
        i = i || e.get("position");
        var h = o.getSize(),
          c = e.get("align"),
          v = e.get("verticalAlign"),
          d = u && u.getBoundingRect().clone();
        if (
          (u && d.applyTransform(u.transform),
          q(i) &&
            (i = i([n, a], s, o.el, d, {
              viewSize: [l, f],
              contentSize: h.slice(),
            })),
          k(i))
        )
          (n = Pt(i[0], l)), (a = Pt(i[1], f));
        else if (F(i)) {
          var y = i;
          (y.width = h[0]), (y.height = h[1]);
          var p = pi(y, { width: l, height: f });
          (n = p.x), (a = p.y), (c = null), (v = null);
        } else if (B(i) && u) {
          var g = XC(i, d, h, e.get("borderWidth"));
          (n = g[0]), (a = g[1]);
        } else {
          var g = YC(n, a, o, l, f, c ? null : 20, v ? null : 20);
          (n = g[0]), (a = g[1]);
        }
        if (
          (c && (n -= lc(c) ? h[0] / 2 : c === "right" ? h[0] : 0),
          v && (a -= lc(v) ? h[1] / 2 : v === "bottom" ? h[1] : 0),
          qg(e))
        ) {
          var g = $C(n, a, o, l, f);
          (n = g[0]), (a = g[1]);
        }
        o.moveTo(n, a);
      }),
      (t.prototype._updateContentNotChangedOnAxis = function (e, i) {
        var n = this._lastDataByCoordSys,
          a = this._cbParamsList,
          o = !!n && n.length === e.length;
        return (
          o &&
            C(n, function (s, u) {
              var l = s.dataByAxis || [],
                f = e[u] || {},
                h = f.dataByAxis || [];
              (o = o && l.length === h.length),
                o &&
                  C(l, function (c, v) {
                    var d = h[v] || {},
                      y = c.seriesDataIndices || [],
                      p = d.seriesDataIndices || [];
                    (o =
                      o &&
                      c.value === d.value &&
                      c.axisType === d.axisType &&
                      c.axisId === d.axisId &&
                      y.length === p.length),
                      o &&
                        C(y, function (g, _) {
                          var m = p[_];
                          o =
                            o &&
                            g.seriesIndex === m.seriesIndex &&
                            g.dataIndex === m.dataIndex;
                        }),
                      a &&
                        C(c.seriesDataIndices, function (g) {
                          var _ = g.seriesIndex,
                            m = i[_],
                            w = a[_];
                          m && w && w.data !== m.data && (o = !1);
                        });
                  });
            }),
          (this._lastDataByCoordSys = e),
          (this._cbParamsList = i),
          !!o
        );
      }),
      (t.prototype._hide = function (e) {
        (this._lastDataByCoordSys = null),
          e({ type: "hideTip", from: this.uid });
      }),
      (t.prototype.dispose = function (e, i) {
        W.node ||
          !i.getDom() ||
          (Eu(this, "_updatePosition"),
          this._tooltipContent.dispose(),
          Yu("itemTooltip", i));
      }),
      (t.type = "tooltip"),
      t
    );
  })(Ee);
function Gi(r, t, e) {
  var i = t.ecModel,
    n;
  e ? ((n = new Tt(e, i, i)), (n = new Tt(t.option, n, i))) : (n = t);
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a];
    o &&
      (o instanceof Tt && (o = o.get("tooltip", !0)),
      B(o) && (o = { formatter: o }),
      o && (n = new Tt(o, n, i)));
  }
  return n;
}
function uc(r, t) {
  return r.dispatchAction || st(t.dispatchAction, t);
}
function YC(r, t, e, i, n, a, o) {
  var s = e.getSize(),
    u = s[0],
    l = s[1];
  return (
    a != null && (r + u + a + 2 > i ? (r -= u + a) : (r += a)),
    o != null && (t + l + o > n ? (t -= l + o) : (t += o)),
    [r, t]
  );
}
function $C(r, t, e, i, n) {
  var a = e.getSize(),
    o = a[0],
    s = a[1];
  return (
    (r = Math.min(r + o, i) - o),
    (t = Math.min(t + s, n) - s),
    (r = Math.max(r, 0)),
    (t = Math.max(t, 0)),
    [r, t]
  );
}
function XC(r, t, e, i) {
  var n = e[0],
    a = e[1],
    o = Math.ceil(Math.SQRT2 * i) + 8,
    s = 0,
    u = 0,
    l = t.width,
    f = t.height;
  switch (r) {
    case "inside":
      (s = t.x + l / 2 - n / 2), (u = t.y + f / 2 - a / 2);
      break;
    case "top":
      (s = t.x + l / 2 - n / 2), (u = t.y - a - o);
      break;
    case "bottom":
      (s = t.x + l / 2 - n / 2), (u = t.y + f + o);
      break;
    case "left":
      (s = t.x - n - o), (u = t.y + f / 2 - a / 2);
      break;
    case "right":
      (s = t.x + l + o), (u = t.y + f / 2 - a / 2);
  }
  return [s, u];
}
function lc(r) {
  return r === "center" || r === "middle";
}
function qC(r, t, e) {
  var i = fl(r).queryOptionMap,
    n = i.keys()[0];
  if (!(!n || n === "series")) {
    var a = Pn(t, n, i.get(n), {
        useDefault: !1,
        enableAll: !1,
        enableNone: !1,
      }),
      o = a.models[0];
    if (!!o) {
      var s = e.getViewOfComponentModel(o),
        u;
      if (
        (s.group.traverse(function (l) {
          var f = lt(l).tooltipConfig;
          if (f && f.name === r.name) return (u = l), !0;
        }),
        u)
      )
        return {
          componentMainType: n,
          componentIndex: o.componentIndex,
          el: u,
        };
    }
  }
}
var ZC = UC;
function fM(r) {
  Tn(DC),
    r.registerComponentModel(AC),
    r.registerComponentView(ZC),
    r.registerAction(
      { type: "showTip", event: "showTip", update: "tooltip:manuallyShowTip" },
      Et
    ),
    r.registerAction(
      { type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip" },
      Et
    );
}
var KC = (function (r) {
    rt(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (
        (e.type = t.type), (e.layoutMode = { type: "box", ignoreSize: !0 }), e
      );
    }
    return (
      (t.type = "title"),
      (t.defaultOption = {
        z: 6,
        show: !0,
        text: "",
        target: "blank",
        subtext: "",
        subtarget: "blank",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "#ccc",
        borderWidth: 0,
        padding: 5,
        itemGap: 10,
        textStyle: { fontSize: 18, fontWeight: "bold", color: "#464646" },
        subtextStyle: { fontSize: 12, color: "#6E7079" },
      }),
      t
    );
  })(ot),
  QC = (function (r) {
    rt(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = t.type), e;
    }
    return (
      (t.prototype.render = function (e, i, n) {
        if ((this.group.removeAll(), !!e.get("show"))) {
          var a = this.group,
            o = e.getModel("textStyle"),
            s = e.getModel("subtextStyle"),
            u = e.get("textAlign"),
            l = K(e.get("textBaseline"), e.get("textVerticalAlign")),
            f = new Bt({
              style: Je(
                o,
                { text: e.get("text"), fill: o.getTextColor() },
                { disableBox: !0 }
              ),
              z2: 10,
            }),
            h = f.getBoundingRect(),
            c = e.get("subtext"),
            v = new Bt({
              style: Je(
                s,
                {
                  text: c,
                  fill: s.getTextColor(),
                  y: h.height + e.get("itemGap"),
                  verticalAlign: "top",
                },
                { disableBox: !0 }
              ),
              z2: 10,
            }),
            d = e.get("link"),
            y = e.get("sublink"),
            p = e.get("triggerEvent", !0);
          (f.silent = !d && !p),
            (v.silent = !y && !p),
            d &&
              f.on("click", function () {
                Ph(d, "_" + e.get("target"));
              }),
            y &&
              v.on("click", function () {
                Ph(y, "_" + e.get("subtarget"));
              }),
            (lt(f).eventData = lt(v).eventData =
              p
                ? { componentType: "title", componentIndex: e.componentIndex }
                : null),
            a.add(f),
            c && a.add(v);
          var g = a.getBoundingRect(),
            _ = e.getBoxLayoutParams();
          (_.width = g.width), (_.height = g.height);
          var m = pi(
            _,
            { width: n.getWidth(), height: n.getHeight() },
            e.get("padding")
          );
          u ||
            ((u = e.get("left") || e.get("right")),
            u === "middle" && (u = "center"),
            u === "right"
              ? (m.x += m.width)
              : u === "center" && (m.x += m.width / 2)),
            l ||
              ((l = e.get("top") || e.get("bottom")),
              l === "center" && (l = "middle"),
              l === "bottom"
                ? (m.y += m.height)
                : l === "middle" && (m.y += m.height / 2),
              (l = l || "top")),
            (a.x = m.x),
            (a.y = m.y),
            a.markRedraw();
          var w = { align: u, verticalAlign: l };
          f.setStyle(w), v.setStyle(w), (g = a.getBoundingRect());
          var b = m.margin,
            S = e.getItemStyle(["color", "opacity"]);
          S.fill = e.get("backgroundColor");
          var D = new Ot({
            shape: {
              x: g.x - b[3],
              y: g.y - b[0],
              width: g.width + b[1] + b[3],
              height: g.height + b[0] + b[2],
              r: e.get("borderRadius"),
            },
            style: S,
            subPixelOptimize: !0,
            silent: !0,
          });
          a.add(D);
        }
      }),
      (t.type = "title"),
      t
    );
  })(Ee);
function hM(r) {
  r.registerComponentModel(KC), r.registerComponentView(QC);
}
var JC = function (r, t) {
    if (t === "all")
      return {
        type: "all",
        title: r.getLocaleModel().get(["legend", "selector", "all"]),
      };
    if (t === "inverse")
      return {
        type: "inverse",
        title: r.getLocaleModel().get(["legend", "selector", "inverse"]),
      };
  },
  jC = (function (r) {
    rt(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (
        (e.type = t.type), (e.layoutMode = { type: "box", ignoreSize: !0 }), e
      );
    }
    return (
      (t.prototype.init = function (e, i, n) {
        this.mergeDefaultAndTheme(e, n),
          (e.selected = e.selected || {}),
          this._updateSelector(e);
      }),
      (t.prototype.mergeOption = function (e, i) {
        r.prototype.mergeOption.call(this, e, i), this._updateSelector(e);
      }),
      (t.prototype._updateSelector = function (e) {
        var i = e.selector,
          n = this.ecModel;
        i === !0 && (i = e.selector = ["all", "inverse"]),
          k(i) &&
            C(i, function (a, o) {
              B(a) && (a = { type: a }), (i[o] = ut(a, JC(n, a.type)));
            });
      }),
      (t.prototype.optionUpdated = function () {
        this._updateData(this.ecModel);
        var e = this._data;
        if (e[0] && this.get("selectedMode") === "single") {
          for (var i = !1, n = 0; n < e.length; n++) {
            var a = e[n].get("name");
            if (this.isSelected(a)) {
              this.select(a), (i = !0);
              break;
            }
          }
          !i && this.select(e[0].get("name"));
        }
      }),
      (t.prototype._updateData = function (e) {
        var i = [],
          n = [];
        e.eachRawSeries(function (s) {
          var u = s.name;
          n.push(u);
          var l;
          if (s.legendVisualProvider) {
            var f = s.legendVisualProvider,
              h = f.getAllNames();
            e.isSeriesFiltered(s) || (n = n.concat(h)),
              h.length ? (i = i.concat(h)) : (l = !0);
          } else l = !0;
          l && ll(s) && i.push(s.name);
        }),
          (this._availableNames = n);
        var a = this.get("data") || i,
          o = U(
            a,
            function (s) {
              return (
                (B(s) || ht(s)) && (s = { name: s }),
                new Tt(s, this, this.ecModel)
              );
            },
            this
          );
        this._data = o;
      }),
      (t.prototype.getData = function () {
        return this._data;
      }),
      (t.prototype.select = function (e) {
        var i = this.option.selected,
          n = this.get("selectedMode");
        if (n === "single") {
          var a = this._data;
          C(a, function (o) {
            i[o.get("name")] = !1;
          });
        }
        i[e] = !0;
      }),
      (t.prototype.unSelect = function (e) {
        this.get("selectedMode") !== "single" && (this.option.selected[e] = !1);
      }),
      (t.prototype.toggleSelected = function (e) {
        var i = this.option.selected;
        i.hasOwnProperty(e) || (i[e] = !0),
          this[i[e] ? "unSelect" : "select"](e);
      }),
      (t.prototype.allSelect = function () {
        var e = this._data,
          i = this.option.selected;
        C(e, function (n) {
          i[n.get("name", !0)] = !0;
        });
      }),
      (t.prototype.inverseSelect = function () {
        var e = this._data,
          i = this.option.selected;
        C(e, function (n) {
          var a = n.get("name", !0);
          i.hasOwnProperty(a) || (i[a] = !0), (i[a] = !i[a]);
        });
      }),
      (t.prototype.isSelected = function (e) {
        var i = this.option.selected;
        return (
          !(i.hasOwnProperty(e) && !i[e]) && et(this._availableNames, e) >= 0
        );
      }),
      (t.prototype.getOrient = function () {
        return this.get("orient") === "vertical"
          ? { index: 1, name: "vertical" }
          : { index: 0, name: "horizontal" };
      }),
      (t.type = "legend.plain"),
      (t.dependencies = ["series"]),
      (t.defaultOption = {
        z: 4,
        show: !0,
        orient: "horizontal",
        left: "center",
        top: 0,
        align: "auto",
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "#ccc",
        borderRadius: 0,
        borderWidth: 0,
        padding: 5,
        itemGap: 10,
        itemWidth: 25,
        itemHeight: 14,
        symbolRotate: "inherit",
        symbolKeepAspect: !0,
        inactiveColor: "#ccc",
        inactiveBorderColor: "#ccc",
        inactiveBorderWidth: "auto",
        itemStyle: {
          color: "inherit",
          opacity: "inherit",
          borderColor: "inherit",
          borderWidth: "auto",
          borderCap: "inherit",
          borderJoin: "inherit",
          borderDashOffset: "inherit",
          borderMiterLimit: "inherit",
        },
        lineStyle: {
          width: "auto",
          color: "inherit",
          inactiveColor: "#ccc",
          inactiveWidth: 2,
          opacity: "inherit",
          type: "inherit",
          cap: "inherit",
          join: "inherit",
          dashOffset: "inherit",
          miterLimit: "inherit",
        },
        textStyle: { color: "#333" },
        selectedMode: !0,
        selector: !1,
        selectorLabel: {
          show: !0,
          borderRadius: 10,
          padding: [3, 5, 3, 5],
          fontSize: 12,
          fontFamily: "sans-serif",
          color: "#666",
          borderWidth: 1,
          borderColor: "#666",
        },
        emphasis: {
          selectorLabel: { show: !0, color: "#eee", backgroundColor: "#666" },
        },
        selectorPosition: "auto",
        selectorItemGap: 7,
        selectorButtonGap: 10,
        tooltip: { show: !1 },
      }),
      t
    );
  })(ot),
  $u = jC,
  jr = gt,
  Xu = C,
  ya = be,
  tD = (function (r) {
    rt(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = t.type), (e.newlineDisabled = !1), e;
    }
    return (
      (t.prototype.init = function () {
        this.group.add((this._contentGroup = new ya())),
          this.group.add((this._selectorGroup = new ya())),
          (this._isFirstRender = !0);
      }),
      (t.prototype.getContentGroup = function () {
        return this._contentGroup;
      }),
      (t.prototype.getSelectorGroup = function () {
        return this._selectorGroup;
      }),
      (t.prototype.render = function (e, i, n) {
        var a = this._isFirstRender;
        if (
          ((this._isFirstRender = !1), this.resetInner(), !!e.get("show", !0))
        ) {
          var o = e.get("align"),
            s = e.get("orient");
          (!o || o === "auto") &&
            (o =
              e.get("left") === "right" && s === "vertical" ? "right" : "left");
          var u = e.get("selector", !0),
            l = e.get("selectorPosition", !0);
          u &&
            (!l || l === "auto") &&
            (l = s === "horizontal" ? "end" : "start"),
            this.renderInner(o, e, i, n, u, s, l);
          var f = e.getBoxLayoutParams(),
            h = { width: n.getWidth(), height: n.getHeight() },
            c = e.get("padding"),
            v = pi(f, h, c),
            d = this.layoutInner(e, o, v, a, u, l),
            y = pi(nt({ width: d.width, height: d.height }, f), h, c);
          (this.group.x = y.x - d.x),
            (this.group.y = y.y - d.y),
            this.group.markRedraw(),
            this.group.add((this._backgroundEl = MC(d, e)));
        }
      }),
      (t.prototype.resetInner = function () {
        this.getContentGroup().removeAll(),
          this._backgroundEl && this.group.remove(this._backgroundEl),
          this.getSelectorGroup().removeAll();
      }),
      (t.prototype.renderInner = function (e, i, n, a, o, s, u) {
        var l = this.getContentGroup(),
          f = $(),
          h = i.get("selectedMode"),
          c = [];
        n.eachRawSeries(function (v) {
          !v.get("legendHoverLink") && c.push(v.id);
        }),
          Xu(
            i.getData(),
            function (v, d) {
              var y = v.get("name");
              if (
                !this.newlineDisabled &&
                (y === "" ||
                  y ===
                    `
`)
              ) {
                var p = new ya();
                (p.newline = !0), l.add(p);
                return;
              }
              var g = n.getSeriesByName(y)[0];
              if (!f.get(y))
                if (g) {
                  var _ = g.getData(),
                    m = _.getVisual("legendLineStyle") || {},
                    w = _.getVisual("legendIcon"),
                    b = _.getVisual("style"),
                    S = this._createItem(g, y, d, v, i, e, m, b, w, h, a);
                  S.on("click", jr(fc, y, null, a, c))
                    .on("mouseover", jr(qu, g.name, null, a, c))
                    .on("mouseout", jr(Zu, g.name, null, a, c)),
                    f.set(y, !0);
                } else
                  n.eachRawSeries(function (D) {
                    if (!f.get(y) && D.legendVisualProvider) {
                      var T = D.legendVisualProvider;
                      if (!T.containName(y)) return;
                      var x = T.indexOfName(y),
                        M = T.getItemVisual(x, "style"),
                        P = T.getItemVisual(x, "legendIcon"),
                        A = se(M.fill);
                      A &&
                        A[3] === 0 &&
                        ((A[3] = 0.2),
                        (M = O(O({}, M), { fill: yi(A, "rgba") })));
                      var L = this._createItem(
                        D,
                        y,
                        d,
                        v,
                        i,
                        e,
                        {},
                        M,
                        P,
                        h,
                        a
                      );
                      L.on("click", jr(fc, null, y, a, c))
                        .on("mouseover", jr(qu, null, y, a, c))
                        .on("mouseout", jr(Zu, null, y, a, c)),
                        f.set(y, !0);
                    }
                  }, this);
            },
            this
          ),
          o && this._createSelector(o, i, a, s, u);
      }),
      (t.prototype._createSelector = function (e, i, n, a, o) {
        var s = this.getSelectorGroup();
        Xu(e, function (l) {
          var f = l.type,
            h = new Bt({
              style: { x: 0, y: 0, align: "center", verticalAlign: "middle" },
              onclick: function () {
                n.dispatchAction({
                  type: f === "all" ? "legendAllSelect" : "legendInverseSelect",
                });
              },
            });
          s.add(h);
          var c = i.getModel("selectorLabel"),
            v = i.getModel(["emphasis", "selectorLabel"]);
          Y1(h, { normal: c, emphasis: v }, { defaultText: l.title }), wu(h);
        });
      }),
      (t.prototype._createItem = function (e, i, n, a, o, s, u, l, f, h, c) {
        var v = e.visualDrawType,
          d = o.get("itemWidth"),
          y = o.get("itemHeight"),
          p = o.isSelected(i),
          g = a.get("symbolRotate"),
          _ = a.get("symbolKeepAspect"),
          m = a.get("icon");
        f = m || f || "roundRect";
        var w = eD(f, a, u, l, v, p, c),
          b = new ya(),
          S = a.getModel("textStyle");
        if (q(e.getLegendIcon) && (!m || m === "inherit"))
          b.add(
            e.getLegendIcon({
              itemWidth: d,
              itemHeight: y,
              icon: f,
              iconRotate: g,
              itemStyle: w.itemStyle,
              lineStyle: w.lineStyle,
              symbolKeepAspect: _,
            })
          );
        else {
          var D =
            m === "inherit" && e.getData().getVisual("symbol")
              ? g === "inherit"
                ? e.getData().getVisual("symbolRotate")
                : g
              : 0;
          b.add(
            rD({
              itemWidth: d,
              itemHeight: y,
              icon: f,
              iconRotate: D,
              itemStyle: w.itemStyle,
              lineStyle: w.lineStyle,
              symbolKeepAspect: _,
            })
          );
        }
        var T = s === "left" ? d + 5 : -5,
          x = s,
          M = o.get("formatter"),
          P = i;
        B(M) && M
          ? (P = M.replace("{name}", i != null ? i : ""))
          : q(M) && (P = M(i));
        var A = a.get("inactiveColor");
        b.add(
          new Bt({
            style: Je(S, {
              text: P,
              x: T,
              y: y / 2,
              fill: p ? S.getTextColor() : A,
              align: x,
              verticalAlign: "middle",
            }),
          })
        );
        var L = new Ot({ shape: b.getBoundingRect(), invisible: !0 }),
          I = a.getModel("tooltip");
        return (
          I.get("show") &&
            bl({
              el: L,
              componentModel: o,
              itemName: i,
              itemTooltipOption: I.option,
            }),
          b.add(L),
          b.eachChild(function (R) {
            R.silent = !0;
          }),
          (L.silent = !h),
          this.getContentGroup().add(b),
          wu(b),
          (b.__legendDataIndex = n),
          b
        );
      }),
      (t.prototype.layoutInner = function (e, i, n, a, o, s) {
        var u = this.getContentGroup(),
          l = this.getSelectorGroup();
        hi(e.get("orient"), u, e.get("itemGap"), n.width, n.height);
        var f = u.getBoundingRect(),
          h = [-f.x, -f.y];
        if ((l.markRedraw(), u.markRedraw(), o)) {
          hi("horizontal", l, e.get("selectorItemGap", !0));
          var c = l.getBoundingRect(),
            v = [-c.x, -c.y],
            d = e.get("selectorButtonGap", !0),
            y = e.getOrient().index,
            p = y === 0 ? "width" : "height",
            g = y === 0 ? "height" : "width",
            _ = y === 0 ? "y" : "x";
          s === "end" ? (v[y] += f[p] + d) : (h[y] += c[p] + d),
            (v[1 - y] += f[g] / 2 - c[g] / 2),
            (l.x = v[0]),
            (l.y = v[1]),
            (u.x = h[0]),
            (u.y = h[1]);
          var m = { x: 0, y: 0 };
          return (
            (m[p] = f[p] + d + c[p]),
            (m[g] = Math.max(f[g], c[g])),
            (m[_] = Math.min(0, c[_] + v[1 - y])),
            m
          );
        } else return (u.x = h[0]), (u.y = h[1]), this.group.getBoundingRect();
      }),
      (t.prototype.remove = function () {
        this.getContentGroup().removeAll(), (this._isFirstRender = !0);
      }),
      (t.type = "legend.plain"),
      t
    );
  })(Ee);
function eD(r, t, e, i, n, a, o) {
  function s(p, g) {
    p.lineWidth === "auto" && (p.lineWidth = g.lineWidth > 0 ? 2 : 0),
      Xu(p, function (_, m) {
        p[m] === "inherit" && (p[m] = g[m]);
      });
  }
  var u = t.getModel("itemStyle"),
    l = u.getItemStyle(),
    f = r.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke",
    h = u.getShallow("decal");
  (l.decal = !h || h === "inherit" ? i.decal : Nu(h, o)),
    l.fill === "inherit" && (l.fill = i[n]),
    l.stroke === "inherit" && (l.stroke = i[f]),
    l.opacity === "inherit" && (l.opacity = (n === "fill" ? i : e).opacity),
    s(l, i);
  var c = t.getModel("lineStyle"),
    v = c.getLineStyle();
  if (
    (s(v, e),
    l.fill === "auto" && (l.fill = i.fill),
    l.stroke === "auto" && (l.stroke = i.fill),
    v.stroke === "auto" && (v.stroke = i.fill),
    !a)
  ) {
    var d = t.get("inactiveBorderWidth"),
      y = l[f];
    (l.lineWidth = d === "auto" ? (i.lineWidth > 0 && y ? 2 : 0) : l.lineWidth),
      (l.fill = t.get("inactiveColor")),
      (l.stroke = t.get("inactiveBorderColor")),
      (v.stroke = c.get("inactiveColor")),
      (v.lineWidth = c.get("inactiveWidth"));
  }
  return { itemStyle: l, lineStyle: v };
}
function rD(r) {
  var t = r.icon || "roundRect",
    e = zl(
      t,
      0,
      0,
      r.itemWidth,
      r.itemHeight,
      r.itemStyle.fill,
      r.symbolKeepAspect
    );
  return (
    e.setStyle(r.itemStyle),
    (e.rotation = ((r.iconRotate || 0) * Math.PI) / 180),
    e.setOrigin([r.itemWidth / 2, r.itemHeight / 2]),
    t.indexOf("empty") > -1 &&
      ((e.style.stroke = e.style.fill),
      (e.style.fill = "#fff"),
      (e.style.lineWidth = 2)),
    e
  );
}
function fc(r, t, e, i) {
  Zu(r, t, e, i),
    e.dispatchAction({ type: "legendToggleSelect", name: r != null ? r : t }),
    qu(r, t, e, i);
}
function Jg(r) {
  for (
    var t = r.getZr().storage.getDisplayList(), e, i = 0, n = t.length;
    i < n && !(e = t[i].states.emphasis);

  )
    i++;
  return e && e.hoverLayer;
}
function qu(r, t, e, i) {
  Jg(e) ||
    e.dispatchAction({
      type: "highlight",
      seriesName: r,
      name: t,
      excludeSeriesId: i,
    });
}
function Zu(r, t, e, i) {
  Jg(e) ||
    e.dispatchAction({
      type: "downplay",
      seriesName: r,
      name: t,
      excludeSeriesId: i,
    });
}
var jg = tD;
function iD(r) {
  var t = r.findComponents({ mainType: "legend" });
  t &&
    t.length &&
    r.filterSeries(function (e) {
      for (var i = 0; i < t.length; i++)
        if (!t[i].isSelected(e.name)) return !1;
      return !0;
    });
}
function Vi(r, t, e) {
  var i = {},
    n = r === "toggleSelected",
    a;
  return (
    e.eachComponent("legend", function (o) {
      n && a != null
        ? o[a ? "select" : "unSelect"](t.name)
        : r === "allSelect" || r === "inverseSelect"
        ? o[r]()
        : (o[r](t.name), (a = o.isSelected(t.name)));
      var s = o.getData();
      C(s, function (u) {
        var l = u.get("name");
        if (
          !(
            l ===
              `
` || l === ""
          )
        ) {
          var f = o.isSelected(l);
          i.hasOwnProperty(l) ? (i[l] = i[l] && f) : (i[l] = f);
        }
      });
    }),
    r === "allSelect" || r === "inverseSelect"
      ? { selected: i }
      : { name: t.name, selected: i }
  );
}
function nD(r) {
  r.registerAction(
    "legendToggleSelect",
    "legendselectchanged",
    gt(Vi, "toggleSelected")
  ),
    r.registerAction("legendAllSelect", "legendselectall", gt(Vi, "allSelect")),
    r.registerAction(
      "legendInverseSelect",
      "legendinverseselect",
      gt(Vi, "inverseSelect")
    ),
    r.registerAction("legendSelect", "legendselected", gt(Vi, "select")),
    r.registerAction("legendUnSelect", "legendunselected", gt(Vi, "unSelect"));
}
function ty(r) {
  r.registerComponentModel($u),
    r.registerComponentView(jg),
    r.registerProcessor(r.PRIORITY.PROCESSOR.SERIES_FILTER, iD),
    r.registerSubTypeDefaulter("legend", function () {
      return "plain";
    }),
    nD(r);
}
var aD = (function (r) {
  rt(t, r);
  function t() {
    var e = (r !== null && r.apply(this, arguments)) || this;
    return (e.type = t.type), e;
  }
  return (
    (t.prototype.setScrollDataIndex = function (e) {
      this.option.scrollDataIndex = e;
    }),
    (t.prototype.init = function (e, i, n) {
      var a = Ll(e);
      r.prototype.init.call(this, e, i, n), hc(this, e, a);
    }),
    (t.prototype.mergeOption = function (e, i) {
      r.prototype.mergeOption.call(this, e, i), hc(this, this.option, e);
    }),
    (t.type = "legend.scroll"),
    (t.defaultOption = aw($u.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"],
      },
      pageIconColor: "#2f4554",
      pageIconInactiveColor: "#aaa",
      pageIconSize: 15,
      pageTextStyle: { color: "#333" },
      animationDurationUpdate: 800,
    })),
    t
  );
})($u);
function hc(r, t, e) {
  var i = r.getOrient(),
    n = [1, 1];
  (n[i.index] = 0), _n(t, e, { type: "box", ignoreSize: !!n });
}
var oD = aD,
  vc = be,
  Ys = ["width", "height"],
  $s = ["x", "y"],
  sD = (function (r) {
    rt(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (
        (e.type = t.type), (e.newlineDisabled = !0), (e._currentIndex = 0), e
      );
    }
    return (
      (t.prototype.init = function () {
        r.prototype.init.call(this),
          this.group.add((this._containerGroup = new vc())),
          this._containerGroup.add(this.getContentGroup()),
          this.group.add((this._controllerGroup = new vc()));
      }),
      (t.prototype.resetInner = function () {
        r.prototype.resetInner.call(this),
          this._controllerGroup.removeAll(),
          this._containerGroup.removeClipPath(),
          (this._containerGroup.__rectSize = null);
      }),
      (t.prototype.renderInner = function (e, i, n, a, o, s, u) {
        var l = this;
        r.prototype.renderInner.call(this, e, i, n, a, o, s, u);
        var f = this._controllerGroup,
          h = i.get("pageIconSize", !0),
          c = k(h) ? h : [h, h];
        d("pagePrev", 0);
        var v = i.getModel("pageTextStyle");
        f.add(
          new Bt({
            name: "pageText",
            style: {
              text: "xx/xx",
              fill: v.getTextColor(),
              font: v.getFont(),
              verticalAlign: "middle",
              align: "center",
            },
            silent: !0,
          })
        ),
          d("pageNext", 1);
        function d(y, p) {
          var g = y + "DataIndex",
            _ = Sl(
              i.get("pageIcons", !0)[i.getOrient().name][p],
              { onclick: st(l._pageGo, l, g, i, a) },
              { x: -c[0] / 2, y: -c[1] / 2, width: c[0], height: c[1] }
            );
          (_.name = y), f.add(_);
        }
      }),
      (t.prototype.layoutInner = function (e, i, n, a, o, s) {
        var u = this.getSelectorGroup(),
          l = e.getOrient().index,
          f = Ys[l],
          h = $s[l],
          c = Ys[1 - l],
          v = $s[1 - l];
        o && hi("horizontal", u, e.get("selectorItemGap", !0));
        var d = e.get("selectorButtonGap", !0),
          y = u.getBoundingRect(),
          p = [-y.x, -y.y],
          g = X(n);
        o && (g[f] = n[f] - y[f] - d);
        var _ = this._layoutContentAndController(e, a, g, l, f, c, v, h);
        if (o) {
          if (s === "end") p[l] += _[f] + d;
          else {
            var m = y[f] + d;
            (p[l] -= m), (_[h] -= m);
          }
          (_[f] += y[f] + d),
            (p[1 - l] += _[v] + _[c] / 2 - y[c] / 2),
            (_[c] = Math.max(_[c], y[c])),
            (_[v] = Math.min(_[v], y[v] + p[1 - l])),
            (u.x = p[0]),
            (u.y = p[1]),
            u.markRedraw();
        }
        return _;
      }),
      (t.prototype._layoutContentAndController = function (
        e,
        i,
        n,
        a,
        o,
        s,
        u,
        l
      ) {
        var f = this.getContentGroup(),
          h = this._containerGroup,
          c = this._controllerGroup;
        hi(
          e.get("orient"),
          f,
          e.get("itemGap"),
          a ? n.width : null,
          a ? null : n.height
        ),
          hi("horizontal", c, e.get("pageButtonItemGap", !0));
        var v = f.getBoundingRect(),
          d = c.getBoundingRect(),
          y = (this._showController = v[o] > n[o]),
          p = [-v.x, -v.y];
        i || (p[a] = f[l]);
        var g = [0, 0],
          _ = [-d.x, -d.y],
          m = K(e.get("pageButtonGap", !0), e.get("itemGap", !0));
        if (y) {
          var w = e.get("pageButtonPosition", !0);
          w === "end" ? (_[a] += n[o] - d[o]) : (g[a] += d[o] + m);
        }
        (_[1 - a] += v[s] / 2 - d[s] / 2),
          f.setPosition(p),
          h.setPosition(g),
          c.setPosition(_);
        var b = { x: 0, y: 0 };
        if (
          ((b[o] = y ? n[o] : v[o]),
          (b[s] = Math.max(v[s], d[s])),
          (b[u] = Math.min(0, d[u] + _[1 - a])),
          (h.__rectSize = n[o]),
          y)
        ) {
          var S = { x: 0, y: 0 };
          (S[o] = Math.max(n[o] - d[o] - m, 0)),
            (S[s] = b[s]),
            h.setClipPath(new Ot({ shape: S })),
            (h.__rectSize = S[o]);
        } else
          c.eachChild(function (T) {
            T.attr({ invisible: !0, silent: !0 });
          });
        var D = this._getPageInfo(e);
        return (
          D.pageIndex != null &&
            In(
              f,
              { x: D.contentPosition[0], y: D.contentPosition[1] },
              y ? e : null
            ),
          this._updatePageInfoView(e, D),
          b
        );
      }),
      (t.prototype._pageGo = function (e, i, n) {
        var a = this._getPageInfo(i)[e];
        a != null &&
          n.dispatchAction({
            type: "legendScroll",
            scrollDataIndex: a,
            legendId: i.id,
          });
      }),
      (t.prototype._updatePageInfoView = function (e, i) {
        var n = this._controllerGroup;
        C(["pagePrev", "pageNext"], function (f) {
          var h = f + "DataIndex",
            c = i[h] != null,
            v = n.childOfName(f);
          v &&
            (v.setStyle(
              "fill",
              c
                ? e.get("pageIconColor", !0)
                : e.get("pageIconInactiveColor", !0)
            ),
            (v.cursor = c ? "pointer" : "default"));
        });
        var a = n.childOfName("pageText"),
          o = e.get("pageFormatter"),
          s = i.pageIndex,
          u = s != null ? s + 1 : 0,
          l = i.pageCount;
        a &&
          o &&
          a.setStyle(
            "text",
            B(o)
              ? o
                  .replace("{current}", u == null ? "" : u + "")
                  .replace("{total}", l == null ? "" : l + "")
              : o({ current: u, total: l })
          );
      }),
      (t.prototype._getPageInfo = function (e) {
        var i = e.get("scrollDataIndex", !0),
          n = this.getContentGroup(),
          a = this._containerGroup.__rectSize,
          o = e.getOrient().index,
          s = Ys[o],
          u = $s[o],
          l = this._findTargetItemIndex(i),
          f = n.children(),
          h = f[l],
          c = f.length,
          v = c ? 1 : 0,
          d = {
            contentPosition: [n.x, n.y],
            pageCount: v,
            pageIndex: v - 1,
            pagePrevDataIndex: null,
            pageNextDataIndex: null,
          };
        if (!h) return d;
        var y = w(h);
        d.contentPosition[o] = -y.s;
        for (var p = l + 1, g = y, _ = y, m = null; p <= c; ++p)
          (m = w(f[p])),
            ((!m && _.e > g.s + a) || (m && !b(m, g.s))) &&
              (_.i > g.i ? (g = _) : (g = m),
              g &&
                (d.pageNextDataIndex == null && (d.pageNextDataIndex = g.i),
                ++d.pageCount)),
            (_ = m);
        for (var p = l - 1, g = y, _ = y, m = null; p >= -1; --p)
          (m = w(f[p])),
            (!m || !b(_, m.s)) &&
              g.i < _.i &&
              ((_ = g),
              d.pagePrevDataIndex == null && (d.pagePrevDataIndex = g.i),
              ++d.pageCount,
              ++d.pageIndex),
            (g = m);
        return d;
        function w(S) {
          if (S) {
            var D = S.getBoundingRect(),
              T = D[u] + S[u];
            return { s: T, e: T + D[s], i: S.__legendDataIndex };
          }
        }
        function b(S, D) {
          return S.e >= D && S.s <= D + a;
        }
      }),
      (t.prototype._findTargetItemIndex = function (e) {
        if (!this._showController) return 0;
        var i,
          n = this.getContentGroup(),
          a;
        return (
          n.eachChild(function (o, s) {
            var u = o.__legendDataIndex;
            a == null && u != null && (a = s), u === e && (i = s);
          }),
          i != null ? i : a
        );
      }),
      (t.type = "legend.scroll"),
      t
    );
  })(jg),
  uD = sD;
function lD(r) {
  r.registerAction("legendScroll", "legendscroll", function (t, e) {
    var i = t.scrollDataIndex;
    i != null &&
      e.eachComponent(
        { mainType: "legend", subType: "scroll", query: t },
        function (n) {
          n.setScrollDataIndex(i);
        }
      );
  });
}
function fD(r) {
  Tn(ty), r.registerComponentModel(oD), r.registerComponentView(uD), lD(r);
}
function vM(r) {
  Tn(ty), Tn(fD);
}
var hD = (function (r) {
    rt(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = "dataset"), e;
    }
    return (
      (t.prototype.init = function (e, i, n) {
        r.prototype.init.call(this, e, i, n),
          (this._sourceManager = new Bp(this)),
          Kh(this);
      }),
      (t.prototype.mergeOption = function (e, i) {
        r.prototype.mergeOption.call(this, e, i), Kh(this);
      }),
      (t.prototype.optionUpdated = function () {
        this._sourceManager.dirty();
      }),
      (t.prototype.getSourceManager = function () {
        return this._sourceManager;
      }),
      (t.type = "dataset"),
      (t.defaultOption = { seriesLayoutBy: we }),
      t
    );
  })(ot),
  vD = (function (r) {
    rt(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = "dataset"), e;
    }
    return (t.type = "dataset"), t;
  })(Ee);
function cM(r) {
  r.registerComponentModel(hD), r.registerComponentView(vD);
}
export {
  ED as $,
  dx as A,
  j as B,
  C,
  eh as D,
  en as E,
  Tl as F,
  Yd as G,
  et as H,
  In as I,
  kD as J,
  pi as K,
  wD as L,
  k as M,
  ht as N,
  U as O,
  di as P,
  kr as Q,
  O as R,
  Qe as S,
  al as T,
  aM as U,
  RD as V,
  ID as W,
  LD as X,
  Y1 as Y,
  Bt as Z,
  rt as _,
  cM as a,
  wn as a$,
  _a as a0,
  Rd as a1,
  M1 as a2,
  an as a3,
  st as a4,
  gt as a5,
  zD as a6,
  TD as a7,
  kf as a8,
  Qa as a9,
  Je as aA,
  lw as aB,
  Ee as aC,
  Re as aD,
  Tt as aE,
  _o as aF,
  gu as aG,
  yu as aH,
  Sl as aI,
  bl as aJ,
  lM as aK,
  MC as aL,
  zc as aM,
  W as aN,
  Si as aO,
  lo as aP,
  ka as aQ,
  Yy as aR,
  ts as aS,
  $ as aT,
  HD as aU,
  DD as aV,
  le as aW,
  uo as aX,
  YD as aY,
  aw as aZ,
  aS as a_,
  VD as aa,
  be as ab,
  zl as ac,
  ut as ad,
  X as ae,
  dT as af,
  Te as ag,
  Fd as ah,
  Ot as ai,
  F1 as aj,
  B1 as ak,
  H1 as al,
  UD as am,
  ND as an,
  Qd as ao,
  Oe as ap,
  F as aq,
  Wp as ar,
  k1 as as,
  Ns as at,
  Ll as au,
  ot as av,
  FD as aw,
  _n as ax,
  B as ay,
  BD as az,
  vM as b,
  mD as b$,
  hu as b0,
  nl as b1,
  Ln as b2,
  wu as b3,
  SD as b4,
  wl as b5,
  Ro as b6,
  KT as b7,
  Ig as b8,
  WD as b9,
  OD as bA,
  Nl as bB,
  QD as bC,
  KD as bD,
  Za as bE,
  kv as bF,
  me as bG,
  ax as bH,
  ZD as bI,
  eM as bJ,
  jD as bK,
  sM as bL,
  uM as bM,
  hx as bN,
  tM as bO,
  qD as bP,
  JD as bQ,
  Wv as bR,
  Vx as bS,
  z1 as bT,
  Qx as bU,
  Et as bV,
  pD as bW,
  wc as bX,
  gD as bY,
  yi as bZ,
  _D as b_,
  bb as ba,
  hn as bb,
  DC as bc,
  Dp as bd,
  xe as be,
  $D as bf,
  XD as bg,
  Tp as bh,
  lx as bi,
  sx as bj,
  fx as bk,
  bD as bl,
  ue as bm,
  Ka as bn,
  _i as bo,
  $d as bp,
  Mg as bq,
  Ac as br,
  pt as bs,
  yn as bt,
  Mn as bu,
  AD as bv,
  S0 as bw,
  _1 as bx,
  yD as by,
  Hc as bz,
  hM as c,
  Se as c0,
  se as c1,
  CD as c2,
  PD as c3,
  rM as c4,
  nx as c5,
  sb as c6,
  GD as c7,
  Yp as c8,
  Eu as c9,
  ku as ca,
  xt as cb,
  xo as cc,
  mw as cd,
  Td as ce,
  MD as cf,
  ub as cg,
  xD as ch,
  ln as ci,
  hi as cj,
  fM as d,
  J as e,
  zd as f,
  nt as g,
  Nc as h,
  oM as i,
  it as j,
  Ey as k,
  dD as l,
  o_ as m,
  Xn as n,
  yt as o,
  q as p,
  l_ as q,
  K as r,
  ft as s,
  lt as t,
  Tn as u,
  Pt as v,
  cx as w,
  zt as x,
  iM as y,
  nM as z,
};
//# sourceMappingURL=install.0dc8b161.js.map
