import React, { memo } from "react";
import { Grid } from "@freshworks/react-nucleus";
import { useComponents } from "~hooks/index";
import { FormInput } from "~components/inspector/controls/FormInput";

const DimensionPanel = () => {
  const [state, dispatch]: any = useComponents();
  const comp = state.components[state.selectedId];
  return (
    <>
      <Grid gridTemplateColumns="repeat(2,1fr)" gridGap={1}>
        <FormInput
          showLabel={true}
          label="Width"
          value={comp.props.width}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "width",
              value: e.target.value,
            })
          }
        />
        <FormInput
          showLabel={true}
          label="Height"
          value={comp.props.height}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "height",
              value: e.target.value,
            })
          }
        />
      </Grid>
      <Grid gridTemplateColumns="repeat(2,1fr)" gridGap={1}>
        <FormInput
          showLabel={true}
          label="Min Width"
          value={comp.props.minWidth}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "minWidth",
              value: e.target.value,
            })
          }
        />
        <FormInput
          showLabel={true}
          label="Min Height"
          value={comp.props.minHeight}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "minHeight",
              value: e.target.value,
            })
          }
        />
        <FormInput
          showLabel={true}
          label="Max Width"
          value={comp.props.maxWidth}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "maxWidth",
              value: e.target.value,
            })
          }
        />
        <FormInput
          showLabel={true}
          label="Max Height"
          value={comp.props.maxHeight}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "UPDATE_PROPS",
              name: "maxHeight",
              value: e.target.value,
            })
          }
        />
      </Grid>
    </>
  );
};
export default memo(DimensionPanel);
