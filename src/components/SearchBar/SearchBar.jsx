import { Icon } from "@iconify/react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/global";
import { SearchBarContainerStyled } from "./SearchBar.styled";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const { searchText, setSearchText, searchType, history, setHistory } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  function handleSearch(e) {
    if (e.key === "Enter" || e.button === 0) {
      if (searchText === "") {
        return;
      } else {
        navigate(`/search/${searchText}`);
        setHistory((prevHistory) => [...prevHistory, searchText]);
      }
    }
  }

  const newHistory = JSON.parse(window.localStorage.getItem('searchHistory'));
  console.log(newHistory)

  return (
    <SearchBarContainerStyled className="search-bar_container">
      <Icon
        icon={"material-symbols:search"}
        style={{ fontSize: "2rem", color: "#303030" }}
      />
      <input
        type="text"
        value={searchText}
        onKeyDown={handleSearch}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder={`${
          searchType?.includes("filter")
            ? "Buscar por trago por ingrediente"
            : "Buscar trago por nombre"
        }`}
      />
    </SearchBarContainerStyled>
  );
};
