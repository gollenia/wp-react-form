import { NumberField } from '@base-ui/react/number-field';

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

export function Stepper({
	value,
	min = 0,
	max = Number.POSITIVE_INFINITY,
	step = 1,
	disabled = false,
	decrementLabel = 'Decrease value',
	incrementLabel = 'Increase value',
	onChange,
	decrementTestId,
	incrementTestId,
	valueTestId,
	className = '',
}: Props) {
	const finiteMax = Number.isFinite(max) ? max : undefined;

	return (
		<NumberField.Root
			className={['ctx2-stepper', className].filter(Boolean).join(' ')}
			value={value}
			min={min}
			max={finiteMax}
			step={step}
			disabled={disabled}
			onValueChange={(nextValue) => {
				if (nextValue !== null) {
					onChange(nextValue);
				}
			}}
		>
			<NumberField.Decrement
				className="ctx2-stepper__button"
				aria-label={decrementLabel}
				data-testid={decrementTestId}
			>
				-
			</NumberField.Decrement>
			<span
				className="ctx2-stepper__value"
				aria-live="polite"
				data-testid={valueTestId}
			>
				{value}
			</span>
			<NumberField.Increment
				className="ctx2-stepper__button"
				aria-label={incrementLabel}
				data-testid={incrementTestId}
			>
				+
			</NumberField.Increment>
		</NumberField.Root>
	);
}
