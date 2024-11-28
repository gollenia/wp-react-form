import { useRef, useState } from '@wordpress/element';

export type NumberInputProps = {
	label: string;
	placeholder: string;
	name: string;
	required: boolean;
	width: number;
	min: number;
	max: number;
	range: boolean;
	disabled: boolean;
	hasTicks: boolean;
	hasLabels: boolean;
	type: 'range';
	onChange: ( value: string ) => void;
	value: string;
};

const RangeInput = ( props: NumberInputProps ) => {
	const {
		label = '',
		placeholder = '0',
		name = '',
		required = false,
		width = 6,
		min = 0,
		max = 100,
		disabled = false,
		hasTicks = false,
		hasLabels = false,
		onChange,
		type,
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
		'range',
		hasTicks ? 'range--ticks' : '',
		'input--width-' + width,
		required ? 'input--required' : '',
	].join( ' ' );

	const rangeStyle = {
		backgroundSize: ( ( rangeValue - min ) * 100 ) / ( max - min ) + '% 100%',
	};

	return (

		<div
			className={ classes }
			style={ {
				gridColumn: `span ${ width }`,
			} }
		>
			<label>{ label }</label>
			<div className="range__set">
				<div className="range__control">
					<input
						
						name={ name }
						required={ required }
						disabled={ disabled }
						type="range"
						max={ max }
						min={ min }
						style={ rangeStyle }
						ref={ rangeRef }
						onChange={ onChangeHandler }
						value={ value }
					/>
					{ hasTicks && (
						<div className="range__ticks">
							{ [ ...Array( max - min + 1 ) ].map( ( e, i ) => {
								return <div className="range__tick" key={ i }></div>;
							} ) }
						</div>
					) }
					{ hasLabels && (
						<div className="range__labels">
							<span className="range__label">{ min }</span>
							<span className="range__label">{ max }</span>
						</div>
					) }
				</div>
				<span className="range__value">{ rangeValue }</span>
			</div>
		</div>
		
	);
};



export default RangeInput;
