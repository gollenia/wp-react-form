import createDOMPurify from 'dompurify';

const ALLOWED_BLOCK_TAGS = [
	'a',
	'b',
	'strong',
	'i',
	'em',
	'u',
	's',
	'span',
	'br',
	'hr',
	'p',
	'div',
	'blockquote',
	'pre',
	'code',
	'ul',
	'ol',
	'li',
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'table',
	'thead',
	'tbody',
	'tr',
	'th',
	'td',
	'img',
	'figure',
	'figcaption',
] as const;

const ALLOWED_INLINE_TAGS = [
	'a',
	'b',
	'strong',
	'i',
	'em',
	'u',
	's',
	'span',
	'br',
	'code',
] as const;

const ALLOWED_ATTRIBUTES_BY_TAG: Record<string, readonly string[]> = {
	a: ['href', 'title', 'target', 'rel'],
	img: ['src', 'alt', 'width', 'height', 'loading'],
	td: ['colspan', 'rowspan'],
	th: ['colspan', 'rowspan', 'scope'],
	'*': ['class', 'id', 'lang', 'dir'],
};

const GLOBAL_ALLOWED_ATTRIBUTES = Array.from(new Set(Object.values(ALLOWED_ATTRIBUTES_BY_TAG).flat()));

const SAFE_PROTOCOLS = new Set(['http:', 'https:', 'mailto:']);

const getPurifier = () => {
	if (typeof window === 'undefined') {
		return null;
	}

	return createDOMPurify(window);
};

const isUrlSafe = (url: string): boolean => {
	try {
		const baseUrl = typeof window !== 'undefined' ? window.location.href : 'https://example.com';
		const parsed = new URL(url, baseUrl);
		return SAFE_PROTOCOLS.has(parsed.protocol);
	} catch {
		return false;
	}
};

const sanitizeAttributes = (root: ParentNode) => {
	root.querySelectorAll('*').forEach((element) => {
		const tagName = element.tagName.toLowerCase();
		const allowedAttributes = new Set([
			...(ALLOWED_ATTRIBUTES_BY_TAG[tagName] ?? []),
			...(ALLOWED_ATTRIBUTES_BY_TAG['*'] ?? []),
		]);

		Array.from(element.attributes).forEach((attribute) => {
			if (!allowedAttributes.has(attribute.name)) {
				element.removeAttribute(attribute.name);
				return;
			}

			if (
				(attribute.name === 'href' || attribute.name === 'src') &&
				!isUrlSafe(attribute.value)
			) {
				element.removeAttribute(attribute.name);
			}
		});

		if (tagName === 'a' && element.getAttribute('target') === '_blank') {
			element.setAttribute('rel', 'noopener noreferrer');
		}
	});
};

const sanitize = (html: string, allowedTags: readonly string[]): string => {
	const purifier = getPurifier();
	if (!purifier || typeof DOMParser === 'undefined') {
		return html;
	}

	const sanitizedHtml = purifier.sanitize(html, {
		ALLOWED_TAGS: [...allowedTags],
		ALLOWED_ATTR: GLOBAL_ALLOWED_ATTRIBUTES,
		ALLOW_UNKNOWN_PROTOCOLS: false,
	});

	const doc = new DOMParser().parseFromString(sanitizedHtml, 'text/html');
	sanitizeAttributes(doc.body);

	return doc.body.innerHTML;
};

export const sanitizeHtml = (html: string): string =>
	sanitize(html, ALLOWED_BLOCK_TAGS);

export const sanitizeInlineHtml = (html: string): string =>
	sanitize(html, ALLOWED_INLINE_TAGS);
