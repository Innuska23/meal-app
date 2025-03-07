import React from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MealsPage from "./pages/MealsPage/MealsPage";
import MealDetailPage from "./pages/MealDetailPage/MealDetailPage";
import SelectedMealsPage from "./pages/SelectedMealsPage/SelectedMealsPage";
import { GlobalStyle } from "./App.styles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router>
        <BrowserRouter basename="/meal-app">
          <Route path="/" element={<MealsPage />} />
          <Route path="/meal/:id" element={<MealDetailPage />} />
          <Route path="/selected" element={<SelectedMealsPage />} />
        </BrowserRouter>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
