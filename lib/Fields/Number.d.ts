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
    type: 'number' | 'range' | 'numberpicker';
    onChange: (value: string) => void;
};
declare const NumberInput: {
    (props: NumberInputProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        label: string;
        placeholder: number;
        name: string;
        required: boolean;
        width: number;
        min: number;
        max: number;
        style: string;
        hasLabels: boolean;
        hasTicks: boolean;
    };
};
export default NumberInput;
