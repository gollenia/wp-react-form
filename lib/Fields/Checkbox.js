import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from '@wordpress/element';
const Checkbox = (props) => {
    var _a, _b, _c;
    const { label, width, onChange, type, value, help } = props;
    console.log('Checkbox', props);
    const inputRef = useRef(null);
    const onChangeHandler = (event) => {
        onChange(event.target.checked);
    };
    const setInvalidity = (event) => {
        if (!props.customError)
            return;
        event.target.setCustomValidity(props.customError);
    };
    const reset = () => {
        if (!inputRef.current)
            return;
        inputRef.current.checked = false;
    };
    const toggle = type === 'toggle';
    const classes = [
        'ctx-form-field',
        toggle ? 'toggle' : 'checkbox',
    ].join(' ');
    return (_jsxs("div", { className: classes, style: {
            gridColumn: `span ${width}`
        }, children: [_jsxs("label", { children: [_jsxs("div", { className: "toggle__control", children: [_jsx("input", { disabled: props.disabled, required: props.required, ref: inputRef, checked: value, type: "checkbox", onChange: onChangeHandler, onInvalid: setInvalidity }), toggle && _jsx("span", { className: "toggle__switch" })] }), _jsx("span", { children: help !== null && help !== void 0 ? help : label })] }), !((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.validity.valid) &&
                ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.validationMessage) && (_jsx("span", { className: "input__error", children: (_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.validationMessage }))] }));
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
