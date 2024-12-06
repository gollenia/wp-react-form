import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from '@wordpress/element';
const NumberInput = (props) => {
    const { label = '', placeholder = '0', name = '', required = false, width = 6, min = 0, max = 100, disabled = false, className = '', onChange, tabIndex, value, id, } = props;
    const [rangeValue, setRangeValue] = useState(parseInt(placeholder));
    const rangeRef = useRef(null);
    const onChangeHandler = (event) => {
        setRangeValue(parseInt(event.target.value));
        onChange(event.target.value);
    };
    const classes = [
        'ctx-form-field',
        className,
        'input--width-' + width,
        required ? 'input--required' : '',
    ]
        .join(' ')
        .trim();
    return (_jsxs("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, children: [_jsx("label", { children: label }), _jsx("input", { type: "number", placeholder: placeholder, name: name, required: required, disabled: disabled, onChange: (event) => onChange(event.target.value), value: value, min: min, max: max, tabIndex: tabIndex, id: id })] }));
};
export default NumberInput;
