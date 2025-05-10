import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterSelectorProps {
  label: string;
  options: FilterOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 0.25rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.colors.secondary.light};
  background-color: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.875rem;
  min-width: 150px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.light + "40"};
  }

  option {
    background-color: ${({ theme }) => theme.colors.background.paper};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const FilterSelector: React.FC<FilterSelectorProps> = ({
  label,
  options,
  selectedValue,
  onChange,
}: FilterSelectorProps) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Label>{label}</Label>
      <Select value={selectedValue} onChange={(e) => onChange(e.target.value)}>
        <option value="all">{t("dashboard.filterSelector.optionAll")}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default FilterSelector;
