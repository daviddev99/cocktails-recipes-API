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
  PopularDrinkContainer,
} from "./Home.styled";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { CocktailCard } from "../../components/CocktailCard/CocktailCard";
import { useContext } from "react";
import { GlobalContext } from "../../context/global";
import Loader from "../../components/Loader/Loader";
import { IconsComponent } from "../../components/IconsComponent/IconsComponent";
import { YellowCirle } from "../../components/YellowCircle/YellowCirle";

export const Home = () => {
  const [cocktail, setCocktail] = useState({});
  const { isLoading, setIsLoading } = useContext(GlobalContext);
  const { setSearchType, searchType, searchText, setHistory } =
    useContext(GlobalContext);

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

  return (
    <>
      <MainSectionStyled>
        <MainContainerStyled>
          <ContentStyled>
            <h3>Encuentra las mejores recetas en Cócteles.</h3>
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
                <StyledSearchButton onClick={handleSearch}>
                  Buscar
                </StyledSearchButton>
              </div>
              {/* {history.length > 1 ? <ul>
                {history.map((item) => <li key={item}>{item}</li>)}
              </ul> : ''} */}
            </ButtonsContainerStyled>
          </ContentStyled>
        </MainContainerStyled>
        <YellowCirle />
      </MainSectionStyled>

      <PopularDrinkSection>
        <MainContainerStyled>
          <PopularDrinkContainer>
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
                Los tragos{" "}
                {searchType === "search.php?s=" ? (
                  <DetailedText>más buscados</DetailedText>
                ) : (
                  "más buscados"
                )}
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
          </PopularDrinkContainer>
        </MainContainerStyled>
      </PopularDrinkSection>

      <FormSectionStyled>
        <ContactContainerStyled>
          <h3>
            No esperes más,<br></br>
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
                  placeholder="Inserta tu correo electronico"
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
