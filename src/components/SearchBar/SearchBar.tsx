import React, { useState, useEffect, useCallback } from "react";
import { S } from "./SeacrchBar.styles";

interface SearchBarProps {
  searchTerm?: string;
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm = "",
  onSearch = () => {},
}) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

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
    if (inputValue !== searchTerm) {
      const cleanup = debouncedSearch(inputValue);
      return cleanup;
    }
  }, [inputValue, debouncedSearch, searchTerm]);

  return (
    <S.SearchContainer>
      <S.SearchInput
        type="text"
        placeholder="Search recipes..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </S.SearchContainer>
  );
};

export default SearchBar;
