import { Select as BaseSelect } from '@base-ui/react/select';
import { useId, useMemo, useRef, useState } from '@wordpress/element';
import type { FieldValue, SelectOptions } from '../../../types';
import FieldWrapper from '../../FieldWrapper/FieldWrapper';

export type SelectProps = {
	label?: string;
	name?: string;
	required?: boolean;
	width?: number;
	options?: SelectOptions;
	hasEmptyOption?: boolean;
	help?: string;
	hint?: string;
	disabled?: boolean;
	customError?: string;
	formTouched?: boolean;
	customErrorMessage?: string;
	error?: string;
	onChange: (value: FieldValue) => void;
	value: string | string[];
	emptyOptionLabel?: string;
};

type NormalizedOption = {
	value: string;
	label: string;
};

const Select = (props: SelectProps) => {
	const {
		onChange,
		options,
		hasEmptyOption = false,
		help,
		hint,
		disabled = false,
		required = false,
		label = '',
		name = '',
		customError,
		customErrorMessage,
		error,
		value,
		formTouched = false,
		emptyOptionLabel = 'Make a selection',
	} = props;

	const [touched, setTouched] = useState(false);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const reactId = useId();

	const selectId = name || `select-${reactId}`;
	const helpId = help ? `${selectId}-help` : undefined;
	const hintId = hint ? `${selectId}-hint` : undefined;
	const errorId = `${selectId}-error`;

	const isTouched = formTouched || touched;
	const nativeInvalid =
		!!inputRef.current && !inputRef.current.validity.valid;
	const hasError = !!error || (nativeInvalid && isTouched);
	const errorMessage =
		error ??
		customErrorMessage ??
		(isTouched ? inputRef.current?.validationMessage : undefined);

	const describedBy =
		[hintId, helpId, hasError && errorMessage ? errorId : undefined]
			.filter(Boolean)
			.join(' ') || undefined;

	const classes = [
		'ctx2-form-field',
		'ctx2-select',
		required ? 'ctx2-select--required' : '',
		hasError ? 'ctx2-form-error' : '',
	]
		.filter(Boolean)
		.join(' ');

	const normalizedOptions = useMemo<NormalizedOption[]>(() => {
		if (!options) return [];

		if (Array.isArray(options)) {
			return options.map((option) => ({
				value: option,
				label: option,
			}));
		}

		return Object.entries(options).map(([key, optionLabel]) => ({
			value: key,
			label: optionLabel,
		}));
	}, [options]);

	const selectedLabel = useMemo(() => {
		const selected = normalizedOptions.find((option) => option.value === value);

		if (selected) {
			return selected.label;
		}

		return hasEmptyOption && value === '' ? emptyOptionLabel : undefined;
	}, [emptyOptionLabel, hasEmptyOption, normalizedOptions, value]);

	const handleBlur = () => {
		setTouched(true);
	};

	const handleValueChange = (nextValue: string | null) => {
		if (customError) {
			inputRef.current?.setCustomValidity('');
		}

		onChange(nextValue ?? '');
	};

	const setInputRef = (input: HTMLInputElement | null) => {
		inputRef.current = input;

		if (!input) {
			return;
		}

		if (customError) {
			input.setCustomValidity(customError);
		}
	};

	return (
		<FieldWrapper
			className={classes}
			label={label}
			required={required}
			labelFor={selectId}
			hint={hint}
			hintId={hintId}
			help={help}
			helpId={helpId}
			errorMessage={errorMessage}
			errorId={errorId}
			hasError={hasError}
		>
			<BaseSelect.Root<string>
				id={selectId}
				name={name || undefined}
				required={required}
				disabled={disabled}
				value={typeof value === 'string' ? value : value[0] ?? ''}
				onValueChange={handleValueChange}
				inputRef={setInputRef}
			>
				<BaseSelect.Trigger
					id={selectId}
					disabled={disabled}
					aria-required={required || undefined}
					aria-invalid={hasError || undefined}
					aria-describedby={describedBy}
					aria-errormessage={hasError && errorMessage ? errorId : undefined}
					onBlur={handleBlur}
					className="ctx2-select__trigger"
				>
					<BaseSelect.Value placeholder={emptyOptionLabel}>
						{() => selectedLabel ?? emptyOptionLabel}
					</BaseSelect.Value>
					<BaseSelect.Icon aria-hidden="true" />
				</BaseSelect.Trigger>

				<BaseSelect.Portal>
					<BaseSelect.Positioner
						className="ctx2-select__positioner"
						positionMethod="fixed"
						side="bottom"
						align="start"
						sideOffset={4}
						alignItemWithTrigger={false}
					>
						<BaseSelect.Popup className="ctx2-select__popup">
							<BaseSelect.List className="ctx2-select__list">
								{hasEmptyOption && (
									<BaseSelect.Item
										value=""
										disabled={required}
										label={emptyOptionLabel}
										className="ctx2-select__option"
										onMouseDown={(event) => {
											event.preventDefault();
											if (!required) {
												handleValueChange('');
											}
										}}
										onClick={() => {
											if (!required) {
												handleValueChange('');
											}
										}}
									>
										<BaseSelect.ItemText>
											{emptyOptionLabel}
										</BaseSelect.ItemText>
									</BaseSelect.Item>
								)}

								{normalizedOptions.map((option) => (
									<BaseSelect.Item
										key={option.value}
										value={option.value}
										label={option.label}
										className="ctx2-select__option"
										onMouseDown={(event) => {
											event.preventDefault();
											handleValueChange(option.value);
										}}
										onClick={() => handleValueChange(option.value)}
									>
										<BaseSelect.ItemText>{option.label}</BaseSelect.ItemText>
									</BaseSelect.Item>
								))}
							</BaseSelect.List>
						</BaseSelect.Popup>
					</BaseSelect.Positioner>
				</BaseSelect.Portal>
			</BaseSelect.Root>
		</FieldWrapper>
	);
};

export default Select;
