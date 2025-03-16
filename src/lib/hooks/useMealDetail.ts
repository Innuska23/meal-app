import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import { fetchMealById } from "../../api/mealApi";
import { Ingredient, Meal } from "../types";

export const useMealDetail = (id: string) => {
  const {
    data: meal,
    isLoading,
    error,
  } = useQuery<Meal | null>({
    queryKey: ["meal", id],
    queryFn: () => fetchMealById(id),
    staleTime: 600_000,
  });

  const ingredients: Ingredient[] = useMemo(() => {
    if (!meal) return [];
    const result: Ingredient[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        result.push({
          name: ingredient.trim(),
          measure: measure?.trim() || "",
        });
      }
    }
    return result;
  }, [meal]);

  return { meal, ingredients, isLoading, error };
};
