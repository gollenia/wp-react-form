## React form renderer for Wordpress

This plugin is intended as a helper to render a form on your wordpress-website based on a JSON Scheme. This scheme can either be loaded directly into the component via props, or a fitting REST url can be provided.

The plugin makes use of wordpress' own version of React in `@wordpress/element`, so no need to import any additional libraries.

#### Components

You can render a complete form or only single form components, as you prefer. The components are

- Checkbox
- Country
- DateInput
- HtmlBlock
- MailInput
- NumberInput
- Radio
- Select
- Submit
- Telephone
- Combobox
- Textarea
- TextInput

#### Basic Usage

Install the package with the package manager of your choice, like

```bash
npm install @contexis/wp-react-form
```

and import it into your project:

```js
import Form from '@contexis/wp-react-form';
```

Then you can insert the component anywhere in your JSX template:

```jsx
const formData = {
	fields: [
		{ name: 'name', type: 'text' },
		{ name: 'mail', type: 'email' }
	]
}

<Form
	extraData={{ id, page }} // hiddenfields
	lang="de_AT"
    data={formData} // Array containing form Data
	formUrl='/wp-json/myfom/v2/getform/234' // load data from an URL instead
	onSubmit={() => { yourAction()}}
	onSubmissionFinished={() => { yourAction()}}
	validate={true}
	submitUrl={}
/>,
```

You can also use the single fields without the form

```


#### Changes
## 1.1.5
- added ids

## 1.1.4
- added @wordpress/prettier-config
- added tabIndex-property

## 1.1.2
- className added to every InputField

## 1.1.1
- Tests now run over InputField component

## 1.1.0
- Added Currency

## 1.0.17
- Numbers now suport range and numbers

## 1.0.16
- Added custom classes that can be included
```
