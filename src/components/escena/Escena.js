import React, { useState } from "react";
import styled from "styled-components";

const StyledLine = styled.p`
border: 1px solid black;
border-radius: 25px;
padding: 10px;
margin: 20px;
text-align:center;
background-color: ${props => props.isColored && 'pink'};
`;

const StyledButton = styled.button`
width: 50%;
padding: 20px;
font-size: 20px;
cursor: pointer;
`

const Escena = (props) => {
    const [coloredLine, setColoredLine] = useState(0);

    const previousClick = () => {
        if (coloredLine > 0) {
            setColoredLine(coloredLine - 1);
        }
    };

    const nextClick = () => {
        if (coloredLine < props.param.length - 1) {
            setColoredLine(coloredLine + 1);
        }
    };

    return (
        <div>
            <StyledButton onClick={previousClick}>Anterior</StyledButton>
            <StyledButton onClick={nextClick}>Següent</StyledButton>

            {props.param.map((line, index) => (
                <StyledLine key={index} isColored={coloredLine === index}>{line}</StyledLine>
            ))}
        </div>);
}

export default Escena;
