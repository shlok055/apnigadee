__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const o = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M2.05 6.3 4 8.23V25a3 3 0 0 0 2.82 3h16.94l1.95 1.95c-.16.02-.33.04-.5.04L25 30H7a5 5 0 0 1-5-4.78V7c0-.24.02-.48.05-.7zm1.66-4 26 26-1.42 1.4-26-26 1.42-1.4zM25 2a5 5 0 0 1 5 4.78V25a5 5 0 0 1-.05.7L28 23.77V7a3 3 0 0 0-2.82-3H8.24L6.3 2.05c.16-.02.33-.04.5-.04L7 2h18zM11.1 17a5 5 0 0 0 3.9 3.9v2.03A7 7 0 0 1 9.07 17h2.03zm5.9 4.24 1.35 1.36a6.95 6.95 0 0 1-1.35.33v-1.69zM21.24 17h1.69c-.07.47-.18.92-.34 1.35L21.24 17zM17 9.07A7 7 0 0 1 22.93 15H20.9a5 5 0 0 0-3.9-3.9V9.07zm-7.6 4.58L10.76 15H9.07c.07-.47.18-.92.33-1.35zM15 9.07v1.69L13.65 9.4A6.95 6.95 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcSystemNoDetectorCo232', {
        defaultSize: 32
    });
    e.default = o
}), "c089a0", ["ba7a76", "c65865"]);
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
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/dls-icons/components/IcSystemNoDetectorCo232.290acc6241.js.map