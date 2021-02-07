import React, { useState } from "react";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import {
  FilesViewGridContainer,
  FilesViewGridElementWrapper,
  FilesViewGridFolderIcon,
  FilesViewGridDescription,
  FilesViewCheckbox,
} from "../styled";

const FilesViewGrid = ({
  filesList,
  openFolderFunc,
  activeFolder,
  activeFolderHandler,
}) => {
  const activeHandler = (event, id) => {
    activeFolderHandler(id);
  };

  return (
    <FilesViewGridContainer>
      {filesList.map((element, index) => {
        return (
          <FilesViewGridElementWrapper
            key={element._id}
            onClick={(event) => activeHandler(event, element._id)}
            active={element._id === activeFolder ? true : false}
          >
            <FilesViewCheckbox
              active={element._id === activeFolder ? true : false}
            >
              <Checkbox
                size="small"
                onClick={(event) => activeHandler(event, element._id)}
                checked={element._id === activeFolder ? true : false}
              />
            </FilesViewCheckbox>
            <FilesViewGridFolderIcon
              onClick={(event) =>
                openFolderFunc(event, element._id, element.type)
              }
            >
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
              <Typography variant="subtitle2" noWrap style={{ maxWidth: "170px" }}>
                {element.name}{" "}
              </Typography>
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
