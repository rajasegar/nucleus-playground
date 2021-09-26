import React, { useContext } from "react";
import { Input, Dropdown, Box } from "@freshworks/react-nucleus";
import { ComponentsContext } from "~contexts/ComponentsContext";

export default function BadgePanel() {
  const [state, dispatch]: any = useContext(ComponentsContext);

  const comp = state.components[state.selectedId];

  const badgeTypes = [
    { name: "primary" },
    { name: "critical" },
    { name: "new" },
    { name: "neutral" },
    { name: "dark" },
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
        label="Type:"
        itemToString={(c: any) => c.name}
        defaultSelectedItem="h1"
        items={badgeTypes}
        onChange={(c: any) =>
          dispatch({ type: "UPDATE_PROPS", name: "type", value: c.name })
        }
      />
    </Box>
  );
}
