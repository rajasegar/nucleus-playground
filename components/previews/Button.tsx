import React from "react";
import { Button } from "@freshworks/react-nucleus";

export default function ButtonPreview(props) {
  return (
    <Button size="normal" inline type="secondary" {...props}>
      Hello
    </Button>
  );
}
