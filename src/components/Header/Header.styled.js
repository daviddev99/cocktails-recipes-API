import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252525;
  text-decoration: none;

  div{
    display: flex; 
    align-items: center;
  }

  img{
    width: 4em;
  }
`;

export const HeaderContentContainer = styled.div`
  width: 83%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
`;
