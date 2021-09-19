import React, { useState } from "react";
import { Toggle } from "@freshworks/react-nucleus";
import PreviewWrapper from "./PreviewWrapper";

export default function TogglePreview(props: any) {
  const [on, setOn] = useState(true);

  const { component } = props;

  return (
    <PreviewWrapper component={component}>
      <Toggle on={on} size="sm" handleChange={() => setOn(!on)} {...props} />
    </PreviewWrapper>
  );
}
