import React, { memo } from "react";
import { Input } from "@freshworks/react-nucleus";
import { useComponents } from "~hooks/index";

const BorderPanel = () => {
  const [state, dispatch]: any = useComponents();
  const comp = state.components[state.selectedId];
  return (
    <>
      <Input
        label="Border"
        value={comp.props.border}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "border",
            value: e.target.value,
          })
        }
      />

      <Input
        label="Border Radius"
        value={comp.props.borderRadius}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "borderRadius",
            value: e.target.value,
          })
        }
      />
    </>
  );
};
export default memo(BorderPanel);
