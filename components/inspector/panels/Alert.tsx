import React, { useState, useContext, memo } from "react";
import { Dropdown, Box, Input } from "@freshworks/react-nucleus";
import { ComponentsContext } from "~contexts/ComponentsContext";

const AlertPanel = () => {
  const [state, dispatch]: any = useContext(ComponentsContext);
  const [level, setLevel] = useState("success");

  const comp = state.components[state.selectedId];

  function updateLevel(level: any) {
    dispatch({
      type: "UPDATE_PROPS",
      name: "level",
      value: level.name,
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
        label="Level:"
        itemToString={(c) => c.name}
        defaultSelectedItem={level}
        items={alertLevels}
        onChange={(c) => updateLevel(c)}
      />
    </Box>
  );
};

export default memo(AlertPanel);
