type TextInputProps = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    help: string;
    pattern: string;
    width: number;
    disabled: boolean;
    error: string;
    value: string;
    onChange: (value: string) => void;
};
declare const TextInput: {
    (props: TextInputProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        label: string;
        placeholder: string;
        name: string;
        required: boolean;
        width: number;
    };
};
export default TextInput;
