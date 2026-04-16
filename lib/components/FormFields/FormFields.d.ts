import type { FieldValue, FormFieldDefinition, FormState } from '../../types';
type Props = {
    fields: FormFieldDefinition[];
    formData: Record<string, unknown>;
    errors?: Record<string, string>;
    status?: FormState;
    disabled?: boolean;
    formTouched?: boolean;
    onChange: (name: string, value: FieldValue) => void;
};
export declare function Fieldset({ fields, formData, errors, status, disabled, formTouched, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export { Fieldset as FormFields };
//# sourceMappingURL=FormFields.d.ts.map