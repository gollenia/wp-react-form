import { jsx as _jsx } from "react/jsx-runtime";
const Submit = (props) => {
    const { label, width, alignment, disabled, placeholder } = props;
    const classes = [
        'ctx-form-field',
        'flex',
        'input--width-' + width,
        'flex--align-center',
        alignment == 'right' ? 'flex--justify-end' : '',
    ].join(' ');
    const buttonText = label ? label : placeholder ? placeholder : 'Submit';
    return (_jsx("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, children: _jsx("input", { className: "button button--primary", type: "submit", value: buttonText, disabled: disabled }) }));
};
Submit.defaultProps = {
    label: '',
    width: 6,
};
export default Submit;
