__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var u = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(u, l) {
        return t.default.useMemo((() => null == u && null == l ? null : t => {
            n(u, t), n(l, t)
        }), [u, l])
    };
    var t = u(r(d[1]));

    function n(u, t) {
        if ('function' == typeof u) try {
            u(t)
        } catch (u) {} else null !== u && (u.current = t)
    }
}), "1dc0cc", ["ba7a76", "07aa1f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var s = t(r(d[1]));

    function n() {
        const s = t(r(d[2]));
        return n = function() {
            return s
        }, s
    }
    var o = r(d[3]);

    function l() {
        const t = r(d[4]);
        return l = function() {
            return t
        }, t
    }
    var h = t(r(d[5])),
        c = r(d[6]),
        p = t(r(d[7])),
        u = r(d[8]),
        f = r(d[9]),
        S = t(r(d[10])),
        I = t(r(d[11])),
        x = t(r(d[12])),
        w = r(d[13]),
        y = r(d[14]),
        C = (r(d[15]), t(r(d[16]))),
        v = r(d[17]),
        b = r(d[18]),
        R = t(r(d[19])),
        F = t(r(d[20])),
        B = r(d[21]);

    function T(t, s) {
        const n = s,
            o = t;
        return Object.keys(n).map((t => {
            if (o[t] !== n[t]) return {
                key: t,
                from: o[t],
                to: n[t]
            }
        })).filter(Boolean)
    }
    class _ extends s.default.Component {
        constructor(t) {
            super(t), this.state = {
                hasInteracted: !!this.props.isFirstCarouselInGroup,
                isApplyingPeekBounce: !1,
                isScrollable: !this.props.applyCompositingOptimizations || this.props.selectedIndex && this.props.selectedIndex > 0 || !!this.props.isFirstCarouselInGroup,
                selectedIndex: this.props.selectedIndex ? ? 0,
                shouldApplyRTLFix: !!this.props.applyRTLFix,
                isSnapRTLLikeLTR: !1
            }, this.slideRefs = new Map, this.slideStateManager = new F.default({
                hasInteractedWith: !this.props.applyCompositingOptimizations || !!this.props.isFirstCarouselInGroup,
                preloadCount: this.props.preloadCount,
                selectedIndex: this.props.selectedIndex ? ? 0,
                totalSlides: this.props.items.length
            }), this.listRef = null, this.rootRef = null, this.waitingForIndexToBeFullyVisible = void 0, this.fireOnChangeWhenSlideFullyVisible = void 0, this.effectiveSpaceBetweenItems = void 0, this.scrollSlideIntoView = (t, {
                smooth: s
            } = {}) => {
                const {
                    log: n,
                    onSlideWillChange: o
                } = this.props;
                this.waitingForIndexToBeFullyVisible = t;
                const l = this.slideRefs.get(t);
                if (l && this.listRef) {
                    const h = this.listRef.getBoundingClientRect().width,
                        c = h - l.getBoundingClientRect().width,
                        p = this.shouldDisplayMultipleItems() ? Math.round(c / 2) : 0,
                        u = (0, v.getScrollOffset)(this.listRef, l, this.props.direction, this.effectiveSpaceBetweenItems ? Math.floor(parseInt(this.effectiveSpaceBetweenItems, 10)) : void 0);
                    this.fireOnChangeWhenSlideFullyVisible && o && o(t), this.listRef.scrollTo({
                        left: u,
                        behavior: this.shouldUseSmoothScrolling(t, s) ? 'smooth' : 'auto'
                    }), n((() => `slide ${t} is scrolling into view at: ${l.offsetLeft-p}, totalWidth of: ${h}`))
                }
            }, this.gotoNextSlide = () => {
                const {
                    selectedIndex: t
                } = this.state, {
                    items: s,
                    log: n,
                    rewindOnBoundaries: o
                } = this.props, l = t >= s.length - 1;
                !l || o ? (this.fireOnChangeWhenSlideFullyVisible = !0, this.scrollSlideIntoView(l ? 0 : t + 1, {
                    smooth: !0
                })) : n((() => "rewinding the carousel to the first slide disabled. don't change item."))
            }, this.gotoPreviousSlide = () => {
                const {
                    selectedIndex: t
                } = this.state, {
                    items: s,
                    log: n,
                    rewindOnBoundaries: o
                } = this.props, l = t <= 0;
                !l || o ? (this.fireOnChangeWhenSlideFullyVisible = !0, this.scrollSlideIntoView(l ? s.length - 1 : t - 1, {
                    smooth: !0
                })) : n((() => "rewinding the carousel to the last slide disabled. don't change item."))
            }, this.determineSpaceBetweenItems = (t = this.props.spaceBetweenItems) => {
                if (!t) return '0px';
                return t.includes('px') ? `${String(Math.floor(parseInt(t,10)/2))}px` : `${String(Math.floor(parseInt(t,10)/2))}%`
            }, this.shouldDisplayMultipleItems = () => {
                const {
                    width: t
                } = this.props;
                return null != t && '100%' !== t
            }, this.shouldUseSmoothScrolling = (t, s) => {
                const {
                    smoothScrolling: n,
                    items: o
                } = this.props;
                if (!s) return !1;
                const {
                    selectedIndex: l
                } = this.state;
                if ('always' === n) return 'motion' === c.motionPreference.user.value;
                const h = Math.abs(l - t);
                return (1 === h || h === o.length - 1) && 'adjacent' === n
            }, this.setIsInteracting = () => {
                const {
                    log: t,
                    onInteracted: s,
                    preloadCount: n,
                    scheduler: o
                } = this.props, {
                    hasInteracted: l
                } = this.state;
                void 0 !== n && (l || (t((() => 'Interaction event fired.')), this.slideStateManager.setHasInteractedWith(!0), this.setState({
                    hasInteracted: !0,
                    isScrollable: !0
                }), o.postTask((() => s ? .()))))
            }, this.handleAnimationEnd = () => {
                this.setState({
                    isApplyingPeekBounce: !1
                })
            }, this.toggleScrolling = t => {
                const {
                    hasInteracted: s,
                    isScrollable: n
                } = this.state, {
                    log: o,
                    preloadCount: l,
                    scheduler: h
                } = this.props;
                t && s && n || (n !== t && (o((() => ["Scrolling is now " + (t ? 'enabled' : 'off')])), h.requestAnimationFrame((() => {
                    this.setState({
                        isScrollable: t
                    })
                }))), t && void 0 === l && !s && (this.slideStateManager.setHasInteractedWith(!0), this.setState({
                    hasInteracted: !0
                })))
            }, this.handleCarouselVisible = t => {
                const {
                    applyCompositingOptimizations: s,
                    scheduler: n
                } = this.props;
                s && n.postTask((() => this.toggleScrolling(t)), {
                    delay: 500
                })
            }, this.handleSlideFullyVisible = (t, s) => {
                if (!s || !t || void 0 === this.waitingForIndexToBeFullyVisible) return;
                const n = s.target.getAttribute('data-key');
                if (!n) return;
                const o = this.getSlideDataForKey(n);
                if (!o) return;
                const {
                    log: l
                } = this.props;
                if (this.waitingForIndexToBeFullyVisible === o.index && (this.waitingForIndexToBeFullyVisible = void 0, this.setState({
                        selectedIndex: o.index
                    }), l((() => `slide ${o.index} is now fully in view`)), this.fireOnChangeWhenSlideFullyVisible)) {
                    this.fireOnChangeWhenSlideFullyVisible = !1;
                    const {
                        onSlideChanged: t,
                        scheduler: s
                    } = this.props;
                    if (!t) return;
                    s.requestAnimationFrame((() => {
                        s.requestAnimationFrame((() => {
                            const {
                                selectedIndex: s
                            } = this.state;
                            s === o.index ? t(o) : l((() => `skipping "${o.index}" as "${s}" is selected now.`))
                        }))
                    }))
                }
            }, this.handleSlideVisible = (t, s) => {
                if (!s || !t || void 0 !== this.waitingForIndexToBeFullyVisible) return;
                const n = s.target.getAttribute('data-key');
                n && this.fireOnSlideChanged(n)
            }, this.handleKeyDown = t => {
                const {
                    selectedIndex: s
                } = this.state, {
                    items: n,
                    log: o
                } = this.props;
                let l = s;
                switch (t.key) {
                    case 'd':
                    case 'ArrowRight':
                        l = this.getNextIndex();
                        break;
                    case 'a':
                    case 'ArrowLeft':
                        l = this.getPreviousIndex();
                        break;
                    case 'Home':
                        l = 0;
                        break;
                    case 'End':
                        l = n.length - 1;
                        break;
                    default:
                        return
                }
                if (l !== s) {
                    if (this.shouldPreventNextChange(l)) return void o((() => "rewinding the carousel to the first/last slide disabled. don't change item."));
                    o((() => `going to slide ${l} from "${t.key}" press`)), t.preventDefault(), this.fireOnChangeWhenSlideFullyVisible = !0, this.scrollSlideIntoView(l, {
                        smooth: !0
                    })
                }
            }, this.dispatchSlideChanged = async t => {
                const {
                    selectedIndex: s
                } = this.state, {
                    log: n,
                    onSlideChanged: o
                } = this.props;
                s === t.index ? o ? .(t) : n((() => `skipping "${t.index}" as "${s}" is selected now.`))
            }, this.fireOnSlideChanged = t => {
                const s = this.getSlideDataForKey(t);
                if (!s) return;
                const {
                    selectedIndex: n
                } = this.state, {
                    log: o,
                    scheduler: l
                } = this.props;
                n !== s.index && (o((() => `setting selected index to: ${s.index}`)), this.setState({
                    selectedIndex: s.index
                }, (() => {
                    l.requestAnimationFrame((() => {
                        l.requestAnimationFrame((() => this.dispatchSlideChanged(s)))
                    }))
                })))
            }, this.getSlideDataForKey = t => {
                const {
                    items: s,
                    log: n
                } = this.props, o = s.find((s => (0, b.getKeyFromItem)(s) === t));
                if (void 0 === o) return void n((() => [`No item with key: "${t}" exists.`, {
                    items: s
                }]));
                return {
                    item: o,
                    index: s.indexOf(o)
                }
            }, this.setRootRef = t => {
                this.rootRef = t
            }, this.setListRef = t => {
                const s = t;
                if (s ? .node) {
                    const t = s.node;
                    return this.listRef = t, t
                }
            }, this.setSlideRef = t => {
                if (t) {
                    const s = t.getAttribute('data-key');
                    if (s) {
                        const n = this.getSlideDataForKey(s);
                        if (!n) return;
                        this.slideRefs.set(n.index, t)
                    }
                }
            }, this.effectiveSpaceBetweenItems = this.determineSpaceBetweenItems()
        }
        componentDidMount() {
            const {
                applyPeekBouncing: t,
                selectedIndex: s,
                applyRTLFix: n,
                log: o
            } = this.props;
            t && this.setState({
                isApplyingPeekBounce: !0
            });
            const l = n || void 0 === n && ((0, w.isIos)() || (0, w.isWebSafari)());
            l !== !!n && this.setState({
                shouldApplyRTLFix: l
            });
            const h = (0, w.isFirefox)();
            h && this.setState({
                isSnapRTLLikeLTR: h
            }), s && s > 0 && Promise.resolve().then((() => {
                const {
                    selectedIndex: t
                } = this.props;
                s === t && (o((() => `scrolling slide ${s} into view on mount`)), this.scrollSlideIntoView(s))
            }))
        }
        shouldComponentUpdate(t, s) {
            const {
                items: n,
                log: o,
                preloadCount: l,
                render: h,
                renderControls: c,
                selectedIndex: p,
                shouldPreloadImmediately: u,
                width: f
            } = this.props, {
                hasInteracted: S,
                selectedIndex: I
            } = this.state, {
                items: x,
                render: w,
                renderControls: y,
                selectedIndex: C,
                shouldPreloadImmediately: v,
                preloadCount: b,
                width: R
            } = t, {
                selectedIndex: F
            } = s, B = x.length;
            return n !== x ? (o((() => ['items are updating, resetting preload state', n, x])), this.slideStateManager.reset({
                preloadCount: b,
                selectedIndex: C ? ? 0,
                totalSlides: B
            }), !0) : p !== C ? (this.slideStateManager.setSelectedIndex(C ? ? 0), !0) : c !== y || (h !== w || (f !== R || (u !== v && !S || (l !== b && this.slideStateManager.setPreloadCount(b), I !== F && this.slideStateManager.setSelectedIndex(F), this.state !== s))))
        }
        componentDidUpdate(t, s) {
            const {
                selectedIndex: n
            } = t, {
                props: o,
                state: l
            } = this, {
                selectedIndex: h,
                alignCenter: c,
                log: p
            } = o, {
                selectedIndex: u
            } = l;
            t !== o && p((() => ['The carousel props just updated.', {
                prevProps: t,
                props: o,
                changes: T(t, o)
            }])), s !== l && p((() => ['The carousel state just updated.', {
                prevState: s,
                state: l,
                changes: T(s, l)
            }])), n !== h && u !== h ? (this.fireOnChangeWhenSlideFullyVisible = !0, this.scrollSlideIntoView(h ? ? 0, {
                smooth: void 0 !== n
            })) : !c && n !== h && this.shouldDisplayMultipleItems() && this.scrollSlideIntoView(h ? ? 0, {
                smooth: void 0 !== n
            })
        }
        UNSAFE_componentWillReceiveProps({
            applyPeekBouncing: t,
            spaceBetweenItems: s,
            shouldPreloadImmediately: n
        }) {
            const {
                applyPeekBouncing: o,
                spaceBetweenItems: l,
                shouldPreloadImmediately: h
            } = this.props;
            !o && t && this.setState({
                isApplyingPeekBounce: !0
            }), l !== s && (this.effectiveSpaceBetweenItems = this.determineSpaceBetweenItems(s)), !h && n && this.setIsInteracting()
        }
        render() {
            const {
                hasInteracted: t,
                isApplyingPeekBounce: s,
                isScrollable: n,
                selectedIndex: h,
                shouldApplyRTLFix: c,
                isSnapRTLLikeLTR: p
            } = this.state, {
                alignCenter: u,
                'aria-label': f,
                applyCompositingOptimizations: w,
                borderRadius: C,
                carouselVisibilityThreshold: v,
                css: F,
                direction: T,
                hideScrollbar: _,
                leftGutterSpace: V,
                items: k,
                itemVisibilityThreshold: P,
                isFirstCarouselInGroup: A,
                render: L,
                renderControls: O,
                rightGutterSpace: j,
                spaceBetweenItems: $,
                styles: M,
                supportKeyboardEvents: N,
                width: D,
                useContentVisibilityOptimizations: W,
                linariaClassNames: E,
                cx: K
            } = this.props, z = W ? ? S.default.getBootstrap('enable_carousel_contentvisibility'), q = w && void 0 === this.waitingForIndexToBeFullyVisible && !n, G = {
                marginLeft: `-${this.effectiveSpaceBetweenItems}`,
                marginRight: `-${this.effectiveSpaceBetweenItems}`
            }, U = $ ? `0px ${this.effectiveSpaceBetweenItems} 0px ${this.effectiveSpaceBetweenItems}` : void 0, H = 'string' == typeof D ? D : '0', J = V || (100 - Number.parseInt(H, 10)) / 2 + "%", Q = !!V || u, X = j || (100 - Number.parseInt(H, 10)) / 2 + "%", Y = !!j || u, Z = 0 === h, ee = (0, B.jsxs)(l().InView, {
                "aria-label": f,
                as: "ul",
                initialInView: !!A || void 0,
                threshold: .7,
                onChange: this.handleCarouselVisible,
                onMouseEnter: this.setIsInteracting,
                onScroll: t ? void 0 : this.setIsInteracting,
                onTouchStart: t || n ? void 0 : () => this.toggleScrolling(!0),
                ref: this.setListRef,
                className: K(E ? .outerCarouselContainer, Z && E ? .outerCarouselContainer_overflowClip, c && T === o.DIRECTIONS.RTL && E ? .disableScrollSnap, _ && E ? .container_iosAdjustmentChild, q && !Z && E ? .container_preventScrolling, q && Z && E ? .container_preventScrolling_overflowClip, G && "i1i9w0g1 atm_gz_17zs0am atm_h0_17zs0am", V && "it3id9a atm_ny_15awwkx"),
                style: {
                    '--dls-carousel-contents-margin-spacing': `-${this.effectiveSpaceBetweenItems}`,
                    '--dls-carousel-contents-left-gutter-space': 'number' == typeof V ? `${V}px` : V
                },
                ...(0, y.maybeRwsCss)(F, M ? .outerCarouselContainer, Z && M ? .outerCarouselContainer_overflowClip, c && T === o.DIRECTIONS.RTL && M ? .disableScrollSnap, _ && M ? .container_iosAdjustmentChild, q && !Z && M ? .container_preventScrolling, q && Z && M ? .container_preventScrolling_overflowClip, G, V && {
                    scrollPadding: V
                }),
                children: [Q && (0, B.jsx)("div", {
                    style: {
                        flex: `0 0 ${J}`
                    },
                    "aria-hidden": "true"
                }), N && (0, B.jsx)(I.default, {
                    target: "document",
                    type: "keydown",
                    onEvent: this.handleKeyDown
                }), k.map(((t, o) => {
                    const l = (0, b.getKeyFromItem)(t),
                        {
                            outerCarouselContainer: c,
                            outerCarouselContainer_overflowClip: f,
                            disableScrollSnap: S,
                            container_iosAdjustmentChild: I,
                            container_preventScrolling: x,
                            container_preventScrolling_overflowClip: w,
                            container_iosAdjustmentParent: y,
                            ...C
                        } = E || {};
                    return (0, B.jsx)(R.default, {
                        alignCenter: u,
                        ariaHidden: h !== o && !this.shouldDisplayMultipleItems(),
                        carouselVisibilityThreshold: v,
                        css: F,
                        enabled: !z || n,
                        initialInView: A,
                        item: t,
                        isApplyingPeekBounce: s,
                        onAnimationEnd: this.handleAnimationEnd,
                        onChange: this.handleSlideVisible,
                        onFullyVisible: this.handleSlideFullyVisible,
                        ref: this.setSlideRef,
                        render: L,
                        rootMargin: U,
                        rootRef: this.rootRef,
                        slideIndex: o,
                        slideState: this.slideStateManager.getStateForSlide(o),
                        spaceBetweenItems: this.effectiveSpaceBetweenItems,
                        styles: M,
                        width: D,
                        direction: T,
                        isSnapRTLLikeLTR: p,
                        itemVisibilityThreshold: P,
                        linariaClassNames: C
                    }, l)
                })), Y && (0, B.jsx)("div", {
                    style: {
                        flex: `0 0 ${X}`
                    },
                    "aria-hidden": "true"
                })]
            });
            let te = ee;
            if (_ && (te = (0, B.jsx)("div", {
                    className: K(E ? .container_iosAdjustmentParent),
                    ...(0, y.maybeRwsCss)(F, M ? .container_iosAdjustmentParent),
                    children: ee
                })), O) {
                const t = k.length,
                    s = 0 === h,
                    n = h === t - 1;
                return (0, B.jsxs)("div", {
                    className: K(E ? .controlsContainer),
                    ...(0, y.maybeRwsCss)(F, M ? .controlsContainer),
                    ref: this.setRootRef,
                    children: [(0, B.jsx)(x.default, {
                        when: !!C,
                        wrapper: (0, B.jsx)("div", {
                            className: K("dp1l7u6 atm_5j_otdtrn atm_ks_15vqwwr"),
                            style: {
                                '--dls-carousel-controls-container-border-radius': `${C}px`
                            },
                            ...(0, y.maybeRwsCss)(F, {
                                borderRadius: C,
                                overflow: 'hidden'
                            })
                        }),
                        children: te
                    }), O({
                        isFirstSlideSelected: s,
                        isLastSlideSelected: n,
                        selectedIndex: h,
                        total: t,
                        gotoNextSlide: this.gotoNextSlide,
                        gotoPreviousSlide: this.gotoPreviousSlide
                    })]
                })
            }
            return (0, B.jsx)(x.default, {
                when: !!C,
                wrapper: (0, B.jsx)("div", {
                    className: K("d18l0tot atm_5j_otdtrn atm_ks_15vqwwr"),
                    style: {
                        '--dls-carousel-controls-container-border-radius': `${C}px`
                    },
                    ...(0, y.maybeRwsCss)(F, {
                        borderRadius: C,
                        overflow: 'hidden'
                    })
                }),
                children: te
            })
        }
        shouldPreventNextChange(t) {
            const {
                rewindOnBoundaries: s,
                items: n
            } = this.props, {
                selectedIndex: o
            } = this.state, l = Math.abs(o - t) === n.length - 1;
            return !s && l
        }
        getNextIndex() {
            const {
                selectedIndex: t
            } = this.state, {
                direction: s,
                items: n
            } = this.props;
            let l = t;
            return s === o.DIRECTIONS.RTL ? (l -= 1, l < 0 && (l = n.length - 1)) : (l += 1, l > n.length - 1 && (l = 0)), l
        }
        getPreviousIndex() {
            const {
                selectedIndex: t
            } = this.state, {
                direction: s,
                items: n
            } = this.props;
            let l = t;
            return s === o.DIRECTIONS.RTL ? (l += 1, l > n.length - 1 && (l = 0)) : (l -= 1, l < 0 && (l = n.length - 1)), l
        }
    }
    _.defaultProps = {
        rewindOnBoundaries: !0,
        items: [],
        render: t => t,
        selectedIndex: 0,
        smoothScrolling: 'adjacent'
    };
    e.default = (0, p.default)((0, h.default)('Carousel', ['onSlideChanged']), (0, n().default)((() => ({ ...(0, f.usePostTaskScheduler)(),
        log: (0, u.useDebugLogger)('Carousel')
    }))), C.default)(_)
}), "26a70b", ["ba7a76", "07aa1f", "8d7641", "cfdcdc", "b99fef", "9092d5", "daa5d1", "95246c", "f8ea9a", "53bb4a", "c235f8", "654ebb", "82f5b0", "e9b7bf", "2d8af3", "4786a8", "f915f9", "cc14eb", "aa6332", "644dff", "a359aa", "b8c07d"]);
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
}), "31ec09", ["ba7a76", "07aa1f", "25ce18", "9ce10f", "b858e8", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var s = n(r(d[2])),
        o = r(d[3]);

    function l() {
        const t = r(d[4]);
        return l = function() {
            return t
        }, t
    }
    var u = r(d[5]),
        c = r(d[6]),
        f = r(d[7]),
        h = t(r(d[8])),
        I = r(d[9]),
        w = r(d[10]),
        _ = r(d[11]);
    e.default = s.default.forwardRef((function({
        alignCenter: t,
        ariaHidden: n,
        carouselVisibilityThreshold: x = .99,
        css: p,
        enabled: y,
        initialInView: C,
        isApplyingPeekBounce: R,
        item: V,
        itemVisibilityThreshold: k = .6,
        onAnimationEnd: b,
        onChange: T,
        onFullyVisible: S,
        render: v,
        rootMargin: A,
        rootRef: E,
        slideIndex: W,
        slideState: j,
        spaceBetweenItems: L,
        styles: M,
        width: N,
        direction: B,
        isSnapRTLLikeLTR: D,
        linariaClassNames: F
    }, O) {
        const P = (0, c.useCx)(),
            {
                scheduler: $
            } = (0, u.usePostTaskScheduler)(),
            q = (0, s.useMemo)((() => (0, I.getKeyFromItem)(V)), [V]),
            H = (0, s.useMemo)((() => {
                const t = {
                    borderWidth: `0px ${L} 0px ${L}`
                };
                if (N) {
                    let n;
                    n = 'function' == typeof N ? N({
                        item: V,
                        index: W
                    }) : N, t.maxWidth = n, t.flex = `0 0 ${n}`
                }
                return t
            }), [V, W, L, N]),
            K = !!y && ![w.SlideState.READY, w.SlideState.ACTIVE].includes(j),
            [Y, z, G] = (0, l().useInView)({
                initialInView: C,
                skip: K,
                root: E,
                rootMargin: A,
                threshold: x
            });
        (0, s.useEffect)((() => {
            S(z, G)
        }), [z]);
        const [J, Q, U] = (0, l().useInView)({
            initialInView: C,
            skip: K,
            root: E,
            threshold: k
        });
        (0, s.useEffect)((() => {
            $.requestAnimationFrame((() => T(Q, U)))
        }), [Q]);
        const X = (0, h.default)(J, O);
        return (0, _.jsx)("li", {
            "aria-hidden": n,
            "data-key": q,
            onAnimationEnd: b,
            ref: X,
            className: P(F ? .carouselItem, B === o.DIRECTIONS.RTL && !D && F ? .carouselItemRtl, !N && F ? .carouselItem_fullWidth, t && F ? .carouselItem_centered, R && W < 2 && F ? .peekBounceAnimation, "l165un95 atm_j3_aavto6 atm_am_1enxd9j atm_6h_1wk7kwp"),
            style: {
                '--dls-carousel-item-max-width': H.maxWidth,
                '--dls-carousel-item-flex': H.flex,
                '--dls-carousel-item-border-width': H.borderWidth
            },
            ...(0, f.maybeRwsCss)(p, M ? .carouselItem, B === o.DIRECTIONS.RTL && !D && M ? .carouselItemRtl, !N && M ? .carouselItem_fullWidth, t && M ? .carouselItem_centered, R && W < 2 && M ? .peekBounceAnimation, H),
            children: (0, _.jsx)("div", {
                ref: Y,
                "data-key": q,
                className: P(F ? .inViewContainer, t && F ? .inViewContainer_centered),
                ...(0, f.maybeRwsCss)(p, M ? .inViewContainer, t && M ? .inViewContainer_centered),
                children: v ? v(V, j, W) : void 0
            })
        })
    }))
}), "644dff", ["ba7a76", "45f788", "07aa1f", "cfdcdc", "b99fef", "53bb4a", "4786a8", "2d8af3", "1dc0cc", "aa6332", "a359aa", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.carouselDefaultCssFragments = void 0;
    var t = r(d[1]);
    r(d[2]), n(r(d[3]));
    const o = e.carouselDefaultCssFragments = {
        outerCarouselContainer: "\n    -ms-overflow-style: none; /* IE 10+ */\n    scrollbar-width: none; /* Firefox */\n    /* This will create a block formatting context on flex items, which will\n   * prevent margin collapsing and is necessary to properly support the\n   * spacing between carousel items.\n   */\n    display: flex;\n    height: 100%;\n    list-style: none;\n    overflow-x: auto;\n    overflow-y: hidden;\n    padding-left: 0;\n    -webkit-overflow-scrolling: touch;\n    margin-bottom: 0;\n    margin-top: 0;\n    min-width: 100%;\n\n    /* Chrome, Safari */\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  ",
        outerCarouselContainer_overflowClip: "\n    @supports (overflow: clip) {\n      overflow-x: auto;\n      overflow-y: clip;\n    }\n  ",
        container_iosAdjustmentChild: "\n    padding-bottom: 20px;\n  ",
        container_iosAdjustmentParent: "\n    height: 100%;\n    position: absolute;\n    width: 100%;\n  ",
        container_preventScrolling: "\n    overflow: hidden;\n  ",
        container_preventScrolling_overflowClip: "\n    @supports (overflow: clip) {\n      overflow: clip;\n    }\n\n    @supports not (overflow: clip) {\n      overflow: hidden;\n    }\n  ",
        carouselItem: "\n    border-style: solid;\n    border-color: transparent;\n  ",
        carouselItem_centered: "\n    scroll-snap-align: center;\n  ",
        carouselItem_fullWidth: "\n    flex: 0 0 100%;\n    max-width: 100%;\n  ",
        carouselItem_contentVisibilityOptimized: "\n    content-visibility: auto;\n    contain-intrinsic-size: calc(var(--vw) - 48px) 100px;\n  ",
        controlsContainer: "\n    height: 100%;\n    position: relative;\n    width: 100%;\n  ",
        peekBounceAnimation: "\n    animation-name: animation-2f1d84;\n\n    @keyframes animation-2f1d84 {\n      40% {\n        transform: translateX(-30px);\n\n        animation-timing-function: var(--linaria-theme_motion-standard-curve-animation-timing-function);\n      }\n\n      70% {\n        transform: translateX(10px);\n        /* stylelint-disable-next-line airbnb-plugin/no-custom-motion-curve */\n        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n      }\n\n      100% {\n        transform: translateX(0);\n\n        animation-timing-function: var(--linaria-theme_motion-standard-curve-animation-timing-function);\n      }\n    }\n    animation-duration: 800ms;\n  ",
        inViewContainer: "\n    height: 100%;\n  ",
        inViewContainer_centered: "\n    display: flex;\n    justify-content: center;\n  "
    };
    e.default = (0, t.cssFragmentsObjToStylesFn)(o)()
}), "916c43", ["ba7a76", "2d8af3", "4786a8", "5aed2e"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.carouselSnappableCssFragments = void 0;
    r(d[0]), r(d[1]);
    e.carouselSnappableCssFragments = {
        outerCarouselContainer: "\n    scroll-snap-type: x mandatory;\n  ",
        carouselItem: "\n    scroll-snap-align: start;\n    scroll-snap-stop: always;\n  ",
        carouselItemRtl: "\n    scroll-snap-align: end;\n  ",
        disableScrollSnap: "\n    scroll-snap-type: none;\n  "
    }
}), "920e6e", ["2d8af3", "4786a8"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    r(d[0]);
    var _ = r(d[1]),
        t = (r(d[2]), r(d[3])),
        f = r(d[4]),
        o = r(d[5]);
    (0, t.mergeStyles)(_.baseIconButtonCssFragments, o.floatingIconCssFragments, {
        component: "\n      width: 32px;\n      height: 32px;\n    "
    });
    e.default = (0, f.createVariant)(_.BaseIconButton, {
        component: "cz6qhuf atm_1s_glywfm atm_9s_1o8liyq atm_5j_1ssbidh atm_3f_idpfg4 atm_kd_idpfg4 atm_7l_1u9drld atm_2d_1j28jx2 atm_9j_tlke0l atm_tl_1gw4zv3 atm_9s_116y0ak atm_h_1h6ojuz atm_fc_1h6ojuz atm_66_nqa18y atm_6h_t94yts atm_l8_idpfg4 atm_gi_idpfg4 atm_2a_1u8qnfj atm_2d_1kn93ch atm_4b_muzi1o atm_7l_jt7fhx atm_70_1dw9ftv atm_uc_10d7vwn atm_kd_glywfm atm_vy_1vi7ecw atm_e2_1vi7ecw atm_kd_glywfm_1w3cfyq atm_uc_aaiy6o_1w3cfyq atm_70_1snd6fg_1w3cfyq atm_3f_glywfm_e4a3ld atm_l8_idpfg4_e4a3ld atm_gi_idpfg4_e4a3ld atm_3f_glywfm_1r4qscq atm_kd_glywfm_6y7yyg atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_kd_glywfm_pfnrn2_1oszvuo atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_1snd6fg_pfnrn2_1oszvuo atm_3f_glywfm_1icshfk_1oszvuo atm_l8_idpfg4_1icshfk_1oszvuo atm_gi_idpfg4_1icshfk_1oszvuo atm_3f_glywfm_b5gff8_1oszvuo atm_kd_glywfm_2by9w9_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_k4_1piyxwk_1o5j5ji atm_9j_13gfvf7_1o5j5ji atm_7l_jajhky_1o5j5ji atm_uc_glywfm__1rrf6b5 atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_uc_aaiy6o_1w3cfyq atm_4b_1qnzqti_1w3cfyq atm_26_1qwqy05_1w3cfyq atm_7l_jt7fhx_1w3cfyq atm_70_5ilard_1w3cfyq atm_tr_m1zi52_1w3cfyq atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_uc_aaiy6o_pfnrn2_1oszvuo atm_4b_1qnzqti_pfnrn2_1oszvuo atm_26_1qwqy05_pfnrn2_1oszvuo atm_7l_jt7fhx_pfnrn2_1oszvuo atm_70_5ilard_pfnrn2_1oszvuo atm_tr_m1zi52_pfnrn2_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_4b_muzi1o_1nos8r_uv4tnr atm_2d_1qwqy05_1nos8r_uv4tnr atm_7l_177r58q_1nos8r_uv4tnr atm_70_12rfm42_1nos8r_uv4tnr atm_tr_m1zi52_1nos8r_uv4tnr atm_4b_1k0ymf0_4fughm_uv4tnr atm_2d_1qwqy05_4fughm_uv4tnr atm_7l_9vytuy_4fughm_uv4tnr atm_70_glywfm_4fughm_uv4tnr atm_tr_1h7a3po_4fughm_uv4tnr atm_4b_muzi1o_csw3t1 atm_2d_1qwqy05_csw3t1 atm_7l_177r58q_csw3t1 atm_70_glywfm_csw3t1 atm_tr_1h7a3po_csw3t1 atm_4b_1k0ymf0_1o5j5ji atm_2d_1qwqy05_1o5j5ji atm_7l_9vytuy_1o5j5ji atm_70_glywfm_1o5j5ji atm_tr_1h7a3po_1o5j5ji",
        icon: "isqgmsg",
        baseButtonShowOnlyOnKeyboardFocus: "b3p4o08 atm_3f_idpfg4_1r63tcj atm_7h_hxbz6r_1r63tcj atm_7i_ysn8ba_1r63tcj atm_e2_t94yts_1r63tcj atm_ks_15vqwwr_1r63tcj atm_ks_zryt35_1r63tcj atm_l8_idpfg4_1r63tcj atm_mk_stnw88_1r63tcj atm_vv_1q9ccgz_1r63tcj atm_vy_t94yts_1r63tcj",
        baseAnchorShowOnlyOnKeyboardFocus: "b1mw8jmh atm_3f_idpfg4_1r63tcj atm_7h_hxbz6r_1r63tcj atm_7i_ysn8ba_1r63tcj atm_e2_t94yts_1r63tcj atm_ks_15vqwwr_1r63tcj atm_ks_zryt35_1r63tcj atm_l8_idpfg4_1r63tcj atm_mk_stnw88_1r63tcj atm_vv_1q9ccgz_1r63tcj atm_vy_t94yts_1r63tcj"
    })
}), "9cf6c6", ["ea4b89", "cfbf16", "4786a8", "aabdb1", "92749c", "3ea206"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.SlideState = void 0;
    var t = r(d[0]);
    let s = e.SlideState = (function(t) {
        return t.IDLE = "Idle", t.PLACEHOLDER = "Placeholder", t.READY = "Ready", t.ACTIVE = "Active", t
    })({});
    e.default = class {
        constructor(h) {
            this.slideStates = new Map, this.hasInteractedWith = void 0, this.preloadCount = void 0, this.selectedIndex = 0, this.totalSlides = 0, this.reset = ({
                hasInteractedWith: t,
                preloadCount: s,
                selectedIndex: h,
                totalSlides: l
            }) => {
                this.slideStates.clear(), this.preloadCount = s, this.selectedIndex = h, this.totalSlides = l, void 0 !== t && (this.hasInteractedWith = t), this.updateStates()
            }, this.setSelectedIndex = t => {
                this.selectedIndex = t, this.updateStates()
            }, this.setHasInteractedWith = t => {
                this.hasInteractedWith !== t && (this.hasInteractedWith = t, this.updateStates())
            }, this.setPreloadCount = t => {
                this.preloadCount = t
            }, this.getStateForSlide = h => {
                const l = this.slideStates.get(h);
                if (!l) {
                    const l = new Error('Invalid slide index in carousel');
                    return (0, t.reportError)(l, {
                        extra: {
                            hasInteractedWith: this.hasInteractedWith,
                            preloadCount: this.preloadCount,
                            selectedIndex: this.selectedIndex,
                            slideIndex: h,
                            totalSlides: this.totalSlides
                        }
                    }), s.READY
                }
                return l
            }, this.updateStates = () => {
                Array.from({
                    length: this.totalSlides
                }).forEach(((t, h) => {
                    if (h === this.selectedIndex) return void this.slideStates.set(h, s.ACTIVE);
                    const l = this.slideStates.get(h);
                    if (l === s.READY) return;
                    if (l === s.ACTIVE) return void this.slideStates.set(h, s.READY);
                    let n;
                    if (this.hasInteractedWith) n = this.isWithinPreloadRange(h) ? s.READY : s.PLACEHOLDER;
                    else {
                        n = h === this.selectedIndex + 1 ? s.PLACEHOLDER : s.IDLE
                    }
                    this.slideStates.set(h, n)
                }))
            }, this.isWithinPreloadRange = t => {
                if (void 0 === this.preloadCount) return !0;
                const s = 0 === this.selectedIndex && t === this.totalSlides - 1,
                    h = 0 === t && this.selectedIndex === this.totalSlides - 1,
                    l = this.selectedIndex - this.preloadCount,
                    n = this.selectedIndex + this.preloadCount;
                return h || s || l <= t && t <= n
            }, this.reset(h)
        }
    }
}), "a359aa", ["f2f40f"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getKeyFromItem = function(t) {
        if ('string' == typeof t) return t;
        if ('number' == typeof t) return String(t);
        const n = [t.key, t.id].find((t => null != t && '' !== t));
        if ('number' == typeof n) return String(n);
        if ('string' == typeof n) return n;
        return
    }
}), "aa6332", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ScrollType = void 0, e.default = n, e.getScrollOffset = function(o, s, f, c = 0) {
        if (f === t.Direction.RTL) {
            const t = n();
            if (t === l.POSITIVE) return o.scrollWidth - o.clientWidth + s.offsetLeft;
            if (t === l.REVERSE) return -1 * s.offsetLeft - c
        }
        return s.offsetLeft + c
    };
    var t = r(d[0]);
    let o, l = e.ScrollType = (function(t) {
        return t[t.POSITIVE = 0] = "POSITIVE", t[t.NEGATIVE = 1] = "NEGATIVE", t[t.REVERSE = 2] = "REVERSE", t
    })({});

    function n() {
        if (void 0 !== o) return o;
        const t = document.createElement('div');
        return t.appendChild(document.createTextNode('test')), t.dir = 'rtl', t.classList.add('notranslate'), t.style.fontSize = '14px', t.style.height = '1px', t.style.overflow = 'scroll', t.style.position = 'absolute', t.style.top = '-1000px', t.style.width = '4px', document.body.appendChild(t), o = l.REVERSE, t.scrollLeft > 0 ? o = l.POSITIVE : (t.scrollLeft = 3, 3 !== t.scrollLeft && (o = l.NEGATIVE)), document.body.removeChild(t), o
    }
}), "cc14eb", ["dbfcd8"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var _ = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = _(r(d[1])),
        o = r(d[2]),
        n = r(d[3]),
        l = _(r(d[4])),
        s = r(d[5]),
        c = r(d[6]);
    (0, o.mergeStyles)(s.carouselDefaultCssFragments, c.carouselSnappableCssFragments);
    e.default = (0, t.default)((0, n.createVariant)(l.default, {
        outerCarouselContainer: "o12ps33 atm_ky_glywfm atm_p9_glywfm atm_9s_1txwivl atm_e2_1osqo2v atm_gb_glywfm atm_l0_1wugsn5 atm_l1_15vqwwr atm_lk_idpfg4 atm_kx_i4x0gi atm_gq_idpfg4 atm_h3_idpfg4 atm_jb_1osqo2v atm_or_x6ddxa atm_9s_glywfm_14pyf7n",
        outerCarouselContainer_overflowClip: "olpjpu2 atm_l0_1wugsn5__1rgatj2 atm_l1_zryt35__1rgatj2",
        container_iosAdjustmentChild: "c17160p2 atm_le_gktfv",
        container_iosAdjustmentParent: "ch2bscd atm_e2_1osqo2v atm_mk_stnw88 atm_vy_1osqo2v",
        container_preventScrolling: "c1kb9o4l atm_ks_15vqwwr",
        container_preventScrolling_overflowClip: "c1nb0j69 atm_ks_zryt35__1rgatj2 atm_ks_15vqwwr__1yj3dog",
        carouselItem: "cj938rc atm_66_nqa18y atm_4b_1j28jx2 atm_oa_v2br90 atm_oq_oga405",
        carouselItem_centered: "ce8u0zj atm_oa_1h6ojuz",
        carouselItem_fullWidth: "cghkfb5 atm_am_yxrqlz atm_j3_1osqo2v",
        carouselItem_contentVisibilityOptimized: "cj1qjne atm_93_1wugsn5 atm_90_fdqgno",
        controlsContainer: "cte3k0q atm_e2_1osqo2v atm_mk_h2mmj6 atm_vy_1osqo2v",
        peekBounceAnimation: "prwnezj atm_1c_14dx8pl atm_y_dgicwn",
        inViewContainer: "i1pk5h9b atm_e2_1osqo2v",
        inViewContainer_centered: "i1yazym0 atm_9s_1txwivl atm_fc_1h6ojuz"
    }))
}), "f47f2e", ["ba7a76", "cfdcdc", "aabdb1", "92749c", "26a70b", "916c43", "920e6e"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-stays-pdp-sections/sections/Reviews/ReviewsSection.2c96f17409.js.map