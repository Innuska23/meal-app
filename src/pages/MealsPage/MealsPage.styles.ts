import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const MealsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 50px;
`;

const ErrorMessage = styled.div`
  color: #f44336;
  text-align: center;
  font-size: 18px;
  margin-top: 50px;
`;

export const S = {
  PageContainer,
  MealsGrid,
  LoadingMessage,
  ErrorMessage,
};
