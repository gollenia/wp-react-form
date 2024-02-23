import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from '@wordpress/element';
const TextArea = (props) => {
    var _a, _b, _c;
    const { label, placeholder, name, required, width, rows, disabled, onChange } = props;
    const textInputRef = useRef(null);
    const onChangeHandler = (event) => {
        onChange(event.target.value);
    };
    const classes = ['ctx-form-field', 'textarea', 'input--width-' + width, required ? 'input--required' : ''].join(' ');
    return (_jsxs("div", { className: classes, style: {
            gridColumn: `span ${width}`
        }, children: [_jsx("label", { children: label }), _jsx("textarea", { name: name, required: required, disabled: disabled, rows: rows, ref: textInputRef, placeholder: placeholder, onChange: onChangeHandler }), !((_a = textInputRef === null || textInputRef === void 0 ? void 0 : textInputRef.current) === null || _a === void 0 ? void 0 : _a.validity.valid) && ((_b = textInputRef.current) === null || _b === void 0 ? void 0 : _b.validationMessage) && (_jsx("span", { className: "input__error", children: (_c = textInputRef.current) === null || _c === void 0 ? void 0 : _c.validationMessage }))] }));
};
TextArea.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    required: false,
    width: 6,
    rows: 3,
};
export default TextArea;
