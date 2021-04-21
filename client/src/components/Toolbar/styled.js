import styled, { css } from "styled-components/macro";

export const ToolbarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.direction)};
  align-items: center;
  border: 1px solid #ddd;
  padding: 20px 10px 20px 10px;
`;

export const ToolbarMenu = styled.div`
  display: flex;
  align-items: center;
`;
