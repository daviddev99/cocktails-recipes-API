import { useContext } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { GlobalContext } from "../../context/global";
import {ButtonsContainerStyled, ButtonsStyled,ContentStyled} from './HomeContent.styled'
import {DetailedText} from '../../pages/Home/Home.styled'

export const HomeContent = () => {
  const {setSearchType} = useContext(GlobalContext)
  return (
    <ContentStyled >
      <h3>
        Encuentra las mejores recetas en <DetailedText>cócteles.</DetailedText>
      </h3>
      <p>¿Que trago te gustaría preparar hoy?</p>
      <SearchBar />
      <ButtonsContainerStyled >
        <ButtonsStyled onClick={()=>setSearchType('search.php?s=')}>
          Por nombre
        </ButtonsStyled>
        <ButtonsStyled onClick={()=>setSearchType('filter.php?i=')}>
          Por ingredientes
        </ButtonsStyled>
      </ButtonsContainerStyled>
    </ContentStyled>
  );
};
