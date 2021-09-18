import React, { useState } from "react";
import { Box } from "rebass/styled-components";
import { useComponents } from "../../hooks";

import { useTheme } from "@freshworks/react-nucleus";

export default function PreviewWrapper(props) {
  const [state, dispatch] = useComponents();
  const [hover, setHover] = useState(false);
  const theme = useTheme();

  const { component } = props;
  function selectComponent(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(component);
    dispatch({
      type: "SELECT_COMPONENT",
      id: component.id,
    });
  }

  return (
    <Box
      sx={
        hover
          ? { border: `1px solid ${theme.palette.elephant}` }
          : { border: "1px dashed black" }
      }
      p={1}
      m={1}
      onClick={(e) => selectComponent(e)}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {props.children}
    </Box>
  );
}
