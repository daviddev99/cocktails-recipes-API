import { StyledFooter } from "./Footer.styled";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Aviso legal. Política de privacidad. Política de cookies. Contacto{" "}
        <Icon icon="uiw:copyright" style={{fontSize: '1.2em'}}/> holacocteles.com
      </p>
    </StyledFooter>
  );
};
