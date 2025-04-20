import styled, { keyframes } from "styled-components";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

const spin = keyframes`
    0%{
        tranform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg)
    }
`;

const SpinnerContainer = styled.div<{ $size: string; $color: string }>`
  display: inline-block;
  position: relative;
  width: ${({ $size }) => {
    switch ($size) {
      case "small":
        return "24px";
      case "medium":
        return "48px";
      default:
        return "36px";
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case "small":
        return "24px";
      case "medium":
        return "48px";
      default:
        return "36px";
    }
  }};

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
    border-radius: 50%;
    border: 2px solid ${({ $color }) => $color};
    border-color: ${({ $color }) => $color} transparent
      ${({ $color }) => $color} transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const LoadingText = styled.span`
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
`;

const LoadingSpinner = ({
  size = "medium",
  color = "#0066cc",
}: LoadingSpinnerProps) => {
  return <SpinnerContainer $size={size} $color={color} />;
};

export const LoadingOverlay = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner />
      <LoadingText>Processing, please wait...</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingSpinner;
