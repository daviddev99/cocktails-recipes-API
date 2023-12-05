import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/global";
import { SearchBarContainerStyled } from "./SearchBar.styled";

export const SearchBar = () => {
  const { searchText, setSearchText, searchType } = useContext(GlobalContext);
  const navigate = useNavigate();

  function handleSearch() {
    if (searchText) {
      navigate(`/search/${searchText}`);
    }
  }

  return (
    <SearchBarContainerStyled className="search-bar_container">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder={`${
          searchType?.includes("filter")
            ? "Buscar por trago por ingrediente"
            : "Buscar trago por nombre"
        }`}
      />
      <button onClick={handleSearch}>
        <Icon
          icon={"material-symbols:search"}
          style={{ fontSize: "2rem", color: "#303030" }}
        />
      </button>
    </SearchBarContainerStyled>
  );
};
