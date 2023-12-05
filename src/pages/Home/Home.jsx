import { useState, useEffect } from "react";
import axios from "axios";
import {
  MainContainerStyled,
  MainSectionStyled,
  PopularDrinkSection,
  TextContainer,
  FormContainerStyled,
  FormStyled,
  FormSectionStyled,
  ContactContainerStyled,
  InputContainer,
  DetailedText,
} from "./Home.styled";
import { Routes, Route } from "react-router-dom";
import { HomeContent } from "../../components/HomeContent/HomeContent";
import { SearchPage } from "../Search/SearchPage";
import { CocktailCard } from "../../components/CocktailCard/CocktailCard";
import { CategoriesPage } from "../Categories/CategoriesPage";
import { SingleCategory } from "../SingleCategory/SingleCategory";
import { useContext } from "react";
import { GlobalContext } from "../../context/global";
import Loader from "../../components/Loader/Loader";

export const Home = () => {
  const [cocktail, setCocktail] = useState({});
  const { isLoading, setIsLoading } = useContext(GlobalContext);

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

  return (
    <>
      <MainSectionStyled>
        <MainContainerStyled>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/search/:query" element={<SearchPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:category" element={<SingleCategory />} />
            <Route path="/search/:query" element={<SearchPage />} />
          </Routes>
        </MainContainerStyled>
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
          </FormContainerStyled>
        </ContactContainerStyled>
      </FormSectionStyled>
    </>
  );
};
