import React from "react";
import * as S from "./styled";

import PhotoIcon from "@material-ui/icons/Photo";
// data for list
import { listData } from "../../data/testDataForList";
// componenst
import SideMenu from "../../components/DiskComponents/SideMenu";
import CommandMenu from "../../components/simple/CommandMenu";
import DataTable from "../../components/smart/DataTable/DataTable";
import GridView from "../../components/smart/GridView/GridView";
import { people, propertyNames } from "../../data/testDataForPagination";

const FilesPage = (props) => {
  const { gridOn } = props;

  return (
    <>
      <S.LeftSideNav>
        <SideMenu data={listData} />
      </S.LeftSideNav>
      <S.RightSideContent>
        <CommandMenu label="test button" startIcon={<PhotoIcon />} />
        {gridOn ? (
          <GridView />
        ) : (
          <DataTable
            people={people}
            propertyNames={propertyNames}
            selectionType="checkbox"
            // stripedRows
            hoverRow
            // stickyHeader
            pointerOnHover
            selectableRows
            // showHeader
            // title="Table Title"
            dense
          />
        )}
      </S.RightSideContent>
    </>
  );
};

export default FilesPage;
