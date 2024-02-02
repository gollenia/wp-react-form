import { jsx as _jsx } from "react/jsx-runtime";
const Submit = (props) => {
    const { label, width, alignment, disabled } = props;
    const classes = [
        'ctx-form-field',
        'flex',
        'input--width-' + width,
        'flex--align-center',
        alignment == 'right' ? 'flex--justify-end' : '',
    ].join(' ');
    return (_jsx("div", { className: classes, children: _jsx("input", { className: "button button--primary", type: "submit", value: label, disabled: disabled }) }));
};
Submit.defaultProps = {
    label: '',
    width: 6,
};
export default Submit;
