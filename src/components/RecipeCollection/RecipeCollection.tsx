import React from "react";

import { Meal } from "../../lib/types";
import MealCard from "../MealCard/MealCard";

import { S } from "./RecipeCollection.styles";

interface RecipeCollectionProps {
  meals: Meal[];
  removeMeal: (id: string) => void;
}

const RecipeCollection: React.FC<RecipeCollectionProps> = ({
  meals,
  removeMeal,
}) => (
  <>
    <S.SectionTitle>Your Recipe Collection</S.SectionTitle>
    <S.MealsGrid>
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} removeMeal={removeMeal} />
      ))}
    </S.MealsGrid>
  </>
);

export default RecipeCollection;
