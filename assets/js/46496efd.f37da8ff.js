"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[981],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=i,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4505:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o=r.p+"assets/images/riffusion_phonk-c287d2eb0229217e611efdb8ab1f9e2d.png",a={sidebar_position:2},s="\ud83d\udfe2 Music Generation",l={unversionedId:"miscl/music",id:"miscl/music",title:"\ud83d\udfe2 Music Generation",description:"Music generation models are becoming increasingly popular, and will eventually have a large impact on the music industry.",source:"@site/docs/miscl/music.md",sourceDirName:"miscl",slug:"/miscl/music",permalink:"/docs/miscl/music",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/miscl/music.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Detecting AI Generated Text",permalink:"/docs/miscl/detect"},next:{title:"\ud83d\udcd9 Vocabulary Reference",permalink:"/docs/vocabulary"}},c={},u=[{value:"Riffusion",id:"riffusion",level:2},{value:"Mubert",id:"mubert",level:2},{value:"Other",id:"other",level:2},{value:"Notes",id:"notes",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-music-generation"},"\ud83d\udfe2 Music Generation"),(0,i.kt)("p",null,"Music generation models are becoming increasingly popular, and will eventually have a large impact on the music industry. "),(0,i.kt)("p",null,"Music generation models can create chord progressions, melodies, or full songs. They can structure and create music in specific genres and compose or improvise in the style of specific artists."),(0,i.kt)("p",null,"However, despite the enormous potential of music models, they are currently difficult to prompt. Generated output is often not thoroughly customizable by prompts, unlike image or text generation models."),(0,i.kt)("h2",{id:"riffusion"},"Riffusion"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:o,style:{width:"500px"}})),(0,i.kt)("p",null,"Riffusion",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", a fine tuned version of Stable Diffusion, can be controlled with prompts to generate instruments and pseudo styles, but it has a limited number of beats available."),(0,i.kt)("h2",{id:"mubert"},"Mubert"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mubert.com/"},"Mubert")," seems to interpret prompts through sentiment analysis that links appropriate musical stylistics to the prompt (controlling the musical parameters in detail via prompts is not possible). It is unclear how much of the resultant generation is done by AI."),(0,i.kt)("h2",{id:"other"},"Other"),(0,i.kt)("p",null,'There are attempts to use GPT-3 as a Text-2-Music tool with actual prompting for musical elements on the "micro-level" of notes (instead of the rather vague prompt-style-analogies mubert & riffusion produce) (e.g. ',(0,i.kt)("inlineCode",{parentName:"p"},"write the notes for a folk song that only uses A, B, C#, F#, and G"),"). However, at present those attempts are limited to single instruments."),(0,i.kt)("p",null,"Other approaches include a model chain that ",(0,i.kt)("a",{parentName:"p",href:"https://huggingface.co/spaces/fffiloni/img-to-music"},"converts any image into sound that represents it")," and prompting ChatGPT to generate code for ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/teropa/status/1598713756074246145"},"Python libraries that create sound"),"."),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"Music prompting is not well built out... yet."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Forsgren, S., & Martiros, H. (2022). Riffusion - Stable diffusion for real-time music generation. https://riffusion.com/about\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);