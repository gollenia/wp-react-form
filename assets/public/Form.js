import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import InputField from './InputField';
const Form = (props) => {
    const { extraData, lang, data, formUrl, onSubmit, validate, submitUrl } = props;
    const [status, setStatus] = useState('LOADING');
    const [fields, setFields] = useState([]);
    const [form, setForm] = useState({});
    const [submitButton, setSubmitButton] = useState({});
    const formRef = useRef(null);
    useEffect(() => {
        if (!formUrl && data) {
            setFields(data);
            setStatus('LOADED');
            return;
        }
        fetch(formUrl)
            .then((response) => response.json())
            .then((data) => {
            setFields(data.fields);
            setSubmitButton(data.submit);
            setStatus('LOADED');
            const fieldTemplate = {};
            Object.entries(data.fields).forEach(([key, field]) => {
                fieldTemplate[key] = field.settings.defaultValue;
            });
            setForm(fieldTemplate);
        });
    }, []);
    if (fields.length == 0)
        return _jsx(_Fragment, {});
    const handleSubmit = (event) => {
        var _a;
        event.preventDefault();
        if (onSubmit) {
            onSubmit(event, form);
            return;
        }
        if (!((_a = formRef.current) === null || _a === void 0 ? void 0 : _a.checkValidity())) {
            if (formRef.current &&
                formRef.current.reportValidity) {
                formRef.current.reportValidity();
                return;
            }
        }
        if (!submitUrl) {
            console.error('wp-react-form', 'No URL or onSubmit callback provided');
            return;
        }
        if (status == 'SUBMITTING' || status == 'SUCCESS')
            return;
        const data = Object.assign({ fields: form }, extraData);
        setStatus('SUBMITTING');
        fetch(submitUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
            setStatus(data.success ? 'SUCCESS' : 'ERROR');
        });
    };
    if (status == 'LOADING')
        return _jsx(_Fragment, { children: __('Form is beeing loaded', 'gutenberg-form') });
    const classes = [
        'ctx-form form grid xl:grid--columns-6 grid--gap-8',
        status == 'LOADED' ? 'form--loaded' : '',
        status == 'ERROR' ? 'form--error' : '',
        status == 'SUBMITTING' ? 'form--submitting' : '',
        status == 'SUCCESS' ? 'form--submitted' : '',
    ].join(' ');
    return (_jsx("form", { className: classes, ref: formRef, onSubmit: handleSubmit, children: Object.entries(fields).map(([key, field], index) => {
            return (_jsx(InputField, { disabled: status == 'SUBMITTING', lang: lang, type: field.type, settings: field.settings, onChange: (value) => {
                    setForm((fields) => {
                        return Object.assign(Object.assign({}, fields), { [key]: value });
                    });
                } }, index));
        }) }));
};
Form.defaultProps = {
    id: 0,
    lang: 'en',
    data: [],
    formUrl: '',
    onSubmit: null,
    validate: true,
    submitUrl: '',
};
export default Form;
