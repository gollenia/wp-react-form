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
	const boundedValue = Math.min(max, Math.max(min, value));
	const canDecrement = !disabled && boundedValue > min;
	const canIncrement = !disabled && boundedValue < max;

	const changeValue = (direction: -1 | 1) => {
		const nextValue = Math.min(
			max,
			Math.max(min, boundedValue + step * direction),
		);

		if (nextValue !== boundedValue) {
			onChange(nextValue);
		}
	};

	return (
		<div
			className={['ctx2-stepper', className].filter(Boolean).join(' ')}
		>
			<button
				type="button"
				className="ctx2-stepper__button"
				aria-label={decrementLabel}
				data-testid={decrementTestId}
				disabled={!canDecrement}
				onClick={() => changeValue(-1)}
			>
				-
			</button>
			<span
				className="ctx2-stepper__value"
				aria-live="polite"
				data-testid={valueTestId}
			>
				{boundedValue}
			</span>
			<button
				type="button"
				className="ctx2-stepper__button"
				aria-label={incrementLabel}
				data-testid={incrementTestId}
				disabled={!canIncrement}
				onClick={() => changeValue(1)}
			>
				+
			</button>
		</div>
	);
}
