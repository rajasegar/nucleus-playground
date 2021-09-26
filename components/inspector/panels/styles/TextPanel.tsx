import React, { memo, useState } from "react";
import { Checkbox, Dropdown, Input, Flex } from "@freshworks/react-nucleus";
import { useComponents } from "~hooks/index";

const TextPanel = () => {
  const [state, dispatch]: any = useComponents();
  const comp = state.components[state.selectedId];
  const [textAlign, setTextAlign] = useState(comp.props.textAlign);

  function updateTextAlign(value: any) {
    dispatch({
      type: "UPDATE_PROPS",
      name: "textAlign",
      value: value.name,
    });
    setTextAlign(value);
  }

  const alignments = [
    {
      name: "left",
    },
    {
      name: "right",
    },
    {
      name: "center",
    },
    {
      name: "justify",
    },
  ];

  return (
    <>
      <Flex my={2}>
        <Checkbox
          checked={comp.props.fontWeight === "bold"}
          name="Bold"
          id="bold"
          onChange={(e, checked) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "fontWeight",
              value: checked ? "bold" : "normal",
            })
          }
        >
          Bold
        </Checkbox>
        <Checkbox
          checked={comp.props.fontStyle === "italic"}
          name="Italic"
          id="italic"
          onChange={(e, checked) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "fontStyle",
              value: checked ? "italic" : "normal",
            })
          }
        >
          Italic
        </Checkbox>
      </Flex>
      <Dropdown
        filterKey="name"
        label="Text Align:"
        itemToString={(c) => c.name}
        defaultSelectedItem={textAlign}
        items={alignments}
        onChange={(c) => updateTextAlign(c)}
      />
      <p>
        <Input
          label="Font-size:"
          value={comp.props.fontSize}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "fontSize",
              value: e.target.value,
            })
          }
        />
      </p>
      <p>
        <Input
          label="Color:"
          value={comp.props.color}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "color",
              value: e.target.value,
            })
          }
        />
      </p>
      <p>
        <Input
          label="Line Height:"
          value={comp.props.lineHeight}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "lineHeight",
              value: e.target.value,
            })
          }
        />
      </p>
      <p>
        <Input
          label="Letter Spacing:"
          value={comp.props.letterSpacing}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "letterSpacing",
              value: e.target.value,
            })
          }
        />
      </p>
    </>
  );
};
export default memo(TextPanel);
