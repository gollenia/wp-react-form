import { render } from '@testing-library/react';
import InputField from '../src/InputField';

test('Radio', () => {
	const options = ['One', 'Two', 'Three'];
	const element = render(
		<InputField type="radio" name="test" options={options} width={6} />
	);
	console.log(element.baseElement.innerHTML);
	expect(
		element.baseElement.innerHTML ==
			'<div><div class="ctx-form-field radio input--width-6" style="grid-column: span 6;"><fieldset name="test"><legend></legend><label for="test0"><input type="radio" name="test" value="One">One</label><label for="test1"><input type="radio" name="test" value="Two">Two</label><label for="test2"><input type="radio" name="test" value="Three">Three</label></fieldset></div></div>'
	).toBeTruthy();
});
