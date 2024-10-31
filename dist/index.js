(() => {
  // bin/live-reload.js
  new EventSource(`http://localhost:3000/esbuild`).addEventListener(
    "change",
    () => location.reload()
  );

  // node_modules/split-type/dist/index.js
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

  // node_modules/@studio-freight/lenis/dist/lenis.mjs
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

  // src/utilities.js
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
  document.addEventListener("DOMContentLoaded", function() {
    if (gsap.ScrollTrigger !== void 0) {
      gsap.registerPlugin(ScrollTrigger);
    }
    initLenis();
    pricingPanels = function() {
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
