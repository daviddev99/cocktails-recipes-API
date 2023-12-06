import { Link } from "react-router-dom";
import { StyledHeader, HeaderContentContainer } from "./Header.styled";
import img from '../../assets/img/Logo - Cocktails.png'

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContentContainer>
        <span style={{color: '#222222'}}>Categorias</span>
        <Link to={"/"}>
          <img
            src={img}
            alt=""
          />
        </Link>

        <nav>
          <Link to={"/categories"}>Menu</Link>
          <Link to={"/categories"}>Recetas</Link>
        </nav>
      </HeaderContentContainer>
    </StyledHeader>
  );
};
