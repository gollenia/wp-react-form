import { createElement as _createElement } from "react";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from '@wordpress/element';
import InputField from './InputField';
import useMediaQueries from './useMediaQueries';
const Form = (props) => {
    var _a, _b, _c;
    const { data, formUrl, onSubmit, submitUrl, onChange, onStateChange, extraData, onSubmissionFinished } = props;
    const [status, setStatus] = useState('LOADING');
    const [fields, setFields] = useState([]);
    const [form, setForm] = useState({});
    const [response, setResponse] = useState();
    const { md, lg } = useMediaQueries();
    useEffect(() => {
        onStateChange === null || onStateChange === void 0 ? void 0 : onStateChange(status);
    }, [status]);
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
            setStatus('LOADED');
            const fieldTemplate = {};
            data.fields.forEach((field) => {
                fieldTemplate[field.name] = field.defaultValue;
            });
            setForm(fieldTemplate);
        });
    }, [data, formUrl]);
    if (fields.length == 0)
        return _jsx(_Fragment, {});
    const handleSubmit = (event) => {
        var _a;
        const formData = Object.assign(Object.assign({}, form), extraData);
        event.preventDefault();
        if (onSubmit) {
            onSubmit(event, formData);
            return;
        }
        if (!((_a = formRef.current) === null || _a === void 0 ? void 0 : _a.checkValidity())) {
            if (formRef.current && formRef.current.reportValidity) {
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
        setStatus('SUBMITTING');
        fetch(submitUrl, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
            var _a;
            setStatus(data.success ? 'SUCCESS' : 'ERROR');
            setResponse(data);
            onSubmissionFinished === null || onSubmissionFinished === void 0 ? void 0 : onSubmissionFinished(data);
            (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.reset();
        });
    };
    const resetForm = () => {
        setStatus('LOADED');
        const fieldTemplate = {};
        fields.forEach((field) => {
            fieldTemplate[field.name] = field.defaultValue;
        });
        setForm(fieldTemplate);
    };
    if (status == 'LOADING')
        return _jsx(_Fragment, {});
    const onFormChange = (event) => {
        if (onChange) {
            onChange(form);
        }
    };
    const style = {
        display: md ? 'grid' : 'flex',
        gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
        gridGap: '2rem',
    };
    const classes = [
        'ctx-form',
        status == 'LOADED' ? 'ctx-form--loaded' : '',
        status == 'ERROR' ? 'ctx-form--error' : '',
        status == 'SUBMITTING' ? 'ctx-form--submitting' : '',
        status == 'SUCCESS' ? 'ctx-form--submitted' : '',
    ].join(' ');
    return (_jsx(_Fragment, { children: _jsxs("form", { className: classes, ref: formRef, style: style, onSubmit: handleSubmit, onChange: onFormChange, onReset: resetForm, children: [_jsx("div", { className: `ctx-form__response ${((_a = response === null || response === void 0 ? void 0 : response.message) === null || _a === void 0 ? void 0 : _a.html) ? 'ctx-form__response--show' : ''}`, dangerouslySetInnerHTML: {
                        __html: (_c = (_b = response === null || response === void 0 ? void 0 : response.message) === null || _b === void 0 ? void 0 : _b.html) !== null && _c !== void 0 ? _c : '',
                    } }), fields.map((field, index) => {
                    return (_createElement(InputField, Object.assign({}, field, { status: status, disabled: status == 'SUBMITTING', key: index, value: form[field.name], onChange: (value) => {
                            setForm((fields) => {
                                return Object.assign(Object.assign({}, fields), { [field.name]: value });
                            });
                        } })));
                })] }) }));
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
