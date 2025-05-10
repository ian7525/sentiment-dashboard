import { css } from "styled-components";

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

type BreakpointKey = keyof typeof breakpoints;

export const media = {
  up: (breakpoint: BreakpointKey) => {
    return (styles: TemplateStringsArray | string, ...args: any[]) => css`
      @media (min-width: ${breakpoints[breakpoint]}px) {
        ${typeof styles === "string" ? styles : css(styles, ...args)}
      }
    `;
  },
  down: (breakpoint: BreakpointKey) => {
    return (styles: TemplateStringsArray | string, ...args: any[]) => css`
      @media (min-width: ${breakpoints[breakpoint] - 0.02}px) {
        ${typeof styles === "string" ? styles : css(styles, ...args)}
      }
    `;
  },
  between: (minBreakpoint: BreakpointKey, maxBreakpoint: BreakpointKey) => {
    return (styles: TemplateStringsArray | string, ...args: any[]) => css`
      @media (min-width: ${breakpoints[
          minBreakpoint
        ]}px) and (max-width: ${breakpoints[maxBreakpoint] - 0.02}px) {
        ${typeof styles === "string" ? styles : css(styles, ...args)}
      }
    `;
  },
};
