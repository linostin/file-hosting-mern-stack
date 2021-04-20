import styled from "styled-components";

export const SortIconWrapper = styled.span`
  margin-left: 8px;
`;

export const SortIcons = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SortIconCaretUp = styled.span`
  color: ${(props) => props.activeSortIconColor ? "#1890ff" : "#bfbfbf"};
  margin-bottom: -.15em;
  font-size: 11px;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`;

export const SortIconCaretDown = styled.span`
  color: ${(props) => props.activeSortIconColor ? "#1890ff" : "#bfbfbf"};
  margin-bottom: -.15em;
  font-size: 11px;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`;
