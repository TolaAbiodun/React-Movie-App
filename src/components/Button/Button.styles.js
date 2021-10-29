import styled from "styled-components";

export const Wrapper = styled.button`
    width: 25px;
    height: 40px;
    min-width: 100px;
    border-radius: 20px;
    font-size: var(--fontsm);
    background: var(--darkGrey);
    color: var(--white);
    margin: 20px auto;
    outline: none;
    cursor: pointer;
    border:0;
    transition: all 0.3s;
    display: block;

    :hover {
        opacity: 0.8
    }

`;

