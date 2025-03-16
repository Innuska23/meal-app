import { Meal } from "../../lib/types";
import IngredientsTable from "../IngredientsTable/IngredientsTable";

import { S } from "./IngredientsSection.styles";

interface IngredientsSectionProps {
  meals: Meal[];
}

const IngredientsSection = ({ meals }: IngredientsSectionProps) => (
  <>
    <S.SectionTitle>Combined Ingredients</S.SectionTitle>
    <IngredientsTable meals={meals} />
  </>
);

export default IngredientsSection;
