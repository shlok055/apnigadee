__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SIDEBAR_COLUMN_SPAN = e.MAIN_COLUMN_SPAN = e.COLUMN_GAP = e.COLUMN_COUNT = void 0;
    e.MAIN_COLUMN_SPAN = {
        mediumAndAbove: 6,
        mediumPlusAndAbove: 7
    }, e.SIDEBAR_COLUMN_SPAN = {
        mediumAndAbove: 5,
        mediumPlusAndAbove: 4
    }, e.COLUMN_GAP = 16, e.COLUMN_COUNT = 12
}), "05454f", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, n) {
        if (n && !n.isBefore(t)) return n;
        return (0, u.default)().add(3, f.YEARS).endOf(f.MONTH)
    };
    var u = t(r(d[1])),
        f = r(d[2])
}), "11c102", ["ba7a76", "1772c9", "cb52fb"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, ...u) {
        return u.reduce(((t, u) => u(t)), t)
    }
}), "1673a5", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        s = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = s(r(d[2])),
        n = s(r(d[3])),
        l = s(r(d[4])),
        h = t(r(d[5])),
        c = s(r(d[6])),
        u = s(r(d[7])),
        f = s(r(d[8])),
        D = s(r(d[9])),
        v = s(r(d[10])),
        M = s(r(d[11])),
        b = s(r(d[12])),
        y = s(r(d[13])),
        p = s(r(d[14])),
        N = s(r(d[15])),
        O = s(r(d[16])),
        T = s(r(d[17])),
        k = s(r(d[18])),
        S = s(r(d[19])),
        F = r(d[20]),
        I = s(r(d[21])),
        E = r(d[22]),
        R = s(r(d[23])),
        A = r(d[24]);
    const C = {
            alternateFocusedInput: !0,
            startDate: null,
            endDate: null,
            minDate: null,
            maxDate: null,
            focusedInput: E.FocusedInput.START_DATE,
            focusedDateOverride: null,
            onDatesChange() {},
            startDateOffset: null,
            endDateOffset: null,
            minimumNights: 1,
            disabled: void 0,
            isOutsideRange: () => !1,
            isDayBlocked: () => !1,
            isDayHighlighted: () => !1,
            getMinNightsForHoverDate: () => 0,
            daysViolatingMinNightsCanBeClicked: !1,
            openKeyboardShortcutsPanel() {},
            renderMonthText: void 0,
            enableOutsideDays: !1,
            numberOfMonths: 1,
            orientation: E.CalendarOrientation.HORIZONTAL,
            withPortal: !1,
            initialVisibleMonth: void 0,
            daySize: E.DEFAULT_CALENDAR_DAY_SIZE,
            dayPickerNavigationInlineStyles: void 0,
            navPosition: E.NavPosition.NAV_POSITION_TOP,
            navPrev: void 0,
            navNext: void 0,
            renderNavPrevButton: void 0,
            renderNavNextButton: void 0,
            noNavButtons: !1,
            noNavNextButton: !1,
            noNavPrevButton: !1,
            onPrevMonthClick() {},
            onNextMonthClick() {},
            onOutsideClick() {},
            renderCalendarDay: void 0,
            renderCalendarInfo: void 0,
            renderMonthElement: void 0,
            calendarInfoPosition: E.CalendarInfoPosition.INFO_POSITION_TOP,
            firstDayOfWeek: void 0,
            verticalHeight: void 0,
            transitionDuration: void 0,
            verticalBorderSpacing: E.VERTICAL_BORDER_SPACING,
            horizontalMonthPadding: E.DEFAULT_HORIZONTAL_MONTH_PADDING,
            onBlur() {},
            isFocused: !1,
            onTab() {},
            onShiftTab() {},
            skipTabKeydownHandlers: !1,
            monthStartingHeadingLevel: 3,
            dayAriaLabelFormat: void 0,
            adjustHeightScheduling: 'raf'
        },
        P = (t, s) => s === E.FocusedInput.START_DATE ? t.chooseAvailableStartDate : t.chooseAvailableEndDate;
    class B extends o.default.PureComponent {
        constructor(t) {
            super(t), this.isRTL = void 0, this.isTouchDevice = void 0, this.modifiers = void 0, this.today = void 0, this.isRTL = t.direction === h.DIRECTIONS.RTL, this.isTouchDevice = (0, l.default)(), this.today = (0, n.default)(), this.modifiers = {
                today: t => this.isToday(t),
                blocked: t => this.isBlocked(t),
                'blocked-calendar': s => t.isDayBlocked(s),
                'blocked-out-of-range': s => t.isOutsideRange(s),
                'highlighted-calendar': s => t.isDayHighlighted(s),
                valid: t => !this.isBlocked(t),
                'selected-start': t => this.isStartDate(t),
                'selected-end': t => this.isEndDate(t),
                'blocked-minimum-nights': t => this.doesNotMeetMinimumNights(t),
                'selected-span': t => this.isInSelectedSpan(t),
                'last-in-range': t => this.isLastInRange(t),
                hovered: t => this.isHovered(t),
                'hovered-span': t => this.isInHoveredSpan(t),
                'hovered-offset': t => this.isInHoveredSpan(t),
                'after-hovered-start': t => this.isDayAfterHoveredStartDate(t),
                'first-day-of-week': t => this.isFirstDayOfWeek(t),
                'last-day-of-week': t => this.isLastDayOfWeek(t),
                'first-day-of-month': t => (0, k.default)(t),
                'last-day-of-month': t => (0, S.default)(t),
                'hovered-start-first-possible-end': (t, s) => this.isFirstPossibleEndDateForHoveredStartDate(t, s),
                'hovered-start-blocked-minimum-nights': (t, s) => this.doesNotMeetMinNightsForHoveredStartDate(t, s),
                'before-hovered-end': t => this.isDayBeforeHoveredEndDate(t),
                'no-selected-start-before-selected-end': s => this.beforeSelectedEnd(s) && !t.startDate,
                'selected-start-in-hovered-span': (t, s) => this.isStartDate(t) && (0, y.default)(s || null, t),
                'selected-end-in-hovered-span': (t, s) => this.isEndDate(t) && (0, y.default)(s || null, t),
                'selected-start-no-selected-end': s => this.isStartDate(s) && !t.endDate,
                'selected-end-no-selected-start': s => this.isEndDate(s) && !t.startDate
            };
            const {
                currentMonth: s,
                visibleDays: o
            } = this.getStateForNewMonth(t), c = t.phrases || (0, u.default)(), f = P(c, t.focusedInput);
            this.state = {
                hoverDate: null,
                currentMonth: s,
                phrases: { ...c,
                    chooseAvailableDate: f
                },
                visibleDays: o,
                disablePrev: this.shouldDisableMonthNavigation(t.minDate, s),
                disableNext: this.shouldDisableMonthNavigation(t.maxDate, s),
                numberOfScrollableMonths: t.numberOfMonths
            }, this.onDayClick = this.onDayClick.bind(this), this.onDayMouseEnter = this.onDayMouseEnter.bind(this), this.onDayMouseLeave = this.onDayMouseLeave.bind(this), this.onPrevMonthClick = this.onPrevMonthClick.bind(this), this.onNextMonthClick = this.onNextMonthClick.bind(this), this.onMonthChange = this.onMonthChange.bind(this), this.onYearChange = this.onYearChange.bind(this), this.onGetNextScrollableMonths = this.onGetNextScrollableMonths.bind(this), this.onGetPrevScrollableMonths = this.onGetPrevScrollableMonths.bind(this), this.getFirstFocusableDay = this.getFirstFocusableDay.bind(this)
        }
        UNSAFE_componentWillReceiveProps(t) {
            const {
                startDate: s,
                endDate: o,
                focusedDateOverride: l,
                minDate: h,
                maxDate: c,
                focusedInput: f,
                getMinNightsForHoverDate: v,
                minimumNights: M,
                isOutsideRange: y,
                isDayBlocked: N,
                isDayHighlighted: O,
                phrases: T,
                numberOfMonths: k,
                enableOutsideDays: S,
                orientation: F
            } = t, {
                startDate: I,
                endDate: R,
                focusedDateOverride: A,
                focusedInput: C,
                minimumNights: B,
                isOutsideRange: _,
                isDayBlocked: L,
                isDayHighlighted: x,
                phrases: H,
                numberOfMonths: j,
                enableOutsideDays: w
            } = this.props, {
                currentMonth: G,
                hoverDate: W
            } = this.state;
            let {
                visibleDays: V
            } = this.state, z = !1, K = !1, Y = !1;
            y !== _ && (this.modifiers['blocked-out-of-range'] = t => y(t), z = !0), N !== L && (this.modifiers['blocked-calendar'] = t => N(t), K = !0), O !== x && (this.modifiers['highlighted-calendar'] = t => O(t), Y = !0);
            const Z = z || K || Y,
                U = s !== I,
                q = o !== R,
                J = l !== A,
                Q = f !== C;
            if (k !== j || S !== w) {
                const s = this.getStateForNewMonth(t),
                    {
                        currentMonth: o
                    } = s;
                ({
                    visibleDays: V
                } = s), this.setState({
                    currentMonth: o,
                    visibleDays: V
                })
            }
            let X;
            const $ = G.clone().startOf('month'),
                ee = G.clone().add(k - 1, 'month').endOf('month');
            if (F === E.CalendarOrientation.HORIZONTAL && J && (l ? .isBefore($) || l ? .isAfter(ee))) {
                const s = this.getStateForNewMonth(t);
                ({
                    currentMonth: X
                } = s), ({
                    visibleDays: V
                } = s), this.setState({
                    currentMonth: X,
                    disablePrev: this.shouldDisableMonthNavigation(h, G),
                    disableNext: this.shouldDisableMonthNavigation(c, G),
                    visibleDays: V
                })
            }
            let te = {};
            if (U) {
                if (te = this.deleteModifier(te, I, 'selected-start'), te = this.addModifier(te, s, 'selected-start', X ? {
                        currentMonth: X,
                        visibleDays: V
                    } : void 0), I) {
                    const t = I.clone().add(1, 'day'),
                        s = I.clone().add(B + 1, 'days');
                    te = this.deleteModifierFromRange(te, t, s, 'after-hovered-start'), o && R || (te = this.deleteModifier(te, I, 'selected-start-no-selected-end'))
                }!I && (o || R) && s && (te = this.deleteModifier(te, o, 'selected-end-no-selected-start'), te = this.deleteModifier(te, o, 'selected-end-in-hovered-span'), Object.values(V).forEach((t => {
                    Object.keys(t).forEach((t => {
                        const s = (0, n.default)(t);
                        te = this.deleteModifier(te, s, 'no-selected-start-before-selected-end')
                    }))
                })))
            }
            if (q && (te = this.deleteModifier(te, R, 'selected-end'), te = this.addModifier(te, o, 'selected-end', X ? {
                    currentMonth: X,
                    visibleDays: V
                } : void 0), !R || s && I || (te = this.deleteModifier(te, R, 'selected-end-no-selected-start')), !R && o && (te = this.deleteModifier(te, I, 'selected-start-in-hovered-span'))), (U || q) && (I && R && (te = this.deleteModifierFromRange(te, I, R.clone().add(1, 'day'), 'selected-span')), s && o && (te = this.deleteModifierFromRange(te, s, o.clone().add(1, 'day'), 'hovered-span'), te = this.addModifierToRange(te, s.clone().add(1, 'day'), o, 'selected-span', X ? {
                    currentMonth: X,
                    visibleDays: V
                } : void 0), te = this.deleteModifier(te, s, 'selected-start-no-selected-end')), s && !o && (te = this.addModifier(te, s, 'selected-start-no-selected-end')), o && !s && (te = this.addModifier(te, o, 'selected-end-no-selected-start')), !s && o && Object.values(V).forEach((t => {
                    Object.keys(t).forEach((t => {
                        const s = (0, n.default)(t);
                        (0, p.default)(s, o) && (te = this.addModifier(te, s, 'no-selected-start-before-selected-end'))
                    }))
                }))), !this.isTouchDevice && U && s && !o) {
                const t = s.clone().add(1, 'day'),
                    o = s.clone().add(M + 1, 'days');
                te = this.addModifierToRange(te, t, o, 'after-hovered-start')
            }
            if (!this.isTouchDevice && q && !s && o) {
                const t = o.clone().subtract(M, 'days'),
                    s = o.clone();
                te = this.addModifierToRange(te, t, s, 'before-hovered-end')
            }
            if (B > 0 && (Q || U || M !== B)) {
                const t = I || this.today;
                te = this.deleteModifierFromRange(te, t, t.clone().add(B, 'days'), 'blocked-minimum-nights'), te = this.deleteModifierFromRange(te, t, t.clone().add(B, 'days'), 'blocked')
            }
            if ((Q || Z) && Object.values(V).forEach((t => {
                    Object.keys(t).forEach((t => {
                        const s = (0, D.default)(t);
                        let o = !1;
                        const n = z || K;
                        (Q || n) && (y(s) ? (te = this.addModifier(te, s, 'blocked-out-of-range'), o = !0) : te = this.deleteModifier(te, s, 'blocked-out-of-range')), (Q || n) && (N(s) ? (te = this.addModifier(te, s, 'blocked-calendar'), o = !0) : te = this.deleteModifier(te, s, 'blocked-calendar')), void 0 !== o && (te = o ? this.addModifier(te, s, 'blocked') : this.deleteModifier(te, s, 'blocked')), (Q || Y) && (te = O(s) ? this.addModifier(te, s, 'highlighted-calendar') : this.deleteModifier(te, s, 'highlighted-calendar'))
                    }))
                })), !this.isTouchDevice && Q && W && !this.isBlocked(W)) {
                const t = v(W);
                t > 0 && f === E.FocusedInput.END_DATE && (te = this.deleteModifierFromRange(te, W.clone().add(1, 'days'), W.clone().add(t, 'days'), 'hovered-start-blocked-minimum-nights'), te = this.deleteModifier(te, W.clone().add(t, 'days'), 'hovered-start-first-possible-end')), t > 0 && f === E.FocusedInput.START_DATE && (te = this.addModifierToRange(te, W.clone().add(1, 'days'), W.clone().add(t, 'days'), 'hovered-start-blocked-minimum-nights'), te = this.addModifier(te, W.clone().add(t, 'days'), 'hovered-start-first-possible-end'))
            }
            M > 0 && s && f === E.FocusedInput.END_DATE && (te = this.addModifierToRange(te, s, s.clone().add(M, 'days'), 'blocked-minimum-nights'), te = this.addModifierToRange(te, s, s.clone().add(M, 'days'), 'blocked'));
            const se = (0, n.default)();
            if ((0, b.default)(this.today, se) || (te = this.deleteModifier(te, this.today, 'today'), te = this.addModifier(te, se, 'today'), this.today = se), Object.keys(te).length > 0 && this.setState({
                    visibleDays: { ...V,
                        ...te
                    }
                }), Q || T !== H) {
                const t = T || (0, u.default)(),
                    s = P(t, f);
                this.setState({
                    phrases: { ...t,
                        chooseAvailableDate: s
                    }
                })
            }
        }
        onDayClick(t, s) {
            const {
                alternateFocusedInput: o,
                minimumNights: n,
                onBlur: l,
                focusedInput: h,
                onDatesChange: c,
                startDateOffset: u,
                endDateOffset: f,
                disabled: D,
                daysViolatingMinNightsCanBeClicked: M
            } = this.props;
            if (s && s.preventDefault(), this.isBlocked(t, !M)) return;
            let {
                startDate: b,
                endDate: N
            } = this.props;
            if (u || f) {
                if (b = (0, O.default)(u, t), N = (0, O.default)(f, t), this.isBlocked(b) || this.isBlocked(N)) return;
                c({
                    startDate: b,
                    endDate: N,
                    focusedInput: h
                })
            } else if (h === E.FocusedInput.START_DATE) {
                const s = N && N.clone().subtract(n, 'days'),
                    o = (0, p.default)(s, t) || (0, y.default)(b, N),
                    l = D === E.FocusedInput.END_DATE;
                l && o || (b = t, o && (N = null)), c(l && !o ? {
                    startDate: b,
                    endDate: N,
                    focusedInput: E.FocusedInput.START_DATE
                } : l ? {
                    startDate: b,
                    endDate: N,
                    focusedInput: h
                } : {
                    startDate: b,
                    endDate: N,
                    focusedInput: E.FocusedInput.END_DATE
                })
            } else if (h === E.FocusedInput.END_DATE) {
                const s = b && b.clone().add(n, 'days');
                b ? (0, v.default)(t, s) ? (N = t, c({
                    startDate: b,
                    endDate: N,
                    focusedInput: o ? E.FocusedInput.START_DATE : h
                })) : M && this.doesNotMeetMinimumNights(t) ? (N = t, c({
                    startDate: b,
                    endDate: N,
                    focusedInput: h
                })) : D !== E.FocusedInput.START_DATE ? (b = t, N = null, c({
                    startDate: b,
                    endDate: N,
                    focusedInput: h
                })) : c({
                    startDate: b,
                    endDate: N,
                    focusedInput: h
                }) : (N = t, c({
                    startDate: b,
                    endDate: N,
                    focusedInput: E.FocusedInput.START_DATE
                }))
            } else c({
                startDate: b,
                endDate: N,
                focusedInput: h
            });
            l()
        }
        onDayMouseEnter(t) {
            if (this.isTouchDevice) return;
            const {
                startDate: s,
                endDate: o,
                focusedInput: n,
                getMinNightsForHoverDate: l,
                minimumNights: h,
                startDateOffset: c,
                endDateOffset: u
            } = this.props, {
                hoverDate: f,
                visibleDays: D,
                dateOffset: v
            } = this.state;
            let M = null;
            if (n) {
                const N = c || u;
                let T = {};
                if (N) {
                    const s = (0, O.default)(c, t),
                        o = (0, O.default)(u, t, (t => t.add(1, 'day')));
                    M = {
                        start: s,
                        end: o
                    }, v && v.start && v.end && (T = this.deleteModifierFromRange(T, v.start, v.end, 'hovered-offset')), T = this.addModifierToRange(T, s, o, 'hovered-offset')
                }
                if (!N) {
                    if (T = this.deleteModifier(T, f, 'hovered'), T = this.addModifier(T, t, 'hovered'), s && !o && n === E.FocusedInput.END_DATE) {
                        if (f && (0, y.default)(f, s)) {
                            const t = f.clone().add(1, 'day');
                            T = this.deleteModifierFromRange(T, s, t, 'hovered-span')
                        }
                        if (((0, p.default)(t, s) || (0, b.default)(t, s)) && (T = this.deleteModifier(T, s, 'selected-start-in-hovered-span')), !this.isBlocked(t) && (0, y.default)(t, s)) {
                            const o = t.clone().add(1, 'day');
                            T = this.addModifierToRange(T, s, o, 'hovered-span'), T = this.addModifier(T, s, 'selected-start-in-hovered-span')
                        }
                    }
                    if (!s && o && n === E.FocusedInput.START_DATE && (f && (0, p.default)(f, o) && (T = this.deleteModifierFromRange(T, f, o, 'hovered-span')), ((0, y.default)(t, o) || (0, b.default)(t, o)) && (T = this.deleteModifier(T, o, 'selected-end-in-hovered-span')), !this.isBlocked(t) && (0, p.default)(t, o) && (T = this.addModifierToRange(T, t, o, 'hovered-span'), T = this.addModifier(T, o, 'selected-end-in-hovered-span'))), s) {
                        const o = s.clone().add(1, 'day'),
                            n = s.clone().add(h + 1, 'days');
                        if (T = this.deleteModifierFromRange(T, o, n, 'after-hovered-start'), (0, b.default)(t, s)) {
                            const t = s.clone().add(1, 'day'),
                                o = s.clone().add(h + 1, 'days');
                            T = this.addModifierToRange(T, t, o, 'after-hovered-start')
                        }
                    }
                    if (o) {
                        const s = o.clone().subtract(h, 'days');
                        if (T = this.deleteModifierFromRange(T, s, o, 'before-hovered-end'), (0, b.default)(t, o)) {
                            const t = o.clone().subtract(h, 'days');
                            T = this.addModifierToRange(T, t, o, 'before-hovered-end')
                        }
                    }
                    if (f && !this.isBlocked(f)) {
                        const t = l(f);
                        t > 0 && n === E.FocusedInput.START_DATE && (T = this.deleteModifierFromRange(T, f.clone().add(1, 'days'), f.clone().add(t, 'days'), 'hovered-start-blocked-minimum-nights'), T = this.deleteModifier(T, f.clone().add(t, 'days'), 'hovered-start-first-possible-end'))
                    }
                    if (!this.isBlocked(t)) {
                        const s = l(t);
                        s > 0 && n === E.FocusedInput.START_DATE && (T = this.addModifierToRange(T, t.clone().add(1, 'days'), t.clone().add(s, 'days'), 'hovered-start-blocked-minimum-nights'), T = this.addModifier(T, t.clone().add(s, 'days'), 'hovered-start-first-possible-end'))
                    }
                }
                this.setState({
                    hoverDate: t,
                    dateOffset: M,
                    visibleDays: { ...D,
                        ...T
                    }
                })
            }
        }
        onDayMouseLeave(t) {
            const {
                startDate: s,
                endDate: o,
                focusedInput: n,
                getMinNightsForHoverDate: l,
                minimumNights: h
            } = this.props, {
                hoverDate: c,
                visibleDays: u,
                dateOffset: f
            } = this.state;
            if (this.isTouchDevice || !c) return;
            let D = {};
            if (D = this.deleteModifier(D, c, 'hovered'), f && (D = this.deleteModifierFromRange(D, f.start, f.end, 'hovered-offset')), s && !o) {
                if ((0, y.default)(c, s)) {
                    const t = c.clone().add(1, 'day');
                    D = this.deleteModifierFromRange(D, s, t, 'hovered-span')
                }(0, y.default)(t, s) && (D = this.deleteModifier(D, s, 'selected-start-in-hovered-span'))
            }
            if (!s && o && ((0, y.default)(o, c) && (D = this.deleteModifierFromRange(D, c, o, 'hovered-span')), (0, p.default)(t, o) && (D = this.deleteModifier(D, o, 'selected-end-in-hovered-span'))), s && (0, b.default)(t, s)) {
                const t = s.clone().add(1, 'day'),
                    o = s.clone().add(h + 1, 'days');
                D = this.deleteModifierFromRange(D, t, o, 'after-hovered-start')
            }
            if (o && (0, b.default)(t, o)) {
                const t = o.clone().subtract(h, 'days');
                D = this.deleteModifierFromRange(D, t, o, 'before-hovered-end')
            }
            if (!this.isBlocked(c)) {
                const t = l(c);
                t > 0 && n === E.FocusedInput.START_DATE && (D = this.deleteModifierFromRange(D, c.clone().add(1, 'days'), c.clone().add(t, 'days'), 'hovered-start-blocked-minimum-nights'), D = this.deleteModifier(D, c.clone().add(t, 'days'), 'hovered-start-first-possible-end'))
            }
            this.setState({
                hoverDate: null,
                visibleDays: { ...u,
                    ...D
                }
            })
        }
        onPrevMonthClick() {
            const {
                enableOutsideDays: t,
                maxDate: s,
                minDate: o,
                numberOfMonths: n,
                onPrevMonthClick: l
            } = this.props, {
                currentMonth: h,
                visibleDays: c
            } = this.state, u = {};
            Object.keys(c).sort().slice(0, n + 1).forEach((t => {
                u[t] = c[t]
            }));
            const f = h.clone().subtract(2, 'months'),
                D = (0, I.default)(f, 1, t, !0),
                v = h.clone().subtract(1, 'month');
            this.setState({
                currentMonth: v,
                disablePrev: this.shouldDisableMonthNavigation(o, v),
                disableNext: this.shouldDisableMonthNavigation(s, v),
                visibleDays: { ...u,
                    ...this.getModifiers(D)
                }
            }, (() => {
                l(v.clone())
            }))
        }
        onNextMonthClick() {
            const {
                enableOutsideDays: t,
                maxDate: s,
                minDate: o,
                numberOfMonths: n,
                onNextMonthClick: l
            } = this.props, {
                currentMonth: h,
                visibleDays: c
            } = this.state, u = {};
            Object.keys(c).sort().slice(1).forEach((t => {
                u[t] = c[t]
            }));
            const f = h.clone().add(n + 1, 'month'),
                D = (0, I.default)(f, 1, t, !0),
                v = h.clone().add(1, 'month');
            this.setState({
                currentMonth: v,
                disablePrev: this.shouldDisableMonthNavigation(o, v),
                disableNext: this.shouldDisableMonthNavigation(s, v),
                visibleDays: { ...u,
                    ...this.getModifiers(D)
                }
            }, (() => {
                l(v.clone())
            }))
        }
        onMonthChange(t) {
            const {
                numberOfMonths: s,
                enableOutsideDays: o,
                orientation: n
            } = this.props, l = n === E.CalendarOrientation.VERTICAL_SCROLLABLE, h = (0, I.default)(t, s, o, l);
            this.setState({
                currentMonth: t.clone(),
                visibleDays: this.getModifiers(h)
            })
        }
        onYearChange(t) {
            const {
                numberOfMonths: s,
                enableOutsideDays: o,
                orientation: n
            } = this.props, l = n === E.CalendarOrientation.VERTICAL_SCROLLABLE, h = (0, I.default)(t, s, o, l);
            this.setState({
                currentMonth: t.clone(),
                visibleDays: this.getModifiers(h)
            })
        }
        onGetNextScrollableMonths() {
            const {
                maxDate: t,
                numberOfMonths: s,
                enableOutsideDays: o,
                onNextMonthClick: n
            } = this.props, {
                currentMonth: l,
                numberOfScrollableMonths: h,
                visibleDays: u
            } = this.state, f = Object.keys(u).length, D = l.clone().add(f, 'month');
            let v = s;
            if (t) {
                const o = (0, c.default)(D, t);
                s > 1 && o < s && (v = o + 1)
            }
            const M = (0, I.default)(D, v, o, !0);
            this.setState({
                disableNext: v < s || this.shouldDisableMonthNavigation(t, D),
                visibleDays: { ...u,
                    ...this.getModifiers(M)
                },
                numberOfScrollableMonths: h + v
            }, (() => {
                n(l.clone())
            }))
        }
        onGetPrevScrollableMonths() {
            const {
                minDate: t,
                numberOfMonths: s,
                enableOutsideDays: o,
                onPrevMonthClick: n
            } = this.props, {
                currentMonth: l,
                numberOfScrollableMonths: h,
                visibleDays: u
            } = this.state;
            let f = s;
            if (t) {
                const o = (0, c.default)(t, l);
                s > 1 && o < s && (f = o)
            }
            const D = l.clone().subtract(f, 'month'),
                v = (0, I.default)(D, f, o, !0);
            this.setState({
                currentMonth: D.clone(),
                disablePrev: f < s || this.shouldDisableMonthNavigation(t, D),
                visibleDays: { ...u,
                    ...this.getModifiers(v)
                },
                numberOfScrollableMonths: h + f
            }, (() => {
                n(D.clone())
            }))
        }
        getFirstFocusableDay(t) {
            const {
                startDate: s,
                endDate: o,
                focusedInput: n,
                minimumNights: l,
                numberOfMonths: h
            } = this.props;
            let c = t.clone().startOf('month');
            if (n === E.FocusedInput.START_DATE && s ? c = s.clone() : n === E.FocusedInput.END_DATE && !o && s ? c = s.clone().add(l, 'days') : n === E.FocusedInput.END_DATE && o && (c = o.clone()), this.isBlocked(c)) {
                const s = [],
                    o = t.clone().add(h - 1, 'months').endOf('month');
                let n = c.clone();
                for (; !(0, y.default)(n, o);) n = n.clone().add(1, 'day'), s.push(n);
                const l = s.filter((t => !this.isBlocked(t)));
                l.length > 0 && ([c] = l)
            }
            return c
        }
        getModifiers(t) {
            const s = {};
            return Object.keys(t).forEach((o => {
                s[o] = {}, t[o].forEach((t => {
                    s[o][(0, T.default)(t)] = this.getModifiersForDay(t)
                }))
            })), s
        }
        getModifiersForDay(t) {
            return new Set(Object.keys(this.modifiers).filter((s => {
                const o = this.modifiers[s];
                return !!o && o(t)
            })))
        }
        getStateForNewMonth(t) {
            const {
                enableOutsideDays: s,
                initialVisibleMonth: o,
                numberOfMonths: n,
                orientation: l,
                startDate: h
            } = t, c = l === E.CalendarOrientation.VERTICAL_SCROLLABLE, u = (o || (h ? () => h : () => this.today))(), f = c;
            return {
                currentMonth: u,
                visibleDays: this.getModifiers((0, I.default)(u, n, s, f))
            }
        }
        shouldDisableMonthNavigation(t, s) {
            if (!t) return !1;
            const {
                numberOfMonths: o,
                enableOutsideDays: n
            } = this.props;
            return (0, f.default)(t, s, o, n)
        }
        addModifier(t, s, o, n) {
            return (0, F.addModifier)(t, s, o, this.props, n || this.state)
        }
        addModifierToRange(t, s, o, n, l) {
            let h = t,
                c = s.clone();
            for (;
                (0, p.default)(c, o);) h = this.addModifier(h, c, n, l), c = c.clone().add(1, 'day');
            return h
        }
        deleteModifier(t, s, o) {
            return (0, F.deleteModifier)(t, s, o, this.props, this.state)
        }
        deleteModifierFromRange(t, s, o, n) {
            let l = t,
                h = s.clone();
            for (;
                (0, p.default)(h, o);) l = this.deleteModifier(l, h, n), h = h.clone().add(1, 'day');
            return l
        }
        doesNotMeetMinimumNights(t) {
            const {
                startDate: s,
                isOutsideRange: o,
                focusedInput: l,
                minimumNights: h
            } = this.props;
            if (l !== E.FocusedInput.END_DATE) return !1;
            if (s) {
                const o = t.diff(s.clone().startOf('day').hour(12), 'days');
                return o < h && o >= 0
            }
            return o((0, n.default)(t).subtract(h, 'days'))
        }
        doesNotMeetMinNightsForHoveredStartDate(t, s) {
            const {
                focusedInput: o,
                getMinNightsForHoverDate: n
            } = this.props;
            if (o !== E.FocusedInput.END_DATE) return !1;
            if (s && !this.isBlocked(s)) {
                const o = n(s),
                    l = t.diff(s.clone().startOf('day').hour(12), 'days');
                return l < o && l >= 0
            }
            return !1
        }
        isDayAfterHoveredStartDate(t) {
            const {
                startDate: s,
                endDate: o,
                minimumNights: n
            } = this.props, {
                hoverDate: l
            } = this.state || {};
            return !!s && !o && !this.isBlocked(t) && (0, M.default)(l, t) && n > 0 && (0, b.default)(l, s)
        }
        isEndDate(t) {
            const {
                endDate: s
            } = this.props;
            return (0, b.default)(t, s)
        }
        isHovered(t) {
            const {
                hoverDate: s
            } = this.state || {}, {
                focusedInput: o
            } = this.props;
            return !!o && (0, b.default)(t, s)
        }
        isInHoveredSpan(t) {
            const {
                startDate: s,
                endDate: o
            } = this.props, {
                hoverDate: n
            } = this.state || {}, l = !!s && !o && t.isBetween(s, n, 'days', '(]'), h = !!o && !s && t.isBetween(n, o, 'days', '[)'), c = n && !this.isBlocked(n);
            return !(!l && !h || !c)
        }
        isInSelectedSpan(t) {
            const {
                startDate: s,
                endDate: o
            } = this.props;
            return t.isBetween(s, o, 'days')
        }
        isLastInRange(t) {
            const {
                endDate: s
            } = this.props;
            return this.isInSelectedSpan(t) && (0, M.default)(t, s)
        }
        isStartDate(t) {
            const {
                startDate: s
            } = this.props;
            return (0, b.default)(t, s)
        }
        isBlocked(t, s = !0) {
            const {
                isDayBlocked: o,
                isOutsideRange: n
            } = this.props;
            return o(t) || n(t) || s && this.doesNotMeetMinimumNights(t)
        }
        isToday(t) {
            return (0, b.default)(t, this.today)
        }
        isFirstDayOfWeek(t) {
            const {
                firstDayOfWeek: s
            } = this.props;
            return t.day() === (s || n.default.localeData().firstDayOfWeek())
        }
        isLastDayOfWeek(t) {
            const {
                firstDayOfWeek: s
            } = this.props;
            return t.day() === ((s || n.default.localeData().firstDayOfWeek()) + 6) % 7
        }
        isFirstPossibleEndDateForHoveredStartDate(t, s) {
            const {
                focusedInput: o,
                getMinNightsForHoverDate: n
            } = this.props;
            if (o !== E.FocusedInput.END_DATE || !s || this.isBlocked(s)) return !1;
            const l = n(s),
                h = s.clone().add(l, 'days');
            return (0, b.default)(t, h)
        }
        beforeSelectedEnd(t) {
            const {
                endDate: s
            } = this.props;
            return (0, p.default)(t, s)
        }
        isDayBeforeHoveredEndDate(t) {
            const {
                startDate: s,
                endDate: o,
                minimumNights: n
            } = this.props, {
                hoverDate: l
            } = this.state || {};
            return !!o && !s && !this.isBlocked(t) && (0, N.default)(l, t) && n > 0 && (0, b.default)(l, o)
        }
        render() {
            const {
                calendarInfoPosition: t,
                dayAriaLabelFormat: s,
                daySize: o,
                enableOutsideDays: n,
                firstDayOfWeek: l,
                focusedDateOverride: h,
                horizontalMonthPadding: c,
                isFocused: u,
                monthStartingHeadingLevel: f,
                navNextLoggingData: D,
                navPosition: v,
                navPreviousLoggingData: M,
                noNavButtons: b,
                noNavNextButton: y,
                noNavPrevButton: p,
                numberOfMonths: N,
                onBlur: O,
                onOutsideClick: T,
                onShiftTab: k,
                onTab: S,
                skipTabKeydownHandlers: F,
                openKeyboardShortcutsPanel: I,
                orientation: E,
                renderCalendarDay: C,
                renderCalendarInfo: P,
                renderMonthElement: B,
                renderMonthText: _,
                renderNavNextButton: L,
                renderNavPrevButton: x,
                transitionDuration: H,
                verticalBorderSpacing: j,
                verticalHeight: w,
                withPortal: G,
                adjustHeightScheduling: W
            } = this.props, {
                currentMonth: V,
                disableNext: z,
                disablePrev: K,
                numberOfScrollableMonths: Y,
                phrases: Z,
                visibleDays: U
            } = this.state;
            return (0, A.jsx)(R.default, {
                currentMonth: V,
                calendarInfoPosition: t,
                dayAriaLabelFormat: s,
                daySize: o,
                disableNext: z,
                disablePrev: K,
                enableOutsideDays: n,
                firstDayOfWeek: l,
                focusedDateOverride: h,
                getFirstFocusableDay: this.getFirstFocusableDay,
                horizontalMonthPadding: c,
                isFocused: u,
                isRTL: this.isRTL,
                modifiers: U,
                monthStartingHeadingLevel: f,
                navPosition: v,
                navPreviousLoggingData: M,
                navNextLoggingData: D,
                noNavButtons: b,
                noNavNextButton: y,
                noNavPrevButton: p,
                numberOfMonths: N,
                numberOfScrollableMonths: Y,
                onBlur: O,
                onDayClick: this.onDayClick,
                onDayMouseEnter: this.onDayMouseEnter,
                onDayMouseLeave: this.onDayMouseLeave,
                onGetNextScrollableMonths: this.onGetNextScrollableMonths,
                onGetPrevScrollableMonths: this.onGetPrevScrollableMonths,
                onMonthChange: this.onMonthChange,
                onNextMonthClick: this.onNextMonthClick,
                onOutsideClick: T,
                onPrevMonthClick: this.onPrevMonthClick,
                onShiftTab: k,
                onTab: S,
                skipTabKeydownHandlers: F,
                onYearChange: this.onYearChange,
                openKeyboardShortcutsPanel: I,
                orientation: E,
                phrases: Z,
                renderCalendarDay: C,
                renderCalendarInfo: P,
                renderMonthElement: B,
                renderMonthText: _,
                renderNavNextButton: L,
                renderNavPrevButton: x,
                transitionDuration: H,
                verticalBorderSpacing: j,
                verticalHeight: w,
                withPortal: G,
                adjustHeightScheduling: W
            })
        }
    }
    B.defaultProps = C;
    e.default = (0, h.default)(B)
}), "19c129", ["45f788", "ba7a76", "07aa1f", "1772c9", "48213b", "cfdcdc", "f34c58", "d46ef4", "84eda3", "9b631d", "28361a", "a23818", "b516fd", "456c8a", "8d7453", "60c351", "eee857", "8d224a", "abe0e9", "ace94c", "2281a1", "a47106", "cb52fb", "d2a4f0", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = n(r(d[2])),
        l = t(r(d[3])),
        s = t(r(d[4])),
        u = t(r(d[5])),
        h = t(r(d[6])),
        D = r(d[7]),
        c = t(r(d[8])),
        f = r(d[9]),
        M = t(r(d[10])),
        C = t(r(d[11])),
        N = t(r(d[12])),
        O = r(d[13]);
    const v = () => {};
    e.default = (0, h.default)((function({
        daysViolatingMinNightsCanBeClicked: t = !1,
        daySize: n = f.DEFAULT_CALENDAR_DAY_SIZE,
        displayedMonth: u,
        endDate: h,
        focusedInput: P,
        getMinNightsForHoverDate: y,
        horizontalMonthPadding: L,
        initialVisibleMonth: I,
        isDayBlocked: _,
        isDayHighlighted: A,
        isOutsideRange: S,
        maxDate: T,
        minNightsForStartDate: k = 1,
        monthStartingHeadingLevel: x = 3,
        monthsNavNextLoggingData: E = null,
        monthsNavPreviousLoggingData: H = null,
        numberOfMonths: R = 2,
        onDatesChange: p,
        onNextMonthClick: b,
        onOutsideClick: B = v,
        onPrevMonthClick: V,
        openKeyboardShortcutsPanel: F,
        orientation: z = f.CalendarOrientation.HORIZONTAL,
        renderCalendarDay: j,
        renderMonthText: G,
        renderMonthElement: K,
        startDate: Y,
        availabilityType: Z
    }) {
        const U = z === f.CalendarOrientation.VERTICAL_SCROLLABLE,
            q = (0, c.default)(Z),
            w = (0, o.useMemo)((() => (0, l.default)()), []),
            J = (0, o.useMemo)((() => (0, l.default)().startOf(f.MONTH)), []),
            Q = (0, o.useMemo)((() => (0, M.default)(w, T)), []),
            W = (0, O.jsx)(N.default, {
                calendarInfoPosition: f.CalendarInfoPosition.INFO_POSITION_TOP,
                daysViolatingMinNightsCanBeClicked: t,
                daySize: n + f.CALENDAR_DAY_SPACING,
                endDate: h,
                focusedInput: P,
                getMinNightsForHoverDate: y,
                horizontalMonthPadding: L,
                initialVisibleMonth: I,
                isDayBlocked: _,
                isDayHighlighted: A,
                isOutsideRange: S,
                maxDate: Q,
                minDate: J,
                minimumNights: k,
                monthStartingHeadingLevel: x,
                noNavPrevButton: U && (0, C.default)(u.clone().startOf(f.MONTH), w.clone().startOf(f.MONTH)),
                numberOfMonths: R,
                onDatesChange: p,
                onNextMonthClick: b,
                onPrevMonthClick: V,
                openKeyboardShortcutsPanel: F,
                orientation: z,
                phrases: q,
                renderCalendarDay: j,
                renderMonthText: G,
                renderMonthElement: K,
                navPreviousLoggingData: H,
                navNextLoggingData: E,
                startDate: Y,
                transitionDuration: (0, D.isIos)() ? 0 : void 0,
                verticalBorderSpacing: f.VERTICAL_BORDER_SPACING
            });
        return U ? W : (0, O.jsx)(s.default, {
            onOutsideClick: () => {
                B()
            },
            children: W
        })
    }), o.default.memo, (0, u.default)('DatePicker', ['onDatesChange']))
}), "19de9e", ["ba7a76", "45f788", "07aa1f", "1772c9", "e48ec7", "9092d5", "1673a5", "e9b7bf", "d46ef4", "cb52fb", "11c102", "6c237b", "19c129", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = r(d[1]),
        s = r(d[2]),
        o = t(r(d[3])),
        n = r(d[4]);
    const c = (0, l.extendStyles)(n.calendarDayCellContentsStylesFn, (({
        dls19: t
    }) => ({
        special: {
            border: `1px solid ${t.palette.arches}`,
            ':hover': {
                border: `1px solid ${t.palette.arches}`
            }
        }
    })));
    e.default = (0, s.withStyles)(c)(o.default)
}), "22a16a", ["ba7a76", "01b367", "e0b084", "9ceadf", "d27bb8"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, f) {
        return !(!t || !f) && !(0, u.default)(t, f)
    };
    var u = t(r(d[1]))
}), "28361a", ["ba7a76", "8d7453"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.BaseAvailabilityCalendarDatePicker = function({
        calendarPlacement: t,
        clearDatesButtonTitle: n,
        clearDatesButtonLoggingData: T,
        dayLastTyped: L,
        dayLastTypedErrorMessage: P,
        disableSaveDatesButton: z = !1,
        endDate: $,
        findDayResource: X,
        focusedInput: q,
        height: J,
        hideClearDatesButton: Q = !1,
        hideKeyboardShortcutsPanel: ee = !0,
        horizontalMonthPadding: ae,
        isCheckInInputFocused: te,
        isCheckOutInputFocused: ne,
        maxDate: se,
        minNights: oe,
        monthsNavNextLoggingData: le,
        monthsNavPreviousLoggingData: re,
        numberOfMonths: ie = 1,
        onDatePickerError: de,
        onDatesClear: ue,
        onDatesChangeFromDatePicker: ce,
        onDatesSave: De = W,
        onDayLastClickedChange: he,
        onKeyboardShortcutsClose: fe,
        onKeyboardShortcutsOpen: ge,
        onMinNightsChange: ye,
        onMobileNavNextClick: Ce,
        onMobileNavPrevClick: Ie,
        onNextMonthClick: Ee,
        onPrevMonthClick: Se,
        orientation: ke,
        renderStaysCalendarDay: Ne = Z,
        saveDatesButtonLoggingData: be,
        saveDatesButtonTitle: me,
        selectCheckOutOnlyDateLoggingData: pe,
        selectDateLoggingData: Te,
        selectMaxNightsViolationDateLoggingData: Me,
        selectMinNightsViolationDateLoggingData: ve,
        selectUnavailableForCheckInDateLoggingData: _e,
        selectUnavailableForCheckoutDateLoggingData: Le,
        showCalendar: Pe,
        showSaveDatesButton: Oe,
        startDate: Ae,
        getInitialDisplayedMonth: Re = () => Ae || (0, u.default)(),
        linariaClassNames: Fe
    }) {
        const xe = (0, D.useCx)(),
            Be = (0, s.useRef)((0, u.default)()),
            je = (0, s.useRef)((0, l.default)()),
            we = (0, I.default)() === I.FORM_FACTOR.COMPACT,
            Ke = ke === N.CalendarOrientation.VERTICAL_SCROLLABLE,
            Ve = t || '',
            ze = (0, F.default)({
                day: Ae,
                findDayResource: X
            }) || oe || 1,
            [Ue, He] = (0, s.useState)(Ae && !$ ? Ae : null),
            [We, Ge] = (0, s.useState)(),
            [Ye, Ze] = (0, s.useState)((() => Re())),
            [$e, Xe] = (0, s.useState)(null),
            [qe, Je] = (0, s.useState)(!1),
            [Qe, ea] = (0, s.useState)(!1),
            [aa, ta] = (0, s.useState)(Pe),
            na = (0, s.useCallback)((() => {
                He(null), Xe(null), Je(!1)
            }), []),
            sa = (0, s.useCallback)((() => {
                Ge(Y({
                    calendarPlacement: t,
                    horizontalMonthPadding: ae,
                    isCompact: we,
                    isVerticalScrollableCalendar: Ke,
                    numberOfMonths: ie
                }))
            }), [t, ae, we, Ke, ie]);
        (0, s.useEffect)((() => {
            Be.current = (0, u.default)()
        }), []), (0, s.useEffect)((() => {
            sa()
        }), [sa]), (0, s.useEffect)((() => {
            ta(Pe)
        }), [Pe]), (0, s.useEffect)((() => {
            ye && ye(ze)
        }), [ze, ye]), (0, s.useEffect)((() => {
            let t;
            return Qe && (t = setTimeout((() => {
                ea(!1)
            }), H)), () => {
                clearTimeout(t)
            }
        }), [Qe]), (0, s.useEffect)((() => {
            L && He(L)
        }), [L]), (0, s.useEffect)((() => {
            let t;
            return P && (Xe(P), Je(!0), de && de(P), t = setTimeout((() => {
                ea(P !== v.DatePickerError.UNAVAILABLE && je.current)
            }), 0)), () => {
                clearTimeout(t)
            }
        }), [P, q, je, de]), (0, s.useEffect)((() => {
            Ue && qe && $e === v.DatePickerError.DOES_NOT_MEET_MIN_NIGHTS && !Ae && he && he(Ue)
        }), [Ue, $e, he, qe, Ae]), (0, s.useEffect)((() => {
            q === N.FocusedInput.END_DATE && ze > 1 && ea(je.current)
        }), [q, je, ze]), (0, C.default)((() => {
            if (t === v.CalendarPlacement.INLINE) {
                const t = Ae && (2 === ie ? (0, p.default)(Ae, Ye) || (0, p.default)(Ae, Ye.clone().add(1, N.MONTH)) : (0, p.default)(Ae, Ye));
                Ae && !t && (ta(!1), Ze(Ae.clone()), setTimeout((() => ta(Pe))))
            }
        }), [Ae]);
        const [oa] = (0, c().useDebouncedCallback)((() => {
            sa()
        }), v.WINDOW_RESIZE_DELAY), la = (0, s.useCallback)((t => (0, x.default)({
            day: t,
            findDayResource: X
        })), [X]), ra = (0, s.useCallback)((t => {
            const {
                showErrorMessage: n
            } = (0, R.default)({
                day: t,
                findDayResource: X,
                focusedInput: q,
                startDate: Ae
            });
            return n
        }), [X, q, Ae]), ia = (0, s.useCallback)((t => (0, w.default)({
            day: t,
            findDayResource: X,
            focusedInput: q,
            startDate: Ae
        })), [X, q, Ae]), da = (0, s.useCallback)((t => Ae && $ || (0, B.default)({
            day: t,
            findDayResource: X
        }) || (0, j.default)({
            day: t,
            findDayResource: X
        }) || (0, O.default)({
            day: t,
            findDayResource: X
        }) ? 0 : (0, F.default)({
            day: t,
            findDayResource: X
        })), [$, X, Ae]), ua = (0, s.useCallback)((() => {
            na()
        }), [na]), ca = (0, s.useCallback)((() => {
            na(), ue && ue()
        }), [ue, na]), Da = (0, s.useCallback)((t => {
            Ze(t.clone()), Je(!1), Xe(null), Se && Se(t.clone())
        }), [Se]), ha = (0, s.useCallback)((t => {
            Ze(t.clone()), Je(!1), Xe(null), Ee && Ee(t.clone())
        }), [Ee]), fa = (0, s.useCallback)((t => {
            Ze(t), Ie && Ie(t)
        }), [Ie]), ga = (0, s.useCallback)((({
            startDate: t,
            endDate: n
        }) => {
            const s = q === N.FocusedInput.START_DATE ? t : n;
            if (Ke && q === N.FocusedInput.START_DATE && (0, b.default)(s, Ue)) return;
            const {
                errorMessage: o,
                showErrorMessage: l
            } = (0, R.default)({
                day: s,
                findDayResource: X,
                focusedInput: q,
                startDate: t
            });
            l && (q === N.FocusedInput.START_DATE && (t = null, n = null), q === N.FocusedInput.END_DATE && (n = null), (0, V.default)({
                component: 'DatePicker',
                errorMessage: o,
                method: 'onDatesChange',
                selectCheckOutOnlyDateLoggingData: pe,
                selectMaxNightsViolationDateLoggingData: Me,
                selectMinNightsViolationDateLoggingData: ve,
                selectUnavailableForCheckInDateLoggingData: _e,
                selectUnavailableForCheckoutDateLoggingData: Le
            }));
            let u = q;
            if (l || (u = q === N.FocusedInput.START_DATE ? N.FocusedInput.END_DATE : N.FocusedInput.START_DATE), He(s), Xe(o), de && de(o), Je(l), ea(!!o && je.current), l && !Ae && !$) return;
            !(q !== N.FocusedInput.START_DATE || !n) && (0, A.default)({
                day: n,
                findDayResource: X,
                startDate: t
            }) && (n = null);
            (0, K.default)({
                findDayResource: X,
                firstDayInRange: t,
                lastDayInRangeExclusive: n
            }) || (n = null), n && !t && (t = n, n = null, u = N.FocusedInput.END_DATE), ce && ce({
                startDate: t,
                endDate: n,
                focusedInput: u
            })
        }), [Ue, $, X, q, je, Ke, de, ce, pe, Me, ve, _e, Le, Ae]), {
            closeKeyboardShortcutsPanel: ya,
            openKeyboardShortcutsPanel: Ca,
            showKeyboardShortcutsPanel: Ia
        } = (0, E.default)({
            onKeyboardShortcutsClose: fe,
            onKeyboardShortcutsOpen: ge
        }), Ea = (0, s.useCallback)((t => Ne({
            calendarUid: Ve,
            dayLastClicked: Ue,
            endDate: $,
            errorMessage: $e,
            findDayResource: X,
            focusedInput: q,
            isCheckInInputFocused: te,
            isCheckOutInputFocused: ne,
            minNightsForStartDate: ze,
            showErrorMessage: qe,
            showErrorStyles: (0, b.default)(Ue, L || null) && !!P,
            showTooltip: Qe,
            startDate: Ae,
            ...t
        })), [Ve, Ue, L, P, $, $e, X, q, te, ne, ze, Ne, qe, Qe, Ae]), Sa = (0, U.jsx)(h.default, { ...T,
            onPress: ca,
            children: n || (0, U.jsx)(o.default, {
                k: "clear_dates"
            })
        }), ka = 2 === ie ? Math.max((0, M.default)(Ye), (0, M.default)(Ye.clone().add(1, N.MONTH))) : (0, M.default)(Ye), Na = ((We || v.CalendarDaySize.DEFAULT) + N.VERTICAL_BORDER_SPACING) * ka + G, ba = {
            '--availability-calendar-datepicker-min-height': Ke ? void 0 : `${Na}px`
        };
        return (0, U.jsxs)(U.Fragment, {
            children: [(0, U.jsxs)("div", {
                className: xe(!Ke && Fe ? .container, Ke && Fe ? .container_verticalScrollable, t === v.CalendarPlacement.BOOK_IT && Fe ? .container_bookIt),
                style: {
                    '--availability-calendar-datepicker-height': J ? `${J}` : void 0
                },
                children: [!aa && (0, U.jsx)("div", {
                    className: xe(Fe ? .loaderWrapper),
                    style: ba,
                    children: (0, U.jsx)(_.default, {
                        dark: !0,
                        inline: !0
                    })
                }), aa && (0, U.jsxs)(U.Fragment, {
                    children: [(0, U.jsxs)("div", {
                        className: xe(Fe ? .datePickerContainer, t === v.CalendarPlacement.INLINE_BELOW_SIDEBAR && Fe ? .datePickerContainerAloneSidebar, Ke && Fe ? .datePickerContainer_verticalScrollable),
                        style: ba,
                        children: [(0, U.jsx)(k.default, { ...Te,
                            daySize: We,
                            daysViolatingMinNightsCanBeClicked: !0,
                            displayedMonth: Ye,
                            endDate: $,
                            focusedInput: q,
                            getMinNightsForHoverDate: da,
                            horizontalMonthPadding: ae,
                            initialVisibleMonth: Re,
                            isDayBlocked: la,
                            isDayHighlighted: ra,
                            isOutsideRange: ia,
                            maxDate: se,
                            minNightsForStartDate: ze,
                            monthsNavNextLoggingData: le,
                            monthsNavPreviousLoggingData: re,
                            numberOfMonths: ie,
                            onOutsideClick: ua,
                            onDatesChange: ga,
                            onNextMonthClick: Ke ? Ce : ha,
                            onPrevMonthClick: Ke ? fa : Da,
                            openKeyboardShortcutsPanel: Ca,
                            orientation: ke,
                            renderCalendarDay: Ea,
                            startDate: Ae,
                            availabilityType: "STAYS"
                        }), !Ke && !Q && (0, U.jsxs)("div", {
                            className: xe(Fe ? .bottomRow),
                            children: [!we && (0, U.jsx)("div", {
                                className: xe(Fe ? .leftContent),
                                children: !ee && (0, U.jsx)(S.default, {
                                    showKeyboardShortcutsPanel: Ia,
                                    openKeyboardShortcutsPanel: Ca,
                                    closeKeyboardShortcutsPanel: ya
                                })
                            }), (0, U.jsxs)("div", {
                                className: xe(Fe ? .clearButton),
                                children: [Sa, Oe && (0, U.jsx)("span", {
                                    className: xe(Fe ? .saveButton),
                                    children: (0, U.jsx)(f.default, { ...be,
                                        onPress: De,
                                        disabled: z,
                                        "data-testid": "availability-calendar-save",
                                        children: me || (0, U.jsx)(o.default, {
                                            k: "shared.save"
                                        })
                                    })
                                })]
                            })]
                        })]
                    }), (0, U.jsx)(y.default, {
                        passive: !0,
                        target: "window",
                        type: "resize",
                        onEvent: oa
                    })]
                })]
            }), aa && Ke && !Q && (0, U.jsx)("div", {
                className: xe(Fe ? .clearButton_modalSheet),
                children: Sa
            })]
        })
    };
    var s = n(r(d[2])),
        o = t(r(d[3])),
        l = t(r(d[4])),
        u = t(r(d[5]));

    function c() {
        const t = r(d[6]);
        return c = function() {
            return t
        }, t
    }
    var D = r(d[7]),
        h = t(r(d[8])),
        f = t(r(d[9])),
        y = t(r(d[10])),
        C = t(r(d[11])),
        I = n(r(d[12])),
        E = t(r(d[13])),
        S = t(r(d[14])),
        k = t(r(d[15])),
        N = r(d[16]),
        b = t(r(d[17])),
        p = t(r(d[18])),
        T = t(r(d[19])),
        M = t(r(d[20])),
        v = r(d[21]),
        _ = t(r(d[22])),
        L = t(r(d[23])),
        P = t(r(d[24])),
        O = t(r(d[25])),
        A = t(r(d[26])),
        R = t(r(d[27])),
        F = t(r(d[28])),
        x = t(r(d[29])),
        B = t(r(d[30])),
        j = t(r(d[31])),
        w = t(r(d[32])),
        K = t(r(d[33])),
        V = t(r(d[34])),
        z = t(r(d[35])),
        U = r(d[36]);
    const H = 1e3,
        W = () => {},
        G = 109;

    function Y({
        calendarPlacement: t,
        horizontalMonthPadding: n,
        isCompact: s,
        isVerticalScrollableCalendar: o,
        numberOfMonths: l
    }) {
        if (t === v.CalendarPlacement.INLINE_BELOW_SIDEBAR && !s) return (0, L.default)(l);
        if (t === v.CalendarPlacement.INLINE && !s) return (0, P.default)(l);
        if (s || o) {
            const t = 0 === n ? v.RESPONSIVE_DAY_SIZE_ADDITIONAL_PADDING_XSM : 2 * v.RESPONSIVE_DAY_SIZE_ADDITIONAL_PADDING_SM;
            return (0, T.default)({
                additionalPadding: t,
                numMonths: o ? 1 : l
            })
        }
        return t === v.CalendarPlacement.BOOK_IT ? v.CalendarDaySize.BOOK_IT : v.CalendarDaySize.DEFAULT
    }

    function Z({
        ariaLabelFormat: t,
        day: n,
        daySize: s,
        isFocused: o,
        isOutsideDay: l,
        key: u,
        modifiers: c,
        onDayClick: D,
        onDayMouseEnter: h,
        onDayMouseLeave: f,
        phrases: y,
        tabIndex: C,
        calendarUid: I,
        dayLastClicked: E,
        endDate: S,
        errorMessage: k,
        findDayResource: N,
        focusedInput: b,
        isCheckInInputFocused: p,
        isCheckOutInputFocused: T,
        minNightsForStartDate: M,
        showErrorMessage: v,
        showErrorStyles: _,
        showTooltip: L,
        startDate: P
    }) {
        return (0, U.jsx)(z.default, {
            ariaLabelFormat: t,
            calendarUid: I,
            day: n,
            dayLastClicked: E,
            daySize: s,
            endDate: S,
            errorMessage: k,
            findDayResource: N,
            focusedInput: b,
            isCheckInInputFocused: p,
            isCheckOutInputFocused: T,
            isFocused: o,
            isOutsideDay: l,
            minNightsForStartDate: M,
            modifiers: c,
            onDayClick: D,
            onDayMouseEnter: h,
            onDayMouseLeave: f,
            phrases: y,
            showErrorMessage: v,
            showErrorStyles: _,
            showTooltip: L,
            startDate: P,
            tabIndex: C
        }, u)
    }
}), "30b40f", ["ba7a76", "45f788", "07aa1f", "030c51", "48213b", "1772c9", "7cdecc", "4786a8", "ec4bdf", "98a740", "654ebb", "e6000a", "e0b071", "f1755c", "78f078", "19de9e", "cb52fb", "b516fd", "c5cc9d", "60b3f3", "d9e14a", "6d4f8f", "8dfc96", "ab4616", "3ce9fc", "d84e7b", "fdb488", "8139e4", "53c0f4", "40bb02", "4e094b", "6a87cb", "62f5ca", "f9142a", "b35c14", "ab5ad1", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        o = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = o(r(d[2])),
        n = t(r(d[3])),
        s = t(r(d[4])),
        p = r(d[5]),
        c = t(r(d[6])),
        y = t(r(d[7])),
        h = t(r(d[8])),
        u = r(d[9]);
    e.default = (0, p.withStyles)((({
        dls19: t
    }) => ({
        container: {
            color: t.palette.hof,
            fontFamily: t.typography.fontFamily,
            fontWeight: t.typography.weight.book,
            padding: `${5*t.spacing.primitives.baseUnit}px ${4*t.spacing.primitives.baseUnit}px ${4*t.spacing.primitives.baseUnit}px`,
            flex: '1 1 auto',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch'
        },
        header: { ...t.typography.titles.xs,
            fontWeight: t.typography.weight.medium,
            outline: 0
        },
        keyboardShortcut: {
            display: 'flex',
            marginBottom: 2.5 * t.spacing.primitives.baseUnit
        },
        keyboardShortcuts: {
            listStyle: 'none',
            margin: 0,
            marginTop: 6 * t.spacing.primitives.baseUnit,
            marginBottom: 4 * t.spacing.primitives.baseUnit,
            padding: 0
        },
        keyboardShortcutKeyWrapper: {
            width: '30%'
        },
        keyboardShortcutKey: { ...t.typography.base.sm,
            fontWeight: t.typography.weight.medium,
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            background: t.palette.faint,
            borderRadius: t.cornerRadius.tiny,
            padding: `${.5*t.spacing.primitives.baseUnit}px ${t.spacing.primitives.baseUnit}px`
        },
        keyboardShortcutAction: { ...t.typography.base.lg_tall,
            color: t.palette.foggy,
            width: '70%'
        },
        footer: {
            display: 'flex',
            alignItems: 'flex-end',
            flexFlow: 'column wrap'
        }
    })))((function({
        closeButtonAriaLabel: t,
        css: o,
        keyboardShortcuts: p,
        onCloseButtonPress: b,
        styles: f,
        title: x
    }) {
        const v = (0, h.default)() > 16 ? y.default : c.default;
        return (0, u.jsx)(v, {
            accessibleTitle: x,
            isOpen: !0,
            onClose: b,
            closeIcon: !1,
            children: (0, u.jsxs)("div", { ...o(f.container),
                children: [(0, u.jsx)("header", { ...o(f.header),
                    tabIndex: 0,
                    children: x
                }), (0, u.jsx)("ul", { ...o(f.keyboardShortcuts),
                    children: p.map((({
                        action: t,
                        label: n,
                        unicode: s
                    }) => (0, l.createElement)("li", { ...o(f.keyboardShortcut),
                        key: s
                    }, (0, u.jsx)("div", { ...o(f.keyboardShortcutKeyWrapper),
                        children: (0, u.jsx)("span", { ...o(f.keyboardShortcutKey),
                            "aria-label": `${n},`,
                            role: "img",
                            children: s
                        })
                    }), (0, u.jsx)("div", { ...o(f.keyboardShortcutAction),
                        children: t
                    }))))
                }), (0, u.jsx)("footer", { ...o(f.footer),
                    children: (0, u.jsx)(s.default, {
                        "aria-label": t,
                        onPress: b,
                        children: (0, u.jsx)(n.default, {
                            k: "pdp_platform.availability_calendar.keyboard_shortcuts_close_label"
                        })
                    })
                })]
            })
        })
    }))
}), "3b373d", ["ba7a76", "45f788", "07aa1f", "030c51", "5e384b", "e0b084", "1f040e", "171373", "170e2d", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var A = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(A) {
        const u = window.innerWidth,
            {
                breakpoints: O
            } = n.default.dls19.responsive,
            M = u >= O.largeAndAbove ? o.HORIZONTAL_PADDING_LG_PX : o.HORIZONTAL_PADDING_MD_PX,
            P = u >= O.mediumPlusAndAbove ? N.MAIN_COLUMN_SPAN.mediumPlusAndAbove : N.MAIN_COLUMN_SPAN.mediumAndAbove,
            s = (u < t + 2 * M ? u - 2 * M : t - 2 * M) - (N.COLUMN_COUNT - 1) * N.COLUMN_GAP,
            l = s / N.COLUMN_COUNT * P + N.COLUMN_GAP * (P - 1);
        return Math.floor((l - A * _.REACT_DATES_PADDING) / (A * _.NUM_WEEK_DAYS))
    };
    var _ = r(d[1]),
        N = r(d[2]),
        n = A(r(d[3])),
        o = (r(d[4]), r(d[5]));
    const t = 1280
}), "3ce9fc", ["ba7a76", "cb52fb", "05454f", "8d214e", "6d4f8f", "58276d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        day: o,
        findDayResource: t
    }) {
        const u = t(o);
        return !u || !u.bookable && !u.availableForCheckout
    }
}), "40bb02", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        day: o,
        findDayResource: t
    }) {
        const u = t(o);
        return !(!u || u.bookable || !u.availableForCheckout)
    }
}), "4e094b", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        day: t,
        findDayResource: n
    }) {
        if (!t) return 0;
        const u = n(t);
        return u ? .minNights || 0
    }
}), "53c0f4", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.linariaClassNames = e.default = void 0;
    r(d[0]), r(d[1]);
    var _ = r(d[2]),
        t = (r(d[3]), r(d[4]), r(d[5]), r(d[6]));
    const l = e.linariaClassNames = {
        container: "c1e8f4ze atm_9s_1txwivl atm_e2_1osqo2v atm_ks_15vqwwr atm_gz_2bgklt atm_h0_2bgklt atm_e2_1bnz1s5 atm_ks_ewfl5b__oggzyc atm_gz_idpfg4__oggzyc atm_h0_idpfg4__oggzyc",
        container_bookIt: "cnbcs0l atm_gz_1bs0ed2__oggzyc",
        container_verticalScrollable: "c8hrgzl atm_ax_kb7nvz atm_mk_h2mmj6 atm_e2_1bnz1s5",
        loaderWrapper: "l7css91 atm_9s_1txwivl atm_h_1h6ojuz atm_vy_1osqo2v atm_e2_1osqo2v atm_j6_xs8u8a",
        datePickerContainer: "duu3og2 atm_mk_h2mmj6 atm_9s_1txwivl atm_ar_1bp4okc atm_gz_1wugsn5 atm_h0_1wugsn5 atm_j6_xs8u8a atm_gz_2bgklt__oggzyc atm_h3_zt4szt__oggzyc",
        datePickerContainerAloneSidebar: "d1pep60d atm_vy_1osqo2v",
        datePickerContainer_verticalScrollable: "dua5j0m atm_6i_idpfg4 atm_fq_idpfg4 atm_mk_stnw88 atm_n3_idpfg4 atm_tk_idpfg4 atm_le_idpfg4",
        saveButton: "s1i37mei atm_gz_8tjzot",
        clearButton: "czsynqk atm_lk_1yuitx atm_9s_1txwivl atm_h_1h6ojuz atm_am_glywfm atm_wq_kb7nvz",
        clearButton_modalSheet: "c1rl8pgy atm_mk_stnw88 atm_tk_1gi92mw atm_n3_1tcgj5g",
        bottomRow: "b1ygs7cg atm_9s_1txwivl atm_fc_1yb4nlp atm_h_1h6ojuz atm_lk_1ou6n1d atm_ll_1u1b7xl__oggzyc",
        leftContent: "ltw7wv3 atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_7l_1he744i"
    };
    e.default = (0, _.createVariant)(t.BaseAvailabilityCalendarDatePicker, l)
}), "56ae4a", ["ea4b89", "4786a8", "aabdb1", "c4fec4", "58276d", "cb52fb", "30b40f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MAX_WIDTH_PX = e.HORIZONTAL_PADDING_SM_PX = e.HORIZONTAL_PADDING_MD_PX = e.HORIZONTAL_PADDING_LG_PX = e.FLUID19_MAX_WIDTH_PX = void 0;
    e.HORIZONTAL_PADDING_LG_PX = 80, e.HORIZONTAL_PADDING_MD_PX = 40, e.HORIZONTAL_PADDING_SM_PX = 24, e.MAX_WIDTH_PX = 1600, e.FLUID19_MAX_WIDTH_PX = 1280
}), "58276d", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        additionalPadding: u = 0,
        calendarMaxWidth: c = 1 / 0,
        numMonths: h = 1
    }) {
        return Math.min(Math.floor((Math.min(c, window.innerWidth) - u - h * n) / (h * o)), t)
    };
    r(d[0]);
    const n = 26,
        t = 70,
        o = 7
}), "60b3f3", ["cb52fb"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, n) {
        if (!t || !n) return !1;
        const c = t.clone().subtract(1, 'day');
        return (0, u.default)(c, n)
    };
    var u = t(r(d[1]))
}), "60c351", ["ba7a76", "b516fd"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        day: t,
        findDayResource: f,
        focusedInput: s,
        startDate: c
    }) {
        return s === u.FocusedInput.END_DATE && (0, n.default)({
            day: t,
            findDayResource: f,
            startDate: c
        })
    };
    var u = r(d[1]),
        n = t(r(d[2]))
}), "62f5ca", ["ba7a76", "cb52fb", "7935bd"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = r(d[1]),
        n = r(d[2]),
        o = t(r(d[3])),
        s = r(d[4]);
    const u = (0, l.extendStyles)(s.calendarDayCellContentsStylesFn, (({
        dls19: t
    }) => ({
        special: {
            background: t.palette.faint,
            border: `1px solid ${t.palette.deco}`,
            ':hover': {
                background: t.palette.faint
            }
        }
    })));
    e.default = (0, n.withStyles)(u)(o.default)
}), "674ae2", ["ba7a76", "01b367", "e0b084", "9ceadf", "d27bb8"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, c, l) {
        var o = l && l.equalityFn ? l.equalityFn : f,
            s = (0, u.useState)(t),
            v = s[0],
            _ = s[1],
            y = (0, n.default)((0, u.useCallback)((function(t) {
                return _(t)
            }), []), c, l),
            b = y[0],
            q = y[1],
            F = y[2],
            j = (0, u.useRef)(t);
        return (0, u.useEffect)((function() {
            o(j.current, t) || (b(t), j.current = t)
        }), [t, b, o]), [v, q, F]
    };
    var u = r(d[1]),
        n = t(r(d[2]));

    function f(t, u) {
        return t === u
    }
}), "6759ef", ["ba7a76", "07aa1f", "a552e3"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        day: n,
        findDayResource: t
    }) {
        const u = t(n);
        return !u || !u.availableForCheckin
    }
}), "6a87cb", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, f) {
        return !(!t || !f) && !(0, u.default)(t, f)
    };
    var u = t(r(d[1]))
}), "6c237b", ["ba7a76", "456c8a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.WINDOW_RESIZE_DELAY = e.RESPONSIVE_DAY_SIZE_ADDITIONAL_PADDING_XSM = e.RESPONSIVE_DAY_SIZE_ADDITIONAL_PADDING_SM = e.MIN_WIDTH_PX_TWO_MONTHS = e.MIN_WIDTH_PX_THREE_MONTHS_BELOW_SIDEBAR = e.DatePickerError = e.DATE_INPUTS_ERROR_ID = e.CalendarPlacement = e.CalendarDaySize = e.BOOK_IT_TRIP_DETAILS_ERROR_ID = void 0;
    e.CalendarDaySize = (function(_) {
        return _[_.DEFAULT = 44] = "DEFAULT", _[_.BOOK_IT = 40] = "BOOK_IT", _
    })({}), e.CalendarPlacement = (function(_) {
        return _.INLINE = "inline", _.INLINE_BELOW_SIDEBAR = "inline_below_sidebar", _.MODAL_DRAWER = "drawer", _.MODAL_SHEET = "modal_sheet", _.BOOK_IT = "book_it", _
    })({});
    e.RESPONSIVE_DAY_SIZE_ADDITIONAL_PADDING_XSM = 36, e.RESPONSIVE_DAY_SIZE_ADDITIONAL_PADDING_SM = 24, e.WINDOW_RESIZE_DELAY = 150;
    e.DatePickerError = (function(_) {
        return _.CHECKOUT_ONLY = "CHECKOUT_ONLY", _.DOES_NOT_MEET_MAX_NIGHTS = "DOES_NOT_MEET_MAX_NIGHTS", _.DOES_NOT_MEET_MIN_NIGHTS = "DOES_NOT_MEET_MIN_NIGHTS", _.MUST_SELECT_CHECKIN_BEFORE_CHECKOUT = "MUST_SELECT_CHECKIN_BEFORE_CHECKOUT", _.UNAVAILABLE = "UNAVAILABLE", _.UNAVAILABLE_FOR_CHECKIN = "UNAVAILABLE_FOR_CHECKIN", _.UNAVAILABLE_FOR_CHECKOUT = "UNAVAILABLE_FOR_CHECKOUT", _
    })({});
    e.MIN_WIDTH_PX_TWO_MONTHS = 1200, e.MIN_WIDTH_PX_THREE_MONTHS_BELOW_SIDEBAR = 1200, e.BOOK_IT_TRIP_DETAILS_ERROR_ID = 'bookItTripDetailsError', e.DATE_INPUTS_ERROR_ID = 'dateInputsErrorId'
}), "6d4f8f", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = t(r(d[1])),
        s = t(r(d[2])),
        n = t(r(d[3])),
        c = t(r(d[4])),
        u = t(r(d[5])),
        h = r(d[6]);
    const l = {
        closeKeyboardShortcutsPanel() {},
        openKeyboardShortcutsPanel() {},
        renderKeyboardShortcutsButton: void 0,
        renderKeyboardShortcutsPanel: void 0,
        showKeyboardShortcutsPanel: !1
    };

    function b() {
        const t = (0, n.default)();
        return [{
            unicode: '\u21b5',
            label: t.enterKey,
            action: t.selectFocusedDate
        }, {
            unicode: '\u2190/\u2192',
            label: t.leftArrowRightArrow,
            action: t.moveFocusByOneDay
        }, {
            unicode: '\u2191/\u2193',
            label: t.upArrowDownArrow,
            action: t.moveFocusByOneWeek
        }, {
            unicode: 'PgUp/PgDn',
            label: t.pageUpPageDown,
            action: t.moveFocusByOneMonth
        }, {
            unicode: 'Home/End',
            label: t.homeEnd,
            action: t.moveFocustoStartAndEndOfWeek
        }, {
            unicode: '?',
            label: t.questionMark,
            action: t.openThisPanel
        }]
    }
    class y extends o.default.PureComponent {
        constructor(t) {
            super(t), this.hideKeyboardShortcutsButton = void 0, this.keyboardShortcuts = void 0, this.showKeyboardShortcutsButtonRef = o.default.createRef(), this.state = {
                isTouch: (0, s.default)()
            }, this.keyboardShortcuts = b(), this.onShowKeyboardShortcutsButtonClick = this.onShowKeyboardShortcutsButtonClick.bind(this), this.onKeyDown = this.onKeyDown.bind(this)
        }
        componentDidMount() {
            this.setState({
                isTouch: (0, s.default)()
            })
        }
        onKeyDown(t) {
            t.stopPropagation();
            const {
                closeKeyboardShortcutsPanel: o
            } = this.props;
            switch (t.key) {
                case 'Escape':
                    o();
                    break;
                case 'ArrowUp':
                case 'ArrowDown':
                default:
                    break;
                case 'Tab':
                case 'Home':
                case 'End':
                case 'PageUp':
                case 'PageDown':
                case 'ArrowLeft':
                case 'ArrowRight':
                    t.preventDefault()
            }
        }
        onShowKeyboardShortcutsButtonClick() {
            const {
                openKeyboardShortcutsPanel: t
            } = this.props;
            t((() => {
                this.showKeyboardShortcutsButtonRef.current && this.showKeyboardShortcutsButtonRef.current.focus()
            }))
        }
        render() {
            const {
                isTouch: t
            } = this.state;
            if (t) return null;
            const {
                closeKeyboardShortcutsPanel: o,
                renderKeyboardShortcutsButton: s,
                renderKeyboardShortcutsPanel: l,
                showKeyboardShortcutsPanel: b
            } = this.props, y = (0, n.default)(), S = b ? y.hideKeyboardShortcutsPanel : y.showKeyboardShortcutsPanel;
            return (0, h.jsxs)(h.Fragment, {
                children: [s ? s({
                    ref: this.showKeyboardShortcutsButtonRef,
                    onClick: this.onShowKeyboardShortcutsButtonClick,
                    ariaLabel: S
                }) : (0, h.jsx)(c.default, {
                    ariaLabel: S,
                    buttonRef: this.showKeyboardShortcutsButtonRef,
                    onPress: this.onShowKeyboardShortcutsButtonClick
                }), b && (l ? l({
                    closeButtonAriaLabel: y.hideKeyboardShortcutsPanel,
                    keyboardShortcuts: this.keyboardShortcuts,
                    onCloseButtonClick: o,
                    onKeyDown: this.onKeyDown,
                    title: y.keyboardShortcuts
                }) : (0, h.jsx)(u.default, {
                    closeButtonAriaLabel: y.hideKeyboardShortcutsPanel,
                    keyboardShortcuts: this.keyboardShortcuts,
                    onCloseButtonPress: o,
                    title: y.keyboardShortcuts
                }))]
            })
        }
    }
    e.default = y, y.defaultProps = l
}), "78f078", ["ba7a76", "07aa1f", "48213b", "d46ef4", "c0c4e8", "3b373d", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        day: t,
        findDayResource: f,
        startDate: s
    }) {
        if (!s) return !1;
        const u = f(s);
        if (!u) return !1;
        const c = t.clone().startOf('day'),
            o = s.clone().startOf('day'),
            l = c.diff(o, 'days'),
            y = u ? .maxNights || 1 / 0;
        if (l < 0 || l > y) return !0;
        return !(0, n.default)({
            findDayResource: f,
            firstDayInRange: s,
            lastDayInRangeExclusive: t
        })
    };
    var n = t(r(d[1]))
}), "7935bd", ["ba7a76", "f9142a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "useDebounce", {
        enumerable: !0,
        get: function() {
            return u.default
        }
    }), Object.defineProperty(e, "useDebouncedCallback", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    });
    var u = t(r(d[1])),
        n = t(r(d[2]))
}), "7cdecc", ["ba7a76", "6759ef", "a552e3"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        day: t,
        findDayResource: y,
        focusedInput: l,
        startDate: N
    }) {
        let O = null,
            R = !1;
        if (!t || (0, o.default)({
                day: t,
                findDayResource: y
            })) return {
            errorMessage: O,
            showErrorMessage: R
        };
        l === u.FocusedInput.END_DATE ? (0, f.default)({
            day: t,
            findDayResource: y,
            startDate: N
        }) ? (O = s.DatePickerError.DOES_NOT_MEET_MIN_NIGHTS, R = !0) : !(0, D.default)({
            day: t,
            findDayResource: y,
            startDate: N
        }) && (0, E.default)({
            day: t,
            findDayResource: y
        }) && (O = s.DatePickerError.UNAVAILABLE_FOR_CHECKOUT, R = !0) : (0, c.default)({
            day: t,
            findDayResource: y
        }) ? (O = s.DatePickerError.CHECKOUT_ONLY, R = !0) : (0, _.default)({
            day: t,
            findDayResource: y
        }) && ((0, n.default)({
            day: t,
            findDayResource: y
        }) ? (O = s.DatePickerError.DOES_NOT_MEET_MIN_NIGHTS, R = !0) : (O = s.DatePickerError.UNAVAILABLE_FOR_CHECKIN, R = !0));
        return {
            errorMessage: O,
            showErrorMessage: R
        }
    };
    var u = r(d[1]),
        s = r(d[2]),
        o = t(r(d[3])),
        f = t(r(d[4])),
        D = t(r(d[5])),
        E = t(r(d[6])),
        c = t(r(d[7])),
        n = t(r(d[8])),
        _ = t(r(d[9]))
}), "8139e4", ["ba7a76", "cb52fb", "6d4f8f", "40bb02", "99afcd", "7935bd", "d66fbb", "4e094b", "d84e7b", "6a87cb"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = t(r(d[1])),
        l = r(d[2]);
    e.default = (0, n.default)((({
        day: t,
        calendarMonths: n
    }) => {
        const u = n && n.find((n => n && n.year === t.year() && n.month === t.month() + 1));
        if (!u) return null;
        const {
            days: f
        } = u, o = t.format(l.ISO_FORMAT);
        return f.find((t => t && t.calendarDate === o)) || null
    }), (({
        day: t
    }) => t.format(l.ISO_FORMAT)))
}), "89d77d", ["ba7a76", "41d1c7", "cb52fb"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        day: t,
        findDayResource: n,
        startDate: u
    }) {
        if (!u) return !1;
        const f = n(u);
        if (!f) return !1;
        const {
            minNights: o = 1
        } = f, s = t.clone().startOf('day').hour(12), c = u.clone().startOf('day').hour(12), y = s.diff(c, 'days');
        return y < o && y >= 0
    }
}), "99afcd", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, n) {
        if (!t || !n) return !1;
        const f = t.clone().add(1, 'day');
        return (0, u.default)(f, n)
    };
    var u = t(r(d[1]))
}), "a23818", ["ba7a76", "b516fd"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n, t, c) {
        void 0 === c && (c = {});
        var l = c.maxWait,
            f = (0, u.useRef)(null),
            o = (0, u.useRef)([]),
            s = c.leading,
            v = void 0 === c.trailing || c.trailing,
            p = (0, u.useRef)(!1),
            R = (0, u.useRef)(null),
            y = (0, u.useRef)(!1),
            T = (0, u.useRef)(n);
        T.current = n;
        var _ = (0, u.useCallback)((function() {
            clearTimeout(R.current), clearTimeout(f.current), f.current = null, o.current = [], R.current = null, p.current = !1
        }), []);
        (0, u.useEffect)((function() {
            return function() {
                y.current = !0
            }
        }), []);
        var b = (0, u.useCallback)((function() {
            for (var u = [], n = 0; n < arguments.length; n++) u[n] = arguments[n];
            o.current = u, clearTimeout(R.current), p.current && (p.current = !1), R.current || !s || p.current || (T.current.apply(T, u), p.current = !0), R.current = setTimeout((function() {
                var n = !0;
                s && p.current && (n = !1), _(), !y.current && v && n && T.current.apply(T, u)
            }), t), l && !f.current && v && (f.current = setTimeout((function() {
                var u = o.current;
                _(), y.current || T.current.apply(null, u)
            }), l))
        }), [l, t, _, s, v]);
        return [b, _, function() {
            R.current && (T.current.apply(null, o.current), _())
        }]
    };
    var u = r(d[0])
}), "a552e3", ["07aa1f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        const s = window.innerWidth,
            {
                breakpoints: u
            } = _.default.dls19.responsive,
            D = s >= u.largeAndAbove ? o.HORIZONTAL_PADDING_LG_PX : o.HORIZONTAL_PADDING_MD_PX,
            l = s < A ? s - 2 * D : A - 2 * D;
        return Math.floor((l - t * n.REACT_DATES_PADDING) / (t * n.NUM_WEEK_DAYS))
    };
    var n = r(d[1]),
        _ = t(r(d[2])),
        o = (r(d[3]), r(d[4]));
    const A = 1280
}), "ab4616", ["ba7a76", "cb52fb", "8d214e", "6d4f8f", "58276d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        s = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        const s = (0, o.c)(72),
            {
                ariaLabelFormat: M,
                calendarUid: k,
                day: F,
                dayLastClicked: b,
                daySize: A,
                endDate: x,
                errorMessage: j,
                findDayResource: z,
                focusedInput: N,
                isCheckInInputFocused: O,
                isCheckOutInputFocused: T,
                isFocused: U,
                isOutsideDay: w,
                minNightsForStartDate: R,
                modifiers: P,
                onDayClick: B,
                onDayMouseEnter: H,
                onDayMouseLeave: K,
                phrases: q,
                showErrorMessage: G,
                showErrorStyles: V,
                showTooltip: Y,
                startDate: J,
                tabIndex: Q
            } = t,
            W = void 0 === b ? null : b,
            X = void 0 === A ? D.CalendarDaySize.DEFAULT : A,
            Z = void 0 === x ? null : x,
            $ = void 0 === j ? null : j,
            ee = void 0 === z ? L : z,
            te = void 0 !== U && U,
            ae = void 0 !== w && w,
            se = void 0 === R ? 1 : R,
            de = void 0 === B ? _ : B,
            oe = void 0 === H ? I : H,
            ie = void 0 === K ? S : K,
            le = void 0 !== G && G,
            re = void 0 !== V && V,
            ne = void 0 !== Y && Y,
            ue = void 0 === J ? null : J,
            ce = void 0 === Q ? -1 : Q,
            fe = (0, c.default)(X);
        let ye, De;
        s[0] !== F || s[1] !== Z || s[2] !== ee || s[3] !== N || s[4] !== se || s[5] !== P || s[6] !== q || s[7] !== ue ? (De = (0, p.default)({
            day: F,
            endDate: Z,
            findDayResource: ee,
            focusedInput: N,
            minNightsForStartDate: se,
            modifiers: P,
            phrases: q,
            startDate: ue
        }), s[0] = F, s[1] = Z, s[2] = ee, s[3] = N, s[4] = se, s[5] = P, s[6] = q, s[7] = ue, s[8] = De) : De = s[8];
        ye = De;
        const ve = ye;
        let he;
        s[9] !== F || s[10] !== W || s[11] !== re ? (he = re && (0, f.default)(F, W), s[9] = F, s[10] = W, s[11] = re, s[12] = he) : he = s[12];
        const pe = he;
        let Ce;
        s[13] !== O || s[14] !== T || s[15] !== P ? (Ce = O && P ? .has("selected-start") || T && P ? .has("selected-end"), s[13] = O, s[14] = T, s[15] = P, s[16] = Ce) : Ce = s[16];
        const Ee = Ce;
        let me;
        s[17] !== F || s[18] !== W || s[19] !== $ || s[20] !== le ? (me = le && $ !== D.DatePickerError.UNAVAILABLE && $ !== D.DatePickerError.MUST_SELECT_CHECKIN_BEFORE_CHECKOUT && (0, f.default)(F, W), s[17] = F, s[18] = W, s[19] = $, s[20] = le, s[21] = me) : me = s[21];
        const Se = me;
        let Ie;
        s[22] !== F || s[23] !== W || s[24] !== Z || s[25] !== ee || s[26] !== N || s[27] !== P || s[28] !== ne || s[29] !== ue ? (Ie = F ? (0, C.default)({
            day: F,
            dayLastClicked: W,
            endDate: Z,
            findDayResource: ee,
            focusedInput: N,
            modifiers: P,
            showTooltip: ne,
            startDate: ue
        }) : null, s[22] = F, s[23] = W, s[24] = Z, s[25] = ee, s[26] = N, s[27] = P, s[28] = ne, s[29] = ue, s[30] = Ie) : Ie = s[30];
        const _e = Ie,
            [Le, Me] = (0, l.useState)(!1);
        let ke, Fe, be, ge, Ae, xe;
        s[31] === Symbol.for("react.memo_cache_sentinel") ? (ke = () => {
            const t = requestIdleCallback((() => Me(!0)));
            return () => cancelIdleCallback(t)
        }, Fe = [], s[31] = ke, s[32] = Fe) : (ke = s[31], Fe = s[32]);
        if ((0, l.useEffect)(ke, Fe), !Le) {
            const t = y.CALENDAR_DAY_SPACING + fe;
            let o;
            return s[33] !== fe || s[34] !== t ? (o = (0, E.jsx)("td", {
                style: {
                    display: "table-cell",
                    height: fe,
                    width: t
                }
            }), s[33] = fe, s[34] = t, s[35] = o) : o = s[35], o
        }
        s[36] !== fe || s[37] !== pe || s[38] !== F || s[39] !== P || s[40] !== _e ? (be = pe && (0, E.jsx)(h.default, {
            day: F,
            daySize: fe,
            modifiers: P,
            special: !0,
            tooltipMessage: _e
        }), s[36] = fe, s[37] = pe, s[38] = F, s[39] = P, s[40] = _e, s[41] = be) : be = s[41];
        s[42] !== fe || s[43] !== Ee || s[44] !== F || s[45] !== P || s[46] !== _e ? (ge = Ee && (0, E.jsx)(n.default, {
            day: F,
            daySize: fe,
            modifiers: P,
            special: !0,
            tooltipMessage: _e
        }), s[42] = fe, s[43] = Ee, s[44] = F, s[45] = P, s[46] = _e, s[47] = ge) : ge = s[47];
        s[48] !== fe || s[49] !== pe || s[50] !== Ee || s[51] !== F || s[52] !== Se || s[53] !== P || s[54] !== _e ? (Ae = !pe && !Ee && (0, E.jsx)(v.default, {
            day: F,
            daySize: fe,
            modifiers: P,
            special: Se,
            tooltipMessage: _e
        }), s[48] = fe, s[49] = pe, s[50] = Ee, s[51] = F, s[52] = Se, s[53] = P, s[54] = _e, s[55] = Ae) : Ae = s[55];
        s[56] !== fe || s[57] !== M || s[58] !== k || s[59] !== ve || s[60] !== F || s[61] !== te || s[62] !== ae || s[63] !== P || s[64] !== de || s[65] !== oe || s[66] !== ie || s[67] !== be || s[68] !== ge || s[69] !== Ae || s[70] !== ce ? (xe = (0, E.jsxs)(u.default, {
            ariaLabelFormat: M,
            calendarUid: k,
            day: F,
            daySize: fe,
            isFocused: te,
            isOutsideDay: ae,
            modifiers: P,
            phrases: ve,
            onDayClick: de,
            onDayMouseEnter: oe,
            onDayMouseLeave: ie,
            tabIndex: ce,
            children: [be, ge, Ae]
        }), s[56] = fe, s[57] = M, s[58] = k, s[59] = ve, s[60] = F, s[61] = te, s[62] = ae, s[63] = P, s[64] = de, s[65] = oe, s[66] = ie, s[67] = be, s[68] = ge, s[69] = Ae, s[70] = ce, s[71] = xe) : xe = s[71];
        return xe
    };
    var o = r(d[2]),
        l = s(r(d[3])),
        n = t(r(d[4])),
        u = t(r(d[5])),
        c = t(r(d[6])),
        f = t(r(d[7])),
        y = r(d[8]),
        D = r(d[9]),
        v = t(r(d[10])),
        h = t(r(d[11])),
        p = t(r(d[12])),
        C = t(r(d[13])),
        E = r(d[14]);

    function S() {}

    function I() {}

    function _() {}

    function L(t) {
        return null
    }
}), "ab5ad1", ["ba7a76", "45f788", "87eb11", "07aa1f", "f0edbc", "a20106", "0a4112", "b516fd", "cb52fb", "6d4f8f", "674ae2", "22a16a", "b59ebc", "de7fcf", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function n() {
        const t = r(d[1]);
        return n = function() {
            return t
        }, t
    }

    function o() {
        const t = r(d[2]);
        return o = function() {
            return t
        }, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        component: t,
        errorMessage: u,
        method: l,
        selectCheckOutOnlyDateLoggingData: s,
        selectMaxNightsViolationDateLoggingData: D,
        selectMinNightsViolationDateLoggingData: E,
        selectUnavailableForCheckInDateLoggingData: v,
        selectUnavailableForCheckoutDateLoggingData: O
    }) {
        if (!u) return;
        const f = {
            [String(_.DatePickerError.CHECKOUT_ONLY)]: s,
            [String(_.DatePickerError.UNAVAILABLE_FOR_CHECKIN)]: v,
            [String(_.DatePickerError.UNAVAILABLE_FOR_CHECKOUT)]: O,
            [String(_.DatePickerError.DOES_NOT_MEET_MAX_NIGHTS)]: D,
            [String(_.DatePickerError.DOES_NOT_MEET_MIN_NIGHTS)]: E
        }[u];
        f && c.default.logJitneyEvent({
            schema: o().UniversalComponentActionEvent,
            event_data: {
                uuid: (0, n().v4)(),
                logging_id: f ? .loggingID,
                ancestor_logging_ids: [],
                ancestor_uuids: [],
                event_data: f ? .eventData,
                event_data_schema: f ? .eventDataSchema,
                component: t,
                method: l
            }
        })
    };
    var c = t(r(d[3])),
        _ = r(d[4])
}), "b35c14", ["ba7a76", "305dd5", "59c871", "c8b97a", "6d4f8f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        day: t,
        endDate: n,
        findDayResource: o,
        focusedInput: c,
        minNightsForStartDate: M = 0,
        modifiers: h,
        phrases: k,
        startDate: b
    }) {
        let {
            chooseAvailableDate: D,
            dateIsSelectedAsStartDate: w,
            dateIsSelected: E
        } = k || {};
        if (h && h.has('selected-start') && E && w) {
            const t = w,
                u = E;
            if (c === f.FocusedInput.END_DATE && !!b && !n) {
                const f = l.default.t('datepicker_min_nights', {
                    smart_count: M
                }) || '';
                E = ({
                    date: t
                }) => `${u({date:t})}, ${f}`, w = ({
                    date: l
                }) => `${t({date:l})}, ${f}`
            }
        }
        if (t) {
            h && h.has('selected-start') && c === f.FocusedInput.END_DATE && !n && M > 1 && (w = ({
                date: t
            }) => (0, u.default)(t).isSame(new Date, 'day') ? l.default.t('react_dates.stays_today_selected_minrequirement_check-in_date', {
                day_number: (0, u.default)(t).date(),
                weekday: (0, u.default)(t).format('dddd'),
                month: (0, u.default)(t).format('MMMM'),
                year: (0, u.default)(t).year(),
                min: M
            }) : l.default.t('react_dates.stays_selected_minrequirement_check-in_date', {
                day_number: (0, u.default)(t).date(),
                weekday: (0, u.default)(t).format('dddd'),
                month: (0, u.default)(t).format('MMMM'),
                year: (0, u.default)(t).year(),
                min: M
            }));
            const k = (0, y.default)({
                    day: t,
                    findDayResource: o
                }),
                {
                    errorMessage: E,
                    showErrorMessage: S
                } = (0, s.default)({
                    day: t,
                    findDayResource: o,
                    focusedInput: c,
                    startDate: b
                });
            if (S) switch (E) {
                case _.DatePickerError.CHECKOUT_ONLY:
                    D = ({
                        date: t
                    }) => l.default.t('react_dates.stays_available_checkout_only', {
                        day_number: (0, u.default)(t).date(),
                        weekday: (0, u.default)(t).format('dddd'),
                        month: (0, u.default)(t).format('MMMM'),
                        year: (0, u.default)(t).year()
                    });
                    break;
                case _.DatePickerError.DOES_NOT_MEET_MIN_NIGHTS:
                    D = ({
                        date: t
                    }) => (0, u.default)(t).isSame(new Date, 'day') ? l.default.t('react_dates.stays_today_available_ineligible_check-in_date', {
                        day_number: (0, u.default)(t).date(),
                        weekday: (0, u.default)(t).format('dddd'),
                        month: (0, u.default)(t).format('MMMM'),
                        year: (0, u.default)(t).year(),
                        min: k
                    }) : l.default.t('react_dates.stays_available_ineligible_check-in_date', {
                        day_number: (0, u.default)(t).date(),
                        weekday: (0, u.default)(t).format('dddd'),
                        month: (0, u.default)(t).format('MMMM'),
                        year: (0, u.default)(t).year(),
                        min: k
                    });
                    break;
                case _.DatePickerError.UNAVAILABLE_FOR_CHECKOUT:
                    D = ({
                        date: t
                    }) => (0, u.default)(t).isSame(new Date, 'day') ? l.default.t('react_dates.stays_today_available_stay_only_checkout_date', {
                        day_number: (0, u.default)(t).date(),
                        weekday: (0, u.default)(t).format('dddd'),
                        month: (0, u.default)(t).format('MMMM'),
                        year: (0, u.default)(t).year()
                    }) : l.default.t('react_dates.stays_available_stay_only_checkout_date', {
                        day_number: (0, u.default)(t).date(),
                        weekday: (0, u.default)(t).format('dddd'),
                        month: (0, u.default)(t).format('MMMM'),
                        year: (0, u.default)(t).year()
                    });
                    break;
                case _.DatePickerError.UNAVAILABLE_FOR_CHECKIN:
                    D = ({
                        date: t
                    }) => (0, u.default)(t).isSame(new Date, 'day') ? l.default.t('react_dates.stays_today_available_stay_only_check-in_date', {
                        day_number: (0, u.default)(t).date(),
                        weekday: (0, u.default)(t).format('dddd'),
                        month: (0, u.default)(t).format('MMMM'),
                        year: (0, u.default)(t).year()
                    }) : l.default.t('react_dates.stays_available_stay_only_check-in_date', {
                        day_number: (0, u.default)(t).date(),
                        weekday: (0, u.default)(t).format('dddd'),
                        month: (0, u.default)(t).format('MMMM'),
                        year: (0, u.default)(t).year()
                    })
            }
            c === f.FocusedInput.START_DATE && !S && k > 1 && (D = ({
                date: t
            }) => (0, u.default)(t).isSame(new Date, 'day') ? l.default.t('react_dates.stays_today_available_minrequirement_check-in_date', {
                day_number: (0, u.default)(t).date(),
                weekday: (0, u.default)(t).format('dddd'),
                month: (0, u.default)(t).format('MMMM'),
                year: (0, u.default)(t).year(),
                min: M
            }) : l.default.t('react_dates.stays_available_minrequirement_check-in_date', {
                day_number: (0, u.default)(t).date(),
                weekday: (0, u.default)(t).format('dddd'),
                month: (0, u.default)(t).format('MMMM'),
                year: (0, u.default)(t).year(),
                min: M
            }))
        }
        return { ...k,
            chooseAvailableDate: D,
            dateIsSelected: E,
            dateIsSelectedAsStartDate: w
        }
    };
    var l = t(r(d[1])),
        u = t(r(d[2])),
        f = r(d[3]),
        _ = r(d[4]),
        s = t(r(d[5])),
        y = t(r(d[6]))
}), "b59ebc", ["ba7a76", "a9f4b1", "1772c9", "cb52fb", "6d4f8f", "8139e4", "53c0f4"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        ariaLabel: t,
        buttonRef: s,
        onPress: f
    }) {
        return (0, l.jsx)(u.default, {
            "aria-label": t,
            buttonRef: s,
            onPress: f,
            children: (0, l.jsx)(n.default, {
                decorative: !0,
                size: 24
            })
        })
    };
    t(r(d[1]));
    var u = t(r(d[2])),
        n = t(r(d[3])),
        l = r(d[4])
}), "c0c4e8", ["ba7a76", "07aa1f", "373f51", "cc894a", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const z = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M29 5a2 2 0 0 1 2 1.85V25a2 2 0 0 1-1.85 2H3a2 2 0 0 1-2-1.85V7a2 2 0 0 1 1.85-2H3zm0 2H3v18h26zm-8 13v2H11v-2zm3-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm16-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcSystemKeyboardShortcuts32', {
        defaultSize: 32
    });
    e.default = z
}), "cc894a", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        day: t,
        findDayResource: u
    }) {
        const n = u(t);
        return !n || !n.availableForCheckout
    }
}), "d66fbb", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        day: n,
        findDayResource: u
    }) {
        const s = u(n);
        if (!s) return !1;
        const {
            minNights: c
        } = s, f = n.clone().add(c, 'day');
        return !(0, t.default)({
            findDayResource: u,
            firstDayInRange: n,
            lastDayInRangeExclusive: f
        })
    };
    var t = n(r(d[1]))
}), "d84e7b", ["ba7a76", "f9142a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n) {
        const c = n.clone().startOf(t.MONTH),
            o = n.daysInMonth(),
            u = c.day();
        return Math.ceil((u + o) / t.NUM_WEEK_DAYS)
    };
    var t = r(d[0])
}), "d9e14a", ["cb52fb"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        day: t,
        dayLastClicked: f,
        endDate: p,
        findDayResource: D,
        focusedInput: E,
        modifiers: y,
        showTooltip: T,
        startDate: h
    }) {
        const k = (0, n.default)({
            day: t,
            findDayResource: D
        });
        if (y ? .has('hovered') || T) {
            if ((y ? .has('hovered') || (0, l.default)(t, f)) && y ? .has('selected-start')) {
                if (E === s.FocusedInput.END_DATE && !p && k > 1) return (0, c.jsx)(u.default, {
                    k: "pdp_platform.availability_calendar.min_nights_tooltip",
                    smart_count: k
                });
                if (E === s.FocusedInput.START_DATE && p) return (0, c.jsx)(u.default, {
                    k: "lux.mys.seasons_tab_edit_checkin_day"
                })
            }
            if (E === s.FocusedInput.START_DATE && h && p && y ? .has('selected-end')) return (0, c.jsx)(u.default, {
                k: "lux.mys.seasons_tab_edit_checkout_day"
            });
            if ((0, l.default)(t, f)) {
                const {
                    errorMessage: l
                } = (0, _.default)({
                    day: t,
                    findDayResource: D,
                    focusedInput: E,
                    startDate: h
                }), f = (0, n.default)({
                    day: h,
                    findDayResource: D
                });
                switch (l) {
                    case o.DatePickerError.CHECKOUT_ONLY:
                        return (0, c.jsx)(u.default, {
                            k: "pdp_platform.availability_calendar.checkout_only_tooltip"
                        });
                    case o.DatePickerError.DOES_NOT_MEET_MIN_NIGHTS:
                        return E === s.FocusedInput.END_DATE && f <= 1 ? null : (0, c.jsx)(u.default, {
                            k: "pdp_platform.availability_calendar.min_nights_tooltip",
                            smart_count: E === s.FocusedInput.END_DATE ? f : k
                        });
                    case o.DatePickerError.UNAVAILABLE_FOR_CHECKIN:
                    case o.DatePickerError.UNAVAILABLE_FOR_CHECKOUT:
                        return (0, c.jsx)(u.default, {
                            k: "pdp_platform.availability_calendar.host_unavailable_tooltip"
                        });
                    default:
                        return null
                }
            }
        }
        return null
    };
    t(r(d[1]));
    var u = t(r(d[2])),
        s = r(d[3]),
        l = t(r(d[4])),
        o = r(d[5]),
        n = t(r(d[6])),
        _ = t(r(d[7])),
        c = r(d[8])
}), "de7fcf", ["ba7a76", "07aa1f", "030c51", "cb52fb", "b516fd", "6d4f8f", "53c0f4", "8139e4", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(n, u, c = t) {
        return n ? c(n(u.clone())) : u
    };
    const t = t => t
}), "eee857", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = r(d[1]),
        n = r(d[2]),
        s = t(r(d[3])),
        o = r(d[4]);
    const u = (0, l.extendStyles)(o.calendarDayCellContentsStylesFn, (({
        dls19: t
    }) => ({
        special: {
            zIndex: 1,
            boxShadow: `0 0 0 1px ${t.palette.white}, 0 0 0 2px ${t.palette.hof}`
        }
    })));
    e.default = (0, n.withStyles)(u)(s.default)
}), "f0edbc", ["ba7a76", "01b367", "e0b084", "9ceadf", "d27bb8"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        onKeyboardShortcutsClose: o,
        onKeyboardShortcutsOpen: u
    }) {
        const [l, n] = (0, t.useState)(null), [s, c] = (0, t.useState)(!1), b = (0, t.useCallback)((t => {
            u && u(), c(!0), n(t)
        }), [u]);
        return {
            closeKeyboardShortcutsPanel: (0, t.useCallback)((() => {
                o && o(), l && l(), n(null), c(!1)
            }), [o, l]),
            openKeyboardShortcutsPanel: b,
            showKeyboardShortcutsPanel: s
        }
    };
    var t = r(d[0])
}), "f1755c", ["07aa1f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        findDayResource: t,
        firstDayInRange: f,
        lastDayInRangeExclusive: l
    }) {
        if (!f || !l) return !1;
        for (let c = f.clone();
            (0, n.default)(c, l); c.add(1, u.DAYS)) {
            const n = t(c);
            if (!n || !n.available) return !1
        }
        return !0
    };
    var n = t(r(d[1])),
        u = r(d[2])
}), "f9142a", ["ba7a76", "8d7453", "cb52fb"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function({
        day: t,
        findDayResource: f,
        startDate: u
    }) {
        if (null === u) return !1;
        const s = f(u);
        if (!s) return !1;
        const {
            maxNights: c = 1 / 0
        } = s, l = t.clone().startOf('day'), o = u.clone().startOf('day'), y = l.diff(o, 'days');
        if (!(0, n.default)({
                findDayResource: f,
                firstDayInRange: u,
                lastDayInRangeExclusive: t
            })) return !1;
        return y > c
    };
    var n = t(r(d[1]))
}), "fdb488", ["ba7a76", "f9142a"]);
__r("a9f4b1").extend({
    "clear_dates": "Clear dates",
    "shared.save": "Save",
    "pdp_platform.availability_calendar.keyboard_shortcuts_close_label": "Back to calendar",
    "datepicker_min_nights": "%{smart_count} night minimum stay |||| %{smart_count} night minimum stay",
    "react_dates.stays_today_selected_minrequirement_check-in_date": "%{day_number}, %{weekday}, %{month} %{year}, Today. Selected check-in date. There is a %{min}-night minimum stay requirement.",
    "react_dates.stays_selected_minrequirement_check-in_date": "%{day_number}, %{weekday}, %{month} %{year}. Selected check-in date. There is a %{min}-night minimum stay requirement.",
    "react_dates.stays_available_checkout_only": "%{day_number}, %{weekday}, %{month} %{year}. This day is only available for checkout.",
    "react_dates.stays_today_available_ineligible_check-in_date": "%{day_number}, %{weekday}, %{month} %{year}, Today. Available, but has no eligible checkout date due to the %{min}-night stay requirement.",
    "react_dates.stays_available_ineligible_check-in_date": "%{day_number}, %{weekday}, %{month} %{year}. Available, but has no eligible checkout date due to the %{min}-night stay requirement.",
    "react_dates.stays_today_available_stay_only_checkout_date": "%{day_number}, %{weekday}, %{month} %{year}, Today. Available for stay, but not for checkout.",
    "react_dates.stays_available_stay_only_checkout_date": "%{day_number}, %{weekday}, %{month} %{year}. Available for stay, but not for checkout.",
    "react_dates.stays_today_available_stay_only_check-in_date": "%{day_number}, %{weekday}, %{month} %{year}, Today. Available for stay, but not for check-in.",
    "react_dates.stays_available_stay_only_check-in_date": "%{day_number}, %{weekday}, %{month} %{year}. Available for stay, but not for check-in.",
    "react_dates.stays_today_available_minrequirement_check-in_date": "%{day_number}, %{weekday}, %{month} %{year}, Today. Available. There is a %{min}-night minimum stay requirement. Select as check-in date.",
    "react_dates.stays_available_minrequirement_check-in_date": "%{day_number}, %{weekday}, %{month} %{year}. Available. There is a %{min}-night minimum stay requirement. Select as check-in date.",
    "pdp_platform.availability_calendar.min_nights_tooltip": "%{smart_count}-night minimum",
    "lux.mys.seasons_tab_edit_checkin_day": "Check-in day",
    "lux.mys.seasons_tab_edit_checkout_day": "Checkout day",
    "pdp_platform.availability_calendar.checkout_only_tooltip": "Checkout only",
    "pdp_platform.availability_calendar.host_unavailable_tooltip": "Host unavailable"
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/93be.c29c719a28.js.map