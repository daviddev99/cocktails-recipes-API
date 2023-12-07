import styled from "styled-components";
import img from "../../assets/img/Portada 01.png";

export const MainSectionStyled = styled.section`
  width: 100%;
  height: 90vh;
  background-image: url("${img}");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const MainContainerStyled = styled.div`
  margin: auto;
  max-width: 1000px;
  width: 83%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: none;
`;

export const ContentStyled = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-heigth: 700px;
  color: #fff;
  background: transparent
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.226);
  border-radius: 16px;
  
  h3 {
    text-wrap: balance;
    max-width: 15ch;
    font-size: 3em;
  }

  span {
    color: yellow;
    border-bottom: 2px solid yellow;
  }

  p {
    margin-top: 2em;
    font-size: 1.1em;
  }
`;

export const ButtonsContainerStyled = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;

  div {
    display: flex;
    gap: 1em;
  }
`;

export const ButtonsStyled = styled.button`
  color: ${({ active }) => (active ? "yellow" : "#fff")};
  background-color: transparent;
  border: ${({ active }) =>
    active ? "0.5px solid yellow;" : "0.5px solid #fff;"};
  padding: 0.7em;
  border-radius: 20px;
  cursor: pointer;
  transition: all 300ms;
  text-wrap: nowrap;
`;

export const StyledSearchButton = styled.button`
  padding: 0.5em 1.2em;
  text-align: center;
  background-color: yellow;
  border: none;
  border-radius: 16px;
  cursor: pointer;

  &:active {
    background-color: #ebdc00;
    color: #fff;
  }
`;

export const PopularDrinkSection = styled.section`
  background-color: #383838;
  width: 100%;
  height: 90vh;
`;

export const PopularDrinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 940px) {
    flex-direction: column;
    align-items: center;
    gap: 4em;
  }
`;

export const TextContainer = styled.div`
  max-width: 50ch;
  display: flex;
  flex-direction: column;
  gap: 2em;
  color: #fff;
  text-wrap: balance;

  h3 {
    font-size: 2.2em;
  }
`;

export const FormSectionStyled = styled.section`
  background-color: #383838;
  color: #fff;
`;
export const FormContainerStyled = styled.div`
  text-wrap: balance;
  width: 100%;
  background-color: #f1f1f1;
  color: #000;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  position: relative;

  div {
    width: 100%;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }

  div {
    display: 100%;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  max-width: 350px;
  width: 100%;
  flex-direction: column;
  gap: 2em;
  align-items: center;

  @media (max-width: 800px) {
    padding: 2em;
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
    border: none;
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
