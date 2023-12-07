import styled from "styled-components";

export const Article = styled.article`
  --img-scale: 1.001;
  --title-color: black;
  position: relative;
  cursor: pointer;
  border-radius: 16px;
  box-shadow: none;
  background: #fff;
  transform-origin: center;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  max-width: 300px;

  h2 {
    font-size: 1.5rem;
    color: var(--title-color);
    transition: color 0.3s ease-out;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover,
  &:focus {
    --img-scale: 1.1;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;


export const ArticleFigure = styled.figure`
  margin: 0;
  padding: 0;
  aspect-ratio: 16 / 9;
  overflow: hidden;
`;

export const ArticleImage = styled.img`
  max-width: 100%;
  transform-origin: center;
  transform: scale(var(--img-scale));
  transition: transform 0.4s ease-in-out;
`;

export const ArticleBody = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  text-align: center;
  p{
    color: #000;
  }
`;

export const ArticleButtonStyled = styled.button`
  display: inline-flex;
  border-radius: 24px;
  border: none;
  font-weight: 600;
  width: fit-content;
  text-align: center;
  align-items: center;
  text-decoration: none;
  color: #2C2C2C;
  margin: auto;
  padding: .8em;
  background-color: yellow;
  transition: background-color 300ms;

  &:hover {
    background-color: #EABB00;
    color: #fff;
    cursor: pointer;
  }
`;

