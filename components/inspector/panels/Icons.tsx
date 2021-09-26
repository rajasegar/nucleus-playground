import React, { useContext } from "react";
import { Input, Box } from "@freshworks/react-nucleus";
import { ComponentsContext } from "~contexts/ComponentsContext";

export default function IconsPanel() {
  const [state, dispatch]: any = useContext(ComponentsContext);

  const comp = state.components[state.selectedId];

  return (
    <Box p={2}>
      <Input
        label="Glyph"
        value={comp.props.glyph}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "glyph",
            value: e.target.value,
          })
        }
      />
    </Box>
  );
}
