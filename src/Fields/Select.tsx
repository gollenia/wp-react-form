import { useRef, useState } from 'react';

export type SelectProps = {
	label: string;
	placeholder: any;
	name: string;
	required: boolean;
	width: number;
	options?: Array<string> | Object;
	hasEmptyOption?: boolean;
	help?: string;
	hint?: string;
	disabled: boolean;
	multiple?: boolean;
	customError?: string;
	formTouched?: boolean;
	customErrorMessage?: string;
	onChange: (value: string) => void;
	value: string;
	className?: string;
	tabIndex: number;
	id: string;
};

const Select = (props: SelectProps) => {
	const {
		onChange,
		options = [],
		hasEmptyOption = true,
		help,
		hint,
		disabled = false,
		placeholder = '',
		multiple,
		required,
		label = '',
		name = '',
		customErrorMessage,
		width = 6,
		value,
		tabIndex,
		className = '',
		id,
	} = props;

	const [touched, setTouched] = useState(false);

	const inputRef = useRef<HTMLSelectElement>(null);

	const onChangeHandler = (event: any) => {
		onChange(event.target.value);
	};

	const isTouched = props.formTouched || touched;

	const classes = [
		'ctx-form-field',
		'select',
		'input--width-' + width,
		className,
		props.required ? 'select--required' : '',
		!inputRef?.current?.validity.valid && isTouched ? 'error' : '',
	]
		.join(' ')
		.trim();

	const Options = () => {
		if (options && Array.isArray(options)) {
			return options.map((option, index) => {
				return <option key={index}>{option}</option>;
			});
		}

		if (options && typeof options === 'object') {
			return Object.keys(options).map((key, index) => {
				return (
					<option key={index} value={key}>
						{options[key]}
					</option>
				);
			});
		}
		return null;
	};

	return (
		<div
			className={classes}
			style={{
				gridColumn: `span ${width}`,
			}}
		>
			<label>{label}</label>
			<select
				name={name}
				required={required}
				onChange={onChangeHandler}
				onBlur={() => setTouched(true)}
				ref={inputRef}
				autoComplete={hint}
				disabled={disabled}
				tabIndex={tabIndex}
				multiple={multiple}
				defaultValue={placeholder}
				value={value}
				id={id}
			>
				{hasEmptyOption && (
					<option value="" disabled>
						{help ?? 'Make a selection'}
					</option>
				)}
				<Options />
			</select>
			{isTouched &&
				!inputRef?.current?.validity.valid &&
				inputRef.current?.validationMessage && (
					<span className="error-message">
						{customErrorMessage ||
							inputRef.current?.validationMessage}
					</span>
				)}
		</div>
	);
};

export default Select;
