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
import Popup from "./Popup/Popup";
import Uploader from "./Uploader/Uploader";
import MenuTop from "../MenuTop/MenuTop";
import FilesView from "./FilesView/FilesView";
import Button from '@material-ui/core/Button';
import CardMessage from "./Uploader/CardMessage"

import "./Styles/style.css";

function Disk() {
  const dispatch = useDispatch();

  const [selectedFiles, setSelectedFiles] = useState();
  const [checkboxSelectedFiles, setCheckboxSelectedFiles] = useState([]);
  const [openMenuTop, setOpenMenuTop] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [dragDropEnter, setDragDropEnter] = useState(false);
  const [filesViewType, setFilesViewType] = useState("list");
  const [openFolder, setOpenFolder] = useState(false);
  const [activeFolder, setActiveFolder] = useState(false);
  const [uploader, setUploader] = useState(false);

  // const isAuth = useSelector((state) => state.user.isAuth);
  const currentDir = useSelector((state) => state.files.currentDir);
  const filesList = useSelector((state) => state.files.files);
  const dirStack = useSelector((state) => state.files.dirStack);

  console.log("fileList", filesList);
  // console.log("currentDir", currentDir);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  const uploaderHandleClick = () => {
    setUploader(!uploader)
  }

  const popupOpenFunc = () => {
    setPopupOpen(true);
  };

  const popupCloseFunc = () => {
    setPopupOpen(false);
  };

  const openFolderFunc = (event, id, type) => {
    console.log(id, type);
    event.stopPropagation();
    if (type === "dir") {
      dispatch(pushToStack(currentDir));
      dispatch(setCurrentDir(id));
      setOpenFolder(true);
      setActiveFolder(false)
    }
  };

  const backFolderFunc = () => {
    const backDirId = dirStack.pop();
    dispatch(setCurrentDir(backDirId));
    setOpenFolder(false);
  };

  const createDirHandler = (dirName) => {
    dispatch(createDir(currentDir, dirName));
  };

  const fileUploadFunc = (inputFiles) => {
    const files = [...inputFiles];
    files.forEach((file) => dispatch(uploadFile(file, currentDir)));
  };

  const dragEnterHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragDropEnter(true);
  };

  const dragLeaveHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragDropEnter(false);
  };

  const dropHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let files = [...event.dataTransfer.files];
    files.forEach((file) => dispatch(uploadFile(file, currentDir)));
    setDragDropEnter(false);
  };

  const downloadLoadClickHandler = (event) => {
    event.stopPropagation();
    console.log(selectedFiles)
    dispatch(downloadFile(selectedFiles));
  };

  const deleteFileClickHandler = (event) => {
    event.stopPropagation();
    dispatch(deleteFile(selectedFiles));
  };

  const menuTopHandler = (status) => {
    setOpenMenuTop(status);
  };

  const checkboxSelectedFilesHandler = (selected) => {
    setCheckboxSelectedFiles(selected);
  };

  const selectedFilesHandler = (file) => {
    setSelectedFiles(file);
  };

  const filesViewTypeHandler = (viewType) => {
    setFilesViewType(viewType);
  };

  const activeFolderHandler = (id) => {
    if (activeFolder === id) {
      setActiveFolder(false);
    } else {
      setActiveFolder(id);
    }
  };

  return (
    <div
      className="disk"
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragEnterHandler}
    >
      <MenuTop
        checkboxSelectedFiles={checkboxSelectedFiles.length}
        checkboxSelectedFilesHandler={checkboxSelectedFilesHandler}
        selectedFilesHandler={selectedFilesHandler}
        openMenuTop={openMenuTop}
        backFolderFunc={backFolderFunc}
        popupOpenFunc={popupOpenFunc}
        fileUploadFunc={fileUploadFunc}
        downloadLoadClickHandler={downloadLoadClickHandler}
        deleteFileClickHandler={deleteFileClickHandler}
        filesViewTypeHandler={filesViewTypeHandler}
        filesViewType={filesViewType}
        openFolder={openFolder}
        activeFolder={activeFolder}
      />
      <Button variant="contained" onClick={uploaderHandleClick}>Default</Button>
      <FilesView
        filesList={filesList}
        filesViewType={filesViewType}
        openFolderFunc={openFolderFunc}
        activeFolder={activeFolder}
        activeFolderHandler={activeFolderHandler}
        selectedFilesHandler={selectedFilesHandler}
      />

      <Popup
        popupOpen={popupOpen}
        popupCloseFunc={popupCloseFunc}
        createDirHandler={createDirHandler}
      />
      <CardMessage/>
      {/* <Uploader /> */}
    </div>
  );

  // return ( !dragDropEnter ?
  //   <div className="disk" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
  //     <div className="disk__btns">
  //       <button className="disk__back" onClick={backFolderFunc}>Назад</button>
  //       <button className="disk__create" onClick={() => popupOpenFunc()}>
  //         Создать папку
  //       </button>
  //       <button className="disk__create" onClick={() => popupOpenFunc()}>
  //         Тест popup
  //       </button>
  //       <UploadButton fileUploadFunc={fileUploadFunc}/>
  //     </div>
  //     {/* <FileList filesList={filesList} openFolderFunc={openFolderFunc} downloadLoadClickHandler={downloadLoadClickHandler} deleteFileClickHandler={deleteFileClickHandler}/> */}
  //     <Popup
  //       popupOpen={popupOpen}
  //       popupCloseFunc={popupCloseFunc}
  //       createDirHandler={createDirHandler}
  //     />
  //     <Uploader/>
  //   </div>
  //   :
  //   <div className="drag__and__drop" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
  //     Перетащите файлы сюда
  //   </div>
  // );
}

export default Disk;
