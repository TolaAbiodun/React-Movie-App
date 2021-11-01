import { createGlobalStyle } from 'styled-components';

// export global styles
export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontsm: 1rem;
        --fontmd: 1.2rem;
        --fontlg: 1.5rem;
        --fontxlg: 2.5rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }

    body {
        margin:0;
        padding:0;

        h1{
            font-size:2rem;
            font-weight:700;
            color: var(--white);
        }

        h3 {
            font-size:1.2rem;
            font-weight:600;
        }

        p {
            font-size:1rem;
            color: var(--white);
        }

        span {
            font-size:var(--fontmd);
            color: var(--white);
            padding-right: 10px;
    }

    }
`;