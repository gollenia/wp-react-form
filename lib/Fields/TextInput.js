import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TextInput = (props) => {
    const { value, label, placeholder, name, pattern, required, width, disabled, help, onChange, } = props;
    const patternAttribute = (() => {
        if (!pattern)
            return '';
        switch (pattern) {
            case 'numbers':
                return '[0-9\\s]+';
            case 'letters':
                return '[a-zA-Z\\u00C0-\\u024F\\s]+';
            case 'letters-dots-dashes':
                return '[a-zA-Z\\u00C0-\\u024F\\-\\.\\s]+';
            case 'alphanumeric':
                return '[a-zA-Z0-9\\u00C0-\\u024F\\s]+';
            case 'alphanumeric-dots-dashes':
                return '[a-zA-Z0-9\\u00C0-\\u024F\\-\\.\\s]+';
        }
        return '';
    })();
    const onChangeHandler = (event) => {
        onChange(event.target.value);
    };
    const setInvalidity = (event) => {
        if (!props.error)
            return;
        event.target.setCustomValidity(props.error);
    };
    const classes = [
        'input',
        'field--span-' + width,
        required ? 'input--required' : '',
    ].join(' ');
    return (_jsxs("div", { className: classes, children: [_jsx("label", { children: label }), _jsx("input", { value: value, name: name, autoComplete: help, required: required, onInvalid: setInvalidity, disabled: disabled, placeholder: placeholder, pattern: patternAttribute, type: "text", onChange: onChangeHandler })] }));
};
TextInput.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    required: false,
    width: 6,
};
export default TextInput;
