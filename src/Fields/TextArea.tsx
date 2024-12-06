import { useRef, useState } from '@wordpress/element';

export type TextAreaProps = {
	label: string;
	placeholder: string;
	name: string;
	required: boolean;
	width: number;
	disabled: boolean;
	rows: number;
	formTouched?: boolean;
	customErrorMessage?: string;
	onChange: (value: string) => void;
	value: string;
	className?: string;
	tabIndex: number;
	id: string;
};

const TextArea = (props: TextAreaProps) => {
	const {
		label = '',
		placeholder = '',
		name = '',
		required = false,
		width = 6,
		rows = 3,
		disabled = false,
		onChange,
		customErrorMessage,
		value,
		className = '',
		tabIndex,
		id,
	} = props;

	const textInputRef = useRef<HTMLTextAreaElement>(null);
	const [touched, setTouched] = useState(false);
	const onChangeHandler = (event: any) => {
		onChange(event.target.value);
	};

	const isTouched = touched || props.formTouched;

	const classes = [
		'ctx-form-field',
		'textarea',
		'input--width-' + width,
		className,
		required ? 'input--required' : '',
		!textInputRef?.current?.validity.valid && isTouched ? 'error' : '',
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
			<textarea
				name={name}
				required={required}
				disabled={disabled}
				rows={rows}
				onBlur={() => setTouched(true)}
				ref={textInputRef}
				placeholder={placeholder}
				onChange={onChangeHandler}
				tabIndex={tabIndex}
				value={value}
				id={id}
			></textarea>
			{!textInputRef?.current?.validity.valid &&
				isTouched &&
				textInputRef.current?.validationMessage && (
					<span className="error-message">
						{customErrorMessage ||
							textInputRef.current?.validationMessage}
					</span>
				)}
		</div>
	);
};

export default TextArea;
