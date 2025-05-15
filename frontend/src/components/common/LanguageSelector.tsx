import React from "react";
import styled from "styled-components";
import { useLocale } from "../../contexts/LocaleContext";
import { useTranslation } from "react-i18next";

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing(2)};
`;

const Label = styled.label`
  margin-right: ${({ theme }) => theme.spacing(1)};
  color: white;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
`;

const Select = styled.select`
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.colors.secondary.light};
  background-color: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const LanguageSelector: React.FC = () => {
  const { t } = useTranslation();
  const { currentLocale, changeLocale, availableLocales } = useLocale();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLocale(e.target.value);
  };

  return (
    <SelectContainer>
      <Label htmlFor="language-select">{t("common.language")}:</Label>
      <Select
        id="language-select"
        value={currentLocale}
        onChange={handleChange}
      >
        {availableLocales.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.name}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};

export default LanguageSelector;
