import React, { useContext } from "react";
import { Box } from "rebass/styled-components";
import { useTheme } from "@freshworks/react-nucleus";
import { ComponentsContext } from "../contexts/ComponentsContext";

import ButtonPanel from "./panels/Button";
import AlertPanel from "./panels/Alert";
import ButtonDropdownPanel from "./panels/ButtonDropdown";
import TogglePanel from "./panels/Toggle";

export default function Inspector() {
  const [state, dispatch] = useContext(ComponentsContext);

  const current = state.components.find((c) => c.id === state.selectedId);

  const theme = useTheme();
  return (
    <Box
      bg={theme.palette.smoke}
      sx={{ "border-left": `1px solid ${theme.palette.E500}` }}
    >
      {current && current.name === "Button" && <ButtonPanel />}
      {current && current.name === "Alert" && <AlertPanel />}
      {current && current.name === "ButtonDropdown" && <ButtonDropdownPanel />}
      {current && current.name === "Toggle" && <TogglePanel />}
    </Box>
  );
}
