import React from '@wordpress/elements';


const Checkbox = ( props ) => {
	const {
		help,
		width,
		onChange,
		disabled,
		placeholder,
		required,
		toggle,
	} = props;

	const onChangeHandler = (
		event
	) => {
		onChange( event.target.checked );
	};

	const classes = [
		toggle ? 'toggle' : 'checkbox',
		'ctx-form-field-' + width,
	].join( ' ' );

	return (
		<>
			{ toggle ? (
				<div className={ classes }>
					<label>
						<div className="toggle__control">
							<input
								defaultChecked={ placeholder }
								type="checkbox"
								required={ required }
								onChange={ onChangeHandler }
								disabled={ disabled }
							/>
							<span className="toggle__switch"></span>
						</div>
						<span>{ help }</span>
					</label>
				</div>
			) : (
				<div className={ classes }>
					<label>
						<input
							defaultChecked={ placeholder }
							type="checkbox"
							required={ required }
							onChange={ onChangeHandler }
							disabled={ disabled }
						/>
						<span>{ help }</span>
					</label>
				</div>
			) }
		</>
	);
};

Checkbox.defaultProps = {
	label: '',
	help: '',
	width: 6,
};

export default Checkbox;
