import styled from "styled-components";

// create header styles

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;

export const LogoImg = styled.img`
    width: 100px;

    @media screen and (max-width: 576px) {
        width: 150px;
    }
`;

export const TMDBLogoImg = styled.img`
    width: 120px;

    @media screen and (max-width: 576px) {
        width: 100px
    }
`;

