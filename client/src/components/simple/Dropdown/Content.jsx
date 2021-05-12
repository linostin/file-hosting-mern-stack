
import React from "react";
import * as S from "./styled";
import { useClickOutsideListenerRef } from "./hook";

const Content = (props) => {
  const { onClose, children } = props;
  const ref = useClickOutsideListenerRef(onClose);
  return <S.Content ref={ref}>{children}</S.Content>;
};

export default Content;