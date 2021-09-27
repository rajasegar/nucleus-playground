import React, { useState } from "react";
import { Dropdown, Box } from "@freshworks/react-nucleus";
import { useComponents } from "~hooks/index";

export default function ButtonPanel() {
  const [state, dispatch]: any = useComponents();
  const comp = state.components[state.selectedId];
  const [variant, setVariant] = useState(comp.props.variant);
  const [size, setSize] = useState(comp.props.size);

  function updateVariant(variant: any) {
    dispatch({
      type: "UPDATE_PROPS",
      name: "type",
      value: variant.value,
    });
    setVariant(variant);
  }

  function updateSize(size: any) {
    dispatch({
      type: "UPDATE_PROPS",
      name: "size",
      value: size.value,
    });
    setSize(size);
  }

  const buttonVariants = [
    {
      name: "Primary",
      value: "primary",
    },
    {
      name: "Secondary",
      value: "secondary",
    },
    {
      name: "Danger",
      value: "danger",
    },
    {
      name: "Link",
      value: "link",
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
