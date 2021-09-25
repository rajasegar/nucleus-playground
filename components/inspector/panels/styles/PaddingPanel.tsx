import React, { memo } from "react";
import { useComponents } from "../../../../hooks";
import { Input, Grid, Box } from "@freshworks/react-nucleus";
import styled from "styled-components";

type PaddingPanelPropsType = {
  type: "margin" | "padding";
};

const ATTRIBUTES = {
  margin: {
    all: "Margin",
    left: "ml",
    right: "mr",
    bottom: "mb",
    top: "mt",
  },
  padding: {
    all: "Padding",
    left: "pl",
    right: "pr",
    bottom: "pb",
    top: "pt",
  },
};

const SmallInput = styled.input`
  max-width: 100px;
  padding: 4px 12px;
  height: 32px;
  font-size: 14px;
  line-height: 32px;
  font-weight: 500;
  border-radius: 5px;
  border: 1px solid #cfd7df;
`;

const FormInputWrapper = styled.div`
  margin: 0.25em 0;
`;

type FormInputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const FormInput = ({ label, value, onChange }: FormInputProps) => {
  let placeholder: string = "All";
  switch (label) {
    case "mr":
    case "pr":
      placeholder = "→ right";
      break;
    case "ml":
    case "pl":
      placeholder = "← left";
      break;
    case "mt":
    case "pt":
      placeholder = "↑ top";
      break;
    case "mb":
    case "pb":
      placeholder = "↓ bottom";
      break;
  }
  return (
    <FormInputWrapper>
      <SmallInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </FormInputWrapper>
  );
};

const PaddingPanel = ({ type }: PaddingPanelPropsType) => {
  const [state, dispatch]: any = useComponents();
  const comp = state.components[state.selectedId];
  return (
    <Box my={2}>
      <Input
        label={ATTRIBUTES[type].all}
        value={comp.props.margin}
        placeholder="All"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "UPDATE_PROPS",
            name: "text",
            value: e.target.value,
          })
        }
      />

      <Grid gridTemplateColumns="repeat(2,1fr)" gridGap={1}>
        <FormInput
          label={ATTRIBUTES[type].left}
          value={comp.props.marginLeft}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "text",
              value: e.target.value,
            })
          }
        />
        <FormInput
          label={ATTRIBUTES[type].right}
          value={comp.props.marginRight}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "text",
              value: e.target.value,
            })
          }
        />
      </Grid>

      <Grid gridTemplateColumns="repeat(2,1fr)" gridGap={1}>
        <FormInput
          label={ATTRIBUTES[type].top}
          value={comp.props.marginTop}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "text",
              value: e.target.value,
            })
          }
        />
        <FormInput
          label={ATTRIBUTES[type].bottom}
          value={comp.props.marginBottom}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "text",
              value: e.target.value,
            })
          }
        />
      </Grid>
    </Box>
  );
};

export default memo(PaddingPanel);
