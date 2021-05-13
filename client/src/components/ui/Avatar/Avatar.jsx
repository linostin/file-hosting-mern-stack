import React from "react";
import * as S from "./styled";

const Avatar = (props) => {
  const { children, src, alt, ...other } = props;

  let children1 = null;

  if (!src) {
    children1 = (
      <S.Img
        // alt={alt}
        src="https://material-ui.com/static/images/avatar/1.jpg"
        // src={src}
        // srcSet={srcSet}
        // sizes={sizes}
      />
    );
  }

  return (
    <S.AvatarContainer>
      {children1}
    </S.AvatarContainer>
  );
};

export default Avatar;
