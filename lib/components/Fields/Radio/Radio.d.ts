import type { FieldValue, SelectOptions } from '../../../types';
export type RadioProps = {
    label?: string;
    name?: string;
    required?: boolean;
    width?: number;
    options?: SelectOptions;
    disabled?: boolean;
    help?: string;
    error?: string;
    customErrorMessage?: string;
    formTouched?: boolean;
    onChange: (value: FieldValue) => void;
    value: string;
};
declare const Radio: (props: RadioProps) => import("react/jsx-runtime").JSX.Element;
export default Radio;
//# sourceMappingURL=Radio.d.ts.map