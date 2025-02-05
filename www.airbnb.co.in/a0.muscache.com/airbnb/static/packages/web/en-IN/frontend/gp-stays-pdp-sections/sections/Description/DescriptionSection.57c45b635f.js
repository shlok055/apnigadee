__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        l = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = r(d[2]),
        n = l(r(d[3])),
        u = t(r(d[4])),
        s = t(r(d[5])),
        f = t(r(d[6])),
        T = t(r(d[7])),
        c = t(r(d[8])),
        _ = r(d[9]),
        h = r(d[10]),
        O = r(d[11]),
        p = t(r(d[12])),
        N = r(d[13]),
        b = t(r(d[14])),
        v = t(r(d[15])),
        x = t(r(d[16])),
        A = t(r(d[17])),
        P = t(r(d[18])),
        j = r(d[19]);
    const y = {
        PRIMARY_BUTTON: v.default,
        PRIMARY_BUTTON_UPDATED: x.default,
        SECONDARY_BUTTON: T.default,
        TEXT_LINK: c.default
    };
    e.default = (0, N.withUrlInfo)((function(t) {
        const l = (0, o.c)(18),
            {
                buttonText: c,
                buttonComponent: N,
                fullWidthOnMobile: v,
                urlInfo: x,
                loggingData: C,
                disabled: D
            } = t,
            I = void 0 === N ? "SECONDARY_BUTTON" : N,
            M = void 0 === v || v,
            R = (0, b.default)(x.urlParams),
            [S, U] = (0, n.useState)(!1),
            w = `/contact_host/${R}/send_message${(0,P.default)(x,{addQueryPrefix:!0})}`;
        let B;
        l[0] !== w ? (B = () => {
            (0, _.pushToHistory)(w)
        }, l[0] = w, l[1] = B) : B = l[1];
        const E = B;
        let L;
        l[2] !== E ? (L = t => {
            t.preventDefault(), U(!0), u.default.isLoggedIn() ? E() : (0, h.openSignupOrLoginModal)({
                authTriggerType: O.AuthTriggerTypes.CONTACT_HOST,
                onFinishedFlow: () => E(),
                onModalClose: () => U(!1)
            })
        }, l[2] = E, l[3] = L) : L = l[3];
        const Y = L,
            F = y[I] || T.default;
        let H, $, K, Q;
        return l[4] === Symbol.for("react.memo_cache_sentinel") ? (H = (0, j.jsx)(p.default, {}), l[4] = H) : H = l[4], l[5] !== F || l[6] !== c || l[7] !== w || l[8] !== D || l[9] !== C || l[10] !== Y ? ($ = (0, j.jsx)(F, {
            href: w,
            onPress: Y,
            ...C,
            rel: "nofollow",
            disabled: D,
            children: c
        }), l[5] = F, l[6] = c, l[7] = w, l[8] = D, l[9] = C, l[10] = Y, l[11] = $) : $ = l[11], l[12] !== M || l[13] !== $ ? (K = (0, j.jsx)(s.default, {
            children: (0, j.jsx)(A.default, {
                wrapper: H,
                when: M,
                children: $
            })
        }), l[12] = M, l[13] = $, l[14] = K) : K = l[14], l[15] !== S || l[16] !== K ? (Q = (0, j.jsx)(f.default, {
            isLoading: S,
            children: K
        }), l[15] = S, l[16] = K, l[17] = Q) : Q = l[17], Q
    }))
}), "030174", ["ba7a76", "45f788", "87eb11", "07aa1f", "06a99e", "0e2da1", "b21e14", "a5bf1a", "3e8391", "7b2359", "4798c3", "5eb3f8", "c6083a", "de4273", "bf7cd5", "3c3693", "c9f2ae", "82f5b0", "b9a76c", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1]));
    var u = t(r(d[2])),
        f = t(r(d[3])),
        l = r(d[4]);
    e.default = t => (0, l.jsx)(u.default, { ...t,
        renderLoading: () => (0, l.jsx)(f.default, {})
    })
}), "0e2da1", ["ba7a76", "07aa1f", "808ed1", "b5202c", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = r(d[0]);
    e.default = function(u) {
        const n = (0, t.useRef)(null);
        return (0, t.useEffect)((() => (u && ('function' == typeof u ? u(n.current) : u.current = n.current), () => {
            u && 'function' == typeof u && u(null)
        })), [u]), n
    }
}), "0f06c3", ["07aa1f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = r(d[0]),
        n = r(d[1]),
        c = (r(d[2]), r(d[3])),
        s = r(d[4]);
    const o = (0, c.mergeStyles)(t.baseButtonLayoutCssFragments, {
        container: "\n    justify-content: space-between;\n  "
    });
    (0, n.cssFragmentsObjToStylesFn)(o);
    e.default = (0, s.createVariant)(t.BaseButtonLayout, {
        container: "cyzwz4c atm_9s_1txwivl atm_ar_vrvcex atm_h_1h6ojuz atm_fc_1h6ojuz atm_mj_glywfm atm_fc_1yb4nlp",
        content: "c1ll7htf",
        leading: "l1rfkakv",
        trailing: "t1h3wqel"
    })
}), "1437f4", ["a85898", "2d8af3", "4786a8", "aabdb1", "92749c"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    r(d[0])
}), "1b8af9", ["4786a8"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = r(d[1]),
        o = (t(r(d[2])), r(d[3])),
        u = r(d[4]),
        s = t(r(d[5])),
        c = t(r(d[6])),
        l = t(r(d[7])),
        x = t(r(d[8])),
        p = t(r(d[9])),
        f = r(d[10]);
    e.default = (0, o.withStyles)((({
        dls19: t
    }) => ({
        container: {
            marginTop: t.spacing.macro32px,
            marginBottom: t.spacing.macro32px,
            [t.responsive.queries.largeAndAbove]: {
                marginTop: t.spacing.macro24px
            }
        },
        divider: {
            height: 1,
            width: t.spacing.macro64px,
            backgroundColor: t.palette.deco,
            marginBottom: t.spacing.macro24px
        },
        quoteAndSignatureText: {
            width: '100%',
            [t.responsive.queries.largeAndAbove]: {
                width: '75%'
            }
        },
        signatureText: { ...(0, l.default)(t).bodyHeadingTall
        }
    })))((function(t) {
        const o = (0, n.c)(33),
            {
                css: l,
                quote: v,
                signature: h,
                styles: T
            } = t;
        if (!v || !h) {
            let t;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, x.default)({
                expectedFields: ["quote", "signature"]
            }), o[0] = t) : t = o[0], t
        }
        let A;
        o[1] !== v.readMoreButton ? (A = v.readMoreButton ? (0, c.default)(v.readMoreButton.loggingEventData) : null, o[1] = v.readMoreButton, o[2] = A) : A = o[2];
        const B = A;
        let b, M, _, S, q, O, j, E, N;
        return o[3] !== l || o[4] !== T.container ? (b = l(T.container), o[3] = l, o[4] = T.container, o[5] = b) : b = o[5], o[6] !== l || o[7] !== T.divider ? (M = l(T.divider), o[6] = l, o[7] = T.divider, o[8] = M) : M = o[8], o[9] !== M ? (_ = (0, f.jsx)(s.default, {
            breakpoint: u.PROGRESSIVE_BREAKPOINT_NAMES.LARGE_AND_ABOVE,
            children: (0, f.jsx)("div", { ...M
            })
        }), o[9] = M, o[10] = _) : _ = o[10], o[11] !== l || o[12] !== T.quoteAndSignatureText ? (S = l(T.quoteAndSignatureText), o[11] = l, o[12] = T.quoteAndSignatureText, o[13] = S) : S = o[13], o[14] !== B || o[15] !== v.htmlText || o[16] !== v.readMoreButton || o[17] !== v.recommendedNumberOfLines ? (q = (0, f.jsx)(p.default, {
            recommendedNumberOfLines: v.recommendedNumberOfLines,
            htmlText: v.htmlText,
            readMoreButton: v.readMoreButton,
            estimatedCharacterCountPerLine: 50,
            loggingData: B
        }), o[14] = B, o[15] = v.htmlText, o[16] = v.readMoreButton, o[17] = v.recommendedNumberOfLines, o[18] = q) : q = o[18], o[19] !== l || o[20] !== T.signatureText ? (O = l(T.signatureText), o[19] = l, o[20] = T.signatureText, o[21] = O) : O = o[21], o[22] !== h || o[23] !== O ? (j = (0, f.jsx)("div", { ...O,
            children: h
        }), o[22] = h, o[23] = O, o[24] = j) : j = o[24], o[25] !== S || o[26] !== q || o[27] !== j ? (E = (0, f.jsxs)("div", { ...S,
            children: [q, j]
        }), o[25] = S, o[26] = q, o[27] = j, o[28] = E) : E = o[28], o[29] !== b || o[30] !== _ || o[31] !== E ? (N = (0, f.jsxs)("div", { ...b,
            children: [_, E]
        }), o[29] = b, o[30] = _, o[31] = E, o[32] = N) : N = o[32], N
    }))
}), "2c4479", ["ba7a76", "87eb11", "07aa1f", "e0b084", "39778f", "378a87", "45d996", "ad1abc", "5daffb", "eb34b2", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default,
        _ = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    _(r(d[2]));
    var n = l(r(d[3])),
        t = r(d[4]),
        s = (r(d[5]), r(d[6])),
        o = r(d[7]);
    e.default = (0, s.createVariant)((function({
        linariaClassNames: l,
        breakpoint: _,
        children: s,
        inline: u
    }) {
        const A = (0, t.useCx)();
        return (0, n.default)() === n.FORM_FACTOR.COMPACT && 'smallAndAbove' !== _ ? null : (0, o.jsx)("div", {
            "data-testid": "show-at",
            "data-breakpoint": _,
            className: A(l.container, l[`${_}${u?'Inline':''}`]),
            children: s
        })
    }), {
        container: "c1ia5atz atm_9s_glywfm",
        smallAndAbove: "s1pjeim9 atm_9s_1ulexfb__kgj4qw",
        mediumAndAbove: "m16wqymh atm_9s_1ulexfb__oggzyc",
        mediumPlusAndAbove: "m1s8b9lx atm_9s_1ulexfb__1v156lz",
        largeAndAbove: "l1owez6a atm_9s_1ulexfb__qky54b",
        xlargeAndAbove: "x1cngzat atm_9s_1ulexfb__jx8car",
        smallAndAboveInline: "s15a6mpg atm_9s_1o8liyq__kgj4qw",
        mediumAndAboveInline: "mn2ygia atm_9s_1o8liyq__oggzyc",
        mediumPlusAndAboveInline: "ms15wa5 atm_9s_1o8liyq__1v156lz",
        largeAndAboveInline: "lh3ls5w atm_9s_1o8liyq__qky54b",
        xlargeAndAboveInline: "xhf2ags atm_9s_1o8liyq__jx8car"
    })
}), "378a87", ["45f788", "ba7a76", "07aa1f", "e0b071", "4786a8", "aabdb1", "92749c", "b8c07d"]);
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
    }), e.largeOutlineCssFragments = e.largeCssFragments = void 0;
    r(d[1]), n(r(d[2]));
    r(d[3]).variableName, e.largeCssFragments = {
        component: "\n    border-radius: var(--linaria-theme_corner-radius-medium12px-border-radius);\n    padding-top: 14px;\n    padding-bottom: 14px;\n    padding-left: 24px;\n    padding-right: 24px;\n    min-width: var(--dls-large-button_min-width, 112px);\n    font-size: var(--linaria-theme_typography-base-large16px-font-size); line-height: var(--linaria-theme_typography-base-large16px-line-height); letter-spacing: var(--linaria-theme_typography-base-large16px-letter-spacing);\n  "
    }, e.largeOutlineCssFragments = {
        component: "\n    border-radius: var(--linaria-theme_corner-radius-medium12px-border-radius);\n    padding-top: 13px;\n    padding-bottom: 13px;\n    padding-left: 22px;\n    padding-right: 22px;\n    min-width: var(--dls-large-button_min-width, 112px);\n    font-size: var(--linaria-theme_typography-base-large16px-font-size); line-height: var(--linaria-theme_typography-base-large16px-line-height); letter-spacing: var(--linaria-theme_typography-base-large16px-letter-spacing);\n  "
    }
}), "3f2834", ["ba7a76", "4786a8", "5aed2e", "027757"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = r(d[1]),
        l = (t(r(d[2])), r(d[3]), r(d[4])),
        o = t(r(d[5])),
        u = t(r(d[6])),
        s = t(r(d[7])),
        c = (t(r(d[8])), r(d[9])),
        f = t(r(d[10])),
        v = t(r(d[11])),
        x = t(r(d[12])),
        j = r(d[13]);
    const _ = "cl00pfn atm_h3_n9wab5";
    e.default = (0, s.default)((0, l.withSelectedUrlInfo)((({
        queryParams: t
    }) => ({
        queryParams: t
    })), (({
        queryParams: t
    }) => [t])))((function(t) {
        const l = (0, n.c)(22),
            {
                metadata: s,
                section: h
            } = t,
            q = (0, c.useCx)(),
            {
                contactHostButton: b,
                hostQuote: p,
                title: y
            } = h;
        if (!s) return null;
        let D;
        l[0] !== p ? (D = p || {}, l[0] = p, l[1] = D) : D = l[1];
        const {
            quote: E,
            signature: P
        } = D, B = Boolean(E && P);
        let T, w, C, I, N, F = null;
        if (b) {
            let t;
            l[2] !== b.loggingEventData ? (t = (0, u.default)(b.loggingEventData), l[2] = b.loggingEventData, l[3] = t) : t = l[3], F = t
        }
        return l[4] !== y ? (T = y && (0, j.jsx)(o.default, {
            spacingBottom: 2,
            children: y
        }), l[4] = y, l[5] = T) : T = l[5], l[6] !== s || l[7] !== h ? (w = (0, j.jsx)(x.default, {
            metadata: s,
            section: h
        }), l[6] = s, l[7] = h, l[8] = w) : w = l[8], l[9] !== B || l[10] !== E || l[11] !== P ? (C = B && (0, j.jsx)(v.default, {
            quote: E,
            signature: P
        }), l[9] = B, l[10] = E, l[11] = P, l[12] = C) : C = l[12], l[13] !== b || l[14] !== F || l[15] !== q ? (I = b && b.title && (0, j.jsx)("div", {
            className: q(_),
            children: (0, j.jsx)(f.default, {
                buttonText: b.title,
                loggingData: F,
                buttonComponent: "TEXT_LINK"
            })
        }), l[13] = b, l[14] = F, l[15] = q, l[16] = I) : I = l[16], l[17] !== T || l[18] !== w || l[19] !== C || l[20] !== I ? (N = (0, j.jsxs)(j.Fragment, {
            children: [T, w, C, I]
        }), l[17] = T, l[18] = w, l[19] = C, l[20] = I, l[21] = N) : N = l[21], N
    }))
}), "400548", ["ba7a76", "87eb11", "07aa1f", "ea4b89", "de4273", "97748d", "45d996", "5010f2", "5aed2e", "4786a8", "030174", "2c4479", "ed7cc2", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = r(d[0]),
        n = r(d[1]),
        l = (r(d[2]), r(d[3]));
    (0, n.cssFragmentsObjToStylesFn)({
        container: "\n    display: inline-flex;     vertical-align: bottom;     flex-direction: row;     align-items: center;     text-decoration: inherit;\n  ",
        content: "\n    /* stylelint-disable block-no-empty */     /* stylelint-enable block-no-empty */\n  ",
        leading: "\n    /* stylelint-disable block-no-empty */     /* stylelint-enable block-no-empty */\n    margin-right: 4px;\n  ",
        trailing: "\n    /* stylelint-disable block-no-empty */     /* stylelint-enable block-no-empty */\n    margin-left: 4px;\n  "
    });
    const o = (0, l.createVariant)(t.BaseLinkLayout, {
        container: "c1k1xv2h atm_9s_116y0ak atm_vh_yfq0k3 atm_ar_vrvcex atm_h_1h6ojuz atm_rd_1kw7nm4",
        leading: "l3lgk3d atm_h0_1y44olf",
        trailing: "t14l2xf1 atm_gz_1y44olf"
    });
    o.displayName = 'LinkLayout';
    e.default = o
}), "5acddf", ["78b4f2", "2d8af3", "4786a8", "92749c"]);
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
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.secondaryCssFragments = e.default = void 0;
    var o = r(d[1]);
    r(d[2]), t(r(d[3])), r(d[4]), r(d[5]);
    const l = e.secondaryCssFragments = {
        component: "\n    border-color: var(--linaria-theme_palette-border-primary); /* migrated from theme.palette.hof */\n    background: var(--linaria-theme_palette-bg-primary); /* migrated from theme.palette.white */\n    color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */\n    :focus-visible {              border-color: var(--linaria-theme_palette-border-primary); /* migrated from theme.palette.hof */       color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */       box-shadow: 0 0 0 2px var(--linaria-theme_palette-border-primary), 0 0 0 4px rgba(255, 255, 255, 0.8); /* migrated from theme         .palette.hof */          }     @supports not selector(:focus-visible) {       :focus {                border-color: var(--linaria-theme_palette-border-primary); /* migrated from theme.palette.hof */       color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */       box-shadow: 0 0 0 2px var(--linaria-theme_palette-border-primary), 0 0 0 4px rgba(255, 255, 255, 0.8); /* migrated from theme         .palette.hof */            }     }\n\n\n\n\n       \n\n    @media (hover: hover) {       &:hover {                border-color: var(--linaria-theme_palette-border-primary-hover); /* migrated from theme.palette.black */       background: var(--linaria-theme_palette-bg-primary-hover); /* migrated from theme.palette.faint */       color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */       /* we can remove this once all variants using these styles are migrated to Linaria       * this is here because RWS does not respect the ordering of keys in the        * backwards-compatible object, so we try to re-override hover styles       */       &:disabled {         border-color: var(--linaria-theme_palette-border-primary-disabled); /* migrated from theme.palette           .deco */         background: var(--linaria-theme_palette-bg-primary); /* migrated from theme.palette.white */         color: var(--linaria-theme_palette-text-primary-disabled); /* migrated from theme.palette.deco */       }            }     }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n       \n\n    &:active {\n      border-color: var(--linaria-theme_palette-border-primary-hover); /* migrated from theme.palette.black */\n      background: var(--linaria-theme_palette-bg-primary-hover); /* migrated from theme.palette.faint */\n      color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */\n    }\n\n    &:disabled {\n      border-color: var(--linaria-theme_palette-border-primary-disabled); /* migrated from theme.palette\n        .deco */\n      background: var(--linaria-theme_palette-bg-primary); /* migrated from theme.palette.white */\n      color: var(--linaria-theme_palette-text-primary-disabled); /* migrated from theme.palette.deco */\n    }\n  "
    };
    e.default = (0, o.cssFragmentsObjToStylesFn)(l)
}), "61531c", ["ba7a76", "2d8af3", "4786a8", "5aed2e", "0d3432", "aabdb1"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    e.default = t => {
        let n;
        if ('string' == typeof t) {
            if (!t.endsWith('px')) return t;
            n = parseInt(t, 10)
        } else {
            if ('number' != typeof t) return '';
            n = t
        }
        const u = n < 0,
            f = Math.abs(n) / 16 + "rem";
        return u ? `-${f}` : f
    }
}), "74aa13", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = r(d[1]);
    const o = (0, l(r(d[2])).default)({
        svgContents: "<path d=\"m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z\" fill-rule=\"evenodd\" />",
        svgProps: {
            viewBox: "0 0 18 18"
        }
    }, 'IconChevronNext', {
        svgContents: "<path d=\"m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z\" fill-rule=\"evenodd\" />",
        svgProps: {
            viewBox: "0 0 18 18"
        }
    });
    e.default = o;
    o.categories = [t.DIRECTIONS]
}), "762bb9", ["ba7a76", "72354b", "0b1a68"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.BaseLinkLayout = void 0;
    n(r(d[1]));
    var s = r(d[2]),
        t = r(d[3]),
        l = r(d[4]);
    e.BaseLinkLayout = ({
        css: n,
        styles: o,
        children: c,
        leading: y,
        trailing: b,
        linariaClassNames: p
    }) => {
        const u = (0, s.useCx)();
        return (0, l.jsxs)("span", {
            className: u(p ? .container),
            ...(0, t.maybeRwsCss)(n, o ? .container),
            children: [y && (0, l.jsx)("span", {
                className: u(p ? .leading),
                ...(0, t.maybeRwsCss)(n, o ? .leading),
                children: y
            }), (0, l.jsx)("span", {
                className: u(p ? .content),
                ...(0, t.maybeRwsCss)(n, o ? .content),
                children: c
            }), b && (0, l.jsx)("span", {
                className: u(p ? .trailing),
                ...(0, t.maybeRwsCss)(n, o ? .trailing),
                children: b
            })]
        })
    };
    (0, t.deprecatedExtendableStylesFn)('BaseLinkLayout', (0, t.cssFragmentsObjToStylesFn)({
        container: "\n    display: inline-flex;\n    vertical-align: bottom;\n    flex-direction: row;\n    align-items: center;\n    text-decoration: inherit;\n  ",
        content: "\n    /* stylelint-disable block-no-empty */\n    /* stylelint-enable block-no-empty */\n  ",
        leading: "\n    /* stylelint-disable block-no-empty */\n    /* stylelint-enable block-no-empty */\n  ",
        trailing: "\n    /* stylelint-disable block-no-empty */\n    /* stylelint-enable block-no-empty */\n  "
    }))
}), "78b4f2", ["ba7a76", "07aa1f", "4786a8", "2d8af3", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = t(r(d[1])),
        n = t(r(d[2])),
        s = (r(d[3]), r(d[4])),
        o = t(r(d[5])),
        c = t(r(d[6])),
        _ = r(d[7]);
    const f = "ldornx1 atm_mk_stnw88 atm_tk_idpfg4 atm_fq_idpfg4 atm_n3_idpfg4 atm_6i_idpfg4",
        u = "h1a2w4o2 atm_vl_15vqwwr",
        p = (0, o.default)((({
            children: t,
            isLoading: o,
            renderLoading: p,
            loading: h
        }) => {
            const v = (0, s.useCx)();
            if (!o && !h) return t;
            const x = l.default.Children.only(t);
            return x.props.disabled, l.default.cloneElement(x, {
                children: (0, _.jsxs)(_.Fragment, {
                    children: [(0, _.jsx)("span", {
                        className: v(f),
                        children: p()
                    }), (0, _.jsx)(c.default, {
                        children: n.default.t('dls.accessibility.button__loading', {
                            default: 'loading'
                        })
                    }), (0, _.jsx)("span", {
                        className: v(u),
                        children: x.props.children
                    })]
                })
            })
        }));
    e.default = p
}), "808ed1", ["ba7a76", "07aa1f", "a9f4b1", "ea4b89", "4786a8", "7837c8", "a5b4f5", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var c = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(c) {
        const n = (0, t.c)(4);
        let s, o, h;
        n[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, l.jsxs)("g", {
            transform: "translate(73 .12727)",
            fill: "#757575",
            children: [(0, l.jsx)("path", {
                d: "m6.16 5.4587v1.6387h3.922c-0.11733 0.922-0.42467 1.5953-0.89267 2.0633-0.57133 0.57067-1.464 1.2-3.0293 1.2-2.4153 0-4.3027-1.946-4.3027-4.3607s1.8873-4.3607 4.3027-4.3607c1.302 0 2.2533 0.512 2.956 1.1707l1.156-1.1567c-0.98067-0.936-2.2827-1.6533-4.112-1.6533-3.3073 0-6.088 2.6927-6.088 6s2.7807 6 6.088 6c1.7847 0 3.1313-0.58533 4.1853-1.6827 1.0827-1.0833 1.4193-2.6053 1.4193-3.8347 0-0.38-0.029333-0.73133-0.088-1.024h-5.5167"
            }), (0, l.jsx)("path", {
                d: "m16.667 4.1273c-2.1413 0-3.8873 1.6287-3.8873 3.8727 0 2.2293 1.746 3.8727 3.8873 3.8727 2.142 0 3.8873-1.6433 3.8873-3.8727 0-2.244-1.7453-3.8727-3.8873-3.8727zm0 6.2193c-1.1733 0-2.186-0.968-2.186-2.3467 0-1.3933 1.0127-2.3473 2.186-2.3473 1.1733 0 2.186 0.954 2.186 2.3473 0 1.3787-1.0127 2.3467-2.186 2.3467z"
            }), (0, l.jsx)("path", {
                d: "m35.72 4.9933h-0.058667c-0.382-0.45533-1.1153-0.866-2.0393-0.866-1.936 0-3.622 1.6867-3.622 3.8727 0 2.1707 1.686 3.8727 3.622 3.8727 0.924 0 1.6573-0.41067 2.0393-0.88h0.058667v0.54133c0 1.4813-0.792 2.2733-2.0687 2.2733-1.0413 0-1.6867-0.748-1.9507-1.3787l-1.4813 0.616c0.42533 1.0267 1.5547 2.2887 3.432 2.2887 1.9953 0 3.682-1.1733 3.682-4.034v-6.9727h-1.6133v0.66667zm-1.9507 5.3533c-1.1733 0-2.0673-0.99733-2.0673-2.3467 0-1.364 0.894-2.3473 2.0673-2.3473 1.1593 0 2.068 0.998 2.068 2.362 0 1.3493-0.90867 2.332-2.068 2.332z"
            }), (0, l.jsx)("path", {
                d: "m25.333 4.1273c-2.1413 0-3.8873 1.6287-3.8873 3.8727 0 2.2293 1.746 3.8727 3.8873 3.8727 2.142 0 3.8873-1.6433 3.8873-3.8727 0-2.244-1.7453-3.8727-3.8873-3.8727zm0 6.2193c-1.1733 0-2.1853-0.968-2.1853-2.3467 0-1.3933 1.012-2.3473 2.1853-2.3473 1.1733 0 2.186 0.954 2.186 2.3473 0 1.3787-1.0127 2.3467-2.186 2.3467z"
            }), (0, l.jsx)("path", {
                d: "m38.667 0.16h1.6733v11.713h-1.6733v-11.713z"
            }), (0, l.jsx)("path", {
                d: "m45.51 10.347c-0.86533 0-1.4813-0.39533-1.878-1.1727l5.178-2.142-0.176-0.44c-0.32267-0.86533-1.3053-2.4647-3.3147-2.4647-1.9953 0-3.6527 1.57-3.6527 3.8727 0 2.1713 1.6427 3.8727 3.8433 3.8727 1.7747 0 2.8013-1.0853 3.2267-1.7167l-1.32-0.88c-0.44 0.646-1.0413 1.0707-1.9067 1.0707zm-0.126-4.768c0.68867 0 1.272 0.35067 1.4667 0.854l-3.4973 1.45c0-1.6327 1.1547-2.304 2.0307-2.304z"
            })]
        }), n[0] = s) : s = n[0];
        n[1] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, l.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [s, (0, l.jsx)("text", {
                fill: "#000000",
                fontFamily: "Roboto",
                fontSize: "12",
                opacity: ".54",
                children: (0, l.jsx)("tspan", {
                    x: "0",
                    y: "12",
                    children: "translated by"
                })
            })]
        }), n[1] = o) : o = n[1];
        n[2] !== c ? (h = (0, l.jsx)("svg", {
            direction: "ltr",
            viewBox: "0 0 122 16",
            ...c,
            children: o
        }), n[2] = c, n[3] = h) : h = n[3];
        return h
    };
    var t = r(d[1]),
        l = (c(r(d[2])), r(d[3]))
}), "85bbbd", ["ba7a76", "87eb11", "07aa1f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.undecoratedTextLinkCssFragments = e.default = void 0;
    var t = r(d[0]),
        n = r(d[1]),
        _ = (r(d[2]), r(d[3])),
        o = r(d[4]),
        s = (r(d[5]), r(d[6]));
    const l = e.undecoratedTextLinkCssFragments = (0, _.mergeStyles)(s.baseAnchorCssFragments, {
        component: "\n    appearance: none;     background: transparent;     border: 0;     cursor: pointer;     margin: 0;     padding: 0;     user-select: auto;     &:disabled {       cursor: not-allowed;            @media (hover: hover) {       &:hover {                  text-decoration: none;              }     }        }\n    color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */\n    text-decoration: none;\n    outline: none;   &::-moz-focus-inner {     border: none;     padding: 0;     margin: 0;   }   &:focus::-moz-focus-inner {     border: none;   }   &:-moz-focusring {     outline: none;   }\n\n    :focus-visible {              color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */       border-radius: var(--linaria-theme_corner-radius-tiny4px-border-radius);            @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {       transition: none;     }     transition: box-shadow 0.2s var(--linaria-theme_motion-standard-curve-animation-timing-function);          box-shadow: 0 0 0 2px var(--linaria-theme_palette-border-primary-inverse), 0 0 0 4px var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */          }     @supports not selector(:focus-visible) {       :focus {                color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */       border-radius: var(--linaria-theme_corner-radius-tiny4px-border-radius);            @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {       transition: none;     }     transition: box-shadow 0.2s var(--linaria-theme_motion-standard-curve-animation-timing-function);          box-shadow: 0 0 0 2px var(--linaria-theme_palette-border-primary-inverse), 0 0 0 4px var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */            }     }\n\n\n\n\n\n\n       \n\n    @media (hover: hover) {       &:hover {                color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */       text-decoration: none;       /* we can remove this once all variants using these styles are migrated to Linaria       * this is here because RWS does not respect the ordering of keys in the        * backwards-compatible object, so we try to re-override hover styles       */       &:disabled {         color: var(--linaria-theme_palette-text-primary-disabled); /* migrated from theme.palette.deco */         text-decoration: none;       }            }     }\n\n\n\n\n\n\n\n\n\n\n\n       \n\n\n      &:active {\n      color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */\n      text-decoration: none;\n    }\n\n    &:focus {\n      color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */\n      text-decoration: none;\n    }\n\n    &:disabled {\n      color: var(--linaria-theme_palette-text-primary-disabled); /* migrated from theme.palette.deco */\n      text-decoration: none;\n    }\n  "
    });
    (0, n.cssFragmentsObjToStylesFn)(l);
    e.default = (0, o.createVariant)(t.BaseButtonOrAnchor, {
        base: "b19rgdxi atm_c8_1kw7nm4 atm_bx_1kw7nm4 atm_cs_1kw7nm4 atm_cd_1kw7nm4 atm_ci_1kw7nm4 atm_g3_1kw7nm4 atm_7l_1kw7nm4 atm_rd_8stvzk atm_9j_tlke0l_1nos8r_uv4tnr atm_7l_1kw7nm4_1nos8r_uv4tnr atm_rd_8stvzk_1nos8r_uv4tnr atm_7l_1kw7nm4_pfnrn2 atm_rd_8stvzk_pfnrn2",
        fullWidth: "f1a1vdfn atm_vy_1osqo2v atm_9s_1ulexfb",
        showOnlyOnKeyboardFocus: "s14eybdw atm_3f_idpfg4_1r63tcj atm_7h_hxbz6r_1r63tcj atm_7i_ysn8ba_1r63tcj atm_e2_t94yts_1r63tcj atm_ks_15vqwwr_1r63tcj atm_ks_zryt35_1r63tcj atm_l8_idpfg4_1r63tcj atm_mk_stnw88_1r63tcj atm_vv_1q9ccgz_1r63tcj atm_vy_t94yts_1r63tcj",
        component: "cnqzfl6 atm_1s_glywfm atm_26_1j28jx2 atm_3f_idpfg4 atm_9j_tlke0l atm_gi_idpfg4 atm_l8_idpfg4 atm_vb_1wugsn5 atm_7l_jt7fhx atm_rd_glywfm atm_kd_glywfm atm_9j_13gfvf7_1o5j5ji atm_rd_glywfm_1mj13j2_uv4tnr atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_jt7fhx_1w3cfyq atm_5j_1896hn4_1w3cfyq atm_uc_aaiy6o_1w3cfyq atm_70_pz9q34_1w3cfyq atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_7l_jt7fhx_pfnrn2_1oszvuo atm_5j_1896hn4_pfnrn2_1oszvuo atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_pz9q34_pfnrn2_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_7l_jt7fhx_1nos8r_uv4tnr atm_rd_glywfm_1nos8r_uv4tnr atm_7l_9vytuy_4fughm_uv4tnr atm_rd_glywfm_4fughm_uv4tnr atm_7l_jt7fhx_csw3t1 atm_rd_glywfm_csw3t1 atm_7l_jt7fhx_pfnrn2 atm_rd_glywfm_pfnrn2 atm_7l_9vytuy_1o5j5ji atm_rd_glywfm_1o5j5ji"
    })
}), "8f3f57", ["60c631", "2d8af3", "4786a8", "aabdb1", "92749c", "0d3432", "4cb147"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var _ = r(d[1]),
        s = (t(r(d[2])), r(d[3]), r(d[4]), t(r(d[5]))),
        n = t(r(d[6])),
        o = (t(r(d[7])), t(r(d[8])), t(r(d[9]))),
        l = r(d[10]),
        c = r(d[11]);
    const u = "t5p7tdn atm_7l_dezgoh atm_bx_48h72j atm_cs_10d11i2 atm_c8_sz6sci atm_g3_17zsb9a atm_fr_kzfbxz",
        v = "s1bh1tge atm_7l_1esdqks atm_bx_48h72j atm_cs_6adqpa atm_c8_km0zk7 atm_g3_18khvle atm_fr_1m9t47k atm_lo_1yuitx",
        f = "sewcpu6 atm_le_74f3fj atm_le_8opf4g__oggzyc atm_le_dm248g__qky54b";
    e.default = function(t) {
        const p = (0, _.c)(26),
            {
                children: b,
                wrapInHeadingSection: h,
                spacingBottom: x,
                spacingBottomMediumAndAbove: j,
                spacingBottomLargeAndAbove: A,
                subtitle: k,
                id: z
            } = t,
            y = void 0 === h || h,
            B = void 0 === x ? 3 : x,
            w = void 0 === j ? null : j,
            q = void 0 === A ? null : A,
            L = (0, l.useCx)();
        let M;
        p[0] !== B || p[1] !== q || p[2] !== w ? (M = {
            "--spacingBottom": B,
            "--spacingBottomMediumAndAbove": w,
            "--spacingBottomLargeAndAbove": q
        }, p[0] = B, p[1] = q, p[2] = w, p[3] = M) : M = p[3];
        const N = M;
        let H, S, C, I, O, P, D, E;
        return p[4] !== L ? (H = L(f), p[4] = L, p[5] = H) : H = p[5], p[6] !== L ? (S = L(u), p[6] = L, p[7] = S) : S = p[7], p[8] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, c.jsx)(n.default, {
            startingHeadingLevel: 2
        }), p[8] = C) : C = p[8], p[9] !== b || p[10] !== z ? (I = (0, c.jsx)(s.default, {
            id: z,
            children: b
        }), p[9] = b, p[10] = z, p[11] = I) : I = p[11], p[12] !== I || p[13] !== y ? (O = (0, c.jsx)(o.default, {
            when: y,
            wrapper: C,
            children: I
        }), p[12] = I, p[13] = y, p[14] = O) : O = p[14], p[15] !== O || p[16] !== S ? (P = (0, c.jsx)("div", {
            className: S,
            children: O
        }), p[15] = O, p[16] = S, p[17] = P) : P = p[17], p[18] !== L || p[19] !== k ? (D = k && (0, c.jsx)("div", {
            className: L(v),
            children: k
        }), p[18] = L, p[19] = k, p[20] = D) : D = p[20], p[21] !== P || p[22] !== D || p[23] !== N || p[24] !== H ? (E = (0, c.jsxs)("div", {
            style: N,
            className: H,
            children: [P, D]
        }), p[21] = P, p[22] = D, p[23] = N, p[24] = H, p[25] = E) : E = p[25], E
    }
}), "97748d", ["ba7a76", "87eb11", "07aa1f", "ea4b89", "ad1abc", "688dce", "b5f1d2", "5aed2e", "de2718", "82f5b0", "4786a8", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, {
        debounceTime: h = 200,
        widthCssVarName: c = "--dls-element-width-px",
        heightCssVarName: f = "--dls-element-height-px"
    } = {}) {
        const o = (0, n.useSignal)(t.current),
            v = (0, s.default)((({
                width: t,
                height: u
            }) => {
                o.value && (o.value.style.setProperty(c, `${t}`), o.value.style.setProperty(f, `${u}`))
            }), h);
        (0, l.useElementSize)({
            element: o,
            onSizeChanged: v
        }), (0, u.useEffect)((() => {
            o.value = t.current, t.current && v({
                width: t.current.offsetWidth,
                height: t.current.offsetHeight
            })
        }), [o, v, t])
    };
    var u = r(d[1]),
        n = r(d[2]),
        s = t(r(d[3])),
        l = r(d[4])
}), "9c3052", ["ba7a76", "07aa1f", "e086eb", "5a0957", "c376e0"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.primaryCssFragments = void 0;
    r(d[1]), n(r(d[2])), r(d[3]), r(d[4]);
    e.primaryCssFragments = {
        component: "\n    border: none;\n    background: var(--linaria-theme_palette-bg-primary-inverse);\n    color: var(--linaria-theme_palette-text-primary-inverse);\n    @media (hover: hover) {       &:hover {                background: var(--linaria-theme_palette-bg-primary-inverse-hover);       color: var(--linaria-theme_palette-text-primary-inverse);       &:disabled {            background: var(--linaria-theme_palette-bg-quaternary);   color: #c7c7c7;       }            }     }\n\n\n\n\n\n       \n    &:focus {\n      color: var(--linaria-theme_palette-text-primary-inverse);\n    }\n\n    &:active {\n      background: var(--linaria-theme_palette-bg-primary-inverse-hover);\n      color: var(--linaria-theme_palette-text-primary-inverse);\n    }\n\n    &:disabled {\n      background: var(--linaria-theme_palette-bg-quaternary);   color: #c7c7c7;\n    }\n  "
    }
}), "9d9b59", ["ba7a76", "4786a8", "5aed2e", "0d3432", "1b8af9"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.secondaryButtonCssFragments = e.default = void 0;
    var _ = r(d[0]),
        t = r(d[1]),
        s = (r(d[2]), r(d[3])),
        f = r(d[4]),
        n = r(d[5]),
        o = r(d[6]),
        y = r(d[7]),
        c = r(d[8]);
    const l = e.secondaryButtonCssFragments = (0, s.mergeStyles)(n.baseButtonCssFragments, o.dls19CssFragments, c.mediumCssFragments, y.secondaryCssFragments, {
        component: "\n      padding-top: 13px;\n      padding-bottom: 13px;\n      padding-left: 23px;\n      padding-right: 23px;\n    "
    });
    (0, t.cssFragmentsObjToStylesFn)(l);
    e.default = (0, f.createVariant)(_.BaseButtonOrAnchor, {
        base: "b1sef8f2 atm_9j_tlke0l atm_9s_1o8liyq atm_gi_idpfg4 atm_mk_h2mmj6 atm_r3_1h6ojuz atm_rd_glywfm atm_3f_uuagnh atm_70_5j5alw atm_vy_1wugsn5 atm_l8_1cudcw5 atm_26_d0eyo3 atm_7l_jt7fhx atm_c8_dlk8xv atm_bx_1kw7nm4 atm_tl_1gw4zv3 atm_9j_13gfvf7_1o5j5ji atm_k4_si67jz_1o5j5ji",
        component: "c3dg75g atm_bx_48h72j atm_c8_2x1prs atm_g3_1jbyh58 atm_fr_11a07z3 atm_cs_10d11i2 atm_5j_t09oo2 atm_6h_t94yts atm_66_nqa18y atm_kd_glywfm atm_uc_1lizyuv atm_r2_1j28jx2 atm_jb_1fkumsa atm_4b_1qnzqti atm_26_1qwqy05 atm_7l_jt7fhx atm_l8_1vkzbvs atm_uc_glywfm__1rrf6b5 atm_kd_glywfm_1w3cfyq atm_uc_aaiy6o_1w3cfyq atm_70_1b8lkes_1w3cfyq atm_3f_glywfm_e4a3ld atm_l8_idpfg4_e4a3ld atm_gi_idpfg4_e4a3ld atm_3f_glywfm_1r4qscq atm_kd_glywfm_6y7yyg atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_kd_glywfm_pfnrn2_1oszvuo atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_1b8lkes_pfnrn2_1oszvuo atm_3f_glywfm_1icshfk_1oszvuo atm_l8_idpfg4_1icshfk_1oszvuo atm_gi_idpfg4_1icshfk_1oszvuo atm_3f_glywfm_b5gff8_1oszvuo atm_kd_glywfm_2by9w9_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_tr_18md41p_csw3t1 atm_k4_kb7nvz_1o5j5ji atm_4b_1qnzqti_1w3cfyq atm_7l_jt7fhx_1w3cfyq atm_70_1e7pbig_1w3cfyq atm_4b_1qnzqti_pfnrn2_1oszvuo atm_7l_jt7fhx_pfnrn2_1oszvuo atm_70_1e7pbig_pfnrn2_1oszvuo atm_4b_lb1gtz_1nos8r_uv4tnr atm_26_zbnr2t_1nos8r_uv4tnr atm_7l_jt7fhx_1nos8r_uv4tnr atm_4b_1k0ymf0_4fughm_uv4tnr atm_26_1qwqy05_4fughm_uv4tnr atm_7l_9vytuy_4fughm_uv4tnr atm_4b_lb1gtz_csw3t1 atm_26_zbnr2t_csw3t1 atm_7l_jt7fhx_csw3t1 atm_4b_1k0ymf0_1o5j5ji atm_26_1qwqy05_1o5j5ji atm_7l_9vytuy_1o5j5ji",
        fullWidth: "f1hob1v1 atm_vy_1osqo2v",
        showOnlyOnKeyboardFocus: "szocyzv atm_3f_idpfg4_1r63tcj atm_7h_hxbz6r_1r63tcj atm_7i_ysn8ba_1r63tcj atm_e2_t94yts_1r63tcj atm_ks_15vqwwr_1r63tcj atm_ks_zryt35_1r63tcj atm_l8_idpfg4_1r63tcj atm_mk_stnw88_1r63tcj atm_vv_1q9ccgz_1r63tcj atm_vy_t94yts_1r63tcj"
    })
}), "a5bf1a", ["60c631", "2d8af3", "4786a8", "aabdb1", "92749c", "ee5719", "c642d5", "61531c", "d2e92d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.baseButtonLayoutStylesFn = e.baseButtonLayoutCssFragments = e.BaseButtonLayout = void 0;
    n(r(d[1]));
    var t = r(d[2]),
        s = r(d[3]),
        l = r(d[4]);
    e.BaseButtonLayout = ({
        css: n,
        styles: o,
        children: c,
        leading: y,
        trailing: u,
        linariaClassNames: b
    }) => {
        const p = (0, s.useCx)();
        return (0, l.jsxs)("span", {
            className: p(b ? .container),
            ...(0, t.maybeRwsCss)(n, o ? .container),
            children: [y && (0, l.jsx)("span", {
                className: p(b ? .leading),
                ...(0, t.maybeRwsCss)(n, o ? .leading),
                children: y
            }), (0, l.jsx)("span", {
                className: p(b ? .content),
                ...(0, t.maybeRwsCss)(n, o ? .content),
                children: c
            }), u && (0, l.jsx)("span", {
                className: p(b ? .trailing),
                ...(0, t.maybeRwsCss)(n, o ? .trailing),
                children: u
            })]
        })
    };
    const o = e.baseButtonLayoutCssFragments = {
        container: "\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n\n    /* The layout should not overtake pointer events from the button. */\n    pointer-events: none;\n  ",
        content: "\n    /* stylelint-disable block-no-empty */\n    /* stylelint-enable block-no-empty */\n  ",
        leading: "\n    /* stylelint-disable block-no-empty */\n    /* stylelint-enable block-no-empty */\n  ",
        trailing: "\n    /* stylelint-disable block-no-empty */\n    /* stylelint-enable block-no-empty */\n  "
    };
    e.baseButtonLayoutStylesFn = (0, t.deprecatedExtendableStylesFn)('BaseButtonLayout', (() => ({
        container: (0, t.cssFragmentToRws)(o.container),
        content: (0, t.cssFragmentToRws)(o.content),
        leading: (0, t.cssFragmentToRws)(o.leading),
        trailing: (0, t.cssFragmentToRws)(o.trailing)
    })))
}), "a85898", ["ba7a76", "07aa1f", "2d8af3", "4786a8", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.TruncatedContent = void 0;
    var u = n(r(d[2])),
        l = r(d[3]),
        s = t(r(d[4])),
        f = t(r(d[5])),
        c = r(d[6]),
        o = t(r(d[7])),
        h = t(r(d[8])),
        x = r(d[9]);

    function b({
        lineHeight: t,
        numberOfLines: n,
        minimumNumberOfLinesForTruncation: u,
        innerTextElement: l
    }) {
        if (!n) return !1;
        const s = l.offsetHeight,
            f = Math.ceil(s / t);
        return f > n && f >= (u || 0)
    }
    const L = e.TruncatedContent = (0, l.withStyles)((() => ({})))((function({
        css: t,
        lineHeight: n,
        numberOfLines: l,
        text: h,
        isExpanded: L = !1,
        fixedHeight: T = !1,
        minimumNumberOfLinesForTruncation: p,
        setIsTruncated: H = () => {},
        contentComponent: O,
        tagAllowList: j
    }) {
        const v = (0, u.useRef)(null),
            w = (0, u.useRef)(null),
            [C, E] = (0, u.useState)(!!l),
            S = (0, u.useCallback)((t => {
                H(t), E(t)
            }), [H]),
            _ = (0, u.useRef)(!l);
        return (0, u.useEffect)((() => {
            _.current || c.scheduler.postTask((() => {
                if (!v ? .current || !w.current) return;
                const t = b({
                    lineHeight: n,
                    numberOfLines: l,
                    minimumNumberOfLinesForTruncation: p,
                    innerTextElement: v.current
                });
                S(t), _.current = !0
            }))
        }), [n, p, l, S]), (0, u.useEffect)((() => {
            L && w.current && (0, f.default)(w.current, {
                preventScroll: !0
            })
        }), [L]), (0, x.jsx)("div", {
            ref: w,
            ...t(!L && !!l && C && { ...(0, s.default)({
                    numLines: l,
                    lineHeight: n
                })
            }, !L && !!l && T && {
                height: (0, o.default)(n * l + "px")
            }, {
                lineHeight: (0, o.default)(n)
            }),
            children: (0, x.jsx)("span", {
                ref: v,
                children: (0, x.jsx)(O, {
                    text: h,
                    tagAllowList: j
                })
            })
        })
    }));

    function T({
        text: t,
        tagAllowList: n
    }) {
        return (0, x.jsx)(h.default, {
            htmlString: t,
            allowlist: n || {
                a: ['href', 'target', 'title'],
                b: [],
                br: [],
                mark: [],
                xb: []
            }
        })
    }
    e.default = (0, u.memo)((t => (0, x.jsx)(L, { ...t,
        contentComponent: T
    })))
}), "c0a69e", ["ba7a76", "45f788", "07aa1f", "e0b084", "8636b4", "76a68d", "a2c93f", "74aa13", "3aec37", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var s = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.widthCssVarName = e.heightCssVarName = e.BaseButtonOrAnchor = void 0;
    var t = n(r(d[2])),
        o = (r(d[3]), r(d[4])),
        h = s(r(d[5])),
        l = s(r(d[6])),
        c = s(r(d[7])),
        u = r(d[8]),
        p = r(d[9]),
        f = r(d[10]);
    const N = ({
            linariaClassNames: s,
            children: n
        }) => {
            const t = (0, o.useCx)();
            return (0, f.jsx)("span", {
                "data-button-content": !0,
                className: t(s ? .baseButtonOrAnchorContent),
                children: n
            })
        },
        C = e.widthCssVarName = '--dls-button-or-anchor-width-px',
        b = e.heightCssVarName = '--dls-button-or-anchor-height-px';
    e.BaseButtonOrAnchor = t.default.forwardRef((({
        anchorRef: s,
        buttonRef: n,
        buttonOrAnchorRef: o,
        children: v,
        disabled: B,
        href: w,
        openInNewWindow: x,
        type: _,
        loggingID: P,
        componentName: R,
        eventData: j,
        eventDataSchema: A,
        onPress: D,
        shouldLogImpression: I,
        __happoFocus: O,
        __happoHover: V,
        linariaClassNames: y,
        ...L
    }, W) => {
        const {
            methodsWithLogging: F
        } = (0, h.default)('ButtonOrAnchor', {
            componentName: R,
            loggingID: P,
            eventData: j,
            eventDataSchema: A,
            methods: {
                onPress: D
            },
            shouldLogImpression: I
        }), S = (0, t.useRef)(null), k = !w || B, H = W || o || (k ? n : s) || S, M = (0, c.default)(H);
        if ((0, l.default)(M, {
                widthCssVarName: C,
                heightCssVarName: b
            }), k) {
            const s = w && B ? {
                'aria-disabled': !0,
                role: 'link',
                type: void 0
            } : {};
            return (0, f.jsx)(u.BaseButton, { ...L,
                linariaClassNames: y,
                onPress: F.onPress,
                buttonRef: M,
                disabled: B,
                type: _,
                "data-happo-focus": O,
                "data-happo-hover": V,
                ...s,
                children: (0, f.jsx)(N, {
                    linariaClassNames: y,
                    children: v
                })
            })
        }
        return (0, f.jsx)(p.BaseAnchor, { ...L,
            linariaClassNames: y,
            onPress: F.onPress,
            anchorRef: M,
            href: w,
            openInNewWindow: x,
            "data-happo-focus": O,
            "data-happo-hover": V,
            children: (0, f.jsx)(N, {
                linariaClassNames: y,
                children: v
            })
        })
    })), u.baseButtonCssFragments.base
}), "c272e3", ["ba7a76", "45f788", "07aa1f", "0d3432", "4786a8", "b7564f", "9c3052", "0f06c3", "ee5719", "4cb147", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default,
        t = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var u = t(r(d[2])),
        f = l(r(d[3]));
    e.default = ({
        children: l,
        ...t
    }) => {
        const n = (0, f.default)() === f.FORM_FACTOR.WIDE ? t : {
                fullWidth: !0,
                ...t
            },
            o = u.default.Children.only(l);
        return u.default.cloneElement(o, n)
    }
}), "c6083a", ["45f788", "ba7a76", "07aa1f", "e0b071"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var _ = r(d[0]),
        t = r(d[1]),
        f = r(d[2]),
        s = r(d[3]),
        c = r(d[4]),
        o = r(d[5]),
        y = r(d[6]);
    (0, t.mergeStyles)(f.baseButtonCssFragments, o.sharedCssFragments, y.largeCssFragments, c.primaryCssFragments);
    e.default = (0, _.createVariant)(s.BaseButtonOrAnchor, {
        base: "b12rk4wf atm_9j_tlke0l atm_9s_1o8liyq atm_gi_idpfg4 atm_mk_h2mmj6 atm_r3_1h6ojuz atm_rd_glywfm atm_3f_uuagnh atm_70_5j5alw atm_vy_1wugsn5 atm_l8_1cudcw5 atm_26_d0eyo3 atm_7l_jt7fhx atm_c8_dlk8xv atm_bx_1kw7nm4 atm_tl_1gw4zv3 atm_9j_13gfvf7_1o5j5ji atm_k4_si67jz_1o5j5ji",
        component: "cwnwxp7 atm_bx_48h72j atm_c8_2x1prs atm_g3_1jbyh58 atm_fr_11a07z3 atm_cs_10d11i2 atm_5j_t09oo2 atm_kd_glywfm atm_uc_1lizyuv atm_r2_1j28jx2 atm_5j_kitwna atm_l8_srw7uq atm_jb_fob7kf atm_c8_2x1prs atm_g3_1jbyh58 atm_fr_11a07z3 atm_3f_glywfm atm_26_18sdevw atm_7l_1v2u014 atm_8w_1t7jgwy atm_vz_1e032xh_wc6gzy atm_uc_1no41w5_wc6gzy atm_uc_glywfm__1rrf6b5 atm_kd_glywfm_1w3cfyq atm_uc_aaiy6o_1w3cfyq atm_70_kimi75_1w3cfyq atm_3f_glywfm_e4a3ld atm_l8_idpfg4_e4a3ld atm_gi_idpfg4_e4a3ld atm_3f_glywfm_1r4qscq atm_kd_glywfm_6y7yyg atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_kd_glywfm_pfnrn2_1oszvuo atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_kimi75_pfnrn2_1oszvuo atm_3f_glywfm_1icshfk_1oszvuo atm_l8_idpfg4_1icshfk_1oszvuo atm_gi_idpfg4_1icshfk_1oszvuo atm_3f_glywfm_b5gff8_1oszvuo atm_kd_glywfm_2by9w9_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_tr_6xh70c_1nos8r_uv4tnr atm_tr_bxuya7_xyv1yl_uv4tnr atm_tr_c3l1w2_z5n1qr_uv4tnr atm_tr_10jumgr_1pfcxat_uv4tnr atm_tr_c3l1w2_csw3t1 atm_tr_10jumgr_1ckq16h atm_k4_kb7nvz_1o5j5ji atm_26_wcf0q_1nos8r_uv4tnr atm_7l_1v2u014_1nos8r_uv4tnr atm_26_1k7rgod_4fughm_uv4tnr atm_7l_1y3v56r_4fughm_uv4tnr atm_7l_1v2u014_pfnrn2 atm_26_wcf0q_csw3t1 atm_7l_1v2u014_csw3t1 atm_26_1k7rgod_1o5j5ji atm_7l_1y3v56r_1o5j5ji",
        fullWidth: "fd3mvez atm_vy_1osqo2v",
        showOnlyOnKeyboardFocus: "s1qw7b4i atm_3f_idpfg4_1r63tcj atm_7h_hxbz6r_1r63tcj atm_7i_ysn8ba_1r63tcj atm_e2_t94yts_1r63tcj atm_ks_15vqwwr_1r63tcj atm_ks_zryt35_1r63tcj atm_l8_idpfg4_1r63tcj atm_mk_stnw88_1r63tcj atm_vv_1q9ccgz_1r63tcj atm_vy_t94yts_1r63tcj",
        baseButtonOrAnchorContent: "b1xizmay atm_9s_1o8liyq"
    })
}), "c9f2ae", ["92749c", "aabdb1", "ee5719", "c272e3", "9d9b59", "f9cfaa", "3f2834"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = r(d[2]),
        s = n(r(d[3])),
        o = (r(d[4]), t(r(d[5]))),
        u = t(r(d[6])),
        c = t(r(d[7])),
        f = t(r(d[8])),
        h = t(r(d[9])),
        x = t(r(d[10])),
        _ = n(r(d[11])),
        v = t(r(d[12])),
        b = t(r(d[13])),
        j = t(r(d[14])),
        p = r(d[15]),
        D = r(d[16]);
    const O = "d1isfkwk atm_vv_1jtmq4 atm_w4_1hnarqo",
        T = "sx1pl6d atm_h3_8tjzot",
        L = "t1q63hcl atm_gq_1ph3nq8";
    e.default = function(t) {
        const n = (0, l.c)(34),
            {
                section: N,
                metadata: F
            } = t,
            q = (0, p.useCx)(),
            w = Boolean(F ? .isElvisListing),
            {
                htmlDescription: E,
                ugcTranslationButton: S,
                showMoreDescriptionButton: A
            } = N,
            C = "hasExtraDescriptionDetails" in N && N.hasExtraDescriptionDetails,
            M = "descriptionSummary" in N ? N.descriptionSummary : null,
            y = (0, _.default)() === _.FORM_FACTOR.COMPACT,
            B = w && y && M || E,
            P = w && !y;
        let k;
        n[0] !== A ? (k = A || {}, n[0] = A, n[1] = k) : k = n[1];
        const {
            title: z,
            action: R
        } = k, [H, I] = (0, s.useState)(!1), {
            runAction: G,
            href: J
        } = (0, u.default)(R);
        let K;
        n[2] !== R ? .loggingData || n[3] !== A ? (K = A && (0, x.default)(A.loggingEventData || R ? .loggingData || null), n[2] = R ? .loggingData, n[3] = A, n[4] = K) : K = n[4];
        const Q = K;
        let U;
        n[5] !== S ? (U = S && (0, x.default)(S.loggingEventData), n[5] = S, n[6] = U) : U = n[6];
        const V = U,
            W = !y && w;
        let X, Y, Z, $, tt, et;
        return n[7] !== q || n[8] !== S || n[9] !== V ? (X = S && (0, D.jsx)("div", {
            className: q(L),
            children: (0, D.jsx)(v.default, {
                icon: S.icon,
                loggingData: V,
                subtitle: S.subtitle,
                title: S.title,
                translationState: S.translationState
            })
        }), n[7] = q, n[8] = S, n[9] = V, n[10] = X) : X = n[10], n[11] !== q ? (Y = q(O), n[11] = q, n[12] = Y) : Y = n[12], n[13] !== B || n[14] !== P ? (Z = B && B.htmlText && (0, D.jsx)(j.default, {
            lineHeight: 24,
            numberOfLines: P ? null : B.recommendedNumberOfLines,
            text: B.htmlText,
            minimumNumberOfLinesForTruncation: "minimumNumberOfLinesForTruncation" in B ? B.minimumNumberOfLinesForTruncation : B.recommendedNumberOfLines,
            setIsTruncated: I,
            tagAllowList: {
                b: [],
                br: []
            }
        }), n[13] = B, n[14] = P, n[15] = Z) : Z = n[15], n[16] !== Y || n[17] !== Z ? ($ = (0, D.jsx)("div", {
            className: Y,
            children: Z
        }), n[16] = Y, n[17] = Z, n[18] = $) : $ = n[18], n[19] !== J || n[20] !== G || n[21] !== q || n[22] !== B || n[23] !== C || n[24] !== W || n[25] !== y || n[26] !== H || n[27] !== Q || n[28] !== z ? (tt = !W && z && (!B && y || H || C) && (0, D.jsx)("div", {
            className: q(T),
            children: (0, D.jsx)(h.default, { ...Q,
                href: J,
                onPress: G,
                "aria-label": o.default.t("p3.description.show_more"),
                children: (0, D.jsx)(f.default, {
                    trailing: (0, D.jsx)(c.default, {
                        color: b.default.palette.hof,
                        decorative: !0,
                        size: 12
                    }),
                    children: z
                })
            })
        }), n[19] = J, n[20] = G, n[21] = q, n[22] = B, n[23] = C, n[24] = W, n[25] = y, n[26] = H, n[27] = Q, n[28] = z, n[29] = tt) : tt = n[29], n[30] !== X || n[31] !== $ || n[32] !== tt ? (et = (0, D.jsxs)(D.Fragment, {
            children: [X, $, tt]
        }), n[30] = X, n[31] = $, n[32] = tt, n[33] = et) : et = n[33], et
    }
}), "ed7cc2", ["ba7a76", "45f788", "87eb11", "07aa1f", "ea4b89", "a9f4b1", "3bd960", "762bb9", "5acddf", "3e8391", "45d996", "e0b071", "fdb29a", "5aed2e", "c0a69e", "4786a8", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.sharedCssFragments = void 0;
    r(d[1]), r(d[2]), n(r(d[3])), r(d[4]);
    var t = r(d[5]);
    t.widthCssVarName, t.widthCssVarName, t.heightCssVarName, t.heightCssVarName, t.widthCssVarName, t.widthCssVarName, t.heightCssVarName, t.heightCssVarName, e.sharedCssFragments = {
        component: "\n    font-family: var(--linaria-theme_typography-font-family-cereal-font-family);\n    font-size: var(--linaria-theme_typography-base-large16px-font-size); line-height: var(--linaria-theme_typography-base-large16px-line-height); letter-spacing: var(--linaria-theme_typography-base-large16px-letter-spacing);\n    font-weight: var(--linaria-theme_typography-weight-medium500);\n    border-radius: var(--linaria-theme_corner-radius-small8px-border-radius);\n    border-width: 1px;\n    border-style: solid;\n    outline: none;\n    padding-top: 14px;\n    padding-bottom: 14px;\n    padding-left: 24px;\n    padding-right: 24px;\n    transition: box-shadow 0.2s var(--linaria-theme_motion-standard-curve-animation-timing-function),\n      transform 0.1s var(--linaria-theme_motion-standard-curve-animation-timing-function);\n\n    & [data-button-content] {\n      will-change: transform;\n      transition: transform 0.1s var(--linaria-theme_motion-standard-curve-animation-timing-function);\n    }\n\n    @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {\n      transition: none;\n    }\n    -webkit-tap-highlight-color: transparent;\n    :focus-visible {                 outline: none;   &::-moz-focus-inner {     border: none;     padding: 0;     margin: 0;   }   &:focus::-moz-focus-inner {     border: none;   }   &:-moz-focusring {     outline: none;   }            @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {       transition: none;     }     transition: box-shadow 0.2s var(--linaria-theme_motion-standard-curve-animation-timing-function);          box-shadow: 0 0 0 2px var(--linaria-theme_palette-border-primary-inverse), 0 0 0 4px var(--linaria-theme_palette-border-primary);          }     @supports not selector(:focus-visible) {       :focus {                   outline: none;   &::-moz-focus-inner {     border: none;     padding: 0;     margin: 0;   }   &:focus::-moz-focus-inner {     border: none;   }   &:-moz-focusring {     outline: none;   }            @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {       transition: none;     }     transition: box-shadow 0.2s var(--linaria-theme_motion-standard-curve-animation-timing-function);          box-shadow: 0 0 0 2px var(--linaria-theme_palette-border-primary-inverse), 0 0 0 4px var(--linaria-theme_palette-border-primary);            }     }\n\n\n\n\n       \n\n    @media (hover: hover) {       &:hover {                transform: scaleX(calc((var(--dls-button-or-anchor-width-px, 100) + 2) / var(--dls-button-or-anchor-width-px, 100))) scaleY(calc((var(--dls-button-or-anchor-height-px, 102) + 2) / var(--dls-button-or-anchor-height-px, 100)));       /* stylelint-disable-next-line selector-max-type */       & [data-button-content] {         transform: scaleX(calc(1 / calc((var(--dls-button-or-anchor-width-px, 100) + 2) / var(--dls-button-or-anchor-width-px, 100)))) scaleY(calc(1 / calc((var(--dls-button-or-anchor-height-px, 102) + 2) / var(--dls-button-or-anchor-height-px, 100))));       }       &:active {         transform: scaleX(calc((var(--dls-button-or-anchor-width-px, 100) - 2) / var(--dls-button-or-anchor-width-px, 100))) scaleY(calc((var(--dls-button-or-anchor-height-px, 98) - 2) / var(--dls-button-or-anchor-height-px, 100)));         /* stylelint-disable-next-line selector-max-type */         & [data-button-content] {           transform: scaleX(calc(1 / calc((var(--dls-button-or-anchor-width-px, 100) - 2) / var(--dls-button-or-anchor-width-px, 100)))) scaleY(calc(1 / calc((var(--dls-button-or-anchor-height-px, 98) - 2) / var(--dls-button-or-anchor-height-px, 100))));         }       }            }     }\n\n\n\n\n\n\n\n\n\n\n\n\n       \n    &:active {\n      transform: scaleX(calc((var(--dls-button-or-anchor-width-px, 100) - 2) / var(--dls-button-or-anchor-width-px, 100))) scaleY(calc((var(--dls-button-or-anchor-height-px, 98) - 2) / var(--dls-button-or-anchor-height-px, 100)));\n      /* stylelint-disable-next-line selector-max-type */\n      & [data-button-content] {\n        transform: scaleX(calc(1 / calc((var(--dls-button-or-anchor-width-px, 100) - 2) / var(--dls-button-or-anchor-width-px, 100)))) scaleY(calc(1 / calc((var(--dls-button-or-anchor-height-px, 98) - 2) / var(--dls-button-or-anchor-height-px, 100))));\n      }\n    }\n\n    &:disabled {\n      opacity: 1;\n    }\n  ",
        baseButtonOrAnchorContent: "\n    display: inline-block;\n  "
    }
}), "f9cfaa", ["ba7a76", "daa5d1", "4786a8", "5aed2e", "aabdb1", "c272e3"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        l = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var s = r(d[2]),
        n = l(r(d[3])),
        c = t(r(d[4])),
        o = t(r(d[5])),
        u = t(r(d[6])),
        f = t(r(d[7])),
        h = t(r(d[8])),
        p = r(d[9]),
        x = t(r(d[10])),
        T = t(r(d[11])),
        j = t(r(d[12])),
        _ = r(d[13]),
        b = t(r(d[14])),
        y = r(d[15]);
    e.default = (0, p.withStyles)((({
        dls19: t
    }) => ({
        subtitle: { ...t.typography.base.sm,
            color: t.palette.foggy,
            marginTop: t.spacing.micro12px
        }
    })))((function(t) {
        const l = (0, s.c)(33),
            {
                css: p,
                icon: D,
                loggingData: N,
                styles: S,
                subtitle: A,
                theme: E,
                title: v,
                translationState: M
            } = t,
            [w, L] = (0, n.useState)(!1),
            F = (0, j.default)(M);
        let P;
        l[0] !== M ? (P = () => {
            L(!0), (0, _.setTranslateUgcParam)(M || "UNDEFINED")
        }, l[0] = M, l[1] = P) : P = l[1];
        const R = P;
        let U, I, O, W, z, k, q, B, C;
        if (l[2] !== w || l[3] !== F || l[4] !== M ? (U = () => {
                w && F !== M && L(!1)
            }, I = [w, F, M], l[2] = w, l[3] = F, l[4] = M, l[5] = U, l[6] = I) : (U = l[5], I = l[6]), (0, n.useEffect)(U, I), !v || !M) {
            let t;
            return l[7] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, T.default)({
                expectedFields: ["title", "translationState"]
            }), l[7] = t) : t = l[7], t
        }
        return l[8] !== D ? (O = D && (0, y.jsx)(x.default, {
            icon: D,
            size: 24
        }), l[8] = D, l[9] = O) : O = l[9], l[10] !== O || l[11] !== v ? (W = (0, y.jsx)(c.default, {
            trailing: O,
            children: v
        }), l[10] = O, l[11] = v, l[12] = W) : W = l[12], l[13] !== R || l[14] !== w || l[15] !== N || l[16] !== W ? (z = (0, y.jsx)(h.default, {
            children: (0, y.jsx)(o.default, { ...N,
                disabled: w,
                fullWidth: !0,
                onPress: R,
                children: W
            })
        }), l[13] = R, l[14] = w, l[15] = N, l[16] = W, l[17] = z) : z = l[17], l[18] !== w || l[19] !== z ? (k = (0, y.jsx)(u.default, {
            isLoading: w,
            children: z
        }), l[18] = w, l[19] = z, l[20] = k) : k = l[20], l[21] !== E || l[22] !== M ? (q = "TRANSLATED" === M && (0, y.jsx)(f.default, {
            href: "http://translate.google.com",
            openInNewWindow: !0,
            children: (0, y.jsx)(b.default, {
                style: {
                    marginTop: 1.5 * E.dls19.spacing.primitives.baseUnit
                },
                width: 122
            })
        }), l[21] = E, l[22] = M, l[23] = q) : q = l[23], l[24] !== p || l[25] !== S || l[26] !== A || l[27] !== M ? (B = ["TRANSLATED_MMT", "TRANSLATED_MMT_ON_DEMAND"].includes(M) && (0, y.jsx)("div", { ...p(S.subtitle),
            children: A
        }), l[24] = p, l[25] = S, l[26] = A, l[27] = M, l[28] = B) : B = l[28], l[29] !== k || l[30] !== q || l[31] !== B ? (C = (0, y.jsxs)(y.Fragment, {
            children: [k, q, B]
        }), l[29] = k, l[30] = q, l[31] = B, l[32] = C) : C = l[32], C
    }))
}), "fdb29a", ["ba7a76", "45f788", "87eb11", "07aa1f", "1437f4", "a5bf1a", "b21e14", "8f3f57", "0e2da1", "e0b084", "ce060d", "5daffb", "67c39a", "5dafcf", "85bbbd", "b8c07d"]);
__r("a9f4b1").extend({
    "dls.accessibility.button__loading": "loading",
    "p3.description.show_more": "Show more about this place"
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-stays-pdp-sections/sections/Description/DescriptionSection.f50c4c8250.js.map