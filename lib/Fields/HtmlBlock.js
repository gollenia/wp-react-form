import { jsx as _jsx } from "react/jsx-runtime";
const HTMLBlock = (props) => {
    const { content, width, className = '' } = props;
    const classes = [
        className,
        'ctx-form-field',
        'core-block',
        'ctx-form-field-w' + width,
    ]
        .join(' ')
        .trim();
    return (_jsx("div", { className: classes, style: {
            gridColumn: `span ${width}`,
        }, dangerouslySetInnerHTML: { __html: content } }));
};
export default HTMLBlock;
