import styled from "styled-components";

export const SearchBarContainerStyled = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  border-radius: 20px;
  padding: 0.5rem;
  border: 1px solid #000;
  background-color: #eee;

  div{
    position: relative
    display: flex;
  }

  input {
    outline: none;
    border: none;
    background: transparent;
    width: 100%;
  }

  button{
    outline: none;
    border: none;
    background: transparent;
    cursor:pointer;
  }

  ul{
    position: absolute;
    width: 100%;
    heigth: 100px;
    overflow-y: scroll;
    bottom: -200%;
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
`;
