import {
  Article,
  ArticleFigure,
  ArticleImage,
  ArticleBody,
  ArticleButtonStyled,
} from "./CocktailCard.styled";
export const CocktailCard = ({ id, image, title }) => {
  return (
    <Article>
      <ArticleFigure>
        <ArticleImage src={image} alt="" />
      </ArticleFigure>
      <ArticleBody>
        <h2>{title}</h2>
        <p>El jugo de limón con la mezcla de plátano no tienen comparación.</p>
        <ArticleButtonStyled className="article-button">
          Ver receta
          {/* <Icon icon="icon-park:cocktail" style={{fontSize: '1.5em' }}/> */}
        </ArticleButtonStyled>
      </ArticleBody>
    </Article>
  );
};
