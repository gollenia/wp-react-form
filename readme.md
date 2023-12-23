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
	name: {
		
	}
}
	
<Form
	extraData={{ id, page }}
	lang={lang}
    data={formData}
/>,
```

