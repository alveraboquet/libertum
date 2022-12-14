import {
  n as de,
  d as tt,
  e as mt,
  c as ve,
  u as yt,
  r as bt,
} from "./index.ef7539b9.js";
import {
  P as Lt,
  e as P,
  D as Ee,
  r as we,
  f as at,
  g as _t,
  S as Ve,
  h as St,
  j as xt,
  k as Ge,
  l as Se,
  q as Ct,
  m as Mt,
  n as ie,
  T as At,
  o as De,
  B as ze,
  p as Ye,
  s as Tt,
  t as xe,
  v as O,
  w as wt,
  x as Ce,
  y as Pt,
  z as rt,
  A as Dt,
  C as ue,
  E as It,
  F as Bt,
  G as Q,
  H as Fe,
  I as fe,
  J as Nt,
  K as kt,
  L as $t,
  M as Pe,
  N as nt,
  O as Rt,
  Q as Ot,
  _ as Ie,
  Z as Et,
  R as U,
  V as Vt,
  W as Gt,
  X as zt,
  Y as Yt,
  $ as Ft,
  a0 as Xt,
  a1 as it,
  a2 as jt,
  a3 as Ut,
  a4 as Xe,
  a5 as st,
  a6 as qt,
  a7 as Ht,
  a8 as Zt,
  a9 as Wt,
  aa as Kt,
  u as Jt,
  i as Qt,
  a as ea,
  b as ta,
  c as aa,
  d as ra,
  U as na,
} from "./install.0dc8b161.js";
import { a as je, f as ia } from "./numberformat.a1b2908a.js";
import { c as sa } from "./createSeriesDataSimply.dc3f9863.js";
var oa = function () {
    var e = this,
      r = e.$createElement,
      a = e._self._c || r;
    return a(
      "span",
      e._b(
        {
          staticClass: "material-design-icon eye-off-icon",
          attrs: {
            "aria-hidden": !e.title,
            "aria-label": e.title,
            role: "img",
          },
          on: {
            click: function (t) {
              return e.$emit("click", t);
            },
          },
        },
        "span",
        e.$attrs,
        !1
      ),
      [
        a(
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
            a(
              "path",
              {
                attrs: {
                  d: "M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z",
                },
              },
              [e.title ? a("title", [e._v(e._s(e.title))]) : e._e()]
            ),
          ]
        ),
      ]
    );
  },
  la = [];
const ca = {
    name: "EyeOffIcon",
    props: {
      title: { type: String },
      fillColor: { type: String, default: "currentColor" },
      size: { type: Number, default: 24 },
    },
  },
  Ue = {};
var va = de(ca, oa, la, !1, ua, null, null, null);
function ua(e) {
  for (let r in Ue) this[r] = Ue[r];
}
var fa = (function () {
    return va.exports;
  })(),
  ga = function () {
    var e = this,
      r = e.$createElement,
      a = e._self._c || r;
    return a(
      "span",
      e._b(
        {
          staticClass: "material-design-icon eye-icon",
          attrs: {
            "aria-hidden": !e.title,
            "aria-label": e.title,
            role: "img",
          },
          on: {
            click: function (t) {
              return e.$emit("click", t);
            },
          },
        },
        "span",
        e.$attrs,
        !1
      ),
      [
        a(
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
            a(
              "path",
              {
                attrs: {
                  d: "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",
                },
              },
              [e.title ? a("title", [e._v(e._s(e.title))]) : e._e()]
            ),
          ]
        ),
      ]
    );
  },
  ha = [];
const da = {
    name: "EyeIcon",
    props: {
      title: { type: String },
      fillColor: { type: String, default: "currentColor" },
      size: { type: Number, default: 24 },
    },
  },
  qe = {};
var pa = de(da, ga, ha, !1, ma, null, null, null);
function ma(e) {
  for (let r in qe) this[r] = qe[r];
}
var ya = (function () {
    return pa.exports;
  })(),
  J = Math.PI * 2,
  Y = Lt.CMD,
  ba = ["top", "right", "bottom", "left"];
function La(e, r, a, t, n) {
  var o = a.width,
    i = a.height;
  switch (e) {
    case "top":
      t.set(a.x + o / 2, a.y - r), n.set(0, -1);
      break;
    case "bottom":
      t.set(a.x + o / 2, a.y + i + r), n.set(0, 1);
      break;
    case "left":
      t.set(a.x - r, a.y + i / 2), n.set(-1, 0);
      break;
    case "right":
      t.set(a.x + o + r, a.y + i / 2), n.set(1, 0);
      break;
  }
}
function _a(e, r, a, t, n, o, i, l, v) {
  (i -= e), (l -= r);
  var u = Math.sqrt(i * i + l * l);
  (i /= u), (l /= u);
  var s = i * a + e,
    d = l * a + r;
  if (Math.abs(t - n) % J < 1e-4) return (v[0] = s), (v[1] = d), u - a;
  if (o) {
    var g = t;
    (t = ie(n)), (n = ie(g));
  } else (t = ie(t)), (n = ie(n));
  t > n && (n += J);
  var c = Math.atan2(l, i);
  if ((c < 0 && (c += J), (c >= t && c <= n) || (c + J >= t && c + J <= n)))
    return (v[0] = s), (v[1] = d), u - a;
  var f = a * Math.cos(t) + e,
    h = a * Math.sin(t) + r,
    p = a * Math.cos(n) + e,
    m = a * Math.sin(n) + r,
    y = (f - i) * (f - i) + (h - l) * (h - l),
    b = (p - i) * (p - i) + (m - l) * (m - l);
  return y < b
    ? ((v[0] = f), (v[1] = h), Math.sqrt(y))
    : ((v[0] = p), (v[1] = m), Math.sqrt(b));
}
function ge(e, r, a, t, n, o, i, l) {
  var v = n - e,
    u = o - r,
    s = a - e,
    d = t - r,
    g = Math.sqrt(s * s + d * d);
  (s /= g), (d /= g);
  var c = v * s + u * d,
    f = c / g;
  l && (f = Math.min(Math.max(f, 0), 1)), (f *= g);
  var h = (i[0] = e + f * s),
    p = (i[1] = r + f * d);
  return Math.sqrt((h - n) * (h - n) + (p - o) * (p - o));
}
function ot(e, r, a, t, n, o, i) {
  a < 0 && ((e = e + a), (a = -a)), t < 0 && ((r = r + t), (t = -t));
  var l = e + a,
    v = r + t,
    u = (i[0] = Math.min(Math.max(n, e), l)),
    s = (i[1] = Math.min(Math.max(o, r), v));
  return Math.sqrt((u - n) * (u - n) + (s - o) * (s - o));
}
var R = [];
function Sa(e, r, a) {
  var t = ot(r.x, r.y, r.width, r.height, e.x, e.y, R);
  return a.set(R[0], R[1]), t;
}
function xa(e, r, a) {
  for (
    var t = 0,
      n = 0,
      o = 0,
      i = 0,
      l,
      v,
      u = 1 / 0,
      s = r.data,
      d = e.x,
      g = e.y,
      c = 0;
    c < s.length;

  ) {
    var f = s[c++];
    c === 1 && ((t = s[c]), (n = s[c + 1]), (o = t), (i = n));
    var h = u;
    switch (f) {
      case Y.M:
        (o = s[c++]), (i = s[c++]), (t = o), (n = i);
        break;
      case Y.L:
        (h = ge(t, n, s[c], s[c + 1], d, g, R, !0)), (t = s[c++]), (n = s[c++]);
        break;
      case Y.C:
        (h = Mt(t, n, s[c++], s[c++], s[c++], s[c++], s[c], s[c + 1], d, g, R)),
          (t = s[c++]),
          (n = s[c++]);
        break;
      case Y.Q:
        (h = Ct(t, n, s[c++], s[c++], s[c], s[c + 1], d, g, R)),
          (t = s[c++]),
          (n = s[c++]);
        break;
      case Y.A:
        var p = s[c++],
          m = s[c++],
          y = s[c++],
          b = s[c++],
          x = s[c++],
          S = s[c++];
        c += 1;
        var T = !!(1 - s[c++]);
        (l = Math.cos(x) * y + p),
          (v = Math.sin(x) * b + m),
          c <= 1 && ((o = l), (i = v));
        var M = ((d - p) * b) / y + p;
        (h = _a(p, m, b, x, x + S, T, M, g, R)),
          (t = Math.cos(x + S) * y + p),
          (n = Math.sin(x + S) * b + m);
        break;
      case Y.R:
        (o = t = s[c++]), (i = n = s[c++]);
        var L = s[c++],
          C = s[c++];
        h = ot(o, i, L, C, d, g, R);
        break;
      case Y.Z:
        (h = ge(t, n, o, i, d, g, R, !0)), (t = o), (n = i);
        break;
    }
    h < u && ((u = h), a.set(R[0], R[1]));
  }
  return u;
}
var E = new P(),
  _ = new P(),
  A = new P(),
  G = new P(),
  V = new P();
function He(e, r) {
  if (!!e) {
    var a = e.getTextGuideLine(),
      t = e.getTextContent();
    if (!!(t && a)) {
      var n = e.textGuideLineConfig || {},
        o = [
          [0, 0],
          [0, 0],
          [0, 0],
        ],
        i = n.candidates || ba,
        l = t.getBoundingRect().clone();
      l.applyTransform(t.getComputedTransform());
      var v = 1 / 0,
        u = n.anchor,
        s = e.getComputedTransform(),
        d = s && St([], s),
        g = r.get("length2") || 0;
      u && A.copy(u);
      for (var c = 0; c < i.length; c++) {
        var f = i[c];
        La(f, 0, l, E, G), P.scaleAndAdd(_, E, G, g), _.transform(d);
        var h = e.getBoundingRect(),
          p = u
            ? u.distance(_)
            : e instanceof xt
            ? xa(_, e.path, A)
            : Sa(_, h, A);
        p < v &&
          ((v = p),
          _.transform(s),
          A.transform(s),
          A.toArray(o[0]),
          _.toArray(o[1]),
          E.toArray(o[2]));
      }
      lt(o, r.get("minTurnAngle")), a.setShape({ points: o });
    }
  }
}
var he = [],
  I = new P();
function lt(e, r) {
  if (r <= 180 && r > 0) {
    (r = (r / 180) * Math.PI),
      E.fromArray(e[0]),
      _.fromArray(e[1]),
      A.fromArray(e[2]),
      P.sub(G, E, _),
      P.sub(V, A, _);
    var a = G.len(),
      t = V.len();
    if (!(a < 0.001 || t < 0.001)) {
      G.scale(1 / a), V.scale(1 / t);
      var n = G.dot(V),
        o = Math.cos(r);
      if (o < n) {
        var i = ge(_.x, _.y, A.x, A.y, E.x, E.y, he, !1);
        I.fromArray(he), I.scaleAndAdd(V, i / Math.tan(Math.PI - r));
        var l =
          A.x !== _.x ? (I.x - _.x) / (A.x - _.x) : (I.y - _.y) / (A.y - _.y);
        if (isNaN(l)) return;
        l < 0 ? P.copy(I, _) : l > 1 && P.copy(I, A), I.toArray(e[1]);
      }
    }
  }
}
function Ca(e, r, a) {
  if (a <= 180 && a > 0) {
    (a = (a / 180) * Math.PI),
      E.fromArray(e[0]),
      _.fromArray(e[1]),
      A.fromArray(e[2]),
      P.sub(G, _, E),
      P.sub(V, A, _);
    var t = G.len(),
      n = V.len();
    if (!(t < 0.001 || n < 0.001)) {
      G.scale(1 / t), V.scale(1 / n);
      var o = G.dot(r),
        i = Math.cos(a);
      if (o < i) {
        var l = ge(_.x, _.y, A.x, A.y, E.x, E.y, he, !1);
        I.fromArray(he);
        var v = Math.PI / 2,
          u = Math.acos(V.dot(r)),
          s = v + u - a;
        if (s >= v) P.copy(I, A);
        else {
          I.scaleAndAdd(V, l / Math.tan(Math.PI / 2 - s));
          var d =
            A.x !== _.x ? (I.x - _.x) / (A.x - _.x) : (I.y - _.y) / (A.y - _.y);
          if (isNaN(d)) return;
          d < 0 ? P.copy(I, _) : d > 1 && P.copy(I, A);
        }
        I.toArray(e[1]);
      }
    }
  }
}
function Ze(e, r, a, t) {
  var n = a === "normal",
    o = n ? e : e.ensureState(a);
  o.ignore = r;
  var i = t.get("smooth");
  i && i === !0 && (i = 0.3),
    (o.shape = o.shape || {}),
    i > 0 && (o.shape.smooth = i);
  var l = t.getModel("lineStyle").getLineStyle();
  n ? e.useStyle(l) : (o.style = l);
}
function Ma(e, r) {
  var a = r.smooth,
    t = r.points;
  if (!!t)
    if ((e.moveTo(t[0][0], t[0][1]), a > 0 && t.length >= 3)) {
      var n = Ge(t[0], t[1]),
        o = Ge(t[1], t[2]);
      if (!n || !o) {
        e.lineTo(t[1][0], t[1][1]), e.lineTo(t[2][0], t[2][1]);
        return;
      }
      var i = Math.min(n, o) * a,
        l = Se([], t[1], t[0], i / n),
        v = Se([], t[1], t[2], i / o),
        u = Se([], l, v, 0.5);
      e.bezierCurveTo(l[0], l[1], l[0], l[1], u[0], u[1]),
        e.bezierCurveTo(v[0], v[1], v[0], v[1], t[2][0], t[2][1]);
    } else for (var s = 1; s < t.length; s++) e.lineTo(t[s][0], t[s][1]);
}
function ct(e, r, a) {
  var t = e.getTextGuideLine(),
    n = e.getTextContent();
  if (!n) {
    t && e.removeTextGuideLine();
    return;
  }
  for (
    var o = r.normal, i = o.get("show"), l = n.ignore, v = 0;
    v < Ee.length;
    v++
  ) {
    var u = Ee[v],
      s = r[u],
      d = u === "normal";
    if (s) {
      var g = s.get("show"),
        c = d ? l : we(n.states[u] && n.states[u].ignore, l);
      if (c || !we(g, i)) {
        var f = d ? t : t && t.states[u];
        f && (f.ignore = !0);
        continue;
      }
      t ||
        ((t = new at()),
        e.setTextGuideLine(t),
        !d && (l || !i) && Ze(t, !0, "normal", r.normal),
        e.stateProxy && (t.stateProxy = e.stateProxy)),
        Ze(t, !1, u, s);
    }
  }
  if (t) {
    _t(t.style, a), (t.style.fill = null);
    var h = o.get("showAbove"),
      p = (e.textGuideLineConfig = e.textGuideLineConfig || {});
    (p.showAbove = h || !1), (t.buildPath = Ma);
  }
}
function vt(e, r) {
  r = r || "labelLine";
  for (var a = { normal: e.getModel(r) }, t = 0; t < Ve.length; t++) {
    var n = Ve[t];
    a[n] = e.getModel([n, r]);
  }
  return a;
}
function Aa(e) {
  if (e) {
    for (var r = [], a = 0; a < e.length; a++) r.push(e[a].slice());
    return r;
  }
}
function Ta(e, r) {
  var a = e.label,
    t = r && r.getTextGuideLine();
  return {
    dataIndex: e.dataIndex,
    dataType: e.dataType,
    seriesIndex: e.seriesModel.seriesIndex,
    text: e.label.style.text,
    rect: e.hostRect,
    labelRect: e.rect,
    align: a.style.align,
    verticalAlign: a.style.verticalAlign,
    labelLinePoints: Aa(t && t.shape.points),
  };
}
var We = ["align", "verticalAlign", "width", "height", "fontSize"],
  N = new At(),
  Me = De(),
  wa = De();
function se(e, r, a) {
  for (var t = 0; t < a.length; t++) {
    var n = a[t];
    r[n] != null && (e[n] = r[n]);
  }
}
var oe = ["x", "y", "rotation"],
  Pa = (function () {
    function e() {
      (this._labelList = []), (this._chartViewList = []);
    }
    return (
      (e.prototype.clearLabels = function () {
        (this._labelList = []), (this._chartViewList = []);
      }),
      (e.prototype._addLabel = function (r, a, t, n, o) {
        var i = n.style,
          l = n.__hostTarget,
          v = l.textConfig || {},
          u = n.getComputedTransform(),
          s = n.getBoundingRect().plain();
        ze.applyTransform(s, s, u),
          u
            ? N.setLocalTransform(u)
            : ((N.x = N.y = N.rotation = N.originX = N.originY = 0),
              (N.scaleX = N.scaleY = 1));
        var d = n.__hostTarget,
          g;
        if (d) {
          g = d.getBoundingRect().plain();
          var c = d.getComputedTransform();
          ze.applyTransform(g, g, c);
        }
        var f = g && d.getTextGuideLine();
        this._labelList.push({
          label: n,
          labelLine: f,
          seriesModel: t,
          dataIndex: r,
          dataType: a,
          layoutOption: o,
          computedLayoutOption: null,
          rect: s,
          hostRect: g,
          priority: g ? g.width * g.height : 0,
          defaultAttr: {
            ignore: n.ignore,
            labelGuideIgnore: f && f.ignore,
            x: N.x,
            y: N.y,
            scaleX: N.scaleX,
            scaleY: N.scaleY,
            rotation: N.rotation,
            style: {
              x: i.x,
              y: i.y,
              align: i.align,
              verticalAlign: i.verticalAlign,
              width: i.width,
              height: i.height,
              fontSize: i.fontSize,
            },
            cursor: n.cursor,
            attachedPos: v.position,
            attachedRot: v.rotation,
          },
        });
      }),
      (e.prototype.addLabelsOfSeries = function (r) {
        var a = this;
        this._chartViewList.push(r);
        var t = r.__model,
          n = t.get("labelLayout");
        !(Ye(n) || Tt(n).length) ||
          r.group.traverse(function (o) {
            if (o.ignore) return !0;
            var i = o.getTextContent(),
              l = xe(o);
            i &&
              !i.disableLabelLayout &&
              a._addLabel(l.dataIndex, l.dataType, t, i, n);
          });
      }),
      (e.prototype.updateLayoutConfig = function (r) {
        var a = r.getWidth(),
          t = r.getHeight();
        function n(b, x) {
          return function () {
            He(b, x);
          };
        }
        for (var o = 0; o < this._labelList.length; o++) {
          var i = this._labelList[o],
            l = i.label,
            v = l.__hostTarget,
            u = i.defaultAttr,
            s = void 0;
          Ye(i.layoutOption)
            ? (s = i.layoutOption(Ta(i, v)))
            : (s = i.layoutOption),
            (s = s || {}),
            (i.computedLayoutOption = s);
          var d = Math.PI / 180;
          v &&
            v.setTextConfig({
              local: !1,
              position: s.x != null || s.y != null ? null : u.attachedPos,
              rotation: s.rotate != null ? s.rotate * d : u.attachedRot,
              offset: [s.dx || 0, s.dy || 0],
            });
          var g = !1;
          if (
            (s.x != null
              ? ((l.x = O(s.x, a)), l.setStyle("x", 0), (g = !0))
              : ((l.x = u.x), l.setStyle("x", u.style.x)),
            s.y != null
              ? ((l.y = O(s.y, t)), l.setStyle("y", 0), (g = !0))
              : ((l.y = u.y), l.setStyle("y", u.style.y)),
            s.labelLinePoints)
          ) {
            var c = v.getTextGuideLine();
            c && (c.setShape({ points: s.labelLinePoints }), (g = !1));
          }
          var f = Me(l);
          (f.needsUpdateLabelLine = g),
            (l.rotation = s.rotate != null ? s.rotate * d : u.rotation),
            (l.scaleX = u.scaleX),
            (l.scaleY = u.scaleY);
          for (var h = 0; h < We.length; h++) {
            var p = We[h];
            l.setStyle(p, s[p] != null ? s[p] : u.style[p]);
          }
          if (s.draggable) {
            if (((l.draggable = !0), (l.cursor = "move"), v)) {
              var m = i.seriesModel;
              if (i.dataIndex != null) {
                var y = i.seriesModel.getData(i.dataType);
                m = y.getItemModel(i.dataIndex);
              }
              l.on("drag", n(v, m.getModel("labelLine")));
            }
          } else l.off("drag"), (l.cursor = u.cursor);
        }
      }),
      (e.prototype.layout = function (r) {
        var a = r.getWidth(),
          t = r.getHeight(),
          n = wt(this._labelList),
          o = Ce(n, function (v) {
            return v.layoutOption.moveOverlap === "shiftX";
          }),
          i = Ce(n, function (v) {
            return v.layoutOption.moveOverlap === "shiftY";
          });
        Pt(o, 0, a), rt(i, 0, t);
        var l = Ce(n, function (v) {
          return v.layoutOption.hideOverlap;
        });
        Dt(l);
      }),
      (e.prototype.processLabelsOverall = function () {
        var r = this;
        ue(this._chartViewList, function (a) {
          var t = a.__model,
            n = a.ignoreLabelLineUpdate,
            o = t.isAnimationEnabled();
          a.group.traverse(function (i) {
            if (i.ignore && !i.forceLabelAnimation) return !0;
            var l = !n,
              v = i.getTextContent();
            !l && v && (l = Me(v).needsUpdateLabelLine),
              l && r._updateLabelLine(i, t),
              o && r._animateLabels(i, t);
          });
        });
      }),
      (e.prototype._updateLabelLine = function (r, a) {
        var t = r.getTextContent(),
          n = xe(r),
          o = n.dataIndex;
        if (t && o != null) {
          var i = a.getData(n.dataType),
            l = i.getItemModel(o),
            v = {},
            u = i.getItemVisual(o, "style"),
            s = i.getVisual("drawType");
          v.stroke = u[s];
          var d = l.getModel("labelLine");
          ct(r, vt(l), v), He(r, d);
        }
      }),
      (e.prototype._animateLabels = function (r, a) {
        var t = r.getTextContent(),
          n = r.getTextGuideLine();
        if (
          t &&
          (r.forceLabelAnimation ||
            (!t.ignore && !t.invisible && !r.disableLabelAnimation && !It(r)))
        ) {
          var o = Me(t),
            i = o.oldLayout,
            l = xe(r),
            v = l.dataIndex,
            u = { x: t.x, y: t.y, rotation: t.rotation },
            s = a.getData(l.dataType);
          if (i) {
            t.attr(i);
            var g = r.prevStates;
            g &&
              (Fe(g, "select") >= 0 && t.attr(o.oldLayoutSelect),
              Fe(g, "emphasis") >= 0 && t.attr(o.oldLayoutEmphasis)),
              fe(t, u, a, v);
          } else if ((t.attr(u), !Bt(t).valueAnimation)) {
            var d = we(t.style.opacity, 1);
            (t.style.opacity = 0), Q(t, { style: { opacity: d } }, a, v);
          }
          if (((o.oldLayout = u), t.states.select)) {
            var c = (o.oldLayoutSelect = {});
            se(c, u, oe), se(c, t.states.select, oe);
          }
          if (t.states.emphasis) {
            var f = (o.oldLayoutEmphasis = {});
            se(f, u, oe), se(f, t.states.emphasis, oe);
          }
          Nt(t, v, s, a, a);
        }
        if (n && !n.ignore && !n.invisible) {
          var o = wa(n),
            i = o.oldLayout,
            h = { points: n.shape.points };
          i
            ? (n.attr({ shape: i }), fe(n, { shape: h }, a))
            : (n.setShape(h),
              (n.style.strokePercent = 0),
              Q(n, { style: { strokePercent: 1 } }, a)),
            (o.oldLayout = h);
        }
      }),
      e
    );
  })(),
  Da = Pa,
  Ae = De();
function Ia(e) {
  e.registerUpdateLifecycle("series:beforeupdate", function (r, a, t) {
    var n = Ae(a).labelManager;
    n || (n = Ae(a).labelManager = new Da()), n.clearLabels();
  }),
    e.registerUpdateLifecycle("series:layoutlabels", function (r, a, t) {
      var n = Ae(a).labelManager;
      t.updatedSeries.forEach(function (o) {
        n.addLabelsOfSeries(a.getViewOfSeriesModel(o));
      }),
        n.updateLayoutConfig(a),
        n.layout(a),
        n.processLabelsOverall();
    });
}
var le = Math.PI * 2,
  Ke = Math.PI / 180;
function ut(e, r) {
  return kt(e.getBoxLayoutParams(), {
    width: r.getWidth(),
    height: r.getHeight(),
  });
}
function ft(e, r) {
  var a = ut(e, r),
    t = e.get("center"),
    n = e.get("radius");
  Pe(n) || (n = [0, n]), Pe(t) || (t = [t, t]);
  var o = O(a.width, r.getWidth()),
    i = O(a.height, r.getHeight()),
    l = Math.min(o, i),
    v = O(t[0], o) + a.x,
    u = O(t[1], i) + a.y,
    s = O(n[0], l / 2),
    d = O(n[1], l / 2);
  return { cx: v, cy: u, r0: s, r: d };
}
function Ba(e, r, a) {
  r.eachSeriesByType(e, function (t) {
    var n = t.getData(),
      o = n.mapDimension("value"),
      i = ut(t, a),
      l = ft(t, a),
      v = l.cx,
      u = l.cy,
      s = l.r,
      d = l.r0,
      g = -t.get("startAngle") * Ke,
      c = t.get("minAngle") * Ke,
      f = 0;
    n.each(o, function (D) {
      !isNaN(D) && f++;
    });
    var h = n.getSum(o),
      p = (Math.PI / (h || f)) * 2,
      m = t.get("clockwise"),
      y = t.get("roseType"),
      b = t.get("stillShowZeroSum"),
      x = n.getDataExtent(o);
    x[0] = 0;
    var S = le,
      T = 0,
      M = g,
      L = m ? 1 : -1;
    if (
      (n.setLayout({ viewRect: i, r: s }),
      n.each(o, function (D, k) {
        var w;
        if (isNaN(D)) {
          n.setItemLayout(k, {
            angle: NaN,
            startAngle: NaN,
            endAngle: NaN,
            clockwise: m,
            cx: v,
            cy: u,
            r0: d,
            r: y ? NaN : s,
          });
          return;
        }
        y !== "area" ? (w = h === 0 && b ? p : D * p) : (w = le / f),
          w < c ? ((w = c), (S -= c)) : (T += D);
        var B = M + L * w;
        n.setItemLayout(k, {
          angle: w,
          startAngle: M,
          endAngle: B,
          clockwise: m,
          cx: v,
          cy: u,
          r0: d,
          r: y ? $t(D, x, [d, s]) : s,
        }),
          (M = B);
      }),
      S < le && f)
    )
      if (S <= 0.001) {
        var C = le / f;
        n.each(o, function (D, k) {
          if (!isNaN(D)) {
            var w = n.getItemLayout(k);
            (w.angle = C),
              (w.startAngle = g + L * k * C),
              (w.endAngle = g + L * (k + 1) * C);
          }
        });
      } else
        (p = S / T),
          (M = g),
          n.each(o, function (D, k) {
            if (!isNaN(D)) {
              var w = n.getItemLayout(k),
                B = w.angle === c ? c : D * p;
              (w.startAngle = M), (w.endAngle = M + L * B), (M += L * B);
            }
          });
  });
}
function Na(e) {
  return {
    seriesType: e,
    reset: function (r, a) {
      var t = a.findComponents({ mainType: "legend" });
      if (!(!t || !t.length)) {
        var n = r.getData();
        n.filterSelf(function (o) {
          for (var i = n.getName(o), l = 0; l < t.length; l++)
            if (!t[l].isSelected(i)) return !1;
          return !0;
        });
      }
    },
  };
}
var ka = Math.PI / 180;
function Je(e, r, a, t, n, o, i, l, v, u) {
  if (e.length < 2) return;
  function s(h) {
    for (var p = h.rB, m = p * p, y = 0; y < h.list.length; y++) {
      var b = h.list[y],
        x = Math.abs(b.label.y - a),
        S = t + b.len,
        T = S * S,
        M = Math.sqrt((1 - Math.abs((x * x) / m)) * T),
        L = r + (M + b.len2) * n,
        C = L - b.label.x,
        D = b.targetTextWidth - C * n;
      gt(b, D, !0), (b.label.x = L);
    }
  }
  function d(h) {
    for (
      var p = { list: [], maxY: 0 }, m = { list: [], maxY: 0 }, y = 0;
      y < h.length;
      y++
    )
      if (h[y].labelAlignTo === "none") {
        var b = h[y],
          x = b.label.y > a ? m : p,
          S = Math.abs(b.label.y - a);
        if (S >= x.maxY) {
          var T = b.label.x - r - b.len2 * n,
            M = t + b.len,
            L =
              Math.abs(T) < M ? Math.sqrt((S * S) / (1 - (T * T) / M / M)) : M;
          (x.rB = L), (x.maxY = S);
        }
        x.list.push(b);
      }
    s(p), s(m);
  }
  for (var g = e.length, c = 0; c < g; c++)
    if (e[c].position === "outer" && e[c].labelAlignTo === "labelLine") {
      var f = e[c].label.x - u;
      (e[c].linePoints[1][0] += f), (e[c].label.x = u);
    }
  rt(e, v, v + i) && d(e);
}
function $a(e, r, a, t, n, o, i, l) {
  for (
    var v = [], u = [], s = Number.MAX_VALUE, d = -Number.MAX_VALUE, g = 0;
    g < e.length;
    g++
  ) {
    var c = e[g].label;
    Te(e[g]) ||
      (c.x < r
        ? ((s = Math.min(s, c.x)), v.push(e[g]))
        : ((d = Math.max(d, c.x)), u.push(e[g])));
  }
  for (var g = 0; g < e.length; g++) {
    var f = e[g];
    if (!Te(f) && f.linePoints) {
      if (f.labelStyleWidth != null) continue;
      var c = f.label,
        h = f.linePoints,
        p = void 0;
      f.labelAlignTo === "edge"
        ? c.x < r
          ? (p = h[2][0] - f.labelDistance - i - f.edgeDistance)
          : (p = i + n - f.edgeDistance - h[2][0] - f.labelDistance)
        : f.labelAlignTo === "labelLine"
        ? c.x < r
          ? (p = s - i - f.bleedMargin)
          : (p = i + n - d - f.bleedMargin)
        : c.x < r
        ? (p = c.x - i - f.bleedMargin)
        : (p = i + n - c.x - f.bleedMargin),
        (f.targetTextWidth = p),
        gt(f, p);
    }
  }
  Je(u, r, a, t, 1, n, o, i, l, d), Je(v, r, a, t, -1, n, o, i, l, s);
  for (var g = 0; g < e.length; g++) {
    var f = e[g];
    if (!Te(f) && f.linePoints) {
      var c = f.label,
        h = f.linePoints,
        m = f.labelAlignTo === "edge",
        y = c.style.padding,
        b = y ? y[1] + y[3] : 0,
        x = c.style.backgroundColor ? 0 : b,
        S = f.rect.width + x,
        T = h[1][0] - h[2][0];
      m
        ? c.x < r
          ? (h[2][0] = i + f.edgeDistance + S + f.labelDistance)
          : (h[2][0] = i + n - f.edgeDistance - S - f.labelDistance)
        : (c.x < r
            ? (h[2][0] = c.x + f.labelDistance)
            : (h[2][0] = c.x - f.labelDistance),
          (h[1][0] = h[2][0] + T)),
        (h[1][1] = h[2][1] = c.y);
    }
  }
}
function gt(e, r, a) {
  if ((a === void 0 && (a = !1), e.labelStyleWidth == null)) {
    var t = e.label,
      n = t.style,
      o = e.rect,
      i = n.backgroundColor,
      l = n.padding,
      v = l ? l[1] + l[3] : 0,
      u = n.overflow,
      s = o.width + (i ? 0 : v);
    if (r < s || a) {
      var d = o.height;
      if (u && u.match("break")) {
        t.setStyle("backgroundColor", null), t.setStyle("width", r - v);
        var g = t.getBoundingRect();
        t.setStyle("width", Math.ceil(g.width)),
          t.setStyle("backgroundColor", i);
      } else {
        var c = r - v,
          f = r < s ? c : a ? (c > e.unconstrainedWidth ? null : c) : null;
        t.setStyle("width", f);
      }
      var h = t.getBoundingRect();
      o.width = h.width;
      var p = (t.style.margin || 0) + 2.1;
      (o.height = h.height + p), (o.y -= (o.height - d) / 2);
    }
  }
}
function Te(e) {
  return e.position === "center";
}
function Ra(e) {
  var r = e.getData(),
    a = [],
    t,
    n,
    o = !1,
    i = (e.get("minShowLabelAngle") || 0) * ka,
    l = r.getLayout("viewRect"),
    v = r.getLayout("r"),
    u = l.width,
    s = l.x,
    d = l.y,
    g = l.height;
  function c(T) {
    T.ignore = !0;
  }
  function f(T) {
    if (!T.ignore) return !0;
    for (var M in T.states) if (T.states[M].ignore === !1) return !0;
    return !1;
  }
  r.each(function (T) {
    var M = r.getItemGraphicEl(T),
      L = M.shape,
      C = M.getTextContent(),
      D = M.getTextGuideLine(),
      k = r.getItemModel(T),
      w = k.getModel("label"),
      B = w.get("position") || k.get(["emphasis", "label", "position"]),
      pe = w.get("distanceToLabelLine"),
      me = w.get("alignTo"),
      ye = O(w.get("edgeDistance"), u),
      ht = w.get("bleedMargin"),
      ee = k.getModel("labelLine"),
      q = ee.get("length");
    q = O(q, u);
    var te = ee.get("length2");
    if (((te = O(te, u)), Math.abs(L.endAngle - L.startAngle) < i)) {
      ue(C.states, c), (C.ignore = !0);
      return;
    }
    if (!!f(C)) {
      var ae = (L.startAngle + L.endAngle) / 2,
        $ = Math.cos(ae),
        z = Math.sin(ae),
        H,
        re,
        Be,
        ne;
      (t = L.cx), (n = L.cy);
      var F = B === "inside" || B === "inner";
      if (B === "center") (H = L.cx), (re = L.cy), (ne = "center");
      else {
        var be = (F ? ((L.r + L.r0) / 2) * $ : L.r * $) + t,
          Le = (F ? ((L.r + L.r0) / 2) * z : L.r * z) + n;
        if (((H = be + $ * 3), (re = Le + z * 3), !F)) {
          var Ne = be + $ * (q + v - L.r),
            ke = Le + z * (q + v - L.r),
            $e = Ne + ($ < 0 ? -1 : 1) * te,
            Re = ke;
          me === "edge"
            ? (H = $ < 0 ? s + ye : s + u - ye)
            : (H = $e + ($ < 0 ? -pe : pe)),
            (re = Re),
            (Be = [
              [be, Le],
              [Ne, ke],
              [$e, Re],
            ]);
        }
        ne = F
          ? "center"
          : me === "edge"
          ? $ > 0
            ? "right"
            : "left"
          : $ > 0
          ? "left"
          : "right";
      }
      var Z = Math.PI,
        X = 0,
        W = w.get("rotate");
      if (nt(W)) X = W * (Z / 180);
      else if (B === "center") X = 0;
      else if (W === "radial" || W === !0) {
        var dt = $ < 0 ? -ae + Z : -ae;
        X = dt;
      } else if (W === "tangential" && B !== "outside" && B !== "outer") {
        var j = Math.atan2($, z);
        j < 0 && (j = Z * 2 + j);
        var pt = z > 0;
        pt && (j = Z + j), (X = j - Z);
      }
      if (
        ((o = !!X),
        (C.x = H),
        (C.y = re),
        (C.rotation = X),
        C.setStyle({ verticalAlign: "middle" }),
        F)
      ) {
        C.setStyle({ align: ne });
        var _e = C.states.select;
        _e && ((_e.x += C.x), (_e.y += C.y));
      } else {
        var K = C.getBoundingRect().clone();
        K.applyTransform(C.getComputedTransform());
        var Oe = (C.style.margin || 0) + 2.1;
        (K.y -= Oe / 2),
          (K.height += Oe),
          a.push({
            label: C,
            labelLine: D,
            position: B,
            len: q,
            len2: te,
            minTurnAngle: ee.get("minTurnAngle"),
            maxSurfaceAngle: ee.get("maxSurfaceAngle"),
            surfaceNormal: new P($, z),
            linePoints: Be,
            textAlign: ne,
            labelDistance: pe,
            labelAlignTo: me,
            edgeDistance: ye,
            bleedMargin: ht,
            rect: K,
            unconstrainedWidth: K.width,
            labelStyleWidth: C.style.width,
          });
      }
      M.setTextConfig({ inside: F });
    }
  }),
    !o && e.get("avoidLabelOverlap") && $a(a, t, n, v, u, g, s, d);
  for (var h = 0; h < a.length; h++) {
    var p = a[h],
      m = p.label,
      y = p.labelLine,
      b = isNaN(m.x) || isNaN(m.y);
    if (m) {
      m.setStyle({ align: p.textAlign }),
        b && (ue(m.states, c), (m.ignore = !0));
      var x = m.states.select;
      x && ((x.x += m.x), (x.y += m.y));
    }
    if (y) {
      var S = p.linePoints;
      b || !S
        ? (ue(y.states, c), (y.ignore = !0))
        : (lt(S, p.minTurnAngle),
          Ca(S, p.surfaceNormal, p.maxSurfaceAngle),
          y.setShape({ points: S }),
          (m.__hostTarget.textGuideLineConfig = {
            anchor: new P(S[0][0], S[0][1]),
          }));
    }
  }
}
function ce(e, r, a) {
  var t = e.get("borderRadius");
  if (t == null) return a ? { cornerRadius: 0 } : null;
  Pe(t) || (t = [t, t, t, t]);
  var n = Math.abs(r.r || 0 - r.r0 || 0);
  return {
    cornerRadius: Rt(t, function (o) {
      return Ot(o, n);
    }),
  };
}
var Oa = (function (e) {
    Ie(r, e);
    function r(a, t, n) {
      var o = e.call(this) || this;
      o.z2 = 2;
      var i = new Et();
      return o.setTextContent(i), o.updateData(a, t, n, !0), o;
    }
    return (
      (r.prototype.updateData = function (a, t, n, o) {
        var i = this,
          l = a.hostModel,
          v = a.getItemModel(t),
          u = v.getModel("emphasis"),
          s = a.getItemLayout(t),
          d = U(ce(v.getModel("itemStyle"), s, !0), s);
        if (isNaN(d.startAngle)) {
          i.setShape(d);
          return;
        }
        if (o) {
          i.setShape(d);
          var g = l.getShallow("animationType");
          l.ecModel.ssr
            ? (Q(i, { scaleX: 0, scaleY: 0 }, l, { dataIndex: t, isFrom: !0 }),
              (i.originX = d.cx),
              (i.originY = d.cy))
            : g === "scale"
            ? ((i.shape.r = s.r0), Q(i, { shape: { r: s.r } }, l, t))
            : n != null
            ? (i.setShape({ startAngle: n, endAngle: n }),
              Q(
                i,
                { shape: { startAngle: s.startAngle, endAngle: s.endAngle } },
                l,
                t
              ))
            : ((i.shape.endAngle = s.startAngle),
              fe(i, { shape: { endAngle: s.endAngle } }, l, t));
        } else Vt(i), fe(i, { shape: d }, l, t);
        i.useStyle(a.getItemVisual(t, "style")), Gt(i, v);
        var c = (s.startAngle + s.endAngle) / 2,
          f = l.get("selectedOffset"),
          h = Math.cos(c) * f,
          p = Math.sin(c) * f,
          m = v.getShallow("cursor");
        m && i.attr("cursor", m),
          this._updateLabel(l, a, t),
          (i.ensureState("emphasis").shape = U(
            { r: s.r + ((u.get("scale") && u.get("scaleSize")) || 0) },
            ce(u.getModel("itemStyle"), s)
          )),
          U(i.ensureState("select"), {
            x: h,
            y: p,
            shape: ce(v.getModel(["select", "itemStyle"]), s),
          }),
          U(i.ensureState("blur"), {
            shape: ce(v.getModel(["blur", "itemStyle"]), s),
          });
        var y = i.getTextGuideLine(),
          b = i.getTextContent();
        y && U(y.ensureState("select"), { x: h, y: p }),
          U(b.ensureState("select"), { x: h, y: p }),
          zt(this, u.get("focus"), u.get("blurScope"), u.get("disabled"));
      }),
      (r.prototype._updateLabel = function (a, t, n) {
        var o = this,
          i = t.getItemModel(n),
          l = i.getModel("labelLine"),
          v = t.getItemVisual(n, "style"),
          u = v && v.fill,
          s = v && v.opacity;
        Yt(o, Ft(i), {
          labelFetcher: t.hostModel,
          labelDataIndex: n,
          inheritColor: u,
          defaultOpacity: s,
          defaultText: a.getFormattedLabel(n, "normal") || t.getName(n),
        });
        var d = o.getTextContent();
        o.setTextConfig({ position: null, rotation: null }), d.attr({ z2: 10 });
        var g = a.get(["label", "position"]);
        if (g !== "outside" && g !== "outer") o.removeTextGuideLine();
        else {
          var c = this.getTextGuideLine();
          c || ((c = new at()), this.setTextGuideLine(c)),
            ct(this, vt(i), {
              stroke: u,
              opacity: Xt(l.get(["lineStyle", "opacity"]), s, 1),
            });
        }
      }),
      r
    );
  })(it),
  Ea = (function (e) {
    Ie(r, e);
    function r() {
      var a = (e !== null && e.apply(this, arguments)) || this;
      return (a.ignoreLabelLineUpdate = !0), a;
    }
    return (
      (r.prototype.render = function (a, t, n, o) {
        var i = a.getData(),
          l = this._data,
          v = this.group,
          u;
        if (!l && i.count() > 0) {
          for (
            var s = i.getItemLayout(0), d = 1;
            isNaN(s && s.startAngle) && d < i.count();
            ++d
          )
            s = i.getItemLayout(d);
          s && (u = s.startAngle);
        }
        if (
          (this._emptyCircleSector && v.remove(this._emptyCircleSector),
          i.count() === 0 && a.get("showEmptyCircle"))
        ) {
          var g = new it({ shape: ft(a, n) });
          g.useStyle(a.getModel("emptyCircleStyle").getItemStyle()),
            (this._emptyCircleSector = g),
            v.add(g);
        }
        i
          .diff(l)
          .add(function (c) {
            var f = new Oa(i, c, u);
            i.setItemGraphicEl(c, f), v.add(f);
          })
          .update(function (c, f) {
            var h = l.getItemGraphicEl(f);
            h.updateData(i, c, u),
              h.off("click"),
              v.add(h),
              i.setItemGraphicEl(c, h);
          })
          .remove(function (c) {
            var f = l.getItemGraphicEl(c);
            jt(f, a, c);
          })
          .execute(),
          Ra(a),
          a.get("animationTypeUpdate") !== "expansion" && (this._data = i);
      }),
      (r.prototype.dispose = function () {}),
      (r.prototype.containPoint = function (a, t) {
        var n = t.getData(),
          o = n.getItemLayout(0);
        if (o) {
          var i = a[0] - o.cx,
            l = a[1] - o.cy,
            v = Math.sqrt(i * i + l * l);
          return v <= o.r && v >= o.r0;
        }
      }),
      (r.type = "pie"),
      r
    );
  })(Ut),
  Va = Ea,
  Ga = (function () {
    function e(r, a) {
      (this._getDataWithEncodedVisual = r), (this._getRawData = a);
    }
    return (
      (e.prototype.getAllNames = function () {
        var r = this._getRawData();
        return r.mapArray(r.getName);
      }),
      (e.prototype.containName = function (r) {
        var a = this._getRawData();
        return a.indexOfName(r) >= 0;
      }),
      (e.prototype.indexOfName = function (r) {
        var a = this._getDataWithEncodedVisual();
        return a.indexOfName(r);
      }),
      (e.prototype.getItemVisual = function (r, a) {
        var t = this._getDataWithEncodedVisual();
        return t.getItemVisual(r, a);
      }),
      e
    );
  })(),
  za = Ga,
  Ya = (function (e) {
    Ie(r, e);
    function r() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (r.prototype.init = function (a) {
        e.prototype.init.apply(this, arguments),
          (this.legendVisualProvider = new za(
            Xe(this.getData, this),
            Xe(this.getRawData, this)
          )),
          this._defaultLabelLine(a);
      }),
      (r.prototype.mergeOption = function () {
        e.prototype.mergeOption.apply(this, arguments);
      }),
      (r.prototype.getInitialData = function () {
        return sa(this, {
          coordDimensions: ["value"],
          encodeDefaulter: st(qt, this),
        });
      }),
      (r.prototype.getDataParams = function (a) {
        var t = this.getData(),
          n = e.prototype.getDataParams.call(this, a),
          o = [];
        return (
          t.each(t.mapDimension("value"), function (i) {
            o.push(i);
          }),
          (n.percent = Ht(o, a, t.hostModel.get("percentPrecision"))),
          n.$vars.push("percent"),
          n
        );
      }),
      (r.prototype._defaultLabelLine = function (a) {
        Zt(a, "labelLine", ["show"]);
        var t = a.labelLine,
          n = a.emphasis.labelLine;
        (t.show = t.show && a.label.show),
          (n.show = n.show && a.emphasis.label.show);
      }),
      (r.type = "series.pie"),
      (r.defaultOption = {
        z: 2,
        legendHoverLink: !0,
        colorBy: "data",
        center: ["50%", "50%"],
        radius: [0, "75%"],
        clockwise: !0,
        startAngle: 90,
        minAngle: 0,
        minShowLabelAngle: 0,
        selectedOffset: 10,
        percentPrecision: 2,
        stillShowZeroSum: !0,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: null,
        height: null,
        label: {
          rotate: 0,
          show: !0,
          overflow: "truncate",
          position: "outer",
          alignTo: "none",
          edgeDistance: "25%",
          bleedMargin: 10,
          distanceToLabelLine: 5,
        },
        labelLine: {
          show: !0,
          length: 15,
          length2: 15,
          smooth: !1,
          minTurnAngle: 90,
          maxSurfaceAngle: 90,
          lineStyle: { width: 1, type: "solid" },
        },
        itemStyle: { borderWidth: 1, borderJoin: "round" },
        showEmptyCircle: !0,
        emptyCircleStyle: { color: "lightgray", opacity: 1 },
        labelLayout: { hideOverlap: !0 },
        emphasis: { scale: !0, scaleSize: 5 },
        avoidLabelOverlap: !0,
        animationType: "expansion",
        animationDuration: 1e3,
        animationTypeUpdate: "transition",
        animationEasingUpdate: "cubicInOut",
        animationDurationUpdate: 500,
        animationEasing: "cubicInOut",
      }),
      r
    );
  })(Wt),
  Fa = Ya;
function Xa(e) {
  return {
    seriesType: e,
    reset: function (r, a) {
      var t = r.getData();
      t.filterSelf(function (n) {
        var o = t.mapDimension("value"),
          i = t.get(o, n);
        return !(nt(i) && !isNaN(i) && i < 0);
      });
    },
  };
}
function ja(e) {
  e.registerChartView(Va),
    e.registerSeriesModel(Fa),
    Kt("pie", e.registerAction),
    e.registerLayout(st(Ba, "pie")),
    e.registerProcessor(Na("pie")),
    e.registerProcessor(Xa("pie"));
}
Jt([ja, Qt, ea, ta, aa, ra, Ia]);
var Ua = tt({
    name: "BalanceChart",
    components: { "v-chart": na },
    props: {
      currencies: { required: !0, type: Array },
      showTitle: { required: !1, type: Boolean },
    },
    setup(e) {
      const r = mt();
      return {
        balanceChartOptions: ve(() => ({
          title: { text: "Balance", show: e.showTitle },
          center: ["50%", "50%"],
          backgroundColor: "rgba(0, 0, 0, 0)",
          dataset: {
            dimensions: [
              "balance",
              "currency",
              "est_stake",
              "free",
              "used",
              "stake",
            ],
            source: e.currencies,
          },
          tooltip: {
            trigger: "item",
            formatter: (t) =>
              `${je(t.value.balance, t.value.currency, 8)}<br />${
                t.percent
              }% (${je(t.value.est_stake, t.value.stake)})`,
          },
          series: [
            {
              type: "pie",
              radius: ["40%", "70%"],
              encode: {
                value: "est_stake",
                itemName: "currency",
                tooltip: ["balance", "currency"],
              },
              label: { formatter: "{b} - {d}%" },
              tooltip: { show: !0 },
            },
          ],
        })),
        settingsStore: r,
      };
    },
  }),
  qa = function () {
    var e = this,
      r = e.$createElement,
      a = e._self._c || r;
    return e.currencies
      ? a("v-chart", {
          attrs: {
            option: e.balanceChartOptions,
            theme: e.settingsStore.chartTheme,
            autoresize: "",
          },
        })
      : e._e();
  },
  Ha = [];
const Qe = {};
var Za = de(Ua, qa, Ha, !1, Wa, "23700f91", null, null);
function Wa(e) {
  for (let r in Qe) this[r] = Qe[r];
}
var Ka = (function () {
    return Za.exports;
  })(),
  Ja = tt({
    name: "Balance",
    components: { HideIcon: fa, ShowIcon: ya, BalanceChart: Ka },
    setup() {
      const e = yt(),
        r = bt(!0),
        a = ve(() =>
          Number((0.1 ** e.activeBot.stakeCurrencyDecimals).toFixed(8))
        ),
        t = ve(() => {
          var i;
          return r.value
            ? (i = e.activeBot.balance.currencies) == null
              ? void 0
              : i.filter((l) => l.est_stake >= a.value)
            : e.activeBot.balance.currencies;
        }),
        n = ve(() => [
          { key: "currency", label: "Currency" },
          { key: "free", label: "Available", formatter: "formatCurrency" },
          {
            key: "est_stake",
            label: `in ${e.activeBot.balance.stake}`,
            formatter: "formatCurrency",
          },
        ]);
      return {
        botStore: e,
        hideSmallBalances: r,
        formatPercent: ia,
        smallBalance: a,
        balanceCurrencies: t,
        tableFields: n,
        formatCurrency: (i) => (i ? i.toFixed(5) : ""),
      };
    },
  }),
  Qa = function () {
    var e = this,
      r = e.$createElement,
      a = e._self._c || r;
    return a(
      "div",
      [
        a(
          "div",
          { staticClass: "mb-2" },
          [
            a("label", { staticClass: "mr-auto h3" }, [e._v("Balance")]),
            a(
              "b-button",
              {
                staticClass: "float-right",
                attrs: { size: "sm" },
                on: { click: e.botStore.activeBot.getBalance },
              },
              [e._v("\u21BB")]
            ),
            a(
              "b-form-checkbox",
              {
                staticClass: "float-right",
                attrs: { size: "sm", title: "Hide small balances", button: "" },
                model: {
                  value: e.hideSmallBalances,
                  callback: function (t) {
                    e.hideSmallBalances = t;
                  },
                  expression: "hideSmallBalances",
                },
              },
              [
                e.hideSmallBalances
                  ? a("HideIcon", { attrs: { size: 16 } })
                  : a("ShowIcon", { attrs: { size: 16 } }),
              ],
              1
            ),
          ],
          1
        ),
        e.balanceCurrencies
          ? a("BalanceChart", { attrs: { currencies: e.balanceCurrencies } })
          : e._e(),
        a(
          "div",
          [
            e.botStore.activeBot.balance.note
              ? a("p", [
                  a("strong", [e._v(e._s(e.botStore.activeBot.balance.note))]),
                ])
              : e._e(),
            a(
              "b-table",
              {
                staticClass: "table-sm",
                attrs: { items: e.balanceCurrencies, fields: e.tableFields },
              },
              [
                a("template", { slot: "bottom-row" }, [
                  a("td", [a("strong", [e._v("Total")])]),
                  a("td", [
                    a(
                      "span",
                      {
                        staticClass: "font-italic",
                        attrs: { title: "Increase over initial capital" },
                      },
                      [
                        e._v(
                          e._s(
                            e.formatPercent(
                              e.botStore.activeBot.balance
                                .starting_capital_ratio
                            )
                          )
                        ),
                      ]
                    ),
                  ]),
                  a("td", [
                    a("strong", [
                      e._v(
                        e._s(
                          e.formatCurrency(e.botStore.activeBot.balance.total)
                        )
                      ),
                    ]),
                  ]),
                ]),
              ],
              2
            ),
          ],
          1
        ),
      ],
      1
    );
  },
  er = [];
const et = {};
var tr = de(Ja, Qa, er, !1, ar, null, null, null);
function ar(e) {
  for (let r in et) this[r] = et[r];
}
var or = (function () {
  return tr.exports;
})();
export { or as default };
//# sourceMappingURL=Balance.13255b2a.js.map
