type HiddenInputProps = {
	name: string;
	defaultValue: string;
};

const HiddenInput = (props: HiddenInputProps) => {
	const { defaultValue, name = '' } = props;

	return <input value={defaultValue} name={name} type="hidden" id={name} />;
};


export default HiddenInput;
