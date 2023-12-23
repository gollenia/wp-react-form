import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const Checkbox = (props) => {
    const { help, width, onChange, disabled, placeholder, required, toggle } = props;
    const onChangeHandler = (event) => {
        onChange(event.target.checked);
    };
    const classes = [
        toggle ? 'toggle' : 'checkbox',
        'field--span-' + width,
    ].join(' ');
    return (_jsx(_Fragment, { children: toggle ? (_jsx("div", { className: classes, children: _jsxs("label", { children: [_jsxs("div", { className: "toggle__control", children: [_jsx("input", { defaultChecked: placeholder, type: "checkbox", required: required, onChange: onChangeHandler, disabled: disabled }), _jsx("span", { className: "toggle__switch" })] }), _jsx("span", { children: help })] }) })) : (_jsx("div", { className: classes, children: _jsxs("label", { children: [_jsx("input", { defaultChecked: placeholder, type: "checkbox", required: required, onChange: onChangeHandler, disabled: disabled }), _jsx("span", { children: help })] }) })) }));
};
Checkbox.defaultProps = {
    label: '',
    help: '',
    width: 6,
};
export default Checkbox;
