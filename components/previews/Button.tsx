import React from "react";
import { Button } from "@freshworks/react-nucleus";
import { useDropComponent } from "../../hooks/useDropComponent";
import { useInteractive } from "../../hooks/useInteractive";

export default function ButtonPreview({ component }) {
  const { isOver } = useDropComponent(component.id);
  const { props, ref } = useInteractive(component, true);

  if (isOver) {
    props.bg = "teal.50";
  }

  return (
    <Button ref={ref} size="normal" inline type="primary" {...props}>
      Hello
    </Button>
  );
}
