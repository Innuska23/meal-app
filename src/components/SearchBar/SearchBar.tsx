import { useState, useEffect } from "react";

import { S } from "./SeacrchBar.styles";
import { useDebounce } from "../../lib/hooks/useDebounce";

interface SearchBarProps {
  searchTerm?: string;
  onSearch: (term: string) => void;
}

const SearchBar = ({
  searchTerm = "",
  onSearch = () => {},
}: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  const debouncedSearch = useDebounce((term: string) => {
    onSearch(term);
  }, 500);

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (inputValue !== searchTerm) {
      debouncedSearch(inputValue);
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
