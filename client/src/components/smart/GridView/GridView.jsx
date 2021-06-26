import React, { useState, useEffect } from "react";
import * as S from "./styled";

import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";

import CheckboxNew from "../../ui/Checkbox";

const GridView = (props) => {
  const {
    data,
    activeFolder,
    activeFolderHandler,
    openFolderHandler,
    itemsSelectHandler,
    itemsSelected,
    itemsSelectResetHandler,
  } = props;

  // 3 way onClick
  // first: click on Checkbox => select folder, add element._id to itemsSelected
  // second: click on ElementWrapper => select folder
  // third: click on FolderIcon => open folder? set activeFolder

  const [gridSelectedItems, setGridSelectedItems] = useState([]);

  useEffect(() => {
    setGridSelectedItems([...itemsSelected]);
  }, [itemsSelected]);

  const checkboxOnClickHandler = (event, id) => {
    event.stopPropagation();
    itemsSelectHandler(id);
  };

  const elementWrapperOnClickHandler = (id) => {
    debugger;
    if (itemsSelected.length > 0) {
      itemsSelectResetHandler();
    }

    if (!gridSelectedItems.includes(id)) {
      setGridSelectedItems([id]);
    } else {
      setGridSelectedItems([]);
    }
  };

  const folderIconOnClickHandler = (event, id, type, name) => {
    event.stopPropagation();
    openFolderHandler(event, id, type, name);
  };

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
            onClick={() => elementWrapperOnClickHandler(element._id)}
            active={gridSelectedItems.includes(element._id)}
          >
            <S.GridViewCheckbox
              onClick={(event) => checkboxOnClickHandler(event, element._id)}
              checked={gridSelectedItems.includes(element._id)}
            >
              {/* <Checkbox
                size="small"
                onClick={() => activeFolderHandler(element._id)}
                checked={element._id === activeFolder ? true : false}
              /> */}
              <CheckboxNew checked={gridSelectedItems.includes(element._id)} />
            </S.GridViewCheckbox>
            <S.GridViewGridFolderIcon
              onClick={(event) =>
                folderIconOnClickHandler(
                  event,
                  element._id,
                  element.type,
                  element.name
                )
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
