import styled from 'styled-components/macro';

export const SearchInputWrapper = styled.div``;

export const SearchInput = styled.input`
  outline: none;
  background: #ededed
    url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat
    9px center;
  border: solid 1px #ccc;
  padding: 9px 10px 9px 32px;
  width: 42px;
  transition: all 0.5s;
  &:hover {
    background-color: #fff;
  }
  &:focus {
    width: 130px;
    padding-left: 32px;
    color: #000;
    background-color: #fff;
    cursor: auto;
  }
`;