import styled, { css } from "styled-components/macro";

export const DropdownContainer = styled.div`
  float: right;
  overflow: hidden;
`;

export const Content = styled.div`
  display: ${(props) => (props.showDropdown ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
