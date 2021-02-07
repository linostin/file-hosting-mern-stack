import React from "react";
import FilesViewList from "./FilesViewList/FilesViewList";
import FilesViewGrid from "./FilesViewGrid/FilesViewGrid";

function FilesViewTypes({
  filesList,
  filesViewType,
  openFolderFunc,
  activeFolder,
  activeFolderHandler,
}) {
  if (filesViewType === "list") {
    return (
      <FilesViewList
        filesList={filesList}
        openFolderFunc={openFolderFunc}
        activeFolder={activeFolder}
        activeFolderHandler={activeFolderHandler}
      />
    );
  } else {
    return (
      <FilesViewGrid
        filesList={filesList}
        openFolderFunc={openFolderFunc}
        activeFolder={activeFolder}
        activeFolderHandler={activeFolderHandler}
      />
    );
  }
}

export default FilesViewTypes;
