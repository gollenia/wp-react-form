export type HTMLBlockProps = {
	content: string;
	width: number;
	className?: string;
};

const HTMLBlock = (props: HTMLBlockProps) => {
	const { content, width, className = '' } = props;
	const classes = [
		className,
		'ctx-form-field',
		'core-block',
		'ctx-form-field-w' + width,
	]
		.join(' ')
		.trim();

	return (
		<div
			className={classes}
			style={{
				gridColumn: `span ${width}`,
			}}
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
};

export default HTMLBlock;
