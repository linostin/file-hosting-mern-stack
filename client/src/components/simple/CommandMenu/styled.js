import styled, { css } from "styled-components/macro";
import Button from "../../ui/Button";

export const CommandMenuContainer = styled.div``;

export const ButtonGroupWrapper = styled.div`
  /* margin-left: 10px; */
  /* > * {
    &:not(:first-child) {
      margin-left: 5px;
    }
  }; */
  height: 100%;
`;


export const ButtonCommandMenu = styled(Button)`
  height: 100%;
  outline: none;
  border: none;
`;