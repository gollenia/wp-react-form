type Props = {
	label: string;
	width: number;
	alignment: 'left' | 'center' | 'right';
	disabled: boolean;
	placeholder: string;
	className: string;
	tabIndex: number;
	id: string;
};

const Submit = (props: Props) => {
	const {
		label = '',
		width = 6,
		alignment,
		disabled = false,
		placeholder,
		className = '',
		id,
	} = props;

	const classes = [
		'ctx-form-field',
		'flex',
		'input--width-' + width,
		'flex--align-center',
		className,
		alignment == 'right' ? 'flex--justify-end' : '',
	]
		.join(' ')
		.trim();
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
				tabIndex={props.tabIndex}
				id={id}
			/>
		</div>
	);
};

export default Submit;
