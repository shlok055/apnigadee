__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        return 'KR' === u.default.country()
    };
    var u = t(r(d[1]))
}), "0234b8", ["ba7a76", "862e50"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const s = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M16 .33a15.67 15.67 0 1 1 0 31.34A15.67 15.67 0 0 1 16 .33zm0 2a13.67 13.67 0 1 0 0 27.34 13.67 13.67 0 0 0 0-27.34zm1 3v10.1l8.74 5.04-1 1.73L15 16.58V5.33z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcSystemClock32', {
        defaultSize: 32
    });
    e.default = s
}), "02ec99", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.FACE_WIDTH_TO_HEIGHT_RATIO = e.FACE_OUTLINE_WIDTH = e.FACE_OUTLINE_HEIGHT_RATIO = e.FACE_OUTLINE_HEIGHT = e.CROP_WIDTH = e.CROP_HEIGHT = e.CAMERA_MAX_WIDTH = e.CAMERA_LOW_RESOLUTION_WIDTH_SAFARI = e.CAMERA_LOW_RESOLUTION_WIDTH = e.CAMERA_HIGH_RESOLUTION_WIDTH_ANDROID_CHROME = e.CAMERA_HIGH_RESOLUTION_WIDTH = e.CAMERA_ASPECT_RATIO = void 0, e.getCameraAspectRatio = function(_, E, O) {
        let H;
        H = _ ? O || E ? I : A : E ? I : T;
        return H
    }, e.isIpadOS = function() {
        if ('undefined' == typeof navigator) return !1;
        return 'MacIntel' === navigator.platform && navigator.maxTouchPoints > 1
    }, e.isMowebLayout = function() {
        return window.innerWidth < _.MAX_WIDTH_MEDIUM_AND_ABOVE
    };
    var _ = r(d[0]);
    e.CAMERA_MAX_WIDTH = 575;
    const I = e.CAMERA_ASPECT_RATIO = 1.3333333333333333,
        A = 1.7777777777777777,
        T = 1.7777777777777777;
    e.CAMERA_HIGH_RESOLUTION_WIDTH = 1500, e.CAMERA_HIGH_RESOLUTION_WIDTH_ANDROID_CHROME = 1300, e.CAMERA_LOW_RESOLUTION_WIDTH = 800, e.CAMERA_LOW_RESOLUTION_WIDTH_SAFARI = 640, e.CROP_WIDTH = 447, e.CROP_HEIGHT = 276, e.FACE_OUTLINE_WIDTH = 235, e.FACE_OUTLINE_HEIGHT = 320, e.FACE_OUTLINE_HEIGHT_RATIO = .85, e.FACE_WIDTH_TO_HEIGHT_RATIO = .86
}), "08f04d", ["77a85d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t, s;
    t = void 0, s = function() {
        r(d[0]);
        var t = {
            version: '1.3.5',
            initialized: !1,
            swfURL: '',
            loaded: !1,
            live: !1,
            userMedia: !0,
            androidChrome: !1,
            params: {
                width: 0,
                height: 0,
                dest_width: 0,
                dest_height: 0,
                image_format: 'jpeg',
                jpeg_quality: 90,
                force_flash: !1,
                flash_fallback_on_error: !0,
                new_user_configure_flash: !0,
                show_error_html_content: !0,
                flip_horiz: !1,
                do_not_flip_result: !1,
                fps: 30,
                upload_name: 'webcam',
                facing_mode: null,
                constraints: null,
                only_crop_result: !1,
                play_stream_inline: !0
            },
            hooks: {},
            init: function() {
                var t = this;
                this.initialized = !0, this.protocol = location.protocol.match(/https/i) ? 'https' : 'http', this.mediaDevices = navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? navigator.mediaDevices : navigator.mozGetUserMedia || navigator.webkitGetUserMedia ? {
                    getUserMedia: function(t) {
                        return new Promise((function(s, o) {
                            (navigator.mozGetUserMedia || navigator.webkitGetUserMedia).call(navigator, t, s, o)
                        }))
                    }
                } : null, window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL, this.userMedia = this.userMedia && !!this.mediaDevices && !!window.URL, this.androidChrome = /(android)/i.test(navigator.userAgent) && /(chrome)/i.test(navigator.userAgent), navigator.userAgent.match(/Firefox\D+(\d+)/) && parseInt(RegExp.$1, 10) < 21 && (this.userMedia = null), this.userMedia && window.addEventListener('beforeunload', (function(s) {
                    t.reset()
                }))
            },
            attach: function(t) {
                if (this.initialized || this.init(), 'string' == typeof t && (t = document.getElementById(t) || document.querySelector(t)), !t) return this.dispatch('error', "Could not locate DOM element to attach to.");
                this.container = t, t.innerHTML = '';
                var s = document.createElement('div');
                if (t.appendChild(s), this.peg = s, this.params.width || (this.params.width = t.offsetWidth), this.params.height || (this.params.height = t.offsetHeight), this.params.dest_width || (this.params.dest_width = this.params.width), this.params.dest_height || (this.params.dest_height = this.params.height), this.params.force_flash && (this.userMedia = null), "number" != typeof this.params.fps && (this.params.fps = 30), this.userMedia) {
                    var o = this;
                    this.getBackCameraDeviceId().then((function(t) {
                        return o.getVideoConstraintsForUserMedia(t)
                    })).then((function(t) {
                        return o.mediaDevices.getUserMedia({
                            audio: !1,
                            video: o.params.constraints || t
                        })
                    })).then((function(s) {
                        o.stream = s, o.video = document.createElement('video'), o.video.setAttribute('autoplay', 'autoplay'), o.video.setAttribute('playsinline', o.params.play_stream_inline), o.video.addEventListener('loadeddata', (function s() {
                            o.attachUserMediaVideoToElement(t), o.video && o.video.removeEventListener('loadeddata', s)
                        })), 'srcObject' in o.video ? o.video.srcObject = s : o.video.src = window.URL.createObjectURL(s) || s
                    })).catch((function(s) {
                        o.params.flash_fallback_on_error ? (o.userMedia = !1, o.attachFlashToElement(t)) : o.dispatch('error', "Could not access webcam: " + s.name + ": " + s.message, s)
                    }))
                } else this.attachFlashToElement(t)
            },
            getBackCameraDeviceId: function() {
                return this.mediaDevices.enumerateDevices().then((function(t) {
                    var s = null;
                    return t.forEach((function(t) {
                        'videoinput' === t.kind && -1 !== t.label.indexOf('back') && (s = t.deviceId)
                    })), s
                }))
            },
            getVideoConstraintsForUserMedia: function(t) {
                var s = {
                    width: this.params.dest_width,
                    height: this.params.dest_height
                };
                return this.params.facing_mode && (s.facingMode = this.params.facing_mode, 'environment' === s.facingMode && this.androidChrome && t && (s.deviceId = t)), s
            },
            attachUserMediaVideoToElement: function(t) {
                this.setElementDimensions(t);
                var s = this.video,
                    o = this.getVideoWidthAndHeight();
                s.style.width = o.width + 'px', s.style.height = o.height + 'px';
                var n = this.getPreviewToVideoScale();
                1 !== n && (t.style.overflow = 'hidden', t.style.position = 'relative', t.style.webkitTransformStyle = 'preserve-3d', t.style.mozTransformStyle = 'preserve-3d', t.style.transformStyle = 'preserve-3d', s.style.position = 'absolute', s.style.left = '50%', s.style.top = '50%', s.style.marginLeft = -Math.floor(o.width / 2 * n) + 'px', s.style.marginTop = -Math.floor(o.height / 2 * n) + 'px', s.style.webkitTransformOrigin = '0px 0px', s.style.mozTransformOrigin = '0px 0px', s.style.msTransformOrigin = '0px 0px', s.style.oTransformOrigin = '0px 0px', s.style.transformOrigin = '0px 0px', s.style.webkitTransform = 'scale(' + n + ')', s.style.mozTransform = 'scale(' + n + ')', s.style.msTransform = 'scale(' + n + ')', s.style.oTransform = 'scale(' + n + ')', s.style.transform = 'scale(' + n + ')'), t.appendChild(s), this.loaded = !0, this.live = !0, this.dispatch('load'), this.dispatch('live'), this.flip()
            },
            attachFlashToElement: function(s) {
                window.Webcam = t;
                var o = document.createElement('div');
                o.innerHTML = this.getSWFHTML(), s.appendChild(o), this.setElementDimensions(s)
            },
            getVideoWidthAndHeight: function() {
                var t, s;
                return this.userMedia ? (t = this.video.videoWidth, s = this.video.videoHeight, isNaN(s) && (s = .75 * t)) : (t = this.params.dest_width, s = this.params.dest_height), {
                    width: t,
                    height: s
                }
            },
            getPreviewToVideoScale: function() {
                var t = this.getVideoWidthAndHeight();
                return Math.max(this.params.width / t.width, this.params.height / t.height)
            },
            setElementDimensions: function(t) {
                var s = this.getVideoWidthAndHeight(),
                    o = this.params.width / s.width,
                    n = this.params.height / s.height;
                if (!this.params.only_crop_result && this.params.crop_width && this.params.crop_height) {
                    var h = Math.floor(this.params.crop_width * o),
                        l = Math.floor(this.params.crop_height * n);
                    t.style.width = h + 'px', t.style.height = l + 'px', t.style.overflow = 'hidden', t.scrollLeft = Math.floor(this.params.width / 2 - h / 2), t.scrollTop = Math.floor(this.params.height / 2 - l / 2)
                } else t.style.width = this.params.width + 'px', t.style.height = this.params.height + 'px'
            },
            reset: function() {
                if (this.preview_active && this.unfreeze(), this.unflip(), this.userMedia) {
                    if (this.stream)
                        if (this.stream.getVideoTracks) {
                            var t = this.stream.getVideoTracks();
                            t && t[0] && t[0].stop && t[0].stop()
                        } else this.stream.stop && this.stream.stop();
                    delete this.stream, delete this.video
                }
                if (!0 !== this.userMedia) {
                    var s = this.getMovie();
                    s && s._releaseCamera()
                }
                this.container && (this.container.innerHTML = '', delete this.container), this.loaded = !1, this.live = !1
            },
            set: function() {
                if (1 == arguments.length)
                    for (var t in arguments[0]) this.params[t] = arguments[0][t];
                else this.params[arguments[0]] = arguments[1]
            },
            on: function(t, s) {
                t = t.replace(/^on/i, '').toLowerCase(), this.hooks[t] || (this.hooks[t] = []), this.hooks[t].push(s)
            },
            off: function(t, s) {
                if (t = t.replace(/^on/i, '').toLowerCase(), this.hooks[t])
                    if (s) {
                        var o = this.hooks[t].indexOf(s);
                        o > -1 && this.hooks[t].splice(o, 1)
                    } else this.hooks[t] = []
            },
            dispatch: function() {
                var t = arguments[0].replace(/^on/i, '').toLowerCase(),
                    s = Array.prototype.slice.call(arguments, 1);
                if (this.hooks[t] && this.hooks[t].length) {
                    for (var o = 0, n = this.hooks[t].length; o < n; o++) {
                        var h = this.hooks[t][o];
                        'function' == typeof h ? h.apply(this, s) : 'object' == typeof h && 2 == h.length ? h[0][h[1]].apply(h[0], s) : window[h] && window[h].apply(window, s)
                    }
                    return !0
                }
                return !1
            },
            setSWFLocation: function(t) {
                this.swfURL = t
            },
            detectFlash: function() {
                var t = "Shockwave Flash",
                    s = "application/x-shockwave-flash",
                    o = window,
                    n = navigator,
                    h = !1;
                if (void 0 !== n.plugins && "object" == typeof n.plugins[t]) n.plugins[t].description && void 0 !== n.mimeTypes && n.mimeTypes[s] && n.mimeTypes[s].enabledPlugin && (h = !0);
                else if (void 0 !== o.ActiveXObject) try {
                    var l = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    l && l.GetVariable("$version") && (h = !0)
                } catch (t) {}
                return h
            },
            getSWFHTML: function() {
                var t = '';
                if (location.protocol.match(/file/)) return this.dispatch('error', "Flash does not work from local disk.  Please run from a web server."), this.params.show_error_html_content ? '<h3 style="color:red">ERROR: the Webcam.js Flash fallback does not work from local disk.  Please run it from a web server.</h3>' : '';
                if (!this.detectFlash()) return this.dispatch('error', "Adobe Flash Player not found.  Please install from get.adobe.com/flashplayer and try again."), this.params.show_error_html_content ? '<h3 style="color:red">ERROR: No Adobe Flash Player detected.  Webcam.js relies on Flash for browsers that do not support getUserMedia (like yours).</h3>' : '';
                if (!this.swfURL) {
                    for (var s = '', o = document.getElementsByTagName('script'), n = 0, h = o.length; n < h; n++) {
                        var l = o[n].getAttribute('src');
                        l && l.match(/\/webcam(\.min)?\.js/) && (s = l.replace(/\/webcam(\.min)?\.js.*$/, ''), n = h)
                    }
                    this.swfURL = s ? s + '/webcam.swf' : 'webcam.swf'
                }
                this.params.new_user_configure_flash && window.localStorage && !localStorage.getItem('visited') && (this.params.new_user = 1, localStorage.setItem('visited', 1));
                var c = '';
                for (var p in this.params) c && (c += '&'), c += p + '=' + escape(this.params[p]);
                return t += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" type="application/x-shockwave-flash" codebase="' + this.protocol + '://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + this.params.width + '" height="' + this.params.height + '" id="webcam_movie_obj" align="middle"><param name="wmode" value="opaque" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + this.swfURL + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + c + '"/><embed id="webcam_movie_embed" src="' + this.swfURL + '" wmode="opaque" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + this.params.width + '" height="' + this.params.height + '" name="webcam_movie_embed" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + c + '"></embed></object>'
            },
            getMovie: function() {
                if (this.loaded) {
                    var t = document.getElementById('webcam_movie_obj');
                    return t && t._snap || (t = document.getElementById('webcam_movie_embed')), t || this.dispatch('error', "Cannot locate Flash movie in DOM"), t
                }
                this.dispatch('error', "Flash Movie is not loaded yet")
            },
            freeze: function() {
                var t = this,
                    s = this.params;
                this.preview_active && this.unfreeze();
                var o, n, h = this.params.width / this.params.dest_width,
                    l = this.params.height / this.params.dest_height;
                this.unflip(), o = !s.only_crop_result && s.crop_width ? s.crop_width : s.dest_width, n = !s.only_crop_result && s.crop_height ? s.crop_height : s.dest_height;
                var c = document.createElement('canvas');
                c.width = o, c.height = n;
                var p = c.getContext('2d');
                this.preview_canvas = c, this.preview_context = p, 1 == h && 1 == l || (c.style.webkitTransformOrigin = '0px 0px', c.style.mozTransformOrigin = '0px 0px', c.style.msTransformOrigin = '0px 0px', c.style.oTransformOrigin = '0px 0px', c.style.transformOrigin = '0px 0px', c.style.webkitTransform = 'scaleX(' + h + ') scaleY(' + l + ')', c.style.mozTransform = 'scaleX(' + h + ') scaleY(' + l + ')', c.style.msTransform = 'scaleX(' + h + ') scaleY(' + l + ')', c.style.oTransform = 'scaleX(' + h + ') scaleY(' + l + ')', c.style.transform = 'scaleX(' + h + ') scaleY(' + l + ')'), this.snap((function() {
                    c.style.position = 'relative', c.style.left = t.container.scrollLeft + 'px', c.style.top = t.container.scrollTop + 'px', t.container.insertBefore(c, t.peg), t.container.style.overflow = 'hidden', t.preview_active = !0
                }), c)
            },
            unfreeze: function() {
                this.preview_active && (this.container.removeChild(this.preview_canvas), delete this.preview_context, delete this.preview_canvas, this.preview_active = !1, this.flip())
            },
            flip: function() {
                if (this.params.flip_horiz && this.container) {
                    var t = this.container.style;
                    t.webkitTransform = 'scaleX(-1)', t.mozTransform = 'scaleX(-1)', t.msTransform = 'scaleX(-1)', t.oTransform = 'scaleX(-1)', t.transform = 'scaleX(-1)', t.filter = 'FlipH', t.msFilter = 'FlipH'
                }
            },
            unflip: function() {
                if (this.params.flip_horiz && this.container) {
                    var t = this.container.style;
                    t.webkitTransform = 'scaleX(1)', t.mozTransform = 'scaleX(1)', t.msTransform = 'scaleX(1)', t.oTransform = 'scaleX(1)', t.transform = 'scaleX(1)', t.filter = '', t.msFilter = ''
                }
            },
            savePreview: function(t, s) {
                var o = this.params,
                    n = this.preview_canvas,
                    h = this.preview_context;
                s && s.getContext('2d').drawImage(n, 0, 0), t(s ? null : n.toDataURL('image/' + o.image_format, o.jpeg_quality / 100), n, h), this.unfreeze()
            },
            snap: function(t, s) {
                var o = this.params;
                if (!this.loaded) return this.dispatch('error', "Webcam is not loaded yet");
                if (!t) return this.dispatch('error', "Please provide a callback function or canvas to snap()");
                if (this.preview_active) return this.savePreview(t, s), null;
                var n = this.getVideoWidthAndHeight(),
                    h = n.width,
                    l = n.height,
                    c = document.createElement('canvas');
                c.width = h, c.height = l;
                var p = c.getContext('2d');
                this.params.flip_horiz && !this.params.do_not_flip_result && (p.translate(h, 0), p.scale(-1, 1));
                var f = function() {
                    this && this.src && this.width && this.height && p.drawImage(this, 0, 0, o.dest_width, o.dest_height);
                    var n = o.crop_width ? o.crop_width : o.dest_width,
                        f = o.crop_height ? o.crop_height : o.dest_height,
                        v = Math.min(h / o.dest_width, l / o.dest_height);
                    if (1 !== v || o.crop_width !== h || o.crop_width !== l) {
                        var u = Math.floor(n * v),
                            w = Math.floor(f * v),
                            _ = Math.floor(h / 2 - u / 2),
                            y = Math.floor(l / 2 - w / 2),
                            b = document.createElement('canvas');
                        b.width = n, b.height = f;
                        var T = b.getContext('2d');
                        T.drawImage(c, _, y, u, w, 0, 0, n, f), p = T, c = b
                    }
                    s && s.getContext('2d').drawImage(c, 0, 0), t(s ? null : c.toDataURL('image/' + o.image_format, o.jpeg_quality / 100), c, p)
                };
                if (this.userMedia) p.drawImage(this.video, 0, 0, h, l), f();
                else {
                    var v = this.getMovie()._snap(),
                        u = new Image;
                    u.onload = f, u.src = 'data:image/' + this.params.image_format + ';base64,' + v
                }
                return null
            },
            configure: function(t) {
                t || (t = "camera"), this.getMovie()._configure(t)
            },
            flashNotify: function(t, s) {
                switch (t) {
                    case 'flashLoadComplete':
                        this.loaded = !0, this.dispatch('load');
                        break;
                    case 'cameraLive':
                        this.live = !0, this.dispatch('live'), this.flip();
                        break;
                    case 'error':
                        this.dispatch('error', s)
                }
            },
            b64ToUint6: function(t) {
                return t > 64 && t < 91 ? t - 65 : t > 96 && t < 123 ? t - 71 : t > 47 && t < 58 ? t + 4 : 43 === t ? 62 : 47 === t ? 63 : 0
            },
            base64DecToArr: function(t, s) {
                for (var o, n, h = t.replace(/[^A-Za-z0-9\+\/]/g, ""), l = h.length, c = s ? Math.ceil((3 * l + 1 >> 2) / s) * s : 3 * l + 1 >> 2, p = new Uint8Array(c), f = 0, v = 0, u = 0; u < l; u++)
                    if (n = 3 & u, f |= this.b64ToUint6(h.charCodeAt(u)) << 18 - 6 * n, 3 === n || l - u == 1) {
                        for (o = 0; o < 3 && v < c; o++, v++) p[v] = f >>> (16 >>> o & 24) & 255;
                        f = 0
                    }
                return p
            },
            upload: function(s, o, n) {
                var h = this.params.upload_name || 'webcam',
                    l = '';
                if (!s.match(/^data\:image\/(\w+)/)) throw "Cannot locate image format in Data URI";
                l = RegExp.$1;
                var c = s.replace(/^data\:image\/\w+\;base64\,/, ''),
                    p = new XMLHttpRequest;
                p.open("POST", o, !0), p.upload && p.upload.addEventListener && p.upload.addEventListener('progress', (function(s) {
                    if (s.lengthComputable) {
                        var o = s.loaded / s.total;
                        t.dispatch('uploadProgress', o, s)
                    }
                }), !1);
                var f = this;
                p.onload = function() {
                    n && n.apply(f, [p.status, p.responseText, p.statusText]), t.dispatch('uploadComplete', p.status, p.responseText, p.statusText)
                };
                var v = new Blob([this.base64DecToArr(c)], {
                        type: 'image/' + l
                    }),
                    u = new FormData;
                u.append(h, v, h + "." + l.replace(/e/, '')), p.send(u)
            }
        };
        return t
    }, 'object' == typeof e && void 0 !== m ? m.exports = s() : 'function' == typeof define && define.amd ? define(s) : t.Webcam = s()
}), "08f5d0", ["4ad1a6"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var h = t(r(d[1])),
        l = t(r(d[2])),
        o = r(d[3]);
    const v = (0, l.default)({
        svgContents: "<path d=\"m18.66 6.51-14.84 9.65a1 1 0 0 0 .55 1.84h15.62a1 1 0 0 0 1-1v-9.24a1.5 1.5 0 0 0 -2.32-1.26z\" /><path d=\"m9.25 12a1.25 1.25 0 1 1 -1.25-1.25 1.25 1.25 0 0 1 1.25 1.25zm11.75-8h-14a .5.5 0 0 0 0 1h14a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-1.5a.5.5 0 0 0 0 1h1.5a2 2 0 0 0 2-2v-12a2 2 0 0 0 -2-2zm-5 15h-13a1 1 0 0 1 -1-1v-12a1 1 0 0 1 1-1h1a .5.5 0 0 0 0-1h-1a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h13a .5.5 0 0 0 0-1zm-7.17-11.17a4.25 4.25 0 1 0 3.42 4.17 4.21 4.21 0 0 0 -.46-1.92.5.5 0 0 0 -.89.45 3.25 3.25 0 0 1 -.61 3.77 3.67 3.67 0 0 0 -4.56.02 3.25 3.25 0 0 1 2.27-5.57 3.3 3.3 0 0 1 .63.06.5.5 0 1 0 .19-.98zm5.67 3.17h5.5a.5.5 0 0 0 0-1h-5.5a.5.5 0 0 0 0 1zm0 2h5.5a.5.5 0 0 0 0-1h-5.5a.5.5 0 0 0 0 1zm0 2h5.5a.5.5 0 0 0 0-1h-5.5a.5.5 0 0 0 0 1z\" fill=\"#484848\" />",
        svgProps: {
            viewBox: "0 0 24 24"
        }
    }, 'IconIndicatorIdentification', {
        defaultFillColor: h.default.accent.blue
    });
    e.default = v;
    v.categories = [o.INDICATOR]
}), "09aec9", ["ba7a76", "fee591", "a89bd1", "72354b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.hideConfirmLegalNameModal = function() {
        return {
            type: t.HIDE_CONFIRM_LEGAL_NAME_MODAL
        }
    }, e.hideDismissModal = function() {
        return {
            type: t.HIDE_DISMISS_MODAL
        }
    }, e.hideWebcamCaptureModal = function() {
        return {
            type: t.HIDE_WEBCAM_CAPTURE_MODAL
        }
    }, e.setIsTreatmentUI = function(n) {
        return {
            type: t.SET_IS_TREATMENT_UI,
            payload: n
        }
    }, e.showConfirmLegalNameModal = function(n) {
        return {
            type: t.SHOW_CONFIRM_LEGAL_NAME_MODAL,
            payload: n
        }
    }, e.showDismissModal = function(n) {
        return {
            type: t.SHOW_DISMISS_MODAL,
            payload: n
        }
    }, e.showWebcamCaptureModal = function(n) {
        return {
            type: t.SHOW_WEBCAM_CAPTURE_MODAL,
            payload: n
        }
    };
    var t = r(d[0])
}), "0b3d87", ["1c37e6"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isChinaMainlandGuest = function() {
        return (0, s.isChinaMainlandGuestCore)({
            hostname: window.location.hostname
        })
    }, e.isHongkongGuest = function() {
        return (0, s.isHongkongGuestCore)({
            hostname: window.location.hostname,
            countryOverride: u(window.location.search)
        })
    }, e.isJapanGuest = function() {
        return (0, s.isJapanGuestCore)({
            hostname: window.location.hostname
        })
    }, e.isKoreaGuest = function() {
        return (0, s.isKoreaGuestCore)({
            hostname: window.location.hostname
        })
    }, e.isSimplifiedChineseSpeakingUser = function() {
        return (0, s.isSimplifiedChineseSpeakingUserCore)({
            language: o.default.language()
        })
    }, e.isTaiwanGuest = function() {
        return (0, s.isTaiwanGuestCore)({
            hostname: window.location.hostname,
            countryOverride: u(window.location.search)
        })
    };
    var o = n(r(d[1]));

    function t() {
        const o = n(r(d[2]));
        return t = function() {
            return o
        }, o
    }
    n(r(d[3]));
    var s = r(d[4]);
    const u = n => t().default.parse(n, {
        ignoreQueryPrefix: !0
    }).country_override
}), "0da039", ["ba7a76", "862e50", "e950a3", "ef2bc3", "7dd7ad"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = t(r(d[1])),
        o = t(r(d[2])),
        u = r(d[3]);
    const c = (0, o.default)({
        svgContents: "<path d=\"m18.69 21.37a.5.5 0 0 1 -.14.69 12 12 0 0 1 -16.48-16.8.5.5 0 0 1 .83.56 11 11 0 0 0 15.11 15.39.5.5 0 0 1 .69.14zm-6.69-21.37a11.94 11.94 0 0 0 -6.81 2.12.5.5 0 0 0 .57.82 11 11 0 0 1 15.85 14.42.5.5 0 0 0 .87.49 12 12 0 0 0 -10.48-17.85zm8.65 19.08a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5z\" fill=\"#484848\" /><path d=\"m12 3a9 9 0 1 0 9 9 9 9 0 0 0 -9-9zm3.16 12.18a1 1 0 0 1 -1.41 0l-1.75-1.76-1.75 1.77a1 1 0 1 1 -1.42-1.41l1.76-1.78-1.75-1.76a1 1 0 0 1 1.42-1.41l1.74 1.75 1.74-1.76a1 1 0 1 1 1.42 1.41l-1.75 1.77 1.76 1.77a1 1 0 0 1 0 1.41z\" />",
        svgProps: {
            viewBox: "0 0 24 24"
        }
    }, 'IconIndicatorQuizFalse', {
        defaultFillColor: l.default.accent.beach
    });
    e.default = c;
    c.categories = [u.INDICATOR]
}), "19e1d1", ["ba7a76", "fee591", "a89bd1", "72354b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.UPDATE_SSN_FIELDS = e.UPDATE_LEGAL_NAME_VALIDITY = e.UPDATE_LEGAL_NAME_FIELDS = e.UPDATE_LEGAL_INFO_VALIDITY = e.UPDATE_LEGAL_INFO_FIELD_NAMES_ON_SERVER = e.UPDATE_LEGAL_INFO_FIELDS = e.SUBMIT_SSN = e.SUBMIT_LEGAL_INFO = e.START_FLOW = e.SHOW_WEBCAM_CAPTURE_MODAL = e.SHOW_DISMISS_MODAL = e.SHOW_CONFIRM_LEGAL_NAME_MODAL = e.SHOW_CONFIRM_LEGAL_NAME_ERROR_ALERT = e.SET_USER_PHONE_NUMBER = e.SET_USER_GOVID_PHONE_NUMBER_COLLECTED_FOR_HANDOFF = e.SET_USER_GOVID_PHONE_COUNTRY_COLLECTED_FOR_HANDOFF = e.SET_USER = e.SET_UPLOADED_FRONT_IMAGE = e.SET_UPLOADED_BACK_IMAGE = e.SET_SELFIE_POST_FAILED_INDEX = e.SET_SELECTED_ID = e.SET_SELECTED_COUNTRY = e.SET_SELECTED_CONSENT = e.SET_POST_START_TIMESTAMP = e.SET_OPT_IN_TO_BIOMETRICS = e.SET_NEEDS_BACK_SIDE = e.SET_MOBILE_HANDOFF_SUCCESS = e.SET_MOBILE_HANDOFF_DEEPLINK_URL = e.SET_MANUAL_CAPTURE_ERROR = e.SET_LOADING = e.SET_KOREAN_NAME = e.SET_IS_WAITING_FOR_MOBILE_HANDOFF = e.SET_IS_TREATMENT_UI = e.SET_IS_TAKING_PHOTO = e.SET_IS_POSTING = e.SET_IS_LOW_QUALITY_IMAGE_MODE = e.SET_IS_FULL_PAGE = e.SET_IS_FLASHING = e.SET_IS_FIRST_TIME_AUTO_CAPTURE = e.SET_IMAGE_SUBMISSION_KEY = e.SET_IMAGE_DATA_URI = e.SET_ID_TYPE_TEXT = e.SET_GOV_ID_POST_SUCCESS = e.SET_GOV_ID_POST_ERROR = e.SET_GOV_ID_FRONT_FACE_BOX = e.SET_FLOW_COMPLETED = e.SET_FLOW = e.SET_DISABLE_AUTO_CAPTURE = e.SET_COUNTRIES = e.SET_CONTEXT = e.SET_CONSENT_TERMS_CONFIGURATION_ID = e.SET_CHINA_USER_ID_NUMBER = e.SET_CHINA_USER_FULL_NAME = e.SET_CAPTURE_METHOD = e.SET_CAMERA_REF = e.SET_CAMERA_LIVE = e.SET_CAMERA_DIMENSIONS = e.SET_CAMERA_ANIMATION_COMPLETE = e.SET_BLURRINESS_VALUE = e.SET_BIRTH_DATE = e.HIDE_WEBCAM_CAPTURE_MODAL = e.HIDE_DISMISS_MODAL = e.HIDE_CONFIRM_LEGAL_NAME_MODAL = e.HIDE_CONFIRM_LEGAL_NAME_ERROR_ALERT = e.GO_BACK_TO_PREVIOUS_STEP = e.EXIT_FLOW = e.DISPLAY_OPT_IN_BIOMETRICS = e.CONCAT_FLOW = e.CHOOSE_GOV_ID_PLATFORM = e.CHOOSE_FOV_OPTION = e.ADVANCE_TO_NEXT_STEP = void 0;
    e.CHOOSE_FOV_OPTION = 'airbnb/fov_flow/CHOOSE_FOV_OPTION', e.SET_FLOW = 'airbnb/fov_flow/SET_FLOW', e.CONCAT_FLOW = 'airbnb/fov_flow/CONCAT_FLOW', e.ADVANCE_TO_NEXT_STEP = 'airbnb/fov_flow/ADVANCE_TO_NEXT_STEP', e.GO_BACK_TO_PREVIOUS_STEP = 'airbnb/fov_flow/GO_BACK_TO_PREVIOUS_STEP', e.START_FLOW = 'airbnb/fov_flow/START_FLOW', e.EXIT_FLOW = 'airbnb/fov_flow/EXIT_FLOW', e.UPDATE_SSN_FIELDS = 'airbnb/fov_flow/UPDATE_SSN_FIELDS', e.SUBMIT_SSN = 'airbnb/fov_flow/SUBMIT_SSN', e.UPDATE_LEGAL_INFO_FIELDS = 'airbnb/fov_flow/UPDATE_LEGAL_INFO_FIELDS', e.UPDATE_LEGAL_INFO_FIELD_NAMES_ON_SERVER = 'airbnb/fov_flow/UPDATE_LEGAL_INFO_FIELD_NAMES_ON_SERVER', e.UPDATE_LEGAL_INFO_VALIDITY = 'airbnb/fov_flow/UPDATE_LEGAL_INFO_VALIDITY', e.SUBMIT_LEGAL_INFO = 'airbnb/fov_flow/SUBMIT_LEGAL_INFO', e.CHOOSE_GOV_ID_PLATFORM = 'airbnb/fov_flow/CHOOSE_GOV_ID_PLATFORM', e.SET_UPLOADED_FRONT_IMAGE = 'airbnb/fov_flow/SET_UPLOADED_FRONT_IMAGE', e.SET_UPLOADED_BACK_IMAGE = 'airbnb/fov_flow/SET_UPLOADED_BACK_IMAGE', e.SET_NEEDS_BACK_SIDE = 'airbnb/fov_flow/SET_NEEDS_BACK_SIDE', e.SET_CAMERA_LIVE = 'airbnb/fov_flow/SET_CAMERA_LIVE', e.SET_CAMERA_ANIMATION_COMPLETE = 'airbnb/fov_flow/SET_CAMERA_ANIMATION_COMPLETE', e.SET_IMAGE_DATA_URI = 'airbnb/fov_flow/SET_IMAGE_DATA_URI', e.SET_CAMERA_REF = 'airbnb/fov_flow/SET_CAMERA_REF', e.SET_CAMERA_DIMENSIONS = 'airbnb/fov_flow/SET_CAMERA_DIMENSIONS', e.SET_USER = 'airbnb/fov_flow/SET_USER', e.SET_IS_WAITING_FOR_MOBILE_HANDOFF = 'airbnb/fov_flow/SET_IS_WAITING_FOR_MOBILE_HANDOFF', e.SET_USER_PHONE_NUMBER = 'airbnb/fov_flow/SET_USER_PHONE_NUMBER', e.SET_MOBILE_HANDOFF_SUCCESS = 'airbnb/fov_flow/SET_MOBILE_HANDOFF_SUCCESS', e.SET_MOBILE_HANDOFF_DEEPLINK_URL = 'airbnb/fov_flow/SET_MOBILE_HANDOFF_DEEPLINK_URL', e.SET_IMAGE_SUBMISSION_KEY = 'airbnb/fov_flow/SET_IMAGE_SUBMISSION_KEY', e.SET_POST_START_TIMESTAMP = 'airbnb/fov_flow/SET_POST_START_TIMESTAMP', e.SET_GOV_ID_POST_SUCCESS = 'airbnb/fov_flow/SET_GOV_ID_POST_SUCCESS', e.SET_GOV_ID_POST_ERROR = 'airbnb/fov_flow/SET_GOV_ID_POST_ERROR', e.SET_SELFIE_POST_FAILED_INDEX = 'airbnb/fov_flow/SET_SELFIE_POST_FAILED_INDEX', e.SET_SELECTED_COUNTRY = 'airbnb/fov_flow/SET_SELECTED_COUNTRY', e.SET_SELECTED_ID = 'airbnb/fov_flow/SET_SELECTED_ID', e.SET_COUNTRIES = 'airbnb/fov_flow/SET_COUNTRIES', e.SET_IS_TAKING_PHOTO = 'airbnb/fov_flow/SET_IS_TAKING_PHOTO', e.SET_IS_FLASHING = 'airbnb/fov_flow/SET_IS_FLASHING', e.SET_IS_POSTING = 'airbnb/fov_flow/SET_IS_POSTING', e.SET_CONTEXT = 'airbnb/fov_flow/SET_CONTEXT', e.SET_ID_TYPE_TEXT = 'airbnb/fov_flow/SET_ID_TYPE_TEXT', e.SET_IS_FULL_PAGE = 'airbnb/fov_flow/SET_IS_FULL_PAGE', e.SET_FLOW_COMPLETED = 'airbnb/fov_flow/SET_FLOW_COMPLETED', e.SET_IS_FIRST_TIME_AUTO_CAPTURE = 'airbnb/fov_flow/SET_IS_FIRST_TIME_AUTO_CAPTURE', e.SHOW_DISMISS_MODAL = 'airbnb/fov_flow/SHOW_DISMISS_MODAL', e.HIDE_DISMISS_MODAL = 'airbnb/fov_flow/HIDE_DISMISS_MODAL', e.SET_USER_GOVID_PHONE_NUMBER_COLLECTED_FOR_HANDOFF = 'airbnb/fov_flow/SET_USER_GOVID_PHONE_NUMBER_COLLECTED_FOR_HANDOFF', e.SET_USER_GOVID_PHONE_COUNTRY_COLLECTED_FOR_HANDOFF = 'airbnb/fov_flow/SET_USER_GOVID_PHONE_COUNTRY_COLLECTED_FOR_HANDOFF', e.SET_IS_LOW_QUALITY_IMAGE_MODE = 'airbnb/fov_flow/SET_IS_LOW_QUALITY_IMAGE_MODE', e.SET_OPT_IN_TO_BIOMETRICS = 'airbnb/fov_flow/SET_OPT_IN_TO_BIOMETRICS', e.SET_CHINA_USER_FULL_NAME = 'airbnb/fov_flow/SET_CHINA_USER_FULL_NAME', e.SET_CHINA_USER_ID_NUMBER = 'airbnb/fov_flow/SET_CHINA_USER_ID_NUMBER', e.UPDATE_LEGAL_NAME_FIELDS = 'airbnb/fov_flow/UPDATE_LEGAL_NAME_FIELDS', e.UPDATE_LEGAL_NAME_VALIDITY = 'airbnb/fov_flow/UPDATE_LEGAL_NAME_VALIDITY', e.DISPLAY_OPT_IN_BIOMETRICS = 'airbnb/fov_flow/DISPLAY_OPT_IN_BIOMETRICS', e.SHOW_CONFIRM_LEGAL_NAME_MODAL = 'airbnb/fov_flow/SHOW_CONFIRM_LEGAL_NAME_MODAL', e.HIDE_CONFIRM_LEGAL_NAME_MODAL = 'airbnb/fov_flow/HIDE_CONFIRM_LEGAL_NAME_MODAL', e.SHOW_WEBCAM_CAPTURE_MODAL = 'airbnb/fov_flow/SHOW_WEBCAM_CAPTURE_MODAL', e.HIDE_WEBCAM_CAPTURE_MODAL = 'airbnb/fov_flow/HIDE_WEBCAM_CAPTURE_MODAL', e.SET_LOADING = 'airbnb/fov_flow/SET_LOADING', e.SET_SELECTED_CONSENT = 'airbnb/fov_flow/SET_SELECTED_CONSENT', e.SET_CONSENT_TERMS_CONFIGURATION_ID = 'airbnb/fov_flow/SET_CONSENT_TERMS_CONFIGURATION_ID', e.SHOW_CONFIRM_LEGAL_NAME_ERROR_ALERT = 'airbnb/fov_flow/SHOW_CONFIRM_LEGAL_NAME_ERROR_ALERT', e.HIDE_CONFIRM_LEGAL_NAME_ERROR_ALERT = 'airbnb/fov_flow/HIDE_CONFIRM_LEGAL_NAME_ERROR_ALERT', e.SET_CAPTURE_METHOD = 'airbnb/fov_flow/SET_CAPTURE_METHOD', e.SET_MANUAL_CAPTURE_ERROR = 'airbnb/fov_flow/SET_MANUAL_CAPTURE_ERROR', e.SET_BLURRINESS_VALUE = 'airbnb/fov_flow/SET_BLURRINESS_VALUE', e.SET_GOV_ID_FRONT_FACE_BOX = 'airbnb/fov_flow/SET_GOV_ID_FRONT_FACE_BOX', e.SET_KOREAN_NAME = 'airbnb/fov_flow/SET_KOREAN_NAME', e.SET_BIRTH_DATE = 'airbnb/fov_flow/SET_BIRTH_DATE', e.SET_IS_TREATMENT_UI = 'airbnb/fov_flow/SET_IS_TREATMENT_UI', e.SET_DISABLE_AUTO_CAPTURE = 'airbnb/fov_flow/SET_DISABLE_AUTO_CAPTURE'
}), "1c37e6", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isEligibleForMarketLocalization = function(o) {
        const s = new Map([
            [t.MarketLocalizationSegment.SIMPLIFIED_CHINESE_SPEAKING_GUEST, n.isSimplifiedChineseSpeakingUser],
            [t.MarketLocalizationSegment.CHINA_MAINLAND_GUEST, n.isChinaMainlandGuest],
            [t.MarketLocalizationSegment.JAPAN_GUEST, n.isJapanGuest],
            [t.MarketLocalizationSegment.KOREA_GUEST, n.isKoreaGuest],
            [t.MarketLocalizationSegment.TAIWAN_GUEST, n.isTaiwanGuest],
            [t.MarketLocalizationSegment.HONG_KONG_AND_MACAO_GUEST, n.isHongkongGuest]
        ]).get(o);
        if (void 0 === s) return !1;
        return s()
    };
    var t = r(d[0]),
        n = r(d[1])
}), "1d1d67", ["9731f5", "0da039"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const s = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M28.3 12.46 18.33 2.5a3.3 3.3 0 0 0-4.66 0L.08 16.1l1.84 1.83 1.78-1.78V29A2.3 2.3 0 0 0 6 31.3h20a2.3 2.3 0 0 0 2.3-2.3V16.14l1.78 1.78 1.84-1.84-3.62-3.62ZM7.57 29c.4-3.46 2.9-6.3 6.18-7.2a4 4 0 1 1 4.5 0 8.52 8.52 0 0 1 6.18 7.2H7.57Z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcCompactHostListingResidential16', {
        defaultSize: 16
    });
    e.default = s
}), "1d6b40", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    const t = {
        generateIdentifier: function() {
            return Math.random().toString(36).substr(2, 10)
        }
    };
    t.localCName = t.generateIdentifier(), t.splitLines = function(t) {
        return t.trim().split('\n').map((t => t.trim()))
    }, t.splitSections = function(t) {
        return t.split('\nm=').map(((t, s) => (s > 0 ? 'm=' + t : t).trim() + '\r\n'))
    }, t.getDescription = function(s) {
        const n = t.splitSections(s);
        return n && n[0]
    }, t.getMediaSections = function(s) {
        const n = t.splitSections(s);
        return n.shift(), n
    }, t.matchPrefix = function(s, n) {
        return t.splitLines(s).filter((t => 0 === t.indexOf(n)))
    }, t.parseCandidate = function(t) {
        let s;
        s = 0 === t.indexOf('a=candidate:') ? t.substring(12).split(' ') : t.substring(10).split(' ');
        const n = {
            foundation: s[0],
            component: {
                1: 'rtp',
                2: 'rtcp'
            }[s[1]] || s[1],
            protocol: s[2].toLowerCase(),
            priority: parseInt(s[3], 10),
            ip: s[4],
            address: s[4],
            port: parseInt(s[5], 10),
            type: s[7]
        };
        for (let t = 8; t < s.length; t += 2) switch (s[t]) {
            case 'raddr':
                n.relatedAddress = s[t + 1];
                break;
            case 'rport':
                n.relatedPort = parseInt(s[t + 1], 10);
                break;
            case 'tcptype':
                n.tcpType = s[t + 1];
                break;
            case 'ufrag':
                n.ufrag = s[t + 1], n.usernameFragment = s[t + 1];
                break;
            default:
                void 0 === n[s[t]] && (n[s[t]] = s[t + 1])
        }
        return n
    }, t.writeCandidate = function(t) {
        const s = [];
        s.push(t.foundation);
        const n = t.component;
        'rtp' === n ? s.push(1) : 'rtcp' === n ? s.push(2) : s.push(n), s.push(t.protocol.toUpperCase()), s.push(t.priority), s.push(t.address || t.ip), s.push(t.port);
        const p = t.type;
        return s.push('typ'), s.push(p), 'host' !== p && t.relatedAddress && t.relatedPort && (s.push('raddr'), s.push(t.relatedAddress), s.push('rport'), s.push(t.relatedPort)), t.tcpType && 'tcp' === t.protocol.toLowerCase() && (s.push('tcptype'), s.push(t.tcpType)), (t.usernameFragment || t.ufrag) && (s.push('ufrag'), s.push(t.usernameFragment || t.ufrag)), 'candidate:' + s.join(' ')
    }, t.parseIceOptions = function(t) {
        return t.substr(14).split(' ')
    }, t.parseRtpMap = function(t) {
        let s = t.substr(9).split(' ');
        const n = {
            payloadType: parseInt(s.shift(), 10)
        };
        return s = s[0].split('/'), n.name = s[0], n.clockRate = parseInt(s[1], 10), n.channels = 3 === s.length ? parseInt(s[2], 10) : 1, n.numChannels = n.channels, n
    }, t.writeRtpMap = function(t) {
        let s = t.payloadType;
        void 0 !== t.preferredPayloadType && (s = t.preferredPayloadType);
        const n = t.channels || t.numChannels || 1;
        return 'a=rtpmap:' + s + ' ' + t.name + '/' + t.clockRate + (1 !== n ? '/' + n : '') + '\r\n'
    }, t.parseExtmap = function(t) {
        const s = t.substr(9).split(' ');
        return {
            id: parseInt(s[0], 10),
            direction: s[0].indexOf('/') > 0 ? s[0].split('/')[1] : 'sendrecv',
            uri: s[1]
        }
    }, t.writeExtmap = function(t) {
        return 'a=extmap:' + (t.id || t.preferredId) + (t.direction && 'sendrecv' !== t.direction ? '/' + t.direction : '') + ' ' + t.uri + '\r\n'
    }, t.parseFmtp = function(t) {
        const s = {};
        let n;
        const p = t.substr(t.indexOf(' ') + 1).split(';');
        for (let t = 0; t < p.length; t++) n = p[t].trim().split('='), s[n[0].trim()] = n[1];
        return s
    }, t.writeFmtp = function(t) {
        let s = '',
            n = t.payloadType;
        if (void 0 !== t.preferredPayloadType && (n = t.preferredPayloadType), t.parameters && Object.keys(t.parameters).length) {
            const p = [];
            Object.keys(t.parameters).forEach((s => {
                void 0 !== t.parameters[s] ? p.push(s + '=' + t.parameters[s]) : p.push(s)
            })), s += 'a=fmtp:' + n + ' ' + p.join(';') + '\r\n'
        }
        return s
    }, t.parseRtcpFb = function(t) {
        const s = t.substr(t.indexOf(' ') + 1).split(' ');
        return {
            type: s.shift(),
            parameter: s.join(' ')
        }
    }, t.writeRtcpFb = function(t) {
        let s = '',
            n = t.payloadType;
        return void 0 !== t.preferredPayloadType && (n = t.preferredPayloadType), t.rtcpFeedback && t.rtcpFeedback.length && t.rtcpFeedback.forEach((t => {
            s += 'a=rtcp-fb:' + n + ' ' + t.type + (t.parameter && t.parameter.length ? ' ' + t.parameter : '') + '\r\n'
        })), s
    }, t.parseSsrcMedia = function(t) {
        const s = t.indexOf(' '),
            n = {
                ssrc: parseInt(t.substr(7, s - 7), 10)
            },
            p = t.indexOf(':', s);
        return p > -1 ? (n.attribute = t.substr(s + 1, p - s - 1), n.value = t.substr(p + 1)) : n.attribute = t.substr(s + 1), n
    }, t.parseSsrcGroup = function(t) {
        const s = t.substr(13).split(' ');
        return {
            semantics: s.shift(),
            ssrcs: s.map((t => parseInt(t, 10)))
        }
    }, t.getMid = function(s) {
        const n = t.matchPrefix(s, 'a=mid:')[0];
        if (n) return n.substr(6)
    }, t.parseFingerprint = function(t) {
        const s = t.substr(14).split(' ');
        return {
            algorithm: s[0].toLowerCase(),
            value: s[1].toUpperCase()
        }
    }, t.getDtlsParameters = function(s, n) {
        return {
            role: 'auto',
            fingerprints: t.matchPrefix(s + n, 'a=fingerprint:').map(t.parseFingerprint)
        }
    }, t.writeDtlsParameters = function(t, s) {
        let n = 'a=setup:' + s + '\r\n';
        return t.fingerprints.forEach((t => {
            n += 'a=fingerprint:' + t.algorithm + ' ' + t.value + '\r\n'
        })), n
    }, t.parseCryptoLine = function(t) {
        const s = t.substr(9).split(' ');
        return {
            tag: parseInt(s[0], 10),
            cryptoSuite: s[1],
            keyParams: s[2],
            sessionParams: s.slice(3)
        }
    }, t.writeCryptoLine = function(s) {
        return 'a=crypto:' + s.tag + ' ' + s.cryptoSuite + ' ' + ('object' == typeof s.keyParams ? t.writeCryptoKeyParams(s.keyParams) : s.keyParams) + (s.sessionParams ? ' ' + s.sessionParams.join(' ') : '') + '\r\n'
    }, t.parseCryptoKeyParams = function(t) {
        if (0 !== t.indexOf('inline:')) return null;
        const s = t.substr(7).split('|');
        return {
            keyMethod: 'inline',
            keySalt: s[0],
            lifeTime: s[1],
            mkiValue: s[2] ? s[2].split(':')[0] : void 0,
            mkiLength: s[2] ? s[2].split(':')[1] : void 0
        }
    }, t.writeCryptoKeyParams = function(t) {
        return t.keyMethod + ':' + t.keySalt + (t.lifeTime ? '|' + t.lifeTime : '') + (t.mkiValue && t.mkiLength ? '|' + t.mkiValue + ':' + t.mkiLength : '')
    }, t.getCryptoParameters = function(s, n) {
        return t.matchPrefix(s + n, 'a=crypto:').map(t.parseCryptoLine)
    }, t.getIceParameters = function(s, n) {
        const p = t.matchPrefix(s + n, 'a=ice-ufrag:')[0],
            c = t.matchPrefix(s + n, 'a=ice-pwd:')[0];
        return p && c ? {
            usernameFragment: p.substr(12),
            password: c.substr(10)
        } : null
    }, t.writeIceParameters = function(t) {
        let s = 'a=ice-ufrag:' + t.usernameFragment + "\r\na=ice-pwd:" + t.password + '\r\n';
        return t.iceLite && (s += 'a=ice-lite\r\n'), s
    }, t.parseRtpParameters = function(s) {
        const n = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: [],
                rtcp: []
            },
            p = t.splitLines(s)[0].split(' ');
        for (let c = 3; c < p.length; c++) {
            const o = p[c],
                u = t.matchPrefix(s, 'a=rtpmap:' + o + ' ')[0];
            if (u) {
                const p = t.parseRtpMap(u),
                    c = t.matchPrefix(s, 'a=fmtp:' + o + ' ');
                switch (p.parameters = c.length ? t.parseFmtp(c[0]) : {}, p.rtcpFeedback = t.matchPrefix(s, 'a=rtcp-fb:' + o + ' ').map(t.parseRtcpFb), n.codecs.push(p), p.name.toUpperCase()) {
                    case 'RED':
                    case 'ULPFEC':
                        n.fecMechanisms.push(p.name.toUpperCase())
                }
            }
        }
        return t.matchPrefix(s, 'a=extmap:').forEach((s => {
            n.headerExtensions.push(t.parseExtmap(s))
        })), n
    }, t.writeRtpDescription = function(s, n) {
        let p = '';
        p += 'm=' + s + ' ', p += n.codecs.length > 0 ? '9' : '0', p += ' UDP/TLS/RTP/SAVPF ', p += n.codecs.map((t => void 0 !== t.preferredPayloadType ? t.preferredPayloadType : t.payloadType)).join(' ') + '\r\n', p += 'c=IN IP4 0.0.0.0\r\n', p += 'a=rtcp:9 IN IP4 0.0.0.0\r\n', n.codecs.forEach((s => {
            p += t.writeRtpMap(s), p += t.writeFmtp(s), p += t.writeRtcpFb(s)
        }));
        let c = 0;
        return n.codecs.forEach((t => {
            t.maxptime > c && (c = t.maxptime)
        })), c > 0 && (p += 'a=maxptime:' + c + '\r\n'), n.headerExtensions && n.headerExtensions.forEach((s => {
            p += t.writeExtmap(s)
        })), p
    }, t.parseRtpEncodingParameters = function(s) {
        const n = [],
            p = t.parseRtpParameters(s),
            c = -1 !== p.fecMechanisms.indexOf('RED'),
            o = -1 !== p.fecMechanisms.indexOf('ULPFEC'),
            u = t.matchPrefix(s, 'a=ssrc:').map((s => t.parseSsrcMedia(s))).filter((t => 'cname' === t.attribute)),
            l = u.length > 0 && u[0].ssrc;
        let f;
        const h = t.matchPrefix(s, 'a=ssrc-group:FID').map((t => t.substr(17).split(' ').map((t => parseInt(t, 10)))));
        h.length > 0 && h[0].length > 1 && h[0][0] === l && (f = h[0][1]), p.codecs.forEach((t => {
            if ('RTX' === t.name.toUpperCase() && t.parameters.apt) {
                let s = {
                    ssrc: l,
                    codecPayloadType: parseInt(t.parameters.apt, 10)
                };
                l && f && (s.rtx = {
                    ssrc: f
                }), n.push(s), c && (s = JSON.parse(JSON.stringify(s)), s.fec = {
                    ssrc: l,
                    mechanism: o ? 'red+ulpfec' : 'red'
                }, n.push(s))
            }
        })), 0 === n.length && l && n.push({
            ssrc: l
        });
        let y = t.matchPrefix(s, 'b=');
        return y.length && (y = 0 === y[0].indexOf('b=TIAS:') ? parseInt(y[0].substr(7), 10) : 0 === y[0].indexOf('b=AS:') ? 1e3 * parseInt(y[0].substr(5), 10) * .95 - 16e3 : void 0, n.forEach((t => {
            t.maxBitrate = y
        }))), n
    }, t.parseRtcpParameters = function(s) {
        const n = {},
            p = t.matchPrefix(s, 'a=ssrc:').map((s => t.parseSsrcMedia(s))).filter((t => 'cname' === t.attribute))[0];
        p && (n.cname = p.value, n.ssrc = p.ssrc);
        const c = t.matchPrefix(s, 'a=rtcp-rsize');
        n.reducedSize = c.length > 0, n.compound = 0 === c.length;
        const o = t.matchPrefix(s, 'a=rtcp-mux');
        return n.mux = o.length > 0, n
    }, t.writeRtcpParameters = function(t) {
        let s = '';
        return t.reducedSize && (s += 'a=rtcp-rsize\r\n'), t.mux && (s += 'a=rtcp-mux\r\n'), void 0 !== t.ssrc && t.cname && (s += 'a=ssrc:' + t.ssrc + ' cname:' + t.cname + '\r\n'), s
    }, t.parseMsid = function(s) {
        let n;
        const p = t.matchPrefix(s, 'a=msid:');
        if (1 === p.length) return n = p[0].substr(7).split(' '), {
            stream: n[0],
            track: n[1]
        };
        const c = t.matchPrefix(s, 'a=ssrc:').map((s => t.parseSsrcMedia(s))).filter((t => 'msid' === t.attribute));
        return c.length > 0 ? (n = c[0].value.split(' '), {
            stream: n[0],
            track: n[1]
        }) : void 0
    }, t.parseSctpDescription = function(s) {
        const n = t.parseMLine(s),
            p = t.matchPrefix(s, 'a=max-message-size:');
        let c;
        p.length > 0 && (c = parseInt(p[0].substr(19), 10)), isNaN(c) && (c = 65536);
        const o = t.matchPrefix(s, 'a=sctp-port:');
        if (o.length > 0) return {
            port: parseInt(o[0].substr(12), 10),
            protocol: n.fmt,
            maxMessageSize: c
        };
        const u = t.matchPrefix(s, 'a=sctpmap:');
        if (u.length > 0) {
            const t = u[0].substr(10).split(' ');
            return {
                port: parseInt(t[0], 10),
                protocol: t[1],
                maxMessageSize: c
            }
        }
    }, t.writeSctpDescription = function(t, s) {
        let n = [];
        return n = 'DTLS/SCTP' !== t.protocol ? ['m=' + t.kind + ' 9 ' + t.protocol + ' ' + s.protocol + '\r\n', 'c=IN IP4 0.0.0.0\r\n', 'a=sctp-port:' + s.port + '\r\n'] : ['m=' + t.kind + ' 9 ' + t.protocol + ' ' + s.port + '\r\n', 'c=IN IP4 0.0.0.0\r\n', 'a=sctpmap:' + s.port + ' ' + s.protocol + ' 65535\r\n'], void 0 !== s.maxMessageSize && n.push('a=max-message-size:' + s.maxMessageSize + '\r\n'), n.join('')
    }, t.generateSessionId = function() {
        return Math.random().toString().substr(2, 21)
    }, t.writeSessionBoilerplate = function(s, n, p) {
        let c;
        const o = void 0 !== n ? n : 2;
        c = s || t.generateSessionId();
        return "v=0\r\no=" + (p || 'thisisadapterortc') + ' ' + c + ' ' + o + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
    }, t.getDirection = function(s, n) {
        const p = t.splitLines(s);
        for (let t = 0; t < p.length; t++) switch (p[t]) {
            case 'a=sendrecv':
            case 'a=sendonly':
            case 'a=recvonly':
            case 'a=inactive':
                return p[t].substr(2)
        }
        return n ? t.getDirection(n) : 'sendrecv'
    }, t.getKind = function(s) {
        return t.splitLines(s)[0].split(' ')[0].substr(2)
    }, t.isRejected = function(t) {
        return '0' === t.split(' ', 2)[1]
    }, t.parseMLine = function(s) {
        const n = t.splitLines(s)[0].substr(2).split(' ');
        return {
            kind: n[0],
            port: parseInt(n[1], 10),
            protocol: n[2],
            fmt: n.slice(3).join(' ')
        }
    }, t.parseOLine = function(s) {
        const n = t.matchPrefix(s, 'o=')[0].substr(2).split(' ');
        return {
            username: n[0],
            sessionId: n[1],
            sessionVersion: parseInt(n[2], 10),
            netType: n[3],
            addressType: n[4],
            address: n[5]
        }
    }, t.isValidSDP = function(s) {
        if ('string' != typeof s || 0 === s.length) return !1;
        const n = t.splitLines(s);
        for (let t = 0; t < n.length; t++)
            if (n[t].length < 2 || '=' !== n[t].charAt(1)) return !1;
        return !0
    }, 'object' == typeof m && (m.exports = t)
}), "24a625", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var c = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const t = (0, c(r(d[1])).default)({
        svgContents: "<g stroke=\"none\"><circle cx=\"24\" cy=\"24\" fill-opacity=\".2\" r=\"18\" /><path d=\"m24 2c12.1502645 0 22 9.8497355 22 22s-9.8497355 22-22 22-22-9.8497355-22-22 9.8497355-22 22-22zm0 10.755102c-4.4550714 0-8.0612245 3.5581077-8.0612245 7.9405002 0 3.0932633 1.8127788 5.848834 4.5565293 7.1525343l.0007337 2.3964181c-4.6512463.9521428-8.5673347 3.7458611-10.9891137 7.5373982 3.6439185 3.8307355 8.7897036 6.2180472 14.4930752 6.2180472s10.8491567-2.3873117 14.4925887-6.2171686c-2.47885-3.8817899-6.5223577-6.7164018-11.3169449-7.6012776l-.6520928-.1104518v-1.831l.1469225-.0497917c3.028898-1.0471113 5.147972-3.7756479 5.3712292-6.9399094l.0147541-.2802986.0047677-.2745001c0-4.3823925-3.6061531-7.9405002-8.0612245-7.9405002zm0-8.755102c-11.045695 0-20 8.954305-20 20 0 4.5942511 1.54908498 8.826694 4.15342926 12.203503 2.29264344-3.3492652 5.65048374-5.9447526 9.62640304-7.2920281l.3751677-.1234749-.2191852-.1586361c-2.3011672-1.7181871-3.7970862-4.3729512-3.9784391-7.3265595l-.0143772-.3175725-.004223-.2896297c0-5.4930113 4.5075437-9.9405002 10.0612245-9.9405002s10.0612245 4.4474889 10.0612245 9.9405002c0 3.0845782-1.4346891 5.8977164-3.7456129 7.740314l-.2509265.1936755-.2216851.1594083.3724469.1215003c3.9777393 1.3463522 7.3372272 3.942227 9.6307998 7.2920541 2.6046683-3.3758604 4.1537533-7.6083033 4.1537533-12.2025544 0-11.045695-8.954305-20-20-20z\" /></g>",
        svgProps: {
            viewBox: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg"
        }
    }, 'IcFeatureIdentity48', {
        defaultSize: 48
    });
    e.default = t
}), "2819f4", ["ba7a76", "6a9266"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const v = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M15 2a1 1 0 0 1 1 .88V13a1 1 0 0 1-.88 1H1a1 1 0 0 1-1-.88V3a1 1 0 0 1 .88-1H1zM4.5 5a1.5 1.5 0 0 0-.63 2.86l.13.05v.14a2.5 2.5 0 0 0-2 2.45c0 .25.18.45.41.5H6.5a.5.5 0 0 0 .5-.41v-.26a2.5 2.5 0 0 0-1.83-2.24L5 8.05v-.14A1.5 1.5 0 0 0 4.5 5zM14 9H9v2h5zm0-4H9v2h5z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16"
        }
    }, 'IcCompactIdCard16', {
        defaultSize: 16
    });
    e.default = v
}), "2d52b7", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var s = (function(s) {
        return s.GOOD = "good", s.WEAK = "weak", s.STRONG = "strong", s.INVALID = "invalid", s
    })(s || {});
    e.default = (function() {
        const n = /\d.*?\d.*?\d/,
            t = /[!@#$%^&*?_~].*?[!@#$%^&*?_~]/,
            o = /([a-z].*[A-Z])|([A-Z].*[a-z])/,
            c = /[!@#$%^&*?_~]/,
            l = /.*\W.*/,
            h = /.*\d.*/;

        function u() {
            this.username = void 0, this.password = void 0, this.score = 0, this.status = void 0
        }
        return u.fn = u.prototype, u.fn.test = function() {
            let s;
            return this.score = 0, s = 0, this.containInvalidMatches() || this.usesCommonWord() || this.containNoSpecialCharacter() ? this.status = 'invalid' : (s += this.scoreFor('password_size'), s += this.scoreFor('numbers'), s += this.scoreFor('symbols'), s += this.scoreFor('uppercase_lowercase'), s += this.scoreFor('numbers_chars'), s += this.scoreFor('numbers_symbols'), s += this.scoreFor('symbols_chars'), s += this.scoreFor('only_chars'), s += this.scoreFor('only_numbers'), s += this.scoreFor('username'), s += this.scoreFor('sequences'), s += this.scoreFor('repetitions'), s < 0 && (s = 0), s > 100 && (s = 100), s < 35 && (this.status = 'weak'), s >= 35 && s < 70 && (this.status = 'good'), s >= 70 && (this.status = 'strong')), this.score = s, this.score
        }, u.fn.scoreFor = function(s) {
            let l = 0;
            switch (s) {
                case 'password_size':
                    l = this.password.length < 6 ? -100 : 4 * this.password.length;
                    break;
                case 'numbers':
                    this.password.match(n) && (l = 5);
                    break;
                case 'symbols':
                    this.password.match(t) && (l = 5);
                    break;
                case 'uppercase_lowercase':
                    this.password.match(o) && (l = 10);
                    break;
                case 'numbers_chars':
                    this.password.match(/[a-z]/i) && this.password.match(/[0-9]/) && (l = 15);
                    break;
                case 'numbers_symbols':
                    this.password.match(/[0-9]/) && this.password.match(c) && (l = 15);
                    break;
                case 'symbols_chars':
                    this.password.match(/[a-z]/i) && this.password.match(c) && (l = 15);
                    break;
                case 'only_chars':
                    this.password.match(/^[a-z]+$/i) && (l = -15);
                    break;
                case 'only_numbers':
                    this.password.match(/^\d+$/i) && (l = -15);
                    break;
                case 'username':
                    this.password === this.username ? l = -100 : this.password.includes(this.username) && (l = -15);
                    break;
                case 'sequences':
                    l += -15 * this.sequences(this.password), l += -15 * this.sequences(this.reversed(this.password));
                    break;
                case 'repetitions':
                    l += -4 * this.repetitions(this.password, 2), l += -3 * this.repetitions(this.password, 3), l += -2 * this.repetitions(this.password, 4)
            }
            return l
        }, u.fn.isGood = function() {
            return this.status === s.GOOD
        }, u.fn.isWeak = function() {
            return this.status === s.WEAK
        }, u.fn.isStrong = function() {
            return this.status === s.STRONG
        }, u.fn.isInvalid = function() {
            return this.status === s.INVALID
        }, u.fn.isValid = function(n) {
            return n === s.STRONG ? this.isStrong() : n === s.GOOD ? this.isStrong() || this.isGood() : !this.containInvalidMatches() && !this.usesCommonWord()
        }, u.fn.containInvalidMatches = function() {
            return !!this.exclude && (!!this.exclude.test && this.exclude.test(String(this.password)))
        }, u.fn.usesCommonWord = function() {
            return u.commonWords.includes(this.password.toLowerCase())
        }, u.fn.sequences = function(s) {
            let n = 0,
                t = 0;
            const o = [],
                c = s.length;
            let l, h;
            for (let u = 0; u < c; u += 1) h = s.charCodeAt(u), l = o[o.length - 1], o.push(h), l && (h === l + 1 || l === h ? t += 1 : t = 0), 2 === t && (n += 1);
            return n
        }, u.fn.repetitions = function(s, n) {
            let t = 0;
            const o = {},
                c = s.length;
            let l, h, u;
            for (let p = 0; p < c; p += 1)
                if (l = s.slice(p, n), h = 0, u = s, !(o[l] || l.length < n)) {
                    for (o[l] = !0; - 1 !== (p = u.indexOf(l));) h += 1, u = u.slice(p + 1);
                    h > 1 && (t += 1)
                }
            return t
        }, u.fn.reversed = function(s) {
            let n = '';
            for (let t = s.length - 1; t >= 0; t -= 1) n += s.charAt(t);
            return n
        }, u.fn.containNoSpecialCharacter = function() {
            return !this.password.match(h) && !this.password.match(l)
        }, u.test = function(s, n) {
            const t = new u;
            return t.username = s, t.password = n, t.test(), t
        }, u.commonWords = ['!qaz1qaz', '!qaz2wsx', '!qazxsw2', '!qazzaq1', '#edc4rfv', '123qweasd', '12qw!@qw', '1941.salembbb.41', '1a2b3c4d', '1q2w3e4r', '1qaz!qaz', '1qaz@wsx', '1qazxsw2', '1qazxsw@', '1qazzaq!', '2wsx@wsx', '3edc#edc', '@wsx2wsx', 'a1b2c3d4', 'aaliyah1', 'abigail1', 'access14', 'addison1', 'adobe123', 'airforce1', 'alabama1', 'alexander1', 'alexandra1', 'allison1', 'america1', 'anderson1', 'angel101', 'angel123', 'angelina1', 'annabelle1', 'anthony1', 'anthony11', 'antonio1', 'arianna1', 'arsenal1', 'arsenal12', 'arsenal123', 'ashley12', 'asshole1', 'atlanta1', 'august08', 'august10', 'august12', 'august20', 'august22', 'austin02', 'austin316', 'australia1', 'awesome1', 'babyboy1', 'babygirl1', 'babygurl1', 'bailey12', 'barcelona1', 'baseball1', 'batista1', 'beautiful1', 'beckham7', 'bella123', 'benjamin1', 'bentley1', 'bethany1', 'bigdaddy1', 'blessed1', 'blink-182', 'blink182', 'blondie1', 'boricua1', 'bradley1', 'brandon1', 'brandon2', 'brandon7', 'braxton1', 'brayden1', 'breanna1', 'brianna1', 'brittany1', 'brittney1', 'broncos1', 'brooklyn1', 'brownie1', 'bubbles1', 'buddy123', 'buttercup1', 'butterfly1', 'butterfly7', 'cameron1', 'candy123', 'carolina1', 'cassandra1', 'catherine1', 'chargers1', 'charles1', 'charlie1', 'charlotte1', 'charmed1', 'chelsea1', 'chelsea123', 'chester1', 'cheyenne1', 'chicago1', 'chicken1', 'chocolate1', 'chris123', 'christian1', 'christina1', 'christine1', 'christmas1', 'classof08', 'clayton1', 'college1', 'colombia1', 'colorado1', 'computer1', 'courtney1', 'cowboys1', 'cricket1', 'crystal1', 'cutiepie1', 'daisy123', 'dallas22', 'dan1elle', 'daniela1', 'danielle1', 'david123', 'december1', 'december21', 'derrick1', 'destiny1', 'diamond1', 'diamonds1', 'dolphin1', 'dolphins1', 'dominic1', 'douglas1', 'elizabeth1', 'elizabeth2', 'england1', 'falcons1', 'falcons7', 'florida1', 'football1', 'forever1', 'forever21', 'formula1', 'frankie1', 'friday13', 'friends1', 'friends2', 'fuckoff1', 'fuckyou1', 'fuckyou2', 'gabriel1', 'gangsta1', 'garrett1', 'gateway1', 'genesis1', 'georgia1', 'gerrard8', 'giggles1', 'godislove1', 'gordon24', 'grandma1', 'greenday1', 'harry123', 'hawaii50', 'heather1', 'hello123', 'hershey1', 'holiday1', 'hollywood1', 'honey123', 'houston1', 'hunter01', 'iloveme1', 'iloveme2', 'iloveyou1', 'iloveyou2', 'internet1', 'inuyasha1', 'ireland1', 'isabella1', 'isabelle1', 'iverson3', 'iydgtvmujl6f', 'jackson1', 'jackson5', 'jamaica1', 'james123', 'january1', 'january29', 'jasmine1', 'jazmine1', 'jehovah1', 'jennifer1', 'jennifer2', 'jeremiah1', 'jessica1', 'jessica7', 'jesus123', 'jesus143', 'jesus1st', 'jesus4me', 'jesusis#1', 'jesusis1', 'john3:16', 'johncena1', 'jonathan1', 'jordan01', 'jordan12', 'jordan23', 'joshua01', 'justice1', 'justin01', 'justin11', 'justin21', 'justin23', 'katelyn1', 'katherine1', 'kathryn1', 'katrina1', 'kendall1', 'kennedy1', 'kenneth1', 'kimberly1', 'kristen1', 'kristin1', 'l6fkiy9on', 'ladybug1', 'lakers24', 'lampard8', 'laura123', 'lebron23', 'letmein1', 'liberty1', 'lindsay1', 'lindsey1', 'liverp00l', 'liverpool1', 'liverpool123', 'longhorns1', 'love4ever', 'loveyou2', 'lucky123', 'm1chelle', 'mackenzie1', 'madison01', 'madison1', 'makayla1', 'marie123', 'marines1', 'marissa1', 'marshall1', 'matthew1', 'matthew2', 'matthew3', 'maxwell1', 'melanie1', 'melissa1', 'mercedes1', 'metallica1', 'michael01', 'michael07', 'michael1', 'michael2', 'michael7', 'micheal1', 'michele1', 'michelle1', 'michelle2', 'midnight1', 'miranda1', 'molly123', 'monique1', 'monkey01', 'monkey12', 'monkey13', 'monkeys1', 'monster1', 'montana1', 'music123', 'mustang1', 'myspace1', 'natalie1', 'natasha1', 'nathan06', 'newyork1', 'nicholas1', 'nichole1', 'nicole12', 'nirvana1', 'november1', 'november11', 'november15', 'november16', 'nursing1', 'october1', 'october13', 'october22', 'omarion1', 'orlando1', 'p4ssword', 'p@$$w0rd', 'p@55w0rd', 'p@ssw0rd', 'pa$$w0rd', 'pa55w0rd', 'pa55word', 'panther1', 'panthers1', 'pass1234', 'passion1', 'passw0rd', 'passw0rd1', 'password01', 'password1', 'password1!', 'password11', 'password12', 'password123', 'password13', 'password2', 'password21', 'password3', 'password4', 'password5', 'password7', 'password9', 'patches1', 'patricia1', 'patrick1', 'peaches1', 'peanut01', 'peanut11', 'pebbles1', 'penguin1', 'phantom1', 'phoenix1', 'pickles1', 'playboy1', 'pokemon1', 'poohbear1', 'popcorn1', 'pr1nc3ss', 'pr1ncess', 'precious1', 'preston1', 'princess01', 'princess07', 'princess08', 'princess1', 'princess12', 'princess123', 'princess13', 'princess15', 'princess18', 'princess19', 'princess2', 'princess21', 'princess23', 'princess24', 'princess4', 'princess5', 'princess7', 'prototype1', 'pumpkin1', 'qwerty123', 'raiders1', 'rainbow1', 'rangers1', 'raymond1', 'rebecca1', 'rebelde1', 'redskins1', 'ricardo1', 'richard1', 'robert01', 'rockstar1', 'rocky123', 'rockyou1', 'ronaldo7', 'russell1', 'rusty123', 'sabrina1', 'sail2boat3', 'samantha1', 'santana1', 'savannah1', 'scooter1', 'scorpio1', 'scotland1', 'scrappy1', 'sebastian1', 'senior06', 'senior07', 'september1', 'serenity1', 'shopping1', 'skittles1', 'slipknot1', 'smokey01', 'snickers1', 'snowball1', 'soccer11', 'soccer12', 'soccer13', 'soccer14', 'soccer17', 'softball1', 'spartan117', 'special1', 'spencer1', 'spiderman1', 'spongebob1', 'start123', 'starwars1', 'steelers1', 'stephanie1', 'stephen1', 'summer01', 'summer05', 'summer06', 'summer07', 'summer08', 'summer99', 'sunshine1', 'superman1', 'superstar1', 'sweetie1', 'sweetpea1', 'taylor13', 'tbfkiy9on', 'teddybear1', 'testing1', 'thesims2', 'thirteen13', 'thumper1', 'thunder1', 'tiffany1', 'tiger123', 'tigger01', 'tigger12', 'tigger123', 'timothy1', 'tinkerbell1', 'titanic1', 'trinity1', 'trinity3', 'tristan1', 'trouble1', 'trustno1', 'twilight1', 'unicorn1', 'valerie1', 'vampire1', 'vanessa1', 'vanilla1', 'veronica1', 'victoria1', 'vincent1', 'welcome1', 'welcome123', 'welcome2', 'whatever1', 'whitney1', 'william1', 'winston1', 'winter06', 'yankees1', 'yankees2', 'z,iyd86i', 'zachary1', 'zaq!1qaz', 'zaq!2wsx', 'zaq!xsw2', 'zaq1!qaz', 'zaq12wsx', 'zaq1@wsx', 'zaq1zaq!'], u
    })()
}), "2df7ad", []);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.IdentitySemanticEvent = {
        defaultProps: {
            schema: 'com.airbnb.jitney.event.logging.Identity:IdentitySemanticEvent:1.0.0',
            event_name: 'identity_semantic'
        },
        propTypes: {}
    };
    e.IdentitySemanticEventEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "319525", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ConsentToggleKey = void 0;
    e.ConsentToggleKey = (function(t) {
        return t.REVIEW_METHOD_MANUAL = "reviewMethodManual", t.REVIEW_METHOD_AUTOMATED = "reviewMethodAutomated", t
    })({})
}), "31ad2a", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.checkForbiddenContent = w, e.checkMaxLength = v, e.checkMinLength = b, e.checkRequired = V, e.checkValidDate = function(n, t, l) {
        if (!/\d{1,4}-\d{1,2}-\d{1,2}/.test(`${n}-${t}-${l}`)) return !1;
        const u = new Date(n, t - 1, l);
        return 'Invalid Date' !== String(u) && u.getMonth() + 1 === parseInt(t, 10)
    }, e.checkValidEmail = _, e.checkValidName = p, e.checkValidPreferredName = k, e.getValidationErrorsToLog = function(n, t) {
        const u = (s = (0, l.default)(n, (n => 0 === n.length)), c = n => n[0], Object.entries(s).reduce(((n, [t, l]) => ({ ...n,
            [t]: c(l)
        })), {}));
        var s, c;
        let o = u;
        t && (o = f(u, t));
        return o
    }, e.validateForm = function(n, t) {
        const l = c.validationRules[n] || {},
            u = {};
        return Object.entries(t).forEach((([n, s]) => {
            if ('password_confirmation' === n) return void(u[n] = []);
            let c = l[n] || [];
            'string' == typeof c && (c = {
                [c]: !0
            });
            const o = Object.entries(c).map((([l, u]) => $({
                valueName: n,
                value: s,
                ruleName: l,
                ruleValue: u,
                allValues: t
            }))).filter(Boolean);
            u[n] = o
        })), u
    };
    var t = n(r(d[1])),
        l = n(r(d[2])),
        u = n(r(d[3])),
        s = r(d[4]),
        c = r(d[5]),
        o = n(r(d[6]));

    function f(n, t) {
        return Object.entries(n).reduce(((n, [l, u]) => ({ ...n,
            [t(l)]: u
        })), {})
    }

    function h(n, l) {
        const u = (0, c.localizedMessages)();
        if (u && 'first_name' === n && 'checkValidName' === l) return t.default.t('user.first_name_invalid');
        if (u && 'last_name' === n && 'checkValidName' === l) return t.default.t('user.last_name_invalid');
        if (u && u[n]) {
            return u[n][l] || null
        }
        return null
    }

    function N(n, t = "") {
        if (null === n) return !0;
        if (!/^[0-9 ().,+-]*$/.test(n)) return !1;
        const l = n.replace(/\D/g, '');
        return ('86CN' !== t || 11 === l.length) && l.length >= 6
    }

    function _(n) {
        return /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-][a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(n)
    }

    function p(n) {
        return /^(\p{L}[\p{Zs},.'\u2019-]?)*$/gu.test(n)
    }

    function k(n) {
        return !(!n || n.length < 1) && (/^(?!.*[,.'\u2019&:()#@/|-]{2}).*$/gu.test(n) && /^(?!.*\p{Zs}{2}).*$/gu.test(n) && /^(?=.*\p{L}).*$/gu.test(n) && /^([\p{L}\p{N},.'\u2019&:()#@/|-]+\p{Zs}?)+$/gu.test(n))
    }

    function C(n, t) {
        return 'string' == typeof n && t(n.length)
    }

    function v(n, t) {
        return C(n, (n => n <= t))
    }

    function b(n, t) {
        return C(n, (n => n >= t))
    }

    function V(n) {
        return C(n, (n => n > 0))
    }

    function w({
        password: n,
        email: t,
        firstName: l,
        firstNamePreferred: u,
        lastName: s,
        phoneNumber: c
    }) {
        if (null === n) return !0;
        const o = n.toLowerCase();
        return !(s && o.includes(s.toLowerCase()) || l && o.includes(l.toLowerCase()) || u && o.includes(u.toLowerCase()) || c && o.includes(c.toLowerCase()) || t && o.includes(t.split('@')[0].toLowerCase()))
    }

    function L(n) {
        return o.default.test(null, n).score >= 35
    }

    function $({
        valueName: n,
        value: t,
        ruleName: l,
        ruleValue: c,
        allValues: o
    }) {
        const f = h(n, l);
        if (!f) return null;
        switch (l) {
            case 'required':
                return V(t) ? null : f;
            case 'minlength':
                return b(t, c) ? null : f;
            case 'maxlength':
                return v(t, c) ? null : f;
            case 'email':
                return _(t) ? null : f;
            case 'strengthCheck':
                return L(t) ? null : f;
            case 'checkValidPhoneNumber':
                {
                    const {
                        country_code: n
                    } = o;
                    return N(t, n) ? null : f
                }
            case 'forbiddenContentCheck':
                {
                    const {
                        email: n,
                        first_name: l,
                        first_name_preferred: u,
                        last_name: s
                    } = o;
                    return w({
                        password: t,
                        email: n,
                        firstName: l,
                        firstNamePreferred: u,
                        lastName: s
                    }) ? null : f
                }
            case 'forbiddenContentCheckPhone':
                {
                    const {
                        first_name: n,
                        first_name_preferred: l,
                        last_name: u,
                        national_number: s
                    } = o;
                    return w({
                        password: t,
                        firstName: n,
                        firstNamePreferred: l,
                        lastName: u,
                        phoneNumber: s
                    }) ? null : f
                }
            case 'forbiddenNameCheck':
                {
                    const {
                        first_name: n,
                        first_name_preferred: l,
                        last_name: u
                    } = o;
                    return w({
                        password: t,
                        firstName: n,
                        firstNamePreferred: l,
                        lastName: u
                    }) ? null : f
                }
            case 'checkValidName':
                return p(t) ? null : f;
            case 'checkValidPreferredName':
                return k(t) ? null : f;
            case 'agreedToCollectionOfPersonalInformation':
            case 'agreedToOverseasTransferOfPersonalData':
                return (0, u.default)() ? t === c ? null : f : null;
            case 'agreedToChinaMandatoryTOS':
                return (0, s.chinaMainlandGuestEnabled)() ? t === c ? null : f : null;
            default:
                return null
        }
    }
}), "3c3783", ["ba7a76", "a9f4b1", "b1850f", "0234b8", "7c1173", "91ea05", "2df7ad"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.shimGetUserMedia = function(t, n) {
        const s = t && t.navigator,
            p = t && t.MediaStreamTrack;
        if (s.getUserMedia = function(t, n, p) {
                o.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia'), s.mediaDevices.getUserMedia(t).then(n, p)
            }, !(n.version > 55 && 'autoGainControl' in s.mediaDevices.getSupportedConstraints())) {
            const t = function(t, o, n) {
                    o in t && !(n in t) && (t[n] = t[o], delete t[o])
                },
                o = s.mediaDevices.getUserMedia.bind(s.mediaDevices);
            if (s.mediaDevices.getUserMedia = function(n) {
                    return 'object' == typeof n && 'object' == typeof n.audio && (n = JSON.parse(JSON.stringify(n)), t(n.audio, 'autoGainControl', 'mozAutoGainControl'), t(n.audio, 'noiseSuppression', 'mozNoiseSuppression')), o(n)
                }, p && p.prototype.getSettings) {
                const o = p.prototype.getSettings;
                p.prototype.getSettings = function() {
                    const n = o.apply(this, arguments);
                    return t(n, 'mozAutoGainControl', 'autoGainControl'), t(n, 'mozNoiseSuppression', 'noiseSuppression'), n
                }
            }
            if (p && p.prototype.applyConstraints) {
                const o = p.prototype.applyConstraints;
                p.prototype.applyConstraints = function(n) {
                    return 'audio' === this.kind && 'object' == typeof n && (n = JSON.parse(JSON.stringify(n)), t(n, 'autoGainControl', 'mozAutoGainControl'), t(n, 'noiseSuppression', 'mozNoiseSuppression')), o.apply(this, [n])
                }
            }
        }
    };
    var o = t(r(d[1]))
}), "3f225c", ["45f788", "9cdad4"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.shimAudioContext = function(t) {
        if (t.AudioContext) return;
        t.AudioContext = t.webkitAudioContext
    }, e.shimCallbacksAPI = function(t) {
        if (!t.RTCPeerConnection) return;
        const o = t.RTCPeerConnection.prototype,
            n = o.createOffer,
            s = o.createAnswer,
            c = o.setLocalDescription,
            l = o.setRemoteDescription,
            f = o.addIceCandidate;
        o.createOffer = function(t, o) {
            const s = arguments.length >= 2 ? arguments[2] : arguments[0],
                c = n.apply(this, [s]);
            return o ? (c.then(t, o), Promise.resolve()) : c
        }, o.createAnswer = function(t, o) {
            const n = arguments.length >= 2 ? arguments[2] : arguments[0],
                c = s.apply(this, [n]);
            return o ? (c.then(t, o), Promise.resolve()) : c
        };
        let p = function(t, o, n) {
            const s = c.apply(this, [t]);
            return n ? (s.then(o, n), Promise.resolve()) : s
        };
        o.setLocalDescription = p, p = function(t, o, n) {
            const s = l.apply(this, [t]);
            return n ? (s.then(o, n), Promise.resolve()) : s
        }, o.setRemoteDescription = p, p = function(t, o, n) {
            const s = f.apply(this, [t]);
            return n ? (s.then(o, n), Promise.resolve()) : s
        }, o.addIceCandidate = p
    }, e.shimConstraints = n, e.shimCreateOfferLegacy = function(t) {
        const o = t.RTCPeerConnection.prototype.createOffer;
        t.RTCPeerConnection.prototype.createOffer = function(t) {
            if (t) {
                void 0 !== t.offerToReceiveAudio && (t.offerToReceiveAudio = !!t.offerToReceiveAudio);
                const o = this.getTransceivers().find((t => 'audio' === t.receiver.track.kind));
                !1 === t.offerToReceiveAudio && o ? 'sendrecv' === o.direction ? o.setDirection ? o.setDirection('sendonly') : o.direction = 'sendonly' : 'recvonly' === o.direction && (o.setDirection ? o.setDirection('inactive') : o.direction = 'inactive') : !0 !== t.offerToReceiveAudio || o || this.addTransceiver('audio', {
                    direction: 'recvonly'
                }), void 0 !== t.offerToReceiveVideo && (t.offerToReceiveVideo = !!t.offerToReceiveVideo);
                const n = this.getTransceivers().find((t => 'video' === t.receiver.track.kind));
                !1 === t.offerToReceiveVideo && n ? 'sendrecv' === n.direction ? n.setDirection ? n.setDirection('sendonly') : n.direction = 'sendonly' : 'recvonly' === n.direction && (n.setDirection ? n.setDirection('inactive') : n.direction = 'inactive') : !0 !== t.offerToReceiveVideo || n || this.addTransceiver('video', {
                    direction: 'recvonly'
                })
            }
            return o.apply(this, arguments)
        }
    }, e.shimGetUserMedia = function(t) {
        const o = t && t.navigator;
        if (o.mediaDevices && o.mediaDevices.getUserMedia) {
            const t = o.mediaDevices,
                s = t.getUserMedia.bind(t);
            o.mediaDevices.getUserMedia = t => s(n(t))
        }!o.getUserMedia && o.mediaDevices && o.mediaDevices.getUserMedia && (o.getUserMedia = function(t, n, s) {
            o.mediaDevices.getUserMedia(t).then(n, s)
        }.bind(o))
    }, e.shimLocalStreamsAPI = function(t) {
        if (!t.RTCPeerConnection) return;
        'getLocalStreams' in t.RTCPeerConnection.prototype || (t.RTCPeerConnection.prototype.getLocalStreams = function() {
            return this._localStreams || (this._localStreams = []), this._localStreams
        });
        if (!('addStream' in t.RTCPeerConnection.prototype)) {
            const o = t.RTCPeerConnection.prototype.addTrack;
            t.RTCPeerConnection.prototype.addStream = function(t) {
                this._localStreams || (this._localStreams = []), this._localStreams.includes(t) || this._localStreams.push(t), t.getAudioTracks().forEach((n => o.call(this, n, t))), t.getVideoTracks().forEach((n => o.call(this, n, t)))
            }, t.RTCPeerConnection.prototype.addTrack = function(t, ...n) {
                return n && n.forEach((t => {
                    this._localStreams ? this._localStreams.includes(t) || this._localStreams.push(t) : this._localStreams = [t]
                })), o.apply(this, arguments)
            }
        }
        'removeStream' in t.RTCPeerConnection.prototype || (t.RTCPeerConnection.prototype.removeStream = function(t) {
            this._localStreams || (this._localStreams = []);
            const o = this._localStreams.indexOf(t);
            if (-1 === o) return;
            this._localStreams.splice(o, 1);
            const n = t.getTracks();
            this.getSenders().forEach((t => {
                n.includes(t.track) && this.removeTrack(t)
            }))
        })
    }, e.shimRTCIceServerUrls = function(t) {
        if (!t.RTCPeerConnection) return;
        const n = t.RTCPeerConnection;
        t.RTCPeerConnection = function(t, s) {
            if (t && t.iceServers) {
                const n = [];
                for (let s = 0; s < t.iceServers.length; s++) {
                    let c = t.iceServers[s];
                    !c.hasOwnProperty('urls') && c.hasOwnProperty('url') ? (o.deprecated('RTCIceServer.url', 'RTCIceServer.urls'), c = JSON.parse(JSON.stringify(c)), c.urls = c.url, delete c.url, n.push(c)) : n.push(t.iceServers[s])
                }
                t.iceServers = n
            }
            return new n(t, s)
        }, t.RTCPeerConnection.prototype = n.prototype, 'generateCertificate' in n && Object.defineProperty(t.RTCPeerConnection, 'generateCertificate', {
            get: () => n.generateCertificate
        })
    }, e.shimRemoteStreamsAPI = function(t) {
        if (!t.RTCPeerConnection) return;
        'getRemoteStreams' in t.RTCPeerConnection.prototype || (t.RTCPeerConnection.prototype.getRemoteStreams = function() {
            return this._remoteStreams ? this._remoteStreams : []
        });
        if (!('onaddstream' in t.RTCPeerConnection.prototype)) {
            Object.defineProperty(t.RTCPeerConnection.prototype, 'onaddstream', {
                get() {
                    return this._onaddstream
                },
                set(t) {
                    this._onaddstream && (this.removeEventListener('addstream', this._onaddstream), this.removeEventListener('track', this._onaddstreampoly)), this.addEventListener('addstream', this._onaddstream = t), this.addEventListener('track', this._onaddstreampoly = t => {
                        t.streams.forEach((t => {
                            if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(t)) return;
                            this._remoteStreams.push(t);
                            const o = new Event('addstream');
                            o.stream = t, this.dispatchEvent(o)
                        }))
                    })
                }
            });
            const o = t.RTCPeerConnection.prototype.setRemoteDescription;
            t.RTCPeerConnection.prototype.setRemoteDescription = function() {
                const t = this;
                return this._onaddstreampoly || this.addEventListener('track', this._onaddstreampoly = function(o) {
                    o.streams.forEach((o => {
                        if (t._remoteStreams || (t._remoteStreams = []), t._remoteStreams.indexOf(o) >= 0) return;
                        t._remoteStreams.push(o);
                        const n = new Event('addstream');
                        n.stream = o, t.dispatchEvent(n)
                    }))
                }), o.apply(t, arguments)
            }
        }
    }, e.shimTrackEventTransceiver = function(t) {
        t.RTCTrackEvent && 'receiver' in t.RTCTrackEvent.prototype && !('transceiver' in t.RTCTrackEvent.prototype) && Object.defineProperty(t.RTCTrackEvent.prototype, 'transceiver', {
            get() {
                return {
                    receiver: this.receiver
                }
            }
        })
    };
    var o = t(r(d[1]));

    function n(t) {
        return t && void 0 !== t.video ? Object.assign({}, t, {
            video: o.compactObject(t.video)
        }) : t
    }
}), "457948", ["45f788", "9cdad4"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function n() {
        const s = t(r(d[1]));
        return n = function() {
            return s
        }, s
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var s = t(r(d[2])),
        o = r(d[3]),
        l = r(d[4]),
        c = t(r(d[5])),
        h = r(d[6]),
        u = t(r(d[7])),
        _ = t(r(d[8])),
        p = r(d[9]);
    const f = ['43896654', '43889068', '43889132', '43889200'],
        k = ['15514385', '15514848', '34243667', '41113945'];
    e.default = class {
        constructor(t = "no_feature_specified", n = {}, o = () => {}) {
            if (this.branchMetadata = void 0, this.deepLinkUrl = void 0, this.feature = void 0, this.hasApp = void 0, this.feature = t, this.branchMetadata = n, (0, h.isWechatBrowser)() || (0, h.isQQAppBrowser)()) this.deepLinkUrl = this.addAttributionParams(this.getWeChatLink()), o(this.deepLinkUrl, null);
            else if (this.isChinaAndAndroid()) {
                const t = this.getChinaAndroidLink();
                this.deepLinkUrl = this.addAttributionParams(t, 'CN' !== s.default.country()), o(this.deepLinkUrl, null)
            } else if ((0, h.isIos)() || (0, h.isAndroid)()) {
                const s = this.getBranchConfig(n);
                this.deepLinkUrl = this.addAttributionParams(this.getBranchLink()), (0, _.default)(), n.autoOpen && n.data && n.data.$deeplink_path && window.branch.deepview(s);
                const l = new Promise(((n, s) => {
                    window.branch.init("key_live_acoLMx3FlYwpho29ntf7vjnkEwjEoClF", ((o, l) => {
                        o ? (this.logDeeplinkEvent(!1, 'branch_init', t, o), s(o)) : (this.hasApp = l.has_app, this.logDeeplinkEvent(!0, 'branch_init', t), n(this.hasApp))
                    }))
                })).then((n => new Promise(((o, l) => {
                    window.branch.link(s, ((s, c) => {
                        s ? (this.logDeeplinkEvent(!1, 'branch_link', t, s), l(s)) : (this.deepLinkUrl = c, this.logDeeplinkEvent(!0, 'branch_link', t), o([c, n]))
                    }))
                })))).then((([t, n]) => {
                    o(t, n)
                })).catch((n => {
                    this.logPromiseError(n, 'branch_promise', t)
                }));
                Promise.resolve(l)
            }
        }
        track() {
            const t = {
                event_name: 'deep_link',
                event_data: {
                    sub_event: this.feature,
                    operation: 'click',
                    track_type: 'queued',
                    platform: (0, h.isIos)() ? 'ios_web' : 'android_web',
                    ...this.branchMetadata
                }
            };
            c.default.queueEvent(t), t.event_data.track_type = 'timeout', setTimeout((() => {
                c.default.logEvent(t)
            }), 1e3)
        }
        logDeeplinkEvent(t, n, s, o) {
            c.default.logEvent({
                event_name: 'deep_link',
                event_data: {
                    project: 'deeplink_events',
                    operation: n,
                    feature: s,
                    message: o,
                    datadog_key: 'deeplink_call_back',
                    datadog_tags: [`feature:${s}`, `operation:${n}`, `success:${t}`]
                }
            })
        }
        logPromiseError(t, n, s) {
            c.default.logEvent({
                event_name: 'deeplink_promise',
                event_data: {
                    project: 'deeplink_promise_events',
                    message: t,
                    operation: n,
                    feature: s,
                    datadog_key: 'deeplink_promise_error',
                    datadog_tags: [`feature:${s}`, `operation:${n}`]
                }
            })
        }
        getBranchLink() {
            return p.DEFAULT_APP_LINK
        }
        getWeChatLink() {
            return p.WECHAT_LINK
        }
        isChinaAndAndroid() {
            return (0, h.isAndroid)() && 'CN' === s.default.country()
        }
        getChinaAndroidLink() {
            return f.includes((0, u.default)().af) ? p.CHINA_SEM_BRAND_LINK : k.includes((0, u.default)().af) ? p.CHINA_SEM_NONBRAND_LINK : 'https://abnb.me/direct_aliyun'
        }
        addAttributionParams(t, s) {
            let o;
            const l = n().default.stringify(this.getStandardMetadata());
            return s ? t + encodeURIComponent(`&${l}`) : (o = t.includes('?') ? `${t}&${l}` : `${t}?${l}`, o)
        }
        getStandardMetadata() {
            const t = {
                    af: (0, o.getCookieSync)('affiliate').value,
                    c: (0, o.getCookieSync)('campaign').value,
                    bev: this.branchMetadata.bev || (0, l.getBev)(),
                    current_url: window.location.href,
                    feature: this.feature
                },
                n = (0, o.getCookieSync)('last_aacb').value;
            return n && (t.local_af_click = n), Object.entries(t).reduce(((t, [n, s]) => s ? Object.assign(t, {
                [n]: s
            }) : t), {})
        }
        getBranchConfig(t = {}, n = {}) {
            const s = {
                channel: 'mobile_web',
                feature: this.feature,
                ...t
            };
            return s.data = Object.assign(this.getStandardMetadata(), t.data, n), s
        }
    }
}), "4646ca", ["ba7a76", "e950a3", "862e50", "13babd", "b4aab0", "c8b97a", "e9b7bf", "a7c4ef", "ab7a07", "60cf4e"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.screenIdSelector = e.screenConfigSelector = e.reservationCodeSelector = e.replacedSubtitleSelector = e.redirectUrlSelector = e.primaryForLowQualityImageSelector = e.primaryButtontIconSelector = e.primaryButtonScreenNamesSelector = e.primaryButtonScreenNameSelector = e.primaryButtonActionSelector = e.postTimestampSelector = e.postSuccessSelector = e.postErrorSelector = e.pollingConfigSelector = e.phoneNumberCollectedForHandoffSelector = e.phoneCountryCollectedForHandoffSelector = e.nextScreenNameSelector = e.navigationStackSelector = e.navbarSelector = e.modalVisibleSelector = e.mobileHandoffDeeplinkSelector = e.manualCaptureErrorSelector = e.lowQualityAttemptCountSelector = e.loadingSelector = e.loaderConfigSelector = e.listingIdSelector = e.lifeCycleStageSelector = e.legalNameValuesSelector = e.legalInfoInputValuesSelector = e.legalInfoInputFieldNamesOnServerSelector = e.koreanNameSelector = e.isWebcamCaptureModalVisibleSelector = e.isTreatmentUISelector = e.isTakingPhotoSelector = e.isPostingSelector = e.isLowQualityImageModeSelector = e.isLegalNameModalVisibleSelector = e.isFullPageSelector = e.isFooterPreviousCTADisabled = e.isFooterNextCTADisabled = e.isDismissModalVisibleSelector = e.idTypeTextSelector = e.idNumberSelector = e.helpScreenNameSelector = e.helpLinkSelector = e.helpLinkButtonSelector = e.headerIconSelector = e.govIdOptionPrimaryActionSelector = e.govIdOptionNextScreenNameSelector = e.govIdFrontFaceBoxSelector = e.getScreenTypeByScreenName = e.getScreenConfigByScreenName = e.getIsCameraLive = e.getImageDataUri = e.getFooterPreviousCTAType = e.getFooterNextCTAType = e.getCameraRef = e.fullNameSelector = e.frontSubmissionKeySelector = e.freezeReasonSelector = e.fovOptionNextScreenNameSelector = e.footerPreviousCTATextSelector = e.footerPreviousCTAIconSelector = e.footerNextCTATextSelector = e.flowVersionSelector = e.flowTypeSelector = e.flowContextSelector = e.flowCompletedSelector = e.firstWebcamCaptureScreenNameSelector = e.failedSelfieSelector = e.exitScreenNameSelector = e.exitScreenActionSelector = e.disableAutoCaptureSelector = e.currentStepSelector = e.currentCaptureStepSelector = e.copySelector = e.copyForLowQualityImageSelector = e.contextSelector = e.consentTermsConfigurationIdSelector = e.confirmLegalNameScreenNameSelector = e.confirmDismissListingScreenNameSelector = e.capturedSelfieSelector = e.capturedFrontImageSelector = e.capturedBackImageSelector = e.captureMethodSelector = e.cameraSelector = e.cameraDimensionsSelector = e.bookingDataSelector = e.bodySelector = e.bodyParagraphsSelector = e.bodyHelpScreenNameSelector = e.bodyHelpLinkSelector = e.bodyHelpLinkButtonSelector = e.blurrinessValueSelector = e.birthDateSelector = e.biometricsOptInSelector = e.backSubmissionKeySelector = e.backButtonActionSelector = e.animationNameSelector = e.additionalTextsHeaderSelector = void 0, e.verifiedSelector = e.uploadedFrontImageSelector = e.uploadedBackImageSelector = e.titleSelector = e.submissionPendingScreenReaderTextSelector = e.ssnInputValuesSelector = e.ssnInputFieldNamesOnServerSelector = e.ssnFieldSelector = e.sidebarConfigSelector = e.showConfirmLegalNameErrorAlertSelector = e.selfieSubmissionKeySelector = e.selectedIdSelector = e.selectedGovIdPlatformSelector = e.selectedFovOptionSelector = e.selectedCountrySelector = e.selectedConsentSelector = e.secondaryForLowQualityImageSelector = e.secondaryButtonScreenNamesSelector = e.secondaryButtonScreenNameSelector = e.secondaryButtonActionSelector = e.screenVersionSelector = e.screenTypeSelector = void 0;
    var o = t(r(d[1])),
        l = t(r(d[2])),
        c = r(d[3]),
        n = r(d[4]),
        S = r(d[5]),
        u = r(d[6]);
    const s = t => t.fov,
        f = t => t.fovGovId,
        p = t => t.fovSSN,
        _ = t => t.fovModal,
        T = t => t.fovLegalInfo,
        y = (e.redirectUrlSelector = (0, o.default)(s, (t => t.redirectUrlOnFinish)), (0, o.default)(s, (t => (0, l.default)(t, ['configs', 'screens'])))),
        N = e.currentStepSelector = (0, o.default)(s, (t => t.currentStep)),
        C = (e.contextSelector = (0, o.default)(s, (t => t.context)), e.flowContextSelector = (0, o.default)(s, (t => t.flowContext)), e.selectedFovOptionSelector = (0, o.default)(s, (t => t.selectedFovOption))),
        I = (e.freezeReasonSelector = (0, o.default)(s, (t => t.freezeReason)), (0, o.default)(s, (t => t.configs))),
        F = (e.flowTypeSelector = (0, o.default)(I, (t => t.flow_type)), e.flowVersionSelector = (0, o.default)(I, (t => t.version)), e.selectedGovIdPlatformSelector = (0, o.default)(f, (t => t.selectedGovIdPlatform))),
        E = e.loadingSelector = (0, o.default)([s, f], ((t, o) => t.loading || o.isPosting || o.isTakingPhoto)),
        A = (e.lifeCycleStageSelector = (0, o.default)(s, (t => t.lifeCycleStage)), e.navigationStackSelector = (0, o.default)(s, (t => t.navigationStack)), e.flowCompletedSelector = (0, o.default)(s, (t => t.flowCompleted)), e.verifiedSelector = (0, o.default)(s, (t => t.verified)), e.bookingDataSelector = (0, o.default)(s, (t => t.bookingData))),
        v = e.biometricsOptInSelector = (0, o.default)(s, (t => t.biometricsOptIn)),
        b = (0, o.default)(s, (t => t.displayBiometricsOptIn)),
        O = (e.reservationCodeSelector = (0, o.default)(A, (t => t ? .reservationCode)), e.listingIdSelector = (0, o.default)(A, (t => t ? .listing_id)), e.modalVisibleSelector = (0, o.default)(_, (t => t.visible)), e.isTreatmentUISelector = (0, o.default)(_, (t => t.isTreatmentUI)), e.isDismissModalVisibleSelector = (0, o.default)(_, (t => t.isDismissModalVisible)), e.confirmDismissListingScreenNameSelector = (0, o.default)(_, (t => t.confirmDismissListingScreenName)), e.confirmLegalNameScreenNameSelector = (0, o.default)(_, (t => t.confirmLegalNameScreenName)), e.showConfirmLegalNameErrorAlertSelector = (0, o.default)(T, (t => t.showConfirmLegalNameErrorAlert)), e.isLegalNameModalVisibleSelector = (0, o.default)(_, (t => t.isLegalNameModalVisibleSelector)), e.isWebcamCaptureModalVisibleSelector = (0, o.default)(_, (t => t.isWebcamCaptureModalVisible)), e.firstWebcamCaptureScreenNameSelector = (0, o.default)(_, (t => t.firstWebcamCaptureScreenName)), e.isFullPageSelector = (0, o.default)(_, (t => t.isFullPage)), e.ssnInputValuesSelector = (0, o.default)(p, (t => t.inputValues))),
        P = (e.ssnInputFieldNamesOnServerSelector = (0, o.default)(p, (t => t.inputFieldNamesOnServer)), e.ssnFieldSelector = (0, o.default)(O, (t => t[n.SSNField.SSN])), e.legalInfoInputValuesSelector = (0, o.default)(T, (t => t.inputValues)), e.legalInfoInputFieldNamesOnServerSelector = (0, o.default)(T, (t => t.inputFieldNamesOnServer)), (0, o.default)(T, (t => t.inputValid))),
        D = (0, o.default)(T, (t => t.legalNameInputValid)),
        L = (e.legalNameValuesSelector = (0, o.default)(T, (t => t.legalNameValues)), e.screenConfigSelector = (0, o.default)([y, N], ((t, o) => t[o] || {}))),
        R = (e.screenVersionSelector = (0, o.default)(L, (t => t.version)), e.screenIdSelector = (0, o.default)(L, (t => t.id)), e.screenTypeSelector = (0, o.default)(L, (t => t.fovScreenType))),
        h = (0, o.default)(L, (t => t.contextual_consent)),
        x = e.copySelector = (0, o.default)(L, (t => t.copy || {})),
        V = (e.copyForLowQualityImageSelector = (0, o.default)(L, (t => t.copy_for_low_quality_image)), e.navbarSelector = (0, o.default)(L, (t => t.navbar)), e.pollingConfigSelector = (0, o.default)(L, (t => t.polling)), e.loaderConfigSelector = (0, o.default)(L, (t => t.loader)), e.sidebarConfigSelector = (0, o.default)(L, (t => t.sidebar || {})), (0, o.default)(y, (t => Object.values(t).find((t => n.ExitScreenTypes.has(t.fovScreenType))) || {}))),
        B = (e.exitScreenNameSelector = (0, o.default)(V, (t => t.name)), e.exitScreenActionSelector = (0, o.default)(V, (t => (0, l.default)(t, ['secondary', 'action']))), e.isTakingPhotoSelector = (0, o.default)(f, (t => t.isTakingPhoto))),
        k = ((0, o.default)(V, (t => {
            const o = t.copy || {},
                l = t.primary || {},
                c = t.secondary || {};
            return {
                cancelTitle: o.title,
                cancelSubtitle: o.subtitle,
                finishNowText: l.display_text,
                finishLaterText: c.display_text
            }
        })), e.govIdOptionNextScreenNameSelector = (0, o.default)([L, F], ((t, o) => (t.platform_choices.find((t => t.id_platform === o)) || {}).next_screen)), e.govIdOptionPrimaryActionSelector = (0, o.default)([L, F], ((t, o) => (t.platform_choices.find((t => t.id_platform === o)) || {}).primary_action)), e.currentCaptureStepSelector = (0, o.default)(f, (t => t.currentCaptureStep)));
    e.getScreenTypeByScreenName = (t, o) => (0, l.default)(y(o), [t, 'fovScreenType']);
    e.getScreenConfigByScreenName = (t, o) => (0, l.default)(y(o), [t]);
    const w = e.uploadedFrontImageSelector = (0, o.default)(f, (t => t.uploadedFrontImage)),
        U = e.uploadedBackImageSelector = (0, o.default)(f, (t => t.uploadedBackImage)),
        G = (0, o.default)(f, (t => t.needsBackSide)),
        M = e.cameraSelector = (0, o.default)(f, (t => t.camera)),
        H = (e.getCameraRef = (0, o.default)(M, (t => t.ref)), e.getImageDataUri = (0, o.default)([f, k], ((t, o) => t[o])), e.capturedFrontImageSelector = (0, o.default)(f, (t => t[n.CAPTURE_STEP.ID_FRONT])), e.capturedBackImageSelector = (0, o.default)(f, (t => t[n.CAPTURE_STEP.ID_BACK])), e.capturedSelfieSelector = (0, o.default)(f, (t => t[n.CAPTURE_STEP.SELFIE])), (0, o.default)(f, (t => t.submissionKeyMap || {}))),
        W = (e.frontSubmissionKeySelector = (0, o.default)(H, (t => t[n.CAPTURE_STEP.ID_FRONT])), e.backSubmissionKeySelector = (0, o.default)(H, (t => t[n.CAPTURE_STEP.ID_BACK])), e.selfieSubmissionKeySelector = (0, o.default)(H, (t => t[n.CAPTURE_STEP.SELFIE])), e.postSuccessSelector = (0, o.default)(f, (t => t.postSuccess)), e.postErrorSelector = (0, o.default)(f, (t => t.postError)), e.failedSelfieSelector = (0, o.default)(f, (t => t.failedSelfie)), e.isPostingSelector = (0, o.default)(f, (t => t.isPosting)), e.selectedCountrySelector = (0, o.default)(f, (t => t.selectedCountry))),
        K = ((0, o.default)(L, f, ((t, o) => !(!o.selectedCountry ? .country_code || !t.issuing_country_warnings ? .[o.selectedCountry.country_code]))), e.selectedIdSelector = (0, o.default)(f, (t => t.selectedId))),
        Y = e.selectedConsentSelector = (0, o.default)(f, (t => t.selectedConsent)),
        Q = (e.consentTermsConfigurationIdSelector = (0, o.default)(f, (t => t.consentTermsConfigurationId)), e.idTypeTextSelector = (0, o.default)(f, (t => t.idTypeText)), e.disableAutoCaptureSelector = (0, o.default)(f, (t => t.disableAutoCapture)), e.captureMethodSelector = (0, o.default)(f, (t => t.captureMethod)), e.manualCaptureErrorSelector = (0, o.default)(f, (t => t.manualCaptureError)), e.blurrinessValueSelector = (0, o.default)(f, (t => t.blurrinessValue)), e.govIdFrontFaceBoxSelector = (0, o.default)(f, (t => t.govIdFrontFaceBox)), e.getIsCameraLive = (0, o.default)(M, (t => t.isCameraLive)), (0, o.default)(M, (t => t.isFlashing)), (0, o.default)(M, (t => t.isCameraAnimationComplete)), e.cameraDimensionsSelector = (0, o.default)(M, (t => ({
            cameraPreviewWidth: t.cameraPreviewWidth,
            cameraPreviewHeight: t.cameraPreviewHeight,
            resolutionWidth: t.resolutionWidth,
            resolutionHeight: t.resolutionHeight,
            cropWidth: t.cropWidth,
            cropHeight: t.cropHeight
        }))), (0, o.default)(f, (t => t.user))),
        q = ((0, o.default)(Q, (t => t.phoneNumber)), e.phoneNumberCollectedForHandoffSelector = (0, o.default)(Q, (t => t.phoneNumberCollectedForHandoff))),
        j = e.phoneCountryCollectedForHandoffSelector = (0, o.default)(Q, (t => t.phoneCountryCollectedForHandoff)),
        z = (e.mobileHandoffDeeplinkSelector = (0, o.default)(f, (t => t.mobileHandoffDeepLinkUrl)), e.postTimestampSelector = (0, o.default)(f, (t => t.postStartTimestamp)), (0, o.default)(f, (t => t.countries)), (0, o.default)(f, (t => t.isFirstTimeAutoCapture)), e.isLowQualityImageModeSelector = (0, o.default)(f, (t => t.isLowQualityImageMode))),
        $ = (e.lowQualityAttemptCountSelector = (0, o.default)(f, (t => t.lowQualityAttemptCount)), e.fullNameSelector = (0, o.default)(Q, (t => t.fullName))),
        X = e.idNumberSelector = (0, o.default)(Q, (t => t.idNumber)),
        J = e.koreanNameSelector = (0, o.default)(Q, (t => t.koreanName)),
        Z = e.birthDateSelector = (0, o.default)(Q, (t => t.birthDate)),
        ee = (e.titleSelector = (0, o.default)(x, (t => t.title)), (0, o.default)(x, (t => t.subtitle))),
        te = (e.replacedSubtitleSelector = (0, o.default)([ee, W, q, j], ((t, o, l, c) => {
            if (t) {
                if (l && t.includes('%{phone_number}')) return t.replace('%{phone_number}', `+${c.prefix}${l}`);
                if (o && t.includes('%{country}')) return t.replace('%{country}', o.country_name)
            }
            return t
        })), (0, o.default)(x, (t => t.additional_texts || {}))),
        re = (e.bodySelector = (0, o.default)(te, (t => t.body)), e.additionalTextsHeaderSelector = (0, o.default)(te, (t => t.header)), e.bodyParagraphsSelector = (0, o.default)(L, (t => t.body)), e.bodyHelpLinkSelector = (0, o.default)(L, (t => t.body_help_link || {}))),
        oe = (e.bodyHelpScreenNameSelector = (0, o.default)(re, (t => t.screen_name)), (0, o.default)(re, (t => t.display_text)), e.bodyHelpLinkButtonSelector = (0, o.default)(L, (t => t.body_help_link_button || {})), e.helpLinkButtonSelector = (0, o.default)(L, (t => t.help_link_button || {})), e.helpLinkSelector = (0, o.default)(L, (t => t.help_link || {}))),
        le = (e.helpScreenNameSelector = (0, o.default)(oe, (t => t.screen_name)), (0, o.default)(oe, (t => t.display_text)), (0, o.default)(L, (t => t.header || {}))),
        ae = (0, o.default)(le, (t => t.animation)),
        ce = (0, o.default)(le, (t => t.icon)),
        ne = ((0, o.default)(ae, (t => S.IconByAnimationName[t])), e.headerIconSelector = (0, o.default)(ce, (t => S.IconByAnimationName[t])), (0, o.default)(L, (t => t.animations))),
        ie = (0, o.default)(L, (t => t.animation_color)),
        Se = ((0, o.default)([ne, ie], ((t, o) => t && t.map((t => (0, S.getLoaderAnimationSrc)(t, o))))), e.animationNameSelector = (0, o.default)(L, (t => t.animation))),
        ue = ((0, o.default)([R, Se], ((t, o) => t === n.FovScreenType.ANIMATED_ACTION ? null : S.AnimationSrc[t] || S.AnimationSrcByAnimationName[o])), e.fovOptionNextScreenNameSelector = (0, o.default)([L, C], ((t, o) => (t.friction_choices.find((t => t.friction_type === o)) || {}).next_screen)), (0, o.default)(L, (t => t.dismiss_link || {}))),
        de = ((0, o.default)(ue, (t => t.screen_name)), (0, o.default)(ue, (t => t.display_text))),
        se = (0, o.default)(ue, (t => t.icon)),
        fe = (e.nextScreenNameSelector = (0, o.default)(L, (t => t.next_screen)), e.submissionPendingScreenReaderTextSelector = (0, o.default)(L, (t => t.submission_pending_screen_reader_text)), e.primaryForLowQualityImageSelector = (0, o.default)(L, (t => t.primary_for_low_quality_image)), e.secondaryForLowQualityImageSelector = (0, o.default)(L, (t => t.secondary_for_low_quality_image))),
        pe = (0, o.default)(L, (t => (0, l.default)(t, ['primary', 'display_text']))),
        me = e.primaryButtonActionSelector = (0, o.default)(L, (t => (0, l.default)(t, ['primary', 'action']))),
        _e = (e.primaryButtonScreenNameSelector = (0, o.default)(L, (t => (0, l.default)(t, ['primary', 'screen_name']))), e.primaryButtonScreenNamesSelector = (0, o.default)(L, (t => (0, l.default)(t, ['primary', 'screen_names']))), e.primaryButtontIconSelector = (0, o.default)(L, (t => (0, l.default)(t, ['primary', 'icon']))), (0, o.default)(L, (t => (0, l.default)(t, ['secondary', 'display_text'])))),
        Te = e.secondaryButtonActionSelector = (0, o.default)(L, (t => (0, l.default)(t, ['secondary', 'action']))),
        ye = (e.secondaryButtonScreenNameSelector = (0, o.default)(L, (t => (0, l.default)(t, ['secondary', 'screen_name']))), e.secondaryButtonScreenNamesSelector = (0, o.default)(L, (t => (0, l.default)(t, ['secondary', 'screen_names']))), (0, o.default)(L, (t => (0, l.default)(t, ['secondary', 'icon'])))),
        Ne = (0, o.default)(L, (t => (0, l.default)(t, ['back_button', 'display_text']))),
        Ce = (0, o.default)(L, (t => (0, l.default)(t, ['back_button', 'icon']))),
        Ie = e.backButtonActionSelector = (0, o.default)(L, (t => (0, l.default)(t, ['back_button', 'action']))),
        Fe = (e.footerNextCTATextSelector = (0, o.default)([L, te, R, pe, z, h, b, Y], ((t, o, l, c, S, u, s, f) => {
            if (S) return t.primary_for_low_quality_image ? .display_text;
            if (c) return c;
            if (l === n.FovScreenType.MOBILE_HANDOFF) return o.send_text_button;
            if (l === n.FovScreenType.GOV_ID_UNSUPPORTED_TYPE) return t.button ? t.button.display_text : null;
            if (u && s && (l === n.FovScreenType.ANIMATED_ACTION || l === n.FovScreenType.LANDING)) return u.primary.display_text;
            if (l === n.FovScreenType.CONSENT_SCREEN) {
                const o = f || t.default_toggle_key;
                return t.call_to_actions[o].display_text
            }
            return o.next_button
        })), e.getFooterPreviousCTAType = (0, o.default)([R, ue, Te, Ie], ((t, o, l, c) => {
            if (l || c) return n.FooterCTA.ACTION;
            switch (t) {
                case n.FovScreenType.LANDING:
                case n.FovScreenType.SSN_RETRY:
                case n.FovScreenType.GOV_ID_SELECT_PLATFORM:
                case n.FovScreenType.CHINA_GOV_ID_USER_INPUT:
                case n.FovScreenType.ANIMATED_ACTION:
                    return o ? n.FooterCTA.CANCEL : n.FooterCTA.NONE;
                case n.FovScreenType.SSN_INPUT:
                case n.FovScreenType.HELP_INFO:
                case n.FovScreenType.MOBILE_HANDOFF:
                case n.FovScreenType.GOV_ID_SELECT_TYPE:
                case n.FovScreenType.SELFIE_REVIEW:
                case n.FovScreenType.GOV_ID_REVIEW:
                case n.FovScreenType.GOV_ID_UPLOAD_IMAGE:
                case n.FovScreenType.GOV_ID_UNSUPPORTED_TYPE:
                case n.FovScreenType.KOREAN_REDIRECT_ID_ENTRY_SCREEN:
                    return n.FooterCTA.BACK;
                default:
                    return n.FooterCTA.NONE
            }
        }))),
        Ee = (e.getFooterNextCTAType = (0, o.default)([R, me], ((t, o) => {
            if (o) return n.FooterCTA.ACTION;
            switch (t) {
                case n.FovScreenType.SSN_RETRY:
                    return n.FooterCTA.TRY_AGAIN;
                case n.FovScreenType.SSN_SUCCESS:
                case n.FovScreenType.FOV_SUCCESS:
                case n.FovScreenType.GOV_ID_UNSUPPORTED_TYPE:
                    return n.FooterCTA.FINISH;
                case n.FovScreenType.LANDING:
                case n.FovScreenType.SSN_INPUT:
                case n.FovScreenType.SSN_ERROR:
                case n.FovScreenType.GOV_ID_SELECT_PLATFORM:
                case n.FovScreenType.CHINA_GOV_ID_USER_INPUT:
                case n.FovScreenType.GOV_ID_UPLOAD_IMAGE:
                case n.FovScreenType.MOBILE_HANDOFF:
                case n.FovScreenType.GOV_ID_REVIEW:
                case n.FovScreenType.SELFIE_REVIEW:
                case n.FovScreenType.ANIMATED_ACTION:
                case n.FovScreenType.GOV_ID_SELECT_TYPE:
                case n.FovScreenType.GOV_ID_LOADING:
                case n.FovScreenType.CONSENT_SCREEN:
                case n.FovScreenType.KOREAN_REDIRECT_ID_ENTRY_SCREEN:
                case n.FovScreenType.KOREAN_REDIRECT_ID_PENDING_SCREEN:
                    return n.FooterCTA.NEXT;
                case n.FovScreenType.GOV_ID_CAPTURE:
                case n.FovScreenType.SELFIE_CAPTURE:
                    return n.FooterCTA.CAMERA;
                default:
                    return n.FooterCTA.NONE
            }
        })), e.isFooterPreviousCTADisabled = (0, o.default)(E, (t => t)), (0, o.default)(L, (t => t.input_fields)));
    e.isFooterNextCTADisabled = (0, o.default)([R, C, O, Ee, F, M, w, U, G, B, P, D, q, $, X, v, h, b, Y, K, J, Z], ((t, o, l, S, s, f, p, _, T, y, N, C, I, F, E, A, v, b, O, P, D, L) => {
        const {
            isCameraLive: R,
            successMessageCompleted: h
        } = f;
        switch (t) {
            case n.FovScreenType.LANDING:
                return !(0, u.isFovOptionValid)(o) || (0, u.disableNextButtonForBiometrics)(b, A, v);
            case n.FovScreenType.SSN_INPUT:
                return !(0, u.isLastFourSSNCodeValid)(l[n.SSNField.SSN]);
            case n.FovScreenType.SSN_RETRY:
                return !(0, u.isSSNInputValuesValid)(l, S);
            case n.FovScreenType.GOV_ID_SELECT_PLATFORM:
                return !(0, u.isGovIdPlatformValid)(s);
            case n.FovScreenType.GOV_ID_SELECT_TYPE:
                return !P;
            case n.FovScreenType.CHINA_GOV_ID_USER_INPUT:
                return !F || !E;
            case n.FovScreenType.KOREAN_REDIRECT_ID_ENTRY_SCREEN:
                return !D || Object.entries(D).some((([t, o]) => !o || ('PREFERRED_NAME' === t ? !(0, c.checkValidPreferredName)(o) : !(0, c.checkValidName)(o)))) || !L ? .year || !L ? .month || !L ? .day || (0, u.isUnder18)(L);
            case n.FovScreenType.GOV_ID_CAMERA_PREPARE:
                return !R || !h;
            case n.FovScreenType.GOV_ID_UPLOAD_IMAGE:
                return !(p && (_ || !T));
            case n.FovScreenType.ANIMATED_ACTION:
                return (0, u.disableNextButtonForBiometrics)(b, A, v);
            case n.FovScreenType.GOV_ID_CAPTURE:
            case n.FovScreenType.SELFIE_CAPTURE:
                return y;
            case n.FovScreenType.LEGAL_INFO_ENTRY:
                return !N;
            case n.FovScreenType.GOV_ID_PHONE_NUMBER_COLLECTION:
                return !I || I.length < 7;
            case n.FovScreenType.CONFIRM_LEGAL_NAME:
                return !C;
            case n.FovScreenType.CONSENT_SCREEN:
                return !O;
            default:
                return !1
        }
    })), e.footerPreviousCTATextSelector = (0, o.default)([Fe, de, te, _e, Ne, z, fe, h, R, b], ((t, o, l, c, S, u, s, f, p, _) => {
        if (u) return s ? .display_text;
        if (f && _ && (p === n.FovScreenType.ANIMATED_ACTION || p === n.FovScreenType.LANDING)) return f.secondary.display_text;
        switch (t) {
            case n.FooterCTA.CANCEL:
                return o;
            case n.FooterCTA.BACK:
                return l.back_button;
            case n.FooterCTA.ACTION:
                return c || S;
            default:
                return ''
        }
    })), e.footerPreviousCTAIconSelector = (0, o.default)([Fe, se, ye, Ce], ((t, o, l, c) => {
        switch (t) {
            case n.FooterCTA.CANCEL:
                return o;
            case n.FooterCTA.ACTION:
                return l || c;
            default:
                return
        }
    }))
}), "48a86b", ["ba7a76", "ab2414", "004dce", "3c3783", "e3eb42", "58b4eb", "4ebe70"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const t = (0, r(d[0]).adapterFactory)({
        window: window
    });
    e.default = t
}), "4ad1a6", ["9f3f92"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function n() {
        const u = t(r(d[1]));
        return n = function() {
            return u
        }, u
    }

    function u() {
        const n = t(r(d[2]));
        return u = function() {
            return n
        }, n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.disableNextButtonForBiometrics = function(t, n, u) {
        let o;
        if (u) {
            const {
                primary: {
                    display_text: t
                }
            } = u;
            o = t
        }
        if (t && o) return !n;
        return !1
    }, e.isFovOptionValid = function(t) {
        return o.VALID_FOV_OPTIONS.has(t)
    }, e.isGovIdPlatformValid = function(t) {
        return o.VALID_GOV_ID_OPTIONS.has(t)
    }, e.isLastFourSSNCodeValid = s, e.isSSNInputValuesValid = function(t, n) {
        return Object.entries(n).reduce(((n, [u, {
            is_required: l
        }]) => n && l ? u === o.SSNField.SSN ? s(t[u]) : c(t[u]) : n), !0)
    }, e.isUnder18 = void 0, e.validateChinaResidentIdentityCardNumber = function(t) {
        if (!t || 18 !== t.length || !/^[0-9]{17}[0-9xX]$/.test(t)) return !1;
        const n = t.split('').reverse().join(''),
            u = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6, 1, 2, 4, 8, 5, 10, 9, 7];
        let o = 0;
        for (let t = 2; t <= n.length; t++) o += parseInt(n.charAt(t - 1), 10) * u[t - 1];
        const s = (12 - o % 11) % 11;
        if (10 === s) return 'X' === t.charAt(17).toUpperCase();
        return s === parseInt(t.charAt(17), 10)
    };
    var o = r(d[3]);

    function s(t) {
        return 4 === t.replace(/\D/g, '').length
    }
    const c = t => t.trim().length > 0;
    e.isUnder18 = t => {
        if (!(t && t.year && t.month && t.day)) return !1;
        const o = new Date(`${t.year}-${t.month.padStart(2,'0')}-${t.day.padStart(2,'0')}`);
        return (0, u().default)(new Date, (0, n().default)(o, 18))
    }
}), "4ebe70", ["ba7a76", "5d7f68", "2fa9cc", "e3eb42"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.doesIDTypeNeedBackSide = function(n, t) {
        if (!n || !t) return !1;
        return !!t.need_back_side[n]
    }, e.getCountryForCode = function(n, t) {
        if (n) return t.find((t => t.country_code.toLowerCase() === n.toLowerCase()));
        return t.find((n => 'us' === n.country_code.toLowerCase()))
    }, e.getReduxDataFromBootstrap = function(n) {
        if (!(0, t.default)(n.reduxData)) return n.reduxData;
        return l(n.identityResponse, n.bookingData, n.context, n.redirectUrlOnFinish, n.freezeReason, n.isFullPage)
    }, e.normalizeLinebreakForVO = function(n) {
        return n.replace(/<br\s*\/?>/gi, '<br aria-hidden="true" />')
    }, e.transformFlow = f;
    var t = n(r(d[1])),
        s = r(d[2]),
        o = r(d[3]),
        u = r(d[4]);

    function c(n, t) {
        const o = Object.entries(s.SSNFieldByServerInputFieldName).reduce(((t, [s, o]) => n[s] && n[s].name === o ? { ...t,
            [o]: n[s]
        } : t), {});
        return { ...n,
            input_fields: o,
            fovScreenType: t
        }
    }

    function f(n) {
        const {
            flow_type: o,
            screens: u,
            version: f
        } = n, l = u.reduce(((n, o) => {
            const [u, f] = Object.entries(o).find((([n, s]) => n && !(0, t.default)(s))), l = s.FovScreenTypeByServerScreenClass[u];
            return l && (n.screens[f.name] = c(f, l), n.screenNames.push(f.name)), n
        }), {
            screens: {},
            screenNames: []
        }), v = Object.values(l.screens).reduce(((n, t) => t.input_fields ? (Object.entries(t.input_fields).forEach((([t, s]) => {
            n.inputValues[t] = s.default_value, n.inputFieldNamesOnServer[t] = s.name
        })), n) : n), {
            inputValues: {},
            inputFieldNamesOnServer: {}
        });
        return {
            fov: {
                currentStep: l.screenNames[0],
                configs: {
                    flow_type: o,
                    screens: l.screens,
                    version: f
                }
            },
            fovSSN: v
        }
    }

    function l(n, t = {}, s, c, l, v) {
        const {
            fov: p,
            fovSSN: S
        } = f(n.flow);
        return {
            fov: { ...p,
                bookingData: t,
                context: s,
                redirectUrlOnFinish: c,
                freezeReason: l,
                verified: n.verified,
                flowCompleted: n.verified || (0, o.isGovIdFlowCompleted)(n)
            },
            fovSSN: S,
            fovModal: {
                isFullPage: v,
                isTreatmentUI: (0, u.checkGovIdRedesignExperiments)(n.experiments, p.configs.screens),
                isDismissModalVisible: !1
            },
            fovGovId: {
                disableAutoCapture: (0, u.checkDisableAutoCapture)(n.experiments)
            }
        }
    }
}), "572210", ["ba7a76", "2e7a28", "e3eb42", "6de594", "a7a992"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SSNApi = e.ReinhardtApi = e.CancelReservationApi = void 0, e.shouldRedirectFromPendingFlow = function(t) {
        return t.flow.flow_type === _.FovFlowType.GOV_ID_V1_PENDING && Object.keys(t.flow.screens[0])[0] === _.FovScreenType.REDIRECT_SCREEN
    };
    var o = t(r(d[1])),
        n = t(r(d[2])),
        s = t(r(d[3]));

    function f() {
        const t = r(d[4]);
        return f = function() {
            return t
        }, t
    }

    function c() {
        const o = t(r(d[5]));
        return c = function() {
            return o
        }, o
    }
    var u = t(r(d[6])),
        l = r(d[7]),
        _ = r(d[8]),
        p = r(d[9]),
        v = r(d[10]);
    e.ReinhardtApi = {
        getVerification(t) {
            const {
                userContext: o,
                otherInfo: s = {},
                flowContext: f,
                freezeReason: u,
                reservationConfirmationCode: l,
                govIdFriction: p,
                sessionId: h
            } = t, w = (0, v.isMowebLayout)() ? _.RequestPlatform.MOBILE_WEB : _.RequestPlatform.DESKTOP_WEB, R = {
                user_id: n.default.current().id,
                user_context: o,
                flow_context: f,
                options: {
                    platform: w,
                    freeze_reason: u,
                    reservation_confirmation_code: l,
                    gov_id_friction_in_fov_flow: p
                },
                other_info: s
            };
            return c().default.post('/api/v2/get_verifications', {
                body: JSON.stringify(R),
                headers: {
                    'X-Airbnb-Client-Action-ID': h
                }
            })
        },
        postVerification(t, o) {
            const s = (0, v.isMowebLayout)() ? _.RequestPlatform.MOBILE_WEB : _.RequestPlatform.DESKTOP_WEB,
                f = {
                    user_id: n.default.current().id,
                    verification_data: t.verification_data,
                    user_context: t.userContext,
                    flow_context: t.context,
                    options: {
                        platform: s,
                        reservation_confirmation_code: t.reservation_confirmation_code,
                        freeze_reason: t.freeze_reason
                    }
                };
            return c().default.post('/api/v2/post_verifications', {
                body: JSON.stringify(f),
                headers: {
                    'X-Airbnb-Client-Action-ID': o
                }
            })
        },
        postVerificationForGovId(t, o) {
            const n = (0, v.isMowebLayout)() ? _.RequestPlatform.MOBILE_WEB : _.RequestPlatform.DESKTOP_WEB,
                s = t.options ? Object.assign(t.options, {
                    platform: n
                }) : {
                    platform: n
                },
                f = Object.assign(t, {
                    options: s
                });
            return c().default.post('/api/v2/post_verifications', {
                body: JSON.stringify(f),
                headers: {
                    'X-Airbnb-Client-Action-ID': o
                }
            })
        }
    }, e.CancelReservationApi = {
        post: t => u.default.getBootstrap('api_web_client_migration.fejax.enabled') && !u.default.getBootstrap('api_web_client_migration.fejax.account_fov.kill_switch') ? (0, f().logMigration)(c().default.post(`/reservation/cancel?code=${t}`), {
            method: 'POST',
            client: 'niobe',
            migrationId: 'account_fov',
            group: 'fejax'
        }) : (0, f().logMigration)(o.default.post(`/reservation/cancel?code=${t}`), {
            method: 'POST',
            client: 'fejax',
            migrationId: 'account_fov',
            group: 'fejax'
        })
    }, e.SSNApi = {
        isResponseFromReinhardt: t => t && null !== t.verified && void 0 !== t.verified,
        getIdentity(t = {}) {
            return this.isResponseFromReinhardt(t) ? t : (0, s.default)(t, ['reservation_update_from_identity_operation', 'identity']) || {}
        },
        getFlow(t = {}) {
            return this.getIdentity(t).flow || {}
        },
        isSuccess(t = {}) {
            return !!this.getIdentity(t).verified
        },
        shouldLaunchGovIDRedirect(t = {}) {
            return !this.isSuccess(t) && null != this.getFlow(t).screens[0] ? .gov_id_redirect_screen
        },
        shouldSetupPolling(t = {}) {
            if (!this.isResponseFromReinhardt(t)) return !1;
            const o = (0, p.getFirstScreen)(t) ? .config;
            return o ? .polling && o ? .timeout
        },
        getSSNFields(t = {}) {
            return (0, l.transformFlow)(this.getFlow(t)).fovSSN
        },
        getConfigs(t = {}) {
            return (0, l.transformFlow)(this.getFlow(t)).fov
        }
    }
}), "57b692", ["ba7a76", "c3984f", "06a99e", "004dce", "7c530a", "69a7c4", "c235f8", "572210", "e3eb42", "70edee", "08f04d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var _ = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SelfieAnimationSrcByAnimationName = e.IconByAnimationName = e.AnimationSrcByAnimationName = e.AnimationSrc = void 0, e.getAnimationSrc = function(_) {
        if ((0, Y.isMowebLayout)()) {
            if ('SELFIE_INTRO' === _) return B.default.src;
            if (v[_]) return v[_]
        }
        return K[_]
    }, e.getLoaderAnimationSrc = function(_, t) {
        switch (_) {
            case 'LOADER_AIRMOJI_PERSON':
                return `/json_animations/identity/loader/${t}/Person.json`;
            case 'LOADER_AIRMOJI_LOCK':
                return `/json_animations/identity/loader/${t}/Lock.json`;
            case 'LOADER_AIRMOJI_MAGNIFYING_GLASS':
                return `/json_animations/identity/loader/${t}/MagnifyingGlass.json`;
            case 'LOADER_AIRMOJI_SHIELD':
                return `/json_animations/identity/loader/${t}/Shield.json`;
            default:
                return null
        }
    };
    var t = _(r(d[1])),
        n = _(r(d[2])),
        o = _(r(d[3])),
        I = _(r(d[4])),
        s = _(r(d[5])),
        E = _(r(d[6])),
        c = _(r(d[7])),
        R = _(r(d[8])),
        O = _(r(d[9])),
        S = _(r(d[10])),
        C = _(r(d[11])),
        u = _(r(d[12])),
        A = _(r(d[13])),
        f = _(r(d[14])),
        N = _(r(d[15])),
        T = _(r(d[16])),
        l = _(r(d[17])),
        D = _(r(d[18])),
        j = _(r(d[19])),
        L = _(r(d[20])),
        U = _(r(d[21])),
        M = _(r(d[22])),
        y = _(r(d[23])),
        p = _(r(d[24])),
        h = _(r(d[25])),
        b = _(r(d[26])),
        F = _(r(d[27])),
        P = r(d[28]),
        B = _(r(d[29])),
        Y = r(d[30]);
    const G = '/json_animations/identity/Correct.json';
    e.AnimationSrc = {
        [P.FovScreenType.SSN_SUCCESS]: G,
        [P.FovScreenType.SSN_ERROR]: 'https://a0.muscache.com/pictures/25f4dfe8-23b9-4f7e-88e6-04dddd39cfb7.json'
    };
    const K = e.AnimationSrcByAnimationName = {
            IN_SESSION_UPLOAD: G,
            REVIEWING: '/json_animations/identity/Reviewing.json',
            STILL_REVIEWING: '/json_animations/identity/Loading.json',
            USER_ERROR_BAD_QUALITY: '/json_animations/identity/UserErrorBadQuality.json',
            USER_ERROR_TOO_SMALL: '/json_animations/identity/UserErrorTooSmall.json',
            USER_ERROR_SKEWED: 'https://a0.muscache.com/pictures/a88e94d1-3a3e-456b-b9d2-29801ec13adb.json',
            USER_ERROR_CUTOFF: '/json_animations/identity/UserErrorCutoff.json',
            USER_ERROR_NODOC: '/json_animations/identity/UserErrorNoDoc.json',
            USER_ERROR_BLACK_AND_WHITE: '/json_animations/identity/UserErrorBlackAndWhite.json',
            GOV_ID_INTRO: '/json_animations/identity/GovIdCapture.json',
            SELFIE_INTRO: '/json_animations/identity/GovIdSelfie.json'
        },
        v = {
            USER_ERROR_BAD_QUALITY: 'https://a0.muscache.com/pictures/809dc2e7-fe80-464e-a943-88e5cb2d5091.json',
            USER_ERROR_TOO_SMALL: 'https://a0.muscache.com/pictures/22951945-6d00-4cd8-a4c9-903fcfcfb8d3.json',
            USER_ERROR_SKEWED: 'https://a0.muscache.com/pictures/719d91ca-d301-4cbf-9466-0a7e2865543a.json',
            USER_ERROR_CUTOFF: 'https://a0.muscache.com/pictures/b74c7835-b228-40da-9886-5d95f4904af3.json',
            USER_ERROR_NODOC: 'https://a0.muscache.com/pictures/e26a42c3-83fc-4549-9c1a-e9cc11443fb2.json',
            USER_ERROR_BLACK_AND_WHITE: 'https://a0.muscache.com/pictures/6442d278-aae0-488c-b74a-af435901f8bd.json',
            GOV_ID_INTRO: 'https://a0.muscache.com/pictures/041c28c8-b7b6-4662-87c3-bdc6b6f2b19a.json'
        };
    e.SelfieAnimationSrcByAnimationName = {
        COUNTDOWN: 'https://a0.muscache.com/pictures/a6c3cfc9-3bde-4db8-820d-5ef414928d33.json'
    };
    e.IconByAnimationName = {
        INDICATOR_VERIFIED_USER: R.default,
        INDICATOR_EYE: t.default,
        INDICATOR_FUTURE_TIME: n.default,
        INDICATOR_IDENTIFICATION: o.default,
        ICON_VERIFIED_ID: s.default,
        ICON_ID_CARD: E.default,
        INDICATOR_CLIPBOARD: I.default,
        INDICATOR_QUIZ_FALSE: c.default,
        ICON_COMPACT_BANK: u.default,
        ICON_COMPACT_ID_CARD: A.default,
        ICON_COMPACT_HOST_LISTING_RESIDENTIAL: f.default,
        ICON_COMPACT_VERIFIED: N.default,
        ICON_COMPACT_PHONE: T.default,
        ICON_IC_SYSTEM_CHECK: D.default,
        ICON_IC_SYSTEM_CLOCK: l.default,
        ICON_IC_SYSTEM_ID_CARD: j.default,
        ICON_IC_SYSTEM_CREDIT_CARD: L.default,
        ICON_IC_SYSTEM_BOOK: U.default,
        ICON_IC_SYSTEM_SELFIE_PHOTO: M.default,
        ICON_IC_SYSTEM_PERSON: y.default,
        ICON_IC_SYSTEM_HOST_ASSIGN: p.default,
        ICON_IC_SYSTEM_VERIFIED: h.default,
        ICON_IC_SYSTEM_FLIP_ID: b.default,
        ICON_COMPACT_MAPS_GENERIC: F.default,
        IC_FEATURE_IDENTITY_48: O.default,
        IC_FEATURE_VERIFIED_48: S.default,
        IC_FEATURE_CLOCK_48: C.default
    }
}), "58b4eb", ["ba7a76", "a9b6e5", "a312a4", "09aec9", "a2b2d5", "9e3548", "5fdc88", "19e1d1", "d96efa", "2819f4", "f17e06", "b6c434", "b33aa6", "2d52b7", "1d6b40", "551cbe", "952bc1", "02ec99", "cd1cf6", "819da9", "63a9a4", "c8783d", "d38e0f", "adc15a", "b5188d", "6f526c", "76cc9e", "d1a203", "e3eb42", "c0185b", "08f04d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var c = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var h = c(r(d[1])),
        t = r(d[2]);
    const v = (0, h.default)({
        svgContents: "<path d=\"m21.5 3h-19a2.5 2.5 0 0 0 -2.5 2.5v13c0 1.38 1.12 2.5 2.5 2.5h19c1.38 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.12-2.5-2.5-2.5zm1.5 15.5c0 .83-.68 1.5-1.5 1.5h-19c-.83 0-1.5-.67-1.5-1.5v-13c0-.83.68-1.5 1.5-1.5h19c .83 0 1.5.67 1.5 1.5zm-2-10a .5.5 0 0 1 -.5.5h-6a .5.5 0 0 1 0-1h6a .5.5 0 0 1 .5.5zm0 3a .5.5 0 0 1 -.5.5h-6a .5.5 0 0 1 0-1h6a .5.5 0 0 1 .5.5zm0 3a .5.5 0 0 1 -.5.5h-6a .5.5 0 0 1 0-1h6a .5.5 0 0 1 .5.5zm-11.64-3.34a2.48 2.48 0 0 0 .64-1.66 2.5 2.5 0 1 0 -5 0c0 .64.25 1.22.64 1.66a2.5 2.5 0 0 0 -1.64 2.34v.99c0 .84.66 1.51 1.49 1.51h4.02c.82 0 1.49-.68 1.49-1.51v-.99a2.49 2.49 0 0 0 -1.64-2.34zm-1.86-3.16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm2.5 6.49c0 .28-.23.51-.49.51h-4.02a.5.5 0 0 1 -.49-.51v-.99c0-.83.67-1.5 1.5-1.5h2c .83 0 1.5.67 1.5 1.5z\" fill-rule=\"evenodd\" />",
        svgProps: {
            viewBox: "0 0 24 24"
        }
    }, 'IconIdCard');
    e.default = v;
    v.categories = [t.IDENTITY]
}), "5fdc88", ["ba7a76", "a89bd1", "72354b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.WECHAT_LINK = e.DEFAULT_APP_LINK = e.CHINA_SEM_NONBRAND_LINK = e.CHINA_SEM_BRAND_LINK = void 0;
    e.DEFAULT_APP_LINK = 'https://www.airbnb.com/slink/P1bzvey1', e.WECHAT_LINK = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.airbnb.android', e.CHINA_SEM_BRAND_LINK = 'https://abnb.me/cn_sem_brand', e.CHINA_SEM_NONBRAND_LINK = 'https://abnb.me/cn_sem_nonbrand'
}), "60cf4e", []);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    var o = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.shimGetUserMedia = function(o, n) {
        const s = o && o.navigator;
        if (!s.mediaDevices) return;
        const c = function(o) {
                if ('object' != typeof o || o.mandatory || o.optional) return o;
                const t = {};
                return Object.keys(o).forEach((n => {
                    if ('require' === n || 'advanced' === n || 'mediaSource' === n) return;
                    const s = 'object' == typeof o[n] ? o[n] : {
                        ideal: o[n]
                    };
                    void 0 !== s.exact && 'number' == typeof s.exact && (s.min = s.max = s.exact);
                    const c = function(o, t) {
                        return o ? o + t.charAt(0).toUpperCase() + t.slice(1) : 'deviceId' === t ? 'sourceId' : t
                    };
                    if (void 0 !== s.ideal) {
                        t.optional = t.optional || [];
                        let o = {};
                        'number' == typeof s.ideal ? (o[c('min', n)] = s.ideal, t.optional.push(o), o = {}, o[c('max', n)] = s.ideal, t.optional.push(o)) : (o[c('', n)] = s.ideal, t.optional.push(o))
                    }
                    void 0 !== s.exact && 'number' != typeof s.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[c('', n)] = s.exact) : ['min', 'max'].forEach((o => {
                        void 0 !== s[o] && (t.mandatory = t.mandatory || {}, t.mandatory[c(o, n)] = s[o])
                    }))
                })), o.advanced && (t.optional = (t.optional || []).concat(o.advanced)), t
            },
            u = function(o, u) {
                if (n.version >= 61) return u(o);
                if ((o = JSON.parse(JSON.stringify(o))) && 'object' == typeof o.audio) {
                    const t = function(o, t, n) {
                        t in o && !(n in o) && (o[n] = o[t], delete o[t])
                    };
                    t((o = JSON.parse(JSON.stringify(o))).audio, 'autoGainControl', 'googAutoGainControl'), t(o.audio, 'noiseSuppression', 'googNoiseSuppression'), o.audio = c(o.audio)
                }
                if (o && 'object' == typeof o.video) {
                    let l = o.video.facingMode;
                    l = l && ('object' == typeof l ? l : {
                        ideal: l
                    });
                    const v = n.version < 66;
                    if (l && ('user' === l.exact || 'environment' === l.exact || 'user' === l.ideal || 'environment' === l.ideal) && (!s.mediaDevices.getSupportedConstraints || !s.mediaDevices.getSupportedConstraints().facingMode || v)) {
                        let n;
                        if (delete o.video.facingMode, 'environment' === l.exact || 'environment' === l.ideal ? n = ['back', 'rear'] : 'user' !== l.exact && 'user' !== l.ideal || (n = ['front']), n) return s.mediaDevices.enumerateDevices().then((s => {
                            let v = (s = s.filter((o => 'videoinput' === o.kind))).find((o => n.some((t => o.label.toLowerCase().includes(t)))));
                            return !v && s.length && n.includes('back') && (v = s[s.length - 1]), v && (o.video.deviceId = l.exact ? {
                                exact: v.deviceId
                            } : {
                                ideal: v.deviceId
                            }), o.video = c(o.video), t('chrome: ' + JSON.stringify(o)), u(o)
                        }))
                    }
                    o.video = c(o.video)
                }
                return t('chrome: ' + JSON.stringify(o)), u(o)
            },
            l = function(o) {
                return n.version >= 64 ? o : {
                    name: {
                        PermissionDeniedError: 'NotAllowedError',
                        PermissionDismissedError: 'NotAllowedError',
                        InvalidStateError: 'NotAllowedError',
                        DevicesNotFoundError: 'NotFoundError',
                        ConstraintNotSatisfiedError: 'OverconstrainedError',
                        TrackStartError: 'NotReadableError',
                        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
                        MediaDeviceKillSwitchOn: 'NotAllowedError',
                        TabCaptureError: 'AbortError',
                        ScreenCaptureError: 'AbortError',
                        DeviceCaptureError: 'AbortError'
                    }[o.name] || o.name,
                    message: o.message,
                    constraint: o.constraint || o.constraintName,
                    toString() {
                        return this.name + (this.message && ': ') + this.message
                    }
                }
            };
        if (s.getUserMedia = function(o, t, n) {
                u(o, (o => {
                    s.webkitGetUserMedia(o, t, (o => {
                        n && n(l(o))
                    }))
                }))
            }.bind(s), s.mediaDevices.getUserMedia) {
            const o = s.mediaDevices.getUserMedia.bind(s.mediaDevices);
            s.mediaDevices.getUserMedia = function(t) {
                return u(t, (t => o(t).then((o => {
                    if (t.audio && !o.getAudioTracks().length || t.video && !o.getVideoTracks().length) throw o.getTracks().forEach((o => {
                        o.stop()
                    })), new DOMException('', 'NotFoundError');
                    return o
                }), (o => Promise.reject(l(o))))))
            }
        }
    };
    const t = o(r(d[1])).log
}), "63e673", ["45f788", "9cdad4"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default,
        l = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, l, f = {}) {
        const {
            defaultSize: c = 32
        } = f;

        function y({
            color: l = "#E31C5F",
            size: f = c,
            ...y
        }) {
            const h = (0, o.default)(f),
                p = (0, u.useMemo)((() => ({
                    display: 'block',
                    height: h,
                    width: h,
                    fill: l,
                    stroke: 'currentColor'
                })), [l, h]);
            return (0, n.jsx)(s.default, {
                styles: p,
                Glyph: t,
                ...y
            })
        }
        return y.displayName = l, y
    };
    var u = l(r(d[2])),
        o = t(r(d[3])),
        s = t(r(d[4])),
        n = r(d[5])
}), "6a9266", ["ba7a76", "45f788", "07aa1f", "c94c40", "afeb99", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;

    function o() {
        const n = t(r(d[1]));
        return o = function() {
            return n
        }, n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.chooseGovIdPlatform = function(t) {
        return {
            type: E.CHOOSE_GOV_ID_PLATFORM,
            payload: t
        }
    }, e.generateDeepLinkUrlAndStore = function() {
        return (t, o) => {
            if (!M()) return;
            t(G(B((0, T.bookingDataSelector)(o()))))
        }
    }, e.handOffToMobile = function() {
        return (t, o) => {
            if (M()) {
                const t = (0, T.mobileHandoffDeeplinkSelector)(o());
                if (t) H(t);
                else {
                    H(B((0, T.bookingDataSelector)(o())))
                }
            }(0, T.phoneNumberCollectedForHandoffSelector)(o()) && f.default.getBootstrap('identity.enable_handoff_to_phone_number_collected') ? t(((t, o) => {
                const n = o(),
                    c = (0, T.contextSelector)(n);
                t(L(!0));
                const u = (0, T.phoneNumberCollectedForHandoffSelector)(n),
                    l = (0, T.phoneCountryCollectedForHandoffSelector)(n);
                S().default.post(`/api${A}`, {
                    body: JSON.stringify({
                        user_context: c,
                        phone_number: `${l.prefix}${u}`
                    })
                }).then((() => {
                    t(L(!1)), t(b(!0))
                })).catch((() => {
                    t(L(!1)), t(b(!1))
                }))
            })) : t(V())
        }
    }, e.isGovIdFlowCompleted = Y, e.jumpToKoreanVerificationApp = function() {
        return (t, o) => {
            const n = o(),
                {
                    vendor: c,
                    redirect_url: u,
                    app_market_url: l
                } = (0, T.screenConfigSelector)(n);
            if ((0, C.logUniversalComponentActionEvent)('fov.koreanRedirectId.redirect', {
                    selected_data: {
                        vendor: c
                    }
                }), u)
                if ('naver_id' === c && f.default.getBootstrap('korean_account_fov_use_universal_link_instead_of_scheme')) location.href = `https://naverapp.m.naver.com/?urlScheme=${encodeURIComponent(u)}`;
                else {
                    let t = u;
                    'naver_id' === c && void 0 === window.NaverSign && (t += '&closeApp=true'), l && setTimeout((() => {
                        'visible' === document.visibilityState && (location.href = l)
                    }), 3e3), location.href = t
                }
        }
    }, e.navigateToCameraNotSupported = function(t) {
        return o => {
            o((0, y.advanceToNextStep)(t))
        }
    }, e.postVerificationForChinaGovId = function() {
        return (t, o) => {
            t(K());
            const n = o(),
                u = (0, T.currentStepSelector)(n),
                l = {
                    page: u,
                    verification: 2
                },
                s = (0, T.selectedCountrySelector)(n),
                _ = I.FovFlowContext.THREE_INFO,
                S = (0, T.freezeReasonSelector)(n),
                f = (0, T.contextSelector)(n);
            (0, C.logGovernmentIdUpload)({
                action: 4,
                page: u,
                country: s && s.country_code
            });
            const E = (0, F.logPostApiSessionStart)(f, _),
                R = {
                    user_id: c.default.current().id,
                    user_context: f,
                    flow_context: _,
                    verification_data: {
                        FULL_NAME: (0, T.fullNameSelector)(n),
                        ID_NUMBER: (0, T.idNumberSelector)(n)
                    },
                    options: {
                        freeze_reason: S,
                        in_guest_mode: !0
                    }
                };
            return v.ReinhardtApi.postVerificationForGovId(R, E).then((o => {
                (0, C.logGovernmentIdUpload)({
                    action: 5,
                    page: u,
                    country: s && s.country_code,
                    uploadTime: Date.now() - (0, T.postTimestampSelector)(n)
                }), Y(o) && t(W()), t(z(!1)), t((0, y.advanceToNextFlow)(o))
            })).catch((() => {
                (0, C.logSubmitFailed)(l), t(z(!1)), t($(!0))
            })).finally((() => {
                (0, p.logSessionEnd)({
                    sessionId: E,
                    useSendBeacon: !0
                })
            }))
        }
    }, e.postVerificationForGovIdUpload = function() {
        return (t, o) => {
            t(K());
            const n = o(),
                u = (0, T.currentStepSelector)(n),
                l = {
                    page: u,
                    verification: 2
                },
                s = (0, T.selectedGovIdPlatformSelector)(n),
                S = (0, T.selectedCountrySelector)(n),
                f = I.FovFlowContext.GOV_ID,
                E = (0, T.frontSubmissionKeySelector)(n),
                R = (0, T.backSubmissionKeySelector)(n),
                A = (0, T.freezeReasonSelector)(n),
                D = (0, T.selectedIdSelector)(n),
                h = (0, T.contextSelector)(n),
                U = (0, T.reservationCodeSelector)(n);
            let w, x;
            if (s === I.GovIdPlatform.ADD_WITH_BROWSER ? (w = (0, T.capturedFrontImageSelector)(n), x = (0, T.capturedBackImageSelector)(n)) : (w = (0, T.uploadedFrontImageSelector)(n), x = (0, T.uploadedBackImageSelector)(n)), !w) return;
            (0, C.logGovernmentIdUpload)({
                action: 4,
                page: u,
                [O]: w,
                [N]: x,
                country: S && S.country_code,
                documentType: D,
                captureMethod: 'upload'
            });
            let P = (0, F.logPostApiSessionStart)(h, f, w);
            if (x) {
                const o = {
                        create_government_id_request: {
                            document_type: D,
                            document_issuing_country: S && S.country_code,
                            double_sided: !0
                        },
                        freeze_reason: A,
                        reservation_confirmation_code: U
                    },
                    s = {
                        user_id: c.default.current().id,
                        user_context: h,
                        flow_context: f,
                        verification_data: {
                            [E]: (0, _.getRawDataFromImageDataURI)(w),
                            capture_mode: 'UPLOAD'
                        },
                        options: o
                    },
                    I = {
                        user_id: c.default.current().id,
                        user_context: h,
                        flow_context: f,
                        verification_data: {
                            [R]: (0, _.getRawDataFromImageDataURI)(x),
                            capture_mode: 'UPLOAD'
                        },
                        options: o
                    };
                return v.ReinhardtApi.postVerificationForGovId(s, P).then((() => ((0, p.logSessionEnd)({
                    sessionId: P,
                    useSendBeacon: !0
                }), P = (0, F.logPostApiSessionStart)(h, f, x), v.ReinhardtApi.postVerificationForGovId(I, P)))).then((o => {
                    (0, C.logGovernmentIdUpload)({
                        action: 5,
                        page: u,
                        [O]: w,
                        [N]: x,
                        country: S && S.country_code,
                        documentType: D,
                        uploadTime: Date.now() - (0, T.postTimestampSelector)(n),
                        captureMethod: 'upload'
                    }), Y(o) && t(W()), t(z(!1)), t((0, y.advanceToNextFlow)(o))
                })).catch((() => {
                    (0, C.logSubmitFailed)(l), t(z(!1)), t($(!0))
                })).finally((() => {
                    (0, p.logSessionEnd)({
                        sessionId: P,
                        useSendBeacon: !0
                    })
                }))
            }
            const M = {
                user_id: c.default.current().id,
                user_context: h,
                flow_context: f,
                verification_data: {
                    [E]: (0, _.getRawDataFromImageDataURI)(w),
                    capture_mode: 'UPLOAD'
                },
                options: {
                    create_government_id_request: {
                        document_type: D,
                        document_issuing_country: S && S.country_code,
                        double_sided: !1
                    },
                    freeze_reason: A,
                    reservation_confirmation_code: U
                }
            };
            return v.ReinhardtApi.postVerificationForGovId(M, P).then((o => {
                (0, C.logGovernmentIdUpload)({
                    action: 5,
                    page: u,
                    [O]: w,
                    country: S && S.country_code,
                    documentType: D,
                    uploadTime: Date.now() - (0, T.postTimestampSelector)(n),
                    captureMethod: 'upload'
                }), Y(o) && t(W()), t(z(!1)), t((0, y.advanceToNextFlow)(o))
            })).catch((() => {
                (0, C.logSubmitFailed)(l), t(z(!1)), t($(!0))
            })).finally((() => {
                (0, p.logSessionEnd)({
                    sessionId: P,
                    useSendBeacon: !0
                })
            }))
        }
    }, e.postVerificationForKoreanId = function() {
        return (t, o) => {
            t(K());
            const n = o(),
                u = {
                    page: (0, T.currentStepSelector)(n),
                    verification: 2
                },
                l = I.FovFlowContext.KOREAN_REDIRECT_ID,
                s = (0, T.contextSelector)(n),
                {
                    vendor: _,
                    request_error_copy: S
                } = (0, T.screenConfigSelector)(n);
            (0, C.logUniversalComponentActionEvent)('fov.koreanRedirectId.request', {
                selected_data: {
                    vendor: _,
                    is_retry: (!!S ? .title).toString()
                }
            });
            const f = (0, F.logPostApiSessionStart)(s, l),
                E = {
                    user_id: c.default.current().id,
                    user_context: s,
                    flow_context: l,
                    verification_data: {
                        VENDOR: _,
                        ...(0, T.koreanNameSelector)(n),
                        DATE_OF_BIRTH: `${(0,T.birthDateSelector)(n).year}-${String((0,T.birthDateSelector)(n).month).padStart(2,'0')}-${String((0,T.birthDateSelector)(n).day).padStart(2,'0')}`
                    }
                };
            return v.ReinhardtApi.postVerificationForGovId(E, f).then((o => {
                t(z(!1)), t((0, y.advanceToNextReturnableFlow)(o))
            })).catch((() => {
                (0, C.logSubmitFailed)(u), t(z(!1)), t($(!0))
            })).finally((() => {
                (0, p.logSessionEnd)({
                    sessionId: f,
                    useSendBeacon: !0
                })
            }))
        }
    }, e.postVerificationForKoreanIdResult = function t(o) {
        return (n, u) => {
            const l = u(),
                s = I.FovFlowContext.KOREAN_REDIRECT_ID,
                _ = (0, T.contextSelector)(l),
                p = (0, F.logPostApiSessionStart)(_, s),
                {
                    vendor: S,
                    receipt_id: f,
                    name: E,
                    polling: R,
                    timeout: {
                        time_ms: A
                    }
                } = (0, T.screenConfigSelector)(l);
            if ('korean_redirect_id_pending_naver' !== E && 'korean_redirect_id_pending_kakao' !== E) return;
            (0, C.logUniversalComponentActionEvent)('fov.koreanRedirectId.pollResult', {
                selected_data: {
                    vendor: S
                }
            });
            const O = +new Date - o < A,
                N = {
                    user_id: c.default.current().id,
                    user_context: _,
                    flow_context: s,
                    verification_data: {
                        IS_POLLING: O,
                        VENDOR: S,
                        RECEIPT_ID: f
                    }
                };
            return v.ReinhardtApi.postVerificationForGovId(N, p).then((c => {
                'MARKET_LOCALIZATION_GENERIC_SUCCESS' === c.flow.flow_type ? (n(W()), n((0, y.advanceToNextFlow)(c))) : 'MARKET_LOCALIZATION_GENERIC_FAILURE' === c.flow.flow_type ? n((0, y.advanceToNextReturnableFlow)(c)) : O && setTimeout((() => {
                    n(t(o))
                }), R.poll_interval_ms)
            }))
        }
    }, e.postVerificationForOneGovIdCapturedImage = function(t, o) {
        return (u, l) => {
            u(K());
            const s = l(),
                S = o || (0, T.currentStepSelector)(s),
                f = {
                    page: S,
                    verification: 2
                },
                R = (0, T.selectedCountrySelector)(s),
                A = I.FovFlowContext.GOV_ID,
                U = (0, T.freezeReasonSelector)(s),
                w = (0, T.selectedIdSelector)(s),
                x = (0, T.contextSelector)(s),
                P = (0, T.getScreenConfigByScreenName)(S, s),
                M = !!P.copy_for_low_quality_image,
                L = (0, T.captureMethodSelector)(s),
                b = (0, T.blurrinessValueSelector)(s),
                G = (0, T.reservationCodeSelector)(s),
                V = (0, T.currentCaptureStepSelector)(s) === I.CAPTURE_STEP.ID_FRONT || S.includes('review_front'),
                k = V && !t,
                B = V ? (0, T.frontSubmissionKeySelector)(s) : (0, T.backSubmissionKeySelector)(s),
                H = V ? (0, T.capturedFrontImageSelector)(s) : (0, T.capturedBackImageSelector)(s);
            if (!H) return void(0, n.airdogCount)('account_fov.post_gov_id.no_image_uri');
            const q = V ? O : N;
            (0, C.logGovernmentIdUpload)({
                action: 4,
                page: S,
                [q]: H,
                country: R && R.country_code,
                documentType: w,
                captureMethod: L,
                blurriness: b
            });
            const Q = (0, F.logPostApiSessionStart)(x, A, H),
                J = {
                    user_id: c.default.current().id,
                    user_context: x,
                    flow_context: A,
                    verification_data: {
                        [B]: (0, _.getRawDataFromImageDataURI)(H),
                        capture_mode: j[L]
                    },
                    options: {
                        create_government_id_request: {
                            document_type: w,
                            document_issuing_country: R && R.country_code,
                            double_sided: !k
                        },
                        freeze_reason: U,
                        reservation_confirmation_code: G
                    },
                    check_image_quality: M
                };
            return v.ReinhardtApi.postVerificationForGovId(J, Q).then((o => {
                const n = (0, T.lowQualityAttemptCountSelector)(s),
                    c = !!P.secondary_for_low_quality_image && n >= h || n >= D;
                (0, C.logGovernmentIdUpload)({
                    action: 5,
                    page: S,
                    [q]: H,
                    country: R && R.country_code,
                    documentType: w,
                    uploadTime: Date.now() - (0, T.postTimestampSelector)(s),
                    maxAttemptReached: c,
                    captureMethod: L
                }), u(z(!1)), M && !c && o.image_detail && !1 === o.image_detail.image_quality_passed ? u(X(!0)) : (u({
                    type: E.SET_GOV_ID_POST_SUCCESS
                }), t ? u((0, y.advanceToNextStep)(t)) : (Y(o) && u(W()), u((0, y.advanceToNextFlow)(o))))
            })).catch((() => {
                (0, C.logSubmitFailed)(f), u(z(!1)), u($(!0))
            })).finally((() => {
                (0, p.logSessionEnd)({
                    sessionId: Q,
                    useSendBeacon: !0
                })
            }))
        }
    }, e.postVerificationForSelfie = function(t) {
        return (o, n) => {
            o(K());
            const c = n(),
                u = (0, T.isTreatmentUISelector)(c),
                l = t || (0, T.currentStepSelector)(c),
                s = (0, T.capturedSelfieSelector)(c),
                _ = (0, T.failedSelfieSelector)(c);
            let p;
            return p = _.length > 0 ? _.map((t => Q(s[t], t, l, c))) : s.map(((t, o) => Q(t, o, l, c))), Promise.all(p).then((t => {
                (0, C.logSubmit)({
                    verification: 3,
                    page: l
                });
                const n = t.filter((t => t.failed)).map((t => t.index));
                if (n.length > 0) throw o(q(n)), new Error('selfie submit failed');
                const c = t[0];
                Y(c) && o(W()), o(z(!1)), u ? setTimeout((() => {
                    o((0, y.advanceToNextFlow)(c))
                }), 2e3) : o((0, y.advanceToNextFlow)(c))
            })).catch((() => {
                o(z(!1)), o($(!0)), o((t => {
                    t((0, y.advanceToNextStep)('gov_id_selfie_resubmit'))
                }))
            }))
        }
    }, e.sendSMSAndPushForHandoff = V, e.setBirthDate = function(t) {
        return {
            type: E.SET_BIRTH_DATE,
            payload: t
        }
    }, e.setBlurrinessValue = function(t) {
        return {
            type: E.SET_BLURRINESS_VALUE,
            payload: t
        }
    }, e.setCameraAnimationComplete = U, e.setCameraDimensions = function(t) {
        return {
            type: E.SET_CAMERA_DIMENSIONS,
            payload: t
        }
    }, e.setCameraLive = function(t) {
        return {
            type: E.SET_CAMERA_LIVE,
            payload: t
        }
    }, e.setCameraRef = function(t) {
        return {
            type: E.SET_CAMERA_REF,
            payload: t
        }
    }, e.setCaptureMethod = function(t) {
        return {
            type: E.SET_CAPTURE_METHOD,
            payload: t
        }
    }, e.setChinaUserFullName = function(t) {
        return {
            type: E.SET_CHINA_USER_FULL_NAME,
            payload: t
        }
    }, e.setChinaUserIdNumber = function(t) {
        return {
            type: E.SET_CHINA_USER_ID_NUMBER,
            payload: t
        }
    }, e.setConsentTermsConfigurationId = function(t) {
        return {
            type: E.SET_CONSENT_TERMS_CONFIGURATION_ID,
            payload: t
        }
    }, e.setCountries = function(t) {
        return {
            type: E.SET_COUNTRIES,
            payload: t
        }
    }, e.setFlowCompleted = W, e.setGovIdFrontFaceBox = function(t) {
        return {
            type: E.SET_GOV_ID_FRONT_FACE_BOX,
            payload: t
        }
    }, e.setGovIdPostError = $, e.setIdTypeText = function(t) {
        return {
            type: E.SET_ID_TYPE_TEXT,
            payload: t
        }
    }, e.setImageDataUri = w, e.setImageSubmissionKey = function(t, o) {
        return {
            type: E.SET_IMAGE_SUBMISSION_KEY,
            payload: {
                currentCaptureStep: t,
                submissionKey: o
            }
        }
    }, e.setIsLowQualityImageMode = X, e.setIsPosting = z, e.setIsTakingPhoto = x, e.setKoreanName = function(t) {
        return {
            type: E.SET_KOREAN_NAME,
            payload: t
        }
    }, e.setManualCaptureError = function(t) {
        return {
            type: E.SET_MANUAL_CAPTURE_ERROR,
            payload: t
        }
    }, e.setNeedsBackSide = function(t) {
        return {
            type: E.SET_NEEDS_BACK_SIDE,
            payload: t
        }
    }, e.setPostStartTimestamp = K, e.setSelectedConsent = function(t) {
        return {
            type: E.SET_SELECTED_CONSENT,
            payload: t
        }
    }, e.setSelectedCountry = function(t) {
        return {
            type: E.SET_SELECTED_COUNTRY,
            payload: t
        }
    }, e.setSelectedId = function(t) {
        return {
            type: E.SET_SELECTED_ID,
            payload: t
        }
    }, e.setUploadedBackImage = function(t) {
        return {
            type: E.SET_UPLOADED_BACK_IMAGE,
            payload: t
        }
    }, e.setUploadedFrontImage = function(t) {
        return {
            type: E.SET_UPLOADED_FRONT_IMAGE,
            payload: t
        }
    }, e.setUserGovidPhoneCountryCollectedForHandoff = function(t) {
        return {
            type: E.SET_USER_GOVID_PHONE_COUNTRY_COLLECTED_FOR_HANDOFF,
            payload: t
        }
    }, e.setUserGovidPhoneNumberCollectedForHandoff = function(t) {
        return {
            type: E.SET_USER_GOVID_PHONE_NUMBER_COLLECTED_FOR_HANDOFF,
            payload: t
        }
    }, e.setUserPhoneNumber = function(t) {
        return {
            type: E.SET_USER_PHONE_NUMBER,
            payload: t
        }
    }, e.takePhoto = function(t) {
        return (o, n) => {
            o(U(!1));
            const c = n(),
                l = (0, T.getCameraRef)(c);
            if (null !== l) {
                o(x(!0));
                const n = t || (0, T.nextScreenNameSelector)(c),
                    s = (0, T.screenTypeSelector)(c) === I.FovScreenType.SELFIE_CAPTURE || (0, T.screenConfigSelector)(c).verification_step === I.FovFlowContext.SELFIE;
                if (s) {
                    const t = (0, T.screenConfigSelector)(c).animation_duration_ms || I.TOTAL_MILLISECONDS_FOR_CAPTURES,
                        _ = t / (I.NUM_SELFIES_TO_CAPTURE - 1);
                    (0, u.default)(0, t, _).forEach((t => {
                        setTimeout((() => {
                            o(P(l, s))
                        }), t)
                    })), setTimeout((() => {
                        o(P(l, s)).then((() => {
                            o(x(!1)), o((0, y.advanceToNextStep)(n))
                        }))
                    }), t)
                } else o(P(l, s)).then((() => {
                    o(x(!1)), o((0, y.advanceToNextStep)(n))
                }))
            }
        }
    };
    var n = r(d[2]),
        c = t(r(d[3])),
        u = t(r(d[4])),
        l = t(r(d[5])),
        s = r(d[6]),
        _ = r(d[7]),
        p = r(d[8]);

    function S() {
        const o = t(r(d[9]));
        return S = function() {
            return o
        }, o
    }
    var f = t(r(d[10])),
        E = r(d[11]),
        I = r(d[12]),
        T = r(d[13]),
        y = r(d[14]),
        v = r(d[15]),
        C = r(d[16]),
        F = r(d[17]),
        R = r(d[18]);
    const A = '/v2/mobile_handoff_notification',
        O = 'frontImage',
        N = 'backImage',
        D = 3,
        h = 1;

    function U(t) {
        return {
            type: E.SET_CAMERA_ANIMATION_COMPLETE,
            payload: t
        }
    }

    function w(t, o, n = !1) {
        return {
            type: E.SET_IMAGE_DATA_URI,
            payload: {
                imageDataUri: t,
                currentCaptureStep: o,
                isForSelfie: n
            }
        }
    }

    function x(t) {
        return {
            type: E.SET_IS_TAKING_PHOTO,
            payload: t
        }
    }

    function P(t, o) {
        return (n, c) => t.takePhoto().then((t => {
            n(w(t, (0, T.currentCaptureStepSelector)(c()), o))
        }))
    }

    function M() {
        return (0, s.isIos)() || (0, s.isAndroid)()
    }

    function L(t) {
        return {
            type: E.SET_IS_WAITING_FOR_MOBILE_HANDOFF,
            payload: t
        }
    }

    function b(t) {
        return {
            type: E.SET_MOBILE_HANDOFF_SUCCESS,
            payload: t
        }
    }

    function G(t) {
        return {
            type: E.SET_MOBILE_HANDOFF_DEEPLINK_URL,
            payload: t
        }
    }

    function V() {
        return (t, o) => {
            const n = (0, T.contextSelector)(o());
            t(L(!0)), S().default.post(`/api${A}`, {
                body: JSON.stringify({
                    user_context: n
                })
            }).then((() => {
                t(L(!1)), t(b(!0))
            })).catch((() => {
                t(L(!1)), t(b(!1))
            }))
        }
    }

    function k(t) {
        const o = {
                first_verification_step: I.VERIFICATION_STEPS.TYPE_GOVERNMENT_ID,
                is_mobile_handoff: !0,
                reason: 2
            },
            {
                guests: n,
                check_in: c,
                check_out: u,
                listing_id: l
            } = t;
        return Object.assign(o, {
            id: l,
            check_in: c,
            check_out: u,
            guests: n
        }), o
    }

    function B(t) {
        const n = `d/identity?${o().default.stringify(k(t))}`;
        return new l.default('identity', {
            data: {
                $deeplink_path: n
            },
            autoOpen: !1
        }).deepLinkUrl
    }

    function H(t) {
        window.open(t, '_blank')
    }

    function K() {
        return {
            type: E.SET_POST_START_TIMESTAMP,
            payload: {
                timeStamp: (new Date).getTime(),
                isPosting: !0,
                postError: !1
            }
        }
    }

    function $(t) {
        return {
            type: E.SET_GOV_ID_POST_ERROR,
            payload: t
        }
    }

    function q(t) {
        return {
            type: E.SET_SELFIE_POST_FAILED_INDEX,
            payload: t
        }
    }

    function z(t) {
        return {
            type: E.SET_IS_POSTING,
            payload: t
        }
    }

    function W() {
        return {
            type: E.SET_FLOW_COMPLETED
        }
    }

    function Y(t) {
        if (!t || !t.flow) return !1;
        switch (t.flow.flow_type) {
            case I.FovFlowType.GOV_ID_V1_SUCCESS:
            case I.FovFlowType.GOV_ID_V1_PENDING:
                return !0;
            default:
                return !1
        }
    }
    const j = {
        manual_capture: 'MANUAL',
        auto_capture: 'AUTO',
        upload: 'UPLOAD'
    };

    function Q(t, o, n, u) {
        const l = (0, T.selfieSubmissionKeySelector)(u),
            s = (0, T.freezeReasonSelector)(u),
            S = (0, T.contextSelector)(u),
            f = I.FovFlowContext.SELFIE,
            E = (0, T.captureMethodSelector)(u);
        (0, C.logSelfieUpload)({
            action: 4,
            page: n,
            image: t,
            index: o,
            captureMethod: E
        });
        const y = (0, F.logPostApiSessionStart)(S, f, t),
            A = {
                user_id: c.default.current().id,
                user_context: S,
                flow_context: f,
                verification_data: {
                    [l]: (0, _.getRawDataFromImageDataURI)(t),
                    BIOMETRICS_CONSENT: (0, T.selectedConsentSelector)(u) === R.ConsentToggleKey.REVIEW_METHOD_AUTOMATED ? (0, T.consentTermsConfigurationIdSelector)(u) : void 0,
                    capture_mode: j[E]
                },
                options: {
                    freeze_reason: s
                }
            };
        return v.ReinhardtApi.postVerificationForGovId(A, y).catch((() => ((0, C.logSubmitFailed)({
            page: n,
            verification: 3,
            index: o
        }), {
            failed: !0,
            index: o
        }))).finally((() => {
            (0, p.logSessionEnd)({
                sessionId: y,
                useSendBeacon: !0
            })
        }))
    }

    function X(t) {
        return {
            type: E.SET_IS_LOW_QUALITY_IMAGE_MODE,
            payload: t
        }
    }
}), "6de594", ["ba7a76", "e950a3", "3e4681", "06a99e", "4ac5e7", "4646ca", "e9b7bf", "ada572", "9e7031", "69a7c4", "c235f8", "1c37e6", "e3eb42", "48a86b", "97c0d4", "57b692", "8eb9ca", "f017de", "31ad2a"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const s = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm0 2.4-.34.2a22.58 22.58 0 0 1-10.3 3.55L5 6.97V17.5C5 24.33 9.72 28.86 15.71 29H16c6.13 0 11-4.56 11-11.5V6.97l-.35-.02a22.58 22.58 0 0 1-10.31-3.54L16 3.19zm7 7.39L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5 9.5-9.5z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcSystemVerified32', {
        defaultSize: 32
    });
    e.default = s
}), "6f526c", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getFirstScreen = v, e.handleLegalInfoSubmitted = function() {
        return (t, o) => {
            const s = o(),
                l = _.FovFlowContext.LEGAL_INFO,
                f = (0, p.contextSelector)(s),
                I = (0, p.reservationCodeSelector)(s),
                v = (0, p.legalInfoInputFieldNamesOnServerSelector)(s),
                M = (0, p.legalInfoInputValuesSelector)(s),
                O = (0, p.freezeReasonSelector)(s),
                P = {
                    context: l,
                    userContext: f,
                    verification_data: R(v, M),
                    reservation_confirmation_code: I,
                    freeze_reason: O
                };
            (0, E.logLegalInfoSubmitted)({
                page: (0, p.currentStepSelector)(s),
                selected_data: {
                    [_.LegalInfoField.COUNTRY_CODE]: M[_.LegalInfoField.COUNTRY_CODE]
                }
            });
            const D = (0, A.logPostApiSessionStart)(f, l),
                x = (0, p.screenConfigSelector)(s),
                {
                    polling: G,
                    timeout: w
                } = x;
            if (G && w) return u.ReinhardtApi.postVerification(P, D).then((() => {
                t((0, S.setPostStartTimestamp)()), T({
                    timeout: w,
                    poll_interval_ms: G.poll_interval_ms,
                    poll_start_after_ms: G.poll_start_after_ms
                }, ((o, n, s, l) => t(C(o, n, s, l))), ((o, n) => t(y(o, n))))
            })).finally((() => {
                (0, n.logSessionEnd)({
                    sessionId: D,
                    useSendBeacon: !0
                })
            }));
            t({
                type: c.SUBMIT_LEGAL_INFO,
                promise: u.ReinhardtApi.postVerification(P, D),
                meta: {
                    onFinish: F,
                    onSuccess: N,
                    onFailure: L
                }
            })
        }
    }, e.hideConfirmLegalNameErrorAlert = I, e.pollByPollingConfig = C, e.postVerificationForLegalNames = function() {
        return (t, o) => {
            t(I()), t((0, S.setPostStartTimestamp)());
            const F = o(),
                N = (0, p.currentStepSelector)(F),
                L = {
                    page: N,
                    verification: 2
                },
                R = (0, p.selectedCountrySelector)(F),
                T = _.FovFlowContext.CONFIRM_LEGAL_NAME,
                v = (0, p.freezeReasonSelector)(F),
                y = (0, p.reservationCodeSelector)(F),
                C = (0, p.contextSelector)(F);
            (0, E.logGovernmentIdUpload)({
                action: 4,
                page: N,
                country: R && R.country_code
            });
            const M = (0, A.logPostApiSessionStart)(C, T),
                O = (0, p.legalNameValuesSelector)(F),
                P = {
                    user_id: s.default.current().id,
                    user_context: C,
                    flow_context: T,
                    verification_data: {
                        FIRST_NAME: O.FIRST_NAME,
                        LAST_NAME: O.LAST_NAME,
                        PREFERRED_NAME: O.PREFERRED_NAME
                    },
                    options: {
                        freeze_reason: v,
                        reservation_confirmation_code: y,
                        in_guest_mode: !0
                    }
                };
            return u.ReinhardtApi.postVerificationForGovId(P, M).then((o => {
                l.default.emit('identity:legal_names', {
                    firstName: O.FIRST_NAME,
                    lastName: O.LAST_NAME,
                    preferredName: O.PREFERRED_NAME
                }), (0, E.logGovernmentIdUpload)({
                    action: 5,
                    page: N,
                    country: R && R.country_code,
                    uploadTime: Date.now() - (0, p.postTimestampSelector)(F)
                }), (0, S.isGovIdFlowCompleted)(o) && t((0, S.setFlowCompleted)()), t((0, S.setIsPosting)(!1)), t((0, f.advanceToNextFlow)(o))
            })).catch((() => {
                (0, E.logSubmitFailed)(L), t((0, S.setIsPosting)(!1)), t({
                    type: c.SHOW_CONFIRM_LEGAL_NAME_ERROR_ALERT
                })
            })).finally((() => {
                (0, n.logSessionEnd)({
                    sessionId: M,
                    useSendBeacon: !0
                })
            }))
        }
    }, e.setupPollingAndTimeout = T, e.takeAction = y, e.updateField = function(t, o) {
        return n = {
            [t]: o
        }, {
            type: c.UPDATE_LEGAL_INFO_FIELDS,
            payload: n
        };
        var n
    }, e.updateInputFieldNamesOnServer = function(t) {
        return {
            type: c.UPDATE_LEGAL_INFO_FIELD_NAMES_ON_SERVER,
            payload: t
        }
    }, e.updateLegalNameField = function(t, o) {
        return n = {
            [t]: o
        }, {
            type: c.UPDATE_LEGAL_NAME_FIELDS,
            payload: n
        };
        var n
    }, e.updateLegalNameValidity = function(t) {
        return {
            type: c.UPDATE_LEGAL_NAME_VALIDITY,
            payload: t
        }
    }, e.updateValidity = function(t) {
        return {
            type: c.UPDATE_LEGAL_INFO_VALIDITY,
            payload: t
        }
    };
    var o = r(d[1]),
        n = r(d[2]),
        s = t(r(d[3])),
        l = t(r(d[4])),
        c = r(d[5]),
        _ = r(d[6]),
        u = r(d[7]),
        p = r(d[8]),
        f = r(d[9]),
        S = r(d[10]),
        E = r(d[11]),
        A = r(d[12]);

    function I() {
        return {
            type: c.HIDE_CONFIRM_LEGAL_NAME_ERROR_ALERT
        }
    }

    function F(t) {
        (0, n.logSessionEnd)({
            sessionId: t,
            useSendBeacon: !0
        })
    }
    const N = () => {};

    function L() {
        (0, E.logSubmitFailed)({
            verification: 21
        })
    }

    function R(t, o) {
        return t.reduce(((t, n) => (t[n] = o[n], t)), {})
    }

    function T(t, o, n) {
        const {
            poll_interval_ms: s,
            poll_start_after_ms: l,
            timeout: c
        } = t, {
            time_ms: _,
            action: u,
            screen_name: p
        } = c;
        l < _ ? setTimeout((() => o(_, s, u, p)), l) : setTimeout((() => n(u, p)), _)
    }

    function v(t) {
        const {
            flow: o
        } = t;
        if (o ? .screens && o.screens.length > 0) {
            const t = Object.keys(o.screens[0])[0],
                n = o.screens[0][t];
            return {
                name: n.name,
                type: t,
                config: n
            }
        }
    }

    function y(t, o) {
        return n => {
            n((0, S.setIsPosting)(!1));
            const s = (0, f.actionHandlerByActionType)(t, o);
            s && n(s())
        }
    }

    function C(t, s, l, c) {
        return (_, E) => {
            const I = E(),
                F = (0, p.pollingConfigSelector)(I),
                N = () => {
                    Date.now() - (0, p.postTimestampSelector)(I) >= t ? _(y(l, c)) : setTimeout((() => _(C(t, s, l, c))), s)
                },
                L = (0, p.contextSelector)(I),
                R = F.poll_flow_context,
                T = (0, A.logGetApiSessionStart)(L, R);
            return u.ReinhardtApi.getVerification({
                userContext: L,
                flowContext: R,
                freezeReason: (0, p.freezeReasonSelector)(I),
                reservationConfirmationCode: (0, p.reservationCodeSelector)(I),
                sessionId: T
            }).then((t => {
                const o = v(t),
                    n = (0, p.currentStepSelector)(I);
                if (o && o.name !== n)
                    if (u.SSNApi.isSuccess(t)) {
                        _((0, S.setFlowCompleted)());
                        const o = (0, p.loaderConfigSelector)(I),
                            n = o ? .success_transition_delay_ms;
                        setTimeout((() => {
                            _((0, S.setIsPosting)(!1)), _((0, f.advanceToNextFlow)(t))
                        }), n)
                    } else _((0, S.setIsPosting)(!1)), _((0, f.advanceToNextFlow)(t));
                else N()
            })).catch((() => {
                (0, o.airdogCount)('account_fov.get_verifications.poll.error'), N()
            })).finally((() => {
                (0, n.logSessionEnd)({
                    sessionId: T,
                    useSendBeacon: !0
                })
            }))
        }
    }
}), "70edee", ["ba7a76", "3e4681", "9e7031", "06a99e", "abc3e4", "1c37e6", "e3eb42", "57b692", "48a86b", "97c0d4", "6de594", "8eb9ca", "f017de"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.shimGetDisplayMedia = function(t, n) {
        if (t.navigator.mediaDevices && 'getDisplayMedia' in t.navigator.mediaDevices) return;
        if (!t.navigator.mediaDevices) return;
        t.navigator.mediaDevices.getDisplayMedia = function(o) {
            if (!o || !o.video) {
                const t = new DOMException("getDisplayMedia without video constraints is undefined");
                return t.name = 'NotFoundError', t.code = 8, Promise.reject(t)
            }
            return !0 === o.video ? o.video = {
                mediaSource: n
            } : o.video.mediaSource = n, t.navigator.mediaDevices.getUserMedia(o)
        }
    }
}), "7596e5", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var v = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const t = (0, v(r(d[1])).default)({
        svgContents: "<path d=\"M24 24v6h-2v-2.4l-.13.22A7 7 0 0 1 9.29 26h2.13a5 5 0 0 0 9.16 0H18v-2zM6 5v2H3v18h5v2H3a2 2 0 0 1-2-1.85V7a2 2 0 0 1 1.85-2H3zm23 0a2 2 0 0 1 2 1.85V25a2 2 0 0 1-1.85 2H26v-2h3V7h-5V5zm-3 14v2h-8v-2zm-16-8a3 3 0 0 1 2.5 4.67A5 5 0 0 1 15 20h-2a3 3 0 0 0-2-2.83V14a1 1 0 0 0-2-.12v3.29A3 3 0 0 0 7 20H5a5 5 0 0 1 2.5-4.33A3 3 0 0 1 10 11zm16 4v2h-8v-2zm0-4v2h-8v-2zM16 1a7 7 0 0 1 6.71 5h-2.13a5 5 0 0 0-9.16 0H14v2H8V2h2v2.4l.13-.22A7 7 0 0 1 16 1z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcSystemFlipId32', {
        defaultSize: 32
    });
    e.default = t
}), "76cc9e", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var o = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.USE_HODOR_FOR_AUTH = void 0, e.chinaMainlandGuestEnabled = function() {
        return (0, s.isEligibleForMarketLocalization)(l.MarketLocalizationSegment.CHINA_MAINLAND_GUEST)
    }, e.isGlobalPhoneLoginEnabled = function() {
        const o = t.default.get('layout-init') ? .tracking_context ? .app;
        return 'a4w-traveler-signup' !== o
    }, e.shouldUseAppleSDK = function() {
        return n.default.getBootstrap('users_soa_web_oauth_apple_force_in') || n.default.getBootstrap('users_soa_web_oauth_apple_launch')
    }, e.shouldUseFacebookSDK = function() {
        return n.default.getBootstrap('users_soa_web_oauth_facebook_force_in') || n.default.getBootstrap('users_soa_web_oauth_facebook_launch') && 'treatment' === _.default.findTreatment('users_soa_web_oauth_facebook')
    }, e.shouldUseGoogleSDK = function() {
        return n.default.getBootstrap('users_soa_web_oauth_google_force_in') || n.default.getBootstrap('users_soa_web_oauth_google_launch') && 'treatment' === _.default.findTreatment('users_soa_web_oauth_google_v10')
    }, e.shouldUseHodorForLogin = function(o) {
        if ('write' === (0, u.default)()[f]) return c.WRITE_ON;
        if ('sxs' === (0, u.default)()[f]) return c.SXS_ON;
        if (n.default.getBootstrap('force_in_soa_web_login')) return c.WRITE_ON;
        if (0 === o || 11 === o) return c.WRITE_ON;
        return c.HODOR_OFF
    }, e.shouldUseHodorForSignup = function(o) {
        const t = (0, u.default)()[O];
        if (0 === o || 1 === o || 11 === o || 2 === o || 5 === o || 22 === o || 4 === o || 30 === o) return c.WRITE_ON;
        if ('treatment' === t) return c.SXS_ON;
        if (t === o ? .toString() && void 0 !== o) return c.SXS_ON;
        return 'control' === t ? c.HODOR_OFF : 'hodor_only' === t ? c.WRITE_ON : n.default.getBootstrap('hodor_sxs_enabled') ? c.SXS_ON : n.default.getBootstrap('force_in_hodor_signup_for_web') ? c.WRITE_ON : c.HODOR_OFF
    };
    var t = o(r(d[1])),
        _ = (o(r(d[2])), o(r(d[3]))),
        n = o(r(d[4])),
        u = o(r(d[5])),
        s = r(d[6]),
        l = r(d[7]);
    const f = 'forceUseHodorForLogin',
        O = 'forceHodorSignupSxs';
    let c = e.USE_HODOR_FOR_AUTH = (function(o) {
        return o[o.SXS_ON = 0] = "SXS_ON", o[o.WRITE_ON = 1] = "WRITE_ON", o[o.HODOR_OFF = 2] = "HODOR_OFF", o
    })({})
}), "7c1173", ["ba7a76", "ef2bc3", "fc0842", "dcc72a", "c235f8", "a7c4ef", "1d1d67", "9731f5"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isChinaMainlandGuestCore = function({
        hostname: t
    }) {
        return t.startsWith('zh-cn') || t.endsWith('.cn')
    }, e.isHongkongGuestCore = function({
        hostname: t,
        countryOverride: n
    }) {
        return t.endsWith('.com.hk') || t.startsWith('zh-t.next') && 'HK' === n
    }, e.isJapanGuestCore = function({
        hostname: t
    }) {
        return t.endsWith('.jp') || t.startsWith('ja.')
    }, e.isKoreaGuestCore = function({
        hostname: t
    }) {
        return t.endsWith('.co.kr') || t.startsWith('ko.')
    }, e.isSimplifiedChineseSpeakingUserCore = function({
        language: t,
        hostname: n
    }) {
        if (t) return 'zh' === t;
        if (n) return n.startsWith('zh-cn') || n.endsWith('.cn') || n.startsWith('zh.');
        return !1
    }, e.isTaiwanGuestCore = function({
        hostname: t,
        countryOverride: n
    }) {
        return t.endsWith('.com.tw') || t.startsWith('zh-t.next') && 'TW' === n
    }
}), "7dd7ad", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const v = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M29 5a2 2 0 0 1 2 1.85V25a2 2 0 0 1-1.85 2H3a2 2 0 0 1-2-1.85V7a2 2 0 0 1 1.85-2H3zm0 2H3v18h26zm-3 12v2h-8v-2zm-16-8a3 3 0 0 1 2.5 4.67A5 5 0 0 1 15 20h-2a3 3 0 0 0-2-2.83V14a1 1 0 0 0-2-.12v3.29A3 3 0 0 0 7 20H5a5 5 0 0 1 2.5-4.33A3 3 0 0 1 10 11zm16 4v2h-8v-2zm0-4v2h-8v-2z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcSystemIdCard32', {
        defaultSize: 32
    });
    e.default = v
}), "819da9", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    var t = r(d[0]).default,
        n = r(d[1]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.removeExtmapAllowMixed = function(t, n) {
        if (!t.RTCPeerConnection) return;
        if ('chrome' === n.browser && n.version >= 71) return;
        if ('safari' === n.browser && n.version >= 605) return;
        const o = t.RTCPeerConnection.prototype.setRemoteDescription;
        t.RTCPeerConnection.prototype.setRemoteDescription = function(n) {
            if (n && n.sdp && -1 !== n.sdp.indexOf('\na=extmap-allow-mixed')) {
                const o = n.sdp.split('\n').filter((t => 'a=extmap-allow-mixed' !== t.trim())).join('\n');
                t.RTCSessionDescription && n instanceof t.RTCSessionDescription ? arguments[0] = new t.RTCSessionDescription({
                    type: n.type,
                    sdp: o
                }) : n.sdp = o
            }
            return o.apply(this, arguments)
        }
    }, e.shimAddIceCandidateNullOrEmpty = function(t, n) {
        if (!t.RTCPeerConnection || !t.RTCPeerConnection.prototype) return;
        const o = t.RTCPeerConnection.prototype.addIceCandidate;
        if (!o || 0 === o.length) return;
        t.RTCPeerConnection.prototype.addIceCandidate = function() {
            return arguments[0] ? ('chrome' === n.browser && n.version < 78 || 'firefox' === n.browser && n.version < 68 || 'safari' === n.browser) && arguments[0] && '' === arguments[0].candidate ? Promise.resolve() : o.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
        }
    }, e.shimConnectionState = function(t) {
        if (!t.RTCPeerConnection || 'connectionState' in t.RTCPeerConnection.prototype) return;
        const n = t.RTCPeerConnection.prototype;
        Object.defineProperty(n, 'connectionState', {
            get() {
                return {
                    completed: 'connected',
                    checking: 'connecting'
                }[this.iceConnectionState] || this.iceConnectionState
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n, 'onconnectionstatechange', {
            get() {
                return this._onconnectionstatechange || null
            },
            set(t) {
                this._onconnectionstatechange && (this.removeEventListener('connectionstatechange', this._onconnectionstatechange), delete this._onconnectionstatechange), t && this.addEventListener('connectionstatechange', this._onconnectionstatechange = t)
            },
            enumerable: !0,
            configurable: !0
        }), ['setLocalDescription', 'setRemoteDescription'].forEach((t => {
            const o = n[t];
            n[t] = function() {
                return this._connectionstatechangepoly || (this._connectionstatechangepoly = t => {
                    const n = t.target;
                    if (n._lastConnectionState !== n.connectionState) {
                        n._lastConnectionState = n.connectionState;
                        const o = new Event('connectionstatechange', t);
                        n.dispatchEvent(o)
                    }
                    return t
                }, this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly)), o.apply(this, arguments)
            }
        }))
    }, e.shimMaxMessageSize = function(t, n) {
        if (!t.RTCPeerConnection) return;
        'sctp' in t.RTCPeerConnection.prototype || Object.defineProperty(t.RTCPeerConnection.prototype, 'sctp', {
            get() {
                return void 0 === this._sctp ? null : this._sctp
            }
        });
        const c = function(t) {
                if (!t || !t.sdp) return !1;
                const n = o.default.splitSections(t.sdp);
                return n.shift(), n.some((t => {
                    const n = o.default.parseMLine(t);
                    return n && 'application' === n.kind && -1 !== n.protocol.indexOf('SCTP')
                }))
            },
            s = function(t) {
                const n = t.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                if (null === n || n.length < 2) return -1;
                const o = parseInt(n[1], 10);
                return o != o ? -1 : o
            },
            p = function(t) {
                let o = 65536;
                return 'firefox' === n.browser && (o = n.version < 57 ? -1 === t ? 16384 : 2147483637 : n.version < 60 ? 57 === n.version ? 65535 : 65536 : 2147483637), o
            },
            f = function(t, c) {
                let s = 65536;
                'firefox' === n.browser && 57 === n.version && (s = 65535);
                const p = o.default.matchPrefix(t.sdp, 'a=max-message-size:');
                return p.length > 0 ? s = parseInt(p[0].substr(19), 10) : 'firefox' === n.browser && -1 !== c && (s = 2147483637), s
            },
            l = t.RTCPeerConnection.prototype.setRemoteDescription;
        t.RTCPeerConnection.prototype.setRemoteDescription = function() {
            if (this._sctp = null, 'chrome' === n.browser && n.version >= 76) {
                const {
                    sdpSemantics: t
                } = this.getConfiguration();
                'plan-b' === t && Object.defineProperty(this, 'sctp', {
                    get() {
                        return void 0 === this._sctp ? null : this._sctp
                    },
                    enumerable: !0,
                    configurable: !0
                })
            }
            if (c(arguments[0])) {
                const t = s(arguments[0]),
                    n = p(t),
                    o = f(arguments[0], t);
                let c;
                c = 0 === n && 0 === o ? Number.POSITIVE_INFINITY : 0 === n || 0 === o ? Math.max(n, o) : Math.min(n, o);
                const l = {};
                Object.defineProperty(l, 'maxMessageSize', {
                    get: () => c
                }), this._sctp = l
            }
            return l.apply(this, arguments)
        }
    }, e.shimParameterlessSetLocalDescription = function(t, n) {
        if (!t.RTCPeerConnection || !t.RTCPeerConnection.prototype) return;
        const o = t.RTCPeerConnection.prototype.setLocalDescription;
        if (!o || 0 === o.length) return;
        t.RTCPeerConnection.prototype.setLocalDescription = function() {
            let t = arguments[0] || {};
            if ('object' != typeof t || t.type && t.sdp) return o.apply(this, arguments);
            if (t = {
                    type: t.type,
                    sdp: t.sdp
                }, !t.type) switch (this.signalingState) {
                case 'stable':
                case 'have-local-offer':
                case 'have-remote-pranswer':
                    t.type = 'offer';
                    break;
                default:
                    t.type = 'answer'
            }
            if (t.sdp || 'offer' !== t.type && 'answer' !== t.type) return o.apply(this, [t]);
            return ('offer' === t.type ? this.createOffer : this.createAnswer).apply(this).then((t => o.apply(this, [t])))
        }
    }, e.shimRTCIceCandidate = function(t) {
        if (!t.RTCIceCandidate || t.RTCIceCandidate && 'foundation' in t.RTCIceCandidate.prototype) return;
        const n = t.RTCIceCandidate;
        t.RTCIceCandidate = function(t) {
            if ('object' == typeof t && t.candidate && 0 === t.candidate.indexOf('a=') && ((t = JSON.parse(JSON.stringify(t))).candidate = t.candidate.substr(2)), t.candidate && t.candidate.length) {
                const c = new n(t),
                    s = o.default.parseCandidate(t.candidate),
                    p = Object.assign(c, s);
                return p.toJSON = function() {
                    return {
                        candidate: p.candidate,
                        sdpMid: p.sdpMid,
                        sdpMLineIndex: p.sdpMLineIndex,
                        usernameFragment: p.usernameFragment
                    }
                }, p
            }
            return new n(t)
        }, t.RTCIceCandidate.prototype = n.prototype, c.wrapPeerConnectionEvent(t, 'icecandidate', (n => (n.candidate && Object.defineProperty(n, 'candidate', {
            value: new t.RTCIceCandidate(n.candidate),
            writable: 'false'
        }), n)))
    }, e.shimRTCIceCandidateRelayProtocol = function(t) {
        if (!t.RTCIceCandidate || t.RTCIceCandidate && 'relayProtocol' in t.RTCIceCandidate.prototype) return;
        c.wrapPeerConnectionEvent(t, 'icecandidate', (t => {
            if (t.candidate) {
                const n = o.default.parseCandidate(t.candidate.candidate);
                'relay' === n.type && (t.candidate.relayProtocol = {
                    0: 'tls',
                    1: 'tcp',
                    2: 'udp'
                }[n.priority >> 24])
            }
            return t
        }))
    }, e.shimSendThrowTypeError = function(t) {
        if (!t.RTCPeerConnection || !('createDataChannel' in t.RTCPeerConnection.prototype)) return;

        function n(t, n) {
            const o = t.send;
            t.send = function() {
                const c = arguments[0],
                    s = c.length || c.size || c.byteLength;
                if ('open' === t.readyState && n.sctp && s > n.sctp.maxMessageSize) throw new TypeError('Message too large (can send a maximum of ' + n.sctp.maxMessageSize + ' bytes)');
                return o.apply(t, arguments)
            }
        }
        const o = t.RTCPeerConnection.prototype.createDataChannel;
        t.RTCPeerConnection.prototype.createDataChannel = function() {
            const t = o.apply(this, arguments);
            return n(t, this), t
        }, c.wrapPeerConnectionEvent(t, 'datachannel', (t => (n(t.channel, t.target), t)))
    };
    var o = n(r(d[2])),
        c = t(r(d[3]))
}), "8a4e57", ["45f788", "ba7a76", "24a625", "9cdad4"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.shimGetDisplayMedia = function(t, o) {
        if (t.navigator.mediaDevices && 'getDisplayMedia' in t.navigator.mediaDevices) return;
        if (!t.navigator.mediaDevices) return;
        if ('function' != typeof o) return void console.error("shimGetDisplayMedia: getSourceId argument is not a function");
        t.navigator.mediaDevices.getDisplayMedia = function(n) {
            return o(n).then((o => {
                const v = n.video && n.video.width,
                    c = n.video && n.video.height,
                    s = n.video && n.video.frameRate;
                return n.video = {
                    mandatory: {
                        chromeMediaSource: 'desktop',
                        chromeMediaSourceId: o,
                        maxFrameRate: s || 3
                    }
                }, v && (n.video.mandatory.maxWidth = v), c && (n.video.mandatory.maxHeight = c), t.navigator.mediaDevices.getUserMedia(n)
            }))
        }
    }
}), "8d8a4f", []);
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

    function c() {
        const t = r(d[3]);
        return c = function() {
            return t
        }, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.logCameraError = function({
        verification: t,
        page: n,
        error: o
    }) {
        f({
            action: 16,
            actor: 3,
            operation: 8,
            verification: t,
            extra_info: {
                page: n,
                error: o
            }
        })
    }, e.logClick = function({
        page: t,
        element: n,
        selected_data: o,
        queue: c,
        verification: l,
        element_action: u,
        element_screen_name: f
    } = {}) {
        p({
            page: t,
            element: n,
            queue: c,
            selected_data: o,
            element_action: u,
            element_screen_name: f,
            operation: 2,
            verification: l
        })
    }, e.logClientAttemptError = function({
        verification: t,
        page: n,
        error: o
    } = {}) {
        f({
            action: 4,
            actor: 3,
            operation: 3,
            verification: t,
            extra_info: {
                page: n,
                error: o
            }
        })
    }, e.logFlowStart = function({
        user_context: t
    } = {}) {
        f({
            action: 1,
            actor: 3,
            operation: 1,
            extra_info: {
                flow_start: {
                    user_context: t
                },
                page: 'flow_start'
            }
        })
    }, e.logGovernmentIdUpload = function({
        action: t,
        page: n,
        frontImage: o,
        backImage: c,
        country: l,
        documentType: u,
        uploadTime: p,
        maxAttemptReached: _,
        captureMethod: v,
        blurriness: x
    } = {}) {
        f({
            action: t,
            actor: 1,
            operation: 17,
            verification: 2,
            extra_info: {
                page: n,
                government_id_capture: s(o, c, l, u, p, v, x),
                max_attempt_reached: _
            }
        })
    }, e.logHelpLinkClick = function(t) {
        f({
            action: 4,
            actor: 1,
            operation: 2,
            extra_info: { ...t,
                element: u.Element.BUTTON_HELP
            }
        })
    }, e.logImpression = function({
        page: t,
        element: n,
        verification: o
    } = {}) {
        f({
            action: 2,
            actor: 3,
            operation: 1,
            extra_info: {
                page: t,
                element: n
            },
            verification: o
        })
    }, e.logLegalInfoSubmitted = function({
        page: t,
        selected_data: n
    } = {}) {
        f({
            action: 5,
            actor: 1,
            operation: 17,
            verification: 21,
            extra_info: {
                page: t,
                selected_data: n
            }
        })
    }, e.logSelect = function({
        page: t,
        element: n,
        selected_data: o
    } = {}) {
        p({
            page: t,
            element: n,
            selected_data: o,
            operation: 4
        })
    }, e.logSelfieUpload = function({
        action: t,
        page: n,
        image: o,
        index: c,
        captureMethod: l
    } = {}) {
        f({
            action: t,
            actor: 1,
            operation: 17,
            verification: 3,
            extra_info: {
                page: n,
                selfie_capture: _(o, c, l)
            }
        })
    }, e.logSubmit = function({
        page: t,
        verification: n
    } = {}) {
        f({
            action: 5,
            actor: 1,
            operation: 17,
            verification: n,
            extra_info: {
                page: t
            }
        })
    }, e.logSubmitFailed = function({
        page: t,
        verification: n,
        index: o
    } = {}) {
        f({
            action: 15,
            actor: 3,
            operation: 17,
            verification: n,
            extra_info: {
                page: t,
                index: o
            }
        })
    }, e.logUniversalComponentActionEvent = function(t, n, u = 2) {
        l.default.logJitneyEvent({
            schema: o().UniversalComponentActionEvent,
            event_data: {
                logging_id: t,
                ancestor_logging_ids: [],
                ancestor_uuids: [],
                method: '',
                uuid: (0, c().v4)(),
                event_data: JSON.stringify(n),
                event_data_schema: "Identity.v1.FovUniversalClickData",
                operation: u
            }
        })
    }, e.logUnsupportedIdType = function({
        page: t,
        element: n,
        idType: o,
        country: c,
        otherIdTypeText: l
    } = {}) {
        f({
            action: 4,
            actor: 1,
            operation: 17,
            verification: 2,
            extra_info: {
                page: t,
                element: n,
                idType: o,
                country: c,
                otherIdTypeText: l
            }
        })
    };
    var l = t(r(d[4])),
        u = r(d[5]);

    function f({
        verification: t,
        action: o,
        actor: c,
        operation: u,
        extra_info: f = {},
        queue: p
    } = {}) {
        const _ = {
            schema: n().IdentitySemanticEvent,
            event_data: {
                action: o,
                actor: c,
                operation: u,
                verification: t,
                extra_info: JSON.stringify(f)
            },
            queue: p
        };
        l.default.logJitneyEvent(_)
    }

    function p({
        page: t,
        element: n,
        element_action: o,
        element_screen_name: c,
        operation: l,
        selected_data: u,
        queue: p,
        verification: _
    } = {}) {
        f({
            action: 4,
            actor: 1,
            operation: l,
            extra_info: {
                page: t,
                element: n,
                selected_data: u,
                element_action: o,
                element_screen_name: c
            },
            queue: p,
            verification: _
        })
    }

    function _(t, n, o) {
        return {
            image_file_size: (0, u.getImageFileSize)(t),
            index: n,
            capture_method: o
        }
    }

    function s(t, n, o, c, l, f, p) {
        return {
            front_image_file_size: (0, u.getImageFileSize)(t),
            back_image_file_size: (0, u.getImageFileSize)(n),
            country: o,
            document_type: c,
            upload_time_ms: l,
            capture_method: f,
            blurriness: p
        }
    }
}), "8eb9ca", ["ba7a76", "319525", "59c871", "305dd5", "c8b97a", "f017de"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var n = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MAX_NAME_LENGTH = void 0, e.localizedMessages = function() {
        return {
            password: {
                required: t.default.t('validation.failure.password_required'),
                minlength: t.default.t('validation.failure.password_too_short', {
                    smart_count: o
                }),
                maxlength: t.default.t('validation.failure.password_too_long', {
                    smart_count: l
                }),
                forbiddenContentCheck: t.default.t('users.password_contains_forbidden_content'),
                forbiddenContentCheckPhone: t.default.t('validation.failure.password_contains_forbidden_content_for_national_number'),
                forbiddenNameCheck: t.default.t('validation.failure.password_contains_forbidden_name'),
                strengthCheck: t.default.t('users.validation.failure.password_contains_forbidden_content_v2')
            },
            email: {
                required: t.default.t('validation.failure.email_required'),
                email: t.default.t('validation.failure.email_invalid')
            },
            national_number: {
                required: t.default.t('validation.failure.phone_number_required'),
                checkValidPhoneNumber: t.default.t('validation.failure.phone_number_invalid')
            },
            country_code: {
                required: t.default.t('a4w.sso.signup_login.generic_error')
            },
            first_name: {
                required: t.default.t('validation.failure.first_name_required'),
                maxlength: t.default.t('validation.failure.first_name_too_long', {
                    smart_count: _
                }),
                checkValidName: t.default.t('validation.failure.first_name_only_has_invalid_characters')
            },
            first_name_preferred: {
                maxlength: t.default.t('validation.failure.first_name_too_long', {
                    smart_count: _
                }),
                checkValidPreferredName: t.default.t('validation.failure.first_name_only_has_invalid_characters')
            },
            last_name: {
                required: t.default.t('validation.failure.last_name_required'),
                maxlength: t.default.t('validation.failure.last_name_too_long', {
                    smart_count: _
                }),
                checkValidName: t.default.t('validation.failure.last_name_only_has_invalid_characters')
            },
            birthday_day: {
                required: t.default.t('validation.failure.birthday_required')
            },
            birthday_month: {
                required: t.default.t('validation.failure.birthday_required')
            },
            birthday_year: {
                required: t.default.t('validation.failure.birthday_required')
            },
            geetest_challenge: {
                required: t.default.t('validation.failure.captcha_validation_required')
            },
            geetest_validate: {
                required: t.default.t('validation.failure.captcha_validation_required')
            },
            geetest_seccode: {
                required: t.default.t('validation.failure.captcha_validation_required')
            },
            verification_code: {
                required: t.default.t('validation.failure.confirmation_code_required')
            },
            password_confirmation: {
                required: t.default.t('validation.failure.password_confirmation_required'),
                checkConfirmPassword: t.default.t('validation.failure.password_confirmation_doesnt_match'),
                checkConfirmPasswordForSignup: t.default.t('validation.failure.password_confirmation_doesnt_match')
            },
            success: t.default.t('validation.success'),
            collection_of_personal_information: {
                agreedToCollectionOfPersonalInformation: t.default.t('signup_login.tos.please_agree_to_continue')
            },
            overseas_transfer_of_personal_data: {
                agreedToOverseasTransferOfPersonalData: t.default.t('signup_login.tos.please_agree_to_continue')
            },
            china_mandatory_tos: {
                agreedToChinaMandatoryTOS: t.default.t('signup_login.tos.please_agree_to_continue')
            }
        }
    }, e.validationRules = void 0;
    var t = n(r(d[1]));
    const o = 8,
        l = 128,
        _ = e.MAX_NAME_LENGTH = 45,
        u = {
            first_name: {
                required: !0,
                maxlength: _,
                checkValidName: !0
            },
            first_name_preferred: {
                required: !1,
                maxlength: _,
                checkValidName: !0
            },
            last_name: {
                required: !0,
                maxlength: _,
                checkValidName: !0
            },
            email: {
                required: !0,
                email: !0
            },
            password: {
                required: !0,
                minlength: o,
                maxlength: l,
                forbiddenContentCheck: !0,
                strengthCheck: !0
            },
            password_confirmation: {
                required: !0,
                checkConfirmPasswordForSignup: !0
            },
            birthday_year: {
                required: !0
            },
            birthday_month: {
                required: !0
            },
            birthday_day: {
                required: !0
            },
            collection_of_personal_information: {
                agreedToCollectionOfPersonalInformation: !0
            }
        },
        s = {
            password: {
                required: !0,
                minlength: o,
                maxlength: l,
                forbiddenContentCheckPhone: !0,
                strengthCheck: !0
            }
        },
        h = {
            first_name: 'required',
            last_name: 'required',
            national_number: {
                required: !0,
                checkValidPhoneNumber: !0
            },
            birthday_year: {
                required: !0
            },
            birthday_month: {
                required: !0
            },
            birthday_day: {
                required: !0
            },
            collection_of_personal_information: {
                agreedToCollectionOfPersonalInformation: !0
            }
        },
        c = { ...h,
            ...s
        },
        f = {
            first_name: {
                required: !0,
                maxlength: _,
                checkValidName: !0
            },
            first_name_preferred: {
                required: !1,
                maxlength: _,
                checkValidPreferredName: !0
            },
            last_name: {
                required: !0,
                maxlength: _,
                checkValidName: !0
            },
            email: {
                required: !0,
                email: !0
            },
            birthday_year: {
                required: !0
            },
            birthday_month: {
                required: !0
            },
            birthday_day: {
                required: !0
            },
            collection_of_personal_information: {
                agreedToCollectionOfPersonalInformation: !0
            }
        },
        q = {
            country_code: {
                required: !0
            },
            national_number: {
                required: !0,
                checkValidPhoneNumber: !0
            },
            verification_code: {
                required: !0
            }
        };
    e.validationRules = {
        email_login: {
            email: {
                required: !0,
                email: !0,
                maxlength: 255
            },
            password: {
                required: !0,
                minlength: 5
            }
        },
        account_lookup: {
            email: {
                required: !0,
                email: !0,
                maxlength: 255
            }
        },
        phone_login: {
            national_number: {
                required: !0,
                checkValidPhoneNumber: !0,
                maxlength: 20
            },
            password: {
                required: !0,
                minlength: 5
            }
        },
        otp_phone_login: {
            national_number: {
                required: !0,
                checkValidPhoneNumber: !0
            },
            verification_code: {
                required: !0
            }
        },
        otp_phone_login_phone: {
            country_code: {
                required: !0
            },
            national_number: {
                required: !0,
                checkValidPhoneNumber: !0
            }
        },
        email_signup: u,
        email_signup_with_captcha: { ...u,
            geetest_challenge: {
                required: !0
            },
            geetest_validate: {
                required: !0
            },
            geetest_seccode: {
                required: !0
            }
        },
        email_signup_with_otp_phone: { ...q,
            email: {
                required: !0,
                email: !0,
                maxlength: 255
            },
            password: {
                required: !0,
                minlength: 5
            }
        },
        email_signup_with_otp_phone_p4: { ...q,
            email: {
                required: !0,
                email: !0,
                maxlength: 255
            },
            password: {
                required: !0,
                minlength: 5
            },
            first_name: {
                required: !0,
                maxlength: _,
                checkValidName: !0
            },
            last_name: {
                required: !0,
                maxlength: _,
                checkValidName: !0
            }
        },
        phone_signup: { ...c
        },
        global_phone_signup: { ...c,
            email: {
                required: !0,
                email: !0
            }
        },
        global_phone_signup_no_password: { ...h,
            email: {
                required: !0,
                email: !0
            }
        },
        china_phone_signup: { ...c,
            verification_code: {
                required: !0
            }
        },
        china_email_account_step_signup: {
            email: {
                required: !0,
                email: !0
            },
            password: {
                required: !0,
                minlength: o,
                maxlength: l,
                forbiddenContentCheck: !0,
                strengthCheck: !0
            },
            geetest_challenge: {
                required: !0
            },
            geetest_validate: {
                required: !0
            },
            geetest_seccode: {
                required: !0
            }
        },
        china_email_account_step_signup_without_captcha: {
            email: {
                required: !0,
                email: !0
            },
            password: {
                required: !0,
                minlength: o,
                maxlength: l,
                forbiddenContentCheck: !0,
                strengthCheck: !0
            }
        },
        china_phone_account_step_signup: {
            national_number: {
                required: !0,
                checkValidPhoneNumber: !0
            },
            verification_code: {
                required: !0
            },
            password: {
                required: !0,
                minlength: o,
                maxlength: l,
                forbiddenNameCheck: !0,
                strengthCheck: !0
            }
        },
        china_profile_step_signup: {
            first_name: 'required',
            last_name: 'required',
            birthday_year: {
                required: !0
            },
            birthday_month: {
                required: !0
            },
            birthday_day: {
                required: !0
            },
            password: {
                required: !0,
                minlength: o,
                maxlength: l,
                forbiddenNameCheck: !0,
                strengthCheck: !0
            }
        },
        china_profile_with_email_step_light_signup: {
            first_name: 'required',
            last_name: 'required',
            birthday_year: {
                required: !0
            },
            birthday_month: {
                required: !0
            },
            birthday_day: {
                required: !0
            },
            password: {
                required: !0,
                minlength: o,
                maxlength: l,
                forbiddenNameCheck: !0,
                strengthCheck: !0
            },
            email: {
                required: !0,
                email: !0
            }
        },
        lsp_signup: {
            email: {
                required: !0,
                email: !0
            },
            password: {
                required: !0,
                minlength: o,
                maxlength: l,
                forbiddenContentCheck: !0,
                strengthCheck: !0
            },
            national_number: {
                required: !0,
                checkValidPhoneNumber: !0,
                maxlength: 20
            },
            verification_code: {
                required: !0
            },
            first_name: 'required',
            last_name: 'required',
            birthday_year: {
                required: !0
            },
            birthday_month: {
                required: !0
            },
            birthday_day: {
                required: !0
            }
        },
        social_signup: {
            first_name: {
                required: !0,
                maxlength: _,
                checkValidName: !0
            },
            last_name: {
                required: !0,
                maxlength: _,
                checkValidName: !0
            },
            email: {
                required: !0,
                email: !0
            },
            national_number: {
                required: !0,
                checkValidPhoneNumber: !0
            },
            verification_code: {
                required: !0
            },
            birthday_year: {
                required: !0
            },
            birthday_month: {
                required: !0
            },
            birthday_day: {
                required: !0
            },
            password: {
                required: !0,
                minlength: o,
                maxlength: l,
                strengthCheck: !0
            }
        },
        social_signup_form: { ...f
        },
        naver_social_signup_form: { ...f,
            overseas_transfer_of_personal_data: {
                agreedToOverseasTransferOfPersonalData: !0
            }
        },
        china_signup_with_otp_phone: { ...q
        },
        china_signup_with_otp_phone_p4: { ...q,
            email: {
                required: !0,
                email: !0,
                maxlength: 255
            },
            first_name: {
                required: !0,
                maxlength: _,
                checkValidName: !0
            },
            last_name: {
                required: !0,
                maxlength: _,
                checkValidName: !0
            }
        },
        phone_confirmation_code: {
            verification_code: {
                required: !0
            }
        },
        confirmation_email: {
            email: {
                required: !0,
                email: !0,
                maxlength: 255
            }
        },
        forgot_password_email: {
            email: {
                required: !0,
                email: !0,
                maxlength: 255
            }
        },
        forgot_password_phone: {
            national_number: {
                required: !0,
                checkValidPhoneNumber: !0,
                maxlength: 20
            }
        },
        reset_password: {
            password: {
                required: !0,
                minlength: o,
                maxlength: l,
                strengthCheck: !0
            },
            password_confirmation: {
                required: !0,
                checkConfirmPassword: !0
            }
        },
        china_mandatory_tos_checkbox: {
            china_mandatory_tos: {
                agreedToChinaMandatoryTOS: !0
            }
        }
    }
}), "91ea05", ["ba7a76", "a9f4b1"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const z = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M22 1a5 5 0 0 1 5 5v20a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V6a5 5 0 0 1 5-5zm-6 24a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm5-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm10-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm10-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcCompactPhone16', {
        defaultSize: 16
    });
    e.default = z
}), "952bc1", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MarketLocalizationSegment = void 0;
    e.MarketLocalizationSegment = (function(_) {
        return _[_.SIMPLIFIED_CHINESE_SPEAKING_GUEST = 0] = "SIMPLIFIED_CHINESE_SPEAKING_GUEST", _[_.CHINA_MAINLAND_GUEST = 1] = "CHINA_MAINLAND_GUEST", _[_.JAPAN_GUEST = 2] = "JAPAN_GUEST", _[_.KOREA_GUEST = 3] = "KOREA_GUEST", _[_.TAIWAN_GUEST = 4] = "TAIWAN_GUEST", _[_.HONG_KONG_AND_MACAO_GUEST = 5] = "HONG_KONG_AND_MACAO_GUEST", _
    })({})
}), "9731f5", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.actionHandlerByActionType = Y, e.advanceToNextFlow = v, e.advanceToNextReturnableFlow = R, e.advanceToNextStep = G, e.attemptToExitFlow = P, e.callGetVerification = function(t) {
        return o => {
            const n = (0, N.logGetApiSessionStart)(t);
            return T.ReinhardtApi.getVerification({
                userContext: t,
                sessionId: n
            }).then((t => o(v(t)))).finally((() => {
                o(Q(!1))
            }))
        }
    }, e.chooseFovOption = function(t) {
        return (o, n) => {
            (0, f.logSelect)({
                page: (0, p.currentStepSelector)(n()),
                element: N.Element.FOV_OPTION,
                selected_data: {
                    selected_fov_option: t
                }
            }), o({
                type: _.CHOOSE_FOV_OPTION,
                payload: t
            })
        }
    }, e.clickBodyHelpLink = function() {
        return (t, o) => {
            (0, f.logClick)({
                verification: (0, N.getVerificationFromFlowType)((0, p.flowTypeSelector)(o())),
                page: (0, p.currentStepSelector)(o()),
                element: N.Element.BUTTON_HELP
            }), t(G((0, p.bodyHelpScreenNameSelector)(o())))
        }
    }, e.clickHelpLink = function() {
        return (t, o) => {
            (0, f.logClick)({
                verification: (0, N.getVerificationFromFlowType)((0, p.flowTypeSelector)(o())),
                page: (0, p.currentStepSelector)(o()),
                element: N.Element.BUTTON_HELP
            }), t(G((0, p.helpScreenNameSelector)(o())))
        }
    }, e.displayOptinBiometrics = function(t) {
        return {
            type: _.DISPLAY_OPT_IN_BIOMETRICS,
            payload: {
                displayBiometricsOptIn: t
            }
        }
    }, e.exitFlow = L, e.goBackToPreviousStep = U, e.handleActionCTAClicked = function(t) {
        return o => {
            const {
                action: n,
                screen_name: c,
                link: l,
                screen_names: s
            } = t, _ = n && Y(n, c || l, s);
            _ && o(_())
        }
    }, e.handleNextCTAClicked = function(t) {
        return (o, n) => {
            const c = n(),
                l = (0, p.screenTypeSelector)(c),
                s = (0, p.biometricsOptInSelector)(c),
                _ = H(c),
                u = K[l];
            s && t && (l === S.FovScreenType.LANDING || l === S.FovScreenType.ANIMATED_ACTION) && t().finally((() => {
                o(X(!1))
            })), _ ? o(_()) : u && o(u())
        }
    }, e.handlePreviousCTAClicked = function() {
        return (t, o) => {
            const n = (0, p.getFooterPreviousCTAType)(o()),
                c = z[n];
            c && t(c())
        }
    }, e.initializeFlow = function() {
        return (t, o) => {
            t({
                type: _.START_FLOW
            }), (0, f.logFlowStart)({
                user_context: (0, p.contextSelector)(o())
            });
            const n = (0, p.screenTypeSelector)(o());
            n === S.FovScreenType.GOV_ID_REDIRECT && t(V()), n === S.FovScreenType.REDIRECT_SCREEN && t(L())
        }
    }, e.onCameraBecameReady = function() {
        return (t, o) => {
            t(G((0, p.nextScreenNameSelector)(o())))
        }
    }, e.setLoading = Q, e.setOptInToBiometrics = X;
    var o = r(d[1]),
        n = t(r(d[2])),
        c = r(d[3]),
        l = r(d[4]),
        s = r(d[5]),
        _ = r(d[6]),
        S = r(d[7]),
        p = r(d[8]),
        u = r(d[9]),
        T = r(d[10]),
        f = r(d[11]),
        N = r(d[12]),
        I = r(d[13]),
        E = r(d[14]),
        O = r(d[15]),
        y = r(d[16]);

    function C() {
        return (t, o) => {
            t((0, u.setIsPosting)(!0)), T.CancelReservationApi.post((0, p.reservationCodeSelector)(o())).then((() => {
                t({
                    type: _.EXIT_FLOW
                })
            })).catch((() => {
                t((0, u.setIsPosting)(!1))
            }))
        }
    }

    function F(t, o) {
        return () => {
            t(o ? C() : {
                type: _.EXIT_FLOW
            })
        }
    }

    function A(t) {
        return {
            type: _.SET_FLOW,
            payload: {
                fov: t
            }
        }
    }

    function v(t) {
        const {
            fov: o
        } = (0, I.transformFlow)(t.flow);
        return (n, _) => {
            const u = _(),
                f = (0, p.isFullPageSelector)(u);
            o.configs.flow_type !== S.FovFlowType.CONFIRM_LEGAL_NAME || f || n((0, O.showConfirmLegalNameModal)(S.FovFlowType.CONFIRM_LEGAL_NAME)), (0, T.shouldRedirectFromPendingFlow)(t) && n(L());
            const N = (0, p.isTreatmentUISelector)(u),
                I = (0, s.checkGovIdRedesignExperiments)(t.experiments, o.configs.screens);
            if (!N && I) n((0, O.setIsTreatmentUI)(!0)), (0, c.airdogCount)('account_fov.switch_to_treatment_ui_after_post');
            else if (N && !I) {
                const t = o.configs.flow_type;
                if (t === S.FovFlowType.GOV_ID_V1_SELFIE_WEB || t === S.FovFlowType.GOV_ID_V1_SELFIE_MOWEB) n((0, O.setIsTreatmentUI)(!1)), (0, c.airdogCount)('account_fov.switch_to_control_ui_after_post');
                else {
                    [S.FovFlowType.FOV_LEGAL_INFO_V1_SUCCESS, S.FovFlowType.GOV_ID_V1_SUCCESS, S.FovFlowType.FOV_V1_SUCCESS, S.FovFlowType.GOV_ID_V1_PENDING, S.FovFlowType.CONFIRM_LEGAL_NAME].includes(t) || ((0, c.airdogCount)('account_fov.inconsistent_treatment_ui_after_post'), (0, l.reportError)(new Error('Unexpected treatment UI switching to control flow'), {
                        extra: o.configs.flow_type
                    }))
                }
            }
            n(A(o))
        }
    }

    function w(t) {
        return {
            type: _.CONCAT_FLOW,
            payload: {
                fov: t
            }
        }
    }

    function R(t) {
        const {
            fov: o
        } = (0, I.transformFlow)(t.flow);
        return (n, _) => {
            if ((0, T.shouldRedirectFromPendingFlow)(t)) n(L());
            else {
                const u = _(),
                    T = (0, p.isTreatmentUISelector)(u),
                    f = (0, s.checkGovIdRedesignExperiments)(t.experiments, o.configs.screens);
                !T && f ? o.configs.flow_type === S.FovFlowType.GOV_ID_V1_FRONT_AND_BACK_WEB ? (n((0, O.setIsTreatmentUI)(!0)), (0, c.airdogCount)('account_fov.switch_to_treatment_ui_after_post_returnable_flow')) : (0, l.reportError)(new Error('Unexpected control UI switching to treatment flow in returnable flow'), {
                    extra: o.configs.flow_type
                }) : T && !f && ((0, c.airdogCount)('account_fov.inconsistent_treatment_ui_after_post_returnable_flow'), (0, l.reportError)(new Error('Unexpected treatment UI switching to control flow in returnable flow'), {
                    extra: o.configs.flow_type
                })), n(w(o))
            }
        }
    }

    function V() {
        return (t, n) => {
            const c = n(),
                l = (0, p.exitScreenActionSelector)(c) === S.ActionType.CANCEL_RESERVATION,
                s = (0, p.contextSelector)(c),
                _ = (0, p.flowContextSelector)(c),
                u = (0, N.logGetApiSessionStart)(s, _);
            return T.ReinhardtApi.getVerification({
                userContext: s,
                flowContext: _,
                freezeReason: (0, p.freezeReasonSelector)(c),
                reservationConfirmationCode: (0, p.reservationCodeSelector)(c),
                govIdFriction: !0,
                sessionId: u
            }).then((o => t(R(o)))).catch((() => t(F(t, l)))).finally((() => {
                (0, o.logSessionEnd)({
                    sessionId: u,
                    useSendBeacon: !0
                })
            }))
        }
    }

    function G(t) {
        return (o, n) => {
            const c = n(),
                l = (0, p.getScreenTypeByScreenName)(t, c),
                s = (0, p.currentStepSelector)(c),
                u = (0, p.isWebcamCaptureModalVisibleSelector)(c),
                T = (0, p.isFullPageSelector)(c),
                f = (0, p.isTreatmentUISelector)(c);
            l === S.FovScreenType.GOV_ID_REDIRECT ? o(V()) : l === S.FovScreenType.CONFIRM_DISMISS_LISTING && (0, y.isMowebLayout)() ? o((0, O.showDismissModal)(t)) : l !== S.FovScreenType.CONFIRM_LEGAL_NAME || T ? f && S.WebcamCaptureScreenTypes.has(l) ? o((0, O.showWebcamCaptureModal)(t)) : s !== t && (u && o((0, O.hideWebcamCaptureModal)()), o({
                type: _.ADVANCE_TO_NEXT_STEP,
                payload: t
            })) : o((0, O.showConfirmLegalNameModal)(t))
        }
    }

    function U() {
        return {
            type: _.GO_BACK_TO_PREVIOUS_STEP
        }
    }

    function L(t = !1) {
        return (o, n) => {
            o(t ? C() : {
                type: _.EXIT_FLOW
            });
            const c = (0, p.redirectUrlSelector)(n());
            c && window.location.replace(decodeURIComponent(c))
        }
    }

    function P() {
        return (t, o) => {
            const n = (0, p.exitScreenNameSelector)(o());
            t(n ? G(n) : L())
        }
    }

    function B(t) {
        (0, o.logSessionEnd)({
            sessionId: t,
            useSendBeacon: !0
        })
    }

    function D(t, o) {
        return n => {
            if (T.SSNApi.shouldLaunchGovIDRedirect(n) && t(V()), T.SSNApi.shouldSetupPolling(n)) {
                const {
                    polling: n,
                    timeout: c
                } = (0, p.screenConfigSelector)(o());
                t((0, u.setPostStartTimestamp)()), (0, E.setupPollingAndTimeout)({
                    timeout: c,
                    poll_interval_ms: n.poll_interval_ms,
                    poll_start_after_ms: n.poll_start_after_ms
                }, ((o, n, c, l) => t((0, E.pollByPollingConfig)(o, n, c, l))), ((o, n) => t((0, E.takeAction)(o, n))))
            }
        }
    }

    function h(t, o) {
        return () => {
            o && t(V())
        }
    }

    function x(t, o) {
        return Object.entries(o).reduce(((o, [n, c]) => (o[t[n]] = c, o)), {})
    }

    function k(t, o, n) {
        return (c, l) => {
            const s = o,
                S = l(),
                u = (0, p.contextSelector)(S),
                I = {
                    context: s,
                    userContext: u,
                    reservation_confirmation_code: (0, p.reservationCodeSelector)(S),
                    freeze_reason: (0, p.freezeReasonSelector)(S),
                    verification_data: x((0, p.ssnInputFieldNamesOnServerSelector)(S), t)
                },
                E = n ? 17 : 16;
            (0, f.logSubmit)({
                verification: E
            });
            const O = (0, N.logPostApiSessionStart)(u, s);
            c({
                type: _.SUBMIT_SSN,
                promise: T.ReinhardtApi.postVerification(I, O),
                meta: {
                    onFinish: B(O),
                    onSuccess: D(c, l),
                    onFailure: h(c, n)
                }
            })
        }
    }

    function M() {
        return (t, o) => {
            const {
                polling: n,
                timeout: c
            } = (0, p.screenConfigSelector)(o());
            t((0, u.setPostStartTimestamp)()), (0, E.setupPollingAndTimeout)({
                timeout: c,
                poll_interval_ms: n.poll_interval_ms,
                poll_start_after_ms: n.poll_start_after_ms
            }, ((o, n, c, l) => t((0, E.pollByPollingConfig)(o, n, c, l))), ((o, n) => t((0, E.takeAction)(o, n))))
        }
    }

    function b(t) {
        return o => {
            o((0, u.handOffToMobile)()), t && o(G(t))
        }
    }

    function W(t = {}) {
        return (o, n) => {
            const c = n(),
                l = (0, p.selectedIdSelector)(c),
                s = t[l];
            s && o(G(s))
        }
    }

    function Y(t, o, n, c) {
        switch (t) {
            case S.ActionType.GO_TO_SCREEN:
                return o ? () => G(o) : void 0;
            case S.ActionType.GO_BACK:
                return U;
            case S.ActionType.DISMISS_FLOW:
                return L;
            case S.ActionType.CANCEL_RESERVATION:
                return () => L(!0);
            case S.ActionType.POST_SELFIE:
                return u.postVerificationForSelfie;
            case S.ActionType.TAKE_PHOTO:
                return () => (0, u.takePhoto)(o);
            case S.ActionType.SEND_TEXT:
                return () => b(o);
            case S.ActionType.START_POLLING:
                return M;
            case S.ActionType.GO_TO_SCREEN_BY_ID_TYPE:
                return () => W(n);
            case S.ActionType.OPEN_LINK:
                return () => {
                    o && window.open(o, '_blank')
                };
            case S.ActionType.POST_DATA:
                return c === S.FovScreenType.GOV_ID_REVIEW && o ? () => (0, u.postVerificationForOneGovIdCapturedImage)(o) : void 0;
            default:
                return
        }
    }

    function H(t) {
        const o = (0, p.isLowQualityImageModeSelector)(t),
            n = (0, p.screenTypeSelector)(t);
        let c, l, s;
        if (o) {
            const o = (0, p.primaryForLowQualityImageSelector)(t);
            c = o.action, l = o.screen_name, s = o.screen_names
        } else c = (0, p.primaryButtonActionSelector)(t), l = (0, p.primaryButtonScreenNameSelector)(t), s = (0, p.primaryButtonScreenNamesSelector)(t);
        const _ = Y(c, l, s, n);
        return _ && (0, f.logClick)({
            verification: (0, N.getVerificationFromFlowType)((0, p.flowTypeSelector)(t)),
            page: (0, p.currentStepSelector)(t),
            element: N.Element.PRIMARY,
            element_action: c,
            element_screen_name: l
        }), _
    }
    const K = {
        [S.FovScreenType.LANDING]: function() {
            return (t, o) => {
                (0, f.logClick)({
                    page: (0, p.currentStepSelector)(o()),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE,
                    selected_data: {
                        fov_option: (0, p.selectedFovOptionSelector)(o())
                    }
                }), t(G((0, p.fovOptionNextScreenNameSelector)(o())))
            }
        },
        [S.FovScreenType.SSN_INPUT]: function() {
            return (t, o) => {
                (0, f.logClick)({
                    page: (0, p.currentStepSelector)(o()),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE
                });
                const n = (0, p.ssnFieldSelector)(o()),
                    c = S.FovFlowContext.SSN_FIRST_ATTEMPT;
                t(k({
                    [S.SSNField.SSN]: n
                }, c, !1))
            }
        },
        [S.FovScreenType.SSN_ERROR]: function() {
            return (t, o) => {
                (0, f.logClick)({
                    page: (0, p.currentStepSelector)(o()),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE
                }), t(G((0, p.nextScreenNameSelector)(o())))
            }
        },
        [S.FovScreenType.SSN_SUCCESS]: function() {
            return t => {
                t(L())
            }
        },
        [S.FovScreenType.SSN_RETRY]: function() {
            return (t, o) => {
                (0, f.logClick)({
                    page: (0, p.currentStepSelector)(o()),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE
                });
                t(k((0, p.ssnInputValuesSelector)(o()), S.FovFlowContext.SSN_RETRY, !0))
            }
        },
        [S.FovScreenType.GOV_ID_SELECT_PLATFORM]: function() {
            return (t, o) => {
                const c = o(),
                    l = (0, p.selectedGovIdPlatformSelector)(c);
                (0, f.logClick)({
                    verification: (0, N.getVerificationFromFlowType)((0, p.flowTypeSelector)(c)),
                    page: (0, p.currentStepSelector)(c),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE,
                    selected_data: {
                        id_platform_selection: l
                    }
                });
                let s = (0, p.govIdOptionNextScreenNameSelector)(c);
                const _ = (0, p.govIdOptionPrimaryActionSelector)(c);
                if (_) {
                    t(Y(_, s)())
                } else {
                    if (l === S.GovIdPlatform.ADD_WITH_APP && t((0, u.handOffToMobile)()), n.default.getBootstrap('identity.enable_switched_order_select_type')) {
                        const t = (0, p.screenConfigSelector)(c),
                            o = t.countries_with_warning,
                            n = (0, p.selectedCountrySelector)(c);
                        if (o && o.includes(n.country_code)) {
                            const o = t.next_pages_issuing_country_by_platform ? .[l];
                            o && (s = o)
                        }
                    }
                    s && t(G(s))
                }
            }
        },
        [S.FovScreenType.GOV_ID_UPLOAD_IMAGE]: function() {
            return (t, o) => {
                (0, f.logClick)({
                    verification: 2,
                    page: (0, p.currentStepSelector)(o()),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE
                }), t((0, u.postVerificationForGovIdUpload)())
            }
        },
        [S.FovScreenType.GOV_ID_REVIEW]: function() {
            return (t, o) => {
                const n = o();
                (0, f.logClick)({
                    verification: 2,
                    page: (0, p.currentStepSelector)(n),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE
                });
                const c = (0, p.nextScreenNameSelector)(n);
                t((0, u.postVerificationForOneGovIdCapturedImage)(c))
            }
        },
        [S.FovScreenType.MOBILE_HANDOFF]: u.handOffToMobile,
        [S.FovScreenType.ANIMATED_ACTION]: function() {
            return (t, o) => {
                (0, f.logClick)({
                    verification: (0, N.getVerificationFromFlowType)((0, p.flowTypeSelector)(o())),
                    page: (0, p.currentStepSelector)(o()),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE
                }), t(G((0, p.nextScreenNameSelector)(o())))
            }
        },
        [S.FovScreenType.GOV_ID_SELECT_TYPE]: function() {
            return (t, o) => {
                const n = o(),
                    c = (0, p.selectedIdSelector)(n);
                (0, f.logClick)({
                    verification: 2,
                    page: (0, p.currentStepSelector)(n),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE,
                    selected_data: {
                        id_type_selection: c
                    }
                });
                const l = (0, p.screenConfigSelector)(n);
                let s = l.web_next_pages[c];
                const _ = (0, p.selectedCountrySelector)(n),
                    S = _.country_code,
                    T = l.next_pages_issuing_country,
                    E = l.no_gov_id_capture_id_types;
                T ? .[S] && !E ? .[S] ? .includes(c) && (s = T[S]);
                const O = (0, I.doesIDTypeNeedBackSide)(c, _);
                t((0, u.setNeedsBackSide)(O)), t(G(s))
            }
        },
        [S.FovScreenType.GOV_ID_UNSUPPORTED_TYPE]: function() {
            return (t, o) => {
                const n = o(),
                    c = (0, p.selectedCountrySelector)(n);
                (0, f.logUnsupportedIdType)({
                    page: (0, p.currentStepSelector)(n),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE,
                    idType: (0, p.selectedIdSelector)(n),
                    country: c && c.country_code,
                    otherIdTypeText: (0, p.idTypeTextSelector)(n)
                }), t(U())
            }
        },
        [S.FovScreenType.GOV_ID_ISSUING_COUNTRY_WARNING]: function() {
            return (t, o) => {
                const n = o(),
                    c = (0, p.selectedIdSelector)(n);
                (0, f.logClick)({
                    verification: 2,
                    page: (0, p.currentStepSelector)(n),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE,
                    selected_data: {
                        id_type_selection: c
                    }
                });
                t(G((0, p.screenConfigSelector)(n).web_next_pages[c]))
            }
        },
        [S.FovScreenType.GOV_ID_LOADING]: function() {
            return (t, o) => {
                (0, f.logClick)({
                    verification: 2,
                    page: (0, p.currentStepSelector)(o()),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE
                }), t(L())
            }
        },
        [S.FovScreenType.SELFIE_REVIEW]: function() {
            return (t, o) => {
                (0, f.logClick)({
                    verification: 3,
                    page: (0, p.currentStepSelector)(o()),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE
                });
                const n = (0, p.nextScreenNameSelector)(o());
                t(n ? G(n) : (0, u.postVerificationForSelfie)())
            }
        },
        [S.FovScreenType.FOV_SUCCESS]: function() {
            return t => {
                t(L())
            }
        },
        [S.FovScreenType.LEGAL_INFO_ENTRY]: function() {
            return (t, o) => {
                (0, f.logClick)({
                    page: (0, p.currentStepSelector)(o()),
                    verification: 21,
                    element: N.Element.PRIMARY
                }), t((0, E.handleLegalInfoSubmitted)())
            }
        },
        [S.FovScreenType.CHINA_GOV_ID_USER_INPUT]: function() {
            return (t, o) => {
                (0, f.logClick)({
                    verification: 2,
                    page: (0, p.currentStepSelector)(o()),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE
                }), t((0, u.postVerificationForChinaGovId)())
            }
        },
        [S.FovScreenType.CONFIRM_LEGAL_NAME]: function() {
            return (t, o) => {
                (0, f.logClick)({
                    verification: 2,
                    page: (0, p.currentStepSelector)(o()),
                    element: N.Element.PRIMARY
                }), t((0, E.postVerificationForLegalNames)())
            }
        },
        [S.FovScreenType.CONSENT_SCREEN]: function() {
            return (t, o) => {
                const n = o(),
                    c = (0, p.selectedConsentSelector)(n),
                    l = (0, p.screenConfigSelector)(n);
                (0, f.logClick)({
                    verification: 3,
                    page: (0, p.currentStepSelector)(n),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE,
                    selected_data: {
                        consent_type: c
                    }
                }), t((0, u.setConsentTermsConfigurationId)(l.consent_terms_configuration_id));
                t(G(l.call_to_actions[c].screen_name))
            }
        },
        [S.FovScreenType.KOREAN_REDIRECT_ID_ENTRY_SCREEN]: function() {
            return (t, o) => {
                (0, f.logClick)({
                    verification: 2,
                    page: (0, p.currentStepSelector)(o()),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE
                }), t((0, u.postVerificationForKoreanId)())
            }
        },
        [S.FovScreenType.KOREAN_REDIRECT_ID_PENDING_SCREEN]: function() {
            return (t, o) => {
                (0, f.logClick)({
                    verification: 2,
                    page: (0, p.currentStepSelector)(o()),
                    element: N.Element.NAVIGATION_BUTTON_CONTINUE
                }), t((0, u.jumpToKoreanVerificationApp)())
            }
        }
    };
    const z = {
        [S.FooterCTA.BACK]: U,
        [S.FooterCTA.CANCEL]: function() {
            return (t, o) => {
                (0, f.logClick)({
                    verification: (0, N.getVerificationFromFlowType)((0, p.flowTypeSelector)(o())),
                    page: (0, p.currentStepSelector)(o()),
                    element: N.Element.DISMISS_LINK
                });
                (0, p.isFullPageSelector)(o()) ? window.history.back(): t(P())
            }
        },
        [S.FooterCTA.ACTION]: function() {
            return (t, o) => {
                const n = o(),
                    c = (0, p.isLowQualityImageModeSelector)(n),
                    l = (0, p.screenTypeSelector)(n);
                let s, _, S;
                if (c) {
                    const t = (0, p.secondaryForLowQualityImageSelector)(n);
                    s = t.action, _ = t.screen_name, S = t.screen_names
                } else s = (0, p.secondaryButtonActionSelector)(n) || (0, p.backButtonActionSelector)(n), _ = (0, p.secondaryButtonScreenNameSelector)(n), S = (0, p.secondaryButtonScreenNamesSelector)(n);
                (0, f.logClick)({
                    verification: (0, N.getVerificationFromFlowType)((0, p.flowTypeSelector)(n)),
                    page: (0, p.currentStepSelector)(n),
                    element: N.Element.SECONDARY,
                    element_action: s,
                    element_screen_name: _
                });
                const u = Y(s, _, S, l);
                u && t(u())
            }
        }
    };

    function X(t) {
        return {
            type: _.SET_OPT_IN_TO_BIOMETRICS,
            payload: {
                biometricsOptIn: t
            }
        }
    }

    function Q(t) {
        return {
            type: _.SET_LOADING,
            payload: t
        }
    }
}), "97c0d4", ["ba7a76", "9e7031", "c235f8", "3e4681", "f2f40f", "a7a992", "1c37e6", "e3eb42", "48a86b", "6de594", "57b692", "8eb9ca", "f017de", "572210", "70edee", "0b3d87", "08f04d"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.compactObject = function t(n) {
        if (!s(n)) return n;
        return Object.keys(n).reduce((function(o, c) {
            const p = s(n[c]),
                u = p ? t(n[c]) : n[c],
                l = p && !Object.keys(u).length;
            return void 0 === u || l ? o : Object.assign(o, {
                [c]: u
            })
        }), {})
    }, e.deprecated = function(t, o) {
        if (!n) return;
        console.warn(t + ' is deprecated, please use ' + o + ' instead.')
    }, e.detectBrowser = function(t) {
        const n = {
            browser: null,
            version: null
        };
        if (!t.navigator) return n.browser = 'Not a browser.', n;
        const {
            navigator: s
        } = t;
        if (s.mozGetUserMedia) n.browser = 'firefox', n.version = o(s.userAgent, /Firefox\/(\d+)\./, 1);
        else if (s.webkitGetUserMedia || !1 === t.isSecureContext && t.webkitRTCPeerConnection) n.browser = 'chrome', n.version = o(s.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
        else {
            if (!t.RTCPeerConnection || !s.userAgent.match(/AppleWebKit\/(\d+)\./)) return n.browser = 'Not a supported browser.', n;
            n.browser = 'safari', n.version = o(s.userAgent, /AppleWebKit\/(\d+)\./, 1), n.supportsUnifiedPlan = t.RTCRtpTransceiver && 'currentDirection' in t.RTCRtpTransceiver.prototype
        }
        return n
    }, e.disableLog = function(n) {
        if ('boolean' != typeof n) return new Error('Argument type: ' + typeof n + '. Please use a boolean.');
        return t = n, n ? 'adapter.js logging disabled' : 'adapter.js logging enabled'
    }, e.disableWarnings = function(t) {
        if ('boolean' != typeof t) return new Error('Argument type: ' + typeof t + '. Please use a boolean.');
        return n = !t, 'adapter.js deprecation warnings ' + (t ? 'disabled' : 'enabled')
    }, e.extractVersion = o, e.filterStats = function(t, n, o) {
        const s = o ? 'outbound-rtp' : 'inbound-rtp',
            p = new Map;
        if (null === n) return p;
        const u = [];
        return t.forEach((t => {
            'track' === t.type && t.trackIdentifier === n.id && u.push(t)
        })), u.forEach((n => {
            t.forEach((o => {
                o.type === s && o.trackId === n.id && c(t, o, p)
            }))
        })), p
    }, e.log = function() {
        if (t) return;
        'undefined' != typeof console && 'function' == typeof console.log && console.log.apply(console, arguments)
    }, e.walkStats = c, e.wrapPeerConnectionEvent = function(t, n, o) {
        if (!t.RTCPeerConnection) return;
        const s = t.RTCPeerConnection.prototype,
            c = s.addEventListener;
        s.addEventListener = function(t, s) {
            if (t !== n) return c.apply(this, arguments);
            const p = t => {
                const n = o(t);
                n && (s.handleEvent ? s.handleEvent(n) : s(n))
            };
            return this._eventMap = this._eventMap || {}, this._eventMap[n] || (this._eventMap[n] = new Map), this._eventMap[n].set(s, p), c.apply(this, [t, p])
        };
        const p = s.removeEventListener;
        s.removeEventListener = function(t, o) {
            if (t !== n || !this._eventMap || !this._eventMap[n]) return p.apply(this, arguments);
            if (!this._eventMap[n].has(o)) return p.apply(this, arguments);
            const s = this._eventMap[n].get(o);
            return this._eventMap[n].delete(o), 0 === this._eventMap[n].size && delete this._eventMap[n], 0 === Object.keys(this._eventMap).length && delete this._eventMap, p.apply(this, [t, s])
        }, Object.defineProperty(s, 'on' + n, {
            get() {
                return this['_on' + n]
            },
            set(t) {
                this['_on' + n] && (this.removeEventListener(n, this['_on' + n]), delete this['_on' + n]), t && this.addEventListener(n, this['_on' + n] = t)
            },
            enumerable: !0,
            configurable: !0
        })
    };
    let t = !0,
        n = !0;

    function o(t, n, o) {
        const s = t.match(n);
        return s && s.length >= o && parseInt(s[o], 10)
    }

    function s(t) {
        return '[object Object]' === Object.prototype.toString.call(t)
    }

    function c(t, n, o) {
        n && !o.has(n.id) && (o.set(n.id, n), Object.keys(n).forEach((s => {
            s.endsWith('Id') ? c(t, t.get(n[s]), o) : s.endsWith('Ids') && n[s].forEach((n => {
                c(t, t.get(n), o)
            }))
        })))
    }
}), "9cdad4", []);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.TrustIdentityPostApiSession = {
        defaultProps: {},
        propTypes: {}
    };
    t.fullyQualifiedName = 'Identity.v1.TrustIdentityPostApiSession';
    e.TrustIdentityPostApiSessionEvent = function(s) {
        return {
            eventData: s,
            eventDataSchema: t
        }
    }
}), "9e231a", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var c = l(r(d[1])),
        t = r(d[2]);
    const h = (0, c.default)({
        svgContents: "<path d=\"m22.5 2h-21c-.78 0-1.5.72-1.5 1.5v14.99c0 .78.72 1.51 1.5 1.51h10.67l1.36 1.36a2 2 0 0 0 2.83 0c .38-.38.57-.87.58-1.36h5.56c.78 0 1.5-.73 1.5-1.51v-14.99c0-.78-.72-1.5-1.5-1.5zm-6.84 18.66a1 1 0 0 1 -1.42 0l-2.83-2.83a1 1 0 0 1 1.41-1.41l2.83 2.83a1 1 0 0 1 0 1.42zm7.34-2.17c0 .24-.28.51-.5.51h-5.8a1.99 1.99 0 0 0 -.34-.47l-2.83-2.83a2 2 0 0 0 -2.43-.3l-.74-.74a4.97 4.97 0 0 0 1.64-3.66 5 5 0 1 0 -5 5c .94 0 1.81-.28 2.56-.73l.08.08.76.76a1.99 1.99 0 0 0 .31 2.43l.46.46h-9.67c-.23 0-.5-.28-.5-.51v-14.99c0-.22.28-.5.5-.5h21c .22 0 .5.28.5.5zm-16-3.49a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm1.85-4.85a.5.5 0 0 1 0 .71l-1.95 1.95a.57.57 0 0 1 -.81-.01l-.93-.99a.5.5 0 1 1 .73-.69l.62.65 1.64-1.64a.5.5 0 0 1 .71 0zm12.15-2.65a.5.5 0 0 1 -.5.5h-5.97a.5.5 0 0 1 0-1h5.97a.5.5 0 0 1 .5.5zm0 3a .5.5 0 0 1 -.5.5h-5.97a.5.5 0 0 1 0-1h5.97a.5.5 0 0 1 .5.5zm0 3a .5.5 0 0 1 -.5.5h-5.97a.5.5 0 0 1 0-1h5.97a.5.5 0 0 1 .5.5z\" fill-rule=\"evenodd\" />",
        svgProps: {
            viewBox: "0 0 24 24"
        }
    }, 'IconVerifiedId');
    e.default = h;
    h.categories = [t.AIRBNB_PRODUCTS]
}), "9e3548", ["ba7a76", "a89bd1", "72354b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var s = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.adapterFactory = function({
        window: s
    } = {}, C = {
        shimChrome: !0,
        shimFirefox: !0,
        shimSafari: !0
    }) {
        const S = t.log,
            f = t.detectBrowser(s),
            p = {
                browserDetails: f,
                commonShim: c,
                extractVersion: t.extractVersion,
                disableLog: t.disableLog,
                disableWarnings: t.disableWarnings,
                sdp: l
            };
        switch (f.browser) {
            case 'chrome':
                if (!n || !n.shimPeerConnection || !C.shimChrome) return S('Chrome shim is not included in this adapter release.'), p;
                if (null === f.version) return S('Chrome shim can not determine version, not shimming.'), p;
                S('adapter.js shimming chrome.'), p.browserShim = n, c.shimAddIceCandidateNullOrEmpty(s, f), c.shimParameterlessSetLocalDescription(s, f), n.shimGetUserMedia(s, f), n.shimMediaStream(s, f), n.shimPeerConnection(s, f), n.shimOnTrack(s, f), n.shimAddTrackRemoveTrack(s, f), n.shimGetSendersWithDtmf(s, f), n.shimGetStats(s, f), n.shimSenderReceiverGetStats(s, f), n.fixNegotiationNeeded(s, f), c.shimRTCIceCandidate(s, f), c.shimRTCIceCandidateRelayProtocol(s, f), c.shimConnectionState(s, f), c.shimMaxMessageSize(s, f), c.shimSendThrowTypeError(s, f), c.removeExtmapAllowMixed(s, f);
                break;
            case 'firefox':
                if (!o || !o.shimPeerConnection || !C.shimFirefox) return S('Firefox shim is not included in this adapter release.'), p;
                S('adapter.js shimming firefox.'), p.browserShim = o, c.shimAddIceCandidateNullOrEmpty(s, f), c.shimParameterlessSetLocalDescription(s, f), o.shimGetUserMedia(s, f), o.shimPeerConnection(s, f), o.shimOnTrack(s, f), o.shimRemoveStream(s, f), o.shimSenderGetStats(s, f), o.shimReceiverGetStats(s, f), o.shimRTCDataChannel(s, f), o.shimAddTransceiver(s, f), o.shimGetParameters(s, f), o.shimCreateOffer(s, f), o.shimCreateAnswer(s, f), c.shimRTCIceCandidate(s, f), c.shimConnectionState(s, f), c.shimMaxMessageSize(s, f), c.shimSendThrowTypeError(s, f);
                break;
            case 'safari':
                if (!h || !C.shimSafari) return S('Safari shim is not included in this adapter release.'), p;
                S('adapter.js shimming safari.'), p.browserShim = h, c.shimAddIceCandidateNullOrEmpty(s, f), c.shimParameterlessSetLocalDescription(s, f), h.shimRTCIceServerUrls(s, f), h.shimCreateOfferLegacy(s, f), h.shimCallbacksAPI(s, f), h.shimLocalStreamsAPI(s, f), h.shimRemoteStreamsAPI(s, f), h.shimTrackEventTransceiver(s, f), h.shimGetUserMedia(s, f), h.shimAudioContext(s, f), c.shimRTCIceCandidate(s, f), c.shimRTCIceCandidateRelayProtocol(s, f), c.shimMaxMessageSize(s, f), c.shimSendThrowTypeError(s, f), c.removeExtmapAllowMixed(s, f);
                break;
            default:
                S('Unsupported browser!')
        }
        return p
    };
    var t = s(r(d[1])),
        n = s(r(d[2])),
        o = s(r(d[3])),
        h = s(r(d[4])),
        c = s(r(d[5])),
        l = s(r(d[6]))
}), "9f3f92", ["45f788", "9cdad4", "abcd6e", "c3f78e", "457948", "8a4e57", "24a625"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = l(r(d[1])),
        h = l(r(d[2])),
        v = r(d[3]);
    const o = (0, h.default)({
        svgContents: "<path d=\"m7.72 9.31 9.15 9.52a1 1 0 0 1 -.72 1.69h-9.15a1 1 0 0 1 -1-1v-9.52a1 1 0 0 1 1.72-.69z\" /><path d=\"m8 17.5a.5.5 0 1 1 -.5-.5.5.5 0 0 1 .5.5zm-.5-3.5a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm0-3a .5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm12.5-4.5v15a1.5 1.5 0 0 1 -1.5 1.5h-13a1.5 1.5 0 0 1 -1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5l1.51.03a.47.47 0 0 1 .05.01 2 2 0 0 1 1.94-1.54h.17a3 3 0 0 1 5.66 0h .17a2 2 0 0 1 2 2v1.5a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1-1v-.97h-.01l-1.5-.03a.5.5 0 0 0 -.49.5v15a .5.5 0 0 0 .5.5h13a .5.5 0 0 0 .5-.5v-15a .5.5 0 0 0 -.38-.49 5.13 5.13 0 0 0 -.34-.01.5.5 0 0 1 -.49-.51.51.51 0 0 1 .51-.49 2.71 2.71 0 0 1 .55.04 1.49 1.49 0 0 1 1.15 1.46zm-12 .5h8v-1.5a1 1 0 0 0 -1-1h-.96l-.08-.4a2 2 0 0 0 -3.92 0l-.08.4h-.96a1 1 0 0 0 -1 1zm8 10h-6.5a.5.5 0 0 0 0 1h6.5a.5.5 0 0 0 0-1zm0-3h-6.5a.5.5 0 0 0 0 1h6.5a.5.5 0 0 0 0-1zm0-3h-6.5a.5.5 0 0 0 0 1h6.5a.5.5 0 0 0 0-1z\" fill=\"#484848\" />",
        svgProps: {
            viewBox: "0 0 24 24"
        }
    }, 'IconIndicatorClipboard', {
        defaultFillColor: t.default.accent.blue
    });
    e.default = o;
    o.categories = [v.INDICATOR]
}), "a2b2d5", ["ba7a76", "fee591", "a89bd1", "72354b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = t(r(d[1])),
        o = t(r(d[2])),
        u = r(d[3]);
    const v = (0, o.default)({
        svgContents: "<path d=\"m16.1 18.79-3.1-4.29a2.22 2.22 0 0 1 -1 .25 2.25 2.25 0 0 1 -.5-4.44v-6.31a.5.5 0 0 1 .48-.5 8.65 8.65 0 0 0 -.23 0 8.75 8.75 0 1 0 4.83 16.05.47.47 0 0 0 .15-.62.46.46 0 0 1 -.63-.13z\" /><path d=\"m19.72 20.54a.5.5 0 0 1 -.07.7 12.01 12.01 0 1 1 1.34-17.16v-1.58a.5.5 0 0 1 1 0v3a .5.5 0 0 1 -.5.5h-3a .5.5 0 0 1 0-1h1.96a10.99 10.99 0 1 0 -1.44 15.47.5.5 0 0 1 .7.07zm.87-1.38a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm1.01-1.32a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm.79-1.4a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm-9.89-12.44v6.31a2.25 2.25 0 0 1 1.75 2.19 2.23 2.23 0 0 1 -.48 1.37l3.13 4.34a.5.5 0 0 1 -.11.7c-.02.01-.04.01-.06.02a.46.46 0 0 1 -.63-.13l-3.1-4.29a2.22 2.22 0 0 1 -1 .25 2.25 2.25 0 0 1 -.5-4.44v-6.31a.5.5 0 0 1 .48-.5h.02a.5.5 0 0 1 .5.5zm0 7.36a1.24 1.24 0 0 0 -.48-.11h-.02a1.25 1.25 0 0 0 0 2.5 1.22 1.22 0 0 0 .4-.08 1.3 1.3 0 0 0 .45-.26 1.19 1.19 0 0 0 .3-.42 1.24 1.24 0 0 0 -.63-1.63z\" fill=\"#484848\" />",
        svgProps: {
            viewBox: "0 0 24 24"
        }
    }, 'IconIndicatorFutureTime', {
        defaultFillColor: l.default.accent.blue
    });
    e.default = v;
    v.categories = [u.INDICATOR]
}), "a312a4", ["ba7a76", "fee591", "a89bd1", "72354b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.checkDisableAutoCapture = function(t) {
        if (!t) return !1;
        if ('treatment_2' === t[o]) return !0
    }, e.checkGovIdRedesignExperiments = function(t, u) {
        if (n.default.getBootstrap('web_auto_capture_check_screen_name_for_redesign')) {
            return Object.keys(u).some((t => t.includes('auto_capture')))
        }
        if (!t) return !1;
        const s = (0, _.isMowebLayout)(),
            c = ['treatment', 'treatment_1', 'treatment_2', 'treatment_3', 'treatment_4'],
            f = s ? 'identity_flow_redesign_mweb' : 'identity_flow_redesign_web';
        if (c.includes(t[f])) return !0;
        if ('treatment' === t[s ? 'identity_flow_redesign_expansion_moweb' : 'identity_flow_redesign_expansion_web']) return !0;
        const l = s ? o : 'identity_auto_capture_global_web';
        return c.includes(t[l])
    };
    var n = t(r(d[1])),
        _ = r(d[2]);
    const o = 'identity_auto_capture_global_moweb_v2'
}), "a7a992", ["ba7a76", "c235f8", "08f04d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var l = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = l(r(d[1])),
        c = l(r(d[2])),
        o = r(d[3]);
    const u = (0, c.default)({
        svgContents: "<path d=\"m16.98 11.89a1.83 1.83 0 1 1 -1.83-1.83 1.83 1.83 0 0 1 1.83 1.83m-7.1-1.29a5.14 5.14 0 1 0 7.66 6.79.95.95 0 0 0 -.57-1.48c-3.75-.89-5.08-3.21-5.55-4.88a.94.94 0 0 0 -1.54-.43\" /><path d=\"m13 17a3 3 0 1 1 3-3 3 3 0 0 1 -3 3zm0-5a2 2 0 1 0 2 2 2 2 0 0 0 -2-2zm-.99-7.69v-1.75a.5.5 0 1 0 -1 0v1.75a.5.5 0 1 0 1 0zm-3.94.89a.5.5 0 0 0 .38-.6l-.38-1.71a.5.5 0 0 0 -.98.2v.01l.38 1.71a.5.5 0 0 0 .49.39.51.51 0 0 0 .11-.01zm-3.38 1.59a.5.5 0 0 0 .21-.68l-.81-1.56a.5.5 0 0 0 -.89.46l.81 1.56a.5.5 0 0 0 .67.21zm10.86-1.97.38-1.71a.5.5 0 0 0 -.98-.22l-.38 1.71a.5.5 0 0 0 .38.6.51.51 0 0 0 .11.01.5.5 0 0 0 .49-.39zm3.46 1.76.81-1.56a.5.5 0 1 0 -.89-.46l-.81 1.56a.5.5 0 1 0 .89.46zm3.69 7.72a.5.5 0 0 0 -.62.33c-.83 2.7-4.6 5.59-9.39 5.85a6.29 6.29 0 0 1 -5.69-6.23c0-3.38 2.1-5.89 5.09-6.21.26-.02.52-.03.78-.03a6.05 6.05 0 0 1 6.13 5.96v.02c0 .19-.01.38-.02.56a.5.5 0 0 0 .45.54.52.52 0 0 0 .54-.45q.03-.32.03-.65a7.02 7.02 0 0 0 -6.92-6.97.47.47 0 0 0 -.08-.02c-.05 0-.09.01-.13.01s-.08-.01-.12-.01a6.94 6.94 0 0 0 -.75.04c-6.58.42-11.26 4.89-11.26 7.96 0 3.01 4.91 6.5 11.25 6.5 5.65 0 10.04-3.35 11.03-6.59a.5.5 0 0 0 -.33-.63zm-20.95.71c0-1.78 2.41-4.76 6.46-6.19a7.44 7.44 0 0 0 -2.21 5.44 7.29 7.29 0 0 0 3.21 6c-4.31-.77-7.46-3.19-7.46-5.25z\" fill=\"#484848\" />",
        svgProps: {
            viewBox: "0 0 24 24"
        }
    }, 'IconIndicatorEye', {
        defaultFillColor: t.default.accent.blue
    });
    e.default = u;
    u.categories = [o.INDICATOR]
}), "a9b6e5", ["ba7a76", "fee591", "a89bd1", "72354b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        !(function(t, s, c, o, l, u, f, p, _, v) {
            if (!t[o] || !t[o]._q) {
                for (; p < f.length;) l(u, f[p++]);
                (_ = s.createElement(c)).async = 1, _.src = n.default.get('branch_sdk_url') || 'https://cdn.branch.io/branch-v2.22.1.min.js', (v = s.getElementsByTagName(c)[0]).parentNode.insertBefore(_, v), t[o] = u
            }
        })(window, document, "script", "branch", (function(t, n) {
            t[n] = function(...s) {
                t._q.push([n, s])
            }
        }), {
            _q: [],
            _v: 1
        }, "addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setIdentity setBranchViewData track validateCode".split(" "), 0)
    };
    var n = t(r(d[1]))
}), "ab7a07", ["ba7a76", "ef2bc3"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.fixNegotiationNeeded = function(t, o) {
        n.wrapPeerConnectionEvent(t, 'negotiationneeded', (t => {
            const n = t.target;
            if (!(o.version < 72 || n.getConfiguration && 'plan-b' === n.getConfiguration().sdpSemantics) || 'stable' === n.signalingState) return t
        }))
    }, e.shimAddTrackRemoveTrack = function(t, n) {
        if (!t.RTCPeerConnection) return;
        if (t.RTCPeerConnection.prototype.addTrack && n.version >= 65) return c(t);
        const o = t.RTCPeerConnection.prototype.getLocalStreams;
        t.RTCPeerConnection.prototype.getLocalStreams = function() {
            const t = o.apply(this);
            return this._reverseStreams = this._reverseStreams || {}, t.map((t => this._reverseStreams[t.id]))
        };
        const s = t.RTCPeerConnection.prototype.addStream;
        t.RTCPeerConnection.prototype.addStream = function(n) {
            if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, n.getTracks().forEach((t => {
                    if (this.getSenders().find((n => n.track === t))) throw new DOMException('Track already exists.', 'InvalidAccessError')
                })), !this._reverseStreams[n.id]) {
                const o = new t.MediaStream(n.getTracks());
                this._streams[n.id] = o, this._reverseStreams[o.id] = n, n = o
            }
            s.apply(this, [n])
        };
        const p = t.RTCPeerConnection.prototype.removeStream;

        function h(t, n) {
            let o = n.sdp;
            return Object.keys(t._reverseStreams || []).forEach((n => {
                const s = t._reverseStreams[n],
                    c = t._streams[s.id];
                o = o.replace(new RegExp(c.id, 'g'), s.id)
            })), new RTCSessionDescription({
                type: n.type,
                sdp: o
            })
        }

        function C(t, n) {
            let o = n.sdp;
            return Object.keys(t._reverseStreams || []).forEach((n => {
                const s = t._reverseStreams[n],
                    c = t._streams[s.id];
                o = o.replace(new RegExp(s.id, 'g'), c.id)
            })), new RTCSessionDescription({
                type: n.type,
                sdp: o
            })
        }
        t.RTCPeerConnection.prototype.removeStream = function(t) {
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, p.apply(this, [this._streams[t.id] || t]), delete this._reverseStreams[this._streams[t.id] ? this._streams[t.id].id : t.id], delete this._streams[t.id]
        }, t.RTCPeerConnection.prototype.addTrack = function(n, o) {
            if ('closed' === this.signalingState) throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
            const s = [].slice.call(arguments, 1);
            if (1 !== s.length || !s[0].getTracks().find((t => t === n))) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", 'NotSupportedError');
            if (this.getSenders().find((t => t.track === n))) throw new DOMException('Track already exists.', 'InvalidAccessError');
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
            const c = this._streams[o.id];
            if (c) c.addTrack(n), Promise.resolve().then((() => {
                this.dispatchEvent(new Event('negotiationneeded'))
            }));
            else {
                const s = new t.MediaStream([n]);
                this._streams[o.id] = s, this._reverseStreams[s.id] = o, this.addStream(s)
            }
            return this.getSenders().find((t => t.track === n))
        }, ['createOffer', 'createAnswer'].forEach((function(n) {
            const o = t.RTCPeerConnection.prototype[n],
                s = {
                    [n]() {
                        const t = arguments;
                        return arguments.length && 'function' == typeof arguments[0] ? o.apply(this, [n => {
                            const o = h(this, n);
                            t[0].apply(null, [o])
                        }, n => {
                            t[1] && t[1].apply(null, n)
                        }, arguments[2]]) : o.apply(this, arguments).then((t => h(this, t)))
                    }
                };
            t.RTCPeerConnection.prototype[n] = s[n]
        }));
        const l = t.RTCPeerConnection.prototype.setLocalDescription;
        t.RTCPeerConnection.prototype.setLocalDescription = function() {
            return arguments.length && arguments[0].type ? (arguments[0] = C(this, arguments[0]), l.apply(this, arguments)) : l.apply(this, arguments)
        };
        const f = Object.getOwnPropertyDescriptor(t.RTCPeerConnection.prototype, 'localDescription');
        Object.defineProperty(t.RTCPeerConnection.prototype, 'localDescription', {
            get() {
                const t = f.get.apply(this);
                return '' === t.type ? t : h(this, t)
            }
        }), t.RTCPeerConnection.prototype.removeTrack = function(t) {
            if ('closed' === this.signalingState) throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
            if (!t._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", 'TypeError');
            if (!(t._pc === this)) throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
            let n;
            this._streams = this._streams || {}, Object.keys(this._streams).forEach((o => {
                this._streams[o].getTracks().find((n => t.track === n)) && (n = this._streams[o])
            })), n && (1 === n.getTracks().length ? this.removeStream(this._reverseStreams[n.id]) : n.removeTrack(t.track), this.dispatchEvent(new Event('negotiationneeded')))
        }
    }, e.shimAddTrackRemoveTrackWithNative = c, Object.defineProperty(e, "shimGetDisplayMedia", {
        enumerable: !0,
        get: function() {
            return s.shimGetDisplayMedia
        }
    }), e.shimGetSendersWithDtmf = function(t) {
        if (t.RTCPeerConnection && !('getSenders' in t.RTCPeerConnection.prototype) && 'createDTMFSender' in t.RTCPeerConnection.prototype) {
            const n = function(t, n) {
                return {
                    track: n,
                    get dtmf() {
                        return void 0 === this._dtmf && ('audio' === n.kind ? this._dtmf = t.createDTMFSender(n) : this._dtmf = null), this._dtmf
                    },
                    _pc: t
                }
            };
            if (!t.RTCPeerConnection.prototype.getSenders) {
                t.RTCPeerConnection.prototype.getSenders = function() {
                    return this._senders = this._senders || [], this._senders.slice()
                };
                const o = t.RTCPeerConnection.prototype.addTrack;
                t.RTCPeerConnection.prototype.addTrack = function(t, s) {
                    let c = o.apply(this, arguments);
                    return c || (c = n(this, t), this._senders.push(c)), c
                };
                const s = t.RTCPeerConnection.prototype.removeTrack;
                t.RTCPeerConnection.prototype.removeTrack = function(t) {
                    s.apply(this, arguments);
                    const n = this._senders.indexOf(t); - 1 !== n && this._senders.splice(n, 1)
                }
            }
            const o = t.RTCPeerConnection.prototype.addStream;
            t.RTCPeerConnection.prototype.addStream = function(t) {
                this._senders = this._senders || [], o.apply(this, [t]), t.getTracks().forEach((t => {
                    this._senders.push(n(this, t))
                }))
            };
            const s = t.RTCPeerConnection.prototype.removeStream;
            t.RTCPeerConnection.prototype.removeStream = function(t) {
                this._senders = this._senders || [], s.apply(this, [t]), t.getTracks().forEach((t => {
                    const n = this._senders.find((n => n.track === t));
                    n && this._senders.splice(this._senders.indexOf(n), 1)
                }))
            }
        } else if (t.RTCPeerConnection && 'getSenders' in t.RTCPeerConnection.prototype && 'createDTMFSender' in t.RTCPeerConnection.prototype && t.RTCRtpSender && !('dtmf' in t.RTCRtpSender.prototype)) {
            const n = t.RTCPeerConnection.prototype.getSenders;
            t.RTCPeerConnection.prototype.getSenders = function() {
                const t = n.apply(this, []);
                return t.forEach((t => t._pc = this)), t
            }, Object.defineProperty(t.RTCRtpSender.prototype, 'dtmf', {
                get() {
                    return void 0 === this._dtmf && ('audio' === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf
                }
            })
        }
    }, e.shimGetStats = function(t) {
        if (!t.RTCPeerConnection) return;
        const n = t.RTCPeerConnection.prototype.getStats;
        t.RTCPeerConnection.prototype.getStats = function() {
            const [t, o, s] = arguments;
            if (arguments.length > 0 && 'function' == typeof t) return n.apply(this, arguments);
            if (0 === n.length && (0 === arguments.length || 'function' != typeof t)) return n.apply(this, []);
            const c = function(t) {
                    const n = {};
                    return t.result().forEach((t => {
                        const o = {
                            id: t.id,
                            timestamp: t.timestamp,
                            type: {
                                localcandidate: 'local-candidate',
                                remotecandidate: 'remote-candidate'
                            }[t.type] || t.type
                        };
                        t.names().forEach((n => {
                            o[n] = t.stat(n)
                        })), n[o.id] = o
                    })), n
                },
                p = function(t) {
                    return new Map(Object.keys(t).map((n => [n, t[n]])))
                };
            if (arguments.length >= 2) {
                const s = function(t) {
                    o(p(c(t)))
                };
                return n.apply(this, [s, t])
            }
            return new Promise(((t, o) => {
                n.apply(this, [function(n) {
                    t(p(c(n)))
                }, o])
            })).then(o, s)
        }
    }, Object.defineProperty(e, "shimGetUserMedia", {
        enumerable: !0,
        get: function() {
            return o.shimGetUserMedia
        }
    }), e.shimMediaStream = function(t) {
        t.MediaStream = t.MediaStream || t.webkitMediaStream
    }, e.shimOnTrack = function(t) {
        if (t.RTCPeerConnection && !('ontrack' in t.RTCPeerConnection.prototype)) {
            Object.defineProperty(t.RTCPeerConnection.prototype, 'ontrack', {
                get() {
                    return this._ontrack
                },
                set(t) {
                    this._ontrack && this.removeEventListener('track', this._ontrack), this.addEventListener('track', this._ontrack = t)
                },
                enumerable: !0,
                configurable: !0
            });
            const n = t.RTCPeerConnection.prototype.setRemoteDescription;
            t.RTCPeerConnection.prototype.setRemoteDescription = function() {
                return this._ontrackpoly || (this._ontrackpoly = n => {
                    n.stream.addEventListener('addtrack', (o => {
                        let s;
                        s = t.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find((t => t.track && t.track.id === o.track.id)) : {
                            track: o.track
                        };
                        const c = new Event('track');
                        c.track = o.track, c.receiver = s, c.transceiver = {
                            receiver: s
                        }, c.streams = [n.stream], this.dispatchEvent(c)
                    })), n.stream.getTracks().forEach((o => {
                        let s;
                        s = t.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find((t => t.track && t.track.id === o.id)) : {
                            track: o
                        };
                        const c = new Event('track');
                        c.track = o, c.receiver = s, c.transceiver = {
                            receiver: s
                        }, c.streams = [n.stream], this.dispatchEvent(c)
                    }))
                }, this.addEventListener('addstream', this._ontrackpoly)), n.apply(this, arguments)
            }
        } else n.wrapPeerConnectionEvent(t, 'track', (t => (t.transceiver || Object.defineProperty(t, 'transceiver', {
            value: {
                receiver: t.receiver
            }
        }), t)))
    }, e.shimPeerConnection = function(t, n) {
        !t.RTCPeerConnection && t.webkitRTCPeerConnection && (t.RTCPeerConnection = t.webkitRTCPeerConnection);
        if (!t.RTCPeerConnection) return;
        n.version < 53 && ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach((function(n) {
            const o = t.RTCPeerConnection.prototype[n],
                s = {
                    [n]() {
                        return arguments[0] = new('addIceCandidate' === n ? t.RTCIceCandidate : t.RTCSessionDescription)(arguments[0]), o.apply(this, arguments)
                    }
                };
            t.RTCPeerConnection.prototype[n] = s[n]
        }))
    }, e.shimSenderReceiverGetStats = function(t) {
        if (!(t.RTCPeerConnection && t.RTCRtpSender && t.RTCRtpReceiver)) return;
        if (!('getStats' in t.RTCRtpSender.prototype)) {
            const o = t.RTCPeerConnection.prototype.getSenders;
            o && (t.RTCPeerConnection.prototype.getSenders = function() {
                const t = o.apply(this, []);
                return t.forEach((t => t._pc = this)), t
            });
            const s = t.RTCPeerConnection.prototype.addTrack;
            s && (t.RTCPeerConnection.prototype.addTrack = function() {
                const t = s.apply(this, arguments);
                return t._pc = this, t
            }), t.RTCRtpSender.prototype.getStats = function() {
                const t = this;
                return this._pc.getStats().then((o => n.filterStats(o, t.track, !0)))
            }
        }
        if (!('getStats' in t.RTCRtpReceiver.prototype)) {
            const o = t.RTCPeerConnection.prototype.getReceivers;
            o && (t.RTCPeerConnection.prototype.getReceivers = function() {
                const t = o.apply(this, []);
                return t.forEach((t => t._pc = this)), t
            }), n.wrapPeerConnectionEvent(t, 'track', (t => (t.receiver._pc = t.srcElement, t))), t.RTCRtpReceiver.prototype.getStats = function() {
                const t = this;
                return this._pc.getStats().then((o => n.filterStats(o, t.track, !1)))
            }
        }
        if (!('getStats' in t.RTCRtpSender.prototype) || !('getStats' in t.RTCRtpReceiver.prototype)) return;
        const o = t.RTCPeerConnection.prototype.getStats;
        t.RTCPeerConnection.prototype.getStats = function() {
            if (arguments.length > 0 && arguments[0] instanceof t.MediaStreamTrack) {
                const t = arguments[0];
                let n, o, s;
                return this.getSenders().forEach((o => {
                    o.track === t && (n ? s = !0 : n = o)
                })), this.getReceivers().forEach((n => (n.track === t && (o ? s = !0 : o = n), n.track === t))), s || n && o ? Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError')) : n ? n.getStats() : o ? o.getStats() : Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'))
            }
            return o.apply(this, arguments)
        }
    };
    var n = t(r(d[1])),
        o = r(d[2]),
        s = r(d[3]);

    function c(t) {
        t.RTCPeerConnection.prototype.getLocalStreams = function() {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map((t => this._shimmedLocalStreams[t][0]))
        };
        const n = t.RTCPeerConnection.prototype.addTrack;
        t.RTCPeerConnection.prototype.addTrack = function(t, o) {
            if (!o) return n.apply(this, arguments);
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            const s = n.apply(this, arguments);
            return this._shimmedLocalStreams[o.id] ? -1 === this._shimmedLocalStreams[o.id].indexOf(s) && this._shimmedLocalStreams[o.id].push(s) : this._shimmedLocalStreams[o.id] = [o, s], s
        };
        const o = t.RTCPeerConnection.prototype.addStream;
        t.RTCPeerConnection.prototype.addStream = function(t) {
            this._shimmedLocalStreams = this._shimmedLocalStreams || {}, t.getTracks().forEach((t => {
                if (this.getSenders().find((n => n.track === t))) throw new DOMException('Track already exists.', 'InvalidAccessError')
            }));
            const n = this.getSenders();
            o.apply(this, arguments);
            const s = this.getSenders().filter((t => -1 === n.indexOf(t)));
            this._shimmedLocalStreams[t.id] = [t].concat(s)
        };
        const s = t.RTCPeerConnection.prototype.removeStream;
        t.RTCPeerConnection.prototype.removeStream = function(t) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[t.id], s.apply(this, arguments)
        };
        const c = t.RTCPeerConnection.prototype.removeTrack;
        t.RTCPeerConnection.prototype.removeTrack = function(t) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, t && Object.keys(this._shimmedLocalStreams).forEach((n => {
                const o = this._shimmedLocalStreams[n].indexOf(t); - 1 !== o && this._shimmedLocalStreams[n].splice(o, 1), 1 === this._shimmedLocalStreams[n].length && delete this._shimmedLocalStreams[n]
            })), c.apply(this, arguments)
        }
    }
}), "abcd6e", ["45f788", "9cdad4", "63e673", "8d8a4f"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = e.TrustIdentityGetApiSession = {
        defaultProps: {},
        propTypes: {}
    };
    t.fullyQualifiedName = 'Identity.v1.TrustIdentityGetApiSession';
    e.TrustIdentityGetApiSessionEvent = function(n) {
        return {
            eventData: n,
            eventDataSchema: t
        }
    }
}), "ac762a", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.getRawDataFromImageDataURI = function(t) {
        return t.replace(/^data:image\/\w+;base64,/, '')
    };
    var o = t(r(d[1])),
        n = t(r(d[2])),
        s = t(r(d[3])),
        l = t(r(d[4])),
        u = r(d[5]);
    const f = {
        width: 400,
        height: 300,
        onlyCropResult: !0,
        flipHorizontally: !1,
        doNotFlipResult: !0,
        onCameraLive() {},
        onError() {},
        onInactive() {}
    };
    class c extends o.default.Component {
        componentDidMount() {
            const t = (l.default.get('asset_paths') || {})['webcam.swf'];
            s.default.setSWFLocation(t), s.default.set(this.getWebcamOptions()), this.attachWebcamEventListeners(), s.default.attach(n.default.findDOMNode(this))
        }
        componentWillUnmount() {
            this.removeWebcamEventListeners(), s.default.reset()
        }
        getWebcamOptions() {
            const {
                width: t,
                height: o,
                resolutionWidth: n,
                resolutionHeight: s,
                cropWidth: l,
                cropHeight: u,
                flipHorizontally: f,
                onlyCropResult: c,
                doNotFlipResult: h,
                facingMode: p
            } = this.props;
            return {
                width: t,
                height: o,
                dest_width: n || t,
                dest_height: s || o,
                image_format: 'jpeg',
                jpeg_quality: 100,
                flip_horiz: f,
                only_crop_result: c,
                do_not_flip_result: h,
                crop_width: l,
                crop_height: u,
                facing_mode: p,
                new_user_configure_flash: !1,
                show_error_html_content: !1,
                flash_fallback_on_error: !1
            }
        }
        attachWebcamEventListeners() {
            const {
                onCameraLive: t,
                onInactive: o,
                onError: n
            } = this.props;
            s.default.on('live', (() => {
                t(), s.default.stream && s.default.stream.addEventListener('inactive', o)
            })), s.default.on('error', n)
        }
        removeWebcamEventListeners() {
            s.default.off('live'), s.default.off('error'), s.default.stream && s.default.stream.removeEventListener('inactive', this.props.onInactive)
        }
        takePhoto() {
            return new Promise((t => {
                s.default.snap(t)
            }))
        }
        savePreview({
            fullPreview: t
        } = {}) {
            return new Promise((o => {
                const {
                    crop_width: n,
                    crop_height: l
                } = s.default.params;
                t && (s.default.params.crop_width = 0, s.default.params.crop_height = 0), s.default.snap((u => {
                    t && (s.default.params.crop_width = n, s.default.params.crop_height = l), o(u)
                }))
            }))
        }
        render() {
            return (0, u.jsx)("div", {})
        }
    }
    e.default = c, c.defaultProps = f
}), "ada572", ["ba7a76", "07aa1f", "b67917", "08f5d0", "ef2bc3", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const s = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M16 4a7 7 0 0 1 4.11 12.66A13.01 13.01 0 0 1 28.96 28h-2A11 11 0 0 0 18 18.18v-2.6a5 5 0 1 0-4 0v2.6A11 11 0 0 0 5.04 28h-2c.4-5.3 3.99-9.72 8.85-11.34A6.99 6.99 0 0 1 16 4z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcSystemPersonLarge32', {
        defaultSize: 32
    });
    e.default = s
}), "adc15a", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const v = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M29.3 12h.7a1 1 0 0 0 .58-1.81L17.74 1.02a3 3 0 0 0-3.48 0L1.42 10.19A1 1 0 0 0 2 12h.7v11.7H1v2.6h30v-2.6h-1.7V12zm-2.6 11.7h-3.4V12h3.4v11.7zm-6-11.7v11.7h-3.4V12h3.4zm-6 0v11.7h-3.39V12h3.39zm-9.4 0h3.41v11.7H5.3V12zM31 27.7v2.6H1v-2.6h30z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcCompactBank16', {
        defaultSize: 16
    });
    e.default = v
}), "b33aa6", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const s = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M28.75 26h-2.04A10.93 10.93 0 0 0 18 17.69v-2.12a5 5 0 1 0-4 0v2.12A10.93 10.93 0 0 0 5.3 26H3.24a12.93 12.93 0 0 1 8.2-9.68 7 7 0 1 1 9.1 0 12.93 12.93 0 0 1 8.2 9.68zm-6.84-3.5-1.41-1.41-6.5 6.5-3-3L9.59 26 14 30.41z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcSystemHostAssign32', {
        defaultSize: 32
    });
    e.default = s
}), "b5188d", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const l = (0, t(r(d[1])).default)({
        svgContents: "<g stroke=\"none\"><path d=\"M24 6c.336 0 .67.01 1 .027V23.6l12.409 12.408A17.955 17.955 0 0 1 24 42c-9.941 0-18-8.059-18-18S14.059 6 24 6z\" fill-opacity=\".2\" /><path d=\"M24 2c12.15 0 22 9.85 22 22s-9.85 22-22 22S2 36.15 2 24 11.85 2 24 2zm0 2C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm1 6l-.001 13.584 9.708 9.709-1.414 1.414L23 24.414V10h2z\" /></g>",
        svgProps: {
            viewBox: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg"
        }
    }, 'IcFeatureClock48', {
        defaultSize: 48
    });
    e.default = l
}), "b6c434", ["ba7a76", "6a9266"]);
__d((function(g, r, i, a, m, e, d) {
    m.exports = r(d[0]).registerAsset({
        __packager_asset: !0,
        httpServerLocation: "a0.muscache.com/airbnb/static/packages/assets/frontend/account-fov/images",
        width: 325,
        height: 300,
        scales: [1],
        hash: "aa22a5b1137281c7c27449e7b276b864",
        name: "gov-id-selfie",
        type: "svg"
    })
}), "c0185b", ["64c00a"]);
__d((function(g, r, i, a, m, e, d) {
    'use strict';
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.shimAddTransceiver = function(t) {
        if (!t.RTCPeerConnection) return;
        const n = t.RTCPeerConnection.prototype.addTransceiver;
        n && (t.RTCPeerConnection.prototype.addTransceiver = function() {
            this.setParametersPromises = [];
            let t = arguments[1] && arguments[1].sendEncodings;
            void 0 === t && (t = []), t = [...t];
            const o = t.length > 0;
            o && t.forEach((t => {
                if ('rid' in t) {
                    if (!/^[a-z0-9]{0,16}$/i.test(t.rid)) throw new TypeError('Invalid RID value provided.')
                }
                if ('scaleResolutionDownBy' in t && !(parseFloat(t.scaleResolutionDownBy) >= 1)) throw new RangeError('scale_resolution_down_by must be >= 1.0');
                if ('maxFramerate' in t && !(parseFloat(t.maxFramerate) >= 0)) throw new RangeError('max_framerate must be >= 0.0')
            }));
            const s = n.apply(this, arguments);
            if (o) {
                const {
                    sender: n
                } = s, o = n.getParameters();
                (!('encodings' in o) || 1 === o.encodings.length && 0 === Object.keys(o.encodings[0]).length) && (o.encodings = t, n.sendEncodings = t, this.setParametersPromises.push(n.setParameters(o).then((() => {
                    delete n.sendEncodings
                })).catch((() => {
                    delete n.sendEncodings
                }))))
            }
            return s
        })
    }, e.shimCreateAnswer = function(t) {
        if (!t.RTCPeerConnection) return;
        const n = t.RTCPeerConnection.prototype.createAnswer;
        t.RTCPeerConnection.prototype.createAnswer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then((() => n.apply(this, arguments))).finally((() => {
                this.setParametersPromises = []
            })) : n.apply(this, arguments)
        }
    }, e.shimCreateOffer = function(t) {
        if (!t.RTCPeerConnection) return;
        const n = t.RTCPeerConnection.prototype.createOffer;
        t.RTCPeerConnection.prototype.createOffer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then((() => n.apply(this, arguments))).finally((() => {
                this.setParametersPromises = []
            })) : n.apply(this, arguments)
        }
    }, Object.defineProperty(e, "shimGetDisplayMedia", {
        enumerable: !0,
        get: function() {
            return s.shimGetDisplayMedia
        }
    }), e.shimGetParameters = function(t) {
        if (!t.RTCRtpSender) return;
        const n = t.RTCRtpSender.prototype.getParameters;
        n && (t.RTCRtpSender.prototype.getParameters = function() {
            const t = n.apply(this, arguments);
            return 'encodings' in t || (t.encodings = [].concat(this.sendEncodings || [{}])), t
        })
    }, Object.defineProperty(e, "shimGetUserMedia", {
        enumerable: !0,
        get: function() {
            return o.shimGetUserMedia
        }
    }), e.shimOnTrack = function(t) {
        t.RTCTrackEvent && 'receiver' in t.RTCTrackEvent.prototype && !('transceiver' in t.RTCTrackEvent.prototype) && Object.defineProperty(t.RTCTrackEvent.prototype, 'transceiver', {
            get() {
                return {
                    receiver: this.receiver
                }
            }
        })
    }, e.shimPeerConnection = function(t, n) {
        if (!t.RTCPeerConnection && !t.mozRTCPeerConnection) return;
        !t.RTCPeerConnection && t.mozRTCPeerConnection && (t.RTCPeerConnection = t.mozRTCPeerConnection);
        n.version < 53 && ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach((function(n) {
            const o = t.RTCPeerConnection.prototype[n],
                s = {
                    [n]() {
                        return arguments[0] = new('addIceCandidate' === n ? t.RTCIceCandidate : t.RTCSessionDescription)(arguments[0]), o.apply(this, arguments)
                    }
                };
            t.RTCPeerConnection.prototype[n] = s[n]
        }));
        const o = {
                inboundrtp: 'inbound-rtp',
                outboundrtp: 'outbound-rtp',
                candidatepair: 'candidate-pair',
                localcandidate: 'local-candidate',
                remotecandidate: 'remote-candidate'
            },
            s = t.RTCPeerConnection.prototype.getStats;
        t.RTCPeerConnection.prototype.getStats = function() {
            const [t, c, p] = arguments;
            return s.apply(this, [t || null]).then((t => {
                if (n.version < 53 && !c) try {
                    t.forEach((t => {
                        t.type = o[t.type] || t.type
                    }))
                } catch (n) {
                    if ('TypeError' !== n.name) throw n;
                    t.forEach(((n, s) => {
                        t.set(s, Object.assign({}, n, {
                            type: o[n.type] || n.type
                        }))
                    }))
                }
                return t
            })).then(c, p)
        }
    }, e.shimRTCDataChannel = function(t) {
        t.DataChannel && !t.RTCDataChannel && (t.RTCDataChannel = t.DataChannel)
    }, e.shimReceiverGetStats = function(t) {
        if (!t.RTCPeerConnection || !t.RTCRtpSender) return;
        if (t.RTCRtpSender && 'getStats' in t.RTCRtpReceiver.prototype) return;
        const o = t.RTCPeerConnection.prototype.getReceivers;
        o && (t.RTCPeerConnection.prototype.getReceivers = function() {
            const t = o.apply(this, []);
            return t.forEach((t => t._pc = this)), t
        });
        n.wrapPeerConnectionEvent(t, 'track', (t => (t.receiver._pc = t.srcElement, t))), t.RTCRtpReceiver.prototype.getStats = function() {
            return this._pc.getStats(this.track)
        }
    }, e.shimRemoveStream = function(t) {
        if (!t.RTCPeerConnection || 'removeStream' in t.RTCPeerConnection.prototype) return;
        t.RTCPeerConnection.prototype.removeStream = function(t) {
            n.deprecated('removeStream', 'removeTrack'), this.getSenders().forEach((n => {
                n.track && t.getTracks().includes(n.track) && this.removeTrack(n)
            }))
        }
    }, e.shimSenderGetStats = function(t) {
        if (!t.RTCPeerConnection || !t.RTCRtpSender) return;
        if (t.RTCRtpSender && 'getStats' in t.RTCRtpSender.prototype) return;
        const n = t.RTCPeerConnection.prototype.getSenders;
        n && (t.RTCPeerConnection.prototype.getSenders = function() {
            const t = n.apply(this, []);
            return t.forEach((t => t._pc = this)), t
        });
        const o = t.RTCPeerConnection.prototype.addTrack;
        o && (t.RTCPeerConnection.prototype.addTrack = function() {
            const t = o.apply(this, arguments);
            return t._pc = this, t
        });
        t.RTCRtpSender.prototype.getStats = function() {
            return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map)
        }
    };
    var n = t(r(d[1])),
        o = r(d[2]),
        s = r(d[3])
}), "c3f78e", ["45f788", "9cdad4", "3f225c", "7596e5"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const v = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M1.67 2.68A2 2 0 0 1 4.1.72l.14.04L16.01 4.3 27.78.91a2 2 0 0 1 2.53 1.63l.02.14v23.25a2 2 0 0 1-1.27 1.85l-.15.06-12.62 3.78a1 1 0 0 1-.46.03l-.12-.03L3.1 27.84a2 2 0 0 1-1.42-1.75v-.17zm2 0v23.24L16 29.62l12.33-3.7V2.82L16.28 6.3a1 1 0 0 1-.46.03l-.1-.03zm21.66 17.48v2.08L16 25.04v-2.08zm0-6v2.08L16 19.04v-2.08zm0-6v2.08L16 13.04v-2.08z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcSystemBook32', {
        defaultSize: 32
    });
    e.default = v
}), "c8783d", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        const t = (0, u.useCx)();
        return (0, s.jsx)("div", {
            className: t(c.bullet),
            children: (0, s.jsx)(l.default, {
                size: 10,
                decorative: !0
            })
        })
    };
    t(r(d[1])), r(d[2]);
    var u = r(d[3]),
        l = t(r(d[4])),
        s = r(d[5]);
    const c = {
        bullet: "bl52r5g atm_h3_14y27yu"
    }
}), "d1a203", ["ba7a76", "07aa1f", "ea4b89", "4786a8", "62b8a4", "b8c07d"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const v = (0, t(r(d[1])).default)({
        svgContents: "<path d=\"M31 21v9a1 1 0 0 1-.88 1H21v-2h8v-8zM3 21v8h8v2H2a1 1 0 0 1-1-.88V21zM16 7a7 7 0 0 1 4.11 12.66 13.04 13.04 0 0 1 7.9 7.34h-2.2c-1.54-3-4.4-5.2-7.81-5.82v-2.6a5 5 0 1 0-4 0v2.6A11.02 11.02 0 0 0 6.2 27H4a13.04 13.04 0 0 1 7.89-7.34A6.99 6.99 0 0 1 16 7zm14-6a1 1 0 0 1 1 .88V11h-2V3h-8V1zM11 1v2H3v8H1V2a1 1 0 0 1 .88-1H2z\" />",
        svgProps: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        }
    }, 'IcSystemSelfiePhoto32', {
        defaultSize: 32
    });
    e.default = v
}), "d38e0f", ["ba7a76", "c65865"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = t(r(d[1])),
        o = r(d[2]);
    const c = (0, l.default)({
        svgContents: "<path d=\"M3.425 6.586C2.105 13.877 4.938 18.959 12 21.958c7.062-3 9.894-8.08 8.575-15.372A14.03 14.03 0 0112 2.256a14.03 14.03 0 01-8.575 4.33zm8.193-5.409a.5.5 0 01.764 0 13.053 13.053 0 008.682 4.467.5.5 0 01.427.399c1.58 8.017-1.548 13.703-9.3 16.919a.5.5 0 01-.383 0C4.058 19.746.93 14.06 2.51 6.042a.5.5 0 01.427-.398 13.053 13.053 0 008.682-4.467z\" fill=\"#484848\" /><path d=\"M3 20h.5a.5.5 0 010 1H3v.5a.5.5 0 01-1 0V21h-.5a.5.5 0 010-1H2v-.5a.5.5 0 011 0zm2.5 3a.5.5 0 10-.5-.5.5.5 0 00.5.5zm15-21a.5.5 0 000 1h.5v.566a.5.5 0 101 0V3h.5a.5.5 0 000-1H22v-.5a.5.5 0 00-1 0V2zm-4.226 7.867a1 1 0 01-.14 1.407l-5.5 4.5a1 1 0 01-1.381-.11l-2-2.25a1 1 0 111.494-1.328l1.363 1.532 4.757-3.892a1 1 0 011.407.14zM12.006 3.66a.313.313 0 00-.197.114 12.483 12.483 0 01-7.303 3.539.413.413 0 00-.4.422c-.284 4.084.05 9.184 7.397 13.01A1.169 1.169 0 0012 20.9a1.168 1.168 0 00.503-.156c7.347-3.825 7.681-8.925 7.397-13.01a.413.413 0 00-.4-.421 12.483 12.483 0 01-7.303-3.539.316.316 0 00-.191-.114z\" />",
        svgProps: {
            viewBox: "0 0 24 24"
        }
    }, 'IconIndicatorVerifiedShield', {
        defaultFillColor: '#00D1C1'
    });
    e.default = c;
    c.categories = [o.INDICATOR]
}), "d96efa", ["ba7a76", "a89bd1", "72354b"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.WebcamCaptureScreenTypes = e.VERIFICATION_STEPS = e.VALID_GOV_ID_OPTIONS = e.VALID_FOV_OPTIONS = e.UserContext = e.TOTAL_MILLISECONDS_FOR_CAPTURES = e.ScreensWithDisclamimerAndNonStickyFooter = e.SSNFieldByServerInputFieldName = e.SSNField = e.RequestPlatform = e.NUM_SELFIES_TO_CAPTURE = e.LegalNameFields = e.LegalInfoField = e.HOST_USER_CONTEXTS = e.GovIdPlatform = e.FovScreenTypeByServerScreenClass = e.FovScreenType = e.FovOption = e.FovFlowType = e.FovFlowContext = e.FooterCTA = e.FlowLifeCycleStage = e.FOV_MODAL_CONTAINER_ID = e.ExitScreenTypes = e.CountriesWithInvertedNameOrder = e.CAPTURE_STEP = e.ActionType = void 0;
    const _ = e.FovOption = {
            NONE: '',
            GOVERNMENT_ID: 'GOV_ID',
            SSN: 'SSN',
            LEGAL_INFO: 'LEGAL_INFO',
            NAVER_ID: 'NAVER_ID',
            KAKAO_ID: 'KAKAO_ID'
        },
        E = e.GovIdPlatform = {
            NONE: '',
            ADD_WITH_APP: 'MOBILE_APP',
            ADD_WITH_BROWSER: 'BROWSER',
            UPLOAD_FROM_DEVICE: 'UPLOAD',
            ADD_WITH_PHONE_NUMBER_COLLECTION: 'MOBILE_APP_PHONE_NUMBER_COLLECTION',
            ADD_WITH_BROWSER_FRICTIONLESS: 'BROWSER_FRICTIONLESS',
            QR_CODE: 'QR_CODE'
        },
        I = (e.RequestPlatform = {
            DESKTOP_WEB: 'DESKTOP_WEB',
            MOBILE_WEB: 'MOBILE_WEB'
        }, e.FovScreenType = {
            LANDING: 'fov_landing_screen',
            SSN_INPUT: 'ssn_input',
            SSN_SUCCESS: 'ssn_success',
            SSN_ERROR: 'ssn_error',
            SSN_RETRY: 'ssn_retry',
            LOADING_V3: 'loading_screen_v3',
            LOADING_V4: 'loading_screen_v4',
            FOV_SUCCESS: 'fov_success',
            HELP_INFO: 'help_info',
            EXIT: 'exit',
            CONFIRM_DISMISS_LISTING: 'confirm_dismiss_listing_screen',
            GOV_ID_REDIRECT: 'gov_id_redirect_screen',
            GOV_ID_SELECT_PLATFORM: 'gov_id_select_platform_screen',
            MOBILE_HANDOFF: 'mobile_handoff_screen',
            GOV_ID_CAMERA_PREPARE: 'prepare_camera_screen',
            GOV_ID_CAPTURE: 'gov_id_capture_screen',
            GOV_ID_REVIEW: 'gov_id_review_screen',
            GOV_ID_UPLOAD_IMAGE: 'gov_id_upload_image_screen',
            SELFIE_CAPTURE: 'selfie_capture_screen',
            SELFIE_REVIEW: 'selfie_review_screen',
            GOV_ID_LOADING: 'gov_id_loading',
            ANIMATED_ACTION: 'animated_actionable_screen',
            GOV_ID_SELECT_TYPE: 'gov_id_select_type_screen',
            GOV_ID_UNSUPPORTED_TYPE: 'unsupported_id_type_screen',
            VERIFICATION_SUCCESS: 'verification_success_screen',
            ANIMATED_DUAL_ACTION: 'animated_dual_action_screen',
            LEGAL_INFO_ENTRY: 'fov_legal_info_entry_screen',
            TITLE_SUBTITLE_DUAL_ACTION: 'title_subtitle_dual_action_screen',
            IMAGE_CAPTURE_INTERSTITIAL: 'image_capture_interstitial_screen',
            STACKED_BUTTON: 'stacked_button_screen',
            GOV_ID_ISSUING_COUNTRY_WARNING: 'gov_id_issuing_country_warning_screen',
            AUTO_CAPTURE: 'auto_capture_screen',
            TEXT_ROW_LIST_HELP: 'text_row_list_help_screen',
            GOV_ID_PHONE_NUMBER_COLLECTION: 'gov_id_phone_number_collection_screen',
            CHINA_GOV_ID_USER_INPUT: 'china_gov_id_user_input_screen',
            CONFIRM_LEGAL_NAME: 'confirm_legal_name_screen',
            CONSENT_SCREEN: 'consent_screen',
            REDIRECT_SCREEN: 'redirect_screen',
            KOREAN_REDIRECT_ID_ENTRY_SCREEN: 'korean_redirect_id_entry_screen',
            KOREAN_REDIRECT_ID_PENDING_SCREEN: 'korean_redirect_id_pending_screen',
            INFO_DISPLAY_SCREEN: 'info_display_screen'
        }),
        O = (e.ExitScreenTypes = new Set([I.EXIT, I.CONFIRM_DISMISS_LISTING]), e.FovScreenTypeByServerScreenClass = {
            loading_screen_v3: I.LOADING_V3,
            loading_screen_v4: I.LOADING_V4,
            fov_landing_screen: I.LANDING,
            fov_v2_select_friction_screen: I.LANDING,
            enter_s_s_n_screen: I.SSN_INPUT,
            help_screen: I.HELP_INFO,
            help_v2_screen: I.HELP_INFO,
            confirm_dismiss_screen: I.EXIT,
            confirm_dismiss_v2_screen: I.EXIT,
            confirm_dismiss_listing_screen: I.CONFIRM_DISMISS_LISTING,
            verification_success_screen: I.FOV_SUCCESS,
            ssn_success_screen: I.SSN_SUCCESS,
            ssn_failed_screen: I.SSN_ERROR,
            gov_id_redirect_screen: I.GOV_ID_REDIRECT,
            confirm_your_info_screen_web: I.SSN_RETRY,
            confirm_your_info_screen: I.SSN_RETRY,
            gov_id_select_platform_screen: I.GOV_ID_SELECT_PLATFORM,
            mobile_handoff_screen: I.MOBILE_HANDOFF,
            prepare_camera_screen: I.GOV_ID_CAMERA_PREPARE,
            gov_id_upload_image_screen: I.GOV_ID_UPLOAD_IMAGE,
            gov_id_capture_screen: I.GOV_ID_CAPTURE,
            gov_id_review_screen: I.GOV_ID_REVIEW,
            selfie_capture_screen: I.SELFIE_CAPTURE,
            selfie_review_screen: I.SELFIE_REVIEW,
            animated_actionable_screen: I.ANIMATED_ACTION,
            gov_id_select_type_screen: I.GOV_ID_SELECT_TYPE,
            unsupported_id_type_screen: I.GOV_ID_UNSUPPORTED_TYPE,
            loading_screen: I.GOV_ID_LOADING,
            animated_intro_screen: I.GOV_ID_LOADING,
            animated_dual_action_screen: I.ANIMATED_DUAL_ACTION,
            fov_legal_info_entry_screen: I.LEGAL_INFO_ENTRY,
            title_subtitle_dual_action_screen: I.TITLE_SUBTITLE_DUAL_ACTION,
            image_capture_interstitial_screen: I.IMAGE_CAPTURE_INTERSTITIAL,
            stacked_button_screen: I.STACKED_BUTTON,
            gov_id_issuing_country_warning_screen: I.GOV_ID_ISSUING_COUNTRY_WARNING,
            auto_capture_screen: I.AUTO_CAPTURE,
            text_row_list_help_screen: I.TEXT_ROW_LIST_HELP,
            gov_id_phone_number_collection_screen: I.GOV_ID_PHONE_NUMBER_COLLECTION,
            china_gov_id_user_input_screen: I.CHINA_GOV_ID_USER_INPUT,
            confirm_legal_name_screen: I.CONFIRM_LEGAL_NAME,
            consent_screen: I.CONSENT_SCREEN,
            redirect_screen: I.REDIRECT_SCREEN,
            korean_redirect_id_entry_screen: I.KOREAN_REDIRECT_ID_ENTRY_SCREEN,
            korean_redirect_id_pending_screen: I.KOREAN_REDIRECT_ID_PENDING_SCREEN,
            info_display_screen: I.INFO_DISPLAY_SCREEN
        }, e.WebcamCaptureScreenTypes = new Set([I.GOV_ID_CAMERA_PREPARE, I.AUTO_CAPTURE, I.GOV_ID_REVIEW, I.IMAGE_CAPTURE_INTERSTITIAL]), e.FovFlowContext = {
            SSN_FIRST_ATTEMPT: 'SSN_FIRST_ATTEMPT',
            SSN_RETRY: 'SSN_RETRY',
            GOV_ID: 'GOV_ID',
            SELFIE: 'SELFIE',
            LEGAL_INFO: 'LEGAL_INFO',
            FLOW_START: 'FLOW_START',
            POST_SUBMISSION: 'POST_SUBMISSION',
            THREE_INFO: 'THREE_INFO',
            CONFIRM_LEGAL_NAME: 'CONFIRM_LEGAL_NAME',
            EDIT_LEGAL_NAME: 'EDIT_LEGAL_NAME',
            KOREAN_REDIRECT_ID: 'KOREAN_REDIRECT_ID'
        }, e.UserContext = {
            BOOKING_POST_P4: 'BOOKING_POST_P4',
            HOST_LYS: 'HOST_LYS',
            HOST_NOTIFICATIONS: 'HOST_NOTIFICATIONS',
            BOOKING_POST_P3: 'BOOKING_POST_P3',
            INSTANT_BOOKING: 'INSTANT_BOOKING',
            P4_RE_ENTRY: 'P4_RE_ENTRY',
            GOV_ID_IN_FOV: 'GOV_ID_IN_FOV',
            BOOKING_ITINERARY: 'BOOKING_ITINERARY',
            EXPERIENCE_PRIMARY_GUEST: 'EXPERIENCE_PRIMARY_GUEST',
            EXPERIENCE_OTHER_GUEST: 'EXPERIENCE_OTHER_GUEST',
            EXPERIENCE_HOST: 'EXPERIENCE_HOST',
            EXPERIENCE_ITINERARY: 'EXPERIENCE_ITINERARY',
            RISKY_LISTING_VERIFICATION: 'RISKY_LISTING_VERIFICATION',
            MANAGE_YOUR_SPACE: 'MANAGE_YOUR_SPACE',
            CHINA_PASSPORT: 'CHINA_PASSPORT',
            EDIT_PROFILE: 'EDIT_PROFILE',
            HELP_CENTER: 'HELP_CENTER',
            COHOST_INVITATION: 'COHOST_INVITATION',
            AIRLOCK: 'AIRLOCK',
            BAVI_FOR_INDIVIDUAL: 'BAVI_FOR_INDIVIDUAL',
            BOOKING_BACKGROUND_CHECK: 'BOOKING_BACKGROUND_CHECK',
            SUSPENSION_APPEAL: 'SUSPENSION_APPEAL',
            GENERIC: 'GENERIC',
            NOTIFICATION: 'NOTIFICATION',
            WAYFINDER: 'WAYFINDER',
            THIRD_PARTY_BOOKING: 'THIRD_PARTY_BOOKING',
            COMPLIANCE: 'COMPLIANCE',
            EDIT_LISTING: 'EDIT_LISTING',
            EXPERIENCE_COHOST: 'EXPERIENCE_COHOST',
            MESSAGING_THREAD: 'MESSAGING_THREAD',
            DASHBOARD_ALERT: 'DASHBOARD_ALERT',
            CITIES_TAX: 'CITIES_TAX',
            BOOKING_POST_P4_HUB: 'BOOKING_POST_P4_HUB',
            ACCOUNT_SETTINGS: 'ACCOUNT_SETTINGS',
            IDENTITY_HELP_MODAL: 'IDENTITY_HELP_MODAL',
            HOST_RESERVATIONS: 'HOST_RESERVATIONS',
            IDENTITY_BADGE_PROFILE: 'IDENTITY_BADGE_PROFILE',
            IDENTITY_BADGE_HRD: 'IDENTITY_BADGE_HRD',
            USER_PROFILE: 'USER_PROFILE',
            VERIFICATIONS_BOX_PROFILE: 'VERIFICATIONS_BOX_PROFILE',
            HOST_ADVANCE_PROGRAM: 'HOST_ADVANCE_PROGRAM',
            HOST_APP_VERIFIED_LISTINGS: 'HOST_APP_VERIFIED_LISTINGS',
            EXPERIENCE_LISTING: 'EXPERIENCE_LISTING',
            KYC: 'KYC',
            APPEALS: 'APPEALS',
            HOSTING_TODAY_TAB: 'HOSTING_TODAY_TAB',
            CHINA_BOOKING_POST_P4: 'CHINA_BOOKING_POST_P4',
            STAYS_HOST_GLOBAL_BANNER: 'STAYS_HOST_GLOBAL_BANNER',
            REMOVED_GOV_ID: 'REMOVED_GOV_ID',
            RESERVATION_DETAILS_PAGE: 'RESERVATION_DETAILS_PAGE',
            TRIPS_TAB: 'TRIPS_TAB',
            BUSINESS_VERIFICATION: 'BUSINESS_VERIFICATION',
            CONFIRM_LEGAL_NAME: 'CONFIRM_LEGAL_NAME',
            EDIT_LEGAL_NAME: 'EDIT_LEGAL_NAME',
            NOTIFICATION_SMS_ITINERARY_CONFIRM_LEGAL_NAME: 'NOTIFICATION_SMS_ITINERARY_CONFIRM_LEGAL_NAME',
            NOTIFICATION_EMAIL_ITINERARY_CONFIRM_LEGAL_NAME: 'NOTIFICATION_EMAIL_ITINERARY_CONFIRM_LEGAL_NAME',
            NOTIFICATION_PUSH_ITINERARY_CONFIRM_LEGAL_NAME: 'NOTIFICATION_PUSH_ITINERARY_CONFIRM_LEGAL_NAME',
            ITINERARY_CONFIRM_LEGAL_NAME: 'ITINERARY_CONFIRM_LEGAL_NAME',
            ACCOUNT_SETTINGS_CONFIRM_LEGAL_NAME: 'ACCOUNT_SETTINGS_CONFIRM_LEGAL_NAME',
            ACCOUNT_SETTINGS_CONTINUE_EDIT_NAME: 'ACCOUNT_SETTINGS_CONTINUE_EDIT_NAME',
            KYC_EDIT_LEGAL_NAME: 'KYC_EDIT_LEGAL_NAME',
            NOTIFICATION_SMS_TODAY_CONFIRM_LEGAL_NAME: 'NOTIFICATION_SMS_TODAY_CONFIRM_LEGAL_NAME',
            NOTIFICATION_EMAIL_TODAY_CONFIRM_LEGAL_NAME: 'NOTIFICATION_EMAIL_TODAY_CONFIRM_LEGAL_NAME',
            NOTIFICATION_PUSH_TODAY_CONFIRM_LEGAL_NAME: 'NOTIFICATION_PUSH_TODAY_CONFIRM_LEGAL_NAME',
            APPEAL_LEGAL_NAME_VERIFICATION: 'APPEAL_LEGAL_NAME_VERIFICATION',
            NOTIFICATION_UPLOAD_ANOTHER_ID: 'NOTIFICATION_UPLOAD_ANOTHER_ID',
            UPLOAD_ANOTHER_ID: 'UPLOAD_ANOTHER_ID',
            NOTIFICATION_SMS_LVF_CONFIRM_LEGAL_NAME: 'NOTIFICATION_SMS_LVF_CONFIRM_LEGAL_NAME',
            NOTIFICATION_EMAIL_LVF_CONFIRM_LEGAL_NAME: 'NOTIFICATION_EMAIL_LVF_CONFIRM_LEGAL_NAME',
            NOTIFICATION_PUSH_LVF_CONFIRM_LEGAL_NAME: 'NOTIFICATION_PUSH_LVF_CONFIRM_LEGAL_NAME',
            HELP_CENTER_CONFIRM_LEGAL_NAME: 'HELP_CENTER_CONFIRM_LEGAL_NAME',
            KYC_CONFIRM_LEGAL_NAME: 'KYC_CONFIRM_LEGAL_NAME',
            CHATBOT_CONFIRM_LEGAL_NAME: 'CHATBOT_CONFIRM_LEGAL_NAME',
            NOTIFICATION_SMS_PERSONAL_INFO_CONFIRM_LEGAL_NAME: 'NOTIFICATION_SMS_PERSONAL_INFO_CONFIRM_LEGAL_NAME',
            NOTIFICATION_EMAIL_PERSONAL_INFO_CONFIRM_LEGAL_NAME: 'NOTIFICATION_EMAIL_PERSONAL_INFO_CONFIRM_LEGAL_NAME',
            NOTIFICATION_PUSH_PERSONAL_INFO_CONFIRM_LEGAL_NAME: 'NOTIFICATION_PUSH_PERSONAL_INFO_CONFIRM_LEGAL_NAME',
            LVF_CONFIRM_LEGAL_NAME: 'LVF_CONFIRM_LEGAL_NAME',
            LVF_UPLOAD_ANOTHER_ID: 'LVF_UPLOAD_ANOTHER_ID',
            ITINERARY_UPLOAD_ANOTHER_ID: 'ITINERARY_UPLOAD_ANOTHER_ID',
            TODAY_CONFIRM_LEGAL_NAME: 'TODAY_CONFIRM_LEGAL_NAME',
            TODAY_UPLOAD_ANOTHER_ID: 'TODAY_UPLOAD_ANOTHER_ID',
            HOST_CALENDAR: 'HOST_CALENDAR'
        }),
        N = (e.HOST_USER_CONTEXTS = new Set([O.RISKY_LISTING_VERIFICATION, O.HOST_LYS, O.EXPERIENCE_LISTING, O.HOST_NOTIFICATIONS, O.EXPERIENCE_HOST, O.MANAGE_YOUR_SPACE, O.HOST_ADVANCE_PROGRAM, O.EXPERIENCE_COHOST, O.EDIT_LISTING, O.HOST_RESERVATIONS, O.HOSTING_TODAY_TAB, O.STAYS_HOST_GLOBAL_BANNER, O.COHOST_INVITATION, O.HOST_CALENDAR]), e.FovFlowType = {
            FOV_V1: 'FOV_V1',
            FOV_V1_RETRY: 'FOV_V1_RETRY',
            FOV_V1_SUCCESS: 'FOV_V1_SUCCESS',
            GOV_ID_V1: 'GOV_ID_V1',
            FOV_V1_RETRY_FROM_LANDING_SCREEN: 'FOV_V1_RETRY_FROM_LANDING_SCREEN',
            GOV_ID_V1_FRONT_ONLY: 'GOV_ID_V1_FRONT_ONLY',
            GOV_ID_V1_FRONT_ONLY_WEB: 'GOV_ID_V1_FRONT_ONLY_WEB',
            GOV_ID_V1_FRONT_AND_BACK: 'GOV_ID_V1_FRONT_AND_BACK',
            GOV_ID_V1_FRONT_AND_BACK_WEB: 'GOV_ID_V1_FRONT_AND_BACK_WEB',
            GOV_ID_V1_FRONT_ONLY_USER_ERROR: 'GOV_ID_V1_FRONT_ONLY_USER_ERROR',
            GOV_ID_V1_FRONT_ONLY_USER_ERROR_WEB: 'GOV_ID_V1_FRONT_ONLY_USER_ERROR_WEB',
            GOV_ID_V1_SELFIE: 'GOV_ID_V1_SELFIE',
            GOV_ID_V1_SELFIE_RETRY: 'GOV_ID_V1_SELFIE_RETRY',
            GOV_ID_V1_SELFIE_ASYNC: 'GOV_ID_V1_SELFIE_ASYNC',
            GOV_ID_V1_SELFIE_WEB: 'GOV_ID_V1_SELFIE_WEB',
            GOV_ID_V1_SELFIE_RETRY_WEB: 'GOV_ID_V1_SELFIE_RETRY_WEB',
            GOV_ID_V1_SUCCESS: 'GOV_ID_V1_SUCCESS',
            FOV_V1_HOST_PRE_DEACTIVATION: 'FOV_V1_HOST_PRE_DEACTIVATION',
            FOV_V1_HOST_POST_DEACTIVATION: 'FOV_V1_HOST_POST_DEACTIVATION',
            FOV_V1_HOST_LYS: 'FOV_V1_HOST_LYS',
            FOV_V1_HOST_NOTIFICATION_SUCCESS: 'FOV_V1_HOST_NOTIFICATION_SUCCESS',
            FOV_V1_HOST_PRE_DEACTIVATION_RETRY_FROM_ENTRY: 'FOV_V1_HOST_PRE_DEACTIVATION_RETRY_FROM_ENTRY',
            FOV_V1_HOST_POST_DEACTIVATION_RETRY_FROM_ENTRY: 'FOV_V1_HOST_POST_DEACTIVATION_RETRY_FROM_ENTRY',
            FOV_V1_HOST_LYS_RETRY_FROM_ENTRY: 'FOV_V1_HOST_LYS_RETRY_FROM_ENTRY',
            FOV_V1_HOST_PRE_DEACTIVATION_GOV_ID_V1: 'FOV_V1_HOST_PRE_DEACTIVATION_GOV_ID_V1',
            FOV_V1_HOST_POST_DEACTIVATION_GOV_ID_V1: 'FOV_V1_HOST_POST_DEACTIVATION_GOV_ID_V1',
            FOV_V1_HOST_LYS_GOV_ID_V1: 'FOV_V1_HOST_LYS_GOV_ID_V1',
            FOV_V1_GENERIC_SUCCESS: 'FOV_V1_GENERIC_SUCCESS',
            GOV_ID_V1_PENDING: 'GOV_ID_V1_PENDING',
            GOV_ID_V1_CHINA_PASSPORT: 'GOV_ID_V1_CHINA_PASSPORT',
            GOV_ID_V1_FRONT_AND_BACK_MOWEB: 'GOV_ID_V1_FRONT_AND_BACK_MOWEB',
            GOV_ID_V1_SELFIE_MOWEB: 'GOV_ID_V1_SELFIE_MOWEB',
            FOV_LEGAL_INFO_V1_LOADING_FLOW_START: 'FOV_LEGAL_INFO_V1_LOADING_FLOW_START',
            FOV_LEGAL_INFO_V1: 'FOV_LEGAL_INFO_V1',
            FOV_LEGAL_INFO_V1_LOADING_POST_SUBMISSION: 'FOV_LEGAL_INFO_V1_LOADING_POST_SUBMISSION',
            FOV_LEGAL_INFO_V1_SUCCESS: 'FOV_LEGAL_INFO_V1_SUCCESS',
            FOV_LEGAL_INFO_V1_FAILURE: 'FOV_LEGAL_INFO_V1_FAILURE',
            FOV_GOV_ID_ONLY_V1: 'FOV_GOV_ID_ONLY_V1',
            FOV_LEGAL_INFO_V2: 'FOV_LEGAL_INFO_V2',
            FOV_LEGAL_INFO_V2_LOADING_FLOW_START: 'FOV_LEGAL_INFO_V2_LOADING_FLOW_START',
            FOV_LOADING_V2_FRICTIONLESS_SUCCESS: 'FOV_LOADING_V2_FRICTIONLESS_SUCCESS',
            SSN_LOADING_FLOW_START: 'SSN_LOADING_FLOW_START',
            GOV_ID_V1_LOADING_FLOW_START: 'GOV_ID_V1_LOADING_FLOW_START',
            GOV_ID_V1_LOADING_FLOW_START_WEB: 'GOV_ID_V1_LOADING_FLOW_START_WEB',
            SSN_V2: 'SSN_V2',
            SSN_V2_RETRY_FROM_LANDING_SCREEN: 'SSN_V2_RETRY_FROM_LANDING_SCREEN',
            HELP_MODAL_V1: 'HELP_MODAL_V1',
            LOADING_SUCCESS_V1: 'LOADING_SUCCESS_V1',
            HELP_MODAL_VERIFICATION_V1: 'HELP_MODAL_VERIFICATION_V1',
            SSN_HOST_ADVANCE_V1: 'SSN_HOST_ADVANCE_V1',
            SSN_HOST_ADVANCE_RETRY_FROM_ENTRY_V1: 'SSN_HOST_ADVANCE_RETRY_FROM_ENTRY_V1',
            SSN_HOST_ADVANCE_GOV_ID_V1: 'SSN_HOST_ADVANCE_GOV_ID_V1',
            SSN_LOADING_FLOW: 'SSN_LOADING_FLOW',
            SSN_RETRY_LOADING_FLOW: 'SSN_RETRY_LOADING_FLOW',
            SSN_FAILURE: 'SSN_FAILURE',
            CHINA_IDENTITY_REDIRECT_FLOW: 'CHINA_IDENTITY_REDIRECT_FLOW',
            GOV_ID_SELFIE_LOADING_FLOW_START: 'GOV_ID_SELFIE_LOADING_FLOW_START',
            GOV_ID_SELFIE_LOADING_FLOW_START_WEB: 'GOV_ID_SELFIE_LOADING_FLOW_START_WEB',
            GOV_ID_SELFIE_LOADING_FLOW_START_MOWEB: 'GOV_ID_SELFIE_LOADING_FLOW_START_MOWEB',
            CHINA_ID_THREE_INFO_FLOW_START: 'CHINA_ID_THREE_INFO_FLOW_START',
            CHINA_ID_SUCCESS: 'CHINA_ID_SUCCESS',
            CHINA_ID_FAILURE: 'CHINA_ID_FAILURE',
            CONFIRM_LEGAL_NAME: 'CONFIRM_LEGAL_NAME'
        }, e.ActionType = {
            CANCEL_RESERVATION: 'CANCEL_RESERVATION',
            GO_BACK: 'GO_BACK',
            DISMISS_FLOW: 'DISMISS_FLOW',
            SEND_FEEDBACK: 'SEND_FEEDBACK',
            GO_TO_SCREEN: 'GO_TO_SCREEN',
            POST_DATA: 'POST_DATA',
            POST_SELFIE: 'POST_SELFIE',
            TAKE_PHOTO: 'TAKE_PHOTO',
            SEND_TEXT: 'SEND_TEXT',
            START_POLLING: 'START_POLLING',
            GO_TO_SCREEN_BY_ID_TYPE: 'GO_TO_SCREEN_BY_ID_TYPE',
            OPEN_LINK: 'OPEN_LINK',
            POPUP_MODAL: 'POPUP_MODAL'
        }, e.SSNField = {
            SSN: 'SSN_LAST_FOUR',
            FIRST_NAME: 'FIRST_NAME',
            LAST_NAME: 'LAST_NAME',
            MIDDLE_NAME: 'MIDDLE_NAME',
            BIRTH_DAY: 'DOB_DAY',
            BIRTH_MONTH: 'DOB_MONTH',
            BIRTH_YEAR: 'DOB_YEAR',
            BIRTH_DATE: 'DATE_OF_BIRTH'
        });
    e.SSNFieldByServerInputFieldName = {
        input_field: N.SSN,
        ssn_last_four: N.SSN,
        first_name: N.FIRST_NAME,
        last_name: N.LAST_NAME,
        middle_name: N.MIDDLE_NAME,
        birth_date_day: N.BIRTH_DAY,
        birth_date_month: N.BIRTH_MONTH,
        birth_date_year: N.BIRTH_YEAR,
        birth_date: N.BIRTH_DATE
    }, e.LegalInfoField = {
        FIRST_NAME: 'FIRST_NAME',
        LAST_NAME: 'LAST_NAME',
        COUNTRY_CODE: 'COUNTRY_CODE',
        STREET: 'STREET',
        APT: 'APT',
        CITY: 'CITY',
        STATE: 'STATE',
        ZIPCODE: 'ZIPCODE'
    }, e.VALID_FOV_OPTIONS = new Set([_.GOVERNMENT_ID, _.SSN, _.LEGAL_INFO, _.NAVER_ID, _.KAKAO_ID]), e.VALID_GOV_ID_OPTIONS = new Set(Object.values(E)), e.CAPTURE_STEP = {
        ID_FRONT: 'id_front',
        ID_BACK: 'id_back',
        SELFIE: 'selfie'
    }, e.FooterCTA = {
        ACTION: 'action',
        BACK: 'back',
        CAMERA: 'camera',
        CANCEL: 'cancel',
        NEXT: 'next',
        FINISH: 'finish',
        TRY_AGAIN: 'try_again',
        RESEND_TEXT: 'resend_text',
        NONE: 'none'
    }, e.FlowLifeCycleStage = {
        NONE: 'none',
        STARTED: 'started',
        ENDED: 'ended'
    }, e.VERIFICATION_STEPS = {
        TYPE_GOVERNMENT_ID: 'government_id'
    }, e.NUM_SELFIES_TO_CAPTURE = 3, e.TOTAL_MILLISECONDS_FOR_CAPTURES = 1e3, e.FOV_MODAL_CONTAINER_ID = 'fov-flow-container', e.LegalNameFields = {
        FIRST_NAME: 'FIRST_NAME',
        LAST_NAME: 'LAST_NAME',
        PREFERRED_NAME: 'PREFERRED_NAME'
    }, e.CountriesWithInvertedNameOrder = ['CN', 'JP', 'KR', 'TW', 'RU'], e.ScreensWithDisclamimerAndNonStickyFooter = [I.CHINA_GOV_ID_USER_INPUT, I.GOV_ID_UPLOAD_IMAGE, I.LANDING, I.GOV_ID_SELECT_PLATFORM, I.GOV_ID_SELECT_TYPE]
}), "e3eb42", []);
__d((function(g, r, i, a, m, e, d) {
    "use strict";

    function _() {
        const o = r(d[0]);
        return _ = function() {
            return o
        }, o
    }

    function o() {
        const _ = r(d[1]);
        return o = function() {
            return _
        }, _
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.UPLOAD_FRONT_BUTTON_LOGGING_ID = e.UPLOAD_BACK_BUTTON_LOGGING_ID = e.UNSUPPORTED_TYPE_OPTION_LOGGING_ID = e.SUBTITLE_LINK_LOGGING_ID = e.SSN_CODE_INPUT_LOGGING_ID = e.SIDEBAR_TEXT_LINK_LOGGING_ID = e.SEND_AGAIN_LINK_LOGGING_ID = e.SELECT_TYPE_OPTION_LOGGING_ID = e.SELECT_TYPE_COUNTRY_SELECT_LOGGING_ID = e.SELECT_PLATFORM_OPTION_LOGGING_ID = e.SELECT_FRICTION_OPTION_LOGGING_ID = e.SECONDARY_BUTTON_LOGGING_ID = e.PRIVACY_DISCLAIMER_LINK_LOGGING_ID = e.PRIMARY_RETAKE_PHOTO_BUTTON_LOGGING_ID = e.PRIMARY_BUTTON_LOGGING_ID = e.INPUT_HELPER_TEXT_LINK_LOGGING_ID = e.HELP_LINK_LOGGING_ID = e.FORM_TEXT_INPUT_LOGGING_ID = e.FORM_SELECT_LOGGING_ID = e.Element = e.CONSENT_TOGGLE_LOGGING_ID = e.CLOSE_OR_BACK_BUTTON_LOGGING_ID = void 0, e.getExtraInfoForLogging = function(_) {
        return {
            id: (0, t.screenIdSelector)(_),
            page: (0, t.currentStepSelector)(_),
            flow_type: (0, t.flowTypeSelector)(_),
            user_context: (0, t.contextSelector)(_)
        }
    }, e.getImageFileSize = E, e.getVerificationFromFlowType = function(_) {
        switch (_) {
            case O.FovFlowType.GOV_ID_V1:
            case O.FovFlowType.GOV_ID_V1_FRONT_ONLY:
            case O.FovFlowType.GOV_ID_V1_FRONT_ONLY_WEB:
            case O.FovFlowType.GOV_ID_V1_FRONT_AND_BACK:
            case O.FovFlowType.GOV_ID_V1_FRONT_AND_BACK_WEB:
            case O.FovFlowType.GOV_ID_V1_FRONT_AND_BACK_MOWEB:
            case O.FovFlowType.GOV_ID_V1_FRONT_ONLY_USER_ERROR:
            case O.FovFlowType.GOV_ID_V1_FRONT_ONLY_USER_ERROR_WEB:
            case O.FovFlowType.GOV_ID_V1_SUCCESS:
            case O.FovFlowType.GOV_ID_V1_PENDING:
            case O.FovFlowType.GOV_ID_V1_LOADING_FLOW_START_WEB:
            case O.FovFlowType.CHINA_ID_THREE_INFO_FLOW_START:
            case O.FovFlowType.CHINA_ID_SUCCESS:
            case O.FovFlowType.CHINA_ID_FAILURE:
                return 2;
            case O.FovFlowType.GOV_ID_V1_SELFIE:
            case O.FovFlowType.GOV_ID_V1_SELFIE_RETRY:
            case O.FovFlowType.GOV_ID_V1_SELFIE_ASYNC:
            case O.FovFlowType.GOV_ID_V1_SELFIE_WEB:
            case O.FovFlowType.GOV_ID_V1_SELFIE_MOWEB:
            case O.FovFlowType.GOV_ID_V1_SELFIE_RETRY_WEB:
            case O.FovFlowType.GOV_ID_SELFIE_LOADING_FLOW_START_WEB:
            case O.FovFlowType.GOV_ID_SELFIE_LOADING_FLOW_START_MOWEB:
                return 3;
            default:
                return
        }
    }, e.logAutoCapture = function() {
        (0, G.logUniversalComponentActionEvent)(T, void 0, 25)
    }, e.logGetApiSessionStart = function(o, O) {
        return (0, I.logSessionStart)({
            schema: _().TrustIdentityGetApiSession,
            event_data: {
                user_context: o,
                flow_context: O
            }
        })
    }, e.logModelDownload = function(_, o) {
        const I = {
            status: _
        };
        o && (I.message = o);
        (0, G.logUniversalComponentActionEvent)(N, {
            selected_data: I
        }, 25)
    }, e.logModelPerformance = function(_) {
        (0, G.logUniversalComponentActionEvent)(n, {
            selected_data: _
        }, 25)
    }, e.logPostApiSessionStart = function(_, O, t) {
        return (0, I.logSessionStart)({
            schema: o().TrustIdentityPostApiSession,
            event_data: {
                user_context: _,
                flow_context: O,
                gov_id_image_size: E(t)
            }
        })
    };
    var I = r(d[2]),
        O = r(d[3]),
        t = r(d[4]),
        G = r(d[5]);
    e.PRIMARY_BUTTON_LOGGING_ID = 'fov.footer.primaryButton', e.PRIMARY_RETAKE_PHOTO_BUTTON_LOGGING_ID = 'fov.footer.primaryButton.retakePhoto', e.SECONDARY_BUTTON_LOGGING_ID = 'fov.footer.secondaryButton', e.UPLOAD_FRONT_BUTTON_LOGGING_ID = 'fov.upload.uploadFrontButton', e.UPLOAD_BACK_BUTTON_LOGGING_ID = 'fov.upload.uploadBackButton', e.HELP_LINK_LOGGING_ID = 'fov.helpLink', e.SEND_AGAIN_LINK_LOGGING_ID = 'fov.handoff.sendAgainLink', e.CLOSE_OR_BACK_BUTTON_LOGGING_ID = 'fov.navbar.closeOrBackButton', e.SELECT_FRICTION_OPTION_LOGGING_ID = 'fov.selectFriction.fovOption', e.SELECT_PLATFORM_OPTION_LOGGING_ID = 'fov.selectPlatform.fovOption', e.SELECT_TYPE_OPTION_LOGGING_ID = 'fov.selectType.fovOption', e.UNSUPPORTED_TYPE_OPTION_LOGGING_ID = 'fov.unsupportedType.fovOption', e.SELECT_TYPE_COUNTRY_SELECT_LOGGING_ID = 'fov.selectType.countrySelect', e.SSN_CODE_INPUT_LOGGING_ID = 'fov.ssn.codeInput', e.FORM_SELECT_LOGGING_ID = 'fov.form.textInput', e.FORM_TEXT_INPUT_LOGGING_ID = 'fov.form.textInput', e.PRIVACY_DISCLAIMER_LINK_LOGGING_ID = 'fov.privacyDisclaimer.link', e.SIDEBAR_TEXT_LINK_LOGGING_ID = 'fov.sidebar.textLink', e.SUBTITLE_LINK_LOGGING_ID = 'fov.subtitle.link', e.INPUT_HELPER_TEXT_LINK_LOGGING_ID = 'fov.inputHelperText.link', e.CONSENT_TOGGLE_LOGGING_ID = 'fov.consentCollection.faceMatchOption';
    const T = 'fov.autoCapture.captured',
        N = 'fov.modelDownload',
        n = 'fov.modelPerformance';
    e.Element = Object.freeze({
        FOV_OPTION: 'fov_option',
        NAVIGATION_BUTTON_CONTINUE: 'navigation_button_continue',
        NAVIGATION_BUTTON_CANCEL: 'navigation_button_cancel',
        BUTTON_HELP: 'button_help',
        DISMISS_LINK: 'dismiss_link',
        PRIMARY: 'primary',
        SECONDARY: 'secondary',
        FILE_UPLOAD: 'file_upload'
    });

    function E(_) {
        return _ ? _.length / 1024 + " kb" : void 0
    }
}), "f017de", ["ac762a", "9e231a", "9e7031", "e3eb42", "48a86b", "8eb9ca"]);
__d((function(g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]).default;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    const l = (0, t(r(d[1])).default)({
        svgContents: "<g stroke=\"none\"><path d=\"M24 5c-4.462 0-9.204.909-14.23 2.743L9 8.029v27.372a1 1 0 0 0 .478.853l.116.06L24 42.716l14.406-6.402a1 1 0 0 0 .586-.783L39 35.4V8.03l-.082-.032c-5.062-1.921-9.839-2.913-14.333-2.993z\" fill-opacity=\".2\" /><path d=\"M24 1c5.599 0 11.518 1.275 17.755 3.816a2 2 0 0 1 1.239 1.691L43 6.67V35.4a5 5 0 0 1-2.764 4.472l-.205.097L24 47.094 7.97 39.97a5 5 0 0 1-2.965-4.342L5 35.4V6.669a2 2 0 0 1 1.245-1.853C12.483 2.275 18.401 1 24 1zm0 2C18.879 3 13.443 4.128 7.692 6.391L7 6.67V35.4a3 3 0 0 0 1.605 2.655l.177.086L24 44.905l15.218-6.763a3 3 0 0 0 1.757-2.351l.019-.194.006-.196V6.669l-.692-.278C34.557 4.128 29.121 3 24 3zm10.5 12.586L35.914 17 20.25 32.664 12.086 24.5l1.414-1.414 6.75 6.749z\" /></g>",
        svgProps: {
            viewBox: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg"
        }
    }, 'IcFeatureVerified48', {
        defaultSize: 48
    });
    e.default = l
}), "f17e06", ["ba7a76", "6a9266"]);
__r("a9f4b1").extend({
    "user.first_name_invalid": "Your first name contains an unsupported character. Try spelling it differently.",
    "user.last_name_invalid": "Your last name contains an unsupported character. Try spelling it differently.",
    "validation.failure.password_required": "Password is required.",
    "validation.failure.password_too_short": "Your password must be at least %{smart_count} character. Please try again.||||Your password must be at least %{smart_count} characters. Please try again.",
    "validation.failure.password_too_long": "Your password must be at most %{smart_count} character. Please try again.||||Your password must be at most %{smart_count} characters. Please try again.",
    "users.password_contains_forbidden_content": "Your password can’t contain your name or email address. Please try again.",
    "validation.failure.password_contains_forbidden_content_for_national_number": "Your password can’t contain your name or phone number. Please try again",
    "validation.failure.password_contains_forbidden_name": "Your password can’t contain your name. Please try again",
    "users.validation.failure.password_contains_forbidden_content_v2": "Please choose a stronger password. It should not be easy to guess. Try a mix of letters, numbers, and symbols.",
    "validation.failure.email_required": "Email is required.",
    "validation.failure.email_invalid": "Enter a valid email.",
    "validation.failure.phone_number_required": "Phone number is required.",
    "validation.failure.phone_number_invalid": "Phone number is too short or contains invalid characters.",
    "a4w.sso.signup_login.generic_error": "Something went wrong, please try again later.",
    "validation.failure.first_name_required": "First name is required.",
    "validation.failure.first_name_too_long": "Your first name must be at most %{smart_count} character. Please try again.||||Your first name must be at most %{smart_count} characters. Please try again.",
    "validation.failure.first_name_only_has_invalid_characters": "Please use valid characters for your name.",
    "validation.failure.last_name_required": "Last name is required.",
    "validation.failure.last_name_too_long": "Your last name must be at most %{smart_count} character. Please try again.||||Your last name must be at most %{smart_count} characters. Please try again.",
    "validation.failure.last_name_only_has_invalid_characters": "Please use valid characters for your name.",
    "validation.failure.birthday_required": "Select your date of birth to continue.",
    "validation.failure.captcha_validation_required": "You need to pass the validation test above.",
    "validation.failure.confirmation_code_required": "Confirmation code is required.",
    "validation.failure.password_confirmation_required": "Verify your password.",
    "validation.failure.password_confirmation_doesnt_match": "Your passwords don’t match. Try entering them again.",
    "validation.success": "Looks good!",
    "signup_login.tos.please_agree_to_continue": "Please agree to continue."
});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/bf6b.4288b48e2d.js.map