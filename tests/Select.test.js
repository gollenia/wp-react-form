import { render } from '@testing-library/react';
import InputField from '../src/InputField';

test( 'Select', () => {
	const options = [
		"One", "Two", "Three"
	];
	const element = render(
		<InputField type="select" name="test" options={options} width={6}/>
	);
	
	expect( element.baseElement.innerHTML == '<div><div class="ctx-form-field select input--width-6  " style="grid-column: span 6;"><label></label><select name="test"><option value="" disabled="" selected="">Make a selection</option><option>One</option><option>Two</option><option>Three</option></select></div></div>').toBeTruthy();
}	);