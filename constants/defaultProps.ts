const DEFAULT_PROPS: any = {
    'Alert': {
	children:'Important! This is an Alert component',
    },
    'Button': {
	inline: true,
	type: 'primary',
	size: 'normal',
	children: 'Hello'
    },
    'ButtonDropdown': {
	id:"multi-click",
	position:"bottom",
	onClick:(e: any, v: any) => alert(`Clicked ${v.name}`),
	options: [
	    {
		id: "submit",
		name: "Submit",
	    },
	    {
		id: "reset",
		name: "Reset",
		type: "secondary",
	    },
	    {
		id: "delete",
		name: "Delete",
		type: "danger",
	    },
	    {
		id: "edit",
		disabled: true,
		name: "Edit",
	    },
	]

    },
    'Checkbox': {
	checked: true,
	name: "checkA",
	id: "checkA",
	children: 'I Agree'
    },
    'Input': {
	placeholder:"Accepts 10 chars",
	maxLength:10,
	showCount:false,
	value:'',
	label:"First Name:",
    },
    'Loader': {},
    'Toggle': {
	on: true,
	size: 'sm'
    }
}

export default DEFAULT_PROPS;
