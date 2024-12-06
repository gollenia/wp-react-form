import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from '@wordpress/element';
const TextArea = (props) => {
    var _a, _b, _c, _d;
    const { label = '', placeholder = '', name = '', required = false, width = 6, rows = 3, disabled = false, onChange, customErrorMessage, value, className = '', tabIndex, id, } = props;
    const textInputRef = useRef(null);
    const [touched, setTouched] = useState(false);
    const onChangeHandler = (event) => {
        onChange(event.target.value);
    };
    const isTouched = touched || props.formTouched;
    const classes = [
        'ctx-form-field',
        'textarea',
        'input--width-' + width,
        className,
        required ? 'input--required' : '',
        !((_a = textInputRef === null || textInputRef === void 0 ? void 0 : textInputRef.current) === null || _a === void 0 ? void 0 : _a.validity.valid) && isTouched ? 'error' : '',
    ]
        .join(' ')
        .trim();
    return (_jsxs("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, children: [_jsx("label", { children: label }), _jsx("textarea", { name: name, required: required, disabled: disabled, rows: rows, onBlur: () => setTouched(true), ref: textInputRef, placeholder: placeholder, onChange: onChangeHandler, tabIndex: tabIndex, value: value, id: id }), !((_b = textInputRef === null || textInputRef === void 0 ? void 0 : textInputRef.current) === null || _b === void 0 ? void 0 : _b.validity.valid) &&
                isTouched &&
                ((_c = textInputRef.current) === null || _c === void 0 ? void 0 : _c.validationMessage) && (_jsx("span", { className: "error-message", children: customErrorMessage ||
                    ((_d = textInputRef.current) === null || _d === void 0 ? void 0 : _d.validationMessage) }))] }));
};
export default TextArea;
