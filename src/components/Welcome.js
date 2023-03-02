import React from "react";
import styled from "styled-components";

const StyledWelcome = styled.div`
  display: flex;
  height: 100vh; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDescription = styled.div`
  font-size: 24px;
  margin: 0 35%;
`;

const StyledStartButton = styled.button`
  margin-top: 150px;
  width: 200px;
  height: 50px;
  font-size: 20px;
  border-radius: 25px;
  cursor: pointer;
`;

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