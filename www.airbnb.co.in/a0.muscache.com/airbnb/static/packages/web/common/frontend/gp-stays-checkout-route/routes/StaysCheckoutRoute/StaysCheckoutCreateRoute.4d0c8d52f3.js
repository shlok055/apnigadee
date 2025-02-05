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
    }), e.default = void 0;
    var o = t(r(d[2])),
        n = r(d[3]),
        h = r(d[4]);
    e.default = new class {
        constructor() {
            this.history = void 0, this.historyCallback = void 0, this.lastLoggedPathname = void 0, this.unlistenHistory = void 0, this.isClientRouteRequest = !1, this.history = void 0, this.unlistenHistory = void 0, this.historyCallback = void 0, this.lastLoggedPathname = void 0
        }
        setHistoryListener(t, s) {
            this.history || (this.history = t, this.unlistenHistory = t.listen(this.onHistoryChange.bind(this)), void 0 === this.lastLoggedPathname && this.history.location && (this.lastLoggedPathname = this.history.location.pathname)), s && s !== this.historyCallback && (this.historyCallback = s)
        }
        onHistoryChange(t, s) {
            this.isClientRouteRequest = !0, this.historyCallback && this.historyCallback(t, s)
        }
        logImpression({
            universalPageName: t,
            subpageName: l,
            eventData: u,
            eventDataSchema: v,
            impressionUuid: c,
            pageRequestMethod: y
        }) {
            (0, h.getPageRequestMethod)(this.isClientRouteRequest).then((h => {
                const p = {
                    schema: s().UniversalPageImpressionEvent,
                    event_data: {
                        page_name: t,
                        subpage_name: l,
                        referrer: document.referrer || 'unknown',
                        page_request_method: y || h,
                        event_data: u,
                        event_data_schema: v,
                        impression_uuid: c,
                        navigation_type: (0, n.getNavigationType)(),
                        url: document.location.href
                    }
                };
                o.default.logJitneyEvent(p)
            }))
        }
        hasMovedToNewPage(t, s, o) {
            return 'POP' === s || 'PUSH' === s || !!o && 'REPLACE' === s && t.pathname !== this.lastLoggedPathname
        }
    }
}), "007d44", ["ba7a76", "bf254a", "c8b97a", "5d602b", "6f10f0"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        input: t,
        isCompact: n,
        queryRef: s,
        location: c
    }) {
        const p = window.location ? .pathname,
            u = s && s.options ? .operation ? .operationId;
        t.orderId && !t.confirmationCode && (0, o.airdogCount)('stays_checkout.orchestration.missing_ids.missing_confirmation_code', 1, {
            isCompact: n,
            pathname: p,
            operationId: u
        });
        t.confirmationCode && !t.orderId && (0, o.airdogCount)('stays_checkout.orchestration.missing_ids.missing_orderId', 1, {
            isCompact: n,
            pathname: p,
            operationId: u
        })
    };
    var o = r(d[0])
}), "02734c", ["3e4681"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getCheckoutMutationVariable = function({
        input: t,
        getPersistentQPData: n
    }) {
        const o = y(t, n);
        return {
            input: { ...C(t),
                quickPayData: o ? {
                    paymentDataRequest: o,
                    quickPayCheckoutId: t.checkoutId
                } : null
            }
        }
    }, e.getCheckoutQueryVariable = function({
        checkoutId: t,
        confirmationCodeOverride: n,
        location: o,
        orderId: s,
        persistentQueryMetadata: u,
        getPersistentQPData: p,
        mockIdentifier: f
    }) {
        const I = { ...(0, l.coerceStaysCheckoutParams)((0, c.default)(o.search)),
            checkoutId: t,
            persistentQueryMetadata: u
        };
        n && (I.code = n);
        s && (I.orderId = s);
        const h = y(I, p);
        return {
            input: { ...C(I),
                quickPayData: h ? {
                    paymentDataRequest: h,
                    quickPayCheckoutId: t
                } : null
            },
            mockIdentifier: f
        }
    }, e.getPersistentQueryMetadata = function(t) {
        const n = t ? .persistentQueryMetadata || {},
            o = t ? .queryRef ? .result ? .data ? .presentation ? .stayCheckout ? .sections ? .metadata ? .clientLoggingContext ? .internalFlags;
        if (o && o.length > 0) {
            const {
                persistedInternalFlags: t
            } = n;
            t ? o.forEach((n => t.add(n))) : n.persistedInternalFlags = new Set(o)
        }
        return n
    }, e.reportStaysCheckoutInputError = function(t, n) {
        const {
            bookingAttemptId: u,
            confirmationCode: c,
            productId: l,
            quickPayData: p
        } = t, f = {
            hasBookingAttemptId: !!u,
            hasConfirmationCode: !!c,
            hasProductId: !!l,
            hasQuickPayData: !!p,
            origin: n
        };
        (0, o.airdogCount)('stays_checkout.api.input_error', 1, f);
        const I = window.location ? .search;
        (0, s.reportError)(new Error('[Checkout][Stays] Checkout API Input Error'), {
            extra: { ...t,
                origin: n,
                search: I
            }
        })
    };
    var n = r(d[1]),
        o = r(d[2]),
        s = r(d[3]),
        u = t(r(d[4])),
        c = t(r(d[5])),
        l = r(d[6]),
        p = r(d[7]),
        f = r(d[8]),
        I = r(d[9]);

    function y(t, n) {
        const o = n();
        if (null === o) return null;
        const s = JSON.parse(o);
        (0, p.shouldYieldSelectedPaymentOption)(s, t) && s.payment_options_info && (s.payment_options_info.selected_payment_option = void 0);
        const u = (0, f.convertToStableObjectOrder)(s);
        return JSON.stringify(u)
    }

    function h(t) {
        return t && I.airbnbOrgGuestTypes.includes(t) ? t : void 0
    }

    function k({
        focusedListing: t,
        checkin: o,
        checkout: s,
        code: u,
        otherCheckin: c,
        otherCheckout: l,
        otherCode: p,
        otherListing: f,
        productId: I,
        splitStaysId: y
    }) {
        if (!(f && void 0 !== t && c && l && y)) return;
        const h = {
                checkinDate: o,
                checkoutDate: s,
                confirmationCode: u,
                productId: I ? (0, n.createGlobalId)('StayListing', I) : null
            },
            k = {
                checkinDate: c,
                checkoutDate: l,
                confirmationCode: p,
                productId: f ? (0, n.createGlobalId)('StayListing', f) : null
            };
        return {
            splitStaysId: y,
            stays: 0 === t ? [h, k] : [k, h]
        }
    }
    const b = t => {
        const {
            entryPoint: n,
            persistedInternalFlags: o
        } = t, s = Array.from(new Set([...o ? ? [], 'LAUNCH_LOGIN_PHONE_AUTH']));
        return s.sort(), {
            entryPoint: n,
            internalFlags: s
        }
    };

    function C(t) {
        const {
            addOnType: o,
            affiliateId: s,
            airbnbOrgGuestType: c,
            airbnbOrgResponseId: l,
            bookingAttemptId: p,
            causeId: f,
            checkin: I,
            checkout: y,
            code: C,
            couponCode: O,
            disasterId: P,
            guestCheckinTime: S,
            guestCurrency: T,
            insuranceCode: v,
            isLrBooking: _,
            isWorkTrip: D,
            luxuryListingQuoteId: A,
            numberOfAdults: L,
            numberOfChildren: N,
            numberOfInfants: G,
            numberOfInstallments: Q,
            numberOfPets: E,
            openHomesAffiliated: q,
            orderId: F,
            pendingGuestEmail: M,
            pendingGuestId: w,
            pendingTripToken: R,
            persistentQueryMetadata: x,
            photoId: H,
            productId: B,
            ratePlanId: W,
            selectedCancellationPolicyId: j,
            specialOfferId: J,
            isWaitToPay: U
        } = t, V = u.default.current().curr;
        return {
            businessTravel: {
                pendingGuestEmail: M,
                pendingGuestId: w,
                pendingTripToken: R,
                workTrip: D
            },
            bookingAttemptId: p,
            checkinDate: I,
            checkoutDate: y,
            splitStays: k(t),
            confirmationCode: C,
            couponCode: O,
            guestCheckinTime: S,
            guestCounts: 'number' == typeof(L ? ? N ? ? G ? ? E) ? {
                numberOfAdults: Number(L) || 1,
                numberOfChildren: Number(N) || 0,
                numberOfInfants: Number(G) || 0,
                numberOfPets: Number(E) || 0
            } : null,
            guestCurrencyOverride: T || V || null,
            insuranceCode: v,
            listingDetail: {
                photoId: H
            },
            lux: {
                isLrBooking: _,
                luxuryListingQuoteId: A
            },
            metadata: b(x),
            numberOfInstallments: Q,
            org: {
                affiliateId: s ? String(s) : void 0,
                causeId: Number(f) || void 0,
                disasterId: Number(P) || void 0,
                airbnbOrgGuestType: h(c),
                airbnbOrgResponseId: void 0 !== l ? String(l) : void 0,
                openHomesAffiliated: !!q || void 0
            },
            orderId: F,
            productId: B ? (0, n.createGlobalId)('StayListing', B) : null,
            ratePlanId: W,
            selectedCancellationPolicyId: j,
            specialOfferId: J,
            addOn: {
                carbonOffsetParams: {
                    isSelected: 'CARBON_OFFSET' === o
                }
            },
            isWaitToPay: U
        }
    }
}), "0f60a4", ["ba7a76", "56afe0", "3e4681", "f2f40f", "06a99e", "a7c4ef", "261c30", "9f33eb", "735391", "dc9188"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.QueryParamKeys = void 0, e.buildUrlInfo = function(t, o) {
        return {
            urlParams: t.params,
            queryParams: _((0, n.default)(o.search)),
            location: o
        }
    }, e.coerceStaysCheckoutParams = _;
    var n = t(r(d[1])),
        o = (function(t) {
            return t.debug = "debug", t.is_lr_booking = "isLrBooking", t.isLrBooking = "isLrBooking", t.work_trip = "isWorkTrip", t.is_work_trip = "isWorkTrip", t.isWorkTrip = "isWorkTrip", t.open_homes_affiliated = "openHomesAffiliated", t.openHomesAffiliated = "openHomesAffiliated", t.remove_coupon_action = "removeCouponAction", t.removeCouponAction = "removeCouponAction", t.skip_coupon_auto_apply = "skipCouponAutoApply", t.skipCouponAutoApply = "skipCouponAutoApply", t.typed_payments = "typedPayments", t.typedPayments = "typedPayments", t.vacation_rental = "vacationRental", t.vacationRental = "vacationRental", t.isWaitToPay = "isWaitToPay", t
        })(o || {}),
        s = (function(t) {
            return t.affiliate_id = "affiliateId", t.affiliateId = "affiliateId", t.airbnb_org_guest_type = "airbnbOrgGuestType", t.airbnbOrgGuestType = "airbnbOrgGuestType", t.booking_attempt_id = "bookingAttemptId", t.bookingAttemptId = "bookingAttemptId", t.campaign_param = "campaignParam", t.campaignParam = "campaignParam", t.code = "code", t.otherCode = "otherCode", t.other_code = "otherCode", t.orderId = "orderId", t.coupon_code = "couponCode", t.couponCode = "couponCode", t.display_currency = "guestCurrency", t.displayCurrency = "guestCurrency", t.guest_currency = "guestCurrency", t.guestCurrency = "guestCurrency", t.partnership_external_id = "partnershipExternalId", t.partnershipExternalId = "partnershipExternalId", t.pendingGuestEmail = "pendingGuestEmail", t.pendingTripToken = "pendingTripToken", t.ratePlanId = "ratePlanId", t
        })(s || {}),
        u = (function(t) {
            return t.cause_id = "causeId", t.causeId = "causeId", t.disaster_id = "disasterId", t.disasterId = "disasterId", t.airbnb_org_response_id = "airbnbOrgResponseId", t.airbnbOrgResponseId = "airbnbOrgResponseId", t.guest_checkin_time = "guestCheckinTime", t.guestCheckinTime = "guestCheckinTime", t.adults = "numberOfAdults", t.number_of_adults = "numberOfAdults", t.numberOfAdults = "numberOfAdults", t.children = "numberOfChildren", t.number_of_children = "numberOfChildren", t.numberOfChildren = "numberOfChildren", t.guests = "numberOfGuests", t.number_of_guests = "numberOfGuests", t.numberOfGuests = "numberOfGuests", t.infants = "numberOfInfants", t.number_of_infants = "numberOfInfants", t.numberOfInfants = "numberOfInfants", t.pets = "numberOfPets", t.number_of_pets = "numberOfPets", t.numberOfPets = "numberOfPets", t.otherAdults = "otherAdults", t.other_adults = "otherAdults", t.otherChildren = "otherChildren", t.other_children = "otherChildren", t.otherGuests = "otherGuests", t.other_guests = "otherGuests", t.otherInfants = "otherInfants", t.other_infants = "otherInfants", t.otherPets = "otherPets", t.other_pets = "otherPets", t.selected_cancellation_policy_id = "selectedCancellationPolicyId", t.selectedCancellationPolicyId = "selectedCancellationPolicyId", t.focusedListing = "focusedListing", t.focused_listing = "focusedListing", t.fov_flow_canceled = "fovFlowCanceled", t.fovFlowCanceled = "fovFlowCanceled", t
        })(u || {}),
        c = (function(t) {
            return t.guest_id = "guestId", t.guestId = "guestId", t.luxury_listing_quote_id = "luxuryListingQuoteId", t.luxuryListingQuoteId = "luxuryListingQuoteId", t.number_of_installments = "numberOfInstallments", t.numberOfInstallments = "numberOfInstallments", t.pending_traveler_id = "pendingTravelerId", t.pendingTravelerId = "pendingTravelerId", t.pending_guest_id = "pendingGuestId", t.pendingGuestId = "pendingGuestId", t.insuranceCode = "insuranceCode", t.addOnType = "addOnType", t.product_id = "productId", t.productId = "productId", t.hosting_id = "productId", t.otherListing = "otherListing", t.other_listing = "otherListing", t.security_deposit_id = "securityDepositId", t.securityDepositId = "securityDepositId", t.special_offer_id = "specialOfferId", t.specialOfferId = "specialOfferId", t.splitStaysId = "splitStaysId", t.split_stays_id = "splitStaysId", t.photoId = "photoId", t
        })(c || {}),
        p = (function(t) {
            return t.checkin = "checkin", t.checkout = "checkout", t.check_in = "checkin", t.check_out = "checkout", t.otherCheckin = "otherCheckin", t.other_check_in = "otherCheckin", t.otherCheckout = "otherCheckout", t.other_check_out = "otherCheckout", t
        })(p || {}),
        l = (function(t) {
            return t.sectionIds = "sectionIds", t
        })(l || {});
    const f = e.QueryParamKeys = { ...o,
        ...s,
        ...u,
        ...c,
        ...p,
        ...l
    };

    function _(t, n = !1, p = !1) {
        return Object.entries(t).reduce(((t, [l, _]) => {
            if (p && void 0 === _) return t;
            const h = f[l];
            return h ? o[l] ? '' !== _ && 'string' == typeof _ ? { ...t,
                [h]: 'true' === _
            } : 'boolean' == typeof _ ? { ...t,
                [h]: _
            } : t : u[l] ? '' === _ || 'string' != typeof _ || Number.isNaN(parseInt(_, 10)) ? '' !== _ && 'number' == typeof _ ? { ...t,
                [h]: _
            } : t : { ...t,
                [h]: parseInt(_, 10)
            } : c[l] ? '' !== _ && void 0 !== _ ? { ...t,
                [h]: String(_)
            } : t : '' !== _ || l === s.couponCode || l === s.coupon_code ? { ...t,
                [h]: _
            } : t : n ? { ...t,
                [l]: _
            } : t
        }), {})
    }
}), "261c30", ["ba7a76", "a7c4ef"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        buildEventDataFromProps: t,
        eventDataSchema: n,
        trackReplaceNavigationsToNewPathnames: I = !1,
        universalPageName: E,
        subPageName: D,
        deprecatedIgnorePathnameUpdateForImpressions: b,
        ignorePathnameUpdate: C,
        includeHistoryUpdate: T
    }) {
        if (t && !n) throw new Error('withPagePerformanceScore: You must supply an event data schema if you supply an event data function.');
        return function(A) {
            class L extends s.Component {
                constructor(t) {
                    super(t), this.bootstrappedApiLoggingContext = void 0, this.evaluatedEventDataSchema = void 0, this.evaluatedUniversalPageName = void 0, this.evaluatedSubPageName = void 0, this.eventDataSchema = void 0, this.impressionUuid = void 0, this.isInPageTransition = void 0, this.pageTransitionAcknowledgedByRender = void 0, this.previousPathname = void 0, this.lastLoggedPathname = void 0, this.deprecatedIgnorePathnameUpdateForImpressions = void 0, this.timeout = void 0, this.timestampOfInteractivity = void 0, this.ttfcpRequestAnimationFrameId = void 0, this.ignorePathnameUpdate = void 0, this.includeHistoryUpdate = void 0, this.onPageShow = t => {
                        t.persisted && this.handlePageTransition()
                    }, this.getEvaluatedUniversalPageNames = () => ({
                        evaluatedUniversalPageName: (0, U.evaluateUniversalPageName)(E, this.props),
                        evaluatedSubPageName: D && (0, U.evaluateSubpageName)(D, this.props)
                    }), this.shouldSkipImpressionLogging = () => {
                        const {
                            history: t
                        } = this.props;
                        return 'function' == typeof this.deprecatedIgnorePathnameUpdateForImpressions && t && t.location && this.lastLoggedPathname && this.deprecatedIgnorePathnameUpdateForImpressions({
                            prevPathname: this.lastLoggedPathname,
                            nextPathname: t.location.pathname
                        })
                    }, this.handleNewPageMount = () => {
                        const {
                            history: t
                        } = this.props, n = (0, P.updateJitneyClientSession)();
                        u.default.addContext({
                            client_session_id: n
                        }), (0, v.storePageName)(window.document.URL, this.evaluatedUniversalPageName);
                        const s = this.generateEventData();
                        this.shouldSkipImpressionLogging() || (u.default.setImpressionMetadata({
                            eventDataSchema: this.evaluatedEventDataSchema,
                            initialEventData: s,
                            impressionUuid: this.impressionUuid
                        }), f.default.logImpression({
                            universalPageName: this.evaluatedUniversalPageName,
                            subpageName: this.evaluatedSubPageName,
                            eventData: s,
                            eventDataSchema: this.evaluatedEventDataSchema,
                            impressionUuid: this.impressionUuid
                        }), this.lastLoggedPathname = t && t.location && t.location.pathname), t && f.default.setHistoryListener(t, ((t, n) => {
                            if (f.default.hasMovedToNewPage(t, n, I)) {
                                if (this.pageTransitionAcknowledgedByRender) return void(this.pageTransitionAcknowledgedByRender = !1);
                                this.isInPageTransition = !0
                            } else(0, v.storePageName)(window.document.URL, this.evaluatedUniversalPageName)
                        })), this.ttfcpRequestAnimationFrameId = requestAnimationFrame((() => {
                            const t = {
                                universalPageName: this.evaluatedUniversalPageName,
                                subPageName: this.evaluatedSubPageName,
                                impressionUuid: this.impressionUuid,
                                timestampOfFCP: (0, c.default)().now(),
                                eventData: s,
                                eventDataSchema: this.evaluatedEventDataSchema
                            };
                            w.default.updateCurrentRecorderWithHOCProps(t)
                        })), 'function' == typeof this.ignorePathnameUpdate && w.default.setIgnorePathnameUpdate(this.ignorePathnameUpdate), 'function' == typeof this.includeHistoryUpdate && w.default.setIncludeHistoryUpdate(this.includeHistoryUpdate)
                    }, this.eventDataSchema = n;
                    const {
                        evaluatedUniversalPageName: s,
                        evaluatedSubPageName: l
                    } = this.getEvaluatedUniversalPageNames();
                    this.evaluatedUniversalPageName = s, this.evaluatedSubPageName = l, this.evaluatedEventDataSchema = (0, U.evaluateEventDataSchema)(n, t), this.isInPageTransition = !1, this.timestampOfInteractivity = null, this.previousPathname = t.location && t.location.pathname, this.pageTransitionAcknowledgedByRender = !1, this.impressionUuid = (0, o().v4)();
                    const N = p.default.get('api_logging_context');
                    if (this.bootstrappedApiLoggingContext = void 0, this.deprecatedIgnorePathnameUpdateForImpressions = b, this.ignorePathnameUpdate = C, this.includeHistoryUpdate = T, N) try {
                        'object' == typeof N ? this.bootstrappedApiLoggingContext = N : 'string' == typeof N && (this.bootstrappedApiLoggingContext = JSON.parse(N))
                    } catch (t) {
                        u.default.logJitneyEvent({
                            schema: h().ApiLoggingContextMalformedBootstrapDataEvent,
                            event_data: {
                                payload: N,
                                impression_uuid: this.impressionUuid
                            }
                        })
                    }
                    this.handlePageTransition = this.handlePageTransition.bind(this), this.generateEventData = this.generateEventData.bind(this), this.setContextForPage = this.setContextForPage.bind(this), this.setContextForPage()
                }
                componentDidMount() {
                    window.performance && 'function' == typeof window.performance.mark && window.performance.mark(N.HYDRATE_PERFORMANCE_HOC_MARK), this.handleNewPageMount(), 'addEventListener' in window && window.addEventListener('pageshow', this.onPageShow)
                }
                componentWillUnmount() {
                    this.timeout && window.clearTimeout(this.timeout), 'removeEventListener' in window && window.removeEventListener('pageshow', this.onPageShow), this.ttfcpRequestAnimationFrameId && cancelAnimationFrame(this.ttfcpRequestAnimationFrameId), w.default.clearIgnorePathnameUpdate(), w.default.clearIncludeHistoryUpdate()
                }
                setContextForPage() {
                    (0, l.setPageName)(this.evaluatedUniversalPageName), u.default.addContext({
                        page_name: this.evaluatedUniversalPageName,
                        impression_uuid: this.impressionUuid
                    }), S && u.default.addContext({
                        previous_page_name: S
                    }), S = this.evaluatedUniversalPageName
                }
                handlePageTransition() {
                    this.isInPageTransition = !1, this.previousPathname = this.props.location && this.props.location.pathname, this.timestampOfInteractivity = null;
                    const {
                        evaluatedUniversalPageName: t,
                        evaluatedSubPageName: s
                    } = this.getEvaluatedUniversalPageNames();
                    this.evaluatedUniversalPageName = t, this.evaluatedSubPageName = s, this.evaluatedEventDataSchema = (0, U.evaluateEventDataSchema)(n, this.props), this.impressionUuid = (0, o().v4)(), this.setContextForPage(), u.default.setImpressionMetadata({
                        eventDataSchema: this.evaluatedEventDataSchema,
                        initialEventData: this.generateEventData(),
                        impressionUuid: this.impressionUuid
                    }), this.handleNewPageMount()
                }
                generateEventData() {
                    const n = t && t(this.props);
                    if (n || this.bootstrappedApiLoggingContext) return { ...n,
                        ...this.bootstrappedApiLoggingContext
                    }
                }
                render() {
                    const {
                        history: t,
                        location: n
                    } = this.props;
                    return this.isInPageTransition && this.handlePageTransition(), n && t && this.previousPathname !== n.pathname && (this.previousPathname = n.pathname, f.default.hasMovedToNewPage(n, t.action, I) ? (this.handlePageTransition(), this.pageTransitionAcknowledgedByRender = !0) : (0, v.storePageName)(window.document.URL, this.evaluatedUniversalPageName)), (0, y.jsx)(A, { ...this.props
                    })
                }
            }
            return L.propTypes = { ...A.propTypes
            }, L.defaultProps = { ...A.defaultProps
            }, L.displayName = `withPagePerformanceScore(${A.displayName||A.name||'Component'})`, L
        }
    };
    var s = n(r(d[2]));

    function o() {
        const t = r(d[3]);
        return o = function() {
            return t
        }, t
    }

    function h() {
        const t = r(d[4]);
        return h = function() {
            return t
        }, t
    }
    t(r(d[5]));
    var p = t(r(d[6])),
        u = t(r(d[7])),
        l = r(d[8]),
        v = r(d[9]),
        c = t(r(d[10])),
        P = r(d[11]),
        f = t(r(d[12])),
        U = r(d[13]),
        N = r(d[14]),
        w = t(r(d[15])),
        y = r(d[16]);
    let S
}), "3a6fa9", ["ba7a76", "45f788", "07aa1f", "305dd5", "de621c", "29c0a5", "ef2bc3", "c8b97a", "33392f", "861735", "5d602b", "82f976", "007d44", "f85727", "364f02", "5c13fa", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getConsentIdFromCustomConsentCookie = async function(s, C) {
        const u = C || (await (0, t.getCookieAsync)(n.CONSENT_IDS_KEY)) ? .value;
        return (0, o.deserializeConsentData)(u)[s]
    }, e.getConsentValueFromCustomConsentCookieSync = function(s, C) {
        return (0, o.deserializeConsentData)(C || (0, t.getCookieSync)(n.CONSENT_VALUES_KEY).value)[s]
    };
    var n = r(d[0]),
        t = r(d[1]),
        o = r(d[2])
}), "4ba22d", ["ea44e9", "13babd", "6f4829"]);
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
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.updateCache = void 0;
    var n = t(r(d[1])),
        o = r(d[2]);
    const u = (t, n) => {
        if (n && t ? .paymentDataRequest) {
            const u = JSON.parse(t.paymentDataRequest),
                s = JSON.stringify((0, o.convertToStableObjectOrder)({ ...u,
                    bill_info: { ...u ? .bill_info,
                        bill_item_product_id : n
                    }
                }));
            return { ...t,
                paymentDataRequest: s
            }
        }
        return t
    };
    e.updateCache = ({
        proxy: t,
        stayCheckout: o,
        variables: s
    }) => {
        const c = o ? .sections ? .metadata ? .confirmationCode || void 0,
            p = u(s ? .input ? .quickPayData, c),
            l = {
                input: { ...s.input,
                    confirmationCode: c,
                    quickPayData: p
                }
            };
        t.writeQuery({
            query: n.default,
            variables: l,
            data: {
                presentation: {
                    __typename: 'RootPresentationContainer',
                    stayCheckout: o
                }
            }
        })
    }
}), "5c0dc9", ["ba7a76", "db1041", "735391"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.convertToStableObjectOrder = function t(o) {
        if (Array.isArray(o)) return o.map((o => t(o)));
        if ('object' == typeof o && null !== o) {
            const n = o;
            return 'function' == typeof n.toJSON ? t(n.toJSON()) : Object.keys(o).sort().reduce(((n, c) => (n[c] = t(o[c]), n)), {})
        }
        return o
    }
}), "735391", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getCheckoutPrepareMutationVariables = e.default = void 0;
    var u = t(r(d[1])),
        o = r(d[2]),
        c = r(d[3]),
        s = t(r(d[4])),
        n = t(r(d[5])),
        l = r(d[6]);
    const p = ({
        params: t
    }) => (0, l.getCheckoutMutationVariable)({
        input: { ...t,
            checkoutId: null,
            persistentQueryMetadata: {}
        },
        getPersistentQPData: () => null
    });
    e.getCheckoutPrepareMutationVariables = p;
    e.default = ({
        cookie: t,
        isPrefetch: C,
        location: f,
        loadQuery: h
    }) => {
        const {
            search: y
        } = f, k = (0, c.coerceStaysCheckoutParams)((0, u.default)(y)), _ = t(o.FORM_FACTOR_COOKIE) === o.FORM_FACTOR.COMPACT, M = p({
            params: k
        }), {
            input: O
        } = M, {
            productId: P
        } = O;
        if (!P) {
            const t = C ? 'StaysCheckoutCreateRoute.prepare.prefetch_mutation' : 'StaysCheckoutCreateRoute.prepare_mutation';
            (0, l.reportStaysCheckoutInputError)(O, t)
        }
        const R = h({
            query: s.default,
            variables: M
        });
        return (0, n.default)({
            input: O,
            isCompact: _,
            queryRef: R,
            location: f
        }), {
            queryRef: R
        }
    }
}), "80cc43", ["ba7a76", "a7c4ef", "b679e8", "261c30", "db1041", "02734c", "0f60a4"]);
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
    }), e.updateJitneyClientSession = v;
    var o = r(d[2]),
        s = t(r(d[3])),
        c = t(r(d[4])),
        _ = t(r(d[5])),
        l = t(r(d[6]));
    let u = 0,
        C = null,
        y = !1;

    function p() {
        return s.default.isTrebuchetLaunched((0, c.default)('web_tld_privacy_regions'))
    }

    function f(t) {
        if (t - u < 1800) return !0;
        const n = p(),
            {
                value: s,
                hadConsentRejected: c
            } = (0, o.getCookieSync)('jitney_client_session_id', {
                preConsentDataValue: !n
            }),
            _ = (0, o.getCookieSync)('jitney_client_session_created_at', {
                preConsentDataValue: !n
            }).value,
            l = (0, o.getCookieSync)('jitney_client_session_updated_at', {
                preConsentDataValue: !n
            }).value;
        return c ? (h(), !1) : (C = s, s && _ && l && t - parseInt(_, 10) < 86400 && t - parseInt(l, 10) < 1800)
    }

    function j(t) {
        const s = (0, n().v4)(),
            c = p(),
            {
                hadConsentRejected: _,
                value: l
            } = (0, o.setCookieSync)('jitney_client_session_id', s, {
                preConsentDataValue: !c,
                path: '/'
            });
        (0, o.setCookieSync)('jitney_client_session_created_at', `${t}`, {
            preConsentDataValue: !c,
            path: '/'
        }), (0, o.setCookieSync)('jitney_client_session_updated_at', `${t}`, {
            preConsentDataValue: !c,
            path: '/'
        }), _ ? h() : (u = t, C = l)
    }

    function k(t) {
        requestIdleCallback((() => {
            const n = p();
            (0, o.setCookieSync)('jitney_client_session_updated_at', `${t}`, {
                preConsentDataValue: !n,
                path: '/'
            })
        })), u = t
    }

    function v() {
        const t = (new Date).getTime() / 1e3;
        return f(t) ? k(t) : j(t), y || (y = !0, p() && (0, l.default)({
            toolName: 'Airbnb Functional',
            onUpdateOnly: !0,
            doesCookieHaveConsentCb: () => {
                const t = v();
                _.default.addContext({
                    client_session_id: t
                })
            }
        })), C
    }

    function h() {
        u = 0, C = null, y = !1, (0, o.deleteCookieAsync)('jitney_client_session_id'), (0, o.deleteCookieAsync)('jitney_client_session_created_at'), (0, o.deleteCookieAsync)('jitney_client_session_updated_at')
    }
}), "82f976", ["ba7a76", "305dd5", "13babd", "dcc72a", "2c6bf9", "c8b97a", "e8f252"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getPageName = function(n) {
        return p = h(n), f(p) || (0, t.localStorageGetItem)(o + p, {
            fromAmplify: !0
        }) || void 0;
        var p
    }, e.storePageName = function(c, s) {
        const u = h(c),
            l = f(u);
        if (!l) try {
            (0, t.localStorageSetItem)(o + u, s, {
                expires: p
            })
        } catch (t) {
            const o = t instanceof Error ? t : new Error(String(t));
            (0, n.warn)(o, {
                extra: {
                    fromJitneyCache: !0,
                    pageName: l
                },
                originalError: t instanceof Error ? t : void 0
            })
        }
    };
    var t = r(d[0]),
        n = r(d[1]);
    const o = 'jitney_page_name_',
        p = 36e5,
        c = '[/#?]?$',
        s = '[^/#?]+?',
        u = [{
            path: new RegExp(`/experiences/${s}${c}`),
            pageName: 3003
        }, {
            path: new RegExp(`/rooms/plus/${s}${c}`),
            pageName: 3001
        }, {
            path: new RegExp(`/rooms/${s}${c}`),
            pageName: 3e3
        }, {
            path: new RegExp(`/s/guidebooks${c}`),
            pageName: 1006
        }, {
            path: new RegExp(`/s/${s}${c}`),
            pageName: 2e3
        }];

    function f(t) {
        const n = u.find((({
            path: n
        }) => {
            const o = t.match(n);
            return o && o[0] === t
        }));
        return n ? n.pageName : null
    }

    function h(t) {
        const {
            pathname: n
        } = new URL(t, 'https://airbnb.com');
        return n
    }
}), "861735", ["13babd", "f2f40f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getConsentForTool = function(s) {
        const C = (0, t.getConsentValueFromCustomConsentCookieSync)(n.TermNames.COOKIES_BANNER),
            u = n.TOOL_NAME_TO_TOOL_ID[s];
        return !(!C || !u) && (0, o.getPermissionFromConsent)(C, u)
    }, e.getConsentForTools = function() {
        const o = {},
            s = (0, t.getConsentValueFromCustomConsentCookieSync)(n.TermNames.COOKIES_BANNER);
        return s ? .split(',').forEach((n => {
            const [t, s] = n.split('=');
            o[t] = '1' === s
        })), o
    };
    var o = r(d[0]),
        n = r(d[1]),
        t = r(d[2])
}), "8b1591", ["d23d70", "ea44e9", "4ba22d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        o = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.mutateSearchWithParams = M;
    var s = o(r(d[2]));

    function n() {
        const t = r(d[3]);
        return n = function() {
            return t
        }, t
    }
    var u = t(r(d[4])),
        c = t(r(d[5])),
        f = r(d[6]),
        l = t(r(d[7])),
        y = o(r(d[8])),
        C = r(d[9]),
        h = r(d[10]),
        p = t(r(d[11])),
        k = r(d[12]),
        v = r(d[13]);

    function _() {
        const t = r(d[14]);
        return _ = function() {
            return t
        }, t
    }
    var b = r(d[15]),
        O = r(d[16]),
        P = t(r(d[17])),
        I = r(d[18]),
        $ = r(d[19]);

    function M({
        confirmationCode: t,
        orderId: o,
        params: s,
        staysData: c
    }) {
        const f = u.default.current().curr,
            {
                numberOfGuests: l,
                guestCurrency: y
            } = s,
            C = { ...s,
                code: t,
                orderId: o,
                guestCurrency: y || f || void 0
            },
            h = !(void 0 !== l || !c);
        if (!(0, k.isCheckoutStateRecoveryKillswitchOn)() && h) {
            const {
                numberOfAdults: t,
                numberOfChildren: o,
                numberOfGuests: s,
                numberOfInfants: u,
                numberOfPets: f
            } = c || {}, l = {
                numberOfAdults: t ? ? void 0,
                numberOfChildren: o ? ? void 0,
                numberOfGuests: s ? ? void 0,
                numberOfInfants: u ? ? void 0,
                numberOfPets: f ? ? void 0,
                ...C
            };
            return (0, v.warn)('[Checkout][Stays] create route recovery flow triggered', {
                extra: {
                    updatedParams: C,
                    staysData: c
                }
            }), `?${(0,n().stringify)(l)}`
        }
        return `?${(0,n().stringify)(C)}`
    }
    e.default = (0, p.default)({
        universalPageName: 4003,
        includeHistoryUpdate: () => !1
    })((({
        location: t,
        queryRef: o
    }) => {
        const p = (0, _().useNiobeMinimalistClient)(),
            {
                search: v
            } = t,
            R = (0, s.useMemo)((() => (0, h.coerceStaysCheckoutParams)((0, c.default)(v))), [v]),
            {
                productId: D
            } = R,
            S = (0, y.default)() === y.FORM_FACTOR.COMPACT,
            {
                data: x,
                error: L
            } = (0, _().useMinimalistPreloadedQuery)({
                query: P.default,
                queryRef: o
            });
        return D || (0, O.reportStaysCheckoutInputError)(R, 'StaysCheckoutCreateRoute_mutation'), (0, s.useEffect)((() => {
            const t = x ? .presentation ? .stayCheckout ? .sections ? .metadata ? .clientLoggingContext ? .staysData ? .checkoutProductVersion || null;
            (0, C.airdogCount)('checkout.stays.route.first_render', 1, {
                has_data: !!x,
                route: 'stays_create_route',
                is_compact: S,
                checkout_prefetch_on_hover_v2: !S || 'compact',
                product_version: t
            }), u.default.isLoggedIn() || (0, k.shouldPrefetchLoggedOutStaysCheckout)({
                isCompact: S,
                log: !0,
                source: 'stays_create_route'
            })
        }), []), (0, s.useEffect)((() => {
            if ((L || x ? .presentation ? .stayCheckout ? .sections ? .metadata ? .clientLoggingContext ? .errorCode || x ? .presentation ? .stayCheckout ? .sections ? .metadata ? .errorData) && (0, C.airdogCount)('stays_checkout.create_route.error', 1, {
                    errorCode: x ? .presentation ? .stayCheckout ? .sections ? .metadata ? .clientLoggingContext ? .errorCode,
                    niobeError: L ? .message,
                    hasRedirect: !!x ? .presentation ? .stayCheckout ? .sections ? .metadata ? .errorData ? .redirectUrl
                }), x ? .presentation ? .stayCheckout) {
                const {
                    stayCheckout: t
                } = x.presentation, o = t.sections ? .metadata ? .orderId || void 0, s = M({
                    confirmationCode: t.sections ? .metadata ? .confirmationCode || void 0,
                    orderId: o,
                    params: R,
                    staysData: t.sections ? .stateMutation || void 0
                }), n = (0, b.getCheckoutPrepareMutationVariables)({
                    params: { ...R,
                        orderId: o
                    }
                });
                (0, I.updateCache)({
                    proxy: p,
                    stayCheckout: t,
                    variables: n
                }), (0, f.replaceToHistory)(`/book/stays/${D}${s}`)
            } else if ((0, k.shouldCreateRouteWaitForData)()) {
                const t = `?${(0,n().stringify)(R)}`;
                (0, f.replaceToHistory)(`/book/stays/${D}${t}`)
            } else {
                (0, C.airdogCount)('stays_checkout.create_route.missing_data');
                const t = `?${(0,n().stringify)(R)}`;
                (0, f.replaceToHistory)(`/book/stays/${D}${t}`)
            }
        }), [x, L, D, R, p]), (0, $.jsx)(l.default, {})
    }))
}), "8c3699", ["ba7a76", "45f788", "07aa1f", "e950a3", "06a99e", "a7c4ef", "4ee5a9", "f27cf8", "e0b071", "3e4681", "261c30", "3a6fa9", "964019", "f2f40f", "068abc", "80cc43", "0f60a4", "db1041", "5c0dc9", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isCheckoutStateRecoveryKillswitchOn = function() {
        return o.default.getBootstrap('checkout_state_recovery_killswitch')
    }, e.shouldCreateRouteWaitForData = e.shouldAllowCheckoutToolsTesting = void 0, e.shouldPrefetchCheckout = function() {
        return o.default.getBootstrap('checkout_gp_migration_prefetch_web')
    }, e.shouldPrefetchLoggedOutStaysCheckout = function({
        isCompact: t,
        log: o,
        source: l
    }) {
        const _ = u.default.findTreatment('checkout_disable_prefetch_logged_out_web_v2', {
            log: o
        });
        return (0, c.airdogCount)('checkout.stays.desktop.disable_prefetch_logged_out', 1, {
            source: l,
            checkout_disable_prefetch_logged_out_web_v2: _,
            compact: t
        }), 'treatment' !== _
    }, e.shouldUrlCacheOrderId = void 0;
    var o = t(r(d[1])),
        u = t(r(d[2])),
        c = r(d[3]);
    e.shouldUrlCacheOrderId = () => o.default.getBootstrap('checkout_p4_order_id_url_cache_enabled');
    e.shouldCreateRouteWaitForData = () => o.default.getBootstrap('checkout_create_route_wait_for_data_enabled');
    e.shouldAllowCheckoutToolsTesting = () => !o.default.getBootstrap('checkout.tools.data_mutation.killswitch')
}), "964019", ["ba7a76", "c235f8", "dcc72a", "3e4681"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.shouldYieldSelectedPaymentOption = void 0;
    var l = t(r(d[1]));
    e.shouldYieldSelectedPaymentOption = (t, n) => {
        const {
            isWorkTrip: o,
            openHomesAffiliated: s
        } = n, {
            id: u
        } = l.default.current(), {
            user_id: _,
            bill_info: {
                is_business_travel: c
            }
        } = t;
        return !!(!c && o || !c && s || _ !== u)
    }
}), "9f33eb", ["ba7a76", "06a99e"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var u = t(r(d[1]));
    const o = {
        document: void 0,
        getDocument: () => r(d[3])(d[2]).then(u.default).then((t => t.default)),
        name: 'stayCheckout',
        type: 'query',
        operationId: '64e5a66b3e5b01f0db58735e33283017ce4fa740b4a31e6e621a747238289706'
    };
    e.default = o
}), "db1041", ["ba7a76", "45f788", "9f920f", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.airbnbOrgGuestTypes = void 0;
    e.airbnbOrgGuestTypes = ["CLIENT", "ORGANIZATION_MEMBER", "SELF"]
}), "dc9188", []);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.ApiLoggingContextMalformedBootstrapDataEvent = {
        defaultProps: {
            schema: 'com.airbnb.jitney.event.logging.ApiLoggingContext:ApiLoggingContextMalformedBootstrapDataEvent:1.0.0',
            event_name: 'apiloggingcontext_malformed_bootstrap_data'
        },
        propTypes: {}
    };
    t.fullyQualifiedName = 'ApiLoggingContext.v1.ApiLoggingContextMalformedBootstrapDataEvent', t.emissionDisabled = !0;
    e.ApiLoggingContextMalformedBootstrapDataEventEvent = function(o) {
        return {
            eventData: o,
            eventDataSchema: t
        }
    }
}), "de621c", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var o = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        toolName: o,
        doesCookieHaveConsentCb: E,
        onUpdateOnly: l
    }) {
        if (!l) {
            const t = (0, f.getConsentForTool)(o);
            E(t)
        }
        const u = () => {
                const t = (0, f.getConsentForTool)(o);
                E(t)
            },
            _ = () => {
                E(!1)
            };
        return t.default.on(n.USER_LOGOUT_EVENT, _), t.default.on(n.CHECK_CONSENT_EVENT, u), () => {
            t.default.off(n.USER_LOGOUT_EVENT, _), t.default.off(n.CHECK_CONSENT_EVENT, u)
        }
    };
    var t = o(r(d[1])),
        n = r(d[2]),
        f = r(d[3])
}), "e8f252", ["ba7a76", "abc3e4", "ea44e9", "8b1591"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.evaluateEventDataSchema = function(t, n) {
        if ('object' == typeof t) return t;
        if ('function' == typeof t) {
            const u = t(n);
            if ('object' != typeof u && void 0 !== u) return;
            return u
        }
        return
    }, e.evaluateSubpageName = function(t, n) {
        if ('function' == typeof t) {
            return t(n)
        }
        return t
    }, e.evaluateUniversalPageName = function(t, n) {
        if ('function' == typeof t) {
            return t(n)
        }
        return t
    }
}), "f85727", []);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-stays-checkout-route/routes/StaysCheckoutRoute/StaysCheckoutCreateRoute.fba1292e2f.js.map