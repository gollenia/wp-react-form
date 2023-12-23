type Props = {
    label: string;
    help: string;
    width: number;
    disabled: boolean;
    required: boolean;
    placeholder: boolean;
    toggle: boolean;
    onChange: (value: boolean) => void;
};
declare const Checkbox: {
    (props: Props): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        label: string;
        help: string;
        width: number;
    };
};
export default Checkbox;
export type { Props as CheckboxProps };
