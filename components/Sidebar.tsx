import React from "react";
import styled from "styled-components";

import DraggableComponent from "./DraggableComponent";
import componentsList from "../constants/componentList";

import { useTheme } from "@freshworks/react-nucleus";

const Container = styled.div`
  background-color: ${(props) => props.theme.palette.E800};
  padding: 4px;
`;
export default function Sidebar() {
  const theme = useTheme();
  return (
    <Container theme={theme}>
      {componentsList.map((component, idx) => (
        <DraggableComponent id={component.id} name={component.name} key={idx} />
      ))}
    </Container>
  );
}
