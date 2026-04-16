type Props = {
    value: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    decrementLabel?: string;
    incrementLabel?: string;
    onChange: (value: number) => void;
    decrementTestId?: string;
    incrementTestId?: string;
    valueTestId?: string;
    className?: string;
};
export declare function Stepper({ value, min, max, step, disabled, decrementLabel, incrementLabel, onChange, decrementTestId, incrementTestId, valueTestId, className, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Stepper.d.ts.map