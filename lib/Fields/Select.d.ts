export type SelectProps = {
    label: string;
    placeholder: any;
    name: string;
    required: boolean;
    width: number;
    options?: Array<string>;
    hasEmptyOption?: boolean;
    help?: string;
    hint?: string;
    disabled: boolean;
    multiple?: boolean;
    customError?: string;
    formTouched?: boolean;
    customErrorMessage?: string;
    onChange: (value: string) => void;
};
declare const Select: {
    (props: SelectProps): import("react/jsx-runtime").JSX.Element;
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
