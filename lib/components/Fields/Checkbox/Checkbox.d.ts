import type { FieldValue } from '../../../types';
type CheckboxVariant = 'checkbox' | 'toggle';
type CheckboxProps = {
    label?: string;
    name?: string;
    width?: number;
    disabled?: boolean;
    required?: boolean;
    customErrorMessage?: string;
    error?: string;
    value: boolean;
    help?: string;
    formTouched?: boolean;
    variant?: CheckboxVariant;
    onChange: (value: FieldValue) => void;
};
declare const Checkbox: (props: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
export default Checkbox;
export type { CheckboxProps, CheckboxVariant };
//# sourceMappingURL=Checkbox.d.ts.map