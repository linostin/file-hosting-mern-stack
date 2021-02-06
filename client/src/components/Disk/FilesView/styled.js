import styled from "styled-components";

export const FilesViewGridContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 5px;
`;

export const FilesViewGridElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  min-height: 150px;
  &:hover {
    background-color: #edebe9;
  &:active {
    background-color: #e1dfdd;
  }
  }
`;

export const FilesViewGridDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FilesViewGridFolderIcon = styled.div`
  cursor: pointer;
`;
