import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

const SELECTED_MEALS_KEY = "selectedMeals";

const getMealsFromStorage = (): string[] => {
  try {
    const saved = localStorage.getItem(SELECTED_MEALS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Failed to parse selected meals from localStorage", error);
    return [];
  }
};

const saveMealsToStorage = async (meals: string[]): Promise<string[]> => {
  localStorage.setItem(SELECTED_MEALS_KEY, JSON.stringify(meals));
  return meals;
};

export const useSelectedMeals = () => {
  const queryClient = useQueryClient();

  const { data: selectedMealIds = [], isLoading: isLoadingInitial } = useQuery({
    queryKey: [SELECTED_MEALS_KEY],
    queryFn: getMealsFromStorage,
    staleTime: Infinity,
  });

  const updateMealsMutation = useMutation({
    mutationFn: saveMealsToStorage,
    onSuccess: (data) => {
      queryClient.setQueryData([SELECTED_MEALS_KEY], data);
    },
  });

  const isSelected = useCallback(
    (id: string) => {
      return selectedMealIds.includes(id);
    },
    [selectedMealIds]
  );

  const removeMeal = useCallback(
    (id: string) => {
      const updatedMeals = selectedMealIds.filter((mealId) => mealId !== id);
      updateMealsMutation.mutate(updatedMeals);
    },
    [selectedMealIds, updateMealsMutation]
  );

  const clearSelection = useCallback(() => {
    updateMealsMutation.mutate([]);
  }, [updateMealsMutation]);

  const addMeal = useCallback(
    (id: string) => {
      if (!selectedMealIds.includes(id)) {
        updateMealsMutation.mutate([...selectedMealIds, id]);
      }
    },
    [selectedMealIds, updateMealsMutation]
  );

  return {
    selectedMealIds,
    isSelected,
    addMeal,
    removeMeal,
    clearSelection,
    isLoading: isLoadingInitial,
    isUpdating: updateMealsMutation.isPending,
  };
};
