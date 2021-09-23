import React, { useContext } from "react";
import { Input, Box } from "@freshworks/react-nucleus";
import { ComponentsContext } from "../../contexts/ComponentsContext";

export default function GridPanel() {
  const [state, dispatch]: any = useContext(ComponentsContext);

  const comp = state.components[state.selectedId];

  return (
    <Box p={2}>
      <Input
        label="Template Columns"
        value={comp.props.gridTemplateColumns}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "gridTemplateColumns",
            value: e.target.value,
          })
        }
      />
      <Input label="Template Rows" />
      <Input
        label="Gap"
        value={comp.props.gridGap}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "gridGap",
            value: e.target.value,
          })
        }
      />
      <Input label="Row Gap" />
      <Input label="Column Gap" />
      <Input label="Auto Columns" />
      <Input label="Column" />
      <Input label="Row" />
      <Input label="Auto Flow" />
      <Input label="Auto Rows" />
      <Input label="Area" />
      <Input label="Template Areas" />
    </Box>
  );
}
