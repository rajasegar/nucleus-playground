import React, { useContext } from "react";
import { Flex, Box, Link, Text } from "rebass/styled-components";
import { useTheme, Toggle, Menu } from "@freshworks/react-nucleus";
import { useState } from "react";
import ChevronDown from "./icons/ChevronDown";
import { ComponentsContext } from "../contexts/ComponentsContext";
import { Button, Confirmation } from "@freshworks/react-nucleus";
import { buildParameters } from "../utils/codesandbox";
import { generateCode } from "../utils/code";

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
  const [state, dispatch]: any = useContext(ComponentsContext);
  const { showLayout, showCode } = state;
  const theme = useTheme();

  const [showClearCode, setShowClearCode] = useState(false);

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

  function clearCode() {
    dispatch({ type: "CLEAR_EDITOR" });
    setShowClearCode(false);
  }

  const CodeSandboxButton = () => {
    const { components } = state;
    const [isLoading, setIsLoading] = useState(false);
    return (
      <Button
        size="mini"
        type="secondary"
        inline
        onClick={async () => {
          setIsLoading(true);
          const code = await generateCode(components);
          setIsLoading(false);
          const parameters = buildParameters(code);

          window.open(
            `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`,
            "_blank"
          );
        }}
      >
        Export code
      </Button>
    );
  };

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
            <Box sx={{ "vertical-align": "middle", "margin-left": "8px" }}>
              <Toggle
                on={showLayout}
                size="sm"
                handleChange={() => updateShowLayout()}
              />
            </Box>
          </Box>
          <Box px={4}>
            Code panel
            <Box sx={{ "vertical-align": "middle", "margin-left": "8px" }}>
              <Toggle
                on={showCode}
                size="sm"
                handleChange={() => updateShowCode()}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
      <CodeSandboxButton />
      <Button
        type="secondary"
        size="mini"
        inline
        onClick={() => setShowClearCode(true)}
      >
        Clear &times;
      </Button>
      <Confirmation
        isOpen={showClearCode}
        onDismiss={() => setShowClearCode(false)}
        title="Are you sure?"
        cancelButtonText="Cancel"
        confirmButtonText="Yes"
        onConfirm={() => clearCode()}
      >
        Do you really want to remove all components on the editor?
      </Confirmation>
      <Link variant="nav" href="#!">
        Github
      </Link>
    </Flex>
  );
}
