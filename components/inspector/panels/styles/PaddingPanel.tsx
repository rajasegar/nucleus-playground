import React, { memo } from "react";
import { useComponents } from "../../../../hooks";
import { Input, Grid, Box } from "@freshworks/react-nucleus";
import { FormInput } from "~components/inspector/controls/FormInput";

type PaddingPanelPropsType = {
  type: "margin" | "padding";
};

const ATTRIBUTES = {
  margin: {
    all: "Margin",
    left: "marginLeft",
    right: "marginRight",
    bottom: "marginBottom",
    top: "marginTop",
  },
  padding: {
    all: "Padding",
    left: "paddingLeft",
    right: "paddingRight",
    bottom: "paddingBottom",
    top: "paddingTop",
  },
};

const PaddingPanel = ({ type }: PaddingPanelPropsType) => {
  const [state, dispatch]: any = useComponents();
  const comp = state.components[state.selectedId];
  return (
    <Box my={2}>
      <Input
        label={ATTRIBUTES[type].all}
        value={comp.props[type]}
        placeholder="All"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: type,
            value: e.target.value,
          })
        }
      />

      <Grid gridTemplateColumns="repeat(2,1fr)" gridGap={1}>
        <FormInput
          value={comp.props.marginLeft}
          placeholder="← left"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: ATTRIBUTES[type].left,
              value: e.target.value,
            })
          }
        />
        <FormInput
          value={comp.props.marginRight}
          placeholder="→ right"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: ATTRIBUTES[type].right,
              value: e.target.value,
            })
          }
        />
      </Grid>

      <Grid gridTemplateColumns="repeat(2,1fr)" gridGap={1}>
        <FormInput
          value={comp.props.marginTop}
          placeholder="↑ top"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: ATTRIBUTES[type].top,
              value: e.target.value,
            })
          }
        />
        <FormInput
          value={comp.props.marginBottom}
          placeholder="↓ bottom"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: ATTRIBUTES[type].bottom,
              value: e.target.value,
            })
          }
        />
      </Grid>
    </Box>
  );
};

export default memo(PaddingPanel);
