__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = r(d[1]),
        l = (t(r(d[2])), t(r(d[3]))),
        s = t(r(d[4])),
        o = t(r(d[5])),
        c = t(r(d[6])),
        u = t(r(d[7])),
        h = t(r(d[8])),
        f = t(r(d[9])),
        p = t(r(d[10])),
        b = r(d[11]),
        x = t(r(d[12])),
        j = t(r(d[13])),
        _ = r(d[14]);
    e.default = (0, p.default)((function(t) {
        const u = (0, n.c)(39),
            {
                css: h,
                item: p,
                styles: b
            } = t,
            {
                accessibilityLabel: w,
                action: y,
                icon: v,
                subtitle: P,
                title: U
            } = p,
            {
                href: F,
                runAction: L
            } = (0, x.default)(y);
        let T;
        u[0] !== y ? (T = y ? (0, c.default)(y.loggingData) : null, u[0] = y, u[1] = T) : T = u[1];
        const W = T;
        if (!U && !P) {
            let t;
            return u[2] !== p ? (t = (0, f.default)({
                expectedFields: ["subtitle"],
                response: p
            }), u[2] = p, u[3] = t) : t = u[3], t
        }
        const D = !!P;
        let H, I, z, A, M, O;
        return u[4] !== h || u[5] !== b.container ? (H = h(b.container), u[4] = h, u[5] = b.container, u[6] = H) : H = u[6], u[7] !== h || u[8] !== v || u[9] !== b.icon ? (I = v && (0, _.jsx)("span", { ...h(b.icon),
            children: (0, _.jsx)(s.default, {
                icon: v,
                size: 14
            })
        }), u[7] = h, u[8] = v, u[9] = b.icon, u[10] = I) : I = u[10], u[11] !== w || u[12] !== y || u[13] !== h || u[14] !== D || u[15] !== F || u[16] !== W || u[17] !== L || u[18] !== b.action || u[19] !== b.action_withUnderline || u[20] !== b.subtitle || u[21] !== b.subtitle_noPadding || u[22] !== b.title || u[23] !== P || u[24] !== U ? (z = y && (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(j.default, {
                when: !D,
                wrapper: (0, _.jsx)(o.default, {
                    "aria-label": w || void 0,
                    href: F,
                    onPress: L,
                    ...W
                }),
                children: U && (0, _.jsx)("span", { ...h(b.title, b.action, !D && b.action_withUnderline),
                    "aria-hidden": !!w,
                    children: U
                })
            }), P && (0, _.jsx)("span", { ...h(b.subtitle, !U && b.subtitle_noPadding, b.action_withUnderline),
                children: (0, _.jsx)(o.default, {
                    "aria-label": w || void 0,
                    href: F,
                    onPress: L,
                    ...W,
                    children: P
                })
            })]
        }), u[11] = w, u[12] = y, u[13] = h, u[14] = D, u[15] = F, u[16] = W, u[17] = L, u[18] = b.action, u[19] = b.action_withUnderline, u[20] = b.subtitle, u[21] = b.subtitle_noPadding, u[22] = b.title, u[23] = P, u[24] = U, u[25] = z) : z = u[25], u[26] !== w || u[27] !== y || u[28] !== h || u[29] !== b.title || u[30] !== U ? (A = !y && (0, _.jsxs)(_.Fragment, {
            children: [w && (0, _.jsx)(l.default, {
                children: w
            }), (0, _.jsx)("span", {
                "aria-hidden": !!w,
                ...h(b.title),
                children: U
            })]
        }), u[26] = w, u[27] = y, u[28] = h, u[29] = b.title, u[30] = U, u[31] = A) : A = u[31], u[32] !== z || u[33] !== A ? (M = (0, _.jsxs)(_.Fragment, {
            children: [z, A]
        }), u[32] = z, u[33] = A, u[34] = M) : M = u[34], u[35] !== H || u[36] !== I || u[37] !== M ? (O = (0, _.jsxs)("span", { ...H,
            children: [I, M]
        }), u[35] = H, u[36] = I, u[37] = M, u[38] = O) : O = u[38], O
    }), (0, b.withStyles)((({
        dls19: t
    }) => ({
        container: {
            minWidth: 0,
            marginTop: 4,
            alignItems: 'center',
            display: 'inline-flex'
        },
        icon: {
            alignItems: 'center',
            display: 'inline-flex',
            marginRight: 4,
            minWidth: 14
        },
        title: { ...(0, u.default)({
                lineHeight: (0, h.default)(t).subtitleTall.lineHeight,
                numLines: 1
            }),
            ...(0, h.default)(t).subtitleTall,
            position: 'relative'
        },
        subtitle: { ...(0, h.default)(t).subtitleTall,
            paddingLeft: 4
        },
        subtitle_noPadding: {
            paddingLeft: 0
        },
        action: {
            fontWeight: t.typography.weight.medium
        },
        action_withUnderline: {
            fontWeight: t.typography.weight.medium,
            textDecoration: 'underline'
        }
    }))))
}), "1d1321", ["ba7a76", "87eb11", "07aa1f", "a5b4f5", "ce060d", "c44e31", "45d996", "8636b4", "ad1abc", "5daffb", "1673a5", "e0b084", "3bd960", "82f5b0", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = r(d[2]),
        o = n(r(d[3])),
        s = t(r(d[4])),
        c = t(r(d[5])),
        u = r(d[6]),
        p = n(r(d[7])),
        h = t(r(d[8]));

    function f() {
        const t = r(d[9]);
        return f = function() {
            return t
        }, t
    }
    var v = t(r(d[10])),
        x = t(r(d[11])),
        y = t(r(d[12])),
        b = t(r(d[13])),
        j = t(r(d[14])),
        _ = n(r(d[15])),
        w = t(r(d[16])),
        C = t(r(d[17])),
        S = t(r(d[18])),
        T = t(r(d[19])),
        A = t(r(d[20])),
        k = t(r(d[21])),
        B = t(r(d[22])),
        I = t(r(d[23])),
        L = t(r(d[24])),
        O = t(r(d[25])),
        R = r(d[26]);

    function D(t) {
        return t.icon && t.title
    }
    e.default = (0, u.withStyles)((({
        dls19: t
    }) => ({
        container: {
            paddingTop: 24,
            paddingBottom: 24,
            [t.responsive.queries.mediumAndAbove]: {
                paddingBottom: 0
            }
        },
        container_n8: {
            paddingTop: 24,
            paddingBottom: 16
        },
        dotSeparator: { ...(0, v.default)(t).baseMuted,
            margin: '8px 8px 0 8px'
        },
        icon: {
            display: 'inline-flex',
            marginRight: 12,
            transform: "translateY(calc((var(--dls19-pdp-listing-title-line-height, 30px) - 24px) / 2))",
            ':nth-child(n) > svg': {
                display: 'inline'
            }
        },
        logo: {
            marginBottom: t.spacing.primitives.baseUnit
        },
        shareSaveControls: {
            flexGrow: 0,
            height: 28
        },
        skeleton_overview: {
            paddingTop: 16,
            [t.responsive.queries.mediumAndAbove]: {
                paddingTop: 0
            }
        },
        subtitle: {
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: 4
        },
        twoColumnLayout: {
            alignItems: 'flex-end',
            display: 'flex',
            justifyContent: 'space-between',
            gap: 8
        },
        subtitle_badgeless: {
            marginTop: 4
        },
        title: { ...(0, h.default)({
                fontSize: {
                    property: '--dls19-pdp-listing-title-size',
                    default: 26
                },
                lineHeight: {
                    property: '--dls19-pdp-listing-title-line-height',
                    default: '30px'
                },
                fontWeight: {
                    property: '--dls19-pdp-listing-title-weight',
                    default: '600'
                }
            }),
            wordBreak: 'break-word',
            display: 'inline'
        },
        titleAndIcon: {
            flexGrow: 1
        },
        tooltipContent: {
            '--parsed-html-color': t.palette.white
        }
    })))((function(t) {
        const n = (0, l.c)(94),
            {
                css: u,
                metadata: h,
                platformNetworkStatus: v,
                section: F,
                styles: M
            } = t,
            z = (0, p.default)() === p.FORM_FACTOR.COMPACT,
            {
                actionableIcon: N,
                icon: P,
                logo: W,
                logoAccessibilityLabel: q,
                overviewItems: E,
                shareSave: G,
                title: U
            } = F,
            $ = N ? .icon || P,
            H = N ? .accessibilityLabel,
            Y = N ? .action,
            {
                href: J,
                runAction: K
            } = (0, w.default)(Y),
            Q = "ShowTooltipAction" === Y ? .__typename && Y ? .htmlText;
        let V;
        n[0] !== Y ? (V = Y ? .loggingData ? (0, C.default)(Y.loggingData) : null, n[0] = Y, n[1] = V) : V = n[1];
        const X = V,
            Z = (0, o.useRef)(null),
            [ee, te] = (0, o.useState)(!1);
        let ne;
        n[2] !== G ? (ne = G || {}, n[2] = G, n[3] = ne) : ne = n[3];
        const {
            unsaveButton: ie,
            saveButton: le,
            shareButton: oe,
            entityId: ae,
            entityType: se,
            embedData: re,
            sharingConfig: de
        } = ne, ce = (0, B.default)(re, de), ue = v === f().NetworkStatus.loading || !h;
        if (!U && ue) {
            let t, l, o, s;
            return n[4] !== u || n[5] !== M.container || n[6] !== M.container_n8 ? (t = u(M.container, M.container_n8), n[4] = u, n[5] = M.container, n[6] = M.container_n8, n[7] = t) : t = n[7], n[8] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, R.jsx)(L.default, {}), n[8] = l) : l = n[8], n[9] !== u || n[10] !== z || n[11] !== M.skeleton_overview ? (o = z && (0, R.jsx)("div", { ...u(M.skeleton_overview),
                children: (0, R.jsx)(O.default, {})
            }), n[9] = u, n[10] = z, n[11] = M.skeleton_overview, n[12] = o) : o = n[12], n[13] !== t || n[14] !== o ? (s = (0, R.jsxs)("div", { ...t,
                children: [l, o]
            }), n[13] = t, n[14] = o, n[15] = s) : s = n[15], s
        }
        let pe, he, fe, ge, ve, xe, me;
        n[16] !== u || n[17] !== M.titleAndIcon ? (pe = u(M.titleAndIcon), n[16] = u, n[17] = M.titleAndIcon, n[18] = pe) : pe = n[18], n[19] !== u || n[20] !== J || n[21] !== Q || n[22] !== H || n[23] !== $ || n[24] !== X || n[25] !== K || n[26] !== M.icon ? (he = $ && (0, R.jsx)("div", { ...u(M.icon),
            children: (0, R.jsx)(S.default, {
                wrapper: (0, R.jsx)(T.default, {
                    href: J,
                    onPress: t => {
                        K(t), Q && te(!0)
                    },
                    buttonOrAnchorRef: Z,
                    ...X
                }),
                when: !!J || !!K,
                children: (0, R.jsx)(j.default, {
                    icon: $,
                    inline: !0,
                    size: 24,
                    accessibilityLabel: H
                })
            })
        }), n[19] = u, n[20] = J, n[21] = Q, n[22] = H, n[23] = $, n[24] = X, n[25] = K, n[26] = M.icon, n[27] = he) : he = n[27], n[28] !== u || n[29] !== Q || n[30] !== M.tooltipContent || n[31] !== ee ? (fe = Q && (0, R.jsx)(A.default, {
            anchorRef: Z,
            enabled: ee,
            onClose: () => te(!1),
            closeOnOutsideClick: !0,
            children: (0, R.jsx)("div", { ...u(M.tooltipContent),
                children: (0, R.jsx)(k.default, {
                    htmlString: Q
                })
            })
        }), n[28] = u, n[29] = Q, n[30] = M.tooltipContent, n[31] = ee, n[32] = fe) : fe = n[32], n[33] !== u || n[34] !== M.title ? (ge = u(M.title), n[33] = u, n[34] = M.title, n[35] = ge) : ge = n[35], n[36] !== U ? (ve = (0, R.jsx)(y.default, {
            inline: !0,
            children: U
        }), n[36] = U, n[37] = ve) : ve = n[37], n[38] !== ge || n[39] !== ve ? (xe = (0, R.jsx)("div", { ...ge,
            children: ve
        }), n[38] = ge, n[39] = ve, n[40] = xe) : xe = n[40], n[41] !== pe || n[42] !== he || n[43] !== fe || n[44] !== xe ? (me = (0, R.jsxs)("div", { ...pe,
            children: [he, fe, xe]
        }), n[41] = pe, n[42] = he, n[43] = fe, n[44] = xe, n[45] = me) : me = n[45];
        const ye = me;
        let be;
        n[46] !== E ? (be = E ? .filter(D).length || 0, n[46] = E, n[47] = be) : be = n[47];
        const je = be;
        let _e;
        n[48] !== je || n[49] !== u || n[50] !== E || n[51] !== M.dotSeparator || n[52] !== M.subtitle || n[53] !== M.subtitle_badgeless ? (_e = !!E ? .length && (0, R.jsx)("div", { ...u(M.subtitle, 0 === je && M.subtitle_badgeless),
            children: E.map(((t, n) => (0, R.jsxs)(o.default.Fragment, {
                children: [(0, R.jsx)(I.default, {
                    item: t
                }), n < E.length - 1 && (0, o.createElement)("span", { ...u(M.dotSeparator),
                    key: `separator-${t.title}`,
                    "aria-hidden": "true"
                }, "\xb7")]
            }, `overview-item-${t.title}`)))
        }), n[48] = je, n[49] = u, n[50] = E, n[51] = M.dotSeparator, n[52] = M.subtitle, n[53] = M.subtitle_badgeless, n[54] = _e) : _e = n[54];
        const we = _e;
        let Ce;
        n[55] !== u || n[56] !== ae || n[57] !== se || n[58] !== h || n[59] !== le || n[60] !== oe || n[61] !== ce || n[62] !== M.shareSaveControls || n[63] !== ie ? (Ce = ce && ae && se && (0, R.jsx)(b.default, {
            renderWide: () => (0, R.jsx)("div", { ...u(M.shareSaveControls),
                children: (0, R.jsx)(_.default, {
                    clientShareSheetTitleOverride: h ? .isElvisListing ? s.default.t("only_on_stays.share_container_title") : void 0,
                    embedData: ce,
                    displayType: _.DisplayType.BUTTON,
                    entityType: se,
                    entityId: ae,
                    saveButton: le || null,
                    unsaveButton: ie || null,
                    shareButton: oe || null,
                    shareType: (0, _.getShareType)(se)
                })
            })
        }), n[55] = u, n[56] = ae, n[57] = se, n[58] = h, n[59] = le, n[60] = oe, n[61] = ce, n[62] = M.shareSaveControls, n[63] = ie, n[64] = Ce) : Ce = n[64];
        const Se = Ce,
            Te = !we && M.container_n8;
        let Ae, ke, Be, Ie, Le, Oe;
        return n[65] !== u || n[66] !== M.container || n[67] !== Te ? (Ae = u(M.container, Te), n[65] = u, n[66] = M.container, n[67] = Te, n[68] = Ae) : Ae = n[68], n[69] !== u || n[70] !== z || n[71] !== W || n[72] !== q || n[73] !== M.logo ? (ke = W && (0, R.jsx)(b.default, {
            renderCompact: () => (0, R.jsx)("div", { ...u(M.logo),
                "aria-label": q || void 0,
                role: q ? "img" : void 0,
                children: (0, R.jsx)(x.default, {
                    logo: W,
                    height: z ? 34 : 40
                })
            })
        }), n[69] = u, n[70] = z, n[71] = W, n[72] = q, n[73] = M.logo, n[74] = ke) : ke = n[74], n[75] !== u || n[76] !== Se || n[77] !== M.twoColumnLayout || n[78] !== we || n[79] !== ye ? (Be = we ? (0, R.jsxs)(R.Fragment, {
            children: [ye, (0, R.jsxs)("div", { ...u(M.twoColumnLayout),
                children: [we, Se]
            })]
        }) : (0, R.jsxs)("div", { ...u(M.twoColumnLayout),
            children: [ye, Se]
        }), n[75] = u, n[76] = Se, n[77] = M.twoColumnLayout, n[78] = we, n[79] = ye, n[80] = Be) : Be = n[80], n[81] !== ke || n[82] !== Be ? (Ie = (0, R.jsxs)(c.default, {
            children: [ke, Be]
        }), n[81] = ke, n[82] = Be, n[83] = Ie) : Ie = n[83], n[84] !== u || n[85] !== z || n[86] !== ue || n[87] !== M.skeleton_overview || n[88] !== U ? (Le = ue && z && U && (0, R.jsx)("div", { ...u(M.skeleton_overview),
            children: (0, R.jsx)(O.default, {})
        }), n[84] = u, n[85] = z, n[86] = ue, n[87] = M.skeleton_overview, n[88] = U, n[89] = Le) : Le = n[89], n[90] !== Ae || n[91] !== Ie || n[92] !== Le ? (Oe = (0, R.jsxs)("div", { ...Ae,
            children: [Ie, Le]
        }), n[90] = Ae, n[91] = Ie, n[92] = Le, n[93] = Oe) : Oe = n[93], Oe
    }))
}), "b1e395", ["ba7a76", "45f788", "87eb11", "07aa1f", "a9f4b1", "b5f1d2", "e0b084", "e0b071", "ea81db", "068abc", "ad1abc", "e6151e", "688dce", "3c74b4", "c1795b", "6248f3", "3bd960", "45d996", "82f5b0", "aa65c8", "6607fa", "3aec37", "4d6d68", "1d1321", "ebcd2c", "e9c49f", "b8c07d"]);
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
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const t = (0, _.c)(21),
            o = (0, s.useCx)();
        let n, f, u, v, y, j, x, w, b, z;
        t[0] !== o ? (n = o(h.shimmerContainer), t[0] = o, t[1] = n) : n = t[1];
        t[2] !== o ? (f = o(h.shimmerText), t[2] = o, t[3] = f) : f = t[3];
        t[4] !== o ? (u = o(h.shimmerTitle), t[4] = o, t[5] = u) : u = t[5];
        t[6] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, c.jsx)(l.default, {
            width: "100%",
            height: "100%"
        }), t[6] = v) : v = t[6];
        t[7] !== u ? (y = (0, c.jsx)("div", {
            className: u,
            children: v
        }), t[7] = u, t[8] = y) : y = t[8];
        t[9] !== o ? (j = o(h.shimmerSubtitle), t[9] = o, t[10] = j) : j = t[10];
        t[11] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, c.jsx)(l.default, {
            width: "100%",
            height: "100%"
        }), t[11] = x) : x = t[11];
        t[12] !== j ? (w = (0, c.jsx)("div", {
            className: j,
            children: x
        }), t[12] = j, t[13] = w) : w = t[13];
        t[14] !== f || t[15] !== y || t[16] !== w ? (b = (0, c.jsxs)("div", {
            className: f,
            children: [y, w]
        }), t[14] = f, t[15] = y, t[16] = w, t[17] = b) : b = t[17];
        t[18] !== n || t[19] !== b ? (z = (0, c.jsx)("div", {
            className: n,
            children: b
        }), t[18] = n, t[19] = b, t[20] = z) : z = t[20];
        return z
    };
    var _ = r(d[1]),
        s = (t(r(d[2])), r(d[3]), r(d[4]), r(d[5])),
        l = t(r(d[6])),
        c = r(d[7]);
    const h = {
        shimmerContainer: "s5gbbux atm_9s_1txwivl atm_fc_1yb4nlp",
        shimmerText: "s1yetfxx atm_am_1wugsn5",
        shimmerTitle: "s1fqpver atm_e2_gktfv atm_vy_12itjgx atm_5j_1y44olf atm_ks_15vqwwr atm_e2_1ou6n1d__oggzyc atm_vy_1gwvivf__oggzyc",
        shimmerSubtitle: "safo8pj atm_e2_f6fqlb atm_h3_1y44olf atm_vy_1ssbidh atm_5j_1y44olf atm_ks_15vqwwr",
        shimmerLogo: "sulhdrh atm_5j_1ssbidh atm_am_glywfm atm_e2_8vuzuz atm_gz_1tcgj5g atm_ks_15vqwwr atm_tr_1jbocfw atm_vy_8vuzuz"
    }
}), "e9c49f", ["ba7a76", "87eb11", "07aa1f", "ea4b89", "aabdb1", "4786a8", "44e11b", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var _ = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const _ = (0, t.c)(5),
            f = (0, l.useCx)();
        let u, y, h;
        _[0] !== f ? (u = f(o.shimmer_title), _[0] = f, _[1] = u) : u = _[1];
        _[2] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, c.jsx)(s.default, {
            width: "100%",
            height: "100%"
        }), _[2] = y) : y = _[2];
        _[3] !== u ? (h = (0, c.jsx)("div", {
            className: u,
            children: y
        }), _[3] = u, _[4] = h) : h = _[4];
        return h
    };
    var t = r(d[1]),
        l = (_(r(d[2])), r(d[3]), r(d[4]), r(d[5])),
        s = _(r(d[6])),
        c = r(d[7]);
    const o = {
        shimmer_title: "s1j7j14l atm_7l_1emz6l0 atm_e2_gtd3qd atm_vy_1vukmjj atm_5j_1y44olf atm_ks_15vqwwr atm_vy_78o8zw__oggzyc",
        shimmer_subtitle: "s1w8ge8g atm_e2_1f4h9lt atm_lo_ftgil2 atm_vy_yb8mq0 atm_9s_1txwivl atm_be_1g80g66 atm_h3_1y44olf atm_vy_qcxa0d__oggzyc atm_h3_idpfg4__qky54b"
    }
}), "ebcd2c", ["ba7a76", "87eb11", "07aa1f", "ea4b89", "aabdb1", "4786a8", "44e11b", "b8c07d"]);
__r("a9f4b1").extend({
    "only_on_stays.share_container_title": "Share this experience"
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-stays-pdp-sections/sections/Title/TitleSection.f7dd5f8149.js.map