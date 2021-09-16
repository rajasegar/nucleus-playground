import React, { useCallback, useState, useContext } from "react";
import { Box } from "rebass/styled-components";
import { useDrop } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";
import { ComponentsContext } from "../contexts/ComponentsContext";
import Button from "./previews/Button";
import ButtonDropdown from "./previews/ButtonDropdown";
import Alert from "./previews/Alert";
import Checkbox from "./previews/Checkbox";
import Toggle from "./previews/Toggle";
import Input from "./previews/Input";
import Loader from "./previews/Loader";
import Menu from "./previews/Menu";
import Modal from "./previews/Modal";
import Popover from "./previews/Popover";

import PreviewContainer from "./PreviewContainer";

const PreviewComponents = {
  Button,
  ButtonDropdown,
  Alert,
  Checkbox,
  Toggle,
  Input,
  Loader,
  Menu,
  Modal,
  Popover,
};

export default function Preview(props) {
  const [focused, setFocused] = useState(null);
  const [ state, dispatch ] = useContext(ComponentsContext);
  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: DRAG_TYPES.COMPONENT,
    drop(item, monitor) {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      console.log("item dropped!", item);
        const hash = Math.random().toString(36).replace('0.', '');
        const componentStructure = {
            id: `comp-${hash}`,
            name: item.id,
            props: {},
        };

        dispatch({
            type:'ADD_COMPONENT',
            component: componentStructure,
            selectedId: componentStructure.id
        });
        
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });

  const clickHandler = useCallback(
    (index) => {
        if(state.components[index]) {
         dispatch({
            type: 'SELECT_COMPONENT',
            selectedId: state.components[index].id
        });
   
        }

                
      if (focused === index) setFocused(null);
      setFocused(index);
    },
    [focused, setFocused]
  );

  const componentPreview =
    state.components.length > 0 &&
    state.components.map((component, index) => {
      if (typeof PreviewComponents[component.name] !== "undefined") {
          debugger;
        const NewComponent = React.createElement(
          PreviewComponents[component.name],
          {
            // @TODO: Use a hash here?
            key: index,
            ...component.props,
          }
        );

        return React.createElement(
          PreviewContainer,
          {
            index,
            onClick: clickHandler,
            focused: focused === index ? true : false,
          },
          [NewComponent]
        );
      }
    });

  return (
      <Box p={2} ref={drop} width="100%" height="100vh" sx={{
  'background-image': 'linear-gradient(to right, rgb(217, 226, 233) 1px, transparent 1px), linear-gradient(rgb(217, 226, 233) 1px, transparent 1px)',
'background-size': '20px 20px',
'background-color': 'rgb(237, 242, 246)',
    }}>
      {componentPreview}
    </Box>
  );
}
