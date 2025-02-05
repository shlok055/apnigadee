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
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/hyperloop-browser/metroRequire.0aad52c405.js.map