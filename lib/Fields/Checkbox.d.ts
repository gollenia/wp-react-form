type Props = {
    label: string;
    width: number;
    disabled: boolean;
    required: boolean;
    defaultChecked: boolean;
    type: 'checkbox' | 'toggle';
    name: string;
    customErrorMessage: string;
    value: boolean;
    help: string;
    toggle: boolean;
    formTouched: boolean;
    onChange: (value: any) => void;
};
declare const Checkbox: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default Checkbox;
export type { Props as CheckboxProps };
