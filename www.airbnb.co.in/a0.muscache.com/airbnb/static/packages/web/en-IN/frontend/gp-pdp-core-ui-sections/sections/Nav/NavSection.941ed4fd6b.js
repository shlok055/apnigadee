__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.ClientEventData = {
        defaultProps: {},
        propTypes: {}
    };
    t.fullyQualifiedName = 'Pdp.v5.ClientEventData';
    e.ClientEventDataEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "092541", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var E = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        targetSection: E,
        scrollId: _ = null,
        forSplitStays: O = !1
    }) {
        if (!E) return;
        const t = H(_, O),
            o = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
            I = E.getBoundingClientRect(),
            A = o + I.top - t;
        (0, T.default)(E), window.scrollTo(0, o), window.scrollTo({
            left: 0,
            top: A,
            behavior: 'smooth'
        })
    };
    var T = E(r(d[1])),
        _ = r(d[2]),
        O = r(d[3]);
    const t = _.NAV_HEIGHT - 1,
        o = 2 * _.NAV_HEIGHT - 1,
        I = {
            AMENITIES_DEFAULT: t,
            BOOK_IT_SIDEBAR: t + O.SIDEBAR_MARGIN_TOP,
            HERO_DEFAULT: 112,
            HERO_HOTEL: 112,
            HERO_LUXE: 112,
            HERO_PLUS: 112,
            HOST_PROFILE_DEFAULT: t,
            HOST_PROFILE_DESKTOP: t,
            LOCATION_DEFAULT: t,
            MEET_YOUR_HOST: t,
            REVIEWS_DEFAULT: t,
            REVIEWS_EMPTY_DEFAULT: t,
            TITLE_DEFAULT: -5
        },
        A = {
            AMENITIES_DEFAULT: o,
            BOOK_IT_SIDEBAR: o + O.SIDEBAR_MARGIN_TOP,
            HERO_DEFAULT: _.NAV_HEIGHT + 86,
            HERO_HOTEL: _.NAV_HEIGHT + 86,
            HERO_LUXE: _.NAV_HEIGHT + 86,
            HERO_PLUS: _.NAV_HEIGHT + 86,
            HOST_PROFILE_DEFAULT: o,
            HOST_PROFILE_DESKTOP: o,
            LOCATION_DEFAULT: o,
            MEET_YOUR_HOST: o,
            REVIEWS_DEFAULT: o,
            REVIEWS_EMPTY_DEFAULT: o,
            TITLE_DEFAULT: -5
        };

    function H(E, T) {
        if (!E) return 0;
        return (T ? A[E] : I[E]) || 0
    }
}), "2b486f", ["ba7a76", "76a68d", "47ac93", "d6f4a0"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function c() {
        const s = t(r(d[1]));
        return c = function() {
            return s
        }, s
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getSearchContext = function() {
        const t = c().default.parse((document.referrer || '').replace(/.*?\?/, '')),
            s = t.check_in || t.check_out ? [t.check_in, t.check_out] : void 0,
            o = t.guests ? Number.parseInt(t.guests, 10) : void 0;
        return {
            search_id: t.s_tag || '',
            mobile_search_session_id: '',
            location: t.location,
            dates: s,
            guests: o
        }
    }, e.getSearchContextFromRoute = function(t) {
        const s = c().default.parse((t || '').replace(/.*?\?/, '')),
            o = s.check_in || s.check_out ? [s.check_in, s.check_out] : void 0,
            n = s.guests ? Number.parseInt(s.guests, 10) : void 0;
        return {
            search_id: s.searchId || '',
            mobile_search_session_id: '',
            federated_search_id: s.federatedSearchId || '',
            section_id: s.sectionId || '',
            location: s.location,
            dates: o,
            guests: n
        }
    }
}), "3e4da9", ["ba7a76", "e950a3"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;

    function t() {
        const n = r(d[1]);
        return t = function() {
            return n
        }, n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = p, e.getClientLoggingEventDataForManualLogging = function(n, t, o) {
        const u = p(n, t);
        if (!u) return null;
        const {
            product_id: c,
            pdp_type: s
        } = o || {};
        return u.eventData = { ...u.eventData,
            pdp_type: s,
            product_id: c
        }, u
    }, e.getClientLoggingEventDataForUniversalPageImpression = function(n) {
        const {
            search: t,
            ...c
        } = n;
        return { ...c,
            pdp_impression_id: (0, u.default)(),
            search_context: n.search ? (0, o.getSearchContextFromRoute)(n.search) : void 0
        }
    }, e.getClientLoggingEventDataViaduct = function(n, p) {
        if (!n) return null;
        const {
            loggingId: l
        } = n;
        if (!l) return null;
        return {
            componentName: s(n),
            loggingID: l,
            eventDataSchema: t().ClientEventData,
            eventData: {
                component: s(n),
                pdp_impression_id: (0, u.default)(),
                search_context: (0, o.getSearchContext)(),
                pdp_context: n.eventData ? .pdpContext || p ? c({ ...n.eventData ? .pdpContext,
                    ...p
                }) : void 0
            }
        }
    }, e.transformClientLoggingData = function(n) {
        const {
            experiences_data: t,
            stays_data: o
        } = n;
        return { ...n,
            pdp_impression_id: (0, u.default)(),
            experiences_data: t ? l(t) : null,
            stays_data: o ? _(o) : null
        }
    };
    var o = r(d[2]),
        u = n(r(d[3]));

    function c(n) {
        return n ? (Object.keys(n).forEach((t => {
            'object' == typeof n[t] && (n[t] = JSON.stringify(n[t]))
        })), n) : n
    }

    function s(n) {
        const t = n.component;
        return n ? .loggingId || t || void 0
    }

    function p(n, p) {
        if (!n) return null;
        const {
            loggingId: l
        } = n;
        return l ? {
            componentName: s(n),
            loggingID: l,
            eventDataSchema: t().ClientEventData,
            eventData: {
                pdp_impression_id: (0, u.default)(),
                section: n.section || void 0,
                component: s(n),
                search_context: (0, o.getSearchContext)(),
                pdp_context: c(p)
            }
        } : null
    }

    function l(n) {
        const {
            num_adults: t,
            num_children: o,
            num_infants: u
        } = n;
        return { ...n,
            num_adults: t ? parseInt(t, 10) : void 0,
            num_children: o ? parseInt(o, 10) : void 0,
            num_infants: u ? parseInt(u, 10) : void 0
        }
    }

    function _(n) {
        const {
            num_adults: t,
            num_children: o,
            num_infants: u
        } = n;
        return { ...n,
            num_adults: t ? parseInt(t, 10) : void 0,
            num_children: o ? parseInt(o, 10) : void 0,
            num_infants: u ? parseInt(u, 10) : void 0
        }
    }
}), "45d996", ["ba7a76", "092541", "3e4da9", "eb5cb3"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.NAV_LOGO_HEIGHT = e.NAV_ITEM_SPACING = e.NAV_HEIGHT = e.IN_VIEW_THRESHOLD = void 0;
    e.NAV_HEIGHT = 80, e.NAV_ITEM_SPACING = 24, e.NAV_LOGO_HEIGHT = 32, e.IN_VIEW_THRESHOLD = [0, .99, 1]
}), "47ac93", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        expectedFields: t,
        response: o
    }) {
        let l = `Expected non-null ${t.join(', ')}.`;
        o && (l += `\nGot ${JSON.stringify(o,null,2)}`);
        const u = new Error(l);
        return (0, n.reportError)(u), null
    };
    var n = r(d[0])
}), "5daffb", ["f2f40f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.pressableCssFragments = void 0;
    r(d[0]), r(d[1]), r(d[2]);
    e.pressableCssFragments = {
        component: "\n    background: transparent;\n    border: none;\n    border-radius: 0;\n    color: inherit;\n    display: block;\n    margin: 0;\n    /* stylelint-disable declaration-block-no-shorthand-property-overrides */\n    padding: 0;\n    /* stylelint-enable declaration-block-no-shorthand-property-overrides */\n    text-align: inherit;\n    text-decoration: none;\n    height: 100%;\n    width: 100%;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n    font-weight: inherit;\n\n    /* stylelint-disable declaration-block-no-shorthand-property-overrides */\n    outline: none;   &::-moz-focus-inner {     border: none;     padding: 0;     margin: 0;   }   &:focus::-moz-focus-inner {     border: none;   }   &:-moz-focusring {     outline: none;   }\n    /* stylelint-enable declaration-block-no-shorthand-property-overrides */\n    \n    :focus-visible {                   @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {       transition: none;     }     transition: box-shadow 0.2s var(--linaria-theme_motion-standard-curve-animation-timing-function);             }     @supports not selector(:focus-visible) {       :focus {                     @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {       transition: none;     }     transition: box-shadow 0.2s var(--linaria-theme_motion-standard-curve-animation-timing-function);               }     }\n\n       \n\n    &:active {\n      transform: none;\n    }\n  "
    }
}), "8bb5e6", ["2d8af3", "4786a8", "aabdb1"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = r(d[1]),
        o = t(r(d[2])),
        l = r(d[3]),
        s = t(r(d[4])),
        c = t(r(d[5])),
        u = t(r(d[6])),
        p = t(r(d[7])),
        f = r(d[8]),
        h = r(d[9]),
        y = t(r(d[10])),
        v = r(d[11]),
        b = r(d[12]);

    function S(t, n) {
        const o = document.querySelector(`div[data-plugin-in-point-id=${t}]`) || document.querySelector(`div[data-section-id=${t}]`);
        o && (0, y.default)({
            forSplitStays: n,
            targetSection: o,
            scrollId: t
        })
    }
    e.default = (0, l.withStyles)((({
        dls19: t
    }) => ({
        itemContainer: {
            display: 'inline-block',
            marginRight: f.NAV_ITEM_SPACING
        },
        item: {
            color: t.palette.hof,
            fontWeight: t.typography.weight.medium,
            padding: 3.75 * t.spacing.primitives.baseUnit + "px 0",
            display: 'inline-block',
            textDecoration: 'none',
            position: 'relative',
            ':after': {
                backgroundColor: t.palette.hof,
                content: '""',
                display: 'block',
                bottom: 0,
                height: .5 * t.spacing.primitives.baseUnit,
                opacity: 0,
                position: 'absolute',
                transition: 'opacity 0.15s ease',
                width: '100%'
            },
            ':hover': {
                ':after': {
                    opacity: 1
                }
            }
        },
        count: { ...(0, u.default)(t).smallText,
            marginLeft: .5 * t.spacing.primitives.baseUnit
        }
    })))(o.default.memo((function(t) {
        const o = (0, n.c)(29),
            {
                css: l,
                styles: u,
                item: f,
                item: y
            } = t,
            {
                id: x,
                scrollId: C,
                title: I,
                count: _,
                loggingEventData: j
            } = y,
            [k] = (0, h.useUIState)(v.ForSplitStays);
        if (!x || !I || !C) {
            let t;
            return o[0] !== f ? (t = (0, p.default)({
                expectedFields: ["id", "scrollId", "title"],
                response: f
            }), o[0] = f, o[1] = t) : t = o[1], t
        }
        let U, w, P, q, A, D, E, F;
        return o[2] !== l || o[3] !== u.itemContainer ? (U = l(u.itemContainer), o[2] = l, o[3] = u.itemContainer, o[4] = U) : U = o[4], o[5] !== k || o[6] !== C ? (w = () => S(C, k), o[5] = k, o[6] = C, o[7] = w) : w = o[7], o[8] !== j ? (P = (0, c.default)(j), o[8] = j, o[9] = P) : P = o[9], o[10] !== l || o[11] !== u.item ? (q = l(u.item), o[10] = l, o[11] = u.item, o[12] = q) : q = o[12], o[13] !== _ || o[14] !== l || o[15] !== u.count ? (A = _ && (0, b.jsxs)("span", { ...l(u.count),
            children: ["(", _, ")"]
        }), o[13] = _, o[14] = l, o[15] = u.count, o[16] = A) : A = o[16], o[17] !== q || o[18] !== A || o[19] !== I ? (D = (0, b.jsxs)("div", { ...q,
            children: [I, A]
        }), o[17] = q, o[18] = A, o[19] = I, o[20] = D) : D = o[20], o[21] !== w || o[22] !== P || o[23] !== D ? (E = (0, b.jsx)(s.default, {
            onPress: w,
            ...P,
            children: D
        }), o[21] = w, o[22] = P, o[23] = D, o[24] = E) : E = o[24], o[25] !== x || o[26] !== U || o[27] !== E ? (F = (0, b.jsx)("div", { ...U,
            children: E
        }, x), o[25] = x, o[26] = U, o[27] = E, o[28] = F) : F = o[28], F
    })))
}), "aa78aa", ["ba7a76", "87eb11", "07aa1f", "e0b084", "c0c06c", "45d996", "ad1abc", "5daffb", "47ac93", "afdc80", "2b486f", "d7c0b4", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var _ = r(d[0]),
        t = r(d[1]),
        f = (r(d[2]), r(d[3])),
        s = r(d[4]),
        o = r(d[5]),
        l = r(d[6]),
        y = r(d[7]);
    const c = (0, f.mergeStyles)(o.baseButtonCssFragments, l.dls19CssFragments, y.pressableCssFragments, {
        component: "\n      border-radius: var(--linaria-theme_corner-radius-small8px-border-radius);\n    "
    });
    (0, t.cssFragmentsObjToStylesFn)(c);
    e.default = (0, s.createVariant)(_.BaseButtonOrAnchor, {
        base: "b1isyb64 atm_9j_tlke0l atm_9s_1o8liyq atm_gi_idpfg4 atm_mk_h2mmj6 atm_r3_1h6ojuz atm_rd_glywfm atm_3f_uuagnh atm_70_5j5alw atm_vy_1wugsn5 atm_l8_1cudcw5 atm_26_d0eyo3 atm_7l_jt7fhx atm_c8_dlk8xv atm_bx_1kw7nm4 atm_tl_1gw4zv3 atm_9j_13gfvf7_1o5j5ji atm_k4_si67jz_1o5j5ji",
        component: "cpy18wl atm_bx_48h72j atm_c8_2x1prs atm_g3_1jbyh58 atm_fr_11a07z3 atm_cs_10d11i2 atm_5j_t09oo2 atm_kd_glywfm atm_uc_1lizyuv atm_r2_1j28jx2 atm_26_1j28jx2 atm_3f_glywfm atm_5j_idpfg4 atm_7l_1kw7nm4 atm_9s_1ulexfb atm_gi_idpfg4 atm_l8_idpfg4 atm_r3_1kw7nm4 atm_rd_glywfm atm_e2_1osqo2v atm_vy_1osqo2v atm_bx_1kw7nm4 atm_c8_1kw7nm4 atm_g3_1kw7nm4 atm_cs_1kw7nm4 atm_kd_glywfm atm_5j_t09oo2 atm_uc_glywfm__1rrf6b5 atm_kd_glywfm_1w3cfyq atm_uc_aaiy6o_1w3cfyq atm_70_1b8lkes_1w3cfyq atm_3f_glywfm_e4a3ld atm_l8_idpfg4_e4a3ld atm_gi_idpfg4_e4a3ld atm_3f_glywfm_1r4qscq atm_kd_glywfm_6y7yyg atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_kd_glywfm_pfnrn2_1oszvuo atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_1b8lkes_pfnrn2_1oszvuo atm_3f_glywfm_1icshfk_1oszvuo atm_l8_idpfg4_1icshfk_1oszvuo atm_gi_idpfg4_1icshfk_1oszvuo atm_3f_glywfm_b5gff8_1oszvuo atm_kd_glywfm_2by9w9_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_tr_18md41p_csw3t1 atm_k4_kb7nvz_1o5j5ji atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_uc_aaiy6o_1w3cfyq atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_uc_aaiy6o_pfnrn2_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_tr_glywfm_csw3t1",
        fullWidth: "fl382kx atm_vy_1osqo2v",
        showOnlyOnKeyboardFocus: "s143z4ij atm_3f_idpfg4_1r63tcj atm_7h_hxbz6r_1r63tcj atm_7i_ysn8ba_1r63tcj atm_e2_t94yts_1r63tcj atm_ks_15vqwwr_1r63tcj atm_ks_zryt35_1r63tcj atm_l8_idpfg4_1r63tcj atm_mk_stnw88_1r63tcj atm_vv_1q9ccgz_1r63tcj atm_vy_t94yts_1r63tcj"
    })
}), "c0c06c", ["60c631", "2d8af3", "4786a8", "aabdb1", "92749c", "ee5719", "c642d5", "8bb5e6"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SIDEBAR_MARGIN_TOP = e.PREAPPROVAL = void 0;
    e.SIDEBAR_MARGIN_TOP = 24, e.PREAPPROVAL = 'preapproval'
}), "d6f4a0", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = r(d[2]),
        o = n(r(d[3])),
        s = n(r(d[4])),
        u = r(d[5]),
        c = n(r(d[6]));

    function v() {
        const t = r(d[7]);
        return v = function() {
            return t
        }, t
    }
    var f = t(r(d[8])),
        h = n(r(d[9])),
        p = n(r(d[10])),
        I = r(d[11]),
        _ = n(r(d[12])),
        N = n(r(d[13])),
        x = r(d[14]);

    function j(t, n) {
        return (0, x.jsx)(_.default, {
            item: t
        }, t.id || n)
    }
    e.default = (0, c.default)((0, u.withStyles)((({
        dls19: t
    }) => ({
        container: { ...(0, h.default)(t).subtitleMutedTall,
            [t.responsive.queries.mediumAndAbove]: {
                whiteSpace: 'nowrap',
                overflow: 'hidden'
            }
        },
        loadingNav: {
            height: `${I.NAV_HEIGHT}px`
        },
        logo: {
            display: 'inline-block',
            marginRight: I.NAV_ITEM_SPACING,
            verticalAlign: 'middle'
        },
        navItemsContainer: {
            display: 'inline-block',
            whiteSpace: 'nowrap'
        }
    }))))(o.default.memo((function(t) {
        const n = (0, l.c)(27),
            {
                css: o,
                metadata: u,
                section: c,
                styles: h,
                platformNetworkStatus: _
            } = t,
            {
                navItems: w,
                logo: A
            } = c,
            b = (0, f.default)() === f.FORM_FACTOR.WIDE;
        if (!u || _ === v().NetworkStatus.loading) {
            let t, l;
            return n[0] !== o || n[1] !== h.loadingNav ? (t = o(h.loadingNav), n[0] = o, n[1] = h.loadingNav, n[2] = t) : t = n[2], n[3] !== t ? (l = (0, x.jsx)("div", { ...t
            }), n[3] = t, n[4] = l) : l = n[4], l
        }
        if (!w) {
            let t;
            return n[5] !== c ? (t = (0, p.default)({
                expectedFields: ["navItems"],
                response: c
            }), n[5] = c, n[6] = t) : t = n[6], t
        }
        let C, S, y, O, T, k;
        return n[7] !== o || n[8] !== h.container ? (C = o(h.container), n[7] = o, n[8] = h.container, n[9] = C) : C = n[9], n[10] !== o || n[11] !== b || n[12] !== A || n[13] !== h.logo ? (S = A && b && (0, x.jsx)("div", { ...o(h.logo),
            children: (0, x.jsx)("a", {
                href: "/",
                "aria-label": s.default.t("simple_nav.header.homepage"),
                children: (0, x.jsx)(N.default, {
                    logo: A,
                    height: I.NAV_LOGO_HEIGHT
                })
            })
        }), n[10] = o, n[11] = b, n[12] = A, n[13] = h.logo, n[14] = S) : S = n[14], n[15] !== o || n[16] !== h.navItemsContainer ? (y = o(h.navItemsContainer), n[15] = o, n[16] = h.navItemsContainer, n[17] = y) : y = n[17], n[18] !== w ? (O = w.map(j), n[18] = w, n[19] = O) : O = n[19], n[20] !== y || n[21] !== O ? (T = (0, x.jsx)("div", { ...y,
            children: O
        }), n[20] = y, n[21] = O, n[22] = T) : T = n[22], n[23] !== C || n[24] !== S || n[25] !== T ? (k = (0, x.jsxs)("div", { ...C,
            children: [S, T]
        }), n[23] = C, n[24] = S, n[25] = T, n[26] = k) : k = n[26], k
    })))
}), "df329a", ["45f788", "ba7a76", "87eb11", "07aa1f", "a9f4b1", "e0b084", "5010f2", "068abc", "e0b071", "ad1abc", "5daffb", "47ac93", "aa78aa", "e6151e", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        c = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        var c = (0, u.useSignals)(1);
        try {
            const c = (0, s.c)(13),
                {
                    accessibilityLabel: l,
                    height: f,
                    logo: u
                } = t,
                j = void 0 === f ? 0 : f;
            let v;
            if (c[0] !== u) {
                e: switch (u) {
                    case "PLUS":
                        v = o;
                        break e;
                    case "LUXE":
                        v = b;
                        break e;
                    case "OLYMPICS":
                        v = L;
                        break e;
                    case "PARALYMPICS":
                        v = p;
                        break e;
                    case "TOKYO_2020_OLYMPICS":
                        v = O;
                        break e;
                    case "TOKYO_2020_PARALYMPICS":
                        v = P;
                        break e;
                    case "AIRBNB_OLYMPICS_PARALYMPICS_PARTNERSHIP":
                        v = _;
                        break e;
                    default:
                        v = void 0
                }
                c[0] = u,
                c[1] = v
            }
            else v = c[1];
            const S = v,
                A = v;
            let I;
            c[2] !== S || c[3] !== A.value ? (I = () => v ? v.value : null, c[2] = S, c[3] = A.value, c[4] = I) : I = c[4];
            const [Y, k] = (0, n.useState)(I), z = v;
            let M, y;
            if (c[5] !== z ? (M = () => {
                    v && v().then((t => {
                        k((() => t))
                    }))
                }, c[5] = z, c[6] = M) : M = c[6], (0, n.useEffect)(M), !v) return null;
            if (Y) {
                let t;
                return c[7] !== Y || c[8] !== l || c[9] !== j ? (t = (0, h.jsx)(Y, {
                    accessibilityLabel: l,
                    height: j
                }), c[7] = Y, c[8] = l, c[9] = j, c[10] = t) : t = c[10], t
            }
            return c[11] !== j ? (y = (0, h.jsx)("div", {
                style: {
                    height: j
                }
            }), c[11] = j, c[12] = y) : y = c[12], y
        } finally {
            c.f()
        }
    };
    var l = c(r(d[0])),
        s = r(d[2]),
        n = t(r(d[3])),
        f = r(d[4]),
        h = (r(d[5]), r(d[6])),
        u = r(d[7]);
    const o = Object.assign((0, f.normalizeLoader)((() => r(d[9])(d[8]).then(l.default))), {
            prefetch: () => r(d[9]).prefetch(d[8])
        }),
        b = Object.assign((0, f.normalizeLoader)((() => r(d[9])(d[10]).then(l.default))), {
            prefetch: () => r(d[9]).prefetch(d[10])
        }),
        L = Object.assign((0, f.normalizeLoader)((() => r(d[9])(d[11]).then(l.default))), {
            prefetch: () => r(d[9]).prefetch(d[11])
        }),
        p = Object.assign((0, f.normalizeLoader)((() => r(d[9])(d[12]).then(l.default))), {
            prefetch: () => r(d[9]).prefetch(d[12])
        }),
        O = Object.assign((0, f.normalizeLoader)((() => r(d[9])(d[13]).then(l.default))), {
            prefetch: () => r(d[9]).prefetch(d[13])
        }),
        P = Object.assign((0, f.normalizeLoader)((() => r(d[9])(d[14]).then(l.default))), {
            prefetch: () => r(d[9]).prefetch(d[14])
        }),
        _ = Object.assign((0, f.normalizeLoader)((() => r(d[9])(d[15]).then(l.default))), {
            prefetch: () => r(d[9]).prefetch(d[15])
        })
}), "e6151e", ["45f788", "ba7a76", "87eb11", "07aa1f", "018c3b", "09d809", "b8c07d", "e086eb", "54c3a0", "057569", "9e80b0", "9e84ae", "e38eb4", "dfb252", "75b7f7", "3aca11"]);
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
__r("a9f4b1").extend({
    "simple_nav.header.homepage": "Airbnb homepage"
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-pdp-core-ui-sections/sections/Nav/NavSection.f689ce7159.js.map