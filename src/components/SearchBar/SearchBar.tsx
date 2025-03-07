import React, { useState, useEffect, useCallback } from "react";

import { S } from "./SeacrchBar.styles";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useCallback(
    (term: string) => {
      const handler = setTimeout(() => {
        if (typeof onSearch === "function") {
          onSearch(term);
        }
      }, 500);

      return () => {
        clearTimeout(handler);
      };
    },
    [onSearch]
  );

  useEffect(() => {
    const cleanup = debouncedSearch(searchTerm);
    return cleanup;
  }, [searchTerm, debouncedSearch]);

  return (
    <S.SearchContainer>
      <S.SearchInput
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </S.SearchContainer>
  );
};

export default SearchBar;
