import { render } from '@testing-library/react';
import InputField from '../src/InputField';

test( 'HtmlBlock', () => {
	const element = render(
		<InputField type="html" content="<h1>test</h1>" width={6}/>
	);
	
	expect( element.baseElement.innerHTML == '<div><div class="ctx-form-field core-block ctx-form-field-w6" style="grid-column: span 6;"><h1>test</h1></div></div>').toBeTruthy();
}	);