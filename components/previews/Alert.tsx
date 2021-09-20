import React from "react";
import { Alert } from "@freshworks/react-nucleus";

import PreviewWrapper from "./PreviewWrapper";

export default function AlertPreview(props: any) {
  const { component } = props;
  const componentProps = component.props;
  return (
    <PreviewWrapper component={component}>
      <Alert {...componentProps}>Important! This is an alert</Alert>
    </PreviewWrapper>
  );
}
