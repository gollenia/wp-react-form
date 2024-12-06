import { render } from '@testing-library/react';
import InputField from '../src/InputField';

test( 'Combobox', () => {

	const options = [
		'One',
		'Two',
		'Three',
	];
	
	const combobox = render(
		<InputField label="Test" placeholder="One" type="combobox" options={options}/>
	);
	//console.log(combobox.baseElement.innerHTML);
	expect( combobox.baseElement.innerHTML == '<div><div style="grid-column: span 6;" class="combobox ctx-form-field select input--width-6"><input type="text" placeholder="One" value=""><ul><li class="selected"></li><li class="">One</li><li class="">Two</li><li class="">Three</li></ul></div></div>').toBeTruthy();
}	);