import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Fieldset, FormFields } from '../src';

describe('Fieldset', () => {
	test('renders only visible fields and forwards changed values', () => {
		const onChange = jest.fn();

		render(
			<Fieldset
				fields={[
					{
						name: 'email',
						type: 'text',
						label: 'Email',
						testId: 'email-field',
					},
					{
						name: 'details',
						type: 'textarea',
						label: 'Details',
						visibilityRule: {
							field: 'showDetails',
							value: true,
							operator: 'equals',
						},
						testId: 'details-field',
					},
				]}
				formData={{ email: '', showDetails: false }}
				onChange={onChange}
			/>,
		);

		expect(screen.getByTestId('email-field')).toBeTruthy();
		expect(screen.queryByTestId('details-field')).toBeNull();

		fireEvent.change(screen.getByLabelText('Email'), {
			target: { value: 'user@example.com' },
		});

		expect(onChange).toHaveBeenCalledWith('email', 'user@example.com');
	});

	test('passes field errors into the rendered field', () => {
		render(
			<Fieldset
				fields={[
					{
						name: 'email',
						type: 'text',
						label: 'Email',
					},
				]}
				formData={{ email: '' }}
				errors={{ email: 'Required field' }}
				formTouched={true}
				onChange={() => {}}
			/>,
		);

		expect(screen.getByText('Required field')).toBeTruthy();
		expect(screen.getByLabelText('Email')).toHaveAttribute(
			'aria-invalid',
			'true',
		);
	});

	test('keeps FormFields as a backwards-compatible alias', () => {
		expect(FormFields).toBe(Fieldset);
	});
});
