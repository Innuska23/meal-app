import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const SELECTED_MEALS_KEY = "selectedMeals";

const getMealsFromStorage = (): string[] => {
  const saved = localStorage.getItem(SELECTED_MEALS_KEY);
  return saved ? JSON.parse(saved) : [];
};

const saveMealsToStorage = async (meals: string[]): Promise<string[]> => {
  localStorage.setItem(SELECTED_MEALS_KEY, JSON.stringify(meals));
  return meals;
};

export const useSelectedMeals = () => {
  const queryClient = useQueryClient();

  const { data: selectedMealIds = [] } = useQuery({
    queryKey: [SELECTED_MEALS_KEY],
    queryFn: () => getMealsFromStorage(),
    staleTime: Infinity, 
  });

  const updateMealsMutation = useMutation({
    mutationFn: (newMeals: string[]) => saveMealsToStorage(newMeals),
    onSuccess: (data) => {
      queryClient.setQueryData([SELECTED_MEALS_KEY], data);
    },
  });

  const isSelected = (id: string) => {
    return selectedMealIds.includes(id);
  };

  const removeMeal = (id: string) => {
    const updatedMeals = selectedMealIds.filter((mealId) => mealId !== id);
    updateMealsMutation.mutate(updatedMeals);
  };

  const clearSelection = () => {
    updateMealsMutation.mutate([]);
  };

  const addMeal = (id: string) => {
    if (!selectedMealIds.includes(id)) {
      updateMealsMutation.mutate([...selectedMealIds, id]);
    }
  };

  return {
    selectedMealIds,
    isSelected,
    addMeal,
    removeMeal,
    clearSelection,
    isLoading: updateMealsMutation.isPending,
  };
};
