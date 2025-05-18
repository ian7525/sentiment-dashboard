import{j as e}from"./index-C3ve3BSI.js";import{d as r,m as t}from"./styled-DA1wJrz5.js";import{u as s}from"./i18n-vendor-BJcBcLSs.js";const i=t`
    0%{
        tranform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg)
    }
`,o=r.div`
  display: inline-block;
  position: relative;
  width: ${({$size:e})=>{switch(e){case"small":return"24px";case"medium":return"48px";default:return"36px"}}};
  height: ${({$size:e})=>{switch(e){case"small":return"24px";case"medium":return"48px";default:return"36px"}}};

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
    border-radius: 50%;
    border: 2px solid ${({$color:e})=>e};
    border-color: ${({$color:e})=>e} transparent
      ${({$color:e})=>e} transparent;
    animation: ${i} 1.2s linear infinite;
  }
`,n=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`,a=r.span`
  margin-left: 1rem;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 1rem;
`,l=({size:r="medium",color:t="#0066cc"})=>e.jsx(o,{$size:r,$color:t}),d=()=>{const{t:r}=s();return e.jsxs(n,{children:[e.jsx(l,{}),e.jsx(a,{children:r("stats.title")})]})};export{d as L,l as a};
