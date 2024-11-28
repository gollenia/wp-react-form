import { useState } from '@wordpress/element';

export type RadioProps = {
	label: string;
	placeholder: string;
	name: string;
	required: boolean;
	width: number;
	options?: Array< string >;
	disabled: boolean;
	onChange: ( value: string ) => void;
	value: string;
};

const Radio = ( props: RadioProps ) => {
	const { onChange, options = [], name = '', disabled = false, placeholder = '', width = 6, required = false, value } = props;

	const classes = [
		'ctx-form-field',
		'radio',
		'input--width-' + width,
		props.required ? 'select--required' : '',
	].join( ' ' );

	const [ selection, setSelection ] = useState( placeholder );

	const onChangeHandler = ( event: any ) => {
		setSelection( event.target.value );
		onChange( event.target.value );
	};

	const firstOptionInitiallyChecked = required && ! selection;

	return (
		<div
			className={ classes }
			style={ {
				gridColumn: `span ${ width }`,
			} }
		>
			<fieldset name={ props.name }>
				<legend>{ props.label }</legend>
				{ options &&
					options.map( ( option, index ) => {
						return (
							<label key={ index } htmlFor={ name + index }>
								<input
									checked={ selection === option }
									onChange={ ( value ) => {
										onChangeHandler( value );
									} }
									disabled={ disabled }
									type="radio"
									value={ option }
									name={ name }
									id={ name + index }
								/>
								{ option }
							</label>
						);
					} ) }
			</fieldset>
		</div>
	);
};

export default Radio;
