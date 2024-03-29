import React from "react";
import * as S from "./styled";

import Checkbox from "../../ui/Checkbox";
import Radio from "../../ui/Radio";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

const TableBody = (props) => {
  const {
    filteredData,
    propertyNames,
    stripedRows,
    selectionType,
    selectRow,
    selectedRow,
    hoverRow,
    pointerOnHover,
    selectableRows,
    dense,
    openFolderHandler,
    itemsSelectHandler,
  } = props;

  const checkboxOnClickHandler = (event, id) => {
    event.stopPropagation();
    itemsSelectHandler(id);
  };

  const tableCellTextonClickHandler = (event, id, type, name) => {
    // event.stopPropagation();
    openFolderHandler(event, id, type, name);
  };

  const getSelectionType = (selectionType, i) => {
    if (selectionType) {
      if (selectionType === "checkbox") {
        return <Checkbox />;
      } else if (selectionType === "radio") {
        return <Radio />;
      }
    }
    return null;
  };

  return (
    <S.TableBody>
      {filteredData.map((element, i) => (
        <S.TableRow
          key={`i_${i}`}
          stripedRows={stripedRows}
          selectedRow={selectedRow === i ? true : false}
          hoverRow={hoverRow}
          pointerOnHover={pointerOnHover}
          dense={dense}
          onClick={(event) => selectRow(event, element, i)}
        >
          <S.TableCell
            onClick={(event) => checkboxOnClickHandler(event, i)}
            align="left"
          >
            {getSelectionType(selectionType, i)}
          </S.TableCell>
          {propertyNames.map((property) => (
            <S.TableCell key={`i_${i}_${property}`}>
              {element[property] === element.type ? (
                element[property] === "dir" ? (
                  <FolderIcon
                    style={{ fontSize: 25, color: "rgba(0, 0, 0, 0.54)" }}
                  />
                ) : (
                  <InsertDriveFileIcon
                    style={{ fontSize: 25, color: "rgba(0, 0, 0, 0.54)" }}
                  />
                )
              ) : property === "name" ? (
                <S.TableCellTextLink
                  onClick={(event) =>
                    tableCellTextonClickHandler(
                      event,
                      element._id,
                      element.type,
                      element.name
                    )
                  }
                >
                  {element[property]}
                </S.TableCellTextLink>
              ) : (
                element[property]
              )}
            </S.TableCell>
          ))}
        </S.TableRow>
      ))}
    </S.TableBody>
  );
};

export default TableBody;
