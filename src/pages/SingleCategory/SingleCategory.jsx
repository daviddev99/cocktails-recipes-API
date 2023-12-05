import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CocktailCard } from "../../components/CocktailCard/CocktailCard";
import { GridContainer } from "../Search/SearchPage.styled";
import { SingleCategoryContainerStyled } from "./SingleCategory.styled";
import { GlobalContext } from "../../context/global";
import Loader from "../../components/Loader/Loader";

export const SingleCategory = () => {
  const { category } = useParams();
  const [results, setResults] = useState([]);
  const {isLoading, setIsLoading} = useContext(GlobalContext);

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
    <SingleCategoryContainerStyled>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3>{category}</h3>
          <GridContainer>
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
          </GridContainer>
        </>
      )}
    </SingleCategoryContainerStyled>
  );
};
