import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import { useEffect, useId, useMemo, useState } from '@wordpress/element';
import type { ReactNode } from 'react';
import FieldWrapper from '../../FieldWrapper/FieldWrapper';

type RenderOptionState = {
	highlighted: boolean;
	selected: boolean;
};

type ComboboxProps = {
	label?: string;
	name?: string;
	width?: number;
	options: string[];
	required?: boolean;
	disabled?: boolean;
	placeholder?: string;
	help?: string;
	error?: string;
	customErrorMessage?: string;
	formTouched?: boolean;
	value?: string;
	onChange: (value: string) => void;
	allowClear?: boolean;
	clearLabel?: string;
	noResultsLabel?: string;
	renderOption?: (option: string, state: RenderOptionState) => ReactNode;
};

type ComboboxItem = {
	type: 'option' | 'clear';
	value: string;
	label: string;
};

const CLEAR_VALUE = '__ctx2_combobox_clear__';

const Combobox = (props: ComboboxProps) => {
	const {
		label = '',
		name = '',
		options,
		required = false,
		disabled = false,
		placeholder = '',
		help,
		error,
		customErrorMessage,
		formTouched = false,
		value = '',
		onChange,
		allowClear = false,
		clearLabel = 'Clear selection',
		noResultsLabel = 'No results',
		renderOption,
	} = props;

	const reactId = useId();
	const inputId = name || `combobox-${reactId}`;
	const helpId = help ? `${inputId}-help` : undefined;
	const errorId = `${inputId}-error`;

	const [touched, setTouched] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [inputValue, setInputValue] = useState(value);
	const [highlightedItem, setHighlightedItem] = useState<ComboboxItem | null>(
		null,
	);

	useEffect(() => {
		setInputValue(value);
	}, [options, value]);

	const filteredOptions = useMemo(() => {
		const query = inputValue.trim().toLowerCase();

		if (!query) {
			return options;
		}

		if (query.endsWith('*')) {
			const prefix = query.slice(0, -1);
			return options.filter((option) =>
				option.toLowerCase().startsWith(prefix),
			);
		}

		return options.filter((option) => option.toLowerCase().includes(query));
	}, [inputValue, options]);

	const clearEnabled = allowClear && inputValue.trim() !== '';
	const items = useMemo<ComboboxItem[]>(() => {
		const optionItems = filteredOptions.map((option) => ({
			type: 'option' as const,
			value: option,
			label: option,
		}));

		if (!clearEnabled) {
			return optionItems;
		}

		return [
			{
				type: 'clear',
				value: CLEAR_VALUE,
				label: clearLabel,
			},
			...optionItems,
		];
	}, [clearEnabled, clearLabel, filteredOptions]);

	const selectedItem = useMemo(
		() =>
			options.includes(value)
				? {
						type: 'option' as const,
						value,
						label: value,
					}
				: null,
		[options, value],
	);

	const hasError = !!error;
	const errorMessage =
		error ?? (formTouched || touched ? customErrorMessage : undefined);
	const describedBy =
		[helpId, hasError && errorMessage ? errorId : undefined]
			.filter(Boolean)
			.join(' ') || undefined;

	const classes = [
		'ctx2-form-field',
		'ctx2-combobox',
		required ? 'ctx2-input--required' : '',
		hasError ? 'ctx2-form-error' : '',
	]
		.filter(Boolean)
		.join(' ');

	const handleInputValueChange = (nextValue: string) => {
		setInputValue(nextValue);
		onChange(nextValue);
	};

	const handleValueChange = (item: ComboboxItem | null) => {
		if (!item || item.type === 'clear') {
			setInputValue('');
			onChange('');
			return;
		}

		setInputValue(item.value);
		onChange(item.value);
	};

	return (
		<FieldWrapper
			className={classes}
			label={label}
			required={required}
			labelFor={inputId}
			help={help}
			helpId={helpId}
			errorMessage={errorMessage}
			errorId={errorId}
			hasError={hasError && (touched || formTouched)}
		>
			<BaseCombobox.Root<ComboboxItem>
				items={items}
				value={selectedItem}
				inputValue={inputValue}
				open={isOpen}
				onInputValueChange={handleInputValueChange}
				onValueChange={handleValueChange}
				onOpenChange={setIsOpen}
				onItemHighlighted={(item) => setHighlightedItem(item ?? null)}
				itemToStringLabel={(item) => item.label}
				itemToStringValue={(item) => item.value}
				isItemEqualToValue={(item, selected) => item.value === selected.value}
				openOnInputClick={true}
				autoHighlight={false}
				filter={null}
				disabled={disabled}
				required={required}
			>
				<BaseCombobox.Input
					id={inputId}
					name={name || undefined}
					type="text"
					value={inputValue}
					placeholder={placeholder}
					required={required}
					disabled={disabled}
					autoComplete="off"
					aria-describedby={describedBy}
					aria-required={required || undefined}
					aria-invalid={hasError || undefined}
					aria-errormessage={hasError && errorMessage ? errorId : undefined}
					onFocus={() => setIsOpen(true)}
					onBlur={() => setTouched(true)}
				/>

				{isOpen && !disabled && (
					<BaseCombobox.Portal>
						<BaseCombobox.Positioner className="ctx2-combobox-positioner">
							<BaseCombobox.Popup className="ctx2-combobox-listbox">
								<BaseCombobox.List>
									{(item: ComboboxItem, index: number) => (
										<BaseCombobox.Item
											key={`${item.type}-${item.value}`}
											value={item}
											index={index}
											className="ctx2-combobox-option"
											onMouseDown={(event) => {
												event.preventDefault();
												handleValueChange(item);
												setIsOpen(false);
											}}
										>
											{item.type === 'clear'
												? item.label
												: renderOption
													? renderOption(item.value, {
															highlighted:
																highlightedItem?.value === item.value,
															selected: inputValue === item.value,
														})
													: item.label}
										</BaseCombobox.Item>
									)}
								</BaseCombobox.List>

								{filteredOptions.length === 0 && !clearEnabled && (
									<BaseCombobox.Empty className="ctx2-combobox-empty">
										{noResultsLabel}
									</BaseCombobox.Empty>
								)}
							</BaseCombobox.Popup>
						</BaseCombobox.Positioner>
					</BaseCombobox.Portal>
				)}
			</BaseCombobox.Root>
		</FieldWrapper>
	);
};

export default Combobox;
export type { ComboboxProps };
