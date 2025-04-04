__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.m1TimingFunction = e.MEGAPHONE_COORDINATED_TRANSITION_DELAY = e.M1_MEGAPHONE_BACKGROUND_COLOR = e.HOMEPAGE_FOOTER_ID = e.HEADER_NAV_CONTAINER_EXPANDABLE_INVIEW_ROOT_MARGIN_TOP = e.HEADER_CONTAINER_EXPANDABLE_INVIEW_ROOT_MARGIN_TOP = void 0;
    e.HOMEPAGE_FOOTER_ID = 'sticky-footer-p0', e.HEADER_CONTAINER_EXPANDABLE_INVIEW_ROOT_MARGIN_TOP = -1, e.HEADER_NAV_CONTAINER_EXPANDABLE_INVIEW_ROOT_MARGIN_TOP = -2, e.MEGAPHONE_COORDINATED_TRANSITION_DELAY = 745, e.m1TimingFunction = 'cubic-bezier(0.55, 0.00, 0.15, 1.00)', e.M1_MEGAPHONE_BACKGROUND_COLOR = '#e7e7e2'
}), "02d0a8", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ProfileButtonMenuBounds = void 0;
    var t = r(d[0]);
    e.ProfileButtonMenuBounds = (0, t.createUIKey)('ProfileButtonMenuBounds', {
        getDefault: () => {}
    })
}), "03f648", ["005fd5"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default,
        t = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.BaseProfileButton = function({
        linariaClassnames: n,
        className: t,
        badge: l = !1,
        expanded: v,
        href: y,
        id: w,
        onPress: j,
        src: F,
        css: P,
        styles: C,
        dataTestId: R,
        dataTooltipAnchorId: z,
        refForFocus: B
    }) {
        const N = (0, _.useCx)(),
            k = !!l,
            S = !(0, s.default)(l) && k,
            I = 'number' == typeof l;
        let T;
        T = k && I ? o.default.t('simple_nav.header.menu_label_with_notification_count', {
            smart_count: l
        }) : k && !I ? o.default.t('simple_nav.header.menu_label_with_notification_boolean') : o.default.t('simple_nav.header.user_menu_label');
        return (0, x.jsxs)(c.default, {
            className: N(n ? .container, v ? n ? .container_expanded : n ? .container_collapsed, t),
            ...(0, h.maybeRwsCss)(P, C ? .container, v ? C ? .container_expanded : C ? .container_collapsed),
            "aria-expanded": v,
            "aria-label": T,
            href: y,
            onClick: j,
            id: w,
            refForFocus: B,
            ...R ? {
                'data-testid': R
            } : void 0,
            ...z ? {
                'data-tooltip-anchor-id': z
            } : void 0,
            children: [(0, x.jsx)("div", {
                className: N(n ? .icon),
                ...(0, h.maybeRwsCss)(P, C ? .icon),
                children: (0, x.jsx)(u.default, {
                    size: 16,
                    effectiveStrokeWidth: 1.5,
                    decorative: !0
                })
            }), (0, x.jsx)("div", {
                className: N(n ? .face),
                ...(0, h.maybeRwsCss)(P, C ? .face),
                children: F ? (0, x.jsx)(b.ResponsivePictureProvider, {
                    value: {
                        maxDensity: 1,
                        imageWidth: 240
                    },
                    children: (0, x.jsx)(p.default, { ...(0, h.maybeRwsCss)(P, C ? .faceImage),
                        src: F,
                        borderRadius: "50%",
                        width: "100%",
                        height: "100%",
                        noLoading: !0
                    })
                }) : (0, x.jsx)(f.default, {
                    size: "100%",
                    decorative: !0
                })
            }), k && (0, x.jsx)("div", {
                className: N(n ? .badge, I ? n ? .badge_numeric : n ? .badge_empty, S && n ? .badge_appear, v && n ? .badge_expanded),
                ...(0, h.maybeRwsCss)(P, C ? .badge, I ? C ? .badge_numeric : C ? .badge_empty, S && C ? .badge_appear, v && C ? .badge_expanded),
                children: l
            })]
        })
    }, e.styleFragments = e.baseProfileButtonStylesFn = void 0;
    t(r(d[2]));
    var o = t(r(d[3])),
        s = t(r(d[4])),
        l = n(r(d[5])),
        c = t(r(d[6])),
        u = t(r(d[7])),
        f = t(r(d[8])),
        p = t(r(d[9])),
        b = r(d[10]),
        _ = r(d[11]),
        h = r(d[12]),
        x = (t(r(d[13])), r(d[14]));
    e.styleFragments = {
        container: "\n    appearance: none;   background: transparent;   border: 0;   color: inherit;   cursor: pointer;   display: inline-block;   font-family: inherit;   font-size: inherit;   font-weight: inherit;   line-height: inherit;   margin: 0;   outline: 0;   overflow: visible;   padding: 0;   text-align: inherit;   text-decoration: none;   user-select: auto;      outline: none;   &::-moz-focus-inner {     border: none;     padding: 0;     margin: 0;   }   &:focus::-moz-focus-inner {     border: none;   }   &:-moz-focusring {     outline: none;   }\n  ",
        container_collapsed: "",
        container_expanded: "",
        badge: "",
        badge_appear: "",
        badge_expanded: "",
        after: "",
        icon: ""
    };
    e.baseProfileButtonStylesFn = (0, h.deprecatedExtendableStylesFn)('BaseProfileButtonProps', (() => ({
        container: (0, l.default)(),
        container_collapsed: {},
        container_expanded: {},
        badge: {},
        badge_appear: {},
        badge_expanded: {},
        after: {},
        icon: {}
    })))
}), "1192c5", ["45f788", "ba7a76", "07aa1f", "a9f4b1", "67c39a", "740140", "22c040", "b0b942", "d6159b", "978eb1", "9d9690", "4786a8", "2d8af3", "bc1dfe", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, l, f = 0) {
        const c = (0, u.useRef)(null);
        (0, u.useEffect)((() => {
            c.current = l ? window.pageYOffset : null
        }), [l]), (0, n.default)('scroll', (() => {
            const u = c.current;
            null != u && Math.abs(u - window.pageYOffset) > f && (c.current = null, t())
        }))
    };
    var u = r(d[1]),
        n = t(r(d[2]))
}), "166d4d", ["ba7a76", "07aa1f", "567629"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.sharedExpandableContainerStylesFragments = e.default = void 0;
    var t = r(d[1]),
        o = (n(r(d[2])), r(d[3]), r(d[4]), n(r(d[5]))),
        p = (r(d[6]), r(d[7]), n(r(d[8])), r(d[9]), r(d[10])),
        s = r(d[11]);
    o.default.motion.standardCurve.animationTimingFunction;
    const c = e.sharedExpandableContainerStylesFragments = {
        container: "\n    padding-top: env(safe-area-inset-top);\n    height: calc(80px + env(safe-area-inset-top));\n    position: fixed;\n    left: 0;\n    width: 100%;\n    z-index: 100;\n\n    &::before {\n      background-image: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));\n      content: '';\n      height: 140%;\n      left: 0;\n      opacity: 0;\n      pointer-events: none;\n      position: absolute;\n      top: 0;\n      width: 100%;\n      z-index: 0;\n      transition: 150ms opacity var(--linaria-theme_motion-standard-curve-animation-timing-function);\n\n      @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {\n        transition: none;\n      }\n    }\n\n    &::after {\n      box-shadow: rgba(0, 0, 0, 0.08) 0 1px 12px;\n      transform-origin: 50% 0%;\n      /* added a opacity delay because Safari does this weird re-sizing thingy that shows up otherwise */\n      transition: transform 150ms var(--linaria-theme_motion-standard-curve-animation-timing-function),\n        opacity 150ms var(--linaria-theme_motion-standard-curve-animation-timing-function)\n          75ms;\n      background: var(--linaria-theme_palette-white);\n      content: '';\n      height: 100%;\n      left: 0;\n      opacity: 0;\n      position: absolute;\n      top: 0;\n      width: 100%;\n      z-index: 0;\n\n      @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {\n        transition: none;\n      }\n    }\n  ",
        container_withBanner: "\n    position: absolute;\n  ",
        container_standard: "\n    &::after {\n      opacity: 1;\n    }\n  ",
        container_immersive: "\n    color: var(--linaria-theme_palette-white);\n\n    &::before {\n      opacity: 0.4;\n    }\n  ",
        container_expanded: "\n    &::after {\n      opacity: 1;\n      transform: scaleY(3.05);\n\n      @media (min-width: 950px) {\n        transform: scaleY(2.25);\n      }\n    }\n  ",
        container_expandedBeforeScroll: "\n    &::after {\n      opacity: 0;\n    }\n  ",
        container_stuck: "\n    position: fixed;\n    top: 0;\n\n    &::after {\n      opacity: 1;\n    }\n  ",
        container_disableScroll: "\n    position: absolute;\n  ",
        container_borderless: "\n    &::after {\n      box-shadow: none;\n    }\n  ",
        content: "\n    justify-content: space-between;\n    align-items: center;\n    display: flex;\n    height: 100%;\n    position: relative;\n    width: 100%;\n    z-index: 1;\n  ",
        content_maxWidth: "\n    max-width: 1440px;     @supports (--a: a) {       max-width: var(--page-shell-max-content-width, 1440px);     }\n    padding-left: var(--linaria-theme_spacing-micro24px);   padding-right: var(--linaria-theme_spacing-micro24px);   @media (min-width: 375px) {     padding-left: var(--linaria-theme_spacing-micro24px);     padding-right: var(--linaria-theme_spacing-micro24px);   }   @media (min-width: 744px) {     padding-left: var(--linaria-theme_spacing-macro40px);     padding-right: var(--linaria-theme_spacing-macro40px);   }   @media (min-width: 950px) {     padding-left: var(--linaria-theme_spacing-macro40px);     padding-right: var(--linaria-theme_spacing-macro40px);   }   @media (min-width: 1128px) {     padding-left: var(--linaria-theme_spacing-macro80px);     padding-right: var(--linaria-theme_spacing-macro80px);   }   @media (min-width: 1440px) {     padding-left: var(--linaria-theme_spacing-macro80px);     padding-right: var(--linaria-theme_spacing-macro80px);   }\n    margin: 0 auto;\n  ",
        content_fullWidth: "\n    padding: 0 var(--linaria-theme_spacing-micro24px);\n  ",
        contentLogo: "\n    flex: 0 0 auto;\n\n    @media (min-width: 950px) {\n      flex: 1 0 140px; /* same as contentLinks to ensure contentSearch is centered */\n    }\n  ",
        contentLinks: "\n    flex: 1 0 auto;\n\n    @media (min-width: 950px) {\n      flex: 1 0 140px;\n    }\n  ",
        contentSearch: "\n    flex: 0 1 auto;\n    min-width: 348px; /* 300px + 48px padding */\n    padding: 0 24px;\n\n    @media (min-width: 950px) {\n      text-align: center;\n    }\n  ",
        contentSearch_empty: "\n    flex: 0 1 auto;\n    min-width: 0;\n    padding: 0 24px;\n  ",
        placeholder: "\n    height: 80px;\n  ",
        placeholder_expanded: "\n    height: 214px;\n\n    @media (min-width: 950px) {\n      height: 150px;\n    }\n  ",
        banner: "\n    position: relative;\n    z-index: 101;\n  ",
        overlay: "\n    background-color: rgba(0, 0, 0, 0.25);\n    bottom: 0;\n    left: 0;\n    position: fixed;\n    right: 0;\n    top: 0;\n    z-index: 99;\n    height: 100vh;\n  "
    };
    e.default = (0, t.extendStyles)(s.baseExpandableContainerStylesFn, (() => Object.fromEntries(Object.entries(c).map((([n, t]) => [n, (0, p.cssFragmentToRws)(t)])))))
}), "17ceda", ["ba7a76", "01b367", "69089a", "4f51f0", "870944", "5aed2e", "a81bbb", "daa5d1", "a99b62", "4786a8", "2d8af3", "6a9df4"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default,
        s = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.BaseHeaderLink = function({
        ariaExpanded: n,
        ariaLabel: s,
        after: c,
        badge: v = !1,
        badgeLabel: h,
        before: _,
        children: p,
        href: y,
        id: x,
        onPress: L,
        preventClientRouting: k = !1,
        refForFocus: C,
        submit: F = !1,
        dataTestId: w,
        css: I,
        styles: j,
        linariaClassnames: D,
        loggingID: R,
        eventData: H,
        eventDataSchema: N,
        shouldLogImpression: P,
        ...S
    }) {
        const z = (0, f.useImmersive)(),
            B = (0, o.useCx)(),
            {
                methodsWithLogging: E,
                setImpressionTarget: T
            } = (0, l.default)('HeaderLink', {
                loggingID: R,
                eventData: H,
                eventDataSchema: N,
                shouldLogImpression: P,
                methods: {
                    onPress: L
                }
            });
        return (0, u.jsxs)(b.default, {
            className: B(D ? .container, z ? D ? .container_immersive : D ? .container_standard),
            ...(0, t.maybeRwsCss)(I, j ? .container, z ? j ? .container_immersive : j ? .container_standard),
            ...F ? {
                type: 'submit'
            } : void 0,
            "aria-expanded": n,
            "aria-label": s,
            "data-no-client-routing": k ? '' : void 0,
            "data-testid": w,
            href: y,
            id: x,
            onClick: E.onPress,
            refForFocus: C,
            ...S,
            children: [_ && (0, u.jsx)("div", {
                className: B(D ? .before),
                ...(0, t.maybeRwsCss)(I, j ? .before),
                children: _
            }), (0, u.jsxs)("div", {
                className: B(D ? .label),
                ref: T,
                ...(0, t.maybeRwsCss)(I, j ? .label),
                children: [p, v && (0, u.jsx)("div", {
                    className: B(D ? .badge, z ? D ? .badge_immersive : D ? .badge_standard),
                    ...(0, t.maybeRwsCss)(I, j ? .badge, z ? j ? .badge_immersive : j ? .badge_standard),
                    "aria-label": h
                })]
            }), c && (0, u.jsx)("div", {
                className: B(D ? .after),
                ...(0, t.maybeRwsCss)(I, j ? .after),
                children: c
            })]
        })
    }, e.styleFragments = e.baseHeaderLinkStylesFn = void 0;
    s(r(d[2]));
    var t = r(d[3]),
        o = (s(r(d[4])), r(d[5])),
        l = s(r(d[6])),
        c = n(r(d[7])),
        b = s(r(d[8])),
        f = r(d[9]),
        u = r(d[10]);
    e.styleFragments = {
        container: "\n    appearance: none;   background: transparent;   border: 0;   color: inherit;   cursor: pointer;   display: inline-block;   font-family: inherit;   font-size: inherit;   font-weight: inherit;   line-height: inherit;   margin: 0;   outline: 0;   overflow: visible;   padding: 0;   text-align: inherit;   text-decoration: none;   user-select: auto;      outline: none;   &::-moz-focus-inner {     border: none;     padding: 0;     margin: 0;   }   &:focus::-moz-focus-inner {     border: none;   }   &:-moz-focusring {     outline: none;   }\n  ",
        container_standard: "\n    /* stylelint-disable block-no-empty */\n  ",
        container_immersive: "",
        label: "",
        badge: "",
        badge_standard: "",
        badge_immersive: "",
        before: "",
        after: ""
    };
    e.baseHeaderLinkStylesFn = (0, t.deprecatedExtendableStylesFn)('BaseHeaderLinkProps', (() => ({
        container: (0, c.default)(),
        container_standard: {},
        container_immersive: {},
        label: {},
        badge: {},
        badge_standard: {},
        badge_immersive: {},
        before: {},
        after: {}
    })))
}), "196a60", ["45f788", "ba7a76", "07aa1f", "2d8af3", "bc1dfe", "4786a8", "b7564f", "740140", "22c040", "ed5a37", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = r(d[1]),
        n = r(d[2]),
        l = r(d[3]),
        p = t(r(d[4])),
        s = r(d[5]),
        c = r(d[6]);
    const h = (0, n.extendStyles)(c.baseProfileButtonStylesFn, (({
        dls19: t
    }) => ({
        container: {
            alignItems: 'center',
            backgroundColor: t.palette.white,
            border: `1px solid ${t.palette.deco}`,
            borderRadius: '50%',
            color: t.palette.hof,
            display: 'inline-flex',
            height: 40,
            width: 40,
            lineHeight: '20PX',
            padding: 3,
            position: 'relative',
            verticalAlign: 'middle',
            transition: 'box-shadow 0.2s ease',
            zIndex: 1,
            boxSizing: 'border-box',
            [l.a11y.noMotion]: {
                transition: 'none'
            },
            ...(0, p.default)({ ...(0, s.focusTransitionStyles)(),
                boxShadow: `0px 0px 0px 2px ${t.palette.hof}, 0px 0px 0px 4px ${t.palette.white}`
            })
        },
        container_collapsed: {
            ':hover': {
                background: t.palette.faint
            }
        },
        container_expanded: {
            padding: 2,
            border: `2px solid ${t.palette.hof}`
        },
        badge: {
            backgroundColor: t.palette.productRausch,
            boxShadow: `0 0 0 1.5px ${t.palette.white}`,
            position: 'absolute',
            zIndex: 1
        },
        badge_empty: {
            display: 'none'
        },
        badge_expanded: {
            left: 43,
            top: -1
        },
        badge_numeric: {
            borderRadius: 9,
            color: t.palette.white,
            fontSize: t.typography.base.xs.fontSize,
            fontWeight: t.typography.weight.bold,
            height: 16,
            lineHeight: '16px',
            marginLeft: -14,
            minWidth: 16,
            padding: '0 5px',
            textAlign: 'center',
            left: 44,
            top: 0
        },
        badge_appear: {
            animationName: {
                '0%': {
                    transform: 'scale(0)'
                },
                '100%': {
                    transform: 'scale(1)'
                }
            },
            animationDuration: '0.4s',
            animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.35, 1.1)',
            [l.a11y.noMotion]: {
                animation: 'none'
            }
        },
        face: {
            color: t.palette.foggy,
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1,
            height: '100%',
            width: '100%'
        },
        icon: {
            display: 'none'
        }
    })));
    e.default = (0, o.withStyles)(h)(c.BaseProfileButton)
}), "1c0480", ["ba7a76", "e0b084", "01b367", "daa5d1", "513bf3", "5d07f9", "1192c5"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var _ = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(_) {
        return (0, n.jsx)(s.BaseHeaderLink, { ..._,
            linariaClassnames: l
        })
    };
    r(d[1]), _(r(d[2])), r(d[3]), _(r(d[4]));
    var t = r(d[5]),
        s = r(d[6]),
        n = r(d[7]);
    t.sharedHeaderMenuLinkStylesCssFragments;
    const l = {
        container: "cd7h8km atm_1s_glywfm atm_26_1j28jx2 atm_3f_idpfg4 atm_7l_1kw7nm4 atm_9j_tlke0l atm_9s_1o8liyq atm_bx_1kw7nm4 atm_c8_1kw7nm4 atm_cs_1kw7nm4 atm_g3_1kw7nm4 atm_gi_idpfg4 atm_kd_idpfg4 atm_ks_ewfl5b atm_r3_1kw7nm4 atm_rd_glywfm atm_vb_1wugsn5 atm_kd_glywfm atm_c8_km0zk7 atm_g3_18khvle atm_fr_1m9t47k atm_7l_dezgoh atm_9s_1txwivl atm_l8_11nx8fq atm_vv_1q9ccgz atm_vy_1osqo2v atm_cs_6adqpa atm_9s_1txwivl atm_h_1h6ojuz atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_2d_116dmco_1b5lzrw atm_uc_aaiy6o_1w3cfyq atm_70_cdw4us_1w3cfyq atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_cdw4us_pfnrn2_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam",
        label: "l1xexnrd atm_am_1gtjylf",
        badge: "b1ic66dt atm_2d_r0d14n atm_5j_1ssbidh atm_9s_1o8liyq atm_e2_i2wt44 atm_fq_t94yts atm_h0_yjp0fh atm_mk_h2mmj6 atm_n3_i2wt44 atm_tk_12gsa0d atm_vh_jp4btk atm_vy_i2wt44 atm_2d_wl3mcu__6ldadd",
        after: "axgxr36 atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_7l_1esdqks atm_9s_1o8liyq atm_am_12336oc atm_cs_6adqpa atm_gz_8tjzot",
        container_standard: "c11luhwk",
        container_immersive: "c19hyxd0",
        badge_standard: "bzso9fp",
        badge_immersive: "beln8dh",
        before: "bo9una6"
    }
}), "213d40", ["ba7a76", "ea4b89", "07aa1f", "4786a8", "5aed2e", "3701f3", "196a60", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1]));
    var n = r(d[2]);

    function u(t) {
        return 'href' in t && !!t.href
    }
    e.default = function(t) {
        if (u(t)) {
            const {
                children: u,
                refForFocus: f,
                ...o
            } = t;
            return (0, n.jsx)("a", { ...o,
                ref: f,
                children: u
            })
        }
        const {
            children: f,
            refForFocus: o,
            ...c
        } = t;
        return (0, n.jsx)("button", {
            type: "button",
            ...c,
            ref: o,
            children: f
        })
    }
}), "22c040", ["ba7a76", "07aa1f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, o, s = !1) {
        const f = u.default.useRef(n),
            v = u.default.useRef(o);
        v.current = o;
        const l = u.default.useCallback((u => {
                f.current(), c(t.current, u.target) || v.current(u)
            }), [t]),
            p = u.default.useCallback((u => {
                c(t.current, u.target) || (f.current(), document.addEventListener('mouseup', l, {
                    capture: !0
                }), document.addEventListener('touchend', l, {
                    capture: !0
                }), f.current = () => {
                    document.removeEventListener('mouseup', l, {
                        capture: !0
                    }), document.removeEventListener('touchend', l, {
                        capture: !0
                    }), f.current = n
                })
            }), [t, l]);
        u.default.useEffect((() => {
            if (!s) return document.addEventListener('mousedown', p, {
                capture: !0
            }), document.addEventListener('touchstart', p, {
                capture: !0
            }), () => {
                document.removeEventListener('mousedown', p, {
                    capture: !0
                }), document.removeEventListener('touchstart', p, {
                    capture: !0
                })
            }
        }), [s, p])
    };
    var u = t(r(d[1]));
    const n = () => {};

    function c(t, u) {
        if (t && u) return Array.isArray(t) ? t.some((t => t.current ? .contains(u))) : t.contains(u)
    }
}), "2ba23c", ["ba7a76", "07aa1f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default,
        t = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.sharedHeaderMenuLinkStylesCssFragments = e.default = void 0;
    var o = r(d[2]),
        l = t(r(d[3])),
        s = r(d[4]),
        p = (r(d[5]), t(r(d[6])), r(d[7]), r(d[8])),
        h = n(r(d[9]));
    e.sharedHeaderMenuLinkStylesCssFragments = { ...p.styleFragments,
        container: "\n    appearance: none;   background: transparent;   border: 0;   color: inherit;   cursor: pointer;   display: inline-block;   font-family: inherit;   font-size: inherit;   font-weight: inherit;   line-height: inherit;   margin: 0;   outline: 0;   overflow: visible;   padding: 0;   text-align: inherit;   text-decoration: none;   user-select: auto;      outline: none;   &::-moz-focus-inner {     border: none;     padding: 0;     margin: 0;   }   &:focus::-moz-focus-inner {     border: none;   }   &:-moz-focusring {     outline: none;   }\n    font-size: var(--linaria-theme_typography-base-medium14px-font-size); line-height: var(--linaria-theme_typography-base-medium14px-line-height); letter-spacing: var(--linaria-theme_typography-base-medium14px-letter-spacing);\n\n    color: var(--linaria-theme_palette-hof);\n    display: flex;\n    padding: 12px 16px;\n    white-space: nowrap;\n    width: 100%;\n\n    &:hover:not(:active) {\n      background-color: var(--linaria-theme_palette-faint);\n    }\n    :focus-visible {                   @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {       transition: none;     }     transition: box-shadow 0.2s var(--linaria-theme_motion-standard-curve-animation-timing-function);          box-shadow: inset 0 0 0 2px var(--linaria-theme_palette-hof);          }     @supports not selector(:focus-visible) {       :focus {                     @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {       transition: none;     }     transition: box-shadow 0.2s var(--linaria-theme_motion-standard-curve-animation-timing-function);          box-shadow: inset 0 0 0 2px var(--linaria-theme_palette-hof);            }     }\n\n\n\n       \n  ",
        label: "\n    \n    flex: 1 0 auto;\n  ",
        badge: "\n    \n    background-color: var(--linaria-theme_palette-rausch);     @supports (--a: a) {       background-color: var(--header_brand-color, var(--linaria-theme_palette-rausch));     }\n\n    border-radius: 50%;\n    display: inline-block;\n    height: 6px;\n    left: 1px;\n    margin-right: -6px;\n    position: relative;\n    right: 6px;\n    top: -2px;\n    vertical-align: top;\n    width: 6px;\n  ",
        after: "\n    \n    font-size: var(--linaria-theme_typography-base-small12px-font-size); line-height: var(--linaria-theme_typography-base-small12px-line-height); letter-spacing: var(--linaria-theme_typography-base-small12px-letter-spacing);\n\n    color: var(--linaria-theme_palette-foggy);\n    display: inline-block;\n    flex: 0 0 auto;\n    font-weight: var(--linaria-theme_typography-weight-book400);\n    margin-left: var(--linaria-theme_spacing-micro16px);\n  "
    };
    const c = (0, o.extendStyles)(p.baseHeaderLinkStylesFn, (({
        dls19: n
    }) => ({
        container: { ...n.typography.base.md,
            color: n.palette.hof,
            display: 'flex',
            padding: '12px 16px',
            whiteSpace: 'nowrap',
            width: '100%',
            ':hover:not(:active)': {
                backgroundColor: n.palette.faint
            },
            ...(0, l.default)({ ...(0, s.focusTransitionStyles)(),
                boxShadow: `inset 0px 0px 0px 2px ${n.palette.hof}`
            })
        },
        label: {
            flex: '1 0 auto'
        },
        badge: { ...(0, h.default)(n, 'backgroundColor'),
            borderRadius: '50%',
            display: 'inline-block',
            height: 6,
            left: 1,
            marginRight: -6,
            position: 'relative',
            right: 6,
            top: -2,
            verticalAlign: 'top',
            width: 6
        },
        after: { ...n.typography.base.sm,
            color: n.palette.foggy,
            display: 'inline-block',
            flex: '0 0 auto',
            fontWeight: n.typography.weight.book,
            marginLeft: n.spacing.primitives.size_small
        }
    })));
    e.default = c
}), "3701f3", ["45f788", "ba7a76", "01b367", "513bf3", "5d07f9", "4786a8", "5aed2e", "aabdb1", "196a60", "450922"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, l = "color") {
        return {
            [l]: t.palette.rausch,
            '@supports(--a:a)': {
                [l]: `var(${u.default}, ${t.palette.rausch})`
            }
        }
    };
    r(d[1]), t(r(d[2]));
    var u = t(r(d[3]))
}), "450922", ["ba7a76", "4786a8", "5aed2e", "531621"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var _ = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(_) {
        return (0, l.jsx)(s.BaseHeaderLink, { ..._,
            linariaClassnames: f
        })
    };
    r(d[1]), _(r(d[2])), r(d[3]), _(r(d[4]));
    var t = r(d[5]),
        s = r(d[6]),
        l = r(d[7]);
    t.sharedHeaderMenuLinkStylesCssFragments;
    const f = {
        container: "c1ql0u4u atm_1s_glywfm atm_26_1j28jx2 atm_3f_idpfg4 atm_7l_1kw7nm4 atm_9j_tlke0l atm_9s_1o8liyq atm_bx_1kw7nm4 atm_c8_1kw7nm4 atm_cs_1kw7nm4 atm_g3_1kw7nm4 atm_gi_idpfg4 atm_kd_idpfg4 atm_ks_ewfl5b atm_r3_1kw7nm4 atm_rd_glywfm atm_vb_1wugsn5 atm_kd_glywfm atm_c8_km0zk7 atm_g3_18khvle atm_fr_1m9t47k atm_7l_dezgoh atm_9s_1txwivl atm_l8_11nx8fq atm_vv_1q9ccgz atm_vy_1osqo2v atm_cs_10d11i2 atm_9s_1txwivl atm_h_1h6ojuz atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_2d_116dmco_1b5lzrw atm_uc_aaiy6o_1w3cfyq atm_70_cdw4us_1w3cfyq atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_cdw4us_pfnrn2_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam",
        label: "lgh3vnd atm_am_1gtjylf",
        badge: "b90wtny atm_2d_r0d14n atm_5j_1ssbidh atm_9s_1o8liyq atm_e2_i2wt44 atm_fq_t94yts atm_h0_yjp0fh atm_mk_h2mmj6 atm_n3_i2wt44 atm_tk_12gsa0d atm_vh_jp4btk atm_vy_i2wt44 atm_2d_wl3mcu__6ldadd",
        after: "a1g2wjql atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_7l_1esdqks atm_9s_1o8liyq atm_am_12336oc atm_cs_6adqpa atm_gz_8tjzot",
        container_standard: "c138yemz",
        container_immersive: "c1fqacje",
        badge_standard: "b1ql4qht",
        badge_immersive: "b1i65uvm",
        before: "bw0frzi"
    }
}), "4f2484", ["ba7a76", "ea4b89", "07aa1f", "4786a8", "5aed2e", "3701f3", "196a60", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.HEADER_HEIGHT = void 0;
    e.HEADER_HEIGHT = 80
}), "4f51f0", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    e.default = '--header_brand-color'
}), "531621", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ExpandedBeforeScrollContext = void 0;
    var o = t(r(d[1]));
    (e.ExpandedBeforeScrollContext = o.default.createContext(!1)).displayName = 'ExpandedBeforeScrollContext'
}), "56a245", ["ba7a76", "07aa1f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PORTAL_ID = void 0, e.default = function(t, {
        portalId: o
    } = {}) {
        const l = 'buttons' in t || 'touches' in t ? t.target : 'relatedTarget' in t ? t.relatedTarget : null,
            n = l ? .closest ? .('[role=dialog]'),
            s = l ? .closest ? .(`#${o}`);
        return !!n || !!s
    };
    e.PORTAL_ID = 'guest-header--modal-portal'
}), "66dfd9", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        const o = (0, n.useRef)(null);
        return {
            onBlur: (0, u.useEvent)((n => {
                let u = n.relatedTarget;
                const s = !(!n.relatedTarget ? .getAttribute || 'string' != typeof n.relatedTarget ? .getAttribute('tabindex')),
                    c = !!n.relatedTarget ? .contains(n.target);
                s && c && (u = null), null != u && (o.current ? .contains(u) || (0, l.default)(n) || t(n))
            })),
            ref: o
        }
    };
    var n = r(d[1]),
        u = r(d[2]),
        l = t(r(d[3]))
}), "68b478", ["ba7a76", "07aa1f", "f4e9c4", "66dfd9"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.baseHeaderContentContainerStylesFn = void 0, e.default = function({
        button: n,
        css: l,
        links: o,
        styles: c,
        actionTray: u,
        ariaLabel: b = t.default.t('simple_nav.header.profile_menu_accessibility_label')
    }) {
        return (0, s.jsxs)("nav", { ...l(c.container),
            "aria-label": b,
            children: [o && (0, s.jsx)("div", { ...l(c.links),
                children: o
            }), (0, s.jsx)("div", { ...l(c.button),
                children: n
            }), u && (0, s.jsx)("div", { ...l(c.actionTray),
                children: u
            })]
        })
    };
    n(r(d[1]));
    var t = n(r(d[2])),
        l = r(d[3]),
        s = r(d[4]);
    e.baseHeaderContentContainerStylesFn = (0, l.extendableStyleFn)((() => ({
        container: {},
        links: {},
        button: {},
        actionTray: {}
    })))
}), "69253d", ["ba7a76", "07aa1f", "a9f4b1", "01b367", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        children: t,
        onPress: o
    }) {
        const s = (0, u.useRef)(),
            f = (0, u.useMemo)((() => c(o, s)), [o, s]);
        return (0, u.useEffect)((() => () => {
            s.current && clearTimeout(s.current)
        }), [s]), (0, n.jsx)("div", {
            onClick: f,
            children: t
        })
    };
    var u = t(r(d[1])),
        n = r(d[2]);

    function c(t, u) {
        return n => {
            n.target.closest('[href]') && (u.current && clearTimeout(u.current), u.current = setTimeout((() => {
                t(n)
            }), 50))
        }
    }
}), "6a1b16", ["45f788", "07aa1f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default,
        t = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.BaseExpandableContainer = function({
        banner: n,
        css: t,
        disableScroll: u = !1,
        expandedBeforeScroll: f = !1,
        hasExternalHeaderElement: B = !1,
        _headerStuck: j,
        immersive: N = !1,
        borderless: R = !1,
        links: L,
        logo: W,
        placeholder: I = !N,
        search: A,
        styles: F,
        linariaClassNames: P,
        hasExternalBanner: O,
        externalBannerVisible: T,
        ...D
    }) {
        const H = (0, p.useCx)(),
            M = (0, o.useFullWidthContent)();
        (0, v.default)('HeaderContainer', D);
        const V = w(j),
            [G, U] = (0, l.default)(!0),
            X = void 0 !== j ? j : V && !(n && G),
            q = (0, b.default)(j),
            [z, J] = (0, s.useState)(f && !X),
            K = (0, c.useEvent)((n => {
                (!f || n || X) && J(n)
            })),
            Q = !(!q && j) && (z && (!f || X) && !(O && T)),
            [Y, Z] = (0, s.useState)(!1),
            [$, ee] = (0, s.useState)(N && !X && !Q);
        (0, s.useEffect)((() => ee(N && !X && !Q)), [N, X, Q]), (0, s.useEffect)((() => {
            f && J(!X)
        }), [f, X]), (0, h.default)('keydown', (n => {
            Q && ('Escape' === n.key ? (n.preventDefault(), K(!1)) : 'Tab' !== n.key && 'Control' !== n.key && 'Alt' !== n.key && 'CapsLock' !== n.key && 'Insert' !== n.key || Z(!0))
        })), (0, s.useEffect)((() => {
            const n = () => Z(!1);
            return Y && Q && window.addEventListener('scroll', n, {
                once: !0
            }), () => {
                window.removeEventListener('scroll', n)
            }
        }), [Y, Q]), (0, C.default)((() => K(!1)), Q && !Y, 50);
        const ne = (0, S.default)((n => {
                if (Q) {
                    const t = n.relatedTarget ? .closest ? .('[role=dialog]');
                    if (t) return;
                    K(!1)
                }
            })),
            te = B ? 'div' : 'header';
        return (0, k.jsxs)(k.Fragment, {
            children: [n && (0, k.jsx)("div", { ...(0, _.maybeRwsCss)(t, F ? .banner),
                ref: U,
                children: n
            }), (0, k.jsx)(E.ExpandedStateProvider, {
                expanded: z,
                setExpanded: K,
                children: (0, k.jsx)(x.ImmersiveContext.Provider, {
                    value: $,
                    children: (0, k.jsx)(y.ExpandedBeforeScrollContext.Provider, {
                        value: f,
                        children: (0, k.jsx)(te, {
                            className: H(P ? .container, n && P ? .containerWithBanner, $ && P ? .containerImmersive, !$ && !z && P ? .containerStandard, X ? P ? .containerStuck : P ? .containerUnstuck, z && !$ && P ? .containerExpanded, z && !Q && P ? .containerExpandedBeforeScroll, u && P ? .containerDisableScroll, R && !z && P ? .containerBorderless),
                            ...(0, _.maybeRwsCss)(t, F ? .container, n && F ? .container_withBanner, $ && F ? .container_immersive, !$ && !z && F ? .container_standard, X ? F ? .container_stuck : F ? .container_unstuck, z && !$ && F ? .container_expanded, z && !Q && F ? .container_expandedBeforeScroll, u && F ? .container_disableScroll, R && !z && F ? .container_borderless),
                            ...ne,
                            children: (0, k.jsxs)("div", {
                                className: H(P ? .content, M ? P ? .contentFullWidth : P ? .contentMaxWidth),
                                ...(0, _.maybeRwsCss)(t, F ? .content, M ? F ? .content_fullWidth : F ? .content_maxWidth),
                                children: [(0, k.jsx)("div", {
                                    className: H(P ? .contentLogo),
                                    ...(0, _.maybeRwsCss)(t, F ? .contentLogo),
                                    children: W
                                }), (0, k.jsx)("div", {
                                    className: H(A ? P ? .contentSearch : P ? .contentSearchEmpty),
                                    ...(0, _.maybeRwsCss)(t, A ? F ? .contentSearch : F ? .contentSearch_empty),
                                    children: A
                                }), (0, k.jsx)("div", {
                                    className: H(P ? .contentLinks),
                                    ...(0, _.maybeRwsCss)(t, F ? .contentLinks),
                                    children: L
                                })]
                            })
                        })
                    })
                })
            }), Q && (0, k.jsx)("div", {
                className: H(P ? .overlay),
                ...(0, _.maybeRwsCss)(t, F ? .overlay),
                onClick: () => K(!1)
            }), I && (0, k.jsx)("div", {
                className: H(P ? .placeholder, f && P ? .placeholderExpanded),
                ...(0, _.maybeRwsCss)(t, F ? .placeholder, f && F ? .placeholder_expanded)
            })]
        })
    }, e.baseExpandableContainerStylesFn = void 0;
    var s = t(r(d[2])),
        o = r(d[3]),
        c = r(d[4]),
        l = n(r(d[5])),
        u = n(r(d[6])),
        x = r(d[7]),
        h = n(r(d[8])),
        _ = r(d[9]),
        p = r(d[10]),
        v = n(r(d[11])),
        f = r(d[12]),
        b = n(r(d[13])),
        E = r(d[14]),
        y = r(d[15]),
        S = n(r(d[16])),
        C = n(r(d[17])),
        k = r(d[18]);

    function w(n) {
        const t = void 0 !== n,
            s = (0, u.default)(0, f.HEADER_CONTAINER_EXPANDABLE_INVIEW_ROOT_MARGIN_TOP, t);
        return t ? n : s
    }
    e.baseExpandableContainerStylesFn = (0, _.deprecatedExtendableStylesFn)('BaseExpandableContainer', (() => ({
        banner: {},
        container: {},
        container_withBanner: {},
        container_standard: {},
        container_immersive: {},
        container_expanded: {},
        container_expandedBeforeScroll: {},
        container_unstuck: {},
        container_stuck: {},
        container_disableScroll: {},
        container_borderless: {},
        content: {},
        content_maxWidth: {},
        content_fullWidth: {},
        contentLogo: {},
        contentSearch: {},
        contentSearch_empty: {},
        contentLinks: {},
        placeholder: {},
        placeholder_expanded: {}
    })))
}), "6a9df4", ["ba7a76", "45f788", "07aa1f", "a0c80f", "f4e9c4", "4d10b6", "5fddf9", "ed5a37", "567629", "2d8af3", "4786a8", "b7564f", "02d0a8", "67c39a", "839502", "56a245", "68b478", "166d4d", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n) {
        const u = (0, t.useRef)(null);
        return {
            onBlur: (0, t.useCallback)((() => {
                let t = !1,
                    o = !1;
                const s = n => {
                    t = !0, o = !!u.current ? .contains(n.target), document.removeEventListener('focus', s, !0)
                };
                document.addEventListener('focus', s, !0), requestAnimationFrame((() => {
                    requestAnimationFrame((() => {
                        t || document.removeEventListener('focus', s, !0), o || n()
                    }))
                }))
            }), [n]),
            ref: u
        }
    };
    var t = r(d[0])
}), "70326d", ["07aa1f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        return {
            appearance: 'none',
            background: 'transparent',
            border: 0,
            color: 'inherit',
            cursor: 'pointer',
            display: 'inline-block',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            lineHeight: 'inherit',
            margin: 0,
            outline: 0,
            overflow: 'visible',
            padding: 0,
            textAlign: 'inherit',
            textDecoration: 'none',
            userSelect: 'auto',
            ...(0, n.resetFocusStyles)()
        }
    };
    var n = r(d[0]);
    r(d[1]), r(d[2])
}), "740140", ["5d07f9", "4786a8", "30b570"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, l = !1) {
        const {
            setFalse: s,
            setTrue: f,
            toggle: c,
            value: v
        } = (0, u.default)(l), M = (0, o.useInitialRender)(), _ = `#${t}`, h = M ? _ : void 0;
        return (0, n.useEffect)((() => {
            M && window.location.hash === _ && f()
        }), [_, M, f]), {
            isOpen: v,
            openMenu: f,
            closeMenu: s,
            toggleMenu: c,
            href: h
        }
    };
    var n = r(d[1]),
        u = t(r(d[2])),
        o = r(d[3])
}), "81bba3", ["ba7a76", "07aa1f", "329215", "1e052a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ExpandedStateProvider = function({
        children: t,
        expanded: s,
        setExpanded: c
    }) {
        const x = (0, n.useMemo)((() => [s, c]), [s, c]);
        return (0, o.jsx)(u.Provider, {
            value: x,
            children: t
        })
    }, e.useExpandedState = function() {
        const t = (0, n.useState)(!1);
        return (0, n.useContext)(u) || t
    };
    var n = t(r(d[1])),
        o = r(d[2]);
    const u = n.default.createContext(void 0);
    u.displayName = 'ExpandedStateContext'
}), "839502", ["45f788", "07aa1f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var _ = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.classNames = void 0, e.default = function(_) {
        return (0, s.jsx)(t.BaseHeaderLink, { ..._,
            linariaClassnames: l
        })
    };
    r(d[1]), _(r(d[2])), _(r(d[3])), _(r(d[4])), r(d[5]), r(d[6]);
    var t = r(d[7]),
        s = r(d[8]);
    t.styleFragments;
    const l = e.classNames = {
        container: "chplgv4 atm_1s_glywfm atm_26_1j28jx2 atm_3f_idpfg4 atm_7l_1kw7nm4 atm_9j_tlke0l atm_9s_1o8liyq atm_bx_1kw7nm4 atm_c8_1kw7nm4 atm_cs_1kw7nm4 atm_g3_1kw7nm4 atm_gi_idpfg4 atm_kd_idpfg4 atm_ks_ewfl5b atm_r3_1kw7nm4 atm_rd_glywfm atm_vb_1wugsn5 atm_kd_glywfm atm_c8_km0zk7 atm_g3_18khvle atm_fr_1m9t47k atm_cs_10d11i2 atm_l8_1fwxnve atm_mk_h2mmj6 atm_vv_1q9ccgz atm_wq_kb7nvz atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_5j_qslrf5_vmtskl atm_6i_idpfg4_vmtskl atm_92_1yyfdc7_vmtskl atm_fq_j39m9b_vmtskl atm_mk_stnw88_vmtskl atm_n3_j39m9b_vmtskl atm_tk_idpfg4_vmtskl atm_wq_idpfg4_vmtskl atm_wq_cs5v99_1w3cfyq atm_uc_aaiy6o_9xuho3 atm_70_lgq2mu_9xuho3 atm_uc_glywfm_9xuho3_1rrf6b5 atm_wq_cs5v99_pfnrn2_1oszvuo atm_uc_aaiy6o_1buez3b_1oszvuo atm_70_lgq2mu_1buez3b_1oszvuo atm_uc_glywfm_1buez3b_1o31aam",
        container_standard: "c12nwiz6 atm_7l_dezgoh atm_26_116dmco_1rqz0hn",
        container_immersive: "cx138ae atm_7l_1p8m8iw atm_2d_135zal3_1rqz0hn",
        label: "lloffz7 atm_h_1h6ojuz atm_9s_1txwivl atm_e2_1osqo2v atm_mk_h2mmj6 atm_wq_kb7nvz",
        badge: "b1hoq0jt atm_5j_1ssbidh atm_e2_i2wt44 atm_h3_xqek8s atm_mk_stnw88 atm_n3_16flvx1 atm_tk_1ssbidh atm_vy_i2wt44 atm_wq_idpfg4",
        badge_immersive: "brmzwpd atm_2d_1p8m8iw",
        badge_standard: "b1i8pdos atm_2d_r0d14n atm_2d_wl3mcu__6ldadd"
    }
}), "872115", ["ba7a76", "ea4b89", "07aa1f", "bc1dfe", "5aed2e", "aabdb1", "450922", "196a60", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = r(d[1]),
        l = r(d[2]),
        o = r(d[3]),
        s = t(r(d[4]));
    const f = (0, l.extendStyles)(s.baseHeaderContentContainerStylesFn, (() => ({
        container: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: o.HEADER_HEIGHT
        },
        links: {
            display: 'flex',
            flex: 'auto',
            justifyContent: 'flex-end',
            marginRight: 8
        },
        actionTray: {
            position: 'fixed',
            bottom: 40,
            right: 40,
            zIndex: 100
        }
    })));
    e.default = (0, n.withStyles)(f)(s.default)
}), "9c5562", ["45f788", "e0b084", "01b367", "4f51f0", "69253d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var s = n(r(d[2])),
        u = (r(d[3]), r(d[4])),
        l = t(r(d[5])),
        o = t(r(d[6])),
        c = t(r(d[7])),
        f = t(r(d[8])),
        p = t(r(d[9])),
        h = r(d[10]),
        b = r(d[11]),
        I = t(r(d[12])),
        _ = r(d[13]),
        j = t(r(d[14])),
        v = t(r(d[15])),
        k = t(r(d[16])),
        x = r(d[17]);
    const B = "ccpkori atm_9s_1nu9bjl atm_mk_h2mmj6",
        C = 'simple-header-profile-menu';
    e.default = function({
        badge: t,
        children: n,
        initialOpen: P = !1,
        id: y,
        loggingID: M,
        renderCircleButton: O,
        onPress: T,
        src: D
    }) {
        const E = (0, u.useCx)(),
            {
                isOpen: F,
                toggleMenu: R,
                closeMenu: S,
                href: w
            } = (0, I.default)(C, P),
            A = (0, s.useRef)(null),
            K = (0, c.default)(A),
            [, L] = (0, h.useUIState)(_.ProfileButtonMenuBounds);
        (0, s.useEffect)((() => {
            L(K)
        }), [L, K]);
        const N = (0, s.useCallback)((() => {
            L(A.current ? .getBoundingClientRect())
        }), [L]);
        (0, f.default)(N);
        const U = (0, s.useCallback)((() => {
                R(), T ? .()
            }), [T, R]),
            q = (0, s.useCallback)((({
                key: t
            }) => {
                'Escape' === t && (S(), A.current && A.current.focus())
            }), [S]),
            {
                ref: z,
                onBlur: G
            } = (0, l.default)((0, b.isIos)() ? () => {} : S);
        (0, o.default)(z, (() => {
            setTimeout((() => {
                F && S()
            }), 50)
        }), !F);
        const H = O ? v.default : j.default;
        return (0, x.jsxs)("div", {
            className: E(B),
            "data-profile-menu-open": String(F),
            ref: z,
            onBlur: G,
            onKeyDown: q,
            children: [(0, x.jsx)(H, {
                badge: t,
                expanded: F,
                onPress: U,
                src: D,
                href: w,
                id: y,
                dataTestId: "cypress-headernav-profile",
                dataTooltipAnchorId: "headernav-profile-button",
                refForFocus: A
            }), (0, x.jsx)(p.default, {
                id: C,
                isOpen: F,
                loggingID: M,
                shouldLogImpression: F,
                dataTestId: C,
                children: (0, x.jsx)(k.default, {
                    onPress: S,
                    children: n
                })
            })]
        })
    }
}), "a2db86", ["ba7a76", "45f788", "07aa1f", "ea4b89", "4786a8", "70326d", "2ba23c", "9934d0", "1ff37e", "a90495", "afdc80", "e9b7bf", "81bba3", "03f648", "c46a75", "1c0480", "6a1b16", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.sharedHeaderMenuStylesCssFragments = e.default = void 0;
    r(d[1]), n(r(d[2]));
    var t = r(d[3]),
        o = r(d[4]),
        s = r(d[5]);
    e.sharedHeaderMenuStylesCssFragments = { ...o.BaseHeaderMenuCssFragments,
        container: "\n    \n    background: var(--linaria-theme_palette-white);\n    border-radius: var(--linaria-theme_corner-radius-medium12px-border-radius);\n    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);\n    color: var(--linaria-theme_palette-hof);\n    display: none;\n    margin-top: 34px;\n    padding: 8px 0;\n    position: absolute;\n    top: 50%;\n    right: 0;\n    max-height: calc(100vh - 100px);\n    overflow-y: auto;\n    z-index: 2;\n  ",
        container_open: "\n    \n    display: block;\n  ",
        container_noJs: "\n    \n\n    &:target {\n      display: block;\n    }\n\n    &:target + [href='#'] {\n      cursor: default;\n      height: 100%;\n      left: 0;\n      position: fixed;\n      top: 0;\n      width: 100%;\n      z-index: 1;\n    }\n  "
    };
    const l = (0, t.extendStyles)(o.baseHeaderMenuStylesFn, (({
        dls19: n
    }) => ({
        container: {
            background: n.palette.white,
            borderRadius: n.cornerRadius.medium,
            boxShadow: '0 2px 16px rgba(0, 0, 0, 0.12)',
            color: n.palette.hof,
            display: 'none',
            marginTop: s.HEADER_HEIGHT / 2 - 6,
            padding: '8px 0',
            position: 'absolute',
            top: '50%',
            right: 0,
            maxHeight: `calc(100vh - ${s.HEADER_HEIGHT+20}px)`,
            overflowY: 'auto',
            zIndex: 2
        },
        container_open: {
            display: 'block'
        },
        container_noJs: {
            ':target': {
                display: 'block'
            },
            ':target + [href="#"]': {
                cursor: 'default',
                height: '100%',
                left: 0,
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1
            }
        }
    })));
    e.default = l
}), "a3df60", ["ba7a76", "4786a8", "5aed2e", "01b367", "a4dca3", "4f51f0"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default,
        s = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.BaseHeaderMenu = function({
        linariaClassNames: n,
        children: s,
        id: F,
        isOpen: M,
        dataTestId: y,
        css: H,
        styles: p,
        ...v
    }) {
        const x = (0, f.useCx)(),
            C = (0, t.useRef)(null),
            h = (0, c.useInitialRender)() && !!F,
            j = M || h;
        (0, o.default)('HeaderMenu', v), (0, t.useEffect)((() => {
            M && C.current && (0, u.default)(C.current)
        }), [M]);
        const I = h && (0, b.jsx)("a", {
            href: "#",
            "aria-label": l.default.t('shared.Close')
        });
        if (!j) return null;
        return (0, b.jsxs)(b.Fragment, {
            children: [(0, b.jsx)("div", {
                className: x(n ? .container, M && n ? .container_open, h && n ? .container_noJs),
                ...(0, _.maybeRwsCss)(H, p ? .container, M && p ? .container_open, h && p ? .container_noJs),
                ref: C,
                tabIndex: -1,
                id: F,
                ...y ? {
                    'data-testid': y
                } : void 0,
                children: s
            }), I]
        })
    }, e.baseHeaderMenuStylesFn = e.BaseHeaderMenuCssFragments = void 0;
    var t = s(r(d[2])),
        l = n(r(d[3])),
        u = n(r(d[4])),
        c = r(d[5]),
        o = n(r(d[6])),
        f = r(d[7]),
        _ = r(d[8]),
        b = r(d[9]);
    const F = e.BaseHeaderMenuCssFragments = {
        container: "",
        container_open: "",
        container_noJs: ""
    };
    e.baseHeaderMenuStylesFn = (0, _.deprecatedExtendableStylesFn)('InternalHeaderMenu', (0, _.cssFragmentsObjToStylesFn)(F))
}), "a4dca3", ["ba7a76", "45f788", "07aa1f", "a9f4b1", "20f35e", "1e052a", "b7564f", "4786a8", "2d8af3", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var _ = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(_) {
        return (0, n.jsx)(s.BaseHeaderMenu, { ..._,
            linariaClassNames: l
        })
    };
    r(d[1]), _(r(d[2])), r(d[3]);
    var t = r(d[4]),
        s = r(d[5]),
        n = r(d[6]);
    t.sharedHeaderMenuStylesCssFragments;
    const l = {
        container: "c3i7glo atm_26_1p8m8iw atm_5j_kitwna atm_70_8oykxz atm_7l_dezgoh atm_9s_glywfm atm_h3_1u1b7xl atm_l8_brf0ql atm_mk_stnw88 atm_tk_1ssbidh atm_n3_idpfg4 atm_iy_1aa3ab3 atm_l1_1wugsn5 atm_wq_cs5v99 atm_jb_ghg70p",
        container_open: "c39hl9j atm_9s_1ulexfb",
        container_noJs: "c1oisl3u atm_9s_1ulexfb_sdpd2x atm_9j_73adwj_xv37a6 atm_e2_1osqo2v_xv37a6 atm_fq_idpfg4_xv37a6 atm_mk_1n9t6rb_xv37a6 atm_tk_idpfg4_xv37a6 atm_vy_1osqo2v_xv37a6 atm_wq_kb7nvz_xv37a6"
    }
}), "a90495", ["ba7a76", "ea4b89", "07aa1f", "4786a8", "a3df60", "a4dca3", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    r(d[1]), t(r(d[2])), r(d[3])
}), "a99b62", ["ba7a76", "4786a8", "5aed2e", "a81bbb"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const o = (0, t(r(d[1])).default)({
        svgContents: "<g fill=\"none\"><path d=\"M2 16h28M2 24h28M2 8h28\" /></g>",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcSystemRowsStroked', {});
    e.default = o
}), "b0b942", ["ba7a76", "9eb679"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var _ = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        forceTreatmentSizing: _ = !1,
        ...s
    }) {
        const c = _ || t.default.getBootstrap('profile-button.balanced-sizing'),
            u = (0, n.useCx)();
        return (0, l.jsx)(f.BaseProfileButton, { ...s,
            linariaClassnames: o,
            className: u(c && o.container_treatment)
        })
    };
    r(d[1]), _(r(d[2])), _(r(d[3])), _(r(d[4])), r(d[5]);
    var t = _(r(d[6])),
        n = r(d[7]),
        f = (r(d[8]), r(d[9])),
        l = r(d[10]);
    f.styleFragments;
    const o = {
        container: "cnky2vc atm_1s_glywfm atm_26_1j28jx2 atm_3f_idpfg4 atm_7l_1kw7nm4 atm_9j_tlke0l atm_9s_1o8liyq atm_bx_1kw7nm4 atm_c8_1kw7nm4 atm_cs_1kw7nm4 atm_g3_1kw7nm4 atm_gi_idpfg4 atm_kd_idpfg4 atm_ks_ewfl5b atm_l8_idpfg4 atm_r3_1kw7nm4 atm_rd_glywfm atm_vb_1wugsn5 atm_kd_glywfm atm_1ieuuo9_1ul9x4n atm_1dfygl2_or1blg atm_1lqvdwn_183y3yt atm_f4syw5_14y27yu atm_1255xc1_1fwxnve atm_1ellefq_d439wh atm_vl4zd4_12gsa0d atm_h_1h6ojuz atm_2d_1p8m8iw atm_3f_1vlbu9m atm_5j_1rwtgmb atm_7l_dezgoh atm_9s_116y0ak atm_e2_12oa1m8 atm_l8_ef04uq atm_mk_h2mmj6 atm_vh_nkobfv atm_uc_aaiy6o atm_wq_kb7nvz atm_g3_qnbkur atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_uc_glywfm__1rrf6b5 atm_uc_aaiy6o_1w3cfyq atm_70_lgq2mu_1w3cfyq atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_lgq2mu_pfnrn2_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam",
        container_treatment: "cln384f atm_1ieuuo9_1vi7ecw atm_1dfygl2_fyhuej atm_1lqvdwn_1ul9x4n atm_f4syw5_ftgil2 atm_1255xc1_dlk8xv atm_1ellefq_12etsqc atm_vl4zd4_t94yts",
        container_collapsed: "c1r2bm7w atm_70_1p8xsmn_1nos8r",
        container_expanded: "c1n94iqr atm_70_1p8xsmn",
        badge: "b1mok51j atm_2d_1bq31z8 atm_70_1fhdzc1 atm_mk_stnw88 atm_wq_kb7nvz",
        badge_empty: "b1vytxk0 atm_5j_1ssbidh atm_e2_19bvopo atm_jb_19bvopo atm_n3_1y44olf atm_tk_yh40bf",
        badge_numeric: "b139xjb3 atm_5j_dgintm atm_7l_1p8m8iw atm_c8_1np9ang atm_cs_19iasv6 atm_e2_1j6vyhq atm_jb_1j6vyhq atm_fq_1osqo2v atm_g3_exct8b atm_gz_xllv8o atm_l8_kctyac atm_r3_1h6ojuz atm_tk_1atzfvf",
        badge_appear: "b1den9qh atm_1c_9wx1ok atm_y_s28rz1 atm_1k_zzje3 atm_p_glywfm__1rrf6b5",
        face: "fs7xov7 atm_7l_1esdqks atm_am_sfpmae atm_e2_x4u3u4 atm_gz_1qdqwt3 atm_ks_15vqwwr atm_mk_h2mmj6 atm_vy_x4u3u4 atm_wq_kb7nvz"
    }
}), "c46a75", ["ba7a76", "ea4b89", "07aa1f", "bc1dfe", "5aed2e", "daa5d1", "c235f8", "4786a8", "aabdb1", "1192c5", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const o = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcCompactHostProfile16', {
        defaultSize: 16
    });
    e.default = o
}), "d6159b", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.useImmersive = e.ImmersiveContext = void 0;
    var s = t(r(d[1]));
    const o = e.ImmersiveContext = s.default.createContext(!1);
    o.displayName = 'ImmersiveContext';
    e.useImmersive = () => (0, s.useContext)(o)
}), "ed5a37", ["45f788", "07aa1f"]);
__r("a9f4b1").extend({
    "simple_nav.header.menu_label_with_notification_count": "Main navigation menu. %{smart_count} notification.||||Main navigation menu. %{smart_count} notifications.",
    "simple_nav.header.menu_label_with_notification_boolean": "Main navigation menu. Has notifications.",
    "simple_nav.header.user_menu_label": "Main navigation menu",
    "simple_nav.header.profile_menu_accessibility_label": "Profile",
    "shared.Close": "Close"
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/68de.dcbb51e44d.js.map