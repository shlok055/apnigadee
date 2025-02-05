__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isFullPageRoute = void 0;
    var t = r(d[0]);
    e.isFullPageRoute = u => u === t.Pathnames.LOGIN || u === t.Pathnames.SIGNUP
}), "055200", ["b616d2"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.RecaptchaTokenError = void 0;
    class o extends Error {}
    e.RecaptchaTokenError = o
}), "096502", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.hasPermission = p, e.requestPermission = async function() {
        if (!(0, o.supportsPushNotifications)()) return !1;
        if ('denied' === Notification.permission) return !1;
        if ('granted' === Notification.permission) return !0;
        f((() => 'Attempting to request permissions'));
        const n = await Notification.requestPermission(),
            {
                datadogTags: u
            } = await (0, s.getInitializeOptions)();
        switch (f((() => `Resulting permission: ${n}`)), n) {
            case 'granted':
                (0, t.airdogCount)('service_worker.push_notifications.permission_granted', 1, u);
                break;
            case 'denied':
                (0, t.airdogCount)('service_worker.push_notifications.permission_denied', 1, u);
                break;
            case 'default':
                (0, t.airdogCount)('service_worker.push_notifications.permission_default', 1, u)
        }
        return 'granted' === n
    }, e.shouldShowPushNotificationsOptIn = async function() {
        if (await c()) return !1;
        if ('undefined' == typeof Notification) return f((() => 'Not showing push notifications since they\u2019re not supported')), !1;
        if ('denied' === Notification.permission) return f((() => 'Not showing push notifications due to not having permission')), !1;
        return !0
    };
    var t = r(d[0]),
        n = r(d[1]),
        o = r(d[2]),
        s = r(d[3]),
        u = r(d[4]);
    const f = (0, n.createLogger)('Push:Permissions', (0, n.createPrefixStyle)('#b95f6f', '#fff'));
    async function c() {
        return !!p() && (0, u.hasValidDeviceId)()
    }

    function p() {
        return 'undefined' != typeof Notification && 'granted' === Notification.permission
    }
}), "0a0e02", ["3e4681", "102445", "f09318", "436356", "e62feb"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]),
        c = /^\s+/;
    m.exports = function(n) {
        return n ? n.slice(0, t(n) + 1).replace(c, '') : n
    }
}), "0f3742", ["75dda8"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.makeDatadogTags = function(o) {
        let s = 'unknown';
        (0, n.isAndroid)() ? s = 'android': (0, n.isIos)() && (s = 'ios');
        const t = `os:${s}`,
            u = `browser:${(0,n.getUserAgentName)()}`;
        return [t, u, o].join(',')
    };
    var n = r(d[0])
}), "159ba6", ["e9b7bf"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isLegacyAirlock = e.getAirlockId = e.extractAirlockData = e.RISK_HTTP_STATUS_CODE = void 0;
    e.RISK_HTTP_STATUS_CODE = 420;
    const o = o => 'responseJSON' in o,
        c = o => 'client_error_info' in o;
    e.extractAirlockData = t => {
        let n, l;
        return n = t && o(t) ? t.responseJSON : t, l = n && c(n) ? n.client_error_info : n, l ? .airlock || l ? .airlockV2 || null
    };
    const t = o => !('__typename' in o);
    e.isLegacyAirlock = t;
    e.getAirlockId = o => t(o) ? o.airlockId : o.internalAirlockId
}), "1700a4", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t = {}) {
        (0, f.logModalSession)(t), (0, u.default)() ? l.default.emit(o.OPEN_REACTIFIED_LOGIN_MODAL, t): l.default.emit('login-modal:open', t)
    };
    var l = t(r(d[1])),
        o = r(d[2]),
        u = t(r(d[3])),
        f = r(d[4])
}), "1a5385", ["ba7a76", "abc3e4", "1dff2e", "b60706", "9f7af8"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.redirectToLogin = void 0;
    var o = r(d[0]),
        t = r(d[1]);
    e.redirectToLogin = () => {
        (0, o.replaceToHistory)(t.Pathnames.LOGIN, {
            maintainQueryParams: !0
        })
    }
}), "1e5ad8", ["4ee5a9", "b616d2"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getNotSetEndpointActionName = e.actionNames = void 0;
    e.actionNames = {
        AOV_CONTACT_US: 'aov_contact_us/signup_login/web',
        AOV_CONTACT_US_V2: 'aov_contact_us_v2/signup_login/web'
    };
    e.getNotSetEndpointActionName = t => `${t}/not_set/web`
}), "336c95", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = async function(t) {
        const {
            tracking_context: c = {}
        } = n.default.get('layout-init'), {
            appType: s
        } = await (0, p.getInitializeOptions)(), f = o.default.current().idStr, v = await (0, u.default)(f);
        if (!f) throw new Error('Cannot make a token without a valid userId.');
        return {
            appType: s,
            appVersion: `${c.controller}:${c.version}`,
            buildType: 'RELEASE',
            deviceType: (0, l.default)(),
            deviceVersion: navigator.userAgent,
            nativeDeviceId: v,
            timeStamp: String((new Date).getTime()),
            token: JSON.stringify(t),
            tokenType: 'VAPID',
            userId: -2
        }
    };
    var n = t(r(d[1])),
        o = t(r(d[2])),
        u = t(r(d[3])),
        l = t(r(d[4])),
        p = r(d[5])
}), "35b332", ["ba7a76", "ef2bc3", "06a99e", "e62feb", "d93056", "436356"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]),
        f = r(d[1]),
        n = r(d[2]),
        u = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        o = /^0o[0-7]+$/i,
        c = parseInt;
    m.exports = function(p) {
        if ('number' == typeof p) return p;
        if (n(p)) return NaN;
        if (f(p)) {
            var v = 'function' == typeof p.valueOf ? p.valueOf() : p;
            p = f(v) ? v + '' : v
        }
        if ('string' != typeof p) return 0 === p ? p : +p;
        p = t(p);
        var N = s.test(p);
        return N || o.test(p) ? c(p.slice(2), N ? 2 : 8) : u.test(p) ? NaN : +p
    }
}), "3a7fa6", ["0f3742", "5e8a91", "c205df"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.hasValidPushSubscription = async function() {
        const {
            serviceWorkerRegistration: s
        } = await (0, n.getInitializeOptions)();
        if (!await (0, t.hasValidDeviceId)()) return !1;
        return !!await s.pushManager.getSubscription()
    };
    var t = r(d[0]),
        n = r(d[1])
}), "3d5c9c", ["e62feb", "436356"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        return (0, t.getCookieSync)('_csrf_token').value || ''
    };
    var t = r(d[0])
}), "40eeb7", ["13babd"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        datadogTags: t,
        niobeClient: o
    }) {
        'undefined' != typeof Notification && 'denied' === Notification.permission && (0, n.airdogCount)('service_worker.push_permission_denied', 1, t);
        if (v = t, h = o, _(), !(0, l.hasPermission)()) return;
        try {
            if (!s.default.isLoggedIn()) return void(0, f.clearSubscription)();
            (0, f.updateSubscriptionIfOptedIn)()
        } catch (t) {
            (0, c.reportError)(t)
        }
    }, e.getInitializeOptions = async function() {
        if ('undefined' == typeof navigator || !navigator || !navigator.serviceWorker) throw new Error('Push notifications requires a service worker to be available.');
        const t = await navigator.serviceWorker.ready;
        if (!t || !t.active) throw new Error('No service worker was activated, push notifications are not available.');
        await Promise.race([w, u.scheduler.wait({
            delay: 3e4
        })]);
        const {
            tracking_context: s
        } = o.default.get('layout-init'), {
            controller: c
        } = s, l = 'homes-host-loop' === c ? 'GLOBAL_HOST' : 'GLOBAL_TRAVEL', f = t.active.scriptURL.split('/'), _ = `/${f[f.length-1]}`, y = (0, p.makeDatadogTags)(`registered_path:${_}`), k = v ? [v, y].join(',') : y;
        h || (0, n.airdogCount)('service_worker.push_initialize_timeout', 1, k);
        return {
            datadogTags: k,
            appType: l,
            niobeClient: h,
            pushNotificationsKey: o.default.get('pushNotificationsKey'),
            serviceWorkerRegistration: t
        }
    };
    var o = t(r(d[1])),
        n = r(d[2]),
        s = t(r(d[3])),
        c = r(d[4]),
        u = r(d[5]),
        l = r(d[6]),
        f = r(d[7]),
        p = r(d[8]);
    let v, h, _;
    const w = new Promise((t => {
        _ = t
    }))
}), "436356", ["ba7a76", "ef2bc3", "3e4681", "06a99e", "f2f40f", "a2c93f", "0a0e02", "627c69", "159ba6"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.handleSignupLinkClick = e.handleLoginLinkClick = void 0, e.openSignupModal = f, e.openSignupOrLoginModal = function(n = {}) {
        (0, l.airdogCount)('signup_login.open_signup_or_login_modal', 1, ['status:attempt', `auth_trigger_type:${n.authTriggerType}`]), (0, t.getCookieSync)('hli').value ? (0, u.default)(n) : f(n)
    };
    var o = n(r(d[1])),
        t = r(d[2]),
        l = r(d[3]),
        u = n(r(d[4])),
        p = r(d[5]),
        c = r(d[6]),
        _ = n(r(d[7]));

    function f(n = {}) {
        return (0, u.default)(n)
    }
    e.handleLoginLinkClick = (0, o.default)(((n = {}, o = {}) => (n.preventDefault && n.preventDefault(), (0, l.airdogCount)('signup_login.click_login_modal', 1), (0, c.isFullPageRoute)(window.location.pathname) || (0, _.default)(window.location.pathname) ? (0, p.redirectToLogin)() : (0, u.default)(o))), 1e3, {
        leading: !0
    }), e.handleSignupLinkClick = (0, o.default)(((n = {}, o = {}) => (n.preventDefault && n.preventDefault(), (0, l.airdogCount)('signup_login.click_signup_modal', 1), (0, c.isFullPageRoute)(window.location.pathname) || (0, _.default)(window.location.pathname) ? (0, p.redirectToLogin)() : f(o))), 1e3, {
        leading: !0
    })
}), "4798c3", ["ba7a76", "e521c4", "13babd", "3e4681", "1a5385", "1e5ad8", "055200", "570978"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Workbox = void 0, e.messageSW = n;
    try {
        self["workbox:window:6.1.1"] && _()
    } catch (n) {}

    function n(n, t) {
        return new Promise((function(o) {
            var s = new MessageChannel;
            s.port1.onmessage = function(n) {
                o(n.data)
            }, n.postMessage(t, [s.port2])
        }))
    }

    function t(n, t) {
        for (var o = 0; o < t.length; o++) {
            var s = t[o];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(n, s.key, s)
        }
    }

    function o(n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var o = 0, s = new Array(t); o < t; o++) s[o] = n[o];
        return s
    }

    function s(n, t) {
        var s;
        if ("undefined" == typeof Symbol || null == n[Symbol.iterator]) {
            if (Array.isArray(n) || (s = (function(n, t) {
                    if (n) {
                        if ("string" == typeof n) return o(n, t);
                        var s = Object.prototype.toString.call(n).slice(8, -1);
                        return "Object" === s && n.constructor && (s = n.constructor.name), "Map" === s || "Set" === s ? Array.from(n) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? o(n, t) : void 0
                    }
                })(n)) || t && n && "number" == typeof n.length) {
                s && (n = s);
                var c = 0;
                return function() {
                    return c >= n.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: n[c++]
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        return (s = n[Symbol.iterator]()).next.bind(s)
    }
    try {
        self["workbox:core:6.1.1"] && _()
    } catch (n) {}
    var c = function() {
        var n = this;
        this.promise = new Promise((function(t, o) {
            n.resolve = t, n.reject = o
        }))
    };

    function u(n, t) {
        var o = location.href;
        return new URL(n, o).href === new URL(t, o).href
    }
    var f = function(n, t) {
        this.type = n, Object.assign(this, t)
    };

    function v(n, t, o) {
        return o ? t ? t(n) : n : (n && n.then || (n = Promise.resolve(n)), t ? n.then(t) : n)
    }

    function h() {}
    var l = {
        type: "SKIP_WAITING"
    };

    function p(n, t) {
        if (!t) return n && n.then ? n.then(h) : Promise.resolve()
    }
    e.Workbox = (function(o) {
        var s, h;

        function y(n, t) {
            var s, h;
            return void 0 === t && (t = {}), (s = o.call(this) || this).nn = {}, s.tn = 0, s.rn = new c, s.en = new c, s.on = new c, s.un = 0, s.an = new Set, s.cn = function() {
                var n = s.fn,
                    t = n.installing;
                s.tn > 0 || !u(t.scriptURL, s.sn) || performance.now() > s.un + 6e4 ? (s.vn = t, n.removeEventListener("updatefound", s.cn)) : (s.hn = t, s.an.add(t), s.rn.resolve(t)), ++s.tn, t.addEventListener("statechange", s.ln)
            }, s.ln = function(n) {
                var t = s.fn,
                    o = n.target,
                    c = o.state,
                    u = o === s.vn,
                    v = {
                        sw: o,
                        isExternal: u,
                        originalEvent: n
                    };
                !u && s.mn && (v.isUpdate = !0), s.dispatchEvent(new f(c, v)), "installed" === c ? s.wn = self.setTimeout((function() {
                    "installed" === c && t.waiting === o && s.dispatchEvent(new f("waiting", v))
                }), 200) : "activating" === c && (clearTimeout(s.wn), u || s.en.resolve(o))
            }, s.dn = function(n) {
                var t = s.hn;
                t === navigator.serviceWorker.controller && (s.dispatchEvent(new f("controlling", {
                    sw: t,
                    originalEvent: n,
                    isUpdate: s.mn
                })), s.on.resolve(t))
            }, s.gn = (h = function(n) {
                var t = n.data,
                    o = n.source;
                return v(s.getSW(), (function() {
                    s.an.has(o) && s.dispatchEvent(new f("message", {
                        data: t,
                        sw: o,
                        originalEvent: n
                    }))
                }))
            }, function() {
                for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                try {
                    return Promise.resolve(h.apply(this, n))
                } catch (n) {
                    return Promise.reject(n)
                }
            }), s.sn = n, s.nn = t, navigator.serviceWorker.addEventListener("message", s.gn), s
        }
        h = o, (s = y).prototype = Object.create(h.prototype), s.prototype.constructor = s, s.__proto__ = h;
        var w, b, E = y.prototype;
        return E.register = function(n) {
            var t = (void 0 === n ? {} : n).immediate,
                o = void 0 !== t && t;
            try {
                var s = this;
                return (function(n, t) {
                    var s = (function() {
                        if (!o && "complete" !== document.readyState) return p(new Promise((function(n) {
                            return window.addEventListener("load", n)
                        })))
                    })();
                    return s && s.then ? s.then(t) : t()
                })(0, (function() {
                    return s.mn = Boolean(navigator.serviceWorker.controller), s.yn = s.pn(), v(s.bn(), (function(n) {
                        s.fn = n, s.yn && (s.hn = s.yn, s.en.resolve(s.yn), s.on.resolve(s.yn), s.yn.addEventListener("statechange", s.ln, {
                            once: !0
                        }));
                        var t = s.fn.waiting;
                        return t && u(t.scriptURL, s.sn) && (s.hn = t, Promise.resolve().then((function() {
                            s.dispatchEvent(new f("waiting", {
                                sw: t,
                                wasWaitingBeforeRegister: !0
                            }))
                        })).then((function() {}))), s.hn && (s.rn.resolve(s.hn), s.an.add(s.hn)), s.fn.addEventListener("updatefound", s.cn), navigator.serviceWorker.addEventListener("controllerchange", s.dn, {
                            once: !0
                        }), s.fn
                    }))
                }))
            } catch (n) {
                return Promise.reject(n)
            }
        }, E.update = function() {
            try {
                return this.fn ? p(this.fn.update()) : void 0
            } catch (n) {
                return Promise.reject(n)
            }
        }, E.getSW = function() {
            return void 0 !== this.hn ? Promise.resolve(this.hn) : this.rn.promise
        }, E.messageSW = function(t) {
            try {
                return v(this.getSW(), (function(o) {
                    return n(o, t)
                }))
            } catch (n) {
                return Promise.reject(n)
            }
        }, E.messageSkipWaiting = function() {
            this.fn && this.fn.waiting && n(this.fn.waiting, l)
        }, E.pn = function() {
            var n = navigator.serviceWorker.controller;
            return n && u(n.scriptURL, this.sn) ? n : void 0
        }, E.bn = function() {
            try {
                var n = this;
                return (function(n, t) {
                    try {
                        var o = n()
                    } catch (n) {
                        return t(n)
                    }
                    return o && o.then ? o.then(void 0, t) : o
                })((function() {
                    return v(navigator.serviceWorker.register(n.sn, n.nn), (function(t) {
                        return n.un = performance.now(), t
                    }))
                }), (function(n) {
                    throw n
                }))
            } catch (n) {
                return Promise.reject(n)
            }
        }, w = y, (b = [{
            key: "active",
            get: function() {
                return this.en.promise
            }
        }, {
            key: "controlling",
            get: function() {
                return this.on.promise
            }
        }]) && t(w.prototype, b), y
    })((function() {
        function n() {
            this.Pn = new Map
        }
        var t = n.prototype;
        return t.addEventListener = function(n, t) {
            this.Sn(n).add(t)
        }, t.removeEventListener = function(n, t) {
            this.Sn(n).delete(t)
        }, t.dispatchEvent = function(n) {
            n.target = this;
            for (var t, o = s(this.Sn(n.type)); !(t = o()).done;)(0, t.value)(n)
        }, t.Sn = function(n) {
            return this.Pn.has(n) || this.Pn.set(n, new Set), this.Pn.get(n)
        }, n
    })())
}), "47df49", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = s, e.replaceToHistory = function(t, n = {}) {
        s((0, o.getHistory)(), t, n)
    };
    var n = t(r(d[1])),
        o = r(d[2]);

    function s(t, o, {
        maintainScrollPosition: s = !1,
        maintainQueryParams: l = !1,
        maintainHash: u = !1,
        params: c,
        state: f
    } = {}) {
        const p = (0, n.default)(o, {
            maintainQueryParams: l,
            maintainHash: u,
            params: c
        });
        t.replace(p, f), g.window && !s && g.window.scrollTo(0, 0)
    }
}), "4ee5a9", ["ba7a76", "be6a20", "7934b6"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = r(d[0]);
    e.default = u => u === t.Pathnames.SET_PASSWORD_UI
}), "570978", ["b616d2"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.AuthTriggerTypes = void 0;
    e.AuthTriggerTypes = (function(_) {
        return _.CLAIM_GIFT_CARD = "claim_gift_card", _.CONTACT_HOST = "contact_host", _.BOOK_IT = "book_it", _.BECOME_A_HOST = "become_a_host", _.CLAIM_COUPON = "claim_coupon", _.WISHLIST = "wishlist", _.RESERVATION_ITINERARY = "reservation_itinerary", _.REFERRAL = "referral", _.PROHOST_LANDING = "prohost_landing", _.REPORT_LISTING = "report_listing", _.LUXURY_OWNER_ONBOARDING = "luxury_owner_onboarding", _.LUXURY_RETREATS_CHECKOUT = "luxury_retreats_checkout", _.HOST_REFERRAL = "host_referral", _.REPORT_USER_PROFILE = "report_user_profile", _.SIGNUP_LOGIN_PAGE = "signup_login_page", _.PRO_SIGN_UP = "pro_signup_page", _.PROPERTY_MANAGER_LISTING_INVITE = "property_manager_listing_invite", _.RECAPTCHA = "recaptcha", _.EVENT_SPACES_LANDING = "event_spaces_landing", _.A4W_COVID_LANDING = "a4w_covid_landing", _.HOST_REFERRAL_LANDING = "host_referral_landing", _.CITY_PORTAL_LANDING = "city_portal_landing", _.REPORT_REVIEW = "report_review", _.BETA_PROGRAM_ENROLLMENT = "beta_program_enrollment", _
    })({})
}), "5eb3f8", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = {
        log: !0,
        markMilestone: !0
    };
    e.markMilestone = e.log = void 0;
    var o = r(d[0]),
        n = r(d[1]),
        c = r(d[2]);
    Object.keys(c).forEach((function(o) {
        "default" !== o && "__esModule" !== o && (Object.prototype.hasOwnProperty.call(t, o) || o in e && e[o] === c[o] || Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return c[o]
            }
        }))
    }));
    var l = r(d[3]);
    Object.keys(l).forEach((function(o) {
        "default" !== o && "__esModule" !== o && (Object.prototype.hasOwnProperty.call(t, o) || o in e && e[o] === l[o] || Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return l[o]
            }
        }))
    }));
    var u = r(d[4]);
    Object.keys(u).forEach((function(o) {
        "default" !== o && "__esModule" !== o && (Object.prototype.hasOwnProperty.call(t, o) || o in e && e[o] === u[o] || Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return u[o]
            }
        }))
    }));
    var f = r(d[5]);
    Object.keys(f).forEach((function(o) {
        "default" !== o && "__esModule" !== o && (Object.prototype.hasOwnProperty.call(t, o) || o in e && e[o] === f[o] || Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return f[o]
            }
        }))
    }));
    const s = 'Service Worker:Push Initializer';
    e.log = (0, o.createLogger)(s, (0, o.createPrefixStyle)('rebeccapurple', '#fff')), e.markMilestone = (0, n.createMarkMilestone)(s, 'web_push')
}), "627c69", ["102445", "fae72a", "9179c5", "3d5c9c", "e6eac9", "907b9b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return new Promise(((n, c) => {
            const o = document.createElement('script');
            o.type = 'text/javascript', o.async = !0, o.onload = n, o.onerror = c, o.src = t;
            (document.head || document.getElementsByTagName('head')[0]).appendChild(o)
        }))
    }
}), "6b26d0", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isFullpage = e.getRedirectURL = e.getFullpageURL = void 0;
    var t = r(d[0]),
        l = r(d[1]);
    const o = l => {
        if ((0, t.isLegacyAirlock)(l)) {
            const t = ['fullpage', 'forced_fullpage'],
                o = l.friction_data ? .[0] ? .style;
            return !!o && t.includes(o)
        }
        return 'FULLPAGE' === l.airlockConfiguration.webStyle
    };
    e.isFullpage = o;
    const c = (t, l = {}) => {
        const o = new URLSearchParams;
        let c = !1;
        return Object.keys(l).sort().forEach((t => {
            void 0 !== l[t] && (o.set(t, String(l[t])), c = !0)
        })), `${t}${c?'?':''}${o}`
    };
    e.getFullpageURL = (n, u = {}) => {
        let s;
        return 'string' == typeof n || 'number' == typeof n ? s = String(n) : null != n && (s = (0, t.getAirlockId)(n), o(n) ? s || (0, l.reportError)(new Error('getAirlockFullpage() called with Airlock with no ID')) : (0, l.reportError)(new Error(`fullpage /airlock URL being generated for non-fullpage Airlock with ID: ${(0,t.getAirlockId)(n)}`))), c('/airlock', {
            al_id: s ? ? void 0,
            ...u
        })
    };
    e.getRedirectURL = t => c('/airlock/redirect', t)
}), "6cfeca", ["1700a4", "f2f40f"]);
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
    }), e.addUpdateCurrencyCallback = function(n) {
        l = n
    }, e.default = function(n, s) {
        (0, u.changeCurrency)(n).then((() => {
            if ((0, c.setCookieSync)('currency', n, {
                    path: '/'
                }), o.default.setCurrent({ ...o.default.current(),
                    curr: n
                }), l(), s) {
                const [c, o] = s.split('#'), [u, l] = c.split('?'), f = (0, t().stringify)({ ...(0, t().parse)(l),
                    display_currency: n
                }, {
                    arrayFormat: 'brackets'
                });
                return void window.location.assign(`${u}?${f}${o?`#${o}`:''}`)
            }
            const {
                pathname: f
            } = window.location;
            window.location.replace(`${f}${(0,u.replaceCurrencyParam)(n)}`)
        }))
    };
    var c = r(d[2]),
        o = n(r(d[3])),
        u = r(d[4]);
    let l = () => {}
}), "737fda", ["ba7a76", "e950a3", "13babd", "06a99e", "d46747"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = /\s/;
    m.exports = function(n) {
        for (var s = n.length; s-- && t.test(n.charAt(s)););
        return s
    }
}), "75dda8", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SignupSocialFields = e.SignupFields = void 0;
    e.SignupFields = (function(o) {
        return o.password = "password", o.passwordConfirm = "passwordConfirm", o.email = "email", o.firstName = "firstName", o.firstNamePreferred = "firstNamePreferred", o.lastName = "lastName", o.birthdateDay = "birthdateDay", o.birthdateYear = "birthdateYear", o.birthdateMonth = "birthdateMonth", o.phoneNumber = "phoneNumber", o.countryCode = "countryCode", o.collectionOfPersonalInformation = "collectionOfPersonalInformation", o.overseasTransferOfPersonalData = "overseasTransferOfPersonalData", o.receivePromotionalEmail = "receivePromotionalEmail", o.receivePromotionalSMS = "receivePromotionalSMS", o.tosCheckBox = "tosCheckBox", o.verificationCode = "verificationCode", o.geetestChallenge = "geetestChallenge", o.geetestValidate = "geetestValidate", o.geetestSeccode = "geetestSeccode", o.phoneSignupFlow = "phoneSignupFlow", o.redirectUrl = "redirectUrl", o
    })({}), e.SignupSocialFields = (function(o) {
        return o.oauth2Service = "oauth2Service", o.providerUid = "providerUid", o.authCodeCacheKey = "authCodeCacheKey", o.nationalNumber = "nationalNumber", o.authType = "authType", o
    })({})
}), "76b333", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var f = t(r(d[1]));
    const u = {
        document: void 0,
        getDocument: () => r(d[3])(d[2]).then(f.default).then((t => t.default)),
        name: 'UpdateUserCurrency',
        type: 'mutation',
        operationId: 'b81c638d89d602e5df10cecfc8778f345fa605550c93140a6dbb067f24632f20'
    };
    e.default = u
}), "81c2e1", ["ba7a76", "45f788", "690c90", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.RecaptchaClientGeneratedTokenEvent = {
        defaultProps: {
            schema: 'com.airbnb.jitney.event.logging.Recaptcha:RecaptchaClientGeneratedTokenEvent:3.0.0',
            event_name: 'recaptcha_client_generated_token'
        },
        propTypes: {}
    };
    t.fullyQualifiedName = 'Recaptcha.v3.RecaptchaClientGeneratedTokenEvent';
    e.RecaptchaClientGeneratedTokenEventEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "8e5ca0", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.optIntoPushNotifications = async function() {
        const u = await (0, s.getInitializeOptions)();
        if (!await (0, n.requestPermission)()) return (0, p.markMilestone)({
            options: u,
            metric: 'permission_denied'
        }), !1;
        (0, p.markMilestone)({
            options: u,
            metric: 'permission_granted'
        });
        if (await (0, t.hasValidDeviceId)()) return (0, p.markMilestone)({
            description: "Using validated cached device id.",
            options: u,
            metric: 'device_id_cached'
        }), await (0, o.verifyOrCreateSubscription)(), !0;
        (0, p.markMilestone)({
            description: "Creating a new device id and push subscription.",
            options: u,
            metric: 'no_device_id_cached'
        });
        try {
            await (0, c.clearSubscription)()
        } finally {
            await (0, o.verifyOrCreateSubscription)()
        }
        return !0
    };
    var t = r(d[0]),
        n = r(d[1]),
        s = r(d[2]),
        o = r(d[3]),
        c = r(d[4]),
        p = r(d[5])
}), "907b9b", ["e62feb", "0a0e02", "436356", "ea19bb", "e6eac9", "627c69"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.updateSubscriptionIfOptedIn = async function() {
        if (!await (0, t.hasValidDeviceId)()) return (0, s.log)((() => 'user has not opted in, attempt to find and clear invalid push subscription')), (0, u.clearSubscription)();
        return (0, n.verifyOrCreateSubscription)()
    };
    var t = r(d[0]),
        n = r(d[1]),
        u = r(d[2]),
        s = r(d[3])
}), "9179c5", ["e62feb", "ea19bb", "e6eac9", "627c69"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = async function(t) {
        const {
            niobeClient: n
        } = await (0, s.getInitializeOptions)(), {
            errors: l,
            data: c
        } = await n.mutate({
            mutation: u.default,
            variables: {
                request: t
            }
        });
        if (l && l.length > 0) {
            const n = 'Failed to send push token due to network error';
            f((() => [n, l]));
            const s = {
                    extra: { ...l[0],
                        ...t
                    },
                    fingerprint: ['PushTokenUpdateFailure']
                },
                u = new Error(l[0] ? .message ? ? n);
            throw (0, o.reportError)(u, s), u
        }
        return f((() => ['Sent push token to upstream server', c])), c ? .pleiades ? .writeToken ? .deviceId
    };
    var n = r(d[1]),
        o = r(d[2]),
        s = r(d[3]),
        u = t(r(d[4]));
    const f = (0, n.createLogger)('Push:Send Token', (0, n.createPrefixStyle)('#b95f6f', '#fff'))
}), "96c3e8", ["ba7a76", "102445", "f2f40f", "436356", "dbdcfd"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.logSessionEnd = function(n) {
        return t.default.logUniversalSessionEndEvent(n)
    }, e.logSessionStart = function(n) {
        return t.default.logUniversalSessionStartEvent(n)
    };
    var t = n(r(d[1]))
}), "9e7031", ["ba7a76", "c8b97a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var o = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.addLoginCallback = function(o) {
        return n.default.removeListener('login', o), n.default.on('login', o), () => {
            n.default.removeListener('login', o)
        }
    }, e.addLoginCompleteCallback = function(o) {
        return n.default.removeListener('login:complete', o), n.default.on('login:complete', o), () => {
            n.default.removeListener('login:complete', o)
        }
    }, e.addLogoutCallback = function(o) {
        return n.default.removeListener('logout', o), n.default.on('logout', o), () => {
            n.default.removeListener('logout', o)
        }
    }, e.broadcastLogin = function(o) {
        n.default.emit('login:before'), n.default.emit('login'), v((() => {
            C(!0), n.default.emit('login:complete'), setTimeout((() => {
                o ? .()
            }), 0)
        }))
    }, e.callFunctionUponLogin = v, e.logModalSession = function(o = {}) {
        if (o.sessionEvent) {
            const n = (0, s.logSessionStart)(o.sessionEvent),
                t = o.onModalClose;
            o.onModalClose = () => {
                t && t(), n && (0, s.logSessionEnd)({
                    sessionId: n,
                    useSendBeacon: !0
                })
            }
        }
    }, e.renameToSnakeCaseFormFields = e.renameToCamelCaseFormFields = e.objectKeyByValue = void 0;
    var n = o(r(d[1])),
        t = o(r(d[2])),
        l = o(r(d[3])),
        s = r(d[4]),
        u = r(d[5]),
        c = r(d[6]);
    const f = 'logged_in_event',
        b = 50;

    function v(o) {
        t.default.isLoggedIn() ? o() : setTimeout((() => v(o)), b)
    }

    function C(o) {
        (0, l.default)() && (0, u.localStorageSetItem)(f, JSON.stringify(o))
    }
    const L = o => c.SignupFieldNames[o];
    e.renameToSnakeCaseFormFields = (o, n = !1) => {
        const t = Object.keys(o).reduce(((n, t) => ({ ...n,
            [L(t)]: o[t]
        })), {});
        return n ? { ...t,
            national_number: o.phoneNumber
        } : t
    };
    const S = (o, n) => {
        const t = Object.entries(o).find((o => o[1] === n));
        return t && t[0] || ''
    };
    e.objectKeyByValue = S;
    e.renameToCamelCaseFormFields = (o, n = !1) => {
        const t = Object.keys(o).reduce(((n, t) => ({ ...n,
            [S(c.SignupFieldNames, t)]: o[t]
        })), {});
        return n ? { ...t,
            phoneNumber: o.national_number
        } : t
    }
}), "9f7af8", ["ba7a76", "abc3e4", "06a99e", "c916d0", "9e7031", "13babd", "b48e39"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = async function(t) {
        const {
            default: u
        } = await n.scheduler.postTask(s);
        return u(t)
    };
    var u = t(r(d[1])),
        n = r(d[2]);
    const s = () => r(d[4])(d[3]).then(u.default)
}), "a2fd9f", ["ba7a76", "45f788", "a2c93f", "436356", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SignupSocialFieldNames = e.SignupFieldNames = void 0;
    var n = r(d[0]);
    const o = {
            [n.SignupFields.geetestChallenge]: 'geetest_challenge',
            [n.SignupFields.geetestValidate]: 'geetest_validate',
            [n.SignupFields.geetestSeccode]: 'geetest_seccode'
        },
        l = {
            [n.SignupFields.firstName]: 'first_name',
            [n.SignupFields.lastName]: 'last_name',
            [n.SignupFields.firstNamePreferred]: 'first_name_preferred',
            [n.SignupFields.email]: 'email',
            [n.SignupFields.password]: 'password',
            [n.SignupFields.birthdateMonth]: 'birthday_month',
            [n.SignupFields.birthdateDay]: 'birthday_day',
            [n.SignupFields.birthdateYear]: 'birthday_year',
            [n.SignupFields.receivePromotionalEmail]: 'receive_promotional_email',
            [n.SignupFields.receivePromotionalSMS]: 'receive_promotional_sms',
            [n.SignupFields.phoneNumber]: 'phone',
            [n.SignupFields.countryCode]: 'country_code',
            [n.SignupFields.verificationCode]: 'verification_code',
            [n.SignupFields.tosCheckBox]: 'tos_check_box',
            [n.SignupFields.collectionOfPersonalInformation]: 'collection_of_personal_information',
            [n.SignupFields.overseasTransferOfPersonalData]: 'overseas_transfer_of_personal_data',
            [n.SignupFields.phoneSignupFlow]: 'phone_signup_flow',
            [n.SignupFields.redirectUrl]: 'redirect_url'
        },
        s = (e.SignupFieldNames = { ...l,
            ...o
        }, {
            [n.SignupSocialFields.oauth2Service]: 'oauth2_service',
            [n.SignupSocialFields.providerUid]: 'provider_uid',
            [n.SignupSocialFields.authType]: 'auth_type',
            [n.SignupSocialFields.authCodeCacheKey]: 'auth_code_cache_key',
            [n.SignupSocialFields.nationalNumber]: 'national_number'
        });
    e.SignupSocialFieldNames = { ...l,
        ...s
    }
}), "b48e39", ["76b333"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const t = (0, n.default)();
        if ('0' === t.new_signup_login) return !1;
        return !0
    };
    var n = t(r(d[1]))
}), "b60706", ["ba7a76", "a7c4ef"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var _ = {
        StrengthIndicatorStatuses: !0,
        IsValidIndicatorStatuses: !0,
        TOSGroups: !0,
        Modals: !0,
        AuthMethods: !0,
        Boxes: !0,
        LoginMethods: !0,
        LoginMethodsForLogging: !0,
        SignupMethods: !0,
        SignupMethodsForLogging: !0,
        SignupPaneViews: !0,
        SignupPaneViewsForLogging: !0,
        SignupFormSteps: !0,
        MowebEmailViews: !0,
        FormNamesForIDs: !0,
        ModalTypes: !0,
        Panes: !0,
        Platforms: !0,
        AuthModalLifecycleStages: !0,
        AuthBoxLifecycleStages: !0,
        Providers: !0,
        ContextualLoginMethods: !0,
        SuggestedLoginMethods: !0,
        SuggestedLoginMethodLabels: !0,
        SuggestedLoginViews: !0,
        SocialAuthMethods: !0,
        SocialAuthSource: !0,
        LoginPaneViews: !0,
        CombineAuthPaneViews: !0,
        LocalStorageKeys: !0,
        BirthdateValidationStates: !0,
        PhoneSignupErrorStatuses: !0,
        SwitchModalSource: !0,
        AuthPagePaths: !0,
        DEFAULT_DELAY_SECONDS: !0
    };
    e.TOSGroups = e.SwitchModalSource = e.SuggestedLoginViews = e.SuggestedLoginMethods = e.SuggestedLoginMethodLabels = e.StrengthIndicatorStatuses = e.SocialAuthSource = e.SocialAuthMethods = e.SignupPaneViewsForLogging = e.SignupPaneViews = e.SignupMethodsForLogging = e.SignupMethods = e.SignupFormSteps = e.Providers = e.Platforms = e.PhoneSignupErrorStatuses = e.Panes = e.MowebEmailViews = e.Modals = e.ModalTypes = e.LoginPaneViews = e.LoginMethodsForLogging = e.LoginMethods = e.LocalStorageKeys = e.IsValidIndicatorStatuses = e.FormNamesForIDs = e.DEFAULT_DELAY_SECONDS = e.ContextualLoginMethods = e.CombineAuthPaneViews = e.Boxes = e.BirthdateValidationStates = e.AuthPagePaths = e.AuthModalLifecycleStages = e.AuthMethods = e.AuthBoxLifecycleStages = void 0;
    var o = r(d[0]);
    Object.keys(o).forEach((function(O) {
        "default" !== O && "__esModule" !== O && (Object.prototype.hasOwnProperty.call(_, O) || O in e && e[O] === o[O] || Object.defineProperty(e, O, {
            enumerable: !0,
            get: function() {
                return o[O]
            }
        }))
    }));
    e.StrengthIndicatorStatuses = (function(_) {
        return _.weak = "weak", _.good = "good", _.strong = "strong", _
    })({}), e.IsValidIndicatorStatuses = (function(_) {
        return _.invalid = "invalid", _.valid = "valid", _
    })({}), e.TOSGroups = (function(_) {
        return _.WITH_CHECKBOX = "with-checkbox", _.NO_CHECKBOX = "no-checkbox", _.WITH_LAST_STEP = "with-last-step", _
    })({}), e.Modals = (function(_) {
        return _.LOGIN_MODAL = "LOGIN_MODAL", _.SIGNUP_MODAL = "SIGNUP_MODAL", _.FORGOT_PASSWORD_MODAL = "FORGOT_PASSWORD_MODAL", _.SSO_MODAL = "SSO_MODAL", _.LOGOUT_MODAL = "LOGOUT_MODAL", _.NO_MODAL = "NO_MODAL", _
    })({}), e.AuthMethods = (function(_) {
        return _.PHONE = "phone", _.OTP_PHONE = "otp_phone", _.EMAIL = "email", _.PHONE_OR_EMAIL = "phone_or_email", _
    })({});
    e.Boxes = {
        LOGIN_BOX: 'LOGIN_BOX',
        SIGNUP_BOX: 'SIGNUP_BOX',
        COMBINE_AUTH_BOX: 'COMBINE_AUTH_BOX',
        COMBINE_OTP_PHONE_BOX: 'COMBINE_OTP_PHONE_BOX',
        FORGOT_PASSWORD_BOX: 'FORGOT_PASSWORD_BOX'
    };
    let O = e.LoginMethods = (function(_) {
        return _.EMAIL_LOGIN = "EMAIL_LOGIN", _.OTP_PHONE_LOGIN = "OTP_PHONE_LOGIN", _.PHONE_LOGIN = "PHONE_LOGIN", _.PHONE_OR_EMAIL_LOGIN = "PHONE_OR_EMAIL_LOGIN", _
    })({});
    var n = (function(_) {
        return _.EMAIL_LOGIN = "email_login", _.OTP_PHONE_LOGIN = "otp_phone_login", _.PHONE_LOGIN = "phone_login", _.PHONE_OR_EMAIL_LOGIN = "phone_or_email_login", _.OTP_PHONE_LOGIN_PHONE = "otp_phone_login_phone", _
    })(n || {});
    O.EMAIL_LOGIN, n.EMAIL_LOGIN, O.OTP_PHONE_LOGIN, n.OTP_PHONE_LOGIN, O.PHONE_LOGIN, n.PHONE_LOGIN, O.PHONE_OR_EMAIL_LOGIN, n.PHONE_OR_EMAIL_LOGIN;
    e.LoginMethodsForLogging = (function(_) {
        return _.EMAIL_LOGIN = "email", _.OTP_PHONE_LOGIN = "otp_phone", _.PHONE_LOGIN = "phone", _.PHONE_OR_EMAIL_LOGIN = "phone_or_email", _
    })({}), e.SignupMethods = (function(_) {
        return _.PHONE_SIGNUP = "PHONE_SIGNUP", _.EMAIL_SIGNUP = "EMAIL_SIGNUP", _.MOWEB_EMAIL_SIGNUP = "MOWEB_EMAIL_SIGNUP", _.SOCIAL_SIGNUP = "SOCIAL_SIGNUP", _
    })({}), e.SignupMethodsForLogging = (function(_) {
        return _.PHONE_SIGNUP = "phone", _.EMAIL_SIGNUP = "email", _
    })({});
    let t = e.SignupPaneViews = (function(_) {
        return _.ALL_SIGNUP_OPTIONS = "ALL_SIGNUP_OPTIONS", _.EMAIL_SIGNUP = "EMAIL_SIGNUP", _.MOWEB_EMAIL_SIGNUP = "MOWEB_EMAIL_SIGNUP", _.OTP_PHONE_MORE_OPTIONS = "OTP_PHONE_MORE_OPTIONS", _.OTP_PHONE_VERIFY_CODE = "OTP_PHONE_VERIFY_CODE", _.PHONE_SIGNUP = "PHONE_SIGNUP", _.UNIFIED_SIGNUP = "UNIFIED_SIGNUP", _
    })({});
    e.SignupPaneViewsForLogging = {
        [t.PHONE_SIGNUP]: 'phone',
        [t.EMAIL_SIGNUP]: 'email',
        [t.MOWEB_EMAIL_SIGNUP]: 'moweb_email',
        [t.ALL_SIGNUP_OPTIONS]: 'all_options',
        [t.UNIFIED_SIGNUP]: 'unified',
        [t.OTP_PHONE_MORE_OPTIONS]: 'phone_otp_more_options',
        [t.OTP_PHONE_VERIFY_CODE]: 'phone_otp_verify_code'
    };
    e.SignupFormSteps = (function(_) {
        return _.ACCOUNT_INFO = "ACCOUNT_INFO", _.PROFILE_INFO = "PROFILE_INFO", _.UPDATE_PASSWORD = "UPDATE_PASSWORD", _
    })({}), e.MowebEmailViews = (function(_) {
        return _.EMAIL_AND_PASSWORD = "EMAIL_AND_PASSWORD", _.NAMES_AND_BIRTHDATE = "NAMES_AND_BIRTHDATE", _.TOS = "TOS", _.TOS_DECLINED = "TOS_DECLINED", _
    })({});
    const E = e.FormNamesForIDs = {
        ACCOUNT_LOOKUP: 'account-lookup',
        EMAIL_LOGIN: 'email-login',
        FORGOT_PASSWORD: 'forgot-password',
        OTP_PHONE_LOGIN: 'otp-phone-login',
        PHONE_LOGIN: 'phone-login',
        PHONE_OR_EMAIL_LOGIN: 'phone-or-email-login'
    };
    O.EMAIL_LOGIN, O.OTP_PHONE_LOGIN, O.PHONE_LOGIN, O.PHONE_OR_EMAIL_LOGIN;
    e.ModalTypes = (function(_) {
        return _.MODAL_TYPE_SIGNUP = "signup", _.MODAL_TYPE_LOGIN = "login", _
    })({}), e.Panes = (function(_) {
        return _.LOGIN = "login", _.SIGNUP = "signup", _
    })({}), e.Platforms = (function(_) {
        return _.WEB = "web", _.MOWEB = "moweb", _
    })({}), e.AuthModalLifecycleStages = (function(_) {
        return _.INITIAL = "INITIAL", _.MODAL_OPENED = "MODAL_OPENED", _.FLOW_FINISHED = "FLOW_FINISHED", _
    })({}), e.AuthBoxLifecycleStages = (function(_) {
        return _.INITIAL = "INITIAL", _.AUTH_FINISHED = "AUTH_FINISHED", _.FLOW_FINISHED = "FLOW_FINISHED", _
    })({}), e.Providers = (function(_) {
        return _.FACEBOOK = "Facebook", _.GOOGLE = "Google", _.WECHAT = "WeChat", _.ALIPAY = "Alipay", _.WEIBO = "Weibo", _.APPLE = "Apple", _.NAVER = "Naver", _
    })({}), e.ContextualLoginMethods = (function(_) {
        return _.facebook = "facebook", _.google = "google", _.email = "email", _.onelogin = "onelogin", _.phone = "phone", _.weibo = "weibo", _.alipay = "alipay", _.wechat = "wechat", _
    })({});
    let I = e.SuggestedLoginMethods = (function(_) {
        return _.email = "email", _.facebook = "facebook", _.google = "google", _.apple = "apple", _.naver = "naver", _.otp_phone = "otp_phone", _.onelogin = "onelogin", _.undecided = "undecided", _.wechat = "wechat", _
    })({});
    e.SuggestedLoginMethodLabels = {
        [I.email]: 'Email',
        [I.facebook]: 'Facebook',
        [I.google]: 'Google',
        [I.apple]: 'Apple',
        [I.naver]: 'Naver',
        [I.otp_phone]: 'Phone',
        [I.onelogin]: 'OneLogin',
        [I.undecided]: 'Undecided',
        [I.wechat]: 'WeChat'
    };
    e.SuggestedLoginViews = (function(_) {
        return _.single = "single", _.multiple = "multiple", _
    })({}), e.SocialAuthMethods = (function(_) {
        return _.ALIPAY = "alipay", _.FACEBOOK = "facebook", _.FACEBOOK_PROMPT = "facebook_prompt", _.GOOGLE = "google", _.ONELOGIN = "onelogin", _.WECHAT = "wechat", _.WEIBO = "weibo", _.APPLE = "apple", _.HUAWEI = "huawei", _.NAVER = "naver", _
    })({}), e.SocialAuthSource = (function(_) {
        return _.LOGIN_PROMPT = "login_prompt", _.SUGGESTED_LOGIN = "suggested_login", _.FACEBOOK_PROMPT = "facebook_prompt", _.LOGIN = "login", _.SIGNUP = "signup", _
    })({}), e.LoginPaneViews = (function(_) {
        return _.DEFAULT = "default", _.SUGGESTED_LOGIN = "suggested_login", _.EMAIL_UNIFIED = "email_unified", _.EMAIL_UNIFIED_PASSWORD = "email_unified_password", _.EMAIL_UNIFIED_SIGNUP = "email_unified_signup", _.OTP_PHONE_VERIFY_CODE = "otp_phone_verify_code", _.OTP_PHONE_MORE_OPTIONS = "otp_phone_more_options", _.OTP_EMAIL_VERIFICATION = "otp_email_verification", _.OTP_LOG_IN_ANOTHER_WAY = "otp_log_in_another_way", _
    })({});
    let N = e.CombineAuthPaneViews = (function(_) {
        return _.ALL_LOGIN_OPTIONS = "ALL_LOGIN_OPTIONS", _.OTP_PHONE_LOGIN = "OTP_PHONE_LOGIN", _.OTP_PHONE_VERIFY_CODE = "OTP_PHONE_VERIFY_CODE", _.OTP_PHONE_MORE_OPTIONS = "OTP_PHONE_MORE_OPTIONS", _.PHONE_OR_EMAIL_LOGIN = "PHONE_OR_EMAIL_LOGIN", _.OTP_PHONE_SIGNUP = "OTP_PHONE_SIGNUP", _.EMAIL_SIGNUP = "EMAIL_SIGNUP", _
    })({});
    N.ALL_LOGIN_OPTIONS, O.OTP_PHONE_LOGIN, N.OTP_PHONE_LOGIN, O.OTP_PHONE_LOGIN, N.OTP_PHONE_VERIFY_CODE, O.OTP_PHONE_LOGIN, N.PHONE_OR_EMAIL_LOGIN, O.PHONE_OR_EMAIL_LOGIN, e.LocalStorageKeys = {
        LOGOUT_ANYWAY_COUNT_V3: 'logout_anyway_count_v3',
        LOGIN_PROMPT_DISMISSED: 'login_prompt_dismissed',
        FACEBOOK_PROMPT_DISMISSED: 'facebook_prompt_dismissed',
        FACEBOOK_PROMPT_DISMISSED_P3: 'facebook_prompt_dismissed_p3',
        FACEBOOK_PROMPT_SHOW_COUNT: 'facebook_prompt_show_count'
    };
    e.BirthdateValidationStates = (function(_) {
        return _.INVALID = "INVALID", _.UNDER_THIRTEEN = "UNDER_THIRTEEN", _.UNDER_EIGHTEEN = "UNDER_EIGHTEEN", _.OVER_EIGHTEEN = "OVER_EIGHTEEN", _
    })({});
    e.PhoneSignupErrorStatuses = {
        PHONE_ALREADY_USED_BY_PHONE_ACCOUNT: 'phone_already_used_by_phone_account',
        PHONE_ALREADY_USED_BY_EMAIL_ACCOUNT: 'phone_already_used_by_email_account',
        PHONE_ALREADY_USED_BY_SOCIAL_ACCOUNT: 'phone_already_used_by_social_account',
        PHONE_ALREADY_USED_BY_EMAIL_OR_SOCIAL_ACCOUNT: 'phone_already_used_by_email_or_social_account'
    };
    e.SwitchModalSource = (function(_) {
        return _.ERROR_MESSAGE = "error_message", _.SWITCH_CTA = "switch_cta", _
    })({});
    e.AuthPagePaths = {
        ACCOUNT_LINKING: '/account_linking',
        AUTHENTICATE: '/authenticate'
    }, e.DEFAULT_DELAY_SECONDS = 60
}), "b616d2", ["6126d0"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getBrowserNiobeStandaloneClient = function() {
        const {
            fetch: t
        } = window, w = (0, l().getBrowserHyperloopEnv)(), p = (0, f().createBrowserMetricReporter)(w);
        return new(u().NiobeMinimalistClient)({
            extraHeaders: (0, c().default)(),
            fetch: t,
            generateRandomString: o.default,
            getRenderingState: s().getRenderingState,
            jitneyLogger: n.default.logJitneyEvent.bind(n.default),
            metricReporter: p
        })
    };
    var n = t(r(d[1])),
        o = t(r(d[2]));

    function u() {
        const t = r(d[3]);
        return u = function() {
            return t
        }, t
    }

    function c() {
        const n = t(r(d[4]));
        return c = function() {
            return n
        }, n
    }

    function f() {
        const t = r(d[5]);
        return f = function() {
            return t
        }, t
    }

    function s() {
        const t = r(d[6]);
        return s = function() {
            return t
        }, t
    }

    function l() {
        const t = r(d[7]);
        return l = function() {
            return t
        }, t
    }
}), "ba6295", ["ba7a76", "c8b97a", "24220e", "d60f20", "a54380", "7026da", "4e4ed7", "5e1f8e"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]);
    m.exports = function() {
        return t.Date.now()
    }
}), "c1a342", ["72c548"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        void 0 === n && (n = o());
        return n
    };
    var t = r(d[0]);
    let n;

    function o() {
        if (!('localStorage' in window)) return !1;
        const n = '__local_storage_feature_detector__';
        (0, t.localStorageSetItem)(n, n, {
            internalOnly: !0
        });
        const o = (0, t.localStorageGetItem)(n, {
            internalOnly: !0
        });
        return (0, t.localStorageRemoveItem)(n, {
            internalOnly: !0
        }), o === n
    }
}), "c916d0", ["13babd"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function n() {
        const t = r(d[1]);
        return n = function() {
            return t
        }, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.changeCurrency = async function(t, n, c) {
        const {
            idStr: s
        } = o.default.current(), p = c || s;
        if (!p) return Promise.resolve();
        const f = (0, u.createGlobalId)('User', p);
        return (n || (0, l().getBrowserNiobeStandaloneClient)()).mutate({
            mutation: y.default,
            variables: {
                input: {
                    id: f,
                    userData: {
                        nativeCurrency: t
                    }
                }
            }
        })
    }, e.replaceCurrencyParam = function(t, u = {}) {
        const o = { ...(0, n().parse)(window.location.search.slice(1)),
            display_currency: t,
            ...u
        };
        s.default.getBootstrap('payins.currency.update_url_param') && (delete o.display_currency, o.currency = t, o.guestCurrency && (o.guestCurrency = t));
        o.currency && (o.currency = t);
        o.guest_currency && (o.guest_currency = t);
        o.price_min && delete o.price_min;
        o.price_max && delete o.price_max;
        const l = `?${(0,n().stringify)(o,{arrayFormat:'brackets'})}${window.location.hash}`;
        return (0, c.getHistory)().replace(l), l
    };
    var c = r(d[2]),
        u = r(d[3]),
        o = t(r(d[4])),
        s = t(r(d[5]));

    function l() {
        const t = r(d[6]);
        return l = function() {
            return t
        }, t
    }
    var y = t(r(d[7]))
}), "d46747", ["ba7a76", "e950a3", "7934b6", "56afe0", "06a99e", "c235f8", "ba6295", "81c2e1"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const {
            userAgent: t
        } = navigator;
        if ((0, n.isAndroid)(t)) return 'ANDROID_VAPID';
        if ((0, n.isIphone)(t)) return 'IPHONE_VAPID';
        if ((0, n.isIpad)(t)) return 'IPAD_VAPID';
        return 'DESKTOP_VAPID'
    };
    var n = r(d[0])
}), "d93056", ["e9b7bf"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = t(r(d[1]));
    const u = {
        document: void 0,
        getDocument: () => r(d[3])(d[2]).then(n.default).then((t => t.default)),
        name: 'SendPushTokenMutation',
        type: 'mutation',
        operationId: '35f85d8e0ca316c774486242fa697b3b3dd26597467c7744cd45fc6d25282d1c'
    };
    e.default = u
}), "dbdcfd", ["ba7a76", "45f788", "27c779", "057569"]);
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
    }), e.default = void 0;
    const n = {
        RookeryMessagePackageEvent: t().RookeryMessagePackageEvent
    };
    e.default = n
}), "e1839b", ["ef628b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]),
        n = r(d[1]),
        o = r(d[2]),
        u = Math.max,
        f = Math.min;
    m.exports = function(c, v, s) {
        var l, T, p, h, x, y, w = 0,
            E = !1,
            M = !1,
            W = !0;
        if ('function' != typeof c) throw new TypeError("Expected a function");

        function _(t) {
            var n = l,
                o = T;
            return l = T = void 0, w = t, h = c.apply(o, n)
        }

        function b(t) {
            return w = t, x = setTimeout(q, v), E ? _(t) : h
        }

        function j(t) {
            var n = v - (t - y);
            return M ? f(n, p - (t - w)) : n
        }

        function k(t) {
            var n = t - y;
            return void 0 === y || n >= v || n < 0 || M && t - w >= p
        }

        function q() {
            var t = n();
            if (k(t)) return z(t);
            x = setTimeout(q, j(t))
        }

        function z(t) {
            return x = void 0, W && l ? _(t) : (l = T = void 0, h)
        }

        function A() {
            var t = n(),
                o = k(t);
            if (l = arguments, T = this, y = t, o) {
                if (void 0 === x) return b(y);
                if (M) return clearTimeout(x), x = setTimeout(q, v), _(y)
            }
            return void 0 === x && (x = setTimeout(q, v)), h
        }
        return v = o(v) || 0, t(s) && (E = !!s.leading, p = (M = 'maxWait' in s) ? u(o(s.maxWait) || 0, v) : p, W = 'trailing' in s ? !!s.trailing : W), A.cancel = function() {
            void 0 !== x && clearTimeout(x), w = 0, l = y = T = x = void 0
        }, A.flush = function() {
            return void 0 === x ? h : z(n())
        }, A
    }
}), "e521c4", ["5e8a91", "c1a342", "3a7fa6"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.RECAPTCHA_TOKEN_VALUE_PREFIX = e.RECAPTCHA_TOKEN_HEADER_NAME = e.GRECAPTCHA_SITE_KEY = void 0;
    e.GRECAPTCHA_SITE_KEY = '6LcZIM8aAAAAAF-MVKDG5e_696lgsoUeqKoXlxsR', e.RECAPTCHA_TOKEN_HEADER_NAME = 'X-AIRBNB-RECAPTCHA-TOKEN', e.RECAPTCHA_TOKEN_VALUE_PREFIX = 'WEB-V3:'
}), "e5b15a", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function n() {
        const t = r(d[1]);
        return n = function() {
            return t
        }, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = async function(t) {
        const c = t || l();
        if (!c) {
            const t = 'Cannot create device id with no user id';
            throw s((() => t)), new Error(t)
        }
        const o = await _(),
            I = o ? .deviceId;
        if (I && p(c, o)) return s((() => `Using "${I}" as stored device push id`)), I;
        const w = (0, n().v4)();
        return (0, u.storeInCache)(v, f, h({
            deviceId: w,
            userId: c
        })), w
    }, e.hasValidDeviceId = async function() {
        const t = l();
        if (!t) return !1;
        const n = await _();
        return p(t, n)
    };
    var c = t(r(d[2])),
        u = r(d[3]),
        o = r(d[4]);
    const s = (0, o.createLogger)('Push:Device Id', (0, o.createPrefixStyle)('#b95f6f', '#fff')),
        f = 'push_token_id',
        v = 'airbnb_push_notifications',
        I = ':';

    function h({
        deviceId: t,
        userId: n
    }) {
        return `${n}${I}${t}`
    }

    function l() {
        return c.default.current().idStr
    }

    function _() {
        return (0, u.getFromCache)(v, f).then((t => {
            if (!t) return;
            const [n, c] = t.split(I);
            return {
                userId: n,
                deviceId: c
            }
        }))
    }

    function p(t, n) {
        return !(!n ? .deviceId || n ? .userId !== t)
    }
}), "e62feb", ["ba7a76", "305dd5", "06a99e", "fe8083", "102445"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function n() {
        const t = r(d[1]);
        return n = function() {
            return t
        }, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.emitRecaptchaClientGeneratedTokenEvent = function({
        action: t,
        success: c,
        loadTime: l,
        readyTime: s,
        execTime: u,
        length: v,
        error: f,
        isPlatformized: _
    }) {
        const h = {
            action: t,
            success: c,
            load_time: l,
            ready_time: s,
            execution_time: u,
            error: f,
            ...void 0 === v ? {} : {
                length: v
            },
            ...void 0 === _ ? {} : {
                is_platformized: _
            },
            provider: 'Google'
        };
        o.default.logJitneyEvent({
            schema: n().RecaptchaClientGeneratedTokenEvent,
            event_data: h
        })
    };
    var o = t(r(d[2]))
}), "e6a6e9", ["ba7a76", "8e5ca0", "c8b97a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.clearSubscription = async function() {
        const o = await (0, n.getInitializeOptions)(),
            {
                serviceWorkerRegistration: u
            } = o,
            c = await u.pushManager.getSubscription();
        if (!c) return !0;
        try {
            await c.unsubscribe()
        } catch (n) {
            (0, t.reportError)(n, {
                originalError: n
            }), (0, s.markMilestone)({
                options: o,
                metric: 'unsubscribe_failure'
            })
        }
        return (0, s.log)((() => 'Push subscription has been unsubscribed.')), !0
    };
    var t = r(d[0]),
        n = r(d[1]),
        s = r(d[2])
}), "e6eac9", ["f2f40f", "436356", "627c69"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.verifyOrCreateSubscription = async function() {
        if (!await (0, o.hasPermission)()) return;
        const t = await (0, c.getInitializeOptions)(),
            {
                pushNotificationsKey: f,
                serviceWorkerRegistration: w
            } = t;
        try {
            let s = await w.pushManager.getSubscription();
            s || (s = await w.pushManager.subscribe({
                userVisibleOnly: !0,
                applicationServerKey: f
            }));
            const o = await (0, u.default)(s),
                c = await (0, n.default)(o);
            return (0, p.markMilestone)({
                description: `Push notifications successfully initialized with key: "${f}".`,
                options: t,
                metric: 'push_subscribe_success',
                metricPrefix: 'service_worker'
            }), c
        } catch (n) {
            (0, p.markMilestone)({
                options: t,
                metric: 'push_subscribe_unknown_failure',
                metricPrefix: 'service_worker'
            }), (0, s.reportError)(n, {
                fingerprint: n ? .message ? ['PushUnknownFailure'] : void 0,
                originalError: n
            }), await (0, l.clearSubscription)()
        }
    };
    var s = r(d[1]),
        n = t(r(d[2])),
        o = r(d[3]),
        c = r(d[4]),
        u = t(r(d[5])),
        l = r(d[6]),
        p = r(d[7])
}), "ea19bb", ["ba7a76", "f2f40f", "96c3e8", "0a0e02", "436356", "35b332", "e6eac9", "627c69"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = e.RookeryMessagePackageEvent = {
        defaultProps: {
            schema: 'com.airbnb.jitney.event.logging.Rookery:RookeryMessagePackageEvent:1.0.0',
            event_name: 'rookery_message_package'
        },
        propTypes: {}
    };
    o.fullyQualifiedName = 'Rookery.v1.RookeryMessagePackageEvent';
    e.RookeryMessagePackageEventEvent = function(t) {
        return {
            eventData: t,
            eventDataSchema: o
        }
    }
}), "ef628b", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getRecaptchaV3TokenHeader = function t({
        action: n,
        timeoutInMs: c = 1e4,
        shouldThrow: s = !1,
        maxRetries: u = 0,
        isPlatformized: f
    }) {
        return _(n, c, f).then((t => ({
            [o.RECAPTCHA_TOKEN_HEADER_NAME]: o.RECAPTCHA_TOKEN_VALUE_PREFIX + t
        }))).catch((h => {
            if (0 === u) {
                if (s) throw h;
                return Promise.resolve({
                    [o.RECAPTCHA_TOKEN_HEADER_NAME]: ''
                })
            }
            return t({
                action: n,
                timeoutInMs: c * y,
                shouldThrow: s,
                maxRetries: u - 1,
                isPlatformized: f
            })
        }))
    };
    t(r(d[1])), t(r(d[2]));
    var n = r(d[3]),
        o = r(d[4]),
        c = r(d[5]);

    function s(t) {
        return new Promise((n => setTimeout(n, t)))
    }

    function u(t, n) {
        return () => {
            throw new c.RecaptchaTokenError(`Timeout: ${t} exceeded ${n}ms`)
        }
    }

    function f(t) {
        if (void 0 === window.grecaptcha) {
            return s(50).then((() => f(t)))
        }
        return t.loadedTs = Date.now(), Promise.resolve()
    }

    function h(t) {
        return new Promise((n => {
            window.grecaptcha.ready((() => {
                t.readyTs = Date.now(), n()
            }))
        }))
    }

    function T(t) {
        const {
            action: n
        } = t;
        return window.grecaptcha.execute(o.GRECAPTCHA_SITE_KEY, {
            action: n
        }).then((n => {
            if ('string' != typeof n || !n.length) throw new c.RecaptchaTokenError('window.grecaptcha failed to generate token');
            t.executedTs = Date.now(), t.token = n
        }))
    }

    function w(t) {
        const {
            startTs: n,
            loadedTs: o
        } = t;
        return 'number' == typeof o ? o - n : -1
    }

    function l(t) {
        const {
            loadedTs: n,
            readyTs: o
        } = t;
        return 'number' != typeof n ? -1 : 'number' == typeof o ? o - n : -1
    }

    function p(t) {
        const {
            readyTs: n,
            executedTs: o
        } = t;
        return 'number' != typeof n ? -1 : 'number' == typeof o ? o - n : -1
    }

    function E(t) {
        const {
            action: o,
            err: c,
            token: s,
            isPlatformized: u
        } = t;
        return (0, n.emitRecaptchaClientGeneratedTokenEvent)({
            action: o,
            success: void 0 === c,
            loadTime: w(t),
            readyTime: l(t),
            execTime: p(t),
            length: 'string' == typeof s ? s.length : void 0,
            error: c,
            isPlatformized: u
        })
    }

    function P(t, n) {
        return n - (Date.now() - t)
    }

    function _(t, n, o) {
        const c = Date.now(),
            w = {
                startTs: c,
                action: t,
                isPlatformized: o
            };
        return Promise.race([f(w), s(P(c, n)).then(u('completeGrecaptchaLoad', n))]).then((() => Promise.race([h(w), s(P(c, n)).then(u('prepareGrecaptcha', n))]))).then((() => Promise.race([T(w), s(P(c, n)).then(u('generateToken', n))]))).then((() => (E(w), `${w.token}`))).catch((t => {
            throw E({ ...w,
                err: String(t)
            }), t
        }))
    }
    const y = 1.5
}), "fa27ff", ["ba7a76", "c235f8", "6b26d0", "e6a6e9", "e5b15a", "096502"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createMarkMilestone = function(n, c = "service_worker") {
        const s = (0, o.createLogger)(n, (0, o.createPrefixStyle)('rebeccapurple', '#fff'));
        return function({
            count: o = 1,
            options: n,
            metric: u,
            metricPrefix: f,
            description: l,
            tags: p
        }) {
            const {
                datadogTags: _
            } = n, $ = [_, p].filter(Boolean).join(','), j = f ? ? c;
            (0, t.airdogCount)(`${j}.milestone`, o, [`metric:${u}`, $].join(',')), (0, t.airdogCount)(`${j}.${u}`, o, $), l && s((() => [l, {
                datadogTags: $,
                metric: u
            }]))
        }
    };
    var t = r(d[0]),
        o = r(d[1])
}), "fae72a", ["3e4681", "102445"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.getServiceWorkerPath = L;
    var n = r(d[1]),
        o = t(r(d[2])),
        s = r(d[3]),
        c = t(r(d[4])),
        l = r(d[5]),
        p = r(d[6]),
        _ = r(d[7]),
        f = r(d[8]),
        v = t(r(d[9])),
        h = t(r(d[10])),
        u = r(d[11]),
        w = r(d[12]),
        y = r(d[13]),
        k = r(d[14]),
        b = r(d[15]),
        E = t(r(d[16])),
        S = r(d[17]);
    const T = (0, l.createLogger)('ServiceWorker:Installer', (0, l.createPrefixStyle)('rebeccapurple', '#fff')),
        A = (0, u.createMarkMilestone)('ServiceWorker:Installer');

    function C(t, n, o) {
        const s = new URLSearchParams;
        Object.keys(n).forEach((t => {
            const o = n[t];
            null != o && !1 !== o && s.append(t, String(o))
        })), o && Object.keys(o).forEach((t => {
            const n = o[t];
            null != n && s.append(t, String(n))
        }));
        const c = String(s);
        return c.length ? `${t}?${c}` : t
    }

    function L(t, n = {
        appType: 'GLOBAL_TRAVEL',
        pushNotifications: !1,
        deliverAppShellExperiment: !1,
        deliverPreCachingExperiment: !1,
        deliverTripsOfflineExperiment: !1,
        dynamicPrecaching: !1,
        datadogTags: ''
    }) {
        const {
            deliverAppShellExperiment: o,
            deliverPWAExperiment: s,
            deliverPreCachingExperiment: l,
            deliverTripsOfflineExperiment: p,
            disableAppShell: _,
            dynamicPrecaching: f
        } = n, {
            force_disable_3p_js: h,
            force_env: u,
            force_staging: w,
            offline: y,
            sw_workbox_dev_logs: k,
            utm_source: E,
            enableReactProfiler: S
        } = (0, v.default)();
        return C(t, {
            dynamic_precaching: f,
            deliver_app_shell_experiment: o,
            deliver_pre_caching_experiment: l,
            deliver_trips_offline_experiment: p,
            disable_app_shell: _,
            force_disable_3p_js: h,
            force_env: u,
            force_staging: w,
            enableReactProfiler: S,
            offline: y,
            sw_workbox_dev_logs: k,
            sw_disable_niobe_cache: (0, b.getTreatmentOverride)('sw_disable_niobe_cache') ? ? c.default.getBootstrap('sw_disable_niobe_cache'),
            sw_pwa_disable_niobe_cache: (0, b.getTreatmentOverride)('sw_pwa_disable_niobe_cache') ? ? c.default.getBootstrap('sw_pwa_disable_niobe_cache'),
            sw_allow_shell_on_search_verticals: (0, b.getTreatmentOverride)('sw_allow_shell_on_search_verticals') ? ? c.default.getBootstrap('sw_allow_shell_on_search_verticals'),
            utm_source: E
        }, {
            sw_enable_offline: s
        })
    }

    function W(t, n) {
        const {
            pushNotifications: o
        } = n;
        (0, p.addLoginCompleteCallback)((async () => {
            await t.messageSW({
                type: 'CLEAR_SHELL_CACHE'
            }), A({
                metric: 'login_and_clear_cache',
                description: 'Any caches storing an app shell have been cleared after login.',
                options: n
            }), o && (0, w.updateSubscriptionIfOptedIn)()
        })), (0, p.addLogoutCallback)((async () => {
            await t.messageSW({
                type: 'CLEAR_SHELL_CACHE'
            }), A({
                metric: 'logout_and_clear_cache',
                description: 'Any caches storing an app shell have been cleared after logout.',
                options: n
            }), (0, w.clearSubscription)()
        }))
    }
    const O = 'skipping start of the service worker due to user opted out, remove your user from "temporarily_disable_service_workers_for_me" to opt back in.',
        R = 'service workers are globally disabled, skipping start';
    async function I(t, s = {
        appType: 'GLOBAL_TRAVEL',
        pushNotifications: !1,
        deliverTripsOfflineExperiment: !1,
        deliverAppShellExperiment: !1,
        deliverPreCachingExperiment: !1,
        dynamicPrecaching: !1,
        datadogTags: ''
    }) {
        const {
            appType: c,
            datadogTags: l,
            niobeClient: p,
            pushNotifications: v
        } = s, u = L(t, s), k = new n.Workbox(u, {
            updateViaCache: 'all'
        }), b = `Initializing service worker at path: "${t}", see https://air.bb/service-workers for debugging guides.`;
        T((() => [b, {
            pathWithParams: u
        }])), W(k, s), (0, _.addUpdateCurrencyCallback)((async () => {
            await k.messageSW({
                type: 'CLEAR_SHELL_CACHE'
            }), A({
                metric: 'update_currency_and_clear_cache',
                description: 'Any caches storing an app shell have been cleared after updating currency.',
                options: s
            }), v && (0, w.updateSubscriptionIfOptedIn)()
        })), k.addEventListener('installed', (async t => {
            A({
                options: s,
                metric: 'installation',
                description: 'Install event is fired'
            }), t.isUpdate ? A({
                metric: 'version_updated',
                description: 'An installed service worker was updated to a new version.',
                options: s
            }) : A({
                metric: 'first_installation',
                description: 'A new service worker has installed (for the first time)',
                options: s
            }), (s.dynamicPrecaching || s.deliverTripsOfflineExperiment) && await k.messageSW({
                type: 'PRECACHE_ASSETS',
                payload: {
                    appVersion: "Unknown"
                }
            })
        })), k.addEventListener('controlling', (async () => {
            await k.messageSW({
                type: 'FLUSH_MESSAGES'
            }), A({
                options: s,
                metric: 'controlling',
                description: 'The service worker is controlling the page, all behavior such as app shells, fetch handlers and push handlers are now ready.'
            })
        })), k.addEventListener('message', (t => {
            switch (t.data.type) {
                case 'AIRDOG_BUMP':
                    if ('string' == typeof t.data.event) A({
                        options: s,
                        metric: `message.${t.data.event}`
                    });
                    else {
                        const {
                            name: n,
                            count: o,
                            tags: c
                        } = t.data.event;
                        A({
                            count: o,
                            options: s,
                            metric: `message.${n}`,
                            tags: c
                        })
                    }
                    break;
                case 'LOG_JITNEY_EVENT':
                    o.default.logJitneyEvent({
                        event_data: t.data.eventData,
                        schema: E.default[t.data.schemaName]
                    });
                    break;
                case 'SW_ERROR':
                    A({
                        description: 'An error occurred in the service worker.',
                        options: s,
                        metric: 'worker_error'
                    }), (0, f.reportError)(t.data.error, {
                        tags: {
                            service_worker_error_type: 'service_worker.worker_error'
                        }
                    });
                    break;
                case 'NOTIFICATION_CLICKED':
                    A({
                        description: 'A push notification was clicked.',
                        options: s,
                        metric: 'push_notification_clicked'
                    }), (0, y.dispatchNotification)(t.data.payload)
            }
        })), k.addEventListener('activated', (async t => {
            if (!t.isUpdate && v) {
                const t = await navigator.serviceWorker.getRegistration();
                t && p && (T((() => 'Initializing push notifications.')), await (0, h.default)({
                    serviceWorkerRegistration: t,
                    datadogTags: l,
                    appType: c,
                    niobeClient: p
                }))
            }
            A({
                description: 'The service worker has finished activating.',
                options: s,
                metric: 'activated_new_version'
            })
        })), k.addEventListener('waiting', (async () => {
            if (await k.messageSW({
                    type: 'SKIP_WAITING'
                })) T((() => 'Manual reload signal in development received, reloading page')), location.reload(!0);
            else {
                const t = 'Automatic service worker activation failed, you may need to hard refresh the page to get the new worker.';
                T((() => t))
            }
            A({
                options: s,
                metric: 'waiting_to_install'
            })
        }));
        try {
            const t = await k.register();
            t && v && t.active && p && (T((() => 'Initializing push notifications.')), (0, h.default)({
                serviceWorkerRegistration: t,
                appType: c,
                datadogTags: l,
                niobeClient: p
            })), A({
                options: s,
                metric: 'registration'
            })
        } catch (t) {
            'SecurityError' !== t ? .name ? A({
                description: 'The service worker failed to install.',
                options: s,
                metric: 'failed_installation'
            }) : T((() => ['The service worker failed to install due to a SecurityError', t]))
        }
    }
    async function P(t) {
        try {
            if ((await navigator.serviceWorker.getRegistrations()).length) {
                T((() => 'No service worker was registered but one is active, removing and if in development, reloading the page.'));
                try {
                    (0, S.unregisterServiceWorker)({
                        legacyOnly: !1
                    })
                } finally {}
            }
        } catch (n) {
            'SecurityError' !== n ? .name && A({
                description: 'The service worker failed to uninstall.',
                options: t,
                metric: 'failed_uninstallation'
            })
        }
    }

    function x(t) {
        return c.default.getBootstrap('disable_all_service_workers') || t
    }
    e.default = async (t, n = {}) => {
        if ('undefined' == typeof navigator || !navigator.serviceWorker) return;
        const o = `registered_path:${t}`,
            l = (0, k.makeDatadogTags)(o),
            p = { ...n,
                datadogTags: [l, n.datadogTags].filter(Boolean).join(',')
            };
        if (!t) return void await P(p);
        A({
            options: p,
            metric: 'initialization_attempt'
        });
        const {
            forceResetServiceWorker: _
        } = (0, v.default)();
        if (_) return await (0, S.unregisterServiceWorker)({
            legacyOnly: !1
        }), void(window.location.search = window.location.search.replace('forceResetServiceWorker', 'swResetComplete'));
        const f = c.default.getBootstrap('temporarily_disable_service_workers_for_me'),
            h = x(f),
            u = await L(t, p);
        try {
            await (0, S.unregisterServiceWorker)({
                legacyOnly: !h,
                serviceWorkerPath: u,
                datadogTags: l
            })
        } catch (n) {
            h ? T((() => f ? O : R)) : (await I(t, p), (0, s.airdogCount)('service_worker.initialization_failed', 1, l))
        }
        h ? T((() => f ? O : R)) : await I(t, p)
    }
}), "feb86f", ["ba7a76", "47df49", "c8b97a", "3e4681", "c235f8", "102445", "9f7af8", "737fda", "f2f40f", "a7c4ef", "a2fd9f", "fae72a", "627c69", "2d8379", "159ba6", "f9341a", "e1839b", "178ec4"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/service-workers/initialize.37a7ba2883.js.map