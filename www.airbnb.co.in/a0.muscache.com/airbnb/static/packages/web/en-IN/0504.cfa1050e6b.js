__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]);
    m.exports = function() {
        return t
    }
}), "0a2076", ["d104f6"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1]));

    function l() {
        const o = t(r(d[2]));
        return l = function() {
            return o
        }, o
    }
    r(d[3]);
    var o = t(r(d[4])),
        n = r(d[5]);
    const s = { ...o.default,
            fill: l().default.string,
            fillOpacity: l().default.number,
            inline: l().default.bool,
            rounded: l().default.bool,
            size: l().default.oneOfType([l().default.string, l().default.number]),
            stroke: l().default.string,
            strokeWidth: l().default.number,
            svg: l().default.oneOfType([l().default.func, l().default.object]).isRequired
        },
        u = {
            fill: 'currentColor',
            fillOpacity: 0,
            inline: !1,
            rounded: !1,
            size: '1em',
            stroke: 'currentColor',
            strokeWidth: void 0
        };

    function f({
        accessibilityLabel: t,
        decorative: l,
        fill: o,
        fillOpacity: s,
        inline: u,
        rounded: f,
        size: c,
        stroke: p,
        strokeWidth: v,
        svg: y
    }) {
        const b = { ...'function' == typeof y ? null : y.svgProps,
            fill: o ? ? void 0,
            fillOpacity: s ? ? void 0,
            stroke: p ? ? void 0,
            strokeWidth: v ? ? void 0,
            focusable: 'false',
            ...t && {
                'aria-label': t
            },
            ...l && {
                'aria-hidden': !0
            },
            role: t ? 'img' : 'presentation'
        };
        f && (b.strokeLinecap = 'round', b.strokeLinejoin = 'round');
        const k = {
            height: c,
            width: c,
            display: u ? 'inline' : 'block',
            overflow: 'visible'
        };
        return 'function' == typeof y ? y({
            style: k,
            ...y.defaultProps,
            ...b
        }) : (0, n.jsx)("svg", {
            style: k,
            ...b,
            dangerouslySetInnerHTML: {
                __html: y.svgContents
            }
        })
    }
    f.propTypes = s, f.defaultProps = u;
    e.default = f
}), "11d036", ["ba7a76", "07aa1f", "b56f5a", "e0b084", "1744ea", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]);
    m.exports = {
        accessibilityLabel: t,
        decorative: t
    }
}), "1744ea", ["d104f6"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const n = t.default.get('languagesFromAcceptLanguageHeader');
        if (n) return n.split(',');
        if ('undefined' == typeof navigator) return [];
        if (navigator.languages) return [...navigator.languages];
        const u = navigator.language || navigator.userLanguage;
        return u ? [u] : []
    };
    var t = n(r(d[1]))
}), "1cbd4d", ["ba7a76", "ef2bc3"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        on: t
    }) {
        if (!t) return null;
        return (0, n.jsx)(u.default, {
            size: 12,
            decorative: !0
        })
    };
    t(r(d[1]));
    var u = t(r(d[2])),
        n = r(d[3])
}), "1daeba", ["ba7a76", "07aa1f", "e525cf", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.baseSwitchCssFragments = e.BaseSwitch = void 0;
    n(r(d[1]));
    var t = r(d[2]),
        o = r(d[3]),
        s = n(r(d[4])),
        l = r(d[5]);
    const c = e.baseSwitchCssFragments = {
        container: "\n    border-radius: 32px;\n    border-style: solid;\n    border-width: 1px;\n    cursor: pointer;\n    height: 32px;\n    position: relative;\n    min-width: 48px;\n    width: 48px;\n\n    /* took some liberties with these semantic token migrations */\n    &:disabled {\n      background-color: var(--linaria-theme_palette-bg-primary-inverse-disabled); /* migrated from lightgrey */\n      border-color: var(--linaria-theme_palette-border-primary-disabled); /* migrated from lightgrey */\n      cursor: not-allowed;\n    }\n  ",
        container_on: "\n    background-color: var(--linaria-theme_palette-bg-primary-inverse); /* migrated from black */\n    border-color: var(--linaria-theme_palette-border-primary); /* migrated from black */\n  ",
        container_off: "\n    background-color: var(--linaria-theme_palette-bg-tertiary); /* migrated from darkgrey */\n    border-color: var(--linaria-theme_palette-border-secondary); /* migrated from darkgrey */\n  ",
        slider: "\n    background-color: var(--linaria-theme_palette-bg-primary); /* migrated from white */\n    border-radius: 50%;\n    border-style: solid;\n    border-width: 1px;\n    height: 32px;\n    left: -1px;\n    position: absolute;\n    top: -1px;\n    transform: translate3d(0, 0, 0);\n    width: 32px;\n  ",
        slider_on: "\n    border-color: var(--linaria-theme_palette-border-primary); /* migrated from black */\n    transform: translate3d(16px, 0, 0);\n  ",
        slider_off: "\n    border-color: var(--linaria-theme_palette-border-secondary); /* migrated from darkgrey */\n  ",
        slider_disabled: "\n    border-color: var(--linaria-theme_palette-border-primary-disabled); /* migrated from lightgrey */\n    color: var(--linaria-theme_palette-text-primary-disabled); /* migrated from lightgrey */\n  "
    };
    e.BaseSwitch = ({
        'aria-labelledby': n,
        'aria-describedby': c,
        css: b,
        disabled: h,
        id: f,
        on: _,
        onChange: p,
        name: y,
        renderSliderContent: w,
        styles: u,
        linariaClassNames: v,
        buttonRef: x,
        ...k
    }) => {
        const C = (0, t.useCx)(),
            {
                methodsWithLogging: F
            } = (0, s.default)('Switch', { ...k,
                methods: {
                    onChange: p
                }
            });
        return (0, l.jsxs)("button", {
            ref: x,
            "aria-checked": _,
            "aria-labelledby": n,
            "aria-describedby": c,
            disabled: h,
            id: f,
            onClick: () => F.onChange ? .(!_),
            role: "switch",
            type: "button",
            className: C(v ? .container, _ ? v ? .container_on : v ? .container_off),
            ...(0, o.maybeRwsCss)(b, u ? .container, _ ? u ? .container_on : u ? .container_off),
            children: [y && (0, l.jsx)("input", {
                type: "hidden",
                name: y,
                value: _ ? 'true' : 'false',
                disabled: h
            }), (0, l.jsx)("div", {
                className: C(v ? .slider, _ ? v ? .slider_on : v ? .slider_off, h && v ? .slider_disabled),
                ...(0, o.maybeRwsCss)(b, u ? .slider, _ ? u ? .slider_on : u ? .slider_off, h && u ? .slider_disabled),
                children: w && w({
                    disabled: h,
                    on: _
                })
            })]
        })
    };
    (0, o.deprecatedExtendableStylesFn)('BaseSwitch', (() => ({
        container: (0, o.cssFragmentToRws)(c.container),
        container_on: (0, o.cssFragmentToRws)(c.container_on),
        container_off: (0, o.cssFragmentToRws)(c.container_off),
        slider: (0, o.cssFragmentToRws)(c.slider),
        slider_on: (0, o.cssFragmentToRws)(c.slider_on),
        slider_off: (0, o.cssFragmentToRws)(c.slider_off),
        slider_disabled: (0, o.cssFragmentToRws)(c.slider_disabled)
    })))
}), "2706c0", ["ba7a76", "07aa1f", "4786a8", "2d8af3", "b7564f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var u = t(r(d[1]));
    const f = {
        document: void 0,
        getDocument: () => r(d[3])(d[2]).then(u.default).then((t => t.default)),
        name: 'GetUserAutoTranslateStatus',
        type: 'query',
        operationId: '7b7967215616319fe1d9c6268f88f08f91973b98167d7b972275bfa0bf978869'
    };
    e.default = f
}), "3143e1", ["ba7a76", "45f788", "c96ff6", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1]));

    function o() {
        const u = t(r(d[2]));
        return o = function() {
            return u
        }, u
    }
    var u = t(r(d[3])),
        n = t(r(d[4])),
        s = r(d[5]),
        c = r(d[6]);
    const l = { ...u.default,
        color: o().default.string,
        size: o().default.oneOfType([o().default.string, o().default.number])
    };

    function f({
        accessibilityLabel: t,
        decorative: o,
        color: u,
        size: s
    }) {
        const l = { ...t && {
                accessibilityLabel: t
            },
            ...o && {
                decorative: o
            }
        };
        return (0, c.jsx)(n.default, { ...l,
            fillOpacity: 0,
            stroke: u,
            strokeWidth: 3,
            size: s,
            rounded: !0
        })
    }
    f.propTypes = l, f.categories = [s.CHECKMARKS];
    e.default = f
}), "3b9af4", ["ba7a76", "07aa1f", "b56f5a", "1744ea", "d0c66a", "72354b", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "BRAND_DEFAULT", {
        enumerable: !0,
        get: function() {
            return u.BRAND_DEFAULT
        }
    }), Object.defineProperty(e, "BRAND_LUXURY", {
        enumerable: !0,
        get: function() {
            return u.BRAND_LUXURY
        }
    }), Object.defineProperty(e, "BRAND_SELECT", {
        enumerable: !0,
        get: function() {
            return u.BRAND_SELECT
        }
    }), e.default = function(t) {
        class b extends n.default.PureComponent {
            constructor(t, n) {
                super(t, n), this.unsubscribe = void 0;
                const s = n[u.BRAND_CONTEXT_KEY],
                    o = s ? s.getState() : u.BRAND_DEFAULT;
                this.state = {
                    brand: o
                }
            }
            componentDidMount() {
                const {
                    [u.BRAND_CONTEXT_KEY]: t
                } = this.context;
                t ? this.unsubscribe = t.subscribe((t => {
                    this.setState({
                        brand: t
                    })
                })) : this.setState({
                    brand: u.BRAND_DEFAULT
                })
            }
            componentWillUnmount() {
                this.unsubscribe && this.unsubscribe()
            }
            render() {
                const {
                    brand: n
                } = this.state;
                return (0, c.jsx)(t, { ...this.props,
                    brand: n
                })
            }
        }
        if (b.WrappedComponent = t, b.contextTypes = {
                [u.BRAND_CONTEXT_KEY]: p.default
            }, b.displayName = void 0, b.defaultProps = void 0, b.propTypes = void 0, t.propTypes) {
            const {
                brand: n,
                ...s
            } = t.propTypes;
            b.propTypes = s
        }
        t.defaultProps && (b.defaultProps = t.defaultProps);
        const T = (0, o.default)(t) || 'Component';
        return b.displayName = `withBrand(${T})`, (0, s.default)(b, t)
    }, e.withBrandPropTypes = void 0;
    var n = t(r(d[1])),
        s = t(r(d[2])),
        o = t(r(d[3])),
        u = r(d[4]),
        p = t(r(d[5])),
        c = r(d[6]);
    const b = u.BrandPropType.isRequired;
    b.isRequired = b;
    e.withBrandPropTypes = {
        brand: u.BrandPropType.isRequired
    }
}), "3c7349", ["ba7a76", "07aa1f", "14e802", "e37aff", "ef29a5", "d145df", "b8c07d"]);
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    e.default = [{
        title: 'Az\u0259rbaycan dili',
        subtitle: 'Az\u0259rbaycan',
        locale: 'az-AZ',
        urlLocale: 'az',
        urlCountry: 'AZ'
    }, {
        title: 'Bahasa Indonesia',
        subtitle: 'Indonesia',
        locale: 'id-ID',
        urlLocale: 'id',
        urlCountry: 'ID'
    }, {
        title: 'Bosanski',
        subtitle: 'Bosna i Hercegovina',
        locale: 'bs-BA',
        urlLocale: 'bs',
        urlCountry: 'BA'
    }, {
        title: 'Catal\xe0',
        subtitle: 'Espanya',
        locale: 'ca-ES',
        urlLocale: 'ca',
        urlCountry: 'ES'
    }, {
        title: '\u010ce\u0161tina',
        subtitle: '\u010cesk\xe1 republika',
        locale: 'cs-CZ',
        urlLocale: 'cs',
        urlCountry: 'CZ'
    }, {
        title: 'Crnogorski',
        subtitle: 'Crna Gora',
        locale: 'sr-ME',
        urlLocale: 'sr-ME',
        urlCountry: 'ME'
    }, {
        title: 'Dansk',
        subtitle: 'Danmark',
        locale: 'da-DK',
        urlLocale: 'da',
        urlCountry: 'DK'
    }, {
        title: 'Deutsch',
        subtitle: 'Deutschland',
        locale: 'de-DE',
        urlLocale: 'de',
        urlCountry: 'DE'
    }, {
        title: 'Deutsch',
        subtitle: '\xd6sterreich',
        locale: 'de-AT',
        urlLocale: 'de-AT',
        urlCountry: 'AT'
    }, {
        title: 'Deutsch',
        subtitle: 'Schweiz',
        locale: 'de-CH',
        urlLocale: 'de-CH',
        urlCountry: 'CH'
    }, {
        title: 'Deutsch',
        subtitle: 'Luxemburg',
        locale: 'de-LU',
        urlLocale: 'de',
        urlCountry: 'LU'
    }, {
        title: 'Eesti',
        subtitle: 'Eesti',
        locale: 'et-EE',
        urlLocale: 'et',
        urlCountry: 'EE'
    }, {
        title: 'English',
        subtitle: 'Australia',
        locale: 'en-AU',
        urlLocale: 'en-AU',
        urlCountry: 'AU'
    }, {
        title: 'English',
        subtitle: 'Canada',
        locale: 'en-CA',
        urlLocale: 'en-CA',
        urlCountry: 'CA'
    }, {
        title: 'English',
        subtitle: 'Guyana',
        locale: 'en-GY',
        urlLocale: 'en',
        urlCountry: 'GY'
    }, {
        title: 'English',
        subtitle: 'India',
        locale: 'en-IN',
        urlLocale: 'en-IN',
        urlCountry: 'IN'
    }, {
        title: 'English',
        subtitle: 'Ireland',
        locale: 'en-IE',
        urlLocale: 'en-IE',
        urlCountry: 'IE'
    }, {
        title: 'English',
        subtitle: 'New Zealand',
        locale: 'en-NZ',
        urlLocale: 'en-NZ',
        urlCountry: 'NZ'
    }, {
        title: 'English',
        subtitle: 'Singapore',
        locale: 'en-SG',
        urlLocale: 'en-SG',
        urlCountry: 'SG'
    }, {
        title: 'English',
        subtitle: 'United Arab Emirates',
        locale: 'en-AE',
        urlLocale: 'en',
        urlCountry: 'AE'
    }, {
        title: 'English',
        subtitle: 'United Kingdom',
        locale: 'en-GB',
        urlLocale: 'en-GB',
        urlCountry: 'GB'
    }, {
        title: 'English',
        subtitle: 'United States',
        locale: 'en-US',
        urlLocale: 'en',
        urlCountry: 'US'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Argentina',
        locale: 'es-AR',
        urlLocale: 'es-AR',
        urlCountry: 'AR'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Belice',
        locale: 'es-BZ',
        urlLocale: 'es-XL',
        urlCountry: 'BZ'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Bolivia',
        locale: 'es-BO',
        urlLocale: 'es-XL',
        urlCountry: 'BO'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Chile',
        locale: 'es-CL',
        urlLocale: 'es-XL',
        urlCountry: 'CL'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Colombia',
        locale: 'es-CO',
        urlLocale: 'es-XL',
        urlCountry: 'CO'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Costa Rica',
        locale: 'es-CR',
        urlLocale: 'es-XL',
        urlCountry: 'CR'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Ecuador',
        locale: 'es-EC',
        urlLocale: 'es-XL',
        urlCountry: 'EC'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'El Salvador',
        locale: 'es-SV',
        urlLocale: 'es-419',
        urlCountry: 'SV'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Espa\xf1a',
        locale: 'es-ES',
        urlLocale: 'es',
        urlCountry: 'ES'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Estados Unidos',
        locale: 'es-US',
        urlLocale: 'es-419',
        urlCountry: 'US'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Guatemala',
        locale: 'es-GT',
        urlLocale: 'es-419',
        urlCountry: 'GT'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Honduras',
        locale: 'es-HN',
        urlLocale: 'es-419',
        urlCountry: 'HN'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Latinoam\xe9rica',
        locale: 'es-419',
        urlLocale: 'es-XL',
        urlCountry: 'CO'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'M\xe9xico',
        locale: 'es-MX',
        urlLocale: 'es-419',
        urlCountry: 'MX'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Nicaragua',
        locale: 'es-NI',
        urlLocale: 'es-419',
        urlCountry: 'NI'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Panam\xe1',
        locale: 'es-PA',
        urlLocale: 'es-419',
        urlCountry: 'PA'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Paraguay',
        locale: 'es-PY',
        urlLocale: 'es-AR',
        urlCountry: 'PY'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Per\xfa',
        locale: 'es-PE',
        urlLocale: 'es-XL',
        urlCountry: 'PE'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Venezuela',
        locale: 'es-VE',
        urlLocale: 'es-XL',
        urlCountry: 'VE'
    }, {
        title: 'Fran\xe7ais',
        subtitle: 'Belgique',
        locale: 'fr-BE',
        urlLocale: 'fr-BE',
        urlCountry: 'BE'
    }, {
        title: 'Fran\xe7ais',
        subtitle: 'Canada',
        locale: 'fr-CA',
        urlLocale: 'fr-CA',
        urlCountry: 'CA'
    }, {
        title: 'Fran\xe7ais',
        subtitle: 'France',
        locale: 'fr-FR',
        urlLocale: 'fr',
        urlCountry: 'FR'
    }, {
        title: 'Fran\xe7ais',
        subtitle: 'Suisse',
        locale: 'fr-CH',
        urlLocale: 'fr-CH',
        urlCountry: 'CH'
    }, {
        title: 'Fran\xe7ais',
        subtitle: 'Luxembourg',
        locale: 'fr-LU',
        urlLocale: 'fr',
        urlCountry: 'LU'
    }, {
        title: 'Gaeilge',
        subtitle: '\xc9ire',
        locale: 'ga-IE',
        urlLocale: 'ga',
        urlCountry: 'IE'
    }, {
        title: 'Hrvatski',
        subtitle: 'Hrvatska',
        locale: 'hr-HR',
        urlLocale: 'hr',
        urlCountry: 'US'
    }, {
        title: 'isiXhosa',
        subtitle: 'eMzantsi Afrika',
        locale: 'xh-ZA',
        urlLocale: 'xh',
        urlCountry: 'ZA'
    }, {
        title: 'isiZulu',
        subtitle: 'iNingizimu Afrika',
        locale: 'zu-ZA',
        urlLocale: 'zu',
        urlCountry: 'ZA'
    }, {
        title: '\xcdslenska',
        subtitle: '\xcdsland',
        locale: 'is-IS',
        urlLocale: 'is',
        urlCountry: 'IS'
    }, {
        title: 'Italiano',
        subtitle: 'Italia',
        locale: 'it-IT',
        urlLocale: 'it',
        urlCountry: 'IT'
    }, {
        title: 'Italiano',
        subtitle: 'Svizzera',
        locale: 'it-CH',
        urlLocale: 'it-CH',
        urlCountry: 'CH'
    }, {
        title: 'Kiswahili',
        subtitle: '\u0100frika',
        locale: 'sw-XX',
        urlLocale: 'sw',
        urlCountry: 'US'
    }, {
        title: 'Latvie\u0161u',
        subtitle: 'Latvija',
        locale: 'lv-LV',
        urlLocale: 'lv',
        urlCountry: 'LV'
    }, {
        title: 'Lietuvi\u0173',
        subtitle: 'Lietuva',
        locale: 'lt-LT',
        urlLocale: 'lt',
        urlCountry: 'LT'
    }, {
        title: 'Magyar',
        subtitle: 'Magyarorsz\xe1g',
        locale: 'hu-HU',
        urlLocale: 'hu',
        urlCountry: 'HU'
    }, {
        title: 'Malti',
        subtitle: 'Malta',
        locale: 'mt-MT',
        urlLocale: 'mt',
        urlCountry: 'MT'
    }, {
        title: 'Melayu',
        subtitle: 'Malaysia',
        locale: 'ms-MY',
        urlLocale: 'ms',
        urlCountry: 'MY'
    }, {
        title: 'Vlaams',
        subtitle: 'Belgi\xeb',
        locale: 'nl-BE',
        urlLocale: 'nl-BE',
        urlCountry: 'BE'
    }, {
        title: 'Nederlands',
        subtitle: 'Nederland',
        locale: 'nl-NL',
        urlLocale: 'nl',
        urlCountry: 'NL'
    }, {
        title: 'Norsk',
        subtitle: 'Norge',
        locale: 'no-NO',
        urlLocale: 'no',
        urlCountry: 'NO'
    }, {
        title: 'Polski',
        subtitle: 'Polska',
        locale: 'pl-PL',
        urlLocale: 'pl',
        urlCountry: 'PL'
    }, {
        title: 'Portugu\xeas',
        subtitle: 'Brasil',
        locale: 'pt-BR',
        urlLocale: 'pt',
        urlCountry: 'BR'
    }, {
        title: 'Portugu\xeas',
        subtitle: 'Portugal',
        locale: 'pt-PT',
        urlLocale: 'pt-PT',
        urlCountry: 'PT'
    }, {
        title: 'Rom\xe2n\u0103',
        subtitle: 'Rom\xe2nia',
        locale: 'ro-RO',
        urlLocale: 'ro',
        urlCountry: 'RO'
    }, {
        title: 'Shqip',
        subtitle: 'Shqip\xebri',
        locale: 'sq-AL',
        urlLocale: 'sq',
        urlCountry: 'AL'
    }, {
        title: 'Sloven\u010dina',
        subtitle: 'Slovensko',
        locale: 'sk-SK',
        urlLocale: 'sk',
        urlCountry: 'SK'
    }, {
        title: 'Sloven\u0161\u010dina',
        subtitle: 'Slovenija',
        locale: 'sl-SI',
        urlLocale: 'sl',
        urlCountry: 'SI'
    }, {
        title: 'Srpski',
        subtitle: 'Srbija',
        locale: 'sr-RS',
        urlLocale: 'sr',
        urlCountry: 'RS'
    }, {
        title: 'Suomi',
        subtitle: 'Suomi',
        locale: 'fi-FI',
        urlLocale: 'fi',
        urlCountry: 'FI'
    }, {
        title: 'Svenska',
        subtitle: 'Sverige',
        locale: 'sv-SE',
        urlLocale: 'sv',
        urlCountry: 'SE'
    }, {
        title: 'Tagalog',
        subtitle: 'Pilipinas',
        locale: 'tl-PH',
        urlLocale: 'tl',
        urlCountry: 'PH'
    }, {
        title: 'Ti\u1ebfng Vi\u1ec7t',
        subtitle: 'Vi\u1ec7t Nam',
        locale: 'vi-VN',
        urlLocale: 'vi',
        urlCountry: 'VN'
    }, {
        title: 'T\xfcrk\xe7e',
        subtitle: 'T\xfcrkiye',
        locale: 'tr-TR',
        urlLocale: 'tr',
        urlCountry: 'TR'
    }, {
        title: '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac',
        subtitle: '\u0395\u03bb\u03bb\u03ac\u03b4\u03b1',
        locale: 'el-GR',
        urlLocale: 'el',
        urlCountry: 'GR'
    }, {
        title: '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438',
        subtitle: '\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f',
        locale: 'bg-BG',
        urlLocale: 'bg',
        urlCountry: 'BG'
    }, {
        title: '\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438',
        subtitle: '\u0421\u0435\u0432\u0435\u0440\u043d\u0430 \u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430',
        locale: 'mk-MK',
        urlLocale: 'mk',
        urlCountry: 'MK'
    }, {
        title: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439',
        subtitle: '\u0420\u043e\u0441\u0441\u0438\u044f',
        locale: 'ru-RU',
        urlLocale: 'ru',
        urlCountry: 'RU'
    }, {
        title: '\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430',
        subtitle: '\u0423\u043a\u0440\u0430\u0457\u043d\u0430',
        locale: 'uk-UA',
        urlLocale: 'uk',
        urlCountry: 'UA'
    }, {
        title: '\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8',
        subtitle: '\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd',
        locale: 'ka-GE',
        urlLocale: 'ka',
        urlCountry: 'GE'
    }, {
        title: '\u0540\u0561\u0575\u0565\u0580\u0565\u0576',
        subtitle: '\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576',
        locale: 'hy-AM',
        urlLocale: 'hy',
        urlCountry: 'AM'
    }, {
        title: '\u05e2\u05d1\u05e8\u05d9\u05ea',
        subtitle: '\u05d9\u05e9\u05e8\u05d0\u05dc',
        locale: 'he-IL',
        urlLocale: 'he',
        urlCountry: 'IL'
    }, {
        title: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
        subtitle: '\u0627\u0644\u0639\u0627\u0644\u0645',
        locale: 'ar-XX',
        urlLocale: 'ar',
        urlCountry: 'US'
    }, {
        title: '\u0939\u093f\u0928\u094d\u0926\u0940',
        subtitle: '\u092d\u093e\u0930\u0924',
        locale: 'hi-IN',
        urlLocale: 'hi',
        urlCountry: 'IN'
    }, {
        title: '\u0c95\u0ca8\u0ccd\u0ca8\u0ca1',
        subtitle: '\u0cad\u0cbe\u0cb0\u0ca4',
        locale: 'kn-IN',
        urlLocale: 'kn',
        urlCountry: 'IN'
    }, {
        title: '\u092e\u0930\u093e\u0920\u0940',
        subtitle: '\u092d\u093e\u0930\u0924',
        locale: 'mr-IN',
        urlLocale: 'mr',
        urlCountry: 'IN'
    }, {
        title: '\u0e44\u0e17\u0e22',
        subtitle: '\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22',
        locale: 'th-TH',
        urlLocale: 'th',
        urlCountry: 'TH'
    }, {
        title: '\ud55c\uad6d\uc5b4',
        subtitle: '\ub300\ud55c\ubbfc\uad6d',
        locale: 'ko-KR',
        urlLocale: 'ko',
        urlCountry: 'KR'
    }, {
        title: '\u65e5\u672c\u8a9e',
        subtitle: '\u65e5\u672c',
        locale: 'ja-JP',
        urlLocale: 'ja',
        urlCountry: 'JP'
    }, {
        title: '\u7b80\u4f53\u4e2d\u6587',
        subtitle: '\u7f8e\u56fd',
        locale: 'zh-US',
        urlLocale: 'zh',
        urlCountry: 'US'
    }, {
        title: '\u7e41\u9ad4\u4e2d\u6587',
        subtitle: '\u7f8e\u570b',
        locale: 'zh-TW-US',
        urlLocale: 'zh-TW',
        urlCountry: 'US'
    }, {
        title: '\u7b80\u4f53\u4e2d\u6587',
        subtitle: '\u4e2d\u56fd',
        locale: 'zh-CN',
        urlLocale: 'zh-CN',
        urlCountry: 'CN'
    }, {
        title: '\u7e41\u9ad4\u4e2d\u6587',
        subtitle: '\u9999\u6e2f',
        cnSubtitle: '\u4e2d\u570b\u9999\u6e2f',
        locale: 'zh-HK',
        urlLocale: 'zh-HK',
        urlCountry: 'HK'
    }, {
        title: '\u7e41\u9ad4\u4e2d\u6587',
        subtitle: '\u53f0\u7063',
        cnSubtitle: '\u4e2d\u570b\u53f0\u7063',
        locale: 'zh-TW',
        urlLocale: 'zh-TW',
        urlCountry: 'TW'
    }]
}), "49d0f8", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = n(r(d[2])),
        u = r(d[3]),
        o = r(d[4]),
        f = n(r(d[5])),
        c = n(r(d[6])),
        s = t(r(d[7])),
        y = r(d[8]);
    const h = (0, o.extendStyles)(s.baseOptionSectionStyleFn, f.default, c.default);
    e.default = (0, u.withStyles)(h, {
        pureComponent: !0
    })((function({
        children: t,
        ...n
    }) {
        const u = l.default.Children.toArray(t)[0];
        return (0, y.jsx)(s.default, { ...n,
            children: u
        })
    }))
}), "4a5fdb", ["45f788", "ba7a76", "07aa1f", "e0b084", "01b367", "06c3ed", "8c2747", "1803ed", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";

    function t() {
        const n = r(d[0]);
        return t = function() {
            return n
        }, n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n, c, o) {
        const {
            pathname: h,
            search: u,
            hash: f
        } = s(o), l = (0, t().stringify)({ ...(0, t().parse)(u.slice(1)),
            locale: n,
            country_override: c
        }, {
            arrayFormat: 'brackets'
        });
        return `${h}?${l}${f}`
    };
    var n = r(d[1]);

    function s(t) {
        if (t) {
            const [n, s] = t.split('#'), [c, o] = n.split('?');
            return {
                pathname: c,
                search: o ? `?${o}` : '',
                hash: s ? `#${s}` : ''
            }
        }
        const {
            pathname: s,
            search: c,
            hash: o
        } = (0, n.getHistory)().location;
        return {
            pathname: s,
            search: c,
            hash: o
        }
    }
}), "4a8d41", ["e950a3", "7934b6"]);
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
    var u = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        urlLocale: u,
        urlCountry: o
    }, c = !1) {
        return {
            selected_locale: u,
            selected_country: o,
            previous_locale: l.default.locale(),
            previous_country: l.default.tld_country(),
            is_suggestion: c,
            browser_languages: (0, t.default)()
        }
    };
    var l = u(r(d[1])),
        t = u(r(d[2]))
}), "4f7837", ["ba7a76", "862e50", "1cbd4d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        l = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var u = r(d[2]),
        f = r(d[3]),
        n = l(r(d[4])),
        s = t(r(d[5]));
    const o = (0, f.extendStyles)(s.baseTranslationToggleStyleFn, n.default);
    e.default = (0, u.withStyles)(o)(s.default)
}), "590ee2", ["45f788", "ba7a76", "e0b084", "01b367", "8e9199", "6be632"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1]));

    function o() {
        const u = t(r(d[2]));
        return o = function() {
            return u
        }, u
    }
    var u = t(r(d[3])),
        n = t(r(d[4])),
        s = r(d[5]),
        c = r(d[6]);
    const l = { ...u.default,
        color: o().default.string,
        size: o().default.oneOfType([o().default.string, o().default.number])
    };

    function f({
        accessibilityLabel: t,
        decorative: o,
        color: u,
        size: s
    }) {
        const l = { ...t && {
                accessibilityLabel: t
            },
            ...o && {
                decorative: o
            }
        };
        return (0, c.jsx)(n.default, { ...l,
            fillOpacity: 0,
            stroke: u,
            strokeWidth: 3,
            size: s,
            rounded: !0
        })
    }
    f.propTypes = l, f.categories = [s.MISCELLANEOUS];
    e.default = f
}), "60a80e", ["ba7a76", "07aa1f", "b56f5a", "1744ea", "837845", "72354b", "b8c07d"]);
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
    var o = r(d[0]).default,
        n = r(d[1]).default;

    function t() {
        const o = n(r(d[2]));
        return t = function() {
            return o
        }, o
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    n(r(d[3]));
    var s = o(r(d[4])),
        c = r(d[5]),
        l = n(r(d[6])),
        u = n(r(d[7])),
        h = n(r(d[8])),
        b = r(d[9]),
        k = n(r(d[10])),
        f = o(r(d[11])),
        y = n(r(d[12])),
        p = n(r(d[13])),
        x = n(r(d[14])),
        _ = r(d[15]);
    const B = { ...c.withStylesPropTypes,
            id: t().default.string.isRequired,
            labelId: t().default.string.isRequired,
            describedById: (0, h.default)(t().default.string),
            name: t().default.string.isRequired,
            checked: (0, h.default)(t().default.bool),
            disabled: (0, h.default)(t().default.bool),
            onChange: (0, h.default)(t().default.func),
            refForFocus: (0, h.default)(t().default.func),
            ...s.withBrandPropTypes,
            customStyles: (0, p.default)(f.default)
        },
        C = {
            describedById: void 0,
            checked: !1,
            disabled: !1,
            onChange() {},
            refForFocus() {},
            customStyles: null
        };

    function S({
        css: o,
        id: n,
        labelId: t,
        describedById: c,
        checked: h,
        name: b,
        onChange: k,
        disabled: p,
        refForFocus: x,
        styles: B,
        brand: C,
        customStyles: S
    }) {
        const w = C === s.BRAND_SELECT,
            D = C === s.BRAND_LUXURY;
        return (0, _.jsx)(y.default, {
            componentID: f.CUSTOM_STYLES_KEY,
            customStyles: S,
            styleMapping: f.default,
            children: (0, _.jsxs)("button", {
                id: n,
                role: "checkbox",
                "aria-checked": h,
                "aria-labelledby": t,
                "aria-describedby": c,
                onClick: () => k(!h),
                type: "button",
                disabled: p,
                ref: x,
                ...o(B.uncheckedBackground, w && B.uncheckedBackground_selectBrand, D && B.uncheckedBackground_luxuryBrand, p && B.disabled),
                children: [(0, _.jsx)("input", {
                    type: "hidden",
                    name: b,
                    value: h,
                    disabled: p
                }), (0, _.jsx)("div", { ...o(B.checkedBackground, w && B.checkedBackground_selectBrand, D && B.checkedBackground_luxuryBrand, h && B.checkedBackground_checked, p && B.checkedBackground_disabled)
                }), (0, _.jsxs)("div", { ...o(B.slider, h && B.slider_checked, h && w && B.slider_checkedSelectBrand, h && D && B.slider_checkedLuxuryBrand, p && B.slider_disabled),
                    children: [(0, _.jsxs)("div", { ...o(B.iconContainer),
                        children: [(0, _.jsx)("div", { ...o(B.checkmarkCover, h && B.checkmarkCover_on)
                        }), (0, _.jsx)(l.default, {
                            size: 30,
                            decorative: !0
                        })]
                    }), (0, _.jsx)("div", { ...o(B.iconContainer, !h && B.times_unchecked, h && B.times_checked),
                        children: (0, _.jsx)("div", { ...o(B.timesScale, !h && B.timesScale_on),
                            children: (0, _.jsx)(u.default, {
                                size: 30,
                                decorative: !0
                            })
                        })
                    })]
                })]
            })
        })
    }
    S.propTypes = B, S.defaultProps = C;
    const w = 'ease-in-out';
    e.default = (0, k.default)('SwitchOnly', ['onChange'])((0, s.default)((0, c.withStyles)((0, x.default)((({
        border: o,
        unit: n,
        color: t,
        size: s
    }) => ({
        disabled: {
            cursor: 'default'
        },
        uncheckedBackground: {
            appearance: 'none',
            height: s.switch.size,
            width: s.switch.backgroundWidth,
            backgroundColor: t.accent.bgGray,
            borderRadius: o.switch.borderRadius,
            borderWidth: o.switch.borderWidth,
            borderStyle: 'solid',
            borderColor: t.accent.hrGray,
            margin: 'auto',
            position: 'relative',
            display: 'inline-block',
            cursor: 'pointer',
            '-webkit-tap-highlight-color': 'transparent',
            ':focus': {
                outline: 'none',
                boxShadow: `0 0 2px 2px ${t.focus}`
            }
        },
        uncheckedBackground_selectBrand: {
            ':focus': {
                outline: 'none',
                boxShadow: `0 0 2px 2px ${t.brand.plus}`
            }
        },
        uncheckedBackground_luxuryBrand: {
            ':focus': {
                outline: 'none',
                boxShadow: `0 0 2px 2px ${t.brand.luxury}`
            }
        },
        checkedBackground: {
            position: 'absolute',
            left: -1,
            top: -1,
            bottom: -1,
            right: -1,
            backgroundColor: t.checked,
            opacity: 0,
            display: 'inherit',
            borderRadius: o.switch.borderRadius,
            borderWidth: o.switch.borderWidth,
            borderStyle: 'solid',
            borderColor: t.checked,
            transitionProperty: 'opacity',
            transitionDuration: "250ms",
            transitionTimingFunction: w,
            [b.a11y.noMotion]: {
                transition: 'none'
            }
        },
        checkedBackground_selectBrand: {
            backgroundColor: t.brand.plus,
            borderColor: t.brand.plus
        },
        checkedBackground_luxuryBrand: {
            backgroundColor: t.brand.luxury,
            borderColor: t.brand.luxury
        },
        checkedBackground_checked: {
            opacity: 1
        },
        checkedBackground_disabled: {
            backgroundColor: t.checkedDisabled,
            borderColor: t.textDisabled
        },
        slider: {
            width: s.switch.size,
            height: s.switch.size,
            backgroundColor: t.white,
            borderRadius: '50%',
            borderWidth: o.switch.borderWidth,
            borderStyle: 'solid',
            borderColor: t.accent.hrGray,
            color: t.core.hof,
            display: 'block',
            transitionProperty: 'transform',
            transitionDuration: "250ms",
            transitionTimingFunction: w,
            overflow: 'hidden',
            position: 'absolute',
            top: -1,
            left: -1,
            transform: 'translate3d(0, 0, 0)',
            [b.a11y.noMotion]: {
                transition: 'none'
            }
        },
        slider_checked: {
            transform: `translate3d(${2*n}px, 0, 0)`,
            borderColor: t.checked,
            color: t.checked
        },
        slider_checkedSelectBrand: {
            borderColor: t.brand.plus,
            color: t.brand.plus
        },
        slider_checkedLuxuryBrand: {
            borderColor: t.brand.luxury,
            color: t.brand.luxury
        },
        slider_disabled: {
            borderColor: t.textDisabled,
            color: t.textDisabled
        },
        iconContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        },
        checkmarkCover: {
            position: 'absolute',
            top: 10,
            left: 5,
            right: 5,
            bottom: 10,
            backgroundColor: t.white,
            transform: 'scaleX(1)',
            transitionProperty: 'transform',
            transitionDelay: 0,
            transitionDuration: 0,
            transformOrigin: 'right center',
            [b.a11y.noMotion]: {
                transition: 'none'
            }
        },
        checkmarkCover_on: {
            transform: 'scaleX(0)',
            transitionDuration: "250ms",
            transitionDelay: "125ms",
            transitionTimingFunction: w,
            [b.a11y.noMotion]: {
                transition: 'none'
            }
        },
        times_checked: {
            transform: 'rotate(45deg)',
            transitionProperty: 'transform',
            transitionDelay: "62.5ms",
            transitionDuration: 0,
            [b.a11y.noMotion]: {
                transform: 'none',
                transition: 'none'
            }
        },
        times_unchecked: {
            transform: 'rotate(0)',
            transitionProperty: 'transform',
            transitionDelay: "62.5ms",
            transitionDuration: "187.5ms",
            [b.a11y.noMotion]: {
                transition: 'none'
            }
        },
        timesScale: {
            transform: 'scale(0, 0)',
            transitionProperty: 'transform',
            transitionDelay: 0,
            transitionDuration: "62.5ms",
            [b.a11y.noMotion]: {
                transition: 'none'
            }
        },
        timesScale_on: {
            transform: 'scale(1, 1)',
            transitionDelay: 0,
            transitionDuration: "62.5ms",
            [b.a11y.noMotion]: {
                transition: 'none'
            }
        }
    }))), {
        flushBefore: !0
    })(S)))
}), "6b0d50", ["45f788", "ba7a76", "b56f5a", "07aa1f", "3c7349", "e0b084", "3b9af4", "60a80e", "0a2076", "daa5d1", "9092d5", "fdcc6f", "4267ec", "66b80d", "4e73ec", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        l = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.baseTranslationToggleStyleFn = void 0, e.default = function({
        title: t,
        subtitle: l,
        css: f,
        icon: w,
        styles: C,
        legacySwitch: k = !1,
        ...D
    }) {
        (0, S.default)('BaseTranslationToggle', D);
        const E = (0, n.useMemo)((() => {
                const t = (0, b.default)(),
                    l = '_user_attributes' === t ? (0, s.getCookieSync)(t).value : (0, s.getCookieSync)(t, {
                        internalOnly: !0
                    }).value,
                    {
                        enable_auto_translate: n
                    } = JSON.parse(l || '{}');
                return n
            }), []),
            {
                id: M
            } = _.default.current(),
            I = (0, v.createGlobalId)('User', M),
            {
                data: F,
                refetch: O,
                loading: A
            } = (0, h().useMinimalistClientSideQuery)(y.default, {
                variables: {
                    ids: [I]
                },
                skip: !M || !I
            }),
            z = p(F, A, E),
            [B, G] = (0, n.useState)(z),
            [J] = (0, h().useMinimalistMutation)(T.default);
        (0, n.useEffect)((() => {
            A || G(z)
        }), [z, A]);
        const N = (0, n.useCallback)(((t, l, n) => {
            (0, j.default)(t), l && n && (J({
                variables: {
                    input: {
                        id: n,
                        userData: {
                            isAutoTranslationEnabled: t
                        }
                    }
                }
            }).then((() => O())), A || G(t))
        }), [J, A, O]);
        return (0, x.jsxs)("div", { ...f(C.container),
            children: [(0, x.jsxs)("div", {
                children: [t && (0, x.jsx)("span", {
                    id: "auto_translate_switch",
                    ...f(C.title),
                    children: t
                }), w && (0, x.jsx)("span", { ...f(C.icon),
                    children: (0, x.jsx)(c.default, {
                        decorative: !0,
                        size: 19
                    })
                }), l && (0, x.jsx)("div", { ...f(C.subtitle),
                    children: l
                })]
            }), (0, x.jsx)("div", { ...f(C.switch),
                children: k ? (0, x.jsx)(o.default, {
                    id: "auto_translate_legacy_switch",
                    name: t,
                    labelId: "auto_translate_switch",
                    checked: B,
                    loggingID: B ? 'profile.translateToggle.loginEnable' : 'profile.translateToggle.loginDisable',
                    onChange: t => {
                        N(t, M, I)
                    }
                }) : (0, x.jsx)(u.default, {
                    name: t,
                    "aria-labelledby": "auto_translate_switch",
                    loggingID: B ? 'localeSettings.languageSelector.translationToggleEnable' : 'localeSettings.languageSelector.translationToggleDisable',
                    on: B,
                    onChange: t => {
                        N(t, M, I)
                    }
                })
            })]
        })
    };
    var n = l(r(d[2])),
        s = r(d[3]),
        o = t(r(d[4])),
        u = t(r(d[5])),
        c = t(r(d[6])),
        f = r(d[7]),
        b = t(r(d[8]));

    function h() {
        const t = r(d[9]);
        return h = function() {
            return t
        }, t
    }
    var _ = t(r(d[10])),
        v = r(d[11]),
        S = t(r(d[12])),
        y = t(r(d[13])),
        T = t(r(d[14])),
        j = t(r(d[15])),
        x = r(d[16]);

    function p(t, l, n) {
        const s = t ? .nodes ? .[0] ? .isAutoTranslationEnabled;
        return !l && _.default.current().idStr ? null == s || s : null == n || n
    }
    e.baseTranslationToggleStyleFn = (0, f.extendableStyleFn)((() => ({
        container: {},
        title: {},
        subtitle: {},
        icon: {},
        switch: {}
    })))
}), "6be632", ["ba7a76", "45f788", "07aa1f", "13babd", "6b0d50", "f9942c", "6ca90e", "01b367", "80d396", "068abc", "06a99e", "56afe0", "b7564f", "3143e1", "7469fc", "9d6d94", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const t = (0, l(r(d[1])).default)({
        svgContents: "<path d=\"M9 0a1 1 0 0 1 1 .88V6h5a1 1 0 0 1 1 .88V15a1 1 0 0 1-.88 1H7a1 1 0 0 1-1-.88V10H1a1 1 0 0 1-1-.88V1a1 1 0 0 1 .88-1H9zm1.73 7-1.4.5.24.21.13.13c.12.13.23.25.3.36l.08.1.05.07.04.08H7.31v1.3h1.2l.17.53.1.26.1.3A6.3 6.3 0 0 0 10 12.61c-.5.32-1.12.61-1.87.87l-.33.11-.35.11-.44.14.72 1.15.4-.13.4-.12c1-.35 1.83-.76 2.48-1.22.57.4 1.28.77 2.12 1.08l.37.14.38.12.41.13.72-1.15-.45-.14-.26-.08-.34-.11a9.23 9.23 0 0 1-1.94-.9 6.3 6.3 0 0 0 1.07-1.7l.13-.31.11-.33.17-.52h1.2V8.45h-3.05l-.1-.23A3.7 3.7 0 0 0 11 7.3l-.12-.15-.14-.15zm1.35 2.76-.04.13-.08.22-.1.27a4.99 4.99 0 0 1-.86 1.38 4.95 4.95 0 0 1-.74-1.13l-.12-.25-.1-.27-.08-.22-.04-.13h2.16zM9 1H1v8h5V7l.01-.17H3.83L3.43 8H2l2.26-6h1.48l1.5 4H9V1zM5 3.41 4.25 5.6h1.5L5 3.41z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16"
        }
    }, 'IcCompactTranslate16', {
        defaultSize: 16
    });
    e.default = t
}), "6ca90e", ["ba7a76", "c65865"]);
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.TRANSPORT = e.STARS = e.SOCIAL = e.SIDE_DRAWER = e.SEARCH = e.SAFETY = e.PROPERTY_TYPES = e.PROHOST = e.PEOPLE = e.PAYMENTS = e.P3 = e.MISCELLANEOUS = e.MEDIA = e.MARQUEE_NAV = e.LOCATION = e.INDICATOR = e.IDENTITY = e.HEARTS = e.GENERAL_WEB_PRODUCTS = e.DIRECTIONS = e.DEVICES = e.DATE_TIME = e.COMMUNICATION = e.CHECKMARKS = e.CENTERED_INDICATOR = e.BED_TYPES = e.AMENITIES = e.ALERTS = e.AIRMOJI = e.AIRBNB_PRODUCTS = void 0;
    e.AIRBNB_PRODUCTS = 'Airbnb products', e.AIRMOJI = 'centered airmoji', e.ALERTS = 'alerts', e.AMENITIES = 'amenities', e.BED_TYPES = 'bed types', e.CENTERED_INDICATOR = 'centered indicator', e.CHECKMARKS = 'checkmarks', e.COMMUNICATION = 'communication', e.DATE_TIME = 'date and time', e.DEVICES = 'devices', e.DIRECTIONS = 'directions', e.GENERAL_WEB_PRODUCTS = 'general web products', e.HEARTS = 'hearts', e.IDENTITY = 'identity', e.INDICATOR = 'indicator', e.LOCATION = 'location', e.MARQUEE_NAV = 'marquee nav', e.MEDIA = 'media', e.MISCELLANEOUS = 'miscellaneous', e.P3 = 'p3', e.PAYMENTS = 'payments', e.PEOPLE = 'people', e.PROHOST = 'prohost', e.PROPERTY_TYPES = 'property types', e.SAFETY = 'safety', e.SEARCH = 'search', e.SIDE_DRAWER = 'side drawer', e.SOCIAL = 'social', e.STARS = 'stars', e.TRANSPORT = 'transport'
}), "72354b", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var u = t(r(d[1]));
    const f = {
        document: void 0,
        getDocument: () => r(d[3])(d[2]).then(u.default).then((t => t.default)),
        name: 'UpdateUserAutoTranslateStatus',
        type: 'mutation',
        operationId: '94be41875bfb2aa2a4615f115e992b7eda50f832384c3c2fb6b2e19ffc157695'
    };
    e.default = f
}), "7469fc", ["ba7a76", "45f788", "b3fc7d", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const u = process.env.USER_ATTRIBUTES_COOKIE_NAME;
        if (t.includes(u)) return u;
        return '_user_attributes'
    };
    const t = ['_user_attributes', '_user_attributes_dev']
}), "80d396", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1]));
    var s = t(r(d[2])),
        u = r(d[3]),
        o = r(d[4]),
        l = {
            svgContents: "<path d=\"m19.1 19.1 l14 14 m 0 -14 l -14 14\" />",
            svgProps: {
                viewBox: "0 0 52 52"
            }
        };

    function n(t) {
        return (0, o.jsx)(s.default, {
            svg: l,
            ...t
        })
    }
    n.categories = [u.MISCELLANEOUS];
    e.default = n
}), "837845", ["ba7a76", "07aa1f", "11d036", "72354b", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    e.default = () => ({
        option: {
            display: 'inline-block'
        }
    })
}), "8c2747", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    e.default = ({
        dls19: t
    }) => ({
        container: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: t.palette.faint,
            borderRadius: t.spacing.micro8px,
            marginTop: t.spacing.macro24px,
            padding: t.spacing.micro16px
        },
        icon: {
            color: t.palette.hof,
            display: 'inline-flex',
            verticalAlign: 'sub',
            marginLeft: t.spacing.micro8px
        },
        title: { ...t.typography.base.lg,
            color: t.palette.hof
        },
        subtitle: { ...t.typography.base.md_tall,
            color: t.palette.foggy,
            marginTop: t.spacing.micro8px
        },
        switch: {
            marginLeft: 'auto',
            paddingLeft: t.spacing.micro24px
        }
    })
}), "8e9199", []);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.SelectLanguage = {
        defaultProps: {},
        propTypes: {}
    };
    t.fullyQualifiedName = 'I18nProduct.v1.SelectLanguage';
    e.SelectLanguageEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "97db4a", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";

    function n() {
        const t = r(d[0]);
        return n = function() {
            return t
        }, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n) {
        {
            const {
                pathname: t
            } = window.location;
            window.location.replace(`${t}${o(n)}`)
        }
    };
    var t = r(d[1]);

    function o(o) {
        const c = { ...(0, n().parse)(window.location.search.slice(1)),
                enable_auto_translate: o
            },
            s = `?${(0,n().stringify)(c,{arrayFormat:'brackets'})}${window.location.hash}`;
        return (0, t.getHistory)().replace(s), s
    }
}), "9d6d94", ["e950a3", "7934b6"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1]));
    var l = t(r(d[2]));

    function n() {
        const t = r(d[3]);
        return n = function() {
            return t
        }, t
    }
    var s = t(r(d[4])),
        u = t(r(d[5])),
        o = t(r(d[6])),
        c = t(r(d[7])),
        f = t(r(d[8])),
        _ = t(r(d[9])),
        h = t(r(d[10])),
        p = t(r(d[11])),
        x = r(d[12]);
    e.default = (0, u.default)('LanguageSelector', [])((function({
        currentLocale: t,
        languages: u,
        suggestedLocales: j = [],
        redirectTo: L
    }) {
        const v = [],
            S = [...u];
        j.forEach((t => {
            const l = S.findIndex((({
                locale: l
            }) => l === t));
            l && v.push(...S.splice(l, 1))
        }));
        const b = S.findIndex((({
            locale: l
        }) => l === t)); - 1 !== b && S.unshift(...S.splice(b, 1));
        const I = v.length;

        function E(l, s) {
            const {
                locale: u,
                title: c,
                subtitle: f,
                urlLocale: p,
                urlCountry: j
            } = l, v = u === t;
            let S;
            return S = v ? 'current' : s ? 'suggestion' : 'option', (0, x.jsx)(o.default, {
                title: c,
                subtitle: f,
                href: (0, _.default)(p, j, L),
                locale: u,
                selected: v,
                loggingID: `localeSettings.languageSelector.${S}`,
                ...(0, n().SelectLanguageEvent)((0, h.default)(l, s))
            }, u)
        }
        const M = S.filter((l => t === l.locale))[0],
            T = s.default.get('isValidMMTLoop');
        return (0, x.jsxs)(x.Fragment, {
            children: [T && (0, x.jsx)(f.default, {
                children: (0, x.jsx)(p.default, {
                    title: l.default.t('locale_settings.auto_translate'),
                    subtitle: l.default.t('locale_settings.auto_translate_subtitle_desktop', {
                        current_language: M.title || 'English'
                    }),
                    loggingID: "localeSettings.languageSelector.translationToggle",
                    shouldLogImpression: !0,
                    icon: !0
                })
            }), !!I && (0, x.jsx)(c.default, {
                title: l.default.t('locale_settings.suggested_languages', {
                    smart_count: I
                }),
                children: v.map((t => E(t, !0)))
            }), (0, x.jsx)(c.default, {
                title: l.default.t('locale_settings.choose_a_language'),
                children: S.map((t => E(t, !1)))
            })]
        })
    }))
}), "a500f7", ["ba7a76", "07aa1f", "a9f4b1", "97db4a", "ef2bc3", "9092d5", "c962cf", "d553ae", "4a5fdb", "4a8d41", "4f7837", "590ee2", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        let l = n.default;
        u.default.isTrebuchetLaunched((0, c.default)('language_selector.show_mrkn')) || (l = n.default.filter((({
            urlLocale: l
        }) => !['mr', 'kn'].includes(l))));
        u.default.isTrebuchetLaunched((0, c.default)('language_selector.zh_cn_url_locale.killswitch')) && (l = n.default.map((l => 'zh-CN' === l.urlLocale ? { ...l,
            urlLocale: 'zh'
        } : l)));
        if ('CN' === t.default.country()) return l.map((({
            cnSubtitle: l,
            subtitle: t,
            ...u
        }) => ({ ...u,
            subtitle: l || t
        })));
        return l
    };
    var t = l(r(d[1])),
        u = l(r(d[2])),
        c = l(r(d[3])),
        n = l(r(d[4]))
}), "a51e3b", ["ba7a76", "862e50", "dcc72a", "2c6bf9", "49d0f8"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    m.exports = function(t) {
        if ('string' != typeof t) throw new TypeError('expected a string');
        return (t = (t = (t = t.replace(/([a-z])([A-Z])/g, '$1-$2')).replace(/[ \t\W]/g, '-')).replace(/^-+|-+$/g, '')).toLowerCase()
    }
}), "bba9aa", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const t = (0, n.default)(),
            o = l.default.locale(),
            f = l.default.tld_country();
        if ('zh' === o && 'US' === f && window.location.hostname.startsWith('zh-cn.')) return 'zh-CN';
        if (!u.default.isTrebuchetLaunched((0, c.default)('language_selector.zh_cn_url_locale.killswitch')) && 'zh' === o && 'CN' === f) return 'zh-CN';
        const s = t.find((({
            urlLocale: t,
            urlCountry: l
        }) => t === o && l === f));
        if (s) return s.locale;
        const h = t.find((({
            urlLocale: t
        }) => t === o));
        if (h) return h.locale;
        return o
    };
    var l = t(r(d[1])),
        u = t(r(d[2])),
        n = t(r(d[3])),
        c = t(r(d[4]))
}), "cd75f1", ["ba7a76", "862e50", "dcc72a", "a51e3b", "2c6bf9"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1]));
    var s = t(r(d[2])),
        u = r(d[3]),
        o = r(d[4]),
        n = {
            svgContents: "<path d=\"m19.1 25.2 4.7 6.2 12.1-11.2\" />",
            svgProps: {
                viewBox: "0 0 52 52"
            }
        };

    function v(t) {
        return (0, o.jsx)(s.default, {
            svg: n,
            ...t
        })
    }
    v.categories = [u.MISCELLANEOUS];
    e.default = v
}), "d0c66a", ["ba7a76", "07aa1f", "11d036", "72354b", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const s = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"m10.5 1.939 1.061 1.061-7.061 7.061-.53-.531-3-3-.531-.53 1.061-1.061 3 3 5.47-5.469z\" />",
        svgProps: {
            viewBox: "0 0 12 12",
            xmlns: "http://www.w3.org/2000/svg"
        }
    }, 'IcSystemCheck15Pt12', {
        defaultSize: 12
    });
    e.default = s
}), "e525cf", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1]));
    var u = r(d[2]);
    e.default = function(t, f) {
        return n => (0, u.jsx)(t, { ...n,
            ...f
        })
    }
}), "e8606c", ["ba7a76", "07aa1f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const t = (0, s.default)().map((({
                locale: t
            }) => t)),
            f = (0, h.default)(),
            p = n.default.tld_country(),
            z = [],
            S = new Set;
        (0, u.default)().reduce(((t, n) => {
            const s = n.toLowerCase().replace(/-[a-z]+/g, (t => t.toUpperCase()));
            const h = o[s] || s;
            t.push(h);
            if (h in c) {
                t.push(c[h])
            }
            if (p !== 'US' && h === 'en-US') {
                t.push('en-GB')
            } else if (p === 'US' && h === 'zh-CN') {
                t.push('zh-US')
            }
            return t
        }), []).forEach((n => {
            const s = n.slice(0, 2);
            if (t.includes(n)) return z.push(n), void S.add(s);
            if (S.has(s)) return;
            const h = s in l ? l[s] : t.filter((t => t.startsWith(s)));
            h.length && (z.push(...h), S.add(s))
        })), 'US' !== p && t.forEach((t => {
            t.endsWith(p) && z.push(t)
        }));
        const N = new Set(z);
        return N.delete(f), [...N].slice(0, 5)
    };
    var n = t(r(d[1])),
        s = t(r(d[2])),
        h = t(r(d[3])),
        u = t(r(d[4]));
    const o = {
            nb: 'no',
            nn: 'no',
            iw: 'he',
            in: 'id',
            'zh-HANS': 'zh-CN',
            'zh-HANS-CN': 'zh-CN',
            'zh-HANT': 'zh-TW',
            'zh-HANT-TW': 'zh-TW',
            'zh-HANT-HK': 'zh-HK'
        },
        c = {
            'pt-BR': 'pt-PT',
            'pt-PT': 'pt-BR',
            'es-MX': 'es-419',
            'es-419': 'es-MX'
        },
        l = {
            en: ['en-US', 'en-GB', 'en-AU'],
            es: ['es-ES', 'es-MX', 'es-AR', 'es-419']
        }
}), "ee4284", ["ba7a76", "862e50", "a51e3b", "cd75f1", "1cbd4d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.switchCssFragments = e.default = e.UnstyledSwitch = void 0;
    r(d[1]);
    var n = r(d[2]),
        o = r(d[3]),
        _ = r(d[4]),
        l = (r(d[5]), r(d[6])),
        s = t(r(d[7])),
        c = t(r(d[8]));
    const b = e.switchCssFragments = (0, l.mergeStyles)(n.baseSwitchCssFragments, {
            container: "\n    outline: none;   &::-moz-focus-inner {     border: none;     padding: 0;     margin: 0;   }   &:focus::-moz-focus-inner {     border: none;   }   &:-moz-focusring {     outline: none;   }\n\n    :focus-visible {                   @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {       transition: none;     }     transition: box-shadow 0.2s var(--linaria-theme_motion-standard-curve-animation-timing-function);          box-shadow: 0 0 0 2px var(--linaria-theme_palette-bg-primary), 0 0 0 4px var(--linaria-theme_palette-border-primary), 0 0 0 5px rgba(255,255,255,0.5); /* migrated from theme.palette         .white, theme.palette.hof */          }     @supports not selector(:focus-visible) {       :focus {                     @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {       transition: none;     }     transition: box-shadow 0.2s var(--linaria-theme_motion-standard-curve-animation-timing-function);          box-shadow: 0 0 0 2px var(--linaria-theme_palette-bg-primary), 0 0 0 4px var(--linaria-theme_palette-border-primary), 0 0 0 5px rgba(255,255,255,0.5); /* migrated from theme.palette         .white, theme.palette.hof */            }     }\n\n\n\n\n\n       \n  ",
            container_on: "\n    background-color: var(--linaria-theme_palette-bg-primary-inverse); /* migrated from theme.palette.hof */\n    border-color: var(--linaria-theme_palette-border-primary); /* migrated from theme.palette.hof */\n\n    &:disabled {\n      background-color: var(--linaria-theme_palette-border-primary-disabled); /* migrated from theme.palette\n        .deco */\n      border-color: var(--linaria-theme_palette-border-primary-disabled); /* migrated from theme.palette\n        .deco */\n    }\n\n    /* stylelint-disable selector-max-type */\n    &:disabled > div {\n      border-color: var(--linaria-theme_palette-border-primary-disabled); /* migrated from theme.palette\n        .deco */\n    }\n    /* stylelint-enable selector-max-type */\n  ",
            container_off: "\n    background-color: var(--linaria-theme_palette-border-secondary); /* migrated from theme.palette.bobo */\n    border-color: var(--linaria-theme_palette-border-secondary); /* migrated from theme.palette.bobo */\n\n    @media (hover: hover) {       &:hover {                &:not(:disabled) {             background-color: var(--linaria-theme_palette-border-secondary-hover); /* migrated from theme.palette         .foggy */       border-color: var(--linaria-theme_palette-border-secondary-hover); /* migrated from theme.palette         .foggy */       }            }     }\n\n\n\n\n\n\n       \n\n    @media (hover: hover) {       &:hover {                &:not(:disabled) > div  {         border-color: var(--linaria-theme_palette-bg-tertiary-hover);       }            }     }\n\n\n\n       \n\n    &:disabled {\n      background-color: var(--linaria-theme_palette-border-secondary-disabled); /* migrated from theme.palette\n        .bebe */\n      border-color: var(--linaria-theme_palette-border-secondary-disabled); /* migrated from theme.palette\n        .bebe */\n    }\n\n    /* stylelint-disable selector-max-type */\n    &:disabled > div {\n      border-color: var(--linaria-theme_palette-border-secondary-disabled); /* migrated from theme.palette\n        .bebe */\n    }\n    /* stylelint-enable selector-max-type */\n  ",
            slider: "\n    background-color: var(--linaria-theme_palette-bg-primary); /* migrated from theme.palette.white */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-width: 2px;\n\n    transition: transform 250ms var(--linaria-theme_motion-standard-curve-animation-timing-function);\n    @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {\n      transition: none;\n    }\n\n    &:disabled {\n      border-color: var(--linaria-theme_palette-border-primary-disabled); /* migrated from theme.palette\n        .deco */\n      color: var(--linaria-theme_palette-text-primary-disabled); /* migrated from theme.palette.deco */\n    }\n  ",
            slider_on: "\n    border-color: var(--linaria-theme_palette-border-primary); /* migrated from theme.palette.hof */\n    color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */\n  ",
            slider_off: "\n    border-color: var(--linaria-theme_palette-border-secondary); /* migrated from theme.palette.bobo */\n  "
        }),
        h = ((0, _.cssFragmentsObjToStylesFn)(b), e.UnstyledSwitch = (0, s.default)(n.BaseSwitch, {
            renderSliderContent: c.default
        }));
    e.default = (0, o.createVariant)(h, {
        container: "canm9xs atm_5j_1vi7ecw atm_66_nqa18y atm_6h_t94yts atm_9j_tlke0l atm_e2_1vi7ecw atm_mk_h2mmj6 atm_jb_fyhuej atm_vy_fyhuej atm_kd_glywfm atm_2d_4ccpr2_1o5j5ji atm_4b_1k0ymf0_1o5j5ji atm_9j_13gfvf7_1o5j5ji atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_uc_aaiy6o_1w3cfyq atm_70_j7h7jn_1w3cfyq atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_j7h7jn_pfnrn2_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam",
        container_on: "c1i6tylb atm_2d_18sdevw atm_2d_18sdevw atm_4b_1qnzqti atm_2d_1k0ymf0_1o5j5ji atm_4b_1k0ymf0_1o5j5ji atm_4b_1k0ymf0_itk5vk",
        container_off: "cczfeks atm_2d_o3liez atm_2d_1en9qhd atm_4b_1en9qhd atm_2d_1591upv_1vpy06o_uv4tnr atm_4b_1591upv_1vpy06o_uv4tnr atm_4b_ifp87q_1dwc78j_uv4tnr atm_2d_1vvgs7l_1o5j5ji atm_4b_1vvgs7l_1o5j5ji atm_4b_1vvgs7l_itk5vk",
        slider: "s195dsor atm_2d_1qwqy05 atm_5j_1ssbidh atm_66_nqa18y atm_e2_1vi7ecw atm_fq_1n1ank9 atm_mk_stnw88 atm_tk_1n1ank9 atm_tr_1jbocfw atm_vy_1vi7ecw atm_2d_1qwqy05 atm_9s_1txwivl atm_h_1h6ojuz atm_fc_1h6ojuz atm_6h_yh40bf atm_uc_5cp38c atm_uc_glywfm__1rrf6b5 atm_4b_1k0ymf0_1o5j5ji atm_7l_9vytuy_1o5j5ji",
        slider_on: "sl9yi1h atm_tr_28vhyn atm_4b_1qnzqti atm_7l_jt7fhx",
        slider_off: "slxkbsd atm_4b_1en9qhd",
        slider_disabled: "sts2dka atm_4b_1k0ymf0 atm_7l_9vytuy"
    })
}), "f9942c", ["ba7a76", "daa5d1", "2706c0", "92749c", "2d8af3", "4786a8", "aabdb1", "e8606c", "1daeba"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.CUSTOM_STYLES_KEY = void 0;
    e.CUSTOM_STYLES_KEY = 'switchOnly';
    e.default = {
        backgroundColorUnchecked: '--color-accent-bg-gray',
        backgroundColorDisabled: '--color-checked-disabled',
        borderColor: '--color-accent-hr-gray',
        borderColorDisabled: '--color-text-disabled',
        borderRadius: '--border-switch-border-radius',
        borderWidth: '--border-switch-border-width',
        boxShadowColor: '--color-focus',
        colorChecked: '--color-checked',
        colorFocused: '--color-focus',
        sliderBackgroundColor: '--color-white',
        textColor: '--color-core-hof',
        textColorDisabled: '--color-text-disabled'
    }
}), "fdcc6f", []);
__r("a9f4b1").extend({
    "locale_settings.auto_translate": "Translation",
    "locale_settings.auto_translate_subtitle_desktop": "Automatically translate descriptions and reviews to %{current_language}.",
    "locale_settings.suggested_languages": "Suggested language and region||||Suggested languages and regions",
    "locale_settings.choose_a_language": "Choose a language and region"
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/0504.6f6215418f.js.map