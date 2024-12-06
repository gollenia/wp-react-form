import { render } from '@testing-library/react';
import InputField from '../src/InputField';
test( 'Number', () => {
	const element = render(
		<InputField placeholder={25} min={0} max={50} hasTicks={false} type="number" width={6}/>
	);
	//console.log(element.baseElement.innerHTML);
	expect( element.baseElement.innerHTML == '<div><div class="ctx-form-field  input--width-6" style="grid-column: span 6;"><label></label><input type="number" placeholder="25" name="" min="0" max="50" value=""></div></div>').toBeTruthy();
}	);
