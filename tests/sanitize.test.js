import '@testing-library/jest-dom';
import { sanitizeHtml, sanitizeInlineHtml } from '../src';

test('sanitizeHtml removes unsafe protocols and keeps safe blank links hardened', () => {
	const html = sanitizeHtml(
		'<a href="javascript:alert(1)" target="_blank">Unsafe</a><a href="https://example.com" target="_blank">Safe</a>',
	);

	const wrapper = document.createElement('div');
	wrapper.innerHTML = html;

	const links = wrapper.querySelectorAll('a');
	expect(links).toHaveLength(2);
	expect(links[0].hasAttribute('href')).toBe(false);
	expect(links[0].getAttribute('rel')).toBe('noopener noreferrer');
	expect(links[1].getAttribute('href')).toBe('https://example.com');
	expect(links[1].getAttribute('rel')).toBe('noopener noreferrer');
});

test('sanitizeInlineHtml keeps allowed formatting and removes unsafe tags', () => {
	const html = sanitizeInlineHtml(
		'<p>Text <strong>bold</strong></p><script>alert(1)</script>',
	);

	expect(html).toBe('<p>Text <strong>bold</strong></p>');
});
