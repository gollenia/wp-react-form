import type { ReactNode, Ref } from 'react';
import { FieldMessages } from '../FieldMessages/FieldMessages';

type FieldWrapperProps = {
	children: ReactNode;
	className?: string;
	label?: string;
	required?: boolean;
	labelFor?: string;
	containerRef?: Ref<HTMLDivElement>;
	hint?: string;
	hintId?: string;
	help?: string;
	helpHtml?: string;
	helpId?: string;
	errorMessage?: string;
	errorId: string;
	hasError?: boolean;
};

const FieldWrapper = ({
	children,
	className = '',
	label,
	required = false,
	labelFor,
	containerRef,
	hint,
	hintId,
	help,
	helpHtml,
	helpId,
	errorMessage,
	errorId,
	hasError = false,
}: FieldWrapperProps) => (
	<div ref={containerRef} className={className}>
		{label && (
			<label htmlFor={labelFor}>
				<span>{label}</span>
				{required && (
					<span className="ctx-form-label__required" aria-hidden="true" />
				)}
			</label>
		)}

		{children}

		<FieldMessages
			hint={hint}
			hintId={hintId}
			help={help}
			helpHtml={helpHtml}
			helpId={helpId}
			errorMessage={errorMessage}
			errorId={errorId}
			hasError={hasError}
		/>
	</div>
);

export default FieldWrapper;
export type { FieldWrapperProps };
