import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import 'isomorphic-fetch';
import Country from '../src/Fields/Country';

it( 'Country', async () => {
	const inputField = render(
		<Country
			label="Test"
			placeholder="testing"
			lang="de"
			region="europe"
			name="country"
		/>
	);
	await waitFor( () => {
		expect( inputField.getByText( /Frankreich/i ) ).toBeTruthy();
	} );
} );
