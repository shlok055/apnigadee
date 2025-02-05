__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.UserOperation = void 0;
    e.UserOperation = (function(S) {
        return S[S.IMPRESSION = 0] = "IMPRESSION", S[S.DISMISS = 1] = "DISMISS", S[S.CLICK = 2] = "CLICK", S[S.SHOW = 3] = "SHOW", S[S.NONE = 4] = "NONE", S
    })({})
}), "007fa2", []);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.VideoPlayerEvent = {
        defaultProps: {
            schema: 'com.airbnb.jitney.event.logging.Video:VideoPlayerEvent:2.0.0',
            event_name: 'video_player'
        },
        propTypes: {}
    };
    t.fullyQualifiedName = 'Video.v2.VideoPlayerEvent';
    e.VideoPlayerEventEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "049ab6", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        hlsConfig: t,
        preferHlsJs: l = !1,
        preferCustomTextTrackDisplay: p = !1,
        sources: v,
        video: y
    }) {
        const h = (0, u.isIos)() || (0, u.isAndroid)(),
            C = v.findIndex((({
                src: t,
                type: s
            }) => f(t) || s && c.includes(s))),
            D = v[C],
            E = (0, n.useMemo)((() => D ? v.slice(0, C + 1) : v), [v, D, C]),
            [T, _] = (0, n.useState)(E),
            [A, M] = (0, n.useState)();
        return (0, n.useEffect)((() => {
            if (!y) return;
            const n = E.some((({
                type: t
            }) => t && y.canPlayType(t)));
            if (!D || !l && n) return void _(E);
            let u;
            return r(d[5])(d[4]).then(s.default).then((({
                default: s
            }) => {
                s.isSupported() ? (u = new s({ ...(0, o.getDefaultHlsConfig)(h),
                    ...t
                }), u.attachMedia(y), u.on(s.Events.MEDIA_ATTACHED, (() => {
                    u ? .loadSource(D.src), M(u)
                }))) : _(v)
            })), () => {
                M(void 0), u ? .destroy()
            }
        }), [v, t, D, l, E, y]), (0, n.useEffect)((() => {
            A && (A.subtitleDisplay = !p)
        }), [A, p]), {
            sources: T,
            hlsController: A
        }
    };
    var s = t(r(d[1])),
        n = r(d[2]),
        u = r(d[3]),
        o = r(d[4]);
    const l = ['m3u8'],
        c = ['application/vnd.apple.mpegurl'];

    function f(t) {
        const s = t.split('.').pop() ? .split('?')[0];
        return !!s && l.includes(s)
    }
}), "0ca146", ["ba7a76", "45f788", "07aa1f", "e9b7bf", "b9d7e5", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PrivateVideoHooksContext = void 0;
    var t = r(d[0]);
    const o = {
        activeTextTrackCues: null,
        cancelPauseRequest: () => {},
        controls: !1,
        getVideoEventData: () => {},
        hasAudioDescriptionsSource: !1,
        hlsController: void 0,
        logEvent: () => {},
        playerContainerElem: null,
        preferCustomTextTrackDisplay: !1,
        sendPauseRequest: () => {},
        setActiveTextTrackCues: () => {},
        setFullscreenMode: () => {},
        videoElem: null,
        hasPauseRequests: !0
    };
    e.PrivateVideoHooksContext = (0, t.createContext)(o)
}), "1cb72d", ["07aa1f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getUserID = function() {
        const n = (0, t.getCookieSync)('_user_attributes').value;
        if (!n) return null;
        try {
            const t = JSON.parse(decodeURIComponent(n));
            return t.id ? Number(t.id) : null
        } catch (t) {}
        return null
    };
    var t = r(d[0])
}), "30b077", ["13babd"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PauseTrigger = void 0;
    e.PauseTrigger = (function(u) {
        return u.USER = "USER", u.VISIBILITY = "VISIBILITY", u.PROGRESS_BAR = "PROGRESS_BAR", u
    })({})
}), "32042b", []);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.PlacementType = {
        ExperiencePDPMosaic: 1,
        ExperiencePDPTier1: 2,
        ExperiencePDPTier2Carousel: 3,
        ExperiencePDPTier3Carousel: 4,
        ExperiencePDPDetailCarousel: 5,
        ExperienceP2InventoryCard: 6,
        ExperienceP2Header: 7,
        ExperienceWhaleModal: 8,
        PlacesNeighborhood: 9,
        ExploreHomepageHeader: 10,
        ExploreKeynotePlayer: 11,
        Unknown: 12,
        InsertsSectionPlugin: 13,
        LegacyExploreInsertSectionPlugin: 14,
        ExploreListHeaderSection: 15,
        SuperhostGuideMatchProfile: 16,
        HostReleaseLaunchHero: 17,
        GuestReleaseLaunchHero: 18
    }
}), "3ef138", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    e.default = [{
        title: 'Az\u0259rbaycan dili',
        subtitle: 'Az\u0259rbaycan',
        locale: 'az-AZ',
        urlLocale: 'az',
        urlCountry: 'AZ'
    }, {
        title: 'Bahasa Indonesia',
        subtitle: 'Indonesia',
        locale: 'id-ID',
        urlLocale: 'id',
        urlCountry: 'ID'
    }, {
        title: 'Bosanski',
        subtitle: 'Bosna i Hercegovina',
        locale: 'bs-BA',
        urlLocale: 'bs',
        urlCountry: 'BA'
    }, {
        title: 'Catal\xe0',
        subtitle: 'Espanya',
        locale: 'ca-ES',
        urlLocale: 'ca',
        urlCountry: 'ES'
    }, {
        title: '\u010ce\u0161tina',
        subtitle: '\u010cesk\xe1 republika',
        locale: 'cs-CZ',
        urlLocale: 'cs',
        urlCountry: 'CZ'
    }, {
        title: 'Crnogorski',
        subtitle: 'Crna Gora',
        locale: 'sr-ME',
        urlLocale: 'sr-ME',
        urlCountry: 'ME'
    }, {
        title: 'Dansk',
        subtitle: 'Danmark',
        locale: 'da-DK',
        urlLocale: 'da',
        urlCountry: 'DK'
    }, {
        title: 'Deutsch',
        subtitle: 'Deutschland',
        locale: 'de-DE',
        urlLocale: 'de',
        urlCountry: 'DE'
    }, {
        title: 'Deutsch',
        subtitle: '\xd6sterreich',
        locale: 'de-AT',
        urlLocale: 'de-AT',
        urlCountry: 'AT'
    }, {
        title: 'Deutsch',
        subtitle: 'Schweiz',
        locale: 'de-CH',
        urlLocale: 'de-CH',
        urlCountry: 'CH'
    }, {
        title: 'Deutsch',
        subtitle: 'Luxemburg',
        locale: 'de-LU',
        urlLocale: 'de',
        urlCountry: 'LU'
    }, {
        title: 'Eesti',
        subtitle: 'Eesti',
        locale: 'et-EE',
        urlLocale: 'et',
        urlCountry: 'EE'
    }, {
        title: 'English',
        subtitle: 'Australia',
        locale: 'en-AU',
        urlLocale: 'en-AU',
        urlCountry: 'AU'
    }, {
        title: 'English',
        subtitle: 'Canada',
        locale: 'en-CA',
        urlLocale: 'en-CA',
        urlCountry: 'CA'
    }, {
        title: 'English',
        subtitle: 'Guyana',
        locale: 'en-GY',
        urlLocale: 'en',
        urlCountry: 'GY'
    }, {
        title: 'English',
        subtitle: 'India',
        locale: 'en-IN',
        urlLocale: 'en-IN',
        urlCountry: 'IN'
    }, {
        title: 'English',
        subtitle: 'Ireland',
        locale: 'en-IE',
        urlLocale: 'en-IE',
        urlCountry: 'IE'
    }, {
        title: 'English',
        subtitle: 'New Zealand',
        locale: 'en-NZ',
        urlLocale: 'en-NZ',
        urlCountry: 'NZ'
    }, {
        title: 'English',
        subtitle: 'Singapore',
        locale: 'en-SG',
        urlLocale: 'en-SG',
        urlCountry: 'SG'
    }, {
        title: 'English',
        subtitle: 'United Arab Emirates',
        locale: 'en-AE',
        urlLocale: 'en',
        urlCountry: 'AE'
    }, {
        title: 'English',
        subtitle: 'United Kingdom',
        locale: 'en-GB',
        urlLocale: 'en-GB',
        urlCountry: 'GB'
    }, {
        title: 'English',
        subtitle: 'United States',
        locale: 'en-US',
        urlLocale: 'en',
        urlCountry: 'US'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Argentina',
        locale: 'es-AR',
        urlLocale: 'es-AR',
        urlCountry: 'AR'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Belice',
        locale: 'es-BZ',
        urlLocale: 'es-XL',
        urlCountry: 'BZ'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Bolivia',
        locale: 'es-BO',
        urlLocale: 'es-XL',
        urlCountry: 'BO'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Chile',
        locale: 'es-CL',
        urlLocale: 'es-XL',
        urlCountry: 'CL'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Colombia',
        locale: 'es-CO',
        urlLocale: 'es-XL',
        urlCountry: 'CO'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Costa Rica',
        locale: 'es-CR',
        urlLocale: 'es-XL',
        urlCountry: 'CR'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Ecuador',
        locale: 'es-EC',
        urlLocale: 'es-XL',
        urlCountry: 'EC'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'El Salvador',
        locale: 'es-SV',
        urlLocale: 'es-419',
        urlCountry: 'SV'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Espa\xf1a',
        locale: 'es-ES',
        urlLocale: 'es',
        urlCountry: 'ES'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Estados Unidos',
        locale: 'es-US',
        urlLocale: 'es-419',
        urlCountry: 'US'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Guatemala',
        locale: 'es-GT',
        urlLocale: 'es-419',
        urlCountry: 'GT'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Honduras',
        locale: 'es-HN',
        urlLocale: 'es-419',
        urlCountry: 'HN'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Latinoam\xe9rica',
        locale: 'es-419',
        urlLocale: 'es-XL',
        urlCountry: 'CO'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'M\xe9xico',
        locale: 'es-MX',
        urlLocale: 'es-419',
        urlCountry: 'MX'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Nicaragua',
        locale: 'es-NI',
        urlLocale: 'es-419',
        urlCountry: 'NI'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Panam\xe1',
        locale: 'es-PA',
        urlLocale: 'es-419',
        urlCountry: 'PA'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Paraguay',
        locale: 'es-PY',
        urlLocale: 'es-AR',
        urlCountry: 'PY'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Per\xfa',
        locale: 'es-PE',
        urlLocale: 'es-XL',
        urlCountry: 'PE'
    }, {
        title: 'Espa\xf1ol',
        subtitle: 'Venezuela',
        locale: 'es-VE',
        urlLocale: 'es-XL',
        urlCountry: 'VE'
    }, {
        title: 'Fran\xe7ais',
        subtitle: 'Belgique',
        locale: 'fr-BE',
        urlLocale: 'fr-BE',
        urlCountry: 'BE'
    }, {
        title: 'Fran\xe7ais',
        subtitle: 'Canada',
        locale: 'fr-CA',
        urlLocale: 'fr-CA',
        urlCountry: 'CA'
    }, {
        title: 'Fran\xe7ais',
        subtitle: 'France',
        locale: 'fr-FR',
        urlLocale: 'fr',
        urlCountry: 'FR'
    }, {
        title: 'Fran\xe7ais',
        subtitle: 'Suisse',
        locale: 'fr-CH',
        urlLocale: 'fr-CH',
        urlCountry: 'CH'
    }, {
        title: 'Fran\xe7ais',
        subtitle: 'Luxembourg',
        locale: 'fr-LU',
        urlLocale: 'fr',
        urlCountry: 'LU'
    }, {
        title: 'Gaeilge',
        subtitle: '\xc9ire',
        locale: 'ga-IE',
        urlLocale: 'ga',
        urlCountry: 'IE'
    }, {
        title: 'Hrvatski',
        subtitle: 'Hrvatska',
        locale: 'hr-HR',
        urlLocale: 'hr',
        urlCountry: 'US'
    }, {
        title: 'isiXhosa',
        subtitle: 'eMzantsi Afrika',
        locale: 'xh-ZA',
        urlLocale: 'xh',
        urlCountry: 'ZA'
    }, {
        title: 'isiZulu',
        subtitle: 'iNingizimu Afrika',
        locale: 'zu-ZA',
        urlLocale: 'zu',
        urlCountry: 'ZA'
    }, {
        title: '\xcdslenska',
        subtitle: '\xcdsland',
        locale: 'is-IS',
        urlLocale: 'is',
        urlCountry: 'IS'
    }, {
        title: 'Italiano',
        subtitle: 'Italia',
        locale: 'it-IT',
        urlLocale: 'it',
        urlCountry: 'IT'
    }, {
        title: 'Italiano',
        subtitle: 'Svizzera',
        locale: 'it-CH',
        urlLocale: 'it-CH',
        urlCountry: 'CH'
    }, {
        title: 'Kiswahili',
        subtitle: '\u0100frika',
        locale: 'sw-XX',
        urlLocale: 'sw',
        urlCountry: 'US'
    }, {
        title: 'Latvie\u0161u',
        subtitle: 'Latvija',
        locale: 'lv-LV',
        urlLocale: 'lv',
        urlCountry: 'LV'
    }, {
        title: 'Lietuvi\u0173',
        subtitle: 'Lietuva',
        locale: 'lt-LT',
        urlLocale: 'lt',
        urlCountry: 'LT'
    }, {
        title: 'Magyar',
        subtitle: 'Magyarorsz\xe1g',
        locale: 'hu-HU',
        urlLocale: 'hu',
        urlCountry: 'HU'
    }, {
        title: 'Malti',
        subtitle: 'Malta',
        locale: 'mt-MT',
        urlLocale: 'mt',
        urlCountry: 'MT'
    }, {
        title: 'Melayu',
        subtitle: 'Malaysia',
        locale: 'ms-MY',
        urlLocale: 'ms',
        urlCountry: 'MY'
    }, {
        title: 'Vlaams',
        subtitle: 'Belgi\xeb',
        locale: 'nl-BE',
        urlLocale: 'nl-BE',
        urlCountry: 'BE'
    }, {
        title: 'Nederlands',
        subtitle: 'Nederland',
        locale: 'nl-NL',
        urlLocale: 'nl',
        urlCountry: 'NL'
    }, {
        title: 'Norsk',
        subtitle: 'Norge',
        locale: 'no-NO',
        urlLocale: 'no',
        urlCountry: 'NO'
    }, {
        title: 'Polski',
        subtitle: 'Polska',
        locale: 'pl-PL',
        urlLocale: 'pl',
        urlCountry: 'PL'
    }, {
        title: 'Portugu\xeas',
        subtitle: 'Brasil',
        locale: 'pt-BR',
        urlLocale: 'pt',
        urlCountry: 'BR'
    }, {
        title: 'Portugu\xeas',
        subtitle: 'Portugal',
        locale: 'pt-PT',
        urlLocale: 'pt-PT',
        urlCountry: 'PT'
    }, {
        title: 'Rom\xe2n\u0103',
        subtitle: 'Rom\xe2nia',
        locale: 'ro-RO',
        urlLocale: 'ro',
        urlCountry: 'RO'
    }, {
        title: 'Shqip',
        subtitle: 'Shqip\xebri',
        locale: 'sq-AL',
        urlLocale: 'sq',
        urlCountry: 'AL'
    }, {
        title: 'Sloven\u010dina',
        subtitle: 'Slovensko',
        locale: 'sk-SK',
        urlLocale: 'sk',
        urlCountry: 'SK'
    }, {
        title: 'Sloven\u0161\u010dina',
        subtitle: 'Slovenija',
        locale: 'sl-SI',
        urlLocale: 'sl',
        urlCountry: 'SI'
    }, {
        title: 'Srpski',
        subtitle: 'Srbija',
        locale: 'sr-RS',
        urlLocale: 'sr',
        urlCountry: 'RS'
    }, {
        title: 'Suomi',
        subtitle: 'Suomi',
        locale: 'fi-FI',
        urlLocale: 'fi',
        urlCountry: 'FI'
    }, {
        title: 'Svenska',
        subtitle: 'Sverige',
        locale: 'sv-SE',
        urlLocale: 'sv',
        urlCountry: 'SE'
    }, {
        title: 'Tagalog',
        subtitle: 'Pilipinas',
        locale: 'tl-PH',
        urlLocale: 'tl',
        urlCountry: 'PH'
    }, {
        title: 'Ti\u1ebfng Vi\u1ec7t',
        subtitle: 'Vi\u1ec7t Nam',
        locale: 'vi-VN',
        urlLocale: 'vi',
        urlCountry: 'VN'
    }, {
        title: 'T\xfcrk\xe7e',
        subtitle: 'T\xfcrkiye',
        locale: 'tr-TR',
        urlLocale: 'tr',
        urlCountry: 'TR'
    }, {
        title: '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac',
        subtitle: '\u0395\u03bb\u03bb\u03ac\u03b4\u03b1',
        locale: 'el-GR',
        urlLocale: 'el',
        urlCountry: 'GR'
    }, {
        title: '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438',
        subtitle: '\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f',
        locale: 'bg-BG',
        urlLocale: 'bg',
        urlCountry: 'BG'
    }, {
        title: '\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438',
        subtitle: '\u0421\u0435\u0432\u0435\u0440\u043d\u0430 \u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430',
        locale: 'mk-MK',
        urlLocale: 'mk',
        urlCountry: 'MK'
    }, {
        title: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439',
        subtitle: '\u0420\u043e\u0441\u0441\u0438\u044f',
        locale: 'ru-RU',
        urlLocale: 'ru',
        urlCountry: 'RU'
    }, {
        title: '\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430',
        subtitle: '\u0423\u043a\u0440\u0430\u0457\u043d\u0430',
        locale: 'uk-UA',
        urlLocale: 'uk',
        urlCountry: 'UA'
    }, {
        title: '\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8',
        subtitle: '\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd',
        locale: 'ka-GE',
        urlLocale: 'ka',
        urlCountry: 'GE'
    }, {
        title: '\u0540\u0561\u0575\u0565\u0580\u0565\u0576',
        subtitle: '\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576',
        locale: 'hy-AM',
        urlLocale: 'hy',
        urlCountry: 'AM'
    }, {
        title: '\u05e2\u05d1\u05e8\u05d9\u05ea',
        subtitle: '\u05d9\u05e9\u05e8\u05d0\u05dc',
        locale: 'he-IL',
        urlLocale: 'he',
        urlCountry: 'IL'
    }, {
        title: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
        subtitle: '\u0627\u0644\u0639\u0627\u0644\u0645',
        locale: 'ar-XX',
        urlLocale: 'ar',
        urlCountry: 'US'
    }, {
        title: '\u0939\u093f\u0928\u094d\u0926\u0940',
        subtitle: '\u092d\u093e\u0930\u0924',
        locale: 'hi-IN',
        urlLocale: 'hi',
        urlCountry: 'IN'
    }, {
        title: '\u0c95\u0ca8\u0ccd\u0ca8\u0ca1',
        subtitle: '\u0cad\u0cbe\u0cb0\u0ca4',
        locale: 'kn-IN',
        urlLocale: 'kn',
        urlCountry: 'IN'
    }, {
        title: '\u092e\u0930\u093e\u0920\u0940',
        subtitle: '\u092d\u093e\u0930\u0924',
        locale: 'mr-IN',
        urlLocale: 'mr',
        urlCountry: 'IN'
    }, {
        title: '\u0e44\u0e17\u0e22',
        subtitle: '\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22',
        locale: 'th-TH',
        urlLocale: 'th',
        urlCountry: 'TH'
    }, {
        title: '\ud55c\uad6d\uc5b4',
        subtitle: '\ub300\ud55c\ubbfc\uad6d',
        locale: 'ko-KR',
        urlLocale: 'ko',
        urlCountry: 'KR'
    }, {
        title: '\u65e5\u672c\u8a9e',
        subtitle: '\u65e5\u672c',
        locale: 'ja-JP',
        urlLocale: 'ja',
        urlCountry: 'JP'
    }, {
        title: '\u7b80\u4f53\u4e2d\u6587',
        subtitle: '\u7f8e\u56fd',
        locale: 'zh-US',
        urlLocale: 'zh',
        urlCountry: 'US'
    }, {
        title: '\u7e41\u9ad4\u4e2d\u6587',
        subtitle: '\u7f8e\u570b',
        locale: 'zh-TW-US',
        urlLocale: 'zh-TW',
        urlCountry: 'US'
    }, {
        title: '\u7b80\u4f53\u4e2d\u6587',
        subtitle: '\u4e2d\u56fd',
        locale: 'zh-CN',
        urlLocale: 'zh-CN',
        urlCountry: 'CN'
    }, {
        title: '\u7e41\u9ad4\u4e2d\u6587',
        subtitle: '\u9999\u6e2f',
        cnSubtitle: '\u4e2d\u570b\u9999\u6e2f',
        locale: 'zh-HK',
        urlLocale: 'zh-HK',
        urlCountry: 'HK'
    }, {
        title: '\u7e41\u9ad4\u4e2d\u6587',
        subtitle: '\u53f0\u7063',
        cnSubtitle: '\u4e2d\u570b\u53f0\u7063',
        locale: 'zh-TW',
        urlLocale: 'zh-TW',
        urlCountry: 'TW'
    }]
}), "49d0f8", []);
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CC_LABEL_IDENTIFIER_WITH_PARENS = e.CC_LABEL_IDENTIFIER = void 0, e.useTextTracks = function() {
        const {
            preferCustomTextTrackDisplay: c,
            setActiveTextTrackCues: T,
            videoElem: u
        } = (0, t.useContext)(s.PrivateVideoHooksContext), [C, k] = (0, t.useState)((() => o(u))), E = (0, t.useMemo)((() => C.filter((t => (0, n.trackHasClosedCaptions)(t)))), [C]), l = (0, t.useMemo)((() => C.filter((t => !(0, n.trackHasClosedCaptions)(t)))), [C]), v = (0, t.useCallback)((() => {
            const t = o(u);
            k(t)
        }), [u]);
        return (0, t.useEffect)((() => {
            if (u) return 'function' == typeof u.textTracks.addEventListener && (u.textTracks.addEventListener('addtrack', v), u.textTracks.addEventListener('removetrack', v)), v(), () => {
                'function' == typeof u.textTracks.removeEventListener && (u.textTracks.removeEventListener('addtrack', v), u.textTracks.removeEventListener('removetrack', v))
            }
        }), [u]), {
            textTracks: C,
            showingTextTrack: C.find((t => c ? 'hidden' === t.mode : 'showing' === t.mode)),
            setShowingTextTrack(t) {
                T(null), C.forEach((s => {
                    s === t ? (s.mode = c ? 'hidden' : 'showing', s.oncuechange = t => {
                        let n = '';
                        const o = s.activeCues ? .length || 0;
                        for (let t = 0; t < o; t += 1) {
                            const o = s.activeCues ? .[t];
                            n = n.concat(o ? .text ? ? '')
                        }
                        T(n)
                    }) : (s.mode = 'disabled', s.oncuechange = null)
                }))
            },
            subtitleTextTracks: l,
            closedCaptionTextTracks: E
        }
    };
    var t = r(d[0]),
        s = r(d[1]),
        n = r(d[2]);
    e.CC_LABEL_IDENTIFIER = 'CC', e.CC_LABEL_IDENTIFIER_WITH_PARENS = '(CC)';

    function o(t) {
        return t ? Array.from(t.textTracks) : []
    }
}), "6b8e4b", ["07aa1f", "1cb72d", "8f3cbe"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(u) {
        const o = new URL(u),
            l = o.pathname;
        if (c.test(l)) {
            const c = l.slice(0, l.lastIndexOf('.')),
                h = l.slice(-4),
                f = c.split('/');
            if (s.includes(f[f.length - 1])) return u;
            const p = new URLSearchParams(o.search).get(t);
            return f.push(`${p||n.LOW}${h}`), o.pathname = f.join('/'), o.toString()
        }
        return u
    };
    const t = 'v_q',
        n = {
            LOW: 'low',
            MEDIUM: 'medium',
            HIGH: 'high'
        },
        s = ['low', 'medium', 'high'],
        c = /\.mp4$/
}), "738dc8", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return 'true' === t
    }
}), "7efa56", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PlayerType = void 0, e.emitVideoChange = function({
        videoElem: n,
        data: o
    }) {
        if (P()) return r(d[9])(d[8]).then(t.default).then((() => {
            n ? .mux ? .emit('videochange', { ...v,
                ...o,
                custom_1: o.src,
                custom_2: (0, l.getPageName)(location.pathname),
                video_source_url: (0, f.default)(o.src),
                video_title: null
            })
        }))
    }, e.initMUXtime = function() {
        if (P()) return performance.now();
        return 0
    }, e.initMonitor = function({
        videoElem: n,
        data: o,
        hlsjs: c,
        Hls: s,
        playerType: p
    }) {
        if (P() && (h(p) || b())) return (0, u.default)({
            toolName: 'Mux',
            doesCookieHaveConsentCb: u => u ? r(d[9])(d[8]).then(t.default).then((({
                default: t
            }) => {
                t.monitor(n, {
                    debug: !1,
                    data: {
                        env_key: _,
                        ...v,
                        ...o,
                        video_id: o.video_id || o.src,
                        custom_1: o.src,
                        custom_2: (0, l.getPageName)(location.pathname),
                        video_source_url: (0, f.default)(o.src),
                        page_type: p === y.fullscreen ? V.DLSFullscreenVideoPlayer : V.DLSInlineVideoPlayer
                    },
                    hlsjs: c,
                    Hls: c ? s : void 0
                })
            })) : Promise.reject()
        })
    };
    var t = n(r(d[1])),
        l = r(d[2]),
        o = n(r(d[3])),
        u = n(r(d[4])),
        c = n(r(d[5])),
        s = r(d[6]),
        f = n(r(d[7]));
    const _ = 'ept7bbandcr6bgfudulqlgpo1',
        v = {
            player_name: null,
            video_id: null,
            player_autoplay_on: null,
            video_language_code: null,
            viewer_user_id: null,
            video_title: null
        };
    let y = e.PlayerType = (function(n) {
        return n.fullscreen = "fullscreen", n.inline = "inline", n
    })({});
    const p = 10;

    function b() {
        const {
            host: n
        } = g.location;
        return n.includes('next.airbnb.com') || n.includes('staging.airbnb.com') || n.includes('airbnb.tools')
    }

    function h(n) {
        switch (n) {
            case y.fullscreen:
                return !0;
            case y.inline:
                return 0 === Math.floor(Math.random() * p);
            default:
                return !0
        }
    }

    function P() {
        return c.default.getBootstrap('web.video-performance-metrics') || s.nezhaWebInterface.Nezha ? .isHybrid || 'treatment' === o.default.findTreatment('web_mux_video_metrics')
    }
    var V = (function(n) {
        return n.DLSInlineVideoPlayer = "DLSInlineVideoPlayer", n.DLSFullscreenVideoPlayer = "DLSFullscreenVideoPlayer", n
    })(V || {})
}), "7ff0c7", ["ba7a76", "45f788", "861735", "dcc72a", "e8f252", "c235f8", "1d2983", "738dc8", "b5aa2b", "057569"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.findTrackWithMatchingLanguage = function(t, n) {
        return n.find((n => n.language === t))
    }, e.getTracksSortedByUserLangMatch = function(t) {
        const u = n.default.locale(),
            s = n.default.language(),
            o = new Map,
            f = t => {
                let n = o.get(t);
                return n || (n = (0, l.getTextTrackDisplayName)(t, !0) ? ? t.label, o.set(t, n)), n
            },
            c = [...t];
        c.sort(((t, n) => {
            const o = (0, l.normalizeVideoVenderLocale)(t.language),
                c = (0, l.normalizeVideoVenderLocale)(n.language);
            if ('en' === u) {
                if ('en-US' === o) return -1;
                if ('en-US' === c) return 1
            }
            if (o === u) return -1;
            if (c === u) return 1;
            if (!o.startsWith(s) || !c.startsWith(s)) {
                if (o.startsWith(s)) return -1;
                if (c.startsWith(s)) return 1
            }
            const _ = f(t),
                h = f(n);
            return _.localeCompare(h, s)
        }));
        return c.filter(((t, n, l) => n === l.findIndex((n => f(t) === f(n)))))
    }, e.trackHasClosedCaptions = function(t) {
        if ('captions' === t.kind) return !0;
        return void 0 !== t.label && (t.label.endsWith(u.CC_LABEL_IDENTIFIER) || t.label.endsWith(u.CC_LABEL_IDENTIFIER_WITH_PARENS))
    };
    var n = t(r(d[1])),
        l = r(d[2]),
        u = r(d[3])
}), "8f3cbe", ["ba7a76", "862e50", "f25634", "6b8e4b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.currentlyFullscreen = c, e.toggleFullScreen = s, e.useFullscreen = function() {
        const {
            videoElem: l,
            playerContainerElem: o,
            setFullscreenMode: F
        } = (0, n.useContext)(u.PrivateVideoHooksContext), [f, b] = (0, n.useState)(0), k = (0, n.useCallback)((() => {
            b(f + 1)
        }), [f]);
        return (0, t.default)('fullscreenchange', k), (0, t.default)('webkitfullscreenchange', k), {
            isFullScreen: c(),
            toggleFullScreen: () => {
                l && o && F(s(l, o, document))
            }
        }
    };
    var n = r(d[1]),
        t = l(r(d[2])),
        u = r(d[3]);

    function c() {
        return !!(document.fullscreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitIsFullScreen)
    }

    function s(l, n, t) {
        const u = c(),
            s = n.requestFullscreen || n.msRequestFullscreen || n.webkitRequestFullscreen;
        if (u) {
            const l = t.exitFullscreen || t.msExitFullscreen || t.webkitExitFullscreen;
            if (l) return l.call(t), !1
        }
        return s ? (s.call(n), !0) : l && l.webkitEnterFullscreen ? (l.webkitEnterFullscreen(), !0) : u
    }
}), "92e634", ["ba7a76", "07aa1f", "5aa0ce", "1cb72d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        let l = n.default;
        u.default.isTrebuchetLaunched((0, c.default)('language_selector.show_mrkn')) || (l = n.default.filter((({
            urlLocale: l
        }) => !['mr', 'kn'].includes(l))));
        u.default.isTrebuchetLaunched((0, c.default)('language_selector.zh_cn_url_locale.killswitch')) && (l = n.default.map((l => 'zh-CN' === l.urlLocale ? { ...l,
            urlLocale: 'zh'
        } : l)));
        if ('CN' === t.default.country()) return l.map((({
            cnSubtitle: l,
            subtitle: t,
            ...u
        }) => ({ ...u,
            subtitle: l || t
        })));
        return l
    };
    var t = l(r(d[1])),
        u = l(r(d[2])),
        c = l(r(d[3])),
        n = l(r(d[4]))
}), "a51e3b", ["ba7a76", "862e50", "dcc72a", "2c6bf9", "49d0f8"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.getDefaultHlsConfig = function(t = !1) {
        return {
            abrEwmaDefaultEstimate: u,
            enableWebVTT: !0,
            minAutoBitrate: t ? 697078 : 994068,
            testBandwidth: !1,
            manifestLoadingMaxRetry: 3
        }
    };
    var n = t(r(d[1]));
    const u = 4755240;
    e.default = n.default
}), "b9d7e5", ["ba7a76", "c419c8"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.UserOperation = {
        None: 1,
        Impression: 2,
        Click: 3
    }
}), "bc54d4", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.BaseVideo = void 0, e.UnstyledVideoWithProvider = B, e.baseVideoCssFragments = e.VideoPlacements = void 0;
    var s = n(r(d[0])),
        o = t(r(d[2])),
        l = n(r(d[3]));

    function u() {
        const t = r(d[4]);
        return u = function() {
            return t
        }, t
    }

    function E() {
        const t = r(d[5]);
        return E = function() {
            return t
        }, t
    }

    function _() {
        const t = r(d[6]);
        return _ = function() {
            return t
        }, t
    }

    function c() {
        const t = r(d[7]);
        return c = function() {
            return t
        }, t
    }

    function p() {
        const t = r(d[8]);
        return p = function() {
            return t
        }, t
    }

    function P() {
        const t = r(d[9]);
        return P = function() {
            return t
        }, t
    }
    var R = r(d[10]),
        S = n(r(d[11])),
        O = n(r(d[12])),
        v = n(r(d[13])),
        f = n(r(d[14])),
        I = n(r(d[15])),
        C = n(r(d[16])),
        y = r(d[17]),
        N = r(d[18]),
        T = r(d[19]),
        D = r(d[20]),
        A = r(d[21]),
        L = n(r(d[22])),
        b = n(r(d[23])),
        U = r(d[24]),
        H = r(d[25]),
        h = r(d[26]),
        M = n(r(d[27])),
        X = r(d[28]),
        k = r(d[29]),
        V = r(d[30]),
        w = r(d[31]),
        x = r(d[32]);
    y.variableName;
    let q = e.VideoPlacements = (function(t) {
        return t.EXPLORE_HOMEPAGE_HEADER = "EXPLORE_HOMEPAGE_HEADER", t.EXPLORE_KEYNOTE_PLAYER = "EXPLORE_KEYNOTE_PLAYER", t.EXPERIENCE_P2_HEADER = "EXPERIENCE_P2_HEADER", t.EXPERIENCE_P2_INVENTORY_CARD = "EXPERIENCE_P2_INVENTORY_CARD", t.EXPERIENCE_PDP_MOSAIC = "EXPERIENCE_PDP_MOSAIC", t.EXPERIENCE_PDP_TIER_1 = "EXPERIENCE_PDP_TIER_1", t.EXPERIENCE_PDP_TIER_2_CAROUSEL = "EXPERIENCE_PDP_TIER_2_CAROUSEL", t.EXPERIENCE_PDP_TIER_3_CAROUSEL = "EXPERIENCE_PDP_TIER_3_CAROUSEL", t.EXPERIENCE_PDP_DETAIL_CAROUSEL = "EXPERIENCE_PDP_DETAIL_CAROUSEL", t.EXPERIENCE_WHALE_MODAL = "EXPERIENCE_WHALE_MODAL", t.EXPLORE_LIST_HEADER_SECTION = "EXPLORE_LIST_HEADER_SECTION", t.INSERTS_SECTION_PLUGIN = "INSERTS_SECTION_PLUGIN", t.PLACES_NEIGHBORHOOD = "PLACES_NEIGHBORHOOD", t.SUPERHOST_GUIDE_MATCH_PROFILE = "SUPERHOST_GUIDE_MATCH_PROFILE", t.HOST_RELEASE_LAUNCH_HERO = "HOST_RELEASE_LAUNCH_HERO", t.GUEST_RELEASE_LAUNCH_HERO = "GUEST_RELEASE_LAUNCH_HERO", t.UNKNOWN = "UNKNOWN", t
    })({});
    const j = [],
        G = {
            [k.UserOperation.IMPRESSION]: c().UserOperation.Impression,
            [k.UserOperation.CLICK]: c().UserOperation.Click,
            [k.UserOperation.NONE]: c().UserOperation.None,
            [k.UserOperation.DISMISS]: c().UserOperation.None,
            [k.UserOperation.SHOW]: c().UserOperation.None
        };

    function F({
        currentTime: t,
        loopEnabled: n,
        placementType: s,
        src: o,
        userOperation: l,
        videoElement: u,
        videoId: E,
        videoResponse: _
    }) {
        s && u && E && I.default.logJitneyEvent({
            schema: p().VideoPlayerEvent,
            ...l === k.UserOperation.DISMISS ? {
                log_immediately: !0,
                queue: !1,
                use_send_beacon: !0
            } : {},
            event_data: {
                user_operation: G[l],
                video_response: _,
                placement_type: s,
                video_content_url: o,
                video_id: E,
                player_autoplay_enabled: u.autoplay,
                player_loop_enabled: n,
                player_muted: u.muted,
                player_stream_offset: 1e3 * (u.currentTime || t),
                audio_descriptions_enabled: (0, C.default)(u.dataset[H.VideoDataAttributes.AudioDescriptionsEnabled] ? ? ''),
                closed_captions_enabled: (0, C.default)(u.dataset[H.VideoDataAttributes.ClosedCaptionsEnabled] ? ? ''),
                subtitles_enabled: (0, C.default)(u.dataset[H.VideoDataAttributes.SubtitlesEnabled] ? ? ''),
                preferred_language: u.dataset[H.VideoDataAttributes.PreferredLanguage]
            }
        })
    }
    const W = {
            [k.UserOperation.IMPRESSION]: 1,
            [k.UserOperation.DISMISS]: 9,
            [k.UserOperation.CLICK]: 2,
            [k.UserOperation.SHOW]: 3
        },
        z = {
            [q.EXPERIENCE_PDP_MOSAIC]: 1,
            [q.EXPERIENCE_PDP_TIER_1]: 2,
            [q.EXPERIENCE_PDP_TIER_2_CAROUSEL]: 3,
            [q.EXPERIENCE_PDP_TIER_3_CAROUSEL]: 4,
            [q.EXPERIENCE_PDP_DETAIL_CAROUSEL]: 5,
            [q.EXPERIENCE_P2_INVENTORY_CARD]: 6,
            [q.EXPERIENCE_P2_HEADER]: 7,
            [q.EXPERIENCE_WHALE_MODAL]: 8,
            [q.PLACES_NEIGHBORHOOD]: 9,
            [q.EXPLORE_HOMEPAGE_HEADER]: 10,
            [q.EXPLORE_KEYNOTE_PLAYER]: 11,
            [q.UNKNOWN]: 12,
            [q.INSERTS_SECTION_PLUGIN]: 13,
            [q.EXPLORE_LIST_HEADER_SECTION]: 15,
            [q.SUPERHOST_GUIDE_MATCH_PROFILE]: 16,
            [q.HOST_RELEASE_LAUNCH_HERO]: 17,
            [q.GUEST_RELEASE_LAUNCH_HERO]: 18
        };

    function K({
        eventData: t,
        loggingID: n,
        userOperation: s,
        videoElement: o,
        videoId: l
    }) {
        if (!o || !l) return;
        const _ = {
            uuid: (0, u().v4)(),
            logging_id: n,
            component: 'DlsVideo',
            ancestor_logging_ids: 'dls.videoPlayer' === n ? [] : ['dls.videoPlayer'],
            ancestor_uuids: [],
            event_data_schema: "VideoPlayer.v1.VideoPlayerEventData",
            event_data: t ? JSON.stringify(t) : void 0
        };
        s !== k.UserOperation.IMPRESSION ? I.default.logJitneyEvent({
            schema: E().UniversalComponentActionEvent,
            ...s === k.UserOperation.DISMISS ? {
                log_immediately: !0,
                queue: !1,
                use_send_beacon: !0
            } : {},
            event_data: { ..._,
                method: '',
                operation: W[s]
            }
        }) : I.default.logJitneyEvent({
            schema: P().UniversalComponentImpressionEvent,
            event_data: { ..._
            }
        })
    }

    function Y({
        'aria-label': t,
        autoPlay: n = !1,
        audioDescribedVideoUrl: u,
        borderRadius: E,
        children: c,
        controls: p = !1,
        css: P,
        linariaClassNames: I,
        hlsConfig: y,
        loop: D = !1,
        muted: q = !1,
        objectFit: G = "cover",
        objectPosition: W,
        onEnded: Y,
        onLoadStart: B,
        onLoadedData: J,
        onPause: Q,
        onPlaying: Z,
        onTimeUpdate: $,
        placementType: ee,
        placementName: te,
        playsInline: ae = !0,
        preferHlsJs: re = !1,
        preload: ne = "metadata",
        preservePauseStateForNewVideoSources: se = !1,
        shouldLog: oe = !0,
        preferCustomTextTrackDisplay: ie = !1,
        sources: le,
        styles: ue,
        tabIndex: Ee,
        tracks: de = j,
        videoElemRef: _e = () => {},
        videoId: ce,
        customEventData: pe,
        onLoadedMetadata: Pe,
        isInline: Re = !1,
        externallyTriggeredLogLikeAutoplay: Se = !1
    }) {
        const [Oe, me] = (0, o.useState)((0, h.currentlyFullscreen)()), [ve, fe] = (0, o.useState)(!0), [Ie, Ce] = (0, o.useState)(!1), [ye, Ne] = (0, o.useState)(0), [Te, De] = (0, o.useState)(null), [Ae, Le] = (0, o.useState)(n || Se ? new Set : new Set([X.PauseTrigger.USER])), [be, Ue] = (0, o.useState)(null), ge = (0, o.useRef)(null), He = (0, o.useRef)(0), he = (0, o.useRef)(0), Me = (0, o.useRef)(null), Xe = (0, o.useRef)({
            lastStartRequestTime: null,
            duration: null
        }), ke = (0, o.useContext)(w.CaptionPreferencesContext), Ve = ke ? .state.audioDescriptionsEnabled ? ? !1, we = null != u, xe = (0, o.useCallback)((t => {
            t !== Te && (De(t), _e(t), he.current = (0, U.initMUXtime)())
        }), [Te]), qe = (0, o.useMemo)((() => u ? [{
            src: u,
            type: 'application/vnd.apple.mpegurl'
        }] : null), [u]), je = (0, o.useMemo)((() => qe && Ve ? qe : le), [le, Ve, qe]), Ge = L.default.isTrebuchetLaunched((0, b.default)('media_foundation.web.hls_cap_level_to_player_size')), Fe = (0, o.useMemo)((() => Ge ? {
            capLevelToPlayerSize: Ge,
            ...y
        } : y), [Ge, y]), {
            sources: We,
            hlsController: ze
        } = (0, M.default)({
            hlsConfig: Fe,
            preferHlsJs: re,
            preferCustomTextTrackDisplay: ie,
            sources: je,
            video: Te
        }), Ke = (0, o.useCallback)((() => {
            if (!Te || !ce) return;
            const t = Te ? .duration || Me.current;
            return { ...pe,
                video_url: We[0] ? .src,
                video_id: ce,
                placement_type: ee ? z[ee] : z.UNKNOWN,
                time_elapsed: 1e3 * (Te ? .currentTime || He.current),
                total_video_duration: t ? 1e3 * t : void 0,
                autoplay: Te ? .autoplay,
                muted: Te ? .muted,
                looped: D,
                loop_count: D ? ye : void 0,
                video_startup_time: Xe.current.duration || void 0,
                audio_descriptions: (0, C.default)(Te ? .dataset[H.VideoDataAttributes.AudioDescriptionsEnabled] ? ? ''),
                closed_captions: (0, C.default)(Te ? .dataset[H.VideoDataAttributes.ClosedCaptionsEnabled] ? ? ''),
                subtitles: (0, C.default)(Te ? .dataset[H.VideoDataAttributes.SubtitlesEnabled] ? ? ''),
                preferred_language: Te ? .dataset[H.VideoDataAttributes.PreferredLanguage] ? ? ''
            }
        }), [D, ye, ee, We, He, ce, Te, pe]), Ye = (0, o.useCallback)(((t, n, s = "") => {
            oe && (F({
                currentTime: He.current,
                loopEnabled: D,
                placementType: ee,
                src: We[0] ? .src,
                userOperation: t,
                videoElement: Te,
                videoId: ce,
                videoResponse: n
            }), s && t !== k.UserOperation.NONE && K({
                eventData: Ke(),
                loggingID: s,
                userOperation: t,
                videoElement: Te,
                videoId: ce
            }))
        }), [Ke, D, ee, oe, We, Te, ce]), Be = (0, o.useCallback)((t => {
            t.preventDefault()
        }), []), Je = (0, o.useCallback)((t => {
            null !== Xe.current.lastStartRequestTime && null === Xe.current.duration && (Xe.current.duration = performance.now() - Xe.current.lastStartRequestTime), ve && oe && Te && (n || Se) && 0 === Ae.size && Ye(k.UserOperation.SHOW, 2, 'dls.videoPlayer.play'), fe(!1), Z ? .(t)
        }), [n, Se, ve, Ye, Z, Ae, oe, Te, Xe]), Qe = (0, o.useCallback)((t => {
            D ? Ye(k.UserOperation.NONE, 13) : Ye(k.UserOperation.SHOW, 13, 'dls.videoPlayer.end'), D && !Ae.size && (Te && (Te.currentTime = 0, Te.play()), Ne(ye + 1)), Y ? .(t)
        }), [Ye, D, ye, Y, Ae.size, Te]), Ze = (0, o.useCallback)((t => {
            He.current = t.currentTarget ? .currentTime, Me.current = t.currentTarget ? .duration, $ ? .(t)
        }), []), $e = (0, o.useCallback)((() => {
            (0, l.default)() || Re || Ye(k.UserOperation.DISMISS, 14, 'dls.videoPlayer.dismiss')
        }), [Ye, Re]), et = (0, o.useCallback)((() => {
            (0, l.default)() && 'hidden' === document.visibilityState && !Re && Ye(k.UserOperation.DISMISS, 14, 'dls.videoPlayer.dismiss')
        }), [Ye, Re]);
        (0, f.default)('beforeunload', $e), (0, O.default)('visibilitychange', et), (0, o.useEffect)((() => {
            oe && Te && !Ie && (Ye(k.UserOperation.IMPRESSION, 1, 'dls.videoPlayer'), Ce(!0))
        }), [Ie, Ye, oe, Te]), (0, o.useEffect)((() => {
            'auto' === ne && Te && 0 === Te.readyState && Te.load()
        }), [ne, Te, xe]);
        (0, o.useLayoutEffect)((() => {
            Te && (0 === Ae.size ? Te.play() : Te.pause())
        }), [Ae]), (0, o.useEffect)((() => {
            Ne(0)
        }), [We]), (0, o.useEffect)((() => () => {
            Re || Ye(k.UserOperation.DISMISS, 14, 'dls.videoPlayer.dismiss')
        }), []);
        const tt = n || q,
            at = (0, o.useRef)(We),
            rt = (0, A.useEvent)(((t, n, s, o, l, u) => {
                if (!(0, S.default)(at.current, t) && n) {
                    const E = o();
                    if (!E) return;
                    const _ = (0, R.getUserID)(),
                        {
                            placement_type: c
                        } = E;
                    (0, U.emitVideoChange)({
                        videoElem: n,
                        data: {
                            video_id: s,
                            video_title: null,
                            player_name: c,
                            player_autoplay_on: l,
                            src: t[0] ? .src,
                            video_language_code: u[0] ? .srcLang,
                            viewer_user_id: _
                        }
                    })
                }
            }));
        (0, o.useEffect)((() => {
            rt(We, Te, ce, Ke, n, de)
        }), [We, Te, ce, Ke, n, de, rt]), (0, o.useEffect)((() => {
            if (!(0, S.default)(at.current, We) && Te) {
                const {
                    paused: t
                } = Te;
                Te.load(), se && (t ? Te.pause() : Te.play()), at.current = We
            }
        }), [We, Te, se]), (0, o.useEffect)((() => {
            p && Ue(null), ze && ie && (ze.subtitleDisplay = p)
        }), [p, ze, ie]);
        const nt = (0, A.useEvent)(((t, n, o, l, u, E, c) => {
            function p(s) {
                const p = (0, R.getUserID)();
                if (p && t) {
                    const P = o();
                    if (!P) return;
                    const {
                        placement_type: R,
                        video_id: S
                    } = P, O = {
                        player_name: te || _().PlacementType[R],
                        player_init_time: c,
                        video_id: S,
                        player_autoplay_on: l,
                        src: u[0] ? .src,
                        video_language_code: E[0] ? .srcLang,
                        viewer_user_id: p,
                        video_title: null
                    };
                    (0, U.initMonitor)({
                        data: O,
                        videoElem: t,
                        hlsjs: n,
                        Hls: s,
                        playerType: Re ? U.PlayerType.inline : U.PlayerType.fullscreen
                    })
                }
            }
            n ? r(d[34])(d[33]).then(s.default).then((({
                default: t
            }) => p(t))) : p()
        }));
        (0, o.useEffect)((() => nt(Te, ze, Ke, n, We, de, he.current)), [Te, ze, Ke, n, We, de, he.current]);
        const st = (0, v.default)(n);
        (0, o.useEffect)((() => {
            !1 === st && n && Le(new Set)
        }), [n, st]);
        const ot = (0, o.useCallback)((t => {
                0 === Ae.size && t !== X.PauseTrigger.PROGRESS_BAR && Ye(t === X.PauseTrigger.USER ? k.UserOperation.CLICK : k.UserOperation.NONE, 3), Le(new Set([...Array.from(Ae), t]))
            }), [Ye, Ae]),
            it = (0, o.useCallback)((t => {
                const n = t === X.PauseTrigger.USER ? new Set : new Set(Array.from(Ae).filter((n => n !== t)));
                0 === n.size && t !== X.PauseTrigger.PROGRESS_BAR && Ye(t === X.PauseTrigger.USER ? k.UserOperation.CLICK : k.UserOperation.NONE, 2), Le(n)
            }), [Ye, Ae]),
            lt = (0, A.useEvent)((t => {
                n && null === Xe.current.lastStartRequestTime && (Xe.current.lastStartRequestTime = performance.now()), B && B(t)
            })),
            ut = (0, A.useEvent)((() => {
                null === Xe.current.lastStartRequestTime && (Xe.current.lastStartRequestTime = performance.now())
            })),
            Et = (0, A.useEvent)((t => {
                null !== Xe.current.lastStartRequestTime && null === Xe.current.duration && (Xe.current.lastStartRequestTime = null), Q && Q(t)
            })),
            dt = Ae.size > 0,
            _t = (0, o.useMemo)((() => ({
                activeTextTrackCues: be,
                cancelPauseRequest: it,
                controls: p,
                getVideoEventData: Ke,
                hasAudioDescriptionsSource: we,
                hlsController: ze,
                logEvent: Ye,
                playerContainerElem: ge.current,
                preferCustomTextTrackDisplay: ie,
                sendPauseRequest: ot,
                setActiveTextTrackCues: Ue,
                setFullscreenMode: me,
                videoElem: Te,
                hasPauseRequests: dt
            })), [be, it, p, Ke, we, ze, Ye, ie, ot, Ue, Te, dt]),
            ct = (0, T.useCx)();
        return (0, x.jsxs)("div", {
            className: ct(I ? .container),
            ...(0, N.maybeRwsCss)(P, ue ? .container),
            ref: ge,
            children: [(0, x.jsxs)("video", {
                "data-testid": "video-player",
                className: ct(I ? .video),
                style: Oe ? {} : {
                    objectFit: G,
                    objectPosition: W,
                    borderRadius: E
                },
                ...(0, N.maybeRwsCss)(P, ue ? .video, Oe || {
                    objectFit: G,
                    objectPosition: W,
                    borderRadius: E
                }),
                autoPlay: n,
                "aria-label": t,
                controls: p,
                crossOrigin: "anonymous",
                muted: tt,
                onContextMenu: Be,
                onEnded: Qe,
                onLoadStart: lt,
                onLoadedData: J,
                onPlay: ut,
                onPause: Et,
                onPlaying: Je,
                onTimeUpdate: Ze,
                onLoadedMetadata: Pe,
                playsInline: ae,
                preload: ne,
                ref: xe,
                tabIndex: Ee,
                children: [We.map((t => (0, o.createElement)("source", { ...t,
                    key: t.src
                }))), de.map((t => (0, o.createElement)("track", { ...t,
                    key: t.src
                })))]
            }), (0, x.jsx)(V.PrivateVideoHooksContext.Provider, {
                value: _t,
                children: c
            })]
        })
    }

    function B(t) {
        return (0, x.jsx)(w.CaptionPreferencesProvider, {
            children: (0, x.jsx)(Y, { ...t
            })
        })
    }
    const J = e.baseVideoCssFragments = {
        container: "\n    border-radius: var(--dls-base-video-border-radius, 0);\n    height: 100%;\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n    will-change: transform; /* Fixes issue on Safari where child layers render incorrectly */\n  ",
        video: "\n    display: block;\n    height: 100%;\n    width: 100%;\n\n    &::-webkit-media-text-track-display {\n      top: 77.5%;\n    }\n  "
    };
    (0, N.cssFragmentsObjToStylesFn)(J), e.BaseVideo = (0, D.createVariant)(B, {
        container: "cwj9ebi atm_5j_19diish atm_e2_1osqo2v atm_ks_15vqwwr atm_mk_h2mmj6 atm_vy_1osqo2v atm_vz_1e032xh",
        video: "v186kq3t atm_9s_1ulexfb atm_e2_1osqo2v atm_vy_1osqo2v atm_tk_h3zj6i_1jtuioo"
    })
}), "bfc5c5", ["45f788", "ba7a76", "07aa1f", "48213b", "305dd5", "59c871", "3ef138", "bc54d4", "049ab6", "60aeb4", "30b077", "3dcd9d", "5aa0ce", "67c39a", "567629", "c8b97a", "7efa56", "027757", "2d8af3", "4786a8", "92749c", "f4e9c4", "dcc72a", "2c6bf9", "7ff0c7", "d8151c", "92e634", "0ca146", "32042b", "007fa2", "1cb72d", "ebb310", "b8c07d", "b9d7e5", "057569"]);
__d((function(t, e, s, i, r, n, a) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = n.TimelineController = n.SubtitleTrackController = n.SubtitleStreamController = n.PlaylistLevelType = n.Part = n.NetworkErrorAction = n.MetadataSchema = n.LoadStats = n.LevelKey = n.LevelDetails = n.Level = n.KeySystems = n.KeySystemFormats = n.HlsUrlParameters = n.HlsSkip = n.Hls = n.Fragment = n.FPSController = n.Events = n.ErrorTypes = n.ErrorDetails = n.ErrorController = n.ErrorActionFlags = n.EMEController = n.DateRange = n.ContentSteeringController = n.ChunkMetadata = n.CapLevelController = n.CMCDController = n.BufferController = n.BaseStreamController = n.BaseSegment = n.BasePlaylistController = n.AudioTrackController = n.AudioStreamController = n.AttrList = n.AbrController = void 0, n.getMediaSource = ce, n.isMSESupported = jo, n.isSupported = qo;
    var o = {
        exports: {}
    };
    !(function(t) {
        var e, s, i, r, n;
        e = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, s = /^(?=([^\/?#]*))\1([^]*)$/, i = /(?:\/|^)\.(?=\/)/g, r = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, n = {
            buildAbsoluteURL: function(t, e, i) {
                if (i = i || {}, t = t.trim(), !(e = e.trim())) {
                    if (!i.alwaysNormalize) return t;
                    var r = n.parseURL(t);
                    if (!r) throw new Error('Error trying to parse base URL.');
                    return r.path = n.normalizePath(r.path), n.buildURLFromParts(r)
                }
                var a = n.parseURL(e);
                if (!a) throw new Error('Error trying to parse relative URL.');
                if (a.scheme) return i.alwaysNormalize ? (a.path = n.normalizePath(a.path), n.buildURLFromParts(a)) : e;
                var o = n.parseURL(t);
                if (!o) throw new Error('Error trying to parse base URL.');
                if (!o.netLoc && o.path && '/' !== o.path[0]) {
                    var l = s.exec(o.path);
                    o.netLoc = l[1], o.path = l[2]
                }
                o.netLoc && !o.path && (o.path = '/');
                var h = {
                    scheme: o.scheme,
                    netLoc: a.netLoc,
                    path: null,
                    params: a.params,
                    query: a.query,
                    fragment: a.fragment
                };
                if (!a.netLoc && (h.netLoc = o.netLoc, '/' !== a.path[0]))
                    if (a.path) {
                        var d = o.path,
                            c = d.substring(0, d.lastIndexOf('/') + 1) + a.path;
                        h.path = n.normalizePath(c)
                    } else h.path = o.path, a.params || (h.params = o.params, a.query || (h.query = o.query));
                return null === h.path && (h.path = i.alwaysNormalize ? n.normalizePath(a.path) : a.path), n.buildURLFromParts(h)
            },
            parseURL: function(t) {
                var s = e.exec(t);
                return s ? {
                    scheme: s[1] || '',
                    netLoc: s[2] || '',
                    path: s[3] || '',
                    params: s[4] || '',
                    query: s[5] || '',
                    fragment: s[6] || ''
                } : null
            },
            normalizePath: function(t) {
                for (t = t.split('').reverse().join('').replace(i, ''); t.length !== (t = t.replace(r, '')).length;);
                return t.split('').reverse().join('')
            },
            buildURLFromParts: function(t) {
                return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
            }
        }, t.exports = n
    })(o);
    var l = o.exports;

    function h(t, e) {
        var s = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), s.push.apply(s, i)
        }
        return s
    }

    function d(t) {
        for (var e = 1; e < arguments.length; e++) {
            var s = null != arguments[e] ? arguments[e] : {};
            e % 2 ? h(Object(s), !0).forEach((function(e) {
                u(t, e, s[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : h(Object(s)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e))
            }))
        }
        return t
    }

    function c(t, e) {
        if ("object" != typeof t || !t) return t;
        var s = t[Symbol.toPrimitive];
        if (void 0 !== s) {
            var i = s.call(t, e || "default");
            if ("object" != typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }

    function u(t, e, s) {
        var i;
        return (e = "symbol" == typeof(i = c(e, "string")) ? i : String(i)) in t ? Object.defineProperty(t, e, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = s, t
    }

    function f() {
        return f = Object.assign ? Object.assign.bind() : function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var s = arguments[e];
                for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i])
            }
            return t
        }, f.apply(this, arguments)
    }
    const g = Number.isFinite || function(t) {
            return 'number' == typeof t && isFinite(t)
        },
        m = Number.isSafeInteger || function(t) {
            return 'number' == typeof t && Math.abs(t) <= p
        },
        p = Number.MAX_SAFE_INTEGER || 9007199254740991;
    let y = n.Events = (function(t) {
            return t.MEDIA_ATTACHING = "hlsMediaAttaching", t.MEDIA_ATTACHED = "hlsMediaAttached", t.MEDIA_DETACHING = "hlsMediaDetaching", t.MEDIA_DETACHED = "hlsMediaDetached", t.BUFFER_RESET = "hlsBufferReset", t.BUFFER_CODECS = "hlsBufferCodecs", t.BUFFER_CREATED = "hlsBufferCreated", t.BUFFER_APPENDING = "hlsBufferAppending", t.BUFFER_APPENDED = "hlsBufferAppended", t.BUFFER_EOS = "hlsBufferEos", t.BUFFER_FLUSHING = "hlsBufferFlushing", t.BUFFER_FLUSHED = "hlsBufferFlushed", t.MANIFEST_LOADING = "hlsManifestLoading", t.MANIFEST_LOADED = "hlsManifestLoaded", t.MANIFEST_PARSED = "hlsManifestParsed", t.LEVEL_SWITCHING = "hlsLevelSwitching", t.LEVEL_SWITCHED = "hlsLevelSwitched", t.LEVEL_LOADING = "hlsLevelLoading", t.LEVEL_LOADED = "hlsLevelLoaded", t.LEVEL_UPDATED = "hlsLevelUpdated", t.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", t.LEVELS_UPDATED = "hlsLevelsUpdated", t.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", t.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", t.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", t.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", t.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", t.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", t.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", t.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", t.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", t.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", t.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", t.CUES_PARSED = "hlsCuesParsed", t.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", t.INIT_PTS_FOUND = "hlsInitPtsFound", t.FRAG_LOADING = "hlsFragLoading", t.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", t.FRAG_LOADED = "hlsFragLoaded", t.FRAG_DECRYPTED = "hlsFragDecrypted", t.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", t.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", t.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", t.FRAG_PARSED = "hlsFragParsed", t.FRAG_BUFFERED = "hlsFragBuffered", t.FRAG_CHANGED = "hlsFragChanged", t.FPS_DROP = "hlsFpsDrop", t.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", t.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", t.ERROR = "hlsError", t.DESTROYING = "hlsDestroying", t.KEY_LOADING = "hlsKeyLoading", t.KEY_LOADED = "hlsKeyLoaded", t.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", t.BACK_BUFFER_REACHED = "hlsBackBufferReached", t.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", t
        })({}),
        v = n.ErrorTypes = (function(t) {
            return t.NETWORK_ERROR = "networkError", t.MEDIA_ERROR = "mediaError", t.KEY_SYSTEM_ERROR = "keySystemError", t.MUX_ERROR = "muxError", t.OTHER_ERROR = "otherError", t
        })({}),
        E = n.ErrorDetails = (function(t) {
            return t.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", t.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", t.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", t.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", t.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", t.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", t.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", t.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", t.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", t.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", t.MANIFEST_LOAD_ERROR = "manifestLoadError", t.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", t.MANIFEST_PARSING_ERROR = "manifestParsingError", t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", t.LEVEL_EMPTY_ERROR = "levelEmptyError", t.LEVEL_LOAD_ERROR = "levelLoadError", t.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", t.LEVEL_PARSING_ERROR = "levelParsingError", t.LEVEL_SWITCH_ERROR = "levelSwitchError", t.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", t.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", t.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", t.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", t.FRAG_LOAD_ERROR = "fragLoadError", t.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", t.FRAG_DECRYPT_ERROR = "fragDecryptError", t.FRAG_PARSING_ERROR = "fragParsingError", t.FRAG_GAP = "fragGap", t.REMUX_ALLOC_ERROR = "remuxAllocError", t.KEY_LOAD_ERROR = "keyLoadError", t.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", t.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", t.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", t.BUFFER_APPEND_ERROR = "bufferAppendError", t.BUFFER_APPENDING_ERROR = "bufferAppendingError", t.BUFFER_STALLED_ERROR = "bufferStalledError", t.BUFFER_FULL_ERROR = "bufferFullError", t.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", t.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", t.INTERNAL_EXCEPTION = "internalException", t.INTERNAL_ABORTED = "aborted", t.UNKNOWN = "unknown", t
        })({});
    const T = function() {},
        S = {
            trace: T,
            debug: T,
            log: T,
            warn: T,
            info: T,
            error: T
        };
    let L = S;

    function A(t) {
        const e = self.console[t];
        return e ? e.bind(self.console, `[${t}] >`) : T
    }

    function R(t, ...e) {
        e.forEach((function(e) {
            L[e] = t[e] ? t[e].bind(t) : A(e)
        }))
    }

    function b(t, e) {
        if ('object' == typeof console && !0 === t || 'object' == typeof t) {
            R(t, 'debug', 'log', 'info', 'warn', 'error');
            try {
                L.log(`Debug logs enabled for "${e}" in hls.js version 1.5.8`)
            } catch (t) {
                L = S
            }
        } else L = S
    }
    const D = L,
        k = /^(\d+)x(\d+)$/,
        I = /(.+?)=(".*?"|.*?)(?:,|$)/g;
    class C {
        constructor(t) {
            'string' == typeof t && (t = C.parseAttrList(t)), f(this, t)
        }
        get clientAttrs() {
            return Object.keys(this).filter((t => 'X-' === t.substring(0, 2)))
        }
        decimalInteger(t) {
            const e = parseInt(this[t], 10);
            return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
        }
        hexadecimalInteger(t) {
            if (this[t]) {
                let e = (this[t] || '0x').slice(2);
                e = (1 & e.length ? '0' : '') + e;
                const s = new Uint8Array(e.length / 2);
                for (let t = 0; t < e.length / 2; t++) s[t] = parseInt(e.slice(2 * t, 2 * t + 2), 16);
                return s
            }
            return null
        }
        hexadecimalIntegerAsNumber(t) {
            const e = parseInt(this[t], 16);
            return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
        }
        decimalFloatingPoint(t) {
            return parseFloat(this[t])
        }
        optionalFloat(t, e) {
            const s = this[t];
            return s ? parseFloat(s) : e
        }
        enumeratedString(t) {
            return this[t]
        }
        bool(t) {
            return 'YES' === this[t]
        }
        decimalResolution(t) {
            const e = k.exec(this[t]);
            if (null !== e) return {
                width: parseInt(e[1], 10),
                height: parseInt(e[2], 10)
            }
        }
        static parseAttrList(t) {
            let e;
            const s = {};
            for (I.lastIndex = 0; null !== (e = I.exec(t));) {
                let t = e[2];
                0 === t.indexOf("\"") && t.lastIndexOf("\"") === t.length - 1 && (t = t.slice(1, -1));
                s[e[1].trim()] = t
            }
            return s
        }
    }

    function w(t) {
        return "SCTE35-OUT" === t || "SCTE35-IN" === t
    }
    n.AttrList = C;
    class _ {
        constructor(t, e) {
            if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, e) {
                const s = e.attr;
                for (const e in s)
                    if (Object.prototype.hasOwnProperty.call(t, e) && t[e] !== s[e]) {
                        D.warn(`DATERANGE tag attribute: "${e}" does not match for tags with ID: "${t.ID}"`), this._badValueForSameId = e;
                        break
                    }
                t = f(new C({}), s, t)
            }
            if (this.attr = t, this._startDate = new Date(t["START-DATE"]), "END-DATE" in this.attr) {
                const t = new Date(this.attr["END-DATE"]);
                g(t.getTime()) && (this._endDate = t)
            }
        }
        get id() {
            return this.attr.ID
        }
        get class() {
            return this.attr.CLASS
        }
        get startDate() {
            return this._startDate
        }
        get endDate() {
            if (this._endDate) return this._endDate;
            const t = this.duration;
            return null !== t ? new Date(this._startDate.getTime() + 1e3 * t) : null
        }
        get duration() {
            if ("DURATION" in this.attr) {
                const t = this.attr.decimalFloatingPoint("DURATION");
                if (g(t)) return t
            } else if (this._endDate) return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
            return null
        }
        get plannedDuration() {
            return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null
        }
        get endOnNext() {
            return this.attr.bool("END-ON-NEXT")
        }
        get isValid() {
            return !!this.id && !this._badValueForSameId && g(this.startDate.getTime()) && (null === this.duration || this.duration >= 0) && (!this.endOnNext || !!this.class)
        }
    }
    n.DateRange = _;
    class x {
        constructor() {
            this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
                start: 0,
                first: 0,
                end: 0
            }, this.parsing = {
                start: 0,
                end: 0
            }, this.buffering = {
                start: 0,
                first: 0,
                end: 0
            }
        }
    }
    n.LoadStats = x;
    var P = "audio",
        M = "video",
        F = "audiovideo";
    class O {
        constructor(t) {
            this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = {
                [P]: null,
                [M]: null,
                [F]: null
            }, this.baseurl = t
        }
        setByteRange(t, e) {
            const s = t.split('@', 2);
            let i;
            i = 1 === s.length ? (null == e ? void 0 : e.byteRangeEndOffset) || 0 : parseInt(s[1]), this._byteRange = [i, parseInt(s[0]) + i]
        }
        get byteRange() {
            return this._byteRange ? this._byteRange : []
        }
        get byteRangeStartOffset() {
            return this.byteRange[0]
        }
        get byteRangeEndOffset() {
            return this.byteRange[1]
        }
        get url() {
            return !this._url && this.baseurl && this.relurl && (this._url = l.buildAbsoluteURL(this.baseurl, this.relurl, {
                alwaysNormalize: !0
            })), this._url || ''
        }
        set url(t) {
            this._url = t
        }
    }
    n.BaseSegment = O;
    class N extends O {
        constructor(t, e) {
            super(e), this._decryptdata = null, this.rawProgramDateTime = null, this.programDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.stats = new x, this.data = void 0, this.bitrateTest = !1, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.urlId = 0, this.type = t
        }
        get decryptdata() {
            const {
                levelkeys: t
            } = this;
            if (!t && !this._decryptdata) return null;
            if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
                const t = this.levelkeys.identity;
                if (t) this._decryptdata = t.getDecryptData(this.sn);
                else {
                    const t = Object.keys(this.levelkeys);
                    if (1 === t.length) return this._decryptdata = this.levelkeys[t[0]].getDecryptData(this.sn)
                }
            }
            return this._decryptdata
        }
        get end() {
            return this.start + this.duration
        }
        get endProgramDateTime() {
            if (null === this.programDateTime) return null;
            if (!g(this.programDateTime)) return null;
            const t = g(this.duration) ? this.duration : 0;
            return this.programDateTime + 1e3 * t
        }
        get encrypted() {
            var t;
            if (null != (t = this._decryptdata) && t.encrypted) return !0;
            if (this.levelkeys) {
                const t = Object.keys(this.levelkeys),
                    e = t.length;
                if (e > 1 || 1 === e && this.levelkeys[t[0]].encrypted) return !0
            }
            return !1
        }
        setKeyFormat(t) {
            if (this.levelkeys) {
                const e = this.levelkeys[t];
                e && !this._decryptdata && (this._decryptdata = e.getDecryptData(this.sn))
            }
        }
        abortRequests() {
            var t, e;
            null == (t = this.loader) || t.abort(), null == (e = this.keyLoader) || e.abort()
        }
        setElementaryStreamInfo(t, e, s, i, r, n = !1) {
            const {
                elementaryStreams: a
            } = this, o = a[t];
            o ? (o.startPTS = Math.min(o.startPTS, e), o.endPTS = Math.max(o.endPTS, s), o.startDTS = Math.min(o.startDTS, i), o.endDTS = Math.max(o.endDTS, r)) : a[t] = {
                startPTS: e,
                endPTS: s,
                startDTS: i,
                endDTS: r,
                partial: n
            }
        }
        clearElementaryStreamInfo() {
            const {
                elementaryStreams: t
            } = this;
            t[P] = null, t[M] = null, t[F] = null
        }
    }
    n.Fragment = N;
    class U extends O {
        constructor(t, e, s, i, r) {
            super(s), this.fragOffset = 0, this.duration = 0, this.gap = !1, this.independent = !1, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.stats = new x, this.duration = t.decimalFloatingPoint('DURATION'), this.gap = t.bool('GAP'), this.independent = t.bool('INDEPENDENT'), this.relurl = t.enumeratedString('URI'), this.fragment = e, this.index = i;
            const n = t.enumeratedString('BYTERANGE');
            n && this.setByteRange(n, r), r && (this.fragOffset = r.fragOffset + r.duration)
        }
        get start() {
            return this.fragment.start + this.fragOffset
        }
        get end() {
            return this.start + this.duration
        }
        get loaded() {
            const {
                elementaryStreams: t
            } = this;
            return !!(t.audio || t.video || t.audiovideo)
        }
    }
    n.Part = U;
    class B {
        constructor(t) {
            this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = '', this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = t
        }
        reloaded(t) {
            if (!t) return this.advanced = !0, void(this.updated = !0);
            const e = this.lastPartSn - t.lastPartSn,
                s = this.lastPartIndex - t.lastPartIndex;
            this.updated = this.endSN !== t.endSN || !!s || !!e || !this.live, this.advanced = this.endSN > t.endSN || e > 0 || 0 === e && s > 0, this.updated || this.advanced ? this.misses = Math.floor(.6 * t.misses) : this.misses = t.misses + 1, this.availabilityDelay = t.availabilityDelay
        }
        get hasProgramDateTime() {
            return !!this.fragments.length && g(this.fragments[this.fragments.length - 1].programDateTime)
        }
        get levelTargetDuration() {
            return this.averagetargetduration || this.targetduration || 10
        }
        get drift() {
            const t = this.driftEndTime - this.driftStartTime;
            if (t > 0) {
                return 1e3 * (this.driftEnd - this.driftStart) / t
            }
            return 1
        }
        get edge() {
            return this.partEnd || this.fragmentEnd
        }
        get partEnd() {
            var t;
            return null != (t = this.partList) && t.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd
        }
        get fragmentEnd() {
            var t;
            return null != (t = this.fragments) && t.length ? this.fragments[this.fragments.length - 1].end : 0
        }
        get age() {
            return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
        }
        get lastPartIndex() {
            var t;
            return null != (t = this.partList) && t.length ? this.partList[this.partList.length - 1].index : -1
        }
        get lastPartSn() {
            var t;
            return null != (t = this.partList) && t.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN
        }
    }

    function $(t) {
        return Uint8Array.from(atob(t), (t => t.charCodeAt(0)))
    }

    function G(t) {
        const e = V(t).subarray(0, 16),
            s = new Uint8Array(16);
        return s.set(e, 16 - e.length), s
    }

    function K(t) {
        const e = function(t, e, s) {
            const i = t[e];
            t[e] = t[s], t[s] = i
        };
        e(t, 0, 3), e(t, 1, 2), e(t, 4, 5), e(t, 6, 7)
    }

    function H(t) {
        const e = t.split(':');
        let s = null;
        if ('data' === e[0] && 2 === e.length) {
            const t = e[1].split(';'),
                i = t[t.length - 1].split(',');
            if (2 === i.length) {
                const e = 'base64' === i[0],
                    r = i[1];
                e ? (t.splice(-1, 1), s = $(r)) : s = G(r)
            }
        }
        return s
    }

    function V(t) {
        return Uint8Array.from(unescape(encodeURIComponent(t)), (t => t.charCodeAt(0)))
    }
    n.LevelDetails = B;
    const Y = 'undefined' != typeof self ? self : void 0;
    var W = n.KeySystems = {
            CLEARKEY: "org.w3.clearkey",
            FAIRPLAY: "com.apple.fps",
            PLAYREADY: "com.microsoft.playready",
            WIDEVINE: "com.widevine.alpha"
        },
        j = n.KeySystemFormats = {
            CLEARKEY: "org.w3.clearkey",
            FAIRPLAY: "com.apple.streamingkeydelivery",
            PLAYREADY: "com.microsoft.playready",
            WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
        };

    function q(t) {
        switch (t) {
            case j.FAIRPLAY:
                return W.FAIRPLAY;
            case j.PLAYREADY:
                return W.PLAYREADY;
            case j.WIDEVINE:
                return W.WIDEVINE;
            case j.CLEARKEY:
                return W.CLEARKEY
        }
    }
    var X = "edef8ba979d64acea3c827dcd51d21ed";

    function z(t) {
        if (t === X) return W.WIDEVINE
    }

    function Q(t) {
        switch (t) {
            case W.FAIRPLAY:
                return j.FAIRPLAY;
            case W.PLAYREADY:
                return j.PLAYREADY;
            case W.WIDEVINE:
                return j.WIDEVINE;
            case W.CLEARKEY:
                return j.CLEARKEY
        }
    }

    function J(t) {
        const {
            drmSystems: e,
            widevineLicenseUrl: s
        } = t, i = e ? [W.FAIRPLAY, W.WIDEVINE, W.PLAYREADY, W.CLEARKEY].filter((t => !!e[t])) : [];
        return !i[W.WIDEVINE] && s && i.push(W.WIDEVINE), i
    }
    const Z = null != Y && null != (tt = Y.navigator) && tt.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
    var tt;

    function et(t, e, s, i) {
        let r;
        switch (t) {
            case W.FAIRPLAY:
                r = ['cenc', 'sinf'];
                break;
            case W.WIDEVINE:
            case W.PLAYREADY:
                r = ['cenc'];
                break;
            case W.CLEARKEY:
                r = ['cenc', 'keyids'];
                break;
            default:
                throw new Error(`Unknown key-system: ${t}`)
        }
        return st(r, e, s, i)
    }

    function st(t, e, s, i) {
        return [{
            initDataTypes: t,
            persistentState: i.persistentState || 'optional',
            distinctiveIdentifier: i.distinctiveIdentifier || 'optional',
            sessionTypes: i.sessionTypes || [i.sessionType || 'temporary'],
            audioCapabilities: e.map((t => ({
                contentType: `audio/mp4; codecs="${t}"`,
                robustness: i.audioRobustness || '',
                encryptionScheme: i.audioEncryptionScheme || null
            }))),
            videoCapabilities: s.map((t => ({
                contentType: `video/mp4; codecs="${t}"`,
                robustness: i.videoRobustness || '',
                encryptionScheme: i.videoEncryptionScheme || null
            })))
        }]
    }

    function it(t, e, s) {
        return Uint8Array.prototype.slice ? t.slice(e, s) : new Uint8Array(Array.prototype.slice.call(t, e, s))
    }
    const rt = (t, e) => e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128,
        nt = (t, e) => e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128,
        at = (t, e) => {
            const s = e;
            let i = 0;
            for (; rt(t, e);) {
                i += 10;
                i += ot(t, e + 6), nt(t, e + 10) && (i += 10), e += i
            }
            if (i > 0) return t.subarray(s, s + i)
        },
        ot = (t, e) => {
            let s = 0;
            return s = (127 & t[e]) << 21, s |= (127 & t[e + 1]) << 14, s |= (127 & t[e + 2]) << 7, s |= 127 & t[e + 3], s
        },
        lt = (t, e) => rt(t, e) && ot(t, e + 6) + 10 <= t.length - e,
        ht = t => {
            const e = ut(t);
            for (let t = 0; t < e.length; t++) {
                const s = e[t];
                if (dt(s)) return yt(s)
            }
        },
        dt = t => t && 'PRIV' === t.key && 'com.apple.streaming.transportStreamTimestamp' === t.info,
        ct = t => {
            const e = String.fromCharCode(t[0], t[1], t[2], t[3]),
                s = ot(t, 4);
            return {
                type: e,
                size: s,
                data: t.subarray(10, 10 + s)
            }
        },
        ut = t => {
            let e = 0;
            const s = [];
            for (; rt(t, e);) {
                const i = ot(t, e + 6);
                e += 10;
                const r = e + i;
                for (; e + 8 < r;) {
                    const i = ct(t.subarray(e)),
                        r = ft(i);
                    r && s.push(r), e += i.size + 10
                }
                nt(t, e) && (e += 10)
            }
            return s
        },
        ft = t => 'PRIV' === t.type ? gt(t) : 'W' === t.type[0] ? pt(t) : mt(t),
        gt = t => {
            if (t.size < 2) return;
            const e = vt(t.data, !0),
                s = new Uint8Array(t.data.subarray(e.length + 1));
            return {
                key: t.type,
                info: e,
                data: s.buffer
            }
        },
        mt = t => {
            if (t.size < 2) return;
            if ('TXXX' === t.type) {
                let e = 1;
                const s = vt(t.data.subarray(e), !0);
                e += s.length + 1;
                const i = vt(t.data.subarray(e));
                return {
                    key: t.type,
                    info: s,
                    data: i
                }
            }
            const e = vt(t.data.subarray(1));
            return {
                key: t.type,
                data: e
            }
        },
        pt = t => {
            if ('WXXX' === t.type) {
                if (t.size < 2) return;
                let e = 1;
                const s = vt(t.data.subarray(e), !0);
                e += s.length + 1;
                const i = vt(t.data.subarray(e));
                return {
                    key: t.type,
                    info: s,
                    data: i
                }
            }
            const e = vt(t.data);
            return {
                key: t.type,
                data: e
            }
        },
        yt = t => {
            if (8 === t.data.byteLength) {
                const e = new Uint8Array(t.data),
                    s = 1 & e[3];
                let i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
                return i /= 45, s && (i += 47721858.84), Math.round(i)
            }
        },
        vt = (t, e = !1) => {
            const s = Tt();
            if (s) {
                const i = s.decode(t);
                if (e) {
                    const t = i.indexOf('\0');
                    return -1 !== t ? i.substring(0, t) : i
                }
                return i.replace(/\0/g, '')
            }
            const i = t.length;
            let r, n, a, o = '',
                l = 0;
            for (; l < i;) {
                if (r = t[l++], 0 === r && e) return o;
                if (0 !== r && 3 !== r) switch (r >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        o += String.fromCharCode(r);
                        break;
                    case 12:
                    case 13:
                        n = t[l++], o += String.fromCharCode((31 & r) << 6 | 63 & n);
                        break;
                    case 14:
                        n = t[l++], a = t[l++], o += String.fromCharCode((15 & r) << 12 | (63 & n) << 6 | 63 & a)
                }
            }
            return o
        };
    let Et;

    function Tt() {
        if (!navigator.userAgent.includes('PlayStation 4')) return Et || void 0 === self.TextDecoder || (Et = new self.TextDecoder('utf-8')), Et
    }
    const St = function(t) {
            let e = '';
            for (let s = 0; s < t.length; s++) {
                let i = t[s].toString(16);
                i.length < 2 && (i = '0' + i), e += i
            }
            return e
        },
        Lt = Math.pow(2, 32) - 1,
        At = [].push,
        Rt = {
            video: 1,
            audio: 2,
            id3: 3,
            text: 4
        };

    function bt(t) {
        return String.fromCharCode.apply(null, t)
    }

    function Dt(t, e) {
        const s = t[e] << 8 | t[e + 1];
        return s < 0 ? 65536 + s : s
    }

    function kt(t, e) {
        const s = Ct(t, e);
        return s < 0 ? 4294967296 + s : s
    }

    function It(t, e) {
        let s = kt(t, e);
        return s *= Math.pow(2, 32), s += kt(t, e + 4), s
    }

    function Ct(t, e) {
        return t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]
    }

    function wt(t, e, s) {
        t[e] = s >> 24, t[e + 1] = s >> 16 & 255, t[e + 2] = s >> 8 & 255, t[e + 3] = 255 & s
    }

    function _t(t) {
        const e = t.byteLength;
        for (let s = 0; s < e;) {
            const i = kt(t, s);
            if (i > 8 && 109 === t[s + 4] && 111 === t[s + 5] && 111 === t[s + 6] && 102 === t[s + 7]) return !0;
            s = i > 1 ? s + i : e
        }
        return !1
    }

    function xt(t, e) {
        const s = [];
        if (!e.length) return s;
        const i = t.byteLength;
        for (let r = 0; r < i;) {
            const n = kt(t, r),
                a = n > 1 ? r + n : i;
            if (bt(t.subarray(r + 4, r + 8)) === e[0])
                if (1 === e.length) s.push(t.subarray(r + 8, a));
                else {
                    const i = xt(t.subarray(r + 8, a), e.slice(1));
                    i.length && At.apply(s, i)
                }
            r = a
        }
        return s
    }

    function Pt(t) {
        const e = [],
            s = t[0];
        let i = 8;
        const r = kt(t, i);
        i += 4;
        let n = 0,
            a = 0;
        0 === s ? (n = kt(t, i), a = kt(t, i + 4), i += 8) : (n = It(t, i), a = It(t, i + 8), i += 16), i += 2;
        let o = t.length + a;
        const l = Dt(t, i);
        i += 2;
        for (let s = 0; s < l; s++) {
            let s = i;
            const n = kt(t, s);
            s += 4;
            const a = 2147483647 & n;
            if (1 === (2147483648 & n) >>> 31) return D.warn('SIDX has hierarchical references (not supported)'), null;
            const l = kt(t, s);
            s += 4, e.push({
                referenceSize: a,
                subsegmentDuration: l,
                info: {
                    duration: l / r,
                    start: o,
                    end: o + a - 1
                }
            }), o += a, s += 4, i = s
        }
        return {
            earliestPresentationTime: n,
            timescale: r,
            version: s,
            referencesCount: l,
            references: e
        }
    }

    function Mt(t) {
        const e = [],
            s = xt(t, ['moov', 'trak']);
        for (let t = 0; t < s.length; t++) {
            const i = s[t],
                r = xt(i, ['tkhd'])[0];
            if (r) {
                let t = r[0];
                const s = kt(r, 0 === t ? 12 : 20),
                    n = xt(i, ['mdia', 'mdhd'])[0];
                if (n) {
                    t = n[0];
                    const r = kt(n, 0 === t ? 12 : 20),
                        a = xt(i, ['mdia', 'hdlr'])[0];
                    if (a) {
                        const t = bt(a.subarray(8, 12)),
                            n = {
                                soun: P,
                                vide: M
                            }[t];
                        if (n) {
                            const t = Ft(xt(i, ['mdia', 'minf', 'stbl', 'stsd'])[0]);
                            e[s] = {
                                timescale: r,
                                type: n
                            }, e[n] = d({
                                timescale: r,
                                id: s
                            }, t)
                        }
                    }
                }
            }
        }
        return xt(t, ['moov', 'mvex', 'trex']).forEach((t => {
            const s = kt(t, 4),
                i = e[s];
            i && (i.default = {
                duration: kt(t, 12),
                flags: kt(t, 20)
            })
        })), e
    }

    function Ft(t) {
        const e = t.subarray(8),
            s = e.subarray(86),
            i = bt(e.subarray(4, 8));
        let r = i;
        const n = 'enca' === i || 'encv' === i;
        if (n) {
            const t = xt(e, [i])[0];
            xt(t.subarray('enca' === i ? 28 : 78), ['sinf']).forEach((t => {
                const e = xt(t, ['schm'])[0];
                if (e) {
                    const s = bt(e.subarray(4, 8));
                    if ('cbcs' === s || 'cenc' === s) {
                        const e = xt(t, ['frma'])[0];
                        e && (r = bt(e))
                    }
                }
            }))
        }
        switch (r) {
            case 'avc1':
            case 'avc2':
            case 'avc3':
            case 'avc4':
                {
                    const t = xt(s, ['avcC'])[0];r += '.' + Nt(t[1]) + Nt(t[2]) + Nt(t[3]);
                    break
                }
            case 'mp4a':
                {
                    const t = xt(e, [i])[0],
                        s = xt(t.subarray(28), ['esds'])[0];
                    if (s && s.length > 12) {
                        let t = 4;
                        if (3 !== s[t++]) break;
                        t = Ot(s, t), t += 2;
                        const e = s[t++];
                        if (128 & e && (t += 2), 64 & e && (t += s[t++]), 4 !== s[t++]) break;
                        t = Ot(s, t);
                        const i = s[t++];
                        if (64 !== i) break;
                        if (r += '.' + Nt(i), t += 12, 5 !== s[t++]) break;
                        t = Ot(s, t);
                        const n = s[t++];
                        let a = (248 & n) >> 3;
                        31 === a && (a += 1 + ((7 & n) << 3) + ((224 & s[t]) >> 5)), r += '.' + a
                    }
                    break
                }
            case 'hvc1':
            case 'hev1':
                {
                    const t = xt(s, ['hvcC'])[0],
                        e = t[1],
                        i = ['', 'A', 'B', 'C'][e >> 6],
                        n = 31 & e,
                        a = kt(t, 2),
                        o = (32 & e) >> 5 ? 'H' : 'L',
                        l = t[12],
                        h = t.subarray(6, 12);r += '.' + i + n,
                    r += '.' + a.toString(16).toUpperCase(),
                    r += '.' + o + l;
                    let d = '';
                    for (let t = h.length; t--;) {
                        const e = h[t];
                        if (e || d) {
                            d = '.' + e.toString(16).toUpperCase() + d
                        }
                    }
                    r += d;
                    break
                }
            case 'dvh1':
            case 'dvhe':
                {
                    const t = xt(s, ['dvcC'])[0],
                        e = t[2] >> 1 & 127,
                        i = t[2] << 5 & 32 | t[3] >> 3 & 31;r += '.' + Ut(e) + '.' + Ut(i);
                    break
                }
            case 'vp09':
                {
                    const t = xt(s, ['vpcC'])[0],
                        e = t[4],
                        i = t[5],
                        n = t[6] >> 4 & 15;r += '.' + Ut(e) + '.' + Ut(i) + '.' + Ut(n);
                    break
                }
            case 'av01':
                {
                    const t = xt(s, ['av1C'])[0],
                        e = t[1] >>> 5,
                        i = 31 & t[1],
                        n = t[2] >>> 7 ? 'H' : 'M',
                        a = (64 & t[2]) >> 6,
                        o = (32 & t[2]) >> 5,
                        l = 2 === e && a ? o ? 12 : 10 : a ? 10 : 8,
                        h = (16 & t[2]) >> 4,
                        d = (8 & t[2]) >> 3,
                        c = (4 & t[2]) >> 2,
                        u = 3 & t[2],
                        f = 1,
                        g = 1,
                        m = 1,
                        p = 0;r += '.' + e + '.' + Ut(i) + n + '.' + Ut(l) + '.' + h + '.' + d + c + u + '.' + Ut(f) + '.' + Ut(g) + '.' + Ut(m) + '.' + p;
                    break
                }
        }
        return {
            codec: r,
            encrypted: n
        }
    }

    function Ot(t, e) {
        const s = e + 5;
        for (; 128 & t[e++] && e < s;);
        return e
    }

    function Nt(t) {
        return ('0' + t.toString(16).toUpperCase()).slice(-2)
    }

    function Ut(t) {
        return (t < 10 ? '0' : '') + t
    }

    function Bt(t, e) {
        if (!t || !e) return t;
        const s = e.keyId;
        if (s && e.isCommonEncryption) {
            xt(t, ['moov', 'trak']).forEach((t => {
                const e = xt(t, ['mdia', 'minf', 'stbl', 'stsd'])[0].subarray(8);
                let i = xt(e, ['enca']);
                const r = i.length > 0;
                r || (i = xt(e, ['encv'])), i.forEach((t => {
                    xt(r ? t.subarray(28) : t.subarray(78), ['sinf']).forEach((t => {
                        const e = $t(t);
                        if (e) {
                            const t = e.subarray(8, 24);
                            t.some((t => 0 !== t)) || (D.log(`[eme] Patching keyId in 'enc${r?'a':'v'}>sinf>>tenc' box: ${St(t)} -> ${St(s)}`), e.set(s, 8))
                        }
                    }))
                }))
            }))
        }
        return t
    }

    function $t(t) {
        const e = xt(t, ['schm'])[0];
        if (e) {
            const s = bt(e.subarray(4, 8));
            if ('cbcs' === s || 'cenc' === s) return xt(t, ['schi', 'tenc'])[0]
        }
        return D.error("[eme] missing 'schm' box"), null
    }

    function Gt(t, e) {
        return xt(e, ['moof', 'traf']).reduce(((e, s) => {
            const i = xt(s, ['tfdt'])[0],
                r = i[0],
                n = xt(s, ['tfhd']).reduce(((e, s) => {
                    const n = kt(s, 4),
                        a = t[n];
                    if (a) {
                        let t = kt(i, 4);
                        if (1 === r) {
                            if (t === Lt) return D.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), e;
                            t *= 4294967296, t += kt(i, 8)
                        }
                        const s = t / (a.timescale || 9e4);
                        if (g(s) && (null === e || s < e)) return s
                    }
                    return e
                }), null);
            return null !== n && g(n) && (null === e || n < e) ? n : e
        }), null)
    }

    function Kt(t, e) {
        let s = 0,
            i = 0,
            r = 0;
        const n = xt(t, ['moof', 'traf']);
        for (let t = 0; t < n.length; t++) {
            const a = n[t],
                o = xt(a, ['tfhd'])[0],
                l = e[kt(o, 4)];
            if (!l) continue;
            const h = l.default,
                d = kt(o, 0) | (null == h ? void 0 : h.flags);
            let c = null == h ? void 0 : h.duration;
            8 & d && (c = kt(o, 2 & d ? 12 : 8));
            const u = l.timescale || 9e4,
                f = xt(a, ['trun']);
            for (let t = 0; t < f.length; t++) {
                if (s = Ht(f[t]), !s && c) {
                    s = c * kt(f[t], 4)
                }
                l.type === M ? i += s / u : l.type === P && (r += s / u)
            }
        }
        if (0 === i && 0 === r) {
            let e = 1 / 0,
                s = 0,
                i = 0;
            const r = xt(t, ['sidx']);
            for (let t = 0; t < r.length; t++) {
                const n = Pt(r[t]);
                if (null != n && n.references) {
                    e = Math.min(e, n.earliestPresentationTime / n.timescale);
                    const t = n.references.reduce(((t, e) => t + e.info.duration || 0), 0);
                    s = Math.max(s, t + n.earliestPresentationTime / n.timescale), i = s - e
                }
            }
            if (i && g(i)) return i
        }
        return i || r
    }

    function Ht(t) {
        const e = kt(t, 0);
        let s = 8;
        1 & e && (s += 4), 4 & e && (s += 4);
        let i = 0;
        const r = kt(t, 4);
        for (let n = 0; n < r; n++) {
            if (256 & e) {
                i += kt(t, s), s += 4
            }
            512 & e && (s += 4), 1024 & e && (s += 4), 2048 & e && (s += 4)
        }
        return i
    }

    function Vt(t, e, s) {
        xt(e, ['moof', 'traf']).forEach((e => {
            xt(e, ['tfhd']).forEach((i => {
                const r = kt(i, 4),
                    n = t[r];
                if (!n) return;
                const a = n.timescale || 9e4;
                xt(e, ['tfdt']).forEach((t => {
                    const e = t[0],
                        i = s * a;
                    if (i) {
                        let s = kt(t, 4);
                        if (0 === e) s -= i, s = Math.max(s, 0), wt(t, 4, s);
                        else {
                            s *= Math.pow(2, 32), s += kt(t, 8), s -= i, s = Math.max(s, 0);
                            const e = Math.floor(s / 4294967296),
                                r = Math.floor(s % 4294967296);
                            wt(t, 4, e), wt(t, 8, r)
                        }
                    }
                }))
            }))
        }))
    }

    function Yt(t) {
        const e = {
                valid: null,
                remainder: null
            },
            s = xt(t, ['moof']);
        if (s.length < 2) return e.remainder = t, e;
        const i = s[s.length - 1];
        return e.valid = it(t, 0, i.byteOffset - 8), e.remainder = it(t, i.byteOffset - 8), e
    }

    function Wt(t, e) {
        const s = new Uint8Array(t.length + e.length);
        return s.set(t), s.set(e, t.length), s
    }

    function jt(t, e) {
        const s = [],
            i = e.samples,
            r = e.timescale,
            n = e.id;
        let a = !1;
        return xt(i, ['moof']).map((o => {
            const l = o.byteOffset - 8;
            xt(o, ['traf']).map((o => {
                const h = xt(o, ['tfdt']).map((t => {
                    const e = t[0];
                    let s = kt(t, 4);
                    return 1 === e && (s *= Math.pow(2, 32), s += kt(t, 8)), s / r
                }))[0];
                return void 0 !== h && (t = h), xt(o, ['tfhd']).map((h => {
                    const d = kt(h, 4),
                        c = 16777215 & kt(h, 0);
                    let u = 0;
                    const f = !!(16 & c);
                    let g = 0;
                    const m = !!(32 & c);
                    let p = 8;
                    d === n && (!!(1 & c) && (p += 8), !!(2 & c) && (p += 4), !!(8 & c) && (u = kt(h, p), p += 4), f && (g = kt(h, p), p += 4), m && (p += 4), 'video' === e.type && (a = qt(e.codec)), xt(o, ['trun']).map((n => {
                        const o = n[0],
                            h = 16777215 & kt(n, 0),
                            d = !!(1 & h);
                        let c = 0;
                        const f = !!(4 & h),
                            m = !!(256 & h);
                        let p = 0;
                        const y = !!(512 & h);
                        let v = 0;
                        const E = !!(1024 & h),
                            T = !!(2048 & h);
                        let S = 0;
                        const L = kt(n, 4);
                        let A = 8;
                        d && (c = kt(n, A), A += 4), f && (A += 4);
                        let R = c + l;
                        for (let l = 0; l < L; l++) {
                            if (m ? (p = kt(n, A), A += 4) : p = u, y ? (v = kt(n, A), A += 4) : v = g, E && (A += 4), T && (S = 0 === o ? kt(n, A) : Ct(n, A), A += 4), e.type === M) {
                                let e = 0;
                                for (; e < v;) {
                                    const n = kt(i, R);
                                    if (R += 4, Xt(a, i[R])) {
                                        zt(i.subarray(R, R + n), a ? 2 : 1, t + S / r, s)
                                    }
                                    R += n, e += n + 4
                                }
                            }
                            t += p / r
                        }
                    })))
                }))
            }))
        })), s
    }

    function qt(t) {
        if (!t) return !1;
        const e = t.indexOf('.'),
            s = e < 0 ? t : t.substring(0, e);
        return 'hvc1' === s || 'hev1' === s || 'dvh1' === s || 'dvhe' === s
    }

    function Xt(t, e) {
        if (t) {
            const t = e >> 1 & 63;
            return 39 === t || 40 === t
        }
        return 6 === (31 & e)
    }

    function zt(t, e, s, i) {
        const r = Qt(t);
        let n = 0;
        n += e;
        let a = 0,
            o = 0,
            l = 0;
        for (; n < r.length;) {
            a = 0;
            do {
                if (n >= r.length) break;
                l = r[n++], a += l
            } while (255 === l);
            o = 0;
            do {
                if (n >= r.length) break;
                l = r[n++], o += l
            } while (255 === l);
            const t = r.length - n;
            let e = n;
            if (o < t) n += o;
            else if (o > t) {
                D.error(`Malformed SEI payload. ${o} is too small, only ${t} bytes left to parse.`);
                break
            }
            if (4 === a) {
                if (181 === r[e++]) {
                    const t = Dt(r, e);
                    if (e += 2, 49 === t) {
                        const t = kt(r, e);
                        if (e += 4, 1195456820 === t) {
                            const t = r[e++];
                            if (3 === t) {
                                const n = r[e++],
                                    o = 64 & n,
                                    l = o ? 2 + 3 * (31 & n) : 0,
                                    h = new Uint8Array(l);
                                if (o) {
                                    h[0] = n;
                                    for (let t = 1; t < l; t++) h[t] = r[e++]
                                }
                                i.push({
                                    type: t,
                                    payloadType: a,
                                    pts: s,
                                    bytes: h
                                })
                            }
                        }
                    }
                }
            } else if (5 === a && o > 16) {
                const t = [];
                for (let s = 0; s < 16; s++) {
                    const i = r[e++].toString(16);
                    t.push(1 == i.length ? '0' + i : i), 3 !== s && 5 !== s && 7 !== s && 9 !== s || t.push('-')
                }
                const n = o - 16,
                    l = new Uint8Array(n);
                for (let t = 0; t < n; t++) l[t] = r[e++];
                i.push({
                    payloadType: a,
                    pts: s,
                    uuid: t.join(''),
                    userData: vt(l),
                    userDataBytes: l
                })
            }
        }
    }

    function Qt(t) {
        const e = t.byteLength,
            s = [];
        let i = 1;
        for (; i < e - 2;) 0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2] ? (s.push(i + 2), i += 2) : i++;
        if (0 === s.length) return t;
        const r = e - s.length,
            n = new Uint8Array(r);
        let a = 0;
        for (i = 0; i < r; a++, i++) a === s[0] && (a++, s.shift()), n[i] = t[a];
        return n
    }

    function Jt(t) {
        const e = t[0];
        let s = '',
            i = '',
            r = 0,
            n = 0,
            a = 0,
            o = 0,
            l = 0,
            h = 0;
        if (0 === e) {
            for (;
                '\0' !== bt(t.subarray(h, h + 1));) s += bt(t.subarray(h, h + 1)), h += 1;
            for (s += bt(t.subarray(h, h + 1)), h += 1;
                '\0' !== bt(t.subarray(h, h + 1));) i += bt(t.subarray(h, h + 1)), h += 1;
            i += bt(t.subarray(h, h + 1)), h += 1, r = kt(t, 12), n = kt(t, 16), o = kt(t, 20), l = kt(t, 24), h = 28
        } else if (1 === e) {
            h += 4, r = kt(t, h), h += 4;
            const e = kt(t, h);
            h += 4;
            const n = kt(t, h);
            for (h += 4, a = 4294967296 * e + n, m(a) || (a = Number.MAX_SAFE_INTEGER, D.warn('Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box')), o = kt(t, h), h += 4, l = kt(t, h), h += 4;
                '\0' !== bt(t.subarray(h, h + 1));) s += bt(t.subarray(h, h + 1)), h += 1;
            for (s += bt(t.subarray(h, h + 1)), h += 1;
                '\0' !== bt(t.subarray(h, h + 1));) i += bt(t.subarray(h, h + 1)), h += 1;
            i += bt(t.subarray(h, h + 1)), h += 1
        }
        return {
            schemeIdUri: s,
            value: i,
            timeScale: r,
            presentationTime: a,
            presentationTimeDelta: n,
            eventDuration: o,
            id: l,
            payload: t.subarray(h, t.byteLength)
        }
    }

    function Zt(t, ...e) {
        const s = e.length;
        let i = 8,
            r = s;
        for (; r--;) i += e[r].byteLength;
        const n = new Uint8Array(i);
        for (n[0] = i >> 24 & 255, n[1] = i >> 16 & 255, n[2] = i >> 8 & 255, n[3] = 255 & i, n.set(t, 4), r = 0, i = 8; r < s; r++) n.set(e[r], i), i += e[r].byteLength;
        return n
    }

    function te(t, e, s) {
        if (16 !== t.byteLength) throw new RangeError('Invalid system id');
        let i, r, n;
        if (e) {
            i = 1, r = new Uint8Array(16 * e.length);
            for (let t = 0; t < e.length; t++) {
                const s = e[t];
                if (16 !== s.byteLength) throw new RangeError('Invalid key');
                r.set(s, 16 * t)
            }
        } else i = 0, r = new Uint8Array;
        i > 0 ? (n = new Uint8Array(4), e.length > 0 && new DataView(n.buffer).setUint32(0, e.length, !1)) : n = new Uint8Array;
        const a = new Uint8Array(4);
        return s && s.byteLength > 0 && new DataView(a.buffer).setUint32(0, s.byteLength, !1), Zt([112, 115, 115, 104], new Uint8Array([i, 0, 0, 0]), t, n, r, a, s || new Uint8Array)
    }

    function ee(t) {
        if (!(t instanceof ArrayBuffer) || t.byteLength < 32) return null;
        const e = {
                version: 0,
                systemId: '',
                kids: null,
                data: null
            },
            s = new DataView(t),
            i = s.getUint32(0);
        if (t.byteLength !== i && i > 44) return null;
        if (1886614376 !== s.getUint32(4)) return null;
        if (e.version = s.getUint32(8) >>> 24, e.version > 1) return null;
        e.systemId = St(new Uint8Array(t, 12, 16));
        const r = s.getUint32(28);
        if (0 === e.version) {
            if (i - 32 < r) return null;
            e.data = new Uint8Array(t, 32, r)
        } else if (1 === e.version) {
            e.kids = [];
            for (let s = 0; s < r; s++) e.kids.push(new Uint8Array(t, 32 + 16 * s, 16))
        }
        return e
    }
    let se = {};
    class ie {
        static clearKeyUriToKeyIdMap() {
            se = {}
        }
        constructor(t, e, s, i = [1], r = null) {
            this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = t, this.uri = e, this.keyFormat = s, this.keyFormatVersions = i, this.iv = r, this.encrypted = !!t && 'NONE' !== t, this.isCommonEncryption = this.encrypted && 'AES-128' !== t
        }
        isSupported() {
            if (this.method) {
                if ('AES-128' === this.method || 'NONE' === this.method) return !0;
                if ('identity' === this.keyFormat) return 'SAMPLE-AES' === this.method;
                switch (this.keyFormat) {
                    case j.FAIRPLAY:
                    case j.WIDEVINE:
                    case j.PLAYREADY:
                    case j.CLEARKEY:
                        return -1 !== ['ISO-23001-7', 'SAMPLE-AES', 'SAMPLE-AES-CENC', 'SAMPLE-AES-CTR'].indexOf(this.method)
                }
            }
            return !1
        }
        getDecryptData(t) {
            if (!this.encrypted || !this.uri) return null;
            if ('AES-128' === this.method && this.uri && !this.iv) {
                'number' != typeof t && ('AES-128' !== this.method || this.iv || D.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), t = 0);
                const e = re(t);
                return new ie(this.method, this.uri, 'identity', this.keyFormatVersions, e)
            }
            const e = H(this.uri);
            if (e) switch (this.keyFormat) {
                case j.WIDEVINE:
                    this.pssh = e, e.length >= 22 && (this.keyId = e.subarray(e.length - 22, e.length - 6));
                    break;
                case j.PLAYREADY:
                    {
                        const t = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);this.pssh = te(t, null, e);
                        const s = new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2),
                            i = String.fromCharCode.apply(null, Array.from(s)),
                            r = i.substring(i.indexOf('<'), i.length),
                            n = (new DOMParser).parseFromString(r, 'text/xml').getElementsByTagName('KID')[0];
                        if (n) {
                            const t = n.childNodes[0] ? n.childNodes[0].nodeValue : n.getAttribute('VALUE');
                            if (t) {
                                const e = $(t).subarray(0, 16);
                                K(e), this.keyId = e
                            }
                        }
                        break
                    }
                default:
                    {
                        let t = e.subarray(0, 16);
                        if (16 !== t.length) {
                            const e = new Uint8Array(16);
                            e.set(t, 16 - t.length), t = e
                        }
                        this.keyId = t;
                        break
                    }
            }
            if (!this.keyId || 16 !== this.keyId.byteLength) {
                let t = se[this.uri];
                if (!t) {
                    const e = Object.keys(se).length % Number.MAX_SAFE_INTEGER;
                    t = new Uint8Array(16);
                    new DataView(t.buffer, 12, 4).setUint32(0, e), se[this.uri] = t
                }
                this.keyId = t
            }
            return this
        }
    }

    function re(t) {
        const e = new Uint8Array(16);
        for (let s = 12; s < 16; s++) e[s] = t >> 8 * (15 - s) & 255;
        return e
    }
    n.LevelKey = ie;
    const ne = /\{\$([a-zA-Z0-9-_]+)\}/g;

    function ae(t) {
        return ne.test(t)
    }

    function oe(t, e, s) {
        if (null !== t.variableList || t.hasVariableRefs)
            for (let i = s.length; i--;) {
                const r = s[i],
                    n = e[r];
                n && (e[r] = le(t, n))
            }
    }

    function le(t, e) {
        if (null !== t.variableList || t.hasVariableRefs) {
            const s = t.variableList;
            return e.replace(ne, (e => {
                const i = e.substring(2, e.length - 1),
                    r = null == s ? void 0 : s[i];
                return void 0 === r ? (t.playlistParsingError || (t.playlistParsingError = new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)), e) : r
            }))
        }
        return e
    }

    function he(t, e, s) {
        let i, r, n = t.variableList;
        if (n || (t.variableList = n = {}), 'QUERYPARAM' in e) {
            i = e.QUERYPARAM;
            try {
                const t = new self.URL(s).searchParams;
                if (!t.has(i)) throw new Error(`"${i}" does not match any query parameter in URI: "${s}"`);
                r = t.get(i)
            } catch (e) {
                t.playlistParsingError || (t.playlistParsingError = new Error(`EXT-X-DEFINE QUERYPARAM: ${e.message}`))
            }
        } else i = e.NAME, r = e.VALUE;
        i in n ? t.playlistParsingError || (t.playlistParsingError = new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`)) : n[i] = r || ''
    }

    function de(t, e, s) {
        const i = e.IMPORT;
        if (s && i in s) {
            let e = t.variableList;
            e || (t.variableList = e = {}), e[i] = s[i]
        } else t.playlistParsingError || (t.playlistParsingError = new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${i}"`))
    }

    function ce(t = !0) {
        if ('undefined' == typeof self) return;
        return (t || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource
    }
    const ue = {
        audio: {
            a3ds: 1,
            'ac-3': .95,
            'ac-4': 1,
            alac: .9,
            alaw: 1,
            dra1: 1,
            'dts+': 1,
            'dts-': 1,
            dtsc: 1,
            dtse: 1,
            dtsh: 1,
            'ec-3': .9,
            enca: 1,
            fLaC: .9,
            flac: .9,
            FLAC: .9,
            g719: 1,
            g726: 1,
            m4ae: 1,
            mha1: 1,
            mha2: 1,
            mhm1: 1,
            mhm2: 1,
            mlpa: 1,
            mp4a: 1,
            'raw ': 1,
            Opus: 1,
            opus: 1,
            samr: 1,
            sawb: 1,
            sawp: 1,
            sevc: 1,
            sqcp: 1,
            ssmv: 1,
            twos: 1,
            ulaw: 1
        },
        video: {
            avc1: 1,
            avc2: 1,
            avc3: 1,
            avc4: 1,
            avcp: 1,
            av01: .8,
            drac: 1,
            dva1: 1,
            dvav: 1,
            dvh1: .7,
            dvhe: .7,
            encv: 1,
            hev1: .75,
            hvc1: .75,
            mjp2: 1,
            mp4v: 1,
            mvc1: 1,
            mvc2: 1,
            mvc3: 1,
            mvc4: 1,
            resv: 1,
            rv60: 1,
            s263: 1,
            svc1: 1,
            svc2: 1,
            'vc-1': 1,
            vp08: 1,
            vp09: .9
        },
        text: {
            stpp: 1,
            wvtt: 1
        }
    };

    function fe(t, e) {
        const s = ue[e];
        return !!s && !!s[t.slice(0, 4)]
    }

    function ge(t, e, s = !0) {
        return !t.split(',').some((t => !me(t, e, s)))
    }

    function me(t, e, s = !0) {
        var i;
        const r = ce(s);
        return null != (i = null == r ? void 0 : r.isTypeSupported(pe(t, e))) && i
    }

    function pe(t, e) {
        return `${e}/mp4;codecs="${t}"`
    }

    function ye(t) {
        if (t) {
            const e = t.substring(0, 4);
            return ue.video[e]
        }
        return 2
    }

    function ve(t) {
        return t.split(',').reduce(((t, e) => {
            const s = ue.video[e];
            return s ? (2 * s + t) / (t ? 3 : 2) : (ue.audio[e] + t) / (t ? 2 : 1)
        }), 0)
    }
    const Ee = {};

    function Te(t, e = !0) {
        if (Ee[t]) return Ee[t];
        const s = {
            flac: ['flac', 'fLaC', 'FLAC'],
            opus: ['opus', 'Opus']
        }[t];
        for (let i = 0; i < s.length; i++)
            if (me(s[i], 'audio', e)) return Ee[t] = s[i], s[i];
        return t
    }
    const Se = /flac|opus/i;

    function Le(t, e = !0) {
        return t.replace(Se, (t => Te(t.toLowerCase(), e)))
    }

    function Ae(t, e) {
        return t && 'mp4a' !== t ? t : e ? e.split(',')[0] : e
    }

    function Re(t) {
        const e = t.split('.');
        if (e.length > 2) {
            let t = e.shift() + '.';
            return t += parseInt(e.shift()).toString(16), t += ('000' + parseInt(e.shift()).toString(16)).slice(-4), t
        }
        return t
    }
    const be = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,
        De = /#EXT-X-MEDIA:(.*)/g,
        ke = /^#EXT(?:INF|-X-TARGETDURATION):/m,
        Ie = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join('|'), 'g'),
        Ce = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join('|'));
    class we {
        static findGroup(t, e) {
            for (let s = 0; s < t.length; s++) {
                const i = t[s];
                if (i.id === e) return i
            }
        }
        static resolve(t, e) {
            return l.buildAbsoluteURL(e, t, {
                alwaysNormalize: !0
            })
        }
        static isMediaPlaylist(t) {
            return ke.test(t)
        }
        static parseMasterPlaylist(t, e) {
            const s = {
                    contentSteering: null,
                    levels: [],
                    playlistParsingError: null,
                    sessionData: null,
                    sessionKeys: null,
                    startTimeOffset: null,
                    variableList: null,
                    hasVariableRefs: ae(t)
                },
                i = [];
            let r;
            for (be.lastIndex = 0; null != (r = be.exec(t));)
                if (r[1]) {
                    var n;
                    const t = new C(r[1]);
                    oe(s, t, ['CODECS', 'SUPPLEMENTAL-CODECS', 'ALLOWED-CPC', 'PATHWAY-ID', 'STABLE-VARIANT-ID', 'AUDIO', 'VIDEO', 'SUBTITLES', 'CLOSED-CAPTIONS', 'NAME']);
                    const a = le(s, r[2]),
                        o = {
                            attrs: t,
                            bitrate: t.decimalInteger('BANDWIDTH') || t.decimalInteger('AVERAGE-BANDWIDTH'),
                            name: t.NAME,
                            url: we.resolve(a, e)
                        },
                        l = t.decimalResolution('RESOLUTION');
                    l && (o.width = l.width, o.height = l.height), Pe(t.CODECS, o), null != (n = o.unknownCodecs) && n.length || i.push(o), s.levels.push(o)
                } else if (r[3]) {
                const t = r[3],
                    i = r[4];
                switch (t) {
                    case 'SESSION-DATA':
                        {
                            const t = new C(i);oe(s, t, ['DATA-ID', 'LANGUAGE', 'VALUE', 'URI']);
                            const e = t['DATA-ID'];e && (null === s.sessionData && (s.sessionData = {}), s.sessionData[e] = t);
                            break
                        }
                    case 'SESSION-KEY':
                        {
                            const t = _e(i, e, s);t.encrypted && t.isSupported() ? (null === s.sessionKeys && (s.sessionKeys = []), s.sessionKeys.push(t)) : D.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${i}"`);
                            break
                        }
                    case 'DEFINE':
                        {
                            const t = new C(i);oe(s, t, ['NAME', 'VALUE', 'QUERYPARAM']),
                            he(s, t, e)
                        }
                        break;
                    case 'CONTENT-STEERING':
                        {
                            const t = new C(i);oe(s, t, ['SERVER-URI', 'PATHWAY-ID']),
                            s.contentSteering = {
                                uri: we.resolve(t['SERVER-URI'], e),
                                pathwayId: t['PATHWAY-ID'] || '.'
                            };
                            break
                        }
                    case 'START':
                        s.startTimeOffset = xe(i)
                }
            }
            const a = i.length > 0 && i.length < s.levels.length;
            return s.levels = a ? i : s.levels, 0 === s.levels.length && (s.playlistParsingError = new Error('no levels found in manifest')), s
        }
        static parseMasterPlaylistMedia(t, e, s) {
            let i;
            const r = {},
                n = s.levels,
                a = {
                    AUDIO: n.map((t => ({
                        id: t.attrs.AUDIO,
                        audioCodec: t.audioCodec
                    }))),
                    SUBTITLES: n.map((t => ({
                        id: t.attrs.SUBTITLES,
                        textCodec: t.textCodec
                    }))),
                    'CLOSED-CAPTIONS': []
                };
            let o = 0;
            for (De.lastIndex = 0; null !== (i = De.exec(t));) {
                const t = new C(i[1]),
                    n = t.TYPE;
                if (n) {
                    const i = a[n],
                        l = r[n] || [];
                    r[n] = l, oe(s, t, ['URI', 'GROUP-ID', 'LANGUAGE', 'ASSOC-LANGUAGE', 'STABLE-RENDITION-ID', 'NAME', 'INSTREAM-ID', 'CHARACTERISTICS', 'CHANNELS']);
                    const h = t.LANGUAGE,
                        d = t['ASSOC-LANGUAGE'],
                        c = t.CHANNELS,
                        u = t.CHARACTERISTICS,
                        f = t['INSTREAM-ID'],
                        g = {
                            attrs: t,
                            bitrate: 0,
                            id: o++,
                            groupId: t['GROUP-ID'] || '',
                            name: t.NAME || h || '',
                            type: n,
                            default: t.bool('DEFAULT'),
                            autoselect: t.bool('AUTOSELECT'),
                            forced: t.bool('FORCED'),
                            lang: h,
                            url: t.URI ? we.resolve(t.URI, e) : ''
                        };
                    if (d && (g.assocLang = d), c && (g.channels = c), u && (g.characteristics = u), f && (g.instreamId = f), null != i && i.length) {
                        const t = we.findGroup(i, g.groupId) || i[0];
                        Me(g, t, 'audioCodec'), Me(g, t, 'textCodec')
                    }
                    l.push(g)
                }
            }
            return r
        }
        static parseLevelPlaylist(t, e, s, i, r, n) {
            const a = new B(e),
                o = a.fragments;
            let l, h, d, c = null,
                u = 0,
                m = 0,
                p = 0,
                y = 0,
                v = null,
                E = new N(i, e),
                T = -1,
                S = !1,
                L = null;
            for (Ie.lastIndex = 0, a.m3u8 = t, a.hasVariableRefs = ae(t); null !== (l = Ie.exec(t));) {
                S && (S = !1, E = new N(i, e), E.start = p, E.sn = u, E.cc = y, E.level = s, c && (E.initSegment = c, E.rawProgramDateTime = c.rawProgramDateTime, c.rawProgramDateTime = null, L && (E.setByteRange(L), L = null)));
                const t = l[1];
                if (t) {
                    E.duration = parseFloat(t);
                    const e = (' ' + l[2]).slice(1);
                    E.title = e || null, E.tagList.push(e ? ['INF', t, e] : ['INF', t])
                } else if (l[3]) {
                    if (g(E.duration)) {
                        E.start = p, d && Ue(E, d, a), E.sn = u, E.level = s, E.cc = y, o.push(E);
                        const t = (' ' + l[3]).slice(1);
                        E.relurl = le(a, t), Oe(E, v), v = E, p += E.duration, u++, m = 0, S = !0
                    }
                } else if (l[4]) {
                    const t = (' ' + l[4]).slice(1);
                    v ? E.setByteRange(t, v) : E.setByteRange(t)
                } else if (l[5]) E.rawProgramDateTime = (' ' + l[5]).slice(1), E.tagList.push(['PROGRAM-DATE-TIME', E.rawProgramDateTime]), -1 === T && (T = o.length);
                else {
                    if (l = l[0].match(Ce), !l) {
                        D.warn('No matches on slow regex match for level playlist!');
                        continue
                    }
                    for (h = 1; h < l.length && void 0 === l[h]; h++);
                    const t = (' ' + l[h]).slice(1),
                        r = (' ' + l[h + 1]).slice(1),
                        p = l[h + 2] ? (' ' + l[h + 2]).slice(1) : '';
                    switch (t) {
                        case 'PLAYLIST-TYPE':
                            a.type = r.toUpperCase();
                            break;
                        case 'MEDIA-SEQUENCE':
                            u = a.startSN = parseInt(r);
                            break;
                        case 'SKIP':
                            {
                                const t = new C(r);oe(a, t, ['RECENTLY-REMOVED-DATERANGES']);
                                const e = t.decimalInteger('SKIPPED-SEGMENTS');
                                if (g(e)) {
                                    a.skippedSegments = e;
                                    for (let t = e; t--;) o.unshift(null);
                                    u += e
                                }
                                const s = t.enumeratedString('RECENTLY-REMOVED-DATERANGES');s && (a.recentlyRemovedDateranges = s.split('\t'));
                                break
                            }
                        case 'TARGETDURATION':
                            a.targetduration = Math.max(parseInt(r), 1);
                            break;
                        case 'VERSION':
                            a.version = parseInt(r);
                            break;
                        case 'INDEPENDENT-SEGMENTS':
                        case 'EXTM3U':
                            break;
                        case 'ENDLIST':
                            a.live = !1;
                            break;
                        case '#':
                            (r || p) && E.tagList.push(p ? [r, p] : [r]);
                            break;
                        case 'DISCONTINUITY':
                            y++, E.tagList.push(['DIS']);
                            break;
                        case 'GAP':
                            E.gap = !0, E.tagList.push([t]);
                            break;
                        case 'BITRATE':
                            E.tagList.push([t, r]);
                            break;
                        case 'DATERANGE':
                            {
                                const t = new C(r);oe(a, t, ['ID', 'CLASS', 'START-DATE', 'END-DATE', 'SCTE35-CMD', 'SCTE35-OUT', 'SCTE35-IN']),
                                oe(a, t, t.clientAttrs);
                                const e = new _(t, a.dateRanges[t.ID]);e.isValid || a.skippedSegments ? a.dateRanges[e.id] = e : D.warn(`Ignoring invalid DATERANGE tag: "${r}"`),
                                E.tagList.push(['EXT-X-DATERANGE', r]);
                                break
                            }
                        case 'DEFINE':
                            {
                                const t = new C(r);oe(a, t, ['NAME', 'VALUE', 'IMPORT', 'QUERYPARAM']),
                                'IMPORT' in t ? de(a, t, n) : he(a, t, e)
                            }
                            break;
                        case 'DISCONTINUITY-SEQUENCE':
                            y = parseInt(r);
                            break;
                        case 'KEY':
                            {
                                const t = _e(r, e, a);
                                if (t.isSupported()) {
                                    if ('NONE' === t.method) {
                                        d = void 0;
                                        break
                                    }
                                    d || (d = {}), d[t.keyFormat] && (d = f({}, d)), d[t.keyFormat] = t
                                } else D.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${r}"`);
                                break
                            }
                        case 'START':
                            a.startTimeOffset = xe(r);
                            break;
                        case 'MAP':
                            {
                                const t = new C(r);
                                if (oe(a, t, ['BYTERANGE', 'URI']), E.duration) {
                                    const r = new N(i, e);
                                    Ne(r, t, s, d), c = r, E.initSegment = c, c.rawProgramDateTime && !E.rawProgramDateTime && (E.rawProgramDateTime = c.rawProgramDateTime)
                                } else {
                                    const e = E.byteRangeEndOffset;
                                    if (e) {
                                        const t = E.byteRangeStartOffset;
                                        L = `${e-t}@${t}`
                                    } else L = null;
                                    Ne(E, t, s, d), c = E, S = !0
                                }
                                break
                            }
                        case 'SERVER-CONTROL':
                            {
                                const t = new C(r);a.canBlockReload = t.bool('CAN-BLOCK-RELOAD'),
                                a.canSkipUntil = t.optionalFloat('CAN-SKIP-UNTIL', 0),
                                a.canSkipDateRanges = a.canSkipUntil > 0 && t.bool('CAN-SKIP-DATERANGES'),
                                a.partHoldBack = t.optionalFloat('PART-HOLD-BACK', 0),
                                a.holdBack = t.optionalFloat('HOLD-BACK', 0);
                                break
                            }
                        case 'PART-INF':
                            {
                                const t = new C(r);a.partTarget = t.decimalFloatingPoint('PART-TARGET');
                                break
                            }
                        case 'PART':
                            {
                                let t = a.partList;t || (t = a.partList = []);
                                const s = m > 0 ? t[t.length - 1] : void 0,
                                    i = m++,
                                    n = new C(r);oe(a, n, ['BYTERANGE', 'URI']);
                                const o = new U(n, E, e, i, s);t.push(o),
                                E.duration += o.duration;
                                break
                            }
                        case 'PRELOAD-HINT':
                            {
                                const t = new C(r);oe(a, t, ['URI']),
                                a.preloadHint = t;
                                break
                            }
                        case 'RENDITION-REPORT':
                            {
                                const t = new C(r);oe(a, t, ['URI']),
                                a.renditionReports = a.renditionReports || [],
                                a.renditionReports.push(t);
                                break
                            }
                        default:
                            D.warn(`line parsed but not handled: ${l}`)
                    }
                }
            }
            v && !v.relurl ? (o.pop(), p -= v.duration, a.partList && (a.fragmentHint = v)) : a.partList && (Oe(E, v), E.cc = y, a.fragmentHint = E, d && Ue(E, d, a));
            const A = o.length,
                R = o[0],
                b = o[A - 1];
            if (p += a.skippedSegments * a.targetduration, p > 0 && A && b) {
                a.averagetargetduration = p / A;
                const t = b.sn;
                a.endSN = 'initSegment' !== t ? t : 0, a.live || (b.endList = !0), R && (a.startCC = R.cc)
            } else a.endSN = 0, a.startCC = 0;
            return a.fragmentHint && (p += a.fragmentHint.duration), a.totalduration = p, a.endCC = y, T > 0 && Fe(o, T), a
        }
    }

    function _e(t, e, s) {
        var i, r;
        const n = new C(t);
        oe(s, n, ['KEYFORMAT', 'KEYFORMATVERSIONS', 'URI', 'IV', 'URI']);
        const a = null != (i = n.METHOD) ? i : '',
            o = n.URI,
            l = n.hexadecimalInteger('IV'),
            h = n.KEYFORMATVERSIONS,
            d = null != (r = n.KEYFORMAT) ? r : 'identity';
        o && n.IV && !l && D.error(`Invalid IV: ${n.IV}`);
        const c = o ? we.resolve(o, e) : '',
            u = (h || '1').split('/').map(Number).filter(Number.isFinite);
        return new ie(a, c, d, u, l)
    }

    function xe(t) {
        const e = new C(t).decimalFloatingPoint('TIME-OFFSET');
        return g(e) ? e : null
    }

    function Pe(t, e) {
        let s = (t || '').split(/[ ,]+/).filter((t => t));
        ['video', 'audio', 'text'].forEach((t => {
            const i = s.filter((e => fe(e, t)));
            i.length && (e[`${t}Codec`] = i.join(','), s = s.filter((t => -1 === i.indexOf(t))))
        })), e.unknownCodecs = s
    }

    function Me(t, e, s) {
        const i = e[s];
        i && (t[s] = i)
    }

    function Fe(t, e) {
        let s = t[e];
        for (let i = e; i--;) {
            const e = t[i];
            if (!e) return;
            e.programDateTime = s.programDateTime - 1e3 * e.duration, s = e
        }
    }

    function Oe(t, e) {
        t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : null != e && e.programDateTime && (t.programDateTime = e.endProgramDateTime), g(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
    }

    function Ne(t, e, s, i) {
        t.relurl = e.URI, e.BYTERANGE && t.setByteRange(e.BYTERANGE), t.level = s, t.sn = 'initSegment', i && (t.levelkeys = i), t.initSegment = null
    }

    function Ue(t, e, s) {
        t.levelkeys = e;
        const {
            encryptedFragments: i
        } = s;
        i.length && i[i.length - 1].levelkeys === e || !Object.keys(e).some((t => e[t].isCommonEncryption)) || i.push(t)
    }
    var Be = "manifest",
        $e = "level",
        Ge = "audioTrack",
        Ke = "subtitleTrack",
        He = n.PlaylistLevelType = {
            MAIN: "main",
            AUDIO: "audio",
            SUBTITLE: "subtitle"
        };

    function Ve(t) {
        const {
            type: e
        } = t;
        switch (e) {
            case Ge:
                return He.AUDIO;
            case Ke:
                return He.SUBTITLE;
            default:
                return He.MAIN
        }
    }

    function Ye(t, e) {
        let s = t.url;
        return void 0 !== s && 0 !== s.indexOf('data:') || (s = e.url), s
    }
    class We {
        constructor(t) {
            this.hls = void 0, this.loaders = Object.create(null), this.variableList = null, this.hls = t, this.registerListeners()
        }
        startLoad(t) {}
        stopLoad() {
            this.destroyInternalLoaders()
        }
        registerListeners() {
            const {
                hls: t
            } = this;
            t.on(y.MANIFEST_LOADING, this.onManifestLoading, this), t.on(y.LEVEL_LOADING, this.onLevelLoading, this), t.on(y.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.on(y.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
        }
        unregisterListeners() {
            const {
                hls: t
            } = this;
            t.off(y.MANIFEST_LOADING, this.onManifestLoading, this), t.off(y.LEVEL_LOADING, this.onLevelLoading, this), t.off(y.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.off(y.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
        }
        createInternalLoader(t) {
            const e = this.hls.config,
                s = e.pLoader,
                i = e.loader,
                r = new(s || i)(e);
            return this.loaders[t.type] = r, r
        }
        getInternalLoader(t) {
            return this.loaders[t.type]
        }
        resetInternalLoader(t) {
            this.loaders[t] && delete this.loaders[t]
        }
        destroyInternalLoaders() {
            for (const t in this.loaders) {
                const e = this.loaders[t];
                e && e.destroy(), this.resetInternalLoader(t)
            }
        }
        destroy() {
            this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders()
        }
        onManifestLoading(t, e) {
            const {
                url: s
            } = e;
            this.variableList = null, this.load({
                id: null,
                level: 0,
                responseType: 'text',
                type: Be,
                url: s,
                deliveryDirectives: null
            })
        }
        onLevelLoading(t, e) {
            const {
                id: s,
                level: i,
                pathwayId: r,
                url: n,
                deliveryDirectives: a
            } = e;
            this.load({
                id: s,
                level: i,
                pathwayId: r,
                responseType: 'text',
                type: $e,
                url: n,
                deliveryDirectives: a
            })
        }
        onAudioTrackLoading(t, e) {
            const {
                id: s,
                groupId: i,
                url: r,
                deliveryDirectives: n
            } = e;
            this.load({
                id: s,
                groupId: i,
                level: null,
                responseType: 'text',
                type: Ge,
                url: r,
                deliveryDirectives: n
            })
        }
        onSubtitleTrackLoading(t, e) {
            const {
                id: s,
                groupId: i,
                url: r,
                deliveryDirectives: n
            } = e;
            this.load({
                id: s,
                groupId: i,
                level: null,
                responseType: 'text',
                type: Ke,
                url: r,
                deliveryDirectives: n
            })
        }
        load(t) {
            var e;
            const s = this.hls.config;
            let i, r = this.getInternalLoader(t);
            if (r) {
                const e = r.context;
                if (e && e.url === t.url && e.level === t.level) return void D.trace('[playlist-loader]: playlist request ongoing');
                D.log(`[playlist-loader]: aborting previous loader for type: ${t.type}`), r.abort()
            }
            if (i = t.type === Be ? s.manifestLoadPolicy.default : f({}, s.playlistLoadPolicy.default, {
                    timeoutRetry: null,
                    errorRetry: null
                }), r = this.createInternalLoader(t), g(null == (e = t.deliveryDirectives) ? void 0 : e.part)) {
                let e;
                if (t.type === $e && null !== t.level ? e = this.hls.levels[t.level].details : t.type === Ge && null !== t.id ? e = this.hls.audioTracks[t.id].details : t.type === Ke && null !== t.id && (e = this.hls.subtitleTracks[t.id].details), e) {
                    const t = e.partTarget,
                        s = e.targetduration;
                    if (t && s) {
                        const e = 1e3 * Math.max(3 * t, .8 * s);
                        i = f({}, i, {
                            maxTimeToFirstByteMs: Math.min(e, i.maxTimeToFirstByteMs),
                            maxLoadTimeMs: Math.min(e, i.maxTimeToFirstByteMs)
                        })
                    }
                }
            }
            const n = i.errorRetry || i.timeoutRetry || {},
                a = {
                    loadPolicy: i,
                    timeout: i.maxLoadTimeMs,
                    maxRetry: n.maxNumRetry || 0,
                    retryDelay: n.retryDelayMs || 0,
                    maxRetryDelay: n.maxRetryDelayMs || 0
                },
                o = {
                    onSuccess: (t, e, s, i) => {
                        const r = this.getInternalLoader(s);
                        this.resetInternalLoader(s.type);
                        const n = t.data;
                        0 === n.indexOf('#EXTM3U') ? (e.parsing.start = performance.now(), we.isMediaPlaylist(n) ? this.handleTrackOrLevelPlaylist(t, e, s, i || null, r) : this.handleMasterPlaylist(t, e, s, i)) : this.handleManifestParsingError(t, s, new Error('no EXTM3U delimiter'), i || null, e)
                    },
                    onError: (t, e, s, i) => {
                        this.handleNetworkError(e, s, !1, t, i)
                    },
                    onTimeout: (t, e, s) => {
                        this.handleNetworkError(e, s, !0, void 0, t)
                    }
                };
            r.load(t, a, o)
        }
        handleMasterPlaylist(t, e, s, i) {
            const r = this.hls,
                n = t.data,
                a = Ye(t, s),
                o = we.parseMasterPlaylist(n, a);
            if (o.playlistParsingError) return void this.handleManifestParsingError(t, s, o.playlistParsingError, i, e);
            const {
                contentSteering: l,
                levels: h,
                sessionData: d,
                sessionKeys: c,
                startTimeOffset: u,
                variableList: f
            } = o;
            this.variableList = f;
            const {
                AUDIO: g = [],
                SUBTITLES: m,
                'CLOSED-CAPTIONS': p
            } = we.parseMasterPlaylistMedia(n, a, o);
            if (g.length) {
                g.some((t => !t.url)) || !h[0].audioCodec || h[0].attrs.AUDIO || (D.log('[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one'), g.unshift({
                    type: 'main',
                    name: 'main',
                    groupId: 'main',
                    default: !1,
                    autoselect: !1,
                    forced: !1,
                    id: -1,
                    attrs: new C({}),
                    bitrate: 0,
                    url: ''
                }))
            }
            r.trigger(y.MANIFEST_LOADED, {
                levels: h,
                audioTracks: g,
                subtitles: m,
                captions: p,
                contentSteering: l,
                url: a,
                stats: e,
                networkDetails: i,
                sessionData: d,
                sessionKeys: c,
                startTimeOffset: u,
                variableList: f
            })
        }
        handleTrackOrLevelPlaylist(t, e, s, i, r) {
            const n = this.hls,
                {
                    id: a,
                    level: o,
                    type: l
                } = s,
                h = Ye(t, s),
                d = g(o) ? o : g(a) ? a : 0,
                c = Ve(s),
                u = we.parseLevelPlaylist(t.data, h, d, c, 0, this.variableList);
            if (l === Be) {
                const t = {
                    attrs: new C({}),
                    bitrate: 0,
                    details: u,
                    name: '',
                    url: h
                };
                n.trigger(y.MANIFEST_LOADED, {
                    levels: [t],
                    audioTracks: [],
                    url: h,
                    stats: e,
                    networkDetails: i,
                    sessionData: null,
                    sessionKeys: null,
                    contentSteering: null,
                    startTimeOffset: null,
                    variableList: null
                })
            }
            e.parsing.end = performance.now(), s.levelDetails = u, this.handlePlaylistLoaded(u, t, e, s, i, r)
        }
        handleManifestParsingError(t, e, s, i, r) {
            this.hls.trigger(y.ERROR, {
                type: v.NETWORK_ERROR,
                details: E.MANIFEST_PARSING_ERROR,
                fatal: e.type === Be,
                url: t.url,
                err: s,
                error: s,
                reason: s.message,
                response: t,
                context: e,
                networkDetails: i,
                stats: r
            })
        }
        handleNetworkError(t, e, s = !1, i, r) {
            let n = `A network ${s?'timeout':'error'+(i?' (status '+i.code+')':'')} occurred while loading ${t.type}`;
            t.type === $e ? n += `: ${t.level} id: ${t.id}` : t.type !== Ge && t.type !== Ke || (n += ` id: ${t.id} group-id: "${t.groupId}"`);
            const a = new Error(n);
            D.warn(`[playlist-loader]: ${n}`);
            let o = E.UNKNOWN,
                l = !1;
            const h = this.getInternalLoader(t);
            switch (t.type) {
                case Be:
                    o = s ? E.MANIFEST_LOAD_TIMEOUT : E.MANIFEST_LOAD_ERROR, l = !0;
                    break;
                case $e:
                    o = s ? E.LEVEL_LOAD_TIMEOUT : E.LEVEL_LOAD_ERROR, l = !1;
                    break;
                case Ge:
                    o = s ? E.AUDIO_TRACK_LOAD_TIMEOUT : E.AUDIO_TRACK_LOAD_ERROR, l = !1;
                    break;
                case Ke:
                    o = s ? E.SUBTITLE_TRACK_LOAD_TIMEOUT : E.SUBTITLE_LOAD_ERROR, l = !1
            }
            h && this.resetInternalLoader(t.type);
            const c = {
                type: v.NETWORK_ERROR,
                details: o,
                fatal: l,
                url: t.url,
                loader: h,
                context: t,
                error: a,
                networkDetails: e,
                stats: r
            };
            if (i) {
                const s = (null == e ? void 0 : e.url) || t.url;
                c.response = d({
                    url: s,
                    data: void 0
                }, i)
            }
            this.hls.trigger(y.ERROR, c)
        }
        handlePlaylistLoaded(t, e, s, i, r, n) {
            const a = this.hls,
                {
                    type: o,
                    level: l,
                    id: h,
                    groupId: d,
                    deliveryDirectives: c
                } = i,
                u = Ye(e, i),
                f = Ve(i),
                g = 'number' == typeof i.level && f === He.MAIN ? l : void 0;
            if (!t.fragments.length) {
                const t = new Error('No Segments found in Playlist');
                return void a.trigger(y.ERROR, {
                    type: v.NETWORK_ERROR,
                    details: E.LEVEL_EMPTY_ERROR,
                    fatal: !1,
                    url: u,
                    error: t,
                    reason: t.message,
                    response: e,
                    context: i,
                    level: g,
                    parent: f,
                    networkDetails: r,
                    stats: s
                })
            }
            t.targetduration || (t.playlistParsingError = new Error('Missing Target Duration'));
            const m = t.playlistParsingError;
            if (m) a.trigger(y.ERROR, {
                type: v.NETWORK_ERROR,
                details: E.LEVEL_PARSING_ERROR,
                fatal: !1,
                url: u,
                error: m,
                reason: m.message,
                response: e,
                context: i,
                level: g,
                parent: f,
                networkDetails: r,
                stats: s
            });
            else switch (t.live && n && (n.getCacheAge && (t.ageHeader = n.getCacheAge() || 0), n.getCacheAge && !isNaN(t.ageHeader) || (t.ageHeader = 0)), o) {
                case Be:
                case $e:
                    a.trigger(y.LEVEL_LOADED, {
                        details: t,
                        level: g || 0,
                        id: h || 0,
                        stats: s,
                        networkDetails: r,
                        deliveryDirectives: c
                    });
                    break;
                case Ge:
                    a.trigger(y.AUDIO_TRACK_LOADED, {
                        details: t,
                        id: h || 0,
                        groupId: d || '',
                        stats: s,
                        networkDetails: r,
                        deliveryDirectives: c
                    });
                    break;
                case Ke:
                    a.trigger(y.SUBTITLE_TRACK_LOADED, {
                        details: t,
                        id: h || 0,
                        groupId: d || '',
                        stats: s,
                        networkDetails: r,
                        deliveryDirectives: c
                    })
            }
        }
    }

    function je(t, e) {
        let s;
        try {
            s = new Event('addtrack')
        } catch (t) {
            s = document.createEvent('Event'), s.initEvent('addtrack', !1, !1)
        }
        s.track = t, e.dispatchEvent(s)
    }

    function qe(t, e) {
        const s = t.mode;
        if ('disabled' === s && (t.mode = 'hidden'), t.cues && !t.cues.getCueById(e.id)) try {
            if (t.addCue(e), !t.cues.getCueById(e.id)) throw new Error(`addCue is failed for: ${e}`)
        } catch (s) {
            D.debug(`[texttrack-utils]: ${s}`);
            try {
                const s = new self.TextTrackCue(e.startTime, e.endTime, e.text);
                s.id = e.id, t.addCue(s)
            } catch (t) {
                D.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${t}`)
            }
        }
        'disabled' === s && (t.mode = s)
    }

    function Xe(t) {
        const e = t.mode;
        if ('disabled' === e && (t.mode = 'hidden'), t.cues)
            for (let e = t.cues.length; e--;) t.removeCue(t.cues[e]);
        'disabled' === e && (t.mode = e)
    }

    function ze(t, e, s, i) {
        const r = t.mode;
        if ('disabled' === r && (t.mode = 'hidden'), t.cues && t.cues.length > 0) {
            const r = Je(t.cues, e, s);
            for (let e = 0; e < r.length; e++) i && !i(r[e]) || t.removeCue(r[e])
        }
        'disabled' === r && (t.mode = r)
    }

    function Qe(t, e) {
        if (e < t[0].startTime) return 0;
        const s = t.length - 1;
        if (e > t[s].endTime) return -1;
        let i = 0,
            r = s;
        for (; i <= r;) {
            const n = Math.floor((r + i) / 2);
            if (e < t[n].startTime) r = n - 1;
            else {
                if (!(e > t[n].startTime && i < s)) return n;
                i = n + 1
            }
        }
        return t[i].startTime - e < e - t[r].startTime ? i : r
    }

    function Je(t, e, s) {
        const i = [],
            r = Qe(t, e);
        if (r > -1)
            for (let n = r, a = t.length; n < a; n++) {
                const r = t[n];
                if (r.startTime >= e && r.endTime <= s) i.push(r);
                else if (r.startTime > s) return i
            }
        return i
    }

    function Ze(t) {
        const e = [];
        for (let s = 0; s < t.length; s++) {
            const i = t[s];
            'subtitles' !== i.kind && 'captions' !== i.kind || !i.label || e.push(t[s])
        }
        return e
    }
    var ts = n.MetadataSchema = {
        audioId3: "org.id3",
        dateRange: "com.apple.quicktime.HLS",
        emsg: "https://aomedia.org/emsg/ID3"
    };

    function es() {
        if ('undefined' != typeof self) return self.VTTCue || self.TextTrackCue
    }

    function ss(t, e, s, i, r) {
        let n = new t(e, s, '');
        try {
            n.value = i, r && (n.type = r)
        } catch (a) {
            n = new t(e, s, JSON.stringify(r ? d({
                type: r
            }, i) : i))
        }
        return n
    }
    const is = (() => {
        const t = es();
        try {
            t && new t(0, Number.POSITIVE_INFINITY, '')
        } catch (t) {
            return Number.MAX_VALUE
        }
        return Number.POSITIVE_INFINITY
    })();

    function rs(t, e) {
        return t.getTime() / 1e3 - e
    }
    class ns {
        constructor(t) {
            this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = t, this._registerListeners()
        }
        destroy() {
            this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null
        }
        _registerListeners() {
            const {
                hls: t
            } = this;
            t.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(y.MANIFEST_LOADING, this.onManifestLoading, this), t.on(y.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(y.LEVEL_UPDATED, this.onLevelUpdated, this)
        }
        _unregisterListeners() {
            const {
                hls: t
            } = this;
            t.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(y.MANIFEST_LOADING, this.onManifestLoading, this), t.off(y.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(y.LEVEL_UPDATED, this.onLevelUpdated, this)
        }
        onMediaAttached(t, e) {
            this.media = e.media
        }
        onMediaDetaching() {
            this.id3Track && (Xe(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {})
        }
        onManifestLoading() {
            this.dateRangeCuesAppended = {}
        }
        createTrack(t) {
            const e = this.getID3Track(t.textTracks);
            return e.mode = 'hidden', e
        }
        getID3Track(t) {
            if (this.media) {
                for (let e = 0; e < t.length; e++) {
                    const s = t[e];
                    if ('metadata' === s.kind && 'id3' === s.label) return je(s, this.media), s
                }
                return this.media.addTextTrack('metadata', 'id3')
            }
        }
        onFragParsingMetadata(t, e) {
            if (!this.media) return;
            const {
                hls: {
                    config: {
                        enableEmsgMetadataCues: s,
                        enableID3MetadataCues: i
                    }
                }
            } = this;
            if (!s && !i) return;
            const {
                samples: r
            } = e;
            this.id3Track || (this.id3Track = this.createTrack(this.media));
            const n = es();
            if (n)
                for (let t = 0; t < r.length; t++) {
                    const e = r[t].type;
                    if (e === ts.emsg && !s || !i) continue;
                    const a = ut(r[t].data);
                    if (a) {
                        const s = r[t].pts;
                        let i = s + r[t].duration;
                        i > is && (i = is);
                        i - s <= 0 && (i = s + .25);
                        for (let t = 0; t < a.length; t++) {
                            const r = a[t];
                            if (!dt(r)) {
                                this.updateId3CueEnds(s, e);
                                const t = ss(n, s, i, r, e);
                                t && this.id3Track.addCue(t)
                            }
                        }
                    }
                }
        }
        updateId3CueEnds(t, e) {
            var s;
            const i = null == (s = this.id3Track) ? void 0 : s.cues;
            if (i)
                for (let s = i.length; s--;) {
                    const r = i[s];
                    r.type === e && r.startTime < t && r.endTime === is && (r.endTime = t)
                }
        }
        onBufferFlushing(t, {
            startOffset: e,
            endOffset: s,
            type: i
        }) {
            const {
                id3Track: r,
                hls: n
            } = this;
            if (!n) return;
            const {
                config: {
                    enableEmsgMetadataCues: a,
                    enableID3MetadataCues: o
                }
            } = n;
            if (r && (a || o)) {
                let t;
                t = 'audio' === i ? t => t.type === ts.audioId3 && o : 'video' === i ? t => t.type === ts.emsg && a : t => t.type === ts.audioId3 && o || t.type === ts.emsg && a, ze(r, e, s, t)
            }
        }
        onLevelUpdated(t, {
            details: e
        }) {
            if (!this.media || !e.hasProgramDateTime || !this.hls.config.enableDateRangeMetadataCues) return;
            const {
                dateRangeCuesAppended: s,
                id3Track: i
            } = this, {
                dateRanges: r
            } = e, n = Object.keys(r);
            if (i) {
                const t = Object.keys(s).filter((t => !n.includes(t)));
                for (let e = t.length; e--;) {
                    const r = t[e];
                    Object.keys(s[r].cues).forEach((t => {
                        i.removeCue(s[r].cues[t])
                    })), delete s[r]
                }
            }
            const a = e.fragments[e.fragments.length - 1];
            if (0 === n.length || !g(null == a ? void 0 : a.programDateTime)) return;
            this.id3Track || (this.id3Track = this.createTrack(this.media));
            const o = a.programDateTime / 1e3 - a.start,
                l = es();
            for (let t = 0; t < n.length; t++) {
                const e = n[t],
                    i = r[e],
                    a = rs(i.startDate, o),
                    c = s[e],
                    u = (null == c ? void 0 : c.cues) || {};
                let f = (null == c ? void 0 : c.durationKnown) || !1,
                    g = is;
                const m = i.endDate;
                if (m) g = rs(m, o), f = !0;
                else if (i.endOnNext && !f) {
                    const t = n.reduce(((t, e) => {
                        if (e !== i.id) {
                            const s = r[e];
                            if (s.class === i.class && s.startDate > i.startDate && (!t || i.startDate < t.startDate)) return s
                        }
                        return t
                    }), null);
                    t && (g = rs(t.startDate, o), f = !0)
                }
                const p = Object.keys(i.attr);
                for (let t = 0; t < p.length; t++) {
                    const s = p[t];
                    if ("ID" === (d = s) || "CLASS" === d || "START-DATE" === d || "DURATION" === d || "END-DATE" === d || "END-ON-NEXT" === d) continue;
                    const r = u[s];
                    if (r) f && !c.durationKnown && (r.endTime = g);
                    else if (l) {
                        let t = i.attr[s];
                        w(s) && (h = t, t = Uint8Array.from(h.replace(/^0x/, '').replace(/([\da-fA-F]{2}) ?/g, '0x$1 ').replace(/ +$/, '').split(' ')).buffer);
                        const r = ss(l, a, g, {
                            key: s,
                            data: t
                        }, ts.dateRange);
                        r && (r.id = e, this.id3Track.addCue(r), u[s] = r)
                    }
                }
                s[e] = {
                    cues: u,
                    dateRange: i,
                    durationKnown: f
                }
            }
            var h, d
        }
    }
    class as {
        constructor(t) {
            this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = () => this.timeupdate(), this.hls = t, this.config = t.config, this.registerListeners()
        }
        get latency() {
            return this._latency || 0
        }
        get maxLatency() {
            const {
                config: t,
                levelDetails: e
            } = this;
            return void 0 !== t.liveMaxLatencyDuration ? t.liveMaxLatencyDuration : e ? t.liveMaxLatencyDurationCount * e.targetduration : 0
        }
        get targetLatency() {
            const {
                levelDetails: t
            } = this;
            if (null === t) return null;
            const {
                holdBack: e,
                partHoldBack: s,
                targetduration: i
            } = t, {
                liveSyncDuration: r,
                liveSyncDurationCount: n,
                lowLatencyMode: a
            } = this.config, o = this.hls.userConfig;
            let l = a && s || e;
            (o.liveSyncDuration || o.liveSyncDurationCount || 0 === l) && (l = void 0 !== r ? r : n * i);
            const h = i;
            return l + Math.min(1 * this.stallCount, h)
        }
        get liveSyncPosition() {
            const t = this.estimateLiveEdge(),
                e = this.targetLatency,
                s = this.levelDetails;
            if (null === t || null === e || null === s) return null;
            const i = s.edge,
                r = t - e - this.edgeStalled,
                n = i - s.totalduration,
                a = i - (this.config.lowLatencyMode && s.partTarget || s.targetduration);
            return Math.min(Math.max(n, r), a)
        }
        get drift() {
            const {
                levelDetails: t
            } = this;
            return null === t ? 1 : t.drift
        }
        get edgeStalled() {
            const {
                levelDetails: t
            } = this;
            if (null === t) return 0;
            const e = 3 * (this.config.lowLatencyMode && t.partTarget || t.targetduration);
            return Math.max(t.age - e, 0)
        }
        get forwardBufferLength() {
            const {
                media: t,
                levelDetails: e
            } = this;
            if (!t || !e) return 0;
            const s = t.buffered.length;
            return (s ? t.buffered.end(s - 1) : e.edge) - this.currentTime
        }
        destroy() {
            this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null
        }
        registerListeners() {
            this.hls.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(y.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(y.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(y.ERROR, this.onError, this)
        }
        unregisterListeners() {
            this.hls.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.off(y.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(y.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.off(y.ERROR, this.onError, this)
        }
        onMediaAttached(t, e) {
            this.media = e.media, this.media.addEventListener('timeupdate', this.timeupdateHandler)
        }
        onMediaDetaching() {
            this.media && (this.media.removeEventListener('timeupdate', this.timeupdateHandler), this.media = null)
        }
        onManifestLoading() {
            this.levelDetails = null, this._latency = null, this.stallCount = 0
        }
        onLevelUpdated(t, {
            details: e
        }) {
            this.levelDetails = e, e.advanced && this.timeupdate(), !e.live && this.media && this.media.removeEventListener('timeupdate', this.timeupdateHandler)
        }
        onError(t, e) {
            var s;
            e.details === E.BUFFER_STALLED_ERROR && (this.stallCount++, null != (s = this.levelDetails) && s.live && D.warn('[playback-rate-controller]: Stall detected, adjusting target latency'))
        }
        timeupdate() {
            const {
                media: t,
                levelDetails: e
            } = this;
            if (!t || !e) return;
            this.currentTime = t.currentTime;
            const s = this.computeLatency();
            if (null === s) return;
            this._latency = s;
            const {
                lowLatencyMode: i,
                maxLiveSyncPlaybackRate: r
            } = this.config;
            if (!i || 1 === r || !e.live) return;
            const n = this.targetLatency;
            if (null === n) return;
            const a = s - n;
            if (a < Math.min(this.maxLatency, n + e.targetduration) && a > .05 && this.forwardBufferLength > 1) {
                const e = Math.min(2, Math.max(1, r)),
                    s = Math.round(2 / (1 + Math.exp(-.75 * a - this.edgeStalled)) * 20) / 20;
                t.playbackRate = Math.min(e, Math.max(1, s))
            } else 1 !== t.playbackRate && 0 !== t.playbackRate && (t.playbackRate = 1)
        }
        estimateLiveEdge() {
            const {
                levelDetails: t
            } = this;
            return null === t ? null : t.edge + t.age
        }
        computeLatency() {
            const t = this.estimateLiveEdge();
            return null === t ? null : t - this.currentTime
        }
    }
    const os = ['NONE', 'TYPE-0', 'TYPE-1', null];

    function ls(t) {
        return os.indexOf(t) > -1
    }
    const hs = ['SDR', 'PQ', 'HLG'];
    var ds = n.HlsSkip = {
        No: "",
        Yes: "YES",
        v2: "v2"
    };

    function cs(t) {
        const {
            canSkipUntil: e,
            canSkipDateRanges: s,
            age: i
        } = t;
        return e && i < e / 2 ? s ? ds.v2 : ds.Yes : ds.No
    }
    class us {
        constructor(t, e, s) {
            this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = t, this.part = e, this.skip = s
        }
        addDirectives(t) {
            const e = new self.URL(t);
            return void 0 !== this.msn && e.searchParams.set('_HLS_msn', this.msn.toString()), void 0 !== this.part && e.searchParams.set('_HLS_part', this.part.toString()), this.skip && e.searchParams.set('_HLS_skip', this.skip), e.href
        }
    }
    n.HlsUrlParameters = us;
    class fs {
        constructor(t) {
            this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [t.url], this._attrs = [t.attrs], this.bitrate = t.bitrate, t.details && (this.details = t.details), this.id = t.id || 0, this.name = t.name, this.width = t.width || 0, this.height = t.height || 0, this.frameRate = t.attrs.optionalFloat('FRAME-RATE', 0), this._avgBitrate = t.attrs.decimalInteger('AVERAGE-BANDWIDTH'), this.audioCodec = t.audioCodec, this.videoCodec = t.videoCodec, this.codecSet = [t.videoCodec, t.audioCodec].filter((t => !!t)).map((t => t.substring(0, 4))).join(','), this.addGroupId('audio', t.attrs.AUDIO), this.addGroupId('text', t.attrs.SUBTITLES)
        }
        get maxBitrate() {
            return Math.max(this.realBitrate, this.bitrate)
        }
        get averageBitrate() {
            return this._avgBitrate || this.realBitrate || this.bitrate
        }
        get attrs() {
            return this._attrs[0]
        }
        get codecs() {
            return this.attrs.CODECS || ''
        }
        get pathwayId() {
            return this.attrs['PATHWAY-ID'] || '.'
        }
        get videoRange() {
            return this.attrs['VIDEO-RANGE'] || 'SDR'
        }
        get score() {
            return this.attrs.optionalFloat('SCORE', 0)
        }
        get uri() {
            return this.url[0] || ''
        }
        hasAudioGroup(t) {
            return gs(this._audioGroups, t)
        }
        hasSubtitleGroup(t) {
            return gs(this._subtitleGroups, t)
        }
        get audioGroups() {
            return this._audioGroups
        }
        get subtitleGroups() {
            return this._subtitleGroups
        }
        addGroupId(t, e) {
            if (e)
                if ('audio' === t) {
                    let t = this._audioGroups;
                    t || (t = this._audioGroups = []), -1 === t.indexOf(e) && t.push(e)
                } else if ('text' === t) {
                let t = this._subtitleGroups;
                t || (t = this._subtitleGroups = []), -1 === t.indexOf(e) && t.push(e)
            }
        }
        get urlId() {
            return 0
        }
        set urlId(t) {}
        get audioGroupIds() {
            return this.audioGroups ? [this.audioGroupId] : void 0
        }
        get textGroupIds() {
            return this.subtitleGroups ? [this.textGroupId] : void 0
        }
        get audioGroupId() {
            var t;
            return null == (t = this.audioGroups) ? void 0 : t[0]
        }
        get textGroupId() {
            var t;
            return null == (t = this.subtitleGroups) ? void 0 : t[0]
        }
        addFallback() {}
    }

    function gs(t, e) {
        return !(!e || !t) && -1 !== t.indexOf(e)
    }

    function ms(t, e) {
        const s = e.startPTS;
        if (g(s)) {
            let i, r = 0;
            e.sn > t.sn ? (r = s - t.start, i = t) : (r = t.start - s, i = e), i.duration !== r && (i.duration = r)
        } else if (e.sn > t.sn) {
            t.cc === e.cc && t.minEndPTS ? e.start = t.start + (t.minEndPTS - t.start) : e.start = t.start + t.duration
        } else e.start = Math.max(t.start - e.duration, 0)
    }

    function ps(t, e, s, i, r, n) {
        i - s <= 0 && (D.warn('Fragment should have a positive duration', e), i = s + e.duration, n = r + e.duration);
        let a = s,
            o = i;
        const l = e.startPTS,
            h = e.endPTS;
        if (g(l)) {
            const t = Math.abs(l - s);
            g(e.deltaPTS) ? e.deltaPTS = Math.max(t, e.deltaPTS) : e.deltaPTS = t, a = Math.max(s, l), s = Math.min(s, l), r = Math.min(r, e.startDTS), o = Math.min(i, h), i = Math.max(i, h), n = Math.max(n, e.endDTS)
        }
        const d = s - e.start;
        0 !== e.start && (e.start = s), e.duration = i - e.start, e.startPTS = s, e.maxStartPTS = a, e.startDTS = r, e.endPTS = i, e.minEndPTS = o, e.endDTS = n;
        const c = e.sn;
        if (!t || c < t.startSN || c > t.endSN) return 0;
        let u;
        const f = c - t.startSN,
            m = t.fragments;
        for (m[f] = e, u = f; u > 0; u--) ms(m[u], m[u - 1]);
        for (u = f; u < m.length - 1; u++) ms(m[u], m[u + 1]);
        return t.fragmentHint && ms(m[m.length - 1], t.fragmentHint), t.PTSKnown = t.alignedSliding = !0, d
    }

    function ys(t, e) {
        let s = null;
        const i = t.fragments;
        for (let t = i.length - 1; t >= 0; t--) {
            const e = i[t].initSegment;
            if (e) {
                s = e;
                break
            }
        }
        t.fragmentHint && delete t.fragmentHint.endPTS;
        let r, n = 0;
        if (Ts(t, e, ((t, i) => {
                t.relurl && (n = t.cc - i.cc), g(t.startPTS) && g(t.endPTS) && (i.start = i.startPTS = t.startPTS, i.startDTS = t.startDTS, i.maxStartPTS = t.maxStartPTS, i.endPTS = t.endPTS, i.endDTS = t.endDTS, i.minEndPTS = t.minEndPTS, i.duration = t.endPTS - t.startPTS, i.duration && (r = i), e.PTSKnown = e.alignedSliding = !0), i.elementaryStreams = t.elementaryStreams, i.loader = t.loader, i.stats = t.stats, t.initSegment && (i.initSegment = t.initSegment, s = t.initSegment)
            })), s) {
            (e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments).forEach((t => {
                var e;
                !t || t.initSegment && t.initSegment.relurl !== (null == (e = s) ? void 0 : e.relurl) || (t.initSegment = s)
            }))
        }
        if (e.skippedSegments)
            if (e.deltaUpdateFailed = e.fragments.some((t => !t)), e.deltaUpdateFailed) {
                D.warn('[level-helper] Previous playlist missing segments skipped in delta playlist');
                for (let t = e.skippedSegments; t--;) e.fragments.shift();
                e.startSN = e.fragments[0].sn, e.startCC = e.fragments[0].cc
            } else e.canSkipDateRanges && (e.dateRanges = vs(t.dateRanges, e.dateRanges, e.recentlyRemovedDateranges));
        const a = e.fragments;
        if (n) {
            D.warn('discontinuity sliding from playlist, take drift into account');
            for (let t = 0; t < a.length; t++) a[t].cc += n
        }
        e.skippedSegments && (e.startCC = e.fragments[0].cc), Es(t.partList, e.partList, ((t, e) => {
            e.elementaryStreams = t.elementaryStreams, e.stats = t.stats
        })), r ? ps(e, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : Ss(t, e), a.length && (e.totalduration = e.edge - a[0].start), e.driftStartTime = t.driftStartTime, e.driftStart = t.driftStart;
        const o = e.advancedDateTime;
        if (e.advanced && o) {
            const t = e.edge;
            e.driftStart || (e.driftStartTime = o, e.driftStart = t), e.driftEndTime = o, e.driftEnd = t
        } else e.driftEndTime = t.driftEndTime, e.driftEnd = t.driftEnd, e.advancedDateTime = t.advancedDateTime
    }

    function vs(t, e, s) {
        const i = f({}, t);
        return s && s.forEach((t => {
            delete i[t]
        })), Object.keys(e).forEach((t => {
            const s = new _(e[t].attr, i[t]);
            s.isValid ? i[t] = s : D.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(e[t].attr)}"`)
        })), i
    }

    function Es(t, e, s) {
        if (t && e) {
            let i = 0;
            for (let r = 0, n = t.length; r <= n; r++) {
                const n = t[r],
                    a = e[r + i];
                n && a && n.index === a.index && n.fragment.sn === a.fragment.sn ? s(n, a) : i--
            }
        }
    }

    function Ts(t, e, s) {
        const i = e.skippedSegments,
            r = Math.max(t.startSN, e.startSN) - e.startSN,
            n = (t.fragmentHint ? 1 : 0) + (i ? e.endSN : Math.min(t.endSN, e.endSN)) - e.startSN,
            a = e.startSN - t.startSN,
            o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments,
            l = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments;
        for (let t = r; t <= n; t++) {
            const r = l[a + t];
            let n = o[t];
            i && !n && t < i && (n = e.fragments[t] = r), r && n && s(r, n)
        }
    }

    function Ss(t, e) {
        const s = e.startSN + e.skippedSegments - t.startSN,
            i = t.fragments;
        s < 0 || s >= i.length || Ls(e, i[s].start)
    }

    function Ls(t, e) {
        if (e) {
            const s = t.fragments;
            for (let i = t.skippedSegments; i < s.length; i++) s[i].start += e;
            t.fragmentHint && (t.fragmentHint.start += e)
        }
    }

    function As(t, e = 1 / 0) {
        let s = 1e3 * t.targetduration;
        if (t.updated) {
            const i = t.fragments,
                r = 4;
            if (i.length && s * r > e) {
                const t = 1e3 * i[i.length - 1].duration;
                t < s && (s = t)
            }
        } else s /= 2;
        return Math.round(s)
    }

    function Rs(t, e, s) {
        if (null == t || !t.details) return null;
        const i = t.details;
        let r = i.fragments[e - i.startSN];
        return r || (r = i.fragmentHint, r && r.sn === e ? r : e < i.startSN && s && s.sn === e ? s : null)
    }

    function bs(t, e, s) {
        var i;
        return null != t && t.details ? Ds(null == (i = t.details) ? void 0 : i.partList, e, s) : null
    }

    function Ds(t, e, s) {
        if (t)
            for (let i = t.length; i--;) {
                const r = t[i];
                if (r.index === s && r.fragment.sn === e) return r
            }
        return null
    }

    function ks(t) {
        t.forEach(((t, e) => {
            const {
                details: s
            } = t;
            null != s && s.fragments && s.fragments.forEach((t => {
                t.level = e
            }))
        }))
    }

    function Is(t) {
        switch (t.details) {
            case E.FRAG_LOAD_TIMEOUT:
            case E.KEY_LOAD_TIMEOUT:
            case E.LEVEL_LOAD_TIMEOUT:
            case E.MANIFEST_LOAD_TIMEOUT:
                return !0
        }
        return !1
    }

    function Cs(t, e) {
        const s = Is(e);
        return t.default[(s ? 'timeout' : 'error') + "Retry"]
    }

    function ws(t, e) {
        const s = 'linear' === t.backoff ? 1 : Math.pow(2, e);
        return Math.min(s * t.retryDelayMs, t.maxRetryDelayMs)
    }

    function _s(t) {
        return d(d({}, t), {
            errorRetry: null,
            timeoutRetry: null
        })
    }

    function xs(t, e, s, i) {
        if (!t) return !1;
        const r = null == i ? void 0 : i.code,
            n = e < t.maxNumRetry && (Ps(r) || !!s);
        return t.shouldRetry ? t.shouldRetry(t, e, s, i, n) : n
    }

    function Ps(t) {
        return 0 === t && !1 === navigator.onLine || !!t && (t < 400 || t > 499)
    }
    n.Level = fs;
    const Ms = function(t, e) {
        let s = 0,
            i = t.length - 1,
            r = null,
            n = null;
        for (; s <= i;) {
            r = (s + i) / 2 | 0, n = t[r];
            const a = e(n);
            if (a > 0) s = r + 1;
            else {
                if (!(a < 0)) return n;
                i = r - 1
            }
        }
        return null
    };

    function Fs(t, e, s) {
        if (null === e || !Array.isArray(t) || !t.length || !g(e)) return null;
        if (e < (t[0].programDateTime || 0)) return null;
        if (e >= (t[t.length - 1].endProgramDateTime || 0)) return null;
        s = s || 0;
        for (let i = 0; i < t.length; ++i) {
            const r = t[i];
            if (Us(e, s, r)) return r
        }
        return null
    }

    function Os(t, e, s = 0, i = 0) {
        let r = null;
        if (t) {
            r = e[t.sn - e[0].sn + 1] || null;
            const i = t.endDTS - s;
            i > 0 && i < 15e-7 && (s += 15e-7)
        } else 0 === s && 0 === e[0].start && (r = e[0]);
        if (r && (!t || t.level === r.level) && 0 === Ns(s, i, r)) return r;
        const n = Ms(e, Ns.bind(null, s, i));
        return !n || n === t && r ? r : n
    }

    function Ns(t = 0, e = 0, s) {
        if (s.start <= t && s.start + s.duration > t) return 0;
        const i = Math.min(e, s.duration + (s.deltaPTS ? s.deltaPTS : 0));
        return s.start + s.duration - i <= t ? 1 : s.start - i > t && s.start ? -1 : 0
    }

    function Us(t, e, s) {
        const i = 1e3 * Math.min(e, s.duration + (s.deltaPTS ? s.deltaPTS : 0));
        return (s.endProgramDateTime || 0) - i > t
    }

    function Bs(t, e) {
        return Ms(t, (t => t.cc < e ? 1 : t.cc > e ? -1 : 0))
    }
    var $s = n.NetworkErrorAction = {
            DoNothing: 0,
            SendEndCallback: 1,
            SendAlternateToPenaltyBox: 2,
            RemoveAlternatePermanently: 3,
            InsertDiscontinuity: 4,
            RetryRequest: 5
        },
        Gs = n.ErrorActionFlags = {
            None: 0,
            MoveAllAlternatesMatchingHost: 1,
            MoveAllAlternatesMatchingHDCP: 2,
            SwitchToSDR: 4
        };
    class Ks {
        constructor(t) {
            this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.log = void 0, this.warn = void 0, this.error = void 0, this.hls = t, this.log = D.log.bind(D, "[info]:"), this.warn = D.warn.bind(D, "[warning]:"), this.error = D.error.bind(D, "[error]:"), this.registerListeners()
        }
        registerListeners() {
            const t = this.hls;
            t.on(y.ERROR, this.onError, this), t.on(y.MANIFEST_LOADING, this.onManifestLoading, this), t.on(y.LEVEL_UPDATED, this.onLevelUpdated, this)
        }
        unregisterListeners() {
            const t = this.hls;
            t && (t.off(y.ERROR, this.onError, this), t.off(y.ERROR, this.onErrorOut, this), t.off(y.MANIFEST_LOADING, this.onManifestLoading, this), t.off(y.LEVEL_UPDATED, this.onLevelUpdated, this))
        }
        destroy() {
            this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {}
        }
        startLoad(t) {}
        stopLoad() {
            this.playlistError = 0
        }
        getVariantLevelIndex(t) {
            return (null == t ? void 0 : t.type) === He.MAIN ? t.level : this.hls.loadLevel
        }
        onManifestLoading() {
            this.playlistError = 0, this.penalizedRenditions = {}
        }
        onLevelUpdated() {
            this.playlistError = 0
        }
        onError(t, e) {
            var s, i;
            if (e.fatal) return;
            const r = this.hls,
                n = e.context;
            switch (e.details) {
                case E.FRAG_LOAD_ERROR:
                case E.FRAG_LOAD_TIMEOUT:
                case E.KEY_LOAD_ERROR:
                case E.KEY_LOAD_TIMEOUT:
                    return void(e.errorAction = this.getFragRetryOrSwitchAction(e));
                case E.FRAG_PARSING_ERROR:
                    if (null != (s = e.frag) && s.gap) return void(e.errorAction = {
                        action: $s.DoNothing,
                        flags: Gs.None
                    });
                case E.FRAG_GAP:
                case E.FRAG_DECRYPT_ERROR:
                    return e.errorAction = this.getFragRetryOrSwitchAction(e), void(e.errorAction.action = $s.SendAlternateToPenaltyBox);
                case E.LEVEL_EMPTY_ERROR:
                case E.LEVEL_PARSING_ERROR:
                    {
                        var a, o;
                        const t = e.parent === He.MAIN ? e.level : r.loadLevel;e.details === E.LEVEL_EMPTY_ERROR && null != (a = e.context) && null != (o = a.levelDetails) && o.live ? e.errorAction = this.getPlaylistRetryOrSwitchAction(e, t) : (e.levelRetry = !1, e.errorAction = this.getLevelSwitchAction(e, t))
                    }
                    return;
                case E.LEVEL_LOAD_ERROR:
                case E.LEVEL_LOAD_TIMEOUT:
                    return void('number' == typeof(null == n ? void 0 : n.level) && (e.errorAction = this.getPlaylistRetryOrSwitchAction(e, n.level)));
                case E.AUDIO_TRACK_LOAD_ERROR:
                case E.AUDIO_TRACK_LOAD_TIMEOUT:
                case E.SUBTITLE_LOAD_ERROR:
                case E.SUBTITLE_TRACK_LOAD_TIMEOUT:
                    if (n) {
                        const t = r.levels[r.loadLevel];
                        if (t && (n.type === Ge && t.hasAudioGroup(n.groupId) || n.type === Ke && t.hasSubtitleGroup(n.groupId))) return e.errorAction = this.getPlaylistRetryOrSwitchAction(e, r.loadLevel), e.errorAction.action = $s.SendAlternateToPenaltyBox, void(e.errorAction.flags = Gs.MoveAllAlternatesMatchingHost)
                    }
                    return;
                case E.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
                    {
                        const t = r.levels[r.loadLevel],
                            s = null == t ? void 0 : t.attrs['HDCP-LEVEL'];s ? e.errorAction = {
                            action: $s.SendAlternateToPenaltyBox,
                            flags: Gs.MoveAllAlternatesMatchingHDCP,
                            hdcpLevel: s
                        } : this.keySystemError(e)
                    }
                    return;
                case E.BUFFER_ADD_CODEC_ERROR:
                case E.REMUX_ALLOC_ERROR:
                case E.BUFFER_APPEND_ERROR:
                    return void(e.errorAction = this.getLevelSwitchAction(e, null != (i = e.level) ? i : r.loadLevel));
                case E.INTERNAL_EXCEPTION:
                case E.BUFFER_APPENDING_ERROR:
                case E.BUFFER_FULL_ERROR:
                case E.LEVEL_SWITCH_ERROR:
                case E.BUFFER_STALLED_ERROR:
                case E.BUFFER_SEEK_OVER_HOLE:
                case E.BUFFER_NUDGE_ON_STALL:
                    return void(e.errorAction = {
                        action: $s.DoNothing,
                        flags: Gs.None
                    })
            }
            e.type === v.KEY_SYSTEM_ERROR && this.keySystemError(e)
        }
        keySystemError(t) {
            const e = this.getVariantLevelIndex(t.frag);
            t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, e)
        }
        getPlaylistRetryOrSwitchAction(t, e) {
            const s = Cs(this.hls.config.playlistLoadPolicy, t),
                i = this.playlistError++;
            if (xs(s, i, Is(t), t.response)) return {
                action: $s.RetryRequest,
                flags: Gs.None,
                retryConfig: s,
                retryCount: i
            };
            const r = this.getLevelSwitchAction(t, e);
            return s && (r.retryConfig = s, r.retryCount = i), r
        }
        getFragRetryOrSwitchAction(t) {
            const e = this.hls,
                s = this.getVariantLevelIndex(t.frag),
                i = e.levels[s],
                {
                    fragLoadPolicy: r,
                    keyLoadPolicy: n
                } = e.config,
                a = Cs(t.details.startsWith('key') ? n : r, t),
                o = e.levels.reduce(((t, e) => t + e.fragmentError), 0);
            if (i) {
                t.details !== E.FRAG_GAP && i.fragmentError++;
                if (xs(a, o, Is(t), t.response)) return {
                    action: $s.RetryRequest,
                    flags: Gs.None,
                    retryConfig: a,
                    retryCount: o
                }
            }
            const l = this.getLevelSwitchAction(t, s);
            return a && (l.retryConfig = a, l.retryCount = o), l
        }
        getLevelSwitchAction(t, e) {
            const s = this.hls;
            null == e && (e = s.loadLevel);
            const i = this.hls.levels[e];
            if (i) {
                var r, n;
                const e = t.details;
                i.loadError++, e === E.BUFFER_APPEND_ERROR && i.fragmentError++;
                let l = -1;
                const {
                    levels: h,
                    loadLevel: d,
                    minAutoLevel: c,
                    maxAutoLevel: u
                } = s;
                s.autoLevelEnabled || (s.loadLevel = -1);
                const f = null == (r = t.frag) ? void 0 : r.type,
                    g = (f === He.AUDIO && e === E.FRAG_PARSING_ERROR || 'audio' === t.sourceBufferName && (e === E.BUFFER_ADD_CODEC_ERROR || e === E.BUFFER_APPEND_ERROR)) && h.some((({
                        audioCodec: t
                    }) => i.audioCodec !== t)),
                    m = 'video' === t.sourceBufferName && (e === E.BUFFER_ADD_CODEC_ERROR || e === E.BUFFER_APPEND_ERROR) && h.some((({
                        codecSet: t,
                        audioCodec: e
                    }) => i.codecSet !== t && i.audioCodec === e)),
                    {
                        type: p,
                        groupId: y
                    } = null != (n = t.context) ? n : {};
                for (let s = h.length; s--;) {
                    const r = (s + d) % h.length;
                    if (r !== d && r >= c && r <= u && 0 === h[r].loadError) {
                        var a, o;
                        const s = h[r];
                        if (e === E.FRAG_GAP && t.frag) {
                            const e = h[r].details;
                            if (e) {
                                const s = Os(t.frag, e.fragments, t.frag.start);
                                if (null != s && s.gap) continue
                            }
                        } else {
                            if (p === Ge && s.hasAudioGroup(y) || p === Ke && s.hasSubtitleGroup(y)) continue;
                            if (f === He.AUDIO && null != (a = i.audioGroups) && a.some((t => s.hasAudioGroup(t))) || f === He.SUBTITLE && null != (o = i.subtitleGroups) && o.some((t => s.hasSubtitleGroup(t))) || g && i.audioCodec === s.audioCodec || !g && i.audioCodec !== s.audioCodec || m && i.codecSet === s.codecSet) continue
                        }
                        l = r;
                        break
                    }
                }
                if (l > -1 && s.loadLevel !== l) return t.levelRetry = !0, this.playlistError = 0, {
                    action: $s.SendAlternateToPenaltyBox,
                    flags: Gs.None,
                    nextAutoLevel: l
                }
            }
            return {
                action: $s.SendAlternateToPenaltyBox,
                flags: Gs.MoveAllAlternatesMatchingHost
            }
        }
        onErrorOut(t, e) {
            var s;
            switch (null == (s = e.errorAction) ? void 0 : s.action) {
                case $s.DoNothing:
                    break;
                case $s.SendAlternateToPenaltyBox:
                    this.sendAlternateToPenaltyBox(e), e.errorAction.resolved || e.details === E.FRAG_GAP ? /MediaSource readyState: ended/.test(e.error.message) && (this.warn(`MediaSource ended after "${e.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`), this.hls.recoverMediaError()) : e.fatal = !0
            }
            e.fatal && this.hls.stopLoad()
        }
        sendAlternateToPenaltyBox(t) {
            const e = this.hls,
                s = t.errorAction;
            if (!s) return;
            const {
                flags: i,
                hdcpLevel: r,
                nextAutoLevel: n
            } = s;
            switch (i) {
                case Gs.None:
                    this.switchLevel(t, n);
                    break;
                case Gs.MoveAllAlternatesMatchingHDCP:
                    r && (e.maxHdcpLevel = os[os.indexOf(r) - 1], s.resolved = !0), this.warn(`Restricting playback to HDCP-LEVEL of "${e.maxHdcpLevel}" or lower`)
            }
            s.resolved || this.switchLevel(t, n)
        }
        switchLevel(t, e) {
            void 0 !== e && t.errorAction && (this.warn(`switching to level ${e} after ${t.details}`), this.hls.nextAutoLevel = e, t.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel)
        }
    }
    n.ErrorController = Ks;
    class Hs {
        constructor(t, e) {
            this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = !1, this.log = void 0, this.warn = void 0, this.log = D.log.bind(D, `${e}:`), this.warn = D.warn.bind(D, `${e}:`), this.hls = t
        }
        destroy() {
            this.clearTimer(), this.hls = this.log = this.warn = null
        }
        clearTimer() {
            -1 !== this.timer && (self.clearTimeout(this.timer), this.timer = -1)
        }
        startLoad() {
            this.canLoad = !0, this.requestScheduled = -1, this.loadPlaylist()
        }
        stopLoad() {
            this.canLoad = !1, this.clearTimer()
        }
        switchParams(t, e, s) {
            const i = null == e ? void 0 : e.renditionReports;
            if (i) {
                let r = -1;
                for (let s = 0; s < i.length; s++) {
                    const n = i[s];
                    let a;
                    try {
                        a = new self.URL(n.URI, e.url).href
                    } catch (t) {
                        D.warn(`Could not construct new URL for Rendition Report: ${t}`), a = n.URI || ''
                    }
                    if (a === t) {
                        r = s;
                        break
                    }
                    a === t.substring(0, a.length) && (r = s)
                }
                if (-1 !== r) {
                    const t = i[r],
                        n = parseInt(t['LAST-MSN']) || (null == e ? void 0 : e.lastPartSn);
                    let a = parseInt(t['LAST-PART']) || (null == e ? void 0 : e.lastPartIndex);
                    if (this.hls.config.lowLatencyMode) {
                        const t = Math.min(e.age - e.partTarget, e.targetduration);
                        a >= 0 && t > e.partTarget && (a += 1)
                    }
                    const o = s && cs(s);
                    return new us(n, a >= 0 ? a : void 0, o)
                }
            }
        }
        loadPlaylist(t) {
            -1 === this.requestScheduled && (this.requestScheduled = self.performance.now())
        }
        shouldLoadPlaylist(t) {
            return this.canLoad && !!t && !!t.url && (!t.details || t.details.live)
        }
        shouldReloadPlaylist(t) {
            return -1 === this.timer && -1 === this.requestScheduled && this.shouldLoadPlaylist(t)
        }
        playlistLoaded(t, e, s) {
            const {
                details: i,
                stats: r
            } = e, n = self.performance.now(), a = r.loading.first ? Math.max(0, n - r.loading.first) : 0;
            if (i.advancedDateTime = Date.now() - a, i.live || null != s && s.live) {
                if (i.reloaded(s), s && this.log(`live playlist ${t} ${i.advanced?'REFRESHED '+i.lastPartSn+'-'+i.lastPartIndex:i.updated?'UPDATED':'MISSED'}`), s && i.fragments.length > 0 && ys(s, i), !this.canLoad || !i.live) return;
                let a, o, l;
                if (i.canBlockReload && i.endSN && i.advanced) {
                    const t = this.hls.config.lowLatencyMode,
                        r = i.lastPartSn,
                        n = i.endSN,
                        h = i.lastPartIndex,
                        d = r === n; - 1 !== h ? (o = d ? n + 1 : r, l = d ? t ? 0 : h : h + 1) : o = n + 1;
                    const c = i.age,
                        u = c + i.ageHeader;
                    let f = Math.min(u - i.partTarget, 1.5 * i.targetduration);
                    if (f > 0) {
                        if (s && f > s.tuneInGoal) this.warn(`CDN Tune-in goal increased from: ${s.tuneInGoal} to: ${f} with playlist age: ${i.age}`), f = 0;
                        else {
                            const t = Math.floor(f / i.targetduration);
                            if (o += t, void 0 !== l) {
                                l += Math.round(f % i.targetduration / i.partTarget)
                            }
                            this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${c.toFixed(2)}s goal: ${f} skip sn ${t} to part ${l}`)
                        }
                        i.tuneInGoal = f
                    }
                    if (a = this.getDeliveryDirectives(i, e.deliveryDirectives, o, l), t || !d) return void this.loadPlaylist(a)
                } else(i.canBlockReload || i.canSkipUntil) && (a = this.getDeliveryDirectives(i, e.deliveryDirectives, o, l));
                const h = this.hls.mainForwardBufferInfo,
                    d = h ? h.end - h.len : 0,
                    c = As(i, 1e3 * (i.edge - d));
                i.updated && n > this.requestScheduled + c && (this.requestScheduled = r.loading.start), void 0 !== o && i.canBlockReload ? this.requestScheduled = r.loading.first + c - (1e3 * i.partTarget || 1e3) : -1 === this.requestScheduled || this.requestScheduled + c < n ? this.requestScheduled = n : this.requestScheduled - n <= 0 && (this.requestScheduled += c);
                let u = this.requestScheduled - n;
                u = Math.max(0, u), this.log(`reload live playlist ${t} in ${Math.round(u)} ms`), this.timer = self.setTimeout((() => this.loadPlaylist(a)), u)
            } else this.clearTimer()
        }
        getDeliveryDirectives(t, e, s, i) {
            let r = cs(t);
            return null != e && e.skip && t.deltaUpdateFailed && (s = e.msn, i = e.part, r = ds.No), new us(s, i, r)
        }
        checkRetry(t) {
            const e = t.details,
                s = Is(t),
                i = t.errorAction,
                {
                    action: r,
                    retryCount: n = 0,
                    retryConfig: a
                } = i || {},
                o = !!i && !!a && (r === $s.RetryRequest || !i.resolved && r === $s.SendAlternateToPenaltyBox);
            if (o) {
                var l;
                if (this.requestScheduled = -1, n >= a.maxNumRetry) return !1;
                if (s && null != (l = t.context) && l.deliveryDirectives) this.warn(`Retrying playlist loading ${n+1}/${a.maxNumRetry} after "${e}" without delivery-directives`), this.loadPlaylist();
                else {
                    const t = ws(a, n);
                    this.timer = self.setTimeout((() => this.loadPlaylist()), t), this.warn(`Retrying playlist loading ${n+1}/${a.maxNumRetry} after "${e}" in ${t}ms`)
                }
                t.levelRetry = !0, i.resolved = !0
            }
            return o
        }
    }
    n.BasePlaylistController = Hs;
    class Vs {
        constructor(t, e = 0, s = 0) {
            this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = t, this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0, this.estimate_ = e, this.totalWeight_ = s
        }
        sample(t, e) {
            const s = Math.pow(this.alpha_, t);
            this.estimate_ = e * (1 - s) + s * this.estimate_, this.totalWeight_ += t
        }
        getTotalWeight() {
            return this.totalWeight_
        }
        getEstimate() {
            if (this.alpha_) {
                const t = 1 - Math.pow(this.alpha_, this.totalWeight_);
                if (t) return this.estimate_ / t
            }
            return this.estimate_
        }
    }
    class Ys {
        constructor(t, e, s, i = 100) {
            this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = s, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new Vs(t), this.fast_ = new Vs(e), this.defaultTTFB_ = i, this.ttfb_ = new Vs(t)
        }
        update(t, e) {
            const {
                slow_: s,
                fast_: i,
                ttfb_: r
            } = this;
            s.halfLife !== t && (this.slow_ = new Vs(t, s.getEstimate(), s.getTotalWeight())), i.halfLife !== e && (this.fast_ = new Vs(e, i.getEstimate(), i.getTotalWeight())), r.halfLife !== t && (this.ttfb_ = new Vs(t, r.getEstimate(), r.getTotalWeight()))
        }
        sample(t, e) {
            const s = (t = Math.max(t, this.minDelayMs_)) / 1e3,
                i = 8 * e / s;
            this.fast_.sample(s, i), this.slow_.sample(s, i)
        }
        sampleTTFB(t) {
            const e = t / 1e3,
                s = Math.sqrt(2) * Math.exp(-Math.pow(e, 2) / 2);
            this.ttfb_.sample(s, Math.max(t, 5))
        }
        canEstimate() {
            return this.fast_.getTotalWeight() >= this.minWeight_
        }
        getEstimate() {
            return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
        }
        getEstimateTTFB() {
            return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_
        }
        destroy() {}
    }
    const Ws = {
            supported: !0,
            configurations: [],
            decodingInfoResults: [{
                supported: !0,
                powerEfficient: !0,
                smooth: !0
            }]
        },
        js = {};

    function qs(t, e, s, i, r, n) {
        const a = t.audioCodec ? t.audioGroups : null,
            o = null == n ? void 0 : n.audioCodec,
            l = null == n ? void 0 : n.channels,
            h = l ? parseInt(l) : o ? 1 / 0 : 2;
        let d = null;
        if (null != a && a.length) try {
            d = 1 === a.length && a[0] ? e.groups[a[0]].channels : a.reduce(((t, s) => {
                if (s) {
                    const i = e.groups[s];
                    if (!i) throw new Error(`Audio track group ${s} not found`);
                    Object.keys(i.channels).forEach((e => {
                        t[e] = (t[e] || 0) + i.channels[e]
                    }))
                }
                return t
            }), {
                2: 0
            })
        } catch (t) {
            return !0
        }
        return void 0 !== t.videoCodec && (t.width > 1920 && t.height > 1088 || t.height > 1920 && t.width > 1088 || t.frameRate > Math.max(i, 30) || 'SDR' !== t.videoRange && t.videoRange !== s || t.bitrate > Math.max(r, 8e6)) || !!d && g(h) && Object.keys(d).some((t => parseInt(t) > h))
    }

    function Xs(t, e, s) {
        const i = t.videoCodec,
            r = t.audioCodec;
        if (!i || !r || !s) return Promise.resolve(Ws);
        const n = {
                width: t.width,
                height: t.height,
                bitrate: Math.ceil(Math.max(.9 * t.bitrate, t.averageBitrate)),
                framerate: t.frameRate || 30
            },
            a = t.videoRange;
        'SDR' !== a && (n.transferFunction = a.toLowerCase());
        const o = i.split(',').map((t => ({
            type: 'media-source',
            video: d(d({}, n), {}, {
                contentType: pe(t, 'video')
            })
        })));
        return r && t.audioGroups && t.audioGroups.forEach((t => {
            var s;
            t && (null == (s = e.groups[t]) || s.tracks.forEach((e => {
                if (e.groupId === t) {
                    const t = e.channels || '',
                        s = parseFloat(t);
                    g(s) && s > 2 && o.push.apply(o, r.split(',').map((t => ({
                        type: 'media-source',
                        audio: {
                            contentType: pe(t, 'audio'),
                            channels: '' + s
                        }
                    }))))
                }
            })))
        })), Promise.all(o.map((t => {
            const e = zs(t);
            return js[e] || (js[e] = s.decodingInfo(t))
        }))).then((t => ({
            supported: !t.some((t => !t.supported)),
            configurations: o,
            decodingInfoResults: t
        }))).catch((t => ({
            supported: !1,
            configurations: o,
            decodingInfoResults: [],
            error: t
        })))
    }

    function zs(t) {
        const {
            audio: e,
            video: s
        } = t, i = s || e;
        if (i) {
            const t = i.contentType.split('"')[1];
            if (s) return `r${s.height}x${s.width}f${Math.ceil(s.framerate)}${s.transferFunction||'sd'}_${t}_${Math.ceil(s.bitrate/1e5)}`;
            if (e) return `c${e.channels}${e.spatialRendering?'s':'n'}_${t}`
        }
        return ''
    }

    function Qs() {
        if ('function' == typeof matchMedia) {
            const t = matchMedia('(dynamic-range: high)'),
                e = matchMedia('bad query');
            if (t.media !== e.media) return !0 === t.matches
        }
        return !1
    }

    function Js(t, e) {
        let s = !1,
            i = [];
        return t && (s = 'SDR' !== t, i = [t]), e && (i = e.allowedVideoRanges || hs.slice(0), s = void 0 !== e.preferHDR ? e.preferHDR : Qs(), i = s ? i.filter((t => 'SDR' !== t)) : ['SDR']), {
            preferHDR: s,
            allowedVideoRanges: i
        }
    }

    function Zs(t, e, s, i, r) {
        const n = Object.keys(t),
            a = null == i ? void 0 : i.channels,
            o = null == i ? void 0 : i.audioCodec,
            l = a && 2 === parseInt(a);
        let h = !0,
            d = !1,
            c = 1 / 0,
            u = 1 / 0,
            f = 1 / 0,
            m = 0,
            p = [];
        const {
            preferHDR: y,
            allowedVideoRanges: v
        } = Js(e, r);
        for (let e = n.length; e--;) {
            const s = t[n[e]];
            h = s.channels[2] > 0, c = Math.min(c, s.minHeight), u = Math.min(u, s.minFramerate), f = Math.min(f, s.minBitrate);
            const i = v.filter((t => s.videoRanges[t] > 0));
            i.length > 0 && (d = !0, p = i)
        }
        c = g(c) ? c : 0, u = g(u) ? u : 0;
        const E = Math.max(1080, c),
            T = Math.max(30, u);
        f = g(f) ? f : s, s = Math.max(f, s), d || (e = void 0, p = []);
        return {
            codecSet: n.reduce(((e, i) => {
                const r = t[i];
                if (i === e) return e;
                if (r.minBitrate > s) return ti(i, `min bitrate of ${r.minBitrate} > current estimate of ${s}`), e;
                if (!r.hasDefaultAudio) return ti(i, "no renditions with default or auto-select sound found"), e;
                if (o && i.indexOf(o.substring(0, 4)) % 5 != 0) return ti(i, `audio codec preference "${o}" not found`), e;
                if (a && !l) {
                    if (!r.channels[a]) return ti(i, `no renditions with ${a} channel sound found (channels options: ${Object.keys(r.channels)})`), e
                } else if ((!o || l) && h && 0 === r.channels[2]) return ti(i, "no renditions with stereo sound found"), e;
                return r.minHeight > E ? (ti(i, `min resolution of ${r.minHeight} > maximum of ${E}`), e) : r.minFramerate > T ? (ti(i, `min framerate of ${r.minFramerate} > maximum of ${T}`), e) : p.some((t => r.videoRanges[t] > 0)) ? r.maxScore < m ? (ti(i, `max score of ${r.maxScore} < selected max of ${m}`), e) : e && (ve(i) >= ve(e) || r.fragmentError > t[e].fragmentError) ? e : (m = r.maxScore, i) : (ti(i, `no variants with VIDEO-RANGE of ${JSON.stringify(p)} found`), e)
            }), void 0),
            videoRanges: p,
            preferHDR: y,
            minFramerate: u,
            minBitrate: f
        }
    }

    function ti(t, e) {
        D.log(`[abr] start candidates with "${t}" ignored because ${e}`)
    }

    function ei(t) {
        return t.reduce(((t, e) => {
            let s = t.groups[e.groupId];
            s || (s = t.groups[e.groupId] = {
                tracks: [],
                channels: {
                    2: 0
                },
                hasDefault: !1,
                hasAutoSelect: !1
            }), s.tracks.push(e);
            const i = e.channels || '2';
            return s.channels[i] = (s.channels[i] || 0) + 1, s.hasDefault = s.hasDefault || e.default, s.hasAutoSelect = s.hasAutoSelect || e.autoselect, s.hasDefault && (t.hasDefaultAudio = !0), s.hasAutoSelect && (t.hasAutoSelectAudio = !0), t
        }), {
            hasDefaultAudio: !1,
            hasAutoSelectAudio: !1,
            groups: {}
        })
    }

    function si(t, e, s, i) {
        return t.slice(s, i + 1).reduce(((t, s) => {
            if (!s.codecSet) return t;
            const i = s.audioGroups;
            let r = t[s.codecSet];
            r || (t[s.codecSet] = r = {
                minBitrate: 1 / 0,
                minHeight: 1 / 0,
                minFramerate: 1 / 0,
                maxScore: 0,
                videoRanges: {
                    SDR: 0
                },
                channels: {
                    2: 0
                },
                hasDefaultAudio: !i,
                fragmentError: 0
            }), r.minBitrate = Math.min(r.minBitrate, s.bitrate);
            const n = Math.min(s.height, s.width);
            return r.minHeight = Math.min(r.minHeight, n), r.minFramerate = Math.min(r.minFramerate, s.frameRate), r.maxScore = Math.max(r.maxScore, s.score), r.fragmentError += s.fragmentError, r.videoRanges[s.videoRange] = (r.videoRanges[s.videoRange] || 0) + 1, i && i.forEach((t => {
                if (!t) return;
                const s = e.groups[t];
                s && (r.hasDefaultAudio = r.hasDefaultAudio || e.hasDefaultAudio ? s.hasDefault : s.hasAutoSelect || !e.hasDefaultAudio && !e.hasAutoSelectAudio, Object.keys(s.channels).forEach((t => {
                    r.channels[t] = (r.channels[t] || 0) + s.channels[t]
                })))
            })), t
        }), {})
    }

    function ii(t, e, s) {
        if ('attrs' in t) {
            const s = e.indexOf(t);
            if (-1 !== s) return s
        }
        for (let i = 0; i < e.length; i++) {
            if (ri(t, e[i], s)) return i
        }
        return -1
    }

    function ri(t, e, s) {
        const {
            groupId: i,
            name: r,
            lang: n,
            assocLang: a,
            characteristics: o,
            default: l
        } = t, h = t.forced;
        return (void 0 === i || e.groupId === i) && (void 0 === r || e.name === r) && (void 0 === n || e.lang === n) && (void 0 === n || e.assocLang === a) && (void 0 === l || e.default === l) && (void 0 === h || e.forced === h) && (void 0 === o || ni(o, e.characteristics)) && (void 0 === s || s(t, e))
    }

    function ni(t, e = "") {
        const s = t.split(','),
            i = e.split(',');
        return s.length === i.length && !s.some((t => -1 === i.indexOf(t)))
    }

    function ai(t, e) {
        const {
            audioCodec: s,
            channels: i
        } = t;
        return !(void 0 !== s && (e.audioCodec || '').substring(0, 4) !== s.substring(0, 4) || void 0 !== i && i !== (e.channels || '2'))
    }

    function oi(t, e, s, i, r) {
        const n = e[i],
            a = e.reduce(((t, e, s) => {
                const i = e.uri;
                return (t[i] || (t[i] = [])).push(s), t
            }), {})[n.uri];
        a.length > 1 && (i = Math.max.apply(Math, a));
        const o = n.videoRange,
            l = n.frameRate,
            h = n.codecSet.substring(0, 4),
            d = li(e, i, (e => {
                if (e.videoRange !== o || e.frameRate !== l || e.codecSet.substring(0, 4) !== h) return !1;
                const i = e.audioGroups,
                    n = s.filter((t => !i || -1 !== i.indexOf(t.groupId)));
                return ii(t, n, r) > -1
            }));
        return d > -1 ? d : li(e, i, (e => {
            const i = e.audioGroups,
                n = s.filter((t => !i || -1 !== i.indexOf(t.groupId)));
            return ii(t, n, r) > -1
        }))
    }

    function li(t, e, s) {
        for (let i = e; i; i--)
            if (s(t[i])) return i;
        for (let i = e + 1; i < t.length; i++)
            if (s(t[i])) return i;
        return -1
    }
    class hi {
        constructor(t) {
            this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = '', this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this._abandonRulesCheck = () => {
                const {
                    fragCurrent: t,
                    partCurrent: e,
                    hls: s
                } = this, {
                    autoLevelEnabled: i,
                    media: r
                } = s;
                if (!t || !r) return;
                const n = performance.now(),
                    a = e ? e.stats : t.stats,
                    o = e ? e.duration : t.duration,
                    l = n - a.loading.start,
                    h = s.minAutoLevel;
                if (a.aborted || a.loaded && a.loaded === a.total || t.level <= h) return this.clearTimer(), void(this._nextAutoLevel = -1);
                if (!i || r.paused || !r.playbackRate || !r.readyState) return;
                const d = s.mainForwardBufferInfo;
                if (null === d) return;
                const c = this.bwEstimator.getEstimateTTFB(),
                    u = Math.abs(r.playbackRate);
                if (l <= Math.max(c, o / (2 * u) * 1e3)) return;
                const f = d.len / u,
                    m = a.loading.first ? a.loading.first - a.loading.start : -1,
                    p = a.loaded && m > -1,
                    v = this.getBwEstimate(),
                    E = s.levels,
                    T = E[t.level],
                    S = a.total || Math.max(a.loaded, Math.round(o * T.averageBitrate / 8));
                let L = p ? l - m : l;
                L < 1 && p && (L = Math.min(l, 8 * a.loaded / v));
                const A = p ? 1e3 * a.loaded / L : 0,
                    R = A ? (S - a.loaded) / A : 8 * S / v + c / 1e3;
                if (R <= f) return;
                const b = A ? 8 * A : v;
                let k, I = Number.POSITIVE_INFINITY;
                for (k = t.level - 1; k > h; k--) {
                    const t = E[k].maxBitrate;
                    if (I = this.getTimeToLoadFrag(c / 1e3, b, o * t, !E[k].details), I < f) break
                }
                if (I >= R) return;
                if (I > 10 * o) return;
                s.nextLoadLevel = s.nextAutoLevel = k, p ? this.bwEstimator.sample(l - Math.min(c, m), a.loaded) : this.bwEstimator.sampleTTFB(l);
                const C = E[k].maxBitrate;
                this.getBwEstimate() * this.hls.config.abrBandWidthUpFactor > C && this.resetEstimator(C), this.clearTimer(), D.warn(`[abr] Fragment ${t.sn}${e?' part '+e.index:''} of level ${t.level} is loading too slowly;\n      Time to underbuffer: ${f.toFixed(3)} s\n      Estimated load time for current fragment: ${R.toFixed(3)} s\n      Estimated load time for down switch fragment: ${I.toFixed(3)} s\n      TTFB estimate: ${0|m} ms\n      Current BW estimate: ${g(v)?0|v:'Unknown'} bps\n      New BW estimate: ${0|this.getBwEstimate()} bps\n      Switching to level ${k} @ ${0|C} bps`), s.trigger(y.FRAG_LOAD_EMERGENCY_ABORTED, {
                    frag: t,
                    part: e,
                    stats: a
                })
            }, this.hls = t, this.bwEstimator = this.initEstimator(), this.registerListeners()
        }
        resetEstimator(t) {
            t && (D.log(`setting initial bwe to ${t}`), this.hls.config.abrEwmaDefaultEstimate = t), this.firstSelection = -1, this.bwEstimator = this.initEstimator()
        }
        initEstimator() {
            const t = this.hls.config;
            return new Ys(t.abrEwmaSlowVoD, t.abrEwmaFastVoD, t.abrEwmaDefaultEstimate)
        }
        registerListeners() {
            const {
                hls: t
            } = this;
            t.on(y.MANIFEST_LOADING, this.onManifestLoading, this), t.on(y.FRAG_LOADING, this.onFragLoading, this), t.on(y.FRAG_LOADED, this.onFragLoaded, this), t.on(y.FRAG_BUFFERED, this.onFragBuffered, this), t.on(y.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(y.LEVEL_LOADED, this.onLevelLoaded, this), t.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(y.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), t.on(y.ERROR, this.onError, this)
        }
        unregisterListeners() {
            const {
                hls: t
            } = this;
            t && (t.off(y.MANIFEST_LOADING, this.onManifestLoading, this), t.off(y.FRAG_LOADING, this.onFragLoading, this), t.off(y.FRAG_LOADED, this.onFragLoaded, this), t.off(y.FRAG_BUFFERED, this.onFragBuffered, this), t.off(y.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(y.LEVEL_LOADED, this.onLevelLoaded, this), t.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(y.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), t.off(y.ERROR, this.onError, this))
        }
        destroy() {
            this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = null, this.fragCurrent = this.partCurrent = null
        }
        onManifestLoading(t, e) {
            this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer()
        }
        onLevelsUpdated() {
            this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null
        }
        onMaxAutoLevelUpdated() {
            this.firstSelection = -1, this.nextAutoLevelKey = ''
        }
        onFragLoading(t, e) {
            const s = e.frag;
            if (!this.ignoreFragment(s)) {
                var i;
                if (!s.bitrateTest) this.fragCurrent = s, this.partCurrent = null != (i = e.part) ? i : null;
                this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100)
            }
        }
        onLevelSwitching(t, e) {
            this.clearTimer()
        }
        onError(t, e) {
            if (!e.fatal) switch (e.details) {
                case E.BUFFER_ADD_CODEC_ERROR:
                case E.BUFFER_APPEND_ERROR:
                    this.lastLoadedFragLevel = -1, this.firstSelection = -1;
                    break;
                case E.FRAG_LOAD_TIMEOUT:
                    {
                        const t = e.frag,
                            {
                                fragCurrent: s,
                                partCurrent: i
                            } = this;
                        if (t && s && t.sn === s.sn && t.level === s.level) {
                            const e = performance.now(),
                                s = i ? i.stats : t.stats,
                                r = e - s.loading.start,
                                n = s.loading.first ? s.loading.first - s.loading.start : -1;
                            if (s.loaded && n > -1) {
                                const t = this.bwEstimator.getEstimateTTFB();
                                this.bwEstimator.sample(r - Math.min(t, n), s.loaded)
                            } else this.bwEstimator.sampleTTFB(r)
                        }
                        break
                    }
            }
        }
        getTimeToLoadFrag(t, e, s, i) {
            return t + s / e + (i ? this.lastLevelLoadSec : 0)
        }
        onLevelLoaded(t, e) {
            const s = this.hls.config,
                {
                    loading: i
                } = e.stats,
                r = i.end - i.start;
            g(r) && (this.lastLevelLoadSec = r / 1e3), e.details.live ? this.bwEstimator.update(s.abrEwmaSlowLive, s.abrEwmaFastLive) : this.bwEstimator.update(s.abrEwmaSlowVoD, s.abrEwmaFastVoD)
        }
        onFragLoaded(t, {
            frag: e,
            part: s
        }) {
            const i = s ? s.stats : e.stats;
            if (e.type === He.MAIN && this.bwEstimator.sampleTTFB(i.loading.first - i.loading.start), !this.ignoreFragment(e)) {
                if (this.clearTimer(), e.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
                    const t = s ? s.duration : e.duration,
                        r = this.hls.levels[e.level],
                        n = (r.loaded ? r.loaded.bytes : 0) + i.loaded,
                        a = (r.loaded ? r.loaded.duration : 0) + t;
                    r.loaded = {
                        bytes: n,
                        duration: a
                    }, r.realBitrate = Math.round(8 * n / a)
                }
                if (e.bitrateTest) {
                    const t = {
                        stats: i,
                        frag: e,
                        part: s,
                        id: e.type
                    };
                    this.onFragBuffered(y.FRAG_BUFFERED, t), e.bitrateTest = !1
                } else this.lastLoadedFragLevel = e.level
            }
        }
        onFragBuffered(t, e) {
            const {
                frag: s,
                part: i
            } = e, r = null != i && i.stats.loaded ? i.stats : s.stats;
            if (r.aborted) return;
            if (this.ignoreFragment(s)) return;
            const n = r.parsing.end - r.loading.start - Math.min(r.loading.first - r.loading.start, this.bwEstimator.getEstimateTTFB());
            this.bwEstimator.sample(n, r.loaded), r.bwEstimate = this.getBwEstimate(), s.bitrateTest ? this.bitrateTestDelay = n / 1e3 : this.bitrateTestDelay = 0
        }
        ignoreFragment(t) {
            return t.type !== He.MAIN || 'initSegment' === t.sn
        }
        clearTimer() {
            this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1)
        }
        get firstAutoLevel() {
            const {
                maxAutoLevel: t,
                minAutoLevel: e
            } = this.hls, s = this.getBwEstimate(), i = this.hls.config.maxStarvationDelay, r = this.findBestLevel(s, e, t, 0, i, 1, 1);
            if (r > -1) return r;
            const n = this.hls.firstLevel,
                a = Math.min(Math.max(n, e), t);
            return D.warn(`[abr] Could not find best starting auto level. Defaulting to first in playlist ${n} clamped to ${a}`), a
        }
        get forcedAutoLevel() {
            return this.nextAutoLevelKey ? -1 : this._nextAutoLevel
        }
        get nextAutoLevel() {
            const t = this.forcedAutoLevel,
                e = this.bwEstimator.canEstimate(),
                s = this.lastLoadedFragLevel > -1;
            if (!(-1 === t || e && s && this.nextAutoLevelKey !== this.getAutoLevelKey())) return t;
            const i = e && s ? this.getNextABRAutoLevel() : this.firstAutoLevel;
            if (-1 !== t) {
                const e = this.hls.levels;
                if (e.length > Math.max(t, i) && e[t].loadError <= e[i].loadError) return t
            }
            return this._nextAutoLevel = i, this.nextAutoLevelKey = this.getAutoLevelKey(), i
        }
        getAutoLevelKey() {
            return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`
        }
        getNextABRAutoLevel() {
            const {
                fragCurrent: t,
                partCurrent: e,
                hls: s
            } = this, {
                maxAutoLevel: i,
                config: r,
                minAutoLevel: n
            } = s, a = e ? e.duration : t ? t.duration : 0, o = this.getBwEstimate(), l = this.getStarvationDelay();
            let h = r.abrBandWidthFactor,
                d = r.abrBandWidthUpFactor;
            if (l) {
                const t = this.findBestLevel(o, n, i, l, 0, h, d);
                if (t >= 0) return t
            }
            let c = a ? Math.min(a, r.maxStarvationDelay) : r.maxStarvationDelay;
            if (!l) {
                const t = this.bitrateTestDelay;
                if (t) {
                    c = (a ? Math.min(a, r.maxLoadingDelay) : r.maxLoadingDelay) - t, D.info(`[abr] bitrate test took ${Math.round(1e3*t)}ms, set first fragment max fetchDuration to ${Math.round(1e3*c)} ms`), h = d = 1
                }
            }
            const u = this.findBestLevel(o, n, i, l, c, h, d);
            if (D.info(`[abr] ${l?'rebuffering expected':'buffer is empty'}, optimal quality level ${u}`), u > -1) return u;
            const f = s.levels[n],
                g = s.levels[s.loadLevel];
            return (null == f ? void 0 : f.bitrate) < (null == g ? void 0 : g.bitrate) ? n : s.loadLevel
        }
        getStarvationDelay() {
            const t = this.hls,
                e = t.media;
            if (!e) return 1 / 0;
            const s = e && 0 !== e.playbackRate ? Math.abs(e.playbackRate) : 1,
                i = t.mainForwardBufferInfo;
            return (i ? i.len : 0) / s
        }
        getBwEstimate() {
            return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate
        }
        findBestLevel(t, e, s, i, r, n, a) {
            var o;
            const l = i + r,
                h = this.lastLoadedFragLevel,
                d = -1 === h ? this.hls.firstLevel : h,
                {
                    fragCurrent: c,
                    partCurrent: u
                } = this,
                {
                    levels: f,
                    allAudioTracks: m,
                    loadLevel: p,
                    config: y
                } = this.hls;
            if (1 === f.length) return 0;
            const v = f[d],
                E = !(null == v || null == (o = v.details) || !o.live),
                T = -1 === p || -1 === h;
            let S, L = 'SDR',
                A = (null == v ? void 0 : v.frameRate) || 0;
            const {
                audioPreference: R,
                videoPreference: b
            } = y, k = this.audioTracksByGroup || (this.audioTracksByGroup = ei(m));
            if (T) {
                if (-1 !== this.firstSelection) return this.firstSelection;
                const i = Zs(this.codecTiers || (this.codecTiers = si(f, k, e, s)), L, t, R, b),
                    {
                        codecSet: r,
                        videoRanges: n,
                        minFramerate: a,
                        minBitrate: o,
                        preferHDR: l
                    } = i;
                S = r, L = l ? n[n.length - 1] : n[0], A = a, t = Math.max(t, o), D.log(`[abr] picked start tier ${JSON.stringify(i)}`)
            } else S = null == v ? void 0 : v.codecSet, L = null == v ? void 0 : v.videoRange;
            const I = u ? u.duration : c ? c.duration : 0,
                C = this.bwEstimator.getEstimateTTFB() / 1e3,
                w = [];
            for (let o = s; o >= e; o--) {
                var _;
                const e = f[o],
                    c = o > d;
                if (!e) continue;
                if (y.useMediaCapabilities && !e.supportedResult && !e.supportedPromise) {
                    const s = navigator.mediaCapabilities;
                    'function' == typeof(null == s ? void 0 : s.decodingInfo) && qs(e, k, L, A, t, R) ? (e.supportedPromise = Xs(e, k, s), e.supportedPromise.then((t => {
                        if (!this.hls) return;
                        e.supportedResult = t;
                        const s = this.hls.levels,
                            i = s.indexOf(e);
                        t.error ? D.warn(`[abr] MediaCapabilities decodingInfo error: "${t.error}" for level ${i} ${JSON.stringify(t)}`) : t.supported || (D.warn(`[abr] Unsupported MediaCapabilities decodingInfo result for level ${i} ${JSON.stringify(t)}`), i > -1 && s.length > 1 && (D.log(`[abr] Removing unsupported level ${i}`), this.hls.removeLevel(i)))
                    }))) : e.supportedResult = Ws
                }
                if (S && e.codecSet !== S || L && e.videoRange !== L || c && A > e.frameRate || !c && A > 0 && A < e.frameRate || e.supportedResult && (null == (_ = e.supportedResult.decodingInfoResults) || !_[0].smooth)) {
                    w.push(o);
                    continue
                }
                const m = e.details,
                    b = (u ? null == m ? void 0 : m.partTarget : null == m ? void 0 : m.averagetargetduration) || I;
                let x;
                x = c ? a * t : n * t;
                const P = I && i >= 2 * I && 0 === r ? f[o].averageBitrate : f[o].maxBitrate,
                    M = this.getTimeToLoadFrag(C, x, P * b, void 0 === m);
                if (x >= P && (o === h || 0 === e.loadError && 0 === e.fragmentError) && (M <= C || !g(M) || E && !this.bitrateTestDelay || M < l)) {
                    const t = this.forcedAutoLevel;
                    return o === p || -1 !== t && t === p || (w.length && D.trace(`[abr] Skipped level(s) ${w.join(',')} of ${s} max with CODECS and VIDEO-RANGE:"${f[w[0]].codecs}" ${f[w[0]].videoRange}; not compatible with "${v.codecs}" ${L}`), D.info(`[abr] switch candidate:${d}->${o} adjustedbw(${Math.round(x)})-bitrate=${Math.round(x-P)} ttfb:${C.toFixed(1)} avgDuration:${b.toFixed(1)} maxFetchDuration:${l.toFixed(1)} fetchDuration:${M.toFixed(1)} firstSelection:${T} codecSet:${S} videoRange:${L} hls.loadLevel:${p}`)), T && (this.firstSelection = o), o
                }
            }
            return -1
        }
        set nextAutoLevel(t) {
            const {
                maxAutoLevel: e,
                minAutoLevel: s
            } = this.hls, i = Math.min(Math.max(t, s), e);
            this._nextAutoLevel !== i && (this.nextAutoLevelKey = '', this._nextAutoLevel = i)
        }
    }
    n.AbrController = hi;
    class di {
        constructor() {
            this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this)
        }
        destroy() {
            this.onHandlerDestroying(), this.onHandlerDestroyed()
        }
        onHandlerDestroying() {
            this.clearNextTick(), this.clearInterval()
        }
        onHandlerDestroyed() {}
        hasInterval() {
            return !!this._tickInterval
        }
        hasNextTick() {
            return !!this._tickTimer
        }
        setInterval(t) {
            return !this._tickInterval && (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, t), !0)
        }
        clearInterval() {
            return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0)
        }
        clearNextTick() {
            return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0)
        }
        tick() {
            this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0)
        }
        tickImmediate() {
            this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)
        }
        doTick() {}
    }
    var ci = "NOT_LOADED",
        ui = "APPENDING",
        fi = "PARTIAL",
        gi = "OK";
    class mi {
        constructor(t) {
            this.activePartLists = Object.create(null), this.endListFragments = Object.create(null), this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = .2, this.hls = void 0, this.hasGaps = !1, this.hls = t, this._registerListeners()
        }
        _registerListeners() {
            const {
                hls: t
            } = this;
            t.on(y.BUFFER_APPENDED, this.onBufferAppended, this), t.on(y.FRAG_BUFFERED, this.onFragBuffered, this), t.on(y.FRAG_LOADED, this.onFragLoaded, this)
        }
        _unregisterListeners() {
            const {
                hls: t
            } = this;
            t.off(y.BUFFER_APPENDED, this.onBufferAppended, this), t.off(y.FRAG_BUFFERED, this.onFragBuffered, this), t.off(y.FRAG_LOADED, this.onFragLoaded, this)
        }
        destroy() {
            this._unregisterListeners(), this.fragments = this.activePartLists = this.endListFragments = this.timeRanges = null
        }
        getAppendedFrag(t, e) {
            const s = this.activePartLists[e];
            if (s)
                for (let e = s.length; e--;) {
                    const i = s[e];
                    if (!i) break;
                    const r = i.end;
                    if (i.start <= t && null !== r && t <= r) return i
                }
            return this.getBufferedFrag(t, e)
        }
        getBufferedFrag(t, e) {
            const {
                fragments: s
            } = this, i = Object.keys(s);
            for (let r = i.length; r--;) {
                const n = s[i[r]];
                if ((null == n ? void 0 : n.body.type) === e && n.buffered) {
                    const e = n.body;
                    if (e.start <= t && t <= e.end) return e
                }
            }
            return null
        }
        detectEvictedFragments(t, e, s, i) {
            this.timeRanges && (this.timeRanges[t] = e);
            const r = (null == i ? void 0 : i.fragment.sn) || -1;
            Object.keys(this.fragments).forEach((i => {
                const n = this.fragments[i];
                if (!n) return;
                if (r >= n.body.sn) return;
                if (!n.buffered && !n.loaded) return void(n.body.type === s && this.removeFragment(n.body));
                const a = n.range[t];
                a && a.time.some((t => {
                    const s = !this.isTimeBuffered(t.startPTS, t.endPTS, e);
                    return s && this.removeFragment(n.body), s
                }))
            }))
        }
        detectPartialFragments(t) {
            const e = this.timeRanges,
                {
                    frag: s,
                    part: i
                } = t;
            if (!e || 'initSegment' === s.sn) return;
            const r = yi(s),
                n = this.fragments[r];
            if (!n || n.buffered && s.gap) return;
            const a = !s.relurl;
            if (Object.keys(e).forEach((t => {
                    const r = s.elementaryStreams[t];
                    if (!r) return;
                    const o = e[t],
                        l = a || !0 === r.partial;
                    n.range[t] = this.getBufferedTimes(s, i, l, o)
                })), n.loaded = null, Object.keys(n.range).length) {
                n.buffered = !0;
                (n.body.endList = s.endList || n.body.endList) && (this.endListFragments[n.body.type] = n), pi(n) || this.removeParts(s.sn - 1, s.type)
            } else this.removeFragment(n.body)
        }
        removeParts(t, e) {
            const s = this.activePartLists[e];
            s && (this.activePartLists[e] = s.filter((e => e.fragment.sn >= t)))
        }
        fragBuffered(t, e) {
            const s = yi(t);
            let i = this.fragments[s];
            !i && e && (i = this.fragments[s] = {
                body: t,
                appendedPTS: null,
                loaded: null,
                buffered: !1,
                range: Object.create(null)
            }, t.gap && (this.hasGaps = !0)), i && (i.loaded = null, i.buffered = !0)
        }
        getBufferedTimes(t, e, s, i) {
            const r = {
                    time: [],
                    partial: s
                },
                n = t.start,
                a = t.end,
                o = t.minEndPTS || a,
                l = t.maxStartPTS || n;
            for (let t = 0; t < i.length; t++) {
                const e = i.start(t) - this.bufferPadding,
                    s = i.end(t) + this.bufferPadding;
                if (l >= e && o <= s) {
                    r.time.push({
                        startPTS: Math.max(n, i.start(t)),
                        endPTS: Math.min(a, i.end(t))
                    });
                    break
                }
                if (n < s && a > e) {
                    const e = Math.max(n, i.start(t)),
                        s = Math.min(a, i.end(t));
                    s > e && (r.partial = !0, r.time.push({
                        startPTS: e,
                        endPTS: s
                    }))
                } else if (a <= e) break
            }
            return r
        }
        getPartialFragment(t) {
            let e, s, i, r = null,
                n = 0;
            const {
                bufferPadding: a,
                fragments: o
            } = this;
            return Object.keys(o).forEach((l => {
                const h = o[l];
                h && pi(h) && (s = h.body.start - a, i = h.body.end + a, t >= s && t <= i && (e = Math.min(t - s, i - t), n <= e && (r = h.body, n = e)))
            })), r
        }
        isEndListAppended(t) {
            const e = this.endListFragments[t];
            return void 0 !== e && (e.buffered || pi(e))
        }
        getState(t) {
            const e = yi(t),
                s = this.fragments[e];
            return s ? s.buffered ? pi(s) ? fi : gi : ui : ci
        }
        isTimeBuffered(t, e, s) {
            let i, r;
            for (let n = 0; n < s.length; n++) {
                if (i = s.start(n) - this.bufferPadding, r = s.end(n) + this.bufferPadding, t >= i && e <= r) return !0;
                if (e <= i) return !1
            }
            return !1
        }
        onFragLoaded(t, e) {
            const {
                frag: s,
                part: i
            } = e;
            if ('initSegment' === s.sn || s.bitrateTest) return;
            const r = i ? null : e,
                n = yi(s);
            this.fragments[n] = {
                body: s,
                appendedPTS: null,
                loaded: r,
                buffered: !1,
                range: Object.create(null)
            }
        }
        onBufferAppended(t, e) {
            const {
                frag: s,
                part: i,
                timeRanges: r
            } = e;
            if ('initSegment' === s.sn) return;
            const n = s.type;
            if (i) {
                let t = this.activePartLists[n];
                t || (this.activePartLists[n] = t = []), t.push(i)
            }
            this.timeRanges = r, Object.keys(r).forEach((t => {
                const e = r[t];
                this.detectEvictedFragments(t, e, n, i)
            }))
        }
        onFragBuffered(t, e) {
            this.detectPartialFragments(e)
        }
        hasFragment(t) {
            const e = yi(t);
            return !!this.fragments[e]
        }
        hasParts(t) {
            var e;
            return !(null == (e = this.activePartLists[t]) || !e.length)
        }
        removeFragmentsInRange(t, e, s, i, r) {
            i && !this.hasGaps || Object.keys(this.fragments).forEach((n => {
                const a = this.fragments[n];
                if (!a) return;
                const o = a.body;
                o.type !== s || i && !o.gap || o.start < e && o.end > t && (a.buffered || r) && this.removeFragment(o)
            }))
        }
        removeFragment(t) {
            const e = yi(t);
            t.stats.loaded = 0, t.clearElementaryStreamInfo();
            const s = this.activePartLists[t.type];
            if (s) {
                const e = t.sn;
                this.activePartLists[t.type] = s.filter((t => t.fragment.sn !== e))
            }
            delete this.fragments[e], t.endList && delete this.endListFragments[t.type]
        }
        removeAllFragments() {
            this.fragments = Object.create(null), this.endListFragments = Object.create(null), this.activePartLists = Object.create(null), this.hasGaps = !1
        }
    }

    function pi(t) {
        var e, s, i;
        return t.buffered && (t.body.gap || (null == (e = t.range.video) ? void 0 : e.partial) || (null == (s = t.range.audio) ? void 0 : s.partial) || (null == (i = t.range.audiovideo) ? void 0 : i.partial))
    }

    function yi(t) {
        return `${t.type}_${t.level}_${t.sn}`
    }
    const vi = {
        length: 0,
        start: () => 0,
        end: () => 0
    };
    class Ei {
        static isBuffered(t, e) {
            try {
                if (t) {
                    const s = Ei.getBuffered(t);
                    for (let t = 0; t < s.length; t++)
                        if (e >= s.start(t) && e <= s.end(t)) return !0
                }
            } catch (t) {}
            return !1
        }
        static bufferInfo(t, e, s) {
            try {
                if (t) {
                    const i = Ei.getBuffered(t),
                        r = [];
                    let n;
                    for (n = 0; n < i.length; n++) r.push({
                        start: i.start(n),
                        end: i.end(n)
                    });
                    return this.bufferedInfo(r, e, s)
                }
            } catch (t) {}
            return {
                len: 0,
                start: e,
                end: e,
                nextStart: void 0
            }
        }
        static bufferedInfo(t, e, s) {
            e = Math.max(0, e), t.sort((function(t, e) {
                const s = t.start - e.start;
                return s || e.end - t.end
            }));
            let i = [];
            if (s)
                for (let e = 0; e < t.length; e++) {
                    const r = i.length;
                    if (r) {
                        const n = i[r - 1].end;
                        t[e].start - n < s ? t[e].end > n && (i[r - 1].end = t[e].end) : i.push(t[e])
                    } else i.push(t[e])
                } else i = t;
            let r, n = 0,
                a = e,
                o = e;
            for (let t = 0; t < i.length; t++) {
                const l = i[t].start,
                    h = i[t].end;
                if (e + s >= l && e < h) a = l, o = h, n = o - e;
                else if (e + s < l) {
                    r = l;
                    break
                }
            }
            return {
                len: n,
                start: a || 0,
                end: o || 0,
                nextStart: r
            }
        }
        static getBuffered(t) {
            try {
                return t.buffered
            } catch (t) {
                return D.log('failed to get media.buffered', t), vi
            }
        }
    }
    class Ti {
        constructor(t, e, s, i = 0, r = -1, n = !1) {
            this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = {
                start: 0,
                executeStart: 0,
                executeEnd: 0,
                end: 0
            }, this.buffering = {
                audio: {
                    start: 0,
                    executeStart: 0,
                    executeEnd: 0,
                    end: 0
                },
                video: {
                    start: 0,
                    executeStart: 0,
                    executeEnd: 0,
                    end: 0
                },
                audiovideo: {
                    start: 0,
                    executeStart: 0,
                    executeEnd: 0,
                    end: 0
                }
            }, this.level = t, this.sn = e, this.id = s, this.size = i, this.part = r, this.partial = n
        }
    }

    function Si(t, e) {
        for (let i = 0, r = t.length; i < r; i++) {
            var s;
            if ((null == (s = t[i]) ? void 0 : s.cc) === e) return t[i]
        }
        return null
    }

    function Li(t, e, s) {
        return !(!e || !(s.endCC > s.startCC || t && t.cc < s.startCC))
    }

    function Ai(t, e) {
        const s = t.fragments,
            i = e.fragments;
        if (!i.length || !s.length) return void D.log('No fragments to align');
        const r = Si(s, i[0].cc);
        if (r && (!r || r.startPTS)) return r;
        D.log('No frag in previous level to align on')
    }

    function Ri(t, e) {
        if (t) {
            const s = t.start + e;
            t.start = t.startPTS = s, t.endPTS = s + t.duration
        }
    }

    function bi(t, e) {
        const s = e.fragments;
        for (let e = 0, i = s.length; e < i; e++) Ri(s[e], t);
        e.fragmentHint && Ri(e.fragmentHint, t), e.alignedSliding = !0
    }

    function Di(t, e, s) {
        e && (ki(t, s, e), !s.alignedSliding && e && Ii(s, e), s.alignedSliding || !e || s.skippedSegments || Ss(e, s))
    }

    function ki(t, e, s) {
        if (Li(t, s, e)) {
            const t = Ai(s, e);
            t && g(t.start) && (D.log(`Adjusting PTS using last level due to CC increase within current level ${e.url}`), bi(t.start, e))
        }
    }

    function Ii(t, e) {
        if (!t.hasProgramDateTime || !e.hasProgramDateTime) return;
        const s = t.fragments,
            i = e.fragments;
        if (!s.length || !i.length) return;
        let r, n;
        const a = Math.min(e.endCC, t.endCC);
        e.startCC < a && t.startCC < a && (r = Si(i, a), n = Si(s, a)), r && n || (r = i[Math.floor(i.length / 2)], n = Si(s, r.cc) || s[Math.floor(s.length / 2)]);
        const o = r.programDateTime,
            l = n.programDateTime;
        if (!o || !l) return;
        bi((l - o) / 1e3 - (n.start - r.start), t)
    }
    n.ChunkMetadata = Ti;
    const Ci = Math.pow(2, 17);
    class wi {
        constructor(t) {
            this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = t
        }
        destroy() {
            this.loader && (this.loader.destroy(), this.loader = null)
        }
        abort() {
            this.loader && this.loader.abort()
        }
        load(t, e) {
            const s = t.url;
            if (!s) return Promise.reject(new Pi({
                type: v.NETWORK_ERROR,
                details: E.FRAG_LOAD_ERROR,
                fatal: !1,
                frag: t,
                error: new Error("Fragment does not have a " + (s ? 'part list' : 'url')),
                networkDetails: null
            }));
            this.abort();
            const i = this.config,
                r = i.fLoader,
                n = i.loader;
            return new Promise(((a, o) => {
                if (this.loader && this.loader.destroy(), t.gap) {
                    if (t.tagList.some((t => 'GAP' === t[0]))) return void o(xi(t));
                    t.gap = !1
                }
                const l = this.loader = t.loader = r ? new r(i) : new n(i),
                    h = _i(t),
                    c = _s(i.fragLoadPolicy.default),
                    u = {
                        loadPolicy: c,
                        timeout: c.maxLoadTimeMs,
                        maxRetry: 0,
                        retryDelay: 0,
                        maxRetryDelay: 0,
                        highWaterMark: 'initSegment' === t.sn ? 1 / 0 : Ci
                    };
                t.stats = l.stats, l.load(h, u, {
                    onSuccess: (e, s, i, r) => {
                        this.resetLoader(t, l);
                        let n = e.data;
                        i.resetIV && t.decryptdata && (t.decryptdata.iv = new Uint8Array(n.slice(0, 16)), n = n.slice(16)), a({
                            frag: t,
                            part: null,
                            payload: n,
                            networkDetails: r
                        })
                    },
                    onError: (e, i, r, n) => {
                        this.resetLoader(t, l), o(new Pi({
                            type: v.NETWORK_ERROR,
                            details: E.FRAG_LOAD_ERROR,
                            fatal: !1,
                            frag: t,
                            response: d({
                                url: s,
                                data: void 0
                            }, e),
                            error: new Error(`HTTP Error ${e.code} ${e.text}`),
                            networkDetails: r,
                            stats: n
                        }))
                    },
                    onAbort: (e, s, i) => {
                        this.resetLoader(t, l), o(new Pi({
                            type: v.NETWORK_ERROR,
                            details: E.INTERNAL_ABORTED,
                            fatal: !1,
                            frag: t,
                            error: new Error('Aborted'),
                            networkDetails: i,
                            stats: e
                        }))
                    },
                    onTimeout: (e, s, i) => {
                        this.resetLoader(t, l), o(new Pi({
                            type: v.NETWORK_ERROR,
                            details: E.FRAG_LOAD_TIMEOUT,
                            fatal: !1,
                            frag: t,
                            error: new Error(`Timeout after ${u.timeout}ms`),
                            networkDetails: i,
                            stats: e
                        }))
                    },
                    onProgress: (s, i, r, n) => {
                        e && e({
                            frag: t,
                            part: null,
                            payload: r,
                            networkDetails: n
                        })
                    }
                })
            }))
        }
        loadPart(t, e, s) {
            this.abort();
            const i = this.config,
                r = i.fLoader,
                n = i.loader;
            return new Promise(((a, o) => {
                if (this.loader && this.loader.destroy(), t.gap || e.gap) return void o(xi(t, e));
                const l = this.loader = t.loader = r ? new r(i) : new n(i),
                    h = _i(t, e),
                    c = _s(i.fragLoadPolicy.default),
                    u = {
                        loadPolicy: c,
                        timeout: c.maxLoadTimeMs,
                        maxRetry: 0,
                        retryDelay: 0,
                        maxRetryDelay: 0,
                        highWaterMark: Ci
                    };
                e.stats = l.stats, l.load(h, u, {
                    onSuccess: (i, r, n, o) => {
                        this.resetLoader(t, l), this.updateStatsFromPart(t, e);
                        const h = {
                            frag: t,
                            part: e,
                            payload: i.data,
                            networkDetails: o
                        };
                        s(h), a(h)
                    },
                    onError: (s, i, r, n) => {
                        this.resetLoader(t, l), o(new Pi({
                            type: v.NETWORK_ERROR,
                            details: E.FRAG_LOAD_ERROR,
                            fatal: !1,
                            frag: t,
                            part: e,
                            response: d({
                                url: h.url,
                                data: void 0
                            }, s),
                            error: new Error(`HTTP Error ${s.code} ${s.text}`),
                            networkDetails: r,
                            stats: n
                        }))
                    },
                    onAbort: (s, i, r) => {
                        t.stats.aborted = e.stats.aborted, this.resetLoader(t, l), o(new Pi({
                            type: v.NETWORK_ERROR,
                            details: E.INTERNAL_ABORTED,
                            fatal: !1,
                            frag: t,
                            part: e,
                            error: new Error('Aborted'),
                            networkDetails: r,
                            stats: s
                        }))
                    },
                    onTimeout: (s, i, r) => {
                        this.resetLoader(t, l), o(new Pi({
                            type: v.NETWORK_ERROR,
                            details: E.FRAG_LOAD_TIMEOUT,
                            fatal: !1,
                            frag: t,
                            part: e,
                            error: new Error(`Timeout after ${u.timeout}ms`),
                            networkDetails: r,
                            stats: s
                        }))
                    }
                })
            }))
        }
        updateStatsFromPart(t, e) {
            const s = t.stats,
                i = e.stats,
                r = i.total;
            if (s.loaded += i.loaded, r) {
                const i = Math.round(t.duration / e.duration),
                    n = Math.min(Math.round(s.loaded / r), i),
                    a = (i - n) * Math.round(s.loaded / n);
                s.total = s.loaded + a
            } else s.total = Math.max(s.loaded, s.total);
            const n = s.loading,
                a = i.loading;
            n.start ? n.first += a.first - a.start : (n.start = a.start, n.first = a.first), n.end = a.end
        }
        resetLoader(t, e) {
            t.loader = null, this.loader === e && (self.clearTimeout(this.partLoadTimeout), this.loader = null), e.destroy()
        }
    }

    function _i(t, e = null) {
        const s = e || t,
            i = {
                frag: t,
                part: e,
                responseType: 'arraybuffer',
                url: s.url,
                headers: {},
                rangeStart: 0,
                rangeEnd: 0
            },
            r = s.byteRangeStartOffset,
            n = s.byteRangeEndOffset;
        if (g(r) && g(n)) {
            var a;
            let e = r,
                s = n;
            if ('initSegment' === t.sn && 'AES-128' === (null == (a = t.decryptdata) ? void 0 : a.method)) {
                const t = n - r;
                t % 16 && (s = n + (16 - t % 16)), 0 !== r && (i.resetIV = !0, e = r - 16)
            }
            i.rangeStart = e, i.rangeEnd = s
        }
        return i
    }

    function xi(t, e) {
        const s = new Error(`GAP ${t.gap?'tag':'attribute'} found`),
            i = {
                type: v.MEDIA_ERROR,
                details: E.FRAG_GAP,
                fatal: !1,
                frag: t,
                error: s,
                networkDetails: null
            };
        return e && (i.part = e), (e || t).stats.aborted = !0, new Pi(i)
    }
    class Pi extends Error {
        constructor(t) {
            super(t.error.message), this.data = void 0, this.data = t
        }
    }
    class Mi {
        constructor(t, e) {
            this.subtle = void 0, this.aesIV = void 0, this.subtle = t, this.aesIV = e
        }
        decrypt(t, e) {
            return this.subtle.decrypt({
                name: 'AES-CBC',
                iv: this.aesIV
            }, e, t)
        }
    }
    class Fi {
        constructor(t, e) {
            this.subtle = void 0, this.key = void 0, this.subtle = t, this.key = e
        }
        expandKey() {
            return this.subtle.importKey('raw', this.key, {
                name: 'AES-CBC'
            }, !1, ['encrypt', 'decrypt'])
        }
    }

    function Oi(t) {
        const e = t.byteLength,
            s = e && new DataView(t.buffer).getUint8(e - 1);
        return s ? it(t, 0, e - s) : t
    }
    class Ni {
        constructor() {
            this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable()
        }
        uint8ArrayToUint32Array_(t) {
            const e = new DataView(t),
                s = new Uint32Array(4);
            for (let t = 0; t < 4; t++) s[t] = e.getUint32(4 * t);
            return s
        }
        initTable() {
            const t = this.sBox,
                e = this.invSBox,
                s = this.subMix,
                i = s[0],
                r = s[1],
                n = s[2],
                a = s[3],
                o = this.invSubMix,
                l = o[0],
                h = o[1],
                d = o[2],
                c = o[3],
                u = new Uint32Array(256);
            let f = 0,
                g = 0,
                m = 0;
            for (m = 0; m < 256; m++) u[m] = m < 128 ? m << 1 : m << 1 ^ 283;
            for (m = 0; m < 256; m++) {
                let s = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                s = s >>> 8 ^ 255 & s ^ 99, t[f] = s, e[s] = f;
                const o = u[f],
                    m = u[o],
                    p = u[m];
                let y = 257 * u[s] ^ 16843008 * s;
                i[f] = y << 24 | y >>> 8, r[f] = y << 16 | y >>> 16, n[f] = y << 8 | y >>> 24, a[f] = y, y = 16843009 * p ^ 65537 * m ^ 257 * o ^ 16843008 * f, l[s] = y << 24 | y >>> 8, h[s] = y << 16 | y >>> 16, d[s] = y << 8 | y >>> 24, c[s] = y, f ? (f = o ^ u[u[u[p ^ o]]], g ^= u[u[g]]) : f = g = 1
            }
        }
        expandKey(t) {
            const e = this.uint8ArrayToUint32Array_(t);
            let s = !0,
                i = 0;
            for (; i < e.length && s;) s = e[i] === this.key[i], i++;
            if (s) return;
            this.key = e;
            const r = this.keySize = e.length;
            if (4 !== r && 6 !== r && 8 !== r) throw new Error('Invalid aes key size=' + r);
            const n = this.ksRows = 4 * (r + 6 + 1);
            let a, o;
            const l = this.keySchedule = new Uint32Array(n),
                h = this.invKeySchedule = new Uint32Array(n),
                d = this.sBox,
                c = this.rcon,
                u = this.invSubMix,
                f = u[0],
                g = u[1],
                m = u[2],
                p = u[3];
            let y, v;
            for (a = 0; a < n; a++) a < r ? y = l[a] = e[a] : (v = y, a % r == 0 ? (v = v << 8 | v >>> 24, v = d[v >>> 24] << 24 | d[v >>> 16 & 255] << 16 | d[v >>> 8 & 255] << 8 | d[255 & v], v ^= c[a / r | 0] << 24) : r > 6 && a % r == 4 && (v = d[v >>> 24] << 24 | d[v >>> 16 & 255] << 16 | d[v >>> 8 & 255] << 8 | d[255 & v]), l[a] = y = (l[a - r] ^ v) >>> 0);
            for (o = 0; o < n; o++) a = n - o, v = 3 & o ? l[a] : l[a - 4], h[o] = o < 4 || a <= 4 ? v : f[d[v >>> 24]] ^ g[d[v >>> 16 & 255]] ^ m[d[v >>> 8 & 255]] ^ p[d[255 & v]], h[o] = h[o] >>> 0
        }
        networkToHostOrderSwap(t) {
            return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
        }
        decrypt(t, e, s) {
            const i = this.keySize + 6,
                r = this.invKeySchedule,
                n = this.invSBox,
                a = this.invSubMix,
                o = a[0],
                l = a[1],
                h = a[2],
                d = a[3],
                c = this.uint8ArrayToUint32Array_(s);
            let u = c[0],
                f = c[1],
                g = c[2],
                m = c[3];
            const p = new Int32Array(t),
                y = new Int32Array(p.length);
            let v, E, T, S, L, A, R, b, D, k, I, C, w, _;
            const x = this.networkToHostOrderSwap;
            for (; e < p.length;) {
                for (D = x(p[e]), k = x(p[e + 1]), I = x(p[e + 2]), C = x(p[e + 3]), L = D ^ r[0], A = C ^ r[1], R = I ^ r[2], b = k ^ r[3], w = 4, _ = 1; _ < i; _++) v = o[L >>> 24] ^ l[A >> 16 & 255] ^ h[R >> 8 & 255] ^ d[255 & b] ^ r[w], E = o[A >>> 24] ^ l[R >> 16 & 255] ^ h[b >> 8 & 255] ^ d[255 & L] ^ r[w + 1], T = o[R >>> 24] ^ l[b >> 16 & 255] ^ h[L >> 8 & 255] ^ d[255 & A] ^ r[w + 2], S = o[b >>> 24] ^ l[L >> 16 & 255] ^ h[A >> 8 & 255] ^ d[255 & R] ^ r[w + 3], L = v, A = E, R = T, b = S, w += 4;
                v = n[L >>> 24] << 24 ^ n[A >> 16 & 255] << 16 ^ n[R >> 8 & 255] << 8 ^ n[255 & b] ^ r[w], E = n[A >>> 24] << 24 ^ n[R >> 16 & 255] << 16 ^ n[b >> 8 & 255] << 8 ^ n[255 & L] ^ r[w + 1], T = n[R >>> 24] << 24 ^ n[b >> 16 & 255] << 16 ^ n[L >> 8 & 255] << 8 ^ n[255 & A] ^ r[w + 2], S = n[b >>> 24] << 24 ^ n[L >> 16 & 255] << 16 ^ n[A >> 8 & 255] << 8 ^ n[255 & R] ^ r[w + 3], y[e] = x(v ^ u), y[e + 1] = x(S ^ f), y[e + 2] = x(T ^ g), y[e + 3] = x(E ^ m), u = D, f = k, g = I, m = C, e += 4
            }
            return y.buffer
        }
    }
    class Ui {
        constructor(t, {
            removePKCS7Padding: e = !0
        } = {}) {
            if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.useSoftware = t.enableSoftwareAES, this.removePKCS7Padding = e, e) try {
                const t = self.crypto;
                t && (this.subtle = t.subtle || t.webkitSubtle)
            } catch (t) {}
            null === this.subtle && (this.useSoftware = !0)
        }
        destroy() {
            this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null
        }
        isSync() {
            return this.useSoftware
        }
        flush() {
            const {
                currentResult: t,
                remainderData: e
            } = this;
            if (!t || e) return this.reset(), null;
            const s = new Uint8Array(t);
            return this.reset(), this.removePKCS7Padding ? Oi(s) : s
        }
        reset() {
            this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null)
        }
        decrypt(t, e, s) {
            return this.useSoftware ? new Promise(((i, r) => {
                this.softwareDecrypt(new Uint8Array(t), e, s);
                const n = this.flush();
                n ? i(n.buffer) : r(new Error('[softwareDecrypt] Failed to decrypt data'))
            })) : this.webCryptoDecrypt(new Uint8Array(t), e, s)
        }
        softwareDecrypt(t, e, s) {
            const {
                currentIV: i,
                currentResult: r,
                remainderData: n
            } = this;
            this.logOnce('JS AES decrypt'), n && (t = Wt(n, t), this.remainderData = null);
            const a = this.getValidChunk(t);
            if (!a.length) return null;
            i && (s = i);
            let o = this.softwareDecrypter;
            o || (o = this.softwareDecrypter = new Ni), o.expandKey(e);
            const l = r;
            return this.currentResult = o.decrypt(a.buffer, 0, s), this.currentIV = it(a, -16).buffer, l || null
        }
        webCryptoDecrypt(t, e, s) {
            const i = this.subtle;
            return this.key === e && this.fastAesKey || (this.key = e, this.fastAesKey = new Fi(i, e)), this.fastAesKey.expandKey().then((e => {
                if (!i) return Promise.reject(new Error('web crypto not initialized'));
                this.logOnce('WebCrypto AES decrypt');
                return new Mi(i, new Uint8Array(s)).decrypt(t.buffer, e)
            })).catch((i => (D.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${i.name}: ${i.message}`), this.onWebCryptoError(t, e, s))))
        }
        onWebCryptoError(t, e, s) {
            this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(t, e, s);
            const i = this.flush();
            if (i) return i.buffer;
            throw new Error('WebCrypto and softwareDecrypt: failed to decrypt data')
        }
        getValidChunk(t) {
            let e = t;
            const s = t.length - t.length % 16;
            return s !== t.length && (e = it(t, 0, s), this.remainderData = it(t, s)), e
        }
        logOnce(t) {
            this.logEnabled && (D.log(`[decrypter]: ${t}`), this.logEnabled = !1)
        }
    }
    const Bi = function(t) {
            let e = '';
            const s = t.length;
            for (let i = 0; i < s; i++) e += `[${t.start(i).toFixed(3)}-${t.end(i).toFixed(3)}]`;
            return e
        },
        $i = 'STOPPED',
        Gi = 'IDLE',
        Ki = 'KEY_LOADING',
        Hi = 'FRAG_LOADING',
        Vi = 'FRAG_LOADING_WAITING_RETRY',
        Yi = 'WAITING_TRACK',
        Wi = 'PARSING',
        ji = 'PARSED',
        qi = 'ENDED',
        Xi = 'ERROR',
        zi = 'WAITING_INIT_PTS',
        Qi = 'WAITING_LEVEL';
    class Ji extends di {
        constructor(t, e, s, i, r) {
            super(), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = $i, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = !1, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.loadedmetadata = !1, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = !1, this.decrypter = void 0, this.initPTS = [], this.onvseeking = null, this.onvended = null, this.logPrefix = '', this.log = void 0, this.warn = void 0, this.playlistType = r, this.logPrefix = i, this.log = D.log.bind(D, `${i}:`), this.warn = D.warn.bind(D, `${i}:`), this.hls = t, this.fragmentLoader = new wi(t.config), this.keyLoader = s, this.fragmentTracker = e, this.config = t.config, this.decrypter = new Ui(t.config), t.on(y.MANIFEST_LOADED, this.onManifestLoaded, this)
        }
        doTick() {
            this.onTickEnd()
        }
        onTickEnd() {}
        startLoad(t) {}
        stopLoad() {
            this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
            const t = this.fragCurrent;
            null != t && t.loader && (t.abortRequests(), this.fragmentTracker.removeFragment(t)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = $i
        }
        _streamEnded(t, e) {
            if (e.live || t.nextStart || !t.end || !this.media) return !1;
            const s = e.partList;
            if (null != s && s.length) {
                const t = s[s.length - 1];
                return Ei.isBuffered(this.media, t.start + t.duration / 2)
            }
            const i = e.fragments[e.fragments.length - 1].type;
            return this.fragmentTracker.isEndListAppended(i)
        }
        getLevelDetails() {
            var t;
            if (this.levels && null !== this.levelLastLoaded) return null == (t = this.levelLastLoaded) ? void 0 : t.details
        }
        onMediaAttached(t, e) {
            const s = this.media = this.mediaBuffer = e.media;
            this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), s.addEventListener('seeking', this.onvseeking), s.addEventListener('ended', this.onvended);
            const i = this.config;
            this.levels && i.autoStartLoad && this.state === $i && this.startLoad(i.startPosition)
        }
        onMediaDetaching() {
            const t = this.media;
            null != t && t.ended && (this.log('MSE detaching and video ended, reset startPosition'), this.startPosition = this.lastCurrentTime = 0), t && this.onvseeking && this.onvended && (t.removeEventListener('seeking', this.onvseeking), t.removeEventListener('ended', this.onvended), this.onvseeking = this.onvended = null), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
        }
        onMediaSeeking() {
            const {
                config: t,
                fragCurrent: e,
                media: s,
                mediaBuffer: i,
                state: r
            } = this, n = s ? s.currentTime : 0, a = Ei.bufferInfo(i || s, n, t.maxBufferHole);
            if (this.log(`media seeking to ${g(n)?n.toFixed(3):n}, state: ${r}`), this.state === qi) this.resetLoadingState();
            else if (e) {
                const s = t.maxFragLookUpTolerance,
                    i = e.start - s,
                    r = e.start + e.duration + s;
                if (!a.len || r < a.start || i > a.end) {
                    const t = n > r;
                    (n < i || t) && (t && e.loader && (this.log('seeking outside of buffer while fragment load in progress, cancel fragment load'), e.abortRequests(), this.resetLoadingState()), this.fragPrevious = null)
                }
            }
            s && (this.fragmentTracker.removeFragmentsInRange(n, 1 / 0, this.playlistType, !0), this.lastCurrentTime = n), this.loadedmetadata || a.len || (this.nextLoadPosition = this.startPosition = n), this.tickImmediate()
        }
        onMediaEnded() {
            this.startPosition = this.lastCurrentTime = 0
        }
        onManifestLoaded(t, e) {
            this.startTimeOffset = e.startTimeOffset, this.initPTS = []
        }
        onHandlerDestroying() {
            this.hls.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), this.stopLoad(), super.onHandlerDestroying(), this.hls = null
        }
        onHandlerDestroyed() {
            this.state = $i, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed()
        }
        loadFragment(t, e, s) {
            this._loadFragForPlayback(t, e, s)
        }
        _loadFragForPlayback(t, e, s) {
            this._doFragLoad(t, e, s, (e => {
                if (this.fragContextChanged(t)) return this.warn(`Fragment ${t.sn}${e.part?' p: '+e.part.index:''} of level ${t.level} was dropped during download.`), void this.fragmentTracker.removeFragment(t);
                t.stats.chunkCount++, this._handleFragmentLoadProgress(e)
            })).then((e => {
                if (!e) return;
                const s = this.state;
                this.fragContextChanged(t) ? (s === Hi || !this.fragCurrent && s === Wi) && (this.fragmentTracker.removeFragment(t), this.state = Gi) : ('payload' in e && (this.log(`Loaded fragment ${t.sn} of level ${t.level}`), this.hls.trigger(y.FRAG_LOADED, e)), this._handleFragmentLoadComplete(e))
            })).catch((e => {
                this.state !== $i && this.state !== Xi && (this.warn(e), this.resetFragmentLoading(t))
            }))
        }
        clearTrackerIfNeeded(t) {
            var e;
            const {
                fragmentTracker: s
            } = this;
            if (s.getState(t) === ui) {
                const e = t.type,
                    i = this.getFwdBufferInfo(this.mediaBuffer, e),
                    r = Math.max(t.duration, i ? i.len : this.config.maxBufferLength);
                this.reduceMaxBufferLength(r) && s.removeFragment(t)
            } else 0 === (null == (e = this.mediaBuffer) ? void 0 : e.buffered.length) ? s.removeAllFragments() : s.hasParts(t.type) && (s.detectPartialFragments({
                frag: t,
                part: null,
                stats: t.stats,
                id: t.type
            }), s.getState(t) === fi && s.removeFragment(t))
        }
        checkLiveUpdate(t) {
            if (t.updated && !t.live) {
                const e = t.fragments[t.fragments.length - 1];
                this.fragmentTracker.detectPartialFragments({
                    frag: e,
                    part: null,
                    stats: e.stats,
                    id: e.type
                })
            }
            t.fragments[0] || (t.deltaUpdateFailed = !0)
        }
        flushMainBuffer(t, e, s = null) {
            if (!(t - e)) return;
            const i = {
                startOffset: t,
                endOffset: e,
                type: s
            };
            this.hls.trigger(y.BUFFER_FLUSHING, i)
        }
        _loadInitSegment(t, e) {
            this._doFragLoad(t, e).then((e => {
                if (!e || this.fragContextChanged(t) || !this.levels) throw new Error('init load aborted');
                return e
            })).then((e => {
                const {
                    hls: s
                } = this, {
                    payload: i
                } = e, r = t.decryptdata;
                if (i && i.byteLength > 0 && null != r && r.key && r.iv && 'AES-128' === r.method) {
                    const n = self.performance.now();
                    return this.decrypter.decrypt(new Uint8Array(i), r.key.buffer, r.iv.buffer).catch((e => {
                        throw s.trigger(y.ERROR, {
                            type: v.MEDIA_ERROR,
                            details: E.FRAG_DECRYPT_ERROR,
                            fatal: !1,
                            error: e,
                            reason: e.message,
                            frag: t
                        }), e
                    })).then((i => {
                        const r = self.performance.now();
                        return s.trigger(y.FRAG_DECRYPTED, {
                            frag: t,
                            payload: i,
                            stats: {
                                tstart: n,
                                tdecrypt: r
                            }
                        }), e.payload = i, this.completeInitSegmentLoad(e)
                    }))
                }
                return this.completeInitSegmentLoad(e)
            })).catch((e => {
                this.state !== $i && this.state !== Xi && (this.warn(e), this.resetFragmentLoading(t))
            }))
        }
        completeInitSegmentLoad(t) {
            const {
                levels: e
            } = this;
            if (!e) throw new Error('init load aborted, missing levels');
            const s = t.frag.stats;
            this.state = Gi, t.frag.data = new Uint8Array(t.payload), s.parsing.start = s.buffering.start = self.performance.now(), s.parsing.end = s.buffering.end = self.performance.now(), this.tick()
        }
        fragContextChanged(t) {
            const {
                fragCurrent: e
            } = this;
            return !t || !e || t.sn !== e.sn || t.level !== e.level
        }
        fragBufferedComplete(t, e) {
            var s, i, r, n;
            const a = this.mediaBuffer ? this.mediaBuffer : this.media;
            if (this.log(`Buffered ${t.type} sn: ${t.sn}${e?' part: '+e.index:''} of ${this.playlistType===He.MAIN?'level':'track'} ${t.level} (frag:[${(null!=(s=t.startPTS)?s:NaN).toFixed(3)}-${(null!=(i=t.endPTS)?i:NaN).toFixed(3)}] > buffer:${a?Bi(Ei.getBuffered(a)):'(detached)'})`), 'initSegment' !== t.sn) {
                var o;
                if (t.type !== He.SUBTITLE) {
                    const e = t.elementaryStreams;
                    if (!Object.keys(e).some((t => !!e[t]))) return void(this.state = Gi)
                }
                const e = null == (o = this.levels) ? void 0 : o[t.level];
                null != e && e.fragmentError && (this.log(`Resetting level fragment error count of ${e.fragmentError} on frag buffered`), e.fragmentError = 0)
            }
            this.state = Gi, a && (!this.loadedmetadata && t.type == He.MAIN && a.buffered.length && (null == (r = this.fragCurrent) ? void 0 : r.sn) === (null == (n = this.fragPrevious) ? void 0 : n.sn) && (this.loadedmetadata = !0, this.seekToStartPos()), this.tick())
        }
        seekToStartPos() {}
        _handleFragmentLoadComplete(t) {
            const {
                transmuxer: e
            } = this;
            if (!e) return;
            const {
                frag: s,
                part: i,
                partsLoaded: r
            } = t, n = !r || 0 === r.length || r.some((t => !t)), a = new Ti(s.level, s.sn, s.stats.chunkCount + 1, 0, i ? i.index : -1, !n);
            e.flush(a)
        }
        _handleFragmentLoadProgress(t) {}
        _doFragLoad(t, e, s = null, i) {
            var r;
            const n = null == e ? void 0 : e.details;
            if (!this.levels || !n) throw new Error(`frag load aborted, missing level${n?'':' detail'}s`);
            let a = null;
            if (!t.encrypted || null != (r = t.decryptdata) && r.key ? !t.encrypted && n.encryptedFragments.length && this.keyLoader.loadClear(t, n.encryptedFragments) : (this.log(`Loading key for ${t.sn} of [${n.startSN}-${n.endSN}], ${'[stream-controller]'===this.logPrefix?'level':'track'} ${t.level}`), this.state = Ki, this.fragCurrent = t, a = this.keyLoader.load(t).then((t => {
                    if (!this.fragContextChanged(t.frag)) return this.hls.trigger(y.KEY_LOADED, t), this.state === Ki && (this.state = Gi), t
                })), this.hls.trigger(y.KEY_LOADING, {
                    frag: t
                }), null === this.fragCurrent && (a = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))), s = Math.max(t.start, s || 0), this.config.lowLatencyMode && 'initSegment' !== t.sn) {
                const r = n.partList;
                if (r && i) {
                    s > t.end && n.fragmentHint && (t = n.fragmentHint);
                    const o = this.getNextPart(r, t, s);
                    if (o > -1) {
                        const l = r[o];
                        let h;
                        return this.log(`Loading part sn: ${t.sn} p: ${l.index} cc: ${t.cc} of playlist [${n.startSN}-${n.endSN}] parts [0-${o}-${r.length-1}] ${'[stream-controller]'===this.logPrefix?'level':'track'}: ${t.level}, target: ${parseFloat(s.toFixed(3))}`), this.nextLoadPosition = l.start + l.duration, this.state = Hi, h = a ? a.then((s => !s || this.fragContextChanged(s.frag) ? null : this.doFragPartsLoad(t, l, e, i))).catch((t => this.handleFragLoadError(t))) : this.doFragPartsLoad(t, l, e, i).catch((t => this.handleFragLoadError(t))), this.hls.trigger(y.FRAG_LOADING, {
                            frag: t,
                            part: l,
                            targetBufferTime: s
                        }), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : h
                    }
                    if (!t.url || this.loadedEndOfParts(r, s)) return Promise.resolve(null)
                }
            }
            this.log(`Loading fragment ${t.sn} cc: ${t.cc} ${n?'of ['+n.startSN+'-'+n.endSN+'] ':''}${'[stream-controller]'===this.logPrefix?'level':'track'}: ${t.level}, target: ${parseFloat(s.toFixed(3))}`), g(t.sn) && !this.bitrateTest && (this.nextLoadPosition = t.start + t.duration), this.state = Hi;
            const o = this.config.progressive;
            let l;
            return l = o && a ? a.then((e => !e || this.fragContextChanged(null == e ? void 0 : e.frag) ? null : this.fragmentLoader.load(t, i))).catch((t => this.handleFragLoadError(t))) : Promise.all([this.fragmentLoader.load(t, o ? i : void 0), a]).then((([t]) => (!o && t && i && i(t), t))).catch((t => this.handleFragLoadError(t))), this.hls.trigger(y.FRAG_LOADING, {
                frag: t,
                targetBufferTime: s
            }), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : l
        }
        doFragPartsLoad(t, e, s, i) {
            return new Promise(((r, n) => {
                var a;
                const o = [],
                    l = null == (a = s.details) ? void 0 : a.partList,
                    h = e => {
                        this.fragmentLoader.loadPart(t, e, i).then((i => {
                            o[e.index] = i;
                            const n = i.part;
                            this.hls.trigger(y.FRAG_LOADED, i);
                            const a = bs(s, t.sn, e.index + 1) || Ds(l, t.sn, e.index + 1);
                            if (!a) return r({
                                frag: t,
                                part: n,
                                partsLoaded: o
                            });
                            h(a)
                        })).catch(n)
                    };
                h(e)
            }))
        }
        handleFragLoadError(t) {
            if ('data' in t) {
                const e = t.data;
                t.data && e.details === E.INTERNAL_ABORTED ? this.handleFragLoadAborted(e.frag, e.part) : this.hls.trigger(y.ERROR, e)
            } else this.hls.trigger(y.ERROR, {
                type: v.OTHER_ERROR,
                details: E.INTERNAL_EXCEPTION,
                err: t,
                error: t,
                fatal: !0
            });
            return null
        }
        _handleTransmuxerFlush(t) {
            const e = this.getCurrentContext(t);
            if (!e || this.state !== Wi) return void(this.fragCurrent || this.state === $i || this.state === Xi || (this.state = Gi));
            const {
                frag: s,
                part: i,
                level: r
            } = e, n = self.performance.now();
            s.stats.parsing.end = n, i && (i.stats.parsing.end = n), this.updateLevelTiming(s, i, r, t.partial)
        }
        getCurrentContext(t) {
            const {
                levels: e,
                fragCurrent: s
            } = this, {
                level: i,
                sn: r,
                part: n
            } = t;
            if (null == e || !e[i]) return this.warn(`Levels object was unset while buffering fragment ${r} of level ${i}. The current chunk will not be buffered.`), null;
            const a = e[i],
                o = n > -1 ? bs(a, r, n) : null,
                l = o ? o.fragment : Rs(a, r, s);
            return l ? (s && s !== l && (l.stats = s.stats), {
                frag: l,
                part: o,
                level: a
            }) : null
        }
        bufferFragmentData(t, e, s, i, r) {
            var n;
            if (!t || this.state !== Wi) return;
            const {
                data1: a,
                data2: o
            } = t;
            let l = a;
            if (a && o && (l = Wt(a, o)), null == (n = l) || !n.length) return;
            const h = {
                type: t.type,
                frag: e,
                part: s,
                chunkMeta: i,
                parent: e.type,
                data: l
            };
            if (this.hls.trigger(y.BUFFER_APPENDING, h), t.dropped && t.independent && !s) {
                if (r) return;
                this.flushBufferGap(e)
            }
        }
        flushBufferGap(t) {
            const e = this.media;
            if (!e) return;
            if (!Ei.isBuffered(e, e.currentTime)) return void this.flushMainBuffer(0, t.start);
            const s = e.currentTime,
                i = Ei.bufferInfo(e, s, 0),
                r = t.duration,
                n = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * r),
                a = Math.max(Math.min(t.start - n, i.end - n), s + n);
            t.start - a > n && this.flushMainBuffer(a, t.start)
        }
        getFwdBufferInfo(t, e) {
            const s = this.getLoadPosition();
            return g(s) ? this.getFwdBufferInfoAtPos(t, s, e) : null
        }
        getFwdBufferInfoAtPos(t, e, s) {
            const {
                config: {
                    maxBufferHole: i
                }
            } = this, r = Ei.bufferInfo(t, e, i);
            if (0 === r.len && void 0 !== r.nextStart) {
                const n = this.fragmentTracker.getBufferedFrag(e, s);
                if (n && r.nextStart < n.end) return Ei.bufferInfo(t, e, Math.max(r.nextStart, i))
            }
            return r
        }
        getMaxBufferLength(t) {
            const {
                config: e
            } = this;
            let s;
            return s = t ? Math.max(8 * e.maxBufferSize / t, e.maxBufferLength) : e.maxBufferLength, Math.min(s, e.maxMaxBufferLength)
        }
        reduceMaxBufferLength(t) {
            const e = this.config,
                s = t || e.maxBufferLength;
            return e.maxMaxBufferLength >= s && (e.maxMaxBufferLength /= 2, this.warn(`Reduce max buffer length to ${e.maxMaxBufferLength}s`), !0)
        }
        getAppendedFrag(t, e = He.MAIN) {
            const s = this.fragmentTracker.getAppendedFrag(t, He.MAIN);
            return s && 'fragment' in s ? s.fragment : s
        }
        getNextFragment(t, e) {
            const s = e.fragments,
                i = s.length;
            if (!i) return null;
            const {
                config: r
            } = this, n = s[0].start;
            let a;
            if (e.live) {
                const o = r.initialLiveManifestSize;
                if (i < o) return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${o})`), null;
                (!e.PTSKnown && !this.startFragRequested && -1 === this.startPosition || t < n) && (a = this.getInitialLiveFragment(e, s), this.startPosition = this.nextLoadPosition = a ? this.hls.liveSyncPosition || a.start : t)
            } else t <= n && (a = s[0]);
            if (!a) {
                const s = r.lowLatencyMode ? e.partEnd : e.fragmentEnd;
                a = this.getFragmentAtPosition(t, s, e)
            }
            return this.mapToInitFragWhenRequired(a)
        }
        isLoopLoading(t, e) {
            const s = this.fragmentTracker.getState(t);
            return (s === gi || s === fi && !!t.gap) && this.nextLoadPosition > e
        }
        getNextFragmentLoopLoading(t, e, s, i, r) {
            const n = t.gap,
                a = this.getNextFragment(this.nextLoadPosition, e);
            if (null === a) return a;
            if (t = a, n && t && !t.gap && s.nextStart) {
                const e = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, s.nextStart, i);
                if (null !== e && s.len + e.len >= r) return this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${t.sn}`), null
            }
            return t
        }
        mapToInitFragWhenRequired(t) {
            return null == t || !t.initSegment || null != t && t.initSegment.data || this.bitrateTest ? t : t.initSegment
        }
        getNextPart(t, e, s) {
            let i = -1,
                r = !1,
                n = !0;
            for (let a = 0, o = t.length; a < o; a++) {
                const o = t[a];
                if (n = n && !o.independent, i > -1 && s < o.start) break;
                const l = o.loaded;
                l ? i = -1 : (r || o.independent || n) && o.fragment === e && (i = a), r = l
            }
            return i
        }
        loadedEndOfParts(t, e) {
            const s = t[t.length - 1];
            return s && e > s.start && s.loaded
        }
        getInitialLiveFragment(t, e) {
            const s = this.fragPrevious;
            let i = null;
            if (s) {
                if (t.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${s.programDateTime}`), i = Fs(e, s.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i) {
                    const r = s.sn + 1;
                    if (r >= t.startSN && r <= t.endSN) {
                        const n = e[r - t.startSN];
                        s.cc === n.cc && (i = n, this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`))
                    }
                    i || (i = Bs(e, s.cc), i && this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`))
                }
            } else {
                const e = this.hls.liveSyncPosition;
                null !== e && (i = this.getFragmentAtPosition(e, this.bitrateTest ? t.fragmentEnd : t.edge, t))
            }
            return i
        }
        getFragmentAtPosition(t, e, s) {
            const {
                config: i
            } = this;
            let {
                fragPrevious: r
            } = this, {
                fragments: n,
                endSN: a
            } = s;
            const {
                fragmentHint: o
            } = s, l = i.maxFragLookUpTolerance, h = s.partList, d = !!(i.lowLatencyMode && null != h && h.length && o);
            let c;
            if (d && o && !this.bitrateTest && (n = n.concat(o), a = o.sn), t < e) {
                c = Os(r, n, t, t > e - l ? 0 : l)
            } else c = n[n.length - 1];
            if (c) {
                const t = c.sn - s.startSN,
                    e = this.fragmentTracker.getState(c);
                if ((e === gi || e === fi && c.gap) && (r = c), r && c.sn === r.sn && (!d || h[0].fragment.sn > c.sn)) {
                    if (r && c.level === r.level) {
                        const e = n[t + 1];
                        c = c.sn < a && this.fragmentTracker.getState(e) !== gi ? e : null
                    }
                }
            }
            return c
        }
        synchronizeToLiveEdge(t) {
            const {
                config: e,
                media: s
            } = this;
            if (!s) return;
            const i = this.hls.liveSyncPosition,
                r = s.currentTime,
                n = t.fragments[0].start,
                a = t.edge,
                o = r >= n - e.maxFragLookUpTolerance && r <= a;
            if (null !== i && s.duration > i && (r < i || !o)) {
                const n = void 0 !== e.liveMaxLatencyDuration ? e.liveMaxLatencyDuration : e.liveMaxLatencyDurationCount * t.targetduration;
                (!o && s.readyState < 4 || r < a - n) && (this.loadedmetadata || (this.nextLoadPosition = i), s.readyState && (this.warn(`Playback: ${r.toFixed(3)} is located too far from the end of live sliding playlist: ${a}, reset currentTime to : ${i.toFixed(3)}`), s.currentTime = i))
            }
        }
        alignPlaylists(t, e, s) {
            const i = t.fragments.length;
            if (!i) return this.warn("No fragments in live playlist"), 0;
            const r = t.fragments[0].start,
                n = !e,
                a = t.alignedSliding && g(r);
            if (n || !a && !r) {
                const {
                    fragPrevious: r
                } = this;
                Di(r, s, t);
                const n = t.fragments[0].start;
                return this.log(`Live playlist sliding: ${n.toFixed(2)} start-sn: ${e?e.startSN:'na'}->${t.startSN} prev-sn: ${r?r.sn:'na'} fragments: ${i}`), n
            }
            return r
        }
        waitForCdnTuneIn(t) {
            return t.live && t.canBlockReload && t.partTarget && t.tuneInGoal > Math.max(t.partHoldBack, 3 * t.partTarget)
        }
        setStartPosition(t, e) {
            let s = this.startPosition;
            if (s < e && (s = -1), -1 === s || -1 === this.lastCurrentTime) {
                const i = null !== this.startTimeOffset,
                    r = i ? this.startTimeOffset : t.startTimeOffset;
                null !== r && g(r) ? (s = e + r, r < 0 && (s += t.totalduration), s = Math.min(Math.max(e, s), e + t.totalduration), this.log(`Start time offset ${r} found in ${i?'multivariant':'media'} playlist, adjust startPosition to ${s}`), this.startPosition = s) : t.live ? s = this.hls.liveSyncPosition || e : this.startPosition = s = 0, this.lastCurrentTime = s
            }
            this.nextLoadPosition = s
        }
        getLoadPosition() {
            const {
                media: t
            } = this;
            let e = 0;
            return this.loadedmetadata && t ? e = t.currentTime : this.nextLoadPosition && (e = this.nextLoadPosition), e
        }
        handleFragLoadAborted(t, e) {
            this.transmuxer && 'initSegment' !== t.sn && t.stats.aborted && (this.warn(`Fragment ${t.sn}${e?' part '+e.index:''} of level ${t.level} was aborted`), this.resetFragmentLoading(t))
        }
        resetFragmentLoading(t) {
            this.fragCurrent && (this.fragContextChanged(t) || this.state === Vi) || (this.state = Gi)
        }
        onFragmentOrKeyLoadError(t, e) {
            if (e.chunkMeta && !e.frag) {
                const t = this.getCurrentContext(e.chunkMeta);
                t && (e.frag = t.frag)
            }
            const s = e.frag;
            if (!s || s.type !== t || !this.levels) return;
            var i;
            if (this.fragContextChanged(s)) return void this.warn(`Frag load error must match current frag to retry ${s.url} > ${null==(i=this.fragCurrent)?void 0:i.url}`);
            const r = e.details === E.FRAG_GAP;
            r && this.fragmentTracker.fragBuffered(s, !0);
            const n = e.errorAction,
                {
                    action: a,
                    retryCount: o = 0,
                    retryConfig: l
                } = n || {};
            if (n && a === $s.RetryRequest && l) {
                this.resetStartWhenNotLoaded(this.levelLastLoaded);
                const i = ws(l, o);
                this.warn(`Fragment ${s.sn} of ${t} ${s.level} errored with ${e.details}, retrying loading ${o+1}/${l.maxNumRetry} in ${i}ms`), n.resolved = !0, this.retryDate = self.performance.now() + i, this.state = Vi
            } else if (l && n) {
                if (this.resetFragmentErrors(t), !(o < l.maxNumRetry)) return void D.warn(`${e.details} reached or exceeded max retry (${o})`);
                r || a === $s.RemoveAlternatePermanently || (n.resolved = !0)
            } else(null == n ? void 0 : n.action) === $s.SendAlternateToPenaltyBox ? this.state = Qi : this.state = Xi;
            this.tickImmediate()
        }
        reduceLengthAndFlushBuffer(t) {
            if (this.state === Wi || this.state === ji) {
                const e = t.parent,
                    s = this.getFwdBufferInfo(this.mediaBuffer, e),
                    i = s && s.len > .5;
                i && this.reduceMaxBufferLength(s.len);
                const r = !i;
                return r && this.warn(`Buffer full error while media.currentTime is not buffered, flush ${e} buffer`), t.frag && (this.fragmentTracker.removeFragment(t.frag), this.nextLoadPosition = t.frag.start), this.resetLoadingState(), r
            }
            return !1
        }
        resetFragmentErrors(t) {
            t === He.AUDIO && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = !1), this.state !== $i && (this.state = Gi)
        }
        afterBufferFlushed(t, e, s) {
            if (!t) return;
            const i = Ei.getBuffered(t);
            this.fragmentTracker.detectEvictedFragments(e, i, s), this.state === qi && this.resetLoadingState()
        }
        resetLoadingState() {
            this.log('Reset loading state'), this.fragCurrent = null, this.fragPrevious = null, this.state = Gi
        }
        resetStartWhenNotLoaded(t) {
            if (!this.loadedmetadata) {
                this.startFragRequested = !1;
                const e = t ? t.details : null;
                null != e && e.live ? (this.startPosition = -1, this.setStartPosition(e, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition
            }
        }
        resetWhenMissingContext(t) {
            this.warn(`The loading context changed while buffering fragment ${t.sn} of level ${t.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState()
        }
        removeUnbufferedFrags(t = 0) {
            this.fragmentTracker.removeFragmentsInRange(t, 1 / 0, this.playlistType, !1, !0)
        }
        updateLevelTiming(t, e, s, i) {
            var r;
            const n = s.details;
            if (!n) return void this.warn('level.details undefined');
            if (!Object.keys(t.elementaryStreams).reduce(((e, r) => {
                    const a = t.elementaryStreams[r];
                    if (a) {
                        const o = a.endPTS - a.startPTS;
                        if (o <= 0) return this.warn(`Could not parse fragment ${t.sn} ${r} duration reliably (${o})`), e || !1;
                        const l = i ? 0 : ps(n, t, a.startPTS, a.endPTS, a.startDTS, a.endDTS);
                        return this.hls.trigger(y.LEVEL_PTS_UPDATED, {
                            details: n,
                            level: s,
                            drift: l,
                            type: r,
                            frag: t,
                            start: a.startPTS,
                            end: a.endPTS
                        }), !0
                    }
                    return e
                }), !1) && null === (null == (r = this.transmuxer) ? void 0 : r.error)) {
                const e = new Error(`Found no media in fragment ${t.sn} of level ${t.level} resetting transmuxer to fallback to playlist timing`);
                if (0 === s.fragmentError && (s.fragmentError++, t.gap = !0, this.fragmentTracker.removeFragment(t), this.fragmentTracker.fragBuffered(t, !0)), this.warn(e.message), this.hls.trigger(y.ERROR, {
                        type: v.MEDIA_ERROR,
                        details: E.FRAG_PARSING_ERROR,
                        fatal: !1,
                        error: e,
                        frag: t,
                        reason: `Found no media in msn ${t.sn} of level "${s.url}"`
                    }), !this.hls) return;
                this.resetTransmuxer()
            }
            this.state = ji, this.hls.trigger(y.FRAG_PARSED, {
                frag: t,
                part: e
            })
        }
        resetTransmuxer() {
            this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null)
        }
        recoverWorkerError(t) {
            'demuxerWorker' === t.event && (this.fragmentTracker.removeAllFragments(), this.resetTransmuxer(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState())
        }
        set state(t) {
            const e = this._state;
            e !== t && (this._state = t, this.log(`${e}->${t}`))
        }
        get state() {
            return this._state
        }
    }
    n.BaseStreamController = Ji;
    class Zi {
        constructor() {
            this.chunks = [], this.dataLength = 0
        }
        push(t) {
            this.chunks.push(t), this.dataLength += t.length
        }
        flush() {
            const {
                chunks: t,
                dataLength: e
            } = this;
            let s;
            return t.length ? (s = 1 === t.length ? t[0] : tr(t, e), this.reset(), s) : new Uint8Array(0)
        }
        reset() {
            this.chunks.length = 0, this.dataLength = 0
        }
    }

    function tr(t, e) {
        const s = new Uint8Array(e);
        let i = 0;
        for (let e = 0; e < t.length; e++) {
            const r = t[e];
            s.set(r, i), i += r.length
        }
        return s
    }

    function er() {
        const t = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], {
                type: 'text/javascript'
            }),
            e = self.URL.createObjectURL(t);
        return {
            worker: new self.Worker(e),
            objectURL: e
        }
    }

    function sr(t) {
        const e = new self.URL(t, self.location.href).href;
        return {
            worker: new self.Worker(e),
            scriptURL: e
        }
    }

    function ir(t = "", e = 9e4) {
        return {
            type: t,
            id: -1,
            pid: -1,
            inputTimeScale: e,
            sequenceNumber: -1,
            samples: [],
            dropped: 0
        }
    }
    class rr {
        constructor() {
            this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null
        }
        resetInitSegment(t, e, s, i) {
            this._id3Track = {
                type: 'id3',
                id: 3,
                pid: -1,
                inputTimeScale: 9e4,
                sequenceNumber: 0,
                samples: [],
                dropped: 0
            }
        }
        resetTimeStamp(t) {
            this.initPTS = t, this.resetContiguity()
        }
        resetContiguity() {
            this.basePTS = null, this.lastPTS = null, this.frameIndex = 0
        }
        canParse(t, e) {
            return !1
        }
        appendFrame(t, e, s) {}
        demux(t, e) {
            this.cachedData && (t = Wt(this.cachedData, t), this.cachedData = null);
            let s, i = at(t, 0),
                r = i ? i.length : 0;
            const n = this._audioTrack,
                a = this._id3Track,
                o = i ? ht(i) : void 0,
                l = t.length;
            for ((null === this.basePTS || 0 === this.frameIndex && g(o)) && (this.basePTS = nr(o, e, this.initPTS), this.lastPTS = this.basePTS), null === this.lastPTS && (this.lastPTS = this.basePTS), i && i.length > 0 && a.samples.push({
                    pts: this.lastPTS,
                    dts: this.lastPTS,
                    data: i,
                    type: ts.audioId3,
                    duration: Number.POSITIVE_INFINITY
                }); r < l;) {
                if (this.canParse(t, r)) {
                    const e = this.appendFrame(n, t, r);
                    e ? (this.frameIndex++, this.lastPTS = e.sample.pts, r += e.length, s = r) : r = l
                } else lt(t, r) ? (i = at(t, r), a.samples.push({
                    pts: this.lastPTS,
                    dts: this.lastPTS,
                    data: i,
                    type: ts.audioId3,
                    duration: Number.POSITIVE_INFINITY
                }), r += i.length, s = r) : r++;
                if (r === l && s !== l) {
                    const e = it(t, s);
                    this.cachedData ? this.cachedData = Wt(this.cachedData, e) : this.cachedData = e
                }
            }
            return {
                audioTrack: n,
                videoTrack: ir(),
                id3Track: a,
                textTrack: ir()
            }
        }
        demuxSampleAes(t, e, s) {
            return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`))
        }
        flush(t) {
            const e = this.cachedData;
            return e && (this.cachedData = null, this.demux(e, 0)), {
                audioTrack: this._audioTrack,
                videoTrack: ir(),
                id3Track: this._id3Track,
                textTrack: ir()
            }
        }
        destroy() {}
    }
    const nr = (t, e, s) => {
        if (g(t)) return 90 * t;
        return 9e4 * e + (s ? 9e4 * s.baseTime / s.timescale : 0)
    };

    function ar(t, e, s, i) {
        let r, n, a, o;
        const l = navigator.userAgent.toLowerCase(),
            h = i,
            d = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
        r = 1 + ((192 & e[s + 2]) >>> 6);
        const c = (60 & e[s + 2]) >>> 2;
        if (!(c > d.length - 1)) return a = (1 & e[s + 2]) << 2, a |= (192 & e[s + 3]) >>> 6, D.log(`manifest codec:${i}, ADTS type:${r}, samplingIndex:${c}`), /firefox/i.test(l) ? c >= 6 ? (r = 5, o = new Array(4), n = c - 3) : (r = 2, o = new Array(2), n = c) : -1 !== l.indexOf('android') ? (r = 2, o = new Array(2), n = c) : (r = 5, o = new Array(4), i && (-1 !== i.indexOf('mp4a.40.29') || -1 !== i.indexOf('mp4a.40.5')) || !i && c >= 6 ? n = c - 3 : ((i && -1 !== i.indexOf('mp4a.40.2') && (c >= 6 && 1 === a || /vivaldi/i.test(l)) || !i && 1 === a) && (r = 2, o = new Array(2)), n = c)), o[0] = r << 3, o[0] |= (14 & c) >> 1, o[1] |= (1 & c) << 7, o[1] |= a << 3, 5 === r && (o[1] |= (14 & n) >> 1, o[2] = (1 & n) << 7, o[2] |= 8, o[3] = 0), {
            config: o,
            samplerate: d[c],
            channelCount: a,
            codec: 'mp4a.40.' + r,
            manifestCodec: h
        }; {
            const e = new Error(`invalid ADTS sampling index:${c}`);
            t.emit(y.ERROR, y.ERROR, {
                type: v.MEDIA_ERROR,
                details: E.FRAG_PARSING_ERROR,
                fatal: !0,
                error: e,
                reason: e.message
            })
        }
    }

    function or(t, e) {
        return 255 === t[e] && 240 == (246 & t[e + 1])
    }

    function lr(t, e) {
        return 1 & t[e + 1] ? 7 : 9
    }

    function hr(t, e) {
        return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
    }

    function dr(t, e) {
        return e + 5 < t.length
    }

    function cr(t, e) {
        return e + 1 < t.length && or(t, e)
    }

    function ur(t, e) {
        return dr(t, e) && or(t, e) && hr(t, e) <= t.length - e
    }

    function fr(t, e) {
        if (cr(t, e)) {
            const s = lr(t, e);
            if (e + s >= t.length) return !1;
            const i = hr(t, e);
            if (i <= s) return !1;
            const r = e + i;
            return r === t.length || cr(t, r)
        }
        return !1
    }

    function gr(t, e, s, i, r) {
        if (!t.samplerate) {
            const n = ar(e, s, i, r);
            if (!n) return;
            t.config = n.config, t.samplerate = n.samplerate, t.channelCount = n.channelCount, t.codec = n.codec, t.manifestCodec = n.manifestCodec, D.log(`parsed codec:${t.codec}, rate:${n.samplerate}, channels:${n.channelCount}`)
        }
    }

    function mr(t) {
        return 9216e4 / t
    }

    function pr(t, e) {
        const s = lr(t, e);
        if (e + s <= t.length) {
            const i = hr(t, e) - s;
            if (i > 0) return {
                headerLength: s,
                frameLength: i
            }
        }
    }

    function yr(t, e, s, i, r) {
        const n = i + r * mr(t.samplerate),
            a = pr(e, s);
        let o;
        if (a) {
            const {
                frameLength: i,
                headerLength: r
            } = a, l = r + i, h = Math.max(0, s + l - e.length);
            h ? (o = new Uint8Array(l - r), o.set(e.subarray(s + r, e.length), 0)) : o = e.subarray(s + r, s + l);
            const d = {
                unit: o,
                pts: n
            };
            return h || t.samples.push(d), {
                sample: d,
                length: l,
                missing: h
            }
        }
        const l = e.length - s;
        o = new Uint8Array(l), o.set(e.subarray(s, e.length), 0);
        return {
            sample: {
                unit: o,
                pts: n
            },
            length: l,
            missing: -1
        }
    }
    let vr = null;
    const Er = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
        Tr = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
        Sr = [
            [0, 72, 144, 12],
            [0, 0, 0, 0],
            [0, 72, 144, 12],
            [0, 144, 144, 12]
        ],
        Lr = [0, 1, 1, 4];

    function Ar(t, e, s, i, r) {
        if (s + 24 > e.length) return;
        const n = Rr(e, s);
        if (n && s + n.frameLength <= e.length) {
            const a = i + r * (9e4 * n.samplesPerFrame / n.sampleRate),
                o = {
                    unit: e.subarray(s, s + n.frameLength),
                    pts: a,
                    dts: a
                };
            return t.config = [], t.channelCount = n.channelCount, t.samplerate = n.sampleRate, t.samples.push(o), {
                sample: o,
                length: n.frameLength,
                missing: 0
            }
        }
    }

    function Rr(t, e) {
        const s = t[e + 1] >> 3 & 3,
            i = t[e + 1] >> 1 & 3,
            r = t[e + 2] >> 4 & 15,
            n = t[e + 2] >> 2 & 3;
        if (1 !== s && 0 !== r && 15 !== r && 3 !== n) {
            const a = t[e + 2] >> 1 & 1,
                o = t[e + 3] >> 6,
                l = 1e3 * Er[14 * (3 === s ? 3 - i : 3 === i ? 3 : 4) + r - 1],
                h = Tr[3 * (3 === s ? 0 : 2 === s ? 1 : 2) + n],
                d = 3 === o ? 1 : 2,
                c = Sr[s][i],
                u = Lr[i],
                f = 8 * c * u,
                g = Math.floor(c * l / h + a) * u;
            if (null === vr) {
                const t = (navigator.userAgent || '').match(/Chrome\/(\d+)/i);
                vr = t ? parseInt(t[1]) : 0
            }
            return !!vr && vr <= 87 && 2 === i && l >= 224e3 && 0 === o && (t[e + 3] = 128 | t[e + 3]), {
                sampleRate: h,
                channelCount: d,
                frameLength: g,
                samplesPerFrame: f
            }
        }
    }

    function br(t, e) {
        return !(255 !== t[e] || 224 & ~t[e + 1] || !(6 & t[e + 1]))
    }

    function Dr(t, e) {
        return e + 1 < t.length && br(t, e)
    }

    function kr(t, e) {
        return br(t, e) && 4 <= t.length - e
    }

    function Ir(t, e) {
        if (e + 1 < t.length && br(t, e)) {
            const s = 4,
                i = Rr(t, e);
            let r = s;
            null != i && i.frameLength && (r = i.frameLength);
            const n = e + r;
            return n === t.length || Dr(t, n)
        }
        return !1
    }
    const Cr = /\/emsg[-/]ID3/i;
    const wr = (t, e) => {
        let s = 0,
            i = 5;
        e += i;
        const r = new Uint32Array(1),
            n = new Uint32Array(1),
            a = new Uint8Array(1);
        for (; i > 0;) {
            a[0] = t[e];
            const o = Math.min(i, 8),
                l = 8 - o;
            n[0] = 4278190080 >>> 24 + l << l, r[0] = (a[0] & n[0]) >> l, s = s ? s << o | r[0] : r[0], e += 1, i -= o
        }
        return s
    };
    class _r extends rr {
        constructor(t) {
            super(), this.observer = void 0, this.observer = t
        }
        resetInitSegment(t, e, s, i) {
            super.resetInitSegment(t, e, s, i), this._audioTrack = {
                container: 'audio/ac-3',
                type: 'audio',
                id: 2,
                pid: -1,
                sequenceNumber: 0,
                segmentCodec: 'ac3',
                samples: [],
                manifestCodec: e,
                duration: i,
                inputTimeScale: 9e4,
                dropped: 0
            }
        }
        canParse(t, e) {
            return e + 64 < t.length
        }
        appendFrame(t, e, s) {
            const i = xr(t, e, s, this.basePTS, this.frameIndex);
            if (-1 !== i) {
                return {
                    sample: t.samples[t.samples.length - 1],
                    length: i,
                    missing: 0
                }
            }
        }
        static probe(t) {
            if (!t) return !1;
            const e = at(t, 0);
            if (!e) return !1;
            const s = e.length;
            return 11 === t[s] && 119 === t[s + 1] && void 0 !== ht(e) && wr(t, s) < 16
        }
    }

    function xr(t, e, s, i, r) {
        if (s + 8 > e.length) return -1;
        if (11 !== e[s] || 119 !== e[s + 1]) return -1;
        const n = e[s + 4] >> 6;
        if (n >= 3) return -1;
        const a = [48e3, 44100, 32e3][n],
            o = 63 & e[s + 4],
            l = 2 * [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][3 * o + n];
        if (s + l > e.length) return -1;
        const h = e[s + 6] >> 5;
        let d = 0;
        2 === h ? d += 2 : (1 & h && 1 !== h && (d += 2), 4 & h && (d += 2));
        const c = (e[s + 6] << 8 | e[s + 7]) >> 12 - d & 1,
            u = [2, 1, 2, 3, 3, 4, 4, 5][h] + c,
            f = e[s + 5] >> 3,
            g = 7 & e[s + 5],
            m = new Uint8Array([n << 6 | f << 1 | g >> 2, (3 & g) << 6 | h << 3 | c << 2 | o >> 4, o << 4 & 224]),
            p = i + r * (1536 / a * 9e4),
            y = e.subarray(s, s + l);
        return t.config = m, t.channelCount = u, t.samplerate = a, t.samples.push({
            unit: y,
            pts: p
        }), l
    }
    class Pr {
        constructor() {
            this.VideoSample = null
        }
        createVideoSample(t, e, s, i) {
            return {
                key: t,
                frame: !1,
                pts: e,
                dts: s,
                units: [],
                debug: i,
                length: 0
            }
        }
        getLastNalUnit(t) {
            var e;
            let s, i = this.VideoSample;
            if (i && 0 !== i.units.length || (i = t[t.length - 1]), null != (e = i) && e.units) {
                const t = i.units;
                s = t[t.length - 1]
            }
            return s
        }
        pushAccessUnit(t, e) {
            if (t.units.length && t.frame) {
                if (void 0 === t.pts) {
                    const s = e.samples,
                        i = s.length;
                    if (!i) return void e.dropped++; {
                        const e = s[i - 1];
                        t.pts = e.pts, t.dts = e.dts
                    }
                }
                e.samples.push(t)
            }
            t.debug.length && D.log(t.pts + '/' + t.dts + ':' + t.debug)
        }
    }
    class Mr {
        constructor(t) {
            this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0
        }
        loadWord() {
            const t = this.data,
                e = this.bytesAvailable,
                s = t.byteLength - e,
                i = new Uint8Array(4),
                r = Math.min(4, e);
            if (0 === r) throw new Error('no bytes available');
            i.set(t.subarray(s, s + r)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * r, this.bytesAvailable -= r
        }
        skipBits(t) {
            let e;
            t = Math.min(t, 8 * this.bytesAvailable + this.bitsAvailable), this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (e = (t -= this.bitsAvailable) >> 3, t -= e << 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t)
        }
        readBits(t) {
            let e = Math.min(this.bitsAvailable, t);
            const s = this.word >>> 32 - e;
            if (t > 32 && D.error('Cannot read more than 32 bits at a time'), this.bitsAvailable -= e, this.bitsAvailable > 0) this.word <<= e;
            else {
                if (!(this.bytesAvailable > 0)) throw new Error('no bits available');
                this.loadWord()
            }
            return e = t - e, e > 0 && this.bitsAvailable ? s << e | this.readBits(e) : s
        }
        skipLZ() {
            let t;
            for (t = 0; t < this.bitsAvailable; ++t)
                if (this.word & 2147483648 >>> t) return this.word <<= t, this.bitsAvailable -= t, t;
            return this.loadWord(), t + this.skipLZ()
        }
        skipUEG() {
            this.skipBits(1 + this.skipLZ())
        }
        skipEG() {
            this.skipBits(1 + this.skipLZ())
        }
        readUEG() {
            const t = this.skipLZ();
            return this.readBits(t + 1) - 1
        }
        readEG() {
            const t = this.readUEG();
            return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
        }
        readBoolean() {
            return 1 === this.readBits(1)
        }
        readUByte() {
            return this.readBits(8)
        }
        readUShort() {
            return this.readBits(16)
        }
        readUInt() {
            return this.readBits(32)
        }
        skipScalingList(t) {
            let e, s = 8,
                i = 8;
            for (let r = 0; r < t; r++) 0 !== i && (e = this.readEG(), i = (s + e + 256) % 256), s = 0 === i ? s : i
        }
        readSPS() {
            let t, e, s, i = 0,
                r = 0,
                n = 0,
                a = 0;
            const o = this.readUByte.bind(this),
                l = this.readBits.bind(this),
                h = this.readUEG.bind(this),
                d = this.readBoolean.bind(this),
                c = this.skipBits.bind(this),
                u = this.skipEG.bind(this),
                f = this.skipUEG.bind(this),
                g = this.skipScalingList.bind(this);
            o();
            const m = o();
            if (l(5), c(3), o(), f(), 100 === m || 110 === m || 122 === m || 244 === m || 44 === m || 83 === m || 86 === m || 118 === m || 128 === m) {
                const t = h();
                if (3 === t && c(1), f(), f(), c(1), d())
                    for (e = 3 !== t ? 8 : 12, s = 0; s < e; s++) d() && g(s < 6 ? 16 : 64)
            }
            f();
            const p = h();
            if (0 === p) h();
            else if (1 === p)
                for (c(1), u(), u(), t = h(), s = 0; s < t; s++) u();
            f(), c(1);
            const y = h(),
                v = h(),
                E = l(1);
            0 === E && c(1), c(1), d() && (i = h(), r = h(), n = h(), a = h());
            let T = [1, 1];
            if (d() && d()) {
                switch (o()) {
                    case 1:
                        T = [1, 1];
                        break;
                    case 2:
                        T = [12, 11];
                        break;
                    case 3:
                        T = [10, 11];
                        break;
                    case 4:
                        T = [16, 11];
                        break;
                    case 5:
                        T = [40, 33];
                        break;
                    case 6:
                        T = [24, 11];
                        break;
                    case 7:
                        T = [20, 11];
                        break;
                    case 8:
                        T = [32, 11];
                        break;
                    case 9:
                        T = [80, 33];
                        break;
                    case 10:
                        T = [18, 11];
                        break;
                    case 11:
                        T = [15, 11];
                        break;
                    case 12:
                        T = [64, 33];
                        break;
                    case 13:
                        T = [160, 99];
                        break;
                    case 14:
                        T = [4, 3];
                        break;
                    case 15:
                        T = [3, 2];
                        break;
                    case 16:
                        T = [2, 1];
                        break;
                    case 255:
                        T = [o() << 8 | o(), o() << 8 | o()]
                }
            }
            return {
                width: Math.ceil(16 * (y + 1) - 2 * i - 2 * r),
                height: (2 - E) * (v + 1) * 16 - (E ? 2 : 4) * (n + a),
                pixelRatio: T
            }
        }
        readSliceType() {
            return this.readUByte(), this.readUEG(), this.readUEG()
        }
    }
    class Fr extends Pr {
        parseAVCPES(t, e, s, i, r) {
            const n = this.parseAVCNALu(t, s.data);
            let a, o = this.VideoSample,
                l = !1;
            s.data = null, o && n.length && !t.audFound && (this.pushAccessUnit(o, t), o = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts, '')), n.forEach((i => {
                var n;
                switch (i.type) {
                    case 1:
                        {
                            let e = !1;a = !0;
                            const r = i.data;
                            if (l && r.length > 4) {
                                const t = new Mr(r).readSliceType();
                                2 !== t && 4 !== t && 7 !== t && 9 !== t || (e = !0)
                            }
                            var h;
                            if (e) null != (h = o) && h.frame && !o.key && (this.pushAccessUnit(o, t), o = this.VideoSample = null);o || (o = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts, '')),
                            o.frame = !0,
                            o.key = e;
                            break
                        }
                    case 5:
                        a = !0, null != (n = o) && n.frame && !o.key && (this.pushAccessUnit(o, t), o = this.VideoSample = null), o || (o = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts, '')), o.key = !0, o.frame = !0;
                        break;
                    case 6:
                        a = !0, zt(i.data, 1, s.pts, e.samples);
                        break;
                    case 7:
                        {
                            var d, c;a = !0,
                            l = !0;
                            const e = i.data,
                                s = new Mr(e).readSPS();
                            if (!t.sps || t.width !== s.width || t.height !== s.height || (null == (d = t.pixelRatio) ? void 0 : d[0]) !== s.pixelRatio[0] || (null == (c = t.pixelRatio) ? void 0 : c[1]) !== s.pixelRatio[1]) {
                                t.width = s.width, t.height = s.height, t.pixelRatio = s.pixelRatio, t.sps = [e], t.duration = r;
                                const i = e.subarray(1, 4);
                                let n = 'avc1.';
                                for (let t = 0; t < 3; t++) {
                                    let e = i[t].toString(16);
                                    e.length < 2 && (e = '0' + e), n += e
                                }
                                t.codec = n
                            }
                            break
                        }
                    case 8:
                        a = !0, t.pps = [i.data];
                        break;
                    case 9:
                        a = !0, t.audFound = !0, o && this.pushAccessUnit(o, t), o = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts, '');
                        break;
                    case 12:
                        a = !0;
                        break;
                    default:
                        a = !1, o && (o.debug += 'unknown NAL ' + i.type + ' ')
                }
                if (o && a) {
                    o.units.push(i)
                }
            })), i && o && (this.pushAccessUnit(o, t), this.VideoSample = null)
        }
        parseAVCNALu(t, e) {
            const s = e.byteLength;
            let i = t.naluState || 0;
            const r = i,
                n = [];
            let a, o, l, h = 0,
                d = -1,
                c = 0;
            for (-1 === i && (d = 0, c = 31 & e[0], i = 0, h = 1); h < s;)
                if (a = e[h++], i)
                    if (1 !== i)
                        if (a)
                            if (1 === a) {
                                if (o = h - i - 1, d >= 0) {
                                    const t = {
                                        data: e.subarray(d, o),
                                        type: c
                                    };
                                    n.push(t)
                                } else {
                                    const s = this.getLastNalUnit(t.samples);
                                    s && (r && h <= 4 - r && s.state && (s.data = s.data.subarray(0, s.data.byteLength - r)), o > 0 && (s.data = Wt(s.data, e.subarray(0, o)), s.state = 0))
                                }
                                h < s ? (l = 31 & e[h], d = h, c = l, i = 0) : i = -1
                            } else i = 0;
            else i = 3;
            else i = a ? 0 : 2;
            else i = a ? 0 : 1;
            if (d >= 0 && i >= 0) {
                const t = {
                    data: e.subarray(d, s),
                    type: c,
                    state: i
                };
                n.push(t)
            }
            if (0 === n.length) {
                const s = this.getLastNalUnit(t.samples);
                s && (s.data = Wt(s.data, e))
            }
            return t.naluState = i, n
        }
    }
    class Or {
        constructor(t, e, s) {
            this.keyData = void 0, this.decrypter = void 0, this.keyData = s, this.decrypter = new Ui(e, {
                removePKCS7Padding: !1
            })
        }
        decryptBuffer(t) {
            return this.decrypter.decrypt(t, this.keyData.key.buffer, this.keyData.iv.buffer)
        }
        decryptAacSample(t, e, s) {
            const i = t[e].unit;
            if (i.length <= 16) return;
            const r = i.subarray(16, i.length - i.length % 16),
                n = r.buffer.slice(r.byteOffset, r.byteOffset + r.length);
            this.decryptBuffer(n).then((r => {
                const n = new Uint8Array(r);
                i.set(n, 16), this.decrypter.isSync() || this.decryptAacSamples(t, e + 1, s)
            }))
        }
        decryptAacSamples(t, e, s) {
            for (;; e++) {
                if (e >= t.length) return void s();
                if (!(t[e].unit.length < 32) && (this.decryptAacSample(t, e, s), !this.decrypter.isSync())) return
            }
        }
        getAvcEncryptedData(t) {
            const e = 16 * Math.floor((t.length - 48) / 160) + 16,
                s = new Int8Array(e);
            let i = 0;
            for (let e = 32; e < t.length - 16; e += 160, i += 16) s.set(t.subarray(e, e + 16), i);
            return s
        }
        getAvcDecryptedUnit(t, e) {
            const s = new Uint8Array(e);
            let i = 0;
            for (let e = 32; e < t.length - 16; e += 160, i += 16) t.set(s.subarray(i, i + 16), e);
            return t
        }
        decryptAvcSample(t, e, s, i, r) {
            const n = Qt(r.data),
                a = this.getAvcEncryptedData(n);
            this.decryptBuffer(a.buffer).then((a => {
                r.data = this.getAvcDecryptedUnit(n, a), this.decrypter.isSync() || this.decryptAvcSamples(t, e, s + 1, i)
            }))
        }
        decryptAvcSamples(t, e, s, i) {
            if (t instanceof Uint8Array) throw new Error('Cannot decrypt samples of type Uint8Array');
            for (;; e++, s = 0) {
                if (e >= t.length) return void i();
                const r = t[e].units;
                for (; !(s >= r.length); s++) {
                    const n = r[s];
                    if (!(n.data.length <= 48 || 1 !== n.type && 5 !== n.type || (this.decryptAvcSample(t, e, s, i, n), this.decrypter.isSync()))) return
                }
            }
        }
    }
    const Nr = 188;
    class Ur {
        constructor(t, e, s) {
            this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = t, this.config = e, this.typeSupported = s, this.videoParser = new Fr
        }
        static probe(t) {
            const e = Ur.syncOffset(t);
            return e > 0 && D.warn(`MPEG2-TS detected but first sync word found @ offset ${e}`), -1 !== e
        }
        static syncOffset(t) {
            const e = t.length;
            let s = Math.min(940, e - Nr) + 1,
                i = 0;
            for (; i < s;) {
                let r = !1,
                    n = -1,
                    a = 0;
                for (let o = i; o < e; o += Nr) {
                    if (71 !== t[o] || e - o !== Nr && 71 !== t[o + Nr]) {
                        if (a) return -1;
                        break
                    }
                    if (a++, -1 === n && (n = o, 0 !== n && (s = Math.min(n + 18612, t.length - Nr) + 1)), r || (r = 0 === Br(t, o)), r && a > 1 && (0 === n && a > 2 || o + Nr > s)) return n
                }
                i++
            }
            return -1
        }
        static createTrack(t, e) {
            return {
                container: 'video' === t || 'audio' === t ? 'video/mp2t' : void 0,
                type: t,
                id: Rt[t],
                pid: -1,
                inputTimeScale: 9e4,
                sequenceNumber: 0,
                samples: [],
                dropped: 0,
                duration: 'audio' === t ? e : void 0
            }
        }
        resetInitSegment(t, e, s, i) {
            this.pmtParsed = !1, this._pmtId = -1, this._videoTrack = Ur.createTrack('video'), this._audioTrack = Ur.createTrack('audio', i), this._id3Track = Ur.createTrack('id3'), this._txtTrack = Ur.createTrack('text'), this._audioTrack.segmentCodec = 'aac', this.aacOverFlow = null, this.remainderData = null, this.audioCodec = e, this.videoCodec = s, this._duration = i
        }
        resetTimeStamp() {}
        resetContiguity() {
            const {
                _audioTrack: t,
                _videoTrack: e,
                _id3Track: s
            } = this;
            t && (t.pesData = null), e && (e.pesData = null), s && (s.pesData = null), this.aacOverFlow = null, this.remainderData = null
        }
        demux(t, e, s = !1, i = !1) {
            let r;
            s || (this.sampleAes = null);
            const n = this._videoTrack,
                a = this._audioTrack,
                o = this._id3Track,
                l = this._txtTrack;
            let h = n.pid,
                d = n.pesData,
                c = a.pid,
                u = o.pid,
                f = a.pesData,
                g = o.pesData,
                m = null,
                p = this.pmtParsed,
                T = this._pmtId,
                S = t.length;
            if (this.remainderData && (S = (t = Wt(this.remainderData, t)).length, this.remainderData = null), S < Nr && !i) return this.remainderData = t, {
                audioTrack: a,
                videoTrack: n,
                id3Track: o,
                textTrack: l
            };
            const L = Math.max(0, Ur.syncOffset(t));
            S -= (S - L) % Nr, S < t.byteLength && !i && (this.remainderData = new Uint8Array(t.buffer, S, t.buffer.byteLength - S));
            let A = 0;
            for (let e = L; e < S; e += Nr)
                if (71 === t[e]) {
                    const i = !!(64 & t[e + 1]),
                        y = Br(t, e);
                    let v;
                    if ((48 & t[e + 3]) >> 4 > 1) {
                        if (v = e + 5 + t[e + 4], v === e + Nr) continue
                    } else v = e + 4;
                    switch (y) {
                        case h:
                            i && (d && (r = Hr(d)) && this.videoParser.parseAVCPES(n, l, r, !1, this._duration), d = {
                                data: [],
                                size: 0
                            }), d && (d.data.push(t.subarray(v, e + Nr)), d.size += e + Nr - v);
                            break;
                        case c:
                            if (i) {
                                if (f && (r = Hr(f))) switch (a.segmentCodec) {
                                    case 'aac':
                                        this.parseAACPES(a, r);
                                        break;
                                    case 'mp3':
                                        this.parseMPEGPES(a, r);
                                        break;
                                    case 'ac3':
                                        this.parseAC3PES(a, r)
                                }
                                f = {
                                    data: [],
                                    size: 0
                                }
                            }
                            f && (f.data.push(t.subarray(v, e + Nr)), f.size += e + Nr - v);
                            break;
                        case u:
                            i && (g && (r = Hr(g)) && this.parseID3PES(o, r), g = {
                                data: [],
                                size: 0
                            }), g && (g.data.push(t.subarray(v, e + Nr)), g.size += e + Nr - v);
                            break;
                        case 0:
                            i && (v += t[v] + 1), T = this._pmtId = $r(t, v);
                            break;
                        case T:
                            {
                                i && (v += t[v] + 1);
                                const r = Gr(t, v, this.typeSupported, s);h = r.videoPid,
                                h > 0 && (n.pid = h, n.segmentCodec = r.segmentVideoCodec),
                                c = r.audioPid,
                                c > 0 && (a.pid = c, a.segmentCodec = r.segmentAudioCodec),
                                u = r.id3Pid,
                                u > 0 && (o.pid = u),
                                null === m || p || (D.warn(`MPEG-TS PMT found at ${e} after unknown PID '${m}'. Backtracking to sync byte @${L} to parse all TS packets.`), m = null, e = L - 188),
                                p = this.pmtParsed = !0;
                                break
                            }
                        case 17:
                        case 8191:
                            break;
                        default:
                            m = y
                    }
                } else A++;
            if (A > 0) {
                const t = new Error(`Found ${A} TS packet/s that do not start with 0x47`);
                this.observer.emit(y.ERROR, y.ERROR, {
                    type: v.MEDIA_ERROR,
                    details: E.FRAG_PARSING_ERROR,
                    fatal: !1,
                    error: t,
                    reason: t.message
                })
            }
            n.pesData = d, a.pesData = f, o.pesData = g;
            const R = {
                audioTrack: a,
                videoTrack: n,
                id3Track: o,
                textTrack: l
            };
            return i && this.extractRemainingSamples(R), R
        }
        flush() {
            const {
                remainderData: t
            } = this;
            let e;
            return this.remainderData = null, e = t ? this.demux(t, -1, !1, !0) : {
                videoTrack: this._videoTrack,
                audioTrack: this._audioTrack,
                id3Track: this._id3Track,
                textTrack: this._txtTrack
            }, this.extractRemainingSamples(e), this.sampleAes ? this.decrypt(e, this.sampleAes) : e
        }
        extractRemainingSamples(t) {
            const {
                audioTrack: e,
                videoTrack: s,
                id3Track: i,
                textTrack: r
            } = t, n = s.pesData, a = e.pesData, o = i.pesData;
            let l;
            if (n && (l = Hr(n)) ? (this.videoParser.parseAVCPES(s, r, l, !0, this._duration), s.pesData = null) : s.pesData = n, a && (l = Hr(a))) {
                switch (e.segmentCodec) {
                    case 'aac':
                        this.parseAACPES(e, l);
                        break;
                    case 'mp3':
                        this.parseMPEGPES(e, l);
                        break;
                    case 'ac3':
                        this.parseAC3PES(e, l)
                }
                e.pesData = null
            } else null != a && a.size && D.log('last AAC PES packet truncated,might overlap between fragments'), e.pesData = a;
            o && (l = Hr(o)) ? (this.parseID3PES(i, l), i.pesData = null) : i.pesData = o
        }
        demuxSampleAes(t, e, s) {
            const i = this.demux(t, s, !0, !this.config.progressive),
                r = this.sampleAes = new Or(this.observer, this.config, e);
            return this.decrypt(i, r)
        }
        decrypt(t, e) {
            return new Promise((s => {
                const {
                    audioTrack: i,
                    videoTrack: r
                } = t;
                i.samples && 'aac' === i.segmentCodec ? e.decryptAacSamples(i.samples, 0, (() => {
                    r.samples ? e.decryptAvcSamples(r.samples, 0, 0, (() => {
                        s(t)
                    })) : s(t)
                })) : r.samples && e.decryptAvcSamples(r.samples, 0, 0, (() => {
                    s(t)
                }))
            }))
        }
        destroy() {
            this._duration = 0
        }
        parseAACPES(t, e) {
            let s = 0;
            const i = this.aacOverFlow;
            let r, n, a, o = e.data;
            if (i) {
                this.aacOverFlow = null;
                const e = i.missing,
                    r = i.sample.unit.byteLength;
                if (-1 === e) o = Wt(i.sample.unit, o);
                else {
                    const n = r - e;
                    i.sample.unit.set(o.subarray(0, e), n), t.samples.push(i.sample), s = i.missing
                }
            }
            for (r = s, n = o.length; r < n - 1 && !cr(o, r); r++);
            if (r !== s) {
                let t;
                const e = r < n - 1;
                t = e ? `AAC PES did not start with ADTS header,offset:${r}` : 'No ADTS header found in AAC PES';
                const s = new Error(t);
                if (D.warn(`parsing error: ${t}`), this.observer.emit(y.ERROR, y.ERROR, {
                        type: v.MEDIA_ERROR,
                        details: E.FRAG_PARSING_ERROR,
                        fatal: !1,
                        levelRetry: e,
                        error: s,
                        reason: t
                    }), !e) return
            }
            if (gr(t, this.observer, o, r, this.audioCodec), void 0 !== e.pts) a = e.pts;
            else {
                if (!i) return void D.warn('[tsdemuxer]: AAC PES unknown PTS'); {
                    const e = mr(t.samplerate);
                    a = i.sample.pts + e
                }
            }
            let l, h = 0;
            for (; r < n;) {
                if (l = yr(t, o, r, a, h), r += l.length, l.missing) {
                    this.aacOverFlow = l;
                    break
                }
                for (h++; r < n - 1 && !cr(o, r); r++);
            }
        }
        parseMPEGPES(t, e) {
            const s = e.data,
                i = s.length;
            let r = 0,
                n = 0;
            const a = e.pts;
            if (void 0 !== a)
                for (; n < i;)
                    if (Dr(s, n)) {
                        const e = Ar(t, s, n, a, r);
                        if (!e) break;
                        n += e.length, r++
                    } else n++;
            else D.warn('[tsdemuxer]: MPEG PES unknown PTS')
        }
        parseAC3PES(t, e) {
            {
                const s = e.data,
                    i = e.pts;
                if (void 0 === i) return void D.warn('[tsdemuxer]: AC3 PES unknown PTS');
                const r = s.length;
                let n, a = 0,
                    o = 0;
                for (; o < r && (n = xr(t, s, o, i, a++)) > 0;) o += n
            }
        }
        parseID3PES(t, e) {
            if (void 0 === e.pts) return void D.warn('[tsdemuxer]: ID3 PES unknown PTS');
            const s = f({}, e, {
                type: this._videoTrack ? ts.emsg : ts.audioId3,
                duration: Number.POSITIVE_INFINITY
            });
            t.samples.push(s)
        }
    }

    function Br(t, e) {
        return ((31 & t[e + 1]) << 8) + t[e + 2]
    }

    function $r(t, e) {
        return (31 & t[e + 10]) << 8 | t[e + 11]
    }

    function Gr(t, e, s, i) {
        const r = {
                audioPid: -1,
                videoPid: -1,
                id3Pid: -1,
                segmentVideoCodec: 'avc',
                segmentAudioCodec: 'aac'
            },
            n = e + 3 + ((15 & t[e + 1]) << 8 | t[e + 2]) - 4;
        for (e += 12 + ((15 & t[e + 10]) << 8 | t[e + 11]); e < n;) {
            const n = Br(t, e),
                a = (15 & t[e + 3]) << 8 | t[e + 4];
            switch (t[e]) {
                case 207:
                    if (!i) {
                        Kr('ADTS AAC');
                        break
                    }
                case 15:
                    -1 === r.audioPid && (r.audioPid = n);
                    break;
                case 21:
                    -1 === r.id3Pid && (r.id3Pid = n);
                    break;
                case 219:
                    if (!i) {
                        Kr('H.264');
                        break
                    }
                case 27:
                    -1 === r.videoPid && (r.videoPid = n, r.segmentVideoCodec = 'avc');
                    break;
                case 3:
                case 4:
                    s.mpeg || s.mp3 ? -1 === r.audioPid && (r.audioPid = n, r.segmentAudioCodec = 'mp3') : D.log('MPEG audio found, not supported in this browser');
                    break;
                case 193:
                    if (!i) {
                        Kr('AC-3');
                        break
                    }
                case 129:
                    s.ac3 ? -1 === r.audioPid && (r.audioPid = n, r.segmentAudioCodec = 'ac3') : D.log('AC-3 audio found, not supported in this browser');
                    break;
                case 6:
                    if (-1 === r.audioPid && a > 0) {
                        let i = e + 5,
                            o = a;
                        for (; o > 2;) {
                            if (106 === t[i]) !0 !== s.ac3 ? D.log('AC-3 audio found, not supported in this browser for now') : (r.audioPid = n, r.segmentAudioCodec = 'ac3');
                            const e = t[i + 1] + 2;
                            i += e, o -= e
                        }
                    }
                    break;
                case 194:
                case 135:
                    D.warn('Unsupported EC-3 in M2TS found');
                    break;
                case 36:
                    D.warn('Unsupported HEVC in M2TS found')
            }
            e += a + 5
        }
        return r
    }

    function Kr(t) {
        D.log(`${t} with AES-128-CBC encryption found in unencrypted stream`)
    }

    function Hr(t) {
        let e, s, i, r, n, a = 0;
        const o = t.data;
        if (!t || 0 === t.size) return null;
        for (; o[0].length < 19 && o.length > 1;) o[0] = Wt(o[0], o[1]), o.splice(1, 1);
        e = o[0];
        if (1 === (e[0] << 16) + (e[1] << 8) + e[2]) {
            if (s = (e[4] << 8) + e[5], s && s > t.size - 6) return null;
            const l = e[7];
            192 & l && (r = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2, 64 & l ? (n = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2, r - n > 54e5 && (D.warn(`${Math.round((r-n)/9e4)}s delta between PTS and DTS, align them`), r = n)) : n = r), i = e[8];
            let h = i + 9;
            if (t.size <= h) return null;
            t.size -= h;
            const d = new Uint8Array(t.size);
            for (let t = 0, s = o.length; t < s; t++) {
                e = o[t];
                let s = e.byteLength;
                if (h) {
                    if (h > s) {
                        h -= s;
                        continue
                    }
                    e = e.subarray(h), s -= h, h = 0
                }
                d.set(e, a), a += s
            }
            return s && (s -= i + 3), {
                data: d,
                pts: r,
                dts: n,
                len: s
            }
        }
        return null
    }
    class Vr {
        static getSilentFrame(t, e) {
            if ('mp4a.40.2' === t) {
                if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224])
            } else {
                if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                if (2 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                if (3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
            }
        }
    }
    Math.pow(2, 32);
    class Yr {
        static init() {
            let t;
            for (t in Yr.types = {
                    avc1: [],
                    avcC: [],
                    btrt: [],
                    dinf: [],
                    dref: [],
                    esds: [],
                    ftyp: [],
                    hdlr: [],
                    mdat: [],
                    mdhd: [],
                    mdia: [],
                    mfhd: [],
                    minf: [],
                    moof: [],
                    moov: [],
                    mp4a: [],
                    '.mp3': [],
                    dac3: [],
                    'ac-3': [],
                    mvex: [],
                    mvhd: [],
                    pasp: [],
                    sdtp: [],
                    stbl: [],
                    stco: [],
                    stsc: [],
                    stsd: [],
                    stsz: [],
                    stts: [],
                    tfdt: [],
                    tfhd: [],
                    traf: [],
                    trak: [],
                    trun: [],
                    trex: [],
                    tkhd: [],
                    vmhd: [],
                    smhd: []
                }, Yr.types) Yr.types.hasOwnProperty(t) && (Yr.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
            const e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
            Yr.HDLR_TYPES = {
                video: e,
                audio: s
            };
            const i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
            Yr.STTS = Yr.STSC = Yr.STCO = r, Yr.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Yr.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), Yr.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), Yr.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
            const n = new Uint8Array([105, 115, 111, 109]),
                a = new Uint8Array([97, 118, 99, 49]),
                o = new Uint8Array([0, 0, 0, 1]);
            Yr.FTYP = Yr.box(Yr.types.ftyp, n, o, n, a), Yr.DINF = Yr.box(Yr.types.dinf, Yr.box(Yr.types.dref, i))
        }
        static box(t, ...e) {
            let s = 8,
                i = e.length;
            const r = i;
            for (; i--;) s += e[i].byteLength;
            const n = new Uint8Array(s);
            for (n[0] = s >> 24 & 255, n[1] = s >> 16 & 255, n[2] = s >> 8 & 255, n[3] = 255 & s, n.set(t, 4), i = 0, s = 8; i < r; i++) n.set(e[i], s), s += e[i].byteLength;
            return n
        }
        static hdlr(t) {
            return Yr.box(Yr.types.hdlr, Yr.HDLR_TYPES[t])
        }
        static mdat(t) {
            return Yr.box(Yr.types.mdat, t)
        }
        static mdhd(t, e) {
            e *= t;
            const s = Math.floor(e / 4294967296),
                i = Math.floor(e % 4294967296);
            return Yr.box(Yr.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 85, 196, 0, 0]))
        }
        static mdia(t) {
            return Yr.box(Yr.types.mdia, Yr.mdhd(t.timescale, t.duration), Yr.hdlr(t.type), Yr.minf(t))
        }
        static mfhd(t) {
            return Yr.box(Yr.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
        }
        static minf(t) {
            return 'audio' === t.type ? Yr.box(Yr.types.minf, Yr.box(Yr.types.smhd, Yr.SMHD), Yr.DINF, Yr.stbl(t)) : Yr.box(Yr.types.minf, Yr.box(Yr.types.vmhd, Yr.VMHD), Yr.DINF, Yr.stbl(t))
        }
        static moof(t, e, s) {
            return Yr.box(Yr.types.moof, Yr.mfhd(t), Yr.traf(s, e))
        }
        static moov(t) {
            let e = t.length;
            const s = [];
            for (; e--;) s[e] = Yr.trak(t[e]);
            return Yr.box.apply(null, [Yr.types.moov, Yr.mvhd(t[0].timescale, t[0].duration)].concat(s).concat(Yr.mvex(t)))
        }
        static mvex(t) {
            let e = t.length;
            const s = [];
            for (; e--;) s[e] = Yr.trex(t[e]);
            return Yr.box.apply(null, [Yr.types.mvex, ...s])
        }
        static mvhd(t, e) {
            e *= t;
            const s = Math.floor(e / 4294967296),
                i = Math.floor(e % 4294967296),
                r = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
            return Yr.box(Yr.types.mvhd, r)
        }
        static sdtp(t) {
            const e = t.samples || [],
                s = new Uint8Array(4 + e.length);
            let i, r;
            for (i = 0; i < e.length; i++) r = e[i].flags, s[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
            return Yr.box(Yr.types.sdtp, s)
        }
        static stbl(t) {
            return Yr.box(Yr.types.stbl, Yr.stsd(t), Yr.box(Yr.types.stts, Yr.STTS), Yr.box(Yr.types.stsc, Yr.STSC), Yr.box(Yr.types.stsz, Yr.STSZ), Yr.box(Yr.types.stco, Yr.STCO))
        }
        static avc1(t) {
            let e, s, i, r = [],
                n = [];
            for (e = 0; e < t.sps.length; e++) s = t.sps[e], i = s.byteLength, r.push(i >>> 8 & 255), r.push(255 & i), r = r.concat(Array.prototype.slice.call(s));
            for (e = 0; e < t.pps.length; e++) s = t.pps[e], i = s.byteLength, n.push(i >>> 8 & 255), n.push(255 & i), n = n.concat(Array.prototype.slice.call(s));
            const a = Yr.box(Yr.types.avcC, new Uint8Array([1, r[3], r[4], r[5], 255, 224 | t.sps.length].concat(r).concat([t.pps.length]).concat(n))),
                o = t.width,
                l = t.height,
                h = t.pixelRatio[0],
                d = t.pixelRatio[1];
            return Yr.box(Yr.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, o >> 8 & 255, 255 & o, l >> 8 & 255, 255 & l, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), a, Yr.box(Yr.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), Yr.box(Yr.types.pasp, new Uint8Array([h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
        }
        static esds(t) {
            const e = t.config.length;
            return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
        }
        static audioStsd(t) {
            const e = t.samplerate;
            return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, e >> 8 & 255, 255 & e, 0, 0])
        }
        static mp4a(t) {
            return Yr.box(Yr.types.mp4a, Yr.audioStsd(t), Yr.box(Yr.types.esds, Yr.esds(t)))
        }
        static mp3(t) {
            return Yr.box(Yr.types['.mp3'], Yr.audioStsd(t))
        }
        static ac3(t) {
            return Yr.box(Yr.types['ac-3'], Yr.audioStsd(t), Yr.box(Yr.types.dac3, t.config))
        }
        static stsd(t) {
            return 'audio' === t.type ? 'mp3' === t.segmentCodec && 'mp3' === t.codec ? Yr.box(Yr.types.stsd, Yr.STSD, Yr.mp3(t)) : 'ac3' === t.segmentCodec ? Yr.box(Yr.types.stsd, Yr.STSD, Yr.ac3(t)) : Yr.box(Yr.types.stsd, Yr.STSD, Yr.mp4a(t)) : Yr.box(Yr.types.stsd, Yr.STSD, Yr.avc1(t))
        }
        static tkhd(t) {
            const e = t.id,
                s = t.duration * t.timescale,
                i = t.width,
                r = t.height,
                n = Math.floor(s / 4294967296),
                a = Math.floor(s % 4294967296);
            return Yr.box(Yr.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, 0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
        }
        static traf(t, e) {
            const s = Yr.sdtp(t),
                i = t.id,
                r = Math.floor(e / 4294967296),
                n = Math.floor(e % 4294967296);
            return Yr.box(Yr.types.traf, Yr.box(Yr.types.tfhd, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i])), Yr.box(Yr.types.tfdt, new Uint8Array([1, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), Yr.trun(t, s.length + 16 + 20 + 8 + 16 + 8 + 8), s)
        }
        static trak(t) {
            return t.duration = t.duration || 4294967295, Yr.box(Yr.types.trak, Yr.tkhd(t), Yr.mdia(t))
        }
        static trex(t) {
            const e = t.id;
            return Yr.box(Yr.types.trex, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
        }
        static trun(t, e) {
            const s = t.samples || [],
                i = s.length,
                r = 12 + 16 * i,
                n = new Uint8Array(r);
            let a, o, l, h, d, c;
            for (e += 8 + r, n.set(['video' === t.type ? 1 : 0, 0, 15, 1, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e], 0), a = 0; a < i; a++) o = s[a], l = o.duration, h = o.size, d = o.flags, c = o.cts, n.set([l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, 255 & h, d.isLeading << 2 | d.dependsOn, d.isDependedOn << 6 | d.hasRedundancy << 4 | d.paddingValue << 1 | d.isNonSync, 61440 & d.degradPrio, 15 & d.degradPrio, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, 255 & c], 12 + 16 * a);
            return Yr.box(Yr.types.trun, n)
        }
        static initSegment(t) {
            Yr.types || Yr.init();
            const e = Yr.moov(t);
            return Wt(Yr.FTYP, e)
        }
    }
    Yr.types = void 0, Yr.HDLR_TYPES = void 0, Yr.STTS = void 0, Yr.STSC = void 0, Yr.STCO = void 0, Yr.STSZ = void 0, Yr.VMHD = void 0, Yr.SMHD = void 0, Yr.STSD = void 0, Yr.FTYP = void 0, Yr.DINF = void 0;

    function Wr(t, e, s = 1, i = !1) {
        const r = t * e * s;
        return i ? Math.round(r) : r
    }

    function jr(t, e, s = 1, i = !1) {
        return Wr(t, e, 1 / s, i)
    }

    function qr(t, e = !1) {
        return Wr(t, 1e3, 11111111111111112e-21, e)
    }

    function Xr(t, e = 1) {
        return Wr(t, 9e4, 1 / e)
    }
    let zr, Qr = null,
        Jr = null;
    class Zr {
        constructor(t, e, s, i = "") {
            if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.videoTrackConfig = void 0, this.observer = t, this.config = e, this.typeSupported = s, this.ISGenerated = !1, null === Qr) {
                const t = (navigator.userAgent || '').match(/Chrome\/(\d+)/i);
                Qr = t ? parseInt(t[1]) : 0
            }
            if (null === Jr) {
                const t = navigator.userAgent.match(/Safari\/(\d+)/i);
                Jr = t ? parseInt(t[1]) : 0
            }
        }
        destroy() {
            this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null
        }
        resetTimeStamp(t) {
            D.log('[mp4-remuxer]: initPTS & initDTS reset'), this._initPTS = this._initDTS = t
        }
        resetNextTimestamp() {
            D.log('[mp4-remuxer]: reset next timestamp'), this.isVideoContiguous = !1, this.isAudioContiguous = !1
        }
        resetInitSegment() {
            D.log('[mp4-remuxer]: ISGenerated flag reset'), this.ISGenerated = !1, this.videoTrackConfig = void 0
        }
        getVideoStartPts(t) {
            let e = !1;
            const s = t.reduce(((t, s) => {
                const i = s.pts - t;
                return i < -4294967296 ? (e = !0, tn(t, s.pts)) : i > 0 ? t : s.pts
            }), t[0].pts);
            return e && D.debug('PTS rollover detected'), s
        }
        remux(t, e, s, i, r, n, a, o) {
            let l, h, d, c, u, f, g = r,
                m = r;
            const p = t.pid > -1,
                y = e.pid > -1,
                v = e.samples.length,
                E = t.samples.length > 0,
                T = a && v > 0 || v > 1;
            if ((!p || E) && (!y || T) || this.ISGenerated || a) {
                if (this.ISGenerated) {
                    var S, L, A, R;
                    const t = this.videoTrackConfig;
                    !t || e.width === t.width && e.height === t.height && (null == (S = e.pixelRatio) ? void 0 : S[0]) === (null == (L = t.pixelRatio) ? void 0 : L[0]) && (null == (A = e.pixelRatio) ? void 0 : A[1]) === (null == (R = t.pixelRatio) ? void 0 : R[1]) || this.resetInitSegment()
                } else d = this.generateIS(t, e, r, n);
                const s = this.isVideoContiguous;
                let i, a = -1;
                if (T && (a = en(e.samples), !s && this.config.forceKeyFrameOnDiscontinuity))
                    if (f = !0, a > 0) {
                        D.warn(`[mp4-remuxer]: Dropped ${a} out of ${v} video samples due to a missing keyframe`);
                        const t = this.getVideoStartPts(e.samples);
                        e.samples = e.samples.slice(a), e.dropped += a, m += (e.samples[0].pts - t) / e.inputTimeScale, i = m
                    } else -1 === a && (D.warn(`[mp4-remuxer]: No keyframe found out of ${v} video samples`), f = !1);
                if (this.ISGenerated) {
                    if (E && T) {
                        const s = this.getVideoStartPts(e.samples),
                            i = (tn(t.samples[0].pts, s) - s) / e.inputTimeScale;
                        g += Math.max(0, i), m += Math.max(0, -i)
                    }
                    if (E) {
                        if (t.samplerate || (D.warn('[mp4-remuxer]: regenerate InitSegment as audio detected'), d = this.generateIS(t, e, r, n)), h = this.remuxAudio(t, g, this.isAudioContiguous, n, y || T || o === He.AUDIO ? m : void 0), T) {
                            const i = h ? h.endPTS - h.startPTS : 0;
                            e.inputTimeScale || (D.warn('[mp4-remuxer]: regenerate InitSegment as video detected'), d = this.generateIS(t, e, r, n)), l = this.remuxVideo(e, m, s, i)
                        }
                    } else T && (l = this.remuxVideo(e, m, s, 0));
                    l && (l.firstKeyFrame = a, l.independent = -1 !== a, l.firstKeyFramePTS = i)
                }
            }
            return this.ISGenerated && this._initPTS && this._initDTS && (s.samples.length && (u = sn(s, r, this._initPTS, this._initDTS)), i.samples.length && (c = rn(i, r, this._initPTS))), {
                audio: h,
                video: l,
                initSegment: d,
                independent: f,
                text: c,
                id3: u
            }
        }
        generateIS(t, e, s, i) {
            const r = t.samples,
                n = e.samples,
                a = this.typeSupported,
                o = {},
                l = this._initPTS;
            let h, d, c, u = !l || i,
                f = 'audio/mp4';
            if (u && (h = d = 1 / 0), t.config && r.length) {
                switch (t.timescale = t.samplerate, t.segmentCodec) {
                    case 'mp3':
                        a.mpeg ? (f = 'audio/mpeg', t.codec = '') : a.mp3 && (t.codec = 'mp3');
                        break;
                    case 'ac3':
                        t.codec = 'ac-3'
                }
                o.audio = {
                    id: 'audio',
                    container: f,
                    codec: t.codec,
                    initSegment: 'mp3' === t.segmentCodec && a.mpeg ? new Uint8Array(0) : Yr.initSegment([t]),
                    metadata: {
                        channelCount: t.channelCount
                    }
                }, u && (c = t.inputTimeScale, l && c === l.timescale ? u = !1 : h = d = r[0].pts - Math.round(c * s))
            }
            if (e.sps && e.pps && n.length) {
                if (e.timescale = e.inputTimeScale, o.video = {
                        id: 'main',
                        container: 'video/mp4',
                        codec: e.codec,
                        initSegment: Yr.initSegment([e]),
                        metadata: {
                            width: e.width,
                            height: e.height
                        }
                    }, u)
                    if (c = e.inputTimeScale, l && c === l.timescale) u = !1;
                    else {
                        const t = this.getVideoStartPts(n),
                            e = Math.round(c * s);
                        d = Math.min(d, tn(n[0].dts, t) - e), h = Math.min(h, t - e)
                    }
                this.videoTrackConfig = {
                    width: e.width,
                    height: e.height,
                    pixelRatio: e.pixelRatio
                }
            }
            if (Object.keys(o).length) return this.ISGenerated = !0, u ? (this._initPTS = {
                baseTime: h,
                timescale: c
            }, this._initDTS = {
                baseTime: d,
                timescale: c
            }) : h = c = void 0, {
                tracks: o,
                initPTS: h,
                timescale: c
            }
        }
        remuxVideo(t, e, s, i) {
            const r = t.inputTimeScale,
                n = t.samples,
                a = [],
                o = n.length,
                l = this._initPTS;
            let h, d, c = this.nextAvcDts,
                u = 8,
                g = this.videoSampleDuration,
                m = Number.POSITIVE_INFINITY,
                p = Number.NEGATIVE_INFINITY,
                T = !1;
            if (!s || null === c) {
                const t = e * r,
                    i = n[0].pts - tn(n[0].dts, n[0].pts);
                Qr && null !== c && Math.abs(t - i - c) < 15e3 ? s = !0 : c = t - i
            }
            const S = l.baseTime * r / l.timescale;
            for (let t = 0; t < o; t++) {
                const e = n[t];
                e.pts = tn(e.pts - S, c), e.dts = tn(e.dts - S, c), e.dts < n[t > 0 ? t - 1 : t].dts && (T = !0)
            }
            T && n.sort((function(t, e) {
                const s = t.dts - e.dts,
                    i = t.pts - e.pts;
                return s || i
            })), h = n[0].dts, d = n[n.length - 1].dts;
            const L = d - h,
                A = L ? Math.round(L / (o - 1)) : g || t.inputTimeScale / 30;
            if (s) {
                const t = h - c,
                    s = t > A,
                    i = t < -1;
                if ((s || i) && (s ? D.warn(`AVC: ${qr(t,!0)} ms (${t}dts) hole between fragments detected at ${e.toFixed(3)}`) : D.warn(`AVC: ${qr(-t,!0)} ms (${t}dts) overlapping between fragments detected at ${e.toFixed(3)}`), !i || c >= n[0].pts || Qr)) {
                    h = c;
                    const e = n[0].pts - t;
                    if (s) n[0].dts = h, n[0].pts = e;
                    else
                        for (let s = 0; s < n.length && !(n[s].dts > e); s++) n[s].dts -= t, n[s].pts -= t;
                    D.log(`Video: Initial PTS/DTS adjusted: ${qr(e,!0)}/${qr(h,!0)}, delta: ${qr(t,!0)} ms`)
                }
            }
            h = Math.max(0, h);
            let R = 0,
                b = 0,
                k = h;
            for (let t = 0; t < o; t++) {
                const e = n[t],
                    s = e.units,
                    i = s.length;
                let r = 0;
                for (let t = 0; t < i; t++) r += s[t].data.length;
                b += r, R += i, e.length = r, e.dts < k ? (e.dts = k, k += A / 4 | 0 || 1) : k = e.dts, m = Math.min(e.pts, m), p = Math.max(e.pts, p)
            }
            d = n[o - 1].dts;
            const I = b + 4 * R + 8;
            let C;
            try {
                C = new Uint8Array(I)
            } catch (t) {
                return void this.observer.emit(y.ERROR, y.ERROR, {
                    type: v.MUX_ERROR,
                    details: E.REMUX_ALLOC_ERROR,
                    fatal: !1,
                    error: t,
                    bytes: I,
                    reason: `fail allocating video mdat ${I}`
                })
            }
            const w = new DataView(C.buffer);
            w.setUint32(0, I), C.set(Yr.types.mdat, 4);
            let _ = !1,
                x = Number.POSITIVE_INFINITY,
                P = Number.POSITIVE_INFINITY,
                M = Number.NEGATIVE_INFINITY,
                F = Number.NEGATIVE_INFINITY;
            for (let t = 0; t < o; t++) {
                const e = n[t],
                    s = e.units;
                let l, h = 0;
                for (let t = 0, e = s.length; t < e; t++) {
                    const e = s[t],
                        i = e.data,
                        r = e.data.byteLength;
                    w.setUint32(u, r), u += 4, C.set(i, u), u += r, h += 4 + r
                }
                if (t < o - 1) g = n[t + 1].dts - e.dts, l = n[t + 1].pts - e.pts;
                else {
                    const s = this.config,
                        a = t > 0 ? e.dts - n[t - 1].dts : A;
                    if (l = t > 0 ? e.pts - n[t - 1].pts : A, s.stretchShortVideoTrack && null !== this.nextAudioPts) {
                        const t = Math.floor(s.maxBufferHole * r),
                            n = (i ? m + i * r : this.nextAudioPts) - e.pts;
                        n > t ? (g = n - a, g < 0 ? g = a : _ = !0, D.log(`[mp4-remuxer]: It is approximately ${n/90} ms to the next segment; using duration ${g/90} ms for the last video frame.`)) : g = a
                    } else g = a
                }
                const d = Math.round(e.pts - e.dts);
                x = Math.min(x, g), M = Math.max(M, g), P = Math.min(P, l), F = Math.max(F, l), a.push(new nn(e.key, g, h, d))
            }
            if (a.length)
                if (Qr) {
                    if (Qr < 70) {
                        const t = a[0].flags;
                        t.dependsOn = 2, t.isNonSync = 0
                    }
                } else if (Jr && F - P < M - x && A / M < .025 && 0 === a[0].cts) {
                D.warn('Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.');
                let t = h;
                for (let e = 0, s = a.length; e < s; e++) {
                    const i = t + a[e].duration,
                        r = t + a[e].cts;
                    if (e < s - 1) {
                        const t = i + a[e + 1].cts;
                        a[e].duration = t - r
                    } else a[e].duration = e ? a[e - 1].duration : A;
                    a[e].cts = 0, t = i
                }
            }
            g = _ || !g ? A : g, this.nextAvcDts = c = d + g, this.videoSampleDuration = g, this.isVideoContiguous = !0;
            const O = {
                data1: Yr.moof(t.sequenceNumber++, h, f({}, t, {
                    samples: a
                })),
                data2: C,
                startPTS: m / r,
                endPTS: (p + g) / r,
                startDTS: h / r,
                endDTS: c / r,
                type: 'video',
                hasAudio: !1,
                hasVideo: !0,
                nb: a.length,
                dropped: t.dropped
            };
            return t.samples = [], t.dropped = 0, O
        }
        getSamplesPerFrame(t) {
            switch (t.segmentCodec) {
                case 'mp3':
                    return 1152;
                case 'ac3':
                    return 1536;
                default:
                    return 1024
            }
        }
        remuxAudio(t, e, s, i, r) {
            const n = t.inputTimeScale,
                a = n / (t.samplerate ? t.samplerate : n),
                o = this.getSamplesPerFrame(t),
                l = o * a,
                h = this._initPTS,
                d = 'mp3' === t.segmentCodec && this.typeSupported.mpeg,
                c = [],
                u = void 0 !== r;
            let g = t.samples,
                m = d ? 0 : 8,
                p = this.nextAudioPts || -1;
            const T = e * n,
                S = h.baseTime * n / h.timescale;
            if (this.isAudioContiguous = s = s || g.length && p > 0 && (i && Math.abs(T - p) < 9e3 || Math.abs(tn(g[0].pts - S, T) - p) < 20 * l), g.forEach((function(t) {
                    t.pts = tn(t.pts - S, T)
                })), !s || p < 0) {
                if (g = g.filter((t => t.pts >= 0)), !g.length) return;
                p = 0 === r ? 0 : i && !u ? Math.max(0, T) : g[0].pts
            }
            if ('aac' === t.segmentCodec) {
                const e = this.config.maxAudioFramesDrift;
                for (let s = 0, i = p; s < g.length; s++) {
                    const r = g[s],
                        a = r.pts,
                        o = a - i,
                        h = Math.abs(1e3 * o / n);
                    if (o <= -e * l && u) 0 === s && (D.warn(`Audio frame @ ${(a/n).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3*o/n)} ms.`), this.nextAudioPts = p = i = a);
                    else if (o >= e * l && h < 1e4 && u) {
                        let e = Math.round(o / l);
                        i = a - e * l, i < 0 && (e--, i += l), 0 === s && (this.nextAudioPts = p = i), D.warn(`[mp4-remuxer]: Injecting ${e} audio frame @ ${(i/n).toFixed(3)}s due to ${Math.round(1e3*o/n)} ms gap.`);
                        for (let n = 0; n < e; n++) {
                            const e = Math.max(i, 0);
                            let n = Vr.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                            n || (D.log('[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead.'), n = r.unit.subarray()), g.splice(s, 0, {
                                unit: n,
                                pts: e
                            }), i += l, s++
                        }
                    }
                    r.pts = i, i += l
                }
            }
            let L, A = null,
                R = null,
                b = 0,
                k = g.length;
            for (; k--;) b += g[k].unit.byteLength;
            for (let e = 0, i = g.length; e < i; e++) {
                const i = g[e],
                    r = i.unit;
                let n = i.pts;
                if (null !== R) {
                    c[e - 1].duration = Math.round((n - R) / a)
                } else {
                    if (s && 'aac' === t.segmentCodec && (n = p), A = n, !(b > 0)) return;
                    b += m;
                    try {
                        L = new Uint8Array(b)
                    } catch (t) {
                        return void this.observer.emit(y.ERROR, y.ERROR, {
                            type: v.MUX_ERROR,
                            details: E.REMUX_ALLOC_ERROR,
                            fatal: !1,
                            error: t,
                            bytes: b,
                            reason: `fail allocating audio mdat ${b}`
                        })
                    }
                    if (!d) {
                        new DataView(L.buffer).setUint32(0, b), L.set(Yr.types.mdat, 4)
                    }
                }
                L.set(r, m);
                const l = r.byteLength;
                m += l, c.push(new nn(!0, o, l, 0)), R = n
            }
            const I = c.length;
            if (!I) return;
            const C = c[c.length - 1];
            this.nextAudioPts = p = R + a * C.duration;
            const w = d ? new Uint8Array(0) : Yr.moof(t.sequenceNumber++, A / a, f({}, t, {
                samples: c
            }));
            t.samples = [];
            const _ = A / n,
                x = p / n,
                P = {
                    data1: w,
                    data2: L,
                    startPTS: _,
                    endPTS: x,
                    startDTS: _,
                    endDTS: x,
                    type: 'audio',
                    hasAudio: !0,
                    hasVideo: !1,
                    nb: I
                };
            return this.isAudioContiguous = !0, P
        }
        remuxEmptyAudio(t, e, s, i) {
            const r = t.inputTimeScale,
                n = r / (t.samplerate ? t.samplerate : r),
                a = this.nextAudioPts,
                o = this._initDTS,
                l = 9e4 * o.baseTime / o.timescale,
                h = (null !== a ? a : i.startDTS * r) + l,
                d = i.endDTS * r + l,
                c = 1024 * n,
                u = Math.ceil((d - h) / c),
                f = Vr.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
            if (D.warn('[mp4-remuxer]: remux empty Audio'), !f) return void D.trace('[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec');
            const g = [];
            for (let t = 0; t < u; t++) {
                const e = h + t * c;
                g.push({
                    unit: f,
                    pts: e,
                    dts: e
                })
            }
            return t.samples = g, this.remuxAudio(t, e, s, !1)
        }
    }

    function tn(t, e) {
        let s;
        if (null === e) return t;
        for (s = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;) t += s;
        return t
    }

    function en(t) {
        for (let e = 0; e < t.length; e++)
            if (t[e].key) return e;
        return -1
    }

    function sn(t, e, s, i) {
        const r = t.samples.length;
        if (!r) return;
        const n = t.inputTimeScale;
        for (let a = 0; a < r; a++) {
            const r = t.samples[a];
            r.pts = tn(r.pts - s.baseTime * n / s.timescale, e * n) / n, r.dts = tn(r.dts - i.baseTime * n / i.timescale, e * n) / n
        }
        const a = t.samples;
        return t.samples = [], {
            samples: a
        }
    }

    function rn(t, e, s) {
        const i = t.samples.length;
        if (!i) return;
        const r = t.inputTimeScale;
        for (let n = 0; n < i; n++) {
            const i = t.samples[n];
            i.pts = tn(i.pts - s.baseTime * r / s.timescale, e * r) / r
        }
        t.samples.sort(((t, e) => t.pts - e.pts));
        const n = t.samples;
        return t.samples = [], {
            samples: n
        }
    }
    class nn {
        constructor(t, e, s, i) {
            this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = e, this.size = s, this.cts = i, this.flags = {
                isLeading: 0,
                isDependedOn: 0,
                hasRedundancy: 0,
                degradPrio: 0,
                dependsOn: t ? 2 : 1,
                isNonSync: t ? 0 : 1
            }
        }
    }

    function an(t, e, s, i) {
        if (null === t) return !0;
        const r = Math.max(i, 1),
            n = e - t.baseTime / t.timescale;
        return Math.abs(n - s) > r
    }

    function on(t, e) {
        const s = null == t ? void 0 : t.codec;
        if (s && s.length > 4) return s;
        if (e === P) {
            if ('ec-3' === s || 'ac-3' === s || 'alac' === s) return s;
            if ('fLaC' === s || 'Opus' === s) {
                return Le(s, !1)
            }
            const t = 'mp4a.40.5';
            return D.info(`Parsed audio codec "${s}" or audio object type not handled. Using "${t}"`), t
        }
        return D.warn(`Unhandled video codec "${s}"`), 'hvc1' === s || 'hev1' === s ? 'hvc1.1.6.L120.90' : 'av01' === s ? 'av01.0.04M.08' : 'avc1.42e01e'
    }
    try {
        zr = self.performance.now.bind(self.performance)
    } catch (t) {
        D.debug('Unable to use Performance API on this environment'), zr = null == Y ? void 0 : Y.Date.now
    }
    const ln = [{
        demux: class {
            constructor(t, e) {
                this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = e
            }
            resetTimeStamp() {}
            resetInitSegment(t, e, s, i) {
                const r = this.videoTrack = ir('video', 1),
                    n = this.audioTrack = ir('audio', 1),
                    a = this.txtTrack = ir('text', 1);
                if (this.id3Track = ir('id3', 1), this.timeOffset = 0, null == t || !t.byteLength) return;
                const o = Mt(t);
                if (o.video) {
                    const {
                        id: t,
                        timescale: e,
                        codec: s
                    } = o.video;
                    r.id = t, r.timescale = a.timescale = e, r.codec = s
                }
                if (o.audio) {
                    const {
                        id: t,
                        timescale: e,
                        codec: s
                    } = o.audio;
                    n.id = t, n.timescale = e, n.codec = s
                }
                a.id = Rt.text, r.sampleDuration = 0, r.duration = n.duration = i
            }
            resetContiguity() {
                this.remainderData = null
            }
            static probe(t) {
                return _t(t)
            }
            demux(t, e) {
                this.timeOffset = e;
                let s = t;
                const i = this.videoTrack,
                    r = this.txtTrack;
                if (this.config.progressive) {
                    this.remainderData && (s = Wt(this.remainderData, t));
                    const e = Yt(s);
                    this.remainderData = e.remainder, i.samples = e.valid || new Uint8Array
                } else i.samples = s;
                const n = this.extractID3Track(i, e);
                return r.samples = jt(e, i), {
                    videoTrack: i,
                    audioTrack: this.audioTrack,
                    id3Track: n,
                    textTrack: this.txtTrack
                }
            }
            flush() {
                const t = this.timeOffset,
                    e = this.videoTrack,
                    s = this.txtTrack;
                e.samples = this.remainderData || new Uint8Array, this.remainderData = null;
                const i = this.extractID3Track(e, this.timeOffset);
                return s.samples = jt(t, e), {
                    videoTrack: e,
                    audioTrack: ir(),
                    id3Track: i,
                    textTrack: ir()
                }
            }
            extractID3Track(t, e) {
                const s = this.id3Track;
                if (t.samples.length) {
                    const i = xt(t.samples, ['emsg']);
                    i && i.forEach((t => {
                        const i = Jt(t);
                        if (Cr.test(i.schemeIdUri)) {
                            const t = g(i.presentationTime) ? i.presentationTime / i.timeScale : e + i.presentationTimeDelta / i.timeScale;
                            let r = 4294967295 === i.eventDuration ? Number.POSITIVE_INFINITY : i.eventDuration / i.timeScale;
                            r <= .001 && (r = Number.POSITIVE_INFINITY);
                            const n = i.payload;
                            s.samples.push({
                                data: n,
                                len: n.byteLength,
                                dts: t,
                                pts: t,
                                type: ts.emsg,
                                duration: r
                            })
                        }
                    }))
                }
                return s
            }
            demuxSampleAes(t, e, s) {
                return Promise.reject(new Error('The MP4 demuxer does not support SAMPLE-AES decryption'))
            }
            destroy() {}
        },
        remux: class {
            constructor() {
                this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null
            }
            destroy() {}
            resetTimeStamp(t) {
                this.initPTS = t, this.lastEndTime = null
            }
            resetNextTimestamp() {
                this.lastEndTime = null
            }
            resetInitSegment(t, e, s, i) {
                this.audioCodec = e, this.videoCodec = s, this.generateInitSegment(Bt(t, i)), this.emitInitSegment = !0
            }
            generateInitSegment(t) {
                let {
                    audioCodec: e,
                    videoCodec: s
                } = this;
                if (null == t || !t.byteLength) return this.initTracks = void 0, void(this.initData = void 0);
                const i = this.initData = Mt(t);
                i.audio && (e = on(i.audio, P)), i.video && (s = on(i.video, M));
                const r = {};
                i.audio && i.video ? r.audiovideo = {
                    container: 'video/mp4',
                    codec: e + ',' + s,
                    initSegment: t,
                    id: 'main'
                } : i.audio ? r.audio = {
                    container: 'audio/mp4',
                    codec: e,
                    initSegment: t,
                    id: 'audio'
                } : i.video ? r.video = {
                    container: 'video/mp4',
                    codec: s,
                    initSegment: t,
                    id: 'main'
                } : D.warn('[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes.'), this.initTracks = r
            }
            remux(t, e, s, i, r, n) {
                var a, o;
                let {
                    initPTS: l,
                    lastEndTime: h
                } = this;
                const d = {
                    audio: void 0,
                    video: void 0,
                    text: i,
                    id3: s,
                    initSegment: void 0
                };
                g(h) || (h = this.lastEndTime = r || 0);
                const c = e.samples;
                if (null == c || !c.length) return d;
                const u = {
                    initPTS: void 0,
                    timescale: 1
                };
                let f = this.initData;
                if (null != (a = f) && a.length || (this.generateInitSegment(c), f = this.initData), null == (o = f) || !o.length) return D.warn('[passthrough-remuxer.ts]: Failed to generate initSegment.'), d;
                this.emitInitSegment && (u.tracks = this.initTracks, this.emitInitSegment = !1);
                const m = Kt(c, f),
                    p = Gt(f, c),
                    y = null === p ? r : p;
                (an(l, y, r, m) || u.timescale !== l.timescale && n) && (u.initPTS = y - r, l && 1 === l.timescale && D.warn("Adjusting initPTS by " + (u.initPTS - l.baseTime)), this.initPTS = l = {
                    baseTime: u.initPTS,
                    timescale: 1
                });
                const v = t ? y - l.baseTime / l.timescale : h,
                    E = v + m;
                Vt(f, c, l.baseTime / l.timescale), m > 0 ? this.lastEndTime = E : (D.warn('Duration parsed from mp4 should be greater than zero'), this.resetNextTimestamp());
                const T = !!f.audio,
                    S = !!f.video;
                let L = '';
                T && (L += 'audio'), S && (L += 'video');
                const A = {
                    data1: c,
                    startPTS: v,
                    startDTS: v,
                    endPTS: E,
                    endDTS: E,
                    type: L,
                    hasAudio: T,
                    hasVideo: S,
                    nb: 1,
                    dropped: 0
                };
                return d.audio = 'audio' === A.type ? A : void 0, d.video = 'audio' !== A.type ? A : void 0, d.initSegment = u, d.id3 = sn(s, r, l, l), i.samples.length && (d.text = rn(i, r, l)), d
            }
        }
    }, {
        demux: Ur,
        remux: Zr
    }, {
        demux: class extends rr {
            constructor(t, e) {
                super(), this.observer = void 0, this.config = void 0, this.observer = t, this.config = e
            }
            resetInitSegment(t, e, s, i) {
                super.resetInitSegment(t, e, s, i), this._audioTrack = {
                    container: 'audio/adts',
                    type: 'audio',
                    id: 2,
                    pid: -1,
                    sequenceNumber: 0,
                    segmentCodec: 'aac',
                    samples: [],
                    manifestCodec: e,
                    duration: i,
                    inputTimeScale: 9e4,
                    dropped: 0
                }
            }
            static probe(t) {
                if (!t) return !1;
                const e = at(t, 0);
                let s = (null == e ? void 0 : e.length) || 0;
                if (Ir(t, s)) return !1;
                for (let e = t.length; s < e; s++)
                    if (fr(t, s)) return D.log('ADTS sync word found !'), !0;
                return !1
            }
            canParse(t, e) {
                return ur(t, e)
            }
            appendFrame(t, e, s) {
                gr(t, this.observer, e, s, t.manifestCodec);
                const i = yr(t, e, s, this.basePTS, this.frameIndex);
                if (i && 0 === i.missing) return i
            }
        },
        remux: Zr
    }, {
        demux: class extends rr {
            resetInitSegment(t, e, s, i) {
                super.resetInitSegment(t, e, s, i), this._audioTrack = {
                    container: 'audio/mpeg',
                    type: 'audio',
                    id: 2,
                    pid: -1,
                    sequenceNumber: 0,
                    segmentCodec: 'mp3',
                    samples: [],
                    manifestCodec: e,
                    duration: i,
                    inputTimeScale: 9e4,
                    dropped: 0
                }
            }
            static probe(t) {
                if (!t) return !1;
                const e = at(t, 0);
                let s = (null == e ? void 0 : e.length) || 0;
                if (e && 11 === t[s] && 119 === t[s + 1] && void 0 !== ht(e) && wr(t, s) <= 16) return !1;
                for (let e = t.length; s < e; s++)
                    if (Ir(t, s)) return D.log('MPEG Audio sync word found !'), !0;
                return !1
            }
            canParse(t, e) {
                return kr(t, e)
            }
            appendFrame(t, e, s) {
                if (null !== this.basePTS) return Ar(t, e, s, this.basePTS, this.frameIndex)
            }
        },
        remux: Zr
    }];
    ln.splice(2, 0, {
        demux: _r,
        remux: Zr
    });
    class hn {
        constructor(t, e, s, i, r) {
            this.async = !1, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = t, this.typeSupported = e, this.config = s, this.vendor = i, this.id = r
        }
        configure(t) {
            this.transmuxConfig = t, this.decrypter && this.decrypter.reset()
        }
        push(t, e, s, i) {
            const r = s.transmuxing;
            r.executeStart = zr();
            let n = new Uint8Array(t);
            const {
                currentTransmuxState: a,
                transmuxConfig: o
            } = this;
            i && (this.currentTransmuxState = i);
            const {
                contiguous: l,
                discontinuity: h,
                trackSwitch: d,
                accurateTimeOffset: c,
                timeOffset: u,
                initSegmentChange: f
            } = i || a, {
                audioCodec: g,
                videoCodec: m,
                defaultInitPts: p,
                duration: T,
                initSegmentData: S
            } = o, L = dn(n, e);
            if (L && 'AES-128' === L.method) {
                const t = this.getDecrypter();
                if (!t.isSync()) return this.decryptionPromise = t.webCryptoDecrypt(n, L.key.buffer, L.iv.buffer).then((t => {
                    const e = this.push(t, null, s);
                    return this.decryptionPromise = null, e
                })), this.decryptionPromise; {
                    let e = t.softwareDecrypt(n, L.key.buffer, L.iv.buffer);
                    if (s.part > -1 && (e = t.flush()), !e) return r.executeEnd = zr(), cn(s);
                    n = new Uint8Array(e)
                }
            }
            const A = this.needsProbing(h, d);
            if (A) {
                const t = this.configureTransmuxer(n);
                if (t) return D.warn(`[transmuxer] ${t.message}`), this.observer.emit(y.ERROR, y.ERROR, {
                    type: v.MEDIA_ERROR,
                    details: E.FRAG_PARSING_ERROR,
                    fatal: !1,
                    error: t,
                    reason: t.message
                }), r.executeEnd = zr(), cn(s)
            }(h || d || f || A) && this.resetInitSegment(S, g, m, T, e), (h || f || A) && this.resetInitialTimestamp(p), l || this.resetContiguity();
            const R = this.transmux(n, L, u, c, s),
                b = this.currentTransmuxState;
            return b.contiguous = !0, b.discontinuity = !1, b.trackSwitch = !1, r.executeEnd = zr(), R
        }
        flush(t) {
            const e = t.transmuxing;
            e.executeStart = zr();
            const {
                decrypter: s,
                currentTransmuxState: i,
                decryptionPromise: r
            } = this;
            if (r) return r.then((() => this.flush(t)));
            const n = [],
                {
                    timeOffset: a
                } = i;
            if (s) {
                const e = s.flush();
                e && n.push(this.push(e, null, t))
            }
            const {
                demuxer: o,
                remuxer: l
            } = this;
            if (!o || !l) return e.executeEnd = zr(), [cn(t)];
            const h = o.flush(a);
            return un(h) ? h.then((e => (this.flushRemux(n, e, t), n))) : (this.flushRemux(n, h, t), n)
        }
        flushRemux(t, e, s) {
            const {
                audioTrack: i,
                videoTrack: r,
                id3Track: n,
                textTrack: a
            } = e, {
                accurateTimeOffset: o,
                timeOffset: l
            } = this.currentTransmuxState;
            D.log(`[transmuxer.ts]: Flushed fragment ${s.sn}${s.part>-1?' p: '+s.part:''} of level ${s.level}`);
            const h = this.remuxer.remux(i, r, n, a, l, o, !0, this.id);
            t.push({
                remuxResult: h,
                chunkMeta: s
            }), s.transmuxing.executeEnd = zr()
        }
        resetInitialTimestamp(t) {
            const {
                demuxer: e,
                remuxer: s
            } = this;
            e && s && (e.resetTimeStamp(t), s.resetTimeStamp(t))
        }
        resetContiguity() {
            const {
                demuxer: t,
                remuxer: e
            } = this;
            t && e && (t.resetContiguity(), e.resetNextTimestamp())
        }
        resetInitSegment(t, e, s, i, r) {
            const {
                demuxer: n,
                remuxer: a
            } = this;
            n && a && (n.resetInitSegment(t, e, s, i), a.resetInitSegment(t, e, s, r))
        }
        destroy() {
            this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0)
        }
        transmux(t, e, s, i, r) {
            let n;
            return n = e && 'SAMPLE-AES' === e.method ? this.transmuxSampleAes(t, e, s, i, r) : this.transmuxUnencrypted(t, s, i, r), n
        }
        transmuxUnencrypted(t, e, s, i) {
            const {
                audioTrack: r,
                videoTrack: n,
                id3Track: a,
                textTrack: o
            } = this.demuxer.demux(t, e, !1, !this.config.progressive);
            return {
                remuxResult: this.remuxer.remux(r, n, a, o, e, s, !1, this.id),
                chunkMeta: i
            }
        }
        transmuxSampleAes(t, e, s, i, r) {
            return this.demuxer.demuxSampleAes(t, e, s).then((t => ({
                remuxResult: this.remuxer.remux(t.audioTrack, t.videoTrack, t.id3Track, t.textTrack, s, i, !1, this.id),
                chunkMeta: r
            })))
        }
        configureTransmuxer(t) {
            const {
                config: e,
                observer: s,
                typeSupported: i,
                vendor: r
            } = this;
            let n;
            for (let e = 0, s = ln.length; e < s; e++) {
                var a;
                if (null != (a = ln[e].demux) && a.probe(t)) {
                    n = ln[e];
                    break
                }
            }
            if (!n) return new Error('Failed to find demuxer by probing fragment data');
            const o = this.demuxer,
                l = this.remuxer,
                h = n.remux,
                d = n.demux;
            l && l instanceof h || (this.remuxer = new h(s, e, i, r)), o && o instanceof d || (this.demuxer = new d(s, e, i), this.probe = d.probe)
        }
        needsProbing(t, e) {
            return !this.demuxer || !this.remuxer || t || e
        }
        getDecrypter() {
            let t = this.decrypter;
            return t || (t = this.decrypter = new Ui(this.config)), t
        }
    }

    function dn(t, e) {
        let s = null;
        return t.byteLength > 0 && null != (null == e ? void 0 : e.key) && null !== e.iv && null != e.method && (s = e), s
    }
    const cn = t => ({
        remuxResult: {},
        chunkMeta: t
    });

    function un(t) {
        return 'then' in t && t.then instanceof Function
    }
    class fn {
        constructor(t, e, s, i, r) {
            this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = t, this.videoCodec = e, this.initSegmentData = s, this.duration = i, this.defaultInitPts = r || null
        }
    }
    class gn {
        constructor(t, e, s, i, r, n) {
            this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = t, this.contiguous = e, this.accurateTimeOffset = s, this.trackSwitch = i, this.timeOffset = r, this.initSegmentChange = n
        }
    }
    var mn = {
        exports: {}
    };
    !(function(t) {
        var e = Object.prototype.hasOwnProperty,
            s = '~';

        function i() {}

        function r(t, e, s) {
            this.fn = t, this.context = e, this.once = s || !1
        }

        function n(t, e, i, n, a) {
            if ('function' != typeof i) throw new TypeError('The listener must be a function');
            var o = new r(i, n || t, a),
                l = s ? s + e : e;
            return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], o] : t._events[l].push(o) : (t._events[l] = o, t._eventsCount++), t
        }

        function a(t, e) {
            0 == --t._eventsCount ? t._events = new i : delete t._events[e]
        }

        function o() {
            this._events = new i, this._eventsCount = 0
        }
        Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (s = !1)), o.prototype.eventNames = function() {
            var t, i, r = [];
            if (0 === this._eventsCount) return r;
            for (i in t = this._events) e.call(t, i) && r.push(s ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
        }, o.prototype.listeners = function(t) {
            var e = s ? s + t : t,
                i = this._events[e];
            if (!i) return [];
            if (i.fn) return [i.fn];
            for (var r = 0, n = i.length, a = new Array(n); r < n; r++) a[r] = i[r].fn;
            return a
        }, o.prototype.listenerCount = function(t) {
            var e = s ? s + t : t,
                i = this._events[e];
            return i ? i.fn ? 1 : i.length : 0
        }, o.prototype.emit = function(t, e, i, r, n, a) {
            var o = s ? s + t : t;
            if (!this._events[o]) return !1;
            var l, h, d = this._events[o],
                c = arguments.length;
            if (d.fn) {
                switch (d.once && this.removeListener(t, d.fn, void 0, !0), c) {
                    case 1:
                        return d.fn.call(d.context), !0;
                    case 2:
                        return d.fn.call(d.context, e), !0;
                    case 3:
                        return d.fn.call(d.context, e, i), !0;
                    case 4:
                        return d.fn.call(d.context, e, i, r), !0;
                    case 5:
                        return d.fn.call(d.context, e, i, r, n), !0;
                    case 6:
                        return d.fn.call(d.context, e, i, r, n, a), !0
                }
                for (h = 1, l = new Array(c - 1); h < c; h++) l[h - 1] = arguments[h];
                d.fn.apply(d.context, l)
            } else {
                var u, f = d.length;
                for (h = 0; h < f; h++) switch (d[h].once && this.removeListener(t, d[h].fn, void 0, !0), c) {
                    case 1:
                        d[h].fn.call(d[h].context);
                        break;
                    case 2:
                        d[h].fn.call(d[h].context, e);
                        break;
                    case 3:
                        d[h].fn.call(d[h].context, e, i);
                        break;
                    case 4:
                        d[h].fn.call(d[h].context, e, i, r);
                        break;
                    default:
                        if (!l)
                            for (u = 1, l = new Array(c - 1); u < c; u++) l[u - 1] = arguments[u];
                        d[h].fn.apply(d[h].context, l)
                }
            }
            return !0
        }, o.prototype.on = function(t, e, s) {
            return n(this, t, e, s, !1)
        }, o.prototype.once = function(t, e, s) {
            return n(this, t, e, s, !0)
        }, o.prototype.removeListener = function(t, e, i, r) {
            var n = s ? s + t : t;
            if (!this._events[n]) return this;
            if (!e) return a(this, n), this;
            var o = this._events[n];
            if (o.fn) o.fn !== e || r && !o.once || i && o.context !== i || a(this, n);
            else {
                for (var l = 0, h = [], d = o.length; l < d; l++)(o[l].fn !== e || r && !o[l].once || i && o[l].context !== i) && h.push(o[l]);
                h.length ? this._events[n] = 1 === h.length ? h[0] : h : a(this, n)
            }
            return this
        }, o.prototype.removeAllListeners = function(t) {
            var e;
            return t ? (e = s ? s + t : t, this._events[e] && a(this, e)) : (this._events = new i, this._eventsCount = 0), this
        }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = s, o.EventEmitter = o, t.exports = o
    })(mn);
    var pn, yn = (pn = mn.exports) && pn.__esModule && Object.prototype.hasOwnProperty.call(pn, 'default') ? pn.default : pn;
    class vn {
        constructor(t, e, s, i) {
            this.error = null, this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
            const r = t.config;
            this.hls = t, this.id = e, this.useWorker = !!r.enableWorker, this.onTransmuxComplete = s, this.onFlush = i;
            const n = (t, e) => {
                (e = e || {}).frag = this.frag, e.id = this.id, t === y.ERROR && (this.error = e.error), this.hls.trigger(t, e)
            };
            this.observer = new yn, this.observer.on(y.FRAG_DECRYPTED, n), this.observer.on(y.ERROR, n);
            const a = ce(r.preferManagedMediaSource) || {
                    isTypeSupported: () => !1
                },
                o = {
                    mpeg: a.isTypeSupported('audio/mpeg'),
                    mp3: a.isTypeSupported('audio/mp4; codecs="mp3"'),
                    ac3: a.isTypeSupported('audio/mp4; codecs="ac-3"')
                },
                l = navigator.vendor;
            if (this.useWorker && 'undefined' != typeof Worker) {
                if (r.workerPath || 'function' == typeof __HLS_WORKER_BUNDLE__) {
                    try {
                        r.workerPath ? (D.log(`loading Web Worker ${r.workerPath} for "${e}"`), this.workerContext = sr(r.workerPath)) : (D.log(`injecting Web Worker for "${e}"`), this.workerContext = er()), this.onwmsg = t => this.onWorkerMessage(t);
                        const {
                            worker: t
                        } = this.workerContext;
                        t.addEventListener('message', this.onwmsg), t.onerror = t => {
                            const s = new Error(`${t.message}  (${t.filename}:${t.lineno})`);
                            r.enableWorker = !1, D.warn(`Error in "${e}" Web Worker, fallback to inline`), this.hls.trigger(y.ERROR, {
                                type: v.OTHER_ERROR,
                                details: E.INTERNAL_EXCEPTION,
                                fatal: !1,
                                event: 'demuxerWorker',
                                error: s
                            })
                        }, t.postMessage({
                            cmd: 'init',
                            typeSupported: o,
                            vendor: l,
                            id: e,
                            config: JSON.stringify(r)
                        })
                    } catch (t) {
                        D.warn(`Error setting up "${e}" Web Worker, fallback to inline`, t), this.resetWorker(), this.error = null, this.transmuxer = new hn(this.observer, o, r, l, e)
                    }
                    return
                }
            }
            this.transmuxer = new hn(this.observer, o, r, l, e)
        }
        resetWorker() {
            if (this.workerContext) {
                const {
                    worker: t,
                    objectURL: e
                } = this.workerContext;
                e && self.URL.revokeObjectURL(e), t.removeEventListener('message', this.onwmsg), t.onerror = null, t.terminate(), this.workerContext = null
            }
        }
        destroy() {
            if (this.workerContext) this.resetWorker(), this.onwmsg = void 0;
            else {
                const t = this.transmuxer;
                t && (t.destroy(), this.transmuxer = null)
            }
            const t = this.observer;
            t && t.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null
        }
        push(t, e, s, i, r, n, a, o, l, h) {
            var d, c;
            l.transmuxing.start = self.performance.now();
            const {
                transmuxer: u
            } = this, f = n ? n.start : r.start, g = r.decryptdata, m = this.frag, p = !(m && r.cc === m.cc), y = !(m && l.level === m.level), v = m ? l.sn - m.sn : -1, E = this.part ? l.part - this.part.index : -1, T = 0 === v && l.id > 1 && l.id === (null == m ? void 0 : m.stats.chunkCount), S = !y && (1 === v || 0 === v && (1 === E || T && E <= 0)), L = self.performance.now();
            (y || v || 0 === r.stats.parsing.start) && (r.stats.parsing.start = L), !n || !E && S || (n.stats.parsing.start = L);
            const A = !(m && (null == (d = r.initSegment) ? void 0 : d.url) === (null == (c = m.initSegment) ? void 0 : c.url)),
                R = new gn(p, S, o, y, f, A);
            if (!S || p || A) {
                D.log(`[transmuxer-interface, ${r.type}]: Starting new transmux session for sn: ${l.sn} p: ${l.part} level: ${l.level} id: ${l.id}\n        discontinuity: ${p}\n        trackSwitch: ${y}\n        contiguous: ${S}\n        accurateTimeOffset: ${o}\n        timeOffset: ${f}\n        initSegmentChange: ${A}`);
                const t = new fn(s, i, e, a, h);
                this.configureTransmuxer(t)
            }
            if (this.frag = r, this.part = n, this.workerContext) this.workerContext.worker.postMessage({
                cmd: 'demux',
                data: t,
                decryptdata: g,
                chunkMeta: l,
                state: R
            }, t instanceof ArrayBuffer ? [t] : []);
            else if (u) {
                const e = u.push(t, g, l, R);
                un(e) ? (u.async = !0, e.then((t => {
                    this.handleTransmuxComplete(t)
                })).catch((t => {
                    this.transmuxerError(t, l, 'transmuxer-interface push error')
                }))) : (u.async = !1, this.handleTransmuxComplete(e))
            }
        }
        flush(t) {
            t.transmuxing.start = self.performance.now();
            const {
                transmuxer: e
            } = this;
            if (this.workerContext) this.workerContext.worker.postMessage({
                cmd: 'flush',
                chunkMeta: t
            });
            else if (e) {
                let s = e.flush(t);
                un(s) || e.async ? (un(s) || (s = Promise.resolve(s)), s.then((e => {
                    this.handleFlushResult(e, t)
                })).catch((e => {
                    this.transmuxerError(e, t, 'transmuxer-interface flush error')
                }))) : this.handleFlushResult(s, t)
            }
        }
        transmuxerError(t, e, s) {
            this.hls && (this.error = t, this.hls.trigger(y.ERROR, {
                type: v.MEDIA_ERROR,
                details: E.FRAG_PARSING_ERROR,
                chunkMeta: e,
                fatal: !1,
                error: t,
                err: t,
                reason: s
            }))
        }
        handleFlushResult(t, e) {
            t.forEach((t => {
                this.handleTransmuxComplete(t)
            })), this.onFlush(e)
        }
        onWorkerMessage(t) {
            const e = t.data,
                s = this.hls;
            switch (e.event) {
                case 'init':
                    {
                        var i;
                        const t = null == (i = this.workerContext) ? void 0 : i.objectURL;t && self.URL.revokeObjectURL(t);
                        break
                    }
                case 'transmuxComplete':
                    this.handleTransmuxComplete(e.data);
                    break;
                case 'flush':
                    this.onFlush(e.data);
                    break;
                case 'workerLog':
                    D[e.data.logType] && D[e.data.logType](e.data.message);
                    break;
                default:
                    e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, s.trigger(e.event, e.data)
            }
        }
        configureTransmuxer(t) {
            const {
                transmuxer: e
            } = this;
            this.workerContext ? this.workerContext.worker.postMessage({
                cmd: 'configure',
                config: t
            }) : e && e.configure(t)
        }
        handleTransmuxComplete(t) {
            t.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(t)
        }
    }

    function En(t, e) {
        if (t.length !== e.length) return !1;
        for (let s = 0; s < t.length; s++)
            if (!Tn(t[s].attrs, e[s].attrs)) return !1;
        return !0
    }

    function Tn(t, e, s) {
        const i = t['STABLE-RENDITION-ID'];
        return i && !s ? i === e['STABLE-RENDITION-ID'] : !(s || ['LANGUAGE', 'NAME', 'CHARACTERISTICS', 'AUTOSELECT', 'DEFAULT', 'FORCED', 'ASSOC-LANGUAGE']).some((s => t[s] !== e[s]))
    }

    function Sn(t, e) {
        return e.label.toLowerCase() === t.name.toLowerCase() && (!e.language || e.language.toLowerCase() === (t.lang || '').toLowerCase())
    }
    class Ln extends Ji {
        constructor(t, e, s) {
            super(t, e, s, '[audio-stream-controller]', He.AUDIO), this.videoBuffer = null, this.videoTrackCC = -1, this.waitingVideoCC = -1, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = -1, this.waitingData = null, this.mainDetails = null, this.flushing = !1, this.bufferFlushed = !1, this.cachedTrackLoadedData = null, this._registerListeners()
        }
        onHandlerDestroying() {
            this._unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null, this.bufferedTrack = null, this.switchingTrack = null
        }
        _registerListeners() {
            const {
                hls: t
            } = this;
            t.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(y.MANIFEST_LOADING, this.onManifestLoading, this), t.on(y.LEVEL_LOADED, this.onLevelLoaded, this), t.on(y.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.on(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(y.ERROR, this.onError, this), t.on(y.BUFFER_RESET, this.onBufferReset, this), t.on(y.BUFFER_CREATED, this.onBufferCreated, this), t.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(y.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(y.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(y.FRAG_BUFFERED, this.onFragBuffered, this)
        }
        _unregisterListeners() {
            const {
                hls: t
            } = this;
            t.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(y.MANIFEST_LOADING, this.onManifestLoading, this), t.off(y.LEVEL_LOADED, this.onLevelLoaded, this), t.off(y.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.off(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(y.ERROR, this.onError, this), t.off(y.BUFFER_RESET, this.onBufferReset, this), t.off(y.BUFFER_CREATED, this.onBufferCreated, this), t.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(y.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(y.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(y.FRAG_BUFFERED, this.onFragBuffered, this)
        }
        onInitPtsFound(t, {
            frag: e,
            id: s,
            initPTS: i,
            timescale: r
        }) {
            if ('main' === s) {
                const t = e.cc;
                this.initPTS[e.cc] = {
                    baseTime: i,
                    timescale: r
                }, this.log(`InitPTS for cc: ${t} found from main: ${i}`), this.videoTrackCC = t, this.state === zi && this.tick()
            }
        }
        startLoad(t) {
            if (!this.levels) return this.startPosition = t, void(this.state = $i);
            const e = this.lastCurrentTime;
            this.stopLoad(), this.setInterval(100), e > 0 && -1 === t ? (this.log(`Override startPosition with lastCurrentTime @${e.toFixed(3)}`), t = e, this.state = Gi) : (this.loadedmetadata = !1, this.state = Yi), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
        }
        doTick() {
            switch (this.state) {
                case Gi:
                    this.doTickIdle();
                    break;
                case Yi:
                    {
                        var t;
                        const {
                            levels: e,
                            trackId: s
                        } = this,
                        i = null == e || null == (t = e[s]) ? void 0 : t.details;
                        if (i) {
                            if (this.waitForCdnTuneIn(i)) break;
                            this.state = zi
                        }
                        break
                    }
                case Vi:
                    {
                        var e;
                        const t = performance.now(),
                            s = this.retryDate;
                        if (!s || t >= s || null != (e = this.media) && e.seeking) {
                            const {
                                levels: t,
                                trackId: e
                            } = this;
                            this.log('RetryDate reached, switch back to IDLE state'), this.resetStartWhenNotLoaded((null == t ? void 0 : t[e]) || null), this.state = Gi
                        }
                        break
                    }
                case zi:
                    {
                        const t = this.waitingData;
                        if (t) {
                            const {
                                frag: e,
                                part: s,
                                cache: i,
                                complete: r
                            } = t;
                            if (void 0 !== this.initPTS[e.cc]) {
                                this.waitingData = null, this.waitingVideoCC = -1, this.state = Hi;
                                const t = {
                                    frag: e,
                                    part: s,
                                    payload: i.flush(),
                                    networkDetails: null
                                };
                                this._handleFragmentLoadProgress(t), r && super._handleFragmentLoadComplete(t)
                            } else if (this.videoTrackCC !== this.waitingVideoCC) this.log(`Waiting fragment cc (${e.cc}) cancelled because video is at cc ${this.videoTrackCC}`), this.clearWaitingFragment();
                            else {
                                const t = this.getLoadPosition(),
                                    s = Ei.bufferInfo(this.mediaBuffer, t, this.config.maxBufferHole);
                                Ns(s.end, this.config.maxFragLookUpTolerance, e) < 0 && (this.log(`Waiting fragment cc (${e.cc}) @ ${e.start} cancelled because another fragment at ${s.end} is needed`), this.clearWaitingFragment())
                            }
                        } else this.state = Gi
                    }
            }
            this.onTickEnd()
        }
        clearWaitingFragment() {
            const t = this.waitingData;
            t && (this.fragmentTracker.removeFragment(t.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = Gi)
        }
        resetLoadingState() {
            this.clearWaitingFragment(), super.resetLoadingState()
        }
        onTickEnd() {
            const {
                media: t
            } = this;
            null != t && t.readyState && (this.lastCurrentTime = t.currentTime)
        }
        doTickIdle() {
            const {
                hls: t,
                levels: e,
                media: s,
                trackId: i
            } = this, r = t.config;
            if (!s && (this.startFragRequested || !r.startFragPrefetch) || null == e || !e[i]) return;
            const n = e[i],
                a = n.details;
            if (!a || a.live && this.levelLastLoaded !== n || this.waitForCdnTuneIn(a)) return void(this.state = Yi);
            const o = this.mediaBuffer ? this.mediaBuffer : this.media;
            this.bufferFlushed && o && (this.bufferFlushed = !1, this.afterBufferFlushed(o, P, He.AUDIO));
            const l = this.getFwdBufferInfo(o, He.AUDIO);
            if (null === l) return;
            const {
                bufferedTrack: h,
                switchingTrack: d
            } = this;
            if (!d && this._streamEnded(l, a)) return t.trigger(y.BUFFER_EOS, {
                type: 'audio'
            }), void(this.state = qi);
            const c = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, He.MAIN),
                u = l.len,
                f = this.getMaxBufferLength(null == c ? void 0 : c.len),
                g = a.fragments,
                m = g[0].start;
            let p = this.flushing ? this.getLoadPosition() : l.end;
            if (d && s) {
                const t = this.getLoadPosition();
                h && !Tn(d.attrs, h.attrs) && (p = t), a.PTSKnown && t < m && (l.end > m || l.nextStart) && (this.log('Alt audio track ahead of main track, seek to start of alt audio track'), s.currentTime = m + .05)
            }
            if (u >= f && !d && p < g[g.length - 1].start) return;
            let v = this.getNextFragment(p, a),
                E = !1;
            if (v && this.isLoopLoading(v, p) && (E = !!v.gap, v = this.getNextFragmentLoopLoading(v, a, l, He.MAIN, f)), !v) return void(this.bufferFlushed = !0);
            const T = c && v.start > c.end + a.targetduration;
            if (T || (null == c || !c.len) && l.len) {
                const t = this.getAppendedFrag(v.start, He.MAIN);
                if (null === t) return;
                if (E || (E = !!t.gap || !!T && 0 === c.len), T && !E || E && l.nextStart && l.nextStart < t.end) return
            }
            this.loadFragment(v, n, p)
        }
        getMaxBufferLength(t) {
            const e = super.getMaxBufferLength();
            return t ? Math.min(Math.max(e, t), this.config.maxMaxBufferLength) : e
        }
        onMediaDetaching() {
            this.videoBuffer = null, this.bufferFlushed = this.flushing = !1, super.onMediaDetaching()
        }
        onAudioTracksUpdated(t, {
            audioTracks: e
        }) {
            this.resetTransmuxer(), this.levels = e.map((t => new fs(t)))
        }
        onAudioTrackSwitching(t, e) {
            const s = !!e.url;
            this.trackId = e.id;
            const {
                fragCurrent: i
            } = this;
            i && (i.abortRequests(), this.removeUnbufferedFrags(i.start)), this.resetLoadingState(), s ? this.setInterval(100) : this.resetTransmuxer(), s ? (this.switchingTrack = e, this.state = Gi, this.flushAudioIfNeeded(e)) : (this.switchingTrack = null, this.bufferedTrack = e, this.state = $i), this.tick()
        }
        onManifestLoading() {
            this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = this.flushing = !1, this.levels = this.mainDetails = this.waitingData = this.bufferedTrack = this.cachedTrackLoadedData = this.switchingTrack = null, this.startFragRequested = !1, this.trackId = this.videoTrackCC = this.waitingVideoCC = -1
        }
        onLevelLoaded(t, e) {
            this.mainDetails = e.details, null !== this.cachedTrackLoadedData && (this.hls.trigger(y.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null)
        }
        onAudioTrackLoaded(t, e) {
            var s;
            if (null == this.mainDetails) return void(this.cachedTrackLoadedData = e);
            const {
                levels: i
            } = this, {
                details: r,
                id: n
            } = e;
            if (!i) return void this.warn(`Audio tracks were reset while loading level ${n}`);
            this.log(`Audio track ${n} loaded [${r.startSN},${r.endSN}]${r.lastPartSn?`[part-${r.lastPartSn}-${r.lastPartIndex}]`:''},duration:${r.totalduration}`);
            const a = i[n];
            let o = 0;
            if (r.live || null != (s = a.details) && s.live) {
                this.checkLiveUpdate(r);
                const t = this.mainDetails;
                if (r.deltaUpdateFailed || !t) return;
                var l;
                if (!a.details && r.hasProgramDateTime && t.hasProgramDateTime) Ii(r, t), o = r.fragments[0].start;
                else o = this.alignPlaylists(r, a.details, null == (l = this.levelLastLoaded) ? void 0 : l.details)
            }
            a.details = r, this.levelLastLoaded = a, this.startFragRequested || !this.mainDetails && r.live || this.setStartPosition(this.mainDetails || r, o), this.state !== Yi || this.waitForCdnTuneIn(r) || (this.state = Gi), this.tick()
        }
        _handleFragmentLoadProgress(t) {
            var e;
            const {
                frag: s,
                part: i,
                payload: r
            } = t, {
                config: n,
                trackId: a,
                levels: o
            } = this;
            if (!o) return void this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
            const l = o[a];
            if (!l) return void this.warn('Audio track is undefined on fragment load progress');
            const h = l.details;
            if (!h) return this.warn('Audio track details undefined on fragment load progress'), void this.removeUnbufferedFrags(s.start);
            const d = n.defaultAudioCodec || l.audioCodec || 'mp4a.40.2';
            let c = this.transmuxer;
            c || (c = this.transmuxer = new vn(this.hls, He.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
            const u = this.initPTS[s.cc],
                f = null == (e = s.initSegment) ? void 0 : e.data;
            if (void 0 !== u) {
                const t = !1,
                    e = i ? i.index : -1,
                    n = -1 !== e,
                    a = new Ti(s.level, s.sn, s.stats.chunkCount, r.byteLength, e, n);
                c.push(r, f, d, '', s, i, h.totalduration, t, a, u)
            } else {
                this.log(`Unknown video PTS for cc ${s.cc}, waiting for video PTS before demuxing audio frag ${s.sn} of [${h.startSN} ,${h.endSN}],track ${a}`);
                const {
                    cache: t
                } = this.waitingData = this.waitingData || {
                    frag: s,
                    part: i,
                    cache: new Zi,
                    complete: !1
                };
                t.push(new Uint8Array(r)), this.waitingVideoCC = this.videoTrackCC, this.state = zi
            }
        }
        _handleFragmentLoadComplete(t) {
            this.waitingData ? this.waitingData.complete = !0 : super._handleFragmentLoadComplete(t)
        }
        onBufferReset() {
            this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
        }
        onBufferCreated(t, e) {
            const s = e.tracks.audio;
            s && (this.mediaBuffer = s.buffer || null), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer || null)
        }
        onFragBuffered(t, e) {
            const {
                frag: s,
                part: i
            } = e;
            if (s.type === He.AUDIO)
                if (this.fragContextChanged(s)) this.warn(`Fragment ${s.sn}${i?' p: '+i.index:''} of level ${s.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack?this.switchingTrack.name:'false'}`);
                else {
                    if ('initSegment' !== s.sn) {
                        this.fragPrevious = s;
                        const t = this.switchingTrack;
                        t && (this.bufferedTrack = t, this.switchingTrack = null, this.hls.trigger(y.AUDIO_TRACK_SWITCHED, d({}, t)))
                    }
                    this.fragBufferedComplete(s, i)
                }
            else if (!this.loadedmetadata && s.type === He.MAIN) {
                const t = this.videoBuffer || this.media;
                if (t) {
                    Ei.getBuffered(t).length && (this.loadedmetadata = !0)
                }
            }
        }
        onError(t, e) {
            var s;
            if (e.fatal) this.state = Xi;
            else switch (e.details) {
                case E.FRAG_GAP:
                case E.FRAG_PARSING_ERROR:
                case E.FRAG_DECRYPT_ERROR:
                case E.FRAG_LOAD_ERROR:
                case E.FRAG_LOAD_TIMEOUT:
                case E.KEY_LOAD_ERROR:
                case E.KEY_LOAD_TIMEOUT:
                    this.onFragmentOrKeyLoadError(He.AUDIO, e);
                    break;
                case E.AUDIO_TRACK_LOAD_ERROR:
                case E.AUDIO_TRACK_LOAD_TIMEOUT:
                case E.LEVEL_PARSING_ERROR:
                    e.levelRetry || this.state !== Yi || (null == (s = e.context) ? void 0 : s.type) !== Ge || (this.state = Gi);
                    break;
                case E.BUFFER_APPEND_ERROR:
                case E.BUFFER_FULL_ERROR:
                    if (!e.parent || 'audio' !== e.parent) return;
                    if (e.details === E.BUFFER_APPEND_ERROR) return void this.resetLoadingState();
                    this.reduceLengthAndFlushBuffer(e) && (this.bufferedTrack = null, super.flushMainBuffer(0, Number.POSITIVE_INFINITY, 'audio'));
                    break;
                case E.INTERNAL_EXCEPTION:
                    this.recoverWorkerError(e)
            }
        }
        onBufferFlushing(t, {
            type: e
        }) {
            e !== M && (this.flushing = !0)
        }
        onBufferFlushed(t, {
            type: e
        }) {
            if (e !== M) {
                this.flushing = !1, this.bufferFlushed = !0, this.state === qi && (this.state = Gi);
                const t = this.mediaBuffer || this.media;
                t && (this.afterBufferFlushed(t, e, He.AUDIO), this.tick())
            }
        }
        _handleTransmuxComplete(t) {
            var e;
            const s = 'audio',
                {
                    hls: i
                } = this,
                {
                    remuxResult: r,
                    chunkMeta: n
                } = t,
                a = this.getCurrentContext(n);
            if (!a) return void this.resetWhenMissingContext(n);
            const {
                frag: o,
                part: l,
                level: h
            } = a, {
                details: d
            } = h, {
                audio: c,
                text: u,
                id3: g,
                initSegment: m
            } = r;
            if (!this.fragContextChanged(o) && d) {
                if (this.state = Wi, this.switchingTrack && c && this.completeAudioSwitch(this.switchingTrack), null != m && m.tracks) {
                    const t = o.initSegment || o;
                    this._bufferInitSegment(h, m.tracks, t, n), i.trigger(y.FRAG_PARSING_INIT_SEGMENT, {
                        frag: t,
                        id: s,
                        tracks: m.tracks
                    })
                }
                if (c) {
                    const {
                        startPTS: t,
                        endPTS: e,
                        startDTS: s,
                        endDTS: i
                    } = c;
                    l && (l.elementaryStreams[P] = {
                        startPTS: t,
                        endPTS: e,
                        startDTS: s,
                        endDTS: i
                    }), o.setElementaryStreamInfo(P, t, e, s, i), this.bufferFragmentData(c, o, l, n)
                }
                if (null != g && null != (e = g.samples) && e.length) {
                    const t = f({
                        id: s,
                        frag: o,
                        details: d
                    }, g);
                    i.trigger(y.FRAG_PARSING_METADATA, t)
                }
                if (u) {
                    const t = f({
                        id: s,
                        frag: o,
                        details: d
                    }, u);
                    i.trigger(y.FRAG_PARSING_USERDATA, t)
                }
            } else this.fragmentTracker.removeFragment(o)
        }
        _bufferInitSegment(t, e, s, i) {
            if (this.state !== Wi) return;
            e.video && delete e.video;
            const r = e.audio;
            if (!r) return;
            r.id = 'audio';
            const n = t.audioCodec;
            this.log(`Init audio buffer, container:${r.container}, codecs[level/parsed]=[${n}/${r.codec}]`), n && 1 === n.split(',').length && (r.levelCodec = n), this.hls.trigger(y.BUFFER_CODECS, e);
            const a = r.initSegment;
            if (null != a && a.byteLength) {
                const t = {
                    type: 'audio',
                    frag: s,
                    part: null,
                    chunkMeta: i,
                    parent: s.type,
                    data: a
                };
                this.hls.trigger(y.BUFFER_APPENDING, t)
            }
            this.tickImmediate()
        }
        loadFragment(t, e, s) {
            const i = this.fragmentTracker.getState(t);
            var r;
            if (this.fragCurrent = t, this.switchingTrack || i === ci || i === fi)
                if ('initSegment' === t.sn) this._loadInitSegment(t, e);
                else if (null != (r = e.details) && r.live && !this.initPTS[t.cc]) {
                this.log(`Waiting for video PTS in continuity counter ${t.cc} of live stream before loading audio fragment ${t.sn} of level ${this.trackId}`), this.state = zi;
                const s = this.mainDetails;
                s && s.fragments[0].start !== e.details.fragments[0].start && Ii(e.details, s)
            } else this.startFragRequested = !0, super.loadFragment(t, e, s);
            else this.clearTrackerIfNeeded(t)
        }
        flushAudioIfNeeded(t) {
            const {
                media: e,
                bufferedTrack: s
            } = this, i = null == s ? void 0 : s.attrs, r = t.attrs;
            e && i && (i.CHANNELS !== r.CHANNELS || s.name !== t.name || s.lang !== t.lang) && (this.log('Switching audio track : flushing all audio'), super.flushMainBuffer(0, Number.POSITIVE_INFINITY, 'audio'), this.bufferedTrack = null)
        }
        completeAudioSwitch(t) {
            const {
                hls: e
            } = this;
            this.flushAudioIfNeeded(t), this.bufferedTrack = t, this.switchingTrack = null, e.trigger(y.AUDIO_TRACK_SWITCHED, d({}, t))
        }
    }
    n.AudioStreamController = Ln;
    class An extends Hs {
        constructor(t) {
            super(t, '[audio-track-controller]'), this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.registerListeners()
        }
        registerListeners() {
            const {
                hls: t
            } = this;
            t.on(y.MANIFEST_LOADING, this.onManifestLoading, this), t.on(y.MANIFEST_PARSED, this.onManifestParsed, this), t.on(y.LEVEL_LOADING, this.onLevelLoading, this), t.on(y.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(y.ERROR, this.onError, this)
        }
        unregisterListeners() {
            const {
                hls: t
            } = this;
            t.off(y.MANIFEST_LOADING, this.onManifestLoading, this), t.off(y.MANIFEST_PARSED, this.onManifestParsed, this), t.off(y.LEVEL_LOADING, this.onLevelLoading, this), t.off(y.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(y.ERROR, this.onError, this)
        }
        destroy() {
            this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, super.destroy()
        }
        onManifestLoading() {
            this.tracks = [], this.tracksInGroup = [], this.groupIds = null, this.currentTrack = null, this.trackId = -1, this.selectDefaultTrack = !0
        }
        onManifestParsed(t, e) {
            this.tracks = e.audioTracks || []
        }
        onAudioTrackLoaded(t, e) {
            const {
                id: s,
                groupId: i,
                details: r
            } = e, n = this.tracksInGroup[s];
            if (!n || n.groupId !== i) return void this.warn(`Audio track with id:${s} and group:${i} not found in active group ${null==n?void 0:n.groupId}`);
            const a = n.details;
            n.details = e.details, this.log(`Audio track ${s} "${n.name}" lang:${n.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, e, a)
        }
        onLevelLoading(t, e) {
            this.switchLevel(e.level)
        }
        onLevelSwitching(t, e) {
            this.switchLevel(e.level)
        }
        switchLevel(t) {
            const e = this.hls.levels[t];
            if (!e) return;
            const s = e.audioGroups || null,
                i = this.groupIds;
            let r = this.currentTrack;
            if (!s || (null == i ? void 0 : i.length) !== (null == s ? void 0 : s.length) || null != s && s.some((t => -1 === (null == i ? void 0 : i.indexOf(t))))) {
                this.groupIds = s, this.trackId = -1, this.currentTrack = null;
                const t = this.tracks.filter((t => !s || -1 !== s.indexOf(t.groupId)));
                if (t.length) this.selectDefaultTrack && !t.some((t => t.default)) && (this.selectDefaultTrack = !1), t.forEach(((t, e) => {
                    t.id = e
                }));
                else if (!r && !this.tracksInGroup.length) return;
                this.tracksInGroup = t;
                const e = this.hls.config.audioPreference;
                if (!r && e) {
                    const s = ii(e, t, ai);
                    if (s > -1) r = t[s];
                    else {
                        const t = ii(e, this.tracks);
                        r = this.tracks[t]
                    }
                }
                let i = this.findTrackId(r); - 1 === i && r && (i = this.findTrackId(null));
                const a = {
                    audioTracks: t
                };
                this.log(`Updating audio tracks, ${t.length} track(s) found in group(s): ${null==s?void 0:s.join(',')}`), this.hls.trigger(y.AUDIO_TRACKS_UPDATED, a);
                const o = this.trackId;
                if (-1 !== i && -1 === o) this.setAudioTrack(i);
                else if (t.length && -1 === o) {
                    var n;
                    const e = new Error(`No audio track selected for current audio group-ID(s): ${null==(n=this.groupIds)?void 0:n.join(',')} track count: ${t.length}`);
                    this.warn(e.message), this.hls.trigger(y.ERROR, {
                        type: v.MEDIA_ERROR,
                        details: E.AUDIO_TRACK_LOAD_ERROR,
                        fatal: !0,
                        error: e
                    })
                }
            } else this.shouldReloadPlaylist(r) && this.setAudioTrack(this.trackId)
        }
        onError(t, e) {
            !e.fatal && e.context && (e.context.type !== Ge || e.context.id !== this.trackId || this.groupIds && -1 === this.groupIds.indexOf(e.context.groupId) || (this.requestScheduled = -1, this.checkRetry(e)))
        }
        get allAudioTracks() {
            return this.tracks
        }
        get audioTracks() {
            return this.tracksInGroup
        }
        get audioTrack() {
            return this.trackId
        }
        set audioTrack(t) {
            this.selectDefaultTrack = !1, this.setAudioTrack(t)
        }
        setAudioOption(t) {
            const e = this.hls;
            if (e.config.audioPreference = t, t) {
                const s = this.allAudioTracks;
                if (this.selectDefaultTrack = !1, s.length) {
                    const i = this.currentTrack;
                    if (i && ri(t, i, ai)) return i;
                    const r = ii(t, this.tracksInGroup, ai);
                    if (r > -1) {
                        const t = this.tracksInGroup[r];
                        return this.setAudioTrack(r), t
                    }
                    if (i) {
                        let i = e.loadLevel; - 1 === i && (i = e.firstAutoLevel);
                        const r = oi(t, e.levels, s, i, ai);
                        if (-1 === r) return null;
                        e.nextLoadLevel = r
                    }
                    if (t.channels || t.audioCodec) {
                        const e = ii(t, s);
                        if (e > -1) return s[e]
                    }
                }
            }
            return null
        }
        setAudioTrack(t) {
            const e = this.tracksInGroup;
            if (t < 0 || t >= e.length) return void this.warn(`Invalid audio track id: ${t}`);
            this.clearTimer(), this.selectDefaultTrack = !1;
            const s = this.currentTrack,
                i = e[t],
                r = i.details && !i.details.live;
            if (t === this.trackId && i === s && r) return;
            if (this.log(`Switching to audio-track ${t} "${i.name}" lang:${i.lang} group:${i.groupId} channels:${i.channels}`), this.trackId = t, this.currentTrack = i, this.hls.trigger(y.AUDIO_TRACK_SWITCHING, d({}, i)), r) return;
            const n = this.switchParams(i.url, null == s ? void 0 : s.details, i.details);
            this.loadPlaylist(n)
        }
        findTrackId(t) {
            const e = this.tracksInGroup;
            for (let s = 0; s < e.length; s++) {
                const i = e[s];
                if ((!this.selectDefaultTrack || i.default) && (!t || ri(t, i, ai))) return s
            }
            if (t) {
                const {
                    name: s,
                    lang: i,
                    assocLang: r,
                    characteristics: n,
                    audioCodec: a,
                    channels: o
                } = t;
                for (let t = 0; t < e.length; t++) {
                    if (ri({
                            name: s,
                            lang: i,
                            assocLang: r,
                            characteristics: n,
                            audioCodec: a,
                            channels: o
                        }, e[t], ai)) return t
                }
                for (let s = 0; s < e.length; s++) {
                    const i = e[s];
                    if (Tn(t.attrs, i.attrs, ['LANGUAGE', 'ASSOC-LANGUAGE', 'CHARACTERISTICS'])) return s
                }
                for (let s = 0; s < e.length; s++) {
                    const i = e[s];
                    if (Tn(t.attrs, i.attrs, ['LANGUAGE'])) return s
                }
            }
            return -1
        }
        loadPlaylist(t) {
            const e = this.currentTrack;
            if (this.shouldLoadPlaylist(e) && e) {
                super.loadPlaylist();
                const s = e.id,
                    i = e.groupId;
                let r = e.url;
                if (t) try {
                    r = t.addDirectives(r)
                } catch (t) {
                    this.warn(`Could not construct new URL with HLS Delivery Directives: ${t}`)
                }
                this.log(`loading audio-track playlist ${s} "${e.name}" lang:${e.lang} group:${i}`), this.clearTimer(), this.hls.trigger(y.AUDIO_TRACK_LOADING, {
                    url: r,
                    id: s,
                    groupId: i,
                    deliveryDirectives: t || null
                })
            }
        }
    }
    n.AudioTrackController = An;
    class Rn extends Ji {
        constructor(t, e, s) {
            super(t, e, s, '[subtitle-stream-controller]', He.SUBTITLE), this.currentTrackId = -1, this.tracksBuffered = [], this.mainDetails = null, this._registerListeners()
        }
        onHandlerDestroying() {
            this._unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null
        }
        _registerListeners() {
            const {
                hls: t
            } = this;
            t.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(y.MANIFEST_LOADING, this.onManifestLoading, this), t.on(y.LEVEL_LOADED, this.onLevelLoaded, this), t.on(y.ERROR, this.onError, this), t.on(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(y.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.on(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(y.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(y.FRAG_BUFFERED, this.onFragBuffered, this)
        }
        _unregisterListeners() {
            const {
                hls: t
            } = this;
            t.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(y.MANIFEST_LOADING, this.onManifestLoading, this), t.off(y.LEVEL_LOADED, this.onLevelLoaded, this), t.off(y.ERROR, this.onError, this), t.off(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(y.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.off(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(y.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(y.FRAG_BUFFERED, this.onFragBuffered, this)
        }
        startLoad(t) {
            this.stopLoad(), this.state = Gi, this.setInterval(500), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
        }
        onManifestLoading() {
            this.mainDetails = null, this.fragmentTracker.removeAllFragments()
        }
        onMediaDetaching() {
            this.tracksBuffered = [], super.onMediaDetaching()
        }
        onLevelLoaded(t, e) {
            this.mainDetails = e.details
        }
        onSubtitleFragProcessed(t, e) {
            const {
                frag: s,
                success: i
            } = e;
            if (this.fragPrevious = s, this.state = Gi, !i) return;
            const r = this.tracksBuffered[this.currentTrackId];
            if (!r) return;
            let n;
            const a = s.start;
            for (let t = 0; t < r.length; t++)
                if (a >= r[t].start && a <= r[t].end) {
                    n = r[t];
                    break
                }
            const o = s.start + s.duration;
            n ? n.end = o : (n = {
                start: a,
                end: o
            }, r.push(n)), this.fragmentTracker.fragBuffered(s), this.fragBufferedComplete(s, null)
        }
        onBufferFlushing(t, e) {
            const {
                startOffset: s,
                endOffset: i
            } = e;
            if (0 === s && i !== Number.POSITIVE_INFINITY) {
                const t = i - 1;
                if (t <= 0) return;
                e.endOffsetSubtitles = Math.max(0, t), this.tracksBuffered.forEach((e => {
                    for (let s = 0; s < e.length;)
                        if (e[s].end <= t) e.shift();
                        else {
                            if (!(e[s].start < t)) break;
                            e[s].start = t, s++
                        }
                })), this.fragmentTracker.removeFragmentsInRange(s, t, He.SUBTITLE)
            }
        }
        onFragBuffered(t, e) {
            var s;
            this.loadedmetadata || e.frag.type !== He.MAIN || null != (s = this.media) && s.buffered.length && (this.loadedmetadata = !0)
        }
        onError(t, e) {
            const s = e.frag;
            (null == s ? void 0 : s.type) === He.SUBTITLE && (this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== $i && (this.state = Gi))
        }
        onSubtitleTracksUpdated(t, {
            subtitleTracks: e
        }) {
            this.levels && En(this.levels, e) ? this.levels = e.map((t => new fs(t))) : (this.tracksBuffered = [], this.levels = e.map((t => {
                const e = new fs(t);
                return this.tracksBuffered[e.id] = [], e
            })), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, He.SUBTITLE), this.fragPrevious = null, this.mediaBuffer = null)
        }
        onSubtitleTrackSwitch(t, e) {
            var s;
            if (this.currentTrackId = e.id, null == (s = this.levels) || !s.length || -1 === this.currentTrackId) return void this.clearInterval();
            const i = this.levels[this.currentTrackId];
            null != i && i.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, i && this.setInterval(500)
        }
        onSubtitleTrackLoaded(t, e) {
            var s;
            const {
                currentTrackId: i,
                levels: r
            } = this, {
                details: n,
                id: a
            } = e;
            if (!r) return void this.warn(`Subtitle tracks were reset while loading level ${a}`);
            const o = r[i];
            if (a >= r.length || a !== i || !o) return;
            this.log(`Subtitle track ${a} loaded [${n.startSN},${n.endSN}]${n.lastPartSn?`[part-${n.lastPartSn}-${n.lastPartIndex}]`:''},duration:${n.totalduration}`), this.mediaBuffer = this.mediaBufferTimeRanges;
            let l = 0;
            if (n.live || null != (s = o.details) && s.live) {
                const t = this.mainDetails;
                if (n.deltaUpdateFailed || !t) return;
                const e = t.fragments[0];
                var h;
                if (o.details) l = this.alignPlaylists(n, o.details, null == (h = this.levelLastLoaded) ? void 0 : h.details), 0 === l && e && (l = e.start, Ls(n, l));
                else n.hasProgramDateTime && t.hasProgramDateTime ? (Ii(n, t), l = n.fragments[0].start) : e && (l = e.start, Ls(n, l))
            }
            if (o.details = n, this.levelLastLoaded = o, this.startFragRequested || !this.mainDetails && n.live || this.setStartPosition(this.mainDetails || n, l), this.tick(), n.live && !this.fragCurrent && this.media && this.state === Gi) {
                Os(null, n.fragments, this.media.currentTime, 0) || (this.warn('Subtitle playlist not aligned with playback'), o.details = void 0)
            }
        }
        _handleFragmentLoadComplete(t) {
            const {
                frag: e,
                payload: s
            } = t, i = e.decryptdata, r = this.hls;
            if (!this.fragContextChanged(e) && s && s.byteLength > 0 && null != i && i.key && i.iv && 'AES-128' === i.method) {
                const t = performance.now();
                this.decrypter.decrypt(new Uint8Array(s), i.key.buffer, i.iv.buffer).catch((t => {
                    throw r.trigger(y.ERROR, {
                        type: v.MEDIA_ERROR,
                        details: E.FRAG_DECRYPT_ERROR,
                        fatal: !1,
                        error: t,
                        reason: t.message,
                        frag: e
                    }), t
                })).then((s => {
                    const i = performance.now();
                    r.trigger(y.FRAG_DECRYPTED, {
                        frag: e,
                        payload: s,
                        stats: {
                            tstart: t,
                            tdecrypt: i
                        }
                    })
                })).catch((t => {
                    this.warn(`${t.name}: ${t.message}`), this.state = Gi
                }))
            }
        }
        doTick() {
            if (this.media) {
                if (this.state === Gi) {
                    const {
                        currentTrackId: t,
                        levels: e
                    } = this, s = null == e ? void 0 : e[t];
                    if (!s || !e.length || !s.details) return;
                    const {
                        config: i
                    } = this, r = this.getLoadPosition(), n = Ei.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], r, i.maxBufferHole), {
                        end: a,
                        len: o
                    } = n, l = this.getFwdBufferInfo(this.media, He.MAIN), h = s.details;
                    if (o > this.getMaxBufferLength(null == l ? void 0 : l.len) + h.levelTargetDuration) return;
                    const d = h.fragments,
                        c = d.length,
                        u = h.edge;
                    let f = null;
                    const g = this.fragPrevious;
                    if (a < u) {
                        const t = i.maxFragLookUpTolerance,
                            e = a > u - t ? 0 : t;
                        f = Os(g, d, Math.max(d[0].start, a), e), !f && g && g.start < d[0].start && (f = d[0])
                    } else f = d[c - 1];
                    if (!f) return;
                    if (f = this.mapToInitFragWhenRequired(f), 'initSegment' !== f.sn) {
                        const t = d[f.sn - h.startSN - 1];
                        t && t.cc === f.cc && this.fragmentTracker.getState(t) === ci && (f = t)
                    }
                    this.fragmentTracker.getState(f) === ci && this.loadFragment(f, s, a)
                }
            } else this.state = Gi
        }
        getMaxBufferLength(t) {
            const e = super.getMaxBufferLength();
            return t ? Math.max(e, t) : e
        }
        loadFragment(t, e, s) {
            this.fragCurrent = t, 'initSegment' === t.sn ? this._loadInitSegment(t, e) : (this.startFragRequested = !0, super.loadFragment(t, e, s))
        }
        get mediaBufferTimeRanges() {
            return new bn(this.tracksBuffered[this.currentTrackId] || [])
        }
    }
    n.SubtitleStreamController = Rn;
    class bn {
        constructor(t) {
            this.buffered = void 0;
            const e = (e, s, i) => {
                if ((s >>>= 0) > i - 1) throw new DOMException(`Failed to execute '${e}' on 'TimeRanges': The index provided (${s}) is greater than the maximum bound (${i})`);
                return t[s][e]
            };
            this.buffered = {
                get length() {
                    return t.length
                },
                end: s => e('end', s, t.length),
                start: s => e('start', s, t.length)
            }
        }
    }
    class Dn extends Hs {
        constructor(t) {
            super(t, '[subtitle-track-controller]'), this.media = null, this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.queuedDefaultTrack = -1, this.asyncPollTrackChange = () => this.pollTrackChange(0), this.useTextTrackPolling = !1, this.subtitlePollingInterval = -1, this._subtitleDisplay = !0, this.onTextTracksChanged = () => {
                if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively) return;
                let t = null;
                const e = Ze(this.media.textTracks);
                for (let s = 0; s < e.length; s++)
                    if ('hidden' === e[s].mode) t = e[s];
                    else if ('showing' === e[s].mode) {
                    t = e[s];
                    break
                }
                const s = this.findTrackForTextTrack(t);
                this.subtitleTrack !== s && this.setSubtitleTrack(s)
            }, this.registerListeners()
        }
        destroy() {
            this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, this.onTextTracksChanged = this.asyncPollTrackChange = null, super.destroy()
        }
        get subtitleDisplay() {
            return this._subtitleDisplay
        }
        set subtitleDisplay(t) {
            this._subtitleDisplay = t, this.trackId > -1 && this.toggleTrackModes()
        }
        registerListeners() {
            const {
                hls: t
            } = this;
            t.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(y.MANIFEST_LOADING, this.onManifestLoading, this), t.on(y.MANIFEST_PARSED, this.onManifestParsed, this), t.on(y.LEVEL_LOADING, this.onLevelLoading, this), t.on(y.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(y.ERROR, this.onError, this)
        }
        unregisterListeners() {
            const {
                hls: t
            } = this;
            t.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(y.MANIFEST_LOADING, this.onManifestLoading, this), t.off(y.MANIFEST_PARSED, this.onManifestParsed, this), t.off(y.LEVEL_LOADING, this.onLevelLoading, this), t.off(y.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(y.ERROR, this.onError, this)
        }
        onMediaAttached(t, e) {
            this.media = e.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && 'onchange' in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener('change', this.asyncPollTrackChange))
        }
        pollTrackChange(t) {
            self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, t)
        }
        onMediaDetaching() {
            if (!this.media) return;
            self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener('change', this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId);
            Ze(this.media.textTracks).forEach((t => {
                Xe(t)
            })), this.subtitleTrack = -1, this.media = null
        }
        onManifestLoading() {
            this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0
        }
        onManifestParsed(t, e) {
            this.tracks = e.subtitleTracks
        }
        onSubtitleTrackLoaded(t, e) {
            const {
                id: s,
                groupId: i,
                details: r
            } = e, n = this.tracksInGroup[s];
            if (!n || n.groupId !== i) return void this.warn(`Subtitle track with id:${s} and group:${i} not found in active group ${null==n?void 0:n.groupId}`);
            const a = n.details;
            n.details = e.details, this.log(`Subtitle track ${s} "${n.name}" lang:${n.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, e, a)
        }
        onLevelLoading(t, e) {
            this.switchLevel(e.level)
        }
        onLevelSwitching(t, e) {
            this.switchLevel(e.level)
        }
        switchLevel(t) {
            const e = this.hls.levels[t];
            if (!e) return;
            const s = e.subtitleGroups || null,
                i = this.groupIds;
            let r = this.currentTrack;
            if (!s || (null == i ? void 0 : i.length) !== (null == s ? void 0 : s.length) || null != s && s.some((t => -1 === (null == i ? void 0 : i.indexOf(t))))) {
                this.groupIds = s, this.trackId = -1, this.currentTrack = null;
                const t = this.tracks.filter((t => !s || -1 !== s.indexOf(t.groupId)));
                if (t.length) this.selectDefaultTrack && !t.some((t => t.default)) && (this.selectDefaultTrack = !1), t.forEach(((t, e) => {
                    t.id = e
                }));
                else if (!r && !this.tracksInGroup.length) return;
                this.tracksInGroup = t;
                const e = this.hls.config.subtitlePreference;
                if (!r && e) {
                    this.selectDefaultTrack = !1;
                    const s = ii(e, t);
                    if (s > -1) r = t[s];
                    else {
                        const t = ii(e, this.tracks);
                        r = this.tracks[t]
                    }
                }
                let i = this.findTrackId(r); - 1 === i && r && (i = this.findTrackId(null));
                const n = {
                    subtitleTracks: t
                };
                this.log(`Updating subtitle tracks, ${t.length} track(s) found in "${null==s?void 0:s.join(',')}" group-id`), this.hls.trigger(y.SUBTITLE_TRACKS_UPDATED, n), -1 !== i && -1 === this.trackId && this.setSubtitleTrack(i)
            } else this.shouldReloadPlaylist(r) && this.setSubtitleTrack(this.trackId)
        }
        findTrackId(t) {
            const e = this.tracksInGroup,
                s = this.selectDefaultTrack;
            for (let i = 0; i < e.length; i++) {
                const r = e[i];
                if ((!s || r.default) && (s || t) && (!t || ri(r, t))) return i
            }
            if (t) {
                for (let s = 0; s < e.length; s++) {
                    const i = e[s];
                    if (Tn(t.attrs, i.attrs, ['LANGUAGE', 'ASSOC-LANGUAGE', 'CHARACTERISTICS'])) return s
                }
                for (let s = 0; s < e.length; s++) {
                    const i = e[s];
                    if (Tn(t.attrs, i.attrs, ['LANGUAGE'])) return s
                }
            }
            return -1
        }
        findTrackForTextTrack(t) {
            if (t) {
                const e = this.tracksInGroup;
                for (let s = 0; s < e.length; s++) {
                    if (Sn(e[s], t)) return s
                }
            }
            return -1
        }
        onError(t, e) {
            !e.fatal && e.context && (e.context.type !== Ke || e.context.id !== this.trackId || this.groupIds && -1 === this.groupIds.indexOf(e.context.groupId) || this.checkRetry(e))
        }
        get allSubtitleTracks() {
            return this.tracks
        }
        get subtitleTracks() {
            return this.tracksInGroup
        }
        get subtitleTrack() {
            return this.trackId
        }
        set subtitleTrack(t) {
            this.selectDefaultTrack = !1, this.setSubtitleTrack(t)
        }
        setSubtitleOption(t) {
            if (this.hls.config.subtitlePreference = t, t) {
                const e = this.allSubtitleTracks;
                if (this.selectDefaultTrack = !1, e.length) {
                    const s = this.currentTrack;
                    if (s && ri(t, s)) return s;
                    const i = ii(t, this.tracksInGroup);
                    if (i > -1) {
                        const t = this.tracksInGroup[i];
                        return this.setSubtitleTrack(i), t
                    }
                    if (s) return null; {
                        const s = ii(t, e);
                        if (s > -1) return e[s]
                    }
                }
            }
            return null
        }
        loadPlaylist(t) {
            super.loadPlaylist();
            const e = this.currentTrack;
            if (this.shouldLoadPlaylist(e) && e) {
                const s = e.id,
                    i = e.groupId;
                let r = e.url;
                if (t) try {
                    r = t.addDirectives(r)
                } catch (t) {
                    this.warn(`Could not construct new URL with HLS Delivery Directives: ${t}`)
                }
                this.log(`Loading subtitle playlist for id ${s}`), this.hls.trigger(y.SUBTITLE_TRACK_LOADING, {
                    url: r,
                    id: s,
                    groupId: i,
                    deliveryDirectives: t || null
                })
            }
        }
        toggleTrackModes() {
            const {
                media: t
            } = this;
            if (!t) return;
            const e = Ze(t.textTracks),
                s = this.currentTrack;
            let i;
            if (s && (i = e.filter((t => Sn(s, t)))[0], i || this.warn(`Unable to find subtitle TextTrack with name "${s.name}" and language "${s.lang}"`)), [].slice.call(e).forEach((t => {
                    'disabled' !== t.mode && t !== i && (t.mode = 'disabled')
                })), i) {
                const t = this.subtitleDisplay ? 'showing' : 'hidden';
                i.mode !== t && (i.mode = t)
            }
        }
        setSubtitleTrack(t) {
            const e = this.tracksInGroup;
            if (!this.media) return void(this.queuedDefaultTrack = t);
            if (t < -1 || t >= e.length || !g(t)) return void this.warn(`Invalid subtitle track id: ${t}`);
            this.clearTimer(), this.selectDefaultTrack = !1;
            const s = this.currentTrack,
                i = e[t] || null;
            if (this.trackId = t, this.currentTrack = i, this.toggleTrackModes(), !i) return void this.hls.trigger(y.SUBTITLE_TRACK_SWITCH, {
                id: t
            });
            const r = !!i.details && !i.details.live;
            if (t === this.trackId && i === s && r) return;
            this.log(`Switching to subtitle-track ${t}` + (i ? ` "${i.name}" lang:${i.lang} group:${i.groupId}` : ''));
            const {
                id: n,
                groupId: a = "",
                name: o,
                type: l,
                url: h
            } = i;
            this.hls.trigger(y.SUBTITLE_TRACK_SWITCH, {
                id: n,
                groupId: a,
                name: o,
                type: l,
                url: h
            });
            const d = this.switchParams(i.url, null == s ? void 0 : s.details, i.details);
            this.loadPlaylist(d)
        }
    }
    n.SubtitleTrackController = Dn;
    class kn {
        constructor(t) {
            this.buffers = void 0, this.queues = {
                video: [],
                audio: [],
                audiovideo: []
            }, this.buffers = t
        }
        append(t, e, s) {
            const i = this.queues[e];
            i.push(t), 1 !== i.length || s || this.executeNext(e)
        }
        insertAbort(t, e) {
            this.queues[e].unshift(t), this.executeNext(e)
        }
        appendBlocker(t) {
            let e;
            const s = new Promise((t => {
                    e = t
                })),
                i = {
                    execute: e,
                    onStart: () => {},
                    onComplete: () => {},
                    onError: () => {}
                };
            return this.append(i, t), s
        }
        executeNext(t) {
            const e = this.queues[t];
            if (e.length) {
                const s = e[0];
                try {
                    s.execute()
                } catch (e) {
                    D.warn(`[buffer-operation-queue]: Exception executing "${t}" SourceBuffer operation: ${e}`), s.onError(e);
                    const i = this.buffers[t];
                    null != i && i.updating || this.shiftAndExecuteNext(t)
                }
            }
        }
        shiftAndExecuteNext(t) {
            this.queues[t].shift(), this.executeNext(t)
        }
        current(t) {
            return this.queues[t][0]
        }
    }
    const In = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/;
    class Cn {
        constructor(t) {
            this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.appendSource = void 0, this.appendErrors = {
                audio: 0,
                video: 0,
                audiovideo: 0
            }, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this.log = void 0, this.warn = void 0, this.error = void 0, this._onEndStreaming = t => {
                this.hls && this.hls.pauseBuffering()
            }, this._onStartStreaming = t => {
                this.hls && this.hls.resumeBuffering()
            }, this._onMediaSourceOpen = () => {
                const {
                    media: t,
                    mediaSource: e
                } = this;
                this.log('Media source opened'), t && (t.removeEventListener('emptied', this._onMediaEmptied), this.updateMediaElementDuration(), this.hls.trigger(y.MEDIA_ATTACHED, {
                    media: t,
                    mediaSource: e
                })), e && e.removeEventListener('sourceopen', this._onMediaSourceOpen), this.checkPendingTracks()
            }, this._onMediaSourceClose = () => {
                this.log('Media source closed')
            }, this._onMediaSourceEnded = () => {
                this.log('Media source ended')
            }, this._onMediaEmptied = () => {
                const {
                    mediaSrc: t,
                    _objectUrl: e
                } = this;
                t !== e && D.error(`Media element src was set while attaching MediaSource (${e} > ${t})`)
            }, this.hls = t;
            const e = '[buffer-controller]';
            var s;
            this.appendSource = (s = ce(t.config.preferManagedMediaSource), 'undefined' != typeof self && s === self.ManagedMediaSource), this.log = D.log.bind(D, e), this.warn = D.warn.bind(D, e), this.error = D.error.bind(D, e), this._initSourceBuffer(), this.registerListeners()
        }
        hasSourceTypes() {
            return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0
        }
        destroy() {
            this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null, this.hls = null
        }
        registerListeners() {
            const {
                hls: t
            } = this;
            t.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(y.MANIFEST_LOADING, this.onManifestLoading, this), t.on(y.MANIFEST_PARSED, this.onManifestParsed, this), t.on(y.BUFFER_RESET, this.onBufferReset, this), t.on(y.BUFFER_APPENDING, this.onBufferAppending, this), t.on(y.BUFFER_CODECS, this.onBufferCodecs, this), t.on(y.BUFFER_EOS, this.onBufferEos, this), t.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(y.LEVEL_UPDATED, this.onLevelUpdated, this), t.on(y.FRAG_PARSED, this.onFragParsed, this), t.on(y.FRAG_CHANGED, this.onFragChanged, this)
        }
        unregisterListeners() {
            const {
                hls: t
            } = this;
            t.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(y.MANIFEST_LOADING, this.onManifestLoading, this), t.off(y.MANIFEST_PARSED, this.onManifestParsed, this), t.off(y.BUFFER_RESET, this.onBufferReset, this), t.off(y.BUFFER_APPENDING, this.onBufferAppending, this), t.off(y.BUFFER_CODECS, this.onBufferCodecs, this), t.off(y.BUFFER_EOS, this.onBufferEos, this), t.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(y.LEVEL_UPDATED, this.onLevelUpdated, this), t.off(y.FRAG_PARSED, this.onFragParsed, this), t.off(y.FRAG_CHANGED, this.onFragChanged, this)
        }
        _initSourceBuffer() {
            this.sourceBuffer = {}, this.operationQueue = new kn(this.sourceBuffer), this.listeners = {
                audio: [],
                video: [],
                audiovideo: []
            }, this.appendErrors = {
                audio: 0,
                video: 0,
                audiovideo: 0
            }, this.lastMpegAudioChunk = null
        }
        onManifestLoading() {
            this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null
        }
        onManifestParsed(t, e) {
            let s = 2;
            (e.audio && !e.video || !e.altAudio) && (s = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = s, this.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`)
        }
        onMediaAttaching(t, e) {
            const s = this.media = e.media,
                i = ce(this.appendSource);
            if (s && i) {
                var r;
                const t = this.mediaSource = new i;
                this.log(`created media source: ${null==(r=t.constructor)?void 0:r.name}`), t.addEventListener('sourceopen', this._onMediaSourceOpen), t.addEventListener('sourceended', this._onMediaSourceEnded), t.addEventListener('sourceclose', this._onMediaSourceClose), this.appendSource && (t.addEventListener('startstreaming', this._onStartStreaming), t.addEventListener('endstreaming', this._onEndStreaming));
                const e = this._objectUrl = self.URL.createObjectURL(t);
                if (this.appendSource) try {
                    s.removeAttribute('src');
                    const i = self.ManagedMediaSource;
                    s.disableRemotePlayback = s.disableRemotePlayback || i && t instanceof i, wn(s), _n(s, e), s.load()
                } catch (t) {
                    s.src = e
                } else s.src = e;
                s.addEventListener('emptied', this._onMediaEmptied)
            }
        }
        onMediaDetaching() {
            const {
                media: t,
                mediaSource: e,
                _objectUrl: s
            } = this;
            if (e) {
                if (this.log('media source detaching'), 'open' === e.readyState) try {
                    e.endOfStream()
                } catch (t) {
                    this.warn(`onMediaDetaching: ${t.message} while calling endOfStream`)
                }
                this.onBufferReset(), e.removeEventListener('sourceopen', this._onMediaSourceOpen), e.removeEventListener('sourceended', this._onMediaSourceEnded), e.removeEventListener('sourceclose', this._onMediaSourceClose), this.appendSource && (e.removeEventListener('startstreaming', this._onStartStreaming), e.removeEventListener('endstreaming', this._onEndStreaming)), t && (t.removeEventListener('emptied', this._onMediaEmptied), s && self.URL.revokeObjectURL(s), this.mediaSrc === s ? (t.removeAttribute('src'), this.appendSource && wn(t), t.load()) : this.warn('media|source.src was changed by a third party - skip cleanup')), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}
            }
            this.hls.trigger(y.MEDIA_DETACHED, void 0)
        }
        onBufferReset() {
            this.getSourceBufferTypes().forEach((t => {
                this.resetBuffer(t)
            })), this._initSourceBuffer()
        }
        resetBuffer(t) {
            const e = this.sourceBuffer[t];
            try {
                var s;
                if (e) this.removeBufferListeners(t), this.sourceBuffer[t] = void 0, null != (s = this.mediaSource) && s.sourceBuffers.length && this.mediaSource.removeSourceBuffer(e)
            } catch (e) {
                this.warn(`onBufferReset ${t}`, e)
            }
        }
        onBufferCodecs(t, e) {
            const s = this.getSourceBufferTypes().length,
                i = Object.keys(e);
            if (i.forEach((t => {
                    if (s) {
                        const s = this.tracks[t];
                        if (s && 'function' == typeof s.buffer.changeType) {
                            var i;
                            const {
                                id: r,
                                codec: n,
                                levelCodec: a,
                                container: o,
                                metadata: l
                            } = e[t], h = Ae(s.codec, s.levelCodec), d = null == h ? void 0 : h.replace(In, '$1');
                            let c = Ae(n, a);
                            const u = null == (i = c) ? void 0 : i.replace(In, '$1');
                            if (c && d !== u) {
                                'audio' === t.slice(0, 5) && (c = Le(c, this.appendSource));
                                const e = `${o};codecs=${c}`;
                                this.appendChangeType(t, e), this.log(`switching codec ${h} to ${c}`), this.tracks[t] = {
                                    buffer: s.buffer,
                                    codec: n,
                                    container: o,
                                    levelCodec: a,
                                    metadata: l,
                                    id: r
                                }
                            }
                        }
                    } else this.pendingTracks[t] = e[t]
                })), s) return;
            const r = Math.max(this.bufferCodecEventsExpected - 1, 0);
            this.bufferCodecEventsExpected !== r && (this.log(`${r} bufferCodec event(s) expected ${i.join(',')}`), this.bufferCodecEventsExpected = r), this.mediaSource && 'open' === this.mediaSource.readyState && this.checkPendingTracks()
        }
        appendChangeType(t, e) {
            const {
                operationQueue: s
            } = this, i = {
                execute: () => {
                    const i = this.sourceBuffer[t];
                    i && (this.log(`changing ${t} sourceBuffer type to ${e}`), i.changeType(e)), s.shiftAndExecuteNext(t)
                },
                onStart: () => {},
                onComplete: () => {},
                onError: e => {
                    this.warn(`Failed to change ${t} SourceBuffer type`, e)
                }
            };
            s.append(i, t, !!this.pendingTracks[t])
        }
        onBufferAppending(t, e) {
            const {
                hls: s,
                operationQueue: i,
                tracks: r
            } = this, {
                data: n,
                type: a,
                frag: o,
                part: l,
                chunkMeta: h
            } = e, d = h.buffering[a], c = self.performance.now();
            d.start = c;
            const u = o.stats.buffering,
                f = l ? l.stats.buffering : null;
            0 === u.start && (u.start = c), f && 0 === f.start && (f.start = c);
            const g = r.audio;
            let m = !1;
            'audio' === a && 'audio/mpeg' === (null == g ? void 0 : g.container) && (m = !this.lastMpegAudioChunk || 1 === h.id || this.lastMpegAudioChunk.sn !== h.sn, this.lastMpegAudioChunk = h);
            const p = o.start,
                T = {
                    execute: () => {
                        if (d.executeStart = self.performance.now(), m) {
                            const t = this.sourceBuffer[a];
                            if (t) {
                                const e = p - t.timestampOffset;
                                Math.abs(e) >= .1 && (this.log(`Updating audio SourceBuffer timestampOffset to ${p} (delta: ${e}) sn: ${o.sn})`), t.timestampOffset = p)
                            }
                        }
                        this.appendExecutor(n, a)
                    },
                    onStart: () => {},
                    onComplete: () => {
                        const t = self.performance.now();
                        d.executeEnd = d.end = t, 0 === u.first && (u.first = t), f && 0 === f.first && (f.first = t);
                        const {
                            sourceBuffer: e
                        } = this, s = {};
                        for (const t in e) s[t] = Ei.getBuffered(e[t]);
                        this.appendErrors[a] = 0, 'audio' === a || 'video' === a ? this.appendErrors.audiovideo = 0 : (this.appendErrors.audio = 0, this.appendErrors.video = 0), this.hls.trigger(y.BUFFER_APPENDED, {
                            type: a,
                            frag: o,
                            part: l,
                            chunkMeta: h,
                            parent: o.type,
                            timeRanges: s
                        })
                    },
                    onError: t => {
                        const e = {
                            type: v.MEDIA_ERROR,
                            parent: o.type,
                            details: E.BUFFER_APPEND_ERROR,
                            sourceBufferName: a,
                            frag: o,
                            part: l,
                            chunkMeta: h,
                            error: t,
                            err: t,
                            fatal: !1
                        };
                        if (t.code === DOMException.QUOTA_EXCEEDED_ERR) e.details = E.BUFFER_FULL_ERROR;
                        else {
                            const t = ++this.appendErrors[a];
                            e.details = E.BUFFER_APPEND_ERROR, this.warn(`Failed ${t}/${s.config.appendErrorMaxRetry} times to append segment in "${a}" sourceBuffer`), t >= s.config.appendErrorMaxRetry && (e.fatal = !0)
                        }
                        s.trigger(y.ERROR, e)
                    }
                };
            i.append(T, a, !!this.pendingTracks[a])
        }
        onBufferFlushing(t, e) {
            const {
                operationQueue: s
            } = this, i = t => ({
                execute: this.removeExecutor.bind(this, t, e.startOffset, e.endOffset),
                onStart: () => {},
                onComplete: () => {
                    this.hls.trigger(y.BUFFER_FLUSHED, {
                        type: t
                    })
                },
                onError: e => {
                    this.warn(`Failed to remove from ${t} SourceBuffer`, e)
                }
            });
            e.type ? s.append(i(e.type), e.type) : this.getSourceBufferTypes().forEach((t => {
                s.append(i(t), t)
            }))
        }
        onFragParsed(t, e) {
            const {
                frag: s,
                part: i
            } = e, r = [], n = i ? i.elementaryStreams : s.elementaryStreams;
            n[F] ? r.push('audiovideo') : (n[P] && r.push('audio'), n[M] && r.push('video'));
            0 === r.length && this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${s.type} level: ${s.level} sn: ${s.sn}`), this.blockBuffers((() => {
                const t = self.performance.now();
                s.stats.buffering.end = t, i && (i.stats.buffering.end = t);
                const e = i ? i.stats : s.stats;
                this.hls.trigger(y.FRAG_BUFFERED, {
                    frag: s,
                    part: i,
                    stats: e,
                    id: s.type
                })
            }), r)
        }
        onFragChanged(t, e) {
            this.trimBuffers()
        }
        onBufferEos(t, e) {
            this.getSourceBufferTypes().reduce(((t, s) => {
                const i = this.sourceBuffer[s];
                return !i || e.type && e.type !== s || (i.ending = !0, i.ended || (i.ended = !0, this.log(`${s} sourceBuffer now EOS`))), t && !(i && !i.ended)
            }), !0) && (this.log("Queueing mediaSource.endOfStream()"), this.blockBuffers((() => {
                this.getSourceBufferTypes().forEach((t => {
                    const e = this.sourceBuffer[t];
                    e && (e.ending = !1)
                }));
                const {
                    mediaSource: t
                } = this;
                t && 'open' === t.readyState ? (this.log("Calling mediaSource.endOfStream()"), t.endOfStream()) : t && this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${t.readyState}`)
            })))
        }
        onLevelUpdated(t, {
            details: e
        }) {
            e.fragments.length && (this.details = e, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration())
        }
        trimBuffers() {
            const {
                hls: t,
                details: e,
                media: s
            } = this;
            if (!s || null === e) return;
            if (!this.getSourceBufferTypes().length) return;
            const i = t.config,
                r = s.currentTime,
                n = e.levelTargetDuration,
                a = e.live && null !== i.liveBackBufferLength ? i.liveBackBufferLength : i.backBufferLength;
            if (g(a) && a > 0) {
                const t = Math.max(a, n),
                    e = Math.floor(r / n) * n - t;
                this.flushBackBuffer(r, n, e)
            }
            if (g(i.frontBufferFlushThreshold) && i.frontBufferFlushThreshold > 0) {
                const t = Math.max(i.maxBufferLength, i.frontBufferFlushThreshold),
                    e = Math.max(t, n),
                    s = Math.floor(r / n) * n + e;
                this.flushFrontBuffer(r, n, s)
            }
        }
        flushBackBuffer(t, e, s) {
            const {
                details: i,
                sourceBuffer: r
            } = this;
            this.getSourceBufferTypes().forEach((n => {
                const a = r[n];
                if (a) {
                    const r = Ei.getBuffered(a);
                    if (r.length > 0 && s > r.start(0)) {
                        if (this.hls.trigger(y.BACK_BUFFER_REACHED, {
                                bufferEnd: s
                            }), null != i && i.live) this.hls.trigger(y.LIVE_BACK_BUFFER_REACHED, {
                            bufferEnd: s
                        });
                        else if (a.ended && r.end(r.length - 1) - t < 2 * e) return void this.log(`Cannot flush ${n} back buffer while SourceBuffer is in ended state`);
                        this.hls.trigger(y.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: s,
                            type: n
                        })
                    }
                }
            }))
        }
        flushFrontBuffer(t, e, s) {
            const {
                sourceBuffer: i
            } = this;
            this.getSourceBufferTypes().forEach((r => {
                const n = i[r];
                if (n) {
                    const i = Ei.getBuffered(n),
                        a = i.length;
                    if (a < 2) return;
                    const o = i.start(a - 1),
                        l = i.end(a - 1);
                    if (s > o || t >= o && t <= l) return;
                    if (n.ended && t - l < 2 * e) return void this.log(`Cannot flush ${r} front buffer while SourceBuffer is in ended state`);
                    this.hls.trigger(y.BUFFER_FLUSHING, {
                        startOffset: o,
                        endOffset: 1 / 0,
                        type: r
                    })
                }
            }))
        }
        updateMediaElementDuration() {
            if (!this.details || !this.media || !this.mediaSource || 'open' !== this.mediaSource.readyState) return;
            const {
                details: t,
                hls: e,
                media: s,
                mediaSource: i
            } = this, r = t.fragments[0].start + t.totalduration, n = s.duration, a = g(i.duration) ? i.duration : 0;
            t.live && e.config.liveDurationInfinity ? (i.duration = 1 / 0, this.updateSeekableRange(t)) : (r > a && r > n || !g(n)) && (this.log(`Updating Media Source duration to ${r.toFixed(3)}`), i.duration = r)
        }
        updateSeekableRange(t) {
            const e = this.mediaSource,
                s = t.fragments;
            if (s.length && t.live && null != e && e.setLiveSeekableRange) {
                const i = Math.max(0, s[0].start),
                    r = Math.max(i, i + t.totalduration);
                this.log(`Media Source duration is set to ${e.duration}. Setting seekable range to ${i}-${r}.`), e.setLiveSeekableRange(i, r)
            }
        }
        checkPendingTracks() {
            const {
                bufferCodecEventsExpected: t,
                operationQueue: e,
                pendingTracks: s
            } = this, i = Object.keys(s).length;
            if (i && (!t || 2 === i || 'audiovideo' in s)) {
                this.createSourceBuffers(s), this.pendingTracks = {};
                const t = this.getSourceBufferTypes();
                if (t.length) this.hls.trigger(y.BUFFER_CREATED, {
                    tracks: this.tracks
                }), t.forEach((t => {
                    e.executeNext(t)
                }));
                else {
                    const t = new Error('could not create source buffer for media codec(s)');
                    this.hls.trigger(y.ERROR, {
                        type: v.MEDIA_ERROR,
                        details: E.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                        fatal: !0,
                        error: t,
                        reason: t.message
                    })
                }
            }
        }
        createSourceBuffers(t) {
            const {
                sourceBuffer: e,
                mediaSource: s
            } = this;
            if (!s) throw Error('createSourceBuffers called when mediaSource was null');
            for (const r in t)
                if (!e[r]) {
                    var i;
                    const n = t[r];
                    if (!n) throw Error(`source buffer exists for track ${r}, however track does not`);
                    let a = -1 === (null == (i = n.levelCodec) ? void 0 : i.indexOf(',')) ? n.levelCodec : n.codec;
                    a && 'audio' === r.slice(0, 5) && (a = Le(a, this.appendSource));
                    const o = `${n.container};codecs=${a}`;
                    this.log(`creating sourceBuffer(${o})`);
                    try {
                        const t = e[r] = s.addSourceBuffer(o),
                            i = r;
                        this.addBufferListener(i, 'updatestart', this._onSBUpdateStart), this.addBufferListener(i, 'updateend', this._onSBUpdateEnd), this.addBufferListener(i, 'error', this._onSBUpdateError), this.appendSource && this.addBufferListener(i, 'bufferedchange', ((t, e) => {
                            const s = e.removedRanges;
                            null != s && s.length && this.hls.trigger(y.BUFFER_FLUSHED, {
                                type: r
                            })
                        })), this.tracks[r] = {
                            buffer: t,
                            codec: a,
                            container: n.container,
                            levelCodec: n.levelCodec,
                            metadata: n.metadata,
                            id: n.id
                        }
                    } catch (t) {
                        this.error(`error while trying to add sourceBuffer: ${t.message}`), this.hls.trigger(y.ERROR, {
                            type: v.MEDIA_ERROR,
                            details: E.BUFFER_ADD_CODEC_ERROR,
                            fatal: !1,
                            error: t,
                            sourceBufferName: r,
                            mimeType: o
                        })
                    }
                }
        }
        get mediaSrc() {
            var t;
            const e = (null == (t = this.media) ? void 0 : t.firstChild) || this.media;
            return null == e ? void 0 : e.src
        }
        _onSBUpdateStart(t) {
            const {
                operationQueue: e
            } = this;
            e.current(t).onStart()
        }
        _onSBUpdateEnd(t) {
            var e;
            if ('closed' === (null == (e = this.mediaSource) ? void 0 : e.readyState)) return void this.resetBuffer(t);
            const {
                operationQueue: s
            } = this;
            s.current(t).onComplete(), s.shiftAndExecuteNext(t)
        }
        _onSBUpdateError(t, e) {
            var s;
            const i = new Error(`${t} SourceBuffer error. MediaSource readyState: ${null==(s=this.mediaSource)?void 0:s.readyState}`);
            this.error(`${i}`, e), this.hls.trigger(y.ERROR, {
                type: v.MEDIA_ERROR,
                details: E.BUFFER_APPENDING_ERROR,
                sourceBufferName: t,
                error: i,
                fatal: !1
            });
            const r = this.operationQueue.current(t);
            r && r.onError(i)
        }
        removeExecutor(t, e, s) {
            const {
                media: i,
                mediaSource: r,
                operationQueue: n,
                sourceBuffer: a
            } = this, o = a[t];
            if (!i || !r || !o) return this.warn(`Attempting to remove from the ${t} SourceBuffer, but it does not exist`), void n.shiftAndExecuteNext(t);
            const l = g(i.duration) ? i.duration : 1 / 0,
                h = g(r.duration) ? r.duration : 1 / 0,
                d = Math.max(0, e),
                c = Math.min(s, l, h);
            c > d && (!o.ending || o.ended) ? (o.ended = !1, this.log(`Removing [${d},${c}] from the ${t} SourceBuffer`), o.remove(d, c)) : n.shiftAndExecuteNext(t)
        }
        appendExecutor(t, e) {
            const s = this.sourceBuffer[e];
            if (s) s.ended = !1, s.appendBuffer(t);
            else if (!this.pendingTracks[e]) throw new Error(`Attempting to append to the ${e} SourceBuffer, but it does not exist`)
        }
        blockBuffers(t, e = this.getSourceBufferTypes()) {
            if (!e.length) return this.log('Blocking operation requested, but no SourceBuffers exist'), void Promise.resolve().then(t);
            const {
                operationQueue: s
            } = this, i = e.map((t => s.appendBlocker(t)));
            Promise.all(i).then((() => {
                t(), e.forEach((t => {
                    const e = this.sourceBuffer[t];
                    null != e && e.updating || s.shiftAndExecuteNext(t)
                }))
            }))
        }
        getSourceBufferTypes() {
            return Object.keys(this.sourceBuffer)
        }
        addBufferListener(t, e, s) {
            const i = this.sourceBuffer[t];
            if (!i) return;
            const r = s.bind(this, t);
            this.listeners[t].push({
                event: e,
                listener: r
            }), i.addEventListener(e, r)
        }
        removeBufferListeners(t) {
            const e = this.sourceBuffer[t];
            e && this.listeners[t].forEach((t => {
                e.removeEventListener(t.event, t.listener)
            }))
        }
    }

    function wn(t) {
        const e = t.querySelectorAll('source');
        [].slice.call(e).forEach((e => {
            t.removeChild(e)
        }))
    }

    function _n(t, e) {
        const s = self.document.createElement('source');
        s.type = 'video/mp4', s.src = e, t.appendChild(s)
    }
    n.BufferController = Cn;
    const xn = {
            42: 225,
            92: 233,
            94: 237,
            95: 243,
            96: 250,
            123: 231,
            124: 247,
            125: 209,
            126: 241,
            127: 9608,
            128: 174,
            129: 176,
            130: 189,
            131: 191,
            132: 8482,
            133: 162,
            134: 163,
            135: 9834,
            136: 224,
            137: 32,
            138: 232,
            139: 226,
            140: 234,
            141: 238,
            142: 244,
            143: 251,
            144: 193,
            145: 201,
            146: 211,
            147: 218,
            148: 220,
            149: 252,
            150: 8216,
            151: 161,
            152: 42,
            153: 8217,
            154: 9473,
            155: 169,
            156: 8480,
            157: 8226,
            158: 8220,
            159: 8221,
            160: 192,
            161: 194,
            162: 199,
            163: 200,
            164: 202,
            165: 203,
            166: 235,
            167: 206,
            168: 207,
            169: 239,
            170: 212,
            171: 217,
            172: 249,
            173: 219,
            174: 171,
            175: 187,
            176: 195,
            177: 227,
            178: 205,
            179: 204,
            180: 236,
            181: 210,
            182: 242,
            183: 213,
            184: 245,
            185: 123,
            186: 125,
            187: 92,
            188: 94,
            189: 95,
            190: 124,
            191: 8764,
            192: 196,
            193: 228,
            194: 214,
            195: 246,
            196: 223,
            197: 165,
            198: 164,
            199: 9475,
            200: 197,
            201: 229,
            202: 216,
            203: 248,
            204: 9487,
            205: 9491,
            206: 9495,
            207: 9499
        },
        Pn = function(t) {
            let e = t;
            return xn.hasOwnProperty(t) && (e = xn[t]), String.fromCharCode(e)
        },
        Mn = 15,
        Fn = 100,
        On = {
            17: 1,
            18: 3,
            21: 5,
            22: 7,
            23: 9,
            16: 11,
            19: 12,
            20: 14
        },
        Nn = {
            17: 2,
            18: 4,
            21: 6,
            22: 8,
            23: 10,
            19: 13,
            20: 15
        },
        Un = {
            25: 1,
            26: 3,
            29: 5,
            30: 7,
            31: 9,
            24: 11,
            27: 12,
            28: 14
        },
        Bn = {
            25: 2,
            26: 4,
            29: 6,
            30: 8,
            31: 10,
            27: 13,
            28: 15
        },
        $n = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta', 'black', 'transparent'];
    class Gn {
        constructor() {
            this.time = null, this.verboseLevel = 0
        }
        log(t, e) {
            if (this.verboseLevel >= t) {
                const s = 'function' == typeof e ? e() : e;
                D.log(`${this.time} [${t}] ${s}`)
            }
        }
    }
    const Kn = function(t) {
        const e = [];
        for (let s = 0; s < t.length; s++) e.push(t[s].toString(16));
        return e
    };
    class Hn {
        constructor() {
            this.foreground = 'white', this.underline = !1, this.italics = !1, this.background = 'black', this.flash = !1
        }
        reset() {
            this.foreground = 'white', this.underline = !1, this.italics = !1, this.background = 'black', this.flash = !1
        }
        setStyles(t) {
            const e = ['foreground', 'underline', 'italics', 'background', 'flash'];
            for (let s = 0; s < e.length; s++) {
                const i = e[s];
                t.hasOwnProperty(i) && (this[i] = t[i])
            }
        }
        isDefault() {
            return 'white' === this.foreground && !this.underline && !this.italics && 'black' === this.background && !this.flash
        }
        equals(t) {
            return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
        }
        copy(t) {
            this.foreground = t.foreground, this.underline = t.underline, this.italics = t.italics, this.background = t.background, this.flash = t.flash
        }
        toString() {
            return 'color=' + this.foreground + ', underline=' + this.underline + ', italics=' + this.italics + ', background=' + this.background + ', flash=' + this.flash
        }
    }
    class Vn {
        constructor() {
            this.uchar = ' ', this.penState = new Hn
        }
        reset() {
            this.uchar = ' ', this.penState.reset()
        }
        setChar(t, e) {
            this.uchar = t, this.penState.copy(e)
        }
        setPenState(t) {
            this.penState.copy(t)
        }
        equals(t) {
            return this.uchar === t.uchar && this.penState.equals(t.penState)
        }
        copy(t) {
            this.uchar = t.uchar, this.penState.copy(t.penState)
        }
        isEmpty() {
            return ' ' === this.uchar && this.penState.isDefault()
        }
    }
    class Yn {
        constructor(t) {
            this.chars = [], this.pos = 0, this.currPenState = new Hn, this.cueStartTime = null, this.logger = void 0;
            for (let t = 0; t < Fn; t++) this.chars.push(new Vn);
            this.logger = t
        }
        equals(t) {
            for (let e = 0; e < Fn; e++)
                if (!this.chars[e].equals(t.chars[e])) return !1;
            return !0
        }
        copy(t) {
            for (let e = 0; e < Fn; e++) this.chars[e].copy(t.chars[e])
        }
        isEmpty() {
            let t = !0;
            for (let e = 0; e < Fn; e++)
                if (!this.chars[e].isEmpty()) {
                    t = !1;
                    break
                }
            return t
        }
        setCursor(t) {
            this.pos !== t && (this.pos = t), this.pos < 0 ? (this.logger.log(3, 'Negative cursor position ' + this.pos), this.pos = 0) : this.pos > Fn && (this.logger.log(3, 'Too large cursor position ' + this.pos), this.pos = Fn)
        }
        moveCursor(t) {
            const e = this.pos + t;
            if (t > 1)
                for (let t = this.pos + 1; t < e + 1; t++) this.chars[t].setPenState(this.currPenState);
            this.setCursor(e)
        }
        backSpace() {
            this.moveCursor(-1), this.chars[this.pos].setChar(' ', this.currPenState)
        }
        insertChar(t) {
            t >= 144 && this.backSpace();
            const e = Pn(t);
            this.pos >= Fn ? this.logger.log(0, (() => 'Cannot insert ' + t.toString(16) + ' (' + e + ') at position ' + this.pos + '. Skipping it!')) : (this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1))
        }
        clearFromPos(t) {
            let e;
            for (e = t; e < Fn; e++) this.chars[e].reset()
        }
        clear() {
            this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
        }
        clearToEndOfRow() {
            this.clearFromPos(this.pos)
        }
        getTextString() {
            const t = [];
            let e = !0;
            for (let s = 0; s < Fn; s++) {
                const i = this.chars[s].uchar;
                ' ' !== i && (e = !1), t.push(i)
            }
            return e ? '' : t.join('')
        }
        setPenStyles(t) {
            this.currPenState.setStyles(t);
            this.chars[this.pos].setPenState(this.currPenState)
        }
    }
    class Wn {
        constructor(t) {
            this.rows = [], this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.logger = void 0;
            for (let e = 0; e < Mn; e++) this.rows.push(new Yn(t));
            this.logger = t
        }
        reset() {
            for (let t = 0; t < Mn; t++) this.rows[t].clear();
            this.currRow = 14
        }
        equals(t) {
            let e = !0;
            for (let s = 0; s < Mn; s++)
                if (!this.rows[s].equals(t.rows[s])) {
                    e = !1;
                    break
                }
            return e
        }
        copy(t) {
            for (let e = 0; e < Mn; e++) this.rows[e].copy(t.rows[e])
        }
        isEmpty() {
            let t = !0;
            for (let e = 0; e < Mn; e++)
                if (!this.rows[e].isEmpty()) {
                    t = !1;
                    break
                }
            return t
        }
        backSpace() {
            this.rows[this.currRow].backSpace()
        }
        clearToEndOfRow() {
            this.rows[this.currRow].clearToEndOfRow()
        }
        insertChar(t) {
            this.rows[this.currRow].insertChar(t)
        }
        setPen(t) {
            this.rows[this.currRow].setPenStyles(t)
        }
        moveCursor(t) {
            this.rows[this.currRow].moveCursor(t)
        }
        setCursor(t) {
            this.logger.log(2, 'setCursor: ' + t);
            this.rows[this.currRow].setCursor(t)
        }
        setPAC(t) {
            this.logger.log(2, (() => 'pacData = ' + JSON.stringify(t)));
            let e = t.row - 1;
            if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
                for (let t = 0; t < Mn; t++) this.rows[t].clear();
                const t = this.currRow + 1 - this.nrRollUpRows,
                    s = this.lastOutputScreen;
                if (s) {
                    const i = s.rows[t].cueStartTime,
                        r = this.logger.time;
                    if (null !== i && null !== r && i < r)
                        for (let i = 0; i < this.nrRollUpRows; i++) this.rows[e - this.nrRollUpRows + i + 1].copy(s.rows[t + i])
                }
            }
            this.currRow = e;
            const s = this.rows[this.currRow];
            if (null !== t.indent) {
                const e = t.indent,
                    i = Math.max(e - 1, 0);
                s.setCursor(t.indent), t.color = s.chars[i].penState.foreground
            }
            const i = {
                foreground: t.color,
                underline: t.underline,
                italics: t.italics,
                background: 'black',
                flash: !1
            };
            this.setPen(i)
        }
        setBkgData(t) {
            this.logger.log(2, (() => 'bkgData = ' + JSON.stringify(t))), this.backSpace(), this.setPen(t), this.insertChar(32)
        }
        setRollUpRows(t) {
            this.nrRollUpRows = t
        }
        rollUp() {
            if (null === this.nrRollUpRows) return void this.logger.log(3, 'roll_up but nrRollUpRows not set yet');
            this.logger.log(1, (() => this.getDisplayText()));
            const t = this.currRow + 1 - this.nrRollUpRows,
                e = this.rows.splice(t, 1)[0];
            e.clear(), this.rows.splice(this.currRow, 0, e), this.logger.log(2, 'Rolling up')
        }
        getDisplayText(t) {
            t = t || !1;
            const e = [];
            let s = '',
                i = -1;
            for (let s = 0; s < Mn; s++) {
                const r = this.rows[s].getTextString();
                r && (i = s + 1, t ? e.push('Row ' + i + ": '" + r + "'") : e.push(r.trim()))
            }
            return e.length > 0 && (s = t ? '[' + e.join(' | ') + ']' : e.join('\n')), s
        }
        getTextAndFormat() {
            return this.rows
        }
    }
    class jn {
        constructor(t, e, s) {
            this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = t, this.outputFilter = e, this.mode = null, this.verbose = 0, this.displayedMemory = new Wn(s), this.nonDisplayedMemory = new Wn(s), this.lastOutputScreen = new Wn(s), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = s
        }
        reset() {
            this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
        }
        getHandler() {
            return this.outputFilter
        }
        setHandler(t) {
            this.outputFilter = t
        }
        setPAC(t) {
            this.writeScreen.setPAC(t)
        }
        setBkgData(t) {
            this.writeScreen.setBkgData(t)
        }
        setMode(t) {
            t !== this.mode && (this.mode = t, this.logger.log(2, (() => 'MODE=' + t)), 'MODE_POP-ON' === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), 'MODE_ROLL-UP' !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
        }
        insertChars(t) {
            for (let e = 0; e < t.length; e++) this.writeScreen.insertChar(t[e]);
            const e = this.writeScreen === this.displayedMemory ? 'DISP' : 'NON_DISP';
            this.logger.log(2, (() => e + ': ' + this.writeScreen.getDisplayText(!0))), 'MODE_PAINT-ON' !== this.mode && 'MODE_ROLL-UP' !== this.mode || (this.logger.log(1, (() => 'DISPLAYED: ' + this.displayedMemory.getDisplayText(!0))), this.outputDataUpdate())
        }
        ccRCL() {
            this.logger.log(2, 'RCL - Resume Caption Loading'), this.setMode('MODE_POP-ON')
        }
        ccBS() {
            this.logger.log(2, 'BS - BackSpace'), 'MODE_TEXT' !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
        }
        ccAOF() {}
        ccAON() {}
        ccDER() {
            this.logger.log(2, 'DER- Delete to End of Row'), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
        }
        ccRU(t) {
            this.logger.log(2, 'RU(' + t + ') - Roll Up'), this.writeScreen = this.displayedMemory, this.setMode('MODE_ROLL-UP'), this.writeScreen.setRollUpRows(t)
        }
        ccFON() {
            this.logger.log(2, 'FON - Flash On'), this.writeScreen.setPen({
                flash: !0
            })
        }
        ccRDC() {
            this.logger.log(2, 'RDC - Resume Direct Captioning'), this.setMode('MODE_PAINT-ON')
        }
        ccTR() {
            this.logger.log(2, 'TR'), this.setMode('MODE_TEXT')
        }
        ccRTD() {
            this.logger.log(2, 'RTD'), this.setMode('MODE_TEXT')
        }
        ccEDM() {
            this.logger.log(2, 'EDM - Erase Displayed Memory'), this.displayedMemory.reset(), this.outputDataUpdate(!0)
        }
        ccCR() {
            this.logger.log(2, 'CR - Carriage Return'), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
        }
        ccENM() {
            this.logger.log(2, 'ENM - Erase Non-displayed Memory'), this.nonDisplayedMemory.reset()
        }
        ccEOC() {
            if (this.logger.log(2, 'EOC - End Of Caption'), 'MODE_POP-ON' === this.mode) {
                const t = this.displayedMemory;
                this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, (() => 'DISP: ' + this.displayedMemory.getDisplayText()))
            }
            this.outputDataUpdate(!0)
        }
        ccTO(t) {
            this.logger.log(2, 'TO(' + t + ') - Tab Offset'), this.writeScreen.moveCursor(t)
        }
        ccMIDROW(t) {
            const e = {
                flash: !1
            };
            if (e.underline = t % 2 == 1, e.italics = t >= 46, e.italics) e.foreground = 'white';
            else {
                const s = Math.floor(t / 2) - 16,
                    i = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta'];
                e.foreground = i[s]
            }
            this.logger.log(2, 'MIDROW: ' + JSON.stringify(e)), this.writeScreen.setPen(e)
        }
        outputDataUpdate(t = !1) {
            const e = this.logger.time;
            null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
        }
        cueSplitAtTime(t) {
            this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t))
        }
    }
    class qn {
        constructor(t, e, s) {
            this.channels = void 0, this.currentChannel = 0, this.cmdHistory = {
                a: null,
                b: null
            }, this.logger = void 0;
            const i = this.logger = new Gn;
            this.channels = [null, new jn(t, e, i), new jn(t + 1, s, i)]
        }
        getHandler(t) {
            return this.channels[t].getHandler()
        }
        setHandler(t, e) {
            this.channels[t].setHandler(e)
        }
        addData(t, e) {
            let s, i, r, n = !1;
            this.logger.time = t;
            for (let t = 0; t < e.length; t += 2)
                if (i = 127 & e[t], r = 127 & e[t + 1], 0 !== i || 0 !== r) {
                    if (this.logger.log(3, '[' + Kn([e[t], e[t + 1]]) + '] -> (' + Kn([i, r]) + ')'), s = this.parseCmd(i, r), s || (s = this.parseMidrow(i, r)), s || (s = this.parsePAC(i, r)), s || (s = this.parseBackgroundAttributes(i, r)), !s && (n = this.parseChars(i, r), n)) {
                        const t = this.currentChannel;
                        if (t && t > 0) {
                            this.channels[t].insertChars(n)
                        } else this.logger.log(2, 'No channel found yet. TEXT-MODE?')
                    }
                    s || n || this.logger.log(2, "Couldn't parse cleaned data " + Kn([i, r]) + ' orig: ' + Kn([e[t], e[t + 1]]))
                }
        }
        parseCmd(t, e) {
            const {
                cmdHistory: s
            } = this;
            if (!((20 === t || 28 === t || 21 === t || 29 === t) && e >= 32 && e <= 47) && !((23 === t || 31 === t) && e >= 33 && e <= 35)) return !1;
            if (zn(t, e, s)) return Xn(null, null, s), this.logger.log(3, 'Repeated command (' + Kn([t, e]) + ') is dropped'), !0;
            const i = 20 === t || 21 === t || 23 === t ? 1 : 2,
                r = this.channels[i];
            return 20 === t || 21 === t || 28 === t || 29 === t ? 32 === e ? r.ccRCL() : 33 === e ? r.ccBS() : 34 === e ? r.ccAOF() : 35 === e ? r.ccAON() : 36 === e ? r.ccDER() : 37 === e ? r.ccRU(2) : 38 === e ? r.ccRU(3) : 39 === e ? r.ccRU(4) : 40 === e ? r.ccFON() : 41 === e ? r.ccRDC() : 42 === e ? r.ccTR() : 43 === e ? r.ccRTD() : 44 === e ? r.ccEDM() : 45 === e ? r.ccCR() : 46 === e ? r.ccENM() : 47 === e && r.ccEOC() : r.ccTO(e - 32), Xn(t, e, s), this.currentChannel = i, !0
        }
        parseMidrow(t, e) {
            let s = 0;
            if ((17 === t || 25 === t) && e >= 32 && e <= 47) {
                if (s = 17 === t ? 1 : 2, s !== this.currentChannel) return this.logger.log(0, 'Mismatch channel in midrow parsing'), !1;
                const i = this.channels[s];
                return !!i && (i.ccMIDROW(e), this.logger.log(3, 'MIDROW (' + Kn([t, e]) + ')'), !0)
            }
            return !1
        }
        parsePAC(t, e) {
            let s;
            const i = this.cmdHistory;
            if (!((t >= 17 && t <= 23 || t >= 25 && t <= 31) && e >= 64 && e <= 127) && !((16 === t || 24 === t) && e >= 64 && e <= 95)) return !1;
            if (zn(t, e, i)) return Xn(null, null, i), !0;
            const r = t <= 23 ? 1 : 2;
            s = e >= 64 && e <= 95 ? 1 === r ? On[t] : Un[t] : 1 === r ? Nn[t] : Bn[t];
            const n = this.channels[r];
            return !!n && (n.setPAC(this.interpretPAC(s, e)), Xn(t, e, i), this.currentChannel = r, !0)
        }
        interpretPAC(t, e) {
            let s;
            const i = {
                color: null,
                italics: !1,
                indent: null,
                underline: !1,
                row: t
            };
            return s = e > 95 ? e - 96 : e - 64, i.underline = !(1 & ~s), s <= 13 ? i.color = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta', 'white'][Math.floor(s / 2)] : s <= 15 ? (i.italics = !0, i.color = 'white') : i.indent = 4 * Math.floor((s - 16) / 2), i
        }
        parseChars(t, e) {
            let s, i = null,
                r = null;
            if (t >= 25 ? (s = 2, r = t - 8) : (s = 1, r = t), r >= 17 && r <= 19) {
                let t;
                t = 17 === r ? e + 80 : 18 === r ? e + 112 : e + 144, this.logger.log(2, "Special char '" + Pn(t) + "' in channel " + s), i = [t]
            } else t >= 32 && t <= 127 && (i = 0 === e ? [t] : [t, e]);
            if (i) {
                const s = Kn(i);
                this.logger.log(3, 'Char codes =  ' + s.join(',')), Xn(t, e, this.cmdHistory)
            }
            return i
        }
        parseBackgroundAttributes(t, e) {
            if (!((16 === t || 24 === t) && e >= 32 && e <= 47) && !((23 === t || 31 === t) && e >= 45 && e <= 47)) return !1;
            let s;
            const i = {};
            16 === t || 24 === t ? (s = Math.floor((e - 32) / 2), i.background = $n[s], e % 2 == 1 && (i.background = i.background + '_semi')) : 45 === e ? i.background = 'transparent' : (i.foreground = 'black', 47 === e && (i.underline = !0));
            const r = t <= 23 ? 1 : 2;
            return this.channels[r].setBkgData(i), Xn(t, e, this.cmdHistory), !0
        }
        reset() {
            for (let t = 0; t < Object.keys(this.channels).length; t++) {
                const e = this.channels[t];
                e && e.reset()
            }
            this.cmdHistory = {
                a: null,
                b: null
            }
        }
        cueSplitAtTime(t) {
            for (let e = 0; e < this.channels.length; e++) {
                const s = this.channels[e];
                s && s.cueSplitAtTime(t)
            }
        }
    }

    function Xn(t, e, s) {
        s.a = t, s.b = e
    }

    function zn(t, e, s) {
        return s.a === t && s.b === e
    }
    class Qn {
        constructor(t, e) {
            this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = t, this.trackName = e
        }
        dispatchCue() {
            null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null)
        }
        newCue(t, e, s) {
            (null === this.startTime || this.startTime > t) && (this.startTime = t), this.endTime = e, this.screen = s, this.timelineController.createCaptionsTrack(this.trackName)
        }
        reset() {
            this.cueRanges = [], this.startTime = null
        }
    }
    var Jn = (function() {
        if (null != Y && Y.VTTCue) return self.VTTCue;
        const t = ['', 'lr', 'rl'],
            e = ['start', 'middle', 'end', 'left', 'right'];

        function s(t, e) {
            if ('string' != typeof e) return !1;
            if (!Array.isArray(t)) return !1;
            const s = e.toLowerCase();
            return !!~t.indexOf(s) && s
        }

        function i(e) {
            return s(t, e)
        }

        function r(t) {
            return s(e, t)
        }

        function n(t, ...e) {
            let s = 1;
            for (; s < arguments.length; s++) {
                const e = arguments[s];
                for (const s in e) t[s] = e[s]
            }
            return t
        }

        function a(t, e, s) {
            const a = this,
                o = {
                    enumerable: !0
                };
            a.hasBeenReset = !1;
            let l = '',
                h = !1,
                d = t,
                c = e,
                u = s,
                f = null,
                g = '',
                m = !0,
                p = 'auto',
                y = 'start',
                v = 50,
                E = 'middle',
                T = 50,
                S = 'middle';
            Object.defineProperty(a, 'id', n({}, o, {
                get: function() {
                    return l
                },
                set: function(t) {
                    l = '' + t
                }
            })), Object.defineProperty(a, 'pauseOnExit', n({}, o, {
                get: function() {
                    return h
                },
                set: function(t) {
                    h = !!t
                }
            })), Object.defineProperty(a, 'startTime', n({}, o, {
                get: function() {
                    return d
                },
                set: function(t) {
                    if ('number' != typeof t) throw new TypeError('Start time must be set to a number.');
                    d = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, 'endTime', n({}, o, {
                get: function() {
                    return c
                },
                set: function(t) {
                    if ('number' != typeof t) throw new TypeError('End time must be set to a number.');
                    c = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, 'text', n({}, o, {
                get: function() {
                    return u
                },
                set: function(t) {
                    u = '' + t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, 'region', n({}, o, {
                get: function() {
                    return f
                },
                set: function(t) {
                    f = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, 'vertical', n({}, o, {
                get: function() {
                    return g
                },
                set: function(t) {
                    const e = i(t);
                    if (!1 === e) throw new SyntaxError('An invalid or illegal string was specified.');
                    g = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, 'snapToLines', n({}, o, {
                get: function() {
                    return m
                },
                set: function(t) {
                    m = !!t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, 'line', n({}, o, {
                get: function() {
                    return p
                },
                set: function(t) {
                    if ('number' != typeof t && 'auto' !== t) throw new SyntaxError('An invalid number or illegal string was specified.');
                    p = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, 'lineAlign', n({}, o, {
                get: function() {
                    return y
                },
                set: function(t) {
                    const e = r(t);
                    if (!e) throw new SyntaxError('An invalid or illegal string was specified.');
                    y = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, 'position', n({}, o, {
                get: function() {
                    return v
                },
                set: function(t) {
                    if (t < 0 || t > 100) throw new Error('Position must be between 0 and 100.');
                    v = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, 'positionAlign', n({}, o, {
                get: function() {
                    return E
                },
                set: function(t) {
                    const e = r(t);
                    if (!e) throw new SyntaxError('An invalid or illegal string was specified.');
                    E = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, 'size', n({}, o, {
                get: function() {
                    return T
                },
                set: function(t) {
                    if (t < 0 || t > 100) throw new Error('Size must be between 0 and 100.');
                    T = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, 'align', n({}, o, {
                get: function() {
                    return S
                },
                set: function(t) {
                    const e = r(t);
                    if (!e) throw new SyntaxError('An invalid or illegal string was specified.');
                    S = e, this.hasBeenReset = !0
                }
            })), a.displayState = void 0
        }
        return a.prototype.getCueAsHTML = function() {
            return self.WebVTT.convertCueToDOMTree(self, this.text)
        }, a
    })();
    class Zn {
        decode(t, e) {
            if (!t) return '';
            if ('string' != typeof t) throw new Error('Error - expected string data.');
            return decodeURIComponent(encodeURIComponent(t))
        }
    }

    function ta(t) {
        function e(t, e, s, i) {
            return 3600 * (0 | t) + 60 * (0 | e) + (0 | s) + parseFloat(i || 0)
        }
        const s = t.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
        return s ? parseFloat(s[2]) > 59 ? e(s[2], s[3], 0, s[4]) : e(s[1], s[2], s[3], s[4]) : null
    }
    class ea {
        constructor() {
            this.values = Object.create(null)
        }
        set(t, e) {
            this.get(t) || '' === e || (this.values[t] = e)
        }
        get(t, e, s) {
            return s ? this.has(t) ? this.values[t] : e[s] : this.has(t) ? this.values[t] : e
        }
        has(t) {
            return t in this.values
        }
        alt(t, e, s) {
            for (let i = 0; i < s.length; ++i)
                if (e === s[i]) {
                    this.set(t, e);
                    break
                }
        }
        integer(t, e) {
            /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
        }
        percent(t, e) {
            if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
                const s = parseFloat(e);
                if (s >= 0 && s <= 100) return this.set(t, s), !0
            }
            return !1
        }
    }

    function sa(t, e, s, i) {
        const r = i ? t.split(i) : [t];
        for (const t in r) {
            if ('string' != typeof r[t]) continue;
            const i = r[t].split(s);
            if (2 !== i.length) continue;
            e(i[0], i[1])
        }
    }
    const ia = new Jn(0, 0, ''),
        ra = 'middle' === ia.align ? 'middle' : 'center';

    function na(t, e, s) {
        const i = t;

        function r() {
            const e = ta(t);
            if (null === e) throw new Error('Malformed timestamp: ' + i);
            return t = t.replace(/^[^\sa-zA-Z-]+/, ''), e
        }

        function n() {
            t = t.replace(/^\s+/, '')
        }
        if (n(), e.startTime = r(), n(), '--\x3e' !== t.slice(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
        t = t.slice(3), n(), e.endTime = r(), n(), (function(t, e) {
            const i = new ea;
            sa(t, (function(t, e) {
                let r;
                switch (t) {
                    case 'region':
                        for (let r = s.length - 1; r >= 0; r--)
                            if (s[r].id === e) {
                                i.set(t, s[r].region);
                                break
                            }
                        break;
                    case 'vertical':
                        i.alt(t, e, ['rl', 'lr']);
                        break;
                    case 'line':
                        r = e.split(','), i.integer(t, r[0]), i.percent(t, r[0]) && i.set('snapToLines', !1), i.alt(t, r[0], ['auto']), 2 === r.length && i.alt('lineAlign', r[1], ['start', ra, 'end']);
                        break;
                    case 'position':
                        r = e.split(','), i.percent(t, r[0]), 2 === r.length && i.alt('positionAlign', r[1], ['start', ra, 'end', 'line-left', 'line-right', 'auto']);
                        break;
                    case 'size':
                        i.percent(t, e);
                        break;
                    case 'align':
                        i.alt(t, e, ['start', ra, 'end', 'left', 'right'])
                }
            }), /:/, /\s/), e.region = i.get('region', null), e.vertical = i.get('vertical', '');
            let r = i.get('line', 'auto');
            'auto' === r && -1 === ia.line && (r = -1), e.line = r, e.lineAlign = i.get('lineAlign', 'start'), e.snapToLines = i.get('snapToLines', !0), e.size = i.get('size', 100), e.align = i.get('align', ra);
            let n = i.get('position', 'auto');
            'auto' === n && 50 === ia.position && (n = 'start' === e.align || 'left' === e.align ? 0 : 'end' === e.align || 'right' === e.align ? 100 : 50), e.position = n
        })(t, e)
    }

    function aa(t) {
        return t.replace(/<br(?: \/)?>/gi, '\n')
    }
    class oa {
        constructor() {
            this.state = 'INITIAL', this.buffer = '', this.decoder = new Zn, this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0
        }
        parse(t) {
            const e = this;

            function s() {
                let t = e.buffer,
                    s = 0;
                for (t = aa(t); s < t.length && '\r' !== t[s] && '\n' !== t[s];) ++s;
                const i = t.slice(0, s);
                return '\r' === t[s] && ++s, '\n' === t[s] && ++s, e.buffer = t.slice(s), i
            }
            t && (e.buffer += e.decoder.decode(t, {
                stream: !0
            }));
            try {
                let t = '';
                if ('INITIAL' === e.state) {
                    if (!/\r\n|\n/.test(e.buffer)) return this;
                    t = s();
                    const i = t.match(/^(\xef\xbb\xbf)?WEBVTT([ \t].*)?$/);
                    if (null == i || !i[0]) throw new Error('Malformed WebVTT signature.');
                    e.state = 'HEADER'
                }
                let i = !1;
                for (; e.buffer;) {
                    if (!/\r\n|\n/.test(e.buffer)) return this;
                    switch (i ? i = !1 : t = s(), e.state) {
                        case 'HEADER':
                            /:/.test(t) ? sa(t, (function(t, e) {}), /:/) : t || (e.state = 'ID');
                            continue;
                        case 'NOTE':
                            t || (e.state = 'ID');
                            continue;
                        case 'ID':
                            if (/^NOTE($|[ \t])/.test(t)) {
                                e.state = 'NOTE';
                                break
                            }
                            if (!t) continue;
                            if (e.cue = new Jn(0, 0, ''), e.state = 'CUE', -1 === t.indexOf('--\x3e')) {
                                e.cue.id = t;
                                continue
                            }
                        case 'CUE':
                            if (!e.cue) {
                                e.state = 'BADCUE';
                                continue
                            }
                            try {
                                na(t, e.cue, e.regionList)
                            } catch (t) {
                                e.cue = null, e.state = 'BADCUE';
                                continue
                            }
                            e.state = 'CUETEXT';
                            continue;
                        case 'CUETEXT':
                            {
                                const s = -1 !== t.indexOf('--\x3e');
                                if (!t || s && (i = !0)) {
                                    e.oncue && e.cue && e.oncue(e.cue), e.cue = null, e.state = 'ID';
                                    continue
                                }
                                if (null === e.cue) continue;e.cue.text && (e.cue.text += '\n'),
                                e.cue.text += t
                            }
                            continue;
                        case 'BADCUE':
                            t || (e.state = 'ID')
                    }
                }
            } catch (t) {
                'CUETEXT' === e.state && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = 'INITIAL' === e.state ? 'BADWEBVTT' : 'BADCUE'
            }
            return this
        }
        flush() {
            const t = this;
            try {
                if ((t.cue || 'HEADER' === t.state) && (t.buffer += '\n\n', t.parse()), 'INITIAL' === t.state || 'BADWEBVTT' === t.state) throw new Error('Malformed WebVTT signature.')
            } catch (e) {
                t.onparsingerror && t.onparsingerror(e)
            }
            return t.onflush && t.onflush(), this
        }
    }
    const la = /\r\n|\n\r|\n|\r/g,
        ha = function(t, e, s = 0) {
            return t.slice(s, s + e.length) === e
        },
        da = function(t) {
            let e = parseInt(t.slice(-3));
            const s = parseInt(t.slice(-6, -4)),
                i = parseInt(t.slice(-9, -7)),
                r = t.length > 9 ? parseInt(t.substring(0, t.indexOf(':'))) : 0;
            if (!(g(e) && g(s) && g(i) && g(r))) throw Error(`Malformed X-TIMESTAMP-MAP: Local:${t}`);
            return e += 1e3 * s, e += 6e4 * i, e += 36e5 * r, e
        },
        ca = function(t) {
            let e = 5381,
                s = t.length;
            for (; s;) e = 33 * e ^ t.charCodeAt(--s);
            return (e >>> 0).toString()
        };

    function ua(t, e, s) {
        return ca(t.toString()) + ca(e.toString()) + ca(s)
    }
    const fa = function(t, e, s) {
        let i = t[e],
            r = t[i.prevCC];
        if (!r || !r.new && i.new) return t.ccOffset = t.presentationOffset = i.start, void(i.new = !1);
        for (; null != (n = r) && n.new;) {
            var n;
            t.ccOffset += i.start - r.start, i.new = !1, i = r, r = t[i.prevCC]
        }
        t.presentationOffset = s
    };

    function ga(t, e, s, i, r, n, a) {
        const o = new oa,
            l = vt(new Uint8Array(t)).trim().replace(la, '\n').split('\n'),
            h = [],
            d = e ? Xr(e.baseTime, e.timescale) : 0;
        let c, u = '00:00.000',
            f = 0,
            g = 0,
            m = !0;
        o.oncue = function(t) {
            const n = s[i];
            let a = s.ccOffset;
            const o = (f - d) / 9e4;
            if (null != n && n.new && (void 0 !== g ? a = s.ccOffset = n.start : fa(s, i, o)), o) {
                if (!e) return void(c = new Error('Missing initPTS for VTT MPEGTS'));
                a = o - s.presentationOffset
            }
            const l = t.endTime - t.startTime,
                u = tn(9e4 * (t.startTime + a - g), 9e4 * r) / 9e4;
            t.startTime = Math.max(u, 0), t.endTime = Math.max(u + l, 0);
            const m = t.text.trim();
            t.text = decodeURIComponent(encodeURIComponent(m)), t.id || (t.id = ua(t.startTime, t.endTime, m)), t.endTime > 0 && h.push(t)
        }, o.onparsingerror = function(t) {
            c = t
        }, o.onflush = function() {
            c ? a(c) : n(h)
        }, l.forEach((t => {
            if (m) {
                if (ha(t, 'X-TIMESTAMP-MAP=')) {
                    m = !1, t.slice(16).split(',').forEach((t => {
                        ha(t, 'LOCAL:') ? u = t.slice(6) : ha(t, 'MPEGTS:') && (f = parseInt(t.slice(7)))
                    }));
                    try {
                        g = da(u) / 1e3
                    } catch (t) {
                        c = t
                    }
                    return
                }
                '' === t && (m = !1)
            }
            o.parse(t + '\n')
        })), o.flush()
    }
    const ma = 'stpp.ttml.im1t',
        pa = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
        ya = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
        va = {
            left: 'start',
            center: 'center',
            right: 'end',
            start: 'start',
            end: 'end'
        };

    function Ea(t, e, s, i) {
        const r = xt(new Uint8Array(t), ['mdat']);
        if (0 === r.length) return void i(new Error('Could not parse IMSC1 mdat'));
        const n = r.map((t => vt(t))),
            a = jr(e.baseTime, 1, e.timescale);
        try {
            n.forEach((t => s(Ta(t, a))))
        } catch (t) {
            i(t)
        }
    }

    function Ta(t, e) {
        const s = (new DOMParser).parseFromString(t, 'text/xml').getElementsByTagName('tt')[0];
        if (!s) throw new Error('Invalid ttml');
        const i = {
                frameRate: 30,
                subFrameRate: 1,
                frameRateMultiplier: 0,
                tickRate: 0
            },
            r = Object.keys(i).reduce(((t, e) => (t[e] = s.getAttribute(`ttp:${e}`) || i[e], t)), {}),
            n = 'preserve' !== s.getAttribute('xml:space'),
            a = La(Sa(s, 'styling', 'style')),
            o = La(Sa(s, 'layout', 'region')),
            l = Sa(s, 'body', '[begin]');
        return [].map.call(l, (t => {
            const s = Aa(t, n);
            if (!s || !t.hasAttribute('begin')) return null;
            const i = ka(t.getAttribute('begin'), r),
                l = ka(t.getAttribute('dur'), r);
            let h = ka(t.getAttribute('end'), r);
            if (null === i) throw Da(t);
            if (null === h) {
                if (null === l) throw Da(t);
                h = i + l
            }
            const d = new Jn(i - e, h - e, s);
            d.id = ua(d.startTime, d.endTime, d.text);
            const c = Ra(o[t.getAttribute('region')], a[t.getAttribute('style')], a),
                {
                    textAlign: u
                } = c;
            if (u) {
                const t = va[u];
                t && (d.lineAlign = t), d.align = u
            }
            return f(d, c), d
        })).filter((t => null !== t))
    }

    function Sa(t, e, s) {
        const i = t.getElementsByTagName(e)[0];
        return i ? [].slice.call(i.querySelectorAll(s)) : []
    }

    function La(t) {
        return t.reduce(((t, e) => {
            const s = e.getAttribute('xml:id');
            return s && (t[s] = e), t
        }), {})
    }

    function Aa(t, e) {
        return [].slice.call(t.childNodes).reduce(((t, s, i) => {
            var r;
            return 'br' === s.nodeName && i ? t + '\n' : null != (r = s.childNodes) && r.length ? Aa(s, e) : e ? t + s.textContent.trim().replace(/\s+/g, ' ') : t + s.textContent
        }), '')
    }

    function Ra(t, e, s) {
        const i = 'http://www.w3.org/ns/ttml#styling';
        let r = null;
        const n = null != t && t.hasAttribute('style') ? t.getAttribute('style') : null;
        return n && s.hasOwnProperty(n) && (r = s[n]), ['displayAlign', 'textAlign', 'color', 'backgroundColor', 'fontSize', 'fontFamily'].reduce(((s, n) => {
            const a = ba(e, i, n) || ba(t, i, n) || ba(r, i, n);
            return a && (s[n] = a), s
        }), {})
    }

    function ba(t, e, s) {
        return t && t.hasAttributeNS(e, s) ? t.getAttributeNS(e, s) : null
    }

    function Da(t) {
        return new Error(`Could not parse ttml timestamp ${t}`)
    }

    function ka(t, e) {
        if (!t) return null;
        let s = ta(t);
        return null === s && (pa.test(t) ? s = Ia(t, e) : ya.test(t) && (s = Ca(t, e))), s
    }

    function Ia(t, e) {
        const s = pa.exec(t),
            i = (0 | s[4]) + (0 | s[5]) / e.subFrameRate;
        return 3600 * (0 | s[1]) + 60 * (0 | s[2]) + (0 | s[3]) + i / e.frameRate
    }

    function Ca(t, e) {
        const s = ya.exec(t),
            i = Number(s[1]);
        switch (s[2]) {
            case 'h':
                return 3600 * i;
            case 'm':
                return 60 * i;
            case 'ms':
                return 1e3 * i;
            case 'f':
                return i / e.frameRate;
            case 't':
                return i / e.tickRate
        }
        return i
    }
    class wa {
        constructor(t) {
            this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
                ccOffset: 0,
                presentationOffset: 0,
                0: {
                    start: 0,
                    prevCC: -1,
                    new: !0
                }
            }, this.captionsProperties = void 0, this.hls = t, this.config = t.config, this.Cues = t.config.cueHandler, this.captionsProperties = {
                textTrack1: {
                    label: this.config.captionsTextTrack1Label,
                    languageCode: this.config.captionsTextTrack1LanguageCode
                },
                textTrack2: {
                    label: this.config.captionsTextTrack2Label,
                    languageCode: this.config.captionsTextTrack2LanguageCode
                },
                textTrack3: {
                    label: this.config.captionsTextTrack3Label,
                    languageCode: this.config.captionsTextTrack3LanguageCode
                },
                textTrack4: {
                    label: this.config.captionsTextTrack4Label,
                    languageCode: this.config.captionsTextTrack4LanguageCode
                }
            }, t.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(y.MANIFEST_LOADING, this.onManifestLoading, this), t.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(y.FRAG_LOADING, this.onFragLoading, this), t.on(y.FRAG_LOADED, this.onFragLoaded, this), t.on(y.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.on(y.FRAG_DECRYPTED, this.onFragDecrypted, this), t.on(y.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(y.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this)
        }
        destroy() {
            const {
                hls: t
            } = this;
            t.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(y.MANIFEST_LOADING, this.onManifestLoading, this), t.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(y.FRAG_LOADING, this.onFragLoading, this), t.off(y.FRAG_LOADED, this.onFragLoaded, this), t.off(y.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.off(y.FRAG_DECRYPTED, this.onFragDecrypted, this), t.off(y.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(y.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = null, this.cea608Parser1 = this.cea608Parser2 = void 0
        }
        initCea608Parsers() {
            if (this.config.enableCEA708Captions && (!this.cea608Parser1 || !this.cea608Parser2)) {
                const t = new Qn(this, 'textTrack1'),
                    e = new Qn(this, 'textTrack2'),
                    s = new Qn(this, 'textTrack3'),
                    i = new Qn(this, 'textTrack4');
                this.cea608Parser1 = new qn(1, t, e), this.cea608Parser2 = new qn(3, s, i)
            }
        }
        addCues(t, e, s, i, r) {
            let n = !1;
            for (let t = r.length; t--;) {
                const i = r[t],
                    d = (a = i[0], o = i[1], l = e, h = s, Math.min(o, h) - Math.max(a, l));
                if (d >= 0 && (i[0] = Math.min(i[0], e), i[1] = Math.max(i[1], s), n = !0, d / (s - e) > .5)) return
            }
            var a, o, l, h;
            if (n || r.push([e, s]), this.config.renderTextTracksNatively) {
                const r = this.captionsTracks[t];
                this.Cues.newCue(r, e, s, i)
            } else {
                const r = this.Cues.newCue(null, e, s, i);
                this.hls.trigger(y.CUES_PARSED, {
                    type: 'captions',
                    cues: r,
                    track: t
                })
            }
        }
        onInitPtsFound(t, {
            frag: e,
            id: s,
            initPTS: i,
            timescale: r
        }) {
            const {
                unparsedVttFrags: n
            } = this;
            'main' === s && (this.initPTS[e.cc] = {
                baseTime: i,
                timescale: r
            }), n.length && (this.unparsedVttFrags = [], n.forEach((t => {
                this.onFragLoaded(y.FRAG_LOADED, t)
            })))
        }
        getExistingTrack(t, e) {
            const {
                media: s
            } = this;
            if (s)
                for (let i = 0; i < s.textTracks.length; i++) {
                    const r = s.textTracks[i];
                    if (xa(r, {
                            name: t,
                            lang: e,
                            attrs: {}
                        })) return r
                }
            return null
        }
        createCaptionsTrack(t) {
            this.config.renderTextTracksNatively ? this.createNativeTrack(t) : this.createNonNativeTrack(t)
        }
        createNativeTrack(t) {
            if (this.captionsTracks[t]) return;
            const {
                captionsProperties: e,
                captionsTracks: s,
                media: i
            } = this, {
                label: r,
                languageCode: n
            } = e[t], a = this.getExistingTrack(r, n);
            if (a) s[t] = a, Xe(s[t]), je(s[t], i);
            else {
                const e = this.createTextTrack('captions', r, n);
                e && (e[t] = !0, s[t] = e)
            }
        }
        createNonNativeTrack(t) {
            if (this.nonNativeCaptionsTracks[t]) return;
            const e = this.captionsProperties[t];
            if (!e) return;
            const s = {
                _id: t,
                label: e.label,
                kind: 'captions',
                default: !!e.media && !!e.media.default,
                closedCaptions: e.media
            };
            this.nonNativeCaptionsTracks[t] = s, this.hls.trigger(y.NON_NATIVE_TEXT_TRACKS_FOUND, {
                tracks: [s]
            })
        }
        createTextTrack(t, e, s) {
            const i = this.media;
            if (i) return i.addTextTrack(t, e, s)
        }
        onMediaAttaching(t, e) {
            this.media = e.media, this._cleanTracks()
        }
        onMediaDetaching() {
            const {
                captionsTracks: t
            } = this;
            Object.keys(t).forEach((e => {
                Xe(t[e]), delete t[e]
            })), this.nonNativeCaptionsTracks = {}
        }
        onManifestLoading() {
            this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
                ccOffset: 0,
                presentationOffset: 0,
                0: {
                    start: 0,
                    prevCC: -1,
                    new: !0
                }
            }, this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset())
        }
        _cleanTracks() {
            const {
                media: t
            } = this;
            if (!t) return;
            const e = t.textTracks;
            if (e)
                for (let t = 0; t < e.length; t++) Xe(e[t])
        }
        onSubtitleTracksUpdated(t, e) {
            const s = e.subtitleTracks || [],
                i = s.some((t => t.textCodec === ma));
            if (this.config.enableWebVTT || i && this.config.enableIMSC1) {
                if (En(this.tracks, s)) return void(this.tracks = s);
                if (this.textTracks = [], this.tracks = s, this.config.renderTextTracksNatively) {
                    const t = this.media,
                        e = t ? Ze(t.textTracks) : null;
                    if (this.tracks.forEach(((t, s) => {
                            let i;
                            if (e) {
                                let s = null;
                                for (let i = 0; i < e.length; i++)
                                    if (e[i] && xa(e[i], t)) {
                                        s = e[i], e[i] = null;
                                        break
                                    }
                                s && (i = s)
                            }
                            if (i) Xe(i);
                            else {
                                const e = _a(t);
                                i = this.createTextTrack(e, t.name, t.lang), i && (i.mode = 'disabled')
                            }
                            i && this.textTracks.push(i)
                        })), null != e && e.length) {
                        const t = e.filter((t => null !== t)).map((t => t.label));
                        t.length && D.warn(`Media element contains unused subtitle tracks: ${t.join(', ')}. Replace media element for each source to clear TextTracks and captions menu.`)
                    }
                } else if (this.tracks.length) {
                    const t = this.tracks.map((t => ({
                        label: t.name,
                        kind: t.type.toLowerCase(),
                        default: t.default,
                        subtitleTrack: t
                    })));
                    this.hls.trigger(y.NON_NATIVE_TEXT_TRACKS_FOUND, {
                        tracks: t
                    })
                }
            }
        }
        onManifestLoaded(t, e) {
            this.config.enableCEA708Captions && e.captions && e.captions.forEach((t => {
                const e = /(?:CC|SERVICE)([1-4])/.exec(t.instreamId);
                if (!e) return;
                const s = `textTrack${e[1]}`,
                    i = this.captionsProperties[s];
                i && (i.label = t.name, t.lang && (i.languageCode = t.lang), i.media = t)
            }))
        }
        closedCaptionsForLevel(t) {
            const e = this.hls.levels[t.level];
            return null == e ? void 0 : e.attrs['CLOSED-CAPTIONS']
        }
        onFragLoading(t, e) {
            this.initCea608Parsers();
            const {
                cea608Parser1: s,
                cea608Parser2: i,
                lastCc: r,
                lastSn: n,
                lastPartIndex: a
            } = this;
            if (this.enabled && s && i && e.frag.type === He.MAIN) {
                var o, l;
                const {
                    cc: t,
                    sn: h
                } = e.frag, d = null != (o = null == e || null == (l = e.part) ? void 0 : l.index) ? o : -1;
                h === n + 1 || h === n && d === a + 1 || t === r || (s.reset(), i.reset()), this.lastCc = t, this.lastSn = h, this.lastPartIndex = d
            }
        }
        onFragLoaded(t, e) {
            const {
                frag: s,
                payload: i
            } = e;
            if (s.type === He.SUBTITLE)
                if (i.byteLength) {
                    const t = s.decryptdata,
                        r = 'stats' in e;
                    if (null == t || !t.encrypted || r) {
                        const t = this.tracks[s.level],
                            r = this.vttCCs;
                        r[s.cc] || (r[s.cc] = {
                            start: s.start,
                            prevCC: this.prevCC,
                            new: !0
                        }, this.prevCC = s.cc), t && t.textCodec === ma ? this._parseIMSC1(s, i) : this._parseVTTs(e)
                    }
                } else this.hls.trigger(y.SUBTITLE_FRAG_PROCESSED, {
                    success: !1,
                    frag: s,
                    error: new Error('Empty subtitle payload')
                })
        }
        _parseIMSC1(t, e) {
            const s = this.hls;
            Ea(e, this.initPTS[t.cc], (e => {
                this._appendCues(e, t.level), s.trigger(y.SUBTITLE_FRAG_PROCESSED, {
                    success: !0,
                    frag: t
                })
            }), (e => {
                D.log(`Failed to parse IMSC1: ${e}`), s.trigger(y.SUBTITLE_FRAG_PROCESSED, {
                    success: !1,
                    frag: t,
                    error: e
                })
            }))
        }
        _parseVTTs(t) {
            var e;
            const {
                frag: s,
                payload: i
            } = t, {
                initPTS: r,
                unparsedVttFrags: n
            } = this, a = r.length - 1;
            if (!r[s.cc] && -1 === a) return void n.push(t);
            const o = this.hls;
            ga(null != (e = s.initSegment) && e.data ? Wt(s.initSegment.data, new Uint8Array(i)) : i, this.initPTS[s.cc], this.vttCCs, s.cc, s.start, (t => {
                this._appendCues(t, s.level), o.trigger(y.SUBTITLE_FRAG_PROCESSED, {
                    success: !0,
                    frag: s
                })
            }), (e => {
                const r = 'Missing initPTS for VTT MPEGTS' === e.message;
                r ? n.push(t) : this._fallbackToIMSC1(s, i), D.log(`Failed to parse VTT cue: ${e}`), r && a > s.cc || o.trigger(y.SUBTITLE_FRAG_PROCESSED, {
                    success: !1,
                    frag: s,
                    error: e
                })
            }))
        }
        _fallbackToIMSC1(t, e) {
            const s = this.tracks[t.level];
            s.textCodec || Ea(e, this.initPTS[t.cc], (() => {
                s.textCodec = ma, this._parseIMSC1(t, e)
            }), (() => {
                s.textCodec = 'wvtt'
            }))
        }
        _appendCues(t, e) {
            const s = this.hls;
            if (this.config.renderTextTracksNatively) {
                const s = this.textTracks[e];
                if (!s || 'disabled' === s.mode) return;
                t.forEach((t => qe(s, t)))
            } else {
                const i = this.tracks[e];
                if (!i) return;
                const r = i.default ? 'default' : 'subtitles' + e;
                s.trigger(y.CUES_PARSED, {
                    type: 'subtitles',
                    cues: t,
                    track: r
                })
            }
        }
        onFragDecrypted(t, e) {
            const {
                frag: s
            } = e;
            s.type === He.SUBTITLE && this.onFragLoaded(y.FRAG_LOADED, e)
        }
        onSubtitleTracksCleared() {
            this.tracks = [], this.captionsTracks = {}
        }
        onFragParsingUserdata(t, e) {
            this.initCea608Parsers();
            const {
                cea608Parser1: s,
                cea608Parser2: i
            } = this;
            if (!this.enabled || !s || !i) return;
            const {
                frag: r,
                samples: n
            } = e;
            if (r.type !== He.MAIN || 'NONE' !== this.closedCaptionsForLevel(r))
                for (let t = 0; t < n.length; t++) {
                    const e = n[t].bytes;
                    if (e) {
                        const r = this.extractCea608Data(e);
                        s.addData(n[t].pts, r[0]), i.addData(n[t].pts, r[1])
                    }
                }
        }
        onBufferFlushing(t, {
            startOffset: e,
            endOffset: s,
            endOffsetSubtitles: i,
            type: r
        }) {
            const {
                media: n
            } = this;
            if (n && !(n.currentTime < s)) {
                if (!r || 'video' === r) {
                    const {
                        captionsTracks: t
                    } = this;
                    Object.keys(t).forEach((i => ze(t[i], e, s)))
                }
                if (this.config.renderTextTracksNatively && 0 === e && void 0 !== i) {
                    const {
                        textTracks: t
                    } = this;
                    Object.keys(t).forEach((s => ze(t[s], e, i)))
                }
            }
        }
        extractCea608Data(t) {
            const e = [
                    [],
                    []
                ],
                s = 31 & t[0];
            let i = 2;
            for (let r = 0; r < s; r++) {
                const s = t[i++],
                    r = 127 & t[i++],
                    n = 127 & t[i++];
                if (0 === r && 0 === n) continue;
                if (!!(4 & s)) {
                    const t = 3 & s;
                    0 !== t && 1 !== t || (e[t].push(r), e[t].push(n))
                }
            }
            return e
        }
    }

    function _a(t) {
        return t.characteristics && /transcribes-spoken-dialog/gi.test(t.characteristics) && /describes-music-and-sound/gi.test(t.characteristics) ? 'captions' : 'subtitles'
    }

    function xa(t, e) {
        return !!t && t.kind === _a(e) && Sn(e, t)
    }
    n.TimelineController = wa;
    class Pa {
        constructor(t) {
            this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = t, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners()
        }
        setStreamController(t) {
            this.streamController = t
        }
        destroy() {
            this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null
        }
        registerListeners() {
            const {
                hls: t
            } = this;
            t.on(y.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(y.MANIFEST_PARSED, this.onManifestParsed, this), t.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(y.BUFFER_CODECS, this.onBufferCodecs, this), t.on(y.MEDIA_DETACHING, this.onMediaDetaching, this)
        }
        unregisterListener() {
            const {
                hls: t
            } = this;
            t.off(y.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(y.MANIFEST_PARSED, this.onManifestParsed, this), t.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(y.BUFFER_CODECS, this.onBufferCodecs, this), t.off(y.MEDIA_DETACHING, this.onMediaDetaching, this)
        }
        onFpsDropLevelCapping(t, e) {
            const s = this.hls.levels[e.droppedLevel];
            this.isLevelAllowed(s) && this.restrictedLevels.push({
                bitrate: s.bitrate,
                height: s.height,
                width: s.width
            })
        }
        onMediaAttaching(t, e) {
            this.media = e.media instanceof HTMLVideoElement ? e.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize()
        }
        onManifestParsed(t, e) {
            const s = this.hls;
            this.restrictedLevels = [], this.firstLevel = e.firstLevel, s.config.capLevelToPlayerSize && e.video && this.startCapping()
        }
        onLevelsUpdated(t, e) {
            this.timer && g(this.autoLevelCapping) && this.detectPlayerSize()
        }
        onBufferCodecs(t, e) {
            this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
        }
        onMediaDetaching() {
            this.stopCapping()
        }
        detectPlayerSize() {
            if (this.media) {
                if (this.mediaHeight <= 0 || this.mediaWidth <= 0) return void(this.clientRect = null);
                const t = this.hls.levels;
                if (t.length) {
                    const e = this.hls,
                        s = this.getMaxLevel(t.length - 1);
                    s !== this.autoLevelCapping && D.log(`Setting autoLevelCapping to ${s}: ${t[s].height}p@${t[s].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`), e.autoLevelCapping = s, e.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping
                }
            }
        }
        getMaxLevel(t) {
            const e = this.hls.levels;
            if (!e.length) return -1;
            const s = e.filter(((e, s) => this.isLevelAllowed(e) && s <= t));
            return this.clientRect = null, Pa.getMaxLevelByMediaSize(s, this.mediaWidth, this.mediaHeight)
        }
        startCapping() {
            this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
        }
        stopCapping() {
            this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0)
        }
        getDimensions() {
            if (this.clientRect) return this.clientRect;
            const t = this.media,
                e = {
                    width: 0,
                    height: 0
                };
            if (t) {
                const s = t.getBoundingClientRect();
                e.width = s.width, e.height = s.height, e.width || e.height || (e.width = s.right - s.left || t.width || 0, e.height = s.bottom - s.top || t.height || 0)
            }
            return this.clientRect = e, e
        }
        get mediaWidth() {
            return this.getDimensions().width * this.contentScaleFactor
        }
        get mediaHeight() {
            return this.getDimensions().height * this.contentScaleFactor
        }
        get contentScaleFactor() {
            let t = 1;
            if (!this.hls.config.ignoreDevicePixelRatio) try {
                t = self.devicePixelRatio
            } catch (t) {}
            return t
        }
        isLevelAllowed(t) {
            return !this.restrictedLevels.some((e => t.bitrate === e.bitrate && t.width === e.width && t.height === e.height))
        }
        static getMaxLevelByMediaSize(t, e, s) {
            if (null == t || !t.length) return -1;
            let i = t.length - 1;
            const r = Math.max(e, s);
            for (let e = 0; e < t.length; e += 1) {
                const s = t[e];
                if ((s.width >= r || s.height >= r) && (n = s, !(a = t[e + 1]) || n.width !== a.width || n.height !== a.height)) {
                    i = e;
                    break
                }
            }
            var n, a;
            return i
        }
    }
    n.CapLevelController = Pa;
    class Ma {
        constructor(t) {
            this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = t, this.registerListeners()
        }
        setStreamController(t) {
            this.streamController = t
        }
        registerListeners() {
            this.hls.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this)
        }
        unregisterListeners() {
            this.hls.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this)
        }
        destroy() {
            this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null
        }
        onMediaAttaching(t, e) {
            const s = this.hls.config;
            if (s.capLevelOnFPSDrop) {
                const t = e.media instanceof self.HTMLVideoElement ? e.media : null;
                this.media = t, t && 'function' == typeof t.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), s.fpsDroppedMonitoringPeriod)
            }
        }
        checkFPS(t, e, s) {
            const i = performance.now();
            if (e) {
                if (this.lastTime) {
                    const t = i - this.lastTime,
                        r = s - this.lastDroppedFrames,
                        n = e - this.lastDecodedFrames,
                        a = 1e3 * r / t,
                        o = this.hls;
                    if (o.trigger(y.FPS_DROP, {
                            currentDropped: r,
                            currentDecoded: n,
                            totalDroppedFrames: s
                        }), a > 0 && r > o.config.fpsDroppedMonitoringThreshold * n) {
                        let t = o.currentLevel;
                        D.warn('drop FPS ratio greater than max allowed value for currentLevel: ' + t), t > 0 && (-1 === o.autoLevelCapping || o.autoLevelCapping >= t) && (t -= 1, o.trigger(y.FPS_DROP_LEVEL_CAPPING, {
                            level: t,
                            droppedLevel: o.currentLevel
                        }), o.autoLevelCapping = t, this.streamController.nextLevelSwitch())
                    }
                }
                this.lastTime = i, this.lastDroppedFrames = s, this.lastDecodedFrames = e
            }
        }
        checkFPSInterval() {
            const t = this.media;
            if (t)
                if (this.isVideoPlaybackQualityAvailable) {
                    const e = t.getVideoPlaybackQuality();
                    this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
                } else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
        }
    }
    n.FPSController = Ma;
    const Fa = '[eme]';
    class Oa {
        constructor(t) {
            this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = Oa.CDMCleanupPromise ? [Oa.CDMCleanupPromise] : [], this.onMediaEncrypted = this._onMediaEncrypted.bind(this), this.onWaitingForKey = this._onWaitingForKey.bind(this), this.debug = D.debug.bind(D, Fa), this.log = D.log.bind(D, Fa), this.warn = D.warn.bind(D, Fa), this.error = D.error.bind(D, Fa), this.hls = t, this.config = t.config, this.registerListeners()
        }
        destroy() {
            this.unregisterListeners(), this.onMediaDetached();
            const t = this.config;
            t.requestMediaKeySystemAccessFunc = null, t.licenseXhrSetup = t.licenseResponseCallback = void 0, t.drmSystems = t.drmSystemOptions = {}, this.hls = this.onMediaEncrypted = this.onWaitingForKey = this.keyIdToKeySessionPromise = null, this.config = null
        }
        registerListeners() {
            this.hls.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(y.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(y.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(y.MANIFEST_LOADED, this.onManifestLoaded, this)
        }
        unregisterListeners() {
            this.hls.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(y.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(y.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(y.MANIFEST_LOADED, this.onManifestLoaded, this)
        }
        getLicenseServerUrl(t) {
            const {
                drmSystems: e,
                widevineLicenseUrl: s
            } = this.config, i = e[t];
            if (i) return i.licenseUrl;
            if (t === W.WIDEVINE && s) return s;
            throw new Error(`no license server URL configured for key-system "${t}"`)
        }
        getServerCertificateUrl(t) {
            const {
                drmSystems: e
            } = this.config, s = e[t];
            if (s) return s.serverCertificateUrl;
            this.log(`No Server Certificate in config.drmSystems["${t}"]`)
        }
        attemptKeySystemAccess(t) {
            const e = this.hls.levels,
                s = (t, e, s) => !!t && s.indexOf(t) === e,
                i = e.map((t => t.audioCodec)).filter(s),
                r = e.map((t => t.videoCodec)).filter(s);
            return i.length + r.length === 0 && r.push('avc1.42e01e'), new Promise(((e, s) => {
                const n = t => {
                    const a = t.shift();
                    this.getMediaKeysPromise(a, i, r).then((t => e({
                        keySystem: a,
                        mediaKeys: t
                    }))).catch((e => {
                        t.length ? n(t) : s(e instanceof Na ? e : new Na({
                            type: v.KEY_SYSTEM_ERROR,
                            details: E.KEY_SYSTEM_NO_ACCESS,
                            error: e,
                            fatal: !0
                        }, e.message))
                    }))
                };
                n(t)
            }))
        }
        requestMediaKeySystemAccess(t, e) {
            const {
                requestMediaKeySystemAccessFunc: s
            } = this.config;
            if ('function' != typeof s) {
                let t = `Configured requestMediaKeySystemAccess is not a function ${s}`;
                return null === Z && 'http:' === self.location.protocol && (t = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(new Error(t))
            }
            return s(t, e)
        }
        getMediaKeysPromise(t, e, s) {
            const i = et(t, e, s, this.config.drmSystemOptions),
                r = this.keySystemAccessPromises[t];
            let n = null == r ? void 0 : r.keySystemAccess;
            if (!n) {
                this.log(`Requesting encrypted media "${t}" key-system access with config: ${JSON.stringify(i)}`), n = this.requestMediaKeySystemAccess(t, i);
                const e = this.keySystemAccessPromises[t] = {
                    keySystemAccess: n
                };
                return n.catch((e => {
                    this.log(`Failed to obtain access to key-system "${t}": ${e}`)
                })), n.then((s => {
                    this.log(`Access for key-system "${s.keySystem}" obtained`);
                    const i = this.fetchServerCertificate(t);
                    return this.log(`Create media-keys for "${t}"`), e.mediaKeys = s.createMediaKeys().then((e => (this.log(`Media-keys created for "${t}"`), i.then((s => s ? this.setMediaKeysServerCertificate(e, t, s) : e))))), e.mediaKeys.catch((e => {
                        this.error(`Failed to create media-keys for "${t}"}: ${e}`)
                    })), e.mediaKeys
                }))
            }
            return n.then((() => r.mediaKeys))
        }
        createMediaKeySessionContext({
            decryptdata: t,
            keySystem: e,
            mediaKeys: s
        }) {
            this.log(`Creating key-system session "${e}" keyId: ${St(t.keyId||[])}`);
            const i = s.createSession(),
                r = {
                    decryptdata: t,
                    keySystem: e,
                    mediaKeys: s,
                    mediaKeysSession: i,
                    keyStatus: 'status-pending'
                };
            return this.mediaKeySessions.push(r), r
        }
        renewKeySession(t) {
            const e = t.decryptdata;
            if (e.pssh) {
                const s = this.createMediaKeySessionContext(t),
                    i = this.getKeyIdString(e),
                    r = 'cenc';
                this.keyIdToKeySessionPromise[i] = this.generateRequestWithPreferredKeySession(s, r, e.pssh, 'expired')
            } else this.warn("Could not renew expired session. Missing pssh initData.");
            this.removeSession(t)
        }
        getKeyIdString(t) {
            if (!t) throw new Error('Could not read keyId of undefined decryptdata');
            if (null === t.keyId) throw new Error('keyId is null');
            return St(t.keyId)
        }
        updateKeySession(t, e) {
            var s;
            const i = t.mediaKeysSession;
            return this.log(`Updating key-session "${i.sessionId}" for keyID ${St((null==(s=t.decryptdata)?void 0:s.keyId)||[])}\n      } (data length: ${e?e.byteLength:e})`), i.update(e)
        }
        selectKeySystemFormat(t) {
            const e = Object.keys(t.levelkeys || {});
            return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${t.sn} ${t.type}: ${t.level}) key formats ${e.join(', ')}`), this.keyFormatPromise = this.getKeyFormatPromise(e)), this.keyFormatPromise
        }
        getKeyFormatPromise(t) {
            return new Promise(((e, s) => {
                const i = J(this.config),
                    r = t.map(q).filter((t => !!t && -1 !== i.indexOf(t)));
                return this.getKeySystemSelectionPromise(r).then((({
                    keySystem: t
                }) => {
                    const i = Q(t);
                    i ? e(i) : s(new Error(`Unable to find format for key-system "${t}"`))
                })).catch(s)
            }))
        }
        loadKey(t) {
            const e = t.keyInfo.decryptdata,
                s = this.getKeyIdString(e),
                i = `(keyId: ${s} format: "${e.keyFormat}" method: ${e.method} uri: ${e.uri})`;
            this.log(`Starting session for key ${i}`);
            let r = this.keyIdToKeySessionPromise[s];
            return r || (r = this.keyIdToKeySessionPromise[s] = this.getKeySystemForKeyPromise(e).then((({
                keySystem: s,
                mediaKeys: r
            }) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${t.frag.sn} ${t.frag.type}: ${t.frag.level} using key ${i}`), this.attemptSetMediaKeys(s, r).then((() => {
                this.throwIfDestroyed();
                const t = this.createMediaKeySessionContext({
                    keySystem: s,
                    mediaKeys: r,
                    decryptdata: e
                });
                return this.generateRequestWithPreferredKeySession(t, 'cenc', e.pssh, 'playlist-key')
            }))))), r.catch((t => this.handleError(t)))), r
        }
        throwIfDestroyed(t = "Invalid state") {
            if (!this.hls) throw new Error('invalid state')
        }
        handleError(t) {
            this.hls && (this.error(t.message), t instanceof Na ? this.hls.trigger(y.ERROR, t.data) : this.hls.trigger(y.ERROR, {
                type: v.KEY_SYSTEM_ERROR,
                details: E.KEY_SYSTEM_NO_KEYS,
                error: t,
                fatal: !0
            }))
        }
        getKeySystemForKeyPromise(t) {
            const e = this.getKeyIdString(t),
                s = this.keyIdToKeySessionPromise[e];
            if (!s) {
                const e = q(t.keyFormat),
                    s = e ? [e] : J(this.config);
                return this.attemptKeySystemAccess(s)
            }
            return s
        }
        getKeySystemSelectionPromise(t) {
            if (t.length || (t = J(this.config)), 0 === t.length) throw new Na({
                type: v.KEY_SYSTEM_ERROR,
                details: E.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
                fatal: !0
            }, `Missing key-system license configuration options ${JSON.stringify({drmSystems:this.config.drmSystems})}`);
            return this.attemptKeySystemAccess(t)
        }
        _onMediaEncrypted(t) {
            const {
                initDataType: e,
                initData: s
            } = t;
            if (this.debug(`"${t.type}" event: init data type: "${e}"`), null === s) return;
            let i, r;
            if ('sinf' === e && this.config.drmSystems[W.FAIRPLAY]) {
                const t = bt(new Uint8Array(s));
                try {
                    const e = $(JSON.parse(t).sinf),
                        s = $t(new Uint8Array(e));
                    if (!s) return;
                    i = s.subarray(8, 24), r = W.FAIRPLAY
                } catch (t) {
                    return void this.warn('Failed to parse sinf "encrypted" event message initData')
                }
            } else {
                const t = ee(s);
                if (null === t) return;
                0 === t.version && t.systemId === X && t.data && (i = t.data.subarray(8, 24)), r = z(t.systemId)
            }
            if (!r || !i) return;
            const n = St(i),
                {
                    keyIdToKeySessionPromise: a,
                    mediaKeySessions: o
                } = this;
            let l = a[n];
            for (let t = 0; t < o.length; t++) {
                const r = o[t],
                    h = r.decryptdata;
                if (h.pssh || !h.keyId) continue;
                const d = St(h.keyId);
                if (n === d || -1 !== h.uri.replace(/-/g, '').indexOf(n)) {
                    l = a[d], delete a[d], h.pssh = new Uint8Array(s), h.keyId = i, l = a[n] = l.then((() => this.generateRequestWithPreferredKeySession(r, e, s, 'encrypted-event-key-match')));
                    break
                }
            }
            l || (l = a[n] = this.getKeySystemSelectionPromise([r]).then((({
                keySystem: t,
                mediaKeys: r
            }) => {
                var a;
                this.throwIfDestroyed();
                const o = new ie('ISO-23001-7', n, null != (a = Q(t)) ? a : '');
                return o.pssh = new Uint8Array(s), o.keyId = i, this.attemptSetMediaKeys(t, r).then((() => {
                    this.throwIfDestroyed();
                    const i = this.createMediaKeySessionContext({
                        decryptdata: o,
                        keySystem: t,
                        mediaKeys: r
                    });
                    return this.generateRequestWithPreferredKeySession(i, e, s, 'encrypted-event-no-match')
                }))
            }))), l.catch((t => this.handleError(t)))
        }
        _onWaitingForKey(t) {
            this.log(`"${t.type}" event`)
        }
        attemptSetMediaKeys(t, e) {
            const s = this.setMediaKeysQueue.slice();
            this.log(`Setting media-keys for "${t}"`);
            const i = Promise.all(s).then((() => {
                if (!this.media) throw new Error('Attempted to set mediaKeys without media element attached');
                return this.media.setMediaKeys(e)
            }));
            return this.setMediaKeysQueue.push(i), i.then((() => {
                this.log(`Media-keys set for "${t}"`), s.push(i), this.setMediaKeysQueue = this.setMediaKeysQueue.filter((t => -1 === s.indexOf(t)))
            }))
        }
        generateRequestWithPreferredKeySession(t, e, s, i) {
            var r, n;
            const a = null == (r = this.config.drmSystems) || null == (n = r[t.keySystem]) ? void 0 : n.generateRequest;
            if (a) try {
                const i = a.call(this.hls, e, s, t);
                if (!i) throw new Error('Invalid response from configured generateRequest filter');
                e = i.initDataType, s = t.decryptdata.pssh = i.initData ? new Uint8Array(i.initData) : null
            } catch (t) {
                var o;
                if (this.warn(t.message), null != (o = this.hls) && o.config.debug) throw t
            }
            if (null === s) return this.log(`Skipping key-session request for "${i}" (no initData)`), Promise.resolve(t);
            const l = this.getKeyIdString(t.decryptdata);
            this.log(`Generating key-session request for "${i}": ${l} (init data type: ${e} length: ${s?s.byteLength:null})`);
            const h = new yn,
                d = t._onmessage = e => {
                    const s = t.mediaKeysSession;
                    if (!s) return void h.emit('error', new Error('invalid state'));
                    const {
                        messageType: i,
                        message: r
                    } = e;
                    this.log(`"${i}" message event for session "${s.sessionId}" message size: ${r.byteLength}`), 'license-request' === i || 'license-renewal' === i ? this.renewLicense(t, r).catch((t => {
                        this.handleError(t), h.emit('error', t)
                    })) : 'license-release' === i ? t.keySystem === W.FAIRPLAY && (this.updateKeySession(t, V('acknowledged')), this.removeSession(t)) : this.warn(`unhandled media key message type "${i}"`)
                },
                c = t._onkeystatuseschange = e => {
                    if (!t.mediaKeysSession) return void h.emit('error', new Error('invalid state'));
                    this.onKeyStatusChange(t);
                    const s = t.keyStatus;
                    h.emit('keyStatus', s), 'expired' === s && (this.warn(`${t.keySystem} expired for key ${l}`), this.renewKeySession(t))
                };
            t.mediaKeysSession.addEventListener('message', d), t.mediaKeysSession.addEventListener('keystatuseschange', c);
            const u = new Promise(((t, e) => {
                h.on('error', e), h.on('keyStatus', (s => {
                    s.startsWith('usable') ? t() : 'output-restricted' === s ? e(new Na({
                        type: v.KEY_SYSTEM_ERROR,
                        details: E.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
                        fatal: !1
                    }, 'HDCP level output restricted')) : 'internal-error' === s ? e(new Na({
                        type: v.KEY_SYSTEM_ERROR,
                        details: E.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
                        fatal: !0
                    }, `key status changed to "${s}"`)) : 'expired' === s ? e(new Error('key expired while generating request')) : this.warn(`unhandled key status change "${s}"`)
                }))
            }));
            return t.mediaKeysSession.generateRequest(e, s).then((() => {
                var e;
                this.log(`Request generated for key-session "${null==(e=t.mediaKeysSession)?void 0:e.sessionId}" keyId: ${l}`)
            })).catch((t => {
                throw new Na({
                    type: v.KEY_SYSTEM_ERROR,
                    details: E.KEY_SYSTEM_NO_SESSION,
                    error: t,
                    fatal: !1
                }, `Error generating key-session request: ${t}`)
            })).then((() => u)).catch((e => {
                throw h.removeAllListeners(), this.removeSession(t), e
            })).then((() => (h.removeAllListeners(), t)))
        }
        onKeyStatusChange(t) {
            t.mediaKeysSession.keyStatuses.forEach(((e, s) => {
                this.log(`key status change "${e}" for keyStatuses keyId: ${St('buffer'in s?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):new Uint8Array(s))} session keyId: ${St(new Uint8Array(t.decryptdata.keyId||[]))} uri: ${t.decryptdata.uri}`), t.keyStatus = e
            }))
        }
        fetchServerCertificate(t) {
            const e = this.config,
                s = new(0, e.loader)(e),
                i = this.getServerCertificateUrl(t);
            return i ? (this.log(`Fetching server certificate for "${t}"`), new Promise(((r, n) => {
                const a = {
                        responseType: 'arraybuffer',
                        url: i
                    },
                    o = e.certLoadPolicy.default,
                    l = {
                        loadPolicy: o,
                        timeout: o.maxLoadTimeMs,
                        maxRetry: 0,
                        retryDelay: 0,
                        maxRetryDelay: 0
                    },
                    h = {
                        onSuccess: (t, e, s, i) => {
                            r(t.data)
                        },
                        onError: (e, s, r, o) => {
                            n(new Na({
                                type: v.KEY_SYSTEM_ERROR,
                                details: E.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                                fatal: !0,
                                networkDetails: r,
                                response: d({
                                    url: a.url,
                                    data: void 0
                                }, e)
                            }, `"${t}" certificate request failed (${i}). Status: ${e.code} (${e.text})`))
                        },
                        onTimeout: (e, s, r) => {
                            n(new Na({
                                type: v.KEY_SYSTEM_ERROR,
                                details: E.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                                fatal: !0,
                                networkDetails: r,
                                response: {
                                    url: a.url,
                                    data: void 0
                                }
                            }, `"${t}" certificate request timed out (${i})`))
                        },
                        onAbort: (t, e, s) => {
                            n(new Error('aborted'))
                        }
                    };
                s.load(a, l, h)
            }))) : Promise.resolve()
        }
        setMediaKeysServerCertificate(t, e, s) {
            return new Promise(((i, r) => {
                t.setServerCertificate(s).then((r => {
                    this.log(`setServerCertificate ${r?'success':'not supported by CDM'} (${null==s?void 0:s.byteLength}) on "${e}"`), i(t)
                })).catch((t => {
                    r(new Na({
                        type: v.KEY_SYSTEM_ERROR,
                        details: E.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
                        error: t,
                        fatal: !0
                    }, t.message))
                }))
            }))
        }
        renewLicense(t, e) {
            return this.requestLicense(t, new Uint8Array(e)).then((e => this.updateKeySession(t, new Uint8Array(e)).catch((t => {
                throw new Na({
                    type: v.KEY_SYSTEM_ERROR,
                    details: E.KEY_SYSTEM_SESSION_UPDATE_FAILED,
                    error: t,
                    fatal: !0
                }, t.message)
            }))))
        }
        unpackPlayReadyKeyMessage(t, e) {
            const s = String.fromCharCode.apply(null, new Uint16Array(e.buffer));
            if (!s.includes('PlayReadyKeyMessage')) return t.setRequestHeader('Content-Type', 'text/xml; charset=utf-8'), e;
            const i = (new DOMParser).parseFromString(s, 'application/xml'),
                r = i.querySelectorAll('HttpHeader');
            if (r.length > 0) {
                let e;
                for (let s = 0, i = r.length; s < i; s++) {
                    var n, a;
                    e = r[s];
                    const i = null == (n = e.querySelector('name')) ? void 0 : n.textContent,
                        o = null == (a = e.querySelector('value')) ? void 0 : a.textContent;
                    i && o && t.setRequestHeader(i, o)
                }
            }
            const o = i.querySelector('Challenge'),
                l = null == o ? void 0 : o.textContent;
            if (!l) throw new Error("Cannot find <Challenge> in key message");
            return V(atob(l))
        }
        setupLicenseXHR(t, e, s, i) {
            const r = this.config.licenseXhrSetup;
            return r ? Promise.resolve().then((() => {
                if (!s.decryptdata) throw new Error('Key removed');
                return r.call(this.hls, t, e, s, i)
            })).catch((n => {
                if (!s.decryptdata) throw n;
                return t.open('POST', e, !0), r.call(this.hls, t, e, s, i)
            })).then((s => {
                t.readyState || t.open('POST', e, !0);
                return {
                    xhr: t,
                    licenseChallenge: s || i
                }
            })) : (t.open('POST', e, !0), Promise.resolve({
                xhr: t,
                licenseChallenge: i
            }))
        }
        requestLicense(t, e) {
            const s = this.config.keyLoadPolicy.default;
            return new Promise(((i, r) => {
                const n = this.getLicenseServerUrl(t.keySystem);
                this.log(`Sending license request to URL: ${n}`);
                const a = new XMLHttpRequest;
                a.responseType = 'arraybuffer', a.onreadystatechange = () => {
                    if (!this.hls || !t.mediaKeysSession) return r(new Error('invalid state'));
                    if (4 === a.readyState)
                        if (200 === a.status) {
                            this._requestLicenseFailureCount = 0;
                            let e = a.response;
                            this.log(`License received ${e instanceof ArrayBuffer?e.byteLength:e}`);
                            const s = this.config.licenseResponseCallback;
                            if (s) try {
                                e = s.call(this.hls, a, n, t)
                            } catch (t) {
                                this.error(t)
                            }
                            i(e)
                        } else {
                            const o = s.errorRetry,
                                l = o ? o.maxNumRetry : 0;
                            if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > l || a.status >= 400 && a.status < 500) r(new Na({
                                type: v.KEY_SYSTEM_ERROR,
                                details: E.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                fatal: !0,
                                networkDetails: a,
                                response: {
                                    url: n,
                                    data: void 0,
                                    code: a.status,
                                    text: a.statusText
                                }
                            }, `License Request XHR failed (${n}). Status: ${a.status} (${a.statusText})`));
                            else {
                                const s = l - this._requestLicenseFailureCount + 1;
                                this.warn(`Retrying license request, ${s} attempts left`), this.requestLicense(t, e).then(i, r)
                            }
                        }
                }, t.licenseXhr && t.licenseXhr.readyState !== XMLHttpRequest.DONE && t.licenseXhr.abort(), t.licenseXhr = a, this.setupLicenseXHR(a, n, t, e).then((({
                    xhr: e,
                    licenseChallenge: s
                }) => {
                    t.keySystem == W.PLAYREADY && (s = this.unpackPlayReadyKeyMessage(e, s)), e.send(s)
                }))
            }))
        }
        onMediaAttached(t, e) {
            if (!this.config.emeEnabled) return;
            const s = e.media;
            this.media = s, s.addEventListener('encrypted', this.onMediaEncrypted), s.addEventListener('waitingforkey', this.onWaitingForKey)
        }
        onMediaDetached() {
            const t = this.media,
                e = this.mediaKeySessions;
            t && (t.removeEventListener('encrypted', this.onMediaEncrypted), t.removeEventListener('waitingforkey', this.onWaitingForKey), this.media = null), this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, ie.clearKeyUriToKeyIdMap();
            const s = e.length;
            Oa.CDMCleanupPromise = Promise.all(e.map((t => this.removeSession(t))).concat(null == t ? void 0 : t.setMediaKeys(null).catch((t => {
                this.log(`Could not clear media keys: ${t}`)
            })))).then((() => {
                s && (this.log('finished closing key sessions and clearing media keys'), e.length = 0)
            })).catch((t => {
                this.log(`Could not close sessions and clear media keys: ${t}`)
            }))
        }
        onManifestLoading() {
            this.keyFormatPromise = null
        }
        onManifestLoaded(t, {
            sessionKeys: e
        }) {
            if (e && this.config.emeEnabled && !this.keyFormatPromise) {
                const t = e.reduce(((t, e) => (-1 === t.indexOf(e.keyFormat) && t.push(e.keyFormat), t)), []);
                this.log(`Selecting key-system from session-keys ${t.join(', ')}`), this.keyFormatPromise = this.getKeyFormatPromise(t)
            }
        }
        removeSession(t) {
            const {
                mediaKeysSession: e,
                licenseXhr: s
            } = t;
            if (e) {
                this.log(`Remove licenses and keys and close session ${e.sessionId}`), t._onmessage && (e.removeEventListener('message', t._onmessage), t._onmessage = void 0), t._onkeystatuseschange && (e.removeEventListener('keystatuseschange', t._onkeystatuseschange), t._onkeystatuseschange = void 0), s && s.readyState !== XMLHttpRequest.DONE && s.abort(), t.mediaKeysSession = t.decryptdata = t.licenseXhr = void 0;
                const i = this.mediaKeySessions.indexOf(t);
                return i > -1 && this.mediaKeySessions.splice(i, 1), e.remove().catch((t => {
                    this.log(`Could not remove session: ${t}`)
                })).then((() => e.close())).catch((t => {
                    this.log(`Could not close session: ${t}`)
                }))
            }
        }
    }
    n.EMEController = Oa, Oa.CDMCleanupPromise = void 0;
    class Na extends Error {
        constructor(t, e) {
            super(e), this.data = void 0, t.error || (t.error = new Error(e)), this.data = t, t.err = t.error
        }
    }
    var Ua, Ba, $a;
    !(function(t) {
        t.MANIFEST = "m", t.AUDIO = "a", t.VIDEO = "v", t.MUXED = "av", t.INIT = "i", t.CAPTION = "c", t.TIMED_TEXT = "tt", t.KEY = "k", t.OTHER = "o"
    })(Ua || (Ua = {})), (function(t) {
        t.DASH = "d", t.HLS = "h", t.SMOOTH = "s", t.OTHER = "o"
    })(Ba || (Ba = {})), (function(t) {
        t.OBJECT = "CMCD-Object", t.REQUEST = "CMCD-Request", t.SESSION = "CMCD-Session", t.STATUS = "CMCD-Status"
    })($a || ($a = {}));
    const Ga = {
        [$a.OBJECT]: ['br', 'd', 'ot', 'tb'],
        [$a.REQUEST]: ['bl', 'dl', 'mtp', 'nor', 'nrr', 'su'],
        [$a.SESSION]: ['cid', 'pr', 'sf', 'sid', 'st', 'v'],
        [$a.STATUS]: ['bs', 'rtp']
    };
    class Ka {
        constructor(t, e) {
            this.value = void 0, this.params = void 0, Array.isArray(t) && (t = t.map((t => t instanceof Ka ? t : new Ka(t)))), this.value = t, this.params = e
        }
    }
    class Ha {
        constructor(t) {
            this.description = void 0, this.description = t
        }
    }

    function Va(t, e, s, i) {
        return new Error(`failed to ${t} "${r=e,Array.isArray(r)?JSON.stringify(r):r instanceof Map?'Map{}':r instanceof Set?'Set{}':'object'==typeof r?JSON.stringify(r):String(r)}" as ${s}`, {
            cause: i
        });
        var r
    }
    const Ya = 'Bare Item';

    function Wa(t) {
        return t < -999999999999999 || 999999999999999 < t
    }
    const ja = /[\x00-\x1f\x7f]+/;

    function qa(t, e, s) {
        return Va('serialize', t, e, s)
    }

    function Xa(t) {
        if ('boolean' != typeof t) throw qa(t, "Boolean");
        return t ? '?1' : '?0'
    }

    function za(t) {
        if (!1 === ArrayBuffer.isView(t)) throw qa(t, "Byte Sequence");
        return `:${e=t,btoa(String.fromCharCode(...e))}:`;
        var e
    }

    function Qa(t) {
        if (Wa(t)) throw qa(t, "Integer");
        return t.toString()
    }

    function Ja(t) {
        return `@${Qa(t.getTime()/1e3)}`
    }

    function Za(t, e) {
        if (t < 0) return -Za(-t, e);
        const s = Math.pow(10, e);
        if (Math.abs(t * s % 1 - .5) < Number.EPSILON) {
            const e = Math.floor(t * s);
            return (e % 2 == 0 ? e : e + 1) / s
        }
        return Math.round(t * s) / s
    }

    function to(t) {
        const e = Za(t, 3);
        if (Math.floor(Math.abs(e)).toString().length > 12) throw qa(t, "Decimal");
        const s = e.toString();
        return s.includes('.') ? s : `${s}.0`
    }

    function eo(t) {
        if (ja.test(t)) throw qa(t, "String");
        return `"${t.replace(/\\/g,"\\\\").replace(/"/g,"\\\"")}"`
    }

    function so(t) {
        const e = (s = t).description || s.toString().slice(7, -1);
        var s;
        if (!1 === /^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e)) throw qa(e, "Token");
        return e
    }

    function io(t) {
        switch (typeof t) {
            case 'number':
                if (!g(t)) throw qa(t, Ya);
                return Number.isInteger(t) ? Qa(t) : to(t);
            case 'string':
                return eo(t);
            case 'symbol':
                return so(t);
            case 'boolean':
                return Xa(t);
            case 'object':
                if (t instanceof Date) return Ja(t);
                if (t instanceof Uint8Array) return za(t);
                if (t instanceof Ha) return so(t);
            default:
                throw qa(t, Ya)
        }
    }

    function ro(t) {
        if (!1 === /^[a-z*][a-z0-9\-_.*]*$/.test(t)) throw qa(t, "Key");
        return t
    }

    function no(t) {
        return null == t ? '' : Object.entries(t).map((([t, e]) => !0 === e ? `;${ro(t)}` : `;${ro(t)}=${io(e)}`)).join('')
    }

    function ao(t) {
        return t instanceof Ka ? `${io(t.value)}${no(t.params)}` : io(t)
    }

    function oo(t, e = {
        whitespace: !0
    }) {
        if ('object' != typeof t) throw qa(t, "Dict");
        const s = t instanceof Map ? t.entries() : Object.entries(t),
            i = null != e && e.whitespace ? ' ' : '';
        return Array.from(s).map((([t, e]) => {
            e instanceof Ka == !1 && (e = new Ka(e));
            let s = ro(t);
            var i;
            return !0 === e.value ? s += no(e.params) : (s += '=', Array.isArray(e.value) ? s += `(${(i=e).value.map(ao).join(' ')})${no(i.params)}` : s += ao(e)), s
        })).join(`,${i}`)
    }

    function lo(t, e) {
        return oo(t, e)
    }
    const ho = t => 'ot' === t || 'sf' === t || 'st' === t,
        co = t => 'number' == typeof t ? g(t) : null != t && '' !== t && !1 !== t;

    function uo(t, e) {
        const s = new URL(t),
            i = new URL(e);
        if (s.origin !== i.origin) return t;
        const r = s.pathname.split('/').slice(1),
            n = i.pathname.split('/').slice(1, -1);
        for (; r[0] === n[0];) r.shift(), n.shift();
        for (; n.length;) n.shift(), r.unshift('..');
        return r.join('/')
    }

    function fo() {
        try {
            return crypto.randomUUID()
        } catch (t) {
            try {
                const t = URL.createObjectURL(new Blob),
                    e = t.toString();
                return URL.revokeObjectURL(t), e.slice(e.lastIndexOf('/') + 1)
            } catch (t) {
                let e = (new Date).getTime();
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (t => {
                    const s = (e + 16 * Math.random()) % 16 | 0;
                    return e = Math.floor(e / 16), ('x' == t ? s : 3 & s | 8).toString(16)
                }))
            }
        }
    }
    const go = t => Math.round(t),
        mo = t => 100 * go(t / 100),
        po = {
            br: go,
            d: go,
            bl: mo,
            dl: mo,
            mtp: mo,
            nor: (t, e) => (null != e && e.baseUrl && (t = uo(t, e.baseUrl)), encodeURIComponent(t)),
            rtp: mo,
            tb: go
        };

    function yo(t, e) {
        const s = {};
        if (null == t || 'object' != typeof t) return s;
        const i = Object.keys(t).sort(),
            r = f({}, po, null == e ? void 0 : e.formatters),
            n = null == e ? void 0 : e.filter;
        return i.forEach((i => {
            if (null != n && n(i)) return;
            let a = t[i];
            const o = r[i];
            o && (a = o(a, e)), 'v' === i && 1 === a || 'pr' == i && 1 === a || co(a) && (ho(i) && 'string' == typeof a && (a = new Ha(a)), s[i] = a)
        })), s
    }

    function vo(t, e = {}) {
        return t ? lo(yo(t, e), f({
            whitespace: !1
        }, e)) : ''
    }

    function Eo(t, e = {}) {
        if (!t) return {};
        const s = Object.entries(t),
            i = Object.entries(Ga).concat(Object.entries((null == e ? void 0 : e.customHeaderMap) || {})),
            r = s.reduce(((t, e) => {
                var s;
                const [r, n] = e, a = (null == (s = i.find((t => t[1].includes(r)))) ? void 0 : s[0]) || $a.REQUEST;
                return null != t[a] || (t[a] = {}), t[a][r] = n, t
            }), {});
        return Object.entries(r).reduce(((t, [s, i]) => (t[s] = vo(i, e), t)), {})
    }

    function To(t, e = {}) {
        if (!t) return '';
        const s = vo(t, e);
        return `CMCD=${encodeURIComponent(s)}`
    }
    const So = /CMCD=[^&#]+/;

    function Lo(t, e, s) {
        const i = To(e, s);
        if (!i) return t;
        if (So.test(t)) return t.replace(So, i);
        const r = t.includes('?') ? '&' : '?';
        return `${t}${r}${i}`
    }
    class Ao {
        constructor(t) {
            this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.includeKeys = void 0, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = () => {
                this.initialized && (this.starved = !0), this.buffering = !0
            }, this.onPlaying = () => {
                this.initialized || (this.initialized = !0), this.buffering = !1
            }, this.applyPlaylistData = t => {
                try {
                    this.apply(t, {
                        ot: Ua.MANIFEST,
                        su: !this.initialized
                    })
                } catch (t) {
                    D.warn('Could not generate manifest CMCD data.', t)
                }
            }, this.applyFragmentData = t => {
                try {
                    const e = t.frag,
                        s = this.hls.levels[e.level],
                        i = this.getObjectType(e),
                        r = {
                            d: 1e3 * e.duration,
                            ot: i
                        };
                    i !== Ua.VIDEO && i !== Ua.AUDIO && i != Ua.MUXED || (r.br = s.bitrate / 1e3, r.tb = this.getTopBandwidth(i) / 1e3, r.bl = this.getBufferLength(i)), this.apply(t, r)
                } catch (t) {
                    D.warn('Could not generate segment CMCD data.', t)
                }
            }, this.hls = t;
            const e = this.config = t.config,
                {
                    cmcd: s
                } = e;
            null != s && (e.pLoader = this.createPlaylistLoader(), e.fLoader = this.createFragmentLoader(), this.sid = s.sessionId || fo(), this.cid = s.contentId, this.useHeaders = !0 === s.useHeaders, this.includeKeys = s.includeKeys, this.registerListeners())
        }
        registerListeners() {
            const t = this.hls;
            t.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(y.MEDIA_DETACHED, this.onMediaDetached, this), t.on(y.BUFFER_CREATED, this.onBufferCreated, this)
        }
        unregisterListeners() {
            const t = this.hls;
            t.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(y.MEDIA_DETACHED, this.onMediaDetached, this), t.off(y.BUFFER_CREATED, this.onBufferCreated, this)
        }
        destroy() {
            this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null, this.onWaiting = this.onPlaying = null
        }
        onMediaAttached(t, e) {
            this.media = e.media, this.media.addEventListener('waiting', this.onWaiting), this.media.addEventListener('playing', this.onPlaying)
        }
        onMediaDetached() {
            this.media && (this.media.removeEventListener('waiting', this.onWaiting), this.media.removeEventListener('playing', this.onPlaying), this.media = null)
        }
        onBufferCreated(t, e) {
            var s, i;
            this.audioBuffer = null == (s = e.tracks.audio) ? void 0 : s.buffer, this.videoBuffer = null == (i = e.tracks.video) ? void 0 : i.buffer
        }
        createData() {
            var t;
            return {
                v: 1,
                sf: Ba.HLS,
                sid: this.sid,
                cid: this.cid,
                pr: null == (t = this.media) ? void 0 : t.playbackRate,
                mtp: this.hls.bandwidthEstimate / 1e3
            }
        }
        apply(t, e = {}) {
            f(e, this.createData());
            const s = e.ot === Ua.INIT || e.ot === Ua.VIDEO || e.ot === Ua.MUXED;
            this.starved && s && (e.bs = !0, e.su = !0, this.starved = !1), null == e.su && (e.su = this.buffering);
            const {
                includeKeys: i
            } = this;
            var r;
            i && (e = Object.keys(e).reduce(((t, s) => (i.includes(s) && (t[s] = e[s]), t)), {})), this.useHeaders ? (t.headers || (t.headers = {}), f(t.headers, Eo(e, r))) : t.url = Lo(t.url, e)
        }
        getObjectType(t) {
            const {
                type: e
            } = t;
            return 'subtitle' === e ? Ua.TIMED_TEXT : 'initSegment' === t.sn ? Ua.INIT : 'audio' === e ? Ua.AUDIO : 'main' === e ? this.hls.audioTracks.length ? Ua.VIDEO : Ua.MUXED : void 0
        }
        getTopBandwidth(t) {
            let e, s = 0;
            const i = this.hls;
            if (t === Ua.AUDIO) e = i.audioTracks;
            else {
                const t = i.maxAutoLevel,
                    s = t > -1 ? t + 1 : i.levels.length;
                e = i.levels.slice(0, s)
            }
            for (const t of e) t.bitrate > s && (s = t.bitrate);
            return s > 0 ? s : NaN
        }
        getBufferLength(t) {
            const e = this.hls.media,
                s = t === Ua.AUDIO ? this.audioBuffer : this.videoBuffer;
            if (!s || !e) return NaN;
            return 1e3 * Ei.bufferInfo(s, e.currentTime, this.config.maxBufferHole).len
        }
        createPlaylistLoader() {
            const {
                pLoader: t
            } = this.config, e = this.applyPlaylistData, s = t || this.config.loader;
            return class {
                constructor(t) {
                    this.loader = void 0, this.loader = new s(t)
                }
                get stats() {
                    return this.loader.stats
                }
                get context() {
                    return this.loader.context
                }
                destroy() {
                    this.loader.destroy()
                }
                abort() {
                    this.loader.abort()
                }
                load(t, s, i) {
                    e(t), this.loader.load(t, s, i)
                }
            }
        }
        createFragmentLoader() {
            const {
                fLoader: t
            } = this.config, e = this.applyFragmentData, s = t || this.config.loader;
            return class {
                constructor(t) {
                    this.loader = void 0, this.loader = new s(t)
                }
                get stats() {
                    return this.loader.stats
                }
                get context() {
                    return this.loader.context
                }
                destroy() {
                    this.loader.destroy()
                }
                abort() {
                    this.loader.abort()
                }
                load(t, s, i) {
                    e(t), this.loader.load(t, s, i)
                }
            }
        }
    }
    n.CMCDController = Ao;
    class Ro {
        constructor(t) {
            this.hls = void 0, this.log = void 0, this.loader = null, this.uri = null, this.pathwayId = '.', this.pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = t, this.log = D.log.bind(D, "[content-steering]:"), this.registerListeners()
        }
        registerListeners() {
            const t = this.hls;
            t.on(y.MANIFEST_LOADING, this.onManifestLoading, this), t.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(y.MANIFEST_PARSED, this.onManifestParsed, this), t.on(y.ERROR, this.onError, this)
        }
        unregisterListeners() {
            const t = this.hls;
            t && (t.off(y.MANIFEST_LOADING, this.onManifestLoading, this), t.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(y.MANIFEST_PARSED, this.onManifestParsed, this), t.off(y.ERROR, this.onError, this))
        }
        startLoad() {
            if (this.started = !0, this.clearTimeout(), this.enabled && this.uri) {
                if (this.updated) {
                    const t = 1e3 * this.timeToLoad - (performance.now() - this.updated);
                    if (t > 0) return void this.scheduleRefresh(this.uri, t)
                }
                this.loadSteeringManifest(this.uri)
            }
        }
        stopLoad() {
            this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout()
        }
        clearTimeout() {
            -1 !== this.reloadTimer && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1)
        }
        destroy() {
            this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null
        }
        removeLevel(t) {
            const e = this.levels;
            e && (this.levels = e.filter((e => e !== t)))
        }
        onManifestLoading() {
            this.stopLoad(), this.enabled = !0, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = '.', this.levels = this.audioTracks = this.subtitleTracks = null
        }
        onManifestLoaded(t, e) {
            const {
                contentSteering: s
            } = e;
            null !== s && (this.pathwayId = s.pathwayId, this.uri = s.uri, this.started && this.startLoad())
        }
        onManifestParsed(t, e) {
            this.audioTracks = e.audioTracks, this.subtitleTracks = e.subtitleTracks
        }
        onError(t, e) {
            const {
                errorAction: s
            } = e;
            if ((null == s ? void 0 : s.action) === $s.SendAlternateToPenaltyBox && s.flags === Gs.MoveAllAlternatesMatchingHost) {
                const t = this.levels;
                let i = this.pathwayPriority,
                    r = this.pathwayId;
                if (e.context) {
                    const {
                        groupId: s,
                        pathwayId: i,
                        type: n
                    } = e.context;
                    s && t ? r = this.getPathwayForGroupId(s, n, r) : i && (r = i)
                }
                r in this.penalizedPathways || (this.penalizedPathways[r] = performance.now()), !i && t && (i = t.reduce(((t, e) => (-1 === t.indexOf(e.pathwayId) && t.push(e.pathwayId), t)), [])), i && i.length > 1 && (this.updatePathwayPriority(i), s.resolved = this.pathwayId !== r), s.resolved || D.warn(`Could not resolve ${e.details} ("${e.error.message}") with content-steering for Pathway: ${r} levels: ${t?t.length:t} priorities: ${JSON.stringify(i)} penalized: ${JSON.stringify(this.penalizedPathways)}`)
            }
        }
        filterParsedLevels(t) {
            this.levels = t;
            let e = this.getLevelsForPathway(this.pathwayId);
            if (0 === e.length) {
                const s = t[0].pathwayId;
                this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${s}"`), e = this.getLevelsForPathway(s), this.pathwayId = s
            }
            return e.length !== t.length ? (this.log(`Found ${e.length}/${t.length} levels in Pathway "${this.pathwayId}"`), e) : t
        }
        getLevelsForPathway(t) {
            return null === this.levels ? [] : this.levels.filter((e => t === e.pathwayId))
        }
        updatePathwayPriority(t) {
            let e;
            this.pathwayPriority = t;
            const s = this.penalizedPathways,
                i = performance.now();
            Object.keys(s).forEach((t => {
                i - s[t] > 3e5 && delete s[t]
            }));
            for (let i = 0; i < t.length; i++) {
                const r = t[i];
                if (r in s) continue;
                if (r === this.pathwayId) return;
                const n = this.hls.nextLoadLevel,
                    a = this.hls.levels[n];
                if (e = this.getLevelsForPathway(r), e.length > 0) {
                    this.log(`Setting Pathway to "${r}"`), this.pathwayId = r, ks(e), this.hls.trigger(y.LEVELS_UPDATED, {
                        levels: e
                    });
                    const t = this.hls.levels[n];
                    a && t && this.levels && (t.attrs['STABLE-VARIANT-ID'] !== a.attrs['STABLE-VARIANT-ID'] && t.bitrate !== a.bitrate && this.log(`Unstable Pathways change from bitrate ${a.bitrate} to ${t.bitrate}`), this.hls.nextLoadLevel = n);
                    break
                }
            }
        }
        getPathwayForGroupId(t, e, s) {
            const i = this.getLevelsForPathway(s).concat(this.levels || []);
            for (let s = 0; s < i.length; s++)
                if (e === Ge && i[s].hasAudioGroup(t) || e === Ke && i[s].hasSubtitleGroup(t)) return i[s].pathwayId;
            return s
        }
        clonePathways(t) {
            const e = this.levels;
            if (!e) return;
            const s = {},
                i = {};
            t.forEach((t => {
                const {
                    ID: r,
                    'BASE-ID': n,
                    'URI-REPLACEMENT': a
                } = t;
                if (e.some((t => t.pathwayId === r))) return;
                const o = this.getLevelsForPathway(n).map((t => {
                    const e = new C(t.attrs);
                    e['PATHWAY-ID'] = r;
                    const n = e.AUDIO && `${e.AUDIO}_clone_${r}`,
                        o = e.SUBTITLES && `${e.SUBTITLES}_clone_${r}`;
                    n && (s[e.AUDIO] = n, e.AUDIO = n), o && (i[e.SUBTITLES] = o, e.SUBTITLES = o);
                    const l = Do(t.uri, e['STABLE-VARIANT-ID'], 'PER-VARIANT-URIS', a),
                        h = new fs({
                            attrs: e,
                            audioCodec: t.audioCodec,
                            bitrate: t.bitrate,
                            height: t.height,
                            name: t.name,
                            url: l,
                            videoCodec: t.videoCodec,
                            width: t.width
                        });
                    if (t.audioGroups)
                        for (let e = 1; e < t.audioGroups.length; e++) h.addGroupId('audio', `${t.audioGroups[e]}_clone_${r}`);
                    if (t.subtitleGroups)
                        for (let e = 1; e < t.subtitleGroups.length; e++) h.addGroupId('text', `${t.subtitleGroups[e]}_clone_${r}`);
                    return h
                }));
                e.push(...o), bo(this.audioTracks, s, a, r), bo(this.subtitleTracks, i, a, r)
            }))
        }
        loadSteeringManifest(t) {
            const e = this.hls.config,
                s = e.loader;
            let i;
            this.loader && this.loader.destroy(), this.loader = new s(e);
            try {
                i = new self.URL(t)
            } catch (e) {
                return this.enabled = !1, void this.log(`Failed to parse Steering Manifest URI: ${t}`)
            }
            if ('data:' !== i.protocol) {
                const t = 0 | (this.hls.bandwidthEstimate || e.abrEwmaDefaultEstimate);
                i.searchParams.set('_HLS_pathway', this.pathwayId), i.searchParams.set('_HLS_throughput', '' + t)
            }
            const r = {
                    responseType: 'json',
                    url: i.href
                },
                n = e.steeringManifestLoadPolicy.default,
                a = n.errorRetry || n.timeoutRetry || {},
                o = {
                    loadPolicy: n,
                    timeout: n.maxLoadTimeMs,
                    maxRetry: a.maxNumRetry || 0,
                    retryDelay: a.retryDelayMs || 0,
                    maxRetryDelay: a.maxRetryDelayMs || 0
                },
                l = {
                    onSuccess: (t, e, s, r) => {
                        this.log(`Loaded steering manifest: "${i}"`);
                        const n = t.data;
                        if (1 !== n.VERSION) return void this.log(`Steering VERSION ${n.VERSION} not supported!`);
                        this.updated = performance.now(), this.timeToLoad = n.TTL;
                        const {
                            'RELOAD-URI': a,
                            'PATHWAY-CLONES': o,
                            'PATHWAY-PRIORITY': l
                        } = n;
                        if (a) try {
                            this.uri = new self.URL(a, i).href
                        } catch (t) {
                            return this.enabled = !1, void this.log(`Failed to parse Steering Manifest RELOAD-URI: ${a}`)
                        }
                        this.scheduleRefresh(this.uri || s.url), o && this.clonePathways(o);
                        const h = {
                            steeringManifest: n,
                            url: i.toString()
                        };
                        this.hls.trigger(y.STEERING_MANIFEST_LOADED, h), l && this.updatePathwayPriority(l)
                    },
                    onError: (t, e, s, i) => {
                        if (this.log(`Error loading steering manifest: ${t.code} ${t.text} (${e.url})`), this.stopLoad(), 410 === t.code) return this.enabled = !1, void this.log(`Steering manifest ${e.url} no longer available`);
                        let r = 1e3 * this.timeToLoad;
                        if (429 !== t.code) this.scheduleRefresh(this.uri || e.url, r);
                        else {
                            const t = this.loader;
                            if ('function' == typeof(null == t ? void 0 : t.getResponseHeader)) {
                                const e = t.getResponseHeader('Retry-After');
                                e && (r = 1e3 * parseFloat(e))
                            }
                            this.log(`Steering manifest ${e.url} rate limited`)
                        }
                    },
                    onTimeout: (t, e, s) => {
                        this.log(`Timeout loading steering manifest (${e.url})`), this.scheduleRefresh(this.uri || e.url)
                    }
                };
            this.log(`Requesting steering manifest: ${i}`), this.loader.load(r, o, l)
        }
        scheduleRefresh(t, e = 1e3 * this.timeToLoad) {
            this.clearTimeout(), this.reloadTimer = self.setTimeout((() => {
                var e;
                const s = null == (e = this.hls) ? void 0 : e.media;
                !s || s.ended ? this.scheduleRefresh(t, 1e3 * this.timeToLoad) : this.loadSteeringManifest(t)
            }), e)
        }
    }

    function bo(t, e, s, i) {
        t && Object.keys(e).forEach((r => {
            const n = t.filter((t => t.groupId === r)).map((t => {
                const n = f({}, t);
                return n.details = void 0, n.attrs = new C(n.attrs), n.url = n.attrs.URI = Do(t.url, t.attrs['STABLE-RENDITION-ID'], 'PER-RENDITION-URIS', s), n.groupId = n.attrs['GROUP-ID'] = e[r], n.attrs['PATHWAY-ID'] = i, n
            }));
            t.push(...n)
        }))
    }

    function Do(t, e, s, i) {
        const {
            HOST: r,
            PARAMS: n,
            [s]: a
        } = i;
        let o;
        e && (o = null == a ? void 0 : a[e], o && (t = o));
        const l = new self.URL(t);
        return r && !o && (l.host = r), n && Object.keys(n).sort().forEach((t => {
            t && l.searchParams.set(t, n[t])
        })), l.href
    }
    n.ContentSteeringController = Ro;
    const ko = /^age:\s*[\d.]+\s*$/im;
    class Io {
        constructor(t) {
            this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = t && t.xhrSetup || null, this.stats = new x, this.retryDelay = 0
        }
        destroy() {
            this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null, this.stats = null
        }
        abortInternal() {
            const t = this.loader;
            self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), t && (t.onreadystatechange = null, t.onprogress = null, 4 !== t.readyState && (this.stats.aborted = !0, t.abort()))
        }
        abort() {
            var t;
            this.abortInternal(), null != (t = this.callbacks) && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader)
        }
        load(t, e, s) {
            if (this.stats.loading.start) throw new Error('Loader can only be used once.');
            this.stats.loading.start = self.performance.now(), this.context = t, this.config = e, this.callbacks = s, this.loadInternal()
        }
        loadInternal() {
            const {
                config: t,
                context: e
            } = this;
            if (!t || !e) return;
            const s = this.loader = new self.XMLHttpRequest,
                i = this.stats;
            i.loading.first = 0, i.loaded = 0, i.aborted = !1;
            const r = this.xhrSetup;
            r ? Promise.resolve().then((() => {
                if (!this.stats.aborted) return r(s, e.url)
            })).catch((t => (s.open('GET', e.url, !0), r(s, e.url)))).then((() => {
                this.stats.aborted || this.openAndSendXhr(s, e, t)
            })).catch((t => {
                this.callbacks.onError({
                    code: s.status,
                    text: t.message
                }, e, s, i)
            })) : this.openAndSendXhr(s, e, t)
        }
        openAndSendXhr(t, e, s) {
            t.readyState || t.open('GET', e.url, !0);
            const i = e.headers,
                {
                    maxTimeToFirstByteMs: r,
                    maxLoadTimeMs: n
                } = s.loadPolicy;
            if (i)
                for (const e in i) t.setRequestHeader(e, i[e]);
            e.rangeEnd && t.setRequestHeader('Range', 'bytes=' + e.rangeStart + '-' + (e.rangeEnd - 1)), t.onreadystatechange = this.readystatechange.bind(this), t.onprogress = this.loadprogress.bind(this), t.responseType = e.responseType, self.clearTimeout(this.requestTimeout), s.timeout = r && g(r) ? r : n, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s.timeout), t.send()
        }
        readystatechange() {
            const {
                context: t,
                loader: e,
                stats: s
            } = this;
            if (!t || !e) return;
            const i = e.readyState,
                r = this.config;
            if (!s.aborted && i >= 2 && (0 === s.loading.first && (s.loading.first = Math.max(self.performance.now(), s.loading.start), r.timeout !== r.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), r.timeout = r.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r.loadPolicy.maxLoadTimeMs - (s.loading.first - s.loading.start)))), 4 === i)) {
                self.clearTimeout(this.requestTimeout), e.onreadystatechange = null, e.onprogress = null;
                const i = e.status,
                    n = 'text' !== e.responseType;
                if (i >= 200 && i < 300 && (n && e.response || null !== e.responseText)) {
                    s.loading.end = Math.max(self.performance.now(), s.loading.first);
                    const r = n ? e.response : e.responseText,
                        a = 'arraybuffer' === e.responseType ? r.byteLength : r.length;
                    if (s.loaded = s.total = a, s.bwEstimate = 8e3 * s.total / (s.loading.end - s.loading.first), !this.callbacks) return;
                    const o = this.callbacks.onProgress;
                    if (o && o(s, t, r, e), !this.callbacks) return;
                    const l = {
                        url: e.responseURL,
                        data: r,
                        code: i
                    };
                    this.callbacks.onSuccess(l, s, t, e)
                } else {
                    const n = r.loadPolicy.errorRetry;
                    xs(n, s.retry, !1, {
                        url: t.url,
                        data: void 0,
                        code: i
                    }) ? this.retry(n) : (D.error(`${i} while loading ${t.url}`), this.callbacks.onError({
                        code: i,
                        text: e.statusText
                    }, t, e, s))
                }
            }
        }
        loadtimeout() {
            var t;
            const e = null == (t = this.config) ? void 0 : t.loadPolicy.timeoutRetry;
            if (xs(e, this.stats.retry, !0)) this.retry(e);
            else {
                var s;
                D.warn(`timeout while loading ${null==(s=this.context)?void 0:s.url}`);
                const t = this.callbacks;
                t && (this.abortInternal(), t.onTimeout(this.stats, this.context, this.loader))
            }
        }
        retry(t) {
            const {
                context: e,
                stats: s
            } = this;
            this.retryDelay = ws(t, s.retry), s.retry++, D.warn(`${status?'HTTP Status '+status:'Timeout'} while loading ${null==e?void 0:e.url}, retrying ${s.retry}/${t.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay)
        }
        loadprogress(t) {
            const e = this.stats;
            e.loaded = t.loaded, t.lengthComputable && (e.total = t.total)
        }
        getCacheAge() {
            let t = null;
            if (this.loader && ko.test(this.loader.getAllResponseHeaders())) {
                const e = this.loader.getResponseHeader('age');
                t = e ? parseFloat(e) : null
            }
            return t
        }
        getResponseHeader(t) {
            return this.loader && new RegExp(`^${t}:\\s*[\\d.]+\\s*$`, 'im').test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(t) : null
        }
    }

    function Co() {
        if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
            return new self.ReadableStream({}), !0
        } catch (t) {}
        return !1
    }
    const wo = /(\d+)-(\d+)\/(\d+)/;
    class _o {
        constructor(t) {
            this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = t.fetchSetup || Fo, this.controller = new self.AbortController, this.stats = new x
        }
        destroy() {
            this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null
        }
        abortInternal() {
            this.controller && !this.stats.loading.end && (this.stats.aborted = !0, this.controller.abort())
        }
        abort() {
            var t;
            this.abortInternal(), null != (t = this.callbacks) && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response)
        }
        load(t, e, s) {
            const i = this.stats;
            if (i.loading.start) throw new Error('Loader can only be used once.');
            i.loading.start = self.performance.now();
            const r = xo(t, this.controller.signal),
                n = s.onProgress,
                a = 'arraybuffer' === t.responseType,
                o = a ? 'byteLength' : 'length',
                {
                    maxTimeToFirstByteMs: l,
                    maxLoadTimeMs: h
                } = e.loadPolicy;
            this.context = t, this.config = e, this.callbacks = s, this.request = this.fetchSetup(t, r), self.clearTimeout(this.requestTimeout), e.timeout = l && g(l) ? l : h, this.requestTimeout = self.setTimeout((() => {
                this.abortInternal(), s.onTimeout(i, t, this.response)
            }), e.timeout), self.fetch(this.request).then((r => {
                this.response = this.loader = r;
                const o = Math.max(self.performance.now(), i.loading.start);
                if (self.clearTimeout(this.requestTimeout), e.timeout = h, this.requestTimeout = self.setTimeout((() => {
                        this.abortInternal(), s.onTimeout(i, t, this.response)
                    }), h - (o - i.loading.start)), !r.ok) {
                    const {
                        status: t,
                        statusText: e
                    } = r;
                    throw new Oo(e || 'fetch, bad network response', t, r)
                }
                return i.loading.first = o, i.total = Mo(r.headers) || i.total, n && g(e.highWaterMark) ? this.loadProgressively(r, i, t, e.highWaterMark, n) : a ? r.arrayBuffer() : 'json' === t.responseType ? r.json() : r.text()
            })).then((r => {
                const a = this.response;
                if (!a) throw new Error('loader destroyed');
                self.clearTimeout(this.requestTimeout), i.loading.end = Math.max(self.performance.now(), i.loading.first);
                const l = r[o];
                l && (i.loaded = i.total = l);
                const h = {
                    url: a.url,
                    data: r,
                    code: a.status
                };
                n && !g(e.highWaterMark) && n(i, t, r, a), s.onSuccess(h, i, t, a)
            })).catch((e => {
                if (self.clearTimeout(this.requestTimeout), i.aborted) return;
                const r = e && e.code || 0,
                    n = e ? e.message : null;
                s.onError({
                    code: r,
                    text: n
                }, t, e ? e.details : null, i)
            }))
        }
        getCacheAge() {
            let t = null;
            if (this.response) {
                const e = this.response.headers.get('age');
                t = e ? parseFloat(e) : null
            }
            return t
        }
        getResponseHeader(t) {
            return this.response ? this.response.headers.get(t) : null
        }
        loadProgressively(t, e, s, i = 0, r) {
            const n = new Zi,
                a = t.body.getReader(),
                o = () => a.read().then((a => {
                    if (a.done) return n.dataLength && r(e, s, n.flush(), t), Promise.resolve(new ArrayBuffer(0));
                    const l = a.value,
                        h = l.length;
                    return e.loaded += h, h < i || n.dataLength ? (n.push(l), n.dataLength >= i && r(e, s, n.flush(), t)) : r(e, s, l, t), o()
                })).catch((() => Promise.reject()));
            return o()
        }
    }

    function xo(t, e) {
        const s = {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            signal: e,
            headers: new self.Headers(f({}, t.headers))
        };
        return t.rangeEnd && s.headers.set('Range', 'bytes=' + t.rangeStart + '-' + String(t.rangeEnd - 1)), s
    }

    function Po(t) {
        const e = wo.exec(t);
        if (e) return parseInt(e[2]) - parseInt(e[1]) + 1
    }

    function Mo(t) {
        const e = t.get('Content-Range');
        if (e) {
            const t = Po(e);
            if (g(t)) return t
        }
        const s = t.get('Content-Length');
        if (s) return parseInt(s)
    }

    function Fo(t, e) {
        return new self.Request(t.url, e)
    }
    class Oo extends Error {
        constructor(t, e, s) {
            super(t), this.code = void 0, this.details = void 0, this.code = e, this.details = s
        }
    }
    const No = /\s/,
        Uo = d(d({
            autoStartLoad: !0,
            startPosition: -1,
            defaultAudioCodec: void 0,
            debug: !1,
            capLevelOnFPSDrop: !1,
            capLevelToPlayerSize: !1,
            ignoreDevicePixelRatio: !1,
            preferManagedMediaSource: !0,
            initialLiveManifestSize: 1,
            maxBufferLength: 30,
            backBufferLength: 1 / 0,
            frontBufferFlushThreshold: 1 / 0,
            maxBufferSize: 6e7,
            maxBufferHole: .1,
            highBufferWatchdogPeriod: 2,
            nudgeOffset: .1,
            nudgeMaxRetry: 3,
            maxFragLookUpTolerance: .25,
            liveSyncDurationCount: 3,
            liveMaxLatencyDurationCount: 1 / 0,
            liveSyncDuration: void 0,
            liveMaxLatencyDuration: void 0,
            maxLiveSyncPlaybackRate: 1,
            liveDurationInfinity: !1,
            liveBackBufferLength: null,
            maxMaxBufferLength: 600,
            enableWorker: !0,
            workerPath: null,
            enableSoftwareAES: !0,
            startLevel: void 0,
            startFragPrefetch: !1,
            fpsDroppedMonitoringPeriod: 5e3,
            fpsDroppedMonitoringThreshold: .2,
            appendErrorMaxRetry: 3,
            loader: Io,
            fLoader: void 0,
            pLoader: void 0,
            xhrSetup: void 0,
            licenseXhrSetup: void 0,
            licenseResponseCallback: void 0,
            abrController: hi,
            bufferController: Cn,
            capLevelController: Pa,
            errorController: Ks,
            fpsController: Ma,
            stretchShortVideoTrack: !1,
            maxAudioFramesDrift: 1,
            forceKeyFrameOnDiscontinuity: !0,
            abrEwmaFastLive: 3,
            abrEwmaSlowLive: 9,
            abrEwmaFastVoD: 3,
            abrEwmaSlowVoD: 9,
            abrEwmaDefaultEstimate: 5e5,
            abrEwmaDefaultEstimateMax: 5e6,
            abrBandWidthFactor: .95,
            abrBandWidthUpFactor: .7,
            abrMaxWithRealBitrate: !1,
            maxStarvationDelay: 4,
            maxLoadingDelay: 4,
            minAutoBitrate: 0,
            emeEnabled: !1,
            widevineLicenseUrl: void 0,
            drmSystems: {},
            drmSystemOptions: {},
            requestMediaKeySystemAccessFunc: Z,
            testBandwidth: !0,
            progressive: !1,
            lowLatencyMode: !0,
            cmcd: void 0,
            enableDateRangeMetadataCues: !0,
            enableEmsgMetadataCues: !0,
            enableID3MetadataCues: !0,
            useMediaCapabilities: !0,
            certLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 8e3,
                    maxLoadTimeMs: 2e4,
                    timeoutRetry: null,
                    errorRetry: null
                }
            },
            keyLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 8e3,
                    maxLoadTimeMs: 2e4,
                    timeoutRetry: {
                        maxNumRetry: 1,
                        retryDelayMs: 1e3,
                        maxRetryDelayMs: 2e4,
                        backoff: 'linear'
                    },
                    errorRetry: {
                        maxNumRetry: 8,
                        retryDelayMs: 1e3,
                        maxRetryDelayMs: 2e4,
                        backoff: 'linear'
                    }
                }
            },
            manifestLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 1 / 0,
                    maxLoadTimeMs: 2e4,
                    timeoutRetry: {
                        maxNumRetry: 2,
                        retryDelayMs: 0,
                        maxRetryDelayMs: 0
                    },
                    errorRetry: {
                        maxNumRetry: 1,
                        retryDelayMs: 1e3,
                        maxRetryDelayMs: 8e3
                    }
                }
            },
            playlistLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 1e4,
                    maxLoadTimeMs: 2e4,
                    timeoutRetry: {
                        maxNumRetry: 2,
                        retryDelayMs: 0,
                        maxRetryDelayMs: 0
                    },
                    errorRetry: {
                        maxNumRetry: 2,
                        retryDelayMs: 1e3,
                        maxRetryDelayMs: 8e3
                    }
                }
            },
            fragLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 1e4,
                    maxLoadTimeMs: 12e4,
                    timeoutRetry: {
                        maxNumRetry: 4,
                        retryDelayMs: 0,
                        maxRetryDelayMs: 0
                    },
                    errorRetry: {
                        maxNumRetry: 6,
                        retryDelayMs: 1e3,
                        maxRetryDelayMs: 8e3
                    }
                }
            },
            steeringManifestLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 1e4,
                    maxLoadTimeMs: 2e4,
                    timeoutRetry: {
                        maxNumRetry: 2,
                        retryDelayMs: 0,
                        maxRetryDelayMs: 0
                    },
                    errorRetry: {
                        maxNumRetry: 1,
                        retryDelayMs: 1e3,
                        maxRetryDelayMs: 8e3
                    }
                }
            },
            manifestLoadingTimeOut: 1e4,
            manifestLoadingMaxRetry: 1,
            manifestLoadingRetryDelay: 1e3,
            manifestLoadingMaxRetryTimeout: 64e3,
            levelLoadingTimeOut: 1e4,
            levelLoadingMaxRetry: 4,
            levelLoadingRetryDelay: 1e3,
            levelLoadingMaxRetryTimeout: 64e3,
            fragLoadingTimeOut: 2e4,
            fragLoadingMaxRetry: 6,
            fragLoadingRetryDelay: 1e3,
            fragLoadingMaxRetryTimeout: 64e3
        }, {
            cueHandler: {
                newCue(t, e, s, i) {
                    const r = [];
                    let n, a, o, l, h;
                    const d = self.VTTCue || self.TextTrackCue;
                    for (let u = 0; u < i.rows.length; u++)
                        if (n = i.rows[u], o = !0, l = 0, h = '', !n.isEmpty()) {
                            var c;
                            for (let t = 0; t < n.chars.length; t++) No.test(n.chars[t].uchar) && o ? l++ : (h += n.chars[t].uchar, o = !1);
                            n.cueStartTime = e, e === s && (s += 1e-4), l >= 16 ? l-- : l++;
                            const i = aa(h.trim()),
                                f = ua(e, s, i);
                            null != t && null != (c = t.cues) && c.getCueById(f) || (a = new d(e, s, i), a.id = f, a.line = u + 1, a.align = 'left', a.position = 10 + Math.min(80, 10 * Math.floor(8 * l / 32)), r.push(a))
                        }
                    return t && r.length && (r.sort(((t, e) => 'auto' === t.line || 'auto' === e.line ? 0 : t.line > 8 && e.line > 8 ? e.line - t.line : t.line - e.line)), r.forEach((e => qe(t, e)))), r
                }
            },
            enableWebVTT: !0,
            enableIMSC1: !0,
            enableCEA708Captions: !0,
            captionsTextTrack1Label: 'English',
            captionsTextTrack1LanguageCode: 'en',
            captionsTextTrack2Label: 'Spanish',
            captionsTextTrack2LanguageCode: 'es',
            captionsTextTrack3Label: 'Unknown CC',
            captionsTextTrack3LanguageCode: '',
            captionsTextTrack4Label: 'Unknown CC',
            captionsTextTrack4LanguageCode: '',
            renderTextTracksNatively: !0
        }), {}, {
            subtitleStreamController: Rn,
            subtitleTrackController: Dn,
            timelineController: wa,
            audioStreamController: Ln,
            audioTrackController: An,
            emeController: Oa,
            cmcdController: Ao,
            contentSteeringController: Ro
        });

    function Bo(t, e) {
        if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
        if (void 0 !== e.liveMaxLatencyDurationCount && (void 0 === e.liveSyncDurationCount || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount)) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
        if (void 0 !== e.liveMaxLatencyDuration && (void 0 === e.liveSyncDuration || e.liveMaxLatencyDuration <= e.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
        const s = $o(t),
            i = ['TimeOut', 'MaxRetry', 'RetryDelay', 'MaxRetryTimeout'];
        return ['manifest', 'level', 'frag'].forEach((t => {
            const r = `${'level'===t?'playlist':t}LoadPolicy`,
                n = void 0 === e[r],
                a = [];
            i.forEach((i => {
                const o = `${t}Loading${i}`,
                    l = e[o];
                if (void 0 !== l && n) {
                    a.push(o);
                    const t = s[r].default;
                    switch (e[r] = {
                        default: t
                    }, i) {
                        case 'TimeOut':
                            t.maxLoadTimeMs = l, t.maxTimeToFirstByteMs = l;
                            break;
                        case 'MaxRetry':
                            t.errorRetry.maxNumRetry = l, t.timeoutRetry.maxNumRetry = l;
                            break;
                        case 'RetryDelay':
                            t.errorRetry.retryDelayMs = l, t.timeoutRetry.retryDelayMs = l;
                            break;
                        case 'MaxRetryTimeout':
                            t.errorRetry.maxRetryDelayMs = l, t.timeoutRetry.maxRetryDelayMs = l
                    }
                }
            })), a.length && D.warn(`hls.js config: "${a.join('", "')}" setting(s) are deprecated, use "${r}": ${JSON.stringify(e[r])}`)
        })), d(d({}, s), e)
    }

    function $o(t) {
        return t && 'object' == typeof t ? Array.isArray(t) ? t.map($o) : Object.keys(t).reduce(((e, s) => (e[s] = $o(t[s]), e)), {}) : t
    }

    function Go(t) {
        const e = t.loader;
        if (e !== _o && e !== Io) D.log('[config]: Custom loader detected, cannot enable progressive streaming'), t.progressive = !1;
        else {
            Co() && (t.loader = _o, t.progressive = !0, t.enableSoftwareAES = !0, D.log('[config]: Progressive streaming enabled, using FetchLoader'))
        }
    }
    let Ko;
    class Ho extends Hs {
        constructor(t, e) {
            super(t, '[level-controller]'), this._levels = [], this._firstLevel = -1, this._maxAutoLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = e, this._registerListeners()
        }
        _registerListeners() {
            const {
                hls: t
            } = this;
            t.on(y.MANIFEST_LOADING, this.onManifestLoading, this), t.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(y.LEVEL_LOADED, this.onLevelLoaded, this), t.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(y.FRAG_BUFFERED, this.onFragBuffered, this), t.on(y.ERROR, this.onError, this)
        }
        _unregisterListeners() {
            const {
                hls: t
            } = this;
            t.off(y.MANIFEST_LOADING, this.onManifestLoading, this), t.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(y.LEVEL_LOADED, this.onLevelLoaded, this), t.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(y.FRAG_BUFFERED, this.onFragBuffered, this), t.off(y.ERROR, this.onError, this)
        }
        destroy() {
            this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy()
        }
        stopLoad() {
            this._levels.forEach((t => {
                t.loadError = 0, t.fragmentError = 0
            })), super.stopLoad()
        }
        resetLevels() {
            this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1
        }
        onManifestLoading(t, e) {
            this.resetLevels()
        }
        onManifestLoaded(t, e) {
            const s = this.hls.config.preferManagedMediaSource,
                i = [],
                r = {},
                n = {};
            let a = !1,
                o = !1,
                l = !1;
            e.levels.forEach((t => {
                var e, h;
                const d = t.attrs;
                let {
                    audioCodec: c,
                    videoCodec: u
                } = t; - 1 !== (null == (e = c) ? void 0 : e.indexOf('mp4a.40.34')) && (Ko || (Ko = /chrome|firefox/i.test(navigator.userAgent)), Ko && (t.audioCodec = c = void 0)), c && (t.audioCodec = c = Le(c, s)), 0 === (null == (h = u) ? void 0 : h.indexOf('avc1')) && (u = t.videoCodec = Re(u));
                const {
                    width: f,
                    height: g,
                    unknownCodecs: m
                } = t;
                if (a || (a = !(!f || !g)), o || (o = !!u), l || (l = !!c), null != m && m.length || c && !ge(c, 'audio', s) || u && !ge(u, 'video', s)) return;
                const {
                    CODECS: p,
                    'FRAME-RATE': y,
                    'HDCP-LEVEL': v,
                    'PATHWAY-ID': E,
                    RESOLUTION: T,
                    'VIDEO-RANGE': S
                } = d, L = `${`${E||'.'}-`}${t.bitrate}-${T}-${y}-${p}-${S}-${v}`;
                if (r[L])
                    if (r[L].uri === t.url || t.attrs['PATHWAY-ID']) r[L].addGroupId('audio', d.AUDIO), r[L].addGroupId('text', d.SUBTITLES);
                    else {
                        const e = n[L] += 1;
                        t.attrs['PATHWAY-ID'] = new Array(e + 1).join('.');
                        const s = new fs(t);
                        r[L] = s, i.push(s)
                    }
                else {
                    const e = new fs(t);
                    r[L] = e, n[L] = 1, i.push(e)
                }
            })), this.filterAndSortMediaOptions(i, e, a, o, l)
        }
        filterAndSortMediaOptions(t, e, s, i, r) {
            let n = [],
                a = [],
                o = t;
            if ((s || i) && r && (o = o.filter((({
                    videoCodec: t,
                    videoRange: e,
                    width: s,
                    height: i
                }) => {
                    return (!!t || !(!s || !i)) && (!!(r = e) && hs.indexOf(r) > -1);
                    var r
                }))), 0 === o.length) return void Promise.resolve().then((() => {
                if (this.hls) {
                    e.levels.length && this.warn(`One or more CODECS in variant not supported: ${JSON.stringify(e.levels[0].attrs)}`);
                    const t = new Error('no level with compatible codecs found in manifest');
                    this.hls.trigger(y.ERROR, {
                        type: v.MEDIA_ERROR,
                        details: E.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                        fatal: !0,
                        url: e.url,
                        error: t,
                        reason: t.message
                    })
                }
            }));
            if (e.audioTracks) {
                const {
                    preferManagedMediaSource: t
                } = this.hls.config;
                n = e.audioTracks.filter((e => !e.audioCodec || ge(e.audioCodec, 'audio', t))), Vo(n)
            }
            e.subtitles && (a = e.subtitles, Vo(a));
            const l = o.slice(0);
            o.sort(((t, e) => {
                if (t.attrs['HDCP-LEVEL'] !== e.attrs['HDCP-LEVEL']) return (t.attrs['HDCP-LEVEL'] || '') > (e.attrs['HDCP-LEVEL'] || '') ? 1 : -1;
                if (s && t.height !== e.height) return t.height - e.height;
                if (t.frameRate !== e.frameRate) return t.frameRate - e.frameRate;
                if (t.videoRange !== e.videoRange) return hs.indexOf(t.videoRange) - hs.indexOf(e.videoRange);
                if (t.videoCodec !== e.videoCodec) {
                    const s = ye(t.videoCodec),
                        i = ye(e.videoCodec);
                    if (s !== i) return i - s
                }
                if (t.uri === e.uri && t.codecSet !== e.codecSet) {
                    const s = ve(t.codecSet),
                        i = ve(e.codecSet);
                    if (s !== i) return i - s
                }
                return t.averageBitrate !== e.averageBitrate ? t.averageBitrate - e.averageBitrate : 0
            }));
            let h = l[0];
            if (this.steering && (o = this.steering.filterParsedLevels(o), o.length !== l.length))
                for (let t = 0; t < l.length; t++)
                    if (l[t].pathwayId === o[0].pathwayId) {
                        h = l[t];
                        break
                    }
            this._levels = o;
            for (let t = 0; t < o.length; t++)
                if (o[t] === h) {
                    var d;
                    this._firstLevel = t;
                    const e = h.bitrate,
                        s = this.hls.bandwidthEstimate;
                    if (this.log(`manifest loaded, ${o.length} level(s) found, first bitrate: ${e}`), void 0 === (null == (d = this.hls.userConfig) ? void 0 : d.abrEwmaDefaultEstimate)) {
                        const t = Math.min(e, this.hls.config.abrEwmaDefaultEstimateMax);
                        t > s && s === Uo.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = t)
                    }
                    break
                }
            const c = r && !i,
                u = {
                    levels: o,
                    audioTracks: n,
                    subtitleTracks: a,
                    sessionData: e.sessionData,
                    sessionKeys: e.sessionKeys,
                    firstLevel: this._firstLevel,
                    stats: e.stats,
                    audio: r,
                    video: i,
                    altAudio: !c && n.some((t => !!t.url))
                };
            this.hls.trigger(y.MANIFEST_PARSED, u), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition)
        }
        get levels() {
            return 0 === this._levels.length ? null : this._levels
        }
        get level() {
            return this.currentLevelIndex
        }
        set level(t) {
            const e = this._levels;
            if (0 === e.length) return;
            if (t < 0 || t >= e.length) {
                const s = new Error('invalid level idx'),
                    i = t < 0;
                if (this.hls.trigger(y.ERROR, {
                        type: v.OTHER_ERROR,
                        details: E.LEVEL_SWITCH_ERROR,
                        level: t,
                        fatal: i,
                        error: s,
                        reason: s.message
                    }), i) return;
                t = Math.min(t, e.length - 1)
            }
            const s = this.currentLevelIndex,
                i = this.currentLevel,
                r = i ? i.attrs['PATHWAY-ID'] : void 0,
                n = e[t],
                a = n.attrs['PATHWAY-ID'];
            if (this.currentLevelIndex = t, this.currentLevel = n, s === t && n.details && i && r === a) return;
            this.log(`Switching to level ${t} (${n.height?n.height+'p ':''}${n.videoRange?n.videoRange+' ':''}${n.codecSet?n.codecSet+' ':''}@${n.bitrate})${a?' with Pathway '+a:''} from level ${s}${r?' with Pathway '+r:''}`);
            const o = {
                level: t,
                attrs: n.attrs,
                details: n.details,
                bitrate: n.bitrate,
                averageBitrate: n.averageBitrate,
                maxBitrate: n.maxBitrate,
                realBitrate: n.realBitrate,
                width: n.width,
                height: n.height,
                codecSet: n.codecSet,
                audioCodec: n.audioCodec,
                videoCodec: n.videoCodec,
                audioGroups: n.audioGroups,
                subtitleGroups: n.subtitleGroups,
                loaded: n.loaded,
                loadError: n.loadError,
                fragmentError: n.fragmentError,
                name: n.name,
                id: n.id,
                uri: n.uri,
                url: n.url,
                urlId: 0,
                audioGroupIds: n.audioGroupIds,
                textGroupIds: n.textGroupIds
            };
            this.hls.trigger(y.LEVEL_SWITCHING, o);
            const l = n.details;
            if (!l || l.live) {
                const t = this.switchParams(n.uri, null == i ? void 0 : i.details, l);
                this.loadPlaylist(t)
            }
        }
        get manualLevel() {
            return this.manualLevelIndex
        }
        set manualLevel(t) {
            this.manualLevelIndex = t, void 0 === this._startLevel && (this._startLevel = t), -1 !== t && (this.level = t)
        }
        get firstLevel() {
            return this._firstLevel
        }
        set firstLevel(t) {
            this._firstLevel = t
        }
        get startLevel() {
            if (void 0 === this._startLevel) {
                const t = this.hls.config.startLevel;
                return void 0 !== t ? t : this.hls.firstAutoLevel
            }
            return this._startLevel
        }
        set startLevel(t) {
            this._startLevel = t
        }
        onError(t, e) {
            !e.fatal && e.context && e.context.type === $e && e.context.level === this.level && this.checkRetry(e)
        }
        onFragBuffered(t, {
            frag: e
        }) {
            if (void 0 !== e && e.type === He.MAIN) {
                const t = e.elementaryStreams;
                if (!Object.keys(t).some((e => !!t[e]))) return;
                const s = this._levels[e.level];
                null != s && s.loadError && (this.log(`Resetting level error count of ${s.loadError} on frag buffered`), s.loadError = 0)
            }
        }
        onLevelLoaded(t, e) {
            var s;
            const {
                level: i,
                details: r
            } = e, n = this._levels[i];
            var a;
            if (!n) return this.warn(`Invalid level index ${i}`), void(null != (a = e.deliveryDirectives) && a.skip && (r.deltaUpdateFailed = !0));
            i === this.currentLevelIndex ? (0 === n.fragmentError && (n.loadError = 0), this.playlistLoaded(i, e, n.details)) : null != (s = e.deliveryDirectives) && s.skip && (r.deltaUpdateFailed = !0)
        }
        loadPlaylist(t) {
            super.loadPlaylist();
            const e = this.currentLevelIndex,
                s = this.currentLevel;
            if (s && this.shouldLoadPlaylist(s)) {
                let i = s.uri;
                if (t) try {
                    i = t.addDirectives(i)
                } catch (t) {
                    this.warn(`Could not construct new URL with HLS Delivery Directives: ${t}`)
                }
                const r = s.attrs['PATHWAY-ID'];
                this.log(`Loading level index ${e}${void 0!==(null==t?void 0:t.msn)?' at sn '+t.msn+' part '+t.part:''} with${r?' Pathway '+r:''} ${i}`), this.clearTimer(), this.hls.trigger(y.LEVEL_LOADING, {
                    url: i,
                    level: e,
                    pathwayId: s.attrs['PATHWAY-ID'],
                    id: 0,
                    deliveryDirectives: t || null
                })
            }
        }
        get nextLoadLevel() {
            return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
        }
        set nextLoadLevel(t) {
            this.level = t, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t)
        }
        removeLevel(t) {
            var e;
            const s = this._levels.filter(((e, s) => s !== t || (this.steering && this.steering.removeLevel(e), e === this.currentLevel && (this.currentLevel = null, this.currentLevelIndex = -1, e.details && e.details.fragments.forEach((t => t.level = -1))), !1)));
            ks(s), this._levels = s, this.currentLevelIndex > -1 && null != (e = this.currentLevel) && e.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.hls.trigger(y.LEVELS_UPDATED, {
                levels: s
            })
        }
        onLevelsUpdated(t, {
            levels: e
        }) {
            this._levels = e
        }
        checkMaxAutoUpdated() {
            const {
                autoLevelCapping: t,
                maxAutoLevel: e,
                maxHdcpLevel: s
            } = this.hls;
            this._maxAutoLevel !== e && (this._maxAutoLevel = e, this.hls.trigger(y.MAX_AUTO_LEVEL_UPDATED, {
                autoLevelCapping: t,
                levels: this.levels,
                maxAutoLevel: e,
                minAutoLevel: this.hls.minAutoLevel,
                maxHdcpLevel: s
            }))
        }
    }

    function Vo(t) {
        const e = {};
        t.forEach((t => {
            const s = t.groupId || '';
            t.id = e[s] = e[s] || 0, e[s]++
        }))
    }
    class Yo {
        constructor(t) {
            this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = t
        }
        abort(t) {
            for (const s in this.keyUriToKeyInfo) {
                const i = this.keyUriToKeyInfo[s].loader;
                if (i) {
                    var e;
                    if (t && t !== (null == (e = i.context) ? void 0 : e.frag.type)) return;
                    i.abort()
                }
            }
        }
        detach() {
            for (const t in this.keyUriToKeyInfo) {
                const e = this.keyUriToKeyInfo[t];
                (e.mediaKeySessionContext || e.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[t]
            }
        }
        destroy() {
            this.detach();
            for (const t in this.keyUriToKeyInfo) {
                const e = this.keyUriToKeyInfo[t].loader;
                e && e.destroy()
            }
            this.keyUriToKeyInfo = {}
        }
        createKeyLoadError(t, e = E.KEY_LOAD_ERROR, s, i, r) {
            return new Pi({
                type: v.NETWORK_ERROR,
                details: e,
                fatal: !1,
                frag: t,
                response: r,
                error: s,
                networkDetails: i
            })
        }
        loadClear(t, e) {
            if (this.emeController && this.config.emeEnabled) {
                const {
                    sn: s,
                    cc: i
                } = t;
                for (let t = 0; t < e.length; t++) {
                    const r = e[t];
                    if (i <= r.cc && ('initSegment' === s || 'initSegment' === r.sn || s < r.sn)) {
                        this.emeController.selectKeySystemFormat(r).then((t => {
                            r.setKeyFormat(t)
                        }));
                        break
                    }
                }
            }
        }
        load(t) {
            return !t.decryptdata && t.encrypted && this.emeController ? this.emeController.selectKeySystemFormat(t).then((e => this.loadInternal(t, e))) : this.loadInternal(t)
        }
        loadInternal(t, e) {
            var s, i;
            e && t.setKeyFormat(e);
            const r = t.decryptdata;
            if (!r) {
                const s = new Error(e ? `Expected frag.decryptdata to be defined after setting format ${e}` : 'Missing decryption data on fragment in onKeyLoading');
                return Promise.reject(this.createKeyLoadError(t, E.KEY_LOAD_ERROR, s))
            }
            const n = r.uri;
            if (!n) return Promise.reject(this.createKeyLoadError(t, E.KEY_LOAD_ERROR, new Error(`Invalid key URI: "${n}"`)));
            let a = this.keyUriToKeyInfo[n];
            if (null != (s = a) && s.decryptdata.key) return r.key = a.decryptdata.key, Promise.resolve({
                frag: t,
                keyInfo: a
            });
            var o;
            if (null != (i = a) && i.keyLoadPromise) switch (null == (o = a.mediaKeySessionContext) ? void 0 : o.keyStatus) {
                case void 0:
                case 'status-pending':
                case 'usable':
                case 'usable-in-future':
                    return a.keyLoadPromise.then((e => (r.key = e.keyInfo.decryptdata.key, {
                        frag: t,
                        keyInfo: a
                    })))
            }
            switch (a = this.keyUriToKeyInfo[n] = {
                decryptdata: r,
                keyLoadPromise: null,
                loader: null,
                mediaKeySessionContext: null
            }, r.method) {
                case 'ISO-23001-7':
                case 'SAMPLE-AES':
                case 'SAMPLE-AES-CENC':
                case 'SAMPLE-AES-CTR':
                    return 'identity' === r.keyFormat ? this.loadKeyHTTP(a, t) : this.loadKeyEME(a, t);
                case 'AES-128':
                    return this.loadKeyHTTP(a, t);
                default:
                    return Promise.reject(this.createKeyLoadError(t, E.KEY_LOAD_ERROR, new Error(`Key supplied with unsupported METHOD: "${r.method}"`)))
            }
        }
        loadKeyEME(t, e) {
            const s = {
                frag: e,
                keyInfo: t
            };
            if (this.emeController && this.config.emeEnabled) {
                const e = this.emeController.loadKey(s);
                if (e) return (t.keyLoadPromise = e.then((e => (t.mediaKeySessionContext = e, s)))).catch((e => {
                    throw t.keyLoadPromise = null, e
                }))
            }
            return Promise.resolve(s)
        }
        loadKeyHTTP(t, e) {
            const s = this.config,
                i = new(0, s.loader)(s);
            return e.keyLoader = t.loader = i, t.keyLoadPromise = new Promise(((r, n) => {
                const a = {
                        keyInfo: t,
                        frag: e,
                        responseType: 'arraybuffer',
                        url: t.decryptdata.uri
                    },
                    o = s.keyLoadPolicy.default,
                    l = {
                        loadPolicy: o,
                        timeout: o.maxLoadTimeMs,
                        maxRetry: 0,
                        retryDelay: 0,
                        maxRetryDelay: 0
                    },
                    h = {
                        onSuccess: (t, e, s, i) => {
                            const {
                                frag: a,
                                keyInfo: o,
                                url: l
                            } = s;
                            if (!a.decryptdata || o !== this.keyUriToKeyInfo[l]) return n(this.createKeyLoadError(a, E.KEY_LOAD_ERROR, new Error('after key load, decryptdata unset or changed'), i));
                            o.decryptdata.key = a.decryptdata.key = new Uint8Array(t.data), a.keyLoader = null, o.loader = null, r({
                                frag: a,
                                keyInfo: o
                            })
                        },
                        onError: (t, s, i, r) => {
                            this.resetLoader(s), n(this.createKeyLoadError(e, E.KEY_LOAD_ERROR, new Error(`HTTP Error ${t.code} loading key ${t.text}`), i, d({
                                url: a.url,
                                data: void 0
                            }, t)))
                        },
                        onTimeout: (t, s, i) => {
                            this.resetLoader(s), n(this.createKeyLoadError(e, E.KEY_LOAD_TIMEOUT, new Error('key loading timed out'), i))
                        },
                        onAbort: (t, s, i) => {
                            this.resetLoader(s), n(this.createKeyLoadError(e, E.INTERNAL_ABORTED, new Error('key loading aborted'), i))
                        }
                    };
                i.load(a, l, h)
            }))
        }
        resetLoader(t) {
            const {
                frag: e,
                keyInfo: s,
                url: i
            } = t, r = s.loader;
            e.keyLoader === r && (e.keyLoader = null, s.loader = null), delete this.keyUriToKeyInfo[i], r && r.destroy()
        }
    }

    function Wo() {
        return self.SourceBuffer || self.WebKitSourceBuffer
    }

    function jo() {
        if (!ce()) return !1;
        const t = Wo();
        return !t || t.prototype && 'function' == typeof t.prototype.appendBuffer && 'function' == typeof t.prototype.remove
    }

    function qo() {
        if (!jo()) return !1;
        const t = ce();
        return 'function' == typeof(null == t ? void 0 : t.isTypeSupported) && (['avc1.42E01E,mp4a.40.2', 'av01.0.01M.08', 'vp09.00.50.08'].some((e => t.isTypeSupported(pe(e, 'video')))) || ['mp4a.40.2', 'fLaC'].some((e => t.isTypeSupported(pe(e, 'audio')))))
    }

    function Xo() {
        var t;
        const e = Wo();
        return 'function' == typeof(null == e || null == (t = e.prototype) ? void 0 : t.changeType)
    }
    class zo {
        constructor(t, e, s, i) {
            this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = t, this.media = e, this.fragmentTracker = s, this.hls = i
        }
        destroy() {
            this.media = null, this.hls = this.fragmentTracker = null
        }
        poll(t, e) {
            const {
                config: s,
                media: i,
                stalled: r
            } = this;
            if (null === i) return;
            const {
                currentTime: n,
                seeking: a
            } = i, o = this.seeking && !a, l = !this.seeking && a;
            if (this.seeking = a, n !== t) {
                if (this.moved = !0, a || (this.nudgeRetry = 0), null !== r) {
                    if (this.stallReported) {
                        const t = self.performance.now() - r;
                        D.warn(`playback not stuck anymore @${n}, after ${Math.round(t)}ms`), this.stallReported = !1
                    }
                    this.stalled = null
                }
                return
            }
            if (l || o) return void(this.stalled = null);
            if (i.paused && !a || i.ended || 0 === i.playbackRate || !Ei.getBuffered(i).length) return void(this.nudgeRetry = 0);
            const h = Ei.bufferInfo(i, n, 0),
                d = h.nextStart || 0;
            if (a) {
                const t = h.len > 2,
                    s = !d || e && e.start <= n || d - n > 2 && !this.fragmentTracker.getPartialFragment(n);
                if (t || s) return;
                this.moved = !1
            }
            if (!this.moved && null !== this.stalled) {
                var c;
                if (!(h.len > 0) && !d) return;
                const t = Math.max(d, h.start || 0) - n,
                    e = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
                    s = (null == e || null == (c = e.details) ? void 0 : c.live) ? 2 * e.details.targetduration : 2,
                    r = this.fragmentTracker.getPartialFragment(n);
                if (t > 0 && (t <= s || r)) return void(i.paused || this._trySkipBufferHole(r))
            }
            const u = self.performance.now();
            if (null === r) return void(this.stalled = u);
            const f = u - r;
            if (!a && f >= 250 && (this._reportStall(h), !this.media)) return;
            const g = Ei.bufferInfo(i, n, s.maxBufferHole);
            this._tryFixBufferStall(g, f)
        }
        _tryFixBufferStall(t, e) {
            const {
                config: s,
                fragmentTracker: i,
                media: r
            } = this;
            if (null === r) return;
            const n = r.currentTime,
                a = i.getPartialFragment(n);
            if (a) {
                if (this._trySkipBufferHole(a) || !this.media) return
            }(t.len > s.maxBufferHole || t.nextStart && t.nextStart - n < s.maxBufferHole) && e > 1e3 * s.highBufferWatchdogPeriod && (D.warn('Trying to nudge playhead over buffer-hole'), this.stalled = null, this._tryNudgeBuffer())
        }
        _reportStall(t) {
            const {
                hls: e,
                media: s,
                stallReported: i
            } = this;
            if (!i && s) {
                this.stallReported = !0;
                const i = new Error(`Playback stalling at @${s.currentTime} due to low buffer (${JSON.stringify(t)})`);
                D.warn(i.message), e.trigger(y.ERROR, {
                    type: v.MEDIA_ERROR,
                    details: E.BUFFER_STALLED_ERROR,
                    fatal: !1,
                    error: i,
                    buffer: t.len
                })
            }
        }
        _trySkipBufferHole(t) {
            const {
                config: e,
                hls: s,
                media: i
            } = this;
            if (null === i) return 0;
            const r = i.currentTime,
                n = Ei.bufferInfo(i, r, 0),
                a = r < n.start ? n.start : n.nextStart;
            if (a) {
                const o = n.len <= e.maxBufferHole,
                    l = n.len > 0 && n.len < 1 && i.readyState < 3,
                    h = a - r;
                if (h > 0 && (o || l)) {
                    if (h > e.maxBufferHole) {
                        const {
                            fragmentTracker: e
                        } = this;
                        let s = !1;
                        if (0 === r) {
                            const t = e.getAppendedFrag(0, He.MAIN);
                            t && a < t.end && (s = !0)
                        }
                        if (!s) {
                            const s = t || e.getAppendedFrag(r, He.MAIN);
                            if (s) {
                                let t = !1,
                                    i = s.end;
                                for (; i < a;) {
                                    const s = e.getPartialFragment(i);
                                    if (!s) {
                                        t = !0;
                                        break
                                    }
                                    i += s.duration
                                }
                                if (t) return 0
                            }
                        }
                    }
                    const n = Math.max(a + .05, r + .1);
                    if (D.warn(`skipping hole, adjusting currentTime from ${r} to ${n}`), this.moved = !0, this.stalled = null, i.currentTime = n, t && !t.gap) {
                        const e = new Error(`fragment loaded with buffer holes, seeking from ${r} to ${n}`);
                        s.trigger(y.ERROR, {
                            type: v.MEDIA_ERROR,
                            details: E.BUFFER_SEEK_OVER_HOLE,
                            fatal: !1,
                            error: e,
                            reason: e.message,
                            frag: t
                        })
                    }
                    return n
                }
            }
            return 0
        }
        _tryNudgeBuffer() {
            const {
                config: t,
                hls: e,
                media: s,
                nudgeRetry: i
            } = this;
            if (null === s) return;
            const r = s.currentTime;
            if (this.nudgeRetry++, i < t.nudgeMaxRetry) {
                const n = r + (i + 1) * t.nudgeOffset,
                    a = new Error(`Nudging 'currentTime' from ${r} to ${n}`);
                D.warn(a.message), s.currentTime = n, e.trigger(y.ERROR, {
                    type: v.MEDIA_ERROR,
                    details: E.BUFFER_NUDGE_ON_STALL,
                    error: a,
                    fatal: !1
                })
            } else {
                const s = new Error(`Playhead still not moving while enough data buffered @${r} after ${t.nudgeMaxRetry} nudges`);
                D.error(s.message), e.trigger(y.ERROR, {
                    type: v.MEDIA_ERROR,
                    details: E.BUFFER_STALLED_ERROR,
                    error: s,
                    fatal: !0
                })
            }
        }
    }
    class Qo extends Ji {
        constructor(t, e, s) {
            super(t, e, s, '[stream-controller]', He.MAIN), this.audioCodecSwap = !1, this.gapController = null, this.level = -1, this._forceStartLoad = !1, this.altAudio = !1, this.audioOnly = !1, this.fragPlaying = null, this.onvplaying = null, this.onvseeked = null, this.fragLastKbps = 0, this.couldBacktrack = !1, this.backtrackFragment = null, this.audioCodecSwitch = !1, this.videoBuffer = null, this._registerListeners()
        }
        _registerListeners() {
            const {
                hls: t
            } = this;
            t.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(y.MANIFEST_LOADING, this.onManifestLoading, this), t.on(y.MANIFEST_PARSED, this.onManifestParsed, this), t.on(y.LEVEL_LOADING, this.onLevelLoading, this), t.on(y.LEVEL_LOADED, this.onLevelLoaded, this), t.on(y.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.on(y.ERROR, this.onError, this), t.on(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(y.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(y.BUFFER_CREATED, this.onBufferCreated, this), t.on(y.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(y.FRAG_BUFFERED, this.onFragBuffered, this)
        }
        _unregisterListeners() {
            const {
                hls: t
            } = this;
            t.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(y.MANIFEST_LOADING, this.onManifestLoading, this), t.off(y.MANIFEST_PARSED, this.onManifestParsed, this), t.off(y.LEVEL_LOADED, this.onLevelLoaded, this), t.off(y.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.off(y.ERROR, this.onError, this), t.off(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(y.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(y.BUFFER_CREATED, this.onBufferCreated, this), t.off(y.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(y.FRAG_BUFFERED, this.onFragBuffered, this)
        }
        onHandlerDestroying() {
            this._unregisterListeners(), super.onHandlerDestroying()
        }
        startLoad(t) {
            if (this.levels) {
                const {
                    lastCurrentTime: e,
                    hls: s
                } = this;
                if (this.stopLoad(), this.setInterval(100), this.level = -1, !this.startFragRequested) {
                    let t = s.startLevel; - 1 === t && (s.config.testBandwidth && this.levels.length > 1 ? (t = 0, this.bitrateTest = !0) : t = s.firstAutoLevel), s.nextLoadLevel = t, this.level = s.loadLevel, this.loadedmetadata = !1
                }
                e > 0 && -1 === t && (this.log(`Override startPosition with lastCurrentTime @${e.toFixed(3)}`), t = e), this.state = Gi, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
            } else this._forceStartLoad = !0, this.state = $i
        }
        stopLoad() {
            this._forceStartLoad = !1, super.stopLoad()
        }
        doTick() {
            switch (this.state) {
                case Qi:
                    {
                        const {
                            levels: t,
                            level: e
                        } = this,
                        s = null == t ? void 0 : t[e],
                        i = null == s ? void 0 : s.details;
                        if (i && (!i.live || this.levelLastLoaded === s)) {
                            if (this.waitForCdnTuneIn(i)) break;
                            this.state = Gi;
                            break
                        }
                        if (this.hls.nextLoadLevel !== this.level) {
                            this.state = Gi;
                            break
                        }
                        break
                    }
                case Vi:
                    {
                        var t;
                        const e = self.performance.now(),
                            s = this.retryDate;
                        if (!s || e >= s || null != (t = this.media) && t.seeking) {
                            const {
                                levels: t,
                                level: e
                            } = this, s = null == t ? void 0 : t[e];
                            this.resetStartWhenNotLoaded(s || null), this.state = Gi
                        }
                    }
            }
            this.state === Gi && this.doTickIdle(), this.onTickEnd()
        }
        onTickEnd() {
            super.onTickEnd(), this.checkBuffer(), this.checkFragmentChanged()
        }
        doTickIdle() {
            const {
                hls: t,
                levelLastLoaded: e,
                levels: s,
                media: i
            } = this;
            if (null === e || !i && (this.startFragRequested || !t.config.startFragPrefetch)) return;
            if (this.altAudio && this.audioOnly) return;
            const r = t.nextLoadLevel;
            if (null == s || !s[r]) return;
            const n = s[r],
                a = this.getMainFwdBufferInfo();
            if (null === a) return;
            const o = this.getLevelDetails();
            if (o && this._streamEnded(a, o)) {
                const t = {};
                return this.altAudio && (t.type = 'video'), this.hls.trigger(y.BUFFER_EOS, t), void(this.state = qi)
            }
            t.loadLevel !== r && -1 === t.manualLevel && this.log(`Adapting to level ${r} from level ${this.level}`), this.level = t.nextLoadLevel = r;
            const l = n.details;
            if (!l || this.state === Qi || l.live && this.levelLastLoaded !== n) return this.level = r, void(this.state = Qi);
            const h = a.len,
                d = this.getMaxBufferLength(n.maxBitrate);
            if (h >= d) return;
            this.backtrackFragment && this.backtrackFragment.start > a.end && (this.backtrackFragment = null);
            const c = this.backtrackFragment ? this.backtrackFragment.start : a.end;
            let u = this.getNextFragment(c, l);
            if (this.couldBacktrack && !this.fragPrevious && u && 'initSegment' !== u.sn && this.fragmentTracker.getState(u) !== gi) {
                var f;
                const t = (null != (f = this.backtrackFragment) ? f : u).sn - l.startSN,
                    e = l.fragments[t - 1];
                e && u.cc === e.cc && (u = e, this.fragmentTracker.removeFragment(e))
            } else this.backtrackFragment && a.len && (this.backtrackFragment = null);
            if (u && this.isLoopLoading(u, c)) {
                if (!u.gap) {
                    const t = this.audioOnly && !this.altAudio ? P : M,
                        e = (t === M ? this.videoBuffer : this.mediaBuffer) || this.media;
                    e && this.afterBufferFlushed(e, t, He.MAIN)
                }
                u = this.getNextFragmentLoopLoading(u, l, a, He.MAIN, d)
            }
            u && (!u.initSegment || u.initSegment.data || this.bitrateTest || (u = u.initSegment), this.loadFragment(u, n, c))
        }
        loadFragment(t, e, s) {
            const i = this.fragmentTracker.getState(t);
            this.fragCurrent = t, i === ci || i === fi ? 'initSegment' === t.sn ? this._loadInitSegment(t, e) : this.bitrateTest ? (this.log(`Fragment ${t.sn} of level ${t.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(t, e)) : (this.startFragRequested = !0, super.loadFragment(t, e, s)) : this.clearTrackerIfNeeded(t)
        }
        getBufferedFrag(t) {
            return this.fragmentTracker.getBufferedFrag(t, He.MAIN)
        }
        followingBufferedFrag(t) {
            return t ? this.getBufferedFrag(t.end + .5) : null
        }
        immediateLevelSwitch() {
            this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
        }
        nextLevelSwitch() {
            const {
                levels: t,
                media: e
            } = this;
            if (null != e && e.readyState) {
                let s;
                const i = this.getAppendedFrag(e.currentTime);
                i && i.start > 1 && this.flushMainBuffer(0, i.start - 1);
                const r = this.getLevelDetails();
                if (null != r && r.live) {
                    const t = this.getMainFwdBufferInfo();
                    if (!t || t.len < 2 * r.targetduration) return
                }
                if (!e.paused && t) {
                    const e = t[this.hls.nextLoadLevel],
                        i = this.fragLastKbps;
                    s = i && this.fragCurrent ? this.fragCurrent.duration * e.maxBitrate / (1e3 * i) + 1 : 0
                } else s = 0;
                const n = this.getBufferedFrag(e.currentTime + s);
                if (n) {
                    const t = this.followingBufferedFrag(n);
                    if (t) {
                        this.abortCurrentFrag();
                        const e = t.maxStartPTS ? t.maxStartPTS : t.start,
                            s = t.duration,
                            i = Math.max(n.end, e + Math.min(Math.max(s - this.config.maxFragLookUpTolerance, s * (this.couldBacktrack ? .5 : .125)), s * (this.couldBacktrack ? .75 : .25)));
                        this.flushMainBuffer(i, Number.POSITIVE_INFINITY)
                    }
                }
            }
        }
        abortCurrentFrag() {
            const t = this.fragCurrent;
            switch (this.fragCurrent = null, this.backtrackFragment = null, t && (t.abortRequests(), this.fragmentTracker.removeFragment(t)), this.state) {
                case Ki:
                case Hi:
                case Vi:
                case Wi:
                case ji:
                    this.state = Gi
            }
            this.nextLoadPosition = this.getLoadPosition()
        }
        flushMainBuffer(t, e) {
            super.flushMainBuffer(t, e, this.altAudio ? 'video' : null)
        }
        onMediaAttached(t, e) {
            super.onMediaAttached(t, e);
            const s = e.media;
            this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), s.addEventListener('playing', this.onvplaying), s.addEventListener('seeked', this.onvseeked), this.gapController = new zo(this.config, s, this.fragmentTracker, this.hls)
        }
        onMediaDetaching() {
            const {
                media: t
            } = this;
            t && this.onvplaying && this.onvseeked && (t.removeEventListener('playing', this.onvplaying), t.removeEventListener('seeked', this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), super.onMediaDetaching()
        }
        onMediaPlaying() {
            this.tick()
        }
        onMediaSeeked() {
            const t = this.media,
                e = t ? t.currentTime : null;
            g(e) && this.log(`Media seeked to ${e.toFixed(3)}`);
            const s = this.getMainFwdBufferInfo();
            null !== s && 0 !== s.len ? this.tick() : this.warn(`Main forward buffer length on "seeked" event ${s?s.len:'empty'})`)
        }
        onManifestLoading() {
            this.log('Trigger BUFFER_RESET'), this.hls.trigger(y.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = !1, this.startPosition = this.lastCurrentTime = this.fragLastKbps = 0, this.levels = this.fragPlaying = this.backtrackFragment = this.levelLastLoaded = null, this.altAudio = this.audioOnly = this.startFragRequested = !1
        }
        onManifestParsed(t, e) {
            let s = !1,
                i = !1;
            e.levels.forEach((t => {
                const e = t.audioCodec;
                e && (s = s || -1 !== e.indexOf('mp4a.40.2'), i = i || -1 !== e.indexOf('mp4a.40.5'))
            })), this.audioCodecSwitch = s && i && !Xo(), this.audioCodecSwitch && this.log('Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC'), this.levels = e.levels, this.startFragRequested = !1
        }
        onLevelLoading(t, e) {
            const {
                levels: s
            } = this;
            if (!s || this.state !== Gi) return;
            const i = s[e.level];
            (!i.details || i.details.live && this.levelLastLoaded !== i || this.waitForCdnTuneIn(i.details)) && (this.state = Qi)
        }
        onLevelLoaded(t, e) {
            var s;
            const {
                levels: i
            } = this, r = e.level, n = e.details, a = n.totalduration;
            if (!i) return void this.warn(`Levels were reset while loading level ${r}`);
            this.log(`Level ${r} loaded [${n.startSN},${n.endSN}]${n.lastPartSn?`[part-${n.lastPartSn}-${n.lastPartIndex}]`:''}, cc [${n.startCC}, ${n.endCC}] duration:${a}`);
            const o = i[r],
                l = this.fragCurrent;
            !l || this.state !== Hi && this.state !== Vi || l.level !== e.level && l.loader && this.abortCurrentFrag();
            let h = 0;
            if (n.live || null != (s = o.details) && s.live) {
                var d;
                if (this.checkLiveUpdate(n), n.deltaUpdateFailed) return;
                h = this.alignPlaylists(n, o.details, null == (d = this.levelLastLoaded) ? void 0 : d.details)
            }
            if (o.details = n, this.levelLastLoaded = o, this.hls.trigger(y.LEVEL_UPDATED, {
                    details: n,
                    level: r
                }), this.state === Qi) {
                if (this.waitForCdnTuneIn(n)) return;
                this.state = Gi
            }
            this.startFragRequested ? n.live && this.synchronizeToLiveEdge(n) : this.setStartPosition(n, h), this.tick()
        }
        _handleFragmentLoadProgress(t) {
            var e;
            const {
                frag: s,
                part: i,
                payload: r
            } = t, {
                levels: n
            } = this;
            if (!n) return void this.warn(`Levels were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
            const a = n[s.level],
                o = a.details;
            if (!o) return this.warn(`Dropping fragment ${s.sn} of level ${s.level} after level details were reset`), void this.fragmentTracker.removeFragment(s);
            const l = a.videoCodec,
                h = o.PTSKnown || !o.live,
                d = null == (e = s.initSegment) ? void 0 : e.data,
                c = this._getAudioCodec(a),
                u = this.transmuxer = this.transmuxer || new vn(this.hls, He.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)),
                f = i ? i.index : -1,
                g = -1 !== f,
                m = new Ti(s.level, s.sn, s.stats.chunkCount, r.byteLength, f, g),
                p = this.initPTS[s.cc];
            u.push(r, d, c, l, s, i, o.totalduration, h, m, p)
        }
        onAudioTrackSwitching(t, e) {
            const s = this.altAudio;
            if (!!!e.url) {
                if (this.mediaBuffer !== this.media) {
                    this.log('Switching on main audio, use media.buffered to schedule main fragment loading'), this.mediaBuffer = this.media;
                    const t = this.fragCurrent;
                    t && (this.log('Switching to main audio track, cancel main fragment load'), t.abortRequests(), this.fragmentTracker.removeFragment(t)), this.resetTransmuxer(), this.resetLoadingState()
                } else this.audioOnly && this.resetTransmuxer();
                const t = this.hls;
                s && (t.trigger(y.BUFFER_FLUSHING, {
                    startOffset: 0,
                    endOffset: Number.POSITIVE_INFINITY,
                    type: null
                }), this.fragmentTracker.removeAllFragments()), t.trigger(y.AUDIO_TRACK_SWITCHED, e)
            }
        }
        onAudioTrackSwitched(t, e) {
            const s = e.id,
                i = !!this.hls.audioTracks[s].url;
            if (i) {
                const t = this.videoBuffer;
                t && this.mediaBuffer !== t && (this.log('Switching on alternate audio, use video.buffered to schedule main fragment loading'), this.mediaBuffer = t)
            }
            this.altAudio = i, this.tick()
        }
        onBufferCreated(t, e) {
            const s = e.tracks;
            let i, r, n = !1;
            for (const t in s) {
                const e = s[t];
                if ('main' === e.id) {
                    if (r = t, i = e, 'video' === t) {
                        const e = s[t];
                        e && (this.videoBuffer = e.buffer)
                    }
                } else n = !0
            }
            n && i ? (this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`), this.mediaBuffer = i.buffer) : this.mediaBuffer = this.media
        }
        onFragBuffered(t, e) {
            const {
                frag: s,
                part: i
            } = e;
            if (s && s.type !== He.MAIN) return;
            if (this.fragContextChanged(s)) return this.warn(`Fragment ${s.sn}${i?' p: '+i.index:''} of level ${s.level} finished buffering, but was aborted. state: ${this.state}`), void(this.state === ji && (this.state = Gi));
            const r = i ? i.stats : s.stats;
            this.fragLastKbps = Math.round(8 * r.total / (r.buffering.end - r.loading.first)), 'initSegment' !== s.sn && (this.fragPrevious = s), this.fragBufferedComplete(s, i)
        }
        onError(t, e) {
            var s;
            if (e.fatal) this.state = Xi;
            else switch (e.details) {
                case E.FRAG_GAP:
                case E.FRAG_PARSING_ERROR:
                case E.FRAG_DECRYPT_ERROR:
                case E.FRAG_LOAD_ERROR:
                case E.FRAG_LOAD_TIMEOUT:
                case E.KEY_LOAD_ERROR:
                case E.KEY_LOAD_TIMEOUT:
                    this.onFragmentOrKeyLoadError(He.MAIN, e);
                    break;
                case E.LEVEL_LOAD_ERROR:
                case E.LEVEL_LOAD_TIMEOUT:
                case E.LEVEL_PARSING_ERROR:
                    e.levelRetry || this.state !== Qi || (null == (s = e.context) ? void 0 : s.type) !== $e || (this.state = Gi);
                    break;
                case E.BUFFER_APPEND_ERROR:
                case E.BUFFER_FULL_ERROR:
                    if (!e.parent || 'main' !== e.parent) return;
                    if (e.details === E.BUFFER_APPEND_ERROR) return void this.resetLoadingState();
                    this.reduceLengthAndFlushBuffer(e) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                    break;
                case E.INTERNAL_EXCEPTION:
                    this.recoverWorkerError(e)
            }
        }
        checkBuffer() {
            const {
                media: t,
                gapController: e
            } = this;
            if (t && e && t.readyState) {
                if (this.loadedmetadata || !Ei.getBuffered(t).length) {
                    const t = this.state !== Gi ? this.fragCurrent : null;
                    e.poll(this.lastCurrentTime, t)
                }
                this.lastCurrentTime = t.currentTime
            }
        }
        onFragLoadEmergencyAborted() {
            this.state = Gi, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate()
        }
        onBufferFlushed(t, {
            type: e
        }) {
            if (e !== P || this.audioOnly && !this.altAudio) {
                const t = (e === M ? this.videoBuffer : this.mediaBuffer) || this.media;
                this.afterBufferFlushed(t, e, He.MAIN), this.tick()
            }
        }
        onLevelsUpdated(t, e) {
            this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level), this.levels = e.levels
        }
        swapAudioCodec() {
            this.audioCodecSwap = !this.audioCodecSwap
        }
        seekToStartPos() {
            const {
                media: t
            } = this;
            if (!t) return;
            const e = t.currentTime;
            let s = this.startPosition;
            if (s >= 0 && e < s) {
                if (t.seeking) return void this.log(`could not seek to ${s}, already seeking at ${e}`);
                const i = Ei.getBuffered(t),
                    r = (i.length ? i.start(0) : 0) - s;
                r > 0 && (r < this.config.maxBufferHole || r < this.config.maxFragLookUpTolerance) && (this.log(`adjusting start position by ${r} to match buffer start`), s += r, this.startPosition = s), this.log(`seek to target start position ${s} from current time ${e}`), t.currentTime = s
            }
        }
        _getAudioCodec(t) {
            let e = this.config.defaultAudioCodec || t.audioCodec;
            return this.audioCodecSwap && e && (this.log('Swapping audio codec'), e = -1 !== e.indexOf('mp4a.40.5') ? 'mp4a.40.2' : 'mp4a.40.5'), e
        }
        _loadBitrateTestFrag(t, e) {
            t.bitrateTest = !0, this._doFragLoad(t, e).then((s => {
                const {
                    hls: i
                } = this;
                if (!s || this.fragContextChanged(t)) return;
                e.fragmentError = 0, this.state = Gi, this.startFragRequested = !1, this.bitrateTest = !1;
                const r = t.stats;
                r.parsing.start = r.parsing.end = r.buffering.start = r.buffering.end = self.performance.now(), i.trigger(y.FRAG_LOADED, s), t.bitrateTest = !1
            }))
        }
        _handleTransmuxComplete(t) {
            var e;
            const s = 'main',
                {
                    hls: i
                } = this,
                {
                    remuxResult: r,
                    chunkMeta: n
                } = t,
                a = this.getCurrentContext(n);
            if (!a) return void this.resetWhenMissingContext(n);
            const {
                frag: o,
                part: l,
                level: h
            } = a, {
                video: d,
                text: c,
                id3: u,
                initSegment: f
            } = r, {
                details: m
            } = h, p = this.altAudio ? void 0 : r.audio;
            if (this.fragContextChanged(o)) this.fragmentTracker.removeFragment(o);
            else {
                if (this.state = Wi, f) {
                    if (null != f && f.tracks) {
                        const t = o.initSegment || o;
                        this._bufferInitSegment(h, f.tracks, t, n), i.trigger(y.FRAG_PARSING_INIT_SEGMENT, {
                            frag: t,
                            id: s,
                            tracks: f.tracks
                        })
                    }
                    const t = f.initPTS,
                        e = f.timescale;
                    g(t) && (this.initPTS[o.cc] = {
                        baseTime: t,
                        timescale: e
                    }, i.trigger(y.INIT_PTS_FOUND, {
                        frag: o,
                        id: s,
                        initPTS: t,
                        timescale: e
                    }))
                }
                if (d && m && 'initSegment' !== o.sn) {
                    const t = m.fragments[o.sn - 1 - m.startSN],
                        e = o.sn === m.startSN,
                        s = !t || o.cc > t.cc;
                    if (!1 !== r.independent) {
                        const {
                            startPTS: t,
                            endPTS: i,
                            startDTS: r,
                            endDTS: a
                        } = d;
                        if (l) l.elementaryStreams[d.type] = {
                            startPTS: t,
                            endPTS: i,
                            startDTS: r,
                            endDTS: a
                        };
                        else if (d.firstKeyFrame && d.independent && 1 === n.id && !s && (this.couldBacktrack = !0), d.dropped && d.independent) {
                            const r = this.getMainFwdBufferInfo(),
                                n = (r ? r.end : this.getLoadPosition()) + this.config.maxBufferHole,
                                l = d.firstKeyFramePTS ? d.firstKeyFramePTS : t;
                            if (!e && n < l - this.config.maxBufferHole && !s) return void this.backtrack(o);
                            s && (o.gap = !0), o.setElementaryStreamInfo(d.type, o.start, i, o.start, a, !0)
                        } else e && t > 2 && (o.gap = !0);
                        o.setElementaryStreamInfo(d.type, t, i, r, a), this.backtrackFragment && (this.backtrackFragment = o), this.bufferFragmentData(d, o, l, n, e || s)
                    } else {
                        if (!e && !s) return void this.backtrack(o);
                        o.gap = !0
                    }
                }
                if (p) {
                    const {
                        startPTS: t,
                        endPTS: e,
                        startDTS: s,
                        endDTS: i
                    } = p;
                    l && (l.elementaryStreams[P] = {
                        startPTS: t,
                        endPTS: e,
                        startDTS: s,
                        endDTS: i
                    }), o.setElementaryStreamInfo(P, t, e, s, i), this.bufferFragmentData(p, o, l, n)
                }
                if (m && null != u && null != (e = u.samples) && e.length) {
                    const t = {
                        id: s,
                        frag: o,
                        details: m,
                        samples: u.samples
                    };
                    i.trigger(y.FRAG_PARSING_METADATA, t)
                }
                if (m && c) {
                    const t = {
                        id: s,
                        frag: o,
                        details: m,
                        samples: c.samples
                    };
                    i.trigger(y.FRAG_PARSING_USERDATA, t)
                }
            }
        }
        _bufferInitSegment(t, e, s, i) {
            if (this.state !== Wi) return;
            this.audioOnly = !!e.audio && !e.video, this.altAudio && !this.audioOnly && delete e.audio;
            const {
                audio: r,
                video: n,
                audiovideo: a
            } = e;
            if (r) {
                let e = t.audioCodec;
                const s = navigator.userAgent.toLowerCase();
                this.audioCodecSwitch && (e && (e = -1 !== e.indexOf('mp4a.40.5') ? 'mp4a.40.2' : 'mp4a.40.5'), 1 !== r.metadata.channelCount && -1 === s.indexOf('firefox') && (e = 'mp4a.40.5')), e && -1 !== e.indexOf('mp4a.40.5') && -1 !== s.indexOf('android') && 'audio/mpeg' !== r.container && (e = 'mp4a.40.2', this.log(`Android: force audio codec to ${e}`)), t.audioCodec && t.audioCodec !== e && this.log(`Swapping manifest audio codec "${t.audioCodec}" for "${e}"`), r.levelCodec = e, r.id = 'main', this.log(`Init audio buffer, container:${r.container}, codecs[selected/level/parsed]=[${e||''}/${t.audioCodec||''}/${r.codec}]`)
            }
            n && (n.levelCodec = t.videoCodec, n.id = 'main', this.log(`Init video buffer, container:${n.container}, codecs[level/parsed]=[${t.videoCodec||''}/${n.codec}]`)), a && this.log(`Init audiovideo buffer, container:${a.container}, codecs[level/parsed]=[${t.codecs}/${a.codec}]`), this.hls.trigger(y.BUFFER_CODECS, e), Object.keys(e).forEach((t => {
                const r = e[t].initSegment;
                null != r && r.byteLength && this.hls.trigger(y.BUFFER_APPENDING, {
                    type: t,
                    data: r,
                    frag: s,
                    part: null,
                    chunkMeta: i,
                    parent: s.type
                })
            })), this.tickImmediate()
        }
        getMainFwdBufferInfo() {
            return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, He.MAIN)
        }
        backtrack(t) {
            this.couldBacktrack = !0, this.backtrackFragment = t, this.resetTransmuxer(), this.flushBufferGap(t), this.fragmentTracker.removeFragment(t), this.fragPrevious = null, this.nextLoadPosition = t.start, this.state = Gi
        }
        checkFragmentChanged() {
            const t = this.media;
            let e = null;
            if (t && t.readyState > 1 && !1 === t.seeking) {
                const s = t.currentTime;
                if (Ei.isBuffered(t, s) ? e = this.getAppendedFrag(s) : Ei.isBuffered(t, s + .1) && (e = this.getAppendedFrag(s + .1)), e) {
                    this.backtrackFragment = null;
                    const t = this.fragPlaying,
                        s = e.level;
                    t && e.sn === t.sn && t.level === s || (this.fragPlaying = e, this.hls.trigger(y.FRAG_CHANGED, {
                        frag: e
                    }), t && t.level === s || this.hls.trigger(y.LEVEL_SWITCHED, {
                        level: s
                    }))
                }
            }
        }
        get nextLevel() {
            const t = this.nextBufferedFrag;
            return t ? t.level : -1
        }
        get currentFrag() {
            const t = this.media;
            return t ? this.fragPlaying || this.getAppendedFrag(t.currentTime) : null
        }
        get currentProgramDateTime() {
            const t = this.media;
            if (t) {
                const e = t.currentTime,
                    s = this.currentFrag;
                if (s && g(e) && g(s.programDateTime)) {
                    const t = s.programDateTime + 1e3 * (e - s.start);
                    return new Date(t)
                }
            }
            return null
        }
        get currentLevel() {
            const t = this.currentFrag;
            return t ? t.level : -1
        }
        get nextBufferedFrag() {
            const t = this.currentFrag;
            return t ? this.followingBufferedFrag(t) : null
        }
        get forceStartLoad() {
            return this._forceStartLoad
        }
    }
    class Jo {
        static get version() {
            return "1.5.8"
        }
        static isMSESupported() {
            return jo()
        }
        static isSupported() {
            return qo()
        }
        static getMediaSource() {
            return ce()
        }
        static get Events() {
            return y
        }
        static get ErrorTypes() {
            return v
        }
        static get ErrorDetails() {
            return E
        }
        static get DefaultConfig() {
            return Jo.defaultConfig ? Jo.defaultConfig : Uo
        }
        static set DefaultConfig(t) {
            Jo.defaultConfig = t
        }
        constructor(t = {}) {
            this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this.started = !1, this._emitter = new yn, this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null, this.triggeringException = void 0, b(t.debug || !1, 'Hls instance');
            const e = this.config = Bo(Jo.DefaultConfig, t);
            this.userConfig = t, e.progressive && Go(e);
            const {
                abrController: s,
                bufferController: i,
                capLevelController: r,
                errorController: n,
                fpsController: a
            } = e, o = new n(this), l = this.abrController = new s(this), h = this.bufferController = new i(this), d = this.capLevelController = new r(this), c = new a(this), u = new We(this), f = new ns(this), g = e.contentSteeringController, m = g ? new g(this) : null, p = this.levelController = new Ho(this, m), v = new mi(this), E = new Yo(this.config), T = this.streamController = new Qo(this, v, E);
            d.setStreamController(T), c.setStreamController(T);
            const S = [u, p, T];
            m && S.splice(1, 0, m), this.networkControllers = S;
            const L = [l, h, d, c, f, v];
            this.audioTrackController = this.createController(e.audioTrackController, S);
            const A = e.audioStreamController;
            A && S.push(new A(this, v, E)), this.subtitleTrackController = this.createController(e.subtitleTrackController, S);
            const R = e.subtitleStreamController;
            R && S.push(new R(this, v, E)), this.createController(e.timelineController, L), E.emeController = this.emeController = this.createController(e.emeController, L), this.cmcdController = this.createController(e.cmcdController, L), this.latencyController = this.createController(as, L), this.coreComponents = L, S.push(o);
            const D = o.onErrorOut;
            'function' == typeof D && this.on(y.ERROR, D, o)
        }
        createController(t, e) {
            if (t) {
                const s = new t(this);
                return e && e.push(s), s
            }
            return null
        }
        on(t, e, s = this) {
            this._emitter.on(t, e, s)
        }
        once(t, e, s = this) {
            this._emitter.once(t, e, s)
        }
        removeAllListeners(t) {
            this._emitter.removeAllListeners(t)
        }
        off(t, e, s = this, i) {
            this._emitter.off(t, e, s, i)
        }
        listeners(t) {
            return this._emitter.listeners(t)
        }
        emit(t, e, s) {
            return this._emitter.emit(t, e, s)
        }
        trigger(t, e) {
            if (this.config.debug) return this.emit(t, t, e);
            try {
                return this.emit(t, t, e)
            } catch (e) {
                if (D.error('An internal error happened while handling event ' + t + '. Error message: "' + e.message + '". Here is a stacktrace:', e), !this.triggeringException) {
                    this.triggeringException = !0;
                    const s = t === y.ERROR;
                    this.trigger(y.ERROR, {
                        type: v.OTHER_ERROR,
                        details: E.INTERNAL_EXCEPTION,
                        fatal: s,
                        event: t,
                        error: e
                    }), this.triggeringException = !1
                }
            }
            return !1
        }
        listenerCount(t) {
            return this._emitter.listenerCount(t)
        }
        destroy() {
            D.log('destroy'), this.trigger(y.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach((t => t.destroy())), this.networkControllers.length = 0, this.coreComponents.forEach((t => t.destroy())), this.coreComponents.length = 0;
            const t = this.config;
            t.xhrSetup = t.fetchSetup = void 0, this.userConfig = null
        }
        attachMedia(t) {
            D.log('attachMedia'), this._media = t, this.trigger(y.MEDIA_ATTACHING, {
                media: t
            })
        }
        detachMedia() {
            D.log('detachMedia'), this.trigger(y.MEDIA_DETACHING, void 0), this._media = null
        }
        loadSource(t) {
            this.stopLoad();
            const e = this.media,
                s = this.url,
                i = this.url = l.buildAbsoluteURL(self.location.href, t, {
                    alwaysNormalize: !0
                });
            this._autoLevelCapping = -1, this._maxHdcpLevel = null, D.log(`loadSource:${i}`), e && s && (s !== i || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(e)), this.trigger(y.MANIFEST_LOADING, {
                url: t
            })
        }
        startLoad(t = -1) {
            D.log(`startLoad(${t})`), this.started = !0, this.networkControllers.forEach((e => {
                e.startLoad(t)
            }))
        }
        stopLoad() {
            D.log('stopLoad'), this.started = !1, this.networkControllers.forEach((t => {
                t.stopLoad()
            }))
        }
        resumeBuffering() {
            this.started && this.networkControllers.forEach((t => {
                'fragmentLoader' in t && t.startLoad(-1)
            }))
        }
        pauseBuffering() {
            this.networkControllers.forEach((t => {
                'fragmentLoader' in t && t.stopLoad()
            }))
        }
        swapAudioCodec() {
            D.log('swapAudioCodec'), this.streamController.swapAudioCodec()
        }
        recoverMediaError() {
            D.log('recoverMediaError');
            const t = this._media;
            this.detachMedia(), t && this.attachMedia(t)
        }
        removeLevel(t) {
            this.levelController.removeLevel(t)
        }
        get levels() {
            const t = this.levelController.levels;
            return t || []
        }
        get currentLevel() {
            return this.streamController.currentLevel
        }
        set currentLevel(t) {
            D.log(`set currentLevel:${t}`), this.levelController.manualLevel = t, this.streamController.immediateLevelSwitch()
        }
        get nextLevel() {
            return this.streamController.nextLevel
        }
        set nextLevel(t) {
            D.log(`set nextLevel:${t}`), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch()
        }
        get loadLevel() {
            return this.levelController.level
        }
        set loadLevel(t) {
            D.log(`set loadLevel:${t}`), this.levelController.manualLevel = t
        }
        get nextLoadLevel() {
            return this.levelController.nextLoadLevel
        }
        set nextLoadLevel(t) {
            this.levelController.nextLoadLevel = t
        }
        get firstLevel() {
            return Math.max(this.levelController.firstLevel, this.minAutoLevel)
        }
        set firstLevel(t) {
            D.log(`set firstLevel:${t}`), this.levelController.firstLevel = t
        }
        get startLevel() {
            const t = this.levelController.startLevel;
            return -1 === t && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : t
        }
        set startLevel(t) {
            D.log(`set startLevel:${t}`), -1 !== t && (t = Math.max(t, this.minAutoLevel)), this.levelController.startLevel = t
        }
        get capLevelToPlayerSize() {
            return this.config.capLevelToPlayerSize
        }
        set capLevelToPlayerSize(t) {
            const e = !!t;
            e !== this.config.capLevelToPlayerSize && (e ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e)
        }
        get autoLevelCapping() {
            return this._autoLevelCapping
        }
        get bandwidthEstimate() {
            const {
                bwEstimator: t
            } = this.abrController;
            return t ? t.getEstimate() : NaN
        }
        set bandwidthEstimate(t) {
            this.abrController.resetEstimator(t)
        }
        get ttfbEstimate() {
            const {
                bwEstimator: t
            } = this.abrController;
            return t ? t.getEstimateTTFB() : NaN
        }
        set autoLevelCapping(t) {
            this._autoLevelCapping !== t && (D.log(`set autoLevelCapping:${t}`), this._autoLevelCapping = t, this.levelController.checkMaxAutoUpdated())
        }
        get maxHdcpLevel() {
            return this._maxHdcpLevel
        }
        set maxHdcpLevel(t) {
            ls(t) && this._maxHdcpLevel !== t && (this._maxHdcpLevel = t, this.levelController.checkMaxAutoUpdated())
        }
        get autoLevelEnabled() {
            return -1 === this.levelController.manualLevel
        }
        get manualLevel() {
            return this.levelController.manualLevel
        }
        get minAutoLevel() {
            const {
                levels: t,
                config: {
                    minAutoBitrate: e
                }
            } = this;
            if (!t) return 0;
            const s = t.length;
            for (let i = 0; i < s; i++)
                if (t[i].maxBitrate >= e) return i;
            return 0
        }
        get maxAutoLevel() {
            const {
                levels: t,
                autoLevelCapping: e,
                maxHdcpLevel: s
            } = this;
            let i;
            if (i = -1 === e && null != t && t.length ? t.length - 1 : e, s)
                for (let e = i; e--;) {
                    const i = t[e].attrs['HDCP-LEVEL'];
                    if (i && i <= s) return e
                }
            return i
        }
        get firstAutoLevel() {
            return this.abrController.firstAutoLevel
        }
        get nextAutoLevel() {
            return this.abrController.nextAutoLevel
        }
        set nextAutoLevel(t) {
            this.abrController.nextAutoLevel = t
        }
        get playingDate() {
            return this.streamController.currentProgramDateTime
        }
        get mainForwardBufferInfo() {
            return this.streamController.getMainFwdBufferInfo()
        }
        setAudioOption(t) {
            var e;
            return null == (e = this.audioTrackController) ? void 0 : e.setAudioOption(t)
        }
        setSubtitleOption(t) {
            var e;
            return null == (e = this.subtitleTrackController) || e.setSubtitleOption(t), null
        }
        get allAudioTracks() {
            const t = this.audioTrackController;
            return t ? t.allAudioTracks : []
        }
        get audioTracks() {
            const t = this.audioTrackController;
            return t ? t.audioTracks : []
        }
        get audioTrack() {
            const t = this.audioTrackController;
            return t ? t.audioTrack : -1
        }
        set audioTrack(t) {
            const e = this.audioTrackController;
            e && (e.audioTrack = t)
        }
        get allSubtitleTracks() {
            const t = this.subtitleTrackController;
            return t ? t.allSubtitleTracks : []
        }
        get subtitleTracks() {
            const t = this.subtitleTrackController;
            return t ? t.subtitleTracks : []
        }
        get subtitleTrack() {
            const t = this.subtitleTrackController;
            return t ? t.subtitleTrack : -1
        }
        get media() {
            return this._media
        }
        set subtitleTrack(t) {
            const e = this.subtitleTrackController;
            e && (e.subtitleTrack = t)
        }
        get subtitleDisplay() {
            const t = this.subtitleTrackController;
            return !!t && t.subtitleDisplay
        }
        set subtitleDisplay(t) {
            const e = this.subtitleTrackController;
            e && (e.subtitleDisplay = t)
        }
        get lowLatencyMode() {
            return this.config.lowLatencyMode
        }
        set lowLatencyMode(t) {
            this.config.lowLatencyMode = t
        }
        get liveSyncPosition() {
            return this.latencyController.liveSyncPosition
        }
        get latency() {
            return this.latencyController.latency
        }
        get maxLatency() {
            return this.latencyController.maxLatency
        }
        get targetLatency() {
            return this.latencyController.targetLatency
        }
        get drift() {
            return this.latencyController.drift
        }
        get forceStartLoad() {
            return this.streamController.forceStartLoad
        }
    }
    n.default = n.Hls = Jo, Jo.defaultConfig = void 0
}), "c419c8", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.VideoDataAttributes = void 0, e.useDataAttributes = function() {
        const {
            videoElem: n
        } = (0, t.useContext)(s.PrivateVideoHooksContext);
        return {
            setVideoDataAttribute: (0, t.useCallback)(((t, s) => {
                if (n) switch (typeof s) {
                    case 'string':
                        n.dataset[t] = s;
                        break;
                    case 'boolean':
                        n.dataset[t] = `${s}`;
                        break;
                    case 'undefined':
                        delete n.dataset[t]
                }
            }), [n])
        }
    };
    var t = r(d[0]),
        s = r(d[1]);
    e.VideoDataAttributes = (function(t) {
        return t.AudioDescriptionsEnabled = "audioDescriptionsEnabled", t.ClosedCaptionsEnabled = "closedCaptionsEnabled", t.PreferredLanguage = "preferredLanguage", t.SubtitlesEnabled = "subtitlesEnabled", t
    })({})
}), "d8151c", ["07aa1f", "1cb72d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CaptionPreferencesContext = void 0, e.CaptionPreferencesProvider = function({
        children: t
    }) {
        const [s, o] = (0, n.useReducer)(l, u), b = n.default.useMemo((() => ({
            state: s,
            dispatch: o
        })), [s, o]);
        return (0, c.jsx)(f.Provider, {
            value: b,
            children: t
        })
    };
    var n = t(r(d[1])),
        s = r(d[2]),
        c = r(d[3]);

    function o(t, n, c) {
        if (t.audioDescriptionsEnabled) return;
        const o = t.closedCaptionsEnabled ? [...c, ...n] : [...n, ...c];
        return (0, s.findTrackWithMatchingLanguage)(t ? .trackPreference ? .language, o) ? ? o[0]
    }

    function l(t, n) {
        switch (n.type) {
            case 'captionPrefs/updateTrackPreference':
                return { ...t,
                    trackPreference: n.trackPreference
                };
            case 'captionPrefs/toggleSubtitles':
                {
                    const s = { ...t,
                        subtitlesEnabled: n.enabled ? ? !t.subtitlesEnabled
                    };
                    return { ...s,
                        trackPreference: o(s, n.sortedSubtitleTracks, n.sortedClosedCaptionsTracks)
                    }
                }
            case 'captionPrefs/toggleClosedCaptions':
                {
                    const s = { ...t,
                        closedCaptionsEnabled: n.enabled ? ? !t.closedCaptionsEnabled
                    };
                    return { ...s,
                        trackPreference: o(s, n.sortedSubtitleTracks, n.sortedClosedCaptionsTracks)
                    }
                }
            case 'captionPrefs/toggleAudioDescriptions':
                return { ...t,
                    audioDescriptionsEnabled: n.enabled ? ? !t.audioDescriptionsEnabled,
                    subtitlesEnabled: !1
                };
            default:
                return t
        }
    }
    const u = {
            subtitlesEnabled: !1,
            closedCaptionsEnabled: !1,
            trackPreference: void 0,
            audioDescriptionsEnabled: !1
        },
        f = e.CaptionPreferencesContext = (0, n.createContext)(null)
}), "ebb310", ["45f788", "07aa1f", "8f3cbe", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.findClosestLanguageForUser = function(t) {
        if (!t || 0 === t.length) return;
        let n = l.default.locale();
        'en' === n && (n = 'en-US');
        const u = l.default.language();
        return (t.find((({
            language: t
        }) => t === n)) || t.find((({
            language: t
        }) => t.startsWith(`${u}-`))) || t.find((({
            language: t
        }) => t === u))) ? .language
    }, e.getLanguageDisplayName = c, e.getLanguageOption = f, e.getTextTrackDisplayName = function(t, n = !1) {
        return c(t.language, n, (0, s.trackHasClosedCaptions)(t)) ? ? c(t.label, n, (0, s.trackHasClosedCaptions)(t))
    }, e.normalizeVideoVenderLocale = o;
    var n = t(r(d[1])),
        l = t(r(d[2])),
        u = t(r(d[3])),
        s = r(d[4]);

    function o(t) {
        return 'en' === t ? 'en-US' : 'sr' === t ? 'sr-RS' : 'es-XL' === t ? 'es-419' : t.startsWith('fil') ? 'tl' : t
    }

    function f(t) {
        if (!t) return {};
        t = o(t);
        let n = !1,
            l = (0, u.default)().find((({
                locale: n
            }) => t === n));
        return l || (l = (0, u.default)().find((({
            locale: n
        }) => n.startsWith(`${t}-`))), n = !0), {
            languageConfig: l,
            isPartialMatch: n
        }
    }

    function c(t, l = !1, u = !1) {
        const {
            languageConfig: s,
            isPartialMatch: o
        } = f(t);
        if (!s) return;
        const c = u ? n.default.t('dls_media.track_language_label_sdh', {
                language: s.title,
                region: s.subtitle
            }) : n.default.t('dls_media.track_language_label', {
                language: s.title,
                region: s.subtitle
            }),
            _ = u ? n.default.t('dls_media.track_language_label_sdh_no_region', {
                language: s.title
            }) : s.title;
        return l && !o ? c : _
    }
}), "f25634", ["ba7a76", "a9f4b1", "862e50", "a51e3b", "8f3cbe"]);
__r("a9f4b1").extend({
    "dls_media.track_language_label_sdh": "%{language} (%{region}) SDH",
    "dls_media.track_language_label": "%{language} (%{region})",
    "dls_media.track_language_label_sdh_no_region": "%{language} SDH"
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/8aff.591d78d825.js.map