import React, { useState } from "react";
import { Checkbox } from "@freshworks/react-nucleus";

export default function CheckboxPreview(props: any) {
  const [checked, setChecked] = useState({
    checkA: false,
  });
  return (
    <Checkbox
      checked={Boolean(checked.checkA)}
      name="checkA"
      id="checkA"
      onChange={(e, v) => setChecked({ ...checked, checkA: v })}
      {...props}
    >
      I Agree
    </Checkbox>
  );
}
