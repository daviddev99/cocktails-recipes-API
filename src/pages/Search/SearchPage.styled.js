import styled from "styled-components";
import img from '../../assets/img/Portada 02.png'
import Slider from "react-slick";

export const SearchSectionStyled = styled.section`
  width: 100%;
  height: 90vh;
  background-image: url("${img}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  color: #fff;
  width: 100%;
  padding-top:2em;
  overflow:hidden;
  heigth: fit-content;
`;

export const SliderStyled = styled(Slider)`
display: flex;
gap: 2em;
width: 100%;
`;
