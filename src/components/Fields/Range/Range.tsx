import { Slider } from '@base-ui/react/slider';
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

const RangeInput = (props: RangeInputProps) => {
	const {
		label,
		name,
		required,
		min,
		max,
		disabled,
		hasTicks,
		hasLabels = false,
		showValue = true,
		onChange,
		value,
	} = props;

	const valueDisplayId = `${name}-value`;

	const numericValue = Number.parseFloat(value);
	const rangeValue = Number.isFinite(numericValue) ? numericValue : min;
	const safeMax = max === min ? min + 1 : max;
	const tickCount = Math.max(0, safeMax - min + 1);

	const classes = [
		'ctx2-form-field',
		'ctx2-range',
		hasTicks ? 'ctx2-range--ticks' : '',
		required ? 'ctx2-range--required' : '',
	]
		.filter(Boolean)
		.join(' ');

	return (
		<Slider.Root
			className={classes}
			name={name}
			min={min}
			max={safeMax}
			step={1}
			value={rangeValue}
			disabled={disabled}
			onValueChange={(nextValue) => onChange(String(nextValue))}
		>
			<label htmlFor={name}>{label}</label>
			<div className="ctx2-range__set">
				<div className="ctx2-range__control">
					<Slider.Control className="ctx2-range__slider">
						<Slider.Track className="ctx2-range__track">
							<Slider.Indicator className="ctx2-range__indicator" />
							<Slider.Thumb
								className="ctx2-range__thumb"
								inputRef={(input) => {
									if (input) {
										input.id = name;
										input.required = required;
										input.setAttribute('aria-controls', valueDisplayId);
									}
								}}
							/>
						</Slider.Track>
					</Slider.Control>
					{hasTicks && (
						<div className="ctx2-range__ticks" aria-hidden="true">
							{[...Array(tickCount)].map((_, index) => {
								const value = min + index;
								return <div className="ctx2-range__tick" key={value} />;
							})}
						</div>
					)}
					{hasLabels && (
						<div className="ctx2-range__labels" aria-hidden="true">
							<span className="ctx2-range__label">{min}</span>
							<span className="ctx2-range__label">{max}</span>
						</div>
					)}
				</div>
				{showValue && (
					<span
						id={valueDisplayId}
						className="ctx2-range__value"
						aria-live="polite"
					>
						<Slider.Value>
							{(_, values) => values[0] ?? rangeValue}
						</Slider.Value>
					</span>
				)}
			</div>
		</Slider.Root>
	);
};

export default RangeInput;
