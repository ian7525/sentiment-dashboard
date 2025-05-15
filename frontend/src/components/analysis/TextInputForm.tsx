import { useState, useEffect } from "react";
import ExampleTextSelector from "./ExampleTextSelector";

interface TextInputFormProps {
  onSubmit: (text: string, language?: string) => void;
  isLoading: boolean;
}

const MAX_CHARS = 5000;

const TextInputForm = ({ onSubmit, isLoading }: TextInputFormProps) => {
  const [text, setText] = useState("");

  const isAtLimit = text.length >= MAX_CHARS;

  useEffect(() => {
    const trimText = text.trim();
    const isValid = trimText.length > 0 && !isAtLimit;
    if (isValid && !isLoading) {
      onSubmit(trimText);
    }
  }, [text]);

  const handleExampleSelect = (exampleText: string) => {
    setText(exampleText);
  };

  return (
    <>
      <ExampleTextSelector onSelectExample={handleExampleSelect} />
    </>
  );
};

export default TextInputForm;
