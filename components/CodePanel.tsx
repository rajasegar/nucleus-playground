import React, { memo, useState, useEffect, useContext } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { useClipboard } from "../hooks/useClipboard";
import { generateCode } from "../utils/code";
import theme from "prism-react-renderer/themes/nightOwl";
import { Button, Box } from "@freshworks/react-nucleus";

import { ComponentsContext } from "../contexts/ComponentsContext";

const CodePanel = () => {
  const [state]: any = useContext(ComponentsContext);

  const { components } = state;
  const [code, setCode] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getCode = async () => {
      const code = await generateCode(components);
      setCode(code);
    };

    getCode();
  }, [components]);

  const { onCopy, hasCopied } = useClipboard(code!);

  const style = {
    overflow: "auto",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    "z-index": "5",
  };
  return (
    <Box p={2} fontSize="sm" backgroundColor="#011627" sx={{ ...style }}>
      <Box sx={{ position: "absolute", right: "10px" }}>
        <Button inline onClick={onCopy} type="secondary">
          {hasCopied ? "Copied!" : "Copy"}
        </Button>
      </Box>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={code || "// Formatting code… please wait ✨"}
        language="jsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} key={i}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} key={key} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};

export default memo(CodePanel);
