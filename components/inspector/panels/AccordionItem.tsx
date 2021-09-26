import React, { useContext } from "react";
import { Input, Box } from "@freshworks/react-nucleus";
import { ComponentsContext } from "~contexts/ComponentsContext";

export default function AccordionItemPanel() {
  const [state, dispatch]: any = useContext(ComponentsContext);

  const comp = state.components[state.selectedId];

  return (
    <Box p={2}>
      <Input
        label="Label:"
        value={comp.props.label}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "label",
            value: e.target.value,
          })
        }
      />
    </Box>
  );
}
