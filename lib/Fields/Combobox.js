import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
const Combobox = (props) => {
    var _a, _b, _c;
    const { onChange, options, hasEmptyOption, help, hint, disabled, placeholder, multiple, required, label, name, width, } = props;
    const classes = [
        'ctx-form-field',
        'select',
        'input--width-' + width,
        props.required ? 'select--required' : '',
    ].join(' ');
    const inputRef = useRef(null);
    const onChangeHandler = (event) => {
        onChange(event.target.value);
    };
    return (_jsxs("div", { className: classes, style: {
            gridColumn: `span ${width}`
        }, children: [_jsx("label", { children: label }), _jsxs("select", { name: name, required: required, onChange: onChangeHandler, autoComplete: hint, disabled: disabled, multiple: multiple, defaultValue: placeholder, children: [hasEmptyOption && (_jsx("option", { value: "", disabled: true, children: help !== null && help !== void 0 ? help : 'Make a selection' })), options &&
                        options.map((option, index) => {
                            return _jsx("option", { children: option }, index);
                        })] }), !((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.validity.valid) && ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.validationMessage) && (_jsx("span", { className: "input__error", children: (_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.validationMessage }))] }));
};
Combobox.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    required: false,
    width: 6,
    region: 'world',
};
export default Combobox;
