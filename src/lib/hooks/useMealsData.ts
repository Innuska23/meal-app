import { useQueries } from "@tanstack/react-query";
import { useSelectedMeals } from "./useSelectedMeals";
import { fetchMealById } from "../../api/mealApi";

export const useMealsData = () => {
  const { selectedMealIds, removeMeal, clearSelection } = useSelectedMeals();

  const mealQueries = useQueries({
    queries: selectedMealIds.map((id) => ({
      queryKey: ["meal", id],
      queryFn: () => fetchMealById(id),
      staleTime: 600000,
    })),
  });

  const isLoading = mealQueries.some((query) => query.isLoading);
  const hasError = mealQueries.some((query) => query.error);
  const meals = mealQueries.map((query) => query.data).filter(Boolean);

  return {
    isLoading,
    hasError,
    meals,
    selectedMealIds,
    removeMeal,
    clearSelection,
  };
};
