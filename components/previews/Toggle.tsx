import React, { useState } from "react";
import { Toggle } from "@freshworks/react-nucleus";

export default function TogglePreview(props) {
  const [on, setOn] = useState(true);
  return (
    <Toggle on={on} size="sm" handleChange={() => setOn(!on)} {...props} />
  );
}
