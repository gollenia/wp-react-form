import { useRef } from '@wordpress/element';
import type { ChangeEvent } from 'react';
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
		hasLabels,
		onChange,
		value,
	} = props;

	const rangeRef = useRef<HTMLInputElement>(null);
	const valueDisplayId = `${name}-value`;

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	const rangeValue = parseInt(value) || min;

	const classes = [
		'ctx2-form-field',
		'ctx2-range',
		hasTicks ? 'ctx2-range--ticks' : '',
		required ? 'ctx2-range--required' : '',
	]
		.filter(Boolean)
		.join(' ');

	return (
		<div className={classes}>
			<label htmlFor={name}>{label}</label>
			<div className="ctx2-range__set">
				<div className="ctx2-range__control">
					<input
						id={name}
						name={name}
						required={required}
						aria-valuemin={min}
						aria-valuemax={max}
						aria-valuenow={rangeValue}
						aria-controls={valueDisplayId}
						disabled={disabled}
						type="range"
						max={max}
						min={min}
						style={{
							backgroundSize: `${((rangeValue - min) * 100) / (max - min)}% 100%`,
						}}
						ref={rangeRef}
						onChange={onChangeHandler}
						value={value}
					/>
					{hasTicks && (
						<div className="ctx2-range__ticks" aria-hidden="true">
							{[...Array(max - min + 1)].map((_, index) => {
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
				<span
					id={valueDisplayId}
					className="ctx2-range__value"
					aria-live="polite"
				>
					{rangeValue}
				</span>
			</div>
		</div>
	);
};

export default RangeInput;
