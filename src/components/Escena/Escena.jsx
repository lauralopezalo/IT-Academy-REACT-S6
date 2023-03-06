import React, { useState } from "react";
import img1 from "../../assets/img/1.jpg";
import { StyledBody, StyledLine, StyledButton } from "./Escena.styles";


const Escena = (props) => {
    const [coloredLine, setColoredLine] = useState(0);
    const [bgImage, setBgImage] = useState(img1);

    const handleNavigationButtons = (increment) => {
        const next = coloredLine + increment;
        if (next >= 0 && next < props.param.length) {
            setColoredLine(next);
            setBgImage(props.param[next].img);
        }
    }
    
    return (
        <div>
            <StyledBody bgImg={bgImage}>
                <StyledButton onClick={() => handleNavigationButtons(-1)}>Anterior</StyledButton>
                <StyledButton onClick={() => handleNavigationButtons(1)}>Següent</StyledButton>

                {props.param.map((scene, index) => (
                    <StyledLine key={index} isColored={coloredLine === index}>
                        {scene.txt}
                    </StyledLine>
                ))}
            </StyledBody>
        </div>
    );
};

export default Escena;
