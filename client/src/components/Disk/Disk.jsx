import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFiles, createDir } from "../../actions/file";
import FileList from "./FileList/FileList";
import Popup from "./Popup/Popup";

function Disk() {
  const dispatch = useDispatch();

  const [popupOpen, setPopupOpen] = useState(false);

  const popupOpenFunc = () => {
    setPopupOpen(true);
  };

  const popupCloseFunc = () => {
    setPopupOpen(false);
  };

  const currentDir = useSelector((state) => state.files.currentDir);
  // console.log("currentDir", currentDir);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  const createDirHandler = (dirName) => {
    dispatch(createDir(currentDir, dirName));
  };

  return (
    <div className="disk">
      <div className="disk__btns">
        <button className="disk__back">Назад</button>
        <button className="disk__create" onClick={() => popupOpenFunc()}>
          Создать папку
        </button>
        <button className="disk__create" onClick={() => popupOpenFunc()}>
          Тест popup
        </button>
      </div>
      <FileList />
      <Popup
        popupOpen={popupOpen}
        popupCloseFunc={popupCloseFunc}
        createDirHandler={createDirHandler}
      />
    </div>
  );
}

export default Disk;
