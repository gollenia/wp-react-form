import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from '@wordpress/element';
const browserLanguage = navigator.language.split('-')[0];
const Country = (props) => {
    var _a, _b, _c, _d;
    const { onChange, disabled = false, placeholder = '', required, name = '', label = '', width = 6, region = 'world', help, customErrorMessage, value } = props;
    const inputRef = useRef(null);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(placeholder);
    const [touched, setTouched] = useState(false);
    useEffect(() => {
        fetch(`https://countries.kids-team.com/countries/${region}/${browserLanguage}`)
            .then((response) => response.json())
            .then((data) => {
            const countryList = Object.entries(data).map(([key, name], index) => {
                return { value: key, label: name };
            });
            setCountries(countryList);
        });
    }, []);
    const onChangeHandler = (event) => {
        setSelectedCountry(event.target.value);
        onChange(event.target.value);
    };
    const isTouched = props.formTouched || touched;
    const classes = [
        'ctx-form-field',
        'select',
        'input--width-' + width,
        props.required ? 'select--required' : '',
        !((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.validity.valid) && isTouched ? 'error' : '',
    ].join(' ');
    return (_jsxs("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, children: [_jsx("label", { children: label }), _jsxs("select", { name: name, required: required, disabled: disabled, onBlur: () => setTouched(true), onChange: onChangeHandler, ref: inputRef, value: selectedCountry, children: [_jsx("option", { value: "", disabled: true, children: help !== null && help !== void 0 ? help : 'Make a selection' }), countries.map((country, index) => {
                        return (_jsx("option", { value: country.value, children: country.label }, index));
                    })] }), isTouched && !((_b = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _b === void 0 ? void 0 : _b.validity.valid) && ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.validationMessage) && (_jsx("span", { className: "error-message", children: customErrorMessage || ((_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.validationMessage) }))] }));
};
export default Country;
