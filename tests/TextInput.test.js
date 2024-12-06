import { render } from '@testing-library/react';
import InputField from '../src/InputField';

test( 'TextInput', () => {
	const element = render(
		<InputField label="Test" placeholder="testing" type={'text'} />
	);
	//console.log(element.baseElement.innerHTML);
	expect( element.baseElement.innerHTML == '<div><div class="ctx-form-field input input--width-6" style="grid-column: span 6;"><label>Test</label><input placeholder="testing" type="text" value=""></div></div>').toBeTruthy();
} );
