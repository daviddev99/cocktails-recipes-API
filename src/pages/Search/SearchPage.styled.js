import styled from "styled-components";

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

export const GridContainer = styled.div`
width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  overflow: auto;
  max-height: 350px;
  @media (max-width: 1280px) {
    max-height: 550px;
  }
`;
