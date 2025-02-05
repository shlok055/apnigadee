__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = r(d[2]),
        o = n(r(d[3])),
        s = t(r(d[4])),
        c = r(d[5]),
        u = t(r(d[6])),
        f = t(r(d[7])),
        p = t(r(d[8])),
        y = t(r(d[9])),
        v = r(d[10]);
    e.default = (0, s.default)(u.default, (0, c.withStyles)((({
        dls19: t
    }) => ({
        container: { ...(0, f.default)(t).body,
            display: 'flex',
            alignItems: 'center'
        },
        ctaButton: {
            flexShrink: 0,
            minWidth: 148
        },
        leftContent: {
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: 16
        },
        reviewRating: {
            marginTop: 4
        }
    }))), o.memo)((function(t) {
        const n = (0, l.c)(27),
            {
                css: s,
                ctaButton: c,
                experimentData: u,
                isLoading: f,
                loggingData: x,
                reviewItem: h,
                structuredDisplayPrice: j,
                styles: w,
                theme: B,
                injectedCtaButtonProps: C
            } = t,
            {
                dls19: D
            } = B,
            {
                palette: b,
                typography: S
            } = D;
        let L, R, z, P, I, _;
        return n[0] !== s || n[1] !== w.container ? (L = s(w.container), n[0] = s, n[1] = w.container, n[2] = L) : L = n[2], n[3] !== s || n[4] !== u || n[5] !== f || n[6] !== b || n[7] !== h || n[8] !== j || n[9] !== w.leftContent || n[10] !== w.reviewRating || n[11] !== S ? (R = j && (0, v.jsxs)("div", { ...s(w.leftContent),
            children: [(0, v.jsx)(p.default, {
                isLoading: f,
                primaryLineQualifierSize: S.base.md,
                primaryLineSize: S.base.lg,
                secondaryLineColor: b.hof,
                secondaryLineSize: S.base.sm,
                structuredDisplayPrice: j,
                wrapItems: !1
            }), h && (0, o.createElement)("div", { ...s(w.reviewRating),
                key: "review-rating-line"
            }, (0, v.jsx)(y.default, { ...h,
                experimentData: u,
                iconSize: 10,
                textSize: "sm"
            }))]
        }), n[3] = s, n[4] = u, n[5] = f, n[6] = b, n[7] = h, n[8] = j, n[9] = w.leftContent, n[10] = w.reviewRating, n[11] = S, n[12] = R) : R = n[12], n[13] !== s || n[14] !== w.ctaButton ? (z = s(w.ctaButton), n[13] = s, n[14] = w.ctaButton, n[15] = z) : z = n[15], n[16] !== c || n[17] !== C || n[18] !== x ? (P = (0, v.jsx)(c, {
            buttonType: "BRAND",
            loggingData: x,
            injectedCtaButtonProps: C,
            fullWidth: !0
        }), n[16] = c, n[17] = C, n[18] = x, n[19] = P) : P = n[19], n[20] !== z || n[21] !== P ? (I = (0, v.jsx)("div", { ...z,
            children: P
        }), n[20] = z, n[21] = P, n[22] = I) : I = n[22], n[23] !== L || n[24] !== R || n[25] !== I ? (_ = (0, v.jsxs)("div", { ...L,
            "data-testid": "book-it-default",
            children: [R, I]
        }), n[23] = L, n[24] = R, n[25] = I, n[26] = _) : _ = n[26], _
    }))
}), "1b3257", ["ba7a76", "45f788", "87eb11", "07aa1f", "5010f2", "e0b084", "7837c8", "ad1abc", "dc9dd9", "fac737", "b8c07d"]);
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
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = r(d[2]),
        l = n(r(d[3])),
        s = r(d[4]),
        c = r(d[5]),
        u = r(d[6]),
        f = t(r(d[7])),
        v = t(r(d[8])),
        b = r(d[9]);

    function p(t) {
        return t ? .stickyNavButton
    }
    e.default = (0, c.withStyles)((({
        dls19: t
    }) => ({
        bookItNavContainer: {
            display: 'none',
            whiteSpace: 'nowrap'
        },
        bookItNavContainer_visible: {
            display: 'block',
            marginLeft: 40
        },
        flexContainer: {
            alignItems: 'center',
            display: 'flex',
            position: 'absolute',
            right: 0,
            transform: 'translateY(-50%)',
            backgroundColor: t.palette.white
        },
        container: {
            position: 'relative'
        }
    })))(l.default.memo((function(t) {
        const n = (0, o.c)(26),
            {
                css: l,
                experimentData: c,
                metadata: k,
                section: C,
                sectionContentStatus: h,
                styles: y
            } = t,
            I = p;
        let x;
        const S = !!k ? .bookingPrefetchData ? .isHotelRatePlanEnabled;
        let N;
        n[0] !== S ? (N = {
            isHotelRatePlanEnabled: S,
            shouldLayoutOpenPopupCalendar: !0
        }, n[0] = S, n[1] = N) : N = n[1], x = N;
        const P = x,
            [w] = (0, u.useUIState)(s.ShowStickyNav, !1),
            [B] = (0, u.useUIState)(s.ShowBookItInStickyNav, !1);
        if (!k) return null;
        let _, j;
        n[2] !== l || n[3] !== y.container ? (_ = l(y.container), n[2] = l, n[3] = y.container, n[4] = _) : _ = n[4], n[5] !== l || n[6] !== y.flexContainer ? (j = l(y.flexContainer), n[5] = l, n[6] = y.flexContainer, n[7] = j) : j = n[7];
        const D = B && w && y.bookItNavContainer_visible;
        let L, O, E, H, R;
        return n[8] !== l || n[9] !== y.bookItNavContainer || n[10] !== D ? (L = l(y.bookItNavContainer, D), n[8] = l, n[9] = y.bookItNavContainer, n[10] = D, n[11] = L) : L = n[11], n[12] !== c || n[13] !== P || n[14] !== C || n[15] !== h ? (O = (0, b.jsx)(f.default, {
            bookItBarLayout: v.default,
            experimentData: c,
            getButtonDataByPlacement: I,
            handleCTAButtonPressOptions: P,
            section: C,
            sectionContentStatus: h,
            skipPrefetchOnLoad: !0
        }), n[12] = c, n[13] = P, n[14] = C, n[15] = h, n[16] = O) : O = n[16], n[17] !== L || n[18] !== O ? (E = (0, b.jsx)("div", { ...L,
            children: O
        }), n[17] = L, n[18] = O, n[19] = E) : E = n[19], n[20] !== j || n[21] !== E ? (H = (0, b.jsx)("div", { ...j,
            children: E
        }), n[20] = j, n[21] = E, n[22] = H) : H = n[22], n[23] !== H || n[24] !== _ ? (R = (0, b.jsx)("div", { ..._,
            children: H
        }), n[23] = H, n[24] = _, n[25] = R) : R = n[25], R
    })))
}), "ea7d3e", ["ba7a76", "45f788", "87eb11", "07aa1f", "d7c0b4", "e0b084", "afdc80", "1a963c", "1b3257", "b8c07d"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-stays-pdp-sections/sections/BookItNav/index.a771d02ded.js.map