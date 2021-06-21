import React, { useState } from "react";
import * as S from "./styled";

const List = (props) => {
  const { data, marginTop, selectedListNameHandler } = props;

  const [selectedListItem, setSelectedListItem] = useState();

  const handleClick = (index, element) => {
    setSelectedListItem(index);
    if (selectedListNameHandler) {
      selectedListNameHandler(element.text);
    }
  };

  return (
    <S.ListWrapper marginTop={marginTop}>
      {data.map((element, index) => (
        <S.ListItem
          key={`el_${index}`}
          selected={selectedListItem === index ? true : false}
          onClick={() => handleClick(index, element)}
        >
          {element.icon && <S.ListItemIcon>{element.icon}</S.ListItemIcon>}
          <S.ListItemText>{element.text}</S.ListItemText>
        </S.ListItem>
      ))}
    </S.ListWrapper>
  );
};

export default List;
