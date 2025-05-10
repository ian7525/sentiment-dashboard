import styled from "styled-components";
import { useTranslation } from "react-i18next";

export type DateRange = "7days" | "30days" | "90days" | "all";

interface DateRangeSelectorProps {
  selectedRange: DateRange;
  onChange: (range: DateRange) => void;
}

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.secondary.light};
`;

const Option = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.primary.main : "transparent"};
  color: ${({ theme, $active }) =>
    $active ? "white" : theme.colors.text.primary};
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme, $active }) =>
      $active ? theme.colors.primary.main : theme.colors.secondary.light};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.light};
    position: relative;
    z-index: 1;
  }
`;

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  selectedRange,
  onChange,
}) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Option
        $active={selectedRange === "7days"}
        onClick={() => onChange("7days")}
      >
        {t("dashboard.dateRangeSelector.last7Days")}
      </Option>
      <Option
        $active={selectedRange === "30days"}
        onClick={() => onChange("30days")}
      >
        {t("dashboard.dateRangeSelector.last30Days")}
      </Option>
      <Option
        $active={selectedRange === "90days"}
        onClick={() => onChange("90days")}
      >
        {t("dashboard.dateRangeSelector.last90Days")}
      </Option>
      <Option $active={selectedRange === "all"} onClick={() => onChange("all")}>
        {t("dashboard.dateRangeSelector.allTime")}
      </Option>
    </Container>
  );
};

export default DateRangeSelector;
