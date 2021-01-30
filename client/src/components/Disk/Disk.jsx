import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFiles, createDir } from "../../actions/file";
import { setCurrentDir, pushToStack } from '../../reducers/fileReducer'
import FileList from "./FileList/FileList";
import Popup from "./Popup/Popup";

function Disk() {
  const dispatch = useDispatch();

  const [popupOpen, setPopupOpen] = useState(false);
  
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
    if (type === 'dir') {
      dispatch(pushToStack(currentDir))
      dispatch(setCurrentDir(id))
    }
  };

  const backFolderFunc = () => {
    const backDirId = dirStack.pop()
    dispatch(setCurrentDir(backDirId))
  }

  const createDirHandler = (dirName) => {
    dispatch(createDir(currentDir, dirName));
  };

  return (
    <div className="disk">
      <div className="disk__btns">
        <button className="disk__back" onClick={backFolderFunc}>Назад</button>
        <button className="disk__create" onClick={() => popupOpenFunc()}>
          Создать папку
        </button>
        <button className="disk__create" onClick={() => popupOpenFunc()}>
          Тест popup
        </button>
      </div>
      <FileList filesList={filesList} openFolderFunc={openFolderFunc} />
      <Popup
        popupOpen={popupOpen}
        popupCloseFunc={popupCloseFunc}
        createDirHandler={createDirHandler}
      />
    </div>
  );
}

export default Disk;
