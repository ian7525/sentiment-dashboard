import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme, lightTheme, darkTheme } from "../styles/theme";

type ThemeMode = "light" | "dark";

type ThemeWithMode = Theme & {
  mode: ThemeMode;
};

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  theme: ThemeWithMode;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("themeMode");
      return (savedTheme as ThemeMode) || "light";
    }
    return "light";
  });

  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const theme: ThemeWithMode = {
    ...(themeMode === "light" ? lightTheme : darkTheme),
    mode: themeMode,
  };

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
    // optional
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme, theme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
