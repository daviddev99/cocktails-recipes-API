import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import { CocktailCard } from "../../components/CocktailCard/CocktailCard";
import { SliderStyled } from "../Search/SearchPage.styled";
import {
  SingleCategoryContainerStyled,
  SingleCategorySectionStyled,
} from "./SingleCategory.styled";
import { GlobalContext } from "../../context/global";
import Loader from "../../components/Loader/Loader";

export const SingleCategory = () => {
  const { category } = useParams();
  const [results, setResults] = useState([]);
  const { isLoading, setIsLoading } = useContext(GlobalContext);

  const settings = {
    infinite: false,
    slidesToShow: results?.length > 2 ? 2.4 : 1,
    slidesToScroll: 1,
    nextArrow: (
      <Icon
        icon="ph:arrow-left-bold"
        style={{ fontSize: "1em", width: "1em", color: "white", zIndex: "1" }}
      />
    ),
    prevArrow: <Icon icon="ph:arrow-right-bold" />,
  };

  useEffect(() => {
    const getDrinksByCategory = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
        );
        setResults(res.data.drinks);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getDrinksByCategory();
  }, [category]);
  return (
    <SingleCategorySectionStyled>
      <SingleCategoryContainerStyled>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h3>{category}</h3>
            <SliderStyled {...settings}>
              {results.map((cocktail) => {
                const {
                  idDrink: id,
                  strDrink: title,
                  strDrinkThumb: image,
                } = cocktail;
                return (
                  <CocktailCard id={id} title={title} image={image} key={id} />
                );
              })}
            </SliderStyled>
          </>
        )}
      </SingleCategoryContainerStyled>
    </SingleCategorySectionStyled>
  );
};
