import { useId, useRef, useState } from '@wordpress/element';
import type { ChangeEvent, InvalidEvent } from 'react';
import { RenderHtml, sanitizeInlineHtml } from '../../../modules/RenderHtml';
import type { FieldValue } from '../../../types';
import { FieldMessages } from '../../FieldMessages/FieldMessages';

type CheckboxVariant = 'checkbox' | 'toggle';

type CheckboxProps = {
	label?: string;
	name?: string;
	width?: number;
	disabled?: boolean;
	required?: boolean;
	customErrorMessage?: string;
	error?: string;
	value: boolean;
	help?: string;
	formTouched?: boolean;
	variant?: CheckboxVariant;
	onChange: (value: FieldValue) => void;
};

const Checkbox = (props: CheckboxProps) => {
	const {
		label = '',
		name = '',
		disabled = false,
		required = false,
		customErrorMessage,
		error,
		value,
		help,
		formTouched = false,
		variant = 'checkbox',
		onChange,
	} = props;

	const inputRef = useRef<HTMLInputElement>(null);
	const [touched, setTouched] = useState(false);
	const reactId = useId();

	const inputId = name || `checkbox-${reactId}`;
	const helpId = help ? `${inputId}-help` : undefined;
	const errorId = `${inputId}-error`;

	const isTouched = formTouched || touched;
	const nativeInvalid = !!inputRef.current && !inputRef.current.validity.valid;
	const hasError = !!error || (nativeInvalid && isTouched);
	const errorMessage =
		error ??
		customErrorMessage ??
		(isTouched ? inputRef.current?.validationMessage : undefined);

	const describedBy =
		[helpId, hasError && errorMessage ? errorId : undefined]
			.filter(Boolean)
			.join(' ') || undefined;

	const classes = [
		'ctx2-form-field',
		variant === 'toggle' ? 'ctx2-toggle' : 'ctx2-checkbox',
		hasError ? 'ctx2-form-error' : '',
	]
		.filter(Boolean)
		.join(' ');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (customErrorMessage) {
			event.currentTarget.setCustomValidity('');
		}
		onChange(event.currentTarget.checked);
	};

	const handleInvalid = (event: InvalidEvent<HTMLInputElement>) => {
		if (!customErrorMessage) return;
		event.currentTarget.setCustomValidity(customErrorMessage);
	};

	return (
		<div className={classes}>
			<label htmlFor={inputId} className="ctx2-form-checkbox-label">
				<span className="ctx2-toggle__control">
					<input
						ref={inputRef}
						id={inputId}
						name={name || undefined}
						type="checkbox"
						checked={value}
						disabled={disabled}
						required={required}
						aria-required={required || undefined}
						aria-invalid={hasError || undefined}
						aria-describedby={describedBy}
						aria-errormessage={hasError && errorMessage ? errorId : undefined}
						onChange={handleChange}
						onBlur={() => setTouched(true)}
						onInvalid={handleInvalid}
					/>
					{variant === 'toggle' && (
						<span className="ctx2-toggle__switch" aria-hidden="true" />
					)}
				</span>

				{label && (
					<>
						<RenderHtml
							className="ctx2-form-checkbox-label__text"
							html={label}
							tag="span"
						/>
						{required && (
							<span className="ctx2-form-label__required" aria-hidden="true" />
						)}
					</>
				)}
			</label>

			{help && (
				<FieldMessages
					helpHtml={sanitizeInlineHtml(help)}
					helpId={helpId}
					errorMessage={errorMessage}
					errorId={errorId}
					hasError={hasError}
				/>
			)}
		</div>
	);
};

export default Checkbox;
export type { CheckboxProps, CheckboxVariant };
