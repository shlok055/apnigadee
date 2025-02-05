__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n, c) {
        const p = (0, s.default)(),
            v = (0, o.useNaviInternalContext)();
        return (0, t.useEffect)((() => (p((() => `Creating scope "${n}"`)), v.addScope(n, c), () => {
            p((() => `Unmounting scope "${n}" and cleaning up`)), v.removeScope(n)
        })), []), (0, t.useEffect)((() => {
            v.updateScopeDependencies(n, c)
        }), [c]), u(n)
    }, e.useExistingScope = void 0;
    var t = r(d[1]),
        o = r(d[2]),
        s = n(r(d[3]));

    function u(n) {
        const s = (0, o.useNaviInternalContext)();
        return (0, t.useMemo)((() => ({
            registerPresenter: t => s.registerPresenter(t, n),
            removePresenter: t => s.removePresenter(t, n),
            scheduleAnnouncement: t => s.scheduleAnnouncement(t, n),
            scheduleAnnouncements: t => s.scheduleAnnouncements(t, n),
            removeAnnouncement: t => s.removeAnnouncement(t, n),
            startPresentation: () => s.startPresentation(n),
            reset: () => s.resetScope(n),
            remove: () => s.removeScope(n)
        })), [])
    }
    e.useExistingScope = u
}), "014366", ["ba7a76", "07aa1f", "84f4fe", "c809cd"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getAnnouncementId = e.getAnnouncement = e.default = e.coerceToFutureAnnouncement = e.FutureAnnouncementSingleDevice = void 0;
    var t = n(r(d[1])),
        c = n(r(d[2]));
    class u extends t.default {
        constructor(...n) {
            super(...n), this.announcement = void 0, this.timer = void 0
        }
        ready() {
            super.resolve(this.announcement), this.clearTimeout()
        }
        cancel() {
            super.reject(), this.clearTimeout()
        }
        startTimeout() {}
        clearTimeout() {
            this.timer && clearTimeout(this.timer)
        }
    }
    class o extends u {
        constructor(n) {
            super(), this.announcement = new c.default.SingleDevice(n)
        }
    }
    e.FutureAnnouncementSingleDevice = o;
    class s extends u {
        constructor(n) {
            super(), this.announcement = new c.default(n)
        }
    }
    e.default = s, s.SingleDevice = o;
    e.coerceToFutureAnnouncement = n => {
        if (n instanceof s || n instanceof o) return n;
        const t = n instanceof c.default ? new s(n) : new s.SingleDevice(n);
        return t.ready(), t
    };
    const l = n => n instanceof s || n instanceof o ? n.announcement : n;
    e.getAnnouncement = l;
    e.getAnnouncementId = n => l(n).id
}), "068775", ["ba7a76", "0af475", "f4362a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    e.default = class {
        constructor() {
            this.promise = void 0, this.isFulfilled = !1, this.promiseResolve = void 0, this.promiseReject = void 0, this.isFulfilled = !1, this.promise = new Promise(((s, t) => {
                this.promiseResolve = s, this.promiseReject = t
            }))
        }
        resolve(s) {
            return this.isFulfilled || (this.isFulfilled = !0, this.promiseResolve(s)), this
        }
        reject(s) {
            return this.promiseReject(s), this
        }
        then(...s) {
            return this.promise.then(...s)
        } catch (s) {
            return this.promise.catch(s)
        }
    }
}), "0af475", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isEqualSet = void 0;
    e.isEqualSet = (s, t) => s.size === t.size && [...s].every((s => t.has(s)))
}), "1a5f67", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var _ = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.HOST_TOS_ANNOUNCEMENT_ID = void 0;
    var N = _(r(d[1]));
    const t = e.HOST_TOS_ANNOUNCEMENT_ID = 'HOST_TOS_ANNOUNCEMENT_ID',
        O = new N.default(t);
    e.default = O
}), "20f028", ["ba7a76", "cee790"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const n = (0, y.default)(),
            s = (0, l().useNiobeMinimalistClient)(),
            [O] = (0, l().useMinimalistMutation)(S.default),
            _ = (0, t.useRef)(new Map),
            b = (0, t.useRef)(new Map),
            R = n => n.expirationUtcDateTime && new Date(n.expirationUtcDateTime) < new Date,
            U = (0, t.useCallback)((t => {
                const o = P(t),
                    c = b.current.get(o);
                if (c && !R(c)) return c;
                const s = (0, p.localStorageGetItem)(I()),
                    u = s ? .[o];
                return n((() => s && u ? [`Local storage cache found for ${o}`, u] : [`No local storage cache found for ${o}`])), u && !R(u) ? u : null
            }), []),
            $ = (0, t.useCallback)(((t, o) => {
                const c = P(t);
                b.current.set(c, o);
                const s = I(),
                    u = (0, p.localStorageGetItem)(s) || {};
                u[c] = o, n((() => [`Update local storage cache for ${c}`, u[c]])), (0, p.localStorageSetItem)(s, u, {
                    expires: A
                })
            }), []),
            x = (0, t.useCallback)(((n, t) => {
                const o = U(n);
                $(n, {
                    impressionCount: (o ? .impressionCount || 0) + 1,
                    createdAtUtcDateTime: (new Date).toISOString(),
                    expirationUtcDateTime: t
                })
            }), []),
            k = (0, t.useCallback)((async n => {
                const t = await s.query({
                        query: f.default,
                        variables: {
                            impressionId: n.id,
                            discriminator: n.discriminator
                        }
                    }),
                    o = t ? .data ? .viewer ? .naviAnnouncementImpressionInfo;
                if (!o) throw _.current.delete(P(n)), new Error('No impression data returned from server');
                return o
            }), []),
            E = (0, t.useCallback)((n => {
                const t = P(n),
                    o = _.current.get(t);
                if (o) return o;
                const c = k(n);
                return _.current.set(t, c), c
            }), []),
            T = n => {
                const t = C(n.id);
                return t || (n.impressionPolicy ? .forceDiscard ? v.AnnouncementShowState.DROP : n.impressionPolicy ? .forceShow ? v.AnnouncementShowState.SHOW : 'maxCap' in n.impressionPolicy ? void 0 : v.AnnouncementShowState.SHOW)
            },
            H = (n, t) => 'maxCap' in n.impressionPolicy && t.impressionCount >= n.impressionPolicy ? .maxCap,
            M = (0, t.useCallback)((async t => {
                const o = T(t);
                if (o) return o;
                const c = U(t);
                if (c && H(t, c)) return n((() => [`Dropping ${t.id} (cache)`, c])), v.AnnouncementShowState.DROP;
                if (t instanceof h.SingleDeviceAnnouncement) return v.AnnouncementShowState.SHOW;
                let s;
                try {
                    s = await E(t)
                } catch (o) {
                    return n((() => [`Error fetching ${t.id}:`, o])), t.choreographyInfo.priority === v.Priority.POISON_PILL || t.choreographyInfo.priority === v.Priority.LEGAL ? v.AnnouncementShowState.SHOW : v.AnnouncementShowState.DROP
                }
                return n((() => [`Updating cache ${t.id} with fresh`, s])), $(t, s), H(t, s) ? (n((() => [`Dropping ${t.id} (server)`, s])), v.AnnouncementShowState.DROP) : v.AnnouncementShowState.SHOW
            }), []),
            N = (0, t.useCallback)((t => {
                const o = (0, w.getAnnouncement)(t);
                if (T(o)) return;
                const c = U(o);
                c && H(o, c) || o instanceof h.SingleDeviceAnnouncement || (n((() => `Starting impression request for ${o.id}`)), E(o).catch((() => {})))
            }), []),
            W = (0, t.useCallback)((async t => {
                const {
                    id: s,
                    discriminator: l,
                    campaignEndUtcDateTime: p,
                    impressionPolicy: f
                } = t;
                n((() => `Recording impression for ${s}`));
                let S = null;
                if ('impressionExpirationUtcDateTime' in f && (S = f.impressionExpirationUtcDateTime), x(t, S), u.default.logJitneyEvent({
                        schema: c().UniversalComponentImpressionEvent,
                        event_data: {
                            uuid: (0, o().v4)(),
                            logging_id: (0, D.jitneyId)(t),
                            component: (0, D.jitneyId)(t),
                            ancestor_uuids: [],
                            ancestor_logging_ids: []
                        }
                    }), t instanceof h.SingleDeviceAnnouncement) return;
                const w = await O({
                    variables: {
                        impressionId: s,
                        discriminator: l,
                        uuid: (0, o().v4)(),
                        impressionExpirationUtcDateTime: S || p
                    }
                });
                'NaviAnnouncementImpressionInfo' === w.data ? .recordNaviAnnouncementView ? .__typename && $(t, w.data.recordNaviAnnouncementView)
            }), []),
            L = (0, t.useCallback)((() => {
                _.current.clear()
            }), []);
        return (0, t.useMemo)((() => ({
            startImpressionRequest: N,
            shouldShowAnnouncement: M,
            recordImpression: W,
            clearRequestCache: L
        })), [])
    };
    var t = r(d[1]);

    function o() {
        const n = r(d[2]);
        return o = function() {
            return n
        }, n
    }

    function c() {
        const n = r(d[3]);
        return c = function() {
            return n
        }, n
    }
    var s = n(r(d[4])),
        u = n(r(d[5]));

    function l() {
        const n = r(d[6]);
        return l = function() {
            return n
        }, n
    }
    var p = r(d[7]),
        f = n(r(d[8])),
        S = n(r(d[9])),
        h = r(d[10]),
        w = r(d[11]),
        v = r(d[12]),
        D = r(d[13]),
        y = n(r(d[14]));
    const A = 31536e6;

    function I() {
        return `navi_announcements_impressions_${s.default.current().idStr||'logged_out'}`
    }
    const P = ({
            id: n,
            discriminator: t
        }) => t ? `${n}_${t}` : n,
        C = n => {
            {
                const t = new URL(document.location.href).searchParams.get('naviDebugPolicies');
                if (!t) return;
                const o = t.split(',').map((n => n.split(':'))).find((([t]) => t === n)) ? .[1];
                if ('SHOW' === o) return v.AnnouncementShowState.SHOW;
                if ('DROP' === o) return v.AnnouncementShowState.DROP
            }
        }
}), "2b4782", ["ba7a76", "07aa1f", "305dd5", "60aeb4", "06a99e", "c8b97a", "068abc", "13babd", "a6a446", "386890", "f4362a", "068775", "af724a", "a8aa8f", "c809cd"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.naviAppTargets = void 0;
    e.naviAppTargets = ["EXPERIENCE_HOST", "GUEST", "HOST"]
}), "32d13a", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default,
        t = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const n = (0, f.default)(_.GLOBAL_SCOPE_ID),
            {
                loading: t,
                announcements: h
            } = (0, c.default)({
                variables: {
                    appTarget: _.AppTarget.EXPERIENCE_HOST
                },
                skip: !l.Flagger.isTrebuchetLaunched((0, o.default)('web.navi_server_announcements.exp_host'))
            });
        return (0, u.useEffect)((() => {
            !t && h.length && n.scheduleAnnouncements(h), (0, E.isUserConsentEnabled)() && (n.registerPresenter(E.default), n.scheduleAnnouncement(new s.default.SingleDevice({
                id: E.USER_CONSENT_ANNOUNCEMENT_ID,
                campaignEndUtcDateTime: null,
                impressionPolicy: new p.AlwaysShowPolicy,
                choreographyInfo: {
                    priority: _.Priority.LEGAL,
                    groupInfo: {
                        groupName: 'aaa_global',
                        sequenceOrder: 1
                    }
                }
            }))), t || n.startPresentation()
        }), [t, h]), null
    };
    var u = r(d[2]),
        l = r(d[3]),
        o = t(r(d[4])),
        s = t(r(d[5])),
        c = t(r(d[6])),
        f = t(r(d[7])),
        _ = r(d[8]),
        p = r(d[9]),
        E = n(r(d[10]))
}), "35567a", ["45f788", "ba7a76", "07aa1f", "dcc72a", "2c6bf9", "068775", "379789", "014366", "af724a", "fc4d8f", "ed263e"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n = {}) {
        const {
            loading: s,
            data: l
        } = (0, o().useMinimalistClientSideQuery)(c.default, { ...n
        }), v = (0, t.useMemo)((() => (l ? .presentation ? .naviAnnouncements || []).map((({
            id: n,
            ...t
        }) => 'CrossDeviceNaviAnnouncementId' === n.__typename ? new u.default({ ...t,
            id: n.crossDeviceAnnouncementId,
            discriminator: n.discriminator || void 0
        }) : new u.default.SingleDevice({ ...t,
            id: n.localDeviceAnnouncementId
        })))), [l]);
        return {
            loading: s,
            data: l,
            announcements: v
        }
    };
    var t = r(d[1]);

    function o() {
        const n = r(d[2]);
        return o = function() {
            return n
        }, n
    }
    var u = n(r(d[3])),
        c = n(r(d[4]))
}), "379789", ["ba7a76", "07aa1f", "068abc", "f4362a", "c6ac87"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = t(r(d[1]));
    const o = {
        document: void 0,
        getDocument: () => r(d[3])(d[2]).then(n.default).then((t => t.default)),
        name: 'RecordNaviAnnouncementView',
        type: 'mutation',
        operationId: 'aade9d0a651edc2144a18d8d72447202b083786fbd97021889e097e13834b55e'
    };
    e.default = o
}), "386890", ["ba7a76", "45f788", "5c48ba", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.COOKIE_BANNER_INITIALLY_NEEDED = e.COOKIE_BANNER_DISMISSED = void 0;
    var E = r(d[0]);
    e.COOKIE_BANNER_DISMISSED = (0, E.createUIKey)('user-consent-cookie-banner-dismissed', {
        getDefault: () => !1
    }), e.COOKIE_BANNER_INITIALLY_NEEDED = (0, E.createUIKey)('user-consent-cookie-banner-initially-needed', {
        getDefault: () => {}
    })
}), "43856a", ["005fd5"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default,
        t = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "AppTarget", {
        enumerable: !0,
        get: function() {
            return b.AppTarget
        }
    }), Object.defineProperty(e, "NaviAnnouncement", {
        enumerable: !0,
        get: function() {
            return u.default
        }
    }), Object.defineProperty(e, "NaviAnnouncementPages", {
        enumerable: !0,
        get: function() {
            return b.NaviAnnouncementPages
        }
    }), Object.defineProperty(e, "NaviPresenter", {
        enumerable: !0,
        get: function() {
            return o.default
        }
    }), Object.defineProperty(e, "PresentationResult", {
        enumerable: !0,
        get: function() {
            return b.PresentationResult
        }
    }), Object.defineProperty(e, "Priority", {
        enumerable: !0,
        get: function() {
            return b.Priority
        }
    }), Object.defineProperty(e, "SingleDeviceAnnouncement", {
        enumerable: !0,
        get: function() {
            return u.SingleDeviceAnnouncement
        }
    }), Object.defineProperty(e, "usePage", {
        enumerable: !0,
        get: function() {
            return f.default
        }
    }), Object.defineProperty(e, "usePresenter", {
        enumerable: !0,
        get: function() {
            return c.usePresenter
        }
    }), Object.defineProperty(e, "useScope", {
        enumerable: !0,
        get: function() {
            return l.default
        }
    });
    t(r(d[2]));
    var u = n(r(d[3])),
        o = (n(r(d[4])), t(r(d[5]))),
        c = (r(d[6]), r(d[7])),
        f = t(r(d[8])),
        l = n(r(d[9])),
        b = (t(r(d[10])), r(d[11]))
}), "502fde", ["45f788", "ba7a76", "fd91b8", "f4362a", "068775", "cee790", "fc4d8f", "570e40", "834679", "014366", "c7e43f", "af724a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return t.filter((o => !o.presentationResult)).filter((n => n.showState !== o.AnnouncementShowState.DROP)).map(((o, n) => [o, n])).sort(n).map((([o]) => o))
    };
    var o = r(d[0]);

    function n([{
        choreographyInfo: {
            priority: n,
            groupInfo: t
        }
    }, u], [{
        choreographyInfo: {
            priority: p,
            groupInfo: f
        }
    }, c]) {
        const s = o.PRIORITY_RANK.indexOf(n),
            l = o.PRIORITY_RANK.indexOf(p);
        return s !== l ? s - l : t && !f ? -1 : !t && f ? 1 : t && f ? t.groupName !== f.groupName ? (I = t.groupName, O = f.groupName, I ? O ? I.localeCompare(O, 'en') : -1 : 1) : t.sequenceOrder - f.sequenceOrder : u - c;
        var I, O
    }
}), "53350f", ["af724a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        const u = (0, n.useLegacyNaviState)();
        return c(t, u)
    }, e.usePresenter = function(t) {
        const u = (0, n.useNaviState)();
        return c(t, u)
    };
    var t = r(d[0]),
        n = r(d[1]),
        u = r(d[2]);

    function c(n, c) {
        const {
            currentAnnouncement: s,
            markAsViewed: o,
            markAsComplete: l
        } = c, [f, k] = (0, t.useState)(!1), A = (0, t.useRef)(), S = (0, t.useRef)(!1), v = (0, t.useRef)(!1);
        (0, t.useEffect)((() => {
            s && n.canHandleAnnouncement(s.id, s.content) && !A.current ? (k(!0), A.current = s) : !s && A.current && (k(!1), A.current = void 0, S.current = !1, v.current = !1)
        }), [s]);
        const R = (0, t.useCallback)((() => {
                A.current && !S.current && (S.current = !0, o(A.current))
            }), []),
            C = (0, t.useCallback)(((t = u.PresentationResult.DISMISSED) => {
                A.current && !v.current && (v.current = !0, l(A.current, t))
            }), []);
        return (0, t.useMemo)((() => ({
            shouldRender: f,
            content: A.current ? .content,
            markAsViewed: R,
            markAsComplete: C
        })), [f])
    }
}), "570e40", ["07aa1f", "9836eb", "af724a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default,
        t = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const n = (0, f.default)(_.GLOBAL_SCOPE_ID),
            {
                loading: t,
                announcements: b
            } = (0, c.default)({
                variables: {
                    appTarget: _.AppTarget.HOST
                },
                skip: !o.Flagger.isTrebuchetLaunched((0, s.default)('web.navi_server_announcements.host'))
            });
        return (0, l.useEffect)((() => {
            !t && b.length && n.scheduleAnnouncements(b), o.Flagger.isTrebuchetLaunched((0, s.default)('navi_migration.host_terms_of_service.launch.web')) && (n.registerPresenter(E.default), n.scheduleAnnouncement(new h.default.SingleDevice({
                id: E.HOST_TOS_ANNOUNCEMENT_ID,
                campaignEndUtcDateTime: null,
                impressionPolicy: new p.AlwaysShowPolicy,
                choreographyInfo: {
                    priority: _.Priority.LEGAL,
                    groupInfo: {
                        groupName: 'aaa_global',
                        sequenceOrder: 1
                    }
                }
            }))), (0, y.isUserConsentEnabled)() && (n.registerPresenter(y.default), n.scheduleAnnouncement(new h.default.SingleDevice({
                id: y.USER_CONSENT_ANNOUNCEMENT_ID,
                campaignEndUtcDateTime: null,
                impressionPolicy: new p.AlwaysShowPolicy,
                choreographyInfo: {
                    priority: _.Priority.LEGAL,
                    groupInfo: {
                        groupName: 'aaa_global',
                        sequenceOrder: 2
                    }
                }
            }))), (0, N.isGlobalBannerEnabled)() && n.registerPresenter(N.default), t || n.startPresentation()
        }), [t, b]), (0, T.jsx)(u.default, {
            children: (0, T.jsx)(P.default, {})
        })
    };
    var l = t(r(d[2])),
        o = r(d[3]),
        s = n(r(d[4])),
        u = n(r(d[5])),
        c = n(r(d[6])),
        f = n(r(d[7])),
        _ = r(d[8]),
        h = n(r(d[9])),
        p = r(d[10]),
        E = t(r(d[11])),
        y = t(r(d[12])),
        N = t(r(d[13])),
        P = n(r(d[14])),
        T = r(d[15])
}), "620971", ["ba7a76", "45f788", "07aa1f", "dcc72a", "2c6bf9", "d368ab", "379789", "014366", "af724a", "068775", "fc4d8f", "20f028", "ed263e", "c57e59", "7a7dcb", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n) {
        const f = (0, s.default)(),
            R = (0, t.useRef)(new Map),
            y = (n, t) => {
                R.current.set(n, {
                    id: n,
                    presenters: new Set,
                    announcements: new Map,
                    dependencies: new Set(t),
                    isReady: !1
                })
            },
            v = (0, t.useRef)(new Map),
            w = n => {
                const t = 'string' == typeof n ? n : (0, l.getAnnouncementId)(n);
                return v.current.get(t) || (new o.default).resolve(!1)
            },
            A = n => R.current.get(n),
            S = () => [...R.current.values()],
            $ = (n, t) => {
                const c = A(n);
                if (!c) return;
                const s = new Set(t);
                (0, u.isEqualSet)(s, c.dependencies) || (c.dependencies = s, f((() => [`Updating scope "${n}" dependencies:`, t])))
            },
            D = n => {
                const t = A(n);
                t && !t ? .isReady && (t.isReady = !0, f((() => `Marking scope ${n} as ready`)))
            },
            h = () => p(c.GLOBAL_SCOPE_ID, R.current),
            E = n => {
                const t = A(n);
                t && (f((() => `Removing scope ${n}`)), R.current.delete(n), t.announcements.forEach((n => {
                    n.clearTimeout(), v.current.delete(n.announcement.id)
                })))
            },
            T = n => {
                const t = A(n);
                t && (f((() => `Resetting scope ${n}`)), t.isReady = !1, t.announcements.forEach((n => {
                    n.clearTimeout(), v.current.delete(n.announcement.id)
                })), t.announcements.clear(), t.presenters.clear())
            },
            M = (n, t) => {
                A(t) ? .presenters.has(n) || (f((() => `Registering presenter: "${n}" -> ${t}`)), A(t) ? .presenters.add(n))
            },
            _ = (n, t) => {
                A(t) ? .presenters.has(n) && (f((() => `Removing presenter: "${n}" -> ${t}`)), A(t) ? .presenters.delete(n))
            },
            P = () => S().filter((n => n.isReady)).filter((n => p(n.id, R.current))).map((n => [...n.presenters])).flat(),
            U = (n, t) => {
                const c = (0, l.coerceToFutureAnnouncement)(n),
                    {
                        announcement: s
                    } = c,
                    u = A(t);
                if (!u || u.announcements.has(s.id)) return !1;
                if (s.campaignEndUtcDateTime && new Date > new Date(s.campaignEndUtcDateTime)) return f((() => [`Skipping "${s.id}" due to expiration`, s])), w(s.id).resolve(!1), !1;
                u.announcements.set(s.id, c), f((() => [`Scheduling announcement ${s.id} to scope ${t}`, s, u.announcements]));
                const p = new o.default;
                return v.current.set(s.id, p), !0
            },
            I = (n, t) => {
                const c = A(t);
                c && (c.announcements.get(n) ? .clearTimeout(), c.announcements.delete(n), v.current.delete(n))
            },
            O = () => S().filter((n => n.isReady)).filter((n => p(n.id, R.current))).map((n => [...n.announcements.values()])).flat().filter((t => {
                const c = t.announcement ? .filterInfo ? .pages;
                return !c ? .length || n.current && c.includes(n.current)
            })),
            b = () => new Set(O().map((n => n.announcement.id))),
            k = () => {
                const n = O(),
                    t = P();
                return n.filter((({
                    announcement: n
                }) => !!t.find((t => t.canHandleAnnouncement(n.id, n.content))))).filter((({
                    announcement: n
                }) => null === n.campaignEndUtcDateTime || new Date(n.campaignEndUtcDateTime) > new Date))
            },
            G = n => S().map((n => [...n.announcements.values()])).flat().find((t => t.announcement.id === n));
        return (0, t.useMemo)((() => ({
            add: y,
            get: A,
            all: S,
            updateDependencies: $,
            remove: E,
            reset: T,
            ready: D,
            isGlobalReady: h,
            ref: R,
            registerPresenter: M,
            removePresenter: _,
            getReadyPresenters: P,
            addAnnouncement: U,
            removeAnnouncement: I,
            getReadyAnnouncements: O,
            getScheduledAnnouncementIds: b,
            getSupportedAnnouncements: k,
            findAnnouncement: G,
            getAnnouncementResult: w
        })), [])
    };
    var t = r(d[1]),
        c = r(d[2]),
        s = n(r(d[3])),
        u = r(d[4]),
        o = n(r(d[5])),
        l = r(d[6]);

    function p(n, t, c = new Set) {
        const s = t.get(n);
        return !(!s || !s.isReady) && (!!c.has(n) || (c.add(n), [...s.dependencies].every((n => p(n, t, c)))))
    }
}), "762889", ["ba7a76", "07aa1f", "af724a", "c809cd", "1a5f67", "0af475", "068775"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default,
        t = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const n = (0, c.default)(p.GLOBAL_SCOPE_ID),
            {
                loading: t,
                announcements: h
            } = (0, o.default)({
                variables: {
                    appTarget: p.AppTarget.GUEST
                },
                skip: !l.Flagger.isTrebuchetLaunched((0, s.default)('web.navi_server_announcements.guest'))
            });
        return (0, u.useEffect)((() => {
            !t && h.length && n.scheduleAnnouncements(h), (0, E.isUserConsentEnabled)() && (n.registerPresenter(E.default), n.scheduleAnnouncement(new f.default.SingleDevice({
                id: E.USER_CONSENT_ANNOUNCEMENT_ID,
                campaignEndUtcDateTime: null,
                impressionPolicy: new _.AlwaysShowPolicy,
                choreographyInfo: {
                    priority: p.Priority.LEGAL,
                    groupInfo: {
                        groupName: 'aaa_global',
                        sequenceOrder: 1
                    }
                }
            }))), t || n.startPresentation()
        }), [t, h]), null
    };
    var u = r(d[2]),
        l = r(d[3]),
        s = t(r(d[4])),
        o = t(r(d[5])),
        c = t(r(d[6])),
        f = t(r(d[7])),
        p = r(d[8]),
        _ = r(d[9]),
        E = n(r(d[10]))
}), "77b657", ["45f788", "ba7a76", "07aa1f", "dcc72a", "2c6bf9", "379789", "014366", "068775", "af724a", "fc4d8f", "ed263e"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        l = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const {
            shouldRender: t
        } = (0, c.usePresenter)(o.default);
        return t ? (0, h.jsx)(s.default, {
            children: (0, h.jsx)(n.default, {
                loader: j,
                renderPlaceholder: n.renderNull
            })
        }) : null
    };
    var u = l(r(d[0])),
        n = (l(r(d[2])), t(r(d[3]))),
        f = l(r(d[4])),
        s = l(r(d[5])),
        c = r(d[6]),
        o = l(r(d[7])),
        h = r(d[8]);
    const j = Object.assign((0, f.default)((() => r(d[10])(d[9]).then(u.default))), {
        prefetch: () => r(d[10]).prefetch(d[9])
    })
}), "7a7dcb", ["45f788", "ba7a76", "07aa1f", "b96ee5", "b4385c", "d368ab", "570e40", "c57e59", "b8c07d", "40415e", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.NaviInternalApiContext = e.LegacyNaviApiContext = void 0;
    var n = r(d[0]);

    function t() {}(e.LegacyNaviApiContext = (0, n.createContext)({
        registerPresenter: t,
        removePresenter: t,
        scheduleAnnouncement: t,
        scheduleAnnouncements: t,
        removeAnnouncement: t,
        startPresentation: t,
        onPageExit: t,
        resetPage: t
    })).displayName = 'LegacyNaviApiContext';
    const o = e.NaviInternalApiContext = (0, n.createContext)({
        addScope: t,
        removeScope: t,
        resetScope: t,
        updateScopeDependencies: t,
        registerPresenter: t,
        removePresenter: t,
        scheduleAnnouncement: () => Promise.resolve(!1),
        scheduleAnnouncements: () => Promise.all([]),
        removeAnnouncement: t,
        findAnnouncement: () => {},
        startPresentation: t,
        onPageEnter: t,
        onPageExit: t,
        resetPage: t
    });
    o.displayName = 'NaviInternalApiContext';
    e.default = o
}), "7b3437", ["07aa1f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, s) {
        const f = (0, o.useNaviInternalContext)(),
            c = (0, u.default)(t, s);
        return (0, n.useEffect)((() => (f.onPageEnter(t), () => f.onPageExit(t))), []), (0, n.useMemo)((() => ({ ...c,
            reset: () => f.resetPage(t),
            remove: () => f.onPageExit(t)
        })), [])
    };
    var n = r(d[1]),
        u = t(r(d[2])),
        o = r(d[3])
}), "834679", ["ba7a76", "07aa1f", "014366", "84f4fe"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        return (0, t.useContext)(n.LegacyNaviApiContext)
    }, e.useNaviInternalContext = function() {
        return (0, t.useContext)(n.NaviInternalApiContext)
    };
    var t = r(d[0]),
        n = r(d[1])
}), "84f4fe", ["07aa1f", "7b3437"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default,
        t = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        children: n,
        impressionManager: t
    }) {
        const [v, I] = (0, c.useState)(null), _ = (0, c.useRef)(new Set), k = (0, c.useRef)(new Map), C = (0, c.useRef)([]), b = (0, c.useRef)(f.OrchestrationState.SETUP), E = (0, l.useDebugLogger)('Navi'), D = (0, c.useCallback)((() => {
            const n = [...k.current.values()],
                t = [..._.current],
                c = n.filter((n => !!t.find((t => t.canHandleAnnouncement(n.id, n.content))))).filter((n => null === n.campaignEndUtcDateTime || new Date(n.campaignEndUtcDateTime) > new Date));
            return (0, S.default)(c)
        }), []), O = (0, c.useCallback)((async (n = !1) => {
            if (b.current === f.OrchestrationState.ACTIVE && !n) return;
            b.current = f.OrchestrationState.ACTIVE, E((() => 'Starting orchestration, selecting top announcement'));
            let c = !1;
            for (const n of D()) {
                const s = await t.shouldShowAnnouncement(n);
                if (n.showState = s, s === f.AnnouncementShowState.SHOW) {
                    if (n.choreographyInfo.presentationRestriction === f.PresentationRestrictions.SHOW_ONLY_IF_FIRST_IN_PAGE && C.current.length > 0) {
                        E((() => ['Suppressing announcement due to presentation restriction', n])), c = !1;
                        break
                    }
                    if (n.choreographyInfo.presentationRestriction === f.PresentationRestrictions.SHOW_ONLY_IF_FIRST_NON_SHOW_ALWAYS && C.current.some((n => n.choreographyInfo.presentationRestriction !== f.PresentationRestrictions.SHOW_ALWAYS))) {
                        E((() => ['Suppressing announcement due to presentation restriction', n])), c = !1;
                        break
                    }
                    E((() => ['Presenting announcement', n])), I(n), c = !0;
                    break
                }
            }
            c || (b.current = f.OrchestrationState.WAITING)
        }), []), P = (0, c.useCallback)((n => {
            _.current.has(n) || (_.current.add(n), E((() => ['Registering presenter', n, _.current])))
        }), []), T = (0, c.useCallback)((n => {
            _.current.has(n) && (_.current.delete(n), E((() => ['Removing presenter', n, _.current])))
        }), []), w = (0, c.useCallback)((n => {
            n.campaignEndUtcDateTime && new Date > new Date(n.campaignEndUtcDateTime) ? E((() => ['Skipping announcement due to expiration', n])) : k.current.has(n.id) || (k.current.set(n.id, n), E((() => ['Scheduling announcement', n, k.current])), t.startImpressionRequest(n), b.current === f.OrchestrationState.WAITING && O(!0))
        }), []), N = (0, c.useCallback)((n => {
            let c = !1;
            n.forEach((n => {
                n.campaignEndUtcDateTime && new Date > new Date(n.campaignEndUtcDateTime) ? E((() => ['Skipping announcement due to expiration', n])) : k.current.has(n.id) || (k.current.set(n.id, n), c = !0, E((() => ['Scheduling announcement', n, k.current])), t.startImpressionRequest(n))
            })), c && b.current === f.OrchestrationState.WAITING && O(!0)
        }), []), W = (0, c.useCallback)((n => {
            k.current.has(n.id) && (k.current.delete(n.id), E((() => ['Removing announcement', n, k.current])))
        }), []), y = (0, c.useCallback)((() => O()), []), U = (0, c.useCallback)((() => {
            E((() => 'Resetting page')), _.current.clear(), k.current.clear(), C.current = [], t.clearRequestCache(), I(null), b.current = f.OrchestrationState.SETUP
        }), []), x = (0, c.useCallback)((() => {
            E((() => 'Exiting page')), U()
        }), []), L = (0, c.useMemo)((() => ({
            scheduleAnnouncement: w,
            scheduleAnnouncements: N,
            removeAnnouncement: W,
            registerPresenter: P,
            removePresenter: T,
            startPresentation: y,
            resetPage: U,
            onPageExit: x
        })), []), H = (0, c.useCallback)((n => {
            t.recordImpression(n)
        }), []), M = (0, c.useCallback)(((n, t) => {
            E((() => `Marking ${n.id} as complete (${t})`)), n.presentationResult = t, t !== f.PresentationResult.DISCARDED && (C.current.push(n), o.default.logJitneyEvent({
                schema: u().UniversalComponentActionEvent,
                event_data: {
                    logging_id: (0, A.jitneyId)(n, t),
                    ancestor_logging_ids: [],
                    ancestor_uuids: [],
                    method: 'dismissed',
                    uuid: (0, s().v4)(),
                    operation: 9
                }
            })), I(null), O(!0)
        }), []), j = (0, c.useMemo)((() => ({
            currentAnnouncement: v,
            markAsViewed: H,
            markAsComplete: M
        })), [v]);
        return (0, R.jsx)(p.LegacyNaviApiContext.Provider, {
            value: L,
            children: (0, R.jsx)(h.LegacyNaviStateContext.Provider, {
                value: j,
                children: n
            })
        })
    };
    var c = t(r(d[2]));

    function s() {
        const n = r(d[3]);
        return s = function() {
            return n
        }, n
    }

    function u() {
        const n = r(d[4]);
        return u = function() {
            return n
        }, n
    }
    var o = n(r(d[5])),
        l = r(d[6]),
        p = r(d[7]),
        h = r(d[8]),
        S = n(r(d[9])),
        f = r(d[10]),
        A = r(d[11]),
        R = r(d[12])
}), "8c2963", ["ba7a76", "45f788", "07aa1f", "305dd5", "59c871", "c8b97a", "f8ea9a", "7b3437", "9836eb", "53350f", "af724a", "a8aa8f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.NaviStateContext = e.LegacyNaviStateContext = void 0, e.useLegacyNaviState = function() {
        return (0, t.useContext)(n)
    }, e.useNaviState = function() {
        return (0, t.useContext)(o)
    };
    var t = r(d[0]);
    const n = e.LegacyNaviStateContext = (0, t.createContext)({
        currentAnnouncement: null,
        markAsViewed: () => {},
        markAsComplete: () => {}
    });
    n.displayName = 'LegacyNaviStateContext';
    const o = e.NaviStateContext = (0, t.createContext)({
        currentAnnouncement: null,
        markAsViewed: () => {},
        markAsComplete: () => {}
    });
    o.displayName = 'NaviStateContext'
}), "9836eb", ["07aa1f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = t(r(d[1]));
    const f = {
        document: void 0,
        getDocument: () => r(d[3])(d[2]).then(n.default).then((t => t.default)),
        name: 'AnnouncementImpressionInfo',
        type: 'query',
        operationId: '1fc7ebbfcc39bd532a9e5d40a585a65e09b7b95308f2a7e8f7d3bac6db63df43'
    };
    e.default = f
}), "a6a446", ["ba7a76", "45f788", "a750a0", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.jitneyId = function({
        id: t,
        discriminator: n
    }, o) {
        const s = n ? `${t}.${n}` : t;
        if (o) return `${s.toLowerCase()}.${o.toLowerCase()}_navi`;
        return `${s.toLowerCase()}_navi`
    }
}), "a8aa8f", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Priority = e.PresentationResult = e.PresentationRestrictions = e.PRIORITY_RANK = e.OrchestrationState = e.NaviAnnouncementPages = e.GLOBAL_SCOPE_ID = e.AppTarget = e.AnnouncementShowState = void 0;
    var I = r(d[0]),
        E = r(d[1]);
    e.AnnouncementShowState = (function(I) {
        return I.SHOW = "SHOW", I.DROP = "DROP", I
    })({}), e.PresentationResult = (function(I) {
        return I.DISCARDED = "DISCARDED", I.DISMISSED = "DISMISSED", I.ACTIONED = "ACTIONED", I
    })({}), e.PresentationRestrictions = (function(I) {
        return I.SHOW_ALWAYS = "SHOW_ALWAYS", I.SHOW_ONLY_IF_FIRST_IN_PAGE = "SHOW_ONLY_IF_FIRST_IN_PAGE", I.SHOW_ONLY_IF_FIRST_NON_SHOW_ALWAYS = "SHOW_ONLY_IF_FIRST_NON_SHOW_ALWAYS", I
    })({});
    let O = e.Priority = (function(I) {
        return I.POISON_PILL = "POISON_PILL", I.CRITICAL = "POISON_PILL", I.LEGAL = "LEGAL", I.HIGH = "LEGAL", I.INTERACTIVE = "INTERACTIVE", I.TIME_SENSITIVE_REQUIRED_ACTION = "TIME_SENSITIVE_REQUIRED_ACTION", I.REGULAR = "TIME_SENSITIVE_REQUIRED_ACTION", I.MARKETING_EDUCATIONAL = "MARKETING_EDUCATIONAL", I.LOW = "MARKETING_EDUCATIONAL", I.CELEBRATION_RECOGNITION = "CELEBRATION_RECOGNITION", I.VERY_LOW = "CELEBRATION_RECOGNITION", I
    })({});
    e.PRIORITY_RANK = Object.freeze([O.POISON_PILL, O.LEGAL, O.INTERACTIVE, O.TIME_SENSITIVE_REQUIRED_ACTION, O.MARKETING_EDUCATIONAL, O.CELEBRATION_RECOGNITION]);
    e.OrchestrationState = (function(I) {
        return I[I.SETUP = 0] = "SETUP", I[I.ACTIVE = 1] = "ACTIVE", I[I.WAITING = 2] = "WAITING", I
    })({});
    e.NaviAnnouncementPages = I.naviAnnouncementPages.reduce(((I, E) => ({ ...I,
        [E]: E
    })), {}), e.GLOBAL_SCOPE_ID = 'GLOBAL_SCOPE_ID', e.AppTarget = E.naviAppTargets.reduce(((I, E) => ({ ...I,
        [E]: E
    })), {})
}), "af724a", ["fb1516", "32d13a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isGlobalBannerEnabled = e.default = void 0;
    var l = r(d[1]),
        t = n(r(d[2])),
        o = n(r(d[3]));
    e.isGlobalBannerEnabled = () => l.Flagger.isTrebuchetLaunched((0, t.default)('navi_migration.host_global_banner.launch.web'));
    const u = new o.default(((n, l) => "HOST_GLOBAL_BANNER" === n || 'HostGlobalBannerContent' === l ? .__typename));
    e.default = u
}), "c57e59", ["ba7a76", "dcc72a", "2c6bf9", "cee790"]);
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
        name: 'NaviServerAnnouncementsQuery',
        type: 'query',
        operationId: '9239e04ceece771522aaafa66c3084479a4d19fcd22352a1b4e1863fafa593b8'
    };
    e.default = u
}), "c6ac87", ["ba7a76", "45f788", "3f7b6c", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n) {
        const s = (0, c.default)(),
            {
                findAnnouncement: l
            } = (0, u.useNaviInternalContext)(),
            f = l(n),
            A = o((() => {
                s((() => `FutureAnnouncement(${n}).ready()`)), f ? .ready()
            })),
            v = o((() => {
                s((() => `FutureAnnouncement(${n}).cancel()`)), f ? .cancel()
            }));
        return (0, t.useMemo)((() => ({
            exists: !!f,
            announcement: f ? .announcement,
            ready: () => {
                f ? A() : s((() => `useFutureAnnouncement(): "${n}" does not exist`))
            },
            cancel: () => {
                f ? v() : s((() => `useFutureAnnouncement(): "${n}" does not exist`))
            }
        })), [f, A, v])
    };
    var t = r(d[1]),
        u = r(d[2]),
        c = n(r(d[3]));

    function o(n) {
        const u = (0, t.useRef)(!1);
        return (0, t.useCallback)((() => {
            if (!u.current) return u.current = !0, n()
        }), [n])
    }
}), "c7e43f", ["ba7a76", "07aa1f", "84f4fe", "c809cd"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        return (0, u.useDebugLogger)('Navi')
    };
    var u = r(d[0])
}), "c809cd", ["f8ea9a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    e.default = class {
        constructor(t) {
            this.canHandleAnnouncement = void 0, this.debugString = void 0, this.canHandleAnnouncement = 'string' == typeof t ? n => n === t : t, this.debugString = t
        }
        toString() {
            return `${this.debugString}`
        }
    }
}), "cee790", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var N = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isUserConsentEnabled = e.default = e.USER_CONSENT_ANNOUNCEMENT_ID = void 0;
    var n = r(d[1]),
        t = N(r(d[2])),
        _ = N(r(d[3]));
    e.isUserConsentEnabled = () => n.Flagger.isTrebuchetLaunched((0, t.default)('navi_migration.consento_modals.launch.web'));
    const E = e.USER_CONSENT_ANNOUNCEMENT_ID = 'USER_CONSENT_ANNOUNCEMENT_ID',
        s = new _.default(E);
    e.default = s
}), "ed263e", ["ba7a76", "dcc72a", "2c6bf9", "cee790"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.SingleDeviceAnnouncement = void 0;
    var t = r(d[0]);
    class o {
        constructor({
            id: o,
            discriminator: s,
            campaignEndUtcDateTime: n,
            choreographyInfo: h,
            content: c,
            filterInfo: p,
            impressionPolicy: l,
            presentationResult: f,
            showState: y
        }) {
            this.id = void 0, this.discriminator = void 0, this.campaignEndUtcDateTime = void 0, this.choreographyInfo = void 0, this.content = void 0, this.filterInfo = void 0, this.impressionPolicy = void 0, this.presentationResult = void 0, this.showState = void 0, this.id = o, this.discriminator = s, this.campaignEndUtcDateTime = n, this.choreographyInfo = h, this.content = c, this.filterInfo = p, this.impressionPolicy = l, this.presentationResult = f, this.showState = y, this.choreographyInfo.presentationRestriction || (this.choreographyInfo.presentationRestriction = this.choreographyInfo.priority === t.Priority.POISON_PILL || this.choreographyInfo.priority === t.Priority.LEGAL || this.choreographyInfo.priority === t.Priority.INTERACTIVE ? t.PresentationRestrictions.SHOW_ALWAYS : t.PresentationRestrictions.SHOW_ONLY_IF_FIRST_IN_PAGE)
        }
    }
    class s extends o {
        constructor(t) {
            super(t), this.id = void 0, this.id = t.id
        }
    }
    e.SingleDeviceAnnouncement = s;
    class n extends o {
        constructor(t) {
            super(t), this.id = void 0, this.id = t.id
        }
    }
    e.default = n, n.SingleDevice = s
}), "f4362a", ["af724a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.naviAnnouncementPages = void 0;
    e.naviAnnouncementPages = ["CHECK_IN_METHOD_MANAGEMENT", "EARNINGS", "EXPERIENCES_CALENDAR", "EXPERIENCES_DASHBOARD", "EXPERIENCES_INSIGHTS", "EXPERIENCES_PROFILE", "GUEST_HOMEPAGE", "GUEST_PROFILE", "HOST_RESERVATION_DETAILS", "INBOX", "INBOX_THREAD", "LOL", "MANAGE_QUICK_REPLIES", "SEARCH_INPUT", "SEARCH_RESULT", "STAYS_CALENDAR", "STAYS_PROFILE", "TODAY_TAB", "TRIPS", "WISHLISTS", "WISHLIST_DETAILS"]
}), "fb1516", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CappedImpressionWithExpirationPolicy = e.CappedImpressionPolicy = e.AlwaysShowPolicy = void 0;
    e.AlwaysShowPolicy = class {
        constructor({
            forceDiscard: o,
            forceShow: s
        } = {}) {
            this.forceDiscard = void 0, this.forceShow = void 0, this.forceDiscard = o, this.forceShow = s
        }
    };
    e.CappedImpressionPolicy = class {
        constructor({
            forceDiscard: o,
            forceShow: s,
            maxCap: c
        }) {
            this.forceDiscard = void 0, this.forceShow = void 0, this.maxCap = void 0, this.forceDiscard = o, this.forceShow = s, this.maxCap = c
        }
    };
    e.CappedImpressionWithExpirationPolicy = class {
        constructor({
            forceDiscard: o,
            forceShow: s,
            maxCap: c,
            impressionExpirationUtcDateTime: t
        }) {
            this.forceDiscard = void 0, this.forceShow = void 0, this.maxCap = void 0, this.impressionExpirationUtcDateTime = void 0, this.forceDiscard = o, this.forceShow = s, this.maxCap = c, this.impressionExpirationUtcDateTime = t
        }
    }
}), "fc4d8f", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        children: t,
        app: n
    }) {
        const N = (0, O.default)(),
            [y, W] = (0, o.useState)(null),
            w = (0, l.default)(y),
            G = (0, o.useRef)(T.OrchestrationState.SETUP),
            L = (0, o.useRef)(null),
            x = (0, v.default)(L),
            D = (0, R.default)(),
            j = (0, o.useRef)([]),
            F = (0, o.useCallback)((t => t.choreographyInfo.presentationRestriction === T.PresentationRestrictions.SHOW_ONLY_IF_FIRST_IN_PAGE && j.current.length > 0 || !(t.choreographyInfo.presentationRestriction !== T.PresentationRestrictions.SHOW_ONLY_IF_FIRST_NON_SHOW_ALWAYS || !j.current.some((t => t.choreographyInfo.presentationRestriction !== T.PresentationRestrictions.SHOW_ALWAYS)))), []),
            H = (0, o.useCallback)((async t => {
                for (const n of (0, E.default)(t)) {
                    const t = await D.shouldShowAnnouncement(n);
                    if (n.showState = t, x.getScheduledAnnouncementIds().has(n.id))
                        if (t !== T.AnnouncementShowState.DROP) {
                            if (t === T.AnnouncementShowState.SHOW) {
                                if (F(n)) {
                                    N((() => ['Suppressing announcement due to presentation restrictions', n])), x.getAnnouncementResult(n.id).resolve(!1);
                                    continue
                                }
                                return n
                            }
                        } else x.getAnnouncementResult(n.id).resolve(!1);
                    else N((() => `Skipping announcement "${n.id}", no longer scheduled`)), x.getAnnouncementResult(n.id).resolve(!1)
                }
            }), []),
            U = (0, o.useRef)(new AbortController),
            M = (0, o.useCallback)((async ({
                continuePresenting: t
            } = {
                continuePresenting: !1
            }) => {
                if (G.current === T.OrchestrationState.ACTIVE && !t) return;
                G.current = T.OrchestrationState.ACTIVE, U.current.abort(), U.current = new AbortController;
                const {
                    signal: n
                } = U.current, o = x.getScheduledAnnouncementIds();
                N((() => ['Finding top announcement from:', o]));
                for (const t of T.PRIORITY_RANK) {
                    const o = x.getSupportedAnnouncements().filter((n => n.announcement.choreographyInfo.priority === t));
                    if (!o.length) continue;
                    o.forEach((t => t.startTimeout()));
                    const s = await Promise.allSettled(o.map((t => t.promise)));
                    if (n.aborted) return;
                    const u = s.filter((t => 'fulfilled' === t.status)).map((t => t.value)),
                        c = await H(u);
                    if (n.aborted) return;
                    if (c) return N((() => [`Presenting announcement: ${c.id}`, c])), void W(c)
                }(0, b.isEqualSet)(o, x.getScheduledAnnouncementIds()) ? (G.current = T.OrchestrationState.WAITING, N((() => 'Ending presentation loop, nothing to show, moving to WAITING state'))) : M({
                    continuePresenting: !0
                })
            }), []),
            q = (0, o.useCallback)(((t, n) => {
                const o = x.addAnnouncement(t, n);
                return o && D.startImpressionRequest(t), o && x.get(n) ? .isReady && G.current === T.OrchestrationState.WAITING && (N((() => 'New announcement scheduled during WAITING state, restarting presentation')), M()), x.getAnnouncementResult(t)
            }), []),
            V = (0, o.useCallback)(((t, n) => (t.filter((t => x.addAnnouncement(t, n))) ? .map((t => D.startImpressionRequest(t))).length > 0 && x.get(n) ? .isReady && G.current === T.OrchestrationState.WAITING && (N((() => 'New announcements scheduled during WAITING state, restarting presentation')), M()), Promise.all(t.map((t => x.getAnnouncementResult(t)))))), []),
            Y = (0, o.useCallback)((t => {
                x.ready(t), G.current !== T.OrchestrationState.ACTIVE && (x.isGlobalReady() ? (N((() => 'All scope dependencies satisfied, starting presentation')), M()) : N((() => ['Scope dependencies not yet satisfied:', x.all()])))
            }), []),
            $ = (0, o.useCallback)((t => {
                L.current = t, x.get(T.GLOBAL_SCOPE_ID) ? .dependencies.add(t), G.current === T.OrchestrationState.WAITING && (N((() => 'Resetting orchestrator into SETUP (onPageEnter)')), G.current = T.OrchestrationState.SETUP)
            }), []),
            B = (0, o.useCallback)((() => {
                U.current.abort(), D.clearRequestCache();
                w.current && x.get(T.GLOBAL_SCOPE_ID) ? .announcements.has(w.current.id) || (W(null), j.current = [], G.current = T.OrchestrationState.SETUP, N((() => 'Resetting orchestrator into SETUP')))
            }), []),
            J = (0, o.useCallback)((t => {
                N((() => 'Exiting page')), x.get(T.GLOBAL_SCOPE_ID) ? .dependencies.delete(t), x.remove(t), L.current = null, B()
            }), []),
            K = (0, o.useCallback)((t => {
                N((() => 'Resetting page')), x.reset(t), B()
            }), []),
            X = (0, o.useMemo)((() => ({
                addScope: x.add,
                removeScope: x.remove,
                resetScope: x.reset,
                updateScopeDependencies: x.updateDependencies,
                registerPresenter: x.registerPresenter,
                removePresenter: x.removePresenter,
                scheduleAnnouncement: q,
                scheduleAnnouncements: V,
                removeAnnouncement: x.removeAnnouncement,
                findAnnouncement: x.findAnnouncement,
                startPresentation: Y,
                onPageEnter: $,
                onPageExit: J,
                resetPage: K
            })), []),
            z = (0, o.useCallback)((t => {
                D.recordImpression(t)
            }), []),
            Q = (0, o.useCallback)(((t, n) => {
                N((() => `Marking ${t.id} as complete (${n})`)), t.presentationResult = n;
                const o = n !== T.PresentationResult.DISCARDED;
                o && (j.current.push(t), c.default.logJitneyEvent({
                    schema: u().UniversalComponentActionEvent,
                    event_data: {
                        logging_id: (0, C.jitneyId)(t, n),
                        ancestor_logging_ids: [],
                        ancestor_uuids: [],
                        method: 'dismissed',
                        uuid: (0, s().v4)(),
                        operation: 9
                    }
                })), W(null), x.getAnnouncementResult(t.id).resolve(o), G.current === T.OrchestrationState.ACTIVE && queueMicrotask((() => M({
                    continuePresenting: !0
                })))
            }), []),
            Z = (0, o.useMemo)((() => ({
                currentAnnouncement: y,
                markAsViewed: z,
                markAsComplete: Q
            })), [y]);
        return (0, k.jsx)(f.default.Provider, {
            value: X,
            children: (0, k.jsx)(S.NaviStateContext.Provider, {
                value: Z,
                children: (0, k.jsxs)(A.default, {
                    impressionManager: D,
                    children: [n === T.AppTarget.HOST && p.Flagger.isTrebuchetLaunched((0, h.default)('navi_global_scope.host')) && (0, k.jsx)(I.default, {}), n === T.AppTarget.GUEST && p.Flagger.isTrebuchetLaunched((0, h.default)('navi_global_scope.guest')) && (0, k.jsx)(_.default, {}), n === T.AppTarget.EXPERIENCE_HOST && p.Flagger.isTrebuchetLaunched((0, h.default)('navi_global_scope.exp_host')) && (0, k.jsx)(P.default, {}), t]
                })
            })
        })
    };
    var o = n(r(d[2]));

    function s() {
        const t = r(d[3]);
        return s = function() {
            return t
        }, t
    }

    function u() {
        const t = r(d[4]);
        return u = function() {
            return t
        }, t
    }
    var c = t(r(d[5])),
        l = t(r(d[6])),
        p = r(d[7]),
        h = t(r(d[8])),
        f = t(r(d[9])),
        S = r(d[10]),
        A = t(r(d[11])),
        I = t(r(d[12])),
        _ = t(r(d[13])),
        P = t(r(d[14])),
        R = t(r(d[15])),
        v = t(r(d[16])),
        O = t(r(d[17])),
        T = r(d[18]),
        E = t(r(d[19])),
        C = r(d[20]),
        b = r(d[21]),
        k = r(d[22])
}), "fd91b8", ["ba7a76", "45f788", "07aa1f", "305dd5", "59c871", "c8b97a", "d18042", "dcc72a", "2c6bf9", "7b3437", "9836eb", "8c2963", "620971", "77b657", "35567a", "2b4782", "762889", "c809cd", "af724a", "53350f", "a8aa8f", "1a5f67", "b8c07d"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/a784.c14a7d4f73.js.map