type Props = {
	label: string;
	width: number;
	alignment: 'left' | 'center' | 'right';
	disabled: boolean;
	placeholder: string;
};

const Submit = (props: Props) => {
	const { label = '', width = 6, alignment, disabled = false, placeholder } = props;

	const classes = [
		'ctx-form-field',
		'flex',
		'input--width-' + width,
		'flex--align-center',
		alignment == 'right' ? 'flex--justify-end' : '',
	].join(' ');
	return (
		<div
			className={classes}
			style={{
				gridColumn: `span ${width}`,
			}}
		>
			<input
				className="button button--primary"
				type="submit"
				value={label ? label : placeholder}
				disabled={disabled}
			/>
		</div>
	);
};

export default Submit;
