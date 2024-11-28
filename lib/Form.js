import { createElement as _createElement } from "react";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from '@wordpress/element';
import InputField from './InputField';
import useMediaQueries from './useMediaQueries';
const Form = (props) => {
    var _a, _b, _c, _d;
    const { data, formUrl, onSubmit, submitUrl, onChange, onStateChange, extraData, onSubmissionFinished } = props;
    const [status, setStatus] = useState('LOADING');
    const [fields, setFields] = useState([]);
    const [form, setForm] = useState({});
    const [response, setResponse] = useState();
    const [touched, setTouched] = useState(false);
    const [additionalClasses, setAdditionalClasses] = useState('');
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
            setAdditionalClasses(data.classes);
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
            setStatus(data.success ? 'SUCCESS' : 'ERROR');
            setResponse(data);
            onSubmissionFinished === null || onSubmissionFinished === void 0 ? void 0 : onSubmissionFinished(data);
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
        gap: '2rem',
        flexDirection: lg ? 'row' : 'column',
        position: 'relative',
        paddingTop: '1rem',
    };
    const classes = [
        'ctx-form',
        status == 'LOADED' ? 'ctx-form--loaded' : '',
        status == 'ERROR' ? 'ctx-form--error' : '',
        status == 'SUBMITTING' ? 'ctx-form--submitting' : '',
        status == 'SUCCESS' ? 'ctx-form--submitted' : '',
        ...additionalClasses,
    ].join(' ');
    return (_jsx(_Fragment, { children: _jsxs("form", { className: classes, ref: formRef, style: style, onSubmit: handleSubmit, onInvalid: (event) => {
                setTouched(true);
            }, onChange: onFormChange, onReset: resetForm, children: [status == 'ERROR' && ( // @ts-ignore
                _jsx("div", { className: "ctx-form__response ctx-form__response--error", dangerouslySetInnerHTML: {
                        __html: (_b = (_a = response === null || response === void 0 ? void 0 : response.message) === null || _a === void 0 ? void 0 : _a.html) !== null && _b !== void 0 ? _b : '',
                    } })), _jsx("div", { style: {
                        opacity: status == 'SUCCESS' ? 1 : 0,
                        pointerEvents: status == 'SUCCESS' ? 'all' : 'none',
                        transition: 'all 0.3s',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        zIndex: 5,
                    }, className: `ctx-form__response ${status == 'SUCCESS' ? 'ctx-form__response--show' : ''}`, dangerouslySetInnerHTML: {
                        __html: (_d = (_c = response === null || response === void 0 ? void 0 : response.message) === null || _c === void 0 ? void 0 : _c.html) !== null && _d !== void 0 ? _d : '<p>Success</p>',
                    } }), fields.map((field, index) => {
                    return (_createElement(InputField, Object.assign({}, field, { status: status, disabled: status == 'SUBMITTING', formTouched: touched, key: index, value: form[field.name], onChange: (value) => {
                            setForm((fields) => {
                                return Object.assign(Object.assign({}, fields), { [field.name]: value });
                            });
                        } })));
                })] }) }));
};
export default Form;
