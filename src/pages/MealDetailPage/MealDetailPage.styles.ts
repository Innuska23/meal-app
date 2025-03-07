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

const MealHeader = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MealImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 30px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const MealInfo = styled.div`
  flex: 1;
`;

const MealTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 16px;
  color: #333;
`;

const MealMeta = styled.div`
  margin-bottom: 16px;

  p {
    margin: 8px 0;
    color: #666;
  }
`;

const SectionTitle = styled.h2`
  margin: 30px 0 16px;
  color: #333;
`;

const IngredientsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
`;

const IngredientItem = styled.li`
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Instructions = styled.div`
  line-height: 1.6;
  color: #333;

  p {
    margin-bottom: 16px;
  }
`;

const Button = styled.button`
  background-color: rgb(25, 135, 84);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const RemoveButton = styled(Button)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
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
  MealHeader,
  MealImage,
  MealInfo,
  MealTitle,
  MealMeta,
  SectionTitle,
  IngredientsList,
  IngredientItem,
  Instructions,
  Button,
  LoadingMessage,
  RemoveButton,
  ErrorMessage,
};
