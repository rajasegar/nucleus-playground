import React, { useState, useContext } from "react";
import { Dropdown, Toggle, Box } from "@freshworks/react-nucleus";
import { ComponentsContext } from "~contexts/ComponentsContext";

export default function TogglePanel() {
  const [state, dispatch]: any = useContext(ComponentsContext);
  const comp = state.components[state.selectedId];
  const [size, setSize] = useState(comp.props.size);
  const [icon, setIcon] = useState(comp.props.hasIcon);

  function updateSize(size: any) {
    dispatch({
      type: "UPDATE_PROPS",
      name: "size",
      value: size.name,
    });
    setSize(size);
  }

  function updateHasIcon(value: any) {
    setIcon(value);
    dispatch({
      type: "UPDATE_PROPS",
      name: "hasIcon",
      value,
    });
  }

  const toggleSizes = [
    {
      name: "sm",
    },
    {
      name: "md",
    },
  ];

  return (
    <Box p={2}>
      <Dropdown
        filterKey="name"
        label="Size:"
        itemToString={(c) => c.name}
        defaultSelectedItem={size}
        items={toggleSizes}
        onChange={(c) => updateSize(c)}
      />
      <Box py={4} my={2}>
        Has Icon
        <Toggle on={icon} handleChange={() => updateHasIcon(!icon)} />
      </Box>
    </Box>
  );
}
