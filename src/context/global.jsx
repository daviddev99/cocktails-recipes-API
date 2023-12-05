import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [searchText, setSearchText] = useState(
    window.localStorage.getItem("searchText") || ""
  );
  const [searchType, setSearchType] = useState(
    window.localStorage.getItem("searchType") || "search.php?s="
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.localStorage.setItem("searchType", searchType);
    window.localStorage.setItem("searchText", searchText);
  }, [searchType, searchText]);

  return (
    <GlobalContext.Provider
      value={{
        searchText,
        setSearchText,
        searchType,
        setSearchType,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
