import { Link } from "react-router-dom";
import { StyledHeader, HeaderContentContainer } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContentContainer>
        <Link to={"/"}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1247/1247395.png"
            alt=""
          />
        </Link>

        <div>
          <Link to={"/categories"}>Categorías</Link>
        </div>
      </HeaderContentContainer>
    </StyledHeader>
  );
};
