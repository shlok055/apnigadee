__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        (0, u.default)() && document.body.classList.add('touch')
    };
    var u = t(r(d[1]))
}), "17423d", ["ba7a76", "48213b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const n = -(new Date).getTimezoneOffset();
        (0, t.setCookieSync)('tzo', `${n}`, {
            domain: (0, o.getCookieHost)(),
            path: '/',
            secure: !0
        })
    };
    var t = r(d[0]),
        o = r(d[1])
}), "1888c9", ["13babd", "5b85ba"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.installBrowserPolyfills = function() {
        return Promise.allSettled([n()])
    };
    var l = t(r(d[1])),
        s = t(r(d[2]));
    const o = () => r(d[4])(d[3]).then(l.default);
    async function n() {
        if (s.default.getBootstrap('enable_css_has_selector_polyfill')) try {
            if (!CSS.supports('selector(:has(any))')) {
                const {
                    default: t
                } = await o();
                t(document)
            }
        } catch {}
    }
}), "1d74bb", ["ba7a76", "45f788", "c235f8", "4f3f85", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.AUTO_DOWNLOAD_APP_WECHAT_CBL = void 0;
    e.AUTO_DOWNLOAD_APP_WECHAT_CBL = 'wechat_auto_download_cbl_2017_campaign_coupon'
}), "21edc7", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        skipServiceWorkers: t,
        bootstrapData: k
    }) {
        (0, l.installBrowserPolyfills)(), (0, n.default)(), (0, f.default)(), k.get('no_flash_alerts') || c.scheduler.postTask((() => s.default.display()), {
            event: 'hydrate-complete'
        });
        (0, u.default)(), (0, p.default)(), t || (0, _.default)();
        (0, w.default)(), (0, y.default)(), window.JST = window.JST || {}, c.scheduler.postTask((async () => {
            const {
                default: t
            } = await r(d[13])(d[12]).then(o.default);
            t()
        }), {
            event: 'hydrate-complete',
            priority: 'background'
        }), void 0 !== window.performance && 'function' == typeof window.performance.mark && window.performance.mark('core_execution_end')
    };
    var o = t(r(d[1])),
        l = r(d[2]),
        n = t(r(d[3])),
        f = t(r(d[4])),
        u = t(r(d[5])),
        s = t(r(d[6])),
        c = r(d[7]),
        p = t(r(d[8])),
        w = t(r(d[9])),
        y = t(r(d[10])),
        _ = t(r(d[11]))
}), "307c3b", ["ba7a76", "45f788", "1d74bb", "1888c9", "8c48ce", "17423d", "761c6d", "a2c93f", "454466", "a94495", "eab56e", "51ba73", "541692", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const t = window.location.pathname.startsWith('/immigration-support'),
            p = /^\/reservation\/[a-zA-Z0-9]+\/payment\/[a-zA-Z0-9]+/.test(window.location.pathname),
            h = window.location.pathname.startsWith('/cityportal'),
            w = 'c' === window.location.pathname.split('/')[1];
        if ((0, u.default)()['check-account-activation']) {
            if (window.location.pathname.includes('become-a-host')) return;
            if (window.location.pathname.startsWith('/r/')) return;
            if (f(window.location.pathname) && 'true' === localStorage.getItem('hlp_skip_account_activation_experiment')) return;
            if (h) return;
            if (t) return;
            if (l(window.location.pathname)) return;
            if (p) return;
            if (o.default.is('sm') && (0, u.default)().claiming_coupon) return;
            if ((0, c.isWechatBrowser)() && (0, u.default)()[s.AUTO_DOWNLOAD_APP_WECHAT_CBL]) return;
            if (w) return;
            r(d[7])(d[6]).then(n.default).then((t => t.default || t)).then((t => t()))
        }
    };
    var n = t(r(d[1])),
        o = t(r(d[2])),
        u = t(r(d[3])),
        c = r(d[4]),
        s = r(d[5]);

    function l(t) {
        return /rooms|bingopdp|experiences/.test(t)
    }

    function f(t) {
        return /host\/homes|d\/setup|d\/safety|d\/financials|d\/host_testimonial/.test(t)
    }
}), "454466", ["ba7a76", "45f788", "3064e3", "a7c4ef", "e9b7bf", "21edc7", "a8c148", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        return !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch) || !('undefined' == typeof navigator || !navigator.maxTouchPoints && !navigator.msMaxTouchPoints)
    }, m.exports = e.default
}), "48213b", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    e.default = [/^airbnb-/, /^workbox-precache-/]
}), "4c9d74", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        if (!('serviceWorker' in navigator)) return;
        window.addEventListener('load', (() => {
            requestIdleCallback((() => {
                navigator.serviceWorker.getRegistration && navigator.serviceWorker.getRegistration('/').then((t => {
                    t && t.active && !c.HYPERLOOP_SW_NAME_REGEX.test(t.active.scriptURL) && ((0, n.airdogCount)('initializers.service_worker.unregister_legacy_sw', 1, `legacy_sw_path:${t.active.scriptURL}`), t.unregister(), o())
                })).catch((() => {}))
            }))
        }))
    };
    var c = r(d[1]),
        n = r(d[2]),
        s = t(r(d[3]));

    function o() {
        'caches' in window && caches.keys().then((t => {
            t.filter((t => s.default.some((c => c.test(t))))).forEach((t => {
                caches.delete(t)
            }))
        }))
    }
}), "51ba73", ["ba7a76", "544b0f", "3e4681", "4c9d74"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.maybeOpenSSOLoginModal = async function() {
        const {
            show_sso_signup_flow: t,
            auth_merge_from: l,
            sso_authentication: _,
            force_reload_on_sso_success: w
        } = (0, s.default)();
        if ('true' === t && !l) {
            const t = new Date;
            t.setDate(t.getDate() + f);
            const o = { ...'true' === w && {
                    forceReloadOnSSOSuccess: !0,
                    skipSSOInitialPane: !0
                }
            };
            await r(d[7])(d[6]).then(n.default).then((t => {
                t.default(o)
            }))
        }
        if ('true' === _ && u.default.getBootstrap('a4w.sso.m1.a4w5559') && !c.default.isLoggedIn()) {
            const {
                sso_authentication: t,
                ...n
            } = (0, s.default)();
            window.location.replace(`${window.location.pathname}?${o().default.stringify(n)}`)
        }
    };
    var n = t(r(d[1]));

    function o() {
        const n = t(r(d[2]));
        return o = function() {
            return n
        }, n
    }
    var s = t(r(d[3])),
        u = t(r(d[4])),
        c = t(r(d[5]));
    const f = 14
}), "5ab516", ["ba7a76", "45f788", "e950a3", "a7c4ef", "c235f8", "06a99e", "527cd8", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getBreakpointFromCookie = function(t) {
        if (null === t) return l[1];
        'string' == typeof t && (t = parseInt(t, 10));
        return l[t]
    }, Object.defineProperty(e, "getCookieHost", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    }), e.getCookieValFromBreakpoint = function(t) {
        return u[t]
    }, e.updateCookie = function(t) {
        const u = (0, o.getCookieSync)(c).value;
        if (null === u) return void(0, o.setCookieSync)(c, `${t}`, {
            domain: (0, n.default)(),
            path: '/'
        });
        parseInt(u, 10) !== t && (0, o.setCookieSync)(c, `${t}`, {
            domain: (0, n.default)(),
            path: '/'
        })
    };
    var o = r(d[1]),
        n = t(r(d[2]));
    const u = {
            small: 1,
            medium: 2,
            large: 3,
            xlarge: 4
        },
        l = {
            1: 'small',
            2: 'medium',
            3: 'large',
            4: 'xlarge'
        },
        c = 'cbkp'
}), "5b85ba", ["ba7a76", "13babd", "f5172f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    m.exports = function(t, o) {
        if (!{}.hasOwnProperty.call(t, o)) throw new TypeError("attempted to use private field on non-instance");
        return t
    }, m.exports.__esModule = !0, m.exports.default = m.exports
}), "76718e", []);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.AccessibilityComponentActionEvent = {
        defaultProps: {
            schema: 'com.airbnb.jitney.event.logging.Accessibility:AccessibilityComponentActionEvent:1.0.0',
            event_name: 'accessibility_component_action'
        },
        propTypes: {}
    };
    t.fullyQualifiedName = 'Accessibility.v1.AccessibilityComponentActionEvent';
    e.AccessibilityComponentActionEventEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "879aff", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;

    function t() {
        const n = r(d[1]);
        return t = function() {
            return n
        }, n
    }

    function u() {
        const t = n(r(d[2]));
        return u = function() {
            return t
        }, t
    }

    function c() {
        const t = n(r(d[3]));
        return c = function() {
            return t
        }, t
    }

    function o() {
        const t = n(r(d[4]));
        return o = function() {
            return t
        }, t
    }

    function f() {
        const t = n(r(d[5]));
        return f = function() {
            return t
        }, t
    }

    function l() {
        const t = n(r(d[6]));
        return l = function() {
            return t
        }, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    e.default = (0, t().createInitializerInjector)({
        installers: [c().default, o().default, u().default, f().default, l().default]
    })
}), "8ba67b", ["ba7a76", "8cc8d1", "8e4612", "30be46", "d83177", "e7685f", "b5fc20"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        window.navigator.userAgent.includes('Airbnb') && document.body.classList.add('hide-nav')
    }
}), "8c48ce", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = 0;
    m.exports = function(_) {
        return "__private_" + t++ + "_" + _
    }, m.exports.__esModule = !0, m.exports.default = m.exports
}), "99527b", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        consume: n
    }) {
        n([], (() => {
            process.env.HYPERLOOP_V2 = 'true'
        }), {
            consumerId: 'installProcessEnv'
        })
    }
}), "9b304e", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function n() {
        const t = r(d[1]);
        return n = function() {
            return t
        }, t
    }

    function c() {
        const t = r(d[2]);
        return c = function() {
            return t
        }, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const t = document.getElementsByClassName('skip-to-content');
        if (t.length > 0) {
            const c = t.item(0);
            c.addEventListener('focus', (() => {
                s.default.queueJitneyEvent({
                    schema: n().AccessibilityComponentActionEvent,
                    event_data: {
                        component: 'SkipToContent',
                        operation: 5
                    }
                })
            })), c.addEventListener('click', (() => {
                s.default.queueJitneyEvent({
                    schema: n().AccessibilityComponentActionEvent,
                    event_data: {
                        component: 'SkipToContent',
                        operation: 2
                    }
                })
            }))
        }
    }, e.initializeAccessibilitySettingLogging = function() {
        {
            if (!document.getElementsByTagName('body').item(0)) return;
            const t = new o.default;
            let n;
            t.state && (n = Math.round(100 * t.state.ratio));
            let u = 'no-preference';
            window.matchMedia('(prefers-contrast: more)').matches ? u = 'more' : window.matchMedia('(prefers-contrast: less)').matches ? u = 'less' : window.matchMedia('(prefers-contrast: custom)').matches && (u = 'custom');
            const l = window.matchMedia('(inverted-colors: inverted)').matches,
                f = window.matchMedia('(prefers-reduced-motion: reduce)').matches,
                h = window.matchMedia('(prefers-reduced-transparency: reduce)').matches,
                p = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
                w = window.matchMedia('(any-pointer: fine)').matches,
                _ = window.matchMedia('(forced-colors: active)').matches;
            s.default.queueJitneyEvent({
                schema: c().A11yAccessibilitySettingsEvent,
                event_data: {
                    rendered_font_scale: n,
                    preferred_contrast: u,
                    invert_colors_enabled: l,
                    reduce_motion_enabled: f,
                    reduce_transparency_enabled: h,
                    color_theme: p,
                    mouse_attached: w,
                    forced_colors: _
                }
            })
        }
    };
    var o = t(r(d[3])),
        s = t(r(d[4]))
}), "a94495", ["ba7a76", "879aff", "fec748", "c9834d", "c8b97a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;

    function t() {
        const n = r(d[1]);
        return t = function() {
            return n
        }, n
    }

    function o() {
        const n = r(d[2]);
        return o = function() {
            return n
        }, n
    }

    function u() {
        const t = n(r(d[3]));
        return u = function() {
            return t
        }, t
    }

    function c() {
        const n = r(d[4]);
        return c = function() {
            return n
        }, n
    }

    function s() {
        const t = n(r(d[5]));
        return s = function() {
            return t
        }, t
    }

    function l() {
        const n = r(d[6]);
        return l = function() {
            return n
        }, n
    }

    function f() {
        const n = r(d[7]);
        return f = function() {
            return n
        }, n
    }

    function y() {
        const t = n(r(d[8]));
        return y = function() {
            return t
        }, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        consume: n
    }) {
        n([f().FlaggerToken, l().CriticalTrackingToken], (n => {
            n.findTreatment((0, y().default)('early_hints_edgeworker_v3'))
        }), {
            consumerId: 'logEarlyHintsExperiment'
        }), n([o().LegacyBootstrapDataInstanceToken], (n => {
            window.MUSCACHE_CDN_PROVIDER = 'Unknown', (0, u().default)(), t().delays.listenForDelays(), t().delays.enableEvents(['initializers-complete', 'all-settled', 'hydrate-complete']), (0, s().default)({
                skipServiceWorkers: !0,
                bootstrapData: n
            }), (0, c().maybeOpenSSOLoginModal)()
        }), {
            consumerId: 'detangledCoreInitializers'
        })
    }
}), "b5fc20", ["ba7a76", "2b83dc", "53ae4d", "08664d", "5ab516", "307c3b", "a2ef10", "ab7b9c", "4d3544"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l, n = t(r(d[1])),
        u = t(r(d[2])),
        f = r(d[3]),
        o = (0, u.default)("customElementName"),
        s = (0, u.default)("iframe"),
        c = (0, u.default)("styleElement"),
        h = (0, u.default)("customElement"),
        p = (0, u.default)("shadowRoot"),
        b = (0, u.default)("initialize"),
        v = (0, u.default)("getRelationships"),
        y = (0, u.default)("state"),
        w = (0, u.default)("resizeObserver"),
        O = (0, u.default)("onChangeHandler"),
        x = (0, u.default)("setState");
    class j {
        static isAttached() {
            return (0, n.default)(this, v)[v]().every((({
                child: t,
                parent: l
            }) => l() ? .contains(t() ? ? null)))
        }
        static attach() {
            (0, n.default)(this, v)[v]().forEach((({
                child: t,
                parent: l
            }) => {
                const n = t();
                n && l() ? .appendChild(n)
            }))
        }
        constructor(t) {
            Object.defineProperty(this, x, {
                value: P
            }), Object.defineProperty(this, y, {
                writable: !0,
                value: null
            }), Object.defineProperty(this, w, {
                writable: !0,
                value: null
            }), Object.defineProperty(this, O, {
                writable: !0,
                value: null
            }), (0, n.default)(j, b)[b](), j.isAttached() || j.attach();
            const l = t => {
                (0, n.default)(this, x)[x](t) && (0, n.default)(this, O)[O] ? .((0, n.default)(this, y)[y])
            };
            l(j.pixel.offsetWidth), t && ((0, n.default)(this, O)[O] = t), (0, n.default)(this, w)[w] = new ResizeObserver((t => {
                if ((0, f.isFirefox)() && !j.isAttached()) j.attach(), l(j.pixel.offsetWidth);
                else
                    for (const n of t) l(n.borderBoxSize ? n.borderBoxSize[0].inlineSize : n.target.offsetWidth)
            })), (0, n.default)(this, w)[w].observe(j.pixel)
        }
        disconnect() {
            (0, n.default)(this, O)[O] = null, (0, n.default)(this, w)[w] ? .disconnect(), (0, n.default)(this, w)[w] = null
        }
        get state() {
            return (0, n.default)(this, y)[y]
        }
    }

    function P(t) {
        return !(t <= 0) && ((0, n.default)(this, y)[y] = {
            browserFontSize: t,
            ratio: t / 16
        }, !0)
    }
    l = j, Object.defineProperty(j, v, {
        value: function() {
            return [{
                parent: () => document.documentElement,
                child: () => (0, n.default)(l, h)[h]
            }, {
                parent: () => (0, n.default)(l, p)[p],
                child: () => (0, n.default)(l, s)[s]
            }, {
                parent: () => (0, n.default)(l, s)[s] ? .contentWindow ? .document.head,
                child: () => (0, n.default)(l, c)[c]
            }, {
                parent: () => (0, n.default)(l, s)[s] ? .contentWindow ? .document.body,
                child: () => l.pixel
            }]
        }
    }), Object.defineProperty(j, b, {
        value: function() {
            if ((0, n.default)(l, h)[h] || ((0, n.default)(l, h)[h] = document.createElement((0, n.default)(l, o)[o]), Object.assign((0, n.default)(l, h)[h].style, {
                    position: 'fixed',
                    left: '0',
                    top: '0',
                    width: '0px',
                    height: '0px',
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    clip: 'rect(0 0 0 0)',
                    clipPath: 'inset(50%)'
                })), (0, n.default)(l, p)[p] || ((0, n.default)(l, p)[p] = (0, n.default)(l, h)[h].attachShadow({
                    mode: 'closed'
                })), (0, n.default)(l, s)[s] || ((0, n.default)(l, s)[s] = document.createElement('iframe'), (0, n.default)(l, s)[s].src = 'about:blank'), !(0, n.default)(l, c)[c]) {
                const t = "\n        @supports (font: -apple-system-body) and (-webkit-touch-callout: default) {\n          html {\n            font: -apple-system-body;\n          }\n        }\n        div {\n          width: 1rem;\n          height: 1rem;\n        }\n      ";
                (0, n.default)(l, c)[c] = document.createElement('style'), (0, n.default)(l, c)[c].textContent = t
            }
            l.pixel || (l.pixel = document.createElement('div'))
        }
    }), Object.defineProperty(j, o, {
        writable: !0,
        value: 'browser-font-size'
    }), j.pixel = null, Object.defineProperty(j, s, {
        writable: !0,
        value: null
    }), Object.defineProperty(j, c, {
        writable: !0,
        value: null
    }), Object.defineProperty(j, h, {
        writable: !0,
        value: null
    }), Object.defineProperty(j, p, {
        writable: !0,
        value: null
    });
    e.default = j
}), "c9834d", ["ba7a76", "76718e", "99527b", "e9b7bf"]);
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
        (0, n().default)(t)
    }
}), "e7685f", ["ba7a76", "9b304e"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t = l) {
        const n = o => {
            u(o) && (window.sessionStorage.setItem(s, 'true'), t(), window.removeEventListener('storage', n))
        };
        window.addEventListener('storage', n), null !== window.localStorage ? .getItem(o) && t()
    };
    var n = t(r(d[1]));
    const o = 'sup.load-cobrowse',
        s = 'sup.cobrowse-lazy';

    function u(t) {
        const {
            key: n,
            newValue: s
        } = t;
        return n === o && null !== s
    }

    function l() {
        r(d[3])(d[2]).then(n.default).then((t => t.default || t)).then((t => {
            t()
        }))
    }
}), "eab56e", ["ba7a76", "45f788", "7baee5", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        if (!window.location ? .hostname) return '';
        const {
            hostname: n
        } = window.location, t = n.split('.'), o = t.length, l = ['airbnb', 'airbnbchina', 'luxuryretreats', 'airbnb-dev'];
        for (let n = 0; n < l.length; n += 1) {
            const u = t.indexOf(l[n]);
            if (u >= 0) return `.${t.slice(u,o).join('.')}`
        }
        return n
    }
}), "f5172f", []);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.A11yAccessibilitySettingsEvent = {
        defaultProps: {
            schema: 'com.airbnb.jitney.event.logging.A11y:A11yAccessibilitySettingsEvent:1.0.0',
            event_name: 'a11y_accessibility_settings'
        },
        propTypes: {}
    };
    t.fullyQualifiedName = 'A11y.v1.A11yAccessibilitySettingsEvent';
    e.A11yAccessibilitySettingsEventEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "fec748", []);
__r("8ba67b");
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/core-guest-loop/apps/core-guest-spa/initializer.ce22ea669d.js.map