(function() {
    var __BUNDLE_START_TIME__ = this.nativePerformanceNow ? nativePerformanceNow() : Date.now(),
        __DEV__ = false,
        process = this.process || {};
    process.env = process.env || {};
    process.env.NODE_ENV = process.env.NODE_ENV || "production";
    !(function(e) {
        "use strict";
        e.__r = i, e.__d = function(e, n, o) {
            if (null != t[n]) return;
            const i = {
                dependencyMap: o,
                factory: e,
                hasError: !1,
                importedAll: r,
                importedDefault: r,
                isInitialized: !1,
                publicModule: {
                    exports: {}
                }
            };
            t[n] = i
        }, e.__c = o, e.__registerSegment = function(e, r, n) {
            p[e] = r, n && n.forEach((r => {
                t[r] || h.has(r) || h.set(r, e)
            }))
        };
        var t = o();
        const r = {},
            {
                hasOwnProperty: n
            } = {};

        function o() {
            return t = Object.create(null)
        }

        function i(e) {
            const r = e,
                n = t[r];
            return n && n.isInitialized ? n.publicModule.exports : d(r, n)
        }

        function l(e) {
            const n = e;
            if (t[n] && t[n].importedDefault !== r) return t[n].importedDefault;
            const o = i(n),
                l = o && o.__esModule ? o.default : o;
            return t[n].importedDefault = l
        }

        function u(e) {
            const o = e;
            if (t[o] && t[o].importedAll !== r) return t[o].importedAll;
            const l = i(o);
            let u;
            if (l && l.__esModule) u = l;
            else {
                if (u = {}, l)
                    for (const e in l) n.call(l, e) && (u[e] = l[e]);
                u.default = l
            }
            return t[o].importedAll = u
        }
        i.importDefault = l, i.importAll = u;
        let c = !1;

        function d(t, r) {
            if (!c && e.ErrorUtils) {
                let n;
                c = !0;
                try {
                    n = m(t, r)
                } catch (t) {
                    e.ErrorUtils.reportFatalError(t)
                }
                return c = !1, n
            }
            return m(t, r)
        }
        const s = 16,
            a = 65535;

        function f(e) {
            return {
                segmentId: e >>> s,
                localId: e & a
            }
        }
        i.unpackModuleId = f, i.packModuleId = function(e) {
            return (e.segmentId << s) + e.localId
        };
        const p = [],
            h = new Map;

        function m(r, n) {
            if (!n && p.length > 0) {
                const e = h.get(r) ? ? 0,
                    o = p[e];
                null != o && (o(r), n = t[r], h.delete(r))
            }
            const o = e.nativeRequire;
            if (!n && o) {
                const {
                    segmentId: e,
                    localId: i
                } = f(r);
                o(i, e), n = t[r]
            }
            if (!n) throw g(r);
            if (n.hasError) throw w(r, n.error);
            n.isInitialized = !0;
            const {
                factory: c,
                dependencyMap: d
            } = n;
            try {
                const t = n.publicModule;
                return t.id = r, c(e, i, l, u, t, t.exports, d), n.factory = void 0, n.dependencyMap = void 0, t.exports
            } catch (e) {
                throw n.hasError = !0, n.error = e, n.isInitialized = !1, n.publicModule.exports = void 0, e
            }
        }

        function g(e) {
            return Error('Requiring unknown module "' + e + '".')
        }

        function w(e, t) {
            return Error('Requiring module "' + e + '", which threw an exception: ' + t)
        }
    })('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof global ? global : 'undefined' != typeof window ? window : this);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var l = r(d[0]).default,
            s = r(d[1]),
            t = r(d[2]),
            c = r(d[3]),
            h = r(d[4]),
            n = r(d[5]),
            o = l(r(d[6])),
            u = l(r(d[7])),
            f = l(r(d[8])),
            _ = l(r(d[9])),
            S = l(r(d[10])),
            N = l(r(d[11])),
            v = l(r(d[12])),
            b = l(r(d[13])),
            p = l(r(d[14])),
            k = l(r(d[15])),
            w = r(d[16]),
            C = r(d[17]),
            E = r(d[18]),
            y = r(d[19]),
            P = r(d[20]),
            R = r(d[21]),
            A = r(d[22]);
        self.__WB_DISABLE_DEV_LOGS = !(0, R.getServiceWorkerParams)().sw_workbox_dev_logs;
        const L = (0, N.default)('ServiceWorker:Desktop AppShell V4', (0, h.createPrefixStyle)('#637b94', '#e0ffff'));
        L((() => 'Started service worker, see https://air.bb/service-workers for debugging guides.'));
        const U = (0, o.default)({
            generic: '/app_shell',
            marketplacePdp: '/rooms/sw_skeleton'
        });
        (0, w.addToPrecacheList)([{
            "revision": null,
            "url": "https://a0.muscache.com/airbnb/static/packages/web/common/ae2f.1d291ad2e9.js"
        }, {
            "revision": null,
            "url": "https://a0.muscache.com/airbnb/static/packages/web/en-IN/frontend/dls-legacy-16/components/exp/Carousel/CarouselController.aee748de18.js"
        }, {
            "revision": null,
            "url": "https://a0.muscache.com/airbnb/static/packages/web/en-IN/frontend/airmetro/browser/asyncRequire.44e2f8831a.js"
        }, {
            "revision": null,
            "url": "https://a0.muscache.com/airbnb/static/packages/web/common/frontend/hyperloop-browser/metroRequire.5f126e98a2.js"
        }, {
            "revision": null,
            "url": "https://a0.muscache.com/airbnb/static/packages/web/common/frontend/hyperloop-browser/shims_post_modules.0acc8dce13.js"
        }, {
            "revision": null,
            "url": "https://a0.muscache.com/airbnb/static/packages/web/common/frontend/hyperloop-browser/coreV2.6b1bde699e.js"
        }]), Object.values(U).forEach((l => {
            (0, t.addPlugins)([(0, b.default)(l)])
        })), (0, p.default)();
        const O = {
                maxCacheAgeMs: 18144e5,
                minShellRefreshTimeMs: 18e4,
                useNativeOfflineState: !0
            },
            M = (0, P.getCommonRoutes)(),
            T = new s.NavigationRoute((0, v.default)({ ...O,
                shellUrl: U.generic,
                shellCacheName: E.cacheNames.shell
            }), {
                allowlist: [...M.allowlist],
                denylist: [...M.denylist, /^\/payments\/book/]
            }),
            W = new s.NavigationRoute((0, v.default)({ ...O,
                shellUrl: U.marketplacePdp,
                shellCacheName: E.cacheNames.shell
            }), {
                allowlist: [/^\/rooms\/\d+\/?/],
                denylist: [...M.denylist, /^\/rooms\/plus\//]
            });
        (0, c.registerRoute)(W), (0, c.registerRoute)(T), (0, R.getServiceWorkerParams)().sw_disable_niobe_cache || (0, c.registerRoute)(...(0, y.createNiobeRoute)({
            cacheName: E.cacheNames.niobe
        })), (0, _.default)(), (0, u.default)({
            reuseOnlyOpenTab: !1
        }), (0, A.jitneyEventHandler)({}), (0, S.default)({
            shellCacheName: E.cacheNames.shell,
            shellUrls: Object.values(U)
        }), self.addEventListener('activate', (l => {
            l.waitUntil((0, k.default)(E.currentCaches))
        })), self.addEventListener('install', (l => {
            async function s() {
                await (0, C.backgroundPrefetchShell)({
                    shellUrl: U.generic,
                    shellCacheName: E.cacheNames.shell
                }), (0, f.default)('generic_shell_fetched')
            }
            l.waitUntil((async function() {
                try {
                    await (0, C.backgroundPrefetchShell)({
                        shellUrl: U.marketplacePdp,
                        shellCacheName: E.cacheNames.shell
                    }), (0, f.default)('marketplace_shell_fetched'), s()
                } catch {}
            })())
        })), self.addEventListener('message', (l => {
            switch (l.data.type) {
                case n.MSG_CLEAR_SHELL_CACHE:
                    (0, C.clearShellCache)({
                        shellCacheName: E.cacheNames.shell,
                        shellUrls: Object.values(U)
                    });
                    break;
                case n.MSG_PRECACHE_ASSETS:
                    (0, w.handlePrecacheAssetsMessage)(l, L)
            }
        }))
    }), 0, [1, 2, 13, 36, 40, 42, 43, 46, 54, 57, 58, 47, 62, 69, 70, 71, 91, 60, 95, 96, 111, 44, 113]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        m.exports = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }, m.exports.__esModule = !0, m.exports.default = m.exports
    }), 1, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.NavigationRoute = void 0;
        r(d[0]), r(d[1]);
        var t = r(d[2]);
        r(d[3]);
        class s extends t.Route {
            constructor(t, {
                allowlist: s = [/./],
                denylist: o = []
            } = {}) {
                super((t => this._match(t)), t), this._allowlist = s, this._denylist = o
            }
            _match({
                url: t,
                request: s
            }) {
                if (s && 'navigate' !== s.mode) return !1;
                const o = t.pathname + t.search;
                for (const t of this._denylist)
                    if (t.test(o)) return !1;
                return !!this._allowlist.some((t => t.test(o)))
            }
        }
        e.NavigationRoute = s
    }), 2, [3, 8, 9, 11]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.assert = void 0;
        r(d[0]);
        r(d[1]);
        e.assert = null
    }), 3, [4, 7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.WorkboxError = void 0;
        var o = r(d[0]);
        r(d[1]);
        class s extends Error {
            constructor(s, t) {
                super((0, o.messageGenerator)(s, t)), this.name = s, this.details = t
            }
        }
        e.WorkboxError = s
    }), 4, [5, 7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.messageGenerator = void 0;
        r(d[0]);
        r(d[1]);
        e.messageGenerator = (t, ...n) => {
            let s = t;
            return n.length > 0 && (s += ` :: ${JSON.stringify(n)}`), s
        }
    }), 5, [6, 7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.messages = void 0, r(d[0]);
        e.messages = {
            'invalid-value': ({
                paramName: t,
                validValueDescription: n,
                value: o
            }) => {
                if (!t || !n) throw new Error("Unexpected input to 'invalid-value' error.");
                return `The '${t}' parameter was given a value with an unexpected value. ${n} Received a value of ${JSON.stringify(o)}.`
            },
            'not-an-array': ({
                moduleName: t,
                className: n,
                funcName: o,
                paramName: s
            }) => {
                if (!(t && n && o && s)) throw new Error("Unexpected input to 'not-an-array' error.");
                return `The parameter '${s}' passed into '${t}.${n}.${o}()' must be an array.`
            },
            'incorrect-type': ({
                expectedType: t,
                paramName: n,
                moduleName: o,
                className: s,
                funcName: u
            }) => {
                if (!(t && n && o && u)) throw new Error("Unexpected input to 'incorrect-type' error.");
                return `The parameter '${n}' passed into '${o}.${s?s+'.':''}${u}()' must be of type ${t}.`
            },
            'incorrect-class': ({
                expectedClass: t,
                paramName: n,
                moduleName: o,
                className: s,
                funcName: u,
                isReturnValueProblem: c
            }) => {
                if (!t || !o || !u) throw new Error("Unexpected input to 'incorrect-class' error.");
                return c ? `The return value from '${o}.${s?s+'.':''}${u}()' must be an instance of class ${t.name}.` : `The parameter '${n}' passed into '${o}.${s?s+'.':''}${u}()' must be an instance of class ${t.name}.`
            },
            'missing-a-method': ({
                expectedMethod: t,
                paramName: n,
                moduleName: o,
                className: s,
                funcName: u
            }) => {
                if (!(t && n && o && s && u)) throw new Error("Unexpected input to 'missing-a-method' error.");
                return `${o}.${s}.${u}() expected the '${n}' parameter to expose a '${t}' method.`
            },
            'add-to-cache-list-unexpected-type': ({
                entry: t
            }) => `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(t)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,
            'add-to-cache-list-conflicting-entries': ({
                firstEntry: t,
                secondEntry: n
            }) => {
                if (!t || !n) throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");
                return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${t._entryId} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`
            },
            'plugin-error-request-will-fetch': ({
                thrownError: t
            }) => {
                if (!t) throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");
                return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${t.message}'.`
            },
            'invalid-cache-name': ({
                cacheNameId: t,
                value: n
            }) => {
                if (!t) throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");
                return `You must provide a name containing at least one character for setCacheDetails({${t}: '...'}). Received a value of '${JSON.stringify(n)}'`
            },
            'unregister-route-but-not-found-with-method': ({
                method: t
            }) => {
                if (!t) throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");
                return `The route you're trying to unregister was not  previously registered for the method type '${t}'.`
            },
            'unregister-route-route-not-registered': () => "The route you're trying to unregister was not previously registered.",
            'queue-replay-failed': ({
                name: t
            }) => `Replaying the background sync queue '${t}' failed.`,
            'duplicate-queue-name': ({
                name: t
            }) => `The Queue name '${t}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,
            'expired-test-without-max-age': ({
                methodName: t,
                paramName: n
            }) => `The '${t}()' method can only be used when the '${n}' is used in the constructor.`,
            'unsupported-route-type': ({
                moduleName: t,
                className: n,
                funcName: o,
                paramName: s
            }) => `The supplied '${s}' parameter was an unsupported type. Please check the docs for ${t}.${n}.${o} for valid input types.`,
            'not-array-of-class': ({
                value: t,
                expectedClass: n,
                moduleName: o,
                className: s,
                funcName: u,
                paramName: c
            }) => `The supplied '${c}' parameter must be an array of '${n}' objects. Received '${JSON.stringify(t)},'. Please check the call to ${o}.${s}.${u}() to fix the issue.`,
            'max-entries-or-age-required': ({
                moduleName: t,
                className: n,
                funcName: o
            }) => `You must define either config.maxEntries or config.maxAgeSecondsin ${t}.${n}.${o}`,
            'statuses-or-headers-required': ({
                moduleName: t,
                className: n,
                funcName: o
            }) => `You must define either config.statuses or config.headersin ${t}.${n}.${o}`,
            'invalid-string': ({
                moduleName: t,
                funcName: n,
                paramName: o
            }) => {
                if (!o || !t || !n) throw new Error("Unexpected input to 'invalid-string' error.");
                return `When using strings, the '${o}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${t}.${n}() for more info.`
            },
            'channel-name-required': () => "You must provide a channelName to construct a BroadcastCacheUpdate instance.",
            'invalid-responses-are-same-args': () => "The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.",
            'expire-custom-caches-only': () => "You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.",
            'unit-must-be-bytes': ({
                normalizedRangeHeader: t
            }) => {
                if (!t) throw new Error("Unexpected input to 'unit-must-be-bytes' error.");
                return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${t}"`
            },
            'single-range-only': ({
                normalizedRangeHeader: t
            }) => {
                if (!t) throw new Error("Unexpected input to 'single-range-only' error.");
                return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${t}"`
            },
            'invalid-range-values': ({
                normalizedRangeHeader: t
            }) => {
                if (!t) throw new Error("Unexpected input to 'invalid-range-values' error.");
                return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${t}"`
            },
            'no-range-header': () => "No Range header was found in the Request provided.",
            'range-not-satisfiable': ({
                size: t,
                start: n,
                end: o
            }) => `The start (${n}) and end (${o}) values in the Range are not satisfiable by the cached response, which is ${t} bytes.`,
            'attempt-to-cache-non-get-request': ({
                url: t,
                method: n
            }) => `Unable to cache '${t}' because it is a '${n}' request and only 'GET' requests can be cached.`,
            'cache-put-with-no-response': ({
                url: t
            }) => `There was an attempt to cache '${t}' but the response was not defined.`,
            'no-response': ({
                url: t,
                error: n
            }) => {
                let o = `The strategy could not generate a response for '${t}'.`;
                return n && (o += ` The underlying error is ${n}.`), o
            },
            'bad-precaching-response': ({
                url: t,
                status: n
            }) => `The precaching request for '${t}' failed` + (n ? ` with an HTTP status of ${n}.` : "."),
            'non-precached-url': ({
                url: t
            }) => `createHandlerBoundToURL('${t}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,
            'add-to-cache-list-conflicting-integrities': ({
                url: t
            }) => `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${t} with different integrity values. Please remove one of them.`,
            'missing-precache-entry': ({
                cacheName: t,
                url: n
            }) => `Unable to find a precached response in ${t} for ${n}.`,
            'cross-origin-copy-response': ({
                origin: t
            }) => `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${t}.`
        }
    }), 6, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        try {
            self['workbox:core:6.1.1'] && _()
        } catch (c) {}
    }), 7, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.logger = void 0, r(d[0]);
        e.logger = null
    }), 8, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Route = void 0;
        r(d[0]);
        var t = r(d[1]),
            o = r(d[2]);
        r(d[3]);
        e.Route = class {
            constructor(l, n, s = t.defaultMethod) {
                this.handler = (0, o.normalizeHandler)(n), this.match = l, this.method = s
            }
            setCatchHandler(t) {
                this.catchHandler = (0, o.normalizeHandler)(t)
            }
        }
    }), 9, [3, 10, 12, 11]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.validMethods = e.defaultMethod = void 0, r(d[0]);
        e.defaultMethod = 'GET', e.validMethods = ['DELETE', 'GET', 'HEAD', 'PATCH', 'POST', 'PUT']
    }), 10, [11]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        try {
            self['workbox:routing:6.1.1'] && _()
        } catch (t) {}
    }), 11, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.normalizeHandler = void 0;
        r(d[0]);
        r(d[1]);
        e.normalizeHandler = n => n && 'object' == typeof n ? n : {
            handle: n
        }
    }), 12, [3, 11]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.addPlugins = function(n) {
            (0, t.getOrCreatePrecacheController)().strategy.plugins.push(...n)
        };
        var t = r(d[0]);
        r(d[1])
    }), 13, [14, 19]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getOrCreatePrecacheController = void 0;
        var t = r(d[0]);
        let o;
        r(d[1]);
        e.getOrCreatePrecacheController = () => (o || (o = new t.PrecacheController), o)
    }), 14, [15, 19]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.PrecacheController = void 0;
        r(d[0]);
        var t = r(d[1]),
            s = (r(d[2]), r(d[3])),
            c = r(d[4]),
            n = r(d[5]),
            h = r(d[6]),
            o = r(d[7]),
            l = (r(d[8]), r(d[9]), r(d[10]));
        r(d[11]);
        e.PrecacheController = class {
            constructor({
                cacheName: s,
                plugins: c = [],
                fallbackToNetwork: n = !0
            } = {}) {
                this._urlsToCacheKeys = new Map, this._urlsToCacheModes = new Map, this._cacheKeysToIntegrities = new Map, this._strategy = new l.PrecacheStrategy({
                    cacheName: t.cacheNames.getPrecacheName(s),
                    plugins: [...c, new o.PrecacheCacheKeyPlugin({
                        precacheController: this
                    })],
                    fallbackToNetwork: n
                }), this.install = this.install.bind(this), this.activate = this.activate.bind(this)
            }
            get strategy() {
                return this._strategy
            }
            precache(t) {
                this.addToCacheList(t), this._installAndActiveListenersAdded || (self.addEventListener('install', this.install), self.addEventListener('activate', this.activate), this._installAndActiveListenersAdded = !0)
            }
            addToCacheList(t) {
                const c = [];
                for (const h of t) {
                    'string' == typeof h ? c.push(h) : h && void 0 === h.revision && c.push(h.url);
                    const {
                        cacheKey: t,
                        url: o
                    } = (0, n.createCacheKey)(h), l = 'string' != typeof h && h.revision ? 'reload' : 'default';
                    if (this._urlsToCacheKeys.has(o) && this._urlsToCacheKeys.get(o) !== t) throw new s.WorkboxError('add-to-cache-list-conflicting-entries', {
                        firstEntry: this._urlsToCacheKeys.get(o),
                        secondEntry: t
                    });
                    if ('string' != typeof h && h.integrity) {
                        if (this._cacheKeysToIntegrities.has(t) && this._cacheKeysToIntegrities.get(t) !== h.integrity) throw new s.WorkboxError('add-to-cache-list-conflicting-integrities', {
                            url: o
                        });
                        this._cacheKeysToIntegrities.set(t, h.integrity)
                    }
                    if (this._urlsToCacheKeys.set(o, t), this._urlsToCacheModes.set(o, l), c.length > 0) {
                        const t = `Workbox is precaching URLs without revision info: ${c.join(', ')}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
                        console.warn(t)
                    }
                }
            }
            install(t) {
                return (0, c.waitUntil)(t, (async () => {
                    const s = new h.PrecacheInstallReportPlugin;
                    this.strategy.plugins.push(s);
                    for (const [s, c] of this._urlsToCacheKeys) {
                        const n = this._cacheKeysToIntegrities.get(c),
                            h = this._urlsToCacheModes.get(s),
                            o = new Request(s, {
                                integrity: n,
                                cache: h,
                                credentials: 'same-origin'
                            });
                        await Promise.all(this.strategy.handleAll({
                            params: {
                                cacheKey: c
                            },
                            request: o,
                            event: t
                        }))
                    }
                    const {
                        updatedURLs: c,
                        notUpdatedURLs: n
                    } = s;
                    return {
                        updatedURLs: c,
                        notUpdatedURLs: n
                    }
                }))
            }
            activate(t) {
                return (0, c.waitUntil)(t, (async () => {
                    const t = await self.caches.open(this.strategy.cacheName),
                        s = await t.keys(),
                        c = new Set(this._urlsToCacheKeys.values()),
                        n = [];
                    for (const h of s) c.has(h.url) || (await t.delete(h), n.push(h.url));
                    return {
                        deletedURLs: n
                    }
                }))
            }
            getURLsToCacheKeys() {
                return this._urlsToCacheKeys
            }
            getCachedURLs() {
                return [...this._urlsToCacheKeys.keys()]
            }
            getCacheKeyForURL(t) {
                const s = new URL(t, location.href);
                return this._urlsToCacheKeys.get(s.href)
            }
            async matchPrecache(t) {
                const s = t instanceof Request ? t.url : t,
                    c = this.getCacheKeyForURL(s);
                if (c) {
                    return (await self.caches.open(this.strategy.cacheName)).match(c)
                }
            }
            createHandlerBoundToURL(t) {
                const c = this.getCacheKeyForURL(t);
                if (!c) throw new s.WorkboxError('non-precached-url', {
                    url: t
                });
                return s => (s.request = new Request(t), s.params = {
                    cacheKey: c,
                    ...s.params
                }, this.strategy.handle(s))
            }
        }
    }), 15, [3, 16, 8, 4, 17, 18, 20, 21, 22, 23, 24, 19]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.cacheNames = void 0, r(d[0]);
        const t = {
                googleAnalytics: 'googleAnalytics',
                precache: 'precache-v2',
                prefix: 'workbox',
                runtime: 'runtime',
                suffix: 'undefined' != typeof registration ? registration.scope : ''
            },
            o = o => [t.prefix, o, t.suffix].filter((t => t && t.length > 0)).join('-'),
            c = o => {
                for (const c of Object.keys(t)) o(c)
            };
        e.cacheNames = {
            updateDetails: o => {
                c((c => {
                    'string' == typeof o[c] && (t[c] = o[c])
                }))
            },
            getGoogleAnalyticsName: c => c || o(t.googleAnalytics),
            getPrecacheName: c => c || o(t.precache),
            getPrefix: () => t.prefix,
            getRuntimeName: c => c || o(t.runtime),
            getSuffix: () => t.suffix
        }
    }), 16, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.waitUntil = function(t, n) {
            const u = n();
            return t.waitUntil(u), u
        }, r(d[0])
    }), 17, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.createCacheKey = function(o) {
            if (!o) throw new t.WorkboxError('add-to-cache-list-unexpected-type', {
                entry: o
            });
            if ('string' == typeof o) {
                const t = new URL(o, location.href);
                return {
                    cacheKey: t.href,
                    url: t.href
                }
            }
            const {
                revision: c,
                url: h
            } = o;
            if (!h) throw new t.WorkboxError('add-to-cache-list-unexpected-type', {
                entry: o
            });
            if (!c) {
                const t = new URL(h, location.href);
                return {
                    cacheKey: t.href,
                    url: t.href
                }
            }
            const f = new URL(h, location.href),
                s = new URL(h, location.href);
            return f.searchParams.set(n, c), {
                cacheKey: f.href,
                url: s.href
            }
        };
        var t = r(d[0]);
        r(d[1]);
        const n = '__WB_REVISION__'
    }), 18, [4, 19]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        try {
            self['workbox:precaching:6.1.1'] && _()
        } catch (c) {}
    }), 19, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.PrecacheInstallReportPlugin = void 0, r(d[0]);
        e.PrecacheInstallReportPlugin = class {
            constructor() {
                this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({
                    request: t,
                    state: s
                }) => {
                    s && (s.originalRequest = t)
                }, this.cachedResponseWillBeUsed = async ({
                    event: t,
                    state: s,
                    cachedResponse: n
                }) => {
                    if ('install' === t.type) {
                        const t = s.originalRequest.url;
                        n ? this.notUpdatedURLs.push(t) : this.updatedURLs.push(t)
                    }
                    return n
                }
            }
        }
    }), 20, [19]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.PrecacheCacheKeyPlugin = void 0, r(d[0]);
        e.PrecacheCacheKeyPlugin = class {
            constructor({
                precacheController: c
            }) {
                this.cacheKeyWillBeUsed = async ({
                    request: c,
                    params: t
                }) => {
                    const s = t && t.cacheKey || this._precacheController.getCacheKeyForURL(c.url);
                    return s ? new Request(s) : c
                }, this._precacheController = c
            }
        }
    }), 21, [19]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.printCleanupDetails = function(n) {
            const t = n.length;
            t > 0 && (o.logger.groupCollapsed(`During precaching cleanup, ${t} cached request${1===t?' was':'s were'} deleted.`), l('Deleted Cache Requests', n), o.logger.groupEnd())
        };
        var o = r(d[0]);
        r(d[1]);
        const l = (l, n) => {
            o.logger.groupCollapsed(l);
            for (const l of n) o.logger.log(l);
            o.logger.groupEnd()
        }
    }), 22, [8, 19]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.printInstallDetails = function(n, t) {
            const c = n.length,
                s = t.length;
            if (c || s) {
                let p = `Precaching ${c} file${1===c?'':'s'}.`;
                s > 0 && (p += ` ${s} file${1===s?' is':'s are'} already cached.`), l.logger.groupCollapsed(p), o("View newly precached URLs.", n), o("View previously precached URLs.", t), l.logger.groupEnd()
            }
        };
        var l = r(d[0]);

        function o(o, n) {
            if (0 !== n.length) {
                l.logger.groupCollapsed(o);
                for (const o of n) l.logger.log(o);
                l.logger.groupEnd()
            }
        }
        r(d[1])
    }), 23, [8, 19]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.PrecacheStrategy = void 0;
        var t = r(d[0]),
            c = r(d[1]),
            l = (r(d[2]), r(d[3]), r(d[4])),
            s = r(d[5]);
        r(d[6]);
        class n extends s.Strategy {
            constructor(t = {}) {
                t.cacheName = c.cacheNames.getPrecacheName(t.cacheName), super(t), this._fallbackToNetwork = !1 !== t.fallbackToNetwork, this.plugins.push(n.copyRedirectedCacheableResponsesPlugin)
            }
            async _handle(t, c) {
                const l = await c.cacheMatch(t);
                return l || (c.event && 'install' === c.event.type ? await this._handleInstall(t, c) : await this._handleFetch(t, c))
            }
            async _handleFetch(t, c) {
                let s;
                if (!this._fallbackToNetwork) throw new l.WorkboxError('missing-precache-entry', {
                    cacheName: this.cacheName,
                    url: t.url
                });
                return s = await c.fetch(t), s
            }
            async _handleInstall(t, c) {
                this._useDefaultCacheabilityPluginIfNeeded();
                const s = await c.fetch(t);
                if (!await c.cachePut(t, s.clone())) throw new l.WorkboxError('bad-precaching-response', {
                    url: t.url,
                    status: s.status
                });
                return s
            }
            _useDefaultCacheabilityPluginIfNeeded() {
                let t = null,
                    c = 0;
                for (const [l, s] of this.plugins.entries()) s !== n.copyRedirectedCacheableResponsesPlugin && (s === n.defaultPrecacheCacheabilityPlugin && (t = l), s.cacheWillUpdate && c++);
                0 === c ? this.plugins.push(n.defaultPrecacheCacheabilityPlugin) : c > 1 && null !== t && this.plugins.splice(t, 1)
            }
        }
        e.PrecacheStrategy = n, n.defaultPrecacheCacheabilityPlugin = {
            cacheWillUpdate: async ({
                response: t
            }) => !t || t.status >= 400 ? null : t
        }, n.copyRedirectedCacheableResponsesPlugin = {
            cacheWillUpdate: async ({
                response: c
            }) => c.redirected ? await (0, t.copyResponse)(c) : c
        }
    }), 24, [25, 16, 27, 8, 4, 28, 19]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.copyResponse = async function(n, t) {
            let u = null;
            if (n.url) {
                u = new URL(n.url).origin
            }
            if (u !== self.location.origin) throw new s.WorkboxError('cross-origin-copy-response', {
                origin: u
            });
            const c = n.clone(),
                l = {
                    headers: new Headers(c.headers),
                    status: c.status,
                    statusText: c.statusText
                },
                p = t ? t(l) : l,
                f = (0, o.canConstructResponseFromBodyStream)() ? c.body : await c.blob();
            return new Response(f, p)
        };
        var o = r(d[0]),
            s = r(d[1]);
        r(d[2])
    }), 25, [26, 4, 7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        let n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.canConstructResponseFromBodyStream = function() {
            if (void 0 === n) {
                const o = new Response('');
                if ('body' in o) try {
                    new Response(o.body), n = !0
                } catch (o) {
                    n = !1
                }
                n = !1
            }
            return n
        }, r(d[0])
    }), 26, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getFriendlyURL = void 0, r(d[0]);
        e.getFriendlyURL = n => new URL(String(n), location.href).href.replace(new RegExp(`^${location.origin}`), '')
    }), 27, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Strategy = void 0;
        var t = r(d[0]),
            s = r(d[1]),
            n = (r(d[2]), r(d[3]), r(d[4]));
        r(d[5]);
        e.Strategy = class {
            constructor(s = {}) {
                this.cacheName = t.cacheNames.getRuntimeName(s.cacheName), this.plugins = s.plugins || [], this.fetchOptions = s.fetchOptions, this.matchOptions = s.matchOptions
            }
            handle(t) {
                const [s] = this.handleAll(t);
                return s
            }
            handleAll(t) {
                t instanceof FetchEvent && (t = {
                    event: t,
                    request: t.request
                });
                const s = t.event,
                    o = 'string' == typeof t.request ? new Request(t.request) : t.request,
                    l = 'params' in t ? t.params : void 0,
                    c = new n.StrategyHandler(this, {
                        event: s,
                        request: o,
                        params: l
                    }),
                    h = this._getResponse(c, o, s);
                return [h, this._awaitComplete(h, c, o, s)]
            }
            async _getResponse(t, n, o) {
                let l;
                await t.runCallbacks('handlerWillStart', {
                    event: o,
                    request: n
                });
                try {
                    if (l = await this._handle(n, t), !l || 'error' === l.type) throw new s.WorkboxError('no-response', {
                        url: n.url
                    })
                } catch (s) {
                    for (const c of t.iterateCallbacks('handlerDidError'))
                        if (l = await c({
                                error: s,
                                event: o,
                                request: n
                            }), l) break;
                    if (!l) throw s
                }
                for (const s of t.iterateCallbacks('handlerWillRespond')) l = await s({
                    event: o,
                    request: n,
                    response: l
                });
                return l
            }
            async _awaitComplete(t, s, n, o) {
                let l, c;
                try {
                    l = await t
                } catch (c) {}
                try {
                    await s.runCallbacks('handlerDidRespond', {
                        event: o,
                        request: n,
                        response: l
                    }), await s.doneWaiting()
                } catch (t) {
                    c = t
                }
                if (await s.runCallbacks('handlerDidComplete', {
                        event: o,
                        request: n,
                        response: l,
                        error: c
                    }), s.destroy(), c) throw c
            }
        }
    }), 28, [16, 4, 8, 27, 29, 35]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.StrategyHandler = void 0;
        r(d[0]);
        var t = r(d[1]),
            s = r(d[2]),
            n = r(d[3]),
            c = r(d[4]),
            o = (r(d[5]), r(d[6])),
            h = r(d[7]);

        function l(t) {
            return 'string' == typeof t ? new Request(t) : t
        }
        r(d[8]);
        e.StrategyHandler = class {
            constructor(t, n) {
                this._cacheKeys = {}, Object.assign(this, n), this.event = n.event, this._strategy = t, this._handlerDeferred = new s.Deferred, this._extendLifetimePromises = [], this._plugins = [...t.plugins], this._pluginStateMap = new Map;
                for (const t of this._plugins) this._pluginStateMap.set(t, {});
                this.event.waitUntil(this._handlerDeferred.promise)
            }
            fetch(t) {
                return this.waitUntil((async () => {
                    const {
                        event: s
                    } = this;
                    let n = l(t);
                    if ('navigate' === n.mode && s instanceof FetchEvent && s.preloadResponse) {
                        const t = await s.preloadResponse;
                        if (t) return t
                    }
                    const c = this.hasCallback('fetchDidFail') ? n.clone() : null;
                    try {
                        for (const t of this.iterateCallbacks('requestWillFetch')) n = await t({
                            request: n.clone(),
                            event: s
                        })
                    } catch (t) {
                        throw new h.WorkboxError('plugin-error-request-will-fetch', {
                            thrownError: t
                        })
                    }
                    const o = n.clone();
                    try {
                        let t;
                        t = await fetch(n, 'navigate' === n.mode ? void 0 : this._strategy.fetchOptions);
                        for (const n of this.iterateCallbacks('fetchDidSucceed')) t = await n({
                            event: s,
                            request: o,
                            response: t
                        });
                        return t
                    } catch (t) {
                        throw c && await this.runCallbacks('fetchDidFail', {
                            error: t,
                            event: s,
                            originalRequest: c.clone(),
                            request: o.clone()
                        }), t
                    }
                })())
            }
            async fetchAndCachePut(t) {
                const s = await this.fetch(t),
                    n = s.clone();
                return this.waitUntil(this.cachePut(t, n)), s
            }
            cacheMatch(t) {
                return this.waitUntil((async () => {
                    const s = l(t);
                    let n;
                    const {
                        cacheName: c,
                        matchOptions: o
                    } = this._strategy, h = await this.getCacheKey(s, 'read'), u = { ...o,
                        cacheName: c
                    };
                    n = await caches.match(h, u);
                    for (const t of this.iterateCallbacks('cachedResponseWillBeUsed')) n = await t({
                        cacheName: c,
                        matchOptions: o,
                        cachedResponse: n,
                        request: h,
                        event: this.event
                    }) || void 0;
                    return n
                })())
            }
            async cachePut(s, u) {
                const f = l(s);
                await (0, o.timeout)(0);
                const p = await this.getCacheKey(f, 'write');
                if (!u) throw new h.WorkboxError('cache-put-with-no-response', {
                    url: (0, c.getFriendlyURL)(p.url)
                });
                const w = await this._ensureResponseSafeToCache(u);
                if (!w) return !1;
                const {
                    cacheName: y,
                    matchOptions: _
                } = this._strategy, v = await self.caches.open(y), C = this.hasCallback('cacheDidUpdate'), b = C ? await (0, t.cacheMatchIgnoreParams)(v, p.clone(), ['__WB_REVISION__'], _) : null;
                try {
                    await v.put(p, C ? w.clone() : w)
                } catch (t) {
                    throw 'QuotaExceededError' === t.name && await (0, n.executeQuotaErrorCallbacks)(), t
                }
                for (const t of this.iterateCallbacks('cacheDidUpdate')) await t({
                    cacheName: y,
                    oldResponse: b,
                    newResponse: w.clone(),
                    request: p,
                    event: this.event
                });
                return !0
            }
            async getCacheKey(t, s) {
                if (!this._cacheKeys[s]) {
                    let n = t;
                    for (const t of this.iterateCallbacks('cacheKeyWillBeUsed')) n = l(await t({
                        mode: s,
                        request: n,
                        event: this.event,
                        params: this.params
                    }));
                    this._cacheKeys[s] = n
                }
                return this._cacheKeys[s]
            }
            hasCallback(t) {
                for (const s of this._strategy.plugins)
                    if (t in s) return !0;
                return !1
            }
            async runCallbacks(t, s) {
                for (const n of this.iterateCallbacks(t)) await n(s)
            }* iterateCallbacks(t) {
                for (const s of this._strategy.plugins)
                    if ('function' == typeof s[t]) {
                        const n = this._pluginStateMap.get(s),
                            c = c => {
                                const o = { ...c,
                                    state: n
                                };
                                return s[t](o)
                            };
                        yield c
                    }
            }
            waitUntil(t) {
                return this._extendLifetimePromises.push(t), t
            }
            async doneWaiting() {
                let t;
                for (; t = this._extendLifetimePromises.shift();) await t
            }
            destroy() {
                this._handlerDeferred.resolve()
            }
            async _ensureResponseSafeToCache(t) {
                let s = t,
                    n = !1;
                for (const t of this.iterateCallbacks('cacheWillUpdate'))
                    if (s = await t({
                            request: this.request,
                            response: s,
                            event: this.event
                        }) || void 0, n = !0, !s) break;
                return n || s && 200 !== s.status && (s = void 0), s
            }
        }
    }), 29, [3, 30, 31, 32, 27, 8, 34, 4, 35]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";

        function t(t, n) {
            const c = new URL(t);
            for (const t of n) c.searchParams.delete(t);
            return c.href
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.cacheMatchIgnoreParams = async function(n, c, o, s) {
            const u = t(c.url, o);
            if (c.url === u) return n.match(c, s);
            const f = { ...s,
                    ignoreSearch: !0
                },
                h = await n.keys(c, f);
            for (const c of h) {
                if (u === t(c.url, o)) return n.match(c, s)
            }
            return
        }, r(d[0])
    }), 30, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Deferred = void 0, r(d[0]);
        e.Deferred = class {
            constructor() {
                this.promise = new Promise(((s, t) => {
                    this.resolve = s, this.reject = t
                }))
            }
        }
    }), 31, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.executeQuotaErrorCallbacks = async function() {
            for (const t of o.quotaErrorCallbacks) await t()
        };
        r(d[0]);
        var o = r(d[1]);
        r(d[2])
    }), 32, [8, 33, 7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.quotaErrorCallbacks = void 0, r(d[0]);
        e.quotaErrorCallbacks = new Set
    }), 33, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.timeout = function(t) {
            return new Promise((u => setTimeout(u, t)))
        }, r(d[0])
    }), 34, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        try {
            self['workbox:strategies:6.1.1'] && _()
        } catch (t) {}
    }), 35, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.registerRoute = function(f, s, c) {
            let R;
            if ('string' == typeof f) {
                const t = new URL(f, location.href),
                    u = ({
                        url: o
                    }) => o.href === t.href;
                R = new o.Route(u, s, c)
            } else if (f instanceof RegExp) R = new u.RegExpRoute(f, s, c);
            else if ('function' == typeof f) R = new o.Route(f, s, c);
            else {
                if (!(f instanceof o.Route)) throw new t.WorkboxError('unsupported-route-type', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture'
                });
                R = f
            }
            return (0, n.getOrCreateDefaultRouter)().registerRoute(R), R
        };
        r(d[0]);
        var t = r(d[1]),
            o = r(d[2]),
            u = r(d[3]),
            n = r(d[4]);
        r(d[5])
    }), 36, [8, 4, 9, 37, 38, 11]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.RegExpRoute = void 0;
        r(d[0]), r(d[1]);
        var o = r(d[2]);
        r(d[3]);
        class t extends o.Route {
            constructor(o, t, n) {
                super((({
                    url: t
                }) => {
                    const n = o.exec(t.href);
                    if (n && (t.origin === location.origin || 0 === n.index)) return n.slice(1)
                }), t, n)
            }
        }
        e.RegExpRoute = t
    }), 37, [3, 8, 9, 11]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getOrCreateDefaultRouter = void 0;
        var t = r(d[0]);
        let u;
        r(d[1]);
        e.getOrCreateDefaultRouter = () => (u || (u = new t.Router, u.addFetchListener(), u.addCacheListener()), u)
    }), 38, [39, 11]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Router = void 0;
        r(d[0]), r(d[1]);
        var t = r(d[2]),
            s = (r(d[3]), r(d[4])),
            n = r(d[5]);
        r(d[6]);
        e.Router = class {
            constructor() {
                this._routes = new Map, this._defaultHandlerMap = new Map
            }
            get routes() {
                return this._routes
            }
            addFetchListener() {
                self.addEventListener('fetch', (t => {
                    const {
                        request: s
                    } = t, n = this.handleRequest({
                        request: s,
                        event: t
                    });
                    n && t.respondWith(n)
                }))
            }
            addCacheListener() {
                self.addEventListener('message', (t => {
                    if (t.data && 'CACHE_URLS' === t.data.type) {
                        const {
                            payload: s
                        } = t.data, n = Promise.all(s.urlsToCache.map((s => {
                            'string' == typeof s && (s = [s]);
                            const n = new Request(...s);
                            return this.handleRequest({
                                request: n,
                                event: t
                            })
                        })));
                        t.waitUntil(n), t.ports && t.ports[0] && n.then((() => t.ports[0].postMessage(!0)))
                    }
                }))
            }
            handleRequest({
                request: t,
                event: s
            }) {
                const n = new URL(t.url, location.href);
                if (!n.protocol.startsWith('http')) return;
                const o = n.origin === location.origin,
                    {
                        params: h,
                        route: u
                    } = this.findMatchingRoute({
                        event: s,
                        request: t,
                        sameOrigin: o,
                        url: n
                    });
                let l = u && u.handler;
                const c = t.method;
                if (!l && this._defaultHandlerMap.has(c) && (l = this._defaultHandlerMap.get(c)), !l) return;
                let f;
                try {
                    f = l.handle({
                        url: n,
                        request: t,
                        event: s,
                        params: h
                    })
                } catch (t) {
                    f = Promise.reject(t)
                }
                const p = u && u.catchHandler;
                return f instanceof Promise && (this._catchHandler || p) && (f = f.catch((async o => {
                    if (p) try {
                        return await p.handle({
                            url: n,
                            request: t,
                            event: s,
                            params: h
                        })
                    } catch (t) {
                        o = t
                    }
                    if (this._catchHandler) return this._catchHandler.handle({
                        url: n,
                        request: t,
                        event: s
                    });
                    throw o
                }))), f
            }
            findMatchingRoute({
                url: t,
                sameOrigin: s,
                request: n,
                event: o
            }) {
                const h = this._routes.get(n.method) || [];
                for (const u of h) {
                    let h;
                    const l = u.match({
                        url: t,
                        sameOrigin: s,
                        request: n,
                        event: o
                    });
                    if (l) return h = l, (Array.isArray(l) && 0 === l.length || l.constructor === Object && 0 === Object.keys(l).length || 'boolean' == typeof l) && (h = void 0), {
                        route: u,
                        params: h
                    }
                }
                return {}
            }
            setDefaultHandler(n, o = t.defaultMethod) {
                this._defaultHandlerMap.set(o, (0, s.normalizeHandler)(n))
            }
            setCatchHandler(t) {
                this._catchHandler = (0, s.normalizeHandler)(t)
            }
            registerRoute(t) {
                this._routes.has(t.method) || this._routes.set(t.method, []), this._routes.get(t.method).push(t)
            }
            unregisterRoute(t) {
                if (!this._routes.has(t.method)) throw new n.WorkboxError('unregister-route-but-not-found-with-method', {
                    method: t.method
                });
                const s = this._routes.get(t.method).indexOf(t);
                if (!(s > -1)) throw new n.WorkboxError('unregister-route-route-not-registered');
                this._routes.get(t.method).splice(s, 1)
            }
        }
    }), 39, [3, 27, 10, 8, 12, 4, 11]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.DEFAULT_DEV_STATE = e.CACHE_KEY_NAME = e.CACHE_BUCKET_KEY = void 0, e.__resetCachedStoredState = function() {
            f = void 0
        }, e.createPrefixStyle = n, e.default = function({
            createEagerly: t,
            categoriesToInclude: s,
            category: u,
            prefixStyle: f,
            queueMessages: E = !0
        }) {
            const _ = f ? ? n(),
                p = [];
            let A, b = !1;

            function C() {
                A ? p.length > 0 && (p.forEach((t => t())), p.length = 0) : p.length = 0
            }
            if (b) C();
            else {
                (function() {
                    h(s).then((({
                        categories: t,
                        override: o
                    }) => (A = o ? o !== c.DISABLE_ALL : t && t.some((({
                        enabled: t,
                        name: o
                    }) => t && (o.startsWith(u) || u.startsWith(o)))), b = !0, {
                        categories: t,
                        override: o
                    }))).then(o).then((t => {
                        if (C(), !A) return;
                        const {
                            override: o
                        } = t
                    }))
                })()
            }

            function S(t, o) {
                try {
                    if (o && !o()) return;
                    if (void 0 === A && E) return void p.push((() => S(t)));
                    if (!0 !== A) return;
                    const n = t();
                    Array.isArray(n) ? l(`%c${u}%c:`, _, '', ...n) : l(`%c${u}%c:`, _, '', n)
                } catch (t) {
                    console.error(t)
                }
            }
            return S.group = t => {
                try {
                    console.groupCollapsed(`%c${u}%c:%c${t}`, _, '', _)
                } catch {}
            }, S.groupEnd = () => {
                try {
                    console.groupEnd()
                } catch {}
            }, S.table = t => {
                try {
                    const [o, n] = t();
                    S.group(o), console.table(n), S.groupEnd()
                } catch {}
            }, S
        }, e.getCategoriesFromQueryParams = _, e.getCombinedState = h, e.getStoredState = void 0;
        var t = r(d[0]);

        function o(t) {
            return new Promise((o => setTimeout((() => {
                o(t)
            }))))
        }

        function n(t = "rebeccapurple", o = "#fff") {
            return `background: ${t}; color: ${o}; padding: 2.5px 5.5px; border-radius: 8px; font-size: 11px; font-weight: bold`
        }
        const c = {
                DISABLE_ALL: 'disable_all',
                ENABLE_ALL: 'enable_all'
            },
            s = e.CACHE_BUCKET_KEY = 'airbnb_debug_logging',
            u = e.CACHE_KEY_NAME = 'debugCategory';

        function l(...t) {
            try {
                console.log(...t)
            } catch {}
        }
        n('#fff', 'rebeccapurple'), n('#009e1a', '#fff');
        e.DEFAULT_DEV_STATE = {
            categories: [{
                name: 'ServiceWorker:',
                enabled: !0
            }]
        };
        let f;
        const E = () => f ? Promise.resolve(f) : (0, t.getFromCache)(s, u).then(o).then((t => {
            if (t) {
                JSON.parse(t)
            }
            return {}
        }));
        e.getStoredState = E;

        function _(t) {
            return {}
        }

        function h(t) {
            return Promise.resolve({})
        }
    }), 40, [41]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getFromCache = function(t, n) {
            if ('undefined' == typeof caches) return Promise.resolve(void 0);
            const c = `/${n}`;
            return caches.open(t).catch((() => {})).then((t => {
                if (t) return t.match(c).then((t => t ? .text()))
            })).catch((t => {
                if ('SecurityError' !== t ? .name && 'QuotaExceededError' !== t ? .name) throw t
            }))
        }, e.storeInCache = function(t, n, c) {
            if ('undefined' == typeof caches) return Promise.resolve(!1);
            const o = `/${n}`;
            return caches.open(t).catch((() => {})).then((async t => !!t && (void 0 === c ? t.delete(o) : (await t.put(o, new Response(c)), !0)))).catch((t => {
                if ('SecurityError' === t ? .name) return !1;
                throw t
            }))
        }
    }), 41, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SERVER_TIMING_HEADER = e.MSG_SW_ERROR = e.MSG_SKIP_WAITING = e.MSG_PRECACHE_ASSETS = e.MSG_NOTIFICATION_CLICKED = e.MSG_LOG_JITNEY_EVENT = e.MSG_FLUSH_MESSAGES = e.MSG_CLEAR_SHELL_CACHE = e.MSG_AIRDOG_BUMP = void 0;
        e.MSG_PRECACHE_ASSETS = 'PRECACHE_ASSETS', e.MSG_AIRDOG_BUMP = 'AIRDOG_BUMP', e.MSG_CLEAR_SHELL_CACHE = 'CLEAR_SHELL_CACHE', e.MSG_FLUSH_MESSAGES = 'FLUSH_MESSAGES', e.MSG_LOG_JITNEY_EVENT = 'LOG_JITNEY_EVENT', e.MSG_NOTIFICATION_CLICKED = 'NOTIFICATION_CLICKED', e.MSG_SKIP_WAITING = 'SKIP_WAITING', e.MSG_SW_ERROR = 'SW_ERROR', e.SERVER_TIMING_HEADER = 'Server-Timing'
    }), 42, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.addParams = t, e.default = function(n) {
            return Object.entries(n).reduce(((n, [l, c]) => ({ ...n,
                [l]: t(c)
            })), {})
        };
        var n = r(d[0]);

        function t(t) {
            const l = (0, n.getServiceWorkerParams)().force_env,
                c = (0, n.getServiceWorkerParams)().force_staging,
                s = (0, n.getServiceWorkerParams)().enableReactProfiler,
                o = (0, n.getServiceWorkerParams)().force_disable_3p_js;
            if (null === l && null === c && null === s && null === o) return t;
            const u = t.split('?')[0],
                f = t.split('?')[1],
                _ = new URLSearchParams(f);
            return null !== l && _.append('force_env', String(l)), null !== c && _.append('force_staging', String(c)), null !== s && _.append('enableReactProfiler', String(s)), null !== o && _.append('force_disable_3p_js', String(o)), `${u}?${String(_)}`
        }
    }), 43, [44]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getServiceWorkerParams = function() {
            const o = (0, _.getScriptUrl)();
            if (void 0 !== o && s === o) return c;
            return s = o, c = {
                disable_app_shell: n(l('disable_app_shell')),
                dynamic_precaching: n(l('dynamic_precaching')),
                deliver_app_shell_experiment: n(l('deliver_app_shell_experiment')),
                deliver_pre_caching_experiment: n(l('deliver_pre_caching_experiment')),
                deliver_trips_offline_experiment: n(l('deliver_trips_offline_experiment')),
                force_disable_3p_js: l('force_disable_3p_js'),
                force_env: l('force_env'),
                force_staging: l('force_staging'),
                offline: l('offline'),
                sw_disable_niobe_cache: n(l('sw_disable_niobe_cache')),
                sw_pwa_disable_niobe_cache: n(l('sw_pwa_disable_niobe_cache')),
                sw_enable_offline: n(l('sw_enable_offline')),
                sw_workbox_dev_logs: n(l('sw_workbox_dev_logs')),
                sw_allow_shell_on_search_verticals: n(l('sw_allow_shell_on_search_verticals')),
                utm_source: l('utm_source'),
                enableReactProfiler: l('enableReactProfiler')
            }, c
        };
        var _ = r(d[0]);

        function l(l) {
            const n = (0, _.getScriptUrl)();
            if (!n) return null;
            const {
                searchParams: s
            } = new URL(n);
            return s.get(l)
        }

        function n(_) {
            return null === _ ? null : !['false', '0'].includes(_) && ['', '1', 'true'].includes(_)
        }
        let s, c
    }), 44, [45]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getScriptUrl = function() {
            let t = self ? .serviceWorker ? .scriptURL;
            t || (t = self ? .registration ? .active ? .scriptURL);
            t || (t = self ? .registration ? .waiting ? .scriptURL);
            t || (t = self ? .registration ? .installing ? .scriptURL);
            return t
        }
    }), 45, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function({
            reuseOnlyOpenTab: t
        } = {
            reuseOnlyOpenTab: !0
        }) {
            self.addEventListener('push', (t => {
                t.waitUntil(h(t, self.registration))
            })), self.addEventListener('notificationclose', (t => {
                t.waitUntil(b(t))
            })), self.addEventListener('notificationclick', (n => {
                n.waitUntil(w(n, self, t))
            }))
        }, e.handleNotificationClick = w, e.handleNotificationClose = b, e.handleNotificationPush = h;
        var n = r(d[1]),
            o = r(d[2]),
            s = t(r(d[3])),
            c = t(r(d[4]));
        const f = (0, n.getLogger)(),
            l = 'https://airbnb-photos.s3.amazonaws.com/pictures/webappmanifest/icons/original/9c85cac9-835f-4fca-bf5f-5563bf1d0b82.png',
            u = 'https://airbnb-photos.s3.amazonaws.com/pictures/webappmanifest/icons/original/5ab000fc-65e6-4ef1-a65a-792b89e531ba.png';

        function p(t) {
            return t.data ? !!t ? .data ? .url || (f((() => ['Notification is invalid as it\u2019s missing the url property on data', t])), !1) : (f((() => ['Notification is invalid as it\u2019s missing the data property', t])), !1)
        }
        async function h(t, n) {
            if (!t ? .data) return void await (0, s.default)('push_notification.missing_data');
            const {
                options: c,
                title: h
            } = t.data.json();
            if (p(c)) {
                f((() => ['Received push notification', {
                    title: h,
                    options: c
                }]));
                try {
                    await n.showNotification(h, {
                        body: c.body,
                        data: c.data,
                        tag: c.tag ? ? 'default_message_tag',
                        vibrate: c.vibrate ? ? [200, 100, 200],
                        actions: c.actions ? ? [],
                        icon: c.icon ? ? u,
                        badge: c.badge ? ? l,
                        image: c.image ? ? void 0
                    })
                } catch (t) {
                    return f((() => 'Error displaying push notification')), void await (0, s.default)('push_notification.error_showing_notification')
                }
                await (0, o.logPushNotificationReceived)(c.data.uuid)
            } else await (0, s.default)('push_notification.missing_options')
        }
        async function w(t, n, s = !0) {
            if (f((() => ['Notification was clicked', t.notification.data])), t.notification.close(), !p(t.notification)) return;
            const l = await n.clients.matchAll({
                    type: 'window',
                    includeUncontrolled: !0
                }),
                {
                    action: u,
                    reply: h
                } = t,
                {
                    data: {
                        url: w,
                        uuid: b
                    }
                } = t.notification;
            try {
                await (0, o.logPushNotificationClicked)(b, w, u)
            } catch {}
            const v = (0, c.default)(w, {
                    selectedAction: u,
                    reply: h
                }),
                y = new URL(v).pathname,
                _ = l.find((t => t.url === v));
            if (_ && 'focus' in _) return void await _.focus();
            if (s) {
                const t = 1 === l.length && l[0] || void 0,
                    n = l.find((t => new URL(t.url).pathname === y)) || t;
                if (n && (n.postMessage({
                        payload: v,
                        type: 'NOTIFICATION_CLICKED'
                    }), 'focus' in n)) return void await n.focus()
            }
            await n.clients.openWindow(v) || f((() => ['Could not open a browser instance', {
                clientList: l,
                event: t,
                targetUrl: w
            }]))
        }
        async function b(t) {
            f((() => ['Notification was closed'])), (0, o.logPushNotificationClosed)(t.notification.data.uuid)
        }
    }), 46, [1, 47, 50, 54, 56]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(t, o) {
            return u = (0, n.default)({
                category: t,
                prefixStyle: o
            }), f.forEach(u), f.length = 0, u
        }, e.getLogger = function() {
            return u || o
        };
        var n = t(r(d[1]));
        let u;
        const f = [];

        function o(t) {
            u ? u(t) : f.push(t)
        }
    }), 47, [1, 48]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.createPrefixStyle = o, e.default = function({
            category: t,
            prefixStyle: n
        }) {
            const l = n ? ? o(),
                f = [];
            let b, y = !1;
            async function _() {
                const {
                    categories: n,
                    override: o
                } = await s();
                return b = o ? o !== c.DISABLE_ALL : n && n.some((({
                    enabled: n,
                    name: o
                }) => n && t.startsWith(o))), y = !0, {
                    categories: n,
                    override: o
                }
            }

            function p() {
                b ? f.length > 0 && (f.forEach((t => t())), f.length = 0) : f.length = 0
            }
            if (y) p();
            else {
                (async function() {
                    await _(), p()
                })()
            }
            return function n(o) {
                try {
                    if (void 0 === b) return void f.push((() => n(o)));
                    if (!0 !== b) return;
                    const c = o();
                    Array.isArray(c) ? u(`%c${t}%c:`, l, '', ...c) : u(`%c${t}%c:`, l, '', c)
                } catch (t) {
                    console.error(t)
                }
            }
        };
        var n = t(r(d[1]));

        function o(t = "rebeccapurple", n = "#fff") {
            return `background: ${t}; color: ${n}; padding: 2.5px 5.5px; border-radius: 8px; font-size: 11px; font-weight: bold`
        }
        const c = {
                DISABLE_ALL: 'disable_all',
                ENABLE_ALL: 'enable_all'
            },
            l = (0, n.default)('airbnb_debug_logging', 'debugCategory');

        function u(...t) {
            try {
                console.log(...t)
            } catch {}
        }
        let f;
        async function s() {
            return f || (f = await l.get(), f || {})
        }
    }), 48, [1, 49]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        async function t(t, n) {
            if (!t) return;
            let c;
            try {
                c = await t.match(n)
            } catch {
                return
            }
            const s = await (c ? .text());
            if (void 0 === s) return;
            return JSON.parse(s)
        }
        async function n(t, n, c) {
            t && (void 0 === c ? await t.delete(n) : await t.put(n, new Response(JSON.stringify(c))))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(c, s) {
            const u = `/${s}`;
            if ('undefined' == typeof caches) return {
                clear: async () => {},
                get: async () => {},
                set: async t => {}
            };
            const o = caches.open(c).catch((() => {}));
            return {
                clear: async () => {
                    const t = await o;
                    if (t) return n(t, u, void 0)
                },
                get: async () => {
                    const n = await o;
                    if (n) return t(n, u)
                },
                set: async t => {
                    const c = await o;
                    if (c) return n(c, u, t)
                }
            }
        }
    }), 49, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.logPushNotificationClicked = async function(t, n, o) {
            const u = JSON.stringify({
                destination_url: n,
                action_type: o || null
            });
            await c(t, s.RookeryStatus.ACTION, 'web_push_clicked', u)
        }, e.logPushNotificationClosed = async function(t) {
            await c(t, s.RookeryStatus.ACTION, 'web_push_closed')
        }, e.logPushNotificationReceived = async function(t) {
            await c(t, s.RookeryStatus.RECEIVE, 'web_push_received')
        };
        var n = t(r(d[1])),
            o = t(r(d[2])),
            s = r(d[3]);
        const u = 7;
        async function c(t, c, l, _) {
            if (!t) return void await (0, o.default)("push_notification.logging_error.missing_uuid");
            const f = {
                schemaName: s.ROOKERY_MESSAGE_PACKAGE_SCHEMA,
                eventData: {
                    uuid: t,
                    status: c,
                    label: l,
                    channel: u,
                    metadata: _
                }
            };
            await (0, n.default)(f)
        }
    }), 50, [1, 51, 54, 55]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = async function(t) {
            await s.push(t)
        };
        var n = r(d[1]);
        const s = (0, t(r(d[2])).default)('jitney-events', (({
            eventData: t,
            schemaName: s
        }) => ({
            type: n.MSG_LOG_JITNEY_EVENT,
            eventData: t,
            schemaName: s
        })))
    }), 51, [1, 42, 52]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(t, c) {
            const l = (0, n.default)('queued-events', t);
            async function f() {
                if (!self.registration.active) return;
                const s = await l.get();
                if (!s) return;
                const n = await (0, u.default)();
                n ? (s.forEach((s => {
                    const u = c(s);
                    o((() => [`[${t}]: Posting queued message to client`, u])), n.postMessage(u)
                })), await l.clear(), o((() => `[${t}]: Flushed all queued messages`))) : o((() => `[${t}]: Waiting on a client to become active to flush the message queue`))
            }
            return self.addEventListener('message', (t => {
                t.type === s.MSG_FLUSH_MESSAGES && t.waitUntil(f())
            })), self.addEventListener('activate', (t => {
                t.waitUntil(f())
            })), f(), {
                flushWithCache: f,
                push: async function(s) {
                    if (!self.registration.active) return;
                    const n = await (0, u.default)();
                    if (!n) {
                        const n = await l.get() ? ? [];
                        return n.push(s), await l.set(n), void o((() => [`[${t}]: No active client, queuing message for later`, {
                            queuedValues: n,
                            value: s
                        }]))
                    }
                    const f = c(s);
                    o((() => [`[${t}]: Posting message to client`, f])), n.postMessage(f)
                }
            }
        };
        var s = r(d[1]),
            n = t(r(d[2])),
            u = t(r(d[3]));
        const o = (0, r(d[4]).getLogger)()
    }), 52, [1, 42, 49, 53, 47]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = async function() {
            const t = await self.clients.matchAll({
                type: 'window'
            });
            if (0 === t.length) return null;
            const n = t.filter((t => 'visible' === t.visibilityState));
            return n.length > 0 ? n[0] : t[0]
        }
    }), 53, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = async function(t, n = 1, s) {
            await u.push({
                name: t,
                count: n,
                tags: s ? Object.entries(s).map((([t, n]) => `${t}:${n}`)).join(',') : ''
            })
        };
        var n = r(d[1]);
        const u = (0, t(r(d[2])).default)('airdog-bumps-v2', (t => ({
            type: n.MSG_AIRDOG_BUMP,
            event: t
        })))
    }), 54, [1, 42, 52]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.RookeryStatus = e.ROOKERY_MESSAGE_PACKAGE_SCHEMA = void 0;
        e.ROOKERY_MESSAGE_PACKAGE_SCHEMA = 'RookeryMessagePackageEvent';
        e.RookeryStatus = (function(E) {
            return E[E.RECEIVE = 5] = "RECEIVE", E[E.OPEN = 6] = "OPEN", E[E.ACTION = 7] = "ACTION", E
        })({})
    }), 55, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(n, {
            selectedAction: t,
            reply: c
        }) {
            const p = new URL(n),
                s = p.searchParams;
            t && s.append('pushAction', t);
            c && s.append('pushReply', c);
            const o = String(s) ? `?${String(s)}` : '';
            return `${p.origin}${p.pathname}${o}`
        }
    }), 56, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function() {
            const s = (0, t.getLogger)();
            let n = !1,
                l = !1;
            self.addEventListener('activate', (t => {
                n = !0, s((() => "Activate signal received, claiming all clients for this service worker")), t.waitUntil(self.clients.claim())
            })), self.addEventListener('install', (async () => {
                s((() => 'Install signal received, activating this service worker immediately')), self.skipWaiting()
            })), self.addEventListener('message', (async t => {
                if ('SKIP_WAITING' === t.data.type) {
                    if (l) return;
                    l = !0, s((() => 'Received manual skip waiting signal, attempting forceful installation.')), await Promise.race([self.skipWaiting(), new Promise((t => setTimeout(t, 2e3)))]), n || (s((() => 'Unable to automatically activate service worker, try refreshing or closing other Airbnb tabs.')), t.ports[0].postMessage(!1))
                }
            }))
        };
        var t = r(d[0])
    }), 57, [47]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function({
            shellCacheName: t,
            shellUrls: h
        }) {
            const f = (0, u.getLogger)();
            self.addEventListener('fetch', (u => {
                const _ = o.find((t => t.test(u.request.url) && !n.test(u.request.url))),
                    q = c.find((t => t.test(u.request.url) && !n.test(u.request.url)));
                'POST' !== u.request.method && 'PUT' !== u.request.method || !_ && !q || (f((() => `Responding to ${u.request.method} request to "${u.request.url}" that requires clearing state`)), u.respondWith((async function() {
                    return q && (await (0, l.clearShellCache)({
                        shellCacheName: t,
                        shellUrls: h
                    }), await (0, s.default)()), fetch(u.request).then((async u => (_ && (u ? .ok || 0 === u ? .status || u ? .redirected) ? (await (0, l.clearShellCache)({
                        shellCacheName: t,
                        shellUrls: h
                    }), await (0, s.default)()) : f((() => ['Response did not satisfy success conditions, shell cache not cleared', u])), u)))
                })()))
            }))
        };
        var s = t(r(d[1])),
            l = r(d[2]),
            u = r(d[3]);
        const o = [/logout/i, /authenticate/i, /create/i, /signup_for_web/i, /login_for_web/i, /oauth_login_with_redirect/i, /oauth_callback/i, /[&?]sso_authentication=true/i, /forgot_passwords/i],
            c = [/v2\/user_community_commitments/i],
            n = /\/api\/v3/i
    }), 58, [1, 59, 60, 47]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = async function() {
            try {
                const n = await self.registration.pushManager.getSubscription();
                if (!n) return;
                t((() => ['Removing push notification subscription'])), await n.unsubscribe()
            } catch {}
        };
        const t = (0, r(d[0]).getLogger)()
    }), 59, [47]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.backgroundPrefetchShell = async function({
            shellUrl: t,
            shellCacheName: s
        }) {
            try {
                const h = (0, l.getLogger)();
                h((() => `Fetching app shell at "${t}" for future requests`));
                const [u, p] = await Promise.all([o({
                    shellUrl: t,
                    redirect: 'error'
                }), caches.open(s).catch((() => {}))]);
                if (!p) return;
                if (!u.headers.get('X-Airbnb-Is-App-Shell')) return void h((() => ['Expected to get a response with "X-Airbnb-Is-App-Shell" but did not, falling back to full request', u.clone()]));
                if (!(0, n.default)(u)) {
                    h((() => ['Expected to get a response with "content-type: text/html; charset=utf-8" but did not, falling back to full request', u.clone()]));
                    const t = new URL(u.url);
                    return void(0, c.default)('prefetch_shell_wrong_content_type', 1, {
                        content_type: u.headers.get('content-type') || 'none',
                        status: String(u.status),
                        pathname: t.pathname,
                        hostname: t.hostname
                    })
                }
                return u.ok ? (h((() => 'Successfully retrieved and stored the app shell, append "?forceResetServiceWorker" to clear the stored shell.')), p.put(t, u.clone())) : h((() => `Attempt to fetch the shell at "${t}" failed with code: "${u.status}" and message "${u.statusText}.This response will be ignored by the service worker.`)), u
            } catch (t) {
                throw (0, l.getLogger)()((() => ['Unexpected failure fetching app shell', t])), new Error('Failed to fetch app shell')
            }
        }, e.clearShellCache = async function({
            shellCacheName: t,
            shellUrls: l
        }) {
            let c;
            try {
                c = await caches.open(t)
            } catch {
                return
            }
            if (!c) return;
            try {
                await Promise.all(l.map((t => c.delete(t))))
            } catch {}
        }, e.deleteShellCache = async function(t) {
            await caches.delete(t)
        }, e.fetchAsServiceWorker = o;
        var l = r(d[1]),
            c = t(r(d[2])),
            n = t(r(d[3]));
        const s = 'X-Airbnb-ServiceWorker';

        function o({
            shellUrl: t,
            redirect: l
        }) {
            return fetch(t, {
                credentials: 'include',
                headers: {
                    [s]: 'true'
                },
                redirect: l
            })
        }
    }), 60, [1, 47, 54, 61]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(t) {
            const n = (t.headers.get('content-type') || '').toLowerCase();
            return n.indexOf('text/html') > -1 && n.indexOf('charset=utf-8') > -1
        }
    }), 61, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function({
            shellUrl: t,
            maxCacheAgeMs: n,
            minShellRefreshTimeMs: p,
            shellCacheName: _,
            offlineFallback: w,
            useNativeOfflineState: v = !1
        }) {
            const S = (0, l.getLogger)();
            return async function({
                event: l,
                request: b,
                url: y,
                params: k
            }) {
                if (!v && !navigator.onLine && w) return S((() => 'Serving offline fallback request due to "useNativeOfflineState" not being set.')), w({
                    event: l,
                    request: b,
                    url: y,
                    params: k
                });
                if (v && !navigator.onLine) return S((() => 'Serving default offline request due to "useNativeOfflineState" being set.')), fetch(b);
                const {
                    searchParams: N = new Set
                } = y ? ? {}, R = await (0, f.getSavedParam)('sw_enable_offline') || await (0, f.getSavedParam)('deliver_trips_offline_experiment');
                if (y && !N.has('force_sw_prod_appshell') && !R && (0, o.default)(y)) {
                    S((() => 'Serving a uncached app shell on next / staging. Set "?force_sw_prod_appshell" to use the app shell on next / staging.'));
                    try {
                        const n = performance.now(),
                            l = await (0, s.fetchAsServiceWorker)({
                                shellUrl: t
                            });
                        return (0, h.default)(l) ? u(l, performance.now() - n, !0) : (S((() => "The stored shell had a content type that did not match 'text/html; charset=utf-8' and wasnt used")), (0, c.default)('handle_shell_wrong_content_type'), fetch(b))
                    } catch (t) {
                        return S((() => ['Unable to fetch fresh shell on Next, falling back to normal request', t])), fetch(b)
                    }
                }
                try {
                    const o = performance.now();
                    let f;
                    S((() => 'Attempting to use app shell to handle request'));
                    try {
                        f = await caches.open(_)
                    } catch {
                        return fetch(b)
                    }
                    if (!f) return fetch(b);
                    const w = await f.match(t);
                    if (!w || !w.headers.has('Date') || !w.ok) {
                        if (S((() => 'No app shell was found in the cache, using full request instead')), setTimeout((() => {
                                (0, s.backgroundPrefetchShell)({
                                    shellUrl: t,
                                    shellCacheName: _
                                })
                            }), 5e3), l instanceof FetchEvent && l.preloadResponse) {
                            const t = await l.preloadResponse;
                            if (t) return S((() => 'A navigation preload response was found and used for this request')), t
                        }
                        return fetch(b)
                    }
                    const v = Date.parse(w.headers.get('Date') || '');
                    if (Date.now() - v > n) return S((() => `The stored shell expired with an age of "${v}" and wasnt used`)), (0, s.backgroundPrefetchShell)({
                        shellUrl: t,
                        shellCacheName: _
                    }), (0, c.default)('handle_shell_out_of_date'), fetch(b);
                    if (!(0, h.default)(w)) {
                        S((() => "The stored shell had a content type that did not match 'text/html; charset=utf-8' and wasnt used")), (0, s.backgroundPrefetchShell)({
                            shellUrl: t,
                            shellCacheName: _
                        });
                        const n = new URL(w.url);
                        return (0, c.default)('handle_shell_wrong_content_type', 1, {
                            content_type: w.headers.get('content-type') || 'none',
                            status: String(w.status),
                            pathname: n.pathname,
                            hostname: n.hostname
                        }), fetch(b)
                    }
                    Date.now() - v > p && (S((() => 'triggering a refresh of the app shell in 30 seconds')), setTimeout((() => {
                        (0, s.backgroundPrefetchShell)({
                            shellUrl: t,
                            shellCacheName: _
                        })
                    }), 3e4));
                    const y = performance.now() - o;
                    return S((() => `Serving from app shell, duration was "${y}", append "?forceResetServiceWorker" to clear the stored shell.`)), u(w, y)
                } catch (t) {
                    return S((() => ['Unknown error trying to serve from app shell', t])), fetch(b)
                }
            }
        };
        var n = r(d[1]),
            s = r(d[2]),
            l = r(d[3]),
            o = t(r(d[4])),
            h = t(r(d[5])),
            c = t(r(d[6])),
            f = r(d[7]);

        function u(t, s, l) {
            const o = t.headers.get(n.SERVER_TIMING_HEADER);
            let h = `serviceWorker;dur=${s}`;
            o && (h += `, ${o}`);
            const c = new Headers(t.headers);
            return c.set(n.SERVER_TIMING_HEADER, h), l && c.set('X-Airbnb-Forced-Fresh-Shell', 'on'), new Response(t.body, {
                status: t.status,
                statusText: t.statusText,
                headers: c
            })
        }
    }), 62, [1, 42, 60, 47, 63, 61, 54, 64]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(t) {
            return t.hostname.toLowerCase().endsWith('next.airbnb.com') || t.hostname.toLowerCase().endsWith('staging.airbnb.com')
        }
    }), 63, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getSavedParam = async function(t, c) {
            const o = (0, n.default)(s.cacheNames.settings, 'saved-state');
            let v = (0, u.getServiceWorkerParams)()[t],
                f = await o.get();
            if (void 0 === f) return f = {
                [t]: v
            }, await o.set(f), v;
            const w = f[t];
            null !== v && w !== v && (await o.set({ ...f,
                [t]: v
            }), await (c ? .()), l((() => `Saved param changed to "${v}".`)));
            null === v && null != w && (v = w);
            return v
        };
        var n = t(r(d[1])),
            s = r(d[2]),
            c = r(d[3]),
            u = r(d[4]);
        const l = (0, c.getLogger)()
    }), 64, [1, 49, 65, 47, 44]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.currentCaches = e.cacheNames = void 0;
        var c = r(d[0]);
        const s = e.cacheNames = (0, c.generateCacheNames)(1);
        e.currentCaches = Object.values(s)
    }), 65, [66]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.generateCacheNames = function(n, c = _) {
            return {
                fonts: `fonts_${n}`,
                trips_images: `trips_images_${n}`,
                scripts: `scripts_${n}`,
                settings: `${c}_settings_${n}`,
                shell: `${c}_shell_${n}`,
                [s.NiobeCacheName]: `${s.NiobeCacheName}_${n}`,
                [t.ApiV2CacheName]: `${t.ApiV2CacheName}_${n}`
            }
        };
        var s = r(d[0]),
            t = r(d[1]);
        const _ = 'airbnb'
    }), 66, [67, 68]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SW_FETCH_POLICY_HEADER = e.NiobeCacheName = void 0;
        e.NiobeCacheName = 'niobe', e.SW_FETCH_POLICY_HEADER = 'X-Airbnb-SW-Fetch-Policy'
    }), 67, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ApiV2CacheName = void 0;
        e.ApiV2CacheName = 'apiV2'
    }), 68, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(t) {
            return {
                requestWillFetch: async ({
                    request: u
                }) => {
                    if (!u.url.includes(t)) return u;
                    return new Request(u, {
                        redirect: 'error'
                    })
                }
            }
        }
    }), 69, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function() {
            self.addEventListener('error', (t => {
                try {
                    f.push(t.error), o()
                } catch (t) {}
            })), self.addEventListener('message', (t => {
                t.data.type === s.MSG_FLUSH_MESSAGES && o()
            }))
        };
        var s = r(d[1]),
            n = t(r(d[2]));
        let f = [];
        async function o() {
            if (!self.registration.active) return;
            const t = await (0, n.default)();
            t && (f.forEach((n => {
                t.postMessage({
                    type: s.MSG_SW_ERROR,
                    error: n
                })
            })), f = [])
        }
    }), 70, [1, 42, 53]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(o) {
            const u = (0, c.getLogger)(),
                l = [...Object.values(t.cacheNames), ...s];
            return caches.keys().then((t => Promise.all(t.filter((t => -1 === l.indexOf(t) && -1 === o.indexOf(t))).map((t => {
                u((() => `Deleting outdated IDB & Cache entries for ${t}`));
                return new n.CacheExpiration(t, {
                    maxEntries: 1
                }).delete(), caches.delete(t)
            })))))
        };
        var t = r(d[0]),
            n = r(d[1]),
            c = r(d[2]);
        const s = ['airbnb_debug_logging', 'airbnb_push_notifications']
    }), 71, [72, 88, 47]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = r(d[0]);
        Object.keys(t).forEach((function(n) {
            "default" !== n && "__esModule" !== n && (n in e && e[n] === t[n] || Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            }))
        }))
    }), 72, [73]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = {
            registerQuotaErrorCallback: !0,
            _private: !0,
            cacheNames: !0,
            copyResponse: !0,
            clientsClaim: !0,
            setCacheNameDetails: !0,
            skipWaiting: !0
        };
        e._private = void 0, Object.defineProperty(e, "cacheNames", {
            enumerable: !0,
            get: function() {
                return u.cacheNames
            }
        }), Object.defineProperty(e, "clientsClaim", {
            enumerable: !0,
            get: function() {
                return l.clientsClaim
            }
        }), Object.defineProperty(e, "copyResponse", {
            enumerable: !0,
            get: function() {
                return s.copyResponse
            }
        }), Object.defineProperty(e, "registerQuotaErrorCallback", {
            enumerable: !0,
            get: function() {
                return c.registerQuotaErrorCallback
            }
        }), Object.defineProperty(e, "setCacheNameDetails", {
            enumerable: !0,
            get: function() {
                return p.setCacheNameDetails
            }
        }), Object.defineProperty(e, "skipWaiting", {
            enumerable: !0,
            get: function() {
                return b.skipWaiting
            }
        });
        var c = r(d[1]),
            o = t(r(d[2]));
        e._private = o;
        var u = r(d[3]),
            s = r(d[4]),
            l = r(d[5]),
            p = r(d[6]),
            b = r(d[7]);
        r(d[8]);
        var f = r(d[9]);
        Object.keys(f).forEach((function(t) {
            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(n, t) || t in e && e[t] === f[t] || Object.defineProperty(e, t, {
                enumerable: !0,
                get: function() {
                    return f[t]
                }
            }))
        }))
    }), 73, [74, 76, 77, 83, 25, 84, 85, 86, 7, 87]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]).default;

        function n(t) {
            if ("function" != typeof WeakMap) return null;
            var o = new WeakMap,
                u = new WeakMap;
            return (n = function(t) {
                return t ? u : o
            })(t)
        }
        m.exports = function(o, u) {
            if (!u && o && o.__esModule) return o;
            if (null === o || "object" != t(o) && "function" != typeof o) return {
                default: o
            };
            var f = n(u);
            if (f && f.has(o)) return f.get(o);
            var l = {
                    __proto__: null
                },
                p = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var c in o)
                if ("default" !== c && {}.hasOwnProperty.call(o, c)) {
                    var s = p ? Object.getOwnPropertyDescriptor(o, c) : null;
                    s && (s.get || s.set) ? Object.defineProperty(l, c, s) : l[c] = o[c]
                }
            return l.default = o, f && f.set(o, l), l
        }, m.exports.__esModule = !0, m.exports.default = m.exports
    }), 74, [75]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";

        function o(t) {
            return m.exports = o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                return typeof o
            } : function(o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
            }, m.exports.__esModule = !0, m.exports.default = m.exports, o(t)
        }
        m.exports = o, m.exports.__esModule = !0, m.exports.default = m.exports
    }), 75, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.registerQuotaErrorCallback = function(o) {
            t.quotaErrorCallbacks.add(o)
        };
        r(d[0]), r(d[1]);
        var t = r(d[2]);
        r(d[3])
    }), 76, [8, 3, 33, 7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), Object.defineProperty(e, "DBWrapper", {
            enumerable: !0,
            get: function() {
                return f.DBWrapper
            }
        }), Object.defineProperty(e, "Deferred", {
            enumerable: !0,
            get: function() {
                return l.Deferred
            }
        }), Object.defineProperty(e, "WorkboxError", {
            enumerable: !0,
            get: function() {
                return h.WorkboxError
            }
        }), Object.defineProperty(e, "assert", {
            enumerable: !0,
            get: function() {
                return t.assert
            }
        }), Object.defineProperty(e, "cacheMatchIgnoreParams", {
            enumerable: !0,
            get: function() {
                return o.cacheMatchIgnoreParams
            }
        }), Object.defineProperty(e, "cacheNames", {
            enumerable: !0,
            get: function() {
                return n.cacheNames
            }
        }), Object.defineProperty(e, "canConstructReadableStream", {
            enumerable: !0,
            get: function() {
                return u.canConstructReadableStream
            }
        }), Object.defineProperty(e, "canConstructResponseFromBodyStream", {
            enumerable: !0,
            get: function() {
                return c.canConstructResponseFromBodyStream
            }
        }), Object.defineProperty(e, "deleteDatabase", {
            enumerable: !0,
            get: function() {
                return s.deleteDatabase
            }
        }), Object.defineProperty(e, "dontWaitFor", {
            enumerable: !0,
            get: function() {
                return b.dontWaitFor
            }
        }), Object.defineProperty(e, "executeQuotaErrorCallbacks", {
            enumerable: !0,
            get: function() {
                return p.executeQuotaErrorCallbacks
            }
        }), Object.defineProperty(e, "getFriendlyURL", {
            enumerable: !0,
            get: function() {
                return y.getFriendlyURL
            }
        }), Object.defineProperty(e, "logger", {
            enumerable: !0,
            get: function() {
                return P.logger
            }
        }), Object.defineProperty(e, "resultingClientExists", {
            enumerable: !0,
            get: function() {
                return j.resultingClientExists
            }
        }), Object.defineProperty(e, "timeout", {
            enumerable: !0,
            get: function() {
                return O.timeout
            }
        }), Object.defineProperty(e, "waitUntil", {
            enumerable: !0,
            get: function() {
                return C.waitUntil
            }
        });
        var t = r(d[0]),
            n = r(d[1]),
            o = r(d[2]),
            u = r(d[3]),
            c = r(d[4]),
            b = r(d[5]),
            f = r(d[6]),
            l = r(d[7]),
            s = r(d[8]),
            p = r(d[9]),
            y = r(d[10]),
            P = r(d[11]),
            j = r(d[12]),
            O = r(d[13]),
            C = r(d[14]),
            h = r(d[15]);
        r(d[16])
    }), 77, [3, 16, 30, 78, 26, 79, 80, 31, 81, 32, 27, 8, 82, 34, 17, 4, 7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        let t;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.canConstructReadableStream = function() {
            if (void 0 === t) try {
                new ReadableStream({
                    start() {}
                }), t = !0
            } catch (n) {
                t = !1
            }
            return t
        }, r(d[0])
    }), 78, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.dontWaitFor = function(t) {
            t.then((() => {}))
        }, r(d[0])
    }), 79, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.DBWrapper = void 0, r(d[0]);
        class t {
            constructor(t, n, {
                onupgradeneeded: s,
                onversionchange: o
            } = {}) {
                this._db = null, this._name = t, this._version = n, this._onupgradeneeded = s, this._onversionchange = o || (() => this.close())
            }
            get db() {
                return this._db
            }
            async open() {
                if (!this._db) return this._db = await new Promise(((t, n) => {
                    let s = !1;
                    setTimeout((() => {
                        s = !0, n(new Error('The open request was blocked and timed out'))
                    }), this.OPEN_TIMEOUT);
                    const o = indexedDB.open(this._name, this._version);
                    o.onerror = () => n(o.error), o.onupgradeneeded = t => {
                        s ? (o.transaction.abort(), o.result.close()) : 'function' == typeof this._onupgradeneeded && this._onupgradeneeded(t)
                    }, o.onsuccess = () => {
                        const n = o.result;
                        s ? n.close() : (n.onversionchange = this._onversionchange.bind(this), t(n))
                    }
                })), this
            }
            async getKey(t, n) {
                return (await this.getAllKeys(t, n, 1))[0]
            }
            async getAll(t, n, s) {
                return await this.getAllMatching(t, {
                    query: n,
                    count: s
                })
            }
            async getAllKeys(t, n, s) {
                return (await this.getAllMatching(t, {
                    query: n,
                    count: s,
                    includeKeys: !0
                })).map((t => t.key))
            }
            async getAllMatching(t, {
                index: n,
                query: s = null,
                direction: o = "next",
                count: c,
                includeKeys: l = !1
            } = {}) {
                return await this.transaction([t], 'readonly', ((u, h) => {
                    const p = u.objectStore(t),
                        y = n ? p.index(n) : p,
                        _ = [],
                        b = y.openCursor(s, o);
                    b.onsuccess = () => {
                        const t = b.result;
                        t ? (_.push(l ? t : t.value), c && _.length >= c ? h(_) : t.continue()) : h(_)
                    }
                }))
            }
            async transaction(t, n, s) {
                return await this.open(), await new Promise(((o, c) => {
                    const l = this._db.transaction(t, n);
                    l.onabort = () => c(l.error), l.oncomplete = () => o(), s(l, (t => o(t)))
                }))
            }
            async _call(t, n, s, ...o) {
                return await this.transaction([n], s, ((s, c) => {
                    const l = s.objectStore(n),
                        u = l[t].apply(l, o);
                    u.onsuccess = () => c(u.result)
                }))
            }
            close() {
                this._db && (this._db.close(), this._db = null)
            }
        }
        e.DBWrapper = t, t.prototype.OPEN_TIMEOUT = 2e3;
        const n = {
            readonly: ['get', 'count', 'getKey', 'getAll', 'getAllKeys'],
            readwrite: ['add', 'put', 'clear', 'delete']
        };
        for (const [s, o] of Object.entries(n))
            for (const n of o) n in IDBObjectStore.prototype && (t.prototype[n] = async function(t, ...o) {
                return await this._call(n, t, s, ...o)
            })
    }), 80, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.deleteDatabase = void 0, r(d[0]);
        e.deleteDatabase = async o => {
            await new Promise(((t, s) => {
                const n = indexedDB.deleteDatabase(o);
                n.onerror = () => {
                    s(n.error)
                }, n.onblocked = () => {
                    s(new Error('Delete blocked'))
                }, n.onsuccess = () => {
                    t()
                }
            }))
        }
    }), 81, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.resultingClientExists = async function(o) {
            if (!o) return;
            let s = await self.clients.matchAll({
                type: 'window'
            });
            const c = new Set(s.map((t => t.id)));
            let l;
            const f = performance.now();
            for (; performance.now() - f < n && (s = await self.clients.matchAll({
                    type: 'window'
                }), l = s.find((t => o ? t.id === o : !c.has(t.id))), !l);) await (0, t.timeout)(100);
            return l
        };
        var t = r(d[0]);
        r(d[1]);
        const n = 2e3
    }), 82, [34, 7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.cacheNames = void 0;
        var t = r(d[0]);
        r(d[1]);
        e.cacheNames = {
            get googleAnalytics() {
                return t.cacheNames.getGoogleAnalyticsName()
            },
            get precache() {
                return t.cacheNames.getPrecacheName()
            },
            get prefix() {
                return t.cacheNames.getPrefix()
            },
            get runtime() {
                return t.cacheNames.getRuntimeName()
            },
            get suffix() {
                return t.cacheNames.getSuffix()
            }
        }
    }), 83, [16, 7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.clientsClaim = function() {
            self.addEventListener('activate', (() => self.clients.claim()))
        }, r(d[0])
    }), 84, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.setCacheNameDetails = function(c) {
            t.cacheNames.updateDetails(c)
        };
        r(d[0]);
        var t = r(d[1]);
        r(d[2]);
        r(d[3])
    }), 85, [3, 16, 4, 7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.skipWaiting = function() {
            self.skipWaiting()
        };
        r(d[0]);
        r(d[1])
    }), 86, [8, 7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        r(d[0])
    }), 87, [7]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.CacheExpiration = void 0;
        r(d[0]);
        var t = r(d[1]),
            s = (r(d[2]), r(d[3]), r(d[4]));
        r(d[5]);
        e.CacheExpiration = class {
            constructor(t, n = {}) {
                this._isRunning = !1, this._rerunRequested = !1, this._maxEntries = n.maxEntries, this._maxAgeSeconds = n.maxAgeSeconds, this._matchOptions = n.matchOptions, this._cacheName = t, this._timestampModel = new s.CacheTimestampsModel(t)
            }
            async expireEntries() {
                if (this._isRunning) return void(this._rerunRequested = !0);
                this._isRunning = !0;
                const s = this._maxAgeSeconds ? Date.now() - 1e3 * this._maxAgeSeconds : 0,
                    n = await this._timestampModel.expireEntries(s, this._maxEntries),
                    h = await self.caches.open(this._cacheName);
                for (const t of n) await h.delete(t, this._matchOptions);
                this._isRunning = !1, this._rerunRequested && (this._rerunRequested = !1, (0, t.dontWaitFor)(this.expireEntries()))
            }
            async updateTimestamp(t) {
                await this._timestampModel.setTimestamp(t, Date.now())
            }
            async isURLExpired(t) {
                if (this._maxAgeSeconds) {
                    return await this._timestampModel.getTimestamp(t) < Date.now() - 1e3 * this._maxAgeSeconds
                }
                return !1
            }
            async delete() {
                this._rerunRequested = !1, await this._timestampModel.expireEntries(1 / 0)
            }
        }
    }), 88, [3, 79, 8, 4, 89, 90]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.CacheTimestampsModel = void 0;
        var t = r(d[0]),
            s = r(d[1]);
        r(d[2]);
        const c = 'cache-entries',
            n = t => {
                const s = new URL(t, location.href);
                return s.hash = '', s.href
            };
        e.CacheTimestampsModel = class {
            constructor(s) {
                this._cacheName = s, this._db = new t.DBWrapper("workbox-expiration", 1, {
                    onupgradeneeded: t => this._handleUpgrade(t)
                })
            }
            _handleUpgrade(t) {
                const n = t.target.result.createObjectStore(c, {
                    keyPath: 'id'
                });
                n.createIndex('cacheName', 'cacheName', {
                    unique: !1
                }), n.createIndex('timestamp', 'timestamp', {
                    unique: !1
                }), (0, s.deleteDatabase)(this._cacheName)
            }
            async setTimestamp(t, s) {
                const h = {
                    url: t = n(t),
                    timestamp: s,
                    cacheName: this._cacheName,
                    id: this._getId(t)
                };
                await this._db.put(c, h)
            }
            async getTimestamp(t) {
                return (await this._db.get(c, this._getId(t))).timestamp
            }
            async expireEntries(t, s) {
                const n = await this._db.transaction(c, 'readwrite', ((n, h) => {
                        const o = n.objectStore(c).index('timestamp').openCursor(null, 'prev'),
                            u = [];
                        let p = 0;
                        o.onsuccess = () => {
                            const c = o.result;
                            if (c) {
                                const n = c.value;
                                n.cacheName === this._cacheName && (t && n.timestamp < t || s && p >= s ? u.push(c.value) : p++), c.continue()
                            } else h(u)
                        }
                    })),
                    h = [];
                for (const t of n) await this._db.delete(c, t.id), h.push(t.url);
                return h
            }
            _getId(t) {
                return this._cacheName + '|' + n(t)
            }
        }
    }), 89, [80, 81, 90]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        try {
            self['workbox:expiration:6.1.1'] && _()
        } catch (t) {}
    }), 90, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var n = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.addToPrecacheList = function(n) {
            (0, s.getOrCreatePrecacheController)().addToCacheList(n)
        }, e.handlePrecacheAssetsMessage = function(n, t) {
            "Unknown" === n.data.payload.appVersion ? (t((() => 'Installing and activating precache')), p()) : (t((() => `MSG_PRECACHE_ASSETS page app version ${n.data.payload.appVersion} did not match service worker app version Unknown. Skipping precaching since assets may be out of date`)), (0, c.default)('msg_precache_assets_version_mismatch', 1, {
                page_version: n.data.payload.appVersion || 'unknown',
                sw_version: "Unknown"
            }))
        };
        var t = r(d[1]),
            s = r(d[2]),
            o = r(d[3]),
            c = n(r(d[4]));
        class l extends ExtendableEvent {
            waitUntil(n) {
                return n
            }
        }
        async function p() {
            const n = (0, s.getOrCreatePrecacheController)(),
                c = new l('install'),
                p = new l('activate');
            await n.install(c), await n.activate(p);
            const u = new t.PrecacheRoute(n);
            (0, o.registerRoute)(u)
        }
    }), 91, [1, 92, 14, 36, 54]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.PrecacheRoute = void 0;
        r(d[0]), r(d[1]);
        var t = r(d[2]),
            c = r(d[3]);
        r(d[4]);
        class o extends t.Route {
            constructor(t, o) {
                super((({
                    request: s
                }) => {
                    const u = t.getURLsToCacheKeys();
                    for (const t of (0, c.generateURLVariations)(s.url, o)) {
                        const c = u.get(t);
                        if (c) return {
                            cacheKey: c
                        }
                    }
                }), t.strategy)
            }
        }
        e.PrecacheRoute = o
    }), 92, [8, 27, 9, 93, 19]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.generateURLVariations = function*(t, {
            ignoreURLParametersMatching: o = [/^utm_/, /^fbclid$/],
            directoryIndex: h = "index.html",
            cleanURLs: f = !0,
            urlManipulation: c
        } = {}) {
            const l = new URL(t, location.href);
            l.hash = '', yield l.href;
            const s = (0, n.removeIgnoredSearchParams)(l, o);
            if (yield s.href, h && s.pathname.endsWith('/')) {
                const n = new URL(s.href);
                n.pathname += h, yield n.href
            }
            if (f) {
                const n = new URL(s.href);
                n.pathname += '.html', yield n.href
            }
            if (c) {
                const n = c({
                    url: l
                });
                for (const t of n) yield t.href
            }
        };
        var n = r(d[0]);
        r(d[1])
    }), 93, [94, 19]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.removeIgnoredSearchParams = function(s, t = []) {
            for (const o of [...s.searchParams.keys()]) t.some((s => s.test(o))) && s.searchParams.delete(o);
            return s
        }, r(d[0])
    }), 94, [19]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.currentCaches = e.cacheNames = void 0;
        var c = r(d[0]);
        const s = e.cacheNames = (0, c.generateCacheNames)(4);
        e.currentCaches = Object.values(s)
    }), 95, [66]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.NIOBE_ROUTE_IGNORE_LIST = void 0, e.createNiobeRoute = function({
            cacheName: t
        }) {
            return [t => t.url.pathname.startsWith('/api/v3') && !h.some((n => t.url.pathname.startsWith(n))), new c.default({
                cacheName: t,
                plugins: [(0, s.createNiobeCachedResponsePlugin)(), new n.ExpirationPlugin({
                    maxEntries: 10,
                    maxAgeSeconds: 120,
                    purgeOnQuotaError: !0
                }), {
                    cacheWillUpdate: async ({
                        response: t,
                        request: n
                    }) => {
                        const o = n.headers.get('X-Airbnb-Prefetch'),
                            c = n.headers.get(u.SW_FETCH_POLICY_HEADER);
                        return 'true' === o || c ? t : null
                    },
                    fetchDidSucceed: async ({
                        request: n,
                        response: o
                    }) => {
                        const c = n.headers.get(u.SW_FETCH_POLICY_HEADER);
                        if ('cache-and-network' === c || 'network-only' === c) {
                            const c = o.clone(),
                                s = await caches.open(t);
                            await s.put(n.url, c)
                        }
                        return o
                    }
                }]
            })]
        }, e.createTripsNiobeRoute = function({
            cacheName: t
        }) {
            return [t => t.url.pathname === p || t.url.pathname === l, new o.NetworkFirst({
                cacheName: t,
                networkTimeoutSeconds: _,
                plugins: [(0, s.createNiobeCachedResponsePlugin)(), new n.ExpirationPlugin({
                    maxAgeSeconds: E,
                    purgeOnQuotaError: !0
                })]
            })]
        };
        var n = r(d[1]),
            o = r(d[2]),
            c = t(r(d[3])),
            s = r(d[4]),
            u = r(d[5]);
        const p = '/api/v3/TripsQuery',
            l = '/api/v3/getInsuranceRDPContactModal',
            h = e.NIOBE_ROUTE_IGNORE_LIST = [p, l, '/api/v3/OnboardingPhotoQuery', '/api/v3/PassportOnboardingQuery'];
        const E = 1814400,
            _ = 4
    }), 96, [1, 97, 100, 109, 110, 67]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = r(d[0]);
        Object.keys(t).forEach((function(n) {
            "default" !== n && "__esModule" !== n && (n in e && e[n] === t[n] || Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            }))
        }))
    }), 97, [98]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), Object.defineProperty(e, "CacheExpiration", {
            enumerable: !0,
            get: function() {
                return n.CacheExpiration
            }
        }), Object.defineProperty(e, "ExpirationPlugin", {
            enumerable: !0,
            get: function() {
                return t.ExpirationPlugin
            }
        });
        var n = r(d[0]),
            t = r(d[1]);
        r(d[2])
    }), 98, [88, 99, 90]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ExpirationPlugin = void 0;
        r(d[0]);
        var t = r(d[1]),
            s = r(d[2]),
            n = (r(d[3]), r(d[4]), r(d[5])),
            c = r(d[6]),
            o = r(d[7]);
        r(d[8]);
        e.ExpirationPlugin = class {
            constructor(t = {}) {
                this.cachedResponseWillBeUsed = async ({
                    event: t,
                    request: n,
                    cacheName: c,
                    cachedResponse: o
                }) => {
                    if (!o) return null;
                    const h = this._isResponseDateFresh(o),
                        u = this._getCacheExpiration(c);
                    (0, s.dontWaitFor)(u.expireEntries());
                    const l = u.updateTimestamp(n.url);
                    if (t) try {
                        t.waitUntil(l)
                    } catch (t) {}
                    return h ? o : null
                }, this.cacheDidUpdate = async ({
                    cacheName: t,
                    request: s
                }) => {
                    const n = this._getCacheExpiration(t);
                    await n.updateTimestamp(s.url), await n.expireEntries()
                }, this._config = t, this._maxAgeSeconds = t.maxAgeSeconds, this._cacheExpirations = new Map, t.purgeOnQuotaError && (0, n.registerQuotaErrorCallback)((() => this.deleteCacheAndMetadata()))
            }
            _getCacheExpiration(s) {
                if (s === t.cacheNames.getRuntimeName()) throw new c.WorkboxError('expire-custom-caches-only');
                let n = this._cacheExpirations.get(s);
                return n || (n = new o.CacheExpiration(s, this._config), this._cacheExpirations.set(s, n)), n
            }
            _isResponseDateFresh(t) {
                if (!this._maxAgeSeconds) return !0;
                const s = this._getDateHeaderTimestamp(t);
                if (null === s) return !0;
                return s >= Date.now() - 1e3 * this._maxAgeSeconds
            }
            _getDateHeaderTimestamp(t) {
                if (!t.headers.has('date')) return null;
                const s = t.headers.get('date'),
                    n = new Date(s).getTime();
                return isNaN(n) ? null : n
            }
            async deleteCacheAndMetadata() {
                for (const [t, s] of this._cacheExpirations) await self.caches.delete(t), await s.delete();
                this._cacheExpirations = new Map
            }
        }
    }), 99, [3, 16, 79, 27, 8, 76, 4, 88, 90]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = r(d[0]);
        Object.keys(t).forEach((function(n) {
            "default" !== n && "__esModule" !== n && (n in e && e[n] === t[n] || Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            }))
        }))
    }), 100, [101]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), Object.defineProperty(e, "CacheFirst", {
            enumerable: !0,
            get: function() {
                return t.CacheFirst
            }
        }), Object.defineProperty(e, "CacheOnly", {
            enumerable: !0,
            get: function() {
                return n.CacheOnly
            }
        }), Object.defineProperty(e, "NetworkFirst", {
            enumerable: !0,
            get: function() {
                return u.NetworkFirst
            }
        }), Object.defineProperty(e, "NetworkOnly", {
            enumerable: !0,
            get: function() {
                return c.NetworkOnly
            }
        }), Object.defineProperty(e, "StaleWhileRevalidate", {
            enumerable: !0,
            get: function() {
                return l.StaleWhileRevalidate
            }
        }), Object.defineProperty(e, "Strategy", {
            enumerable: !0,
            get: function() {
                return o.Strategy
            }
        }), Object.defineProperty(e, "StrategyHandler", {
            enumerable: !0,
            get: function() {
                return f.StrategyHandler
            }
        });
        var t = r(d[0]),
            n = r(d[1]),
            u = r(d[2]),
            c = r(d[3]),
            l = r(d[4]),
            o = r(d[5]),
            f = r(d[6]);
        r(d[7])
    }), 101, [102, 104, 105, 107, 108, 28, 29, 35]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.CacheFirst = void 0;
        r(d[0]), r(d[1]);
        var t = r(d[2]),
            c = r(d[3]);
        r(d[4]);
        r(d[5]);
        class n extends c.Strategy {
            async _handle(c, n) {
                let o, s = await n.cacheMatch(c);
                if (!s) try {
                    s = await n.fetchAndCachePut(c)
                } catch (t) {
                    o = t
                }
                if (!s) throw new t.WorkboxError('no-response', {
                    url: c.url,
                    error: o
                });
                return s
            }
        }
        e.CacheFirst = n
    }), 102, [3, 8, 4, 28, 103, 35]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.messages = void 0;
        var s = r(d[0]),
            o = r(d[1]);
        r(d[2]);
        e.messages = {
            strategyStart: (s, t) => `Using ${s} to respond to '${(0,o.getFriendlyURL)(t.url)}'`,
            printFinalResponse: o => {
                o && (s.logger.groupCollapsed("View the final response here."), s.logger.log(o || '[No response returned]'), s.logger.groupEnd())
            }
        }
    }), 103, [8, 27, 35]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.CacheOnly = void 0;
        r(d[0]), r(d[1]);
        var n = r(d[2]),
            t = r(d[3]);
        r(d[4]);
        r(d[5]);
        class c extends t.Strategy {
            async _handle(t, c) {
                const o = await c.cacheMatch(t);
                if (!o) throw new n.WorkboxError('no-response', {
                    url: t.url
                });
                return o
            }
        }
        e.CacheOnly = c
    }), 104, [3, 8, 4, 28, 103, 35]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.NetworkFirst = void 0;
        r(d[0]), r(d[1]);
        var t = r(d[2]),
            s = r(d[3]),
            o = r(d[4]);
        r(d[5]);
        r(d[6]);
        class n extends o.Strategy {
            constructor(t = {}) {
                super(t), this.plugins.some((t => 'cacheWillUpdate' in t)) || this.plugins.unshift(s.cacheOkAndOpaquePlugin), this._networkTimeoutSeconds = t.networkTimeoutSeconds || 0
            }
            async _handle(s, o) {
                const n = [],
                    c = [];
                let u;
                if (this._networkTimeoutSeconds) {
                    const {
                        id: t,
                        promise: h
                    } = this._getTimeoutPromise({
                        request: s,
                        logs: n,
                        handler: o
                    });
                    u = t, c.push(h)
                }
                const h = this._getNetworkPromise({
                    timeoutId: u,
                    request: s,
                    logs: n,
                    handler: o
                });
                c.push(h);
                const l = await o.waitUntil((async () => await o.waitUntil(Promise.race(c)) || await h)());
                if (!l) throw new t.WorkboxError('no-response', {
                    url: s.url
                });
                return l
            }
            _getTimeoutPromise({
                request: t,
                logs: s,
                handler: o
            }) {
                let n;
                return {
                    promise: new Promise((s => {
                        n = setTimeout((async () => {
                            s(await o.cacheMatch(t))
                        }), 1e3 * this._networkTimeoutSeconds)
                    })),
                    id: n
                }
            }
            async _getNetworkPromise({
                timeoutId: t,
                request: s,
                logs: o,
                handler: n
            }) {
                let c, u;
                try {
                    u = await n.fetchAndCachePut(s)
                } catch (t) {
                    c = t
                }
                return t && clearTimeout(t), !c && u || (u = await n.cacheMatch(s)), u
            }
        }
        e.NetworkFirst = n
    }), 105, [3, 8, 4, 106, 28, 103, 35]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.cacheOkAndOpaquePlugin = void 0, r(d[0]);
        e.cacheOkAndOpaquePlugin = {
            cacheWillUpdate: async ({
                response: u
            }) => 200 === u.status || 0 === u.status ? u : null
        }
    }), 106, [35]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.NetworkOnly = void 0;
        r(d[0]), r(d[1]);
        var t = r(d[2]),
            o = r(d[3]),
            n = r(d[4]);
        r(d[5]);
        r(d[6]);
        class s extends n.Strategy {
            constructor(t = {}) {
                super(t), this._networkTimeoutSeconds = t.networkTimeoutSeconds || 0
            }
            async _handle(n, s) {
                let c, u;
                try {
                    const o = [s.fetch(n)];
                    if (this._networkTimeoutSeconds) {
                        const n = (0, t.timeout)(1e3 * this._networkTimeoutSeconds);
                        o.push(n)
                    }
                    if (u = await Promise.race(o), !u) throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)
                } catch (t) {
                    c = t
                }
                if (!u) throw new o.WorkboxError('no-response', {
                    url: n.url,
                    error: c
                });
                return u
            }
        }
        e.NetworkOnly = s
    }), 107, [3, 8, 34, 4, 28, 103, 35]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.StaleWhileRevalidate = void 0;
        r(d[0]), r(d[1]);
        var t = r(d[2]),
            c = r(d[3]),
            l = r(d[4]);
        r(d[5]);
        r(d[6]);
        class n extends l.Strategy {
            constructor(t) {
                super(t), this.plugins.some((t => 'cacheWillUpdate' in t)) || this.plugins.unshift(c.cacheOkAndOpaquePlugin)
            }
            async _handle(c, l) {
                const n = l.fetchAndCachePut(c).catch((() => {}));
                let s, h = await l.cacheMatch(c);
                if (h);
                else try {
                    h = await n
                } catch (t) {
                    s = t
                }
                if (!h) throw new t.WorkboxError('no-response', {
                    url: c.url,
                    error: s
                });
                return h
            }
        }
        e.StaleWhileRevalidate = n
    }), 108, [3, 8, 4, 106, 28, 103, 35]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = r(d[0]),
            n = r(d[1]);
        class c extends t.Strategy {
            constructor(n) {
                super(n), this.cacheFirst = void 0, this.cacheOnly = void 0, this.networkOnly = void 0;
                const {
                    cacheName: c,
                    plugins: s
                } = n;
                this.cacheFirst = new t.CacheFirst({
                    cacheName: c,
                    plugins: s
                }), this.cacheOnly = new t.CacheOnly({
                    cacheName: c,
                    plugins: s
                }), this.networkOnly = new t.NetworkOnly({
                    plugins: s
                })
            }
            getStrategy(t) {
                switch (t) {
                    case 'cache-and-network':
                    case 'network-only':
                        return this.networkOnly;
                    case 'cache-only':
                        return this.cacheOnly;
                    default:
                        return this.cacheFirst
                }
            }
            async _handle(t, c) {
                return this.getStrategy(t.headers.get(n.SW_FETCH_POLICY_HEADER)).handle({
                    request: t,
                    event: c.event
                })
            }
        }
        e.default = c
    }), 109, [100, 67]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.createNiobeCachedResponsePlugin = function() {
            return {
                async cachedResponseWillBeUsed({
                    request: s,
                    cachedResponse: t
                }) {
                    if (!t) return t;
                    const n = s.headers.get('x-client-request-id');
                    if (!n) return t;
                    const u = new Headers(t.headers);
                    u.set('x-client-request-id', n);
                    const c = t.body || t._bodyInit;
                    return new Response(c, {
                        status: t.status,
                        statusText: t.statusText,
                        headers: u
                    })
                }
            }
        }
    }), 110, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        var s = r(d[0]).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getCommonRoutes = function(s = {}) {
            return {
                allowlist: [/[&?]force_(sw_dev_appshell|sw_prod_appshell)/i, /^\/s\/?$/, /^\/payments\/book/, s.allowShellOnSearchVerticals && t].filter(Boolean),
                denylist: [/[&?]force_(?!sw_dev_appshell|sw_prod_appshell|env|staging)/i, /[&?]locale=/i, /[&?]currency=/i, /[&?]display_currency=/i, /[&?]enable_auto_translate=/i, /[&?]enable_upfront_pricing=/i, /[&?]responsive_pictures/i, /[&?]simple_search_force=/, /[&?]category_tag=Tag%3A8851/, /^login/, /^\/manifest.json/, /^\/experiences\/\d*\/book/, /^\/experiences\/trip_issues\/[A-Z0-9]*/, /^\/s\/guidebooks/, /^\/experiences\/cancellation-policy/, /[&?]sso_authentication=true/i, /[&?]sem_automaid=/i, /^\/wishlists\/[0-9]*\/join/, /^\/wishlists\/[0-9]*\/claim_invite/, !s.allowShellOnSearchVerticals && t].filter(Boolean)
            }
        }, e.tabPathsRegExp = void 0;
        var l = s(r(d[1]));
        const t = e.tabPathsRegExp = new RegExp(`^\\/s\\/(${l.default.join('|')})`)
    }), 111, [1, 112]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        e.default = ['homes', 'experiences', 'services', 'adventures', 'all', 'plus_homes', 'restaurants', 'luxury', 'content', 'guidebooks', 'things-to-do', 'flights']
    }), 112, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.jitneyEventHandler = function(t) {
            self.addEventListener('fetch', (n => {
                if (!('POST' === n.request.method)) return;
                n.request.url.endsWith('/tracking/jitney/logging/messages') && n.respondWith(h(n, t))
            }))
        }, e.processEvent = h, e.setContextDeferredDuration = c;
        var t = r(d[0]);
        const n = new Set(['com.airbnb.jitney.event.logging.Navigation', 'com.airbnb.jitney.event.logging.Performance', 'com.airbnb.jitney.event.logging.UnifiedMessaging']),
            s = 60,
            o = new t.Queue('jitneyEventsQueue', {
                maxRetentionTime: s
            });

        function c(t, n = !1) {
            const o = n ? s : 0;
            return t.map((t => ({ ...t,
                event_data: { ...t.event_data,
                    context: { ...t.event_data.context,
                        max_deferred_minutes: o
                    }
                }
            })))
        }
        async function u(t) {
            if ('gzip' !== t.headers.get('X-Encode-With')) return t;
            try {
                const n = new CompressionStream('gzip'),
                    s = await new Response((await t.clone().blob()).stream().pipeThrough(n)).blob(),
                    o = new Request(t.clone(), {
                        body: s
                    });
                return o.headers.delete('X-Encode-With'), o.headers.set('Content-Encoding', 'gzip'), o
            } catch {
                const n = t.clone();
                return n.headers.delete('X-Encode-With'), n
            }
        }
        async function h(t, {
            enqueueFailedJitneyEvents: s
        }) {
            let h, l = !1;
            try {
                const o = t.request.clone();
                h = await o.json(), l = !!s && !!h ? .some((({
                    schema: t
                }) => n.has(t.split(':')[0])))
            } catch (t) {}
            if (!h) return fetch(t.request);
            const f = l ? c(h) : h;
            try {
                const n = new Request(t.request.clone(), {
                    body: JSON.stringify(f)
                });
                return await fetch(await u(n))
            } catch (n) {
                if (l) {
                    const n = await u(new Request(t.request.clone(), {
                        body: JSON.stringify(c(h, !0))
                    }));
                    await o.pushRequest({
                        request: n
                    })
                }
                throw n
            }
        }
    }), 113, [114]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Queue = void 0;
        var t = r(d[0]),
            s = (r(d[1]), r(d[2]), r(d[3]), r(d[4])),
            n = r(d[5]);
        r(d[6]);
        const u = 'workbox-background-sync',
            o = new Set,
            c = t => {
                const s = {
                    request: new n.StorableRequest(t.requestData).toRequest(),
                    timestamp: t.timestamp
                };
                return t.metadata && (s.metadata = t.metadata), s
            };
        e.Queue = class {
            constructor(n, {
                onSync: u,
                maxRetentionTime: c
            } = {}) {
                if (this._syncInProgress = !1, this._requestsAddedDuringSync = !1, o.has(n)) throw new t.WorkboxError('duplicate-queue-name', {
                    name: n
                });
                o.add(n), this._name = n, this._onSync = u || this.replayRequests, this._maxRetentionTime = c || 10080, this._queueStore = new s.QueueStore(this._name), this._addSyncListener()
            }
            get name() {
                return this._name
            }
            async pushRequest(t) {
                await this._addRequest(t, 'push')
            }
            async unshiftRequest(t) {
                await this._addRequest(t, 'unshift')
            }
            async popRequest() {
                return this._removeRequest('pop')
            }
            async shiftRequest() {
                return this._removeRequest('shift')
            }
            async getAll() {
                const t = await this._queueStore.getAll(),
                    s = Date.now(),
                    n = [];
                for (const u of t) {
                    const t = 60 * this._maxRetentionTime * 1e3;
                    s - u.timestamp > t ? await this._queueStore.deleteEntry(u.id) : n.push(c(u))
                }
                return n
            }
            async _addRequest({
                request: t,
                metadata: s,
                timestamp: u = Date.now()
            }, o) {
                const c = {
                    requestData: (await n.StorableRequest.fromRequest(t.clone())).toObject(),
                    timestamp: u
                };
                s && (c.metadata = s), await this._queueStore[`${o}Entry`](c), this._syncInProgress ? this._requestsAddedDuringSync = !0 : await this.registerSync()
            }
            async _removeRequest(t) {
                const s = Date.now(),
                    n = await this._queueStore[`${t}Entry`]();
                if (n) {
                    const u = 60 * this._maxRetentionTime * 1e3;
                    return s - n.timestamp > u ? this._removeRequest(t) : c(n)
                }
            }
            async replayRequests() {
                let s;
                for (; s = await this.shiftRequest();) try {
                    await fetch(s.request.clone())
                } catch (n) {
                    throw await this.unshiftRequest(s), new t.WorkboxError('queue-replay-failed', {
                        name: this._name
                    })
                }
            }
            async registerSync() {
                if ('sync' in self.registration) try {
                    await self.registration.sync.register(`${u}:${this._name}`)
                } catch (t) {}
            }
            _addSyncListener() {
                'sync' in self.registration ? self.addEventListener('sync', (t => {
                    if (t.tag === `${u}:${this._name}`) {
                        const s = async () => {
                            let s;
                            this._syncInProgress = !0;
                            try {
                                await this._onSync({
                                    queue: this
                                })
                            } catch (t) {
                                throw s = t, s
                            } finally {
                                !this._requestsAddedDuringSync || s && !t.lastChance || await this.registerSync(), this._syncInProgress = !1, this._requestsAddedDuringSync = !1
                            }
                        };
                        t.waitUntil(s())
                    }
                })) : this._onSync({
                    queue: this
                })
            }
            static get _queueNames() {
                return o
            }
        }
    }), 114, [4, 8, 3, 27, 115, 117, 116]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.QueueStore = void 0;
        r(d[0]);
        var t = r(d[1]);
        r(d[2]);
        const n = 'requests',
            s = 'queueName';
        e.QueueStore = class {
            constructor(n) {
                this._queueName = n, this._db = new t.DBWrapper("workbox-background-sync", 3, {
                    onupgradeneeded: this._upgradeDb
                })
            }
            async pushEntry(t) {
                delete t.id, t.queueName = this._queueName, await this._db.add(n, t)
            }
            async unshiftEntry(t) {
                const [s] = await this._db.getAllMatching(n, {
                    count: 1
                });
                s ? t.id = s.id - 1 : delete t.id, t.queueName = this._queueName, await this._db.add(n, t)
            }
            async popEntry() {
                return this._removeEntry({
                    direction: 'prev'
                })
            }
            async shiftEntry() {
                return this._removeEntry({
                    direction: 'next'
                })
            }
            async getAll() {
                return await this._db.getAllMatching(n, {
                    index: s,
                    query: IDBKeyRange.only(this._queueName)
                })
            }
            async deleteEntry(t) {
                await this._db.delete(n, t)
            }
            async _removeEntry({
                direction: t
            }) {
                const [u] = await this._db.getAllMatching(n, {
                    direction: t,
                    index: s,
                    query: IDBKeyRange.only(this._queueName),
                    count: 1
                });
                if (u) return await this.deleteEntry(u.id), u
            }
            _upgradeDb(t) {
                const u = t.target.result;
                t.oldVersion > 0 && t.oldVersion < 3 && u.objectStoreNames.contains(n) && u.deleteObjectStore(n);
                u.createObjectStore(n, {
                    autoIncrement: !0,
                    keyPath: 'id'
                }).createIndex(s, s, {
                    unique: !1
                })
            }
        }
    }), 115, [3, 80, 116]);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        try {
            self['workbox:background-sync:6.1.1'] && _()
        } catch (c) {}
    }), 116, []);
    __d((function(g, r, i, a, m, e, d) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.StorableRequest = void 0;
        r(d[0]);
        r(d[1]);
        const t = ['method', 'referrer', 'referrerPolicy', 'mode', 'credentials', 'cache', 'redirect', 'integrity', 'keepalive'];
        class s {
            constructor(t) {
                'navigate' === t.mode && (t.mode = 'same-origin'), this._requestData = t
            }
            static async fromRequest(o) {
                const n = {
                    url: o.url,
                    headers: {}
                };
                'GET' !== o.method && (n.body = await o.clone().arrayBuffer());
                for (const [t, s] of o.headers.entries()) n.headers[t] = s;
                for (const s of t) void 0 !== o[s] && (n[s] = o[s]);
                return new s(n)
            }
            toObject() {
                const t = Object.assign({}, this._requestData);
                return t.headers = Object.assign({}, this._requestData.headers), t.body && (t.body = t.body.slice(0)), t
            }
            toRequest() {
                return new Request(this._requestData.url, this._requestData)
            }
            clone() {
                return new s(this.toObject())
            }
        }
        e.StorableRequest = s
    }), 117, [3, 116]);
    return __r(0);
}).call(self);