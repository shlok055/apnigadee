__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        children: l,
        isFullHeight: t,
        isSmall: n,
        ...u
    }) {
        const s = c(Boolean(t), Boolean(n));
        return (0, o.jsx)(f.default, {
            children: (0, o.jsx)(s, { ...u,
                children: l
            })
        })
    };
    l(r(d[1]));
    var t = l(r(d[2])),
        n = l(r(d[3])),
        u = l(r(d[4])),
        f = l(r(d[5])),
        o = r(d[6]);

    function c(l, f) {
        return l ? n.default : f ? u.default : t.default
    }
}), "0003f0", ["ba7a76", "07aa1f", "171373", "02b9cd", "1f040e", "1c948d", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.GuestPickerPresentationSession = {
        defaultProps: {},
        propTypes: {}
    };
    t.fullyQualifiedName = 'Checkout.v1.GuestPickerPresentationSession';
    e.GuestPickerPresentationSessionEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "043dec", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, f, v, C) {
        if (v ? .()) return t => t;
        let D = [],
            M = w;
        Array.isArray(f) ? D = f : 'object' == typeof f && (D = Object.keys(f), M = f);
        const T = () => {};
        return function(f) {
            class v extends n.default.Component {
                constructor(n, o) {
                    super(n, o), this.unsubscribe = void 0, this.uuid = void 0, this.wrappedMethods = void 0, this.componentName = void 0, this.wrappedMethodCache = void 0, this.logImpression = this.logImpression.bind(this), this.logComponentAction = this.logComponentAction.bind(this), this.wrapMethodsForFrameworkEvents = this.wrapMethodsForFrameworkEvents.bind(this), this.props.loggingID && (this.wrappedMethods = this.wrapMethodsForFrameworkEvents()), this.state = {
                        eventDataContext: o[I.TRACKING_CHANNEL] ? o[I.TRACKING_CHANNEL].getState() : null
                    }, this.componentName = this.props.componentName || t, this.wrappedMethodCache = new Map, D.forEach((t => {
                        this.wrappedMethodCache ? .set(t, new WeakMap)
                    }))
                }
                getChildContext() {
                    const {
                        loggingID: t
                    } = this.props;
                    if (!t) return {};
                    if ('function' == typeof t) return {};
                    const {
                        ancestorLoggingIDs: n = [],
                        ancestorUUIDs: o = []
                    } = this.context;
                    return {
                        ancestorLoggingIDs: [...n, t],
                        ancestorUUIDs: [...o, this.uuid]
                    }
                }
                componentDidMount() {
                    const {
                        loggingID: t,
                        shouldLogImpression: n
                    } = this.props;
                    t && (this.uuid = (0, s().v4)(), n && this.logImpression()), this.context[I.TRACKING_CHANNEL] && (this.unsubscribe = this.context[I.TRACKING_CHANNEL].subscribe((t => {
                        this.setState({
                            eventDataContext: t
                        })
                    })))
                }
                componentDidUpdate(t) {
                    const {
                        loggingID: n,
                        shouldLogImpression: o
                    } = this.props;
                    if (!n) return;
                    n && o && !t.shouldLogImpression && this.logImpression();
                    D.filter((n => this.props[n] !== t[n]))
                }
                componentWillUnmount() {
                    this.unsubscribe && this.unsubscribe()
                }
                logImpression() {
                    const {
                        loggingID: t,
                        eventData: n,
                        eventDataSchema: o
                    } = this.props, {
                        ancestorLoggingIDs: s = [],
                        ancestorUUIDs: u = []
                    } = this.context, {
                        eventDataContext: c
                    } = this.state, h = N(t, 'componentImpression');
                    if (!h) return;
                    const f = {
                        schema: p().UniversalComponentImpressionEvent,
                        event_data: {
                            uuid: this.uuid || '',
                            logging_id: h,
                            ancestor_logging_ids: s,
                            ancestor_uuids: u,
                            event_data: { ...o ? c : {},
                                ...E(n, 'componentImpression')
                            },
                            event_data_schema: A(o, 'componentImpression'),
                            component: this.componentName
                        }
                    };
                    l.default.queueJitneyEvent(f), x() || y()
                }
                logComponentAction(t, ...n) {
                    const {
                        loggingID: o,
                        eventData: s,
                        eventDataSchema: u
                    } = this.props, {
                        ancestorLoggingIDs: p = [],
                        ancestorUUIDs: h = []
                    } = this.context, {
                        eventDataContext: f
                    } = this.state;
                    if (!N(o, t)) return;
                    const v = {
                        schema: c().UniversalComponentActionEvent,
                        event_data: {
                            uuid: this.uuid || '',
                            logging_id: N(o, t),
                            ancestor_logging_ids: p,
                            ancestor_uuids: h,
                            event_data: { ...u ? f : {},
                                ...E(s, t, ...n)
                            },
                            event_data_schema: A(u, t),
                            operation: M[t],
                            method: t,
                            component: this.componentName
                        }
                    };
                    l.default.queueJitneyEvent(v), x() || b()
                }
                wrapMethodsForFrameworkEvents() {
                    const t = {};
                    return D.forEach((n => {
                        const o = this.props[n];
                        if ('function' == typeof o && o.withTracking) return;
                        const s = o ? ? T;
                        let u = this.wrappedMethodCache ? .get(n) ? .get(s);
                        null == u && (u = (...t) => {
                            if (this.logComponentAction(n, ...t), o) return o(...t)
                        }, u.withTracking = !0, this.wrappedMethodCache ? .get(n) ? .set(s, u)), t[n] = u
                    })), t
                }
                render() {
                    const {
                        loggingID: t,
                        eventData: n,
                        eventDataSchema: o,
                        shouldLogImpression: s,
                        ...u
                    } = this.props;
                    return this.wrappedMethods = { ...this.wrappedMethods,
                        ...this.wrapMethodsForFrameworkEvents()
                    }, t ? (0, _.jsx)(f, { ...u,
                        ...this.wrappedMethods
                    }) : (0, _.jsx)(f, { ...u
                    })
                }
            }
            return v.contextTypes = {
                ancestorLoggingIDs: o().default.arrayOf(o().default.string),
                ancestorUUIDs: o().default.arrayOf(o().default.string),
                [I.TRACKING_CHANNEL]: o().default.object
            }, v.childContextTypes = {
                ancestorLoggingIDs: o().default.arrayOf(o().default.string),
                ancestorUUIDs: o().default.arrayOf(o().default.string)
            }, v.WrappedComponent = f, v.defaultProps = f.defaultProps, v.displayName = `withTracking(${(0,h.default)(f)||'Component'})`, (0, u.default)(v, f)
        }
    };
    var n = t(r(d[1]));

    function o() {
        const n = t(r(d[2]));
        return o = function() {
            return n
        }, n
    }

    function s() {
        const t = r(d[3]);
        return s = function() {
            return t
        }, t
    }
    var u = t(r(d[4]));

    function c() {
        const t = r(d[5]);
        return c = function() {
            return t
        }, t
    }

    function p() {
        const t = r(d[6]);
        return p = function() {
            return t
        }, t
    }
    var h = t(r(d[7])),
        l = t(r(d[8])),
        f = t(r(d[9])),
        v = t(r(d[10])),
        C = r(d[11]),
        I = r(d[12]),
        _ = r(d[13]);
    let D = !1;

    function b() {
        D || (D = !0, setTimeout((() => {
            D = !1, l.default.getLogger().flushEventQueue()
        }), 50))
    }

    function y() {
        D || (D = !0, requestIdleCallback((() => {
            D = !1, l.default.getLogger().flushEventQueue()
        })))
    }
    const w = {
        onClick: 2,
        onChange: 12,
        onPress: 2,
        onFocus: 5,
        onBlur: 18,
        onBackPress: 2,
        onNextPress: 2,
        onLeftPress: 2,
        onRightPress: 2,
        onPressPrimary: 2,
        onPressSecondary: 2,
        onSaveChange: 13,
        onPressActionText: 2,
        onClose: 9,
        onCancel: 9,
        onDismiss: 9,
        onSelect: 2,
        onSubmit: 17,
        onActionPress: 2,
        onActionButtonPress: 2,
        onRatingChange: 12,
        onReportButtonPress: 2,
        onWishlistButtonPress: 2,
        onExpand: 3,
        onToggleCollapse: 6,
        onCollapseToggle: 6,
        onPressTab: 2,
        onOpen: 3,
        onImageChange: 10,
        onDecrement: 12,
        onIncrement: 12,
        onCarouselScroll: 10
    };

    function N(t, n) {
        return 'string' == typeof t ? t : 'function' == typeof t ? t(n) : ''
    }

    function E(t, n, ...o) {
        if ('object' == typeof t) return t;
        if ('function' == typeof t) {
            const s = t(n, ...o);
            return 'object' != typeof s ? {} : s
        }
        return {}
    }

    function A(t, n) {
        if ('object' == typeof t) return t;
        if ('function' == typeof t) {
            const o = t(n);
            if ('object' != typeof o && 'string' != typeof o && void 0 !== o) return;
            return o
        }
        return 'string' == typeof t ? t : void 0
    }

    function x() {
        try {
            return (0, C.runExperiment)({
                deliver: () => v.default.deliverExperiment('web_bypass_manual_flush', C.BOOLEAN_TREATMENTS),
                gatingTrebuchet: f.default.getBootstrap('web_bypass_manual_flush'),
                launchTrebuchet: f.default.getBootstrap('web_bypass_manual_flush_force'),
                treatmentOverrideName: 'no_manual_flush'
            })
        } catch (t) {
            return !1
        }
    }
}), "0d8e0a", ["ba7a76", "07aa1f", "b56f5a", "305dd5", "14e802", "59c871", "60aeb4", "e37aff", "c8b97a", "c235f8", "fc0842", "4be837", "95edae", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;

    function t() {
        const n = r(d[1]);
        return t = function() {
            return n
        }, n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.buildInitialState = function({
        match: n,
        location: u
    }) {
        const s = y(n, u);
        return {
            secondaryGuestsMapping: {},
            billItemProductType: u.pathname.includes('experience') ? o.default.TRIP : o.default.RESERVATION,
            checkoutId: (0, t().v4)(),
            completedDisableDeps: {
                GUEST_COUNT: !0
            },
            liveVariants: {},
            isGuestPlatform: !0,
            urlInfo: s,
            experienceListingAvailabilityId: '',
            isWorkBooking: !1,
            modals: null,
            numberOfAdults: 1,
            numberOfCaregivers: 0,
            numberOfChildren: 0,
            numberOfInfants: 0,
            quickPayState: null,
            secondaryGuests: null
        }
    }, e.buildSecondaryGuestInfo = void 0, e.buildUrlInfo = y, e.coerceExperienceCheckoutParams = p, e.hasCompletedRequiredGuestInfo = void 0;
    var u = n(r(d[2])),
        o = n(r(d[3])),
        s = (function(n) {
            return n.isExperiencesPrivateBooking = "isExperiencesPrivateBooking", n.isWorkBooking = "isWorkBooking", n
        })(s || {}),
        l = (function(n) {
            return n.billVersionItemToken = "billVersionItemToken", n.bookingSource = "bookingSource", n.source = "source", n.couponCode = "couponCode", n.experienceListingAvailabilityId = "experienceListingAvailabilityId", n.display_currency = "guestCurrencyOverride", n.currency = "guestCurrencyOverride", n.guestCountryOverride = "guestCountryOverride", n.guestCurrencyOverride = "guestCurrencyOverride", n.modal = "modal", n.startDate = "startDate", n.endDate = "endDate", n
        })(l || {}),
        c = (function(n) {
            return n.numberOfGuests = "numberOfGuests", n
        })(c || {});
    const f = { ...s,
        ...l,
        ...c,
        guestCounts: 'guestCounts'
    };

    function b(n) {
        return '' === n || 'string' != typeof n || Number.isNaN(parseInt(n, 10)) ? null : parseInt(n, 10)
    }

    function p(n, t = !1, u = !1) {
        return Object.entries(n).reduce(((n, [o, l]) => {
            if (u && void 0 === l) return n;
            const p = f[o];
            if (!p) return t ? { ...n,
                [o]: l
            } : n;
            if (s[o]) return '' !== l && 'string' == typeof l ? { ...n,
                [p]: 'true' === l
            } : 'boolean' == typeof l ? { ...n,
                [p]: l
            } : n;
            if (c[o]) {
                const t = b(l);
                return t ? { ...n,
                    [p]: t
                } : '' !== l && 'number' == typeof l ? { ...n,
                    [p]: l
                } : n
            }
            if ('source' === o && 'booking_widget' === l) return { ...n,
                bookingSource: 'BOOKING_WIDGET'
            };
            if ('guestCounts' === o) {
                const t = l;
                return { ...n,
                    guestCounts: {
                        numberOfAdults: b(t.numberOfAdults) || 1,
                        numberOfChildren: b(t.numberOfChildren) || 0,
                        numberOfInfants: b(t.numberOfInfants) || 0
                    }
                }
            }
            return '' !== l ? { ...n,
                [p]: l
            } : n
        }), {})
    }

    function y(n, t) {
        return {
            urlParams: n.params,
            queryParams: p((0, u.default)(t.search)),
            location: t
        }
    }
    const O = n => n ? [...Array(n).keys()] : [],
        I = n => ({
            firstName: n ? .firstName || null,
            lastName: n ? .lastName || null,
            email: n ? .email || null,
            age: n ? .age || null
        });
    e.buildSecondaryGuestInfo = ({
        numberOfAdults: n = 1,
        numberOfChildren: t = 0,
        secondaryGuestsMapping: u
    }) => [...O((n || 1) - 1).map((n => I(u[`adult${n}`]))), ...O(t).map((n => I(u[`child${n}`])))];
    e.hasCompletedRequiredGuestInfo = ({
        numberOfChildren: n = 0,
        secondaryGuestsMapping: t
    }) => O(n).every((n => {
        const u = t[`child${n}`];
        return u ? .age
    }))
}), "0f6f3d", ["ba7a76", "305dd5", "a7c4ef", "75a800"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1])), r(d[2]);
    var _ = r(d[3]),
        o = r(d[4]);
    const n = "b18egj59 atm_7l_dezgoh atm_c8_2x1prs atm_g3_1jbyh58 atm_fr_11a07z3 atm_ptdwod_p5ox87 atm_1zp5ph_1ixj6vq atm_1mt8aov_n9wab5 atm_18hoyap_p5ox87";
    e.default = function({
        children: t
    }) {
        const c = (0, _.useCx)();
        return (0, o.jsx)("div", {
            className: c(n),
            children: t
        })
    }
}), "1c948d", ["ba7a76", "07aa1f", "ea4b89", "4786a8", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.IsGuestPickerOpen = void 0;
    var s = n(r(d[2])),
        l = t(r(d[3])),
        u = t(r(d[4]));

    function o() {
        const t = r(d[5]);
        return o = function() {
            return t
        }, t
    }

    function c() {
        const t = r(d[6]);
        return c = function() {
            return t
        }, t
    }

    function f() {
        const t = r(d[7]);
        return f = function() {
            return t
        }, t
    }

    function p() {
        const t = r(d[8]);
        return p = function() {
            return t
        }, t
    }
    r(d[9]);
    var x = r(d[10]),
        h = t(r(d[11])),
        b = t(r(d[12])),
        I = t(r(d[13])),
        G = t(r(d[14])),
        P = t(r(d[15])),
        _ = t(r(d[16])),
        C = t(r(d[17])),
        O = t(r(d[18])),
        k = t(r(d[19])),
        D = r(d[20]),
        j = t(r(d[21])),
        y = r(d[22]),
        A = r(d[23]),
        v = r(d[24]),
        E = t(r(d[25])),
        M = t(r(d[26])),
        T = t(r(d[27])),
        $ = t(r(d[28])),
        S = t(r(d[29])),
        F = t(r(d[30])),
        L = r(d[31]),
        N = t(r(d[32])),
        R = r(d[33]),
        X = r(d[34]),
        U = r(d[35]),
        w = r(d[36]),
        z = t(r(d[37])),
        V = t(r(d[38])),
        W = r(d[39]);
    const H = "p1meloxu atm_h3_evh4rp",
        q = "t1tmeqo7 atm_c8_sz6sci atm_g3_17zsb9a atm_fr_kzfbxz atm_cs_19iasv6 atm_lo_1jcdlzj atm_lk_p5ox87 atm_ll_p5ox87 atm_le_idpfg4",
        K = e.IsGuestPickerOpen = (0, R.createUIKey)('stays-checkout-guest-picker-open', {
            getDefault: t => t || !1
        });
    e.default = (0, D.withPlatformState)((({
        billItemProductType: t,
        urlInfo: n,
        numberOfAdults: s,
        numberOfChildren: l,
        numberOfInfants: u,
        completedDisableDeps: o,
        secondaryGuestsMapping: c
    }) => ({
        billItemProductType: t,
        urlInfo: n,
        numberOfAdults: s,
        numberOfChildren: l,
        numberOfInfants: u,
        completedDisableDeps: o,
        secondaryGuestsMapping: c
    })), (({
        billItemProductType: t,
        urlInfo: n,
        numberOfAdults: s,
        numberOfChildren: l,
        numberOfInfants: u,
        completedDisableDeps: o,
        secondaryGuestsMapping: c
    }) => [t, n, s, l, u, o, c]))((function({
        platformState: {
            billItemProductType: t,
            urlInfo: n,
            numberOfAdults: D,
            numberOfChildren: R,
            numberOfInfants: B,
            completedDisableDeps: J,
            secondaryGuestsMapping: Q
        },
        setPlatformState: Y,
        disabled: Z,
        errors: ee,
        sectionId: te,
        section: ne
    }) {
        const se = (0, U.useCx)(),
            {
                childrenAllowed: le,
                childrenAndInfantsWarning: ae,
                childrenMaxAge: re,
                childrenMinAge: ue,
                guestCountSummary: ie,
                guestPickerDisplayPrices: de,
                includeInfantsInGuestCount: oe,
                infantsAllowed: ce,
                linkCopy: fe,
                maxAge: me,
                maxGuestCapacity: pe,
                maxPlusValue: xe,
                minAge: he,
                petDetails: ge,
                petDisclaimerText: be,
                petsAllowed: Ie,
                readonly: Ge,
                subtitle: Pe,
                title: _e
            } = ne,
            [Ce, Oe] = (0, X.useUIState)(K);
        (0, M.default)({
            schema: c().GuestPickerPresentationSession
        }, [Ce], Ce);
        const ke = (0, $.default)(D) || (0, $.default)(R) || (0, $.default)(B),
            De = (0, s.useMemo)((() => (0, w.getGuestDetailsFromUrl)(n)), [n]),
            je = (0, s.useMemo)((() => ke ? {
                adults: D || 1,
                children: R || 0,
                infants: B || 0,
                pets: 0
            } : De), [D, R, B, De, ke]),
            [ye, Ae] = (0, s.useState)(je),
            [ve, Ee] = (0, s.useState)(!1),
            Me = (0, s.useCallback)((() => Ee(!0)), [Ee]),
            Te = (0, s.useCallback)((() => Ee(!1)), [Ee]),
            $e = {
                num_adults: ye.adults,
                num_children: ye.children,
                num_infants: ye.infants,
                num_pets: ye.pets
            },
            Se = (0, s.useMemo)((() => ({
                numberOfAdults: ye.adults,
                numberOfChildren: ye.children,
                numberOfInfants: ye.infants,
                numberOfPets: ye.pets
            })), [ye]),
            Fe = (0, s.useMemo)((() => {
                const t = [];
                return ae && t.push(ae), t
            }), [ae]),
            Le = (0, s.useCallback)((t => {
                t.preventDefault(), Oe(!0)
            }), [Oe]),
            Ne = (0, s.useCallback)((() => {
                Oe(!1)
            }), [Oe]),
            Re = (0, s.useCallback)((t => {
                Ae({ ...ye,
                    ...t
                })
            }), [ye]),
            Xe = (0, s.useCallback)((() => {
                const t = (0, w.getCheckoutUrlWithUpdates)(n, Se);
                (0, x.replaceToHistory)(t, {
                    maintainScrollPosition: !0
                })
            }), [n, Se]),
            Ue = (0, s.useCallback)((() => {
                Ne(), ke ? Y({
                    completedDisableDeps: { ...J,
                        ...(0, z.default)({
                            numberOfChildren: Se.numberOfChildren,
                            numberOfInfants: Se.numberOfInfants,
                            enableDependencies: ['GUEST_DETAILS'],
                            secondaryGuestsMapping: Q
                        })
                    },
                    ...Se,
                    deltaUpdate: {
                        guestCounts: Se,
                        secondaryGuests: (0, A.buildSecondaryGuestInfo)({
                            numberOfAdults: Se.numberOfAdults,
                            numberOfChildren: Se.numberOfChildren,
                            secondaryGuestsMapping: Q
                        })
                    }
                }) : Xe()
            }), [Ne, Y, Se, ke, Xe, J, Q]),
            we = (0, s.useCallback)((() => {
                Ne(), Ae(je)
            }), [Ne, je]),
            ze = (0, L.isExperiencesProduct)(t),
            Ve = ze ? y.GuestPickerTypes.TEXT_INPUT : y.GuestPickerTypes.STANDARD,
            We = (0, T.default)({
                schema: ze ? p().ExperiencesGuestPickerViewportPresentationSession : f().GuestPickerViewportPresentationSession,
                event_data: {}
            }),
            He = (0, s.useMemo)((() => ee ? .map((t => {
                if (!t) return null;
                const {
                    errorMessage: n
                } = t;
                return n && (0, W.jsx)(E.default, {
                    text: n
                }, `error_${n}`)
            }))), [ee]);
        if (!_e) return (0, v.throwAndLogNullResponseException)({
            expectedFields: ['title'],
            response: ne
        });
        const qe = (0, W.jsxs)(W.Fragment, {
                children: [(0, W.jsx)(N.default, {
                    children: (0, W.jsx)(j.default, {
                        applyMaxCapacity: !0,
                        childrenMaxAge: re,
                        childrenMinAge: ue,
                        disableChildrenFilter: ze && !le,
                        disableInfantFilter: ze && !ce,
                        guestCountSummary: ie,
                        guestDetails: ye,
                        guestPickerType: Ve,
                        id: te || 'CheckoutGuestPicker',
                        infantCountsInMax: !!oe,
                        inlineErrors: He,
                        loggingPrefix: `${v.LOGGING_PREFIX}.${te}`,
                        maxAge: me,
                        maxGuest: pe || y.MAX_GUEST_TOTAL,
                        minAge: he,
                        maxPetCount: ge ? .maxPetCount,
                        maxPlusValue: xe,
                        onUpdate: Re,
                        petDisclaimerText: ge ? .petDisclaimerText,
                        petDisclosureOnPress: Me,
                        petsAllowed: !!Ie,
                        priceDetails: de,
                        warningMessages: Fe
                    })
                }), (0, W.jsxs)(G.default, {
                    children: [(0, W.jsx)(h.default, {
                        onPress: we,
                        loggingID: `${v.LOGGING_PREFIX}.${te}.exit`,
                        ...(0, o().CheckoutContextEvent)($e),
                        "data-testid": `${v.LOGGING_PREFIX}.${te}.exit`,
                        children: (0, W.jsx)(u.default, {
                            k: "shared.cancel"
                        })
                    }), (0, W.jsx)(P.default, {
                        onPress: Ue,
                        loggingID: `${v.LOGGING_PREFIX}.${te}.save`,
                        ...(0, o().CheckoutContextEvent)($e),
                        "data-testid": `${v.LOGGING_PREFIX}.${te}.save`,
                        children: (0, W.jsx)(u.default, {
                            k: "shared.save"
                        })
                    })]
                })]
            }),
            Ke = {
                isOpen: Ce,
                onClose: we,
                accessibleTitle: _e,
                loggingID: `${v.LOGGING_PREFIX}.${te}.context_sheet`,
                eventDataSchema: o().CheckoutContext,
                eventData: $e,
                shouldLogImpression: Ce
            };
        return (0, W.jsx)("div", {
            ref: We,
            children: (0, W.jsxs)(S.default, {
                startingHeadingLevel: 3,
                children: [(0, W.jsx)(k.default, {
                    text: (0, W.jsxs)(W.Fragment, {
                        children: [(0, W.jsx)(C.default, {
                            disabled: Z,
                            children: (0, W.jsx)(F.default, {
                                children: _e
                            })
                        }), Pe && (0, W.jsx)(O.default, {
                            disabled: Z,
                            children: Pe
                        })]
                    }),
                    action: (0, W.jsx)(h.default, {
                        onPress: Le,
                        loggingID: `${v.LOGGING_PREFIX}.${te}`,
                        ...(0, o().CheckoutContextEvent)($e),
                        "data-testid": `${v.LOGGING_PREFIX}.${te}.edit`,
                        "aria-label": l.default.t('checkout.guest.picker.edit.button'),
                        children: fe || (0, W.jsx)(u.default, {
                            k: "shared.Edit"
                        })
                    }),
                    readonly: !!Ge,
                    errors: He
                }), be && De.pets > 0 && (0, W.jsx)("div", {
                    className: se(H),
                    children: (0, W.jsx)(h.default, {
                        loggingID: `${v.LOGGING_PREFIX}.${te}.service_animal_disclosure_link`,
                        ...(0, o().CheckoutContextEvent)($e),
                        onPress: Me,
                        children: be
                    })
                }), (0, W.jsx)(_.default, {
                    renderCompact: () => (0, W.jsxs)(b.default, { ...Ke,
                        children: [(0, W.jsx)(I.default, {
                            children: _e
                        }), qe]
                    }),
                    renderWide: () => (0, W.jsxs)(b.default, { ...Ke,
                        isSmall: !0,
                        children: [(0, W.jsx)("div", {
                            className: se(q),
                            children: (0, W.jsx)(F.default, {
                                children: _e
                            })
                        }), qe]
                    })
                }), ge && (0, W.jsx)(V.default, { ...ge,
                    isOpen: ve,
                    loggingPrefix: `${v.LOGGING_PREFIX}.${te}`,
                    onClose: Te
                })]
            })
        })
    }))
}), "207a8f", ["ba7a76", "45f788", "07aa1f", "a9f4b1", "030c51", "b7d5f2", "043dec", "61e0c2", "981f0a", "ea4b89", "4ee5a9", "3e8391", "0003f0", "54a476", "9dbe6c", "3c3693", "3c74b4", "a1b040", "3df4d0", "cc8e31", "de4273", "1ad9b4", "80e497", "0f6f3d", "a55423", "739a0c", "bae1c0", "53fa26", "58861b", "b5f1d2", "688dce", "82eab1", "a58a16", "005fd5", "afdc80", "4786a8", "7ccce6", "5fffb8", "297607", "b8c07d"]);
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
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        eventData: t,
        isOpen: c,
        loggingPrefix: f,
        onClose: _
    }) {
        const v = o.default.t('assistant_animals_information_modal.modal_title'),
            h = `${f}.service_animal_disclosure`,
            p = {
                accessibleTitle: v,
                eventData: t,
                eventDataSchema: n().CheckoutContext,
                isOpen: c,
                loggingID: h,
                onClose: _,
                shouldLogImpression: c
            };
        return (0, u.jsx)(s.default, { ...p,
            children: (0, u.jsx)(l.default, {})
        })
    };
    t(r(d[1]));

    function n() {
        const t = r(d[2]);
        return n = function() {
            return t
        }, t
    }
    var o = t(r(d[3])),
        s = t(r(d[4])),
        l = t(r(d[5])),
        u = r(d[6])
}), "297607", ["ba7a76", "07aa1f", "b7d5f2", "a9f4b1", "0003f0", "f7e43c", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1])), r(d[2]);
    var l = t(r(d[3])),
        s = r(d[4]),
        _ = r(d[5]);
    const n = "s1q42845 atm_h3_1yuitx atm_vv_1jtmq4",
        c = "djk22ek atm_7l_1oqmvsg",
        u = "s1q93lyv atm_h3_1y44olf atm_c8_km0zk7 atm_g3_18khvle atm_fr_1m9t47k",
        o = "dbts01w atm_7l_dezgoh",
        f = "n1ngg253 atm_h3_idpfg4",
        v = "ltqx7l0 atm_gz_1yuitx";
    e.default = function({
        children: t,
        darkDisabled: h,
        disabled: k,
        smaller: b,
        darker: x,
        noMargin: j,
        link: y,
        ariaLabel: q
    }) {
        const p = (0, s.useCx)();
        let z = null;
        if (y) {
            const {
                copy: t,
                ...s
            } = y;
            z = (0, _.jsx)("span", {
                className: p(v),
                children: (0, _.jsx)(l.default, {
                    "aria-label": q || t,
                    ...s,
                    children: t
                })
            })
        }
        return (0, _.jsxs)("div", {
            className: p(n, x && !k && o, k && !h && c, b && u, j && f),
            "aria-disabled": k ? 'true' : void 0,
            children: [t, z]
        })
    }
}), "3df4d0", ["ba7a76", "07aa1f", "ea4b89", "3e8391", "4786a8", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.textLinkStyles = e.textLinkCssFragments = e.default = void 0;
    var t = r(d[0]),
        n = r(d[1]),
        _ = (r(d[2]), r(d[3])),
        o = (r(d[4]), r(d[5])),
        s = r(d[6]);
    const l = e.textLinkCssFragments = (0, _.mergeStyles)(o.baseAnchorCssFragments, {
            component: "\n    appearance: none;     background: transparent;     border: 0;     cursor: pointer;     margin: 0;     padding: 0;     user-select: auto;     &:disabled {       cursor: not-allowed;            @media (hover: hover) {       &:hover {                  text-decoration: none;              }     }        }\n    color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */\n    text-decoration: underline;\n    border-radius: var(--linaria-theme_corner-radius-tiny4px-border-radius);\n    font-weight: var(--linaria-theme_typography-weight-medium500);\n    text-align: inherit;\n\n    /* 'postion' is added to render the boxShadow correctly in Safari browser */\n    position: relative;\n\n    &:visited {\n      color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */\n      text-decoration: underline;\n    }\n    @media (hover: hover) {       &:hover {                color: var(--linaria-theme_palette-text-primary-hover); /* migrated from theme.palette.black */       text-decoration: underline;       /* we can remove this once all variants using these styles are migrated to Linaria       * this is here because RWS does not respect the ordering of keys in the        * backwards-compatible object, so we try to re-override hover styles       */       &:disabled {         color: var(--linaria-theme_palette-text-primary-disabled); /* migrated from theme.palette.deco */         text-decoration: underline;       }       &:disabled:hover {         text-decoration: underline;       }            }     }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n       \n\n    &:active {\n      color: var(--linaria-theme_palette-text-secondary); /* migrated from theme.palette.foggy */\n      text-decoration: underline;\n    }\n    outline: none;   &::-moz-focus-inner {     border: none;     padding: 0;     margin: 0;   }   &:focus::-moz-focus-inner {     border: none;   }   &:-moz-focusring {     outline: none;   }\n\n    :focus-visible {              color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */       text-decoration: underline;            @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {       transition: none;     }     transition: box-shadow 0.2s var(--linaria-theme_motion-standard-curve-animation-timing-function);          box-shadow: 0 0 0 2px rgb(255,255,255), 0 0 0 4px var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */          }     @supports not selector(:focus-visible) {       :focus {                color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */       text-decoration: underline;            @media (prefers-reduced-motion: reduce), (update: slow), (update: none) {       transition: none;     }     transition: box-shadow 0.2s var(--linaria-theme_motion-standard-curve-animation-timing-function);          box-shadow: 0 0 0 2px rgb(255,255,255), 0 0 0 4px var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */            }     }\n\n\n\n\n\n\n       \n\n    &:disabled {\n      color: var(--linaria-theme_palette-text-primary-disabled); /* migrated from theme.palette.deco */\n      text-decoration: underline;\n    }\n\n    &:disabled:hover {\n      text-decoration: underline;\n    }\n  "
        }),
        c = (e.textLinkStyles = (0, n.cssFragmentsObjToStylesFn)(l), (0, s.createVariant)(t.BaseButtonOrAnchor, {
            base: "b1uxatsa atm_c8_1kw7nm4 atm_bx_1kw7nm4 atm_cs_1kw7nm4 atm_cd_1kw7nm4 atm_ci_1kw7nm4 atm_g3_1kw7nm4 atm_7l_1kw7nm4 atm_rd_8stvzk atm_9j_tlke0l_1nos8r_uv4tnr atm_7l_1kw7nm4_1nos8r_uv4tnr atm_rd_8stvzk_1nos8r_uv4tnr atm_7l_1kw7nm4_pfnrn2 atm_rd_8stvzk_pfnrn2",
            fullWidth: "fzd8srm atm_vy_1osqo2v atm_9s_1ulexfb",
            showOnlyOnKeyboardFocus: "s8bhioi atm_3f_idpfg4_1r63tcj atm_7h_hxbz6r_1r63tcj atm_7i_ysn8ba_1r63tcj atm_e2_t94yts_1r63tcj atm_ks_15vqwwr_1r63tcj atm_ks_zryt35_1r63tcj atm_l8_idpfg4_1r63tcj atm_mk_stnw88_1r63tcj atm_vv_1q9ccgz_1r63tcj atm_vy_t94yts_1r63tcj",
            component: "c1qih7tm atm_1s_glywfm atm_26_1j28jx2 atm_3f_idpfg4 atm_9j_tlke0l atm_gi_idpfg4 atm_l8_idpfg4 atm_vb_1wugsn5 atm_7l_jt7fhx atm_rd_8stvzk atm_5j_1896hn4 atm_cs_10d11i2 atm_r3_1kw7nm4 atm_mk_h2mmj6 atm_kd_glywfm atm_9j_13gfvf7_1o5j5ji atm_rd_glywfm_1mj13j2_uv4tnr atm_7l_jt7fhx_v5whe7 atm_rd_8stvzk_v5whe7 atm_7l_177r58q_1nos8r_uv4tnr atm_rd_8stvzk_1nos8r_uv4tnr atm_7l_9vytuy_4fughm_uv4tnr atm_rd_8stvzk_4fughm_uv4tnr atm_rd_8stvzk_xggcrc_uv4tnr atm_7l_1he744i_csw3t1 atm_rd_8stvzk_csw3t1 atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_jt7fhx_1w3cfyq atm_rd_8stvzk_1w3cfyq atm_uc_aaiy6o_1w3cfyq atm_70_1p56tq7_1w3cfyq atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_7l_jt7fhx_pfnrn2_1oszvuo atm_rd_8stvzk_pfnrn2_1oszvuo atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_1p56tq7_pfnrn2_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_7l_9vytuy_1o5j5ji atm_rd_8stvzk_1o5j5ji atm_rd_8stvzk_1mj13j2"
        }));
    c.displayName = 'TextLink';
    e.default = c
}), "3e8391", ["60c631", "2d8af3", "4786a8", "aabdb1", "0d3432", "4cb147", "92749c"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1]));
    var s = t(r(d[2])),
        o = r(d[3]);
    e.default = ({
        disabled: t,
        errors: l,
        sectionId: u,
        section: c
    }) => (0, o.jsx)(s.default, {
        disabled: t,
        errors: l,
        sectionId: u,
        section: c
    })
}), "4f27eb", ["ba7a76", "07aa1f", "207a8f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.GuestFoundationCheckoutTransitionEvent = {
        defaultProps: {
            schema: 'com.airbnb.jitney.event.logging.GuestFoundation:GuestFoundationCheckoutTransitionEvent:1.0.0',
            event_name: 'guestfoundation_checkout_transition'
        },
        propTypes: {}
    };
    t.fullyQualifiedName = 'GuestFoundation.v1.GuestFoundationCheckoutTransitionEvent';
    e.GuestFoundationCheckoutTransitionEventEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "4f86f0", []);
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
    }), e.default = function(t, c = []) {
        const [f, o] = (0, n().useInView)();
        return (0, u.default)(t, c, o), f
    };
    var u = t(r(d[2]))
}), "53fa26", ["ba7a76", "b99fef", "bae1c0"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const l = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 20.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm1.5-16h-3V18h3V5.5z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcCompactAlertAlt16', {
        defaultSize: 16
    });
    e.default = l
}), "568b9b", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        expectedFields: t,
        response: o
    }) {
        let l = `Expected non-null ${t.join(', ')}.`;
        o && (l += `\nGot ${JSON.stringify(o,null,2)}`);
        const u = new Error(l);
        return (0, n.reportError)(u), null
    };
    var n = r(d[0])
}), "5daffb", ["f2f40f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = n(r(d[1]));
    const f = ({
        numberOfChildren: n,
        numberOfInfants: t,
        secondaryGuestsMapping: f
    }) => {
        if (n)
            for (let t = 0; t < n; t++) {
                const n = f[`child${t}`];
                if (!n ? .isUserLegalGuardianOfGuest || !n ? .age) return !1
            }
        if (t)
            for (let n = 0; n < t; n++) {
                const t = f[`infant${n}`];
                if (!t ? .isUserLegalGuardianOfGuest) return !1
            }
        return !0
    };
    e.default = n => {
        const {
            enableDependencies: s
        } = n, u = {};
        if (s && s.length > 0) {
            const l = f(n);
            s.filter(t.default).forEach((n => {
                u[n] = l
            }))
        }
        return u
    }
}), "5fffb8", ["ba7a76", "58861b"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.GuestPickerViewportPresentationSession = {
        defaultProps: {},
        propTypes: {}
    };
    t.fullyQualifiedName = 'Checkout.v1.GuestPickerViewportPresentationSession';
    e.GuestPickerViewportPresentationSessionEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "61e0c2", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1])), r(d[2]);
    var _ = r(d[3]),
        s = t(r(d[4])),
        l = r(d[5]);
    const c = "ru7gfu8 atm_9s_1txwivl atm_ar_1sbvcyy",
        v = "e5a8ztu atm_9s_1txwivl atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_7l_1sx08hh atm_cs_10d11i2",
        n = "e1bn1evu atm_c8_km0zk7 atm_g3_18khvle atm_fr_1m9t47k",
        u = "e98iid2 atm_cs_6adqpa",
        h = "i1v6dnkm atm_h3_yh40bf",
        f = "t1mvbzda atm_lk_evh4rp";
    e.default = function({
        rightAlign: t,
        larger: x,
        lighter: o,
        text: j
    }) {
        const k = (0, _.useCx)();
        return j ? (0, l.jsx)("div", {
            className: k(t && c),
            children: (0, l.jsxs)("div", {
                className: k(v, x && n, o && u),
                children: [(0, l.jsx)("div", {
                    className: k(h),
                    children: (0, l.jsx)(s.default, {
                        size: 12,
                        decorative: !0
                    })
                }), (0, l.jsx)("div", {
                    className: k(f),
                    children: j
                })]
            })
        }) : null
    }
}), "739a0c", ["ba7a76", "07aa1f", "ea4b89", "4786a8", "568b9b", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var T = (function(T) {
        return T.RESERVATION = "Reservation2", T.TRIP = "MtTrip", T.FIXED_AMOUNT_DONATION = "FixedAmountDonation", T.CLAIM_GUEST_TO_HOST = "ClaimGuestToHost", T.CLAIM_GUEST_TO_AIRBNB = "ClaimGuestToAirbnb", T.RESOLUTION = "Resolution::Resolution", T.PEER_TO_PEER_TRANSFER = "PeerToPeerTransfer", T.GUEST_TRAVEL_INSURANCE = "GUEST_TRAVEL_INSURANCE", T
    })(T || {});
    e.default = T
}), "75a800", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getCheckoutUrlWithUpdates = function(n, u) {
        let {
            pathname: y
        } = n.location;
        return l.forEach((n => {
            -1 !== y.indexOf(n) && (y = y.slice(0, y.indexOf(n)))
        })), `${y}${(0,s.querystringify)((0,c.coerceStaysCheckoutParams)({...(0,t.default)(n.location.search),...(0,o.default)(u,f)},!0,!0))}`
    }, e.getDatesDetailsFromUrl = function(n) {
        return {
            checkin: n ? .queryParams ? .checkin || null,
            checkout: n ? .queryParams ? .checkout || null
        }
    }, e.getGuestDetailsFromUrl = function(n) {
        const u = n.queryParams;
        return {
            adults: Number(u.numberOfAdults) || 1,
            children: Number(u.numberOfChildren) || 0,
            infants: Number(u.numberOfInfants) || 0,
            guests: Number(u.numberOfGuests) || 0,
            pets: Number(u.numberOfPets) || 0
        }
    }, e.getInitialDisableDependencies = function(n) {
        const s = (0, t.default)(n.location.search);
        return {
            DATES: !(!s[c.QueryParamKeys.checkin] || !s[c.QueryParamKeys.checkout]),
            FIRST_MESSAGE: !0,
            GUEST_COUNT: !0,
            LOGIN: u.default.isLoggedIn(),
            AIRBNB_ORG_GUEST_TYPE_SELECTOR: void 0 !== s[c.QueryParamKeys.airbnbOrgGuestType],
            AIRBNB_ORG_EMERGENCY_SELECTOR: void 0 !== s[c.QueryParamKeys.airbnbOrgResponseId],
            AIRBNB_ORG_THIRD_PARTY_BOOKING: void 0 !== s[c.QueryParamKeys.pendingGuestId] || void 0 !== s[c.QueryParamKeys.pendingTravelerId],
            HALLOWEEN_ATTESTATION: !0,
            COVID_ATTESTATION: !0
        }
    }, e.getProductIdFromUrl = function(n) {
        return n ? .queryParams ? .productId || null
    };
    var u = n(r(d[1])),
        t = n(r(d[2])),
        s = r(d[3]),
        o = n(r(d[4])),
        c = r(d[5]);
    const l = ['/house-rules', '/whos-coming', '/confirm-and-pay', '/confirm-and-pay2', '/verify-phone', '/house_rules', '/whos_coming', '/confirm_and_pay', '/confirm_and_pay2', '/verify_phone'],
        f = Object.values(c.QueryParamKeys)
}), "7ccce6", ["ba7a76", "06a99e", "a7c4ef", "670e8c", "45db44", "261c30"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isExperiencesProduct = e.checkoutProfilePhotoKey = e.checkoutFirstMessageKey = void 0;
    var c = r(d[0]),
        o = r(d[1]);
    e.isExperiencesProduct = c => c === o.BillingType.TRIP;
    e.checkoutFirstMessageKey = (0, c.createUIKey)('checkout-first-message'), e.checkoutProfilePhotoKey = (0, c.createUIKey)('checkout-profile-photo')
}), "82eab1", ["005fd5", "e320b6"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        n.default.emit('ariaLiveAnnouncement', t)
    };
    var n = t(r(d[1]))
}), "8a93fb", ["ba7a76", "abc3e4"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = {};
    e.default = void 0;
    var n = t(r(d[1]));
    Object.keys(n).forEach((function(t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(u, t) || t in e && e[t] === n[t] || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return n[t]
            }
        }))
    }));
    e.default = n.default
}), "9092d5", ["45f788", "0d8e0a"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.ExperiencesGuestPickerViewportPresentationSession = {
        defaultProps: {},
        propTypes: {}
    };
    t.fullyQualifiedName = 'Checkout.v1.ExperiencesGuestPickerViewportPresentationSession';
    e.ExperiencesGuestPickerViewportPresentationSessionEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "981f0a", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var _ = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    _(r(d[1])), r(d[2]);
    var t = r(d[3]),
        c = (r(d[4]), r(d[5]));
    const s = "t143y0mz atm_c8_9oan3l atm_g3_1dzntr8 atm_cs_18jqzaw",
        z = "dgx9nig atm_7l_1oqmvsg",
        l = "b1k3iqvc atm_cs_19iasv6",
        o = "lm64rc atm_c8_1msv7ax",
        n = "lgageyn atm_c8_sz6sci atm_g3_17zsb9a atm_fr_kzfbxz atm_cs_10d11i2 atm_c8_sz6sci__oggzyc atm_g3_17zsb9a__oggzyc atm_fr_kzfbxz__oggzyc",
        b = "l1tvrf7o atm_c8_sz6sci__oggzyc atm_g3_17zsb9a__oggzyc atm_fr_kzfbxz__oggzyc atm_lo_exct8b__oggzyc";
    e.default = function({
        children: _,
        bolder: f,
        darkDisabled: u,
        disabled: v,
        larger: y,
        largest: x,
        id: k,
        largeDesktop: j
    }) {
        const q = (0, t.useCx)();
        return (0, c.jsx)("div", {
            className: q(s, y && o, x && n, v && !u && z, f && l, j && b),
            id: k,
            "aria-disabled": v ? 'true' : void 0,
            children: _
        })
    }
}), "a1b040", ["ba7a76", "07aa1f", "ea4b89", "4786a8", "aabdb1", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function o() {
        const t = r(d[1]);
        return o = function() {
            return t
        }, t
    }

    function n() {
        const t = r(d[2]);
        return n = function() {
            return t
        }, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.LOGGING_PREFIX = e.FUTURE_CHECKOUT_LOGGING_PREFIX = void 0, e.logCheckoutFlowCompletionEvent = function(t, o) {
        v(t, 2, !1, o)
    }, e.logCheckoutFlowEntryApiResponseEvent = function(t, o, n) {
        v(t, 5, o, n)
    }, e.logCheckoutFlowEntryEvent = function(t, o, n) {
        v(t, 1, o, n)
    }, e.throwAndLogNullResponseException = function({
        expectedFields: t,
        response: o
    }) {
        const {
            __typename: n
        } = o || {};
        return (0, s.airdogCount)('checkoutPlatform.err.sectionNullResponseException', 1, [`section_type:${n}`]), (0, u.default)({
            expectedFields: t,
            response: o
        })
    }, e.transformContactHostFlowLoggingData = e.transformCheckoutLoggingData = void 0;
    var _ = r(d[3]),
        s = r(d[4]),
        c = t(r(d[5])),
        u = t(r(d[6]));
    e.LOGGING_PREFIX = 'checkout_platform', e.FUTURE_CHECKOUT_LOGGING_PREFIX = 'HOMES_FUTURE_CHECKOUT_PLATFORM';

    function l(t, o) {
        c.default.logJitneyEvent({
            schema: t,
            event_data: o
        })
    }
    const p = {
        LUX: 3,
        LUXE: 3,
        MARKETPLACE: 1,
        PLUS: 2,
        UNDEFINED: void 0
    };

    function v(t, o, s, c) {
        s || t && ('Stays' !== c || 'listing_id' in t && t.listing_id) && ('Experiences' !== c || 'product_id' in t && t.product_id) || (0, _.warn)(new Error(`[Checkout][${c}] transition event bad data`), {
            extra: {
                data: t,
                transitionEventType: o
            }
        });
        const u = { ...t,
            logging_source: 1,
            transition_event_type: o
        };
        l(n().GuestFoundationCheckoutTransitionEvent, u)
    }
    e.transformCheckoutLoggingData = (t, n) => {
        const {
            __typename: _,
            client_action_id: s,
            error_code: c,
            error_message: u,
            guest_id: l,
            host_id: v,
            product_id: h,
            split_stays_data: k,
            stays_data: C,
            guest_checkout_steps: E,
            ...f
        } = t || {}, {
            __typename: y,
            split_stays_id: b,
            ...I
        } = k || {}, {
            __typename: U,
            checkin_date: L,
            checkout_date: T,
            checkout_request_type: F,
            inventory_type: O,
            is_work_trip: P,
            num_adults: G,
            num_children: N,
            num_infants: R,
            num_pets: S,
            airbnb_org_data: H,
            ...w
        } = C || {}, D = (A = C ? .checkout_product_version || null) && 'string' == typeof A ? {
            GP_SIMPLE_CHECKOUT: o().CheckoutProductVersion.GPSimpleCheckout,
            OLD_CHECKOUT: o().CheckoutProductVersion.OldCheckout,
            SIMPLE_CHECKOUT: o().CheckoutProductVersion.SimpleCheckout,
            SBUI_SENTINEL_CHECKOUT: o().CheckoutProductVersion.SBUISentinelCheckout,
            UNIFIED_CHECKOUT: o().CheckoutProductVersion.UnifiedCheckout
        }[A] : A;
        var A;
        const {
            __typename: K,
            booker_cause_id: M,
            booker_disaster_id: x,
            is_cause_id_applicable_to_listing: X,
            is_disaster_id_applicable_to_listing: V,
            open_homes_affiliated: B,
            airbnb_org_guest_type: q,
            airbnb_org_response_id: $,
            ...j
        } = H || {}, {
            checkoutId: J,
            metadata: Z
        } = n, {
            confirmationCode: z,
            tierId: Q
        } = Z || {};
        return { ...f,
            ...w,
            booking_attempt_id: z ? ? void 0,
            confirmation_code: z ? ? void 0,
            checkin_date: L ? ? void 0,
            checkout_date: T ? ? void 0,
            checkout_id: J ? ? void 0,
            checkout_product_version: D ? ? void 0,
            checkout_request_type: F ? ? void 0,
            client_action_id: s ? ? void 0,
            error_code: c ? ? void 0,
            error_message: u ? ? void 0,
            guest_id: l ? ? void 0,
            home_tier: Q ? p[Q] : void 0,
            host_id: v ? ? void 0,
            inventory_type: O ? ? void 0,
            is_work_trip: P ? ? void 0,
            listing_id: h ? ? void 0,
            num_adults: G ? ? void 0,
            num_children: N ? ? void 0,
            num_infants: R ? ? void 0,
            num_pets: S ? ? void 0,
            split_stays_data: k ? {
                split_stays_id: b ? ? void 0,
                ...I
            } : void 0,
            airbnb_org_data: H ? {
                booker_cause_id: M ? ? void 0,
                booker_disaster_id: x ? ? void 0,
                is_cause_id_applicable_to_listing: X ? ? void 0,
                is_disaster_id_applicable_to_listing: V ? ? void 0,
                open_homes_affiliated: B ? ? void 0,
                airbnb_org_guest_type: q ? {
                    CLIENT: 1,
                    SELF: 2,
                    ORGANIZATION_MEMBER: 3
                }[q] : void 0,
                airbnb_org_response_id: $ ? ? void 0,
                ...j
            } : void 0,
            guest_checkout_steps: E ? ? void 0
        }
    };
    e.transformContactHostFlowLoggingData = t => ({
        listing_id: t.productId || 0,
        checkin_date: t.checkinDate || '',
        checkout_date: t.checkoutDate || '',
        guests: (t.numAdults || 0) + (t.numChildren || 0) + (t.numInfants || 0),
        instant_book: !!t.instantBook,
        adults: t.numAdults || '',
        children: t.numChildren || '',
        infants: t.numInfants || '',
        home_tier: t.checkoutTier ? p[t.checkoutTier] : void 0,
        pets: t.numPets || ''
    })
}), "a55423", ["ba7a76", "e6586d", "4f86f0", "f2f40f", "3e4681", "c8b97a", "5daffb"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.CheckoutContext = {
        defaultProps: {},
        propTypes: {}
    };
    t.fullyQualifiedName = 'GuestFoundation.v2.CheckoutContext';
    e.CheckoutContextEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "b7d5f2", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1])), r(d[2]);
    var s = r(d[3]),
        c = r(d[4]);
    const l = "c2dnuw4 atm_9s_1txwivl atm_fc_1yb4nlp atm_h_1q9ycp6",
        n = "c2hqa31 atm_h_1h6ojuz",
        _ = "erclpxe atm_lo_1yuitx",
        o = "t17zprea atm_ll_p5ox87 atm_ks_15vqwwr",
        u = "a1e9v4ox atm_bb_idpfg4";
    e.default = function({
        action: t,
        centered: x,
        readonly: v,
        errors: h,
        text: f
    }) {
        const j = (0, s.useCx)();
        return (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)("div", {
                className: j(l, x && n),
                children: [(0, c.jsx)("div", {
                    className: j(o),
                    children: f
                }), !v && (0, c.jsx)("div", {
                    className: j(u),
                    children: t
                })]
            }), (Array.isArray(h) ? h.length > 0 : !!h) && (0, c.jsx)("div", {
                className: j(_),
                children: h
            })]
        })
    }
}), "cc8e31", ["ba7a76", "07aa1f", "ea4b89", "4786a8", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.STAYS_HOME_URL = e.SPLIT_STAYS_TITLE_FADE_END_OFFSET = e.CHECKOUT_LEAN_FRAGMENT_ERF = e.BillingType = void 0;
    e.BillingType = (function(_) {
        return _.RESERVATION = "Reservation2", _.TRIP = "MtTrip", _.FIXED_AMOUNT_DONATION = "FixedAmountDonation", _.CLAIM_GUEST_TO_HOST = "ClaimGuestToHost", _
    })({});
    e.SPLIT_STAYS_TITLE_FADE_END_OFFSET = 72, e.STAYS_HOME_URL = '/s/homes', e.CHECKOUT_LEAN_FRAGMENT_ERF = 'checkout_lean_section_fragments_v6'
}), "e320b6", []);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.CheckoutProductVersion = {
        OldCheckout: 1,
        SimpleCheckout: 2,
        GPSimpleCheckout: 3,
        SBUISentinelCheckout: 4,
        UnifiedCheckout: 5
    }
}), "e6586d", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1]));
    var u = r(d[2]);
    e.default = function(t, f) {
        return n => (0, u.jsx)(t, { ...n,
            ...f
        })
    }
}), "e8606c", ["ba7a76", "07aa1f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        s = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var _ = s(r(d[2])),
        l = t(r(d[3])),
        n = (r(d[4]), t(r(d[5]))),
        c = t(r(d[6])),
        o = t(r(d[7])),
        u = t(r(d[8])),
        f = t(r(d[9])),
        h = s(r(d[10])),
        v = r(d[11]),
        j = (t(r(d[12])), r(d[13]), t(r(d[14]))),
        p = r(d[15]),
        x = r(d[16]);
    const z = Object.freeze({
            a: ['href'],
            br: []
        }),
        w = "w1s2e4t2 atm_9s_1bgihbq",
        b = "ms6nwrd atm_lk_1ph3nq8__oggzyc atm_ll_1ph3nq8__oggzyc",
        y = "myswlhx atm_9s_1nu9bjl atm_9s_glywfm__oggzyc",
        q = "m1slopvv atm_c8_2x1prs atm_g3_1jbyh58 atm_fr_11a07z3 atm_7l_dezgoh atm_l1_1wugsn5 atm_l8_49opw0__oggzyc",
        N = "i1kkvc6n atm_gq_1ph3nq8",
        k = "i1gf5ifc atm_vy_1osqo2v atm_e2_1wugsn5",
        O = "w9izdvp atm_c8_sz6sci atm_g3_17zsb9a atm_fr_kzfbxz atm_cs_10d11i2 atm_gq_1gibeiw",
        A = "m1214vdt atm_gi_1ph3nq8 atm_gi_idpfg4__oggzyc atm_le_8tjzot__oggzyc";
    e.default = function() {
        const t = (0, v.useCx)(),
            s = l.default.t('assistant_animals_information_modal.modal_title'),
            C = (0, h.default)() === h.FORM_FACTOR.COMPACT,
            F = l.default.t('assistant_animals_information_modal.paragraphs_combined_in_html').replace('https://www.airbnb.com', ''),
            {
                scheduler: M
            } = (0, p.usePostTaskScheduler)(),
            P = (0, _.useRef)(null);
        return (0, _.useEffect)((() => {
            null !== P.current && M.requestAnimationFrame((() => {
                M.requestAnimationFrame((() => {
                    const t = (0, j.default)(P.current);
                    t ? .focus()
                }))
            }))
        }), []), (0, x.jsxs)("div", {
            ref: P,
            className: t(w),
            "data-testid": "service-animal-modal-content",
            children: [(0, x.jsx)("div", {
                className: t(b),
                children: (0, x.jsx)(n.default, {
                    children: (0, x.jsx)("span", {
                        className: t(y),
                        children: s
                    })
                })
            }), (0, x.jsxs)(c.default, {
                className: t(q),
                children: [(0, x.jsx)("div", {
                    className: t(N),
                    children: (0, x.jsx)("img", {
                        alt: l.default.t('assistant_animals_information_modal.image_description'),
                        src: l.default.t('assistant_animals_information_modal.image_url'),
                        width: "443",
                        height: "520",
                        decoding: "async",
                        className: t(k)
                    })
                }), (0, x.jsxs)("div", {
                    className: t(A),
                    children: [!C && (0, x.jsx)(f.default, {
                        startingHeadingLevel: 1,
                        children: (0, x.jsx)(u.default, {
                            children: (0, x.jsx)("div", {
                                className: t(O),
                                children: s
                            })
                        })
                    }), (0, x.jsx)(o.default, {
                        allowlist: z,
                        htmlString: F
                    })]
                })]
            })]
        })
    }
}), "f7e43c", ["ba7a76", "45f788", "07aa1f", "a9f4b1", "ea4b89", "54a476", "a58a16", "3aec37", "688dce", "b5f1d2", "e0b071", "4786a8", "5aed2e", "aabdb1", "85c661", "53bb4a", "b8c07d"]);
__r("a9f4b1").extend({
    "shared.cancel": "Cancel",
    "shared.save": "Save",
    "checkout.guest.picker.edit.button": "Edit Guests",
    "shared.Edit": "Edit",
    "assistant_animals_information_modal.modal_title": "Service animals",
    "assistant_animals_information_modal.paragraphs_combined_in_html": "Service animals aren’t pets, so there’s no need to add them here.<br><br>Travelling with an emotional support animal? Check out our <a href=\"https://www.airbnb.com/help/article/1869/assistance-animals\" target=\"_blank\">accessibility policy</a>.",
    "assistant_animals_information_modal.image_description": "A guest with a service animal being greeted by a Host",
    "assistant_animals_information_modal.image_url": "https://a0.muscache.com/pictures/adafb11b-41e9-49d3-908e-049dfd6934b6.jpg"
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/checkout-sections/sections/GuestPicker/GuestPickerGPWrapper.a85e630455.js.map