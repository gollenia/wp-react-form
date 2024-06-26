type InputFieldTypes = 'text' | 'email' | 'url' | 'color' | 'tel' | 'password' | 'search' | 'datetime-local' | 'select' | 'radio' | 'textarea' | 'checkbox' | 'country' | 'html' | 'hidden' | 'range' | 'file' | 'toggle' | 'combobox' | 'options' | 'date' | 'week' | 'month' | 'number' | 'year';
type InputProps = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    autoComplete: string;
    pattern: string | null;
    width: number;
    disabled: boolean;
    customError: string;
    defaultValue: string;
    min?: number;
    max?: number;
    customErrorMessage?: string;
    type: InputFieldTypes;
    formTouched: boolean;
    onChange: (value: any) => void;
};
declare const TextInput: {
    (props: InputProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        label: string;
        placeholder: string;
        name: string;
        required: boolean;
        width: number;
        type: string;
        pattern: null;
    };
};
export default TextInput;
export type { InputFieldTypes, InputProps };
