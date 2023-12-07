var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from '@wordpress/element';
const Country = (props) => {
    const { onChange, lang, help, disabled, placeholder, required, name, label, } = props;
    const classes = [
        'select',
        'grid__column--span-' + props.width,
        props.required ? 'select--required' : '',
    ].join(' ');
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(placeholder);
    const fetchCountries = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`https://countries.kids-team.com/countries/${props.region}/${lang}`);
        const data = yield response.json();
        const countryList = Object.entries(data).map(([key, name], index) => {
            return { value: key, label: name };
        });
        setCountries(countryList);
    });
    useEffect(() => {
        fetchCountries();
    }, []);
    const onChangeHandler = (event) => {
        setSelectedCountry(event.target.value);
        onChange(event.target.value);
    };
    return (_jsxs("div", { className: classes, children: [_jsx("label", { children: label }), _jsxs("select", { name: name, required: required, onChange: onChangeHandler, disabled: disabled, value: selectedCountry, children: [_jsx("option", { value: "", disabled: true, children: help !== null && help !== void 0 ? help : 'Make a selection' }), countries.map((country, index) => {
                        return (_jsx("option", { value: country.value, children: country.label }, index));
                    })] })] }));
};
Country.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    required: false,
    width: 6,
    region: 'world',
};
export default Country;
