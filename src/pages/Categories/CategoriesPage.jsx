import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  CategoriesContaier,
  CategoriesSection,
  StyledLink,
} from "./CategoriesPage.styled";
import { GlobalContext } from "../../context/global";
import Loader from "../../components/Loader/Loader";

export const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const { isLoading, setIsLoading } = useContext(GlobalContext);
  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        );
        setCategories(res.data.drinks);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    getCategories();
  }, []);
  return (
    <CategoriesSection>
      <CategoriesContaier>
        <h3>🍸 Categorías 🍹</h3>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            {categories.map((category, index) => {
              return (
                <StyledLink
                  to={`/categories/${category.strCategory}`}
                  key={index}
                >
                  {category.strCategory}
                </StyledLink>
              );
            })}
          </div>
        )}
      </CategoriesContaier>
    </CategoriesSection>
  );
};
