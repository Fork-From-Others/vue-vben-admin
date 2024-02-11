import{p as S,_ as p,f as U,l as V,h as P,o as B}from"./entry/index-knrZR-Aq-1707633080187.js";import{D as T}from"./siteSetting-9sSy56MD.js";import{c as d,u as F}from"./index-6Fca3F5A.js";import{b as k}from"./index-bmkTmHgs.js";import{h as z}from"./header-Z_aLS1lB.js";import{x as y,D as H}from"./antd-44joHPEW.js";import{d as W,c as j,_ as t,$ as q,k as a,aa as m,u as e,a9 as i,ac as c,a0 as l,a2 as u,a1 as G,F as J}from"./vue-lybwVHEG.js";import"./index-rHz9B1Co.js";import"./useContentViewHeight-qKddaaZq.js";import"./useWindowSizeFn-oYO-znZc.js";import"./useSortable-KukdjXBB.js";import"./index-OmT6gCVi.js";import"./lock-aAa2rYGZ.js";const K=["src"],le=W({name:"UserDropdown",__name:"index",props:{theme:S.oneOf(["dark","light"])},setup(x){const n=d(()=>p(()=>import("./DropMenuItem-cuI6kZUl.js"),__vite__mapDeps([0,1,2,3,4]))),v=d(()=>p(()=>import("./LockModal-z9q2qFXq.js"),__vite__mapDeps([5,1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]))),w=d(()=>p(()=>import("./index-TrYCIzp1.js"),__vite__mapDeps([34,1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))),{prefixCls:o}=U("header-user-dropdown"),{t:r}=P(),{getShowDoc:_,getUseLockPage:D,getShowApi:C}=F(),f=V(),g=j(()=>{const{realName:s="",avatar:h,desc:$}=f.getUserInfo||{};return{realName:s,avatar:h||z,desc:$}}),[L,{openModal:A}]=k(),[I,{openModal:O}]=k();function R(){A(!0)}function b(){O(!0,{})}function E(){f.confirmLoginOut()}function M(){B(T)}function N(s){switch(s.key){case"logout":E();break;case"doc":M();break;case"lock":R();break;case"api":b();break}}return(s,h)=>(t(),q(J,null,[a(e(H),{placement:"bottomLeft",overlayClassName:`${e(o)}-dropdown-overlay`},{overlay:m(()=>[a(e(y),{onClick:N},{default:m(()=>[e(_)?(t(),i(e(n),{key:"doc",text:e(r)("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):c("",!0),e(_)?(t(),i(e(y).Divider,{key:1})):c("",!0),e(C)?(t(),i(e(n),{key:"api",text:e(r)("layout.header.dropdownChangeApi"),icon:"ant-design:swap-outlined"},null,8,["text"])):c("",!0),e(D)?(t(),i(e(n),{key:"lock",text:e(r)("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):c("",!0),a(e(n),{key:"logout",text:e(r)("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1})]),default:m(()=>[l("span",{class:u([[e(o),`${e(o)}--${x.theme}`],"flex"])},[l("img",{class:u(`${e(o)}__header`),src:g.value.avatar},null,10,K),l("span",{class:u(`${e(o)}__info hidden md:block`)},[l("span",{class:u([`${e(o)}__name`,"truncate"])},G(g.value.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),a(e(v),{onRegister:e(L)},null,8,["onRegister"]),a(e(w),{onRegister:e(I)},null,8,["onRegister"])],64))}});export{le as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DropMenuItem-cuI6kZUl.js","assets/entry/index-knrZR-Aq-1707633080187.js","assets/vue-lybwVHEG.js","assets/antd-44joHPEW.js","assets/index-BT1kQHuy.css","assets/LockModal-z9q2qFXq.js","assets/index-bmkTmHgs.js","assets/useWindowSizeFn-oYO-znZc.js","assets/index-ohX4B-Z4.css","assets/BasicForm.vue_vue_type_script_setup_true_lang-PqFO160E.js","assets/FormItem.vue_vue_type_script_lang-emkkrr8K.js","assets/componentMap-hgm0haDV.js","assets/useFormItem-5w2RgMSL.js","assets/RadioButtonGroup.vue_vue_type_script_setup_true_lang-ZitD58Gr.js","assets/uuid-uJQj7518.js","assets/useSortable-KukdjXBB.js","assets/download-3ZPw1wiN.js","assets/base64Conver-UKE1Rgbp.js","assets/index-qyq961e_.js","assets/index-Z-bnVFsh.css","assets/IconPicker.vue_vue_type_script_setup_true_lang-VYSD_f-T.js","assets/copyTextToClipboard-HHhdVarp.js","assets/index-0iYB3w2d.js","assets/index-daay9IMU.css","assets/index-JnGuSBCg.js","assets/index-hqCb2gue.css","assets/componentMap-8XRcvWyh.css","assets/helper-_Z9KClRJ.js","assets/BasicForm.vue_vue_type_style_index_0_lang-uviiGwhb.js","assets/BasicForm-6F9_TDdI.css","assets/useForm-OHMeDgiK.js","assets/lock-aAa2rYGZ.js","assets/header-Z_aLS1lB.js","assets/LockModal-hEwd94Gu.css","assets/index-TrYCIzp1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}