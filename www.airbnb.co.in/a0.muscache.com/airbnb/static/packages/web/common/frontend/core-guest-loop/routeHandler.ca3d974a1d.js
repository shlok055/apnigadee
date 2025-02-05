__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        provide: t
    }) {
        t(o.HyperloopMatchAppRoutesToken, [], (() => (t, o) => (0, u.default)(t, o)))
    };
    var o = r(d[1]),
        u = t(r(d[2]))
}), "0abd6f", ["ba7a76", "b51a5d", "e80eed"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "NavigationType", {
        enumerable: !0,
        get: function() {
            return t.Action
        }
    }), e.Route = U, e.Router = function(h) {
        let {
            basename: o = "/",
            children: c = null,
            location: p,
            navigationType: f = t.Action.Pop,
            navigator: v,
            static: P = !1
        } = h;
        k() && u(!1);
        let y = I(o),
            x = (0, n.useMemo)((() => ({
                basename: y,
                navigator: v,
                static: P
            })), [y, v, P]);
        "string" == typeof p && (p = (0, t.parsePath)(p));
        let {
            pathname: b = "/",
            search: C = "",
            hash: $ = "",
            state: S = null,
            key: W = "default"
        } = p, B = (0, n.useMemo)((() => {
            let t = N(b, y);
            return null == t ? null : {
                pathname: t,
                search: C,
                hash: $,
                state: S,
                key: W
            }
        }), [y, b, C, $, S, W]);
        if (null == B) return null;
        return (0, n.createElement)(l.Provider, {
            value: x
        }, (0, n.createElement)(s.Provider, {
            children: c,
            value: {
                location: B,
                navigationType: f
            }
        }))
    }, e.Routes = function(t) {
        let {
            children: n,
            location: l
        } = t;
        return F(V(n), l)
    }, Object.defineProperty(e, "createPath", {
        enumerable: !0,
        get: function() {
            return t.createPath
        }
    }), e.matchPath = B, Object.defineProperty(e, "parsePath", {
        enumerable: !0,
        get: function() {
            return t.parsePath
        }
    }), e.useHref = function(t) {
        k() || u(!1);
        let {
            basename: s,
            navigator: h
        } = (0, n.useContext)(l), {
            hash: o,
            pathname: c,
            search: p
        } = T(t), f = c;
        if ("/" !== s) {
            let n = w(t),
                l = null != n && n.endsWith("/");
            f = "/" === c ? s + (l ? "/" : "") : A([s, c])
        }
        return h.createHref({
            pathname: f,
            search: p,
            hash: o
        })
    }, e.useLocation = L, e.useNavigate = function() {
        k() || u(!1);
        let {
            basename: t,
            navigator: s
        } = (0, n.useContext)(l), {
            matches: o
        } = (0, n.useContext)(h), {
            pathname: c
        } = L(), p = JSON.stringify(o.map((t => t.pathnameBase))), f = (0, n.useRef)(!1);
        return (0, n.useEffect)((() => {
            f.current = !0
        })), (0, n.useCallback)((function(n, l) {
            if (void 0 === l && (l = {}), !f.current) return;
            if ("number" == typeof n) return void s.go(n);
            let h = R(n, JSON.parse(p), c);
            "/" !== t && (h.pathname = A([t, h.pathname])), (l.replace ? s.replace : s.push)(h, l.state)
        }), [t, s, p, c])
    }, e.useResolvedPath = T;
    var t = r(d[0]),
        n = r(d[1]);
    /**
     * React Router v6.3.0
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    const l = (0, n.createContext)(null),
        s = (0, n.createContext)(null),
        h = (0, n.createContext)({
            outlet: null,
            matches: []
        });

    function u(t, n) {
        if (!t) throw new Error(n)
    }

    function o(n, l, s) {
        void 0 === s && (s = "/");
        let h = N(("string" == typeof l ? (0, t.parsePath)(l) : l).pathname || "/", s);
        if (null == h) return null;
        let u = c(n);
        p(u);
        let o = null;
        for (let t = 0; null == o && t < u.length; ++t) o = W(u[t], h);
        return o
    }

    function c(t, n, l, s) {
        return void 0 === n && (n = []), void 0 === l && (l = []), void 0 === s && (s = ""), t.forEach(((t, h) => {
            let o = {
                relativePath: t.path || "",
                caseSensitive: !0 === t.caseSensitive,
                childrenIndex: h,
                route: t
            };
            o.relativePath.startsWith("/") && (o.relativePath.startsWith(s) || u(!1), o.relativePath = o.relativePath.slice(s.length));
            let p = A([s, o.relativePath]),
                f = l.concat(o);
            t.children && t.children.length > 0 && (!0 === t.index && u(!1), c(t.children, n, f, p)), (null != t.path || t.index) && n.push({
                path: p,
                score: $(p, t.index),
                routesMeta: f
            })
        })), n
    }

    function p(t) {
        t.sort(((t, n) => t.score !== n.score ? n.score - t.score : S(t.routesMeta.map((t => t.childrenIndex)), n.routesMeta.map((t => t.childrenIndex)))))
    }
    const f = /^:\w+$/,
        v = 3,
        P = 2,
        y = 1,
        x = 10,
        b = -2,
        C = t => "*" === t;

    function $(t, n) {
        let l = t.split("/"),
            s = l.length;
        return l.some(C) && (s += b), n && (s += P), l.filter((t => !C(t))).reduce(((t, n) => t + (f.test(n) ? v : "" === n ? y : x)), s)
    }

    function S(t, n) {
        return t.length === n.length && t.slice(0, -1).every(((t, l) => t === n[l])) ? t[t.length - 1] - n[n.length - 1] : 0
    }

    function W(t, n) {
        let {
            routesMeta: l
        } = t, s = {}, h = "/", u = [];
        for (let t = 0; t < l.length; ++t) {
            let o = l[t],
                c = t === l.length - 1,
                p = "/" === h ? n : n.slice(h.length) || "/",
                f = B({
                    path: o.relativePath,
                    caseSensitive: o.caseSensitive,
                    end: c
                }, p);
            if (!f) return null;
            Object.assign(s, f.params);
            let v = o.route;
            u.push({
                params: s,
                pathname: A([h, f.pathname]),
                pathnameBase: I(A([h, f.pathnameBase])),
                route: v
            }), "/" !== f.pathnameBase && (h = A([h, f.pathnameBase]))
        }
        return u
    }

    function B(t, n) {
        "string" == typeof t && (t = {
            path: t,
            caseSensitive: !1,
            end: !0
        });
        let [l, s] = O(t.path, t.caseSensitive, t.end), h = n.match(l);
        if (!h) return null;
        let u = h[0],
            o = u.replace(/(.)\/+$/, "$1"),
            c = h.slice(1);
        return {
            params: s.reduce(((t, n, l) => {
                if ("*" === n) {
                    let t = c[l] || "";
                    o = u.slice(0, u.length - t.length).replace(/(.)\/+$/, "$1")
                }
                return t[n] = j(c[l] || "", n), t
            }), {}),
            pathname: u,
            pathnameBase: o,
            pattern: t
        }
    }

    function O(t, n, l) {
        void 0 === n && (n = !1), void 0 === l && (l = !0);
        let s = [],
            h = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, ((t, n) => (s.push(n), "([^\\/]+)")));
        return t.endsWith("*") ? (s.push("*"), h += "*" === t || "/*" === t ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : h += l ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)", [new RegExp(h, n ? void 0 : "i"), s]
    }

    function j(t, n) {
        try {
            return decodeURIComponent(t)
        } catch (n) {
            return t
        }
    }

    function E(n, l) {
        void 0 === l && (l = "/");
        let {
            pathname: s,
            search: h = "",
            hash: u = ""
        } = "string" == typeof n ? (0, t.parsePath)(n) : n;
        return {
            pathname: s ? s.startsWith("/") ? s : M(s, l) : l,
            search: J(h),
            hash: _(u)
        }
    }

    function M(t, n) {
        let l = n.replace(/\/+$/, "").split("/");
        return t.split("/").forEach((t => {
            ".." === t ? l.length > 1 && l.pop() : "." !== t && l.push(t)
        })), l.length > 1 ? l.join("/") : "/"
    }

    function R(n, l, s) {
        let h, u = "string" == typeof n ? (0, t.parsePath)(n) : n,
            o = "" === n || "" === u.pathname ? "/" : u.pathname;
        if (null == o) h = s;
        else {
            let t = l.length - 1;
            if (o.startsWith("..")) {
                let n = o.split("/");
                for (;
                    ".." === n[0];) n.shift(), t -= 1;
                u.pathname = n.join("/")
            }
            h = t >= 0 ? l[t] : "/"
        }
        let c = E(u, h);
        return o && "/" !== o && o.endsWith("/") && !c.pathname.endsWith("/") && (c.pathname += "/"), c
    }

    function w(n) {
        return "" === n || "" === n.pathname ? "/" : "string" == typeof n ? (0, t.parsePath)(n).pathname : n.pathname
    }

    function N(t, n) {
        if ("/" === n) return t;
        if (!t.toLowerCase().startsWith(n.toLowerCase())) return null;
        let l = t.charAt(n.length);
        return l && "/" !== l ? null : t.slice(n.length) || "/"
    }
    const A = t => t.join("/").replace(/\/\/+/g, "/"),
        I = t => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
        J = t => t && "?" !== t ? t.startsWith("?") ? t : "?" + t : "",
        _ = t => t && "#" !== t ? t.startsWith("#") ? t : "#" + t : "";

    function k() {
        return null != (0, n.useContext)(s)
    }

    function L() {
        return k() || u(!1), (0, n.useContext)(s).location
    }(0, n.createContext)(null);

    function T(t) {
        let {
            matches: l
        } = (0, n.useContext)(h), {
            pathname: s
        } = L(), u = JSON.stringify(l.map((t => t.pathnameBase)));
        return (0, n.useMemo)((() => R(t, JSON.parse(u), s)), [t, u, s])
    }

    function F(l, s) {
        k() || u(!1);
        let c, {
                matches: p
            } = (0, n.useContext)(h),
            f = p[p.length - 1],
            v = f ? f.params : {},
            P = (f && f.pathname, f ? f.pathnameBase : "/"),
            y = (f && f.route, L());
        if (s) {
            var x;
            let n = "string" == typeof s ? (0, t.parsePath)(s) : s;
            "/" === P || (null == (x = n.pathname) ? void 0 : x.startsWith(P)) || u(!1), c = n
        } else c = y;
        let b = c.pathname || "/",
            C = o(l, {
                pathname: "/" === P ? b : b.slice(P.length) || "/"
            });
        return H(C && C.map((t => Object.assign({}, t, {
            params: Object.assign({}, v, t.params),
            pathname: A([P, t.pathname]),
            pathnameBase: "/" === t.pathnameBase ? P : A([P, t.pathnameBase])
        }))), p)
    }

    function H(t, l) {
        return void 0 === l && (l = []), null == t ? null : t.reduceRight(((s, u, o) => (0, n.createElement)(h.Provider, {
            children: void 0 !== u.route.element ? u.route.element : s,
            value: {
                outlet: s,
                matches: l.concat(t.slice(0, o + 1))
            }
        })), null)
    }

    function U(t) {
        u(!1)
    }

    function V(t) {
        let l = [];
        return n.Children.forEach(t, (t => {
            if (!(0, n.isValidElement)(t)) return;
            if (t.type === n.Fragment) return void l.push.apply(l, V(t.props.children));
            t.type !== U && u(!1);
            let s = {
                caseSensitive: t.props.caseSensitive,
                element: t.props.element,
                index: t.props.index,
                path: t.props.path
            };
            t.props.children && (s.children = V(t.props.children)), l.push(s)
        })), l
    }
}), "0b6a8f", ["b95826", "07aa1f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        const {
            provide: c
        } = t;
        c(n.RouteHandlerClientToken, [n.HyperloopMatchAppRoutesToken], (t => async (c, p) => {
            const {
                hydrationInstances: l = {},
                installers: u
            } = p, h = [({
                provide: o
            }) => {
                o(n.MatchAppRoutesToken, [n.AppToken], (n => o => t(n, o)))
            }], f = (0, s.createRootInjector)({ ...p,
                installers: [...u || [], ...h]
            }), A = f.createInstances(), y = {
                parent: f,
                routePathWithSearchAndHash: c,
                hydrationInstances: l
            }, k = await f.getAsync(n.AppToken), v = t(k, c);
            if (!v.find((t => t.match.isExact))) throw new o.default(c, v);
            const R = (0, s.renderAppRoute)(v, y);
            await Promise.all([A, R])
        }))
    };
    var n = r(d[1]),
        o = t(r(d[2])),
        s = r(d[3])
}), "27bd9b", ["ba7a76", "b51a5d", "ff00af", "82cd27"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = n(r(d[2])),
        s = r(d[3]),
        c = r(d[4]),
        u = t(r(d[5])),
        l = r(d[6]),
        p = n(r(d[7]));

    function f(t) {
        return Array.from(t.entries()).map((([, {
            injector: t
        }]) => t.createInstances()))
    }

    function I(t) {
        return Array.from(t.entries()).map((async ([n, {
            injector: o
        }]) => {
            const c = await o.getAsync(s.PropServiceToken);
            t.set(n, {
                injector: o,
                propService: c
            })
        }))
    }
    e.default = async function(t, n, s, j, v, y = {}) {
        const P = new Map,
            A = n.map((t => t.route));
        await (0, u.default)(A);
        const [w, k] = await s.getAllAsync([l.PreRouteInjectorsHookToken, l.AppNameToken]), h = await w.getAppInstallers(n), T = (s, f, I = []) => {
            const A = n.find((t => t.route === s));
            if (!A) return;
            const w = (0, u.getLoadedInstallers)(s.installers || []),
                _ = s.plugins || [],
                M = s === t,
                S = `${f.id} > ${M?k:s.path||'app'}`,
                R = M ? h : [],
                $ = new o.default({ ...y,
                    id: S,
                    parent: f,
                    hydrationInstances: j[S],
                    installers: [...R, p.default, ...w, ...(0, c.getPluginsInstallers)(_), ...(0, c.getPluginsPropsInjectors)([...I, ..._]), ({
                        provide: t
                    }) => {
                        t(l.InitialMatchedRouteToken, [], (() => ({ ...A,
                            location: v
                        })))
                    }]
                });
            P.set(s, {
                injector: $
            }), s.routes && s.routes.forEach((t => T(t, $, [...I, ..._])))
        };
        return T(t, s), {
            routeInjectors: P,
            routeInjectorPromises: f(P),
            propServicePromises: I(P)
        }
    }
}), "32f89c", ["45f788", "ba7a76", "cd194e", "c05363", "f23af2", "f7ea68", "b51a5d", "90039c"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CompatRoute = function(u) {
        let {
            path: c
        } = u;
        u.exact || (c += "/*");
        return (0, t.createElement)(n.Routes, null, (0, t.createElement)(n.Route, {
            path: c,
            element: (0, t.createElement)(o.Route, u)
        }))
    }, e.CompatRouter = function(u) {
        let {
            children: c
        } = u, l = (0, o.useHistory)(), [f, s] = (0, t.useState)((() => ({
            location: l.location,
            action: l.action
        })));
        return (0, t.useLayoutEffect)((() => {
            l.listen(((t, n) => s({
                location: t,
                action: n
            })))
        }), [l]), (0, t.createElement)(n.Router, {
            navigationType: f.action,
            location: f.location,
            navigator: l
        }, (0, t.createElement)(n.Routes, null, (0, t.createElement)(n.Route, {
            path: "*",
            element: c
        })))
    }, Object.defineProperty(e, "MemoryRouter", {
        enumerable: !0,
        get: function() {
            return n.MemoryRouter
        }
    }), Object.defineProperty(e, "Navigate", {
        enumerable: !0,
        get: function() {
            return n.Navigate
        }
    }), Object.defineProperty(e, "NavigationType", {
        enumerable: !0,
        get: function() {
            return n.NavigationType
        }
    }), Object.defineProperty(e, "Outlet", {
        enumerable: !0,
        get: function() {
            return n.Outlet
        }
    }), Object.defineProperty(e, "Route", {
        enumerable: !0,
        get: function() {
            return n.Route
        }
    }), Object.defineProperty(e, "Router", {
        enumerable: !0,
        get: function() {
            return n.Router
        }
    }), Object.defineProperty(e, "Routes", {
        enumerable: !0,
        get: function() {
            return n.Routes
        }
    }), Object.defineProperty(e, "UNSAFE_LocationContext", {
        enumerable: !0,
        get: function() {
            return n.UNSAFE_LocationContext
        }
    }), Object.defineProperty(e, "UNSAFE_NavigationContext", {
        enumerable: !0,
        get: function() {
            return n.UNSAFE_NavigationContext
        }
    }), Object.defineProperty(e, "UNSAFE_RouteContext", {
        enumerable: !0,
        get: function() {
            return n.UNSAFE_RouteContext
        }
    }), Object.defineProperty(e, "createPath", {
        enumerable: !0,
        get: function() {
            return n.createPath
        }
    }), Object.defineProperty(e, "createRoutesFromChildren", {
        enumerable: !0,
        get: function() {
            return n.createRoutesFromChildren
        }
    }), Object.defineProperty(e, "generatePath", {
        enumerable: !0,
        get: function() {
            return n.generatePath
        }
    }), Object.defineProperty(e, "matchPath", {
        enumerable: !0,
        get: function() {
            return n.matchPath
        }
    }), Object.defineProperty(e, "matchRoutes", {
        enumerable: !0,
        get: function() {
            return n.matchRoutes
        }
    }), Object.defineProperty(e, "parsePath", {
        enumerable: !0,
        get: function() {
            return n.parsePath
        }
    }), Object.defineProperty(e, "renderMatches", {
        enumerable: !0,
        get: function() {
            return n.renderMatches
        }
    }), Object.defineProperty(e, "resolvePath", {
        enumerable: !0,
        get: function() {
            return n.resolvePath
        }
    }), Object.defineProperty(e, "useHref", {
        enumerable: !0,
        get: function() {
            return n.useHref
        }
    }), Object.defineProperty(e, "useInRouterContext", {
        enumerable: !0,
        get: function() {
            return n.useInRouterContext
        }
    }), Object.defineProperty(e, "useLocation", {
        enumerable: !0,
        get: function() {
            return n.useLocation
        }
    }), Object.defineProperty(e, "useMatch", {
        enumerable: !0,
        get: function() {
            return n.useMatch
        }
    }), Object.defineProperty(e, "useNavigate", {
        enumerable: !0,
        get: function() {
            return n.useNavigate
        }
    }), Object.defineProperty(e, "useNavigationType", {
        enumerable: !0,
        get: function() {
            return n.useNavigationType
        }
    }), Object.defineProperty(e, "useOutlet", {
        enumerable: !0,
        get: function() {
            return n.useOutlet
        }
    }), Object.defineProperty(e, "useOutletContext", {
        enumerable: !0,
        get: function() {
            return n.useOutletContext
        }
    }), Object.defineProperty(e, "useParams", {
        enumerable: !0,
        get: function() {
            return n.useParams
        }
    }), Object.defineProperty(e, "useResolvedPath", {
        enumerable: !0,
        get: function() {
            return n.useResolvedPath
        }
    }), Object.defineProperty(e, "useRoutes", {
        enumerable: !0,
        get: function() {
            return n.useRoutes
        }
    });
    var t = r(d[0]),
        n = (r(d[1]), r(d[2])),
        o = r(d[3]);
    /**
     * React Router DOM v5 Compat v6.3.0
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function u() {
        return u = Object.assign || function(t) {
            for (var n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (t[u] = o[u])
            }
            return t
        }, u.apply(this, arguments)
    }

    function c(t, n) {
        if (null == t) return {};
        var o, u, c = {},
            l = Object.keys(t);
        for (u = 0; u < l.length; u++) o = l[u], n.indexOf(o) >= 0 || (c[o] = t[o]);
        return c
    }
    const l = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
        f = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];

    function s(t) {
        return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
    }
    const b = (0, t.forwardRef)((function(o, f) {
        let {
            onClick: s,
            reloadDocument: b,
            replace: y = !1,
            state: P,
            target: h,
            to: O
        } = o, v = c(o, l), j = (0, n.useHref)(O), R = p(O, {
            replace: y,
            state: P,
            target: h
        });
        return (0, t.createElement)("a", u({}, v, {
            href: j,
            onClick: function(t) {
                s && s(t), t.defaultPrevented || b || R(t)
            },
            ref: f,
            target: h
        }))
    }));
    (0, t.forwardRef)((function(o, l) {
        let {
            "aria-current": s = "page",
            caseSensitive: p = !1,
            className: y = "",
            end: P = !1,
            style: h,
            to: O,
            children: v
        } = o, j = c(o, f), R = (0, n.useLocation)(), C = (0, n.useResolvedPath)(O), N = R.pathname, E = C.pathname;
        p || (N = N.toLowerCase(), E = E.toLowerCase());
        let x, _ = N === E || !P && N.startsWith(E) && "/" === N.charAt(E.length),
            A = _ ? s : void 0;
        x = "function" == typeof y ? y({
            isActive: _
        }) : [y, _ ? "active" : null].filter(Boolean).join(" ");
        let L = "function" == typeof h ? h({
            isActive: _
        }) : h;
        return (0, t.createElement)(b, u({}, j, {
            "aria-current": A,
            className: x,
            ref: l,
            style: L,
            to: O
        }), "function" == typeof v ? v({
            isActive: _
        }) : v)
    }));

    function p(o, u) {
        let {
            target: c,
            replace: l,
            state: f
        } = void 0 === u ? {} : u, b = (0, n.useNavigate)(), p = (0, n.useLocation)(), y = (0, n.useResolvedPath)(o);
        return (0, t.useCallback)((t => {
            if (!(0 !== t.button || c && "_self" !== c || s(t))) {
                t.preventDefault();
                let u = !!l || (0, n.createPath)(p) === (0, n.createPath)(y);
                b(o, {
                    replace: u,
                    state: f
                })
            }
        }), [p, b, y, l, f, c, o])
    }
}), "4b7e39", ["07aa1f", "b95826", "0b6a8f", "733f27"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = r(d[1]),
        u = t(r(d[2]));
    e.default = (0, l.createRouteHandler)({
        installers: [u.default]
    })
}), "74919c", ["ba7a76", "b95601", "e4b5fc"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function n() {
        const t = r(d[1]);
        return n = function() {
            return t
        }, t
    }

    function o() {
        const n = t(r(d[2]));
        return o = function() {
            return n
        }, n
    }

    function c() {
        const t = r(d[3]);
        return c = function() {
            return t
        }, t
    }

    function u() {
        const n = t(r(d[4]));
        return u = function() {
            return n
        }, n
    }

    function s() {
        const n = t(r(d[5]));
        return s = function() {
            return n
        }, n
    }
    async function f(t) {
        try {
            const [{
                stream: n
            }] = await t.getAllAsync([c().BodyTagStreamToken]);
            n.unpipe()
        } catch {}
    }
    async function l(t, n) {
        return n ? (f(n), t) : t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createRootInjector = function({
        installers: t,
        parent: n,
        hydrationInstances: c = {}
    }) {
        const u = 'root';
        return new(o().default)({
            installers: t,
            id: u,
            parent: n,
            hydrationInstances: c[u]
        })
    }, e.renderAppRoute = async function(t, o) {
        const {
            parent: f,
            routePathWithSearchAndHash: p,
            hydrationInstances: h
        } = o, y = t[0].route, w = (0, n().createLocation)(p), I = t.find((t => t.match.isExact));
        if (!I) throw new(u().default)(p, t);
        let j, R;
        const v = [];
        !(function t(n) {
            v.push(n.createInstances()), n.parent && t(n.parent)
        })(f);
        let A = f;
        try {
            const {
                routeInjectors: n,
                routeInjectorPromises: o,
                propServicePromises: u
            } = await (0, s().default)(y, t, f, h, w);
            j = n, R = j.get(I.route) ? .injector, R && (A = R);
            const l = async () => (await A.getAsync(c().RendererToken))({
                    path: p,
                    app: y,
                    injector: f,
                    routeInjectors: j,
                    topLevelRouteInjector: R
                }),
                [P] = await Promise.all([l(), ...v, ...o, ...u]);
            return {
                renderResult: P,
                topLevelRouteInjector: R
            }
        } catch (t) {
            throw await l(t, R)
        }
    };
    new Map
}), "82cd27", ["ba7a76", "d69748", "cd194e", "b51a5d", "ff00af", "32f89c"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        provide: c
    }) {
        c(t.PropServiceToken, [], (() => {
            const t = [];
            return {
                registerSelector(c) {
                    t.push(c)
                },
                selectProps: c => t.reduce(((t, o) => Object.assign(t, o(c))), {})
            }
        }))
    };
    var t = r(d[0])
}), "90039c", ["c05363"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createRouteHandler = function(t = {}) {
        {
            const c = 'routeHandlerClient',
                s = (0, o.default)('injector-instances') || {},
                u = new n.default({
                    id: c,
                    hydrationInstances: s[c],
                    lazy: !1,
                    ...t
                });
            l = u, u.createInstances()
        }
    }, e.getRouteHandlerInjector = function(t) {
        if (t === c.PRIVATE_HYPERLOOP_V2_INJECTOR_SYMBOL) return l;
        throw new Error('Accessing the route handler injector instance outside of Hyperloop v2 core is not allowed')
    };
    var n = t(r(d[1])),
        o = t(r(d[2])),
        c = r(d[3]);
    let l
}), "b95601", ["ba7a76", "cd194e", "b2dff4", "7d89f9"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Action = void 0, e.createBrowserHistory = function(t) {
        void 0 === t && (t = {});
        var l = t.window,
            s = void 0 === l ? document.defaultView : l,
            P = s.history;

        function b() {
            var t = s.location,
                n = t.pathname,
                o = t.search,
                c = t.hash,
                l = P.state || {};
            return [l.idx, u({
                pathname: n,
                search: o,
                hash: c,
                state: l.usr || null,
                key: l.key || 'default'
            })]
        }
        var x = null;
        s.addEventListener(f, (function() {
            if (x) A.call(x), x = null;
            else {
                var t = n.Pop,
                    o = b(),
                    u = o[0],
                    c = o[1];
                if (A.length) {
                    if (null != u) {
                        var l = S - u;
                        l && (x = {
                            action: t,
                            location: c,
                            retry: function() {
                                j(-1 * l)
                            }
                        }, j(l))
                    }
                } else V(t)
            }
        }));
        var E = n.Pop,
            w = b(),
            S = w[0],
            H = w[1],
            L = v(),
            A = v();
        null == S && (S = 0, P.replaceState((0, o.default)({}, P.state, {
            idx: S
        }), ''));

        function M(t) {
            return 'string' == typeof t ? t : y(t)
        }

        function O(t, n) {
            return void 0 === n && (n = null), u((0, o.default)({
                pathname: H.pathname,
                hash: '',
                search: ''
            }, 'string' == typeof t ? k(t) : t, {
                state: n,
                key: p()
            }))
        }

        function R(t, n) {
            return [{
                usr: t.state,
                key: t.key,
                idx: n
            }, M(t)]
        }

        function _(t, n, o) {
            return !A.length || (A.call({
                action: t,
                location: n,
                retry: o
            }), !1)
        }

        function V(t) {
            E = t;
            var n = b();
            S = n[0], H = n[1], L.call({
                action: E,
                location: H
            })
        }

        function j(t) {
            P.go(t)
        }
        return {
            get action() {
                return E
            },
            get location() {
                return H
            },
            createHref: M,
            push: function t(o, u) {
                var c = n.Push,
                    l = O(o, u);
                if (_(c, l, (function() {
                        t(o, u)
                    }))) {
                    var f = R(l, S + 1),
                        h = f[0],
                        v = f[1];
                    try {
                        P.pushState(h, '', v)
                    } catch (t) {
                        s.location.assign(v)
                    }
                    V(c)
                }
            },
            replace: function t(o, u) {
                var c = n.Replace,
                    l = O(o, u);
                if (_(c, l, (function() {
                        t(o, u)
                    }))) {
                    var f = R(l, S),
                        s = f[0],
                        h = f[1];
                    P.replaceState(s, '', h), V(c)
                }
            },
            go: j,
            back: function() {
                j(-1)
            },
            forward: function() {
                j(1)
            },
            listen: function(t) {
                return L.push(t)
            },
            block: function(t) {
                var n = A.push(t);
                return 1 === A.length && s.addEventListener(c, h),
                    function() {
                        n(), A.length || s.removeEventListener(c, h)
                    }
            }
        }
    }, e.createHashHistory = function(t) {
        void 0 === t && (t = {});
        var s = t.window,
            P = void 0 === s ? document.defaultView : s,
            b = P.history;

        function x() {
            var t = k(P.location.hash.substr(1)),
                n = t.pathname,
                o = void 0 === n ? '/' : n,
                c = t.search,
                l = void 0 === c ? '' : c,
                f = t.hash,
                s = void 0 === f ? '' : f,
                h = b.state || {};
            return [h.idx, u({
                pathname: o,
                search: l,
                hash: s,
                state: h.usr || null,
                key: h.key || 'default'
            })]
        }
        var E = null;

        function w() {
            if (E) O.call(E), E = null;
            else {
                var t = n.Pop,
                    o = x(),
                    u = o[0],
                    c = o[1];
                if (O.length) {
                    if (null != u) {
                        var l = L - u;
                        l && (E = {
                            action: t,
                            location: c,
                            retry: function() {
                                C(-1 * l)
                            }
                        }, C(l))
                    }
                } else B(t)
            }
        }
        P.addEventListener(f, w), P.addEventListener(l, (function() {
            y(x()[1]) !== y(A) && w()
        }));
        var S = n.Pop,
            H = x(),
            L = H[0],
            A = H[1],
            M = v(),
            O = v();
        null == L && (L = 0, b.replaceState((0, o.default)({}, b.state, {
            idx: L
        }), ''));

        function R() {
            var t = document.querySelector('base'),
                n = '';
            if (t && t.getAttribute('href')) {
                var o = P.location.href,
                    u = o.indexOf('#');
                n = -1 === u ? o : o.slice(0, u)
            }
            return n
        }

        function _(t) {
            return R() + '#' + ('string' == typeof t ? t : y(t))
        }

        function V(t, n) {
            return void 0 === n && (n = null), u((0, o.default)({
                pathname: A.pathname,
                hash: '',
                search: ''
            }, 'string' == typeof t ? k(t) : t, {
                state: n,
                key: p()
            }))
        }

        function j(t, n) {
            return [{
                usr: t.state,
                key: t.key,
                idx: n
            }, _(t)]
        }

        function q(t, n, o) {
            return !O.length || (O.call({
                action: t,
                location: n,
                retry: o
            }), !1)
        }

        function B(t) {
            S = t;
            var n = x();
            L = n[0], A = n[1], M.call({
                action: S,
                location: A
            })
        }

        function C(t) {
            b.go(t)
        }
        return {
            get action() {
                return S
            },
            get location() {
                return A
            },
            createHref: _,
            push: function t(o, u) {
                var c = n.Push,
                    l = V(o, u);
                if (q(c, l, (function() {
                        t(o, u)
                    }))) {
                    var f = j(l, L + 1),
                        s = f[0],
                        h = f[1];
                    try {
                        b.pushState(s, '', h)
                    } catch (t) {
                        P.location.assign(h)
                    }
                    B(c)
                }
            },
            replace: function t(o, u) {
                var c = n.Replace,
                    l = V(o, u);
                if (q(c, l, (function() {
                        t(o, u)
                    }))) {
                    var f = j(l, L),
                        s = f[0],
                        h = f[1];
                    b.replaceState(s, '', h), B(c)
                }
            },
            go: C,
            back: function() {
                C(-1)
            },
            forward: function() {
                C(1)
            },
            listen: function(t) {
                return M.push(t)
            },
            block: function(t) {
                var n = O.push(t);
                return 1 === O.length && P.addEventListener(c, h),
                    function() {
                        n(), O.length || P.removeEventListener(c, h)
                    }
            }
        }
    }, e.createMemoryHistory = function(t) {
        void 0 === t && (t = {});
        var c = t,
            l = c.initialEntries,
            f = void 0 === l ? ['/'] : l,
            h = c.initialIndex,
            P = f.map((function(t) {
                return u((0, o.default)({
                    pathname: '/',
                    search: '',
                    hash: '',
                    state: null,
                    key: p()
                }, 'string' == typeof t ? k(t) : t))
            })),
            b = s(null == h ? P.length - 1 : h, 0, P.length - 1),
            x = n.Pop,
            E = P[b],
            w = v(),
            S = v();

        function H(t, n) {
            return void 0 === n && (n = null), u((0, o.default)({
                pathname: E.pathname,
                search: '',
                hash: ''
            }, 'string' == typeof t ? k(t) : t, {
                state: n,
                key: p()
            }))
        }

        function L(t, n, o) {
            return !S.length || (S.call({
                action: t,
                location: n,
                retry: o
            }), !1)
        }

        function A(t, n) {
            x = t, E = n, w.call({
                action: x,
                location: E
            })
        }

        function M(t) {
            var o = s(b + t, 0, P.length - 1),
                u = n.Pop,
                c = P[o];
            L(u, c, (function() {
                M(t)
            })) && (b = o, A(u, c))
        }
        return {
            get index() {
                return b
            },
            get action() {
                return x
            },
            get location() {
                return E
            },
            createHref: function(t) {
                return 'string' == typeof t ? t : y(t)
            },
            push: function t(o, u) {
                var c = n.Push,
                    l = H(o, u);
                L(c, l, (function() {
                    t(o, u)
                })) && (b += 1, P.splice(b, P.length, l), A(c, l))
            },
            replace: function t(o, u) {
                var c = n.Replace,
                    l = H(o, u);
                L(c, l, (function() {
                    t(o, u)
                })) && (P[b] = l, A(c, l))
            },
            go: M,
            back: function() {
                M(-1)
            },
            forward: function() {
                M(1)
            },
            listen: function(t) {
                return w.push(t)
            },
            block: function(t) {
                return S.push(t)
            }
        }
    }, e.createPath = y, e.parsePath = k;
    var n, o = t(r(d[1]));
    !(function(t) {
        t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE"
    })(n || (e.Action = n = {}));
    var u = function(t) {
            return t
        },
        c = 'beforeunload',
        l = 'hashchange',
        f = 'popstate';

    function s(t, n, o) {
        return Math.min(Math.max(t, n), o)
    }

    function h(t) {
        t.preventDefault(), t.returnValue = ''
    }

    function v() {
        var t = [];
        return {
            get length() {
                return t.length
            },
            push: function(n) {
                return t.push(n),
                    function() {
                        t = t.filter((function(t) {
                            return t !== n
                        }))
                    }
            },
            call: function(n) {
                t.forEach((function(t) {
                    return t && t(n)
                }))
            }
        }
    }

    function p() {
        return Math.random().toString(36).substr(2, 8)
    }

    function y(t) {
        var n = t.pathname,
            o = void 0 === n ? '/' : n,
            u = t.search,
            c = void 0 === u ? '' : u,
            l = t.hash,
            f = void 0 === l ? '' : l;
        return c && '?' !== c && (o += '?' === c.charAt(0) ? c : '?' + c), f && '#' !== f && (o += '#' === f.charAt(0) ? f : '#' + f), o
    }

    function k(t) {
        var n = {};
        if (t) {
            var o = t.indexOf('#');
            o >= 0 && (n.hash = t.substr(o), t = t.substr(0, o));
            var u = t.indexOf('?');
            u >= 0 && (n.search = t.substr(u), t = t.substr(0, u)), t && (n.pathname = t)
        }
        return n
    }
}), "b95826", ["ba7a76", "dfdd78"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PropServiceToken = void 0;
    var o = r(d[0]);
    e.PropServiceToken = (0, o.createToken)('PropServiceToken')
}), "c05363", ["cd87be"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function n() {
        const u = t(r(d[1]));
        return n = function() {
            return u
        }, u
    }

    function u() {
        const n = t(r(d[2]));
        return u = function() {
            return n
        }, n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        (0, n().default)(t), (0, u().default)(t)
    }
}), "e4b5fc", ["ba7a76", "0abd6f", "27bd9b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";

    function t() {
        const n = r(d[0]);
        return t = function() {
            return n
        }, n
    }

    function n() {
        const t = r(d[1]);
        return n = function() {
            return t
        }, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = u, e.matchesExactRoute = function(t, n) {
        return u(t, n).some((({
            match: t
        }) => t.isExact))
    };
    var s = r(d[2]);

    function u(u, c) {
        const {
            pathname: o
        } = (0, t().parsePath)(c), h = [];
        return (function t(u, c, p) {
            return u.some((u => {
                let f;
                if ('v6' === u.options ? .version && u.path && 'string' == typeof u.path) {
                    const t = (0, n().matchPath)({
                        path: u.path,
                        end: u.strict,
                        caseSensitive: u.sensitive
                    }, o);
                    f = t ? {
                        params: t.params,
                        isExact: !u.path.endsWith('/*'),
                        path: u.path,
                        url: t.pathnameBase
                    } : null
                } else f = u.path ? (0, s.matchPath)(o, u) : c;
                if (f) {
                    const n = {
                        match: f,
                        route: u
                    };
                    p && (n.inclusive = p), h.push(n), u.routes && t(u.routes, f, u.inclusive)
                }
                return !p && f
            })), h
        })(u, (0, s.matchPath)(o, '/'))
    }
}), "e80eed", ["d69748", "4b7e39", "1e300f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getPluginsInstallers = function(n = []) {
        return n.reduce(((n, s) => (s.installers && n.push(...s.installers), n)), [])
    }, e.getPluginsPropsInjectors = function(n = []) {
        return n.reduce(((n, s) => (s.injectProps && n.push(s.injectProps), n)), [])
    }
}), "f23af2", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return Promise.all(t.flatMap((t => t.installers || [])).filter(l).map((t => t.loader().then((n => {
            t.loaded = n
        }))))).then((() => {}))
    }, e.getLoadedInstallers = function(t) {
        return t.map((t => l(t) ? t.loaded : t)).filter(n.default)
    }, e.isAsyncInstaller = l;
    var n = t(r(d[1]));

    function l(t) {
        return 'function' != typeof t
    }
}), "f7ea68", ["ba7a76", "58861b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const t = 'HYPERLOOP_NOT_FOUND_ERROR';
    class o extends Error {
        constructor(o, s) {
            super(`No route found at ${o}`), this.path = void 0, this.matches = void 0, this.code = void 0, this.path = o, this.matches = s, this.name = 'HyperloopNotFoundError', this.code = t
        }
        static isNotFound(o) {
            return o ? .code === t
        }
    }
    e.default = o
}), "ff00af", []);
__r("74919c");
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/core-guest-loop/routeHandler.940fd4c1de.js.map