__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const l = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"m31.47 10.12-15-8a1 1 0 0 0-.94 0l-15 8a1 1 0 0 0 0 1.76L4 13.73V23a1 1 0 0 0 .52.88l11 6a1 1 0 0 0 .96 0l11-6A1 1 0 0 0 28 23v-9.27l2-1.06V23h2V11a1 1 0 0 0-.53-.88zM26 22.4l-10 5.45-10-5.45V14.8l9.53 5.08a1 1 0 0 0 .94 0L26 14.8v7.6zm-10-4.54L3.12 11 16 4.13 28.88 11 16 17.87z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcSystemMapsSchoolUniversity32', {
        defaultSize: 32
    });
    e.default = l
}), "2e3bb8", ["ba7a76", "c65865"]);
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
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/dls-icons/components/IcSystemMapsSchoolUniversity32.3fb9214074.js.map