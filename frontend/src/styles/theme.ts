const baseTheme = {
  spacing: (multiplier: number) => `${multiplier * 0.25}rem`,
  borderRadius: {
    small: "0.25rem",
    medium: "0.5rem",
    large: "1rem",
  },

  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Helvetica Neue", sans-serif',
    fontSize: {
      small: "0.875rem",
      medium: "1rem",
      large: "1.25rem",
      xl: "1.5rem",
      xxl: "2rem",
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    primary: {
      light: "#4da6ff",
      main: "#0066cc",
      dark: "#004c99",
    },
    secondary: {
      light: "#8c8c8c",
      main: "#595959",
      dark: "#333333",
    },
    sentiment: {
      positive: "#4caf50",
      neutral: "#ffca28",
      negative: "#f44336",
      mixed: "#9c27b0",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
    common: {
      white: "#ffffff",
      black: "#000000",
    },
  },
  shadows: {
    small: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    medium: "0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",
    large: "0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)",
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    primary: {
      light: "#7bb9ff",
      main: "#3385d6",
      dark: "#004c99",
    },
    secondary: {
      light: "#a6a6a6",
      main: "#737373",
      dark: "#404040",
    },
    sentiment: {
      positive: "#81c784",
      neutral: "#ffe082",
      negative: "#e57373",
      mixed: "#ce93d8",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#e0e0e0",
      secondary: "#a0a0a0",
    },
    common: {
      white: "#ffffff",
      black: "#000000",
    },
  },
  shadows: {
    small: "0 1px 3px rgba(0, 0, 0, 0.24), 0 1px 2px rgba(0, 0, 0, 0.32)",
    medium: "0 3px 6px rgba(0, 0, 0, 0.29), 0 2px 4px rgba(0, 0, 0, 0.23)",
    large: "0 10px 20px rgba(0, 0, 0, 0.29), 0 3px 6px rgba(0, 0, 0, 0.23)",
  },
};

export const theme = lightTheme;

export type Theme = typeof lightTheme;

export default theme;
