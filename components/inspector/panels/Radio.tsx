import React, { useContext, useState, memo } from "react";
import { Input, Box, Toggle, Flex } from "@freshworks/react-nucleus";
import { ComponentsContext } from "~contexts/ComponentsContext";

const RadioPanel = () => {
  const [state, dispatch]: any = useContext(ComponentsContext);

  const comp = state.components[state.selectedId];

  const [checked, setChecked] = useState(comp.props.checked);

  function updateChecked() {
    setChecked(!checked);
    dispatch({
      type: "UPDATE_PROPS",
      name: "checked",
      value: !checked,
    });
  }

  return (
    <Box p={2}>
      <Input
        label="Text"
        value={comp.props.children}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "children",
            value: e.target.value,
          })
        }
      />
      <Flex justifyContent="space-around" my={2}>
        Checked
        <Toggle on={checked} handleChange={() => updateChecked()} />
      </Flex>
    </Box>
  );
};

export default memo(RadioPanel);
