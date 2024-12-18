import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from '@wordpress/element';
const Radio = (props) => {
    const { onChange, options = [], name = '', disabled = false, placeholder = '', width = 6, required = false, value, className = '', id, } = props;
    const classes = [
        'ctx-form-field',
        'radio',
        'input--width-' + width,
        className,
        props.required ? 'select--required' : '',
    ]
        .join(' ')
        .trim();
    const [selection, setSelection] = useState(placeholder);
    const onChangeHandler = (event) => {
        setSelection(event.target.value);
        onChange(event.target.value);
    };
    const firstOptionInitiallyChecked = required && !selection;
    return (_jsx("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, children: _jsxs("fieldset", { name: props.name, children: [_jsx("legend", { children: props.label }), options &&
                    options.map((option, index) => {
                        return (_jsxs("label", { htmlFor: name + index, children: [_jsx("input", { checked: selection === option, onChange: (value) => {
                                        onChangeHandler(value);
                                    }, disabled: disabled, type: "radio", tabIndex: props.tabIndex, value: option, name: name, id: index == 0 ? id : undefined }), option] }, index));
                    })] }) }));
};
export default Radio;
