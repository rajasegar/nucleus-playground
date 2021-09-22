import React, { useState, useContext } from "react";
import { Dropdown, Toggle } from "@freshworks/react-nucleus";
import { Box } from "rebass/styled-components";
import { ComponentsContext } from "../../contexts/ComponentsContext";

export default function TogglePanel() {
  const [state, dispatch]: any = useContext(ComponentsContext);
  const [size, setSize] = useState("");
  const [icon, setIcon] = useState(true);

  function updateSize(size: any) {
    const comp = state.components.find((c: any) => c.id === state.selectedId);
    comp.props.size = size.name;
    dispatch({
      type: "UPDATE_PROPS",
      name: "size",
      value: size.name,
    });
    setSize(size);
  }

  function updateHasIcon(value: any) {
    setIcon(value);
    const comp = state.components.find((c: any) => c.id === state.selectedId);
    comp.props.hasIcon = value;
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
