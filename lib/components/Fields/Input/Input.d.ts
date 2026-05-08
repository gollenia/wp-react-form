import type { FieldValue } from '../../../types';
type InputFieldTypes = 'text' | 'email' | 'url' | 'color' | 'tel' | 'password' | 'search' | 'datetime-local' | 'date' | 'week' | 'month' | 'number';
type InputProps = {
    label?: string;
    placeholder?: string;
    name?: string;
    required?: boolean;
    autoComplete?: string;
    pattern?: string | null;
    width?: number;
    disabled?: boolean;
    customError?: string;
    min?: number | string;
    max?: number | string;
    customErrorMessage?: string;
    error?: string;
    type?: InputFieldTypes;
    help?: string;
    formTouched?: boolean;
    onChange: (value: FieldValue) => void;
    value: string;
    unit?: string;
};
declare const TextInput: (props: InputProps) => import("react/jsx-runtime").JSX.Element;
export default TextInput;
export type { InputFieldTypes, InputProps };
//# sourceMappingURL=Input.d.ts.map