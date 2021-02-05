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
import FileList from "./FileList/FileList";
import Popup from "./Popup/Popup";
import UploadButton from "./UploadButton/UploadButton";
import Uploader from "./Uploader/Uploader";
import MenuTop from '../MenuTop/MenuTop'

import "./Styles/style.css";

function Disk() {
  const dispatch = useDispatch();

  const [checkboxSelectedFiles, setCheckboxSelectedFiles] = useState([])
  const [openMenuTop, setOpenMenuTop] =useState(false)
  const [popupOpen, setPopupOpen] = useState(false);
  const [dragDropEnter, setDragDropEnter] = useState(false);

  // const isAuth = useSelector((state) => state.user.isAuth);
  const currentDir = useSelector((state) => state.files.currentDir);
  const filesList = useSelector((state) => state.files.files);
  const dirStack = useSelector((state) => state.files.dirStack);

  console.log("fileList", filesList);
  // console.log("currentDir", currentDir);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  const popupOpenFunc = () => {
    setPopupOpen(true);
  };

  const popupCloseFunc = () => {
    setPopupOpen(false);
  };

  const openFolderFunc = (dirName, id, type) => {
    if (type === "dir") {
      dispatch(pushToStack(currentDir));
      dispatch(setCurrentDir(id));
    }
  };

  const backFolderFunc = () => {
    const backDirId = dirStack.pop();
    dispatch(setCurrentDir(backDirId));
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

  const downloadLoadClickHandler = (event, file) => {
    event.stopPropagation();
    dispatch(downloadFile(file));
  };

  const deleteFileClickHandler = (event, file) => {
    event.stopPropagation();
    dispatch(deleteFile(file));
  };

  const menuTopHandler = (status) => {
    setOpenMenuTop(status)
  }

  const checkboxSelectedFilesHandler = (selected) => {
    setCheckboxSelectedFiles(selected)
  }

  return (
    <div
      className="disk"
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragEnterHandler}
    >
      <MenuTop checkboxSelectedFiles={checkboxSelectedFiles.length} checkboxSelectedFilesHandler={checkboxSelectedFilesHandler} openMenuTop={openMenuTop} backFolderFunc={backFolderFunc} popupOpenFunc={popupOpenFunc} fileUploadFunc={fileUploadFunc}/>
      <div className="disk__btns">
        <button className="disk__back" onClick={backFolderFunc}>
          Назад
        </button>
        <button className="disk__create" onClick={() => popupOpenFunc()}>
          Создать папку
        </button>
        <button className="disk__create" onClick={() => popupOpenFunc()}>
          Тест popup
        </button>
        <UploadButton fileUploadFunc={fileUploadFunc} />
      </div>
      <FileList filesList={filesList} checkboxSelectedFilesHandler={checkboxSelectedFilesHandler} menuTopHandler={menuTopHandler} openFolderFunc={openFolderFunc} downloadLoadClickHandler={downloadLoadClickHandler} deleteFileClickHandler={deleteFileClickHandler}/>
      <Popup
        popupOpen={popupOpen}
        popupCloseFunc={popupCloseFunc}
        createDirHandler={createDirHandler}
      />
      <Uploader />
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
