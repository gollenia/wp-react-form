import Form, {
	Button,
	Checkbox,
	Combobox,
	Country,
	Accordion,
	AccordionSection,
	Fieldset,
	Flex,
	Form as NamedForm,
	FormAccordion,
	FormAccordionSection,
	FormField,
	FormFields,
	Hidden,
	Input,
	InputField,
	Radio,
	Range,
	Select,
	Stepper,
	Submit,
	TextArea,
	getCountryOptions,
	getDefaultFormValues,
	isFieldVisible,
	normalizeFieldValue,
	sanitizeHtml,
	sanitizeInlineHtml,
} from '../src';
import packageJson from '../package.json';

test('exports the public API from the package entrypoint', () => {
	expect(Form).toBe(NamedForm);
	expect(Button).toBeTruthy();
	expect(Accordion).toBeTruthy();
	expect(Accordion.Section).toBe(AccordionSection);
	expect(Checkbox).toBeTruthy();
	expect(Combobox).toBeTruthy();
	expect(Country).toBeTruthy();
	expect(Fieldset).toBeTruthy();
	expect(Flex).toBeTruthy();
	expect(FormAccordion).toBeTruthy();
	expect(Accordion).toBe(FormAccordion);
	expect(AccordionSection).toBe(FormAccordionSection);
	expect(FormAccordion.Section).toBe(FormAccordionSection);
	expect(FormField).toBeTruthy();
	expect(FormFields).toBeTruthy();
	expect(Hidden).toBeTruthy();
	expect(Input).toBeTruthy();
	expect(InputField).toBeTruthy();
	expect(Radio).toBeTruthy();
	expect(Range).toBeTruthy();
	expect(Select).toBeTruthy();
	expect(Stepper).toBeTruthy();
	expect(Submit).toBeTruthy();
	expect(TextArea).toBeTruthy();
	expect(getCountryOptions).toBeTruthy();
	expect(getDefaultFormValues).toBeTruthy();
	expect(isFieldVisible).toBeTruthy();
	expect(normalizeFieldValue).toBeTruthy();
	expect(sanitizeHtml).toBeTruthy();
	expect(sanitizeInlineHtml).toBeTruthy();
	expect(FormField).toBe(InputField);
	expect(Fieldset).toBe(FormFields);
});

test('exports the packaged stylesheet as a subpath', () => {
	expect(packageJson.exports['./style.css']).toBe('./lib/style.css');
});
