import React, { FunctionComponent, ComponentClass, useState } from "react";
import { useComponents, useDropComponent } from "../../hooks";
import ComponentPreview from "./ComponentPreview";
import { useTheme } from "@freshworks/react-nucleus";
import { Container } from "./PreviewWrapper";

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

  let styleProps: any = {};
  if (state.showLayout) {
    styleProps = hover
      ? { border: `1px solid ${theme.palette.elephant}` }
      : { border: "1px dashed black" };
    styleProps.padding = "4px";
    styleProps.margin = "4px";
  }

  return (
    <Container
      hover={hover}
      theme={theme}
      showLayout={state.showLayout}
      onClick={(e) => selectComponent(e)}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      ref={drop}
    >
      {children}
    </Container>
  );
};

export default WithChildrenPreviewContainer;
