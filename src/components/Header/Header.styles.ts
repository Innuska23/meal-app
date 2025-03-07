import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  margin-top: 0;
  color: #333;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3),
    -2px -2px 4px rgba(255, 255, 255, 0.2);
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

const SelectionButton = styled(Link)`
  display: inline-block;
  background-color: rgb(108, 117, 125);
  color: white;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 4px;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0b7dda;
  }
`;

export const S = {
  HeaderContainer,
  Title,
  FiltersContainer,
  SelectionButton,
};
