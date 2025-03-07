import React from "react";

import { Meal } from "../../lib/types";

interface CookingInstructionsProps {
  meals: Meal[];
}

const CookingInstructions: React.FC<CookingInstructionsProps> = ({ meals }) => {
  return (
    <>
      {meals.map((meal) => (
        <div key={meal.idMeal} style={{ marginBottom: "30px" }}>
          <h3>{meal.strMeal}</h3>
          <p style={{ whiteSpace: "pre-line" }}>{meal.strInstructions}</p>
        </div>
      ))}
    </>
  );
};

export default CookingInstructions;
