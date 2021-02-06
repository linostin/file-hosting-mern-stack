import React from 'react'
import FilesViewList from "./FilesViewList/FilesViewList"
import FilesViewGrid from "./FilesViewGrid/FilesViewGrid"

function FilesViewTypes({ filesList, filesViewType, openFolderFunc }) {
  if (filesViewType === 'list') {
   return <FilesViewList filesList={filesList}/>
  } else {
    return <FilesViewGrid filesList={filesList} openFolderFunc={openFolderFunc}/>
  }
 
}

export default FilesViewTypes
