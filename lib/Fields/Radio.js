import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const Radio = (props) => {
    const { onChange, options, name, disabled, placeholder, width } = props;
    const classes = [
        'radio',
        'field--span-' + width,
        props.required ? 'select--required' : '',
    ].join(' ');
    const [selection, setSelection] = useState(placeholder);
    const onChangeHandler = (event) => {
        setSelection(event.target.value);
        onChange(event.target.value);
    };
    return (_jsx("div", { className: classes, children: _jsxs("fieldset", { name: props.name, children: [_jsx("legend", { children: props.label }), options.map((option, index) => {
                    return (_jsxs("label", { htmlFor: name + index, children: [_jsx("input", { checked: selection === option, onChange: (value) => {
                                    onChangeHandler(value);
                                }, disabled: disabled, type: "radio", value: option, name: name, id: name + index }), option] }, index));
                })] }) }));
};
Radio.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    required: false,
    width: 6,
    region: 'world',
};
export default Radio;
