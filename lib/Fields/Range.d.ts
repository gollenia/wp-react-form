export type NumberInputProps = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    width: number;
    min: number;
    max: number;
    range: boolean;
    disabled: boolean;
    hasTicks: boolean;
    hasLabels: boolean;
    type: 'range';
    onChange: (value: string) => void;
    value: string;
};
declare const RangeInput: (props: NumberInputProps) => import("react/jsx-runtime").JSX.Element;
export default RangeInput;
