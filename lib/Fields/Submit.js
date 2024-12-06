import { jsx as _jsx } from "react/jsx-runtime";
const Submit = (props) => {
    const { label = '', width = 6, alignment, disabled = false, placeholder, className = '', id, } = props;
    const classes = [
        'ctx-form-field',
        'flex',
        'input--width-' + width,
        'flex--align-center',
        className,
        alignment == 'right' ? 'flex--justify-end' : '',
    ]
        .join(' ')
        .trim();
    return (_jsx("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, children: _jsx("input", { className: "button button--primary", type: "submit", value: label ? label : placeholder, disabled: disabled, tabIndex: props.tabIndex, id: id }) }));
};
export default Submit;
