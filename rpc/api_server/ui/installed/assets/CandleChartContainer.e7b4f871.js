var Va = Object.defineProperty,
  Fa = Object.defineProperties;
var Wa = Object.getOwnPropertyDescriptors;
var fe = Object.getOwnPropertySymbols;
var Za = Object.prototype.hasOwnProperty,
  ja = Object.prototype.propertyIsEnumerable;
var ve = (e, a, t) =>
    a in e
      ? Va(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[a] = t),
  q = (e, a) => {
    for (var t in a || (a = {})) Za.call(a, t) && ve(e, t, a[t]);
    if (fe) for (var t of fe(a)) ja.call(a, t) && ve(e, t, a[t]);
    return e;
  },
  ge = (e, a) => Fa(e, Wa(a));
import {
  d as Dt,
  r as R,
  c as E,
  o as Qt,
  w as X,
  n as Pt,
  C as Lt,
  u as ra,
  E as Ft,
  g as Wt,
  s as Ga,
  e as Ha,
  h as Ua,
  L as gt,
} from "./index.ef7539b9.js";
import { f as oa } from "./numberformat.a1b2908a.js";
import {
  _ as z,
  a9 as ia,
  B as te,
  j as ee,
  ab as Ct,
  ac as sa,
  t as la,
  a3 as ua,
  u as ae,
  C as P,
  a4 as Y,
  ad as Q,
  ae as tt,
  O as W,
  af as ca,
  ag as Ya,
  f as da,
  g as dt,
  ah as qa,
  a5 as Z,
  ai as Zt,
  aj as Ka,
  ak as ha,
  al as Xa,
  M as U,
  R as lt,
  am as me,
  an as Ja,
  ao as Qa,
  G as tn,
  I as en,
  V as an,
  W as nn,
  ap as pa,
  aq as bt,
  ar as fa,
  v as wt,
  as as kt,
  at as rn,
  r as jt,
  au as on,
  av as ne,
  aw as sn,
  ax as ln,
  ay as et,
  az as un,
  p as _t,
  Z as it,
  aA as st,
  aB as ye,
  aC as re,
  aD as cn,
  K as va,
  aE as dn,
  aF as hn,
  aG as be,
  aH as _e,
  aI as ga,
  aJ as pn,
  aK as fn,
  aL as vn,
  aM as gn,
  aN as mn,
  H as xt,
  aO as oe,
  aP as yn,
  x as bn,
  aQ as _n,
  aR as xe,
  o as ma,
  aS as ya,
  aT as xn,
  aU as Sn,
  aV as Cn,
  aW as wn,
  aX as An,
  aY as Tn,
  aZ as Dn,
  a_ as Pn,
  a$ as On,
  b0 as Se,
  b1 as In,
  b2 as Ce,
  b3 as Mt,
  Q as Ln,
  b4 as kn,
  b5 as Mn,
  b6 as Bn,
  b7 as Nn,
  b8 as zn,
  b9 as Rn,
  ba as En,
  bb as $n,
  bc as Vn,
  a as Fn,
  b as Wn,
  c as Zn,
  d as jn,
  i as Gn,
  U as Hn,
} from "./install.0dc8b161.js";
import {
  d as Un,
  p as ba,
  S as Yn,
  e as qn,
  t as Kn,
  r as Xn,
  f as Jn,
  D as Qn,
  h as tr,
  j as er,
  s as ar,
  A as nr,
  k as rr,
  b as or,
  c as ir,
  l as sr,
  i as lr,
  a as ur,
  m as cr,
  n as dr,
} from "./install.5a6de981.js";
import { c as hr } from "./createSeriesDataSimply.dc3f9863.js";
var pr = (function (e) {
    z(a, e);
    function a() {
      var t = (e !== null && e.apply(this, arguments)) || this;
      return (t.type = a.type), (t.hasSymbolVisual = !0), t;
    }
    return (
      (a.prototype.getInitialData = function (t, n) {
        return Un(null, this, { useEncodeDefaulter: !0 });
      }),
      (a.prototype.getProgressive = function () {
        var t = this.option.progressive;
        return t == null
          ? this.option.large
            ? 5e3
            : this.get("progressive")
          : t;
      }),
      (a.prototype.getProgressiveThreshold = function () {
        var t = this.option.progressiveThreshold;
        return t == null
          ? this.option.large
            ? 1e4
            : this.get("progressiveThreshold")
          : t;
      }),
      (a.prototype.brushSelector = function (t, n, r) {
        return r.point(n.getItemLayout(t));
      }),
      (a.prototype.getZLevelKey = function () {
        return this.getData().count() > this.getProgressiveThreshold()
          ? this.id
          : "";
      }),
      (a.type = "series.scatter"),
      (a.dependencies = ["grid", "polar", "geo", "singleAxis", "calendar"]),
      (a.defaultOption = {
        coordinateSystem: "cartesian2d",
        z: 2,
        legendHoverLink: !0,
        symbolSize: 10,
        large: !1,
        largeThreshold: 2e3,
        itemStyle: { opacity: 0.8 },
        emphasis: { scale: !0 },
        clip: !0,
        select: { itemStyle: { borderColor: "#212121" } },
        universalTransition: { divideShape: "clone" },
      }),
      a
    );
  })(ia),
  fr = pr,
  _a = 4,
  vr = (function () {
    function e() {}
    return e;
  })(),
  gr = (function (e) {
    z(a, e);
    function a(t) {
      var n = e.call(this, t) || this;
      return (n._off = 0), (n.hoverDataIdx = -1), n;
    }
    return (
      (a.prototype.getDefaultShape = function () {
        return new vr();
      }),
      (a.prototype.reset = function () {
        (this.notClear = !1), (this._off = 0);
      }),
      (a.prototype.buildPath = function (t, n) {
        var r = n.points,
          o = n.size,
          i = this.symbolProxy,
          s = i.shape,
          u = t.getContext ? t.getContext() : t,
          c = u && o[0] < _a,
          d = this.softClipShape,
          h;
        if (c) {
          this._ctx = u;
          return;
        }
        for (this._ctx = null, h = this._off; h < r.length; ) {
          var p = r[h++],
            y = r[h++];
          isNaN(p) ||
            isNaN(y) ||
            (d && !d.contain(p, y)) ||
            ((s.x = p - o[0] / 2),
            (s.y = y - o[1] / 2),
            (s.width = o[0]),
            (s.height = o[1]),
            i.buildPath(t, s, !0));
        }
        this.incremental && ((this._off = h), (this.notClear = !0));
      }),
      (a.prototype.afterBrush = function () {
        var t = this.shape,
          n = t.points,
          r = t.size,
          o = this._ctx,
          i = this.softClipShape,
          s;
        if (!!o) {
          for (s = this._off; s < n.length; ) {
            var u = n[s++],
              c = n[s++];
            isNaN(u) ||
              isNaN(c) ||
              (i && !i.contain(u, c)) ||
              o.fillRect(u - r[0] / 2, c - r[1] / 2, r[0], r[1]);
          }
          this.incremental && ((this._off = s), (this.notClear = !0));
        }
      }),
      (a.prototype.findDataIndex = function (t, n) {
        for (
          var r = this.shape,
            o = r.points,
            i = r.size,
            s = Math.max(i[0], 4),
            u = Math.max(i[1], 4),
            c = o.length / 2 - 1;
          c >= 0;
          c--
        ) {
          var d = c * 2,
            h = o[d] - s / 2,
            p = o[d + 1] - u / 2;
          if (t >= h && n >= p && t <= h + s && n <= p + u) return c;
        }
        return -1;
      }),
      (a.prototype.contain = function (t, n) {
        var r = this.transformCoordToLocal(t, n),
          o = this.getBoundingRect();
        if (((t = r[0]), (n = r[1]), o.contain(t, n))) {
          var i = (this.hoverDataIdx = this.findDataIndex(t, n));
          return i >= 0;
        }
        return (this.hoverDataIdx = -1), !1;
      }),
      (a.prototype.getBoundingRect = function () {
        var t = this._rect;
        if (!t) {
          for (
            var n = this.shape,
              r = n.points,
              o = n.size,
              i = o[0],
              s = o[1],
              u = 1 / 0,
              c = 1 / 0,
              d = -1 / 0,
              h = -1 / 0,
              p = 0;
            p < r.length;

          ) {
            var y = r[p++],
              g = r[p++];
            (u = Math.min(y, u)),
              (d = Math.max(y, d)),
              (c = Math.min(g, c)),
              (h = Math.max(g, h));
          }
          t = this._rect = new te(u - i / 2, c - s / 2, d - u + i, h - c + s);
        }
        return t;
      }),
      a
    );
  })(ee),
  mr = (function () {
    function e() {
      this.group = new Ct();
    }
    return (
      (e.prototype.updateData = function (a, t) {
        this._clear();
        var n = this._create();
        n.setShape({ points: a.getLayout("points") }), this._setCommon(n, a, t);
      }),
      (e.prototype.updateLayout = function (a) {
        var t = a.getLayout("points");
        this.group.eachChild(function (n) {
          if (n.startIndex != null) {
            var r = (n.endIndex - n.startIndex) * 2,
              o = n.startIndex * 4 * 2;
            t = new Float32Array(t.buffer, o, r);
          }
          n.setShape("points", t), n.reset();
        });
      }),
      (e.prototype.incrementalPrepareUpdate = function (a) {
        this._clear();
      }),
      (e.prototype.incrementalUpdate = function (a, t, n) {
        var r = this._newAdded[0],
          o = t.getLayout("points"),
          i = r && r.shape.points;
        if (i && i.length < 2e4) {
          var s = i.length,
            u = new Float32Array(s + o.length);
          u.set(i),
            u.set(o, s),
            (r.endIndex = a.end),
            r.setShape({ points: u });
        } else {
          this._newAdded = [];
          var c = this._create();
          (c.startIndex = a.start),
            (c.endIndex = a.end),
            (c.incremental = !0),
            c.setShape({ points: o }),
            this._setCommon(c, t, n);
        }
      }),
      (e.prototype.eachRendered = function (a) {
        this._newAdded[0] && a(this._newAdded[0]);
      }),
      (e.prototype._create = function () {
        var a = new gr({ cursor: "default" });
        return this.group.add(a), this._newAdded.push(a), a;
      }),
      (e.prototype._setCommon = function (a, t, n) {
        var r = t.hostModel;
        n = n || {};
        var o = t.getVisual("symbolSize");
        a.setShape("size", o instanceof Array ? o : [o, o]),
          (a.softClipShape = n.clipShape || null),
          (a.symbolProxy = sa(t.getVisual("symbol"), 0, 0, 0, 0)),
          (a.setColor = a.symbolProxy.setColor);
        var i = a.shape.size[0] < _a;
        a.useStyle(
          r
            .getModel("itemStyle")
            .getItemStyle(
              i ? ["color", "shadowBlur", "shadowColor"] : ["color"]
            )
        );
        var s = t.getVisual("style"),
          u = s && s.fill;
        u && a.setColor(u);
        var c = la(a);
        (c.seriesIndex = r.seriesIndex),
          a.on("mousemove", function (d) {
            c.dataIndex = null;
            var h = a.hoverDataIdx;
            h >= 0 && (c.dataIndex = h + (a.startIndex || 0));
          });
      }),
      (e.prototype.remove = function () {
        this._clear();
      }),
      (e.prototype._clear = function () {
        (this._newAdded = []), this.group.removeAll();
      }),
      e
    );
  })(),
  yr = mr,
  br = (function (e) {
    z(a, e);
    function a() {
      var t = (e !== null && e.apply(this, arguments)) || this;
      return (t.type = a.type), t;
    }
    return (
      (a.prototype.render = function (t, n, r) {
        var o = t.getData(),
          i = this._updateSymbolDraw(o, t);
        i.updateData(o, { clipShape: this._getClipShape(t) }),
          (this._finished = !0);
      }),
      (a.prototype.incrementalPrepareRender = function (t, n, r) {
        var o = t.getData(),
          i = this._updateSymbolDraw(o, t);
        i.incrementalPrepareUpdate(o), (this._finished = !1);
      }),
      (a.prototype.incrementalRender = function (t, n, r) {
        this._symbolDraw.incrementalUpdate(t, n.getData(), {
          clipShape: this._getClipShape(n),
        }),
          (this._finished = t.end === n.getData().count());
      }),
      (a.prototype.updateTransform = function (t, n, r) {
        var o = t.getData();
        if ((this.group.dirty(), !this._finished || o.count() > 1e4))
          return { update: !0 };
        var i = ba("").reset(t, n, r);
        i.progress &&
          i.progress({ start: 0, end: o.count(), count: o.count() }, o),
          this._symbolDraw.updateLayout(o);
      }),
      (a.prototype.eachRendered = function (t) {
        this._symbolDraw && this._symbolDraw.eachRendered(t);
      }),
      (a.prototype._getClipShape = function (t) {
        var n = t.coordinateSystem,
          r = n && n.getArea && n.getArea();
        return t.get("clip", !0) ? r : null;
      }),
      (a.prototype._updateSymbolDraw = function (t, n) {
        var r = this._symbolDraw,
          o = n.pipelineContext,
          i = o.large;
        return (
          (!r || i !== this._isLargeDraw) &&
            (r && r.remove(),
            (r = this._symbolDraw = i ? new yr() : new Yn()),
            (this._isLargeDraw = i),
            this.group.removeAll()),
          this.group.add(r.group),
          r
        );
      }),
      (a.prototype.remove = function (t, n) {
        this._symbolDraw && this._symbolDraw.remove(!0),
          (this._symbolDraw = null);
      }),
      (a.prototype.dispose = function () {}),
      (a.type = "scatter"),
      a
    );
  })(ua),
  _r = br;
function xr(e) {
  ae(qn),
    e.registerSeriesModel(fr),
    e.registerChartView(_r),
    e.registerLayout(ba("scatter"));
}
var Sr = { axisPointer: 1, tooltip: 1, brush: 1 };
function Cr(e, a, t) {
  var n = a.getComponentByElement(e.topTarget),
    r = n && n.coordinateSystem;
  return n && n !== t && !Sr.hasOwnProperty(n.mainType) && r && r.model !== t;
}
var rt = !0,
  St = Math.min,
  ut = Math.max,
  wr = Math.pow,
  Ar = 1e4,
  Tr = 6,
  Dr = 6,
  we = "globalPan",
  Pr = { w: [0, 0], e: [0, 1], n: [1, 0], s: [1, 1] },
  Or = {
    w: "ew",
    e: "ew",
    n: "ns",
    s: "ns",
    ne: "nesw",
    sw: "nesw",
    nw: "nwse",
    se: "nwse",
  },
  Ae = {
    brushStyle: {
      lineWidth: 2,
      stroke: "rgba(210,219,238,0.3)",
      fill: "#D2DBEE",
    },
    transformable: !0,
    brushMode: "single",
    removeOnClick: !1,
  },
  Ir = 0,
  Lr = (function (e) {
    z(a, e);
    function a(t) {
      var n = e.call(this) || this;
      return (
        (n._track = []),
        (n._covers = []),
        (n._handlers = {}),
        (n._zr = t),
        (n.group = new Ct()),
        (n._uid = "brushController_" + Ir++),
        P(
          Er,
          function (r, o) {
            this._handlers[o] = Y(r, this);
          },
          n
        ),
        n
      );
    }
    return (
      (a.prototype.enableBrush = function (t) {
        return (
          this._brushType && this._doDisableBrush(),
          t.brushType && this._doEnableBrush(t),
          this
        );
      }),
      (a.prototype._doEnableBrush = function (t) {
        var n = this._zr;
        this._enableGlobalPan || Kn(n, we, this._uid),
          P(this._handlers, function (r, o) {
            n.on(o, r);
          }),
          (this._brushType = t.brushType),
          (this._brushOption = Q(tt(Ae), t, !0));
      }),
      (a.prototype._doDisableBrush = function () {
        var t = this._zr;
        Xn(t, we, this._uid),
          P(this._handlers, function (n, r) {
            t.off(r, n);
          }),
          (this._brushType = this._brushOption = null);
      }),
      (a.prototype.setPanels = function (t) {
        if (t && t.length) {
          var n = (this._panels = {});
          P(t, function (r) {
            n[r.panelId] = tt(r);
          });
        } else this._panels = null;
        return this;
      }),
      (a.prototype.mount = function (t) {
        (t = t || {}), (this._enableGlobalPan = t.enableGlobalPan);
        var n = this.group;
        return (
          this._zr.add(n),
          n.attr({
            x: t.x || 0,
            y: t.y || 0,
            rotation: t.rotation || 0,
            scaleX: t.scaleX || 1,
            scaleY: t.scaleY || 1,
          }),
          (this._transform = n.getLocalTransform()),
          this
        );
      }),
      (a.prototype.updateCovers = function (t) {
        t = W(t, function (p) {
          return Q(tt(Ae), p, !0);
        });
        var n = "\0-brush-index-",
          r = this._covers,
          o = (this._covers = []),
          i = this,
          s = this._creatingCover;
        return new ca(r, t, c, u).add(d).update(d).remove(h).execute(), this;
        function u(p, y) {
          return (p.id != null ? p.id : n + y) + "-" + p.brushType;
        }
        function c(p, y) {
          return u(p.__brushOption, y);
        }
        function d(p, y) {
          var g = t[p];
          if (y != null && r[y] === s) o[p] = r[y];
          else {
            var m = (o[p] =
              y != null ? ((r[y].__brushOption = g), r[y]) : Sa(i, xa(i, g)));
            ie(i, m);
          }
        }
        function h(p) {
          r[p] !== s && i.group.remove(r[p]);
        }
      }),
      (a.prototype.unmount = function () {
        return (
          this.enableBrush(!1), Gt(this), this._zr.remove(this.group), this
        );
      }),
      (a.prototype.dispose = function () {
        this.unmount(), this.off();
      }),
      a
    );
  })(Ya);
function xa(e, a) {
  var t = Ot[a.brushType].createCover(e, a);
  return (t.__brushOption = a), wa(t, a), e.group.add(t), t;
}
function Sa(e, a) {
  var t = se(a);
  return t.endCreating && (t.endCreating(e, a), wa(a, a.__brushOption)), a;
}
function Ca(e, a) {
  var t = a.__brushOption;
  se(a).updateCoverShape(e, a, t.range, t);
}
function wa(e, a) {
  var t = a.z;
  t == null && (t = Ar),
    e.traverse(function (n) {
      (n.z = t), (n.z2 = t);
    });
}
function ie(e, a) {
  se(a).updateCommon(e, a), Ca(e, a);
}
function se(e) {
  return Ot[e.__brushOption.brushType];
}
function le(e, a, t) {
  var n = e._panels;
  if (!n) return rt;
  var r,
    o = e._transform;
  return (
    P(n, function (i) {
      i.isTargetByCursor(a, t, o) && (r = i);
    }),
    r
  );
}
function Aa(e, a) {
  var t = e._panels;
  if (!t) return rt;
  var n = a.__brushOption.panelId;
  return n != null ? t[n] : rt;
}
function Gt(e) {
  var a = e._covers,
    t = a.length;
  return (
    P(
      a,
      function (n) {
        e.group.remove(n);
      },
      e
    ),
    (a.length = 0),
    !!t
  );
}
function ot(e, a) {
  var t = W(e._covers, function (n) {
    var r = n.__brushOption,
      o = tt(r.range);
    return { brushType: r.brushType, panelId: r.panelId, range: o };
  });
  e.trigger("brush", {
    areas: t,
    isEnd: !!a.isEnd,
    removeOnClick: !!a.removeOnClick,
  });
}
function kr(e) {
  var a = e._track;
  if (!a.length) return !1;
  var t = a[a.length - 1],
    n = a[0],
    r = t[0] - n[0],
    o = t[1] - n[1],
    i = wr(r * r + o * o, 0.5);
  return i > Tr;
}
function Ta(e) {
  var a = e.length - 1;
  return a < 0 && (a = 0), [e[0], e[a]];
}
function Da(e, a, t, n) {
  var r = new Ct();
  return (
    r.add(
      new Zt({
        name: "main",
        style: ue(t),
        silent: !0,
        draggable: !0,
        cursor: "move",
        drift: Z(Te, e, a, r, ["n", "s", "w", "e"]),
        ondragend: Z(ot, a, { isEnd: !0 }),
      })
    ),
    P(n, function (o) {
      r.add(
        new Zt({
          name: o.join(""),
          style: { opacity: 0 },
          draggable: !0,
          silent: !0,
          invisible: !0,
          drift: Z(Te, e, a, r, o),
          ondragend: Z(ot, a, { isEnd: !0 }),
        })
      );
    }),
    r
  );
}
function Pa(e, a, t, n) {
  var r = n.brushStyle.lineWidth || 0,
    o = ut(r, Dr),
    i = t[0][0],
    s = t[1][0],
    u = i - r / 2,
    c = s - r / 2,
    d = t[0][1],
    h = t[1][1],
    p = d - o + r / 2,
    y = h - o + r / 2,
    g = d - i,
    m = h - s,
    b = g + r,
    x = m + r;
  K(e, a, "main", i, s, g, m),
    n.transformable &&
      (K(e, a, "w", u, c, o, x),
      K(e, a, "e", p, c, o, x),
      K(e, a, "n", u, c, b, o),
      K(e, a, "s", u, y, b, o),
      K(e, a, "nw", u, c, o, o),
      K(e, a, "ne", p, c, o, o),
      K(e, a, "sw", u, y, o, o),
      K(e, a, "se", p, y, o, o));
}
function Ht(e, a) {
  var t = a.__brushOption,
    n = t.transformable,
    r = a.childAt(0);
  r.useStyle(ue(t)),
    r.attr({ silent: !n, cursor: n ? "move" : "default" }),
    P(
      [
        ["w"],
        ["e"],
        ["n"],
        ["s"],
        ["s", "e"],
        ["s", "w"],
        ["n", "e"],
        ["n", "w"],
      ],
      function (o) {
        var i = a.childOfName(o.join("")),
          s = o.length === 1 ? Ut(e, o[0]) : Br(e, o);
        i &&
          i.attr({
            silent: !n,
            invisible: !n,
            cursor: n ? Or[s] + "-resize" : null,
          });
      }
    );
}
function K(e, a, t, n, r, o, i) {
  var s = a.childOfName(t);
  s &&
    s.setShape(
      zr(
        ce(e, a, [
          [n, r],
          [n + o, r + i],
        ])
      )
    );
}
function ue(e) {
  return dt({ strokeNoScale: !0 }, e.brushStyle);
}
function Oa(e, a, t, n) {
  var r = [St(e, t), St(a, n)],
    o = [ut(e, t), ut(a, n)];
  return [
    [r[0], o[0]],
    [r[1], o[1]],
  ];
}
function Mr(e) {
  return ha(e.group);
}
function Ut(e, a) {
  var t = { w: "left", e: "right", n: "top", s: "bottom" },
    n = { left: "w", right: "e", top: "n", bottom: "s" },
    r = Ka(t[a], Mr(e));
  return n[r];
}
function Br(e, a) {
  var t = [Ut(e, a[0]), Ut(e, a[1])];
  return (t[0] === "e" || t[0] === "w") && t.reverse(), t.join("");
}
function Te(e, a, t, n, r, o) {
  var i = t.__brushOption,
    s = e.toRectRange(i.range),
    u = Ia(a, r, o);
  P(n, function (c) {
    var d = Pr[c];
    s[d[0]][d[1]] += u[d[0]];
  }),
    (i.range = e.fromRectRange(Oa(s[0][0], s[1][0], s[0][1], s[1][1]))),
    ie(a, t),
    ot(a, { isEnd: !1 });
}
function Nr(e, a, t, n) {
  var r = a.__brushOption.range,
    o = Ia(e, t, n);
  P(r, function (i) {
    (i[0] += o[0]), (i[1] += o[1]);
  }),
    ie(e, a),
    ot(e, { isEnd: !1 });
}
function Ia(e, a, t) {
  var n = e.group,
    r = n.transformCoordToLocal(a, t),
    o = n.transformCoordToLocal(0, 0);
  return [r[0] - o[0], r[1] - o[1]];
}
function ce(e, a, t) {
  var n = Aa(e, a);
  return n && n !== rt ? n.clipPath(t, e._transform) : tt(t);
}
function zr(e) {
  var a = St(e[0][0], e[1][0]),
    t = St(e[0][1], e[1][1]),
    n = ut(e[0][0], e[1][0]),
    r = ut(e[0][1], e[1][1]);
  return { x: a, y: t, width: n - a, height: r - t };
}
function Rr(e, a, t) {
  if (!(!e._brushType || $r(e, a.offsetX, a.offsetY))) {
    var n = e._zr,
      r = e._covers,
      o = le(e, a, t);
    if (!e._dragging)
      for (var i = 0; i < r.length; i++) {
        var s = r[i].__brushOption;
        if (
          o &&
          (o === rt || s.panelId === o.panelId) &&
          Ot[s.brushType].contain(r[i], t[0], t[1])
        )
          return;
      }
    o && n.setCursorStyle("crosshair");
  }
}
function Yt(e) {
  var a = e.event;
  a.preventDefault && a.preventDefault();
}
function qt(e, a, t) {
  return e.childOfName("main").contain(a, t);
}
function La(e, a, t, n) {
  var r = e._creatingCover,
    o = e._creatingPanel,
    i = e._brushOption,
    s;
  if ((e._track.push(t.slice()), kr(e) || r)) {
    if (o && !r) {
      i.brushMode === "single" && Gt(e);
      var u = tt(i);
      (u.brushType = De(u.brushType, o)),
        (u.panelId = o === rt ? null : o.panelId),
        (r = e._creatingCover = xa(e, u)),
        e._covers.push(r);
    }
    if (r) {
      var c = Ot[De(e._brushType, o)],
        d = r.__brushOption;
      (d.range = c.getCreatingRange(ce(e, r, e._track))),
        n && (Sa(e, r), c.updateCommon(e, r)),
        Ca(e, r),
        (s = { isEnd: n });
    }
  } else
    n &&
      i.brushMode === "single" &&
      i.removeOnClick &&
      le(e, a, t) &&
      Gt(e) &&
      (s = { isEnd: n, removeOnClick: !0 });
  return s;
}
function De(e, a) {
  return e === "auto" ? a.defaultBrushType : e;
}
var Er = {
  mousedown: function (e) {
    if (this._dragging) Pe(this, e);
    else if (!e.target || !e.target.draggable) {
      Yt(e);
      var a = this.group.transformCoordToLocal(e.offsetX, e.offsetY);
      this._creatingCover = null;
      var t = (this._creatingPanel = le(this, e, a));
      t && ((this._dragging = !0), (this._track = [a.slice()]));
    }
  },
  mousemove: function (e) {
    var a = e.offsetX,
      t = e.offsetY,
      n = this.group.transformCoordToLocal(a, t);
    if ((Rr(this, e, n), this._dragging)) {
      Yt(e);
      var r = La(this, e, n, !1);
      r && ot(this, r);
    }
  },
  mouseup: function (e) {
    Pe(this, e);
  },
};
function Pe(e, a) {
  if (e._dragging) {
    Yt(a);
    var t = a.offsetX,
      n = a.offsetY,
      r = e.group.transformCoordToLocal(t, n),
      o = La(e, a, r, !0);
    (e._dragging = !1),
      (e._track = []),
      (e._creatingCover = null),
      o && ot(e, o);
  }
}
function $r(e, a, t) {
  var n = e._zr;
  return a < 0 || a > n.getWidth() || t < 0 || t > n.getHeight();
}
var Ot = {
  lineX: Oe(0),
  lineY: Oe(1),
  rect: {
    createCover: function (e, a) {
      function t(n) {
        return n;
      }
      return Da({ toRectRange: t, fromRectRange: t }, e, a, [
        ["w"],
        ["e"],
        ["n"],
        ["s"],
        ["s", "e"],
        ["s", "w"],
        ["n", "e"],
        ["n", "w"],
      ]);
    },
    getCreatingRange: function (e) {
      var a = Ta(e);
      return Oa(a[1][0], a[1][1], a[0][0], a[0][1]);
    },
    updateCoverShape: function (e, a, t, n) {
      Pa(e, a, t, n);
    },
    updateCommon: Ht,
    contain: qt,
  },
  polygon: {
    createCover: function (e, a) {
      var t = new Ct();
      return t.add(new da({ name: "main", style: ue(a), silent: !0 })), t;
    },
    getCreatingRange: function (e) {
      return e;
    },
    endCreating: function (e, a) {
      a.remove(a.childAt(0)),
        a.add(
          new qa({
            name: "main",
            draggable: !0,
            drift: Z(Nr, e, a),
            ondragend: Z(ot, e, { isEnd: !0 }),
          })
        );
    },
    updateCoverShape: function (e, a, t, n) {
      a.childAt(0).setShape({ points: ce(e, a, t) });
    },
    updateCommon: Ht,
    contain: qt,
  },
};
function Oe(e) {
  return {
    createCover: function (a, t) {
      return Da(
        {
          toRectRange: function (n) {
            var r = [n, [0, 100]];
            return e && r.reverse(), r;
          },
          fromRectRange: function (n) {
            return n[e];
          },
        },
        a,
        t,
        [
          [["w"], ["e"]],
          [["n"], ["s"]],
        ][e]
      );
    },
    getCreatingRange: function (a) {
      var t = Ta(a),
        n = St(t[0][e], t[1][e]),
        r = ut(t[0][e], t[1][e]);
      return [n, r];
    },
    updateCoverShape: function (a, t, n, r) {
      var o,
        i = Aa(a, t);
      if (i !== rt && i.getLinearBrushOtherExtent)
        o = i.getLinearBrushOtherExtent(e);
      else {
        var s = a._zr;
        o = [0, [s.getWidth(), s.getHeight()][1 - e]];
      }
      var u = [n, o];
      e && u.reverse(), Pa(a, t, u, r);
    },
    updateCommon: Ht,
    contain: qt,
  };
}
var Vr = Lr;
function Fr(e) {
  return (
    (e = de(e)),
    function (a) {
      return Xa(a, e);
    }
  );
}
function Wr(e, a) {
  return (
    (e = de(e)),
    function (t) {
      var n = a != null ? a : t,
        r = n ? e.width : e.height,
        o = n ? e.x : e.y;
      return [o, o + (r || 0)];
    }
  );
}
function Zr(e, a, t) {
  var n = de(e);
  return function (r, o) {
    return n.contain(o[0], o[1]) && !Cr(r, a, t);
  };
}
function de(e) {
  return te.create(e);
}
var jr = (function () {
    function e() {}
    return (
      (e.prototype.getInitialData = function (a, t) {
        var n,
          r = t.getComponent("xAxis", this.get("xAxisIndex")),
          o = t.getComponent("yAxis", this.get("yAxisIndex")),
          i = r.get("type"),
          s = o.get("type"),
          u;
        i === "category"
          ? ((a.layout = "horizontal"), (n = r.getOrdinalMeta()), (u = !0))
          : s === "category"
          ? ((a.layout = "vertical"), (n = o.getOrdinalMeta()), (u = !0))
          : (a.layout = a.layout || "horizontal");
        var c = ["x", "y"],
          d = a.layout === "horizontal" ? 0 : 1,
          h = (this._baseAxisDim = c[d]),
          p = c[1 - d],
          y = [r, o],
          g = y[d].get("type"),
          m = y[1 - d].get("type"),
          b = a.data;
        if (b && u) {
          var x = [];
          P(b, function (_, D) {
            var T;
            U(_)
              ? ((T = _.slice()), _.unshift(D))
              : U(_.value)
              ? ((T = lt({}, _)),
                (T.value = T.value.slice()),
                _.value.unshift(D))
              : (T = _),
              x.push(T);
          }),
            (a.data = x);
        }
        var S = this.defaultValueDimensions,
          w = [
            {
              name: h,
              type: me(g),
              ordinalMeta: n,
              otherDims: { tooltip: !1, itemName: 0 },
              dimsDef: ["base"],
            },
            { name: p, type: me(m), dimsDef: S.slice() },
          ];
        return hr(this, {
          coordDimensions: w,
          dimensionsCount: S.length + 1,
          encodeDefaulter: Z(Ja, w, this),
        });
      }),
      (e.prototype.getBaseAxis = function () {
        var a = this._baseAxisDim;
        return this.ecModel.getComponent(a + "Axis", this.get(a + "AxisIndex"))
          .axis;
      }),
      e
    );
  })(),
  Gr = ["color", "borderColor"],
  Hr = (function (e) {
    z(a, e);
    function a() {
      var t = (e !== null && e.apply(this, arguments)) || this;
      return (t.type = a.type), t;
    }
    return (
      (a.prototype.render = function (t, n, r) {
        this.group.removeClipPath(),
          (this._progressiveEls = null),
          this._updateDrawMode(t),
          this._isLargeDraw ? this._renderLarge(t) : this._renderNormal(t);
      }),
      (a.prototype.incrementalPrepareRender = function (t, n, r) {
        this._clear(), this._updateDrawMode(t);
      }),
      (a.prototype.incrementalRender = function (t, n, r, o) {
        (this._progressiveEls = []),
          this._isLargeDraw
            ? this._incrementalRenderLarge(t, n)
            : this._incrementalRenderNormal(t, n);
      }),
      (a.prototype.eachRendered = function (t) {
        Qa(this._progressiveEls || this.group, t);
      }),
      (a.prototype._updateDrawMode = function (t) {
        var n = t.pipelineContext.large;
        (this._isLargeDraw == null || n !== this._isLargeDraw) &&
          ((this._isLargeDraw = n), this._clear());
      }),
      (a.prototype._renderNormal = function (t) {
        var n = t.getData(),
          r = this._data,
          o = this.group,
          i = n.getLayout("isSimpleBox"),
          s = t.get("clip", !0),
          u = t.coordinateSystem,
          c = u.getArea && u.getArea();
        this._data || o.removeAll(),
          n
            .diff(r)
            .add(function (d) {
              if (n.hasValue(d)) {
                var h = n.getItemLayout(d);
                if (s && Ie(c, h)) return;
                var p = Bt(h, d, !0);
                tn(p, { shape: { points: h.ends } }, t, d),
                  Nt(p, n, d, i),
                  o.add(p),
                  n.setItemGraphicEl(d, p);
              }
            })
            .update(function (d, h) {
              var p = r.getItemGraphicEl(h);
              if (!n.hasValue(d)) {
                o.remove(p);
                return;
              }
              var y = n.getItemLayout(d);
              if (s && Ie(c, y)) {
                o.remove(p);
                return;
              }
              p
                ? (en(p, { shape: { points: y.ends } }, t, d), an(p))
                : (p = Bt(y)),
                Nt(p, n, d, i),
                o.add(p),
                n.setItemGraphicEl(d, p);
            })
            .remove(function (d) {
              var h = r.getItemGraphicEl(d);
              h && o.remove(h);
            })
            .execute(),
          (this._data = n);
      }),
      (a.prototype._renderLarge = function (t) {
        this._clear(), ke(t, this.group);
        var n = t.get("clip", !0) ? Jn(t.coordinateSystem, !1, t) : null;
        n ? this.group.setClipPath(n) : this.group.removeClipPath();
      }),
      (a.prototype._incrementalRenderNormal = function (t, n) {
        for (
          var r = n.getData(), o = r.getLayout("isSimpleBox"), i;
          (i = t.next()) != null;

        ) {
          var s = r.getItemLayout(i),
            u = Bt(s);
          Nt(u, r, i, o),
            (u.incremental = !0),
            this.group.add(u),
            this._progressiveEls.push(u);
        }
      }),
      (a.prototype._incrementalRenderLarge = function (t, n) {
        ke(n, this.group, this._progressiveEls, !0);
      }),
      (a.prototype.remove = function (t) {
        this._clear();
      }),
      (a.prototype._clear = function () {
        this.group.removeAll(), (this._data = null);
      }),
      (a.type = "candlestick"),
      a
    );
  })(ua),
  Ur = (function () {
    function e() {}
    return e;
  })(),
  Yr = (function (e) {
    z(a, e);
    function a(t) {
      var n = e.call(this, t) || this;
      return (n.type = "normalCandlestickBox"), n;
    }
    return (
      (a.prototype.getDefaultShape = function () {
        return new Ur();
      }),
      (a.prototype.buildPath = function (t, n) {
        var r = n.points;
        this.__simpleBox
          ? (t.moveTo(r[4][0], r[4][1]), t.lineTo(r[6][0], r[6][1]))
          : (t.moveTo(r[0][0], r[0][1]),
            t.lineTo(r[1][0], r[1][1]),
            t.lineTo(r[2][0], r[2][1]),
            t.lineTo(r[3][0], r[3][1]),
            t.closePath(),
            t.moveTo(r[4][0], r[4][1]),
            t.lineTo(r[5][0], r[5][1]),
            t.moveTo(r[6][0], r[6][1]),
            t.lineTo(r[7][0], r[7][1]));
      }),
      a
    );
  })(ee);
function Bt(e, a, t) {
  var n = e.ends;
  return new Yr({ shape: { points: t ? qr(n, e) : n }, z2: 100 });
}
function Ie(e, a) {
  for (var t = !0, n = 0; n < a.ends.length; n++)
    if (e.contain(a.ends[n][0], a.ends[n][1])) {
      t = !1;
      break;
    }
  return t;
}
function Nt(e, a, t, n) {
  var r = a.getItemModel(t);
  e.useStyle(a.getItemVisual(t, "style")),
    (e.style.strokeNoScale = !0),
    (e.__simpleBox = n),
    nn(e, r);
}
function qr(e, a) {
  return W(e, function (t) {
    return (t = t.slice()), (t[1] = a.initBaseline), t;
  });
}
var Kr = (function () {
    function e() {}
    return e;
  })(),
  Le = (function (e) {
    z(a, e);
    function a(t) {
      var n = e.call(this, t) || this;
      return (n.type = "largeCandlestickBox"), n;
    }
    return (
      (a.prototype.getDefaultShape = function () {
        return new Kr();
      }),
      (a.prototype.buildPath = function (t, n) {
        for (var r = n.points, o = 0; o < r.length; )
          if (this.__sign === r[o++]) {
            var i = r[o++];
            t.moveTo(i, r[o++]), t.lineTo(i, r[o++]);
          } else o += 3;
      }),
      a
    );
  })(ee);
function ke(e, a, t, n) {
  var r = e.getData(),
    o = r.getLayout("largePoints"),
    i = new Le({ shape: { points: o }, __sign: 1 });
  a.add(i);
  var s = new Le({ shape: { points: o }, __sign: -1 });
  a.add(s),
    Me(1, i, e),
    Me(-1, s, e),
    n && ((i.incremental = !0), (s.incremental = !0)),
    t && t.push(i, s);
}
function Me(e, a, t, n) {
  var r =
      t.get(["itemStyle", e > 0 ? "borderColor" : "borderColor0"]) ||
      t.get(["itemStyle", e > 0 ? "color" : "color0"]),
    o = t.getModel("itemStyle").getItemStyle(Gr);
  a.useStyle(o), (a.style.fill = null), (a.style.stroke = r);
}
var Xr = Hr,
  ka = (function (e) {
    z(a, e);
    function a() {
      var t = (e !== null && e.apply(this, arguments)) || this;
      return (
        (t.type = a.type),
        (t.defaultValueDimensions = [
          { name: "open", defaultTooltip: !0 },
          { name: "close", defaultTooltip: !0 },
          { name: "lowest", defaultTooltip: !0 },
          { name: "highest", defaultTooltip: !0 },
        ]),
        t
      );
    }
    return (
      (a.prototype.getShadowDim = function () {
        return "open";
      }),
      (a.prototype.brushSelector = function (t, n, r) {
        var o = n.getItemLayout(t);
        return o && r.rect(o.brushRect);
      }),
      (a.type = "series.candlestick"),
      (a.dependencies = ["xAxis", "yAxis", "grid"]),
      (a.defaultOption = {
        z: 2,
        coordinateSystem: "cartesian2d",
        legendHoverLink: !0,
        layout: null,
        clip: !0,
        itemStyle: {
          color: "#eb5454",
          color0: "#47b262",
          borderColor: "#eb5454",
          borderColor0: "#47b262",
          borderWidth: 1,
        },
        emphasis: { scale: !0, itemStyle: { borderWidth: 2 } },
        barMaxWidth: null,
        barMinWidth: null,
        barWidth: null,
        large: !0,
        largeThreshold: 600,
        progressive: 3e3,
        progressiveThreshold: 1e4,
        progressiveChunkMode: "mod",
        animationEasing: "linear",
        animationDuration: 300,
      }),
      a
    );
  })(ia);
pa(ka, jr, !0);
var Jr = ka;
function Qr(e) {
  !e ||
    !U(e.series) ||
    P(e.series, function (a) {
      bt(a) && a.type === "k" && (a.type = "candlestick");
    });
}
var to = ["itemStyle", "borderColor"],
  eo = ["itemStyle", "borderColor0"],
  ao = ["itemStyle", "color"],
  no = ["itemStyle", "color0"],
  ro = {
    seriesType: "candlestick",
    plan: fa(),
    performRawSeries: !0,
    reset: function (e, a) {
      function t(o, i) {
        return i.get(o > 0 ? ao : no);
      }
      function n(o, i) {
        return i.get(o > 0 ? to : eo);
      }
      if (!a.isSeriesFiltered(e)) {
        var r = e.pipelineContext.large;
        return (
          !r && {
            progress: function (o, i) {
              for (var s; (s = o.next()) != null; ) {
                var u = i.getItemModel(s),
                  c = i.getItemLayout(s).sign,
                  d = u.getItemStyle();
                (d.fill = t(c, u)), (d.stroke = n(c, u) || d.fill);
                var h = i.ensureUniqueItemVisual(s, "style");
                lt(h, d);
              }
            },
          }
        );
      }
    },
  },
  oo = ro,
  io = {
    seriesType: "candlestick",
    plan: fa(),
    reset: function (e) {
      var a = e.coordinateSystem,
        t = e.getData(),
        n = so(e, t),
        r = 0,
        o = 1,
        i = ["x", "y"],
        s = t.getDimensionIndex(t.mapDimension(i[r])),
        u = W(t.mapDimensionsAll(i[o]), t.getDimensionIndex, t),
        c = u[0],
        d = u[1],
        h = u[2],
        p = u[3];
      if (
        (t.setLayout({ candleWidth: n, isSimpleBox: n <= 1.3 }),
        s < 0 || u.length < 4)
      )
        return;
      return { progress: e.pipelineContext.large ? g : y };
      function y(m, b) {
        for (var x, S = b.getStore(); (x = m.next()) != null; ) {
          var w = S.get(s, x),
            _ = S.get(c, x),
            D = S.get(d, x),
            T = S.get(h, x),
            O = S.get(p, x),
            B = Math.min(_, D),
            k = Math.max(_, D),
            l = L(B, w),
            f = L(k, w),
            v = L(T, w),
            C = L(O, w),
            I = [];
          j(I, f, 0),
            j(I, l, 1),
            I.push($(C), $(f), $(v), $(l)),
            b.setItemLayout(x, {
              sign: Be(S, x, _, D, d),
              initBaseline: _ > D ? f[o] : l[o],
              ends: I,
              brushRect: J(T, O, w),
            });
        }
        function L(M, F) {
          var A = [];
          return (
            (A[r] = F),
            (A[o] = M),
            isNaN(F) || isNaN(M) ? [NaN, NaN] : a.dataToPoint(A)
          );
        }
        function j(M, F, A) {
          var N = F.slice(),
            V = F.slice();
          (N[r] = kt(N[r] + n / 2, 1, !1)),
            (V[r] = kt(V[r] - n / 2, 1, !0)),
            A ? M.push(N, V) : M.push(V, N);
        }
        function J(M, F, A) {
          var N = L(M, A),
            V = L(F, A);
          return (
            (N[r] -= n / 2),
            (V[r] -= n / 2),
            { x: N[0], y: N[1], width: n, height: V[1] - N[1] }
          );
        }
        function $(M) {
          return (M[r] = kt(M[r], 1)), M;
        }
      }
      function g(m, b) {
        for (
          var x = rn(m.count * 4),
            S = 0,
            w,
            _ = [],
            D = [],
            T,
            O = b.getStore();
          (T = m.next()) != null;

        ) {
          var B = O.get(s, T),
            k = O.get(c, T),
            l = O.get(d, T),
            f = O.get(h, T),
            v = O.get(p, T);
          if (isNaN(B) || isNaN(f) || isNaN(v)) {
            (x[S++] = NaN), (S += 3);
            continue;
          }
          (x[S++] = Be(O, T, k, l, d)),
            (_[r] = B),
            (_[o] = f),
            (w = a.dataToPoint(_, null, D)),
            (x[S++] = w ? w[0] : NaN),
            (x[S++] = w ? w[1] : NaN),
            (_[o] = v),
            (w = a.dataToPoint(_, null, D)),
            (x[S++] = w ? w[1] : NaN);
        }
        b.setLayout("largePoints", x);
      }
    },
  };
function Be(e, a, t, n, r) {
  var o;
  return (
    t > n
      ? (o = -1)
      : t < n
      ? (o = 1)
      : (o = a > 0 ? (e.get(r, a - 1) <= n ? 1 : -1) : 1),
    o
  );
}
function so(e, a) {
  var t = e.getBaseAxis(),
    n,
    r =
      t.type === "category"
        ? t.getBandWidth()
        : ((n = t.getExtent()), Math.abs(n[1] - n[0]) / a.count()),
    o = wt(jt(e.get("barMaxWidth"), r), r),
    i = wt(jt(e.get("barMinWidth"), 1), r),
    s = e.get("barWidth");
  return s != null ? wt(s, r) : Math.max(Math.min(r / 2, o), i);
}
var lo = io;
function uo(e) {
  e.registerChartView(Xr),
    e.registerSeriesModel(Jr),
    e.registerPreprocessor(Qr),
    e.registerVisual(oo),
    e.registerLayout(lo);
}
var co = (function (e) {
  z(a, e);
  function a() {
    var t = (e !== null && e.apply(this, arguments)) || this;
    return (t.type = a.type), t;
  }
  return (
    (a.prototype.init = function (t, n, r) {
      var o = on(t);
      e.prototype.init.apply(this, arguments), Ne(t, o);
    }),
    (a.prototype.mergeOption = function (t) {
      e.prototype.mergeOption.apply(this, arguments), Ne(this.option, t);
    }),
    (a.prototype.getCellSize = function () {
      return this.option.cellSize;
    }),
    (a.type = "calendar"),
    (a.defaultOption = {
      z: 2,
      left: 80,
      top: 60,
      cellSize: 20,
      orient: "horizontal",
      splitLine: {
        show: !0,
        lineStyle: { color: "#000", width: 1, type: "solid" },
      },
      itemStyle: { color: "#fff", borderWidth: 1, borderColor: "#ccc" },
      dayLabel: {
        show: !0,
        firstDay: 0,
        position: "start",
        margin: "50%",
        color: "#000",
      },
      monthLabel: {
        show: !0,
        position: "start",
        margin: 5,
        align: "center",
        formatter: null,
        color: "#000",
      },
      yearLabel: {
        show: !0,
        position: null,
        margin: 30,
        formatter: null,
        color: "#ccc",
        fontFamily: "sans-serif",
        fontWeight: "bolder",
        fontSize: 20,
      },
    }),
    a
  );
})(ne);
function Ne(e, a) {
  var t = e.cellSize,
    n;
  U(t) ? (n = t) : (n = e.cellSize = [t, t]), n.length === 1 && (n[1] = n[0]);
  var r = W([0, 1], function (o) {
    return sn(a, o) && (n[o] = "auto"), n[o] != null && n[o] !== "auto";
  });
  ln(e, a, { type: "box", ignoreSize: r });
}
var ho = co,
  po = (function (e) {
    z(a, e);
    function a() {
      var t = (e !== null && e.apply(this, arguments)) || this;
      return (t.type = a.type), t;
    }
    return (
      (a.prototype.render = function (t, n, r) {
        var o = this.group;
        o.removeAll();
        var i = t.coordinateSystem,
          s = i.getRangeInfo(),
          u = i.getOrient(),
          c = n.getLocaleModel();
        this._renderDayRect(t, s, o),
          this._renderLines(t, s, u, o),
          this._renderYearText(t, s, u, o),
          this._renderMonthText(t, c, u, o),
          this._renderWeekText(t, c, s, u, o);
      }),
      (a.prototype._renderDayRect = function (t, n, r) {
        for (
          var o = t.coordinateSystem,
            i = t.getModel("itemStyle").getItemStyle(),
            s = o.getCellWidth(),
            u = o.getCellHeight(),
            c = n.start.time;
          c <= n.end.time;
          c = o.getNextNDay(c, 1).time
        ) {
          var d = o.dataToRect([c], !1).tl,
            h = new Zt({
              shape: { x: d[0], y: d[1], width: s, height: u },
              cursor: "default",
              style: i,
            });
          r.add(h);
        }
      }),
      (a.prototype._renderLines = function (t, n, r, o) {
        var i = this,
          s = t.coordinateSystem,
          u = t.getModel(["splitLine", "lineStyle"]).getLineStyle(),
          c = t.get(["splitLine", "show"]),
          d = u.lineWidth;
        (this._tlpoints = []),
          (this._blpoints = []),
          (this._firstDayOfMonth = []),
          (this._firstDayPoints = []);
        for (var h = n.start, p = 0; h.time <= n.end.time; p++) {
          g(h.formatedDate),
            p === 0 && (h = s.getDateInfo(n.start.y + "-" + n.start.m));
          var y = h.date;
          y.setMonth(y.getMonth() + 1), (h = s.getDateInfo(y));
        }
        g(s.getNextNDay(n.end.time, 1).formatedDate);
        function g(m) {
          i._firstDayOfMonth.push(s.getDateInfo(m)),
            i._firstDayPoints.push(s.dataToRect([m], !1).tl);
          var b = i._getLinePointsOfOneWeek(t, m, r);
          i._tlpoints.push(b[0]),
            i._blpoints.push(b[b.length - 1]),
            c && i._drawSplitline(b, u, o);
        }
        c && this._drawSplitline(i._getEdgesPoints(i._tlpoints, d, r), u, o),
          c && this._drawSplitline(i._getEdgesPoints(i._blpoints, d, r), u, o);
      }),
      (a.prototype._getEdgesPoints = function (t, n, r) {
        var o = [t[0].slice(), t[t.length - 1].slice()],
          i = r === "horizontal" ? 0 : 1;
        return (o[0][i] = o[0][i] - n / 2), (o[1][i] = o[1][i] + n / 2), o;
      }),
      (a.prototype._drawSplitline = function (t, n, r) {
        var o = new da({ z2: 20, shape: { points: t }, style: n });
        r.add(o);
      }),
      (a.prototype._getLinePointsOfOneWeek = function (t, n, r) {
        for (
          var o = t.coordinateSystem, i = o.getDateInfo(n), s = [], u = 0;
          u < 7;
          u++
        ) {
          var c = o.getNextNDay(i.time, u),
            d = o.dataToRect([c.time], !1);
          (s[2 * c.day] = d.tl),
            (s[2 * c.day + 1] = d[r === "horizontal" ? "bl" : "tr"]);
        }
        return s;
      }),
      (a.prototype._formatterLabel = function (t, n) {
        return et(t) && t ? un(t, n) : _t(t) ? t(n) : n.nameMap;
      }),
      (a.prototype._yearTextPositionControl = function (t, n, r, o, i) {
        var s = n[0],
          u = n[1],
          c = ["center", "bottom"];
        o === "bottom"
          ? ((u += i), (c = ["center", "top"]))
          : o === "left"
          ? (s -= i)
          : o === "right"
          ? ((s += i), (c = ["center", "top"]))
          : (u -= i);
        var d = 0;
        return (
          (o === "left" || o === "right") && (d = Math.PI / 2),
          {
            rotation: d,
            x: s,
            y: u,
            style: { align: c[0], verticalAlign: c[1] },
          }
        );
      }),
      (a.prototype._renderYearText = function (t, n, r, o) {
        var i = t.getModel("yearLabel");
        if (!!i.get("show")) {
          var s = i.get("margin"),
            u = i.get("position");
          u || (u = r !== "horizontal" ? "top" : "left");
          var c = [
              this._tlpoints[this._tlpoints.length - 1],
              this._blpoints[0],
            ],
            d = (c[0][0] + c[1][0]) / 2,
            h = (c[0][1] + c[1][1]) / 2,
            p = r === "horizontal" ? 0 : 1,
            y = {
              top: [d, c[p][1]],
              bottom: [d, c[1 - p][1]],
              left: [c[1 - p][0], h],
              right: [c[p][0], h],
            },
            g = n.start.y;
          +n.end.y > +n.start.y && (g = g + "-" + n.end.y);
          var m = i.get("formatter"),
            b = { start: n.start.y, end: n.end.y, nameMap: g },
            x = this._formatterLabel(m, b),
            S = new it({ z2: 30, style: st(i, { text: x }) });
          S.attr(this._yearTextPositionControl(S, y[u], r, u, s)), o.add(S);
        }
      }),
      (a.prototype._monthTextPositionControl = function (t, n, r, o, i) {
        var s = "left",
          u = "top",
          c = t[0],
          d = t[1];
        return (
          r === "horizontal"
            ? ((d = d + i),
              n && (s = "center"),
              o === "start" && (u = "bottom"))
            : ((c = c + i),
              n && (u = "middle"),
              o === "start" && (s = "right")),
          { x: c, y: d, align: s, verticalAlign: u }
        );
      }),
      (a.prototype._renderMonthText = function (t, n, r, o) {
        var i = t.getModel("monthLabel");
        if (!!i.get("show")) {
          var s = i.get("nameMap"),
            u = i.get("margin"),
            c = i.get("position"),
            d = i.get("align"),
            h = [this._tlpoints, this._blpoints];
          (!s || et(s)) &&
            (s && (n = ye(s) || n), (s = n.get(["time", "monthAbbr"]) || []));
          var p = c === "start" ? 0 : 1,
            y = r === "horizontal" ? 0 : 1;
          u = c === "start" ? -u : u;
          for (var g = d === "center", m = 0; m < h[p].length - 1; m++) {
            var b = h[p][m].slice(),
              x = this._firstDayOfMonth[m];
            if (g) {
              var S = this._firstDayPoints[m];
              b[y] = (S[y] + h[0][m + 1][y]) / 2;
            }
            var w = i.get("formatter"),
              _ = s[+x.m - 1],
              D = {
                yyyy: x.y,
                yy: (x.y + "").slice(2),
                MM: x.m,
                M: +x.m,
                nameMap: _,
              },
              T = this._formatterLabel(w, D),
              O = new it({
                z2: 30,
                style: lt(
                  st(i, { text: T }),
                  this._monthTextPositionControl(b, g, r, c, u)
                ),
              });
            o.add(O);
          }
        }
      }),
      (a.prototype._weekTextPositionControl = function (t, n, r, o, i) {
        var s = "center",
          u = "middle",
          c = t[0],
          d = t[1],
          h = r === "start";
        return (
          n === "horizontal"
            ? ((c = c + o + ((h ? 1 : -1) * i[0]) / 2),
              (s = h ? "right" : "left"))
            : ((d = d + o + ((h ? 1 : -1) * i[1]) / 2),
              (u = h ? "bottom" : "top")),
          { x: c, y: d, align: s, verticalAlign: u }
        );
      }),
      (a.prototype._renderWeekText = function (t, n, r, o, i) {
        var s = t.getModel("dayLabel");
        if (!!s.get("show")) {
          var u = t.coordinateSystem,
            c = s.get("position"),
            d = s.get("nameMap"),
            h = s.get("margin"),
            p = u.getFirstDayOfWeek();
          if (!d || et(d)) {
            d && (n = ye(d) || n);
            var y = n.get(["time", "dayOfWeekShort"]);
            d =
              y ||
              W(n.get(["time", "dayOfWeekAbbr"]), function (D) {
                return D[0];
              });
          }
          var g = u.getNextNDay(r.end.time, 7 - r.lweek).time,
            m = [u.getCellWidth(), u.getCellHeight()];
          (h = wt(h, Math.min(m[1], m[0]))),
            c === "start" &&
              ((g = u.getNextNDay(r.start.time, -(7 + r.fweek)).time),
              (h = -h));
          for (var b = 0; b < 7; b++) {
            var x = u.getNextNDay(g, b),
              S = u.dataToRect([x.time], !1).center,
              w = b;
            w = Math.abs((b + p) % 7);
            var _ = new it({
              z2: 30,
              style: lt(
                st(s, { text: d[w] }),
                this._weekTextPositionControl(S, o, c, h, m)
              ),
            });
            i.add(_);
          }
        }
      }),
      (a.type = "calendar"),
      a
    );
  })(re),
  fo = po,
  zt = 864e5,
  vo = (function () {
    function e(a, t, n) {
      (this.type = "calendar"),
        (this.dimensions = e.dimensions),
        (this.getDimensionsInfo = e.getDimensionsInfo),
        (this._model = a);
    }
    return (
      (e.getDimensionsInfo = function () {
        return [{ name: "time", type: "time" }, "value"];
      }),
      (e.prototype.getRangeInfo = function () {
        return this._rangeInfo;
      }),
      (e.prototype.getModel = function () {
        return this._model;
      }),
      (e.prototype.getRect = function () {
        return this._rect;
      }),
      (e.prototype.getCellWidth = function () {
        return this._sw;
      }),
      (e.prototype.getCellHeight = function () {
        return this._sh;
      }),
      (e.prototype.getOrient = function () {
        return this._orient;
      }),
      (e.prototype.getFirstDayOfWeek = function () {
        return this._firstDayOfWeek;
      }),
      (e.prototype.getDateInfo = function (a) {
        a = cn(a);
        var t = a.getFullYear(),
          n = a.getMonth() + 1,
          r = n < 10 ? "0" + n : "" + n,
          o = a.getDate(),
          i = o < 10 ? "0" + o : "" + o,
          s = a.getDay();
        return (
          (s = Math.abs((s + 7 - this.getFirstDayOfWeek()) % 7)),
          {
            y: t + "",
            m: r,
            d: i,
            day: s,
            time: a.getTime(),
            formatedDate: t + "-" + r + "-" + i,
            date: a,
          }
        );
      }),
      (e.prototype.getNextNDay = function (a, t) {
        return (
          (t = t || 0),
          t === 0
            ? this.getDateInfo(a)
            : ((a = new Date(this.getDateInfo(a).time)),
              a.setDate(a.getDate() + t),
              this.getDateInfo(a))
        );
      }),
      (e.prototype.update = function (a, t) {
        (this._firstDayOfWeek = +this._model
          .getModel("dayLabel")
          .get("firstDay")),
          (this._orient = this._model.get("orient")),
          (this._lineWidth =
            this._model.getModel("itemStyle").getItemStyle().lineWidth || 0),
          (this._rangeInfo = this._getRangeInfo(this._initRangeOption()));
        var n = this._rangeInfo.weeks || 1,
          r = ["width", "height"],
          o = this._model.getCellSize().slice(),
          i = this._model.getBoxLayoutParams(),
          s = this._orient === "horizontal" ? [n, 7] : [7, n];
        P([0, 1], function (h) {
          d(o, h) && (i[r[h]] = o[h] * s[h]);
        });
        var u = { width: t.getWidth(), height: t.getHeight() },
          c = (this._rect = va(i, u));
        P([0, 1], function (h) {
          d(o, h) || (o[h] = c[r[h]] / s[h]);
        });
        function d(h, p) {
          return h[p] != null && h[p] !== "auto";
        }
        (this._sw = o[0]), (this._sh = o[1]);
      }),
      (e.prototype.dataToPoint = function (a, t) {
        U(a) && (a = a[0]), t == null && (t = !0);
        var n = this.getDateInfo(a),
          r = this._rangeInfo,
          o = n.formatedDate;
        if (t && !(n.time >= r.start.time && n.time < r.end.time + zt))
          return [NaN, NaN];
        var i = n.day,
          s = this._getRangeInfo([r.start.time, o]).nthWeek;
        return this._orient === "vertical"
          ? [
              this._rect.x + i * this._sw + this._sw / 2,
              this._rect.y + s * this._sh + this._sh / 2,
            ]
          : [
              this._rect.x + s * this._sw + this._sw / 2,
              this._rect.y + i * this._sh + this._sh / 2,
            ];
      }),
      (e.prototype.pointToData = function (a) {
        var t = this.pointToDate(a);
        return t && t.time;
      }),
      (e.prototype.dataToRect = function (a, t) {
        var n = this.dataToPoint(a, t);
        return {
          contentShape: {
            x: n[0] - (this._sw - this._lineWidth) / 2,
            y: n[1] - (this._sh - this._lineWidth) / 2,
            width: this._sw - this._lineWidth,
            height: this._sh - this._lineWidth,
          },
          center: n,
          tl: [n[0] - this._sw / 2, n[1] - this._sh / 2],
          tr: [n[0] + this._sw / 2, n[1] - this._sh / 2],
          br: [n[0] + this._sw / 2, n[1] + this._sh / 2],
          bl: [n[0] - this._sw / 2, n[1] + this._sh / 2],
        };
      }),
      (e.prototype.pointToDate = function (a) {
        var t = Math.floor((a[0] - this._rect.x) / this._sw) + 1,
          n = Math.floor((a[1] - this._rect.y) / this._sh) + 1,
          r = this._rangeInfo.range;
        return this._orient === "vertical"
          ? this._getDateByWeeksAndDay(n, t - 1, r)
          : this._getDateByWeeksAndDay(t, n - 1, r);
      }),
      (e.prototype.convertToPixel = function (a, t, n) {
        var r = ze(t);
        return r === this ? r.dataToPoint(n) : null;
      }),
      (e.prototype.convertFromPixel = function (a, t, n) {
        var r = ze(t);
        return r === this ? r.pointToData(n) : null;
      }),
      (e.prototype.containPoint = function (a) {
        return console.warn("Not implemented."), !1;
      }),
      (e.prototype._initRangeOption = function () {
        var a = this._model.get("range"),
          t;
        if ((U(a) && a.length === 1 && (a = a[0]), U(a))) t = a;
        else {
          var n = a.toString();
          if (
            (/^\d{4}$/.test(n) && (t = [n + "-01-01", n + "-12-31"]),
            /^\d{4}[\/|-]\d{1,2}$/.test(n))
          ) {
            var r = this.getDateInfo(n),
              o = r.date;
            o.setMonth(o.getMonth() + 1);
            var i = this.getNextNDay(o, -1);
            t = [r.formatedDate, i.formatedDate];
          }
          /^\d{4}[\/|-]\d{1,2}[\/|-]\d{1,2}$/.test(n) && (t = [n, n]);
        }
        if (!t) return a;
        var s = this._getRangeInfo(t);
        return s.start.time > s.end.time && t.reverse(), t;
      }),
      (e.prototype._getRangeInfo = function (a) {
        var t = [this.getDateInfo(a[0]), this.getDateInfo(a[1])],
          n;
        t[0].time > t[1].time && ((n = !0), t.reverse());
        var r = Math.floor(t[1].time / zt) - Math.floor(t[0].time / zt) + 1,
          o = new Date(t[0].time),
          i = o.getDate(),
          s = t[1].date.getDate();
        o.setDate(i + r - 1);
        var u = o.getDate();
        if (u !== s)
          for (
            var c = o.getTime() - t[1].time > 0 ? 1 : -1;
            (u = o.getDate()) !== s && (o.getTime() - t[1].time) * c > 0;

          )
            (r -= c), o.setDate(u - c);
        var d = Math.floor((r + t[0].day + 6) / 7),
          h = n ? -d + 1 : d - 1;
        return (
          n && t.reverse(),
          {
            range: [t[0].formatedDate, t[1].formatedDate],
            start: t[0],
            end: t[1],
            allDay: r,
            weeks: d,
            nthWeek: h,
            fweek: t[0].day,
            lweek: t[1].day,
          }
        );
      }),
      (e.prototype._getDateByWeeksAndDay = function (a, t, n) {
        var r = this._getRangeInfo(n);
        if (
          a > r.weeks ||
          (a === 0 && t < r.fweek) ||
          (a === r.weeks && t > r.lweek)
        )
          return null;
        var o = (a - 1) * 7 - r.fweek + t,
          i = new Date(r.start.time);
        return i.setDate(+r.start.d + o), this.getDateInfo(i);
      }),
      (e.create = function (a, t) {
        var n = [];
        return (
          a.eachComponent("calendar", function (r) {
            var o = new e(r, a, t);
            n.push(o), (r.coordinateSystem = o);
          }),
          a.eachSeries(function (r) {
            r.get("coordinateSystem") === "calendar" &&
              (r.coordinateSystem = n[r.get("calendarIndex") || 0]);
          }),
          n
        );
      }),
      (e.dimensions = ["time", "value"]),
      e
    );
  })();
function ze(e) {
  var a = e.calendarModel,
    t = e.seriesModel,
    n = a ? a.coordinateSystem : t ? t.coordinateSystem : null;
  return n;
}
var go = vo;
function mo(e) {
  e.registerComponentModel(ho),
    e.registerComponentView(fo),
    e.registerCoordinateSystem("calendar", go);
}
var yo = (function (e) {
    z(a, e);
    function a() {
      var t = (e !== null && e.apply(this, arguments)) || this;
      return (t.type = a.type), t;
    }
    return (a.type = "dataZoom.select"), a;
  })(Qn),
  bo = yo,
  _o = (function (e) {
    z(a, e);
    function a() {
      var t = (e !== null && e.apply(this, arguments)) || this;
      return (t.type = a.type), t;
    }
    return (a.type = "dataZoom.select"), a;
  })(tr),
  xo = _o;
function So(e) {
  e.registerComponentModel(bo), e.registerComponentView(xo), er(e);
}
var H = (function () {
    function e() {}
    return e;
  })(),
  Ma = {};
function mt(e, a) {
  Ma[e] = a;
}
function Ba(e) {
  return Ma[e];
}
var Co = (function (e) {
    z(a, e);
    function a() {
      var t = (e !== null && e.apply(this, arguments)) || this;
      return (t.type = a.type), t;
    }
    return (
      (a.prototype.optionUpdated = function () {
        e.prototype.optionUpdated.apply(this, arguments);
        var t = this.ecModel;
        P(this.option.feature, function (n, r) {
          var o = Ba(r);
          o &&
            (o.getDefaultOption && (o.defaultOption = o.getDefaultOption(t)),
            Q(n, o.defaultOption));
        });
      }),
      (a.type = "toolbox"),
      (a.layoutMode = { type: "box", ignoreSize: !0 }),
      (a.defaultOption = {
        show: !0,
        z: 6,
        orient: "horizontal",
        left: "right",
        top: "top",
        backgroundColor: "transparent",
        borderColor: "#ccc",
        borderRadius: 0,
        borderWidth: 0,
        padding: 5,
        itemSize: 15,
        itemGap: 8,
        showTitle: !0,
        iconStyle: { borderColor: "#666", color: "none" },
        emphasis: { iconStyle: { borderColor: "#3E98C5" } },
        tooltip: { show: !1, position: "bottom" },
      }),
      a
    );
  })(ne),
  wo = Co,
  Ao = (function (e) {
    z(a, e);
    function a() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (a.prototype.render = function (t, n, r, o) {
        var i = this.group;
        if ((i.removeAll(), !t.get("show"))) return;
        var s = +t.get("itemSize"),
          u = t.get("orient") === "vertical",
          c = t.get("feature") || {},
          d = this._features || (this._features = {}),
          h = [];
        P(c, function (g, m) {
          h.push(m);
        }),
          new ca(this._featureNames || [], h)
            .add(p)
            .update(p)
            .remove(Z(p, null))
            .execute(),
          (this._featureNames = h);
        function p(g, m) {
          var b = h[g],
            x = h[m],
            S = c[b],
            w = new dn(S, t, t.ecModel),
            _;
          if (
            (o &&
              o.newTitle != null &&
              o.featureName === b &&
              (S.title = o.newTitle),
            b && !x)
          ) {
            if (To(b)) _ = { onclick: w.option.onclick, featureName: b };
            else {
              var D = Ba(b);
              if (!D) return;
              _ = new D();
            }
            d[b] = _;
          } else if (((_ = d[x]), !_)) return;
          (_.uid = hn("toolbox-feature")),
            (_.model = w),
            (_.ecModel = n),
            (_.api = r);
          var T = _ instanceof H;
          if (!b && x) {
            T && _.dispose && _.dispose(n, r);
            return;
          }
          if (!w.get("show") || (T && _.unusable)) {
            T && _.remove && _.remove(n, r);
            return;
          }
          y(w, _, b),
            (w.setIconStatus = function (O, B) {
              var k = this.option,
                l = this.iconPaths;
              (k.iconStatus = k.iconStatus || {}),
                (k.iconStatus[O] = B),
                l[O] && (B === "emphasis" ? be : _e)(l[O]);
            }),
            _ instanceof H && _.render && _.render(w, n, r, o);
        }
        function y(g, m, b) {
          var x = g.getModel("iconStyle"),
            S = g.getModel(["emphasis", "iconStyle"]),
            w = m instanceof H && m.getIcons ? m.getIcons() : g.get("icon"),
            _ = g.get("title") || {},
            D,
            T;
          et(w) ? ((D = {}), (D[b] = w)) : (D = w),
            et(_) ? ((T = {}), (T[b] = _)) : (T = _);
          var O = (g.iconPaths = {});
          P(D, function (B, k) {
            var l = ga(B, {}, { x: -s / 2, y: -s / 2, width: s, height: s });
            l.setStyle(x.getItemStyle());
            var f = l.ensureState("emphasis");
            f.style = S.getItemStyle();
            var v = new it({
              style: {
                text: T[k],
                align: S.get("textAlign"),
                borderRadius: S.get("textBorderRadius"),
                padding: S.get("textPadding"),
                fill: null,
              },
              ignore: !0,
            });
            l.setTextContent(v),
              pn({
                el: l,
                componentModel: t,
                itemName: k,
                formatterParamsExtra: { title: T[k] },
              }),
              (l.__title = T[k]),
              l
                .on("mouseover", function () {
                  var C = S.getItemStyle(),
                    I = u
                      ? t.get("right") == null && t.get("left") !== "right"
                        ? "right"
                        : "left"
                      : t.get("bottom") == null && t.get("top") !== "bottom"
                      ? "bottom"
                      : "top";
                  v.setStyle({
                    fill: S.get("textFill") || C.fill || C.stroke || "#000",
                    backgroundColor: S.get("textBackgroundColor"),
                  }),
                    l.setTextConfig({ position: S.get("textPosition") || I }),
                    (v.ignore = !t.get("showTitle")),
                    r.enterEmphasis(this);
                })
                .on("mouseout", function () {
                  g.get(["iconStatus", k]) !== "emphasis" &&
                    r.leaveEmphasis(this),
                    v.hide();
                }),
              (g.get(["iconStatus", k]) === "emphasis" ? be : _e)(l),
              i.add(l),
              l.on("click", Y(m.onclick, m, n, r, k)),
              (O[k] = l);
          });
        }
        fn(i, t, r),
          i.add(vn(i.getBoundingRect(), t)),
          u ||
            i.eachChild(function (g) {
              var m = g.__title,
                b = g.ensureState("emphasis"),
                x = b.textConfig || (b.textConfig = {}),
                S = g.getTextContent(),
                w = S && S.ensureState("emphasis");
              if (w && !_t(w) && m) {
                var _ = w.style || (w.style = {}),
                  D = gn(m, it.makeFont(_)),
                  T = g.x + i.x,
                  O = g.y + i.y + s,
                  B = !1;
                O + D.height > r.getHeight() &&
                  ((x.position = "top"), (B = !0));
                var k = B ? -5 - D.height : s + 10;
                T + D.width / 2 > r.getWidth()
                  ? ((x.position = ["100%", k]), (_.align = "right"))
                  : T - D.width / 2 < 0 &&
                    ((x.position = [0, k]), (_.align = "left"));
              }
            });
      }),
      (a.prototype.updateView = function (t, n, r, o) {
        P(this._features, function (i) {
          i instanceof H && i.updateView && i.updateView(i.model, n, r, o);
        });
      }),
      (a.prototype.remove = function (t, n) {
        P(this._features, function (r) {
          r instanceof H && r.remove && r.remove(t, n);
        }),
          this.group.removeAll();
      }),
      (a.prototype.dispose = function (t, n) {
        P(this._features, function (r) {
          r instanceof H && r.dispose && r.dispose(t, n);
        });
      }),
      (a.type = "toolbox"),
      a
    );
  })(re);
function To(e) {
  return e.indexOf("my") === 0;
}
var Do = Ao,
  Po = (function (e) {
    z(a, e);
    function a() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (a.prototype.onclick = function (t, n) {
        var r = this.model,
          o = r.get("name") || t.get("title.0.text") || "echarts",
          i = n.getZr().painter.getType() === "svg",
          s = i ? "svg" : r.get("type", !0) || "png",
          u = n.getConnectedDataURL({
            type: s,
            backgroundColor:
              r.get("backgroundColor", !0) ||
              t.get("backgroundColor") ||
              "#fff",
            connectedBackgroundColor: r.get("connectedBackgroundColor"),
            excludeComponents: r.get("excludeComponents"),
            pixelRatio: r.get("pixelRatio"),
          }),
          c = mn.browser;
        if (_t(MouseEvent) && (c.newEdge || (!c.ie && !c.edge))) {
          var d = document.createElement("a");
          (d.download = o + "." + s), (d.target = "_blank"), (d.href = u);
          var h = new MouseEvent("click", {
            view: document.defaultView,
            bubbles: !0,
            cancelable: !1,
          });
          d.dispatchEvent(h);
        } else if (window.navigator.msSaveOrOpenBlob || i) {
          var p = u.split(","),
            y = p[0].indexOf("base64") > -1,
            g = i ? decodeURIComponent(p[1]) : p[1];
          y && (g = window.atob(g));
          var m = o + "." + s;
          if (window.navigator.msSaveOrOpenBlob) {
            for (var b = g.length, x = new Uint8Array(b); b--; )
              x[b] = g.charCodeAt(b);
            var S = new Blob([x]);
            window.navigator.msSaveOrOpenBlob(S, m);
          } else {
            var w = document.createElement("iframe");
            document.body.appendChild(w);
            var _ = w.contentWindow,
              D = _.document;
            D.open("image/svg+xml", "replace"),
              D.write(g),
              D.close(),
              _.focus(),
              D.execCommand("SaveAs", !0, m),
              document.body.removeChild(w);
          }
        } else {
          var T = r.get("lang"),
            O =
              '<body style="margin:0;"><img src="' +
              u +
              '" style="max-width:100%;" title="' +
              ((T && T[0]) || "") +
              '" /></body>',
            B = window.open();
          B.document.write(O), (B.document.title = o);
        }
      }),
      (a.getDefaultOption = function (t) {
        var n = {
          show: !0,
          icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
          title: t.getLocaleModel().get(["toolbox", "saveAsImage", "title"]),
          type: "png",
          connectedBackgroundColor: "#fff",
          name: "",
          excludeComponents: ["toolbox"],
          lang: t.getLocaleModel().get(["toolbox", "saveAsImage", "lang"]),
        };
        return n;
      }),
      a
    );
  })(H),
  Oo = Po,
  Re = "__ec_magicType_stack__",
  Io = [["line", "bar"], ["stack"]],
  Lo = (function (e) {
    z(a, e);
    function a() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (a.prototype.getIcons = function () {
        var t = this.model,
          n = t.get("icon"),
          r = {};
        return (
          P(t.get("type"), function (o) {
            n[o] && (r[o] = n[o]);
          }),
          r
        );
      }),
      (a.getDefaultOption = function (t) {
        var n = {
          show: !0,
          type: [],
          icon: {
            line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
            bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
            stack:
              "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
          },
          title: t.getLocaleModel().get(["toolbox", "magicType", "title"]),
          option: {},
          seriesIndex: {},
        };
        return n;
      }),
      (a.prototype.onclick = function (t, n, r) {
        var o = this.model,
          i = o.get(["seriesIndex", r]);
        if (!!Ee[r]) {
          var s = { series: [] },
            u = function (h) {
              var p = h.subType,
                y = h.id,
                g = Ee[r](p, y, h, o);
              g && (dt(g, h.option), s.series.push(g));
              var m = h.coordinateSystem;
              if (
                m &&
                m.type === "cartesian2d" &&
                (r === "line" || r === "bar")
              ) {
                var b = m.getAxesByScale("ordinal")[0];
                if (b) {
                  var x = b.dim,
                    S = x + "Axis",
                    w = h.getReferringComponents(S, yn).models[0],
                    _ = w.componentIndex;
                  s[S] = s[S] || [];
                  for (var D = 0; D <= _; D++) s[S][_] = s[S][_] || {};
                  s[S][_].boundaryGap = r === "bar";
                }
              }
            };
          P(Io, function (h) {
            xt(h, r) >= 0 &&
              P(h, function (p) {
                o.setIconStatus(p, "normal");
              });
          }),
            o.setIconStatus(r, "emphasis"),
            t.eachComponent(
              {
                mainType: "series",
                query: i == null ? null : { seriesIndex: i },
              },
              u
            );
          var c,
            d = r;
          r === "stack" &&
            ((c = Q(
              { stack: o.option.title.tiled, tiled: o.option.title.stack },
              o.option.title
            )),
            o.get(["iconStatus", r]) !== "emphasis" && (d = "tiled")),
            n.dispatchAction({
              type: "changeMagicType",
              currentType: d,
              newOption: s,
              newTitle: c,
              featureName: "magicType",
            });
        }
      }),
      a
    );
  })(H),
  Ee = {
    line: function (e, a, t, n) {
      if (e === "bar")
        return Q(
          {
            id: a,
            type: "line",
            data: t.get("data"),
            stack: t.get("stack"),
            markPoint: t.get("markPoint"),
            markLine: t.get("markLine"),
          },
          n.get(["option", "line"]) || {},
          !0
        );
    },
    bar: function (e, a, t, n) {
      if (e === "line")
        return Q(
          {
            id: a,
            type: "bar",
            data: t.get("data"),
            stack: t.get("stack"),
            markPoint: t.get("markPoint"),
            markLine: t.get("markLine"),
          },
          n.get(["option", "bar"]) || {},
          !0
        );
    },
    stack: function (e, a, t, n) {
      var r = t.get("stack") === Re;
      if (e === "line" || e === "bar")
        return (
          n.setIconStatus("stack", r ? "normal" : "emphasis"),
          Q({ id: a, stack: r ? "" : Re }, n.get(["option", "stack"]) || {}, !0)
        );
    },
  };
oe(
  {
    type: "changeMagicType",
    event: "magicTypeChanged",
    update: "prepareAndUpdate",
  },
  function (e, a) {
    a.mergeOption(e.newOption);
  }
);
var ko = Lo,
  It = new Array(60).join("-"),
  ct = "	";
function Mo(e) {
  var a = {},
    t = [],
    n = [];
  return (
    e.eachRawSeries(function (r) {
      var o = r.coordinateSystem;
      if (o && (o.type === "cartesian2d" || o.type === "polar")) {
        var i = o.getBaseAxis();
        if (i.type === "category") {
          var s = i.dim + "_" + i.index;
          a[s] ||
            ((a[s] = {
              categoryAxis: i,
              valueAxis: o.getOtherAxis(i),
              series: [],
            }),
            n.push({ axisDim: i.dim, axisIndex: i.index })),
            a[s].series.push(r);
        } else t.push(r);
      } else t.push(r);
    }),
    { seriesGroupByCategoryAxis: a, other: t, meta: n }
  );
}
function Bo(e) {
  var a = [];
  return (
    P(e, function (t, n) {
      var r = t.categoryAxis,
        o = t.valueAxis,
        i = o.dim,
        s = [" "].concat(
          W(t.series, function (y) {
            return y.name;
          })
        ),
        u = [r.model.getCategories()];
      P(t.series, function (y) {
        var g = y.getRawData();
        u.push(
          y.getRawData().mapArray(g.mapDimension(i), function (m) {
            return m;
          })
        );
      });
      for (var c = [s.join(ct)], d = 0; d < u[0].length; d++) {
        for (var h = [], p = 0; p < u.length; p++) h.push(u[p][d]);
        c.push(h.join(ct));
      }
      a.push(
        c.join(`
`)
      );
    }),
    a.join(
      `

` +
        It +
        `

`
    )
  );
}
function No(e) {
  return W(e, function (a) {
    var t = a.getRawData(),
      n = [a.name],
      r = [];
    return (
      t.each(t.dimensions, function () {
        for (
          var o = arguments.length,
            i = arguments[o - 1],
            s = t.getName(i),
            u = 0;
          u < o - 1;
          u++
        )
          r[u] = arguments[u];
        n.push((s ? s + ct : "") + r.join(ct));
      }),
      n.join(`
`)
    );
  }).join(
    `

` +
      It +
      `

`
  );
}
function zo(e) {
  var a = Mo(e);
  return {
    value: bn([Bo(a.seriesGroupByCategoryAxis), No(a.other)], function (t) {
      return !!t.replace(/[\n\t\s]/g, "");
    }).join(
      `

` +
        It +
        `

`
    ),
    meta: a.meta,
  };
}
function Tt(e) {
  return e.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Ro(e) {
  var a = e.slice(
    0,
    e.indexOf(`
`)
  );
  if (a.indexOf(ct) >= 0) return !0;
}
var Kt = new RegExp("[" + ct + "]+", "g");
function Eo(e) {
  for (
    var a = e.split(/\n+/g),
      t = Tt(a.shift()).split(Kt),
      n = [],
      r = W(t, function (u) {
        return { name: u, data: [] };
      }),
      o = 0;
    o < a.length;
    o++
  ) {
    var i = Tt(a[o]).split(Kt);
    n.push(i.shift());
    for (var s = 0; s < i.length; s++) r[s] && (r[s].data[o] = i[s]);
  }
  return { series: r, categories: n };
}
function $o(e) {
  for (
    var a = e.split(/\n+/g), t = Tt(a.shift()), n = [], r = 0;
    r < a.length;
    r++
  ) {
    var o = Tt(a[r]);
    if (!!o) {
      var i = o.split(Kt),
        s = "",
        u = void 0,
        c = !1;
      isNaN(i[0])
        ? ((c = !0),
          (s = i[0]),
          (i = i.slice(1)),
          (n[r] = { name: s, value: [] }),
          (u = n[r].value))
        : (u = n[r] = []);
      for (var d = 0; d < i.length; d++) u.push(+i[d]);
      u.length === 1 && (c ? (n[r].value = u[0]) : (n[r] = u[0]));
    }
  }
  return { name: t, data: n };
}
function Vo(e, a) {
  var t = e.split(
      new RegExp(
        `
*` +
          It +
          `
*`,
        "g"
      )
    ),
    n = { series: [] };
  return (
    P(t, function (r, o) {
      if (Ro(r)) {
        var i = Eo(r),
          s = a[o],
          u = s.axisDim + "Axis";
        s &&
          ((n[u] = n[u] || []),
          (n[u][s.axisIndex] = { data: i.categories }),
          (n.series = n.series.concat(i.series)));
      } else {
        var i = $o(r);
        n.series.push(i);
      }
    }),
    n
  );
}
var Fo = (function (e) {
  z(a, e);
  function a() {
    return (e !== null && e.apply(this, arguments)) || this;
  }
  return (
    (a.prototype.onclick = function (t, n) {
      setTimeout(function () {
        n.dispatchAction({ type: "hideTip" });
      });
      var r = n.getDom(),
        o = this.model;
      this._dom && r.removeChild(this._dom);
      var i = document.createElement("div");
      (i.style.cssText =
        "position:absolute;top:0;bottom:0;left:0;right:0;padding:5px"),
        (i.style.backgroundColor = o.get("backgroundColor") || "#fff");
      var s = document.createElement("h4"),
        u = o.get("lang") || [];
      (s.innerHTML = u[0] || o.get("title")),
        (s.style.cssText = "margin:10px 20px"),
        (s.style.color = o.get("textColor"));
      var c = document.createElement("div"),
        d = document.createElement("textarea");
      c.style.cssText = "overflow:auto";
      var h = o.get("optionToContent"),
        p = o.get("contentToOption"),
        y = zo(t);
      if (_t(h)) {
        var g = h(n.getOption());
        et(g) ? (c.innerHTML = g) : _n(g) && c.appendChild(g);
      } else {
        d.readOnly = o.get("readOnly");
        var m = d.style;
        (m.cssText =
          "display:block;width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;resize:none;box-sizing:border-box;outline:none"),
          (m.color = o.get("textColor")),
          (m.borderColor = o.get("textareaBorderColor")),
          (m.backgroundColor = o.get("textareaColor")),
          (d.value = y.value),
          c.appendChild(d);
      }
      var b = y.meta,
        x = document.createElement("div");
      x.style.cssText = "position:absolute;bottom:5px;left:0;right:0";
      var S =
          "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",
        w = document.createElement("div"),
        _ = document.createElement("div");
      (S += ";background-color:" + o.get("buttonColor")),
        (S += ";color:" + o.get("buttonTextColor"));
      var D = this;
      function T() {
        r.removeChild(i), (D._dom = null);
      }
      xe(w, "click", T),
        xe(_, "click", function () {
          if ((p == null && h != null) || (p != null && h == null)) {
            T();
            return;
          }
          var O;
          try {
            _t(p) ? (O = p(c, n.getOption())) : (O = Vo(d.value, b));
          } catch (B) {
            throw (T(), new Error("Data view format error " + B));
          }
          O && n.dispatchAction({ type: "changeDataView", newOption: O }), T();
        }),
        (w.innerHTML = u[1]),
        (_.innerHTML = u[2]),
        (_.style.cssText = w.style.cssText = S),
        !o.get("readOnly") && x.appendChild(_),
        x.appendChild(w),
        i.appendChild(s),
        i.appendChild(c),
        i.appendChild(x),
        (c.style.height = r.clientHeight - 80 + "px"),
        r.appendChild(i),
        (this._dom = i);
    }),
    (a.prototype.remove = function (t, n) {
      this._dom && n.getDom().removeChild(this._dom);
    }),
    (a.prototype.dispose = function (t, n) {
      this.remove(t, n);
    }),
    (a.getDefaultOption = function (t) {
      var n = {
        show: !0,
        readOnly: !1,
        optionToContent: null,
        contentToOption: null,
        icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
        title: t.getLocaleModel().get(["toolbox", "dataView", "title"]),
        lang: t.getLocaleModel().get(["toolbox", "dataView", "lang"]),
        backgroundColor: "#fff",
        textColor: "#000",
        textareaColor: "#fff",
        textareaBorderColor: "#333",
        buttonColor: "#c23531",
        buttonTextColor: "#fff",
      };
      return n;
    }),
    a
  );
})(H);
function Wo(e, a) {
  return W(e, function (t, n) {
    var r = a && a[n];
    if (bt(r) && !U(r)) {
      var o = bt(t) && !U(t);
      o || (t = { value: t });
      var i = r.name != null && t.name == null;
      return (t = dt(t, r)), i && delete t.name, t;
    } else return t;
  });
}
oe(
  {
    type: "changeDataView",
    event: "dataViewChanged",
    update: "prepareAndUpdate",
  },
  function (e, a) {
    var t = [];
    P(e.newOption.series, function (n) {
      var r = a.getSeriesByName(n.name)[0];
      if (!r) t.push(lt({ type: "scatter" }, n));
      else {
        var o = r.get("data");
        t.push({ name: n.name, data: Wo(n.data, o) });
      }
    }),
      a.mergeOption(dt({ series: t }, e.newOption));
  }
);
var Zo = Fo,
  Na = P,
  za = ma();
function jo(e, a) {
  var t = he(e);
  Na(a, function (n, r) {
    for (var o = t.length - 1; o >= 0; o--) {
      var i = t[o];
      if (i[r]) break;
    }
    if (o < 0) {
      var s = e.queryComponents({
        mainType: "dataZoom",
        subType: "select",
        id: r,
      })[0];
      if (s) {
        var u = s.getPercentRange();
        t[0][r] = { dataZoomId: r, start: u[0], end: u[1] };
      }
    }
  }),
    t.push(a);
}
function Go(e) {
  var a = he(e),
    t = a[a.length - 1];
  a.length > 1 && a.pop();
  var n = {};
  return (
    Na(t, function (r, o) {
      for (var i = a.length - 1; i >= 0; i--)
        if (((r = a[i][o]), r)) {
          n[o] = r;
          break;
        }
    }),
    n
  );
}
function Ho(e) {
  za(e).snapshots = null;
}
function Uo(e) {
  return he(e).length;
}
function he(e) {
  var a = za(e);
  return a.snapshots || (a.snapshots = [{}]), a.snapshots;
}
var Yo = (function (e) {
  z(a, e);
  function a() {
    return (e !== null && e.apply(this, arguments)) || this;
  }
  return (
    (a.prototype.onclick = function (t, n) {
      Ho(t), n.dispatchAction({ type: "restore", from: this.uid });
    }),
    (a.getDefaultOption = function (t) {
      var n = {
        show: !0,
        icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
        title: t.getLocaleModel().get(["toolbox", "restore", "title"]),
      };
      return n;
    }),
    a
  );
})(H);
oe(
  { type: "restore", event: "restore", update: "prepareAndUpdate" },
  function (e, a) {
    a.resetOption("recreate");
  }
);
var qo = Yo,
  Ko = [
    "grid",
    "xAxis",
    "yAxis",
    "geo",
    "graph",
    "polar",
    "radiusAxis",
    "angleAxis",
    "bmap",
  ],
  Xo = (function () {
    function e(a, t, n) {
      var r = this;
      this._targetInfoList = [];
      var o = $e(t, a);
      P(Jo, function (i, s) {
        (!n || !n.include || xt(n.include, s) >= 0) && i(o, r._targetInfoList);
      });
    }
    return (
      (e.prototype.setOutputRanges = function (a, t) {
        return (
          this.matchOutputRanges(a, t, function (n, r, o) {
            if (
              ((n.coordRanges || (n.coordRanges = [])).push(r), !n.coordRange)
            ) {
              n.coordRange = r;
              var i = Rt[n.brushType](0, o, r);
              n.__rangeOffset = {
                offset: Ze[n.brushType](i.values, n.range, [1, 1]),
                xyMinMax: i.xyMinMax,
              };
            }
          }),
          a
        );
      }),
      (e.prototype.matchOutputRanges = function (a, t, n) {
        P(
          a,
          function (r) {
            var o = this.findTargetInfo(r, t);
            o &&
              o !== !0 &&
              P(o.coordSyses, function (i) {
                var s = Rt[r.brushType](1, i, r.range, !0);
                n(r, s.values, i, t);
              });
          },
          this
        );
      }),
      (e.prototype.setInputRanges = function (a, t) {
        P(
          a,
          function (n) {
            var r = this.findTargetInfo(n, t);
            if (((n.range = n.range || []), r && r !== !0)) {
              n.panelId = r.panelId;
              var o = Rt[n.brushType](0, r.coordSys, n.coordRange),
                i = n.__rangeOffset;
              n.range = i
                ? Ze[n.brushType](
                    o.values,
                    i.offset,
                    Qo(o.xyMinMax, i.xyMinMax)
                  )
                : o.values;
            }
          },
          this
        );
      }),
      (e.prototype.makePanelOpts = function (a, t) {
        return W(this._targetInfoList, function (n) {
          var r = n.getPanelRect();
          return {
            panelId: n.panelId,
            defaultBrushType: t ? t(n) : null,
            clipPath: Fr(r),
            isTargetByCursor: Zr(r, a, n.coordSysModel),
            getLinearBrushOtherExtent: Wr(r),
          };
        });
      }),
      (e.prototype.controlSeries = function (a, t, n) {
        var r = this.findTargetInfo(a, n);
        return r === !0 || (r && xt(r.coordSyses, t.coordinateSystem) >= 0);
      }),
      (e.prototype.findTargetInfo = function (a, t) {
        for (
          var n = this._targetInfoList, r = $e(t, a), o = 0;
          o < n.length;
          o++
        ) {
          var i = n[o],
            s = a.panelId;
          if (s) {
            if (i.panelId === s) return i;
          } else for (var u = 0; u < Ve.length; u++) if (Ve[u](r, i)) return i;
        }
        return !0;
      }),
      e
    );
  })();
function Xt(e) {
  return e[0] > e[1] && e.reverse(), e;
}
function $e(e, a) {
  return ya(e, a, { includeMainTypes: Ko });
}
var Jo = {
    grid: function (e, a) {
      var t = e.xAxisModels,
        n = e.yAxisModels,
        r = e.gridModels,
        o = xn(),
        i = {},
        s = {};
      (!t && !n && !r) ||
        (P(t, function (u) {
          var c = u.axis.grid.model;
          o.set(c.id, c), (i[c.id] = !0);
        }),
        P(n, function (u) {
          var c = u.axis.grid.model;
          o.set(c.id, c), (s[c.id] = !0);
        }),
        P(r, function (u) {
          o.set(u.id, u), (i[u.id] = !0), (s[u.id] = !0);
        }),
        o.each(function (u) {
          var c = u.coordinateSystem,
            d = [];
          P(c.getCartesians(), function (h, p) {
            (xt(t, h.getAxis("x").model) >= 0 ||
              xt(n, h.getAxis("y").model) >= 0) &&
              d.push(h);
          }),
            a.push({
              panelId: "grid--" + u.id,
              gridModel: u,
              coordSysModel: u,
              coordSys: d[0],
              coordSyses: d,
              getPanelRect: Fe.grid,
              xAxisDeclared: i[u.id],
              yAxisDeclared: s[u.id],
            });
        }));
    },
    geo: function (e, a) {
      P(e.geoModels, function (t) {
        var n = t.coordinateSystem;
        a.push({
          panelId: "geo--" + t.id,
          geoModel: t,
          coordSysModel: t,
          coordSys: n,
          coordSyses: [n],
          getPanelRect: Fe.geo,
        });
      });
    },
  },
  Ve = [
    function (e, a) {
      var t = e.xAxisModel,
        n = e.yAxisModel,
        r = e.gridModel;
      return (
        !r && t && (r = t.axis.grid.model),
        !r && n && (r = n.axis.grid.model),
        r && r === a.gridModel
      );
    },
    function (e, a) {
      var t = e.geoModel;
      return t && t === a.geoModel;
    },
  ],
  Fe = {
    grid: function () {
      return this.coordSys.master.getRect().clone();
    },
    geo: function () {
      var e = this.coordSys,
        a = e.getBoundingRect().clone();
      return a.applyTransform(ha(e)), a;
    },
  },
  Rt = {
    lineX: Z(We, 0),
    lineY: Z(We, 1),
    rect: function (e, a, t, n) {
      var r = e
          ? a.pointToData([t[0][0], t[1][0]], n)
          : a.dataToPoint([t[0][0], t[1][0]], n),
        o = e
          ? a.pointToData([t[0][1], t[1][1]], n)
          : a.dataToPoint([t[0][1], t[1][1]], n),
        i = [Xt([r[0], o[0]]), Xt([r[1], o[1]])];
      return { values: i, xyMinMax: i };
    },
    polygon: function (e, a, t, n) {
      var r = [
          [1 / 0, -1 / 0],
          [1 / 0, -1 / 0],
        ],
        o = W(t, function (i) {
          var s = e ? a.pointToData(i, n) : a.dataToPoint(i, n);
          return (
            (r[0][0] = Math.min(r[0][0], s[0])),
            (r[1][0] = Math.min(r[1][0], s[1])),
            (r[0][1] = Math.max(r[0][1], s[0])),
            (r[1][1] = Math.max(r[1][1], s[1])),
            s
          );
        });
      return { values: o, xyMinMax: r };
    },
  };
function We(e, a, t, n) {
  var r = t.getAxis(["x", "y"][e]),
    o = Xt(
      W([0, 1], function (s) {
        return a
          ? r.coordToData(r.toLocalCoord(n[s]), !0)
          : r.toGlobalCoord(r.dataToCoord(n[s]));
      })
    ),
    i = [];
  return (i[e] = o), (i[1 - e] = [NaN, NaN]), { values: o, xyMinMax: i };
}
var Ze = {
  lineX: Z(je, 0),
  lineY: Z(je, 1),
  rect: function (e, a, t) {
    return [
      [e[0][0] - t[0] * a[0][0], e[0][1] - t[0] * a[0][1]],
      [e[1][0] - t[1] * a[1][0], e[1][1] - t[1] * a[1][1]],
    ];
  },
  polygon: function (e, a, t) {
    return W(e, function (n, r) {
      return [n[0] - t[0] * a[r][0], n[1] - t[1] * a[r][1]];
    });
  },
};
function je(e, a, t, n) {
  return [a[0] - n[e] * t[0], a[1] - n[e] * t[1]];
}
function Qo(e, a) {
  var t = Ge(e),
    n = Ge(a),
    r = [t[0] / n[0], t[1] / n[1]];
  return isNaN(r[0]) && (r[0] = 1), isNaN(r[1]) && (r[1] = 1), r;
}
function Ge(e) {
  return e ? [e[0][1] - e[0][0], e[1][1] - e[1][0]] : [NaN, NaN];
}
var Ra = Xo,
  Jt = P,
  ti = Cn("toolbox-dataZoom_"),
  ei = (function (e) {
    z(a, e);
    function a() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (a.prototype.render = function (t, n, r, o) {
        this._brushController ||
          ((this._brushController = new Vr(r.getZr())),
          this._brushController.on("brush", Y(this._onBrush, this)).mount()),
          ri(t, n, this, o, r),
          ni(t, n);
      }),
      (a.prototype.onclick = function (t, n, r) {
        ai[r].call(this);
      }),
      (a.prototype.remove = function (t, n) {
        this._brushController && this._brushController.unmount();
      }),
      (a.prototype.dispose = function (t, n) {
        this._brushController && this._brushController.dispose();
      }),
      (a.prototype._onBrush = function (t) {
        var n = t.areas;
        if (!t.isEnd || !n.length) return;
        var r = {},
          o = this.ecModel;
        this._brushController.updateCovers([]);
        var i = new Ra(pe(this.model), o, { include: ["grid"] });
        i.matchOutputRanges(n, o, function (c, d, h) {
          if (h.type === "cartesian2d") {
            var p = c.brushType;
            p === "rect"
              ? (s("x", h, d[0]), s("y", h, d[1]))
              : s({ lineX: "x", lineY: "y" }[p], h, d);
          }
        }),
          jo(o, r),
          this._dispatchZoomAction(r);
        function s(c, d, h) {
          var p = d.getAxis(c),
            y = p.model,
            g = u(c, y, o),
            m = g.findRepresentativeAxisProxy(y).getMinMaxSpan();
          (m.minValueSpan != null || m.maxValueSpan != null) &&
            (h = ar(
              0,
              h.slice(),
              p.scale.getExtent(),
              0,
              m.minValueSpan,
              m.maxValueSpan
            )),
            g &&
              (r[g.id] = {
                dataZoomId: g.id,
                startValue: h[0],
                endValue: h[1],
              });
        }
        function u(c, d, h) {
          var p;
          return (
            h.eachComponent(
              { mainType: "dataZoom", subType: "select" },
              function (y) {
                var g = y.getAxisModel(c, d.componentIndex);
                g && (p = y);
              }
            ),
            p
          );
        }
      }),
      (a.prototype._dispatchZoomAction = function (t) {
        var n = [];
        Jt(t, function (r, o) {
          n.push(tt(r));
        }),
          n.length &&
            this.api.dispatchAction({
              type: "dataZoom",
              from: this.uid,
              batch: n,
            });
      }),
      (a.getDefaultOption = function (t) {
        var n = {
          show: !0,
          filterMode: "filter",
          icon: {
            zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
            back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26",
          },
          title: t.getLocaleModel().get(["toolbox", "dataZoom", "title"]),
          brushStyle: { borderWidth: 0, color: "rgba(210,219,238,0.2)" },
        };
        return n;
      }),
      a
    );
  })(H),
  ai = {
    zoom: function () {
      var e = !this._isZoomActive;
      this.api.dispatchAction({
        type: "takeGlobalCursor",
        key: "dataZoomSelect",
        dataZoomSelectActive: e,
      });
    },
    back: function () {
      this._dispatchZoomAction(Go(this.ecModel));
    },
  };
function pe(e) {
  var a = {
    xAxisIndex: e.get("xAxisIndex", !0),
    yAxisIndex: e.get("yAxisIndex", !0),
    xAxisId: e.get("xAxisId", !0),
    yAxisId: e.get("yAxisId", !0),
  };
  return (
    a.xAxisIndex == null && a.xAxisId == null && (a.xAxisIndex = "all"),
    a.yAxisIndex == null && a.yAxisId == null && (a.yAxisIndex = "all"),
    a
  );
}
function ni(e, a) {
  e.setIconStatus("back", Uo(a) > 1 ? "emphasis" : "normal");
}
function ri(e, a, t, n, r) {
  var o = t._isZoomActive;
  n &&
    n.type === "takeGlobalCursor" &&
    (o = n.key === "dataZoomSelect" ? n.dataZoomSelectActive : !1),
    (t._isZoomActive = o),
    e.setIconStatus("zoom", o ? "emphasis" : "normal");
  var i = new Ra(pe(e), a, { include: ["grid"] }),
    s = i.makePanelOpts(r, function (u) {
      return u.xAxisDeclared && !u.yAxisDeclared
        ? "lineX"
        : !u.xAxisDeclared && u.yAxisDeclared
        ? "lineY"
        : "rect";
    });
  t._brushController
    .setPanels(s)
    .enableBrush(
      o && s.length
        ? {
            brushType: "auto",
            brushStyle: e.getModel("brushStyle").getItemStyle(),
          }
        : !1
    );
}
Sn("dataZoom", function (e) {
  var a = e.getComponent("toolbox", 0),
    t = ["feature", "dataZoom"];
  if (!a || a.get(t) == null) return;
  var n = a.getModel(t),
    r = [],
    o = pe(n),
    i = ya(e, o);
  Jt(i.xAxisModels, function (u) {
    return s(u, "xAxis", "xAxisIndex");
  }),
    Jt(i.yAxisModels, function (u) {
      return s(u, "yAxis", "yAxisIndex");
    });
  function s(u, c, d) {
    var h = u.componentIndex,
      p = {
        type: "select",
        $fromToolbox: !0,
        filterMode: n.get("filterMode", !0) || "filter",
        id: ti + c + h,
      };
    (p[d] = h), r.push(p);
  }
  return r;
});
var oi = ei;
function ii(e) {
  e.registerComponentModel(wo),
    e.registerComponentView(Do),
    mt("saveAsImage", Oo),
    mt("magicType", ko),
    mt("dataView", Zo),
    mt("dataZoom", oi),
    mt("restore", qo),
    ae(So);
}
var si = (function (e) {
    z(a, e);
    function a() {
      var t = (e !== null && e.apply(this, arguments)) || this;
      return (t.type = a.type), (t.layoutMode = "box"), t;
    }
    return (
      (a.prototype.init = function (t, n, r) {
        this.mergeDefaultAndTheme(t, r), this._initData();
      }),
      (a.prototype.mergeOption = function (t) {
        e.prototype.mergeOption.apply(this, arguments), this._initData();
      }),
      (a.prototype.setCurrentIndex = function (t) {
        t == null && (t = this.option.currentIndex);
        var n = this._data.count();
        this.option.loop
          ? (t = ((t % n) + n) % n)
          : (t >= n && (t = n - 1), t < 0 && (t = 0)),
          (this.option.currentIndex = t);
      }),
      (a.prototype.getCurrentIndex = function () {
        return this.option.currentIndex;
      }),
      (a.prototype.isIndexMax = function () {
        return this.getCurrentIndex() >= this._data.count() - 1;
      }),
      (a.prototype.setPlayState = function (t) {
        this.option.autoPlay = !!t;
      }),
      (a.prototype.getPlayState = function () {
        return !!this.option.autoPlay;
      }),
      (a.prototype._initData = function () {
        var t = this.option,
          n = t.data || [],
          r = t.axisType,
          o = (this._names = []),
          i;
        r === "category"
          ? ((i = []),
            P(n, function (c, d) {
              var h = wn(An(c), ""),
                p;
              bt(c) ? ((p = tt(c)), (p.value = d)) : (p = d),
                i.push(p),
                o.push(h);
            }))
          : (i = n);
        var s =
            { category: "ordinal", time: "time", value: "number" }[r] ||
            "number",
          u = (this._data = new Tn([{ name: "value", type: s }], this));
        u.initData(i, o);
      }),
      (a.prototype.getData = function () {
        return this._data;
      }),
      (a.prototype.getCategories = function () {
        if (this.get("axisType") === "category") return this._names.slice();
      }),
      (a.type = "timeline"),
      (a.defaultOption = {
        z: 4,
        show: !0,
        axisType: "time",
        realtime: !0,
        left: "20%",
        top: null,
        right: "20%",
        bottom: 0,
        width: null,
        height: 40,
        padding: 5,
        controlPosition: "left",
        autoPlay: !1,
        rewind: !1,
        loop: !0,
        playInterval: 2e3,
        currentIndex: 0,
        itemStyle: {},
        label: { color: "#000" },
        data: [],
      }),
      a
    );
  })(ne),
  He = si,
  Ea = (function (e) {
    z(a, e);
    function a() {
      var t = (e !== null && e.apply(this, arguments)) || this;
      return (t.type = a.type), t;
    }
    return (
      (a.type = "timeline.slider"),
      (a.defaultOption = Dn(He.defaultOption, {
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "#ccc",
        borderWidth: 0,
        orient: "horizontal",
        inverse: !1,
        tooltip: { trigger: "item" },
        symbol: "circle",
        symbolSize: 12,
        lineStyle: { show: !0, width: 2, color: "#DAE1F5" },
        label: {
          position: "auto",
          show: !0,
          interval: "auto",
          rotate: 0,
          color: "#A4B1D7",
        },
        itemStyle: { color: "#A4B1D7", borderWidth: 1 },
        checkpointStyle: {
          symbol: "circle",
          symbolSize: 15,
          color: "#316bf3",
          borderColor: "#fff",
          borderWidth: 2,
          shadowBlur: 2,
          shadowOffsetX: 1,
          shadowOffsetY: 1,
          shadowColor: "rgba(0, 0, 0, 0.3)",
          animation: !0,
          animationDuration: 300,
          animationEasing: "quinticInOut",
        },
        controlStyle: {
          show: !0,
          showPlayBtn: !0,
          showPrevBtn: !0,
          showNextBtn: !0,
          itemSize: 24,
          itemGap: 12,
          position: "left",
          playIcon:
            "path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",
          stopIcon:
            "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
          nextIcon:
            "M2,18.5A1.52,1.52,0,0,1,.92,18a1.49,1.49,0,0,1,0-2.12L7.81,9.36,1,3.11A1.5,1.5,0,1,1,3,.89l8,7.34a1.48,1.48,0,0,1,.49,1.09,1.51,1.51,0,0,1-.46,1.1L3,18.08A1.5,1.5,0,0,1,2,18.5Z",
          prevIcon:
            "M10,.5A1.52,1.52,0,0,1,11.08,1a1.49,1.49,0,0,1,0,2.12L4.19,9.64,11,15.89a1.5,1.5,0,1,1-2,2.22L1,10.77A1.48,1.48,0,0,1,.5,9.68,1.51,1.51,0,0,1,1,8.58L9,.92A1.5,1.5,0,0,1,10,.5Z",
          prevBtnSize: 18,
          nextBtnSize: 18,
          color: "#A4B1D7",
          borderColor: "#A4B1D7",
          borderWidth: 1,
        },
        emphasis: {
          label: { show: !0, color: "#6f778d" },
          itemStyle: { color: "#316BF3" },
          controlStyle: {
            color: "#316BF3",
            borderColor: "#316BF3",
            borderWidth: 2,
          },
        },
        progress: {
          lineStyle: { color: "#316BF3" },
          itemStyle: { color: "#316BF3" },
          label: { color: "#6f778d" },
        },
        data: [],
      })),
      a
    );
  })(He);
pa(Ea, Pn.prototype);
var li = Ea,
  ui = (function (e) {
    z(a, e);
    function a() {
      var t = (e !== null && e.apply(this, arguments)) || this;
      return (t.type = a.type), t;
    }
    return (a.type = "timeline"), a;
  })(re),
  ci = ui,
  di = (function (e) {
    z(a, e);
    function a(t, n, r, o) {
      var i = e.call(this, t, n, r) || this;
      return (i.type = o || "value"), i;
    }
    return (
      (a.prototype.getLabelModel = function () {
        return this.model.getModel("label");
      }),
      (a.prototype.isHorizontal = function () {
        return this.model.get("orient") === "horizontal";
      }),
      a
    );
  })(nr),
  hi = di,
  Et = Math.PI,
  Ue = ma(),
  pi = (function (e) {
    z(a, e);
    function a() {
      var t = (e !== null && e.apply(this, arguments)) || this;
      return (t.type = a.type), t;
    }
    return (
      (a.prototype.init = function (t, n) {
        this.api = n;
      }),
      (a.prototype.render = function (t, n, r) {
        if (
          ((this.model = t),
          (this.api = r),
          (this.ecModel = n),
          this.group.removeAll(),
          t.get("show", !0))
        ) {
          var o = this._layout(t, r),
            i = this._createGroup("_mainGroup"),
            s = this._createGroup("_labelGroup"),
            u = (this._axis = this._createAxis(o, t));
          (t.formatTooltip = function (c) {
            var d = u.scale.getLabel({ value: c });
            return On("nameValue", { noName: !0, value: d });
          }),
            P(
              ["AxisLine", "AxisTick", "Control", "CurrentPointer"],
              function (c) {
                this["_render" + c](o, i, u, t);
              },
              this
            ),
            this._renderAxisLabel(o, s, u, t),
            this._position(o, t);
        }
        this._doPlayStop(), this._updateTicksStatus();
      }),
      (a.prototype.remove = function () {
        this._clearTimer(), this.group.removeAll();
      }),
      (a.prototype.dispose = function () {
        this._clearTimer();
      }),
      (a.prototype._layout = function (t, n) {
        var r = t.get(["label", "position"]),
          o = t.get("orient"),
          i = vi(t, n),
          s;
        r == null || r === "auto"
          ? (s =
              o === "horizontal"
                ? i.y + i.height / 2 < n.getHeight() / 2
                  ? "-"
                  : "+"
                : i.x + i.width / 2 < n.getWidth() / 2
                ? "+"
                : "-")
          : et(r)
          ? (s = {
              horizontal: { top: "-", bottom: "+" },
              vertical: { left: "-", right: "+" },
            }[o][r])
          : (s = r);
        var u = {
            horizontal: "center",
            vertical: s >= 0 || s === "+" ? "left" : "right",
          },
          c = {
            horizontal: s >= 0 || s === "+" ? "top" : "bottom",
            vertical: "middle",
          },
          d = { horizontal: 0, vertical: Et / 2 },
          h = o === "vertical" ? i.height : i.width,
          p = t.getModel("controlStyle"),
          y = p.get("show", !0),
          g = y ? p.get("itemSize") : 0,
          m = y ? p.get("itemGap") : 0,
          b = g + m,
          x = t.get(["label", "rotate"]) || 0;
        x = (x * Et) / 180;
        var S,
          w,
          _,
          D = p.get("position", !0),
          T = y && p.get("showPlayBtn", !0),
          O = y && p.get("showPrevBtn", !0),
          B = y && p.get("showNextBtn", !0),
          k = 0,
          l = h;
        D === "left" || D === "bottom"
          ? (T && ((S = [0, 0]), (k += b)),
            O && ((w = [k, 0]), (k += b)),
            B && ((_ = [l - g, 0]), (l -= b)))
          : (T && ((S = [l - g, 0]), (l -= b)),
            O && ((w = [0, 0]), (k += b)),
            B && ((_ = [l - g, 0]), (l -= b)));
        var f = [k, l];
        return (
          t.get("inverse") && f.reverse(),
          {
            viewRect: i,
            mainLength: h,
            orient: o,
            rotation: d[o],
            labelRotation: x,
            labelPosOpt: s,
            labelAlign: t.get(["label", "align"]) || u[o],
            labelBaseline:
              t.get(["label", "verticalAlign"]) ||
              t.get(["label", "baseline"]) ||
              c[o],
            playPosition: S,
            prevBtnPosition: w,
            nextBtnPosition: _,
            axisExtent: f,
            controlSize: g,
            controlGap: m,
          }
        );
      }),
      (a.prototype._position = function (t, n) {
        var r = this._mainGroup,
          o = this._labelGroup,
          i = t.viewRect;
        if (t.orient === "vertical") {
          var s = $n(),
            u = i.x,
            c = i.y + i.height;
          Se(s, s, [-u, -c]),
            In(s, s, -Et / 2),
            Se(s, s, [u, c]),
            (i = i.clone()),
            i.applyTransform(s);
        }
        var d = S(i),
          h = S(r.getBoundingRect()),
          p = S(o.getBoundingRect()),
          y = [r.x, r.y],
          g = [o.x, o.y];
        g[0] = y[0] = d[0][0];
        var m = t.labelPosOpt;
        if (m == null || et(m)) {
          var b = m === "+" ? 0 : 1;
          w(y, h, d, 1, b), w(g, p, d, 1, 1 - b);
        } else {
          var b = m >= 0 ? 0 : 1;
          w(y, h, d, 1, b), (g[1] = y[1] + m);
        }
        r.setPosition(y),
          o.setPosition(g),
          (r.rotation = o.rotation = t.rotation),
          x(r),
          x(o);
        function x(_) {
          (_.originX = d[0][0] - _.x), (_.originY = d[1][0] - _.y);
        }
        function S(_) {
          return [
            [_.x, _.x + _.width],
            [_.y, _.y + _.height],
          ];
        }
        function w(_, D, T, O, B) {
          _[O] += T[O][B] - D[O][B];
        }
      }),
      (a.prototype._createAxis = function (t, n) {
        var r = n.getData(),
          o = n.get("axisType"),
          i = fi(n, o);
        i.getTicks = function () {
          return r.mapArray(["value"], function (c) {
            return { value: c };
          });
        };
        var s = r.getDataExtent("value");
        i.setExtent(s[0], s[1]), i.calcNiceTicks();
        var u = new hi("value", i, t.axisExtent, o);
        return (u.model = n), u;
      }),
      (a.prototype._createGroup = function (t) {
        var n = (this[t] = new Ct());
        return this.group.add(n), n;
      }),
      (a.prototype._renderAxisLine = function (t, n, r, o) {
        var i = r.getExtent();
        if (!!o.get(["lineStyle", "show"])) {
          var s = new Ce({
            shape: { x1: i[0], y1: 0, x2: i[1], y2: 0 },
            style: lt(
              { lineCap: "round" },
              o.getModel("lineStyle").getLineStyle()
            ),
            silent: !0,
            z2: 1,
          });
          n.add(s);
          var u = (this._progressLine = new Ce({
            shape: {
              x1: i[0],
              x2: this._currentPointer ? this._currentPointer.x : i[0],
              y1: 0,
              y2: 0,
            },
            style: dt(
              { lineCap: "round", lineWidth: s.style.lineWidth },
              o.getModel(["progress", "lineStyle"]).getLineStyle()
            ),
            silent: !0,
            z2: 1,
          }));
          n.add(u);
        }
      }),
      (a.prototype._renderAxisTick = function (t, n, r, o) {
        var i = this,
          s = o.getData(),
          u = r.scale.getTicks();
        (this._tickSymbols = []),
          P(u, function (c) {
            var d = r.dataToCoord(c.value),
              h = s.getItemModel(c.value),
              p = h.getModel("itemStyle"),
              y = h.getModel(["emphasis", "itemStyle"]),
              g = h.getModel(["progress", "itemStyle"]),
              m = { x: d, y: 0, onclick: Y(i._changeTimeline, i, c.value) },
              b = Ye(h, p, n, m);
            (b.ensureState("emphasis").style = y.getItemStyle()),
              (b.ensureState("progress").style = g.getItemStyle()),
              Mt(b);
            var x = la(b);
            h.get("tooltip")
              ? ((x.dataIndex = c.value), (x.dataModel = o))
              : (x.dataIndex = x.dataModel = null),
              i._tickSymbols.push(b);
          });
      }),
      (a.prototype._renderAxisLabel = function (t, n, r, o) {
        var i = this,
          s = r.getLabelModel();
        if (!!s.get("show")) {
          var u = o.getData(),
            c = r.getViewLabels();
          (this._tickLabels = []),
            P(c, function (d) {
              var h = d.tickValue,
                p = u.getItemModel(h),
                y = p.getModel("label"),
                g = p.getModel(["emphasis", "label"]),
                m = p.getModel(["progress", "label"]),
                b = r.dataToCoord(d.tickValue),
                x = new it({
                  x: b,
                  y: 0,
                  rotation: t.labelRotation - t.rotation,
                  onclick: Y(i._changeTimeline, i, h),
                  silent: !1,
                  style: st(y, {
                    text: d.formattedLabel,
                    align: t.labelAlign,
                    verticalAlign: t.labelBaseline,
                  }),
                });
              (x.ensureState("emphasis").style = st(g)),
                (x.ensureState("progress").style = st(m)),
                n.add(x),
                Mt(x),
                (Ue(x).dataIndex = h),
                i._tickLabels.push(x);
            });
        }
      }),
      (a.prototype._renderControl = function (t, n, r, o) {
        var i = t.controlSize,
          s = t.rotation,
          u = o.getModel("controlStyle").getItemStyle(),
          c = o.getModel(["emphasis", "controlStyle"]).getItemStyle(),
          d = o.getPlayState(),
          h = o.get("inverse", !0);
        p(
          t.nextBtnPosition,
          "next",
          Y(this._changeTimeline, this, h ? "-" : "+")
        ),
          p(
            t.prevBtnPosition,
            "prev",
            Y(this._changeTimeline, this, h ? "+" : "-")
          ),
          p(
            t.playPosition,
            d ? "stop" : "play",
            Y(this._handlePlayClick, this, !d),
            !0
          );
        function p(y, g, m, b) {
          if (!!y) {
            var x = Ln(jt(o.get(["controlStyle", g + "BtnSize"]), i), i),
              S = [0, -x / 2, x, x],
              w = gi(o, g + "Icon", S, {
                x: y[0],
                y: y[1],
                originX: i / 2,
                originY: 0,
                rotation: b ? -s : 0,
                rectHover: !0,
                style: u,
                onclick: m,
              });
            (w.ensureState("emphasis").style = c), n.add(w), Mt(w);
          }
        }
      }),
      (a.prototype._renderCurrentPointer = function (t, n, r, o) {
        var i = o.getData(),
          s = o.getCurrentIndex(),
          u = i.getItemModel(s).getModel("checkpointStyle"),
          c = this,
          d = {
            onCreate: function (h) {
              (h.draggable = !0),
                (h.drift = Y(c._handlePointerDrag, c)),
                (h.ondragend = Y(c._handlePointerDragend, c)),
                qe(h, c._progressLine, s, r, o, !0);
            },
            onUpdate: function (h) {
              qe(h, c._progressLine, s, r, o);
            },
          };
        this._currentPointer = Ye(
          u,
          u,
          this._mainGroup,
          {},
          this._currentPointer,
          d
        );
      }),
      (a.prototype._handlePlayClick = function (t) {
        this._clearTimer(),
          this.api.dispatchAction({
            type: "timelinePlayChange",
            playState: t,
            from: this.uid,
          });
      }),
      (a.prototype._handlePointerDrag = function (t, n, r) {
        this._clearTimer(), this._pointerChangeTimeline([r.offsetX, r.offsetY]);
      }),
      (a.prototype._handlePointerDragend = function (t) {
        this._pointerChangeTimeline([t.offsetX, t.offsetY], !0);
      }),
      (a.prototype._pointerChangeTimeline = function (t, n) {
        var r = this._toAxisCoord(t)[0],
          o = this._axis,
          i = kn(o.getExtent().slice());
        r > i[1] && (r = i[1]),
          r < i[0] && (r = i[0]),
          (this._currentPointer.x = r),
          this._currentPointer.markRedraw(),
          (this._progressLine.shape.x2 = r),
          this._progressLine.dirty();
        var s = this._findNearestTick(r),
          u = this.model;
        (n || (s !== u.getCurrentIndex() && u.get("realtime"))) &&
          this._changeTimeline(s);
      }),
      (a.prototype._doPlayStop = function () {
        var t = this;
        this._clearTimer(),
          this.model.getPlayState() &&
            (this._timer = setTimeout(function () {
              var n = t.model;
              t._changeTimeline(
                n.getCurrentIndex() + (n.get("rewind", !0) ? -1 : 1)
              );
            }, this.model.get("playInterval")));
      }),
      (a.prototype._toAxisCoord = function (t) {
        var n = this._mainGroup.getLocalTransform();
        return Mn(t, n, !0);
      }),
      (a.prototype._findNearestTick = function (t) {
        var n = this.model.getData(),
          r = 1 / 0,
          o,
          i = this._axis;
        return (
          n.each(["value"], function (s, u) {
            var c = i.dataToCoord(s),
              d = Math.abs(c - t);
            d < r && ((r = d), (o = u));
          }),
          o
        );
      }),
      (a.prototype._clearTimer = function () {
        this._timer && (clearTimeout(this._timer), (this._timer = null));
      }),
      (a.prototype._changeTimeline = function (t) {
        var n = this.model.getCurrentIndex();
        t === "+" ? (t = n + 1) : t === "-" && (t = n - 1),
          this.api.dispatchAction({
            type: "timelineChange",
            currentIndex: t,
            from: this.uid,
          });
      }),
      (a.prototype._updateTicksStatus = function () {
        var t = this.model.getCurrentIndex(),
          n = this._tickSymbols,
          r = this._tickLabels;
        if (n)
          for (var o = 0; o < n.length; o++)
            n && n[o] && n[o].toggleState("progress", o < t);
        if (r)
          for (var o = 0; o < r.length; o++)
            r && r[o] && r[o].toggleState("progress", Ue(r[o]).dataIndex <= t);
      }),
      (a.type = "timeline.slider"),
      a
    );
  })(ci);
function fi(e, a) {
  if (((a = a || e.get("type")), a))
    switch (a) {
      case "category":
        return new zn({
          ordinalMeta: e.getCategories(),
          extent: [1 / 0, -1 / 0],
        });
      case "time":
        return new Nn({
          locale: e.ecModel.getLocaleModel(),
          useUTC: e.ecModel.get("useUTC"),
        });
      default:
        return new Bn();
    }
}
function vi(e, a) {
  return va(
    e.getBoxLayoutParams(),
    { width: a.getWidth(), height: a.getHeight() },
    e.get("padding")
  );
}
function gi(e, a, t, n) {
  var r = n.style,
    o = ga(e.get(["controlStyle", a]), n || {}, new te(t[0], t[1], t[2], t[3]));
  return r && o.setStyle(r), o;
}
function Ye(e, a, t, n, r, o) {
  var i = a.get("color");
  if (r) r.setColor(i), t.add(r), o && o.onUpdate(r);
  else {
    var s = e.get("symbol");
    (r = sa(s, -1, -1, 2, 2, i)),
      r.setStyle("strokeNoScale", !0),
      t.add(r),
      o && o.onCreate(r);
  }
  var u = a.getItemStyle(["color"]);
  r.setStyle(u), (n = Q({ rectHover: !0, z2: 100 }, n, !0));
  var c = Rn(e.get("symbolSize"));
  (n.scaleX = c[0] / 2), (n.scaleY = c[1] / 2);
  var d = En(e.get("symbolOffset"), c);
  d && ((n.x = (n.x || 0) + d[0]), (n.y = (n.y || 0) + d[1]));
  var h = e.get("symbolRotate");
  return (
    (n.rotation = ((h || 0) * Math.PI) / 180 || 0),
    r.attr(n),
    r.updateTransform(),
    r
  );
}
function qe(e, a, t, n, r, o) {
  if (!e.dragging) {
    var i = r.getModel("checkpointStyle"),
      s = n.dataToCoord(r.getData().get("value", t));
    if (o || !i.get("animation", !0))
      e.attr({ x: s, y: 0 }), a && a.attr({ shape: { x2: s } });
    else {
      var u = {
        duration: i.get("animationDuration", !0),
        easing: i.get("animationEasing", !0),
      };
      e.stopAnimation(null, !0),
        e.animateTo({ x: s, y: 0 }, u),
        a && a.animateTo({ shape: { x2: s } }, u);
    }
  }
}
var mi = pi;
function yi(e) {
  e.registerAction(
    {
      type: "timelineChange",
      event: "timelineChanged",
      update: "prepareAndUpdate",
    },
    function (a, t, n) {
      var r = t.getComponent("timeline");
      return (
        r &&
          a.currentIndex != null &&
          (r.setCurrentIndex(a.currentIndex),
          !r.get("loop", !0) &&
            r.isIndexMax() &&
            r.getPlayState() &&
            (r.setPlayState(!1),
            n.dispatchAction({
              type: "timelinePlayChange",
              playState: !1,
              from: a.from,
            }))),
        t.resetOption("timeline", { replaceMerge: r.get("replaceMerge", !0) }),
        dt({ currentIndex: r.option.currentIndex }, a)
      );
    }
  ),
    e.registerAction(
      {
        type: "timelinePlayChange",
        event: "timelinePlayChanged",
        update: "update",
      },
      function (a, t) {
        var n = t.getComponent("timeline");
        n && a.playState != null && n.setPlayState(a.playState);
      }
    );
}
function bi(e) {
  var a = e && e.timeline;
  U(a) || (a = a ? [a] : []),
    P(a, function (t) {
      !t || _i(t);
    });
}
function _i(e) {
  var a = e.type,
    t = { number: "value", time: "time" };
  if (
    (t[a] && ((e.axisType = t[a]), delete e.type),
    Ke(e),
    nt(e, "controlPosition"))
  ) {
    var n = e.controlStyle || (e.controlStyle = {});
    nt(n, "position") || (n.position = e.controlPosition),
      n.position === "none" &&
        !nt(n, "show") &&
        ((n.show = !1), delete n.position),
      delete e.controlPosition;
  }
  P(e.data || [], function (r) {
    bt(r) &&
      !U(r) &&
      (!nt(r, "value") && nt(r, "name") && (r.value = r.name), Ke(r));
  });
}
function Ke(e) {
  var a = e.itemStyle || (e.itemStyle = {}),
    t = a.emphasis || (a.emphasis = {}),
    n = e.label || e.label || {},
    r = n.normal || (n.normal = {}),
    o = { normal: 1, emphasis: 1 };
  P(n, function (i, s) {
    !o[s] && !nt(r, s) && (r[s] = i);
  }),
    t.label && !nt(n, "emphasis") && ((n.emphasis = t.label), delete t.label);
}
function nt(e, a) {
  return e.hasOwnProperty(a);
}
function xi(e) {
  e.registerComponentModel(li),
    e.registerComponentView(mi),
    e.registerSubTypeDefaulter("timeline", function () {
      return "slider";
    }),
    yi(e),
    e.registerPreprocessor(bi);
}
function At() {
  return `#${((Math.random() * 16777215) << 0).toString(16)}`;
}
function Si(e, a) {
  const t = e.indexOf("open"),
    n = e.indexOf("close"),
    r = e.indexOf("high"),
    o = e.indexOf("low");
  return a.map((i, s, u) => {
    const c = i.slice();
    if (s === 0) {
      const m = (c[t] + c[r] + c[o] + c[n]) / 4,
        b = (c[t] + c[n]) / 2;
      return (c[t] = b), (c[n] = m), c;
    }
    const d = u[s - 1],
      h = (c[t] + c[r] + c[o] + c[n]) / 4,
      p = (d[t] + d[n]) / 2,
      y = Math.max(c[r], c[t], c[n]),
      g = Math.min(c[o], c[t], c[n]);
    return (c[t] = p), (c[n] = h), (c[r] = y), (c[o] = g), c;
  });
}
const Ci = 2,
  wi = 3;
function Xe(e, a, t = wi) {
  const n = a % e;
  return a - n + (t === Ci ? e : 0);
}
function Je(e, a) {
  var t, n;
  return `${e.is_short ? "Short" : "Long"} ${a}  ${oa(e.profit_ratio)} 
Enter-tag: ${(t = e.enter_tag) != null ? t : ""} 
Exit-Tag: ${(n = e.exit_reason) != null ? n : ""}`;
}
const Ai =
    "path://m 52.444161,104.1909 8.386653,25.34314 8.386651,25.34313 -16.731501,0.0422 -16.731501,0.0422 8.344848,-25.38539 z m 0.08656,-48.368126 8.386652,25.343139 8.386652,25.343137 -16.731501,0.0422 -16.731502,0.0422 8.344848,-25.385389 z",
  Ti =
    "path://m 102.20764,19.885384 h 24.1454 v 41.928829 h -24.1454 z m 12.17344,36.423813 8.38665,25.343139 8.38666,25.343134 -16.7315,0.0422 -16.731507,0.0422 8.344847,-25.385386 z";
function Di(e, a) {
  var n, r;
  const t = [];
  for (let o = 0, i = a.length; o < i; o += 1) {
    const s = a[o];
    s.open_timestamp >= e.data_start_ts &&
      s.open_timestamp <= e.data_stop_ts &&
      t.push([
        Xe((n = e.timeframe_ms) != null ? n : 0, s.open_timestamp),
        s.open_rate,
        Ai,
        s.is_short ? 180 : 0,
        s.is_short ? "#b21dbf" : "#0099ff",
        "",
        Je(s, "entry"),
      ]),
      s.close_timestamp !== void 0 &&
        s.close_timestamp <= e.data_stop_ts &&
        s.close_timestamp > e.data_start_ts &&
        s.close_date !== void 0 &&
        s.close_rate !== void 0 &&
        t.push([
          Xe((r = e.timeframe_ms) != null ? r : 0, s.close_timestamp),
          s.close_rate,
          Ti,
          s.is_short ? 180 : 0,
          s.is_short ? "#b21dbf" : "#0099ff",
          oa(s.profit_ratio, 2),
          Je(s, "exit"),
        ]);
  }
  return { tradeData: t };
}
ae([Vn, mo, Fn, rr, or, Wn, xi, Zn, ii, jn, ir, sr, uo, lr, ur, xr, Gn]);
const $t = "5.5%",
  Vt = "1%",
  Qe = 55,
  yt = 8,
  Pi = "#26A69A",
  Oi = "#26A69A",
  Ii = "#EF5350",
  Li = "#EF5350",
  ki = "#00ff26",
  Mi = "#00ff26",
  Bi = "#faba25",
  Ni = "#faba25";
var zi = Dt({
    name: "CandleChart",
    components: { "v-chart": Hn },
    props: {
      trades: { required: !1, default: () => [], type: Array },
      dataset: { required: !0, type: Object },
      heikinAshi: { required: !1, default: !1, type: Boolean },
      useUTC: { required: !1, default: !0, type: Boolean },
      plotConfig: { required: !0, type: Object },
      theme: { default: "dark", type: String },
    },
    setup(e) {
      const a = R(),
        t = R([]),
        n = R([]),
        r = R({}),
        o = E(() => (e.dataset ? e.dataset.strategy : "")),
        i = E(() => (e.dataset ? e.dataset.pair : "")),
        s = E(() => (e.dataset ? e.dataset.timeframe : "")),
        u = E(() => (e.dataset ? e.dataset.columns : [])),
        c = E(() => e.dataset !== null && typeof e.dataset == "object"),
        d = E(() => e.trades.filter((g) => g.pair === i.value)),
        h = E(() => `${o.value} - ${i.value} - ${s.value}`),
        p = (g = !1) => {
          var J, $, M, F;
          if (!c.value) return;
          (J = r.value) != null && J.title && (r.value.title[0].text = h.value);
          const m = e.dataset.columns.findIndex((A) => A === "__date_ts"),
            b = e.dataset.columns.findIndex((A) => A === "open"),
            x = e.dataset.columns.findIndex((A) => A === "high"),
            S = e.dataset.columns.findIndex((A) => A === "low"),
            w = e.dataset.columns.findIndex((A) => A === "close"),
            _ = e.dataset.columns.findIndex((A) => A === "volume"),
            D = e.dataset.columns.findIndex(
              (A) =>
                A === "_buy_signal_open" ||
                A === "_buy_signal_close" ||
                A === "_enter_long_signal_close"
            ),
            T = e.dataset.columns.findIndex(
              (A) =>
                A === "_sell_signal_open" ||
                A === "_sell_signal_close" ||
                A === "_exit_long_signal_close"
            ),
            O =
              (e.dataset.enter_short_signals &&
                e.dataset.enter_short_signals > 0) ||
              (e.dataset.exit_short_signals &&
                e.dataset.exit_short_signals > 0),
            B = e.dataset.columns.findIndex(
              (A) => A === "_enter_short_signal_close"
            ),
            k = e.dataset.columns.findIndex(
              (A) => A === "_exit_short_signal_close"
            ),
            l =
              "subplots" in e.plotConfig
                ? Object.keys(e.plotConfig.subplots).length + 1
                : 1;
          if (
            (($ = r.value) == null ? void 0 : $.dataZoom) &&
            Array.isArray((M = r.value) == null ? void 0 : M.dataZoom)
          )
            if (g) {
              const A = (1 - 250 / e.dataset.length) * 100;
              r.value.dataZoom.forEach((N, V) => {
                r.value && r.value.dataZoom && (r.value.dataZoom[V].start = A);
              });
            } else
              r.value.dataZoom.forEach((A, N) => {
                r.value &&
                  r.value.dataZoom &&
                  (delete r.value.dataZoom[N].start,
                  delete r.value.dataZoom[N].end);
              });
          const f = e.heikinAshi
              ? Si(u.value, e.dataset.data)
              : e.dataset.data.slice(),
            v = Array(f[f.length - 2].length);
          (v[m] = f[f.length - 1][m] + e.dataset.timeframe_ms * 3), f.push(v);
          const C = {
            dataset: { source: f },
            grid: [
              { left: $t, right: Vt, bottom: `${l * yt + 2}%` },
              { left: $t, right: Vt, bottom: `${l * yt}%`, height: `${yt}%` },
            ],
            series: [
              {
                name: "Candles",
                type: "candlestick",
                barWidth: "80%",
                itemStyle: {
                  color: Pi,
                  color0: Ii,
                  borderColor: Oi,
                  borderColor0: Li,
                },
                encode: { x: m, y: [b, w, S, x] },
              },
              {
                name: "Volume",
                type: "bar",
                xAxisIndex: 1,
                yAxisIndex: 1,
                itemStyle: { color: "#777777" },
                large: !0,
                encode: { x: m, y: _ },
              },
              {
                name: "Entry",
                type: "scatter",
                symbol: "triangle",
                symbolSize: 10,
                xAxisIndex: 0,
                yAxisIndex: 0,
                itemStyle: { color: ki },
                encode: { x: m, y: D },
              },
            ],
          };
          if (
            (T >= 0 &&
              Array.isArray(C.series) &&
              C.series.push({
                name: "Exit",
                type: "scatter",
                symbol: "diamond",
                symbolSize: 8,
                xAxisIndex: 0,
                yAxisIndex: 0,
                itemStyle: { color: Bi },
                encode: { x: m, y: T },
              }),
            Array.isArray(C.series) &&
              O &&
              (B >= 0 &&
                C.series.push({
                  name: "Entry",
                  type: "scatter",
                  symbol: "triangle",
                  symbolRotate: 180,
                  symbolSize: 10,
                  xAxisIndex: 0,
                  yAxisIndex: 0,
                  itemStyle: { color: Mi },
                  tooltip: {},
                  encode: { x: m, y: B },
                }),
              k >= 0 &&
                C.series.push({
                  name: "Exit",
                  type: "scatter",
                  symbol: "pin",
                  symbolSize: 8,
                  xAxisIndex: 0,
                  yAxisIndex: 0,
                  itemStyle: { color: Ni },
                  tooltip: {},
                  encode: { x: m, y: k },
                })),
            Object.assign(r.value, C),
            "main_plot" in e.plotConfig &&
              Object.entries(e.plotConfig.main_plot).forEach(([A, N]) => {
                var ht, G, pt, ft, vt;
                const V = e.dataset.columns.findIndex((at) => at === A);
                if (V > 1) {
                  !Array.isArray((ht = r.value) == null ? void 0 : ht.legend) &&
                    ((pt = (G = r.value) == null ? void 0 : G.legend) == null
                      ? void 0
                      : pt.data) &&
                    r.value.legend.data.push(A);
                  const at = {
                    name: A,
                    type: N.type || "line",
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    itemStyle: { color: N.color },
                    encode: { x: m, y: V },
                    showSymbol: !1,
                  };
                  Array.isArray((ft = r.value) == null ? void 0 : ft.series) &&
                    ((vt = r.value) == null || vt.series.push(at));
                } else
                  console.log(
                    `element ${A} for main plot not found in columns.`
                  );
              }),
            "subplots" in e.plotConfig)
          ) {
            let A = 2;
            Object.entries(e.plotConfig.subplots).forEach(([N, V]) => {
              const ht = A;
              Array.isArray(r.value.yAxis) &&
                r.value.yAxis.length <= A &&
                r.value.yAxis.push({
                  scale: !0,
                  gridIndex: ht,
                  name: N,
                  nameLocation: "middle",
                  nameGap: Qe,
                  axisLabel: { show: !0 },
                  axisLine: { show: !1 },
                  axisTick: { show: !1 },
                  splitLine: { show: !1 },
                }),
                Array.isArray(r.value.xAxis) &&
                  r.value.xAxis.length <= A &&
                  r.value.xAxis.push({
                    type: "time",
                    scale: !0,
                    gridIndex: ht,
                    boundaryGap: !1,
                    axisLine: { onZero: !1 },
                    axisTick: { show: !1 },
                    axisLabel: { show: !1 },
                    axisPointer: { label: { show: !1 } },
                    splitLine: { show: !1 },
                    splitNumber: 20,
                  }),
                Array.isArray(r.value.dataZoom) &&
                  r.value.dataZoom.forEach((G) =>
                    G.xAxisIndex && Array.isArray(G.xAxisIndex)
                      ? G.xAxisIndex.push(A)
                      : null
                  ),
                r.value.grid &&
                  Array.isArray(r.value.grid) &&
                  r.value.grid.push({
                    left: $t,
                    right: Vt,
                    bottom: `${(l - A + 1) * yt}%`,
                    height: `${yt}%`,
                  }),
                Object.entries(V).forEach(([G, pt]) => {
                  var vt;
                  const ft = e.dataset.columns.findIndex((at) => at === G);
                  if (ft > 0) {
                    !Array.isArray(r.value.legend) &&
                      ((vt = r.value.legend) == null ? void 0 : vt.data) &&
                      r.value.legend.data.push(G);
                    const at = {
                      name: G,
                      type: pt.type || "line",
                      xAxisIndex: A,
                      yAxisIndex: A,
                      itemStyle: { color: pt.color || At() },
                      encode: { x: m, y: ft },
                      showSymbol: !1,
                    };
                    r.value.series &&
                      Array.isArray(r.value.series) &&
                      r.value.series.push(at);
                  } else
                    console.log(`element ${G} was not found in the columns.`);
                }),
                (A += 1);
            });
          }
          r.value.grid &&
            Array.isArray(r.value.grid) &&
            ((r.value.grid[r.value.grid.length - 1].bottom = "50px"),
            delete r.value.grid[r.value.grid.length - 1].top);
          const { tradeData: I } = Di(e.dataset, d.value),
            L = "Trades";
          !Array.isArray(r.value.legend) &&
            ((F = r.value.legend) == null ? void 0 : F.data) &&
            r.value.legend.data.push(L);
          const j = {
            name: L,
            type: "scatter",
            xAxisIndex: 0,
            yAxisIndex: 0,
            encode: { x: 0, y: 1, label: 5, tooltip: 6 },
            label: {
              show: !0,
              fontSize: 12,
              backgroundColor: e.theme !== "dark" ? "#fff" : "#000",
              padding: 2,
              color: e.theme === "dark" ? "#fff" : "#000",
            },
            labelLayout: { rotate: 75, align: "left", dx: 10 },
            itemStyle: { color: (A) => A.data[4] },
            symbol: (A) => A[2],
            symbolRotate: (A) => A[3],
            symbolSize: 13,
            data: I,
          };
          r.value.series &&
            Array.isArray(r.value.series) &&
            r.value.series.push(j),
            console.log("chartOptions", r.value),
            a.value.setOption(r.value);
        },
        y = () => {
          (r.value = {
            title: [{ show: !1 }],
            backgroundColor: "rgba(0, 0, 0, 0)",
            useUTC: e.useUTC,
            animation: !1,
            legend: {
              data: ["Candles", "Volume", "Entry", "Exit"],
              right: "1%",
            },
            tooltip: {
              show: !0,
              trigger: "axis",
              renderMode: "richText",
              backgroundColor: "rgba(80,80,80,0.7)",
              borderWidth: 0,
              textStyle: { color: "#fff" },
              axisPointer: {
                type: "cross",
                lineStyle: { color: "#cccccc", width: 1, opacity: 1 },
              },
              position(g, m, b, x, S) {
                const w = { top: 60 };
                return (
                  (w[["left", "right"][+(g[0] < S.viewSize[0] / 2)]] = 5), w
                );
              },
            },
            axisPointer: {
              link: [{ xAxisIndex: "all" }],
              label: { backgroundColor: "#777" },
            },
            xAxis: [
              {
                type: "time",
                scale: !0,
                boundaryGap: !1,
                axisLine: { onZero: !1 },
                axisTick: { show: !0 },
                axisLabel: { show: !0 },
                axisPointer: { label: { show: !1 } },
                position: "top",
                splitLine: { show: !1 },
                splitNumber: 20,
                min: "dataMin",
                max: "dataMax",
              },
              {
                type: "time",
                gridIndex: 1,
                scale: !0,
                boundaryGap: !1,
                axisLine: { onZero: !1 },
                axisTick: { show: !1 },
                axisLabel: { show: !1 },
                axisPointer: { label: { show: !1 } },
                splitLine: { show: !1 },
                splitNumber: 20,
                min: "dataMin",
                max: "dataMax",
              },
            ],
            yAxis: [
              { scale: !0 },
              {
                scale: !0,
                gridIndex: 1,
                splitNumber: 2,
                name: "volume",
                nameLocation: "middle",
                nameGap: Qe,
                axisLabel: { show: !1 },
                axisLine: { show: !1 },
                axisTick: { show: !1 },
                splitLine: { show: !1 },
              },
            ],
            dataZoom: [
              { type: "inside", xAxisIndex: [0, 1], start: 80, end: 100 },
              {
                show: !0,
                xAxisIndex: [0, 1],
                type: "slider",
                bottom: 10,
                start: 80,
                end: 100,
              },
            ],
          }),
            console.log("Initialized"),
            p(!0);
        };
      return (
        Qt(() => {
          y();
        }),
        X(
          () => e.useUTC,
          () => y()
        ),
        X(
          () => e.dataset,
          () => p()
        ),
        X(
          () => e.plotConfig,
          () => y()
        ),
        X(
          () => e.heikinAshi,
          () => p()
        ),
        {
          candleChart: a,
          buyData: t,
          sellData: n,
          chartOptions: r,
          strategy: o,
          pair: i,
          timeframe: s,
          datasetColumns: u,
          hasData: c,
          filteredTrades: d,
          chartTitle: h,
        }
      );
    },
  }),
  Ri = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t(
      "div",
      { staticClass: "row flex-grow-1 chart-wrapper" },
      [
        e.hasData
          ? t("v-chart", {
              ref: "candleChart",
              attrs: { theme: e.theme, autoresize: "", "manual-update": "" },
            })
          : e._e(),
      ],
      1
    );
  },
  Ei = [];
const ta = {};
var $i = Pt(zi, Ri, Ei, !1, Vi, "2cfd6c15", null, null);
function Vi(e) {
  for (let a in ta) this[a] = ta[a];
}
var Fi = (function () {
    return $i.exports;
  })(),
  Wi = Dt({
    name: "PlotIndicator",
    props: {
      value: { required: !0, type: Object },
      columns: { required: !0, type: Array },
      addNew: { required: !0, type: Boolean },
    },
    emits: ["input"],
    setup(e, { emit: a }) {
      const t = R(At()),
        n = R(Lt.line),
        r = R(Object.keys(Lt)),
        o = R(""),
        i = R(!1),
        s = () => {
          t.value = At();
        },
        u = E(() =>
          i.value || !o.value
            ? {}
            : { [o.value]: { color: t.value, type: n.value } }
        ),
        c = () => {
          a("input", u.value);
        },
        d = () => {
          (i.value = !0), c();
        };
      return (
        X(
          () => e.value,
          () => {
            ([o.value] = Object.keys(e.value)),
              (i.value = !1),
              o.value &&
                e.value &&
                ((t.value = e.value[o.value].color || At()),
                (n.value = e.value[o.value].type || Lt.line));
          }
        ),
        X(t, () => {
          e.addNew || c();
        }),
        {
          selColor: t,
          graphType: n,
          availableGraphTypes: r,
          selAvailableIndicator: o,
          cancelled: i,
          combinedIndicator: u,
          newColor: s,
          emitIndicator: c,
          clickCancel: d,
        }
      );
    },
  }),
  Zi = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t(
      "div",
      [
        e.addNew
          ? t(
              "div",
              [
                t(
                  "b-form-group",
                  {
                    attrs: {
                      label: "Add indicator",
                      "label-for": "indicatorSelector",
                    },
                  },
                  [
                    t("b-form-select", {
                      attrs: {
                        id: "indicatorSelector",
                        options: e.columns,
                        "select-size": 4,
                      },
                      model: {
                        value: e.selAvailableIndicator,
                        callback: function (n) {
                          e.selAvailableIndicator = n;
                        },
                        expression: "selAvailableIndicator",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            )
          : e._e(),
        t(
          "b-form-group",
          { attrs: { label: "Type", "label-for": "plotTypeSelector" } },
          [
            t("b-form-select", {
              attrs: {
                id: "plotTypeSelector",
                size: "sm",
                options: e.availableGraphTypes,
              },
              on: {
                change: function (n) {
                  return e.emitIndicator();
                },
              },
              model: {
                value: e.graphType,
                callback: function (n) {
                  e.graphType = n;
                },
                expression: "graphType",
              },
            }),
          ],
          1
        ),
        t("hr"),
        t(
          "b-form-group",
          { attrs: { label: "Color", "label-for": "colsel", size: "sm" } },
          [
            t(
              "b-input-group",
              [
                t("b-input-group-prepend", [
                  t("div", {
                    staticClass: "colorbox mr-2",
                    style: { "background-color": e.selColor },
                  }),
                ]),
                t("b-form-input", {
                  attrs: { id: "colsel", size: "sm" },
                  model: {
                    value: e.selColor,
                    callback: function (n) {
                      e.selColor = n;
                    },
                    expression: "selColor",
                  },
                }),
                t(
                  "b-input-group-append",
                  [
                    t(
                      "b-button",
                      {
                        attrs: { variant: "primary", size: "sm" },
                        on: { click: e.newColor },
                      },
                      [e._v("\u21BB")]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        ),
        t(
          "div",
          { staticClass: "d-flex d-flex-columns" },
          [
            e.addNew
              ? t(
                  "b-button",
                  {
                    staticClass: "flex-grow-1",
                    attrs: { variant: "primary", title: "Add ", size: "sm" },
                    on: { click: e.emitIndicator },
                  },
                  [e._v(" Save indicator ")]
                )
              : e._e(),
            e.addNew
              ? t(
                  "b-button",
                  {
                    staticClass: "ml-1 flex-grow-1",
                    attrs: { variant: "primary", title: "Add ", size: "sm" },
                    on: { click: e.clickCancel },
                  },
                  [e._v(" Cancel ")]
                )
              : e._e(),
          ],
          1
        ),
      ],
      1
    );
  },
  ji = [];
const ea = {};
var Gi = Pt(Wi, Zi, ji, !1, Hi, "68a22d15", null, null);
function Hi(e) {
  for (let a in ea) this[a] = ea[a];
}
var Ui = (function () {
    return Gi.exports;
  })(),
  Yi = Dt({
    name: "PlotConfigurator",
    components: { PlotIndicator: Ui },
    props: {
      value: { type: Object, required: !0 },
      columns: { required: !0, type: Array },
      asModal: { required: !1, default: !0, type: Boolean },
    },
    emits: ["input"],
    setup(e, { emit: a }) {
      const t = ra(),
        n = R(Ft),
        r = R("default"),
        o = R(""),
        i = R(""),
        s = R(!1),
        u = R(!1),
        c = R("main_plot"),
        d = R(),
        h = R(!0),
        p = E(() => c.value === "main_plot"),
        y = E(() => (p.value ? n.value.main_plot : n.value.subplots[c.value])),
        g = E(() => ["main_plot", ...Object.keys(n.value.subplots)]),
        m = E(() =>
          p.value
            ? Object.keys(n.value.main_plot)
            : c.value in n.value.subplots
            ? Object.keys(n.value.subplots[c.value])
            : []
        ),
        b = (f) => {
          console.log(n.value);
          const v = Object.keys(f)[0],
            C = f[v];
          p.value
            ? (console.log(`Adding ${v} to MainPlot`),
              (n.value.main_plot[v] = q({}, C)))
            : (console.log(`Adding ${v} to ${c.value}`),
              (n.value.subplots[c.value][v] = q({}, C))),
            (n.value = q({}, n.value)),
            (s.value = !1),
            a("input", n.value);
        },
        x = E({
          get() {
            return s.value
              ? {}
              : i.value
              ? { [i.value]: y.value[i.value] }
              : {};
          },
          set(f) {
            Object.keys(f)[0] && f ? b(f) : (s.value = !1);
          },
        }),
        S = E({
          get() {
            return JSON.stringify(n.value, null, 2);
          },
          set(f) {
            try {
              (d.value = JSON.parse(f)), (h.value = !0);
            } catch {
              h.value = !1;
            }
          },
        }),
        w = () => {
          console.log(n.value),
            p.value
              ? (console.log(`Removing ${i.value} from MainPlot`),
                delete n.value.main_plot[i.value])
              : (console.log(`Removing ${i.value} from ${c.value}`),
                delete n.value.subplots[c.value][i.value]),
            (n.value = q({}, n.value)),
            console.log(n.value),
            (i.value = ""),
            a("input", n.value);
        },
        _ = () => {
          (n.value.subplots = ge(q({}, n.value.subplots), { [o.value]: {} })),
            (c.value = o.value),
            (o.value = ""),
            console.log(n.value),
            a("input", n.value);
        },
        D = () => {
          delete n.value.subplots[c.value],
            (n.value.subplots = q({}, n.value.subplots)),
            (c.value = "");
        },
        T = () => {
          (n.value = Wt(r.value)),
            console.log(n.value),
            console.log("loading config"),
            a("input", n.value);
        },
        O = () => {
          d.value !== void 0 &&
            h.value &&
            ((n.value = d.value), a("input", n.value));
        },
        B = () => {
          n.value = q({}, Ft);
        },
        k = async () => {
          try {
            await t.activeBot.getStrategyPlotConfig(),
              t.activeBot.strategyPlotConfig &&
                ((n.value = t.activeBot.strategyPlotConfig),
                a("input", n.value));
          } catch {
            Ga("Failed to load Plot configuration from Strategy.");
          }
        },
        l = () => {
          t.activeBot.saveCustomPlotConfig({ [r.value]: n.value });
        };
      return (
        X(e.value, () => {
          console.log("config value"),
            (n.value = e.value),
            (r.value = t.activeBot.plotConfigName);
        }),
        Qt(() => {
          console.log("Config Mounted", e.value),
            (n.value = e.value),
            (r.value = t.activeBot.plotConfigName);
        }),
        {
          botStore: t,
          removeIndicator: w,
          addSubplot: _,
          delSubplot: D,
          loadPlotConfig: T,
          loadConfigFromString: O,
          resetConfig: B,
          loadPlotConfigFromStrategy: k,
          savePlotConfig: l,
          showConfig: u,
          addNewIndicator: s,
          selIndicatorName: i,
          usedColumns: m,
          selSubPlot: c,
          newSubplotName: o,
          subplots: g,
          plotConfigNameLoc: r,
          selIndicator: x,
          plotConfigJson: S,
          tempPlotConfigValid: h,
        }
      );
    },
  }),
  qi = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return e.columns
      ? t(
          "div",
          [
            t(
              "b-form-group",
              {
                attrs: {
                  label: "Plot config name",
                  "label-for": "idPlotConfigName",
                },
              },
              [
                t("b-form-input", {
                  attrs: { id: "idPlotConfigName", size: "sm" },
                  model: {
                    value: e.plotConfigNameLoc,
                    callback: function (n) {
                      e.plotConfigNameLoc = n;
                    },
                    expression: "plotConfigNameLoc",
                  },
                }),
              ],
              1
            ),
            t(
              "div",
              { staticClass: "col-mb-3" },
              [
                t("hr"),
                t(
                  "b-form-group",
                  { attrs: { label: "Target", "label-for": "FieldSel" } },
                  [
                    t("b-form-select", {
                      attrs: {
                        id: "FieldSel",
                        options: e.subplots,
                        "select-size": 3,
                      },
                      model: {
                        value: e.selSubPlot,
                        callback: function (n) {
                          e.selSubPlot = n;
                        },
                        expression: "selSubPlot",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            t(
              "b-form-group",
              { attrs: { label: "Add new plot", "label-for": "newSubPlot" } },
              [
                t(
                  "b-input-group",
                  { attrs: { size: "sm" } },
                  [
                    t("b-form-input", {
                      staticClass: "addPlot",
                      attrs: { id: "newSubPlot" },
                      model: {
                        value: e.newSubplotName,
                        callback: function (n) {
                          e.newSubplotName = n;
                        },
                        expression: "newSubplotName",
                      },
                    }),
                    t(
                      "b-input-group-append",
                      [
                        t(
                          "b-button",
                          {
                            attrs: { disabled: !e.newSubplotName },
                            on: { click: e.addSubplot },
                          },
                          [e._v("+")]
                        ),
                        e.selSubPlot && e.selSubPlot != "main_plot"
                          ? t("b-button", { on: { click: e.delSubplot } }, [
                              e._v("-"),
                            ])
                          : e._e(),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            t("hr"),
            t(
              "div",
              [
                t(
                  "b-form-group",
                  {
                    attrs: {
                      label: "Used indicators",
                      "label-for": "selectedIndicators",
                    },
                  },
                  [
                    t("b-form-select", {
                      attrs: {
                        id: "selectedIndicators",
                        options: e.usedColumns,
                        "select-size": 4,
                      },
                      model: {
                        value: e.selIndicatorName,
                        callback: function (n) {
                          e.selIndicatorName = n;
                        },
                        expression: "selIndicatorName",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            t(
              "div",
              [
                t(
                  "b-button",
                  {
                    attrs: {
                      variant: "primary",
                      title: "Add indicator to plot",
                      size: "sm",
                      disabled: e.addNewIndicator,
                    },
                    on: {
                      click: function (n) {
                        e.addNewIndicator = !e.addNewIndicator;
                      },
                    },
                  },
                  [e._v(" Add new indicator ")]
                ),
                t(
                  "b-button",
                  {
                    staticClass: "ml-1",
                    attrs: {
                      variant: "primary",
                      title: "Remove indicator to plot",
                      size: "sm",
                      disabled: !e.selIndicatorName,
                    },
                    on: { click: e.removeIndicator },
                  },
                  [e._v(" Remove indicator ")]
                ),
              ],
              1
            ),
            e.selIndicatorName || e.addNewIndicator
              ? t("PlotIndicator", {
                  staticClass: "mt-1",
                  attrs: { columns: e.columns, "add-new": e.addNewIndicator },
                  model: {
                    value: e.selIndicator,
                    callback: function (n) {
                      e.selIndicator = n;
                    },
                    expression: "selIndicator",
                  },
                })
              : e._e(),
            t("hr"),
            t(
              "div",
              [
                t(
                  "b-button",
                  {
                    staticClass: "ml-1",
                    attrs: { variant: "primary", size: "sm" },
                    on: { click: e.loadPlotConfig },
                  },
                  [e._v("Load")]
                ),
                t(
                  "b-button",
                  {
                    staticClass: "ml-1",
                    attrs: { variant: "primary", size: "sm" },
                    on: { click: e.loadPlotConfigFromStrategy },
                  },
                  [e._v(" From strategy ")]
                ),
                t(
                  "b-button",
                  {
                    staticClass: "ml-1",
                    attrs: {
                      variant: "primary",
                      size: "sm",
                      "data-toggle": "tooltip",
                      title: "Save configuration",
                    },
                    on: { click: e.savePlotConfig },
                  },
                  [e._v("Save")]
                ),
                t(
                  "b-button",
                  {
                    staticClass: "ml-1",
                    attrs: {
                      variant: "primary",
                      size: "sm",
                      title: "Load configuration from text box below",
                    },
                    on: { click: e.resetConfig },
                  },
                  [e._v("Reset")]
                ),
                t(
                  "b-button",
                  {
                    staticClass: "ml-1",
                    attrs: {
                      id: "showButton",
                      variant: "primary",
                      size: "sm",
                      title:
                        "Show configuration for easy transfer to a strategy",
                    },
                    on: {
                      click: function (n) {
                        e.showConfig = !e.showConfig;
                      },
                    },
                  },
                  [e._v("Show")]
                ),
                e.showConfig
                  ? t(
                      "b-button",
                      {
                        staticClass: "ml-1",
                        attrs: {
                          variant: "primary",
                          size: "sm",
                          title: "Load configuration from text box below",
                        },
                        on: { click: e.loadConfigFromString },
                      },
                      [e._v("Load from String")]
                    )
                  : e._e(),
              ],
              1
            ),
            e.showConfig
              ? t(
                  "div",
                  { staticClass: "col-mb-5 ml-1 mt-2" },
                  [
                    t("b-textarea", {
                      staticClass: "textArea",
                      attrs: {
                        id: "TextArea",
                        size: "sm",
                        state: e.tempPlotConfigValid,
                      },
                      model: {
                        value: e.plotConfigJson,
                        callback: function (n) {
                          e.plotConfigJson = n;
                        },
                        expression: "plotConfigJson",
                      },
                    }),
                  ],
                  1
                )
              : e._e(),
          ],
          1
        )
      : e._e();
  },
  Ki = [];
const aa = {};
var Xi = Pt(Yi, qi, Ki, !1, Ji, "0b92f366", null, null);
function Ji(e) {
  for (let a in aa) this[a] = aa[a];
}
var Qi = (function () {
    return Xi.exports;
  })(),
  $a = { exports: {} };
(function (e, a) {
  (function (t, n) {
    e.exports = n();
  })(typeof self != "undefined" ? self : cr, function () {
    return (() => {
      var t = {
          646: (i) => {
            i.exports = function (s) {
              if (Array.isArray(s)) {
                for (var u = 0, c = new Array(s.length); u < s.length; u++)
                  c[u] = s[u];
                return c;
              }
            };
          },
          713: (i) => {
            i.exports = function (s, u, c) {
              return (
                u in s
                  ? Object.defineProperty(s, u, {
                      value: c,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (s[u] = c),
                s
              );
            };
          },
          860: (i) => {
            i.exports = function (s) {
              if (
                Symbol.iterator in Object(s) ||
                Object.prototype.toString.call(s) === "[object Arguments]"
              )
                return Array.from(s);
            };
          },
          206: (i) => {
            i.exports = function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance"
              );
            };
          },
          319: (i, s, u) => {
            var c = u(646),
              d = u(860),
              h = u(206);
            i.exports = function (p) {
              return c(p) || d(p) || h();
            };
          },
          8: (i) => {
            function s(u) {
              return (
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? (i.exports = s =
                      function (c) {
                        return typeof c;
                      })
                  : (i.exports = s =
                      function (c) {
                        return c &&
                          typeof Symbol == "function" &&
                          c.constructor === Symbol &&
                          c !== Symbol.prototype
                          ? "symbol"
                          : typeof c;
                      }),
                s(u)
              );
            }
            i.exports = s;
          },
        },
        n = {};
      function r(i) {
        var s = n[i];
        if (s !== void 0) return s.exports;
        var u = (n[i] = { exports: {} });
        return t[i](u, u.exports, r), u.exports;
      }
      (r.n = (i) => {
        var s = i && i.__esModule ? () => i.default : () => i;
        return r.d(s, { a: s }), s;
      }),
        (r.d = (i, s) => {
          for (var u in s)
            r.o(s, u) &&
              !r.o(i, u) &&
              Object.defineProperty(i, u, { enumerable: !0, get: s[u] });
        }),
        (r.o = (i, s) => Object.prototype.hasOwnProperty.call(i, s)),
        (r.r = (i) => {
          typeof Symbol != "undefined" &&
            Symbol.toStringTag &&
            Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(i, "__esModule", { value: !0 });
        });
      var o = {};
      return (
        (() => {
          r.r(o),
            r.d(o, { VueSelect: () => O, default: () => k, mixins: () => B });
          var i = r(319),
            s = r.n(i),
            u = r(8),
            c = r.n(u),
            d = r(713),
            h = r.n(d);
          const p = {
              props: { autoscroll: { type: Boolean, default: !0 } },
              watch: {
                typeAheadPointer: function () {
                  this.autoscroll && this.maybeAdjustScroll();
                },
                open: function (l) {
                  var f = this;
                  this.autoscroll &&
                    l &&
                    this.$nextTick(function () {
                      return f.maybeAdjustScroll();
                    });
                },
              },
              methods: {
                maybeAdjustScroll: function () {
                  var l,
                    f =
                      ((l = this.$refs.dropdownMenu) === null || l === void 0
                        ? void 0
                        : l.children[this.typeAheadPointer]) || !1;
                  if (f) {
                    var v = this.getDropdownViewport(),
                      C = f.getBoundingClientRect(),
                      I = C.top,
                      L = C.bottom,
                      j = C.height;
                    if (I < v.top)
                      return (this.$refs.dropdownMenu.scrollTop = f.offsetTop);
                    if (L > v.bottom)
                      return (this.$refs.dropdownMenu.scrollTop =
                        f.offsetTop - (v.height - j));
                  }
                },
                getDropdownViewport: function () {
                  return this.$refs.dropdownMenu
                    ? this.$refs.dropdownMenu.getBoundingClientRect()
                    : { height: 0, top: 0, bottom: 0 };
                },
              },
            },
            y = {
              data: function () {
                return { typeAheadPointer: -1 };
              },
              watch: {
                filteredOptions: function () {
                  for (var l = 0; l < this.filteredOptions.length; l++)
                    if (this.selectable(this.filteredOptions[l])) {
                      this.typeAheadPointer = l;
                      break;
                    }
                },
                open: function (l) {
                  l && this.typeAheadToLastSelected();
                },
                selectedValue: function () {
                  this.open && this.typeAheadToLastSelected();
                },
              },
              methods: {
                typeAheadUp: function () {
                  for (var l = this.typeAheadPointer - 1; l >= 0; l--)
                    if (this.selectable(this.filteredOptions[l])) {
                      this.typeAheadPointer = l;
                      break;
                    }
                },
                typeAheadDown: function () {
                  for (
                    var l = this.typeAheadPointer + 1;
                    l < this.filteredOptions.length;
                    l++
                  )
                    if (this.selectable(this.filteredOptions[l])) {
                      this.typeAheadPointer = l;
                      break;
                    }
                },
                typeAheadSelect: function () {
                  var l = this.filteredOptions[this.typeAheadPointer];
                  l && this.selectable(l) && this.select(l);
                },
                typeAheadToLastSelected: function () {
                  this.typeAheadPointer =
                    this.selectedValue.length !== 0
                      ? this.filteredOptions.indexOf(
                          this.selectedValue[this.selectedValue.length - 1]
                        )
                      : -1;
                },
              },
            },
            g = {
              props: { loading: { type: Boolean, default: !1 } },
              data: function () {
                return { mutableLoading: !1 };
              },
              watch: {
                search: function () {
                  this.$emit("search", this.search, this.toggleLoading);
                },
                loading: function (l) {
                  this.mutableLoading = l;
                },
              },
              methods: {
                toggleLoading: function () {
                  var l =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : null;
                  return (this.mutableLoading =
                    l == null ? !this.mutableLoading : l);
                },
              },
            };
          function m(l, f, v, C, I, L, j, J) {
            var $,
              M = typeof l == "function" ? l.options : l;
            if (
              (f &&
                ((M.render = f), (M.staticRenderFns = v), (M._compiled = !0)),
              C && (M.functional = !0),
              L && (M._scopeId = "data-v-" + L),
              j
                ? (($ = function (N) {
                    (N =
                      N ||
                      (this.$vnode && this.$vnode.ssrContext) ||
                      (this.parent &&
                        this.parent.$vnode &&
                        this.parent.$vnode.ssrContext)) ||
                      typeof __VUE_SSR_CONTEXT__ == "undefined" ||
                      (N = __VUE_SSR_CONTEXT__),
                      I && I.call(this, N),
                      N &&
                        N._registeredComponents &&
                        N._registeredComponents.add(j);
                  }),
                  (M._ssrRegister = $))
                : I &&
                  ($ = J
                    ? function () {
                        I.call(
                          this,
                          (M.functional ? this.parent : this).$root.$options
                            .shadowRoot
                        );
                      }
                    : I),
              $)
            )
              if (M.functional) {
                M._injectStyles = $;
                var F = M.render;
                M.render = function (N, V) {
                  return $.call(V), F(N, V);
                };
              } else {
                var A = M.beforeCreate;
                M.beforeCreate = A ? [].concat(A, $) : [$];
              }
            return { exports: l, options: M };
          }
          const b = {
              Deselect: m(
                {},
                function () {
                  var l = this.$createElement,
                    f = this._self._c || l;
                  return f(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "10",
                        height: "10",
                      },
                    },
                    [
                      f("path", {
                        attrs: {
                          d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z",
                        },
                      }),
                    ]
                  );
                },
                [],
                !1,
                null,
                null,
                null
              ).exports,
              OpenIndicator: m(
                {},
                function () {
                  var l = this.$createElement,
                    f = this._self._c || l;
                  return f(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "14",
                        height: "10",
                      },
                    },
                    [
                      f("path", {
                        attrs: {
                          d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z",
                        },
                      }),
                    ]
                  );
                },
                [],
                !1,
                null,
                null,
                null
              ).exports,
            },
            x = {
              inserted: function (l, f, v) {
                var C = v.context;
                if (C.appendToBody) {
                  var I = C.$refs.toggle.getBoundingClientRect(),
                    L = I.height,
                    j = I.top,
                    J = I.left,
                    $ = I.width,
                    M = window.scrollX || window.pageXOffset,
                    F = window.scrollY || window.pageYOffset;
                  (l.unbindPosition = C.calculatePosition(l, C, {
                    width: $ + "px",
                    left: M + J + "px",
                    top: F + j + L + "px",
                  })),
                    document.body.appendChild(l);
                }
              },
              unbind: function (l, f, v) {
                v.context.appendToBody &&
                  (l.unbindPosition &&
                    typeof l.unbindPosition == "function" &&
                    l.unbindPosition(),
                  l.parentNode && l.parentNode.removeChild(l));
              },
            },
            S = function (l) {
              var f = {};
              return (
                Object.keys(l)
                  .sort()
                  .forEach(function (v) {
                    f[v] = l[v];
                  }),
                JSON.stringify(f)
              );
            };
          var w = 0;
          const _ = function () {
            return ++w;
          };
          function D(l, f) {
            var v = Object.keys(l);
            if (Object.getOwnPropertySymbols) {
              var C = Object.getOwnPropertySymbols(l);
              f &&
                (C = C.filter(function (I) {
                  return Object.getOwnPropertyDescriptor(l, I).enumerable;
                })),
                v.push.apply(v, C);
            }
            return v;
          }
          function T(l) {
            for (var f = 1; f < arguments.length; f++) {
              var v = arguments[f] != null ? arguments[f] : {};
              f % 2
                ? D(Object(v), !0).forEach(function (C) {
                    h()(l, C, v[C]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    l,
                    Object.getOwnPropertyDescriptors(v)
                  )
                : D(Object(v)).forEach(function (C) {
                    Object.defineProperty(
                      l,
                      C,
                      Object.getOwnPropertyDescriptor(v, C)
                    );
                  });
            }
            return l;
          }
          const O = m(
              {
                components: T({}, b),
                directives: { appendToBody: x },
                mixins: [p, y, g],
                props: {
                  value: {},
                  components: {
                    type: Object,
                    default: function () {
                      return {};
                    },
                  },
                  options: {
                    type: Array,
                    default: function () {
                      return [];
                    },
                  },
                  disabled: { type: Boolean, default: !1 },
                  clearable: { type: Boolean, default: !0 },
                  deselectFromDropdown: { type: Boolean, default: !1 },
                  searchable: { type: Boolean, default: !0 },
                  multiple: { type: Boolean, default: !1 },
                  placeholder: { type: String, default: "" },
                  transition: { type: String, default: "vs__fade" },
                  clearSearchOnSelect: { type: Boolean, default: !0 },
                  closeOnSelect: { type: Boolean, default: !0 },
                  label: { type: String, default: "label" },
                  autocomplete: { type: String, default: "off" },
                  reduce: {
                    type: Function,
                    default: function (l) {
                      return l;
                    },
                  },
                  selectable: {
                    type: Function,
                    default: function (l) {
                      return !0;
                    },
                  },
                  getOptionLabel: {
                    type: Function,
                    default: function (l) {
                      return c()(l) === "object"
                        ? l.hasOwnProperty(this.label)
                          ? l[this.label]
                          : console.warn(
                              '[vue-select warn]: Label key "option.'.concat(
                                this.label,
                                '" does not'
                              ) +
                                " exist in options object ".concat(
                                  JSON.stringify(l),
                                  `.
`
                                ) +
                                "https://vue-select.org/api/props.html#getoptionlabel"
                            )
                        : l;
                    },
                  },
                  getOptionKey: {
                    type: Function,
                    default: function (l) {
                      if (c()(l) !== "object") return l;
                      try {
                        return l.hasOwnProperty("id") ? l.id : S(l);
                      } catch (f) {
                        return console.warn(
                          `[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,
                          l,
                          f
                        );
                      }
                    },
                  },
                  onTab: {
                    type: Function,
                    default: function () {
                      this.selectOnTab &&
                        !this.isComposing &&
                        this.typeAheadSelect();
                    },
                  },
                  taggable: { type: Boolean, default: !1 },
                  tabindex: { type: Number, default: null },
                  pushTags: { type: Boolean, default: !1 },
                  filterable: { type: Boolean, default: !0 },
                  filterBy: {
                    type: Function,
                    default: function (l, f, v) {
                      return (
                        (f || "")
                          .toLocaleLowerCase()
                          .indexOf(v.toLocaleLowerCase()) > -1
                      );
                    },
                  },
                  filter: {
                    type: Function,
                    default: function (l, f) {
                      var v = this;
                      return l.filter(function (C) {
                        var I = v.getOptionLabel(C);
                        return (
                          typeof I == "number" && (I = I.toString()),
                          v.filterBy(C, I, f)
                        );
                      });
                    },
                  },
                  createOption: {
                    type: Function,
                    default: function (l) {
                      return c()(this.optionList[0]) === "object"
                        ? h()({}, this.label, l)
                        : l;
                    },
                  },
                  resetOnOptionsChange: {
                    default: !1,
                    validator: function (l) {
                      return ["function", "boolean"].includes(c()(l));
                    },
                  },
                  clearSearchOnBlur: {
                    type: Function,
                    default: function (l) {
                      var f = l.clearSearchOnSelect,
                        v = l.multiple;
                      return f && !v;
                    },
                  },
                  noDrop: { type: Boolean, default: !1 },
                  inputId: { type: String },
                  dir: { type: String, default: "auto" },
                  selectOnTab: { type: Boolean, default: !1 },
                  selectOnKeyCodes: {
                    type: Array,
                    default: function () {
                      return [13];
                    },
                  },
                  searchInputQuerySelector: {
                    type: String,
                    default: "[type=search]",
                  },
                  mapKeydown: {
                    type: Function,
                    default: function (l, f) {
                      return l;
                    },
                  },
                  appendToBody: { type: Boolean, default: !1 },
                  calculatePosition: {
                    type: Function,
                    default: function (l, f, v) {
                      var C = v.width,
                        I = v.top,
                        L = v.left;
                      (l.style.top = I),
                        (l.style.left = L),
                        (l.style.width = C);
                    },
                  },
                  dropdownShouldOpen: {
                    type: Function,
                    default: function (l) {
                      var f = l.noDrop,
                        v = l.open,
                        C = l.mutableLoading;
                      return !f && v && !C;
                    },
                  },
                  uid: {
                    type: [String, Number],
                    default: function () {
                      return _();
                    },
                  },
                },
                data: function () {
                  return {
                    search: "",
                    open: !1,
                    isComposing: !1,
                    pushedTags: [],
                    _value: [],
                  };
                },
                computed: {
                  isTrackingValues: function () {
                    return (
                      this.value === void 0 ||
                      this.$options.propsData.hasOwnProperty("reduce")
                    );
                  },
                  selectedValue: function () {
                    var l = this.value;
                    return (
                      this.isTrackingValues && (l = this.$data._value),
                      l != null && l !== "" ? [].concat(l) : []
                    );
                  },
                  optionList: function () {
                    return this.options.concat(
                      this.pushTags ? this.pushedTags : []
                    );
                  },
                  searchEl: function () {
                    return this.$scopedSlots.search
                      ? this.$refs.selectedOptions.querySelector(
                          this.searchInputQuerySelector
                        )
                      : this.$refs.search;
                  },
                  scope: function () {
                    var l = this,
                      f = {
                        search: this.search,
                        loading: this.loading,
                        searching: this.searching,
                        filteredOptions: this.filteredOptions,
                      };
                    return {
                      search: {
                        attributes: T(
                          {
                            disabled: this.disabled,
                            placeholder: this.searchPlaceholder,
                            tabindex: this.tabindex,
                            readonly: !this.searchable,
                            id: this.inputId,
                            "aria-autocomplete": "list",
                            "aria-labelledby": "vs".concat(
                              this.uid,
                              "__combobox"
                            ),
                            "aria-controls": "vs".concat(this.uid, "__listbox"),
                            ref: "search",
                            type: "search",
                            autocomplete: this.autocomplete,
                            value: this.search,
                          },
                          this.dropdownOpen &&
                            this.filteredOptions[this.typeAheadPointer]
                            ? {
                                "aria-activedescendant": "vs"
                                  .concat(this.uid, "__option-")
                                  .concat(this.typeAheadPointer),
                              }
                            : {}
                        ),
                        events: {
                          compositionstart: function () {
                            return (l.isComposing = !0);
                          },
                          compositionend: function () {
                            return (l.isComposing = !1);
                          },
                          keydown: this.onSearchKeyDown,
                          blur: this.onSearchBlur,
                          focus: this.onSearchFocus,
                          input: function (v) {
                            return (l.search = v.target.value);
                          },
                        },
                      },
                      spinner: { loading: this.mutableLoading },
                      noOptions: {
                        search: this.search,
                        loading: this.mutableLoading,
                        searching: this.searching,
                      },
                      openIndicator: {
                        attributes: {
                          ref: "openIndicator",
                          role: "presentation",
                          class: "vs__open-indicator",
                        },
                      },
                      listHeader: f,
                      listFooter: f,
                      header: T({}, f, { deselect: this.deselect }),
                      footer: T({}, f, { deselect: this.deselect }),
                    };
                  },
                  childComponents: function () {
                    return T({}, b, {}, this.components);
                  },
                  stateClasses: function () {
                    return {
                      "vs--open": this.dropdownOpen,
                      "vs--single": !this.multiple,
                      "vs--multiple": this.multiple,
                      "vs--searching": this.searching && !this.noDrop,
                      "vs--searchable": this.searchable && !this.noDrop,
                      "vs--unsearchable": !this.searchable,
                      "vs--loading": this.mutableLoading,
                      "vs--disabled": this.disabled,
                    };
                  },
                  searching: function () {
                    return !!this.search;
                  },
                  dropdownOpen: function () {
                    return this.dropdownShouldOpen(this);
                  },
                  searchPlaceholder: function () {
                    return this.isValueEmpty && this.placeholder
                      ? this.placeholder
                      : void 0;
                  },
                  filteredOptions: function () {
                    var l = [].concat(this.optionList);
                    if (!this.filterable && !this.taggable) return l;
                    var f = this.search.length
                      ? this.filter(l, this.search, this)
                      : l;
                    if (this.taggable && this.search.length) {
                      var v = this.createOption(this.search);
                      this.optionExists(v) || f.unshift(v);
                    }
                    return f;
                  },
                  isValueEmpty: function () {
                    return this.selectedValue.length === 0;
                  },
                  showClearButton: function () {
                    return (
                      !this.multiple &&
                      this.clearable &&
                      !this.open &&
                      !this.isValueEmpty
                    );
                  },
                },
                watch: {
                  options: function (l, f) {
                    var v = this;
                    !this.taggable &&
                      (typeof v.resetOnOptionsChange == "function"
                        ? v.resetOnOptionsChange(l, f, v.selectedValue)
                        : v.resetOnOptionsChange) &&
                      this.clearSelection(),
                      this.value &&
                        this.isTrackingValues &&
                        this.setInternalValueFromOptions(this.value);
                  },
                  value: {
                    immediate: !0,
                    handler: function (l) {
                      this.isTrackingValues &&
                        this.setInternalValueFromOptions(l);
                    },
                  },
                  multiple: function () {
                    this.clearSelection();
                  },
                  open: function (l) {
                    this.$emit(l ? "open" : "close");
                  },
                },
                created: function () {
                  (this.mutableLoading = this.loading),
                    this.$on("option:created", this.pushTag);
                },
                methods: {
                  setInternalValueFromOptions: function (l) {
                    var f = this;
                    Array.isArray(l)
                      ? (this.$data._value = l.map(function (v) {
                          return f.findOptionFromReducedValue(v);
                        }))
                      : (this.$data._value =
                          this.findOptionFromReducedValue(l));
                  },
                  select: function (l) {
                    this.$emit("option:selecting", l),
                      this.isOptionSelected(l)
                        ? this.deselectFromDropdown &&
                          (this.clearable ||
                            (this.multiple && this.selectedValue.length > 1)) &&
                          this.deselect(l)
                        : (this.taggable &&
                            !this.optionExists(l) &&
                            this.$emit("option:created", l),
                          this.multiple && (l = this.selectedValue.concat(l)),
                          this.updateValue(l),
                          this.$emit("option:selected", l)),
                      this.onAfterSelect(l);
                  },
                  deselect: function (l) {
                    var f = this;
                    this.$emit("option:deselecting", l),
                      this.updateValue(
                        this.selectedValue.filter(function (v) {
                          return !f.optionComparator(v, l);
                        })
                      ),
                      this.$emit("option:deselected", l);
                  },
                  clearSelection: function () {
                    this.updateValue(this.multiple ? [] : null);
                  },
                  onAfterSelect: function (l) {
                    this.closeOnSelect &&
                      ((this.open = !this.open), this.searchEl.blur()),
                      this.clearSearchOnSelect && (this.search = "");
                  },
                  updateValue: function (l) {
                    var f = this;
                    this.value === void 0 && (this.$data._value = l),
                      l !== null &&
                        (l = Array.isArray(l)
                          ? l.map(function (v) {
                              return f.reduce(v);
                            })
                          : this.reduce(l)),
                      this.$emit("input", l);
                  },
                  toggleDropdown: function (l) {
                    var f = l.target !== this.searchEl;
                    f && l.preventDefault();
                    var v = [].concat(
                      s()(this.$refs.deselectButtons || []),
                      s()([this.$refs.clearButton])
                    );
                    this.searchEl === void 0 ||
                    v.filter(Boolean).some(function (C) {
                      return C.contains(l.target) || C === l.target;
                    })
                      ? l.preventDefault()
                      : this.open && f
                      ? this.searchEl.blur()
                      : this.disabled ||
                        ((this.open = !0), this.searchEl.focus());
                  },
                  isOptionSelected: function (l) {
                    var f = this;
                    return this.selectedValue.some(function (v) {
                      return f.optionComparator(v, l);
                    });
                  },
                  isOptionDeselectable: function (l) {
                    return (
                      this.isOptionSelected(l) && this.deselectFromDropdown
                    );
                  },
                  optionComparator: function (l, f) {
                    return this.getOptionKey(l) === this.getOptionKey(f);
                  },
                  findOptionFromReducedValue: function (l) {
                    var f = this,
                      v = []
                        .concat(s()(this.options), s()(this.pushedTags))
                        .filter(function (C) {
                          return (
                            JSON.stringify(f.reduce(C)) === JSON.stringify(l)
                          );
                        });
                    return v.length === 1
                      ? v[0]
                      : v.find(function (C) {
                          return f.optionComparator(C, f.$data._value);
                        }) || l;
                  },
                  closeSearchOptions: function () {
                    (this.open = !1), this.$emit("search:blur");
                  },
                  maybeDeleteValue: function () {
                    if (
                      !this.searchEl.value.length &&
                      this.selectedValue &&
                      this.selectedValue.length &&
                      this.clearable
                    ) {
                      var l = null;
                      this.multiple &&
                        (l = s()(
                          this.selectedValue.slice(
                            0,
                            this.selectedValue.length - 1
                          )
                        )),
                        this.updateValue(l);
                    }
                  },
                  optionExists: function (l) {
                    var f = this;
                    return this.optionList.some(function (v) {
                      return f.optionComparator(v, l);
                    });
                  },
                  normalizeOptionForSlot: function (l) {
                    return c()(l) === "object" ? l : h()({}, this.label, l);
                  },
                  pushTag: function (l) {
                    this.pushedTags.push(l);
                  },
                  onEscape: function () {
                    this.search.length
                      ? (this.search = "")
                      : this.searchEl.blur();
                  },
                  onSearchBlur: function () {
                    if (!this.mousedown || this.searching) {
                      var l = this.clearSearchOnSelect,
                        f = this.multiple;
                      return (
                        this.clearSearchOnBlur({
                          clearSearchOnSelect: l,
                          multiple: f,
                        }) && (this.search = ""),
                        void this.closeSearchOptions()
                      );
                    }
                    (this.mousedown = !1),
                      this.search.length !== 0 ||
                        this.options.length !== 0 ||
                        this.closeSearchOptions();
                  },
                  onSearchFocus: function () {
                    (this.open = !0), this.$emit("search:focus");
                  },
                  onMousedown: function () {
                    this.mousedown = !0;
                  },
                  onMouseUp: function () {
                    this.mousedown = !1;
                  },
                  onSearchKeyDown: function (l) {
                    var f = this,
                      v = function (L) {
                        return (
                          L.preventDefault(),
                          !f.isComposing && f.typeAheadSelect()
                        );
                      },
                      C = {
                        8: function (L) {
                          return f.maybeDeleteValue();
                        },
                        9: function (L) {
                          return f.onTab();
                        },
                        27: function (L) {
                          return f.onEscape();
                        },
                        38: function (L) {
                          return L.preventDefault(), f.typeAheadUp();
                        },
                        40: function (L) {
                          return L.preventDefault(), f.typeAheadDown();
                        },
                      };
                    this.selectOnKeyCodes.forEach(function (L) {
                      return (C[L] = v);
                    });
                    var I = this.mapKeydown(C, this);
                    if (typeof I[l.keyCode] == "function")
                      return I[l.keyCode](l);
                  },
                },
              },
              function () {
                var l = this,
                  f = l.$createElement,
                  v = l._self._c || f;
                return v(
                  "div",
                  {
                    staticClass: "v-select",
                    class: l.stateClasses,
                    attrs: { dir: l.dir },
                  },
                  [
                    l._t("header", null, null, l.scope.header),
                    l._v(" "),
                    v(
                      "div",
                      {
                        ref: "toggle",
                        staticClass: "vs__dropdown-toggle",
                        attrs: {
                          id: "vs" + l.uid + "__combobox",
                          role: "combobox",
                          "aria-expanded": l.dropdownOpen.toString(),
                          "aria-owns": "vs" + l.uid + "__listbox",
                          "aria-label": "Search for option",
                        },
                        on: {
                          mousedown: function (C) {
                            return l.toggleDropdown(C);
                          },
                        },
                      },
                      [
                        v(
                          "div",
                          {
                            ref: "selectedOptions",
                            staticClass: "vs__selected-options",
                          },
                          [
                            l._l(l.selectedValue, function (C) {
                              return l._t(
                                "selected-option-container",
                                [
                                  v(
                                    "span",
                                    {
                                      key: l.getOptionKey(C),
                                      staticClass: "vs__selected",
                                    },
                                    [
                                      l._t(
                                        "selected-option",
                                        [
                                          l._v(
                                            `
            ` +
                                              l._s(l.getOptionLabel(C)) +
                                              `
          `
                                          ),
                                        ],
                                        null,
                                        l.normalizeOptionForSlot(C)
                                      ),
                                      l._v(" "),
                                      l.multiple
                                        ? v(
                                            "button",
                                            {
                                              ref: "deselectButtons",
                                              refInFor: !0,
                                              staticClass: "vs__deselect",
                                              attrs: {
                                                disabled: l.disabled,
                                                type: "button",
                                                title:
                                                  "Deselect " +
                                                  l.getOptionLabel(C),
                                                "aria-label":
                                                  "Deselect " +
                                                  l.getOptionLabel(C),
                                              },
                                              on: {
                                                click: function (I) {
                                                  return l.deselect(C);
                                                },
                                              },
                                            },
                                            [
                                              v(l.childComponents.Deselect, {
                                                tag: "component",
                                              }),
                                            ],
                                            1
                                          )
                                        : l._e(),
                                    ],
                                    2
                                  ),
                                ],
                                {
                                  option: l.normalizeOptionForSlot(C),
                                  deselect: l.deselect,
                                  multiple: l.multiple,
                                  disabled: l.disabled,
                                }
                              );
                            }),
                            l._v(" "),
                            l._t(
                              "search",
                              [
                                v(
                                  "input",
                                  l._g(
                                    l._b(
                                      { staticClass: "vs__search" },
                                      "input",
                                      l.scope.search.attributes,
                                      !1
                                    ),
                                    l.scope.search.events
                                  )
                                ),
                              ],
                              null,
                              l.scope.search
                            ),
                          ],
                          2
                        ),
                        l._v(" "),
                        v(
                          "div",
                          { ref: "actions", staticClass: "vs__actions" },
                          [
                            v(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: l.showClearButton,
                                    expression: "showClearButton",
                                  },
                                ],
                                ref: "clearButton",
                                staticClass: "vs__clear",
                                attrs: {
                                  disabled: l.disabled,
                                  type: "button",
                                  title: "Clear Selected",
                                  "aria-label": "Clear Selected",
                                },
                                on: { click: l.clearSelection },
                              },
                              [
                                v(l.childComponents.Deselect, {
                                  tag: "component",
                                }),
                              ],
                              1
                            ),
                            l._v(" "),
                            l._t(
                              "open-indicator",
                              [
                                l.noDrop
                                  ? l._e()
                                  : v(
                                      l.childComponents.OpenIndicator,
                                      l._b(
                                        { tag: "component" },
                                        "component",
                                        l.scope.openIndicator.attributes,
                                        !1
                                      )
                                    ),
                              ],
                              null,
                              l.scope.openIndicator
                            ),
                            l._v(" "),
                            l._t(
                              "spinner",
                              [
                                v(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: l.mutableLoading,
                                        expression: "mutableLoading",
                                      },
                                    ],
                                    staticClass: "vs__spinner",
                                  },
                                  [l._v("Loading...")]
                                ),
                              ],
                              null,
                              l.scope.spinner
                            ),
                          ],
                          2
                        ),
                      ]
                    ),
                    l._v(" "),
                    v("transition", { attrs: { name: l.transition } }, [
                      l.dropdownOpen
                        ? v(
                            "ul",
                            {
                              directives: [
                                {
                                  name: "append-to-body",
                                  rawName: "v-append-to-body",
                                },
                              ],
                              key: "vs" + l.uid + "__listbox",
                              ref: "dropdownMenu",
                              staticClass: "vs__dropdown-menu",
                              attrs: {
                                id: "vs" + l.uid + "__listbox",
                                role: "listbox",
                                tabindex: "-1",
                              },
                              on: {
                                mousedown: function (C) {
                                  return C.preventDefault(), l.onMousedown(C);
                                },
                                mouseup: l.onMouseUp,
                              },
                            },
                            [
                              l._t(
                                "list-header",
                                null,
                                null,
                                l.scope.listHeader
                              ),
                              l._v(" "),
                              l._l(l.filteredOptions, function (C, I) {
                                return v(
                                  "li",
                                  {
                                    key: l.getOptionKey(C),
                                    staticClass: "vs__dropdown-option",
                                    class: {
                                      "vs__dropdown-option--deselect":
                                        l.isOptionDeselectable(C) &&
                                        I === l.typeAheadPointer,
                                      "vs__dropdown-option--selected":
                                        l.isOptionSelected(C),
                                      "vs__dropdown-option--highlight":
                                        I === l.typeAheadPointer,
                                      "vs__dropdown-option--disabled":
                                        !l.selectable(C),
                                    },
                                    attrs: {
                                      id: "vs" + l.uid + "__option-" + I,
                                      role: "option",
                                      "aria-selected":
                                        I === l.typeAheadPointer || null,
                                    },
                                    on: {
                                      mouseover: function (L) {
                                        l.selectable(C) &&
                                          (l.typeAheadPointer = I);
                                      },
                                      click: function (L) {
                                        L.preventDefault(),
                                          L.stopPropagation(),
                                          l.selectable(C) && l.select(C);
                                      },
                                    },
                                  },
                                  [
                                    l._t(
                                      "option",
                                      [
                                        l._v(
                                          `
          ` +
                                            l._s(l.getOptionLabel(C)) +
                                            `
        `
                                        ),
                                      ],
                                      null,
                                      l.normalizeOptionForSlot(C)
                                    ),
                                  ],
                                  2
                                );
                              }),
                              l._v(" "),
                              l.filteredOptions.length === 0
                                ? v(
                                    "li",
                                    { staticClass: "vs__no-options" },
                                    [
                                      l._t(
                                        "no-options",
                                        [
                                          l._v(`
          Sorry, no matching options.
        `),
                                        ],
                                        null,
                                        l.scope.noOptions
                                      ),
                                    ],
                                    2
                                  )
                                : l._e(),
                              l._v(" "),
                              l._t(
                                "list-footer",
                                null,
                                null,
                                l.scope.listFooter
                              ),
                            ],
                            2
                          )
                        : v("ul", {
                            staticStyle: {
                              display: "none",
                              visibility: "hidden",
                            },
                            attrs: {
                              id: "vs" + l.uid + "__listbox",
                              role: "listbox",
                            },
                          }),
                    ]),
                    l._v(" "),
                    l._t("footer", null, null, l.scope.footer),
                  ],
                  2
                );
              },
              [],
              !1,
              null,
              null,
              null
            ).exports,
            B = { ajax: g, pointer: y, pointerScroll: p },
            k = O;
        })(),
        o
      );
    })();
  });
})($a);
var ts = dr($a.exports),
  es = Dt({
    name: "CandleChartContainer",
    components: { CandleChart: Fi, PlotConfigurator: Qi, vSelect: ts },
    props: {
      trades: { required: !1, default: () => [], type: Array },
      availablePairs: { required: !0, type: Array },
      timeframe: { required: !0, type: String },
      historicView: { required: !1, default: !1, type: Boolean },
      plotConfigModal: { required: !1, default: !0, type: Boolean },
      timerange: { required: !1, default: "", type: String },
      strategy: { required: !1, default: "", type: String },
    },
    setup(e, { root: a }) {
      const t = Ha(),
        n = ra(),
        r = R(""),
        o = R(q({}, Ft)),
        i = R(""),
        s = R(!1),
        u = R(e.plotConfigModal),
        c = E(() => {
          var S, w;
          return e.historicView
            ? (S = n.activeBot.history[`${r.value}__${e.timeframe}`]) == null
              ? void 0
              : S.data
            : (w = n.activeBot.candleData[`${r.value}__${e.timeframe}`]) == null
            ? void 0
            : w.data;
        }),
        d = E(() => {
          var S;
          return (
            e.strategy || ((S = c.value) == null ? void 0 : S.strategy) || ""
          );
        }),
        h = E(() => (c.value ? c.value.columns : [])),
        p = E(() => !!c.value),
        y = E(() =>
          e.historicView
            ? n.activeBot.historyStatus === gt.loading
            : n.activeBot.candleDataStatus === gt.loading
        ),
        g = E(() => {
          switch (
            e.historicView
              ? n.activeBot.historyStatus
              : n.activeBot.candleDataStatus
          ) {
            case gt.loading:
              return "Loading...";
            case gt.success:
              return "No data available";
            case gt.error:
              return "Failed to load data";
            default:
              return "Unknown";
          }
        }),
        m = () => {
          console.log("plotConfigChanged"),
            (o.value = Wt(i.value)),
            n.activeBot.setPlotConfigName(i.value);
        },
        b = () => {
          e.plotConfigModal
            ? a.$bvModal.show("plotConfiguratorModal")
            : (u.value = !u.value);
        },
        x = () => {
          r.value &&
            e.timeframe &&
            (e.historicView
              ? n.activeBot.getPairHistory({
                  pair: r.value,
                  timeframe: e.timeframe,
                  timerange: e.timerange,
                  strategy: e.strategy,
                })
              : n.activeBot.getPairCandles({
                  pair: r.value,
                  timeframe: e.timeframe,
                  limit: 500,
                }));
        };
      return (
        X(
          () => e.availablePairs,
          () => {
            e.availablePairs.find((S) => S === r.value) ||
              (([r.value] = e.availablePairs), x());
          }
        ),
        X(
          () => n.activeBot.selectedPair,
          () => {
            (r.value = n.activeBot.selectedPair), x();
          }
        ),
        Qt(() => {
          n.activeBot.selectedPair
            ? (r.value = n.activeBot.selectedPair)
            : e.availablePairs.length > 0 && ([r.value] = e.availablePairs),
            (i.value = Ua()),
            (o.value = Wt(i.value)),
            p || x();
        }),
        {
          botStore: n,
          settingsStore: t,
          history,
          dataset: c,
          strategyName: d,
          datasetColumns: h,
          isLoadingDataset: y,
          noDatasetText: g,
          hasDataset: p,
          heikinAshi: s,
          plotConfigChanged: m,
          showPlotConfig: u,
          showConfigurator: b,
          refresh: x,
          plotConfigName: i,
          pair: r,
          plotConfig: o,
        }
      );
    },
  }),
  as = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t(
      "div",
      { staticClass: "d-flex h-100" },
      [
        t(
          "div",
          {
            staticClass:
              "flex-fill container-fluid flex-column align-items-stretch d-flex h-100",
          },
          [
            e.plotConfigModal
              ? t(
                  "b-modal",
                  {
                    attrs: {
                      id: "plotConfiguratorModal",
                      title: "Plot Configurator",
                      "ok-only": "",
                      "hide-backdrop": "",
                      "button-size": "sm",
                    },
                  },
                  [
                    t("PlotConfigurator", {
                      attrs: { columns: e.datasetColumns },
                      model: {
                        value: e.plotConfig,
                        callback: function (n) {
                          e.plotConfig = n;
                        },
                        expression: "plotConfig",
                      },
                    }),
                  ],
                  1
                )
              : e._e(),
            t("div", { staticClass: "row mr-0" }, [
              t(
                "div",
                {
                  staticClass:
                    "ml-2 d-flex flex-wrap flex-md-nowrap align-items-center",
                },
                [
                  t("span", { staticClass: "ml-2 text-nowrap" }, [
                    e._v(
                      e._s(e.timeframe || "")
                    ),
                  ]),
                  t("v-select", {
                    staticClass: "ml-2",
                    staticStyle: { "min-width": "7em" },
                    attrs: {
                      options: e.availablePairs,
                      size: "sm",
                      clearable: !1,
                    },
                    on: { change: e.refresh },
                    model: {
                      value: e.pair,
                      callback: function (n) {
                        e.pair = n;
                      },
                      expression: "pair",
                    },
                  }),
                  // t(
                  //   "b-button",
                  //   {
                  //     staticClass: "ml-2",
                  //     attrs: { disabled: !e.pair, size: "sm" },
                  //     on: { click: e.refresh },
                  //   },
                  //   [e._v("\u21BB")]
                  // ),
                  e.dataset
                    ? t(
                        "small",
                        {
                          staticClass: "ml-2 text-nowrap",
                          attrs: { title: "Long entry signals" },
                        },
                        [
                          e._v(
                            "Long signals: " +
                              e._s(
                                e.dataset.enter_long_signals ||
                                  e.dataset.buy_signals
                              )
                          ),
                        ]
                      )
                    : e._e(),
                  e.dataset
                    ? t(
                        "small",
                        {
                          staticClass: "ml-2 text-nowrap",
                          attrs: { title: "Long exit signals" },
                        },
                        [
                          e._v(
                            "Long exit: " +
                              e._s(
                                e.dataset.exit_long_signals ||
                                  e.dataset.sell_signals
                              )
                          ),
                        ]
                      )
                    : e._e(),
                  e.dataset && e.dataset.enter_short_signals
                    ? t("small", { staticClass: "ml-2 text-nowrap" }, [
                        e._v(
                          "Short entries: " +
                            e._s(e.dataset.enter_short_signals)
                        ),
                      ])
                    : e._e(),
                  e.dataset && e.dataset.exit_short_signals
                    ? t("small", { staticClass: "ml-2 text-nowrap" }, [
                        e._v(
                          "Short exits: " + e._s(e.dataset.exit_short_signals)
                        ),
                      ])
                    : e._e(),
                ],
                1
              ),
              t(
                "div",
                { staticClass: "ml-auto d-flex align-items-center" },
                [
                  // t(
                  //   "b-form-checkbox",
                  //   {
                  //     model: {
                  //       value: e.heikinAshi,
                  //       callback: function (n) {
                  //         e.heikinAshi = n;
                  //       },
                  //       expression: "",/*Heikin Ashi*/
                  //     },
                  //   },
                  //   [e._v("")] /*Heikin Ashi*/
                  // ),
                  t(
                    "div",
                    { staticClass: "ml-2" },
                    [
                      t("b-select", {
                        attrs: {
                          options:
                            e.botStore.activeBot.availablePlotConfigNames,
                          size: "sm",
                        },
                        on: { change: e.plotConfigChanged },
                        model: {
                          value: e.plotConfigName,
                          callback: function (n) {
                            e.plotConfigName = n;
                          },
                          expression: "plotConfigName",
                        },
                      }),
                    ],
                    1
                  ),
                  t(
                    "div",
                    { staticClass: "ml-2 mr-0 mr-md-1" },
                    [
                      t(
                        "b-button",
                        {
                          attrs: { size: "sm", title: "Plot configurator" },
                          on: { click: e.showConfigurator },
                        },
                        [e._v(" \u2699 ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
            t(
              "div",
              { staticClass: "row mr-1 ml-1 h-100" },
              [
                e.hasDataset
                  ? t("CandleChart", {
                      attrs: {
                        dataset: e.dataset,
                        trades: e.trades,
                        "plot-config": e.plotConfig,
                        "heikin-ashi": e.heikinAshi,
                        "use-u-t-c": e.settingsStore.timezone === "UTC",
                        theme: e.settingsStore.chartTheme,
                      },
                    })
                  : t(
                      "div",
                      { staticClass: "m-auto" },
                      [
                        e.isLoadingDataset
                          ? t("b-spinner", { attrs: { label: "Spinning" } })
                          : t(
                              "div",
                              { staticStyle: { "font-size": "1.5rem" } },
                              [e._v(" " + e._s(e.noDatasetText) + " ")]
                            ),
                      ],
                      1
                    ),
              ],
              1
            ),
          ],
          1
        ),
        t("transition", { attrs: { name: "fade", mode: "in-out" } }, [
          e.plotConfigModal
            ? e._e()
            : t(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.showPlotConfig,
                      expression: "showPlotConfig",
                    },
                  ],
                  staticClass: "w-25 config-sidebar",
                },
                [
                  t("PlotConfigurator", {
                    attrs: { columns: e.datasetColumns, "as-modal": !1 },
                    model: {
                      value: e.plotConfig,
                      callback: function (n) {
                        e.plotConfig = n;
                      },
                      expression: "plotConfig",
                    },
                  }),
                ],
                1
              ),
        ]),
      ],
      1
    );
  },
  ns = [];
const na = {};
var rs = Pt(es, as, ns, !1, os, "efc7defc", null, null);
function os(e) {
  for (let a in na) this[a] = na[a];
}
var hs = (function () {
  return rs.exports;
})();
export { hs as C };
//# sourceMappingURL=CandleChartContainer.e7b4f871.js.map
