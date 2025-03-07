import { Meal, Ingredient } from "../lib/types";

const extractIngredients = (meal: Meal): Ingredient[] => {
  const ingredients: Ingredient[] = [];

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

  return ingredients;
};

export const combineIngredients = (
  meals: Meal[]
): { name: string; measures: string[] }[] => {
  const ingredientsMap = new Map<string, string[]>();

  meals.forEach((meal) => {
    const ingredients = extractIngredients(meal);

    ingredients.forEach((ingredient) => {
      const existingMeasures = ingredientsMap.get(ingredient.name) || [];
      ingredientsMap.set(ingredient.name, [
        ...existingMeasures,
        ingredient.measure,
      ]);
    });
  });

  return Array.from(ingredientsMap.entries()).map(([name, measures]) => ({
    name,
    measures,
  }));
};
