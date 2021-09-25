import React from "react";
import { Input, Box } from "@freshworks/react-nucleus";
import { useComponents } from "~hooks/index";

export default function CardPanel() {
  const [state, dispatch]: any = useComponents();

  const comp = state.components[state.selectedId];

  return (
    <Box p={2}>
      <Input
        label="Height:"
        value={comp.props.height}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "height",
            value: e.target.value,
          })
        }
      />
      <Input
        label="Width:"
        value={comp.props.width}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "width",
            value: e.target.value,
          })
        }
      />
      <Input
        label="Padding:"
        value={comp.props.padding}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "padding",
            value: e.target.value,
          })
        }
      />
      <Input
        label="Border Radius:"
        value={comp.props.borderRadius}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "borderRadius",
            value: e.target.value,
          })
        }
      />
    </Box>
  );
}
