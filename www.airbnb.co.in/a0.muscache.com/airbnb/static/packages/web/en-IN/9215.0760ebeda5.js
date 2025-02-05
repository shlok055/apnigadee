__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    t(r(d[1]));
    var u = t(r(d[2])),
        f = t(r(d[3])),
        n = t(r(d[4])),
        l = t(r(d[5])),
        o = r(d[6]);
    e.default = (0, u.default)('ContentContainer', [])((function() {
        return (0, f.default)() ? (0, o.jsx)(l.default, {}) : (0, o.jsx)(n.default, {})
    }))
}), "03682b", ["ba7a76", "07aa1f", "9092d5", "09d4ab", "1caacc", "e61b2f", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var s = t(r(d[1])),
        o = t(r(d[2])),
        n = t(r(d[3])),
        u = r(d[4]);
    const l = {
        onSubmit: () => {},
        inline: !1,
        noValidate: !1,
        setForceSubmitMethod() {}
    };
    class h extends s.default.Component {
        constructor(t) {
            super(t), this.setFormSubmit = this.setFormSubmit.bind(this)
        }
        setFormSubmit(t) {
            const {
                setForceSubmitMethod: s
            } = this.props;
            if (t) {
                const o = () => {
                    this.setState({
                        rerenderKey: +new Date
                    }, (() => {
                        setTimeout((() => {
                            t.submit()
                        }), 50)
                    }))
                };
                o.bind(this), s(o)
            }
        }
        render() {
            const {
                children: t,
                formURL: s,
                inline: o,
                noValidate: l,
                onSubmit: h
            } = this.props, c = {
                display: o ? 'inline' : void 0
            };
            return (0, u.jsxs)("form", {
                action: s,
                method: "POST",
                onSubmit: h,
                ref: this.setFormSubmit,
                style: c,
                noValidate: l,
                "data-testid": "auth-form",
                children: [(0, u.jsx)(n.default, {}, this.state ? .rerenderKey), t]
            })
        }
    }
    h.defaultProps = l;
    e.default = (0, o.default)('AuthForm', ['onSubmit'])(h)
}), "043669", ["ba7a76", "07aa1f", "9092d5", "2765ca", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        badge: l = !1,
        hasLoggedIn: j = !1,
        initialMenuExpanded: I = !1,
        onMenuPress: M,
        showLocaleSettings: H = !0
    }) {
        const O = {
                href: '/login',
                onPress: s.handleLoginLinkClick,
                children: n.default.t('simple_nav.header.log_in'),
                loggingID: 'simpleHeader.loggedOut.profileMenu.logIn',
                preventClientRouting: !0,
                dataTestId: 'cypress-headernav-login'
            },
            b = {
                href: '/signup_login',
                onPress: s.handleSignupLinkClick,
                children: n.default.t('simple_nav.header.sign_up'),
                loggingID: 'simpleHeader.loggedOut.profileMenu.signUp',
                preventClientRouting: !0,
                dataTestId: 'cypress-headernav-signup'
            },
            D = h.default.getBootstrap('ehlp.disable');
        return (0, v.jsx)(_.default, {
            links: (0, v.jsxs)(v.Fragment, {
                children: [(0, v.jsx)(p.default, {
                    href: "/host/homes",
                    loggingID: "simpleHeader.loggedOut.becomeAHost",
                    children: n.default.t('simple_nav.header.become_a_host')
                }), H && (0, v.jsx)(x.default, {
                    loggingID: "simpleHeader.loggedOut.localeSettingsCombinedMenu"
                })]
            }),
            button: (0, v.jsxs)(f.default, {
                badge: l,
                initialOpen: I,
                loggingID: "simpleHeader.loggedOut.profileMenu",
                onPress: M,
                children: [(0, v.jsx)(o.default, { ...j ? O : b
                }), (0, v.jsx)(u.default, { ...j ? b : O
                }), (0, v.jsx)(t.default, {}), (0, v.jsx)(u.default, {
                    href: "/host/homes",
                    loggingID: "simpleHeader.loggedOut.profileMenu.hostStays",
                    children: n.default.t('simple_nav.header.host_stays')
                }), !D && (0, v.jsx)(u.default, {
                    href: "/host/experiences?from_nav=1",
                    loggingID: "simpleHeader.loggedOut.profileMenu.hostExperiences",
                    children: n.default.t('simple_nav.header.host_experiences')
                }), (0, v.jsx)(c.HelpMenuLink, {
                    href: "/help",
                    loggingID: "simpleHeader.loggedOut.profileMenu.help",
                    children: n.default.t('simple_nav.header.help')
                })]
            })
        })
    };
    l(r(d[1]));
    var n = l(r(d[2])),
        s = r(d[3]),
        t = l(r(d[4])),
        o = l(r(d[5])),
        u = l(r(d[6])),
        p = l(r(d[7])),
        h = l(r(d[8])),
        f = l(r(d[9])),
        c = r(d[10]),
        _ = l(r(d[11])),
        x = l(r(d[12])),
        v = r(d[13])
}), "0cbab3", ["ba7a76", "07aa1f", "a9f4b1", "4798c3", "1a9121", "4f2484", "213d40", "872115", "c235f8", "a2db86", "2e72c2", "9c5562", "29e869", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const [t, f] = (0, s.useState)((() => (0, n.localStorageGetItem)(u) || {
            isStaysHost: !1,
            isExperiencesHost: !1
        }));
        return (0, s.useEffect)((() => {
            let t = !1;
            return o().default.get('/api/v2/users/me', {
                searchParams: {
                    _format: 'for_pwa_navigation'
                }
            }).then((({
                user: {
                    is_host: s,
                    is_trip_host: o
                }
            }) => {
                t || (f({
                    isStaysHost: s,
                    isExperiencesHost: o
                }), (0, n.localStorageSetItem)(u, {
                    isStaysHost: s,
                    isExperiencesHost: o
                }, {
                    expires: c
                }))
            })).catch((() => {})), () => {
                t = !0
            }
        }), [f]), t
    };
    var s = r(d[1]);

    function o() {
        const s = t(r(d[2]));
        return o = function() {
            return s
        }, s
    }
    var n = r(d[3]);
    const u = 'simple-header-host-status',
        c = 15552e6
}), "0d8237", ["ba7a76", "07aa1f", "69a7c4", "13babd"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isHeaderAvatarEnabled = function() {
        return n.default.getBootstrap('header_avatar_web_enabled')
    };
    var n = t(r(d[1]))
}), "10465f", ["ba7a76", "c235f8"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var _ = r(d[0]),
        t = r(d[1]),
        s = (r(d[2]), r(d[3])),
        o = r(d[4]),
        f = r(d[5]),
        n = r(d[6]),
        l = r(d[7]),
        c = r(d[8]);
    const u = (0, s.mergeStyles)(f.baseButtonCssFragments, l.dls19CssFragments, c.smallCssFragments, n.inverseSecondaryCssFragments, {
        component: "\n      padding-top: 7px;\n      padding-bottom: 7px;\n      padding-left: 15px;\n      padding-right: 15px;\n    "
    });
    (0, t.cssFragmentsObjToStylesFn)(u);
    e.default = (0, o.createVariant)(_.BaseButtonOrAnchor, {
        base: "b38b6lo atm_9j_tlke0l atm_9s_1o8liyq atm_gi_idpfg4 atm_mk_h2mmj6 atm_r3_1h6ojuz atm_rd_glywfm atm_3f_uuagnh atm_70_5j5alw atm_vy_1wugsn5 atm_l8_1cudcw5 atm_26_d0eyo3 atm_7l_jt7fhx atm_c8_dlk8xv atm_bx_1kw7nm4 atm_tl_1gw4zv3 atm_9j_13gfvf7_1o5j5ji atm_k4_si67jz_1o5j5ji",
        component: "c11os0jn atm_bx_48h72j atm_c8_2x1prs atm_g3_1jbyh58 atm_fr_11a07z3 atm_cs_10d11i2 atm_5j_t09oo2 atm_6h_t94yts atm_66_nqa18y atm_kd_glywfm atm_uc_1lizyuv atm_r2_1j28jx2 atm_c8_km0zk7 atm_g3_18khvle atm_fr_1m9t47k atm_jb_1yg2gu8 atm_4b_duwx18 atm_26_1j28jx2 atm_7l_1v2u014 atm_l8_16nilfb atm_uc_glywfm__1rrf6b5 atm_kd_glywfm_1w3cfyq atm_uc_aaiy6o_1w3cfyq atm_70_1b8lkes_1w3cfyq atm_3f_glywfm_e4a3ld atm_l8_idpfg4_e4a3ld atm_gi_idpfg4_e4a3ld atm_3f_glywfm_1r4qscq atm_kd_glywfm_6y7yyg atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_kd_glywfm_pfnrn2_1oszvuo atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_1b8lkes_pfnrn2_1oszvuo atm_3f_glywfm_1icshfk_1oszvuo atm_l8_idpfg4_1icshfk_1oszvuo atm_gi_idpfg4_1icshfk_1oszvuo atm_3f_glywfm_b5gff8_1oszvuo atm_kd_glywfm_2by9w9_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_tr_18md41p_csw3t1 atm_k4_kb7nvz_1o5j5ji atm_4b_duwx18_1w3cfyq atm_7l_1v2u014_1w3cfyq atm_70_1hqrxjx_1w3cfyq atm_4b_duwx18_pfnrn2_1oszvuo atm_7l_1v2u014_pfnrn2_1oszvuo atm_70_1hqrxjx_pfnrn2_1oszvuo atm_4b_duwx18_1nos8r_uv4tnr atm_26_zcso03_1nos8r_uv4tnr atm_7l_1v2u014_1nos8r_uv4tnr atm_9j_13gfvf7_4fughm_uv4tnr atm_26_1j28jx2_4fughm_uv4tnr atm_7l_1wlpwkj_4fughm_uv4tnr atm_4b_zcso03_4fughm_uv4tnr atm_4b_duwx18_csw3t1 atm_26_zcso03_csw3t1 atm_7l_1v2u014_csw3t1 atm_9j_13gfvf7_1o5j5ji atm_26_1j28jx2_1o5j5ji atm_7l_1wlpwkj_1o5j5ji atm_4b_zcso03_1o5j5ji",
        fullWidth: "f1dynm5b atm_vy_1osqo2v",
        showOnlyOnKeyboardFocus: "s1mqz8on atm_3f_idpfg4_1r63tcj atm_7h_hxbz6r_1r63tcj atm_7i_ysn8ba_1r63tcj atm_e2_t94yts_1r63tcj atm_ks_15vqwwr_1r63tcj atm_ks_zryt35_1r63tcj atm_l8_idpfg4_1r63tcj atm_mk_stnw88_1r63tcj atm_vv_1q9ccgz_1r63tcj atm_vy_t94yts_1r63tcj"
    })
}), "127efd", ["60c631", "2d8af3", "4786a8", "aabdb1", "92749c", "ee5719", "cdcaad", "c642d5", "7cc500"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return (0, n.jsx)(s.BaseHeaderMenuDivider, { ...t,
            linariaClassNames: u
        })
    };
    r(d[1]), t(r(d[2])), r(d[3]), t(r(d[4]));
    var s = r(d[5]),
        n = r(d[6]);
    s.BaseHeaderMenuDividerCssFragments;
    const u = {
        divider: "d1rna43j atm_26_1oqmvsg atm_gi_brf0ql atm_e2_t94yts"
    }
}), "1a9121", ["ba7a76", "ea4b89", "07aa1f", "4786a8", "5aed2e", "6dd3a1", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        var t = (0, f.useSignals)(1);
        try {
            return (0, n.jsx)(l.default, {
                hasLoggedIn: '1' === (0, u.getCookieSync)('hli').value
            })
        } finally {
            t.f()
        }
    };
    t(r(d[1]));
    var u = r(d[2]),
        l = t(r(d[3])),
        n = r(d[4]),
        f = r(d[5])
}), "1caacc", ["ba7a76", "07aa1f", "13babd", "0cbab3", "b8c07d", "e086eb"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = t(r(d[1]));
    const u = {
        document: void 0,
        getDocument: () => r(d[3])(d[2]).then(o.default).then((t => t.default)),
        name: 'getNotificationsForHeader',
        type: 'query',
        operationId: 'a7c3819755314d09322f818a0bd073a8665830bddb232b72c2d01b9aef0cdeeb'
    };
    e.default = u
}), "1d0c98", ["ba7a76", "45f788", "c04b2b", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = t(r(d[1])),
        u = t(r(d[2])),
        o = r(d[3]);
    class s extends n.default.Component {
        constructor(...t) {
            super(...t), this.state = {
                token: null
            }
        }
        componentDidMount() {
            this.setState({
                token: (0, u.default)()
            })
        }
        render() {
            const {
                token: t
            } = this.state;
            return t ? (0, o.jsx)("input", {
                type: "hidden",
                name: "authenticity_token",
                value: t
            }) : null
        }
    }
    e.default = s
}), "2765ca", ["ba7a76", "07aa1f", "40eeb7", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = n(r(d[2])),
        s = l(r(d[3])),
        o = r(d[4]),
        u = l(r(d[5])),
        c = l(r(d[6])),
        f = l(r(d[7])),
        p = r(d[8]);
    e.default = (0, o.withStyles)((() => ({
        container: {
            position: 'relative',
            display: 'inline-block',
            verticalAlign: 'middle',
            marginTop: 'auto',
            marginBottom: 'auto'
        }
    })))((function({
        css: l,
        initialOpen: n = !1,
        loggingID: o,
        onPress: v,
        styles: h
    }) {
        const {
            isOpen: _,
            toggleMenu: b,
            href: j
        } = (0, f.default)("simple-header-locale-menu-combined", n), x = (0, t.useRef)(null), y = (0, t.useCallback)((() => {
            b(), v ? .()
        }), [v, b]);
        return (0, p.jsxs)("div", { ...l(h.container),
            children: [(0, p.jsx)(c.default, {
                expanded: _,
                href: j,
                label: s.default.t('simple_nav.header.locale_settings'),
                onPress: y,
                refForFocus: x
            }), (0, p.jsx)(u.default, {
                isOpen: _,
                loggingID: o,
                onClose: () => {
                    _ && y()
                }
            })]
        })
    }))
}), "29e869", ["ba7a76", "45f788", "07aa1f", "a9f4b1", "e0b084", "afe989", "d12e5d", "81bba3", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        item: t,
        onMenuPress: c
    }) {
        if (!t) return null;
        const f = t.loggingId || void 0,
            h = t.url || void 0;
        switch (t.type) {
            case 'LINK':
                return (0, s.jsx)(o.default, {
                    shouldLogImpression: !0,
                    loggingID: f,
                    href: h,
                    children: t.text
                });
            case 'BUTTON':
                return (0, s.jsx)(l.default, {
                    loggingID: f,
                    href: h,
                    children: t.text
                });
            case 'LOCALE':
                return (0, s.jsx)(u.default, {
                    loggingID: f,
                    onPress: c
                });
            default:
                return (0, n.reportError)(new Error(`Unknown header top level item type: ${t.type}`), {
                    tags: {
                        team: 'search-input'
                    }
                }), null
        }
    };
    t(r(d[1]));
    var n = r(d[2]),
        l = t(r(d[3])),
        u = t(r(d[4])),
        o = t(r(d[5])),
        s = r(d[6])
}), "2d0635", ["ba7a76", "07aa1f", "f2f40f", "e0a238", "29e869", "edf2f7", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.HelpMenuLink = void 0;
    n(r(d[1]));
    var t = n(r(d[2])),
        u = n(r(d[3])),
        l = r(d[4]);

    function f(n) {
        return function({
            children: t,
            href: u,
            ...f
        }) {
            return (0, l.jsx)(n, {
                preventClientRouting: !0,
                ...f,
                href: u || '/help',
                children: t
            })
        }
    }
    f(t.default), e.HelpMenuLink = f(u.default)
}), "2e72c2", ["ba7a76", "07aa1f", "872115", "213d40", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t = !1) {
        const o = (0, f.default)(),
            [v, b] = (0, u.useState)(),
            _ = (0, l.createGlobalId)('User', n.default.current().idStr ? ? ''),
            {
                data: M
            } = (0, s().useMinimalistClientSideQuery)(c.default, {
                variables: {
                    ids: [_]
                }
            });
        return (0, u.useEffect)((() => {
            o && !t && b(M ? .userBlock ? .users ? .[0] ? .userRepresentationUrl ? .thumbnailUrlMedium ? ? void 0)
        }), [o, t]), v
    };
    var u = r(d[1]),
        n = t(r(d[2]));

    function s() {
        const t = r(d[3]);
        return s = function() {
            return t
        }, t
    }
    var l = r(d[4]),
        c = t(r(d[5])),
        f = t(r(d[6]))
}), "2f2e3a", ["ba7a76", "07aa1f", "06a99e", "068abc", "56afe0", "fa08b3", "09d4ab"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    e.default = ({
        dls19: o
    }) => ({
        component: {
            backgroundColor: 'transparent',
            ':hover': {
                backgroundColor: o.palette.white
            },
            ':active': {
                backgroundColor: o.palette.white
            },
            ':disabled': {
                backgroundColor: 'transparent',
                borderColor: '#C8C8C8',
                color: '#C8C8C8'
            }
        }
    })
}), "32c218", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        return (0, t.getCookieSync)('_csrf_token').value || ''
    };
    var t = r(d[0])
}), "40eeb7", ["13babd"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const [t, s] = (0, u.useState)(!1);
        return (0, u.useEffect)((() => {
            if (!l.default.getBootstrap('guest_header.host_referrals_header_item_force')) return;
            let t = !1;
            return (0, f.default)('host_referral_eligibility'), n().default.get('/api/v2/host_referral_eligibilities', {
                searchParams: {
                    touch_point: 'ACCOUNT_MENU'
                }
            }).then((({
                host_referral_eligibility: {
                    is_eligible: t
                }
            }) => !!t)).catch((() => !1)).then((u => {
                t || s(u)
            })), () => {
                t = !0
            }
        }), []), t
    };
    var u = r(d[1]),
        l = t(r(d[2]));

    function n() {
        const u = t(r(d[3]));
        return n = function() {
            return u
        }, u
    }
    var f = t(r(d[4]))
}), "4150d5", ["ba7a76", "07aa1f", "c235f8", "69a7c4", "cf230b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.standardSmallStyles = void 0;
    t(r(d[1])), t(r(d[2]));
    e.standardSmallStyles = {
        badge: "b1ekyzrs atm_c8_1uc0753 atm_g3_lonqig atm_e2_1j6vyhq"
    }
}), "43141c", ["ba7a76", "5aed2e", "74aa13"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        const {
            href: n
        } = t;
        if (n.startsWith('/api/v2/')) return (0, h.jsx)(v, { ...t
        });
        return (0, h.jsx)(b, { ...t
        })
    };
    var u = n(r(d[2])),
        o = t(r(d[3])),
        s = r(d[4]),
        c = t(r(d[5]));

    function l() {
        const n = t(r(d[6]));
        return l = function() {
            return n
        }, n
    }
    var f = r(d[7]),
        h = r(d[8]);

    function v({
        href: t,
        ...n
    }) {
        const u = (0, f.useEvent)((() => {
            l().default.post(t).then((() => {
                (0, s.clearStorageForLogout)(), window.location.replace('/?has_logged_out=1')
            }))
        }));
        return (0, h.jsx)(c.default, {
            submit: !0,
            dataTestId: "cypress-headernav-logout-soa",
            ...n,
            onPress: u
        })
    }

    function b({
        href: t,
        children: n,
        ...l
    }) {
        const f = (0, u.useRef)(),
            v = (0, u.useCallback)((async t => {
                t.preventDefault(), (0, s.clearStorageForLogout)(), f.current ? .()
            }), []),
            b = (0, u.useCallback)((t => {
                f.current = t
            }), []);
        return (0, h.jsx)(o.default, {
            formURL: t,
            onSubmit: v,
            setForceSubmitMethod: b,
            children: (0, h.jsx)(c.default, {
                submit: !0,
                dataTestId: "cypress-headernav-logout",
                ...l,
                children: n
            })
        })
    }
}), "4c45af", ["ba7a76", "45f788", "07aa1f", "043669", "cab6ac", "213d40", "69a7c4", "f4e9c4", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    r(d[1]);
    var l = t(r(d[2])),
        s = r(d[3]),
        _ = r(d[4]),
        n = (t(r(d[5])), r(d[6])),
        u = r(d[7]),
        f = r(d[8]);
    const c = (0, s.mergeStyles)(n.standardStyles, f.standardSmallStyles, u.standardFilledStyles, {
        badge: "brjhcf6 atm_7l_1p8m8iw atm_26_3ib6or atm_t9_angws6"
    });
    e.default = (0, _.createVariant)(l.default, c)
}), "50a4c7", ["ba7a76", "ea4b89", "db280b", "aabdb1", "92749c", "5aed2e", "9bff44", "77a45a", "43141c"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const c = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16"
        }
    }, 'IcCompactGlobeOutline16', {
        defaultSize: 16
    });
    e.default = c
}), "531223", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        children: t
    }) {
        return (0, o.jsx)(u.default, {
            href: "#bug-reporter",
            onPress: () => {
                const t = setTimeout((() => {
                    n.default.emit('bugReporter:open')
                }), 100);
                return () => {
                    clearTimeout(t)
                }
            },
            children: t
        })
    };
    t(r(d[1]));
    var u = t(r(d[2])),
        n = t(r(d[3])),
        o = r(d[4])
}), "615161", ["ba7a76", "07aa1f", "213d40", "abc3e4", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.secondaryCssFragments = e.default = void 0;
    var o = r(d[1]);
    r(d[2]), t(r(d[3])), r(d[4]), r(d[5]);
    const l = e.secondaryCssFragments = {
        component: "\n    border-color: var(--linaria-theme_palette-border-primary); /* migrated from theme.palette.hof */\n    background: var(--linaria-theme_palette-bg-primary); /* migrated from theme.palette.white */\n    color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */\n    :focus-visible {              border-color: var(--linaria-theme_palette-border-primary); /* migrated from theme.palette.hof */       color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */       box-shadow: 0 0 0 2px var(--linaria-theme_palette-border-primary), 0 0 0 4px rgba(255, 255, 255, 0.8); /* migrated from theme         .palette.hof */          }     @supports not selector(:focus-visible) {       :focus {                border-color: var(--linaria-theme_palette-border-primary); /* migrated from theme.palette.hof */       color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */       box-shadow: 0 0 0 2px var(--linaria-theme_palette-border-primary), 0 0 0 4px rgba(255, 255, 255, 0.8); /* migrated from theme         .palette.hof */            }     }\n\n\n\n\n       \n\n    @media (hover: hover) {       &:hover {                border-color: var(--linaria-theme_palette-border-primary-hover); /* migrated from theme.palette.black */       background: var(--linaria-theme_palette-bg-primary-hover); /* migrated from theme.palette.faint */       color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */       /* we can remove this once all variants using these styles are migrated to Linaria       * this is here because RWS does not respect the ordering of keys in the        * backwards-compatible object, so we try to re-override hover styles       */       &:disabled {         border-color: var(--linaria-theme_palette-border-primary-disabled); /* migrated from theme.palette           .deco */         background: var(--linaria-theme_palette-bg-primary); /* migrated from theme.palette.white */         color: var(--linaria-theme_palette-text-primary-disabled); /* migrated from theme.palette.deco */       }            }     }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n       \n\n    &:active {\n      border-color: var(--linaria-theme_palette-border-primary-hover); /* migrated from theme.palette.black */\n      background: var(--linaria-theme_palette-bg-primary-hover); /* migrated from theme.palette.faint */\n      color: var(--linaria-theme_palette-text-primary); /* migrated from theme.palette.hof */\n    }\n\n    &:disabled {\n      border-color: var(--linaria-theme_palette-border-primary-disabled); /* migrated from theme.palette\n        .deco */\n      background: var(--linaria-theme_palette-bg-primary); /* migrated from theme.palette.white */\n      color: var(--linaria-theme_palette-text-primary-disabled); /* migrated from theme.palette.deco */\n    }\n  "
    };
    e.default = (0, o.cssFragmentsObjToStylesFn)(l)
}), "61531c", ["ba7a76", "2d8af3", "4786a8", "5aed2e", "0d3432", "aabdb1"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const t = (0, s.useContext)(b.default);
        if ((0, s.useEffect)((() => {
                t || (0, p.reportError)(new Error(H), {
                    tags: {
                        team: 'search-input'
                    }
                })
            }), [t]), !t) return (0, q.jsx)(I.default, {
            loggingID: "simpleHeader.content.staticFallback.missingQueryRef",
            shouldLogImpression: !0
        }, "missing-context-header");
        return (0, q.jsx)(C, {
            queryRef: t
        })
    };
    var s = n(r(d[2]));

    function o() {
        const t = r(d[3]);
        return o = function() {
            return t
        }, t
    }
    var u = t(r(d[4])),
        l = t(r(d[5])),
        f = t(r(d[6])),
        c = t(r(d[7])),
        p = r(d[8]),
        h = r(d[9]),
        v = r(d[10]),
        y = r(d[11]),
        b = t(r(d[12])),
        E = t(r(d[13])),
        I = t(r(d[14])),
        x = t(r(d[15])),
        j = t(r(d[16])),
        q = r(d[17]);

    function C({
        queryRef: t
    }) {
        const {
            data: n,
            loading: b,
            refetch: C
        } = (0, o().useMinimalistPreloadedQuery)({
            query: E.default,
            queryRef: t
        }), H = n ? .presentation ? .header, R = (0, u.default)(H, Boolean), D = H || R, L = (0, y.useInitialRender)(), Q = (0, f.default)((0, v.isHeaderAvatarEnabled)()), k = (0, c.default)(), w = (0, o().useNiobeMinimalistClient)(), S = (0, j.default)(), _ = (0, h.useEvent)((() => {
            C({
                cdnCacheSafe: !1,
                isInitialLoad: !1
            }) ? .then((({
                data: n
            }) => {
                n ? .presentation ? .header && (w.writeQuery({
                    data: n,
                    query: E.default,
                    variables: t.options.variables
                }), t.options.variables.cdnCacheSafe && w.writeQuery({
                    data: n,
                    query: E.default,
                    variables: { ...t.options.variables,
                        cdnCacheSafe: !1
                    }
                }))
            }))
        }));
        (0, s.useEffect)((() => {
            k && _()
        }), [k, w, _, S]), (0, s.useEffect)((() => {
            D || t.options.skip || b || (0, p.reportError)(new Error('ViaductContent missing data'), {
                tags: {
                    team: 'search-input'
                }
            })
        }), [b, t.options.skip, D]);
        return ((0, v.isHeaderAvatarEnabled)() ? !D && !b && !L : !D) ? (0, q.jsx)(I.default, {
            loggingID: "simpleHeader.content.staticFallback.missingData",
            shouldLogImpression: !0
        }) : (0, q.jsx)(l.default, {
            children: (0, q.jsx)(x.default, {
                loggingID: "simpleHeader.content.viaduct",
                shouldLogImpression: !0,
                headerData: D,
                profileSrcOverride: Q,
                isLoggedIn: k
            })
        })
    }
    const H = 'HeaderQueryRef context not provided'
}), "659f92", ["ba7a76", "45f788", "07aa1f", "068abc", "67c39a", "23d319", "2f2e3a", "09d4ab", "f2f40f", "f4e9c4", "10465f", "1e052a", "87ccfe", "b4ed06", "03682b", "a03a49", "fece21", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var s = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.BaseHeaderMenuDivider = function({
        linariaClassNames: s,
        css: v,
        styles: c
    }) {
        const l = (0, n.useCx)();
        return (0, u.jsx)("div", {
            className: l(s ? .divider),
            ...(0, t.maybeRwsCss)(v, c ? .divider)
        })
    }, e.BaseHeaderMenuDividerCssFragments = void 0;
    s(r(d[1]));
    var n = r(d[2]),
        t = r(d[3]),
        u = r(d[4]);
    const v = e.BaseHeaderMenuDividerCssFragments = {
        divider: ""
    };
    (0, t.deprecatedExtendableStylesFn)('BaseHeaderMenuDivider', (0, t.cssFragmentsObjToStylesFn)(v))
}), "6dd3a1", ["ba7a76", "07aa1f", "4786a8", "2d8af3", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var u = r(d[1]),
        l = r(d[2]),
        f = r(d[3]),
        n = t(r(d[4])),
        o = t(r(d[5])),
        s = t(r(d[6])),
        c = t(r(d[7]));
    const v = (0, l.extendStyles)(f.buttonStylesFn, n.default, o.default, s.default, c.default);
    e.default = (0, u.withStyles)(v)(f.BaseButtonOrAnchor)
}), "70c65e", ["ba7a76", "e0b084", "01b367", "60c631", "c642d5", "7cc500", "61531c", "32c218"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    e.default = t => {
        let n;
        if ('string' == typeof t) {
            if (!t.endsWith('px')) return t;
            n = parseInt(t, 10)
        } else {
            if ('number' != typeof t) return '';
            n = t
        }
        const u = n < 0,
            f = Math.abs(n) / 16 + "rem";
        return u ? `-${f}` : f
    }
}), "74aa13", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const [t, n] = (0, u.useState)(!1);
        return (0, u.useEffect)((() => {
            let t = !1;
            return c().then((u => {
                t || n(u)
            })), () => {
                t = !0
            }
        }), []), t
    };
    var u = r(d[1]);

    function n() {
        const u = t(r(d[2]));
        return n = function() {
            return u
        }, u
    }
    var s = t(r(d[3]));

    function c() {
        return (0, s.default)('business_travel_status'), n().default.get('/api/v2/users/me', {
            searchParams: {
                _format: 'for_a4w_header'
            }
        }).then((({
            user: {
                business_travel_manager: t,
                is_booker_dashboard_launched: u
            }
        }) => !!t || !!u)).catch((() => !1))
    }
}), "759c83", ["ba7a76", "07aa1f", "69a7c4", "cf230b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = n(r(d[2])),
        s = l(r(d[3])),
        o = l(r(d[4])),
        f = l(r(d[5])),
        h = l(r(d[6])),
        u = l(r(d[7])),
        p = l(r(d[8])),
        c = l(r(d[9])),
        _ = l(r(d[10])),
        x = r(d[11]),
        I = l(r(d[12])),
        v = l(r(d[13])),
        b = l(r(d[14])),
        H = r(d[15]);
    e.default = (0, t.memo)((function({
        hasAlerts: l = !1,
        hasExperiencesActions: n = !1,
        hasStaysActions: t = !1,
        hasTripActions: j = !1,
        initialMenuExpanded: M = !1,
        isBusinessTravelManager: D = !1,
        isExperiencesHost: y = !1,
        isHostReferralEligible: w = !1,
        isStaysHost: S = !1,
        unreadMessageCount: A = 0,
        profileSrc: E,
        showLocaleSettings: L = !0
    }) {
        const T = [l, n, t, j, A].filter(Boolean).length,
            B = S || t,
            C = y || n,
            P = c.default.getBootstrap('ehlp.disable');
        return (0, H.jsx)(_.default, {
            links: (0, H.jsxs)(H.Fragment, {
                children: [B && (0, H.jsx)(p.default, {
                    href: "/hosting",
                    loggingID: "simpleHeader.loggedIn.switchToHosting.stays",
                    children: s.default.t('simple_nav.header.switch_to_hosting')
                }), C && !B && (0, H.jsx)(p.default, {
                    href: "/experience-hosting",
                    loggingID: "simpleHeader.loggedIn.switchToHosting.experiences",
                    children: s.default.t('simple_nav.header.switch_to_hosting')
                }), !B && !C && (0, H.jsx)(p.default, {
                    href: "/host/homes",
                    loggingID: "simpleHeader.loggedIn.becomeAHost",
                    children: s.default.t('simple_nav.header.become_a_host')
                }), L && (0, H.jsx)(b.default, {
                    onPress: u.default,
                    loggingID: "simpleHeader.loggedIn.localeSettingsCombinedMenu"
                })]
            }),
            button: (0, H.jsxs)(v.default, {
                badge: T,
                initialOpen: M,
                loggingID: "simpleHeader.loggedIn.profileMenu",
                src: E,
                onPress: u.default,
                children: [(0, H.jsx)(f.default, {
                    href: "/guest/inbox",
                    badge: !!A,
                    after: A ? s.default.t('simple_nav.header.unread_count', {
                        smart_count: A
                    }) : void 0,
                    loggingID: "simpleHeader.loggedIn.profileMenu.inbox",
                    children: s.default.t('simple_nav.header.inbox')
                }), l && (0, H.jsx)(f.default, {
                    href: "/alerts",
                    preventClientRouting: !0,
                    badge: !0,
                    badgeLabel: s.default.t('simple_nav.header.has_notifications'),
                    loggingID: "simpleHeader.loggedIn.profileMenu.notifications",
                    children: s.default.t('simple_nav.header.notifications')
                }), (0, H.jsx)(f.default, {
                    href: "/trips/v1",
                    badge: j,
                    badgeLabel: s.default.t('simple_nav.header.has_notifications'),
                    loggingID: "simpleHeader.loggedIn.profileMenu.trips",
                    children: s.default.t('simple_nav.header.trips')
                }), (0, H.jsx)(f.default, {
                    href: "/wishlists",
                    loggingID: "simpleHeader.loggedIn.profileMenu.saved",
                    children: s.default.t('simple_nav.header.saved')
                }), (0, H.jsx)(o.default, {}), B && (0, H.jsx)(h.default, {
                    href: "/hosting",
                    badge: t,
                    badgeLabel: s.default.t('simple_nav.header.has_notifications'),
                    loggingID: "simpleHeader.loggedIn.profileMenu.manageHomes",
                    children: s.default.t('simple_nav.header.manage_homes')
                }), !B && (0, H.jsx)(h.default, {
                    href: "/host/homes",
                    loggingID: "simpleHeader.loggedIn.profileMenu.hostStays",
                    children: s.default.t('simple_nav.header.host_stays')
                }), C && (0, H.jsx)(h.default, {
                    href: "/experience-hosting",
                    badge: n,
                    badgeLabel: s.default.t('simple_nav.header.has_notifications'),
                    loggingID: "simpleHeader.loggedIn.profileMenu.manageExperiences",
                    children: s.default.t('simple_nav.header.manage_experiences')
                }), !C && !P && (0, H.jsx)(h.default, {
                    href: "/host/experiences?from_nav=1",
                    loggingID: "simpleHeader.loggedIn.profileMenu.hostExperiences",
                    children: s.default.t('simple_nav.header.host_experiences')
                }), D && (0, H.jsx)(h.default, {
                    href: "/business/company_dashboard/trips",
                    loggingID: "simpleHeader.loggedIn.profileMenu.companyDashboard",
                    children: s.default.t('simple_nav.header.company_dashboard')
                }), w && (0, H.jsx)(h.default, {
                    href: "/refer?r=67",
                    loggingID: "simpleHeader.loggedIn.profileMenu.referAHost",
                    children: s.default.t('host_referral_default_no_reward_content.host_account_menu_title')
                }), (0, H.jsx)(h.default, {
                    href: "/account-settings",
                    loggingID: "simpleHeader.loggedIn.profileMenu.accountSettings",
                    children: s.default.t('simple_nav.header.account')
                }), (0, H.jsx)(o.default, {}), (0, H.jsx)(x.HelpMenuLink, {
                    href: "/help",
                    loggingID: "simpleHeader.loggedIn.profileMenu.help",
                    children: s.default.t('simple_nav.header.help')
                }), (0, H.jsx)(I.default, {
                    href: "/logout",
                    loggingID: "simpleHeader.loggedIn.profileMenu.logout",
                    children: s.default.t('simple_nav.header.log_out')
                })]
            })
        })
    }))
}), "76bec6", ["ba7a76", "45f788", "07aa1f", "a9f4b1", "1a9121", "4f2484", "213d40", "aa214d", "872115", "c235f8", "9c5562", "2e72c2", "4c45af", "a2db86", "29e869", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.standardFilledStyles = void 0;
    t(r(d[1]));
    e.standardFilledStyles = {
        badge: "b1uyv1a1 atm_7l_1v2u014 atm_26_18sdevw"
    }
}), "77a45a", ["ba7a76", "5aed2e"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var _ = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.standardStyles = void 0;
    _(r(d[1])), _(r(d[2]));
    e.standardStyles = {
        badge: "bhr7ze8 atm_5j_1896hn4 atm_lk_4jyze8 atm_ll_4jyze8 atm_c8_km0zk7 atm_g3_18khvle atm_fr_1m9t47k atm_fr_exz122 atm_cs_19iasv6 atm_t9_angws6"
    }
}), "9bff44", ["ba7a76", "5aed2e", "74aa13"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        l = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var u = l(r(d[2])),
        n = t(r(d[3])),
        s = t(r(d[4])),
        o = t(r(d[5])),
        f = t(r(d[6])),
        p = r(d[7]),
        v = r(d[8]),
        c = t(r(d[9])),
        I = t(r(d[10])),
        j = t(r(d[11])),
        x = t(r(d[12])),
        E = r(d[13]);
    e.default = (0, u.memo)((0, n.default)('ViaductContent', [])((function({
        headerData: t,
        initialMenuExpanded: l = !1,
        isLoggedIn: n,
        profileSrcOverride: M
    }) {
        const b = (_ = t ? .menuItemGroups ? .flatMap((t => t ? .items ? .map((t => t ? .hasBadge ? 1 : 0)))), (_ || []).reduce(((t, l) => (t || 0) + (l || 0)), 0));
        var _;
        const h = (0, u.useMemo)((() => M || ((0, p.isHeaderAvatarEnabled)() ? t ? .avatarImageUrl ? ? void 0 : void 0)), [t ? .avatarImageUrl, M]);
        return (0, E.jsx)(x.default, {
            links: t ? .topLevelItemGroup ? .items ? .map((t => (0, E.jsx)(I.default, {
                onMenuPress: f.default,
                item: t
            }, t ? .itemId || void 0))),
            button: (0, E.jsx)(j.default, {
                badge: b,
                src: h,
                initialOpen: l,
                loggingID: n ? 'simpleHeader.loggedIn.profileMenu' : 'simpleHeader.loggedOut.profileMenu',
                onPress: f.default,
                children: t ? .menuItemGroups ? .filter(o.default).map((({
                    groupId: t,
                    items: l
                }, n) => (0, E.jsxs)(u.default.Fragment, {
                    children: [0 !== n && (0, E.jsx)(s.default, {}), l ? .map((t => 'RECENTLY_VIEWED' !== t ? .itemId || (0, v.isRecentlyViewedEligible)() ? (0, E.jsx)(c.default, {
                        item: t
                    }, t ? .itemId || void 0) : null))]
                }, t || n)))
            })
        })
    })))
}), "a03a49", ["ba7a76", "45f788", "07aa1f", "9092d5", "1a9121", "58861b", "aa214d", "10465f", "ecaaa5", "f32b71", "2d0635", "a2db86", "9c5562", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        u.default.emit('actionTray:dismiss')
    };
    var u = t(r(d[1]))
}), "aa214d", ["ba7a76", "abc3e4"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        u = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return (0, f.jsx)(n.default, {
            loader: o,
            renderPlaceholder: n.renderNull,
            ...t
        })
    };
    var l = u(r(d[0])),
        n = (u(r(d[2])), t(r(d[3]))),
        f = r(d[4]);

    function o() {
        return r(d[6])(d[5]).then(l.default).then((t => t.default || t))
    }
}), "afe989", ["45f788", "ba7a76", "07aa1f", "018c3b", "b8c07d", "0fd342", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var c = t(r(d[1]));
    const f = {
        document: void 0,
        getDocument: () => r(d[3])(d[2]).then(c.default).then((t => t.default)),
        name: 'Header',
        type: 'query',
        operationId: 'feaccf8c33667334ecb5df1a89f8d0ce082b89c0b55cb45f5255fa24d2345cef'
    };
    e.default = f
}), "b4ed06", ["ba7a76", "45f788", "5720be", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var s = r(d[0]),
        o = r(d[1]);
    e.default = (0, s.benchmarkLogging)({
        api_used: 'session_storage',
        method: 'clear_sync',
        version: '1.0.0'
    })(o.clear)
}), "c35304", ["b6becb", "2d5ac4"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = r(d[0]),
        t = r(d[1]);
    e.default = (0, o.benchmarkLogging)({
        api_used: 'local_storage',
        method: 'clear_sync',
        version: '1.0.0'
    })(t.clear)
}), "c8ed0d", ["b6becb", "d98eb7"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.clearStorageForLogout = function() {
        try {
            (0, c.default)()
        } catch (t) {}
        try {
            (0, o.default)()
        } catch (t) {}
        try {
            (window.indexedDB || window.msIndexedDB).deleteDatabase('localforage')
        } catch (t) {}
    };
    var c = t(r(d[1])),
        o = t(r(d[2]))
}), "cab6ac", ["ba7a76", "c35304", "c8ed0d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.inverseSecondaryCssFragments = void 0;
    r(d[0]), r(d[1]), r(d[2]), r(d[3]);
    e.inverseSecondaryCssFragments = {
        component: "\n    border-color: var(--linaria-theme_palette-border-primary-inverse); /* migrated from theme.palette.white */\n    background: transparent;\n    color: var(--linaria-theme_palette-text-primary-inverse); /* migrated from theme.palette.white */\n    :focus-visible {              border-color: var(--linaria-theme_palette-border-primary-inverse); /* migrated from theme.palette.white */       color: var(--linaria-theme_palette-text-primary-inverse); /* migrated from theme.palette.white */       box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.8), 0 0 0 5px var(--linaria-theme_palette-border-primary-inverse); /* migrated from theme         .palette.white */          }     @supports not selector(:focus-visible) {       :focus {                border-color: var(--linaria-theme_palette-border-primary-inverse); /* migrated from theme.palette.white */       color: var(--linaria-theme_palette-text-primary-inverse); /* migrated from theme.palette.white */       box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.8), 0 0 0 5px var(--linaria-theme_palette-border-primary-inverse); /* migrated from theme         .palette.white */            }     }\n\n\n\n\n       \n\n    @media (hover: hover) {       &:hover {                border-color: var(--linaria-theme_palette-border-primary-inverse); /* migrated from theme.palette.white */       background: #4a4a4a; /* TODO-JG */       color: var(--linaria-theme_palette-text-primary-inverse); /* migrated from theme.palette.white */       /* we can remove this once all variants using these styles are migrated to Linaria       * this is here because RWS does not respect the ordering of keys in the        * backwards-compatible object, so we try to re-override hover styles       */       &:disabled {         cursor: not-allowed;         background: transparent;         color: #878787; /* TODO-JG */         border-color: #4a4a4a; /* TODO-JG */       }            }     }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n       \n\n    &:active {\n      border-color: var(--linaria-theme_palette-border-primary-inverse); /* migrated from theme.palette.white */\n      background: #4a4a4a; /* TODO-JG */\n      color: var(--linaria-theme_palette-text-primary-inverse); /* migrated from theme.palette.white */\n    }\n\n    &:disabled {\n      cursor: not-allowed;\n      background: transparent;\n      color: #878787; /* TODO-JG */\n      border-color: #4a4a4a; /* TODO-JG */\n    }\n  "
    }
}), "cdcaad", ["2d8af3", "4786a8", "0d3432", "aabdb1"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(u) {
        (0, t.airdogCount)('static_header.request', 1, {
            name: u
        })
    };
    var t = r(d[0])
}), "cf230b", ["3e4681"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var s = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    s(r(d[1]));
    var t = r(d[2]),
        l = s(r(d[3])),
        n = s(r(d[4])),
        o = r(d[5]);
    e.default = (0, t.withStyles)((({
        dls19: s
    }) => ({
        icons: {
            alignItems: 'center',
            display: 'flex',
            height: s.typography.base.md.lineHeight,
            position: 'relative',
            zIndex: 1
        }
    })))((function({
        expanded: s = !1,
        href: t,
        label: c,
        onPress: f,
        refForFocus: u,
        css: h,
        styles: p
    }) {
        return (0, o.jsx)(n.default, {
            ariaExpanded: s,
            ariaLabel: c,
            href: t,
            onPress: f,
            refForFocus: u,
            children: (0, o.jsx)("div", { ...h(p.icons),
                "aria-hidden": !0,
                children: (0, o.jsx)(l.default, {
                    decorative: !0
                })
            })
        })
    }))
}), "d12e5d", ["ba7a76", "07aa1f", "e0b084", "531223", "edf2f7", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var s = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    s(r(d[1]));
    var t = r(d[2]),
        c = r(d[3]),
        _ = (s(r(d[4])), r(d[5]));
    e.default = (0, c.createVariant)((function({
        children: s,
        className: c,
        icon: l,
        iconSize: n = 10,
        iconLabel: o,
        linariaClassNames: u,
        ...b
    }) {
        const j = (0, t.useCx)(),
            v = o ? {
                accessibilityLabel: o
            } : {
                decorative: !0
            };
        return (0, _.jsxs)("span", { ...b,
            className: j(u ? .badge, c),
            children: [l && (0, _.jsx)("span", {
                className: j(u ? .icon),
                children: (0, _.jsx)(l, {
                    size: n,
                    ...v
                })
            }), (0, _.jsx)("span", {
                className: j(u ? .text),
                children: s
            })]
        })
    }), {
        badge: "b16ycy69 atm_26_1j28jx2 atm_9s_116y0ak atm_73_usvi9m atm_e2_1k92wuq atm_vy_1ns9ob4 atm_h_1h6ojuz atm_fc_1h6ojuz atm_vv_1q9ccgz",
        icon: "i28xdb4 atm_9s_1o8liyq atm_ll_1y44olf"
    })
}), "db280b", ["ba7a76", "07aa1f", "4786a8", "92749c", "74aa13", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        loggingID: n,
        href: o,
        children: _
    }) {
        const h = (0, l.useCx)(),
            j = (0, u.useImmersive)() ? t.default : s.default;
        return (0, f.jsx)("span", {
            className: h(c.link),
            children: (0, f.jsx)(j, {
                loggingID: n,
                href: o,
                children: _
            })
        })
    };
    n(r(d[1])), r(d[2]);
    var t = n(r(d[3])),
        l = r(d[4]),
        u = (n(r(d[5])), r(d[6])),
        s = n(r(d[7])),
        f = r(d[8]);
    const c = {
        link: "l1pxf2fz atm_j_1h6ojuz atm_h0_1yuitx"
    }
}), "e0a238", ["ba7a76", "07aa1f", "ea4b89", "127efd", "4786a8", "5aed2e", "ed5a37", "70c65e", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        return (0, c.jsx)(u.default, { ...(0, s.default)(),
            ...(0, f.default)(),
            isBusinessTravelManager: (0, n.default)(),
            isHostReferralEligible: (0, o.default)(),
            profileSrc: (0, l.default)()
        })
    };
    t(r(d[1]));
    var l = t(r(d[2])),
        u = t(r(d[3])),
        f = t(r(d[4])),
        s = t(r(d[5])),
        n = t(r(d[6])),
        o = t(r(d[7])),
        c = r(d[8])
}), "e61b2f", ["ba7a76", "07aa1f", "2f2e3a", "76bec6", "fa5e3e", "0d8237", "759c83", "4150d5", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isRecentlyViewedEligible = function() {
        return l.default.getAirParamValue('recently_viewed_listings/enabled')
    };
    var l = t(r(d[1]));
    t(r(d[2]))
}), "ecaaa5", ["ba7a76", "dcc72a", "2c6bf9"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var _ = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(_) {
        return (0, c.jsx)(n.BaseHeaderLink, { ..._,
            linariaClassnames: s
        })
    };
    _(r(d[1])), r(d[2]);
    var n = r(d[3]),
        t = r(d[4]),
        c = (r(d[5]), r(d[6]));
    const s = { ...t.classNames,
        container_standard: "c177491c atm_7l_dezgoh atm_uc_fg9k26 atm_26_116dmco_1rqz0hn",
        container_immersive: "cnfwnvw atm_7l_1p8m8iw atm_uc_fg9k26 atm_2d_135zal3_1rqz0hn"
    }
}), "edf2f7", ["ba7a76", "07aa1f", "ea4b89", "196a60", "872115", "17ceda", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        item: t,
        onPress: n
    }) {
        const o = (0, l.useCx)(),
            c = (0, s.useCallback)((s => {
                n ? .(s, t)
            }), [t, n]);
        if (!t) return null;
        let h = {};
        'SIGN_UP' === t.itemId ? h = {
            onPress: p.handleSignupLinkClick,
            dataTestId: 'cypress-headernav-signup'
        } : 'LOG_IN' === t.itemId ? h = {
            onPress: p.handleLoginLinkClick,
            dataTestId: 'cypress-headernav-login'
        } : 'GIFTCARDS' === t.itemId && (h = {
            'data-no-client-routing': !0
        });
        const I = y(t),
            _ = !!t.hasBadge;
        return (0, v.jsxs)(I, {
            onPress: c,
            ...h,
            href: t.url || '',
            loggingID: t.loggingId || void 0,
            shouldLogImpression: !0,
            badge: _,
            badgeLabel: _ && !t.caption ? u.default.t('simple_nav.header.has_notifications') : void 0,
            after: t.caption,
            children: [t.text, !!t.isNew && (0, v.jsx)("span", {
                className: o(P.newBadge),
                children: (0, v.jsx)(f.default, {
                    children: u.default.t('shared.new')
                })
            })]
        })
    };
    var s = n(r(d[2])),
        u = t(r(d[3])),
        l = (r(d[4]), t(r(d[5])), r(d[6])),
        o = t(r(d[7])),
        c = t(r(d[8])),
        f = t(r(d[9])),
        p = r(d[10]),
        h = r(d[11]),
        I = r(d[12]),
        _ = t(r(d[13])),
        L = t(r(d[14])),
        v = r(d[15]);

    function y(t) {
        switch (t.type) {
            case 'REPORT_BUG':
                return L.default;
            case 'HELP':
                return I.HelpMenuLink;
            case 'LOGOUT':
                return _.default;
            case 'LINK':
            case 'BUTTON':
                return t.primary ? o.default : c.default;
            default:
                return (0, h.reportError)(new Error(`Unknown header menu item type: ${t.type}`), {
                    tags: {
                        team: 'search-input'
                    }
                }), c.default
        }
    }
    const P = {
        newBadge: "n7igm0s atm_gz_1yuitx"
    }
}), "f32b71", ["ba7a76", "45f788", "07aa1f", "a9f4b1", "ea4b89", "5aed2e", "4786a8", "4f2484", "213d40", "50a4c7", "4798c3", "f2f40f", "2e72c2", "4c45af", "615161", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const t = (0, s().useNiobeMinimalistClient)(),
            [o, u] = (0, n.useState)((() => (0, c.localStorageGetItem)(p) || {})),
            l = (0, f.default)();
        return (0, n.useEffect)((() => {
            let n = !1;
            return _(t).then((t => {
                n || (u(t), (0, c.localStorageSetItem)(p, t, {
                    expires: y
                }))
            })), () => {
                n = !0
            }
        }), [l, u]), o
    };
    var n = r(d[1]);

    function s() {
        const t = r(d[2]);
        return s = function() {
            return t
        }, t
    }
    var o = t(r(d[3]));

    function u() {
        const n = t(r(d[4]));
        return u = function() {
            return n
        }, n
    }
    var c = r(d[5]),
        l = t(r(d[6])),
        f = t(r(d[7]));

    function h(t) {
        return (0, l.default)('messaging_unread_count'), t.query({
            query: o.default,
            fetchPolicy: 'network-only'
        }).then((({
            data: t
        }) => ({
            hasAlerts: (t ? .presentation ? .mobileNavBar ? .unreadNotificationCount || 0) > 0,
            unreadMessageCount: t ? .viewer ? .badgeCounts ? .[0] ? .count || 0
        })))
    }

    function _(t) {
        return Promise.all([h(t), ((0, l.default)('stays_actions'), u().default.get('/global_supply/host_header').then((({
            should_show_header: t
        }) => !!t)).catch((() => !1))), ((0, l.default)('experience_actions'), u().default.get('/global_supply/experience_host_cta').then((({
            should_show_cta: t
        }) => !!t)).catch((() => !1))), ((0, l.default)('trip_actions'), Promise.resolve(!1))]).then((([{
            hasAlerts: t,
            unreadMessageCount: n
        }, s, o, u]) => ({
            hasAlerts: t,
            hasExperiencesActions: o,
            hasStaysActions: s,
            hasTripActions: u,
            unreadMessageCount: n
        })))
    }
    const p = 'simple-header-notifications',
        y = 2592e6
}), "fa5e3e", ["ba7a76", "07aa1f", "068abc", "1d0c98", "69a7c4", "13babd", "cf230b", "fece21"]);
__r("a9f4b1").extend({
    "simple_nav.header.log_in": "Log in",
    "simple_nav.header.sign_up": "Sign up",
    "simple_nav.header.become_a_host": "Become a Host",
    "simple_nav.header.host_stays": "Host your home",
    "simple_nav.header.host_experiences": "Host an experience",
    "simple_nav.header.help": "Help Centre",
    "simple_nav.header.locale_settings": "Choose a language and currency",
    "simple_nav.header.switch_to_hosting": "Switch to hosting",
    "simple_nav.header.unread_count": "%{smart_count} unread||||%{smart_count} unread",
    "simple_nav.header.inbox": "Messages",
    "simple_nav.header.has_notifications": "Has notifications",
    "simple_nav.header.notifications": "Notifications",
    "simple_nav.header.trips": "Trips",
    "simple_nav.header.saved": "Wishlists",
    "simple_nav.header.manage_homes": "Manage listings",
    "simple_nav.header.manage_experiences": "Manage experiences",
    "simple_nav.header.company_dashboard": "Company dashboard",
    "host_referral_default_no_reward_content.host_account_menu_title": "Refer a host",
    "simple_nav.header.account": "Account",
    "simple_nav.header.log_out": "Log out",
    "shared.new": "new"
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/9215.517d7112a2.js.map