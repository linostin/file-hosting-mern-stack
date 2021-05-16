import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getFiles,
  createDir,
  uploadFile,
  downloadFile,
  deleteFile,
} from "../../actions/file";
import { setCurrentDir, pushToStack } from "../../reducers/fileReducer";

// import components
import FilesPage from "./Files";

const FilesLogic = () => {
  const dispatch = useDispatch();

  const [viewType, setViewType] = useState();
  const [sort, setSort] = useState("type");
  const [itemsSelected, setItemsSelected] = useState();
  const [activeFolder, setActiveFolder] = useState();
  const [openFolder, setOpenFolder] = useState();
  const [isModal, setModal] = React.useState(false);
  // test 
  const [folderNamePath, setFolderNamePath] = useState([]);

  // selectors
  const currentDir = useSelector((state) => state.files.currentDir);
  const filesList = useSelector((state) => state.files.files);
  const dirStack = useSelector((state) => state.files.dirStack);
  const loader = useSelector((state) => state.app.loader);
  console.log("dirStack", dirStack)

  useEffect(() => {
    dispatch(getFiles(currentDir, sort));
  }, [currentDir, sort]);

  // console.log(filesList);
  // console.log(currentDir);
  // console.log(loader);

  // handlers

  const modalHandler = (value) => {
    console.log("Modal Func");
    setModal(value);
  }


  const activeFolderHandler = (id) => {
    console.log("Active Folder Func");
    if (activeFolder === id) {
      setActiveFolder(false);
    } else {
      setActiveFolder(id);
    }
  };

  const openFolderHandler = (event, id, type, name) => {
    console.log("Open Folder Func");
    console.log(`id: ${id}`, `type: ${type}`);
    event.stopPropagation();
    if (type === "dir") {
      dispatch(pushToStack(currentDir));
      dispatch(setCurrentDir(id));
      setOpenFolder(true);
      setActiveFolder(false);
      setFolderNamePath(name)
      console.log("folderNamePath", folderNamePath)
    }
  };

  const createFolderHandler = (dirName) => {
    console.log("Create Folder Func");
    dispatch(createDir(currentDir, dirName));
  };

  const goBackFolderHandler = () => {
    console.log("Go Back Folder Func");
    const backDirId = dirStack.pop();
    dispatch(setCurrentDir(backDirId));
    setOpenFolder(false);
  };

  const fileUploadHandler = () => {
    console.log("File Upload Func");
  };

  const fileDownloadHandler = () => {
    console.log("File Download Func");
  };

  const fileDeleteHandler = () => {
    console.log("File Delete Func");
  };

  const itemsSelectHandler = () => {
    console.log("Items Select Func");
  };

  const viewTypeHandler = () => {
    console.log("Files View");
  };

  return (
    <FilesPage
      loader={loader}
      data={filesList}
      isModal={isModal}
      viewType={viewType}
      itemsSelected={itemsSelected}
      activeFolder={activeFolder}
      openFolder={openFolder}
      modalHandler={modalHandler}
      activeFolderHandler={activeFolderHandler}
      openFolderHandler={openFolderHandler}
      createFolderHandler={createFolderHandler}
      goBackFolderHandler={goBackFolderHandler}
      fileUploadHandler={fileUploadHandler}
      fileDownloadHandler={fileDownloadHandler}
      fileDeleteHandler={fileDeleteHandler}
      itemsSelectHandler={itemsSelectHandler}
      viewTypeHandler={viewTypeHandler}
    />
  );
};

export default FilesLogic;
