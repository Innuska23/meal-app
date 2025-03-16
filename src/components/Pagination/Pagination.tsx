import { usePagination } from "../../lib/hooks/usePagination";
import Button from "../Button/Button";

import { S } from "./Pagination.styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLastButtons?: boolean;
  showPageInfo?: boolean;
  totalItems?: number;
  itemsPerPage?: number;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLastButtons = false,
  showPageInfo = false,
  totalItems = 0,
  itemsPerPage = 0,
}: PaginationProps) => {
  const { paginationMetadata, visiblePages, isFirstPage, isLastPage } =
    usePagination({
      currentPage,
      totalPages,
      totalItems,
      itemsPerPage,
    });

  if (totalPages <= 1) {
    return null;
  }

  return (
    <S.PaginationWrapper>
      {showPageInfo && totalItems > 0 && (
        <S.PageInfo>
          Showing {paginationMetadata.startItem}-{paginationMetadata.endItem} of{" "}
          {totalItems}
        </S.PageInfo>
      )}

      <S.PaginationContainer>
        {showFirstLastButtons && (
          <Button
            onClick={() => onPageChange(1)}
            disabled={isFirstPage}
            aria-label="Go to first page"
            style={
              isFirstPage ? { pointerEvents: "none", opacity: 0.5 } : undefined
            }
          >
            &laquo;
          </Button>
        )}

        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          aria-label="Go to previous page"
          style={
            isFirstPage ? { pointerEvents: "none", opacity: 0.5 } : undefined
          }
        >
          &lt;
        </Button>

        {visiblePages.map((page, index) => {
          if (page === "ellipsis") {
            return <S.Ellipsis key={`ellipsis-${index}`}>...</S.Ellipsis>;
          }

          return (
            <Button
              key={`page-${page}`}
              $isActive={currentPage === page}
              onClick={() => onPageChange(page)}
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </Button>
          );
        })}

        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLastPage}
          aria-label="Go to next page"
          style={
            isLastPage ? { pointerEvents: "none", opacity: 0.5 } : undefined
          }
        >
          &gt;
        </Button>

        {showFirstLastButtons && (
          <Button
            onClick={() => onPageChange(totalPages)}
            disabled={isLastPage}
            aria-label="Go to last page"
            style={
              isLastPage ? { pointerEvents: "none", opacity: 0.5 } : undefined
            }
          >
            &raquo;
          </Button>
        )}
      </S.PaginationContainer>
    </S.PaginationWrapper>
  );
};

export default Pagination;
