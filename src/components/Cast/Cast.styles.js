import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align: center;
    color: var(--white);
    background: var(--darkGrey);
    border-radius: 20px;
    padding: 10px;

    h3 {
        margin:10px 0 0 0 ;
    }

    p {
        margin: 5px 0;
    }

`;

export const Image = styled.img`
    border-radius: 15px;
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;

    :hover {
        opacity: 0.8;
    }
    
    @media screen and (max-width: 441px) {
        height: 350px;
        object-fit: center;
    }

`;

