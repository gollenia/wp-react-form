import { useRef, useState } from '@wordpress/element';

type InputFieldTypes =
	| 'text'
	| 'email'
	| 'url'
	| 'color'
	| 'tel'
	| 'password'
	| 'search'
	| 'datetime-local'
	| 'select'
	| 'radio'
	| 'textarea'
	| 'checkbox'
	| 'country'
	| 'html'
	| 'hidden'
	| 'range'
	| 'file'
	| 'toggle'
	| 'combobox'
	| 'options'
	| 'date'
	| 'week'
	| 'month'
	| 'number'
	| 'year';

type InputProps = {
	label: string;
	placeholder: string;
	name: string;
	required: boolean;
	autoComplete: string;
	pattern: string | null;
	width: number;
	disabled: boolean;
	customError: string;
	defaultValue: string;
	min?: number;
	max?: number;
	customErrorMessage?: string;
	type: InputFieldTypes;
	formTouched: boolean;
	onChange: (value: any) => void;
	value: string;
	className: string;
	tabIndex: number;
	id: string;
};

const TextInput = (props: InputProps) => {
	const [touched, setTouched] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const {
		label = '',
		required = false,
		width = 6,
		onChange,
		type = 'text',
		pattern = undefined,
		min,
		max,
		customErrorMessage,
		value,
		className = '',
		tabIndex,
		id,
	} = props;

	const onChangeHandler = (event: any) => {
		onChange(event.target.value);
	};

	const onKeyPressHandler = (event: any) => {
		if (!pattern) return;

		let regex = new RegExp(pattern, 'gu');

		if (regex.test(event.data) === false) {
			event.preventDefault();
		}
	};

	const setInvalidity = (event: any) => {
		if (!props.customError) return;
		event.target.setCustomValidity(props.customError);
	};

	const isTouched = props.formTouched || touched;

	const classes = [
		className,
		'ctx-form-field',
		'input',
		'input--width-' + width,
		required ? 'input--required' : '',
		!inputRef?.current?.validity.valid && isTouched ? 'error' : '',
	]
		.join(' ')
		.trim();

	const minMax = {
		minLength: min && type === 'text' ? min : undefined,
		maxLength: max && type === 'text' ? max : undefined,
		min: min && type === 'date' ? min : undefined,
		max: max && type === 'date' ? max : undefined,
	};

	return (
		<div
			className={classes}
			style={{
				gridColumn: `span ${width}`,
			}}
		>
			<label>{label}</label>
			<input
				{...minMax}
				placeholder={props.placeholder}
				name={props.name}
				required={required}
				onBlur={() => setTouched(true)}
				type={type}
				autoComplete={props.autoComplete}
				disabled={props.disabled}
				pattern={pattern ? pattern : undefined}
				defaultValue={props.defaultValue}
				value={value}
				ref={inputRef}
				onInvalid={setInvalidity}
				onChange={onChangeHandler}
				onBeforeInput={onKeyPressHandler}
				tabIndex={tabIndex}
				id={id}
			/>
			{!inputRef?.current?.validity.valid &&
				isTouched &&
				inputRef.current?.validationMessage && (
					<span className="error-message">
						{customErrorMessage ||
							inputRef.current?.validationMessage}
					</span>
				)}
		</div>
	);
};

export default TextInput;
export type { InputFieldTypes, InputProps };
