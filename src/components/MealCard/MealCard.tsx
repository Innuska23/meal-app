import React from "react";
import { Link } from "react-router-dom";

import { useSelectedMeals } from "../../lib/hooks/useSelectedMeals";
import Button from "../Button/Button";
import { Meal } from "../../lib/types";

import { S } from "./MealCard.styles";

interface MealCardProps {
  meal: Meal;
  removeMeal?: (id: string) => void;
}

const MealCard: React.FC<MealCardProps> = ({
  meal,
  removeMeal: propRemoveMeal,
}) => {
  const {
    isSelected,
    addMeal,
    removeMeal: hookRemoveMeal,
  } = useSelectedMeals();
  const selected = isSelected(meal.idMeal);

  const handleRemove = () => {
    if (propRemoveMeal) {
      propRemoveMeal(meal.idMeal);
    } else {
      hookRemoveMeal(meal.idMeal);
    }
  };

  return (
    <S.Card>
      <Link to={`/meal/${meal.idMeal}`}>
        <S.CardImage src={meal.strMealThumb} alt={meal.strMeal} />
      </Link>

      <S.CardContent>
        <S.CardTitle>{meal.strMeal}</S.CardTitle>
        <S.CardMeta>
          <span>
            <strong>Category:</strong> {meal.strCategory}
          </span>
          <span>
            <strong>Area:</strong> {meal.strArea}
          </span>
        </S.CardMeta>

        {selected ? (
          <Button $variant="danger" onClick={handleRemove}>
            Remove from Selection
          </Button>
        ) : (
          <Button $variant="success" onClick={() => addMeal(meal.idMeal)}>
            Add to Selection
          </Button>
        )}
      </S.CardContent>
    </S.Card>
  );
};

export default MealCard;
