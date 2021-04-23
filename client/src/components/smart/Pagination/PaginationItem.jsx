import React from "react";
import { PageButton } from "./styled";

const PaginationPageButton = (props) => {
  const {
    showNextButton,
    showPrevButton,
    showFirstButton,
    showLastButton,
    handleClickPrev,
    handleClickNext,
    handleClickPage,
    selectedPage,
    pageNumber,
    children,
    shape,
    variant,
    disabled,
    color,
    fontColor,
    activeColor,
    hoverColor,
  } = props;

  // TODO refactor this code

  if (!disabled) {
    switch (true) {
      case showPrevButton:
        return (
            <PageButton
              shape={shape}
              variant={variant}
              color={color}
              fontColor={fontColor}
              hoverColor={hoverColor}
              onClick={(event) => handleClickPrev(event)}
            >
              &laquo;
            </PageButton>
        );

      case showNextButton:
        return (
          <PageButton
            shape={shape}
            variant={variant}
            color={color}
            fontColor={fontColor}
            hoverColor={hoverColor}
            onClick={(event) => handleClickNext(event)}
          >
            &raquo;
          </PageButton>
        );

      case showFirstButton:
        return (
          <PageButton
            shape={shape}
            variant={variant}
            color={color}
            fontColor={fontColor}
            hoverColor={hoverColor}
            onClick={(event) => handleClickPrev(event)}
          >
            &laquo;&laquo;
          </PageButton>
        );

      case showLastButton:
        return (
          <PageButton
            shape={shape}
            variant={variant}
            color={color}
            fontColor={fontColor}
            hoverColor={hoverColor}
            onClick={(event) => handleClickNext(event)}
          >
            &raquo;&raquo;
          </PageButton>
        );

      case selectedPage:
        return (
          <PageButton
            shape={shape}
            variant={variant}
            activeColor={activeColor}
            fontColor={fontColor}
            hoverColor={hoverColor}
            selected
          >
            {children}
          </PageButton>
        );

      default:
        return (
          <PageButton
            shape={shape}
            variant={variant}
            color={color}
            fontColor={fontColor}
            hoverColor={hoverColor}
            onClick={(event) => handleClickPage(event, pageNumber)}
          >
            {children}
          </PageButton>
        );
    }
  }

  switch (true) {
    case showPrevButton:
      return (
        <PageButton shape={shape} variant={variant} fontColor={"#ACACAC"} disabled>
          &laquo;
        </PageButton>
      );

    case showNextButton:
      return (
        <PageButton shape={shape} variant={variant} fontColor={"#ACACAC"} disabled>
          &raquo;
        </PageButton>
      );

    case showFirstButton:
      return (
        <PageButton shape={shape} variant={variant} fontColor={"#ACACAC"} disabled>
          &laquo;&laquo;
        </PageButton>
      );

    case showLastButton:
      return (
        <PageButton shape={shape} variant={variant} fontColor={"#ACACAC"} disabled>
          &raquo;&raquo;
        </PageButton>
      );

    case selectedPage:
      return (
        <PageButton shape={shape} variant={variant} fontColor={"#ACACAC"} selected disabled>
          {children}
        </PageButton>
      );

    default:
      return (
        <PageButton shape={shape} variant={variant} fontColor={"#ACACAC"} disabled>
          {children}
        </PageButton>
      );
  }
};

export default PaginationPageButton;
