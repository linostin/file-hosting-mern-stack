import styled, { css } from "styled-components/macro";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

export const TableStyled = styled.table`
  /* border-collapse: separate; */
  table-layout: fixed;
  width: 100%;
  height: 100%;
  /* max-width: 100%; */
`;

// * Table Header Title
export const TableHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
width: 100%;
border: 1px solid #ddd;
padding: 20px 10px 20px 10px;
`;

// * Table Head

export const TableHead = styled.thead``;

export const TableHeadRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableHeadCell = styled.th`
  text-align: right; /* Left-align text */
  padding: 12px; /* Add padding */
  /* &.something {
    top: 0;
    left: 0;
    z-index: 2;
    position: sticky;
    background-color: #fff;
  } */
  ${({ stickyHeader }) =>
    stickyHeader &&
    css`
      top: 0;
      left: 0;
      z-index: 2;
      position: sticky;
      background-color: #fff;
      }
    `}
`;

export const TableHeadLabel = styled.span`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

// export const TableHeadLabelIcon = styled.div`
//   opacity: 0;
//   margin-right: 5px;
//   transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
//     transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
//   ${TableHeadLabel}:hover & {
//     opacity: 1;
//   } ;
// `;

export const TableHeadLabelText = styled.div`
  ${TableHeadLabel}:hover & {
    color: rgba(0, 0, 0, 0.54);
  } ;
`;

// * Table Body

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  width: 100%;
  min-height: 48px;
  background: ${(props) => props.selectedRow && "#eee"};
  &:nth-child(odd) {
    background: ${(props) => props.stripedRows && "#eee"};
  }

  ${({ hoverRow }) =>
    hoverRow &&
    css`
      &:hover {
        color: rgba(0, 0, 0, 0.87);
        background-color: rgb(238, 238, 238);
        transition-duration: 0.15s;
        transition-property: background-color;
        border-bottom-color: rgb(255, 255, 255);
        border-top-color: rgb(255, 255, 255);
        outline: rgb(255, 255, 255) solid 1px;
        cursor: ${(props) => props.pointerOnHover && "pointer"};
      }
    `}
`;

export const TableCell = styled.td`
  text-align: right; /* Left-align text */
  border-bottom: 1px solid rgba(224, 224, 224, 1);
`;
