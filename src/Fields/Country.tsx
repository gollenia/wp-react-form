import { useEffect, useRef, useState } from '@wordpress/element';
type CountryProps = {
	label: string;
	placeholder: string;
	name: string;
	required: boolean;
	width: number;
	region:
		| 'world'
		| 'europe'
		| 'german'
		| 'english'
		| 'spanish'
		| 'french'
		| 'asia'
		| 'africa'
		| 'oceania'
		| 'americas';
	disabled: boolean;
	customError: string;
	help: string;
	formTouched: boolean;
	customErrorMessage?: string;
	onChange: (value: string) => void;
	value: string;
	className: string;
	tabIndex: number;
	id: string;
};

type Option = {
	value: string;
	label: string;
};

const browserLanguage = navigator.language.split('-')[0];

const Country = (props: CountryProps) => {
	const {
		onChange,
		disabled = false,
		placeholder = '',
		required,
		name = '',
		label = '',
		width = 6,
		region = 'world',
		help,
		customErrorMessage,
		value,
		className = '',
		tabIndex,
		id,
	} = props;

	const inputRef = useRef<HTMLSelectElement>(null);

	const [countries, setCountries] = useState<Array<any>>([]);
	const [selectedCountry, setSelectedCountry] = useState(placeholder);
	const [touched, setTouched] = useState(false);

	useEffect(() => {
		fetch(
			`https://countries.kids-team.com/countries/${region}/${browserLanguage}`
		)
			.then((response) => response.json())
			.then((data) => {
				const countryList = Object.entries(data).map(
					([key, name], index) => {
						return { value: key, label: name };
					}
				);

				setCountries(countryList);
			});
	}, []);

	const onChangeHandler = (event: any) => {
		setSelectedCountry(event.target.value);
		onChange(event.target.value);
	};

	const isTouched = props.formTouched || touched;

	const classes = [
		'ctx-form-field',
		'select',
		'input--width-' + width,
		className,
		props.required ? 'select--required' : '',
		!inputRef?.current?.validity.valid && isTouched ? 'error' : '',
	]
		.join(' ')
		.trim();

	return (
		<div
			className={classes}
			style={{
				gridColumn: `span ${width}`,
			}}
		>
			<label>{label}</label>
			<select
				name={name}
				required={required}
				disabled={disabled}
				onBlur={() => setTouched(true)}
				onChange={onChangeHandler}
				ref={inputRef}
				value={selectedCountry}
				id={id}
				tabIndex={tabIndex}
			>
				<option value="" disabled>
					{help ?? 'Make a selection'}
				</option>
				{countries.map((country: Option, index) => {
					return (
						<option key={index} value={country.value}>
							{country.label}
						</option>
					);
				})}
			</select>
			{isTouched &&
				!inputRef?.current?.validity.valid &&
				inputRef.current?.validationMessage && (
					<span className="error-message">
						{customErrorMessage ||
							inputRef.current?.validationMessage}
					</span>
				)}
		</div>
	);
};

export default Country;
export type { CountryProps };
