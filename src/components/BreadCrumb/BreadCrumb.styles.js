import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    color: var(--white);
    background: var(--medGrey);
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;
    
    a {
        text-decoration: none !important;
    }

    @media screen and (max-width: 320px) {
        padding: 4px;
    }
    @media screen and (max-width: 768px) {
        font-size: var(--fontsm);
    }
`;