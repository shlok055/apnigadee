__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = r(d[2]),
        o = (n(r(d[3])), r(d[4])),
        s = n(r(d[5])),
        c = r(d[6]),
        f = n(r(d[7])),
        u = n(r(d[8])),
        p = t(r(d[9])),
        C = n(r(d[10])),
        _ = r(d[11]);
    e.default = (0, f.default)((0, o.withStyles)((() => ({
        modalContent: {
            paddingBottom: c.FOOTER_HEIGHT
        },
        modalContent__fullScreen: {
            minHeight: '100vh'
        }
    }))))((function(t) {
        const n = (0, l.c)(15),
            {
                calendarSections: o,
                css: c,
                metadata: f,
                registryConfig: y,
                styles: T
            } = t,
            v = (0, p.default)() === p.FORM_FACTOR.COMPACT,
            h = f.pdpType,
            O = v && T.modalContent__fullScreen;
        let j, x, S, A, M;
        return n[0] !== c || n[1] !== T.modalContent || n[2] !== O ? (j = c(T.modalContent, O), n[0] = c, n[1] = T.modalContent, n[2] = O, n[3] = j) : j = n[3], n[4] === Symbol.for("react.memo_cache_sentinel") ? (x = [C.default], n[4] = x) : x = n[4], n[5] !== o || n[6] !== f || n[7] !== y ? (S = (0, _.jsx)(C.default.Provider, {
            value: "inDrawerModal",
            children: (0, _.jsx)(s.default, {
                identifier: "CALENDAR",
                sectionContainers: o,
                metadata: f,
                registryConfig: y,
                contextTypes: x
            })
        }), n[5] = o, n[6] = f, n[7] = y, n[8] = S) : S = n[8], n[9] !== j || n[10] !== S ? (A = (0, _.jsx)("div", { ...j,
            children: S
        }), n[9] = j, n[10] = S, n[11] = A) : A = n[11], n[12] !== f.pdpType || n[13] !== A ? (M = (0, _.jsx)(u.default, {
            pdpType: h,
            children: A
        }), n[12] = f.pdpType, n[13] = A, n[14] = M) : M = n[14], M
    }))
}), "2b072f", ["45f788", "ba7a76", "87eb11", "07aa1f", "e0b084", "79434d", "ce15a7", "5010f2", "211f05", "e0b071", "833685", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = r(d[0]);
    e.default = (0, t.createContext)(void 0)
}), "833685", ["07aa1f"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-stays-pdp-sections/subpages/Calendar/CalendarModalContent.c772640463.js.map