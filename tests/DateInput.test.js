import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import DateInput from '../src/Fields/DateInput';

test( 'DateInput', () => {
	const inputField = render( <DateInput label="Test" min="2020-15-15" /> );
	expect( inputField.getByText( 'Test' ) ).toBeTruthy();
} );
