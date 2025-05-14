import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface TextLanguageSelectorProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SelectLabel = styled.label`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary.light};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const TextLanguageSelector: React.FC<TextLanguageSelectorProps> = ({
  value,
  onChange,
  disabled = false,
}) => {
  const { t } = useTranslation();

  return (
    <SelectWrapper>
      <SelectLabel htmlFor="text-language-selector">
        {t("analysis.inputForm.selectLanguage")}
      </SelectLabel>
      <Select
        id="text-language-selector"
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <option value="">{t("analysis.inputForm.autoDetect")}</option>
        <option value="en">English</option>
        <option value="zh-TW">繁體中文</option>
        <option value="zh-CN">简体中文</option>
        <option value="ja">日本語</option>
        <option value="ko">한국어</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
        <option value="es">Español</option>
        <option value="it">Italiano</option>
      </Select>
    </SelectWrapper>
  );
};

export default TextLanguageSelector;
