import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Select = (props) => {
    const { onChange, options, hasEmptyOption, help, hint, disabled, placeholder, multiSelect, required, label, name, width } = props;
    const classes = [
        'select',
        'field--span-' + width,
        props.required ? 'select--required' : '',
    ].join(' ');
    const onChangeHandler = (event) => {
        onChange(event.target.value);
    };
    return (_jsxs("div", { className: classes, children: [_jsx("label", { children: label }), _jsxs("select", { name: name, required: required, onChange: onChangeHandler, autoComplete: hint, disabled: disabled, multiple: multiSelect, defaultValue: placeholder, children: [hasEmptyOption && (_jsx("option", { value: "", disabled: true, children: help !== null && help !== void 0 ? help : 'Make a selection' })), options.map((option, index) => {
                        return _jsx("option", { children: option }, index);
                    })] })] }));
};
Select.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    required: false,
    width: 6,
    region: 'world',
};
export default Select;
