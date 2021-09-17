import React, { useState, useContext } from "react";
import { Dropdown } from "@freshworks/react-nucleus";
import { Box } from "rebass/styled-components";
import { ComponentsContext } from "../../contexts/ComponentsContext";

export default function ButtonPanel() {
  const [state, dispatch] = useContext(ComponentsContext);
  const [variant, setVariant] = useState("Primary");
  const [size, setSize] = useState("Normal");

  function updateVariant(variant) {
    const comp = state.components.find((c) => c.id === state.selectedId);
    comp.props.type = variant.name;
    dispatch({
      type: "UPDATE_PROPS",
      component: comp,
      selectedId: state.selectedId,
    });
    setVariant(variant);
  }

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

  const buttonVariants = [
    {
      name: "Primary",
    },
    {
      name: "Secondary",
    },
    {
      name: "Danger",
    },
    {
      name: "Link",
    },
    {
      name: "Disabled",
    },
  ];

  const buttonSizes = [
    { name: "Normal", value: "normal" },
    { name: "Mini", value: "mini" },
  ];

  return (
    <Box p={2}>
      <Dropdown
        filterKey="name"
        label="Variant:"
        itemToString={(c) => c.name}
        defaultSelectedItem={variant}
        items={buttonVariants}
        onChange={(c) => updateVariant(c)}
      />
      <Dropdown
        filterKey="name"
        label="Size:"
        itemToString={(c) => c.name}
        defaultSelectedItem={size}
        items={buttonSizes}
        onChange={(c) => updateSize(c)}
      />
    </Box>
  );
}
