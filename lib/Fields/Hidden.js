import { jsx as _jsx } from "react/jsx-runtime";
const HiddenInput = (props) => {
    const { defaultValue, name } = props;
    return _jsx("input", { value: defaultValue, name: name, type: "hidden" });
};
HiddenInput.defaultProps = {
    name: '',
};
export default HiddenInput;
