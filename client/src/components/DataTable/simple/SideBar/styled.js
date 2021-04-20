import styled, { css } from "styled-components/macro";

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  left: 0;
  z-index: 500;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: red;
`;
