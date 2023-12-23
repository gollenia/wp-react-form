import { useRef } from '@wordpress/element';

type InputFieldTypes = "text" | 'email' | 'url' | 'color' | 'tel' | 'password' | 'search' | 'datetime-local' | 'select' | 'radio' | 'textarea' | 'checkbox' | 'country' | 'html' | 'hidden' | 'range' | 'file' | 'toggle' | 'combobox' | 'options' | "date" | 'week' | 'month' | 'number' | 'year'

type InputProps = {
	label: string;
	placeholder: string;
	name: string;
	required: boolean;
	autoComplete: string;
	pattern: string;
	width: number;
	disabled: boolean;
	customError: string;
	defaultValue: string;
	min?: number;
	max?: number;
	type: InputFieldTypes;
	onChange: ( value: any ) => void;
}

const TextInput = ( props: InputProps ) => {

	const inputRef = useRef<HTMLInputElement>( null );

	const {
		label,
		required,
		width,
		onChange,
	} = props;

	const onChangeHandler = ( event: any ) => {
		onChange( event.target.value );
	};

	const setInvalidity = ( event: any ) => {
		if ( ! props.customError ) return;
		event.target.setCustomValidity( props.customError );
	};

	const classes = [
		'input',
		'width-' + width, 
		required ? 'input--required' : '',
	].join( ' ' );

	return (
		<div className={ classes }>
			<label>{ label }</label>
			<input
				placeholder={ props.placeholder }
				name={ props.name }
				required={ required }
				type={ props.type }
				autoComplete={ props.autoComplete }
				disabled={ props.disabled }
				pattern={ props.pattern }
				defaultValue={ props.defaultValue }
				ref={ inputRef }
				onInvalid={ setInvalidity }
				onChange={ onChangeHandler }
			/>
			{ ! inputRef?.current?.validity.valid && inputRef.current?.validationMessage && (
				<span className="input__error" >
					{ inputRef.current?.validationMessage }
				</span>
			) }
			
		</div>
	);
};

TextInput.defaultProps = {
	label: '',
	placeholder: '',
	name: '',
	required: false,
	width: 6,
	type: 'text'
};

export default TextInput;
export type { InputFieldTypes, InputProps };

