import { render } from '@testing-library/react';
import InputField from '../src/InputField';

test( 'Currency', () => {
	const element = render(
		<InputField placeholder={50} min={0} max={1000} hasTicks={false} type="currency" currency={'$'} width={6}/>
	);
	//console.log(element.baseElement.innerHTML);
	expect( element.baseElement.innerHTML == '<div><div class="ctx-form-field input ctx-form-currency input--width-6" style="grid-column: span 6;"><label></label><i style="position: absolute; left: 1.25rem; top: 50%; transform: translateY(-50%); color: rgb(170, 170, 170);" class="ctx-form-currency-symbol">$</i><input style="padding-left: 2.25rem;" type="number" placeholder="50" name="" min="0" max="1000" step="0.01" value=""></div></div>').toBeTruthy();
}	);
