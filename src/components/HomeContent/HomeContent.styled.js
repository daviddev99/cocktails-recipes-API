import styled from "styled-components";
export const ContentStyled = styled.div`
  max-width: 400px;
  padding: 0.8em;
  display: flex;
  align-items: center;
  z-index: 1;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  max-heigth: 700px;
  color: #fff;
  padding-top: 3em;
  padding-bottom: 3em;
  background: rgba(0, 0, 0, 0.356);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.226);
  backdrop-filter: blur(5.4px);
  border-radius: 16px;
  -webkit-backdrop-filter: blur(5.4px);
  border: 1px solid rgba(255, 255, 255, 0.25);

  h3 {
    font-size: 2em;
    text-align: center;
    text-wrap: balance;
  }

  span {
    color: yellow;
    border-bottom: 2px solid yellow;
  }

  p {
    font-size: 1.1em;
  }
`;

export const ButtonsContainerStyled = styled.div`
  display: flex;
  margin-top: 1em;
  gap: 2em;
`;

export const ButtonsStyled = styled.button`
  color: #fff;
  background-color: transparent;
  border: 0.5px solid #fff;
  padding: 0.7em;
  border-radius: 20px;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    color: yellow;
    border-color: yellow;
  }
`;
