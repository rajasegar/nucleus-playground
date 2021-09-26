import styled, { css } from "styled-components";

type ContainerProps = {
  hover: boolean;
  theme: any;
  showLayout: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${(props) =>
    props.showLayout &&
    css`
      padding: 0.5rem;
      margin: 4px;
      border: ${props.hover
        ? `1px solid ${props.theme.palette.elephant}`
        : "1px dashed black"};
    `}
`;
