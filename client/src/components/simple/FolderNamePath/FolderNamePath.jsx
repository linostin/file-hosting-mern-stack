import React from "react";
import * as S from "./styled";

import Breadcrumbs from "../Breadcrumbs";

const FolderNamePath = (props) => {

  const { data } = props;

  return (
    <S.FolderNamePathContainer>
      <Breadcrumbs pinnedFirstItem="Home" data={data}/>
    </S.FolderNamePathContainer>
  );
};

export default FolderNamePath;
