import { useRef } from '@wordpress/element';

type Props = {
	label: string;
	width: number;
	disabled: boolean;
	required: boolean;
	defaultChecked: boolean;
	type: 'checkbox' | 'toggle';
	customError: string;
	onChange: ( value: any ) => void;
};

const Checkbox = ( props: Props ) => {
	const { label, width, onChange, type } =
		props;
	
	const inputRef = useRef<HTMLInputElement>( null );

	const onChangeHandler = ( event: any ) => {
		onChange( event.target.checked );
	};

	const setInvalidity = ( event: any ) => {
		if ( ! props.customError ) return;
		event.target.setCustomValidity( props.customError );
	}

	const toggle = type === 'toggle';

	const classes = [
		toggle ? 'toggle' : 'checkbox',
		'ctx-form-field-w' + width,
	].join( ' ' );

	return (
		<div className={ classes }>
			<label>
				<div className="toggle__control">
					<input
						disabled={ props.disabled }
						required={ props.required }
						ref={inputRef}
						type="checkbox"
						onChange={ onChangeHandler }
						onInvalid={ setInvalidity }
					/>
					{ toggle && <span className="toggle__switch"></span> }
				</div>
				<span>{ label }</span>
			</label>
			{ ! inputRef?.current?.validity.valid && inputRef.current?.validationMessage && (
				<span className="input__error" >
					{ inputRef.current?.validationMessage }
				</span>
			) }

		</div>
	);
};

Checkbox.defaultProps = {
	label: '',
	help: '',
	width: 6,
	disabled: false,
	required: false,
	defaultChecked: false,
	type: 'checkbox',
};

export default Checkbox;
export type { Props as CheckboxProps };
