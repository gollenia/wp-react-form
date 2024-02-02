export type RadioProps = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    width: number;
    options?: Array<string>;
    disabled: boolean;
    onChange: (value: string) => void;
};
declare const Radio: {
    (props: RadioProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        label: string;
        placeholder: string;
        name: string;
        options: never[];
        required: boolean;
        width: number;
        region: string;
    };
};
export default Radio;
