import { jsx as _jsx } from "react/jsx-runtime";
const HTMLBlock = (props) => {
    const { content, width } = props;
    const classes = ['ctx-form-field', 'core-block', 'ctx-form-field-w' + width].join(' ');
    return _jsx("div", { className: classes, dangerouslySetInnerHTML: { __html: content } });
};
export default HTMLBlock;
