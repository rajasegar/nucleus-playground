import React, { useState, useContext } from "react";
import { Dropdown, Box } from "@freshworks/react-nucleus";
import { useComponents } from "../../hooks";

export default function AlertPanel() {
  const [state, dispatch]: any = useComponents();
  const [position, setPosition] = useState("bottom");

  const comp = state.components[state.selectedId];

  function updatePosition(pos: any) {
    comp.props.position = pos.name;
    dispatch({
      type: "UPDATE_PROPS",
      name: "position",
      value: pos.name,
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
