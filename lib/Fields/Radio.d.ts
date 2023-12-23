type Props = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    width: number;
    options: Array<string>;
    disabled: boolean;
    onChange: (value: string) => void;
};
declare const Radio: {
    (props: Props): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        label: string;
        placeholder: string;
        name: string;
        required: boolean;
        width: number;
        region: string;
    };
};
export default Radio;
