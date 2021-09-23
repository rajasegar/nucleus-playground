import React from "react";
import { useDrag } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";
import { useTheme } from "@freshworks/react-nucleus";
import DragHandle from "./icons/DragHandle";
import styled from "styled-components";

export default function DraggableComponent({ ...props }) {
  const theme = useTheme();
  const { id, name } = props;
  const [, drag] = useDrag({
    type: DRAG_TYPES.COMPONENT,
    item: () => ({ id, props: {} }),
  });

  const Draggable = styled.div`
    margin: 4px;
    padding: 4px;
    cursor: move;
    color: ${theme.palette.smoke};
    transition: margin 200ms;
    box-sizing: border-box;
    border-radius: 0.25em;

    :hover {
      background-color: ${theme.palette.smoke};
      color: ${theme.palette.elephant};
      margin-left: -1;
      margin-right: 1;
    }
  `;

  return (
    <Draggable ref={drag} {...props}>
      <DragHandle />
      {name}
    </Draggable>
  );
}
