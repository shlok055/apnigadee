__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        o = r(d[1]).default;

    function n() {
        const t = o(r(d[2]));
        return n = function() {
            return t
        }, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    o(r(d[3]));
    var l = o(r(d[4])),
        u = o(r(d[5])),
        c = r(d[6]),
        s = t(r(d[7])),
        f = o(r(d[8])),
        p = o(r(d[9])),
        b = o(r(d[10])),
        v = o(r(d[11])),
        _ = o(r(d[12])),
        x = t(r(d[13])),
        h = t(r(d[14])),
        y = o(r(d[15])),
        k = o(r(d[16])),
        A = t(r(d[17])),
        T = t(r(d[18])),
        P = o(r(d[19])),
        I = r(d[20]);
    const S = { ...{
                children: n().default.node,
                href: p.default,
                submit: n().default.bool,
                onPress: n().default.func,
                beforeIcon: u.default,
                afterIcon: u.default,
                openInNewWindow: n().default.bool,
                navigation: n().default.bool,
                footer: n().default.bool,
                mono: n().default.bool,
                loading: n().default.bool,
                textAlign: (0, f.default)(A.textAlignPositionProp),
                verticalAlign: T.verticalAlignPositionProp,
                itemPropSameAs: n().default.bool,
                disabled: n().default.bool,
                isExpander: n().default.bool,
                expanded: n().default.bool,
                ariaControls: n().default.string,
                ariaCurrent: n().default.oneOf(Object.values(k.default)),
                ariaHasPopup: n().default.bool,
                ariaLabel: n().default.string,
                linkRef: n().default.func,
                ampVarsClickType: n().default.string,
                ampReplace: n().default.string,
                velouteId: n().default.string,
                inlineBlockWithIcon: n().default.bool,
                inverse: n().default.bool,
                noWrap: n().default.bool,
                fullWidth: n().default.bool,
                customStyles: (0, _.default)(x.default),
                removeOutlineOnPress: n().default.bool,
                inlineWithText: n().default.bool,
                role: n().default.string
            },
            ...c.withStylesPropTypes,
            ...s.withBrandPropTypes
        },
        D = {
            children: null,
            onPress: null,
            openInNewWindow: !1,
            navigation: !1,
            footer: !1,
            mono: !1,
            loading: !1,
            textAlign: A.default.START,
            verticalAlign: T.default.BASELINE,
            itemPropSameAs: !1,
            submit: !1,
            disabled: !1,
            isExpander: !1,
            expanded: !1,
            ariaControls: void 0,
            ariaCurrent: null,
            ariaHasPopup: !1,
            ariaLabel: void 0,
            ampVarsClickType: void 0,
            ampReplace: void 0,
            linkRef() {},
            velouteId: void 0,
            inlineBlockWithIcon: !1,
            inverse: !1,
            noWrap: !1,
            fullWidth: !1,
            customStyles: null,
            href: void 0,
            beforeIcon: void 0,
            afterIcon: void 0,
            removeOutlineOnPress: !1,
            inlineWithText: !1,
            role: void 0
        };

    function C({
        css: t,
        brand: o,
        children: n,
        href: l,
        onPress: u,
        beforeIcon: c,
        afterIcon: f,
        openInNewWindow: p,
        navigation: b,
        footer: _,
        mono: k,
        loading: S,
        textAlign: D,
        verticalAlign: C,
        itemPropSameAs: L,
        itemProp: W,
        submit: w,
        disabled: O,
        isExpander: E,
        expanded: R,
        ariaControls: M,
        ariaCurrent: j,
        ariaHasPopup: N,
        ariaLabel: B,
        styles: H,
        ampVarsClickType: Y,
        ampReplace: U,
        linkRef: F,
        velouteId: V,
        inlineBlockWithIcon: K,
        inverse: J,
        noWrap: X,
        fullWidth: q,
        customStyles: z,
        removeOutlineOnPress: G,
        inlineWithText: Q,
        role: Z
    }) {
        if (S) return (0, I.jsx)(v.default, {
            componentID: x.CUSTOM_STYLES_KEY,
            customStyles: z,
            styleMapping: x.default,
            children: (0, I.jsx)("div", { ...t(H.loader),
                children: (0, I.jsx)(y.default, {
                    inline: !0
                })
            })
        });
        let $;
        $ = c ? (0, I.jsx)(P.default, {
            before: c,
            children: n
        }) : f ? (0, I.jsx)(P.default, {
            after: f,
            children: n
        }) : n;
        const ee = !l || O,
            te = E ? R : void 0,
            oe = o === s.BRAND_SELECT,
            ne = o === s.BRAND_LUXURY,
            le = K && (!!c || !!f);
        return (0, I.jsx)(v.default, {
            componentID: x.CUSTOM_STYLES_KEY,
            customStyles: z,
            inline: le,
            styleMapping: x.default,
            children: (0, I.jsx)(h.default, {
                href: l,
                onClick: t => {
                    O ? t.preventDefault() : null != u && u(t)
                },
                openInNewWindow: p,
                itemProp: W || (L ? 'sameAs' : null),
                type: w ? h.buttonTypes.submit : h.buttonTypes.button,
                disabled: O,
                ariaControls: M,
                ariaCurrent: j,
                ariaDisabled: O,
                ariaExpanded: te,
                ariaHasPopup: N,
                ariaLabel: B,
                removeOutlineOnPress: G,
                ampVarsClickType: Y,
                ampReplace: U,
                buttonAnchorRef: F,
                velouteId: V,
                role: Z,
                ...t(H.component, ee && H.component_button, !O && H.component_interactions, D === A.default.CENTER && H.button_center_align, D === A.default.START && H.button_start_align, D === A.default.END && H.button_end_align, D === A.default.JUSTIFY && H.button_justify_align, C === T.default.MIDDLE && H.button_middle_align, C === T.default.TOP && H.button_top_align, C === T.default.BOTTOM && H.button_bottom_align, oe && H.color_select, ne && H.color_luxury, O && H.component_disabled, b && H.navigation, J && H.color_inverse, _ && H.footer, k && H.mono, le && H.component_inlineBlock, X && H.component_noWrap, q && ee && H.button_full_width, q && !ee && H.component_full_width, Q && H.component_inlineWithText),
                children: $
            })
        })
    }
    C.propTypes = S, C.defaultProps = D;
    e.default = (0, s.default)((0, l.default)('Link', ['onPress'])((0, c.withStyles)((0, b.default)((({
        color: t,
        font: o,
        unit: n
    }) => ({
        color_select: {
            color: t.brand.plus,
            ':active': {
                color: t.buttons.selectActiveColor
            },
            ':hover': {
                color: t.brand.plus
            }
        },
        color_luxury: {
            color: t.brand.luxury,
            ':active': {
                color: t.buttons.luxuryActiveColor
            },
            ':hover': {
                color: t.brand.luxury
            }
        },
        color_inverse: {
            color: t.white,
            ':hover': {
                color: t.textLinkInverseHover
            },
            ':active': {
                color: t.textLinkInverseActive
            }
        },
        component: {
            color: t.textLink,
            font: 'inherit',
            fontFamily: o.FONT_FAMILY,
            textDecoration: o.link.textDecoration
        },
        component_noWrap: {
            whiteSpace: 'nowrap'
        },
        component_interactions: {
            ':hover': {
                textDecoration: o.link.textDecorationHover,
                color: t.textLinkHover
            },
            ':focus': {
                textDecoration: o.link.textDecorationFocus
            },
            ':active': {
                color: t.textLinkActive
            }
        },
        component_button: {
            appearance: 'none',
            background: 'transparent',
            border: 0,
            cursor: 'pointer',
            margin: 0,
            padding: 0,
            userSelect: 'auto',
            ':active': {
                outline: 0
            }
        },
        button_center_align: {
            textAlign: 'center'
        },
        button_start_align: {
            textAlign: 'left'
        },
        button_end_align: {
            textAlign: 'right'
        },
        button_justify_align: {
            textAlign: 'justify'
        },
        button_middle_align: {
            verticalAlign: 'middle'
        },
        button_top_align: {
            verticalAlign: 'top'
        },
        button_bottom_align: {
            verticalAlign: 'bottom'
        },
        button_full_width: {
            display: 'block',
            width: '100%'
        },
        component_disabled: {
            color: t.textMuted,
            cursor: 'default',
            ':hover': {
                color: t.textMuted,
                textDecoration: o.link.textDecorationDisabled
            },
            ':active': {
                color: t.textMuted
            }
        },
        component_inlineBlock: {
            display: 'inline-block'
        },
        component_full_width: {
            display: 'block'
        },
        component_inlineWithText: {
            textDecoration: o.link.textDecorationUnderline
        },
        navigation: {
            color: t.textLinkNavigation,
            ':hover': {
                color: t.textLinkNavigationHover
            }
        },
        footer: {
            color: t.textMuted,
            ':hover': {
                color: t.textMuted
            }
        },
        mono: {
            color: t.core.hof,
            ':hover': {
                color: t.core.hof
            },
            textDecoration: o.link.textDecorationMono
        },
        loader: {
            display: 'inline',
            marginLeft: n,
            marginRight: n
        }
    }))), {
        pureComponent: !0
    })(C)))
}), "1a0fc2", ["45f788", "ba7a76", "b56f5a", "07aa1f", "9092d5", "d104f6", "e0b084", "3c7349", "0a2076", "d104f6", "4e73ec", "4267ec", "66b80d", "54f7e0", "54b6d9", "8dfc96", "376747", "4ec503", "23650d", "660775", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function o() {
        const n = t(r(d[1]));
        return o = function() {
            return n
        }, n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.verticalAlignPositionProp = e.default = void 0;
    const n = {
        BASELINE: 'baseline',
        TOP: 'top',
        MIDDLE: 'middle',
        BOTTOM: 'bottom'
    };
    e.verticalAlignPositionProp = o().default.oneOf(Object.values(n));
    e.default = n
}), "23650d", ["ba7a76", "b56f5a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function u() {
        const n = t(r(d[1]));
        return u = function() {
            return n
        }, n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.ariaCurrentType = void 0;
    const n = {
        PAGE: 'page',
        STEP: 'step',
        LOCATION: 'location',
        DATE: 'date',
        TIME: 'time',
        TRUE: 'true'
    };
    e.default = n;
    e.ariaCurrentType = u().default.oneOf(Object.values(n))
}), "376747", ["ba7a76", "b56f5a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;

    function t() {
        const u = n(r(d[1]));
        return t = function() {
            return u
        }, u
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    n(r(d[2]));
    var u = r(d[3]);
    const o = { ...{
            useNonBreakingSpace: t().default.bool
        }
    };

    function s({
        useNonBreakingSpace: n
    }) {
        return n ? (0, u.jsx)("span", {
            "aria-hidden": "true",
            children: "\xa0\xb7\xa0"
        }) : (0, u.jsx)("span", {
            "aria-hidden": "true",
            children: " \xb7 "
        })
    }
    s.propTypes = o, s.defaultProps = {
        useNonBreakingSpace: !1
    };
    e.default = s
}), "3a7cec", ["ba7a76", "b56f5a", "07aa1f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1]));

    function n() {
        const l = t(r(d[2]));
        return n = function() {
            return l
        }, l
    }
    var l = r(d[3]);
    const o = {
        children: n().default.node,
        componentID: n().default.string.isRequired,
        customStyles: n().default.object,
        fillContainer: n().default.bool,
        inline: n().default.bool,
        styleMapping: n().default.object
    };

    function u({
        children: t,
        componentID: n,
        customStyles: o,
        fillContainer: u,
        inline: s,
        styleMapping: c
    }) {
        if (!o || !Object.keys(o).length) return t;
        const f = {
            [n]: Object.fromEntries(Object.entries(o).map((([t, n]) => [c[t], 'number' == typeof n ? `${n}px` : n])).filter((([t]) => !!t)))
        };
        return (0, l.jsx)("div", {
            style: { ...f[n],
                ...u ? {
                    height: '100%',
                    width: '100%'
                } : {},
                ...s ? {
                    display: 'inline-block'
                } : {}
            },
            children: t
        })
    }
    u.propTypes = o, u.defaultProps = {
        children: null,
        customStyles: null,
        fillContainer: !1,
        inline: !1,
        styleMapping: {}
    };
    e.default = u
}), "4267ec", ["ba7a76", "07aa1f", "b56f5a", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var c = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = c(r(d[1])),
        t = r(d[2]);
    const o = (0, l.default)({
        svgContents: "<path d=\"m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z\" />",
        svgProps: {
            viewBox: "0 0 1000 1000"
        }
    }, 'IconBelo');
    e.default = o;
    o.categories = [t.AIRBNB_PRODUCTS]
}), "461137", ["ba7a76", "a89bd1", "72354b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return n => {
            let c;
            const s = p.find((t => t[0] === n));
            s ? c = s[1] : (c = f(n), p.push([n, c]));
            const u = t(c);
            return Object.entries(t(n)).reduce(((t, [n, c]) => {
                const s = l(c, u[n]),
                    f = Object.keys(s).length > 0;
                return t[n] = f ? { ...c,
                    [o]: s
                } : c, t
            }), {})
        }
    };
    var n = t(r(d[1])),
        c = t(r(d[2]));
    const o = '@supports(--custom: properties)',
        s = '__css_unit_placeholder__';

    function u(t = [], c) {
        const o = 'number' == typeof c ? c + s : c;
        return 'var(--' + (0, n.default)(t.join('-')) + ', ' + o + ')'
    }

    function f(t, n = []) {
        const c = {};
        return Object.entries(t).forEach((([t, o]) => {
            c[t] = 'responsive' === t ? o : null !== o && 'object' == typeof o ? f(o, [...n, t]) : u([...n, t], o)
        })), c
    }

    function l(t, n) {
        const o = {};
        return Object.entries(n).forEach((([n, u]) => {
            if (null !== u && 'object' == typeof u) {
                const c = l(t[n], u);
                Object.keys(c).length > 0 && (o[n] = c)
            } else if (u && u !== t[n]) {
                const t = c.default[n] ? '' : 'px';
                o[n] = u.replace(s, t)
            }
        })), o
    }
    const p = []
}), "4e73ec", ["ba7a76", "bba9aa", "6fb6d6"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function n() {
        const o = t(r(d[1]));
        return n = function() {
            return o
        }, o
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.textAlignPositionProp = e.default = void 0;
    const o = {
        START: 'start',
        CENTER: 'center',
        END: 'end',
        JUSTIFY: 'justify'
    };
    e.textAlignPositionProp = n().default.oneOf(Object.values(o));
    e.default = o
}), "4ec503", ["ba7a76", "b56f5a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default;

    function n() {
        const o = l(r(d[1]));
        return n = function() {
            return o
        }, o
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.buttonTypes = void 0;
    l(r(d[2]));
    var o = l(r(d[3])),
        t = l(r(d[4])),
        u = r(d[5]);
    const s = e.buttonTypes = {
            button: 'button',
            submit: 'submit'
        },
        f = {
            className: n().default.string,
            style: n().default.any,
            id: n().default.string,
            children: n().default.node,
            type: n().default.oneOf(Object.keys(s)),
            href: n().default.string,
            openInNewWindow: n().default.bool,
            role: n().default.string,
            disabled: n().default.bool,
            onClick: (0, o.default)(),
            onPress: (0, o.default)(),
            onFocus: n().default.func,
            onBlur: n().default.func,
            onMouseDown: n().default.func,
            onMouseUp: n().default.func,
            onMouseEnter: n().default.func,
            onMouseLeave: n().default.func,
            onDragStart: n().default.func,
            onDragEnd: n().default.func,
            ariaLabel: n().default.string,
            ariaSelected: n().default.bool,
            ariaCurrent: n().default.oneOf(Object.values(t.default)),
            ariaDescribedBy: n().default.string,
            ariaDisabled: n().default.bool,
            ariaHasPopup: n().default.bool,
            ariaExpanded: n().default.bool,
            ariaControls: n().default.string,
            ariaPressed: n().default.bool,
            removeOutlineOnPress: n().default.bool,
            ampVarsClickType: n().default.string,
            ampReplace: n().default.string,
            itemProp: n().default.string,
            loading: n().default.bool,
            buttonAnchorRef: n().default.func,
            velouteId: n().default.string
        },
        c = {
            className: null,
            style: null,
            id: void 0,
            children: null,
            type: s.button,
            href: null,
            openInNewWindow: !1,
            role: null,
            disabled: null,
            onClick: null,
            onPress: null,
            onFocus: null,
            onBlur: null,
            onMouseDown: null,
            onMouseUp: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onDragStart: null,
            onDragEnd: null,
            ariaLabel: void 0,
            ariaSelected: void 0,
            ariaCurrent: null,
            ariaDescribedBy: void 0,
            ariaDisabled: !1,
            ariaHasPopup: !1,
            ariaExpanded: void 0,
            ariaControls: void 0,
            ariaPressed: void 0,
            removeOutlineOnPress: !1,
            ampVarsClickType: void 0,
            ampReplace: void 0,
            itemProp: void 0,
            loading: !1,
            buttonAnchorRef: null,
            velouteId: void 0
        };

    function p({
        className: l,
        style: n,
        id: o,
        children: t,
        type: f,
        href: c,
        openInNewWindow: p,
        role: v,
        disabled: b,
        onClick: y,
        onPress: D,
        onFocus: P,
        onBlur: M,
        onMouseDown: h,
        onMouseUp: C,
        onMouseEnter: O,
        onMouseLeave: k,
        onDragStart: E,
        onDragEnd: w,
        ariaLabel: T,
        ariaSelected: B,
        ariaCurrent: L,
        ariaDescribedBy: N,
        ariaDisabled: S,
        ariaHasPopup: j,
        ariaExpanded: x,
        ariaControls: I,
        ariaPressed: R,
        removeOutlineOnPress: W,
        ampVarsClickType: _,
        ampReplace: F,
        itemProp: U,
        loading: A,
        buttonAnchorRef: H,
        velouteId: V,
        ...q
    }) {
        const z = !c || b || A,
            G = C || W ? l => {
                W && l.currentTarget.blur(), C && C(l)
            } : void 0,
            J = Object.entries(q).filter((([l]) => l.startsWith('data-'))).reduce(((l, [n, o]) => ({ ...l,
                [n]: o
            })), {}),
            K = {
                className: null != l ? l : void 0,
                style: n,
                id: null != o ? o : void 0,
                role: null != v ? v : void 0,
                onClick: 'function' == typeof y && y || 'function' == typeof D && D || void 0,
                onFocus: null != P ? P : void 0,
                onBlur: null != M ? M : void 0,
                onMouseDown: null != h ? h : void 0,
                onMouseUp: G,
                onMouseEnter: null != O ? O : void 0,
                onMouseLeave: null != k ? k : void 0,
                onDragStart: null != E ? E : void 0,
                onDragEnd: null != w ? w : void 0,
                'aria-label': null != T ? T : void 0,
                'aria-selected': null != B ? B : void 0,
                'aria-current': null != L ? L : void 0,
                'aria-describedby': null != N ? N : void 0,
                'aria-disabled': !!S || void 0,
                'aria-haspopup': !!j || void 0,
                'aria-expanded': null != x ? x : void 0,
                'aria-controls': null != I ? I : void 0,
                'aria-busy': null != A ? A : void 0,
                'data-vars-click-type': _,
                'data-amp-replace': F,
                'data-veloute': V,
                itemProp: null != U ? U : void 0
            };
        if (z) {
            A && delete K.onClick;
            const l = A ? s.button : f,
                n = b && !A || void 0;
            return (0, u.jsx)("button", {
                type: null != l ? l : void 0,
                disabled: n,
                ref: null != H ? H : void 0,
                "aria-pressed": null != R ? R : void 0,
                ...K,
                ...J,
                children: t
            })
        }
        const Q = c && (c.startsWith('//') || !c.startsWith('/'));
        return (0, u.jsx)("a", {
            href: c,
            target: p ? '_blank' : null,
            rel: p && Q ? 'noopener noreferrer' : null,
            ref: null != H ? H : void 0,
            ...K,
            ...J,
            children: t
        })
    }
    p.propTypes = f, p.defaultProps = c, p.buttonTypes = s;
    e.default = p
}), "54b6d9", ["ba7a76", "b56f5a", "07aa1f", "0a2076", "376747", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.CUSTOM_STYLES_KEY = void 0;
    e.CUSTOM_STYLES_KEY = 'link';
    e.default = {
        fontFamily: '--font-font_family',
        textColor: '--color-text-link',
        textColorActive: '--color-text-link-active',
        textColorDisabled: '--color-text-muted',
        textColorHover: '--color-text-link-hover',
        textDecoration: '--font-link-text-decoration',
        textDecorationHover: '--font-link-text-decoration-hover',
        textDecorationFocus: '--font-link-text-decoration-focus',
        textDecorationDisabled: '--font-link-text-decoration-disabled',
        textDecorationMono: '--font-link-text-decoration-mono'
    }
}), "54f7e0", []);
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
        const u = {};
        return Object.keys(t).forEach((t => {
            u[t] = n().default.oneOfType([n().default.string, n().default.number])
        })), n().default.shape(u)
    }
}), "66b80d", ["ba7a76", "b56f5a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const o = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridColumn: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    };

    function t(o, t) {
        return o + t.charAt(0).toUpperCase() + t.slice(1)
    }
    const l = ['Webkit', 'ms', 'Moz', 'O'];
    Object.keys(o).forEach((n => {
        l.forEach((l => {
            o[t(l, n)] = o[n]
        }))
    }));
    e.default = o
}), "6fb6d6", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        o = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    o(r(d[2]));

    function l() {
        const t = o(r(d[3]));
        return l = function() {
            return t
        }, t
    }
    var n = r(d[4]),
        u = t(r(d[5])),
        s = o(r(d[6])),
        c = o(r(d[7])),
        f = o(r(d[8])),
        h = t(r(d[9])),
        _ = r(d[10]);
    const p = { ...{ ...u.withBrandPropTypes,
            small: l().default.bool,
            large: l().default.bool,
            light: l().default.bool,
            dark: l().default.bool,
            inline: l().default.bool,
            customStyles: (0, f.default)(h.default)
        },
        ...n.withStylesPropTypes
    };

    function b({
        css: t,
        small: o,
        large: l,
        light: n,
        dark: s,
        styles: f,
        inline: p,
        brand: b,
        customStyles: y
    }) {
        const D = b === u.BRAND_SELECT,
            k = b === u.BRAND_LUXURY;
        let S;
        return S = D ? f.dotDefault_select : k ? f.dotDefault_luxury : f.dotDefault, n ? S = f.dotLight : s && (S = f.dotDark), (0, _.jsx)(c.default, {
            componentID: h.CUSTOM_STYLES_KEY,
            customStyles: y,
            inline: p,
            styleMapping: h.default,
            children: (0, _.jsxs)("div", { ...t(f.container, !p && f.container_absoluteCenter, p && f.container_inline),
                children: [(0, _.jsx)("div", { ...t(f.dot, l && f.dot_large, o && f.dot_small, S, f.dot1)
                }), (0, _.jsx)("div", { ...t(f.dot, l && f.dot_large, o && f.dot_small, S, f.dot2)
                }), (0, _.jsx)("div", { ...t(f.dot, l && f.dot_large, o && f.dot_small, S)
                })]
            })
        })
    }
    b.propTypes = p, b.defaultProps = {
        small: !1,
        large: !1,
        dark: !1,
        light: !1,
        inline: !1,
        customStyles: null
    };
    e.default = (0, u.default)((0, n.withStyles)((0, s.default)((({
        color: t
    }) => ({
        container: {
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            whiteSpace: 'nowrap'
        },
        container_absoluteCenter: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)'
        },
        container_inline: {
            display: 'inline-block'
        },
        dot: {
            width: 6,
            height: 6,
            marginRight: 4,
            borderRadius: '100%',
            display: 'inline-block',
            animationName: {
                '0%, 80%, 100%': {
                    opacity: 0
                },
                '30%, 50%': {
                    opacity: 1
                }
            },
            animationDuration: '0.8s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            animationFillMode: 'both',
            verticalAlign: 'middle'
        },
        dotDefault: {
            backgroundColor: t.loaderDots.default
        },
        dotLight: {
            backgroundColor: t.loaderDots.light
        },
        dotDark: {
            backgroundColor: t.loaderDots.dark
        },
        dotDefault_select: {
            backgroundColor: t.brand.plus
        },
        dotDefault_luxury: {
            backgroundColor: t.brand.luxury
        },
        dot1: {
            animationDelay: '-0.3s'
        },
        dot2: {
            animationDelay: '-0.15s'
        },
        dot_large: {
            width: 12,
            height: 12,
            marginRight: 8
        },
        dot_small: {
            width: 4,
            height: 4,
            marginRight: 2
        }
    }))))(b))
}), "8dfc96", ["45f788", "ba7a76", "07aa1f", "b56f5a", "e0b084", "3c7349", "4e73ec", "4267ec", "66b80d", "a4413a", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "COLOR", {
        enumerable: !0,
        get: function() {
            return C.COLOR
        }
    }), Object.defineProperty(e, "LEADING", {
        enumerable: !0,
        get: function() {
            return C.LEADING
        }
    }), Object.defineProperty(e, "SIZE", {
        enumerable: !0,
        get: function() {
            return C.SIZE
        }
    }), Object.defineProperty(e, "TRACKING", {
        enumerable: !0,
        get: function() {
            return C.TRACKING
        }
    }), Object.defineProperty(e, "WEIGHT", {
        enumerable: !0,
        get: function() {
            return C.WEIGHT
        }
    }), e.typographyPropTypes = e.typographyDefaultProps = e.default = void 0;
    n(r(d[2]));

    function l() {
        const t = n(r(d[3]));
        return l = function() {
            return t
        }, t
    }
    var o = n(r(d[4])),
        c = n(r(d[5])),
        p = r(d[6]),
        u = n(r(d[7])),
        s = t(r(d[8])),
        f = n(r(d[9])),
        y = n(r(d[10])),
        _ = n(r(d[11])),
        h = n(r(d[12])),
        b = r(d[13]),
        C = r(d[14]),
        T = r(d[15]),
        x = r(d[16]);
    const $ = e.typographyPropTypes = {
            allCaps: l().default.bool,
            ariaCurrent: T.ariaCurrentType,
            ariaHidden: l().default.bool,
            color: C.colorPropType,
            deprecatedSpacing: l().default.bool,
            dir: o.default,
            htmlTitle: (0, h.default)('lineClamp', 'isLoading', l().default.string),
            id: l().default.string,
            inline: l().default.bool,
            leading: C.leadingPropType,
            lineClamp: l().default.oneOf([1, 2, 3]),
            noLineClampForPrint: l().default.bool,
            size: C.sizePropType,
            textAlign: b.textAlignPositionProp,
            textRef: (0, f.default)(l().default.func),
            tracking: C.trackingPropType,
            weight: C.weightPropType
        },
        L = e.typographyDefaultProps = {
            allCaps: !1,
            ariaCurrent: void 0,
            ariaHidden: void 0,
            color: C.COLOR.DEFAULT,
            deprecatedSpacing: !1,
            dir: void 0,
            htmlTitle: null,
            id: void 0,
            inline: !1,
            leading: C.LEADING.DEFAULT,
            lineClamp: null,
            noLineClampForPrint: !1,
            size: C.SIZE.REGULAR,
            textAlign: null,
            textRef() {},
            tracking: C.TRACKING.DEFAULT,
            weight: C.WEIGHT.DEFAULT
        },
        P = { ...s.withLoadingPropTypes,
            ...s.loadingPropTypes,
            ...p.withStylesPropTypes,
            ...$,
            children: (0, y.default)('isLoading', l().default.node)
        },
        v = { ...L
        };

    function A(t) {
        return t ? 'span' : 'div'
    }

    function w(t) {
        return (0, _.default)(c.default.language()) ? t : C.TRACKING.DEFAULT
    }

    function E({
        allCaps: t,
        ariaCurrent: n,
        ariaHidden: l,
        children: o,
        color: c,
        css: p,
        deprecatedSpacing: s,
        dir: f,
        htmlTitle: y,
        id: _,
        inline: h,
        isLoading: b,
        leading: T,
        lineClamp: $,
        noLineClampForPrint: L,
        size: P,
        styles: v,
        textAlign: E,
        textRef: O,
        tracking: k,
        weight: S
    }) {
        const j = A(h),
            D = w(k);
        return (0, x.jsx)(j, {
            "aria-disabled": c === C.COLOR.DISABLED || void 0,
            "aria-current": null != n ? n : void 0,
            "aria-hidden": !!l || void 0,
            dir: null != f ? f : void 0,
            id: null != _ ? _ : void 0,
            ref: O,
            ...p(v.text, v[`fontFamily_${P}`], v[`size_${P}`], v[`weight_${P}_${S}`], v[`leading_${P}_${T}`], v[`tracking_${P}_${D}`], v[`color_${c}`], E && v[`align_${E}`], t && v.allCaps, !!$ && v.lineClamp, !!$ && v[`lineClamp_${P}_${T}_${$}`], !!$ && !!L && v.noLineClampForPrint, s && v[`deprecatedSpacing_${P}`]),
            title: b || null == y ? void 0 : y,
            children: b ? (0, x.jsx)(u.default, {}) : o
        })
    }

    function O(t, n) {
        return n ? {
            [n]: t
        } : t
    }

    function k(t, n) {
        const l = {},
            o = Object.keys(t.size),
            c = Object.keys(t.weight),
            p = Object.keys(t.leading),
            u = Object.keys(t.tracking),
            s = Array.from({
                length: 3
            }, ((t, n) => n + 1));
        return o.forEach((o => {
            const [f, y] = o.split('_'), _ = y && n[y], h = t.fontFamily[o];
            if (h) {
                const t = `fontFamily_${f}`;
                l[t] = { ...l[t],
                    ...O({
                        fontFamily: h
                    }, _)
                }
            }
            const b = t.size[o],
                C = `size_${f}`;
            l[C] = { ...l[C],
                ...O({
                    fontSize: b
                }, _)
            }, c.forEach((n => {
                const c = t.weight[n][o];
                if (!c) return;
                const p = `weight_${f}_${n}`;
                l[p] = { ...l[p],
                    ...O({
                        fontWeight: c
                    }, _)
                }
            })), p.forEach((n => {
                const c = t.leading[n][o];
                if (!c) return;
                const p = c / b,
                    u = `${p}em`,
                    y = `leading_${f}_${n}`;
                l[y] = { ...l[y],
                    ...O({
                        lineHeight: u
                    }, _)
                }, s.forEach((t => {
                    const o = `lineClamp_${f}_${n}_${t}`;
                    l[o] = { ...l[o],
                        ...O(1 === t ? {
                            maxWidth: '100%',
                            whiteSpace: 'nowrap'
                        } : {
                            maxHeight: p * t + "em",
                            WebkitLineClamp: t,
                            display: '-webkit-box',
                            '-webkit-box-orient': 'vertical'
                        }, _)
                    }
                }))
            })), u.forEach((n => {
                const c = t.tracking[n][o];
                if (!c) return;
                const p = c / b + "em",
                    u = `tracking_${f}_${n}`;
                l[u] = { ...l[u],
                    ...O({
                        letterSpacing: p
                    }, _)
                }
            }));
            const T = t.deprecatedSpacing[o];
            if (T) {
                const t = `deprecatedSpacing_${f}`;
                l[t] = { ...l[t],
                    ...O({
                        paddingTop: T,
                        paddingBottom: T
                    }, _)
                }
            }
        })), l
    }
    E.propTypes = P, E.defaultProps = v;
    e.default = (0, p.withStyles)((({
        color: t,
        responsive: n,
        __typography: l
    }) => ({ ...k(l, n),
        text: {
            margin: 0,
            wordWrap: 'break-word'
        },
        allCaps: {
            textTransform: 'uppercase'
        },
        lineClamp: {
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        noLineClampForPrint: {
            [n.print]: {
                display: 'block',
                maxHeight: 'none',
                overflow: 'visible',
                WebkitLineClamp: 'none',
                whiteSpace: 'normal'
            }
        },
        align_start: {
            textAlign: 'left'
        },
        align_center: {
            textAlign: 'center'
        },
        align_end: {
            textAlign: 'right'
        },
        align_justify: {
            textAlign: 'justify'
        },
        color_default: {
            color: t.textDark
        },
        color_disabled: {
            color: t.textDisabled
        },
        color_inverse: {
            color: t.textLight
        },
        color_muted: {
            color: t.textMuted,
            [n.print]: {
                color: t.printOverrides.textMuted
            }
        },
        color_inherit: {
            color: 'inherit'
        }
    })))((0, s.default)(E))
}), "99d831", ["45f788", "ba7a76", "07aa1f", "b56f5a", "714685", "862e50", "e0b084", "44e11b", "7837c8", "0a2076", "0a2076", "ca133d", "0a2076", "4ec503", "b233a5", "376747", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.CUSTOM_STYLES_KEY = void 0;
    e.CUSTOM_STYLES_KEY = 'loader';
    e.default = {
        dotColor: '--color-loader-dots-default'
    }
}), "a4413a", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function l() {
        const u = t(r(d[1]));
        return l = function() {
            return u
        }, u
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.weightPropType = e.trackingPropType = e.sizePropType = e.leadingPropType = e.colorPropType = e.WEIGHT = e.TRACKING = e.SIZE = e.LEADING = e.COLOR = void 0;
    let u = e.WEIGHT = (function(t) {
            return t.LIGHTEST = "lightest", t.LIGHTER = "lighter", t.DEFAULT = "default", t.BOLDER = "bolder", t.BOLDEST = "boldest", t
        })({}),
        n = e.SIZE = (function(t) {
            return t.TITLE1 = "title1", t.TITLE2 = "title2", t.TITLE3 = "title3", t.LARGE = "large", t.REGULAR = "regular", t.SMALL = "small", t.MINI = "mini", t.MICRO = "micro", t
        })({}),
        o = e.LEADING = (function(t) {
            return t.DEFAULT = "default", t.TALL = "tall", t
        })({}),
        T = e.COLOR = (function(t) {
            return t.DEFAULT = "default", t.DISABLED = "disabled", t.MUTED = "muted", t.INHERIT = "inherit", t.INVERSE = "inverse", t
        })({}),
        f = e.TRACKING = (function(t) {
            return t.DEFAULT = "default", t.WIDE = "wide", t
        })({});
    e.sizePropType = l().default.oneOf([...Object.values(n), 'title1', 'title2', 'title3', 'large', 'regular', 'small', 'mini', 'micro']), e.leadingPropType = l().default.oneOf([...Object.values(o), 'default', 'tall']), e.weightPropType = l().default.oneOf([...Object.values(u), 'lightest', 'lighter', 'default', 'bolder', 'boldest']), e.colorPropType = l().default.oneOf([...Object.values(T), 'default', 'disabled', 'muted', 'inherit', 'inverse']), e.trackingPropType = l().default.oneOf([...Object.values(f), 'default', 'wide'])
}), "b233a5", ["ba7a76", "b56f5a"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    m.exports = function(t) {
        if ('string' != typeof t) throw new TypeError('expected a string');
        return (t = (t = (t = t.replace(/([a-z])([A-Z])/g, '$1-$2')).replace(/[ \t\W]/g, '-')).replace(/^-+|-+$/g, '')).toLowerCase()
    }
}), "bba9aa", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n) {
        return !n || !t.includes(n)
    };
    const t = ['ar']
}), "ca133d", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.travelComplaintPhoneNumber = e.travelComplaintEmail = e.icpLicenseLinkUrl = e.default = e.chinaPsbLicenseUrl = e.chinaPsbLicenseCopy = e.chinaIcpLicenseUrl = e.chinaIcpLicenseCopyPart2 = e.chinaIcpLicenseCopyPart1 = e.chinaCompanyCopy = e.businessLicenseText = e.businessLicenseLinkUrl = void 0;
    n(r(d[1]));
    var t = n(r(d[2])),
        s = n(r(d[3])),
        l = r(d[4]),
        c = n(r(d[5])),
        o = n(r(d[6])),
        f = n(r(d[7])),
        h = n(r(d[8])),
        u = n(r(d[9])),
        p = n(r(d[10])),
        x = r(d[11]),
        b = n(r(d[12])),
        y = r(d[13]);
    const j = `\xa9 ${(new Date).getFullYear()} Airbnb, Inc. All rights reserved.`,
        L = e.chinaIcpLicenseCopyPart1 = '\u4eacICP\u590716017121\u53f7',
        I = e.chinaIcpLicenseCopyPart2 = '\u4eacICP\u8bc1 160773\u53f7',
        v = e.chinaIcpLicenseUrl = 'http://beian.miit.gov.cn/',
        C = e.chinaPsbLicenseCopy = '\u4eac\u516c\u7f51\u5b89\u5907 11010502032345\u53f7',
        k = e.chinaCompanyCopy = '\u5b89\u5f7c\u8fce\u7f51\u7edc\uff08\u5317\u4eac\uff09\u6709\u9650\u516c\u53f8',
        w = e.chinaPsbLicenseUrl = 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502032345',
        P = e.businessLicenseText = '\u8425\u4e1a\u6267\u7167',
        A = e.businessLicenseLinkUrl = 'https://zzlz.gsxt.gov.cn/businessCheck/verifKey.do?showType=p&serial=91110105MA003A481G-SAIC_SHOW_10000091110105MA003A481G1679980493194&signData=MEYCIQDz/atwLJBCy8/tQW9ebGuoA+1etBYL/KpjQTCJL2bTFQIhAKgrAzJOcfltfxrKALrq8ayM/pVNSuKJg6N2oy6Q40ps',
        _ = e.icpLicenseLinkUrl = 'https://z1.muscache.cn/pictures/carson/carson-1630514828733-435235f3/original/7c3906bf-e700-43a2-bc1e-38d8fb2f01cb.png',
        D = e.travelComplaintPhoneNumber = '\u5168\u56fd\u65c5\u6e38\u6295\u8bc9\u6e20\u9053 12345',
        S = e.travelComplaintEmail = '\u8fdd\u6cd5\u548c\u4e0d\u826f\u4fe1\u606f\u4e3e\u62a5\u90ae\u7bb1 jubao@airbnb.com';
    e.default = (0, x.withStyles)((({
        responsive: n
    }) => ({
        container: {
            paddingTop: '1px'
        },
        legalLinks: {
            display: 'none',
            [n.mediumAndAbove]: {
                display: 'inline-block',
                marginLeft: 8
            }
        },
        koreanPolicyLink: {
            textAlign: 'right',
            [n.mediumAndAbove]: {
                display: 'none'
            }
        }
    })))((function({
        css: n,
        koreanPolicyLink: x,
        showChinaIcpLicense: z = !1,
        showJapanCorporateLink: N = !1,
        styles: T
    }) {
        return (0, y.jsx)("div", { ...n(T.container),
            children: (0, y.jsxs)(h.default, {
                before: (0, y.jsx)(b.default, {
                    decorative: !0,
                    color: u.default.textMuted,
                    size: "1.5em"
                }),
                children: [z && (0, y.jsxs)(p.default, {
                    muted: !0,
                    small: !0,
                    children: [(0, y.jsx)(f.default, {
                        footer: !0,
                        href: v,
                        openInNewWindow: !0,
                        loggingID: "footer.copyright.chinaIcpLicense",
                        children: L
                    }), ' ', (0, y.jsx)(f.default, {
                        footer: !0,
                        href: _,
                        openInNewWindow: !0,
                        loggingID: "footer.copyright.chinaIcpLicenseImage",
                        children: I
                    }), ' ', (0, y.jsx)("img", {
                        src: "https://z1.muscache.cn/airbnb/static/china/public_security_bureau_logo-5d90debd8b3d783447eeffa635df1972.png",
                        alt: t.default.t('footer.Alternative text for China Public Security Bureau logo used for screen readers')
                    }), ' ', (0, y.jsx)(f.default, {
                        footer: !0,
                        href: w,
                        openInNewWindow: !0,
                        loggingID: "footer.copyright.chinaPsbLicense",
                        children: C
                    }), ' ', k, ' ', (0, y.jsxs)("a", {
                        href: A,
                        target: "_blank",
                        children: [(0, y.jsx)("img", {
                            width: "20",
                            height: "20",
                            src: "https://z1.muscache.cn/pictures/carson/carson-1630570578816-f7812cf5/original/90b7269d-4bd5-44dc-89c1-b50d33fdccd0.png",
                            alt: t.default.t('Footer.Alternative text for China Business License logo used for screen readers')
                        }), ' ', (0, y.jsx)(p.default, {
                            muted: !0,
                            small: !0,
                            inline: !0,
                            children: P
                        })]
                    })]
                }), N && (0, y.jsx)(p.default, {
                    muted: !0,
                    small: !0,
                    children: (0, y.jsxs)(f.default, {
                        footer: !0,
                        href: "/about/company-details",
                        openInNewWindow: !0,
                        loggingID: "footer.copyright.companyDetails",
                        children: [(0, y.jsx)(p.default, {
                            muted: !0,
                            small: !0,
                            children: "Airbnb Global Services Limited"
                        }), (0, y.jsx)(p.default, {
                            muted: !0,
                            small: !0,
                            children: "\u89b3\u5149\u5e81\u9577\u5b98(02)\u7b2cS0001\u53f7(2023\u5e745\u670824\u65e5-2028\u5e746\u670814\u65e5)"
                        })]
                    })
                }), (0, y.jsxs)("div", {
                    children: [(0, y.jsx)(p.default, {
                        muted: !0,
                        small: !0,
                        dir: l.DIRECTIONS.LTR,
                        inline: !0,
                        children: (0, y.jsx)("span", {
                            itemScope: !0,
                            itemType: "http://schema.org/Organization",
                            children: j
                        })
                    }), (0, y.jsx)("div", { ...n(T.legalLinks),
                        children: (0, y.jsxs)(p.default, {
                            muted: !0,
                            small: !0,
                            children: [(0, y.jsx)(f.default, {
                                footer: !0,
                                href: "/terms",
                                loggingID: "footer.copyright.terms",
                                children: (0, y.jsx)(c.default, {
                                    k: "shared.Terms"
                                })
                            }), (0, y.jsx)(o.default, {}), (0, y.jsx)(f.default, {
                                footer: !0,
                                href: "/terms/privacy_policy",
                                loggingID: "footer.copyright.privacy",
                                children: (0, y.jsx)(c.default, {
                                    k: "Legal term referencing the Privacy Policy"
                                })
                            }), (0, y.jsx)(o.default, {}), (0, y.jsx)(f.default, {
                                footer: !0,
                                href: "/sitemaps/v2",
                                loggingID: "footer.copyright.siteMap",
                                children: (0, y.jsx)(c.default, {
                                    k: "Site Map"
                                })
                            }), z && (0, y.jsxs)(y.Fragment, {
                                children: [(0, y.jsx)(o.default, {}), (0, y.jsx)(p.default, {
                                    muted: !0,
                                    small: !0,
                                    inline: !0,
                                    children: D
                                }), (0, y.jsx)(o.default, {}), (0, y.jsx)(p.default, {
                                    muted: !0,
                                    small: !0,
                                    inline: !0,
                                    children: S
                                })]
                            }), 'fr' === s.default.locale() && (0, y.jsxs)(y.Fragment, {
                                children: [(0, y.jsx)(o.default, {}), (0, y.jsx)(f.default, {
                                    footer: !0,
                                    href: "/fonctionnement_du_site",
                                    loggingID: "footer.copyright.frenchDisclaimer",
                                    children: "Fonctionnement du site"
                                })]
                            })]
                        })
                    })]
                }), x && (0, y.jsx)("div", { ...n(T.koreanPolicyLink),
                    children: (0, y.jsx)(f.default, {
                        footer: !0,
                        href: x,
                        openInNewWindow: !0,
                        children: (0, y.jsx)(p.default, {
                            muted: !0,
                            small: !0,
                            children: (0, y.jsx)(c.default, {
                                k: "footer.korean_cancel_policy_updated.announcement_link"
                            })
                        })
                    })
                })]
            })
        })
    }))
}), "da7b20", ["ba7a76", "07aa1f", "a9f4b1", "862e50", "a55330", "030c51", "3a7cec", "1a0fc2", "660775", "fee591", "f96f2b", "e0b084", "461137", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default,
        t = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "COLOR", {
        enumerable: !0,
        get: function() {
            return c.COLOR
        }
    }), Object.defineProperty(e, "LEADING", {
        enumerable: !0,
        get: function() {
            return c.LEADING
        }
    }), Object.defineProperty(e, "SIZE", {
        enumerable: !0,
        get: function() {
            return c.SIZE
        }
    }), Object.defineProperty(e, "WEIGHT", {
        enumerable: !0,
        get: function() {
            return c.WEIGHT
        }
    }), e.textPropTypes = e.default = void 0;
    t(r(d[2]));

    function o() {
        const l = t(r(d[3]));
        return o = function() {
            return l
        }, l
    }
    var n = t(r(d[4])),
        u = l(r(d[5])),
        c = l(r(d[6])),
        f = r(d[7]);
    const s = { ...e.textPropTypes = {
                children: o().default.node,
                bold: o().default.bool,
                disabled: (0, n.default)(o().default.bool),
                inverse: o().default.bool,
                large: o().default.bool,
                largeShort: o().default.bool,
                largeTall: o().default.bool,
                light: o().default.bool,
                micro: o().default.bool,
                microWide: o().default.bool,
                muted: o().default.bool,
                reduced: o().default.bool,
                short: o().default.bool,
                small: o().default.bool,
                tall: o().default.bool,
                ...c.typographyPropTypes
            },
            ...u.withLoadingPropTypes,
            ...u.loadingPropTypes
        },
        b = {
            disabled: c.COLOR.DISABLED,
            inverse: c.COLOR.INVERSE,
            muted: c.COLOR.MUTED
        },
        E = {
            largeTall: c.LEADING.TALL,
            tall: c.LEADING.TALL
        },
        I = {
            large: c.SIZE.LARGE,
            largeShort: c.SIZE.LARGE,
            largeTall: c.SIZE.LARGE,
            micro: c.SIZE.MINI,
            microWide: c.SIZE.MINI,
            small: c.SIZE.SMALL
        },
        L = {
            microWide: c.TRACKING.WIDE
        },
        T = {
            bold: c.WEIGHT.BOLDEST,
            light: c.WEIGHT.LIGHTEST
        };

    function p(l, t, o) {
        const n = Object.keys(l).find((l => t[l]));
        return n ? l[n] : o
    }

    function O({
        bold: l,
        disabled: t,
        inverse: o,
        large: n,
        largeShort: u,
        largeTall: s,
        light: O,
        micro: h,
        microWide: S,
        muted: y,
        reduced: G,
        short: A,
        small: P,
        tall: R,
        isLoading: W,
        noLoading: D,
        ...v
    }) {
        const N = {
                bold: !!l,
                disabled: !!t,
                inverse: !!o,
                large: !!n,
                largeShort: !!u,
                largeTall: !!s,
                light: !!O,
                micro: !!h,
                microWide: !!S,
                muted: !!y,
                reduced: !!G,
                short: !!A,
                small: !!P,
                tall: !!R
            },
            {
                color: Z,
                leading: j,
                size: C,
                tracking: H,
                weight: M
            } = v;
        let _ = {};
        return Z || j || C || H || M || (_ = {
            color: p(b, N),
            inline: !!h || !!S,
            leading: p(E, N),
            size: p(I, N),
            tracking: p(L, N),
            weight: p(T, N, c.WEIGHT.BOLDER)
        }), (0, f.jsx)(c.default, {
            noLoading: D || !W,
            ..._,
            ...v
        })
    }
    O.propTypes = s, O.defaultProps = {
        bold: !1,
        disabled: !1,
        inverse: !1,
        large: !1,
        light: !1,
        micro: !1,
        muted: !1,
        reduced: !1,
        small: !1
    };
    e.default = (0, u.default)(O)
}), "f96f2b", ["45f788", "ba7a76", "07aa1f", "b56f5a", "0a2076", "7837c8", "99d831", "b8c07d"]);
__r("a9f4b1").extend({
    "footer.Alternative text for China Public Security Bureau logo used for screen readers": "China Public Security Bureau logo",
    "Footer.Alternative text for China Business License logo used for screen readers": "China Business License logo",
    "shared.Terms": "Terms",
    "Legal term referencing the Privacy Policy": "Privacy",
    "Site Map": "Site Map",
    "footer.korean_cancel_policy_updated.announcement_link": "Revised Cancellation Policies for Korea"
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/1b4c.9c61a04758.js.map