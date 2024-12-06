export type NumberInputProps = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    width: number;
    min: number;
    max: number;
    disabled: boolean;
    type: 'number';
    onChange: (value: string) => void;
    value: string;
    className: string;
    tabIndex: number;
    id: string;
};
declare const NumberInput: (props: NumberInputProps) => import("react/jsx-runtime").JSX.Element;
export default NumberInput;
