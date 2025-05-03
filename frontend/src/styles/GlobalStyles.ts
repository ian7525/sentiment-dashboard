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
        background-color: ${({ theme }) =>
          theme.mode === "dark" ? "#121212" : "#f5f5f5"};
        color: ${({ theme }) => (theme.mode === "dark" ? "#e0e0e0" : "#333")}
        transition: background-color 0.3s ease, color 0.3 ease;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-bottom: 0.5em;
        font-weight: 600;
        color: ${({ theme }) => (theme.mode === "dark" ? "#e0e0e0" : "#333")}
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
        color: ${({ theme }) => (theme.mode === "dark" ? "#7bb9ff" : "#0066cc")}
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    }

    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) =>
          theme.mode === "light" ? "#f1f1f1" : "#2c2c2c"};
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) =>
          theme.mode === "light" ? "#c1c1c1" : "#555"};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) =>
          theme.mode === "light" ? "#a1a1a1" : "#777"};
    }
`;

export default GlobalStyles;
