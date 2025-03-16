import { useQuery } from "@tanstack/react-query";

import { fetchMealCategories } from "../../api/mealApi";
import Button from "../Button/Button";

import { S } from "./CategoryFilter.styles";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  categories?: string[];
}

const CategoryFilter = ({
  selectedCategory,
  onSelectCategory,
  categories: externalCategories,
}: CategoryFilterProps) => {
  const { data: fetchedCategories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchMealCategories,
    staleTime: 600000,
    enabled: !externalCategories || externalCategories.length === 0,
  });

  const categoriesToUse =
    externalCategories && externalCategories.length > 0
      ? externalCategories
      : fetchedCategories;

  if (isLoading && (!externalCategories || externalCategories.length === 0)) {
    return <div>Loading categories...</div>;
  }

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
        {categoriesToUse.map((category) => (
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
