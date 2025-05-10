import React, { ReactNode } from "react";
import styled from "styled-components";
import { media } from "../../styles/media";

type GridColumns = 1 | 2 | 3 | 4 | 6 | 12;

interface ResponsiveGridProps {
  children: ReactNode;
  xs?: GridColumns;
  sm?: GridColumns;
  md?: GridColumns;
  lg?: GridColumns;
  xl?: GridColumns;
  gap?: string;
  className?: string;
}

const GridContainer = styled.div<{
  $xs?: GridColumns;
  $sm?: GridColumns;
  $md?: GridColumns;
  $lg?: GridColumns;
  $xl?: GridColumns;
  $gap?: string;
}>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(${({ $xs }) => $xs || 1}, fr);
  gap: ${({ $gap }) => $gap || "1rem"};

  ${({ $sm }) =>
    $sm &&
    media.up("sm")`
        grid-template-column: repeat(${$sm}, 1fr)
    `}

  ${({ $md }) =>
    $md &&
    media.up("md")`
        grid-template-column: repeat(${$md}, 1fr)
    `}

    ${({ $lg }) =>
    $lg &&
    media.up("lg")`
        grid-template-column: repeat(${$lg}, 1fr)
    `}

    ${({ $xl }) =>
    $xl &&
    media.up("xl")`
        grid-template-column: repeat(${$xl}, 1fr)
    `}
`;

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  xs = 1,
  sm,
  md,
  lg,
  xl,
  gap,
  className,
}) => {
  return (
    <GridContainer
      $xs={xs}
      $sm={sm}
      $md={md}
      $lg={lg}
      $xl={xl}
      $gap={gap}
      className={className}
    >
      {children}
    </GridContainer>
  );
};

export default ResponsiveGrid;
