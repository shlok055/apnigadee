__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        s = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = s(r(d[2])),
        n = t(r(d[3])),
        o = r(d[4]),
        u = t(r(d[5])),
        h = t(r(d[6])),
        c = r(d[7]);

    function I() {
        const t = r(d[8]);
        return I = function() {
            return t
        }, t
    }
    var p = t(r(d[9])),
        f = t(r(d[10])),
        w = r(d[11]),
        y = t(r(d[12])),
        _ = t(r(d[13])),
        v = t(r(d[14])),
        b = t(r(d[15])),
        L = r(d[16]),
        M = r(d[17]),
        W = r(d[18]),
        C = r(d[19]),
        P = r(d[20]),
        T = t(r(d[21])),
        D = t(r(d[22])),
        S = r(d[23]),
        x = r(d[24]),
        E = t(r(d[25])),
        k = r(d[26]);
    e.default = (0, u.default)((function({
        saveToListModal: t
    }) {
        if (!t) return {};
        const {
            lists: s,
            visible: l,
            entity: n,
            entityId: o,
            entityType: u
        } = t, {
            checkIn: h
        } = n || {};
        return {
            storedLists: s,
            visible: l,
            listingCheckinDate: h,
            entityId: o,
            entityType: u
        }
    }), {
        setLists: W.setLists,
        setEntityMap: W.setEntityMap,
        setMutations: W.setMutations,
        pdpLoadWithWishlistId: W.pdpLoadWithWishlistId,
        onSearchParamChange: W.onSearchParamChange
    })((function(t) {
        const {
            setLists: s,
            setEntityMap: u,
            setMutations: W,
            searchContext: N,
            listingId: F,
            storedLists: A,
            visible: O,
            listingCheckinDate: R,
            pdpLoadWithWishlistId: U,
            onSearchParamChange: Q,
            entityId: j,
            entityType: q
        } = t, B = (0, h.default)(), [G, H] = (0, l.useState)(O);
        O && !G && H(!0);
        const {
            check_in: V,
            federated_search_id: Z
        } = B, z = F || (j && 'listing' === q ? j : void 0), {
            data: J
        } = (0, I().useMinimalistClientSideQuery)(y.default, {
            variables: {
                federatedSearchId: N ? .federated_search_id ? ? Z,
                listingId: z,
                isExperiencesSearch: N ? .refinement_paths ? .startsWith("/experiences") || "experience_tab" === B ? .currentTab
            },
            skip: !O
        }), K = (0, I().useNiobeMinimalistClient)(), [X, Y] = (0, l.useReducer)((t => t + 1), 0), {
            data: $,
            refetch: tt
        } = (0, I().useMinimalistClientSideQuery)(f.default, {
            variables: {},
            skip: !n.default.isLoggedIn()
        }, X), et = !(0, c.useWaitForDelay)({
            event: 'all-settled',
            priority: 'background'
        }) && !G, {
            data: it,
            loading: st,
            refetch: at,
            fetchMore: lt
        } = (0, I().useMinimalistClientSideQuery)(p.default, {
            variables: {
                limit: w.PAGE_SIZE,
                offset: 0
            },
            skip: !n.default.isLoggedIn() || et,
            optimisticCacheVersion: X
        }), [dt] = (0, x.useOptimisticMutation)(_.default, {
            onCompleted(t, s) {
                const l = (0, P.extractId)(t ? .wishlistId) ? ? null,
                    n = it ? .presentation ? .wishlistIndexPage ? .wishlists ? .find((s => s ? .id === t ? .wishlistId));
                (0, x.optimisticallyUpdateWishlistNiobeCache)({
                    client: K,
                    item: {
                        productType: t ? .savedItemType ? ? null,
                        productId: t ? .savedItemId ? ? null,
                        wishlistId: l,
                        wishlistItemId: s ? .addWishlistItem ? .wishlistItemId ? ? null
                    },
                    shouldAddToList: !0,
                    indexPageData: it,
                    itemsData: $
                }), Y(), null == n && at(), H(!0)
            }
        }), [nt] = (0, x.useOptimisticMutation)(v.default, {
            onStart(t) {
                const s = (t ? .wishlistItemIds ? ? []).map(String),
                    l = ($ ? .presentation ? .wishlistIndexPage ? .wishlistItems ? ? []).filter(T.default).filter((t => t.wishlistItemId && s ? .includes(t.wishlistItemId)));
                l.forEach((t => {
                    (0, x.optimisticallyUpdateWishlistNiobeCache)({
                        client: K,
                        item: {
                            productType: t.productType ? ? null,
                            productId: t.productId ? ? null,
                            wishlistId: t.wishlistId ? ? null,
                            wishlistItemId: t.wishlistItemId ? ? null
                        },
                        shouldAddToList: !1,
                        indexPageData: it,
                        itemsData: $
                    })
                })), l.length > 0 && Y()
            },
            onCompleted(t, s) {
                const {
                    failedToDeleteWishlistItemIds: l
                } = s ? .batchDeleteWishlistItemsByWishlistItemId ? ? {}, n = ($ ? .presentation ? .wishlistIndexPage ? .wishlistItems ? ? []).filter(T.default).filter((t => t.wishlistItemId && l ? .includes(t.wishlistItemId)));
                n.forEach((t => {
                    (0, x.optimisticallyUpdateWishlistNiobeCache)({
                        client: K,
                        item: {
                            productType: t.productType ? ? null,
                            productId: t.productId ? ? null,
                            wishlistId: t.wishlistId ? ? null,
                            wishlistItemId: t.wishlistItemId ? ? null
                        },
                        shouldAddToList: !0,
                        indexPageData: it,
                        itemsData: $
                    })
                })), n.length > 0 && Y(), H(!0)
            }
        }), [ot] = (0, x.useOptimisticMutation)(b.default, {
            onCompleted(t, s) {
                const {
                    name: l
                } = t ? ? {}, {
                    wishlistId: n
                } = s ? .createWishlist ? ? {};
                l && n && it && (0, x.optimisticallyCreateWishlist)({
                    client: K,
                    indexPageData: it,
                    name: l,
                    wishlistId: n
                })
            }
        }), rt = J ? (0, L.getDefaultNameFromPayload)(J) : void 0, ut = R ? ? V ? ? void 0, ht = (0, l.useMemo)((() => (0, L.legacyListsFromPayload)(it)), [it]), ct = (0, l.useMemo)((() => (0, M.buildEntityMap)({}, $ ? .presentation ? .wishlistIndexPage ? .wishlistItems)), [$ ? .presentation ? .wishlistIndexPage ? .wishlistItems]), It = (0, o.useLocation)(), pt = (0, o.useHistory)(), mt = new URLSearchParams(It.search);
        (0, l.useEffect)((() => {
            if (N ? .refinement_paths) {
                const {
                    query_place_id: t,
                    federated_search_id: s
                } = N || {}, {
                    category_tag: l,
                    search_type: n
                } = B;
                Q(l, s, t, n)
            }
        }), [N, B, Q]), (0, l.useEffect)((() => {
            mt.has('saved_to_wishlist_id') && (U(mt.get('saved_to_wishlist_id')), mt.delete('saved_to_wishlist_id'), pt.replace({
                search: mt.toString()
            }))
        })), (0, l.useEffect)((() => {
            s(ht ? ? null)
        }), [ht, s, A]), (0, l.useEffect)((() => {
            u(ct)
        }), [ct, u]);
        const ft = C.Flagger.isTrebuchetLaunched((0, D.default)('wishlist_sync_mirror_writes_web')),
            gt = (0, S.useWishlistNiobeMutations)({
                addWishlistItem: dt,
                batchDeleteWishlistItems: nt,
                createWishlist: ot,
                skip: !ft
            });
        return (0, S.useSaveToListStoreDebugLogger)(), (0, l.useEffect)((() => {
            W({ ...gt,
                wipRefetch: at,
                wipFetchMore: lt,
                itemsRefetch: tt
            })
        }), [W, dt, nt, ot, at, lt, tt, gt]), (0, k.jsx)(E.default, { ...t,
            defaultNameLocation: rt ? ? void 0,
            listingCheckinDate: ut,
            loading: st || et
        })
    }))
}), "03c6db", ["ba7a76", "45f788", "07aa1f", "06a99e", "1e300f", "e54baf", "6ff0bc", "d98fc9", "068abc", "bf05b2", "0d158b", "d8fd38", "142790", "bd6cf7", "f9f96a", "d7b2e2", "3f2e27", "d2fdc9", "9cc610", "dcc72a", "cfb703", "58861b", "2c6bf9", "07b2f9", "3ba847", "a748dd", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function c() {
        const s = t(r(d[1]));
        return c = function() {
            return s
        }, s
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getSearchContext = function() {
        const t = c().default.parse((document.referrer || '').replace(/.*?\?/, '')),
            s = t.check_in || t.check_out ? [t.check_in, t.check_out] : void 0,
            o = t.guests ? Number.parseInt(t.guests, 10) : void 0;
        return {
            search_id: t.s_tag || '',
            mobile_search_session_id: '',
            location: t.location,
            dates: s,
            guests: o
        }
    }, e.getSearchContextFromRoute = function(t) {
        const s = c().default.parse((t || '').replace(/.*?\?/, '')),
            o = s.check_in || s.check_out ? [s.check_in, s.check_out] : void 0,
            n = s.guests ? Number.parseInt(s.guests, 10) : void 0;
        return {
            search_id: s.searchId || '',
            mobile_search_session_id: '',
            federated_search_id: s.federatedSearchId || '',
            section_id: s.sectionId || '',
            location: s.location,
            dates: o,
            guests: n
        }
    }
}), "3e4da9", ["ba7a76", "e950a3"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.PdpElementActionEvent = {
        defaultProps: {
            schema: 'com.airbnb.jitney.event.logging.Pdp:PdpElementActionEvent:1.0.0',
            event_name: 'pdp_element_action'
        },
        propTypes: {}
    };
    t.fullyQualifiedName = 'Pdp.v1.PdpElementActionEvent';
    e.PdpElementActionEventEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "5046fa", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, c, f) {
        const o = (0, u.default)(c);
        (0, n.useEffect)((() => (document.addEventListener(t, o, f), () => {
            document.removeEventListener(t, o, f)
        })), [t, o, f])
    };
    var n = r(d[1]),
        u = t(r(d[2]))
}), "5aa0ce", ["ba7a76", "07aa1f", "d39953"]);
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
    }), e.logMarketplacePdpElementActionEvent = E, e.logPdpElementActionEvent = p, e.logPdpElementActionEventByTemplate = function(t, n) {
        switch (t) {
            case u.CHINA:
                return s(n);
            case u.MARKETPLACE:
                return E(n);
            case u.SELECT:
                return f(n);
            default:
                return E(n)
        }
    };
    var c = t(r(d[2])),
        o = t(r(d[3])),
        u = r(d[4]),
        l = r(d[5]);

    function p(t, u, p) {
        const f = {
            schema: n().PdpElementActionEvent,
            event_data: {
                operation: 2,
                pdp_page_type: t,
                pdp_impression_id: (0, o.default)(),
                product_type: 3,
                search_context: (0, l.getSearchContext)(),
                ...u
            }
        };
        p ? c.default.queueJitneyEvent(f) : c.default.logJitneyEvent(f)
    }

    function f(t) {
        p(2, t)
    }

    function E(t) {
        p(1, t)
    }

    function s(t) {
        p(9, t)
    }
}), "7b6aa3", ["ba7a76", "5046fa", "c8b97a", "eb5cb3", "e36252", "3e4da9"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function s() {
        const t = r(d[1]);
        return s = function() {
            return t
        }, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.logSavedClickToWishlistEvent = function({
        isSavedToList: t,
        wishlistedItemId: o
    }) {
        const l = {
            schema: s().SavedClickToWishlistEvent,
            event_data: {
                exploreSectionId: '',
                mobileSearchSessionId: '',
                operation: 2,
                pdp_context: {},
                target: 'wishlist_button',
                wishlistedItemId: o,
                wishlistItemType: 1,
                wishlistMethod: t ? 2 : 1,
                wishlistSource: 2
            }
        };
        n.default.logJitneyEvent(l)
    };
    var n = t(r(d[2]))
}), "985888", ["ba7a76", "c4a72c", "c8b97a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        s = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = s(r(d[2])),
        n = r(d[3]),
        o = t(r(d[4])),
        c = t(r(d[5])),
        u = r(d[6]),
        h = r(d[7]),
        f = r(d[8]),
        p = t(r(d[9])),
        L = t(r(d[10])),
        _ = r(d[11]),
        y = r(d[12]),
        C = r(d[13]),
        v = r(d[14]),
        S = r(d[15]),
        T = r(d[16]),
        E = t(r(d[17])),
        k = r(d[18]),
        b = t(r(d[19])),
        F = t(r(d[20])),
        w = r(d[21]);

    function I(t, s) {
        return o.default.isLoggedIn() && !t && !s && 'visible' === document.visibilityState
    }

    function M({
        saveToListModal: t
    }, {
        loading: s
    }) {
        if (!t) return {};
        const {
            entity: l,
            entityId: n,
            entityType: o,
            isCreatingList: c,
            isListsCacheValid: u,
            lastError: h,
            lists: f,
            requiresSignup: p,
            savingFrom: L,
            visible: _,
            wipFetchMore: y
        } = t;
        return {
            entity: l,
            entityId: n,
            entityType: o,
            lastError: h,
            lists: f,
            savingFrom: L,
            shouldRenderCreatingList: c,
            shouldRenderFetchingLists: s,
            shouldRenderSignup: p,
            visible: _,
            isListsCacheValid: u,
            wipFetchMore: y
        }
    }

    function V({
        closed: t,
        createListClicked: s,
        defaultNameLocation: o,
        lists: c,
        entity: _,
        entityId: M,
        entityType: V,
        globalFilters: A = {},
        listClicked: x,
        lastError: R,
        loading: O,
        isListsCacheValid: P,
        refetchLists: j,
        saveWithoutDates: D,
        savingFrom: U,
        searchContext: N,
        setLastError: W,
        setListsCacheValidity: Y,
        signupModalFinished: G,
        shouldRenderSignup: K,
        shouldRenderFetchingLists: $,
        visible: q,
        listingCheckinDate: H,
        newToastUpdated: z,
        mutationId: B,
        wipFetchMore: J
    }) {
        const [Q, X] = (0, l.useState)(!1), {
            category_tag: Z,
            place_id: ee,
            search_type: te
        } = A, {
            federated_search_id: ie
        } = N || {}, se = (0, l.useCallback)((() => {
            R && W(null)
        }), [R, W]), ae = (0, l.useCallback)((() => {
            j()
        }), [j]), le = () => {
            t()
        }, de = () => {
            X(!1), G()
        }, ne = (0, f.useEvent)((() => {
            I(P, !!O) && ae()
        })), oe = (0, f.useEvent)((t => {
            if (t.key === y.SAVE_TO_LIST_LOCALSTORAGE_UPDATE_KEY) {
                const s = window.sessionStorage ? .getItem(T.LAST_UPDATE_SESSION_STORAGE_KEY);
                t.newValue !== s && ('hidden' === document.visibilityState ? Y({
                    isValid: !1
                }) : O || ae())
            }
        }));
        (0, p.default)('storage', oe), (0, L.default)('visibilitychange', ne), (0, l.useEffect)((() => {
            I(P, !!O) && ae()
        }), [ae, P, c, O]), (0, l.useEffect)((() => () => {
            se(), z && z({
                newToastVisible: !1
            })
        }), []);
        const re = (c || []).filter(S.isNotOnlineExperienceShoppingList);
        K && !Q && q && (X(!0), le(), (0, u.openSignupModal)({
            authTriggerType: h.AuthTriggerTypes.WISHLIST,
            flow: 'wishlist',
            onFinishedFlow: () => {
                setTimeout(de, 0)
            },
            onSignupModalClose: () => {
                X(!1)
            }
        }));
        const ce = (() => {
            if (o) return 'recently_viewed' === U ? o : `${o} ${(0,k.getYearFromCheckinDateString)(H)}`
        })();
        return K ? null : (0, w.jsxs)(w.Fragment, {
            children: [(0, w.jsx)(b.default, {}), (0, w.jsx)(F.default, {}), (0, w.jsx)(E.default, {
                lists: re || null,
                onClose: le,
                onCreateListPress: (t, l) => {
                    M && V && (se(), (0, C.logMarketplacePdpElementActionEvent)({
                        pdp_context: {
                            fb_logged_in: String((0, n.getCookieSync)('fbs').value),
                            is_saved_to_list: 'false'
                        },
                        product_id: M,
                        section: 'book_it_module',
                        target: 'save_wishlist'
                    }), s(t, _, M, V, U || '', D || !1, l, {
                        categoryTag: Z,
                        placeId: ee,
                        federatedSearchId: ie,
                        searchType: te
                    }, B))
                },
                onListPress: t => {
                    M && V && _ && ((0, C.logMarketplacePdpElementActionEvent)({
                        pdp_context: {
                            fb_logged_in: String((0, n.getCookieSync)('fbs').value),
                            is_saved_to_list: 'false'
                        },
                        product_id: M,
                        section: 'book_it_module',
                        target: 'save_wishlist'
                    }), (0, v.logSavedClickToWishlistEvent)({
                        wishlistedItemId: M,
                        isSavedToList: !1
                    }), x(t, _, M, V, U || '', {
                        categoryTag: Z,
                        placeId: ee,
                        federatedSearchId: ie,
                        searchType: te
                    }, B), se())
                },
                shouldRenderFetchingLists: !!$,
                defaultListName: ce,
                visible: !!q,
                searchSessionId: ie,
                fetchMore: J
            })]
        })
    }(0, c.default)(M, {
        closed: _.closed,
        createListClicked: _.createListClicked,
        refetchLists: _.refetchLists,
        listClicked: _.listClicked,
        setLastError: _.setLastError,
        signupModalFinished: _.signupModalFinished,
        setListsCacheValidity: _.setListsCacheValidity
    })(V);
    e.default = (0, c.default)(M, {
        closed: _.closed,
        createListClicked: _.createListClicked,
        refetchLists: _.refetchLists,
        listClicked: _.listClicked,
        setLastError: _.setLastError,
        signupModalFinished: _.signupModalFinished,
        setListsCacheValidity: _.setListsCacheValidity,
        newToastUpdated: _.newToastUpdated
    })(V)
}), "a748dd", ["ba7a76", "45f788", "07aa1f", "13babd", "06a99e", "e54baf", "4798c3", "5eb3f8", "f4e9c4", "567629", "5aa0ce", "9cc610", "e3accc", "7b6aa3", "985888", "efdd45", "8e0668", "f1a4ed", "3ba847", "c1f929", "330a78", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        s = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = s(r(d[2])),
        n = t(r(d[3])),
        l = r(d[4]),
        u = s(r(d[5])),
        c = r(d[6]);
    const w = { ...u.defaultNewToast,
        newToastVisible: !1
    };
    e.default = (0, n.default)((function(t) {
        const s = t ? .saveToListModal ? .newToast;
        if (s) {
            const {
                actionText: t,
                title: o,
                message: n,
                wishlistName: l,
                imgSrc: u,
                onActionPress: c,
                newToastVisible: w,
                isError: T
            } = s;
            return {
                actionText: t,
                title: o,
                message: n,
                wishlistName: l,
                imgSrc: u,
                onActionPress: c,
                newToastVisible: w,
                isError: T
            }
        }
        return w
    }), {
        newToastUpdated: l.newToastUpdated
    })((function({
        newToastUpdated: t,
        newToastVisible: s,
        ...n
    }) {
        const l = (0, o.useCallback)((() => t({
            newToastVisible: !1
        })), [t]);
        return (0, c.jsx)(u.default, {
            newToast: n,
            show: s,
            onDismiss: l
        })
    }))
}), "c1f929", ["ba7a76", "45f788", "07aa1f", "e54baf", "9cc610", "aff8f3", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.SavedClickToWishlistEvent = {
        defaultProps: {
            schema: 'com.airbnb.jitney.event.logging.Saved:SavedClickToWishlistEvent:3.0.0',
            event_name: 'saved_click_to_wishlist',
            target: 'wishlist_button',
            operation: 2
        },
        propTypes: {}
    };
    t.fullyQualifiedName = 'Saved.v3.SavedClickToWishlistEvent';
    e.SavedClickToWishlistEventEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "c4a72c", []);
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
    }), e.SELECT = e.MARKETPLACE = e.CHINA = void 0, e.getTemplate = function(t) {
        switch (t) {
            case 1:
                return u;
            case 2:
                return c;
            case 9:
                return l;
            case 3:
                return s;
            case 18:
                return o;
            default:
                return null
        }
    };
    const u = e.MARKETPLACE = 'marketplace',
        c = e.SELECT = 'select',
        l = e.CHINA = 'china',
        s = 'luxury',
        o = 'hotel',
        f = [u, c, l, s, o];
    n().default.oneOf(f)
}), "e36252", ["ba7a76", "b56f5a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setImpressionId = e.resetImpressionId = e.generateId = e.default = void 0;
    var s = r(d[0]);
    let t;
    const n = () => `p3_${(0,s.computeBev)('P3')}`;
    e.generateId = n;
    const o = () => {
        t = n()
    };
    e.resetImpressionId = o;
    e.setImpressionId = s => {
        t = s
    }, o();
    e.default = () => t
}), "eb5cb3", ["b4aab0"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isNotOnlineExperienceShoppingList = function(t) {
        return t ? .created_by !== n
    };
    const n = 'online_experiences_ios'
}), "efdd45", []);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/save-to-list/containers/SaveToListModalContainerWithApiV3.6de2d5b16e.js.map