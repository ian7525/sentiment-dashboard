import React from "react";
import styled from "styled-components";
import DateRangeSelector, { DateRange } from "./DateRangeSelector";
import FilterSelector from "./FilterSelector";
import { useTranslation } from "react-i18next";

export interface FilterState {
  dateRange: DateRange;
  language: string;
  sentiment: string;
}

interface FilterPanelProps {
  filters: FilterState;
  onFilterChange: (filterName: keyof FilterState, value: string) => void;
  languages: { value: string; label: string }[];
  sentiments: { value: string; label: string }[];
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const FilterControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const SectionLabel = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 0.25rem;
`;

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
  languages,
  sentiments,
}) => {
  const { t } = useTranslation();

  const handleDateRangeChange = (range: DateRange) => {
    onFilterChange("dateRange", range);
  };

  return (
    <Container>
      <Title>{t("dashboard.filterPanel.title")}</Title>
      <FilterControls>
        <FilterSection>
          <SectionLabel>{t("dashboard.filterPanel.sectionLabel")}</SectionLabel>
          <DateRangeSelector
            selectedRange={filters.dateRange}
            onChange={handleDateRangeChange}
          />
        </FilterSection>

        <FilterSelector
          label={t("dashboard.filterPanel.languageSelector")}
          options={languages}
          selectedValue={filters.language}
          onChange={(value) => onFilterChange("language", value)}
        ></FilterSelector>

        <FilterSelector
          label={t("dashboard.filterPanel.sentimentSelector")}
          options={sentiments}
          selectedValue={filters.sentiment}
          onChange={(value) => onFilterChange("sentiment", value)}
        ></FilterSelector>
      </FilterControls>
    </Container>
  );
};

export default FilterPanel;
