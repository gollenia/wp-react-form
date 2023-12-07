import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const MailInput = (props) => {
    const { value, label, placeholder, name, required, width, disabled, onChange, } = props;
    const onChangeHandler = (event) => {
        onChange(event.target.value);
    };
    const classes = [
        'input',
        'grid__column--span-' + width,
        required ? 'input--required' : '',
    ].join(' ');
    return (_jsxs("div", { className: classes, children: [_jsx("label", { children: label }), _jsx("input", { value: value, name: name, disabled: disabled, required: required, placeholder: placeholder, type: "email", onChange: onChangeHandler })] }));
};
MailInput.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    required: false,
    width: 6,
};
export default MailInput;
