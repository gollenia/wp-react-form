import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import {
	Accordion,
	Checkbox,
	Combobox,
	Country,
	Flex,
	Input,
	Radio,
	Range,
	Select,
	Stepper,
	Submit,
	TextArea,
} from '../src';

describe('field components', () => {
	test('Input maps text length constraints and propagates changes', () => {
		const onChange = jest.fn();

		render(
			<Input
				name="code"
				label="Code"
				type="text"
				min={2}
				max={5}
				pattern="["
				value=""
				onChange={onChange}
			/>,
		);

		const input = screen.getByLabelText('Code');
		expect(input).toHaveAttribute('minlength', '2');
		expect(input).toHaveAttribute('maxlength', '5');
		expect(document.querySelector('.ctx2-input__control')).toBeNull();

		fireEvent.change(input, { target: { value: 'abc' } });
		expect(onChange).toHaveBeenCalledWith('abc');
	});

	test('Input renders an optional unit suffix without changing the value', () => {
		const onChange = jest.fn();

		const { container } = render(
			<Input
				name="weight"
				label="Weight"
				type="number"
				unit="kg"
				value="12"
				onChange={onChange}
			/>,
		);

		const input = screen.getByLabelText('Weight');
		const control = container.querySelector('.ctx2-input__control');
		expect(control).toHaveAttribute('data-unit', 'kg');
		expect(control).toContainElement(input);
		expect(input).toHaveValue(12);

		fireEvent.change(input, { target: { value: '13' } });
		expect(onChange).toHaveBeenCalledWith('13');
	});

	test('Select supports object options, hint/help descriptions and empty required option', () => {
		const onChange = jest.fn();

		render(
			<Select
				name="plan"
				label="Plan"
				required={true}
				hasEmptyOption={true}
				hint="Pick one"
				help="Required for billing"
				options={{ basic: 'Basic', pro: 'Pro' }}
				value=""
				onChange={onChange}
			/>,
		);

		const select = screen.getByLabelText('Plan');
		expect(select).toHaveAttribute('aria-describedby', 'plan-hint plan-help');
		fireEvent.click(select);
		expect(
			screen.getByRole('option', { name: 'Make a selection' }),
		).toHaveAttribute('data-disabled');
		expect(screen.getByRole('option', { name: 'Basic' })).toBeTruthy();

		fireEvent.click(screen.getByRole('option', { name: 'Pro' }));
		expect(onChange).toHaveBeenCalledWith('pro');
	});

	test('Radio supports object options and exposes error state on the group', () => {
		const onChange = jest.fn();

		render(
			<Radio
				name="size"
				label="Size"
				options={{ s: 'Small', l: 'Large' }}
				value="s"
				error="Choose a size"
				onChange={onChange}
			/>,
		);

		const group = screen.getByRole('group');
		expect(group).toHaveAttribute('aria-invalid', 'true');
		expect(screen.getByLabelText('Small')).toBeChecked();

		fireEvent.click(screen.getByLabelText('Large'));
		expect(onChange).toHaveBeenCalledWith('l');
	});

	test('Checkbox sanitizes HTML labels/help and returns boolean changes', () => {
		const onChange = jest.fn();

		render(
			<Checkbox
				name="terms"
				label={'Accept <strong>terms</strong><script>alert(1)</script>'}
				help={'Read <a href="https://example.com" target="_blank">details</a>'}
				value={false}
				onChange={onChange}
			/>,
		);

		expect(screen.getByText('terms')).toBeTruthy();
		expect(document.querySelector('script')).toBeNull();
		expect(screen.getByRole('link', { name: 'details' })).toHaveAttribute(
			'rel',
			'noopener noreferrer',
		);

		fireEvent.click(screen.getByLabelText(/Accept/));
		expect(onChange).toHaveBeenCalledWith(true);
	});

	test('TextArea wires rows, error descriptions and changed text', () => {
		const onChange = jest.fn();

		render(
			<TextArea
				name="message"
				label="Message"
				rows={7}
				help="Use details"
				error="Too short"
				value=""
				onChange={onChange}
			/>,
		);

		const textarea = screen.getByLabelText('Message');
		expect(textarea).toHaveAttribute('rows', '7');
		expect(textarea).toHaveAttribute(
			'aria-describedby',
			'message-help message-error',
		);

		fireEvent.change(textarea, { target: { value: 'Hello' } });
		expect(onChange).toHaveBeenCalledWith('Hello');
	});

	test('Range falls back to min for invalid display values and renders ticks/labels', () => {
		const onChange = jest.fn();

		render(
			<Range
				name="volume"
				label="Volume"
				min={3}
				max={5}
				hasTicks={true}
				hasLabels={true}
				value=""
				onChange={onChange}
			/>,
		);

		const range = screen.getByLabelText('Volume');
		expect(range).toHaveAttribute('aria-valuenow', '3');
		expect(screen.getAllByText('3')).toHaveLength(2);
		expect(screen.getByText('5')).toBeTruthy();
		expect(document.querySelectorAll('.ctx2-range__tick')).toHaveLength(3);

		fireEvent.change(range, { target: { value: '4' } });
		expect(onChange).toHaveBeenCalledWith('4');
	});

	test('Combobox filters with wildcard prefixes and can clear optional values', () => {
		const onChange = jest.fn();

		render(
			<Combobox
				name="city"
				label="City"
				options={['Vienna', 'Venice', 'Berlin']}
				value="Vienna"
				allowClear={true}
				onChange={onChange}
			/>,
		);

		const input = screen.getByRole('combobox', { name: 'City' });
		fireEvent.focus(input);
		expect(
			screen.getByRole('option', { name: 'Clear selection' }),
		).toBeTruthy();

		fireEvent.change(input, { target: { value: 'Ve*' } });
		expect(screen.getByRole('option', { name: 'Venice' })).toBeTruthy();
		expect(screen.queryByRole('option', { name: 'Berlin' })).toBeNull();

		fireEvent.mouseDown(
			screen.getByRole('option', { name: 'Clear selection' }),
		);
		expect(onChange).toHaveBeenLastCalledWith('');
	});

	test('Country keeps typed search text and commits the country code on selection', () => {
		const onChange = jest.fn();

		render(
			<Country
				name="country"
				label="Country"
				placeholder="Country"
				required={false}
				width={6}
				region="world"
				disabled={false}
				customError=""
				formTouched={false}
				value=""
				onChange={onChange}
			/>,
		);

		const input = screen.getByRole('combobox', { name: 'Country' });
		fireEvent.focus(input);
		fireEvent.change(input, { target: { value: 'Aus' } });

		expect(input).toHaveValue('Aus');
		expect(onChange).not.toHaveBeenCalledWith('');
		expect(screen.getByRole('option', { name: 'Austria' })).toBeTruthy();

		fireEvent.mouseDown(screen.getByRole('option', { name: 'Austria' }));

		expect(onChange).toHaveBeenLastCalledWith('AT');
	});

	test('Submit uses placeholder fallback and respects disabled state', () => {
		render(
			<Submit
				label=""
				placeholder="Send request"
				alignment="center"
				disabled={true}
			/>,
		);

		expect(screen.getByRole('button', { name: 'Send request' })).toBeDisabled();
	});

	test('Stepper increments, decrements and respects bounds', () => {
		const onChange = jest.fn();

		const { rerender } = render(
			<Stepper
				value={1}
				min={0}
				max={2}
				onChange={onChange}
				decrementLabel="Less"
				incrementLabel="More"
			/>,
		);

		fireEvent.click(screen.getByRole('button', { name: 'More' }));
		expect(onChange).toHaveBeenCalledWith(2);

		fireEvent.click(screen.getByRole('button', { name: 'Less' }));
		expect(onChange).toHaveBeenCalledWith(0);

		rerender(
			<Stepper
				value={0}
				min={0}
				max={2}
				onChange={onChange}
				decrementLabel="Less"
				incrementLabel="More"
			/>,
		);
		expect(screen.getByRole('button', { name: 'Less' })).toBeDisabled();

		rerender(
			<Stepper
				value={2}
				min={0}
				max={2}
				onChange={onChange}
				decrementLabel="Less"
				incrementLabel="More"
			/>,
		);
		expect(screen.getByRole('button', { name: 'More' })).toBeDisabled();
	});

	test('Accordion renders edit labels only for completed sections', () => {
		render(
			<Accordion defaultValue={['details']}>
				<Accordion.Section
					id="details"
					title="Contact details"
					completed={true}
					editLabel="Edit"
				>
					Details
				</Accordion.Section>
				<Accordion.Section
					id="payment"
					title="Payment"
					completed={false}
					editLabel="Edit"
				>
					Payment
				</Accordion.Section>
			</Accordion>,
		);

		expect(
			screen.getByRole('button', { name: /Contact details Edit/ }),
		).toBeTruthy();
		expect(screen.getByRole('button', { name: 'Payment' })).toBeTruthy();
		expect(screen.getAllByText('Edit')).toHaveLength(1);
	});

	test('Flex exposes collapse behavior through CSS classes and variables', () => {
		render(
			<Flex
				data-testid="layout"
				direction="row"
				collapsedDirection="column-reverse"
				collapse={true}
				className="custom-layout"
				gap="1rem"
			>
				<div>First</div>
				<div>Second</div>
			</Flex>,
		);

		const layout = screen.getByTestId('layout');
		expect(layout).toHaveClass(
			'ctx2-flex',
			'ctx2-flex--collapse',
			'custom-layout',
		);
		expect(layout.style.getPropertyValue('--ctx2-flex-direction')).toBe('row');
		expect(
			layout.style.getPropertyValue('--ctx2-flex-collapsed-direction'),
		).toBe('column-reverse');
		expect(layout).toHaveStyle({ gap: '1rem' });
	});
});
