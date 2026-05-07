import { Flex } from '../../Flex/Flex';

type SubmitProps = {
	label: string;
	width: number;
	alignment: 'left' | 'center' | 'right';
	disabled: boolean;
	placeholder?: string;
	type?: 'submit' | 'button' | 'reset';
};

const Submit = (props: SubmitProps) => {
	const { label, alignment, disabled, placeholder } = props;

	const className = 'ctx2-form-field';

	return (
		<Flex
			className={className}
			align="center"
			justify={
				alignment === 'right'
					? 'flex-end'
					: alignment === 'center'
						? 'center'
						: 'flex-start'
			}
		>
			<input
				className="ctx2-button"
				type={props.type ?? 'submit'}
				value={label || placeholder}
				disabled={disabled}
			/>
		</Flex>
	);
};

export default Submit;
