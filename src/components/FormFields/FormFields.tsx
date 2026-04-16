import {
	isFieldVisible,
} from '../../modules/visibility';
import { normalizeFieldValue } from '../../modules/values';
import type { FieldValue, FormFieldDefinition, FormState } from '../../types';
import FormField from '../InputField/InputField';

type Props = {
	fields: FormFieldDefinition[];
	formData: Record<string, unknown>;
	errors?: Record<string, string>;
	status?: FormState;
	disabled?: boolean;
	formTouched?: boolean;
	onChange: (name: string, value: FieldValue) => void;
};

export function Fieldset({
	fields,
	formData,
	errors = {},
	status = 'LOADED',
	disabled = false,
	formTouched = false,
	onChange,
}: Props) {
	const visibleFields = fields.filter((field) =>
		isFieldVisible(field.visibilityRule, formData),
	);

	return (
		<div className="ctx-form-fields">
			{visibleFields.map((field) => (
				<div
					key={field.name}
					className={`ctx-form-fields__item ctx-width--${field.width ?? 6}`}
					data-testid={field.testId}
				>
					{field.description && (
						<p className="ctx-form-field-description">{field.description}</p>
					)}
					<FormField
						{...field}
						status={status}
						disabled={disabled}
						formTouched={formTouched}
						error={errors[field.name]}
						value={normalizeFieldValue(field, formData)}
						onChange={(value) => onChange(field.name, value)}
					/>
				</div>
			))}
		</div>
	);
}

export { Fieldset as FormFields };
