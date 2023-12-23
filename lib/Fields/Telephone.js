import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from '@wordpress/element';
const TextInput = (props) => {
    const { value, label, placeholder, name, required, width, onChange, disabled, } = props;
    const textInputRef = useRef(null);
    const onChangeHandler = (event) => {
        onChange(event.target.value);
    };
    const classes = [
        'input',
        'field--span-' + width,
        required ? 'input--required' : '',
    ].join(' ');
    return (_jsxs("div", { className: classes, children: [_jsx("label", { children: label }), _jsx("input", { value: value, name: name, disabled: disabled, required: required, placeholder: placeholder, type: "tel", onChange: onChangeHandler })] }));
};
TextInput.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    required: false,
    width: 6,
};
export default TextInput;
