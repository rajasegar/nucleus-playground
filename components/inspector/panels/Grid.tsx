import React, { useContext } from "react";
import { Input, Box } from "@freshworks/react-nucleus";
import { ComponentsContext } from "~contexts/ComponentsContext";

export default function GridPanel() {
  const [state, dispatch]: any = useContext(ComponentsContext);

  const comp = state.components[state.selectedId];

  const props = [
    {
      label: "Template Columns",
      name: "gridTemplateColumns",
    },
    {
      label: "Template Rows",
      name: "gridTemplateRows",
    },
    {
      label: "Gap",
      name: "gridGap",
    },
    {
      label: "Row Gap",
      name: "gridRowGap",
    },
    {
      label: "Column Gap",
      name: "gridColumnGap",
    },
    {
      label: "Auto Columns",
      name: "gridAutoColumns",
    },
    {
      label: "Column",
      name: "gridColumn",
    },
    {
      label: "Auto Rows",
      name: "gridAutoRows",
    },
    {
      label: "Row",
      name: "gridRow",
    },
    {
      label: "Auto Flow",
      name: "gridAutoFlow",
    },
    {
      label: "Area",
      name: "gridArea",
    },
    {
      label: "Template Areas",
      name: "gridTemplateAreas",
    },
  ];

  return (
    <Box p={2}>
      {props.map((p, index) => {
        return (
          <Input
            label={p.label}
            value={comp.props[p.name]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "UPDATE_PROPS",
                name: p.name,
                value: e.target.value,
              })
            }
            key={index}
          />
        );
      })}
    </Box>
  );
}
