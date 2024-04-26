import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from '@wordpress/element';
const TextArea = (props) => {
    var _a, _b, _c, _d;
    const { label, placeholder, name, required, width, rows, disabled, onChange, customErrorMessage, } = props;
    console.log(props);
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
        required ? 'input--required' : '',
        !((_a = textInputRef === null || textInputRef === void 0 ? void 0 : textInputRef.current) === null || _a === void 0 ? void 0 : _a.validity.valid) && isTouched ? 'error' : '',
    ].join(' ');
    return (_jsxs("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, children: [_jsx("label", { children: label }), _jsx("textarea", { name: name, required: required, disabled: disabled, rows: rows, onBlur: () => setTouched(true), ref: textInputRef, placeholder: placeholder, onChange: onChangeHandler }), !((_b = textInputRef === null || textInputRef === void 0 ? void 0 : textInputRef.current) === null || _b === void 0 ? void 0 : _b.validity.valid) &&
                isTouched &&
                ((_c = textInputRef.current) === null || _c === void 0 ? void 0 : _c.validationMessage) && (_jsx("span", { className: "error-message", children: customErrorMessage ||
                    ((_d = textInputRef.current) === null || _d === void 0 ? void 0 : _d.validationMessage) }))] }));
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
