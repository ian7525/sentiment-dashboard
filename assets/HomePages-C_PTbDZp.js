import{j as e}from"./index-Vsd6LYTa.js";import{d as t}from"./styled-COyek2TH.js";import{C as s}from"./Card-DQj5eJ8z.js";import{B as i}from"./Button-DhR5qo6f.js";import{f as r}from"./react-vendor-DgofhK1e.js";import{u as a}from"./i18n-vendor-CClJGxDl.js";const o=t.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,n=t.h1`
  margin-bottom: 1.5rem;
  color: ${({theme:e})=>e.colors.text.primary};
`,m=t.p`
  margin-bottom: 2rem;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 1.1rem;
`,l=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,c=t.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.5rem;
`,d=t.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  &:before {
    content: "✓";
    color: ${({theme:e})=>e.colors.sentiment.positive};
    margin-right: 0.5rem;
    font-weight: bold;
  }
`,h=()=>{const t=r(),{t:h}=a();return e.jsxs(o,{children:[e.jsx(n,{children:h("home.welcome")}),e.jsx(m,{children:h("home.description")}),e.jsxs(l,{children:[e.jsxs(s,{title:h("home.features.analysis.title"),children:[e.jsxs(c,{children:[e.jsx(d,{children:h("home.features.analysis.sentimentClassification")}),e.jsx(d,{children:h("home.features.analysis.sentimentScore")}),e.jsx(d,{children:h("home.features.analysis.keyPhrase")}),e.jsx(d,{children:h("home.features.analysis.entityRecognition")})]}),e.jsx(i,{onClick:()=>t("/analysis"),children:h("home.features.analysis.startButton")})]}),e.jsxs(s,{title:h("home.features.statistics.title"),children:[e.jsxs(c,{children:[e.jsx(d,{children:h("home.features.statistics.requestTracking")}),e.jsx(d,{children:h("home.features.statistics.languageDistribution")}),e.jsx(d,{children:h("home.features.statistics.sentimentTrends")}),e.jsx(d,{children:h("home.features.statistics.visualData")})]}),e.jsx(i,{variant:"secondary",onClick:()=>t("/stats"),children:h("home.features.statistics.viewButton")})]})]})]})};export{h as default};
