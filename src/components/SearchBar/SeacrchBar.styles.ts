import styled from "styled-components";

const SearchContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  background-color: white;
  color: black;

  &:focus {
    outline: none;
    border-color: rgb(72, 71, 71);
    box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.2);
  }
`;

export const S = {
  SearchContainer,
  SearchInput,
};
