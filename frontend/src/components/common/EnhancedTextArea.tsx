import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface EnhacedTextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  minRows?: number;
  maxRows?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  id?: string;
  label?: string;
  className?: string;
}

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const StyledTextArea = styled.textarea<{ $minRows: number; $maxRows: number }>`
    padding: 0.75rem;
    border 1px solid ${({ theme }) => theme.colors.secondary.light};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    font-family: inherit;
    min-height: ${({ $minRows }) => `${$minRows * 1.5}rem`};
    max-height: ${({ $maxRows }) => `${$maxRows * 1.5}rem`};
    resize: vertical;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary.main};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.light}40;
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.background.default};
        cursor: not-allowed;
    }
`;

const TextAreaFooter = styled.div`
  display: flex;
  justigy-content: flex-end;
  align-items: center;
  margin-top: 0.25rem;
  font-size: 0.75rem;
`;

const CharCounter = styled.span<{ $isLimit: boolean }>`
  color: ${({ $isLimit, theme }) =>
    $isLimit ? theme.colors.sentiment.negative : theme.colors.text.secondary};
  transition: color 0.2s ease-in-out;
`;

const EnhancedTextArea: React.FC<EnhacedTextAreaProps> = ({
  value,
  onChange,
  placeholder,
  maxLength = 5000,
  minRows = 4,
  maxRows = 10,
  disabled = false,
  autoFocus = false,
  id,
  label,
  className,
}) => {
  const { t } = useTranslation();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = maxLength
      ? e.target.value.slice(0, maxLength)
      : e.target.value;
    onChange(newValue);
  };

  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    console.log("isFocused=", isFocused);
  }, [isFocused]);

  const isAtLimit = maxLength ? value.length >= maxLength : false;

  return (
    <TextAreaWrapper className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledTextArea
        ref={textareaRef}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        $minRows={minRows}
        $maxRows={maxRows}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {maxLength > 0 && (
        <TextAreaFooter>
          <CharCounter $isLimit={isAtLimit}>
            {t("analysis.inputForm.charCount", {
              current: value.length,
              max: maxLength,
            })}
          </CharCounter>
        </TextAreaFooter>
      )}
    </TextAreaWrapper>
  );
};

export default EnhancedTextArea;
