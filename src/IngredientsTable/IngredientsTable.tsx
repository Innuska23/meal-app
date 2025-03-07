import React from "react";

import { Meal } from "../lib/types";
import { combineIngredients } from "../utils/helpers";

import { S } from "./IngredientsTable.styles";

interface IngredientsTableProps {
  meals: Meal[];
}

const IngredientsTable: React.FC<IngredientsTableProps> = ({ meals }) => {
  const combinedIngredients = combineIngredients(meals);

  return (
    <S.IngredientsTable>
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Required Amounts</th>
        </tr>
      </thead>
      <tbody>
        {combinedIngredients.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.measures.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </S.IngredientsTable>
  );
};

export default IngredientsTable;
