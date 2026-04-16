import type { ReactNode } from 'react';

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
			<div id={hintId} className="ctx-form-hint">
				{hint}
			</div>
		)}

		{helpHtml && helpId && (
			<div
				id={helpId}
				className="ctx-form-help"
				dangerouslySetInnerHTML={{ __html: helpHtml }}
			/>
		)}

		{help && helpId && !helpHtml && (
			<div id={helpId} className="ctx-form-help">
				{help}
			</div>
		)}

		{hasError && errorMessage && (
			<div id={errorId} role="alert" className="error-message">
				{errorMessage}
			</div>
		)}
	</>
);
