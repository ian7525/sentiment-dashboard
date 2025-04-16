import { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outlined";
  size?: "small" | "medium" | "large";
  fullwidth?: boolean;
}

const ButtonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const getVariantStyles = (variant: ButtonProps["variant"] = "primary") => {
  switch (variant) {
    case "primary":
      return css`
        background-color: ${({ theme }) => theme.colors.primary.main};
        color: ${({ theme }) => theme.colors.common.white};

        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.primary.dark};
        }
      `;
    case "secondary":
      return css`
        background-color: ${({ theme }) => theme.colors.secondary.main};
        color: ${({ theme }) => theme.colors.common.white};

        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.secondary.dark};
        }
      `;
    case "outlined":
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary.main};
        border: 1px solid ${({ theme }) => theme.colors.primary.main};

        &:hover:not(:disabled) {
          background-color: rgba(0, 102, 204, 0.05);
        }
      `;
    default:
      return css``;
  }
};

const getSizeStyles = (size: ButtonProps["size"] = "medium") => {
  switch (size) {
    case "small":
      return css`
        padding: 0.3rem 0.8rem;
        font-size: 0.875rem;
      `;
    case "medium":
      return css`
        padding: 0.5rem 1rem;
        font-size: 1rem;
      `;
    case "large":
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 1.125rem;
      `;
    default:
      return css``;
  }
};

// Styled-component provides shouldForwardProp to filter the attributes which doesn't want to be passed to the DOM element
const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "fullwidth",
})<ButtonProps>`
  ${ButtonBase}
  ${({ variant }) => getVariantStyles(variant)}
  ${({ size }) => getSizeStyles(size)}
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "auto")};
`;

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  fullwidth = false,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} fullwidth={fullwidth} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
