import styled from "styled-components";

export const StyledLine = styled.p`
    border: 1px solid black;
    border-radius: 25px;
    padding: 10px;
    margin: 20px;
    text-align: center;
    background-color: ${(props) => props.isColored && "pink"};
`;

export const StyledButton = styled.button`
    width: 50%;
    padding: 20px;
    font-size: 20px;
    cursor: pointer;
`;

export const StyledBody = styled.body`
    /* margin: 0; */
    height: 100vh;
    background-image: ${(props) => `url(${props.bgImg})`};
    background-size: cover;
    background-repeat: no-repeat;
    
`;