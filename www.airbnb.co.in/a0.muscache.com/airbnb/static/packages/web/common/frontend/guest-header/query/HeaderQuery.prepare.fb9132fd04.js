__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isExperienceHostURL = function(t, s) {
        return !('true' !== s ? .exp_host && 'experience_host' !== s ? .inbox_type && !t ? .startsWith('/messaging/exp-host'))
    }, e.isHostURL = function(t, s) {
        return !('true' !== s ? .host && 'host' !== s ? .inbox_type && !t ? .startsWith('/hosting/thread') && !t ? .startsWith('/messaging/hosting'))
    };
    var t = r(d[0]);
    t.InboxType.EXPERIENCE_HOST, t.InboxType.HOST, t.InboxType.GUEST, t.InboxType.EXPERIENCE_HOST, t.InboxType.HOST, t.InboxType.GUEST
}), "529ec9", ["a5723b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.VIDEO_FILE_TYPES = e.TYPING_TIMEOUT = e.STROKE_WIDTH = e.SEND_STATUS = e.SEND_IMAGE_STANDARD_ACTION = e.QUOTED_MESSAGE_DATA_NAME = e.QUICK_REPLIES_HELP_ARTICLE = e.MORE_COMPOSE_BAR_MENU_PORTAL_ID = e.MORE_COMPOSE_BAR_ACTIONS_BUTTON = e.MESSAGING_THREAD_CONTAINER_NAME = e.MESSAGE_INTERVAL_THRESHOLD = e.MESSAGE_CONTENT_DATA_NAME = e.MESSAGE_CONTENT = e.MESSAGE_CONTAINER = e.MESSAGE_BOTTOM_MARGIN = e.MAX_CONTENT_WIDTH = e.MARK_THREAD_READ_DELAY = e.MARGIN_BOTTOM_LAST_ITEM = e.InboxType = e.IMAGE_FILE_TYPES = e.DrawingState = e.DEFAULT_PROFILE_PIC = e.CARD_MAX_WIDTH = e.BreakpointName = e.BESSIE_ACCOUNT_TYPES = e.AVATAR_SIZE = e.AVATAR_DATA_NAME = e.ALL_FILE_TYPES = void 0;
    e.MESSAGE_BOTTOM_MARGIN = 10, e.DEFAULT_PROFILE_PIC = 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3', e.MESSAGE_INTERVAL_THRESHOLD = 18e5, e.MARK_THREAD_READ_DELAY = 1e3, e.MORE_COMPOSE_BAR_ACTIONS_BUTTON = 'left-panel-icon-button', e.MORE_COMPOSE_BAR_MENU_PORTAL_ID = 'messaging-compose-bar-menu-portal', e.SEND_IMAGE_STANDARD_ACTION = 'messaging__open_image_upload_dialog';
    e.BESSIE_ACCOUNT_TYPES = (function(E) {
        return E.AGENT = "agent", E.USER = "user", E.SERVICE = "service", E.EXTERNAL_SERVICE = "external_service", E.LUX = "luxury_agent", E.AIRWAVE = "airwave", E
    })({});
    e.MAX_CONTENT_WIDTH = 688, e.QUICK_REPLIES_HELP_ARTICLE = '/resources/hosting-homes/a/using-quick-replies-to-save-time-73';
    const E = e.IMAGE_FILE_TYPES = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'],
        _ = e.VIDEO_FILE_TYPES = ['video/mp4', 'video/mov', 'video/quicktime'];
    e.ALL_FILE_TYPES = [...E, ..._], e.MESSAGE_CONTENT = '--message-content', e.MESSAGE_CONTAINER = '--message-container', e.TYPING_TIMEOUT = 8e3;
    var T = (function(E) {
        return E.HOST = "HOST", E
    })(T || {});
    e.SEND_STATUS = {
        DRAFT: 'draft',
        FAILED: 'failed',
        NONE: 'none',
        SENDING: 'sending',
        SENT: 'sent'
    };
    e.InboxType = (function(E) {
        return E.GUEST = "guest", E.HOST = "host", E.EXPERIENCE_HOST = "experience_host", E.AIRWAVE = "airwave", E.AGENT_TICKETS = "agent_tickets", E.UNKNOWN = "unknown", E
    })({});
    e.BreakpointName = {
        XLARGE: 'xlarge',
        LARGE: 'large',
        MEDIUM: 'medium',
        SMALL: 'small',
        XSMALL: 'xsmall'
    };
    var N = (function(E) {
        return E.all = "all", E.hidden = "hidden", E.unread = "unread", E.starred = "starred", E
    })(N || {});
    e.MESSAGING_THREAD_CONTAINER_NAME = 'message-thread-container', e.CARD_MAX_WIDTH = 379, e.MARGIN_BOTTOM_LAST_ITEM = 16, e.AVATAR_DATA_NAME = 'message-avatar', e.MESSAGE_CONTENT_DATA_NAME = 'message-content-wrapper', e.QUOTED_MESSAGE_DATA_NAME = 'quoted-message-wrapper', e.AVATAR_SIZE = 36;
    e.DrawingState = (function(E) {
        return E[E.ROOT_VIEWER = 0] = "ROOT_VIEWER", E[E.ROOT_NON_VIEWER = 1] = "ROOT_NON_VIEWER", E[E.SUB_ROOT_VIEWER_HAS_NEXT_AND_NEXT_IS_VIEWER = 2] = "SUB_ROOT_VIEWER_HAS_NEXT_AND_NEXT_IS_VIEWER", E[E.SUB_ROOT_VIEWER_HAS_NEXT_AND_NEXT_IS_NON_VIEWER = 3] = "SUB_ROOT_VIEWER_HAS_NEXT_AND_NEXT_IS_NON_VIEWER", E[E.SUB_ROOT_NON_VIEWER_HAS_NEXT = 4] = "SUB_ROOT_NON_VIEWER_HAS_NEXT", E[E.SUB_ROOT_VIEWER_NO_NEXT = 5] = "SUB_ROOT_VIEWER_NO_NEXT", E[E.SUB_ROOT_NON_VIEWER_NO_NEXT = 6] = "SUB_ROOT_NON_VIEWER_NO_NEXT", E[E.BETWEEN_VIEWER_NEXT_IS_VIEWER = 7] = "BETWEEN_VIEWER_NEXT_IS_VIEWER", E[E.BETWEEN_VIEWER_NEXT_IS_NON_VIEWER = 8] = "BETWEEN_VIEWER_NEXT_IS_NON_VIEWER", E[E.BETWEEN_NON_VIEWER = 9] = "BETWEEN_NON_VIEWER", E[E.LAST_VIEWER = 10] = "LAST_VIEWER", E[E.LAST_NON_VIEWER = 11] = "LAST_NON_VIEWER", E[E.NONE = 12] = "NONE", E
    })({});
    e.STROKE_WIDTH = 2
}), "a5723b", []);
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
    var t = r(d[0]).default;

    function n() {
        const c = t(r(d[1]));
        return n = function() {
            return c
        }, c
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.getHeaderQueryRef = s;
    var c = r(d[2]),
        o = t(r(d[3]));

    function s(t, s, u, l, h, p, f = "EXPLORE", v = !1) {
        const y = n().default.parse(l.search),
            R = 'server-render' === p || 'client-hydration' === p;
        return t({
            query: o.default,
            variables: {
                cdnCacheSafe: u,
                hasLoggedIn: '1' === s('hli'),
                isInitialLoad: R,
                source: f
            },
            deferrable: v,
            skip: h || (0, c.isHostURL)(l.pathname, y) || (0, c.isExperienceHostURL)(l.pathname, y)
        })
    }
    e.default = ({
        cookie: t,
        initialPageCDNCached: n,
        location: c,
        loadQuery: o,
        getRenderingState: u,
        customPrepareNiobeData: l
    }) => {
        const h = u();
        let p = !1,
            f = !1;
        c.pathname.match(/experiences\/\d+/) && 'client-render' !== h && (p = !0), c.pathname.match(/book\/(experiences|stays)\/\d+/) && (p = !0), '/giftcards' === c.pathname && (p = !0);
        let v = n;
        return 'client-render' !== h && '/' === c.pathname && (v = !0), l.launchPdpUncaching && 'client-render' !== h && (v = !0), l.skipExploreHeader && (f = !0), {
            headerQueryRef: s(o, t, v, c, p, h, void 0, f)
        }
    }
}), "c809a3", ["ba7a76", "e950a3", "529ec9", "b4ed06"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/guest-header/query/HeaderQuery.prepare.352d709f6d.js.map