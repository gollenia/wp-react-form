import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const MailInput = (props) => {
    const { value, label, placeholder, name, required, help, disabled, width, min, max, onChange, } = props;
    const onChangeHandler = (event) => {
        onChange(event.target.value);
    };
    const classes = [
        'input',
        'grid__column--span-' + width,
        required ? 'input--required' : '',
    ].join(' ');
    return (_jsxs("div", { className: classes, children: [_jsx("label", { children: label }), _jsx("input", { value: value, name: name, disabled: disabled, required: required, placeholder: placeholder, autoComplete: help ? 'bday' : 'off', type: "date", max: max, min: min, onChange: onChangeHandler })] }));
};
MailInput.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    required: false,
    width: 6,
    help: true,
    min: '',
    max: '',
};
export default MailInput;
