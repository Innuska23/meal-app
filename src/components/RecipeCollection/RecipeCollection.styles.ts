import styled from "styled-components";

const SectionTitle = styled.h2`
  margin: 40px 0 20px;
  color: #333;
  display: flex;
`;

const MealsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const S = {
  SectionTitle,
  MealsGrid,
};
