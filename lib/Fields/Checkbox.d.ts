type Props = {
    label: string;
    width: number;
    disabled: boolean;
    required: boolean;
    defaultChecked: boolean;
    type: 'checkbox' | 'toggle';
    customErrorMessage: string;
    value: boolean;
    help: string;
    toggle: boolean;
    formTouched: boolean;
    onChange: (value: any) => void;
};
declare const Checkbox: {
    (props: Props): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        label: string;
        help: string;
        width: number;
        disabled: boolean;
        required: boolean;
        defaultChecked: boolean;
        type: string;
    };
};
export default Checkbox;
export type { Props as CheckboxProps };
