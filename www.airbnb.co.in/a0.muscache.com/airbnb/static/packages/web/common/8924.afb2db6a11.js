__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, l) {
        if (!l || !l.length || !t) return;
        const f = Array.isArray(l) ? l : u(l);
        let c = t;
        for (let t = 0; t < f.length - 1; t += 1) {
            const l = f[t];
            if (null != l) {
                if ((0, n.default)(c[l])) return;
                c = c[l]
            }
        }
        const o = f[f.length - 1];
        if (null == o) return;
        return c[o]
    };
    var n = t(r(d[1]));
    const l = /\[(\d+)\]/g;

    function u(t) {
        return t.replace(l, '.$1').split('.').filter((t => '' !== t))
    }
}), "004dce", ["ba7a76", "2e7a28"]);
__d((function(e, t, n, r, i, o, a) {
    "use strict";
    !(function(e) {
        if ("object" == typeof o && void 0 !== i) i.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
            window.braintree = e()
        }
    })((function() {
        return (function e(n, r, i) {
            function o(s, c) {
                if (!r[s]) {
                    if (!n[s]) {
                        var d = "function" == typeof t && t;
                        if (!c && d) return d(s, !0);
                        if (a) return a(s, !0);
                        var l = new Error("Cannot find module '" + s + "'");
                        throw l.code = "MODULE_NOT_FOUND", l
                    }
                    var u = r[s] = {
                        exports: {}
                    };
                    n[s][0].call(u.exports, (function(e) {
                        return o(n[s][1][e] || e)
                    }), u, u.exports, e, n, r, i)
                }
                return r[s].exports
            }
            for (var a = "function" == typeof t && t, s = 0; s < i.length; s++) o(i[s]);
            return o
        })({
            1: [function(e, t, n) {
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.PromiseGlobal = void 0;
                var i = r(e("promise-polyfill")),
                    o = "undefined" != typeof Promise ? Promise : i.default;
                n.PromiseGlobal = o
            }, {
                "promise-polyfill": 65
            }],
            2: [function(e, t, n) {
                var r = e("./lib/promise"),
                    i = {};

                function o(e) {
                    var t, n = JSON.stringify(e);
                    if (!e.forceScriptReload && (t = i[n])) return t;
                    var o = document.createElement("script"),
                        a = e.dataAttributes || {},
                        s = e.container || document.head;
                    return o.src = e.src, o.id = e.id || "", o.async = !0, e.crossorigin && o.setAttribute("crossorigin", "" + e.crossorigin), Object.keys(a).forEach((function(e) {
                        o.setAttribute("data-" + e, "" + a[e])
                    })), t = new r.PromiseGlobal((function(t, n) {
                        o.addEventListener("load", (function() {
                            t(o)
                        })), o.addEventListener("error", (function() {
                            n(new Error(e.src + " failed to load."))
                        })), o.addEventListener("abort", (function() {
                            n(new Error(e.src + " has aborted."))
                        })), s.appendChild(o)
                    })), i[n] = t, t
                }
                o.clearCache = function() {
                    i = {}
                }, t.exports = o
            }, {
                "./lib/promise": 1
            }],
            3: [function(e, t, n) {
                t.exports = e("./dist/load-script")
            }, {
                "./dist/load-script": 2
            }],
            4: [function(e, t, n) {
                t.exports = function(e) {
                    return e = e || window.navigator.userAgent, /Android/i.test(e)
                }
            }, {}],
            5: [function(e, t, n) {
                t.exports = function(e) {
                    return e = e || window.navigator.userAgent, /CrOS/i.test(e)
                }
            }, {}],
            6: [function(e, t, n) {
                var r = e("./is-edge"),
                    i = e("./is-samsung"),
                    o = e("./is-duckduckgo"),
                    a = e("./is-opera"),
                    s = e("./is-silk");
                t.exports = function(e) {
                    return !(-1 === (e = e || window.navigator.userAgent).indexOf("Chrome") && -1 === e.indexOf("CriOS") || r(e) || i(e) || o(e) || a(e) || s(e))
                }
            }, {
                "./is-duckduckgo": 7,
                "./is-edge": 8,
                "./is-opera": 17,
                "./is-samsung": 18,
                "./is-silk": 19
            }],
            7: [function(e, t, n) {
                t.exports = function(e) {
                    return -1 !== (e = e || window.navigator.userAgent).indexOf("DuckDuckGo/")
                }
            }, {}],
            8: [function(e, t, n) {
                t.exports = function(e) {
                    return -1 !== (e = e || window.navigator.userAgent).indexOf("Edge/")
                }
            }, {}],
            9: [function(e, t, n) {
                t.exports = function(e) {
                    return e = e || window.navigator.userAgent, /Firefox/i.test(e)
                }
            }, {}],
            10: [function(e, t, n) {
                t.exports = function(e) {
                    return -1 !== (e = e || window.navigator.userAgent).indexOf("MSIE 9")
                }
            }, {}],
            11: [function(e, t, n) {
                t.exports = function(e) {
                    return e = e || window.navigator.userAgent, /FxiOS/i.test(e)
                }
            }, {}],
            12: [function(e, t, n) {
                var r = e("./is-ios");

                function i(e) {
                    return /\bGSA\b/.test(e)
                }
                t.exports = function(e) {
                    return e = e || window.navigator.userAgent, r(e) && i(e)
                }
            }, {
                "./is-ios": 16
            }],
            13: [function(e, t, n) {
                var r = e("./is-ios"),
                    i = e("./is-ios-firefox"),
                    o = /webkit/i;

                function a(e) {
                    return o.test(e)
                }

                function s(e) {
                    return e.indexOf("CriOS") > -1
                }

                function c(e) {
                    return e.indexOf("FBAN") > -1
                }
                t.exports = function(e) {
                    return e = e || window.navigator.userAgent, r(e) && a(e) && !s(e) && !i(e) && !c(e)
                }
            }, {
                "./is-ios": 16,
                "./is-ios-firefox": 11
            }],
            14: [function(e, t, n) {
                var r = e("./is-ios"),
                    i = e("./is-ios-google-search-app");
                t.exports = function(e) {
                    return e = e || window.navigator.userAgent, !!r(e) && (!!i(e) || /.+AppleWebKit(?!.*Safari)/i.test(e))
                }
            }, {
                "./is-ios": 16,
                "./is-ios-google-search-app": 12
            }],
            15: [function(e, t, n) {
                var r = e("./is-ios-webview");
                t.exports = function(e, t) {
                    return t = void 0 !== t ? t : window.statusbar.visible, r(e) && t
                }
            }, {
                "./is-ios-webview": 14
            }],
            16: [function(e, t, n) {
                t.exports = function(e) {
                    return e = e || window.navigator.userAgent, /iPhone|iPod|iPad/i.test(e)
                }
            }, {}],
            17: [function(e, t, n) {
                t.exports = function(e) {
                    return -1 !== (e = e || window.navigator.userAgent).indexOf("OPR/") || -1 !== e.indexOf("Opera/") || -1 !== e.indexOf("OPT/")
                }
            }, {}],
            18: [function(e, t, n) {
                t.exports = function(e) {
                    return e = e || window.navigator.userAgent, /SamsungBrowser/i.test(e)
                }
            }, {}],
            19: [function(e, t, n) {
                t.exports = function(e) {
                    return -1 !== (e = e || window.navigator.userAgent).indexOf("Silk/")
                }
            }, {}],
            20: [function(e, t, n) {
                var r = e("./is-android"),
                    i = e("./is-ios-firefox"),
                    o = e("./is-ios-webview"),
                    a = e("./is-chrome"),
                    s = e("./is-samsung"),
                    c = e("./is-duckduckgo");

                function d(e) {
                    var t = (e = e || window.navigator.userAgent).match(/CriOS\/(\d+)\./);
                    return !!t && parseInt(t[1], 10) < 48
                }

                function l(e) {
                    return (e = e || window.navigator.userAgent).indexOf("Opera Mini") > -1
                }

                function u(e) {
                    return e = e || window.navigator.userAgent, !!r(e) && (/Version\/[\d.]+/i.test(e) && !l(e) && !c(e))
                }

                function p(e) {
                    return !a(e) && !s(e) && /samsung/i.test(e)
                }
                t.exports = function(e) {
                    return e = e || window.navigator.userAgent, !(o(e) || i(e) || u(e) || l(e) || d(e) || p(e))
                }
            }, {
                "./is-android": 4,
                "./is-chrome": 6,
                "./is-duckduckgo": 7,
                "./is-ios-firefox": 11,
                "./is-ios-webview": 14,
                "./is-samsung": 18
            }],
            21: [function(e, t, n) {
                t.exports = e("./dist/is-android")
            }, {
                "./dist/is-android": 4
            }],
            22: [function(e, t, n) {
                t.exports = e("./dist/is-chrome-os")
            }, {
                "./dist/is-chrome-os": 5
            }],
            23: [function(e, t, n) {
                t.exports = e("./dist/is-chrome")
            }, {
                "./dist/is-chrome": 6
            }],
            24: [function(e, t, n) {
                t.exports = e("./dist/is-firefox")
            }, {
                "./dist/is-firefox": 9
            }],
            25: [function(e, t, n) {
                t.exports = e("./dist/is-ie9")
            }, {
                "./dist/is-ie9": 10
            }],
            26: [function(e, t, n) {
                t.exports = e("./dist/is-ios-safari")
            }, {
                "./dist/is-ios-safari": 13
            }],
            27: [function(e, t, n) {
                t.exports = e("./dist/is-ios-webview")
            }, {
                "./dist/is-ios-webview": 14
            }],
            28: [function(e, t, n) {
                t.exports = e("./dist/is-ios-wkwebview")
            }, {
                "./dist/is-ios-wkwebview": 15
            }],
            29: [function(e, t, n) {
                t.exports = e("./dist/is-ios")
            }, {
                "./dist/is-ios": 16
            }],
            30: [function(e, t, n) {
                t.exports = e("./dist/is-samsung")
            }, {
                "./dist/is-samsung": 18
            }],
            31: [function(e, t, n) {
                t.exports = e("./dist/supports-popups")
            }, {
                "./dist/supports-popups": 20
            }],
            32: [function(e, t, n) {
                var r = (function() {
                    function e() {
                        this._events = {}
                    }
                    return e.prototype.on = function(e, t) {
                        this._events[e] ? this._events[e].push(t) : this._events[e] = [t]
                    }, e.prototype.off = function(e, t) {
                        var n = this._events[e];
                        if (n) {
                            var r = n.indexOf(t);
                            n.splice(r, 1)
                        }
                    }, e.prototype._emit = function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        var r = this._events[e];
                        r && r.forEach((function(e) {
                            e.apply(void 0, t)
                        }))
                    }, e.prototype.hasListener = function(e) {
                        var t = this._events[e];
                        return !!t && t.length > 0
                    }, e.createChild = function(t) {
                        t.prototype = Object.create(e.prototype, {
                            constructor: t
                        })
                    }, e
                })();
                t.exports = r
            }, {}],
            33: [function(e, t, n) {
                var r = "undefined" != typeof Promise ? Promise : null,
                    i = (function() {
                        function e(t) {
                            var n = this;
                            "function" != typeof t ? (this._promise = new e.Promise((function(e, t) {
                                n._resolveFunction = e, n._rejectFunction = t
                            })), t = t || {}, this._onResolve = t.onResolve || e.defaultOnResolve, this._onReject = t.onReject || e.defaultOnReject, e.shouldCatchExceptions(t) && this._promise.catch((function() {})), this._resetState()) : this._promise = new e.Promise(t)
                        }
                        return e.defaultOnResolve = function(t) {
                            return e.Promise.resolve(t)
                        }, e.defaultOnReject = function(t) {
                            return e.Promise.reject(t)
                        }, e.setPromise = function(t) {
                            e.Promise = t
                        }, e.shouldCatchExceptions = function(t) {
                            return t.hasOwnProperty("suppressUnhandledPromiseMessage") ? Boolean(t.suppressUnhandledPromiseMessage) : Boolean(e.suppressUnhandledPromiseMessage)
                        }, e.all = function(t) {
                            return e.Promise.all(t)
                        }, e.allSettled = function(t) {
                            return e.Promise.allSettled(t)
                        }, e.race = function(t) {
                            return e.Promise.race(t)
                        }, e.reject = function(t) {
                            return e.Promise.reject(t)
                        }, e.resolve = function(t) {
                            return e.Promise.resolve(t)
                        }, e.prototype.then = function() {
                            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            return (e = this._promise).then.apply(e, t)
                        }, e.prototype.catch = function() {
                            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            return (e = this._promise).catch.apply(e, t)
                        }, e.prototype.resolve = function(t) {
                            var n = this;
                            return this.isFulfilled || (this._setResolved(), e.Promise.resolve().then((function() {
                                return n._onResolve(t)
                            })).then((function(e) {
                                n._resolveFunction(e)
                            })).catch((function(e) {
                                n._resetState(), n.reject(e)
                            }))), this
                        }, e.prototype.reject = function(t) {
                            var n = this;
                            return this.isFulfilled || (this._setRejected(), e.Promise.resolve().then((function() {
                                return n._onReject(t)
                            })).then((function(e) {
                                n._setResolved(), n._resolveFunction(e)
                            })).catch((function(e) {
                                return n._rejectFunction(e)
                            }))), this
                        }, e.prototype._resetState = function() {
                            this.isFulfilled = !1, this.isResolved = !1, this.isRejected = !1
                        }, e.prototype._setResolved = function() {
                            this.isFulfilled = !0, this.isResolved = !0, this.isRejected = !1
                        }, e.prototype._setRejected = function() {
                            this.isFulfilled = !0, this.isResolved = !1, this.isRejected = !0
                        }, e.Promise = r, e
                    })();
                t.exports = i
            }, {}],
            34: [function(e, t, n) {
                var r = e("./lib/set-attributes"),
                    i = e("./lib/default-attributes"),
                    o = e("./lib/assign");
                t.exports = function(e) {
                    void 0 === e && (e = {});
                    var t = document.createElement("iframe"),
                        n = o.assign({}, i.defaultAttributes, e);
                    return n.style && "string" != typeof n.style && (o.assign(t.style, n.style), delete n.style), r.setAttributes(t, n), t.getAttribute("id") || (t.id = t.name), t
                }
            }, {
                "./lib/assign": 35,
                "./lib/default-attributes": 36,
                "./lib/set-attributes": 37
            }],
            35: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.assign = void 0, n.assign = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    return t.forEach((function(t) {
                        "object" == typeof t && Object.keys(t).forEach((function(n) {
                            e[n] = t[n]
                        }))
                    })), e
                }
            }, {}],
            36: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.defaultAttributes = void 0, n.defaultAttributes = {
                    src: "about:blank",
                    frameBorder: 0,
                    allowtransparency: !0,
                    scrolling: "no"
                }
            }, {}],
            37: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.setAttributes = void 0, n.setAttributes = function(e, t) {
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            var r = t[n];
                            null == r ? e.removeAttribute(n) : e.setAttribute(n, r)
                        }
                }
            }, {}],
            38: [function(e, t, n) {
                t.exports = function() {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (function(e) {
                        var t = 16 * Math.random() | 0;
                        return ('x' === e ? t : 3 & t | 8).toString(16)
                    }))
                }
            }, {}],
            39: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.deferred = function(e) {
                    return function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        setTimeout((function() {
                            try {
                                e.apply(void 0, t)
                            } catch (e) {
                                console.log("Error in callback function"), console.log(e)
                            }
                        }), 1)
                    }
                }
            }, {}],
            40: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.once = function(e) {
                    var t = !1;
                    return function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        t || (t = !0, e.apply(void 0, n))
                    }
                }
            }, {}],
            41: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.promiseOrCallback = function(e, t) {
                    if (!t) return e;
                    e.then((function(e) {
                        return t(null, e)
                    })).catch((function(e) {
                        return t(e)
                    }))
                }
            }, {}],
            42: [function(e, t, n) {
                var r = e("./lib/deferred"),
                    i = e("./lib/once"),
                    o = e("./lib/promise-or-callback");

                function a(e) {
                    return function() {
                        for (var t, n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
                        return "function" == typeof n[n.length - 1] && (t = n.pop(), t = i.once(r.deferred(t))), o.promiseOrCallback(e.apply(this, n), t)
                    }
                }
                a.wrapPrototype = function(e, t) {
                    void 0 === t && (t = {});
                    var n = t.ignoreMethods || [],
                        r = !0 === t.transformPrivateMethods;
                    return Object.getOwnPropertyNames(e.prototype).filter((function(t) {
                        var i, o = "constructor" !== t && "function" == typeof e.prototype[t],
                            a = -1 === n.indexOf(t);
                        return i = !!r || "_" !== t.charAt(0), o && i && a
                    })).forEach((function(t) {
                        var n = e.prototype[t];
                        e.prototype[t] = a(n)
                    })), e
                }, t.exports = a
            }, {
                "./lib/deferred": 39,
                "./lib/once": 40,
                "./lib/promise-or-callback": 41
            }],
            43: [function(e, t, n) {
                var r = this && this.__assign || function() {
                        return r = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }, r.apply(this, arguments)
                    },
                    i = e("./lib/card-types"),
                    o = e("./lib/add-matching-cards-to-results"),
                    a = e("./lib/is-valid-input-type"),
                    s = e("./lib/find-best-match"),
                    c = e("./lib/clone"),
                    d = {},
                    l = {
                        VISA: "visa",
                        MASTERCARD: "mastercard",
                        AMERICAN_EXPRESS: "american-express",
                        DINERS_CLUB: "diners-club",
                        DISCOVER: "discover",
                        JCB: "jcb",
                        UNIONPAY: "unionpay",
                        MAESTRO: "maestro",
                        ELO: "elo",
                        MIR: "mir",
                        HIPER: "hiper",
                        HIPERCARD: "hipercard"
                    },
                    u = [l.VISA, l.MASTERCARD, l.AMERICAN_EXPRESS, l.DINERS_CLUB, l.DISCOVER, l.JCB, l.UNIONPAY, l.MAESTRO, l.ELO, l.MIR, l.HIPER, l.HIPERCARD],
                    p = c.clone(u);

                function _(e) {
                    return d[e] || i[e]
                }

                function E(e, t) {
                    void 0 === t && (t = !1);
                    var n = p.indexOf(e);
                    if (!t && -1 === n) throw new Error('"' + e + '" is not a supported card type.');
                    return n
                }

                function h(e) {
                    var t = [];
                    if (!a.isValidInputType(e)) return t;
                    if (0 === e.length) return p.map((function(e) {
                        return c.clone(_(e))
                    }));
                    p.forEach((function(n) {
                        var r = _(n);
                        o.addMatchingCardsToResults(e, r, t)
                    }));
                    var n = s.findBestMatch(t);
                    return n ? [n] : t
                }
                h.getTypeInfo = function(e) {
                    return c.clone(_(e))
                }, h.removeCard = function(e) {
                    var t = E(e);
                    p.splice(t, 1)
                }, h.addCard = function(e) {
                    var t = E(e.type, !0);
                    d[e.type] = e, -1 === t && p.push(e.type)
                }, h.updateCard = function(e, t) {
                    var n = d[e] || i[e];
                    if (!n) throw new Error("\"" + e + "\" is not a recognized type. Use `addCard` instead.'");
                    if (t.type && n.type !== t.type) throw new Error("Cannot overwrite type parameter.");
                    var o = c.clone(n);
                    o = r(r({}, o), t), d[o.type] = o
                }, h.changeOrder = function(e, t) {
                    var n = E(e);
                    p.splice(n, 1), p.splice(t, 0, e)
                }, h.resetModifications = function() {
                    p = c.clone(u), d = {}
                }, h.types = l, t.exports = h
            }, {
                "./lib/add-matching-cards-to-results": 44,
                "./lib/card-types": 45,
                "./lib/clone": 46,
                "./lib/find-best-match": 47,
                "./lib/is-valid-input-type": 48
            }],
            44: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.addMatchingCardsToResults = void 0;
                var r = e("./clone"),
                    i = e("./matches");
                n.addMatchingCardsToResults = function(e, t, n) {
                    var o, a;
                    for (o = 0; o < t.patterns.length; o++) {
                        var s = t.patterns[o];
                        if (i.matches(e, s)) {
                            var c = r.clone(t);
                            a = Array.isArray(s) ? String(s[0]).length : String(s).length, e.length >= a && (c.matchStrength = a), n.push(c);
                            break
                        }
                    }
                }
            }, {
                "./clone": 46,
                "./matches": 49
            }],
            45: [function(e, t, n) {
                t.exports = {
                    visa: {
                        niceType: "Visa",
                        type: "visa",
                        patterns: [4],
                        gaps: [4, 8, 12],
                        lengths: [16, 18, 19],
                        code: {
                            name: "CVV",
                            size: 3
                        }
                    },
                    mastercard: {
                        niceType: "Mastercard",
                        type: "mastercard",
                        patterns: [
                            [51, 55],
                            [2221, 2229],
                            [223, 229],
                            [23, 26],
                            [270, 271], 2720
                        ],
                        gaps: [4, 8, 12],
                        lengths: [16],
                        code: {
                            name: "CVC",
                            size: 3
                        }
                    },
                    "american-express": {
                        niceType: "American Express",
                        type: "american-express",
                        patterns: [34, 37],
                        gaps: [4, 10],
                        lengths: [15],
                        code: {
                            name: "CID",
                            size: 4
                        }
                    },
                    "diners-club": {
                        niceType: "Diners Club",
                        type: "diners-club",
                        patterns: [
                            [300, 305], 36, 38, 39
                        ],
                        gaps: [4, 10],
                        lengths: [14, 16, 19],
                        code: {
                            name: "CVV",
                            size: 3
                        }
                    },
                    discover: {
                        niceType: "Discover",
                        type: "discover",
                        patterns: [6011, [644, 649], 65],
                        gaps: [4, 8, 12],
                        lengths: [16, 19],
                        code: {
                            name: "CID",
                            size: 3
                        }
                    },
                    jcb: {
                        niceType: "JCB",
                        type: "jcb",
                        patterns: [2131, 1800, [3528, 3589]],
                        gaps: [4, 8, 12],
                        lengths: [16, 17, 18, 19],
                        code: {
                            name: "CVV",
                            size: 3
                        }
                    },
                    unionpay: {
                        niceType: "UnionPay",
                        type: "unionpay",
                        patterns: [620, [624, 626],
                            [62100, 62182],
                            [62184, 62187],
                            [62185, 62197],
                            [62200, 62205],
                            [622010, 622999], 622018, [622019, 622999],
                            [62207, 62209],
                            [622126, 622925],
                            [623, 626], 6270, 6272, 6276, [627700, 627779],
                            [627781, 627799],
                            [6282, 6289], 6291, 6292, 810, [8110, 8131],
                            [8132, 8151],
                            [8152, 8163],
                            [8164, 8171]
                        ],
                        gaps: [4, 8, 12],
                        lengths: [14, 15, 16, 17, 18, 19],
                        code: {
                            name: "CVN",
                            size: 3
                        }
                    },
                    maestro: {
                        niceType: "Maestro",
                        type: "maestro",
                        patterns: [493698, [5e5, 504174],
                            [504176, 506698],
                            [506779, 508999],
                            [56, 59], 63, 67, 6
                        ],
                        gaps: [4, 8, 12],
                        lengths: [12, 13, 14, 15, 16, 17, 18, 19],
                        code: {
                            name: "CVC",
                            size: 3
                        }
                    },
                    elo: {
                        niceType: "Elo",
                        type: "elo",
                        patterns: [401178, 401179, 438935, 457631, 457632, 431274, 451416, 457393, 504175, [506699, 506778],
                            [509e3, 509999], 627780, 636297, 636368, [650031, 650033],
                            [650035, 650051],
                            [650405, 650439],
                            [650485, 650538],
                            [650541, 650598],
                            [650700, 650718],
                            [650720, 650727],
                            [650901, 650978],
                            [651652, 651679],
                            [655e3, 655019],
                            [655021, 655058]
                        ],
                        gaps: [4, 8, 12],
                        lengths: [16],
                        code: {
                            name: "CVE",
                            size: 3
                        }
                    },
                    mir: {
                        niceType: "Mir",
                        type: "mir",
                        patterns: [
                            [2200, 2204]
                        ],
                        gaps: [4, 8, 12],
                        lengths: [16, 17, 18, 19],
                        code: {
                            name: "CVP2",
                            size: 3
                        }
                    },
                    hiper: {
                        niceType: "Hiper",
                        type: "hiper",
                        patterns: [637095, 63737423, 63743358, 637568, 637599, 637609, 637612],
                        gaps: [4, 8, 12],
                        lengths: [16],
                        code: {
                            name: "CVC",
                            size: 3
                        }
                    },
                    hipercard: {
                        niceType: "Hipercard",
                        type: "hipercard",
                        patterns: [606282],
                        gaps: [4, 8, 12],
                        lengths: [16],
                        code: {
                            name: "CVC",
                            size: 3
                        }
                    }
                }
            }, {}],
            46: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.clone = void 0, n.clone = function(e) {
                    return e ? JSON.parse(JSON.stringify(e)) : null
                }
            }, {}],
            47: [function(e, t, n) {
                function r(e) {
                    var t = e.filter((function(e) {
                        return e.matchStrength
                    })).length;
                    return t > 0 && t === e.length
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.findBestMatch = void 0, n.findBestMatch = function(e) {
                    return r(e) ? e.reduce((function(e, t) {
                        return e ? Number(e.matchStrength) < Number(t.matchStrength) ? t : e : t
                    })) : null
                }
            }, {}],
            48: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.isValidInputType = void 0, n.isValidInputType = function(e) {
                    return "string" == typeof e || e instanceof String
                }
            }, {}],
            49: [function(e, t, n) {
                function r(e, t, n) {
                    var r = String(t).length,
                        i = e.substr(0, r),
                        o = parseInt(i, 10);
                    return t = parseInt(String(t).substr(0, i.length), 10), n = parseInt(String(n).substr(0, i.length), 10), o >= t && o <= n
                }

                function i(e, t) {
                    return (t = String(t)).substring(0, e.length) === e.substring(0, t.length)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.matches = void 0, n.matches = function(e, t) {
                    return Array.isArray(t) ? r(e, t[0], t[1]) : i(e, t)
                }
            }, {}],
            50: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.Framebus = void 0;
                var r = e("./lib/is-not-string"),
                    i = e("./lib/subscription-args-invalid"),
                    o = e("./lib/broadcast"),
                    a = e("./lib/package-payload"),
                    s = e("./lib/send-message"),
                    c = e("./lib/constants"),
                    d = window.Promise,
                    l = (function() {
                        function e(e) {
                            void 0 === e && (e = {}), this.origin = e.origin || "*", this.channel = e.channel || "", this.verifyDomain = e.verifyDomain, this.targetFrames = e.targetFrames || [], this.limitBroadcastToFramesArray = Boolean(e.targetFrames), this.isDestroyed = !1, this.listeners = [], this.hasAdditionalChecksForOnListeners = Boolean(this.verifyDomain || this.limitBroadcastToFramesArray)
                        }
                        return e.setPromise = function(t) {
                            e.Promise = t
                        }, e.target = function(t) {
                            return new e(t)
                        }, e.prototype.addTargetFrame = function(e) {
                            this.limitBroadcastToFramesArray && this.targetFrames.push(e)
                        }, e.prototype.include = function(e) {
                            return null != e && (null != e.Window && (e.constructor === e.Window && (c.childWindows.push(e), !0)))
                        }, e.prototype.target = function(t) {
                            return e.target(t)
                        }, e.prototype.emit = function(e, t, n) {
                            if (this.isDestroyed) return !1;
                            var i = this.origin;
                            if (e = this.namespaceEvent(e), (0, r.isntString)(e)) return !1;
                            if ((0, r.isntString)(i)) return !1;
                            "function" == typeof t && (n = t, t = void 0);
                            var c = (0, a.packagePayload)(e, i, t, n);
                            return !!c && (this.limitBroadcastToFramesArray ? this.targetFramesAsWindows().forEach((function(e) {
                                (0, s.sendMessage)(e, c, i)
                            })) : (0, o.broadcast)(c, {
                                origin: i,
                                frame: window.top || window.self
                            }), !0)
                        }, e.prototype.emitAsPromise = function(t, n) {
                            var r = this;
                            return new e.Promise((function(e, i) {
                                r.emit(t, n, (function(t) {
                                    e(t)
                                })) || i(new Error("Listener not added for \"".concat(t, "\"")))
                            }))
                        }, e.prototype.on = function(e, t) {
                            if (this.isDestroyed) return !1;
                            var n = this,
                                r = this.origin,
                                o = t;
                            return e = this.namespaceEvent(e), !(0, i.subscriptionArgsInvalid)(e, o, r) && (this.hasAdditionalChecksForOnListeners && (o = function() {
                                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                                n.passesVerifyDomainCheck(this && this.origin) && n.hasMatchingTargetFrame(this && this.source) && t.apply(void 0, e)
                            }), this.listeners.push({
                                eventName: e,
                                handler: o,
                                originalHandler: t
                            }), c.subscribers[r] = c.subscribers[r] || {}, c.subscribers[r][e] = c.subscribers[r][e] || [], c.subscribers[r][e].push(o), !0)
                        }, e.prototype.off = function(e, t) {
                            var n = t;
                            if (this.isDestroyed) return !1;
                            if (this.verifyDomain)
                                for (var r = 0; r < this.listeners.length; r++) {
                                    var o = this.listeners[r];
                                    o.originalHandler === t && (n = o.handler)
                                }
                            e = this.namespaceEvent(e);
                            var a = this.origin;
                            if ((0, i.subscriptionArgsInvalid)(e, n, a)) return !1;
                            var s = c.subscribers[a] && c.subscribers[a][e];
                            if (!s) return !1;
                            for (r = 0; r < s.length; r++)
                                if (s[r] === n) return s.splice(r, 1), !0;
                            return !1
                        }, e.prototype.teardown = function() {
                            if (!this.isDestroyed) {
                                this.isDestroyed = !0;
                                for (var e = 0; e < this.listeners.length; e++) {
                                    var t = this.listeners[e];
                                    this.off(t.eventName, t.handler)
                                }
                                this.listeners.length = 0
                            }
                        }, e.prototype.passesVerifyDomainCheck = function(e) {
                            return !this.verifyDomain || this.checkOrigin(e)
                        }, e.prototype.targetFramesAsWindows = function() {
                            return this.limitBroadcastToFramesArray ? this.targetFrames.map((function(e) {
                                return e instanceof HTMLIFrameElement ? e.contentWindow : e
                            })).filter((function(e) {
                                return e
                            })) : []
                        }, e.prototype.hasMatchingTargetFrame = function(e) {
                            if (!this.limitBroadcastToFramesArray) return !0;
                            var t = this.targetFramesAsWindows().find((function(t) {
                                return t === e
                            }));
                            return Boolean(t)
                        }, e.prototype.checkOrigin = function(e) {
                            var t, n = document.createElement("a");
                            return n.href = location.href, t = "https:" === n.protocol ? n.host.replace(/:443$/, "") : "http:" === n.protocol ? n.host.replace(/:80$/, "") : n.host, n.protocol + "//" + t === e || (!this.verifyDomain || this.verifyDomain(e))
                        }, e.prototype.namespaceEvent = function(e) {
                            return this.channel ? "".concat(this.channel, ":").concat(e) : e
                        }, e.Promise = d, e
                    })();
                n.Framebus = l
            }, {
                "./lib/broadcast": 54,
                "./lib/constants": 55,
                "./lib/is-not-string": 58,
                "./lib/package-payload": 60,
                "./lib/send-message": 61,
                "./lib/subscription-args-invalid": 63
            }],
            51: [function(e, t, n) {
                var r = e("./lib/attach"),
                    i = e("./framebus");
                (0, r.attach)(), t.exports = i.Framebus
            }, {
                "./framebus": 50,
                "./lib/attach": 52
            }],
            52: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.detach = n.attach = void 0;
                var r = e("./message"),
                    i = !1;
                n.attach = function() {
                    i || (i = !0, window.addEventListener("message", r.onmessage, !1))
                }, n.detach = function() {
                    i = !1, window.removeEventListener("message", r.onmessage, !1)
                }
            }, {
                "./message": 59
            }],
            53: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.broadcastToChildWindows = void 0;
                var r = e("./broadcast"),
                    i = e("./constants");
                n.broadcastToChildWindows = function(e, t, n) {
                    for (var o = i.childWindows.length - 1; o >= 0; o--) {
                        var a = i.childWindows[o];
                        a.closed ? i.childWindows.splice(o, 1) : n !== a && (0, r.broadcast)(e, {
                            origin: t,
                            frame: a.top
                        })
                    }
                }
            }, {
                "./broadcast": 54,
                "./constants": 55
            }],
            54: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.broadcast = void 0;
                var r = e("./has-opener");
                n.broadcast = function e(t, n) {
                    var i, o = 0,
                        a = n.origin,
                        s = n.frame;
                    try {
                        for (s.postMessage(t, a), (0, r.hasOpener)(s) && s.opener.top !== window.top && e(t, {
                                origin: a,
                                frame: s.opener.top
                            }); i = s.frames[o];) e(t, {
                            origin: a,
                            frame: i
                        }), o++
                    } catch (e) {}
                }
            }, {
                "./has-opener": 57
            }],
            55: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.subscribers = n.childWindows = n.prefix = void 0, n.prefix = "/*framebus*/", n.childWindows = [], n.subscribers = {}
            }, {}],
            56: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.dispatch = void 0;
                var r = e("./constants");
                n.dispatch = function(e, t, n, i, o) {
                    if (r.subscribers[e] && r.subscribers[e][t]) {
                        var a = [];
                        n && a.push(n), i && a.push(i);
                        for (var s = 0; s < r.subscribers[e][t].length; s++) r.subscribers[e][t][s].apply(o, a)
                    }
                }
            }, {
                "./constants": 55
            }],
            57: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.hasOpener = void 0, n.hasOpener = function(e) {
                    return e.top === e && (null != e.opener && (e.opener !== e && !0 !== e.opener.closed))
                }
            }, {}],
            58: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.isntString = void 0, n.isntString = function(e) {
                    return "string" != typeof e
                }
            }, {}],
            59: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.onmessage = void 0;
                var r = e("./is-not-string"),
                    i = e("./unpack-payload"),
                    o = e("./dispatch"),
                    a = e("./broadcast-to-child-windows");
                n.onmessage = function(e) {
                    if (!(0, r.isntString)(e.data)) {
                        var t = (0, i.unpackPayload)(e);
                        if (t) {
                            var n = t.eventData,
                                s = t.reply;
                            (0, o.dispatch)("*", t.event, n, s, e), (0, o.dispatch)(e.origin, t.event, n, s, e), (0, a.broadcastToChildWindows)(e.data, t.origin, e.source)
                        }
                    }
                }
            }, {
                "./broadcast-to-child-windows": 53,
                "./dispatch": 56,
                "./is-not-string": 58,
                "./unpack-payload": 64
            }],
            60: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.packagePayload = void 0;
                var r = e("./subscribe-replier"),
                    i = e("./constants");
                n.packagePayload = function(e, t, n, o) {
                    var a, s = {
                        event: e,
                        origin: t
                    };
                    "function" == typeof o && (s.reply = (0, r.subscribeReplier)(o, t)), s.eventData = n;
                    try {
                        a = i.prefix + JSON.stringify(s)
                    } catch (e) {
                        throw new Error("Could not stringify event: ".concat(e.message))
                    }
                    return a
                }
            }, {
                "./constants": 55,
                "./subscribe-replier": 62
            }],
            61: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.sendMessage = void 0, n.sendMessage = function(e, t, n) {
                    try {
                        e.postMessage(t, n)
                    } catch (e) {}
                }
            }, {}],
            62: [function(e, t, n) {
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.subscribeReplier = void 0;
                var i = e("../framebus"),
                    o = r(e("@braintree/uuid"));
                n.subscribeReplier = function(e, t) {
                    var n = (0, o.default)();
                    return i.Framebus.target({
                        origin: t
                    }).on(n, (function r(o, a) {
                        e(o, a), i.Framebus.target({
                            origin: t
                        }).off(n, r)
                    })), n
                }
            }, {
                "../framebus": 50,
                "@braintree/uuid": 38
            }],
            63: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.subscriptionArgsInvalid = void 0;
                var r = e("./is-not-string");
                n.subscriptionArgsInvalid = function(e, t, n) {
                    return !!(0, r.isntString)(e) || ("function" != typeof t || (0, r.isntString)(n))
                }
            }, {
                "./is-not-string": 58
            }],
            64: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.unpackPayload = void 0;
                var r = e("./constants"),
                    i = e("./package-payload");
                n.unpackPayload = function(e) {
                    var t;
                    if (e.data.slice(0, r.prefix.length) !== r.prefix) return !1;
                    try {
                        t = JSON.parse(e.data.slice(r.prefix.length))
                    } catch (e) {
                        return !1
                    }
                    if (t.reply) {
                        var n = e.origin,
                            o = e.source,
                            a = t.reply;
                        t.reply = function(e) {
                            if (o) {
                                var t = (0, i.packagePayload)(a, n, e);
                                t && o.postMessage(t, n)
                            }
                        }
                    }
                    return t
                }
            }, {
                "./constants": 55,
                "./package-payload": 60
            }],
            65: [function(e, t, n) {
                var r = setTimeout;

                function i(e) {
                    return Boolean(e && void 0 !== e.length)
                }

                function o() {}

                function a(e) {
                    if (!(this instanceof a)) throw new TypeError('Promises must be constructed via new');
                    if ('function' != typeof e) throw new TypeError('not a function');
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], p(e, this)
                }

                function s(e, t) {
                    for (; 3 === e._state;) e = e._value;
                    0 !== e._state ? (e._handled = !0, a._immediateFn((function() {
                        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                        if (null !== n) {
                            var r;
                            try {
                                r = n(e._value)
                            } catch (e) {
                                return void d(t.promise, e)
                            }
                            c(t.promise, r)
                        } else(1 === e._state ? c : d)(t.promise, e._value)
                    }))) : e._deferreds.push(t)
                }

                function c(e, t) {
                    try {
                        if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
                        if (t && ('object' == typeof t || 'function' == typeof t)) {
                            var n = t.then;
                            if (t instanceof a) return e._state = 3, e._value = t, void l(e);
                            if ('function' == typeof n) return void p((r = n, i = t, function() {
                                r.apply(i, arguments)
                            }), e)
                        }
                        e._state = 1, e._value = t, l(e)
                    } catch (t) {
                        d(e, t)
                    }
                    var r, i
                }

                function d(e, t) {
                    e._state = 2, e._value = t, l(e)
                }

                function l(e) {
                    2 === e._state && 0 === e._deferreds.length && a._immediateFn((function() {
                        e._handled || a._unhandledRejectionFn(e._value)
                    }));
                    for (var t = 0, n = e._deferreds.length; t < n; t++) s(e, e._deferreds[t]);
                    e._deferreds = null
                }

                function u(e, t, n) {
                    this.onFulfilled = 'function' == typeof e ? e : null, this.onRejected = 'function' == typeof t ? t : null, this.promise = n
                }

                function p(e, t) {
                    var n = !1;
                    try {
                        e((function(e) {
                            n || (n = !0, c(t, e))
                        }), (function(e) {
                            n || (n = !0, d(t, e))
                        }))
                    } catch (e) {
                        if (n) return;
                        n = !0, d(t, e)
                    }
                }
                a.prototype.catch = function(e) {
                    return this.then(null, e)
                }, a.prototype.then = function(e, t) {
                    var n = new this.constructor(o);
                    return s(this, new u(e, t, n)), n
                }, a.prototype.finally = function(e) {
                    var t = this.constructor;
                    return this.then((function(n) {
                        return t.resolve(e()).then((function() {
                            return n
                        }))
                    }), (function(n) {
                        return t.resolve(e()).then((function() {
                            return t.reject(n)
                        }))
                    }))
                }, a.all = function(e) {
                    return new a((function(t, n) {
                        if (!i(e)) return n(new TypeError('Promise.all accepts an array'));
                        var r = Array.prototype.slice.call(e);
                        if (0 === r.length) return t([]);
                        var o = r.length;

                        function a(e, i) {
                            try {
                                if (i && ('object' == typeof i || 'function' == typeof i)) {
                                    var s = i.then;
                                    if ('function' == typeof s) return void s.call(i, (function(t) {
                                        a(e, t)
                                    }), n)
                                }
                                r[e] = i, 0 == --o && t(r)
                            } catch (e) {
                                n(e)
                            }
                        }
                        for (var s = 0; s < r.length; s++) a(s, r[s])
                    }))
                }, a.allSettled = function(e) {
                    return new this((function(t, n) {
                        if (!e || void 0 === e.length) return n(new TypeError(typeof e + ' ' + e + ' is not iterable(cannot read property Symbol(Symbol.iterator))'));
                        var r = Array.prototype.slice.call(e);
                        if (0 === r.length) return t([]);
                        var i = r.length;

                        function o(e, n) {
                            if (n && ('object' == typeof n || 'function' == typeof n)) {
                                var a = n.then;
                                if ('function' == typeof a) return void a.call(n, (function(t) {
                                    o(e, t)
                                }), (function(n) {
                                    r[e] = {
                                        status: 'rejected',
                                        reason: n
                                    }, 0 == --i && t(r)
                                }))
                            }
                            r[e] = {
                                status: 'fulfilled',
                                value: n
                            }, 0 == --i && t(r)
                        }
                        for (var a = 0; a < r.length; a++) o(a, r[a])
                    }))
                }, a.resolve = function(e) {
                    return e && 'object' == typeof e && e.constructor === a ? e : new a((function(t) {
                        t(e)
                    }))
                }, a.reject = function(e) {
                    return new a((function(t, n) {
                        n(e)
                    }))
                }, a.race = function(e) {
                    return new a((function(t, n) {
                        if (!i(e)) return n(new TypeError('Promise.race accepts an array'));
                        for (var r = 0, o = e.length; r < o; r++) a.resolve(e[r]).then(t, n)
                    }))
                }, a._immediateFn = 'function' == typeof setImmediate && function(e) {
                    setImmediate(e)
                } || function(e) {
                    r(e, 0)
                }, a._unhandledRejectionFn = function(e) {
                    'undefined' != typeof console && console && console.warn('Possible Unhandled Promise Rejection:', e)
                }, t.exports = a
            }, {}],
            66: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.isIos = n.isIE9 = n.isSamsungBrowser = n.isAndroidChrome = n.isKitKatWebview = void 0;
                var r = window.navigator && window.navigator.userAgent,
                    i = e("@braintree/browser-detection/is-android"),
                    o = e("@braintree/browser-detection/is-chrome-os"),
                    a = e("@braintree/browser-detection/is-chrome"),
                    s = e("@braintree/browser-detection/is-ios");
                n.isIos = s;
                var c = e("@braintree/browser-detection/is-ie9");
                n.isIE9 = c;
                var d = /Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;

                function l(e) {
                    return !a(e) && e.indexOf("Samsung") > -1
                }
                n.isKitKatWebview = function(e) {
                    return void 0 === e && (e = r), i(e) && d.test(e)
                }, n.isAndroidChrome = function(e) {
                    return void 0 === e && (e = r), (i(e) || o(e)) && a(e)
                }, n.isSamsungBrowser = function(e) {
                    return void 0 === e && (e = r), /SamsungBrowser/.test(e) || l(e)
                }
            }, {
                "@braintree/browser-detection/is-android": 21,
                "@braintree/browser-detection/is-chrome": 23,
                "@braintree/browser-detection/is-chrome-os": 22,
                "@braintree/browser-detection/is-ie9": 25,
                "@braintree/browser-detection/is-ios": 29
            }],
            67: [function(e, t, n) {
                var r = e("./lib/device");
                t.exports = function() {
                    return !(0, r.isSamsungBrowser)()
                }
            }, {
                "./lib/device": 66
            }],
            68: [function(e, t, n) {
                t.exports = e("./dist/supports-input-formatting")
            }, {
                "./dist/supports-input-formatting": 67
            }],
            69: [function(e, t, n) {
                var r = e("../lib/braintree-error"),
                    i = e("./errors"),
                    o = e("../lib/assign").assign,
                    a = e("../lib/methods"),
                    s = e("../lib/convert-methods-to-error"),
                    c = e("@braintree/wrap-promise");

                function d(e) {
                    this._client = e.client
                }
                d.prototype.getRewardsBalance = function(e) {
                    var t, n = e.nonce;
                    return n ? (delete(t = o({
                        _meta: {
                            source: "american-express"
                        },
                        paymentMethodNonce: n
                    }, e)).nonce, this._client.request({
                        method: "get",
                        endpoint: "payment_methods/amex_rewards_balance",
                        data: t
                    }).catch((function(e) {
                        return Promise.reject(new r({
                            type: i.AMEX_NETWORK_ERROR.type,
                            code: i.AMEX_NETWORK_ERROR.code,
                            message: "A network error occurred when getting the American Express rewards balance.",
                            details: {
                                originalError: e
                            }
                        }))
                    }))) : Promise.reject(new r({
                        type: i.AMEX_NONCE_REQUIRED.type,
                        code: i.AMEX_NONCE_REQUIRED.code,
                        message: "getRewardsBalance must be called with a nonce."
                    }))
                }, d.prototype.getExpressCheckoutProfile = function(e) {
                    return e.nonce ? this._client.request({
                        method: "get",
                        endpoint: "payment_methods/amex_express_checkout_cards/" + e.nonce,
                        data: {
                            _meta: {
                                source: "american-express"
                            },
                            paymentMethodNonce: e.nonce
                        }
                    }).catch((function(e) {
                        return Promise.reject(new r({
                            type: i.AMEX_NETWORK_ERROR.type,
                            code: i.AMEX_NETWORK_ERROR.code,
                            message: "A network error occurred when getting the American Express Checkout nonce profile.",
                            details: {
                                originalError: e
                            }
                        }))
                    })) : Promise.reject(new r({
                        type: i.AMEX_NONCE_REQUIRED.type,
                        code: i.AMEX_NONCE_REQUIRED.code,
                        message: "getExpressCheckoutProfile must be called with a nonce."
                    }))
                }, d.prototype.teardown = function() {
                    return s(this, a(d.prototype)), Promise.resolve()
                }, t.exports = c.wrapPrototype(d)
            }, {
                "../lib/assign": 118,
                "../lib/braintree-error": 121,
                "../lib/convert-methods-to-error": 124,
                "../lib/methods": 152,
                "./errors": 70,
                "@braintree/wrap-promise": 42
            }],
            70: [function(e, t, n) {
                var r = e("../lib/braintree-error");
                t.exports = {
                    AMEX_NONCE_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: "AMEX_NONCE_REQUIRED"
                    },
                    AMEX_NETWORK_ERROR: {
                        type: r.types.NETWORK,
                        code: "AMEX_NETWORK_ERROR"
                    }
                }
            }, {
                "../lib/braintree-error": 121
            }],
            71: [function(e, t, n) {
                var r = e("./american-express"),
                    i = e("../lib/basic-component-verification"),
                    o = e("../lib/create-deferred-client"),
                    a = e("../lib/create-assets-url"),
                    s = e("@braintree/wrap-promise");
                t.exports = {
                    create: s((function(e) {
                        var t = "American Express";
                        return i.verify({
                            name: t,
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            return o.create({
                                authorization: e.authorization,
                                client: e.client,
                                debug: e.debug,
                                assetsUrl: a.create(e.authorization),
                                name: t
                            })
                        })).then((function(t) {
                            return e.client = t, new r(e)
                        }))
                    })),
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/basic-component-verification": 119,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "./american-express": 69,
                "@braintree/wrap-promise": 42
            }],
            72: [function(e, t, n) {
                var r = e("../lib/braintree-error"),
                    i = e("../lib/analytics"),
                    o = e("./errors"),
                    a = e("../lib/methods"),
                    s = e("../lib/convert-methods-to-error"),
                    c = e("@braintree/wrap-promise");

                function d(e) {
                    this._instantiatedWithClient = Boolean(!e.useDeferredClient), this._client = e.client, this._createPromise = e.createPromise, this._client && this._setMerchantIdentifier()
                }
                d.prototype._waitForClient = function() {
                    return this._client ? Promise.resolve() : this._createPromise.then(function(e) {
                        this._client = e, this._setMerchantIdentifier()
                    }.bind(this))
                }, d.prototype._setMerchantIdentifier = function() {
                    var e = this._client.getConfiguration().gatewayConfiguration.applePayWeb;
                    e && Object.defineProperty(this, "merchantIdentifier", {
                        value: e.merchantIdentifier,
                        configurable: !1,
                        writable: !1
                    })
                }, d.prototype.createPaymentRequest = function(e) {
                    return this._instantiatedWithClient ? this._createPaymentRequestSynchronously(e) : this._waitForClient().then(function() {
                        return this._createPaymentRequestSynchronously(e)
                    }.bind(this))
                }, d.prototype._createPaymentRequestSynchronously = function(e) {
                    var t = this._client.getConfiguration().gatewayConfiguration.applePayWeb,
                        n = {
                            countryCode: t.countryCode,
                            currencyCode: t.currencyCode,
                            merchantCapabilities: t.merchantCapabilities || ["supports3DS"],
                            supportedNetworks: t.supportedNetworks.map((function(e) {
                                return "mastercard" === e ? "masterCard" : e
                            }))
                        };
                    return Object.assign({}, n, e)
                }, d.prototype.performValidation = function(e) {
                    var t = this;
                    return e && e.validationURL ? this._waitForClient().then((function() {
                        var n = {
                            validationUrl: e.validationURL,
                            domainName: e.domainName || window.location.hostname,
                            merchantIdentifier: e.merchantIdentifier || t.merchantIdentifier
                        };
                        return null != e.displayName && (n.displayName = e.displayName), t._client.request({
                            method: "post",
                            endpoint: "apple_pay_web/sessions",
                            data: {
                                _meta: {
                                    source: "apple-pay"
                                },
                                applePayWebSession: n
                            }
                        })
                    })).then((function(e) {
                        return i.sendEvent(t._client, "applepay.performValidation.succeeded"), Promise.resolve(e)
                    })).catch((function(e) {
                        return i.sendEvent(t._client, "applepay.performValidation.failed"), "CLIENT_REQUEST_ERROR" === e.code ? Promise.reject(new r({
                            type: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED.type,
                            code: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED.code,
                            message: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED.message,
                            details: {
                                originalError: e.details.originalError
                            }
                        })) : Promise.reject(new r({
                            type: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.type,
                            code: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.code,
                            message: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.message,
                            details: {
                                originalError: e
                            }
                        }))
                    })) : Promise.reject(new r(o.APPLE_PAY_VALIDATION_URL_REQUIRED))
                }, d.prototype.tokenize = function(e) {
                    var t = this;
                    return e.token ? this._waitForClient().then((function() {
                        return t._client.request({
                            method: "post",
                            endpoint: "payment_methods/apple_payment_tokens",
                            data: {
                                _meta: {
                                    source: "apple-pay"
                                },
                                applePaymentToken: Object.assign({}, e.token, {
                                    paymentData: btoa(JSON.stringify(e.token.paymentData))
                                })
                            }
                        })
                    })).then((function(e) {
                        return i.sendEvent(t._client, "applepay.tokenize.succeeded"), Promise.resolve(e.applePayCards[0])
                    })).catch((function(e) {
                        return i.sendEvent(t._client, "applepay.tokenize.failed"), Promise.reject(new r({
                            type: o.APPLE_PAY_TOKENIZATION.type,
                            code: o.APPLE_PAY_TOKENIZATION.code,
                            message: o.APPLE_PAY_TOKENIZATION.message,
                            details: {
                                originalError: e
                            }
                        }))
                    })) : Promise.reject(new r(o.APPLE_PAY_PAYMENT_TOKEN_REQUIRED))
                }, d.prototype.teardown = function() {
                    return s(this, a(d.prototype)), Promise.resolve()
                }, t.exports = c.wrapPrototype(d)
            }, {
                "../lib/analytics": 116,
                "../lib/braintree-error": 121,
                "../lib/convert-methods-to-error": 124,
                "../lib/methods": 152,
                "./errors": 73,
                "@braintree/wrap-promise": 42
            }],
            73: [function(e, t, n) {
                var r = e("../lib/braintree-error");
                t.exports = {
                    APPLE_PAY_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: "APPLE_PAY_NOT_ENABLED",
                        message: "Apple Pay is not enabled for this merchant."
                    },
                    APPLE_PAY_VALIDATION_URL_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: "APPLE_PAY_VALIDATION_URL_REQUIRED",
                        message: "performValidation must be called with a validationURL."
                    },
                    APPLE_PAY_MERCHANT_VALIDATION_NETWORK: {
                        type: r.types.NETWORK,
                        code: "APPLE_PAY_MERCHANT_VALIDATION_NETWORK",
                        message: "A network error occurred when validating the Apple Pay merchant."
                    },
                    APPLE_PAY_MERCHANT_VALIDATION_FAILED: {
                        type: r.types.MERCHANT,
                        code: "APPLE_PAY_MERCHANT_VALIDATION_FAILED",
                        message: "Make sure you have registered your domain name in the Braintree Control Panel."
                    },
                    APPLE_PAY_PAYMENT_TOKEN_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: "APPLE_PAY_PAYMENT_TOKEN_REQUIRED",
                        message: "tokenize must be called with a payment token."
                    },
                    APPLE_PAY_TOKENIZATION: {
                        type: r.types.NETWORK,
                        code: "APPLE_PAY_TOKENIZATION",
                        message: "A network error occurred when processing the Apple Pay payment."
                    }
                }
            }, {
                "../lib/braintree-error": 121
            }],
            74: [function(e, t, n) {
                var r = e("./apple-pay"),
                    i = e("../lib/analytics"),
                    o = e("../lib/braintree-error"),
                    a = e("../lib/basic-component-verification"),
                    s = e("../lib/create-assets-url"),
                    c = e("../lib/create-deferred-client"),
                    d = e("./errors"),
                    l = e("@braintree/wrap-promise");
                t.exports = {
                    create: l((function(e) {
                        var t = "Apple Pay";
                        return a.verify({
                            name: t,
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            var n, a = c.create({
                                authorization: e.authorization,
                                client: e.client,
                                debug: e.debug,
                                assetsUrl: s.create(e.authorization),
                                name: t
                            }).then((function(e) {
                                return e.getConfiguration().gatewayConfiguration.applePayWeb ? (i.sendEvent(e, "applepay.initialized"), e) : Promise.reject(new o(d.APPLE_PAY_NOT_ENABLED))
                            }));
                            return e.createPromise = a, n = new r(e), e.useDeferredClient ? n : a.then((function(e) {
                                return n._client = e, n
                            }))
                        }))
                    })),
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/analytics": 116,
                "../lib/basic-component-verification": 119,
                "../lib/braintree-error": 121,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "./apple-pay": 72,
                "./errors": 73,
                "@braintree/wrap-promise": 42
            }],
            75: [function(e, t, n) {
                var r = e("./constants").BRAINTREE_VERSION,
                    i = e("./request/graphql"),
                    o = e("./request"),
                    a = e("../lib/is-verified-domain"),
                    s = e("../lib/braintree-error"),
                    c = e("../lib/convert-to-braintree-error"),
                    d = e("./get-configuration").getConfiguration,
                    l = e("../lib/create-authorization-data"),
                    u = e("../lib/add-metadata"),
                    p = e("@braintree/wrap-promise"),
                    _ = e("../lib/once"),
                    E = e("../lib/deferred"),
                    h = e("../lib/assign").assign,
                    m = e("../lib/analytics"),
                    f = e("./errors"),
                    y = e("../lib/constants").VERSION,
                    A = e("../lib/constants").GRAPHQL_URLS,
                    T = e("../lib/methods"),
                    I = e("../lib/convert-methods-to-error"),
                    N = e("../lib/assets"),
                    O = e("../lib/constants").FRAUDNET_FNCLS,
                    g = e("../lib/constants").FRAUDNET_SOURCE,
                    P = e("../lib/constants").FRAUDNET_URL,
                    b = {};

                function v(e) {
                    var t, n;
                    if (e = e || {}, t = JSON.stringify(e), !(n = e.gatewayConfiguration)) throw new s(f.CLIENT_MISSING_GATEWAY_CONFIGURATION);
                    if (["assetsUrl", "clientApiUrl", "configUrl"].forEach((function(e) {
                            if (e in n && !a(n[e])) throw new s({
                                type: f.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
                                code: f.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
                                message: e + " property is on an invalid domain."
                            })
                        })), this.getConfiguration = function() {
                            return JSON.parse(t)
                        }, this._request = o, this._configuration = this.getConfiguration(), this._clientApiBaseUrl = n.clientApiUrl + "/v1/", n.graphQL) {
                        if (!a(n.graphQL.url)) throw new s({
                            type: f.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
                            code: f.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
                            message: "graphQL.url property is on an invalid domain."
                        });
                        this._graphQL = new i({
                            graphQL: n.graphQL
                        })
                    }
                }

                function C(e, t) {
                    var n;
                    if (-1 === e ? n = new s(f.CLIENT_REQUEST_TIMEOUT) : 401 === e ? n = new s(f.CLIENT_AUTHORIZATION_INVALID) : 403 === e ? n = new s(f.CLIENT_AUTHORIZATION_INSUFFICIENT) : 429 === e ? n = new s(f.CLIENT_RATE_LIMITED) : e >= 500 ? n = new s(f.CLIENT_GATEWAY_NETWORK) : (e < 200 || e >= 400) && (n = c(t, {
                            type: f.CLIENT_REQUEST_ERROR.type,
                            code: f.CLIENT_REQUEST_ERROR.code,
                            message: f.CLIENT_REQUEST_ERROR.message
                        })), n) return n.details = n.details || {}, n.details.httpStatus = e, n
                }
                v.initialize = function(e) {
                    var t, n, r = b[e.authorization];
                    if (r) return m.sendEvent(r, "custom.client.load.cached"), r;
                    try {
                        n = l(e.authorization)
                    } catch (e) {
                        return Promise.reject(new s(f.CLIENT_INVALID_AUTHORIZATION))
                    }
                    return r = d(n).then((function(n) {
                        return e.debug && (n.isDebug = !0), n.authorization = e.authorization, t = new v(n)
                    })), b[e.authorization] = r, m.sendEvent(r, "custom.client.load.initialized"), r.then((function(e) {
                        return m.sendEvent(t, "custom.client.load.succeeded"), e
                    })).catch((function(t) {
                        return delete b[e.authorization], Promise.reject(t)
                    }))
                }, v.clearCache = function() {
                    b = {}
                }, v.prototype._findOrCreateFraudnetJSON = function(e) {
                    var t, n, r, i, o = document.querySelector('script[fncls="' + O + '"]');
                    o || ((o = document.body.appendChild(document.createElement("script"))).type = "application/json", o.setAttribute("fncls", O)), t = this.getConfiguration(), n = {
                        rda_tenant: "bt_card",
                        mid: t.gatewayConfiguration.merchantId
                    }, (r = t.authorizationFingerprint) && r.split("&").forEach((function(e) {
                        var t = e.split("=");
                        "customer_id" === t[0] && t.length > 1 && (n.cid = t[1])
                    })), i = {
                        f: e.substr(0, 32),
                        fp: n,
                        bu: !1,
                        s: g
                    }, o.text = JSON.stringify(i)
                }, v.prototype.request = function(e, t) {
                    var n = this,
                        i = new Promise((function(t, i) {
                            var o, a, d, l, p, _ = Boolean("payment_methods/credit_cards" === e.endpoint && n.getConfiguration().gatewayConfiguration.creditCards.collectDeviceData);
                            if ("graphQLApi" !== e.api && (e.method ? e.endpoint || (o = "options.endpoint") : o = "options.method"), o) throw new s({
                                type: f.CLIENT_OPTION_REQUIRED.type,
                                code: f.CLIENT_OPTION_REQUIRED.code,
                                message: o + " is required when making a request."
                            });
                            if (a = "api" in e ? e.api : "clientApi", l = {
                                    method: e.method,
                                    graphQL: n._graphQL,
                                    timeout: e.timeout,
                                    metadata: n._configuration.analyticsMetadata
                                }, "clientApi" === a) d = n._clientApiBaseUrl, l.data = u(n._configuration, e.data);
                            else {
                                if ("graphQLApi" !== a) throw new s({
                                    type: f.CLIENT_OPTION_INVALID.type,
                                    code: f.CLIENT_OPTION_INVALID.code,
                                    message: "options.api is invalid."
                                });
                                d = A[n._configuration.gatewayConfiguration.environment], e.endpoint = "", l.method = "post", l.data = h({
                                    clientSdkMetadata: {
                                        platform: n._configuration.analyticsMetadata.platform,
                                        source: n._configuration.analyticsMetadata.source,
                                        integration: n._configuration.analyticsMetadata.integration,
                                        sessionId: n._configuration.analyticsMetadata.sessionId,
                                        version: y
                                    }
                                }, e.data), l.headers = (p = n._configuration, {
                                    Authorization: "Bearer " + (p.authorizationFingerprint || p.authorization),
                                    "Braintree-Version": r
                                })
                            }
                            l.url = d + e.endpoint, l.sendAnalyticsEvent = function(e) {
                                m.sendEvent(n, e)
                            }, n._request(l, (function(e, r, o) {
                                var s, d;
                                (d = C(o, e)) ? i(d): "graphQLApi" === a && r.errors ? i(c(r.errors, {
                                    type: f.CLIENT_GRAPHQL_REQUEST_ERROR.type,
                                    code: f.CLIENT_GRAPHQL_REQUEST_ERROR.code,
                                    message: f.CLIENT_GRAPHQL_REQUEST_ERROR.message
                                })) : (s = h({
                                    _httpStatus: o
                                }, r), _ && s.creditCards && s.creditCards.length > 0 && (n._findOrCreateFraudnetJSON(s.creditCards[0].nonce), N.loadScript({
                                    src: P,
                                    forceScriptReload: !0
                                })), t(s))
                            }))
                        }));
                    return "function" == typeof t ? (t = _(E(t)), void i.then((function(e) {
                        t(null, e, e._httpStatus)
                    })).catch((function(e) {
                        var n = e && e.details && e.details.httpStatus;
                        t(e, null, n)
                    }))) : i
                }, v.prototype.toJSON = function() {
                    return this.getConfiguration()
                }, v.prototype.getVersion = function() {
                    return y
                }, v.prototype.teardown = p((function() {
                    return delete b[this.getConfiguration().authorization], I(this, T(v.prototype)), Promise.resolve()
                })), t.exports = v
            }, {
                "../lib/add-metadata": 115,
                "../lib/analytics": 116,
                "../lib/assets": 117,
                "../lib/assign": 118,
                "../lib/braintree-error": 121,
                "../lib/constants": 123,
                "../lib/convert-methods-to-error": 124,
                "../lib/convert-to-braintree-error": 125,
                "../lib/create-authorization-data": 127,
                "../lib/deferred": 129,
                "../lib/is-verified-domain": 150,
                "../lib/methods": 152,
                "../lib/once": 153,
                "./constants": 76,
                "./errors": 77,
                "./get-configuration": 78,
                "./request": 89,
                "./request/graphql": 87,
                "@braintree/wrap-promise": 42
            }],
            76: [function(e, t, n) {
                t.exports = {
                    BRAINTREE_VERSION: "2018-05-10"
                }
            }, {}],
            77: [function(e, t, n) {
                var r = e("../lib/braintree-error");
                t.exports = {
                    CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN: {
                        type: r.types.MERCHANT,
                        code: "CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN"
                    },
                    CLIENT_OPTION_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: "CLIENT_OPTION_REQUIRED"
                    },
                    CLIENT_OPTION_INVALID: {
                        type: r.types.MERCHANT,
                        code: "CLIENT_OPTION_INVALID"
                    },
                    CLIENT_MISSING_GATEWAY_CONFIGURATION: {
                        type: r.types.INTERNAL,
                        code: "CLIENT_MISSING_GATEWAY_CONFIGURATION",
                        message: "Missing gatewayConfiguration."
                    },
                    CLIENT_INVALID_AUTHORIZATION: {
                        type: r.types.MERCHANT,
                        code: "CLIENT_INVALID_AUTHORIZATION",
                        message: "Authorization is invalid. Make sure your client token or tokenization key is valid."
                    },
                    CLIENT_GATEWAY_NETWORK: {
                        type: r.types.NETWORK,
                        code: "CLIENT_GATEWAY_NETWORK",
                        message: "Cannot contact the gateway at this time."
                    },
                    CLIENT_REQUEST_TIMEOUT: {
                        type: r.types.NETWORK,
                        code: "CLIENT_REQUEST_TIMEOUT",
                        message: "Request timed out waiting for a reply."
                    },
                    CLIENT_REQUEST_ERROR: {
                        type: r.types.NETWORK,
                        code: "CLIENT_REQUEST_ERROR",
                        message: "There was a problem with your request."
                    },
                    CLIENT_GRAPHQL_REQUEST_ERROR: {
                        type: r.types.NETWORK,
                        code: "CLIENT_GRAPHQL_REQUEST_ERROR",
                        message: "There was a problem with your request."
                    },
                    CLIENT_RATE_LIMITED: {
                        type: r.types.MERCHANT,
                        code: "CLIENT_RATE_LIMITED",
                        message: "You are being rate-limited; please try again in a few minutes."
                    },
                    CLIENT_AUTHORIZATION_INSUFFICIENT: {
                        type: r.types.MERCHANT,
                        code: "CLIENT_AUTHORIZATION_INSUFFICIENT",
                        message: "The authorization used has insufficient privileges."
                    },
                    CLIENT_AUTHORIZATION_INVALID: {
                        type: r.types.MERCHANT,
                        code: "CLIENT_AUTHORIZATION_INVALID",
                        message: "Either the client token has expired and a new one should be generated or the tokenization key has been deactivated or deleted."
                    }
                }
            }, {
                "../lib/braintree-error": 121
            }],
            78: [function(e, t, n) {
                var r = e("../lib/braintree-error"),
                    i = e("@braintree/wrap-promise"),
                    o = e("./request"),
                    a = e("@braintree/uuid"),
                    s = e("../lib/constants"),
                    c = e("./errors"),
                    d = e("./request/graphql"),
                    l = e("../lib/constants").GRAPHQL_URLS,
                    u = e("../lib/is-date-string-before-or-on"),
                    p = e("./constants").BRAINTREE_VERSION;
                t.exports = {
                    getConfiguration: i((function(e) {
                        return new Promise((function(t, n) {
                            var i, _, E, h, m = a(),
                                f = {
                                    merchantAppId: window.location.host,
                                    platform: s.PLATFORM,
                                    sdkVersion: s.VERSION,
                                    source: s.SOURCE,
                                    integration: s.INTEGRATION,
                                    integrationType: s.INTEGRATION,
                                    sessionId: m
                                };
                            _ = e.attrs, E = e.configUrl, _._meta = f, _.braintreeLibraryVersion = s.BRAINTREE_LIBRARY_VERSION, _.configVersion = "3", h = {
                                url: E,
                                method: "GET",
                                data: _
                            }, _.authorizationFingerprint && e.graphQL ? (u(e.graphQL.date, p) && (h.graphQL = new d({
                                graphQL: {
                                    url: e.graphQL.url,
                                    features: ["configuration"]
                                }
                            })), h.metadata = f) : _.tokenizationKey && (h.graphQL = new d({
                                graphQL: {
                                    url: l[e.environment],
                                    features: ["configuration"]
                                }
                            }), h.metadata = f), o(h, (function(e, o, a) {
                                var s;
                                if (e) return s = 403 === a ? c.CLIENT_AUTHORIZATION_INSUFFICIENT : 401 === a ? c.CLIENT_AUTHORIZATION_INVALID : c.CLIENT_GATEWAY_NETWORK, void n(new r({
                                    type: s.type,
                                    code: s.code,
                                    message: s.message,
                                    details: {
                                        originalError: e
                                    }
                                }));
                                i = {
                                    authorizationType: _.tokenizationKey ? "TOKENIZATION_KEY" : "CLIENT_TOKEN",
                                    authorizationFingerprint: _.authorizationFingerprint,
                                    analyticsMetadata: f,
                                    gatewayConfiguration: o
                                }, t(i)
                            }))
                        }))
                    }))
                }
            }, {
                "../lib/braintree-error": 121,
                "../lib/constants": 123,
                "../lib/is-date-string-before-or-on": 148,
                "./constants": 76,
                "./errors": 77,
                "./request": 89,
                "./request/graphql": 87,
                "@braintree/uuid": 38,
                "@braintree/wrap-promise": 42
            }],
            79: [function(e, t, n) {
                var r = e("../lib/braintree-error"),
                    i = e("./client"),
                    o = e("@braintree/wrap-promise"),
                    a = e("../lib/errors");
                t.exports = {
                    create: o((function(e) {
                        return e.authorization ? i.initialize(e) : Promise.reject(new r({
                            type: a.INSTANTIATION_OPTION_REQUIRED.type,
                            code: a.INSTANTIATION_OPTION_REQUIRED.code,
                            message: "options.authorization is required when instantiating a client."
                        }))
                    })),
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/braintree-error": 121,
                "../lib/errors": 132,
                "./client": 75,
                "@braintree/wrap-promise": 42
            }],
            80: [function(e, t, n) {
                var r = e("../../lib/querystring"),
                    i = e("../../lib/assign").assign,
                    o = e("./prep-body"),
                    a = e("./parse-body"),
                    s = e("./xhr"),
                    c = s.isAvailable,
                    d = e("./graphql/request"),
                    l = e("./default-request");

                function u(e) {
                    return !e || 408 === e
                }

                function p(e) {
                    var t = !e.data && e.errors && e.errors[0] && e.errors[0].extensions && e.errors[0].extensions.errorClass;
                    return "UNKNOWN" === t || "INTERNAL" === t
                }

                function _(e, t, n) {
                    var E, h, m, f, y, A, T, I = e.url,
                        N = e.graphQL,
                        O = e.timeout,
                        g = s.getRequestObject(),
                        P = n,
                        b = Boolean(N && N.isGraphQLRequest(I, e.data));
                    e.headers = i({
                        "Content-Type": "application/json"
                    }, e.headers), I = (m = b ? new d(e) : new l(e)).getUrl(), f = m.getBody(), y = m.getMethod(), A = m.getHeaders(), "GET" === y && (I = r.queryify(I, f), f = null), c ? g.onreadystatechange = function() {
                        if (4 === g.readyState) {
                            if (0 === g.status && b) return delete e.graphQL, void _(e, t, n);
                            if (T = a(g.responseText), h = m.adaptResponseBody(T), (E = m.determineStatus(g.status, T)) >= 400 || E < 200) {
                                if (b && p(T)) return delete e.graphQL, void _(e, t, n);
                                if (t < 1 && u(E)) return t++, void _(e, t, n);
                                P(h || "error", null, E || 500)
                            } else P(null, h, E)
                        }
                    } : (e.headers && (I = r.queryify(I, A)), g.onload = function() {
                        P(null, a(g.responseText), g.status)
                    }, g.onerror = function() {
                        P("error", null, 500)
                    }, g.onprogress = function() {}, g.ontimeout = function() {
                        P("timeout", null, -1)
                    });
                    try {
                        g.open(y, I, !0)
                    } catch (r) {
                        if (!b) throw r;
                        return delete e.graphQL, void _(e, t, n)
                    }
                    g.timeout = O, c && Object.keys(A).forEach((function(e) {
                        g.setRequestHeader(e, A[e])
                    }));
                    try {
                        g.send(o(y, f))
                    } catch (e) {}
                }
                t.exports = {
                    request: function(e, t) {
                        _(e, 0, t)
                    }
                }
            }, {
                "../../lib/assign": 118,
                "../../lib/querystring": 154,
                "./default-request": 81,
                "./graphql/request": 88,
                "./parse-body": 90,
                "./prep-body": 91,
                "./xhr": 92
            }],
            81: [function(e, t, n) {
                function r(e) {
                    this._url = e.url, this._data = e.data, this._method = e.method, this._headers = e.headers
                }
                r.prototype.getUrl = function() {
                    return this._url
                }, r.prototype.getBody = function() {
                    return this._data
                }, r.prototype.getMethod = function() {
                    return this._method
                }, r.prototype.getHeaders = function() {
                    return this._headers
                }, r.prototype.adaptResponseBody = function(e) {
                    return e
                }, r.prototype.determineStatus = function(e) {
                    return e
                }, t.exports = r
            }, {}],
            82: [function(e, t, n) {
                var r = e("./error"),
                    i = e("../../../../lib/assign").assign,
                    o = {
                        AMERICAN_EXPRESS: "American Express",
                        DISCOVER: "Discover",
                        INTERNATIONAL_MAESTRO: "Maestro",
                        JCB: "JCB",
                        MASTERCARD: "MasterCard",
                        SOLO: "Solo",
                        UK_MAESTRO: "UK Maestro",
                        UNION_PAY: "UnionPay",
                        VISA: "Visa",
                        ELO: "Elo",
                        HIPER: "Hiper",
                        HIPERCARD: "Hipercard"
                    },
                    a = {
                        VISA: "visa",
                        MASTERCARD: "mastercard",
                        DISCOVER: "discover",
                        AMERICAN_EXPRESS: "amex",
                        INTERNATIONAL_MAESTRO: "maestro",
                        ELO: "elo"
                    },
                    s = {
                        VISA: "Visa",
                        MASTERCARD: "MasterCard",
                        DISCOVER: "Discover",
                        AMERICAN_EXPRESS: "American Express"
                    },
                    c = {
                        VISA: "visa",
                        MASTERCARD: "mastercard",
                        DISCOVER: "discover",
                        AMERICAN_EXPRESS: "amex",
                        INTERNATIONAL_MAESTRO: "maestro",
                        ELO: "elo"
                    },
                    d = {
                        VISA: "visa",
                        MASTERCARD: "master",
                        DISCOVER: "discover",
                        AMERICAN_EXPRESS: "amex",
                        DINERS: "diners",
                        INTERNATIONAL_MAESTRO: "maestro",
                        JCB: "jcb"
                    };

                function l(e, t) {
                    var n, r = e.data.clientConfiguration;
                    return n = {
                        environment: r.environment.toLowerCase(),
                        clientApiUrl: r.clientApiUrl,
                        assetsUrl: r.assetsUrl,
                        analytics: {
                            url: r.analyticsUrl
                        },
                        merchantId: r.merchantId,
                        venmo: "off"
                    }, r.supportedFeatures && (n.graphQL = {
                        url: t._graphQL._config.url,
                        features: r.supportedFeatures.map((function(e) {
                            return e.toLowerCase()
                        }))
                    }), r.braintreeApi && (n.braintreeApi = r.braintreeApi), r.applePayWeb && (n.applePayWeb = r.applePayWeb, n.applePayWeb.supportedNetworks = u(r.applePayWeb.supportedCardBrands, a), delete n.applePayWeb.supportedCardBrands), r.ideal && (n.ideal = r.ideal), r.kount && (n.kount = {
                        kountMerchantId: r.kount.merchantId
                    }), r.creditCard ? (n.challenges = r.creditCard.challenges.map((function(e) {
                        return e.toLowerCase()
                    })), n.creditCards = {
                        supportedCardTypes: u(r.creditCard.supportedCardBrands, o)
                    }, n.threeDSecureEnabled = r.creditCard.threeDSecureEnabled, n.threeDSecure = r.creditCard.threeDSecure) : (n.challenges = [], n.creditCards = {
                        supportedCardTypes: []
                    }, n.threeDSecureEnabled = !1), r.googlePay && (n.androidPay = {
                        displayName: r.googlePay.displayName,
                        enabled: !0,
                        environment: r.googlePay.environment.toLowerCase(),
                        googleAuthorizationFingerprint: r.googlePay.googleAuthorization,
                        paypalClientId: r.googlePay.paypalClientId,
                        supportedNetworks: u(r.googlePay.supportedCardBrands, c)
                    }), r.venmo && (n.payWithVenmo = {
                        merchantId: r.venmo.merchantId,
                        accessToken: r.venmo.accessToken,
                        environment: r.venmo.environment.toLowerCase()
                    }), r.paypal ? (n.paypalEnabled = !0, n.paypal = i({}, r.paypal), n.paypal.currencyIsoCode = n.paypal.currencyCode, n.paypal.environment = n.paypal.environment.toLowerCase(), delete n.paypal.currencyCode) : n.paypalEnabled = !1, r.unionPay && (n.unionPay = {
                        enabled: !0,
                        merchantAccountId: r.unionPay.merchantAccountId
                    }), r.visaCheckout && (n.visaCheckout = {
                        apikey: r.visaCheckout.apiKey,
                        encryptionKey: r.visaCheckout.encryptionKey,
                        externalClientId: r.visaCheckout.externalClientId,
                        supportedCardTypes: u(r.visaCheckout.supportedCardBrands, s)
                    }), r.masterpass && (n.masterpass = {
                        merchantCheckoutId: r.masterpass.merchantCheckoutId,
                        supportedNetworks: u(r.masterpass.supportedCardBrands, d)
                    }), r.usBankAccount && (n.usBankAccount = {
                        routeId: r.usBankAccount.routeId,
                        plaid: {
                            publicKey: r.usBankAccount.plaidPublicKey
                        }
                    }), n
                }

                function u(e, t) {
                    return e.reduce((function(e, n) {
                        return t.hasOwnProperty(n) ? e.concat(t[n]) : e
                    }), [])
                }
                t.exports = function(e, t) {
                    return e.data && !e.errors ? l(e, t) : r(e)
                }
            }, {
                "../../../../lib/assign": 118,
                "./error": 84
            }],
            83: [function(e, t, n) {
                var r = e("./error"),
                    i = {
                        AMERICAN_EXPRESS: "American Express",
                        DINERS: "Discover",
                        DISCOVER: "Discover",
                        ELO: "Elo",
                        HIPER: "Hiper",
                        HIPERCARD: "Hipercard",
                        INTERNATIONAL_MAESTRO: "Maestro",
                        JCB: "JCB",
                        MASTERCARD: "MasterCard",
                        UK_MAESTRO: "Maestro",
                        UNION_PAY: "UnionPay",
                        VISA: "Visa"
                    },
                    o = {
                        YES: "Yes",
                        NO: "No",
                        UNKNOWN: "Unknown"
                    },
                    a = {
                        PSDTWO: "psd2"
                    };

                function s(e) {
                    var t, n, r = e.data.tokenizeCreditCard,
                        s = r.creditCard,
                        c = s.last4 ? s.last4.substr(2, 4) : "",
                        d = s.binData;
                    return d && (["commercial", "debit", "durbinRegulated", "healthcare", "payroll", "prepaid"].forEach((function(e) {
                        d[e] ? d[e] = o[d[e]] : d[e] = "Unknown"
                    })), ["issuingBank", "countryOfIssuance", "productId"].forEach((function(e) {
                        d[e] || (d[e] = "Unknown")
                    }))), t = {
                        creditCards: [{
                            binData: d,
                            consumed: !1,
                            description: c ? "ending in " + c : "",
                            nonce: r.token,
                            details: {
                                cardholderName: s.cardholderName,
                                expirationMonth: s.expirationMonth,
                                expirationYear: s.expirationYear,
                                bin: s.bin || "",
                                cardType: i[s.brandCode] || "Unknown",
                                lastFour: s.last4 || "",
                                lastTwo: c
                            },
                            type: "CreditCard",
                            threeDSecureInfo: null
                        }]
                    }, r.authenticationInsight && (n = r.authenticationInsight.customerAuthenticationRegulationEnvironment, t.creditCards[0].authenticationInsight = {
                        regulationEnvironment: a[n] || n.toLowerCase()
                    }), t
                }
                t.exports = function(e) {
                    return e.data && !e.errors ? s(e) : r(e)
                }
            }, {
                "./error": 84
            }],
            84: [function(e, t, n) {
                function r(e) {
                    return {
                        error: {
                            message: e.errors[0].message
                        },
                        fieldErrors: []
                    }
                }

                function i(e) {
                    var t, n, r = o(e.errors);
                    return 0 === r.length ? {
                        error: {
                            message: e.errors[0].message
                        }
                    } : {
                        error: {
                            message: (t = r, n = t[0].field, {
                                creditCard: "Credit card is invalid"
                            }[n])
                        },
                        fieldErrors: r
                    }
                }

                function o(e) {
                    var t = [];
                    return e.forEach((function(e) {
                        e.extensions && e.extensions.inputPath && a(e.extensions.inputPath.slice(1), e, t)
                    })), t
                }

                function a(e, t, n) {
                    var r, i = t.extensions.legacyCode,
                        o = e[0];
                    1 !== e.length ? (n.forEach((function(e) {
                        e.field === o && (r = e)
                    })), r || (r = {
                        field: o,
                        fieldErrors: []
                    }, n.push(r)), a(e.slice(1), t, r.fieldErrors)) : n.push({
                        code: i,
                        field: o,
                        message: t.message
                    })
                }
                t.exports = function(e) {
                    var t = e.errors && e.errors[0] && e.errors[0].extensions && e.errors[0].extensions.errorClass;
                    return "VALIDATION" === t ? i(e) : t ? r(e) : {
                        error: {
                            message: "There was a problem serving your request"
                        },
                        fieldErrors: []
                    }
                }
            }, {}],
            85: [function(e, t, n) {
                t.exports = function() {
                    return {
                        query: "query ClientConfiguration {   clientConfiguration {     analyticsUrl     environment     merchantId     assetsUrl     clientApiUrl     creditCard {       supportedCardBrands       challenges       threeDSecureEnabled       threeDSecure {         cardinalAuthenticationJWT       }     }     applePayWeb {       countryCode       currencyCode       merchantIdentifier       supportedCardBrands     }     googlePay {       displayName       supportedCardBrands       environment       googleAuthorization       paypalClientId     }     ideal {       routeId       assetsUrl     }     kount {       merchantId     }     masterpass {       merchantCheckoutId       supportedCardBrands     }     paypal {       displayName       clientId       privacyUrl       userAgreementUrl       assetsUrl       environment       environmentNoNetwork       unvettedMerchant       braintreeClientId       billingAgreementsEnabled       merchantAccountId       currencyCode       payeeEmail     }     unionPay {       merchantAccountId     }     usBankAccount {       routeId       plaidPublicKey     }     venmo {       merchantId       accessToken       environment     }     visaCheckout {       apiKey       externalClientId       supportedCardBrands     }     braintreeApi {       accessToken       url     }     supportedFeatures   } }",
                        operationName: "ClientConfiguration"
                    }
                }
            }, {}],
            86: [function(e, t, n) {
                var r = e("../../../../lib/assign").assign;

                function i(e, t) {
                    var n = e.creditCard,
                        r = n && n.billingAddress,
                        i = n && n.expirationDate,
                        a = n && (n.expirationMonth || i && i.split("/")[0].trim()),
                        s = n && (n.expirationYear || i && i.split("/")[1].trim()),
                        c = {
                            input: {
                                creditCard: {
                                    number: n && n.number,
                                    expirationMonth: a,
                                    expirationYear: s,
                                    cvv: n && n.cvv,
                                    cardholderName: n && n.cardholderName
                                },
                                options: {}
                            }
                        };
                    return t.hasAuthenticationInsight && (c.authenticationInsightInput = {
                        merchantAccountId: e.merchantAccountId
                    }), r && (c.input.creditCard.billingAddress = r), c.input = o(e, c.input), c
                }

                function o(e, t) {
                    var n;
                    return e.creditCard && e.creditCard.options && "boolean" == typeof e.creditCard.options.validate ? n = e.creditCard.options.validate : e.authorizationFingerprint && e.tokenizationKey || e.authorizationFingerprint ? n = !0 : e.tokenizationKey && (n = !1), "boolean" == typeof n && (t.options = r({
                        validate: n
                    }, t.options)), t
                }
                t.exports = function(e) {
                    var t, n, r, o = {
                        hasAuthenticationInsight: Boolean(e.authenticationInsight && e.merchantAccountId)
                    };
                    return {
                        query: (t = o, n = t.hasAuthenticationInsight, r = "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!", n && (r += ", $authenticationInsightInput: AuthenticationInsightInput!"), r += ") {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     } ", n && (r += "    authenticationInsight(input: $authenticationInsightInput) {      customerAuthenticationRegulationEnvironment    }"), r += "  } }"),
                        variables: i(e, o),
                        operationName: "TokenizeCreditCard"
                    }
                }
            }, {
                "../../../../lib/assign": 118
            }],
            87: [function(e, t, n) {
                var r = {
                        tokenize_credit_cards: "payment_methods/credit_cards",
                        configuration: "configuration"
                    },
                    i = ["creditCard.options.unionPayEnrollment"];

                function o(e) {
                    this._config = e.graphQL
                }

                function a(e) {
                    return i.some((function(t) {
                        return void 0 !== t.split(".").reduce((function(e, t) {
                            return e && e[t]
                        }), e)
                    }))
                }
                o.prototype.getGraphQLEndpoint = function() {
                    return this._config.url
                }, o.prototype.isGraphQLRequest = function(e, t) {
                    var n, i = this.getClientApiPath(e);
                    return !(!this._isGraphQLEnabled() || !i) && (n = this._config.features.some((function(e) {
                        return r[e] === i
                    })), !a(t) && n)
                }, o.prototype.getClientApiPath = function(e) {
                    var t, n = e.split("/client_api/v1/");
                    return n.length > 1 && (t = n[1].split("?")[0]), t
                }, o.prototype._isGraphQLEnabled = function() {
                    return Boolean(this._config)
                }, t.exports = o
            }, {}],
            88: [function(e, t, n) {
                var r = e("../../constants").BRAINTREE_VERSION,
                    i = e("../../../lib/assign").assign,
                    o = e("../../../lib/snake-case-to-camel-case"),
                    a = e("./generators/credit-card-tokenization"),
                    s = e("./adapters/credit-card-tokenization"),
                    c = e("./generators/configuration"),
                    d = e("./adapters/configuration"),
                    l = {
                        "payment_methods/credit_cards": a,
                        configuration: c
                    },
                    u = {
                        "payment_methods/credit_cards": s,
                        configuration: d
                    };

                function p(e) {
                    var t = e.graphQL.getClientApiPath(e.url);
                    this._graphQL = e.graphQL, this._data = e.data, this._method = e.method, this._headers = e.headers, this._clientSdkMetadata = {
                        source: e.metadata.source,
                        integration: e.metadata.integration,
                        sessionId: e.metadata.sessionId
                    }, this._sendAnalyticsEvent = e.sendAnalyticsEvent || Function.prototype, this._generator = l[t], this._adapter = u[t], this._sendAnalyticsEvent("graphql.init")
                }

                function _(e, t) {
                    return !e && t.errors[0].message
                }

                function E(e) {
                    var t = {};
                    return Object.keys(e).forEach((function(n) {
                        var r = o(n);
                        "object" == typeof e[n] ? t[r] = E(e[n]) : "number" == typeof e[n] ? t[r] = String(e[n]) : t[r] = e[n]
                    })), t
                }
                p.prototype.getUrl = function() {
                    return this._graphQL.getGraphQLEndpoint()
                }, p.prototype.getBody = function() {
                    var e = E(this._data),
                        t = this._generator(e),
                        n = i({
                            clientSdkMetadata: this._clientSdkMetadata
                        }, t);
                    return JSON.stringify(n)
                }, p.prototype.getMethod = function() {
                    return "POST"
                }, p.prototype.getHeaders = function() {
                    var e, t;
                    return this._data.authorizationFingerprint ? (this._sendAnalyticsEvent("graphql.authorization-fingerprint"), e = this._data.authorizationFingerprint) : (this._sendAnalyticsEvent("graphql.tokenization-key"), e = this._data.tokenizationKey), t = {
                        Authorization: "Bearer " + e,
                        "Braintree-Version": r
                    }, i({}, this._headers, t)
                }, p.prototype.adaptResponseBody = function(e) {
                    return this._adapter(e, this)
                }, p.prototype.determineStatus = function(e, t) {
                    var n, r;
                    return 200 === e ? (r = t.errors && t.errors[0] && t.errors[0].extensions && t.errors[0].extensions.errorClass, n = t.data && !t.errors ? 200 : "VALIDATION" === r ? 422 : "AUTHORIZATION" === r ? 403 : "AUTHENTICATION" === r ? 401 : _(r, t) ? 403 : 500) : n = e || 500, this._sendAnalyticsEvent("graphql.status." + e), this._sendAnalyticsEvent("graphql.determinedStatus." + n), n
                }, t.exports = p
            }, {
                "../../../lib/assign": 118,
                "../../../lib/snake-case-to-camel-case": 156,
                "../../constants": 76,
                "./adapters/configuration": 82,
                "./adapters/credit-card-tokenization": 83,
                "./generators/configuration": 85,
                "./generators/credit-card-tokenization": 86
            }],
            89: [function(e, t, n) {
                var r = e("../../lib/once"),
                    i = e("./ajax-driver");
                t.exports = function(e, t) {
                    t = r(t || Function.prototype), e.method = (e.method || "GET").toUpperCase(), e.timeout = null == e.timeout ? 6e4 : e.timeout, e.data = e.data || {}, i.request(e, t)
                }
            }, {
                "../../lib/once": 153,
                "./ajax-driver": 80
            }],
            90: [function(e, t, n) {
                t.exports = function(e) {
                    try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    return e
                }
            }, {}],
            91: [function(e, t, n) {
                t.exports = function(e, t) {
                    if ("string" != typeof e) throw new Error("Method must be a string");
                    return "get" !== e.toLowerCase() && null != t && (t = "string" == typeof t ? t : JSON.stringify(t)), t
                }
            }, {}],
            92: [function(e, t, n) {
                var r = window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest;
                t.exports = {
                    isAvailable: r,
                    getRequestObject: function() {
                        return r ? new window.XMLHttpRequest : new window.XDomainRequest
                    }
                }
            }, {}],
            93: [function(e, t, n) {
                var r = e("../lib/braintree-error");
                t.exports = {
                    DATA_COLLECTOR_KOUNT_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: "DATA_COLLECTOR_KOUNT_NOT_ENABLED",
                        message: "Kount is not enabled for this merchant."
                    },
                    DATA_COLLECTOR_KOUNT_ERROR: {
                        type: r.types.MERCHANT,
                        code: "DATA_COLLECTOR_KOUNT_ERROR"
                    },
                    DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS: {
                        type: r.types.MERCHANT,
                        code: "DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS",
                        message: "Data Collector must be created with Kount and/or PayPal."
                    }
                }
            }, {
                "../lib/braintree-error": 121
            }],
            94: [function(e, t, n) {
                var r, i = e("../lib/constants").FRAUDNET_FNCLS,
                    o = e("../lib/constants").FRAUDNET_SOURCE,
                    a = e("../lib/constants").FRAUDNET_URL,
                    s = e("../lib/assets").loadScript;

                function c() {}

                function d(e) {
                    e && e.parentNode && e.parentNode.removeChild(e)
                }

                function l() {
                    var e, t = "";
                    for (e = 0; e < 32; e++) t += Math.floor(16 * Math.random()).toString(16);
                    return t
                }

                function u(e, t, n) {
                    var r = document.body.appendChild(document.createElement("script")),
                        a = {
                            f: e,
                            s: o,
                            b: t
                        };
                    return "production" !== n && (a.sandbox = !0), r.type = "application/json", r.setAttribute("fncls", i), r.text = JSON.stringify(a), r
                }
                c.prototype.initialize = function(e) {
                    var t, n, i = e.environment,
                        o = this;
                    return this.sessionId = e.sessionId || l(), e.sessionId || (r = this.sessionId), this._beaconId = (t = this.sessionId, n = (new Date).getTime() / 1e3, "https://b.stats.paypal.com/counter.cgi?i=127.0.0.1&p=" + t + "&t=" + n + "&a=14"), this._parameterBlock = u(this.sessionId, this._beaconId, i), s({
                        src: a
                    }).then((function(e) {
                        return o._thirdPartyBlock = e, o
                    })).catch((function() {
                        return null
                    }))
                }, c.prototype.teardown = function() {
                    d(document.querySelector('iframe[title="ppfniframe"]')), d(document.querySelector('iframe[title="pbf"]')), d(this._parameterBlock), d(this._thirdPartyBlock)
                }, t.exports = {
                    setup: function(e) {
                        var t = new c;
                        return !(e = e || {}).sessionId && r ? (t.sessionId = r, Promise.resolve(t)) : t.initialize(e)
                    },
                    clearSessionIdCache: function() {
                        r = null
                    }
                }
            }, {
                "../lib/assets": 117,
                "../lib/constants": 123
            }],
            95: [function(e, t, n) {
                var r = e("./kount"),
                    i = e("./fraudnet"),
                    o = e("../lib/braintree-error"),
                    a = e("../lib/basic-component-verification"),
                    s = e("../lib/create-deferred-client"),
                    c = e("../lib/create-assets-url"),
                    d = e("../lib/methods"),
                    l = e("../lib/convert-methods-to-error"),
                    u = e("@braintree/wrap-promise"),
                    p = e("./errors");

                function _(e) {
                    return u((function() {
                        return e._createPromise.then((function() {
                            e._instances.forEach((function(e) {
                                e && e.teardown()
                            })), l(e, d(e))
                        }))
                    }))
                }

                function E(e) {
                    return u((function(t) {
                        return t = t || {}, e._createPromise.then((function() {
                            return t.raw ? Promise.resolve(e.rawDeviceData) : Promise.resolve(e.deviceData)
                        }))
                    }))
                }
                t.exports = {
                    create: u((function(e) {
                        var t, n = "Data Collector",
                            d = {
                                _instances: []
                            };
                        return a.verify({
                            name: n,
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            return d._instantiatedWithAClient = !e.useDeferredClient, d._createPromise = s.create({
                                authorization: e.authorization,
                                client: e.client,
                                debug: e.debug,
                                assetsUrl: c.create(e.authorization),
                                name: n
                            }).then((function(n) {
                                var i, a = n.getConfiguration();
                                if (!0 === e.kount && a.gatewayConfiguration.kount) {
                                    try {
                                        i = r.setup({
                                            environment: a.gatewayConfiguration.environment,
                                            merchantId: a.gatewayConfiguration.kount.kountMerchantId
                                        })
                                    } catch (e) {
                                        return Promise.reject(new o({
                                            type: p.DATA_COLLECTOR_KOUNT_ERROR.type,
                                            code: p.DATA_COLLECTOR_KOUNT_ERROR.code,
                                            message: e.message
                                        }))
                                    }
                                    t = i.deviceData, d._instances.push(i)
                                } else t = {};
                                return Promise.resolve(n)
                            })).then((function(n) {
                                return i.setup({
                                    sessionId: e.riskCorrelationId || e.clientMetadataId || e.correlationId,
                                    environment: n.getConfiguration().gatewayConfiguration.environment
                                }).then((function(e) {
                                    e && (t.correlation_id = e.sessionId, d._instances.push(e))
                                }))
                            })).then((function() {
                                return 0 === d._instances.length ? Promise.reject(new o(p.DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS)) : (d.deviceData = JSON.stringify(t), d.rawDeviceData = t, d)
                            })), d.teardown = _(d), d.getDeviceData = E(d), d._instantiatedWithAClient ? d._createPromise : d
                        }))
                    })),
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/basic-component-verification": 119,
                "../lib/braintree-error": 121,
                "../lib/convert-methods-to-error": 124,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "../lib/methods": 152,
                "./errors": 93,
                "./fraudnet": 94,
                "./kount": 96,
                "@braintree/wrap-promise": 42
            }],
            96: [function(e, t, n) {
                var r = e("./vendor/sjcl"),
                    i = e("../lib/camel-case-to-snake-case"),
                    o = "https://assets.qa.braintreepayments.com/data",
                    a = {
                        development: o,
                        qa: o,
                        sandbox: "https://assets.braintreegateway.com/sandbox/data",
                        production: "https://assets.braintreegateway.com/data"
                    },
                    s = {};

                function c(e) {
                    var t = c.getCachedDeviceData(e.merchantId);
                    if (t) return this.deviceData = t, void(this._isCached = !0);
                    this._currentEnvironment = this._initializeEnvironment(e), r.random.startCollectors(), this._deviceSessionId = this._generateDeviceSessionId(), this.deviceData = this._getDeviceData(), c.setCachedDeviceData(e.merchantId, this.deviceData), this._iframe = this._setupIFrame()
                }
                c.getCachedDeviceData = function(e) {
                    return s[e]
                }, c.setCachedDeviceData = function(e, t) {
                    s[e] = t
                }, c.prototype.teardown = function() {
                    this._isCached || (r.random.stopCollectors(), this._removeIframe())
                }, c.prototype._removeIframe = function() {
                    this._iframe.parentNode.removeChild(this._iframe)
                }, c.prototype._getDeviceData = function() {
                    return i({
                        deviceSessionId: this._deviceSessionId,
                        fraudMerchantId: this._currentEnvironment.id
                    })
                }, c.prototype._generateDeviceSessionId = function() {
                    var e;
                    return e = r.random.randomWords(4, 0), r.codec.hex.fromBits(e)
                }, c.prototype._setupIFrame = function() {
                    var e, t, n = this;
                    return e = "?m=" + this._currentEnvironment.id + "&s=" + this._deviceSessionId, (t = document.createElement("iframe")).width = 1, t.id = "braintreeDataFrame-" + this._deviceSessionId, t.height = 1, t.frameBorder = 0, t.scrolling = "no", t.style.position = "fixed", t.style.left = "-999999px", t.style.top = "-999999px", t.title = "Braintree-Kount-iframe", t.setAttribute("aria-hidden", "true"), document.body.appendChild(t), setTimeout((function() {
                        t.src = n._currentEnvironment.url + "/logo.htm" + e, t.innerHTML = '<img src="' + n._currentEnvironment.url + "/logo.gif" + e + '" alt="" />'
                    }), 10), t
                }, c.prototype._initializeEnvironment = function(e) {
                    var t = a[e.environment];
                    if (null == t) throw new Error(e.environment + " is not a valid environment for kount.environment");
                    return {
                        url: t,
                        name: e.environment,
                        id: e.merchantId
                    }
                }, t.exports = {
                    setup: function(e) {
                        return new c(null != e ? e : {})
                    },
                    Kount: c,
                    environmentUrls: a
                }
            }, {
                "../lib/camel-case-to-snake-case": 122,
                "./vendor/sjcl": 97
            }],
            97: [function(e, t, n) {
                var r = {
                    cipher: {},
                    hash: {},
                    keyexchange: {},
                    mode: {},
                    misc: {},
                    codec: {},
                    exception: {
                        corrupt: function(e) {
                            this.toString = function() {
                                return "CORRUPT: " + this.message
                            }, this.message = e
                        },
                        invalid: function(e) {
                            this.toString = function() {
                                return "INVALID: " + this.message
                            }, this.message = e
                        },
                        bug: function(e) {
                            this.toString = function() {
                                return "BUG: " + this.message
                            }, this.message = e
                        },
                        notReady: function(e) {
                            this.toString = function() {
                                return "NOT READY: " + this.message
                            }, this.message = e
                        }
                    }
                };

                function i(e, t, n) {
                    if (4 !== t.length) throw new r.exception.invalid("invalid aes block size");
                    var i = e.b[n],
                        o = t[0] ^ i[0],
                        a = t[n ? 3 : 1] ^ i[1],
                        s = t[2] ^ i[2];
                    t = t[n ? 1 : 3] ^ i[3];
                    var c, d, l, u, p = i.length / 4 - 2,
                        _ = 4,
                        E = [0, 0, 0, 0];
                    e = (c = e.l[n])[0];
                    var h = c[1],
                        m = c[2],
                        f = c[3],
                        y = c[4];
                    for (u = 0; u < p; u++) c = e[o >>> 24] ^ h[a >> 16 & 255] ^ m[s >> 8 & 255] ^ f[255 & t] ^ i[_], d = e[a >>> 24] ^ h[s >> 16 & 255] ^ m[t >> 8 & 255] ^ f[255 & o] ^ i[_ + 1], l = e[s >>> 24] ^ h[t >> 16 & 255] ^ m[o >> 8 & 255] ^ f[255 & a] ^ i[_ + 2], t = e[t >>> 24] ^ h[o >> 16 & 255] ^ m[a >> 8 & 255] ^ f[255 & s] ^ i[_ + 3], _ += 4, o = c, a = d, s = l;
                    for (u = 0; 4 > u; u++) E[n ? 3 & -u : u] = y[o >>> 24] << 24 ^ y[a >> 16 & 255] << 16 ^ y[s >> 8 & 255] << 8 ^ y[255 & t] ^ i[_++], c = o, o = a, a = s, s = t, t = c;
                    return E
                }

                function o(e, t) {
                    var n, r, i, o = e.u,
                        a = e.b,
                        s = o[0],
                        c = o[1],
                        d = o[2],
                        l = o[3],
                        u = o[4],
                        p = o[5],
                        _ = o[6],
                        E = o[7];
                    for (n = 0; 64 > n; n++) 16 > n ? r = t[n] : (r = t[n + 1 & 15], i = t[n + 14 & 15], r = t[15 & n] = (r >>> 7 ^ r >>> 18 ^ r >>> 3 ^ r << 25 ^ r << 14) + (i >>> 17 ^ i >>> 19 ^ i >>> 10 ^ i << 15 ^ i << 13) + t[15 & n] + t[n + 9 & 15] | 0), r = r + E + (u >>> 6 ^ u >>> 11 ^ u >>> 25 ^ u << 26 ^ u << 21 ^ u << 7) + (_ ^ u & (p ^ _)) + a[n], E = _, _ = p, p = u, u = l + r | 0, l = d, d = c, s = r + ((c = s) & d ^ l & (c ^ d)) + (c >>> 2 ^ c >>> 13 ^ c >>> 22 ^ c << 30 ^ c << 19 ^ c << 10) | 0;
                    o[0] = o[0] + s | 0, o[1] = o[1] + c | 0, o[2] = o[2] + d | 0, o[3] = o[3] + l | 0, o[4] = o[4] + u | 0, o[5] = o[5] + p | 0, o[6] = o[6] + _ | 0, o[7] = o[7] + E | 0
                }

                function a(e, t) {
                    var n, i = r.random.B[e],
                        o = [];
                    for (n in i) i.hasOwnProperty(n) && o.push(i[n]);
                    for (n = 0; n < o.length; n++) o[n](t)
                }

                function s(e, t) {
                    window.performance && "function" == typeof window.performance.now ? e.addEntropy(window.performance.now(), t, "loadtime") : e.addEntropy((new Date).valueOf(), t, "loadtime")
                }

                function c(e) {
                    e.b = d(e).concat(d(e)), e.C = new r.cipher.aes(e.b)
                }

                function d(e) {
                    for (var t = 0; 4 > t && (e.g[t] = e.g[t] + 1 | 0, !e.g[t]); t++);
                    return e.C.encrypt(e.g)
                }

                function l(e, t) {
                    return function() {
                        t.apply(e, arguments)
                    }
                }
                r.cipher.aes = function(e) {
                    this.l[0][0][0] || this.G();
                    var t, n, i, o, a = this.l[0][4],
                        s = this.l[1],
                        c = 1;
                    if (4 !== (t = e.length) && 6 !== t && 8 !== t) throw new r.exception.invalid("invalid aes key size");
                    for (this.b = [i = e.slice(0), o = []], e = t; e < 4 * t + 28; e++) n = i[e - 1], (0 == e % t || 8 === t && 4 == e % t) && (n = a[n >>> 24] << 24 ^ a[n >> 16 & 255] << 16 ^ a[n >> 8 & 255] << 8 ^ a[255 & n], 0 == e % t && (n = n << 8 ^ n >>> 24 ^ c << 24, c = c << 1 ^ 283 * (c >> 7))), i[e] = i[e - t] ^ n;
                    for (t = 0; e; t++, e--) n = i[3 & t ? e : e - 4], o[t] = 4 >= e || 4 > t ? n : s[0][a[n >>> 24]] ^ s[1][a[n >> 16 & 255]] ^ s[2][a[n >> 8 & 255]] ^ s[3][a[255 & n]]
                }, r.cipher.aes.prototype = {
                    encrypt: function(e) {
                        return i(this, e, 0)
                    },
                    decrypt: function(e) {
                        return i(this, e, 1)
                    },
                    l: [
                        [
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [
                            [],
                            [],
                            [],
                            [],
                            []
                        ]
                    ],
                    G: function() {
                        var e, t, n, r, i, o, a, s = this.l[0],
                            c = this.l[1],
                            d = s[4],
                            l = c[4],
                            u = [],
                            p = [];
                        for (e = 0; 256 > e; e++) p[(u[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e;
                        for (t = n = 0; !d[t]; t ^= r || 1, n = p[n] || 1)
                            for (o = (o = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4) >> 8 ^ 255 & o ^ 99, d[t] = o, l[o] = t, a = 16843009 * (i = u[e = u[r = u[t]]]) ^ 65537 * e ^ 257 * r ^ 16843008 * t, i = 257 * u[o] ^ 16843008 * o, e = 0; 4 > e; e++) s[e][t] = i = i << 24 ^ i >>> 8, c[e][o] = a = a << 24 ^ a >>> 8;
                        for (e = 0; 5 > e; e++) s[e] = s[e].slice(0), c[e] = c[e].slice(0)
                    }
                }, r.bitArray = {
                    bitSlice: function(e, t, n) {
                        return e = r.bitArray.M(e.slice(t / 32), 32 - (31 & t)).slice(1), void 0 === n ? e : r.bitArray.clamp(e, n - t)
                    },
                    extract: function(e, t, n) {
                        var r = Math.floor(-t - n & 31);
                        return (-32 & (t + n - 1 ^ t) ? e[t / 32 | 0] << 32 - r ^ e[t / 32 + 1 | 0] >>> r : e[t / 32 | 0] >>> r) & (1 << n) - 1
                    },
                    concat: function(e, t) {
                        if (0 === e.length || 0 === t.length) return e.concat(t);
                        var n = e[e.length - 1],
                            i = r.bitArray.getPartial(n);
                        return 32 === i ? e.concat(t) : r.bitArray.M(t, i, 0 | n, e.slice(0, e.length - 1))
                    },
                    bitLength: function(e) {
                        var t = e.length;
                        return 0 === t ? 0 : 32 * (t - 1) + r.bitArray.getPartial(e[t - 1])
                    },
                    clamp: function(e, t) {
                        if (32 * e.length < t) return e;
                        var n = (e = e.slice(0, Math.ceil(t / 32))).length;
                        return t &= 31, 0 < n && t && (e[n - 1] = r.bitArray.partial(t, e[n - 1] & 2147483648 >> t - 1, 1)), e
                    },
                    partial: function(e, t, n) {
                        return 32 === e ? t : (n ? 0 | t : t << 32 - e) + 1099511627776 * e
                    },
                    getPartial: function(e) {
                        return Math.round(e / 1099511627776) || 32
                    },
                    equal: function(e, t) {
                        if (r.bitArray.bitLength(e) !== r.bitArray.bitLength(t)) return !1;
                        var n, i = 0;
                        for (n = 0; n < e.length; n++) i |= e[n] ^ t[n];
                        return 0 === i
                    },
                    M: function(e, t, n, i) {
                        var o;
                        for (o = 0, void 0 === i && (i = []); 32 <= t; t -= 32) i.push(n), n = 0;
                        if (0 === t) return i.concat(e);
                        for (o = 0; o < e.length; o++) i.push(n | e[o] >>> t), n = e[o] << 32 - t;
                        return o = e.length ? e[e.length - 1] : 0, e = r.bitArray.getPartial(o), i.push(r.bitArray.partial(t + e & 31, 32 < t + e ? n : i.pop(), 1)), i
                    },
                    Y: function(e, t) {
                        return [e[0] ^ t[0], e[1] ^ t[1], e[2] ^ t[2], e[3] ^ t[3]]
                    },
                    byteswapM: function(e) {
                        var t, n;
                        for (t = 0; t < e.length; ++t) n = e[t], e[t] = n >>> 24 | n >>> 8 & 65280 | (65280 & n) << 8 | n << 24;
                        return e
                    }
                }, r.codec.utf8String = {
                    fromBits: function(e) {
                        var t, n, i = "",
                            o = r.bitArray.bitLength(e);
                        for (t = 0; t < o / 8; t++) !(3 & t) && (n = e[t / 4]), i += String.fromCharCode(n >>> 8 >>> 8 >>> 8), n <<= 8;
                        return decodeURIComponent(escape(i))
                    },
                    toBits: function(e) {
                        e = unescape(encodeURIComponent(e));
                        var t, n = [],
                            i = 0;
                        for (t = 0; t < e.length; t++) i = i << 8 | e.charCodeAt(t), !(3 & ~t) && (n.push(i), i = 0);
                        return 3 & t && n.push(r.bitArray.partial(8 * (3 & t), i)), n
                    }
                }, r.codec.hex = {
                    fromBits: function(e) {
                        var t, n = "";
                        for (t = 0; t < e.length; t++) n += (0xf00000000000 + (0 | e[t])).toString(16).substr(4);
                        return n.substr(0, r.bitArray.bitLength(e) / 4)
                    },
                    toBits: function(e) {
                        var t, n, i = [];
                        for (n = (e = e.replace(/\s|0x/g, "")).length, e += "00000000", t = 0; t < e.length; t += 8) i.push(0 ^ parseInt(e.substr(t, 8), 16));
                        return r.bitArray.clamp(i, 4 * n)
                    }
                }, r.hash.sha256 = function(e) {
                    this.b[0] || this.G(), e ? (this.u = e.u.slice(0), this.o = e.o.slice(0), this.h = e.h) : this.reset()
                }, r.hash.sha256.hash = function(e) {
                    return (new r.hash.sha256).update(e).finalize()
                }, r.hash.sha256.prototype = {
                    blockSize: 512,
                    reset: function() {
                        return this.u = this.K.slice(0), this.o = [], this.h = 0, this
                    },
                    update: function(e) {
                        "string" == typeof e && (e = r.codec.utf8String.toBits(e));
                        var t, n = this.o = r.bitArray.concat(this.o, e);
                        if (t = this.h, 9007199254740991 < (e = this.h = t + r.bitArray.bitLength(e))) throw new r.exception.invalid("Cannot hash more than 2^53 - 1 bits");
                        if ("undefined" != typeof Uint32Array) {
                            var i = new Uint32Array(n),
                                a = 0;
                            for (t = 512 + t - (512 + t & 511); t <= e; t += 512) o(this, i.subarray(16 * a, 16 * (a + 1))), a += 1;
                            n.splice(0, 16 * a)
                        } else
                            for (t = 512 + t - (512 + t & 511); t <= e; t += 512) o(this, n.splice(0, 16));
                        return this
                    },
                    finalize: function() {
                        var e, t = this.o,
                            n = this.u;
                        for (e = (t = r.bitArray.concat(t, [r.bitArray.partial(1, 1)])).length + 2; 15 & e; e++) t.push(0);
                        for (t.push(Math.floor(this.h / 4294967296)), t.push(0 | this.h); t.length;) o(this, t.splice(0, 16));
                        return this.reset(), n
                    },
                    K: [],
                    b: [],
                    G: function() {
                        function e(e) {
                            return 4294967296 * (e - Math.floor(e)) | 0
                        }
                        for (var t, n, r = 0, i = 2; 64 > r; i++) {
                            for (n = !0, t = 2; t * t <= i; t++)
                                if (0 == i % t) {
                                    n = !1;
                                    break
                                }
                            n && (8 > r && (this.K[r] = e(Math.pow(i, .5))), this.b[r] = e(Math.pow(i, .3333333333333333)), r++)
                        }
                    }
                }, r.prng = function(e) {
                    this.c = [new r.hash.sha256], this.i = [0], this.H = 0, this.v = {}, this.F = 0, this.J = {}, this.L = this.f = this.j = this.T = 0, this.b = [0, 0, 0, 0, 0, 0, 0, 0], this.g = [0, 0, 0, 0], this.C = void 0, this.D = e, this.s = !1, this.B = {
                        progress: {},
                        seeded: {}
                    }, this.m = this.S = 0, this.w = 1, this.A = 2, this.O = 65536, this.I = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024], this.P = 3e4, this.N = 80
                }, r.prng.prototype = {
                    randomWords: function(e, t) {
                        var n, i, o = [];
                        if ((n = this.isReady(t)) === this.m) throw new r.exception.notReady("generator isn't seeded");
                        if (n & this.A) {
                            n = !(n & this.w), i = [];
                            var a, s = 0;
                            for (this.L = i[0] = (new Date).valueOf() + this.P, a = 0; 16 > a; a++) i.push(4294967296 * Math.random() | 0);
                            for (a = 0; a < this.c.length && (i = i.concat(this.c[a].finalize()), s += this.i[a], this.i[a] = 0, n || !(this.H & 1 << a)); a++);
                            for (this.H >= 1 << this.c.length && (this.c.push(new r.hash.sha256), this.i.push(0)), this.f -= s, s > this.j && (this.j = s), this.H++, this.b = r.hash.sha256.hash(this.b.concat(i)), this.C = new r.cipher.aes(this.b), n = 0; 4 > n && (this.g[n] = this.g[n] + 1 | 0, !this.g[n]); n++);
                        }
                        for (n = 0; n < e; n += 4) 0 == (n + 1) % this.O && c(this), i = d(this), o.push(i[0], i[1], i[2], i[3]);
                        return c(this), o.slice(0, e)
                    },
                    setDefaultParanoia: function(e, t) {
                        if (0 === e && "Setting paranoia=0 will ruin your security; use it only for testing" !== t) throw new r.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");
                        this.D = e
                    },
                    addEntropy: function(e, t, n) {
                        n = n || "user";
                        var i, o, s = (new Date).valueOf(),
                            c = this.v[n],
                            d = this.isReady(),
                            l = 0;
                        switch (void 0 === (i = this.J[n]) && (i = this.J[n] = this.T++), void 0 === c && (c = this.v[n] = 0), this.v[n] = (this.v[n] + 1) % this.c.length, typeof e) {
                            case "number":
                                void 0 === t && (t = 1), this.c[c].update([i, this.F++, 1, t, s, 1, 0 | e]);
                                break;
                            case "object":
                                if ("[object Uint32Array]" === (n = Object.prototype.toString.call(e))) {
                                    for (o = [], n = 0; n < e.length; n++) o.push(e[n]);
                                    e = o
                                } else
                                    for ("[object Array]" !== n && (l = 1), n = 0; n < e.length && !l; n++) "number" != typeof e[n] && (l = 1);
                                if (!l) {
                                    if (void 0 === t)
                                        for (n = t = 0; n < e.length; n++)
                                            for (o = e[n]; 0 < o;) t++, o >>>= 1;
                                    this.c[c].update([i, this.F++, 2, t, s, e.length].concat(e))
                                }
                                break;
                            case "string":
                                void 0 === t && (t = e.length), this.c[c].update([i, this.F++, 3, t, s, e.length]), this.c[c].update(e);
                                break;
                            default:
                                l = 1
                        }
                        if (l) throw new r.exception.bug("random: addEntropy only supports number, array of numbers or string");
                        this.i[c] += t, this.f += t, d === this.m && (this.isReady() !== this.m && a("seeded", Math.max(this.j, this.f)), a("progress", this.getProgress()))
                    },
                    isReady: function(e) {
                        return e = this.I[void 0 !== e ? e : this.D], this.j && this.j >= e ? this.i[0] > this.N && (new Date).valueOf() > this.L ? this.A | this.w : this.w : this.f >= e ? this.A | this.m : this.m
                    },
                    getProgress: function(e) {
                        return e = this.I[e || this.D], this.j >= e || this.f > e ? 1 : this.f / e
                    },
                    startCollectors: function() {
                        if (!this.s) {
                            if (this.a = {
                                    loadTimeCollector: l(this, this.V),
                                    mouseCollector: l(this, this.W),
                                    keyboardCollector: l(this, this.U),
                                    accelerometerCollector: l(this, this.R),
                                    touchCollector: l(this, this.X)
                                }, window.addEventListener) window.addEventListener("load", this.a.loadTimeCollector, !1), window.addEventListener("mousemove", this.a.mouseCollector, !1), window.addEventListener("keypress", this.a.keyboardCollector, !1), window.addEventListener("devicemotion", this.a.accelerometerCollector, !1), window.addEventListener("touchmove", this.a.touchCollector, !1);
                            else {
                                if (!document.attachEvent) throw new r.exception.bug("can't attach event");
                                document.attachEvent("onload", this.a.loadTimeCollector), document.attachEvent("onmousemove", this.a.mouseCollector), document.attachEvent("keypress", this.a.keyboardCollector)
                            }
                            this.s = !0
                        }
                    },
                    stopCollectors: function() {
                        this.s && (window.removeEventListener ? (window.removeEventListener("load", this.a.loadTimeCollector, !1), window.removeEventListener("mousemove", this.a.mouseCollector, !1), window.removeEventListener("keypress", this.a.keyboardCollector, !1), window.removeEventListener("devicemotion", this.a.accelerometerCollector, !1), window.removeEventListener("touchmove", this.a.touchCollector, !1)) : document.detachEvent && (document.detachEvent("onload", this.a.loadTimeCollector), document.detachEvent("onmousemove", this.a.mouseCollector), document.detachEvent("keypress", this.a.keyboardCollector)), this.s = !1)
                    },
                    addEventListener: function(e, t) {
                        this.B[e][this.S++] = t
                    },
                    removeEventListener: function(e, t) {
                        var n, r, i = this.B[e],
                            o = [];
                        for (r in i) i.hasOwnProperty(r) && i[r] === t && o.push(r);
                        for (n = 0; n < o.length; n++) delete i[r = o[n]]
                    },
                    U: function() {
                        s(this, 1)
                    },
                    W: function(e) {
                        var t, n;
                        try {
                            t = e.x || e.clientX || e.offsetX || 0, n = e.y || e.clientY || e.offsetY || 0
                        } catch (e) {
                            n = t = 0
                        }
                        0 != t && 0 != n && this.addEntropy([t, n], 2, "mouse"), s(this, 0)
                    },
                    X: function(e) {
                        e = e.touches[0] || e.changedTouches[0], this.addEntropy([e.pageX || e.clientX, e.pageY || e.clientY], 1, "touch"), s(this, 0)
                    },
                    V: function() {
                        s(this, 2)
                    },
                    R: function(e) {
                        if (e = e.accelerationIncludingGravity.x || e.accelerationIncludingGravity.y || e.accelerationIncludingGravity.z, window.orientation) {
                            var t = window.orientation;
                            "number" == typeof t && this.addEntropy(t, 1, "accelerometer")
                        }
                        e && this.addEntropy(e, 2, "accelerometer"), s(this, 0)
                    }
                }, r.random = new r.prng(6);
                e: try {
                    var u, p, _, E;
                    if (E = void 0 !== t && t.exports) {
                        var h;
                        try {
                            h = e("crypto")
                        } catch (e) {
                            h = null
                        }
                        E = p = h
                    }
                    if (E && p.randomBytes) u = p.randomBytes(128), u = new Uint32Array(new Uint8Array(u).buffer), r.random.addEntropy(u, 1024, "crypto['randomBytes']");
                    else if ("undefined" != typeof Uint32Array) {
                        if (_ = new Uint32Array(32), window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(_);
                        else {
                            if (!window.msCrypto || !window.msCrypto.getRandomValues) break e;
                            window.msCrypto.getRandomValues(_)
                        }
                        r.random.addEntropy(_, 1024, "crypto['getRandomValues']")
                    }
                } catch (e) {
                    window.console && (console.log("There was an error collecting entropy from the browser:"), console.log(e))
                }
                void 0 !== t && t.exports && (t.exports = r)
            }, {
                crypto: void 0
            }],
            98: [function(e, t, n) {
                var r = e("../lib/braintree-error");
                t.exports = {
                    GOOGLE_PAYMENT_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: "GOOGLE_PAYMENT_NOT_ENABLED",
                        message: "Google Pay is not enabled for this merchant."
                    },
                    GOOGLE_PAYMENT_GATEWAY_ERROR: {
                        code: "GOOGLE_PAYMENT_GATEWAY_ERROR",
                        message: "There was an error when tokenizing the Google Pay payment method.",
                        type: r.types.UNKNOWN
                    },
                    GOOGLE_PAYMENT_UNSUPPORTED_VERSION: {
                        code: "GOOGLE_PAYMENT_UNSUPPORTED_VERSION",
                        type: r.types.MERCHANT
                    }
                }
            }, {
                "../lib/braintree-error": 121
            }],
            99: [function(e, t, n) {
                var r = e("../lib/analytics"),
                    i = e("../lib/assign").assign,
                    o = e("../lib/convert-methods-to-error"),
                    a = e("../lib/find"),
                    s = e("../lib/generate-google-pay-configuration"),
                    c = e("../lib/braintree-error"),
                    d = e("./errors"),
                    l = e("../lib/methods"),
                    u = e("@braintree/wrap-promise"),
                    p = {
                        1: "_createV1PaymentDataRequest",
                        2: "_createV2PaymentDataRequest"
                    };

                function _(e) {
                    if (this._createPromise = e.createPromise, this._client = e.client, this._useDeferredClient = e.useDeferredClient, this._googlePayVersion = e.googlePayVersion || 1, this._googleMerchantId = e.googleMerchantId, this._isUnsupportedGooglePayAPIVersion()) throw new c({
                        code: d.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.code,
                        message: "The Braintree SDK does not support Google Pay version " + this._googlePayVersion + ". Please upgrade the version of your Braintree SDK and contact support if this error persists.",
                        type: d.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.type
                    })
                }

                function E(e, t) {
                    Object.keys(t).forEach((function(n) {
                        "object" == typeof t[n] ? e[n] = i({}, t[n], e[n]) : e[n] = e[n] || t[n]
                    }))
                }
                _.prototype._waitForClient = function() {
                    return this._client ? Promise.resolve() : this._createPromise.then(function(e) {
                        this._client = e
                    }.bind(this))
                }, _.prototype._isUnsupportedGooglePayAPIVersion = function() {
                    return !(this._googlePayVersion in p)
                }, _.prototype._getDefaultConfig = function() {
                    return this._defaultConfig || (this._defaultConfig = s(this._client.getConfiguration(), this._googlePayVersion, this._googleMerchantId)), this._defaultConfig
                }, _.prototype._createV1PaymentDataRequest = function(e) {
                    var t = this._getDefaultConfig(),
                        n = e.cardRequirements && e.cardRequirements.allowedCardNetworks,
                        r = t.cardRequirements.allowedCardNetworks,
                        o = n || r;
                    return (e = i({}, t, e)).cardRequirements.allowedCardNetworks = o, e
                }, _.prototype._createV2PaymentDataRequest = function(e) {
                    var t = this._getDefaultConfig();
                    return e.allowedPaymentMethods && e.allowedPaymentMethods.forEach((function(e) {
                        var n = a(t.allowedPaymentMethods, "type", e.type);
                        n && E(e, n)
                    })), e = i({}, t, e)
                }, _.prototype.createPaymentDataRequest = function(e) {
                    return this._useDeferredClient ? this._waitForClient().then(function() {
                        return this._createPaymentDataRequestSyncronously(e)
                    }.bind(this)) : this._createPaymentDataRequestSyncronously(e)
                }, _.prototype._createPaymentDataRequestSyncronously = function(e) {
                    var t = i({}, e),
                        n = this._googlePayVersion,
                        o = p[n];
                    return r.sendEvent(this._createPromise, "google-payment.v" + n + ".createPaymentDataRequest"), this[o](t)
                }, _.prototype.parseResponse = function(e) {
                    var t = this;
                    return Promise.resolve().then((function() {
                        var n, i = 2 === e.apiVersion ? e.paymentMethodData.tokenizationData.token : e.paymentMethodToken.token,
                            o = JSON.parse(i),
                            a = o.error;
                        return a ? Promise.reject(a) : (r.sendEvent(t._createPromise, "google-payment.parseResponse.succeeded"), o.paypalAccounts ? (n = o.paypalAccounts[0], r.sendEvent(t._createPromise, "google-payment.parseResponse.succeeded.paypal"), Promise.resolve({
                            nonce: n.nonce,
                            type: n.type,
                            description: n.description
                        })) : (n = o.androidPayCards[0], r.sendEvent(t._createPromise, "google-payment.parseResponse.succeeded.google-payment"), Promise.resolve({
                            nonce: n.nonce,
                            type: n.type,
                            description: n.description,
                            details: {
                                cardType: n.details.cardType,
                                lastFour: n.details.lastFour,
                                lastTwo: n.details.lastTwo,
                                isNetworkTokenized: n.details.isNetworkTokenized,
                                bin: n.details.bin
                            },
                            binData: n.binData
                        })))
                    })).catch((function(e) {
                        return r.sendEvent(t._createPromise, "google-payment.parseResponse.failed"), Promise.reject(new c({
                            code: d.GOOGLE_PAYMENT_GATEWAY_ERROR.code,
                            message: d.GOOGLE_PAYMENT_GATEWAY_ERROR.message,
                            type: d.GOOGLE_PAYMENT_GATEWAY_ERROR.type,
                            details: {
                                originalError: e
                            }
                        }))
                    }))
                }, _.prototype.teardown = function() {
                    return o(this, l(_.prototype)), Promise.resolve()
                }, t.exports = u.wrapPrototype(_)
            }, {
                "../lib/analytics": 116,
                "../lib/assign": 118,
                "../lib/braintree-error": 121,
                "../lib/convert-methods-to-error": 124,
                "../lib/find": 134,
                "../lib/generate-google-pay-configuration": 146,
                "../lib/methods": 152,
                "./errors": 98,
                "@braintree/wrap-promise": 42
            }],
            100: [function(e, t, n) {
                var r = e("./google-payment"),
                    i = e("../lib/braintree-error"),
                    o = e("../lib/create-assets-url"),
                    a = e("../lib/create-deferred-client"),
                    s = e("../lib/basic-component-verification"),
                    c = e("@braintree/wrap-promise"),
                    d = e("./errors");
                t.exports = {
                    create: c((function(e) {
                        var t = "Google Pay";
                        return s.verify({
                            name: t,
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            var n, s;
                            return n = a.create({
                                authorization: e.authorization,
                                client: e.client,
                                debug: e.debug,
                                assetsUrl: o.create(e.authorization),
                                name: t
                            }).then((function(t) {
                                var n = t.getConfiguration();
                                return e.client = t, n.gatewayConfiguration.androidPay ? t : Promise.reject(new i(d.GOOGLE_PAYMENT_NOT_ENABLED))
                            })), e.createPromise = n, s = new r(e), e.useDeferredClient ? s : n.then((function(e) {
                                return s._client = e, s
                            }))
                        }))
                    })),
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/basic-component-verification": 119,
                "../lib/braintree-error": 121,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "./errors": 98,
                "./google-payment": 99,
                "@braintree/wrap-promise": 42
            }],
            101: [function(e, t, n) {
                var r = e("../../lib/braintree-error"),
                    i = e("../shared/errors"),
                    o = e("../shared/constants").allowedAttributes;

                function a(e, t) {
                    return "string" === o[e] ? "string" == typeof t || "number" == typeof t : "boolean" === o[e] && ("true" === String(t) || "false" === String(t))
                }
                t.exports = function(e, t) {
                    var n;
                    return o.hasOwnProperty(e) ? null == t || a(e, t) || (n = new r({
                        type: i.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.type,
                        code: i.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.code,
                        message: 'Value "' + t + '" is not allowed for "' + e + '" attribute.'
                    })) : n = new r({
                        type: i.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.type,
                        code: i.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.code,
                        message: 'The "' + e + '" attribute is not supported in Hosted Fields.'
                    }), n
                }
            }, {
                "../../lib/braintree-error": 121,
                "../shared/constants": 109,
                "../shared/errors": 110
            }],
            102: [function(e, t, n) {
                var r = e("../shared/constants"),
                    i = e("../../lib/use-min");
                t.exports = function(e, t, n) {
                    return e + "/web/" + r.VERSION + "/html/hosted-fields-frame" + i(n) + ".html#" + t
                }
            }, {
                "../../lib/use-min": 157,
                "../shared/constants": 109
            }],
            103: [function(e, t, n) {
                var r = e("../shared/constants").navigationDirections,
                    i = e("../shared/browser-detection"),
                    o = e("../shared/focus-intercept"),
                    a = e("../shared/find-parent-tags"),
                    s = ["INPUT", "SELECT", "TEXTAREA"],
                    c = ["hidden", "button", "reset", "submit", "checkbox", "radio", "file"];

                function d(e) {
                    return i.hasSoftwareKeyboard() ? s.indexOf(e.tagName) > -1 && c.indexOf(e.type) < 0 : "hidden" !== e.type
                }

                function l(e, t) {
                    switch (e) {
                        case r.BACK:
                            return {
                                checkIndexBounds: function(e) {
                                    return e < 0
                                },
                                indexChange: -1
                            };
                        case r.FORWARD:
                            return {
                                checkIndexBounds: function(e) {
                                    return e > t - 1
                                },
                                indexChange: 1
                            }
                    }
                    return {}
                }

                function u(e) {
                    var t, n;
                    for (t = 0; t < e.length; t++)
                        if (d(n = e[t])) return n;
                    return null
                }
                t.exports = {
                    removeExtraFocusElements: function(e, t) {
                        var n = Array.prototype.slice.call(e.elements);
                        [u(n), u(n.reverse())].forEach((function(e) {
                            e && o.matchFocusElement(e.getAttribute("id")) && t(e.getAttribute("id"))
                        }))
                    },
                    createFocusChangeHandler: function(e, t) {
                        return function(n) {
                            var r, i, s, c, u = document.getElementById("bt-" + n.field + "-" + n.direction + "-" + e);
                            if (u)
                                if (s = a(u, "form")[0], document.forms.length < 1 || !s) t.onRemoveFocusIntercepts();
                                else {
                                    r = (s = [].slice.call(s.elements)).indexOf(u), c = l(n.direction, s.length);
                                    do {
                                        if (r += c.indexChange, c.checkIndexBounds(r)) return;
                                        i = s[r]
                                    } while (!d(i));
                                    o.matchFocusElement(i.getAttribute("id")) ? t.onTriggerInputFocus(i.getAttribute("data-braintree-type")) : i.focus()
                                }
                        }
                    }
                }
            }, {
                "../shared/browser-detection": 108,
                "../shared/constants": 109,
                "../shared/find-parent-tags": 111,
                "../shared/focus-intercept": 112
            }],
            104: [function(e, t, n) {
                var r = e("../shared/constants").allowedStyles;
                t.exports = function(e) {
                    var t, n = document.createElement("input"),
                        i = {};
                    return "." === e[0] && (e = e.substring(1)), n.className = e, n.style.display = "none !important", n.style.position = "fixed !important", n.style.left = "-99999px !important", n.style.top = "-99999px !important", document.body.appendChild(n), t = window.getComputedStyle(n), r.forEach((function(e) {
                        var n = t[e];
                        n && (i[e] = n)
                    })), document.body.removeChild(n), i
                }
            }, {
                "../shared/constants": 109
            }],
            105: [function(e, t, n) {
                var r = e("../../lib/assign").assign,
                    i = e("../../lib/create-assets-url"),
                    o = e("../../lib/is-verified-domain"),
                    a = e("../../lib/destructor"),
                    s = e("@braintree/iframer"),
                    c = e("framebus"),
                    d = e("../../lib/create-deferred-client"),
                    l = e("../../lib/braintree-error"),
                    u = e("./compose-url"),
                    p = e("./get-styles-from-class"),
                    _ = e("../shared/constants"),
                    E = e("../shared/errors"),
                    h = e("../../lib/constants").INTEGRATION_TIMEOUT_MS,
                    m = e("@braintree/uuid"),
                    f = e("../shared/find-parent-tags"),
                    y = e("../shared/browser-detection"),
                    A = _.events,
                    T = e("@braintree/event-emitter"),
                    I = e("./inject-frame"),
                    N = e("../../lib/analytics"),
                    O = _.allowedFields,
                    g = e("../../lib/methods"),
                    P = e("../../lib/shadow"),
                    b = e("../../lib/find-root-node"),
                    v = e("../../lib/convert-methods-to-error"),
                    C = e("../../lib/errors"),
                    R = e("../shared/get-card-types"),
                    S = e("./attribute-validation-error"),
                    D = e("@braintree/wrap-promise"),
                    w = e("./focus-change"),
                    L = e("../shared/focus-intercept").destroy;

                function M(e) {
                    return function(t) {
                        var n, r = t.merchantPayload,
                            i = r.emittedBy,
                            o = e[i].containerElement;
                        Object.keys(r.fields).forEach((function(t) {
                            r.fields[t].container = e[t].containerElement
                        })), n = r.fields[i], o.classList.toggle(_.externalClasses.FOCUSED, n.isFocused), o.classList.toggle(_.externalClasses.VALID, n.isValid), o.classList.toggle(_.externalClasses.INVALID, !n.isPotentiallyValid), this._state = {
                            cards: r.cards,
                            fields: r.fields
                        }, this._emit(t.type, r)
                    }
                }

                function U(e) {
                    var t, n, f, y, O, b = this,
                        S = {},
                        D = {},
                        F = [],
                        x = m();
                    if (this._merchantConfigurationOptions = r({}, e), e.client ? (f = (n = e.client.getConfiguration()).gatewayConfiguration.assetsUrl, y = n.isDebug) : (f = i.create(e.authorization), y = Boolean(e.isDebug)), this._clientPromise = d.create({
                            client: e.client,
                            authorization: e.authorization,
                            debug: y,
                            assetsUrl: f,
                            name: "Hosted Fields"
                        }), O = u(f, x, y), !e.fields || 0 === Object.keys(e.fields).length) throw new l({
                        type: C.INSTANTIATION_OPTION_REQUIRED.type,
                        code: C.INSTANTIATION_OPTION_REQUIRED.code,
                        message: "options.fields is required when instantiating Hosted Fields."
                    });
                    T.call(this), this._injectedNodes = [], this._destructor = new a, this._fields = S, this._state = {
                        fields: {},
                        cards: R("")
                    }, this._bus = new c({
                        channel: x,
                        verifyDomain: o,
                        targetFrames: []
                    }), this._destructor.registerFunctionForTeardown((function() {
                        b._bus.teardown()
                    })), e.client ? N.sendEvent(this._clientPromise, "custom.hosted-fields.initialized") : N.sendEvent(this._clientPromise, "custom.hosted-fields.initialized.deferred-client"), Object.keys(e.fields).forEach(function(t) {
                        var n, r, i, o, a;
                        if (!_.allowedFields.hasOwnProperty(t)) throw new l({
                            type: E.HOSTED_FIELDS_INVALID_FIELD_KEY.type,
                            code: E.HOSTED_FIELDS_INVALID_FIELD_KEY.code,
                            message: '"' + t + '" is not a valid field.'
                        });
                        if ("string" == typeof(r = (n = e.fields[t]).container || n.selector) && (r = document.querySelector(r)), !r || 1 !== r.nodeType) throw new l({
                            type: E.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.type,
                            code: E.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.code,
                            message: E.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.message,
                            details: {
                                fieldSelector: n.selector,
                                fieldContainer: n.container,
                                fieldKey: t
                            }
                        });
                        if (r.querySelector('iframe[name^="braintree-"]')) throw new l({
                            type: E.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.type,
                            code: E.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.code,
                            message: E.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.message,
                            details: {
                                fieldSelector: n.selector,
                                fieldContainer: n.container,
                                fieldKey: t
                            }
                        });
                        if (i = r, P.isShadowElement(i) && (i = P.transformToSlot(i, "height: 100%")), n.maxlength && "number" != typeof n.maxlength) throw new l({
                            type: E.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
                            code: E.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
                            message: "The value for maxlength must be a number.",
                            details: {
                                fieldKey: t
                            }
                        });
                        if (n.minlength && "number" != typeof n.minlength) throw new l({
                            type: E.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
                            code: E.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
                            message: "The value for minlength must be a number.",
                            details: {
                                fieldKey: t
                            }
                        });
                        o = s({
                            type: t,
                            name: "braintree-hosted-field-" + t,
                            style: _.defaultIFrameStyle,
                            title: n.iframeTitle || "Secure Credit Card Frame - " + _.allowedFields[t].label
                        }), this._bus.addTargetFrame(o), this._injectedNodes.push.apply(this._injectedNodes, I(x, o, i, (function() {
                            b.focus(t)
                        }))), this._setupLabelFocus(t, r), S[t] = {
                            frameElement: o,
                            containerElement: r
                        }, a = new Promise((function(e) {
                            D[t] = e
                        })), F.push(a), this._state.fields[t] = {
                            isEmpty: !0,
                            isValid: !1,
                            isPotentiallyValid: !0,
                            isFocused: !1,
                            container: r
                        }, setTimeout((function() {
                            o.src = O
                        }), 0)
                    }.bind(this)), this._merchantConfigurationOptions.styles && Object.keys(this._merchantConfigurationOptions.styles).forEach((function(e) {
                        var t = b._merchantConfigurationOptions.styles[e];
                        "string" == typeof t && (b._merchantConfigurationOptions.styles[e] = p(t))
                    })), this._bus.on(A.REMOVE_FOCUS_INTERCEPTS, (function(e) {
                        L(e && e.id)
                    })), this._bus.on(A.TRIGGER_FOCUS_CHANGE, w.createFocusChangeHandler(x, {
                        onRemoveFocusIntercepts: function(e) {
                            b._bus.emit(A.REMOVE_FOCUS_INTERCEPTS, {
                                id: e
                            })
                        },
                        onTriggerInputFocus: function(e) {
                            b.focus(e)
                        }
                    })), this._bus.on(A.READY_FOR_CLIENT, (function(e) {
                        b._clientPromise.then((function(t) {
                            e(t)
                        }))
                    })), this._bus.on(A.CARD_FORM_ENTRY_HAS_BEGUN, (function() {
                        N.sendEvent(b._clientPromise, "hosted-fields.input.started")
                    })), this._bus.on(A.BIN_AVAILABLE, (function(e) {
                        b._emit("binAvailable", {
                            bin: e
                        })
                    })), t = setTimeout((function() {
                        N.sendEvent(b._clientPromise, "custom.hosted-fields.load.timed-out"), b._emit("timeout")
                    }), h), Promise.all(F).then((function(e) {
                        var n = e[0];
                        clearTimeout(t), n(k(b._merchantConfigurationOptions)), b._cleanUpFocusIntercepts(), b._emit("ready")
                    })), this._bus.on(A.FRAME_READY, (function(e, t) {
                        D[e.field](t)
                    })), this._bus.on(A.INPUT_EVENT, M(S).bind(this)), this._destructor.registerFunctionForTeardown((function() {
                        var e, t, n;
                        for (e = 0; e < b._injectedNodes.length; e++)(n = (t = b._injectedNodes[e]).parentNode).removeChild(t), n.classList.remove(_.externalClasses.FOCUSED, _.externalClasses.INVALID, _.externalClasses.VALID)
                    })), this._destructor.registerFunctionForTeardown((function() {
                        L()
                    })), this._destructor.registerFunctionForTeardown((function() {
                        var e = g(U.prototype).concat(g(T.prototype));
                        v(b, e)
                    }))
                }

                function k(e) {
                    var t = r({}, e);
                    return t.fields = r({}, t.fields), Object.keys(t.fields).forEach((function(e) {
                        t.fields[e] = r({}, t.fields[e]), delete t.fields[e].container
                    })), t
                }
                T.createChild(U), U.prototype._setupLabelFocus = function(e, t) {
                    var n, r, i = this,
                        o = b(t);
                    if (null != t.id) {
                        for (n = Array.prototype.slice.call(document.querySelectorAll('label[for="' + t.id + '"]')), o !== document && (n = n.concat(Array.prototype.slice.call(o.querySelectorAll('label[for="' + t.id + '"]')))), n = (n = n.concat(f(t, "label"))).filter((function(e, t, n) {
                                return n.indexOf(e) === t
                            })), r = 0; r < n.length; r++) n[r].addEventListener("click", a, !1);
                        this._destructor.registerFunctionForTeardown((function() {
                            for (r = 0; r < n.length; r++) n[r].removeEventListener("click", a, !1)
                        }))
                    }

                    function a() {
                        i.focus(e)
                    }
                }, U.prototype._getAnyFieldContainer = function() {
                    var e = this;
                    return Object.keys(this._fields).reduce((function(t, n) {
                        return t || e._fields[n].containerElement
                    }), null)
                }, U.prototype._cleanUpFocusIntercepts = function() {
                    var e, t;
                    document.forms.length < 1 ? this._bus.emit(A.REMOVE_FOCUS_INTERCEPTS) : (e = this._getAnyFieldContainer(), (t = f(e, "form")[0]) ? w.removeExtraFocusElements(t, function(e) {
                        this._bus.emit(A.REMOVE_FOCUS_INTERCEPTS, {
                            id: e
                        })
                    }.bind(this)) : this._bus.emit(A.REMOVE_FOCUS_INTERCEPTS))
                }, U.prototype._attachInvalidFieldContainersToError = function(e) {
                    e.details && e.details.invalidFieldKeys && e.details.invalidFieldKeys.length > 0 && (e.details.invalidFields = {}, e.details.invalidFieldKeys.forEach(function(t) {
                        e.details.invalidFields[t] = this._fields[t].containerElement
                    }.bind(this)))
                }, U.prototype.getChallenges = function() {
                    return this._clientPromise.then((function(e) {
                        return e.getConfiguration().gatewayConfiguration.challenges
                    }))
                }, U.prototype.getSupportedCardTypes = function() {
                    return this._clientPromise.then((function(e) {
                        return e.getConfiguration().gatewayConfiguration.creditCards.supportedCardTypes.map((function(e) {
                            return "MasterCard" === e ? "Mastercard" : e
                        }))
                    }))
                }, U.prototype.teardown = function() {
                    var e = this;
                    return new Promise((function(t, n) {
                        e._destructor.teardown((function(r) {
                            N.sendEvent(e._clientPromise, "custom.hosted-fields.teardown-completed"), r ? n(r) : t()
                        }))
                    }))
                }, U.prototype.tokenize = function(e) {
                    var t = this;
                    return e || (e = {}), new Promise((function(n, r) {
                        t._bus.emit(A.TOKENIZATION_REQUEST, e, (function(e) {
                            var i = e[0],
                                o = e[1];
                            i ? (t._attachInvalidFieldContainersToError(i), r(new l(i))) : n(o)
                        }))
                    }))
                }, U.prototype.addClass = function(e, t) {
                    var n;
                    return O.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(A.ADD_CLASS, {
                        field: e,
                        classname: t
                    }) : n = new l({
                        type: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                        code: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                        message: 'Cannot add class to "' + e + '" field because it is not part of the current Hosted Fields options.'
                    }) : n = new l({
                        type: E.HOSTED_FIELDS_FIELD_INVALID.type,
                        code: E.HOSTED_FIELDS_FIELD_INVALID.code,
                        message: '"' + e + '" is not a valid field. You must use a valid field option when adding a class.'
                    }), n ? Promise.reject(n) : Promise.resolve()
                }, U.prototype.removeClass = function(e, t) {
                    var n;
                    return O.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(A.REMOVE_CLASS, {
                        field: e,
                        classname: t
                    }) : n = new l({
                        type: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                        code: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                        message: 'Cannot remove class from "' + e + '" field because it is not part of the current Hosted Fields options.'
                    }) : n = new l({
                        type: E.HOSTED_FIELDS_FIELD_INVALID.type,
                        code: E.HOSTED_FIELDS_FIELD_INVALID.code,
                        message: '"' + e + '" is not a valid field. You must use a valid field option when removing a class.'
                    }), n ? Promise.reject(n) : Promise.resolve()
                }, U.prototype.setAttribute = function(e) {
                    var t, n;
                    return O.hasOwnProperty(e.field) ? this._fields.hasOwnProperty(e.field) ? (t = S(e.attribute, e.value)) ? n = t : this._bus.emit(A.SET_ATTRIBUTE, {
                        field: e.field,
                        attribute: e.attribute,
                        value: e.value
                    }) : n = new l({
                        type: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                        code: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                        message: 'Cannot set attribute for "' + e.field + '" field because it is not part of the current Hosted Fields options.'
                    }) : n = new l({
                        type: E.HOSTED_FIELDS_FIELD_INVALID.type,
                        code: E.HOSTED_FIELDS_FIELD_INVALID.code,
                        message: '"' + e.field + '" is not a valid field. You must use a valid field option when setting an attribute.'
                    }), n ? Promise.reject(n) : Promise.resolve()
                }, U.prototype.setMonthOptions = function(e) {
                    var t, n = this,
                        r = this._merchantConfigurationOptions.fields;
                    return r.expirationMonth ? r.expirationMonth.select || (t = "Expiration month field must be a select element.") : t = "Expiration month field must exist to use setMonthOptions.", t ? Promise.reject(new l({
                        type: E.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
                        code: E.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
                        message: t
                    })) : new Promise((function(t) {
                        n._bus.emit(A.SET_MONTH_OPTIONS, e, t)
                    }))
                }, U.prototype.setMessage = function(e) {
                    this._bus.emit(A.SET_MESSAGE, {
                        field: e.field,
                        message: e.message
                    })
                }, U.prototype.removeAttribute = function(e) {
                    var t, n;
                    return O.hasOwnProperty(e.field) ? this._fields.hasOwnProperty(e.field) ? (t = S(e.attribute)) ? n = t : this._bus.emit(A.REMOVE_ATTRIBUTE, {
                        field: e.field,
                        attribute: e.attribute
                    }) : n = new l({
                        type: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                        code: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                        message: 'Cannot remove attribute for "' + e.field + '" field because it is not part of the current Hosted Fields options.'
                    }) : n = new l({
                        type: E.HOSTED_FIELDS_FIELD_INVALID.type,
                        code: E.HOSTED_FIELDS_FIELD_INVALID.code,
                        message: '"' + e.field + '" is not a valid field. You must use a valid field option when removing an attribute.'
                    }), n ? Promise.reject(n) : Promise.resolve()
                }, U.prototype.setPlaceholder = function(e, t) {
                    return this.setAttribute({
                        field: e,
                        attribute: "placeholder",
                        value: t
                    })
                }, U.prototype.clear = function(e) {
                    var t;
                    return O.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(A.CLEAR_FIELD, {
                        field: e
                    }) : t = new l({
                        type: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                        code: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                        message: 'Cannot clear "' + e + '" field because it is not part of the current Hosted Fields options.'
                    }) : t = new l({
                        type: E.HOSTED_FIELDS_FIELD_INVALID.type,
                        code: E.HOSTED_FIELDS_FIELD_INVALID.code,
                        message: '"' + e + '" is not a valid field. You must use a valid field option when clearing a field.'
                    }), t ? Promise.reject(t) : Promise.resolve()
                }, U.prototype.focus = function(e) {
                    var t, n = this._fields[e];
                    return O.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? (n.frameElement.focus(), this._bus.emit(A.TRIGGER_INPUT_FOCUS, {
                        field: e
                    }), y.isIos() && setTimeout((function() {
                        var e, t, r, i;
                        e = n.containerElement, t = e.getBoundingClientRect(), r = Math.floor(t.height / 2), i = Math.floor(t.width / 2), t.top < (window.innerHeight - r || document.documentElement.clientHeight - r) && t.right > i && t.bottom > r && t.left < (window.innerWidth - i || document.documentElement.clientWidth - i) || n.containerElement.scrollIntoView()
                    }), 5)) : t = new l({
                        type: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                        code: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                        message: 'Cannot focus "' + e + '" field because it is not part of the current Hosted Fields options.'
                    }) : t = new l({
                        type: E.HOSTED_FIELDS_FIELD_INVALID.type,
                        code: E.HOSTED_FIELDS_FIELD_INVALID.code,
                        message: '"' + e + '" is not a valid field. You must use a valid field option when focusing a field.'
                    }), t ? Promise.reject(t) : Promise.resolve()
                }, U.prototype.getState = function() {
                    return this._state
                }, t.exports = D.wrapPrototype(U)
            }, {
                "../../lib/analytics": 116,
                "../../lib/assign": 118,
                "../../lib/braintree-error": 121,
                "../../lib/constants": 123,
                "../../lib/convert-methods-to-error": 124,
                "../../lib/create-assets-url": 126,
                "../../lib/create-deferred-client": 128,
                "../../lib/destructor": 130,
                "../../lib/errors": 132,
                "../../lib/find-root-node": 133,
                "../../lib/is-verified-domain": 150,
                "../../lib/methods": 152,
                "../../lib/shadow": 155,
                "../shared/browser-detection": 108,
                "../shared/constants": 109,
                "../shared/errors": 110,
                "../shared/find-parent-tags": 111,
                "../shared/focus-intercept": 112,
                "../shared/get-card-types": 113,
                "./attribute-validation-error": 101,
                "./compose-url": 102,
                "./focus-change": 103,
                "./get-styles-from-class": 104,
                "./inject-frame": 106,
                "@braintree/event-emitter": 32,
                "@braintree/iframer": 34,
                "@braintree/uuid": 38,
                "@braintree/wrap-promise": 42,
                framebus: 51
            }],
            106: [function(e, t, n) {
                var r = e("../shared/focus-intercept"),
                    i = e("../shared/constants").navigationDirections;
                t.exports = function(e, t, n, o) {
                    var a = t.getAttribute("type"),
                        s = document.createElement("div"),
                        c = document.createDocumentFragment(),
                        d = r.generate(e, a, i.BACK, o),
                        l = r.generate(e, a, i.FORWARD, o);
                    return s.style.clear = "both", c.appendChild(d), c.appendChild(t), c.appendChild(l), c.appendChild(s), n.appendChild(c), [t, s]
                }
            }, {
                "../shared/constants": 109,
                "../shared/focus-intercept": 112
            }],
            107: [function(e, t, n) {
                var r = e("./external/hosted-fields"),
                    i = e("../lib/basic-component-verification"),
                    o = e("./shared/errors"),
                    a = e("restricted-input/supports-input-formatting"),
                    s = e("@braintree/wrap-promise"),
                    c = e("../lib/braintree-error");
                t.exports = {
                    supportsInputFormatting: a,
                    create: s((function(e) {
                        return i.verify({
                            name: "Hosted Fields",
                            authorization: e.authorization,
                            client: e.client
                        }).then((function() {
                            var t = new r(e);
                            return new Promise((function(e, n) {
                                t.on("ready", (function() {
                                    e(t)
                                })), t.on("timeout", (function() {
                                    n(new c(o.HOSTED_FIELDS_TIMEOUT))
                                }))
                            }))
                        }))
                    })),
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/basic-component-verification": 119,
                "../lib/braintree-error": 121,
                "./external/hosted-fields": 105,
                "./shared/errors": 110,
                "@braintree/wrap-promise": 42,
                "restricted-input/supports-input-formatting": 68
            }],
            108: [function(e, t, n) {
                var r = e("@braintree/browser-detection/is-android"),
                    i = e("@braintree/browser-detection/is-chrome-os"),
                    o = e("@braintree/browser-detection/is-ios"),
                    a = e("@braintree/browser-detection/is-chrome");
                t.exports = {
                    isAndroid: r,
                    isChromeOS: i,
                    isChromeIos: function() {
                        return a() && o()
                    },
                    isFirefox: e("@braintree/browser-detection/is-firefox"),
                    isIos: o,
                    isIosWebview: e("@braintree/browser-detection/is-ios-webview"),
                    hasSoftwareKeyboard: function() {
                        return r() || i() || o()
                    }
                }
            }, {
                "@braintree/browser-detection/is-android": 21,
                "@braintree/browser-detection/is-chrome": 23,
                "@braintree/browser-detection/is-chrome-os": 22,
                "@braintree/browser-detection/is-firefox": 24,
                "@braintree/browser-detection/is-ios": 29,
                "@braintree/browser-detection/is-ios-webview": 27
            }],
            109: [function(e, t, n) {
                var r = e("../../lib/enumerate"),
                    i = e("./errors"),
                    o = {
                        VERSION: "3.94.0",
                        maxExpirationYearAge: 19,
                        externalEvents: {
                            FOCUS: "focus",
                            BLUR: "blur",
                            EMPTY: "empty",
                            NOT_EMPTY: "notEmpty",
                            VALIDITY_CHANGE: "validityChange",
                            CARD_TYPE_CHANGE: "cardTypeChange"
                        },
                        defaultMaxLengths: {
                            number: 19,
                            postalCode: 8,
                            expirationDate: 7,
                            expirationMonth: 2,
                            expirationYear: 4,
                            cvv: 3
                        },
                        externalClasses: {
                            FOCUSED: "braintree-hosted-fields-focused",
                            INVALID: "braintree-hosted-fields-invalid",
                            VALID: "braintree-hosted-fields-valid"
                        },
                        navigationDirections: {
                            BACK: "before",
                            FORWARD: "after"
                        },
                        defaultIFrameStyle: {
                            border: "none",
                            width: "100%",
                            height: "100%",
                            float: "left"
                        },
                        tokenizationErrorCodes: {
                            81724: i.HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE,
                            81736: i.HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED
                        },
                        allowedStyles: ["-moz-appearance", "-moz-box-shadow", "-moz-osx-font-smoothing", "-moz-tap-highlight-color", "-moz-transition", "-webkit-appearance", "-webkit-box-shadow", "-webkit-font-smoothing", "-webkit-tap-highlight-color", "-webkit-transition", "appearance", "box-shadow", "color", "direction", "font", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-weight", "letter-spacing", "line-height", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "opacity", "outline", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left", "text-align", "text-shadow", "transition"],
                        allowedFields: {
                            cardholderName: {
                                name: "cardholder-name",
                                label: "Cardholder Name"
                            },
                            number: {
                                name: "credit-card-number",
                                label: "Credit Card Number"
                            },
                            cvv: {
                                name: "cvv",
                                label: "CVV"
                            },
                            expirationDate: {
                                name: "expiration",
                                label: "Expiration Date"
                            },
                            expirationMonth: {
                                name: "expiration-month",
                                label: "Expiration Month"
                            },
                            expirationYear: {
                                name: "expiration-year",
                                label: "Expiration Year"
                            },
                            postalCode: {
                                name: "postal-code",
                                label: "Postal Code"
                            }
                        },
                        allowedAttributes: {
                            "aria-invalid": "boolean",
                            "aria-required": "boolean",
                            disabled: "boolean",
                            placeholder: "string"
                        },
                        autocompleteMappings: {
                            "cardholder-name": "cc-name",
                            "credit-card-number": "cc-number",
                            expiration: "cc-exp",
                            "expiration-month": "cc-exp-month",
                            "expiration-year": "cc-exp-year",
                            cvv: "cc-csc",
                            "postal-code": "billing postal-code"
                        }
                    };
                o.events = r(["ADD_CLASS", "AUTOFILL_DATA_AVAILABLE", "BIN_AVAILABLE", "CARD_FORM_ENTRY_HAS_BEGUN", "CLEAR_FIELD", "CONFIGURATION", "FRAME_READY", "INPUT_EVENT", "READY_FOR_CLIENT", "REMOVE_ATTRIBUTE", "REMOVE_CLASS", "REMOVE_FOCUS_INTERCEPTS", "SET_ATTRIBUTE", "SET_MESSAGE", "SET_MONTH_OPTIONS", "TOKENIZATION_REQUEST", "TRIGGER_FOCUS_CHANGE", "TRIGGER_INPUT_FOCUS", "VALIDATE_STRICT"], "hosted-fields:"), t.exports = o
            }, {
                "../../lib/enumerate": 131,
                "./errors": 110
            }],
            110: [function(e, t, n) {
                var r = e("../../lib/braintree-error");
                t.exports = {
                    HOSTED_FIELDS_TIMEOUT: {
                        type: r.types.UNKNOWN,
                        code: "HOSTED_FIELDS_TIMEOUT",
                        message: "Hosted Fields timed out when attempting to set up."
                    },
                    HOSTED_FIELDS_INVALID_FIELD_KEY: {
                        type: r.types.MERCHANT,
                        code: "HOSTED_FIELDS_INVALID_FIELD_KEY"
                    },
                    HOSTED_FIELDS_INVALID_FIELD_SELECTOR: {
                        type: r.types.MERCHANT,
                        code: "HOSTED_FIELDS_INVALID_FIELD_SELECTOR",
                        message: "Selector does not reference a valid DOM node."
                    },
                    HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME: {
                        type: r.types.MERCHANT,
                        code: "HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME",
                        message: "Element already contains a Braintree iframe."
                    },
                    HOSTED_FIELDS_FIELD_INVALID: {
                        type: r.types.MERCHANT,
                        code: "HOSTED_FIELDS_FIELD_INVALID"
                    },
                    HOSTED_FIELDS_FIELD_NOT_PRESENT: {
                        type: r.types.MERCHANT,
                        code: "HOSTED_FIELDS_FIELD_NOT_PRESENT"
                    },
                    HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR: {
                        type: r.types.NETWORK,
                        code: "HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR",
                        message: "A tokenization network error occurred."
                    },
                    HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE: {
                        type: r.types.CUSTOMER,
                        code: "HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE",
                        message: "This credit card already exists in the merchant's vault."
                    },
                    HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED: {
                        type: r.types.CUSTOMER,
                        code: "HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED",
                        message: "CVV verification failed during tokenization."
                    },
                    HOSTED_FIELDS_FAILED_TOKENIZATION: {
                        type: r.types.CUSTOMER,
                        code: "HOSTED_FIELDS_FAILED_TOKENIZATION",
                        message: "The supplied card data failed tokenization."
                    },
                    HOSTED_FIELDS_FIELDS_EMPTY: {
                        type: r.types.CUSTOMER,
                        code: "HOSTED_FIELDS_FIELDS_EMPTY",
                        message: "All fields are empty. Cannot tokenize empty card fields."
                    },
                    HOSTED_FIELDS_FIELDS_INVALID: {
                        type: r.types.CUSTOMER,
                        code: "HOSTED_FIELDS_FIELDS_INVALID",
                        message: "Some payment input fields are invalid. Cannot tokenize invalid card fields."
                    },
                    HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED: {
                        type: r.types.MERCHANT,
                        code: "HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED"
                    },
                    HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED: {
                        type: r.types.MERCHANT,
                        code: "HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED"
                    },
                    HOSTED_FIELDS_FIELD_PROPERTY_INVALID: {
                        type: r.types.MERCHANT,
                        code: "HOSTED_FIELDS_FIELD_PROPERTY_INVALID"
                    }
                }
            }, {
                "../../lib/braintree-error": 121
            }],
            111: [function(e, t, n) {
                t.exports = function(e, t) {
                    for (var n = e.parentNode, r = []; null != n;) null != n.tagName && n.tagName.toLowerCase() === t && r.push(n), n = n.parentNode;
                    return r
                }
            }, {}],
            112: [function(e, t, n) {
                var r = e("./browser-detection"),
                    i = e("./constants"),
                    o = Object.keys(i.allowedFields),
                    a = i.navigationDirections,
                    s = {
                        generate: function(e, t, n, i) {
                            var o = document.createElement("input");
                            return r.hasSoftwareKeyboard() || r.isFirefox() ? (o.setAttribute("aria-hidden", "true"), o.setAttribute("autocomplete", "off"), o.setAttribute("data-braintree-direction", n), o.setAttribute("data-braintree-type", t), o.setAttribute("id", "bt-" + t + "-" + n + "-" + e), o.setAttribute("style", JSON.stringify({
                                border: "none !important",
                                display: "block !important",
                                height: "1px !important",
                                left: "-1px !important",
                                opacity: "0 !important",
                                position: "absolute !important",
                                top: "-1px !important",
                                width: "1px !important"
                            }).replace(/[{}"]/g, "").replace(/,/g, ";")), o.classList.add("focus-intercept"), o.addEventListener("focus", (function(e) {
                                i(e), r.hasSoftwareKeyboard() || o.blur()
                            })), o) : document.createDocumentFragment()
                        },
                        destroy: function(e) {
                            var t;
                            e ? t = [document.getElementById(e)] : (t = document.querySelectorAll("[data-braintree-direction]"), t = [].slice.call(t)), t.forEach((function(e) {
                                e && 1 === e.nodeType && s.matchFocusElement(e.getAttribute("id")) && e.parentNode.removeChild(e)
                            }))
                        },
                        matchFocusElement: function(e) {
                            var t, n, r, i;
                            return !!e && (!((t = e.split("-")).length < 4) && (n = "bt" === t[0], r = o.indexOf(t[1]) > -1, i = t[2] === a.BACK || t[2] === a.FORWARD, Boolean(n && r && i)))
                        }
                    };
                t.exports = s
            }, {
                "./browser-detection": 108,
                "./constants": 109
            }],
            113: [function(e, t, n) {
                var r = e("credit-card-type");
                t.exports = function(e) {
                    var t = r(e);
                    return t.forEach((function(e) {
                        "mastercard" === e.type && (e.type = "master-card")
                    })), t
                }
            }, {
                "credit-card-type": 43
            }],
            114: [function(e, t, n) {
                var r = e("./american-express"),
                    i = e("./apple-pay"),
                    o = e("./client"),
                    a = e("./data-collector"),
                    s = e("./hosted-fields"),
                    c = e("./local-payment"),
                    d = e("./masterpass"),
                    l = e("./payment-request"),
                    u = e("./paypal"),
                    p = e("./paypal-checkout"),
                    _ = e("./google-payment"),
                    E = e("./sepa"),
                    h = e("./three-d-secure"),
                    m = e("./unionpay"),
                    f = e("./us-bank-account"),
                    y = e("./vault-manager"),
                    A = e("./venmo"),
                    T = e("./visa-checkout"),
                    I = e("./preferred-payment-methods");
                t.exports = {
                    americanExpress: r,
                    applePay: i,
                    client: o,
                    dataCollector: a,
                    hostedFields: s,
                    localPayment: c,
                    masterpass: d,
                    googlePayment: _,
                    paymentRequest: l,
                    paypal: u,
                    paypalCheckout: p,
                    threeDSecure: h,
                    unionpay: m,
                    usBankAccount: f,
                    vaultManager: y,
                    venmo: A,
                    visaCheckout: T,
                    sepa: E,
                    preferredPaymentMethods: I,
                    VERSION: "3.94.0"
                }
            }, {
                "./american-express": 71,
                "./apple-pay": 74,
                "./client": 79,
                "./data-collector": 95,
                "./google-payment": 100,
                "./hosted-fields": 107,
                "./local-payment": 161,
                "./masterpass": 164,
                "./payment-request": 169,
                "./paypal": 176,
                "./paypal-checkout": 173,
                "./preferred-payment-methods": 179,
                "./sepa": 183,
                "./three-d-secure": 195,
                "./unionpay": 199,
                "./us-bank-account": 205,
                "./vault-manager": 208,
                "./venmo": 213,
                "./visa-checkout": 223
            }],
            115: [function(e, t, n) {
                var r = e("./create-authorization-data"),
                    i = e("./json-clone"),
                    o = e("./constants");
                t.exports = function(e, t) {
                    var n, a = t ? i(t) : {},
                        s = r(e.authorization).attrs,
                        c = i(e.analyticsMetadata);
                    for (n in a.braintreeLibraryVersion = o.BRAINTREE_LIBRARY_VERSION, a._meta) a._meta.hasOwnProperty(n) && (c[n] = a._meta[n]);
                    return a._meta = c, s.tokenizationKey ? a.tokenizationKey = s.tokenizationKey : a.authorizationFingerprint = s.authorizationFingerprint, a
                }
            }, {
                "./constants": 123,
                "./create-authorization-data": 127,
                "./json-clone": 151
            }],
            116: [function(e, t, n) {
                var r = e("./constants"),
                    i = e("./add-metadata");
                t.exports = {
                    sendEvent: function(e, t, n) {
                        var o = Date.now();
                        return Promise.resolve(e).then((function(e) {
                            var a = Date.now(),
                                s = e.getConfiguration(),
                                c = e._request,
                                d = s.gatewayConfiguration.analytics.url,
                                l = {
                                    analytics: [{
                                        kind: r.ANALYTICS_PREFIX + t,
                                        isAsync: Math.floor(a / 1e3) !== Math.floor(o / 1e3),
                                        timestamp: o
                                    }]
                                };
                            c({
                                url: d,
                                method: "post",
                                data: i(s, l),
                                timeout: r.ANALYTICS_REQUEST_TIMEOUT_MS
                            }, n)
                        })).catch((function(e) {
                            n && n(e)
                        }))
                    }
                }
            }, {
                "./add-metadata": 115,
                "./constants": 123
            }],
            117: [function(e, t, n) {
                var r = e("@braintree/asset-loader/load-script");
                t.exports = {
                    loadScript: r
                }
            }, {
                "@braintree/asset-loader/load-script": 3
            }],
            118: [function(e, t, n) {
                var r = "function" == typeof Object.assign ? Object.assign : i;

                function i(e) {
                    var t, n, r;
                    for (t = 1; t < arguments.length; t++)
                        for (r in n = arguments[t]) n.hasOwnProperty(r) && (e[r] = n[r]);
                    return e
                }
                t.exports = {
                    assign: r,
                    _assign: i
                }
            }, {}],
            119: [function(e, t, n) {
                var r = e("./braintree-error"),
                    i = e("./errors"),
                    o = "3.94.0";
                t.exports = {
                    verify: function(e) {
                        var t, n, a;
                        return e ? (a = e.name, t = e.client, n = e.authorization, t || n ? n || t.getVersion() === o ? Promise.resolve() : Promise.reject(new r({
                            type: i.INCOMPATIBLE_VERSIONS.type,
                            code: i.INCOMPATIBLE_VERSIONS.code,
                            message: "Client (version " + t.getVersion() + ") and " + a + " (version " + o + ") components must be from the same SDK version."
                        })) : Promise.reject(new r({
                            type: i.INSTANTIATION_OPTION_REQUIRED.type,
                            code: i.INSTANTIATION_OPTION_REQUIRED.code,
                            message: "options.client is required when instantiating " + a + "."
                        }))) : Promise.reject(new r({
                            type: i.INVALID_USE_OF_INTERNAL_FUNCTION.type,
                            code: i.INVALID_USE_OF_INTERNAL_FUNCTION.code,
                            message: "Options must be passed to basicComponentVerification function."
                        }))
                    }
                }
            }, {
                "./braintree-error": 121,
                "./errors": 132
            }],
            120: [function(e, t, n) {
                var r = e("./once");

                function i(e, t) {
                    0 === e.length ? (e(), t(null)) : e(t)
                }
                t.exports = function(e, t) {
                    var n, o = e.length,
                        a = o,
                        s = r(t);
                    if (0 !== o)
                        for (n = 0; n < o; n++) i(e[n], c);
                    else s(null);

                    function c(e) {
                        e ? s(e) : 0 === (a -= 1) && s(null)
                    }
                }
            }, {
                "./once": 153
            }],
            121: [function(e, t, n) {
                var r = e("./enumerate");

                function i(e) {
                    if (!i.types.hasOwnProperty(e.type)) throw new Error(e.type + " is not a valid type.");
                    if (!e.code) throw new Error("Error code required.");
                    if (!e.message) throw new Error("Error message required.");
                    this.name = "BraintreeError", this.code = e.code, this.message = e.message, this.type = e.type, this.details = e.details
                }
                i.prototype = Object.create(Error.prototype), i.prototype.constructor = i, i.types = r(["CUSTOMER", "MERCHANT", "NETWORK", "INTERNAL", "UNKNOWN"]), i.findRootError = function(e) {
                    return e instanceof i && e.details && e.details.originalError ? i.findRootError(e.details.originalError) : e
                }, t.exports = i
            }, {
                "./enumerate": 131
            }],
            122: [function(e, t, n) {
                function r(e) {
                    return e.replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1_$2").toLowerCase()
                }
                t.exports = function(e) {
                    return Object.keys(e).reduce((function(t, n) {
                        return t[r(n)] = e[n], t
                    }), {})
                }
            }, {}],
            123: [function(e, t, n) {
                t.exports = {
                    ANALYTICS_PREFIX: "web.",
                    ANALYTICS_REQUEST_TIMEOUT_MS: 2e3,
                    ASSETS_URLS: {
                        production: "https://assets.braintreegateway.com",
                        sandbox: "https://assets.braintreegateway.com"
                    },
                    CLIENT_API_URLS: {
                        production: "https://api.braintreegateway.com:443",
                        sandbox: "https://api.sandbox.braintreegateway.com:443"
                    },
                    FRAUDNET_SOURCE: "BRAINTREE_SIGNIN",
                    FRAUDNET_FNCLS: "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",
                    FRAUDNET_URL: "https://c.paypal.com/da/r/fb.js",
                    BUS_CONFIGURATION_REQUEST_EVENT: "BUS_CONFIGURATION_REQUEST",
                    GRAPHQL_URLS: {
                        production: "https://payments.braintree-api.com/graphql",
                        sandbox: "https://payments.sandbox.braintree-api.com/graphql"
                    },
                    INTEGRATION_TIMEOUT_MS: 6e4,
                    VERSION: "3.94.0",
                    INTEGRATION: "custom",
                    SOURCE: "client",
                    PLATFORM: "web",
                    BRAINTREE_LIBRARY_VERSION: "braintree/web/3.94.0"
                }
            }, {}],
            124: [function(e, t, n) {
                var r = e("./braintree-error"),
                    i = e("./errors");
                t.exports = function(e, t) {
                    t.forEach((function(t) {
                        e[t] = function() {
                            throw new r({
                                type: i.METHOD_CALLED_AFTER_TEARDOWN.type,
                                code: i.METHOD_CALLED_AFTER_TEARDOWN.code,
                                message: t + " cannot be called after teardown."
                            })
                        }
                    }))
                }
            }, {
                "./braintree-error": 121,
                "./errors": 132
            }],
            125: [function(e, t, n) {
                var r = e("./braintree-error");
                t.exports = function(e, t) {
                    return e instanceof r ? e : new r({
                        type: t.type,
                        code: t.code,
                        message: t.message,
                        details: {
                            originalError: e
                        }
                    })
                }
            }, {
                "./braintree-error": 121
            }],
            126: [function(e, t, n) {
                var r = e("./constants").ASSETS_URLS;
                t.exports = {
                    create: function(e) {
                        return r.production
                    }
                }
            }, {
                "./constants": 123
            }],
            127: [function(e, t, n) {
                var r = e("../lib/vendor/polyfill").atob,
                    i = e("../lib/constants").CLIENT_API_URLS;
                t.exports = function(e) {
                    var t, n, o, a, s = {
                        attrs: {},
                        configUrl: ""
                    };
                    return /^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e) ? (o = e.split("_"), a = o[0], n = {
                        merchantId: o.slice(2).join("_"),
                        environment: a
                    }, s.environment = n.environment, s.attrs.tokenizationKey = e, s.configUrl = i[n.environment] + "/merchants/" + n.merchantId + "/client_api/v1/configuration") : (t = JSON.parse(r(e)), s.environment = t.environment, s.attrs.authorizationFingerprint = t.authorizationFingerprint, s.configUrl = t.configUrl, s.graphQL = t.graphQL), s
                }
            }, {
                "../lib/constants": 123,
                "../lib/vendor/polyfill": 158
            }],
            128: [function(e, t, n) {
                var r = e("./braintree-error"),
                    i = e("./assets"),
                    o = e("./errors"),
                    a = "3.94.0";
                t.exports = {
                    create: function(e) {
                        var t = Promise.resolve();
                        return e.client ? Promise.resolve(e.client) : (window.braintree && window.braintree.client || (t = i.loadScript({
                            src: e.assetsUrl + "/web/" + a + "/js/client.min.js"
                        }).catch((function(e) {
                            return Promise.reject(new r({
                                type: o.CLIENT_SCRIPT_FAILED_TO_LOAD.type,
                                code: o.CLIENT_SCRIPT_FAILED_TO_LOAD.code,
                                message: o.CLIENT_SCRIPT_FAILED_TO_LOAD.message,
                                details: {
                                    originalError: e
                                }
                            }))
                        }))), t.then((function() {
                            return window.braintree.client.VERSION !== a ? Promise.reject(new r({
                                type: o.INCOMPATIBLE_VERSIONS.type,
                                code: o.INCOMPATIBLE_VERSIONS.code,
                                message: "Client (version " + window.braintree.client.VERSION + ") and " + e.name + " (version " + a + ") components must be from the same SDK version."
                            })) : window.braintree.client.create({
                                authorization: e.authorization,
                                debug: e.debug
                            })
                        })))
                    }
                }
            }, {
                "./assets": 117,
                "./braintree-error": 121,
                "./errors": 132
            }],
            129: [function(e, t, n) {
                t.exports = function(e) {
                    return function() {
                        var t = arguments;
                        setTimeout((function() {
                            e.apply(null, t)
                        }), 1)
                    }
                }
            }, {}],
            130: [function(e, t, n) {
                var r = e("./batch-execute-functions");

                function i() {
                    this._teardownRegistry = [], this._isTearingDown = !1
                }
                i.prototype.registerFunctionForTeardown = function(e) {
                    "function" == typeof e && this._teardownRegistry.push(e)
                }, i.prototype.teardown = function(e) {
                    this._isTearingDown ? e(new Error("Destructor is already tearing down")) : (this._isTearingDown = !0, r(this._teardownRegistry, function(t) {
                        this._teardownRegistry = [], this._isTearingDown = !1, "function" == typeof e && e(t)
                    }.bind(this)))
                }, t.exports = i
            }, {
                "./batch-execute-functions": 120
            }],
            131: [function(e, t, n) {
                t.exports = function(e, t) {
                    return t = null == t ? "" : t, e.reduce((function(e, n) {
                        return e[n] = t + n, e
                    }), {})
                }
            }, {}],
            132: [function(e, t, n) {
                var r = e("./braintree-error");
                t.exports = {
                    INVALID_USE_OF_INTERNAL_FUNCTION: {
                        type: r.types.INTERNAL,
                        code: "INVALID_USE_OF_INTERNAL_FUNCTION"
                    },
                    INSTANTIATION_OPTION_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: "INSTANTIATION_OPTION_REQUIRED"
                    },
                    INCOMPATIBLE_VERSIONS: {
                        type: r.types.MERCHANT,
                        code: "INCOMPATIBLE_VERSIONS"
                    },
                    CLIENT_SCRIPT_FAILED_TO_LOAD: {
                        type: r.types.NETWORK,
                        code: "CLIENT_SCRIPT_FAILED_TO_LOAD",
                        message: "Braintree client script could not be loaded."
                    },
                    METHOD_CALLED_AFTER_TEARDOWN: {
                        type: r.types.MERCHANT,
                        code: "METHOD_CALLED_AFTER_TEARDOWN"
                    }
                }
            }, {
                "./braintree-error": 121
            }],
            133: [function(e, t, n) {
                t.exports = function(e) {
                    for (; e.parentNode;) e = e.parentNode;
                    return e
                }
            }, {}],
            134: [function(e, t, n) {
                t.exports = function(e, t, n) {
                    var r;
                    for (r = 0; r < e.length; r++)
                        if (e[r].hasOwnProperty(t) && e[r][t] === n) return e[r];
                    return null
                }
            }, {}],
            135: [function(e, t, n) {
                var r = e("./strategies/popup"),
                    i = e("./strategies/popup-bridge"),
                    o = e("./strategies/modal"),
                    a = e("framebus"),
                    s = e("../shared/events"),
                    c = e("../shared/errors"),
                    d = e("../shared/constants"),
                    l = e("@braintree/uuid"),
                    u = e("@braintree/iframer"),
                    p = e("../../braintree-error"),
                    _ = e("../shared/browser-detection"),
                    E = e("./../../assign").assign,
                    h = e("../../constants").BUS_CONFIGURATION_REQUEST_EVENT,
                    m = ["name", "dispatchFrameUrl", "openFrameUrl"];

                function f() {}

                function y(e) {
                    if (!e) throw new Error("Valid configuration is required");
                    if (m.forEach((function(t) {
                            if (!e.hasOwnProperty(t)) throw new Error("A valid frame " + t + " must be provided")
                        })), !/^[\w_]+$/.test(e.name)) throw new Error("A valid frame name must be provided")
                }

                function A(e) {
                    y(e), this._serviceId = l().replace(/-/g, ""), this._options = {
                        name: e.name + "_" + this._serviceId,
                        dispatchFrameUrl: e.dispatchFrameUrl,
                        openFrameUrl: e.openFrameUrl,
                        height: e.height,
                        width: e.width,
                        top: e.top,
                        left: e.left
                    }, this.state = e.state || {}, this._bus = new a({
                        channel: this._serviceId
                    }), this._setBusEvents()
                }
                A.prototype.initialize = function(e) {
                    var t = function() {
                        e(), this._bus.off(s.DISPATCH_FRAME_READY, t)
                    }.bind(this);
                    this._bus.on(s.DISPATCH_FRAME_READY, t), this._writeDispatchFrame()
                }, A.prototype._writeDispatchFrame = function() {
                    var e = d.DISPATCH_FRAME_NAME + "_" + this._serviceId,
                        t = this._options.dispatchFrameUrl;
                    this._dispatchFrame = u({
                        "aria-hidden": !0,
                        name: e,
                        title: e,
                        src: t,
                        class: d.DISPATCH_FRAME_CLASS,
                        height: 0,
                        width: 0,
                        style: {
                            position: "absolute",
                            left: "-9999px"
                        }
                    }), document.body.appendChild(this._dispatchFrame)
                }, A.prototype._setBusEvents = function() {
                    this._bus.on(s.DISPATCH_FRAME_REPORT, function(e, t) {
                        this._onCompleteCallback && this._onCompleteCallback.call(null, e.err, e.payload), this._frame.close(), this._onCompleteCallback = null, t && t()
                    }.bind(this)), this._bus.on(h, function(e) {
                        e(this.state)
                    }.bind(this))
                }, A.prototype.open = function(e, t) {
                    if (e = e || {}, this._frame = this._getFrameForEnvironment(e), this._frame.initialize(t), !(this._frame instanceof i)) {
                        if (E(this.state, e.state), this._onCompleteCallback = t, this._frame.open(), this.isFrameClosed()) return this._cleanupFrame(), void(t && t(new p(c.FRAME_SERVICE_FRAME_OPEN_FAILED)));
                        this._pollForPopupClose()
                    }
                }, A.prototype.redirect = function(e) {
                    this._frame && !this.isFrameClosed() && this._frame.redirect(e)
                }, A.prototype.close = function() {
                    this.isFrameClosed() || this._frame.close()
                }, A.prototype.focus = function() {
                    this.isFrameClosed() || this._frame.focus()
                }, A.prototype.createHandler = function(e) {
                    return e = e || {}, {
                        close: function() {
                            e.beforeClose && e.beforeClose(), this.close()
                        }.bind(this),
                        focus: function() {
                            e.beforeFocus && e.beforeFocus(), this.focus()
                        }.bind(this)
                    }
                }, A.prototype.createNoopHandler = function() {
                    return {
                        close: f,
                        focus: f
                    }
                }, A.prototype.teardown = function() {
                    this.close(), this._dispatchFrame.parentNode.removeChild(this._dispatchFrame), this._dispatchFrame = null, this._cleanupFrame()
                }, A.prototype.isFrameClosed = function() {
                    return null == this._frame || this._frame.isClosed()
                }, A.prototype._cleanupFrame = function() {
                    this._frame = null, clearInterval(this._popupInterval), this._popupInterval = null
                }, A.prototype._pollForPopupClose = function() {
                    return this._popupInterval = setInterval(function() {
                        this.isFrameClosed() && (this._cleanupFrame(), this._onCompleteCallback && this._onCompleteCallback(new p(c.FRAME_SERVICE_FRAME_CLOSED)))
                    }.bind(this), d.POPUP_POLL_INTERVAL), this._popupInterval
                }, A.prototype._getFrameForEnvironment = function(e) {
                    var t = _.supportsPopups(),
                        n = Boolean(window.popupBridge),
                        a = E({}, this._options, e);
                    return n ? new i(a) : t ? new r(a) : new o(a)
                }, t.exports = A
            }, {
                "../../braintree-error": 121,
                "../../constants": 123,
                "../shared/browser-detection": 142,
                "../shared/constants": 143,
                "../shared/errors": 144,
                "../shared/events": 145,
                "./../../assign": 118,
                "./strategies/modal": 137,
                "./strategies/popup": 140,
                "./strategies/popup-bridge": 138,
                "@braintree/iframer": 34,
                "@braintree/uuid": 38,
                framebus: 51
            }],
            136: [function(e, t, n) {
                var r = e("./frame-service");
                t.exports = {
                    create: function(e, t) {
                        var n = new r(e);
                        n.initialize((function() {
                            t(n)
                        }))
                    }
                }
            }, {
                "./frame-service": 135
            }],
            137: [function(e, t, n) {
                var r = e("@braintree/iframer"),
                    i = e("../../../assign").assign,
                    o = e("../../shared/browser-detection"),
                    a = {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        padding: 0,
                        margin: 0,
                        border: 0,
                        outline: "none",
                        zIndex: 20001,
                        background: "#FFFFFF"
                    };

                function s() {}

                function c(e) {
                    this._closed = null, this._frame = null, this._options = e || {}, this._container = this._options.container || document.body
                }
                c.prototype.initialize = s, c.prototype.open = function() {
                    var e = {
                        src: this._options.openFrameUrl,
                        name: this._options.name,
                        scrolling: "yes",
                        height: "100%",
                        width: "100%",
                        style: i({}, a),
                        title: "Lightbox Frame"
                    };
                    o.isIos() ? (o.isIosWKWebview() && (this._lockScrolling(), e.style = {}), this._el = document.createElement("div"), i(this._el.style, a, {
                        height: "100%",
                        width: "100%",
                        overflow: "auto",
                        "-webkit-overflow-scrolling": "touch"
                    }), this._frame = r(e), this._el.appendChild(this._frame)) : this._el = this._frame = r(e), this._closed = !1, this._container.appendChild(this._el)
                }, c.prototype.focus = s, c.prototype.close = function() {
                    this._container.removeChild(this._el), this._frame = null, this._closed = !0, o.isIosWKWebview() && this._unlockScrolling()
                }, c.prototype.isClosed = function() {
                    return Boolean(this._closed)
                }, c.prototype.redirect = function(e) {
                    this._frame.src = e
                }, c.prototype._unlockScrolling = function() {
                    document.body.style.overflow = this._savedBodyProperties.overflowStyle, document.body.style.position = this._savedBodyProperties.positionStyle, window.scrollTo(this._savedBodyProperties.left, this._savedBodyProperties.top), delete this._savedBodyProperties
                }, c.prototype._lockScrolling = function() {
                    var e = document.documentElement;
                    this._savedBodyProperties = {
                        left: (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
                        top: (window.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        overflowStyle: document.body.style.overflow,
                        positionStyle: document.body.style.position
                    }, document.body.style.overflow = "hidden", document.body.style.position = "fixed", window.scrollTo(0, 0)
                }, t.exports = c
            }, {
                "../../../assign": 118,
                "../../shared/browser-detection": 142,
                "@braintree/iframer": 34
            }],
            138: [function(e, t, n) {
                var r = e("../../../braintree-error"),
                    i = e("../../shared/errors");

                function o() {}

                function a(e) {
                    this._closed = null, this._options = e
                }
                a.prototype.initialize = function(e) {
                    var t = this;
                    window.popupBridge.onComplete = function(n, o) {
                        var a = !o && !n;
                        t._closed = !0, n || a ? e(new r(i.FRAME_SERVICE_FRAME_CLOSED)) : e(null, o)
                    }
                }, a.prototype.open = function(e) {
                    var t;
                    t = (e = e || {}).openFrameUrl || this._options.openFrameUrl, this._closed = !1, window.popupBridge.open(t)
                }, a.prototype.focus = o, a.prototype.close = o, a.prototype.isClosed = function() {
                    return Boolean(this._closed)
                }, a.prototype.redirect = function(e) {
                    this.open({
                        openFrameUrl: e
                    })
                }, t.exports = a
            }, {
                "../../../braintree-error": 121,
                "../../shared/errors": 144
            }],
            139: [function(e, t, n) {
                var r = e("../../../shared/constants"),
                    i = e("./position");

                function o(e, t, n) {
                    return void 0 !== t ? t : i[e](n)
                }
                t.exports = function(e) {
                    var t = e.height || r.DEFAULT_POPUP_HEIGHT,
                        n = e.width || r.DEFAULT_POPUP_WIDTH,
                        i = o("top", e.top, t),
                        a = o("left", e.left, n);
                    return [r.POPUP_BASE_OPTIONS, "height=" + t, "width=" + n, "top=" + i, "left=" + a].join(",")
                }
            }, {
                "../../../shared/constants": 143,
                "./position": 141
            }],
            140: [function(e, t, n) {
                var r = e("./compose-options");

                function i(e) {
                    this._frame = null, this._options = e || {}
                }
                i.prototype.initialize = function() {}, i.prototype.open = function() {
                    this._frame = window.open(this._options.openFrameUrl, this._options.name, r(this._options))
                }, i.prototype.focus = function() {
                    this._frame.focus()
                }, i.prototype.close = function() {
                    this._frame.closed || this._frame.close()
                }, i.prototype.isClosed = function() {
                    return !this._frame || Boolean(this._frame.closed)
                }, i.prototype.redirect = function(e) {
                    this._frame.location.href = e
                }, t.exports = i
            }, {
                "./compose-options": 139
            }],
            141: [function(e, t, n) {
                function r(e, t, n) {
                    return (e - t) / 2 + n
                }
                t.exports = {
                    top: function(e) {
                        return r(window.outerHeight || document.documentElement.clientHeight, e, null == window.screenY ? window.screenTop : window.screenY)
                    },
                    left: function(e) {
                        return r(window.outerWidth || document.documentElement.clientWidth, e, null == window.screenX ? window.screenLeft : window.screenX)
                    },
                    center: r
                }
            }, {}],
            142: [function(e, t, n) {
                t.exports = {
                    isIos: e("@braintree/browser-detection/is-ios"),
                    isIosWKWebview: e("@braintree/browser-detection/is-ios-wkwebview"),
                    supportsPopups: e("@braintree/browser-detection/supports-popups")
                }
            }, {
                "@braintree/browser-detection/is-ios": 29,
                "@braintree/browser-detection/is-ios-wkwebview": 28,
                "@braintree/browser-detection/supports-popups": 31
            }],
            143: [function(e, t, n) {
                t.exports = {
                    DISPATCH_FRAME_NAME: "dispatch",
                    DISPATCH_FRAME_CLASS: "braintree-dispatch-frame",
                    POPUP_BASE_OPTIONS: "resizable,scrollbars",
                    DEFAULT_POPUP_WIDTH: 450,
                    DEFAULT_POPUP_HEIGHT: 535,
                    POPUP_POLL_INTERVAL: 100,
                    POPUP_CLOSE_TIMEOUT: 100
                }
            }, {}],
            144: [function(e, t, n) {
                var r = e("../../braintree-error");
                t.exports = {
                    FRAME_SERVICE_FRAME_CLOSED: {
                        type: r.types.INTERNAL,
                        code: "FRAME_SERVICE_FRAME_CLOSED",
                        message: "Frame closed before tokenization could occur."
                    },
                    FRAME_SERVICE_FRAME_OPEN_FAILED: {
                        type: r.types.INTERNAL,
                        code: "FRAME_SERVICE_FRAME_OPEN_FAILED",
                        message: "Frame failed to open."
                    }
                }
            }, {
                "../../braintree-error": 121
            }],
            145: [function(e, t, n) {
                var r = e("../../enumerate");
                t.exports = r(["DISPATCH_FRAME_READY", "DISPATCH_FRAME_REPORT"], "frameService:")
            }, {
                "../../enumerate": 131
            }],
            146: [function(e, t, n) {
                var r = "3.94.0",
                    i = e("./assign").assign;

                function o(e, t) {
                    var n = e.analyticsMetadata,
                        o = {
                            gateway: "braintree",
                            "braintree:merchantId": e.gatewayConfiguration.merchantId,
                            "braintree:apiVersion": "v1",
                            "braintree:sdkVersion": r,
                            "braintree:metadata": JSON.stringify({
                                source: n.source,
                                integration: n.integration,
                                sessionId: n.sessionId,
                                version: r,
                                platform: n.platform
                            })
                        };
                    return i({}, o, t)
                }
                t.exports = function(e, t, n) {
                    var r, i, a = e.gatewayConfiguration.androidPay,
                        s = "production" === e.gatewayConfiguration.environment ? "PRODUCTION" : "TEST";
                    return 2 === t ? (r = {
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        environment: s,
                        allowedPaymentMethods: [{
                            type: "CARD",
                            parameters: {
                                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                allowedCardNetworks: a.supportedNetworks.map((function(e) {
                                    return e.toUpperCase()
                                }))
                            },
                            tokenizationSpecification: {
                                type: "PAYMENT_GATEWAY",
                                parameters: o(e, {
                                    "braintree:authorizationFingerprint": a.googleAuthorizationFingerprint
                                })
                            }
                        }]
                    }, n && (r.merchantInfo = {
                        merchantId: n
                    }), a.paypalClientId && (i = {
                        type: "PAYPAL",
                        parameters: {
                            purchase_context: {
                                purchase_units: [{
                                    payee: {
                                        client_id: a.paypalClientId
                                    },
                                    recurring_payment: !0
                                }]
                            }
                        },
                        tokenizationSpecification: {
                            type: "PAYMENT_GATEWAY",
                            parameters: o(e, {
                                "braintree:paypalClientId": a.paypalClientId
                            })
                        }
                    }, r.allowedPaymentMethods.push(i))) : (r = {
                        environment: s,
                        allowedPaymentMethods: ["CARD", "TOKENIZED_CARD"],
                        paymentMethodTokenizationParameters: {
                            tokenizationType: "PAYMENT_GATEWAY",
                            parameters: o(e, {
                                "braintree:authorizationFingerprint": a.googleAuthorizationFingerprint
                            })
                        },
                        cardRequirements: {
                            allowedCardNetworks: a.supportedNetworks.map((function(e) {
                                return e.toUpperCase()
                            }))
                        }
                    }, "TOKENIZATION_KEY" === e.authorizationType && (r.paymentMethodTokenizationParameters.parameters["braintree:clientKey"] = e.authorization), n && (r.merchantId = n), t && (r.apiVersion = t)), r
                }
            }, {
                "./assign": 118
            }],
            147: [function(e, t, n) {
                t.exports = function(e) {
                    e = e || window;
                    try {
                        return e.self !== e.top
                    } catch (e) {
                        return !0
                    }
                }
            }, {}],
            148: [function(e, t, n) {
                function r(e) {
                    var t = e.split("-");
                    return new Date(t[0], t[1], t[2])
                }
                t.exports = function(e, t) {
                    return r(e) <= r(t)
                }
            }, {}],
            149: [function(e, t, n) {
                t.exports = {
                    isHTTPS: function(e) {
                        return "https:" === (e = e || window.location.protocol)
                    }
                }
            }, {}],
            150: [function(e, t, n) {
                var r, i = {
                    "paypal.com": 1,
                    "braintreepayments.com": 1,
                    "braintreegateway.com": 1,
                    "braintree-api.com": 1
                };
                t.exports = function(e) {
                    var t;
                    return e = e.toLowerCase(), !!/^https:/.test(e) && ((r = r || document.createElement("a")).href = e, t = r.hostname.split(".").slice(-2).join("."), i.hasOwnProperty(t))
                }
            }, {}],
            151: [function(e, t, n) {
                t.exports = function(e) {
                    return JSON.parse(JSON.stringify(e))
                }
            }, {}],
            152: [function(e, t, n) {
                t.exports = function(e) {
                    return Object.keys(e).filter((function(t) {
                        return "function" == typeof e[t]
                    }))
                }
            }, {}],
            153: [function(e, t, n) {
                t.exports = function(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, e.apply(null, arguments))
                    }
                }
            }, {}],
            154: [function(e, t, n) {
                function r(e) {
                    var t;
                    for (t in e)
                        if (e.hasOwnProperty(t)) return !0;
                    return !1
                }

                function i(e) {
                    return e = e || window.location.href, /\?/.test(e)
                }

                function o(e, t) {
                    var n, r, i, a, s = [];
                    for (i in e) e.hasOwnProperty(i) && (r = e[i], n = t ? (a = e) && "object" == typeof a && "number" == typeof a.length && "[object Array]" === Object.prototype.toString.call(a) ? t + "[]" : t + "[" + i + "]" : i, "object" == typeof r ? s.push(o(r, n)) : s.push(encodeURIComponent(n) + "=" + encodeURIComponent(r)));
                    return s.join("&")
                }
                t.exports = {
                    parse: function(e) {
                        return i(e = e || window.location.href) ? (e.split("?")[1] || "").replace(/#.*$/, "").split("&").reduce((function(e, t) {
                            var n = t.split("="),
                                r = decodeURIComponent(n[0]),
                                i = decodeURIComponent(n[1]);
                            return e[r] = i, e
                        }), {}) : {}
                    },
                    stringify: o,
                    queryify: function(e, t) {
                        return e = e || "", null != t && "object" == typeof t && r(t) && (e += -1 === e.indexOf("?") ? "?" : "", e += -1 !== e.indexOf("=") ? "&" : "", e += o(t)), e
                    },
                    hasQueryParams: i
                }
            }, {}],
            155: [function(e, t, n) {
                var r = e("@braintree/uuid"),
                    i = e("./find-root-node");

                function o(e) {
                    return "[object ShadowRoot]" === (e = i(e)).toString()
                }

                function a(e) {
                    return o(e = i(e)) ? e.host : null
                }
                t.exports = {
                    isShadowElement: o,
                    getShadowHost: a,
                    transformToSlot: function e(t, n) {
                        var s = i(t).querySelector("style"),
                            c = a(t),
                            d = "shadow-slot-" + r(),
                            l = document.createElement("slot"),
                            u = document.createElement("div");
                        return l.setAttribute("name", d), t.appendChild(l), u.setAttribute("slot", d), c.appendChild(u), n && (s || (s = document.createElement("style"), t.appendChild(s)), s.sheet.insertRule('::slotted([slot="' + d + '"]) { ' + n + " }")), o(c) ? e(u, n) : u
                    }
                }
            }, {
                "./find-root-node": 133,
                "@braintree/uuid": 38
            }],
            156: [function(e, t, n) {
                t.exports = function(e) {
                    return -1 === e.indexOf("_") ? e : e.toLowerCase().replace(/(\_\w)/g, (function(e) {
                        return e[1].toUpperCase()
                    }))
                }
            }, {}],
            157: [function(e, t, n) {
                t.exports = function(e) {
                    return e ? "" : ".min"
                }
            }, {}],
            158: [function(e, t, n) {
                var r = "function" == typeof atob ? atob : i;

                function i(e) {
                    var t, n, r, i, o, a, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        c = "";
                    if (!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e)) throw new Error("Non base64 encoded input passed to window.atob polyfill");
                    a = 0;
                    do {
                        t = (63 & s.indexOf(e.charAt(a++))) << 2 | (i = s.indexOf(e.charAt(a++))) >> 4 & 3, n = (15 & i) << 4 | (o = s.indexOf(e.charAt(a++))) >> 2 & 15, r = (3 & o) << 6 | 63 & s.indexOf(e.charAt(a++)), c += String.fromCharCode(t) + (n ? String.fromCharCode(n) : "") + (r ? String.fromCharCode(r) : "")
                    } while (a < e.length);
                    return c
                }
                t.exports = {
                    atob: function(e) {
                        return r.call(window, e)
                    },
                    _atob: i
                }
            }, {}],
            159: [function(e, t, n) {
                t.exports = {
                    REQUIRED_OPTIONS_FOR_START_PAYMENT: ["givenName", "surname", "currencyCode", "onPaymentStart", "paymentType", "amount", "fallback"],
                    REQUIRED_OPTIONS_FOR_DEFERRED_PAYMENT_TYPE: ["givenName", "surname", "currencyCode", "onPaymentStart", "paymentType", "amount", "address", "billingAddress", "birthDate", "email", "locale", "customerServiceInstructions", "correlationId", "phone", "phoneCountryCode", "lineItems"],
                    REQUIRED_OPTIONS_FOR_ADDRESS: ["streetAddress", "locality", "postalCode", "countryCode"],
                    REQUIRED_OPTIONS_FOR_LINE_ITEMS: ["category", "name", "quantity", "unitAmount", "unitTaxAmount"],
                    DEFERRED_PAYMENT_TYPES: ["pay_upon_invoice"]
                }
            }, {}],
            160: [function(e, t, n) {
                var r = e("../../lib/frame-service/external"),
                    i = e("../../lib/braintree-error"),
                    o = e("../../lib/use-min"),
                    a = e("../../lib/constants").INTEGRATION_TIMEOUT_MS,
                    s = e("../../lib/analytics"),
                    c = e("../../lib/methods"),
                    d = e("../../lib/convert-methods-to-error"),
                    l = e("../../lib/convert-to-braintree-error"),
                    u = e("@braintree/extended-promise"),
                    p = e("../../lib/querystring"),
                    _ = e("@braintree/wrap-promise"),
                    E = e("./constants"),
                    h = e("../shared/errors");

                function m(e) {
                    this._client = e.client, this._assetsUrl = e.client.getConfiguration().gatewayConfiguration.assetsUrl + "/web/3.94.0", this._isDebug = e.client.getConfiguration().isDebug, this._loadingFrameUrl = this._assetsUrl + "/html/local-payment-landing-frame" + o(this._isDebug) + ".html", this._authorizationInProgress = !1, this._paymentType = "unknown", this._merchantAccountId = e.merchantAccountId
                }

                function f(e) {
                    return E.DEFERRED_PAYMENT_TYPES.indexOf(e) >= 0
                }

                function y(e) {
                    var t, n;
                    for (t = 0; t < E.REQUIRED_OPTIONS_FOR_ADDRESS.length; t++)
                        if (n = E.REQUIRED_OPTIONS_FOR_ADDRESS[t], !e.hasOwnProperty(n)) return n;
                    return !1
                }

                function A(e) {
                    var t, n, r, i;
                    for (n = 0; n < e.length; n++)
                        for (r = e[n], t = 0; t < E.REQUIRED_OPTIONS_FOR_LINE_ITEMS.length; t++)
                            if (i = E.REQUIRED_OPTIONS_FOR_LINE_ITEMS[t], !r.hasOwnProperty(i)) return i;
                    return !1
                }

                function T(e) {
                    var t, n, r, i;
                    if (!e) return !0;
                    if (f(e.paymentType))
                        for (t = 0; t < E.REQUIRED_OPTIONS_FOR_DEFERRED_PAYMENT_TYPE.length; t++) {
                            if (n = E.REQUIRED_OPTIONS_FOR_DEFERRED_PAYMENT_TYPE[t], !e.hasOwnProperty(n)) return n;
                            if ("address" === n || "billingAddress" === n) {
                                if (r = y(e[n])) return n + "." + r
                            } else if ("lineItems" === n && (i = A(e[n]))) return n + "." + i
                        } else {
                            for (t = 0; t < E.REQUIRED_OPTIONS_FOR_START_PAYMENT.length; t++)
                                if (n = E.REQUIRED_OPTIONS_FOR_START_PAYMENT[t], !e.hasOwnProperty(n)) return n;
                            if (!e.fallback.url) return "fallback.url";
                            if (!e.fallback.buttonText) return "fallback.buttonText"
                        }
                    return !1
                }
                u.suppressUnhandledPromiseMessage = !0, m.prototype._initialize = function() {
                    var e = this,
                        t = this._client,
                        n = setTimeout((function() {
                            s.sendEvent(t, "local-payment.load.timed-out")
                        }), a);
                    return new Promise((function(i) {
                        r.create({
                            name: "localpaymentlandingpage",
                            dispatchFrameUrl: e._assetsUrl + "/html/dispatch-frame" + o(e._isDebug) + ".html",
                            openFrameUrl: e._loadingFrameUrl
                        }, (function(r) {
                            e._frameService = r, clearTimeout(n), s.sendEvent(t, "local-payment.load.succeeded"), i(e)
                        }))
                    }))
                }, m.prototype.startPayment = function(e) {
                    var t, n, r, a, c, d, _, E, m = this,
                        y = this._frameService._serviceId;
                    return (t = T(e)) ? (n = new i(h.LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION), "string" == typeof t && (n.details = "Missing required '" + t + "' option."), Promise.reject(n)) : (E = e.windowOptions || {}, r = e.address || {}, a = e.fallback || {}, _ = e.billingAddress || {}, c = {
                        intent: "sale",
                        returnUrl: p.queryify(m._assetsUrl + "/html/local-payment-redirect-frame" + o(m._isDebug) + ".html", {
                            channel: y,
                            r: a.url,
                            t: a.buttonText
                        }),
                        cancelUrl: p.queryify(m._assetsUrl + "/html/local-payment-redirect-frame" + o(m._isDebug) + ".html", {
                            channel: y,
                            r: a.cancelUrl || a.url,
                            t: a.cancelButtonText || a.buttonText,
                            c: 1
                        }),
                        experienceProfile: {
                            brandName: e.displayName,
                            noShipping: !e.shippingAddressRequired,
                            locale: e.locale,
                            customerServiceInstructions: e.customerServiceInstructions
                        },
                        fundingSource: e.paymentType,
                        paymentTypeCountryCode: e.paymentTypeCountryCode,
                        amount: e.amount,
                        currencyIsoCode: e.currencyCode,
                        firstName: e.givenName,
                        lastName: e.surname,
                        payerEmail: e.email,
                        phone: e.phone,
                        line1: r.streetAddress,
                        line2: r.extendedAddress,
                        city: r.locality,
                        state: r.region,
                        postalCode: r.postalCode,
                        countryCode: r.countryCode,
                        merchantAccountId: m._merchantAccountId,
                        bic: e.bic,
                        billingAddress: {
                            line1: _.streetAddress,
                            line2: _.extendedAddress,
                            city: _.locality,
                            state: _.region,
                            postalCode: _.postalCode,
                            countryCode: _.countryCode
                        },
                        birthDate: e.birthDate,
                        correlationId: e.correlationId,
                        discountAmount: e.discountAmount,
                        phoneCountryCode: e.phoneCountryCode,
                        shippingAmount: e.shippingAmount,
                        lineItems: e.lineItems
                    }, m._paymentType = e.paymentType.toLowerCase(), m._authorizationInProgress ? (s.sendEvent(m._client, m._paymentType + ".local-payment.start-payment.error.already-opened"), Promise.reject(new i(h.LOCAL_PAYMENT_ALREADY_IN_PROGRESS))) : (m._authorizationInProgress = !0, d = new u, f(e.paymentType) || (m._startPaymentCallback = m._createStartPaymentCallback((function(e) {
                        d.resolve(e)
                    }), (function(e) {
                        d.reject(e)
                    })), m._frameService.open({
                        width: E.width || 1282,
                        height: E.height || 720
                    }, m._startPaymentCallback)), m._client.request({
                        method: "post",
                        endpoint: "local_payments/create",
                        data: c
                    }).then((function(t) {
                        s.sendEvent(m._client, m._paymentType + ".local-payment.start-payment.opened"), m._startPaymentOptions = e, f(e.paymentType) ? (e.onPaymentStart({
                            paymentId: t.paymentResource.paymentToken
                        }), m._authorizationInProgress = !1, d.resolve()) : e.onPaymentStart({
                            paymentId: t.paymentResource.paymentToken
                        }, (function() {
                            m._frameService.redirect(t.paymentResource.redirectUrl)
                        }))
                    })).catch((function(e) {
                        var t = e.details && e.details.httpStatus;
                        m._frameService.close(), m._authorizationInProgress = !1, 422 !== t ? d.reject(l(e, {
                            type: h.LOCAL_PAYMENT_START_PAYMENT_FAILED.type,
                            code: h.LOCAL_PAYMENT_START_PAYMENT_FAILED.code,
                            message: h.LOCAL_PAYMENT_START_PAYMENT_FAILED.message
                        })) : d.reject(new i({
                            type: h.LOCAL_PAYMENT_INVALID_PAYMENT_OPTION.type,
                            code: h.LOCAL_PAYMENT_INVALID_PAYMENT_OPTION.code,
                            message: h.LOCAL_PAYMENT_INVALID_PAYMENT_OPTION.message,
                            details: {
                                originalError: e
                            }
                        }))
                    })), d))
                }, m.prototype.tokenize = function(e) {
                    var t = this,
                        n = this._client;
                    return (e = e || p.parse()).queryItems && (e = e.queryItems), e.c || e.wasCanceled ? Promise.reject(new i({
                        type: h.LOCAL_PAYMENT_CANCELED.type,
                        code: h.LOCAL_PAYMENT_CANCELED.code,
                        message: h.LOCAL_PAYMENT_CANCELED.message,
                        details: {
                            originalError: {
                                errorcode: e.errorcode,
                                token: e.btLpToken
                            }
                        }
                    })) : e.errorcode ? Promise.reject(new i({
                        type: h.LOCAL_PAYMENT_START_PAYMENT_FAILED.type,
                        code: h.LOCAL_PAYMENT_START_PAYMENT_FAILED.code,
                        message: h.LOCAL_PAYMENT_START_PAYMENT_FAILED.message,
                        details: {
                            originalError: {
                                errorcode: e.errorcode,
                                token: e.btLpToken
                            }
                        }
                    })) : n.request({
                        endpoint: "payment_methods/paypal_accounts",
                        method: "post",
                        data: this._formatTokenizeData(e)
                    }).then((function(e) {
                        var r = t._formatTokenizePayload(e);
                        return window.popupBridge ? s.sendEvent(n, t._paymentType + ".local-payment.tokenization.success-popupbridge") : s.sendEvent(n, t._paymentType + ".local-payment.tokenization.success"), r
                    })).catch((function(e) {
                        return s.sendEvent(n, t._paymentType + ".local-payment.tokenization.failed"), Promise.reject(l(e, {
                            type: h.LOCAL_PAYMENT_TOKENIZATION_FAILED.type,
                            code: h.LOCAL_PAYMENT_TOKENIZATION_FAILED.code,
                            message: h.LOCAL_PAYMENT_TOKENIZATION_FAILED.message
                        }))
                    }))
                }, m.prototype.closeWindow = function() {
                    this._authoriztionInProgress && s.sendEvent(this._client, this._paymentType + ".local-payment.start-payment.closed.by-merchant"), this._frameService.close()
                }, m.prototype.focusWindow = function() {
                    this._frameService.focus()
                }, m.prototype._createStartPaymentCallback = function(e, t) {
                    var n = this,
                        r = this._client;
                    return function(o, a) {
                        if (n._authorizationInProgress = !1, o)
                            if ("FRAME_SERVICE_FRAME_CLOSED" === o.code) {
                                if (a && "processing_error" === a.errorcode) return s.sendEvent(r, n._paymentType + ".local-payment.failed-in-window"), void t(new i(h.LOCAL_PAYMENT_START_PAYMENT_FAILED));
                                s.sendEvent(r, n._paymentType + ".local-payment.tokenization.closed.by-user"), t(new i(h.LOCAL_PAYMENT_WINDOW_CLOSED))
                            } else o.code && o.code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") > -1 && t(new i({
                                code: h.LOCAL_PAYMENT_WINDOW_OPEN_FAILED.code,
                                type: h.LOCAL_PAYMENT_WINDOW_OPEN_FAILED.type,
                                message: h.LOCAL_PAYMENT_WINDOW_OPEN_FAILED.message,
                                details: {
                                    originalError: o
                                }
                            }));
                        else a && (window.popupBridge || n._frameService.redirect(n._loadingFrameUrl), n.tokenize(a).then(e).catch(t).then((function() {
                            n._frameService.close()
                        })))
                    }
                }, m.prototype._formatTokenizePayload = function(e) {
                    var t, n = {};
                    return e.paypalAccounts && (n = e.paypalAccounts[0]), t = {
                        nonce: n.nonce,
                        details: {},
                        type: n.type
                    }, n.details && (n.details.payerInfo && (t.details = n.details.payerInfo), n.details.correlationId && (t.correlationId = n.details.correlationId)), t
                }, m.prototype.hasTokenizationParams = function() {
                    var e = p.parse();
                    return !!e.errorcode || Boolean(e.btLpToken && e.btLpPaymentId && e.btLpPayerId)
                }, m.prototype._formatTokenizeData = function(e) {
                    var t = this._client.getConfiguration().gatewayConfiguration;
                    return {
                        merchantAccountId: this._merchantAccountId,
                        paypalAccount: {
                            correlationId: e.btLpToken || e.token,
                            paymentToken: e.btLpPaymentId || e.paymentId,
                            payerId: e.btLpPayerId || e.PayerID,
                            unilateral: t.paypal.unvettedMerchant,
                            intent: "sale"
                        }
                    }
                }, m.prototype.teardown = function() {
                    var e = this;
                    return e._frameService.teardown(), d(e, c(m.prototype)), s.sendEvent(e._client, "local-payment.teardown-completed"), Promise.resolve()
                }, t.exports = _.wrapPrototype(m)
            }, {
                "../../lib/analytics": 116,
                "../../lib/braintree-error": 121,
                "../../lib/constants": 123,
                "../../lib/convert-methods-to-error": 124,
                "../../lib/convert-to-braintree-error": 125,
                "../../lib/frame-service/external": 136,
                "../../lib/methods": 152,
                "../../lib/querystring": 154,
                "../../lib/use-min": 157,
                "../shared/errors": 162,
                "./constants": 159,
                "@braintree/extended-promise": 33,
                "@braintree/wrap-promise": 42
            }],
            161: [function(e, t, n) {
                var r = e("../lib/analytics"),
                    i = e("../lib/basic-component-verification"),
                    o = e("../lib/create-deferred-client"),
                    a = e("../lib/create-assets-url"),
                    s = e("./external/local-payment"),
                    c = e("@braintree/wrap-promise"),
                    d = e("../lib/braintree-error"),
                    l = e("./shared/errors");
                t.exports = {
                    create: c((function(e) {
                        var t = "Local Payment";
                        return i.verify({
                            name: t,
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            return o.create({
                                authorization: e.authorization,
                                client: e.client,
                                debug: e.debug,
                                assetsUrl: a.create(e.authorization),
                                name: t
                            })
                        })).then((function(t) {
                            var n = t.getConfiguration();
                            return e.client = t, !0 !== n.gatewayConfiguration.paypalEnabled ? Promise.reject(new d(l.LOCAL_PAYMENT_NOT_ENABLED)) : (r.sendEvent(t, "local-payment.initialized"), new s(e)._initialize())
                        }))
                    })),
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/analytics": 116,
                "../lib/basic-component-verification": 119,
                "../lib/braintree-error": 121,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "./external/local-payment": 160,
                "./shared/errors": 162,
                "@braintree/wrap-promise": 42
            }],
            162: [function(e, t, n) {
                var r = e("../../lib/braintree-error");
                t.exports = {
                    LOCAL_PAYMENT_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: "LOCAL_PAYMENT_NOT_ENABLED",
                        message: "LocalPayment is not enabled for this merchant."
                    },
                    LOCAL_PAYMENT_ALREADY_IN_PROGRESS: {
                        type: r.types.MERCHANT,
                        code: "LOCAL_PAYMENT_ALREADY_IN_PROGRESS",
                        message: "LocalPayment payment is already in progress."
                    },
                    LOCAL_PAYMENT_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: "LOCAL_PAYMENT_CANCELED",
                        message: "Customer canceled the LocalPayment before authorizing."
                    },
                    LOCAL_PAYMENT_WINDOW_CLOSED: {
                        type: r.types.CUSTOMER,
                        code: "LOCAL_PAYMENT_WINDOW_CLOSED",
                        message: "Customer closed LocalPayment window before authorizing."
                    },
                    LOCAL_PAYMENT_WINDOW_OPEN_FAILED: {
                        type: r.types.MERCHANT,
                        code: "LOCAL_PAYMENT_WINDOW_OPEN_FAILED",
                        message: "LocalPayment window failed to open; make sure startPayment was called in response to a user action."
                    },
                    LOCAL_PAYMENT_START_PAYMENT_FAILED: {
                        type: r.types.NETWORK,
                        code: "LOCAL_PAYMENT_START_PAYMENT_FAILED",
                        message: "LocalPayment startPayment failed."
                    },
                    LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION: {
                        type: r.types.MERCHANT,
                        code: "LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION",
                        message: "Missing required option for startPayment."
                    },
                    LOCAL_PAYMENT_TOKENIZATION_FAILED: {
                        type: r.types.NETWORK,
                        code: "LOCAL_PAYMENT_TOKENIZATION_FAILED",
                        message: "Could not tokenize user's local payment method."
                    },
                    LOCAL_PAYMENT_INVALID_PAYMENT_OPTION: {
                        type: r.types.MERCHANT,
                        code: "LOCAL_PAYMENT_INVALID_PAYMENT_OPTION",
                        message: "Local payment options are invalid."
                    }
                }
            }, {
                "../../lib/braintree-error": 121
            }],
            163: [function(e, t, n) {
                var r = e("../../lib/frame-service/external"),
                    i = e("../../lib/braintree-error"),
                    o = e("../shared/errors"),
                    a = e("../../lib/methods"),
                    s = e("@braintree/wrap-promise"),
                    c = e("../../lib/analytics"),
                    d = e("../../lib/convert-methods-to-error"),
                    l = e("../../lib/convert-to-braintree-error"),
                    u = e("../shared/constants"),
                    p = e("../../lib/constants").INTEGRATION_TIMEOUT_MS;

                function _(e) {
                    var t = e.client.getConfiguration();
                    this._client = e.client, this._assetsUrl = t.gatewayConfiguration.assetsUrl + "/web/3.94.0", this._isDebug = t.isDebug, this._authInProgress = !1, window.popupBridge && "function" == typeof window.popupBridge.getReturnUrlPrefix ? this._callbackUrl = window.popupBridge.getReturnUrlPrefix() + "return" : this._callbackUrl = this._assetsUrl + "/html/redirect-frame" + (this._isDebug ? "" : ".min") + ".html"
                }

                function E(e) {
                    return [e.oauth_verifier, e.oauth_token, e.checkout_resource_url].some((function(e) {
                        return null == e || "null" === e
                    }))
                }

                function h(e) {
                    var t, n;
                    for (t = 0; t < u.REQUIRED_OPTIONS_FOR_TOKENIZE.length; t++)
                        if (n = u.REQUIRED_OPTIONS_FOR_TOKENIZE[t], !e.hasOwnProperty(n)) return !0;
                    return !1
                }
                _.prototype._initialize = function() {
                    var e = this;
                    return new Promise((function(t) {
                        var n = setTimeout((function() {
                            c.sendEvent(e._client, "masterpass.load.timed-out")
                        }), p);
                        r.create({
                            name: u.LANDING_FRAME_NAME,
                            height: u.POPUP_HEIGHT,
                            width: u.POPUP_WIDTH,
                            dispatchFrameUrl: e._assetsUrl + "/html/dispatch-frame" + (e._isDebug ? "" : ".min") + ".html",
                            openFrameUrl: e._assetsUrl + "/html/masterpass-landing-frame" + (e._isDebug ? "" : ".min") + ".html"
                        }, (function(r) {
                            e._frameService = r, clearTimeout(n), c.sendEvent(e._client, "masterpass.load.succeeded"), t(e)
                        }))
                    }))
                }, _.prototype.tokenize = function(e) {
                    var t = this;
                    return !e || h(e) ? Promise.reject(new i(o.MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION)) : t._authInProgress ? Promise.reject(new i(o.MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS)) : new Promise((function(n, r) {
                        t._navigateFrameToLoadingPage(e).catch(r), t._frameService.open(e.frameOptions, t._createFrameOpenHandler(n, r))
                    }))
                }, _.prototype._navigateFrameToLoadingPage = function(e) {
                    var t = this;
                    return this._authInProgress = !0, this._client.request({
                        method: "post",
                        endpoint: "masterpass/request_token",
                        data: {
                            requestToken: {
                                originUrl: window.location.protocol + "//" + window.location.hostname,
                                subtotal: e.subtotal,
                                currencyCode: e.currencyCode,
                                callbackUrl: this._callbackUrl
                            }
                        }
                    }).then((function(n) {
                        var r, i = t._assetsUrl + "/html/masterpass-loading-frame" + (t._isDebug ? "" : ".min") + ".html?",
                            o = t._client.getConfiguration().gatewayConfiguration,
                            a = e.config || {};
                        r = {
                            environment: o.environment,
                            requestToken: n.requestToken,
                            callbackUrl: t._callbackUrl,
                            merchantCheckoutId: o.masterpass.merchantCheckoutId,
                            allowedCardTypes: o.masterpass.supportedNetworks,
                            version: u.MASTERPASS_VERSION
                        }, Object.keys(a).forEach((function(e) {
                            "function" != typeof a[e] && (r[e] = a[e])
                        })), i += Object.keys(r).map((function(e) {
                            return e + "=" + r[e]
                        })).join("&"), t._frameService.redirect(i)
                    })).catch((function(e) {
                        var n = e.details && e.details.httpStatus;
                        return t._closeWindow(), 422 === n ? Promise.reject(l(e, o.MASTERPASS_INVALID_PAYMENT_OPTION)) : Promise.reject(l(e, o.MASTERPASS_FLOW_FAILED))
                    }))
                }, _.prototype._createFrameOpenHandler = function(e, t) {
                    var n = this;
                    return window.popupBridge ? function(r, a) {
                        return n._authInProgress = !1, r ? (c.sendEvent(n._client, "masterpass.tokenization.closed-popupbridge.by-user"), void t(l(r, o.MASTERPASS_POPUP_CLOSED))) : a.queryItems ? void n._tokenizeMasterpass(a.queryItems).then(e).catch(t) : (c.sendEvent(n._client, "masterpass.tokenization.failed-popupbridge"), void t(new i(o.MASTERPASS_FLOW_FAILED)))
                    } : function(r, a) {
                        if (r) return n._authInProgress = !1, "FRAME_SERVICE_FRAME_CLOSED" === r.code ? (c.sendEvent(n._client, "masterpass.tokenization.closed.by-user"), void t(new i(o.MASTERPASS_POPUP_CLOSED))) : r.code && r.code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") > -1 ? (c.sendEvent(n._client, "masterpass.tokenization.failed.to-open"), void t(new i({
                            code: o.MASTERPASS_POPUP_OPEN_FAILED.code,
                            type: o.MASTERPASS_POPUP_OPEN_FAILED.type,
                            message: o.MASTERPASS_POPUP_OPEN_FAILED.message,
                            details: {
                                originalError: r
                            }
                        }))) : (c.sendEvent(n._client, "masterpass.tokenization.failed"), n._closeWindow(), void t(l(r, o.MASTERPASS_FLOW_FAILED)));
                        n._tokenizeMasterpass(a).then(e).catch(t)
                    }
                }, _.prototype._tokenizeMasterpass = function(e) {
                    var t = this;
                    return "success" !== e.mpstatus ? (c.sendEvent(t._client, "masterpass.tokenization.closed.by-user"), t._closeWindow(), Promise.reject(new i(o.MASTERPASS_POPUP_CLOSED))) : E(e) ? (c.sendEvent(t._client, "masterpass.tokenization.closed.missing-payload"), t._closeWindow(), Promise.reject(new i(o.MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS))) : t._client.request({
                        endpoint: "payment_methods/masterpass_cards",
                        method: "post",
                        data: {
                            masterpassCard: {
                                checkoutResourceUrl: e.checkout_resource_url,
                                requestToken: e.oauth_token,
                                verifierToken: e.oauth_verifier
                            }
                        }
                    }).then((function(e) {
                        return t._closeWindow(), window.popupBridge ? c.sendEvent(t._client, "masterpass.tokenization.success-popupbridge") : c.sendEvent(t._client, "masterpass.tokenization.success"), e.masterpassCards[0]
                    })).catch((function(e) {
                        return t._closeWindow(), window.popupBridge ? c.sendEvent(t._client, "masterpass.tokenization.failed-popupbridge") : c.sendEvent(t._client, "masterpass.tokenization.failed"), Promise.reject(l(e, o.MASTERPASS_ACCOUNT_TOKENIZATION_FAILED))
                    }))
                }, _.prototype._closeWindow = function() {
                    this._authInProgress = !1, this._frameService.close()
                }, _.prototype.teardown = function() {
                    var e = this;
                    return new Promise((function(t) {
                        e._frameService.teardown(), d(e, a(_.prototype)), c.sendEvent(e._client, "masterpass.teardown-completed"), t()
                    }))
                }, t.exports = s.wrapPrototype(_)
            }, {
                "../../lib/analytics": 116,
                "../../lib/braintree-error": 121,
                "../../lib/constants": 123,
                "../../lib/convert-methods-to-error": 124,
                "../../lib/convert-to-braintree-error": 125,
                "../../lib/frame-service/external": 136,
                "../../lib/methods": 152,
                "../shared/constants": 166,
                "../shared/errors": 167,
                "@braintree/wrap-promise": 42
            }],
            164: [function(e, t, n) {
                var r = e("../lib/braintree-error"),
                    i = e("../lib/basic-component-verification"),
                    o = e("./shared/browser-detection"),
                    a = e("./external/masterpass"),
                    s = e("../lib/create-deferred-client"),
                    c = e("../lib/create-assets-url"),
                    d = e("./shared/errors"),
                    l = e("@braintree/wrap-promise");

                function u() {
                    return Boolean(window.popupBridge || o.supportsPopups())
                }
                t.exports = {
                    create: l((function(e) {
                        var t = "Masterpass";
                        return i.verify({
                            name: t,
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            return u() ? Promise.resolve() : Promise.reject(new r(d.MASTERPASS_BROWSER_NOT_SUPPORTED))
                        })).then((function() {
                            return s.create({
                                authorization: e.authorization,
                                client: e.client,
                                debug: e.debug,
                                assetsUrl: c.create(e.authorization),
                                name: t
                            })
                        })).then((function(t) {
                            return e.client = t, e.client.getConfiguration().gatewayConfiguration.masterpass ? new a(e)._initialize() : Promise.reject(new r(d.MASTERPASS_NOT_ENABLED))
                        }))
                    })),
                    isSupported: u,
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/basic-component-verification": 119,
                "../lib/braintree-error": 121,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "./external/masterpass": 163,
                "./shared/browser-detection": 165,
                "./shared/errors": 167,
                "@braintree/wrap-promise": 42
            }],
            165: [function(e, t, n) {
                t.exports = {
                    supportsPopups: e("@braintree/browser-detection/supports-popups")
                }
            }, {
                "@braintree/browser-detection/supports-popups": 31
            }],
            166: [function(e, t, n) {
                t.exports = {
                    LANDING_FRAME_NAME: "braintreemasterpasslanding",
                    POPUP_WIDTH: 450,
                    POPUP_HEIGHT: 660,
                    MASTERPASS_VERSION: "v6",
                    REQUIRED_OPTIONS_FOR_TOKENIZE: ["subtotal", "currencyCode"]
                }
            }, {}],
            167: [function(e, t, n) {
                var r = e("../../lib/braintree-error");
                t.exports = {
                    MASTERPASS_BROWSER_NOT_SUPPORTED: {
                        type: r.types.CUSTOMER,
                        code: "MASTERPASS_BROWSER_NOT_SUPPORTED",
                        message: "Browser is not supported."
                    },
                    MASTERPASS_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: "MASTERPASS_NOT_ENABLED",
                        message: "Masterpass is not enabled for this merchant."
                    },
                    MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION: {
                        type: r.types.MERCHANT,
                        code: "MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION",
                        message: "Missing required option for tokenize."
                    },
                    MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS: {
                        type: r.types.MERCHANT,
                        code: "MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS",
                        message: "Masterpass tokenization is already in progress."
                    },
                    MASTERPASS_ACCOUNT_TOKENIZATION_FAILED: {
                        type: r.types.NETWORK,
                        code: "MASTERPASS_ACCOUNT_TOKENIZATION_FAILED",
                        message: "Could not tokenize user's Masterpass account."
                    },
                    MASTERPASS_POPUP_OPEN_FAILED: {
                        type: r.types.MERCHANT,
                        code: "MASTERPASS_POPUP_OPEN_FAILED",
                        message: "Masterpass popup failed to open. Make sure to tokenize in response to a user action, such as a click."
                    },
                    MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS: {
                        type: r.types.MERCHANT,
                        code: "MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS",
                        message: "Masterpass popup failed to return all required parameters needed to continue tokenization."
                    },
                    MASTERPASS_POPUP_CLOSED: {
                        type: r.types.CUSTOMER,
                        code: "MASTERPASS_POPUP_CLOSED",
                        message: "Customer closed Masterpass popup before authorizing."
                    },
                    MASTERPASS_INVALID_PAYMENT_OPTION: {
                        type: r.types.MERCHANT,
                        code: "MASTERPASS_INVALID_PAYMENT_OPTION",
                        message: "Masterpass payment options are invalid."
                    },
                    MASTERPASS_FLOW_FAILED: {
                        type: r.types.NETWORK,
                        code: "MASTERPASS_FLOW_FAILED",
                        message: "Could not initialize Masterpass flow."
                    }
                }
            }, {
                "../../lib/braintree-error": 121
            }],
            168: [function(e, t, n) {
                var r = e("../../lib/analytics"),
                    i = e("../../lib/assign").assign,
                    o = e("framebus"),
                    a = e("../../lib/convert-methods-to-error"),
                    s = e("../../lib/generate-google-pay-configuration"),
                    c = e("@braintree/iframer"),
                    d = e("@braintree/uuid"),
                    l = e("../../lib/use-min"),
                    u = e("../../lib/methods"),
                    p = e("@braintree/event-emitter"),
                    _ = e("../../lib/braintree-error"),
                    E = e("../shared/constants"),
                    h = E.events,
                    m = E.errors,
                    f = e("@braintree/wrap-promise"),
                    y = {
                        Visa: "visa",
                        MasterCard: "mastercard",
                        "American Express": "amex",
                        "Diners Club": "diners",
                        Discover: "discover",
                        JCB: "jcb",
                        UnionPay: "unionpay",
                        Maestro: "maestro"
                    };

                function A(e) {
                    var t = e.enabledPaymentMethods || {};
                    p.call(this), this._componentId = d(), this._client = e.client, this._enabledPaymentMethods = {
                        basicCard: !1 !== t.basicCard,
                        googlePay: !1 !== t.googlePay
                    }, this._googlePayVersion = 2 === e.googlePayVersion ? 2 : 1, this._googleMerchantId = "18278000977346790994", this._supportedPaymentMethods = this._constructDefaultSupportedPaymentMethods(), this._defaultSupportedPaymentMethods = Object.keys(this._supportedPaymentMethods).map(function(e) {
                        return this._supportedPaymentMethods[e]
                    }.bind(this)), this._bus = new o({
                        channel: this._componentId
                    })
                }
                p.createChild(A), A.prototype._constructDefaultSupportedPaymentMethods = function() {
                    var e = this._client.getConfiguration(),
                        t = e.gatewayConfiguration.androidPay,
                        n = e.gatewayConfiguration.creditCards,
                        r = {};
                    return this._enabledPaymentMethods.basicCard && n && n.supportedCardTypes.length > 0 && (r.basicCard = {
                        supportedMethods: "basic-card",
                        data: {
                            supportedNetworks: n.supportedCardTypes.reduce((function(e, t) {
                                return t in y && e.push(y[t]), e
                            }), [])
                        }
                    }), this._enabledPaymentMethods.googlePay && t && t.enabled && (r.googlePay = {
                        supportedMethods: "https://google.com/pay",
                        data: s(e, this._googlePayVersion, this._googleMerchantId)
                    }), r
                }, A.prototype.initialize = function() {
                    var e = this._client.getConfiguration(),
                        t = this;
                    return this._frame = c({
                        allowPaymentRequest: !0,
                        name: "braintree-payment-request-frame",
                        class: "braintree-payment-request-frame",
                        height: 0,
                        width: 0,
                        style: {
                            position: "absolute",
                            left: "-9999px"
                        },
                        title: "Secure Payment Frame"
                    }), 0 === this._defaultSupportedPaymentMethods.length ? Promise.reject(new _(m.PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS)) : new Promise((function(n) {
                        var i, o, a;
                        t._bus.on(h.FRAME_READY, (function(e) {
                            e(t._client)
                        })), t._bus.on(h.FRAME_CAN_MAKE_REQUESTS, (function() {
                            r.sendEvent(t._client, "payment-request.initialized"), t._bus.on(h.SHIPPING_ADDRESS_CHANGE, (function(e) {
                                var n = {
                                    target: {
                                        shippingAddress: e
                                    },
                                    updateWith: function(e) {
                                        t._bus.emit(h.UPDATE_SHIPPING_ADDRESS, e)
                                    }
                                };
                                t._emit("shippingAddressChange", n), t._emit("shippingaddresschange", n)
                            })), t._bus.on(h.SHIPPING_OPTION_CHANGE, (function(e) {
                                var n = {
                                    target: {
                                        shippingOption: e
                                    },
                                    updateWith: function(e) {
                                        t._bus.emit(h.UPDATE_SHIPPING_OPTION, e)
                                    }
                                };
                                t._emit("shippingOptionChange", n), t._emit("shippingoptionchange", n)
                            })), n(t)
                        })), t._frame.src = (i = e.gatewayConfiguration.assetsUrl, o = t._componentId, a = e.isDebug, i + "/web/3.94.0/html/payment-request-frame" + l(a) + ".html#" + o), document.body.appendChild(t._frame)
                    }))
                }, A.prototype.createSupportedPaymentMethodsConfiguration = function(e, t) {
                    var n;
                    if (!e) throw new _(m.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE);
                    if (!this._enabledPaymentMethods[e]) throw new _(m.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED);
                    return (n = i({}, this._supportedPaymentMethods[e])).data = i({}, n.data, t), n
                }, A.prototype.tokenize = function(e) {
                    var t = this;
                    return new Promise((function(n, i) {
                        t._bus.emit(h.PAYMENT_REQUEST_INITIALIZED, {
                            supportedPaymentMethods: e.supportedPaymentMethods || t._defaultSupportedPaymentMethods,
                            details: e.details,
                            options: e.options
                        }, (function(e) {
                            var o = e[0],
                                a = e[1];
                            o ? i(t._formatTokenizationError(o)) : (r.sendEvent(t._client, "payment-request.tokenize.succeeded"), n({
                                nonce: a.nonce,
                                type: a.type,
                                description: a.description,
                                details: {
                                    rawPaymentResponse: a.details.rawPaymentResponse,
                                    cardType: a.details.cardType,
                                    lastFour: a.details.lastFour,
                                    lastTwo: a.details.lastTwo
                                },
                                binData: a.binData
                            }))
                        }))
                    }))
                }, A.prototype.canMakePayment = function(e) {
                    var t, n = this;
                    return window.PaymentRequest ? e.supportedPaymentMethods && (e.supportedPaymentMethods.forEach((function(e) {
                        var n = e.supportedMethods;
                        n in E.SUPPORTED_METHODS || (t = n)
                    })), t) ? Promise.reject(new _({
                        type: m.PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD.type,
                        code: m.PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD.code,
                        message: t + " is not a supported payment method."
                    })) : new Promise((function(t, i) {
                        n._bus.emit(h.CAN_MAKE_PAYMENT, {
                            supportedPaymentMethods: e.supportedPaymentMethods || n._defaultSupportedPaymentMethods,
                            details: e.details,
                            options: e.options
                        }, (function(e) {
                            var o = e[0],
                                a = e[1];
                            o ? i(n._formatCanMakePaymentError(o)) : (r.sendEvent(n._client, "payment-request.can-make-payment." + a), t(a))
                        }))
                    })) : (r.sendEvent(n._client, "payment-request.can-make-payment.not-available"), Promise.resolve(!1))
                }, A.prototype.teardown = function() {
                    return this._bus.teardown(), this._frame.parentNode.removeChild(this._frame), a(this, u(A.prototype)), r.sendEvent(this._client, "payment-request.teardown-completed"), Promise.resolve()
                }, A.prototype._formatTokenizationError = function(e) {
                    var t;
                    switch (e.name) {
                        case "AbortError":
                            return t = new _({
                                type: m.PAYMENT_REQUEST_CANCELED.type,
                                code: m.PAYMENT_REQUEST_CANCELED.code,
                                message: m.PAYMENT_REQUEST_CANCELED.message,
                                details: {
                                    originalError: e
                                }
                            }), r.sendEvent(this._client, "payment-request.tokenize.canceled"), t;
                        case "PAYMENT_REQUEST_INITIALIZATION_FAILED":
                            t = new _({
                                type: m.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.type,
                                code: m.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.code,
                                message: m.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.message,
                                details: {
                                    originalError: e
                                }
                            });
                            break;
                        case "BRAINTREE_GATEWAY_GOOGLE_PAYMENT_TOKENIZATION_ERROR":
                            t = new _({
                                type: m.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.type,
                                code: m.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.code,
                                message: m.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.message,
                                details: {
                                    originalError: e
                                }
                            });
                            break;
                        case "BRAINTREE_GATEWAY_GOOGLE_PAYMENT_PARSING_ERROR":
                            t = new _({
                                type: m.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.type,
                                code: m.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.code,
                                message: m.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.message,
                                details: {
                                    originalError: e
                                }
                            });
                            break;
                        default:
                            t = new _({
                                code: m.PAYMENT_REQUEST_NOT_COMPLETED.code,
                                type: e.type || _.types.CUSTOMER,
                                message: m.PAYMENT_REQUEST_NOT_COMPLETED.message,
                                details: {
                                    originalError: e
                                }
                            })
                    }
                    return r.sendEvent(this._client, "payment-request.tokenize.failed"), t
                }, A.prototype._formatCanMakePaymentError = function(e) {
                    var t;
                    switch (e.name) {
                        case "PAYMENT_REQUEST_INITIALIZATION_FAILED":
                            t = new _({
                                type: m.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.type,
                                code: m.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.code,
                                message: m.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.message,
                                details: {
                                    originalError: e
                                }
                            });
                            break;
                        case "NotAllowedError":
                            t = new _({
                                type: m.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.type,
                                code: m.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.code,
                                message: m.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.message,
                                details: {
                                    originalError: e
                                }
                            });
                            break;
                        default:
                            t = new _({
                                code: m.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.code,
                                type: m.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.type,
                                message: m.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.message,
                                details: {
                                    originalError: e
                                }
                            })
                    }
                    return r.sendEvent(this._client, "payment-request.can-make-payment.failed"), t
                }, t.exports = f.wrapPrototype(A)
            }, {
                "../../lib/analytics": 116,
                "../../lib/assign": 118,
                "../../lib/braintree-error": 121,
                "../../lib/convert-methods-to-error": 124,
                "../../lib/generate-google-pay-configuration": 146,
                "../../lib/methods": 152,
                "../../lib/use-min": 157,
                "../shared/constants": 170,
                "@braintree/event-emitter": 32,
                "@braintree/iframer": 34,
                "@braintree/uuid": 38,
                "@braintree/wrap-promise": 42,
                framebus: 51
            }],
            169: [function(e, t, n) {
                var r = e("./external/payment-request"),
                    i = e("../lib/basic-component-verification"),
                    o = e("../lib/create-deferred-client"),
                    a = e("../lib/create-assets-url"),
                    s = e("@braintree/wrap-promise");
                t.exports = {
                    create: s((function(e) {
                        var t = "Payment Request";
                        return i.verify({
                            name: t,
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            return o.create({
                                authorization: e.authorization,
                                client: e.client,
                                debug: e.debug,
                                assetsUrl: a.create(e.authorization),
                                name: t
                            })
                        })).then((function(t) {
                            return e.client = t, new r(e).initialize()
                        }))
                    })),
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/basic-component-verification": 119,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "./external/payment-request": 168,
                "@braintree/wrap-promise": 42
            }],
            170: [function(e, t, n) {
                var r = e("../../lib/enumerate"),
                    i = e("./errors"),
                    o = {};
                o.events = r(["CAN_MAKE_PAYMENT", "FRAME_READY", "FRAME_CAN_MAKE_REQUESTS", "PAYMENT_REQUEST_INITIALIZED", "SHIPPING_ADDRESS_CHANGE", "UPDATE_SHIPPING_ADDRESS", "SHIPPING_OPTION_CHANGE", "UPDATE_SHIPPING_OPTION"], "payment-request:"), o.errors = i, o.SUPPORTED_METHODS = {
                    "basic-card": !0,
                    "https://google.com/pay": !0
                }, t.exports = o
            }, {
                "../../lib/enumerate": 131,
                "./errors": 171
            }],
            171: [function(e, t, n) {
                var r = e("../../lib/braintree-error");
                t.exports = {
                    PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS: {
                        type: r.types.MERCHANT,
                        code: "PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS",
                        message: "There are no supported payment methods associated with this account."
                    },
                    PAYMENT_REQUEST_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: "PAYMENT_REQUEST_CANCELED",
                        message: "Payment request was canceled."
                    },
                    PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED: {
                        type: r.types.MERCHANT,
                        code: "PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED",
                        message: "Something went wrong when configuring the payment request."
                    },
                    PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED: {
                        type: r.types.UNKNOWN,
                        code: "PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED",
                        message: "Something went wrong when calling `canMakePayment`"
                    },
                    PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED: {
                        type: r.types.MERCHANT,
                        code: "PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED",
                        message: "Something went wrong when calling `canMakePayment`. Most likely, `canMakePayment` was called multiple times with different supportedMethods configurations."
                    },
                    PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD: {
                        type: r.types.MERCHANT,
                        code: "PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD"
                    },
                    PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE: {
                        type: r.types.MERCHANT,
                        code: "PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE",
                        message: "Something went wrong when tokenizing the Google Pay card."
                    },
                    PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR: {
                        type: r.types.UNKNOWN,
                        code: "PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR",
                        message: "Something went wrong when tokenizing the Google Pay card."
                    },
                    PAYMENT_REQUEST_NOT_COMPLETED: {
                        code: "PAYMENT_REQUEST_NOT_COMPLETED",
                        message: "Payment request could not be completed."
                    },
                    PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE: {
                        type: r.types.MERCHANT,
                        code: "PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE",
                        message: "createSupportedPaymentMethodsConfiguration must include a type parameter."
                    },
                    PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: "PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED",
                        message: "createSupportedPaymentMethodsConfiguration type parameter must be valid or enabled."
                    }
                }
            }, {
                "../../lib/braintree-error": 121
            }],
            172: [function(e, t, n) {
                var r = e("../lib/braintree-error");
                t.exports = {
                    PAYPAL_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: "PAYPAL_NOT_ENABLED",
                        message: "PayPal is not enabled for this merchant."
                    },
                    PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED: {
                        type: r.types.MERCHANT,
                        code: "PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED",
                        message: "A linked PayPal Sandbox account is required to use PayPal Checkout in Sandbox. See https://developer.paypal.com/braintree/docs/guides/paypal/testing-go-live#linked-paypal-testing for details on linking your PayPal sandbox with Braintree."
                    },
                    PAYPAL_ACCOUNT_TOKENIZATION_FAILED: {
                        type: r.types.NETWORK,
                        code: "PAYPAL_ACCOUNT_TOKENIZATION_FAILED",
                        message: "Could not tokenize user's PayPal account."
                    },
                    PAYPAL_FLOW_FAILED: {
                        type: r.types.NETWORK,
                        code: "PAYPAL_FLOW_FAILED",
                        message: "Could not initialize PayPal flow."
                    },
                    PAYPAL_FLOW_OPTION_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: "PAYPAL_FLOW_OPTION_REQUIRED",
                        message: "PayPal flow property is invalid or missing."
                    },
                    PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED"
                    },
                    PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED: {
                        type: r.types.NETWORK,
                        code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED",
                        message: "Something went wrong when setting up the checkout workflow."
                    },
                    PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED: {
                        type: r.types.MERCHANT,
                        code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED",
                        message: "PayPal popup failed to open, make sure to initiate the vault checkout in response to a user action."
                    },
                    PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED",
                        message: "Customer closed PayPal popup before authorizing."
                    },
                    PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS: {
                        type: r.types.MERCHANT,
                        code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS",
                        message: "Vault initiated checkout already in progress."
                    },
                    PAYPAL_INVALID_PAYMENT_OPTION: {
                        type: r.types.MERCHANT,
                        code: "PAYPAL_INVALID_PAYMENT_OPTION",
                        message: "PayPal payment options are invalid."
                    },
                    PAYPAL_MISSING_REQUIRED_OPTION: {
                        type: r.types.MERCHANT,
                        code: "PAYPAL_MISSING_REQUIRED_OPTION",
                        message: "Missing required option."
                    }
                }
            }, {
                "../lib/braintree-error": 121
            }],
            173: [function(e, t, n) {
                var r = e("../lib/basic-component-verification"),
                    i = e("@braintree/wrap-promise"),
                    o = e("./paypal-checkout");
                t.exports = {
                    create: i((function(e) {
                        return r.verify({
                            name: "PayPal Checkout",
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            return new o(e)._initialize(e)
                        }))
                    })),
                    isSupported: function() {
                        return !0
                    },
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/basic-component-verification": 119,
                "./paypal-checkout": 174,
                "@braintree/wrap-promise": 42
            }],
            174: [function(e, t, n) {
                var r = e("../lib/analytics"),
                    i = e("../lib/assign").assign,
                    o = e("../lib/create-deferred-client"),
                    a = e("../lib/create-assets-url"),
                    s = e("@braintree/extended-promise"),
                    c = e("@braintree/wrap-promise"),
                    d = e("../lib/braintree-error"),
                    l = e("../lib/convert-to-braintree-error"),
                    u = e("./errors"),
                    p = e("../paypal/shared/constants"),
                    _ = e("../lib/frame-service/external"),
                    E = e("../lib/create-authorization-data"),
                    h = e("../lib/methods"),
                    m = e("../lib/use-min"),
                    f = e("../lib/convert-methods-to-error"),
                    y = e("../lib/querystring"),
                    A = e("../lib/constants").INTEGRATION_TIMEOUT_MS,
                    T = ["amount", "currency", "vaultInitiatedCheckoutPaymentMethodToken"];

                function I(e) {
                    this._merchantAccountId = e.merchantAccountId, this._autoSetDataUserIdToken = Boolean(e.autoSetDataUserIdToken)
                }
                s.suppressUnhandledPromiseMessage = !0, I.prototype._initialize = function(e) {
                    var t;
                    return e.client ? (t = e.client.getConfiguration(), this._authorizationInformation = {
                        fingerprint: t.authorizationFingerprint,
                        environment: t.gatewayConfiguration.environment
                    }) : (t = E(e.authorization), this._authorizationInformation = {
                        fingerprint: t.attrs.authorizationFingerprint,
                        environment: t.environment
                    }), this._clientPromise = o.create({
                        authorization: e.authorization,
                        client: e.client,
                        debug: e.debug,
                        assetsUrl: a.create(e.authorization),
                        name: "PayPal Checkout"
                    }).then(function(e) {
                        return this._configuration = e.getConfiguration(), this._merchantAccountId || (this._configuration.gatewayConfiguration.paypalEnabled ? !0 === this._configuration.gatewayConfiguration.paypal.environmentNoNetwork && (this._setupError = new d(u.PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED)) : this._setupError = new d(u.PAYPAL_NOT_ENABLED)), this._setupError ? Promise.reject(this._setupError) : (r.sendEvent(e, "paypal-checkout.initialized"), this._frameServicePromise = this._setupFrameService(e), e)
                    }.bind(this)), e.client ? this._clientPromise.then(function() {
                        return this
                    }.bind(this)) : Promise.resolve(this)
                }, I.prototype._setupFrameService = function(e) {
                    var t = new s,
                        n = e.getConfiguration(),
                        i = setTimeout((function() {
                            r.sendEvent(e, "paypal-checkout.frame-service.timed-out"), t.reject(new d(u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED))
                        }), A);
                    return this._assetsUrl = n.gatewayConfiguration.paypal.assetsUrl + "/web/3.94.0", this._isDebug = n.isDebug, this._loadingFrameUrl = this._assetsUrl + "/html/paypal-landing-frame" + m(this._isDebug) + ".html", _.create({
                        name: "braintreepaypallanding",
                        dispatchFrameUrl: this._assetsUrl + "/html/dispatch-frame" + m(this._isDebug) + ".html",
                        openFrameUrl: this._loadingFrameUrl
                    }, function(e) {
                        this._frameService = e, clearTimeout(i), t.resolve()
                    }.bind(this)), t
                }, I.prototype.createPayment = function(e) {
                    return e && p.FLOW_ENDPOINTS.hasOwnProperty(e.flow) ? (r.sendEvent(this._clientPromise, "paypal-checkout.createPayment"), this._createPaymentResource(e).then((function(t) {
                        return "checkout" === e.flow ? t.paymentResource.redirectUrl.match(/EC-\w+/)[0] : t.agreementSetup.tokenId
                    }))) : Promise.reject(new d(u.PAYPAL_FLOW_OPTION_REQUIRED))
                }, I.prototype._createPaymentResource = function(e, t) {
                    var n = this,
                        i = "paypal_hermes/" + p.FLOW_ENDPOINTS[e.flow];
                    return delete this.intentFromCreatePayment, t = t || {}, !0 === e.offerCredit && r.sendEvent(this._clientPromise, "paypal-checkout.credit.offered"), this._clientPromise.then((function(r) {
                        return r.request({
                            endpoint: i,
                            method: "post",
                            data: n._formatPaymentResourceData(e, t)
                        }).then((function(t) {
                            return n.intentFromCreatePayment = e.intent, t
                        }))
                    })).catch((function(e) {
                        return n._setupError ? Promise.reject(n._setupError) : 422 === (e.details && e.details.httpStatus) ? Promise.reject(new d({
                            type: u.PAYPAL_INVALID_PAYMENT_OPTION.type,
                            code: u.PAYPAL_INVALID_PAYMENT_OPTION.code,
                            message: u.PAYPAL_INVALID_PAYMENT_OPTION.message,
                            details: {
                                originalError: e
                            }
                        })) : Promise.reject(l(e, {
                            type: u.PAYPAL_FLOW_FAILED.type,
                            code: u.PAYPAL_FLOW_FAILED.code,
                            message: u.PAYPAL_FLOW_FAILED.message
                        }))
                    }))
                }, I.prototype.updatePayment = function(e) {
                    var t = this;
                    return !e || this._hasMissingOption(e, p.REQUIRED_OPTIONS) ? (r.sendEvent(t._clientPromise, "paypal-checkout.updatePayment.missing-options"), Promise.reject(new d(u.PAYPAL_MISSING_REQUIRED_OPTION))) : this._verifyConsistentCurrency(e) ? (r.sendEvent(this._clientPromise, "paypal-checkout.updatePayment"), this._clientPromise.then((function(n) {
                        return n.request({
                            endpoint: "paypal_hermes/patch_payment_resource",
                            method: "post",
                            data: t._formatUpdatePaymentData(e)
                        })
                    })).catch((function(e) {
                        return 422 === (e.details && e.details.httpStatus) ? (r.sendEvent(t._clientPromise, "paypal-checkout.updatePayment.invalid"), Promise.reject(new d({
                            type: u.PAYPAL_INVALID_PAYMENT_OPTION.type,
                            code: u.PAYPAL_INVALID_PAYMENT_OPTION.code,
                            message: u.PAYPAL_INVALID_PAYMENT_OPTION.message,
                            details: {
                                originalError: e
                            }
                        }))) : (r.sendEvent(t._clientPromise, "paypal-checkout.updatePayment." + u.PAYPAL_FLOW_FAILED.code), Promise.reject(l(e, {
                            type: u.PAYPAL_FLOW_FAILED.type,
                            code: u.PAYPAL_FLOW_FAILED.code,
                            message: u.PAYPAL_FLOW_FAILED.message
                        })))
                    }))) : (r.sendEvent(t._clientPromise, "paypal-checkout.updatePayment.inconsistent-currencies"), Promise.reject(new d({
                        type: u.PAYPAL_INVALID_PAYMENT_OPTION.type,
                        code: u.PAYPAL_INVALID_PAYMENT_OPTION.code,
                        message: u.PAYPAL_INVALID_PAYMENT_OPTION.message,
                        details: {
                            originalError: new Error("One or more shipping option currencies differ from checkout currency.")
                        }
                    })))
                }, I.prototype.startVaultInitiatedCheckout = function(e) {
                    var t, n = this;
                    return this._vaultInitiatedCheckoutInProgress ? (r.sendEvent(this._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.error.already-in-progress"), Promise.reject(new d(u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS))) : (T.forEach((function(n) {
                        e.hasOwnProperty(n) || (t = n)
                    })), t ? Promise.reject(new d({
                        type: u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.type,
                        code: u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.code,
                        message: "Required param " + t + " is missing."
                    })) : (this._vaultInitiatedCheckoutInProgress = !0, this._addModalBackdrop(e), e = i({}, e, {
                        flow: "checkout"
                    }), r.sendEvent(this._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.started"), this._waitForVaultInitiatedCheckoutDependencies().then((function() {
                        var t = new s,
                            r = n._createPaymentResource(e, {
                                returnUrl: n._constructVaultCheckutUrl("redirect-frame"),
                                cancelUrl: n._constructVaultCheckutUrl("cancel-frame")
                            }).then((function(e) {
                                var r = e.paymentResource.redirectUrl;
                                return n._frameService.redirect(r), t
                            }));
                        return n._frameService.open({}, n._createFrameServiceCallback(t)), r
                    })).catch((function(e) {
                        return n._vaultInitiatedCheckoutInProgress = !1, n._removeModalBackdrop(), "FRAME_SERVICE_FRAME_CLOSED" === e.code ? (r.sendEvent(n._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.canceled.by-customer"), Promise.reject(new d(u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED))) : (n._frameService && n._frameService.close(), e.code && e.code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") > -1 ? (r.sendEvent(n._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.failed.popup-not-opened"), Promise.reject(new d({
                            code: u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED.code,
                            type: u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED.type,
                            message: u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED.message,
                            details: {
                                originalError: e
                            }
                        }))) : Promise.reject(e))
                    })).then((function(e) {
                        return n._frameService.close(), n._vaultInitiatedCheckoutInProgress = !1, n._removeModalBackdrop(), r.sendEvent(n._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.succeeded"), Promise.resolve(e)
                    }))))
                }, I.prototype._addModalBackdrop = function(e) {
                    e.optOutOfModalBackdrop || (this._modalBackdrop || (this._modalBackdrop = document.createElement("div"), this._modalBackdrop.setAttribute("data-braintree-paypal-vault-initiated-checkout-modal", !0), this._modalBackdrop.style.position = "fixed", this._modalBackdrop.style.top = 0, this._modalBackdrop.style.bottom = 0, this._modalBackdrop.style.left = 0, this._modalBackdrop.style.right = 0, this._modalBackdrop.style.zIndex = 9999, this._modalBackdrop.style.background = "black", this._modalBackdrop.style.opacity = "0.7", this._modalBackdrop.addEventListener("click", function() {
                        this.focusVaultInitiatedCheckoutWindow()
                    }.bind(this))), document.body.appendChild(this._modalBackdrop))
                }, I.prototype._removeModalBackdrop = function() {
                    this._modalBackdrop && this._modalBackdrop.parentNode && this._modalBackdrop.parentNode.removeChild(this._modalBackdrop)
                }, I.prototype.closeVaultInitiatedCheckoutWindow = function() {
                    return this._vaultInitiatedCheckoutInProgress && r.sendEvent(this._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.canceled.by-merchant"), this._waitForVaultInitiatedCheckoutDependencies().then(function() {
                        this._frameService.close()
                    }.bind(this))
                }, I.prototype.focusVaultInitiatedCheckoutWindow = function() {
                    return this._waitForVaultInitiatedCheckoutDependencies().then(function() {
                        this._frameService.focus()
                    }.bind(this))
                }, I.prototype._createFrameServiceCallback = function(e) {
                    var t = this;
                    return function(n, r) {
                        n ? e.reject(n) : r && (t._frameService.redirect(t._loadingFrameUrl), t.tokenizePayment({
                            paymentToken: r.token,
                            payerID: r.PayerID,
                            paymentID: r.paymentId
                        }).then((function(t) {
                            e.resolve(t)
                        })).catch((function(t) {
                            e.reject(t)
                        })))
                    }
                }, I.prototype._waitForVaultInitiatedCheckoutDependencies = function() {
                    var e = this;
                    return this._clientPromise.then((function() {
                        return e._frameServicePromise
                    }))
                }, I.prototype._constructVaultCheckutUrl = function(e) {
                    var t = this._frameService._serviceId;
                    return this._assetsUrl + "/html/" + e + m(this._isDebug) + ".html?channel=" + t
                }, I.prototype.tokenizePayment = function(e) {
                    var t, n = this,
                        i = !0,
                        o = {
                            flow: e.billingToken && !e.paymentID ? "vault" : "checkout",
                            intent: e.intent || this.intentFromCreatePayment
                        },
                        a = {
                            ecToken: e.paymentToken,
                            billingToken: e.billingToken,
                            payerId: e.payerID,
                            paymentId: e.paymentID,
                            shippingOptionsId: e.shippingOptionsId
                        };
                    return e.hasOwnProperty("vault") && (i = e.vault), o.vault = i, r.sendEvent(this._clientPromise, "paypal-checkout.tokenization.started"), this._clientPromise.then((function(e) {
                        return e.request({
                            endpoint: "payment_methods/paypal_accounts",
                            method: "post",
                            data: n._formatTokenizeData(o, a)
                        })
                    })).then((function(e) {
                        return t = n._formatTokenizePayload(e), r.sendEvent(n._clientPromise, "paypal-checkout.tokenization.success"), t.creditFinancingOffered && r.sendEvent(n._clientPromise, "paypal-checkout.credit.accepted"), t
                    })).catch((function(e) {
                        return n._setupError ? Promise.reject(n._setupError) : (r.sendEvent(n._clientPromise, "paypal-checkout.tokenization.failed"), Promise.reject(l(e, {
                            type: u.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type,
                            code: u.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code,
                            message: u.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message
                        })))
                    }))
                }, I.prototype.getClientId = function() {
                    return this._clientPromise.then((function(e) {
                        return e.getConfiguration().gatewayConfiguration.paypal.clientId
                    }))
                }, I.prototype.loadPayPalSDK = function(e) {
                    var t = new s,
                        n = e && e.dataAttributes || {},
                        r = n["user-id-token"] || n["data-user-id-token"];
                    return r || (r = this._authorizationInformation.fingerprint && this._authorizationInformation.fingerprint.split("?")[0]), this._paypalScript = document.createElement("script"), delete(e = i({}, {
                        components: "buttons"
                    }, e)).dataAttributes, e.vault ? e.intent = e.intent || "tokenize" : (e.intent = e.intent || "authorize", e.currency = e.currency || "USD"), this._paypalScript.onload = function() {
                        t.resolve()
                    }, Object.keys(n).forEach(function(e) {
                        this._paypalScript.setAttribute("data-" + e.replace(/^data\-/, ""), n[e])
                    }.bind(this)), (e["client-id"] ? Promise.resolve(e["client-id"]) : this.getClientId()).then(function(t) {
                        e["client-id"] = t, this._autoSetDataUserIdToken && r && (this._paypalScript.setAttribute("data-user-id-token", r), this._attachPreloadPixel({
                            id: t,
                            userIdToken: r,
                            amount: n.amount,
                            currency: e.currency,
                            merchantId: e["merchant-id"]
                        })), this._paypalScript.src = y.queryify("https://www.paypal.com/sdk/js?", e), document.head.insertBefore(this._paypalScript, document.head.firstElementChild)
                    }.bind(this)), t.then(function() {
                        return this
                    }.bind(this))
                }, I.prototype._attachPreloadPixel = function(e) {
                    var t, n = e.id,
                        r = e.userIdToken,
                        i = this._authorizationInformation.environment,
                        o = "https://www.{ENV}paypal.com/smart/buttons/preload".replace("{ENV}", "production" === i ? "" : "sandbox."),
                        a = {
                            "client-id": n,
                            "user-id-token": r
                        };
                    e.amount && (a.amount = e.amount), e.currency && (a.currency = e.currency), e.merchantId && (a["merchant-id"] = e.merchantId), (t = new XMLHttpRequest).open("GET", y.queryify(o, a)), t.send()
                }, I.prototype._formatPaymentResourceData = function(e, t) {
                    var n, r = this._configuration.gatewayConfiguration,
                        i = e.intent,
                        o = {
                            returnUrl: t.returnUrl || "https://www.paypal.com/checkoutnow/error",
                            cancelUrl: t.cancelUrl || "https://www.paypal.com/checkoutnow/error",
                            offerPaypalCredit: !0 === e.offerCredit,
                            merchantAccountId: this._merchantAccountId,
                            experienceProfile: {
                                brandName: e.displayName || r.paypal.displayName,
                                localeCode: e.locale,
                                noShipping: (!e.enableShippingAddress).toString(),
                                addressOverride: !1 === e.shippingAddressEditable,
                                landingPageType: e.landingPageType
                            },
                            shippingOptions: e.shippingOptions
                        };
                    if ("checkout" === e.flow) {
                        for (n in o.amount = e.amount, o.currencyIsoCode = e.currency, o.requestBillingAgreement = e.requestBillingAgreement, i && ("capture" === i && (i = "sale"), o.intent = i), e.hasOwnProperty("lineItems") && (o.lineItems = e.lineItems), e.hasOwnProperty("vaultInitiatedCheckoutPaymentMethodToken") && (o.vaultInitiatedCheckoutPaymentMethodToken = e.vaultInitiatedCheckoutPaymentMethodToken), e.hasOwnProperty("shippingOptions") && (o.shippingOptions = e.shippingOptions), e.shippingAddressOverride) e.shippingAddressOverride.hasOwnProperty(n) && (o[n] = e.shippingAddressOverride[n]);
                        e.hasOwnProperty("billingAgreementDetails") && (o.billingAgreementDetails = e.billingAgreementDetails)
                    } else o.shippingAddress = e.shippingAddressOverride, e.billingAgreementDescription && (o.description = e.billingAgreementDescription);
                    return this._riskCorrelationId = e.riskCorrelationId, e.riskCorrelationId && (o.correlationId = this._riskCorrelationId), o
                }, I.prototype._verifyConsistentCurrency = function(e) {
                    return !(e.currency && e.hasOwnProperty("shippingOptions") && Array.isArray(e.shippingOptions)) || e.shippingOptions.every((function(t) {
                        return t.amount && t.amount.currency && e.currency.toLowerCase() === t.amount.currency.toLowerCase()
                    }))
                }, I.prototype._hasMissingOption = function(e, t) {
                    var n, r;
                    if (t = t || [], !e.hasOwnProperty("amount") && !e.hasOwnProperty("lineItems")) return !0;
                    for (n = 0; n < t.length; n++)
                        if (r = t[n], !e.hasOwnProperty(r)) return !0;
                    return !1
                }, I.prototype._formatUpdatePaymentData = function(e) {
                    var t = {
                        merchantAccountId: this._merchantAccountId,
                        paymentId: e.paymentId,
                        currencyIsoCode: e.currency
                    };
                    return e.hasOwnProperty("amount") && (t.amount = e.amount), e.hasOwnProperty("lineItems") && (t.lineItems = e.lineItems), e.hasOwnProperty("shippingOptions") && (t.shippingOptions = e.shippingOptions), e.hasOwnProperty("shippingAddress") && (r.sendEvent(this._clientPromise, "paypal-checkout.updatePayment.shippingAddress.provided.by-the-merchant"), t.line1 = e.shippingAddress.line1, e.shippingAddress.hasOwnProperty("line2") && (t.line2 = e.shippingAddress.line2), t.city = e.shippingAddress.city, t.state = e.shippingAddress.state, t.postalCode = e.shippingAddress.postalCode, t.countryCode = e.shippingAddress.countryCode, e.shippingAddress.hasOwnProperty("phone") && (t.phone = e.shippingAddress.phone), e.shippingAddress.hasOwnProperty("recipientName") && (t.recipientName = e.shippingAddress.recipientName)), t
                }, I.prototype._formatTokenizeData = function(e, t) {
                    var n = this._configuration,
                        r = n.gatewayConfiguration,
                        i = "TOKENIZATION_KEY" === n.authorizationType,
                        o = "vault" === e.flow,
                        a = {
                            paypalAccount: {
                                correlationId: this._riskCorrelationId || t.billingToken || t.ecToken,
                                options: {
                                    validate: o && !i && e.vault
                                }
                            }
                        };
                    return o ? a.paypalAccount.billingAgreementToken = t.billingToken : (a.paypalAccount.paymentToken = t.paymentId, a.paypalAccount.payerId = t.payerId, a.paypalAccount.unilateral = r.paypal.unvettedMerchant, e.intent && (a.paypalAccount.intent = e.intent)), this._merchantAccountId && (a.merchantAccountId = this._merchantAccountId), a
                }, I.prototype._formatTokenizePayload = function(e) {
                    var t, n = {};
                    return e.paypalAccounts && (n = e.paypalAccounts[0]), t = {
                        nonce: n.nonce,
                        details: {},
                        type: n.type
                    }, n.details && n.details.payerInfo && (t.details = n.details.payerInfo), n.details && n.details.creditFinancingOffered && (t.creditFinancingOffered = n.details.creditFinancingOffered), n.details && n.details.shippingOptionId && (t.shippingOptionId = n.details.shippingOptionId), n.details && n.details.cobrandedCardLabel && (t.cobrandedCardLabel = n.details.cobrandedCardLabel), t
                }, I.prototype.teardown = function() {
                    var e = this;
                    return f(this, h(I.prototype)), this._paypalScript && this._paypalScript.parentNode && this._paypalScript.parentNode.removeChild(this._paypalScript), this._frameServicePromise.catch((function() {})).then((function() {
                        return e._frameService ? e._frameService.teardown() : Promise.resolve()
                    }))
                }, t.exports = c.wrapPrototype(I)
            }, {
                "../lib/analytics": 116,
                "../lib/assign": 118,
                "../lib/braintree-error": 121,
                "../lib/constants": 123,
                "../lib/convert-methods-to-error": 124,
                "../lib/convert-to-braintree-error": 125,
                "../lib/create-assets-url": 126,
                "../lib/create-authorization-data": 127,
                "../lib/create-deferred-client": 128,
                "../lib/frame-service/external": 136,
                "../lib/methods": 152,
                "../lib/querystring": 154,
                "../lib/use-min": 157,
                "../paypal/shared/constants": 177,
                "./errors": 172,
                "@braintree/extended-promise": 33,
                "@braintree/wrap-promise": 42
            }],
            175: [function(e, t, n) {
                var r = e("../../lib/frame-service/external"),
                    i = e("../../lib/braintree-error"),
                    o = e("../../lib/convert-to-braintree-error"),
                    a = e("../../lib/use-min"),
                    s = e("../../lib/once"),
                    c = "3.94.0",
                    d = e("../shared/constants"),
                    l = e("../../lib/constants").INTEGRATION_TIMEOUT_MS,
                    u = e("../../lib/analytics"),
                    p = e("../../lib/methods"),
                    _ = e("../../lib/deferred"),
                    E = e("../shared/errors"),
                    h = e("../../lib/convert-methods-to-error"),
                    m = e("../../lib/querystring"),
                    f = e("@braintree/wrap-promise");

                function y(e) {
                    this._client = e.client, this._assetsUrl = e.client.getConfiguration().gatewayConfiguration.paypal.assetsUrl + "/web/" + c, this._isDebug = e.client.getConfiguration().isDebug, this._loadingFrameUrl = this._assetsUrl + "/html/paypal-landing-frame" + a(this._isDebug) + ".html", this._authorizationInProgress = !1
                }
                y.prototype._initialize = function() {
                    var e = this,
                        t = this._client,
                        n = setTimeout((function() {
                            u.sendEvent(t, "paypal.load.timed-out")
                        }), l);
                    return new Promise((function(i) {
                        r.create({
                            name: d.LANDING_FRAME_NAME,
                            dispatchFrameUrl: e._assetsUrl + "/html/dispatch-frame" + a(e._isDebug) + ".html",
                            openFrameUrl: e._loadingFrameUrl
                        }, (function(r) {
                            e._frameService = r, clearTimeout(n), u.sendEvent(t, "paypal.load.succeeded"), i(e)
                        }))
                    }))
                }, y.prototype.tokenize = function(e, t) {
                    var n, r, o = this,
                        a = this._client;
                    return t && (t = s(_(t))), e && d.FLOW_ENDPOINTS.hasOwnProperty(e.flow) ? (n = new Promise((function(t, n) {
                        o._authorizationInProgress ? (u.sendEvent(a, "paypal.tokenization.error.already-opened"), n(new i(E.PAYPAL_TOKENIZATION_REQUEST_ACTIVE))) : (o._authorizationInProgress = !0, window.popupBridge || u.sendEvent(a, "paypal.tokenization.opened"), !0 === e.offerCredit && u.sendEvent(a, "paypal.credit.offered"), !0 === e.offerPayLater && u.sendEvent(a, "paypal.paylater.offered"), o._navigateFrameToAuth(e).catch(n), o._frameService.open({}, o._createFrameServiceCallback(e, t, n)))
                    })), t ? (n.then((function(e) {
                        t(null, e)
                    })).catch(t), this._frameService.createHandler({
                        beforeClose: function() {
                            u.sendEvent(a, "paypal.tokenization.closed.by-merchant")
                        }
                    })) : n) : (r = new i(E.PAYPAL_FLOW_OPTION_REQUIRED), t ? (t(r), this._frameService.createNoopHandler()) : Promise.reject(r))
                }, y.prototype._createFrameServiceCallback = function(e, t, n) {
                    var r = this,
                        o = this._client;
                    return window.popupBridge ? function(a, s) {
                        var c = s && s.path && "/cancel" === s.path.substring(0, 7);
                        r._authorizationInProgress = !1, a || c ? (u.sendEvent(o, "paypal.tokenization.closed-popupbridge.by-user"), n(new i(E.PAYPAL_POPUP_CLOSED))) : s && r._tokenizePayPal(e, s.queryItems).then(t).catch(n)
                    } : function(a, s) {
                        r._authorizationInProgress = !1, a ? "FRAME_SERVICE_FRAME_CLOSED" === a.code ? (u.sendEvent(o, "paypal.tokenization.closed.by-user"), n(new i(E.PAYPAL_POPUP_CLOSED))) : a.code && a.code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") > -1 && n(new i({
                            code: E.PAYPAL_POPUP_OPEN_FAILED.code,
                            type: E.PAYPAL_POPUP_OPEN_FAILED.type,
                            message: E.PAYPAL_POPUP_OPEN_FAILED.message,
                            details: {
                                originalError: a
                            }
                        })) : s && r._tokenizePayPal(e, s).then(t).catch(n)
                    }
                }, y.prototype._tokenizePayPal = function(e, t) {
                    var n = this,
                        r = this._client;
                    return window.popupBridge || this._frameService.redirect(this._loadingFrameUrl), r.request({
                        endpoint: "payment_methods/paypal_accounts",
                        method: "post",
                        data: this._formatTokenizeData(e, t)
                    }).then((function(e) {
                        var t = n._formatTokenizePayload(e);
                        return window.popupBridge ? u.sendEvent(r, "paypal.tokenization.success-popupbridge") : u.sendEvent(r, "paypal.tokenization.success"), t.creditFinancingOffered && u.sendEvent(r, "paypal.credit.accepted"), n._frameService.close(), t
                    })).catch((function(e) {
                        return window.popupBridge ? u.sendEvent(r, "paypal.tokenization.failed-popupbridge") : u.sendEvent(r, "paypal.tokenization.failed"), n._frameService.close(), Promise.reject(o(e, {
                            type: E.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type,
                            code: E.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code,
                            message: E.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message
                        }))
                    }))
                }, y.prototype._formatTokenizePayload = function(e) {
                    var t, n = {};
                    return e.paypalAccounts && (n = e.paypalAccounts[0]), t = {
                        nonce: n.nonce,
                        details: {},
                        type: n.type
                    }, n.details && n.details.payerInfo && (t.details = n.details.payerInfo), n.details && n.details.creditFinancingOffered && (t.creditFinancingOffered = n.details.creditFinancingOffered), t
                }, y.prototype._formatTokenizeData = function(e, t) {
                    var n = this._client.getConfiguration(),
                        r = n.gatewayConfiguration,
                        i = "TOKENIZATION_KEY" === n.authorizationType,
                        o = {
                            paypalAccount: {
                                correlationId: t.ba_token || t.token,
                                options: {
                                    validate: "vault" === e.flow && !i
                                }
                            }
                        };
                    return t.ba_token ? o.paypalAccount.billingAgreementToken = t.ba_token : (o.paypalAccount.paymentToken = t.paymentId, o.paypalAccount.payerId = t.PayerID, o.paypalAccount.unilateral = r.paypal.unvettedMerchant, e.hasOwnProperty("intent") && (o.paypalAccount.intent = e.intent)), o
                }, y.prototype._navigateFrameToAuth = function(e) {
                    var t = this,
                        n = this._client,
                        r = "paypal_hermes/" + d.FLOW_ENDPOINTS[e.flow];
                    return n.request({
                        endpoint: r,
                        method: "post",
                        data: this._formatPaymentResourceData(e)
                    }).then((function(r) {
                        var i;
                        i = "checkout" === e.flow ? r.paymentResource.redirectUrl : r.agreementSetup.approvalUrl, "commit" === e.useraction && (i = m.queryify(i, {
                            useraction: "commit"
                        })), window.popupBridge && u.sendEvent(n, "paypal.tokenization.opened-popupbridge"), t._frameService.redirect(i)
                    })).catch((function(e) {
                        var n = e.details && e.details.httpStatus;
                        return t._frameService.close(), t._authorizationInProgress = !1, 422 === n ? Promise.reject(new i({
                            type: E.PAYPAL_INVALID_PAYMENT_OPTION.type,
                            code: E.PAYPAL_INVALID_PAYMENT_OPTION.code,
                            message: E.PAYPAL_INVALID_PAYMENT_OPTION.message,
                            details: {
                                originalError: e
                            }
                        })) : Promise.reject(o(e, {
                            type: E.PAYPAL_FLOW_FAILED.type,
                            code: E.PAYPAL_FLOW_FAILED.code,
                            message: E.PAYPAL_FLOW_FAILED.message
                        }))
                    }))
                }, y.prototype._formatPaymentResourceData = function(e) {
                    var t, n = this._client.getConfiguration().gatewayConfiguration,
                        r = this._frameService._serviceId,
                        i = {
                            returnUrl: n.paypal.assetsUrl + "/web/" + c + "/html/redirect-frame" + a(this._isDebug) + ".html?channel=" + r,
                            cancelUrl: n.paypal.assetsUrl + "/web/" + c + "/html/cancel-frame" + a(this._isDebug) + ".html?channel=" + r,
                            offerPaypalCredit: !0 === e.offerCredit,
                            offerPayLater: !0 === e.offerPayLater,
                            experienceProfile: {
                                brandName: e.displayName || n.paypal.displayName,
                                localeCode: e.locale,
                                noShipping: (!e.enableShippingAddress).toString(),
                                addressOverride: !1 === e.shippingAddressEditable,
                                landingPageType: e.landingPageType
                            }
                        };
                    if (window.popupBridge && "function" == typeof window.popupBridge.getReturnUrlPrefix && (i.returnUrl = window.popupBridge.getReturnUrlPrefix() + "return", i.cancelUrl = window.popupBridge.getReturnUrlPrefix() + "cancel"), "checkout" === e.flow)
                        for (t in i.amount = e.amount, i.currencyIsoCode = e.currency, e.hasOwnProperty("intent") && (i.intent = e.intent), e.shippingAddressOverride) e.shippingAddressOverride.hasOwnProperty(t) && (i[t] = e.shippingAddressOverride[t]);
                    else i.shippingAddress = e.shippingAddressOverride, e.billingAgreementDescription && (i.description = e.billingAgreementDescription);
                    return i
                }, y.prototype.closeWindow = function() {
                    this._authorizationInProgress && u.sendEvent(this._client, "paypal.tokenize.closed.by-merchant"), this._frameService.close()
                }, y.prototype.focusWindow = function() {
                    this._frameService.focus()
                }, y.prototype.teardown = f((function() {
                    var e = this;
                    return e._frameService.teardown(), h(e, p(y.prototype)), u.sendEvent(e._client, "paypal.teardown-completed"), Promise.resolve()
                })), t.exports = y
            }, {
                "../../lib/analytics": 116,
                "../../lib/braintree-error": 121,
                "../../lib/constants": 123,
                "../../lib/convert-methods-to-error": 124,
                "../../lib/convert-to-braintree-error": 125,
                "../../lib/deferred": 129,
                "../../lib/frame-service/external": 136,
                "../../lib/methods": 152,
                "../../lib/once": 153,
                "../../lib/querystring": 154,
                "../../lib/use-min": 157,
                "../shared/constants": 177,
                "../shared/errors": 178,
                "@braintree/wrap-promise": 42
            }],
            176: [function(e, t, n) {
                var r = e("../lib/analytics"),
                    i = e("../lib/basic-component-verification"),
                    o = e("../lib/create-deferred-client"),
                    a = e("../lib/create-assets-url"),
                    s = e("../lib/braintree-error"),
                    c = e("./shared/errors"),
                    d = e("./external/paypal"),
                    l = e("@braintree/wrap-promise");
                t.exports = {
                    create: l((function(e) {
                        var t = "PayPal";
                        return i.verify({
                            name: t,
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            return o.create({
                                authorization: e.authorization,
                                client: e.client,
                                debug: e.debug,
                                assetsUrl: a.create(e.authorization),
                                name: t
                            })
                        })).then((function(t) {
                            var n = t.getConfiguration();
                            return e.client = t, !0 !== n.gatewayConfiguration.paypalEnabled ? Promise.reject(new s(c.PAYPAL_NOT_ENABLED)) : (r.sendEvent(e.client, "paypal.initialized"), new d(e)._initialize())
                        }))
                    })),
                    isSupported: function() {
                        return !0
                    },
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/analytics": 116,
                "../lib/basic-component-verification": 119,
                "../lib/braintree-error": 121,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "./external/paypal": 175,
                "./shared/errors": 178,
                "@braintree/wrap-promise": 42
            }],
            177: [function(e, t, n) {
                t.exports = {
                    LANDING_FRAME_NAME: "braintreepaypallanding",
                    FLOW_ENDPOINTS: {
                        checkout: "create_payment_resource",
                        vault: "setup_billing_agreement"
                    },
                    REQUIRED_OPTIONS: ["paymentId", "currency"]
                }
            }, {}],
            178: [function(e, t, n) {
                var r = e("../../lib/braintree-error");
                t.exports = {
                    PAYPAL_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: "PAYPAL_NOT_ENABLED",
                        message: "PayPal is not enabled for this merchant."
                    },
                    PAYPAL_TOKENIZATION_REQUEST_ACTIVE: {
                        type: r.types.MERCHANT,
                        code: "PAYPAL_TOKENIZATION_REQUEST_ACTIVE",
                        message: "Another tokenization request is active."
                    },
                    PAYPAL_ACCOUNT_TOKENIZATION_FAILED: {
                        type: r.types.NETWORK,
                        code: "PAYPAL_ACCOUNT_TOKENIZATION_FAILED",
                        message: "Could not tokenize user's PayPal account."
                    },
                    PAYPAL_FLOW_FAILED: {
                        type: r.types.NETWORK,
                        code: "PAYPAL_FLOW_FAILED",
                        message: "Could not initialize PayPal flow."
                    },
                    PAYPAL_FLOW_OPTION_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: "PAYPAL_FLOW_OPTION_REQUIRED",
                        message: "PayPal flow property is invalid or missing."
                    },
                    PAYPAL_POPUP_OPEN_FAILED: {
                        type: r.types.MERCHANT,
                        code: "PAYPAL_POPUP_OPEN_FAILED",
                        message: "PayPal popup failed to open, make sure to tokenize in response to a user action."
                    },
                    PAYPAL_POPUP_CLOSED: {
                        type: r.types.CUSTOMER,
                        code: "PAYPAL_POPUP_CLOSED",
                        message: "Customer closed PayPal popup before authorizing."
                    },
                    PAYPAL_INVALID_PAYMENT_OPTION: {
                        type: r.types.MERCHANT,
                        code: "PAYPAL_INVALID_PAYMENT_OPTION",
                        message: "PayPal payment options are invalid."
                    }
                }
            }, {
                "../../lib/braintree-error": 121
            }],
            179: [function(e, t, n) {
                var r = e("@braintree/wrap-promise"),
                    i = e("../lib/basic-component-verification"),
                    o = e("./preferred-payment-methods");
                t.exports = {
                    create: r((function(e) {
                        return i.verify({
                            name: "PreferredPaymentMethods",
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            return (new o).initialize(e)
                        }))
                    })),
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/basic-component-verification": 119,
                "./preferred-payment-methods": 180,
                "@braintree/wrap-promise": 42
            }],
            180: [function(e, t, n) {
                var r = e("@braintree/wrap-promise"),
                    i = e("../lib/analytics"),
                    o = e("../lib/create-assets-url"),
                    a = e("../lib/create-deferred-client");

                function s() {}
                s.prototype.initialize = function(e) {
                    var t = this;
                    return this._clientPromise = a.create({
                        authorization: e.authorization,
                        client: e.client,
                        debug: e.debug,
                        assetsUrl: o.create(e.authorization),
                        name: "PreferredPaymentMethods"
                    }).catch((function(e) {
                        return t._setupError = e, Promise.reject(e)
                    })), i.sendEvent(this._clientPromise, "preferred-payment-methods.initialized"), Promise.resolve(this)
                }, s.prototype.fetchPreferredPaymentMethods = function() {
                    var e, t = this;
                    return this._clientPromise.then((function(t) {
                        return (e = t).request({
                            api: "graphQLApi",
                            data: {
                                query: "query PreferredPaymentMethods { preferredPaymentMethods { paypalPreferred venmoPreferred } }"
                            }
                        })
                    })).then((function(t) {
                        var n = t.data.preferredPaymentMethods.paypalPreferred,
                            r = t.data.preferredPaymentMethods.venmoPreferred;
                        return i.sendEvent(e, "preferred-payment-methods.paypal.api-detected." + n), i.sendEvent(e, "preferred-payment-methods.venmo.api-detected." + r), {
                            paypalPreferred: n,
                            venmoPreferred: r
                        }
                    })).catch((function() {
                        return t._setupError ? Promise.reject(t._setupError) : (i.sendEvent(e, "preferred-payment-methods.api-error"), {
                            paypalPreferred: !1,
                            venmoPreferred: !1
                        })
                    }))
                }, t.exports = r.wrapPrototype(s)
            }, {
                "../lib/analytics": 116,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "@braintree/wrap-promise": 42
            }],
            181: [function(e, t, n) {
                var r = e("../../lib/braintree-error"),
                    i = e("../shared/errors"),
                    o = e("../../lib/frame-service/external"),
                    a = e("../../lib/analytics"),
                    s = e("../../lib/use-min");

                function c(e) {
                    return e && e.success
                }

                function d(e, t) {
                    return e && e.cancel || t && "FRAME_SERVICE_FRAME_CLOSED" === t.code
                }
                t.exports = {
                    createMandate: function(e, t) {
                        var n = {
                            sepa_debit: {
                                account_holder_name: t.accountHolderName,
                                merchant_or_partner_customer_id: t.customerId,
                                iban: t.iban,
                                mandate_type: t.mandateType,
                                billing_address: {
                                    country_code: t.countryCode
                                }
                            },
                            cancel_url: t.cancelUrl,
                            return_url: t.returnUrl,
                            merchant_account_id: t.merchantAccountId
                        };
                        return e.request({
                            api: "clientApi",
                            method: "post",
                            endpoint: "sepa_debit",
                            data: n
                        }).then((function(e) {
                            var t = e.message.body.sepaDebitAccount;
                            if (!t) throw new r(i.SEPA_CREATE_MANDATE_FAILED);
                            return {
                                approvalUrl: t.approvalUrl,
                                last4: t.last4,
                                bankReferenceToken: t.bankReferenceToken
                            }
                        })).catch((function() {
                            throw new r(i.SEPA_CREATE_MANDATE_FAILED)
                        }))
                    },
                    openPopup: function(e, t) {
                        var n = t.assetsUrl + "/html",
                            l = t.debug || !1;
                        return new Promise((function(u, p) {
                            var _, E, h = (_ = Math.round((window.outerHeight - 570) / 2) + window.screenTop, E = Math.round((window.outerWidth - 400) / 2) + window.screenLeft, {
                                top: _,
                                left: E
                            });
                            o.create({
                                name: "sepadirectdebit",
                                dispatchFrameUrl: n + "/dispatch-frame" + s(l) + ".html",
                                openFrameUrl: n + "/sepa-landing-frame" + s(l) + ".html",
                                top: h.top,
                                left: h.left,
                                height: 570,
                                width: 400
                            }, (function(n) {
                                a.sendEvent(e, "sepa.popup.initialized"), n.open({}, (function(e, t) {
                                    return c(t) ? (n.close(), u()) : d(t, e) ? (n.close(), p(new r(i.SEPA_CUSTOMER_CANCELED))) : (n.close(), p(new r(i.SEPA_TOKENIZATION_FAILED)))
                                })), n.redirect(t.approvalUrl)
                            }))
                        }))
                    },
                    handleApproval: function(e, t) {
                        var n = {
                            sepa_debit_account: {
                                last_4: t.last4,
                                merchant_or_partner_customer_id: t.customerId,
                                bank_reference_token: t.bankReferenceToken,
                                mandate_type: t.mandateType
                            },
                            merchant_account_id: t.merchantAccountId
                        };
                        return e.request({
                            api: "clientApi",
                            method: "post",
                            endpoint: "payment_methods/sepa_debit_accounts",
                            data: n
                        }).then((function(e) {
                            if (!e.nonce) throw new r(i.SEPA_TRANSACTION_FAILED);
                            return {
                                nonce: e.nonce,
                                ibanLastFour: t.last4,
                                customerId: t.customerId,
                                mandateType: t.mandateType
                            }
                        })).catch((function() {
                            throw new r(i.SEPA_TRANSACTION_FAILED)
                        }))
                    },
                    POPUP_WIDTH: 400,
                    POPUP_HEIGHT: 570
                }
            }, {
                "../../lib/analytics": 116,
                "../../lib/braintree-error": 121,
                "../../lib/frame-service/external": 136,
                "../../lib/use-min": 157,
                "../shared/errors": 185
            }],
            182: [function(e, t, n) {
                var r = e("@braintree/wrap-promise"),
                    i = e("../../lib/braintree-error"),
                    o = e("../shared/errors"),
                    a = e("../shared/constants"),
                    s = e("./mandate"),
                    c = e("../shared/has-missing-option"),
                    d = e("../../lib/analytics");

                function l(e) {
                    var t = e.client.getConfiguration();
                    this._client = e.client, this._assetsUrl = t.gatewayConfiguration.assetsUrl + "/web/3.94.0", this._isDebug = t.isDebug, this._returnUrl = this._assetsUrl + "/html/redirect-frame.html?success=1", this._cancelUrl = this._assetsUrl + "/html/redirect-frame.html?cancel=1", d.sendEvent(this._client, "sepa.component.initialized")
                }
                l.prototype.tokenize = function(e) {
                    var t = this;
                    return !e || c(e, a.REQUIRED_OPTIONS) ? (d.sendEvent(t._client, "sepa.input-validation.missing-options"), Promise.reject(new i(o.SEPA_TOKENIZE_MISSING_REQUIRED_OPTION))) : a.MANDATE_TYPE_ENUM.includes(e.mandateType) ? s.createMandate(t._client, {
                        accountHolderName: e.accountHolderName,
                        customerId: e.customerId,
                        iban: e.iban,
                        mandateType: e.mandateType,
                        countryCode: e.countryCode,
                        merchantAccountId: e.merchantAccountId,
                        cancelUrl: t._cancelUrl,
                        returnUrl: t._returnUrl
                    }).then((function(n) {
                        return d.sendEvent(t._client, "sepa.create-mandate.success"), e.last4 = n.last4, e.bankReferenceToken = n.bankReferenceToken, s.openPopup(t._client, {
                            approvalUrl: n.approvalUrl,
                            assetsUrl: t._assetsUrl
                        })
                    })).then((function() {
                        return d.sendEvent(t._client, "sepa.mandate.approved"), s.handleApproval(t._client, {
                            bankReferenceToken: e.bankReferenceToken,
                            last4: e.last4,
                            customerId: e.customerId,
                            mandateType: e.mandateType,
                            merchantAccountId: e.merchantAccountId
                        })
                    })).then((function(e) {
                        return d.sendEvent(t._client, "sepa.tokenization.success"), Promise.resolve(e)
                    })).catch((function(e) {
                        return d.sendEvent(t._client, "sepa." + e.details + ".failed"), Promise.reject(e)
                    })) : (d.sendEvent(t._client, "sepa.input-validation.invalid-mandate"), Promise.reject(new i(o.SEPA_INVALID_MANDATE_TYPE)))
                }, t.exports = r.wrapPrototype(l)
            }, {
                "../../lib/analytics": 116,
                "../../lib/braintree-error": 121,
                "../shared/constants": 184,
                "../shared/errors": 185,
                "../shared/has-missing-option": 186,
                "./mandate": 181,
                "@braintree/wrap-promise": 42
            }],
            183: [function(e, t, n) {
                var r = e("../lib/analytics"),
                    i = e("./external/sepa"),
                    o = e("../lib/create-assets-url"),
                    a = e("../lib/create-deferred-client"),
                    s = e("../lib/basic-component-verification"),
                    c = e("@braintree/wrap-promise");
                t.exports = {
                    create: c((function(e) {
                        var t = "SEPA";
                        return s.verify({
                            name: t,
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            return a.create({
                                authorization: e.authorization,
                                client: e.client,
                                debug: e.debug,
                                assetsUrl: o.create(e.authorization),
                                name: t
                            })
                        })).then((function(t) {
                            return e.client = t, r.sendEvent(e.client, "sepa.client.initialized"), new i(e)
                        }))
                    })),
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/analytics": 116,
                "../lib/basic-component-verification": 119,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "./external/sepa": 182,
                "@braintree/wrap-promise": 42
            }],
            184: [function(e, t, n) {
                t.exports = {
                    REQUIRED_OPTIONS: ["iban", "merchantAccountId", "mandateType", "customerId", "accountHolderName", "countryCode"],
                    MANDATE_TYPE_ENUM: ["ONE_OFF", "RECURRENT"]
                }
            }, {}],
            185: [function(e, t, n) {
                var r = e("../../lib/braintree-error");
                t.exports = {
                    SEPA_CREATE_MANDATE_FAILED: {
                        type: r.types.MERCHANT,
                        code: "SEPA_CREATE_MANDATE_FAILED",
                        message: "SEPA create mandate failed.",
                        details: "create-mandate"
                    },
                    SEPA_CUSTOMER_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: "SEPA_CUSTOMER_CANCELED",
                        message: "User canceled SEPA authorization",
                        details: "customer-canceled"
                    },
                    SEPA_INVALID_MANDATE_TYPE: {
                        type: r.types.MERCHANT,
                        code: "SEPA_INVALID_MANDATE_TYPE",
                        message: "SEPA mandate type is invalid"
                    },
                    SEPA_TOKENIZATION_FAILED: {
                        type: r.types.UNKNOWN,
                        code: "SEPA_TOKENIZATION_FAILED",
                        message: "SEPA encountered a problem",
                        details: "open-popup"
                    },
                    SEPA_TOKENIZE_MISSING_REQUIRED_OPTION: {
                        type: r.types.MERCHANT,
                        code: "SEPA_TOKENIZE_MISSING_REQUIRED_OPTION",
                        message: "Missing required option for tokenize."
                    },
                    SEPA_TRANSACTION_FAILED: {
                        type: r.types.UNKNOWN,
                        code: "SEPA_TRANSACTION_FAILED",
                        message: "SEPA transaction failed",
                        details: "handle-approval"
                    }
                }
            }, {
                "../../lib/braintree-error": 121
            }],
            186: [function(e, t, n) {
                t.exports = function(e, t) {
                    var n, r;
                    for (t = t || [], n = 0; n < t.length; n++)
                        if (r = t[n], !e.hasOwnProperty(r)) return !0;
                    return !1
                }
            }, {}],
            187: [function(e, t, n) {
                var r = e("../../../lib/assign").assign,
                    i = e("../../../lib/analytics"),
                    o = e("../../../lib/braintree-error"),
                    a = e("../../../lib/is-verified-domain"),
                    s = e("@braintree/extended-promise"),
                    c = e("@braintree/event-emitter"),
                    d = e("../../shared/errors"),
                    l = e("@braintree/iframer"),
                    u = e("framebus"),
                    p = e("../../shared/constants"),
                    _ = e("@braintree/uuid"),
                    E = e("../../shared/events"),
                    h = e("../../../lib/use-min"),
                    m = e("../../../lib/constants").BUS_CONFIGURATION_REQUEST_EVENT,
                    f = "3.94.0";

                function y(e) {
                    c.call(this), this._client = e.client, this._createPromise = e.createPromise, this._createOptions = e, this._client ? (this._isDebug = this._client.getConfiguration().isDebug, this._assetsUrl = this._client.getConfiguration().gatewayConfiguration.assetsUrl) : (this._isDebug = Boolean(e.isDebug), this._assetsUrl = e.assetsUrl), this._assetsUrl = this._assetsUrl + "/web/" + f
                }
                s.suppressUnhandledPromiseMessage = !0, c.createChild(y), y.prototype._waitForClient = function() {
                    return this._client ? Promise.resolve() : this._createPromise.then(function(e) {
                        this._client = e
                    }.bind(this))
                }, y.prototype.setUpEventListeners = function() {
                    throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED)
                }, y.prototype.verifyCard = function(e, t) {
                    var n, r, o = this;
                    return t = t || {}, (r = this._checkForVerifyCardError(e, t)) ? Promise.reject(r) : (this._verifyCardInProgress = !0, n = this._formatVerifyCardOptions(e), this._formatLookupData(n).then((function(e) {
                        return i.sendEvent(o._createPromise, "three-d-secure.verification-flow.started"), o._performLookup(n.nonce, e)
                    })).then((function(e) {
                        return i.sendEvent(o._createPromise, "three-d-secure.verification-flow.3ds-version." + e.lookup.threeDSecureVersion), o._onLookupComplete(e, n)
                    })).then((function(e) {
                        return o.initializeChallengeWithLookupResponse(e, n)
                    })).then((function(e) {
                        return o._resetVerificationState(), i.sendEvent(o._createPromise, "three-d-secure.verification-flow.completed"), e
                    })).catch((function(e) {
                        return o._resetVerificationState(), i.sendEvent(o._createPromise, "three-d-secure.verification-flow.failed"), Promise.reject(e)
                    })))
                }, y.prototype._checkForFrameworkSpecificVerifyCardErrors = function() {
                    throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED)
                }, y.prototype._presentChallenge = function() {
                    throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED)
                }, y.prototype.prepareLookup = function() {
                    throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED)
                }, y.prototype._resetVerificationState = function() {
                    this._verifyCardInProgress = !1, this._verifyCardPromisePlus = null
                }, y.prototype._performLookup = function(e, t) {
                    var n = this,
                        r = "payment_methods/" + e + "/three_d_secure/lookup";
                    return this._waitForClient().then((function() {
                        return n._client.request({
                            endpoint: r,
                            method: "post",
                            data: t
                        }).catch((function(e) {
                            var t, r = e && e.details && e.details.httpStatus,
                                a = "three-d-secure.verification-flow.lookup-failed";
                            return 404 === r ? (t = d.THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR, a += ".404") : 422 === r ? (t = d.THREEDS_LOOKUP_VALIDATION_ERROR, a += ".422") : t = d.THREEDS_LOOKUP_ERROR, i.sendEvent(n._createPromise, a), Promise.reject(new o({
                                type: t.type,
                                code: t.code,
                                message: t.message,
                                details: {
                                    originalError: e
                                }
                            }))
                        }))
                    }))
                }, y.prototype._checkForVerifyCardError = function(e, t) {
                    var n;
                    return !0 === this._verifyCardInProgress ? new o(d.THREEDS_AUTHENTICATION_IN_PROGRESS) : (e.nonce ? e.amount || (n = "an amount") : n = "a nonce", n || (n = this._checkForFrameworkSpecificVerifyCardErrors(e, t)), n ? new o({
                        type: d.THREEDS_MISSING_VERIFY_CARD_OPTION.type,
                        code: d.THREEDS_MISSING_VERIFY_CARD_OPTION.code,
                        message: "verifyCard options must include " + n + "."
                    }) : null)
                }, y.prototype.initializeChallengeWithLookupResponse = function(e, t) {
                    var n = this;
                    return t = t || {}, this._lookupPaymentMethod = e.paymentMethod, n._verifyCardPromisePlus = n._verifyCardPromisePlus || new s, n._handleLookupResponse(e, t), n._verifyCardPromisePlus.then((function(e) {
                        return i.sendEvent(n._createPromise, "three-d-secure.verification-flow.liability-shifted." + String(e.liabilityShifted)), i.sendEvent(n._createPromise, "three-d-secure.verification-flow.liability-shift-possible." + String(e.liabilityShiftPossible)), e
                    }))
                }, y.prototype._handleLookupResponse = function(e, t) {
                    var n, r = Boolean(e.lookup && e.lookup.acsUrl);
                    i.sendEvent(this._createPromise, "three-d-secure.verification-flow.challenge-presented." + String(r)), r ? this._presentChallenge(e, t) : ((n = this._formatAuthResponse(e.paymentMethod, e.threeDSecureInfo)).verificationDetails = e.threeDSecureInfo, this._verifyCardPromisePlus.resolve(n))
                }, y.prototype._onLookupComplete = function(e) {
                    return this._lookupPaymentMethod = e.paymentMethod, this._verifyCardPromisePlus = new s, Promise.resolve(e)
                }, y.prototype._formatAuthResponse = function(e, t) {
                    return {
                        nonce: e.nonce,
                        type: e.type,
                        binData: e.binData,
                        details: e.details,
                        description: e.description && e.description.replace(/\+/g, " "),
                        liabilityShifted: t && t.liabilityShifted,
                        liabilityShiftPossible: t && t.liabilityShiftPossible,
                        threeDSecureInfo: e.threeDSecureInfo
                    }
                }, y.prototype._formatVerifyCardOptions = function(e) {
                    return r({}, e)
                }, y.prototype._formatLookupData = function(e) {
                    var t = {
                        amount: e.amount
                    };
                    return !0 === e.collectDeviceData && (t.browserColorDepth = window.screen.colorDepth, t.browserJavaEnabled = window.navigator.javaEnabled(), t.browserJavascriptEnabled = !0, t.browserLanguage = window.navigator.language, t.browserScreenHeight = window.screen.height, t.browserScreenWidth = window.screen.width, t.browserTimeZone = (new Date).getTimezoneOffset(), t.deviceChannel = "Browser"), Promise.resolve(t)
                }, y.prototype._handleV1AuthResponse = function(e) {
                    var t = JSON.parse(e.auth_response);
                    t.success ? this._verifyCardPromisePlus.resolve(this._formatAuthResponse(t.paymentMethod, t.threeDSecureInfo)) : t.threeDSecureInfo && t.threeDSecureInfo.liabilityShiftPossible ? this._verifyCardPromisePlus.resolve(this._formatAuthResponse(this._lookupPaymentMethod, t.threeDSecureInfo)) : this._verifyCardPromisePlus.reject(new o({
                        type: o.types.UNKNOWN,
                        code: "UNKNOWN_AUTH_RESPONSE",
                        message: t.error.message
                    }))
                }, y.prototype.cancelVerifyCard = function() {
                    var e, t;
                    return this._verifyCardInProgress = !1, this._lookupPaymentMethod ? (t = this._lookupPaymentMethod.threeDSecureInfo, e = r({}, this._lookupPaymentMethod, {
                        liabilityShiftPossible: t && t.liabilityShiftPossible,
                        liabilityShifted: t && t.liabilityShifted,
                        verificationDetails: t && t.verificationDetails
                    }), Promise.resolve(e)) : Promise.reject(new o(d.THREEDS_NO_VERIFICATION_PAYLOAD))
                }, y.prototype._setupV1Bus = function(e) {
                    var t = this._client.getConfiguration(),
                        n = window.location.href.split("#")[0],
                        r = e.lookupResponse,
                        i = _(),
                        o = new u({
                            channel: i,
                            verifyDomain: a
                        }),
                        s = this._assetsUrl + "/html/three-d-secure-authentication-complete-frame.html?channel=" + encodeURIComponent(i) + "&";
                    return o.on(m, (function(i) {
                        i({
                            clientConfiguration: t,
                            nonce: e.nonce,
                            acsUrl: r.acsUrl,
                            pareq: r.pareq,
                            termUrl: r.termUrl + "&three_d_secure_version=" + f + "&authentication_complete_base_url=" + encodeURIComponent(s),
                            md: r.md,
                            parentUrl: n
                        })
                    })), o.on(E.AUTHENTICATION_COMPLETE, e.handleAuthResponse), o
                }, y.prototype._setupV1Iframe = function(e) {
                    var t = this._assetsUrl + "/html/three-d-secure-bank-frame" + h(this._isDebug) + ".html?showLoader=" + e.showLoader;
                    return l({
                        src: t,
                        height: 400,
                        width: 400,
                        name: p.LANDING_FRAME_NAME + "_" + this._v1Bus.channel,
                        title: "3D Secure Authorization Frame"
                    })
                }, y.prototype._setupV1Elements = function(e) {
                    this._v1Bus = this._setupV1Bus(e), this._v1Iframe = this._setupV1Iframe(e)
                }, y.prototype._teardownV1Elements = function() {
                    this._v1Bus && (this._v1Bus.teardown(), this._v1Bus = null), this._v1Iframe && this._v1Iframe.parentNode && (this._v1Iframe.parentNode.removeChild(this._v1Iframe), this._v1Iframe = null), this._onV1Keyup && (document.removeEventListener("keyup", this._onV1Keyup), this._onV1Keyup = null)
                }, y.prototype.teardown = function() {
                    return i.sendEvent(this._createPromise, "three-d-secure.teardown-completed"), this._teardownV1Elements(), Promise.resolve()
                }, t.exports = y
            }, {
                "../../../lib/analytics": 116,
                "../../../lib/assign": 118,
                "../../../lib/braintree-error": 121,
                "../../../lib/constants": 123,
                "../../../lib/is-verified-domain": 150,
                "../../../lib/use-min": 157,
                "../../shared/constants": 196,
                "../../shared/errors": 197,
                "../../shared/events": 198,
                "@braintree/event-emitter": 32,
                "@braintree/extended-promise": 33,
                "@braintree/iframer": 34,
                "@braintree/uuid": 38,
                framebus: 51
            }],
            188: [function(e, t, n) {
                var r = e("./songbird");

                function i(e) {
                    r.call(this, e)
                }
                i.prototype = Object.create(r.prototype, {
                    constructor: r
                }), i.prototype._createV1IframeModalElement = function(e) {
                    var t = document.createElement("div");
                    return t.innerHTML = "<div class=\"modal fade in\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"CCAFrameModal-label\" aria-hidden=\"true\" style=\"display: block;\"><div class=\"modal-dialog\" style=\"width:440px;z-index:999999;\"><div class=\"modal-content\"><div class=\"modal-body\" data-braintree-v1-fallback-iframe-container><button type=\"button\" data-braintree-v1-fallback-close-button class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\xd7</button></div></div></div><div data-braintree-v1-fallback-backdrop style=\"position: fixed;cursor: pointer;z-index: 999998;top: 0;left: 0;width: 100%;height: 100%;\"></div></div>", t.querySelector("[data-braintree-v1-fallback-iframe-container]").appendChild(e), t
                }, i.prototype._createCardinalConfigurationOptions = function(e) {
                    var t = r.prototype._createCardinalConfigurationOptions.call(this, e);
                    return t.payment.framework = "bootstrap3", t
                }, t.exports = i
            }, {
                "./songbird": 193
            }],
            189: [function(e, t, n) {
                var r = e("./songbird");

                function i(e) {
                    r.call(this, e)
                }
                i.prototype = Object.create(r.prototype, {
                    constructor: r
                }), i.prototype._createV1IframeModalElement = function(e) {
                    var t = document.createElement("div"),
                        n = Boolean(this._createOptions && this._createOptions.cardinalSDKConfig && this._createOptions.cardinalSDKConfig.payment && this._createOptions.cardinalSDKConfig.payment.displayExitButton);
                    return t.innerHTML = "<div style=\"position: fixed;z-index: 999999;top: 50%;left: 50%;padding: 24px 20px;transform: translate(-50%,-50%);border-radius: 2px;background: #fff;max-width: 100%;overflow: auto;\"><div><button data-braintree-v1-fallback-close-button style=\"font-family: Helvetica,Arial,sans-serif;font-size: 25px;line-height: 12px;position: absolute;top: 2px;right: 0px;cursor: pointer;color: #999;border: 0;outline: none;background: none;\" onMouseOver=\"this.style.color='#000'\" onMouseOut=\"this.style.color='#999'\">\xd7</button></div><div data-braintree-v1-fallback-iframe-container style=\"height: 400px;\"></div></div><div data-braintree-v1-fallback-backdrop style=\"position: fixed;z-index: 999998;cursor: pointer;top: 0;left: 0;width: 100%;height: 100%;transition: opacity 1ms ease;background: rgba(0,0,0,.6);\"></div>", n || (t.querySelector("[data-braintree-v1-fallback-close-button]").style.display = "none"), t.querySelector("[data-braintree-v1-fallback-iframe-container]").appendChild(e), t
                }, t.exports = i
            }, {
                "./songbird": 193
            }],
            190: [function(e, t, n) {
                var r = e("./legacy"),
                    i = e("./cardinal-modal"),
                    o = e("./bootstrap3-modal"),
                    a = e("./inline-iframe");
                t.exports = {
                    legacy: r,
                    "cardinal-modal": i,
                    "bootstrap3-modal": o,
                    "inline-iframe": a
                }
            }, {
                "./bootstrap3-modal": 188,
                "./cardinal-modal": 189,
                "./inline-iframe": 191,
                "./legacy": 192
            }],
            191: [function(e, t, n) {
                var r = e("./songbird"),
                    i = e("../../../lib/braintree-error"),
                    o = e("../../shared/errors"),
                    a = e("../../../lib/enumerate");

                function s(e) {
                    r.call(this, e)
                }
                s.prototype = Object.create(r.prototype, {
                    constructor: r
                }), s.events = a(["AUTHENTICATION_IFRAME_AVAILABLE"], "inline-iframe-framework:"), s.prototype.setUpEventListeners = function(e) {
                    r.prototype.setUpEventListeners.call(this, e), this.on(s.events.AUTHENTICATION_IFRAME_AVAILABLE, (function(t, n) {
                        e("authentication-iframe-available", t, n)
                    }))
                }, s.prototype._createCardinalConfigurationOptions = function(e) {
                    var t = r.prototype._createCardinalConfigurationOptions.call(this, e);
                    return t.payment.framework = "inline", t
                }, s.prototype._addV1IframeToPage = function() {
                    this._emit(s.events.AUTHENTICATION_IFRAME_AVAILABLE, {
                        element: this._v1Modal
                    }, (function() {}))
                }, s.prototype._setupFrameworkSpecificListeners = function() {
                    this.setCardinalListener("ui.inline.setup", this._onInlineSetup.bind(this))
                }, s.prototype._onInlineSetup = function(e, t, n, r) {
                    var a, c;
                    e && t ? ("CCA" !== t.paymentType || "suppress" !== t.data.mode && "static" !== t.data.mode) && (c = !0) : c = !0, c ? r(new i(o.THREEDS_INLINE_IFRAME_DETAILS_INCORRECT)) : ((a = document.createElement("div")).innerHTML = e, "suppress" === t.data.mode ? (a.style.display = "none", document.body.appendChild(a), n()) : "static" === t.data.mode && this._emit(s.events.AUTHENTICATION_IFRAME_AVAILABLE, {
                        element: a
                    }, (function() {
                        n()
                    })))
                }, t.exports = s
            }, {
                "../../../lib/braintree-error": 121,
                "../../../lib/enumerate": 131,
                "../../shared/errors": 197,
                "./songbird": 193
            }],
            192: [function(e, t, n) {
                var r = e("./base"),
                    i = e("../../../lib/deferred");

                function o(e) {
                    r.call(this, e)
                }
                o.prototype = Object.create(r.prototype, {
                    constructor: o
                }), o.prototype.setUpEventListeners = function() {}, o.prototype.transformV1CustomerBillingAddress = function(e) {
                    return e.billingAddress.line1 = e.billingAddress.streetAddress, e.billingAddress.line2 = e.billingAddress.extendedAddress, e.billingAddress.city = e.billingAddress.locality, e.billingAddress.state = e.billingAddress.region, e.billingAddress.countryCode = e.billingAddress.countryCodeAlpha2, delete e.billingAddress.streetAddress, delete e.billingAddress.extendedAddress, delete e.billingAddress.locality, delete e.billingAddress.region, delete e.billingAddress.countryCodeAlpha2, e
                }, o.prototype._createIframe = function(e) {
                    var t = this;
                    return this._setupV1Elements({
                        nonce: e.nonce,
                        lookupResponse: e.lookupResponse,
                        showLoader: e.showLoader,
                        handleAuthResponse: function(n) {
                            t._handleAuthResponse(n, e)
                        }
                    }), this._v1Iframe
                }, o.prototype._handleAuthResponse = function(e, t) {
                    this._v1Bus.teardown(), t.removeFrame(), i(function() {
                        this._handleV1AuthResponse(e)
                    }.bind(this))()
                }, o.prototype._checkForFrameworkSpecificVerifyCardErrors = function(e) {
                    var t;
                    return "function" != typeof e.addFrame ? t = "an addFrame function" : "function" != typeof e.removeFrame && (t = "a removeFrame function"), t
                }, o.prototype._formatVerifyCardOptions = function(e) {
                    var t = r.prototype._formatVerifyCardOptions.call(this, e);
                    return t.addFrame = i(e.addFrame), t.removeFrame = i(e.removeFrame), t.showLoader = !1 !== e.showLoader, t
                }, o.prototype._formatLookupData = function(e) {
                    var t = this;
                    return r.prototype._formatLookupData.call(this, e).then((function(n) {
                        return e.customer && e.customer.billingAddress && (n.customer = t.transformV1CustomerBillingAddress(e.customer)), n
                    }))
                }, o.prototype._presentChallenge = function(e, t) {
                    t.addFrame(null, this._createIframe({
                        showLoader: t.showLoader,
                        lookupResponse: e.lookup,
                        nonce: e.paymentMethod.nonce,
                        removeFrame: t.removeFrame
                    }))
                }, t.exports = o
            }, {
                "../../../lib/deferred": 129,
                "./base": 187
            }],
            193: [function(e, t, n) {
                var r = e("./base"),
                    i = e("../../../lib/assign").assign,
                    o = e("../../../lib/deferred"),
                    a = e("../../../lib/braintree-error"),
                    s = e("../../../lib/convert-to-braintree-error"),
                    c = e("../../../lib/analytics"),
                    d = e("../../../lib/assets"),
                    l = e("../../shared/errors"),
                    u = e("../../../lib/enumerate"),
                    p = e("../../shared/constants"),
                    _ = e("@braintree/extended-promise"),
                    E = e("../../../lib/constants").INTEGRATION_TIMEOUT_MS,
                    h = e("../../../lib/constants").PLATFORM,
                    m = ["ui.close", "ui.render", "ui.renderHidden", "ui.loading.close", "ui.loading.render"],
                    f = ["low_value", "transaction_risk_analysis"];

                function y(e) {
                    r.call(this, e), this._useV1Fallback = !1, this._clientMetadata = {
                        requestedThreeDSecureVersion: "2",
                        sdkVersion: h + "/3.94.0"
                    }, this._getDfReferenceIdPromisePlus = new _, this.setupSongbird(e), this._cardinalEvents = []
                }

                function A(e, t, n) {
                    t[n + "Line1"] = e.streetAddress, t[n + "Line2"] = e.extendedAddress, t[n + "Line3"] = e.line3, t[n + "City"] = e.locality, t[n + "State"] = e.region, t[n + "PostalCode"] = e.postalCode, t[n + "CountryCode"] = e.countryCodeAlpha2
                }
                _.suppressUnhandledPromiseMessage = !0, y.prototype = Object.create(r.prototype, {
                    constructor: y
                }), y.events = u(["LOOKUP_COMPLETE", "CUSTOMER_CANCELED", "UI.CLOSE", "UI.RENDER", "UI.RENDERHIDDEN", "UI.LOADING.CLOSE", "UI.LOADING.RENDER"], "songbird-framework:"), y.prototype.setUpEventListeners = function(e) {
                    this.on(y.events.LOOKUP_COMPLETE, (function(t, n) {
                        e("lookup-complete", t, n)
                    })), this.on(y.events.CUSTOMER_CANCELED, (function() {
                        e("customer-canceled")
                    })), this.on(y.events["UI.CLOSE"], (function() {
                        e("authentication-modal-close")
                    })), this.on(y.events["UI.RENDER"], (function() {
                        e("authentication-modal-render")
                    })), this.on(y.events["UI.RENDERHIDDEN"], (function() {
                        e("authentication-modal-render-hidden")
                    })), this.on(y.events["UI.LOADING.CLOSE"], (function() {
                        e("authentication-modal-loader-close")
                    })), this.on(y.events["UI.LOADING.RENDER"], (function() {
                        e("authentication-modal-loader-render")
                    }))
                }, y.prototype.prepareLookup = function(e) {
                    var t = i({}, e),
                        n = this;
                    return this.getDfReferenceId().then((function(e) {
                        t.dfReferenceId = e
                    })).then((function() {
                        return n._triggerCardinalBinProcess(e.bin)
                    })).catch((function() {})).then((function() {
                        return n._waitForClient()
                    })).then((function() {
                        return t.clientMetadata = n._clientMetadata, t.authorizationFingerprint = n._client.getConfiguration().authorizationFingerprint, t.braintreeLibraryVersion = "braintree/web/3.94.0", t
                    }))
                }, y.prototype.initializeChallengeWithLookupResponse = function(e, t) {
                    return this.setupSongbird().then(function() {
                        return r.prototype.initializeChallengeWithLookupResponse.call(this, e, t)
                    }.bind(this))
                }, y.prototype.initiateV1Fallback = function(e) {
                    this._useV1Fallback = !0, this._removeSongbirdListeners(), c.sendEvent(this._createPromise, "three-d-secure.v1-fallback." + e), this._songbirdPromise && this._songbirdPromise.resolve()
                }, y.prototype._triggerCardinalBinProcess = function(e) {
                    var t = this,
                        n = Date.now();
                    return window.Cardinal.trigger("bin.process", e).then((function(e) {
                        t._clientMetadata.issuerDeviceDataCollectionTimeElapsed = Date.now() - n, t._clientMetadata.issuerDeviceDataCollectionResult = e && e.Status
                    }))
                }, y.prototype.transformBillingAddress = function(e, t) {
                    return t && (A(t, e, "billing"), e.billingPhoneNumber = t.phoneNumber, e.billingGivenName = t.givenName, e.billingSurname = t.surname), e
                }, y.prototype.transformShippingAddress = function(e) {
                    var t = e.shippingAddress;
                    return t && (A(t, e, "shipping"), delete e.shippingAddress), e
                }, y.prototype._createV1IframeModalElement = function(e) {
                    var t = document.createElement("div");
                    return t.innerHTML = "<div data-braintree-v1-fallback-iframe-container=\"true\" style=\"height: 400px;\"></div>", t.querySelector('[data-braintree-v1-fallback-iframe-container="true"]').appendChild(e), t
                }, y.prototype._createV1IframeModal = function(e) {
                    var t = this._createV1IframeModalElement(e),
                        n = t.querySelector("[data-braintree-v1-fallback-close-button]"),
                        r = t.querySelector("[data-braintree-v1-fallback-backdrop]"),
                        i = this;

                    function o() {
                        t.parentNode.removeChild(t), i.cancelVerifyCard(l.THREEDS_CARDINAL_SDK_CANCELED), document.removeEventListener("keyup", i._onV1Keyup), i._onV1Keyup = null
                    }
                    return this._onV1Keyup = function(e) {
                        "Escape" === e.key && t.parentNode && o()
                    }, n && n.addEventListener("click", o), r && r.addEventListener("click", o), document.addEventListener("keyup", this._onV1Keyup), t
                }, y.prototype._addV1IframeToPage = function() {
                    document.body.appendChild(this._v1Modal)
                }, y.prototype._handleAuthResponseFromV1Fallback = function(e) {
                    this._teardownV1Elements(), this._v1Modal.parentNode.removeChild(this._v1Modal), this._handleV1AuthResponse(e)
                }, y.prototype._presentChallengeWithV1Fallback = function(e) {
                    var t = this;
                    this._setupV1Elements({
                        lookupResponse: e,
                        showLoader: !0,
                        handleAuthResponse: function(e) {
                            t._handleAuthResponseFromV1Fallback(e)
                        }
                    }), this._v1Modal = this._createV1IframeModal(this._v1Iframe), this._addV1IframeToPage()
                }, y.prototype.setupSongbird = function(e) {
                    var t = this,
                        n = Date.now();
                    return this._songbirdPromise || (e = e || {}, this._songbirdPromise = new _, this._v2SetupFailureReason = "reason-unknown", t._loadCardinalScript(e).then((function() {
                        return window.Cardinal ? t._configureCardinalSdk({
                            setupOptions: e,
                            setupStartTime: n
                        }) : (t._v2SetupFailureReason = "cardinal-global-unavailable", Promise.reject(new a(l.THREEDS_CARDINAL_SDK_SETUP_FAILED)))
                    })).catch((function(e) {
                        var n = s(e, {
                            type: l.THREEDS_CARDINAL_SDK_SETUP_FAILED.type,
                            code: l.THREEDS_CARDINAL_SDK_SETUP_FAILED.code,
                            message: l.THREEDS_CARDINAL_SDK_SETUP_FAILED.message
                        });
                        t._getDfReferenceIdPromisePlus.reject(n), window.clearTimeout(t._songbirdSetupTimeoutReference), c.sendEvent(t._client, "three-d-secure.cardinal-sdk.init.setup-failed"), t.initiateV1Fallback("cardinal-sdk-setup-failed." + t._v2SetupFailureReason)
                    }))), this._songbirdPromise
                }, y.prototype._configureCardinalSdk = function(e) {
                    var t = this;
                    return this._waitForClient().then((function() {
                        return t._client.getConfiguration().gatewayConfiguration.threeDSecure
                    })).then((function(n) {
                        var r = n.cardinalAuthenticationJWT,
                            i = e.setupOptions,
                            o = e.setupStartTime,
                            a = t._createCardinalConfigurationOptions(i);
                        m.forEach((function(e) {
                            t.setCardinalListener(e, (function() {
                                t._emit(y.events[e.toUpperCase()])
                            }))
                        })), t.setCardinalListener("payments.setupComplete", t._createPaymentsSetupCompleteCallback()), t._setupFrameworkSpecificListeners(), window.Cardinal.configure(a), window.Cardinal.setup("init", {
                            jwt: r
                        }), t._clientMetadata.cardinalDeviceDataCollectionTimeElapsed = Date.now() - o, t.setCardinalListener("payments.validated", t._createPaymentsValidatedCallback())
                    })).catch((function(e) {
                        return t._v2SetupFailureReason = "cardinal-configuration-threw-error", Promise.reject(e)
                    }))
                }, y.prototype.setCardinalListener = function(e, t) {
                    this._cardinalEvents.push(e), window.Cardinal.on(e, t)
                }, y.prototype._setupFrameworkSpecificListeners = function() {}, y.prototype._createCardinalConfigurationOptions = function(e) {
                    var t = e.cardinalSDKConfig || {},
                        n = t.payment || {};
                    return !t.logging && e.loggingEnabled && (t.logging = {
                        level: "verbose"
                    }), t.payment = {}, n.hasOwnProperty("displayLoading") && (t.payment.displayLoading = n.displayLoading), n.hasOwnProperty("displayExitButton") && (t.payment.displayExitButton = n.displayExitButton), t
                }, y.prototype._loadCardinalScript = function(e) {
                    var t = this,
                        n = p.CARDINAL_SCRIPT_SOURCE.sandbox;
                    return this._waitForClient().then((function() {
                        var r = "production" === t._client.getConfiguration().gatewayConfiguration.environment;
                        return t._songbirdSetupTimeoutReference = window.setTimeout((function() {
                            c.sendEvent(t._client, "three-d-secure.cardinal-sdk.init.setup-timeout"), t.initiateV1Fallback("cardinal-sdk-setup-timeout")
                        }), e.timeout || E), r && (n = p.CARDINAL_SCRIPT_SOURCE.production), d.loadScript({
                            src: n
                        })
                    })).catch((function(e) {
                        return t._v2SetupFailureReason = "songbird-js-failed-to-load", Promise.reject(s(e, l.THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED))
                    }))
                }, y.prototype._createPaymentsSetupCompleteCallback = function() {
                    var e = this;
                    return function(t) {
                        e._getDfReferenceIdPromisePlus.resolve(t.sessionId), window.clearTimeout(e._songbirdSetupTimeoutReference), c.sendEvent(e._createPromise, "three-d-secure.cardinal-sdk.init.setup-completed"), e._songbirdPromise.resolve()
                    }
                }, y.prototype.getDfReferenceId = function() {
                    return this._getDfReferenceIdPromisePlus
                }, y.prototype._performJWTValidation = function(e, t) {
                    var n = this,
                        r = this._lookupPaymentMethod.nonce,
                        i = "payment_methods/" + r + "/three_d_secure/authenticate_from_jwt",
                        o = e && e.Payment && e.Payment.ExtendedData && e.Payment.ExtendedData.ChallengeCancel;
                    return o && (c.sendEvent(this._createPromise, "three-d-secure.verification-flow.cardinal-sdk.cancel-code." + o), "01" === o && this._emit(y.events.CUSTOMER_CANCELED)), c.sendEvent(this._createPromise, "three-d-secure.verification-flow.upgrade-payment-method.started"), this._waitForClient().then((function() {
                        return n._client.request({
                            method: "post",
                            endpoint: i,
                            data: {
                                jwt: t,
                                paymentMethodNonce: r
                            }
                        })
                    })).then((function(t) {
                        var r = t.paymentMethod || n._lookupPaymentMethod,
                            i = n._formatAuthResponse(r, t.threeDSecureInfo);
                        return i.rawCardinalSDKVerificationData = e, c.sendEvent(n._client, "three-d-secure.verification-flow.upgrade-payment-method.succeeded"), Promise.resolve(i)
                    })).catch((function(e) {
                        var t = new a({
                            type: l.THREEDS_JWT_AUTHENTICATION_FAILED.type,
                            code: l.THREEDS_JWT_AUTHENTICATION_FAILED.code,
                            message: l.THREEDS_JWT_AUTHENTICATION_FAILED.message,
                            details: {
                                originalError: e
                            }
                        });
                        return c.sendEvent(n._client, "three-d-secure.verification-flow.upgrade-payment-method.errored"), Promise.reject(t)
                    }))
                }, y.prototype._createPaymentsValidatedCallback = function() {
                    var e = this;
                    return function(t, n) {
                        var r;
                        if (e._useV1Fallback) c.sendEvent(e._createPromise, "three-d-secure.verification-flow.cardinal-sdk.payments-validated-callback-called-in-v1-fallback-flow");
                        else if (c.sendEvent(e._createPromise, "three-d-secure.verification-flow.cardinal-sdk.action-code." + t.ActionCode.toLowerCase()), e._verifyCardPromisePlus) switch (t.ActionCode) {
                            case "SUCCESS":
                            case "NOACTION":
                            case "FAILURE":
                                e._performJWTValidation(t, n).then((function(t) {
                                    e._verifyCardPromisePlus.resolve(t)
                                })).catch((function(t) {
                                    e._verifyCardPromisePlus.reject(t)
                                }));
                                break;
                            case "ERROR":
                                switch (c.sendEvent(e._createPromise, "three-d-secure.verification-flow.cardinal-sdk-error." + t.ErrorNumber), t.ErrorNumber) {
                                    case 10001:
                                    case 10002:
                                        r = new a(l.THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT);
                                        break;
                                    case 10003:
                                    case 10007:
                                    case 10009:
                                        r = new a(l.THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT);
                                        break;
                                    case 10005:
                                    case 10006:
                                        r = new a(l.THREEDS_CARDINAL_SDK_BAD_CONFIG);
                                        break;
                                    case 10008:
                                    case 10010:
                                        r = new a(l.THREEDS_CARDINAL_SDK_BAD_JWT);
                                        break;
                                    case 10011:
                                        c.sendEvent(e._createPromise, "three-d-secure.verification-flow.canceled"), r = new a(l.THREEDS_CARDINAL_SDK_CANCELED);
                                        break;
                                    default:
                                        r = new a(l.THREEDS_CARDINAL_SDK_ERROR)
                                }
                                r.details = {
                                    originalError: {
                                        code: t.ErrorNumber,
                                        description: t.ErrorDescription
                                    }
                                }, e._verifyCardPromisePlus.reject(r)
                        } else e.initiateV1Fallback("cardinal-sdk-setup-error.number-" + t.ErrorNumber)
                    }
                }, y.prototype._checkForVerifyCardError = function(e, t) {
                    return e.bin ? r.prototype._checkForVerifyCardError.call(this, e, t) : new a({
                        type: l.THREEDS_MISSING_VERIFY_CARD_OPTION.type,
                        code: l.THREEDS_MISSING_VERIFY_CARD_OPTION.code,
                        message: "verifyCard options must include a BIN."
                    })
                }, y.prototype._checkForFrameworkSpecificVerifyCardErrors = function(e, t) {
                    var n;
                    return "function" == typeof e.onLookupComplete || t.ignoreOnLookupCompleteRequirement || (n = "an onLookupComplete function"), n
                }, y.prototype._formatVerifyCardOptions = function(e) {
                    var t = r.prototype._formatVerifyCardOptions.call(this, e),
                        n = t.additionalInformation || {};
                    return n = this.transformBillingAddress(n, e.billingAddress), n = this.transformShippingAddress(n), e.onLookupComplete && (t.onLookupComplete = o(e.onLookupComplete)), e.email && (n.email = e.email), e.mobilePhoneNumber && (n.mobilePhoneNumber = e.mobilePhoneNumber), t.additionalInformation = n, t
                }, y.prototype._onLookupComplete = function(e, t) {
                    var n = this;
                    return r.prototype._onLookupComplete.call(this, e).then((function(e) {
                        return new Promise((function(r, i) {
                            function o() {
                                r(e)
                            }
                            e.requiresUserAuthentication = Boolean(e.lookup && e.lookup.acsUrl), n._verifyCardPromisePlus.catch(i), t.onLookupComplete ? t.onLookupComplete(e, o) : n._emit(y.events.LOOKUP_COMPLETE, e, o)
                        }))
                    }))
                }, y.prototype._presentChallenge = function(e) {
                    !this._useV1Fallback && e.lookup.transactionId ? window.Cardinal.continue("cca", {
                        AcsUrl: e.lookup.acsUrl,
                        Payload: e.lookup.pareq
                    }, {
                        OrderDetails: {
                            TransactionId: e.lookup.transactionId
                        }
                    }) : this._presentChallengeWithV1Fallback(e.lookup)
                }, y.prototype._formatLookupData = function(e) {
                    var t = this;
                    return r.prototype._formatLookupData.call(this, e).then((function(n) {
                        if (n.additionalInfo = e.additionalInformation, e.accountType && (n.accountType = e.accountType), e.challengeRequested && (n.challengeRequested = e.challengeRequested), e.requestedExemptionType) {
                            if (!f.includes(e.requestedExemptionType)) throw new a({
                                code: l.THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID.code,
                                type: l.THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID.type,
                                message: "requestedExemptionType `" + e.requestedExemptionType + "` is not a valid exemption. The accepted values are: `" + f.join("`, `") + "`"
                            });
                            n.requestedExemptionType = e.requestedExemptionType
                        }
                        return e.dataOnlyRequested && (n.dataOnlyRequested = e.dataOnlyRequested), e.exemptionRequested && (n.exemptionRequested = e.exemptionRequested), e.bin && (n.bin = e.bin), null != e.cardAdd && (n.cardAdd = e.cardAdd), null != e.cardAddChallengeRequested && (n.cardAdd = e.cardAddChallengeRequested), t.prepareLookup(n)
                    }))
                }, y.prototype.cancelVerifyCard = function(e) {
                    var t = this;
                    return r.prototype.cancelVerifyCard.call(this).then((function(n) {
                        return t._verifyCardPromisePlus && (e = e || new a(l.THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT), t._verifyCardPromisePlus.reject(e)), n
                    }))
                }, y.prototype._removeSongbirdListeners = function() {
                    this._cardinalEvents.forEach((function(e) {
                        window.Cardinal.off(e)
                    })), this._cardinalEvents = []
                }, y.prototype.teardown = function() {
                    return window.Cardinal && this._removeSongbirdListeners(), r.prototype.teardown.call(this)
                }, t.exports = y
            }, {
                "../../../lib/analytics": 116,
                "../../../lib/assets": 117,
                "../../../lib/assign": 118,
                "../../../lib/braintree-error": 121,
                "../../../lib/constants": 123,
                "../../../lib/convert-to-braintree-error": 125,
                "../../../lib/deferred": 129,
                "../../../lib/enumerate": 131,
                "../../shared/constants": 196,
                "../../shared/errors": 197,
                "./base": 187,
                "@braintree/extended-promise": 33
            }],
            194: [function(e, t, n) {
                var r = e("@braintree/wrap-promise"),
                    i = e("../../lib/methods"),
                    o = e("../../lib/convert-methods-to-error"),
                    a = e("@braintree/event-emitter"),
                    s = e("./frameworks");

                function c(e) {
                    var t = this,
                        n = s[e.framework];
                    a.call(this), this._framework = new n(e), this._framework.setUpEventListeners((function() {
                        t._emit.apply(t, arguments)
                    }))
                }
                a.createChild(c), c.prototype.verifyCard = function(e) {
                    var t;
                    return this.hasListener("lookup-complete") && (t = {
                        ignoreOnLookupCompleteRequirement: !0
                    }), this._framework.verifyCard(e, t)
                }, c.prototype.initializeChallengeWithLookupResponse = function(e) {
                    return "string" == typeof e && (e = JSON.parse(e)), this._framework.initializeChallengeWithLookupResponse(e)
                }, c.prototype.prepareLookup = function(e) {
                    return this._framework.prepareLookup(e).then((function(e) {
                        return JSON.stringify(e)
                    }))
                }, c.prototype.cancelVerifyCard = function() {
                    return this._framework.cancelVerifyCard()
                }, c.prototype.teardown = function() {
                    var e = i(c.prototype).concat(i(a.prototype));
                    return o(this, e), this._framework.teardown()
                }, t.exports = r.wrapPrototype(c)
            }, {
                "../../lib/convert-methods-to-error": 124,
                "../../lib/methods": 152,
                "./frameworks": 190,
                "@braintree/event-emitter": 32,
                "@braintree/wrap-promise": 42
            }],
            195: [function(e, t, n) {
                var r = e("./external/three-d-secure"),
                    i = e("../lib/is-https").isHTTPS,
                    o = e("../lib/basic-component-verification"),
                    a = e("../lib/create-deferred-client"),
                    s = e("../lib/create-assets-url"),
                    c = e("../lib/braintree-error"),
                    d = e("../lib/analytics"),
                    l = e("./shared/errors"),
                    u = e("@braintree/wrap-promise");

                function p(e) {
                    var t = String(e.version || "");
                    if (!t || "1" === t) throw new c({
                        code: l.THREEDS_UNSUPPORTED_VERSION.code,
                        type: l.THREEDS_UNSUPPORTED_VERSION.type,
                        message: l.THREEDS_UNSUPPORTED_VERSION.message
                    });
                    switch (t) {
                        case "2":
                        case "2-cardinal-modal":
                            return "cardinal-modal";
                        case "2-bootstrap3-modal":
                            return "bootstrap3-modal";
                        case "2-inline-iframe":
                            return "inline-iframe";
                        default:
                            throw new c({
                                code: l.THREEDS_UNRECOGNIZED_VERSION.code,
                                type: l.THREEDS_UNRECOGNIZED_VERSION.type,
                                message: "Version `" + e.version + "` is not a recognized version. You may need to update the version of your Braintree SDK to support this version."
                            })
                    }
                }
                t.exports = {
                    create: u((function(e) {
                        var t = "3D Secure",
                            n = p(e);
                        return o.verify({
                            name: t,
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            var o = s.create(e.authorization),
                                u = a.create({
                                    authorization: e.authorization,
                                    client: e.client,
                                    debug: e.debug,
                                    assetsUrl: o,
                                    name: t
                                }).then((function(t) {
                                    var r, o = t.getConfiguration(),
                                        a = o.gatewayConfiguration;
                                    return e.client = t, a.threeDSecureEnabled || (r = l.THREEDS_NOT_ENABLED), "TOKENIZATION_KEY" === o.authorizationType && (r = l.THREEDS_CAN_NOT_USE_TOKENIZATION_KEY), "production" === a.environment && !i() && (r = l.THREEDS_HTTPS_REQUIRED), "legacy" === n || a.threeDSecure && a.threeDSecure.cardinalAuthenticationJWT || (d.sendEvent(e.client, "three-d-secure.initialization.failed.missing-cardinalAuthenticationJWT"), r = l.THREEDS_NOT_ENABLED_FOR_V2), r ? Promise.reject(new c(r)) : (d.sendEvent(e.client, "three-d-secure.initialized"), t)
                                })),
                                p = new r({
                                    client: e.client,
                                    assetsUrl: o,
                                    createPromise: u,
                                    loggingEnabled: e.loggingEnabled,
                                    cardinalSDKConfig: e.cardinalSDKConfig,
                                    framework: n
                                });
                            return e.client ? u.then((function() {
                                return p
                            })) : p
                        }))
                    })),
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/analytics": 116,
                "../lib/basic-component-verification": 119,
                "../lib/braintree-error": 121,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "../lib/is-https": 149,
                "./external/three-d-secure": 194,
                "./shared/errors": 197,
                "@braintree/wrap-promise": 42
            }],
            196: [function(e, t, n) {
                t.exports = {
                    LANDING_FRAME_NAME: "braintreethreedsecurelanding",
                    CARDINAL_SCRIPT_SOURCE: {
                        production: "https://songbird.cardinalcommerce.com/edge/v1/songbird.js",
                        sandbox: "https://songbirdstag.cardinalcommerce.com/edge/v1/songbird.js"
                    }
                }
            }, {}],
            197: [function(e, t, n) {
                var r = e("../../lib/braintree-error");
                t.exports = {
                    THREEDS_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: "THREEDS_NOT_ENABLED",
                        message: "3D Secure is not enabled for this merchant."
                    },
                    THREEDS_CAN_NOT_USE_TOKENIZATION_KEY: {
                        type: r.types.MERCHANT,
                        code: "THREEDS_CAN_NOT_USE_TOKENIZATION_KEY",
                        message: "3D Secure can not use a tokenization key for authorization."
                    },
                    THREEDS_HTTPS_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: "THREEDS_HTTPS_REQUIRED",
                        message: "3D Secure requires HTTPS."
                    },
                    THREEDS_NOT_ENABLED_FOR_V2: {
                        type: r.types.MERCHANT,
                        code: "THREEDS_NOT_ENABLED_FOR_V2",
                        message: "3D Secure version 2 is not enabled for this merchant. Contact Braintree Support for assistance at https://help.braintreepayments.com/"
                    },
                    THREEDS_UNRECOGNIZED_VERSION: {
                        type: r.types.MERCHANT,
                        code: "THREEDS_UNRECOGNIZED_VERSION"
                    },
                    THREEDS_CARDINAL_SDK_SETUP_FAILED: {
                        type: r.types.UNKNOWN,
                        code: "THREEDS_CARDINAL_SDK_SETUP_FAILED",
                        message: "Something went wrong setting up Cardinal's Songbird.js library."
                    },
                    THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED: {
                        type: r.types.NETWORK,
                        code: "THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED",
                        message: "Cardinal's Songbird.js library could not be loaded."
                    },
                    THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT: {
                        type: r.types.UNKNOWN,
                        code: "THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT",
                        message: "Cardinal's Songbird.js took too long to setup."
                    },
                    THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT: {
                        type: r.types.UNKNOWN,
                        code: "THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT",
                        message: "Cardinal's API took too long to respond."
                    },
                    THREEDS_CARDINAL_SDK_BAD_CONFIG: {
                        type: r.types.MERCHANT,
                        code: "THREEDS_CARDINAL_SDK_BAD_CONFIG",
                        message: "JWT or other required field missing. Please check your setup configuration."
                    },
                    THREEDS_CARDINAL_SDK_BAD_JWT: {
                        type: r.types.MERCHANT,
                        code: "THREEDS_CARDINAL_SDK_BAD_JWT",
                        message: "Cardinal JWT missing or malformed. Please check your setup configuration."
                    },
                    THREEDS_CARDINAL_SDK_ERROR: {
                        type: r.types.UNKNOWN,
                        code: "THREEDS_CARDINAL_SDK_ERROR",
                        message: "A general error has occurred with Cardinal. See description for more information."
                    },
                    THREEDS_CARDINAL_SDK_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: "THREEDS_CARDINAL_SDK_CANCELED",
                        message: "Canceled by user."
                    },
                    THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT: {
                        type: r.types.MERCHANT,
                        code: "THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT",
                        message: "3D Secure verfication canceled by merchant."
                    },
                    THREEDS_AUTHENTICATION_IN_PROGRESS: {
                        type: r.types.MERCHANT,
                        code: "THREEDS_AUTHENTICATION_IN_PROGRESS",
                        message: "Cannot call verifyCard while existing authentication is in progress."
                    },
                    THREEDS_MISSING_VERIFY_CARD_OPTION: {
                        type: r.types.MERCHANT,
                        code: "THREEDS_MISSING_VERIFY_CARD_OPTION"
                    },
                    THREEDS_JWT_AUTHENTICATION_FAILED: {
                        type: r.types.UNKNOWN,
                        code: "THREEDS_JWT_AUTHENTICATION_FAILED",
                        message: "Something went wrong authenticating the JWT from Cardinal"
                    },
                    THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR: {
                        type: r.types.MERCHANT,
                        code: "THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR",
                        message: "Either the payment method nonce passed to `verifyCard` does not exist, or it was already consumed"
                    },
                    THREEDS_LOOKUP_VALIDATION_ERROR: {
                        type: r.types.CUSTOMER,
                        code: "THREEDS_LOOKUP_VALIDATION_ERROR",
                        message: "The data passed in `verifyCard` did not pass validation checks. See details for more info"
                    },
                    THREEDS_LOOKUP_ERROR: {
                        type: r.types.UNKNOWN,
                        code: "THREEDS_LOOKUP_ERROR",
                        message: "Something went wrong during the 3D Secure lookup"
                    },
                    THREEDS_INLINE_IFRAME_DETAILS_INCORRECT: {
                        type: r.types.UNKNOWN,
                        code: "THREEDS_INLINE_IFRAME_DETAILS_INCORRECT",
                        message: "Something went wrong when attempting to add the authentication iframe to the page."
                    },
                    THREEDS_NO_VERIFICATION_PAYLOAD: {
                        type: r.types.MERCHANT,
                        code: "THREEDS_NO_VERIFICATION_PAYLOAD",
                        message: "No verification payload available."
                    },
                    THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN: {
                        type: r.types.INTERNAL,
                        code: "THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN",
                        message: "Term Url must be on a Braintree domain."
                    },
                    THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED: {
                        type: r.types.INTERNAL,
                        code: "THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED",
                        message: "Method not implemented for this framework."
                    },
                    THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID: {
                        type: r.types.MERCHANT,
                        code: "THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID",
                        message: "Requested Exemption Type is invalid."
                    },
                    THREEDS_UNSUPPORTED_VERSION: {
                        type: r.types.MERCHANT,
                        code: "THREEDS_UNSUPPORTED_VERSION",
                        message: "3D Secure `1` is deprecated and no longer supported. See available versions at https://braintree.github.io/braintree-web/current/module-braintree-web_three-d-secure.html#.create"
                    }
                }
            }, {
                "../../lib/braintree-error": 121
            }],
            198: [function(e, t, n) {
                var r = e("../../lib/enumerate");
                t.exports = r(["AUTHENTICATION_COMPLETE"], "threedsecure:")
            }, {
                "../../lib/enumerate": 131
            }],
            199: [function(e, t, n) {
                var r = e("./shared/unionpay"),
                    i = e("../lib/basic-component-verification"),
                    o = e("../lib/braintree-error"),
                    a = e("../lib/create-deferred-client"),
                    s = e("../lib/create-assets-url"),
                    c = e("../lib/analytics"),
                    d = e("./shared/errors"),
                    l = e("@braintree/wrap-promise");
                t.exports = {
                    create: l((function(e) {
                        var t = "UnionPay";
                        return i.verify({
                            name: t,
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            return a.create({
                                authorization: e.authorization,
                                client: e.client,
                                debug: e.debug,
                                assetsUrl: s.create(e.authorization),
                                name: t
                            })
                        })).then((function(t) {
                            var n = t.getConfiguration();
                            return e.client = t, n.gatewayConfiguration.unionPay && !0 === n.gatewayConfiguration.unionPay.enabled ? (c.sendEvent(e.client, "unionpay.initialized"), new r(e)) : Promise.reject(new o(d.UNIONPAY_NOT_ENABLED))
                        }))
                    })),
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/analytics": 116,
                "../lib/basic-component-verification": 119,
                "../lib/braintree-error": 121,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "./shared/errors": 201,
                "./shared/unionpay": 202,
                "@braintree/wrap-promise": 42
            }],
            200: [function(e, t, n) {
                var r = e("../../lib/enumerate");
                t.exports = {
                    events: r(["HOSTED_FIELDS_FETCH_CAPABILITIES", "HOSTED_FIELDS_ENROLL", "HOSTED_FIELDS_TOKENIZE"], "union-pay:"),
                    HOSTED_FIELDS_FRAME_NAME: "braintreeunionpayhostedfields"
                }
            }, {
                "../../lib/enumerate": 131
            }],
            201: [function(e, t, n) {
                var r = e("../../lib/braintree-error");
                t.exports = {
                    UNIONPAY_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: "UNIONPAY_NOT_ENABLED",
                        message: "UnionPay is not enabled for this merchant."
                    },
                    UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID: {
                        type: r.types.MERCHANT,
                        code: "UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID",
                        message: "Found an invalid Hosted Fields instance. Please use a valid Hosted Fields instance."
                    },
                    UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: "UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED",
                        message: "Could not find the Hosted Fields instance."
                    },
                    UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: "UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED",
                        message: "A card or a Hosted Fields instance is required. Please supply a card or a Hosted Fields instance."
                    },
                    UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES: {
                        type: r.types.MERCHANT,
                        code: "UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES",
                        message: "Please supply either a card or a Hosted Fields instance, not both."
                    },
                    UNIONPAY_EXPIRATION_DATE_INCOMPLETE: {
                        type: r.types.MERCHANT,
                        code: "UNIONPAY_EXPIRATION_DATE_INCOMPLETE",
                        message: "You must supply expiration month and year or neither."
                    },
                    UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID: {
                        type: r.types.CUSTOMER,
                        code: "UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID",
                        message: "Enrollment failed due to user input error."
                    },
                    UNIONPAY_ENROLLMENT_NETWORK_ERROR: {
                        type: r.types.NETWORK,
                        code: "UNIONPAY_ENROLLMENT_NETWORK_ERROR",
                        message: "Could not enroll UnionPay card."
                    },
                    UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR: {
                        type: r.types.NETWORK,
                        code: "UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR",
                        message: "Could not fetch card capabilities."
                    },
                    UNIONPAY_TOKENIZATION_NETWORK_ERROR: {
                        type: r.types.NETWORK,
                        code: "UNIONPAY_TOKENIZATION_NETWORK_ERROR",
                        message: "A tokenization network error occurred."
                    },
                    UNIONPAY_MISSING_MOBILE_PHONE_DATA: {
                        type: r.types.MERCHANT,
                        code: "UNIONPAY_MISSING_MOBILE_PHONE_DATA",
                        message: "A `mobile` with `countryCode` and `number` is required."
                    },
                    UNIONPAY_FAILED_TOKENIZATION: {
                        type: r.types.CUSTOMER,
                        code: "UNIONPAY_FAILED_TOKENIZATION",
                        message: "The supplied card data failed tokenization."
                    }
                }
            }, {
                "../../lib/braintree-error": 121
            }],
            202: [function(e, t, n) {
                var r = e("../../lib/analytics"),
                    i = e("../../lib/braintree-error"),
                    o = e("framebus"),
                    a = e("./constants"),
                    s = e("../../lib/is-verified-domain"),
                    c = e("../../lib/use-min"),
                    d = e("../../lib/convert-methods-to-error"),
                    l = e("./errors"),
                    u = a.events,
                    p = e("@braintree/iframer"),
                    _ = e("../../lib/methods"),
                    E = e("@braintree/uuid"),
                    h = e("@braintree/wrap-promise"),
                    m = e("../../lib/constants").BUS_CONFIGURATION_REQUEST_EVENT;

                function f(e) {
                    this._options = e
                }
                f.prototype.fetchCapabilities = function(e) {
                    var t = this,
                        n = this._options.client,
                        o = e.card ? e.card.number : null,
                        a = e.hostedFields;
                    return o && a ? Promise.reject(new i(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES)) : o ? n.request({
                        method: "get",
                        endpoint: "payment_methods/credit_cards/capabilities",
                        data: {
                            _meta: {
                                source: "unionpay"
                            },
                            creditCard: {
                                number: o
                            }
                        }
                    }).then((function(e) {
                        return r.sendEvent(n, "unionpay.capabilities-received"), e
                    })).catch((function(e) {
                        var t = e.details && e.details.httpStatus;
                        return r.sendEvent(n, "unionpay.capabilities-failed"), 403 === t ? Promise.reject(e) : Promise.reject(new i({
                            type: l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.type,
                            code: l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.code,
                            message: l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.message,
                            details: {
                                originalError: e
                            }
                        }))
                    })) : a ? a._bus ? t._initializeHostedFields().then((function() {
                        return new Promise((function(e, n) {
                            t._bus.emit(u.HOSTED_FIELDS_FETCH_CAPABILITIES, {
                                hostedFields: a
                            }, (function(t) {
                                t.err ? n(new i(t.err)) : e(t.payload)
                            }))
                        }))
                    })) : Promise.reject(new i(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID)) : Promise.reject(new i(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED))
                }, f.prototype.enroll = function(e) {
                    var t, n = this,
                        o = this._options.client,
                        a = e.card,
                        s = e.mobile,
                        c = e.hostedFields;
                    if (!s) return Promise.reject(new i(l.UNIONPAY_MISSING_MOBILE_PHONE_DATA));
                    if (c) return c._bus ? a ? Promise.reject(new i(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES)) : new Promise((function(e, t) {
                        n._initializeHostedFields().then((function() {
                            n._bus.emit(u.HOSTED_FIELDS_ENROLL, {
                                hostedFields: c,
                                mobile: s
                            }, (function(n) {
                                n.err ? t(new i(n.err)) : e(n.payload)
                            }))
                        }))
                    })) : Promise.reject(new i(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID));
                    if (a && a.number) {
                        if (t = {
                                _meta: {
                                    source: "unionpay"
                                },
                                unionPayEnrollment: {
                                    number: a.number,
                                    mobileCountryCode: s.countryCode,
                                    mobileNumber: s.number
                                }
                            }, a.expirationDate) t.unionPayEnrollment.expirationDate = a.expirationDate;
                        else if (a.expirationMonth || a.expirationYear) {
                            if (!a.expirationMonth || !a.expirationYear) return Promise.reject(new i(l.UNIONPAY_EXPIRATION_DATE_INCOMPLETE));
                            t.unionPayEnrollment.expirationYear = a.expirationYear, t.unionPayEnrollment.expirationMonth = a.expirationMonth
                        }
                        return o.request({
                            method: "post",
                            endpoint: "union_pay_enrollments",
                            data: t
                        }).then((function(e) {
                            return r.sendEvent(o, "unionpay.enrollment-succeeded"), {
                                enrollmentId: e.unionPayEnrollmentId,
                                smsCodeRequired: e.smsCodeRequired
                            }
                        })).catch((function(e) {
                            var t, n = e.details && e.details.httpStatus;
                            return 403 === n ? t = e : n < 500 ? (t = new i(l.UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID)).details = {
                                originalError: e
                            } : (t = new i(l.UNIONPAY_ENROLLMENT_NETWORK_ERROR)).details = {
                                originalError: e
                            }, r.sendEvent(o, "unionpay.enrollment-failed"), Promise.reject(t)
                        }))
                    }
                    return Promise.reject(new i(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED))
                }, f.prototype.tokenize = function(e) {
                    var t, n = this,
                        o = this._options.client,
                        a = e.card,
                        s = e.hostedFields;
                    return a && s ? Promise.reject(new i(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES)) : a ? (t = {
                        _meta: {
                            source: "unionpay"
                        },
                        creditCard: {
                            number: e.card.number,
                            options: {
                                unionPayEnrollment: {
                                    id: e.enrollmentId
                                }
                            }
                        }
                    }, e.smsCode && (t.creditCard.options.unionPayEnrollment.smsCode = e.smsCode), a.expirationDate ? t.creditCard.expirationDate = a.expirationDate : a.expirationMonth && a.expirationYear && (t.creditCard.expirationYear = a.expirationYear, t.creditCard.expirationMonth = a.expirationMonth), e.card.cvv && (t.creditCard.cvv = e.card.cvv), o.request({
                        method: "post",
                        endpoint: "payment_methods/credit_cards",
                        data: t
                    }).then((function(e) {
                        var t = e.creditCards[0];
                        return delete t.consumed, delete t.threeDSecureInfo, r.sendEvent(o, "unionpay.nonce-received"), t
                    })).catch((function(e) {
                        var t, n = e.details && e.details.httpStatus;
                        return r.sendEvent(o, "unionpay.nonce-failed"), 403 === n ? t = e : n < 500 ? (t = new i(l.UNIONPAY_FAILED_TOKENIZATION)).details = {
                            originalError: e
                        } : (t = new i(l.UNIONPAY_TOKENIZATION_NETWORK_ERROR)).details = {
                            originalError: e
                        }, Promise.reject(t)
                    }))) : s ? s._bus ? new Promise((function(t, r) {
                        n._initializeHostedFields().then((function() {
                            n._bus.emit(u.HOSTED_FIELDS_TOKENIZE, e, (function(e) {
                                e.err ? r(new i(e.err)) : t(e.payload)
                            }))
                        }))
                    })) : Promise.reject(new i(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID)) : Promise.reject(new i(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED))
                }, f.prototype.teardown = function() {
                    return this._bus && (this._hostedFieldsFrame.parentNode.removeChild(this._hostedFieldsFrame), this._bus.teardown()), d(this, _(f.prototype)), Promise.resolve()
                }, f.prototype._initializeHostedFields = function() {
                    var e, t, n = E(),
                        r = this;
                    return this._hostedFieldsInitializePromise || (this._hostedFieldsInitializePromise = new Promise((function(i) {
                        e = r._options.client.getConfiguration().gatewayConfiguration.assetsUrl, t = r._options.client.getConfiguration().isDebug, r._bus = new o({
                            channel: n,
                            verifyDomain: s
                        }), r._hostedFieldsFrame = p({
                            name: a.HOSTED_FIELDS_FRAME_NAME + "_" + n,
                            src: e + "/web/3.94.0/html/unionpay-hosted-fields-frame" + c(t) + ".html",
                            height: 0,
                            width: 0
                        }), r._bus.on(m, (function(e) {
                            e(r._options.client), i()
                        })), document.body.appendChild(r._hostedFieldsFrame)
                    }))), this._hostedFieldsInitializePromise
                }, t.exports = h.wrapPrototype(f)
            }, {
                "../../lib/analytics": 116,
                "../../lib/braintree-error": 121,
                "../../lib/constants": 123,
                "../../lib/convert-methods-to-error": 124,
                "../../lib/is-verified-domain": 150,
                "../../lib/methods": 152,
                "../../lib/use-min": 157,
                "./constants": 200,
                "./errors": 201,
                "@braintree/iframer": 34,
                "@braintree/uuid": 38,
                "@braintree/wrap-promise": 42,
                framebus: 51
            }],
            203: [function(e, t, n) {
                t.exports = {
                    PLAID_LINK_JS: "https://cdn.plaid.com/link/v2/stable/link-initialize.js"
                }
            }, {}],
            204: [function(e, t, n) {
                var r = e("../lib/braintree-error");
                t.exports = {
                    US_BANK_ACCOUNT_OPTION_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: "US_BANK_ACCOUNT_OPTION_REQUIRED"
                    },
                    US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS: {
                        type: r.types.MERCHANT,
                        code: "US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS"
                    },
                    US_BANK_ACCOUNT_LOGIN_LOAD_FAILED: {
                        type: r.types.NETWORK,
                        code: "US_BANK_ACCOUNT_LOGIN_LOAD_FAILED",
                        message: "Bank login flow failed to load."
                    },
                    US_BANK_ACCOUNT_LOGIN_CLOSED: {
                        type: r.types.CUSTOMER,
                        code: "US_BANK_ACCOUNT_LOGIN_CLOSED",
                        message: "Customer closed bank login flow before authorizing."
                    },
                    US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE: {
                        type: r.types.MERCHANT,
                        code: "US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE",
                        message: "Another bank login tokenization request is active."
                    },
                    US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR: {
                        type: r.types.NETWORK,
                        code: "US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR",
                        message: "A tokenization network error occurred."
                    },
                    US_BANK_ACCOUNT_FAILED_TOKENIZATION: {
                        type: r.types.CUSTOMER,
                        code: "US_BANK_ACCOUNT_FAILED_TOKENIZATION",
                        message: "The supplied data failed tokenization."
                    },
                    US_BANK_ACCOUNT_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: "US_BANK_ACCOUNT_NOT_ENABLED",
                        message: "US bank account is not enabled."
                    },
                    US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: "US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED",
                        message: "Bank login is not enabled."
                    }
                }
            }, {
                "../lib/braintree-error": 121
            }],
            205: [function(e, t, n) {
                var r = e("../lib/basic-component-verification"),
                    i = e("../lib/braintree-error"),
                    o = e("../lib/create-deferred-client"),
                    a = e("../lib/create-assets-url"),
                    s = e("./errors"),
                    c = e("./us-bank-account"),
                    d = e("@braintree/wrap-promise");
                t.exports = {
                    create: d((function(e) {
                        var t = "US Bank Account";
                        return r.verify({
                            name: t,
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            return o.create({
                                authorization: e.authorization,
                                client: e.client,
                                debug: e.debug,
                                assetsUrl: a.create(e.authorization),
                                name: t
                            })
                        })).then((function(t) {
                            return e.client = t, e.client.getConfiguration().gatewayConfiguration.usBankAccount ? new c(e) : Promise.reject(new i(s.US_BANK_ACCOUNT_NOT_ENABLED))
                        }))
                    })),
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/basic-component-verification": 119,
                "../lib/braintree-error": 121,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "./errors": 204,
                "./us-bank-account": 206,
                "@braintree/wrap-promise": 42
            }],
            206: [function(e, t, n) {
                var r = e("../lib/braintree-error"),
                    i = e("./constants"),
                    o = e("./errors"),
                    a = e("../lib/errors"),
                    s = e("../lib/analytics"),
                    c = e("../lib/once"),
                    d = e("../lib/convert-methods-to-error"),
                    l = e("../lib/methods"),
                    u = e("@braintree/wrap-promise"),
                    p = T("UsBankAccount"),
                    _ = T("UsBankLogin");

                function E(e) {
                    this._client = e.client, this._isTokenizingBankLogin = !1, s.sendEvent(this._client, "usbankaccount.initialized")
                }

                function h(e) {
                    var t, n = e.details && e.details.httpStatus;
                    return (t = new r(401 === n ? a.BRAINTREE_API_ACCESS_RESTRICTED : n < 500 ? o.US_BANK_ACCOUNT_FAILED_TOKENIZATION : o.US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR)).details = {
                        originalError: e
                    }, t
                }

                function m(e, t) {
                    var n = e.data[t].paymentMethod,
                        r = "US bank account ending in - " + n.details.last4;
                    return {
                        nonce: n.id,
                        details: {},
                        description: r,
                        type: "us_bank_account"
                    }
                }

                function f(e, t) {
                    function n() {
                        var e = this.readyState;
                        e && "loaded" !== e && "complete" !== e || (a(), t(null, window.Plaid))
                    }

                    function i() {
                        e.parentNode.removeChild(e), t(new r(o.US_BANK_ACCOUNT_LOGIN_LOAD_FAILED))
                    }

                    function a() {
                        e.removeEventListener("error", i), e.removeEventListener("load", n), e.removeEventListener("readystatechange", n)
                    }
                    e.addEventListener("error", i), e.addEventListener("load", n), e.addEventListener("readystatechange", n)
                }

                function y(e) {
                    return {
                        streetAddress: e.streetAddress,
                        extendedAddress: e.extendedAddress,
                        city: e.locality,
                        state: e.region,
                        zipCode: e.postalCode
                    }
                }

                function A(e, t) {
                    "personal" === t.ownershipType ? e.individualOwner = {
                        firstName: t.firstName,
                        lastName: t.lastName
                    } : "business" === t.ownershipType && (e.businessOwner = {
                        businessName: t.businessName
                    })
                }

                function T(e) {
                    return "mutation Tokenize" + e + "($input: Tokenize" + e + "Input!) {  tokenize" + e + "(input: $input) {    paymentMethod {      id      details {        ... on UsBankAccountDetails {          last4        }      }    }  }}"
                }
                E.prototype.tokenize = function(e) {
                    return (e = e || {}).mandateText ? e.bankDetails && e.bankLogin ? Promise.reject(new r({
                        type: o.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.type,
                        code: o.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.code,
                        message: "tokenize must be called with bankDetails or bankLogin, not both."
                    })) : e.bankDetails ? this._tokenizeBankDetails(e) : e.bankLogin ? this._tokenizeBankLogin(e) : Promise.reject(new r({
                        type: o.US_BANK_ACCOUNT_OPTION_REQUIRED.type,
                        code: o.US_BANK_ACCOUNT_OPTION_REQUIRED.code,
                        message: "tokenize must be called with bankDetails or bankLogin."
                    })) : Promise.reject(new r({
                        type: o.US_BANK_ACCOUNT_OPTION_REQUIRED.type,
                        code: o.US_BANK_ACCOUNT_OPTION_REQUIRED.code,
                        message: "mandateText property is required."
                    }))
                }, E.prototype._tokenizeBankDetails = function(e) {
                    var t = this._client,
                        n = e.bankDetails,
                        r = {
                            achMandate: e.mandateText,
                            routingNumber: n.routingNumber,
                            accountNumber: n.accountNumber,
                            accountType: n.accountType.toUpperCase(),
                            billingAddress: y(n.billingAddress || {})
                        };
                    return A(r, n), t.request({
                        api: "graphQLApi",
                        data: {
                            query: p,
                            variables: {
                                input: {
                                    usBankAccount: r
                                }
                            }
                        }
                    }).then((function(e) {
                        return s.sendEvent(t, "usbankaccount.bankdetails.tokenization.succeeded"), Promise.resolve(m(e, "tokenizeUsBankAccount"))
                    })).catch((function(e) {
                        var n = h(e);
                        return s.sendEvent(t, "usbankaccount.bankdetails.tokenization.failed"), Promise.reject(n)
                    }))
                }, E.prototype._tokenizeBankLogin = function(e) {
                    var t = this,
                        n = this._client,
                        i = n.getConfiguration().gatewayConfiguration,
                        a = "production" === i.environment,
                        c = i.usBankAccount.plaid;
                    return e.bankLogin.displayName ? c ? this._isTokenizingBankLogin ? Promise.reject(new r(o.US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE)) : (this._isTokenizingBankLogin = !0, new Promise((function(i, d) {
                        t._loadPlaid((function(l, u) {
                            l ? d(l) : (u.create({
                                clientName: e.bankLogin.displayName,
                                apiVersion: "v2",
                                env: a ? "production" : "sandbox",
                                key: c.publicKey,
                                product: "auth",
                                selectAccount: !0,
                                onExit: function() {
                                    t._isTokenizingBankLogin = !1, s.sendEvent(n, "usbankaccount.banklogin.tokenization.closed.by-user"), d(new r(o.US_BANK_ACCOUNT_LOGIN_CLOSED))
                                },
                                onSuccess: function(r, o) {
                                    var c = e.bankLogin,
                                        l = {
                                            publicToken: r,
                                            accountId: a ? o.account_id : "plaid_account_id",
                                            accountType: o.account.subtype.toUpperCase(),
                                            achMandate: e.mandateText,
                                            billingAddress: y(c.billingAddress || {})
                                        };
                                    A(l, c), n.request({
                                        api: "graphQLApi",
                                        data: {
                                            query: _,
                                            variables: {
                                                input: {
                                                    usBankLogin: l
                                                }
                                            }
                                        }
                                    }).then((function(e) {
                                        t._isTokenizingBankLogin = !1, s.sendEvent(n, "usbankaccount.banklogin.tokenization.succeeded"), i(m(e, "tokenizeUsBankLogin"))
                                    })).catch((function(e) {
                                        var r;
                                        t._isTokenizingBankLogin = !1, r = h(e), s.sendEvent(n, "usbankaccount.banklogin.tokenization.failed"), d(r)
                                    }))
                                }
                            }).open(), s.sendEvent(n, "usbankaccount.banklogin.tokenization.started"))
                        }))
                    }))) : Promise.reject(new r(o.US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED)) : Promise.reject(new r({
                        type: o.US_BANK_ACCOUNT_OPTION_REQUIRED.type,
                        code: o.US_BANK_ACCOUNT_OPTION_REQUIRED.code,
                        message: "displayName property is required when using bankLogin."
                    }))
                }, E.prototype._loadPlaid = function(e) {
                    var t, n;
                    e = c(e), window.Plaid ? e(null, window.Plaid) : (t = document.querySelector('script[src="' + i.PLAID_LINK_JS + '"]')) ? f(t, e) : ((n = document.createElement("script")).src = i.PLAID_LINK_JS, n.async = !0, f(n, e), document.body.appendChild(n), this._plaidScript = n)
                }, E.prototype.teardown = function() {
                    return this._plaidScript && document.body.removeChild(this._plaidScript), d(this, l(E.prototype)), Promise.resolve()
                }, t.exports = u.wrapPrototype(E)
            }, {
                "../lib/analytics": 116,
                "../lib/braintree-error": 121,
                "../lib/convert-methods-to-error": 124,
                "../lib/errors": 132,
                "../lib/methods": 152,
                "../lib/once": 153,
                "./constants": 203,
                "./errors": 204,
                "@braintree/wrap-promise": 42
            }],
            207: [function(e, t, n) {
                var r = e("../lib/braintree-error");
                t.exports = {
                    VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN: {
                        type: r.types.MERCHANT,
                        code: "VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN",
                        message: "A client token with a customer id must be used to delete a payment method nonce."
                    },
                    VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND: {
                        type: r.types.MERCHANT,
                        code: "VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND"
                    },
                    VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR: {
                        type: r.types.UNKNOWN,
                        code: "VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR"
                    }
                }
            }, {
                "../lib/braintree-error": 121
            }],
            208: [function(e, t, n) {
                var r = e("../lib/basic-component-verification"),
                    i = e("../lib/create-deferred-client"),
                    o = e("../lib/create-assets-url"),
                    a = e("./vault-manager"),
                    s = e("@braintree/wrap-promise");
                t.exports = {
                    create: s((function(e) {
                        var t = "Vault Manager";
                        return r.verify({
                            name: t,
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            return new a({
                                createPromise: i.create({
                                    authorization: e.authorization,
                                    client: e.client,
                                    debug: e.debug,
                                    assetsUrl: o.create(e.authorization),
                                    name: t
                                })
                            })
                        }))
                    })),
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/basic-component-verification": 119,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "./vault-manager": 209,
                "@braintree/wrap-promise": 42
            }],
            209: [function(e, t, n) {
                var r = e("../lib/analytics"),
                    i = e("../lib/braintree-error"),
                    o = e("./errors"),
                    a = e("../lib/convert-methods-to-error"),
                    s = e("../lib/methods"),
                    c = e("@braintree/wrap-promise");

                function d(e) {
                    this._createPromise = e.createPromise
                }

                function l(e) {
                    var t = {
                        nonce: e.nonce,
                        default: e.default,
                        details: e.details,
                        hasSubscription: e.hasSubscription,
                        type: e.type
                    };
                    return e.description && (t.description = e.description), e.binData && (t.binData = e.binData), t
                }
                d.prototype.fetchPaymentMethods = function(e) {
                    var t;
                    return t = !0 === (e = e || {}).defaultFirst ? 1 : 0, this._createPromise.then((function(e) {
                        return e.request({
                            endpoint: "payment_methods",
                            method: "get",
                            data: {
                                defaultFirst: t
                            }
                        })
                    })).then(function(e) {
                        return r.sendEvent(this._createPromise, "vault-manager.fetch-payment-methods.succeeded"), e.paymentMethods.map(l)
                    }.bind(this))
                }, d.prototype.deletePaymentMethod = function(e) {
                    return this._createPromise.then((function(t) {
                        return "CLIENT_TOKEN" === t.getConfiguration().authorizationType ? t.request({
                            api: "graphQLApi",
                            data: {
                                query: "mutation DeletePaymentMethodFromSingleUseToken($input: DeletePaymentMethodFromSingleUseTokenInput!) {  deletePaymentMethodFromSingleUseToken(input: $input) {    clientMutationId  }}",
                                variables: {
                                    input: {
                                        singleUseTokenId: e
                                    }
                                },
                                operationName: "DeletePaymentMethodFromSingleUseToken"
                            }
                        }).then((function() {
                            r.sendEvent(t, "vault-manager.delete-payment-method.succeeded")
                        })).catch((function(n) {
                            var a, s = n.details.originalError;
                            return r.sendEvent(t, "vault-manager.delete-payment-method.failed"), s[0] && "NOT_FOUND" === s[0].extensions.errorClass && (a = new i({
                                type: o.VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND.type,
                                code: o.VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND.code,
                                message: "A payment method for payment method nonce `" + e + "` could not be found.",
                                details: {
                                    originalError: s
                                }
                            })), a || (a = new i({
                                type: o.VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR.type,
                                code: o.VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR.code,
                                message: "An unknown error occured when attempting to delete the payment method assocaited with the payment method nonce `" + e + "`.",
                                details: {
                                    originalError: s
                                }
                            })), Promise.reject(a)
                        })) : Promise.reject(new i(o.VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN))
                    }))
                }, d.prototype.teardown = function() {
                    return a(this, s(d.prototype)), Promise.resolve()
                }, t.exports = c.wrapPrototype(d)
            }, {
                "../lib/analytics": 116,
                "../lib/braintree-error": 121,
                "../lib/convert-methods-to-error": 124,
                "../lib/methods": 152,
                "./errors": 207,
                "@braintree/wrap-promise": 42
            }],
            210: [function(e, t, n) {
                var r = (this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                })(e("./venmo-desktop"));
                t.exports = function(e) {
                    return new r.default(e).initialize()
                }
            }, {
                "./venmo-desktop": 212
            }],
            211: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.VENMO_PAYMENT_CONTEXT_STATUS_QUERY = n.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY = n.UPDATE_PAYMENT_CONTEXT_QUERY = n.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY = n.CREATE_PAYMENT_CONTEXT_QUERY = n.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY = void 0, n.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY = "mutation CreateVenmoQRCodePaymentContext($input: CreateVenmoQRCodePaymentContextInput!) {\n  createVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n    venmoQRCodePaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}", n.CREATE_PAYMENT_CONTEXT_QUERY = "mutation CreateVenmoPaymentContext($input: CreateVenmoPaymentContextInput!) {\n  createVenmoPaymentContext(input: $input) {\n    clientMutationId\n    venmoPaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}", n.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY = "mutation UpdateVenmoQRCodePaymentContext($input: UpdateVenmoQRCodePaymentContextInput!) {\n  updateVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n  }\n}", n.UPDATE_PAYMENT_CONTEXT_QUERY = "mutation UpdateVenmoPaymentContextStatus($input: UpdateVenmoPaymentContextStatusInput!) {\n  updateVenmoPaymentContextStatus(input: $input) {\n    clientMutationId\n  }\n}", n.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY = "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoQRCodePaymentContext {\n      status\n      paymentMethodId\n      userName\n    }\n  }\n}", n.VENMO_PAYMENT_CONTEXT_STATUS_QUERY = "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoPaymentContext {\n      status\n      paymentMethodId\n      userName\n      payerInfo {\n        firstName\n        lastName\n        phoneNumber\n        email\n        externalId\n        userName\n      }\n    }\n  }\n}"
            }, {}],
            212: [function(e, t, n) {
                var r = this && this.__assign || function() {
                        return r = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }, r.apply(this, arguments)
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = i(e("framebus")),
                    a = i(e("@braintree/iframer")),
                    s = i(e("@braintree/uuid")),
                    c = e("../shared/events"),
                    d = e("./queries"),
                    l = (function() {
                        function e(e) {
                            this.isHidden = !0, this.env = e.environment, this.id = s.default(), this.profileId = e.profileId, this.displayName = e.displayName, this.paymentMethodUsage = e.paymentMethodUsage, this.shouldUseLegacyQRCodeMutation = !this.paymentMethodUsage;
                            var t = e.url + "#" + this.env + "_" + this.id;
                            this.bus = new o.default({
                                channel: this.id,
                                verifyDomain: e.verifyDomain,
                                targetFrames: []
                            }), this.apiRequest = e.apiRequest, this.sendEvent = e.sendEvent, this.Promise = e.Promise, this.alertBox = document.createElement("div"), this.alertBox.setAttribute("data-venmo-desktop-id", this.id), this.alertBox.setAttribute("role", "alert"), this.alertBox.style.position = "fixed", this.alertBox.style.display = "none", this.alertBox.style.height = "1px", this.alertBox.style.width = "1px", this.alertBox.style.overflow = "hidden", this.alertBox.style.zIndex = "0", this.iframe = a.default({
                                src: t,
                                name: "venmo-desktop-iframe",
                                style: {
                                    display: "none",
                                    position: "fixed",
                                    top: "0",
                                    bottom: "0",
                                    right: "0",
                                    left: "0",
                                    height: "100%",
                                    width: "100%",
                                    zIndex: "9999999"
                                },
                                title: "Venmo Desktop"
                            }), this.bus.addTargetFrame(this.iframe)
                        }
                        return e.prototype.initialize = function() {
                            var e = this;
                            return new this.Promise((function(t) {
                                e.bus.on(c.VENMO_DESKTOP_IFRAME_READY, (function() {
                                    t(e)
                                })), e.bus.on(c.VENMO_DESKTOP_REQUEST_NEW_QR_CODE, (function() {
                                    e.sendEvent("venmo.tokenize.desktop.restarted-from-error-view"), e.startPolling()
                                })), document.body.appendChild(e.iframe), document.body.appendChild(e.alertBox)
                            }))
                        }, e.prototype.launchDesktopFlow = function() {
                            var e = this;
                            this.isHidden = !1;
                            var t = new this.Promise((function(t, n) {
                                e.launchDesktopPromiseRejectFunction = n;
                                var r = function() {
                                        e.bus.off(c.VENMO_DESKTOP_CUSTOMER_CANCELED, o), e.bus.off(c.VENMO_DESKTOP_UNKNOWN_ERROR, i)
                                    },
                                    i = function(t) {
                                        r(), e.sendEvent("venmo.tokenize.desktop.unknown-error"), n({
                                            allowUIToHandleError: !1,
                                            reason: "UNKNOWN_ERROR",
                                            err: t
                                        })
                                    },
                                    o = function() {
                                        r(), e.updateVenmoDesktopPaymentContext("CANCELED"), e.sendEvent("venmo.tokenize.desktop.status-change.canceled-from-modal"), n({
                                            allowUIToHandleError: !1,
                                            reason: "CUSTOMER_CANCELED"
                                        })
                                    };
                                e.completedHandler = function(e) {
                                    r(), t(e)
                                }, e.bus.on(c.VENMO_DESKTOP_CUSTOMER_CANCELED, o), e.bus.on(c.VENMO_DESKTOP_UNKNOWN_ERROR, i)
                            }));
                            return this.iframe.style.display = "block", this.setAlert("Generating a QR code, get your Venmo app ready"), this.iframe.focus(), this.startPolling(), t.then((function(t) {
                                return delete e.venmoContextId, delete e.launchDesktopPromiseRejectFunction, t
                            })).catch((function(t) {
                                return delete e.venmoContextId, delete e.launchDesktopPromiseRejectFunction, e.Promise.reject(t)
                            }))
                        }, e.prototype.triggerCompleted = function(e) {
                            var t = this;
                            this.isHidden || setTimeout((function() {
                                t.completedHandler && t.completedHandler(e), delete t.completedHandler
                            }), 2e3)
                        }, e.prototype.triggerRejected = function(e) {
                            this.launchDesktopPromiseRejectFunction && this.launchDesktopPromiseRejectFunction(e)
                        }, e.prototype.hideDesktopFlow = function() {
                            this.setAlert(""), this.iframe.style.display = "none", this.bus.emit(c.VENMO_DESKTOP_CLOSED_FROM_PARENT), this.isHidden = !0
                        }, e.prototype.displayError = function(e) {
                            this.isHidden || (this.bus.emit(c.VENMO_DESKTOP_DISPLAY_ERROR, {
                                message: e
                            }), this.setAlert(e))
                        }, e.prototype.displayQRCode = function(e, t) {
                            this.isHidden || (this.bus.emit(c.VENMO_DESKTOP_DISPLAY_QR_CODE, {
                                id: e,
                                merchantId: t
                            }), this.setAlert("To scan the QR code, open your Venmo app"))
                        }, e.prototype.authorize = function() {
                            this.isHidden || (this.bus.emit(c.VENMO_DESKTOP_AUTHORIZE), this.setAlert("Venmo account authorized"))
                        }, e.prototype.authorizing = function() {
                            this.isHidden || (this.bus.emit(c.VENMO_DESKTOP_AUTHORIZING), this.setAlert("Authorize on your Venmo app"))
                        }, e.prototype.startPolling = function() {
                            var e = this;
                            return this.createVenmoDesktopPaymentContext().then((function(t) {
                                var n = new Date(t.expiresAt).getTime() - new Date(t.createdAt).getTime(),
                                    r = Date.now() + n;
                                return e.displayQRCode(t.id, t.merchantId), e.pollForStatusChange(t.status, r)
                            })).then((function(t) {
                                if (t) {
                                    var n = t.userName || "";
                                    n = "@" + n.replace("@", ""), e.triggerCompleted({
                                        paymentMethodNonce: t.paymentMethodId,
                                        username: n,
                                        payerInfo: t.payerInfo,
                                        id: e.venmoContextId || ""
                                    })
                                }
                            })).catch((function(t) {
                                t.allowUIToHandleError || (e.sendEvent("venmo.tokenize.desktop.unhandled-error"), e.triggerRejected(t))
                            }))
                        }, e.prototype.pollForStatusChange = function(e, t) {
                            var n = this;
                            return this.venmoContextId ? Date.now() > t ? this.updateVenmoDesktopPaymentContext("EXPIRED").then((function() {
                                return n.displayError("Something went wrong"), n.sendEvent("venmo.tokenize.desktop.status-change.sdk-timeout"), n.Promise.reject({
                                    allowUIToHandleError: !0,
                                    reason: "TIMEOUT"
                                })
                            })) : this.lookupVenmoDesktopPaymentContext().then((function(r) {
                                if (!n.venmoContextId || !r) return n.Promise.resolve();
                                var i = r.status;
                                if (i !== e) switch (e = i, n.sendEvent("venmo.tokenize.desktop.status-change." + e.toLowerCase()), e) {
                                    case "CREATED":
                                        break;
                                    case "EXPIRED":
                                    case "FAILED":
                                    case "CANCELED":
                                        var o = "CANCELED" === e ? "The authorization was canceled" : "Something went wrong";
                                        return n.displayError(o), n.Promise.reject({
                                            allowUIToHandleError: !0,
                                            reason: e
                                        });
                                    case "SCANNED":
                                        n.authorizing();
                                        break;
                                    case "APPROVED":
                                        return n.authorize(), n.Promise.resolve(r)
                                }
                                return new n.Promise((function(r, i) {
                                    setTimeout((function() {
                                        n.pollForStatusChange(e, t).then(r).catch(i)
                                    }), 1e3)
                                }))
                            })) : this.Promise.resolve()
                        }, e.prototype.teardown = function() {
                            this.bus.teardown(), this.iframe.parentNode && this.iframe.parentNode.removeChild(this.iframe), this.alertBox.parentNode && this.alertBox.parentNode.removeChild(this.alertBox)
                        }, e.prototype.setAlert = function(e) {
                            this.alertBox.style.display = e ? "block" : "none", this.alertBox.textContent = e
                        }, e.prototype.createPaymentContextFromGraphqlLegacyQRCodeMutation = function(e) {
                            return this.apiRequest(d.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY, {
                                input: {
                                    environment: this.env,
                                    intent: e
                                }
                            }).then((function(e) {
                                return e.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext
                            }))
                        }, e.prototype.createPaymentContextFromGraphQL = function(e) {
                            var t = {
                                intent: e,
                                paymentMethodUsage: this.paymentMethodUsage,
                                customerClient: "DESKTOP"
                            };
                            return this.profileId && (t.merchantProfileId = this.profileId), this.displayName && (t.displayName = this.displayName), this.apiRequest(d.CREATE_PAYMENT_CONTEXT_QUERY, {
                                input: t
                            }).then((function(e) {
                                return e.createVenmoPaymentContext.venmoPaymentContext
                            }))
                        }, e.prototype.createVenmoDesktopPaymentContext = function() {
                            var e = this;
                            return (this.shouldUseLegacyQRCodeMutation ? this.createPaymentContextFromGraphqlLegacyQRCodeMutation("PAY_FROM_APP") : this.createPaymentContextFromGraphQL("PAY_FROM_APP")).then((function(t) {
                                e.venmoContextId = t.id;
                                var n = e.profileId || t.merchantId;
                                return {
                                    id: t.id,
                                    status: t.status,
                                    merchantId: n,
                                    createdAt: t.createdAt,
                                    expiresAt: t.expiresAt
                                }
                            }))
                        }, e.prototype.updateVenmoDesktopPaymentContext = function(e, t) {
                            if (void 0 === t && (t = {}), !this.venmoContextId) return this.Promise.resolve();
                            var n = {
                                    input: r({
                                        id: this.venmoContextId,
                                        status: e
                                    }, t)
                                },
                                i = this.shouldUseLegacyQRCodeMutation ? d.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY : d.UPDATE_PAYMENT_CONTEXT_QUERY;
                            return this.apiRequest(i, n).then((function() {}))
                        }, e.prototype.lookupVenmoDesktopPaymentContext = function() {
                            if (!this.venmoContextId) return this.Promise.resolve();
                            var e = this.shouldUseLegacyQRCodeMutation ? d.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY : d.VENMO_PAYMENT_CONTEXT_STATUS_QUERY;
                            return this.apiRequest(e, {
                                id: this.venmoContextId
                            }).then((function(e) {
                                return e.node
                            }))
                        }, e
                    })();
                n.default = l
            }, {
                "../shared/events": 217,
                "./queries": 211,
                "@braintree/iframer": 34,
                "@braintree/uuid": 38,
                framebus: 51
            }],
            213: [function(e, t, n) {
                var r = e("../lib/analytics"),
                    i = e("../lib/basic-component-verification"),
                    o = e("../lib/create-deferred-client"),
                    a = e("../lib/create-assets-url"),
                    s = e("./shared/errors"),
                    c = e("@braintree/wrap-promise"),
                    d = e("../lib/braintree-error"),
                    l = e("./venmo"),
                    u = e("./shared/supports-venmo");
                t.exports = {
                    create: c((function(e) {
                        var t = "Venmo";
                        return i.verify({
                            name: t,
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            var n, i;
                            return e.profileId && "string" != typeof e.profileId ? Promise.reject(new d(s.VENMO_INVALID_PROFILE_ID)) : e.deepLinkReturnUrl && "string" != typeof e.deepLinkReturnUrl ? Promise.reject(new d(s.VENMO_INVALID_DEEP_LINK_RETURN_URL)) : (n = o.create({
                                authorization: e.authorization,
                                client: e.client,
                                debug: e.debug,
                                assetsUrl: a.create(e.authorization),
                                name: t
                            }).then((function(t) {
                                var n = t.getConfiguration();
                                return e.client = t, n.gatewayConfiguration.payWithVenmo ? t : Promise.reject(new d(s.VENMO_NOT_ENABLED))
                            })), e.createPromise = n, i = new l(e), r.sendEvent(n, "venmo.initialized"), n.then((function() {
                                return i
                            })))
                        }))
                    })),
                    isBrowserSupported: function(e) {
                        return u.isBrowserSupported(e)
                    },
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/analytics": 116,
                "../lib/basic-component-verification": 119,
                "../lib/braintree-error": 121,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "./shared/errors": 216,
                "./shared/supports-venmo": 219,
                "./venmo": 221,
                "@braintree/wrap-promise": 42
            }],
            214: [function(e, t, n) {
                var r = e("@braintree/browser-detection/is-android"),
                    i = e("@braintree/browser-detection/is-chrome"),
                    o = e("@braintree/browser-detection/is-ios"),
                    a = e("@braintree/browser-detection/is-ios-safari"),
                    s = e("@braintree/browser-detection/is-ios-webview"),
                    c = e("@braintree/browser-detection/is-samsung");
                t.exports = {
                    isAndroid: r,
                    isAndroidWebview: function() {
                        return r() && window.navigator.userAgent.toLowerCase().indexOf("wv") > -1
                    },
                    isChrome: i,
                    isIos: o,
                    isIosChrome: function() {
                        return o() && i()
                    },
                    isSamsung: c,
                    isIosSafari: a,
                    isIosWebview: s,
                    isFacebookOwnedBrowserOnAndroid: function() {
                        var e = window.navigator.userAgent.toLowerCase();
                        return e.indexOf("huawei") > -1 && e.indexOf("fban") > -1 || !!r() && (e.indexOf("fb_iab") > -1 || e.indexOf("instagram") > -1)
                    },
                    doesNotSupportWindowOpenInIos: function() {
                        return !!o() && (s() || !a())
                    }
                }
            }, {
                "@braintree/browser-detection/is-android": 21,
                "@braintree/browser-detection/is-chrome": 23,
                "@braintree/browser-detection/is-ios": 29,
                "@braintree/browser-detection/is-ios-safari": 26,
                "@braintree/browser-detection/is-ios-webview": 27,
                "@braintree/browser-detection/is-samsung": 30
            }],
            215: [function(e, t, n) {
                t.exports = {
                    DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY: 500,
                    DEFAULT_PROCESS_RESULTS_DELAY: 1e3,
                    VENMO_APP_OR_MOBILE_AUTH_URL: "https://venmo.com/go/checkout",
                    VENMO_MOBILE_APP_AUTH_ONLY_URL: "https://venmo.com/braintree/checkout",
                    VENMO_WEB_LOGIN_URL: "https://account.venmo.com/go/web"
                }
            }, {}],
            216: [function(e, t, n) {
                var r = e("../../lib/braintree-error");
                t.exports = {
                    VENMO_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: "VENMO_NOT_ENABLED",
                        message: "Venmo is not enabled for this merchant."
                    },
                    VENMO_TOKENIZATION_REQUEST_ACTIVE: {
                        type: r.types.MERCHANT,
                        code: "VENMO_TOKENIZATION_REQUEST_ACTIVE",
                        message: "Another tokenization request is active."
                    },
                    VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE: {
                        type: r.types.MERCHANT,
                        code: "VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE",
                        message: "No tokenization in progress."
                    },
                    VENMO_APP_FAILED: {
                        type: r.types.UNKNOWN,
                        code: "VENMO_APP_FAILED",
                        message: "Venmo app encountered a problem."
                    },
                    VENMO_APP_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: "VENMO_APP_CANCELED",
                        message: "Venmo app authorization was canceled."
                    },
                    VENMO_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: "VENMO_CANCELED",
                        message: "User canceled Venmo authorization, or Venmo app is not available."
                    },
                    VENMO_CUSTOMER_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: "VENMO_CUSTOMER_CANCELED",
                        message: "User canceled Venmo authorization."
                    },
                    VENMO_NETWORK_ERROR: {
                        type: r.types.NETWORK,
                        code: "VENMO_NETWORK_ERROR",
                        message: "Something went wrong making the request"
                    },
                    VENMO_DESKTOP_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: "VENMO_DESKTOP_CANCELED",
                        message: "User canceled Venmo authorization by closing the Venmo Desktop modal."
                    },
                    VENMO_TOKENIZATION_CANCELED_BY_MERCHANT: {
                        type: r.types.MERCHANT,
                        code: "VENMO_TOKENIZATION_CANCELED_BY_MERCHANT",
                        message: "The Venmo tokenization was canceled by the merchant."
                    },
                    VENMO_DESKTOP_UNKNOWN_ERROR: {
                        type: r.types.UNKNOWN,
                        code: "VENMO_DESKTOP_UNKNOWN_ERROR",
                        message: "Something went wrong with the Venmo Desktop flow."
                    },
                    VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED: {
                        type: r.types.NETWORK,
                        code: "VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED",
                        message: "Something went wrong creating the Venmo Payment Context."
                    },
                    VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR: {
                        type: r.types.UNKNOWN,
                        code: "VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR",
                        message: "Something went wrong during mobile polling."
                    },
                    VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED: {
                        type: r.types.CUSTOMER,
                        code: "VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED",
                        message: "The Venmo authorization request is expired."
                    },
                    VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: "VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED",
                        message: "The Venmo authorization was canceled"
                    },
                    VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT: {
                        type: r.types.CUSTOMER,
                        code: "VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT",
                        message: "Customer took too long to authorize Venmo payment."
                    },
                    VENMO_MOBILE_POLLING_TOKENIZATION_FAILED: {
                        type: r.types.UNKNOWN,
                        code: "VENMO_MOBILE_POLLING_TOKENIZATION_FAILED",
                        message: "The Venmo authorization failed."
                    },
                    VENMO_INVALID_PROFILE_ID: {
                        type: r.types.MERCHANT,
                        code: "VENMO_INVALID_PROFILE_ID",
                        message: "Venmo profile ID is invalid."
                    },
                    VENMO_INVALID_DEEP_LINK_RETURN_URL: {
                        type: r.types.MERCHANT,
                        code: "VENMO_INVALID_DEEP_LINK_RETURN_URL",
                        message: "Venmo deep link return URL is invalid."
                    },
                    VENMO_TOKENIZATION_FAILED: {
                        type: r.types.UNKNOWN,
                        code: "VENMO_TOKENIZATION_FAILED",
                        message: "Venmo encountered a problem"
                    }
                }
            }, {
                "../../lib/braintree-error": 121
            }],
            217: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.VENMO_DESKTOP_UNKNOWN_ERROR = n.VENMO_DESKTOP_REQUEST_NEW_QR_CODE = n.VENMO_DESKTOP_CLOSED_FROM_PARENT = n.VENMO_DESKTOP_IFRAME_READY = n.VENMO_DESKTOP_DISPLAY_QR_CODE = n.VENMO_DESKTOP_DISPLAY_ERROR = n.VENMO_DESKTOP_CUSTOMER_CANCELED = n.VENMO_DESKTOP_AUTHORIZING = n.VENMO_DESKTOP_AUTHORIZE = n.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT = void 0, n.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT = "VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT", n.VENMO_DESKTOP_AUTHORIZE = "VENMO_DESKTOP_AUTHORIZE", n.VENMO_DESKTOP_AUTHORIZING = "VENMO_DESKTOP_AUTHORIZING", n.VENMO_DESKTOP_CUSTOMER_CANCELED = "VENMO_DESKTOP_CUSTOMER_CANCELED", n.VENMO_DESKTOP_DISPLAY_ERROR = "VENMO_DESKTOP_DISPLAY_ERROR", n.VENMO_DESKTOP_DISPLAY_QR_CODE = "VENMO_DESKTOP_DISPLAY_QR_CODE", n.VENMO_DESKTOP_IFRAME_READY = "VENMO_DESKTOP_IFRAME_READY", n.VENMO_DESKTOP_CLOSED_FROM_PARENT = "VENMO_DESKTOP_CLOSED_FROM_PARENT", n.VENMO_DESKTOP_REQUEST_NEW_QR_CODE = "VENMO_DESKTOP_REQUEST_NEW_QR_CODE", n.VENMO_DESKTOP_UNKNOWN_ERROR = "VENMO_DESKTOP_UNKNOWN_ERROR"
            }, {}],
            218: [function(e, t, n) {
                var r = e("./constants");
                t.exports = function(e) {
                    return e.useAllowDesktopWebLogin ? r.VENMO_WEB_LOGIN_URL : e.mobileWebFallBack ? r.VENMO_APP_OR_MOBILE_AUTH_URL : r.VENMO_MOBILE_APP_AUTH_ONLY_URL
                }
            }, {
                "./constants": 215
            }],
            219: [function(e, t, n) {
                var r = e("./browser-detection");
                t.exports = {
                    isBrowserSupported: function(e) {
                        var t, n, i, o = r.isAndroid(),
                            a = o || r.isIos(),
                            s = o && r.isChrome(),
                            c = r.isIosSafari() || s,
                            d = r.isIosChrome() || r.isFacebookOwnedBrowserOnAndroid() || r.isSamsung();
                        return i = !0 === (e = e || {}).allowDesktop, t = !e.hasOwnProperty("allowNewBrowserTab") || e.allowNewBrowserTab, n = !e.hasOwnProperty("allowWebviews") || e.allowWebviews, !d && (!(!n && (r.isAndroidWebview() || r.isIosWebview())) && (a ? t ? a : c : i))
                    }
                }
            }, {
                "./browser-detection": 214
            }],
            220: [function(e, t, n) {
                var r = e("../../lib/frame-service/external"),
                    i = e("../../lib/use-min"),
                    o = e("@braintree/extended-promise"),
                    a = "venmo-desktop-web-backdrop",
                    s = "venmo-desktop-web-backdrop.hidden",
                    c = "venmo-backdrop-container",
                    d = "venmo-popup-cancel-button",
                    l = "venmo-popup-continue-button",
                    u = "venmo-message",
                    p = "venmo-instructions",
                    _ = "venmo-full-logo";

                function E(e) {
                    var t = e.frameServiceInstance,
                        n = e.venmoUrl,
                        r = e.checkForStatusChange,
                        i = e.cancelTokenization,
                        a = new o;
                    return document.getElementById(l).addEventListener("click", (function() {
                        t.focus()
                    })), document.getElementById(d).addEventListener("click", (function() {
                        t.close(), i(), h()
                    })), t.open({}, (function(e) {
                        e ? a.reject(e) : r(1).then((function(e) {
                            a.resolve(e)
                        })).catch((function(e) {
                            a.reject(e)
                        })), t.close(), h()
                    })), t.redirect(n), a
                }

                function h() {
                    document.getElementById("venmo-desktop-web-backdrop").classList.add("hidden")
                }
                o.suppressUnhandledPromiseMessage = !0, t.exports = {
                    runWebLogin: function(e) {
                        var t, n, r, i, o, h, m, f, y;
                        return (y = document.getElementById(a)) ? y.classList.remove("hidden") : (t = document.createElement("style"), n = document.createElement("div"), r = document.createElement("div"), i = document.createElement("div"), o = document.createElement("div"), h = document.createElement("div"), m = document.createElement("button"), f = document.createElement("button"), t.id = "venmo-desktop-web__injected-styles", t.innerHTML = ["#" + s + " {", "display: none;", "}", "#" + a + " {", "cursor: pointer;", "position: absolute;", "top: 0;", "left: 0;", "bottom: 0;", "width: 100%;", "background: rgba(0, 0, 0, 0.4);", "}"].concat(["#" + c + " {", "display: flex;", "align-content: center;", "justify-content: center;", "align-items: center;", "width: 100%;", "height: 100%;", "flex-direction: column;", "}"], ["#" + d + " {", "height: 24px;", "width: 380px;", "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 700;", "font-size: 18px;", "line-height: 24px;", "text-align: center;", "background-color: transparent;", "border: none;", "color: #FFFFFF;", "margin-top: 28px;", "}"], ["#" + l + " {", "width: 400px;", "height: 50px;", "background: #0074DE;", "border-radius: 24px;", "border: none;", "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 700;", "font-size: 18px;", "color: #FFFFFF;", "margin-top: 44px;", "}"], ["#" + u + " {", "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 500;", "font-size: 24px;", "line-height: 32px;", "text-align: center;", "color: #FFFFFF;", "margin-top: 32px;", "}"], ["#" + p + " {", "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 400;", "font-size: 16px;", "line-height: 20px;", "text-align: center;", "color: #FFFFFF;", "margin-top: 16px;", "width: 400px;", "}"]).join("\n"), n.id = a, r.id = c, i.id = _, i.innerHTML = "<svg width=\"198\" height=\"58\" viewBox=\"0 0 198 58\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M43.0702 13.6572C44.1935 15.4585 44.6999 17.3139 44.6999 19.6576C44.6999 27.1328 38.1277 36.8436 32.7935 43.6625H20.6099L15.7236 15.2939L26.3917 14.3105L28.9751 34.4966C31.389 30.6783 34.3678 24.6779 34.3678 20.587C34.3678 18.3477 33.9727 16.8225 33.3553 15.5666L43.0702 13.6572Z\" fill=\"white\"/>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56.8965 26.1491C58.8596 26.1491 63.8018 25.2772 63.8018 22.5499C63.8018 21.2402 62.8481 20.587 61.7242 20.587C59.7579 20.587 57.1776 22.8763 56.8965 26.1491ZM56.6715 31.5506C56.6715 34.8807 58.5787 36.1873 61.107 36.1873C63.8603 36.1873 66.4966 35.534 69.923 33.8433L68.6324 42.3523C66.2183 43.4976 62.4559 44.2617 58.8039 44.2617C49.5403 44.2617 46.2249 38.8071 46.2249 31.9879C46.2249 23.1496 51.6179 13.765 62.7365 13.765C68.858 13.765 72.2809 17.0949 72.2809 21.7317C72.2815 29.2066 62.4005 31.4965 56.6715 31.5506Z\" fill=\"white\"/>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M103.067 20.3142C103.067 21.4052 102.897 22.9875 102.727 24.0216L99.5262 43.6622H89.1385L92.0585 25.658C92.1139 25.1696 92.284 24.1865 92.284 23.6411C92.284 22.3314 91.4414 22.0047 90.4282 22.0047C89.0826 22.0047 87.7337 22.6042 86.8354 23.0418L83.5234 43.6625H73.0772L77.8495 14.257H86.8908L87.0052 16.6041C89.1382 15.2404 91.9469 13.7656 95.932 13.7656C101.212 13.765 103.067 16.3845 103.067 20.3142Z\" fill=\"white\"/>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M133.906 16.9841C136.881 14.9131 139.69 13.765 143.563 13.765C148.897 13.765 150.753 16.3845 150.753 20.3142C150.753 21.4052 150.583 22.9875 150.413 24.0216L147.216 43.6622H136.825L139.801 25.2774C139.855 24.786 139.971 24.1865 139.971 23.8063C139.971 22.3317 139.128 22.0047 138.115 22.0047C136.824 22.0047 135.535 22.5501 134.577 23.0418L131.266 43.6625H120.878L123.854 25.2777C123.908 24.7863 124.02 24.1868 124.02 23.8065C124.02 22.332 123.177 22.0049 122.167 22.0049C120.819 22.0049 119.473 22.6045 118.574 23.0421L115.26 43.6628H104.817L109.589 14.2573H118.52L118.8 16.7122C120.878 15.241 123.684 13.7662 127.446 13.7662C130.704 13.765 132.837 15.129 133.906 16.9841Z\" fill=\"white\"/>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M171.426 25.5502C171.426 23.1496 170.808 21.513 168.956 21.513C164.857 21.513 164.015 28.55 164.015 32.1498C164.015 34.8807 164.802 36.5709 166.653 36.5709C170.528 36.5709 171.426 29.1497 171.426 25.5502ZM153.458 31.7152C153.458 22.442 158.511 13.765 170.136 13.765C178.896 13.765 182.098 18.7854 182.098 25.7148C182.098 34.8805 177.099 44.3723 165.194 44.3723C156.378 44.3723 153.458 38.7525 153.458 31.7152Z\" fill=\"white\"/>\n</svg>", o.id = u, o.innerText = "What would you like to do?", h.id = p, h.innerText = "Tap cancel payment to cancel and return to the business. Continue payment will relaunch the payment window.", m.id = l, m.innerText = "Continue payment", f.id = d, f.innerText = "Cancel payment", document.head.appendChild(t), r.appendChild(i), r.appendChild(o), r.appendChild(h), r.appendChild(m), r.appendChild(f), n.appendChild(r), document.body.appendChild(n)), E(e)
                    },
                    openPopup: E,
                    setupDesktopWebLogin: function(e) {
                        var t = new o,
                            n = e.assetsUrl,
                            a = e.debug || !1,
                            s = {
                                top: Math.round((window.outerHeight - 570) / 2) + window.screenTop,
                                left: Math.round((window.outerWidth - 400) / 2) + window.screenLeft
                            },
                            c = n + "/web/3.94.0/html";
                        return r.create({
                            name: "venmoDesktopWebLogin",
                            dispatchFrameUrl: c + "/dispatch-frame" + i(a) + ".html",
                            openFrameUrl: c + "/venmo-landing-frame" + i(a) + ".html",
                            top: s.top,
                            left: s.left,
                            height: 570,
                            width: 400
                        }, (function(e) {
                            t.resolve(e)
                        })), t
                    },
                    POPUP_WIDTH: 400,
                    POPUP_HEIGHT: 570
                }
            }, {
                "../../lib/frame-service/external": 136,
                "../../lib/use-min": 157,
                "@braintree/extended-promise": 33
            }],
            221: [function(e, t, n) {
                var r = e("../lib/analytics"),
                    i = e("./shared/supports-venmo"),
                    o = e("./shared/browser-detection"),
                    a = e("./shared/constants"),
                    s = e("./shared/errors"),
                    c = e("../lib/querystring"),
                    d = e("../lib/is-verified-domain"),
                    l = e("../lib/methods"),
                    u = e("../lib/convert-methods-to-error"),
                    p = e("@braintree/wrap-promise"),
                    _ = e("../lib/braintree-error"),
                    E = e("../lib/in-iframe"),
                    h = e("@braintree/extended-promise"),
                    m = e("./shared/get-venmo-url"),
                    f = e("./shared/web-login-backdrop"),
                    y = e("../lib/snake-case-to-camel-case"),
                    A = e("./external/"),
                    T = e("./external/queries"),
                    I = "3.94.0";

                function N(e) {
                    var t = this;
                    this._allowDesktopWebLogin = e.allowDesktopWebLogin || !1, this._mobileWebFallBack = e.mobileWebFallBack || !1, this._createPromise = e.createPromise, this._allowNewBrowserTab = !1 !== e.allowNewBrowserTab, this._allowWebviews = !1 !== e.allowWebviews, this._allowDesktop = !0 === e.allowDesktop, this._useRedirectForIOS = !0 === e.useRedirectForIOS, this._profileId = e.profileId, this._displayName = e.displayName, this._deepLinkReturnUrl = e.deepLinkReturnUrl, this._ignoreHistoryChanges = e.ignoreHistoryChanges, this._paymentMethodUsage = (e.paymentMethodUsage || "").toUpperCase(), this._shouldUseLegacyFlow = !this._paymentMethodUsage, this._requireManualReturn = !0 === e.requireManualReturn, this._useDesktopQRFlow = this._allowDesktop && this._isDesktop() && !this._allowDesktopWebLogin, this._useAllowDesktopWebLogin = this._allowDesktopWebLogin && this._isDesktop(), this._cannotHaveReturnUrls = E() || this._requireManualReturn, this._allowAndroidRecreation = !1 !== e.allowAndroidRecreation, this._maxRetryCount = 3, this._shouldCreateVenmoPaymentContext = this._cannotHaveReturnUrls || !this._shouldUseLegacyFlow, r.sendEvent(this._createPromise, "venmo.desktop-flow.configured." + String(Boolean(this._allowDesktop))), this.hasTokenizationResult() ? r.sendEvent(this._createPromise, "venmo.appswitch.return-in-new-tab") : this._useDesktopQRFlow ? this._createPromise = this._createPromise.then((function(e) {
                        var n = e.getConfiguration().gatewayConfiguration;
                        return A({
                            url: n.assetsUrl + "/web/" + I + "/html/venmo-desktop-frame.html",
                            environment: "production" === n.environment ? "PRODUCTION" : "SANDBOX",
                            profileId: t._profileId || n.payWithVenmo.merchantId,
                            paymentMethodUsage: t._paymentMethodUsage,
                            displayName: t._displayName,
                            Promise: Promise,
                            apiRequest: function(t, n) {
                                return e.request({
                                    api: "graphQLApi",
                                    data: {
                                        query: t,
                                        variables: n
                                    }
                                }).then((function(e) {
                                    return e.data
                                }))
                            },
                            sendEvent: function(e) {
                                r.sendEvent(t._createPromise, e)
                            },
                            verifyDomain: d
                        }).then((function(n) {
                            return t._venmoDesktopInstance = n, r.sendEvent(t._createPromise, "venmo.desktop-flow.presented"), e
                        })).catch((function() {
                            return r.sendEvent(t._createPromise, "venmo.desktop-flow.setup-failed"), t._useDesktopQRFlow = !1, e
                        }))
                    })) : this._shouldCreateVenmoPaymentContext && (this._mobilePollingInterval = 250, this._mobilePollingExpiresThreshold = 3e5, this._createPromise = this._createPromise.then((function(e) {
                        var n, i, o = t._cannotHaveReturnUrls ? "manual-return" : "mobile-payment-context",
                            a = e.getConfiguration();
                        return i = f.setupDesktopWebLogin({
                            assetsUrl: a.gatewayConfiguration.assetsUrl,
                            debug: a.isDebug
                        }).then((function(e) {
                            t._frameServiceInstance = e
                        })).catch((function(e) {
                            return e
                        })), t._mobilePollingContextEnvironment = a.gatewayConfiguration.environment.toUpperCase(), n = t._createVenmoPaymentContext(e).then((function() {
                            return r.sendEvent(t._createPromise, "venmo." + o + ".presented"), e
                        })).catch((function(e) {
                            return r.sendEvent(t._createPromise, "venmo." + o + ".setup-failed"), Promise.reject(new _({
                                type: s.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.type,
                                code: s.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.code,
                                message: s.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.message,
                                details: {
                                    originalError: e
                                }
                            }))
                        })), h.all([i, n]).then((function(e) {
                            var t = e[1];
                            return Promise.resolve(t)
                        })).catch((function(e) {
                            return Promise.reject(e)
                        }))
                    })))
                }

                function O(e) {
                    var t = (e || window.location.hash.substring(1)).split("&").reduce((function(e, t) {
                        var n = t.split("="),
                            r = decodeURIComponent(n[0]).replace(/\W/g, ""),
                            i = y(r),
                            o = decodeURIComponent(n[1]);
                        return e[i] = o, e
                    }), {});
                    return t.resourceId && (t.id = t.resourceId), t
                }

                function g(e) {
                    return "@" + (e = e || "").replace("@", "")
                }

                function P(e) {
                    var t = {
                        nonce: e.paymentMethodNonce,
                        type: "VenmoAccount",
                        details: {
                            username: g(e.username),
                            paymentContextId: e.id
                        }
                    };
                    return e.payerInfo && (t.details.payerInfo = e.payerInfo, t.details.payerInfo.userName = g(e.payerInfo.userName)), t
                }

                function b() {
                    var e;
                    return void 0 !== window.document.hidden ? e = "visibilitychange" : void 0 !== window.document.msHidden ? e = "msvisibilitychange" : void 0 !== window.document.webkitHidden && (e = "webkitvisibilitychange"), e
                }
                h.suppressUnhandledPromiseMessage = !0, N.prototype._createVenmoPaymentContext = function(e, t) {
                    var n = this;
                    return this._shouldCreateVenmoPaymentContext ? (this._shouldUseLegacyFlow ? e.request({
                        api: "graphQLApi",
                        data: {
                            query: T.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY,
                            variables: {
                                input: {
                                    environment: this._mobilePollingContextEnvironment,
                                    intent: "PAY_FROM_APP"
                                }
                            }
                        }
                    }).then((function(e) {
                        return e.data.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext
                    })) : e.request({
                        api: "graphQLApi",
                        data: {
                            query: T.CREATE_PAYMENT_CONTEXT_QUERY,
                            variables: {
                                input: {
                                    paymentMethodUsage: this._paymentMethodUsage,
                                    intent: "CONTINUE",
                                    customerClient: "MOBILE_WEB",
                                    displayName: this._displayName
                                }
                            }
                        }
                    }).then((function(e) {
                        return e.data.createVenmoPaymentContext.venmoPaymentContext
                    }))).then((function(r) {
                        var i = .6666 * (new Date(r.expiresAt) - new Date(r.createdAt));
                        clearTimeout(n._refreshPaymentContextTimeout), n._refreshPaymentContextTimeout = setTimeout((function() {
                            n._tokenizationInProgress || n._createVenmoPaymentContext(e, !0)
                        }), i), t && n._tokenizationInProgress || (n._venmoPaymentContextStatus = r.status, n._venmoPaymentContextId = r.id)
                    })) : Promise.resolve()
                }, N.prototype.appSwitch = function(e) {
                    this._deepLinkReturnUrl ? window.navigator.platform && /iPhone|iPad|iPod/.test(window.navigator.platform) ? (r.sendEvent(this._createPromise, "venmo.appswitch.start.ios-webview"), window.location.href = e) : window.popupBridge && "function" == typeof window.popupBridge.open ? (r.sendEvent(this._createPromise, "venmo.appswitch.start.popup-bridge"), window.popupBridge.open(e)) : (r.sendEvent(this._createPromise, "venmo.appswitch.start.webview"), window.open(e)) : (r.sendEvent(this._createPromise, "venmo.appswitch.start.browser"), o.doesNotSupportWindowOpenInIos() || this._shouldUseRedirectStrategy() ? window.location.href = e : window.open(e))
                }, N.prototype.getUrl = function() {
                    return this._createPromise.then(function(e) {
                        var t = e.getConfiguration(),
                            n = {},
                            r = this._deepLinkReturnUrl || window.location.href.replace(window.location.hash, ""),
                            i = t.gatewayConfiguration.payWithVenmo,
                            o = t.analyticsMetadata,
                            a = i.accessToken,
                            s = {
                                _meta: {
                                    version: o.sdkVersion,
                                    integration: o.integration,
                                    platform: o.platform,
                                    sessionId: o.sessionId
                                }
                            };
                        return this._isDebug = t.isDebug, this._assetsUrl = t.gatewayConfiguration.assetsUrl, r = r.replace(/#*$/, ""), this._venmoPaymentContextId && (this._shouldUseLegacyFlow ? a += "|pcid:" + this._venmoPaymentContextId : n.resource_id = this._venmoPaymentContextId), this._shouldIncludeReturnUrls() || this._useAllowDesktopWebLogin ? (this._useAllowDesktopWebLogin && (r = this._assetsUrl + "/web/" + I + "/html/redirect-frame.html"), n["x-success"] = r + "#venmoSuccess=1", n["x-cancel"] = r + "#venmoCancel=1", n["x-error"] = r + "#venmoError=1") : (n["x-success"] = "NOOP", n["x-cancel"] = "NOOP", n["x-error"] = "NOOP"), this._allowAndroidRecreation ? n.allowAndroidRecreation = 1 : n.allowAndroidRecreation = 0, n.ua = window.navigator.userAgent, n.braintree_merchant_id = this._profileId || i.merchantId, n.braintree_access_token = a, n.braintree_environment = i.environment, n.braintree_sdk_data = btoa(JSON.stringify(s)), m({
                            useAllowDesktopWebLogin: this._useAllowDesktopWebLogin,
                            mobileWebFallBack: this._mobileWebFallBack
                        }) + "?" + c.stringify(n)
                    }.bind(this))
                }, N.prototype.isBrowserSupported = function() {
                    return i.isBrowserSupported({
                        allowNewBrowserTab: this._allowNewBrowserTab,
                        allowWebviews: this._allowWebviews,
                        allowDesktop: this._allowDesktop
                    })
                }, N.prototype.hasTokenizationResult = function() {
                    return this._hasTokenizationResult()
                }, N.prototype._hasTokenizationResult = function(e) {
                    var t = O(e);
                    return void 0 !== (t.venmoSuccess || t.venmoError || t.venmoCancel)
                }, N.prototype._shouldIncludeReturnUrls = function() {
                    return !!this._deepLinkReturnUrl || !this._cannotHaveReturnUrls
                }, N.prototype._isDesktop = function() {
                    return !(o.isIos() || o.isAndroid())
                }, N.prototype.tokenize = function(e) {
                    var t = this;
                    return e = e || {}, !0 === this._tokenizationInProgress ? Promise.reject(new _(s.VENMO_TOKENIZATION_REQUEST_ACTIVE)) : (this._tokenizationInProgress = !0, (this._useDesktopQRFlow ? this._tokenizeForDesktopQRFlow(e) : this._useAllowDesktopWebLogin ? this._tokenizeWebLoginWithRedirect() : this._cannotHaveReturnUrls ? this._tokenizeForMobileWithManualReturn() : this._tokenizeForMobileWithHashChangeListeners(e)).then((function(e) {
                        return t._createPromise.then((function(e) {
                            return t._createVenmoPaymentContext(e)
                        })).then((function() {
                            return t._tokenizationInProgress = !1, P(e)
                        }))
                    })).catch((function(e) {
                        return t._createPromise.then((function(e) {
                            return t._createVenmoPaymentContext(e)
                        })).then((function() {
                            return t._tokenizationInProgress = !1, Promise.reject(e)
                        }))
                    })))
                }, N.prototype.cancelTokenization = function() {
                    return this._tokenizationInProgress ? (this._removeVisibilityEventListener(), this._tokenizePromise && this._tokenizePromise.reject(new _(s.VENMO_TOKENIZATION_CANCELED_BY_MERCHANT)), Promise.all([this._cancelMobilePaymentContext(), this._cancelVenmoDesktopContext()])) : Promise.reject(new _(s.VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE))
                }, N.prototype._tokenizeWebLoginWithRedirect = function() {
                    var e = this;
                    return r.sendEvent(e._createPromise, "venmo.tokenize.web-login.start"), this._tokenizePromise = new h, this.getUrl().then((function(t) {
                        return f.runWebLogin({
                            checkForStatusChange: e._checkPaymentContextStatusAndProcessResult.bind(e),
                            cancelTokenization: e.cancelTokenization.bind(e),
                            frameServiceInstance: e._frameServiceInstance,
                            venmoUrl: t,
                            debug: e._isDebug
                        }).then((function(t) {
                            r.sendEvent(e._createPromise, "venmo.tokenize.web-login.success"), e._tokenizePromise.resolve({
                                paymentMethodNonce: t.paymentMethodId,
                                username: t.userName,
                                payerInfo: t.payerInfo,
                                id: e._venmoPaymentContextId
                            })
                        })).catch((function(t) {
                            r.sendEvent(e._createPromise, "venmo.tokenize.web-login.failure"), e._tokenizePromise.reject(t)
                        })), e._tokenizePromise
                    }))
                }, N.prototype._queryPaymentContextStatus = function(e) {
                    var t = this;
                    return this._createPromise.then((function(n) {
                        var r = t._shouldUseLegacyFlow ? T.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY : T.VENMO_PAYMENT_CONTEXT_STATUS_QUERY;
                        return n.request({
                            api: "graphQLApi",
                            data: {
                                query: r,
                                variables: {
                                    id: e
                                }
                            }
                        })
                    })).then((function(e) {
                        return e.data.node
                    }))
                }, N.prototype._checkPaymentContextStatusAndProcessResult = function(e) {
                    var t = this;
                    return t._queryPaymentContextStatus(t._venmoPaymentContextId).catch((function(e) {
                        return Promise.reject(new _({
                            type: s.VENMO_NETWORK_ERROR.type,
                            code: s.VENMO_NETWORK_ERROR.code,
                            message: s.VENMO_NETWORK_ERROR.message,
                            details: e
                        }))
                    })).then((function(n) {
                        var i = n.status;
                        if (i !== t._venmoPaymentContextStatus) switch (t._venmoPaymentContextStatus = i, r.sendEvent(t._createPromise, "venmo.tokenize.web-login.status-change"), i) {
                            case "APPROVED":
                                return Promise.resolve(n);
                            case "CANCELED":
                                return Promise.reject(new _(s.VENMO_CUSTOMER_CANCELED));
                            case "FAILED":
                                return Promise.reject(new _(s.VENMO_TOKENIZATION_FAILED))
                        }
                        return new Promise((function(n, r) {
                            return e < t._maxRetryCount ? (e++, t._checkPaymentContextStatusAndProcessResult(e).then(n).catch(r)) : r(new _(s.VENMO_TOKENIZATION_FAILED))
                        }))
                    }))
                }, N.prototype._pollForStatusChange = function() {
                    var e = this;
                    return Date.now() > e._mobilePollingContextExpiresIn ? Promise.reject(new _(s.VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT)) : this._queryPaymentContextStatus(this._venmoPaymentContextId).catch((function(e) {
                        return Promise.reject(new _({
                            type: s.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.type,
                            code: s.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.code,
                            message: s.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.message,
                            details: {
                                originalError: e
                            }
                        }))
                    })).then((function(t) {
                        var n = t.status;
                        if (n !== e._venmoPaymentContextStatus) switch (e._venmoPaymentContextStatus = n, r.sendEvent(e._createPromise, "venmo.tokenize.manual-return.status-change." + n.toLowerCase()), n) {
                            case "EXPIRED":
                            case "FAILED":
                            case "CANCELED":
                                return Promise.reject(new _(s["VENMO_MOBILE_POLLING_TOKENIZATION_" + n]));
                            case "APPROVED":
                                return Promise.resolve(t)
                        }
                        return new Promise((function(t, n) {
                            setTimeout((function() {
                                e._pollForStatusChange().then(t).catch(n)
                            }), e._mobilePollingInterval)
                        }))
                    }))
                }, N.prototype._tokenizeForMobileWithManualReturn = function() {
                    var e = this;
                    return r.sendEvent(this._createPromise, "venmo.tokenize.manual-return.start"), this._mobilePollingContextExpiresIn = Date.now() + this._mobilePollingExpiresThreshold, this._tokenizePromise = new h, this._pollForStatusChange().then((function(t) {
                        r.sendEvent(e._createPromise, "venmo.tokenize.manual-return.success"), e._tokenizePromise.resolve({
                            paymentMethodNonce: t.paymentMethodId,
                            username: t.userName,
                            payerInfo: t.payerInfo,
                            id: e._venmoPaymentContextId
                        })
                    })).catch((function(t) {
                        r.sendEvent(e._createPromise, "venmo.tokenize.manual-return.failure"), e._tokenizePromise.reject(t)
                    })), this.getUrl().then((function(t) {
                        return e.appSwitch(t), e._tokenizePromise
                    }))
                }, N.prototype._shouldUseRedirectStrategy = function() {
                    return !!o.isIos() && (!0 === this._mobileWebFallBack || this._useRedirectForIOS)
                }, N.prototype._tokenizeForMobileWithHashChangeListeners = function(e) {
                    var t, n, i = this;
                    if (this.hasTokenizationResult()) return this.processHashChangeFlowResults();

                    function o(e) {
                        var t;
                        i.processHashChangeFlowResults(e).catch((function(e) {
                            t = e
                        })).then((function(e) {
                            i._ignoreHistoryChanges || window.location.hash === i._previousHash || (window.location.hash = i._previousHash), i._removeVisibilityEventListener(), t ? i._tokenizePromise.reject(t) : i._tokenizePromise.resolve(e), delete i._tokenizePromise
                        }))
                    }
                    return r.sendEvent(this._createPromise, "venmo.tokenize.mobile.start"), this._tokenizePromise = new h, this._previousHash = window.location.hash, this._onHashChangeListener = function(e) {
                        var r = e.newURL.split("#")[1];
                        i._hasTokenizationResult(r) && (t = !0, clearTimeout(n), o(r))
                    }, window.addEventListener("hashchange", this._onHashChangeListener, !1), this._visibilityChangeListener = function() {
                        var r = e.processResultsDelay || a.DEFAULT_PROCESS_RESULTS_DELAY;
                        window.document.hidden || t || (n = setTimeout(o, r))
                    }, this.getUrl().then((function(e) {
                        return i.appSwitch(e), setTimeout((function() {
                            window.document.addEventListener(b(), i._visibilityChangeListener)
                        }), a.DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY), i._tokenizePromise
                    }))
                }, N.prototype._tokenizeForDesktopQRFlow = function() {
                    var e = this;
                    return r.sendEvent(this._createPromise, "venmo.tokenize.desktop.start"), this._tokenizePromise = new h, this._createPromise.then((function() {
                        return e._venmoDesktopInstance.launchDesktopFlow()
                    })).then((function(t) {
                        e._venmoDesktopInstance.hideDesktopFlow(), r.sendEvent(e._createPromise, "venmo.tokenize.desktop.success"), e._tokenizePromise.resolve(t)
                    })).catch((function(t) {
                        r.sendEvent(e._createPromise, "venmo.tokenize.desktop.failure"), e._venmoDesktopInstance && e._venmoDesktopInstance.hideDesktopFlow(), t && "CUSTOMER_CANCELED" === t.reason ? e._tokenizePromise.reject(new _(s.VENMO_DESKTOP_CANCELED)) : e._tokenizePromise.reject(new _({
                            type: s.VENMO_DESKTOP_UNKNOWN_ERROR.type,
                            code: s.VENMO_DESKTOP_UNKNOWN_ERROR.code,
                            message: s.VENMO_DESKTOP_UNKNOWN_ERROR.message,
                            details: {
                                originalError: t
                            }
                        }))
                    })), this._tokenizePromise
                }, N.prototype._cancelMobilePaymentContext = function() {
                    var e = this;
                    return this._createPromise.then((function(t) {
                        var n;
                        return e._venmoPaymentContextId ? (n = e._shouldUseLegacyFlow ? T.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY : T.UPDATE_PAYMENT_CONTEXT_QUERY, t.request({
                            api: "graphQLApi",
                            data: {
                                query: n,
                                variables: {
                                    input: {
                                        id: e._venmoPaymentContextId,
                                        status: "CANCELED"
                                    }
                                }
                            }
                        })) : Promise.resolve()
                    }))
                }, N.prototype._cancelVenmoDesktopContext = function() {
                    var e = this;
                    return this._createPromise.then((function() {
                        return e._venmoDesktopInstance && e._venmoDesktopInstance.updateVenmoDesktopPaymentContext("CANCELED"), Promise.resolve()
                    }))
                }, N.prototype.teardown = function() {
                    var e = this;
                    return this._removeVisibilityEventListener(), this._createPromise.then(function() {
                        e._venmoDesktopInstance && e._venmoDesktopInstance.teardown(), clearTimeout(e._refreshPaymentContextTimeout), e._cancelMobilePaymentContext(), u(this, l(N.prototype))
                    }.bind(this))
                }, N.prototype._removeVisibilityEventListener = function() {
                    window.removeEventListener("hashchange", this._onHashChangeListener), window.document.removeEventListener(b(), this._visibilityChangeListener), delete this._visibilityChangeListener, delete this._onHashChangeListener
                }, N.prototype.processHashChangeFlowResults = function(e) {
                    var t = this,
                        n = O(e);
                    return new Promise((function(e, i) {
                        t._shouldUseLegacyFlow ? n.venmoSuccess ? (r.sendEvent(t._createPromise, "venmo.appswitch.handle.success"), e(n)) : n.venmoError ? (r.sendEvent(t._createPromise, "venmo.appswitch.handle.error"), i(new _({
                            type: s.VENMO_APP_FAILED.type,
                            code: s.VENMO_APP_FAILED.code,
                            message: s.VENMO_APP_FAILED.message,
                            details: {
                                originalError: {
                                    message: decodeURIComponent(n.errorMessage),
                                    code: n.errorCode
                                }
                            }
                        }))) : n.venmoCancel ? (r.sendEvent(t._createPromise, "venmo.appswitch.handle.cancel"), i(new _(s.VENMO_APP_CANCELED))) : (r.sendEvent(t._createPromise, "venmo.appswitch.cancel-or-unavailable"), i(new _(s.VENMO_CANCELED))) : t._pollForStatusChange().then((function(n) {
                            return r.sendEvent(t._createPromise, "venmo.appswitch.handle.payment-context-status-query.success"), e({
                                paymentMethodNonce: n.paymentMethodId,
                                username: n.userName,
                                payerInfo: n.payerInfo,
                                id: t._venmoPaymentContextId
                            })
                        })).catch((function(o) {
                            o.type === s.VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED.type && i(o), r.sendEvent(t._createPromise, "venmo.process-results.payment-context-status-query-failed"), e(n)
                        })), t._clearFragmentParameters()
                    }))
                }, N.prototype._clearFragmentParameters = function() {
                    this._ignoreHistoryChanges || "function" == typeof window.history.replaceState && window.location.hash && history.pushState({}, "", window.location.href.slice(0, window.location.href.indexOf("#")))
                }, t.exports = p.wrapPrototype(N)
            }, {
                "../lib/analytics": 116,
                "../lib/braintree-error": 121,
                "../lib/convert-methods-to-error": 124,
                "../lib/in-iframe": 147,
                "../lib/is-verified-domain": 150,
                "../lib/methods": 152,
                "../lib/querystring": 154,
                "../lib/snake-case-to-camel-case": 156,
                "./external/": 210,
                "./external/queries": 211,
                "./shared/browser-detection": 214,
                "./shared/constants": 215,
                "./shared/errors": 216,
                "./shared/get-venmo-url": 218,
                "./shared/supports-venmo": 219,
                "./shared/web-login-backdrop": 220,
                "@braintree/extended-promise": 33,
                "@braintree/wrap-promise": 42
            }],
            222: [function(e, t, n) {
                var r = e("../lib/braintree-error");
                t.exports = {
                    VISA_CHECKOUT_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: "VISA_CHECKOUT_NOT_ENABLED",
                        message: "Visa Checkout is not enabled for this merchant."
                    },
                    VISA_CHECKOUT_INIT_OPTIONS_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: "VISA_CHECKOUT_INIT_OPTIONS_REQUIRED",
                        message: "initOptions requires an object."
                    },
                    VISA_CHECKOUT_PAYMENT_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: "VISA_CHECKOUT_PAYMENT_REQUIRED",
                        message: "tokenize requires callid, encKey, and encPaymentData."
                    },
                    VISA_CHECKOUT_TOKENIZATION: {
                        type: r.types.NETWORK,
                        code: "VISA_CHECKOUT_TOKENIZATION",
                        message: "A network error occurred when processing the Visa Checkout payment."
                    }
                }
            }, {
                "../lib/braintree-error": 121
            }],
            223: [function(e, t, n) {
                var r = e("../lib/basic-component-verification"),
                    i = e("../lib/braintree-error"),
                    o = e("../lib/create-deferred-client"),
                    a = e("../lib/create-assets-url"),
                    s = e("./visa-checkout"),
                    c = e("../lib/analytics"),
                    d = e("./errors"),
                    l = e("@braintree/wrap-promise");
                t.exports = {
                    create: l((function(e) {
                        var t = "Visa Checkout";
                        return r.verify({
                            name: t,
                            client: e.client,
                            authorization: e.authorization
                        }).then((function() {
                            return o.create({
                                authorization: e.authorization,
                                client: e.client,
                                debug: e.debug,
                                assetsUrl: a.create(e.authorization),
                                name: t
                            })
                        })).then((function(t) {
                            return e.client = t, e.client.getConfiguration().gatewayConfiguration.visaCheckout ? (c.sendEvent(e.client, "visacheckout.initialized"), new s(e)) : Promise.reject(new i(d.VISA_CHECKOUT_NOT_ENABLED))
                        }))
                    })),
                    VERSION: "3.94.0"
                }
            }, {
                "../lib/analytics": 116,
                "../lib/basic-component-verification": 119,
                "../lib/braintree-error": 121,
                "../lib/create-assets-url": 126,
                "../lib/create-deferred-client": 128,
                "./errors": 222,
                "./visa-checkout": 224,
                "@braintree/wrap-promise": 42
            }],
            224: [function(e, t, n) {
                var r = e("../lib/braintree-error"),
                    i = e("../lib/analytics"),
                    o = e("./errors"),
                    a = e("../lib/json-clone"),
                    s = e("../lib/methods"),
                    c = e("../lib/convert-methods-to-error"),
                    d = e("@braintree/wrap-promise"),
                    l = {
                        Visa: "VISA",
                        MasterCard: "MASTERCARD",
                        Discover: "DISCOVER",
                        "American Express": "AMEX"
                    };

                function u(e) {
                    this._client = e.client
                }
                u.prototype.createInitOptions = function(e) {
                    var t, n = this._client.getConfiguration().gatewayConfiguration,
                        i = n.visaCheckout;
                    if (!e) throw new r(o.VISA_CHECKOUT_INIT_OPTIONS_REQUIRED);
                    return (t = a(e)).apikey = t.apikey || i.apikey, t.encryptionKey = i.encryptionKey, t.externalClientId = t.externalClientId || i.externalClientId, t.settings = t.settings || {}, t.settings.dataLevel = "FULL", t.settings.payment = t.settings.payment || {}, t.settings.payment.cardBrands || (t.settings.payment.cardBrands = n.visaCheckout.supportedCardTypes.reduce((function(e, t) {
                        return l.hasOwnProperty(t) ? e.concat(l[t]) : e
                    }), [])), t
                }, u.prototype.tokenize = function(e) {
                    var t = this;
                    return e.callid && e.encKey && e.encPaymentData ? this._client.request({
                        method: "post",
                        endpoint: "payment_methods/visa_checkout_cards",
                        data: {
                            _meta: {
                                source: "visa-checkout"
                            },
                            visaCheckoutCard: {
                                callId: e.callid,
                                encryptedPaymentData: e.encPaymentData,
                                encryptedKey: e.encKey
                            }
                        }
                    }).then((function(e) {
                        return i.sendEvent(t._client, "visacheckout.tokenize.succeeded"), e.visaCheckoutCards[0]
                    })).catch((function(e) {
                        return i.sendEvent(t._client, "visacheckout.tokenize.failed"), Promise.reject(new r({
                            type: o.VISA_CHECKOUT_TOKENIZATION.type,
                            code: o.VISA_CHECKOUT_TOKENIZATION.code,
                            message: o.VISA_CHECKOUT_TOKENIZATION.message,
                            details: {
                                originalError: e
                            }
                        }))
                    })) : Promise.reject(new r(o.VISA_CHECKOUT_PAYMENT_REQUIRED))
                }, u.prototype.teardown = function() {
                    return c(this, s(u.prototype)), Promise.resolve()
                }, t.exports = d.wrapPrototype(u)
            }, {
                "../lib/analytics": 116,
                "../lib/braintree-error": 121,
                "../lib/convert-methods-to-error": 124,
                "../lib/json-clone": 151,
                "../lib/methods": 152,
                "./errors": 222,
                "@braintree/wrap-promise": 42
            }]
        }, {}, [114])(114)
    }))
}), "e8f873", []);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/8924.8168ea7e5b.js.map