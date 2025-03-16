import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface SearchParams {
  page: number;
  search: string;
  category: string | null;
}

export const useSearchParams = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getInitialValues = useCallback(() => {
    const urlParams = new URLSearchParams(location.search);
    return {
      page: parseInt(urlParams.get("page") || "1", 10),
      search: urlParams.get("search") || "",
      category: urlParams.get("category") || null,
    };
  }, [location.search]);

  const [params, setParams] = useState<SearchParams>(getInitialValues());

  useEffect(() => {
    const urlParams = new URLSearchParams();

    if (params.page > 1) {
      urlParams.set("page", params.page.toString());
    }

    if (params.search) {
      urlParams.set("search", params.search);
    }

    if (params.category) {
      urlParams.set("category", params.category);
    }

    const newSearch = urlParams.toString();
    const queryString = newSearch ? `?${newSearch}` : "";

    navigate(`${location.pathname}${queryString}`, { replace: true });
  }, [params, navigate, location.pathname]);

  useEffect(() => {
    setParams(getInitialValues());
  }, [location.search, getInitialValues]);

  const setPage = useCallback((page: number) => {
    setParams((prev) => ({ ...prev, page }));
  }, []);

  const setSearch = useCallback((search: string) => {
    setParams((prev) => ({ ...prev, search, page: 1 }));
  }, []);

  const setCategory = useCallback((category: string | null) => {
    setParams((prev) => ({ ...prev, category, page: 1 }));
  }, []);

  return {
    page: params.page,
    search: params.search,
    category: params.category,
    setPage,
    setSearch,
    setCategory,
  };
};
