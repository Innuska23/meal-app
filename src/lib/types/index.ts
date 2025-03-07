export interface Meal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strSource: string;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
  [key: string]: string | null;
}

export interface MealsResponse {
  meals: Meal[] | null;
}

export interface Ingredient {
  name: string;
  measure: string;
}

export interface SelectedMeal {
  meal: Meal;
  ingredients: Ingredient[];
}
