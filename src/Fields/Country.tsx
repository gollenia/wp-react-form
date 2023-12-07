import React, { useEffect, useState } from '@wordpress/element';
type Props = {
	label: string;
	placeholder: string;
	name: string;
	required: boolean;
	width: number;
	region: string;
	lang: string;
	help: string;
	disabled: boolean;

	onChange: ( value: string ) => void;
};

type Option = {
	value: string;
	label: string;
};

const Country = ( props: Props ) => {
	const {
		onChange,
		lang,
		help,
		disabled,
		placeholder,
		required,
		name,
		label,
	} = props;

	const classes = [
		'select',
		'grid__column--span-' + props.width,
		props.required ? 'select--required' : '',
	].join( ' ' );

	const [ countries, setCountries ] = useState< Array< any > >( [] );
	const [ selectedCountry, setSelectedCountry ] = useState( placeholder );

	const fetchCountries = async () => {
		const response = await fetch(
			`https://countries.kids-team.com/countries/${ props.region }/${ lang }`
		);
		const data = await response.json();

		const countryList = Object.entries( data ).map(
			( [ key, name ], index ) => {
				return { value: key, label: name };
			}
		);

		setCountries( countryList );
	};

	useEffect( () => {
		fetchCountries();
	}, [] );

	const onChangeHandler = ( event: any ) => {
		setSelectedCountry( event.target.value );
		onChange( event.target.value );
	};

	return (
		<div className={ classes }>
			<label>{ label }</label>
			<select
				name={ name }
				required={ required }
				onChange={ onChangeHandler }
				disabled={ disabled }
				value={ selectedCountry }
			>
				<option value="" disabled>
					{ help ?? 'Make a selection' }
				</option>
				{ countries.map( ( country: Option, index ) => {
					return (
						<option key={ index } value={ country.value }>
							{ country.label }
						</option>
					);
				} ) }
			</select>
		</div>
	);
};

Country.defaultProps = {
	label: '',
	placeholder: '',
	name: '',
	required: false,
	width: 6,
	region: 'world',
};

export default Country;
