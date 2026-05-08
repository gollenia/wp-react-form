import { useId } from '@wordpress/element';
import type { ChangeEvent, ReactNode } from 'react';
import type { FieldValue } from '../../../types';
import { FieldMessages } from '../../FieldMessages/FieldMessages';

export type RadioCardOption = {
	value: string;
	title: string;
	description?: string;
	disabled?: boolean;
	icon?: ReactNode;
	note?: string;
};

export type RadioCardsProps = {
	label?: string;
	name?: string;
	required?: boolean;
	width?: number;
	options?: RadioCardOption[];
	disabled?: boolean;
	help?: string;
	error?: string;
	customErrorMessage?: string;
	formTouched?: boolean;
	onChange: (value: FieldValue) => void;
	value: string;
};

const RadioCards = (props: RadioCardsProps) => {
	const {
		onChange,
		options = [],
		name = '',
		disabled = false,
		required = false,
		label = '',
		help,
		error,
		customErrorMessage,
		value,
	} = props;

	const reactId = useId();
	const fieldId = name || `radio-cards-${reactId}`;
	const helpId = help ? `${fieldId}-help` : undefined;
	const errorId = `${fieldId}-error`;

	const hasError = !!error;
	const errorMessage = error ?? customErrorMessage;
	const describedBy =
		[helpId, hasError && errorMessage ? errorId : undefined]
			.filter(Boolean)
			.join(' ') || undefined;

	const classes = [
		'ctx2-form-field',
		'ctx2-radio-cards',
		required ? 'ctx2-radio-cards--required' : '',
		hasError ? 'ctx2-form-error' : '',
	]
		.filter(Boolean)
		.join(' ');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.currentTarget.value);
	};

	return (
		<div className={classes}>
			<fieldset
				className="ctx2-radio-cards__group"
				aria-describedby={describedBy}
				aria-invalid={hasError || undefined}
			>
				{label && (
					<legend>
						<span>{label}</span>
						{required && (
							<span className="ctx2-form-label__required" aria-hidden="true" />
						)}
					</legend>
				)}

				{options.map((option, index) => {
					const optionId = `${fieldId}-${index}`;
					const optionDisabled = disabled || option.disabled;

					return (
						<label
							className="ctx2-radio-cards__option"
							key={optionId}
							htmlFor={optionId}
						>
							<input
								id={optionId}
								type="radio"
								name={name || fieldId}
								value={option.value}
								checked={value === option.value}
								onChange={handleChange}
								disabled={optionDisabled}
								required={required}
							/>
							<span className="ctx2-radio-cards__card">
								<span className="ctx2-radio-cards__title">
									{option.icon}
									<span>{option.title}</span>
								</span>
								{option.description && (
									<span className="ctx2-radio-cards__description">
										{option.description}
									</span>
								)}
								{option.note && (
									<small className="ctx2-radio-cards__note">
										{option.note}
									</small>
								)}
							</span>
						</label>
					);
				})}
			</fieldset>

			<FieldMessages
				help={help}
				helpId={helpId}
				errorMessage={errorMessage}
				errorId={errorId}
				hasError={hasError}
			/>
		</div>
	);
};

export default RadioCards;
