import React, { useContext } from "react";
import { Box, Flex, Text } from "rebass/styled-components";
import { Button, useTheme, Tooltip } from "@freshworks/react-nucleus";
import { ComponentsContext } from "../contexts/ComponentsContext";

import CodeIcon from "../components/icons/Code";
import CopyIcon from "../components/icons/Copy";
import TrashIcon from "../components/icons/Trash";
import ResetIcon from "../components/icons/Reset";

import ButtonPanel from "./panels/Button";
import AlertPanel from "./panels/Alert";
import ButtonDropdownPanel from "./panels/ButtonDropdown";
import TogglePanel from "./panels/Toggle";
import FlexPanel from "./panels/Flex";

import { getSelectedComponent } from "../core/selectors/components";

export default function Inspector() {
  const [state, dispatch]: any = useContext(ComponentsContext);

  const current = getSelectedComponent(state);

  const isRoot = state.selectedId === "root";

  const theme = useTheme();
  const ActionButton = ({ label, message, children }: any) => {
    return (
      <Tooltip label={label} position="bottom">
        <Button inline type="link" onClick={() => dispatch({ type: message })}>
          {children}
        </Button>
      </Tooltip>
    );
  };

  return (
    <Box
      bg={theme.palette.smoke}
      sx={{ "border-left": `1px solid ${theme.palette.E500}` }}
      height="100%"
    >
      <Box
        fontWeight="semibold"
        fontSize="md"
        color={theme.palette.elephant}
        py={2}
        px={2}
        bg={theme.palette.E300}
        display="flex"
        justifyContent="space-between"
        sx={{ "flex-direction": "column" }}
      >
        <Text fontSize="xs" fontWeight="light">
          {current ? current.name : "Document"}
        </Text>
      </Box>

      {!isRoot && (
        <Flex justifyContent="end">
          <ActionButton label="Copy component code">
            <CodeIcon />
          </ActionButton>
          <ActionButton label="Duplicate" message="COPY_COMPONENT">
            <CopyIcon />
          </ActionButton>
          <ActionButton label="Reset props">
            <ResetIcon />
          </ActionButton>
          <ActionButton label="Remove" message="REMOVE_COMPONENT">
            <TrashIcon />
          </ActionButton>
        </Flex>
      )}
      <Box>
        {current && current.name === "Button" && <ButtonPanel />}
        {current && current.name === "Alert" && <AlertPanel />}
        {current && current.name === "ButtonDropdown" && (
          <ButtonDropdownPanel />
        )}
        {current && current.name === "Toggle" && <TogglePanel />}
        {current && current.name === "Flex" && <FlexPanel />}
      </Box>
    </Box>
  );
}
