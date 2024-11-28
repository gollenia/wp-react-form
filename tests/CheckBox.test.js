import { render } from '@testing-library/react';
import InputField from '../src/InputField';

test( 'Checkbox', () => {
	const element = render(
		<InputField label="Test" placeholder="testing" type="checkbox"/>
	);

	expect( element.baseElement.innerHTML == '<div><div class="ctx-form-field checkbox " style="grid-column: span 6;"><label><div class="toggle__control"><input type="checkbox"></div><span>Test</span></label></div></div>').toBeTruthy();
}	);