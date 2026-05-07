import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RenderHtml } from '../src/modules/RenderHtml';

describe('RenderHtml', () => {
	test('renders sanitized HTML into the requested wrapper element', () => {
		render(
			<RenderHtml
				tag="aside"
				id="notice"
				className="content-note"
				role="note"
				style={{ color: 'red' }}
				html="<p>Hello <strong>World</strong></p><script>alert(1)</script>"
			/>,
		);

		const wrapper = screen.getByRole('note');
		expect(wrapper.tagName).toBe('ASIDE');
		expect(wrapper).toHaveAttribute('id', 'notice');
		expect(wrapper).toHaveClass('content-note');
		expect(wrapper).toHaveStyle({ color: 'red' });
		expect(screen.getByText('World')).toBeTruthy();
		expect(document.querySelector('script')).toBeNull();
	});

	test('keeps safe anchor attributes and hardens blank targets', () => {
		render(
			<RenderHtml html='<a href="https://example.com" target="_blank" title="Example">Link</a>' />,
		);

		const link = screen.getByRole('link', { name: 'Link' });
		expect(link).toHaveAttribute('href', 'https://example.com');
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', 'noopener noreferrer');
		expect(link).toHaveAttribute('title', 'Example');
	});

	test('removes unsafe attributes and protocols without dropping text content', () => {
		render(
			<RenderHtml html='<a href="javascript:alert(1)" onclick="alert(2)">Unsafe</a><img src=x onerror=alert(3) alt="x">' />,
		);

		const link = screen.getByText('Unsafe');
		expect(link).not.toHaveAttribute('href');
		expect(link).not.toHaveAttribute('onclick');
		expect(document.querySelector('img')).toBeNull();
	});
});
