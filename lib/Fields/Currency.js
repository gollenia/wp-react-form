import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CurrencyInput = (props) => {
    const { label = '', placeholder = '0', name = '', required = false, width = 6, min = 0, max = 1000, disabled = false, currency = '€', onChange, value, } = props;
    const onChangeHandler = (event) => {
        onChange(event.target.value);
    };
    const classes = [
        'ctx-form-field',
        'input',
        'ctx-form-currency',
        'input--width-' + width,
        required ? 'input--required' : '',
    ].join(' ');
    const inputStyle = {
        paddingLeft: '2.25rem'
    };
    const currencyStyle = {
        position: 'absolute',
        left: '1.25rem',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#aaa'
    };
    return (_jsxs("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, children: [_jsx("label", { children: label }), _jsx("i", { style: currencyStyle, className: "ctx-form-currency-symbol", children: currency }), _jsx("input", { style: inputStyle, type: "number", placeholder: placeholder, name: name, required: required, min: min, max: max, disabled: disabled, onChange: onChangeHandler, value: value, step: "0.01" })] }));
};
export default CurrencyInput;
