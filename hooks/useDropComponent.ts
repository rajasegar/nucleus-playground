import { useDrop, DropTargetMonitor } from 'react-dnd'
import { rootComponents } from '../utils/editor'
import { useComponents } from './useComponents'
import { DRAG_TYPES } from "../constants/DragTypes";
import DEFAULT_PROPS from '../constants/defaultProps';

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

      // const componentStructure: any = {
      //   name: item.id,
      //   type: item.id,
      //   props: DEFAULT_PROPS[item.id] || {},
      //   children: [],
      //   parentName: componentId,
      //   rootParentType: item.rootParentType
      // };

      dispatch({
        type: "ADD_COMPONENT",
        payload: {
          parentName: componentId,
          type: item.id,
          rootParentType: item.rootParentType
        }
      });
    },
    collect: (monitor: any) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });

  return { drop, isOver }
}
