import axios from "axios";
import { MealsResponse, Meal } from "../lib/types";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchMealsBySearch = async (query: string): Promise<Meal[]> => {
  try {
    const response = await axios.get<MealsResponse>(
      `${API_BASE_URL}/search.php?s=${query}`
    );
    return response.data.meals || [];
  } catch (error) {
    console.error("Error fetching meals by search:", error);
    return [];
  }
};

export const fetchMealById = async (id: string): Promise<Meal | null> => {
  try {
    const response = await axios.get<MealsResponse>(
      `${API_BASE_URL}/lookup.php?i=${id}`
    );
    return response.data.meals ? response.data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching meal by id:", error);
    return null;
  }
};

export const fetchMealCategories = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories.php`);
    return response.data.categories.map(
      (category: { strCategory: string }) => category.strCategory
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchRandomMeals = async (): Promise<Meal[]> => {
  return fetchMealsBySearch("");
};
