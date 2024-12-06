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
    value: string;
    className?: string;
    tabIndex: number;
    id: string;
};
declare const TextArea: (props: TextAreaProps) => import("react/jsx-runtime").JSX.Element;
export default TextArea;
