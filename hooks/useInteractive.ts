import { useRef, MouseEvent } from 'react'
import { useDrag } from 'react-dnd'
import {
  getIsSelectedComponent,
  getIsHovered,
} from '../core/selectors/components'
import { useComponents } from './useComponents';

export const useInteractive = (
  component: IComponent,
  enableVisualHelper: boolean = false,
) => {
    const [state,dispatch] = useComponents();
    const { showLayout }  = state;
    const isComponentSelected = getIsSelectedComponent(state,component.id)
    const isHovered = getIsHovered(state,component.id)

  const [, drag] = useDrag({
    type: component.type,
      item: () => ({ id: component.id, isMoved: true }),
  })

  const ref = useRef<HTMLDivElement>(null)
  let props = {
    ...component.props,
    onMouseOver: (event: MouseEvent) => {
      event.stopPropagation()
	dispatch({
	    type: 'COMPONENT_MOUSE_OVER',
	    id: component.id
	});
    },
    onMouseOut: () => {
	dispatch({
	    type: 'COMPONENT_MOUSE_OUT'
	})
    },
    onClick: (event: MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()
	dispatch({
	    type: 'COMPONENT_CLICK',
	    id: component.id
	})
    },
    onDoubleClick: (event: MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()
      if (focusInput === false) {
        // dispatch.app.toggleInputText()
      }
    },
  }

  if (showLayout && enableVisualHelper) {
    props = {
      ...props,
      border: `1px dashed #718096`,
      padding: props.p || props.padding ? props.p || props.padding : 4,
    }
  }

  if (isHovered || isComponentSelected) {
    props = {
      ...props,
      boxShadow: '#4FD1C5 0px 0px 0px 2px inset',
    }
  }

  return { props, ref: drag(ref), drag }
}
