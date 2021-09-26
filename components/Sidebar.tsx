import React from "react";
import styled from "styled-components";

import DraggableComponent from "./DraggableComponent";
import componentsList from "../constants/componentList";

const Container = styled.div`
  background-color: #264966;
  padding: 4px;
`;
export default function Sidebar() {
  return (
    <Container>
      {componentsList.map((component, idx) => (
        <DraggableComponent id={component.id} name={component.name} key={idx} />
      ))}
    </Container>
  );
}
