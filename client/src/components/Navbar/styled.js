import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* justify-content: ${(props) =>
    props.flexEnd ? "flex-end" : "space-between"}; */
  align-items: center;
  width: 100%;
`;
export const NavbarElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavbarSearchField = styled.div``;

