import { jsx as _jsx } from "react/jsx-runtime";
const HtmlBlock = (props) => {
    const { content, width } = props;
    const classes = ['core-block', 'grid__column--span-' + width].join(' ');
    return (_jsx("div", { className: classes, dangerouslySetInnerHTML: { __html: content } }));
};
export default HtmlBlock;
