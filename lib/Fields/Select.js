import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
const Select = (props) => {
    var _a, _b, _c, _d;
    const { onChange, options = [], hasEmptyOption = true, help, hint, disabled = false, placeholder = '', multiple, required, label = '', name = '', customErrorMessage, width = 6, value, } = props;
    const [touched, setTouched] = useState(false);
    const inputRef = useRef(null);
    const onChangeHandler = (event) => {
        onChange(event.target.value);
    };
    const isTouched = props.formTouched || touched;
    const classes = [
        'ctx-form-field',
        'select',
        'input--width-' + width,
        props.required ? 'select--required' : '',
        !((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.validity.valid) && isTouched ? 'error' : '',
    ].join(' ');
    const Options = () => {
        if (options && Array.isArray(options)) {
            return options.map((option, index) => {
                return _jsx("option", { children: option }, index);
            });
        }
        if (options && typeof options === 'object') {
            return Object.keys(options).map((key, index) => {
                return (_jsx("option", { value: key, children: options[key] }, index));
            });
        }
        return null;
    };
    return (_jsxs("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, children: [_jsx("label", { children: label }), _jsxs("select", { name: name, required: required, onChange: onChangeHandler, onBlur: () => setTouched(true), ref: inputRef, autoComplete: hint, disabled: disabled, multiple: multiple, defaultValue: placeholder, value: value, children: [hasEmptyOption && (_jsx("option", { value: "", disabled: true, children: help !== null && help !== void 0 ? help : 'Make a selection' })), _jsx(Options, {})] }), isTouched && !((_b = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _b === void 0 ? void 0 : _b.validity.valid) && ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.validationMessage) && (_jsx("span", { className: "error-message", children: customErrorMessage || ((_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.validationMessage) }))] }));
};
export default Select;
