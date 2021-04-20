import React, { useState, useEffect } from "react";
import TableHeader from './TableHeader'
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "../simple/Pagination";
import { TableContainer, TableStyled } from "./styled";
import { arrayOfObjectsSort } from "./utils";
import SearchInput from "../elements/SearchInput/SearchInput";
import Toolbar from "../simple/Toolbar";
import Loader from "../elements/Loader";
import * as S from "./styled";

const DataTable = (props) => {
  const {
    people,
    propertyNames,
    selectionType,
    stripedRows,
    hoverRow,
    stickyHeader,
    pointerOnHover,
    selectableRows,
    title,
    showHeader,
    dense,
  } = props;

  const [tableData, setTableData] = useState([]);
  const [sortDirection, setSortDirection] = useState(null);
  const [sortValue, setSortValue] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let filteredData = people.map((v) =>
      Object.keys(v)
        .filter((k) => propertyNames.includes(k))
        .reduce((acc, key) => ((acc[key] = v[key]), acc), {})
    );
    setTableData(filteredData);
  }, []);

  console.log("tableData", tableData);

  const testChangePage = () => {
    console.log("testChangePage");
  };

  const handleClickSort = () => {
    console.log("SORT");
    let sortedArray = arrayOfObjectsSort(tableData, "name", "desc");
    setTableData(sortedArray);
  };

  const sortData = (value) => {
    setSortValue(value);
    sortDirection === null ? setSortDirection("asc") : setSortDirection("desc");
  };

  // * Table Rows
  // ? naming

  const selectRow = (val, i) => {
    console.log("selected row", val, i);
    setSelectedRow(i);
  };

  // * Table

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <TableContainer>
          {showHeader && <TableHeader title={title}/>}
          <Toolbar stickyHeader={stickyHeader}>
            
            <SearchInput />
            
          </Toolbar>
          <TableStyled>
            {/* <TableCaption /> */}
            <TableHead
              propertyNames={propertyNames}
              handleClickSort={handleClickSort}
              sortData={sortData}
              selectionType={selectionType}
              stickyHeader
            />
            <TableBody
              filteredData={tableData}
              propertyNames={propertyNames}
              selectionType={selectionType}
              stripedRows={stripedRows}
              hoverRow={hoverRow}
              pointerOnHover={pointerOnHover}
              selectRow={selectRow}
              selectedRow={selectedRow}
              selectableRows={selectableRows}
              dense={dense}
            />
          </TableStyled>
        </TableContainer>
      )}
    </>
  );
};

export default DataTable;

{
  /* <Pagination
          totalPages={10}
          // defaultPage={6}
          currentPage={6}
          pageNeighbours={2}
          onPageChanged={testChangePage}
          showPrevButton
          showNextButton
          showFirstButton
          showLastButton
          shape="round"
          // variant='outlined'
          // disabled
        /> */
}
