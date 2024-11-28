import { render } from '@testing-library/react';
import InputField from '../src/InputField';

test( 'TextArea', () => {
	const element = render(
		<InputField type="textarea" label="Test" placeholder="testing" />
	);

	expect( element.baseElement.innerHTML == '<div><div class="ctx-form-field textarea input--width-6  " style="grid-column: span 6;"><label>Test</label><textarea name="" rows="3" placeholder="testing"></textarea></div></div>').toBeTruthy();
} );
