import React, { FunctionComponent, ComponentClass, useState } from "react";
import { useComponents } from "../../hooks";
import { Container } from "./PreviewWrapper";

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

  return (
    <Container
      hover={hover}
      showLayout={state.showLayout}
      onClick={(e) => selectComponent(e)}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {children}
    </Container>
  );
};

export default PreviewContainer;
