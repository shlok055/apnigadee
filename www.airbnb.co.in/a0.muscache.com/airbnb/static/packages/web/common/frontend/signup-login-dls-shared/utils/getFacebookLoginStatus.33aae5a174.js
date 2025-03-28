__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var o = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "getFacebookBootstrapData", {
        enumerable: !0,
        get: function() {
            return h.getFacebookBootstrapData
        }
    }), e.getLoginStatus = function() {
        return B().then((o => new Promise((t => o.getLoginStatus(t)))))
    }, e.handleFacebookLogin = function() {
        return new Promise((o => {
            let t;
            try {
                t = (0, _.generateSecureNonce)()
            } catch (t) {
                (0, k.reportError)(Error(`[facebook auth] error generating secure nonce for state: ${t}`)), o({
                    success: !1
                })
            }
            void 0 !== t && 0 !== t.length || ((0, k.reportError)(Error('[facebook auth] error generating secure nonce for state')), o({
                success: !1
            })), (0, c.sessionStorageSetItem)('facebook_state', t);
            const n = new URL('/oauth_login_with_redirect', location.origin).href,
                s = (0, p.default)(`https://www.facebook.com/v17.0/dialog/oauth?client_id=138566025676&redirect_uri=${n}&state=${t}`, '_blank', 580, 600),
                u = setInterval((() => {
                    s ? .closed && clearInterval(u)
                }), 500),
                l = setInterval((() => {
                    $({
                        popup: s,
                        cookiePollId: l
                    }).then((t => o(t))).catch((t => ((0, k.warn)(`[facebook auth] error with the facebook popup: ${t}`), o({
                        success: !1
                    }))))
                }), 50)
        }))
    }, e.init = B, e.isFacebookLoaded = E, e.login = function(o) {
        return B().then((t => new Promise((n => t.login(n, o)))))
    }, e.parseXFBML = function(o) {
        return B().then((t => (t.XFBML && t.XFBML.parse(o), Promise.resolve())))
    }, e.reportFbError = function(o) {
        o.message !== P && (0, k.reportError)(o)
    }, e.ui = function(o) {
        return B().then((t => new Promise((n => t.ui(o, n)))))
    };
    var t = o(r(d[1])),
        n = o(r(d[2])),
        c = r(d[3]),
        s = o(r(d[4])),
        u = o(r(d[5])),
        l = o(r(d[6])),
        f = r(d[7]),
        k = r(d[8]),
        p = o(r(d[9])),
        _ = r(d[10]),
        b = o(r(d[11])),
        h = r(d[12]);
    const w = [],
        v = 1e4,
        F = "Facebook SDK isn't supported on this page",
        y = "Facebook SDK isn't enabled because the facebook_sdk_kill_switch trebuchet is enabled",
        P = "Facebook SDK isn't supported on this page because you have opted out of Facebook third party cookies.",
        C = 'FB SDK init timeout';

    function S(o) {
        for (window.FB.init({
                appId: o,
                status: !0,
                cookie: !0,
                oauth: !0,
                version: 'v6.0'
            }); w.length > 0;) w[0](window.FB), w.shift()
    }

    function E() {
        return !!window.FB
    }

    function I() {
        const o = n.default.get('facebook-init');
        document.querySelector(`script[src="${o.sdkUrl}"]`) || (window.fbAsyncInit = () => S(o.appId), window.Airbnb && (window.Airbnb.FACEBOOK_PERMS = o.scope), (0, s.default)(o.sdkUrl));
        const t = new Promise((o => w.push(o)));
        return (0, u.default)(t, v).catch((() => {
            throw (0, f.airdogCount)('facebook_sdk_init_timeout'), new Error(C)
        }))
    }

    function B() {
        const o = n.default.get('facebook-init');
        if (!o ? .enabled) return Promise.reject(new Error(F));
        if (b.default.getBootstrap('facebook_sdk_kill_switch')) return Promise.reject(new Error(y));
        if (E()) return Promise.resolve(window.FB);
        const c = t.default.tld_country();
        return b.default.getBootstrap('facebook_sdk_default_off_country_toggle') ? new Promise(((o, t) => {
            (0, l.default)({
                toolName: 'facebook.com',
                doesCookieHaveConsentCb: n => {
                    n ? ((0, f.airdogCount)('facebook_sdk.cookie_check', 1, [`country:${c}`, 'sdk_disabled:false']), I().then((t => o(t)))) : ((0, f.airdogCount)('facebook_sdk.cookie_check', 1, [`country:${c}`, 'sdk_disabled:true']), t(new Error(P)))
                }
            })
        })) : ((0, f.airdogCount)('facebook_sdk.no_cookie_check', 1, [`country:${c}`]), I())
    }

    function $({
        popup: o,
        cookiePollId: t
    }) {
        return new Promise(((n, s) => {
            o ? .closed && clearInterval(t);
            const u = (0, c.getCookieSync)('oauth_popup').value;
            if (!u) return;
            let l = {
                close_window: !1
            };
            try {
                l = JSON.parse(u)
            } catch (n) {
                o ? .close(), clearInterval(t), (0, c.deleteCookieAsync)('oauth_popup'), (0, f.airdogCount)('signup_login.oauth_popup_cookie_parse_failure'), s()
            }
            l.close_window && (o ? .close(), clearInterval(t), (0, c.deleteCookieAsync)('oauth_popup'), l.authCode && l.state && l.state === (0, c.sessionStorageGetItem)('facebook_state') ? n({
                success: !0,
                authCode: l.authCode
            }) : l.state !== (0, c.sessionStorageGetItem)('facebook_state') && (0, k.warn)('[facebook] state mismatch'), void 0 !== l.error && (0, k.reportError)(Error(`[facebook] authentication error: ${l.error} error_reason: ${l.errorReason} error_description: ${l.errorDescription}`)), n({
                success: !1
            }))
        }))
    }
}), "17c2da", ["ba7a76", "862e50", "ef2bc3", "13babd", "6b26d0", "9f8615", "e8f252", "3e4681", "f2f40f", "3ac569", "24220e", "c235f8", "f08ba7"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.FACEBOOK_ACTION_TYPE = void 0, Object.defineProperty(e, "autologinEnabled", {
        enumerable: !0,
        get: function() {
            return p.autologinEnabled
        }
    }), e.default = function() {
        if (!(0, _.getFacebookBootstrapData)()) return;
        (0, u.airdogCount)('facebook.js.get_login_status.started'), (0, _.getLoginStatus)().then((t => {
            const _ = l.default.getBootstrap('show_facebook_prompt_force');
            if (!_ && (0, f.getFacebookPromptShowCount)() >= f.MAX_FACEBOOK_PROMPT_SHOW)(0, f.disableFacebookAutologin)(), (0, u.airdogCount)('facebook.js.get_login_status.logout');
            else {
                if ((0, u.airdogCount)('facebook.js.get_login_status.response', 1, [`status:${t.status}`, `is_logged_in:${s.default.isLoggedIn()}`, `auto_login:${(0,p.autologinEnabled)()}`]), s.default.isLoggedIn()) return;
                'connected' !== t.status || !_ && (0, f.hasDismissedFacebookPrompt)() || (l.default.getBootstrap('api_web_client_migration.fejax.enabled') && !l.default.getBootstrap('api_web_client_migration.fejax.signup_login_dls_shared.kill_switch') ? (0, b().logMigration)(c().default.post('/users/facebook_auto_login', {
                    body: JSON.stringify({
                        check_linked_airbnb_account: !0
                    }),
                    headers: {
                        'X-Requested-With': 'XmlHttpRequest'
                    }
                }), {
                    method: 'POST',
                    client: 'niobe',
                    migrationId: 'signup_login_dls_shared',
                    group: 'fejax'
                }) : (0, b().logMigration)(o.default.post('/users/facebook_auto_login', {
                    check_linked_airbnb_account: !0
                }), {
                    method: 'POST',
                    client: 'fejax',
                    migrationId: 'signup_login_dls_shared',
                    group: 'fejax'
                })).then((t => {
                    t.has_linked_airbnb_account ? (n.default.emit('initializeFacebookPrompt'), (0, f.setFacebookPromptShowCount)()) : ((0, f.setHideFacebookPrompt)(), (0, f.disableFacebookAutologin)())
                }))
            }
        })).catch(_.reportFbError)
    }, Object.defineProperty(e, "hasDismissedFacebookPrompt", {
        enumerable: !0,
        get: function() {
            return f.hasDismissedFacebookPrompt
        }
    });
    var o = t(r(d[1])),
        n = t(r(d[2])),
        s = t(r(d[3])),
        u = r(d[4]),
        _ = r(d[5]),
        l = t(r(d[6]));

    function c() {
        const o = t(r(d[7]));
        return c = function() {
            return o
        }, o
    }

    function b() {
        const t = r(d[8]);
        return b = function() {
            return t
        }, t
    }
    var f = r(d[9]),
        p = r(d[10]);
    e.FACEBOOK_ACTION_TYPE = {
        NO_AUTOLOGIN_AND_PROMPT: 0,
        SHOW_FACEBOOK_PROMPT: 1,
        FACEBOOK_AUTO_LOGIN: 2
    }
}), "33f027", ["ba7a76", "c3984f", "abc3e4", "06a99e", "3e4681", "17c2da", "c235f8", "69a7c4", "7c530a", "6633c2", "1ec62e"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n, o, w, t) {
        const c = window.screenLeft ? window.screenLeft : window.screenX,
            s = window.screenTop ? window.screenTop : window.screenY,
            u = c + window.innerWidth / 2 - w / 2,
            f = s + window.innerHeight / 2 - t / 2;
        return window.open(n, o, `toolbar=0,menubar=0,width=${w},height=${t},left=${u},top=${f}`)
    }
}), "3ac569", []);
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
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.logMigration = function(t, c) {
        return Promise.resolve(t).then((() => u({ ...c,
            result: 'success'
        }))).catch((t => {
            u({ ...c,
                result: 'error',
                responseStatus: t ? .status,
                noError: !t
            }), o.default.getBootstrap('niobe.rest.error_logging.kill_switch') || !t || t.status && 200 !== t.status || ((0, s.airdogCount)('rest_migration.debug', 1, { ...c,
                responseStatus: t.status,
                responseStatusText: t.statusText,
                message: t.message || '',
                name: t.name || ''
            }), (0, n().reportNiobeError)(t, {
                fingerprint: ['niobe'],
                tags: { ...c
                }
            }))
        })).catch((() => {})), t
    };
    var s = r(d[1]),
        o = t(r(d[2]));

    function n() {
        const t = r(d[3]);
        return n = function() {
            return t
        }, t
    }

    function u(t) {
        (0, s.airdogCount)('rest_migration.request', 1, t)
    }
}), "7c530a", ["ba7a76", "3e4681", "c235f8", "8e002d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.buggyApolloCacheFragmentSelectionsWrite = function(n) {
        return t('NIOBE41')
    }, e.invalidNiobeClientType = function(n) {
        return t(`NIOBE04 [${n}]`)
    }, e.invalidNormalizationPatch = function() {
        return t('NIOBE42')
    }, e.invalidQueryRefError = function(n) {
        return t('NIOBE11')
    }, e.minimalistOperationGivenToApolloClient = function(n) {
        return t(`NIOBE51 [${n}]`)
    }, e.mismatchingNiobeClientType = function(n, o) {
        return t(`NIOBE05 [${n} ${o}]`)
    }, e.mismatchingQueryRef = function(n, o) {
        return t('NIOBE13')
    }, e.missingSerializedNiobeCache = function() {
        return t('NIOBE31')
    }, e.missingSubscriptionId = function(n) {
        return t(`NIOBE72 [${n}]`)
    }, e.niobeClientNotFoundFromContext = function(n) {
        return t(`NIOBE01 [${n}]`)
    }, e.noMatchingQueryRef = function(n) {
        return t('NIOBE12')
    }, e.receivedQueryRefForWrongClient = function({
        type: n
    }, {
        type: o
    }) {
        return t(`NIOBE03 [${n} ${o}]`)
    }, e.reportNiobeError = o, e.ssrTimeoutError = function(n, o) {
        return t(`NIOBE52 [${n}]`)
    }, e.throwNiobeError = function(n) {
        throw n
    }, e.unexpectedlyLoadingObservable = function(n) {
        return t('NIOBE29')
    }, e.unexpectedlyUnloadedPrepareLoader = function() {
        return t('NIOBE21')
    }, e.unparseableSubscriptionMessage = function(n) {
        return t(`NIOBE71 [${n}]`)
    }, e.warnNiobeError = function(n, t) {
        o(n, t)
    };
    var n = r(d[0]);

    function t(t) {
        return new n.PineappleError(t, {
            fingerprint: ['niobe']
        })
    }

    function o(t, o) {
        (0, n.reportError)(t, o)
    }
}), "8e002d", ["f2f40f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, o) {
        const n = new Promise(((t, n) => {
            setTimeout((() => n(new Error(`Timeout after ${o}ms`))), o)
        }));
        return Promise.race([t, n])
    }
}), "9f8615", []);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/signup-login-dls-shared/utils/getFacebookLoginStatus.729f928283.js.map