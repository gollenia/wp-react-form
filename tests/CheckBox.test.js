import { render } from '@testing-library/react';
import Checkbox from '../src/Fields/Checkbox';

test( 'Checkbox', () => {
	const checkbox = render(
		<Checkbox label="Test" placeholder="testing" type="checkbox"/>
	);
	expect( checkbox.findAllByPlaceholderText( 'type="checkbox"' ) ).toBeTruthy();
}	);