import{e as d}from"./formItemPropsConfig-QzrCdgsu.js";import C from"./RuleProps-8fx43Sqb.js";import{u as y}from"./useFormDesignState-yMpjuC-D.js";import{aG as _,E as I,a2 as P,Z as b,ax as k,a3 as v,W as F,ay as g,bn as h}from"./antd-44joHPEW.js";import{d as E,a8 as m,_ as r,$ as n,a9 as s,aa as p,F as w,ai as $,ad as S,ac as a,ab as A}from"./vue-lybwVHEG.js";import{c as B}from"./entry/index-knrZR-Aq-1707633080187.js";import"./formItemConfig-Bl-95ZUk.js";import"./componentMap-hgm0haDV.js";import"./useFormItem-5w2RgMSL.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-ZitD58Gr.js";import"./index-bmkTmHgs.js";import"./useWindowSizeFn-oYO-znZc.js";import"./uuid-uJQj7518.js";import"./useSortable-KukdjXBB.js";import"./download-3ZPw1wiN.js";import"./base64Conver-UKE1Rgbp.js";import"./index-qyq961e_.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-VYSD_f-T.js";import"./copyTextToClipboard-HHhdVarp.js";import"./index-0iYB3w2d.js";import"./index-JnGuSBCg.js";import"./index-UF_WnQQS.js";const D=E({name:"FormItemProps",components:{RuleProps:C,Empty:_,Input:I,Form:P,FormItem:b,Switch:k,Checkbox:v,Select:F,Slider:g},setup(){const{formConfig:o}=y();return{baseItemColumnProps:d,formConfig:o,showProps:t=>t&&h(t)?!t.includes(o.value.currentItem.component):!0}}}),U={class:"properties-content"},G={key:0,class:"properties-body"};function L(o,i,t,N,R,V){const c=m("Empty"),l=m("FormItem"),u=m("Form");return r(),n("div",U,[o.formConfig.currentItem?(r(),n("div",G,[o.formConfig.currentItem.key?(r(),s(u,{key:1,"label-align":"left",layout:"vertical"},{default:p(()=>[(r(!0),n(w,null,A(o.baseItemColumnProps,e=>(r(),n("div",{key:e.name},[o.showProps(e.exclude)?(r(),s(l,{key:0,label:e.label},{default:p(()=>[o.formConfig.currentItem.colProps&&e.component?(r(),s($(e.component),S({key:0,class:"component-props"},e.componentProps,{value:o.formConfig.currentItem.colProps[e.name],"onUpdate:value":f=>o.formConfig.currentItem.colProps[e.name]=f}),null,16,["value","onUpdate:value"])):a("",!0)]),_:2},1032,["label"])):a("",!0)]))),128))]),_:1})):(r(),s(c,{key:0,class:"hint-box",description:"未选择控件"}))])):a("",!0)])}const ao=B(D,[["render",L]]);export{ao as default};
