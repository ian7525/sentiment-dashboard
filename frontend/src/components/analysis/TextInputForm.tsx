import { useState, FormEvent, useEffect } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import ExampleTextSelector from "./ExampleTextSelector";
import TextLanguageSelector from "./TextLanguageSelector";
import EnhancedTextArea from "../common/EnhancedTextArea";
import { useTranslation } from "react-i18next";

interface TextInputFormProps {
  onSubmit: (text: string, language?: string) => void;
  isLoading: boolean;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ControlsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const CharCount = styled.span<{ $isLimit: boolean }>`
  align-self: flex-end;
  font-size: 0.875rem;
  color: ${({ $isLimit, theme }) =>
    $isLimit ? theme.colors.sentiment.negative : theme.colors.text.secondary};
`;

const MAX_CHARS = 5000;

const TextInputForm = ({ onSubmit, isLoading }: TextInputFormProps) => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState<string | undefined>(undefined);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const { t } = useTranslation();

  const isAtLimit = text.length >= MAX_CHARS;

  useEffect(() => {
    setSubmitEnabled(text.trim().length > 0 && !isAtLimit);
  }, [text]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (submitEnabled && !isLoading) {
      onSubmit(text.trim(), language);
    }
  };

  const handleExampleSelect = (exampleText: string) => {
    setText(exampleText);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ExampleTextSelector onSelectExample={handleExampleSelect} />

      <EnhancedTextArea
        id="analysis-text"
        value={text}
        onChange={setText}
        placeholder={t("analysis.inputForm.placeholder")}
        maxLength={MAX_CHARS}
        minRows={6}
        maxRows={15}
        disabled={isLoading}
        label={t("analysis.inputForm.label")}
      />

      <ControlsRow>
        <TextLanguageSelector
          value={language || ""}
          onChange={(e) => setLanguage(e.target.value || undefined)}
          disabled={isLoading}
        />

        <Controls>
          <Button
            variant="outlined"
            type="button"
            onClick={() => setText("")}
            disabled={!text || isLoading}
          >
            {t("analysis.inputForm.clearButton")}
          </Button>
          <Button
            type="submit"
            disabled={!text.trim() || isAtLimit || isLoading}
          >
            {isLoading
              ? t("analysis.inputForm.analyzingButton")
              : t("analysis.inputForm.analyzeButton")}
          </Button>
        </Controls>
      </ControlsRow>
    </Form>
  );
};

export default TextInputForm;
