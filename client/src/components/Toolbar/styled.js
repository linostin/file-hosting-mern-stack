import styled, { css } from "styled-components/macro";

export const ToolbarWrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.height || "50px")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

