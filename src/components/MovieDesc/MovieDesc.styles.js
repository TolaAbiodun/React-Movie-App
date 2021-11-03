import styled from "styled-components";

// Import config
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
    background: ${({ backdrop }) => 
        backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieDesc 1s;


    @keyframes animateMovieDesc {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    height: auto;
    background: rgba(0, 0, 0, 0.7);
    margin: 0 auto;
    border-radius: 20px;
    

    @media screen and (max-width: 768px) {
        display: block;
        max-height: none;

    }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  overflow: hidden;
  color: var(--white);
  text-align: justify;

  @media screen and (max-width: 320px) {
      h1 {
        font-size: var(--fontlg)
      }
    }

  @media screen and (max-width: 376px) {
    padding: 10px 20px;
  }

  @media (max-width: 768px) {
    text-align: left;

    h1 {
      text-align: left;
    }
  }
  .rating-dir {
    display: flex;
    justify-content: flex-start;
    @media screen and (max-width: 376px) {
         h3 {
      font-size: 14px;
    }
    }
  }

  .score {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #fff;
    color: #000;
    font-weight: 850;
    margin: 0;
    border-radius: 50%;
  }

  .dir {
    margin: 0 0 0 50px;
    p {
      margin: 0;
    }

    h1 {
      @media screen and (max-width: 376px) {
        font-size: var(--fontsm);
      }
    }

    @media screen and (max-width: 376px) {
      margin: 0 0 0 30px;
         h3 {
      font-size: 14px;
    }
        p {
          font-size: 13px;
        }
      }
    }

  .run-time {
    margin: 0 0 0 50px;
    @media screen and (max-width: 376px) {
      margin: 0 0 0 20px;
      h3 {
        font-size: 14px;         
      }

      p {
        font-size: 13px;
      }
  }
`;
