__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = t(r(d[1])),
        _ = (r(d[2]), r(d[3])),
        s = r(d[4]),
        n = r(d[5]),
        p = r(d[6]);
    const f = (0, _.createVariant)(n.BaseSeparatedListItem, {
        prependedSeparator: "pen26si",
        listItem: "l7n4lsf atm_9s_1o8liyq_keqd55",
        appendedSeparator: "axjq0r atm_9s_glywfm"
    });
    e.default = (0, _.createVariant)((function({
        children: t,
        separator: _ = " \xb7 ",
        ...n
    }) {
        return (0, p.jsx)(s.BaseSeparatedList, {
            separator: _,
            ...n,
            children: l.Children.map(t, (t => (0, p.jsx)(f, {
                children: t
            })))
        })
    }), {
        list: "lgx66tx atm_gi_idpfg4 atm_l8_idpfg4",
        separator: "s1b4clln atm_mj_glywfm atm_vb_glywfm atm_vv_1jtmq4 atm_lk_idpfg4 atm_ll_idpfg4"
    })
}), "1cef63", ["45f788", "07aa1f", "ea4b89", "92749c", "608dc4", "aaa39d", "b8c07d"]);
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
    var s = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.BaseSeparatedList = function({
        'aria-label': s,
        Tag: c = "ol",
        children: u,
        css: h,
        itemScope: y = !1,
        itemType: S,
        linariaClassNames: b,
        separator: C,
        styles: v
    }) {
        const f = (0, n.useCx)();
        if (0 === t.Children.count(u)) return null;
        const w = (0, p.jsx)("span", {
            className: f(b ? .separator),
            ...(0, l.maybeRwsCss)(h, v ? .separator),
            "aria-hidden": "true",
            children: C
        });
        return (0, p.jsx)(c, {
            className: f(b ? .list),
            ...(0, l.maybeRwsCss)(h, v ? .list),
            itemScope: y,
            itemType: S,
            "aria-label": s,
            children: u && t.Children.map(u, ((s, n) => (0, p.jsx)(o.ListItemContext.Provider, {
                value: {
                    isLast: n === t.Children.count(u) - 1,
                    position: n + 1,
                    separator: w
                },
                children: s
            })))
        })
    }, e.baseSeparatedListStylesFn = void 0;
    var t = s(r(d[1])),
        n = r(d[2]),
        l = r(d[3]),
        o = r(d[4]),
        p = r(d[5]);
    const c = "\n    margin: 0;\n    padding: 0;\n  ",
        u = "\n    pointer-events: none;\n    user-select: none;\n    white-space: pre-wrap;\n    padding-left: 0;\n    padding-right: 0;\n  ";
    e.baseSeparatedListStylesFn = (0, l.deprecatedExtendableStylesFn)('BaseSeparatedList', (() => ({
        list: (0, l.cssFragmentToRws)(c),
        separator: (0, l.cssFragmentToRws)(u)
    })))
}), "608dc4", ["45f788", "07aa1f", "4786a8", "2d8af3", "aaa39d", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const l = (0, t(r(d[1])).default)({
        svgContents: "<path fill-rule=\"evenodd\" d=\"m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcCompactStar16', {
        defaultSize: 16
    });
    e.default = l
}), "7c5f4a", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var s = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(s) {
        const u = (0, t.c)(12),
            {
                children: n,
                experiments: o,
                nestedSubpageId: l,
                queryParams: b,
                subpageId: P,
                useReplaceHistory: f
            } = s,
            y = void 0 !== f && f;
        let I;
        u[0] !== o || u[1] !== l || u[2] !== b || u[3] !== P || u[4] !== y ? (I = {
            experiments: o,
            nestedSubpageId: l,
            queryParams: b,
            subpageId: P,
            useReplaceHistory: y
        }, u[0] = o, u[1] = l, u[2] = b, u[3] = P, u[4] = y, u[5] = I) : I = u[5];
        const {
            href: h,
            onPress: R
        } = p(I);
        let S, v;
        u[6] !== n || u[7] !== h || u[8] !== R ? (S = n({
            onPress: R,
            href: h
        }), u[6] = n, u[7] = h, u[8] = R, u[9] = S) : S = u[9];
        u[10] !== S ? (v = (0, c.jsx)(c.Fragment, {
            children: S
        }), u[10] = S, u[11] = v) : v = u[11];
        return v
    }, e.useSubpageLink = p;
    var t = r(d[1]),
        u = (s(r(d[2])), r(d[3])),
        n = s(r(d[4])),
        o = r(d[5]),
        l = r(d[6]),
        c = r(d[7]);

    function p(s) {
        const c = (0, t.c)(17),
            {
                experiments: p,
                nestedSubpageId: b,
                queryParams: P,
                subpageId: f,
                useReplaceHistory: y
            } = s,
            I = void 0 !== y && y,
            h = (0, n.default)() === n.FORM_FACTOR.COMPACT,
            R = (0, u.useLocation)(),
            S = (0, u.useRouteMatch)() ? .params;
        let v;
        c[0] !== p || c[1] !== h || c[2] !== R || c[3] !== P || c[4] !== f || c[5] !== S || c[6] !== I ? (v = s => {
            (0, o.logServerExperiments)(p, h), (0, l.handleSubpageOpen)(s || null, {
                location: R,
                queryParams: P,
                subpageId: f,
                urlParams: S,
                useReplaceHistory: I
            })
        }, c[0] = p, c[1] = h, c[2] = R, c[3] = P, c[4] = f, c[5] = S, c[6] = I, c[7] = v) : v = c[7];
        const x = v;
        let O;
        c[8] !== R || c[9] !== b || c[10] !== P || c[11] !== f || c[12] !== S ? (O = (0, l.createPath)({
            location: R,
            urlParams: S,
            subpageId: f,
            nestedSubpageId: b
        }, P), c[8] = R, c[9] = b, c[10] = P, c[11] = f, c[12] = S, c[13] = O) : O = c[13];
        const _ = O;
        let q;
        return c[14] !== _ || c[15] !== x ? (q = {
            onPress: x,
            href: _
        }, c[14] = _, c[15] = x, c[16] = q) : q = c[16], q
    }
}), "8655ae", ["45f788", "87eb11", "07aa1f", "1e300f", "e0b071", "f2fc8d", "97167f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1])), r(d[2]);
    var _ = r(d[3]),
        s = (t(r(d[4])), t(r(d[5]))),
        c = t(r(d[6])),
        l = t(r(d[7])),
        n = t(r(d[8])),
        o = t(r(d[9])),
        u = r(d[10]),
        f = r(d[11]),
        h = t(r(d[12])),
        v = t(r(d[13])),
        x = t(r(d[14])),
        z = r(d[15]),
        y = t(r(d[16])),
        j = r(d[17]);
    const k = "toieuka atm_c8_2x1prs atm_g3_1jbyh58 atm_fr_11a07z3 atm_cs_10d11i2 atm_c8_sz6sci__oggzyc atm_g3_17zsb9a__oggzyc atm_fr_kzfbxz__oggzyc",
        p = "o1kjrihn atm_c8_km0zk7 atm_g3_18khvle atm_fr_1m9t47k atm_h3_1y44olf atm_c8_2x1prs__oggzyc atm_g3_1jbyh58__oggzyc atm_fr_11a07z3__oggzyc",
        b = "rk4wssy atm_c8_km0zk7 atm_g3_18khvle atm_fr_1m9t47k atm_cs_10d11i2 atm_h3_ftgil2 atm_9s_1txwivl atm_h_1h6ojuz atm_cx_1y44olf atm_c8_2x1prs__oggzyc atm_g3_1jbyh58__oggzyc atm_fr_11a07z3__oggzyc",
        w = "ngr5sph atm_cs_6adqpa",
        N = "r1lutz1s atm_c8_o7aogt atm_c8_l52nlx__oggzyc",
        I = "s197t1q2 atm_h3_1n1ank9";
    e.default = function({
        sectionData: t
    }) {
        const L = (0, _.useCx)(),
            C = (0, h.default)(),
            D = 'compact' === (0, x.default)(),
            {
                href: E,
                onPress: P
            } = (0, f.useSubpageLink)({
                subpageId: u.SubpageId.REVIEWS,
                queryParams: { ...C,
                    checked_review_tag: void 0
                }
            }),
            {
                title: q,
                overviewItems: S,
                reviewData: T
            } = t,
            {
                reviewCountText: V,
                ratingText: A,
                isNewListing: H,
                reviewCount: M,
                ratingAccessibilityLabel: O,
                loggingEventData: R
            } = T || {},
            W = !H && M && 0 === parseInt(M, 10);
        return (0, j.jsxs)(l.default, {
            startingHeadingLevel: 2,
            children: [(0, j.jsx)("div", {
                className: L(k),
                children: (0, j.jsx)(n.default, {
                    children: q
                })
            }), (0, j.jsx)("div", {
                className: L(p),
                children: (0, j.jsx)(s.default, {
                    children: S ? .filter(o.default).map((t => t.title))
                })
            }), T && (0, j.jsxs)("div", {
                className: L(b, W && w),
                children: [(0, j.jsx)("div", {
                    className: L(I),
                    children: (0, j.jsx)(c.default, {
                        size: D ? 14 : 16,
                        decorative: !0
                    })
                }), (0, j.jsx)(y.default, {
                    children: O
                }), A && (0, j.jsx)("div", {
                    className: L(N),
                    "aria-hidden": !!O,
                    children: A
                }), A && V && (0, j.jsx)("span", {
                    "aria-hidden": "true",
                    children: "\xb7"
                }), V && (0, j.jsx)(v.default, {
                    href: E,
                    onPress: P,
                    ...(0, z.getClientLoggingEventDataViaduct)(R),
                    children: V
                })]
            })]
        })
    }
}), "8d2d01", ["ba7a76", "07aa1f", "ea4b89", "4786a8", "de2718", "1cef63", "7c5f4a", "b5f1d2", "688dce", "58861b", "d7c0b4", "8655ae", "6ff0bc", "3e8391", "e0b071", "45d996", "a5b4f5", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.BaseSeparatedListItem = function({
        children: t,
        className: c,
        css: y,
        itemProp: S,
        itemScope: b,
        itemType: u,
        linariaClassNames: x,
        styles: C,
        ...I
    }) {
        const L = (0, p.useCx)(),
            {
                isLast: v,
                position: w,
                separator: F
            } = (0, s.useContext)(o);
        return (0, l.jsxs)("li", { ...I,
            className: L(x ? .listItem, c),
            ...(0, n.maybeRwsCss)(y, C ? .listItem),
            itemProp: S,
            itemScope: b,
            itemType: u,
            children: [void 0 !== w && w > 1 ? (0, l.jsx)("span", {
                className: L(x ? .prependedSeparator),
                ...(0, n.maybeRwsCss)(y, C ? .prependedSeparator),
                children: F
            }) : null, t, void 0 === v || v ? null : (0, l.jsx)("span", {
                className: L(x ? .appendedSeparator),
                ...(0, n.maybeRwsCss)(y, C ? .appendedSeparator),
                children: F
            })]
        })
    }, e.baseSeparatedListItemStylesFn = e.ListItemContext = void 0;
    var s = t(r(d[1])),
        n = r(d[2]),
        p = r(d[3]),
        l = r(d[4]);
    const o = e.ListItemContext = (0, s.createContext)({
        separator: ' '
    });
    o.displayName = 'ListItemContext';
    const c = "\n    /* stylelint-disable block-no-empty */\n    /* stylelint-enable block-no-empty */\n  ",
        y = "\n    &:nth-of-type(1n) {\n      display: inline-block;\n    }\n  ",
        S = "\n    display: none;\n  ";
    e.baseSeparatedListItemStylesFn = (0, n.deprecatedExtendableStylesFn)('BaseSeparatedListItem', (() => ({
        prependedSeparator: (0, n.cssFragmentToRws)(c),
        listItem: (0, n.cssFragmentToRws)(y),
        appendedSeparator: (0, n.cssFragmentToRws)(S)
    })))
}), "aaa39d", ["45f788", "07aa1f", "2d8af3", "4786a8", "b8c07d"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/pdp-sbui/sections/PdpOverviewV2Section/PdpOverviewV2Section.884e60c8e5.js.map