import React, { FunctionComponent, ComponentClass } from "react";
import { useInteractive, useDropComponent } from "../../hooks";
import ComponentPreview from "./ComponentPreview";
import { Box } from "rebass/styled-components";

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
  const { props, ref } = useInteractive(component, enableVisualHelper);
  const propsElement = { ...props, ...forwardedProps, pos: "relative" };

  if (!isBoxWrapped) {
    propsElement.ref = drop(ref);
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

  if (isBoxWrapped) {
    let boxProps: any = {
      display: "inline",
    };

    return (
      <Box {...boxProps} ref={drop(ref)}>
        {children}
      </Box>
    );
  }

  return children;
};

export default WithChildrenPreviewContainer;
