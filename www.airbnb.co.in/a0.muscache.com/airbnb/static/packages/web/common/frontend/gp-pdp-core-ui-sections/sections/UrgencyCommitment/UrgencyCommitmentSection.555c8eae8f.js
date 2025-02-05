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
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        const h = (0, o.c)(12),
            {
                section: v
            } = t,
            {
                inlineTitle: _,
                messageData: f,
                rightIcon: b,
                hasBottomDivider: D,
                shouldShowN8UI: x
            } = v,
            I = (0, n.useCx)(),
            j = "compact" === (0, s.default)(),
            p = j && u.container,
            N = j && D && u.bottomDivider;
        let k;
        h[0] !== I || h[1] !== p || h[2] !== N ? (k = I(p, N), h[0] = I, h[1] = p, h[2] = N, h[3] = k) : k = h[3];
        const w = !!_,
            S = !!b,
            T = !!x;
        let U, y;
        h[4] !== f || h[5] !== w || h[6] !== S || h[7] !== T ? (U = (0, l.jsx)(c.default, {
            inlineTitle: w,
            messageData: f,
            rightIcon: S,
            shouldShowN8UI: T
        }), h[4] = f, h[5] = w, h[6] = S, h[7] = T, h[8] = U) : U = h[8];
        h[9] !== k || h[10] !== U ? (y = (0, l.jsx)("div", {
            className: k,
            children: U
        }), h[9] = k, h[10] = U, h[11] = y) : y = h[11];
        return y
    };
    var o = r(d[1]),
        n = (t(r(d[2])), r(d[3]), r(d[4])),
        s = t(r(d[5])),
        c = t(r(d[6])),
        l = r(d[7]);
    const u = {
        container: "c5ts7k3 atm_l8_1uocmb0",
        bottomDivider: "b48zxkp atm_40_1vlbu9m"
    }
}), "0e5879", ["ba7a76", "87eb11", "07aa1f", "ea4b89", "4786a8", "e0b071", "f97a90", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        if (!g.window) return;
        if ('function' != typeof g.window.history.replaceState) return;
        const u = (0, n.default)(),
            k = u.check_in !== t.checkIn || u.check_out !== t.checkOut,
            {
                checkIn: s,
                checkOut: _,
                guests: f,
                guestDetails: h,
                isPrivateBooking: v,
                isPrivateBookingOnlyMode: p,
                isWorkTrip: y,
                selectedCancellationPolicyId: P,
                selectedRatePlanId: w,
                startDate: D,
                endDate: I,
                checkin: O,
                checkout: b
            } = t,
            B = (0, o.default)({ ...u,
                check_in: s,
                check_out: _,
                startDate: D,
                endDate: I,
                checkin: O,
                checkout: b,
                guests: f,
                ...h,
                cancellation_policy_id: !k && s && _ ? P : void 0,
                rate_plan_id: k ? void 0 : w,
                roomId: void 0,
                work_trip: y,
                private_booking: v,
                experience_private_booking_only: p,
                experiencePrivateBookingOnly: void 0
            }, c.default);
        (0, l.default)(B)
    };
    var c = t(r(d[1])),
        o = t(r(d[2])),
        n = t(r(d[3])),
        l = t(r(d[4]))
}), "1c7c30", ["ba7a76", "88e3c5", "c97d21", "a7c4ef", "f78bd7"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "e0a2b02fa7d1e956cd4135847fc0cda1",
        name: "icon-uc-alarm",
        type: "gif"
    })
}), "1db39d", ["64c00a"]);
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
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 208,
        height: 217,
        scales: [1],
        hash: "008d8bfe23251d4b471b85e84d1e70c4",
        name: "icon-education-interior",
        type: "gif"
    })
}), "357407", ["64c00a"]);
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.textLinkStyles = e.textLinkCssFragments = e.default = void 0;
    var t = r(d[0]),
        n = r(d[1]),
        _ = (r(d[2]), r(d[3])),
        o = (r(d[4]), r(d[5])),
        s = r(d[6]);
    const l = e.textLinkCssFragments = (0, _.mergeStyles)(o.baseAnchorCssFragments, {
            component: "\n    appearance: none;     background: transparent;     border: 0;     cursor: pointer;     margin: 0;     padding: 0;     user-select: auto;     &:disabled {       cursor: not-allowed;            @media (hover: hover) {       &:hover {                  text-decoration: none;              }     }        }\n    color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */\n    text-decoration: underline;\n    border-radius: var(--linaria-theme_corner-radius-tiny4px-border-radius);\n    font-weight: var(--linaria-theme_typography-weight-medium500);\n    text-align: inherit;\n\n    /* 'postion' is added to render the boxShadow correctly in Safari browser */\n    position: relative;\n\n    &:visited {\n      color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */\n      text-decoration: underline;\n    }\n    @media (hover: hover) {       &:hover {                color: var(--linaria-theme_palette-text-primary-hover); /* migrated from theme.palette.black */       text-decoration: underline;       /* we can remove this once all variants using these styles are migrated to Linaria       * this is here because RWS does not respect the ordering of keys in the        * backwards-compatible object, so we try to re-override hover styles       */       &:disabled {         color: var(--linaria-theme_palette-text-primary-disabled); /* migrated from theme.palette.deco */         text-decoration: underline;       }       &:disabled:hover {         text-decoration: underline;       }            }     }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n       \n\n    &:active {\n      color: var(--linaria-theme_palette-text-secondary); /* migrated from theme.palette.foggy */\n      text-decoration: underline;\n    }\n    outline: none;   &::-moz-focus-inner {     border: none;     padding: 0;     margin: 0;   }   &:focus::-moz-focus-inner {     border: none;   }   &:-moz-focusring {     outline: none;   }\n\n    :focus-visible {              color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */       text-decoration: underline;            @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {       transition: none;     }     transition: box-shadow 0.2s var(--linaria-theme_motion-standard-curve-animation-timing-function);          box-shadow: 0 0 0 2px rgb(255,255,255), 0 0 0 4px var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */          }     @supports not selector(:focus-visible) {       :focus {                color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */       text-decoration: underline;            @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {       transition: none;     }     transition: box-shadow 0.2s var(--linaria-theme_motion-standard-curve-animation-timing-function);          box-shadow: 0 0 0 2px rgb(255,255,255), 0 0 0 4px var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */            }     }\n\n\n\n\n\n\n       \n\n    &:disabled {\n      color: var(--linaria-theme_palette-text-primary-disabled); /* migrated from theme.palette.deco */\n      text-decoration: underline;\n    }\n\n    &:disabled:hover {\n      text-decoration: underline;\n    }\n  "
        }),
        c = (e.textLinkStyles = (0, n.cssFragmentsObjToStylesFn)(l), (0, s.createVariant)(t.BaseButtonOrAnchor, {
            base: "b1uxatsa atm_c8_1kw7nm4 atm_bx_1kw7nm4 atm_cs_1kw7nm4 atm_cd_1kw7nm4 atm_ci_1kw7nm4 atm_g3_1kw7nm4 atm_7l_1kw7nm4 atm_rd_8stvzk atm_9j_tlke0l_1nos8r_uv4tnr atm_7l_1kw7nm4_1nos8r_uv4tnr atm_rd_8stvzk_1nos8r_uv4tnr atm_7l_1kw7nm4_pfnrn2 atm_rd_8stvzk_pfnrn2",
            fullWidth: "fzd8srm atm_vy_1osqo2v atm_9s_1ulexfb",
            showOnlyOnKeyboardFocus: "s8bhioi atm_3f_idpfg4_1r63tcj atm_7h_hxbz6r_1r63tcj atm_7i_ysn8ba_1r63tcj atm_e2_t94yts_1r63tcj atm_ks_15vqwwr_1r63tcj atm_ks_zryt35_1r63tcj atm_l8_idpfg4_1r63tcj atm_mk_stnw88_1r63tcj atm_vv_1q9ccgz_1r63tcj atm_vy_t94yts_1r63tcj",
            component: "c1qih7tm atm_1s_glywfm atm_26_1j28jx2 atm_3f_idpfg4 atm_9j_tlke0l atm_gi_idpfg4 atm_l8_idpfg4 atm_vb_1wugsn5 atm_7l_jt7fhx atm_rd_8stvzk atm_5j_1896hn4 atm_cs_10d11i2 atm_r3_1kw7nm4 atm_mk_h2mmj6 atm_kd_glywfm atm_9j_13gfvf7_1o5j5ji atm_rd_glywfm_1mj13j2_uv4tnr atm_7l_jt7fhx_v5whe7 atm_rd_8stvzk_v5whe7 atm_7l_177r58q_1nos8r_uv4tnr atm_rd_8stvzk_1nos8r_uv4tnr atm_7l_9vytuy_4fughm_uv4tnr atm_rd_8stvzk_4fughm_uv4tnr atm_rd_8stvzk_xggcrc_uv4tnr atm_7l_1he744i_csw3t1 atm_rd_8stvzk_csw3t1 atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_jt7fhx_1w3cfyq atm_rd_8stvzk_1w3cfyq atm_uc_aaiy6o_1w3cfyq atm_70_1p56tq7_1w3cfyq atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_7l_jt7fhx_pfnrn2_1oszvuo atm_rd_8stvzk_pfnrn2_1oszvuo atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_1p56tq7_pfnrn2_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_7l_9vytuy_1o5j5ji atm_rd_8stvzk_1o5j5ji atm_rd_8stvzk_1mj13j2"
        }));
    c.displayName = 'TextLink';
    e.default = c
}), "3e8391", ["60c631", "2d8af3", "4786a8", "aabdb1", "0d3432", "4cb147", "92749c"]);
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
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 208,
        height: 208,
        scales: [1],
        hash: "0a2b440fc27eb517f87496130d942a17",
        name: "icon-education-handshake",
        type: "gif"
    })
}), "45ec96", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.NAV_LOGO_HEIGHT = e.NAV_ITEM_SPACING = e.NAV_HEIGHT = e.IN_VIEW_THRESHOLD = void 0;
    e.NAV_HEIGHT = 80, e.NAV_ITEM_SPACING = 24, e.NAV_LOGO_HEIGHT = 32, e.IN_VIEW_THRESHOLD = [0, .99, 1]
}), "47ac93", []);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "d7d7f37b7c50b8410cf87cb305dc9235",
        name: "icon-number-available-animated",
        type: "gif"
    })
}), "4dd987", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "aa64b87d3d63fdbe31789f21ef8f17c9",
        name: "icon-uc-eye",
        type: "gif"
    })
}), "5e278f", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    const t = /\.\.\/repo-cache\//;
    m.exports = {
        registerAsset({
            width: s,
            height: h,
            name: c,
            type: $,
            hash: n,
            httpServerLocation: o
        }) {
            const p = o.replace(t, '');
            return {
                src: p.startsWith('/') ? `${p}/${c}.${n}.${$}` : `//${p}/${c}.${n}.${$}`,
                width: s,
                height: h,
                type: $
            }
        }
    }
}), "64c00a", []);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "2ef54b4736b991669d24eb64c2463ceb",
        name: "icon-nightly-prices",
        type: "png"
    })
}), "7198d3", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 208,
        height: 208,
        scales: [1],
        hash: "45947cd14c1426679741627fe6ad50bf",
        name: "icon-education-home",
        type: "gif"
    })
}), "7bb691", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "aeb446c29f0971f556eb86c806b5214f",
        name: "icon-uc-donations-heart",
        type: "png"
    })
}), "8f1af0", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 192,
        height: 192,
        scales: [1],
        hash: "851711051e3bde1f9494d3326713b1ea",
        name: "icon-compact-alert-exclamation-circle",
        type: "png"
    })
}), "946757", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var c = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.UNC_ICON_IMAGE_URLS = void 0;
    var t = c(r(d[1])),
        n = c(r(d[2])),
        o = c(r(d[3])),
        u = c(r(d[4])),
        s = c(r(d[5])),
        l = c(r(d[6])),
        f = c(r(d[7])),
        p = c(r(d[8])),
        _ = c(r(d[9])),
        v = c(r(d[10])),
        b = c(r(d[11])),
        h = c(r(d[12])),
        y = c(r(d[13])),
        k = c(r(d[14])),
        w = c(r(d[15])),
        C = c(r(d[16])),
        I = c(r(d[17])),
        N = c(r(d[18])),
        U = c(r(d[19])),
        x = c(r(d[20])),
        M = c(r(d[21])),
        O = c(r(d[22]));
    e.UNC_ICON_IMAGE_URLS = {
        'icon-booking-probability-animated': f.default.src,
        'icon-book-with-confidence': k.default.src,
        icon_competing_views: n.default.src,
        'icon-competing-views-animated': n.default.src,
        'icon-custom-promotion-animated': v.default.src,
        'icon-donations-heart-background': p.default.src,
        'icon-event-detection-animated': o.default.src,
        'icon-expiring-early-bird-animated': b.default.src,
        'icon-good-price-animated': s.default.src,
        'icon-good-value-animated': l.default.src,
        'icon-host-rebooking-animated': _.default.src,
        'icon-long-term-stay-friendly-animated': h.default.src,
        'icon-occupancy-rate-animated': _.default.src,
        'icon-percentage-recommended-animated': u.default.src,
        'icon-price-drop-animated': s.default.src,
        'icon-recent-views-animated': u.default.src,
        'icon-smart-promotion-animated': t.default.src,
        'icon-canceled-night-promotion': y.default.src,
        'icon-listing-unavailable-animated': h.default.src,
        'icon-education-entire-home': N.default.src,
        'icon-education-private-room': U.default.src,
        'icon-education-shared-room': U.default.src,
        'icon-education-support-promise': w.default.src,
        'icon-education-contact-host': C.default.src,
        'icon-education-hosting-requirements': I.default.src,
        'icon-number-available-animated': x.default.src,
        'icon-pay-less-upfront': M.default.src,
        'icon-experience-urgent': t.default.src,
        ic_compact_alert_exclamation_circle_16: O.default.src
    }
}), "9dd9a1", ["ba7a76", "1db39d", "5e278f", "e9041d", "cb2c39", "dce8a3", "bf9edc", "d76d5c", "8f1af0", "f0ddf2", "ac813b", "aa6bd1", "f43bd3", "d9fe25", "c4c54b", "e9d697", "f1643b", "45ec96", "7bb691", "357407", "4dd987", "7198d3", "946757"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var _ = t(r(d[1])),
        l = (r(d[2]), r(d[3])),
        o = r(d[4]);
    e.default = _.default.memo((0, l.createVariant)(o.BaseButtonOrAnchor, {
        component: "c1b36svn atm_26_1j28jx2 atm_3f_glywfm atm_7l_1kw7nm4 atm_9j_tlke0l atm_9s_1ulexfb atm_gi_idpfg4 atm_l8_idpfg4 atm_r3_1kw7nm4 atm_rd_glywfm atm_e2_1osqo2v atm_vy_1osqo2v atm_tl_1gw4zv3"
    }))
}), "aa65c8", ["ba7a76", "07aa1f", "4786a8", "92749c", "60c631"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "bd1454fe2520a75a8fbffff4c5022959",
        name: "icon-uc-future-time",
        type: "png"
    })
}), "aa6bd1", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "088b870c81c3f58369db904fdcb791da",
        name: "icon-uc-discount-tag",
        type: "png"
    })
}), "ac813b", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "9ee78aa12d1a51a64b1dc566a4391ba5",
        name: "icon-uc-trophy",
        type: "gif"
    })
}), "bf9edc", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "d90081cf960a75468e4e3ee7023c96d5",
        name: "icon-uc-safety",
        type: "gif"
    })
}), "c4c54b", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, u) {
        return Object.entries(t).reduce(((t, [n, c]) => (u(c, n) && (t[n] = c), t)), {})
    }
}), "c97d21", []);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "1ffc04073f913b26ccdb520ba212c25d",
        name: "icon-uc-light-bulb",
        type: "gif"
    })
}), "cb2c39", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SIDEBAR_MARGIN_TOP = e.PREAPPROVAL = void 0;
    e.SIDEBAR_MARGIN_TOP = 24, e.PREAPPROVAL = 'preapproval'
}), "d6f4a0", []);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "adfbcead8f18ac9ed9db680054e4f351",
        name: "icon-uc-wings-key",
        type: "gif"
    })
}), "d76d5c", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "0d988c4ec128a1a11fdc5c499940dec8",
        name: "icon-uc-money-saved",
        type: "gif"
    })
}), "d9fe25", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "ba9427140b4c547a78cee03fe26bec81",
        name: "icon-uc-tag",
        type: "gif"
    })
}), "dce8a3", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "3f8bd411622845e624b9be5ba9631168",
        name: "icon-uc-graph",
        type: "gif"
    })
}), "e9041d", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 208,
        height: 208,
        scales: [1],
        hash: "53eada851ef529c9dc733d357b48afa8",
        name: "icon-education-chat-bubble",
        type: "gif"
    })
}), "e9d697", ["64c00a"]);
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
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "296a9c250dc9ee3d995629f834798cb1",
        name: "icon-uc-diamond",
        type: "gif"
    })
}), "f0ddf2", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 225,
        height: 225,
        scales: [1],
        hash: "8f61953bff0ff8c0958b5fd25216dc34",
        name: "icon-education-hand-wave",
        type: "gif"
    })
}), "f1643b", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/gp-pdp-core-ui-sections/images/stays",
        width: 80,
        height: 80,
        scales: [1],
        hash: "ace59291b2904181320cb34108a24537",
        name: "icon-uc-calendar",
        type: "gif"
    })
}), "f43bd3", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function n() {
        const u = t(r(d[1]));
        return n = function() {
            return u
        }, u
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        const {
            pathname: o,
            hash: c
        } = window.location, l = n().default.stringify(t), s = n().default.stringify((0, f.default)()), $ = `${o}?${l}${c}`;
        `${o}?${s}${c}` !== $ && (0, u.getHistory)().replace($)
    };
    var u = r(d[2]),
        f = t(r(d[3]))
}), "f78bd7", ["ba7a76", "e950a3", "7934b6", "a7c4ef"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = r(d[1]),
        o = (n(r(d[2])), r(d[3])),
        l = n(r(d[4])),
        s = n(r(d[5])),
        c = n(r(d[6])),
        h = n(r(d[7])),
        u = r(d[8]),
        y = n(r(d[9])),
        p = n(r(d[10])),
        x = n(r(d[11])),
        f = r(d[12]),
        T = n(r(d[13])),
        _ = n(r(d[14])),
        b = r(d[15]),
        k = r(d[16]);
    const j = 'CROSS_SELL_DEFAULT';

    function v(n) {
        return "empty_message" !== n && "no_eligible_message" !== n
    }
    e.default = (0, o.withStyles)((({
        dls19: n
    }) => ({
        container: { ...(0, y.default)(n).body,
            display: 'flex',
            gap: 16,
            animationName: {
                '0%': {
                    opacity: 0,
                    animationTimingFunction: 'ease-out'
                },
                '100%': {
                    opacity: 1,
                    animationTimingFunction: 'ease-out'
                }
            },
            animationDuration: '300ms'
        },
        container_rightIcon: {
            justifyContent: 'space-between'
        },
        headline: { ...(0, y.default)(n).bodyHeading,
            marginBottom: 0
        },
        headline_inlineTitle: {
            marginRight: 8,
            display: 'inline'
        },
        bodyText: { ...(0, y.default)(n).base,
            alignSelf: 'stretch',
            marginRight: 8
        },
        bodyText_n8: { ...n.typography.base.md,
            color: n.palette.foggy,
            marginTop: 4
        },
        iconContainer: {
            backgroundColor: n.palette.white,
            backgroundPosition: 'top left',
            backgroundRepeat: 'no-repeat',
            borderRadius: '50%',
            display: 'inline-block',
            flexShrink: 0,
            backgroundSize: 36,
            height: 36,
            width: 36,
            margin: 2,
            [n.responsive.queries.mediumAndAbove]: {
                backgroundSize: 32,
                height: 32,
                width: 32,
                margin: 0
            }
        },
        messageText: {
            minHeight: 40,
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        messageText_inline: {
            display: 'inline-block',
            width: '100%'
        },
        inlineTextLink: { ...n.typography.base.md,
            color: n.palette.foggy,
            textDecoration: 'underline',
            fontWeight: n.typography.weight.medium,
            width: 'unset',
            display: 'inline'
        }
    })))((function(n) {
        const o = (0, t.c)(84),
            {
                css: y,
                inlineTitle: C,
                messageData: I,
                rightIcon: S,
                shouldShowN8UI: w,
                styles: L,
                theme: O
            } = n,
            [D] = (0, u.useUIState)(f.ForSplitStays),
            U = "compact" === (0, p.default)();
        if (!I) return null;
        let F;
        o[0] !== I ? (F = I || {}, o[0] = I, o[1] = F) : F = o[1];
        const {
            action: N,
            message: R,
            messageType: E
        } = F;
        let P;
        o[2] !== R ? (P = R || {}, o[2] = R, o[3] = P) : P = o[3];
        const {
            body: A,
            ctaText: $,
            ctaUrl: q,
            icon: z,
            iconUrl: H,
            iconEnum: M
        } = P;
        let W;
        if (M) {
            let n;
            o[4] !== y || o[5] !== L.iconContainer ? (n = y(L.iconContainer), o[4] = y, o[5] = L.iconContainer, o[6] = n) : n = o[6];
            const t = U ? 36 : 32,
                l = "monthly_stays_service_fee_deductions" === E ? .toLowerCase() ? O.dls19.palette.spruce : void 0;
            let c, h;
            o[7] !== M || o[8] !== t || o[9] !== l ? (c = (0, k.jsx)(s.default, {
                icon: M,
                size: t,
                color: l
            }), o[7] = M, o[8] = t, o[9] = l, o[10] = c) : c = o[10], o[11] !== n || o[12] !== c ? (h = (0, k.jsx)("div", { ...n,
                children: c
            }), o[11] = n, o[12] = c, o[13] = h) : h = o[13], W = h
        } else if (z) {
            const n = `url(${b.UNC_ICON_IMAGE_URLS[z]})`;
            let t, l;
            o[14] !== y || o[15] !== L.iconContainer || o[16] !== n ? (t = y(L.iconContainer, {
                backgroundImage: n
            }), o[14] = y, o[15] = L.iconContainer, o[16] = n, o[17] = t) : t = o[17], o[18] !== t ? (l = (0, k.jsx)("div", { ...t
            }), o[18] = t, o[19] = l) : l = o[19], W = l
        } else if (H) {
            const n = `url(${H})`;
            let t, l;
            o[20] !== y || o[21] !== L.iconContainer || o[22] !== n ? (t = y(L.iconContainer, {
                backgroundImage: n
            }), o[20] = y, o[21] = L.iconContainer, o[22] = n, o[23] = t) : t = o[23], o[24] !== t ? (l = (0, k.jsx)("div", { ...t
            }), o[24] = t, o[25] = l) : l = o[25], W = l
        } else W = void 0;
        const B = W;
        let G;
        o[26] !== N ? (G = N || {}, o[26] = N, o[27] = G) : G = o[27];
        const {
            label: J,
            type: K,
            payload: Q,
            loggingEventData: V
        } = G, X = Number(K);
        let Y;
        o[28] !== N || o[29] !== Q || o[30] !== X || o[31] !== D ? (Y = n => {
            if (n.preventDefault(), 1 === X && Q)(0, _.default)({
                checkIn: N ? .payload ? .checkIn,
                checkOut: N ? .payload ? .checkOut
            });
            else if (2 === X) {
                const n = document.querySelector(`div[data-plugin-in-point-id=${j}]`) || document.querySelector(`div[data-section-id=${j}]`);
                n && (0, T.default)({
                    forSplitStays: D,
                    targetSection: n
                })
            }
        }, o[28] = N, o[29] = Q, o[30] = X, o[31] = D, o[32] = Y) : Y = o[32];
        const Z = Y;
        let ee;
        o[33] !== V || o[34] !== Q ? .checkIn || o[35] !== Q ? .checkOut || o[36] !== E || o[37] !== K ? (ee = V ? (0, l.default)(V, {
            payloadCheckIn: Q ? .checkIn || "",
            payloadCheckOut: Q ? .checkOut || "",
            actionType: K || "",
            messageType: E || ""
        }) : {}, o[33] = V, o[34] = Q ? .checkIn, o[35] = Q ? .checkOut, o[36] = E, o[37] = K, o[38] = ee) : ee = o[38];
        const ne = ee,
            ie = !!C;
        let te, ae, oe, le, se, ce;
        o[39] !== y || o[40] !== L.messageText_inline ? (te = y(L.messageText_inline), o[39] = y, o[40] = L.messageText_inline, o[41] = te) : te = o[41], o[42] !== te ? (ae = (0, k.jsx)("div", { ...te
        }), o[42] = te, o[43] = ae) : ae = o[43], o[44] !== y || o[45] !== C || o[46] !== R || o[47] !== L.headline || o[48] !== L.headline_inlineTitle ? (oe = R ? .headline && (0, k.jsx)("h2", { ...y(L.headline, C && L.headline_inlineTitle),
            children: R.headline
        }), o[44] = y, o[45] = C, o[46] = R, o[47] = L.headline, o[48] = L.headline_inlineTitle, o[49] = oe) : oe = o[49], o[50] !== J || o[51] !== A || o[52] !== ne || o[53] !== y || o[54] !== $ || o[55] !== q || o[56] !== Z || o[57] !== w || o[58] !== L.bodyText ? (le = !w && (0, k.jsxs)(k.Fragment, {
            children: [A && (0, k.jsx)("span", { ...y(L.bodyText),
                children: A
            }), $ && q && (0, k.jsx)(c.default, {
                openInNewWindow: !0,
                href: q,
                children: $
            }), J && (0, k.jsx)(c.default, {
                onPress: Z,
                ...ne,
                children: J
            })]
        }), o[50] = J, o[51] = A, o[52] = ne, o[53] = y, o[54] = $, o[55] = q, o[56] = Z, o[57] = w, o[58] = L.bodyText, o[59] = le) : le = o[59], o[60] !== J || o[61] !== A || o[62] !== ne || o[63] !== y || o[64] !== Z || o[65] !== w || o[66] !== L.bodyText_n8 || o[67] !== L.inlineTextLink ? (se = w && (0, k.jsxs)("div", {
            children: [A && (0, k.jsxs)("div", { ...y(L.bodyText_n8),
                children: [A, J && (0, k.jsxs)(k.Fragment, {
                    children: [" ", (0, k.jsx)(x.default, { ...y(L.inlineTextLink),
                        onPress: Z,
                        ...ne,
                        children: J
                    })]
                })]
            }), !A && J && (0, k.jsx)(c.default, {
                onPress: Z,
                ...ne,
                children: J
            })]
        }), o[60] = J, o[61] = A, o[62] = ne, o[63] = y, o[64] = Z, o[65] = w, o[66] = L.bodyText_n8, o[67] = L.inlineTextLink, o[68] = se) : se = o[68], o[69] !== oe || o[70] !== le || o[71] !== se || o[72] !== ie || o[73] !== ae ? (ce = (0, k.jsxs)(h.default, {
            when: ie,
            wrapper: ae,
            children: [oe, le, se]
        }), o[69] = oe, o[70] = le, o[71] = se, o[72] = ie, o[73] = ae, o[74] = ce) : ce = o[74];
        const de = ce;
        let re;
        return o[75] !== y || o[76] !== de || o[77] !== E || o[78] !== B || o[79] !== S || o[80] !== L.container || o[81] !== L.container_rightIcon || o[82] !== L.messageText ? (re = v(E) ? (0, k.jsxs)("div", { ...y(L.container, S && L.container_rightIcon),
            children: [!S && B, (0, k.jsx)("div", { ...y(L.messageText),
                children: de
            }), S && B]
        }) : null, o[75] = y, o[76] = de, o[77] = E, o[78] = B, o[79] = S, o[80] = L.container, o[81] = L.container_rightIcon, o[82] = L.messageText, o[83] = re) : re = o[83], re
    }))
}), "f97a90", ["ba7a76", "87eb11", "07aa1f", "e0b084", "45d996", "c1795b", "3e8391", "82f5b0", "afdc80", "ad1abc", "e0b071", "aa65c8", "d7c0b4", "2b486f", "1c7c30", "9dd9a1", "b8c07d"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-pdp-core-ui-sections/sections/UrgencyCommitment/UrgencyCommitmentSection.b17b7891e8.js.map