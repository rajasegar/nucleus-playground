import { useDrop, DropTargetMonitor } from 'react-dnd'
import { rootComponents } from '../utils/editor'
import { useComponents } from './useComponents'
import { DRAG_TYPES } from "../constants/DragTypes";


export const useDropComponent = (
    componentId: string,
    accept: any = rootComponents,
    canDrop: boolean = true,
) => {

    const [state, dispatch] = useComponents();

    const [{ isOver, isOverCurrent }, drop] = useDrop({
	accept: DRAG_TYPES.COMPONENT,
	drop(item, monitor) {

	    const didDrop = monitor.didDrop();
	    if (didDrop) {
		return;
	    }

	    const componentStructure = {
		name: item.id,
		type: item.id,
		props: {},
		children:[],
		parent: componentId,
	    };

	    dispatch({
		type: "ADD_COMPONENT",
		component: componentStructure,
		selectedId: componentStructure.id,
	    });
	},
	collect: (monitor) => ({
	    isOver: monitor.isOver(),
	    isOverCurrent: monitor.isOver({ shallow: true }),
	}),
    });

    return { drop, isOver }
}
