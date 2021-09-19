import React, { useState } from "react";
import Flex from "../nucleus/Flex";
import { useDropComponent, useComponents } from "../../hooks";
import { Box } from "rebass/styled-components";
import { useTheme } from "@freshworks/react-nucleus";
import ComponentPreview from "../editor/ComponentPreview";

export default function FlexPreview(props: any) {
  const [, dispatch]: any = useComponents();
  const [hover, setHover] = useState(false);
  const theme = useTheme();

  const { component } = props;
  function selectComponent(e: any) {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: "SELECT_COMPONENT",
      id: component.id,
    });
  }

  const { drop } = useDropComponent(component.id);

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
      ref={drop}
    >
      <Flex {...component.props}>
        {component.children.map((key: string) => (
          <ComponentPreview key={key} componentName={key} />
        ))}
      </Flex>
    </Box>
  );
}
