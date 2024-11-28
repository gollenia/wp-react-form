import { render } from '@testing-library/react';
import InputField from '../src/InputField';

test( 'Submit', () => {
	
	const element = render(
		<InputField type="submit" name="test" />
	);

	expect( element.baseElement.innerHTML == '<div><div class="ctx-form-field flex input--width-6 flex--align-center " style="grid-column: span 6;"><input class="button button--primary" type="submit"></div></div>').toBeTruthy();
}	);