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
  min-width: 130px;
  min-height: 130px;
  &:hover {
    background-color: #edebe9;
  }
`;

export const FilesViewGridDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FilesViewGridFolderIcon = styled.div``;
