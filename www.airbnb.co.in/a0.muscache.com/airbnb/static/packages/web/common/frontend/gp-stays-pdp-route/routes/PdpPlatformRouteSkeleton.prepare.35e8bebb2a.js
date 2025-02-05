__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = r(d[1]),
        s = r(d[2]),
        u = t(r(d[3])),
        n = t(r(d[4])),
        o = t(r(d[5])),
        f = t(r(d[6]));
    e.default = ({
        match: t,
        location: c,
        loadQuery: p
    }) => ({
        queryRef: p({
            query: n.default,
            variables: {
                id: (0, l.createGlobalId)('StayListing', t.params.id),
                pdpSectionsRequest: {
                    layouts: ['SIDEBAR', 'SINGLE_COLUMN'],
                    pdpTypeOverride: (0, u.default)(c),
                    translateUgc: (0, s.getTranslateUgcParam)(c),
                    displayExtensions: (0, o.default)(c)
                }
            },
            skip: !1
        }),
        skeletonQueryRef: p({
            query: f.default,
            variables: {
                id: (0, l.createGlobalId)('DemandStayListing', t.params.id),
                fetchImages: !1
            },
            skip: !0
        })
    })
}), "0a58c7", ["ba7a76", "56afe0", "5dafcf", "8ceb28", "7096f2", "7692ad", "27f4f9"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var u = t(r(d[1]));
    const f = {
        document: void 0,
        getDocument: () => r(d[3])(d[2]).then(u.default).then((t => t.default)),
        name: 'PdpEarlyFlushMetadataV2Query',
        type: 'query',
        operationId: '6d5d03fe66eba083d1eba3f668eef4eab5375087e162f826cd22d5bea6bb75fb'
    };
    e.default = f
}), "27f4f9", ["ba7a76", "45f788", "2cfb91", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getTranslateUgcParam = function(t) {
        return s(t.search)
    }, e.setTranslateUgcParam = function(t) {
        if (!g.window) return;
        if ('function' != typeof g.window.history.replaceState) return;
        if ('UNDEFINED' === t) return;
        const s = (0, l.default)(),
            f = 'UNTRANSLATED' === t,
            h = (0, u.default)({ ...s,
                translate_ugc: String(f)
            }, n.default),
            {
                hash: p,
                pathname: w,
                search: _
            } = window.location,
            y = (0, o.default)({
                params: h,
                pathname: w,
                search: _
            }) + p;
        (0, c.getHistory)().replace(y)
    };
    var n = t(r(d[1])),
        u = t(r(d[2])),
        c = r(d[3]),
        l = t(r(d[4])),
        o = t(r(d[5]));

    function s(t) {
        const {
            translate_ugc: n
        } = (0, l.default)(t);
        return n ? 'true' === n : null
    }
}), "5dafcf", ["ba7a76", "88e3c5", "c97d21", "7934b6", "a7c4ef", "99d1d8"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var u = t(r(d[1]));
    const n = {
        document: void 0,
        getDocument: () => r(d[3])(d[2]).then(u.default).then((t => t.default)),
        name: 'StaysPdpSections',
        type: 'query',
        operationId: '6f2c582da19b486271d60c4b19e7bdd1147184662f1f4e9a83b08211a73d7343'
    };
    e.default = n
}), "7096f2", ["ba7a76", "45f788", "0b8924", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        const {
            display_extensions: u
        } = (0, n.default)(t.search);
        if (null == u || !Array.isArray(u)) return null;
        return u.map((t => 'MONTHLY_STAYS' === t.toUpperCase() ? 'MONTHLY_STAYS' : 'LR_REDIRECT' === t.toUpperCase() ? 'LR_REDIRECT' : 'DATED_LTS' === t.toUpperCase() ? 'DATED_LTS' : null))
    };
    var n = t(r(d[1]))
}), "7692ad", ["ba7a76", "a7c4ef"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return c(t.search)
    };
    var u = t(r(d[1]));

    function c(t) {
        const {
            pdp_type_override: c,
            tier_override: n
        } = (0, u.default)(t);
        if (n && '0' === n) return 'MARKETPLACE';
        switch (c) {
            case 'HOTEL':
            case 'hotel':
                return 'HOTEL';
            case 'LUXE':
            case 'luxe':
                return 'LUXE';
            case 'MARKETPLACE':
            case 'marketplace':
                return 'MARKETPLACE';
            default:
                return
        }
    }
}), "8ceb28", ["ba7a76", "a7c4ef"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, u) {
        return Object.entries(t).reduce(((t, [n, c]) => (u(c, n) && (t[n] = c), t)), {})
    }
}), "c97d21", []);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-stays-pdp-route/routes/PdpPlatformRouteSkeleton.prepare.8acf76f74a.js.map