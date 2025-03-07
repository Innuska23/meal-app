import { useQuery } from "@tanstack/react-query";

import { fetchMealById } from "../../api/mealApi";
import { Ingredient } from "../types";

export const useMealDetail = (id: string) => {
  const {
    data: meal,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["meal", id],
    queryFn: () => fetchMealById(id),
    staleTime: 600000,
  });

  const ingredients: Ingredient[] = [];

  if (meal) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({
          name: ingredient,
          measure: measure || "",
        });
      }
    }
  }

  return {
    meal,
    ingredients,
    isLoading,
    error,
  };
};
