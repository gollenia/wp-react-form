# `@contexis/wp-react-form`

React form renderer for WordPress-based frontends.

The package uses `@wordpress/element` and renders forms from a field schema. You can either render a complete form through `Form` or compose lower-level building blocks such as `Fieldset`, `FormField`, `Input`, `TextArea`, `Select`, `Checkbox`, `Flex`, and `Stepper`.

## Install

```bash
npm install @contexis/wp-react-form
```

## Scope

This package is primarily a schema-driven form renderer for WordPress-based frontends.

- `Form`, `FormField`, and `Fieldset` are the main public building blocks.
- The concrete field components such as `Input`, `TextArea`, `Select`, or `Checkbox` are exported so individual fields can also be rendered directly in larger apps and plugins while staying visually and behaviorally consistent with schema-rendered forms.
- External UI libraries may be used internally as implementation details, but they are not the public API of this package.
- If you want consistency with the schema-driven form system, import primitives from this package rather than mixing them directly with third-party field components.

## Exports

Default export:

- `Form`

Named exports:

- `Form`
- `Fieldset`
- `FormFields`
- `FormField`
- `InputField`
- `Input`
- `TextArea`
- `Select`
- `Radio`
- `Button`
- `Checkbox`
- `Combobox`
- `Country`
- `Flex`
- `Hidden`
- `Range`
- `Stepper`
- `Submit`
- `getDefaultFormValues`
- `normalizeFieldValue`
- `isFieldVisible`
- `getCountryOptions`
- `sanitizeHtml`
- `sanitizeInlineHtml`

The package also exports the relevant TypeScript types from [`src/types.ts`](/var/www/projects/wp-react-form/src/types.ts).

## Basic Usage

```tsx
import Form from '@contexis/wp-react-form';

const fields = [
	{
		name: 'name',
		type: 'text',
		label: 'Name',
		required: true,
	},
	{
		name: 'email',
		type: 'email',
		label: 'E-Mail',
		required: true,
	},
	{
		name: 'country',
		type: 'country',
		label: 'Country',
	},
	{
		name: 'newsletter',
		type: 'toggle',
		label: 'Subscribe to newsletter',
		defaultValue: false,
	},
	{
		name: 'submit',
		type: 'submit',
		label: 'Send',
	},
];

export function Example() {
	return (
		<Form
			data={fields}
			extraData={{ source: 'landing-page' }}
			submitUrl="/wp-json/my-form/v1/submit"
			onSubmissionFinished={(response) => {
				console.log(response.success);
			}}
		/>
	);
}
```

## `Form` Props

- `data?: FormFieldDefinition[]`
- `formUrl?: string`
- `submitUrl?: string`
- `extraData?: FormValues`
- `onSubmit?: (event, data) => void`
- `onSubmissionFinished?: (response) => void`
- `onStateChange?: (state) => void`
- `onChange?: (form) => void`

Notes:

- If `formUrl` is set, the form schema is loaded via `fetch`.
- If `onSubmit` is provided, submission is handled externally.
- If `onSubmit` is not provided, the component posts JSON to `submitUrl`.

## Supported Field Types

- `text`
- `email`
- `url`
- `tel`
- `password`
- `search`
- `date`
- `week`
- `month`
- `datetime-local`
- `number`
- `range`
- `numberpicker`
- `select`
- `combobox`
- `radio`
- `options`
- `textarea`
- `checkbox`
- `toggle`
- `country`
- `html`
- `hidden`
- `submit`

The following input types exist in the shared type union but are not currently mapped to dedicated UI in `FormField`:

- `time`
- `year`
- `file`

## Field Schema

The main schema type is `FormFieldDefinition`.

Common properties:

- `name`
- `type`
- `label`
- `defaultValue`
- `required`
- `placeholder`
- `help`
- `hint`
- `description`
- `width`
- `visibilityRule`
- `customError`
- `customErrorMessage`
- `testId`

Field-specific properties:

- `options` for `select`, `combobox`, `radio`, `options`
- `rows` for `textarea`
- `min`, `max`, `hasTicks`, `hasLabels` for `range` and `numberpicker`
- `region` for `country`
- `alignment` for `submit`
- `content` for `html`

Example:

```ts
const fields = [
	{
		name: 'details',
		type: 'textarea',
		label: 'Details',
		rows: 5,
		visibilityRule: {
			field: 'newsletter',
			value: true,
			operator: 'equals',
		},
	},
];
```

## Lower-Level Usage

If you do not want the full `Form` component, you can render visible fields yourself:

```tsx
import { Fieldset } from '@contexis/wp-react-form';

<Fieldset
	fields={fields}
	formData={formData}
	errors={errors}
	status="LOADED"
	formTouched={false}
	disabled={false}
	onChange={(name, value) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	}}
/>;
```

`FormFields` remains available as a backwards-compatible alias.

Or render a single schema-driven field directly:

```tsx
import { FormField } from '@contexis/wp-react-form';

<FormField
	type="text"
	name="company"
	label="Company"
	status="LOADED"
	formTouched={false}
	disabled={false}
	value=""
	onChange={(value) => {
		console.log(value);
	}}
/>;
```

`InputField` remains available as a backwards-compatible alias.

If you want to use the concrete field primitives directly, import them individually:

```tsx
import { Input, Select, TextArea } from '@contexis/wp-react-form';
```
