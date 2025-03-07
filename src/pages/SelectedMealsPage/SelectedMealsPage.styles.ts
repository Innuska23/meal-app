import { Link } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  color: rgb(108, 117, 125);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = styled.header`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  margin-bottom: 16px;
  color: #333;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
`;

const EmptyMessage = styled.div`
  text-align: center;
  font-size: 18px;
  margin: 50px 0;
  color: #666;
`;

const MealsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const MealCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MealImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const MealContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MealTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const SectionTitle = styled.h2`
  margin: 40px 0 20px;
  color: #333;
  display: flex;
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
  BackButton,
  Header,
  Title,
  EmptyMessage,
  MealsGrid,
  MealImage,
  MealCard,
  MealContent,
  MealTitle,
  ButtonContainer,
  SectionTitle,
  LoadingMessage,
  ErrorMessage,
};
