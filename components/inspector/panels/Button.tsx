import React, { useState } from "react";
import { Dropdown, Box } from "@freshworks/react-nucleus";
import { useComponents } from "~hooks/index";

export default function ButtonPanel() {
  const [state, dispatch]: any = useComponents();
  const [variant, setVariant] = useState("Primary");
  const [size, setSize] = useState("Normal");

  const comp = state.components[state.selectedId];

  function updateVariant(variant: any) {
    comp.props.type = variant.name;
    dispatch({
      type: "UPDATE_PROPS",
      name: "type",
      value: variant.name,
    });
    setVariant(variant);
  }

  function updateSize(size: any) {
    comp.props.size = size.name;
    dispatch({
      type: "UPDATE_PROPS",
      name: "size",
      value: size.name,
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