import { useState, useEffect, useMemo } from "react";
import { fetchMealsBySearch, fetchRandomMeals } from "../../api/mealApi";
import { Meal } from "../types";
import { useSearchParams } from "./useSearchParams";

export const useMeals = () => {
  const [allMeals, setAllMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const {
    page,
    search: searchTerm,
    category: selectedCategory,
    setPage,
    setSearch: setSearchTerm,
    setCategory: setSelectedCategory,
  } = useSearchParams();

  const MEALS_PER_PAGE = 12;

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      try {
        const data = searchTerm
          ? await fetchMealsBySearch(searchTerm)
          : await fetchRandomMeals();
        setAllMeals(data);
        setError(null);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        console.error("Failed to fetch meals");
        setError("Failed to fetch meals");
        setAllMeals([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeals();
  }, [searchTerm]);

  const filteredMeals = useMemo(() => {
    if (!selectedCategory) return allMeals;
    return allMeals.filter((meal) => meal.strCategory === selectedCategory);
  }, [allMeals, selectedCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredMeals.length / MEALS_PER_PAGE)
  );

  useEffect(() => {
    if (page > totalPages && totalPages > 0) {
      setPage(totalPages);
    }
  }, [totalPages, page, setPage]);

  const meals = useMemo(() => {
    const startIndex = (page - 1) * MEALS_PER_PAGE;
    return filteredMeals.slice(startIndex, startIndex + MEALS_PER_PAGE);
  }, [filteredMeals, page]);

  return {
    meals,
    isLoading,
    error,
    page,
    setPage,
    totalPages,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    allMeals,
  };
};
