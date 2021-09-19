import React, { useState } from "react";
import { Button, Menu } from "@freshworks/react-nucleus";

export default function MenuPreview(props: any) {
  const [show, setShow] = useState(false);
  const options = [
    {
      id: "freshDesk",
      name: "Fresh Desk",
    },
    {
      id: "freshRelease",
      name: "Fresh Release",
    },
    {
      id: "freshChat",
      name: "Fresh Chat",
      disabled: true,
    },
    {
      id: "freshPing",
      name: "Fresh Ping",
    },
    {
      id: "freshStatus",
      name: "Fresh Status",
      disabled: true,
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      <Button inline onClick={() => setShow(!show)}>
        Click me
      </Button>
      {show && (
        <div
          style={{
            position: "absolute",
          }}
        >
          <Menu
            options={options}
            onSelect={(v) => alert(v)}
            closeMenuCallback={() => setShow(false)}
            {...props}
          />
        </div>
      )}
    </div>
  );
}
