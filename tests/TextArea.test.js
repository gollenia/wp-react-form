import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TextArea from '../src/Fields/TextArea';

test( 'TextArea', () => {
	const inputField = render(
		<TextArea label="Test" placeholder="testing" />
	);
	expect( inputField.findAllByPlaceholderText( 'testing' ) ).toBeTruthy();
	expect( inputField.findAllByText('textarea') ).toBeTruthy();
} );
