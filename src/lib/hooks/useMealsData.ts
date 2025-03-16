import { useQueries } from "@tanstack/react-query";
import { useSelectedMeals } from "./useSelectedMeals";
import { fetchMealById } from "../../api/mealApi";
import { Meal } from "../types";

export const useMealsData = () => {
  const { selectedMealIds, removeMeal, clearSelection } = useSelectedMeals();

  const mealQueries = useQueries({
    queries: selectedMealIds.map((id) => ({
      queryKey: ["meal", id],
      queryFn: () => fetchMealById(id) as Promise<Meal | null>,
      staleTime: 600_000,
      enabled: !!id,
    })),
  });

  const isLoading = mealQueries.some((query) => query.isLoading);
  const hasError = mealQueries.some((query) => query.error);
  const meals = mealQueries
    .map((query) => query.data)
    .filter((meal): meal is Meal => meal != null);

  return {
    isLoading,
    hasError,
    meals,
    selectedMealIds,
    removeMeal,
    clearSelection,
  };
};
