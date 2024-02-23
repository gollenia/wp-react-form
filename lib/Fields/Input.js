import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from '@wordpress/element';
const TextInput = (props) => {
    var _a, _b, _c, _d;
    const [touched, setTouched] = useState(false);
    const inputRef = useRef(null);
    const { label, required, width, onChange } = props;
    const onChangeHandler = (event) => {
        onChange(event.target.value);
    };
    const setInvalidity = (event) => {
        if (!props.customError)
            return;
        event.target.setCustomValidity(props.customError);
    };
    const classes = [
        'ctx-form-field',
        'input',
        'input--width-' + width,
        required ? 'input--required' : '',
        !((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.validity.valid) && touched ? 'error' : '',
    ].join(' ');
    return (_jsxs("div", { className: classes, style: {
            gridColumn: `span ${width}`
        }, children: [_jsx("label", { children: label }), _jsx("input", { placeholder: props.placeholder, name: props.name, required: required, onBlur: () => setTouched(true), type: props.type, autoComplete: props.autoComplete, disabled: props.disabled, pattern: props.pattern ? props.pattern : undefined, defaultValue: props.defaultValue, ref: inputRef, onInvalid: setInvalidity, onChange: onChangeHandler }), !((_b = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _b === void 0 ? void 0 : _b.validity.valid) && touched && ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.validationMessage) && (_jsx("span", { className: "error-message", children: (_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.validationMessage }))] }));
};
TextInput.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    required: false,
    width: 6,
    type: 'text',
    pattern: null,
};
export default TextInput;
