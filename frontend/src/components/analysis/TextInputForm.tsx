import { useState, FormEvent, useEffect } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import ExampleTextSelector from "./ExampleTextSelector";

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

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary.light};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  min-height: 150px;
  font-family: inherit;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.light}40;
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
  const [language, setLanguate] = useState<string | undefined>(undefined);
  const [submitEnabled, setSubmitEnabled] = useState(false);

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

      <TextAreaWrapper>
        <Label htmlFor="analysis-text">Enter text to analyze:</Label>
        <TextArea
          is="analysis-text"
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, MAX_CHARS))}
          placeholder="Paste or type text here for sentiment analysis, key phrase extraction, and entity recognition..."
        />
        <CharCount $isLimit={isAtLimit}>
          {text.length}/{MAX_CHARS} characters
        </CharCount>
      </TextAreaWrapper>

      <Controls>
        <Button
          variant="outlined"
          type="button"
          onClick={() => setText("")}
          disabled={!text || isLoading}
        >
          Clear
        </Button>
        <Button type="submit" disabled={!text.trim() || isAtLimit || isLoading}>
          {isLoading ? "Analyzing..." : "Analyze Text"}
        </Button>
      </Controls>
    </Form>
  );
};

export default TextInputForm;
