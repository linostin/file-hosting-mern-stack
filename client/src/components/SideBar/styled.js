import styled, { css } from "styled-components/macro";

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.direction)};
  width: 300px;
  height: 100%;
  left: 0;
  z-index: 500;
  overflow-y: auto;
  overflow-x: hidden;
  background: #f3f2f1;
`;
