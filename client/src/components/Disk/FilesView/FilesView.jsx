import React from 'react'
import FilesViewList from "./FilesViewList/FilesViewList"
import FilesViewGrid from "./FilesViewGrid/FilesViewGrid"

function FilesViewTypes({ filesList, filesViewType }) {
  if (filesViewType === 'list') {
   return <FilesViewList filesList={filesList}/>
  } else {
    return <FilesViewGrid filesList={filesList}/>
  }
 
}

export default FilesViewTypes
