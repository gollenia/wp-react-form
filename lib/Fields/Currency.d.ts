export type NumberInputProps = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    width: number;
    min: number;
    max: number;
    disabled: boolean;
    currency: string;
    type: 'currency';
    onChange: (value: string) => void;
    value: string;
    className: string;
    tabIndex: number;
    id: string;
};
declare const CurrencyInput: (props: NumberInputProps) => import("react/jsx-runtime").JSX.Element;
export default CurrencyInput;
