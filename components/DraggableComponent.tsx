import React from "react";
import { Box } from "rebass/styled-components";
import { useDrag } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";
import { useTheme } from "@freshworks/react-nucleus";
import DragHandle from "./icons/DragHandle";

export default function DraggableComponent({ ...props }) {
  const theme = useTheme();
  const { id, name } = props;
  const [, drag] = useDrag({
    type: DRAG_TYPES.COMPONENT,
    item: () => ({ id, props: {} }),
  });
  return (
    <Box
        boxSizing="border-box"
        transition="margin 200ms"
      ref={drag}
      m={1}
      p={1}
      color={theme.palette.smoke}
      sx={{
        cursor: "move",
        borderRadius: "0.25em",
        ":hover": {
          backgroundColor: theme.palette.smoke,
          color: theme.palette.elephant,
            marginLeft:-1,
            marginRight: 1
        },
      }}
      {...props}
    >
      <DragHandle />
      {name}
    </Box>
  );
}
