import styled from "styled-components";

const IngredientsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  tr:hover {
    background-color: #f9f9f9;
  }
`;

export const S = {
  IngredientsTable,
};
