import { render } from '@testing-library/react';
import InputField from '../src/InputField';

test( 'RangeTest', () => {
	const element = render(
		<InputField placeholder={25} min={0} max={50} hasTicks={false} type="range" width={6}/>
	);
	//console.log(element.baseElement.innerHTML);
	expect( element.baseElement.innerHTML == '<div><div class="ctx-form-field range   input--width-6" style="grid-column: span 6;"><label></label><div class="range__set"><div class="range__control"><input name="" type="range" max="50" min="0" style="background-size: 50% 100%;" value=""></div><span class="range__value">25</span></div></div></div>').toBeTruthy();
}	);
