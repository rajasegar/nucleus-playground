import React, { useState, useContext } from "react";
import { Dropdown, Toggle } from "@freshworks/react-nucleus";
import { Box } from "rebass/styled-components";
import { ComponentsContext } from "../../contexts/ComponentsContext";

export default function TogglePanel() {
  const [state, dispatch] = useContext(ComponentsContext);
  const [size, setSize] = useState("");
  const [icon, setIcon] = useState(true);

  function updateSize(size) {
    const comp = state.components.find((c) => c.id === state.selectedId);
    comp.props.size = size.name;
    dispatch({
      type: "UPDATE_PROPS",
      component: comp,
      selectedId: state.selectedId,
    });
    setSize(size);
  }

  function updateHasIcon(value) {
    setIcon(value);
    const comp = state.components.find((c) => c.id === state.selectedId);
    comp.props.hasIcon = value;
    dispatch({
      type: "UPDATE_PROPS",
      component: comp,
      selectedId: state.selectedId,
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
      <h3>Toggle</h3>
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
        <Toggle
          on={icon}
          handleChange={() => updateHasIcon(!icon)}
          style={{ "vertical-align": "middle", "margin-left": "8px" }}
        />
      </Box>
    </Box>
  );
}
