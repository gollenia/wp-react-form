import React from 'react';

export type NumberInputProps = {
	label: string;
	placeholder: string;
	name: string;
	required: boolean;
	width: number;
	min: number;
	max: number;
	disabled: boolean;
	currency: string;
	type: 'currency';
	onChange: ( value: string ) => void;
	value: string;
};

const CurrencyInput = ( props: NumberInputProps ) => {
	const {
		label = '',
		placeholder = '0',
		name = '',
		required = false,
		width = 6,
		min = 0,
		max = 1000,
		disabled = false,
		currency = '€',
		onChange,
		value,
	} = props;


	const onChangeHandler = ( event: any ) => {
		onChange( event.target.value );
	};

	const classes = [
		'ctx-form-field',
		'input',
		'ctx-form-currency',
		'input--width-' + width,
		required ? 'input--required' : '',
	].join( ' ' );

	const inputStyle: React.CSSProperties = {
		paddingLeft: '2.25rem'
	};

	const currencyStyle: React.CSSProperties = {
		position: 'absolute',
		left: '1.25rem',
		top: '50%',
		transform: 'translateY(-50%)',
		color: '#aaa'
	};

	return (
			<div
				className={ classes }
				style={ {
					gridColumn: `span ${ width }`,
				} }
			>
				<label>{ label }</label>
				<i style={currencyStyle} className="ctx-form-currency-symbol">{ currency }</i>
				<input
				    style={ inputStyle }
					type="number"
					placeholder={ placeholder }
					name={ name }
					required={ required }
					min={ min }
					max={ max }
					disabled={ disabled }
					onChange={ onChangeHandler }
					value={ value }
					step="0.01"
				/>
				
			</div>
	);
}

export default CurrencyInput;