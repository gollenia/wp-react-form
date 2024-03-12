import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TextInput from '../src/Fields/Input';

test( 'TextInput', () => {
	const inputField = render(
		<TextInput label="Test" placeholder="testing" />
	);
	expect( inputField.findAllByPlaceholderText( 'testing' ) ).toBeTruthy();
	expect( inputField.findAllByText('ctx-form-field input input--width-6') ).toBeTruthy();
	expect( inputField.findAllByText('grid-column: span 6;') ).toBeTruthy();
} );
