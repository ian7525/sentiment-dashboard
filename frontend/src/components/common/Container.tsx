import React, { ReactNode } from "react";
import styled from "styled-components";
import { media, breakpoints } from "../../styles/media";

interface ContainerProps {
  children: ReactNode;
  fluid?: boolean;
  className?: string;
}

interface StyledContainerProps {
  $fluid?: boolean;
}

const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;

  ${({ $fluid }) =>
    !$fluid &&
    `
    ${media.up("sm")`
      max-width: ${breakpoints.sm - 24}px;
    `}
    ${media.up("md")`
      max-width: ${breakpoints.md - 24}px;
    `}
    ${media.up("lg")`
      max-width: ${breakpoints.lg - 24}px;
    `}
    ${media.up("xl")`
      max-width: ${breakpoints.xl - 24}px;
    `}
    ${media.up("xxl")`
      max-width: ${breakpoints.xxl - 24}px;
    `}
  `}
`;

const Container: React.FC<ContainerProps> = ({
  children,
  fluid = false,
  className,
}) => {
  return (
    <StyledContainer $fluid={fluid} className={className}>
      {children}
    </StyledContainer>
  );
};

export default Container;
