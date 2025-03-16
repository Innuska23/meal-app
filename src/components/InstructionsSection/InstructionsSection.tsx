import CookingInstructions from "../CookingInstructions/CookingInstructions";
import { Meal } from "../../lib/types";

import { S } from "./InstructionsSection.styles";

interface InstructionsSectionProps {
  meals: Meal[];
}

const InstructionsSection = ({ meals }: InstructionsSectionProps) => (
  <>
    <S.SectionTitle>Cooking Instructions</S.SectionTitle>
    <CookingInstructions meals={meals} />
  </>
);

export default InstructionsSection;
