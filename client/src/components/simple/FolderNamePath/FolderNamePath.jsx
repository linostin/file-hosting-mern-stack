import React from "react";
import * as S from "./styled";

import Breadcrumbs from "../Breadcrumbs";

const data = [
  { text: "Все файлы" },
  { text: "Недавно измененные" },
  { text: "Фото" },
  { text: "Расшаренные" },
  { text: "Корзина" },
];

const dataList = ["tes", "asfd", "af", "af", "asfasf"];

const FolderNamePath = () => {
  return (
    <S.FolderNamePathContainer>
      <Breadcrumbs data={dataList}/>
    </S.FolderNamePathContainer>
  );
};

export default FolderNamePath;
