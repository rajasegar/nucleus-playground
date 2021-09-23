import React, { useContext } from "react";
import {
  Box,
  Flex,
  Button,
  useTheme,
  Tooltip,
} from "@freshworks/react-nucleus";
import { ComponentsContext } from "../contexts/ComponentsContext";
import styled from "styled-components";

import CodeIcon from "../components/icons/Code";
import CopyIcon from "../components/icons/Copy";
import TrashIcon from "../components/icons/Trash";
import ResetIcon from "../components/icons/Reset";

import ButtonPanel from "./panels/Button";
import AlertPanel from "./panels/Alert";
import ButtonDropdownPanel from "./panels/ButtonDropdown";
import TogglePanel from "./panels/Toggle";
import FlexPanel from "./panels/Flex";
import GridPanel from "./panels/Grid";
import HeadingPanel from "./panels/Heading";

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

  const Container = styled.div`
    background-color: ${theme.palette.smoke};
    border-left: 1px solid ${theme.palette.E500};
    height: 100%;
  `;

  const Header = styled.div`
    font-weight: semibold;
    font-size: bold;
    color: ${theme.palette.elephant};
    padding: 8px;
    background-color: ${theme.palette.E300};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  `;

  const Name = styled.p`
    font-size: 1em;
    font-weight: bold;
    margin: 0;
    padding: 0;
  `;

  return (
    <Container>
      <Header>
        <Name>{current ? current.name : "Document"}</Name>
      </Header>

      {!isRoot && (
        <Flex justifyContent="center">
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
        {current && current.name === "Grid" && <GridPanel />}
        {current && current.name === "Heading" && <HeadingPanel />}
      </Box>
    </Container>
  );
}
