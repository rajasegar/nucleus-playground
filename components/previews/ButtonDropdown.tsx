import React from "react";
import { ButtonDropdown } from "@freshworks/react-nucleus";

const options = [
  {
    id: "submit",
    name: "Submit",
  },
  {
    id: "reset",
    name: "Reset",
    type: "secondary",
  },
  {
    id: "delete",
    name: "Delete",
    type: "danger",
  },
  {
    id: "edit",
    disabled: true,
    name: "Edit",
  },
];
export default function ButtonDropdownPreview(props) {
  return (
    <ButtonDropdown
      id="multi-click"
      position="bottom"
      onClick={(e, v: any) => alert(`Clicked ${v.name}`)}
      options={options}
      {...props}
    />
  );
}
