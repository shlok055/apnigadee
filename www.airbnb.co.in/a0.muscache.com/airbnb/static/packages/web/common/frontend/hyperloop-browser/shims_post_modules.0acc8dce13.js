__d((function(g, r, i, a, m, e, d) {
    "use strict";
    'function' == typeof TouchList && 'function' != typeof TouchList.prototype[Symbol.iterator] && (TouchList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator])
}), "104487", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    r(d[0]), r(d[1])
}), "484600", ["c66fda", "104487"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.fallback = void 0;
    const l = e.fallback = function(l) {
            return setTimeout((function() {
                const t = Date.now();
                l({
                    didTimeout: !1,
                    timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
                })
            }), 1)
        },
        t = 'undefined' != typeof requestIdleCallback;
    g.requestIdleCallback = t ? requestIdleCallback : l, g.cancelIdleCallback = t ? cancelIdleCallback : clearTimeout
}), "c66fda", []);
__r("484600");
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/hyperloop-browser/shims_post_modules.f8ee3b180a.js.map