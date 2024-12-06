import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from '@wordpress/element';
const Checkbox = (props) => {
    var _a, _b, _c, _d;
    const { label = '', width = 6, onChange, disabled = false, required = false, value, help, toggle, customErrorMessage, name, className = '', tabIndex, id, } = props;
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
        className,
    ]
        .join(' ')
        .trim();
    const Label = () => {
        const labelText = help !== null && help !== void 0 ? help : label;
        return _jsx("span", { dangerouslySetInnerHTML: { __html: labelText } });
    };
    return (_jsxs("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, children: [_jsxs("label", { children: [_jsxs("div", { className: "toggle__control", children: [_jsx("input", { disabled: disabled, required: required, ref: inputRef, onClick: () => setTouched(true), checked: value, type: "checkbox", name: name, onChange: onChangeHandler, onInvalid: setInvalidity, tabIndex: tabIndex, id: id }), toggle && _jsx("span", { className: "toggle__switch" })] }), _jsx(Label, {})] }), isTouched &&
                !((_b = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _b === void 0 ? void 0 : _b.validity.valid) &&
                ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.validationMessage) && (_jsx("span", { className: "error-message", children: customErrorMessage ||
                    ((_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.validationMessage) }))] }));
};
export default Checkbox;
