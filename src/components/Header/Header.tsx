import React from "react";

import SearchBar from "../SearchBar/SearchBar";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import Button from "../Button/Button";

import { S } from "./Header.styles";

interface HeaderProps {
  setSearchTerm: (term: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  categories: string[];
}

const Header: React.FC<HeaderProps> = ({
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories = [],
}) => {
  return (
    <S.HeaderContainer>
      <S.Title>Recipe App</S.Title>
      <S.FiltersContainer>
        <SearchBar onSearch={setSearchTerm} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categories={categories}
        />
      </S.FiltersContainer>
      <Button to="/selected">View Selected Recipes</Button>
    </S.HeaderContainer>
  );
};

export default Header;
