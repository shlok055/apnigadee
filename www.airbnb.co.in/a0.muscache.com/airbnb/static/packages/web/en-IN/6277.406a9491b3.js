__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default,
        t = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getFlexTextStylesByFontSize = e.default = void 0;
    var l = t(r(d[2]));
    r(d[3]);

    function u() {
        const n = r(d[4]);
        return u = function() {
            return n
        }, n
    }
    var c = n(r(d[5])),
        h = r(d[6]),
        o = r(d[7]),
        S = r(d[8]),
        p = r(d[9]),
        s = r(d[10]);
    const H = "b1g6dlo5 atm_bb_idpfg4 atm_ax_idpfg4",
        R = "t1gpcl1t atm_w4_16rzvi6 atm_9s_1o8liyq atm_gi_idpfg4",
        f = "h1u0ctxv atm_vl_15vqwwr";
    var x = (function(n) {
            return n[n.Regular = 1] = "Regular", n[n.None = 0] = "None", n
        })(x || {}),
        v = (function(n) {
            return n[n.Small = 1] = "Small", n[n.Medium = 1.08] = "Medium", n[n.Large = 1.2] = "Large", n
        })(v || {});
    const $ = {
            az: {
                name: 'Azerbaijani',
                letterSpacing: x.Regular,
                lineHeight: v.Medium
            },
            id: {
                name: 'Indonesian',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            bs: {
                name: 'Bosnian',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            ca: {
                name: 'Catalan, Valencian',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            cs: {
                name: 'Czech',
                letterSpacing: x.Regular,
                lineHeight: v.Medium
            },
            'sr-ME': {
                name: 'Montenegrin',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            da: {
                name: 'Danish',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            de: {
                name: 'German',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            et: {
                name: 'Estonian',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            en: {
                name: 'English',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            es: {
                name: 'Spanish',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            fr: {
                name: 'French',
                letterSpacing: x.Regular,
                lineHeight: v.Medium
            },
            ga: {
                name: 'Gaelic',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            hr: {
                name: 'Croatian',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            xh: {
                name: 'Xhosa',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            zu: {
                name: 'Zulu',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            is: {
                name: 'Icelandic',
                letterSpacing: x.Regular,
                lineHeight: v.Medium
            },
            it: {
                name: 'Italian',
                letterSpacing: x.Regular,
                lineHeight: v.Medium
            },
            sw: {
                name: 'Swahili',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            lv: {
                name: 'Latvian',
                letterSpacing: x.Regular,
                lineHeight: v.Medium
            },
            lt: {
                name: 'Lithuanian',
                letterSpacing: x.Regular,
                lineHeight: v.Medium
            },
            hu: {
                name: 'Hungarian',
                letterSpacing: x.Regular,
                lineHeight: v.Medium
            },
            mt: {
                name: 'Maltese',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            ms: {
                name: 'Malay',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            nl: {
                name: 'Dutch',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            no: {
                name: 'Norwegian',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            pl: {
                name: 'Polish',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            pt: {
                name: 'Portuguese',
                letterSpacing: x.Regular,
                lineHeight: v.Medium
            },
            ro: {
                name: 'Romanian',
                letterSpacing: x.Regular,
                lineHeight: v.Medium
            },
            sq: {
                name: 'Albanian',
                letterSpacing: x.Regular,
                lineHeight: v.Medium
            },
            sk: {
                name: 'Slovak',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            sl: {
                name: 'Slovenian',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            sr: {
                name: 'Serbian',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            fi: {
                name: 'Finnish',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            sv: {
                name: 'Swedish',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            tl: {
                name: 'Tagalog',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            vi: {
                name: 'Vietnamese',
                letterSpacing: x.Regular,
                lineHeight: v.Large
            },
            tr: {
                name: 'Turkish',
                letterSpacing: x.Regular,
                lineHeight: v.Medium
            },
            el: {
                name: 'Greek',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            bg: {
                name: 'Bulgarian',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            mk: {
                name: 'Macedonian',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            ru: {
                name: 'Russian',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            uk: {
                name: 'Ukrainian',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            ka: {
                name: 'Georgian',
                letterSpacing: x.Regular,
                lineHeight: v.Medium
            },
            hy: {
                name: 'Armenian',
                letterSpacing: x.Regular,
                lineHeight: v.Large
            },
            he: {
                name: 'Hebrew',
                letterSpacing: x.Regular,
                lineHeight: v.Small
            },
            ar: {
                name: 'Arabic',
                letterSpacing: x.None,
                lineHeight: v.Large
            },
            hi: {
                name: 'Hindi',
                letterSpacing: x.None,
                lineHeight: v.Large
            },
            th: {
                name: 'Thai',
                letterSpacing: x.None,
                lineHeight: v.Large
            },
            ko: {
                name: 'Korean',
                letterSpacing: x.None,
                lineHeight: v.Large
            },
            ja: {
                name: 'Japanese',
                letterSpacing: x.None,
                lineHeight: v.Large
            },
            zh: {
                name: 'Chinese',
                letterSpacing: x.None,
                lineHeight: v.Large
            },
            'zh-TW': {
                name: 'Chinese',
                letterSpacing: x.None,
                lineHeight: v.Large
            }
        },
        M = x.Regular,
        z = v.Small,
        b = ({
            language: n = c.default.language(),
            fontSize: t
        }) => {
            const l = $[n],
                u = l ? .letterSpacing || M,
                h = l ? .lineHeight || z;
            return {
                lineHeight: (n => h * (1.628173 * n ** .8963783))(t),
                letterSpacing: (n => {
                    return u * (t = 1.644682 - .0558102 * n + 137934e-9 * n ** 2, l = -4, c = 0, Math.min(Math.max(t, l), c));
                    var t, l, c
                })(t)
            }
        };
    e.getFlexTextStylesByFontSize = b;
    e.default = ({
        className: n,
        children: t,
        height: x,
        width: v = "100%",
        minFontSize: $ = 6,
        maxFontSize: M = 150,
        groupId: z,
        isSSR: w,
        isPrecomputing: y,
        language: _ = c.default.language(),
        fontThreshold: L = .1,
        addImportantOverride: k
    }) => {
        const C = n => 'string' == typeof n ? n : `${n.toString()}px`,
            N = (0, l.useMemo)((() => (0, u().v4)()), []),
            T = (0, l.useRef)(null),
            F = (0, l.useRef)(null),
            B = (0, l.useRef)(),
            E = (0, l.useRef)(),
            [I, G] = (0, l.useState)($),
            {
                fontSizeMapByGroupId: j,
                minFontSizeByGroupId: A,
                reportFontSize: O
            } = (0, l.useContext)(p.FlexTextContext),
            P = z && j[z],
            W = P && P[N],
            q = z && A[z],
            X = (0, l.useCallback)((() => {
                T.current && F.current && (T.current.style.cssText = `\n      visibility: hidden !important;\n      height: ${x} !important;\n      width: ${C(v)} !important;\n    `)
            }), [x, v]),
            D = (0, l.useCallback)((n => {
                if (!T.current || !F.current) return;
                const {
                    lineHeight: t,
                    letterSpacing: l
                } = b({
                    language: _,
                    fontSize: n
                });
                F.current.style.cssText = `\n        font-size: ${n}px ${k?'!important':''};\n        line-height: ${t}px ${k?'!important':''};\n        letter-spacing: ${l}px ${k?'!important':''};\n        \n        ${$===n?`\n        text-overflow: ellipsis ${k?'!important':''};\n        overflow: hidden ${k?'!important':''};\n        vertical-align: top ${k?'!important':''};\n        width: 100% ${k?'!important':''};\n      `:''}`, T.current.style.cssText = `\n        height: auto ${k?'!important':''};\n        visibility: var(--view-transition_visibility, visible) ${k?'!important':''};\n        width: ${C(v)} ${k?'!important':''};\n      `, w && y && console.log('FLEX_TEXT', window.innerWidth, `\n          font-size: ${n}px ${k?'!important':''};\n          line-height: ${t}px ${k?'!important':''};\n          letter-spacing: ${l}px ${k?'!important':''};\n          `)
            }), [v, w, y, k, _]),
            V = (0, l.useCallback)(((n, t) => {
                if (F.current && T.current) {
                    let l = $,
                        u = M,
                        c = l;
                    for (; l <= u - L;) {
                        c = l + (u - l) / 2;
                        const {
                            lineHeight: h,
                            letterSpacing: o
                        } = b({
                            language: _,
                            fontSize: c
                        });
                        F.current.style.cssText = `\n          font-size: ${c}px !important;\n          line-height: ${h}px !important;\n          letter-spacing: ${o}px !important;\n        `;
                        const {
                            height: S,
                            width: p
                        } = F.current.getBoundingClientRect();
                        p <= t && S <= n ? l = c : u = c
                    }
                    return Math.floor(10 * l) / 10
                }
                return $
            }), [M, $, L, _]),
            J = (0, S.useEvent)((({
                boundingHeight: n,
                boundingWidth: t
            } = {}) => {
                if (X(), !T.current) return;
                if (!n || !t) {
                    const l = T.current.getBoundingClientRect();
                    n = l.height, t = l.width
                }
                const l = V(n, t);
                l !== I && G(l), z && W !== l && O({
                    id: N,
                    groupId: z,
                    fontSize: l
                }), D(q || l)
            }));
        (0, o.useOnResize)({
            skip: w && !y,
            element: T.current,
            onResize: ({
                height: n,
                width: t
            }) => {
                E.current === n && B.current === t || (E.current = n, B.current = t, J({
                    boundingHeight: n,
                    boundingWidth: t
                }))
            }
        }), (0, o.useOnResize)({
            skip: w && !y,
            element: F.current,
            onResize: () => J()
        }), (0, l.useLayoutEffect)((() => {
            J()
        }), [J]);
        const K = (0, h.useCx)(),
            U = l.default.Children.only(t);
        return (0, s.jsx)("div", {
            ref: T,
            className: K(H, w && y && f, n),
            style: {
                width: C(v)
            },
            children: l.default.cloneElement(U, {
                ref: F,
                className: K(U.props.className, R),
                ...w && y ? {
                    'data-test': 'flex-text'
                } : {}
            })
        })
    }
}), "20deb1", ["ba7a76", "45f788", "07aa1f", "ea4b89", "305dd5", "862e50", "4786a8", "aac0d2", "f4e9c4", "328979", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SearchHostPassportData = void 0;
    var t = r(d[0]);
    e.SearchHostPassportData = (0, t.createUIKey)('search-host-passport-data', {
        getDefault: () => null
    })
}), "27cb22", ["005fd5"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.FlexTextContext = void 0;
    var o = t(r(d[1])),
        n = r(d[2]);
    const u = e.FlexTextContext = o.default.createContext({
        fontSizeMapByGroupId: {},
        minFontSizeByGroupId: {},
        reportFontSize: () => {}
    });
    e.default = ({
        children: t
    }) => {
        const [c, l] = (0, o.useState)({}), [s, f] = (0, o.useState)({});
        return (0, n.jsx)(u.Provider, {
            value: {
                fontSizeMapByGroupId: c,
                minFontSizeByGroupId: s,
                reportFontSize: ({
                    id: t,
                    fontSize: o,
                    groupId: n
                }) => {
                    const u = c[n],
                        p = u && u[t];
                    if (!p || p !== o) {
                        const u = { ...c,
                            [n]: { ...c[n],
                                [t]: o
                            }
                        };
                        l(u);
                        const p = { ...s,
                            [n]: Math.min(...Object.values(u[n] ? ? {}))
                        };
                        f(p)
                    }
                }
            },
            children: t
        })
    }
}), "328979", ["45f788", "07aa1f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const o = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"m8.5 7.6 3.1-1.75 1.47-.82a.83.83 0 0 0 .43-.73V1.33a.83.83 0 0 0-.83-.83H3.33a.83.83 0 0 0-.83.83V4.3c0 .3.16.59.43.73l3 1.68 1.57.88c.35.2.65.2 1 0zm-.5.9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16"
        }
    }, 'IcCompactSuperhost16', {
        defaultSize: 16
    });
    e.default = o
}), "47e84a", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var s = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PASSPORT_PEAK_Y_ELEVATION = e.FRONT_PAGE_ROTATIONY_STATIC_VALUES = e.FRONT_PAGE_ANIMATION_CONFIG = e.CONTAINER_ANIMATION_CONFIG_WIDE = e.CONTAINER_ANIMATION_CONFIG_COMPACT = e.BG_COLOR_MAP = void 0, e.getInvertedTransform = function(s, t) {
        return t ? {
            x: s.x - t.x,
            y: s.y - t.y,
            scaleX: s.width / t.width,
            scaleY: s.height / t.height
        } : void 0
    };
    var t = s(r(d[1]));
    e.PASSPORT_PEAK_Y_ELEVATION = 8;
    const n = e.FRONT_PAGE_ANIMATION_CONFIG = {
            closed: {
                value: 0,
                springData: {
                    open: t.themePrimitives.motion.springs.standard.source,
                    modal: t.themePrimitives.motion.springs.standard.source
                }
            },
            open: {
                value: -30,
                springData: {
                    closed: {
                        stiffness: 210,
                        mass: 1,
                        damping: 14.5
                    },
                    modal: t.themePrimitives.motion.springs.standard.source
                }
            },
            modal: {
                value: -179.9,
                springData: {
                    closed: t.themePrimitives.motion.springs.standard.source,
                    open: t.themePrimitives.motion.springs.standard.source
                }
            }
        },
        o = (e.FRONT_PAGE_ROTATIONY_STATIC_VALUES = {
            closed: n.closed.value,
            open: n.open.value,
            modal: -180
        }, e.CONTAINER_ANIMATION_CONFIG_COMPACT = {
            modal: {
                translateX: {
                    stiffness: 505,
                    mass: 1,
                    damping: 45
                },
                translateY: {
                    stiffness: 135,
                    mass: 1,
                    damping: 16.3
                },
                scale: {
                    stiffness: 290,
                    mass: 1,
                    damping: 25.5
                }
            },
            closed: {
                translateX: {
                    stiffness: 220,
                    mass: 1,
                    damping: 30
                },
                translateY: {
                    stiffness: 1e3,
                    mass: 1,
                    damping: 63
                },
                scale: {
                    stiffness: 250,
                    mass: 1,
                    damping: 26
                }
            }
        });
    e.CONTAINER_ANIMATION_CONFIG_WIDE = {
        modal: {
            translateX: {
                stiffness: 340,
                mass: 1,
                damping: 36
            },
            translateY: {
                stiffness: 140,
                mass: 1,
                damping: 20
            },
            scale: t.themePrimitives.motion.springs.standard.source
        },
        closed: o.closed
    }, e.BG_COLOR_MAP = {
        closed: t.default.palette.bebe,
        open: t.default.palette.bebe,
        modal: t.default.palette.white
    }
}), "48c74c", ["45f788", "5aed2e"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const o = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm7 9.08-9.5 9.5-4.5-4.5L6.88 17l6.62 6.62L25.12 12 23 9.88z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcCompactVerified16', {
        defaultSize: 16
    });
    e.default = o
}), "551cbe", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var _ = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.HOST_NAME_FLEXTEXT_GROUP_ID = void 0;
    _(r(d[1])), r(d[2]);
    var t = _(r(d[3])),
        s = r(d[4]),
        n = (_(r(d[5])), _(r(d[6])), r(d[7])),
        f = r(d[8]);
    const o = "nqfd7b1 atm_c8_1s1l5wp atm_g3_1cxhbm1 atm_fr_1ulgq8t atm_cs_19iasv6 atm_7l_dezgoh",
        u = "n1u9m0fi atm_g3_1kw7nm4_1xfbuyq atm_ks_15vqwwr_1xfbuyq atm_sq_1l2sidv_1xfbuyq atm_9s_cj1kg8_1xfbuyq atm_6w_1e54zos_1xfbuyq atm_fy_cs5v99_1xfbuyq atm_ks_zryt35_1xfbuyq_1rgatj2",
        l = e.HOST_NAME_FLEXTEXT_GROUP_ID = "host-mini-passport-name-id";
    e.default = function({
        name: _,
        isEmptyStats: c
    }) {
        const x = (0, s.useCx)(),
            y = _ && _.length > 29,
            h = (0, n.modifyWordsBeforeTargetPosition)(_ || '', n.ONE_LINE_CHARACTER_LIMIT);
        return (0, f.jsx)(t.default, {
            groupId: l,
            height: "100%",
            width: "100%",
            minFontSize: 16,
            maxFontSize: 32.6,
            fontThreshold: 1,
            children: (0, f.jsx)("div", {
                className: x(o, (y || c) && u),
                children: h
            })
        })
    }
}), "5cc345", ["ba7a76", "07aa1f", "ea4b89", "20deb1", "4786a8", "5aed2e", "1cd4dc", "d0c9d2", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        _ = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var s = _(r(d[2]));
    r(d[3]);

    function n() {
        const t = r(d[4]);
        return n = function() {
            return t
        }, t
    }
    var o = t(r(d[5])),
        l = t(r(d[6])),
        c = _(r(d[7])),
        u = r(d[8]),
        f = t(r(d[9])),
        p = r(d[10]),
        j = _(r(d[11])),
        v = t(r(d[12])),
        k = r(d[13]),
        h = t(r(d[14])),
        w = r(d[15]),
        x = r(d[16]),
        b = r(d[17]),
        y = _(r(d[18])),
        q = (t(r(d[19])), t(r(d[20]))),
        N = t(r(d[21])),
        z = t(r(d[22])),
        C = t(r(d[23])),
        P = t(r(d[24])),
        R = t(r(d[25])),
        A = r(d[26]),
        I = _(r(d[27])),
        O = r(d[28]),
        T = r(d[29]);
    const $ = "0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 6px 20px rgba(0, 0, 0, 0.2)",
        E = "2px 8px 8px 2px",
        S = "24px",
        F = {
            ko: {
                REVIEW_COUNT: '\ub144'
            },
            ja: {
                REVIEW_COUNT: '\u4ef6'
            }
        },
        Y = "p1vbrzde atm_5j_1y44olf_1w3cfyq atm_lo_1skhajo_1w3cfyq atm_5j_1y44olf_pfnrn2_1oszvuo atm_lo_1skhajo_pfnrn2_1oszvuo",
        G = "pua9sv8 atm_5j_1tcgj5g_1w3cfyq atm_5j_1tcgj5g_pfnrn2_1oszvuo",
        L = "p94d7d5 atm_mk_h2mmj6",
        M = "t1ajkiyj atm_mk_stnw88 atm_tk_idpfg4 atm_fq_idpfg4 atm_vy_1osqo2v atm_e2_1osqo2v atm_mj_1wugsn5 atm_uc_6deco",
        X = "t3omk46 atm_tr_1kyj9he",
        D = "cpkqjin atm_3f_glywfm atm_u7_rbkwn0 atm_mk_h2mmj6 atm_e2_t9kd1m atm_vy_1fwpi09 atm_9j_tlke0l atm_m1_1edtaox atm_tw_1ntyxcy atm_gz_1wugsn5 atm_r2_1j28jx2 atm_uc_1vvidi0",
        W = "c1ayvf3m atm_9s_1txwivl atm_fc_1h6ojuz atm_ar_1sxnojn atm_h_1h6ojuz atm_e2_1osqo2v atm_vy_1osqo2v atm_26_1p8m8iw atm_5j_1tcgj5g atm_9s_1ulexfb_9in345 atm_fq_idpfg4_9in345 atm_vy_1osqo2v_9in345 atm_92_1yyfdc7_9in345 atm_e2_1osqo2v_9in345 atm_mk_stnw88_9in345 atm_tk_idpfg4_9in345 atm_26_1j28jx2_9in345 atm_wq_1mrwo0b_9in345 atm_5j_1tcgj5g_9in345 atm_70_1mns66k_9in345 atm_k4_11a8hzx_9in345 atm_9s_1ulexfb__kgj4qw atm_e2_163w7gr__kgj4qw atm_vy_1ssbidh__kgj4qw atm_m4_nyh4og__kgj4qw atm_m1_1ntafio__kgj4qw atm_26_1j28jx2__kgj4qw atm_5j_n7od8j__kgj4qw atm_vy_15obr2h_9in345_kgj4qw atm_fq_pwvux5_9in345_kgj4qw atm_26_1p8m8iw_1kdo3jj",
        V = "cbc7g6s atm_e2_p2n4d6__kgj4qw",
        B = "c8f3yyz atm_k4_idpfg4 atm_vl_15vqwwr atm_mj_glywfm",
        U = "f1es8yjl atm_u7_rbkwn0 atm_tw_2bppm8 atm_mk_stnw88 atm_vy_1osqo2v atm_e2_1osqo2v atm_tk_idpfg4 atm_fq_idpfg4 atm_26_1j28jx2 atm_9s_1txwivl atm_fc_esu3gu atm_h_1h6ojuz atm_tr_1pgrs1l atm_5j_1vi8dyk atm_70_832ilp",
        H = "fv4a5id atm_mk_pfqszd atm_tr_1x77qe9 atm_lo_p5ox87 atm_mk_stnw88__kgj4qw atm_lo_idpfg4__kgj4qw atm_tr_1pgrs1l__kgj4qw",
        K = "f12xh96l atm_26_1p8m8iw__kgj4qw",
        J = "f1d6ozm atm_9s_1ulexfb__kgj4qw atm_fq_idpfg4__kgj4qw atm_vy_1fwxnve__kgj4qw atm_tr_zr6sja__kgj4qw atm_92_1yyfdc7__kgj4qw atm_e2_1osqo2v__kgj4qw atm_mk_stnw88__kgj4qw atm_tk_idpfg4__kgj4qw atm_wq_kb7nvz__kgj4qw atm_26_1p8m8iw__kgj4qw",
        Q = "f1semt8w atm_vy_or1blg atm_e2_or1blg atm_5j_1ssbidh atm_mk_h2mmj6 atm_tr_niu2ik atm_92_1yyfdc7_9in345 atm_9s_1ulexfb_9in345 atm_vy_1osqo2v_9in345 atm_e2_1osqo2v_9in345 atm_mk_stnw88_9in345 atm_tk_idpfg4_9in345 atm_fq_idpfg4_9in345 atm_5j_1ssbidh_9in345 atm_70_1469882_9in345",
        Z = "bn7xl62 atm_9s_kr2dr5 atm_u7_rbkwn0 atm_tw_2bppm8 atm_mk_stnw88 atm_vy_1osqo2v atm_e2_1osqo2v atm_tk_idpfg4 atm_fq_idpfg4 atm_fc_h9n0ih atm_h_1h6ojuz atm_26_1f9nufp atm_ks_15vqwwr atm_5j_tde5bq atm_70_1uj9ngt",
        tt = "bcsp8l9 atm_mk_pfqszd atm_fc_v2br90 atm_l8_p5ox87 atm_26_1j28jx2 atm_26_17kkrw__kgj4qw atm_mk_stnw88__kgj4qw atm_fc_h9n0ih__kgj4qw atm_l8_idpfg4__kgj4qw atm_5j_xe3nr7_10saat9",
        at = "fu3vcce atm_26_1p8m8iw__kgj4qw atm_n3_1ssbidh_j19rpi",
        _t = "b1l05xed atm_26_1p8m8iw__kgj4qw",
        et = "m15i2fqj atm_vy_1osqo2v atm_e2_1osqo2v atm_22_15vqwwr atm_9s_1txwivl atm_fc_1h6ojuz atm_h_1h6ojuz atm_ar_1bp4okc atm_tr_1t49dy0 atm_5j_36csti atm_92_1yyfdc7_9in345 atm_vy_1osqo2v_9in345 atm_e2_1osqo2v_9in345 atm_mk_stnw88_9in345 atm_tk_idpfg4_9in345 atm_fq_idpfg4_9in345 atm_26_1p8m8iw_9in345 atm_wq_1mrwo0b_9in345 atm_k4_1ssxwux_9in345 atm_tr_nymdz_9in345 atm_5j_7dv86c_9in345 atm_lk_m6gij7__kgj4qw atm_26_1p8m8iw__kgj4qw atm_9s_1ulexfb_9in345_kgj4qw atm_5j_123hlw6_10saat9",
        st = "m1g0b7mv atm_lk_idpfg4 atm_mk_stnw88__kgj4qw atm_n3_1ssbidh__kgj4qw atm_26_1j28jx2__kgj4qw atm_5j_123hlw6_10saat9 atm_gx_qkx992_10saat9_kgj4qw atm_fq_1ssbidh_9in345 atm_5j_123hlw6_9in345",
        nt = "mhsg6o atm_tr_tjklw7 atm_26_1j28jx2__kgj4qw atm_mk_stnw88__kgj4qw atm_fq_pwvux5__kgj4qw atm_wq_cs5v99__kgj4qw",
        mt = "m2g9na3 atm_fq_qkx992__kgj4qw",
        rt = "f1vqusla atm_vy_1osqo2v atm_e2_1osqo2v atm_mk_stnw88 atm_9s_1txwivl atm_fc_1h6ojuz atm_h_1h6ojuz atm_lj_yh40bf atm_26_10aj9yx atm_70_nc9lvp atm_5j_1ec1ykm atm_92_1yyfdc7_vmtskl atm_9s_1ulexfb_vmtskl atm_vy_1osqo2v_vmtskl atm_e2_1osqo2v_vmtskl atm_mk_stnw88_vmtskl atm_tk_idpfg4_vmtskl atm_fq_idpfg4_vmtskl atm_70_169ibfi_vmtskl atm_5j_1ec1ykm_vmtskl atm_92_1yyfdc7_9in345 atm_9s_1ulexfb_9in345 atm_vy_t94yts_9in345 atm_e2_1osqo2v_9in345 atm_mk_stnw88_9in345 atm_tk_idpfg4_9in345 atm_fq_1l7b3ar_9in345 atm_70_1hcnudw_9in345 atm_5j_n8l0hl_10saat9 atm_5j_n8l0hl_novsle",
        it = "f1eafsii atm_22_15vqwwr atm_tr_so94a2",
        ot = "pr338pu atm_mk_h2mmj6 atm_vy_e2f67q atm_e2_e2f67q",
        lt = "m1aimw63 atm_r3_1h6ojuz atm_mk_h2mmj6 atm_vy_1wo1fu1 atm_e2_1l27eb7 atm_h3_1yuitx",
        ct = "mwimo4t atm_9s_1txwivl atm_ar_1bp4okc atm_fc_esu3gu",
        dt = "mrtt428 atm_vy_15obr2h atm_vv_1q9ccgz atm_r3_1h6ojuz",
        ut = "n18edcam atm_c8_1s1l5wp atm_g3_1cxhbm1 atm_fr_1ulgq8t atm_cs_19iasv6 atm_7l_dezgoh",
        gt = "tu8fm8b atm_c8_km0zk7 atm_g3_18khvle atm_fr_1m9t47k atm_cs_10d11i2 atm_7l_dezgoh atm_9s_1txwivl atm_h_1h6ojuz atm_fc_1h6ojuz atm_cx_1lkvw50",
        ft = "b1oeqwz3 atm_mk_stnw88 atm_n3_4h84z3 atm_6i_1y44olf",
        pt = "sc91o9n atm_vy_1vi7ecw atm_e2_1vi7ecw atm_26_lq1x0x atm_70_si5iqj atm_5j_1ssbidh atm_mk_stnw88 atm_n3_myb0kj atm_6i_1y44olf atm_9s_1txwivl atm_fc_1h6ojuz atm_h_1h6ojuz",
        jt = "s1bvye8w atm_vy_1osqo2v atm_9s_1txwivl atm_ar_1bp4okc atm_cx_p5ox87 atm_7l_dezgoh atm_tw_1sdx7le atm_tr_1a4s327 atm_am_11btet5__kgj4qw",
        vt = "s18cryr5 atm_mk_h2mmj6 atm_9s_1txwivl atm_ar_1bp4okc atm_92_1yyfdc7_9in345 atm_9s_1ulexfb_9in345 atm_vy_1osqo2v_9in345 atm_e2_t94yts_9in345 atm_mk_stnw88_9in345 atm_6i_zt4szt_9in345 atm_fq_idpfg4_9in345 atm_26_1oqmvsg_9in345 atm_k4_dzwcw0_9in345 atm_9s_glywfm_1s751so atm_ar_1sxnojn_tvwu7j atm_tr_mgpjcm__kgj4qw atm_vy_rw9lz9_9in345_kgj4qw",
        kt = "s18tkr8q atm_c8_sz6sci atm_g3_17zsb9a atm_fr_kzfbxz atm_cs_19iasv6 atm_fr_1gs3wz6 atm_9s_1txwivl atm_h_1h6ojuz atm_cx_1lkvw50 atm_h_1q9ycp6_tvwu7j",
        ht = "shj48rt atm_c8_1np9ang atm_g3_1ba0jxt atm_fr_1gtjux9 atm_cs_10d11i2 atm_g3_dlk8xv",
        wt = "s7d2wzj atm_g3_19bvopo atm_ks_15vqwwr atm_sq_1l2sidv atm_9s_cj1kg8 atm_6w_1e54zos atm_fy_kb7nvz atm_le_14y27yu atm_ks_zryt35__1rgatj2",
        xt = "r1mf0bkd atm_ar_1sxnojn",
        bt = "ayj0n7a atm_h_esu3gu",
        yt = "v1mi1nj5 atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_15vqwwr atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts";

    function qt({
        listingId: t,
        ratingCount: _
    }) {
        const s = (0, u.useCx)();
        return _ && 0 !== _ ? (0, T.jsxs)("div", {
            className: s(vt, xt),
            role: "group",
            "aria-label": o.default.t('hosts.passport.listing.specific.reviews_a11y_label', {
                smart_count: _
            }) || void 0,
            children: [(0, T.jsxs)("div", {
                className: s(kt, bt),
                children: [_, (0, T.jsx)("span", {
                    className: s(ht, wt),
                    children: o.default.t('passport.stat.reviews.unit')
                })]
            }), (0, T.jsx)("div", {
                className: s(ht),
                children: o.default.t('passport.stat.reviews.label')
            })]
        }, `${t}-rating-count-stats`) : null
    }

    function Nt({
        listingId: t,
        ratingAverage: _
    }) {
        const s = (0, u.useCx)();
        return null == _ ? null : (0, T.jsxs)("div", {
            className: s(vt, xt),
            role: "group",
            "aria-label": o.default.t('hosts.passport.listing.specific.rating_a11y_label', {
                rating: _
            }),
            children: [(0, T.jsxs)("div", {
                className: s(kt),
                children: [_, (0, T.jsx)(z.default, {
                    decorative: !0,
                    size: 14
                })]
            }), (0, T.jsx)("div", {
                className: s(ht),
                children: o.default.t('hosts.passport.Rating')
            })]
        }, `${t}-rating-average-stats`)
    }

    function zt({
        listingId: t,
        timeAsHost: _
    }) {
        const s = (0, u.useCx)();
        if (null == _) return null;
        const n = _.months ? ? 0,
            l = _.years ? ? 0,
            c = l > 0,
            f = l + (n >= 6 ? 1 : 0),
            p = o.default.t('passport.stat.time_as_host.label'),
            j = c ? o.default.t('passport.stat.years.unit') : o.default.t('passport.stat.months.unit'),
            v = c ? o.default.t('hosts.passport.hosting.year.a11y_label', {
                smart_count: l
            }) : o.default.t('hosts.passport.hosting.month.a11y_label', {
                smart_count: n
            });
        return (0, T.jsxs)("div", {
            className: s(vt, xt),
            role: "group",
            "aria-label": v,
            children: [(0, T.jsxs)("div", {
                className: s(kt, bt),
                children: [c ? f : n, (0, T.jsx)("span", {
                    className: s(ht, wt),
                    children: j
                })]
            }), (0, T.jsx)("div", {
                className: s(ht),
                children: p
            })]
        }, `${t}-time-as-host-stats`)
    }

    function Ct({
        isVerified: t,
        isSuperhost: _,
        thumbnailUrl: n,
        isEmptyStats: l,
        name: f,
        titleText: p,
        cardState: j,
        placement: h,
        modalContentRef: w,
        modalContentPlacement: y
    }) {
        const z = (0, u.useCx)(),
            C = (0, s.useContext)(x.FlexTextContext),
            P = (0, A.modifyWordsBeforeTargetPosition)(f || '', A.ONE_LINE_CHARACTER_LIMIT),
            R = f && f.length > 29,
            O = C.minFontSizeByGroupId[I.HOST_NAME_FLEXTEXT_GROUP_ID],
            {
                lineHeight: $,
                letterSpacing: E
            } = O ? (0, b.getFlexTextStylesByFontSize)({
                fontSize: O
            }) : {
                lineHeight: 0,
                letterSpacing: 0
            };
        return (0, T.jsxs)("div", {
            "aria-hidden": 'back-page' === y,
            ref: w,
            className: z(et, l && st, 'back-page' === y && nt, l && 'back-page' === y && mt),
            children: [(0, T.jsxs)("div", {
                className: z(ot),
                children: [(0, T.jsx)(k.ResponsivePictureProvider, {
                    value: {
                        imageWidth: 240,
                        maxDensity: 1
                    },
                    children: (0, T.jsx)(v.default, {
                        src: n,
                        aspectRatio: 1,
                        borderRadius: "50%"
                    })
                }), (_ || t) && (0, T.jsx)("div", {
                    className: z(pt),
                    children: (0, T.jsx)(q.default, {
                        accessibilityLabel: o.default.t('pwaExplore.map.verified_label'),
                        color: c.default.palette.white
                    })
                })]
            }), (0, T.jsxs)("div", {
                className: z(lt, R && ct, l && dt),
                children: ['modal' !== j && 'portal' !== h || !O ? (0, T.jsx)(I.default, {
                    name: f,
                    isEmptyStats: l
                }) : (0, T.jsx)("div", {
                    className: z(ut),
                    style: {
                        fontSize: O,
                        lineHeight: `${$}px`,
                        letterSpacing: `${E}px`
                    },
                    children: P
                }), R && _ && (0, T.jsx)("div", {
                    className: z(ft),
                    children: (0, T.jsx)(N.default, {
                        decorative: !0,
                        size: 12
                    })
                }), p && !R && (0, T.jsxs)("div", {
                    className: z(gt),
                    children: [_ && (0, T.jsx)(N.default, {
                        decorative: !0,
                        size: 12
                    }), p]
                })]
            })]
        })
    }
    e.default = s.default.memo((function({
        cardState: t = "closed",
        cardVisibility: _ = "visible",
        placement: x,
        onPress: b,
        thumbnailUrl: q,
        name: N,
        titleText: A,
        stats: I,
        timeAsHost: et,
        ratingAverage: st,
        ratingCount: nt,
        isSuperhost: mt,
        isVerified: ot,
        href: lt,
        onAnimationEnd: ct,
        frontPictureFetchPriority: dt,
        closedBounds: ut,
        modalBounds: gt,
        listingId: ft,
        cardRef: pt,
        loggingID: wt,
        eventData: xt,
        eventDataSchema: bt,
        shouldLogImpression: Pt,
        refineStatUIForCJK: Rt = !1
    }) {
        const At = (0, u.useCx)(),
            It = (0, y.default)(),
            Ot = 'modal' === t,
            Tt = l.default.language(),
            $t = Rt || Tt && (Tt.startsWith('ja') || Tt.startsWith('ko') || Tt.startsWith('zh')) && 'treatment' === R.default.findTreatment('cjk_passport_stats_web', {
                log: !0
            }),
            Et = $t ? 0 === (nt || 0) : !I || 0 === I ? .length,
            St = (0, f.default)(w.mediaQueries.smallAndAbove.replace('@media ', '')),
            Ft = (0, j.default)() === j.Direction.RTL,
            Yt = (0, P.default)() > 25,
            Gt = (0, s.useRef)(null),
            Lt = (0, s.useRef)(t),
            Mt = (0, s.useRef)(null),
            Xt = (0, s.useRef)(null),
            Dt = (0, s.useRef)(null),
            Wt = (0, s.useRef)(null),
            Vt = (0, s.useRef)(null),
            Bt = (0, s.useRef)(null),
            Ut = (0, s.useRef)(null),
            Ht = (0, s.useCallback)((t => {
                const _ = O.FRONT_PAGE_ROTATIONY_STATIC_VALUES[t],
                    s = 'modal' === t ? `0 ${S} ${S} 0` : E,
                    n = {
                        '--front-page-transform': `rotateY(${_*(Ft?-1:1)}deg)`,
                        '--front-page-border-radius': s,
                        '--back-page-border-radius': s,
                        '--front-content-border-radius': s,
                        '--modal-content-border-radius': 'modal' === t ? `${S} 0 0 ${S}` : void 0,
                        '--container-shadow-opacity': 'modal' === t ? '1' : '0',
                        '--front-page-shadow': 'none',
                        '--back-page-shadow': 'none',
                        '--back-page-display': 'closed' === t ? 'none' : 'flex'
                    };
                for (const [t, _] of Object.entries(n)) Gt.current && Gt.current.style.setProperty(t, _)
            }), [Ft]);
        (0, s.useEffect)((() => {
            Ht(t)
        }), []);
        const Kt = (0, s.useCallback)(((t, _) => {
                if (!Gt.current) return [];
                if ('open' === _) return [];
                const {
                    scaleX: s = 1,
                    scaleY: o = 1,
                    x: l = 0,
                    y: c = 0
                } = t || {}, u = It === y.FORM_FACTOR.COMPACT ? O.CONTAINER_ANIMATION_CONFIG_COMPACT : O.CONTAINER_ANIMATION_CONFIG_WIDE, {
                    scale: f,
                    translateX: p,
                    translateY: j
                } = u[_], v = (0, n().animate)(Gt.current, {
                    scaleX: [s, 1],
                    scaleY: [o, 1]
                }, {
                    easing: (0, n().spring)(f)
                }), k = (0, n().animate)(Gt.current, {
                    translateX: [l, 0]
                }, {
                    easing: (0, n().spring)(p)
                }), h = (0, n().animate)(Gt.current, {
                    translateY: [c, 0]
                }, {
                    easing: (0, n().spring)(j)
                });
                return [v.finished, k.finished, h.finished]
            }), [It]),
            Jt = (0, s.useCallback)((t => {
                if (!Mt.current) return;
                const {
                    value: _,
                    springData: s
                } = O.FRONT_PAGE_ANIMATION_CONFIG[t], {
                    value: o
                } = O.FRONT_PAGE_ANIMATION_CONFIG[Lt.current], l = s[Lt.current], c = Ft ? -1 : 1;
                return (0, n().animate)(Mt.current, {
                    rotateY: [o * c + "deg", _ * c + "deg"]
                }, {
                    easing: (0, n().spring)(l)
                }).finished
            }), [Ft]),
            Qt = (0, s.useCallback)((t => {
                if (!t) return;
                if (!Mt.current || !Bt.current || !Wt.current) return;
                const _ = `scaleX(${1/t.scaleX}) scaleY(${1/t.scaleY})`;
                Ut.current && (0, n().animate)(Ut.current, {
                    scaleX: 1,
                    scaleY: 1
                }, {
                    easing: (0, n().spring)(c.themePrimitives.motion.springs.standard.source)
                });
                const s = O.BG_COLOR_MAP.closed,
                    o = O.BG_COLOR_MAP.modal;
                Et || ((0, n().animate)(Wt.current, {
                    background: [s, o]
                }, {
                    easing: (0, n().spring)(c.themePrimitives.motion.springs.standard.source),
                    delay: .1
                }), (0, n().animate)(Bt.current, {
                    background: [s, o]
                }, {
                    easing: (0, n().spring)(c.themePrimitives.motion.springs.standard.source),
                    delay: .065
                })), Xt.current && (0, n().animate)(Xt.current, {
                    background: [s, o]
                }, {
                    easing: (0, n().spring)(c.themePrimitives.motion.springs.standard.source),
                    delay: .065
                });
                const l = {
                    '--modal-content-transform': "rotateY(180deg) scale(1)",
                    '--modal-content-back-page-transform': 'none',
                    '--modal-content-background-transform': 'none',
                    '--modal-content-background-border-radius': `${S} 0 0 ${S}`,
                    '--modal-content-border-radius': `${S} 0 0 ${S}`,
                    '--front-picture-transform': _,
                    '--front-page-border-radius': `0 ${S} ${S} 0`,
                    '--front-content-border-radius': `0 ${S} ${S} 0`,
                    '--back-page-border-radius': `0 ${S} ${S} 0`,
                    '--front-page-shadow': $,
                    '--back-page-shadow': $,
                    '--back-page-display': 'flex'
                };
                for (const [t, _] of Object.entries(l)) Gt.current && Gt.current.style.setProperty(t, _)
            }), [Et]),
            Zt = (0, s.useCallback)(((t, _, s) => {
                if (!t) return;
                if (!Bt.current || !Wt.current || !Dt.current) return;
                const o = `scaleX(${1/t.scaleX}) scaleY(${1/t.scaleY})`;
                Ut.current ? .style.removeProperty('transform');
                const l = O.BG_COLOR_MAP[s],
                    u = O.BG_COLOR_MAP[_];
                (0, n().animate)(Dt.current, {
                    background: [l, u]
                }, {
                    easing: (0, n().spring)(c.themePrimitives.motion.springs.standard.source)
                }), (0, n().animate)(Wt.current, {
                    background: [l, u]
                }, {
                    easing: (0, n().spring)(c.themePrimitives.motion.springs.standard.source)
                }), Vt.current && (0, n().animate)(Vt.current, {
                    background: [l, u]
                }, {
                    easing: (0, n().spring)(c.themePrimitives.motion.springs.standard.source)
                }), (0, n().animate)(Bt.current, {
                    background: [l, u]
                }, {
                    easing: (0, n().spring)(c.themePrimitives.motion.springs.standard.source),
                    delay: .065
                });
                const f = {
                    '--container-shadow-opacity': '0',
                    '--front-page-shadow': 'none',
                    '--back-page-shadow': 'none',
                    '--stats-transform': o,
                    '--modal-content-transform': `rotateY(180deg) ${o} translateX(${Et?0:22}px)`,
                    '--modal-content-back-page-transform': `${o}`,
                    '--modal-content-background-transform': `scaleX(${t.scaleX}) scaleY(${t.scaleY}) translateX(-8px)`,
                    '--modal-content-background-border-radius': "8px 2px 2px 8px",
                    '--front-picture-transform': "scale(1)",
                    '--front-page-border-radius': E,
                    '--back-page-border-radius': E,
                    '--front-content-border-radius': E
                };
                for (const [t, _] of Object.entries(f)) Gt.current && Gt.current.style.setProperty(t, _)
            }), [Et]),
            ta = (0, p.useEvent)((t => {
                if (!Gt.current) return;
                const _ = 'open' === t ? `-${O.PASSPORT_PEAK_Y_ELEVATION}px` : '0',
                    s = c.themePrimitives.motion.springs.fast.source;
                (0, n().animate)(Gt.current, {
                    translateY: _
                }, {
                    easing: (0, n().spring)(s)
                })
            }));
        (0, s.useLayoutEffect)((() => {
            if (t === Lt.current) return;
            let _ = [];
            const s = Jt(t);
            s && _.push(s);
            const n = Lt.current;
            if (Lt.current = t, 'modal' !== t && 'modal' !== n) return ta(t), void('closed' !== t && Gt.current && Gt.current.style.setProperty('--back-page-display', 'flex'));
            const o = Gt.current ? .getBoundingClientRect(),
                l = 'modal' === t ? ut : gt;
            if (l) {
                const s = (0, O.getInvertedTransform)(l, o);
                _ = [..._, ...Kt(s, t)], 'modal' === t ? Qt(s) : Zt(s, t, 'modal')
            }
            Promise.allSettled(_).then((() => {
                let _ = {
                    '--modal-content-background-opacity': '0'
                };
                'modal' === t && (_ = {
                    '--front-page-shadow': 'none',
                    '--back-page-shadow': 'none',
                    '--container-shadow-opacity': '1',
                    '--modal-content-background-opacity': '1'
                }), requestAnimationFrame((() => {
                    for (const [t, s] of Object.entries(_)) Gt.current && Gt.current.style.setProperty(t, s);
                    ct && ct()
                }))
            }))
        }), [t]);
        const {
            methodsWithLogging: aa
        } = (0, C.default)('PassportCard', {
            loggingID: wt,
            eventData: xt,
            eventDataSchema: bt,
            shouldLogImpression: Pt,
            methods: {
                onPress: b
            }
        }), _a = Ot ? o.default.t('listing_card.host_passport_modal.full_profile_card_label') : o.default.t('listing_card.host_passport_modal.title'), ea = 'listing-card' !== x;
        return (0, T.jsxs)("div", {
            className: At(L),
            children: [(0, T.jsxs)("div", {
                ref: t => {
                    Gt.current = t, pt && 'current' in pt && (pt.current = t)
                },
                className: At(D, Ot && W, 'hidden' === _ && B, Ot && Yt && V),
                children: [(0, T.jsxs)("div", {
                    ref: Bt,
                    "aria-hidden": !Ot || void 0,
                    className: At(Z, Ot && tt, ea && Et && _t),
                    children: ['portal' === x && !Et && (0, T.jsx)("div", {
                        ref: Xt,
                        className: At(J)
                    }), ea && St && !Ft && (0, T.jsx)(Ct, {
                        name: N,
                        isEmptyStats: Et,
                        cardState: t,
                        placement: x,
                        titleText: A,
                        thumbnailUrl: q,
                        isSuperhost: mt,
                        isVerified: ot,
                        modalContentRef: Vt,
                        modalContentPlacement: "back-page"
                    }), !Et && (0, T.jsx)("div", {
                        ref: Ut,
                        className: At(jt),
                        children: $t ? (0, T.jsxs)(T.Fragment, {
                            children: [(0, T.jsx)(qt, {
                                ratingCount: nt,
                                listingId: ft
                            }), (0, T.jsx)(Nt, {
                                ratingAverage: st,
                                listingId: ft
                            }), (0, T.jsx)(zt, {
                                timeAsHost: et,
                                listingId: ft
                            })]
                        }) : I ? .map((_ => (0, T.jsxs)("div", {
                            className: At(vt),
                            role: "group",
                            "aria-label": _.a11yValue || void 0,
                            "data-lang": Tt,
                            children: [(0, T.jsxs)("div", {
                                className: At(kt),
                                "data-lang": Tt,
                                children: [_.value, 'RATING' === _.type && (0, T.jsx)("span", {
                                    className: At(yt),
                                    children: o.default.t('hosts.passport.stars_a11y_label', {
                                        default: 'Stars'
                                    })
                                }), 'REVIEW_COUNT' === _.type && void 0 !== F[Tt] && void 0 !== F[Tt][_.type] && (0, T.jsx)("span", {
                                    className: At(ht),
                                    children: F[Tt][_.type]
                                }), 'RATING' === _.type && (0, T.jsx)(z.default, {
                                    decorative: !0,
                                    size: 14
                                })]
                            }), (0, T.jsx)("div", {
                                className: At(ht),
                                children: _.label
                            })]
                        }, `${ft}-${_.label}-${_.value}-${t}-stats`)))
                    })]
                }), (0, T.jsxs)("div", {
                    ref: Mt,
                    className: At(U, Ot && H, Ot && 'modal' === x && K, Ot && Et && at),
                    children: [(0, T.jsx)("div", {
                        ref: Dt,
                        className: At(rt, 'listing-card' !== x && it),
                        children: (0, T.jsx)("div", {
                            className: At(Q),
                            children: (0, T.jsx)(k.ResponsivePictureProvider, {
                                value: {
                                    imageWidth: 240,
                                    maxDensity: 1
                                },
                                children: (0, T.jsx)(v.default, {
                                    fetchpriority: dt,
                                    src: q,
                                    aspectRatio: 1,
                                    borderRadius: "50%"
                                })
                            })
                        })
                    }), ea && (0, T.jsx)(T.Fragment, {
                        children: (0, T.jsx)(Ct, {
                            name: N,
                            isEmptyStats: Et,
                            cardState: t,
                            placement: x,
                            titleText: A,
                            thumbnailUrl: q,
                            isSuperhost: mt,
                            isVerified: ot,
                            modalContentRef: Wt,
                            modalContentPlacement: "front-page"
                        })
                    })]
                })]
            }), (0, T.jsx)("div", {
                className: At(M, 'open' === t && X),
                children: (0, T.jsx)(h.default, {
                    type: "button",
                    href: lt,
                    target: It === y.FORM_FACTOR.WIDE ? '_blank' : void 0,
                    onPress: aa.onPress,
                    "aria-label": _a,
                    className: At(Ot ? G : Y)
                })
            })]
        })
    }))
}), "ab128d", ["ba7a76", "45f788", "07aa1f", "ea4b89", "489521", "a9f4b1", "862e50", "5aed2e", "4786a8", "bf20d8", "f4e9c4", "dbfcd8", "978eb1", "9d9690", "c44e31", "aabdb1", "328979", "20deb1", "e0b071", "1cd4dc", "551cbe", "47e84a", "e0ba9c", "b7564f", "170e2d", "dcc72a", "d0c9d2", "5cc345", "48c74c", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.pressableCssFragments = e.default = void 0;
    var _ = r(d[0]),
        t = r(d[1]),
        f = r(d[2]),
        s = r(d[3]),
        l = r(d[4]),
        o = r(d[5]),
        c = r(d[6]);
    const y = e.pressableCssFragments = (0, t.mergeStyles)(f.baseButtonCssFragments, o.dls19CssFragments, c.pressableCssFragments);
    (0, s.cssFragmentsObjToStylesFn)(y);
    e.default = (0, l.createVariant)(_.BaseButtonOrAnchor, {
        base: "bbkw4bl atm_9j_tlke0l atm_9s_1o8liyq atm_gi_idpfg4 atm_mk_h2mmj6 atm_r3_1h6ojuz atm_rd_glywfm atm_3f_uuagnh atm_70_5j5alw atm_vy_1wugsn5 atm_l8_1cudcw5 atm_26_d0eyo3 atm_7l_jt7fhx atm_c8_dlk8xv atm_bx_1kw7nm4 atm_tl_1gw4zv3 atm_9j_13gfvf7_1o5j5ji atm_k4_si67jz_1o5j5ji",
        component: "c1rxa9od atm_bx_48h72j atm_c8_2x1prs atm_g3_1jbyh58 atm_fr_11a07z3 atm_cs_10d11i2 atm_5j_t09oo2 atm_kd_glywfm atm_uc_1lizyuv atm_r2_1j28jx2 atm_26_1j28jx2 atm_3f_glywfm atm_5j_idpfg4 atm_7l_1kw7nm4 atm_9s_1ulexfb atm_gi_idpfg4 atm_l8_idpfg4 atm_r3_1kw7nm4 atm_rd_glywfm atm_e2_1osqo2v atm_vy_1osqo2v atm_bx_1kw7nm4 atm_c8_1kw7nm4 atm_g3_1kw7nm4 atm_cs_1kw7nm4 atm_kd_glywfm atm_uc_glywfm__1rrf6b5 atm_kd_glywfm_1w3cfyq atm_uc_aaiy6o_1w3cfyq atm_70_1b8lkes_1w3cfyq atm_3f_glywfm_e4a3ld atm_l8_idpfg4_e4a3ld atm_gi_idpfg4_e4a3ld atm_3f_glywfm_1r4qscq atm_kd_glywfm_6y7yyg atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_kd_glywfm_pfnrn2_1oszvuo atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_1b8lkes_pfnrn2_1oszvuo atm_3f_glywfm_1icshfk_1oszvuo atm_l8_idpfg4_1icshfk_1oszvuo atm_gi_idpfg4_1icshfk_1oszvuo atm_3f_glywfm_b5gff8_1oszvuo atm_kd_glywfm_2by9w9_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_tr_18md41p_csw3t1 atm_k4_kb7nvz_1o5j5ji atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_uc_aaiy6o_1w3cfyq atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_uc_aaiy6o_pfnrn2_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_tr_glywfm_csw3t1",
        fullWidth: "f1idmcrt atm_vy_1osqo2v",
        showOnlyOnKeyboardFocus: "sts6seu atm_3f_idpfg4_1r63tcj atm_7h_hxbz6r_1r63tcj atm_7i_ysn8ba_1r63tcj atm_e2_t94yts_1r63tcj atm_ks_15vqwwr_1r63tcj atm_ks_zryt35_1r63tcj atm_l8_idpfg4_1r63tcj atm_mk_stnw88_1r63tcj atm_vv_1q9ccgz_1r63tcj atm_vy_t94yts_1r63tcj"
    })
}), "c44e31", ["60c631", "aabdb1", "ee5719", "2d8af3", "92749c", "c642d5", "8bb5e6"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";

    function t(t, n) {
        const o = ' ',
            c = n - 1,
            l = t.slice(0, n);
        if (t[c] === o) return l.trim();
        if ([o, void 0].includes(t[c + 1])) return l.trim();
        return -1 === l.indexOf(o) ? '' : l.slice(0, l.lastIndexOf(o))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ONE_LINE_CHARACTER_LIMIT = void 0, e.modifyWordsBeforeTargetPosition = function(c, l) {
        const s = t(c, l);
        if ('' === s) return c;
        const u = s.replaceAll(' ', n).replaceAll('-', o),
            f = c.slice(s.length);
        return u + f
    };
    e.ONE_LINE_CHARACTER_LIMIT = 18;
    const n = '\xa0',
        o = '\u2011'
}), "d0c9d2", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const t = (0, l(r(d[1])).default)({
        svgContents: "<path d=\"M7.57 1.1 5.51 5.24l-4.57.65a.5.5 0 0 0-.29.14l-.06.1c-.1.2-.11.27-.03.44l.1.18 3.3 3.23-.8 4.55a.5.5 0 0 0 .05.32l.07.08c.16.17.22.2.41.17l.2-.04 4.1-2.13 4.08 2.16c.1.06.21.07.33.05l.08-.04c.21-.1.26-.15.3-.34l.02-.2-.77-4.55 3.32-3.22a.5.5 0 0 0 .15-.3l-.01-.1c-.05-.3-.08-.3-.42-.46l-4.57-.68L8.47 1.1a.5.5 0 0 0-.9 0z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16"
        }
    }, 'IcCompactStarFilled16', {
        defaultSize: 16
    });
    e.default = t
}), "e0ba9c", ["ba7a76", "c65865"]);
__r("a9f4b1").extend({
    "hosts.passport.stars_a11y_label": "Stars",
    "hosts.passport.listing.specific.reviews_a11y_label": "%{smart_count} review on the listing||||%{smart_count} reviews on the listing",
    "passport.stat.reviews.unit": "Reviews",
    "passport.stat.reviews.label": "Reviews",
    "hosts.passport.listing.specific.rating_a11y_label": "%{rating} out of 5 average rating on the listing",
    "hosts.passport.Rating": "Rating",
    "passport.stat.time_as_host.label": "Hosting",
    "passport.stat.years.unit": "Years",
    "passport.stat.months.unit": "Months",
    "hosts.passport.hosting.year.a11y_label": "%{smart_count} year of hosting||||%{smart_count} years of hosting",
    "hosts.passport.hosting.month.a11y_label": "%{smart_count} month of hosting||||%{smart_count} months of hosting",
    "pwaExplore.map.verified_label": "Verified",
    "listing_card.host_passport_modal.full_profile_card_label": "Go to Host full profile",
    "listing_card.host_passport_modal.title": "Host preview"
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/6277.741b1b5d5e.js.map