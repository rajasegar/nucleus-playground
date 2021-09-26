import React, { useState, memo } from "react";
import { Dropdown, Box, Input } from "@freshworks/react-nucleus";
import { useComponents } from "~hooks/index";

const TagPanel = () => {
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
      <Input
        label="Text"
        value={comp.props.children}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "children",
            value: e.target.value,
          })
        }
      />
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
};

export default memo(TagPanel);
