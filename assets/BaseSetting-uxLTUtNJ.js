var f=(e,m,t)=>new Promise((u,i)=>{var d=a=>{try{r(t.next(a))}catch(n){i(n)}},l=a=>{try{r(t.throw(a))}catch(n){i(n)}},r=a=>a.done?u(a.value):Promise.resolve(a.value).then(d,l);r((t=t.apply(e,m)).next())});import{_ as v}from"./BasicForm.vue_vue_type_script_setup_true_lang-PqFO160E.js";import"./BasicForm.vue_vue_type_style_index_0_lang-uviiGwhb.js";import"./componentMap-hgm0haDV.js";import{u as g}from"./useForm-OHMeDgiK.js";import{l as C,C as I,a as b,c as S}from"./entry/index-knrZR-Aq-1707633080187.js";import{C as x}from"./index-JnGuSBCg.js";import{h as A}from"./header-Z_aLS1lB.js";import{a as w}from"./account-rWrB2KYs.js";import{b as B}from"./data-dzl5Ylxz.js";import{u as U}from"./upload-1gV4BihI.js";import{d as V,o as k,c as y,a8 as M,_ as N,a9 as R,aa as p,u as o,k as s,a0 as h,E,a3 as F,a4 as T}from"./vue-lybwVHEG.js";import{U as G,V as _}from"./antd-44joHPEW.js";import"./FormItem.vue_vue_type_script_lang-emkkrr8K.js";import"./helper-_Z9KClRJ.js";import"./index-bmkTmHgs.js";import"./useWindowSizeFn-oYO-znZc.js";import"./useFormItem-5w2RgMSL.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-ZitD58Gr.js";import"./uuid-uJQj7518.js";import"./useSortable-KukdjXBB.js";import"./download-3ZPw1wiN.js";import"./base64Conver-UKE1Rgbp.js";import"./index-qyq961e_.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-VYSD_f-T.js";import"./copyTextToClipboard-HHhdVarp.js";import"./index-0iYB3w2d.js";const P=e=>(F("data-v-73a9c434"),e=e(),T(),e),W={class:"change-avatar"},$=P(()=>h("div",{class:"mb-2"},"头像",-1)),j=V({__name:"BaseSetting",setup(e){const{createMessage:m}=b(),t=C(),[u,{setFieldsValue:i}]=g({labelWidth:120,schemas:B,showActionButtonGroup:!1});k(()=>f(this,null,function*(){const a=yield w();i(a)}));const d=y(()=>{const{avatar:a}=t.getUserInfo;return a||A});function l({src:a,data:n}){const c=t.getUserInfo;c.avatar=a,t.setUserInfo(c)}function r(){m.success("更新成功！")}return(a,n)=>{const c=M("a-button");return N(),R(o(I),{title:"基本设置",canExpan:!1},{default:p(()=>[s(o(G),{gutter:24},{default:p(()=>[s(o(_),{span:14},{default:p(()=>[s(o(v),{onRegister:o(u)},null,8,["onRegister"])]),_:1}),s(o(_),{span:10},{default:p(()=>[h("div",W,[$,s(o(x),{uploadApi:o(U),value:d.value,btnText:"更换头像",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:l,width:"150"},null,8,["uploadApi","value"])])]),_:1})]),_:1}),s(c,{type:"primary",onClick:r},{default:p(()=>[E(" 更新基本信息 ")]),_:1})]),_:1})}}}),_a=S(j,[["__scopeId","data-v-73a9c434"]]);export{_a as default};
