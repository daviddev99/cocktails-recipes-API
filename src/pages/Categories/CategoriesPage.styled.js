import styled from "styled-components";
import img from "../../assets/img/Portada 01.png";
import { Link } from "react-router-dom";

export const CategoriesSection = styled.section`
  width: 100%;
  background-image: url("${img}");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const CategoriesContaier = styled.div`
  margin: auto;
  max-width: 1000px;
  width: 83%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  overflow: none;

  h3 {
    font-size: 2em;
    color: #fff;
  }

  div{
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2em;
  }
`;

export const StyledLink = styled(Link)`
  background: yellow;
  color: #483285;
  text-align: center;
  font-weight: bold;
  padding: 1em;
  border-radius: 16px;
`;
