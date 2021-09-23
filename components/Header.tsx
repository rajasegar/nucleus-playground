import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  Button,
  Confirmation,
  useTheme,
  Toggle,
  Menu,
} from "@freshworks/react-nucleus";
import ChevronDown from "./icons/ChevronDown";
import { ComponentsContext } from "../contexts/ComponentsContext";
import { buildParameters } from "../utils/codesandbox";
import { generateCode } from "../utils/code";

import styles from "../styles/Home.module.css";

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

const EditorTrigger = styled.div`
  margin-left: 32px;
  margin-right: 32px;
  :hover {
  cursor; pointer;
}
`;

const EditorMenu = () => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ marginLeft: "8px", position: "relative" }}>
      <EditorTrigger onClick={() => setShow(!show)}>
        Editor <ChevronDown />
      </EditorTrigger>
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
    <div className={styles.header}>
      <div className={styles.brand}>Nucleus</div>
      <div>Playground</div>
      <EditorMenu />
      <div style={{ marginRight: "auto" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={styles.toggleWrap}>
            <div className={styles.toggleLabel}>Builder mode</div>
            <Toggle
              on={showLayout}
              size="sm"
              handleChange={() => updateShowLayout()}
            />
          </div>
          <div className={styles.toggleWrap}>
            <div className={styles.toggleLabel}>Code panel</div>
            <Toggle
              on={showCode}
              size="sm"
              handleChange={() => updateShowCode()}
            />
          </div>
        </div>
      </div>
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
      <a href="https://github.com/rajasegar/nucleus-playground">Github</a>
    </div>
  );
}
