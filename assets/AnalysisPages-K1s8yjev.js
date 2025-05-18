import{j as e,u as t}from"./index-Vsd6LYTa.js";import{r as s}from"./react-vendor-DgofhK1e.js";import{d as r,l as i}from"./styled-COyek2TH.js";import{C as a}from"./Card-DQj5eJ8z.js";import{B as o}from"./Button-DhR5qo6f.js";import{u as n}from"./i18n-vendor-CClJGxDl.js";import{L as l}from"./LoadingSpinner-CFj02HWI.js";const c=r.div`
  margin-bottom: 1rem;
`,d=r.p`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.colors.text.secondary};
`,m=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,u=[{label:"Positive Review",type:"positive"},{label:"Negative Feedback",type:"negative"},{label:"Neutral Description",type:"neutral"},{label:"Mixed Opinion",type:"mixed"}],x=({onSelectExample:t})=>{const{t:s}=n();return e.jsxs(c,{children:[e.jsx(d,{children:s("analysis.example.title")}),e.jsx(m,{children:u.map(((s,r)=>e.jsx(o,{size:"medium",variant:"outlined",fullwidth:!0,onClick:()=>t(s.type),children:s.label},r)))})]})},h=({onSubmit:t,isLoading:r})=>{const[i,a]=s.useState(""),o=i.length>=5e3;s.useEffect((()=>{const e=i.trim();e.length>0&&!o&&!r&&t(e)}),[i]);return e.jsx(e.Fragment,{children:e.jsx(x,{onSelectExample:e=>{a(e)}})})},p=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  background-color: ${({theme:e})=>e.colors.background.default};
  border: 1px solid ${({theme:e})=>e.colors.secondary.light};
  border-radius: ${({theme:e})=>e.borderRadius.small};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.colors.background.paper};
    border-color: ${({theme:e})=>e.colors.primary.main};
    color: ${({theme:e})=>e.colors.primary.main};
  }
`,g=r.span`
  margin-right: 0.25rem;
  font-size: 0.875rem;
`,y=({text:s,label:r,successMessage:i,className:a})=>{const{t:o}=n(),{addToast:l}=t();return e.jsxs(p,{onClick:async()=>{try{await navigator.clipboard.writeText(s),l(i||o("common.copied"),"success",2e3)}catch(e){l(o("common.copyFiled"),"error")}},className:a,title:o("common.copy"),children:[e.jsx(g,{children:"📋"}),r||o("common.copy")]})},b=r.div`
  display: grid;
  grid-template-colums: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`,v=r.div`
  margin-bottom: 0, 5rem;
  display: flex;
  flex-wrap: wrap;
`,f=r.span`
    font-weight: ${({theme:e})=>e.typography.fontWeight.medium}
    margin-right: 0.5rem;
    color: ${({theme:e})=>e.colors.text.secondary}
`,j=r.span`
  color: ${({theme:e})=>e.colors.text.primary};
`,$=r.div`
  display: flex;
  height: 10px;
  width: 100%;
  border-radius: ${({theme:e})=>e.borderRadius.small};
  overflow: hidden;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`,w=r.div`
width: ${({$width:e})=>`${e}%`}
background-color: ${({$color:e})=>e}
`,T=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,I=r.span`
    background-color:${({theme:e})=>e.colors.background.default}
    padding: 0.25rem 0.5rem;
    border-radius: ${({theme:e})=>e.borderRadius.small};
    font-size: 0.875rem;
`,E=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,k=r.div`
  display: flex;
  aligm-items: center;
  gap: 0.5rem;
`,N=r.span`
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  border-radius: ${({theme:e})=>e.borderRadius.small};
  background-color: ${({$type:e,theme:t})=>{switch(e.toLowerCase()){case"person":return t.colors.sentiment.positive;case"location":return t.colors.sentiment.neutral;case"organization":return t.colors.sentiment.mixed;case"commercial_item":return t.colors.primary.light;default:return t.colors.secondary.light}}};
  color: white;
`,C=r.span`
  font-size: 0.875rem;
`,L=r.span`
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  background-color: ${({$sentiment:e,theme:t})=>{switch(e){case"POSITIVE":return t.colors.sentiment.positive;case"NEGATIVE":case"NEUTRAL":return t.colors.sentiment.neutral;case"MIXED":return t.colors.sentiment.mixed;default:return t.colors.text.primary}}};
`,A=r.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${({theme:e})=>e.colors.background.default};
  border-radius: ${({theme:e})=>e.borderRadius.small};
  font-size: 0.875rem;
  white-space: pre-wrap;
  max-height: 200px;
  verflow-y: auto;
`,F=({result:t})=>{const{sentimentAnalysis:s,keyPhrases:r,entities:i,originalText:o,timestamp:l,requestId:c}=t.data||{},{t:d}=n(),m=null==s?void 0:s.languageCode,u="zh-TW"===m?"繁體中文":"en"===m?"English":m;return e.jsx("div",{children:e.jsxs(a,{title:d("analysis.results.title"),children:[e.jsxs(v,{children:[e.jsxs(f,{children:[d("analysis.results.language.title"),":"]}),e.jsxs(j,{children:[u," (",m,")"]}),e.jsx(y,{text:JSON.stringify(t.data,null,2),label:d("analysis.results.copyAll")})]}),e.jsxs(v,{children:[e.jsxs(f,{children:[d("analysis.results.sentiment.overall"),":"]}),e.jsx(L,{$sentiment:s.sentiment,children:d(`sentiments.${s.sentimentLabel.toLowerCase()}`)})]}),e.jsx($,{children:s.scores.map(((t,s)=>e.jsx(w,{$width:100*t.value,$color:t.color},s)))}),e.jsxs(v,{children:[e.jsxs(f,{children:[d("analysis.results.analyzedAt"),":"]}),e.jsx(j,{children:new Date(l).toLocaleString()})]}),e.jsxs(b,{children:[e.jsx(a,{title:d("analysis.results.sentiment.scores"),children:s.scores.map(((t,s)=>e.jsxs(v,{children:[e.jsxs(f,{children:[d(`sentiments.${t.name.toLowerCase()}`),":"]}),e.jsxs(j,{children:[(100*t.value).toFixed(2),"%"]})]},s)))}),e.jsx(a,{title:d("analysis.results.keyPhrases.title")+` (${r.phrases.length})`,children:r.phrases.length>0?e.jsx(T,{children:r.phrases.map(((t,s)=>e.jsx(I,{children:t.text},s)))}):e.jsx(j,{children:d("analysis.results.keyPhrases.noKeyPhrases")})}),e.jsx(a,{title:d("analysis.results.entities.title")+` (${i.entities.length})`,children:i.entities.length>0?e.jsx(E,{children:i.entities.map(((t,s)=>e.jsxs(k,{children:[e.jsx(N,{$type:t.type,children:d(`entityTypes.${t.type.toLowerCase()}`,t.typeLabel||t.type)}),e.jsx(C,{children:t.text})]},s)))}):e.jsx(j,{children:d("analysis.results.entities.noEntities")})})]}),e.jsxs(a,{title:d("analysis.results.originalText"),children:[e.jsx(y,{text:o,label:d("analysis.results.copyText")}),e.jsx(A,{children:o})]}),e.jsxs(v,{children:[e.jsxs(f,{children:[d("analysis.results.requestId"),":"]}),e.jsx(j,{children:c})]})]})})},P={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400},z=e=>(t,...s)=>i`
      @media (min-width: ${P[e]}px) {
        ${"string"==typeof t?t:i(t,...s)}
      }
    `,Q=r.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;

  ${({$fluid:e})=>!e&&`\n    ${z("sm")`
      max-width: ${P.sm-24}px;
    `}\n    ${z("md")`
      max-width: ${P.md-24}px;
    `}\n    ${z("lg")`
      max-width: ${P.lg-24}px;
    `}\n    ${z("xl")`
      max-width: ${P.xl-24}px;
    `}\n    ${z("xxl")`
      max-width: ${P.xxl-24}px;
    `}\n  `}
`,S={sentimentAnalysis:{sentiment:"POSITIVE",sentimentLabel:"Positive",scores:[{name:"Positive",value:.9998637437820435,color:"#4CAF50"},{name:"Negative",value:3628421836765483e-20,color:"#F44336"},{name:"Neutral",value:8855985652189702e-20,color:"#9E9E9E"},{name:"Mixed",value:11473866834421642e-21,color:"#FF9800"}],languageCode:"en"},keyPhrases:{phrases:[{text:"I",score:1},{text:"it",score:1},{text:"a reliable solution",score:1},{text:"anyone",score:1},{text:"This product",score:1},{text:"The quality",score:1},{text:"customer service",score:1},{text:"all my expectations",score:1}],languageCode:"en"},entities:{entities:[],groupEntities:{},languageCode:"en"},originalText:"This product exceeded all my expectations! The quality is outstanding and customer service was excellent. I would highly recommend it to anyone looking for a reliable solution.",timestamp:"2025-05-15T02:44:07.763Z",requestId:"29b75b5e-7525-4aa2-b68c-b04ec67c0df4"},q={sentimentAnalysis:{sentiment:"NEGATIVE",sentimentLabel:"Negative",scores:[{name:"Positive",value:8996213000500575e-20,color:"#4CAF50"},{name:"Negative",value:.999450147151947,color:"#F44336"},{name:"Neutral",value:332662821165286e-19,color:"#9E9E9E"},{name:"Mixed",value:.00042659856262616813,color:"#FF9800"}],languageCode:"en"},keyPhrases:{phrases:[{text:"I",score:1},{text:"my concerns",score:1},{text:"my purchase",score:1},{text:"The product",score:1},{text:"The customer support",score:1},{text:"advertised",score:.36}],languageCode:"en"},entities:{entities:[],groupEntities:{},languageCode:"en"},originalText:"Unfortunately, I was very disappointed with my purchase. The product arrived damaged and didn't work as advertised. The customer support was slow to respond to my concerns.",timestamp:"2025-05-15T02:45:20.402Z",requestId:"cd84606d-28b0-4003-ae40-4d9120df7b56"},U={sentimentAnalysis:{sentiment:"NEUTRAL",sentimentLabel:"Neutral",scores:[{name:"Positive",value:.16057227551937103,color:"#4CAF50"},{name:"Negative",value:.00012330739991739392,color:"#F44336"},{name:"Neutral",value:.8388987183570862,color:"#9E9E9E"},{name:"Mixed",value:.00040572116267867386,color:"#FF9800"}],languageCode:"en"},keyPhrases:{phrases:[{text:"It",score:1},{text:"storage",score:1},{text:"a 6-inch display",score:1},{text:"three colors",score:1},{text:"The device",score:1},{text:"a dual camera system",score:1},{text:"128GB",score:1},{text:"black",score:.97},{text:"silver",score:.97},{text:"blue",score:.91}],languageCode:"en"},entities:{entities:[{text:"6-inch",type:"QUANTITY",typeLabel:"Quantity",score:1},{text:"128GB",type:"QUANTITY",typeLabel:"Quantity",score:1},{text:"three colors",type:"QUANTITY",typeLabel:"Quantity",score:.99}],groupEntities:{QUANTITY:[{text:"6-inch",type:"QUANTITY",typeLabel:"Quantity",score:1},{text:"128GB",type:"QUANTITY",typeLabel:"Quantity",score:1},{text:"three colors",type:"QUANTITY",typeLabel:"Quantity",score:.99}]},languageCode:"en"},originalText:"The device comes with a 6-inch display, 128GB of storage, and a dual camera system. It supports fast charging and is available in three colors: black, silver, and blue.",timestamp:"2025-05-15T02:45:50.094Z",requestId:"87bb39ce-755b-4a1e-93c1-c594eb86eede"},M={sentimentAnalysis:{sentiment:"MIXED",sentimentLabel:"Mixed",scores:[{name:"Positive",value:.006740947719663382,color:"#4CAF50"},{name:"Negative",value:.00015256139158736914,color:"#F44336"},{name:"Neutral",value:8071285992627963e-20,color:"#9E9E9E"},{name:"Mixed",value:.9930257797241211,color:"#FF9800"}],languageCode:"en"},keyPhrases:{phrases:[{text:"me",score:1},{text:"It",score:1},{text:"I",score:1},{text:"performance",score:1},{text:"my work",score:1},{text:"this software",score:1},{text:"the design",score:1},{text:"there",score:1},{text:"some issues",score:1},{text:"it",score:1},{text:"some features",score:1},{text:"the functionality",score:.99}],languageCode:"en"},entities:{entities:[],groupEntities:{},languageCode:"en"},originalText:"While I really like the design and the functionality of this software, there are some issues with performance. It crashes occasionally and some features are unintuitive, but overall it helps me get my work done.",timestamp:"2025-05-15T02:46:07.647Z",requestId:"e2cfe6ef-0588-41dd-a475-2cd30048bc8b"},R=r((({children:t,fluid:s=!1,className:r})=>e.jsx(Q,{$fluid:s,className:r,children:t})))`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  ${z("md")`
    padding: 2rem;
  `}
`,Y=r.h1`
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: 1.5rem;

  ${z("md")`
    font-size: 2rem;
  `}
`,B=r.p`
  margin-bottom: 2rem;
  color: ${({theme:e})=>e.colors.text.secondary};
`,G=r.div`
  background-color: #ffebee;
  color: ${({theme:e})=>e.colors.sentiment.negative};
  padding: 1rem;
  border-radius: ${({theme:e})=>e.borderRadius.small};
  margin-bottom: 1.5rem;
`,D=r.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${z("lg")`
    flex-direction: row;
    align-items: flex-start;
  `}
`,O=r.div`
  width: 100%;

  ${z("lg")`
    width: 45%;
  `}
`,V=r.div`
  width: 100%;

  ${z("lg")`
    width: 55%;
  `}
`,W=r.div`
  & textarea {
    min-height: 150px;

    ${z("md")`
      min-height: 200px;
    `}

    ${z("lg")`
      min-height: 250px;
    `}
  }
`,Z=()=>{const[t,r]=s.useState(!1),[i,o]=s.useState(null),[c,d]=s.useState(null),{t:m}=n();return e.jsxs(R,{children:[e.jsx(Y,{children:m("analysis.title")}),e.jsx(B,{children:m("analysis.description")}),i&&e.jsx(G,{children:i}),e.jsxs(D,{children:[e.jsx(O,{children:e.jsx(a,{title:m("analysis.inputCard.title"),children:e.jsx(W,{children:e.jsx(h,{onSubmit:async e=>{r(!0),o(null);try{const s=await(t=e,new Promise((e=>{const s={positive:S,negative:q,neutral:U,mixed:M};setTimeout((()=>{e({success:!0,data:s[t],requestId:s[t].requestId})}),1e3)})));d(s)}catch(s){o("Failed to analyze text. Please try again.")}finally{r(!1)}var t},isLoading:t})})})}),e.jsx(V,{children:t?e.jsx(a,{children:e.jsx(l,{})}):c?e.jsx(F,{result:c}):null})]})]})};export{Z as default};
