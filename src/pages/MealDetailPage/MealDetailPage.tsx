import { useParams } from "react-router-dom";

import { useMealDetail } from "../../lib/hooks/useMealDetail";
import { useSelectedMeals } from "../../lib/hooks/useSelectedMeals";

import { S } from "./MealDetailPage.styles";

const MealDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { meal, ingredients, isLoading, error } = useMealDetail(id || "");
  const { isSelected, addMeal, removeMeal } = useSelectedMeals();

  if (isLoading) {
    return <S.LoadingMessage>Loading recipe details...</S.LoadingMessage>;
  }

  if (error || !meal)
    return (
      <S.ErrorMessage>
        Error loading recipe. Please try again later.
      </S.ErrorMessage>
    );

  const selected = isSelected(meal.idMeal);

  const instructionParagraphs = meal.strInstructions
    .split(/\r\n|\n|\r/)
    .filter((p) => p.trim() !== "");

  return (
    <S.PageContainer>
      <S.BackButton to="/">&larr; Back to Recipes</S.BackButton>

      <S.MealHeader>
        <S.MealImage src={meal.strMealThumb} alt={meal.strMeal} />
        <S.MealInfo>
          <S.MealTitle>{meal.strMeal}</S.MealTitle>
          <S.MealMeta>
            <p>
              <strong>Category:</strong> {meal.strCategory}
            </p>
            <p>
              <strong>Area:</strong> {meal.strArea}
            </p>
            {meal.strTags && (
              <p>
                <strong>Tags:</strong> {meal.strTags}
              </p>
            )}
          </S.MealMeta>

          {selected ? (
            <S.RemoveButton onClick={() => removeMeal(meal.idMeal)}>
              Remove from Selection
            </S.RemoveButton>
          ) : (
            <S.Button onClick={() => addMeal(meal.idMeal)}>
              Add to Selection
            </S.Button>
          )}
        </S.MealInfo>
      </S.MealHeader>

      <S.SectionTitle>Ingredients</S.SectionTitle>
      <S.IngredientsList>
        {ingredients.map((ingredient, index) => (
          <S.IngredientItem key={index}>
            <strong>{ingredient.name}</strong>: {ingredient.measure}
          </S.IngredientItem>
        ))}
      </S.IngredientsList>

      <S.SectionTitle>Instructions</S.SectionTitle>
      <S.Instructions>
        {instructionParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </S.Instructions>

      {meal.strYoutube && (
        <>
          <S.SectionTitle>Video Tutorial</S.SectionTitle>
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
            <S.Button>Watch on YouTube</S.Button>
          </a>
        </>
      )}

      {meal.strSource && (
        <p style={{ marginTop: "20px" }}>
          <strong>Source:</strong>{" "}
          <a href={meal.strSource} target="_blank" rel="noopener noreferrer">
            {new URL(meal.strSource).hostname}
          </a>
        </p>
      )}
    </S.PageContainer>
  );
};

export default MealDetailPage;
