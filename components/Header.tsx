import React, { useContext } from "react";
import { Flex, Box, Link, Text } from "rebass/styled-components";
import { useTheme, Toggle, Menu } from "@freshworks/react-nucleus";
import { useState } from "react";
import ChevronDown from "./icons/ChevronDown";
import { ComponentsContext } from "../contexts/ComponentsContext";

const options = [
  {
    id: "save",
    name: "Save components",
  },
  {
    id: "import",
    name: "Import components",
  },
  {
    id: "docs",
    name: "Nucleus Playground Docs",
  },
  {
    id: "issue",
    name: "Report issue",
  },
];

const EditorMenu = () => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ marginLeft: "8px", position: "relative" }}>
      <Text
        onClick={() => setShow(!show)}
        mx={4}
        sx={{ ":hover": { cursor: "pointer" } }}
      >
        Editor <ChevronDown />
      </Text>
      {show && (
        <div style={{ position: "absolute" }}>
          <Menu
            options={options}
            onSelect={(v) => alert(v)}
            closeMenuCallback={() => setShow(false)}
          />
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const [state, dispatch] = useContext(ComponentsContext);
  const { showLayout, showCode } = state;
  const theme = useTheme();

  function updateShowLayout() {
    dispatch({
      type: "UPDATE_SHOW_LAYOUT",
      showLayout: !showLayout,
    });
  }

  function updateShowCode() {
    dispatch({
      type: "UPDATE_SHOW_CODE",
      showCode: !showCode,
    });
  }

  return (
    <Flex px={2} color="white" bg={theme.palette.elephant} alignItems="center">
      <Text p={2} fontWeight="bold">
        Nucleus
      </Text>
      <Text>Playground</Text>
      <EditorMenu />
      <Box mr="auto">
        <Flex alignItems="center">
          <Box px={4}>
            Builder mode
            <Toggle
              on={showLayout}
              size="sm"
              handleChange={() => updateShowLayout()}
              style={{ "vertical-align": "middle", "margin-left": "8px" }}
            />
          </Box>
          <Box px={4}>
            Code panel
            <Toggle
              on={showCode}
              size="sm"
              handleChange={() => updateShowCode()}
              style={{ "vertical-align": "middle", "margin-left": "8px" }}
            />
          </Box>
        </Flex>
      </Box>
      <Link variant="nav" href="#!">
        Github
      </Link>
    </Flex>
  );
}
