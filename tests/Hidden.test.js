import { render } from '@testing-library/react';
import InputField from '../src/InputField';

test( 'Hidden', () => {
	const element = render(
		<InputField type="hidden" defaultValue="test" name="hidden"/>
	);
	
	expect( element.baseElement.innerHTML == '<div><input name="hidden" type="hidden" id="hidden" value="test"></div>').toBeTruthy();
}	);