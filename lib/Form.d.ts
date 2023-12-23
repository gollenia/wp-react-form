import { InputFieldProps } from './InputField';
type FormProps = {
    extraData: any;
    lang: string;
    data: Array<InputFieldProps>;
    formUrl: string;
    onSubmit: (event: any, data: any) => void | null;
    validate: boolean;
    submitUrl: string;
};
declare const Form: {
    (props: FormProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        id: number;
        lang: string;
        data: never[];
        formUrl: string;
        onSubmit: null;
        validate: boolean;
        submitUrl: string;
    };
};
export default Form;
