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
	const canDecrement = !disabled && value > min;
	const canIncrement = !disabled && value < max;

	return (
		<div className={['ctx2-stepper', className].filter(Boolean).join(' ')}>
			<button
				type="button"
				className="ctx2-stepper__button"
				onClick={() => onChange(Math.max(min, value - step))}
				disabled={!canDecrement}
				aria-label={decrementLabel}
				data-testid={decrementTestId}
			>
				-
			</button>
			<span
				className="ctx2-stepper__value"
				aria-live="polite"
				data-testid={valueTestId}
			>
				{value}
			</span>
			<button
				type="button"
				className="ctx2-stepper__button"
				onClick={() => onChange(Math.min(max, value + step))}
				disabled={!canIncrement}
				aria-label={incrementLabel}
				data-testid={incrementTestId}
			>
				+
			</button>
		</div>
	);
}
