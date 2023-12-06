import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center; /* Cambiado a center */
  align-items: center;
  background-color: #222222;
  text-decoration: none;
  position: relative;
`;

export const HeaderContentContainer = styled.div`
  width: 83%;
  max-width: 1000px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 2em;
    justify-content: space-between;
  }

  img {
    max-width: 100%;
    height: 4em;
  }

  a{
    border-bottom: 1px solid transparent;
    &:hover  {
      color: yellow;
      border-bottom: 1px solid yellow;
    }
  }
`;