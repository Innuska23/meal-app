import React from "react";

import CookingInstructions from "../CookingInstructions/CookingInstructions";
import { Meal } from "../../lib/types";

import { S } from "./InstructionsSection.styles";

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
