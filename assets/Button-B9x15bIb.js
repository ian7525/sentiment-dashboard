import{j as r}from"./index-C3ve3BSI.js";import{d as e,l as o}from"./styled-DA1wJrz5.js";const t=o`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme:r})=>r.borderRadius.small};
  font-weight: ${({theme:r})=>r.typography.fontWeight.medium};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,a=e.button.withConfig({shouldForwardProp:r=>"fullwidth"!==r})`
  ${t}
  ${({variant:r})=>((r="primary")=>{switch(r){case"primary":return o`
        background-color: ${({theme:r})=>r.colors.primary.main};
        color: ${({theme:r})=>r.colors.common.white};

        &:hover:not(:disabled) {
          background-color: ${({theme:r})=>r.colors.primary.dark};
        }
      `;case"secondary":return o`
        background-color: ${({theme:r})=>r.colors.secondary.main};
        color: ${({theme:r})=>r.colors.common.white};

        &:hover:not(:disabled) {
          background-color: ${({theme:r})=>r.colors.secondary.dark};
        }
      `;case"outlined":return o`
        background-color: transparent;
        color: ${({theme:r})=>r.colors.primary.main};
        border: 1px solid ${({theme:r})=>r.colors.primary.main};

        &:hover:not(:disabled) {
          background-color: rgba(0, 102, 204, 0.05);
        }
      `;default:return o``}})(r)}
  ${({size:r})=>((r="medium")=>{switch(r){case"small":return o`
        padding: 0.3rem 0.8rem;
        font-size: 0.875rem;
      `;case"medium":return o`
        padding: 0.5rem 1rem;
        font-size: 1rem;
      `;case"large":return o`
        padding: 0.75rem 1.5rem;
        font-size: 1.125rem;
      `;default:return o``}})(r)}
  width: ${({fullwidth:r})=>r?"100%":"auto"};
`,i=({children:e,variant:o="primary",size:t="medium",fullwidth:i=!1,...n})=>r.jsx(a,{variant:o,size:t,fullwidth:i,...n,children:e});export{i as B};
