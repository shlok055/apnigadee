__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const v = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M16.5 26a1.5 1.5 0 0 0-.14 3H26v2h-9.5a3.5 3.5 0 0 1-.2-7H28a1 1 0 0 0 1-1c0-.48-.4-.93-.89-1H8v3H6v-3H2v-2h4v-8.26c-.9.74-2.03 1.2-3.28 1.26H2v-2h.5A3.5 3.5 0 0 0 6 7.7v-.96c-.9.74-2.03 1.2-3.28 1.26H2V6h.5A3.5 3.5 0 0 0 6 2.7V2h2v.5A3.5 3.5 0 0 0 11.3 6h.7v2h-.5A5.48 5.48 0 0 1 8 6.74v.76a3.5 3.5 0 0 0 3.3 3.5h.7v2h-.5A5.48 5.48 0 0 1 8 11.74V20h1.46L20.5 3.38a3 3 0 0 1 4.86-.2l.14.2 5.33 8.07-1.66 1.1-1.7-2.55H24.5l-2.7 3.6a1 1 0 0 1-1.51.1l-.09-.1-2.17-2.9-6.17 9.3H28a3 3 0 0 1 .18 6H28zm5.73-21.61-.07.1-2.96 4.45 1.8 2.4 2.2-2.94a1 1 0 0 1 .68-.4H26.16l-2.33-3.52a1 1 0 0 0-1.6-.1z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcSystemNaturePark32', {
        defaultSize: 32
    });
    e.default = v
}), "067f0e", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        l = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, l, c = {}) {
        const {
            defaultSize: f = 32,
            hasStaticColor: h = !1
        } = c;

        function y({
            color: l = "currentColor",
            size: c = f,
            ...y
        }) {
            const p = (0, u.default)(c),
                v = (0, o.useMemo)((() => ({
                    display: 'block',
                    height: p,
                    width: p,
                    fill: h ? void 0 : l
                })), [l, p]);
            return (0, n.jsx)(s.default, {
                styles: v,
                Glyph: t,
                ...y
            })
        }
        return y.displayName = l, y
    };
    var o = l(r(d[2])),
        u = t(r(d[3])),
        s = t(r(d[4])),
        n = r(d[5])
}), "c65865", ["ba7a76", "45f788", "07aa1f", "c94c40", "afeb99", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n) {
        if ('string' == typeof n && t.test(n)) return Number(n);
        return n
    };
    const t = /^\d+$/
}), "c94c40", []);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/dls-icons/components/IcSystemNaturePark32.9e3505d95f.js.map