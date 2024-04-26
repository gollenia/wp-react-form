import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
const Combobox = (props) => {
    const { onChange, options, hasEmptyOption, help, hint, disabled, placeholder, multiple, required, label, name, width, customErrorMessage, } = props;
    const classes = [
        'ctx-form-field',
        'select',
        'input--width-' + width,
        props.required ? 'select--required' : '',
    ].join(' ');
    const inputRef = useRef(null);
    const [inputField, setInputField] = useState('');
    const [selection, setSelection] = useState(-1);
    const [listSelect, setListSelect] = useState(-1);
    const dropdownSelect = (value) => {
        const index = options.findIndex((option) => option === value);
        setSelection(index);
        setInputField('');
        if (onChange) {
            onChange(value);
        }
    };
    const filteredOptions = () => {
        if (inputField.length === 0)
            return options;
        if (inputField.slice(-1) === '*') {
            return options.filter((option) => option
                .toLowerCase()
                .startsWith(inputField.slice(0, -1).toLowerCase()));
        }
        return options.filter((option) => option.toLowerCase().includes(inputField.toLowerCase()));
    };
    const keyPress = (event) => {
        var _a, _b;
        if (event.key === 'ArrowDown') {
            setListSelect(listSelect + 1);
        }
        if (event.key === 'ArrowUp' && listSelect !== -1)
            setListSelect(listSelect - 1);
        if (event.key === 'Enter') {
            dropdownSelect(filteredOptions()[listSelect]);
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        }
        if (event.key === 'Escape') {
            setListSelect(-1);
            (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.blur();
        }
    };
    const nullSelect = () => {
        setListSelect(-1);
        dropdownSelect('');
    };
    return (_jsxs("div", { style: {
            gridColumn: `span ${width}`,
        }, className: 'combobox ' + classes, onKeyDown: (event) => keyPress(event), children: [_jsx("input", { ref: inputRef, type: "text", onMouseOver: () => {
                    setListSelect(-1);
                }, onClick: () => { }, placeholder: selection !== -1 ? options[selection] : placeholder, value: inputField, onChange: (event) => setInputField(event.target.value) }), _jsxs("ul", { children: [help !== '' && (_jsx("li", { className: listSelect === -1 ? 'selected' : '', onMouseDown: (event) => {
                            nullSelect();
                        }, children: help })), filteredOptions().map((option, index) => {
                        return (_jsx("li", { className: listSelect === index ? 'selected' : '', onMouseDown: () => {
                                dropdownSelect(option);
                            }, children: option }, index));
                    }), filteredOptions().length === 0 && (_jsx("li", { className: "muted", children: "No Result" }))] })] }));
};
Combobox.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    options: [],
    required: false,
    width: 6,
    region: 'world',
};
export default Combobox;
