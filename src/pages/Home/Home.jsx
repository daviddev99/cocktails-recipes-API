import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MainContainerStyled,
  MainSectionStyled,
  TextContainer,
  FormContainerStyled,
  FormStyled,
  FormSectionStyled,
  ContactContainerStyled,
  InputContainer,
  DetailedText,
  PopularDrinkSection,
  ContentStyled,
  ButtonsContainerStyled,
  ButtonsStyled,
  StyledSearchButton,
} from "./Home.styled";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { CocktailCard } from "../../components/CocktailCard/CocktailCard";
import { useContext } from "react";
import { GlobalContext } from "../../context/global";
import Loader from "../../components/Loader/Loader";
import { IconsComponent } from "../../components/IconsComponent/IconsComponent";

export const Home = () => {
  const [cocktail, setCocktail] = useState({});
  const { isLoading, setIsLoading } = useContext(GlobalContext);
  const { setSearchType, searchText, searchType } = useContext(GlobalContext);

  useEffect(() => {
    const getMostChosenDrink = async () => {
      try {
        const res = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );
        setCocktail(res.data.drinks[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMostChosenDrink();
  }, []);

  const navigate = useNavigate();
  const handleCategoryPage = () => {
    navigate("/categories");
  };

  const handleNavigate = () => {
    if (!searchText.length) return;
    navigate(`/search/${searchText}`);
  };

  return (
    <>
      <MainSectionStyled>
        <MainContainerStyled>
          <ContentStyled>
            <h3>
              Encuentra las mejores recetas en{" "}
              <DetailedText>Cócteles.</DetailedText>
            </h3>
            <p>¿Que trago te gustaría preparar hoy?</p>
            <ButtonsContainerStyled>
              <ButtonsStyled
                onClick={() => setSearchType("search.php?s=")}
                active={searchType === "search.php?s="}
              >
                Por nombre
              </ButtonsStyled>
              <ButtonsStyled
                onClick={() => setSearchType("filter.php?i=")}
                active={searchType === "filter.php?i="}
              >
                Por ingredientes
              </ButtonsStyled>
              <ButtonsStyled onClick={handleCategoryPage}>
                Por categoría
              </ButtonsStyled>
              <div>
                <SearchBar />
                <StyledSearchButton onClick={handleNavigate}>
                  Buscar
                </StyledSearchButton>
              </div>
            </ButtonsContainerStyled>
          </ContentStyled>
        </MainContainerStyled>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="226"
          height="226"
          viewBox="0 0 168 226"
          fill="none"
        >
          <circle cx="113" cy="113" r="113" fill="#FFDE59" />
        </svg>
      </MainSectionStyled>

      <PopularDrinkSection>
        <MainContainerStyled>
          {isLoading ? (
            <Loader />
          ) : (
            <CocktailCard
              id={cocktail.idDrink}
              image={cocktail.strDrinkThumb}
              title={cocktail.strDrink}
            />
          )}
          <TextContainer>
            <h3>
              Los tragos <DetailedText>más elegidos</DetailedText>
            </h3>
            <p>¡Explora un mundo de sabores con cada sorbo!</p>
            <strong>
              Descubre nuestra exquisita sección de tragos, donde cada día te
              presentamos las elecciones mas elegantes y cautivadoras.
            </strong>
            <p>
              ¡Deleita tus sentidos con nuestras creaciones únicas y vive
              momentos inolvidables con cada copa!
            </p>
          </TextContainer>
        </MainContainerStyled>
      </PopularDrinkSection>

      <FormSectionStyled>
        <ContactContainerStyled>
          <h3>
            No esperes mas,<br></br>
            conviertete en un <DetailedText>experto coctelero</DetailedText>
          </h3>
          <p>
            Recibe en tu correo las mejores recetas, trucos, consejos y mucho
            más.
          </p>
          <FormContainerStyled>
            <div></div>
            <FormStyled action="#">
              <InputContainer>
                <input
                  type="text"
                  placeholder="Inserta tu direccion de correo"
                />
              </InputContainer>
              <span>
                <input type="checkbox" />
                <p>Acepto la politica de privacidad</p>
              </span>
              <button>Suscribirme ahora</button>
            </FormStyled>
            <IconsComponent />
          </FormContainerStyled>
        </ContactContainerStyled>
      </FormSectionStyled>
    </>
  );
};
