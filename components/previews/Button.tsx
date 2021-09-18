import React from "react";
import { Button } from "@freshworks/react-nucleus";
import PreviewWrapper from "./PreviewWrapper";

export default function ButtonPreview(props) {
  return (
    <PreviewWrapper {...props}>
      <Button size="normal" inline type="primary" {...props}>
        Hello
      </Button>
    </PreviewWrapper>
  );
}
