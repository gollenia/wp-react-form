import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from '@wordpress/element';
const Checkbox = (props) => {
    var _a, _b, _c, _d;
    const { label, width, onChange, type, value, help, toggle, customErrorMessage, } = props;
    const inputRef = useRef(null);
    const [touched, setTouched] = useState(false);
    const onChangeHandler = (event) => {
        onChange(event.target.checked);
    };
    const setInvalidity = (event) => {
        if (!props.customErrorMessage)
            return;
        event.target.setCustomValidity(props.customErrorMessage);
    };
    const isTouched = props.formTouched || touched;
    const reset = () => {
        if (!inputRef.current)
            return;
        inputRef.current.checked = false;
    };
    const classes = [
        'ctx-form-field',
        toggle ? 'toggle' : 'checkbox',
        !((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.validity.valid) && isTouched ? 'error' : '',
    ].join(' ');
    return (_jsxs("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, children: [_jsxs("label", { children: [_jsxs("div", { className: "toggle__control", children: [_jsx("input", { disabled: props.disabled, required: props.required, ref: inputRef, onClick: () => setTouched(true), checked: value, type: "checkbox", onChange: onChangeHandler, onInvalid: setInvalidity }), toggle && _jsx("span", { className: "toggle__switch" })] }), _jsx("span", { children: help !== null && help !== void 0 ? help : label })] }), isTouched &&
                !((_b = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _b === void 0 ? void 0 : _b.validity.valid) &&
                ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.validationMessage) && (_jsx("span", { className: "error-message", children: customErrorMessage ||
                    ((_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.validationMessage) }))] }));
};
Checkbox.defaultProps = {
    label: '',
    help: '',
    width: 6,
    disabled: false,
    required: false,
    defaultChecked: false,
    type: 'checkbox',
};
export default Checkbox;
