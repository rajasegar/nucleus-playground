import React, { useContext, memo } from "react";
import { Input, Box } from "@freshworks/react-nucleus";
import { ComponentsContext } from "~contexts/ComponentsContext";

const InputPanel = () => {
  const [state, dispatch]: any = useContext(ComponentsContext);

  const comp = state.components[state.selectedId];

  return (
    <Box p={2}>
      <Input
        label="Label"
        value={comp.props.label}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "label",
            value: e.target.value,
          })
        }
      />
      <Input
        label="Placeholder"
        value={comp.props.placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "placeholder",
            value: e.target.value,
          })
        }
      />
    </Box>
  );
};

export default memo(InputPanel);
