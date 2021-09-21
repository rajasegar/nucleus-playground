import { useDrop, DropTargetMonitor } from 'react-dnd'
import { rootComponents } from '../utils/editor'
import { useComponents } from './useComponents'
import { DRAG_TYPES } from "../constants/DragTypes";

const DEFAULT_PROPS: any = {
    'Alert': {
	props:{
	    children:'Important! This is an Alert component',
	},
    },
    'Button': {
	props: {
	    inline: true,
	    type: 'primary',
	    size: 'normal',
	    children: 'Hello'
	}
    }
}

export const useDropComponent = (
    componentId: string,
    accept: any = rootComponents,
    canDrop: boolean = true,
) => {

    const [state, dispatch]: any = useComponents();

    const [{ isOver, isOverCurrent }, drop] = useDrop({
	accept: DRAG_TYPES.COMPONENT,
	drop(item: any, monitor: any) {

	    const didDrop = monitor.didDrop();
	    if (didDrop) {
		return;
	    }

	    const componentStructure: any = {
		name: item.id,
		type: item.id,
		props: DEFAULT_PROPS[item.id].props || {},
		children:DEFAULT_PROPS[item.id].children || [],
		parent: componentId,
	    };

	    dispatch({
		type: "ADD_COMPONENT",
		component: componentStructure,
		selectedId: componentStructure.id,
	    });
	},
	collect: (monitor: any) => ({
	    isOver: monitor.isOver(),
	    isOverCurrent: monitor.isOver({ shallow: true }),
	}),
    });

    return { drop, isOver }
}
