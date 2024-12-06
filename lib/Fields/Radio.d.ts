export type RadioProps = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    width: number;
    options?: Array<string>;
    disabled: boolean;
    onChange: (value: string) => void;
    value: string;
    className: string;
    tabIndex: number;
    id: string;
};
declare const Radio: (props: RadioProps) => import("react/jsx-runtime").JSX.Element;
export default Radio;
