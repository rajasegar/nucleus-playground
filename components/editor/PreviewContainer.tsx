import React, { FunctionComponent, ComponentClass } from "react";
import { useInteractive } from "../../hooks";
import { Box } from "rebass/styled-components";

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
  const { props, ref } = useInteractive(component, enableVisualHelper);

  const children = React.createElement(type, {
    ...props,
    ...forwardedProps,
    ref,
  });

  if (isBoxWrapped) {
    let boxProps: any = {};

    return (
      <Box {...boxProps} ref={ref}>
        {children}
      </Box>
    );
  }

  return children;
};

export default PreviewContainer;
