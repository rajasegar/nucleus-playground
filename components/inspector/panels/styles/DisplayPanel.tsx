import React, { memo, useState } from "react";
import { Box, Dropdown } from "@freshworks/react-nucleus";
import { useComponents } from "~hooks/index";

const DisplayPanel = () => {
  const [state, dispatch]: any = useComponents();
  const comp = state.components[state.selectedId];
  const [display, setDisplay] = useState(comp.props.display);

  function updateDisplay(value: any) {
    dispatch({
      type: "UPDATE_PROPS",
      name: "display",
      value: value.name,
    });
    setDisplay(value);
  }

  const displayValues = [
    {
      name: "block",
    },
    {
      name: "flex",
    },
    {
      name: "inline",
    },
    {
      name: "grid",
    },
    {
      name: "inline-block",
    },
  ];
  return (
    <Box p={2}>
      <Dropdown
        filterKey="name"
        label="Display:"
        itemToString={(c) => c.name}
        defaultSelectedItem={display}
        items={displayValues}
        onChange={(c) => updateDisplay(c)}
      />
    </Box>
  );
};
export default memo(DisplayPanel);
