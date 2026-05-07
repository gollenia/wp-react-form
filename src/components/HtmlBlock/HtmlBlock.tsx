import { RenderHtml } from '../../modules/RenderHtml';

export type HTMLBlockProps = {
	content?: string;
	width?: number;
	role?: 'note' | 'region' | 'presentation';
};

const HTMLBlock = ({ content = '', role }: HTMLBlockProps) => {
	const classes = ['ctx-content-block', 'core-block'].join(' ');

	return <RenderHtml className={classes} role={role} html={content} />;
};

export default HTMLBlock;
