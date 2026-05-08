import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { FormField, InputField } from '../src';

describe('FormField', () => {
	test('renders text inputs with label and help text', () => {
		render(
			<FormField
				type="text"
				name="firstName"
				label="First name"
				placeholder="Ada"
				help="Visible help"
				status="LOADED"
				formTouched={false}
				disabled={false}
				value=""
				onChange={() => {}}
			/>,
		);

		expect(screen.getByLabelText('First name')).toHaveAttribute(
			'placeholder',
			'Ada',
		);
		expect(screen.getByText('Visible help')).toBeTruthy();
	});

	test('propagates text input changes', () => {
		const onChange = jest.fn();

		render(
			<FormField
				type="text"
				name="firstName"
				label="First name"
				status="LOADED"
				formTouched={false}
				disabled={false}
				value=""
				onChange={onChange}
			/>,
		);

		fireEvent.change(screen.getByLabelText('First name'), {
			target: { value: 'Grace' },
		});

		expect(onChange).toHaveBeenCalledWith('Grace');
	});

	test('passes units into native input fields', () => {
		const { container } = render(
			<FormField
				type="text"
				name="area"
				label="Area"
				unit="m2"
				status="LOADED"
				formTouched={false}
				disabled={false}
				value=""
				onChange={() => {}}
			/>,
		);

		const input = screen.getByLabelText('Area');
		const control = container.querySelector('.ctx2-input__control');
		expect(control).toHaveAttribute('data-unit', 'm2');
		expect(control).toContainElement(input);
	});

	test('renders toggle fields with the toggle affordance', () => {
		render(
			<FormField
				type="toggle"
				name="newsletter"
				label="Newsletter"
				status="LOADED"
				formTouched={false}
				disabled={false}
				value={false}
				onChange={() => {}}
			/>,
		);

		expect(screen.getByLabelText('Newsletter')).toHaveAttribute(
			'type',
			'checkbox',
		);
		expect(document.querySelector('.ctx2-toggle__switch')).toBeTruthy();
	});

	test('renders combobox fields inside the shared field wrapper', () => {
		render(
			<FormField
				type="combobox"
				name="country"
				label="Country"
				help="Choose one"
				options={['Austria', 'Germany']}
				status="LOADED"
				formTouched={false}
				disabled={false}
				value=""
				onChange={() => {}}
			/>,
		);

		const input = screen.getByLabelText('Country');
		expect(input).toHaveAttribute('role', 'combobox');
		expect(input).toHaveAttribute('aria-describedby', 'country-help');
		expect(screen.getByText('Choose one')).toBeTruthy();
	});

	test('renders hidden fields without wrapper markup', () => {
		const { container } = render(
			<FormField
				type="hidden"
				name="token"
				defaultValue="abc123"
				status="LOADED"
				formTouched={false}
				disabled={false}
				value=""
				onChange={() => {}}
			/>,
		);

		const input = container.querySelector('input[type="hidden"]');
		expect(input).toBeTruthy();
		expect(input).toHaveAttribute('name', 'token');
		expect(input).toHaveAttribute('value', 'abc123');
	});

	test('keeps InputField as a backwards-compatible alias', () => {
		expect(InputField).toBe(FormField);
	});
});
