import { S } from "./EmptyState.styles";

const EmptyState = () => (
  <S.PageContainer>
    <S.BackButton to="/">&larr; Back to Recipes</S.BackButton>
    <S.Header>
      <S.Title>Selected Recipes</S.Title>
    </S.Header>
    <S.EmptyMessage>
      You haven't selected any recipes yet.
      <br />
      <S.BackButton to="/">Go back to the recipes page</S.BackButton> to add
      some!
    </S.EmptyMessage>
  </S.PageContainer>
);

export default EmptyState;
