import React from "react";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import Typography from "@material-ui/core/Typography";
import {
  FilesViewGridContainer,
  FilesViewGridElementWrapper,
  FilesViewGridFolderIcon,
  FilesViewGridDescription,
} from "../styled";

const FilesViewGrid = ({ filesList }) => {
  const activeHandler = () => {
    console.log("activeHandler");
  };

  return (
    <FilesViewGridContainer>
      {filesList.map((element, index) => {
        return (
          <FilesViewGridElementWrapper
            key={element._id}
            onClick={activeHandler}
          >
            <FilesViewGridFolderIcon>
              {element.type === "dir" ? (
                <FolderIcon
                  style={{ fontSize: 100, color: "rgba(0, 0, 0, 0.54)" }}
                />
              ) : (
                <InsertDriveFileIcon
                  style={{ fontSize: 100, color: "rgba(0, 0, 0, 0.54)" }}
                />
              )}
            </FilesViewGridFolderIcon>
            <FilesViewGridDescription>
              <Typography variant="subtitle2">{element.name}</Typography>
              <Typography variant="caption">
                {element.date.slice(0, 10)}
              </Typography>
            </FilesViewGridDescription>
          </FilesViewGridElementWrapper>
        );
      })}
    </FilesViewGridContainer>
  );
};

export default FilesViewGrid;
