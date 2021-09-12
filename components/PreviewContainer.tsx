import React, { useCallback } from "react";
import { Box } from "rebass/styled-components";

export default function PreviewContainer({
  index,
  focused = false,
  onClick,
  children,
  ...restProps
}) {
  const clickHandler = useCallback(() => {
      console.log(index);
    onClick(index);
  }, [onClick]);
  return (
    <Box
      onClick={clickHandler}
      sx={{ border: focused && "1px solid blue" }}
        key={index}
      {...restProps}
    >
      {children}
    </Box>
  );
}
