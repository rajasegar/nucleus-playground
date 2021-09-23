import React, { useState } from "react";
import { Dropdown, Box } from "@freshworks/react-nucleus";
import { useComponents } from "../../hooks";

export default function TagPanel() {
  const [state, dispatch]: any = useComponents();
  const comp = state.components[state.selectedId];
  const [variant, setVariant] = useState(comp.props.variant);

  function updateVariant(variant: any) {
    dispatch({
      type: "UPDATE_PROPS",
      name: "variant",
      value: variant.name,
    });
    setVariant(variant);
  }

  const tagVariants = [
    {
      name: "grey",
    },
    {
      name: "blue",
    },
    {
      name: "red",
    },
    {
      name: "green",
    },
    {
      name: "yellow",
    },
    {
      name: "normal",
    },
  ];

  return (
    <Box p={2}>
      <Dropdown
        filterKey="name"
        label="Variant:"
        itemToString={(c) => c.name}
        defaultSelectedItem={variant}
        items={tagVariants}
        onChange={(c) => updateVariant(c)}
      />
    </Box>
  );
}
