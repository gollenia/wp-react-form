import React, { useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import InputField, { InputFieldProps } from './InputField';

type FormProps = {
	extraData: any;
	lang: string;
	data: Array< InputFieldProps >;
	formUrl: string;
	onSubmit: ( event: any, data: any ) => void | null;
	validate: boolean;
	submitUrl: string;
};

const Form = ( props: FormProps ) => {
	const { extraData, lang, data, formUrl, onSubmit, validate, submitUrl } =
		props;
	const [ status, setStatus ] = useState( 'LOADING' );
	const [ fields, setFields ] = useState< Array< InputFieldProps > >( [] );
	const [ form, setForm ] = useState( {} );
	const [ submitButton, setSubmitButton ] = useState( {} );

	const formRef = useRef( null );

	useEffect( () => {
		if ( ! formUrl && data ) {
			setFields( data );
			setStatus( 'LOADED' );
			return;
		}
		fetch( formUrl )
			.then( ( response ) => response.json() )
			.then( ( data ) => {
				setFields( data.fields );
				setSubmitButton( data.submit );
				setStatus( 'LOADED' );

				const fieldTemplate = {};
				Object.entries( data.fields ).forEach(
					( [ key, field ]: [ string, any ] ) => {
						fieldTemplate[ key ] = field.settings.defaultValue;
					}
				);

				setForm( fieldTemplate );
			} );
	}, [] );

	if ( fields.length == 0 ) return <></>;

	const handleSubmit = ( event: any ) => {
		event.preventDefault();
		if ( onSubmit ) {
			onSubmit( event, form );
			return;
		}

		if (
			! ( formRef.current as HTMLFormElement | null )?.checkValidity()
		) {
			if (
				formRef.current &&
				( formRef.current as HTMLFormElement ).reportValidity
			) {
				( formRef.current as HTMLFormElement ).reportValidity();
				return;
			}
		}

		if ( ! submitUrl ) {
			console.error(
				'wp-react-form',
				'No URL or onSubmit callback provided'
			);
			return;
		}

		if ( status == 'SUBMITTING' || status == 'SUCCESS' ) return;

		const data = { fields: form, ...extraData };
		setStatus( 'SUBMITTING' );
		fetch( submitUrl, {
			method: 'POST',
			body: JSON.stringify( data ),
			headers: {
				'Content-Type': 'application/json',
			},
		} )
			.then( ( response ) => response.json() )
			.then( ( data ) => {
				setStatus( data.success ? 'SUCCESS' : 'ERROR' );
			} );
	};

	if ( status == 'LOADING' )
		return <>{ __( 'Form is beeing loaded', 'gutenberg-form' ) }</>;

	const classes = [
		'ctx-form form grid xl:grid--columns-6 grid--gap-8',
		status == 'LOADED' ? 'form--loaded' : '',
		status == 'ERROR' ? 'form--error' : '',
		status == 'SUBMITTING' ? 'form--submitting' : '',
		status == 'SUCCESS' ? 'form--submitted' : '',
	].join( ' ' );
	return (
		<form className={ classes } ref={ formRef } onSubmit={ handleSubmit }>
			{ Object.entries( fields ).map( ( [ key, field ], index ) => {
				return (
					<InputField
						disabled={ status == 'SUBMITTING' }
						lang={ lang }
						key={ index }
						type={ field.type }
						settings={ field.settings }
						onChange={ ( value ) => {
							setForm( ( fields ) => {
								return {
									...fields,
									[ key ]: value,
								};
							} );
						} }
					/>
				);
			} ) }
		</form>
	);
};

Form.defaultProps = {
	id: 0,
	lang: 'en',
	data: [],
	formUrl: '',
	onSubmit: null,
	validate: true,
	submitUrl: '',
};

export default Form;
