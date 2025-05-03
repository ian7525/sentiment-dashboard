import React from "react";
import styled from "styled-components";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";

const ToggleButton = styled.button`
  background: ${({ theme }) =>
    theme.mode === "light"
      ? theme.colors.background.paper
      : theme.colors.background.default};
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem;
  position: relative;
  width: 60px;
  height: 30px;
  transition: all 0.3 ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.light}60;
  }
`;

const SunIcon = styled.div`
  color: #f9d71c;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const MoonIcon = styled.div`
  color: #c5c5e7;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const Slider = styled.span<{ $isDark: boolean }>`
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 50%;
  position: absolute;
  left: ${({ $isDark }) => ($isDark ? "32px" : "4px")};
  height: 22px;
  width: 22px;
  transition: all 0.3s ease;
`;

const ThemeToggle: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();
  const isDark = themeMode === "dark";

  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label={`Swith to ${isDark ? "light" : "dark"} theme`}
    >
      <SunIcon>
        <FiSun />
      </SunIcon>
      <MoonIcon>
        <FiMoon />
      </MoonIcon>
      <Slider $isDark={isDark}></Slider>
    </ToggleButton>
  );
};

export default ThemeToggle;
