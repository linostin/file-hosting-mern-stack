import styled from 'styled-components/macro';

export const Container = styled.nav``;

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
`;
// TODO refactor this code

const hoverColor = (hoverColor) => {
  if (hoverColor) {
    return hoverColor;
  }
  return "#ddd";
};

const selectedColorLogic = (selectedProp, activeColorProp, colorProp) => {
  if (selectedProp) {
    if (activeColorProp) {
      return activeColorProp;
    }
    return "palevioletred";
  } else if (colorProp) {
    return colorProp;
  }
  return "white";
};

// TODO refactor this code

export const PageButton = styled.button`
  padding: 0px 6px;
  margin: 0px 3px;
  border: ${(props) => (props.variant === 'outlined' ? "1px solid rgba(0, 0, 0, 0.23)" : 0)};
  outline: none;
  min-width: 32px;
  height: 32px;
  text-align: center;
  color: ${(props) => (props.fontColor ? props.fontColor : "black")};
  border-radius: ${(props) => (props.shape === "round" ? "50%" : null)};
  background-color: ${(props) =>
    props.disabled
      ? "white"
      : selectedColorLogic(props.selected, props.activeColor, props.color)};
  transition: background-color 0.3s;
  cursor: ${(props) => (props.disabled ? null : "pointer")};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? null : hoverColor(props.hoverColor)};
  }
`;

export const PageItemElem = styled.li``;
