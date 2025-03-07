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

const EmptyMessage = styled.div`
  text-align: center;
  font-size: 18px;
  margin: 50px 0;
  color: #666;
`;

const Title = styled.h1`
  margin-bottom: 16px;
  color: #333;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
`;

export const S = {
  PageContainer,
  BackButton,
  Header,
  Title,
  EmptyMessage,
};
