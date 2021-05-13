import styled, { css } from "styled-components/macro";
import Button from "../../ui/Button";

export const CommandMenuContainer = styled.div`
border-bottom: 1px solid #edebe9;
`;

export const ButtonGroupWrapper = styled.div`
  /* margin-left: 10px; */
  /* > * {
    &:not(:first-child) {
      margin-left: 5px;
    }
  }; */
  /* > * {
    &:not(:last-child) {
      padding-right: 10px;
    }
  }; */
  height: 100%;
`;


export const ButtonCommandMenu = styled(Button)`
  height: 100%;
  outline: none;
  border: none;
  background-color: #ffffff;
  /* padding-right: 10px; */
  &:hover {
    background-color: #e1dfdd;
  }
  /* margin-right: 10px; */
  
`;