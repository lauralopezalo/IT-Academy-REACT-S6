import React from "react";
import { StyledWelcome, StyledDescription, StyledStartButton} from "./Welcome.styles";


function Welcome(props) {
  return (
    <StyledWelcome>
      <StyledDescription>
        Benvingut al tutorial de la web de gestió empresarial. <br /> <br />A continuació trobaràs tota una sèrie de consells, entre els quals podràs navegar fent servir els botons d'avançar i retrocedir.
      </StyledDescription>
      <StyledStartButton onClick={props.startButtonClick}>
        Començar
      </StyledStartButton>
    </StyledWelcome>
  );
}

export default Welcome;