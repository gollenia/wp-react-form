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
	onChange: ( value: string ) => void;
	value: string;
};

const NumberInput = ( props: NumberInputProps ) => {
	const {
		label = '',
		placeholder = '0',
		name = '',
		required = false,
		width = 6,
		min = 0,
		max = 100,
		disabled = false,

		onChange,
	
		value,
	} = props;

	const [ rangeValue, setRangeValue ] = useState( parseInt( placeholder ) );
	const rangeRef = useRef( null );

	const onChangeHandler = ( event: any ) => {
		setRangeValue( parseInt( event.target.value ) );
		onChange( event.target.value );
	};

	const classes = [
		'ctx-form-field',
		
		'input--width-' + width,
		required ? 'input--required' : '',
	].join( ' ' );

	return (
			<div
				className={ classes }
				style={ {
					gridColumn: `span ${ width }`,
				} }
			>
				<label>{ label }</label>
				<input
					type="number"
					placeholder={ placeholder }
					name={ name }
					required={ required }
					disabled={ disabled }
					onChange={ ( event ) => onChange( event.target.value ) }
					value={ value }
					min={ min }
					max={ max }
				/>
			</div>
		
	);
};



export default NumberInput;
