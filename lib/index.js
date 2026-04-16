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
  Button: () => Button,
  Checkbox: () => Checkbox_default,
  Combobox: () => Combobox_default,
  Country: () => Country_default,
  Fieldset: () => Fieldset,
  Flex: () => Flex,
  Form: () => Form_default,
  FormField: () => InputField_default,
  FormFields: () => Fieldset,
  Hidden: () => Hidden_default,
  Input: () => Input_default,
  InputField: () => InputField_default,
  Radio: () => Radio_default,
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
    "ctx-button",
    `ctx-button--${variant}`,
    fullWidth ? "ctx-button--full-width" : "",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type, className: classes, ...props, children });
}

// src/components/Fields/Checkbox/Checkbox.tsx
var import_element = require("@wordpress/element");

// src/modules/sanitize.ts
var ALLOWED_BLOCK_TAGS = /* @__PURE__ */ new Set([
  "a",
  "b",
  "strong",
  "i",
  "em",
  "u",
  "s",
  "span",
  "br",
  "hr",
  "p",
  "div",
  "blockquote",
  "pre",
  "code",
  "ul",
  "ol",
  "li",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "img",
  "figure",
  "figcaption"
]);
var ALLOWED_INLINE_TAGS = /* @__PURE__ */ new Set([
  "a",
  "b",
  "strong",
  "i",
  "em",
  "u",
  "s",
  "span",
  "br",
  "code"
]);
var ALLOWED_ATTRIBUTES = {
  a: ["href", "title", "target", "rel"],
  img: ["src", "alt", "width", "height", "loading"],
  td: ["colspan", "rowspan"],
  th: ["colspan", "rowspan", "scope"],
  "*": ["class", "id", "lang", "dir"]
};
var SAFE_PROTOCOLS = /* @__PURE__ */ new Set(["http:", "https:", "mailto:"]);
var isUrlSafe = (url) => {
  try {
    const parsed = new URL(url, window.location.href);
    return SAFE_PROTOCOLS.has(parsed.protocol);
  } catch {
    return false;
  }
};
var sanitizeNode = (node, allowedTags) => {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.cloneNode();
  }
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }
  const element = node;
  const tagName = element.tagName.toLowerCase();
  if (!allowedTags.has(tagName)) {
    const fragment = document.createDocumentFragment();
    node.childNodes.forEach((child) => {
      const sanitized = sanitizeNode(child, allowedTags);
      if (sanitized) {
        fragment.appendChild(sanitized);
      }
    });
    return fragment;
  }
  const newElement = document.createElement(tagName);
  const allowedAttrs = [
    ...ALLOWED_ATTRIBUTES[tagName] ?? [],
    ...ALLOWED_ATTRIBUTES["*"] ?? []
  ];
  allowedAttrs.forEach((attr) => {
    const value = element.getAttribute(attr);
    if (value === null) {
      return;
    }
    if ((attr === "href" || attr === "src") && !isUrlSafe(value)) {
      return;
    }
    newElement.setAttribute(attr, value);
  });
  if (tagName === "a" && newElement.getAttribute("target") === "_blank") {
    newElement.setAttribute("rel", "noopener noreferrer");
  }
  node.childNodes.forEach((child) => {
    const sanitized = sanitizeNode(child, allowedTags);
    if (sanitized) {
      newElement.appendChild(sanitized);
    }
  });
  return newElement;
};
var toHtmlString = (fragment) => {
  const wrapper = document.createElement("div");
  wrapper.appendChild(fragment.cloneNode(true));
  return wrapper.innerHTML;
};
var sanitizeHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const fragment = document.createDocumentFragment();
  doc.body.childNodes.forEach((child) => {
    const sanitized = sanitizeNode(child, ALLOWED_BLOCK_TAGS);
    if (sanitized) {
      fragment.appendChild(sanitized);
    }
  });
  return toHtmlString(fragment);
};
var sanitizeInlineHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const fragment = document.createDocumentFragment();
  doc.body.childNodes.forEach((child) => {
    const sanitized = sanitizeNode(child, ALLOWED_INLINE_TAGS);
    if (sanitized) {
      fragment.appendChild(sanitized);
    }
  });
  return toHtmlString(fragment);
};

// src/components/FieldMessages/FieldMessages.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var FieldMessages = ({
  hint,
  hintId,
  help,
  helpHtml,
  helpId,
  errorMessage,
  errorId,
  hasError = false
}) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
  hint && hintId && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { id: hintId, className: "ctx-form-hint", children: hint }),
  helpHtml && helpId && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      id: helpId,
      className: "ctx-form-help",
      dangerouslySetInnerHTML: { __html: helpHtml }
    }
  ),
  help && helpId && !helpHtml && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { id: helpId, className: "ctx-form-help", children: help }),
  hasError && errorMessage && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { id: errorId, role: "alert", className: "error-message", children: errorMessage })
] });

// src/components/Fields/Checkbox/Checkbox.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
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
    "ctx-form-field",
    variant === "toggle" ? "toggle" : "checkbox",
    hasError ? "error" : ""
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: classes, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { htmlFor: inputId, className: "ctx-form-checkbox-label", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "toggle__control", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
        variant === "toggle" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "toggle__switch", "aria-hidden": "true" })
      ] }),
      label && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "span",
          {
            className: "ctx-form-checkbox-label__text",
            dangerouslySetInnerHTML: { __html: sanitizeInlineHtml(label) }
          }
        ),
        required && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "ctx-form-label__required", "aria-hidden": "true" })
      ] })
    ] }),
    help && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_element2 = require("@wordpress/element");

// src/components/FieldWrapper/FieldWrapper.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
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
}) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { ref: containerRef, className, children: [
  label && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("label", { htmlFor: labelFor, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: label }),
    required && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "ctx-form-label__required", "aria-hidden": "true" })
  ] }),
  children,
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var import_jsx_runtime5 = require("react/jsx-runtime");
var Combobox = (props) => {
  const {
    label = "",
    name = "",
    width = 6,
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
  const listboxId = `${inputId}-listbox`;
  const helpId = help ? `${inputId}-help` : void 0;
  const errorId = `${inputId}-error`;
  const wrapperRef = (0, import_element2.useRef)(null);
  const inputRef = (0, import_element2.useRef)(null);
  const [touched, setTouched] = (0, import_element2.useState)(false);
  const [isOpen, setIsOpen] = (0, import_element2.useState)(false);
  const [inputValue, setInputValue] = (0, import_element2.useState)(value);
  const [highlightedIndex, setHighlightedIndex] = (0, import_element2.useState)(-1);
  (0, import_element2.useEffect)(() => {
    setInputValue(value);
    if (!value || options.includes(value)) {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  }, [options, value]);
  (0, import_element2.useEffect)(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) {
      return;
    }
    const handleFocusOut = () => {
      closeIfFocusLeft();
    };
    wrapper.addEventListener("focusout", handleFocusOut);
    return () => {
      wrapper.removeEventListener("focusout", handleFocusOut);
    };
  }, []);
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
  const totalItems = filteredOptions.length + (clearEnabled ? 1 : 0);
  const hasError = !!error;
  const errorMessage = error ?? (formTouched || touched ? customErrorMessage : void 0);
  const describedBy = [helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx-form-field",
    "combobox",
    required ? "input--required" : "",
    hasError ? "error" : ""
  ].filter(Boolean).join(" ");
  const activeDescendant = isOpen && highlightedIndex >= 0 ? clearEnabled && highlightedIndex === 0 ? `${inputId}-option-clear` : `${inputId}-option-${clearEnabled ? highlightedIndex - 1 : highlightedIndex}` : void 0;
  const openList = () => {
    if (disabled) return;
    setIsOpen(true);
  };
  const closeList = () => {
    setIsOpen(false);
    setHighlightedIndex(-1);
  };
  const commitSelection = (selectedValue) => {
    setInputValue(selectedValue);
    onChange(selectedValue);
    closeList();
  };
  const clearSelection = () => {
    setInputValue("");
    onChange("");
    closeList();
  };
  const handleInputChange = (event) => {
    const nextValue = event.currentTarget.value;
    setInputValue(nextValue);
    setIsOpen(true);
    setHighlightedIndex(-1);
    onChange(nextValue);
  };
  const handleFocus = () => {
    openList();
  };
  const closeIfFocusLeft = () => {
    window.setTimeout(() => {
      if (!wrapperRef.current?.contains(document.activeElement)) {
        setTouched(true);
        closeList();
      }
    }, 0);
  };
  const handleKeyDown = (event) => {
    if (disabled) return;
    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();
        if (!isOpen) {
          openList();
        }
        setHighlightedIndex(
          (prev) => prev < 0 ? 0 : Math.min(prev + 1, totalItems - 1)
        );
        break;
      }
      case "ArrowUp": {
        event.preventDefault();
        if (!isOpen) {
          openList();
        }
        setHighlightedIndex(
          (prev) => prev < 0 ? totalItems - 1 : Math.max(prev - 1, 0)
        );
        break;
      }
      case "Home": {
        if (!isOpen || totalItems === 0) return;
        event.preventDefault();
        setHighlightedIndex(0);
        break;
      }
      case "End": {
        if (!isOpen || totalItems === 0) return;
        event.preventDefault();
        setHighlightedIndex(totalItems - 1);
        break;
      }
      case "Enter": {
        if (isOpen && highlightedIndex >= 0) {
          event.preventDefault();
          if (clearEnabled && highlightedIndex === 0) {
            clearSelection();
            break;
          }
          const optionIndex = clearEnabled ? highlightedIndex - 1 : highlightedIndex;
          if (filteredOptions[optionIndex]) {
            commitSelection(filteredOptions[optionIndex]);
          }
        }
        break;
      }
      case "Escape": {
        if (isOpen) {
          event.preventDefault();
          closeList();
        }
        break;
      }
    }
  };
  const handleOptionMouseDown = (event, selectedValue) => {
    event.preventDefault();
    commitSelection(selectedValue);
    inputRef.current?.focus();
  };
  const handleClearMouseDown = (event) => {
    event.preventDefault();
    clearSelection();
    inputRef.current?.focus();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    FieldWrapper_default,
    {
      containerRef: wrapperRef,
      className: classes,
      label,
      required,
      labelFor: inputId,
      help,
      helpId,
      errorMessage,
      errorId,
      hasError: hasError && (touched || formTouched),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            ref: inputRef,
            id: inputId,
            name: name || void 0,
            type: "text",
            role: "combobox",
            value: inputValue,
            placeholder,
            required,
            disabled,
            autoComplete: "off",
            "aria-describedby": describedBy,
            "aria-required": required || void 0,
            "aria-invalid": hasError || void 0,
            "aria-errormessage": hasError && errorMessage ? errorId : void 0,
            "aria-expanded": isOpen,
            "aria-controls": listboxId,
            "aria-haspopup": "listbox",
            "aria-autocomplete": "list",
            "aria-activedescendant": activeDescendant,
            onChange: handleInputChange,
            onFocus: handleFocus,
            onKeyDown: handleKeyDown
          }
        ),
        isOpen && !disabled && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { id: listboxId, role: "listbox", className: "ctx-combobox-listbox", children: [
          clearEnabled && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "button",
            {
              type: "button",
              role: "option",
              tabIndex: -1,
              "aria-selected": false,
              className: highlightedIndex === 0 ? "selected" : "",
              id: `${inputId}-option-clear`,
              onMouseEnter: () => setHighlightedIndex(0),
              onMouseDown: handleClearMouseDown,
              children: clearLabel
            }
          ),
          filteredOptions.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "button",
            {
              type: "button",
              tabIndex: -1,
              id: `${inputId}-option-${index}`,
              role: "option",
              "aria-selected": inputValue === option,
              className: highlightedIndex === (clearEnabled ? index + 1 : index) ? "selected" : "",
              onMouseEnter: () => setHighlightedIndex(clearEnabled ? index + 1 : index),
              onMouseDown: (event) => handleOptionMouseDown(event, option),
              children: renderOption ? renderOption(option, {
                highlighted: highlightedIndex === (clearEnabled ? index + 1 : index),
                selected: inputValue === option
              }) : option
            },
            option
          )),
          filteredOptions.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "muted", role: "presentation", children: noResultsLabel })
        ] })
      ]
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
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
Country.defaultProps = {
  label: "",
  placeholder: "",
  name: "",
  required: false,
  width: 6,
  region: "world"
};
var Country_default = Country;

// src/components/Fields/Hidden/Hidden.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var HiddenInput = ({ defaultValue = "", name = "" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { defaultValue, name, type: "hidden" });
};
var Hidden_default = HiddenInput;

// src/components/Fields/Input/Input.tsx
var import_element4 = require("@wordpress/element");
var import_jsx_runtime8 = require("react/jsx-runtime");
var TextInput = (props) => {
  const {
    label = "",
    placeholder = "",
    name = "",
    required = false,
    autoComplete = "",
    pattern = null,
    width = 6,
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
    value
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
    "ctx-form-field",
    "input",
    required ? "input--required" : "",
    hasError ? "error" : ""
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
      )
    }
  );
};
var Input_default = TextInput;

// src/components/Fields/Radio/Radio.tsx
var import_element5 = require("@wordpress/element");
var import_jsx_runtime9 = require("react/jsx-runtime");
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
    "ctx-form-field",
    "radio",
    required ? "radio--required" : "",
    hasError ? "error" : ""
  ].filter(Boolean).join(" ");
  const handleChange = (event) => {
    onChange(event.currentTarget.value);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: classes, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "fieldset",
      {
        className: "ctx-radio-group",
        "aria-describedby": describedBy,
        "aria-invalid": hasError || void 0,
        children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("legend", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: label }),
            required && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "ctx-form-label__required", "aria-hidden": "true" })
          ] }),
          (Array.isArray(options) ? options.map((option) => ({
            value: option,
            label: option
          })) : Object.entries(options ?? {}).map(([optionValue, optionLabel]) => ({
            value: optionValue,
            label: optionLabel
          }))).map((option, index) => {
            const optionId = `${fieldId}-${index}`;
            return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { htmlFor: optionId, children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: option.label })
            ] }, optionId);
          })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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

// src/components/Fields/Range/Range.tsx
var import_element6 = require("@wordpress/element");
var import_jsx_runtime10 = require("react/jsx-runtime");
var RangeInput = (props) => {
  const {
    label,
    name,
    required,
    width,
    min,
    max,
    disabled,
    hasTicks,
    hasLabels,
    onChange,
    value
  } = props;
  const rangeRef = (0, import_element6.useRef)(null);
  const valueDisplayId = `${name}-value`;
  const onChangeHandler = (event) => {
    onChange(event.target.value);
  };
  const rangeValue = parseInt(value) || min;
  const classes = [
    "ctx-form-field",
    "range",
    "range--ticks",
    required ? "input--required" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: classes, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { htmlFor: name, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "range__set", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "range__control", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "input",
          {
            id: name,
            name,
            required,
            "aria-valuemin": min,
            "aria-valuemax": max,
            "aria-valuenow": rangeValue,
            "aria-controls": valueDisplayId,
            disabled,
            type: "range",
            max,
            min,
            style: {
              backgroundSize: (rangeValue - min) * 100 / (max - min) + "% 100%"
            },
            ref: rangeRef,
            onChange: onChangeHandler,
            value
          }
        ),
        hasTicks && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "range__ticks", "aria-hidden": "true", children: [...Array(max - min + 1)].map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "range__tick" }, index)) }),
        hasLabels && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "range__labels", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "range__label", children: min }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "range__label", children: max })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { id: valueDisplayId, className: "range__value", "aria-live": "polite", children: rangeValue })
    ] })
  ] });
};
RangeInput.defaultProps = {
  label: "",
  placeholder: "0",
  name: "",
  required: false,
  width: 6,
  min: 0,
  max: 100,
  hasLabels: false,
  hasTicks: false
};
var Range_default = RangeInput;

// src/components/Fields/Select/Select.tsx
var import_element7 = require("@wordpress/element");
var import_jsx_runtime11 = require("react/jsx-runtime");
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
    width = 6,
    value,
    formTouched = false,
    emptyOptionLabel = "Make a selection"
  } = props;
  const [touched, setTouched] = (0, import_element7.useState)(false);
  const selectRef = (0, import_element7.useRef)(null);
  const reactId = (0, import_element7.useId)();
  const selectId = name || `select-${reactId}`;
  const helpId = help ? `${selectId}-help` : void 0;
  const hintId = hint ? `${selectId}-hint` : void 0;
  const errorId = `${selectId}-error`;
  const isTouched = formTouched || touched;
  const nativeInvalid = !!selectRef.current && !selectRef.current.validity.valid;
  const hasError = !!error || nativeInvalid && isTouched;
  const errorMessage = error ?? customErrorMessage ?? (isTouched ? selectRef.current?.validationMessage : void 0);
  const describedBy = [hintId, helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx-form-field",
    "select",
    required ? "select--required" : "",
    hasError ? "error" : ""
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
  const handleChange = (event) => {
    if (customError) {
      event.currentTarget.setCustomValidity("");
    }
    onChange(event.currentTarget.value);
  };
  const handleBlur = () => {
    setTouched(true);
  };
  const handleInvalid = (event) => {
    if (customError) {
      event.currentTarget.setCustomValidity(customError);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "select",
        {
          ref: selectRef,
          id: selectId,
          name: name || void 0,
          required,
          disabled,
          value,
          "aria-required": required || void 0,
          "aria-invalid": hasError || void 0,
          "aria-describedby": describedBy,
          "aria-errormessage": hasError && errorMessage ? errorId : void 0,
          onChange: handleChange,
          onBlur: handleBlur,
          onInvalid: handleInvalid,
          children: [
            hasEmptyOption && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "", disabled: required, children: emptyOptionLabel }),
            normalizedOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: option.value, children: option.label }, option.value))
          ]
        }
      )
    }
  );
};
var Select_default = Select;

// src/components/Fields/Stepper/Stepper.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
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
  const canDecrement = !disabled && value > min;
  const canIncrement = !disabled && value < max;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: ["ctx-stepper", className].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "button",
      {
        type: "button",
        className: "ctx-stepper__button",
        onClick: () => onChange(Math.max(min, value - step)),
        disabled: !canDecrement,
        "aria-label": decrementLabel,
        "data-testid": decrementTestId,
        children: "-"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "span",
      {
        className: "ctx-stepper__value",
        "aria-live": "polite",
        "data-testid": valueTestId,
        children: value
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "button",
      {
        type: "button",
        className: "ctx-stepper__button",
        onClick: () => onChange(Math.min(max, value + step)),
        disabled: !canIncrement,
        "aria-label": incrementLabel,
        "data-testid": incrementTestId,
        children: "+"
      }
    )
  ] });
}

// src/components/Flex/Flex.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
var import_jsx_runtime14 = require("react/jsx-runtime");
var Submit = (props) => {
  const { label, width, alignment, disabled, placeholder } = props;
  const className = "ctx-form-field";
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    Flex,
    {
      className,
      align: "center",
      justify: alignment === "right" ? "flex-end" : alignment === "center" ? "center" : "flex-start",
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "input",
        {
          className: "ctx-button",
          type: props.type ?? "submit",
          value: label || placeholder,
          disabled
        }
      )
    }
  );
};
Submit.defaultProps = {
  label: "",
  width: 6
};
var Submit_default = Submit;

// src/components/Fields/TextArea/TextArea.tsx
var import_element8 = require("@wordpress/element");
var import_jsx_runtime15 = require("react/jsx-runtime");
var TextArea = (props) => {
  const {
    label = "",
    placeholder = "",
    name = "",
    required = false,
    width = 6,
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
    "ctx-form-field",
    "textarea",
    required ? "input--required" : "",
    hasError ? "error" : ""
  ].filter(Boolean).join(" ");
  const handleChange = (event) => {
    onChange(event.currentTarget.value);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
var import_jsx_runtime16 = require("react/jsx-runtime");
var HTMLBlock = ({ content = "", role }) => {
  const classes = ["ctx-content-block", "core-block"].join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "div",
    {
      className: classes,
      role,
      dangerouslySetInnerHTML: {
        __html: sanitizeHtml(content)
      }
    }
  );
};
var HtmlBlock_default = HTMLBlock;

// src/components/InputField/InputField.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var InputField = (props) => {
  const { type, onChange, disabled } = props;
  const base = {
    name: props.name,
    label: props.label ?? "",
    width: props.width ?? 6,
    required: props.required ?? false,
    disabled,
    formTouched: props.formTouched,
    customErrorMessage: props.customErrorMessage,
    placeholder: props.placeholder ?? ""
  };
  switch (type) {
    case "select":
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        Radio_default,
        {
          ...base,
          options: Array.isArray(props.options) ? props.options : [],
          value: props.value,
          onChange
        }
      );
    case "textarea":
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        Range_default,
        {
          ...base,
          type,
          min: props.min ?? 0,
          max: props.max ?? 100,
          hasTicks: props.hasTicks ?? false,
          hasLabels: props.hasLabels ?? false,
          value: props.value,
          onChange
        }
      );
    case "html":
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(HtmlBlock_default, { content: props.content, width: props.width });
    case "hidden":
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        Hidden_default,
        {
          name: props.name,
          defaultValue: typeof props.defaultValue === "string" ? props.defaultValue : void 0
        }
      );
    case "submit":
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        Submit_default,
        {
          label: props.label ?? "",
          width: props.width ?? 6,
          alignment: props.alignment ?? "left",
          placeholder: props.placeholder,
          disabled,
          type: "submit"
        }
      );
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
          value: props.value,
          onChange
        }
      );
  }
};
var InputField_default = InputField;

// src/components/FormFields/FormFields.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "ctx-form-fields", children: visibleFields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    "div",
    {
      className: `ctx-form-fields__item ctx-width--${field.width ?? 6}`,
      "data-testid": field.testId,
      children: [
        field.description && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "ctx-form-field-description", children: field.description }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
var import_jsx_runtime19 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_jsx_runtime19.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    "form",
    {
      className: classes,
      ref: formRef,
      onSubmit: handleSubmit,
      onInvalid: () => setTouched(true),
      onChange: onFormChange,
      onReset: resetForm,
      children: [
        status === "ERROR" && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          "div",
          {
            role: "alert",
            className: "ctx-form__response ctx-form__response--error",
            dangerouslySetInnerHTML: {
              __html: sanitizeHtml(response?.message?.html ?? "")
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          "div",
          {
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
            dangerouslySetInnerHTML: {
              __html: sanitizeHtml(response?.message?.html ?? "<p>Success</p>")
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
  ) });
};
var Form_default = Form;

// src/index.ts
var index_default = Form_default;
//# sourceMappingURL=index.js.map
