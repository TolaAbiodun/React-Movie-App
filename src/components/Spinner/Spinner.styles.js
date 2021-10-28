import styled from 'styled-components';

export const Spinner = styled.div`
    border: 3px solid var(--lightGrey);
    border-top: 3px solid var(--medGrey);
    border-radius: 50%;
    width:40px;
    height:40px;
    margin: 20px auto;
    animation: spin 0.7s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;