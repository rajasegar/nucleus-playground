import styled from "styled-components";
import { flex, space, layout } from "styled-system";

type CardProps = {
  disabled: boolean;
  height: string;
  isSelected: boolean;
  borderRadius: string;
  padding?: string;
};

export const Card = styled.div<CardProps>`
  padding: 20px 32px 32px;
  position: relative;
  border: ${(props) => props.theme.colors.card.border.default};
  border-radius: ${(props) => props.borderRadius || "12px"};
  box-shadow: ${(props) => props.theme.colors.card.boxShadow.default};
  display: inline-flex;
  flex-direction: column;
  opacity: ${(props) => (props.disabled ? ".6" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  height: 276px;
  &:hover {
    box-shadow: 0px 2px 16px rgba(18, 52, 77, 0.16);
  }
  &:focus-within {
    border: ${(props) => props.theme.colors.card.border.focus};
    box-shadow: ${(props) => props.theme.colors.card.boxShadow.focus};
  }
  ${(props) =>
    props.isSelected && {
      border: props.theme.colors.card.border.focus,
      boxShadow: props.theme.colors.card.boxShadow.focus,
    }}
  ${flex};
  ${space};
  ${layout};
`;

Card.defaultProps = {
  disabled: false,
  isSelected: false,
  height: "276px",
  padding: "20px 32px 32px",
  tabIndex: 0,
};

export default Card;
