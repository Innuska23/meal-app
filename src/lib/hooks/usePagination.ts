import { useMemo } from "react";

interface UsePaginationParams {
  currentPage: number;
  totalPages: number;
  totalItems?: number;
  itemsPerPage?: number;
}

interface PaginationMetadata {
  startItem: number;
  endItem: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export const usePagination = ({
  currentPage,
  totalPages,
  totalItems = 0,
  itemsPerPage = 0,
}: UsePaginationParams) => {

  const paginationMetadata = useMemo<PaginationMetadata>(() => {
    const startItem = totalItems ? (currentPage - 1) * itemsPerPage + 1 : 0;
    const endItem = totalItems
      ? Math.min(startItem + itemsPerPage - 1, totalItems)
      : 0;

    return {
      startItem,
      endItem,
      totalItems,
      currentPage,
      totalPages,
      hasPreviousPage: currentPage > 1,
      hasNextPage: currentPage < totalPages,
    };
  }, [currentPage, totalPages, totalItems, itemsPerPage]);

  const visiblePages = useMemo(() => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage <= 4) {
        for (let i = 2; i <= 7; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
      } else if (currentPage >= totalPages - 4) {
        pages.push("ellipsis");
        for (let i = totalPages - 6; i <= totalPages - 1; i++) {
          pages.push(i);
        }
      } else {
        pages.push("ellipsis");
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
      }

      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  return {
    paginationMetadata,
    visiblePages,
    isFirstPage: currentPage === 1,
    isLastPage: currentPage === totalPages,
  };
};
