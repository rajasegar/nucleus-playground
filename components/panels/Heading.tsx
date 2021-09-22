import React, { useContext } from "react";
import { Input, Dropdown } from "@freshworks/react-nucleus";
import { Box } from "rebass/styled-components";
import { ComponentsContext } from "../../contexts/ComponentsContext";

export default function HeadingPanel() {
  const [state, dispatch]: any = useContext(ComponentsContext);

  const comp = state.components[state.selectedId];

  const asValues = [
    { name: "h1" },
    { name: "h2" },
    { name: "h3" },
    { name: "h4" },
    { name: "h5" },
    { name: "h6" },
  ];

  return (
    <Box p={2}>
      <Input
        label="Text"
        value={comp.props.text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "text",
            value: e.target.value,
          })
        }
      />

      <Dropdown
        filterKey="name"
        label="as:"
        itemToString={(c: any) => c.name}
        defaultSelectedItem="h1"
        items={asValues}
        onChange={(c: any) =>
          dispatch({ type: "UPDATE_PROPS", name: "as", value: c.name })
        }
      />
    </Box>
  );
}
