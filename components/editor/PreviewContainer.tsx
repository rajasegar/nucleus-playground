import React, { FunctionComponent, ComponentClass, useState } from "react";
import { Box } from "rebass/styled-components";
import { useComponents } from "../../hooks";
import { useTheme } from "@freshworks/react-nucleus";

const PreviewContainer: React.FC<{
  component: any;
  type: string | FunctionComponent<any> | ComponentClass<any, any>;
  enableVisualHelper?: boolean;
  isBoxWrapped?: boolean;
}> = ({
  component,
  type,
  enableVisualHelper,
  isBoxWrapped,
  ...forwardedProps
}) => {
  const [state, dispatch]: any = useComponents();
  const [hover, setHover] = useState(false);
  const theme = useTheme();

  function selectComponent(e: any) {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: "SELECT_COMPONENT",
      id: component.id,
    });
  }

  const props: any = { ...component.props };

  const children = React.createElement(type, {
    ...props,
    ...forwardedProps,
  });

  let styleProps: any = {};
  if (state.showLayout) {
    styleProps = hover
      ? { border: `1px solid ${theme.palette.elephant}` }
      : { border: "1px dashed black" };
    styleProps.padding = "4px";
    styleProps.margin = "4px";
  }

  return (
    <Box
      sx={{ ...styleProps }}
      onClick={(e) => selectComponent(e)}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {children}
    </Box>
  );
};

export default PreviewContainer;
