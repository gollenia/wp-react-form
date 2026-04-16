import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FormField } from '../src';

test('html fields sanitize unsafe markup', () => {
	render(
		<FormField
			type="html"
			content="<p>Safe</p><script>alert('x')</script>"
			status="LOADED"
			formTouched={false}
			disabled={false}
			value=""
			onChange={() => {}}
		/>,
	);

	expect(screen.getByText('Safe')).toBeTruthy();
	expect(document.querySelector('script')).toBeNull();
});
