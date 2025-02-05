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
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = r(d[2]);

    function s() {
        const t = n(r(d[3]));
        return s = function() {
            return t
        }, t
    }
    var l = t(r(d[4])),
        c = n(r(d[5]));

    function u() {
        const t = r(d[6]);
        return u = function() {
            return t
        }, t
    }

    function f() {
        const t = r(d[7]);
        return f = function() {
            return t
        }, t
    }
    var p = n(r(d[8])),
        v = n(r(d[9])),
        x = n(r(d[10])),
        _ = n(r(d[11])),
        h = n(r(d[12])),
        y = n(r(d[13])),
        T = n(r(d[14])),
        b = r(d[15]),
        j = r(d[16]),
        E = n(r(d[17])),
        w = r(d[18]),
        D = n(r(d[19])),
        A = r(d[20]),
        N = r(d[21]);
    e.default = (0, b.withStyles)((({
        dls19: t
    }) => ({
        container: {
            display: 'flex',
            overflow: 'hidden',
            position: 'relative'
        },
        containerWithBackground_n8: {
            padding: 16,
            backgroundColor: t.palette.faint,
            borderRadius: 8
        },
        icon: {
            flex: 'none',
            marginRight: 12
        },
        loader: {
            alignItems: 'center',
            backgroundColor: t.palette.white,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0
        },
        text: { ...t.typography.base.md,
            flex: 'auto',
            [t.responsive.queries.mediumAndAbove]: {
                fontSize: 16
            }
        },
        text_n8: {
            display: 'flex',
            flexDirection: 'column',
            [t.responsive.queries.mediumAndAbove]: {
                display: 'block'
            }
        }
    })))((function(t) {
        const n = (0, o.c)(52),
            {
                css: b,
                section: S,
                styles: R
            } = t,
            {
                ugcTranslationButton: U,
                isPrivateRoom: k
            } = S;
        let C;
        n[0] !== U ? (C = U || {}, n[0] = U, n[1] = C) : C = n[1];
        const {
            ctaText: I,
            icon: P,
            loggingEventData: B,
            title: F,
            translationState: J
        } = C, [L, O] = (0, l.useState)(!1), q = (0, l.useRef)(0), z = (0, T.default)(J), [M, W] = (0, l.useState)(!1);
        let V, G, H, K, Q;
        if (n[2] !== J ? (V = () => {
                if (!p.default.getBootstrap("web_pdp_show_translation_nux")) return;
                const t = (0, w.getMostRecentAnnouncementDismissTime)("pdp");
                W(!t && "UNDEFINED" !== J && "UNTRANSLATED" !== J)
            }, G = [J], n[2] = J, n[3] = V, n[4] = G) : (V = n[3], G = n[4]), (0, l.useEffect)(V, G), n[5] !== L || n[6] !== z || n[7] !== J ? (H = () => {
                L && z && J !== z && (window.clearTimeout(q.current), O(!1))
            }, K = [L, z, J], n[5] = L, n[6] = z, n[7] = J, n[8] = H, n[9] = K) : (H = n[8], K = n[9]), (0, l.useEffect)(H, K), !I) {
            let t;
            return n[10] !== S ? (t = (0, y.default)({
                expectedFields: ["ctaText"],
                response: S
            }), n[10] = S, n[11] = t) : t = n[11], t
        }
        n[12] !== B ? (Q = function() {
            window.clearTimeout(q.current), q.current = window.setTimeout((() => h.default.logJitneyEvent({
                event_data: {
                    ancestor_logging_ids: [],
                    ancestor_uuids: [],
                    component: "UgcTranslation",
                    event_data: JSON.stringify({
                        stalled: !0
                    }),
                    event_data_schema: JSON.stringify({
                        defaultProps: {},
                        propTypes: {
                            stalled: s().default.bool
                        }
                    }),
                    logging_id: B ? .loggingId || "",
                    method: "",
                    operation: 6,
                    page: "pdp",
                    uuid: (0, u().v4)()
                },
                schema: f().UniversalComponentActionEvent
            })), 1e4)
        }, n[12] = B, n[13] = Q) : Q = n[13];
        const X = Q,
            Y = null != k,
            Z = !1 === k,
            $ = Y && R.container_n8,
            tt = Z && R.containerWithBackground_n8;
        let et, nt, ot;
        n[14] !== b || n[15] !== R.container || n[16] !== $ || n[17] !== tt ? (et = b(R.container, $, tt), n[14] = b, n[15] = R.container, n[16] = $, n[17] = tt, n[18] = et) : et = n[18], n[19] !== M ? (nt = M && (0, N.jsx)(E.default, {
            surfaceID: "pdp"
        }), n[19] = M, n[20] = nt) : nt = n[20], n[21] !== b || n[22] !== P || n[23] !== Y || n[24] !== R.icon ? (ot = P && !Y && (0, N.jsx)("div", { ...b(R.icon),
            children: (0, N.jsx)(x.default, {
                icon: P,
                size: 16
            })
        }), n[21] = b, n[22] = P, n[23] = Y, n[24] = R.icon, n[25] = ot) : ot = n[25];
        const it = Y && R.text_n8;
        let at, rt, st, lt, ct, dt;
        return n[26] !== b || n[27] !== R.text || n[28] !== it ? (at = b(R.text, it), n[26] = b, n[27] = R.text, n[28] = it, n[29] = at) : at = n[29], n[30] !== F ? (rt = F && (0, N.jsx)(D.default, {
            htmlString: F
        }), n[30] = F, n[31] = rt) : rt = n[31], n[32] !== I || n[33] !== X || n[34] !== B || n[35] !== F || n[36] !== J ? (st = I && (0, N.jsxs)(N.Fragment, {
            children: [F && " ", (0, N.jsx)(_.default, { ...(0, j.getClientLoggingEventDataViaduct)(B),
                onPress: () => {
                    O(!0), (0, A.setTranslateUgcParam)(J || "UNDEFINED"), X()
                },
                "aria-label": "UNTRANSLATED" === J ? c.default.t("stays.ugc_translation.translate.cta_text.v5") : I,
                children: I
            })]
        }), n[32] = I, n[33] = X, n[34] = B, n[35] = F, n[36] = J, n[37] = st) : st = n[37], n[38] !== at || n[39] !== rt || n[40] !== st ? (lt = (0, N.jsxs)("div", { ...at,
            children: [rt, st]
        }), n[38] = at, n[39] = rt, n[40] = st, n[41] = lt) : lt = n[41], n[42] !== b || n[43] !== L || n[44] !== R.loader ? (ct = L && (0, N.jsx)("div", { ...b(R.loader),
            children: (0, N.jsx)(v.default, {})
        }), n[42] = b, n[43] = L, n[44] = R.loader, n[45] = ct) : ct = n[45], n[46] !== nt || n[47] !== ot || n[48] !== lt || n[49] !== ct || n[50] !== et ? (dt = (0, N.jsxs)("div", { ...et,
            children: [nt, ot, lt, ct]
        }), n[46] = nt, n[47] = ot, n[48] = lt, n[49] = ct, n[50] = et, n[51] = dt) : dt = n[51], dt
    }))
}), "1d7fc1", ["45f788", "ba7a76", "87eb11", "b56f5a", "07aa1f", "a9f4b1", "305dd5", "59c871", "c235f8", "b5202c", "c1795b", "3e8391", "c8b97a", "5daffb", "67c39a", "e0b084", "45d996", "fd09f9", "892766", "ec47cb", "5dafcf", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).FilterCSS,
        n = r(d[1]),
        o = r(d[2]),
        s = o.parseTag,
        l = o.parseAttr,
        c = r(d[3]);

    function u(t) {
        return null == t
    }

    function T(t) {
        var n = c.spaceIndex(t);
        if (-1 === n) return {
            html: "",
            closing: "/" === t[t.length - 2]
        };
        var o = "/" === (t = c.trim(t.slice(n + 1, -1)))[t.length - 1];
        return o && (t = c.trim(t.slice(0, -1))), {
            html: t,
            closing: o
        }
    }

    function p(t) {
        var n = {};
        for (var o in t) n[o] = t[o];
        return n
    }

    function h(t) {
        var n = {};
        for (var o in t) Array.isArray(t[o]) ? n[o.toLowerCase()] = t[o].map((function(t) {
            return t.toLowerCase()
        })) : n[o.toLowerCase()] = t[o];
        return n
    }

    function f(o) {
        (o = p(o || {})).stripIgnoreTag && (o.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), o.onIgnoreTag = n.onIgnoreTagStripAll), o.whiteList || o.allowList ? o.whiteList = h(o.whiteList || o.allowList) : o.whiteList = n.whiteList, o.onTag = o.onTag || n.onTag, o.onTagAttr = o.onTagAttr || n.onTagAttr, o.onIgnoreTag = o.onIgnoreTag || n.onIgnoreTag, o.onIgnoreTagAttr = o.onIgnoreTagAttr || n.onIgnoreTagAttr, o.safeAttrValue = o.safeAttrValue || n.safeAttrValue, o.escapeHtml = o.escapeHtml || n.escapeHtml, this.options = o, !1 === o.css ? this.cssFilter = !1 : (o.css = o.css || {}, this.cssFilter = new t(o.css))
    }
    f.prototype.process = function(t) {
        if (!(t = (t = t || "").toString())) return "";
        var o = this.options,
            p = o.whiteList,
            h = o.onTag,
            f = o.onIgnoreTag,
            I = o.onTagAttr,
            A = o.onIgnoreTagAttr,
            v = o.safeAttrValue,
            w = o.escapeHtml,
            L = this.cssFilter;
        o.stripBlankChar && (t = n.stripBlankChar(t)), o.allowCommentTag || (t = n.stripCommentTag(t));
        var C = !1;
        o.stripIgnoreTagBody && (C = n.StripTagBody(o.stripIgnoreTagBody, f), f = C.onIgnoreTag);
        var y = s(t, (function(t, n, o, s, C) {
            var y = {
                    sourcePosition: t,
                    position: n,
                    isClosing: C,
                    isWhite: Object.prototype.hasOwnProperty.call(p, o)
                },
                B = h(o, s, y);
            if (!u(B)) return B;
            if (y.isWhite) {
                if (y.isClosing) return "</" + o + ">";
                var S = T(s),
                    F = p[o],
                    H = l(S.html, (function(t, n) {
                        var s = -1 !== c.indexOf(F, t),
                            l = I(o, t, n, s);
                        return u(l) ? s ? (n = v(o, t, n, L)) ? t + '="' + n + '"' : t : u(l = A(o, t, n, s)) ? void 0 : l : l
                    }));
                return s = "<" + o, H && (s += " " + H), S.closing && (s += " /"), s += ">"
            }
            return u(B = f(o, s, y)) ? w(s) : B
        }), w);
        return C && (y = C.remove(y)), y
    }, m.exports = f
}), "1e56c7", ["698c6a", "baff62", "b58567", "93eb23"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        s = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.UnStyledParsedHtml = void 0;
    var l = s(r(d[2])),
        n = t(r(d[3])),
        o = (r(d[4]), r(d[5])),
        u = r(d[6]),
        h = r(d[7]),
        c = r(d[8]);
    const f = "l1h825yc atm_kd_19r6f69_24z95b atm_kd_19r6f69_1xbvphn_1oszvuo";

    function p({
        htmlString: t,
        allowlist: s,
        styles: l,
        css: o
    }) {
        if (!o || !l) return '';
        const u = {
            onIgnoreTag: t => {
                if (t) return ''
            },
            onTag: (t, s, u) => {
                if (u.isWhite && 'xb' === t) {
                    if (u.isClosing) return '</span>';
                    return `<span class="${o(l.boldHighlight).className}">`
                }
                if (u.isWhite && 'b' === t) {
                    if (u.isClosing) return '</span>';
                    return `<span class="${o(l.highlight).className}">`
                }
                if (u.isWhite && 'a' === t) {
                    if (u.isClosing) return '</a></span>';
                    return `<span class="${o(l.link).className}">${(0,n.default)(s)}`
                }
                if (u.isWhite && 'ul' === t) {
                    if (u.isClosing) return '</ul>';
                    return `<ul class="${o(l.ul).className}">`
                }
                if (u.isWhite && 'li' === t) {
                    if (u.isClosing) return '</li>';
                    return `<li class="${o(l.li).className}">`
                }
                if (u.isWhite && 'strike' === t) {
                    if (u.isClosing) return '</strike>';
                    return `<strike class="${o(l.strike).className}">`
                }
            },
            stripIgnoreTagBody: ['script'],
            whiteList: s
        };
        return (0, n.default)(t, u).replace(/<(script|iframe)/gim, '&lt;$1')
    }

    function y({
        htmlString: t,
        allowlist: s,
        ariaHidden: n,
        styles: u,
        css: h
    }) {
        const y = (0, l.useId)(),
            b = p({
                htmlString: t,
                allowlist: s,
                styles: u,
                css: h
            }),
            _ = (0, o.useCx)(),
            k = b.includes('<mark>') && !n ? {
                id: y,
                'aria-labelledby': y
            } : {};
        return (0, c.jsx)("span", {
            className: _(f),
            dangerouslySetInnerHTML: {
                __html: b
            },
            "aria-hidden": n,
            ...k
        })
    }
    e.UnStyledParsedHtml = y;
    const b = (0, h.extendableStyleFn)((({
        dls19: t
    }) => {
        const s = {
            color: `var(--parsed-html-color, ${t.palette.hof})`,
            fontFamily: t.typography.fontFamily,
            fontWeight: t.typography.weight.book
        };
        return {
            boldHighlight: { ...s,
                fontWeight: t.typography.weight.bold,
                marginBottom: 2 * t.spacing.primitives.baseUnit
            },
            highlight: { ...s,
                fontWeight: t.typography.weight.medium,
                marginBottom: 2 * t.spacing.primitives.baseUnit
            },
            link: { ...s,
                fontWeight: t.typography.weight.medium,
                textDecoration: 'underline'
            },
            li: {
                listStyleType: 'disc',
                listStylePosition: 'outside'
            },
            ul: {
                paddingInlineStart: 16
            },
            strike: {
                textDecoration: 'line-through'
            }
        }
    }));
    e.default = (0, u.withStyles)(b)(y)
}), "3aec37", ["ba7a76", "45f788", "07aa1f", "542333", "ea4b89", "4786a8", "e0b084", "01b367", "b8c07d"]);
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
    "use strict";
    var t = r(d[0]),
        n = r(d[1]);
    r(d[2]);

    function o(t) {
        return null == t
    }

    function s(t) {
        var n = {};
        for (var o in t) n[o] = t[o];
        return n
    }

    function u(n) {
        (n = s(n || {})).whiteList = n.whiteList || t.whiteList, n.onAttr = n.onAttr || t.onAttr, n.onIgnoreAttr = n.onIgnoreAttr || t.onIgnoreAttr, n.safeAttrValue = n.safeAttrValue || t.safeAttrValue, this.options = n
    }
    u.prototype.process = function(t) {
        if (!(t = (t = t || '').toString())) return '';
        var s = this.options,
            u = s.whiteList,
            f = s.onAttr,
            c = s.onIgnoreAttr,
            A = s.safeAttrValue;
        return n(t, (function(t, n, s, p, h) {
            var v = u[s],
                l = !1;
            if (!0 === v ? l = v : 'function' == typeof v ? l = v(p) : v instanceof RegExp && (l = v.test(p)), !0 !== l && (l = !1), p = A(s, p)) {
                var w, I = {
                    position: n,
                    sourcePosition: t,
                    source: h,
                    isWhite: l
                };
                return l ? o(w = f(s, p, I)) ? s + ':' + p : w : o(w = c(s, p, I)) ? void 0 : w
            }
        }))
    }, m.exports = u
}), "538a64", ["c56bec", "6280d5", "6e4d23"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var o = r(d[0]),
        t = r(d[1]),
        n = r(d[2]);

    function f(o, t) {
        return new n(t).process(o)
    }(e = m.exports = f).filterXSS = f, e.FilterXSS = n, (function() {
        for (var n in o) e[n] = o[n];
        for (var f in t) e[f] = t[f]
    })(), window.filterXSS = m.exports, "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope && (self.filterXSS = m.exports)
}), "542333", ["baff62", "b58567", "1e56c7"]);
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
    var t = r(d[0]);
    m.exports = function(n, f) {
        ';' !== (n = t.trimRight(n))[n.length - 1] && (n += ';');
        var c = n.length,
            l = !1,
            s = 0,
            v = 0,
            o = '';

        function u() {
            if (!l) {
                var c = t.trim(n.slice(s, v)),
                    u = c.indexOf(':');
                if (-1 !== u) {
                    var h = t.trim(c.slice(0, u)),
                        x = t.trim(c.slice(u + 1));
                    if (h) {
                        var O = f(s, o.length, h, x, c);
                        O && (o += O + '; ')
                    }
                }
            }
            s = v + 1
        }
        for (; v < c; v++) {
            var h = n[v];
            if ('/' === h && '*' === n[v + 1]) {
                var x = n.indexOf('*/', v + 2);
                if (-1 === x) break;
                s = (v = x + 1) + 1, l = !1
            } else '(' === h ? l = !0 : ')' === h ? l = !1 : ';' === h ? l || u() : '\n' === h && u()
        }
        return t.trim(o)
    }
}), "6280d5", ["6e4d23"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]),
        n = r(d[1]);
    for (var o in (e = m.exports = function(t, o) {
            return new n(o).process(t)
        }).FilterCSS = n, t) e[o] = t[o];
    window.filterCSS = m.exports
}), "698c6a", ["c56bec", "538a64"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    m.exports = {
        indexOf: function(t, n) {
            var o, f;
            if (Array.prototype.indexOf) return t.indexOf(n);
            for (o = 0, f = t.length; o < f; o++)
                if (t[o] === n) return o;
            return -1
        },
        forEach: function(t, n, o) {
            var f, c;
            if (Array.prototype.forEach) return t.forEach(n, o);
            for (f = 0, c = t.length; f < c; f++) n.call(o, t[f], f, t)
        },
        trim: function(t) {
            return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, '')
        },
        trimRight: function(t) {
            return String.prototype.trimRight ? t.trimRight() : t.replace(/(\s*$)/g, '')
        }
    }
}), "6e4d23", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var N = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.TRANSLATION_ANNOUNCEMENT_AMPLIFY_KEY = void 0, e.getMostRecentAnnouncementDismissTime = function(N) {
        return ((0, n.default)(t) || {})[N] || void 0
    };
    var n = N(r(d[1]));
    const t = e.TRANSLATION_ANNOUNCEMENT_AMPLIFY_KEY = 'translation_engine/TRANSLATION_ANNOUNCEMENT'
}), "892766", ["ba7a76", "1f339e"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    m.exports = {
        indexOf: function(t, n) {
            var o, f;
            if (Array.prototype.indexOf) return t.indexOf(n);
            for (o = 0, f = t.length; o < f; o++)
                if (t[o] === n) return o;
            return -1
        },
        forEach: function(t, n, o) {
            var f, c;
            if (Array.prototype.forEach) return t.forEach(n, o);
            for (f = 0, c = t.length; f < c; f++) n.call(o, t[f], f, t)
        },
        trim: function(t) {
            return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "")
        },
        spaceIndex: function(t) {
            var n = /\s|\n|\t/.exec(t);
            return n ? n.index : -1
        }
    }
}), "93eb23", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]);

    function n(n) {
        var c, f = t.spaceIndex(n);
        return c = -1 === f ? n.slice(1, -1) : n.slice(1, f + 1), "/" === (c = t.trim(c).toLowerCase()).slice(0, 1) && (c = c.slice(1)), "/" === c.slice(-1) && (c = c.slice(0, -1)), c
    }

    function c(t) {
        return "</" === t.slice(0, 2)
    }
    var f = /[^a-zA-Z0-9\\_:.-]/gim;

    function s(t, n) {
        for (; n < t.length; n++) {
            var c = t[n];
            if (" " !== c) return "=" === c ? n : -1
        }
    }

    function l(t, n) {
        for (; n < t.length; n++) {
            var c = t[n];
            if (" " !== c) return "'" === c || '"' === c ? n : -1
        }
    }

    function u(t, n) {
        for (; n > 0; n--) {
            var c = t[n];
            if (" " !== c) return "=" === c ? n : -1
        }
    }

    function o(t) {
        return '"' === t[0] && '"' === t[t.length - 1] || "'" === t[0] && "'" === t[t.length - 1]
    }

    function h(t) {
        return o(t) ? t.substr(1, t.length - 2) : t
    }
    e.parseTag = function(t, f, s) {
        var l = "",
            u = 0,
            o = !1,
            h = !1,
            v = 0,
            A = t.length,
            p = "",
            b = "";
        e: for (v = 0; v < A; v++) {
            var _ = t.charAt(v);
            if (!1 === o) {
                if ("<" === _) {
                    o = v;
                    continue
                }
            } else if (!1 === h) {
                if ("<" === _) {
                    l += s(t.slice(u, v)), o = v, u = v;
                    continue
                }
                if (">" === _) {
                    l += s(t.slice(u, o)), p = n(b = t.slice(o, v + 1)), l += f(o, l.length, p, b, c(b)), u = v + 1, o = !1;
                    continue
                }
                if ('"' === _ || "'" === _)
                    for (var w = 1, x = t.charAt(v - w);
                        "" === x.trim() || "=" === x;) {
                        if ("=" === x) {
                            h = _;
                            continue e
                        }
                        x = t.charAt(v - ++w)
                    }
            } else if (_ === h) {
                h = !1;
                continue
            }
        }
        return u < t.length && (l += s(t.substr(u))), l
    }, e.parseAttr = function(n, c) {
        var o = 0,
            v = 0,
            A = [],
            p = !1,
            b = n.length;

        function _(n, s) {
            if (!((n = (n = t.trim(n)).replace(f, "").toLowerCase()).length < 1)) {
                var l = c(n, s || "");
                l && A.push(l)
            }
        }
        for (var w = 0; w < b; w++) {
            var x, C = n.charAt(w);
            if (!1 !== p || "=" !== C)
                if (!1 === p || w !== v)
                    if (/\s|\n|\t/.test(C)) {
                        if (n = n.replace(/\s|\n|\t/g, " "), !1 === p) {
                            if (-1 === (x = s(n, w))) {
                                _(t.trim(n.slice(o, w))), p = !1, o = w + 1;
                                continue
                            }
                            w = x - 1;
                            continue
                        }
                        if (-1 === (x = u(n, w - 1))) {
                            _(p, h(t.trim(n.slice(o, w)))), p = !1, o = w + 1;
                            continue
                        }
                    } else;
            else {
                if (-1 === (x = n.indexOf(C, w + 1))) break;
                _(p, t.trim(n.slice(v + 1, x))), p = !1, o = (w = x) + 1
            } else p = n.slice(o, w), o = w + 1, v = '"' === n.charAt(o) || "'" === n.charAt(o) ? o : l(n, w + 1)
        }
        return o < n.length && (!1 === p ? _(n.slice(o)) : _(p, h(t.trim(n.slice(o))))), t.trim(A.join(" "))
    }
}), "b58567", ["93eb23"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).FilterCSS,
        n = r(d[0]).getDefaultWhiteList,
        s = r(d[1]);

    function o() {
        return {
            a: ["target", "href", "title"],
            abbr: ["title"],
            address: [],
            area: ["shape", "coords", "href", "alt"],
            article: [],
            aside: [],
            audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
            b: [],
            bdi: ["dir"],
            bdo: ["dir"],
            big: [],
            blockquote: ["cite"],
            br: [],
            caption: [],
            center: [],
            cite: [],
            code: [],
            col: ["align", "valign", "span", "width"],
            colgroup: ["align", "valign", "span", "width"],
            dd: [],
            del: ["datetime"],
            details: ["open"],
            div: [],
            dl: [],
            dt: [],
            em: [],
            figcaption: [],
            figure: [],
            font: ["color", "size", "face"],
            footer: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            header: [],
            hr: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            ins: ["datetime"],
            li: [],
            mark: [],
            nav: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            section: [],
            small: [],
            span: [],
            sub: [],
            summary: [],
            sup: [],
            strong: [],
            strike: [],
            table: ["width", "border", "align", "valign"],
            tbody: ["align", "valign"],
            td: ["width", "rowspan", "colspan", "align", "valign"],
            tfoot: ["align", "valign"],
            th: ["width", "rowspan", "colspan", "align", "valign"],
            thead: ["align", "valign"],
            tr: ["rowspan", "align", "valign"],
            tt: [],
            u: [],
            ul: [],
            video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"]
        }
    }
    var l = new t;

    function c(t) {
        return t.replace(u, "&lt;").replace(p, "&gt;")
    }
    var u = /</g,
        p = />/g,
        f = /"/g,
        h = /&quot;/g,
        v = /&#([a-zA-Z0-9]*);?/gim,
        b = /&colon;?/gim,
        w = /&newline;?/gim,
        y = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,
        A = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
        C = /u\s*r\s*l\s*\(.*/gi;

    function x(t) {
        return t.replace(f, "&quot;")
    }

    function k(t) {
        return t.replace(h, '"')
    }

    function I(t) {
        return t.replace(v, (function(t, n) {
            return "x" === n[0] || "X" === n[0] ? String.fromCharCode(parseInt(n.substr(1), 16)) : String.fromCharCode(parseInt(n, 10))
        }))
    }

    function S(t) {
        return t.replace(b, ":").replace(w, " ")
    }

    function T(t) {
        for (var n = "", o = 0, l = t.length; o < l; o++) n += t.charCodeAt(o) < 32 ? " " : t.charAt(o);
        return s.trim(n)
    }

    function q(t) {
        return t = T(t = S(t = I(t = k(t))))
    }

    function D(t) {
        return t = c(t = x(t))
    }
    e.whiteList = {
        a: ["target", "href", "title"],
        abbr: ["title"],
        address: [],
        area: ["shape", "coords", "href", "alt"],
        article: [],
        aside: [],
        audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
        b: [],
        bdi: ["dir"],
        bdo: ["dir"],
        big: [],
        blockquote: ["cite"],
        br: [],
        caption: [],
        center: [],
        cite: [],
        code: [],
        col: ["align", "valign", "span", "width"],
        colgroup: ["align", "valign", "span", "width"],
        dd: [],
        del: ["datetime"],
        details: ["open"],
        div: [],
        dl: [],
        dt: [],
        em: [],
        figcaption: [],
        figure: [],
        font: ["color", "size", "face"],
        footer: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        header: [],
        hr: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        ins: ["datetime"],
        li: [],
        mark: [],
        nav: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        section: [],
        small: [],
        span: [],
        sub: [],
        summary: [],
        sup: [],
        strong: [],
        strike: [],
        table: ["width", "border", "align", "valign"],
        tbody: ["align", "valign"],
        td: ["width", "rowspan", "colspan", "align", "valign"],
        tfoot: ["align", "valign"],
        th: ["width", "rowspan", "colspan", "align", "valign"],
        thead: ["align", "valign"],
        tr: ["rowspan", "align", "valign"],
        tt: [],
        u: [],
        ul: [],
        video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"]
    }, e.getDefaultWhiteList = o, e.onTag = function(t, n, s) {}, e.onIgnoreTag = function(t, n, s) {}, e.onTagAttr = function(t, n, s) {}, e.onIgnoreTagAttr = function(t, n, s) {}, e.safeAttrValue = function(t, n, o, c) {
        if (o = q(o), "href" === n || "src" === n) {
            if ("#" === (o = s.trim(o))) return "#";
            if ("http://" !== o.substr(0, 7) && "https://" !== o.substr(0, 8) && "mailto:" !== o.substr(0, 7) && "tel:" !== o.substr(0, 4) && "data:image/" !== o.substr(0, 11) && "ftp://" !== o.substr(0, 6) && "./" !== o.substr(0, 2) && "../" !== o.substr(0, 3) && "#" !== o[0] && "/" !== o[0]) return ""
        } else if ("background" === n) {
            if (y.lastIndex = 0, y.test(o)) return ""
        } else if ("style" === n) {
            if (A.lastIndex = 0, A.test(o)) return "";
            if (C.lastIndex = 0, C.test(o) && (y.lastIndex = 0, y.test(o))) return "";
            !1 !== c && (o = (c = c || l).process(o))
        }
        return o = D(o)
    }, e.escapeHtml = c, e.escapeQuote = x, e.unescapeQuote = k, e.escapeHtmlEntities = I, e.escapeDangerHtml5Entities = S, e.clearNonPrintableCharacter = T, e.friendlyAttrValue = q, e.escapeAttrValue = D, e.onIgnoreTagStripAll = function() {
        return ""
    }, e.StripTagBody = function(t, n) {
        "function" != typeof n && (n = function() {});
        var o = !Array.isArray(t);

        function l(n) {
            return !!o || -1 !== s.indexOf(t, n)
        }
        var c = [],
            u = !1;
        return {
            onIgnoreTag: function(t, s, o) {
                if (l(t)) {
                    if (o.isClosing) {
                        var p = "[/removed]",
                            f = o.position + 10;
                        return c.push([!1 !== u ? u : o.position, f]), u = !1, p
                    }
                    return u || (u = o.position), "[removed]"
                }
                return n(t, s, o)
            },
            remove: function(t) {
                var n = "",
                    o = 0;
                return s.forEach(c, (function(s) {
                    n += t.slice(o, s[0]), o = s[1]
                })), n += t.slice(o)
            }
        }
    }, e.stripCommentTag = function(t) {
        for (var n = "", s = 0; s < t.length;) {
            var o = t.indexOf("\x3c!--", s);
            if (-1 === o) {
                n += t.slice(s);
                break
            }
            n += t.slice(s, o);
            var l = t.indexOf("--\x3e", o);
            if (-1 === l) break;
            s = l + 3
        }
        return n
    }, e.stripBlankChar = function(t) {
        var n = t.split("");
        return (n = n.filter((function(t) {
            var n = t.charCodeAt(0);
            return 127 !== n && (!(n <= 31) || (10 === n || 13 === n))
        }))).join("")
    }, e.cssFilter = l, e.getDefaultCSSWhiteList = n
}), "baff62", ["698c6a", "93eb23"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";

    function t() {
        var t = {
            "align-content": !1,
            "align-items": !1,
            "align-self": !1,
            "alignment-adjust": !1,
            "alignment-baseline": !1,
            all: !1,
            "anchor-point": !1,
            animation: !1,
            "animation-delay": !1,
            "animation-direction": !1,
            "animation-duration": !1,
            "animation-fill-mode": !1,
            "animation-iteration-count": !1,
            "animation-name": !1,
            "animation-play-state": !1,
            "animation-timing-function": !1,
            azimuth: !1,
            "backface-visibility": !1,
            background: !0,
            "background-attachment": !0,
            "background-clip": !0,
            "background-color": !0,
            "background-image": !0,
            "background-origin": !0,
            "background-position": !0,
            "background-repeat": !0,
            "background-size": !0,
            "baseline-shift": !1,
            binding: !1,
            bleed: !1,
            "bookmark-label": !1,
            "bookmark-level": !1,
            "bookmark-state": !1,
            border: !0,
            "border-bottom": !0,
            "border-bottom-color": !0,
            "border-bottom-left-radius": !0,
            "border-bottom-right-radius": !0,
            "border-bottom-style": !0,
            "border-bottom-width": !0,
            "border-collapse": !0,
            "border-color": !0,
            "border-image": !0,
            "border-image-outset": !0,
            "border-image-repeat": !0,
            "border-image-slice": !0,
            "border-image-source": !0,
            "border-image-width": !0,
            "border-left": !0,
            "border-left-color": !0,
            "border-left-style": !0,
            "border-left-width": !0,
            "border-radius": !0,
            "border-right": !0,
            "border-right-color": !0,
            "border-right-style": !0,
            "border-right-width": !0,
            "border-spacing": !0,
            "border-style": !0,
            "border-top": !0,
            "border-top-color": !0,
            "border-top-left-radius": !0,
            "border-top-right-radius": !0,
            "border-top-style": !0,
            "border-top-width": !0,
            "border-width": !0,
            bottom: !1,
            "box-decoration-break": !0,
            "box-shadow": !0,
            "box-sizing": !0,
            "box-snap": !0,
            "box-suppress": !0,
            "break-after": !0,
            "break-before": !0,
            "break-inside": !0,
            "caption-side": !1,
            chains: !1,
            clear: !0,
            clip: !1,
            "clip-path": !1,
            "clip-rule": !1,
            color: !0,
            "color-interpolation-filters": !0,
            "column-count": !1,
            "column-fill": !1,
            "column-gap": !1,
            "column-rule": !1,
            "column-rule-color": !1,
            "column-rule-style": !1,
            "column-rule-width": !1,
            "column-span": !1,
            "column-width": !1,
            columns: !1,
            contain: !1,
            content: !1,
            "counter-increment": !1,
            "counter-reset": !1,
            "counter-set": !1,
            crop: !1,
            cue: !1,
            "cue-after": !1,
            "cue-before": !1,
            cursor: !1,
            direction: !1,
            display: !0,
            "display-inside": !0,
            "display-list": !0,
            "display-outside": !0,
            "dominant-baseline": !1,
            elevation: !1,
            "empty-cells": !1,
            filter: !1,
            flex: !1,
            "flex-basis": !1,
            "flex-direction": !1,
            "flex-flow": !1,
            "flex-grow": !1,
            "flex-shrink": !1,
            "flex-wrap": !1,
            float: !1,
            "float-offset": !1,
            "flood-color": !1,
            "flood-opacity": !1,
            "flow-from": !1,
            "flow-into": !1,
            font: !0,
            "font-family": !0,
            "font-feature-settings": !0,
            "font-kerning": !0,
            "font-language-override": !0,
            "font-size": !0,
            "font-size-adjust": !0,
            "font-stretch": !0,
            "font-style": !0,
            "font-synthesis": !0,
            "font-variant": !0,
            "font-variant-alternates": !0,
            "font-variant-caps": !0,
            "font-variant-east-asian": !0,
            "font-variant-ligatures": !0,
            "font-variant-numeric": !0,
            "font-variant-position": !0,
            "font-weight": !0,
            grid: !1,
            "grid-area": !1,
            "grid-auto-columns": !1,
            "grid-auto-flow": !1,
            "grid-auto-rows": !1,
            "grid-column": !1,
            "grid-column-end": !1,
            "grid-column-start": !1,
            "grid-row": !1,
            "grid-row-end": !1,
            "grid-row-start": !1,
            "grid-template": !1,
            "grid-template-areas": !1,
            "grid-template-columns": !1,
            "grid-template-rows": !1,
            "hanging-punctuation": !1,
            height: !0,
            hyphens: !1,
            icon: !1,
            "image-orientation": !1,
            "image-resolution": !1,
            "ime-mode": !1,
            "initial-letters": !1,
            "inline-box-align": !1,
            "justify-content": !1,
            "justify-items": !1,
            "justify-self": !1,
            left: !1,
            "letter-spacing": !0,
            "lighting-color": !0,
            "line-box-contain": !1,
            "line-break": !1,
            "line-grid": !1,
            "line-height": !1,
            "line-snap": !1,
            "line-stacking": !1,
            "line-stacking-ruby": !1,
            "line-stacking-shift": !1,
            "line-stacking-strategy": !1,
            "list-style": !0,
            "list-style-image": !0,
            "list-style-position": !0,
            "list-style-type": !0,
            margin: !0,
            "margin-bottom": !0,
            "margin-left": !0,
            "margin-right": !0,
            "margin-top": !0,
            "marker-offset": !1,
            "marker-side": !1,
            marks: !1,
            mask: !1,
            "mask-box": !1,
            "mask-box-outset": !1,
            "mask-box-repeat": !1,
            "mask-box-slice": !1,
            "mask-box-source": !1,
            "mask-box-width": !1,
            "mask-clip": !1,
            "mask-image": !1,
            "mask-origin": !1,
            "mask-position": !1,
            "mask-repeat": !1,
            "mask-size": !1,
            "mask-source-type": !1,
            "mask-type": !1,
            "max-height": !0,
            "max-lines": !1,
            "max-width": !0,
            "min-height": !0,
            "min-width": !0,
            "move-to": !1,
            "nav-down": !1,
            "nav-index": !1,
            "nav-left": !1,
            "nav-right": !1,
            "nav-up": !1,
            "object-fit": !1,
            "object-position": !1,
            opacity: !1,
            order: !1,
            orphans: !1,
            outline: !1,
            "outline-color": !1,
            "outline-offset": !1,
            "outline-style": !1,
            "outline-width": !1,
            overflow: !1,
            "overflow-wrap": !1,
            "overflow-x": !1,
            "overflow-y": !1,
            padding: !0,
            "padding-bottom": !0,
            "padding-left": !0,
            "padding-right": !0,
            "padding-top": !0,
            page: !1,
            "page-break-after": !1,
            "page-break-before": !1,
            "page-break-inside": !1,
            "page-policy": !1,
            pause: !1,
            "pause-after": !1,
            "pause-before": !1,
            perspective: !1,
            "perspective-origin": !1,
            pitch: !1,
            "pitch-range": !1,
            "play-during": !1,
            position: !1,
            "presentation-level": !1,
            quotes: !1,
            "region-fragment": !1,
            resize: !1,
            rest: !1,
            "rest-after": !1,
            "rest-before": !1,
            richness: !1,
            right: !1,
            rotation: !1,
            "rotation-point": !1,
            "ruby-align": !1,
            "ruby-merge": !1,
            "ruby-position": !1,
            "shape-image-threshold": !1,
            "shape-outside": !1,
            "shape-margin": !1,
            size: !1,
            speak: !1,
            "speak-as": !1,
            "speak-header": !1,
            "speak-numeral": !1,
            "speak-punctuation": !1,
            "speech-rate": !1,
            stress: !1,
            "string-set": !1,
            "tab-size": !1,
            "table-layout": !1,
            "text-align": !0,
            "text-align-last": !0,
            "text-combine-upright": !0,
            "text-decoration": !0,
            "text-decoration-color": !0,
            "text-decoration-line": !0,
            "text-decoration-skip": !0,
            "text-decoration-style": !0,
            "text-emphasis": !0,
            "text-emphasis-color": !0,
            "text-emphasis-position": !0,
            "text-emphasis-style": !0,
            "text-height": !0,
            "text-indent": !0,
            "text-justify": !0,
            "text-orientation": !0,
            "text-overflow": !0,
            "text-shadow": !0,
            "text-space-collapse": !0,
            "text-transform": !0,
            "text-underline-position": !0,
            "text-wrap": !0,
            top: !1,
            transform: !1,
            "transform-origin": !1,
            "transform-style": !1,
            transition: !1,
            "transition-delay": !1,
            "transition-duration": !1,
            "transition-property": !1,
            "transition-timing-function": !1,
            "unicode-bidi": !1,
            "vertical-align": !1,
            visibility: !1,
            "voice-balance": !1,
            "voice-duration": !1,
            "voice-family": !1,
            "voice-pitch": !1,
            "voice-range": !1,
            "voice-rate": !1,
            "voice-stress": !1,
            "voice-volume": !1,
            volume: !1,
            "white-space": !1,
            widows: !1,
            width: !0,
            "will-change": !1,
            "word-break": !0,
            "word-spacing": !0,
            "word-wrap": !0,
            "wrap-flow": !1,
            "wrap-through": !1,
            "writing-mode": !1,
            "z-index": !1
        };
        return t
    }
    var o = /javascript\s*\:/gim;
    e.whiteList = t(), e.getDefaultWhiteList = t, e.onAttr = function(t, o, n) {}, e.onIgnoreAttr = function(t, o, n) {}, e.safeAttrValue = function(t, n) {
        return o.test(n) ? '' : n
    }
}), "c56bec", []);
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
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = r(d[0]),
        o = r(d[1]),
        l = r(d[2]);
    e.default = (0, l.withStyles)((0, o.extendableStyleFn)((({
        dls19: t
    }) => {
        const o = {
            color: `var(--parsed-html-color, ${t.palette.hof})`,
            fontFamily: t.typography.fontFamily,
            fontWeight: t.typography.weight.book
        };
        return {
            highlight: { ...o,
                fontWeight: t.typography.weight.medium,
                marginBottom: 16
            },
            li: {
                listStylePosition: 'outside',
                listStyleType: 'disc'
            },
            link: { ...o,
                fontWeight: t.typography.weight.medium
            },
            ul: {
                paddingInlineStart: 16
            }
        }
    })))(t.UnStyledParsedHtml)
}), "ec47cb", ["3aec37", "01b367", "e0b084"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        l = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return (0, c.jsx)(f.default, { ...t,
            loader: o,
            renderPlaceholder: f.renderNull
        })
    };
    var u = l(r(d[0])),
        f = (l(r(d[2])), t(r(d[3]))),
        n = l(r(d[4])),
        c = r(d[5]);
    const o = Object.assign((0, n.default)((() => r(d[7])(d[6]).then(u.default))), {
        prefetch: () => r(d[7]).prefetch(d[6])
    })
}), "fd09f9", ["45f788", "ba7a76", "07aa1f", "018c3b", "b4385c", "b8c07d", "9c259a", "057569"]);
__r("a9f4b1").extend({
    "stays.ugc_translation.translate.cta_text.v5": "Translate place description"
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-pdp-core-ui-sections/sections/UgcTranslation/index.5ba9ff47a5.js.map