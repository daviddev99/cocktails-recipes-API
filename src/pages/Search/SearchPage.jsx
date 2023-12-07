import { CocktailCard } from "../../components/CocktailCard/CocktailCard";
import axios from "axios";
import { Icon } from '@iconify/react';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/global";
import {
  SearchContainer,
  SearchSectionStyled,
  SliderStyled,
} from "./SearchPage.styled";
import Loader from "../../components/Loader/Loader";
import { MainContainerStyled } from "../Home/Home.styled";

export const SearchPage = () => {
  const { query } = useParams();
  const { searchType, isLoading, setIsLoading } = useContext(GlobalContext);
  const [results, setResults] = useState([]);

  const settings = {
    infinite: false,
    slidesToShow: results?.length > 2 ? 2.4 : 1,
    slidesToScroll: 1,
    nextArrow: (
<Icon icon="ph:arrow-left-bold" style={{fontSize: '1em',width: '1em', color: 'white', zIndex:'1'}} />
    ),
    prevArrow: (
<Icon icon="ph:arrow-right-bold" />
    ),
  };

  useEffect(() => {
    const printResults = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/${searchType}${query}`
        );
        setResults(res.data.drinks);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    printResults();
  }, [query, searchType]);

  return (
    <SearchSectionStyled>
      <MainContainerStyled>
        <SearchContainer>
          <SearchBar />
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <p>
                {results?.length} resultados según: {query}
              </p>
              <h3>Explore the next options</h3>
              <SliderStyled {...settings}>
                {results?.map((item) => {
                  const {
                    idDrink: id,
                    strDrink: title,
                    strDrinkThumb: image,
                  } = item;
                  return (
                    <Link key={id}>
                      <CocktailCard id={id} image={image} title={title} />
                    </Link>
                  );
                })}
              </SliderStyled>
            </>
          )}
        </SearchContainer>
      </MainContainerStyled>
    </SearchSectionStyled>
  );
};
