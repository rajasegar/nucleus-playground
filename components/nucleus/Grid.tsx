import styled from "styled-components";
import { compose, space, layout, grid } from "styled-system";
import css from "@styled-system/css";

const sx = (props: any) => css(props.sx)(props.theme);

const Grid = styled("div")(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    display: "grid",
  },
  sx,
  compose(space, layout, grid)
);

export default Grid;
