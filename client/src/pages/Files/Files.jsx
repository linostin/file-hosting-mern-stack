import React, { useEffect, useState } from "react";
import * as S from "./styled";

import PhotoIcon from "@material-ui/icons/Photo";
// data for list
import { listData } from "../../data/testDataForList";
// componenst
import SideMenu from "../../components/DiskComponents/SideMenu";
import CommandMenu from "../../components/simple/CommandMenu";
import FolderNamePath from "../../components/simple/FolderNamePath";
// import Toolbar from '../../components/simple/Toolbar'
import DataTable from "../../components/smart/DataTable/DataTable";
import GridView from "../../components/smart/GridView/GridView";
import Loader from "../../components/simple/Loader";
import DialogForm from '../../components/simple/DialogForm'
import { people, propertyNames } from "../../data/testDataForPagination";

const FilesPage = (props) => {
  const {
    loader,
    data,
    isModal,
    viewType,
    itemsSelected,
    modalHandler,
    activeFolder,
    openFolder,
    activeFolderHandler,
    openFolderHandler,
    createFolderHandler,
    goBackFolderHandler,
    fileUploadHandler,
    fileDownloadHandler,
    fileDeleteHandler,
    itemsSelectHandler,
    viewTypeHandler,
  } = props;

  let gridOn = true;

  // let loading = loader;
  let loading = loader;

  return (
    <>
      <S.LeftSideNav>
        <SideMenu data={listData} />
      </S.LeftSideNav>
      {loading ? (
        <S.RightSideLoader>
          <Loader />
        </S.RightSideLoader>
      ) : (
        <S.RightSideContent>
          <CommandMenu
            label="test button"
            startIcon={<PhotoIcon />}
            modalHandler={modalHandler}
            goBackFolderHandler={goBackFolderHandler}
          />
          <FolderNamePath></FolderNamePath>
          {gridOn ? (
            <GridView
              data={data}
              activeFolder={activeFolder}
              activeFolderHandler={activeFolderHandler}
              openFolderHandler={openFolderHandler}
            />
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
      )}

      <DialogForm
        isModal={isModal}
        title="Modal Title"
        footer={<button>Cancel</button>}
        modalHandler={modalHandler}
        createFolderHandler={createFolderHandler}
      />
    </>
  );
};

export default FilesPage;
