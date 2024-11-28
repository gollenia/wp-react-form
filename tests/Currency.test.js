import { render } from '@testing-library/react';
import InputField from '../src/InputField';

test( 'Currency', () => {
	const element = render(
		<InputField placeholder={50} min={0} max={1000} hasTicks={false} type="currency" currency={'$'} width={6}/>
	);

	expect( element.baseElement.innerHTML == '<div><div class="ctx-form-field input ctx-form-currency input--width-6 " style="grid-column: span 6;"><label></label><i style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: rgb(136, 136, 136);" class="ctx-form-currency-symbol">$</i><input style="text-align: right;" type="number" placeholder="50" name="" min="0" max="1000" step="0.01" value=""></div></div>').toBeTruthy();
}	);
