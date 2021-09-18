import React, { useContext } from "react";
import SplitPane from "react-split-pane";
import CodePanel from "./CodePanel";
import Preview from "./Preview";
import { ComponentsContext } from "../contexts/ComponentsContext";

export default function Editor() {
  const [state, dispatch] = useContext(ComponentsContext);

  if (!state.showCode) {
    return <Preview />;
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
        <Preview />
        <CodePanel />
      </SplitPane>
    </div>
  );
}
