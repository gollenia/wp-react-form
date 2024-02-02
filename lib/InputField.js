import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Checkbox from './Fields/Checkbox';
import Combobox from './Fields/Combobox';
import Country from './Fields/Country';
import Hidden from './Fields/Hidden';
import HTMLBlock from './Fields/HtmlBlock';
import Input from './Fields/Input';
import NumberInput from './Fields/Number';
import Radio from './Fields/Radio';
import Select from './Fields/Select';
import Submit from './Fields/Submit';
import TextArea from './Fields/TextArea';
const InputField = (props) => {
    const { type, onChange, disabled } = props;
    const renderField = () => {
        switch (type) {
            case 'select':
                return (_jsx(Select, Object.assign({}, props, { onChange: onChange, disabled: disabled })));
            case 'radio':
            case 'options':
                return (_jsx(Radio, Object.assign({}, props, { onChange: onChange, disabled: disabled })));
            case 'textarea':
                return (_jsx(TextArea, Object.assign({}, props, { onChange: onChange, disabled: disabled })));
            case 'checkbox':
            case 'toggle':
                return (_jsx(Checkbox, Object.assign({}, props, { onChange: onChange, disabled: disabled })));
            case 'country':
                return (_jsx(Country, Object.assign({}, props, { onChange: onChange, disabled: disabled })));
            case 'combobox':
                return (_jsx(Combobox, Object.assign({}, props, { onChange: onChange, disabled: disabled })));
            case 'number':
            case 'range':
            case 'numberpicker':
                return (_jsx(NumberInput, Object.assign({}, props, { onChange: onChange, disabled: disabled })));
            case 'html':
                return _jsx(HTMLBlock, Object.assign({}, props));
            case 'hidden':
                return _jsx(Hidden, Object.assign({}, props));
            case 'submit':
                return (_jsx(Submit, Object.assign({}, props, { onChange: onChange, disabled: disabled, type: "submit" })));
            default:
                return (_jsx(Input, Object.assign({}, props, { onChange: onChange, disabled: disabled })));
        }
    };
    return _jsx(_Fragment, { children: renderField(props) });
};
export default InputField;
