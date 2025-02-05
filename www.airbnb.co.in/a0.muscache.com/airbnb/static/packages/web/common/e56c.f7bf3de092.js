__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        switch (document.visibilityState) {
            case 'visible':
                return 1;
            case 'hidden':
                return 2;
            case 'prerender':
                return 3;
            default:
                return 4
        }
    }
}), "1140d4", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";

    function t(t) {
        const c = t < 0 ? -1 : 1,
            n = 1 / (1 + .3275911 * (t = Math.abs(t)));
        return c * (1 - n * (.254829592 + n * (n * (1.421413741 + n * (1.061405429 * n - 1.453152027)) - .284496736)) * Math.exp(-t * t))
    }

    function c(c, n, f) {
        const o = Math.log(c),
            u = Math.log(n / c),
            s = Math.sqrt(1 - 3 * u - Math.sqrt((u - 3) * (u - 3) - 8)) / 2;
        return (1 - t((Math.log(f) - o) / (Math.SQRT2 * s))) / 2
    }

    function n({
        ttfcp: t,
        ttfmp: n,
        tbt: f,
        fid: o,
        cls: u
    }) {
        return {
            ttfcp: c(2500, .08491351406, t || 0),
            ttfmp: c(3e3, 244.5719961, n || 0),
            fid: c(170, .6089337333, o || 0),
            tbt: c(1250, 167.2687485, f || 0),
            cls: c(.15, 1.889923697e-7, u || 0)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.calculatePagePerformanceScore = function(t) {
        const c = n(t);
        return .35 * c.ttfcp + .15 * c.ttfmp + .3 * c.fid + .15 * c.tbt + .05 * c.cls
    }
}), "27c072", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.HYDRATE_PERFORMANCE_HOC_MARK = e.HYDRATE_MEANINGFUL_ELEMENT_MARK = e.FMP_TARGET_ID = void 0;
    e.FMP_TARGET_ID = 'FMP-target', e.HYDRATE_MEANINGFUL_ELEMENT_MARK = 'hydrate-meaningful-element', e.HYDRATE_PERFORMANCE_HOC_MARK = 'hydrate-performance-hoc'
}), "364f02", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        return u.default.get('china-guest-loop')
    };
    var u = t(r(d[1]))
}), "491401", ["ba7a76", "ef2bc3"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cssRule = void 0, e.default = function({
        resources: t,
        universalPageName: l
    }) {
        if (0 === t.length || t.length > 0 && void 0 === t[0].decodedBodySize) return;
        const h = ['link', 'img', 'css', 'script', 'other'],
            f = [u, {
                type: 'img',
                initiatorList: ['img', 'css', 'link'],
                regex: /^.+(muscache|localhost).+(jpg|jpeg|png|gif|webp)(\?.*)?$/
            }, {
                type: 'js',
                category: 'airbnb',
                initiatorList: ['link', 'script'],
                regex: /^.+(muscache|localhost).+\.m?(js|bundle)(\?.*)?$/
            }, {
                type: 'js',
                category: 'third_party',
                initiatorList: ['link', 'script'],
                regex: /^((?!(muscache|localhost)).)*\.m?js(\?.*)?$/
            }, {
                type: 'font',
                initiatorList: ['link', 'css', 'other'],
                regex: /^.+(muscache|localhost).+\.woff2(\?.*)?$/
            }],
            y = {
                css: { ...c
                },
                js: {
                    airbnb: { ...c
                    },
                    third_party: { ...c
                    }
                },
                img: { ...c
                },
                font: { ...c
                }
            },
            _ = [],
            p = s.default.getBootstrap('instrument_search_results_images');
        t.filter((({
            initiatorType: t
        }) => h.includes(t))).forEach((({
            duration: t,
            name: s,
            initiatorType: c,
            decodedBodySize: u,
            transferSize: h,
            encodedBodySize: b
        }) => {
            f.find((({
                type: f,
                initiatorList: j,
                regex: v,
                category: z
            }) => {
                if (j.includes(c) && s.match(v)) {
                    const c = z ? y[f][z] : y[f];
                    if (p && 'img' === f && 2e3 === l && Math.random() <= n) {
                        const c = (0, o.createJitneyPropsForImageResource)({
                            duration: t,
                            encodedBodySize: b,
                            name: s,
                            transferSize: h
                        });
                        c && _.push(c)
                    }
                    const j = c.count * c.cache_hit_ratio + (0 === h ? 1 : 0);
                    return c.count += 1, c.cache_hit_ratio = j ? j / c.count : 0, c.transfer_size += h, c.encodedbody_size += b, c.decodedbody_size += u, !0
                }
                return !1
            }))
        })), y.css = y.css ? .count ? y.css : void 0, y.js ? .airbnb ? .count ? 0 === y.js ? .third_party ? .count && (y.js.third_party.cache_hit_ratio = 1) : y.js = void 0;
        y.img = y.img ? .count ? y.img : void 0, y.font = y.font ? .count ? y.font : void 0, p && _.length && (0, o.sendJitneyEventsForImages)(_);
        if (!Object.values(y).find((t => !!t))) return;
        return y
    };
    var s = t(r(d[1])),
        o = r(d[2]);
    const c = {
            transfer_size: 0,
            encodedbody_size: 0,
            decodedbody_size: 0,
            count: 0,
            cache_hit_ratio: 0
        },
        n = .001,
        u = e.cssRule = {
            type: 'css',
            initiatorList: ['link'],
            regex: /^.+(muscache|localhost).+\.css(\?.*)?$/
        }
}), "5ba13b", ["ba7a76", "c235f8", "be6c80"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        s = r(d[1]).default;

    function n() {
        const t = r(d[2]);
        return n = function() {
            return t
        }, t
    }

    function o() {
        const t = r(d[3]);
        return o = function() {
            return t
        }, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var u = s(r(d[4])),
        c = r(d[5]),
        h = r(d[6]),
        p = t(r(d[7])),
        l = r(d[8]),
        f = s(r(d[9])),
        P = s(r(d[10])),
        R = s(r(d[11])),
        v = r(d[12]);

    function w(t) {
        if (!t) return;
        return Object.keys(o().PageName).find((s => o().PageName[s] === t))
    }

    function A(t) {
        if (null == t) return null;
        return t.reduce(((t, s) => t.duration > s.duration ? t : s), t[0])
    }
    e.default = new class {
        constructor({
            isResetPageEventsEnabled: t,
            trackingModule: s
        }) {
            this.trackingModule = void 0, this.performanceRecorders = [], this.ignorePathnameUpdate = void 0, this.includeHistoryUpdate = void 0, this.nextPageCreatedAt = void 0, this.resetPageEvents = void 0, this.pauseInfo = {
                pauseStart: 0,
                pauseDuration: 0,
                pausePending: !1
            }, this.currentPathname = '', this.currentSearch = '', this.setReadMetricsFromPerformanceRecorder = () => {
                window.__readMetricsFromPerformanceRecorder = () => this.performanceRecorders.map((t => {
                    if (!t.isRecorderLoggable) return;
                    const s = w(t.universalPageName),
                        n = w(t.subPageName),
                        o = (0, R.default)({
                            resources: t.recorderResults.resources,
                            universalPageName: t.universalPageName
                        }),
                        u = { ...t.readCalculatedMetrics(),
                            ttfcp: t.recorderResults.ttfcp,
                            ttfmp: t.recorderResults.ttfmp,
                            ttlcp: t.recorderResults.ttlcp,
                            fid: t.recorderResults.fid,
                            inp: t.recorderResults.inp,
                            timeToFid: t.recorderResults.timeToFid,
                            cls: t.recorderResults.cumulativeLayoutShift,
                            lcp: t.recorderResults.lcp,
                            createdAt: t.createdAt,
                            pageRequestMethod: t.pageRequestMethod,
                            navigationType: t.navigationType,
                            cumulativeLayoutShiftEntries: t.recorderResults.cumulativeLayoutShiftEntries,
                            inpInteractionEvents: t.recorderResults.inpInteractionEvents,
                            assetSizes: o
                        },
                        c = (0, l.calculatePagePerformanceScore)(u);
                    return { ...u,
                        pageName: s,
                        subPageName: n,
                        score: c
                    }
                })).filter((t => !!t)), window.__ppsDebug = window.__ppsDebug || {}, window.__ppsDebug.getInpEventTiming = () => {
                    const t = this.performanceRecorders[this.performanceRecorders.length - 1];
                    return t ? A(t.recorderResults.inpInteractionEvents) : null
                }
            }, this.updateCurrentRecorderWithHOCProps = t => {
                const s = this.performanceRecorders[this.performanceRecorders.length - 1];
                s && (s.universalPageName = t.universalPageName, s.subPageName = t.subPageName, s.impressionUuid = t.impressionUuid, s.eventData = t.eventData, s.eventDataSchema = t.eventDataSchema, s.isDirectRequest || s.setTtfcpClientFromTimestamp(t.timestampOfFCP))
            }, this.handleNewHistory = t => {
                t.listen(this.onHistoryChange)
            }, this.setIgnorePathnameUpdate = t => {
                this.ignorePathnameUpdate = t
            }, this.clearIgnorePathnameUpdate = () => {
                this.ignorePathnameUpdate = void 0
            }, this.setIncludeHistoryUpdate = t => {
                this.includeHistoryUpdate = t
            }, this.clearIncludeHistoryUpdate = () => {
                this.includeHistoryUpdate = void 0
            }, this.startNextPageTimer = () => {
                this.nextPageCreatedAt = (0, p.default)().now(), this.pauseInfo.pausePending = !1, this.pauseInfo.pauseStart = 0, this.pauseInfo.pauseDuration = 0
            }, this.pauseNextPageTimer = () => {
                this.pauseInfo.pausePending = !0, this.pauseInfo.pauseStart = (0, p.default)().now()
            }, this.resumeNextPageTimer = () => {
                this.pauseInfo.pausePending ? (this.pauseInfo.pausePending = !1, this.pauseInfo.pauseDuration += (0, p.default)().now() - this.pauseInfo.pauseStart, this.pauseInfo.pauseStart = 0) : (0, c.airdogCount)('page_transition_coordinator.page_timer.error', 1, ['error:pause', `pathname:${window.location.pathname}`])
            }, this.createNewRecorder = ({
                isDirectRequest: t
            }) => {
                const s = this.performanceRecorders[this.performanceRecorders.length - 1];
                s && s.retire();
                const n = this.getNextPageCreatedAt();
                this.performanceRecorders.push(new f.default({
                    isDirectRequest: t,
                    pageCreatedAt: n
                }))
            }, this.getNextPageCreatedAt = () => {
                let t;
                return this.nextPageCreatedAt && this.pauseInfo.pauseDuration ? t = this.nextPageCreatedAt + this.pauseInfo.pauseDuration : this.pauseInfo.pausePending ? ((0, c.airdogCount)('page_transition_coordinator.page_timer.error', 1, ['error:resume', `pathname:${window.location.pathname}`]), t = this.nextPageCreatedAt) : this.nextPageCreatedAt && (t = this.nextPageCreatedAt), this.nextPageCreatedAt = void 0, t
            }, this.onHistoryChange = (t, s) => {
                const n = t.pathname,
                    o = t.search;
                let u;
                switch (s) {
                    case 'PUSH':
                    case 'REPLACE':
                        u = 2;
                        break;
                    case 'POP':
                    case 'BACK_FORWARD_CACHE':
                        u = 1;
                        break;
                    default:
                        u = 5
                }
                this.isPageTransition({
                    action: s,
                    prevPathname: this.currentPathname,
                    prevSearch: this.currentSearch,
                    nextPathname: n,
                    nextSearch: o
                }) && (this.flushAllEvents({
                    triggeringAction: s
                }), 'BACK_FORWARD_CACHE' === s ? ((0, p.default)().mark(p.SOFT_NAVIGATION_MARK, {
                    detail: {
                        navigationType: u,
                        persisted: !0
                    }
                }), this.createNewRecorder({
                    isDirectRequest: !1
                })) : ((0, p.default)().mark(p.SOFT_NAVIGATION_MARK, {
                    detail: {
                        navigationType: u
                    }
                }), this.createNewRecorder({
                    isDirectRequest: !1
                }))), this.currentPathname = n, this.currentSearch = o
            }, this.isPageTransition = t => {
                const {
                    action: s,
                    prevPathname: n,
                    nextPathname: o
                } = t;
                return 'BACK_FORWARD_CACHE' === s || ('function' == typeof this.includeHistoryUpdate ? this.includeHistoryUpdate(t) : !(!n || !o) && (n !== o && (('function' != typeof this.ignorePathnameUpdate || !this.ignorePathnameUpdate({
                    prevPathname: n,
                    nextPathname: o,
                    action: s
                })) && (!('REPLACE' !== s || !(0, v.getPageRedirectShouldBeIgnored)({
                    prevPathname: n,
                    nextPathname: o
                })) || ['POP', 'PUSH', 'REPLACE'].includes(s)))))
            }, this.flushAllEvents = ({
                triggeringAction: t
            } = {}) => {
                (0, h.isBot)() || (this.performanceRecorders.forEach((s => {
                    if (s.retired || s.retire(), !s.isRecorderLoggable) return;
                    const {
                        problems: o,
                        warnings: u
                    } = s.getDataProblems();
                    'REPLACE' !== t || s.recorderResults.fid || u.push('probable-redirect');
                    const h = [`pathname:${window.location.pathname}`, `pagename:${w(s.universalPageName)}`, `subpage_name:${w(s.subPageName)}`, `page_request_method:${s.pageRequestMethod}`];
                    u.length > 0 && (0, c.airdogCount)('page_transition_coordinator.data.warning', 1, ['error:data-warning', ...h, ...u.map((t => `warning_${t}:true`))]), o.length > 0 ? (0, c.airdogCount)('page_transition_coordinator.data.error', 1, ['error:data-problems', ...h, ...o.map((t => `problem_${t}:true`))]) : this.trackingModule ? .queueJitneyEvent({
                        schema: n().PerformanceWebPageMetricsEvent,
                        event_data: (0, P.default)(s)
                    })
                })), this.performanceRecorders = [], this.trackingModule ? .getLogger().flushEventQueue())
            }, this.setPageCloseHandlers = () => {
                window.addEventListener('beforeunload', (() => this.flushAllEvents()), !0), window.addEventListener('visibilitychange', (() => {
                    'hidden' === document.visibilityState && this.flushAllEvents()
                })), window.addEventListener('pagehide', (t => {
                    ((0, h.isSafari)() || t.persisted) && this.flushAllEvents()
                }))
            }, this.currentPathname = window.location.pathname, this.currentSearch = window.location.search, this.resetPageEvents = t ? ? !0, this.createNewRecorder({
                isDirectRequest: !0
            }), this.trackingModule = s, this.setPageCloseHandlers(), this.listenForPageShow(), this.setReadMetricsFromPerformanceRecorder()
        }
        listenForPageShow() {
            window.addEventListener('pageshow', (t => {
                t.persisted && this.onHistoryChange(window.location, 'BACK_FORWARD_CACHE')
            }))
        }
    }({
        trackingModule: u.default
    })
}), "5c13fa", ["45f788", "ba7a76", "de1f95", "fe2f48", "c8b97a", "3e4681", "e9b7bf", "5d602b", "27c072", "7fa87b", "6614c9", "5ba13b", "7ed8b6"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(o) {
        const l = n(o.recorderResults.lcpTarget),
            c = n(o.recorderResults.ttfmpTarget),
            u = n(o.recorderResults.ttlcpTarget),
            {
                alt: _,
                ttlcp: p
            } = o.recorderResults,
            {
                total_ram_mb: f,
                num_of_cores: R,
                is_low_data_mode: y,
                network_type: b
            } = o.recorderResults,
            k = s(o);
        return {
            assets: o.recorderResults.assets,
            page_request_method: o.pageRequestMethod,
            universal_page_name: o.universalPageName,
            subpage_name: o.subPageName,
            impression_uuid: o.impressionUuid,
            ttfcp: o.recorderResults.ttfcp,
            ttfmp: o.recorderResults.ttfmp,
            ttlcp: o.recorderResults.ttlcp ? ? o.recorderResults.ttfcp,
            fid: o.recorderResults.fid,
            inp: o.recorderResults.inp,
            tbt: o.recorderResults.totalBlockingTime,
            interaction_hangs: o.recorderResults.interactionHangs,
            interaction_duration: o.recorderResults.interactionDuration,
            event_data: o.eventData,
            event_data_schema: o.eventDataSchema,
            domain_and_path: o.domainAndPath,
            network_information: o.networkInformation,
            web_performance_timing: o.recorderResults.webPerformanceTiming,
            tbt_pre_hydrate: o.recorderResults.tbtPreHydrate,
            tbt_post_hydrate: o.recorderResults.tbtPostHydrate,
            time_to_hydrate: o.recorderResults.timeToHydrate,
            recorder_duration: o.recorderResults.recorderDuration,
            time_to_fid: o.recorderResults.timeToFid,
            number_of_blocking_tasks: o.recorderResults.numberOfBlockingTasks,
            number_of_long_input_delays: o.recorderResults.numberOfLongInputDelays,
            total_duration_of_long_input_delays: o.recorderResults.totalDurationOfLongInputDelays,
            long_input_delays: o.recorderResults.longInputDelays,
            long_input_delay_counts: o.recorderResults.longInputDelayCounts,
            timed_interactions: o.recorderResults.timedInteractions,
            longest_blocking_time: o.recorderResults.longestBlockingTime,
            longest_blocking_task_index: o.recorderResults.longestBlockingTaskIndex,
            cumulative_layout_shift: o.recorderResults.cumulativeLayoutShift,
            lcp: o.recorderResults.lcp,
            ...k,
            document_age: o.recorderResults.documentAge,
            inline_stylesheet_rules: o.recorderResults.inlineStylesheetRules,
            external_stylesheet_rules: o.recorderResults.externalStylesheetRules,
            is_dev: o.isDev,
            navigation_type: o.navigationType,
            metadata: { ...l && {
                    lcpTarget: l
                },
                ...u && {
                    ttlcpTarget: u
                },
                ...c && {
                    ttfmpTarget: c
                },
                ...'number' == typeof _ && {
                    alt: String(_)
                },
                cumulativeLayoutShiftEntries: JSON.stringify(o.recorderResults.cumulativeLayoutShiftEntries),
                ...'number' == typeof p && {
                    ttlcpRaw: String(p)
                },
                react_upgrade: '',
                ...o.recorderResults.inpContainingElement && {
                    inp_containing_element: o.recorderResults.inpContainingElement
                },
                ...null != o.recorderResults.softNavigationCount && null != o.recorderResults.unexpectedSoftNavigations && {
                    soft_navigation_count: String(o.recorderResults.softNavigationCount),
                    unexpected_soft_navigations: JSON.stringify(o.recorderResults.unexpectedSoftNavigations)
                },
                render_blocking_css_duration_ms: o.recorderResults.resources.filter((n => t.cssRule.initiatorList.includes(n.initiatorType) && n.name.match(t.cssRule.regex) && 'blocking' === n.renderBlockingStatus)).reduce(((t, n) => Math.max(t, n.duration ? ? 0)), 0).toFixed(2),
                ...f && {
                    total_ram_mb: f
                },
                ...R && {
                    num_of_cores: R
                },
                ...y && {
                    is_low_data_mode: y
                },
                ...b && {
                    network_type: b
                }
            }
        }
    }, e.serializeNode = n;
    var t = r(d[0]);

    function n(t) {
        if (!t) return;
        const {
            nodeName: n,
            parentElement: s
        } = t;
        let o, l;
        if (t.nodeType === Node.ELEMENT_NODE) {
            const n = t;
            o = n.className, l = n.id
        }
        return JSON.stringify({
            nodeName: n,
            className: o,
            id: l,
            parentElement: s && {
                nodeName: s.nodeName,
                className: s.className,
                id: s.id
            }
        })
    }

    function s(t) {
        return {
            interactivity_spans: t.recorderResults.interactivitySpans.map((t => ({
                duration: t.duration,
                name: t.name,
                long_task_durations: t.longTaskDurations,
                number_of_blocking_tasks: t.numberOfBlockingTasks,
                tbt: t.totalBlockingTime,
                longest_blocking_time: t.longestBlockingTime
            }))),
            interaction_categories: Object.entries(t.recorderResults.interactionCategories).reduce(((t, [n, s]) => ({ ...t,
                [n]: {
                    tbt_per_second: s.totalBlockingTimePerSecond,
                    number_of_blocking_tasks_per_second: s.numberOfBlockingTasksPerSecond,
                    min_frame_drops_per_second: s.minFrameDropsPerSecond,
                    count: s.count,
                    duration: s.duration
                }
            })), {})
        }
    }
}), "6614c9", ["5ba13b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getDocumentSize = function() {
        if (window.performance && 'function' == typeof window.performance.getEntriesByType) {
            const [t] = performance.getEntriesByType('navigation');
            if (t) return {
                document_transfer_size_in_bytes: t.transferSize,
                document_encoded_body_size_in_bytes: t.encodedBodySize,
                document_decoded_body_size_in_bytes: t.decodedBodySize
            }
        }
        return {
            document_transfer_size_in_bytes: -1,
            document_encoded_body_size_in_bytes: -1,
            document_decoded_body_size_in_bytes: -1
        }
    }, e.getNetworkInformation = function() {
        if (window.navigator && window.navigator.connection) {
            const {
                connection: t
            } = window.navigator;
            return {
                effective_type: t.effectiveType,
                rtt: t.rtt,
                downlink: t.downlink
            }
        }
        return
    }, e.getWWWCdnProvider = function() {
        return {
            www_cdn_provider: n.default.get('wwwCdnProvider') || 'Unknown'
        }
    }, e.getWebPerformanceTiming = function() {
        if (window.performance && window.performance.timing) {
            const {
                navigationStart: t,
                redirectStart: n,
                redirectEnd: _,
                fetchStart: o,
                domainLookupStart: s,
                domainLookupEnd: c,
                connectStart: u,
                connectEnd: f,
                secureConnectionStart: w,
                requestStart: p,
                responseStart: v,
                responseEnd: y,
                domLoading: l,
                domInteractive: S,
                domContentLoadedEventStart: b,
                domContentLoadedEventEnd: E,
                domComplete: z,
                loadEventStart: k,
                loadEventEnd: C
            } = window.performance.timing;
            return {
                navigation_start_timestamp_in_ms: t,
                time_to_redirect_start_in_ms: n,
                time_to_redirect_end_in_ms: _,
                time_to_fetch_start_in_ms: o,
                time_to_domain_lookup_start_in_ms: s,
                time_to_domain_lookup_end_in_ms: c,
                time_to_connect_start_in_ms: u,
                time_to_connect_end_in_ms: f,
                time_to_secure_connection_start_in_ms: w,
                time_to_request_start_in_ms: p,
                time_to_response_start_in_ms: v,
                time_to_response_end_in_ms: y,
                time_to_dom_loading_in_ms: l,
                time_to_dom_interactive_in_ms: S,
                time_to_dom_content_loaded_event_start_in_ms: b,
                time_to_dom_content_loaded_event_end_in_ms: E,
                time_to_dom_complete_in_ms: z,
                time_to_load_event_start_in_ms: k,
                time_to_load_event_end_in_ms: C
            }
        }
    };
    var n = t(r(d[1]))
}), "697349", ["ba7a76", "ef2bc3"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getPageRequestMethod = function(t) {
        return c().then((t => {
            if (!t) return !1;
            const o = g.window && (0, s.default)();
            if (!o || !o.getEntriesByType) return !1;
            const c = o.getEntriesByType('navigation');
            if (!c || 0 === c.length) return n.default.get('isServiceWorkerAppShell');
            const l = c[0].serverTiming;
            if (!l || 0 === l.length) return !1;
            const u = l.filter((t => 'serviceWorker' === t.name));
            return u.length > 0
        })).catch((() => !1)).then((n => t ? Promise.resolve(2) : n ? Promise.resolve(4) : 1 === l ? Promise.resolve(5) : Promise.resolve(1)))
    };
    var n = t(r(d[1])),
        o = t(r(d[2])),
        s = t(r(d[3]));

    function c() {
        const {
            navigator: t
        } = window;
        return void 0 === t ? Promise.resolve(!1) : 'serviceWorker' in t && t.serviceWorker.getRegistration ? t.serviceWorker.getRegistration('/').then((t => !(!t || !t.active))).catch((() => !1)) : Promise.resolve(!1)
    }
    let l;
    !(function() {
        if ((0, o.default)()) return;
        const t = g.window && (0, s.default)();
        let n = 3;
        if (t && t.getEntriesByType) {
            const o = t.getEntriesByType('navigation');
            if (o && o.length > 0) {
                const t = o[0].serverTiming ? .find((t => 'cdn-cache' === t.name));
                'HIT' === t ? .description ? n = 1 : 'MISS' !== t ? .description && 'NO-STORE' !== t ? .description || (n = 2)
            }
        }
        l = n
    })()
}), "6f10f0", ["ba7a76", "ef2bc3", "491401", "5d602b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getPageRedirectShouldBeIgnored = function({
        prevPathname: t,
        nextPathname: o,
        __test_redirectPathnamesToIgnore: s
    }) {
        return (s || n).some((n => n.ignorePrevPathname === t && n.ignoreNextPathname === o))
    };
    const n = [{
        ignorePrevPathname: '/guest/inbox',
        ignoreNextPathname: '/guest/messages',
        pocEmail: 'riley.glusker@airbnb.com'
    }, {
        ignorePrevPathname: '/hosting/inbox',
        ignoreNextPathname: '/hosting/messages',
        pocEmail: 'riley.glusker@airbnb.com'
    }]
}), "7ed8b6", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        s = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = s(r(d[2])),
        n = t(r(d[3])),
        c = r(d[4]),
        l = r(d[5]),
        h = r(d[6]),
        u = s(r(d[7])),
        p = r(d[8]),
        f = r(d[9]),
        v = r(d[10]),
        y = r(d[11]),
        b = r(d[12]),
        R = s(r(d[13])),
        T = r(d[14]),
        O = r(d[15]),
        L = r(d[16]);
    const I = 'CSR_PAGE_START',
        P = new Set(['click', 'input', 'keypress']),
        S = [O.InteractivitySpanName.MOWEB_MAP_USER_INTERACTION, O.InteractivitySpanName.DESKTOP_MAP_USER_INTERACTION, O.InteractivitySpanName.SCROLL];
    class k {
        constructor({
            isDirectRequest: t,
            pageCreatedAt: s
        }) {
            this.isRecorderLoggable = !0, this.networkInformation = (0, v.getNetworkInformation)(), this.initialVisibilityState = (0, u.default)(), this.isDirectRequest = void 0, this.isClientSideRequest = void 0, this.performance = (0, n.default)(), this.createdAt = void 0, this.pageRequestMethod = 1, this.domainAndPath = `${window.location.host}${window.location.pathname}`, this.recorderController = void 0, this.recorderResults = {
                assets: {},
                cumulativeLayoutShiftEntries: [],
                interactionCategories: {},
                interactivitySpans: [],
                longInputDelayCounts: [],
                longInputDelays: [],
                longTasks: [],
                numberOfLongInputDelays: 0,
                resources: [],
                timedInteractions: [],
                totalDurationOfLongInputDelays: 0,
                total_ram_mb: (0, h.getTotalRamMb)(),
                num_of_cores: (0, h.getNumOfCores)(),
                is_low_data_mode: (0, h.getIsLowDataMode)(),
                network_type: (0, h.getNetworkType)()
            }, this.paintObserver = void 0, this.longTaskObserver = void 0, this.inputDelayObserver = void 0, this.timedInteractionObserver = void 0, this.resourcesObserver = void 0, this.clsObserver = void 0, this.lcpObserver = void 0, this.softNavigationsObserver = void 0, this.retired = !1, this.isDev = !1, this.universalPageName = void 0, this.subPageName = void 0, this.impressionUuid = void 0, this.eventData = void 0, this.eventDataSchema = void 0, this.navigationType = void 0, this.showLogs = (0, c.getTreatmentOverride)('pps'), this.retire = async () => {
                this.retired || (this.retired = !0, void 0 === this.recorderResults.ttfcp && (this.isRecorderLoggable = !1), this.cleanUpLongTasks(), this.cleanupLongInputDelayObserver(), this.cleanupTimedInteractionObserver(), this.cleanUpResources(), this.cleanUpClsObserver(), this.cleanUpPaintObserver(), this.cleanUpLcpObserver(), this.cleanupScrollHangs(), this.cleanupSoftNavigationsObserver(), this.recordStylesheetRuleLength(), this.recorderResults.recorderDuration = this.performance.now() - this.createdAt, this.recorderResults.timeToHydrate = this.calculateTimeToHydrate(), this.hasNecessaryPolyfills() && (window.perfMetrics.stopSearchingForFirstMeaningfulPaint(), window.perfMetrics.stopSearchingForLargestContentfulPaint ? .()), this.recorderController ? .abort(), this.recorderController = void 0)
            }, this.getDataProblems = () => {
                const {
                    ttfcp: t
                } = this.recorderResults, s = [];
                return t && t < 0 && s.push('ttfcp-negative'), t && t > 6e4 && s.push('ttfcp-exceeds-60s'), {
                    problems: s,
                    warnings: []
                }
            }, this.readCalculatedMetrics = () => {
                const t = this.calculateTimeToHydrate();
                return {
                    tbt: (0, y.calculateTotalBlockingTime)(this.recorderResults),
                    tbtPreHydrate: (0, y.calculateTbtPreHydrate)(this.recorderResults, t),
                    tbtPostHydrate: (0, y.calculateTbtPostHydrate)(this.recorderResults, t),
                    timeToHydrate: t,
                    numberOfBlockingTasks: (0, y.calculateNumberOfBlockingTasks)(this.recorderResults),
                    longestBlockingTime: (0, y.calculateLongestBlockingTaskIndex)(this.recorderResults),
                    longestBlockingTaskIndex: (0, y.calculateLongestBlockingTaskIndex)(this.recorderResults),
                    ...(0, b.isALTEnabled)() && {
                        alt: (0, b.calculateAdditionalLoadTime)(this.recorderResults.resources, this.recorderResults.ttfcp)
                    }
                }
            }, this.gatherMetrics = () => {
                this.isDirectRequest && this.observeFCP(), this.listenForLCP(), this.listenForLongTasks(), this.listenForCLS(), this.listenForResources(), this.listenForLongInputDelays(), this.listenForTimedInteractions(), this.listenForScrollHangs(), this.recorderResults.webPerformanceTiming = { ...(0, v.getWWWCdnProvider)(),
                    ...this.isDirectRequest && (0, v.getWebPerformanceTiming)(),
                    ...this.isDirectRequest && (0, v.getDocumentSize)()
                }, this.listenForSoftNavigations()
            }, this.gatherPolyfilledMetrics = () => {
                this.listenForFMP(), this.listenForFID(), this.listenForINP();
                const t = (0, n.getLastSoftNavigation)();
                if (t ? .detail ? .persisted) {
                    const t = this.performance.now();
                    requestAnimationFrame((() => {
                        requestAnimationFrame((() => {
                            this.recorderResults.ttlcp = this.performance.now() - t
                        }))
                    }))
                } else this.listenForTTLCP()
            }, this.observeFCP = () => {
                if (!this.isClientSideRequest && this.supportsPerformanceObserverWithType('paint')) try {
                    this.paintObserver = new PerformanceObserver((t => {
                        t.getEntries().forEach(this.setTtfcpDirectFromEntry)
                    })), this.paintObserver.observe({
                        type: 'paint',
                        buffered: !0
                    }), (0, l.isWebSafari)() && this.performance.getEntriesByType('paint').forEach(this.setTtfcpDirectFromEntry)
                } catch (t) {}
            }, this.setTtfcpDirectFromEntry = t => {
                'first-contentful-paint' === t.name && (this.setTtfcpClientFromTimestamp(t.startTime), this.showLogs && this.consoleLogMetrics())
            }, this.cleanUpPaintObserver = () => {
                this.paintObserver && ('function' == typeof this.paintObserver.takeRecords && this.paintObserver.takeRecords().forEach(this.setTtfcpDirectFromEntry), this.paintObserver.disconnect())
            }, this.setTtfcpClientFromTimestamp = t => {
                this.retired || this.recorderResults.ttfcp || (this.recorderResults.ttfcp = t - this.createdAt, this.isClientSideRequest && (this.performance.mark('TTFCP_END'), this.performance.measure('TTFCP', I, 'TTFCP_END')), this.showLogs && this.consoleLogMetrics())
            }, this.listenForFMP = () => {
                this.retired || (this.isClientSideRequest && window.perfMetrics.startSearchingForFirstMeaningfulPaint(), window.perfMetrics.onFirstMeaningfulPaint(this.setTTFMP))
            }, this.setTTFMP = t => {
                this.retired || (this.recorderResults.ttfmp = t - this.createdAt, this.recorderResults.ttfmpTarget = document.getElementById(T.FMP_TARGET_ID), this.showLogs && this.consoleLogMetrics())
            }, this.listenForTTLCP = () => {
                this.retired || (this.isClientSideRequest ? window.perfMetrics.startSearchingForLargestContentfulPaint ? .() : (window.perfMetrics.stopPollingForLargestContentfulPaint ? .(), window.perfMetrics.markIsHydratedForLargestContentfulPaint ? .()), window.perfMetrics.onLargestContentfulPaint ? .(this.setTTLCP))
            }, this.setTTLCP = (t, s) => {
                if (this.retired) return;
                const o = Math.max(0, t - this.createdAt);
                this.recorderResults.ttlcp = o, this.recorderResults.ttlcpTarget = s, this.isClientSideRequest && (this.performance.clearMeasures('TTLCP-candidate'), this.performance.measure('TTLCP-candidate', {
                    start: 'CSR_PAGE_START',
                    duration: o
                })), this.showLogs && this.consoleLogMetrics()
            }, this.listenForFID = () => {
                window.perfMetrics.clearFirstInputDelay(), window.perfMetrics.onFirstInputDelay(this.setFID)
            }, this.setFID = (t, s) => {
                if (this.retired) return;
                this.recorderResults.fid = t;
                const o = s.timeStamp - this.createdAt;
                o >= 0 && (this.recorderResults.timeToFid = o), this.showLogs && this.consoleLogMetrics()
            }, this.listenForINP = () => {
                window.perfMetrics.clearInp ? .(), window.perfMetrics.onInp ? .(this.setINP)
            }, this.setINP = (t, s) => {
                this.retired || (this.recorderResults.inp = t, this.recorderResults.inpInteractionEvents = s, this.recorderResults.inpContainingElement = (0, L.getInpContainingElement)(s), this.showLogs && this.consoleLogMetrics())
            }, this.listenForTimedInteractions = () => {
                if (this.supportsPerformanceObserverWithType('element')) {
                    this.cleanupTimedInteractionObserver(), this.timedInteractionObserver = new PerformanceObserver((t => {
                        k.lastInputDelayEvent && (t.getEntries().forEach((t => {
                            this.recordTimedInteraction(t)
                        })), k.lastInputDelayEvent = void 0)
                    }));
                    try {
                        this.timedInteractionObserver.observe({
                            type: 'element',
                            buffered: this.isDirectRequest
                        })
                    } catch {}
                }
            }, this.recordTimedInteraction = t => {
                const s = k.lastInputDelayEvent;
                if (!s) return;
                const {
                    element: o,
                    identifier: n,
                    name: c,
                    renderTime: l
                } = t, h = {
                    element_type: 'image-paint' === c ? 'image' : 'text',
                    identifier_type: n,
                    previous_target_ancestor_section_id: s.target_ancestor_section_id,
                    start_time: s.start_time,
                    target_ancestor_section_id: this.findAncestorSectionId(o),
                    total_time: Math.round(l - s.start_time)
                };
                this.recorderResults.timedInteractions.push(h)
            }, this.cleanupTimedInteractionObserver = () => {
                if (!this.timedInteractionObserver) return;
                'function' == typeof this.timedInteractionObserver.takeRecords && this.timedInteractionObserver.takeRecords();
                const {
                    timedInteractions: t
                } = this.recorderResults;
                this.recorderResults.timedInteractions = t.slice(0, 20), this.timedInteractionObserver.disconnect()
            }, this.listenForLongInputDelays = () => {
                if (this.supportsPerformanceObserverWithType('event')) {
                    this.inputDelayObserver = new PerformanceObserver((t => {
                        let s;
                        t.getEntries().forEach((t => {
                            this.recordLongInputDelay(t), P.has(t.name) && (s = t)
                        })), s && (k.lastInputDelayEvent = this.createLongInputRecord(s))
                    }));
                    try {
                        this.inputDelayObserver.observe({
                            type: 'event',
                            buffered: this.isDirectRequest
                        })
                    } catch {}
                }
            }, this.createLongInputRecord = t => {
                const {
                    duration: s,
                    name: o,
                    processingEnd: n,
                    processingStart: c,
                    startTime: l,
                    target: h
                } = t, u = c - l;
                return {
                    input_delay: Math.round(u),
                    input_duration: s,
                    event_type: o,
                    start_time: Math.round(l),
                    target_ancestor_section_id: this.findAncestorSectionId(h),
                    total_time: Math.round(n - l)
                }
            }, this.recordLongInputDelay = t => {
                const {
                    name: s,
                    processingStart: o,
                    startTime: n
                } = t;
                if (!P.has(s)) return;
                if (o - n < 100) return;
                const c = this.createLongInputRecord(t);
                this.recorderResults.longInputDelays.push(c)
            }, this.cleanupLongInputDelayObserver = () => {
                if (!this.inputDelayObserver) return;
                'function' == typeof this.inputDelayObserver.takeRecords && this.inputDelayObserver.takeRecords();
                let t = 0;
                const s = new Map;
                this.recorderResults.longInputDelays.forEach((({
                    event_type: o,
                    total_time: n
                }) => {
                    t += n;
                    let c = s.get(o);
                    c || (c = {
                        event_count: 0,
                        total_duration: 0,
                        event_name: o
                    }, s.set(o, c)), c.event_count += 1, c.total_duration += n
                })), this.recorderResults.longInputDelayCounts = Array.from(s.values()), this.recorderResults.numberOfLongInputDelays = this.recorderResults.longInputDelays.length, this.recorderResults.totalDurationOfLongInputDelays = t, this.recorderResults.longInputDelays = this.recorderResults.longInputDelays.sort(((t, s) => s.total_time - t.total_time)).slice(0, 20), this.inputDelayObserver.disconnect()
            }, this.listenForLongTasks = () => {
                if (this.supportsPerformanceObserverWithType('longtask')) try {
                    this.longTaskObserver = new PerformanceObserver((t => {
                        this.recorderResults.longTasks.push(...t.getEntries())
                    })), this.longTaskObserver.observe({
                        type: 'longtask',
                        buffered: this.isDirectRequest
                    })
                } catch (t) {}
            }, this.cleanUpLongTasks = () => {
                this.longTaskObserver && ('function' == typeof this.longTaskObserver.takeRecords && this.recorderResults.longTasks.push(...this.longTaskObserver.takeRecords()), this.recorderResults.totalBlockingTime = (0, y.calculateTotalBlockingTime)(this.recorderResults), this.showLogs && this.consoleLogMetrics(), this.recorderResults.longestBlockingTime = (0, y.calculateLongestBlockingTime)(this.recorderResults), this.recorderResults.longestBlockingTaskIndex = (0, y.calculateLongestBlockingTaskIndex)(this.recorderResults), this.recorderResults.tbtPreHydrate = (0, y.calculateTbtPreHydrate)(this.recorderResults, this.calculateTimeToHydrate()), this.recorderResults.tbtPostHydrate = (0, y.calculateTbtPostHydrate)(this.recorderResults, this.calculateTimeToHydrate()), this.recorderResults.numberOfBlockingTasks = (0, y.calculateNumberOfBlockingTasks)(this.recorderResults), this.recorderResults.interactivitySpans = (0, O.getInteractivitySpans)({
                    start: this.createdAt,
                    end: this.performance.now()
                }).map((t => ({
                    name: t.name,
                    duration: t.end - t.start,
                    ...(0, y.calculateInteractivityMetricsInInterval)(this.recorderResults, t)
                }))), this.recorderResults.interactionCategories = (0, O.aggregateInteractivitySpans)(this.recorderResults.interactivitySpans), this.longTaskObserver.disconnect())
            }, this.calculateTimeToHydrate = () => {
                const t = [...this.performance.getEntriesByName(T.HYDRATE_PERFORMANCE_HOC_MARK), ...this.performance.getEntriesByName(T.HYDRATE_MEANINGFUL_ELEMENT_MARK)].filter((t => t.startTime > this.createdAt));
                if (0 === t.length) return;
                return t.reduce(((t, s) => t.startTime < s.startTime ? t : s), t[0]).startTime - this.createdAt
            }, this.listenForCLS = () => {
                if (this.supportsPerformanceObserverWithType('layout-shift')) try {
                    this.clsObserver = new PerformanceObserver(this.clsObserverCallback), this.recorderResults.cumulativeLayoutShift = 0, this.clsObserver.observe({
                        type: 'layout-shift',
                        buffered: this.isDirectRequest
                    })
                } catch (t) {}
            }, this.clsObserverCallback = t => {
                t.getEntries().forEach((t => {
                    t.hadRecentInput || (this.recorderResults.cumulativeLayoutShift = this.recorderResults.cumulativeLayoutShift || 0, this.recorderResults.cumulativeLayoutShift += t.value || 0, this.recorderResults.cumulativeLayoutShiftEntries.push((0, f.getLayoutShfitDebugEntry)(t)), this.recorderResults.cumulativeLayoutShiftEntries.length > 3 && this.recorderResults.cumulativeLayoutShiftEntries.sort(((t, s) => t.value - s.value)).slice(2), this.showLogs && this.consoleLogMetrics())
                }))
            }, this.cleanUpClsObserver = () => {
                this.clsObserver && ('function' == typeof this.clsObserver.takeRecords && this.clsObserver.takeRecords(), this.clsObserver.disconnect())
            }, this.scrollEndTimeout = void 0, this.documentScrollEventListener = () => {
                this.scrollEndTimeout || (0, O.beginInteractivitySpan)(O.InteractivitySpanName.SCROLL), window.clearTimeout(this.scrollEndTimeout), this.scrollEndTimeout = setTimeout((() => {
                    this.scrollEndTimeout = void 0, (0, O.endInteractivitySpan)(O.InteractivitySpanName.SCROLL)
                }), 50)
            }, this.listenForScrollHangs = () => {
                window.addEventListener('scroll', this.documentScrollEventListener, {
                    passive: !0
                })
            }, this.cleanupScrollHangs = () => {
                window.removeEventListener('scroll', this.documentScrollEventListener, !1);
                const t = this.recorderResults.interactivitySpans.filter((t => S.includes(t.name)));
                this.recorderResults.interactionDuration = t.reduce(((t, s) => t + s.duration), 0), this.recorderResults.interactionHangs = t.reduce(((t, s) => t + s.totalBlockingTime), 0), this.showLogs && this.consoleLogMetrics()
            }, this.listenForResources = () => {
                if (this.supportsPerformanceObserverWithType('resource')) try {
                    this.resourcesObserver = new PerformanceObserver((t => {
                        this.recorderResults.resources.push(...t.getEntries())
                    })), this.resourcesObserver.observe({
                        type: 'resource',
                        buffered: this.isDirectRequest
                    })
                } catch (t) {}
            }, this.cleanUpResources = () => {
                this.resourcesObserver && ('function' == typeof this.resourcesObserver.takeRecords && this.recorderResults.resources.push(...this.resourcesObserver.takeRecords()), this.recorderResults.assets = (0, R.default)({
                    resources: this.recorderResults.resources,
                    universalPageName: this.universalPageName
                }), (0, b.isALTEnabled)() && (this.recorderResults.alt = (0, b.calculateAdditionalLoadTime)(this.recorderResults.resources, this.recorderResults.ttfcp), (0, b.measureAdditionalLoadTime)(this.recorderResults.resources, this.recorderResults.ttfcp)), this.resourcesObserver.disconnect())
            }, this.recordStylesheetRuleLength = () => {
                let t = 0,
                    s = 0;
                if (document.styleSheets) {
                    for (let o = 0; o < document.styleSheets.length; o++) try {
                        document.styleSheets[o].href ? s += document.styleSheets[o].rules.length : t += document.styleSheets[o].rules.length
                    } catch (t) {}
                    this.recorderResults.inlineStylesheetRules = t, this.recorderResults.externalStylesheetRules = s
                }
            }, this.listenForLCP = () => {
                if (!this.isClientSideRequest && this.supportsPerformanceObserverWithType('largest-contentful-paint')) try {
                    this.lcpObserver = new PerformanceObserver((t => {
                        t.getEntries().forEach(this.updateLCP)
                    })), this.lcpObserver.observe({
                        type: 'largest-contentful-paint',
                        buffered: !0
                    })
                } catch (t) {}
            }, this.updateLCP = t => {
                this.recorderResults.lcp = t.startTime, this.recorderResults.lcpTarget = t.element
            }, this.cleanUpLcpObserver = () => {
                this.lcpObserver && ('function' == typeof this.lcpObserver.takeRecords && this.lcpObserver.takeRecords().forEach(this.updateLCP), this.lcpObserver.disconnect())
            }, this.listenForSoftNavigations = () => {
                if (this.supportsPerformanceObserverWithType('soft-navigation')) {
                    this.cleanupSoftNavigationsObserver(), this.softNavigationsObserver = new PerformanceObserver(this.softNavigationsObserverCallback), this.recorderResults.softNavigationCount = 0, this.recorderResults.unexpectedSoftNavigations = [];
                    try {
                        this.softNavigationsObserver.observe({
                            type: 'soft-navigation',
                            buffered: this.isDirectRequest
                        })
                    } catch {}
                }
            }, this.softNavigationsObserverCallback = t => {
                for (const s of t.getEntries()) {
                    this.recorderResults.softNavigationCount ? ? = 0;
                    this.isClientSideRequest && 0 === this.recorderResults.softNavigationCount || (this.recorderResults.unexpectedSoftNavigations ? ? = [], this.recorderResults.unexpectedSoftNavigations.push(s.name)), this.recorderResults.softNavigationCount += 1
                }
            }, this.cleanupSoftNavigationsObserver = () => {
                this.softNavigationsObserver && ('function' == typeof this.softNavigationsObserver.takeRecords && this.softNavigationsObserver.takeRecords(), this.softNavigationsObserver.disconnect())
            }, this.supportsPerformanceObserverWithType = t => 'undefined' != typeof PerformanceObserver && (!!PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(t)), this.findAncestorSectionId = t => {
                let s = null,
                    o = t;
                for (; null === s && o;) s = o.getAttribute('data-section-id') || o.getAttribute('data-testid'), o = o.parentElement;
                return s || void 0
            }, this.hasNecessaryPolyfills = () => !!window.perfMetrics, this.consoleLogMetrics = () => {
                const {
                    alt: t,
                    cumulativeLayoutShift: s,
                    fid: o,
                    inp: n,
                    interactionDuration: c,
                    interactionHangs: l,
                    lcp: h,
                    totalBlockingTime: u,
                    ttfcp: p,
                    ttfmp: f,
                    ttlcp: v
                } = this.recorderResults;
                console.log(`Page Performance Score metrics (air.bb/web-pps)\n\nPathname = %c${window.location.pathname}%c\n  Time To First Contentful Paint = ${this.prettyMetric({metric:p})}\n  Time To First Meaningful Paint = ${this.prettyMetric({metric:f})}\n  First Input Delay              = ${this.prettyMetric({metric:o,isFid:!0})}\n  Total Blocking Time            = ${this.prettyMetric({metric:u,isTbt:!0})}\n  Cumulative Layout Shift        = ${this.prettyMetric({metric:s,isCls:!0})}\n\n\n\n  Experimental metrics\n  LCP                            = ${this.prettyMetric({metric:h})}\n  TTLCP                          = ${this.prettyMetric({metric:v??p})}\n  Interaction Duration           = ${this.prettyMetric({metric:c,isScH:!0})}\n  Interaction Hangs              = ${this.prettyMetric({metric:l,isScH:!0})}\n  Additional Load Time           = ${this.prettyMetric({metric:t,isAlt:!0})}\n  Interaction to Next Paint      = ${this.prettyMetric({metric:n,isInp:!0})}}`, 'font-weight: bold;', '')
            }, this.prettyMetric = ({
                metric: t,
                isFid: s,
                isTbt: o,
                isCls: n,
                isAlt: c,
                isScH: l,
                isInp: h
            }) => {
                let u = '';
                return u = n ? (t || 0).toFixed(2) : t ? `${Math.round(t).toLocaleString()} ms` : '...', u = u.padStart(9, ' '), s && void 0 === t && (u = `${u} (click to see)`), h && void 0 === t && (u = `${u} (background tab to calculate)`), o && void 0 === t && (u = `${u} (background tab to calculate)`), c && void 0 === t && (u = `${u} (background tab to calculate)`), l && void 0 === t && (u = `${u} (background tab to calculate)`), u
            }, this.isDirectRequest = t, this.isClientSideRequest = !t, this.navigationType = (0, n.getNavigationType)(), t ? this.createdAt = 0 : (this.performance.mark(I, {
                startTime: s
            }), this.createdAt = s || this.performance.now()), 2 !== this.initialVisibilityState ? ((0, p.getPageRequestMethod)(this.isClientSideRequest).then((t => {
                this.pageRequestMethod = t
            })), this.isClientSideRequest ? this.recorderResults.documentAge = 0 : o.default.get('pageGeneratedAt') && (this.recorderResults.documentAge = Math.max(Date.now() - o.default.get('pageGeneratedAt'), 0)), this.gatherMetrics(), this.hasNecessaryPolyfills() && this.gatherPolyfilledMetrics()) : this.isRecorderLoggable = !1
        }
    }
    e.default = k, k.lastInputDelayEvent = void 0
}), "7fa87b", ["45f788", "ba7a76", "ef2bc3", "5d602b", "f9341a", "e9b7bf", "a081df", "1140d4", "6f10f0", "b91b4c", "697349", "ac5421", "8d30ca", "5ba13b", "364f02", "cd9ddf", "f226da"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.calculateAdditionalLoadTime = function(t, n) {
        const s = c(u(t, n));
        if (0 === s.length) return 0;
        const o = s.map((({
            start: t,
            end: n
        }) => n - t)).reduce(((t, n) => t + n), 0);
        return o / s.length
    }, e.isALTEnabled = function() {
        return n.default.getBootstrap('pps_web_enable_alt')
    }, e.measureAdditionalLoadTime = function(t, n) {
        const s = u(t, n);
        c(s).forEach((({
            start: t,
            end: n
        }) => performance.measure('ALT', {
            start: t,
            end: n
        })))
    };
    var n = t(r(d[1]));
    const s = new Set(['fetch', 'xmlhttprequest', 'script', 'css', 'link']),
        o = new Set(['/tracking/jitney/logging/messages', '/api/v2/marketing_event_tracking']);

    function u(t, n) {
        return t.filter((t => {
            if ('number' != typeof n || t.startTime < n) return !1;
            if (t.duration < 50) return !1;
            if (!s.has(t.initiatorType)) return !1;
            const {
                pathname: u
            } = new URL(t.name);
            return !o.has(u)
        }))
    }

    function c(t) {
        const n = t.sort(((t, n) => t.startTime - n.startTime)),
            s = [];
        return n.forEach((({
            startTime: t,
            responseEnd: n
        }) => {
            const o = s[s.length - 1];
            !o || t > o.end ? s.push({
                start: t,
                end: n
            }) : o.end = Math.max(o.end, n)
        })), s
    }
}), "8d30ca", ["ba7a76", "c235f8"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = e.PerformanceImageDownloadEvent = {
        defaultProps: {
            schema: 'com.airbnb.jitney.event.logging.Performance:PerformanceImageDownloadEvent:2.0.0',
            event_name: 'performance_image_download'
        },
        propTypes: {}
    };
    n.fullyQualifiedName = 'Performance.v2.PerformanceImageDownloadEvent';
    e.PerformanceImageDownloadEventEvent = function(o) {
        return {
            eventData: o,
            eventDataSchema: n
        }
    }
}), "8eb13a", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";

    function t(t, n) {
        const {
            longTasks: c
        } = t, {
            start: u,
            end: o
        } = n;
        return c.filter((t => t.startTime >= u && (!o || t.startTime < o))).sort(((t, n) => t.startTime - n.startTime)).map(((t, n) => ({
            entry: t,
            index: n
        })))
    }

    function n(t) {
        return t.reduce(((t, n) => t + n.entry.duration - 50), 0)
    }

    function c(c, u) {
        return n(t(c, u))
    }

    function u(t) {
        if (0 !== t.length) return t.reduce(((t, n) => n.entry.duration > t.entry.duration ? n : t), t[0])
    }

    function o(n) {
        const {
            ttfcp: c = 0
        } = n;
        return u(t(n, {
            start: c
        }))
    }

    function s(t) {
        if (t) return t.entry.duration - 50
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.calculateInteractivityMetricsInInterval = function(c, o) {
        const l = t(c, o);
        return {
            longTaskDurations: l.map((t => t.entry.duration)),
            totalBlockingTime: n(l),
            numberOfBlockingTasks: l.length,
            longestBlockingTime: s(u(l))
        }
    }, e.calculateLongestBlockingTaskIndex = function(t) {
        return o(t) ? .index
    }, e.calculateLongestBlockingTime = function(t) {
        return s(o(t))
    }, e.calculateNumberOfBlockingTasks = function(t) {
        return t.longTasks.length
    }, e.calculateTbtPostHydrate = function(t, n) {
        const {
            ttfcp: u = 0
        } = t;
        if (void 0 === n) return;
        return c(t, {
            start: Math.max(n, u)
        })
    }, e.calculateTbtPreHydrate = function(t, n) {
        const {
            ttfcp: u = 0
        } = t;
        if (void 0 === n) return;
        return c(t, {
            start: u,
            end: n
        })
    }, e.calculateTotalBlockingTime = function(t) {
        const {
            ttfcp: n = 0
        } = t;
        return c(t, {
            start: n
        })
    }
}), "ac5421", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getLayoutShfitDebugEntry = function(o) {
        const u = o.sources ? ? [],
            h = u.filter((t => Boolean(t.node))),
            s = h[h.length - 1];
        return {
            value: o.value || 0,
            startTime: Math.round(o.startTime),
            totalSources: u.length,
            sourceSample: {
                node: (0, t.serializeNode)(s ? .node),
                shift: n(s ? .currentRect, s ? .previousRect)
            }
        }
    };
    var t = r(d[0]);

    function n(t, n) {
        if (!t || !n) return {};
        const o = t.x - n.x,
            u = t.y - n.y,
            h = t.width - n.width,
            s = t.height - n.height;
        return { ...0 === o ? {} : {
                x: o
            },
            ...0 === u ? {} : {
                y: u
            },
            ...0 === h ? {} : {
                width: h
            },
            ...0 === s ? {} : {
                height: s
            }
        }
    }
}), "b91b4c", ["6614c9"]);
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
    }), e.createJitneyPropsForImageResource = function({
        duration: t,
        encodedBodySize: n,
        name: o,
        transferSize: u
    }) {
        if (!t || t <= 0) return;
        if (!n || n <= 0) return;
        const s = (0, c.getImageResourceType)(o);
        if ('Unknown' === s) return;
        const f = 'ImageManager' === s ? (0, c.getImageWidthPolicy)(o) : (0, c.getLegacyAkamaiBucket)(o);
        return {
            image_cache_type: 0 === u ? 1 : 0,
            image_size_bytes: n,
            image_download_time_ms: Math.floor(t),
            image_policy: f,
            image_url: o
        }
    }, e.sendJitneyEventsForImages = function(t) {
        t.forEach((t => {
            o.default.logJitneyEvent({
                schema: n().PerformanceImageDownloadEvent,
                event_data: t
            })
        }))
    };
    var o = t(r(d[2])),
        c = r(d[3])
}), "be6c80", ["ba7a76", "8eb13a", "c8b97a", "b19571"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.InteractivitySpanName = void 0, e.aggregateInteractivitySpans = function(t) {
        const n = new Map;
        t.forEach((t => {
            const {
                name: s
            } = t;
            n.has(s) || n.set(s, []), n.get(s) ? .push(t)
        }));
        const s = {};
        return n.forEach(((t, n) => {
            const c = t.reduce(((t, n) => t + n.duration), 0),
                T = t.reduce(((t, n) => t + n.totalBlockingTime), 0),
                o = t.reduce(((t, n) => t + n.numberOfBlockingTasks), 0),
                u = t.flatMap((t => t.longTaskDurations)),
                E = 16.666666666666668,
                _ = u.map((t => (t - E) / E)).reduce(((t, n) => t + n), 0);
            0 !== c && (s[n] = {
                totalBlockingTimePerSecond: T / c * 1e3,
                numberOfBlockingTasksPerSecond: o / c * 1e3,
                minFrameDropsPerSecond: _ / c * 1e3,
                duration: c,
                count: t.length
            })
        })), s
    }, e.beginInteractivitySpan = function(t) {
        o(t, 'BEGIN')
    }, e.endInteractivitySpan = function(t) {
        o(t, 'END')
    }, e.getInteractivitySpans = function(t) {
        const T = (0, n.default)(),
            o = Object.values(s).reduce(((t, n) => [...t, ...T.getEntriesByName(c(n, 'BEGIN'), 'mark'), ...T.getEntriesByName(c(n, 'END'), 'mark')]), []).filter((n => n.startTime >= t.start && n.startTime < t.end));
        return o.sort(((t, n) => t.startTime - n.startTime)), u(o, t)
    };
    var n = t(r(d[1]));
    let s = e.InteractivitySpanName = (function(t) {
        return t.DESKTOP_MAP_INTERACTION = "DESKTOP_MAP_INTERACTION", t.MOWEB_MAP_INTERACTION = "MOWEB_MAP_INTERACTION", t.MOWEB_MAP_USER_INTERACTION = "MOWEB_MAP_USER_INTERACTION", t.DESKTOP_MAP_USER_INTERACTION = "DESKTOP_MAP_USER_INTERACTION", t.COMMUNITY_COMMITMENT_ACCEPT_TOS = "COMMUNITY_COMMITMENT_ACCEPT_TOS", t.SCROLL = "SCROLL", t
    })({});

    function c(t, n) {
        return `PPS_SPAN_${t}_${n}`
    }

    function T(t) {
        const n = t.endsWith('_END') ? 'END' : 'BEGIN';
        return {
            name: t.slice(9, -(n.length + 1)),
            event: n
        }
    }

    function o(t, s) {
        (0, n.default)().mark(c(t, s))
    }

    function u(t, n) {
        const s = new Set,
            c = new Map,
            o = [];
        return t.forEach((t => {
            const {
                name: u,
                event: E
            } = T(t.name);
            'BEGIN' === E ? c.has(u) || c.set(u, t.startTime) : (c.has(u) ? o.push({
                name: u,
                start: c.get(u),
                end: t.startTime
            }) : s.has(u) || o.push({
                name: u,
                start: n.start,
                end: t.startTime
            }), c.delete(u), s.add(u))
        })), c.forEach(((t, s) => {
            o.push({
                name: s,
                start: t,
                end: n.end
            })
        })), o
    }
}), "cd9ddf", ["ba7a76", "5d602b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getInpContainingElement = function(n) {
        const t = n.map((n => {
            const t = n.target ? .parentElement ? .closest('[data-pageslot]');
            return t ? {
                duration: n.duration,
                name: t.pageSlotName ? ? 'unknown'
            } : {
                duration: n.duration,
                name: 'unknown'
            }
        }));
        return t.reduce(((n, t) => n.duration > t.duration ? n : t), {
            duration: 0,
            name: 'unknown'
        }).name
    }
}), "f226da", []);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/e56c.37363db524.js.map