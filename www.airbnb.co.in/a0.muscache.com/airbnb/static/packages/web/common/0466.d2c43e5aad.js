__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        return (0, t.isWebview)() && (0, t.isIos)()
    };
    var t = r(d[0])
}), "16cc83", ["e9b7bf"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    var t = {
        sm: '(max-width: 743px)',
        md: '(min-width: 744px) and (max-width: 1127px)',
        lg: '(min-width: 1128px)'
    };

    function n(n) {
        return t[n]
    }
    var c = {
        on: function(t, c) {
            var u = this,
                o = n(t);
            if (!o) return function() {};
            if (!g.matchMedia) return function() {};
            var f = g.matchMedia(o),
                h = function(t) {
                    return c.call(u, t)
                };
            return f.addListener(h), c(f),
                function() {
                    f.removeListener(h)
                }
        },
        is: function(t) {
            var c = n(t);
            return !!c && (g.matchMedia ? g.matchMedia(c).matches : 'lg' === t)
        }
    };
    m.exports = c
}), "3064e3", []);
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.baseAnchorStylesFn = e.baseAnchorCssFragments = e.BaseAnchor = void 0;
    n(r(d[1])), r(d[2]);
    var t = r(d[3]),
        o = (r(d[4]), r(d[5])),
        s = n(r(d[6])),
        l = r(d[7]),
        c = r(d[8]);
    const h = e.baseAnchorCssFragments = {
        base: "\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    font-style: inherit;\n    font-variant: inherit;\n    line-height: inherit;\n\n    color: inherit;\n    text-decoration: underline;\n\n    @media (hover: hover) {       &:hover {                cursor: pointer;       color: inherit;       text-decoration: underline;            }     }\n\n\n\n       \n\n    &:focus {\n      color: inherit;\n      text-decoration: underline;\n    }\n\n    &:disabled {\n      /* stylelint-disable block-no-empty */\n      /* stylelint-enable block-no-empty */\n    }\n    &:visited {\n      /* stylelint-disable block-no-empty */\n      /* stylelint-enable block-no-empty */\n    }\n    &:active {\n      /* stylelint-disable block-no-empty */\n      /* stylelint-enable block-no-empty */\n    }\n  ",
        fullWidth: "\n    width: 100%;\n    display: block;\n  ",
        showOnlyOnKeyboardFocus: "\n    &:not(:focus) {       border: 0;   clip: rect(0 0 0 0);   clip-path: inset(100%);   height: 1px;   overflow: hidden;   overflow: clip;   padding: 0;   position: absolute;   white-space: nowrap;   width: 1px;  }\n  "
    };
    e.BaseAnchor = ({
        anchorRef: n,
        children: h,
        className: b,
        css: u,
        current: y,
        fullWidth: p,
        href: f,
        linariaClassNames: v,
        onPress: w,
        openInNewWindow: F,
        rel: O,
        showOnlyOnKeyboardFocus: A = !1,
        styles: W,
        theme: N,
        velouteId: k,
        viewTransitionElement: x,
        loggingID: C,
        eventData: K,
        eventDataSchema: R,
        shouldLogImpression: S,
        componentName: D,
        ...I
    }) => {
        const T = f && (f.startsWith('//') || !f.startsWith('/')),
            L = (0, t.useCx)(),
            {
                methodsWithLogging: _
            } = (0, s.default)('Anchor', {
                componentName: D,
                loggingID: C,
                eventData: K,
                eventDataSchema: R,
                methods: {
                    onPress: w
                },
                shouldLogImpression: S
            }),
            P = (0, o.maybeRwsCss)(u, W ? .base, W ? .anchor, W ? .component, p && W ? .fullWidth, y && W ? .current, A && W ? .showOnlyOnKeyboardFocus);
        return P.className && (P.className += ` ${L(l.linariaThemeLinearGradientRtlClassName)}`), (0, c.jsx)("a", {
            rel: O || (F && T ? 'noopener noreferrer' : void 0),
            target: F ? '_blank' : void 0,
            ...I,
            ref: n,
            onClick: _.onPress,
            href: f,
            "data-veloute": k,
            className: L(l.linariaThemeLinearGradientRtlClassName, v ? .base, v ? .baseAnchor, v ? .component, v ? .variant, p && v ? .baseAnchorFullWidth, p && v ? .fullWidth, y && v ? .current, A && v ? .baseAnchorShowOnlyOnKeyboardFocus, A && v ? .showOnlyOnKeyboardFocus, b),
            "view-transition-element": void 0 !== x ? String(x) : void 0,
            ...P,
            children: h
        })
    };
    e.baseAnchorStylesFn = (0, o.deprecatedExtendableStylesFn)('BaseAnchor', (() => ({
        base: (0, o.cssFragmentToRws)(h.base),
        anchor: {},
        button: {},
        component: {},
        fullWidth: (0, o.cssFragmentToRws)(h.fullWidth),
        current: {},
        showOnlyOnKeyboardFocus: (0, o.cssFragmentToRws)(h.showOnlyOnKeyboardFocus)
    })))
}), "4cb147", ["ba7a76", "07aa1f", "c9c35f", "4786a8", "0d3432", "2d8af3", "b7564f", "be6270", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    e.default = (t, s = {}) => {
        const o = s.selectorPostfix || '';
        let c = !1;
        try {
            c = CSS.supports('selector(:focus-visible)')
        } catch (t) {
            c = !1
        }
        return c ? {
            [`:focus-visible${o}`]: t
        } : {
            [`:focus${o}`]: t
        }
    }
}), "513bf3", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(...t) {
        const {
            componentName: l,
            loggingID: p,
            eventData: h,
            eventDataSchema: D,
            methods: I,
            threshold: f,
            target: v,
            skip: L,
            shouldLogImpressionOnMount: N
        } = c(t), k = (0, n.useRef)();
        k.current || (k.current = (0, o().v4)());
        const {
            logComponentAction: M,
            methodsWithLogging: O,
            setLoggingData: T
        } = (0, s.default)({
            componentName: l,
            loggingID: p,
            eventData: h,
            eventDataSchema: D,
            methods: I,
            initialUUID: k.current,
            skip: L
        }), {
            setImpressionTarget: U,
            ImpressionTarget: _,
            setLoggingData: C
        } = (0, u.default)({
            componentName: l,
            loggingID: p,
            eventData: h,
            eventDataSchema: D,
            initialUUID: k.current,
            threshold: f,
            target: v,
            shouldLogImpressionOnMount: N,
            skip: L
        }), S = (0, n.useCallback)((t => {
            T(t), C(t)
        }), [T, C]);
        return {
            logComponentAction: M,
            methodsWithLogging: O,
            setImpressionTarget: U,
            ImpressionTarget: _,
            setLoggingData: S
        }
    };
    var n = r(d[1]);

    function o() {
        const t = r(d[2]);
        return o = function() {
            return t
        }, t
    }
    var s = t(r(d[3])),
        u = t(r(d[4]));
    const c = t => {
        if ('string' == typeof t[0]) {
            const n = t[1] || {},
                {
                    shouldLogImpression: o,
                    componentName: s,
                    ...u
                } = n;
            return {
                componentName: s || t[0],
                shouldLogImpressionOnMount: o,
                ...u
            }
        }
        return t[0]
    }
}), "5cc52d", ["ba7a76", "07aa1f", "305dd5", "f89ed8", "8295be"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.linkStylesFn = e.buttonStylesFn = e.baseButtonOrAnchorCssFragments = e.BaseButtonOrAnchor = void 0;
    n(r(d[1])), r(d[2]), r(d[3]), r(d[4]);
    var o = r(d[5]),
        t = n(r(d[6])),
        s = r(d[7]),
        c = r(d[8]),
        h = r(d[9]),
        u = r(d[10]);
    e.BaseButtonOrAnchor = ({
        anchorRef: n,
        buttonRef: o,
        buttonOrAnchorRef: s,
        children: l,
        disabled: p,
        href: b,
        openInNewWindow: v,
        type: f,
        loggingID: B,
        componentName: y,
        eventData: F,
        eventDataSchema: S,
        onPress: A,
        shouldLogImpression: _,
        __happoFocus: O,
        __happoHover: P,
        ...k
    }) => {
        const {
            methodsWithLogging: w
        } = (0, t.default)('ButtonOrAnchor', {
            componentName: y,
            loggingID: B,
            eventData: F,
            eventDataSchema: S,
            methods: {
                onPress: A
            },
            shouldLogImpression: _
        });
        if (!b || p) {
            const n = b && p ? {
                'aria-disabled': !0,
                role: 'link',
                type: void 0
            } : {};
            return (0, u.jsx)(c.BaseButton, { ...k,
                onPress: w.onPress,
                buttonRef: s || o,
                disabled: p,
                type: f,
                "data-happo-focus": O,
                "data-happo-hover": P,
                ...n,
                children: l
            })
        }
        return (0, u.jsx)(h.BaseAnchor, { ...k,
            onPress: w.onPress,
            anchorRef: s || n,
            href: b,
            openInNewWindow: v,
            "data-happo-focus": O,
            "data-happo-hover": P,
            children: l
        })
    };
    const l = e.baseButtonOrAnchorCssFragments = {
        link: "\n    appearance: none;\n    background: transparent;\n    border: 0;\n    cursor: pointer;\n    margin: 0;\n    padding: 0;\n    user-select: auto;\n\n    &:disabled {\n      cursor: not-allowed;\n\n      @media (hover: hover) {       &:hover {                  text-decoration: none;              }     }\n\n         \n    }\n  ",
        button: c.baseButtonCssFragments.base
    };
    e.buttonStylesFn = c.baseButtonStylesFn, e.linkStylesFn = (0, s.extendStyles)(h.baseAnchorStylesFn, (() => ({
        button: (0, o.cssFragmentToRws)(l.link)
    })))
}), "60c631", ["ba7a76", "07aa1f", "ea4b89", "0d3432", "4786a8", "2d8af3", "b7564f", "01b367", "ee5719", "4cb147", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";

    function t(t) {
        if (t.hasAttribute('tabindex') && !Number.isNaN(Number(t.getAttribute('tabindex')))) return !1;
        const u = t.nodeName.toLowerCase();
        return !/^(input|select|textarea|button|object)$/.test(u) && (!n(t) || !t.href)
    }

    function n(t) {
        return 'a' === t.nodeName.toLowerCase()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n, u) {
        if (!n) return;
        t(n) && (n.tabIndex = -1);
        return n.focus(u), n
    }
}), "76a68d", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.evaluateEventData = function(t, n, ...o) {
        if ('object' == typeof t) return t;
        if ('function' == typeof t) {
            const u = t(n, ...o);
            return 'object' != typeof u ? {} : u
        }
        return {}
    }, e.evaluateEventDataSchema = function(t, n) {
        if ('object' == typeof t) return t;
        if ('function' == typeof t) {
            const o = t(n);
            if ('object' != typeof o && 'string' != typeof o && void 0 !== o) return;
            return o
        }
        if ('string' == typeof t) return t;
        return
    }, e.evaluateLoggingID = function(t, n) {
        if ('string' == typeof t) return t;
        if ('function' == typeof t) return t(n);
        return ''
    }, e.getEnglishCanonicalURL = function(t) {
        let n = window.location.pathname + window.location.search;
        if (!t) {
            const t = document.querySelector('link[rel=alternate][hreflang=en]');
            n = document.getElementById('english-canonical-url') ? .getAttribute('content') || t ? .href || n
        }
        const o = /\/\/[^/]+(\/.*)/;
        if (o.test(n)) return o ? .exec(n) ? .[1];
        return n
    }, e.getNormalizedPageForTracking = function() {
        const t = window.location.pathname;
        if (/^\/s\/?/.test(t)) return '/s/:query';
        return t.replace(/\/\d+(?=[/]|$)/g, '/:id')
    }, e.getScreenDimensions = function() {
        const {
            width: t,
            height: n
        } = window.screen;
        return {
            width: t,
            height: n
        }
    }, e.getWWWCdnProvider = function() {
        return window && 'string' == typeof window.WWW_CDN_PROVIDER ? window.WWW_CDN_PROVIDER : 'Unknown'
    };
    r(d[1]), t(r(d[2])), t(r(d[3]))
}), "807301", ["ba7a76", "7ea00e", "3064e3", "c8b97a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        componentName: t,
        loggingID: n,
        eventData: y,
        eventDataSchema: b,
        initialUUID: E,
        threshold: S = .5,
        target: T,
        skip: k,
        shouldLogImpressionOnMount: C
    }) {
        (0, s.useRef)(k ? void 0 : 'useVisibleImpressionXRayDebug');
        const {
            eventData: R
        } = (0, s.useContext)(v.default), {
            scheduler: j
        } = (0, D.usePostTaskScheduler)(), x = (0, s.useRef)({
            loggingID: n || '',
            eventData: y,
            eventDataSchema: b
        }), L = (0, s.useRef)(), M = (0, s.useRef)(E), N = (0, f.useCx)();
        (0, s.useEffect)((() => {
            x.current = {
                eventData: y,
                eventDataSchema: b,
                loggingID: n || ''
            }
        }), [y, b, n]);
        const U = (0, _.useEvent)((() => {
            const {
                loggingID: n,
                eventData: s,
                eventDataSchema: u
            } = x.current, v = (0, p.evaluateLoggingID)(n, 'componentImpression');
            if (k || !v) return;
            void 0 === M.current && (M.current = (0, o().v4)());
            const f = {
                schema: c().UniversalComponentImpressionEvent,
                event_data: {
                    uuid: M.current,
                    logging_id: v,
                    ancestor_logging_ids: [],
                    ancestor_uuids: [],
                    event_data: { ...u ? R : {},
                        ...u && s ? (0, p.evaluateEventData)(s, 'componentImpression') : {}
                    },
                    event_data_schema: (0, p.evaluateEventDataSchema)(u, 'componentImpression'),
                    component: t
                }
            };
            l.default.queueJitneyEvent(f)
        }));
        (0, s.useEffect)((() => {
            C && U()
        }), [C, U]);
        const w = (0, s.useCallback)((t => {
                k ? L.current && (L.current(), L.current = void 0) : t ? L.current = (0, u().observe)(t, ((t, n) => {
                    n.isIntersecting && j.postTask((() => {
                        L.current && (L.current(), L.current = void 0), U()
                    }))
                }), {
                    threshold: S
                }) : L.current && (L.current(), L.current = void 0)
            }), [U, j, k, S]),
            O = (0, s.useMemo)((() => function({
                className: t,
                style: n
            }) {
                return (0, I.jsx)("div", {
                    className: N(h.impressionTarget, t),
                    style: n,
                    ref: w,
                    inert: "true"
                })
            }), [N, w]),
            P = (0, s.useCallback)((t => {
                'function' == typeof t ? x.current = t(x.current) : 'object' == typeof t && (x.current = t)
            }), []);
        return {
            setImpressionTarget: 'manual' === T ? void 0 : w,
            ImpressionTarget: 'manual' === T ? O : void 0,
            setLoggingData: P
        }
    };
    var s = n(r(d[2]));

    function u() {
        const t = r(d[3]);
        return u = function() {
            return t
        }, t
    }

    function o() {
        const t = r(d[4]);
        return o = function() {
            return t
        }, t
    }
    r(d[5]);

    function c() {
        const t = r(d[6]);
        return c = function() {
            return t
        }, t
    }
    var l = t(r(d[7])),
        v = t(r(d[8])),
        f = r(d[9]),
        p = r(d[10]),
        D = r(d[11]),
        _ = r(d[12]),
        I = r(d[13]);
    const h = {
        impressionTarget: "i13398es atm_mj_glywfm atm_vb_glywfm"
    }
}), "8295be", ["ba7a76", "45f788", "07aa1f", "b99fef", "305dd5", "ea4b89", "60aeb4", "c8b97a", "f0ab9c", "4786a8", "807301", "53bb4a", "f4e9c4", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var s = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        ref: s,
        isDisabled: c
    }) {
        const n = s && 'function' != typeof s ? s.current : null,
            o = (0, t.useRef)({
                hasFocus: !1,
                isDisabled: c
            }),
            l = n === document.activeElement;
        (0, t.useEffect)((() => {
            if (n && (o.current.hasFocus = l), o.current.isDisabled !== c && (o.current.isDisabled = c, n && c && o.current.hasFocus)) {
                const s = n.closest(':not([disabled])') || void 0;
                (0, u.default)(s)
            }
        }), [n, c, l])
    };
    var t = r(d[1]),
        u = s(r(d[2]))
}), "aca1a6", ["ba7a76", "07aa1f", "76a68d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return u.default
        }
    });
    var u = t(r(d[1]))
}), "b7564f", ["ba7a76", "5cc52d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.InView = void 0, e.observe = p, e.useInView = function(n) {
        var o = void 0 === n ? {} : n,
            s = o.threshold,
            u = o.delay,
            c = o.trackVisibility,
            l = o.rootMargin,
            h = o.root,
            f = o.triggerOnce,
            v = o.skip,
            b = o.initialInView,
            y = (0, t.useRef)(),
            V = (0, t.useState)({
                inView: !!b
            }),
            w = V[0],
            k = V[1],
            O = (0, t.useCallback)((function(t) {
                void 0 !== y.current && (y.current(), y.current = void 0), v || t && (y.current = p(t, (function(t, n) {
                    k({
                        inView: t,
                        entry: n
                    }), n.isIntersecting && f && y.current && (y.current(), y.current = void 0)
                }), {
                    root: h,
                    rootMargin: l,
                    threshold: s,
                    trackVisibility: c,
                    delay: u
                }))
            }), [Array.isArray(s) ? s.toString() : s, h, l, f, v, c, u]);
        (0, t.useEffect)((function() {
            y.current || !w.entry || f || v || k({
                inView: !!b
            })
        }));
        var _ = [O, w.inView, w.entry];
        return _.ref = _[0], _.inView = _[1], _.entry = _[2], _
    };
    var t = r(d[0]);

    function n() {
        return n = Object.assign || function(t) {
            for (var n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s])
            }
            return t
        }, n.apply(this, arguments)
    }

    function o(t, n) {
        if (null == t) return {};
        var o, s, u = {},
            c = Object.keys(t);
        for (s = 0; s < c.length; s++) o = c[s], n.indexOf(o) >= 0 || (u[o] = t[o]);
        return u
    }
    var s = new Map,
        u = new WeakMap,
        c = 0;

    function l(t) {
        return Object.keys(t).sort().filter((function(n) {
            return void 0 !== t[n]
        })).map((function(n) {
            return n + "_" + ('root' === n ? (o = t.root) ? (u.has(o) || (c += 1, u.set(o, c.toString())), u.get(o)) : '0' : t[n]);
            var o
        })).toString()
    }

    function h(t) {
        var n = l(t),
            o = s.get(n);
        if (!o) {
            var u, c = new Map,
                h = new IntersectionObserver((function(n) {
                    n.forEach((function(n) {
                        var o, s = n.isIntersecting && u.some((function(t) {
                            return n.intersectionRatio >= t
                        }));
                        t.trackVisibility && void 0 === n.isVisible && (n.isVisible = s), null == (o = c.get(n.target)) || o.forEach((function(t) {
                            t(s, n)
                        }))
                    }))
                }), t);
            u = h.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), o = {
                id: n,
                observer: h,
                elements: c
            }, s.set(n, o)
        }
        return o
    }

    function p(t, n, o) {
        if (void 0 === o && (o = {}), !t) return function() {};
        var u = h(o),
            c = u.id,
            l = u.observer,
            p = u.elements,
            f = p.get(t) || [];
        return p.has(t) || p.set(t, f), f.push(n), l.observe(t),
            function() {
                f.splice(f.indexOf(n), 1), 0 === f.length && (p.delete(t), l.unobserve(t)), 0 === p.size && (l.disconnect(), s.delete(c))
            }
    }

    function f(t) {
        return 'function' != typeof t.children
    }
    var v = e.InView = (function(s) {
        var u, c;

        function l(t) {
            var n;
            return (n = s.call(this, t) || this).node = null, n._unobserveCb = null, n.handleNode = function(t) {
                n.node && (n.unobserve(), t || n.props.triggerOnce || n.props.skip || n.setState({
                    inView: !!n.props.initialInView,
                    entry: void 0
                })), n.node = t || null, n.observeNode()
            }, n.handleChange = function(t, o) {
                t && n.props.triggerOnce && n.unobserve(), f(n.props) || n.setState({
                    inView: t,
                    entry: o
                }), n.props.onChange && n.props.onChange(t, o)
            }, n.state = {
                inView: !!t.initialInView,
                entry: void 0
            }, n
        }
        c = s, (u = l).prototype = Object.create(c.prototype), u.prototype.constructor = u, u.__proto__ = c;
        var h = l.prototype;
        return h.componentDidUpdate = function(t) {
            t.rootMargin === this.props.rootMargin && t.root === this.props.root && t.threshold === this.props.threshold && t.skip === this.props.skip && t.trackVisibility === this.props.trackVisibility && t.delay === this.props.delay || (this.unobserve(), this.observeNode())
        }, h.componentWillUnmount = function() {
            this.unobserve(), this.node = null
        }, h.observeNode = function() {
            if (this.node && !this.props.skip) {
                var t = this.props,
                    n = t.threshold,
                    o = t.root,
                    s = t.rootMargin,
                    u = t.trackVisibility,
                    c = t.delay;
                this._unobserveCb = p(this.node, this.handleChange, {
                    threshold: n,
                    root: o,
                    rootMargin: s,
                    trackVisibility: u,
                    delay: c
                })
            }
        }, h.unobserve = function() {
            this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
        }, h.render = function() {
            if (!f(this.props)) {
                var s = this.state,
                    u = s.inView,
                    c = s.entry;
                return this.props.children({
                    inView: u,
                    entry: c,
                    ref: this.handleNode
                })
            }
            var l = this.props,
                h = l.children,
                p = l.as,
                v = l.tag,
                b = o(l, ["children", "as", "tag", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView"]);
            return (0, t.createElement)(p || v || 'div', n({
                ref: this.handleNode
            }, b), h)
        }, l
    })(t.Component);
    v.displayName = 'InView', v.defaultProps = {
        threshold: 0,
        triggerOnce: !1,
        initialInView: !1
    }
}), "b99fef", ["07aa1f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(o) {
        const s = {};
        return Object.keys(o).forEach((t => {
            const c = o[t];
            s[t] = Array.isArray(c) ? c : [n[t], c]
        })), s
    };
    const n = {
        onClick: 2,
        onChange: 12,
        onPress: 2,
        onFocus: 5,
        onBlur: 18,
        onBackPress: 2,
        onNextPress: 2,
        onLeftPress: 2,
        onRightPress: 2,
        onPressPrimary: 2,
        onPressSecondary: 2,
        onSaveChange: 13,
        onPressActionText: 2,
        onClose: 9,
        onCancel: 9,
        onDismiss: 9,
        onSelect: 2,
        onSubmit: 17,
        onActionPress: 2,
        onActionButtonPress: 2,
        onRatingChange: 12,
        onReportButtonPress: 2,
        onWishlistButtonPress: 2,
        onExpand: 3,
        onToggleCollapse: 6,
        onCollapseToggle: 6,
        onPressTab: 2,
        onOpen: 3,
        onImageChange: 10,
        onDecrement: 12,
        onIncrement: 12,
        onCarouselScroll: 10,
        onKeyUp: 21,
        onEnter: 16
    }
}), "bcd3aa", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.linariaThemeLinearGradientRtlClassName = e.baseThermalCssFragments = e.BaseThermal = void 0;
    var n = t(r(d[1])),
        s = (r(d[2]), r(d[3])),
        l = r(d[4]),
        o = r(d[5]);
    e.BaseThermal = ({
        css: t,
        styles: c,
        children: h,
        disabled: p,
        linariaClassNames: u
    }) => {
        const b = n.default.useRef(null),
            v = (0, s.useCx)(),
            [{
                top: y,
                left: f,
                width: _,
                height: w
            }, k] = (0, n.useState)({}),
            x = n.default.useCallback((t => {
                if (void 0 !== f && void 0 !== y && void 0 !== _ && void 0 !== w && t.target instanceof Element) {
                    const n = (t.clientX - f) / _ * 100,
                        s = (t.clientY - y) / w * 100;
                    b.current && (b.current.style.setProperty('--mouse-x', String(n)), b.current.style.setProperty('--mouse-y', String(s)))
                }
            }), [y, f, _, w]),
            C = n.default.useCallback((t => {
                if (t.target instanceof Element) {
                    const {
                        left: n,
                        width: s,
                        top: l,
                        height: o
                    } = t.target.getBoundingClientRect();
                    k({
                        left: n,
                        width: s,
                        top: l,
                        height: o
                    })
                }
            }), []);
        if (p) return (0, o.jsx)(o.Fragment, {
            children: h
        });
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("span", {
                className: v(u ? .thermalContainer),
                ...(0, l.maybeRwsCss)(t, c ? .thermalContainer),
                children: (0, o.jsx)("span", {
                    ref: b,
                    className: v(u ? .thermal),
                    ...(0, l.maybeRwsCss)(t, c ? .thermal),
                    style: {
                        backgroundPosition: 'calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)'
                    },
                    onMouseEnter: C,
                    onMouseMove: x
                })
            }), (0, o.jsx)("span", {
                "data-button-content": !0,
                className: v(u ? .content),
                ...(0, l.maybeRwsCss)(t, c ? .content),
                children: h
            })]
        })
    };
    const c = e.baseThermalCssFragments = {
        thermalContainer: "\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    /* Fixes overflow: hidden in Safari */\n    /* stylelint-disable property-no-vendor-prefix, value-no-vendor-prefix */\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n    mask-image: -webkit-radial-gradient(white, black);\n    /* stylelint-enable property-no-vendor-prefix, value-no-vendor-prefix */\n  ",
        thermal: "\n    display: block;\n    width: 100%;\n    height: 100%;\n    min-width: 200px;\n    background-size: 200% 200%;\n    opacity: 0;\n    transition: opacity 1.25s;\n    background-image: linear-gradient(\n      to right,\n      var(--linaria-theme_palette-bg-primary-inverse) 0%,\n      var(--linaria-theme_palette-bg-primary) 50%,\n      var(--linaria-theme_palette-bg-primary-inverse) 100%\n    ); /* migrated from linear-gradient(to right, black 0%, white 50%, black 100%) */\n\n    &:hover {\n      opacity: 1;\n    }\n\n    &:active {\n      transition: transform 2s, opacity 2s;\n      opacity: 0;\n      transform: scale(5);\n    }\n  ",
        content: "\n    display: block;\n    position: relative;\n    pointer-events: none;\n  "
    };
    e.linariaThemeLinearGradientRtlClassName = "l1ovpqvx atm_1he2i46_1k8pnbi_10saat9 atm_yxpdqi_1pv6nv4_10saat9 atm_1a0hdzc_w1h1e8_10saat9 atm_2bu6ew_929bqk_10saat9 atm_12oyo1u_73u7pn_10saat9 atm_fiaz40_1etamxe_10saat9", (0, l.deprecatedExtendableStylesFn)('BaseThermal', (0, l.cssFragmentsObjToStylesFn)(c))
}), "be6270", ["45f788", "07aa1f", "ea4b89", "4786a8", "2d8af3", "b8c07d"]);
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
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.primaryCssFragments = e.default = void 0;
    var n = r(d[1]);
    r(d[2]), t(r(d[3])), r(d[4]);
    const o = e.primaryCssFragments = {
        component: "\n    border: none;\n    background: var(--linaria-theme_palette-bg-primary-inverse); /* migrated from theme.palette.hof */\n    color: var(--linaria-theme_palette-text-primary-inverse); /* migrated from theme.palette.white */\n    @media (hover: hover) {       &:hover {                border: none;       background: var(--linaria-theme_palette-bg-primary-inverse-hover); /* migrated from theme.palette.black */       color: var(--linaria-theme_palette-text-primary-inverse); /* migrated from theme.palette.white */       /* we can remove this once all variants using these styles are migrated to Linaria       * this is here because RWS does not respect the ordering of keys in the        * backwards-compatible object, so we try to re-override hover styles       */       &:disabled {         border: none;         background: var(--linaria-theme_palette-bg-primary-inverse-disabled); /* migrated from theme.palette.deco */         color: var(--linaria-theme_palette-text-primary-inverse); /* migrated from theme.palette.white */       }            }     }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n       \n\n    &:active {\n      border: none;\n      background: var(--linaria-theme_palette-bg-primary-inverse-hover); /* migrated from theme.palette.black */\n      color: var(--linaria-theme_palette-text-primary-inverse); /* migrated from theme.palette.white */\n    }\n\n    &:focus {\n      color: var(--linaria-theme_palette-text-primary-inverse);\n    }\n\n    &:disabled {\n      border: none;\n      background: var(--linaria-theme_palette-bg-primary-inverse-disabled); /* migrated from theme.palette.deco */\n      color: var(--linaria-theme_palette-text-primary-inverse); /* migrated from theme.palette.white */\n    }\n  "
    };
    e.default = (0, n.cssFragmentsObjToStylesFn)(o)
}), "def0ae", ["ba7a76", "2d8af3", "4786a8", "5aed2e", "0d3432"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    e.default = o => ({
        '@media (any-hover: hover)': {
            ':hover': o
        }
    })
}), "dfbec0", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default,
        t = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.baseButtonStylesFn = e.baseButtonCssFragments = e.BaseButton = void 0;
    var o = t(r(d[2])),
        s = n(r(d[3])),
        l = (r(d[4]), r(d[5])),
        u = r(d[6]),
        c = n(r(d[7])),
        b = n(r(d[8])),
        h = r(d[9]),
        p = n(r(d[10])),
        y = r(d[11]);
    const f = 'button',
        v = e.baseButtonCssFragments = {
            base: "\n    cursor: pointer;\n    display: inline-block;\n    margin: 0;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n\n    border: 1px solid var(--linaria-theme_palette-border-primary); /* migrated from black */\n\n    box-shadow: var(--dls_button_box-shadow);\n\n    width: auto;\n\n    padding: 4px 8px;\n\n    background: var(--linaria-theme_palette-bg-secondary); /* migrated from lightgrey */\n    color: var(--linaria-theme_palette-text-primary); /* migrated from black */\n    font-size: 14px;\n    font-family: inherit;\n    touch-action: manipulation;\n\n    &:disabled {\n      cursor: not-allowed;\n      opacity: 0.3;\n    }\n  ",
            fullWidth: "\n    width: 100%;\n  ",
            showOnlyOnKeyboardFocus: "\n    &:not(:focus) {       border: 0;   clip: rect(0 0 0 0);   clip-path: inset(100%);   height: 1px;   overflow: hidden;   overflow: clip;   padding: 0;   position: absolute;   white-space: nowrap;   width: 1px;  }\n  "
        };
    e.BaseButton = ({
        buttonRef: n,
        children: t,
        className: s,
        css: c,
        current: v,
        fullWidth: w,
        linariaClassNames: F,
        onPress: O,
        showOnlyOnKeyboardFocus: x = !1,
        styles: B,
        theme: N,
        type: _ = f,
        velouteId: C,
        viewTransitionElement: R,
        loggingID: W,
        eventData: D,
        eventDataSchema: K,
        shouldLogImpression: S,
        componentName: T,
        ...k
    }) => {
        const I = (0, l.useCx)(),
            L = (0, o.useRef)(null),
            P = n || L,
            {
                methodsWithLogging: j
            } = (0, b.default)('Button', {
                componentName: T,
                loggingID: W,
                eventData: D,
                eventDataSchema: K,
                methods: {
                    onPress: O
                },
                shouldLogImpression: S
            }),
            E = (0, u.maybeRwsCss)(c, B ? .base, B ? .button, B ? .component, w && B ? .fullWidth, v && B ? .current, x && B ? .showOnlyOnKeyboardFocus);
        return E.className && (E.className += ` ${I(h.linariaThemeLinearGradientRtlClassName)}`), (0, p.default)({
            ref: P,
            isDisabled: !!k.disabled
        }), (0, y.jsx)("button", { ...k,
            type: _,
            onClick: j.onPress,
            ref: P,
            className: I(h.linariaThemeLinearGradientRtlClassName, F ? .baseButton, F ? .base, F ? .component, F ? .variant, w && F ? .baseButtonFullWidth, w && F ? .fullWidth, v && F ? .current, x && F ? .baseButtonShowOnlyOnKeyboardFocus, x && F ? .showOnlyOnKeyboardFocus, s),
            ...E,
            "data-veloute": C,
            "view-transition-element": void 0 !== R ? String(R) : void 0,
            children: t
        })
    };
    e.baseButtonStylesFn = (0, u.deprecatedExtendableStylesFn)('BaseButton', (() => ({
        base: (0, u.cssFragmentToRws)(v.base),
        button: {},
        anchor: {},
        component: { ...(0, c.default)({}),
            ...(0, s.default)({}),
            ':active': {},
            ':disabled': {}
        },
        fullWidth: (0, u.cssFragmentToRws)(v.fullWidth),
        current: {},
        showOnlyOnKeyboardFocus: (0, u.cssFragmentToRws)(v.showOnlyOnKeyboardFocus)
    })))
}), "ee5719", ["ba7a76", "45f788", "07aa1f", "dfbec0", "c9c35f", "4786a8", "2d8af3", "513bf3", "b7564f", "be6270", "aca1a6", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.EventDataContextProvider = function({
        value: t,
        children: v
    }) {
        const {
            eventData: c
        } = (0, n.useContext)(u), l = (0, n.useMemo)((() => ({
            eventData: { ...c,
                ...t
            }
        })), [c, t]);
        return (0, o.jsx)(u.Provider, {
            value: l,
            children: v
        })
    }, e.default = void 0;
    var n = t(r(d[1])),
        o = r(d[2]);
    const u = (0, n.createContext)({
        eventData: {}
    });
    e.default = u
}), "f0ab9c", ["45f788", "07aa1f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        componentName: t,
        loggingID: f,
        eventData: D,
        eventDataSchema: h,
        methods: _,
        initialUUID: p,
        skip: b
    }) {
        (0, n.useRef)(b ? void 0 : 'useActionTrackingXRayDebug');
        const E = (0, n.useRef)({}),
            {
                eventData: y
            } = (0, n.useContext)(s.default),
            I = (0, n.useRef)({
                loggingID: f || '',
                eventData: D,
                eventDataSchema: h
            }),
            R = (0, n.useRef)(p),
            j = _ ? (0, v.default)(_) : {};
        (0, n.useEffect)((() => {
            I.current = {
                eventData: D,
                eventDataSchema: h,
                loggingID: f || ''
            }
        }), [D, h, f]);
        const k = (0, n.useCallback)(((n, s, ...v) => {
                const {
                    loggingID: f,
                    eventData: D,
                    eventDataSchema: h
                } = I.current, _ = (0, l.evaluateLoggingID)(f, n);
                if (b || !_) return;
                void 0 === R.current && (R.current = (0, u().v4)());
                const p = {
                    schema: c().UniversalComponentActionEvent,
                    event_data: {
                        uuid: R.current,
                        logging_id: _,
                        ancestor_logging_ids: [],
                        ancestor_uuids: [],
                        event_data: { ...h ? y : {},
                            ...h && D ? (0, l.evaluateEventData)(D, n, ...v) : {}
                        },
                        event_data_schema: (0, l.evaluateEventDataSchema)(h, n),
                        operation: s,
                        method: n,
                        component: t
                    }
                };
                o.default.queueJitneyEvent(p)
            }), [y, t, b]),
            C = (0, n.useCallback)((t => {
                'function' == typeof t ? I.current = t(I.current) : 'object' == typeof t && (I.current = t)
            }), []),
            S = (0, n.useRef)({});
        if (j && Object.keys(j).length > 0) {
            const t = S.current,
                n = [];
            Object.entries(j).forEach((([u, [c, o]]) => {
                const [s, l] = t[u] || [];
                n.push(u), s === c && l === o || (E.current[u] = (...t) => (b || k(u, c, ...t), o ? .(...t)))
            })), Object.entries(t).forEach((([t]) => {
                n.includes(t) || delete E.current[t]
            })), S.current = j
        } else E.current = {};
        return {
            logComponentAction: k,
            setLoggingData: C,
            methodsWithLogging: E.current
        }
    };
    var n = r(d[1]);

    function u() {
        const t = r(d[2]);
        return u = function() {
            return t
        }, t
    }

    function c() {
        const t = r(d[3]);
        return c = function() {
            return t
        }, t
    }
    var o = t(r(d[4])),
        s = t(r(d[5])),
        l = r(d[6]),
        v = t(r(d[7]))
}), "f89ed8", ["ba7a76", "07aa1f", "305dd5", "59c871", "c8b97a", "f0ab9c", "807301", "bcd3aa"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/0466.bd406721c8.js.map