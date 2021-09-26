import React, { useContext } from "react";
import { Input, Dropdown, Box } from "@freshworks/react-nucleus";
import { ComponentsContext } from "~contexts/ComponentsContext";

export default function HeadingPanel() {
  const [state, dispatch]: any = useContext(ComponentsContext);

  const comp = state.components[state.selectedId];

  const asValues = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
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
        itemToString={(c: any) => c.name}
        defaultSelectedItem="h1"
        items={asValues}
        onChange={(c: any) =>
          dispatch({ type: "UPDATE_PROPS", name: "level", value: c.name })
        }
      />
    </Box>
  );
}
