__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        s = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.useGetWishlistItemIds = function() {
        const t = o.default.useContext(O);
        if (!t) throw new Error('useGetWishlistItemIds must be used within a SaveToListStoreProvider');
        const s = (0, o.useMemo)((() => t => t.wishlistItems), []),
            u = (0, w.useStore)(t, s);
        return (0, o.useCallback)(((t, s) => (0, p.getWishlistItemIds)({
            wishlists: [],
            wishlistItems: u
        }, t, s)), [u])
    }, e.useIsEntitySavedToAnyListDeprecated = function() {
        const t = o.default.useContext(O);
        if (!t) throw new Error('useIsEntitySavedToAnyListDeprecated must be used within a SaveToListStoreProvider');
        const s = (0, o.useMemo)((() => t => t.wishlistItems), []),
            u = (0, w.useStore)(t, s);
        return (0, o.useCallback)(((t, s) => (0, p.isEntitySavedToAnyList)({
            wishlists: [],
            wishlistItems: u
        }, t, s)), [u])
    }, e.useMergeWishlistItems = function(t) {
        const s = o.default.useContext(O);
        if (!s) throw new Error('useMergeWishlistSnapshot must be used within a SaveToListStoreProvider');
        (0, o.useEffect)((() => {
            if (t && s.isMergeIdempotentDeprecated) {
                const u = {
                    wishlists: [],
                    wishlistItems: new Set(t.filter(b.default).map(W.createWishlistItemReplica))
                };
                s.merge(u)
            }
        }), [t, s])
    }, e.useMutationsSettledEffect = function(t) {
        const s = o.default.useContext(O);
        if (!s) throw new Error('useMutationsSettledEffect must be used within a SaveToListStoreProvider');
        const u = (0, w.useStore)(s.allMutationsSettledCount, w.identitySelector),
            n = (0, I.useEvent)(t);
        (0, o.useEffect)((() => {
            u > 0 && n()
        }), [n, u])
    }, e.useSaveToListStoreDebugLogger = function({
        store: t
    } = {}) {
        const s = (0, h.useDebugLogger)('SaveToListStoreProvider'),
            u = (0, o.useContext)(O),
            n = t ? ? u;
        (0, o.useEffect)((() => n ? .subscribe((t => {
            s((() => t))
        }))), [s, n])
    }, e.useWishlistMutations = function() {
        const t = o.default.useContext(O);
        if (!t) throw new Error('useWishlistMutations must be used within a SaveToListStoreProvider');
        const [s] = (0, c().useMinimalistMutation)(f.default), [u] = (0, c().useMinimalistMutation)(l.default), [n] = (0, c().useMinimalistMutation)(S.default);
        return {
            createWishlist: (0, o.useMemo)((() => u => t.createWishlist({
                mutate: s,
                options: u
            })), [s, t]),
            addWishlistItem: (0, o.useMemo)((() => s => t.addWishlistItem({
                mutate: u,
                options: s
            })), [u, t]),
            batchDeleteWishlistItems: (0, o.useMemo)((() => s => t.batchDeleteWishlistItems({
                mutate: n,
                options: s
            })), [n, t]),
            clear: t.clear
        }
    }, e.useWishlistNiobeMutations = function({
        createWishlist: t,
        addWishlistItem: s,
        batchDeleteWishlistItems: u,
        skip: n
    }) {
        const l = o.default.useContext(O),
            h = (0, o.useMemo)((() => n || !l ? t : s => l.createWishlist({
                mutate: t,
                options: s
            }).promise), [t, n, l]),
            c = (0, o.useMemo)((() => n || !l ? s : t => l.addWishlistItem({
                mutate: s,
                options: t
            }).promise), [s, n, l]),
            f = (0, o.useMemo)((() => n || !l ? u : t => l.batchDeleteWishlistItems({
                mutate: u,
                options: t
            }).promise), [u, n, l]);
        return {
            createWishlist: h,
            addWishlistItem: c,
            batchDeleteWishlistItems: f
        }
    };
    var u = s(r(d[2])),
        n = s(r(d[3])),
        o = t(r(d[4])),
        l = s(r(d[5])),
        h = r(d[6]);

    function c() {
        const t = r(d[7]);
        return c = function() {
            return t
        }, t
    }
    var f = s(r(d[8])),
        S = s(r(d[9])),
        b = s(r(d[10])),
        I = r(d[11]),
        p = r(d[12]),
        w = r(d[13]),
        M = r(d[14]),
        v = r(d[15]),
        W = r(d[16]);
    r(d[17]);

    function C() {
        return {
            wishlists: [],
            wishlistItems: new Set
        }
    }
    var P = (0, n.default)("clientReplica"),
        y = (0, n.default)("mutationsQueue"),
        D = (0, n.default)("getStateCached"),
        E = (0, n.default)("getInitialStateCached"),
        L = (0, n.default)("applyOptimisticUpdates");
    class T {
        constructor({
            initialSnapshot: t = C()
        } = {}) {
            Object.defineProperty(this, L, {
                value: x
            }), Object.defineProperty(this, P, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, y, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, D, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, E, {
                writable: !0,
                value: void 0
            }), this.isMergeIdempotentDeprecated = !0, this.isClearPending = !1, this.allMutationsSettledCount = void 0, (0, u.default)(this, P)[P] = new w.Store(t), (0, u.default)(this, y)[y] = new v.MutationQueue({
                onMutationAdded: () => {
                    this.isMergeIdempotentDeprecated = !1, this.merge({})
                },
                onMutationSettled: t => {
                    this.merge(t ? ? {}), setTimeout((() => {
                        (0, u.default)(this, y)[y].hasPendingMutations() || this.allMutationsSettledCount.setState(this.allMutationsSettledCount.getState() + 1)
                    }), 0)
                }
            }), this.subscribe = this.subscribe.bind(this), this.getState = this.getState.bind(this), this.getInitialState = this.getInitialState.bind(this), this.clear = this.clear.bind(this), (0, u.default)(this, D)[D] = null, (0, u.default)(this, E)[E] = (0, M.removeVersioningMetadata)((0, u.default)(this, P)[P].getInitialState()), this.allMutationsSettledCount = new w.Store(0)
        }
        getState() {
            return null == (0, u.default)(this, D)[D] && ((0, u.default)(this, D)[D] = (0, u.default)(this, L)[L]()), (0, u.default)(this, D)[D]
        }
        getInitialState() {
            return (0, u.default)(this, E)[E]
        }
        subscribe(t) {
            return (0, u.default)(this, P)[P].subscribe((() => t(this.getState())))
        }
        merge(t) {
            (0, u.default)(this, D)[D] = null;
            let s = (0, u.default)(this, P)[P].getState();
            this.isClearPending && (s = (0, u.default)(this, P)[P].getInitialState(), this.isClearPending = !1), (0, u.default)(this, P)[P].setState((0, M.merge)(s, t))
        }
        createWishlist(t) {
            return (0, u.default)(this, y)[y].createWishlist(t)
        }
        addWishlistItem(t) {
            return (0, u.default)(this, y)[y].addWishlistItem(t)
        }
        batchDeleteWishlistItems(t) {
            return (0, u.default)(this, y)[y].batchDeleteWishlistItems(t)
        }
        clear() {
            this.isClearPending = !0, this.isMergeIdempotentDeprecated = !0
        }
    }

    function x() {
        return (0, u.default)(this, y)[y].applyOptimisticUpdates((0, u.default)(this, P)[P].getState())
    }
    const O = (0, o.createContext)((function() {
        const t = window.saveToListStore || new T;
        return window.saveToListStore = t, t
    })())
}), "07b2f9", ["45f788", "ba7a76", "76718e", "99527b", "07aa1f", "bd6cf7", "f8ea9a", "068abc", "d7b2e2", "f9f96a", "58861b", "f4e9c4", "3ef545", "2289fb", "2e40ad", "6a7363", "bc9017", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    /**
     * @license React
     * use-sync-external-store-with-selector.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    'use strict';
    var u = r(d[0]);
    var n = "function" == typeof Object.is ? Object.is : function(u, n) {
            return u === n && (0 !== u || 1 / u == 1 / n) || u != u && n != n
        },
        t = u.useSyncExternalStore,
        l = u.useRef,
        c = u.useEffect,
        f = u.useMemo,
        o = u.useDebugValue;
    e.useSyncExternalStoreWithSelector = function(u, v, s, S, h) {
        var V = l(null);
        if (null === V.current) {
            var b = {
                hasValue: !1,
                value: null
            };
            V.current = b
        } else b = V.current;
        V = f((function() {
            function u(u) {
                if (!c) {
                    if (c = !0, t = u, u = S(u), void 0 !== h && b.hasValue) {
                        var f = b.value;
                        if (h(f, u)) return l = f
                    }
                    return l = u
                }
                if (f = l, n(t, u)) return f;
                var o = S(u);
                return void 0 !== h && h(f, o) ? f : (t = u, l = o)
            }
            var t, l, c = !1,
                f = void 0 === s ? null : s;
            return [function() {
                return u(v())
            }, null === f ? void 0 : function() {
                return u(f())
            }]
        }), [v, s, S, h]);
        var y = t(u, V[0], V[1]);
        return c((function() {
            b.hasValue = !0, b.value = y
        }), [y]), o(y), y
    }
}), "0ad2d2", ["07aa1f"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.WishlistCreateNewApiSession = {
        defaultProps: {},
        propTypes: {}
    };
    t.fullyQualifiedName = 'Saved.v1.WishlistCreateNewApiSession';
    e.WishlistCreateNewApiSessionEvent = function(s) {
        return {
            eventData: s,
            eventDataSchema: t
        }
    }
}), "0bf6bd", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.identitySelector = e.Store = void 0, e.useStore = function(t, s) {
        return (0, n.useSyncExternalStoreWithSelector)(t.subscribe, t.getState, t.getInitialState, s)
    };
    var s = t(r(d[1])),
        u = t(r(d[2])),
        l = t(r(d[3])),
        n = r(d[4]),
        S = (0, u.default)("initialState"),
        b = (0, u.default)("state");
    e.Store = class {
        constructor(t) {
            Object.defineProperty(this, S, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, b, {
                writable: !0,
                value: void 0
            }), (0, s.default)(this, S)[S] = t, (0, s.default)(this, b)[b] = (0, l.default)(t), this.subscribe = this.subscribe.bind(this), this.getState = this.getState.bind(this), this.getInitialState = this.getInitialState.bind(this)
        }
        getState() {
            return (0, s.default)(this, b)[b].getState()
        }
        getInitialState() {
            return (0, s.default)(this, S)[S]
        }
        setState(t) {
            return (0, s.default)(this, b)[b].setState(t)
        }
        subscribe(t) {
            return (0, s.default)(this, b)[b].subscribe(t)
        }
    };
    e.identitySelector = t => t
}), "2289fb", ["ba7a76", "76718e", "99527b", "319658", "addeb5"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, n) {
        return t ? .[0] ? .id ? .toString() === n ? .toString() ? t ? .[0] : t ? .find((t => t.id ? .toString() === n))
    }
}), "22e5f5", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";

    function s(s, t) {
        return null == s ? t : null == t || s.version > t.version ? s : t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.merge = function(t, l) {
        const n = {
            wishlists: t.wishlists.map((s => ({ ...s
            }))),
            wishlistItems: new Set([...t.wishlistItems].map((s => ({ ...s
            }))))
        };
        l.wishlists && l.wishlists.forEach((t => {
            const l = n.wishlists.find((s => null != s.id ? .value && s.id ? .value === t.id ? .value));
            l ? Object.keys(t).forEach((n => {
                l[n] = s(l[n], t[n])
            })) : n.wishlists.unshift(t)
        }));
        l.wishlistItems && l.wishlistItems.forEach((t => {
            const l = [...n.wishlistItems].find((s => null != s.wishlistItemId ? .value && s.wishlistItemId ? .value === t.wishlistItemId ? .value));
            l ? Object.keys(t).forEach((n => {
                l[n] = s(l[n], t[n])
            })) : n.wishlistItems.add(t)
        }));
        return n
    }, e.removeVersioningMetadata = function(s) {
        return {
            wishlists: s.wishlists.map((s => Object.fromEntries(Object.entries(s).map((([s, t]) => [s, t ? .value]))))),
            wishlistItems: new Set([...s.wishlistItems].map((s => Object.fromEntries(Object.entries(s).map((([s, t]) => [s, t ? .value]))))))
        }
    }
}), "2e40ad", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getWishlistItemIds = o, e.isEntitySavedToAnyList = function(t, n, u) {
        return o(t, n, u).length > 0
    };
    var n = r(d[1]),
        u = t(r(d[2]));

    function o(t, o, s) {
        return Array.from(t.wishlistItems).filter((t => {
            const {
                productType: u,
                productId: l
            } = t;
            if (!l || !u || !(u in n.ProductTypeToEntityType)) return !1;
            const c = n.ProductTypeToEntityType[u],
                y = l;
            return null == t.deletedAt && c === o && y === s
        })).map((t => t.wishlistItemId)).filter(u.default)
    }
}), "3ef545", ["ba7a76", "7ee7e4", "58861b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.WishlistEntityTypeToVerticalType = e.WishlistEntityTypeToItemType = void 0, e.getDefaultNameFromPayload = function(t) {
        return t ? .presentation ? .wishlistSaveToModal ? .defaultWishlistName
    }, e.legacyListsFromPayload = function(t) {
        return t ? .presentation ? .wishlistIndexPage ? .wishlists ? .filter(u.default).map(o)
    };
    var l = r(d[1]),
        s = t(r(d[2])),
        n = r(d[3]),
        u = t(r(d[4]));

    function o({
        collaboratorUsers: t,
        createdBy: n,
        dateRangeDetails: u,
        formattedDateRange: o,
        guestCount: c,
        guestDetails: _,
        id: E,
        inviteUrl: I,
        isCollaborative: f,
        isCollaborativeBasedOnShareToken: p,
        isPrivate: T,
        name: C,
        pictureUrl: h,
        pictureUrls: N,
        productIds: A,
        userId: b,
        wishlistUser: P,
        xlImageUrl: y
    }) {
        return {
            airbnb_canonical_place_ids: (0, l.extractIds)(A ? .airbnbCanonicalPlaceIds, l.ENTITY_REGEXES[s.default.AIRBNB_CANONICAL_PLACE]),
            checkin: u ? .checkIn || void 0,
            checkout: u ? .checkOut || void 0,
            collaboratorUsers: t,
            created_by: n,
            formattedDateRange: o,
            guests: c || 1,
            guest_details: {
                localized_description: _ ? .description ? .localizedString || '',
                number_of_adults: _ ? .numberOfAdults || 1,
                number_of_children: _ ? .numberOfChildren || 0,
                number_of_infants: _ ? .numberOfInfants || 0
            },
            id: parseInt((0, l.extractId)(E), 10),
            image_url: h || void 0,
            invite_url: I || void 0,
            isCollaborative: f || p,
            listings_count: A ? .stayIds.length || 0,
            listing_ids_str: (0, l.extractIds)(A ? .stayIds, l.ENTITY_REGEXES[s.default.LISTING]),
            mt_templates_count: A ? .experienceIds.length || 0,
            mt_template_ids: (0, l.extractIds)(A ? .experienceIds, l.ENTITY_REGEXES[s.default.EXPERIENCE]),
            name: C || '',
            picture_urls: N,
            places_count: (A ? .placeIds.length || 0) + (A ? .airbnbCanonicalPlaceIds.length || 0),
            place_ids: (0, l.extractIds)(A ? .placeIds, l.ENTITY_REGEXES[s.default.PLACE]),
            private: T && !p,
            thumbnail_image_url: h || void 0,
            user: P && b ? {
                first_name: P.firstName,
                has_profile_pic: !!P.thumbnailUrl,
                id: parseInt(b, 10),
                picture_url: P.thumbnailUrl,
                smart_name: P.firstName,
                thumbnail_url: P.thumbnailUrl
            } : null,
            user_id: b || void 0,
            wishlistUser: P,
            xl_image_url: y || void 0
        }
    }
    e.WishlistEntityTypeToItemType = {
        [s.default.LISTING]: 'HOME',
        [s.default.EXPERIENCE]: 'EXPERIENCE',
        [s.default.PLACE]: 'PLACE',
        [s.default.AIRBNB_CANONICAL_PLACE]: 'AIRBNB_CANONICAL_PLACE'
    }, e.WishlistEntityTypeToVerticalType = {
        [s.default.LISTING]: n.VERTICAL_TYPES.homes,
        [s.default.EXPERIENCE]: n.VERTICAL_TYPES.experiences,
        [s.default.PLACE]: n.VERTICAL_TYPES.places,
        [s.default.AIRBNB_CANONICAL_PLACE]: n.VERTICAL_TYPES.places
    }
}), "3f2e27", ["ba7a76", "cfb703", "d1b3af", "8e0668", "58861b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MutationQueue = void 0;
    var s = t(r(d[1])),
        l = t(r(d[2])),
        u = r(d[3]),
        n = t(r(d[4])),
        o = r(d[5]),
        h = r(d[6]);

    function c({
        mutate: t
    }) {
        let s, l;
        return {
            promise: new Promise(((t, u) => {
                s = t, l = u
            })),
            mutate: async (...u) => {
                try {
                    const l = await t(...u);
                    return s(l), l
                } catch (t) {
                    throw l(t), t
                }
            }
        }
    }
    var f = (0, l.default)("queue"),
        p = (0, l.default)("onMutationAdded"),
        I = (0, l.default)("onMutationSettled"),
        w = (0, l.default)("nextOptimisticID"),
        v = (0, l.default)("resolvedOptimisticIDs"),
        b = (0, l.default)("rejectedOptimisticIDs"),
        y = (0, l.default)("addMutation"),
        O = (0, l.default)("generateOptimisticID"),
        M = (0, l.default)("resolveOptimisticId");

    function P({
        mutation: t,
        optimisticUpdate: l
    }) {
        const u = (0, s.default)(this, f)[f].map((({
                promise: t
            }) => t)),
            n = Promise.allSettled(u),
            o = (async () => {
                let l;
                u.length && await n;
                try {
                    l = await t()
                } finally {
                    (0, s.default)(this, f)[f].shift(), (0, s.default)(this, I)[I] ? .(l)
                }
            })(),
            h = {
                promise: o,
                optimisticUpdate: l
            };
        return (0, s.default)(this, f)[f].push(h), (0, s.default)(this, p)[p] ? .(), o
    }

    function S() {
        return "optimistic-id:" + (0, s.default)(this, w)[w]++
    }

    function W(t) {
        if (!t.startsWith('optimistic-id:')) return t;
        const l = (0, s.default)(this, v)[v].get(t);
        return l || null
    }
    e.MutationQueue = class {
        constructor(t = {}) {
            Object.defineProperty(this, M, {
                value: W
            }), Object.defineProperty(this, O, {
                value: S
            }), Object.defineProperty(this, y, {
                value: P
            }), Object.defineProperty(this, f, {
                writable: !0,
                value: []
            }), Object.defineProperty(this, p, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, I, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, w, {
                writable: !0,
                value: 0
            }), Object.defineProperty(this, v, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, b, {
                writable: !0,
                value: void 0
            }), t.onMutationAdded && ((0, s.default)(this, p)[p] = t.onMutationAdded), t.onMutationSettled && ((0, s.default)(this, I)[I] = t.onMutationSettled), (0, s.default)(this, v)[v] = new Map, (0, s.default)(this, b)[b] = new Set
        }
        hasPendingMutations() {
            return (0, s.default)(this, f)[f].length > 0
        }
        applyOptimisticUpdates(t) {
            return (0, s.default)(this, f)[f].reduce(((t, {
                optimisticUpdate: s
            }) => s(t)), (0, o.removeVersioningMetadata)(t))
        }
        createWishlist({
            mutate: t,
            options: l
        }) {
            const {
                mutate: u,
                promise: n
            } = c({
                mutate: t
            }), o = (0, s.default)(this, O)[O]();
            return (0, s.default)(this, y)[y]({
                mutation: async () => {
                    const {
                        name: t
                    } = l ? .variables ? ? {}, {
                        data: n,
                        error: h
                    } = await u(l), c = n ? .createWishlist ? .wishlistId;
                    if (!h && t && c) {
                        const l = {
                            id: {
                                version: -1,
                                value: c
                            },
                            name: {
                                version: -1,
                                value: t
                            },
                            deletedAt: {
                                version: -1,
                                value: null
                            }
                        };
                        return (0, s.default)(this, v)[v].set(o, c), {
                            wishlists: [l]
                        }
                    }
                    return (0, s.default)(this, b)[b].add(o), {}
                },
                optimisticUpdate: t => {
                    const {
                        name: s
                    } = l ? .variables ? ? {}, u = {
                        id: o,
                        name: s,
                        deletedAt: null
                    };
                    return { ...t,
                        wishlists: [u, ...t.wishlists]
                    }
                }
            }), {
                promise: n,
                optimisticWishlistId: o
            }
        }
        addWishlistItem({
            mutate: t,
            options: l
        }) {
            const {
                mutate: n,
                promise: o
            } = c({
                mutate: t
            }), f = (0, s.default)(this, O)[O]();
            return (0, s.default)(this, y)[y]({
                mutation: async () => {
                    const {
                        savedItemId: t,
                        savedItemType: o,
                        wishlistId: c
                    } = l ? .variables ? ? {}, p = (0, s.default)(this, M)[M]((0, u.extractId)(c));
                    if (p) {
                        const {
                            data: c,
                            error: I
                        } = await n(l && { ...l,
                            variables: l.variables && { ...l.variables,
                                wishlistId: (0, u.encodeId)(p)
                            }
                        }), w = c ? .addWishlistItem ? .wishlistItem;
                        if (!I && t && o && p && w && w.wishlistItemId) return (0, s.default)(this, v)[v].set(f, w.wishlistItemId), {
                            wishlists: [],
                            wishlistItems: new Set([(0, h.createWishlistItemReplica)(w)])
                        }
                    }
                    return (0, s.default)(this, b)[b].add(f), {}
                },
                optimisticUpdate: t => {
                    const {
                        savedItemId: n,
                        savedItemType: o,
                        wishlistId: h
                    } = l ? .variables ? ? {}, c = (0, u.extractId)(h);
                    if ((0, s.default)(this, b)[b].has(c)) return t;
                    const p = {
                        wishlistId: (0, s.default)(this, M)[M](c) ? ? c,
                        productId: n,
                        productType: o,
                        wishlistItemId: f,
                        deletedAt: null
                    };
                    return { ...t,
                        wishlistItems: new Set([...t.wishlistItems, p])
                    }
                }
            }), {
                promise: o,
                optimisticWishlistItemId: f
            }
        }
        batchDeleteWishlistItems({
            mutate: t,
            options: l
        }) {
            const {
                mutate: u,
                promise: o
            } = c({
                mutate: t
            }), f = (new Date).toISOString();
            return (0, s.default)(this, y)[y]({
                mutation: async () => {
                    const {
                        wishlistItemIds: t
                    } = l ? .variables ? ? {}, o = (t ? ? []).filter(n.default).map((t => (0, s.default)(this, M)[M](t)));
                    if (o.every(n.default)) {
                        const {
                            data: t,
                            error: s
                        } = await u(l && { ...l,
                            variables: l.variables && { ...l.variables,
                                wishlistItemIds: o
                            }
                        }), c = t ? .batchDeleteWishlistItemsByWishlistItemId ? .deletedWishlistItems;
                        if (!s && c) return {
                            wishlists: [],
                            wishlistItems: new Set(c.filter(n.default).map((t => (0, h.createWishlistItemReplica)({
                                version: t ? .version,
                                wishlistItemId: t ? .wishlistItemId,
                                deletedAt: t ? .deletedAt ? ? (new Date).toISOString()
                            }))))
                        }
                    }
                    return {}
                },
                optimisticUpdate: t => {
                    const {
                        wishlistItemIds: u
                    } = l ? .variables ? ? {}, o = (u ? ? []).filter(n.default).filter((t => !(0, s.default)(this, b)[b].has(t))).map((t => (0, s.default)(this, M)[M](t) ? ? t)), h = [...t.wishlistItems].map((t => ({ ...t,
                        deletedAt: t.wishlistItemId && o.includes(t.wishlistItemId) ? f : t.deletedAt
                    })));
                    return { ...t,
                        wishlistItems: new Set(h)
                    }
                }
            }), {
                promise: o
            }
        }
    }
}), "6a7363", ["ba7a76", "76718e", "99527b", "cfb703", "58861b", "2e40ad", "bc9017"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = e.WishlistAddToListApiSession = {
        defaultProps: {},
        propTypes: {}
    };
    s.fullyQualifiedName = 'Saved.v1.WishlistAddToListApiSession';
    e.WishlistAddToListApiSessionEvent = function(t) {
        return {
            eventData: t,
            eventDataSchema: s
        }
    }
}), "832b13", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.VERTICAL_TYPES = e.LAST_UPDATE_SESSION_STORAGE_KEY = void 0;
    e.LAST_UPDATE_SESSION_STORAGE_KEY = 'SAVE_TO_LIST_LAST_UPDATE', e.VERTICAL_TYPES = {
        homes: 'Homes',
        experiences: 'Experiences',
        places: 'Places'
    }
}), "8e0668", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        const {
            location: {
                search: c
            }
        } = window, {
            adults: s = 0,
            infants: f = 0,
            children: o = 0,
            pets: h = 0,
            checkin: p,
            checkout: _,
            check_in: k,
            check_out: y,
            flexible_date_search_filter_type: I,
            flexible_days: b
        } = l().default.parse(c, {
            ignoreQueryPrefix: !0
        }), x = t ? null : k || p, v = t ? null : y || _;
        return {
            adults: parseInt(s, 10),
            infants: parseInt(f, 10),
            children: parseInt(o, 10),
            pets: parseInt(h, 10),
            checkIn: x && (0, n.default)(x).isValid() ? (0, n.default)(x).format(u) : null,
            checkOut: v && (0, n.default)(v).isValid() ? (0, n.default)(v).format(u) : null,
            flexibleDateSearchFilterType: null == I ? void 0 : parseInt(I, 10),
            flexibleDays: b
        }
    };
    var n = t(r(d[1]));

    function l() {
        const n = t(r(d[2]));
        return l = function() {
            return n
        }, n
    }
    const u = 'YYYY-MM-DD'
}), "94b23d", ["ba7a76", "1772c9", "e950a3"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isAcpId = function(t) {
        return isNaN(Number(t))
    }
}), "960c9c", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.closed = function() {
        return t => {
            t({
                type: w.CLOSED
            })
        }
    }, e.createListClicked = function(t, s, n, o, l, c, u, h, I) {
        return (y, p) => {
            y(B({
                listName: t,
                entity: s,
                entityId: n,
                entityType: o,
                savingFrom: l,
                dispatch: y,
                saveWithoutDates: c,
                getState: p,
                finishCreating: u,
                savingContext: h,
                mutationId: I
            }))
        }
    }, e.experienceHeartClicked = function(t, s, n, o, l, c, u, I, p, T) {
        const _ = h.default.isLoggedIn(),
            f = String(t.id),
            E = (0, v.default)(!1),
            W = {
                guests: (E ? .adults || 0) + (E ? .children || 0),
                target_id: f,
                target_extra_data: {
                    user_wishlist_ids: JSON.stringify(s ? .map((({
                        id: t
                    }) => t))),
                    is_logged_in: _.toString(),
                    saving_from: l,
                    saving_context: JSON.stringify(c)
                }
            };
        return z(N, W), (n, o) => {
            n(K());
            const {
                saveToListModal: {
                    batchDeleteWishlistItems: h,
                    entityMap: v
                }
            } = o(), E = y.default.EXPERIENCE, w = (0, L.getWishlistItems)(v, E, f);
            if (_)
                if (w.length > 0) {
                    z(D, W);
                    const o = s ? .find((({
                        id: t
                    }) => t === w[0].wishlistId));
                    n(H({
                        batchDeleteWishlistItems: h,
                        entity: t,
                        entityId: f,
                        entityType: E,
                        list: o,
                        onUnsave: p,
                        savingFrom: l,
                        wishlistItems: w
                    }))
                } else {
                    const {
                        saveToListModal: {
                            savedToList: h
                        }
                    } = o();
                    u ? .id ? n(V({
                        getState: o,
                        dispatch: n,
                        entity: t,
                        entityId: f,
                        entityType: E,
                        list: u,
                        listId: u.id,
                        onSave: I,
                        savingFrom: l,
                        savingContext: c,
                        showToast: !1,
                        mutationId: T
                    })) : h ? .savedToWishlistIdOverride && s && Q({
                        savedToList: h,
                        savingFrom: l,
                        savingContext: c
                    }) ? n(V({
                        getState: o,
                        dispatch: n,
                        entity: t,
                        entityId: f,
                        entityType: E,
                        list: (0, S.default)(s, h.savedToWishlistIdOverride),
                        listId: Number(h.savedToWishlistIdOverride),
                        savingFrom: l,
                        savingContext: c,
                        mutationId: T
                    })) : n(G(t, f, y.default.EXPERIENCE, null, l))
                }
            else n(J(t, f, E, l))
        }
    }, e.listClicked = function(t, s, n, o, l, c, u) {
        return (h, I) => {
            h(K()), t.id && h(V({
                getState: I,
                dispatch: h,
                entity: s,
                entityId: n,
                entityType: o,
                list: t,
                listId: t.id,
                savingFrom: l,
                savingContext: c,
                mutationId: u
            }))
        }
    }, e.listingHeartClicked = function(t, s, n, o, l, c, u, I, p, T, _, E) {
        const W = h.default.isLoggedIn(),
            w = String(t.id),
            O = (0, v.default)(!1),
            N = {
                checkin: t.checkIn ? ? void 0,
                checkout: t.checkOut ? ? void 0,
                guests: (O ? .adults || 0) + (O ? .children || 0),
                target_id: w,
                section_type_uid: _,
                target_extra_data: {
                    user_wishlist_ids: JSON.stringify(s ? .map((({
                        id: t
                    }) => t))),
                    is_logged_in: W.toString(),
                    saving_from: l,
                    save_without_dates: c ? .toString() || 'false',
                    saving_context: JSON.stringify(u)
                }
            };
        return z(C, N), (n, o) => {
            n(K());
            const {
                saveToListModal: {
                    batchDeleteWishlistItems: h,
                    entityMap: v
                }
            } = o(), _ = y.default.LISTING, O = (0, L.getWishlistItems)(v, _, w);
            if (W)
                if (O.length > 0) {
                    z(A, N);
                    const o = s ? .find((({
                        id: t
                    }) => t === O[0].wishlistId));
                    n(H({
                        batchDeleteWishlistItems: h,
                        entity: t,
                        entityId: w,
                        entityType: _,
                        list: o,
                        onUnsave: T,
                        savingFrom: l,
                        wishlistItems: O
                    }))
                } else {
                    const {
                        saveToListModal: {
                            savedToList: h
                        }
                    } = o();
                    I ? .id ? n(V({
                        getState: o,
                        dispatch: n,
                        entity: t,
                        entityId: w,
                        entityType: _,
                        list: I,
                        listId: I.id,
                        onSave: p,
                        savingFrom: l,
                        savingContext: u,
                        showToast: !1,
                        mutationId: E
                    })) : h ? .savedToWishlistIdOverride && s && Q({
                        savedToList: h,
                        savingFrom: l,
                        savingContext: u
                    }) || h ? .savedToWishlistIdOverride && l === f.default.P3_SAVE_BUTTON && s ? n(V({
                        getState: o,
                        dispatch: n,
                        entity: t,
                        entityId: w,
                        entityType: _,
                        list: (0, S.default)(s, h.savedToWishlistIdOverride),
                        listId: Number(h.savedToWishlistIdOverride),
                        savingFrom: l,
                        savingContext: u,
                        mutationId: E
                    })) : n(G(t, w, _, null, l, c || !1))
                }
            else n(J(t, w, _, l, c || !1))
        }
    }, e.newToastUpdated = Z, e.onSearchParamChange = function(t, s, n, o) {
        return (l, c) => {
            const {
                saveToListModal: u
            } = c();
            u && U(u.savedToList, t, s, n, o) && l({
                type: w.RESET_SAVED_TO_WISHLIST_ID_OVERRIDE
            })
        }
    }, e.pdpLoadWithWishlistId = function(t) {
        return s => {
            s(P(null, null, {
                savedToWishlistIdOverride: t
            }))
        }
    }, e.placeHeartClicked = function(t, s, n, o, l, c, u) {
        const I = h.default.isLoggedIn(),
            p = String(t.primary_place.id),
            T = {
                target_id: p,
                target_extra_data: {
                    user_wishlist_ids: JSON.stringify(s ? .map((({
                        id: t
                    }) => t))),
                    is_logged_in: I.toString(),
                    saving_from: l
                }
            };
        return z(M, T), (n, o) => {
            n(K());
            const {
                saveToListModal: {
                    batchDeleteWishlistItems: h,
                    entityMap: v
                }
            } = o(), _ = (0, E.isAcpId)(p) ? y.default.AIRBNB_CANONICAL_PLACE : y.default.PLACE, f = (0, L.getWishlistItems)(v, _, p);
            if (I)
                if (f.length > 0) {
                    z(b, T);
                    const o = s ? .find((({
                        id: t
                    }) => t === f[0].wishlistId));
                    n(H({
                        batchDeleteWishlistItems: h,
                        entity: t,
                        entityId: p,
                        entityType: _,
                        list: o,
                        savingFrom: l,
                        wishlistItems: f
                    }))
                } else n(c ? .id ? V({
                    getState: o,
                    dispatch: n,
                    entity: t,
                    entityId: t.primary_place.id,
                    entityType: _,
                    list: c,
                    listId: c.id,
                    savingFrom: l,
                    showToast: !1,
                    mutationId: u
                }) : G(t, p, _, null, l));
            else n(J(t, p, _, l))
        }
    }, e.refetchLists = function() {
        return (t, s) => {
            const {
                saveToListModal: {
                    wipRefetch: n,
                    itemsRefetch: o
                }
            } = s();
            t(Y({
                wipRefetch: n,
                itemsRefetch: o
            }))
        }
    }, e.setEntityMap = function(t) {
        return {
            payload: t,
            type: w.SET_ENTITY_MAP
        }
    }, e.setLastError = function(t) {
        return {
            type: w.SET_LAST_ERROR,
            payload: t || null
        }
    }, e.setLists = function(t) {
        return {
            payload: t,
            type: w.SET_LISTS
        }
    }, e.setListsCacheValidity = function({
        isValid: t,
        shouldAlertOtherTabs: s = !1
    }) {
        !t && s && (0, O.broadcastSaveToListUpdate)();
        return {
            payload: {
                isValid: t
            },
            type: w.SET_LISTS_CACHE_VALIDITY
        }
    }, e.setMutations = function(t) {
        return {
            payload: t,
            type: w.SET_MUTATIONS
        }
    }, e.signupModalFinished = function() {
        return (t, s) => {
            const {
                saveToListModal: {
                    wipRefetch: n,
                    itemsRefetch: o
                }
            } = s();
            t(Y({
                wipRefetch: n,
                itemsRefetch: o
            })), t({
                type: w.SIGNUP_MODAL_FINISHED
            })
        }
    }, e.unsaveNoteConfirmationUpdated = tt;
    var s = t(r(d[1]));

    function n() {
        const t = r(d[2]);
        return n = function() {
            return t
        }, t
    }

    function o() {
        const t = r(d[3]);
        return o = function() {
            return t
        }, t
    }

    function l() {
        const t = r(d[4]);
        return l = function() {
            return t
        }, t
    }

    function c() {
        const t = r(d[5]);
        return c = function() {
            return t
        }, t
    }

    function u() {
        const t = r(d[6]);
        return u = function() {
            return t
        }, t
    }
    var h = t(r(d[7])),
        I = r(d[8]),
        y = t(r(d[9])),
        p = t(r(d[10])),
        T = r(d[11]),
        v = t(r(d[12])),
        _ = r(d[13]),
        f = t(r(d[14])),
        S = t(r(d[15])),
        E = r(d[16]),
        W = r(d[17]),
        w = r(d[18]),
        O = r(d[19]),
        L = r(d[20]);
    const C = 'saved.heart.listingHeart',
        A = 'saved.heart.listingHeart.unsave',
        N = 'saved.heart.listingHeart',
        D = 'saved.heart.listingHeart.unsave',
        M = 'saved.heart.listingHeart',
        b = 'saved.heart.listingHeart.unsave',
        R = 'saved.heart.updateWishlist',
        F = 'user_map_move';

    function P(t, s, n) {
        return {
            type: w.SET_SAVED_TO_LIST,
            payload: {
                list: t,
                entityType: s,
                categoryTag: n ? .categoryTag,
                placeId: n ? .placeId,
                federatedSearchId: n ? .federatedSearchId,
                searchType: n ? .searchType,
                savedToWishlistIdOverride: n ? .savedToWishlistIdOverride || t ? .id
            }
        }
    }

    function k() {
        return {
            type: w.RESET_LIST_TO_REMOVE_FROM
        }
    }

    function U(t, s, n, o, l) {
        return l === F && n !== t ? .federatedSearchId || (o ? !(o && t ? .placeId && t ? .placeId === o) : !!s && !(t ? .categoryTag && t ? .categoryTag === s))
    }

    function V({
        getState: t,
        dispatch: s,
        entity: n,
        entityId: l,
        entityType: c,
        list: u,
        listId: h,
        onSave: I,
        savingFrom: y,
        savingContext: p,
        showToast: f = !0,
        mutationId: S
    }) {
        const E = (0, v.default)(!1),
            {
                saveToListModal: {
                    addWishlistItem: L,
                    batchDeleteWishlistItems: C,
                    entityMap: A,
                    listToRemoveFrom: N
                }
            } = t(),
            D = (0, T.logSessionStart)({
                schema: o().WishlistAddToListApiSession,
                event_data: {
                    product_id: l.toString(),
                    wishlist_id: h.toString(),
                    vertical_type: W.WishlistEntityTypeToVerticalType[c]
                }
            }),
            M = new Promise((t => {
                N && (s(x({
                    batchDeleteWishlistItems: C,
                    entityId: l,
                    entityType: c,
                    entityMap: A,
                    listId: N
                })), s(k())), L({
                    variables: {
                        checkIn: n.checkIn,
                        checkOut: n.checkOut,
                        adults: E ? .adults,
                        children: E ? .children,
                        infants: E ? .infants,
                        pets: E ? .pets,
                        savedItemId: String(l),
                        savedItemType: W.WishlistEntityTypeToItemType[c],
                        wishlistId: (0, _.createGlobalId)('Wishlist', h.toString()),
                        mutationId: S
                    }
                }).then((s => {
                    t(s ? .data ? .addWishlistItem)
                })).finally((() => (0, T.logSessionEnd)({
                    sessionId: D
                })))
            }));
        return t => {
            t({
                type: w.SAVE_TO_LIST,
                promise: M,
                meta: {
                    listId: h,
                    entityId: l,
                    entityType: c,
                    onSuccess(s) {
                        'OK' === s ? .statusCode ? ((0, O.broadcastSaveToListUpdate)(), I ? .(s ? .wishlistItemId), u && (t(P(u, c, p)), f && t($(u, n, c, (() => {
                            if (!u.id) return;
                            const s = {
                                list_id: u.id.toString(),
                                checkin: n.checkIn,
                                checkout: n.checkOut,
                                guests: (E ? .adults || 0) + (E ? .children || 0),
                                target_id: l.toString()
                            };
                            z(R, s), t(G(n, l, c, Number(u.id), y)), t(K())
                        }))))) : (t({
                            type: w.SET_SAVED_TO_LIST,
                            payload: {
                                list: null,
                                entityType: null,
                                categoryTag: null,
                                placeId: null,
                                federatedSearchId: null,
                                searchType: null,
                                savedToWishlistIdOverride: null
                            }
                        }), t(X(s.errorContent ? .errorDisplayMessage, s.errorContent ? .errorDisplayTitle || void 0)))
                    }
                }
            })
        }
    }

    function x({
        batchDeleteWishlistItems: t,
        entityId: s,
        entityType: n,
        entityMap: o,
        listId: c,
        wishlistItemId: u
    }) {
        const h = (0, T.logSessionStart)({
            schema: l().WishlistDeleteFromListApiSession,
            event_data: {
                product_id: s.toString(),
                wishlist_id: c.toString(),
                vertical_type: W.WishlistEntityTypeToVerticalType[n]
            }
        });
        if (!u) {
            const t = (0, L.getWishlistItem)(o, n, s.toString(), c);
            u = t ? .wishlistItemId
        }
        const I = new Promise((s => {
            u && t({
                variables: {
                    wishlistItemIds: [String(u)]
                }
            }).then((t => {
                s(t ? .data ? .batchDeleteWishlistItemsByWishlistItemId)
            })).finally((() => (0, T.logSessionEnd)({
                sessionId: h
            })))
        }));
        return t => {
            t({
                type: w.REMOVE_FROM_LIST,
                promise: I,
                meta: {
                    listId: c,
                    entityId: s,
                    entityType: n,
                    wishlistItemId: u,
                    onSuccess(s) {
                        'OK' === s ? .statusCode ? (0, O.broadcastSaveToListUpdate)() : t(X())
                    }
                }
            })
        }
    }

    function H({
        batchDeleteWishlistItems: t,
        entity: s,
        entityId: n,
        entityType: o,
        forceUnsave: c,
        list: u,
        onUnsave: h,
        savingFrom: I,
        wishlistItems: y
    }) {
        const p = (0, T.logSessionStart)({
                schema: l().WishlistDeleteFromListApiSession,
                event_data: {
                    product_id: n.toString(),
                    wishlist_id: y[0].wishlistId.toString(),
                    vertical_type: W.WishlistEntityTypeToVerticalType[o]
                }
            }),
            v = new Promise((s => {
                y.length > 0 && t({
                    variables: {
                        checkWishlistItemNotesBeforeUnsave: !c,
                        checkWishlistItemVotesBeforeUnsave: !c,
                        wishlistItemIds: y.map((t => String(t.wishlistItemId)))
                    }
                }).then((t => {
                    s(t ? .data ? .batchDeleteWishlistItemsByWishlistItemId)
                })).finally((() => (0, T.logSessionEnd)({
                    sessionId: p
                })))
            }));
        return l => {
            l({
                type: w.REMOVE_FROM_ALL_LISTS,
                promise: v,
                meta: {
                    wishlistItems: y,
                    entityId: n,
                    entityType: o,
                    onSuccess(c) {
                        if ('OK' === c ? .statusCode) {
                            (0, O.broadcastSaveToListUpdate)(), h ? .();
                            const t = y[0] ? .wishlistName;
                            l(j(u, t, s, o))
                        } else l(c ? .wishlistItemNotesBlockedUnsave || c ? .wishlistItemVotesBlockedUnsave ? tt({
                            isOpen: !0,
                            subtitle: c ? .userMessageSubtitle,
                            title: c ? .userMessageTitle,
                            onRemove: () => {
                                l(H({
                                    batchDeleteWishlistItems: t,
                                    entity: s,
                                    entityId: n,
                                    entityType: o,
                                    forceUnsave: !0,
                                    list: u,
                                    onUnsave: h,
                                    savingFrom: I,
                                    wishlistItems: y
                                }))
                            }
                        }) : X())
                    }
                }
            })
        }
    }

    function B({
        listName: t,
        entity: s,
        entityId: n,
        entityType: l,
        savingFrom: u,
        getState: h,
        dispatch: y,
        saveWithoutDates: p,
        finishCreating: f,
        savingContext: S,
        mutationId: E
    }) {
        const L = new Promise(((S, w) => {
            const {
                saveToListModal: {
                    addWishlistItem: O,
                    createWishlist: L,
                    batchDeleteWishlistItems: C,
                    entityMap: A,
                    listToRemoveFrom: N
                }
            } = h();
            N && (y(x({
                batchDeleteWishlistItems: C,
                entityId: n,
                entityType: l,
                entityMap: A,
                listId: N
            })), y(k()));
            const D = (o, c) => {
                    y($({
                        name: t
                    }, s, l, (() => {
                        o && (y(G(s, n, l, o, u)), y(K()))
                    }))), f && f(), S({
                        listId: o,
                        wishlistItemId: c
                    })
                },
                M = t => {
                    if (!t) return;
                    const c = (0, v.default)(!1),
                        u = (0, T.logSessionStart)({
                            schema: o().WishlistAddToListApiSession,
                            event_data: {
                                product_id: n.toString(),
                                wishlist_id: t.toString(),
                                vertical_type: W.WishlistEntityTypeToVerticalType[l]
                            }
                        });
                    O({
                        variables: {
                            checkIn: s.checkIn,
                            checkOut: s.checkOut,
                            adults: c ? .adults,
                            children: c ? .children,
                            infants: c ? .infants,
                            pets: c ? .pets,
                            savedItemId: String(n),
                            savedItemType: W.WishlistEntityTypeToItemType[l],
                            wishlistId: (0, _.createGlobalId)('Wishlist', t.toString()),
                            mutationId: E
                        }
                    }).then((s => {
                        if ('OK' !== s ? .data ? .addWishlistItem ? .statusCode) {
                            const o = `AddWishlistItemMutation error on savedItemId: ${n} and wishlistId: ${t}`;
                            (0, I.reportError)(new Error(o), {
                                tags: {
                                    operation: 'AddWishlistItemMutation',
                                    team: 'wishlist'
                                },
                                extra: { ...s ? .data ? .addWishlistItem,
                                    wishlistId : t,
                                    savedItemId : n,
                                    savedItemType: W.WishlistEntityTypeToItemType[l]
                                }
                            }), y(X(s ? .data ? .addWishlistItem ? .errorContent ? .errorDisplayMessage, s ? .data ? .addWishlistItem ? .errorContent ? .errorDisplayTitle || void 0))
                        }
                        D(t, s ? .data ? .addWishlistItem ? .wishlistItemId ? ? null)
                    })).catch(w).finally((() => (0, T.logSessionEnd)({
                        sessionId: u
                    })))
                },
                b = (0, v.default)(p),
                R = (0, T.logSessionStart)({
                    schema: c().WishlistCreateNewApiSession
                });
            L({
                variables: { ...b,
                    name: t
                }
            }).then((s => {
                if ('OK' !== s ? .data ? .createWishlist ? .statusCode) {
                    const n = "CreateWishlistMutation error";
                    (0, I.reportError)(new Error(n), {
                        tags: {
                            operation: 'CreateWishlistMutation',
                            team: 'wishlist'
                        },
                        extra: { ...s ? .data ? .createWishlist,
                            name : t
                        }
                    }), y(X())
                }
                M(parseInt(s ? .data ? .createWishlist ? .wishlistId || '', 10))
            })).catch(w).finally((() => (0, T.logSessionEnd)({
                sessionId: R
            })))
        }));
        return {
            type: w.CREATE_AND_SAVE_TO_LIST,
            promise: L,
            meta: {
                entityId: n,
                entityType: l,
                onSuccess({
                    listId: t,
                    wishlistItemId: s
                }) {
                    null === s ? y(X()) : (y(P(null, l, { ...S,
                        savedToWishlistIdOverride: String(t)
                    })), (0, O.broadcastSaveToListUpdate)())
                },
                optimisticSaveListingId: n
            }
        }
    }

    function G(t, s, n, o, l, c) {
        return {
            type: w.OPENED_FROM_ANY_TYPE_LOGGED_IN,
            payload: {
                entity: t,
                entityId: s,
                entityType: n,
                listToRemoveFrom: o,
                savingFrom: l,
                saveWithoutDates: c
            }
        }
    }

    function J(t, s, n, o, l) {
        return {
            type: w.OPENED_FROM_ANY_TYPE_LOGGED_OUT,
            payload: {
                entity: t,
                entityId: s,
                entityType: n,
                savingFrom: o,
                saveWithoutDates: l
            }
        }
    }

    function Y({
        wipRefetch: t,
        itemsRefetch: s
    }) {
        return {
            type: w.REFETCH_LISTS,
            promise: Promise.allSettled([t(), s()])
        }
    }

    function K() {
        return Z({
            newToastVisible: !1
        })
    }

    function X(t, n) {
        return Z({
            title: n,
            message: t ? ? s.default.t('shared.modal error'),
            imgSrc: null,
            wishlistName: null,
            actionText: void 0,
            onActionPress: void 0,
            newToastVisible: !0,
            isError: !0
        })
    }

    function $(t, n, o, l) {
        return Z({
            message: s.default.t('wishlist.toast_message_saved_to_wishlist'),
            imgSrc: q(n, o) ? ? t ? .thumbnail_image_url,
            wishlistName: t ? .name,
            actionText: s.default.t('wish_list.button.change_wish_list'),
            onActionPress: l,
            newToastVisible: !0,
            isError: !1
        })
    }

    function j(t, n, o, l) {
        return Z({
            message: s.default.t('wishlist.toast_message_removed_from_wishlist'),
            actionText: null,
            imgSrc: q(o, l) ? ? t ? .thumbnail_image_url,
            wishlistName: n,
            newToastVisible: !0,
            isError: !1
        })
    }

    function q(t, s) {
        if (!t) return null;
        if (!s) return null;
        switch (s) {
            case y.default.LISTING:
                return t.contextualPictures ? .[0] ? .picture ? ? null;
            case y.default.EXPERIENCE:
                return t.posterPictures ? .[0] ? .poster ? ? null;
            case y.default.PLACE:
            case y.default.AIRBNB_CANONICAL_PLACE:
                return t.thumbnail ? ? null;
            default:
                return null
        }
    }

    function z(t, s) {
        p.default.logJitneyEvent({
            schema: n().UniversalComponentActionEvent,
            event_data: {
                logging_id: t,
                method: 'onPress',
                uuid: (0, u().v4)(),
                operation: 2,
                ancestor_logging_ids: [],
                ancestor_uuids: [],
                event_data: JSON.stringify(s),
                event_data_schema: "Saved.v3.WishlistDetailData"
            }
        })
    }

    function Q({
        savedToList: t,
        savingFrom: s,
        savingContext: n
    }) {
        if (!t ? .list ? .id && !t ? .savedToWishlistIdOverride) return !1;
        if (!n) return !1;
        const {
            categoryTag: o,
            placeId: l
        } = n;
        return (n.searchType !== F || n.federatedSearchId === t ? .federatedSearchId) && (s === f.default.HOMES_SEARCH ? o && t ? .categoryTag && t ? .categoryTag === o : s === f.default.LOCATION_SEARCH || s === f.default.EXPERIENCES_SEARCH ? l && t ? .placeId && t ? .placeId === l : void 0)
    }

    function Z(t) {
        return {
            payload: t,
            type: w.NEW_TOAST_UPDATED
        }
    }

    function tt(t) {
        return {
            payload: t,
            type: w.UNSAVE_NOTE_CONFIRMATION_UPDATED
        }
    }
}), "9cc610", ["ba7a76", "a9f4b1", "59c871", "832b13", "d5f6f5", "0bf6bd", "305dd5", "06a99e", "f2f40f", "d1b3af", "c8b97a", "9e7031", "94b23d", "56afe0", "296b05", "22e5f5", "960c9c", "3f2e27", "7e9547", "e3accc", "d2fdc9"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    m.exports = r(d[0])
}), "addeb5", ["0ad2d2"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createWishlistItemReplica = function(t) {
        const o = null != t.version ? Number.parseInt(t.version, 10) : -1,
            s = {
                wishlistId: void 0,
                productId: void 0,
                productType: void 0,
                wishlistItemId: void 0,
                deletedAt: void 0
            };
        return Object.keys(t).forEach((n => {
            const c = n;
            s[c] = {
                version: o,
                value: t[c] ? ? null
            }
        })), s
    }
}), "bc9017", []);
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
        name: 'AddWishlistItemMutation',
        type: 'mutation',
        operationId: 'df0e88c052ff52056bc7c0df0bb364f7906550b6fba94e139df088b2d1d3c561'
    };
    e.default = u
}), "bd6cf7", ["ba7a76", "45f788", "a1e175", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ENTITY_REGEXES = void 0, e.encodeId = function(t, c) {
        switch (c) {
            case n.default.LISTING:
                return btoa(`StayListing:${t}`);
            case n.default.EXPERIENCE:
                return btoa(`ExperienceListing:${t}`);
            case n.default.PLACE:
                return btoa(`PlaceListing:${t}`);
            case n.default.AIRBNB_CANONICAL_PLACE:
                return btoa(`WishlistCanonicalPlaceListing:${t}`);
            default:
                return btoa(`Wishlist:${t}`)
        }
    }, e.extractId = u, e.extractIds = function(t, n) {
        return t ? .map((t => u(t, n))) ? ? []
    };
    var n = t(r(d[1]));
    const c = /Wishlist:(.*)/;
    e.ENTITY_REGEXES = {
        [n.default.LISTING]: /StayListing:(.*)/,
        [n.default.EXPERIENCE]: /ExperienceListing:(.*)/,
        [n.default.PLACE]: /PlaceListing:(.*)/,
        [n.default.AIRBNB_CANONICAL_PLACE]: /WishlistCanonicalPlaceListing:(.*)/
    };

    function s(t) {
        return 'function' == typeof atob ? atob(t || '') : Buffer.from(t || '', 'base64').toString()
    }

    function u(t, n) {
        const u = s(t),
            o = (n || c).exec(u);
        return decodeURIComponent(o ? o[1] : '')
    }
}), "cfb703", ["ba7a76", "d1b3af"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.WishlistDeleteFromListApiSession = {
        defaultProps: {},
        propTypes: {}
    };
    t.fullyQualifiedName = 'Saved.v1.WishlistDeleteFromListApiSession';
    e.WishlistDeleteFromListApiSessionEvent = function(s) {
        return {
            eventData: s,
            eventDataSchema: t
        }
    }
}), "d5f6f5", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var u = t(r(d[1]));
    const n = {
        document: void 0,
        getDocument: () => r(d[3])(d[2]).then(u.default).then((t => t.default)),
        name: 'CreateWishlistMutation',
        type: 'mutation',
        operationId: 'c3e7e1b9e9f501efcac10d111706a86093d48bb8377a772b26fc0114ba5dc934'
    };
    e.default = n
}), "d7b2e2", ["ba7a76", "45f788", "d642ab", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function _() {
        const t = r(d[1]);
        return _ = function() {
            return t
        }, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SAVE_TO_LIST_LOCALSTORAGE_UPDATE_KEY = void 0, e.broadcastSaveToListUpdate = function() {
        const t = (0, _().v4)();
        if ((0, o.default)()) {
            try {
                window.sessionStorage ? .setItem(n.LAST_UPDATE_SESSION_STORAGE_KEY, t)
            } catch {}
            try {
                window.localStorage.setItem(c, t)
            } catch (t) {}
        }
    };
    var o = t(r(d[2])),
        n = r(d[3]);
    const c = e.SAVE_TO_LIST_LOCALSTORAGE_UPDATE_KEY = 'save_to_list_update'
}), "e3accc", ["ba7a76", "305dd5", "c916d0", "8e0668"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = r(d[0]);
    e.default = function(o, n, c, s) {
        const u = (0, t.connect)(o, n || {}, c, s);
        return function(t) {
            const o = u(t),
                n = o.prototype.addExtraProps;
            return o.prototype.addExtraProps = function(t) {
                const {
                    store: o,
                    storeSubscription: c,
                    ...s
                } = n.call(this, t);
                return s
            }, o.contextTypes && o.contextType && delete o.contextType, o
        }
    }
}), "e54baf", ["c98c9b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var c = t(r(d[1]));
    const u = {
        document: void 0,
        getDocument: () => r(d[3])(d[2]).then(c.default).then((t => t.default)),
        name: 'BatchDeleteWishlistItemsByWishlistItemIdMutation',
        type: 'mutation',
        operationId: '0439f2269ccd1a67c0d7d7c31f5fabc6709420acbd213fac7f6d334dd808e588'
    };
    e.default = u
}), "f9f96a", ["ba7a76", "45f788", "8a7f14", "057569"]);
__r("a9f4b1").extend({
    "shared.modal error": "An error occurred. Please try again later.",
    "wishlist.toast_message_saved_to_wishlist": "Saved to %{bold_start}%{wishlist_name}%{bold_end}",
    "wish_list.button.change_wish_list": "Change",
    "wishlist.toast_message_removed_from_wishlist": "Removed from %{bold_start}%{wishlist_name}%{bold_end}"
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/c987.d55bd7da8e.js.map