import { jsx as _jsx } from "react/jsx-runtime";
const Submit = (props) => {
    const { label = '', width = 6, alignment, disabled = false, placeholder } = props;
    const classes = [
        'ctx-form-field',
        'flex',
        'input--width-' + width,
        'flex--align-center',
        alignment == 'right' ? 'flex--justify-end' : '',
    ].join(' ');
    return (_jsx("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, children: _jsx("input", { className: "button button--primary", type: "submit", value: label ? label : placeholder, disabled: disabled }) }));
};
export default Submit;
