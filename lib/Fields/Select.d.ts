type Props = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    width: number;
    options: Array<string>;
    hasEmptyOption: boolean;
    help: string;
    hint: string;
    disabled: boolean;
    multiSelect: boolean;
    onChange: (value: string) => void;
};
declare const Select: {
    (props: Props): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        label: string;
        placeholder: string;
        name: string;
        required: boolean;
        width: number;
        region: string;
    };
};
export default Select;
