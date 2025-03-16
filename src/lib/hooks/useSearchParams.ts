import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface SearchParams {
  page: number;
  search: string;
  category: string | null;
}

const getInitialValues = (search: string): SearchParams => {
  const urlParams = new URLSearchParams(search);
  return {
    page: parseInt(urlParams.get("page") || "1", 10),
    search: urlParams.get("search") || "",
    category: urlParams.get("category") || null,
  };
};

export const useSearchParams = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [params, setParams] = useState<SearchParams>(() =>
    getInitialValues(location.search)
  );

  const createQueryString = useCallback((params: SearchParams) => {
    const urlParams = new URLSearchParams();
    if (params.page > 1) urlParams.set("page", params.page.toString());
    if (params.search) urlParams.set("search", params.search);
    if (params.category) urlParams.set("category", params.category);
    return urlParams.toString() ? `?${urlParams.toString()}` : "";
  }, []);

  useEffect(() => {
    const queryString = createQueryString(params);
    const fullPath = `${location.pathname}${queryString}`;
    if (fullPath !== `${location.pathname}${location.search}`) {
      navigate(fullPath, { replace: true });
    }
  }, [params, navigate, location.pathname, location.search, createQueryString]);

  useEffect(() => {
    setParams(getInitialValues(location.search));
  }, [location.search]);

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
