
const Button = ( props ) => {
	const { label, width, alignment, disabled, className, onClick } = props;

	const classes = [
		'flex',
		'grid__column--span-' + width,
		'flex--align-center',
		alignment == 'right' ? 'flex--justify-end' : '',
	].join( ' ' );
	return (
		<div className={ classes }>
			<button
				className={`button ${className}`}
				type="submit"
				value={ label }
				disabled={ disabled }
				onClick={onClick}
			>{label}</button>
		</div>
	);
};

Button.defaultProps = {
	label: 'Button',
	width: 6,
	onClick: () => {},
	disabled: false,
	
};

export default Button;
