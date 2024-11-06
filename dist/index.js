(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      new EventSource(`http://localhost:3000/esbuild`).addEventListener(
        "change",
        () => location.reload()
      );
    }
  });

  // node_modules/plyr/dist/plyr.min.js
  var require_plyr_min = __commonJS({
    "node_modules/plyr/dist/plyr.min.js"(exports, module) {
      init_live_reload();
      "object" == typeof navigator && function(e2, t2) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define("Plyr", t2) : (e2 = "undefined" != typeof globalThis ? globalThis : e2 || self).Plyr = t2();
      }(exports, function() {
        "use strict";
        function e2(e3, t3, i2) {
          return (t3 = function(e4) {
            var t4 = function(e5, t5) {
              if ("object" != typeof e5 || null === e5) return e5;
              var i3 = e5[Symbol.toPrimitive];
              if (void 0 !== i3) {
                var s2 = i3.call(e5, t5 || "default");
                if ("object" != typeof s2) return s2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t5 ? String : Number)(e5);
            }(e4, "string");
            return "symbol" == typeof t4 ? t4 : String(t4);
          }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: i2, enumerable: true, configurable: true, writable: true }) : e3[t3] = i2, e3;
        }
        function t2(e3, t3) {
          for (var i2 = 0; i2 < t3.length; i2++) {
            var s2 = t3[i2];
            s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(e3, s2.key, s2);
          }
        }
        function i(e3, t3, i2) {
          return t3 in e3 ? Object.defineProperty(e3, t3, { value: i2, enumerable: true, configurable: true, writable: true }) : e3[t3] = i2, e3;
        }
        function s(e3, t3) {
          var i2 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var s2 = Object.getOwnPropertySymbols(e3);
            t3 && (s2 = s2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), i2.push.apply(i2, s2);
          }
          return i2;
        }
        function n(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n2 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? s(Object(n2), true).forEach(function(t4) {
              i(e3, t4, n2[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n2)) : s(Object(n2)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n2, t4));
            });
          }
          return e3;
        }
        var a = { addCSS: true, thumbWidth: 15, watch: true };
        var l = function(e3) {
          return null != e3 ? e3.constructor : null;
        }, r = function(e3, t3) {
          return !!(e3 && t3 && e3 instanceof t3);
        }, o = function(e3) {
          return null == e3;
        }, c = function(e3) {
          return l(e3) === Object;
        }, u = function(e3) {
          return l(e3) === String;
        }, h = function(e3) {
          return Array.isArray(e3);
        }, d = function(e3) {
          return r(e3, NodeList);
        }, m = { nullOrUndefined: o, object: c, number: function(e3) {
          return l(e3) === Number && !Number.isNaN(e3);
        }, string: u, boolean: function(e3) {
          return l(e3) === Boolean;
        }, function: function(e3) {
          return l(e3) === Function;
        }, array: h, nodeList: d, element: function(e3) {
          return r(e3, Element);
        }, event: function(e3) {
          return r(e3, Event);
        }, empty: function(e3) {
          return o(e3) || (u(e3) || h(e3) || d(e3)) && !e3.length || c(e3) && !Object.keys(e3).length;
        } };
        function p(e3, t3) {
          if (1 > t3) {
            var i2 = function(e4) {
              var t4 = "".concat(e4).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              return t4 ? Math.max(0, (t4[1] ? t4[1].length : 0) - (t4[2] ? +t4[2] : 0)) : 0;
            }(t3);
            return parseFloat(e3.toFixed(i2));
          }
          return Math.round(e3 / t3) * t3;
        }
        var g = function() {
          function e3(t3, i2) {
            (function(e4, t4) {
              if (!(e4 instanceof t4)) throw new TypeError("Cannot call a class as a function");
            })(this, e3), m.element(t3) ? this.element = t3 : m.string(t3) && (this.element = document.querySelector(t3)), m.element(this.element) && m.empty(this.element.rangeTouch) && (this.config = n({}, a, {}, i2), this.init());
          }
          return function(e4, i2, s2) {
            i2 && t2(e4.prototype, i2), s2 && t2(e4, s2);
          }(e3, [{ key: "init", value: function() {
            e3.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
          } }, { key: "destroy", value: function() {
            e3.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
          } }, { key: "listeners", value: function(e4) {
            var t3 = this, i2 = e4 ? "addEventListener" : "removeEventListener";
            ["touchstart", "touchmove", "touchend"].forEach(function(e5) {
              t3.element[i2](e5, function(e6) {
                return t3.set(e6);
              }, false);
            });
          } }, { key: "get", value: function(t3) {
            if (!e3.enabled || !m.event(t3)) return null;
            var i2, s2 = t3.target, n2 = t3.changedTouches[0], a2 = parseFloat(s2.getAttribute("min")) || 0, l2 = parseFloat(s2.getAttribute("max")) || 100, r2 = parseFloat(s2.getAttribute("step")) || 1, o2 = s2.getBoundingClientRect(), c2 = 100 / o2.width * (this.config.thumbWidth / 2) / 100;
            return 0 > (i2 = 100 / o2.width * (n2.clientX - o2.left)) ? i2 = 0 : 100 < i2 && (i2 = 100), 50 > i2 ? i2 -= (100 - 2 * i2) * c2 : 50 < i2 && (i2 += 2 * (i2 - 50) * c2), a2 + p(i2 / 100 * (l2 - a2), r2);
          } }, { key: "set", value: function(t3) {
            e3.enabled && m.event(t3) && !t3.target.disabled && (t3.preventDefault(), t3.target.value = this.get(t3), function(e4, t4) {
              if (e4 && t4) {
                var i2 = new Event(t4, { bubbles: true });
                e4.dispatchEvent(i2);
              }
            }(t3.target, "touchend" === t3.type ? "change" : "input"));
          } }], [{ key: "setup", value: function(t3) {
            var i2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s2 = null;
            if (m.empty(t3) || m.string(t3) ? s2 = Array.from(document.querySelectorAll(m.string(t3) ? t3 : 'input[type="range"]')) : m.element(t3) ? s2 = [t3] : m.nodeList(t3) ? s2 = Array.from(t3) : m.array(t3) && (s2 = t3.filter(m.element)), m.empty(s2)) return null;
            var l2 = n({}, a, {}, i2);
            if (m.string(t3) && l2.watch) {
              var r2 = new MutationObserver(function(i3) {
                Array.from(i3).forEach(function(i4) {
                  Array.from(i4.addedNodes).forEach(function(i5) {
                    m.element(i5) && function(e4, t4) {
                      return function() {
                        return Array.from(document.querySelectorAll(t4)).includes(this);
                      }.call(e4, t4);
                    }(i5, t3) && new e3(i5, l2);
                  });
                });
              });
              r2.observe(document.body, { childList: true, subtree: true });
            }
            return s2.map(function(t4) {
              return new e3(t4, i2);
            });
          } }, { key: "enabled", get: function() {
            return "ontouchstart" in document.documentElement;
          } }]), e3;
        }();
        const f = (e3) => null != e3 ? e3.constructor : null, y = (e3, t3) => Boolean(e3 && t3 && e3 instanceof t3), b = (e3) => null == e3, v = (e3) => f(e3) === Object, w = (e3) => f(e3) === String, T = (e3) => "function" == typeof e3, k = (e3) => Array.isArray(e3), C = (e3) => y(e3, NodeList), A = (e3) => b(e3) || (w(e3) || k(e3) || C(e3)) && !e3.length || v(e3) && !Object.keys(e3).length;
        var S = { nullOrUndefined: b, object: v, number: (e3) => f(e3) === Number && !Number.isNaN(e3), string: w, boolean: (e3) => f(e3) === Boolean, function: T, array: k, weakMap: (e3) => y(e3, WeakMap), nodeList: C, element: (e3) => null !== e3 && "object" == typeof e3 && 1 === e3.nodeType && "object" == typeof e3.style && "object" == typeof e3.ownerDocument, textNode: (e3) => f(e3) === Text, event: (e3) => y(e3, Event), keyboardEvent: (e3) => y(e3, KeyboardEvent), cue: (e3) => y(e3, window.TextTrackCue) || y(e3, window.VTTCue), track: (e3) => y(e3, TextTrack) || !b(e3) && w(e3.kind), promise: (e3) => y(e3, Promise) && T(e3.then), url: (e3) => {
          if (y(e3, window.URL)) return true;
          if (!w(e3)) return false;
          let t3 = e3;
          e3.startsWith("http://") && e3.startsWith("https://") || (t3 = `http://${e3}`);
          try {
            return !A(new URL(t3).hostname);
          } catch (e4) {
            return false;
          }
        }, empty: A };
        const E = (() => {
          const e3 = document.createElement("span"), t3 = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, i2 = Object.keys(t3).find((t4) => void 0 !== e3.style[t4]);
          return !!S.string(i2) && t3[i2];
        })();
        function P(e3, t3) {
          setTimeout(() => {
            try {
              e3.hidden = true, e3.offsetHeight, e3.hidden = false;
            } catch (e4) {
            }
          }, t3);
        }
        var M = { isIE: Boolean(window.document.documentMode), isEdge: /Edge/g.test(navigator.userAgent), isWebKit: "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent), isIPhone: /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1, isIPadOS: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, isIos: /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1 };
        function N(e3, t3) {
          return t3.split(".").reduce((e4, t4) => e4 && e4[t4], e3);
        }
        function x(e3 = {}, ...t3) {
          if (!t3.length) return e3;
          const i2 = t3.shift();
          return S.object(i2) ? (Object.keys(i2).forEach((t4) => {
            S.object(i2[t4]) ? (Object.keys(e3).includes(t4) || Object.assign(e3, { [t4]: {} }), x(e3[t4], i2[t4])) : Object.assign(e3, { [t4]: i2[t4] });
          }), x(e3, ...t3)) : e3;
        }
        function L(e3, t3) {
          const i2 = e3.length ? e3 : [e3];
          Array.from(i2).reverse().forEach((e4, i3) => {
            const s2 = i3 > 0 ? t3.cloneNode(true) : t3, n2 = e4.parentNode, a2 = e4.nextSibling;
            s2.appendChild(e4), a2 ? n2.insertBefore(s2, a2) : n2.appendChild(s2);
          });
        }
        function I(e3, t3) {
          S.element(e3) && !S.empty(t3) && Object.entries(t3).filter(([, e4]) => !S.nullOrUndefined(e4)).forEach(([t4, i2]) => e3.setAttribute(t4, i2));
        }
        function $(e3, t3, i2) {
          const s2 = document.createElement(e3);
          return S.object(t3) && I(s2, t3), S.string(i2) && (s2.innerText = i2), s2;
        }
        function _(e3, t3, i2, s2) {
          S.element(t3) && t3.appendChild($(e3, i2, s2));
        }
        function O(e3) {
          S.nodeList(e3) || S.array(e3) ? Array.from(e3).forEach(O) : S.element(e3) && S.element(e3.parentNode) && e3.parentNode.removeChild(e3);
        }
        function j(e3) {
          if (!S.element(e3)) return;
          let { length: t3 } = e3.childNodes;
          for (; t3 > 0; ) e3.removeChild(e3.lastChild), t3 -= 1;
        }
        function q(e3, t3) {
          return S.element(t3) && S.element(t3.parentNode) && S.element(e3) ? (t3.parentNode.replaceChild(e3, t3), e3) : null;
        }
        function D(e3, t3) {
          if (!S.string(e3) || S.empty(e3)) return {};
          const i2 = {}, s2 = x({}, t3);
          return e3.split(",").forEach((e4) => {
            const t4 = e4.trim(), n2 = t4.replace(".", ""), a2 = t4.replace(/[[\]]/g, "").split("="), [l2] = a2, r2 = a2.length > 1 ? a2[1].replace(/["']/g, "") : "";
            switch (t4.charAt(0)) {
              case ".":
                S.string(s2.class) ? i2.class = `${s2.class} ${n2}` : i2.class = n2;
                break;
              case "#":
                i2.id = t4.replace("#", "");
                break;
              case "[":
                i2[l2] = r2;
            }
          }), x(s2, i2);
        }
        function H(e3, t3) {
          if (!S.element(e3)) return;
          let i2 = t3;
          S.boolean(i2) || (i2 = !e3.hidden), e3.hidden = i2;
        }
        function R(e3, t3, i2) {
          if (S.nodeList(e3)) return Array.from(e3).map((e4) => R(e4, t3, i2));
          if (S.element(e3)) {
            let s2 = "toggle";
            return void 0 !== i2 && (s2 = i2 ? "add" : "remove"), e3.classList[s2](t3), e3.classList.contains(t3);
          }
          return false;
        }
        function F(e3, t3) {
          return S.element(e3) && e3.classList.contains(t3);
        }
        function V(e3, t3) {
          const { prototype: i2 } = Element;
          return (i2.matches || i2.webkitMatchesSelector || i2.mozMatchesSelector || i2.msMatchesSelector || function() {
            return Array.from(document.querySelectorAll(t3)).includes(this);
          }).call(e3, t3);
        }
        function U(e3) {
          return this.elements.container.querySelectorAll(e3);
        }
        function B(e3) {
          return this.elements.container.querySelector(e3);
        }
        function W(e3 = null, t3 = false) {
          S.element(e3) && e3.focus({ preventScroll: true, focusVisible: t3 });
        }
        const z = { "audio/ogg": "vorbis", "audio/wav": "1", "video/webm": "vp8, vorbis", "video/mp4": "avc1.42E01E, mp4a.40.2", "video/ogg": "theora" }, K = { audio: "canPlayType" in document.createElement("audio"), video: "canPlayType" in document.createElement("video"), check(e3, t3) {
          const i2 = K[e3] || "html5" !== t3;
          return { api: i2, ui: i2 && K.rangeInput };
        }, pip: !(M.isIPhone || !S.function($("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || $("video").disablePictureInPicture)), airplay: S.function(window.WebKitPlaybackTargetAvailabilityEvent), playsinline: "playsInline" in document.createElement("video"), mime(e3) {
          if (S.empty(e3)) return false;
          const [t3] = e3.split("/");
          let i2 = e3;
          if (!this.isHTML5 || t3 !== this.type) return false;
          Object.keys(z).includes(i2) && (i2 += `; codecs="${z[e3]}"`);
          try {
            return Boolean(i2 && this.media.canPlayType(i2).replace(/no/, ""));
          } catch (e4) {
            return false;
          }
        }, textTracks: "textTracks" in document.createElement("video"), rangeInput: (() => {
          const e3 = document.createElement("input");
          return e3.type = "range", "range" === e3.type;
        })(), touch: "ontouchstart" in document.documentElement, transitions: false !== E, reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches }, Y = (() => {
          let e3 = false;
          try {
            const t3 = Object.defineProperty({}, "passive", { get: () => (e3 = true, null) });
            window.addEventListener("test", null, t3), window.removeEventListener("test", null, t3);
          } catch (e4) {
          }
          return e3;
        })();
        function Q(e3, t3, i2, s2 = false, n2 = true, a2 = false) {
          if (!e3 || !("addEventListener" in e3) || S.empty(t3) || !S.function(i2)) return;
          const l2 = t3.split(" ");
          let r2 = a2;
          Y && (r2 = { passive: n2, capture: a2 }), l2.forEach((t4) => {
            this && this.eventListeners && s2 && this.eventListeners.push({ element: e3, type: t4, callback: i2, options: r2 }), e3[s2 ? "addEventListener" : "removeEventListener"](t4, i2, r2);
          });
        }
        function X(e3, t3 = "", i2, s2 = true, n2 = false) {
          Q.call(this, e3, t3, i2, true, s2, n2);
        }
        function J(e3, t3 = "", i2, s2 = true, n2 = false) {
          Q.call(this, e3, t3, i2, false, s2, n2);
        }
        function G(e3, t3 = "", i2, s2 = true, n2 = false) {
          const a2 = (...l2) => {
            J(e3, t3, a2, s2, n2), i2.apply(this, l2);
          };
          Q.call(this, e3, t3, a2, true, s2, n2);
        }
        function Z(e3, t3 = "", i2 = false, s2 = {}) {
          if (!S.element(e3) || S.empty(t3)) return;
          const n2 = new CustomEvent(t3, { bubbles: i2, detail: { ...s2, plyr: this } });
          e3.dispatchEvent(n2);
        }
        function ee() {
          this && this.eventListeners && (this.eventListeners.forEach((e3) => {
            const { element: t3, type: i2, callback: s2, options: n2 } = e3;
            t3.removeEventListener(i2, s2, n2);
          }), this.eventListeners = []);
        }
        function te() {
          return new Promise((e3) => this.ready ? setTimeout(e3, 0) : X.call(this, this.elements.container, "ready", e3)).then(() => {
          });
        }
        function ie(e3) {
          S.promise(e3) && e3.then(null, () => {
          });
        }
        function se(e3) {
          return S.array(e3) ? e3.filter((t3, i2) => e3.indexOf(t3) === i2) : e3;
        }
        function ne(e3, t3) {
          return S.array(e3) && e3.length ? e3.reduce((e4, i2) => Math.abs(i2 - t3) < Math.abs(e4 - t3) ? i2 : e4) : null;
        }
        function ae(e3) {
          return !(!window || !window.CSS) && window.CSS.supports(e3);
        }
        const le = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((e3, [t3, i2]) => ({ ...e3, [t3 / i2]: [t3, i2] }), {});
        function re(e3) {
          if (!(S.array(e3) || S.string(e3) && e3.includes(":"))) return false;
          return (S.array(e3) ? e3 : e3.split(":")).map(Number).every(S.number);
        }
        function oe(e3) {
          if (!S.array(e3) || !e3.every(S.number)) return null;
          const [t3, i2] = e3, s2 = (e4, t4) => 0 === t4 ? e4 : s2(t4, e4 % t4), n2 = s2(t3, i2);
          return [t3 / n2, i2 / n2];
        }
        function ce(e3) {
          const t3 = (e4) => re(e4) ? e4.split(":").map(Number) : null;
          let i2 = t3(e3);
          if (null === i2 && (i2 = t3(this.config.ratio)), null === i2 && !S.empty(this.embed) && S.array(this.embed.ratio) && ({ ratio: i2 } = this.embed), null === i2 && this.isHTML5) {
            const { videoWidth: e4, videoHeight: t4 } = this.media;
            i2 = [e4, t4];
          }
          return oe(i2);
        }
        function ue(e3) {
          if (!this.isVideo) return {};
          const { wrapper: t3 } = this.elements, i2 = ce.call(this, e3);
          if (!S.array(i2)) return {};
          const [s2, n2] = oe(i2), a2 = 100 / s2 * n2;
          if (ae(`aspect-ratio: ${s2}/${n2}`) ? t3.style.aspectRatio = `${s2}/${n2}` : t3.style.paddingBottom = `${a2}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            const e4 = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10), i3 = (e4 - a2) / (e4 / 50);
            this.fullscreen.active ? t3.style.paddingBottom = null : this.media.style.transform = `translateY(-${i3}%)`;
          } else this.isHTML5 && t3.classList.add(this.config.classNames.videoFixedRatio);
          return { padding: a2, ratio: i2 };
        }
        function he(e3, t3, i2 = 0.05) {
          const s2 = e3 / t3, n2 = ne(Object.keys(le), s2);
          return Math.abs(n2 - s2) <= i2 ? le[n2] : [e3, t3];
        }
        const de = { getSources() {
          if (!this.isHTML5) return [];
          return Array.from(this.media.querySelectorAll("source")).filter((e3) => {
            const t3 = e3.getAttribute("type");
            return !!S.empty(t3) || K.mime.call(this, t3);
          });
        }, getQualityOptions() {
          return this.config.quality.forced ? this.config.quality.options : de.getSources.call(this).map((e3) => Number(e3.getAttribute("size"))).filter(Boolean);
        }, setup() {
          if (!this.isHTML5) return;
          const e3 = this;
          e3.options.speed = e3.config.speed.options, S.empty(this.config.ratio) || ue.call(e3), Object.defineProperty(e3.media, "quality", { get() {
            const t3 = de.getSources.call(e3).find((t4) => t4.getAttribute("src") === e3.source);
            return t3 && Number(t3.getAttribute("size"));
          }, set(t3) {
            if (e3.quality !== t3) {
              if (e3.config.quality.forced && S.function(e3.config.quality.onChange)) e3.config.quality.onChange(t3);
              else {
                const i2 = de.getSources.call(e3).find((e4) => Number(e4.getAttribute("size")) === t3);
                if (!i2) return;
                const { currentTime: s2, paused: n2, preload: a2, readyState: l2, playbackRate: r2 } = e3.media;
                e3.media.src = i2.getAttribute("src"), ("none" !== a2 || l2) && (e3.once("loadedmetadata", () => {
                  e3.speed = r2, e3.currentTime = s2, n2 || ie(e3.play());
                }), e3.media.load());
              }
              Z.call(e3, e3.media, "qualitychange", false, { quality: t3 });
            }
          } });
        }, cancelRequests() {
          this.isHTML5 && (O(de.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
        } };
        function me(e3, ...t3) {
          return S.empty(e3) ? e3 : e3.toString().replace(/{(\d+)}/g, (e4, i2) => t3[i2].toString());
        }
        const pe = (e3 = "", t3 = "", i2 = "") => e3.replace(new RegExp(t3.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i2.toString()), ge = (e3 = "") => e3.toString().replace(/\w\S*/g, (e4) => e4.charAt(0).toUpperCase() + e4.slice(1).toLowerCase());
        function fe(e3 = "") {
          let t3 = e3.toString();
          return t3 = function(e4 = "") {
            let t4 = e4.toString();
            return t4 = pe(t4, "-", " "), t4 = pe(t4, "_", " "), t4 = ge(t4), pe(t4, " ", "");
          }(t3), t3.charAt(0).toLowerCase() + t3.slice(1);
        }
        function ye(e3) {
          const t3 = document.createElement("div");
          return t3.appendChild(e3), t3.innerHTML;
        }
        const be = { pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube" }, ve = { get(e3 = "", t3 = {}) {
          if (S.empty(e3) || S.empty(t3)) return "";
          let i2 = N(t3.i18n, e3);
          if (S.empty(i2)) return Object.keys(be).includes(e3) ? be[e3] : "";
          const s2 = { "{seektime}": t3.seekTime, "{title}": t3.title };
          return Object.entries(s2).forEach(([e4, t4]) => {
            i2 = pe(i2, e4, t4);
          }), i2;
        } };
        class we {
          constructor(t3) {
            e2(this, "get", (e3) => {
              if (!we.supported || !this.enabled) return null;
              const t4 = window.localStorage.getItem(this.key);
              if (S.empty(t4)) return null;
              const i2 = JSON.parse(t4);
              return S.string(e3) && e3.length ? i2[e3] : i2;
            }), e2(this, "set", (e3) => {
              if (!we.supported || !this.enabled) return;
              if (!S.object(e3)) return;
              let t4 = this.get();
              S.empty(t4) && (t4 = {}), x(t4, e3);
              try {
                window.localStorage.setItem(this.key, JSON.stringify(t4));
              } catch (e4) {
              }
            }), this.enabled = t3.config.storage.enabled, this.key = t3.config.storage.key;
          }
          static get supported() {
            try {
              if (!("localStorage" in window)) return false;
              const e3 = "___test";
              return window.localStorage.setItem(e3, e3), window.localStorage.removeItem(e3), true;
            } catch (e3) {
              return false;
            }
          }
        }
        function Te(e3, t3 = "text") {
          return new Promise((i2, s2) => {
            try {
              const s3 = new XMLHttpRequest();
              if (!("withCredentials" in s3)) return;
              s3.addEventListener("load", () => {
                if ("text" === t3) try {
                  i2(JSON.parse(s3.responseText));
                } catch (e4) {
                  i2(s3.responseText);
                }
                else i2(s3.response);
              }), s3.addEventListener("error", () => {
                throw new Error(s3.status);
              }), s3.open("GET", e3, true), s3.responseType = t3, s3.send();
            } catch (e4) {
              s2(e4);
            }
          });
        }
        function ke(e3, t3) {
          if (!S.string(e3)) return;
          const i2 = "cache", s2 = S.string(t3);
          let n2 = false;
          const a2 = () => null !== document.getElementById(t3), l2 = (e4, t4) => {
            e4.innerHTML = t4, s2 && a2() || document.body.insertAdjacentElement("afterbegin", e4);
          };
          if (!s2 || !a2()) {
            const a3 = we.supported, r2 = document.createElement("div");
            if (r2.setAttribute("hidden", ""), s2 && r2.setAttribute("id", t3), a3) {
              const e4 = window.localStorage.getItem(`${i2}-${t3}`);
              if (n2 = null !== e4, n2) {
                const t4 = JSON.parse(e4);
                l2(r2, t4.content);
              }
            }
            Te(e3).then((e4) => {
              if (!S.empty(e4)) {
                if (a3) try {
                  window.localStorage.setItem(`${i2}-${t3}`, JSON.stringify({ content: e4 }));
                } catch (e5) {
                }
                l2(r2, e4);
              }
            }).catch(() => {
            });
          }
        }
        const Ce = (e3) => Math.trunc(e3 / 60 / 60 % 60, 10), Ae = (e3) => Math.trunc(e3 / 60 % 60, 10), Se = (e3) => Math.trunc(e3 % 60, 10);
        function Ee(e3 = 0, t3 = false, i2 = false) {
          if (!S.number(e3)) return Ee(void 0, t3, i2);
          const s2 = (e4) => `0${e4}`.slice(-2);
          let n2 = Ce(e3);
          const a2 = Ae(e3), l2 = Se(e3);
          return n2 = t3 || n2 > 0 ? `${n2}:` : "", `${i2 && e3 > 0 ? "-" : ""}${n2}${s2(a2)}:${s2(l2)}`;
        }
        const Pe = { getIconUrl() {
          const e3 = new URL(this.config.iconUrl, window.location), t3 = window.location.host ? window.location.host : window.top.location.host, i2 = e3.host !== t3 || M.isIE && !window.svg4everybody;
          return { url: this.config.iconUrl, cors: i2 };
        }, findElements() {
          try {
            return this.elements.controls = B.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: U.call(this, this.config.selectors.buttons.play), pause: B.call(this, this.config.selectors.buttons.pause), restart: B.call(this, this.config.selectors.buttons.restart), rewind: B.call(this, this.config.selectors.buttons.rewind), fastForward: B.call(this, this.config.selectors.buttons.fastForward), mute: B.call(this, this.config.selectors.buttons.mute), pip: B.call(this, this.config.selectors.buttons.pip), airplay: B.call(this, this.config.selectors.buttons.airplay), settings: B.call(this, this.config.selectors.buttons.settings), captions: B.call(this, this.config.selectors.buttons.captions), fullscreen: B.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = B.call(this, this.config.selectors.progress), this.elements.inputs = { seek: B.call(this, this.config.selectors.inputs.seek), volume: B.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: B.call(this, this.config.selectors.display.buffer), currentTime: B.call(this, this.config.selectors.display.currentTime), duration: B.call(this, this.config.selectors.display.duration) }, S.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), true;
          } catch (e3) {
            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e3), this.toggleNativeControls(true), false;
          }
        }, createIcon(e3, t3) {
          const i2 = "http://www.w3.org/2000/svg", s2 = Pe.getIconUrl.call(this), n2 = `${s2.cors ? "" : s2.url}#${this.config.iconPrefix}`, a2 = document.createElementNS(i2, "svg");
          I(a2, x(t3, { "aria-hidden": "true", focusable: "false" }));
          const l2 = document.createElementNS(i2, "use"), r2 = `${n2}-${e3}`;
          return "href" in l2 && l2.setAttributeNS("http://www.w3.org/1999/xlink", "href", r2), l2.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r2), a2.appendChild(l2), a2;
        }, createLabel(e3, t3 = {}) {
          const i2 = ve.get(e3, this.config);
          return $("span", { ...t3, class: [t3.class, this.config.classNames.hidden].filter(Boolean).join(" ") }, i2);
        }, createBadge(e3) {
          if (S.empty(e3)) return null;
          const t3 = $("span", { class: this.config.classNames.menu.value });
          return t3.appendChild($("span", { class: this.config.classNames.menu.badge }, e3)), t3;
        }, createButton(e3, t3) {
          const i2 = x({}, t3);
          let s2 = fe(e3);
          const n2 = { element: "button", toggle: false, label: null, icon: null, labelPressed: null, iconPressed: null };
          switch (["element", "icon", "label"].forEach((e4) => {
            Object.keys(i2).includes(e4) && (n2[e4] = i2[e4], delete i2[e4]);
          }), "button" !== n2.element || Object.keys(i2).includes("type") || (i2.type = "button"), Object.keys(i2).includes("class") ? i2.class.split(" ").some((e4) => e4 === this.config.classNames.control) || x(i2, { class: `${i2.class} ${this.config.classNames.control}` }) : i2.class = this.config.classNames.control, e3) {
            case "play":
              n2.toggle = true, n2.label = "play", n2.labelPressed = "pause", n2.icon = "play", n2.iconPressed = "pause";
              break;
            case "mute":
              n2.toggle = true, n2.label = "mute", n2.labelPressed = "unmute", n2.icon = "volume", n2.iconPressed = "muted";
              break;
            case "captions":
              n2.toggle = true, n2.label = "enableCaptions", n2.labelPressed = "disableCaptions", n2.icon = "captions-off", n2.iconPressed = "captions-on";
              break;
            case "fullscreen":
              n2.toggle = true, n2.label = "enterFullscreen", n2.labelPressed = "exitFullscreen", n2.icon = "enter-fullscreen", n2.iconPressed = "exit-fullscreen";
              break;
            case "play-large":
              i2.class += ` ${this.config.classNames.control}--overlaid`, s2 = "play", n2.label = "play", n2.icon = "play";
              break;
            default:
              S.empty(n2.label) && (n2.label = s2), S.empty(n2.icon) && (n2.icon = e3);
          }
          const a2 = $(n2.element);
          return n2.toggle ? (a2.appendChild(Pe.createIcon.call(this, n2.iconPressed, { class: "icon--pressed" })), a2.appendChild(Pe.createIcon.call(this, n2.icon, { class: "icon--not-pressed" })), a2.appendChild(Pe.createLabel.call(this, n2.labelPressed, { class: "label--pressed" })), a2.appendChild(Pe.createLabel.call(this, n2.label, { class: "label--not-pressed" }))) : (a2.appendChild(Pe.createIcon.call(this, n2.icon)), a2.appendChild(Pe.createLabel.call(this, n2.label))), x(i2, D(this.config.selectors.buttons[s2], i2)), I(a2, i2), "play" === s2 ? (S.array(this.elements.buttons[s2]) || (this.elements.buttons[s2] = []), this.elements.buttons[s2].push(a2)) : this.elements.buttons[s2] = a2, a2;
        }, createRange(e3, t3) {
          const i2 = $("input", x(D(this.config.selectors.inputs[e3]), { type: "range", min: 0, max: 100, step: 0.01, value: 0, autocomplete: "off", role: "slider", "aria-label": ve.get(e3, this.config), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t3));
          return this.elements.inputs[e3] = i2, Pe.updateRangeFill.call(this, i2), g.setup(i2), i2;
        }, createProgress(e3, t3) {
          const i2 = $("progress", x(D(this.config.selectors.display[e3]), { min: 0, max: 100, value: 0, role: "progressbar", "aria-hidden": true }, t3));
          if ("volume" !== e3) {
            i2.appendChild($("span", null, "0"));
            const t4 = { played: "played", buffer: "buffered" }[e3], s2 = t4 ? ve.get(t4, this.config) : "";
            i2.innerText = `% ${s2.toLowerCase()}`;
          }
          return this.elements.display[e3] = i2, i2;
        }, createTime(e3, t3) {
          const i2 = D(this.config.selectors.display[e3], t3), s2 = $("div", x(i2, { class: `${i2.class ? i2.class : ""} ${this.config.classNames.display.time} `.trim(), "aria-label": ve.get(e3, this.config), role: "timer" }), "00:00");
          return this.elements.display[e3] = s2, s2;
        }, bindMenuItemShortcuts(e3, t3) {
          X.call(this, e3, "keydown keyup", (i2) => {
            if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i2.key)) return;
            if (i2.preventDefault(), i2.stopPropagation(), "keydown" === i2.type) return;
            const s2 = V(e3, '[role="menuitemradio"]');
            if (!s2 && [" ", "ArrowRight"].includes(i2.key)) Pe.showMenuPanel.call(this, t3, true);
            else {
              let t4;
              " " !== i2.key && ("ArrowDown" === i2.key || s2 && "ArrowRight" === i2.key ? (t4 = e3.nextElementSibling, S.element(t4) || (t4 = e3.parentNode.firstElementChild)) : (t4 = e3.previousElementSibling, S.element(t4) || (t4 = e3.parentNode.lastElementChild)), W.call(this, t4, true));
            }
          }, false), X.call(this, e3, "keyup", (e4) => {
            "Return" === e4.key && Pe.focusFirstMenuItem.call(this, null, true);
          });
        }, createMenuItem({ value: e3, list: t3, type: i2, title: s2, badge: n2 = null, checked: a2 = false }) {
          const l2 = D(this.config.selectors.inputs[i2]), r2 = $("button", x(l2, { type: "button", role: "menuitemradio", class: `${this.config.classNames.control} ${l2.class ? l2.class : ""}`.trim(), "aria-checked": a2, value: e3 })), o2 = $("span");
          o2.innerHTML = s2, S.element(n2) && o2.appendChild(n2), r2.appendChild(o2), Object.defineProperty(r2, "checked", { enumerable: true, get: () => "true" === r2.getAttribute("aria-checked"), set(e4) {
            e4 && Array.from(r2.parentNode.children).filter((e5) => V(e5, '[role="menuitemradio"]')).forEach((e5) => e5.setAttribute("aria-checked", "false")), r2.setAttribute("aria-checked", e4 ? "true" : "false");
          } }), this.listeners.bind(r2, "click keyup", (t4) => {
            if (!S.keyboardEvent(t4) || " " === t4.key) {
              switch (t4.preventDefault(), t4.stopPropagation(), r2.checked = true, i2) {
                case "language":
                  this.currentTrack = Number(e3);
                  break;
                case "quality":
                  this.quality = e3;
                  break;
                case "speed":
                  this.speed = parseFloat(e3);
              }
              Pe.showMenuPanel.call(this, "home", S.keyboardEvent(t4));
            }
          }, i2, false), Pe.bindMenuItemShortcuts.call(this, r2, i2), t3.appendChild(r2);
        }, formatTime(e3 = 0, t3 = false) {
          if (!S.number(e3)) return e3;
          return Ee(e3, Ce(this.duration) > 0, t3);
        }, updateTimeDisplay(e3 = null, t3 = 0, i2 = false) {
          S.element(e3) && S.number(t3) && (e3.innerText = Pe.formatTime(t3, i2));
        }, updateVolume() {
          this.supported.ui && (S.element(this.elements.inputs.volume) && Pe.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), S.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
        }, setRange(e3, t3 = 0) {
          S.element(e3) && (e3.value = t3, Pe.updateRangeFill.call(this, e3));
        }, updateProgress(e3) {
          if (!this.supported.ui || !S.event(e3)) return;
          let t3 = 0;
          const i2 = (e4, t4) => {
            const i3 = S.number(t4) ? t4 : 0, s3 = S.element(e4) ? e4 : this.elements.display.buffer;
            if (S.element(s3)) {
              s3.value = i3;
              const e5 = s3.getElementsByTagName("span")[0];
              S.element(e5) && (e5.childNodes[0].nodeValue = i3);
            }
          };
          if (e3) switch (e3.type) {
            case "timeupdate":
            case "seeking":
            case "seeked":
              s2 = this.currentTime, n2 = this.duration, t3 = 0 === s2 || 0 === n2 || Number.isNaN(s2) || Number.isNaN(n2) ? 0 : (s2 / n2 * 100).toFixed(2), "timeupdate" === e3.type && Pe.setRange.call(this, this.elements.inputs.seek, t3);
              break;
            case "playing":
            case "progress":
              i2(this.elements.display.buffer, 100 * this.buffered);
          }
          var s2, n2;
        }, updateRangeFill(e3) {
          const t3 = S.event(e3) ? e3.target : e3;
          if (S.element(t3) && "range" === t3.getAttribute("type")) {
            if (V(t3, this.config.selectors.inputs.seek)) {
              t3.setAttribute("aria-valuenow", this.currentTime);
              const e4 = Pe.formatTime(this.currentTime), i2 = Pe.formatTime(this.duration), s2 = ve.get("seekLabel", this.config);
              t3.setAttribute("aria-valuetext", s2.replace("{currentTime}", e4).replace("{duration}", i2));
            } else if (V(t3, this.config.selectors.inputs.volume)) {
              const e4 = 100 * t3.value;
              t3.setAttribute("aria-valuenow", e4), t3.setAttribute("aria-valuetext", `${e4.toFixed(1)}%`);
            } else t3.setAttribute("aria-valuenow", t3.value);
            (M.isWebKit || M.isIPadOS) && t3.style.setProperty("--value", t3.value / t3.max * 100 + "%");
          }
        }, updateSeekTooltip(e3) {
          var t3, i2;
          if (!this.config.tooltips.seek || !S.element(this.elements.inputs.seek) || !S.element(this.elements.display.seekTooltip) || 0 === this.duration) return;
          const s2 = this.elements.display.seekTooltip, n2 = `${this.config.classNames.tooltip}--visible`, a2 = (e4) => R(s2, n2, e4);
          if (this.touch) return void a2(false);
          let l2 = 0;
          const r2 = this.elements.progress.getBoundingClientRect();
          if (S.event(e3)) l2 = 100 / r2.width * (e3.pageX - r2.left);
          else {
            if (!F(s2, n2)) return;
            l2 = parseFloat(s2.style.left, 10);
          }
          l2 < 0 ? l2 = 0 : l2 > 100 && (l2 = 100);
          const o2 = this.duration / 100 * l2;
          s2.innerText = Pe.formatTime(o2);
          const c2 = null === (t3 = this.config.markers) || void 0 === t3 || null === (i2 = t3.points) || void 0 === i2 ? void 0 : i2.find(({ time: e4 }) => e4 === Math.round(o2));
          c2 && s2.insertAdjacentHTML("afterbegin", `${c2.label}<br>`), s2.style.left = `${l2}%`, S.event(e3) && ["mouseenter", "mouseleave"].includes(e3.type) && a2("mouseenter" === e3.type);
        }, timeUpdate(e3) {
          const t3 = !S.element(this.elements.display.duration) && this.config.invertTime;
          Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, t3 ? this.duration - this.currentTime : this.currentTime, t3), e3 && "timeupdate" === e3.type && this.media.seeking || Pe.updateProgress.call(this, e3);
        }, durationUpdate() {
          if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
          if (this.duration >= 2 ** 32) return H(this.elements.display.currentTime, true), void H(this.elements.progress, true);
          S.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
          const e3 = S.element(this.elements.display.duration);
          !e3 && this.config.displayDuration && this.paused && Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e3 && Pe.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && Pe.setMarkers.call(this), Pe.updateSeekTooltip.call(this);
        }, toggleMenuButton(e3, t3) {
          H(this.elements.settings.buttons[e3], !t3);
        }, updateSetting(e3, t3, i2) {
          const s2 = this.elements.settings.panels[e3];
          let n2 = null, a2 = t3;
          if ("captions" === e3) n2 = this.currentTrack;
          else {
            if (n2 = S.empty(i2) ? this[e3] : i2, S.empty(n2) && (n2 = this.config[e3].default), !S.empty(this.options[e3]) && !this.options[e3].includes(n2)) return void this.debug.warn(`Unsupported value of '${n2}' for ${e3}`);
            if (!this.config[e3].options.includes(n2)) return void this.debug.warn(`Disabled value of '${n2}' for ${e3}`);
          }
          if (S.element(a2) || (a2 = s2 && s2.querySelector('[role="menu"]')), !S.element(a2)) return;
          this.elements.settings.buttons[e3].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = Pe.getLabel.call(this, e3, n2);
          const l2 = a2 && a2.querySelector(`[value="${n2}"]`);
          S.element(l2) && (l2.checked = true);
        }, getLabel(e3, t3) {
          switch (e3) {
            case "speed":
              return 1 === t3 ? ve.get("normal", this.config) : `${t3}&times;`;
            case "quality":
              if (S.number(t3)) {
                const e4 = ve.get(`qualityLabel.${t3}`, this.config);
                return e4.length ? e4 : `${t3}p`;
              }
              return ge(t3);
            case "captions":
              return xe.getLabel.call(this);
            default:
              return null;
          }
        }, setQualityMenu(e3) {
          if (!S.element(this.elements.settings.panels.quality)) return;
          const t3 = "quality", i2 = this.elements.settings.panels.quality.querySelector('[role="menu"]');
          S.array(e3) && (this.options.quality = se(e3).filter((e4) => this.config.quality.options.includes(e4)));
          const s2 = !S.empty(this.options.quality) && this.options.quality.length > 1;
          if (Pe.toggleMenuButton.call(this, t3, s2), j(i2), Pe.checkMenu.call(this), !s2) return;
          const n2 = (e4) => {
            const t4 = ve.get(`qualityBadge.${e4}`, this.config);
            return t4.length ? Pe.createBadge.call(this, t4) : null;
          };
          this.options.quality.sort((e4, t4) => {
            const i3 = this.config.quality.options;
            return i3.indexOf(e4) > i3.indexOf(t4) ? 1 : -1;
          }).forEach((e4) => {
            Pe.createMenuItem.call(this, { value: e4, list: i2, type: t3, title: Pe.getLabel.call(this, "quality", e4), badge: n2(e4) });
          }), Pe.updateSetting.call(this, t3, i2);
        }, setCaptionsMenu() {
          if (!S.element(this.elements.settings.panels.captions)) return;
          const e3 = "captions", t3 = this.elements.settings.panels.captions.querySelector('[role="menu"]'), i2 = xe.getTracks.call(this), s2 = Boolean(i2.length);
          if (Pe.toggleMenuButton.call(this, e3, s2), j(t3), Pe.checkMenu.call(this), !s2) return;
          const n2 = i2.map((e4, i3) => ({ value: i3, checked: this.captions.toggled && this.currentTrack === i3, title: xe.getLabel.call(this, e4), badge: e4.language && Pe.createBadge.call(this, e4.language.toUpperCase()), list: t3, type: "language" }));
          n2.unshift({ value: -1, checked: !this.captions.toggled, title: ve.get("disabled", this.config), list: t3, type: "language" }), n2.forEach(Pe.createMenuItem.bind(this)), Pe.updateSetting.call(this, e3, t3);
        }, setSpeedMenu() {
          if (!S.element(this.elements.settings.panels.speed)) return;
          const e3 = "speed", t3 = this.elements.settings.panels.speed.querySelector('[role="menu"]');
          this.options.speed = this.options.speed.filter((e4) => e4 >= this.minimumSpeed && e4 <= this.maximumSpeed);
          const i2 = !S.empty(this.options.speed) && this.options.speed.length > 1;
          Pe.toggleMenuButton.call(this, e3, i2), j(t3), Pe.checkMenu.call(this), i2 && (this.options.speed.forEach((i3) => {
            Pe.createMenuItem.call(this, { value: i3, list: t3, type: e3, title: Pe.getLabel.call(this, "speed", i3) });
          }), Pe.updateSetting.call(this, e3, t3));
        }, checkMenu() {
          const { buttons: e3 } = this.elements.settings, t3 = !S.empty(e3) && Object.values(e3).some((e4) => !e4.hidden);
          H(this.elements.settings.menu, !t3);
        }, focusFirstMenuItem(e3, t3 = false) {
          if (this.elements.settings.popup.hidden) return;
          let i2 = e3;
          S.element(i2) || (i2 = Object.values(this.elements.settings.panels).find((e4) => !e4.hidden));
          const s2 = i2.querySelector('[role^="menuitem"]');
          W.call(this, s2, t3);
        }, toggleMenu(e3) {
          const { popup: t3 } = this.elements.settings, i2 = this.elements.buttons.settings;
          if (!S.element(t3) || !S.element(i2)) return;
          const { hidden: s2 } = t3;
          let n2 = s2;
          if (S.boolean(e3)) n2 = e3;
          else if (S.keyboardEvent(e3) && "Escape" === e3.key) n2 = false;
          else if (S.event(e3)) {
            const s3 = S.function(e3.composedPath) ? e3.composedPath()[0] : e3.target, a2 = t3.contains(s3);
            if (a2 || !a2 && e3.target !== i2 && n2) return;
          }
          i2.setAttribute("aria-expanded", n2), H(t3, !n2), R(this.elements.container, this.config.classNames.menu.open, n2), n2 && S.keyboardEvent(e3) ? Pe.focusFirstMenuItem.call(this, null, true) : n2 || s2 || W.call(this, i2, S.keyboardEvent(e3));
        }, getMenuSize(e3) {
          const t3 = e3.cloneNode(true);
          t3.style.position = "absolute", t3.style.opacity = 0, t3.removeAttribute("hidden"), e3.parentNode.appendChild(t3);
          const i2 = t3.scrollWidth, s2 = t3.scrollHeight;
          return O(t3), { width: i2, height: s2 };
        }, showMenuPanel(e3 = "", t3 = false) {
          const i2 = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e3}`);
          if (!S.element(i2)) return;
          const s2 = i2.parentNode, n2 = Array.from(s2.children).find((e4) => !e4.hidden);
          if (K.transitions && !K.reducedMotion) {
            s2.style.width = `${n2.scrollWidth}px`, s2.style.height = `${n2.scrollHeight}px`;
            const e4 = Pe.getMenuSize.call(this, i2), t4 = (e5) => {
              e5.target === s2 && ["width", "height"].includes(e5.propertyName) && (s2.style.width = "", s2.style.height = "", J.call(this, s2, E, t4));
            };
            X.call(this, s2, E, t4), s2.style.width = `${e4.width}px`, s2.style.height = `${e4.height}px`;
          }
          H(n2, true), H(i2, false), Pe.focusFirstMenuItem.call(this, i2, t3);
        }, setDownloadUrl() {
          const e3 = this.elements.buttons.download;
          S.element(e3) && e3.setAttribute("href", this.download);
        }, create(e3) {
          const { bindMenuItemShortcuts: t3, createButton: i2, createProgress: s2, createRange: n2, createTime: a2, setQualityMenu: l2, setSpeedMenu: r2, showMenuPanel: o2 } = Pe;
          this.elements.controls = null, S.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i2.call(this, "play-large"));
          const c2 = $("div", D(this.config.selectors.controls.wrapper));
          this.elements.controls = c2;
          const u2 = { class: "plyr__controls__item" };
          return se(S.array(this.config.controls) ? this.config.controls : []).forEach((l3) => {
            if ("restart" === l3 && c2.appendChild(i2.call(this, "restart", u2)), "rewind" === l3 && c2.appendChild(i2.call(this, "rewind", u2)), "play" === l3 && c2.appendChild(i2.call(this, "play", u2)), "fast-forward" === l3 && c2.appendChild(i2.call(this, "fast-forward", u2)), "progress" === l3) {
              const t4 = $("div", { class: `${u2.class} plyr__progress__container` }), i3 = $("div", D(this.config.selectors.progress));
              if (i3.appendChild(n2.call(this, "seek", { id: `plyr-seek-${e3.id}` })), i3.appendChild(s2.call(this, "buffer")), this.config.tooltips.seek) {
                const e4 = $("span", { class: this.config.classNames.tooltip }, "00:00");
                i3.appendChild(e4), this.elements.display.seekTooltip = e4;
              }
              this.elements.progress = i3, t4.appendChild(this.elements.progress), c2.appendChild(t4);
            }
            if ("current-time" === l3 && c2.appendChild(a2.call(this, "currentTime", u2)), "duration" === l3 && c2.appendChild(a2.call(this, "duration", u2)), "mute" === l3 || "volume" === l3) {
              let { volume: t4 } = this.elements;
              if (S.element(t4) && c2.contains(t4) || (t4 = $("div", x({}, u2, { class: `${u2.class} plyr__volume`.trim() })), this.elements.volume = t4, c2.appendChild(t4)), "mute" === l3 && t4.appendChild(i2.call(this, "mute")), "volume" === l3 && !M.isIos && !M.isIPadOS) {
                const i3 = { max: 1, step: 0.05, value: this.config.volume };
                t4.appendChild(n2.call(this, "volume", x(i3, { id: `plyr-volume-${e3.id}` })));
              }
            }
            if ("captions" === l3 && c2.appendChild(i2.call(this, "captions", u2)), "settings" === l3 && !S.empty(this.config.settings)) {
              const s3 = $("div", x({}, u2, { class: `${u2.class} plyr__menu`.trim(), hidden: "" }));
              s3.appendChild(i2.call(this, "settings", { "aria-haspopup": true, "aria-controls": `plyr-settings-${e3.id}`, "aria-expanded": false }));
              const n3 = $("div", { class: "plyr__menu__container", id: `plyr-settings-${e3.id}`, hidden: "" }), a3 = $("div"), l4 = $("div", { id: `plyr-settings-${e3.id}-home` }), r3 = $("div", { role: "menu" });
              l4.appendChild(r3), a3.appendChild(l4), this.elements.settings.panels.home = l4, this.config.settings.forEach((i3) => {
                const s4 = $("button", x(D(this.config.selectors.buttons.settings), { type: "button", class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`, role: "menuitem", "aria-haspopup": true, hidden: "" }));
                t3.call(this, s4, i3), X.call(this, s4, "click", () => {
                  o2.call(this, i3, false);
                });
                const n4 = $("span", null, ve.get(i3, this.config)), l5 = $("span", { class: this.config.classNames.menu.value });
                l5.innerHTML = e3[i3], n4.appendChild(l5), s4.appendChild(n4), r3.appendChild(s4);
                const c3 = $("div", { id: `plyr-settings-${e3.id}-${i3}`, hidden: "" }), u3 = $("button", { type: "button", class: `${this.config.classNames.control} ${this.config.classNames.control}--back` });
                u3.appendChild($("span", { "aria-hidden": true }, ve.get(i3, this.config))), u3.appendChild($("span", { class: this.config.classNames.hidden }, ve.get("menuBack", this.config))), X.call(this, c3, "keydown", (e4) => {
                  "ArrowLeft" === e4.key && (e4.preventDefault(), e4.stopPropagation(), o2.call(this, "home", true));
                }, false), X.call(this, u3, "click", () => {
                  o2.call(this, "home", false);
                }), c3.appendChild(u3), c3.appendChild($("div", { role: "menu" })), a3.appendChild(c3), this.elements.settings.buttons[i3] = s4, this.elements.settings.panels[i3] = c3;
              }), n3.appendChild(a3), s3.appendChild(n3), c2.appendChild(s3), this.elements.settings.popup = n3, this.elements.settings.menu = s3;
            }
            if ("pip" === l3 && K.pip && c2.appendChild(i2.call(this, "pip", u2)), "airplay" === l3 && K.airplay && c2.appendChild(i2.call(this, "airplay", u2)), "download" === l3) {
              const e4 = x({}, u2, { element: "a", href: this.download, target: "_blank" });
              this.isHTML5 && (e4.download = "");
              const { download: t4 } = this.config.urls;
              !S.url(t4) && this.isEmbed && x(e4, { icon: `logo-${this.provider}`, label: this.provider }), c2.appendChild(i2.call(this, "download", e4));
            }
            "fullscreen" === l3 && c2.appendChild(i2.call(this, "fullscreen", u2));
          }), this.isHTML5 && l2.call(this, de.getQualityOptions.call(this)), r2.call(this), c2;
        }, inject() {
          if (this.config.loadSprite) {
            const e4 = Pe.getIconUrl.call(this);
            e4.cors && ke(e4.url, "sprite-plyr");
          }
          this.id = Math.floor(1e4 * Math.random());
          let e3 = null;
          this.elements.controls = null;
          const t3 = { id: this.id, seektime: this.config.seekTime, title: this.config.title };
          let i2 = true;
          S.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, t3)), this.config.controls || (this.config.controls = []), S.element(this.config.controls) || S.string(this.config.controls) ? e3 = this.config.controls : (e3 = Pe.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: xe.getLabel.call(this) }), i2 = false);
          let s2;
          i2 && S.string(this.config.controls) && (e3 = ((e4) => {
            let i3 = e4;
            return Object.entries(t3).forEach(([e5, t4]) => {
              i3 = pe(i3, `{${e5}}`, t4);
            }), i3;
          })(e3)), S.string(this.config.selectors.controls.container) && (s2 = document.querySelector(this.config.selectors.controls.container)), S.element(s2) || (s2 = this.elements.container);
          if (s2[S.element(e3) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e3), S.element(this.elements.controls) || Pe.findElements.call(this), !S.empty(this.elements.buttons)) {
            const e4 = (e5) => {
              const t4 = this.config.classNames.controlPressed;
              e5.setAttribute("aria-pressed", "false"), Object.defineProperty(e5, "pressed", { configurable: true, enumerable: true, get: () => F(e5, t4), set(i3 = false) {
                R(e5, t4, i3), e5.setAttribute("aria-pressed", i3 ? "true" : "false");
              } });
            };
            Object.values(this.elements.buttons).filter(Boolean).forEach((t4) => {
              S.array(t4) || S.nodeList(t4) ? Array.from(t4).filter(Boolean).forEach(e4) : e4(t4);
            });
          }
          if (M.isEdge && P(s2), this.config.tooltips.controls) {
            const { classNames: e4, selectors: t4 } = this.config, i3 = `${t4.controls.wrapper} ${t4.labels} .${e4.hidden}`, s3 = U.call(this, i3);
            Array.from(s3).forEach((e5) => {
              R(e5, this.config.classNames.hidden, false), R(e5, this.config.classNames.tooltip, true);
            });
          }
        }, setMediaMetadata() {
          try {
            "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({ title: this.config.mediaMetadata.title, artist: this.config.mediaMetadata.artist, album: this.config.mediaMetadata.album, artwork: this.config.mediaMetadata.artwork }));
          } catch (e3) {
          }
        }, setMarkers() {
          var e3, t3;
          if (!this.duration || this.elements.markers) return;
          const i2 = null === (e3 = this.config.markers) || void 0 === e3 || null === (t3 = e3.points) || void 0 === t3 ? void 0 : t3.filter(({ time: e4 }) => e4 > 0 && e4 < this.duration);
          if (null == i2 || !i2.length) return;
          const s2 = document.createDocumentFragment(), n2 = document.createDocumentFragment();
          let a2 = null;
          const l2 = `${this.config.classNames.tooltip}--visible`, r2 = (e4) => R(a2, l2, e4);
          i2.forEach((e4) => {
            const t4 = $("span", { class: this.config.classNames.marker }, ""), i3 = e4.time / this.duration * 100 + "%";
            a2 && (t4.addEventListener("mouseenter", () => {
              e4.label || (a2.style.left = i3, a2.innerHTML = e4.label, r2(true));
            }), t4.addEventListener("mouseleave", () => {
              r2(false);
            })), t4.addEventListener("click", () => {
              this.currentTime = e4.time;
            }), t4.style.left = i3, n2.appendChild(t4);
          }), s2.appendChild(n2), this.config.tooltips.seek || (a2 = $("span", { class: this.config.classNames.tooltip }, ""), s2.appendChild(a2)), this.elements.markers = { points: n2, tip: a2 }, this.elements.progress.appendChild(s2);
        } };
        function Me(e3, t3 = true) {
          let i2 = e3;
          if (t3) {
            const e4 = document.createElement("a");
            e4.href = i2, i2 = e4.href;
          }
          try {
            return new URL(i2);
          } catch (e4) {
            return null;
          }
        }
        function Ne(e3) {
          const t3 = new URLSearchParams();
          return S.object(e3) && Object.entries(e3).forEach(([e4, i2]) => {
            t3.set(e4, i2);
          }), t3;
        }
        const xe = { setup() {
          if (!this.supported.ui) return;
          if (!this.isVideo || this.isYouTube || this.isHTML5 && !K.textTracks) return void (S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this));
          var e3, t3;
          if (S.element(this.elements.captions) || (this.elements.captions = $("div", D(this.config.selectors.captions)), this.elements.captions.setAttribute("dir", "auto"), e3 = this.elements.captions, t3 = this.elements.wrapper, S.element(e3) && S.element(t3) && t3.parentNode.insertBefore(e3, t3.nextSibling)), M.isIE && window.URL) {
            const e4 = this.media.querySelectorAll("track");
            Array.from(e4).forEach((e5) => {
              const t4 = e5.getAttribute("src"), i3 = Me(t4);
              null !== i3 && i3.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i3.protocol) && Te(t4, "blob").then((t5) => {
                e5.setAttribute("src", window.URL.createObjectURL(t5));
              }).catch(() => {
                O(e5);
              });
            });
          }
          const i2 = se((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((e4) => e4.split("-")[0]));
          let s2 = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
          "auto" === s2 && ([s2] = i2);
          let n2 = this.storage.get("captions");
          if (S.boolean(n2) || ({ active: n2 } = this.config.captions), Object.assign(this.captions, { toggled: false, active: n2, language: s2, languages: i2 }), this.isHTML5) {
            const e4 = this.config.captions.update ? "addtrack removetrack" : "removetrack";
            X.call(this, this.media.textTracks, e4, xe.update.bind(this));
          }
          setTimeout(xe.update.bind(this), 0);
        }, update() {
          const e3 = xe.getTracks.call(this, true), { active: t3, language: i2, meta: s2, currentTrackNode: n2 } = this.captions, a2 = Boolean(e3.find((e4) => e4.language === i2));
          this.isHTML5 && this.isVideo && e3.filter((e4) => !s2.get(e4)).forEach((e4) => {
            this.debug.log("Track added", e4), s2.set(e4, { default: "showing" === e4.mode }), "showing" === e4.mode && (e4.mode = "hidden"), X.call(this, e4, "cuechange", () => xe.updateCues.call(this));
          }), (a2 && this.language !== i2 || !e3.includes(n2)) && (xe.setLanguage.call(this, i2), xe.toggle.call(this, t3 && a2)), this.elements && R(this.elements.container, this.config.classNames.captions.enabled, !S.empty(e3)), S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this);
        }, toggle(e3, t3 = true) {
          if (!this.supported.ui) return;
          const { toggled: i2 } = this.captions, s2 = this.config.classNames.captions.active, n2 = S.nullOrUndefined(e3) ? !i2 : e3;
          if (n2 !== i2) {
            if (t3 || (this.captions.active = n2, this.storage.set({ captions: n2 })), !this.language && n2 && !t3) {
              const e4 = xe.getTracks.call(this), t4 = xe.findTrack.call(this, [this.captions.language, ...this.captions.languages], true);
              return this.captions.language = t4.language, void xe.set.call(this, e4.indexOf(t4));
            }
            this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n2), R(this.elements.container, s2, n2), this.captions.toggled = n2, Pe.updateSetting.call(this, "captions"), Z.call(this, this.media, n2 ? "captionsenabled" : "captionsdisabled");
          }
          setTimeout(() => {
            n2 && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden");
          });
        }, set(e3, t3 = true) {
          const i2 = xe.getTracks.call(this);
          if (-1 !== e3) if (S.number(e3)) if (e3 in i2) {
            if (this.captions.currentTrack !== e3) {
              this.captions.currentTrack = e3;
              const s2 = i2[e3], { language: n2 } = s2 || {};
              this.captions.currentTrackNode = s2, Pe.updateSetting.call(this, "captions"), t3 || (this.captions.language = n2, this.storage.set({ language: n2 })), this.isVimeo && this.embed.enableTextTrack(n2), Z.call(this, this.media, "languagechange");
            }
            xe.toggle.call(this, true, t3), this.isHTML5 && this.isVideo && xe.updateCues.call(this);
          } else this.debug.warn("Track not found", e3);
          else this.debug.warn("Invalid caption argument", e3);
          else xe.toggle.call(this, false, t3);
        }, setLanguage(e3, t3 = true) {
          if (!S.string(e3)) return void this.debug.warn("Invalid language argument", e3);
          const i2 = e3.toLowerCase();
          this.captions.language = i2;
          const s2 = xe.getTracks.call(this), n2 = xe.findTrack.call(this, [i2]);
          xe.set.call(this, s2.indexOf(n2), t3);
        }, getTracks(e3 = false) {
          return Array.from((this.media || {}).textTracks || []).filter((t3) => !this.isHTML5 || e3 || this.captions.meta.has(t3)).filter((e4) => ["captions", "subtitles"].includes(e4.kind));
        }, findTrack(e3, t3 = false) {
          const i2 = xe.getTracks.call(this), s2 = (e4) => Number((this.captions.meta.get(e4) || {}).default), n2 = Array.from(i2).sort((e4, t4) => s2(t4) - s2(e4));
          let a2;
          return e3.every((e4) => (a2 = n2.find((t4) => t4.language === e4), !a2)), a2 || (t3 ? n2[0] : void 0);
        }, getCurrentTrack() {
          return xe.getTracks.call(this)[this.currentTrack];
        }, getLabel(e3) {
          let t3 = e3;
          return !S.track(t3) && K.textTracks && this.captions.toggled && (t3 = xe.getCurrentTrack.call(this)), S.track(t3) ? S.empty(t3.label) ? S.empty(t3.language) ? ve.get("enabled", this.config) : e3.language.toUpperCase() : t3.label : ve.get("disabled", this.config);
        }, updateCues(e3) {
          if (!this.supported.ui) return;
          if (!S.element(this.elements.captions)) return void this.debug.warn("No captions element to render to");
          if (!S.nullOrUndefined(e3) && !Array.isArray(e3)) return void this.debug.warn("updateCues: Invalid input", e3);
          let t3 = e3;
          if (!t3) {
            const e4 = xe.getCurrentTrack.call(this);
            t3 = Array.from((e4 || {}).activeCues || []).map((e5) => e5.getCueAsHTML()).map(ye);
          }
          const i2 = t3.map((e4) => e4.trim()).join("\n");
          if (i2 !== this.elements.captions.innerHTML) {
            j(this.elements.captions);
            const e4 = $("span", D(this.config.selectors.caption));
            e4.innerHTML = i2, this.elements.captions.appendChild(e4), Z.call(this, this.media, "cuechange");
          }
        } }, Le = { enabled: true, title: "", debug: false, autoplay: false, autopause: true, playsinline: true, seekTime: 10, volume: 1, muted: false, duration: null, displayDuration: true, invertTime: true, toggleInvert: true, ratio: null, clickToPlay: true, hideControls: true, resetOnEnd: false, disableContextMenu: true, loadSprite: true, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240], forced: false, onChange: null }, loop: { active: false }, speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] }, keyboard: { focused: true, global: false }, tooltips: { controls: false, seek: true }, captions: { active: false, language: "auto", update: false }, fullscreen: { enabled: true, fallback: true, iosNative: false }, storage: { enabled: true, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", seekLabel: "{currentTime} of {duration}", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", download: "Download", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", pip: "PIP", menuBack: "Go back to previous menu", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { download: null, vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/oembed.json?url={0}" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, download: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', download: '[data-plyr="download"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", caption: ".plyr__caption" }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", videoFixedRatio: "plyr__video-wrapper--fixed-ratio", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", controlPressed: "plyr__control--pressed", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", marker: "plyr__progress__marker", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", display: { time: "plyr__time" }, menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, previewThumbnails: { thumbContainer: "plyr__preview-thumb", thumbContainerShown: "plyr__preview-thumb--is-shown", imageContainer: "plyr__preview-thumb__image-container", timeContainer: "plyr__preview-thumb__time-container", scrubbingContainer: "plyr__preview-scrubbing", scrubbingContainerShown: "plyr__preview-scrubbing--is-shown" } }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id", hash: "data-plyr-embed-hash" } }, ads: { enabled: false, publisherId: "", tagUrl: "" }, previewThumbnails: { enabled: false, src: "" }, vimeo: { byline: false, portrait: false, title: false, speed: true, transparent: false, customControls: true, referrerPolicy: null, premium: false }, youtube: { rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, customControls: true, noCookie: false }, mediaMetadata: { title: "", artist: "", album: "", artwork: [] }, markers: { enabled: false, points: [] } }, Ie = "picture-in-picture", $e = "inline", _e = { html5: "html5", youtube: "youtube", vimeo: "vimeo" }, Oe = "audio", je = "video";
        const qe = () => {
        };
        class De {
          constructor(e3 = false) {
            this.enabled = window.console && e3, this.enabled && this.log("Debugging enabled");
          }
          get log() {
            return this.enabled ? Function.prototype.bind.call(console.log, console) : qe;
          }
          get warn() {
            return this.enabled ? Function.prototype.bind.call(console.warn, console) : qe;
          }
          get error() {
            return this.enabled ? Function.prototype.bind.call(console.error, console) : qe;
          }
        }
        class He {
          constructor(t3) {
            e2(this, "onChange", () => {
              if (!this.supported) return;
              const e3 = this.player.elements.buttons.fullscreen;
              S.element(e3) && (e3.pressed = this.active);
              const t4 = this.target === this.player.media ? this.target : this.player.elements.container;
              Z.call(this.player, t4, this.active ? "enterfullscreen" : "exitfullscreen", true);
            }), e2(this, "toggleFallback", (e3 = false) => {
              if (e3 ? this.scrollPosition = { x: window.scrollX ?? 0, y: window.scrollY ?? 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e3 ? "hidden" : "", R(this.target, this.player.config.classNames.fullscreen.fallback, e3), M.isIos) {
                let t4 = document.head.querySelector('meta[name="viewport"]');
                const i2 = "viewport-fit=cover";
                t4 || (t4 = document.createElement("meta"), t4.setAttribute("name", "viewport"));
                const s2 = S.string(t4.content) && t4.content.includes(i2);
                e3 ? (this.cleanupViewport = !s2, s2 || (t4.content += `,${i2}`)) : this.cleanupViewport && (t4.content = t4.content.split(",").filter((e4) => e4.trim() !== i2).join(","));
              }
              this.onChange();
            }), e2(this, "trapFocus", (e3) => {
              if (M.isIos || M.isIPadOS || !this.active || "Tab" !== e3.key) return;
              const t4 = document.activeElement, i2 = U.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s2] = i2, n2 = i2[i2.length - 1];
              t4 !== n2 || e3.shiftKey ? t4 === s2 && e3.shiftKey && (n2.focus(), e3.preventDefault()) : (s2.focus(), e3.preventDefault());
            }), e2(this, "update", () => {
              if (this.supported) {
                let e3;
                e3 = this.forceFallback ? "Fallback (forced)" : He.nativeSupported ? "Native" : "Fallback", this.player.debug.log(`${e3} fullscreen enabled`);
              } else this.player.debug.log("Fullscreen not supported and fallback disabled");
              R(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
            }), e2(this, "enter", () => {
              this.supported && (M.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !He.nativeSupported || this.forceFallback ? this.toggleFallback(true) : this.prefix ? S.empty(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({ navigationUI: "hide" }));
            }), e2(this, "exit", () => {
              if (this.supported) if (M.isIos && this.player.config.fullscreen.iosNative) this.player.isVimeo ? this.player.embed.exitFullscreen() : this.target.webkitEnterFullscreen(), ie(this.player.play());
              else if (!He.nativeSupported || this.forceFallback) this.toggleFallback(false);
              else if (this.prefix) {
                if (!S.empty(this.prefix)) {
                  const e3 = "moz" === this.prefix ? "Cancel" : "Exit";
                  document[`${this.prefix}${e3}${this.property}`]();
                }
              } else (document.cancelFullScreen || document.exitFullscreen).call(document);
            }), e2(this, "toggle", () => {
              this.active ? this.exit() : this.enter();
            }), this.player = t3, this.prefix = He.prefix, this.property = He.property, this.scrollPosition = { x: 0, y: 0 }, this.forceFallback = "force" === t3.config.fullscreen.fallback, this.player.elements.fullscreen = t3.config.fullscreen.container && function(e3, t4) {
              const { prototype: i2 } = Element;
              return (i2.closest || function() {
                let e4 = this;
                do {
                  if (V.matches(e4, t4)) return e4;
                  e4 = e4.parentElement || e4.parentNode;
                } while (null !== e4 && 1 === e4.nodeType);
                return null;
              }).call(e3, t4);
            }(this.player.elements.container, t3.config.fullscreen.container), X.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, () => {
              this.onChange();
            }), X.call(this.player, this.player.elements.container, "dblclick", (e3) => {
              S.element(this.player.elements.controls) && this.player.elements.controls.contains(e3.target) || this.player.listeners.proxy(e3, this.toggle, "fullscreen");
            }), X.call(this, this.player.elements.container, "keydown", (e3) => this.trapFocus(e3)), this.update();
          }
          static get nativeSupported() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
          }
          get useNative() {
            return He.nativeSupported && !this.forceFallback;
          }
          static get prefix() {
            if (S.function(document.exitFullscreen)) return "";
            let e3 = "";
            return ["webkit", "moz", "ms"].some((t3) => !(!S.function(document[`${t3}ExitFullscreen`]) && !S.function(document[`${t3}CancelFullScreen`])) && (e3 = t3, true)), e3;
          }
          static get property() {
            return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
          }
          get supported() {
            return [this.player.config.fullscreen.enabled, this.player.isVideo, He.nativeSupported || this.player.config.fullscreen.fallback, !this.player.isYouTube || He.nativeSupported || !M.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative].every(Boolean);
          }
          get active() {
            if (!this.supported) return false;
            if (!He.nativeSupported || this.forceFallback) return F(this.target, this.player.config.classNames.fullscreen.fallback);
            const e3 = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
            return e3 && e3.shadowRoot ? e3 === this.target.getRootNode().host : e3 === this.target;
          }
          get target() {
            return M.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen ?? this.player.elements.container;
          }
        }
        function Re(e3, t3 = 1) {
          return new Promise((i2, s2) => {
            const n2 = new Image(), a2 = () => {
              delete n2.onload, delete n2.onerror, (n2.naturalWidth >= t3 ? i2 : s2)(n2);
            };
            Object.assign(n2, { onload: a2, onerror: a2, src: e3 });
          });
        }
        const Fe = { addStyleHook() {
          R(this.elements.container, this.config.selectors.container.replace(".", ""), true), R(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
        }, toggleNativeControls(e3 = false) {
          e3 && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
        }, build() {
          if (this.listeners.media(), !this.supported.ui) return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), void Fe.toggleNativeControls.call(this, true);
          S.element(this.elements.controls) || (Pe.inject.call(this), this.listeners.controls()), Fe.toggleNativeControls.call(this), this.isHTML5 && xe.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Pe.updateVolume.call(this), Pe.timeUpdate.call(this), Pe.durationUpdate.call(this), Fe.checkPlaying.call(this), R(this.elements.container, this.config.classNames.pip.supported, K.pip && this.isHTML5 && this.isVideo), R(this.elements.container, this.config.classNames.airplay.supported, K.airplay && this.isHTML5), R(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = true, setTimeout(() => {
            Z.call(this, this.media, "ready");
          }, 0), Fe.setTitle.call(this), this.poster && Fe.setPoster.call(this, this.poster, false).catch(() => {
          }), this.config.duration && Pe.durationUpdate.call(this), this.config.mediaMetadata && Pe.setMediaMetadata.call(this);
        }, setTitle() {
          let e3 = ve.get("play", this.config);
          if (S.string(this.config.title) && !S.empty(this.config.title) && (e3 += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach((t3) => {
            t3.setAttribute("aria-label", e3);
          }), this.isEmbed) {
            const e4 = B.call(this, "iframe");
            if (!S.element(e4)) return;
            const t3 = S.empty(this.config.title) ? "video" : this.config.title, i2 = ve.get("frameTitle", this.config);
            e4.setAttribute("title", i2.replace("{title}", t3));
          }
        }, togglePoster(e3) {
          R(this.elements.container, this.config.classNames.posterEnabled, e3);
        }, setPoster(e3, t3 = true) {
          return t3 && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e3), this.elements.poster.removeAttribute("hidden"), te.call(this).then(() => Re(e3)).catch((t4) => {
            throw e3 === this.poster && Fe.togglePoster.call(this, false), t4;
          }).then(() => {
            if (e3 !== this.poster) throw new Error("setPoster cancelled by later call to setPoster");
          }).then(() => (Object.assign(this.elements.poster.style, { backgroundImage: `url('${e3}')`, backgroundSize: "" }), Fe.togglePoster.call(this, true), e3)));
        }, checkPlaying(e3) {
          R(this.elements.container, this.config.classNames.playing, this.playing), R(this.elements.container, this.config.classNames.paused, this.paused), R(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e4) => {
            Object.assign(e4, { pressed: this.playing }), e4.setAttribute("aria-label", ve.get(this.playing ? "pause" : "play", this.config));
          }), S.event(e3) && "timeupdate" === e3.type || Fe.toggleControls.call(this);
        }, checkLoading(e3) {
          this.loading = ["stalled", "waiting"].includes(e3.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
            R(this.elements.container, this.config.classNames.loading, this.loading), Fe.toggleControls.call(this);
          }, this.loading ? 250 : 0);
        }, toggleControls(e3) {
          const { controls: t3 } = this.elements;
          if (t3 && this.config.hideControls) {
            const i2 = this.touch && this.lastSeekTime + 2e3 > Date.now();
            this.toggleControls(Boolean(e3 || this.loading || this.paused || t3.pressed || t3.hover || i2));
          }
        }, migrateStyles() {
          Object.values({ ...this.media.style }).filter((e3) => !S.empty(e3) && S.string(e3) && e3.startsWith("--plyr")).forEach((e3) => {
            this.elements.container.style.setProperty(e3, this.media.style.getPropertyValue(e3)), this.media.style.removeProperty(e3);
          }), S.empty(this.media.style) && this.media.removeAttribute("style");
        } };
        class Ve {
          constructor(t3) {
            e2(this, "firstTouch", () => {
              const { player: e3 } = this, { elements: t4 } = e3;
              e3.touch = true, R(t4.container, e3.config.classNames.isTouch, true);
            }), e2(this, "global", (e3 = true) => {
              const { player: t4 } = this;
              t4.config.keyboard.global && Q.call(t4, window, "keydown keyup", this.handleKey, e3, false), Q.call(t4, document.body, "click", this.toggleMenu, e3), G.call(t4, document.body, "touchstart", this.firstTouch);
            }), e2(this, "container", () => {
              const { player: e3 } = this, { config: t4, elements: i2, timers: s2 } = e3;
              !t4.keyboard.global && t4.keyboard.focused && X.call(e3, i2.container, "keydown keyup", this.handleKey, false), X.call(e3, i2.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (t5) => {
                const { controls: n3 } = i2;
                n3 && "enterfullscreen" === t5.type && (n3.pressed = false, n3.hover = false);
                let a3 = 0;
                ["touchstart", "touchmove", "mousemove"].includes(t5.type) && (Fe.toggleControls.call(e3, true), a3 = e3.touch ? 3e3 : 2e3), clearTimeout(s2.controls), s2.controls = setTimeout(() => Fe.toggleControls.call(e3, false), a3);
              });
              const n2 = () => {
                if (!e3.isVimeo || e3.config.vimeo.premium) return;
                const t5 = i2.wrapper, { active: s3 } = e3.fullscreen, [n3, a3] = ce.call(e3), l2 = ae(`aspect-ratio: ${n3} / ${a3}`);
                if (!s3) return void (l2 ? (t5.style.width = null, t5.style.height = null) : (t5.style.maxWidth = null, t5.style.margin = null));
                const [r2, o2] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)], c2 = r2 / o2 > n3 / a3;
                l2 ? (t5.style.width = c2 ? "auto" : "100%", t5.style.height = c2 ? "100%" : "auto") : (t5.style.maxWidth = c2 ? o2 / a3 * n3 + "px" : null, t5.style.margin = c2 ? "0 auto" : null);
              }, a2 = () => {
                clearTimeout(s2.resized), s2.resized = setTimeout(n2, 50);
              };
              X.call(e3, i2.container, "enterfullscreen exitfullscreen", (t5) => {
                const { target: s3 } = e3.fullscreen;
                if (s3 !== i2.container) return;
                if (!e3.isEmbed && S.empty(e3.config.ratio)) return;
                n2();
                ("enterfullscreen" === t5.type ? X : J).call(e3, window, "resize", a2);
              });
            }), e2(this, "media", () => {
              const { player: e3 } = this, { elements: t4 } = e3;
              if (X.call(e3, e3.media, "timeupdate seeking seeked", (t5) => Pe.timeUpdate.call(e3, t5)), X.call(e3, e3.media, "durationchange loadeddata loadedmetadata", (t5) => Pe.durationUpdate.call(e3, t5)), X.call(e3, e3.media, "ended", () => {
                e3.isHTML5 && e3.isVideo && e3.config.resetOnEnd && (e3.restart(), e3.pause());
              }), X.call(e3, e3.media, "progress playing seeking seeked", (t5) => Pe.updateProgress.call(e3, t5)), X.call(e3, e3.media, "volumechange", (t5) => Pe.updateVolume.call(e3, t5)), X.call(e3, e3.media, "playing play pause ended emptied timeupdate", (t5) => Fe.checkPlaying.call(e3, t5)), X.call(e3, e3.media, "waiting canplay seeked playing", (t5) => Fe.checkLoading.call(e3, t5)), e3.supported.ui && e3.config.clickToPlay && !e3.isAudio) {
                const i3 = B.call(e3, `.${e3.config.classNames.video}`);
                if (!S.element(i3)) return;
                X.call(e3, t4.container, "click", (s2) => {
                  ([t4.container, i3].includes(s2.target) || i3.contains(s2.target)) && (e3.touch && e3.config.hideControls || (e3.ended ? (this.proxy(s2, e3.restart, "restart"), this.proxy(s2, () => {
                    ie(e3.play());
                  }, "play")) : this.proxy(s2, () => {
                    ie(e3.togglePlay());
                  }, "play")));
                });
              }
              e3.supported.ui && e3.config.disableContextMenu && X.call(e3, t4.wrapper, "contextmenu", (e4) => {
                e4.preventDefault();
              }, false), X.call(e3, e3.media, "volumechange", () => {
                e3.storage.set({ volume: e3.volume, muted: e3.muted });
              }), X.call(e3, e3.media, "ratechange", () => {
                Pe.updateSetting.call(e3, "speed"), e3.storage.set({ speed: e3.speed });
              }), X.call(e3, e3.media, "qualitychange", (t5) => {
                Pe.updateSetting.call(e3, "quality", null, t5.detail.quality);
              }), X.call(e3, e3.media, "ready qualitychange", () => {
                Pe.setDownloadUrl.call(e3);
              });
              const i2 = e3.config.events.concat(["keyup", "keydown"]).join(" ");
              X.call(e3, e3.media, i2, (i3) => {
                let { detail: s2 = {} } = i3;
                "error" === i3.type && (s2 = e3.media.error), Z.call(e3, t4.container, i3.type, true, s2);
              });
            }), e2(this, "proxy", (e3, t4, i2) => {
              const { player: s2 } = this, n2 = s2.config.listeners[i2];
              let a2 = true;
              S.function(n2) && (a2 = n2.call(s2, e3)), false !== a2 && S.function(t4) && t4.call(s2, e3);
            }), e2(this, "bind", (e3, t4, i2, s2, n2 = true) => {
              const { player: a2 } = this, l2 = a2.config.listeners[s2], r2 = S.function(l2);
              X.call(a2, e3, t4, (e4) => this.proxy(e4, i2, s2), n2 && !r2);
            }), e2(this, "controls", () => {
              const { player: e3 } = this, { elements: t4 } = e3, i2 = M.isIE ? "change" : "input";
              if (t4.buttons.play && Array.from(t4.buttons.play).forEach((t5) => {
                this.bind(t5, "click", () => {
                  ie(e3.togglePlay());
                }, "play");
              }), this.bind(t4.buttons.restart, "click", e3.restart, "restart"), this.bind(t4.buttons.rewind, "click", () => {
                e3.lastSeekTime = Date.now(), e3.rewind();
              }, "rewind"), this.bind(t4.buttons.fastForward, "click", () => {
                e3.lastSeekTime = Date.now(), e3.forward();
              }, "fastForward"), this.bind(t4.buttons.mute, "click", () => {
                e3.muted = !e3.muted;
              }, "mute"), this.bind(t4.buttons.captions, "click", () => e3.toggleCaptions()), this.bind(t4.buttons.download, "click", () => {
                Z.call(e3, e3.media, "download");
              }, "download"), this.bind(t4.buttons.fullscreen, "click", () => {
                e3.fullscreen.toggle();
              }, "fullscreen"), this.bind(t4.buttons.pip, "click", () => {
                e3.pip = "toggle";
              }, "pip"), this.bind(t4.buttons.airplay, "click", e3.airplay, "airplay"), this.bind(t4.buttons.settings, "click", (t5) => {
                t5.stopPropagation(), t5.preventDefault(), Pe.toggleMenu.call(e3, t5);
              }, null, false), this.bind(t4.buttons.settings, "keyup", (t5) => {
                [" ", "Enter"].includes(t5.key) && ("Enter" !== t5.key ? (t5.preventDefault(), t5.stopPropagation(), Pe.toggleMenu.call(e3, t5)) : Pe.focusFirstMenuItem.call(e3, null, true));
              }, null, false), this.bind(t4.settings.menu, "keydown", (t5) => {
                "Escape" === t5.key && Pe.toggleMenu.call(e3, t5);
              }), this.bind(t4.inputs.seek, "mousedown mousemove", (e4) => {
                const i3 = t4.progress.getBoundingClientRect(), s2 = 100 / i3.width * (e4.pageX - i3.left);
                e4.currentTarget.setAttribute("seek-value", s2);
              }), this.bind(t4.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (t5) => {
                const i3 = t5.currentTarget, s2 = "play-on-seeked";
                if (S.keyboardEvent(t5) && !["ArrowLeft", "ArrowRight"].includes(t5.key)) return;
                e3.lastSeekTime = Date.now();
                const n2 = i3.hasAttribute(s2), a2 = ["mouseup", "touchend", "keyup"].includes(t5.type);
                n2 && a2 ? (i3.removeAttribute(s2), ie(e3.play())) : !a2 && e3.playing && (i3.setAttribute(s2, ""), e3.pause());
              }), M.isIos) {
                const t5 = U.call(e3, 'input[type="range"]');
                Array.from(t5).forEach((e4) => this.bind(e4, i2, (e5) => P(e5.target)));
              }
              this.bind(t4.inputs.seek, i2, (t5) => {
                const i3 = t5.currentTarget;
                let s2 = i3.getAttribute("seek-value");
                S.empty(s2) && (s2 = i3.value), i3.removeAttribute("seek-value"), e3.currentTime = s2 / i3.max * e3.duration;
              }, "seek"), this.bind(t4.progress, "mouseenter mouseleave mousemove", (t5) => Pe.updateSeekTooltip.call(e3, t5)), this.bind(t4.progress, "mousemove touchmove", (t5) => {
                const { previewThumbnails: i3 } = e3;
                i3 && i3.loaded && i3.startMove(t5);
              }), this.bind(t4.progress, "mouseleave touchend click", () => {
                const { previewThumbnails: t5 } = e3;
                t5 && t5.loaded && t5.endMove(false, true);
              }), this.bind(t4.progress, "mousedown touchstart", (t5) => {
                const { previewThumbnails: i3 } = e3;
                i3 && i3.loaded && i3.startScrubbing(t5);
              }), this.bind(t4.progress, "mouseup touchend", (t5) => {
                const { previewThumbnails: i3 } = e3;
                i3 && i3.loaded && i3.endScrubbing(t5);
              }), M.isWebKit && Array.from(U.call(e3, 'input[type="range"]')).forEach((t5) => {
                this.bind(t5, "input", (t6) => Pe.updateRangeFill.call(e3, t6.target));
              }), e3.config.toggleInvert && !S.element(t4.display.duration) && this.bind(t4.display.currentTime, "click", () => {
                0 !== e3.currentTime && (e3.config.invertTime = !e3.config.invertTime, Pe.timeUpdate.call(e3));
              }), this.bind(t4.inputs.volume, i2, (t5) => {
                e3.volume = t5.target.value;
              }, "volume"), this.bind(t4.controls, "mouseenter mouseleave", (i3) => {
                t4.controls.hover = !e3.touch && "mouseenter" === i3.type;
              }), t4.fullscreen && Array.from(t4.fullscreen.children).filter((e4) => !e4.contains(t4.container)).forEach((i3) => {
                this.bind(i3, "mouseenter mouseleave", (i4) => {
                  t4.controls && (t4.controls.hover = !e3.touch && "mouseenter" === i4.type);
                });
              }), this.bind(t4.controls, "mousedown mouseup touchstart touchend touchcancel", (e4) => {
                t4.controls.pressed = ["mousedown", "touchstart"].includes(e4.type);
              }), this.bind(t4.controls, "focusin", () => {
                const { config: i3, timers: s2 } = e3;
                R(t4.controls, i3.classNames.noTransition, true), Fe.toggleControls.call(e3, true), setTimeout(() => {
                  R(t4.controls, i3.classNames.noTransition, false);
                }, 0);
                const n2 = this.touch ? 3e3 : 4e3;
                clearTimeout(s2.controls), s2.controls = setTimeout(() => Fe.toggleControls.call(e3, false), n2);
              }), this.bind(t4.inputs.volume, "wheel", (t5) => {
                const i3 = t5.webkitDirectionInvertedFromDevice, [s2, n2] = [t5.deltaX, -t5.deltaY].map((e4) => i3 ? -e4 : e4), a2 = Math.sign(Math.abs(s2) > Math.abs(n2) ? s2 : n2);
                e3.increaseVolume(a2 / 50);
                const { volume: l2 } = e3.media;
                (1 === a2 && l2 < 1 || -1 === a2 && l2 > 0) && t5.preventDefault();
              }, "volume", false);
            }), this.player = t3, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this);
          }
          handleKey(e3) {
            const { player: t3 } = this, { elements: i2 } = t3, { key: s2, type: n2, altKey: a2, ctrlKey: l2, metaKey: r2, shiftKey: o2 } = e3, c2 = "keydown" === n2, u2 = c2 && s2 === this.lastKey;
            if (a2 || l2 || r2 || o2) return;
            if (!s2) return;
            if (c2) {
              const n3 = document.activeElement;
              if (S.element(n3)) {
                const { editable: s3 } = t3.config.selectors, { seek: a3 } = i2.inputs;
                if (n3 !== a3 && V(n3, s3)) return;
                if (" " === e3.key && V(n3, 'button, [role^="menuitem"]')) return;
              }
              switch ([" ", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(s2) && (e3.preventDefault(), e3.stopPropagation()), s2) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  u2 || (h2 = parseInt(s2, 10), t3.currentTime = t3.duration / 10 * h2);
                  break;
                case " ":
                case "k":
                  u2 || ie(t3.togglePlay());
                  break;
                case "ArrowUp":
                  t3.increaseVolume(0.1);
                  break;
                case "ArrowDown":
                  t3.decreaseVolume(0.1);
                  break;
                case "m":
                  u2 || (t3.muted = !t3.muted);
                  break;
                case "ArrowRight":
                  t3.forward();
                  break;
                case "ArrowLeft":
                  t3.rewind();
                  break;
                case "f":
                  t3.fullscreen.toggle();
                  break;
                case "c":
                  u2 || t3.toggleCaptions();
                  break;
                case "l":
                  t3.loop = !t3.loop;
              }
              "Escape" === s2 && !t3.fullscreen.usingNative && t3.fullscreen.active && t3.fullscreen.toggle(), this.lastKey = s2;
            } else this.lastKey = null;
            var h2;
          }
          toggleMenu(e3) {
            Pe.toggleMenu.call(this.player, e3);
          }
        }
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
        var Ue = function(e3, t3) {
          return e3(t3 = { exports: {} }, t3.exports), t3.exports;
        }(function(e3, t3) {
          e3.exports = function() {
            var e4 = function() {
            }, t4 = {}, i2 = {}, s2 = {};
            function n2(e5, t5) {
              e5 = e5.push ? e5 : [e5];
              var n3, a3, l3, r3 = [], o3 = e5.length, c3 = o3;
              for (n3 = function(e6, i3) {
                i3.length && r3.push(e6), --c3 || t5(r3);
              }; o3--; ) a3 = e5[o3], (l3 = i2[a3]) ? n3(a3, l3) : (s2[a3] = s2[a3] || []).push(n3);
            }
            function a2(e5, t5) {
              if (e5) {
                var n3 = s2[e5];
                if (i2[e5] = t5, n3) for (; n3.length; ) n3[0](e5, t5), n3.splice(0, 1);
              }
            }
            function l2(t5, i3) {
              t5.call && (t5 = { success: t5 }), i3.length ? (t5.error || e4)(i3) : (t5.success || e4)(t5);
            }
            function r2(t5, i3, s3, n3) {
              var a3, l3, o3 = document, c3 = s3.async, u2 = (s3.numRetries || 0) + 1, h2 = s3.before || e4, d2 = t5.replace(/[\?|#].*$/, ""), m2 = t5.replace(/^(css|img)!/, "");
              n3 = n3 || 0, /(^css!|\.css$)/.test(d2) ? ((l3 = o3.createElement("link")).rel = "stylesheet", l3.href = m2, (a3 = "hideFocus" in l3) && l3.relList && (a3 = 0, l3.rel = "preload", l3.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d2) ? (l3 = o3.createElement("img")).src = m2 : ((l3 = o3.createElement("script")).src = t5, l3.async = void 0 === c3 || c3), l3.onload = l3.onerror = l3.onbeforeload = function(e5) {
                var o4 = e5.type[0];
                if (a3) try {
                  l3.sheet.cssText.length || (o4 = "e");
                } catch (e6) {
                  18 != e6.code && (o4 = "e");
                }
                if ("e" == o4) {
                  if ((n3 += 1) < u2) return r2(t5, i3, s3, n3);
                } else if ("preload" == l3.rel && "style" == l3.as) return l3.rel = "stylesheet";
                i3(t5, o4, e5.defaultPrevented);
              }, false !== h2(t5, l3) && o3.head.appendChild(l3);
            }
            function o2(e5, t5, i3) {
              var s3, n3, a3 = (e5 = e5.push ? e5 : [e5]).length, l3 = a3, o3 = [];
              for (s3 = function(e6, i4, s4) {
                if ("e" == i4 && o3.push(e6), "b" == i4) {
                  if (!s4) return;
                  o3.push(e6);
                }
                --a3 || t5(o3);
              }, n3 = 0; n3 < l3; n3++) r2(e5[n3], s3, i3);
            }
            function c2(e5, i3, s3) {
              var n3, r3;
              if (i3 && i3.trim && (n3 = i3), r3 = (n3 ? s3 : i3) || {}, n3) {
                if (n3 in t4) throw "LoadJS";
                t4[n3] = true;
              }
              function c3(t5, i4) {
                o2(e5, function(e6) {
                  l2(r3, e6), t5 && l2({ success: t5, error: i4 }, e6), a2(n3, e6);
                }, r3);
              }
              if (r3.returnPromise) return new Promise(c3);
              c3();
            }
            return c2.ready = function(e5, t5) {
              return n2(e5, function(e6) {
                l2(t5, e6);
              }), c2;
            }, c2.done = function(e5) {
              a2(e5, []);
            }, c2.reset = function() {
              t4 = {}, i2 = {}, s2 = {};
            }, c2.isDefined = function(e5) {
              return e5 in t4;
            }, c2;
          }();
        });
        function Be(e3) {
          return new Promise((t3, i2) => {
            Ue(e3, { success: t3, error: i2 });
          });
        }
        function We(e3) {
          e3 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e3 && (this.media.paused = !e3, Z.call(this, this.media, e3 ? "play" : "pause"));
        }
        const ze = { setup() {
          const e3 = this;
          R(e3.elements.wrapper, e3.config.classNames.embed, true), e3.options.speed = e3.config.speed.options, ue.call(e3), S.object(window.Vimeo) ? ze.ready.call(e3) : Be(e3.config.urls.vimeo.sdk).then(() => {
            ze.ready.call(e3);
          }).catch((t3) => {
            e3.debug.warn("Vimeo SDK (player.js) failed to load", t3);
          });
        }, ready() {
          const e3 = this, t3 = e3.config.vimeo, { premium: i2, referrerPolicy: s2, ...n2 } = t3;
          let a2 = e3.media.getAttribute("src"), l2 = "";
          S.empty(a2) ? (a2 = e3.media.getAttribute(e3.config.attributes.embed.id), l2 = e3.media.getAttribute(e3.config.attributes.embed.hash)) : l2 = function(e4) {
            const t4 = e4.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
            return t4 && 5 === t4.length ? t4[4] : null;
          }(a2);
          const r2 = l2 ? { h: l2 } : {};
          i2 && Object.assign(n2, { controls: false, sidedock: false });
          const o2 = Ne({ loop: e3.config.loop.active, autoplay: e3.autoplay, muted: e3.muted, gesture: "media", playsinline: e3.config.playsinline, ...r2, ...n2 }), c2 = (u2 = a2, S.empty(u2) ? null : S.number(Number(u2)) ? u2 : u2.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : u2);
          var u2;
          const h2 = $("iframe"), d2 = me(e3.config.urls.vimeo.iframe, c2, o2);
          if (h2.setAttribute("src", d2), h2.setAttribute("allowfullscreen", ""), h2.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), S.empty(s2) || h2.setAttribute("referrerPolicy", s2), i2 || !t3.customControls) h2.setAttribute("data-poster", e3.poster), e3.media = q(h2, e3.media);
          else {
            const t4 = $("div", { class: e3.config.classNames.embedContainer, "data-poster": e3.poster });
            t4.appendChild(h2), e3.media = q(t4, e3.media);
          }
          t3.customControls || Te(me(e3.config.urls.vimeo.api, d2)).then((t4) => {
            !S.empty(t4) && t4.thumbnail_url && Fe.setPoster.call(e3, t4.thumbnail_url).catch(() => {
            });
          }), e3.embed = new window.Vimeo.Player(h2, { autopause: e3.config.autopause, muted: e3.muted }), e3.media.paused = true, e3.media.currentTime = 0, e3.supported.ui && e3.embed.disableTextTrack(), e3.media.play = () => (We.call(e3, true), e3.embed.play()), e3.media.pause = () => (We.call(e3, false), e3.embed.pause()), e3.media.stop = () => {
            e3.pause(), e3.currentTime = 0;
          };
          let { currentTime: m2 } = e3.media;
          Object.defineProperty(e3.media, "currentTime", { get: () => m2, set(t4) {
            const { embed: i3, media: s3, paused: n3, volume: a3 } = e3, l3 = n3 && !i3.hasPlayed;
            s3.seeking = true, Z.call(e3, s3, "seeking"), Promise.resolve(l3 && i3.setVolume(0)).then(() => i3.setCurrentTime(t4)).then(() => l3 && i3.pause()).then(() => l3 && i3.setVolume(a3)).catch(() => {
            });
          } });
          let p2 = e3.config.speed.selected;
          Object.defineProperty(e3.media, "playbackRate", { get: () => p2, set(t4) {
            e3.embed.setPlaybackRate(t4).then(() => {
              p2 = t4, Z.call(e3, e3.media, "ratechange");
            }).catch(() => {
              e3.options.speed = [1];
            });
          } });
          let { volume: g2 } = e3.config;
          Object.defineProperty(e3.media, "volume", { get: () => g2, set(t4) {
            e3.embed.setVolume(t4).then(() => {
              g2 = t4, Z.call(e3, e3.media, "volumechange");
            });
          } });
          let { muted: f2 } = e3.config;
          Object.defineProperty(e3.media, "muted", { get: () => f2, set(t4) {
            const i3 = !!S.boolean(t4) && t4;
            e3.embed.setMuted(!!i3 || e3.config.muted).then(() => {
              f2 = i3, Z.call(e3, e3.media, "volumechange");
            });
          } });
          let y2, { loop: b2 } = e3.config;
          Object.defineProperty(e3.media, "loop", { get: () => b2, set(t4) {
            const i3 = S.boolean(t4) ? t4 : e3.config.loop.active;
            e3.embed.setLoop(i3).then(() => {
              b2 = i3;
            });
          } }), e3.embed.getVideoUrl().then((t4) => {
            y2 = t4, Pe.setDownloadUrl.call(e3);
          }).catch((e4) => {
            this.debug.warn(e4);
          }), Object.defineProperty(e3.media, "currentSrc", { get: () => y2 }), Object.defineProperty(e3.media, "ended", { get: () => e3.currentTime === e3.duration }), Promise.all([e3.embed.getVideoWidth(), e3.embed.getVideoHeight()]).then((t4) => {
            const [i3, s3] = t4;
            e3.embed.ratio = he(i3, s3), ue.call(this);
          }), e3.embed.setAutopause(e3.config.autopause).then((t4) => {
            e3.config.autopause = t4;
          }), e3.embed.getVideoTitle().then((t4) => {
            e3.config.title = t4, Fe.setTitle.call(this);
          }), e3.embed.getCurrentTime().then((t4) => {
            m2 = t4, Z.call(e3, e3.media, "timeupdate");
          }), e3.embed.getDuration().then((t4) => {
            e3.media.duration = t4, Z.call(e3, e3.media, "durationchange");
          }), e3.embed.getTextTracks().then((t4) => {
            e3.media.textTracks = t4, xe.setup.call(e3);
          }), e3.embed.on("cuechange", ({ cues: t4 = [] }) => {
            const i3 = t4.map((e4) => function(e5) {
              const t5 = document.createDocumentFragment(), i4 = document.createElement("div");
              return t5.appendChild(i4), i4.innerHTML = e5, t5.firstChild.innerText;
            }(e4.text));
            xe.updateCues.call(e3, i3);
          }), e3.embed.on("loaded", () => {
            if (e3.embed.getPaused().then((t4) => {
              We.call(e3, !t4), t4 || Z.call(e3, e3.media, "playing");
            }), S.element(e3.embed.element) && e3.supported.ui) {
              e3.embed.element.setAttribute("tabindex", -1);
            }
          }), e3.embed.on("bufferstart", () => {
            Z.call(e3, e3.media, "waiting");
          }), e3.embed.on("bufferend", () => {
            Z.call(e3, e3.media, "playing");
          }), e3.embed.on("play", () => {
            We.call(e3, true), Z.call(e3, e3.media, "playing");
          }), e3.embed.on("pause", () => {
            We.call(e3, false);
          }), e3.embed.on("timeupdate", (t4) => {
            e3.media.seeking = false, m2 = t4.seconds, Z.call(e3, e3.media, "timeupdate");
          }), e3.embed.on("progress", (t4) => {
            e3.media.buffered = t4.percent, Z.call(e3, e3.media, "progress"), 1 === parseInt(t4.percent, 10) && Z.call(e3, e3.media, "canplaythrough"), e3.embed.getDuration().then((t5) => {
              t5 !== e3.media.duration && (e3.media.duration = t5, Z.call(e3, e3.media, "durationchange"));
            });
          }), e3.embed.on("seeked", () => {
            e3.media.seeking = false, Z.call(e3, e3.media, "seeked");
          }), e3.embed.on("ended", () => {
            e3.media.paused = true, Z.call(e3, e3.media, "ended");
          }), e3.embed.on("error", (t4) => {
            e3.media.error = t4, Z.call(e3, e3.media, "error");
          }), t3.customControls && setTimeout(() => Fe.build.call(e3), 0);
        } };
        function Ke(e3) {
          e3 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e3 && (this.media.paused = !e3, Z.call(this, this.media, e3 ? "play" : "pause"));
        }
        function Ye(e3) {
          return e3.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
        }
        const Qe = { setup() {
          if (R(this.elements.wrapper, this.config.classNames.embed, true), S.object(window.YT) && S.function(window.YT.Player)) Qe.ready.call(this);
          else {
            const e3 = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
              S.function(e3) && e3(), Qe.ready.call(this);
            }, Be(this.config.urls.youtube.sdk).catch((e4) => {
              this.debug.warn("YouTube API failed to load", e4);
            });
          }
        }, getTitle(e3) {
          Te(me(this.config.urls.youtube.api, e3)).then((e4) => {
            if (S.object(e4)) {
              const { title: t3, height: i2, width: s2 } = e4;
              this.config.title = t3, Fe.setTitle.call(this), this.embed.ratio = he(s2, i2);
            }
            ue.call(this);
          }).catch(() => {
            ue.call(this);
          });
        }, ready() {
          const e3 = this, t3 = e3.config.youtube, i2 = e3.media && e3.media.getAttribute("id");
          if (!S.empty(i2) && i2.startsWith("youtube-")) return;
          let s2 = e3.media.getAttribute("src");
          S.empty(s2) && (s2 = e3.media.getAttribute(this.config.attributes.embed.id));
          const n2 = (a2 = s2, S.empty(a2) ? null : a2.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a2);
          var a2;
          const l2 = $("div", { id: `${e3.provider}-${Math.floor(1e4 * Math.random())}`, "data-poster": t3.customControls ? e3.poster : void 0 });
          if (e3.media = q(l2, e3.media), t3.customControls) {
            const t4 = (e4) => `https://i.ytimg.com/vi/${n2}/${e4}default.jpg`;
            Re(t4("maxres"), 121).catch(() => Re(t4("sd"), 121)).catch(() => Re(t4("hq"))).then((t5) => Fe.setPoster.call(e3, t5.src)).then((t5) => {
              t5.includes("maxres") || (e3.elements.poster.style.backgroundSize = "cover");
            }).catch(() => {
            });
          }
          e3.embed = new window.YT.Player(e3.media, { videoId: n2, host: Ye(t3), playerVars: x({}, { autoplay: e3.config.autoplay ? 1 : 0, hl: e3.config.hl, controls: e3.supported.ui && t3.customControls ? 0 : 1, disablekb: 1, playsinline: e3.config.playsinline && !e3.config.fullscreen.iosNative ? 1 : 0, cc_load_policy: e3.captions.active ? 1 : 0, cc_lang_pref: e3.config.captions.language, widget_referrer: window ? window.location.href : null }, t3), events: { onError(t4) {
            if (!e3.media.error) {
              const i3 = t4.data, s3 = { 2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.", 5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.", 100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.", 101: "The owner of the requested video does not allow it to be played in embedded players.", 150: "The owner of the requested video does not allow it to be played in embedded players." }[i3] || "An unknown error occurred";
              e3.media.error = { code: i3, message: s3 }, Z.call(e3, e3.media, "error");
            }
          }, onPlaybackRateChange(t4) {
            const i3 = t4.target;
            e3.media.playbackRate = i3.getPlaybackRate(), Z.call(e3, e3.media, "ratechange");
          }, onReady(i3) {
            if (S.function(e3.media.play)) return;
            const s3 = i3.target;
            Qe.getTitle.call(e3, n2), e3.media.play = () => {
              Ke.call(e3, true), s3.playVideo();
            }, e3.media.pause = () => {
              Ke.call(e3, false), s3.pauseVideo();
            }, e3.media.stop = () => {
              s3.stopVideo();
            }, e3.media.duration = s3.getDuration(), e3.media.paused = true, e3.media.currentTime = 0, Object.defineProperty(e3.media, "currentTime", { get: () => Number(s3.getCurrentTime()), set(t4) {
              e3.paused && !e3.embed.hasPlayed && e3.embed.mute(), e3.media.seeking = true, Z.call(e3, e3.media, "seeking"), s3.seekTo(t4);
            } }), Object.defineProperty(e3.media, "playbackRate", { get: () => s3.getPlaybackRate(), set(e4) {
              s3.setPlaybackRate(e4);
            } });
            let { volume: a3 } = e3.config;
            Object.defineProperty(e3.media, "volume", { get: () => a3, set(t4) {
              a3 = t4, s3.setVolume(100 * a3), Z.call(e3, e3.media, "volumechange");
            } });
            let { muted: l3 } = e3.config;
            Object.defineProperty(e3.media, "muted", { get: () => l3, set(t4) {
              const i4 = S.boolean(t4) ? t4 : l3;
              l3 = i4, s3[i4 ? "mute" : "unMute"](), s3.setVolume(100 * a3), Z.call(e3, e3.media, "volumechange");
            } }), Object.defineProperty(e3.media, "currentSrc", { get: () => s3.getVideoUrl() }), Object.defineProperty(e3.media, "ended", { get: () => e3.currentTime === e3.duration });
            const r2 = s3.getAvailablePlaybackRates();
            e3.options.speed = r2.filter((t4) => e3.config.speed.options.includes(t4)), e3.supported.ui && t3.customControls && e3.media.setAttribute("tabindex", -1), Z.call(e3, e3.media, "timeupdate"), Z.call(e3, e3.media, "durationchange"), clearInterval(e3.timers.buffering), e3.timers.buffering = setInterval(() => {
              e3.media.buffered = s3.getVideoLoadedFraction(), (null === e3.media.lastBuffered || e3.media.lastBuffered < e3.media.buffered) && Z.call(e3, e3.media, "progress"), e3.media.lastBuffered = e3.media.buffered, 1 === e3.media.buffered && (clearInterval(e3.timers.buffering), Z.call(e3, e3.media, "canplaythrough"));
            }, 200), t3.customControls && setTimeout(() => Fe.build.call(e3), 50);
          }, onStateChange(i3) {
            const s3 = i3.target;
            clearInterval(e3.timers.playing);
            switch (e3.media.seeking && [1, 2].includes(i3.data) && (e3.media.seeking = false, Z.call(e3, e3.media, "seeked")), i3.data) {
              case -1:
                Z.call(e3, e3.media, "timeupdate"), e3.media.buffered = s3.getVideoLoadedFraction(), Z.call(e3, e3.media, "progress");
                break;
              case 0:
                Ke.call(e3, false), e3.media.loop ? (s3.stopVideo(), s3.playVideo()) : Z.call(e3, e3.media, "ended");
                break;
              case 1:
                t3.customControls && !e3.config.autoplay && e3.media.paused && !e3.embed.hasPlayed ? e3.media.pause() : (Ke.call(e3, true), Z.call(e3, e3.media, "playing"), e3.timers.playing = setInterval(() => {
                  Z.call(e3, e3.media, "timeupdate");
                }, 50), e3.media.duration !== s3.getDuration() && (e3.media.duration = s3.getDuration(), Z.call(e3, e3.media, "durationchange")));
                break;
              case 2:
                e3.muted || e3.embed.unMute(), Ke.call(e3, false);
                break;
              case 3:
                Z.call(e3, e3.media, "waiting");
            }
            Z.call(e3, e3.elements.container, "statechange", false, { code: i3.data });
          } } });
        } }, Xe = { setup() {
          this.media ? (R(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true), R(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true), this.isEmbed && R(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true), this.isVideo && (this.elements.wrapper = $("div", { class: this.config.classNames.video }), L(this.media, this.elements.wrapper), this.elements.poster = $("div", { class: this.config.classNames.poster }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? de.setup.call(this) : this.isYouTube ? Qe.setup.call(this) : this.isVimeo && ze.setup.call(this)) : this.debug.warn("No media element found!");
        } };
        class Je {
          constructor(t3) {
            e2(this, "load", () => {
              this.enabled && (S.object(window.google) && S.object(window.google.ima) ? this.ready() : Be(this.player.config.urls.googleIMA.sdk).then(() => {
                this.ready();
              }).catch(() => {
                this.trigger("error", new Error("Google IMA SDK failed to load"));
              }));
            }), e2(this, "ready", () => {
              var e3;
              this.enabled || ((e3 = this).manager && e3.manager.destroy(), e3.elements.displayContainer && e3.elements.displayContainer.destroy(), e3.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
                this.clearSafetyTimer("onAdsManagerLoaded()");
              }), this.listeners(), this.setupIMA();
            }), e2(this, "setupIMA", () => {
              this.elements.container = $("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (e3) => this.onAdsManagerLoaded(e3), false), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e3) => this.onAdError(e3), false), this.requestAds();
            }), e2(this, "requestAds", () => {
              const { container: e3 } = this.player.elements;
              try {
                const t4 = new google.ima.AdsRequest();
                t4.adTagUrl = this.tagUrl, t4.linearAdSlotWidth = e3.offsetWidth, t4.linearAdSlotHeight = e3.offsetHeight, t4.nonLinearAdSlotWidth = e3.offsetWidth, t4.nonLinearAdSlotHeight = e3.offsetHeight, t4.forceNonLinearFullSlot = false, t4.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t4);
              } catch (e4) {
                this.onAdError(e4);
              }
            }), e2(this, "pollCountdown", (e3 = false) => {
              if (!e3) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
              this.countdownTimer = setInterval(() => {
                const e4 = Ee(Math.max(this.manager.getRemainingTime(), 0)), t4 = `${ve.get("advertisement", this.player.config)} - ${e4}`;
                this.elements.container.setAttribute("data-badge-text", t4);
              }, 100);
            }), e2(this, "onAdsManagerLoaded", (e3) => {
              if (!this.enabled) return;
              const t4 = new google.ima.AdsRenderingSettings();
              t4.restoreCustomPlaybackStateOnAdBreakComplete = true, t4.enablePreloading = true, this.manager = e3.getAdsManager(this.player, t4), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e4) => this.onAdError(e4)), Object.keys(google.ima.AdEvent.Type).forEach((e4) => {
                this.manager.addEventListener(google.ima.AdEvent.Type[e4], (e5) => this.onAdEvent(e5));
              }), this.trigger("loaded");
            }), e2(this, "addCuePoints", () => {
              S.empty(this.cuePoints) || this.cuePoints.forEach((e3) => {
                if (0 !== e3 && -1 !== e3 && e3 < this.player.duration) {
                  const t4 = this.player.elements.progress;
                  if (S.element(t4)) {
                    const i2 = 100 / this.player.duration * e3, s2 = $("span", { class: this.player.config.classNames.cues });
                    s2.style.left = `${i2.toString()}%`, t4.appendChild(s2);
                  }
                }
              });
            }), e2(this, "onAdEvent", (e3) => {
              const { container: t4 } = this.player.elements, i2 = e3.getAd(), s2 = e3.getAdData();
              switch (((e4) => {
                Z.call(this.player, this.player.media, `ads${e4.replace(/_/g, "").toLowerCase()}`);
              })(e3.type), e3.type) {
                case google.ima.AdEvent.Type.LOADED:
                  this.trigger("loaded"), this.pollCountdown(true), i2.isLinear() || (i2.width = t4.offsetWidth, i2.height = t4.offsetHeight);
                  break;
                case google.ima.AdEvent.Type.STARTED:
                  this.manager.setVolume(this.player.volume);
                  break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                  this.player.ended ? this.loadAds() : this.loader.contentComplete();
                  break;
                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                  this.pauseContent();
                  break;
                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                  this.pollCountdown(), this.resumeContent();
                  break;
                case google.ima.AdEvent.Type.LOG:
                  s2.adError && this.player.debug.warn(`Non-fatal ad error: ${s2.adError.getMessage()}`);
              }
            }), e2(this, "onAdError", (e3) => {
              this.cancel(), this.player.debug.warn("Ads error", e3);
            }), e2(this, "listeners", () => {
              const { container: e3 } = this.player.elements;
              let t4;
              this.player.on("canplay", () => {
                this.addCuePoints();
              }), this.player.on("ended", () => {
                this.loader.contentComplete();
              }), this.player.on("timeupdate", () => {
                t4 = this.player.currentTime;
              }), this.player.on("seeked", () => {
                const e4 = this.player.currentTime;
                S.empty(this.cuePoints) || this.cuePoints.forEach((i2, s2) => {
                  t4 < i2 && i2 < e4 && (this.manager.discardAdBreak(), this.cuePoints.splice(s2, 1));
                });
              }), window.addEventListener("resize", () => {
                this.manager && this.manager.resize(e3.offsetWidth, e3.offsetHeight, google.ima.ViewMode.NORMAL);
              });
            }), e2(this, "play", () => {
              const { container: e3 } = this.player.elements;
              this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
                this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                try {
                  this.initialized || (this.manager.init(e3.offsetWidth, e3.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = true;
                } catch (e4) {
                  this.onAdError(e4);
                }
              }).catch(() => {
              });
            }), e2(this, "resumeContent", () => {
              this.elements.container.style.zIndex = "", this.playing = false, ie(this.player.media.play());
            }), e2(this, "pauseContent", () => {
              this.elements.container.style.zIndex = 3, this.playing = true, this.player.media.pause();
            }), e2(this, "cancel", () => {
              this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
            }), e2(this, "loadAds", () => {
              this.managerPromise.then(() => {
                this.manager && this.manager.destroy(), this.managerPromise = new Promise((e3) => {
                  this.on("loaded", e3), this.player.debug.log(this.manager);
                }), this.initialized = false, this.requestAds();
              }).catch(() => {
              });
            }), e2(this, "trigger", (e3, ...t4) => {
              const i2 = this.events[e3];
              S.array(i2) && i2.forEach((e4) => {
                S.function(e4) && e4.apply(this, t4);
              });
            }), e2(this, "on", (e3, t4) => (S.array(this.events[e3]) || (this.events[e3] = []), this.events[e3].push(t4), this)), e2(this, "startSafetyTimer", (e3, t4) => {
              this.player.debug.log(`Safety timer invoked from: ${t4}`), this.safetyTimer = setTimeout(() => {
                this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
              }, e3);
            }), e2(this, "clearSafetyTimer", (e3) => {
              S.nullOrUndefined(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${e3}`), clearTimeout(this.safetyTimer), this.safetyTimer = null);
            }), this.player = t3, this.config = t3.config.ads, this.playing = false, this.initialized = false, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((e3, t4) => {
              this.on("loaded", e3), this.on("error", t4);
            }), this.load();
          }
          get enabled() {
            const { config: e3 } = this;
            return this.player.isHTML5 && this.player.isVideo && e3.enabled && (!S.empty(e3.publisherId) || S.url(e3.tagUrl));
          }
          get tagUrl() {
            const { config: e3 } = this;
            if (S.url(e3.tagUrl)) return e3.tagUrl;
            return `https://go.aniview.com/api/adserver6/vast/?${Ne({ AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: window.location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: e3.publisherId })}`;
          }
        }
        function Ge(e3 = 0, t3 = 0, i2 = 255) {
          return Math.min(Math.max(e3, t3), i2);
        }
        const Ze = (e3) => {
          const t3 = [];
          return e3.split(/\r\n\r\n|\n\n|\r\r/).forEach((e4) => {
            const i2 = {};
            e4.split(/\r\n|\n|\r/).forEach((e5) => {
              if (S.number(i2.startTime)) {
                if (!S.empty(e5.trim()) && S.empty(i2.text)) {
                  const t4 = e5.trim().split("#xywh=");
                  [i2.text] = t4, t4[1] && ([i2.x, i2.y, i2.w, i2.h] = t4[1].split(","));
                }
              } else {
                const t4 = e5.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                t4 && (i2.startTime = 60 * Number(t4[1] || 0) * 60 + 60 * Number(t4[2]) + Number(t4[3]) + Number(`0.${t4[4]}`), i2.endTime = 60 * Number(t4[6] || 0) * 60 + 60 * Number(t4[7]) + Number(t4[8]) + Number(`0.${t4[9]}`));
              }
            }), i2.text && t3.push(i2);
          }), t3;
        }, et = (e3, t3) => {
          const i2 = {};
          return e3 > t3.width / t3.height ? (i2.width = t3.width, i2.height = 1 / e3 * t3.width) : (i2.height = t3.height, i2.width = e3 * t3.height), i2;
        };
        class tt {
          constructor(t3) {
            e2(this, "load", () => {
              this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
                this.enabled && (this.render(), this.determineContainerAutoSizing(), this.listeners(), this.loaded = true);
              });
            }), e2(this, "getThumbnails", () => new Promise((e3) => {
              const { src: t4 } = this.player.config.previewThumbnails;
              if (S.empty(t4)) throw new Error("Missing previewThumbnails.src config attribute");
              const i2 = () => {
                this.thumbnails.sort((e4, t5) => e4.height - t5.height), this.player.debug.log("Preview thumbnails", this.thumbnails), e3();
              };
              if (S.function(t4)) t4((e4) => {
                this.thumbnails = e4, i2();
              });
              else {
                const e4 = (S.string(t4) ? [t4] : t4).map((e5) => this.getThumbnail(e5));
                Promise.all(e4).then(i2);
              }
            })), e2(this, "getThumbnail", (e3) => new Promise((t4) => {
              Te(e3).then((i2) => {
                const s2 = { frames: Ze(i2), height: null, urlPrefix: "" };
                s2.frames[0].text.startsWith("/") || s2.frames[0].text.startsWith("http://") || s2.frames[0].text.startsWith("https://") || (s2.urlPrefix = e3.substring(0, e3.lastIndexOf("/") + 1));
                const n2 = new Image();
                n2.onload = () => {
                  s2.height = n2.naturalHeight, s2.width = n2.naturalWidth, this.thumbnails.push(s2), t4();
                }, n2.src = s2.urlPrefix + s2.frames[0].text;
              });
            })), e2(this, "startMove", (e3) => {
              if (this.loaded && S.event(e3) && ["touchmove", "mousemove"].includes(e3.type) && this.player.media.duration) {
                if ("touchmove" === e3.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                else {
                  var t4, i2;
                  const s2 = this.player.elements.progress.getBoundingClientRect(), n2 = 100 / s2.width * (e3.pageX - s2.left);
                  this.seekTime = this.player.media.duration * (n2 / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e3.pageX, this.elements.thumb.time.innerText = Ee(this.seekTime);
                  const a2 = null === (t4 = this.player.config.markers) || void 0 === t4 || null === (i2 = t4.points) || void 0 === i2 ? void 0 : i2.find(({ time: e4 }) => e4 === Math.round(this.seekTime));
                  a2 && this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${a2.label}<br>`);
                }
                this.showImageAtCurrentTime();
              }
            }), e2(this, "endMove", () => {
              this.toggleThumbContainer(false, true);
            }), e2(this, "startScrubbing", (e3) => {
              (S.nullOrUndefined(e3.button) || false === e3.button || 0 === e3.button) && (this.mouseDown = true, this.player.media.duration && (this.toggleScrubbingContainer(true), this.toggleThumbContainer(false, true), this.showImageAtCurrentTime()));
            }), e2(this, "endScrubbing", () => {
              this.mouseDown = false, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(false) : G.call(this.player, this.player.media, "timeupdate", () => {
                this.mouseDown || this.toggleScrubbingContainer(false);
              });
            }), e2(this, "listeners", () => {
              this.player.on("play", () => {
                this.toggleThumbContainer(false, true);
              }), this.player.on("seeked", () => {
                this.toggleThumbContainer(false);
              }), this.player.on("timeupdate", () => {
                this.lastTime = this.player.media.currentTime;
              });
            }), e2(this, "render", () => {
              this.elements.thumb.container = $("div", { class: this.player.config.classNames.previewThumbnails.thumbContainer }), this.elements.thumb.imageContainer = $("div", { class: this.player.config.classNames.previewThumbnails.imageContainer }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
              const e3 = $("div", { class: this.player.config.classNames.previewThumbnails.timeContainer });
              this.elements.thumb.time = $("span", {}, "00:00"), e3.appendChild(this.elements.thumb.time), this.elements.thumb.imageContainer.appendChild(e3), S.element(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = $("div", { class: this.player.config.classNames.previewThumbnails.scrubbingContainer }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
            }), e2(this, "destroy", () => {
              this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
            }), e2(this, "showImageAtCurrentTime", () => {
              this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
              const e3 = this.thumbnails[0].frames.findIndex((e4) => this.seekTime >= e4.startTime && this.seekTime <= e4.endTime), t4 = e3 >= 0;
              let i2 = 0;
              this.mouseDown || this.toggleThumbContainer(t4), t4 && (this.thumbnails.forEach((t5, s2) => {
                this.loadedImages.includes(t5.frames[e3].text) && (i2 = s2);
              }), e3 !== this.showingThumb && (this.showingThumb = e3, this.loadImage(i2)));
            }), e2(this, "loadImage", (e3 = 0) => {
              const t4 = this.showingThumb, i2 = this.thumbnails[e3], { urlPrefix: s2 } = i2, n2 = i2.frames[t4], a2 = i2.frames[t4].text, l2 = s2 + a2;
              if (this.currentImageElement && this.currentImageElement.dataset.filename === a2) this.showImage(this.currentImageElement, n2, e3, t4, a2, false), this.currentImageElement.dataset.index = t4, this.removeOldImages(this.currentImageElement);
              else {
                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                const i3 = new Image();
                i3.src = l2, i3.dataset.index = t4, i3.dataset.filename = a2, this.showingThumbFilename = a2, this.player.debug.log(`Loading image: ${l2}`), i3.onload = () => this.showImage(i3, n2, e3, t4, a2, true), this.loadingImage = i3, this.removeOldImages(i3);
              }
            }), e2(this, "showImage", (e3, t4, i2, s2, n2, a2 = true) => {
              this.player.debug.log(`Showing thumb: ${n2}. num: ${s2}. qual: ${i2}. newimg: ${a2}`), this.setImageSizeAndOffset(e3, t4), a2 && (this.currentImageContainer.appendChild(e3), this.currentImageElement = e3, this.loadedImages.includes(n2) || this.loadedImages.push(n2)), this.preloadNearby(s2, true).then(this.preloadNearby(s2, false)).then(this.getHigherQuality(i2, e3, t4, n2));
            }), e2(this, "removeOldImages", (e3) => {
              Array.from(this.currentImageContainer.children).forEach((t4) => {
                if ("img" !== t4.tagName.toLowerCase()) return;
                const i2 = this.usingSprites ? 500 : 1e3;
                if (t4.dataset.index !== e3.dataset.index && !t4.dataset.deleting) {
                  t4.dataset.deleting = true;
                  const { currentImageContainer: e4 } = this;
                  setTimeout(() => {
                    e4.removeChild(t4), this.player.debug.log(`Removing thumb: ${t4.dataset.filename}`);
                  }, i2);
                }
              });
            }), e2(this, "preloadNearby", (e3, t4 = true) => new Promise((i2) => {
              setTimeout(() => {
                const s2 = this.thumbnails[0].frames[e3].text;
                if (this.showingThumbFilename === s2) {
                  let n2;
                  n2 = t4 ? this.thumbnails[0].frames.slice(e3) : this.thumbnails[0].frames.slice(0, e3).reverse();
                  let a2 = false;
                  n2.forEach((e4) => {
                    const t5 = e4.text;
                    if (t5 !== s2 && !this.loadedImages.includes(t5)) {
                      a2 = true, this.player.debug.log(`Preloading thumb filename: ${t5}`);
                      const { urlPrefix: e5 } = this.thumbnails[0], s3 = e5 + t5, n3 = new Image();
                      n3.src = s3, n3.onload = () => {
                        this.player.debug.log(`Preloaded thumb filename: ${t5}`), this.loadedImages.includes(t5) || this.loadedImages.push(t5), i2();
                      };
                    }
                  }), a2 || i2();
                }
              }, 300);
            })), e2(this, "getHigherQuality", (e3, t4, i2, s2) => {
              if (e3 < this.thumbnails.length - 1) {
                let n2 = t4.naturalHeight;
                this.usingSprites && (n2 = i2.h), n2 < this.thumbContainerHeight && setTimeout(() => {
                  this.showingThumbFilename === s2 && (this.player.debug.log(`Showing higher quality thumb for: ${s2}`), this.loadImage(e3 + 1));
                }, 300);
              }
            }), e2(this, "toggleThumbContainer", (e3 = false, t4 = false) => {
              const i2 = this.player.config.classNames.previewThumbnails.thumbContainerShown;
              this.elements.thumb.container.classList.toggle(i2, e3), !e3 && t4 && (this.showingThumb = null, this.showingThumbFilename = null);
            }), e2(this, "toggleScrubbingContainer", (e3 = false) => {
              const t4 = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
              this.elements.scrubbing.container.classList.toggle(t4, e3), e3 || (this.showingThumb = null, this.showingThumbFilename = null);
            }), e2(this, "determineContainerAutoSizing", () => {
              (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = true);
            }), e2(this, "setThumbContainerSizeAndPos", () => {
              const { imageContainer: e3 } = this.elements.thumb;
              if (this.sizeSpecifiedInCSS) {
                if (e3.clientHeight > 20 && e3.clientWidth < 20) {
                  const t4 = Math.floor(e3.clientHeight * this.thumbAspectRatio);
                  e3.style.width = `${t4}px`;
                } else if (e3.clientHeight < 20 && e3.clientWidth > 20) {
                  const t4 = Math.floor(e3.clientWidth / this.thumbAspectRatio);
                  e3.style.height = `${t4}px`;
                }
              } else {
                const t4 = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                e3.style.height = `${this.thumbContainerHeight}px`, e3.style.width = `${t4}px`;
              }
              this.setThumbContainerPos();
            }), e2(this, "setThumbContainerPos", () => {
              const e3 = this.player.elements.progress.getBoundingClientRect(), t4 = this.player.elements.container.getBoundingClientRect(), { container: i2 } = this.elements.thumb, s2 = t4.left - e3.left + 10, n2 = t4.right - e3.left - i2.clientWidth - 10, a2 = this.mousePosX - e3.left - i2.clientWidth / 2, l2 = Ge(a2, s2, n2);
              i2.style.left = `${l2}px`, i2.style.setProperty("--preview-arrow-offset", a2 - l2 + "px");
            }), e2(this, "setScrubbingContainerSize", () => {
              const { width: e3, height: t4 } = et(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              this.elements.scrubbing.container.style.width = `${e3}px`, this.elements.scrubbing.container.style.height = `${t4}px`;
            }), e2(this, "setImageSizeAndOffset", (e3, t4) => {
              if (!this.usingSprites) return;
              const i2 = this.thumbContainerHeight / t4.h;
              e3.style.height = e3.naturalHeight * i2 + "px", e3.style.width = e3.naturalWidth * i2 + "px", e3.style.left = `-${t4.x * i2}px`, e3.style.top = `-${t4.y * i2}px`;
            }), this.player = t3, this.thumbnails = [], this.loaded = false, this.lastMouseMoveTime = Date.now(), this.mouseDown = false, this.loadedImages = [], this.elements = { thumb: {}, scrubbing: {} }, this.load();
          }
          get enabled() {
            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
          }
          get currentImageContainer() {
            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
          }
          get usingSprites() {
            return Object.keys(this.thumbnails[0].frames[0]).includes("w");
          }
          get thumbAspectRatio() {
            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
          }
          get thumbContainerHeight() {
            if (this.mouseDown) {
              const { height: e3 } = et(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              return e3;
            }
            return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
          }
          get currentImageElement() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
          }
          set currentImageElement(e3) {
            this.mouseDown ? this.currentScrubbingImageElement = e3 : this.currentThumbnailImageElement = e3;
          }
        }
        const it = { insertElements(e3, t3) {
          S.string(t3) ? _(e3, this.media, { src: t3 }) : S.array(t3) && t3.forEach((t4) => {
            _(e3, this.media, t4);
          });
        }, change(e3) {
          N(e3, "sources.length") ? (de.cancelRequests.call(this), this.destroy.call(this, () => {
            this.options.quality = [], O(this.media), this.media = null, S.element(this.elements.container) && this.elements.container.removeAttribute("class");
            const { sources: t3, type: i2 } = e3, [{ provider: s2 = _e.html5, src: n2 }] = t3, a2 = "html5" === s2 ? i2 : "div", l2 = "html5" === s2 ? {} : { src: n2 };
            Object.assign(this, { provider: s2, type: i2, supported: K.check(i2, s2, this.config.playsinline), media: $(a2, l2) }), this.elements.container.appendChild(this.media), S.boolean(e3.autoplay) && (this.config.autoplay = e3.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), S.empty(e3.poster) || (this.poster = e3.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), Fe.addStyleHook.call(this), this.isHTML5 && it.insertElements.call(this, "source", t3), this.config.title = e3.title, Xe.setup.call(this), this.isHTML5 && Object.keys(e3).includes("tracks") && it.insertElements.call(this, "track", e3.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.isHTML5 && this.media.load(), S.empty(e3.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e3.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))), this.fullscreen.update();
          }, true)) : this.debug.warn("Invalid source format");
        } };
        class st {
          constructor(t3, i2) {
            if (e2(this, "play", () => S.function(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => ie(this.media.play())), this.media.play()) : null), e2(this, "pause", () => this.playing && S.function(this.media.pause) ? this.media.pause() : null), e2(this, "togglePlay", (e3) => (S.boolean(e3) ? e3 : !this.playing) ? this.play() : this.pause()), e2(this, "stop", () => {
              this.isHTML5 ? (this.pause(), this.restart()) : S.function(this.media.stop) && this.media.stop();
            }), e2(this, "restart", () => {
              this.currentTime = 0;
            }), e2(this, "rewind", (e3) => {
              this.currentTime -= S.number(e3) ? e3 : this.config.seekTime;
            }), e2(this, "forward", (e3) => {
              this.currentTime += S.number(e3) ? e3 : this.config.seekTime;
            }), e2(this, "increaseVolume", (e3) => {
              const t4 = this.media.muted ? 0 : this.volume;
              this.volume = t4 + (S.number(e3) ? e3 : 0);
            }), e2(this, "decreaseVolume", (e3) => {
              this.increaseVolume(-e3);
            }), e2(this, "airplay", () => {
              K.airplay && this.media.webkitShowPlaybackTargetPicker();
            }), e2(this, "toggleControls", (e3) => {
              if (this.supported.ui && !this.isAudio) {
                const t4 = F(this.elements.container, this.config.classNames.hideControls), i3 = void 0 === e3 ? void 0 : !e3, s3 = R(this.elements.container, this.config.classNames.hideControls, i3);
                if (s3 && S.array(this.config.controls) && this.config.controls.includes("settings") && !S.empty(this.config.settings) && Pe.toggleMenu.call(this, false), s3 !== t4) {
                  const e4 = s3 ? "controlshidden" : "controlsshown";
                  Z.call(this, this.media, e4);
                }
                return !s3;
              }
              return false;
            }), e2(this, "on", (e3, t4) => {
              X.call(this, this.elements.container, e3, t4);
            }), e2(this, "once", (e3, t4) => {
              G.call(this, this.elements.container, e3, t4);
            }), e2(this, "off", (e3, t4) => {
              J(this.elements.container, e3, t4);
            }), e2(this, "destroy", (e3, t4 = false) => {
              if (!this.ready) return;
              const i3 = () => {
                document.body.style.overflow = "", this.embed = null, t4 ? (Object.keys(this.elements).length && (O(this.elements.buttons.play), O(this.elements.captions), O(this.elements.controls), O(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), S.function(e3) && e3()) : (ee.call(this), de.cancelRequests.call(this), q(this.elements.original, this.elements.container), Z.call(this, this.elements.original, "destroyed", true), S.function(e3) && e3.call(this.elements.original), this.ready = false, setTimeout(() => {
                  this.elements = null, this.media = null;
                }, 200));
              };
              this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (Fe.toggleNativeControls.call(this, true), i3()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && S.function(this.embed.destroy) && this.embed.destroy(), i3()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i3), setTimeout(i3, 200));
            }), e2(this, "supports", (e3) => K.mime.call(this, e3)), this.timers = {}, this.ready = false, this.loading = false, this.failed = false, this.touch = K.touch, this.media = t3, S.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || S.nodeList(this.media) || S.array(this.media)) && (this.media = this.media[0]), this.config = x({}, Le, st.defaults, i2 || {}, (() => {
              try {
                return JSON.parse(this.media.getAttribute("data-plyr-config"));
              } catch (e3) {
                return {};
              }
            })()), this.elements = { container: null, fullscreen: null, captions: null, buttons: {}, display: {}, progress: {}, inputs: {}, settings: { popup: null, menu: null, panels: {}, buttons: {} } }, this.captions = { active: null, currentTrack: -1, meta: /* @__PURE__ */ new WeakMap() }, this.fullscreen = { active: false }, this.options = { speed: [], quality: [] }, this.debug = new De(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", K), S.nullOrUndefined(this.media) || !S.element(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
            if (this.media.plyr) return void this.debug.warn("Target already setup");
            if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
            if (!K.check().api) return void this.debug.error("Setup failed: no support");
            const s2 = this.media.cloneNode(true);
            s2.autoplay = false, this.elements.original = s2;
            const n2 = this.media.tagName.toLowerCase();
            let a2 = null, l2 = null;
            switch (n2) {
              case "div":
                if (a2 = this.media.querySelector("iframe"), S.element(a2)) {
                  if (l2 = Me(a2.getAttribute("src")), this.provider = function(e3) {
                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e3) ? _e.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e3) ? _e.vimeo : null;
                  }(l2.toString()), this.elements.container = this.media, this.media = a2, this.elements.container.className = "", l2.search.length) {
                    const e3 = ["1", "true"];
                    e3.includes(l2.searchParams.get("autoplay")) && (this.config.autoplay = true), e3.includes(l2.searchParams.get("loop")) && (this.config.loop.active = true), this.isYouTube ? (this.config.playsinline = e3.includes(l2.searchParams.get("playsinline")), this.config.youtube.hl = l2.searchParams.get("hl")) : this.config.playsinline = true;
                  }
                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                if (S.empty(this.provider) || !Object.values(_e).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                this.type = je;
                break;
              case "video":
              case "audio":
                this.type = n2, this.provider = _e.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = true), this.media.hasAttribute("autoplay") && (this.config.autoplay = true), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = true), this.media.hasAttribute("muted") && (this.config.muted = true), this.media.hasAttribute("loop") && (this.config.loop.active = true);
                break;
              default:
                return void this.debug.error("Setup failed: unsupported type");
            }
            this.supported = K.check(this.type, this.provider), this.supported.api ? (this.eventListeners = [], this.listeners = new Ve(this), this.storage = new we(this), this.media.plyr = this, S.element(this.elements.container) || (this.elements.container = $("div"), L(this.media, this.elements.container)), Fe.migrateStyles.call(this), Fe.addStyleHook.call(this), Xe.setup.call(this), this.config.debug && X.call(this, this.elements.container, this.config.events.join(" "), (e3) => {
              this.debug.log(`event: ${e3.type}`);
            }), this.fullscreen = new He(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Je(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", () => ie(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))) : this.debug.error("Setup failed: no support");
          }
          get isHTML5() {
            return this.provider === _e.html5;
          }
          get isEmbed() {
            return this.isYouTube || this.isVimeo;
          }
          get isYouTube() {
            return this.provider === _e.youtube;
          }
          get isVimeo() {
            return this.provider === _e.vimeo;
          }
          get isVideo() {
            return this.type === je;
          }
          get isAudio() {
            return this.type === Oe;
          }
          get playing() {
            return Boolean(this.ready && !this.paused && !this.ended);
          }
          get paused() {
            return Boolean(this.media.paused);
          }
          get stopped() {
            return Boolean(this.paused && 0 === this.currentTime);
          }
          get ended() {
            return Boolean(this.media.ended);
          }
          set currentTime(e3) {
            if (!this.duration) return;
            const t3 = S.number(e3) && e3 > 0;
            this.media.currentTime = t3 ? Math.min(e3, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`);
          }
          get currentTime() {
            return Number(this.media.currentTime);
          }
          get buffered() {
            const { buffered: e3 } = this.media;
            return S.number(e3) ? e3 : e3 && e3.length && this.duration > 0 ? e3.end(0) / this.duration : 0;
          }
          get seeking() {
            return Boolean(this.media.seeking);
          }
          get duration() {
            const e3 = parseFloat(this.config.duration), t3 = (this.media || {}).duration, i2 = S.number(t3) && t3 !== 1 / 0 ? t3 : 0;
            return e3 || i2;
          }
          set volume(e3) {
            let t3 = e3;
            S.string(t3) && (t3 = Number(t3)), S.number(t3) || (t3 = this.storage.get("volume")), S.number(t3) || ({ volume: t3 } = this.config), t3 > 1 && (t3 = 1), t3 < 0 && (t3 = 0), this.config.volume = t3, this.media.volume = t3, !S.empty(e3) && this.muted && t3 > 0 && (this.muted = false);
          }
          get volume() {
            return Number(this.media.volume);
          }
          set muted(e3) {
            let t3 = e3;
            S.boolean(t3) || (t3 = this.storage.get("muted")), S.boolean(t3) || (t3 = this.config.muted), this.config.muted = t3, this.media.muted = t3;
          }
          get muted() {
            return Boolean(this.media.muted);
          }
          get hasAudio() {
            return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)));
          }
          set speed(e3) {
            let t3 = null;
            S.number(e3) && (t3 = e3), S.number(t3) || (t3 = this.storage.get("speed")), S.number(t3) || (t3 = this.config.speed.selected);
            const { minimumSpeed: i2, maximumSpeed: s2 } = this;
            t3 = Ge(t3, i2, s2), this.config.speed.selected = t3, setTimeout(() => {
              this.media && (this.media.playbackRate = t3);
            }, 0);
          }
          get speed() {
            return Number(this.media.playbackRate);
          }
          get minimumSpeed() {
            return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? 0.5 : 0.0625;
          }
          get maximumSpeed() {
            return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16;
          }
          set quality(e3) {
            const t3 = this.config.quality, i2 = this.options.quality;
            if (!i2.length) return;
            let s2 = [!S.empty(e3) && Number(e3), this.storage.get("quality"), t3.selected, t3.default].find(S.number), n2 = true;
            if (!i2.includes(s2)) {
              const e4 = ne(i2, s2);
              this.debug.warn(`Unsupported quality option: ${s2}, using ${e4} instead`), s2 = e4, n2 = false;
            }
            t3.selected = s2, this.media.quality = s2, n2 && this.storage.set({ quality: s2 });
          }
          get quality() {
            return this.media.quality;
          }
          set loop(e3) {
            const t3 = S.boolean(e3) ? e3 : this.config.loop.active;
            this.config.loop.active = t3, this.media.loop = t3;
          }
          get loop() {
            return Boolean(this.media.loop);
          }
          set source(e3) {
            it.change.call(this, e3);
          }
          get source() {
            return this.media.currentSrc;
          }
          get download() {
            const { download: e3 } = this.config.urls;
            return S.url(e3) ? e3 : this.source;
          }
          set download(e3) {
            S.url(e3) && (this.config.urls.download = e3, Pe.setDownloadUrl.call(this));
          }
          set poster(e3) {
            this.isVideo ? Fe.setPoster.call(this, e3, false).catch(() => {
            }) : this.debug.warn("Poster can only be set for video");
          }
          get poster() {
            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
          }
          get ratio() {
            if (!this.isVideo) return null;
            const e3 = oe(ce.call(this));
            return S.array(e3) ? e3.join(":") : e3;
          }
          set ratio(e3) {
            this.isVideo ? S.string(e3) && re(e3) ? (this.config.ratio = oe(e3), ue.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e3})`) : this.debug.warn("Aspect ratio can only be set for video");
          }
          set autoplay(e3) {
            this.config.autoplay = S.boolean(e3) ? e3 : this.config.autoplay;
          }
          get autoplay() {
            return Boolean(this.config.autoplay);
          }
          toggleCaptions(e3) {
            xe.toggle.call(this, e3, false);
          }
          set currentTrack(e3) {
            xe.set.call(this, e3, false), xe.setup.call(this);
          }
          get currentTrack() {
            const { toggled: e3, currentTrack: t3 } = this.captions;
            return e3 ? t3 : -1;
          }
          set language(e3) {
            xe.setLanguage.call(this, e3, false);
          }
          get language() {
            return (xe.getCurrentTrack.call(this) || {}).language;
          }
          set pip(e3) {
            if (!K.pip) return;
            const t3 = S.boolean(e3) ? e3 : !this.pip;
            S.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t3 ? Ie : $e), S.function(this.media.requestPictureInPicture) && (!this.pip && t3 ? this.media.requestPictureInPicture() : this.pip && !t3 && document.exitPictureInPicture());
          }
          get pip() {
            return K.pip ? S.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ie : null;
          }
          setPreviewThumbnails(e3) {
            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e3), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this));
          }
          static supported(e3, t3) {
            return K.check(e3, t3);
          }
          static loadSprite(e3, t3) {
            return ke(e3, t3);
          }
          static setup(e3, t3 = {}) {
            let i2 = null;
            return S.string(e3) ? i2 = Array.from(document.querySelectorAll(e3)) : S.nodeList(e3) ? i2 = Array.from(e3) : S.array(e3) && (i2 = e3.filter(S.element)), S.empty(i2) ? null : i2.map((e4) => new st(e4, t3));
          }
        }
        var nt;
        return st.defaults = (nt = Le, JSON.parse(JSON.stringify(nt))), st;
      });
    }
  });

  // src/index.js
  init_live_reload();

  // node_modules/split-type/dist/index.js
  init_live_reload();
  (() => {
    function append(...nodes) {
      const length = nodes.length;
      for (let i = 0; i < length; i++) {
        const node = nodes[i];
        if (node.nodeType === 1 || node.nodeType === 11) this.appendChild(node);
        else this.appendChild(document.createTextNode(String(node)));
      }
    }
    function replaceChildren(...nodes) {
      while (this.lastChild) {
        this.removeChild(this.lastChild);
      }
      if (nodes.length) this.append(...nodes);
    }
    function replaceWith(...nodes) {
      const parent = this.parentNode;
      let i = nodes.length;
      if (!parent) return;
      if (!i) parent.removeChild(this);
      while (i--) {
        let node = nodes[i];
        if (typeof node !== "object") {
          node = this.ownerDocument.createTextNode(node);
        } else if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
        if (!i) {
          parent.replaceChild(node, this);
        } else {
          parent.insertBefore(this.previousSibling, node);
        }
      }
    }
    if (typeof Element !== "undefined") {
      if (!Element.prototype.append) {
        Element.prototype.append = append;
        DocumentFragment.prototype.append = append;
      }
      if (!Element.prototype.replaceChildren) {
        Element.prototype.replaceChildren = replaceChildren;
        DocumentFragment.prototype.replaceChildren = replaceChildren;
      }
      if (!Element.prototype.replaceWith) {
        Element.prototype.replaceWith = replaceWith;
        DocumentFragment.prototype.replaceWith = replaceWith;
      }
    }
  })();
  function extend(target, object) {
    return Object.getOwnPropertyNames(Object(target)).reduce((extended, key) => {
      const currentValue = Object.getOwnPropertyDescriptor(Object(target), key);
      const newValue = Object.getOwnPropertyDescriptor(Object(object), key);
      return Object.defineProperty(extended, key, newValue || currentValue);
    }, {});
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isArray(value) {
    return Array.isArray(value);
  }
  function parseSettings(settings = {}) {
    const object = extend(settings);
    let types;
    if (object.types !== void 0) {
      types = object.types;
    } else if (object.split !== void 0) {
      types = object.split;
    }
    if (types !== void 0) {
      object.types = (isString(types) || isArray(types) ? String(types) : "").split(",").map((type) => String(type).trim()).filter((type) => /((line)|(word)|(char))/i.test(type));
    }
    if (object.absolute || object.position) {
      object.absolute = object.absolute || /absolute/.test(settings.position);
    }
    return object;
  }
  function parseTypes(value) {
    const types = isString(value) || isArray(value) ? String(value) : "";
    return {
      none: !types,
      lines: /line/i.test(types),
      words: /word/i.test(types),
      chars: /char/i.test(types)
    };
  }
  function isObject(value) {
    return value !== null && typeof value === "object";
  }
  function isNode(input) {
    return isObject(input) && /^(1|3|11)$/.test(input.nodeType);
  }
  function isLength(value) {
    return typeof value === "number" && value > -1 && value % 1 === 0;
  }
  function isArrayLike(value) {
    return isObject(value) && isLength(value.length);
  }
  function toArray(value) {
    if (isArray(value)) return value;
    if (value == null) return [];
    return isArrayLike(value) ? Array.prototype.slice.call(value) : [value];
  }
  function getTargetElements(target) {
    let elements = target;
    if (isString(target)) {
      if (/^(#[a-z]\w+)$/.test(target.trim())) {
        elements = document.getElementById(target.trim().slice(1));
      } else {
        elements = document.querySelectorAll(target);
      }
    }
    return toArray(elements).reduce((result, element) => {
      return [...result, ...toArray(element).filter(isNode)];
    }, []);
  }
  var {
    entries,
    keys,
    values
  } = Object;
  var expando = `_splittype`;
  var cache = {};
  var uid = 0;
  function set(owner, key, value) {
    if (!isObject(owner)) {
      console.warn("[data.set] owner is not an object");
      return null;
    }
    const id = owner[expando] || (owner[expando] = ++uid);
    const data = cache[id] || (cache[id] = {});
    if (value === void 0) {
      if (!!key && Object.getPrototypeOf(key) === Object.prototype) {
        cache[id] = {
          ...data,
          ...key
        };
      }
    } else if (key !== void 0) {
      data[key] = value;
    }
    return value;
  }
  function get(owner, key) {
    const id = isObject(owner) ? owner[expando] : null;
    const data = id && cache[id] || {};
    if (key === void 0) {
      return data;
    }
    return data[key];
  }
  function remove(element) {
    const id = element && element[expando];
    if (id) {
      delete element[id];
      delete cache[id];
    }
  }
  function cleanup() {
    entries(cache).forEach(([id, {
      isRoot,
      isSplit
    }]) => {
      if (!isRoot || !isSplit) {
        cache[id] = null;
        delete cache[id];
      }
    });
  }
  function toWords(value, separator = " ") {
    const string = value ? String(value) : "";
    return string.trim().replace(/\s+/g, " ").split(separator);
  }
  var rsAstralRange = "\\ud800-\\udfff";
  var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
  var rsComboSymbolsRange = "\\u20d0-\\u20f0";
  var rsVarRange = "\\ufe0e\\ufe0f";
  var rsAstral = `[${rsAstralRange}]`;
  var rsCombo = `[${rsComboMarksRange}${rsComboSymbolsRange}]`;
  var rsFitz = "\\ud83c[\\udffb-\\udfff]";
  var rsModifier = `(?:${rsCombo}|${rsFitz})`;
  var rsNonAstral = `[^${rsAstralRange}]`;
  var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
  var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
  var rsZWJ = "\\u200d";
  var reOptMod = `${rsModifier}?`;
  var rsOptVar = `[${rsVarRange}]?`;
  var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
  var rsSeq = rsOptVar + reOptMod + rsOptJoin;
  var rsSymbol = `(?:${[`${rsNonAstral}${rsCombo}?`, rsCombo, rsRegional, rsSurrPair, rsAstral].join("|")}
)`;
  var reUnicode = RegExp(`${rsFitz}(?=${rsFitz})|${rsSymbol}${rsSeq}`, "g");
  var unicodeRange = [rsZWJ, rsAstralRange, rsComboMarksRange, rsComboSymbolsRange, rsVarRange];
  var reHasUnicode = RegExp(`[${unicodeRange.join("")}]`);
  function asciiToArray(string) {
    return string.split("");
  }
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  function toString(value) {
    return value == null ? "" : String(value);
  }
  function toChars(string, separator = "") {
    string = toString(string);
    if (string && isString(string)) {
      if (!separator && hasUnicode(string)) {
        return stringToArray(string);
      }
    }
    return string.split(separator);
  }
  function createElement(name, attributes) {
    const element = document.createElement(name);
    if (!attributes) {
      return element;
    }
    Object.keys(attributes).forEach((attribute) => {
      const rawValue = attributes[attribute];
      const value = isString(rawValue) ? rawValue.trim() : rawValue;
      if (value === null || value === "") return;
      if (attribute === "children") {
        element.append(...toArray(value));
      } else {
        element.setAttribute(attribute, value);
      }
    });
    return element;
  }
  var defaults = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: false,
    tagName: "div"
  };
  function splitWordsAndChars(textNode, settings) {
    settings = extend(defaults, settings);
    const types = parseTypes(settings.types);
    const TAG_NAME = settings.tagName;
    const VALUE = textNode.nodeValue;
    const splitText = document.createDocumentFragment();
    let words = [];
    let chars = [];
    if (/^\s/.test(VALUE)) {
      splitText.append(" ");
    }
    words = toWords(VALUE).reduce((result, WORD, idx, arr) => {
      let wordElement;
      let characterElementsForCurrentWord;
      if (types.chars) {
        characterElementsForCurrentWord = toChars(WORD).map((CHAR) => {
          const characterElement = createElement(TAG_NAME, {
            class: `${settings.splitClass} ${settings.charClass}`,
            style: "display: inline-block;",
            children: CHAR
          });
          set(characterElement, "isChar", true);
          chars = [...chars, characterElement];
          return characterElement;
        });
      }
      if (types.words || types.lines) {
        wordElement = createElement(TAG_NAME, {
          class: `${settings.wordClass} ${settings.splitClass}`,
          style: `display: inline-block; ${types.words && settings.absolute ? `position: relative;` : ""}`,
          children: types.chars ? characterElementsForCurrentWord : WORD
        });
        set(wordElement, {
          isWord: true,
          isWordStart: true,
          isWordEnd: true
        });
        splitText.appendChild(wordElement);
      } else {
        characterElementsForCurrentWord.forEach((characterElement) => {
          splitText.appendChild(characterElement);
        });
      }
      if (idx < arr.length - 1) {
        splitText.append(" ");
      }
      return types.words ? result.concat(wordElement) : result;
    }, []);
    if (/\s$/.test(VALUE)) {
      splitText.append(" ");
    }
    textNode.replaceWith(splitText);
    return {
      words,
      chars
    };
  }
  function split(node, settings) {
    const type = node.nodeType;
    const wordsAndChars = {
      words: [],
      chars: []
    };
    if (!/(1|3|11)/.test(type)) {
      return wordsAndChars;
    }
    if (type === 3 && /\S/.test(node.nodeValue)) {
      return splitWordsAndChars(node, settings);
    }
    const childNodes = toArray(node.childNodes);
    if (childNodes.length) {
      set(node, "isSplit", true);
      if (!get(node).isRoot) {
        node.style.display = "inline-block";
        node.style.position = "relative";
        const nextSibling = node.nextSibling;
        const prevSibling = node.previousSibling;
        const text = node.textContent || "";
        const textAfter = nextSibling ? nextSibling.textContent : " ";
        const textBefore = prevSibling ? prevSibling.textContent : " ";
        set(node, {
          isWordEnd: /\s$/.test(text) || /^\s/.test(textAfter),
          isWordStart: /^\s/.test(text) || /\s$/.test(textBefore)
        });
      }
    }
    return childNodes.reduce((result, child) => {
      const {
        words,
        chars
      } = split(child, settings);
      return {
        words: [...result.words, ...words],
        chars: [...result.chars, ...chars]
      };
    }, wordsAndChars);
  }
  function getPosition(node, isWord, settings, scrollPos) {
    if (!settings.absolute) {
      return {
        top: isWord ? node.offsetTop : null
      };
    }
    const parent = node.offsetParent;
    const [scrollX, scrollY] = scrollPos;
    let parentX = 0;
    let parentY = 0;
    if (parent && parent !== document.body) {
      const parentRect = parent.getBoundingClientRect();
      parentX = parentRect.x + scrollX;
      parentY = parentRect.y + scrollY;
    }
    const {
      width,
      height,
      x,
      y
    } = node.getBoundingClientRect();
    const top = y + scrollY - parentY;
    const left = x + scrollX - parentX;
    return {
      width,
      height,
      top,
      left
    };
  }
  function unSplitWords(element) {
    if (!get(element).isWord) {
      toArray(element.children).forEach((child) => unSplitWords(child));
    } else {
      remove(element);
      element.replaceWith(...element.childNodes);
    }
  }
  var createFragment = () => document.createDocumentFragment();
  function repositionAfterSplit(element, settings, scrollPos) {
    const types = parseTypes(settings.types);
    const TAG_NAME = settings.tagName;
    const nodes = element.getElementsByTagName("*");
    const wordsInEachLine = [];
    let wordsInCurrentLine = [];
    let lineOffsetY = null;
    let elementHeight;
    let elementWidth;
    let contentBox;
    let lines = [];
    const parent = element.parentElement;
    const nextSibling = element.nextElementSibling;
    const splitText = createFragment();
    const cs = window.getComputedStyle(element);
    const align = cs.textAlign;
    const fontSize = parseFloat(cs.fontSize);
    const lineThreshold = fontSize * 0.2;
    if (settings.absolute) {
      contentBox = {
        left: element.offsetLeft,
        top: element.offsetTop,
        width: element.offsetWidth
      };
      elementWidth = element.offsetWidth;
      elementHeight = element.offsetHeight;
      set(element, {
        cssWidth: element.style.width,
        cssHeight: element.style.height
      });
    }
    toArray(nodes).forEach((node) => {
      const isWordLike = node.parentElement === element;
      const {
        width,
        height,
        top,
        left
      } = getPosition(node, isWordLike, settings, scrollPos);
      if (/^br$/i.test(node.nodeName)) return;
      if (types.lines && isWordLike) {
        if (lineOffsetY === null || top - lineOffsetY >= lineThreshold) {
          lineOffsetY = top;
          wordsInEachLine.push(wordsInCurrentLine = []);
        }
        wordsInCurrentLine.push(node);
      }
      if (settings.absolute) {
        set(node, {
          top,
          left,
          width,
          height
        });
      }
    });
    if (parent) {
      parent.removeChild(element);
    }
    if (types.lines) {
      lines = wordsInEachLine.map((wordsInThisLine) => {
        const lineElement = createElement(TAG_NAME, {
          class: `${settings.splitClass} ${settings.lineClass}`,
          style: `display: block; text-align: ${align}; width: 100%;`
        });
        set(lineElement, "isLine", true);
        const lineDimensions = {
          height: 0,
          top: 1e4
        };
        splitText.appendChild(lineElement);
        wordsInThisLine.forEach((wordOrElement, idx, arr) => {
          const {
            isWordEnd,
            top,
            height
          } = get(wordOrElement);
          const next = arr[idx + 1];
          lineDimensions.height = Math.max(lineDimensions.height, height);
          lineDimensions.top = Math.min(lineDimensions.top, top);
          lineElement.appendChild(wordOrElement);
          if (isWordEnd && get(next).isWordStart) {
            lineElement.append(" ");
          }
        });
        if (settings.absolute) {
          set(lineElement, {
            height: lineDimensions.height,
            top: lineDimensions.top
          });
        }
        return lineElement;
      });
      if (!types.words) {
        unSplitWords(splitText);
      }
      element.replaceChildren(splitText);
    }
    if (settings.absolute) {
      element.style.width = `${element.style.width || elementWidth}px`;
      element.style.height = `${elementHeight}px`;
      toArray(nodes).forEach((node) => {
        const {
          isLine,
          top,
          left,
          width,
          height
        } = get(node);
        const parentData = get(node.parentElement);
        const isChildOfLineNode = !isLine && parentData.isLine;
        node.style.top = `${isChildOfLineNode ? top - parentData.top : top}px`;
        node.style.left = isLine ? `${contentBox.left}px` : `${left - (isChildOfLineNode ? contentBox.left : 0)}px`;
        node.style.height = `${height}px`;
        node.style.width = isLine ? `${contentBox.width}px` : `${width}px`;
        node.style.position = "absolute";
      });
    }
    if (parent) {
      if (nextSibling) parent.insertBefore(element, nextSibling);
      else parent.appendChild(element);
    }
    return lines;
  }
  var _defaults = extend(defaults, {});
  var SplitType = class _SplitType {
    /**
     * The internal data store
     */
    static get data() {
      return cache;
    }
    /**
     * The default settings for all splitType instances
     * @static
     */
    static get defaults() {
      return _defaults;
    }
    /**
     * Sets the default settings for all SplitType instances.
     *
     * Setting `SplitType.defaults` to an object will merge that object with the
     * existing defaults.
     *
     * @param {Object} settings an object containing the settings to override
     * @deprecated
     * @static
     * @example
     * SplitType.defaults = { "position": "absolute" }
     */
    static set defaults(options) {
      _defaults = extend(_defaults, parseSettings(options));
    }
    /**
     * Sets the default settings for all SplitType instances.
     * The provided object will be merged with the existing defaults objects.
     *
     * @param {Object} settings an object containing the settings to override
     * @returns {Object} the new default settings
     * @public
     * @static
     * @example
     * SplitType.setDefaults({ "position": "absolute" })
     */
    static setDefaults(options) {
      _defaults = extend(_defaults, parseSettings(options));
      return defaults;
    }
    /**
     * Revert target elements to their original html content
     * Has no effect on that
     *
     * @param {any} elements The target elements to revert. One of:
     *  - {string} A css selector
     *  - {HTMLElement} A single element
     * -  {NodeList} A NodeList or collection
     *  - {HTMLElement[]} An array of Elements
     * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
     * @static
     */
    static revert(elements) {
      getTargetElements(elements).forEach((element) => {
        const {
          isSplit,
          html,
          cssWidth,
          cssHeight
        } = get(element);
        if (isSplit) {
          element.innerHTML = html;
          element.style.width = cssWidth || "";
          element.style.height = cssHeight || "";
          remove(element);
        }
      });
    }
    /**
     * Creates a new SplitType instance
     * This static method provides a way to create a `SplitType` instance without
     * using the `new` keyword.
     *
     * @param {any} target The target elements to split. One of:
     *  - {string} A css selector
     *  - {HTMLElement} A single element
     * -  {NodeList} A NodeList or collection
     *  - {HTMLElement[]} An array of Elements
     * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
     * @param {Object} [options] Settings for the SplitType instance
     * @return {SplitType} the SplitType instance
     * @static
     */
    static create(target, options) {
      return new _SplitType(target, options);
    }
    /**
     * Creates a new `SplitType` instance
     *
     * @param {any} elements The target elements to split. One of:
     *  - {string} A css selector
     *  - {HTMLElement} A single element
     * -  {NodeList} A NodeList or collection
     *  - {HTMLElement[]} An array of Elements
     * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
     * @param {Object} [options] Settings for the SplitType instance
     */
    constructor(elements, options) {
      this.isSplit = false;
      this.settings = extend(_defaults, parseSettings(options));
      this.elements = getTargetElements(elements);
      this.split();
    }
    /**
     * Splits the text in all target elements. This method is called
     * automatically when a new SplitType instance is created. It can also be
     * called manually to re-split text with new options.
     * @param {Object} options
     * @public
     */
    split(options) {
      this.revert();
      this.elements.forEach((element) => {
        set(element, "html", element.innerHTML);
      });
      this.lines = [];
      this.words = [];
      this.chars = [];
      const scrollPos = [window.pageXOffset, window.pageYOffset];
      if (options !== void 0) {
        this.settings = extend(this.settings, parseSettings(options));
      }
      const types = parseTypes(this.settings.types);
      if (types.none) {
        return;
      }
      this.elements.forEach((element) => {
        set(element, "isRoot", true);
        const {
          words,
          chars
        } = split(element, this.settings);
        this.words = [...this.words, ...words];
        this.chars = [...this.chars, ...chars];
      });
      this.elements.forEach((element) => {
        if (types.lines || this.settings.absolute) {
          const lines = repositionAfterSplit(element, this.settings, scrollPos);
          this.lines = [...this.lines, ...lines];
        }
      });
      this.isSplit = true;
      window.scrollTo(scrollPos[0], scrollPos[1]);
      cleanup();
    }
    /**
     * Reverts target element(s) back to their original html content
     * Deletes all stored data associated with the target elements
     * Resets the properties on the splitType instance
     *
     * @public
     */
    revert() {
      if (this.isSplit) {
        this.lines = null;
        this.words = null;
        this.chars = null;
        this.isSplit = false;
      }
      _SplitType.revert(this.elements);
    }
  };

  // src/interactions/lenis.js
  init_live_reload();

  // node_modules/@studio-freight/lenis/dist/lenis.mjs
  init_live_reload();
  function t(t2, e2, i) {
    return Math.max(t2, Math.min(e2, i));
  }
  var Animate = class {
    advance(e2) {
      if (!this.isRunning) return;
      let i = false;
      if (this.lerp) this.value = (s = this.value, o = this.to, n = 60 * this.lerp, r = e2, function(t2, e3, i2) {
        return (1 - i2) * t2 + i2 * e3;
      }(s, o, 1 - Math.exp(-n * r))), Math.round(this.value) === this.to && (this.value = this.to, i = true);
      else {
        this.currentTime += e2;
        const s2 = t(0, this.currentTime / this.duration, 1);
        i = s2 >= 1;
        const o2 = i ? 1 : this.easing(s2);
        this.value = this.from + (this.to - this.from) * o2;
      }
      var s, o, n, r;
      this.onUpdate?.(this.value, i), i && this.stop();
    }
    stop() {
      this.isRunning = false;
    }
    fromTo(t2, e2, { lerp: i = 0.1, duration: s = 1, easing: o = (t3) => t3, onStart: n, onUpdate: r }) {
      this.from = this.value = t2, this.to = e2, this.lerp = i, this.duration = s, this.easing = o, this.currentTime = 0, this.isRunning = true, n?.(), this.onUpdate = r;
    }
  };
  var Dimensions = class {
    constructor({ wrapper: t2, content: e2, autoResize: i = true, debounce: s = 250 } = {}) {
      this.wrapper = t2, this.content = e2, i && (this.debouncedResize = /* @__PURE__ */ function(t3, e3) {
        let i2;
        return function() {
          let s2 = arguments, o = this;
          clearTimeout(i2), i2 = setTimeout(function() {
            t3.apply(o, s2);
          }, e3);
        };
      }(this.resize, s), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, false) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    destroy() {
      this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), window.removeEventListener("resize", this.debouncedResize, false);
    }
    resize = () => {
      this.onWrapperResize(), this.onContentResize();
    };
    onWrapperResize = () => {
      this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
    };
    onContentResize = () => {
      this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
    };
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  };
  var Emitter = class {
    constructor() {
      this.events = {};
    }
    emit(t2, ...e2) {
      let i = this.events[t2] || [];
      for (let t3 = 0, s = i.length; t3 < s; t3++) i[t3](...e2);
    }
    on(t2, e2) {
      return this.events[t2]?.push(e2) || (this.events[t2] = [e2]), () => {
        this.events[t2] = this.events[t2]?.filter((t3) => e2 !== t3);
      };
    }
    off(t2, e2) {
      this.events[t2] = this.events[t2]?.filter((t3) => e2 !== t3);
    }
    destroy() {
      this.events = {};
    }
  };
  var e = 100 / 6;
  var VirtualScroll = class {
    constructor(t2, { wheelMultiplier: e2 = 1, touchMultiplier: i = 1 }) {
      this.element = t2, this.wheelMultiplier = e2, this.touchMultiplier = i, this.touchStart = { x: null, y: null }, this.emitter = new Emitter(), window.addEventListener("resize", this.onWindowResize, false), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, { passive: false }), this.element.addEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.addEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.addEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    on(t2, e2) {
      return this.emitter.on(t2, e2);
    }
    destroy() {
      this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, false), this.element.removeEventListener("wheel", this.onWheel, { passive: false }), this.element.removeEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.removeEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.removeEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    onTouchStart = (t2) => {
      const { clientX: e2, clientY: i } = t2.targetTouches ? t2.targetTouches[0] : t2;
      this.touchStart.x = e2, this.touchStart.y = i, this.lastDelta = { x: 0, y: 0 }, this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t2 });
    };
    onTouchMove = (t2) => {
      const { clientX: e2, clientY: i } = t2.targetTouches ? t2.targetTouches[0] : t2, s = -(e2 - this.touchStart.x) * this.touchMultiplier, o = -(i - this.touchStart.y) * this.touchMultiplier;
      this.touchStart.x = e2, this.touchStart.y = i, this.lastDelta = { x: s, y: o }, this.emitter.emit("scroll", { deltaX: s, deltaY: o, event: t2 });
    };
    onTouchEnd = (t2) => {
      this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t2 });
    };
    onWheel = (t2) => {
      let { deltaX: i, deltaY: s, deltaMode: o } = t2;
      i *= 1 === o ? e : 2 === o ? this.windowWidth : 1, s *= 1 === o ? e : 2 === o ? this.windowHeight : 1, i *= this.wheelMultiplier, s *= this.wheelMultiplier, this.emitter.emit("scroll", { deltaX: i, deltaY: s, event: t2 });
    };
    onWindowResize = () => {
      this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight;
    };
  };
  var Lenis = class {
    constructor({ wrapper: t2 = window, content: e2 = document.documentElement, wheelEventsTarget: i = t2, eventsTarget: s = i, smoothWheel: o = true, syncTouch: n = false, syncTouchLerp: r = 0.075, touchInertiaMultiplier: l = 35, duration: h, easing: a = (t3) => Math.min(1, 1.001 - Math.pow(2, -10 * t3)), lerp: c = !h && 0.1, infinite: d = false, orientation: p = "vertical", gestureOrientation: u = "vertical", touchMultiplier: m = 1, wheelMultiplier: v = 1, autoResize: g = true, __experimental__naiveDimensions: S = false } = {}) {
      this.__isSmooth = false, this.__isScrolling = false, this.__isStopped = false, this.__isLocked = false, this.onVirtualScroll = ({ deltaX: t3, deltaY: e3, event: i2 }) => {
        if (i2.ctrlKey) return;
        const s2 = i2.type.includes("touch"), o2 = i2.type.includes("wheel");
        if (this.options.syncTouch && s2 && "touchstart" === i2.type && !this.isStopped && !this.isLocked) return void this.reset();
        const n2 = 0 === t3 && 0 === e3, r2 = "vertical" === this.options.gestureOrientation && 0 === e3 || "horizontal" === this.options.gestureOrientation && 0 === t3;
        if (n2 || r2) return;
        let l2 = i2.composedPath();
        if (l2 = l2.slice(0, l2.indexOf(this.rootElement)), l2.find((t4) => {
          var e4, i3, n3, r3, l3;
          return (null === (e4 = t4.hasAttribute) || void 0 === e4 ? void 0 : e4.call(t4, "data-lenis-prevent")) || s2 && (null === (i3 = t4.hasAttribute) || void 0 === i3 ? void 0 : i3.call(t4, "data-lenis-prevent-touch")) || o2 && (null === (n3 = t4.hasAttribute) || void 0 === n3 ? void 0 : n3.call(t4, "data-lenis-prevent-wheel")) || (null === (r3 = t4.classList) || void 0 === r3 ? void 0 : r3.contains("lenis")) && !(null === (l3 = t4.classList) || void 0 === l3 ? void 0 : l3.contains("lenis-stopped"));
        })) return;
        if (this.isStopped || this.isLocked) return void i2.preventDefault();
        if (this.isSmooth = this.options.syncTouch && s2 || this.options.smoothWheel && o2, !this.isSmooth) return this.isScrolling = false, void this.animate.stop();
        i2.preventDefault();
        let h2 = e3;
        "both" === this.options.gestureOrientation ? h2 = Math.abs(e3) > Math.abs(t3) ? e3 : t3 : "horizontal" === this.options.gestureOrientation && (h2 = t3);
        const a2 = s2 && this.options.syncTouch, c2 = s2 && "touchend" === i2.type && Math.abs(h2) > 5;
        c2 && (h2 = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + h2, Object.assign({ programmatic: false }, a2 ? { lerp: c2 ? this.options.syncTouchLerp : 1 } : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing }));
      }, this.onNativeScroll = () => {
        if (!this.__preventNextScrollEvent && !this.isScrolling) {
          const t3 = this.animatedScroll;
          this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - t3), this.emit();
        }
      }, window.lenisVersion = "1.0.42", t2 !== document.documentElement && t2 !== document.body || (t2 = window), this.options = { wrapper: t2, content: e2, wheelEventsTarget: i, eventsTarget: s, smoothWheel: o, syncTouch: n, syncTouchLerp: r, touchInertiaMultiplier: l, duration: h, easing: a, lerp: c, infinite: d, gestureOrientation: u, orientation: p, touchMultiplier: m, wheelMultiplier: v, autoResize: g, __experimental__naiveDimensions: S }, this.animate = new Animate(), this.emitter = new Emitter(), this.dimensions = new Dimensions({ wrapper: t2, content: e2, autoResize: g }), this.toggleClassName("lenis", true), this.velocity = 0, this.isLocked = false, this.isStopped = false, this.isSmooth = n || o, this.isScrolling = false, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false), this.virtualScroll = new VirtualScroll(s, { touchMultiplier: m, wheelMultiplier: v }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, false), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", false), this.toggleClassName("lenis-smooth", false), this.toggleClassName("lenis-scrolling", false), this.toggleClassName("lenis-stopped", false), this.toggleClassName("lenis-locked", false);
    }
    on(t2, e2) {
      return this.emitter.on(t2, e2);
    }
    off(t2, e2) {
      return this.emitter.off(t2, e2);
    }
    setScroll(t2) {
      this.isHorizontal ? this.rootElement.scrollLeft = t2 : this.rootElement.scrollTop = t2;
    }
    resize() {
      this.dimensions.resize();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      this.isLocked = false, this.isScrolling = false, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop();
    }
    start() {
      this.isStopped && (this.isStopped = false, this.reset());
    }
    stop() {
      this.isStopped || (this.isStopped = true, this.animate.stop(), this.reset());
    }
    raf(t2) {
      const e2 = t2 - (this.time || t2);
      this.time = t2, this.animate.advance(1e-3 * e2);
    }
    scrollTo(e2, { offset: i = 0, immediate: s = false, lock: o = false, duration: n = this.options.duration, easing: r = this.options.easing, lerp: l = !n && this.options.lerp, onComplete: h, force: a = false, programmatic: c = true } = {}) {
      if (!this.isStopped && !this.isLocked || a) {
        if (["top", "left", "start"].includes(e2)) e2 = 0;
        else if (["bottom", "right", "end"].includes(e2)) e2 = this.limit;
        else {
          let t2;
          if ("string" == typeof e2 ? t2 = document.querySelector(e2) : (null == e2 ? void 0 : e2.nodeType) && (t2 = e2), t2) {
            if (this.options.wrapper !== window) {
              const t3 = this.options.wrapper.getBoundingClientRect();
              i -= this.isHorizontal ? t3.left : t3.top;
            }
            const s2 = t2.getBoundingClientRect();
            e2 = (this.isHorizontal ? s2.left : s2.top) + this.animatedScroll;
          }
        }
        if ("number" == typeof e2) {
          if (e2 += i, e2 = Math.round(e2), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : e2 = t(0, e2, this.limit), s) return this.animatedScroll = this.targetScroll = e2, this.setScroll(this.scroll), this.reset(), void (null == h || h(this));
          if (!c) {
            if (e2 === this.targetScroll) return;
            this.targetScroll = e2;
          }
          this.animate.fromTo(this.animatedScroll, e2, { duration: n, easing: r, lerp: l, onStart: () => {
            o && (this.isLocked = true), this.isScrolling = true;
          }, onUpdate: (t2, e3) => {
            this.isScrolling = true, this.velocity = t2 - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t2, this.setScroll(this.scroll), c && (this.targetScroll = t2), e3 || this.emit(), e3 && (this.reset(), this.emit(), null == h || h(this), this.__preventNextScrollEvent = true, requestAnimationFrame(() => {
              delete this.__preventNextScrollEvent;
            }));
          } });
        }
      }
    }
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
      return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return "horizontal" === this.options.orientation;
    }
    get actualScroll() {
      return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite ? (t2 = this.animatedScroll, e2 = this.limit, (t2 % e2 + e2) % e2) : this.animatedScroll;
      var t2, e2;
    }
    get progress() {
      return 0 === this.limit ? 1 : this.scroll / this.limit;
    }
    get isSmooth() {
      return this.__isSmooth;
    }
    set isSmooth(t2) {
      this.__isSmooth !== t2 && (this.__isSmooth = t2, this.toggleClassName("lenis-smooth", t2));
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(t2) {
      this.__isScrolling !== t2 && (this.__isScrolling = t2, this.toggleClassName("lenis-scrolling", t2));
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(t2) {
      this.__isStopped !== t2 && (this.__isStopped = t2, this.toggleClassName("lenis-stopped", t2));
    }
    get isLocked() {
      return this.__isLocked;
    }
    set isLocked(t2) {
      this.__isLocked !== t2 && (this.__isLocked = t2, this.toggleClassName("lenis-locked", t2));
    }
    get className() {
      let t2 = "lenis";
      return this.isStopped && (t2 += " lenis-stopped"), this.isLocked && (t2 += " lenis-locked"), this.isScrolling && (t2 += " lenis-scrolling"), this.isSmooth && (t2 += " lenis-smooth"), t2;
    }
    toggleClassName(t2, e2) {
      this.rootElement.classList.toggle(t2, e2), this.emitter.emit("className change", this);
    }
  };

  // src/interactions/lenis.js
  var initLenis = function() {
    const lenis = new Lenis({
      duration: 1,
      easing: (t2) => t2 === 1 ? 1 : 1 - Math.pow(2, -10 * t2),
      // https://easings.net
      touchMultiplier: 1.5
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", () => {
      if (!ScrollTrigger) return;
      ScrollTrigger.update();
    });
    gsap.ticker.add((time) => {
      lenis.raf(time * 1e3);
    });
    gsap.ticker.lagSmoothing(0);
    function anchorLinks() {
      const anchorLinks2 = document.querySelectorAll("[scroll-to]");
      if (anchorLinks2 == null) {
        return;
      }
      anchorLinks2.forEach((item) => {
        const targetID = item.getAttribute("scroll-to");
        const target = document.getElementById(targetID);
        if (!target) return;
        item.addEventListener("click", (event) => {
          lenis.scrollTo(target, {
            duration: 1.85,
            easing: (t2) => t2 === 1 ? 1 : 1 - Math.pow(2, -10 * t2)
          });
        });
      });
    }
    anchorLinks();
    function stopScroll() {
      const stopScrollLinks = document.querySelectorAll('[scroll="stop"]');
      if (stopScrollLinks == null) {
        return;
      }
      stopScrollLinks.forEach((item) => {
        item.addEventListener("click", (event) => {
          lenis.stop();
        });
      });
    }
    stopScroll();
    function startScroll() {
      const startScrollLinks = document.querySelectorAll('[scroll="start"]');
      if (startScrollLinks == null) {
        return;
      }
      startScrollLinks.forEach((item) => {
        item.addEventListener("click", (event) => {
          lenis.start();
        });
      });
    }
    startScroll();
    function toggleScroll() {
      const toggleScrollLinks = document.querySelectorAll('[scroll="toggle"]');
      if (toggleScrollLinks == null) {
        return;
      }
      toggleScrollLinks.forEach((item) => {
        let stopScroll2 = false;
        item.addEventListener("click", (event) => {
          stopScroll2 = !stopScroll2;
          if (stopScroll2) lenis.stop();
          else lenis.start();
        });
      });
    }
    toggleScroll();
  };

  // src/interactions/load.js
  init_live_reload();

  // src/utilities.js
  init_live_reload();
  var attr = function(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean") return true;
    if (attrVal === "false" && defaultValType === "boolean") return false;
    if (isNaN(attrVal) && defaultValType === "string") return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
    return defaultVal;
  };
  var runSplit = function(text, types = "lines, words") {
    if (!text) return;
    typeSplit = new SplitType(text, {
      types
    });
    return typeSplit;
  };
  var checkBreakpoints = function(item, animationID, gsapContext) {
    if (!item || !animationID || !gsapContext) {
      console.error(`GSAP checkBreakpoints Error in ${animationID}`);
      return;
    }
    let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
    if (isMobile === void 0 || isTablet === void 0 || isDesktop === void 0) {
      console.error(`GSAP Match Media Conditions Not Defined`);
      return;
    }
    const RUN_DESKTOP = `data-ix-${animationID}-desktop`;
    const RUN_TABLET = `data-ix-${animationID}-tablet`;
    const RUN_MOBILE = `data-ix-${animationID}-mobile`;
    const RUN_ALL = `data-ix-${animationID}-run`;
    runAll = attr(true, item.getAttribute(RUN_ALL));
    runMobile = attr(true, item.getAttribute(RUN_MOBILE));
    runTablet = attr(true, item.getAttribute(RUN_TABLET));
    runDesktop = attr(true, item.getAttribute(RUN_DESKTOP));
    if (runAll === false) return false;
    if (runMobile === false && isMobile) return false;
    if (runTablet === false && isTablet) return false;
    if (runDesktop === false && isDesktop) return false;
    return true;
  };

  // src/interactions/load.js
  var load = function(gsapContext) {
    const ANIMATION_ID = "load";
    const ATTRIBUTE = "data-ix-load";
    const HEADING = "heading";
    const ITEM = "item";
    const IMAGE = "image";
    const STAGGER = "stagger";
    const POSITION = "data-ix-load-position";
    const DEFAULT_STAGGER = "<0.2";
    const items = gsap.utils.toArray(`[${ATTRIBUTE}]`);
    if (items.length === 0) return;
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power1.out",
        duration: 0.8
      }
    });
    const loadHeading = function(item) {
      const splitText = runSplit(item);
      if (!splitText) return;
      const position = attr("<", item.getAttribute(POSITION));
      tl.set(item, { opacity: 1 });
      tl.fromTo(
        splitText.words,
        { opacity: 0, y: "50%", rotateX: 45 },
        { opacity: 1, y: "0%", rotateX: 0, stagger: { each: 0.1, from: "left" } },
        position
      );
    };
    const loadImage = function(item) {
      const position = attr(DEFAULT_STAGGER, item.getAttribute(POSITION));
      tl.fromTo(item, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1 }, position);
    };
    const loadItem = function(item) {
      const position = attr(DEFAULT_STAGGER, item.getAttribute(POSITION));
      tl.fromTo(item, { opacity: 0, y: "2rem" }, { opacity: 1, y: "0rem" }, position);
    };
    const loadStagger = function(item) {
      if (!item) return;
      const children = gsap.utils.toArray(item.children);
      if (children.length === 0) return;
      children.forEach((child, index) => {
        if (index === 0) {
          item.style.opacity = 1;
        }
        loadItem(child);
      });
    };
    items.forEach((item) => {
      if (!item) return;
      let runOnBreakpoint = checkBreakpoints(item, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const loadType = item.getAttribute(ATTRIBUTE);
      if (loadType === HEADING) {
        loadHeading(item);
      }
      if (loadType === IMAGE) {
        loadImage(item);
      }
      if (loadType === ITEM) {
        loadItem(item);
      }
      if (loadType === STAGGER) {
        loadStagger(item);
      }
    });
    tl.play(0);
    return tl;
  };

  // src/interactions/scrollin.js
  init_live_reload();
  var scrollIn = function(gsapContext) {
    const ANIMATION_ID = "scrollin";
    const ELEMENT = "data-ix-scrollin";
    const HEADING = "heading";
    const ITEM = "item";
    const CONTAINER = "container";
    const STAGGER = "stagger";
    const RICH_TEXT = "rich-text";
    const IMAGE_WRAP = "image-wrap";
    const IMAGE = "image";
    const LINE = "line";
    const SCROLL_TOGGLE_ACTIONS = "data-ix-scrollin-toggle-actions";
    const SCROLL_SCRUB = "data-ix-scrollin-scrub";
    const SCROLL_START = "data-ix-scrollin-start";
    const SCROLL_END = "data-ix-scrollin-end";
    const CLIP_DIRECTION = "data-ix-scrollin-direction";
    const scrollInTL = function(item) {
      const settings = {
        scrub: false,
        toggleActions: "play none none none",
        start: "top 90%",
        end: "top 75%"
      };
      settings.toggleActions = attr(settings.toggleActions, item.getAttribute(SCROLL_TOGGLE_ACTIONS));
      settings.scrub = attr(settings.scrub, item.getAttribute(SCROLL_SCRUB));
      settings.start = attr(settings.start, item.getAttribute(SCROLL_START));
      settings.end = attr(settings.end, item.getAttribute(SCROLL_END));
      const tl = gsap.timeline({
        defaults: {
          duration: 0.6,
          ease: "power1.out"
        },
        scrollTrigger: {
          trigger: item,
          start: settings.start,
          end: settings.end,
          toggleActions: settings.toggleActions,
          scrub: settings.scrub
        }
      });
      return tl;
    };
    const defaultTween = function(item, tl, options = {}) {
      const varsFrom = {
        opacity: 0,
        y: "2rem"
      };
      const varsTo = {
        opacity: 1,
        y: "0rem"
      };
      if (options.stagger === true) {
        varsTo.stagger = { each: 0.1, from: "start" };
      }
      const tween = tl.fromTo(item, varsFrom, varsTo);
      return tween;
    };
    const scrollInHeading = function(item) {
      const splitText = runSplit(item);
      if (!splitText) return;
      const tl = scrollInTL(item);
      const tween = defaultTween(splitText.words, tl, { stagger: true, skew: "large" });
      tl.eventCallback("onComplete", () => {
        splitText.revert();
      });
    };
    const scrollInItem = function(item) {
      if (!item) return;
      if (item.classList.contains("w-richtext")) {
        const children = gsap.utils.toArray(item.children);
        if (children.length === 0) return;
        children.forEach((child) => {
          const tl = scrollInTL(child);
          const tween = defaultTween(child, tl);
        });
      } else {
        const tl = scrollInTL(item);
        const tween = defaultTween(item, tl);
      }
    };
    const getCLipStart = function(item) {
      let defaultDirection = "right";
      let clipStart;
      const direction = attr(defaultDirection, item.getAttribute(CLIP_DIRECTION));
      const clipDirections = {
        left: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        right: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        top: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        bottom: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
      };
      if (direction === "left") {
        clipStart = clipDirections.left;
      }
      if (direction === "right") {
        clipStart = clipDirections.right;
      }
      if (direction === "top") {
        clipStart = clipDirections.top;
      }
      if (direction === "bottom") {
        clipStart = clipDirections.bottom;
      }
      return clipStart;
    };
    const scrollInImage = function(item) {
      if (!item) return;
      const clipStart = getCLipStart(item);
      const clipEnd = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      const tl = scrollInTL(item);
      tl.fromTo(
        item,
        {
          clipPath: clipStart
        },
        {
          clipPath: clipEnd,
          duration: 1
        }
      );
    };
    const scrollInLine = function(item) {
      if (!item) return;
      const clipStart = getCLipStart(item);
      const clipEnd = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      const tl = scrollInTL(item);
      tl.fromTo(
        item,
        {
          clipPath: clipStart
        },
        {
          clipPath: clipEnd
        }
      );
    };
    const scrollInContainer = function(item) {
      if (!item) return;
      const children = gsap.utils.toArray(item.children);
      if (children.length === 0) return;
      children.forEach((child) => {
        const tl = scrollInTL(child);
        const tween = defaultTween(child, tl);
      });
    };
    const scrollInStagger = function(item) {
      if (!item) return;
      const children = gsap.utils.toArray(item.children);
      if (children.length === 0) return;
      const tl = scrollInTL(item);
      const tween = defaultTween(children, tl, { stagger: true });
    };
    const scrollInRichText = function(item) {
      if (!item) return;
      const children = gsap.utils.toArray(item.children);
      if (children.length === 0) return;
      children.forEach((child) => {
        const childTag = child.tagName;
        if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(childTag)) {
          scrollInHeading(child);
        }
        if (childTag === "FIGURE") {
          scrollInImage(child);
        } else {
          scrollInItem(child);
        }
      });
    };
    const items = gsap.utils.toArray(`[${ELEMENT}]`);
    items.forEach((item) => {
      if (!item) return;
      let runOnBreakpoint = checkBreakpoints(item, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const scrollInType = item.getAttribute(ELEMENT);
      if (scrollInType === HEADING) {
        scrollInHeading(item);
      }
      if (scrollInType === ITEM) {
        scrollInItem(item);
      }
      if (scrollInType === IMAGE) {
        scrollInImage(item);
      }
      if (scrollInType === LINE) {
        scrollInLine(item);
      }
      if (scrollInType === CONTAINER) {
        scrollInContainer(item);
      }
      if (scrollInType === STAGGER) {
        scrollInStagger(item);
      }
      if (scrollInType === RICH_TEXT) {
        scrollInRichText(item);
      }
    });
  };

  // src/interactions/scrolling.js
  init_live_reload();
  var scrolling = function(gsapContext) {
    const ANIMATION_ID = "scrolling";
    const WRAP = `[data-ix-scrolling="wrap"]`;
    const TRIGGER = `[data-ix-scrolling="trigger"]`;
    const LAYER = '[data-ix-scrolling="layer"]';
    const START = "data-ix-scrolling-start";
    const END = "data-ix-scrolling-end";
    const TABLET_START = "data-ix-scrolling-start-tablet";
    const TABLET_END = "data-ix-scrolling-end-tablet";
    const MOBILE_START = "data-ix-scrolling-start-mobile";
    const MOBILE_END = "data-ix-scrolling-end-mobile";
    const SCRUB = "data-ix-scrolling-scrub";
    const POSITION = "data-ix-scrolling-position";
    const X_START = "data-ix-scrolling-x-start";
    const X_END = "data-ix-scrolling-x-end";
    const Y_START = "data-ix-scrolling-y-start";
    const Y_END = "data-ix-scrolling-y-end";
    const SCALE_START = "data-ix-scrolling-scale-start";
    const SCALE_END = "data-ix-scrolling-scale-end";
    const WIDTH_START = "data-ix-scrolling-width-start";
    const WIDTH_END = "data-ix-scrolling-width-end";
    const HEIGHT_START = "data-ix-scrolling-height-start";
    const HEIGHT_END = "data-ix-scrolling-height-end";
    const ROTATE_X_START = "data-ix-scrolling-rotate-x-start";
    const ROTATE_X_END = "data-ix-scrolling-rotate-x-end";
    const ROTATE_Y_START = "data-ix-scrolling-rotate-y-start";
    const ROTATE_Y_END = "data-ix-scrolling-rotate-y-end";
    const ROTATE_Z_START = "data-ix-scrolling-rotate-z-start";
    const ROTATE_Z_END = "data-ix-scrolling-rotate-z-end";
    const OPACITY_START = "data-ix-scrolling-opacity-start";
    const OPACITY_END = "data-ix-scrolling-opacity-end";
    const CLIP_START = "data-ix-scrolling-clip-start";
    const CLIP_END = "data-ix-scrolling-clip-end";
    const CLIP_TYPE = "data-ix-scrolling-clip-type";
    const scrollingItems = gsap.utils.toArray(WRAP);
    scrollingItems.forEach((scrollingItem) => {
      const layers = scrollingItem.querySelectorAll(LAYER);
      if (!scrollingItem || layers.length === 0) return;
      let trigger = scrollingItem.querySelector(TRIGGER);
      if (!trigger) {
        trigger = scrollingItem;
      }
      let runOnBreakpoint = checkBreakpoints(scrollingItem, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
      const tlSettings = {
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top"
      };
      tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(START));
      tlSettings.end = attr(tlSettings.end, scrollingItem.getAttribute(END));
      tlSettings.scrub = attr(tlSettings.scrub, scrollingItem.getAttribute(SCRUB));
      if (isTablet && scrollingItem.getAttribute(TABLET_START)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(TABLET_START));
      }
      if (isTablet && scrollingItem.getAttribute(TABLET_END)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(TABLET_END));
      }
      if (isMobile && scrollingItem.getAttribute(MOBILE_START)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(MOBILE_START));
      }
      if (isMobile && scrollingItem.getAttribute(MOBILE_END)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(MOBILE_END));
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: tlSettings.start,
          end: tlSettings.end,
          scrub: tlSettings.scrub,
          markers: false
        },
        defaults: {
          duration: 1,
          ease: "none"
        }
      });
      layers.forEach((layer) => {
        if (!layer) return;
        const varsFrom = {};
        const varsTo = {};
        const processAttribute = function(attributeName, defaultValue) {
          const hasAttribute = layer.hasAttribute(attributeName);
          const attributeValue = attr(defaultValue, layer.getAttribute(attributeName));
          if (hasAttribute) {
            return attributeValue;
          } else {
            return;
          }
        };
        varsFrom.x = processAttribute(X_START, "0%");
        varsTo.x = processAttribute(X_END, "0%");
        varsFrom.y = processAttribute(Y_START, "0%");
        varsTo.y = processAttribute(Y_END, "0%");
        varsFrom.scale = processAttribute(SCALE_START, 1);
        varsTo.scale = processAttribute(SCALE_END, 1);
        varsFrom.width = processAttribute(WIDTH_START, "0%");
        varsTo.width = processAttribute(WIDTH_END, "0%");
        varsFrom.height = processAttribute(HEIGHT_START, "0%");
        varsTo.height = processAttribute(HEIGHT_END, "0%");
        varsFrom.rotateX = processAttribute(ROTATE_X_START, 0);
        varsTo.rotateX = processAttribute(ROTATE_X_END, 0);
        varsFrom.rotateY = processAttribute(ROTATE_Y_START, 0);
        varsTo.rotateY = processAttribute(ROTATE_Y_END, 0);
        varsFrom.rotateZ = processAttribute(ROTATE_Z_START, 0);
        varsTo.rotateZ = processAttribute(ROTATE_Z_END, 0);
        varsFrom.opacity = processAttribute(OPACITY_START, 0);
        varsTo.opacity = processAttribute(OPACITY_END, 0);
        varsFrom.clipPath = processAttribute(CLIP_START, "string");
        varsTo.clipPath = processAttribute(CLIP_END, "string");
        const position = attr("<", layer.getAttribute(POSITION));
        let fromTween = tl.fromTo(layer, varsFrom, varsTo, position);
      });
    });
  };

  // src/index.js
  var import_plyr = __toESM(require_plyr_min(), 1);
  document.addEventListener("DOMContentLoaded", function() {
    if (gsap.ScrollTrigger !== void 0) {
      gsap.registerPlugin(ScrollTrigger);
    }
    initLenis();
    const customVideoPlayer = function() {
      const COMPONENT = ".plyr_component";
      const VIDEO_CLASS = ".plyr_video";
      const COVER_CLASS = ".plyr_cover";
      const HIDE_COVER_CLASS = "hide-cover";
      const PAUSE_TRIGGER_CLASS = ".plyr_pause-trigger";
      const CONTAIN_CLASS = "contain-video";
      const settings = {
        autoplay: false,
        loop: false,
        mute: false,
        hideControls: true
      };
      const PLAYING_CLASS = ".plyr--playing";
      const components = [...document.querySelectorAll(COMPONENT)];
      if (components.length === 0) return;
      components.forEach((component, index) => {
        const video = component.querySelector(VIDEO_CLASS);
        const cover = component.querySelector(COVER_CLASS);
        const pauseTrigger = component.querySelector(PAUSE_TRIGGER_CLASS);
        const loopSetting = attr(settings.loop, component.getAttribute("data-player-loop"));
        let muteSetting = attr(settings.mute, component.getAttribute("data-player-mute"));
        const showCoverOnPause = attr(
          false,
          component.getAttribute("data-player-show-cover-on-pause")
        );
        let player = new import_plyr.default(video, {
          controls: ["play", "progress", "current-time", "mute", "fullscreen"],
          hideControls: settings.hideControls,
          loop: { active: loopSetting },
          resetOnEnd: true
        });
        if (cover) {
          cover.addEventListener("click", () => {
            player.play();
          });
        }
        player.on("ended", (event) => {
          component.classList.remove(HIDE_COVER_CLASS);
        });
        if (showCoverOnPause) {
          player.on("pause", (event) => {
            component.classList.remove(HIDE_COVER_CLASS);
          });
        }
        player.on("play", (event) => {
          components.forEach((item, index2) => {
            item.classList.remove(HIDE_COVER_CLASS);
          });
          component.classList.add(HIDE_COVER_CLASS);
          let prevPlayingComponent = document.querySelector(PLAYING_CLASS).closest(COMPONENT);
          if (prevPlayingComponent && prevPlayingComponent !== component) {
            prevPlayingComponent.find(PAUSE_TRIGGER_CLASS)[0].click();
          }
        });
        pauseTrigger.addEventListener("click", () => {
          player.pause();
        });
        player.on("ended", (event) => {
          if (player.fullscreen.active) {
            player.fullscreen.exit();
          }
        });
        player.on("enterfullscreen", (event) => {
          component.classList.add(CONTAIN_CLASS);
        });
        player.on("exitfullscreen", (event) => {
          component.classList.remove(CONTAIN_CLASS);
        });
      });
    };
    const pricingPanels = function() {
      const PANEL = "data-pricing-panel";
      const BUTTON = "data-pricing-target";
      const panels = [...document.querySelectorAll(`[${PANEL}]`)];
      const buttons = [...document.querySelectorAll(`[${BUTTON}]`)];
      const ACTIVE_CLASS = "is-active";
      if (panels.length === 0) return;
      const activatePanel = function(nextPanel) {
        if (!nextPanel) return;
        let activePanel = panels.find((item) => item.classList.contains(ACTIVE_CLASS));
        if (activePanel === void 0) {
          activePanel = panels[0];
        }
        activePanel.classList.remove(ACTIVE_CLASS);
        nextPanel.classList.add(ACTIVE_CLASS);
        let tl = gsap.timeline({
          duration: 0.4,
          onComplete: () => {
          }
        });
        gsap.fromTo(nextPanel, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.6 });
        if (nextPanel !== activePanel) {
          gsap.set(activePanel, { opacity: 0 }, "<.6");
        }
      };
      activatePanel(panels[0]);
      buttons.forEach((button) => {
        const target = button.getAttribute(BUTTON);
        const targetPanel = document.querySelector(`[${PANEL}="${target}"]`);
        button.addEventListener("click", function(e2) {
          activatePanel(targetPanel);
        });
      });
    };
    commercialsScroll = function() {
      const triggerElement = document.querySelector(".commercials_component");
      if (!triggerElement) return;
      let tl = gsap.timeline({
        scrollTrigger: {
          markers: false,
          trigger: triggerElement,
          start: "top 80%",
          end: "bottom 10%",
          scrub: 0.25
        },
        defaults: {
          duration: 1,
          ease: "none"
        }
      });
      tl.fromTo(
        ".commercials_layout",
        {
          rotationZ: 6
        },
        {
          rotationZ: 2
        },
        "<"
      );
      tl.fromTo(
        ".commercials_row.is-top",
        {
          xPercent: 20
        },
        {
          xPercent: -30
        },
        "<"
      );
      tl.fromTo(
        ".commercials_row.is-bottom",
        {
          xPercent: -30
        },
        {
          xPercent: 30
        },
        "<"
      );
    };
    const headerGradients = function() {
      const SELECTOR = "#gradient-canvas";
      const gradientEl = document.querySelector(SELECTOR);
      if (!gradientEl) return;
      var gradient = new Gradient();
      gradient.initGradient(SELECTOR);
    };
    let mm = gsap.matchMedia();
    mm.add(
      {
        //This is the conditions object
        isMobile: "(max-width: 767px)",
        isTablet: "(min-width: 768px)  and (max-width: 991px)",
        isDesktop: "(min-width: 992px)",
        reduceMotion: "(prefers-reduced-motion: reduce)"
      },
      (gsapContext) => {
        let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
        headerGradients();
        customVideoPlayer();
        load(gsapContext);
        scrollIn(gsapContext);
        scrolling(gsapContext);
        pricingPanels();
        if (!reduceMotion) {
          commercialsScroll();
        }
      }
    );
  });
})();
