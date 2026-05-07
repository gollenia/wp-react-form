import { RenderHtml } from '../../modules/RenderHtml';

type FieldMessagesProps = {
	hint?: string;
	hintId?: string;
	help?: string;
	helpHtml?: string;
	helpId?: string;
	errorMessage?: string;
	errorId: string;
	hasError?: boolean;
};

export const FieldMessages = ({
	hint,
	hintId,
	help,
	helpHtml,
	helpId,
	errorMessage,
	errorId,
	hasError = false,
}: FieldMessagesProps) => (
	<>
		{hint && hintId && (
			<div id={hintId} className="ctx2-form-hint">
				{hint}
			</div>
		)}

		{helpHtml && helpId && (
			<RenderHtml id={helpId} className="ctx2-form-help" html={helpHtml} />
		)}

		{help && helpId && !helpHtml && (
			<div id={helpId} className="ctx2-form-help">
				{help}
			</div>
		)}

		{hasError && errorMessage && (
			<div id={errorId} role="alert" className="ctx2-form-error">
				{errorMessage}
			</div>
		)}
	</>
);
