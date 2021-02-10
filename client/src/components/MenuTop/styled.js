import styled from "styled-components";

export const MenuTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 50px;
  border-bottom: 1px solid #edebe9;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background-color: white;
  z-index: 99999999999999999;
`;

export const MenuTopButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuTopButtonIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;
