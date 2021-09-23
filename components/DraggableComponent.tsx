import React from "react";
import { useDrag } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";
import { useTheme } from "@freshworks/react-nucleus";
import DragHandle from "./icons/DragHandle";
import styled from "styled-components";

const Draggable = styled.div`
  margin: 4px;
  padding: 4px;
  cursor: move;
  color: ${(props) => props.theme.palette.smoke};
  transition: margin 200ms;
  box-sizing: border-box;
  border-radius: 0.25em;

  :hover {
    background-color: ${(props) => props.theme.palette.smoke};
    color: ${(props) => props.theme.palette.elephant};
    margin-left: -1;
    margin-right: 1;
  }
`;
export default function DraggableComponent({ ...props }) {
  const theme = useTheme();
  const { id, name } = props;
  const [, drag] = useDrag({
    type: DRAG_TYPES.COMPONENT,
    item: () => ({ id, props: {} }),
  });

  return (
    <Draggable theme={theme} ref={drag} {...props}>
      <DragHandle />
      {name}
    </Draggable>
  );
}
