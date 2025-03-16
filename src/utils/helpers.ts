import { Meal, Ingredient } from "../lib/types";

const extractIngredients = (meal: Meal): Ingredient[] => {
  const ingredients: Ingredient[] = [];

  Object.keys(meal).forEach((key) => {
    if (key.startsWith("strIngredient")) {
      const index = key.replace("strIngredient", "");
      const ingredient = meal[key];
      const measure = meal[`strMeasure${index}`];

      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({
          name: ingredient,
          measure: measure || "",
        });
      }
    }
  });

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
