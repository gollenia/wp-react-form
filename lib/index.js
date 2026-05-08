"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => FormAccordion,
  AccordionSection: () => FormAccordionSection,
  Button: () => Button,
  Checkbox: () => Checkbox_default,
  Combobox: () => Combobox_default,
  Country: () => Country_default,
  Fieldset: () => Fieldset,
  Flex: () => Flex,
  FlexItem: () => FlexItem,
  Form: () => Form_default,
  FormAccordion: () => FormAccordion,
  FormAccordionSection: () => FormAccordionSection,
  FormField: () => InputField_default,
  FormFields: () => Fieldset,
  Hidden: () => Hidden_default,
  Input: () => Input_default,
  InputField: () => InputField_default,
  Radio: () => Radio_default,
  RadioCards: () => RadioCards_default,
  Range: () => Range_default,
  Select: () => Select_default,
  Stepper: () => Stepper,
  Submit: () => Submit_default,
  TextArea: () => TextArea_default,
  default: () => index_default,
  getCountryOptions: () => getCountryOptions,
  getDefaultFormValues: () => getDefaultFormValues,
  isFieldVisible: () => isFieldVisible,
  normalizeFieldValue: () => normalizeFieldValue,
  sanitizeHtml: () => sanitizeHtml,
  sanitizeInlineHtml: () => sanitizeInlineHtml
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Button({
  children,
  className = "",
  variant = "primary",
  fullWidth = false,
  type = "button",
  ...props
}) {
  const classes = [
    "ctx2-button",
    `ctx2-button--${variant}`,
    fullWidth ? "ctx2-button--full-width" : "",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type, className: classes, ...props, children });
}

// src/components/Fields/Checkbox/Checkbox.tsx
var import_element = require("@wordpress/element");

// node_modules/dompurify/dist/purify.es.mjs
var {
  entries,
  setPrototypeOf,
  isFrozen,
  getPrototypeOf,
  getOwnPropertyDescriptor
} = Object;
var {
  freeze,
  seal,
  create
} = Object;
var {
  apply,
  construct
} = typeof Reflect !== "undefined" && Reflect;
if (!freeze) {
  freeze = function freeze2(x) {
    return x;
  };
}
if (!seal) {
  seal = function seal2(x) {
    return x;
  };
}
if (!apply) {
  apply = function apply2(func, thisArg) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return func.apply(thisArg, args);
  };
}
if (!construct) {
  construct = function construct2(Func) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return new Func(...args);
  };
}
var arrayForEach = unapply(Array.prototype.forEach);
var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);
var arraySplice = unapply(Array.prototype.splice);
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringToString = unapply(String.prototype.toString);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    if (thisArg instanceof RegExp) {
      thisArg.lastIndex = 0;
    }
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return apply(func, thisArg, args);
  };
}
function unconstruct(Func) {
  return function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return construct(Func, args);
  };
}
function addToSet(set, array) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set, null);
  }
  let l = array.length;
  while (l--) {
    let element = array[l];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) {
          array[l] = lcElement;
        }
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
function cleanArray(array) {
  for (let index = 0; index < array.length; index++) {
    const isPropertyExist = objectHasOwnProperty(array, index);
    if (!isPropertyExist) {
      array[index] = null;
    }
  }
  return array;
}
function clone(object) {
  const newObject = create(null);
  for (const [property, value] of entries(object)) {
    const isPropertyExist = objectHasOwnProperty(object, property);
    if (isPropertyExist) {
      if (Array.isArray(value)) {
        newObject[property] = cleanArray(value);
      } else if (value && typeof value === "object" && value.constructor === Object) {
        newObject[property] = clone(value);
      } else {
        newObject[property] = value;
      }
    }
  }
  return newObject;
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
var html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var text = freeze(["#text"]);
var html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
var svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
var TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
var IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
var DOCTYPE_NAME = seal(/^html$/i);
var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR,
  ATTR_WHITESPACE,
  CUSTOM_ELEMENT,
  DATA_ATTR,
  DOCTYPE_NAME,
  ERB_EXPR,
  IS_ALLOWED_URI,
  IS_SCRIPT_OR_DATA,
  MUSTACHE_EXPR,
  TMPLIT_EXPR
});
var NODE_TYPE = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
};
var getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
    return null;
  }
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
    suffix = purifyHostElement.getAttribute(ATTR_NAME);
  }
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
var _createHooksMap = function _createHooksMap2() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root) => createDOMPurify(root);
  DOMPurify.version = "3.4.0";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let {
    document
  } = window2;
  const originalDocument = document;
  const currentScript = originalDocument.currentScript;
  const {
    DocumentFragment,
    HTMLTemplateElement,
    Node,
    Element,
    NodeFilter,
    NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
    HTMLFormElement,
    DOMParser,
    trustedTypes
  } = window2;
  const ElementPrototype = Element.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove = lookupGetter(ElementPrototype, "remove");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  if (typeof HTMLTemplateElement === "function") {
    const template = document.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document = template.content.ownerDocument;
    }
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  const {
    implementation,
    createNodeIterator,
    createDocumentFragment,
    getElementsByTagName
  } = document;
  const {
    importNode
  } = originalDocument;
  let hooks = _createHooksMap();
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: MUSTACHE_EXPR2,
    ERB_EXPR: ERB_EXPR2,
    TMPLIT_EXPR: TMPLIT_EXPR2,
    DATA_ATTR: DATA_ATTR2,
    ARIA_ATTR: ARIA_ATTR2,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
    ATTR_WHITESPACE: ATTR_WHITESPACE2,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT2
  } = EXPRESSIONS;
  let {
    IS_ALLOWED_URI: IS_ALLOWED_URI$1
  } = EXPRESSIONS;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
    tagCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    }
  }));
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
  let HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc = null;
  let CONFIG = null;
  const formElement = document.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || typeof cfg !== "object") {
      cfg = {};
    }
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
    ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
    URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
    FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
    MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
    HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
    CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || create(null);
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = create(null);
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    EXTRA_ELEMENT_HANDLING.tagCheck = null;
    EXTRA_ELEMENT_HANDLING.attributeCheck = null;
    if (cfg.ADD_TAGS) {
      if (typeof cfg.ADD_TAGS === "function") {
        EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
      } else {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
    }
    if (cfg.ADD_ATTR) {
      if (typeof cfg.ADD_ATTR === "function") {
        EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
      } else {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    if (cfg.ADD_FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      }
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      }
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      emptyHTML = trustedTypesPolicy.createHTML("");
    } else {
      if (trustedTypesPolicy === void 0) {
        trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      }
      if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
        emptyHTML = trustedTypesPolicy.createHTML("");
      }
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE,
        tagName: "template"
      };
    }
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "svg";
      }
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }
      return Boolean(ALL_SVG_TAGS[tagName]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "math";
      }
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
      }
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
      return true;
    }
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });
    try {
      getParentNode(node).removeChild(node);
    } catch (_) {
      remove(node);
    }
  };
  const _removeAttribute = function _removeAttribute2(name, element) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: element.getAttributeNode(name),
        from: element
      });
    } catch (_) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: element
      });
    }
    element.removeAttribute(name);
    if (name === "is") {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(element);
        } catch (_) {
        }
      } else {
        try {
          element.setAttribute(name, "");
        } catch (_) {
        }
      }
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_) {
      }
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    }
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createNodeIterator = function _createNodeIterator2(root) {
    return createNodeIterator.call(
      root.ownerDocument || root,
      root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
      null
    );
  };
  const _isClobbered = function _isClobbered2(element) {
    return element instanceof HTMLFormElement && (typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function");
  };
  const _isNode = function _isNode2(value) {
    return typeof Node === "function" && value instanceof Node;
  };
  function _executeHooks(hooks2, currentNode, data) {
    arrayForEach(hooks2, (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  }
  const _sanitizeElements = function _sanitizeElements2(currentNode) {
    let content = null;
    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(currentNode.nodeName);
    _executeHooks(hooks.uponSanitizeElement, currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_XML && currentNode.namespaceURI === HTML_NAMESPACE && tagName === "style" && _isNode(currentNode.firstElementChild)) {
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
      _forceRemove(currentNode);
      return true;
    }
    if (FORBID_TAGS[tagName] || !(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && !ALLOWED_TAGS[tagName]) {
      if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
          return false;
        }
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
          return false;
        }
      }
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        const parentNode = getParentNode(currentNode) || currentNode.parentNode;
        const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
        if (childNodes && parentNode) {
          const childCount = childNodes.length;
          for (let i = childCount - 1; i >= 0; --i) {
            const childClone = cloneNode(childNodes[i], true);
            childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
            parentNode.insertBefore(childClone, getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      content = currentNode.textContent;
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        content = stringReplace(content, expr, " ");
      });
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
    return false;
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (FORBID_ATTR[lcName]) {
      return false;
    }
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document || value in formElement)) {
      return false;
    }
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName)) ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName)) ;
    else if (EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag)) ;
    else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName, lcTag)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
      ) ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
    else if (value) {
      return false;
    } else ;
    return true;
  };
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
    return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT2);
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
    const {
      attributes
    } = currentNode;
    if (!attributes || _isClobbered(currentNode)) {
      return;
    }
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR,
      forceKeepAttr: void 0
    };
    let l = attributes.length;
    while (l--) {
      const attr = attributes[l];
      const {
        name,
        namespaceURI,
        value: attrValue
      } = attr;
      const lcName = transformCaseFunc(name);
      const initValue = attrValue;
      let value = name === "value" ? initValue : stringTrim(initValue);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
        _removeAttribute(name, currentNode);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (lcName === "attributename" && stringMatch(value, "href")) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      if (!hookEvent.keepAttr) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
          value = stringReplace(value, expr, " ");
        });
      }
      const lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
        if (namespaceURI) ;
        else {
          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
            case "TrustedHTML": {
              value = trustedTypesPolicy.createHTML(value);
              break;
            }
            case "TrustedScriptURL": {
              value = trustedTypesPolicy.createScriptURL(value);
              break;
            }
          }
        }
      }
      if (value !== initValue) {
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            currentNode.setAttribute(name, value);
          }
          if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
          } else {
            arrayPop(DOMPurify.removed);
          }
        } catch (_) {
          _removeAttribute(name, currentNode);
        }
      }
    }
    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
  };
  const _sanitizeShadowDOM2 = function _sanitizeShadowDOM(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
      _sanitizeElements(shadowNode);
      _sanitizeAttributes(shadowNode);
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
    }
    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      if (typeof dirty.toString === "function") {
        dirty = dirty.toString();
        if (typeof dirty !== "string") {
          throw typeErrorCreate("dirty is not a string, aborting");
        }
      } else {
        throw typeErrorCreate("toString is not a function");
      }
    }
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    DOMPurify.removed = [];
    if (typeof dirty === "string") {
      IN_PLACE = false;
    }
    if (IN_PLACE) {
      if (dirty.nodeName) {
        const tagName = transformCaseFunc(dirty.nodeName);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
    } else if (dirty instanceof Node) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf("<") === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
    while (currentNode = nodeIterator.nextNode()) {
      _sanitizeElements(currentNode);
      _sanitizeAttributes(currentNode);
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM2(currentNode.content);
      }
    }
    if (IN_PLACE) {
      return dirty;
    }
    if (RETURN_DOM) {
      if (SAFE_FOR_TEMPLATES) {
        body.normalize();
        let html2 = body.innerHTML;
        arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
          html2 = stringReplace(html2, expr, " ");
        });
        body.innerHTML = html2;
      }
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        serializedHTML = stringReplace(serializedHTML, expr, " ");
      });
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint, hookFunction) {
    if (hookFunction !== void 0) {
      const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
      return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
    }
    return arrayPop(hooks[entryPoint]);
  };
  DOMPurify.removeHooks = function(entryPoint) {
    hooks[entryPoint] = [];
  };
  DOMPurify.removeAllHooks = function() {
    hooks = _createHooksMap();
  };
  return DOMPurify;
}
var purify = createDOMPurify();

// src/modules/RenderHtml.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var purifier = null;
var createPurifier = () => {
  if (typeof window === "undefined") {
    return null;
  }
  const nextPurifier = purify(window);
  nextPurifier.addHook("afterSanitizeAttributes", (node) => {
    if (node instanceof HTMLAnchorElement && node.getAttribute("target") === "_blank") {
      node.setAttribute("rel", "noopener noreferrer");
    }
  });
  return nextPurifier;
};
var getPurifier = () => {
  if (typeof window === "undefined") {
    return null;
  }
  if (!purifier) {
    purifier = createPurifier();
  }
  return purifier;
};
var sanitizeInlineHtml = (html2) => {
  const purifier2 = getPurifier();
  if (!purifier2) {
    return "";
  }
  return purifier2.sanitize(html2, {
    ALLOWED_TAGS: ["a", "p", "b", "strong", "i", "em", "br", "code"],
    ALLOWED_ATTR: ["href", "title", "target", "rel"]
  });
};
var sanitizeHtml = (html2) => sanitizeInlineHtml(html2);
var RenderHtml = ({
  html: html2,
  tag: Tag = "div",
  id,
  className,
  role,
  style
}) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  Tag,
  {
    className,
    role,
    style,
    id,
    dangerouslySetInnerHTML: { __html: sanitizeInlineHtml(html2) }
  }
);

// src/components/FieldMessages/FieldMessages.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var FieldMessages = ({
  hint,
  hintId,
  help,
  helpHtml,
  helpId,
  errorMessage,
  errorId,
  hasError = false
}) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
  hint && hintId && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { id: hintId, className: "ctx2-form-hint", children: hint }),
  helpHtml && helpId && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RenderHtml, { id: helpId, className: "ctx2-form-help", html: helpHtml }),
  help && helpId && !helpHtml && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { id: helpId, className: "ctx2-form-help", children: help }),
  hasError && errorMessage && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { id: errorId, role: "alert", className: "ctx2-form-error", children: errorMessage })
] });

// src/components/Fields/Checkbox/Checkbox.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Checkbox = (props) => {
  const {
    label = "",
    name = "",
    disabled = false,
    required = false,
    customErrorMessage,
    error,
    value,
    help,
    formTouched = false,
    variant = "checkbox",
    onChange
  } = props;
  const inputRef = (0, import_element.useRef)(null);
  const [touched, setTouched] = (0, import_element.useState)(false);
  const reactId = (0, import_element.useId)();
  const inputId = name || `checkbox-${reactId}`;
  const helpId = help ? `${inputId}-help` : void 0;
  const errorId = `${inputId}-error`;
  const isTouched = formTouched || touched;
  const nativeInvalid = !!inputRef.current && !inputRef.current.validity.valid;
  const hasError = !!error || nativeInvalid && isTouched;
  const errorMessage = error ?? customErrorMessage ?? (isTouched ? inputRef.current?.validationMessage : void 0);
  const describedBy = [helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx2-form-field",
    variant === "toggle" ? "ctx2-toggle" : "ctx2-checkbox",
    hasError ? "ctx2-form-error" : ""
  ].filter(Boolean).join(" ");
  const handleChange = (event) => {
    if (customErrorMessage) {
      event.currentTarget.setCustomValidity("");
    }
    onChange(event.currentTarget.checked);
  };
  const handleInvalid = (event) => {
    if (!customErrorMessage) return;
    event.currentTarget.setCustomValidity(customErrorMessage);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: classes, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("label", { htmlFor: inputId, className: "ctx2-form-checkbox-label", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "ctx2-toggle__control", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "input",
          {
            ref: inputRef,
            id: inputId,
            name: name || void 0,
            type: "checkbox",
            checked: value,
            disabled,
            required,
            "aria-required": required || void 0,
            "aria-invalid": hasError || void 0,
            "aria-describedby": describedBy,
            "aria-errormessage": hasError && errorMessage ? errorId : void 0,
            onChange: handleChange,
            onBlur: () => setTouched(true),
            onInvalid: handleInvalid
          }
        ),
        variant === "toggle" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "ctx2-toggle__switch", "aria-hidden": "true" })
      ] }),
      label && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          RenderHtml,
          {
            className: "ctx2-form-checkbox-label__text",
            html: label,
            tag: "span"
          }
        ),
        required && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "ctx2-form-label__required", "aria-hidden": "true" })
      ] })
    ] }),
    help && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      FieldMessages,
      {
        helpHtml: sanitizeInlineHtml(help),
        helpId,
        errorMessage,
        errorId,
        hasError
      }
    )
  ] });
};
var Checkbox_default = Checkbox;

// src/components/Fields/Combobox/Combobox.tsx
var import_combobox = require("@base-ui/react/combobox");
var import_element2 = require("@wordpress/element");

// src/components/FieldWrapper/FieldWrapper.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var FieldWrapper = ({
  children,
  className = "",
  label,
  required = false,
  labelFor,
  containerRef,
  hint,
  hintId,
  help,
  helpHtml,
  helpId,
  errorMessage,
  errorId,
  hasError = false
}) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { ref: containerRef, className, children: [
  label && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { htmlFor: labelFor, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: label }),
    required && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "ctx-form-label__required", "aria-hidden": "true" })
  ] }),
  children,
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    FieldMessages,
    {
      hint,
      hintId,
      help,
      helpHtml,
      helpId,
      errorMessage,
      errorId,
      hasError
    }
  )
] });
var FieldWrapper_default = FieldWrapper;

// src/components/Fields/Combobox/Combobox.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var CLEAR_VALUE = "__ctx2_combobox_clear__";
var Combobox = (props) => {
  const {
    label = "",
    name = "",
    options,
    required = false,
    disabled = false,
    placeholder = "",
    help,
    error,
    customErrorMessage,
    formTouched = false,
    value = "",
    onChange,
    allowClear = false,
    clearLabel = "Clear selection",
    noResultsLabel = "No results",
    renderOption
  } = props;
  const reactId = (0, import_element2.useId)();
  const inputId = name || `combobox-${reactId}`;
  const helpId = help ? `${inputId}-help` : void 0;
  const errorId = `${inputId}-error`;
  const [touched, setTouched] = (0, import_element2.useState)(false);
  const [isOpen, setIsOpen] = (0, import_element2.useState)(false);
  const [inputValue, setInputValue] = (0, import_element2.useState)(value);
  const [highlightedItem, setHighlightedItem] = (0, import_element2.useState)(
    null
  );
  (0, import_element2.useEffect)(() => {
    setInputValue(value);
  }, [options, value]);
  const filteredOptions = (0, import_element2.useMemo)(() => {
    const query = inputValue.trim().toLowerCase();
    if (!query) {
      return options;
    }
    if (query.endsWith("*")) {
      const prefix = query.slice(0, -1);
      return options.filter(
        (option) => option.toLowerCase().startsWith(prefix)
      );
    }
    return options.filter((option) => option.toLowerCase().includes(query));
  }, [inputValue, options]);
  const clearEnabled = allowClear && inputValue.trim() !== "";
  const items = (0, import_element2.useMemo)(() => {
    const optionItems = filteredOptions.map((option) => ({
      type: "option",
      value: option,
      label: option
    }));
    if (!clearEnabled) {
      return optionItems;
    }
    return [
      {
        type: "clear",
        value: CLEAR_VALUE,
        label: clearLabel
      },
      ...optionItems
    ];
  }, [clearEnabled, clearLabel, filteredOptions]);
  const selectedItem = (0, import_element2.useMemo)(
    () => options.includes(value) ? {
      type: "option",
      value,
      label: value
    } : null,
    [options, value]
  );
  const hasError = !!error;
  const errorMessage = error ?? (formTouched || touched ? customErrorMessage : void 0);
  const describedBy = [helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx2-form-field",
    "ctx2-combobox",
    required ? "ctx2-input--required" : "",
    hasError ? "ctx2-form-error" : ""
  ].filter(Boolean).join(" ");
  const handleInputValueChange = (nextValue) => {
    setInputValue(nextValue);
    onChange(nextValue);
  };
  const handleValueChange = (item) => {
    if (!item || item.type === "clear") {
      setInputValue("");
      onChange("");
      return;
    }
    setInputValue(item.value);
    onChange(item.value);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    FieldWrapper_default,
    {
      className: classes,
      label,
      required,
      labelFor: inputId,
      help,
      helpId,
      errorMessage,
      errorId,
      hasError: hasError && (touched || formTouched),
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        import_combobox.Combobox.Root,
        {
          items,
          value: selectedItem,
          inputValue,
          open: isOpen,
          onInputValueChange: handleInputValueChange,
          onValueChange: handleValueChange,
          onOpenChange: setIsOpen,
          onItemHighlighted: (item) => setHighlightedItem(item ?? null),
          itemToStringLabel: (item) => item.label,
          itemToStringValue: (item) => item.value,
          isItemEqualToValue: (item, selected) => item.value === selected.value,
          openOnInputClick: true,
          autoHighlight: false,
          filter: null,
          disabled,
          required,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              import_combobox.Combobox.Input,
              {
                id: inputId,
                name: name || void 0,
                type: "text",
                value: inputValue,
                placeholder,
                required,
                disabled,
                autoComplete: "off",
                "aria-describedby": describedBy,
                "aria-required": required || void 0,
                "aria-invalid": hasError || void 0,
                "aria-errormessage": hasError && errorMessage ? errorId : void 0,
                onFocus: () => setIsOpen(true),
                onBlur: () => setTouched(true)
              }
            ),
            isOpen && !disabled && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_combobox.Combobox.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_combobox.Combobox.Positioner, { className: "ctx2-combobox-positioner", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_combobox.Combobox.Popup, { className: "ctx2-combobox-listbox", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_combobox.Combobox.List, { children: (item, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                import_combobox.Combobox.Item,
                {
                  value: item,
                  index,
                  className: "ctx2-combobox-option",
                  onMouseDown: (event) => {
                    event.preventDefault();
                    handleValueChange(item);
                    setIsOpen(false);
                  },
                  children: item.type === "clear" ? item.label : renderOption ? renderOption(item.value, {
                    highlighted: highlightedItem?.value === item.value,
                    selected: inputValue === item.value
                  }) : item.label
                },
                `${item.type}-${item.value}`
              ) }),
              filteredOptions.length === 0 && !clearEnabled && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_combobox.Combobox.Empty, { className: "ctx2-combobox-empty", children: noResultsLabel })
            ] }) }) })
          ]
        }
      )
    }
  );
};
var Combobox_default = Combobox;

// src/components/Fields/Country/Country.tsx
var import_element3 = require("@wordpress/element");

// src/modules/countries.ts
var REGION_COUNTRY_CODES = {
  EU: [
    "AD",
    "AL",
    "AT",
    "BA",
    "BE",
    "BG",
    "BY",
    "CH",
    "CY",
    "CZ",
    "DE",
    "DK",
    "EE",
    "ES",
    "FI",
    "FO",
    "FR",
    "GB",
    "GI",
    "GR",
    "HR",
    "HU",
    "IE",
    "IS",
    "IT",
    "LI",
    "LT",
    "LU",
    "LV",
    "MC",
    "MD",
    "ME",
    "MK",
    "NL",
    "NO",
    "PL",
    "PT",
    "RO",
    "RS",
    "RU",
    "SE",
    "SI",
    "SK",
    "SM",
    "UA",
    "VA",
    "XK"
  ],
  DACH: ["AT", "CH", "DE"],
  AS: [
    "AE",
    "AF",
    "AM",
    "AZ",
    "BD",
    "BH",
    "BN",
    "BT",
    "CN",
    "GE",
    "HK",
    "ID",
    "IL",
    "IN",
    "IQ",
    "IR",
    "JO",
    "JP",
    "KG",
    "KH",
    "KP",
    "KR",
    "KW",
    "KZ",
    "LA",
    "LB",
    "LK",
    "MM",
    "MN",
    "MO",
    "MV",
    "MY",
    "NP",
    "OM",
    "PH",
    "PK",
    "PS",
    "QA",
    "SA",
    "SG",
    "SY",
    "TH",
    "TJ",
    "TL",
    "TM",
    "TR",
    "TW",
    "UZ",
    "VN",
    "YE"
  ],
  AF: [
    "AO",
    "BF",
    "BI",
    "BJ",
    "BW",
    "CD",
    "CF",
    "CG",
    "CI",
    "CM",
    "CV",
    "DJ",
    "DZ",
    "EG",
    "ER",
    "ET",
    "GA",
    "GH",
    "GM",
    "GN",
    "GQ",
    "GW",
    "IO",
    "KE",
    "KM",
    "LR",
    "LS",
    "LY",
    "MA",
    "MG",
    "ML",
    "MR",
    "MU",
    "MW",
    "MZ",
    "NA",
    "NE",
    "NG",
    "RE",
    "RW",
    "SC",
    "SD",
    "SH",
    "SL",
    "SN",
    "SO",
    "ST",
    "SZ",
    "TG",
    "TN",
    "TZ",
    "UG",
    "YT",
    "ZA",
    "ZM",
    "ZW"
  ],
  OC: [
    "AS",
    "AU",
    "CK",
    "FJ",
    "FM",
    "GU",
    "KI",
    "MH",
    "MP",
    "NC",
    "NF",
    "NR",
    "NU",
    "NZ",
    "PF",
    "PG",
    "PW",
    "SB",
    "TK",
    "TO",
    "TV",
    "VU",
    "WF",
    "WS"
  ],
  NA: [
    "AG",
    "AI",
    "BB",
    "BL",
    "BM",
    "BS",
    "BZ",
    "CA",
    "CR",
    "CU",
    "DM",
    "DO",
    "GD",
    "GL",
    "GP",
    "GT",
    "HN",
    "HT",
    "JM",
    "KN",
    "KY",
    "LC",
    "MF",
    "MQ",
    "MS",
    "MX",
    "NI",
    "PA",
    "PM",
    "PR",
    "SV",
    "TC",
    "US",
    "VC",
    "VG",
    "VI"
  ],
  SA: [
    "AR",
    "AW",
    "BO",
    "BR",
    "CL",
    "CO",
    "EC",
    "FK",
    "GF",
    "GY",
    "PE",
    "PY",
    "SR",
    "TT",
    "UY",
    "VE"
  ]
};
var REGION_FILTERS = {
  europe: ["EU"],
  dach: ["DACH"],
  asia: ["AS"],
  africa: ["AF"],
  oceania: ["OC"],
  "north-america": ["NA"],
  "south-america": ["SA"],
  americas: ["NA", "SA"]
};
var WORLD_COUNTRY_CODES = Array.from(
  new Set(
    Object.values(REGION_COUNTRY_CODES).flatMap((codes) => Array.from(codes))
  )
).sort();
var getCountryCodes = (region) => {
  if (region === "world") {
    return WORLD_COUNTRY_CODES;
  }
  const filterKeys = REGION_FILTERS[region];
  return Array.from(
    new Set(filterKeys.flatMap((key) => REGION_COUNTRY_CODES[key] ?? []))
  );
};
var getCountryOptions = (region, locale) => {
  const displayNames = new Intl.DisplayNames([locale, "en"], {
    type: "region"
  });
  return getCountryCodes(region).map((code) => ({ value: code, label: displayNames.of(code) ?? code })).sort((a, b) => a.label.localeCompare(b.label, locale));
};

// src/components/Fields/Country/Country.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var browserLocale = navigator.language;
var Country = (props) => {
  const {
    onChange,
    disabled,
    required,
    name,
    label,
    width,
    region,
    help,
    customErrorMessage,
    error,
    value,
    placeholder,
    formTouched
  } = props;
  const countries = (0, import_element3.useMemo)(
    () => getCountryOptions(region, browserLocale),
    [region]
  );
  const labelToValueMap = (0, import_element3.useMemo)(() => {
    return new Map(countries.map((country) => [country.label, country.value]));
  }, [countries]);
  const valueToLabelMap = (0, import_element3.useMemo)(() => {
    return new Map(countries.map((country) => [country.value, country.label]));
  }, [countries]);
  const selectedLabel = value ? valueToLabelMap.get(value) ?? "" : "";
  const handleChange = (selectedLabel2) => {
    if (typeof selectedLabel2 !== "string") {
      onChange("");
      return;
    }
    const selectedValue = labelToValueMap.get(selectedLabel2) ?? "";
    onChange(selectedValue);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Combobox_default,
    {
      label,
      name,
      required,
      width,
      options: countries.map((country) => country.label),
      help: help ?? "Make a selection",
      disabled,
      formTouched,
      customErrorMessage,
      error,
      placeholder,
      value: selectedLabel,
      onChange: handleChange,
      allowClear: !required,
      clearLabel: help ?? "Make a selection",
      noResultsLabel: "No matching country"
    }
  );
};
var Country_default = Country;

// src/components/Fields/Hidden/Hidden.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var HiddenInput = ({ defaultValue = "", name = "" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("input", { defaultValue, name, type: "hidden" });
};
var Hidden_default = HiddenInput;

// src/components/Fields/Input/Input.tsx
var import_element4 = require("@wordpress/element");
var import_jsx_runtime9 = require("react/jsx-runtime");
var TextInput = (props) => {
  const {
    label = "",
    placeholder = "",
    name = "",
    required = false,
    autoComplete = "",
    pattern = null,
    disabled = false,
    customError = "",
    min,
    max,
    customErrorMessage,
    error,
    type = "text",
    help,
    formTouched = false,
    onChange,
    value,
    unit = ""
  } = props;
  const [touched, setTouched] = (0, import_element4.useState)(false);
  const inputRef = (0, import_element4.useRef)(null);
  const reactId = (0, import_element4.useId)();
  const inputId = name || `input-${reactId}`;
  const helpId = help ? `${inputId}-help` : void 0;
  const errorId = `${inputId}-error`;
  const isTouched = formTouched || touched;
  const nativeInvalid = !!inputRef.current && !inputRef.current.validity.valid;
  const hasError = !!error || nativeInvalid && isTouched;
  const errorMessage = error ?? customErrorMessage ?? (isTouched ? inputRef.current?.validationMessage : void 0);
  const describedBy = [helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx2-form-field",
    "ctx2-input",
    required ? "ctx2-input--required" : "",
    hasError ? "ctx2-form-error" : ""
  ].filter(Boolean).join(" ");
  const inputConstraints = (0, import_element4.useMemo)(() => {
    const constraints = {};
    if (type === "text" || type === "email" || type === "password" || type === "search" || type === "tel" || type === "url") {
      if (typeof min === "number") constraints.minLength = min;
      if (typeof max === "number") constraints.maxLength = max;
    }
    if (type === "number" || type === "date" || type === "datetime-local" || type === "week" || type === "month") {
      if (min !== void 0) constraints.min = min;
      if (max !== void 0) constraints.max = max;
    }
    return constraints;
  }, [min, max, type]);
  const handleChange = (event) => {
    if (customError) {
      event.currentTarget.setCustomValidity("");
    }
    onChange(event.target.value);
  };
  const handleBlur = () => {
    setTouched(true);
  };
  const handleInvalid = (event) => {
    if (customError) {
      event.currentTarget.setCustomValidity(customError);
    }
  };
  const handleBeforeInput = (event) => {
    if (!pattern) return;
    const nativeEvent = event.nativeEvent;
    if (nativeEvent.data == null) return;
    try {
      const regex = new RegExp(pattern, "u");
      if (!regex.test(nativeEvent.data)) {
        event.preventDefault();
      }
    } catch {
    }
  };
  const input = /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "input",
    {
      ...inputConstraints,
      ref: inputRef,
      id: inputId,
      name: name || void 0,
      type,
      value,
      placeholder,
      required,
      disabled,
      autoComplete: autoComplete || void 0,
      pattern: pattern ?? void 0,
      "aria-required": required || void 0,
      "aria-invalid": hasError || void 0,
      "aria-describedby": describedBy,
      "aria-errormessage": hasError && errorMessage ? errorId : void 0,
      onChange: handleChange,
      onBlur: handleBlur,
      onInvalid: handleInvalid,
      onBeforeInput: handleBeforeInput
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    FieldWrapper_default,
    {
      className: classes,
      label,
      required,
      labelFor: inputId,
      help,
      helpId,
      errorMessage,
      errorId,
      hasError,
      children: unit ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "ctx2-input__control", "data-unit": unit, children: input }) : input
    }
  );
};
var Input_default = TextInput;

// src/components/Fields/Radio/Radio.tsx
var import_element5 = require("@wordpress/element");
var import_jsx_runtime10 = require("react/jsx-runtime");
var Radio = (props) => {
  const {
    onChange,
    options = [],
    name = "",
    disabled = false,
    width = 6,
    required = false,
    label = "",
    help,
    error,
    customErrorMessage,
    value
  } = props;
  const reactId = (0, import_element5.useId)();
  const fieldId = name || `radio-${reactId}`;
  const helpId = help ? `${fieldId}-help` : void 0;
  const errorId = `${fieldId}-error`;
  const hasError = !!error;
  const errorMessage = error ?? customErrorMessage;
  const describedBy = [helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx2-form-field",
    "ctx2-radio",
    required ? "ctx2-radio--required" : "",
    hasError ? "ctx2-form-error" : ""
  ].filter(Boolean).join(" ");
  const handleChange = (event) => {
    onChange(event.currentTarget.value);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: classes, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "fieldset",
      {
        className: "ctx2-radio-group",
        "aria-describedby": describedBy,
        "aria-invalid": hasError || void 0,
        children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("legend", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: label }),
            required && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "ctx2-form-label__required", "aria-hidden": "true" })
          ] }),
          (Array.isArray(options) ? options.map((option) => ({
            value: option,
            label: option
          })) : Object.entries(options ?? {}).map(([optionValue, optionLabel]) => ({
            value: optionValue,
            label: optionLabel
          }))).map((option, index) => {
            const optionId = `${fieldId}-${index}`;
            return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", { htmlFor: optionId, children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "input",
                {
                  id: optionId,
                  type: "radio",
                  name: name || fieldId,
                  value: option.value,
                  checked: value === option.value,
                  onChange: handleChange,
                  disabled,
                  required
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: option.label })
            ] }, optionId);
          })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      FieldMessages,
      {
        help,
        helpId,
        errorMessage,
        errorId,
        hasError
      }
    )
  ] });
};
var Radio_default = Radio;

// src/components/Fields/RadioCards/RadioCards.tsx
var import_element6 = require("@wordpress/element");
var import_jsx_runtime11 = require("react/jsx-runtime");
var RadioCards = (props) => {
  const {
    onChange,
    options = [],
    name = "",
    disabled = false,
    required = false,
    label = "",
    help,
    error,
    customErrorMessage,
    value
  } = props;
  const reactId = (0, import_element6.useId)();
  const fieldId = name || `radio-cards-${reactId}`;
  const helpId = help ? `${fieldId}-help` : void 0;
  const errorId = `${fieldId}-error`;
  const hasError = !!error;
  const errorMessage = error ?? customErrorMessage;
  const describedBy = [helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx2-form-field",
    "ctx2-radio-cards",
    required ? "ctx2-radio-cards--required" : "",
    hasError ? "ctx2-form-error" : ""
  ].filter(Boolean).join(" ");
  const handleChange = (event) => {
    onChange(event.currentTarget.value);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: classes, children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      "fieldset",
      {
        className: "ctx2-radio-cards__group",
        "aria-describedby": describedBy,
        "aria-invalid": hasError || void 0,
        children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("legend", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: label }),
            required && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "ctx2-form-label__required", "aria-hidden": "true" })
          ] }),
          options.map((option, index) => {
            const optionId = `${fieldId}-${index}`;
            const optionDisabled = disabled || option.disabled;
            return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
              "label",
              {
                className: "ctx2-radio-cards__option",
                htmlFor: optionId,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                    "input",
                    {
                      id: optionId,
                      type: "radio",
                      name: name || fieldId,
                      value: option.value,
                      checked: value === option.value,
                      onChange: handleChange,
                      disabled: optionDisabled,
                      required
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "ctx2-radio-cards__card", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "ctx2-radio-cards__title", children: [
                      option.icon,
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: option.title })
                    ] }),
                    option.description && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "ctx2-radio-cards__description", children: option.description }),
                    option.note && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("small", { className: "ctx2-radio-cards__note", children: option.note })
                  ] })
                ]
              },
              optionId
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      FieldMessages,
      {
        help,
        helpId,
        errorMessage,
        errorId,
        hasError
      }
    )
  ] });
};
var RadioCards_default = RadioCards;

// src/components/Fields/Range/Range.tsx
var import_slider = require("@base-ui/react/slider");
var import_jsx_runtime12 = require("react/jsx-runtime");
var RangeInput = (props) => {
  const {
    label,
    name,
    required,
    min,
    max,
    disabled,
    hasTicks,
    hasLabels = false,
    showValue = true,
    onChange,
    value
  } = props;
  const valueDisplayId = `${name}-value`;
  const numericValue = Number.parseFloat(value);
  const rangeValue = Number.isFinite(numericValue) ? numericValue : min;
  const safeMax = max === min ? min + 1 : max;
  const tickCount = Math.max(0, safeMax - min + 1);
  const classes = [
    "ctx2-form-field",
    "ctx2-range",
    hasTicks ? "ctx2-range--ticks" : "",
    required ? "ctx2-range--required" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    import_slider.Slider.Root,
    {
      className: classes,
      name,
      min,
      max: safeMax,
      step: 1,
      value: rangeValue,
      disabled,
      onValueChange: (nextValue) => onChange(String(nextValue)),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", { htmlFor: name, children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "ctx2-range__set", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "ctx2-range__control", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_slider.Slider.Control, { className: "ctx2-range__slider", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_slider.Slider.Track, { className: "ctx2-range__track", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_slider.Slider.Indicator, { className: "ctx2-range__indicator" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                import_slider.Slider.Thumb,
                {
                  className: "ctx2-range__thumb",
                  inputRef: (input) => {
                    if (input) {
                      input.id = name;
                      input.required = required;
                      input.setAttribute("aria-controls", valueDisplayId);
                    }
                  }
                }
              )
            ] }) }),
            hasTicks && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "ctx2-range__ticks", "aria-hidden": "true", children: [...Array(tickCount)].map((_, index) => {
              const value2 = min + index;
              return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "ctx2-range__tick" }, value2);
            }) }),
            hasLabels && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "ctx2-range__labels", "aria-hidden": "true", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "ctx2-range__label", children: min }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "ctx2-range__label", children: max })
            ] })
          ] }),
          showValue && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            "span",
            {
              id: valueDisplayId,
              className: "ctx2-range__value",
              "aria-live": "polite",
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_slider.Slider.Value, { children: (_, values) => values[0] ?? rangeValue })
            }
          )
        ] })
      ]
    }
  );
};
var Range_default = RangeInput;

// src/components/Fields/Select/Select.tsx
var import_select = require("@base-ui/react/select");
var import_element7 = require("@wordpress/element");
var import_jsx_runtime13 = require("react/jsx-runtime");
var Select = (props) => {
  const {
    onChange,
    options,
    hasEmptyOption = false,
    help,
    hint,
    disabled = false,
    required = false,
    label = "",
    name = "",
    customError,
    customErrorMessage,
    error,
    value,
    formTouched = false,
    emptyOptionLabel = "Make a selection"
  } = props;
  const [touched, setTouched] = (0, import_element7.useState)(false);
  const inputRef = (0, import_element7.useRef)(null);
  const reactId = (0, import_element7.useId)();
  const selectId = name || `select-${reactId}`;
  const helpId = help ? `${selectId}-help` : void 0;
  const hintId = hint ? `${selectId}-hint` : void 0;
  const errorId = `${selectId}-error`;
  const isTouched = formTouched || touched;
  const nativeInvalid = !!inputRef.current && !inputRef.current.validity.valid;
  const hasError = !!error || nativeInvalid && isTouched;
  const errorMessage = error ?? customErrorMessage ?? (isTouched ? inputRef.current?.validationMessage : void 0);
  const describedBy = [hintId, helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx2-form-field",
    "ctx2-select",
    required ? "ctx2-select--required" : "",
    hasError ? "ctx2-form-error" : ""
  ].filter(Boolean).join(" ");
  const normalizedOptions = (0, import_element7.useMemo)(() => {
    if (!options) return [];
    if (Array.isArray(options)) {
      return options.map((option) => ({
        value: option,
        label: option
      }));
    }
    return Object.entries(options).map(([key, optionLabel]) => ({
      value: key,
      label: optionLabel
    }));
  }, [options]);
  const selectedLabel = (0, import_element7.useMemo)(() => {
    const selected = normalizedOptions.find((option) => option.value === value);
    if (selected) {
      return selected.label;
    }
    return hasEmptyOption && value === "" ? emptyOptionLabel : void 0;
  }, [emptyOptionLabel, hasEmptyOption, normalizedOptions, value]);
  const handleBlur = () => {
    setTouched(true);
  };
  const handleValueChange = (nextValue) => {
    if (customError) {
      inputRef.current?.setCustomValidity("");
    }
    onChange(nextValue ?? "");
  };
  const setInputRef = (input) => {
    inputRef.current = input;
    if (!input) {
      return;
    }
    if (customError) {
      input.setCustomValidity(customError);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    FieldWrapper_default,
    {
      className: classes,
      label,
      required,
      labelFor: selectId,
      hint,
      hintId,
      help,
      helpId,
      errorMessage,
      errorId,
      hasError,
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
        import_select.Select.Root,
        {
          id: selectId,
          name: name || void 0,
          required,
          disabled,
          value: typeof value === "string" ? value : value[0] ?? "",
          onValueChange: handleValueChange,
          inputRef: setInputRef,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
              import_select.Select.Trigger,
              {
                id: selectId,
                disabled,
                "aria-required": required || void 0,
                "aria-invalid": hasError || void 0,
                "aria-describedby": describedBy,
                "aria-errormessage": hasError && errorMessage ? errorId : void 0,
                onBlur: handleBlur,
                className: "ctx2-select__trigger",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_select.Select.Value, { placeholder: emptyOptionLabel, children: () => selectedLabel ?? emptyOptionLabel }),
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_select.Select.Icon, { className: "ctx2-select__icon", "aria-hidden": "true" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_select.Select.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              import_select.Select.Positioner,
              {
                className: "ctx2-select__positioner",
                alignItemWithTrigger: false,
                children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_select.Select.Popup, { className: "ctx2-select__popup", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_select.Select.List, { className: "ctx2-select__list", children: [
                  hasEmptyOption && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                    import_select.Select.Item,
                    {
                      value: "",
                      disabled: required,
                      label: emptyOptionLabel,
                      className: "ctx2-select__option",
                      onMouseDown: (event) => {
                        event.preventDefault();
                        if (!required) {
                          handleValueChange("");
                        }
                      },
                      onClick: () => {
                        if (!required) {
                          handleValueChange("");
                        }
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                          import_select.Select.ItemIndicator,
                          {
                            className: "ctx2-select__option-indicator",
                            keepMounted: true
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_select.Select.ItemText, { children: emptyOptionLabel })
                      ]
                    }
                  ),
                  normalizedOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                    import_select.Select.Item,
                    {
                      value: option.value,
                      label: option.label,
                      className: "ctx2-select__option",
                      onMouseDown: (event) => {
                        event.preventDefault();
                        handleValueChange(option.value);
                      },
                      onClick: () => handleValueChange(option.value),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                          import_select.Select.ItemIndicator,
                          {
                            className: "ctx2-select__option-indicator",
                            keepMounted: true
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_select.Select.ItemText, { children: option.label })
                      ]
                    },
                    option.value
                  ))
                ] }) })
              }
            ) })
          ]
        }
      )
    }
  );
};
var Select_default = Select;

// src/components/Fields/Stepper/Stepper.tsx
var import_number_field = require("@base-ui/react/number-field");
var import_jsx_runtime14 = require("react/jsx-runtime");
function Stepper({
  value,
  min = 0,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  disabled = false,
  decrementLabel = "Decrease value",
  incrementLabel = "Increase value",
  onChange,
  decrementTestId,
  incrementTestId,
  valueTestId,
  className = ""
}) {
  const finiteMax = Number.isFinite(max) ? max : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    import_number_field.NumberField.Root,
    {
      className: ["ctx2-stepper", className].filter(Boolean).join(" "),
      value,
      min,
      max: finiteMax,
      step,
      disabled,
      onValueChange: (nextValue) => {
        if (nextValue !== null) {
          onChange(nextValue);
        }
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          import_number_field.NumberField.Decrement,
          {
            className: "ctx2-stepper__button",
            "aria-label": decrementLabel,
            "data-testid": decrementTestId,
            children: "-"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "span",
          {
            className: "ctx2-stepper__value",
            "aria-live": "polite",
            "data-testid": valueTestId,
            children: value
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          import_number_field.NumberField.Increment,
          {
            className: "ctx2-stepper__button",
            "aria-label": incrementLabel,
            "data-testid": incrementTestId,
            children: "+"
          }
        )
      ]
    }
  );
}

// src/components/Flex/Flex.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function Flex({
  as,
  children,
  direction = "row",
  align = "stretch",
  justify = "flex-start",
  wrap = "nowrap",
  gap,
  inline = false,
  style,
  ...props
}) {
  const Component = as ?? "div";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    Component,
    {
      ...props,
      style: {
        display: inline ? "inline-flex" : "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        gap,
        ...style
      },
      children
    }
  );
}

// src/components/Fields/Submit/Submit.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var Submit = (props) => {
  const { label, alignment, disabled, placeholder } = props;
  const className = "ctx2-form-field";
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    Flex,
    {
      className,
      align: "center",
      justify: alignment === "right" ? "flex-end" : alignment === "center" ? "center" : "flex-start",
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        "input",
        {
          className: "ctx2-button",
          type: props.type ?? "submit",
          value: label || placeholder,
          disabled
        }
      )
    }
  );
};
var Submit_default = Submit;

// src/components/Fields/TextArea/TextArea.tsx
var import_element8 = require("@wordpress/element");
var import_jsx_runtime17 = require("react/jsx-runtime");
var TextArea = (props) => {
  const {
    label = "",
    placeholder = "",
    name = "",
    required = false,
    disabled = false,
    rows = 3,
    help,
    formTouched = false,
    customErrorMessage,
    error,
    onChange,
    value
  } = props;
  const textAreaRef = (0, import_element8.useRef)(null);
  const [touched, setTouched] = (0, import_element8.useState)(false);
  const reactId = (0, import_element8.useId)();
  const textAreaId = name || `textarea-${reactId}`;
  const helpId = help ? `${textAreaId}-help` : void 0;
  const errorId = `${textAreaId}-error`;
  const isTouched = touched || formTouched;
  const nativeInvalid = !!textAreaRef.current && !textAreaRef.current.validity.valid;
  const hasError = !!error || nativeInvalid && isTouched;
  const errorMessage = error ?? customErrorMessage ?? (isTouched ? textAreaRef.current?.validationMessage : void 0);
  const describedBy = [helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx2-form-field",
    "ctx2-textarea",
    required ? "ctx2-textarea--required" : "",
    hasError ? "ctx2-form-error" : ""
  ].filter(Boolean).join(" ");
  const handleChange = (event) => {
    onChange(event.currentTarget.value);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    FieldWrapper_default,
    {
      className: classes,
      label,
      required,
      labelFor: textAreaId,
      help,
      helpId,
      errorMessage,
      errorId,
      hasError,
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "textarea",
        {
          ref: textAreaRef,
          id: textAreaId,
          name: name || void 0,
          required,
          disabled,
          rows,
          placeholder,
          value,
          "aria-required": required || void 0,
          "aria-invalid": hasError || void 0,
          "aria-describedby": describedBy,
          "aria-errormessage": hasError && errorMessage ? errorId : void 0,
          onBlur: () => setTouched(true),
          onChange: handleChange
        }
      )
    }
  );
};
var TextArea_default = TextArea;

// src/components/FlexItem/FlexItem.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function FlexItem({
  as,
  order,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  alignSelf,
  style,
  children,
  ...props
}) {
  const Component = as ?? "div";
  const flexStyle = flex === void 0 ? {
    flexGrow,
    flexShrink,
    flexBasis
  } : { flex };
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    Component,
    {
      ...props,
      style: {
        order,
        ...flexStyle,
        alignSelf,
        ...style
      },
      children
    }
  );
}

// src/components/Form/Form.tsx
var import_element9 = require("@wordpress/element");

// src/modules/values.ts
var getDefaultFormValues = (fields) => {
  const values = {};
  fields.forEach((field) => {
    if (field.defaultValue !== void 0) {
      values[field.name] = field.defaultValue;
    }
  });
  return values;
};
var normalizeFieldValue = (field, formData) => {
  const rawValue = formData[field.name];
  switch (field.type) {
    case "checkbox":
    case "toggle":
      if (typeof rawValue === "boolean") return rawValue;
      if (rawValue === "checked" || rawValue === "on" || rawValue === "1" || rawValue === 1) {
        return true;
      }
      if (rawValue === "unchecked" || rawValue === "off" || rawValue === "0" || rawValue === 0) {
        return false;
      }
      return typeof field.defaultValue === "boolean" ? field.defaultValue : false;
    case "number":
    case "range":
    case "numberpicker":
      if (typeof rawValue === "number") return String(rawValue);
      if (typeof rawValue === "string") return rawValue;
      if (typeof field.defaultValue === "number") return String(field.defaultValue);
      if (typeof field.defaultValue === "string") return field.defaultValue;
      return "";
    default:
      if (typeof rawValue === "string") return rawValue;
      if (typeof rawValue === "number") return String(rawValue);
      if (typeof rawValue === "boolean") return rawValue ? "1" : "0";
      if (typeof field.defaultValue === "string") return field.defaultValue;
      if (typeof field.defaultValue === "number") return String(field.defaultValue);
      if (typeof field.defaultValue === "boolean") return field.defaultValue;
      return "";
  }
};

// src/modules/visibility.ts
var normalizeValue = (value) => {
  if (value === "checked" || value === "on" || value === "1" || value === 1) {
    return true;
  }
  if (value === "unchecked" || value === "off" || value === "0" || value === 0) {
    return false;
  }
  return value;
};
var isRuleMet = (rule, form) => {
  const actual = normalizeValue(form[rule.field] ?? null);
  const expected = normalizeValue(rule.value);
  switch (rule.operator) {
    case "equals":
      return actual == expected;
    case "not_equals":
      return actual != expected;
    case "not_empty":
      return actual !== null && actual !== "" && actual !== false;
    default:
      return false;
  }
};
var isFieldVisible = (visibilityRule, form) => {
  if (!visibilityRule) {
    return true;
  }
  return isRuleMet(visibilityRule, form);
};

// src/components/HtmlBlock/HtmlBlock.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var HTMLBlock = ({ content = "", role }) => {
  const classes = ["ctx-content-block", "core-block"].join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(RenderHtml, { className: classes, role, html: content });
};
var HtmlBlock_default = HTMLBlock;

// src/components/InputField/InputField.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var InputField = (props) => {
  const { type, onChange, disabled } = props;
  const base = {
    name: props.name,
    label: props.label ?? "",
    width: props.width ?? 6,
    required: props.required ?? false,
    disabled: disabled ?? false,
    formTouched: props.formTouched ?? false,
    customErrorMessage: props.customErrorMessage,
    placeholder: props.placeholder ?? ""
  };
  switch (type) {
    case "select":
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        Select_default,
        {
          ...base,
          options: props.options,
          hasEmptyOption: props.hasEmptyOption,
          help: props.help,
          hint: props.hint,
          error: props.error,
          value: props.value,
          onChange
        }
      );
    case "combobox":
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        Combobox_default,
        {
          ...base,
          options: Array.isArray(props.options) ? props.options : [],
          help: props.help ?? "",
          value: props.value,
          onChange
        }
      );
    case "radio":
    case "options":
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        Radio_default,
        {
          ...base,
          options: Array.isArray(props.options) ? props.options : [],
          value: props.value,
          onChange
        }
      );
    case "textarea":
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        TextArea_default,
        {
          ...base,
          rows: props.rows ?? 3,
          error: props.error,
          value: props.value,
          onChange
        }
      );
    case "checkbox":
    case "toggle":
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        Checkbox_default,
        {
          ...base,
          help: props.help,
          error: props.error,
          variant: type === "toggle" ? "toggle" : "checkbox",
          value: props.value,
          onChange
        }
      );
    case "country":
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        Country_default,
        {
          ...base,
          region: props.region ?? "world",
          help: props.help,
          customError: props.customError ?? "",
          error: props.error,
          value: props.value,
          onChange
        }
      );
    case "number":
    case "range":
    case "numberpicker":
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        Range_default,
        {
          ...base,
          type,
          min: props.min ?? 0,
          max: props.max ?? 100,
          hasTicks: props.hasTicks ?? false,
          hasLabels: props.hasLabels ?? false,
          showValue: props.showValue ?? true,
          value: props.value,
          onChange
        }
      );
    case "html":
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(HtmlBlock_default, { content: props.content, width: props.width });
    case "hidden":
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        Hidden_default,
        {
          name: props.name,
          defaultValue: typeof props.defaultValue === "string" ? props.defaultValue : void 0
        }
      );
    case "submit":
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        Submit_default,
        {
          label: props.label ?? "",
          width: props.width ?? 6,
          alignment: props.alignment ?? "left",
          placeholder: props.placeholder,
          disabled: !!disabled,
          type: "submit"
        }
      );
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        Input_default,
        {
          ...base,
          type,
          min: props.min,
          max: props.max,
          pattern: props.pattern ?? null,
          autoComplete: props.autoComplete ?? "",
          customError: props.customError ?? "",
          help: props.help,
          error: props.error,
          unit: props.unit,
          value: props.value,
          onChange
        }
      );
  }
};
var InputField_default = InputField;

// src/components/FormFields/FormFields.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
function Fieldset({
  fields,
  formData,
  errors = {},
  status = "LOADED",
  disabled = false,
  formTouched = false,
  onChange
}) {
  const visibleFields = fields.filter(
    (field) => isFieldVisible(field.visibilityRule, formData)
  );
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "ctx-form-fields", children: visibleFields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    "div",
    {
      className: `ctx-form-fields__item ctx-width--${field.width ?? 6}`,
      "data-testid": field.testId,
      children: [
        field.description && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "ctx-form-field-description", children: field.description }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          InputField_default,
          {
            ...field,
            status,
            disabled,
            formTouched,
            error: errors[field.name],
            value: normalizeFieldValue(field, formData),
            onChange: (value) => onChange(field.name, value)
          }
        )
      ]
    },
    field.name
  )) });
}

// src/components/Form/Form.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var Form = (props) => {
  const {
    data = [],
    formUrl = "",
    onSubmit,
    submitUrl = "",
    onChange,
    onStateChange,
    extraData,
    onSubmissionFinished
  } = props;
  const [status, setStatus] = (0, import_element9.useState)("LOADING");
  const [fields, setFields] = (0, import_element9.useState)([]);
  const [form, setForm] = (0, import_element9.useState)({});
  const [response, setResponse] = (0, import_element9.useState)();
  const [touched, setTouched] = (0, import_element9.useState)(false);
  (0, import_element9.useEffect)(() => {
    onStateChange?.(status);
  }, [status]);
  const formRef = (0, import_element9.useRef)(null);
  (0, import_element9.useEffect)(() => {
    if (!formUrl && data) {
      setFields(data);
      setStatus("LOADED");
      return;
    }
    fetch(formUrl).then((res) => res.json()).then((json) => {
      setFields(json.fields);
      setStatus("LOADED");
      setForm(getDefaultFormValues(json.fields));
    });
  }, [data, formUrl]);
  if (fields.length === 0) return null;
  const visibleFields = fields.filter(
    (field) => isFieldVisible(field.visibilityRule, form)
  );
  const handleSubmit = (event) => {
    const visibleValues = Object.fromEntries(
      visibleFields.map((field) => [
        field.name,
        form[field.name] ?? field.defaultValue ?? ""
      ])
    );
    const formData = { ...visibleValues, ...extraData };
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event, formData);
      return;
    }
    if (!formRef.current?.checkValidity()) {
      formRef.current?.reportValidity();
      return;
    }
    if (!submitUrl) {
      console.error("wp-react-form", "No URL or onSubmit callback provided");
      return;
    }
    if (status === "SUBMITTING" || status === "SUCCESS") return;
    setStatus("SUBMITTING");
    fetch(submitUrl, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => res.json()).then((data2) => {
      setStatus(data2.success ? "SUCCESS" : "ERROR");
      setResponse(data2);
      onSubmissionFinished?.(data2);
    });
  };
  const resetForm = () => {
    setStatus("LOADED");
    setForm(getDefaultFormValues(fields));
  };
  if (status === "LOADING") return null;
  const onFormChange = (_event) => {
    onChange?.(form);
  };
  const classes = [
    "ctx-form",
    status === "LOADED" ? "ctx-form--loaded" : "",
    status === "ERROR" ? "ctx-form--error" : "",
    status === "SUBMITTING" ? "ctx-form--submitting" : "",
    status === "SUCCESS" ? "ctx-form--submitted" : ""
  ].join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    "form",
    {
      className: classes,
      ref: formRef,
      onSubmit: handleSubmit,
      onInvalid: () => setTouched(true),
      onChange: onFormChange,
      onReset: resetForm,
      children: [
        status === "ERROR" && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          RenderHtml,
          {
            tag: "div",
            role: "alert",
            className: "ctx-form__response ctx-form__response--error",
            html: response?.message?.html ?? ""
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          RenderHtml,
          {
            tag: "div",
            role: "status",
            "aria-live": "polite",
            style: {
              opacity: status === "SUCCESS" ? 1 : 0,
              pointerEvents: status === "SUCCESS" ? "all" : "none",
              transition: "all 0.3s",
              left: 0,
              top: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              zIndex: 5
            },
            className: `ctx-form__response ${status === "SUCCESS" ? "ctx-form__response--show" : ""}`,
            html: response?.message?.html ?? "<p>Success</p>"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          Fieldset,
          {
            fields: visibleFields,
            formData: form,
            status,
            disabled: status === "SUBMITTING",
            formTouched: touched,
            onChange: (name, value) => {
              setForm((prev) => ({ ...prev, [name]: value }));
            }
          }
        )
      ]
    }
  );
};
var Form_default = Form;

// src/components/FormAccordion/FormAccordion.tsx
var import_accordion = require("@base-ui/react/accordion");
var import_jsx_runtime23 = require("react/jsx-runtime");
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function DefaultCompletedIndicator() {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "span",
    {
      className: "ctx2-form-accordion__completed-indicator",
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "svg",
        {
          className: "ctx2-form-accordion__completed-icon",
          viewBox: "0 0 16 16",
          focusable: "false",
          children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            "path",
            {
              d: "M13.4 4.6 6.7 11.3 2.9 7.5",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2"
            }
          )
        }
      )
    }
  );
}
function FormAccordionRoot({
  children,
  value,
  defaultValue,
  onValueChange,
  multiple = false,
  disabled = false,
  keepMounted = false,
  hiddenUntilFound = false,
  loopFocus = true,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    import_accordion.Accordion.Root,
    {
      className: classNames("ctx2-form-accordion", className),
      value,
      defaultValue,
      onValueChange: (nextValue) => onValueChange?.(nextValue),
      multiple,
      disabled,
      keepMounted,
      hiddenUntilFound,
      loopFocus,
      children
    }
  );
}
function FormAccordionSection({
  id,
  title,
  children,
  completed = false,
  disabled = false,
  completedIndicator,
  className,
  headerClassName,
  triggerClassName,
  panelClassName,
  contentClassName
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
    import_accordion.Accordion.Item,
    {
      value: id,
      disabled,
      className: (state) => classNames(
        "ctx2-form-accordion__section",
        state.open && "ctx2-form-accordion__section--open",
        completed && "ctx2-form-accordion__section--completed",
        disabled && "ctx2-form-accordion__section--disabled",
        className
      ),
      "data-completed": completed ? "" : void 0,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          import_accordion.Accordion.Header,
          {
            className: (state) => classNames(
              "ctx2-form-accordion__header-wrap",
              state.open && "ctx2-form-accordion__header-wrap--open",
              headerClassName
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
              import_accordion.Accordion.Trigger,
              {
                className: classNames(
                  "ctx2-form-accordion__header",
                  triggerClassName
                ),
                disabled,
                children: [
                  completed && (completedIndicator ?? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(DefaultCompletedIndicator, {})),
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "ctx2-form-accordion__title", children: title }),
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                    "span",
                    {
                      className: "ctx2-form-accordion__chevron",
                      "aria-hidden": "true"
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          import_accordion.Accordion.Panel,
          {
            className: classNames(
              "ctx2-form-accordion__content",
              panelClassName
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              "div",
              {
                className: classNames(
                  "ctx2-form-accordion__content-inner",
                  contentClassName
                ),
                children
              }
            )
          }
        )
      ]
    }
  );
}
var FormAccordion = Object.assign(
  FormAccordionRoot,
  {
    Section: FormAccordionSection
  }
);

// src/index.ts
var index_default = Form_default;
/*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.4.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.0/LICENSE *)
*/
//# sourceMappingURL=index.js.map
