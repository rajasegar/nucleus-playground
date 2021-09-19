import React, { useState, useContext } from "react";
import { Dropdown } from "@freshworks/react-nucleus";
import { Box } from "rebass/styled-components";
import { ComponentsContext } from "../../contexts/ComponentsContext";

export default function AlertPanel() {
  const [state, dispatch]: any = useContext(ComponentsContext);
  const [direction, setDirection] = useState("");
  const [justify, setJustify] = useState("");
  const [align, setAlign] = useState("");

  const comp = state.components[state.selectedId];

  function updateDirection(dir: any) {
    comp.props.flexDirection = dir.name;
    dispatch({
      type: "UPDATE_PROPS",
      component: comp,
    });
    setDirection(dir);
  }

  function updateJustify(j: any) {
    comp.props.justifyContent = j.name;
    dispatch({
      type: "UPDATE_PROPS",
      component: comp,
    });
    setJustify(j);
  }

  function updateAlign(j: any) {
    comp.props.alignItems = j.name;
    dispatch({
      type: "UPDATE_PROPS",
      component: comp,
    });
    setAlign(j);
  }

  const directions = [
    {
      name: "row",
    },
    {
      name: "row-reverse",
    },
    {
      name: "column",
    },
    {
      name: "column-reverse",
    },
  ];

  const justifyContentItems = [
    {
      name: "flex-start",
    },
    {
      name: "center",
    },
    {
      name: "flex-end",
    },
    {
      name: "space-between",
    },
    {
      name: "space-around",
    },
  ];

  const alignItems = [
    {
      name: "stretch",
    },
    {
      name: "flex-start",
    },
    {
      name: "center",
    },
    {
      name: "flex-end",
    },
    {
      name: "space-between",
    },
    {
      name: "space-around",
    },
  ];

  return (
    <Box p={2}>
      <Dropdown
        filterKey="name"
        label="Direction:"
        itemToString={(c) => c.name}
        defaultSelectedItem={direction}
        items={directions}
        onChange={(c) => updateDirection(c)}
      />
      <Dropdown
        filterKey="name"
        label="Justify content:"
        itemToString={(c) => c.name}
        defaultSelectedItem={justify}
        items={justifyContentItems}
        onChange={(c) => updateJustify(c)}
      />
      <Dropdown
        filterKey="name"
        label="Align items:"
        itemToString={(c) => c.name}
        defaultSelectedItem={align}
        items={alignItems}
        onChange={(c) => updateAlign(c)}
      />
    </Box>
  );
}
