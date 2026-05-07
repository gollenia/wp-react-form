import createDOMPurify from 'dompurify';

let purifier: ReturnType<typeof createDOMPurify> | null = null;

const createPurifier = () => {
	if (typeof window === 'undefined') {
		return null;
	}

	const nextPurifier = createDOMPurify(window);

	nextPurifier.addHook('afterSanitizeAttributes', (node) => {
		if (
			node instanceof HTMLAnchorElement &&
			node.getAttribute('target') === '_blank'
		) {
			node.setAttribute('rel', 'noopener noreferrer');
		}
	});

	return nextPurifier;
};

const getPurifier = () => {
	if (typeof window === 'undefined') {
		return null;
	}

	if (!purifier) {
		purifier = createPurifier();
	}

	return purifier;
};

export type RenderHtmlProps = {
	tag?: Tag;
	id?: string;
	className?: string;
	role?: string;
	html: string;
	style?: React.CSSProperties;
};

type Tag = keyof JSX.IntrinsicElements;

export const sanitizeInlineHtml = (html: string): string => {
	const purifier = getPurifier();
	if (!purifier) {
		return '';
	}
	return purifier.sanitize(html, {
		ALLOWED_TAGS: ['a', 'p', 'b', 'strong', 'i', 'em', 'br', 'code'],
		ALLOWED_ATTR: ['href', 'title', 'target', 'rel'],
	});
};

export const sanitizeHtml = (html: string): string => sanitizeInlineHtml(html);

export const RenderHtml = ({
	html,
	tag: Tag = 'div',
	id,
	className,
	role,
	style,
}: RenderHtmlProps) => (
	<Tag
		className={className}
		role={role}
		style={style}
		id={id}
		// biome-ignore lint/security/noDangerouslySetInnerHtml: HTML is sanitized with DOMPurify
		dangerouslySetInnerHTML={{ __html: sanitizeInlineHtml(html) }}
	/>
);
