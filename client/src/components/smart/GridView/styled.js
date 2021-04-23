import styled, { css } from "styled-components/macro";

export const GridViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 5px;
`;

export const GridViewCheckbox = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  display: ${(props) => (props.active ? "block" : "none")};
`;

export const GridViewGridElementWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 170px;
  background-color: ${(props) => (props.active ? "#e1dfdd" : null)};
  &:hover ${GridViewCheckbox} {
    display: block;
  }

  &:hover {
    background-color: #edebe9;
    &:active {
      background-color: #e1dfdd;
    }
  }
`;

export const GridViewGridDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-overflow: ellipsis;
  overflow: hidden; */
  /* max-width: 170px; */
`;

export const GridViewGridFolderIcon = styled.div`
  cursor: pointer;
`;

export const GridViewListTableCellName = styled.div`
  display: inline-block;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const GridViewError = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 75vh;
`;