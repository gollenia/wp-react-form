import { useRef, useState } from '@wordpress/element';

export type NumberInputProps = {
	label: string;
	placeholder: string;
	name: string;
	required: boolean;
	width: number;
	min: number;
	max: number;
	disabled: boolean;
	type: 'number';
	onChange: (value: string) => void;
	value: string;
	className: string;
	tabIndex: number;
	id: string;
};

const NumberInput = (props: NumberInputProps) => {
	const {
		label = '',
		placeholder = '0',
		name = '',
		required = false,
		width = 6,
		min = 0,
		max = 100,
		disabled = false,
		className = '',
		onChange,
		tabIndex,
		value,
		id,
	} = props;

	const [rangeValue, setRangeValue] = useState(parseInt(placeholder));
	const rangeRef = useRef(null);

	const onChangeHandler = (event: any) => {
		setRangeValue(parseInt(event.target.value));
		onChange(event.target.value);
	};

	const classes = [
		'ctx-form-field',
		className,
		'input--width-' + width,
		required ? 'input--required' : '',
	]
		.join(' ')
		.trim();

	return (
		<div
			className={classes}
			style={{
				gridColumn: `span ${width}`,
			}}
		>
			<label>{label}</label>
			<input
				type="number"
				placeholder={placeholder}
				name={name}
				required={required}
				disabled={disabled}
				onChange={(event) => onChange(event.target.value)}
				value={value}
				min={min}
				max={max}
				tabIndex={tabIndex}
				id={id}
			/>
		</div>
	);
};

export default NumberInput;
