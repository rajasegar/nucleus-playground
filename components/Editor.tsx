import React, { useContext } from "react";
import SplitPane from "react-split-pane";
import CodePanel from "./CodePanel";
import Preview from "./Preview";
import { ComponentsContext } from "../contexts/ComponentsContext";
import { Box, Text, Link } from "rebass/styled-components";
import ComponentPreview from "./editor/ComponentPreview";
import { useDropComponent } from "../hooks/useDropComponent";

export const gridStyles = {
  backgroundImage:
    "linear-gradient(to right, #d9e2e9 1px, transparent 1px),linear-gradient(to bottom, #d9e2e9 1px, transparent 1px);",
  backgroundSize: "20px 20px",
  bgColor: "#edf2f6",
  p: 10,
};

export default function Editor() {
  const [state, dispatch] = useContext(ComponentsContext);
  const { components, showLayout } = state;

  const { drop } = useDropComponent("root");
  const isEmpty = !components.root.children.length;
  const rootProps = components.root.props;

  let editorBackgroundProps = {};
  const onSelectBackground = () => {
    dispatch({
      type: "SELECT_BACKGROUND",
    });
  };

  if (showLayout) {
    editorBackgroundProps = gridStyles;
  }

  editorBackgroundProps = {
    ...editorBackgroundProps,
    ...rootProps,
  };

  const Playground = (
    <Box
      p={2}
      {...editorBackgroundProps}
      height="100%"
      minWidth="10rem"
      width="100%"
      display={isEmpty ? "flex" : "block"}
      justifyContent="center"
      alignItems="center"
      overflow="auto"
      ref={drop}
      position="relative"
      flexDirection="column"
      onClick={onSelectBackground}
    >
      {isEmpty && (
        <Text maxWidth="md" color="gray.400" fontSize="xl" textAlign="center">
          Drag some component to start coding without code! Or load{" "}
          <Link
            color="gray.500"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              dispatch.components.loadDemo("onboarding");
            }}
            textDecoration="underline"
          >
            the onboarding components
          </Link>
          .
        </Text>
      )}

      {components.root.children.map((name: string) => (
        <ComponentPreview key={name} componentName={name} />
      ))}
    </Box>
  );

  if (!state.showCode) {
    return Playground;
  }

  return (
    <div>
      <SplitPane
        style={{ overflow: "auto" }}
        defaultSize="50%"
        resizerStyle={{
          border: "3px solid rgba(1, 22, 39, 0.21)",
          zIndex: 20,
          cursor: "row-resize",
        }}
        split="horizontal"
      >
        {Playground}
        <CodePanel />
      </SplitPane>
    </div>
  );
}
