import React, { useContext } from "react";
import { Box } from "@freshworks/react-nucleus";
import { ComponentsContext } from "~contexts/ComponentsContext";
import styled from "styled-components";

const Label = styled.label`
  font-size: 0.75em;
  display: block;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 4px 8px;
  border-radius: 5px;
  border: 1px solid #cfd7df;
`;

export default function HeadingPanel() {
  const [state, dispatch]: any = useContext(ComponentsContext);

  const comp = state.components[state.selectedId];

  return (
    <Box p={2}>
      <Label>Text :</Label>
      <TextArea
        rows={5}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "children",
            value: e.target.value,
          })
        }
      >
        {comp.props.children}
      </TextArea>
    </Box>
  );
}
