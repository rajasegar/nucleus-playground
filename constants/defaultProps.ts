const DEFAULT_PROPS: any = {
  'Alert': {
    children: 'Important! This is an Alert component',
  },
  'Button': {
    inline: true,
    type: 'primary',
    size: 'normal',
    children: 'Hello',
    onClick: () => { },
  },
  'ButtonDropdown': {
    id: "multi-click",
    position: "bottom",
    onClick: (e: any, v: any) => alert(`Clicked ${v.name}`),
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
    onChange: () => { }
  },
  'Input': {
    placeholder: "Accepts 10 chars",
    maxLength: 10,
    showCount: false,
    value: '',
    label: "First Name:",
    onChange: () => { },
  },
  'Loader': {},
  'Toggle': {
    on: true,
    size: 'sm',
    handleChange: () => { }
  },
  'Grid': {
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: 6
  },
  'Heading': {
    children: 'Hello world',
    level: '1'
  },
  'Paragraph': {
    children: 'This is a paragraph'
  },
  'Box': {
    height: '100px'
  },
  'Card': {
    width: '100%'
  },
  'Tabs': {
    value: 'freshRelease',
    onChange: () => { },
    options: [
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
  },
  'Dropdown': {
    items: [
      { id: 'apple', name: 'Apple' },
      { id: 'orange', name: 'Orange' },
      { id: 'grapes', name: 'Grapes' },
    ],
    width: "230px",
    defaultSelectedItem: 'Apple',
    onChange: () => { },
    disabled: false,
    placeholder: "-- --- --"
  },
  'MultiSelectDropdown': {
    name: "cuisine",
    items: [
      { id: 'indian', name: 'Indian' },
      { id: 'chinese', name: 'Chinese' },
      { id: 'thai', name: 'Thai' },
    ],
    selectedItem: ['Indian'],
    onChange: () => { },
    label: "Favorite Cuisine",
    placeholder: "Choose your option quickly"
  },
  'Avatar': {
    children:'<img src="https://cdn.freshbots.ai/assets/imgs/g3_icons/widget-avatar/avatar_13.png"/>'
  },
  'Badge': {
    children: 'Primary',
    type: 'primary'
  },
  'Icons': {
    glyph: 'chevron-down'
  },
  'Accordion': {},
  'AccordionItem': {
    label: 'Section 1',
  },
  'Radio': {
    name:"hello",
    value:"hello",
    checked:true,
    onChange:() => {},
    children: 'Click me!'
  }
}

export default DEFAULT_PROPS;
