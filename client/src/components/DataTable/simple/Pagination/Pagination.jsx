import React, { useEffect, useState } from "react";
import PaginationItem from "./PaginationItem";
import { Container, Wrapper, PageItemElem } from "./styled";

const Pagination = (props) => {
  const {
    totalPages,
    defaultPage,
    pageNeighbours,
    showNextButton,
    showPrevButton,
    showFirstButton,
    showLastButton,
    onPageChanged,
    currentPage,
    shape,
    disabled,
    color,
    fontColor,
    activeColor,
    hoverColor,
    size,
    variant,
  } = props;

  const [selectedPage, setSelectedPage] = useState(
    defaultPage || currentPage || 1
  );

  useEffect(() => {
    setSelectedPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    onPageChanged();
  }, [selectedPage, onPageChanged]);

  // pageNeighbours can be: 0, 1 or 2
  const pageNeighboursNumber = pageNeighbours
    ? Math.max(0, Math.min(pageNeighbours, 2))
    : 0;

  // total page numbers to show
  const totalVisiblePageNumbers = pageNeighboursNumber * 2 + 3;
  // totalVisiblePageNumbers + 2 to cover for the left(...) and right(...) item elements
  const totalPaginationItemElements = totalVisiblePageNumbers + 2;
  const LEFT_HIDDEN_PAGES = "...";
  const RIGHT_HIDDEN_PAGES = "...";

  const getVisiblePageNumbersRange = (startPage, endPage, step = 1) => {
    const range = [];
    let i = startPage;
    while (i <= endPage) {
      range.push(i);
      i += step;
    }
    return range;
  };

  const getPaginationItemElements = () => {
    if (totalPages > totalPaginationItemElements) {
      const startPage = Math.max(2, selectedPage - pageNeighboursNumber);
      const endPage = Math.min(
        totalPages - 1,
        selectedPage + pageNeighboursNumber
      );
      let pages = getVisiblePageNumbersRange(startPage, endPage);

      // hidden pages on left and right (...)
      const hasHiddenPageNumbersOnLeft = startPage > 2;
      const hasHiddenPageNumbersOnRight = totalPages - endPage > 1;
      const totalHiddenPageNumbers =
        totalVisiblePageNumbers - (pages.length + 1);

      switch (true) {
        // < (1) ... {5 6} [7] {8 9} (10) >
        case hasHiddenPageNumbersOnLeft && !hasHiddenPageNumbersOnRight: {
          const extraPages = getVisiblePageNumbersRange(
            startPage - totalHiddenPageNumbers,
            startPage - 1
          );
          pages = [LEFT_HIDDEN_PAGES, ...extraPages, ...pages];
          break;
        }

        // < (1) {2 3} [4] {5 6} ... (10) >
        case !hasHiddenPageNumbersOnLeft && hasHiddenPageNumbersOnRight: {
          const extraPages = getVisiblePageNumbersRange(
            endPage + 1,
            endPage + totalHiddenPageNumbers
          );
          pages = [...pages, ...extraPages, RIGHT_HIDDEN_PAGES];
          break;
        }

        // < (1) ... {4 5} [6] {7 8} ... (10) >
        case hasHiddenPageNumbersOnLeft && hasHiddenPageNumbersOnRight:
        default: {
          pages = [LEFT_HIDDEN_PAGES, ...pages, RIGHT_HIDDEN_PAGES];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return getVisiblePageNumbersRange(1, totalPages);
  };

  const pages = getPaginationItemElements();
  console.log("pages", pages);

  const newSelectedPage = (page) => {
    const selectedPage = Math.max(0, Math.min(page, totalPages));
    setSelectedPage(selectedPage);
  };

  const handleClickPage = (event, pageNumber) => {
    event.preventDefault();
    newSelectedPage(pageNumber);
    console.log("page", pageNumber);
  };

  const handleClickPrev = (event) => {
    event.preventDefault();
    newSelectedPage(selectedPage - 1);
  };

  const handleClickNext = (event) => {
    event.preventDefault();
    newSelectedPage(selectedPage + 1);
  };

  return (
    <Container aria-label="pagination navigation">
      <Wrapper>
        {showFirstButton ? (
          <PageItemElem>
            <PaginationItem
              shape={shape}
              variant={variant}
              color={color}
              fontColor={fontColor}
              hoverColor={hoverColor}
              disabled={disabled}
              showFirstButton
              handleClickPrev={handleClickPrev}
            />
          </PageItemElem>
        ) : null}
        {showPrevButton ? (
          <PageItemElem>
            <PaginationItem
              shape={shape}
              variant={variant}
              color={color}
              fontColor={fontColor}
              hoverColor={hoverColor}
              disabled={disabled}
              showPrevButton
              handleClickPrev={handleClickPrev}
            />
          </PageItemElem>
        ) : null}
        {pages.map((page, index) => {
          if (selectedPage === page) {
            return (
              <PageItemElem>
                <PaginationItem
                  key={index}
                  shape={shape}
                  variant={variant}
                  disabled={disabled}
                  color={color}
                  fontColor={fontColor}
                  activeColor={activeColor}
                  hoverColor={hoverColor}
                  selectedPage
                >
                  {page}
                </PaginationItem>
              </PageItemElem>
            );
          }
          return (
            <PageItemElem>
              <PaginationItem
                key={index}
                pageNumber={page}
                shape={shape}
                variant={variant}
                disabled={disabled}
                color={color}
                fontColor={fontColor}
                hoverColor={hoverColor}
                handleClickPage={handleClickPage}
              >
                {page}
              </PaginationItem>
            </PageItemElem>
          );
        })}
        {showNextButton ? (
          <PageItemElem>
            <PaginationItem
              shape={shape}
              variant={variant}
              color={color}
              fontColor={fontColor}
              hoverColor={hoverColor}
              disabled={disabled}
              showNextButton
              handleClickNext={handleClickNext}
            />
          </PageItemElem>
        ) : null}
        {showLastButton ? (
          <PageItemElem>
            <PaginationItem
              shape={shape}
              variant={variant}
              color={color}
              fontColor={fontColor}
              hoverColor={hoverColor}
              disabled={disabled}
              showLastButton
              handleClickPrev={handleClickPrev}
            />
          </PageItemElem>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default Pagination;
