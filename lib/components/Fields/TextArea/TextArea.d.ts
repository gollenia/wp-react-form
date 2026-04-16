import type { FieldValue } from '../../../types';
export type TextAreaProps = {
    label?: string;
    placeholder?: string;
    name?: string;
    required?: boolean;
    width?: number;
    disabled?: boolean;
    rows?: number;
    help?: string;
    formTouched?: boolean;
    customErrorMessage?: string;
    error?: string;
    onChange: (value: FieldValue) => void;
    value: string;
};
declare const TextArea: (props: TextAreaProps) => import("react/jsx-runtime").JSX.Element;
export default TextArea;
//# sourceMappingURL=TextArea.d.ts.map