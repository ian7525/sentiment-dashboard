import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f5f5f5;
        color: #333;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-bottom: 0.5em;
        font-weight: 600;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.75rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    p {
        margin-bottom: 1rem;
    }

    a {
        color: #0066cc;
        text-decoration: none;
        
        &:hover {
        text-decoration: underline;
        }
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;
