import styled from 'styled-components';

export const ThumbNails = styled.img`
    width: 100%;
    max-width: 700px;
    transition: all 0.2s;
    border-radius: 20px;
    object-fit: cover;
    animation: animateThumbnail 0.5s;

    :hover {
        opacity: 0.9;
        cursor: pointer;
    }


    @keyframes animateThumbnail {
        from {
            opacity: 0;
        }
        to { 
            opacity: 1;
        }
    }
`;

