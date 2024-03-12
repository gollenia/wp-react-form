import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Input from '../src/Fields/Input';

test( 'DateInput', () => {
	const inputField = render(
		<Input label="Test" placeholder="testing" min="01-01-1970" max="01-01-2030" type="date"/>
	);
	expect( inputField.findAllByPlaceholderText( 'type="date"' ) ).toBeTruthy();
	expect( inputField.findAllByText('min="01-01-1970"') ).toBeTruthy();
	expect( inputField.findAllByText('max="01-01-2030"') ).toBeTruthy();
} );
