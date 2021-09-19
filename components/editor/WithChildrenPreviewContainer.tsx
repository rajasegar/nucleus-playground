import React, { FunctionComponent, ComponentClass, useState } from "react";
import { useComponents, useDropComponent } from "../../hooks";
import ComponentPreview from "./ComponentPreview";
import { Box } from "rebass/styled-components";
import { useTheme } from "@freshworks/react-nucleus";

const WithChildrenPreviewContainer: React.FC<{
  component: any;
  type: string | FunctionComponent<any> | ComponentClass<any, any>;
  enableVisualHelper?: boolean;
  isBoxWrapped?: boolean;
}> = ({
  component,
  type,
  enableVisualHelper = false,
  isBoxWrapped,
  ...forwardedProps
}) => {
  const { drop, isOver } = useDropComponent(component.id);
  const propsElement = {
    ...component.props,
    ...forwardedProps,
    pos: "relative",
  };
  const [state, dispatch] = useComponents();
  const [hover, setHover] = useState(false);
  const theme = useTheme();

  function selectComponent(e) {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: "SELECT_COMPONENT",
      id: component.id,
    });
  }

  if (isOver) {
    propsElement.bg = "yellow";
  }

  const children = React.createElement(
    type,
    propsElement,
    component.children.map((key: string) => (
      <ComponentPreview key={key} componentName={key} />
    ))
  );

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
      height={component.children.length > 0 ? "auto" : "40px"}
    >
      {children}
    </Box>
  );
};

export default WithChildrenPreviewContainer;
