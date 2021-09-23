type ComponentType =
  | 'Alert'
  | 'Box'
  | 'Button'
  | 'ButtonDropdown'
  | 'Card'
  | 'Checkbox'
  | 'Confirmation'
  | 'Dropdown'
  | 'Flex'
  | 'Grid'
  | 'Heading'
  | 'Input'
  | 'Loader'
  | 'Menu'
  | 'Modal'
  | 'MultiSelectDropdown'
  | 'Paragraph'
  | 'Popover'
  | 'Radio'
  | 'Select'
  | 'SimpleGrid'
  | 'Spinner'
  | 'Stack'
  | 'Switch'
  | 'Tab'
  | 'Tabs'
  | 'Tag'
  | 'Toast'
  | 'Toggle'
  | 'Tooltip'

type MetaComponentType =
  | 'FormControlMeta'
  | 'AccordionMeta'
  | 'ListMeta'
  | 'AlertMeta'
  | 'InputGroupMeta'
  | 'BreadcrumbMeta'

interface IComponent {
  children: string[]
  type: ComponentType
  parent: string
  id: string
  props: any
  rootParentType?: ComponentType
  componentName?: string
}

interface IComponents {
  [name: string]: IComponent
}

interface IPreviewProps {
  component: IComponent
}

interface ComponentItemProps {
  id: string
  label: string
  type: ComponentType
  isMoved?: boolean
  isChild?: boolean
  isMeta?: boolean
  soon?: boolean
  rootParentType?: ComponentType
}
