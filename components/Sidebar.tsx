import React from "react";
import { Box } from "rebass/styled-components";

import DraggableComponent from "./DraggableComponent";
import componentsList from "../constants/componentList";

import { useTheme } from "@freshworks/react-nucleus";
export default function Sidebar() {
  const theme = useTheme();
  return (
    <Box bg={theme.palette.E800} p={2}>
      {componentsList.map((component, idx) => (
        <DraggableComponent id={component.id} name={component.name} key={idx} />
      ))}
    </Box>
  );
}
