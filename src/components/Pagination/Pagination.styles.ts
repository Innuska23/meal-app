import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  width: 100%;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  gap: 5px;
`;

const Ellipsis = styled.span`
  display: flex;
  align-items: center;
  margin: 0 4px;
`;

const PageInfo = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

export const S = {
  PaginationWrapper,
  PaginationContainer,
  Ellipsis,
  PageInfo,
};
