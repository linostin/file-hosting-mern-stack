import React from "react";
import * as S from "./styled";

import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";

import CheckboxNew from '../../ui/Checkbox'

const GridView = (props) => {
  const {
    data,
    activeFolder,
    activeFolderHandler,
    openFolderHandler,
  } = props;

  if (data.length === 0) {
    return (
      <S.GridViewError>
        <Typography>Файлы не найдены</Typography>
      </S.GridViewError>
    );
  }

  return (
    <S.GridViewContainer>
      {data.map((element, index) => {
        return (
          <S.GridViewGridElementWrapper
            key={element._id}
            onClick={() => activeFolderHandler(element._id)}
            active={element._id === activeFolder ? true : false}
          >
            <S.GridViewCheckbox
              active={element._id === activeFolder ? true : false}
            >
              {/* <Checkbox
                size="small"
                onClick={() => activeFolderHandler(element._id)}
                checked={element._id === activeFolder ? true : false}
              /> */}
              <CheckboxNew/>
            </S.GridViewCheckbox>
            <S.GridViewGridFolderIcon
              onClick={(event) =>
                openFolderHandler(event, element._id, element.type, element.name)
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
            </S.GridViewGridFolderIcon>
            <S.GridViewGridDescription>
              <Typography
                variant="subtitle2"
                noWrap
                style={{ maxWidth: "170px" }}
              >
                {element.name}{" "}
              </Typography>
              <Typography variant="caption">
                {element.date.slice(0, 10)}
              </Typography>
            </S.GridViewGridDescription>
          </S.GridViewGridElementWrapper>
        );
      })}
    </S.GridViewContainer>
  );
};

export default GridView;
