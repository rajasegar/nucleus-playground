import React, { useState, useContext } from "react";
import { Dropdown } from "@freshworks/react-nucleus";
import { Box } from "rebass/styled-components";
import { ComponentsContext } from "../../contexts/ComponentsContext";

export default function AlertPanel() {
  const [state, dispatch]: any = useContext(ComponentsContext);
  const [level, setLevel] = useState("success");

  function updateLevel(level: any) {
    const comp = state.components.find((c: any) => c.id === state.selectedId);
    comp.props.level = level.name;
    dispatch({
      type: "UPDATE_PROPS",
      component: comp,
      selectedId: state.selectedId,
    });
    setLevel(level);
  }

  const alertLevels = [
    {
      name: "success",
    },
    {
      name: "warning",
    },
    {
      name: "info",
    },
  ];

  return (
    <Box p={2}>
      <Dropdown
        filterKey="name"
        label="Level:"
        itemToString={(c) => c.name}
        defaultSelectedItem={level}
        items={alertLevels}
        onChange={(c) => updateLevel(c)}
      />
    </Box>
  );
}
