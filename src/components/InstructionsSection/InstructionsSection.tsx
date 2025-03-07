import React from "react";
import { S } from "./InstructionsSection.styles";
import CookingInstructions from "../CookingInstructions/CookingInstructions";
import { Meal } from "../../lib/types";

interface InstructionsSectionProps {
  meals: Meal[];
}

const InstructionsSection: React.FC<InstructionsSectionProps> = ({ meals }) => (
  <>
    <S.SectionTitle>Cooking Instructions</S.SectionTitle>
    <CookingInstructions meals={meals} />
  </>
);

export default InstructionsSection;
