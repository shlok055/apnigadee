__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var s = r(d[2]),
        l = (n(r(d[3])), r(d[4])),
        u = n(r(d[5])),
        o = t(r(d[6])),
        c = n(r(d[7])),
        f = n(r(d[8])),
        p = n(r(d[9])),
        x = n(r(d[10])),
        h = n(r(d[11])),
        v = r(d[12]);

    function b(t, n) {
        const {
            title: s
        } = t;
        return { ...t,
            key: s || n
        }
    }
    e.default = (0, l.withStyles)((() => ({})))((function(t) {
        const n = (0, s.c)(14),
            {
                css: l,
                section: j
            } = t,
            P = (0, o.default)() === o.FORM_FACTOR.COMPACT,
            {
                arrangementDetails: y,
                title: I
            } = j;
        if (!y || 0 === y.length || !I) {
            let t;
            return n[0] !== j ? (t = (0, c.default)({
                expectedFields: ["arrangementDetails", "title"],
                response: j
            }), n[0] = j, n[1] = t) : t = n[1], t
        }
        let M;
        n[2] !== y ? (M = y.map(b), n[2] = y, n[3] = M) : M = n[3];
        const _ = M;
        let A;
        n[4] !== l || n[5] !== P ? (A = function(t) {
            const {
                images: n,
                subtitle: s,
                title: u
            } = t;
            if (!n || !s || !u) return (0, c.default)({
                expectedFields: ["images", "subtitle", "title"],
                response: t
            });
            const o = n[0],
                {
                    id: f
                } = o;
            return (0, v.jsx)(h.default, {
                photoId: f,
                children: t => {
                    const {
                        onPress: n
                    } = t;
                    return (0, v.jsx)("div", { ...l({
                            padding: P ? 6 : 8
                        }),
                        children: (0, v.jsx)(x.default, {
                            image: o,
                            onPress: n,
                            responsivePictureContext: {
                                maxDensity: 2,
                                viewportPercentage: [50, 30, 30, 30]
                            },
                            subtitle: s,
                            title: u
                        })
                    })
                }
            })
        }, n[4] = l, n[5] = P, n[6] = A) : A = n[6];
        const C = A,
            F = P ? -6 : -8;
        let O, w;
        return n[7] !== I ? (O = (0, v.jsx)(p.default, {
            spacingBottom: 0,
            id: "sleeping-arrangements-title",
            children: I
        }), n[7] = I, n[8] = O) : O = n[8], n[9] !== _ || n[10] !== C || n[11] !== F || n[12] !== O ? (w = (0, v.jsx)(u.default, {
            role: "region",
            "aria-labelledby": "sleeping-arrangements-title",
            "aria-roledescription": "carousel",
            children: (0, v.jsx)(f.default, {
                carouselMargin: F,
                items: _,
                numItems: 2.23,
                numItemsMediumAndAbove: 2,
                renderItem: C,
                spaceBetweenItems: 0,
                children: O
            })
        }), n[9] = _, n[10] = C, n[11] = F, n[12] = O, n[13] = w) : w = n[13], w
    }))
}), "336993", ["45f788", "ba7a76", "87eb11", "07aa1f", "e0b084", "b5f1d2", "e0b071", "5daffb", "234914", "97748d", "53599c", "409f32", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var o = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.usePhotoTourLink = l;
    var t = r(d[1]),
        n = o(r(d[2])),
        h = r(d[3]),
        s = o(r(d[4])),
        c = r(d[5]),
        u = r(d[6]);

    function l(o) {
        const n = (0, t.c)(13);
        let u;
        n[0] !== o ? (u = o || {}, n[0] = o, n[1] = u) : u = n[1];
        const {
            photoId: l,
            heroPhotoId: I
        } = u, P = (0, s.default)(), f = (0, h.useLocation)();
        let p, _, L;
        if (n[2] !== l ? (p = l && {
                photoId: l
            }, n[2] = l, n[3] = p) : p = n[3], n[4] !== I ? (_ = I && {
                heroPhotoId: I
            }, n[4] = I, n[5] = _) : _ = n[5], n[6] !== f || n[7] !== P || n[8] !== p || n[9] !== _) {
            const o = { ...P,
                ...p,
                ..._
            };
            L = (0, c.openModal)({
                screenId: "PHOTO_TOUR_SCROLLABLE",
                location: f,
                queryParams: o
            }), n[6] = f, n[7] = P, n[8] = p, n[9] = _, n[10] = L
        } else L = n[10];
        const O = L;
        let v;
        return n[11] !== O ? (v = {
            onPress: O
        }, n[11] = O, n[12] = v) : v = n[12], v
    }
    e.default = n.default.memo((function(o) {
        const n = (0, t.c)(8),
            {
                children: h,
                photoId: s,
                heroPhotoId: c
            } = o;
        let I;
        n[0] !== c || n[1] !== s ? (I = {
            photoId: s,
            heroPhotoId: c
        }, n[0] = c, n[1] = s, n[2] = I) : I = n[2];
        const {
            onPress: P
        } = l(I);
        let f, p;
        return n[3] !== h || n[4] !== P ? (f = h({
            onPress: P
        }), n[3] = h, n[4] = P, n[5] = f) : f = n[5], n[6] !== f ? (p = (0, u.jsx)(u.Fragment, {
            children: f
        }), n[6] = f, n[7] = p) : p = n[7], p
    }), (function(o, t) {
        return o.photoId === t.photoId && o.heroPhotoId === t.heroPhotoId
    }))
}), "409f32", ["ba7a76", "87eb11", "07aa1f", "1e300f", "6ff0bc", "fc4612", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var s = r(d[1]),
        c = (t(r(d[2])), t(r(d[3]))),
        o = t(r(d[4])),
        u = r(d[5]),
        l = r(d[6]);
    e.default = function(t) {
        const n = (0, s.c)(10),
            {
                accessibilityLabel: v,
                aspectRatio: p,
                baseUrl: f,
                borderRadius: b,
                displayAspectRatio: P,
                isLazy: R,
                previewEncodedPng: y,
                responsivePictureContext: _
            } = t,
            j = R ? o.default : c.default,
            x = v || "",
            w = P || p;
        let E, L;
        return n[0] !== j || n[1] !== f || n[2] !== b || n[3] !== y || n[4] !== x || n[5] !== w ? (E = (0, l.jsx)(j, {
            alt: x,
            aspectRatio: w,
            borderRadius: b,
            previewEncodedPNG: y,
            src: f
        }), n[0] = j, n[1] = f, n[2] = b, n[3] = y, n[4] = x, n[5] = w, n[6] = E) : E = n[6], n[7] !== _ || n[8] !== E ? (L = (0, l.jsx)(u.ResponsivePictureProvider, {
            value: _,
            children: E
        }), n[7] = _, n[8] = E, n[9] = L) : L = n[9], L
    }
}), "4ea0f9", ["ba7a76", "87eb11", "07aa1f", "978eb1", "3c82b4", "9d9690", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const f = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0z\" /><path fill=\"#fff\" d=\"M11.16 4.87 6.67 9.35 4.42 7.12 3.29 8.23l3.38 3.38L12.29 6z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16"
        }
    }, 'IcCompactCheckVerifiedWhite16', {
        defaultSize: 16
    });
    e.default = f
}), "51ba3a", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = r(d[1]),
        s = (t(r(d[2])), r(d[3])),
        l = t(r(d[4])),
        o = t(r(d[5])),
        c = t(r(d[6])),
        u = t(r(d[7])),
        v = t(r(d[8])),
        f = t(r(d[9])),
        p = r(d[10]);
    e.default = (0, s.withStyles)((({
        dls19: t
    }) => ({
        container: {
            height: '100%',
            width: '100%'
        },
        image: {
            position: 'relative'
        },
        title: { ...(0, v.default)(t).bodyHeading,
            marginTop: 2 * t.spacing.primitives.baseUnit
        },
        subtitle: { ...(0, v.default)(t).subtitle,
            marginTop: .5 * t.spacing.primitives.baseUnit
        },
        verifiedIcon: {
            position: 'absolute',
            left: (0, l.default)('12px'),
            bottom: 12,
            pointerEvents: 'none'
        }
    })))((function(t) {
        const s = (0, n.c)(43),
            {
                css: l,
                eventData: v,
                eventDataSchema: h,
                href: b,
                image: x,
                isVerified: j,
                lazyImage: I,
                loggingID: y,
                onPress: D,
                responsivePictureContext: P,
                styles: w,
                subtitle: _,
                title: S
            } = t,
            z = !!b || !!D;
        let C, R, T, U, E, H, L, M, O, V, k;
        return s[0] !== v || s[1] !== h || s[2] !== b || s[3] !== y || s[4] !== D ? (C = (0, p.jsx)(c.default, {
            eventData: v,
            eventDataSchema: h,
            href: b,
            loggingID: y,
            onPress: D
        }), s[0] = v, s[1] = h, s[2] = b, s[3] = y, s[4] = D, s[5] = C) : C = s[5], s[6] !== l || s[7] !== w.container ? (R = l(w.container), s[6] = l, s[7] = w.container, s[8] = R) : R = s[8], s[9] !== l || s[10] !== w.image ? (T = l(w.image), s[9] = l, s[10] = w.image, s[11] = T) : T = s[11], s[12] !== x || s[13] !== I || s[14] !== P ? (U = (0, p.jsx)(f.default, { ...x,
            aspectRatio: .6666666666666666,
            borderRadius: 8,
            isLazy: I,
            responsivePictureContext: P
        }), s[12] = x, s[13] = I, s[14] = P, s[15] = U) : U = s[15], s[16] !== l || s[17] !== j || s[18] !== w.verifiedIcon ? (E = j && (0, p.jsx)("div", { ...l(w.verifiedIcon),
            children: (0, p.jsx)(o.default, {
                decorative: !0
            })
        }), s[16] = l, s[17] = j, s[18] = w.verifiedIcon, s[19] = E) : E = s[19], s[20] !== T || s[21] !== U || s[22] !== E ? (H = (0, p.jsxs)("div", { ...T,
            children: [U, E]
        }), s[20] = T, s[21] = U, s[22] = E, s[23] = H) : H = s[23], s[24] !== l || s[25] !== w.title ? (L = l(w.title), s[24] = l, s[25] = w.title, s[26] = L) : L = s[26], s[27] !== L || s[28] !== S ? (M = (0, p.jsx)("div", { ...L,
            children: S
        }), s[27] = L, s[28] = S, s[29] = M) : M = s[29], s[30] !== l || s[31] !== w.subtitle || s[32] !== _ ? (O = _ && (0, p.jsx)("div", { ...l(w.subtitle),
            children: _
        }), s[30] = l, s[31] = w.subtitle, s[32] = _, s[33] = O) : O = s[33], s[34] !== O || s[35] !== R || s[36] !== H || s[37] !== M ? (V = (0, p.jsxs)("div", { ...R,
            children: [H, M, O]
        }), s[34] = O, s[35] = R, s[36] = H, s[37] = M, s[38] = V) : V = s[38], s[39] !== z || s[40] !== V || s[41] !== C ? (k = (0, p.jsx)(u.default, {
            when: z,
            wrapper: C,
            children: V
        }), s[39] = z, s[40] = V, s[41] = C, s[42] = k) : k = s[42], k
    }))
}), "53599c", ["ba7a76", "87eb11", "07aa1f", "e0b084", "ac6703", "51ba3a", "c0c06c", "82f5b0", "ad1abc", "4ea0f9", "b8c07d"]);
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n) {
        return `${n} ${t}`
    };
    const t = '/* @noflip */'
}), "ac6703", []);
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
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-stays-pdp-sections/sections/SleepingArrangementImages/SleepingArrangementImagesSection.693783b303.js.map