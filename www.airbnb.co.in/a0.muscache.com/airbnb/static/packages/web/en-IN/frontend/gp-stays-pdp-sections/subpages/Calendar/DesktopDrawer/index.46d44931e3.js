__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var s = l(r(d[1])),
        t = r(d[2]);
    const o = (0, s.default)({
        svgContents: "<path d=\"m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z\" fill-rule=\"evenodd\" />",
        svgProps: {
            viewBox: "0 0 12 12"
        }
    }, 'IconCloseSmall');
    e.default = o;
    o.categories = [t.MISCELLANEOUS]
}), "060c72", ["ba7a76", "a89bd1", "72354b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = r(d[1]),
        s = (t(r(d[2])), t(r(d[3]))),
        o = r(d[4]),
        n = t(r(d[5])),
        c = t(r(d[6])),
        u = t(r(d[7])),
        f = r(d[8]);
    e.default = (0, o.withStyles)((({
        color: t
    }) => ({
        container: {
            backgroundColor: t.modal.background,
            height: 70,
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
        }
    })))((function(t) {
        const o = (0, l.c)(14),
            {
                css: h,
                styles: p,
                theme: v,
                closeButtonLoggingID: _,
                onClose: b
            } = t,
            {
                dls19: j
            } = v;
        let x, y, z, C, I;
        return o[0] !== h || o[1] !== p.container ? (x = h(p.container), o[0] = h, o[1] = p.container, o[2] = x) : x = o[2], o[3] === Symbol.for("react.memo_cache_sentinel") ? (y = s.default.t("shared.Close"), o[3] = y) : y = o[3], o[4] !== j.palette.hof || o[5] !== j.spacing.primitives.size_small ? (z = (0, f.jsx)(n.default, {
            decorative: !0,
            size: j.spacing.primitives.size_small,
            color: j.palette.hof
        }), o[4] = j.palette.hof, o[5] = j.spacing.primitives.size_small, o[6] = z) : z = o[6], o[7] !== _ || o[8] !== b || o[9] !== z ? (C = (0, f.jsx)(u.default, {
            "aria-label": y,
            onPress: b,
            loggingID: _,
            children: z
        }), o[7] = _, o[8] = b, o[9] = z, o[10] = C) : C = o[10], o[11] !== x || o[12] !== C ? (I = (0, f.jsx)(c.default, {
            children: (0, f.jsx)("div", { ...x,
                children: C
            })
        }), o[11] = x, o[12] = C, o[13] = I) : I = o[13], I
    }))
}), "55a6db", ["ba7a76", "87eb11", "07aa1f", "a9f4b1", "e0b084", "060c72", "71389e", "58e51f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = l(r(d[1])),
        u = l(r(d[2])),
        f = l(r(d[3])),
        o = l(r(d[4])),
        n = l(r(d[5]));
    e.default = (0, t.default)(f.default, {
        FixedOverlay: u.default,
        ModalContainer: n.default,
        ModalCloseBar: o.default
    })
}), "71a2b9", ["ba7a76", "e8606c", "4e47cd", "c4df5c", "55a6db", "72c678"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = r(d[0]),
        n = r(d[1]),
        o = r(d[2]),
        s = r(d[3]),
        l = r(d[4]);
    const p = (0, t.extendStyles)(l.baseModalContainerStylesFn, (({
        dls19: t,
        responsive: n
    }) => ({
        container: {
            paddingTop: t.spacing.primitives.gutter_smallAndAbove,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            [n.mediumAndAbove]: {
                padding: 40,
                alignItems: 'center'
            }
        },
        dialog: {
            background: t.palette.white,
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            maxWidth: 'none',
            width: '100%',
            flexDirection: 'column',
            boxShadow: t.elevation.modal,
            [n.mediumAndAbove]: {
                bottom: 'auto',
                overflow: 'visible',
                animationName: {
                    '0%': {
                        transform: `translate3d(0, ${-40*t.spacing.primitives.baseUnit}px, 0)`,
                        opacity: .4
                    },
                    '100%': {
                        transform: 'translate3d(0, 0, 0)',
                        opacity: 1
                    }
                }
            },
            ...o.sharedAnimationStyles,
            animationName: {
                '0%': {
                    opacity: 0,
                    transform: 'translate3d(0, 100vh, 0)'
                },
                '100%': {
                    opacity: 1,
                    transform: 'translate3d(0, 0, 0)'
                }
            },
            [s.a11y.noMotion]: {
                animationName: o.fadeEnter
            }
        },
        dialog__exiting: {
            animationName: {
                '0%': {
                    opacity: 1,
                    transform: 'translate3d(0, 0, 0)'
                },
                '100%': {
                    opacity: 0,
                    transform: 'translate3d(0, 100vh, 0)'
                }
            },
            [n.mediumAndAbove]: {
                animationName: {
                    '0%': {
                        transform: 'translate3d(0, 0, 0)',
                        opacity: 1
                    },
                    '100%': {
                        transform: `translate3d(0, ${-59.5*t.spacing.primitives.baseUnit}px, 0)`,
                        opacity: 0
                    }
                }
            },
            [s.a11y.noMotion]: {
                animationName: o.fadeLeave
            }
        }
    })));
    e.default = (0, n.withStyles)(p)(l.BaseModalContainer)
}), "72c678", ["01b367", "e0b084", "fc011a", "daa5d1", "02f6d2"]);
__r("a9f4b1").extend({
    "shared.Close": "Close"
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-stays-pdp-sections/subpages/Calendar/DesktopDrawer/index.5d026df52a.js.map