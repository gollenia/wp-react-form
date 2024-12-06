import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from '@wordpress/element';
const RangeInput = (props) => {
    const { label = '', placeholder = '0', name = '', required = false, width = 6, min = 0, max = 100, disabled = false, hasTicks = false, hasLabels = false, onChange, type, value, className = '', tabIndex, id, } = props;
    const [rangeValue, setRangeValue] = useState(parseInt(placeholder));
    const rangeRef = useRef(null);
    const onChangeHandler = (event) => {
        setRangeValue(parseInt(event.target.value));
        onChange(event.target.value);
    };
    const classes = [
        'ctx-form-field',
        'range',
        className,
        hasTicks ? 'range--ticks' : '',
        'input--width-' + width,
        required ? 'input--required' : '',
    ]
        .join(' ')
        .trim();
    const rangeStyle = {
        backgroundSize: ((rangeValue - min) * 100) / (max - min) + '% 100%',
    };
    return (_jsxs("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, children: [_jsx("label", { children: label }), _jsxs("div", { className: "range__set", children: [_jsxs("div", { className: "range__control", children: [_jsx("input", { name: name, required: required, disabled: disabled, type: "range", max: max, min: min, style: rangeStyle, ref: rangeRef, onChange: onChangeHandler, value: value, tabIndex: tabIndex, id: id }), hasTicks && (_jsx("div", { className: "range__ticks", children: [...Array(max - min + 1)].map((e, i) => {
                                    return (_jsx("div", { className: "range__tick" }, i));
                                }) })), hasLabels && (_jsxs("div", { className: "range__labels", children: [_jsx("span", { className: "range__label", children: min }), _jsx("span", { className: "range__label", children: max })] }))] }), _jsx("span", { className: "range__value", children: rangeValue })] })] }));
};
export default RangeInput;
