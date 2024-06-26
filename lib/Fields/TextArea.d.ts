export type TextAreaProps = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    width: number;
    disabled: boolean;
    rows: number;
    formTouched?: boolean;
    customErrorMessage?: string;
    onChange: (value: string) => void;
};
declare const TextArea: {
    (props: TextAreaProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        label: string;
        placeholder: string;
        name: string;
        required: boolean;
        width: number;
        rows: number;
    };
};
export default TextArea;
