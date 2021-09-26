import React from "react";
import { useDrag } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";
import DragHandle from "./icons/DragHandle";
import styled from "styled-components";

const Draggable = styled.div`
  margin: 4px;
  padding: 4px;
  cursor: move;
  color: #f3f5f7;
  transition: margin 200ms;
  box-sizing: border-box;
  border-radius: 0.25em;

  :hover {
    background-color: #f3f5f7;
    color: #183247;
    margin-left: -1;
    margin-right: 1;
  }
`;
export default function DraggableComponent({ ...props }) {
  const { id, name } = props;
  const [, drag] = useDrag({
    type: DRAG_TYPES.COMPONENT,
    item: () => ({ id, props: {} }),
  });

  return (
    <Draggable ref={drag} {...props}>
      <DragHandle />
      {name}
    </Draggable>
  );
}
