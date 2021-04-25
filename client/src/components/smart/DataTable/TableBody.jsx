import React from "react";
import * as S from "./styled";

import Checkbox from "../../ui/Checkbox";
import Radio from "../../ui/Radio";

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
  } = props;

  const getSelectionType = (selectionType) => {
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
      {filteredData.map((val, i) => (
        <S.TableRow
          key={`i_${i}`}
          stripedRows={stripedRows}
          selectedRow={selectedRow === i ? true : false}
          hoverRow={hoverRow}
          pointerOnHover={pointerOnHover}
          dense={dense}
          onClick={() => selectRow(val, i)}
        >
          <S.TableCell>{getSelectionType(selectionType)}</S.TableCell>
          {propertyNames.map((p) => (
            <S.TableCell key={`i_${i}_${p}`}>{val[p]}</S.TableCell>
          ))}
        </S.TableRow>
      ))}
    </S.TableBody>
  );
};

export default TableBody;
