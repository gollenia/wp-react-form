import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from '@wordpress/element';
const TextArea = (props) => {
    const { value, label, placeholder, name, required, width, rows, disabled, onChange, } = props;
    const textInputRef = useRef(null);
    const onChangeHandler = (event) => {
        onChange(event.target.value);
    };
    const classes = [
        'textarea',
        'field--span-' + width,
        required ? 'input--required' : '',
    ].join(' ');
    return (_jsxs("div", { className: classes, children: [_jsx("label", { children: label }), _jsx("textarea", { value: value, name: name, required: required, disabled: disabled, rows: rows, placeholder: placeholder, onChange: onChangeHandler })] }));
};
TextArea.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    required: false,
    width: 6,
    rows: 3,
};
export default TextArea;
