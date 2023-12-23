type TextInputProps = {
	name: string;
	value: string;
};

const HiddenInput = ( props: TextInputProps ) => {
	const {
		value,
		name,
	} = props;

	return (
		<input
			value={ value }
			name={ name }
			type="hidden"
		/>
	);
};

HiddenInput.defaultProps = {
	name: '',
};

export default HiddenInput;
