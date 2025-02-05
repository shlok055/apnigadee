__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var s = t(r(d[1])),
        o = r(d[2]),
        n = r(d[3]),
        l = r(d[4]),
        u = t(r(d[5])),
        p = t(r(d[6]));
    e.default = ({
        location: t,
        match: c,
        loadQuery: f,
        previousLocation: h,
        previousPrepareProps: v,
        customPrepareNiobeData: _
    }) => {
        const {
            id: b
        } = c.params, {
            source_impression_id: y
        } = (0, u.default)(t.search), I = t.pathname.split(b)[0] === h ? .pathname.split(b)[0];
        if (v && I) return v;
        const P = Boolean(_.launchPdpUncaching),
            k = y || _.p3_impression_id || (0, l.generateId)();
        return {
            queryRef: f({
                query: s.default,
                variables: (0, o.getRequestVariables)({
                    location: t,
                    match: c,
                    p3ImpressionId: k
                }),
                deferrable: P
            }),
            skeletonQueryRef: f({
                query: p.default,
                variables: {
                    id: (0, n.createGlobalId)('DemandStayListing', c.params.id),
                    fetchImages: !1
                },
                skip: !P
            }),
            showDeferredSkeleton: P,
            isElvisListing: _.iconsSitarCheck === b,
            p3ImpressionId: k
        }
    }
}), "1d2725", ["ba7a76", "7096f2", "99b905", "56afe0", "eb5cb3", "a7c4ef", "27f4f9"]);
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
    }), e.default = function(t) {
        const {
            amenities: n
        } = (0, u.default)(t.search);
        if (null == n || !Array.isArray(n)) return null;
        return n.filter((t => t)).map((t => Number(t)))
    };
    var u = t(r(d[1]))
}), "35872a", ["ba7a76", "a7c4ef"]);
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        id: t,
        queryParams: o
    }) {
        const {
            confirmation_code: s,
            split_stays_uuid: n
        } = o;
        return {
            splitStaysId: n,
            stays: [{
                productId: t,
                confirmationCode: s
            }]
        }
    }
}), "874bf3", []);
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
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getRequestVariables = function({
        forSplitStays: t = !1,
        location: _,
        match: I,
        p3ImpressionId: y
    }) {
        const h = (0, l.createGlobalId)('StayListing', I.params.id),
            f = (0, n.default)(_.search),
            {
                adults: k,
                bypass_targetings: S,
                cancellation_policy_id: b,
                category_tag: v,
                cause_id: N,
                check_in: P,
                check_out: T,
                children: w,
                disaster_id: O,
                discountedGuestFeeVersion: B = null,
                federatedSearchId: E = null,
                federated_search_id: M = null,
                force_boost_unc_priority_message_type: U,
                guests: A,
                host_preview: C,
                infants: G,
                interactionType: R = null,
                mockId: V,
                omni_page_id: q,
                omni_version_id: x,
                original_check_in: D,
                original_check_out: F,
                pets: L,
                photoId: W = null,
                photo_id: j = null,
                preview: z,
                priceDropSource: H,
                private_booking: J,
                promotionUuid: K,
                rate_plan_id: Q,
                relaxed_amenity_ids: X,
                searchId: Y = null,
                staysBookingMigrationEnabled: Z = null,
                useNewSectionWrapperApi: $ = null
            } = f,
            ee = {
                adults: k || A || '1',
                amenityFilters: (0, p.default)(_),
                bypassTargetings: 'true' === S,
                categoryTag: v || null,
                causeId: N || null,
                children: w || null,
                disasterId: O || null,
                discountedGuestFeeVersion: Number(B) || null,
                displayExtensions: (0, u.default)(_),
                federatedSearchId: E || M,
                forceBoostPriorityMessageType: U || null,
                hostPreview: 'true' === C,
                infants: G || null,
                interactionType: R,
                layouts: ['SIDEBAR', 'SINGLE_COLUMN'],
                omniPageId: q,
                omniVersionId: x,
                pets: Number(L) || 0,
                pdpTypeOverride: (0, s.default)(_) || null,
                photoId: W || j,
                preview: 'true' === z,
                previousStateCheckIn: D || null,
                previousStateCheckOut: F || null,
                priceDropSource: H || null,
                privateBooking: 'true' === J,
                promotionUuid: K || null,
                relaxedAmenityIds: X || null,
                searchId: Y,
                selectedCancellationPolicyId: Number(b) || null,
                selectedRatePlanId: Number(Q) || null,
                splitStays: t ? (0, c.default)({
                    id: h,
                    queryParams: f
                }) : null,
                staysBookingMigrationEnabled: 'true' === Z,
                translateUgc: (0, o.getTranslateUgcParam)(_),
                useNewSectionWrapperApi: 'true' === $,
                sectionIds: null,
                checkIn: null,
                checkOut: null,
                p3ImpressionId: y
            };
        P && T && (ee.checkIn = P, ee.checkOut = T);
        return {
            id: h,
            pdpSectionsRequest: ee,
            ...V && {
                mockIdentifier: V
            }
        }
    };
    var n = t(r(d[1])),
        l = r(d[2]),
        o = r(d[3]),
        s = t(r(d[4])),
        u = t(r(d[5])),
        c = t(r(d[6])),
        p = t(r(d[7]))
}), "99b905", ["ba7a76", "a7c4ef", "56afe0", "5dafcf", "8ceb28", "7692ad", "874bf3", "35872a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, u) {
        return Object.entries(t).reduce(((t, [n, c]) => (u(c, n) && (t[n] = c), t)), {})
    }
}), "c97d21", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setImpressionId = e.resetImpressionId = e.generateId = e.default = void 0;
    var s = r(d[0]);
    let t;
    const n = () => `p3_${(0,s.computeBev)('P3')}`;
    e.generateId = n;
    const o = () => {
        t = n()
    };
    e.resetImpressionId = o;
    e.setImpressionId = s => {
        t = s
    }, o();
    e.default = () => t
}), "eb5cb3", ["b4aab0"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-stays-pdp-route/routes/PdpPlatformRoute.prepare.e7da9a4f58.js.map