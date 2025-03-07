import { useQuery } from "@tanstack/react-query";
import { fetchMealsBySearch, fetchRandomMeals } from "../../api/mealApi";
import { useState, useEffect } from "react";

export const useMeals = (searchTerm: string) => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const PAGE_SIZE = 8;

  const {
    data: meals = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["meals", searchTerm],
    queryFn: () =>
      searchTerm ? fetchMealsBySearch(searchTerm) : fetchRandomMeals(),
    staleTime: 300000,
  });

  const filteredMeals = selectedCategory
    ? meals.filter((meal) => meal.strCategory === selectedCategory)
    : meals;

  const totalPages = Math.ceil(filteredMeals.length / PAGE_SIZE);
  const paginatedMeals = filteredMeals.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  useEffect(() => {
    setPage(1);
  }, [searchTerm, selectedCategory]);

  return {
    meals: paginatedMeals,
    isLoading,
    error,
    page,
    setPage,
    totalPages,
    selectedCategory,
    setSelectedCategory,
    allMeals: meals,
  };
};
