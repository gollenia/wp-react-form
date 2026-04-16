import type { FieldValue, SelectOptions } from '../../../types';
export type SelectProps = {
    label?: string;
    name?: string;
    required?: boolean;
    width?: number;
    options?: SelectOptions;
    hasEmptyOption?: boolean;
    help?: string;
    hint?: string;
    disabled?: boolean;
    customError?: string;
    formTouched?: boolean;
    customErrorMessage?: string;
    error?: string;
    onChange: (value: FieldValue) => void;
    value: string | string[];
    emptyOptionLabel?: string;
};
declare const Select: (props: SelectProps) => import("react/jsx-runtime").JSX.Element;
export default Select;
//# sourceMappingURL=Select.d.ts.map