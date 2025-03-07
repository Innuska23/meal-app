import React from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchMealCategories } from "../../api/mealApi";

import { S } from "./CategoryFilter.styles";
import Button from "../Button/Button";

interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string | null;
    onSelectCategory: (category: string | null) => void;
  }

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchMealCategories,
    staleTime: 600000,
  });

  if (isLoading) return <div>Loading categories...</div>;

  return (
    <S.FilterContainer>
      <h3>FILTER BY CATEGORY :</h3>
      <S.ButtonWrapper>
        <Button
          $isActive={selectedCategory === null}
          onClick={() => onSelectCategory(null)}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            $isActive={selectedCategory === category}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Button>
        ))}
      </S.ButtonWrapper>
    </S.FilterContainer>
  );
};

export default CategoryFilter;
