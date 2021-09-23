import React, { memo } from "react";
import { Box } from "@freshworks/react-nucleus";
import dynamic from "next/dynamic";
import { useComponents, useDropComponent } from "../../hooks";
import styled, { css } from "styled-components";

const ComponentPreview = dynamic(() => import("./ComponentPreview"));
const CodePanel = dynamic(() => import("../CodePanel"), { ssr: false });
const SplitPane = dynamic(() => import("react-split-pane"), { ssr: false });

type WrapperProps = {
  isEmpty: boolean;
  showLayout: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  padding: 4px;
  height: 100%;
  minwidth: 10rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.isEmpty ? "flex" : "block")};
  overflow: auto;
  position: relative;
  flex-direction: column;
  ${(props) =>
    props.showLayout &&
    css`
      background-image: linear-gradient(to right, #d9e2e9 1px, transparent 1px),
        linear-gradient(to bottom, #d9e2e9 1px, transparent 1px);
      background-size: 20px 20px;
      bg-color: #edf2f6;
      padding: 10px;
    `}
`;

const Editor = () => {
  const [state, dispatch]: any = useComponents();
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

  editorBackgroundProps = {
    ...editorBackgroundProps,
    ...rootProps,
  };

  const Playground = (
    <Wrapper
      showLayout={showLayout}
      isEmpty={isEmpty}
      ref={drop}
      onClick={onSelectBackground}
    >
      {isEmpty && (
        <Box maxWidth="md" color="gray.400" fontSize="xl" textAlign="center">
          Drag some component to start coding without code! Or load{" "}
          <a
            color="gray.500"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              dispatch.components.loadDemo("onboarding");
            }}
          >
            the onboarding components
          </a>
          .
        </Box>
      )}

      {components.root.children.map((name: string) => (
        <ComponentPreview key={name} componentName={name} />
      ))}
    </Wrapper>
  );

  if (!state.showCode) {
    return Playground;
  }

  return (
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
  );
};

export default memo(Editor);
