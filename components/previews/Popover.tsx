import React, { useState } from "react";
import { Button, Menu, Popover } from "@freshworks/react-nucleus";

export default function PopoverPreview(props: any) {
  const [anchorEl, setAnchorEl] = useState(null);
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
      hide: true,
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Button
        inline
        aria-describedby="basic-popover"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Open
      </Button>
      <Popover
        id="basic-popover"
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        {...props}
      >
        <Menu
          options={options}
          onSelect={() => setAnchorEl(null)}
          closeMenuCallback={() => setAnchorEl(null)}
        />
      </Popover>
    </div>
  );
}
