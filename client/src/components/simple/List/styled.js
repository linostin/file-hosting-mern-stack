import styled, { css } from "styled-components/macro";

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItemEmptyBlock = styled.li`
width: 100%;
height: 50px;
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  cursor: pointer;
  padding: 8px 16px 8px 16px;
  background-color: ${(props) => (props.selected && "#e1dfdd")};
  &:hover {
    background-color: #edebe9;
  }
`;

export const ListItemIcon = styled.div`
min-width: 50px;
`;

export const ListItemText = styled.div`
`;
