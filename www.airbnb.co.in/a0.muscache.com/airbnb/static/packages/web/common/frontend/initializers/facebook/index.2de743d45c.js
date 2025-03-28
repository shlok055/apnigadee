__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.autologinEnabled = function() {
        return !(0, n.default)('nofbautologin')
    };
    var n = t(r(d[1]))
}), "1ec62e", ["ba7a76", "1f339e"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        if (!(0, f.getFacebookBootstrapData)()) return;
        b()
    };
    var o = t(r(d[1])),
        n = t(r(d[2])),
        s = r(d[3]),
        c = r(d[4]),
        u = r(d[5]),
        f = r(d[6]),
        l = r(d[7]),
        p = t(r(d[8]));

    function b() {
        const t = p.default.getBootstrap('show_facebook_prompt_force'),
            f = !n.default.isLoggedIn() && (0, c.autologinEnabled)() && !(0, u.hasDismissedFacebookPrompt)();
        (t || f) && Object.assign((0, s.normalizeLoader)((() => r(d[10])(d[9]).then(o.default))), {
            prefetch: () => r(d[10]).prefetch(d[9])
        })().then((t => l.scheduler.postTask(t, {
            priority: 'background'
        })))
    }
}), "541692", ["ba7a76", "45f788", "06a99e", "09d809", "1ec62e", "6633c2", "f08ba7", "a2c93f", "c235f8", "33f027", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.RoutePaths = e.Pathnames = e.FORGOT_PASSWORD_UI_URL = e.FORGOT_PASSWORD_API_URL = void 0;
    const _ = e.Pathnames = {
            LOGIN: '/login',
            LOGOUT: '/logout',
            SIGNUP: '/signup_login',
            LOGIN_WITH_REDIRECT: '/login_with_redirect',
            SOCIAL_SIGNUP: '/social_signup',
            SET_PASSWORD_UI: '/users/set_password',
            SET_PASSWORD_API: '/users/set_password_api'
        },
        o = (e.FORGOT_PASSWORD_API_URL = '/forgot_password_api', e.FORGOT_PASSWORD_UI_URL = '/forgot_password');
    e.RoutePaths = {
        LOGIN: '/login/:glob*',
        LOGOUT: '/logout/:glob*',
        SIGNUP: '/signup_login/:glob*',
        LOGIN_WITH_REDIRECT: '/login_with_redirect/:glob*',
        SOCIAL_SIGNUP: '/social_signup/:glob*',
        PASSWORDLESS_LOGIN: '/users/passwordless_login/:glob*',
        FORGOT_PASSWORD: `${o}/:glob*`,
        SET_PASSWORD: `${_.SET_PASSWORD_UI}/:glob*`
    }
}), "6126d0", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var o = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MAX_FACEBOOK_PROMPT_SHOW = void 0, e.disableFacebookAutologin = function() {
        (0, t.default)('nofbautologin', !0)
    }, e.getFacebookPromptShowCount = void 0, e.hasDismissedFacebookPrompt = function() {
        if (window.location.pathname.startsWith('/rooms')) return !!(0, t.default)(O.LocalStorageKeys.FACEBOOK_PROMPT_DISMISSED_P3);
        return !!(0, t.default)(O.LocalStorageKeys.FACEBOOK_PROMPT_DISMISSED)
    }, e.setFacebookPromptShowCount = function() {
        const o = s() || 0;
        (0, t.default)(O.LocalStorageKeys.FACEBOOK_PROMPT_SHOW_COUNT, o + 1)
    }, e.setHideFacebookPrompt = function() {
        window.location.pathname.startsWith('/rooms') && (0, t.default)(O.LocalStorageKeys.FACEBOOK_PROMPT_DISMISSED_P3, !0, {
            expires: n
        });
        (0, t.default)(O.LocalStorageKeys.FACEBOOK_PROMPT_DISMISSED, !0, {
            expires: n
        })
    };
    var t = o(r(d[1])),
        O = r(d[2]);
    const n = 6048e5;
    e.MAX_FACEBOOK_PROMPT_SHOW = 2;
    const s = () => (0, t.default)(O.LocalStorageKeys.FACEBOOK_PROMPT_SHOW_COUNT);
    e.getFacebookPromptShowCount = s
}), "6633c2", ["ba7a76", "1f339e", "b616d2"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var _ = {
        StrengthIndicatorStatuses: !0,
        IsValidIndicatorStatuses: !0,
        TOSGroups: !0,
        Modals: !0,
        AuthMethods: !0,
        Boxes: !0,
        LoginMethods: !0,
        LoginMethodsForLogging: !0,
        SignupMethods: !0,
        SignupMethodsForLogging: !0,
        SignupPaneViews: !0,
        SignupPaneViewsForLogging: !0,
        SignupFormSteps: !0,
        MowebEmailViews: !0,
        FormNamesForIDs: !0,
        ModalTypes: !0,
        Panes: !0,
        Platforms: !0,
        AuthModalLifecycleStages: !0,
        AuthBoxLifecycleStages: !0,
        Providers: !0,
        ContextualLoginMethods: !0,
        SuggestedLoginMethods: !0,
        SuggestedLoginMethodLabels: !0,
        SuggestedLoginViews: !0,
        SocialAuthMethods: !0,
        SocialAuthSource: !0,
        LoginPaneViews: !0,
        CombineAuthPaneViews: !0,
        LocalStorageKeys: !0,
        BirthdateValidationStates: !0,
        PhoneSignupErrorStatuses: !0,
        SwitchModalSource: !0,
        AuthPagePaths: !0,
        DEFAULT_DELAY_SECONDS: !0
    };
    e.TOSGroups = e.SwitchModalSource = e.SuggestedLoginViews = e.SuggestedLoginMethods = e.SuggestedLoginMethodLabels = e.StrengthIndicatorStatuses = e.SocialAuthSource = e.SocialAuthMethods = e.SignupPaneViewsForLogging = e.SignupPaneViews = e.SignupMethodsForLogging = e.SignupMethods = e.SignupFormSteps = e.Providers = e.Platforms = e.PhoneSignupErrorStatuses = e.Panes = e.MowebEmailViews = e.Modals = e.ModalTypes = e.LoginPaneViews = e.LoginMethodsForLogging = e.LoginMethods = e.LocalStorageKeys = e.IsValidIndicatorStatuses = e.FormNamesForIDs = e.DEFAULT_DELAY_SECONDS = e.ContextualLoginMethods = e.CombineAuthPaneViews = e.Boxes = e.BirthdateValidationStates = e.AuthPagePaths = e.AuthModalLifecycleStages = e.AuthMethods = e.AuthBoxLifecycleStages = void 0;
    var o = r(d[0]);
    Object.keys(o).forEach((function(O) {
        "default" !== O && "__esModule" !== O && (Object.prototype.hasOwnProperty.call(_, O) || O in e && e[O] === o[O] || Object.defineProperty(e, O, {
            enumerable: !0,
            get: function() {
                return o[O]
            }
        }))
    }));
    e.StrengthIndicatorStatuses = (function(_) {
        return _.weak = "weak", _.good = "good", _.strong = "strong", _
    })({}), e.IsValidIndicatorStatuses = (function(_) {
        return _.invalid = "invalid", _.valid = "valid", _
    })({}), e.TOSGroups = (function(_) {
        return _.WITH_CHECKBOX = "with-checkbox", _.NO_CHECKBOX = "no-checkbox", _.WITH_LAST_STEP = "with-last-step", _
    })({}), e.Modals = (function(_) {
        return _.LOGIN_MODAL = "LOGIN_MODAL", _.SIGNUP_MODAL = "SIGNUP_MODAL", _.FORGOT_PASSWORD_MODAL = "FORGOT_PASSWORD_MODAL", _.SSO_MODAL = "SSO_MODAL", _.LOGOUT_MODAL = "LOGOUT_MODAL", _.NO_MODAL = "NO_MODAL", _
    })({}), e.AuthMethods = (function(_) {
        return _.PHONE = "phone", _.OTP_PHONE = "otp_phone", _.EMAIL = "email", _.PHONE_OR_EMAIL = "phone_or_email", _
    })({});
    e.Boxes = {
        LOGIN_BOX: 'LOGIN_BOX',
        SIGNUP_BOX: 'SIGNUP_BOX',
        COMBINE_AUTH_BOX: 'COMBINE_AUTH_BOX',
        COMBINE_OTP_PHONE_BOX: 'COMBINE_OTP_PHONE_BOX',
        FORGOT_PASSWORD_BOX: 'FORGOT_PASSWORD_BOX'
    };
    let O = e.LoginMethods = (function(_) {
        return _.EMAIL_LOGIN = "EMAIL_LOGIN", _.OTP_PHONE_LOGIN = "OTP_PHONE_LOGIN", _.PHONE_LOGIN = "PHONE_LOGIN", _.PHONE_OR_EMAIL_LOGIN = "PHONE_OR_EMAIL_LOGIN", _
    })({});
    var n = (function(_) {
        return _.EMAIL_LOGIN = "email_login", _.OTP_PHONE_LOGIN = "otp_phone_login", _.PHONE_LOGIN = "phone_login", _.PHONE_OR_EMAIL_LOGIN = "phone_or_email_login", _.OTP_PHONE_LOGIN_PHONE = "otp_phone_login_phone", _
    })(n || {});
    O.EMAIL_LOGIN, n.EMAIL_LOGIN, O.OTP_PHONE_LOGIN, n.OTP_PHONE_LOGIN, O.PHONE_LOGIN, n.PHONE_LOGIN, O.PHONE_OR_EMAIL_LOGIN, n.PHONE_OR_EMAIL_LOGIN;
    e.LoginMethodsForLogging = (function(_) {
        return _.EMAIL_LOGIN = "email", _.OTP_PHONE_LOGIN = "otp_phone", _.PHONE_LOGIN = "phone", _.PHONE_OR_EMAIL_LOGIN = "phone_or_email", _
    })({}), e.SignupMethods = (function(_) {
        return _.PHONE_SIGNUP = "PHONE_SIGNUP", _.EMAIL_SIGNUP = "EMAIL_SIGNUP", _.MOWEB_EMAIL_SIGNUP = "MOWEB_EMAIL_SIGNUP", _.SOCIAL_SIGNUP = "SOCIAL_SIGNUP", _
    })({}), e.SignupMethodsForLogging = (function(_) {
        return _.PHONE_SIGNUP = "phone", _.EMAIL_SIGNUP = "email", _
    })({});
    let t = e.SignupPaneViews = (function(_) {
        return _.ALL_SIGNUP_OPTIONS = "ALL_SIGNUP_OPTIONS", _.EMAIL_SIGNUP = "EMAIL_SIGNUP", _.MOWEB_EMAIL_SIGNUP = "MOWEB_EMAIL_SIGNUP", _.OTP_PHONE_MORE_OPTIONS = "OTP_PHONE_MORE_OPTIONS", _.OTP_PHONE_VERIFY_CODE = "OTP_PHONE_VERIFY_CODE", _.PHONE_SIGNUP = "PHONE_SIGNUP", _.UNIFIED_SIGNUP = "UNIFIED_SIGNUP", _
    })({});
    e.SignupPaneViewsForLogging = {
        [t.PHONE_SIGNUP]: 'phone',
        [t.EMAIL_SIGNUP]: 'email',
        [t.MOWEB_EMAIL_SIGNUP]: 'moweb_email',
        [t.ALL_SIGNUP_OPTIONS]: 'all_options',
        [t.UNIFIED_SIGNUP]: 'unified',
        [t.OTP_PHONE_MORE_OPTIONS]: 'phone_otp_more_options',
        [t.OTP_PHONE_VERIFY_CODE]: 'phone_otp_verify_code'
    };
    e.SignupFormSteps = (function(_) {
        return _.ACCOUNT_INFO = "ACCOUNT_INFO", _.PROFILE_INFO = "PROFILE_INFO", _.UPDATE_PASSWORD = "UPDATE_PASSWORD", _
    })({}), e.MowebEmailViews = (function(_) {
        return _.EMAIL_AND_PASSWORD = "EMAIL_AND_PASSWORD", _.NAMES_AND_BIRTHDATE = "NAMES_AND_BIRTHDATE", _.TOS = "TOS", _.TOS_DECLINED = "TOS_DECLINED", _
    })({});
    const E = e.FormNamesForIDs = {
        ACCOUNT_LOOKUP: 'account-lookup',
        EMAIL_LOGIN: 'email-login',
        FORGOT_PASSWORD: 'forgot-password',
        OTP_PHONE_LOGIN: 'otp-phone-login',
        PHONE_LOGIN: 'phone-login',
        PHONE_OR_EMAIL_LOGIN: 'phone-or-email-login'
    };
    O.EMAIL_LOGIN, O.OTP_PHONE_LOGIN, O.PHONE_LOGIN, O.PHONE_OR_EMAIL_LOGIN;
    e.ModalTypes = (function(_) {
        return _.MODAL_TYPE_SIGNUP = "signup", _.MODAL_TYPE_LOGIN = "login", _
    })({}), e.Panes = (function(_) {
        return _.LOGIN = "login", _.SIGNUP = "signup", _
    })({}), e.Platforms = (function(_) {
        return _.WEB = "web", _.MOWEB = "moweb", _
    })({}), e.AuthModalLifecycleStages = (function(_) {
        return _.INITIAL = "INITIAL", _.MODAL_OPENED = "MODAL_OPENED", _.FLOW_FINISHED = "FLOW_FINISHED", _
    })({}), e.AuthBoxLifecycleStages = (function(_) {
        return _.INITIAL = "INITIAL", _.AUTH_FINISHED = "AUTH_FINISHED", _.FLOW_FINISHED = "FLOW_FINISHED", _
    })({}), e.Providers = (function(_) {
        return _.FACEBOOK = "Facebook", _.GOOGLE = "Google", _.WECHAT = "WeChat", _.ALIPAY = "Alipay", _.WEIBO = "Weibo", _.APPLE = "Apple", _.NAVER = "Naver", _
    })({}), e.ContextualLoginMethods = (function(_) {
        return _.facebook = "facebook", _.google = "google", _.email = "email", _.onelogin = "onelogin", _.phone = "phone", _.weibo = "weibo", _.alipay = "alipay", _.wechat = "wechat", _
    })({});
    let I = e.SuggestedLoginMethods = (function(_) {
        return _.email = "email", _.facebook = "facebook", _.google = "google", _.apple = "apple", _.naver = "naver", _.otp_phone = "otp_phone", _.onelogin = "onelogin", _.undecided = "undecided", _.wechat = "wechat", _
    })({});
    e.SuggestedLoginMethodLabels = {
        [I.email]: 'Email',
        [I.facebook]: 'Facebook',
        [I.google]: 'Google',
        [I.apple]: 'Apple',
        [I.naver]: 'Naver',
        [I.otp_phone]: 'Phone',
        [I.onelogin]: 'OneLogin',
        [I.undecided]: 'Undecided',
        [I.wechat]: 'WeChat'
    };
    e.SuggestedLoginViews = (function(_) {
        return _.single = "single", _.multiple = "multiple", _
    })({}), e.SocialAuthMethods = (function(_) {
        return _.ALIPAY = "alipay", _.FACEBOOK = "facebook", _.FACEBOOK_PROMPT = "facebook_prompt", _.GOOGLE = "google", _.ONELOGIN = "onelogin", _.WECHAT = "wechat", _.WEIBO = "weibo", _.APPLE = "apple", _.HUAWEI = "huawei", _.NAVER = "naver", _
    })({}), e.SocialAuthSource = (function(_) {
        return _.LOGIN_PROMPT = "login_prompt", _.SUGGESTED_LOGIN = "suggested_login", _.FACEBOOK_PROMPT = "facebook_prompt", _.LOGIN = "login", _.SIGNUP = "signup", _
    })({}), e.LoginPaneViews = (function(_) {
        return _.DEFAULT = "default", _.SUGGESTED_LOGIN = "suggested_login", _.EMAIL_UNIFIED = "email_unified", _.EMAIL_UNIFIED_PASSWORD = "email_unified_password", _.EMAIL_UNIFIED_SIGNUP = "email_unified_signup", _.OTP_PHONE_VERIFY_CODE = "otp_phone_verify_code", _.OTP_PHONE_MORE_OPTIONS = "otp_phone_more_options", _.OTP_EMAIL_VERIFICATION = "otp_email_verification", _.OTP_LOG_IN_ANOTHER_WAY = "otp_log_in_another_way", _
    })({});
    let N = e.CombineAuthPaneViews = (function(_) {
        return _.ALL_LOGIN_OPTIONS = "ALL_LOGIN_OPTIONS", _.OTP_PHONE_LOGIN = "OTP_PHONE_LOGIN", _.OTP_PHONE_VERIFY_CODE = "OTP_PHONE_VERIFY_CODE", _.OTP_PHONE_MORE_OPTIONS = "OTP_PHONE_MORE_OPTIONS", _.PHONE_OR_EMAIL_LOGIN = "PHONE_OR_EMAIL_LOGIN", _.OTP_PHONE_SIGNUP = "OTP_PHONE_SIGNUP", _.EMAIL_SIGNUP = "EMAIL_SIGNUP", _
    })({});
    N.ALL_LOGIN_OPTIONS, O.OTP_PHONE_LOGIN, N.OTP_PHONE_LOGIN, O.OTP_PHONE_LOGIN, N.OTP_PHONE_VERIFY_CODE, O.OTP_PHONE_LOGIN, N.PHONE_OR_EMAIL_LOGIN, O.PHONE_OR_EMAIL_LOGIN, e.LocalStorageKeys = {
        LOGOUT_ANYWAY_COUNT_V3: 'logout_anyway_count_v3',
        LOGIN_PROMPT_DISMISSED: 'login_prompt_dismissed',
        FACEBOOK_PROMPT_DISMISSED: 'facebook_prompt_dismissed',
        FACEBOOK_PROMPT_DISMISSED_P3: 'facebook_prompt_dismissed_p3',
        FACEBOOK_PROMPT_SHOW_COUNT: 'facebook_prompt_show_count'
    };
    e.BirthdateValidationStates = (function(_) {
        return _.INVALID = "INVALID", _.UNDER_THIRTEEN = "UNDER_THIRTEEN", _.UNDER_EIGHTEEN = "UNDER_EIGHTEEN", _.OVER_EIGHTEEN = "OVER_EIGHTEEN", _
    })({});
    e.PhoneSignupErrorStatuses = {
        PHONE_ALREADY_USED_BY_PHONE_ACCOUNT: 'phone_already_used_by_phone_account',
        PHONE_ALREADY_USED_BY_EMAIL_ACCOUNT: 'phone_already_used_by_email_account',
        PHONE_ALREADY_USED_BY_SOCIAL_ACCOUNT: 'phone_already_used_by_social_account',
        PHONE_ALREADY_USED_BY_EMAIL_OR_SOCIAL_ACCOUNT: 'phone_already_used_by_email_or_social_account'
    };
    e.SwitchModalSource = (function(_) {
        return _.ERROR_MESSAGE = "error_message", _.SWITCH_CTA = "switch_cta", _
    })({});
    e.AuthPagePaths = {
        ACCOUNT_LINKING: '/account_linking',
        AUTHENTICATE: '/authenticate'
    }, e.DEFAULT_DELAY_SECONDS = 60
}), "b616d2", ["6126d0"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getFacebookBootstrapData = function() {
        const t = o.default.get('facebook-init');
        return !!t ? .enabled && t
    };
    var o = t(r(d[1]))
}), "f08ba7", ["ba7a76", "ef2bc3"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/initializers/facebook/index.b932e0bce6.js.map