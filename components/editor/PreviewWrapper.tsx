import styled, { css } from "styled-components";

type ContainerProps = {
  hover: boolean;
  theme: any;
  showLayout: boolean;
};

export const Container = styled.div<ContainerProps>`
  padding: 1rem;
  margin: 4px;
  ${(props) =>
    props.showLayout &&
    css`
      border: ${props.hover
        ? `1px solid ${props.theme.palette.elephant}`
        : "1px dashed black"};
    `}
`;
