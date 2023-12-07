import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();



export function GlobalProvider({ children }) {

  const [searchText, setSearchText] = useState(
    window.localStorage.getItem("searchText") || ""
  );
  const [searchType, setSearchType] = useState(
    window.localStorage.getItem("searchType") || "search.php?s="
  );
  const [history, setHistory] = useState(
    window.localStorage.getItem("searchHistory") || []
  );

  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    window.localStorage.setItem("searchType", searchType);
    window.localStorage.setItem("searchText", searchText);
    window.localStorage.setItem("searchHistory", JSON.stringify(history));
  }, [searchType, searchText,history]);

  return (
    <GlobalContext.Provider
      value={{
        searchText,
        setSearchText,
        searchType,
        setSearchType,
        isLoading,
        setIsLoading,
        history,
        setHistory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
