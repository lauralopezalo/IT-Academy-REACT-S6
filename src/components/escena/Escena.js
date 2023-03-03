import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../../assets/img/1.jpg"

const StyledLine = styled.p`
    border: 1px solid black;
    border-radius: 25px;
    padding: 10px;
    margin: 20px;
    text-align: center;
    background-color: ${(props) => props.isColored && "pink"};
`;

const StyledButton = styled.button`
    width: 50%;
    padding: 20px;
    font-size: 20px;
    cursor: pointer;
`;

const StyledBody = styled.body`
    height: 100vh;
    background-image: ${(props) => `url(${props.bgImg})`};
    background-size: cover;
    background-repeat: no-repeat;
    
`;

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
