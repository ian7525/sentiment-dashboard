import styled from "styled-components";
import Button from "../common/Button";
import { useTranslation } from "react-i18next";

interface ExampleTextSelectorProps {
  onSelectExample: (text: string) => void;
}

const Container = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.p`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const examples = [
  {
    label: "Positive Review",
    type: "positive",
  },
  {
    label: "Negative Feedback",
    type: "negative",
  },
  {
    label: "Neutral Description",
    type: "neutral",
  },
  {
    label: "Mixed Opinion",
    type: "mixed",
  },
];

const ExampleTextSelector = ({ onSelectExample }: ExampleTextSelectorProps) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Label>{t("analysis.example.title")}</Label>
      <ButtonGroup>
        {examples.map((example, index) => (
          <Button
            key={index}
            size="medium"
            variant="outlined"
            fullwidth={true}
            onClick={() => onSelectExample(example.type)}
          >
            {example.label}
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
};

export default ExampleTextSelector;
