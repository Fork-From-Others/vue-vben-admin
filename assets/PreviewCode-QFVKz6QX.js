var b=Object.defineProperty,h=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var u=(e,t,o)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))x.call(t,o)&&u(e,o,t[o]);if(p)for(var o of p(t))k.call(t,o)&&u(e,o,t[o]);return e},f=(e,t)=>h(e,J(t));import{C as $,M as g}from"./index-FFc5o4VM.js";import{c as w}from"./copyTextToClipboard-HHhdVarp.js";import{a as M,c as B}from"./entry/index-knrZR-Aq-1707633080187.js";import{d as D,r as F,H as N,a8 as _,_ as A,$ as O,a0 as C,k as r,aa as v,E}from"./vue-lybwVHEG.js";import"./antd-44joHPEW.js";import"./useWindowSizeFn-oYO-znZc.js";const S=D({name:"PreviewCode",components:{CodeEditor:$},props:{fileFormat:{type:String,default:"json"},editorJson:{type:String,default:""}},setup(e){const t=F({visible:!1}),o=(a,n=`file.${e.fileFormat}`)=>{let l="data:text/csv;charset=utf-8,";l+=a;const y=encodeURI(l),s=document.createElement("a");s.setAttribute("href",y),s.setAttribute("download",n),s.click()},c=()=>{o(e.editorJson)},{createMessage:d}=M(),i=()=>{const a=e.editorJson;if(!a){d.warning("代码为空！");return}w(a)};return f(m({},N(t)),{exportData:o,handleCopyJson:i,handleExportJson:c,MODE:g})}}),V={class:"v-json-box"},j={class:"copy-btn-box"};function I(e,t,o,c,d,i){const a=_("CodeEditor"),n=_("a-button");return A(),O("div",null,[C("div",V,[r(a,{value:e.editorJson,ref:"myEditor",mode:e.MODE.JSON},null,8,["value","mode"])]),C("div",j,[r(n,{onClick:e.handleCopyJson,type:"primary",class:"copy-btn","data-clipboard-action":"copy","data-clipboard-text":e.editorJson},{default:v(()=>[E(" 复制数据 ")]),_:1},8,["onClick","data-clipboard-text"]),r(n,{onClick:e.handleExportJson,type:"primary"},{default:v(()=>[E("导出代码")]),_:1},8,["onClick"])])])}const G=B(S,[["render",I],["__scopeId","data-v-a69efe87"]]);export{G as default};
