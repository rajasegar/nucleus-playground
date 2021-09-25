import React, { memo } from "react";
import { Input } from "@freshworks/react-nucleus";
import { useComponents } from "~hooks/index";

const BorderPanel = () => {
  const [state, dispatch]: any = useComponents();
  const comp = state.components[state.selectedId];
  return (
    <>
      <Input
        label="Opacity:"
        value={comp.props.opacity}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "opacity",
            value: e.target.value,
          })
        }
      />

      <Input
        label="Box Shadow:"
        value={comp.props.boxShadow}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "boxShadow",
            value: e.target.value,
          })
        }
      />
    </>
  );
};
export default memo(BorderPanel);
