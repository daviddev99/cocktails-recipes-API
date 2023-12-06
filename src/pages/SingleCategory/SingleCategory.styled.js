import styled from "styled-components";
import img from "../../assets/img/Portada 01.png";

export const SingleCategorySectionStyled = styled.section`
  width: 100%;
  height: 90vh;
  background-image: url("${img}");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  svg {
    position: absolute;
    right: 0;
    bottom: -20%;
  }
`;

export const SingleCategoryContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  color: #fff;
  width: 83%;
  margin: auto;
  padding-top: 2em;
  overflow: hidden;
  heigth: fit-content;

  h3 {
    font-size: 2em;
    color: #fff;
  }
`;
