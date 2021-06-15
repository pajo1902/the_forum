import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        padding: 30px;
        background: ${(props) => props.theme.colors.mainDarkColor};
        font-family: ${(props) => props.theme.fonts.text};
    }

    h1 {
        color: white;
        margin-bottom: 10px;
    }

    h2 {
        color: white;
        margin-bottom: 10px;
    }

    h3 {
        color: white;
        margin-bottom: 10px;
    }

    a {
        color: white;
        text-decoration: none;
        :hover {
            text-decoration: underline;
        }
    }

    p {
        color: white;
    }

    ul {
        list-style: none;
    }
    
    input {
        font-family: ${(props) => props.theme.fonts.text};
        font-size: 0.8em;
    }

    textarea {
        font-family: ${(props) => props.theme.fonts.text};
        font-size: 0.8em;
    }

    select {
        font-family: ${(props) => props.theme.fonts.text};
        font-size: 0.8em;
    }

    button {
        font-family: ${(props) => props.theme.fonts.text};
        font-size: 0.8em;
    }
`;