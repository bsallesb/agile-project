import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
        height: 100vh;
        color: #4d5156;
    }

    body, input, textarea, button {
        font-family: 'Roboto Condensed', sans-serif;
        color: #4d5156;
    }

    p, ul {
        margin: 0;
        color: #4d5156;
    }
`;
