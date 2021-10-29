import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 45px;
    margin: 0 auto;
    border-radius:35px;
    background: var(--medGrey);
    color: var(--white);

    img {
        position: absolute;
        left:25px; top: 10px; width: 27px;
    }
    input {
        position: absolute;
        font-size: 18px;
        height:45px;
        left: 10px; 
        padding: 0 0 0 50px;
        border: 0;
        width: 100%;
        background: transparent;
        color: var(--white);

        :focus {
            outline: none !important;
        }


    }
`;

