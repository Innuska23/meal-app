import React, { useState, useMemo } from "react";

import { useMeals } from "../../lib/hooks/useMeals";
import MealCard from "../../components/MealCard/MealCard";
import Pagination from "../../components/Pagination/Pagination";
import Header from "../../components/Header/Header";

import { S } from "./MealsPage.styles";

const MealsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    meals,
    isLoading,
    error,
    page,
    setPage,
    totalPages,
    selectedCategory,
    setSelectedCategory,
    allMeals,
  } = useMeals(searchTerm);

  const categories = useMemo(() => {
    if (!allMeals.length)  return [];
    return Array.from(new Set(allMeals.map((meal) => meal.strCategory)))
      .filter(Boolean)
      .sort();
  }, [allMeals]);

  return (
    <S.PageContainer>
      <Header
        selectedCategory={selectedCategory}
        setSearchTerm={setSearchTerm}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      {isLoading ? (
        <S.LoadingMessage>Loading recipes...</S.LoadingMessage>
      ) : error ? (
        <S.ErrorMessage>
          Error loading recipes. Please try again later.
        </S.ErrorMessage>
      ) : meals.length === 0 ? (
        <S.ErrorMessage>
          No recipes found. Try different search criteria.
        </S.ErrorMessage>
      ) : (
        <>
          <S.MealsGrid>
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </S.MealsGrid>

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </S.PageContainer>
  );
};

export default MealsPage;
