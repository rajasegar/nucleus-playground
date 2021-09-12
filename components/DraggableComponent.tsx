import React from "react";
import { Box } from "rebass/styled-components";
import { useDrag } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";

export default function DraggableComponent({ ...props }) {
    const { id, name } = props;
  const [, drag] = useDrag({
      type: DRAG_TYPES.COMPONENT,
    item: () => ({ id,  props: {} }),
  });
  return (
    <Box
      ref={drag}
      height={30}
        m={2}
        p={2}

      bg="black"
      color="white"
      {...props}
    >
        {name}
    </Box>
  );
}
