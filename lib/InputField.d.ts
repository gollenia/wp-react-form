type InputFieldProps = {
    type: string;
    settings: {
        label: string;
        placeholder: string;
        name: string;
        required: boolean;
        width: number;
        value: string;
        disabled: boolean;
        help: string;
        options: any;
        toggle: boolean;
        defaultValue: string | boolean;
    };
    lang: string;
    disabled: boolean;
    onChange: (value: any) => void;
};
declare const InputField: any;
export default InputField;
export type { InputFieldProps };
