import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/global";
import { SearchBarContainerStyled } from "./SearchBar.styled";

export const SearchBar = () => {
  const { searchText, setSearchText, searchType } = useContext(GlobalContext);
  const navigate = useNavigate();

  function handleSearch(e) {
    if (e.key === "Enter") {
      if (searchText === "") {
        return;
      } else {
        navigate(`/search/${searchText}`);
      }
    }
  }

  return (
    <SearchBarContainerStyled className="search-bar_container">
      <Icon
        icon={"material-symbols:search"}
        style={{ fontSize: "2rem", color: "#303030" }}
      />
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleSearch}
        placeholder={`${
          searchType?.includes("filter")
            ? "Buscar por trago por ingrediente"
            : "Buscar trago por nombre"
        }`}
      />
    </SearchBarContainerStyled>
  );
};
