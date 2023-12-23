import { useRef, useState } from '@wordpress/element';
import {
	Fragment as _Fragment,
	jsx as _jsx,
	jsxs as _jsxs,
} from 'react/jsx-runtime';
const NumberInput = ( props ) => {
	const {
		label,
		placeholder,
		name,
		required,
		width,
		min,
		max,
		disabled,
		range,
		hasTicks,
		hasLabels,
		onChange,
	} = props;
	const [ rangeValue, setRangeValue ] = useState( placeholder );
	const rangeRef = useRef( null );
	const onChangeHandler = ( event ) => {
		setRangeValue( parseInt( event.target.value ) );
		onChange( event.target.value );
	};
	const classes = [
		range ? 'range' : 'input',
		'range--ticks',
		'grid__column--span-' + width,
		required ? 'input--required' : '',
	].join( ' ' );
	const rangeStyle = {
		backgroundSize:
			( ( rangeValue - min ) * 100 ) / ( max - min ) + '% 100%',
	};

	return _jsx( _Fragment, {
		children: range
			? _jsxs( 'div', {
					className: classes,
					children: [
						_jsx( 'label', { children: label } ),
						_jsxs( 'div', {
							className: 'range__set',
							children: [
								_jsxs( 'div', {
									className: 'range__control',
									children: [
										_jsx( 'input', {
											value: rangeValue,
											name: name,
											required: required,
											disabled: disabled,
											type: 'range',
											max: max,
											min: min,
											style: rangeStyle,
											ref: rangeRef,
											onChange: onChangeHandler,
										} ),
										hasTicks &&
											_jsx( 'div', {
												className: 'range__ticks',
												children: [
													...Array( max - min + 1 ),
												].map( ( e, i ) => {
													return _jsx(
														'div',
														{
															className:
																'range__tick',
														},
														i
													);
												} ),
											} ),
										hasLabels &&
											_jsxs( 'div', {
												className: 'range__labels',
												children: [
													_jsx( 'span', {
														className:
															'range__label',
														children: min,
													} ),
													_jsx( 'span', {
														className:
															'range__label',
														children: max,
													} ),
												],
											} ),
									],
								} ),
								_jsx( 'span', {
									className: 'range__value',
									children: rangeValue,
								} ),
							],
						} ),
					],
			  } )
			: _jsxs( 'div', {
					className: classes,
					children: [
						_jsx( 'label', { children: label } ),
						_jsx( 'input', {
							value: rangeValue,
							name: name,
							required: required,
							disabled: disabled,
							type: 'number',
							max: max,
							min: min,
							ref: rangeRef,
							onChange: onChangeHandler,
						} ),
					],
			  } ),
	} );
};
NumberInput.defaultProps = {
	label: '',
	placeholder: 0,
	name: '',
	required: false,
	width: 6,
	min: 0,
	max: 100,
	style: 'input',
	hasLabels: false,
	hasTicks: false,
};
export default NumberInput;
