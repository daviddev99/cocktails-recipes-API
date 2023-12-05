import styled from "styled-components";
import img from "../../images/free-photo-of-restaurante-alcohol-barra-coctel.jpeg";

export const MainSectionStyled = styled.section`
  background-image: url(${img});
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  width: 100%;
  height: 90vh;
  @media (max-width: 640px){
    display: flex;
    align-items:center;
  }
`;

export const MainContainerStyled = styled.div`
  margin: auto;
  max-width: 1000px;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1098px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }

  @media (min-width: 640px) {
    padding-top: 2em;
    padding-bottom: 2em;
    height: fit-content;
  }
`;

export const PopularDrinkSection = styled.section`
  background-color: #444;
`;

export const TextContainer = styled.div`
  max-width: 50ch;
  display: flex;
  flex-direction: column;
  gap: 2em;
  color: #fff;
  text-wrap:balance

  p,
  strong {
    font-size: 1.5em;
  }

  h3 {
    font-size: 2.2em;
  }
`;

export const FormSectionStyled = styled.section`
  background-color: #444;
  color: #fff;
  `;
  export const FormContainerStyled = styled.div`
  text-wrap:balance;
  width: 100%;
  background-color: rgb(213, 232, 248);
  color: #000;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const FormStyled = styled.form`
  display: flex;
  max-width: 350px;
  width: 100%;
  flex-direction: column;
  gap: 2em;
  align-items: center;

  @media (max-width: 640px) {
    padding: 2em
  }

  span {
    display: flex;
    align-items: center;
    gap: 2.5em;
  }

  div > h3 > span {
    color: yellow;
    border-bottom: 2px solid yellow;
  }

  button {
    padding: 1em;
    background-color: yellow;
    outline: none;
    border-radius: 16px;
    width: 100%;
    text-align: center;
  }
`;

export const InputContainer = styled.div`
  background-color: #fff;
  padding: 1em;
  border-radius: 20px;
  width: 100%;

  input {
    border: none;
    outline: none;
    width: 100%;
  }
`;

export const ContactContainerStyled = styled.div`
  width: 83%;
  margin: auto;
  max-width: 1000px;
  height: 90vh;
  display: flex;
  gap: 2em;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;

  h3{
    font-size: 2em;
}
  }
`;

export const DetailedText = styled.span`
  color: yellow;
  border-bottom: 2px solid yellow;
`;
