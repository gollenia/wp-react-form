import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from '@wordpress/element';
const TextInput = (props) => {
    var _a, _b, _c, _d;
    const [touched, setTouched] = useState(false);
    const inputRef = useRef(null);
    const { label, required, width, onChange, pattern, min, max, customErrorMessage, } = props;
    const onChangeHandler = (event) => {
        onChange(event.target.value);
    };
    const onKeyPressHandler = (event) => {
        if (!pattern)
            return;
        let regex = new RegExp(pattern, 'gu');
        if (regex.test(event.data) === false) {
            event.preventDefault();
        }
    };
    const setInvalidity = (event) => {
        if (!props.customError)
            return;
        event.target.setCustomValidity(props.customError);
    };
    const isTouched = props.formTouched || touched;
    const classes = [
        'ctx-form-field',
        'input',
        'input--width-' + width,
        required ? 'input--required' : '',
        !((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.validity.valid) && isTouched ? 'error' : '',
    ].join(' ');
    return (_jsxs("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, children: [_jsx("label", { children: label }), _jsx("input", { placeholder: props.placeholder, name: props.name, required: required, onBlur: () => setTouched(true), type: props.type, autoComplete: props.autoComplete, disabled: props.disabled, pattern: props.pattern ? props.pattern : undefined, defaultValue: props.defaultValue, ref: inputRef, onInvalid: setInvalidity, onChange: onChangeHandler, onBeforeInput: onKeyPressHandler, minLength: min, maxLength: max ? max : undefined }), !((_b = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _b === void 0 ? void 0 : _b.validity.valid) &&
                isTouched &&
                ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.validationMessage) && (_jsx("span", { className: "error-message", children: customErrorMessage ||
                    ((_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.validationMessage) }))] }));
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
