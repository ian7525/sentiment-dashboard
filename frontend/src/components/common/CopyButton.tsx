import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useToast } from "../../contexts/ToastContext";

interface CopyBUttonProps {
  text: string;
  label?: string;
  successMessage?: string;
  className?: string;
}

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.background.default};
  border: 1px solid ${({ theme }) => theme.colors.secondary.light};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.paper};
    border-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const CopyIcon = styled.span`
  margin-right: 0.25rem;
  font-size: 0.875rem;
`;

const CopyButton: React.FC<CopyBUttonProps> = ({
  text,
  label,
  successMessage,
  className,
}) => {
  const { t } = useTranslation();
  const { addToast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      addToast(successMessage || t("common.copied"), "success", 2000);
    } catch (error) {
      console.error("Failed to copy text:", error);
      addToast(t("common.copyFiled"), "error");
    }
  };

  return (
    <Button onClick={handleCopy} className={className} title={t("common.copy")}>
      <CopyIcon>📋</CopyIcon>
      {label || t("common.copy")}
    </Button>
  );
};

export default CopyButton;
