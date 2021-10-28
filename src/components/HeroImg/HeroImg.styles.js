import styled from 'styled-components';

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom, 
        rgba(0,0,0,0) 40%, 
        rgba(0,0,0,0.67) 100%
    ),url(${({ image }) => image}), var(--darkGrey);
    background-size: 100% cover;
    background-position: center;
    height: 550px;
    position: relative;
    animation: animateHeroImg 1s;

    @keyframes animateHeroImg {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;


export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;

`;


export const Text = styled.div`
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  line-height: 1.6rem;
  text-align: justify;
  text-justify: inter-word;
  color: var(--white);
  z-index: 100;

  h1 {
    font-size: var(--fontxlg);

    @media screen and (max-width: 768px) {
      font-size: var(--fontlg);
    }
  }

  p {
    font-size: var(--fontmd);

    @media screen and (max-width: 768px) {
      font-size: var(--fontsm);
    }
  }
`;
