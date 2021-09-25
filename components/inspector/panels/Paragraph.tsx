import React, { useContext } from "react";
import { Input, Box } from "@freshworks/react-nucleus";
import { ComponentsContext } from "~contexts/ComponentsContext";

export default function HeadingPanel() {
  const [state, dispatch]: any = useContext(ComponentsContext);

  const comp = state.components[state.selectedId];

  return (
    <Box p={2}>
      <Input
        label="Text"
        value={comp.props.text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "text",
            value: e.target.value,
          })
        }
      />
    </Box>
  );
}
