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

import FilesPage from './Files'

const FilesLogic = () => {

  const dispatch = useDispatch();

  const [sort, setSort] = useState("type");

  const currentDir = useSelector((state) => state.files.currentDir);
  const filesList = useSelector((state) => state.files.files);
  const dirStack = useSelector((state) => state.files.dirStack);
  const loader = useSelector((state) => state.app.loader);  

  useEffect(() => {
    dispatch(getFiles(currentDir, sort));
  }, [currentDir, sort]);

  console.log(filesList)
  console.log(currentDir)
  console.log(loader)

  return (
    <FilesPage loader={loader} data={filesList}/>
  )
}

export default FilesLogic
