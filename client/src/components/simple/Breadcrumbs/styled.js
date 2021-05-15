import styled, { css } from "styled-components/macro";

export const BreadcrumbsContainer = styled.div``;

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
`;

export const ListItem = styled.li`
  /* text-overflow: ellipsis;
  overflow: hidden; */
  &:last-child {
    background-color: greenyellow;
  };
  padding-right: 8px;
  padding-left: 8px;
  &:not(:last-child) {
    &:after {
      padding-left: 16px;
      content: "›";
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
`;

export const ListIcon = styled.span`
`;
