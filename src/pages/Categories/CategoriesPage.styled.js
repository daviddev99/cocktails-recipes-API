import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoriesContaier = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center; 
justify-content: center;
gap: 2em;

h3{
    font-size: 2em;
    color: #fff;
}
`;

export const StyledLink = styled(Link)`
background: yellow;
color: #483285;
text-align: center;
font-weight: bold;
padding: 1em;
border-radius: 16px;
`
