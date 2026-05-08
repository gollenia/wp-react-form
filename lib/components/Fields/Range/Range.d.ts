import type { FieldValue } from '../../../types';
export type RangeInputProps = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    width: number;
    min: number;
    max: number;
    disabled: boolean;
    hasTicks: boolean;
    hasLabels: boolean;
    showValue?: boolean;
    type: 'number' | 'range' | 'numberpicker';
    onChange: (value: FieldValue) => void;
    value: string;
};
declare const RangeInput: (props: RangeInputProps) => import("react/jsx-runtime").JSX.Element;
export default RangeInput;
//# sourceMappingURL=Range.d.ts.map