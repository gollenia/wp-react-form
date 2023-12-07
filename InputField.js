import DateInput from './Fields/DateInput';

import Checkbox from './Fields/Checkbox';
import Country from './Fields/Country';
import HtmlBlock from './Fields/HtmlBlock';
import MailInput from './Fields/MailInput';
import NumberInput from './Fields/NumberInput';
import Radio from './Fields/Radio';
import Select from './Fields/Select';

import Telephone from './Fields/Telephone';
import TextArea from './Fields/TextArea';
import TextInput from './Fields/TextInput';


const InputField = ( props ) => {
	const { type, settings, onChange, lang, disabled } = props;

	const renderField = ( type, settings ) => {
		switch ( type ) {
			case 'text':
				return (
					<TextInput
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'email':
				return (
					<MailInput
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'select':
				return (
					<Select
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'radio':
				return (
					<Radio
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'date':
				return (
					<DateInput
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'number':
				return (
					<NumberInput
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'textarea':
				return (
					<TextArea
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'tel':
				return (
					<Telephone
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'checkbox':
				return (
					<Checkbox
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'country':
				return (
					<Country
						{ ...settings }
						onChange={ onChange }
						lang={ lang }
						disabled={ disabled }
					/>
				);
			case 'html':
				return <HtmlBlock { ...settings } />;

			default:
				return <></>;
		}
	};
	return <>{ renderField( type, settings ) }</>;
};

export default InputField;
export { Country };

