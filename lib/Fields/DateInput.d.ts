type MailInputProps = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    width: number;
    value: string;
    min: string;
    help: boolean;
    max: string;
    disabled: boolean;
    onChange: (value: string) => void;
};
declare const MailInput: {
    (props: MailInputProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        label: string;
        placeholder: string;
        name: string;
        required: boolean;
        width: number;
        help: boolean;
        min: string;
        max: string;
    };
};
export default MailInput;
