import React from "react";
import styled from "styled-components";

import DraggableComponent from "./DraggableComponent";
import componentsList from "../constants/componentList";

import { useTheme } from "@freshworks/react-nucleus";
export default function Sidebar() {
  const theme = useTheme();

  const Container = styled.div`
    background-color: ${theme.palette.E800};
    padding: 4px;
  `;
  return (
    <Container>
      {componentsList.map((component, idx) => (
        <DraggableComponent id={component.id} name={component.name} key={idx} />
      ))}
    </Container>
  );
}
