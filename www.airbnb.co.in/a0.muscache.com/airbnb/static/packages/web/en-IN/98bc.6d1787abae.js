__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var o = r(d[0]).default;

    function t() {
        const n = o(r(d[1]));
        return t = function() {
            return n
        }, n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getIdentityFreezeReason = function(o) {
        const {
            identity: t
        } = v(o);
        if (!t) return null;
        const {
            freeze_reason: n
        } = t;
        if (!n) return null;
        return n
    }, e.redirectToReservationPage = function({
        code: o,
        canceled: v = !1,
        freezeReason: y,
        isExperiences: h,
        redirectUrl: p,
        loggingContext: w
    }) {
        const P = 'background_check' === y,
            b = {
                code: o,
                fov_flow_canceled: v ? 1 : void 0,
                is_from_fov_flow: P ? void 0 : 1
            };
        if (h) return void(window.location.href = p || '');
        if ((0, u.hasRequiredSplitStaysQueryParams)()) {
            const n = { ...b,
                ...(0, f.coerceStaysCheckoutParams)({ ...(0, c.default)(),
                    orderId: void 0
                }, !1, !0)
            };
            (0, l.pushToHistory)(`${(0,_.createViaductP5Url)(o||'')}?${t().default.stringify(n)}`)
        } else if (P)(0, n.airdogCount)('p5_migration.route_safety_pause_to_viaduct_p5', 1, {
            loggingContext: w,
            freezeReason: y,
            canceled: v
        }), (0, l.pushToHistory)((0, _.createViaductP5Url)(o || ''));
        else {
            (0, n.airdogCount)('p5_migration.route_fov_to_viaduct_p5', 1, {
                loggingContext: w,
                freezeReason: y,
                canceled: v
            });
            const {
                fov_flow_canceled: c
            } = b;
            (0, l.pushToHistory)(`${(0,_.createViaductP5Url)(o||'')}${c?`?${t().default.stringify({fov_flow_canceled:c})}`:''}`)
        }(0, s.removeFovFlowModalFromDom)()
    }, e.shouldTriggerFovFlow = function(o) {
        const {
            should_trigger_fov_flow: t
        } = v(o);
        return !!t
    };
    var n = r(d[2]),
        c = o(r(d[3])),
        u = r(d[4]),
        l = r(d[5]),
        s = r(d[6]),
        f = r(d[7]),
        _ = r(d[8]);

    function v(o = {}) {
        const {
            checkout_bill: t
        } = o;
        if (!t || !t.bill) return {};
        const {
            booking_results: n
        } = t.bill;
        return Array.isArray(n) && n.length ? n[0] : {}
    }
}), "02f9df", ["ba7a76", "e950a3", "3e4681", "a7c4ef", "bca969", "7b2359", "117de6", "261c30", "5f0a2b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var o = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(o, t = () => {
        {
            const {
                location: o
            } = window, t = `${o.protocol}//${o.hostname}${o.pathname}`;
            window.location.replace(t)
        }
    }, n = () => {}, l = () => {}, p = () => {}) {
        if (!s.default.isLoggedIn()) return Promise.resolve();
        if (o.context) {
            const s = o.otherInfo ? o.otherInfo : {},
                _ = o.bookingData ? o.bookingData : {},
                v = (0, h.logGetApiSessionStart)(o.context);
            return f.ReinhardtApi.getVerification({
                userContext: o.context,
                otherInfo: s,
                freezeReason: o.freezeReason,
                reservationConfirmationCode: _.reservationCode,
                sessionId: v
            }).then((s => {
                if (s && !s.flow) return s.verified ? t() : n();
                if (s && (0, f.shouldRedirectFromPendingFlow)(s)) return t();
                const c = {
                    context: o.context,
                    identityResponse: s,
                    bookingData: _,
                    freezeReason: o.freezeReason
                };
                C({ ...o,
                    bootstrapData: c,
                    onFinished: I(t),
                    onCanceled: I(n),
                    onModalLaunched: D(l),
                    onDisplayPreModalLoader: p
                })
            })).catch((() => {
                (0, c.airdogCount)('account_fov.get_verifications.api.error'), n()
            })).finally((() => {
                (0, u.logSessionEnd)({
                    sessionId: v,
                    useSendBeacon: !0
                })
            }))
        }
        return new Promise((t => {
            C({ ...o,
                bootstrapData: {
                    reduxData: {}
                },
                onFinished: () => {
                    t({})
                },
                onCanceled: () => {
                    t({
                        canceled: !0
                    })
                }
            })
        }))
    }, e.removeFovFlowModalFromDom = function() {
        const o = document.getElementById(p.FOV_MODAL_CONTAINER_ID);
        o && v(o)
    };
    o(r(d[1]));
    var t = o(r(d[2])),
        n = o(r(d[3])),
        s = o(r(d[4])),
        c = r(d[5]),
        u = r(d[6]),
        l = o(r(d[7])),
        f = r(d[8]),
        h = r(d[9]),
        p = r(d[10]),
        _ = r(d[11]);
    const D = o => () => (n.default.pauseNextPageTimer(), o()),
        I = o => () => (n.default.resumeNextPageTimer(), o());
    async function v(o) {
        return new Promise((n => {
            Promise.resolve().then((() => {
                t.default.unmountComponentAtNode(o), n()
            }))
        }))
    }

    function C(o = {}) {
        let n = document.getElementById(p.FOV_MODAL_CONTAINER_ID);
        n || (n = document.createElement('div'), n.setAttribute('id', p.FOV_MODAL_CONTAINER_ID), document.body.appendChild(n)), v(n).then((() => {
            t.default.render((0, _.jsx)(l.default, { ...o
            }), n)
        }))
    }
}), "117de6", ["ba7a76", "07aa1f", "b67917", "5c13fa", "06a99e", "3e4681", "9e7031", "d47697", "57b692", "f017de", "e3eb42", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var _ = r(d[0]),
        t = r(d[1]),
        s = r(d[2]),
        f = r(d[3]),
        l = r(d[4]),
        o = r(d[5]),
        c = r(d[6]);
    const y = (0, t.mergeStyles)(f.baseButtonCssFragments, l.dls19CssFragments, c.largeCssFragments, o.brandCssFragments);
    (0, _.cssFragmentsObjToStylesFn)(y);
    e.default = (0, s.createVariant)(o.BrandButton, {
        base: "beh4qrt atm_9j_tlke0l atm_9s_1o8liyq atm_gi_idpfg4 atm_mk_h2mmj6 atm_r3_1h6ojuz atm_rd_glywfm atm_3f_uuagnh atm_70_5j5alw atm_vy_1wugsn5 atm_l8_1cudcw5 atm_26_d0eyo3 atm_7l_jt7fhx atm_c8_dlk8xv atm_bx_1kw7nm4 atm_tl_1gw4zv3 atm_9j_13gfvf7_1o5j5ji atm_k4_si67jz_1o5j5ji",
        component: "c96kyml atm_bx_48h72j atm_c8_2x1prs atm_g3_1jbyh58 atm_fr_11a07z3 atm_cs_10d11i2 atm_5j_t09oo2 atm_kd_glywfm atm_uc_1lizyuv atm_r2_1j28jx2 atm_c8_vvn7el atm_g3_k2d186 atm_fr_1vi102y atm_l8_28hvra atm_jb_9g2opv atm_3f_glywfm atm_26_1c4m0nl atm_7l_1v2u014 atm_uc_glywfm__1rrf6b5 atm_kd_glywfm_1w3cfyq atm_uc_aaiy6o_1w3cfyq atm_70_1b8lkes_1w3cfyq atm_3f_glywfm_e4a3ld atm_l8_idpfg4_e4a3ld atm_gi_idpfg4_e4a3ld atm_3f_glywfm_1r4qscq atm_kd_glywfm_6y7yyg atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_kd_glywfm_pfnrn2_1oszvuo atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_1b8lkes_pfnrn2_1oszvuo atm_3f_glywfm_1icshfk_1oszvuo atm_l8_idpfg4_1icshfk_1oszvuo atm_gi_idpfg4_1icshfk_1oszvuo atm_3f_glywfm_b5gff8_1oszvuo atm_kd_glywfm_2by9w9_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_tr_18md41p_csw3t1 atm_k4_kb7nvz_1o5j5ji atm_3f_glywfm_1nos8r atm_26_1c4m0nl_1nos8r atm_7l_1v2u014_1nos8r atm_3f_glywfm_csw3t1 atm_26_mrkt56_csw3t1 atm_7l_1v2u014_csw3t1 atm_3f_glywfm_1o5j5ji atm_26_o3liez_1o5j5ji atm_7l_1v2u014_1o5j5ji atm_26_3e3vs__1vlbm2j atm_26_3e3vs_1nos8r_1vlbm2j atm_26_fyrh5g_csw3t1_1vlbm2j atm_26_o3liez_1o5j5ji_1vlbm2j",
        fullWidth: "f5ip6ow atm_vy_1osqo2v",
        showOnlyOnKeyboardFocus: "sg1c4j7 atm_3f_idpfg4_1r63tcj atm_7h_hxbz6r_1r63tcj atm_7i_ysn8ba_1r63tcj atm_e2_t94yts_1r63tcj atm_ks_15vqwwr_1r63tcj atm_ks_zryt35_1r63tcj atm_l8_idpfg4_1r63tcj atm_mk_stnw88_1r63tcj atm_vv_1q9ccgz_1r63tcj atm_vy_t94yts_1r63tcj"
    })
}), "278724", ["2d8af3", "aabdb1", "92749c", "ee5719", "c642d5", "c4afb2", "59b502"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, n) {
        if (n.length < t) throw new TypeError(t + ' argument' + (t > 1 ? 's' : '') + ' required, but only ' + n.length + ' present')
    }
}), "2850ed", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, l) {
        (0, f.default)(2, arguments);
        var n = (0, u.default)(t),
            c = (0, u.default)(l);
        return n.getTime() < c.getTime()
    };
    var u = t(r(d[1])),
        f = t(r(d[2]))
}), "2fa9cc", ["ba7a76", "7a43da", "2850ed"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.buttonLayoutCssFragments = void 0;
    var t = r(d[0]),
        n = r(d[1]),
        o = (r(d[2]), r(d[3])),
        _ = r(d[4]);
    const s = e.buttonLayoutCssFragments = (0, o.mergeStyles)(t.baseButtonLayoutCssFragments, {
        container: "",
        content: "",
        leading: "\n    margin-left: -6px;\n    margin-right: 4px;\n  ",
        trailing: "\n    margin-left: 4px;\n    margin-right: -6px;\n  "
    });
    (0, n.cssFragmentsObjToStylesFn)(s);
    e.default = (0, _.createVariant)(t.BaseButtonLayout, {
        container: "c863l3 atm_9s_1txwivl atm_ar_vrvcex atm_h_1h6ojuz atm_fc_1h6ojuz atm_mj_glywfm",
        content: "ck024z4",
        leading: "l1lzkx0q atm_gz_yjp0fh atm_h0_1y44olf",
        trailing: "t1f0pl66 atm_gz_1y44olf atm_h0_yjp0fh"
    })
}), "3eacc9", ["a85898", "2d8af3", "4786a8", "aabdb1", "92749c"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = t(r(d[1]));
    t(r(d[2]));
    const o = {
        sections: {
            TripDetailsCard: {
                loader: (0, r(d[3]).normalizeLoaderWithCaching)((() => r(d[5])(d[4]).then(l.default)))
            }
        }
    };
    e.default = o
}), "4178b3", ["ba7a76", "45f788", "d17907", "b4385c", "3df4a5", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, f) {
        (0, l.default)(2, arguments);
        var o = (0, n.default)(t),
            s = (0, u.default)(f);
        if (isNaN(s)) return new Date(NaN);
        if (!s) return o;
        var v = o.getDate(),
            c = new Date(o.getTime());
        c.setMonth(o.getMonth() + s + 1, 0);
        var D = c.getDate();
        return v >= D ? c : (o.setFullYear(c.getFullYear(), c.getMonth(), v), o)
    };
    var u = t(r(d[1])),
        n = t(r(d[2])),
        l = t(r(d[3]))
}), "4c9edc", ["ba7a76", "92e081", "7a43da", "2850ed"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const o = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm7 9.08-9.5 9.5-4.5-4.5L6.88 17l6.62 6.62L25.12 12 23 9.88z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcCompactVerified16', {
        defaultSize: 16
    });
    e.default = o
}), "551cbe", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, n) {
        (0, l.default)(2, arguments);
        var c = (0, u.default)(n);
        return (0, f.default)(t, 12 * c)
    };
    var u = t(r(d[1])),
        f = t(r(d[2])),
        l = t(r(d[3]))
}), "5d7f68", ["ba7a76", "92e081", "4c9edc", "2850ed"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const s = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M8 3a5 5 0 1 1 0 10A5 5 0 0 1 8 3z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16"
        }
    }, 'IcCompactMapsGeneric16', {
        defaultSize: 16
    });
    e.default = s
}), "62b8a4", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        (0, n.default)(1, arguments);
        var o = Object.prototype.toString.call(t);
        return t instanceof Date || 'object' == typeof t && '[object Date]' === o ? new Date(t.getTime()) : 'number' == typeof t || '[object Number]' === o ? new Date(t) : ('string' != typeof t && '[object String]' !== o || 'undefined' == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn((new Error).stack)), new Date(NaN))
    };
    var n = t(r(d[1]))
}), "7a43da", ["ba7a76", "2850ed"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.phoneNumberId = e.partAttestationId = e.indianPanId = e.guestPickerId = e.guestAttestationId = e.firstMessageId = e.datePickerId = e.cubaAttestationId = e.chinaNameVerificationId = e.chinaEmailVerificationId = e.airbnbDotOrgThirdPartBookingId = e.airbnbDotOrgGuestTypeSelectorId = e.airbnbDotOrgEmergencySelectorId = void 0, e.prefetchGpP5 = function({
        scheduler: t
    }) {
        return t.postTask((() => {
            (0, o.getStaysConfirmationRoutePrepare)(), (0, o.getStaysConfirmationRoute)(), I.default.getBootstrap('m1_co_travelers') && ((0, n.default)(T.default), (0, n.default)(_.default), (0, n.default)(A.default))
        }), {
            delay: 250,
            event: 'hydrate-complete'
        })
    }, e.propertyDamageConsentId = e.profilePhotoId = void 0;
    var o = r(d[1]),
        I = t(r(d[2])),
        n = t(r(d[3])),
        T = t(r(d[4])),
        _ = t(r(d[5])),
        A = t(r(d[6]));
    e.cubaAttestationId = 'CUBA_ATTESTATION', e.phoneNumberId = 'PHONE_VERIFICATION', e.profilePhotoId = 'PROFILE_PHOTO', e.indianPanId = 'PAN_ID_TASK', e.firstMessageId = 'FIRST_MESSAGE', e.partAttestationId = 'PARTY_ATTESTATION', e.guestPickerId = 'GUEST_COUNT', e.datePickerId = 'DATES', e.airbnbDotOrgEmergencySelectorId = 'AIRBNB_ORG_EMERGENCY_SELECTOR', e.airbnbDotOrgGuestTypeSelectorId = 'AIRBNB_ORG_GUEST_TYPE_SELECTOR', e.airbnbDotOrgThirdPartBookingId = 'AIRBNB_ORG_THIRD_PARTY_BOOKING', e.guestAttestationId = 'GUEST_ATTESTATION', e.chinaEmailVerificationId = 'CHINA_EMAIL_VERIFICATION', e.chinaNameVerificationId = 'CHINA_NAME_VERIFICATION', e.propertyDamageConsentId = 'PROPERTY_DAMAGE_CONSENT'
}), "8a7c04", ["ba7a76", "f1aefd", "c235f8", "6a608d", "c5d654", "4178b3", "c39e5b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        l = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return (0, c.jsx)(f.default, { ...t,
            loader: o,
            renderPlaceholder: f.renderNull
        })
    };
    var u = l(r(d[0])),
        f = (l(r(d[2])), t(r(d[3]))),
        n = l(r(d[4])),
        c = r(d[5]);
    const o = Object.assign((0, n.default)((() => r(d[7])(d[6]).then(u.default))), {
        prefetch: () => r(d[7]).prefetch(d[6])
    })
}), "8d17b4", ["45f788", "ba7a76", "07aa1f", "018c3b", "b4385c", "b8c07d", "11f78b", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.findMatch = function(t) {
        return t ? .find((({
            match: t
        }) => t.isExact))
    }, e.isPrefetchEnabled = function() {
        if (n.default.getBootstrap('prefetch_disabled')) return !1;
        const t = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {},
            {
                effectiveType: o,
                saveData: c
            } = t,
            f = !o && n.default.getBootstrap('enable_prefetch_on_safari') || '4g' === o;
        return !c && f
    }, e.prefetchDefaultStrategy = function({
        formFactor: t,
        href: n,
        prefetch: o,
        scheduler: c
    }) {
        if ('compact' !== t) return;
        return c.postTask((() => o({
            path: n
        })), {
            delay: 250,
            event: 'hydrate-complete'
        })
    };
    var n = t(r(d[1]))
}), "8f1e90", ["ba7a76", "c235f8"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        if (null === t || !0 === t || !1 === t) return NaN;
        var u = Number(t);
        if (isNaN(u)) return u;
        return u < 0 ? Math.ceil(u) : Math.floor(u)
    }
}), "92e081", []);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.CheckoutRequirementsInternalStateSession = {
        defaultProps: {},
        propTypes: {}
    };
    t.fullyQualifiedName = 'Checkout.v1.CheckoutRequirementsInternalStateSession';
    e.CheckoutRequirementsInternalStateSessionEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "a4a9b9", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.baseButtonLayoutStylesFn = e.baseButtonLayoutCssFragments = e.BaseButtonLayout = void 0;
    n(r(d[1]));
    var t = r(d[2]),
        s = r(d[3]),
        l = r(d[4]);
    e.BaseButtonLayout = ({
        css: n,
        styles: o,
        children: c,
        leading: y,
        trailing: u,
        linariaClassNames: b
    }) => {
        const p = (0, s.useCx)();
        return (0, l.jsxs)("span", {
            className: p(b ? .container),
            ...(0, t.maybeRwsCss)(n, o ? .container),
            children: [y && (0, l.jsx)("span", {
                className: p(b ? .leading),
                ...(0, t.maybeRwsCss)(n, o ? .leading),
                children: y
            }), (0, l.jsx)("span", {
                className: p(b ? .content),
                ...(0, t.maybeRwsCss)(n, o ? .content),
                children: c
            }), u && (0, l.jsx)("span", {
                className: p(b ? .trailing),
                ...(0, t.maybeRwsCss)(n, o ? .trailing),
                children: u
            })]
        })
    };
    const o = e.baseButtonLayoutCssFragments = {
        container: "\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n\n    /* The layout should not overtake pointer events from the button. */\n    pointer-events: none;\n  ",
        content: "\n    /* stylelint-disable block-no-empty */\n    /* stylelint-enable block-no-empty */\n  ",
        leading: "\n    /* stylelint-disable block-no-empty */\n    /* stylelint-enable block-no-empty */\n  ",
        trailing: "\n    /* stylelint-disable block-no-empty */\n    /* stylelint-enable block-no-empty */\n  "
    };
    e.baseButtonLayoutStylesFn = (0, t.deprecatedExtendableStylesFn)('BaseButtonLayout', (() => ({
        container: (0, t.cssFragmentToRws)(o.container),
        content: (0, t.cssFragmentToRws)(o.content),
        leading: (0, t.cssFragmentToRws)(o.leading),
        trailing: (0, t.cssFragmentToRws)(o.trailing)
    })))
}), "a85898", ["ba7a76", "07aa1f", "2d8af3", "4786a8", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "QUICK_PAY_REJECT_CHECKOUT_BILLS_NO_ERROR_MESSAGE_NO_ON_FAIILURE", {
        enumerable: !0,
        get: function() {
            return l.QUICK_PAY_REJECT_CHECKOUT_BILLS_NO_ERROR_MESSAGE_NO_ON_FAIILURE
        }
    }), e.default = function(t) {
        const {
            Button: n,
            useButtonDirectly: f
        } = t;
        return (0, c.jsx)(l.default, { ...t,
            Button: f && n ? n : n ? s(n) : function({
                children: t,
                ...n
            }) {
                return (0, c.jsx)(u.default, { ...n,
                    velouteId: o,
                    children: (0, c.jsx)(_.default, {
                        children: t
                    })
                })
            },
            isDls19: !0
        })
    };
    n(r(d[2]));
    var u = n(r(d[3])),
        _ = n(r(d[4])),
        l = t(r(d[5])),
        c = r(d[6]);
    const o = 'checkout-flow-submit-button';
    const s = t => ({
        children: n,
        ...u
    }) => (0, c.jsx)(t, { ...u,
        children: (0, c.jsx)(_.default, {
            children: n
        })
    })
}), "abee9e", ["45f788", "ba7a76", "07aa1f", "278724", "3eacc9", "846a2c", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        o = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.platformStateSelector = e.platformStateDeps = e.default = void 0, e.useAdditionalSubmitParams = J, e.useSubmitOnSuccess = X;
    var n = o(r(d[2])),
        s = t(r(d[3]));

    function l() {
        const t = r(d[4]);
        return l = function() {
            return t
        }, t
    }

    function u() {
        const t = r(d[5]);
        return u = function() {
            return t
        }, t
    }

    function c() {
        const t = r(d[6]);
        return c = function() {
            return t
        }, t
    }

    function _() {
        const t = r(d[7]);
        return _ = function() {
            return t
        }, t
    }

    function I() {
        const t = r(d[8]);
        return I = function() {
            return t
        }, t
    }
    var f = t(r(d[9])),
        p = t(r(d[10])),
        b = r(d[11]),
        T = t(r(d[12])),
        E = t(r(d[13])),
        h = r(d[14]),
        A = r(d[15]),
        S = t(r(d[16])),
        y = o(r(d[17])),
        N = t(r(d[18])),
        P = t(r(d[19])),
        O = o(r(d[20])),
        R = t(r(d[21])),
        C = t(r(d[22])),
        k = r(d[23]),
        D = r(d[24]),
        v = t(r(d[25])),
        x = r(d[26]),
        F = t(r(d[27])),
        G = t(r(d[28])),
        M = r(d[29]),
        B = r(d[30]),
        H = t(r(d[31])),
        q = r(d[32]),
        U = r(d[33]),
        L = r(d[34]),
        V = r(d[35]),
        w = r(d[36]),
        Y = r(d[37]);
    const j = (0, p.default)('ErrorMessagePortal', ['onPressPrimary'])(R.default),
        Q = ({
            billItemProductType: t,
            completedDisableDeps: o,
            cubaAttestation: n,
            hotelGuestName: s,
            isRequiredAttestationChecked: l,
            hasFirstMessageError: u,
            hasRequiredAttestationError: c,
            messageToHost: _,
            numberOfAdults: I,
            numberOfChildren: f,
            tripPurpose: p,
            sectionErrors: b,
            urlInfo: T,
            numberOfInfants: E
        }) => ({
            billItemProductType: t,
            completedDisableDeps: o,
            cubaAttestation: n,
            hotelGuestName: s,
            isRequiredAttestationChecked: l,
            hasFirstMessageError: u,
            hasRequiredAttestationError: c,
            messageToHost: _,
            numberOfAdults: I,
            numberOfChildren: f,
            tripPurpose: p,
            sectionErrors: b,
            urlInfo: T,
            numberOfInfants: E
        });
    e.platformStateSelector = Q;
    const W = ({
        billItemProductType: t,
        completedDisableDeps: o,
        cubaAttestation: n,
        hotelGuestName: s,
        isRequiredAttestationChecked: l,
        hasFirstMessageError: u,
        hasRequiredAttestationError: c,
        messageToHost: _,
        numberOfAdults: I,
        numberOfChildren: f,
        tripPurpose: p,
        sectionErrors: b,
        urlInfo: T,
        numberOfInfants: E
    }) => [t, o, n, s, l, u, c, _, I, f, p, b, T, E];

    function $(t, o) {
        const {
            urlInfo: n
        } = t, {
            queryParams: {
                pendingTravelerId: s,
                pendingGuestEmail: l,
                isWorkTrip: u,
                openHomesAffiliated: c,
                causeId: _
            }
        } = n, I = c || !!_, f = u || I, p = (u || I && o) && l ? {
            pending_3pb_guest_email: l
        } : {};
        return f ? {
            business_travel: {
                is_open_homes: I,
                is_tracking_only: f,
                trip_notes: t.tripPurpose,
                pending_3pb_guest_id: s,
                ...p
            }
        } : {}
    }

    function z(t) {
        const {
            urlInfo: o
        } = t, {
            queryParams: {
                openHomesAffiliated: n,
                causeId: s,
                airbnbOrgGuestType: l,
                airbnbOrgResponseId: u
            }
        } = o;
        return n || void 0 !== s ? {
            airbnb_org_params: {
                airbnb_org_response_id: u,
                airbnb_org_guest_type: l
            }
        } : {}
    }

    function K(t, o) {
        const n = {
            PARTY_ATTESTATION: {
                sectionId: 'PARTY_ATTESTATION',
                errorTitle: s.default.t('checkout.alert.review_policies_and_rules'),
                errorSubtitle: s.default.t('checkout.alert.review_policies_and_rules_body'),
                primaryButtonText: s.default.t('checkout.alert.property_damage_consent_cta'),
                scrollToSectionId: 'PARTY_ATTESTATION'
            },
            PHONE_VERIFICATION: {
                sectionId: 'PHONE_VERIFICATION',
                errorTitle: s.default.t('checkout.alert.phone_verification_title'),
                errorSubtitle: s.default.t('checkout.alert.phone_verification_subtitle'),
                primaryButtonText: s.default.t('checkout.alert.phone_verification_cta'),
                scrollToSectionId: 'PHONE_VERIFICATION'
            },
            PROFILE_PHOTO: {
                sectionId: 'PROFILE_PHOTO',
                errorTitle: s.default.t('checkout.alert.profile_photo_title'),
                errorSubtitle: s.default.t('checkout.alert.profile_photo_subtitle'),
                primaryButtonText: s.default.t('checkout.alert.profile_photo_cta'),
                scrollToSectionId: 'PROFILE_PHOTO'
            },
            GUEST_DETAILS: {
                sectionId: 'GUEST_DETAILS',
                errorTitle: s.default.t('checkout.alert.children_attestation_title'),
                errorSubtitle: s.default.t('checkout.alert.children_attestation_subtitle'),
                primaryButtonText: s.default.t('experiences_checkout.add_guest_modal_header'),
                screenId: 'REQUIRED_GUEST_DETAILS',
                scrollToSectionId: o === O.FORM_FACTOR.WIDE ? 'REQUIRED_INFO_TITLE' : void 0
            },
            PAN_ID_TASK: {
                sectionId: 'INDIA_PAN_ID',
                errorTitle: s.default.t('checkout.alert.pan_id_requirement.title'),
                errorSubtitle: s.default.t('checkout.alert.pan_id_requirement.subtitle'),
                primaryButtonText: s.default.t('checkout.alert.pan_id.call_to_action'),
                scrollToSectionId: 'INDIA_PAN_ID'
            },
            QUALITY_STANDARDS_ATTESTATION: {
                sectionId: 'GUEST_ATTESTATION',
                errorTitle: s.default.t('guest_standards.attestation.p4_agree_toast'),
                errorSubtitle: s.default.t('guest_standards.attestation.p4_review_ground_rules_cta'),
                primaryButtonText: s.default.t('guest_standards.attestation.p4_review_cta'),
                scrollToSectionId: 'GUEST_ATTESTATION'
            },
            CHINA_EMAIL_VERIFICATION: {
                sectionId: 'CHINA_EMAIL_VERIFICATION',
                errorTitle: s.default.t('checkout.alert.china_email_verification_title'),
                errorSubtitle: s.default.t('checkout.alert.china_email_verification_subtitle'),
                primaryButtonText: s.default.t('checkout.alert.china_email_verification_cta'),
                scrollToSectionId: 'CHINA_EMAIL_VERIFICATION'
            },
            CHINA_NAME_VERIFICATION: {
                sectionId: 'CHINA_NAME_VERIFICATION',
                errorTitle: s.default.t('checkout.streamline_booking.china_name_verification.error_title'),
                errorSubtitle: s.default.t('checkout.streamline_booking.china_name_verification.modal_title'),
                primaryButtonText: s.default.t('checkout.streamline_booking.china_name_verification.error_cta'),
                scrollToSectionId: 'CHINA_NAME_VERIFICATION'
            },
            PROPERTY_DAMAGE_CONSENT: {
                sectionId: 'PROPERTY_DAMAGE_CONSENT',
                errorTitle: s.default.t('trust.or.property_damage_consent.section.error_text'),
                primaryButtonText: s.default.t('trust.or.property_damage_consent.section.link_text'),
                scrollToSectionId: 'PROPERTY_DAMAGE_CONSENT'
            }
        };
        return t ? n[t] : null
    }

    function X(t, o, s, l, u, c, _) {
        return (0, n.useCallback)((n => {
            t && (0, B.logCheckoutFlowCompletionEvent)(t, o ? 'Experiences' : 'Stays');
            const I = new Set([C.default.ASYNC_AWAIT, C.default.ASYNC_QRCODE, C.default.ASYNC_INTENT, C.default.UPI_QRCODE, C.default.WECHAT_NONBINDING_QR_CODE, C.default.UPI_AWAIT]),
                f = n ? .checkout_bill ? .bill ? .redirect_settings ? .type,
                p = t => {
                    const c = n.checkout_bill ? .bill ? .redirect_settings ? .url,
                        _ = t ? ? (0, k.getIdentityFreezeReason)(n),
                        I = 'ConfirmAndPay',
                        f = l,
                        p = u;
                    (0, E.default)({
                        context: h.UserContext.BOOKING_POST_P4_HUB,
                        bookingData: {
                            reservationCode: s
                        },
                        freezeReason: _
                    }, (() => (0, k.redirectToReservationPage)({
                        code: s,
                        canceled: !1,
                        freezeReason: _,
                        isExperiences: o,
                        loggingContext: I,
                        redirectUrl: c
                    })), (() => (0, k.redirectToReservationPage)({
                        code: s,
                        canceled: !0,
                        freezeReason: _,
                        isExperiences: o,
                        loggingContext: I,
                        redirectUrl: c
                    })), f, p)
                },
                b = t => Promise.resolve((o => {
                    (0, V.airdogCount)('quick_pay.confirm_and_pay.new_user_verification_flow.attempt', 1, {
                        redirect_type: t
                    }), c(), p(o)
                }));
            if ((t => {
                    let o = !1;
                    return t && (o = I.has(t)), o
                })(f)) return l(), b(f);
            return (t => t ? .checkout_bill ? .bill ? .redirect_settings ? .type === C.default.RAZORPAY_STANDARD_REDIRECT)(n) && l(), (0, k.shouldTriggerFovFlow)(n) ? ((0, V.airdogCount)('quick_pay.confirm_and_pay.new_user_verification_flow.attempt', 1, {
                redirect_type: n ? .checkout_bill ? .bill ? .redirect_settings ? .type
            }), p(), Promise.reject(y.QUICK_PAY_REJECT_CHECKOUT_BILLS_NO_ERROR_MESSAGE_NO_ON_FAIILURE)) : (_({
                path: (0, U.createViaductP5Url)(s || '')
            }), Promise.resolve())
        }), [t, _, s, o, l, u, c])
    }

    function J(t, o, s, l, u, c) {
        return (0, n.useMemo)((() => ({
            fulfillment_params: [o ? {
                product_type: S.default.TRIP,
                ...s && {
                    guest_address: {
                        addr_line_1: s.street,
                        postal_code: s.zipcode,
                        city: s.city,
                        state: s.state,
                        country: s.country_code
                    },
                    travel_purpose: Number(s.reasonIndex) >= 0 ? Number(s.reasonIndex) : -1
                }
            } : {
                product_type: S.default.RESERVATION,
                reservation_details: {
                    message_to_host: t,
                    is_consolidated_fov_entry_point: !0,
                    guest_legal_first_name: l.hotelGuestName ? .firstName,
                    guest_legal_last_name: l.hotelGuestName ? .lastName,
                    guest_legal_chinese_name: l.hotelGuestName ? .chineseName
                },
                request_info: {
                    context: 'web'
                },
                ...$(l, u),
                ...z(l),
                cuba_attestation: l.cubaAttestation,
                ...c
            }]
        })), [o, s, t, l, u, c])
    }
    e.platformStateDeps = W;
    const Z = ['LIVE_STREAM_CONSENT', 'CUBA_ATTESTATION', 'SINGLE_SIGN_ON_LOGIN'];
    e.default = (0, H.default)((0, A.withPlatformState)(Q, W), (0, q.withStyles)((({
        dls19: t
    }) => ({
        subtitle: { ...t.typography.base.md,
            display: 'flex',
            justifyContent: 'center',
            marginTop: t.spacing.micro12px,
            [t.responsive.queries.mediumAndAbove]: {
                display: 'block'
            }
        }
    }))))((function({
        clientEventDataContext: t,
        disableDependencies: o,
        disabled: p,
        platformState: E,
        sectionId: h,
        preSubmitPromise: A,
        readyForAutomaticSubmit: S,
        section: R,
        setPlatformState: C,
        css: k,
        styles: H,
        isDesktopFullWidth: q
    }) {
        const {
            billItemProductType: V,
            completedDisableDeps: Q,
            urlInfo: W,
            cubaAttestation: $,
            hasFirstMessageError: z,
            isRequiredAttestationChecked: ee
        } = E, te = (0, O.default)(), [re, oe] = (0, n.useState)(!1), [ie, ne] = (0, n.useState)(!1), [ae, se] = (0, n.useState)(!1), {
            prefetch: le
        } = (0, I().usePrefetch)(), ue = (0, n.useCallback)((() => {
            oe(!0)
        }), []), ce = (0, n.useCallback)((() => {
            oe(!1)
        }), []), de = o ? .find((t => t && !Q[t])), _e = (0, n.useMemo)((() => K(de, te) || ''), [te, de]), Ie = !!o ? .find((t => t && Z.includes(t) && !Q[t]));
        let fe, pe, me, be, Te, Ee, he, Ae, ge, Se, ye, Ne, Pe, Oe, Re;
        const Ce = (0, x.isExperiencesProduct)(V),
            ke = document.getElementById(M.REQUIRED_FIRST_MESSAGE_ID),
            De = document.getElementById(M.REQUIRED_ATTESTATION_ID);
        ke && (fe = 'boolean' == typeof z && !z), De && (pe = 'boolean' == typeof ee && ee), o ? .includes(w.cubaAttestationId) && (me = Q[w.cubaAttestationId] ? ? !1), o ? .includes(w.phoneNumberId) && (be = Q[w.phoneNumberId] ? ? !1), o ? .includes(w.profilePhotoId) && (Te = Q[w.profilePhotoId] ? ? !1), o ? .includes(w.indianPanId) && (Ee = Q[w.indianPanId] ? ? !1), o ? .includes(w.guestPickerId) && (he = Q[w.guestPickerId] ? ? !1), o ? .includes(w.datePickerId) && (Ae = Q[w.datePickerId] ? ? !1), o ? .includes(w.airbnbDotOrgEmergencySelectorId) && (ge = Q[w.airbnbDotOrgEmergencySelectorId] ? ? !1), o ? .includes(w.airbnbDotOrgGuestTypeSelectorId) && (Se = Q[w.airbnbDotOrgGuestTypeSelectorId] ? ? !1), o ? .includes(w.airbnbDotOrgThirdPartBookingId) && (ye = Q[w.airbnbDotOrgThirdPartBookingId] ? ? !1), o ? .includes(w.guestAttestationId) && (Ne = Q[w.guestAttestationId] ? ? !1), o ? .includes(w.chinaEmailVerificationId) && (Pe = Q[w.chinaEmailVerificationId] ? ? !1), o ? .includes(w.chinaNameVerificationId) && (Oe = Q[w.chinaNameVerificationId] ? ? !1), o ? .includes(w.propertyDamageConsentId) && (Re = Q[w.propertyDamageConsentId] ? ? !1), (0, F.default)({
            schema: _().CheckoutRequirementsInternalStateSession,
            event_data: {
                requirements: { ...'boolean' == typeof fe && {
                        [w.firstMessageId]: fe
                    },
                    ...'boolean' == typeof pe && {
                        [w.partAttestationId]: pe
                    },
                    ...'boolean' == typeof me && {
                        [w.cubaAttestationId]: me
                    },
                    ...'boolean' == typeof be && {
                        [w.phoneNumberId]: be
                    },
                    ...'boolean' == typeof Te && {
                        [w.profilePhotoId]: Te
                    },
                    ...'boolean' == typeof Ee && {
                        [w.indianPanId]: Ee
                    },
                    ...'boolean' == typeof he && {
                        [w.guestPickerId]: he
                    },
                    ...'boolean' == typeof Ae && {
                        [w.datePickerId]: Ae
                    },
                    ...'boolean' == typeof ge && {
                        [w.airbnbDotOrgEmergencySelectorId]: ge
                    },
                    ...'boolean' == typeof Se && {
                        [w.airbnbDotOrgGuestTypeSelectorId]: Se
                    },
                    ...'boolean' == typeof ye && {
                        [w.airbnbDotOrgThirdPartBookingId]: ye
                    },
                    ...'boolean' == typeof Ne && {
                        [w.guestAttestationId]: Ne
                    },
                    ...'boolean' == typeof Pe && {
                        [w.chinaEmailVerificationId]: Pe
                    },
                    ...'boolean' == typeof Oe && {
                        [w.chinaNameVerificationId]: Oe
                    },
                    ...'boolean' == typeof Re && {
                        [w.propertyDamageConsentId]: Re
                    }
                }
            }
        }, [fe, pe, me, be, Te, Ee, he, Ae, ge, Se, ye, Ne, Pe, Oe, Re], !Ce);
        const ve = (0, n.useRef)(),
            xe = de ? `error_${de}` : '',
            Fe = (0, n.useCallback)((t => {
                const o = Ce ? 'CheckoutExperience' : 'CheckoutHome',
                    n = t => `${B.LOGGING_PREFIX}.${h}.${t}`;
                ve.current && t && (f.default.logJitneyEvent({
                    schema: c().UniversalComponentActionEvent,
                    event_data: {
                        uuid: (0, u().v4)(),
                        logging_id: n(t),
                        ancestor_uuids: [],
                        ancestor_logging_ids: [],
                        method: 'shouldInterceptSubmit',
                        component: 'CONFIRM_AND_PAY',
                        page: o,
                        operation: 2
                    }
                }), ve.current = !1)
            }), [Ce, h]),
            Ge = (0, n.useCallback)((() => {
                if (p && _e) return C({
                    sectionErrors: {
                        [_e.sectionId]: s.default.t('homes_checkout_flow.error_message.field value is required')
                    }
                }), ne(!0), Fe(xe), !0;
                if (ke && (!E.messageToHost || 0 === E.messageToHost.trim().length)) return C({
                    hasFirstMessageError: !0
                }), Fe("error_FIRST_MESSAGE"), !0;
                return document.getElementById(M.REQUIRED_ATTESTATION_ID) && !0 !== E.isRequiredAttestationChecked ? (C({
                    hasRequiredAttestationError: !0
                }), Fe("error_REQUIRED_ATTESTATION"), !0) : !(S || !A)
            }), [p, E.isRequiredAttestationChecked, E.messageToHost, A, S, _e, C, Fe, xe, ke]),
            Me = (0, n.useCallback)((({
                shouldSkipPaymentLoader: t
            }) => {
                ve.current = !0, A && A(), Ge() || (ue(), C({
                    sectionErrors: {}
                }), Fe("continue")), t && se(!0)
            }), [A, Ge, ue, C, Fe]),
            [Be, He] = (0, n.useState)(null),
            {
                code: qe
            } = W.queryParams,
            {
                additionalFulfillmentParams: Ue,
                isInstantBookable: Le,
                subtitle: Ve,
                title: we
            } = R,
            Ye = T.default.getBootstrap('a4w_3pb_improvement_airbnb_org'),
            je = J(E.messageToHost, Ce, $, E, Ye, Ue),
            Qe = X(t, Ce, qe, ce, He, ue, le),
            We = (t = {}) => () => {
                const o = 'confirm-and-pay-button-subtitle',
                    n = t.fullWidth ? void 0 : s.default.t('stays.checkout.confirm_and_pay_cta_button_a11y_label', {
                        cta_label: we || ''
                    });
                var u;
                return u = (0, Y.jsxs)(Y.Fragment, {
                    children: [(0, Y.jsx)(y.default, { ...t,
                        "aria-describedby": Ve && o,
                        "aria-label": n,
                        loggingID: `${B.LOGGING_PREFIX}.${h}`,
                        ...(0, l().CheckoutContextEvent)(),
                        disabled: p && !_e || Ie,
                        additionalSubmitParams: je,
                        submitType: N.default.CONFIRM_AND_PAY,
                        onBeforeSubmit: Me,
                        onSuccess: Qe,
                        shouldInterceptSubmit: Ge,
                        buttonText: we || '',
                        onFailure: ce,
                        readyForAutomaticSubmit: !!S,
                        useCustomEmitHandler: (0, L.shouldShowBlockedReservationFriction)(),
                        isInstantBookable: Le
                    }), Ve && (0, Y.jsx)("div", {
                        id: o,
                        ...k(H.subtitle),
                        children: Ve
                    })]
                }), Ce ? u : (0, Y.jsx)(v.default, {
                    href: (0, U.createViaductP5Url)(qe || ''),
                    strategy: w.prefetchGpP5,
                    children: u
                })
            };
        return (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsx)(P.default, {
                renderCompact: We({
                    fullWidth: !0,
                    isVaultingInContextSheetRequired: !0
                }),
                renderWide: We({
                    fullWidth: q
                })
            }), (0, Y.jsx)(G.default, {
                isExperiencesProduct: Ce,
                isOpen: re,
                identityLoader: Be,
                onClose: ce,
                isM1VideoLoader: L.isM1VideoLoader,
                skipPaymentLoader: ae
            }), ie && _e && (0, Y.jsx)(j, {
                error: {
                    title: _e.errorTitle,
                    subtitle: _e.errorSubtitle,
                    primaryButtonText: _e.primaryButtonText
                },
                ...(0, l().CheckoutContextEvent)(),
                loggingID: `${B.LOGGING_PREFIX}.${h}.error_${de}.action`,
                onPressPrimary: () => {
                    if (_e.scrollToSectionId) {
                        const t = document.querySelector(`div[data-plugin-in-point-id=${_e.scrollToSectionId}]`);
                        t && (t.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        }), t.setAttribute('tabindex', '-1'), t.focus({
                            preventScroll: !0
                        }))
                    } else _e.screenId && (0, b.pushToHistory)((0, D.getModalUrl)({
                        queryParams: W.queryParams,
                        location: W.location,
                        screenId: _e.screenId
                    }))
                },
                clearErrorMessage: () => ne(!1)
            })]
        })
    }))
}), "b6c99a", ["ba7a76", "45f788", "07aa1f", "a9f4b1", "b7d5f2", "305dd5", "59c871", "a4a9b9", "068abc", "c8b97a", "9092d5", "7b2359", "c235f8", "117de6", "e3eb42", "de4273", "75a800", "abee9e", "017d8b", "3c74b4", "e0b071", "6c93f6", "55972e", "02f9df", "fc4612", "c25709", "82eab1", "bae1c0", "8d17b4", "0239cd", "a55423", "5010f2", "e0b084", "5f0a2b", "dba284", "3e4681", "8a7c04", "b8c07d"]);
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
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var u = n(r(d[2])),
        o = n(r(d[3]));

    function c() {
        const t = r(d[4]);
        return c = function() {
            return t
        }, t
    }
    var f = r(d[5]),
        s = r(d[6]);

    function l() {
        const t = r(d[7]);
        return l = function() {
            return t
        }, t
    }
    var h = t(r(d[8])),
        v = r(d[9]),
        p = r(d[10]);
    e.default = (0, u.memo)((function({
        autoPrefetchWhenInView: t,
        children: n,
        href: P,
        prefetchImmediately: R,
        strategy: b = v.prefetchDefaultStrategy
    }) {
        const E = (0, o.default)(),
            M = void 0 !== R,
            [y, C] = (0, h.default)({
                skip: M
            }),
            F = (0, u.useRef)(!1),
            [_, O] = (0, u.useState)(!1),
            {
                abort: I,
                scheduler: S,
                signal: k
            } = (0, f.usePostTaskScheduler)({
                name: 'GPPrefetch',
                priority: 'background',
                strategy: 'recycle'
            }),
            x = (0, u.useContext)(c().NiobeClientReactContext),
            {
                getMatchedRoute: A
            } = (0, s.useAppRoutes)(),
            {
                prefetch: D
            } = (0, l().usePrefetch)({
                overrideScheduler: !0
            });

        function T() {
            O(!0)
        }

        function W() {
            O(!1)
        }
        return (0, u.useEffect)((() => {
            F.current = !1
        }), [b, E, P]), (0, u.useEffect)((() => {
            if (!M || !R || !(0, v.isPrefetchEnabled)() || E === o.FORM_FACTOR.WIDE || !x || !P || F.current) return;
            return (b({
                formFactor: E,
                getMatchedRoute: A,
                href: P,
                niobeClients: x,
                prefetch: D,
                scheduler: S,
                signal: k
            }) || Promise.resolve()).then((() => {
                F.current = !0
            })), I
        }), [I, E, A, P, M, x, D, R, S, k, b]), (0, u.useEffect)((() => {
            if (M || F.current) return;
            if (!(C && P && x && (E !== o.FORM_FACTOR.WIDE || _ || t) && (0, v.isPrefetchEnabled)())) return void I();
            return (b({
                formFactor: E,
                getMatchedRoute: A,
                href: P,
                niobeClients: x,
                prefetch: D,
                scheduler: S,
                signal: k
            }) || Promise.resolve()).then((() => {
                F.current = !0
            })), () => {
                I()
            }
        }), [I, E, A, P, C, _, M, x, D, t, R, S, k, b]), (0, p.jsx)("div", {
            ref: y,
            onMouseEnter: M ? void 0 : T,
            onMouseLeave: M ? void 0 : W,
            onFocus: M ? void 0 : T,
            onBlur: M ? void 0 : W,
            children: n
        })
    }))
}), "c25709", ["ba7a76", "45f788", "07aa1f", "e0b071", "7ab1a7", "53bb4a", "2c12de", "068abc", "f32823", "8f1e90", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = t(r(d[1]));
    t(r(d[2]));
    const n = {
        sections: {
            StayConfirmationButtonSection: {
                loader: (0, r(d[3]).normalizeLoaderWithCaching)((() => r(d[5])(d[4]).then(o.default)))
            }
        }
    };
    e.default = n
}), "c39e5b", ["ba7a76", "45f788", "d17907", "b4385c", "b5b9e9", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.brandCssFragments = e.BrandButton = void 0;
    t(r(d[1]));
    var n = r(d[2]),
        o = (r(d[3]), r(d[4]), t(r(d[5]))),
        l = r(d[6]);
    e.BrandButton = ({
        children: t,
        disabled: c,
        ...s
    }) => (0, l.jsx)(n.BaseButtonOrAnchor, { ...s,
        disabled: c,
        children: (0, l.jsx)(o.default, {
            disabled: c,
            children: t
        })
    });
    e.brandCssFragments = {
        component: "\n    border: none;\n    background: var(--linaria-theme_palette-bg-secondary-core); /* migrated from theme.palette.rauschGradient\n      .linearGradient */\n    color: var(--linaria-theme_palette-text-primary-inverse); /* migrated from theme.palette.white */\n\n    &:hover {\n      border: none;\n      background: var(--linaria-theme_palette-bg-secondary-core); /* migrated from theme.palette.rauschGradient\n        .linearGradient */\n      color: var(--linaria-theme_palette-text-primary-inverse); /* migrated from theme.palette.white */\n    }\n\n    &:active {\n      border: none;\n      background: var(--linaria-theme_palette-bg-primary-core); /* migrated from theme.palette.rausch */\n      color: var(--linaria-theme_palette-text-primary-inverse); /* migrated from theme.palette.white */\n    }\n\n    &:disabled {\n      border: none;\n      background: var(--linaria-theme_palette-bg-tertiary); /* migrated from theme.palette.bobo */\n      color: var(--linaria-theme_palette-text-primary-inverse); /* migrated from theme.palette.white */\n    }\n\n    @supports (--custom: properties) {\n      background: var(\n        --dls19-brand-gradient,\n        var(--linaria-theme_palette-bg-secondary-core)\n      ); /* migrated from var(--dls19-brand-gradient, theme.palette.rauschGradient\n        .linearGradient) */\n\n      &:hover {\n        background: var(\n          --dls19-brand-gradient,\n          var(--linaria-theme_palette-bg-secondary-core)\n        ); /* migrated from var(--dls19-brand-gradient, theme.palette.rauschGradient\n          .linearGradient) */\n      }\n\n      &:active {\n        background: var(\n          --dls19-brand-gradient-accent,\n          var(--linaria-theme_palette-bg-primary-core)\n        ); /* migrated from var(--dls19-brand-gradient-accent, theme.palette.rausch) */\n      }\n\n      &:disabled {\n        background: var(--linaria-theme_palette-bg-tertiary); /* migrated from theme.palette.bobo */\n      }\n    }\n  "
    }
}), "c4afb2", ["ba7a76", "07aa1f", "60c631", "2d8af3", "4786a8", "c99872", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = t(r(d[1]));
    t(r(d[2]));
    const n = {
        sections: {
            StayConfirmationPostcardHeader: {
                loader: (0, r(d[3]).normalizeLoaderWithCaching)((() => r(d[5])(d[4]).then(o.default)))
            }
        }
    };
    e.default = n
}), "c5d654", ["ba7a76", "45f788", "d17907", "b4385c", "a604cc", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    r(d[1]);
    var n = r(d[2]),
        o = r(d[3]),
        _ = (r(d[4]), r(d[5]));
    t(r(d[6]));
    (0, o.cssFragmentsObjToStylesFn)({
        content: "\n    display: block;     position: relative;     pointer-events: none;\n  ",
        thermalContainer: "\n    position: absolute;     top: 0;     left: 0;     right: 0;     bottom: 0;     width: 100%;     height: 100%;     overflow: hidden;     /* Fixes overflow: hidden in Safari */     /* stylelint-disable property-no-vendor-prefix, value-no-vendor-prefix */     -webkit-mask-image: -webkit-radial-gradient(white, black);     mask-image: -webkit-radial-gradient(white, black);     /* stylelint-enable property-no-vendor-prefix, value-no-vendor-prefix */\n    border-radius: var(--linaria-theme_corner-radius-small8px-border-radius);\n  ",
        thermal: "\n    display: block;     width: 100%;     height: 100%;     min-width: 200px;     background-size: 200% 200%;     opacity: 0;     transition: opacity 1.25s;     background-image: linear-gradient(       to right,       var(--linaria-theme_palette-bg-primary-inverse) 0%,       var(--linaria-theme_palette-bg-primary) 50%,       var(--linaria-theme_palette-bg-primary-inverse) 100%     ); /* migrated from linear-gradient(to right, black 0%, white 50%, black 100%) */     &:hover {       opacity: 1;     }     &:active {       transition: transform 2s, opacity 2s;       opacity: 0;       transform: scale(5);     }\n    /* migrated from theme.palette.rauschGradient.radialGradient */\n    background-image: var(--linaria-theme_palette-bg-secondary-core-hover);\n\n    &:disabled {\n      background-image: none;\n    }\n\n    @supports (--custom: properties) {\n      background-image: var(\n        --dls19-brand-gradient-radial,\n        var(--linaria-theme_palette-bg-secondary-core-hover)\n          /* migrated from theme.palette.rauschGradient.radialGradient */\n      );\n    }\n  "
    });
    e.default = (0, _.createVariant)(n.BaseThermal, {
        content: "c9x5udt atm_9s_1ulexfb atm_mk_h2mmj6 atm_mj_glywfm",
        thermalContainer: "tb4j57x atm_mk_stnw88 atm_tk_idpfg4 atm_fq_idpfg4 atm_n3_idpfg4 atm_6i_idpfg4 atm_vy_1osqo2v atm_e2_1osqo2v atm_ks_15vqwwr atm_ib_1yr6ypa atm_ia_1yr6ypa atm_5j_t09oo2",
        thermal: "tmel3e0 atm_9s_1ulexfb atm_vy_1osqo2v atm_e2_1osqo2v atm_jb_uuw12j atm_2w_1egmwxu atm_k4_idpfg4 atm_uc_kn5pbq atm_2g_1wjry6k atm_2g_1mygper atm_k4_kb7nvz_1nos8r atm_uc_yz1f4_csw3t1 atm_k4_idpfg4_csw3t1 atm_tr_kftzq4_csw3t1 atm_2g_glywfm_1o5j5ji atm_2g_181pwnh__1vlbm2j"
    })
}), "c99872", ["ba7a76", "ea4b89", "be6270", "2d8af3", "4786a8", "92749c", "5aed2e"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return (0, f.jsx)(n.default, {
            loader: l,
            ...t
        })
    };
    var u = t(r(d[1])),
        n = (t(r(d[2])), t(r(d[3]))),
        f = r(d[4]);

    function l() {
        return r(d[6])(d[5]).then(u.default).then((t => t.default || t))
    }
}), "d47697", ["ba7a76", "45f788", "07aa1f", "018c3b", "b8c07d", "e9ecbe", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    l(r(d[1]));
    var t = l(r(d[2])),
        u = r(d[3]);
    e.default = ({
        disabled: l,
        invalid: f,
        label: n,
        value: v
    }) => (0, u.jsx)(t.default, {
        floating: !!v || !!f,
        invalid: !!f,
        disabled: l,
        children: n
    })
}), "dd123d", ["ba7a76", "07aa1f", "83a1e7", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var _ = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = _(r(d[1])),
        n = r(d[2]),
        o = r(d[3]),
        l = (r(d[4]), r(d[5])),
        s = _(r(d[6])),
        c = r(d[7]),
        f = _(r(d[8])),
        j = _(r(d[9])),
        w = r(d[10]);
    (0, l.mergeStyles)(o.baseSelectCssFragments, c.dls19CssFragments, {
        container: "\n    background-color: transparent;\n    border-color: transparent;\n    border-radius: 0;\n    box-shadow: none;\n  ",
        container_disabled: "\n    box-shadow: none;\n    background-color: transparent;\n  ",
        container_readonly: "\n    box-shadow: none;\n    background-color: var(--linaria-theme_palette-bg-primary-disabled); /* migrated from theme.palette.faint */\n  ",
        container_focused: "\n    box-shadow: none;\n  ",
        container_invalid: "\n    background-color: transparent;\n    box-shadow: none;\n  ",
        container_focus_invalid: "\n    background-color: transparent;\n  "
    });
    const y = t.default.memo((0, n.createVariant)((0, s.default)(o.BaseSelect, {
        renderLabel: f.default
    }), {
        container: "c1dkkeqc atm_mk_h2mmj6 atm_9s_1txwivl atm_vy_1osqo2v atm_gi_idpfg4 atm_7l_11x86a4 atm_2d_1x778eo atm_5j_t09oo2 atm_70_vp5ho7 atm_7l_jt7fhx atm_2d_1qwqy05 atm_bx_48h72j atm_c8_2x1prs atm_g3_1jbyh58 atm_fr_11a07z3 atm_cs_6adqpa atm_2d_1j28jx2 atm_3f_1j28jx2 atm_5j_idpfg4 atm_70_glywfm",
        leadingContent: "l4yj61c atm_9s_1txwivl atm_h_1h6ojuz atm_lk_1fwxnve atm_j3_1ssbidh atm_vv_1q9ccgz",
        innerContent: "iemnzdq atm_mk_h2mmj6 atm_am_ggq5uc atm_l8_idpfg4",
        trailingContent: "tujisiy atm_mk_stnw88 atm_n3_idpfg4 atm_9s_1txwivl atm_h_1h6ojuz atm_fc_1h6ojuz atm_e2_1osqo2v atm_j3_1ssbidh atm_jb_14noui3 atm_ll_1fwxnve atm_mj_glywfm atm_7l_11x86a4 atm_7l_jt7fhx",
        trailingContent_disabled: "tjluwb4 atm_7l_9vytuy",
        trailingContent_readonly: "t5p22jm",
        select: "shrnsai atm_1s_glywfm atm_j6_8vuzuz atm_vy_1osqo2v atm_3f_glywfm atm_kd_glywfm atm_gi_idpfg4 atm_l8_1drsjhv atm_2d_1j28jx2 atm_7l_1kw7nm4 atm_bx_1kw7nm4 atm_c8_1kw7nm4 atm_cs_1kw7nm4 atm_g3_1kw7nm4 atm_1u_glywfm atm_9s_glywfm_3xoxfw atm_ke_1j28jx2_19774hq atm_7l_1j28jx2_19774hq atm_sy_12srtbs_19774hq atm_7l_1j28jx2_3ykvna atm_9j_13gfvf7_1o5j5ji",
        select_readonly: "s1665eag atm_k4_kb7nvz_1o5j5ji",
        container_focused: "codgw2k atm_kd_glywfm atm_kd_glywfm atm_70_1ts4dyq atm_70_glywfm",
        container_disabled: "c18n2mzm atm_k4_si67jz atm_9j_13gfvf7 atm_k4_kb7nvz atm_2d_1b6yn69 atm_70_1n36gmz atm_7l_9vytuy atm_70_glywfm atm_2d_1j28jx2",
        container_readonly: "c13bll4s atm_9j_13gfvf7 atm_70_glywfm atm_2d_1b6yn69",
        container_invalid: "c1cxrwg8 atm_7l_11x86a4 atm_70_fw4idh atm_7l_jt7fhx atm_2d_1b2prp atm_2d_1j28jx2 atm_70_glywfm",
        container_focus_invalid: "c2z56xt atm_2d_1qwqy05 atm_2d_1j28jx2",
        selectContainer: "s1uli407",
        selectContainer_focused: "s1abs7sh",
        selectContainer_disabled: "sq2cthd",
        selectContainer_invalid: "s6t597y",
        selectContainer_readonly: "s1etoz7b",
        selectContainer_focus_invalid: "s6li989"
    }));
    e.default = ({
        weight: _,
        ...t
    }) => (0, w.jsx)(j.default, {
        weight: _,
        children: (0, w.jsx)(y, { ...t
        })
    })
}), "dd99fb", ["ba7a76", "07aa1f", "92749c", "056b4e", "4786a8", "aabdb1", "e8606c", "370e15", "dd123d", "2c3935", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n = {}) {
        const [s, o] = (0, t.useState)(n.initialInView ? ? !1), [c, l] = (0, t.useState)(void 0), [f, y] = (0, t.useState)(void 0);
        u(f, ((t, n) => {
            o(t), l(n)
        }), n), (0, t.useEffect)((() => {
            f || !c ? .target || n.triggerOnce || n.skip || (o(!!n.initialInView), l(void 0))
        }), [f, c, n.triggerOnce, n.skip, n.initialInView]);
        const v = [y, s, c];
        return v.ref = v[0], v.inView = v[1], v.entry = v[2], v
    };
    var t = r(d[0]);

    function n() {
        const t = r(d[1]);
        return n = function() {
            return t
        }, t
    }
    var s = r(d[2]),
        o = r(d[3]);

    function u(u, c, {
        root: l,
        rootMargin: f,
        threshold: y,
        trackVisibility: v,
        delay: h,
        skip: k,
        triggerOnce: V
    } = {}) {
        const {
            scheduler: S
        } = (0, s.usePostTaskScheduler)({
            strategy: 'recycle'
        }), b = (0, o.useDangerousEvent)(c);
        (0, t.useEffect)((() => {
            if (!u || k) return;
            let t;
            const s = (0, n().observe)(u, ((n, o) => {
                t = S.requestAnimationFrame((() => {
                    b(n, o)
                })), o.isIntersecting && V && s && s()
            }), {
                root: l,
                rootMargin: f,
                threshold: y,
                trackVisibility: v,
                delay: h
            });
            return () => {
                s(), t ? .()
            }
        }), [Array.isArray(y) ? y.toString() : y, b, h, u, l, f, S, k, v])
    }
}), "f32823", ["07aa1f", "b99fef", "53bb4a", "f4e9c4"]);
__r("a9f4b1").extend({
    "checkout.alert.review_policies_and_rules": "Review our policies and rules",
    "checkout.alert.review_policies_and_rules_body": "You’ll need to confirm you’ve read and agree to follow all the policies and rules included on this page before you can book.",
    "checkout.alert.property_damage_consent_cta": "Review",
    "checkout.alert.phone_verification_title": "Add your phone number to continue",
    "checkout.alert.phone_verification_subtitle": "This ensures that you won't miss out on trip updates.",
    "checkout.alert.phone_verification_cta": "Verify phone number",
    "checkout.alert.profile_photo_title": "Add a profile photo to continue",
    "checkout.alert.profile_photo_subtitle": "This won’t be shared with the host until your booking is confirmed.",
    "checkout.alert.profile_photo_cta": "Add photo",
    "checkout.alert.children_attestation_title": "Don't forget to add guest details",
    "checkout.alert.children_attestation_subtitle": "Attesting to legal guardianship and adding age details for children are required.",
    "experiences_checkout.add_guest_modal_header": "Add guest details",
    "checkout.alert.pan_id_requirement.title": "Add Permanent Account Number (PAN) to continue",
    "checkout.alert.pan_id_requirement.subtitle": "A valid PAN is required for this trip per Reserve Bank of India (RBI) regulations",
    "checkout.alert.pan_id.call_to_action": "Add PAN",
    "guest_standards.attestation.p4_agree_toast": "You’ll need to agree to Airbnb’s ground rules for guests before booking your trip.",
    "guest_standards.attestation.p4_review_ground_rules_cta": "Review our ground rules",
    "guest_standards.attestation.p4_review_cta": "Review",
    "checkout.alert.china_email_verification_title": "Please add an email address to continue",
    "checkout.alert.china_email_verification_subtitle": "We’ll email you your itinerary confirmation and receipt",
    "checkout.alert.china_email_verification_cta": "Add it now",
    "checkout.streamline_booking.china_name_verification.error_title": "Please add your name to complete the booking.",
    "checkout.streamline_booking.china_name_verification.modal_title": "Set your name, let the host know how to address you",
    "checkout.streamline_booking.china_name_verification.error_cta": "Add your name",
    "trust.or.property_damage_consent.section.error_text": "You’ll need to agree to our damage policy before booking your trip.",
    "trust.or.property_damage_consent.section.link_text": "Review",
    "homes_checkout_flow.error_message.field value is required": "This field is required",
    "stays.checkout.confirm_and_pay_cta_button_a11y_label": "%{cta_label}. Navigate past the %{cta_label} button to read your reservation details."
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/98bc.4aa4b91ae7.js.map