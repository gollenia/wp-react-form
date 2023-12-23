type Props = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    width: number;
    region: string;
    lang: string;
    help: string;
    disabled: boolean;
    onChange: (value: string) => void;
};
declare const Country: {
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
export default Country;
