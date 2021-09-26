import React, { useContext } from "react";
import { Box, Flex, Button, Tooltip } from "@freshworks/react-nucleus";
import { ComponentsContext } from "../../contexts/ComponentsContext";
import styled from "styled-components";

import CodeIcon from "../../components/icons/Code";
import CopyIcon from "../../components/icons/Copy";
import TrashIcon from "../../components/icons/Trash";
import ResetIcon from "../../components/icons/Reset";

import ButtonPanel from "./panels/Button";
import AlertPanel from "./panels/Alert";
import ButtonDropdownPanel from "./panels/ButtonDropdown";
import TogglePanel from "./panels/Toggle";
import FlexPanel from "./panels/Flex";
import GridPanel from "./panels/Grid";
import HeadingPanel from "./panels/Heading";
import TagPanel from "./panels/Tag";
import ParagraphPanel from "./panels/Paragraph";
import CardPanel from "./panels/Card";
import AccordionItemPanel from "./panels/AccordionItem";
import BadgePanel from "./panels/Badge";
import IconsPanel from "./panels/Icons";

import StylesPanel from "./panels/StylesPanel";

import { getSelectedComponent } from "../../core/selectors/components";

const Container = styled.div`
  background-color: #f3f5f7;
  border-left: 1px solid #83a6c8;
  height: 100%;
`;

const Header = styled.div`
  font-weight: semibold;
  font-size: bold;
  color: #183247;
  padding: 8px;
  background-color: #dff0ff;
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

export default function Inspector() {
  const [state, dispatch]: any = useContext(ComponentsContext);

  const current = getSelectedComponent(state);

  const isRoot = state.selectedId === "root";
  const parentIsRoot = current.parent === "root";

  const componentHasChildren = current.children.length > 0;

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
    <Container>
      <Header>
        <Name>{isRoot ? "Document" : current.type}</Name>
      </Header>

      {!isRoot && (
        <Flex justifyContent="center">
          <ActionButton label="Copy component code">
            <CodeIcon />
          </ActionButton>
          <ActionButton label="Duplicate" message="COPY_COMPONENT">
            <CopyIcon />
          </ActionButton>
          <ActionButton label="Reset props" message="RESET_PROPS">
            <ResetIcon />
          </ActionButton>
          <ActionButton label="Remove" message="REMOVE_COMPONENT">
            <TrashIcon />
          </ActionButton>
        </Flex>
      )}
      <Box>
        {current && current.type === "Button" && <ButtonPanel />}
        {current && current.type === "Alert" && <AlertPanel />}
        {current && current.type === "ButtonDropdown" && (
          <ButtonDropdownPanel />
        )}
        {current && current.type === "Toggle" && <TogglePanel />}
        {current && current.type === "Flex" && <FlexPanel />}
        {current && current.type === "Grid" && <GridPanel />}
        {current && current.type === "Heading" && <HeadingPanel />}
        {current && current.type === "Paragraph" && <ParagraphPanel />}
        {current && current.type === "Card" && <CardPanel />}
        {current && current.type === "Tag" && <TagPanel />}
        {current && current.type === "AccordionItem" && <AccordionItemPanel />}
        {current && current.type === "Badge" && <BadgePanel />}
        {current && current.type === "Icons" && <IconsPanel />}
      </Box>
      <StylesPanel
        isRoot={isRoot}
        showChildren={componentHasChildren}
        parentIsRoot={parentIsRoot}
      />
    </Container>
  );
}
