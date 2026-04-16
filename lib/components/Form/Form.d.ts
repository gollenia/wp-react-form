import type { FormEvent } from 'react';
import type { FormFieldDefinition, FormResponse, FormState, FormValues } from '../../types';
type FormProps = {
    data?: FormFieldDefinition[];
    formUrl?: string;
    onSubmit?: (event: FormEvent<HTMLFormElement>, data: FormValues) => void;
    onSubmissionFinished?: (response: FormResponse) => void;
    validate?: boolean;
    submitUrl?: string;
    extraData?: FormValues;
    onStateChange?: (state: FormState) => void;
    onChange?: (form: FormValues) => void;
};
declare const Form: (props: FormProps) => import("react/jsx-runtime").JSX.Element | null;
export default Form;
//# sourceMappingURL=Form.d.ts.map