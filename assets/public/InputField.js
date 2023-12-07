import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Checkbox from './Fields/Checkbox';
import Country from './Fields/Country';
import DateInput from './Fields/DateInput';
import HtmlBlock from './Fields/HtmlBlock';
import MailInput from './Fields/MailInput';
import NumberInput from './Fields/NumberInput';
import Radio from './Fields/Radio';
import Select from './Fields/Select';
import Telephone from './Fields/Telephone';
import TextArea from './Fields/TextArea';
import TextInput from './Fields/TextInput';
const InputField = (props) => {
    const { type, settings, onChange, lang, disabled } = props;
    const renderField = (type, settings) => {
        switch (type) {
            case 'text':
                return (_jsx(TextInput, Object.assign({}, settings, { onChange: onChange, disabled: disabled })));
            case 'email':
                return (_jsx(MailInput, Object.assign({}, settings, { onChange: onChange, disabled: disabled })));
            case 'select':
                return (_jsx(Select, Object.assign({}, settings, { onChange: onChange, disabled: disabled })));
            case 'radio':
                return (_jsx(Radio, Object.assign({}, settings, { onChange: onChange, disabled: disabled })));
            case 'date':
                return (_jsx(DateInput, Object.assign({}, settings, { onChange: onChange, disabled: disabled })));
            case 'number':
                return (_jsx(NumberInput, Object.assign({}, settings, { onChange: onChange, disabled: disabled })));
            case 'textarea':
                return (_jsx(TextArea, Object.assign({}, settings, { onChange: onChange, disabled: disabled })));
            case 'tel':
                return (_jsx(Telephone, Object.assign({}, settings, { onChange: onChange, disabled: disabled })));
            case 'checkbox':
                return (_jsx(Checkbox, Object.assign({}, settings, { onChange: onChange, disabled: disabled })));
            case 'country':
                return (_jsx(Country, Object.assign({}, settings, { onChange: onChange, lang: lang, disabled: disabled })));
            case 'html':
                return _jsx(HtmlBlock, Object.assign({}, settings));
            default:
                return _jsx(_Fragment, {});
        }
    };
    return _jsx(_Fragment, { children: renderField(type, settings) });
};
export default InputField;
