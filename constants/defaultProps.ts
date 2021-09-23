const DEFAULT_PROPS: any = {
    'Alert': {
	children:'Important! This is an Alert component',
    },
    'Button': {
	inline: true,
	type: 'primary',
	size: 'normal',
	children: 'Hello',
	onClick: () => {},
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
	children: 'I Agree',
	onChange: () => {}
    },
    'Input': {
	placeholder:"Accepts 10 chars",
	maxLength:10,
	showCount:false,
	value:'',
	label:"First Name:",
	onChange: () => {},
    },
    'Loader': {},
    'Toggle': {
	on: true,
	size: 'sm',
	handleChange: () => {} 
    },
    'Grid': {
	gridTemplateColumns: 'repeat(5, 1fr)',
	gridGap: 6
    },
    'Heading': {
	text: 'Hello world',
	as: 'h1'
    },
    'Paragraph': {
	text: 'This is a paragraph'
    },
    'Box': {
	height: '100px'
    },
  'Card':  {},
  'Tabs': {
    value:'freshRelease',
    onChange: () => {},
    options:[
  {
    id: 'freshDesk',
    name: 'Fresh Desk',
  },
  {
    id: 'freshRelease',
    name: 'Fresh Release',
  },
  {
    id: 'freshChat',
    name: 'Fresh Chat',
    disabled: true,
  },
  {
    id: 'freshPing',
    name: 'Fresh Ping',
  },
  {
    id: 'freshStatus',
    name: 'Fresh Status',
    hide: true,
  },
]
  },
  'Tag': {
    children: 'Pending',
    variant: 'grey'
  }
}

export default DEFAULT_PROPS;
