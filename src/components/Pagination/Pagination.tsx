import React from "react";
import Button from "../Button/Button";

import { S } from "./Pagination.styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const renderPageButtons = () => {
    const buttons = [];

    buttons.push(
      <Button
        key="prev"
        onClick={
          currentPage > 1 ? () => onPageChange(currentPage - 1) : undefined
        }
        disabled={currentPage === 1}
        style={
          currentPage === 1
            ? { pointerEvents: "none", opacity: 0.5 }
            : undefined
        }
      >
        &lt;
      </Button>
    );

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <Button
            key={i}
            $isActive={currentPage === i}
            onClick={() => onPageChange(i)}
          >
            {i}
          </Button>
        );
      }
    } else {
      buttons.push(
        <Button
          key={1}
          $isActive={currentPage === 1}
          onClick={() => onPageChange(1)}
        >
          1
        </Button>
      );

      let startPage, endPage;

      if (currentPage <= 4) {
        startPage = 2;
        endPage = 7;

        for (let i = startPage; i <= endPage; i++) {
          buttons.push(
            <Button
              key={i}
              $isActive={currentPage === i}
              onClick={() => onPageChange(i)}
            >
              {i}
            </Button>
          );
        }

        buttons.push(<S.Ellipsis key="ellipsis">...</S.Ellipsis>);
      } else if (currentPage >= totalPages - 4) {
        buttons.push(<S.Ellipsis key="ellipsis">...</S.Ellipsis>);

        startPage = totalPages - 6;
        endPage = totalPages - 1;

        for (let i = startPage; i <= endPage; i++) {
          buttons.push(
            <Button
              key={i}
              $isActive={currentPage === i}
              onClick={() => onPageChange(i)}
            >
              {i}
            </Button>
          );
        }
      } else {
        buttons.push(<S.Ellipsis key="ellipsis-start">...</S.Ellipsis>);

        startPage = currentPage - 2;
        endPage = currentPage + 2;

        for (let i = startPage; i <= endPage; i++) {
          buttons.push(
            <Button
              key={i}
              $isActive={currentPage === i}
              onClick={() => onPageChange(i)}
            >
              {i}
            </Button>
          );
        }

        buttons.push(<S.Ellipsis key="ellipsis-end">...</S.Ellipsis>);
      }

      buttons.push(
        <Button
          key={totalPages}
          $isActive={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </Button>
      );
    }

    buttons.push(
      <Button
        key="next"
        onClick={
          currentPage < totalPages
            ? () => onPageChange(currentPage + 1)
            : undefined
        }
        disabled={currentPage === totalPages}
        style={
          currentPage === totalPages
            ? { pointerEvents: "none", opacity: 0.5 }
            : undefined
        }
      >
        &gt;
      </Button>
    );

    return buttons;
  };

  return <S.PaginationContainer>{renderPageButtons()}</S.PaginationContainer>;
};

export default Pagination;
