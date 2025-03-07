import React from "react";
import { useQueries } from "@tanstack/react-query";

import { useSelectedMeals } from "../../lib/hooks/useSelectedMeals";
import { fetchMealById } from "../../api/mealApi";
import { Meal } from "../../lib/types";
import Button from "../../components/Button/Button";
import MealCard from "../../components/MealCard/MealCard";
import IngredientsTable from "../../components/IngredientsTable/IngredientsTable";
import CookingInstructions from "../../components/CookingInstructions/CookingInstructions";

import { S } from "./SelectedMealsPage.styles";

const SelectedMealsPage: React.FC = () => {
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
  const meals = mealQueries
    .map((query) => query.data)
    .filter(Boolean) as Meal[];

  if (isLoading) {
    return <S.LoadingMessage>Loading selected recipes...</S.LoadingMessage>;
  }

  if (hasError) {
    return (
      <S.ErrorMessage>
        Error loading some recipes. Please try again later.
      </S.ErrorMessage>
    );
  }

  if (selectedMealIds.length === 0) {
    return (
      <S.PageContainer>
        <S.BackButton to="/">&larr; Back to Recipes</S.BackButton>
        <S.Header>
          <S.Title>Selected Recipes</S.Title>
        </S.Header>
        <S.EmptyMessage>
          You haven't selected any recipes yet.
          <br />
          <S.BackButton to="/">Go back to the recipes page</S.BackButton> to add
          some!
        </S.EmptyMessage>
      </S.PageContainer>
    );
  }

  return (
    <S.PageContainer>
      <S.BackButton to="/">&larr; Back to Recipes</S.BackButton>
      <S.Header>
        <S.Title>Selected Recipes</S.Title>
        <S.ButtonContainer>
          <Button $variant="success" to="/">
            Add More Recipes
          </Button>
          <Button $variant="danger" onClick={clearSelection}>
            Clear All
          </Button>
        </S.ButtonContainer>
      </S.Header>

      <S.SectionTitle>Your Recipe Collection</S.SectionTitle>
      <S.MealsGrid>
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} removeMeal={removeMeal} />
        ))}
      </S.MealsGrid>

      <S.SectionTitle>Combined Ingredients</S.SectionTitle>
      <IngredientsTable meals={meals} />

      <S.SectionTitle>Cooking Instructions</S.SectionTitle>
      <CookingInstructions meals={meals} />
    </S.PageContainer>
  );
};

export default SelectedMealsPage;
