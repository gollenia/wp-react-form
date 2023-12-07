import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TextInput from '../src/Fields/TextInput';

test( 'TextInput', () => {
	render( <TextInput label="Test" /> );
	const inputField = render(
		<TextInput label="Test" placeholder="testing" />
	);
	expect( inputField.findAllByPlaceholderText( 'testing' ) ).toBeTruthy();
} );
