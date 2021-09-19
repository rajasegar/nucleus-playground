import React, { useState } from "react";
import { Box } from "rebass/styled-components";
import { useComponents } from "../../hooks";

import { useTheme } from "@freshworks/react-nucleus";

export default function PreviewWrapper(props: any) {
  const [state, dispatch]: any = useComponents();
  const [hover, setHover] = useState(false);
  const theme = useTheme();

  const { component } = props;
  function selectComponent(e: any) {
    e.preventDefault();
    e.stopPropagation();
    console.log(component);
    dispatch({
      type: "SELECT_COMPONENT",
      id: component.id,
    });
  }

  let styleProps: any = {};
  if (state.showLayout) {
    styleProps = hover
      ? { border: `1px solid ${theme.palette.elephant}` }
      : { border: "1px dashed black" };
    styleProps["padding"] = "4px";
    styleProps["margin"] = "4px";
  }
  return (
    <Box
      sx={{ ...styleProps }}
      width="auto"
      onClick={(e) => selectComponent(e)}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {props.children}
    </Box>
  );
}
