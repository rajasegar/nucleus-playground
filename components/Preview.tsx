import React, { useCallback, useState } from "react";
import { Box } from "rebass/styled-components";
import { useDrop } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";
import { useComponents } from "../contexts/ComponentsContext";
import ComponentName from "../components/ComponentName";
import Button from "./previews/Button";
import {
    DropdownButton,
    Drawer,
    Input,
    MultiSelectDropdown,
    Checkbox,
    Confirmation,
    Dropdown,
    Loader,
    Menu,
    Modal,
    Popover,
    Radio,
    Tabs,
    Toast,
    Toggle,
    Tooltip,
} from "@freshworks/react-nucleus";
import PreviewContainer from "./PreviewContainer";

const PreviewComponents = {
  ComponentName,
  Button,
    DropdownButton,
    Drawer,
    Input,
    MultiSelectDropdown,
    Checkbox,
    Confirmation,
    Dropdown,
    Loader,
    Menu,
    Modal,
    Popover,
    Radio,
    Tabs,
    Toast,
    Toggle,
    Tooltip,
};

export default function Preview() {
  const [focused, setFocused] = useState(null);
  const { components, setComponents } = useComponents();
  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: DRAG_TYPES.COMPONENT,
    drop(item, monitor) {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      console.log("item dropped!", item);
      const componentStructure = {
        name: item.id,
        props: {},
      };
      setComponents((prevValue) => [...prevValue, componentStructure]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });

  const clickHandler = useCallback(
    (index) => {
      if (focused === index) setFocused(null);
      setFocused(index);
    },
    [focused, setFocused]
  );

  const componentPreview =
    components.length > 0 &&
    components.map((component, index) => {
      if (typeof PreviewComponents[component.name] !== "undefined") {
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
    <Box
      ref={drop}
      width="100%"
      height="100vh"
      sx={{ border: "1px solid black" }}
    >
      {componentPreview}
    </Box>
  );
}
