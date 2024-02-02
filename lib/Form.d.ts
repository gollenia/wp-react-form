import './style.scss';
type Response = {
    success: boolean;
    message: {
        html: string;
        attributes: {
            class: string;
        };
    };
};
type FormProps = {
    data: Array<any>;
    formUrl: string;
    onSubmit: (event: any, data: any) => void | null;
    onSubmissionFinished?: (response: Response) => void;
    validate: boolean;
    submitUrl: string;
    extraData?: any;
    onStateChange?: (state: any) => void;
    onChange?: (form: any) => void;
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
