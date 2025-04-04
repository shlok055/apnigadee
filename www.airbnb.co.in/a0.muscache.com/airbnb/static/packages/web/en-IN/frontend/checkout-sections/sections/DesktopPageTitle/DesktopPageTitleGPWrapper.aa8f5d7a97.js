__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.StaysDeprecatedWrapper = void 0;
    var o = t(r(d[1])),
        n = r(d[2]),
        c = r(d[3]);
    r(d[4]);
    const s = (t, s, p) => (0, o.useEffect)((() => {
        const o = window.location.href.match(/\/book\/(\w+)\//),
            u = o ? o[1] : 'unknown';
        p && 'stays' === u && (0, c.warn)(`[Checkout] Stays SBUI migration: deprecated section ${s} is rendering`, {
            extra: {
                sectionId: t
            }
        }), (0, n.airdogCount)('checkout.stays.sbui_migration.marked_for_deprecation', 1, {
            component: s,
            id: t,
            env: "production",
            source: u
        })
    }));
    e.StaysDeprecatedWrapper = ({
        children: t,
        fullyDeprecated: o,
        sectionId: n,
        sectionComponentType: c
    }) => (s(n, c, o), t)
}), "0dbe2f", ["45f788", "07aa1f", "3e4681", "f2f40f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        const {
            search: f
        } = (0, u.useLocation)();
        if (!t) return {};
        const l = (0, n.default)(f);
        return {
            overrideBackUrl: l.isWaitToPay ? (0, c.default)(l) : (0, o.default)(l)
        }
    };
    var u = r(d[1]),
        n = t(r(d[2])),
        o = t(r(d[3])),
        c = t(r(d[4]))
}), "1e833f", ["ba7a76", "1e300f", "a7c4ef", "bc3770", "91fa84"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        LtrIcon: t,
        RtlIcon: n,
        ...o
    }) {
        const f = (0, u.default)(),
            l = o;
        return f === u.Direction.RTL ? (0, c.jsx)(n, { ...l
        }) : (0, c.jsx)(t, { ...l
        })
    };
    n(r(d[2]));
    var u = t(r(d[3])),
        c = r(d[4])
}), "25ce18", ["45f788", "ba7a76", "07aa1f", "dbfcd8", "b8c07d"]);
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    r(d[0]);
    var _ = r(d[1]),
        t = (r(d[2]), r(d[3])),
        f = r(d[4]),
        s = r(d[5]);
    (0, t.mergeStyles)(_.baseIconButtonCssFragments, s.iconCssFragments, {
        component: "\n    &::before {\n      width: 48px;\n      height: 48px;\n    }\n  "
    });
    e.default = (0, f.createVariant)(_.BaseIconButton, {
        component: "c9103oq atm_1s_glywfm atm_9s_1o8liyq atm_5j_1ssbidh atm_kd_idpfg4 atm_7l_1u9drld atm_2d_1j28jx2 atm_9j_tlke0l atm_tl_1gw4zv3 atm_9s_1o8liyq atm_mk_h2mmj6 atm_l8_idpfg4 atm_gi_idpfg4 atm_3f_glywfm atm_26_1j28jx2 atm_7l_hkljqm atm_uc_10d7vwn atm_kd_glywfm atm_kd_glywfm_1w3cfyq atm_uc_aaiy6o_1w3cfyq atm_70_1snd6fg_1w3cfyq atm_3f_glywfm_e4a3ld atm_l8_idpfg4_e4a3ld atm_gi_idpfg4_e4a3ld atm_3f_glywfm_1r4qscq atm_kd_glywfm_6y7yyg atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_kd_glywfm_pfnrn2_1oszvuo atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_1snd6fg_pfnrn2_1oszvuo atm_3f_glywfm_1icshfk_1oszvuo atm_l8_idpfg4_1icshfk_1oszvuo atm_gi_idpfg4_1icshfk_1oszvuo atm_3f_glywfm_b5gff8_1oszvuo atm_kd_glywfm_2by9w9_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_k4_1piyxwk_1o5j5ji atm_9j_13gfvf7_1o5j5ji atm_7l_jajhky_1o5j5ji atm_uc_glywfm__1rrf6b5 atm_7l_wbi19n_1nos8r_uv4tnr atm_26_zbnr2t_1rqz0hn_uv4tnr atm_7l_1wxwdr3_4fughm_uv4tnr atm_26_1j28jx2_1r92pmq_uv4tnr atm_7l_wbi19n_csw3t1 atm_tr_ffmgpj_csw3t1 atm_26_zbnr2t_1ul2smo atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_uc_aaiy6o_1w3cfyq atm_70_glywfm_1w3cfyq atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_70_1e7pbig_9xuho3 atm_26_zbnr2t_9xuho3 atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_glywfm_pfnrn2_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_70_1e7pbig_1buez3b_1oszvuo atm_26_zbnr2t_1buez3b_1oszvuo atm_7l_1wxwdr3_1o5j5ji atm_26_1j28jx2_154oz7f atm_92_1yyfdc7_vmtskl atm_9s_1ulexfb_vmtskl atm_mk_stnw88_vmtskl atm_tk_1ssbidh_vmtskl atm_fq_1ssbidh_vmtskl atm_tr_pryxvc_vmtskl atm_vy_1vi7ecw_vmtskl atm_e2_1vi7ecw_vmtskl atm_5j_1ssbidh_vmtskl atm_vy_fyhuej_vmtskl atm_e2_fyhuej_vmtskl",
        icon: "ism5y6t atm_mk_h2mmj6",
        baseButtonShowOnlyOnKeyboardFocus: "b1ja59kh atm_3f_idpfg4_1r63tcj atm_7h_hxbz6r_1r63tcj atm_7i_ysn8ba_1r63tcj atm_e2_t94yts_1r63tcj atm_ks_15vqwwr_1r63tcj atm_ks_zryt35_1r63tcj atm_l8_idpfg4_1r63tcj atm_mk_stnw88_1r63tcj atm_vv_1q9ccgz_1r63tcj atm_vy_t94yts_1r63tcj",
        baseAnchorShowOnlyOnKeyboardFocus: "bkpi3ol atm_3f_idpfg4_1r63tcj atm_7h_hxbz6r_1r63tcj atm_7i_ysn8ba_1r63tcj atm_e2_t94yts_1r63tcj atm_ks_15vqwwr_1r63tcj atm_ks_zryt35_1r63tcj atm_l8_idpfg4_1r63tcj atm_mk_stnw88_1r63tcj atm_vv_1q9ccgz_1r63tcj atm_vy_t94yts_1r63tcj"
    })
}), "373f51", ["ea4b89", "cfbf16", "4786a8", "aabdb1", "92749c", "0a48f0"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1]));
    var c = r(d[2]),
        n = t(r(d[3])),
        o = r(d[4]);
    e.default = ({
        section: t,
        sectionId: s
    }) => (0, o.jsx)(c.StaysDeprecatedWrapper, {
        fullyDeprecated: !0,
        sectionId: s,
        sectionComponentType: "DESKTOP_PAGE_TITLE",
        children: (0, o.jsx)(n.default, { ...t
        })
    })
}), "4a3a7c", ["ba7a76", "07aa1f", "0dbe2f", "79eca9", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return (0, n.jsx)(u.default, {
            LtrIcon: f.default,
            RtlIcon: l.default,
            ...t
        })
    };
    t(r(d[1]));
    var u = t(r(d[2])),
        f = t(r(d[3])),
        l = t(r(d[4])),
        n = r(d[5])
}), "71ef0e", ["ba7a76", "07aa1f", "25ce18", "b858e8", "9ce10f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        l = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var c = l(r(d[2])),
        s = t(r(d[3])),
        o = (r(d[4]), t(r(d[5]))),
        _ = t(r(d[6])),
        u = r(d[7]),
        f = r(d[8]),
        n = t(r(d[9])),
        v = t(r(d[10])),
        h = r(d[11]),
        j = r(d[12]),
        p = t(r(d[13])),
        x = r(d[14]),
        b = r(d[15]);
    const y = "c1j0ilfk atm_lo_1jcdlzj atm_le_1ixj6vq atm_9s_1txwivl atm_ar_vrvcex atm_h_1h6ojuz",
        P = "hbh291c atm_ll_f6fqlb atm_gz_145cs6j atm_h3_19bvopo",
        k = "tagpari atm_c8_1s1l5wp atm_g3_1cxhbm1 atm_fr_1ulgq8t atm_cs_10d11i2";
    e.default = (0, h.withPlatformState)((({
        billItemProductType: t
    }) => ({
        billItemProductType: t
    })), (({
        billItemProductType: t
    }) => [t]))((function({
        backText: t,
        pageHeading: l,
        platformState: {
            billItemProductType: h
        }
    }) {
        const T = (0, x.useCx)(),
            w = t && 'string' == typeof t ? t : s.default.t('pwa.core.navigation_back'),
            z = (0, j.isExperiencesProduct)(h),
            {
                overrideBackUrl: I
            } = (0, p.default)(!z),
            q = (0, u.getHistory)(),
            H = !q || !(0, f.getPreviousHistoryEntry)(q.location),
            N = (0, c.useCallback)((t => {
                I || H || (q.goBack(), t.preventDefault())
            }), [q, I, H]);
        return (0, b.jsx)(n.default, {
            children: (0, b.jsxs)("div", {
                className: T(y),
                children: [(0, b.jsx)("div", {
                    className: T(P),
                    children: (0, b.jsx)(_.default, {
                        "aria-label": w,
                        href: I || '/',
                        onPress: N,
                        children: (0, b.jsx)(o.default, {
                            decorative: !0,
                            size: 16,
                            effectiveStrokeWidth: 1.5
                        })
                    })
                }), (0, b.jsx)("div", {
                    className: T(k),
                    children: (0, b.jsx)(v.default, {
                        children: l
                    })
                })]
            })
        })
    }))
}), "79eca9", ["ba7a76", "45f788", "07aa1f", "a9f4b1", "ea4b89", "71ef0e", "373f51", "7934b6", "0004f8", "b5f1d2", "688dce", "de4273", "82eab1", "1e833f", "4786a8", "b8c07d"]);
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(c) {
        const {
            code: o
        } = (0, t.coerceStaysCheckoutParams)(c);
        return `/trips/v1/ro/RESERVATION2_CHECKIN/${o}`
    };
    var t = r(d[0])
}), "91fa84", ["261c30"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const o = (0, t(r(d[1])).default)({
        svgContents: "<path fill=\"none\" d=\"m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcSystemChevronForwardStroked', {});
    e.default = o
}), "9ce10f", ["ba7a76", "9eb679"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n) {
        const {
            productId: c,
            checkin: s,
            checkout: o,
            numberOfAdults: f,
            numberOfChildren: h,
            numberOfGuests: l,
            numberOfInfants: b,
            numberOfPets: O
        } = (0, u.coerceStaysCheckoutParams)(n), _ = {
            productId: c,
            check_in: s,
            check_out: o,
            guests: l,
            adults: f,
            children: h,
            infants: b,
            pets: O
        };
        return `/rooms/${c}${(0,t.querystringify)(_)}`
    };
    var t = r(d[0]),
        u = r(d[1])
}), "bc3770", ["670e8c", "261c30"]);
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
__r("a9f4b1").extend({
    "pwa.core.navigation_back": "Back"
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/checkout-sections/sections/DesktopPageTitle/DesktopPageTitleGPWrapper.333661e239.js.map