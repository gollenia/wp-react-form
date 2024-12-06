import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from '@wordpress/element';
const TextInput = (props) => {
    var _a, _b, _c, _d;
    const [touched, setTouched] = useState(false);
    const inputRef = useRef(null);
    const { label = '', required = false, width = 6, onChange, type = 'text', pattern = undefined, min, max, customErrorMessage, value, className = '', tabIndex, id, } = props;
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
        className,
        'ctx-form-field',
        'input',
        'input--width-' + width,
        required ? 'input--required' : '',
        !((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.validity.valid) && isTouched ? 'error' : '',
    ]
        .join(' ')
        .trim();
    const minMax = {
        minLength: min && type === 'text' ? min : undefined,
        maxLength: max && type === 'text' ? max : undefined,
        min: min && type === 'date' ? min : undefined,
        max: max && type === 'date' ? max : undefined,
    };
    return (_jsxs("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, children: [_jsx("label", { children: label }), _jsx("input", Object.assign({}, minMax, { placeholder: props.placeholder, name: props.name, required: required, onBlur: () => setTouched(true), type: type, autoComplete: props.autoComplete, disabled: props.disabled, pattern: pattern ? pattern : undefined, defaultValue: props.defaultValue, value: value, ref: inputRef, onInvalid: setInvalidity, onChange: onChangeHandler, onBeforeInput: onKeyPressHandler, tabIndex: tabIndex, id: id })), !((_b = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _b === void 0 ? void 0 : _b.validity.valid) &&
                isTouched &&
                ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.validationMessage) && (_jsx("span", { className: "error-message", children: customErrorMessage ||
                    ((_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.validationMessage) }))] }));
};
export default TextInput;
