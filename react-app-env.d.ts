// declare module 'prettier/standalone'
// declare module 'coloreact'
// declare module 'browser-nativefs'

type ComponentType =
  | 'Accordion'
  | 'AccordionItem'
  | 'Alert'
  | 'Avatar'
  | 'Badge'
  | 'Box'
  | 'Button'
  | 'Checkbox'
  | 'Flex'
  | 'Grid'
  | 'Heading'
  | 'Icon'
  | 'Input'
  | 'Menu'
  | 'Radio'
  | 'Tab'
  | 'Tag'

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
