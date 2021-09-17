import React, { useState, useContext } from "react";
import { Dropdown } from "@freshworks/react-nucleus";
import { Box } from "rebass/styled-components";
import { ComponentsContext } from "../../contexts/ComponentsContext";

export default function AlertPanel() {
  const [state, dispatch] = useContext(ComponentsContext);
  const [position, setPosition] = useState("bottom");

  function updatePosition(pos) {
    const comp = state.components.find((c) => c.id === state.selectedId);
    comp.props.position = pos.name;
    dispatch({
      type: "UPDATE_PROPS",
      component: comp,
      selectedId: state.selectedId,
    });
    setPosition(pos);
  }

  const positions = [
    {
      name: "top",
    },
    {
      name: "bottom",
    },
  ];

  return (
    <Box p={2}>
      <h3>Button Dropdown</h3>
      <Dropdown
        filterKey="name"
        label="Position:"
        itemToString={(c) => c.name}
        defaultSelectedItem={position}
        items={positions}
        onChange={(c) => updatePosition(c)}
      />
    </Box>
  );
}
