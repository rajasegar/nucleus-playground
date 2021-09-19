import React from "react";
import { Button } from "@freshworks/react-nucleus";
import PreviewWrapper from "./PreviewWrapper";

export default function ButtonPreview(props) {
  const componentProps = props.component.props;
  return (
    <PreviewWrapper {...props}>
      <Button size="normal" inline type="primary" {...componentProps}>
        Hello
      </Button>
    </PreviewWrapper>
  );
}
