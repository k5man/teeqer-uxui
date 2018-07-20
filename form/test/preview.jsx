import { InputField, PhoneInputField, CheckboxField, RadioField, MaskedInputField, TextArea, RangeField, SelectField } from '../index';

export default {
	title: 'Form',
	blocks: [
		{
			title: 'Input Text',
			text: `<InputField label="Text field" />`,
			component: () => {
				return (<InputField label="Text field" />);
			},
		},
		{
			title: 'Input Text Area',
			text: `<TextArea label="Text field" />`,
			component: () => {
				return (<TextArea label="Text field" />);
			},
		},
		{
			title: 'Select Field',
			text: `<SelectField label="SelectField field" />`,
			component: () => {
				return (<SelectField label="SelectField field" />);
			},
		},
		{
			title: 'Checkbox Text',
			text: `<CheckboxField label="Checkbox field" />`,
			component: () => {
				return (<CheckboxField label="Checkbox field" />);
			},
		},
		{
			title: 'Checkbox Text',
			text: `<CheckboxField class="filled-in" label="Checkbox field" />`,
			component: () => {
				return (<CheckboxField class="filled-in" label="Checkbox field" />);
			},
		},
		{
			title: 'Radio text',
			text: `<div>
	<RadioField name="test1" label="Radio field" />
	<RadioField name="test1" label="Radio field" />
	<RadioField name="test2" label="Radio field" />
</div>`,
			component: () => {
				return (
					<div>
						<RadioField name="test1" label="Radio field" />
						<RadioField name="test1" label="Radio field" />
						<RadioField name="test2" label="Radio field" />
					</div>
				);
			},
		},
		{
			title: 'Range Field',
			text: `<RangeField label="Select Number" />`,
			component: () => {
				return (<RangeField  min="1" max="5" step="1" label="Select Number" />);
			},
		},
		{
			title: 'Input phone',
			text: `<PhoneInputField
	phone=""
	minLength={10}
	maxLength={10}
	mask="+7(999)9999999"
	pfx="+7"
	hint="Phone field"
	className="green lighten-5"
/>`,
			component: () => {
				return (<PhoneInputField
					phone=""
					minLength={10}
					maxLength={10}
					mask="+1(999)9999999"
					pfx="+1"
					hint="Phone field"
				/>
				);
			},
		},
		{
			title: 'Masked input text',
			text: `<MaskedInputField 
	label="Text field"
	mask={[/\\d/, /\\d/, '/', /\\d/, /\\d/, '/', /\\d/, /\\d/, /\\d/, /\\d/]}
/>
<MaskedInputField 
	label="Text field"
	showMask={false}
	autoCorrectedDatePipe="mm/dd/yyyy"
	mask={[/\\d/, /\\d/, '/', /\\d/, /\\d/, '/', /\\d/, /\\d/, /\\d/, /\\d/]}
/>`,
			component: () => {
				return (
					<div>
						<MaskedInputField
							label="Text field"
							showMask
							mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
						/>
						<MaskedInputField
							label="Text field"
							showMask={false}
							autoCorrectedDatePipe="mm/dd/yyyy"
							value="11/11/1111"
							mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
						/>
					</div>
				);
			},
		},
	],
};

/*
		{
			title: 'Input phone',
			text: `<PhoneInputField
	label="Телефон"
	indicateInvalid={false}
/>`,
			component: () => {
				return (<PhoneInputField
					label="Телефон"
					indicateInvalid={false}
				/>);
			},
		},
*/
