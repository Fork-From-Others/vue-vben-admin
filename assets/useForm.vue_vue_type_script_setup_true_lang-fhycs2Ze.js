var g=Object.defineProperty;var u=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var _=(a,o,e)=>o in a?g(a,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[o]=e,v=(a,o)=>{for(var e in o||(o={}))h.call(o,e)&&_(a,e,o[e]);if(u)for(var e of u(o))x.call(o,e)&&_(a,e,o[e]);return a};var C=(a,o,e)=>new Promise((s,i)=>{var m=t=>{try{r(e.next(t))}catch(n){i(n)}},f=t=>{try{r(e.throw(t))}catch(n){i(n)}},r=t=>t.done?s(t.value):Promise.resolve(t.value).then(m,f);r((e=e.apply(a,o)).next())});import{_ as k}from"./BasicForm.vue_vue_type_script_setup_true_lang-PqFO160E.js";import"./BasicForm.vue_vue_type_style_index_0_lang-uviiGwhb.js";import"./componentMap-hgm0haDV.js";import{u as w}from"./useForm-OHMeDgiK.js";import b from"./JsonModal-F3-x5L7V.js";import{M as y}from"./antd-44joHPEW.js";import{d as F,f as j,r as B,c as O,_ as R,a9 as T,aa as D,u as p,ad as G,k as M}from"./vue-lybwVHEG.js";const E=F({__name:"useForm",setup(a,{expose:o}){const e=j(null),s=B({formModel:{},formConfig:{},visible:!1}),i=O(()=>v({},s.formConfig)),m=c=>{s.formConfig=c,s.visible=!0},[f,{validate:r}]=w(),t=()=>{s.visible=!1},n=()=>C(this,null,function*(){var l,d;let c=yield r();(d=(l=e.value)==null?void 0:l.showModal)==null||d.call(l,c)});return o({showModal:m}),(c,l)=>(R(),T(p(y),{title:"预览(不支持布局)",open:s.visible,onOk:n,onCancel:t,okText:"获取数据",cancelText:"关闭",style:{top:"20px"},destroyOnClose:!0,width:900},{default:D(()=>[M(p(k),G(i.value,{onRegister:p(f)}),null,16,["onRegister"]),M(b,{ref_key:"jsonModal",ref:e},null,512)]),_:1},8,["open"]))}});export{E as _};
