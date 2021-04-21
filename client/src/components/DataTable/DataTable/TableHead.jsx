import React from "react";
import {
  TableHeadRow,
  TableHeadCell,
  TableHeadLabel,
  TableHeadLabelIcon,
  TableHeadLabelText,
} from "./styled";
import * as S from "./styled";
import { SortIcon } from "../../SortIcon/SortIcon";

const TableHead = (props) => {
  const { propertyNames, handleClickSort, sortData, selectionType, stickyHeader } = props;

  const onClick = (element) => {
    sortData(element);
    handleClickSort();
  };

  console.log(stickyHeader)
  // className={stickyHeader ? "something" : null}

  return (
    <S.TableHead>
      <TableHeadRow>
        <TableHeadCell stickyHeader={stickyHeader}>
          {selectionType === "checkbox" ? (
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          ) : null}
        </TableHeadCell>
        {propertyNames.map((element) => (
          <TableHeadCell key={`h_${element}`} stickyHeader={stickyHeader}>
            <TableHeadLabel onClick={() => handleClickSort(element)}>
              <TableHeadLabelText>{element}</TableHeadLabelText>
              <SortIcon />
            </TableHeadLabel>
          </TableHeadCell>
        ))}
      </TableHeadRow>
    </S.TableHead>
  );
};

export default TableHead;
