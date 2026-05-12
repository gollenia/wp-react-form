import type { ReactNode } from 'react';
type RenderOptionState = {
    highlighted: boolean;
    selected: boolean;
};
type ComboboxProps = {
    label?: string;
    name?: string;
    width?: number;
    options: string[];
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    help?: string;
    error?: string;
    customErrorMessage?: string;
    formTouched?: boolean;
    value?: string;
    onChange: (value: string) => void;
    allowClear?: boolean;
    clearLabel?: string;
    noResultsLabel?: string;
    commitOnInput?: boolean;
    renderOption?: (option: string, state: RenderOptionState) => ReactNode;
};
declare const Combobox: (props: ComboboxProps) => import("react/jsx-runtime").JSX.Element;
export default Combobox;
export type { ComboboxProps };
//# sourceMappingURL=Combobox.d.ts.map