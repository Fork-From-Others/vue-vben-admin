import{Q as r}from"./index-RE5q6JFB.js";import{C as a,aI as s}from"./entry/index-knrZR-Aq-1707633080187.js";import{P as v}from"./index-7h9eW91d.js";import{b5 as u}from"./antd-44joHPEW.js";import{d as w,f,a8 as x,_ as C,a9 as y,aa as o,u as e,k as t,E as p,a0 as i}from"./vue-lybwVHEG.js";import"./download-3ZPw1wiN.js";import"./base64Conver-UKE1Rgbp.js";import"./useContentViewHeight-qKddaaZq.js";import"./useWindowSizeFn-oYO-znZc.js";import"./onMountedOrActivated-C4XOXYty.js";const h={class:"flex flex-wrap"},k=i("div",{class:"msg"},"(在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)",-1),R=i("div",{class:"msg"},"要进行扩展绘制则不能将tag设为img",-1),n="https://www.vvbin.cn",P=w({__name:"index",setup(D){const c=f(null),d=f(null);function g(){const l=e(c);l&&l.download("文件名")}function _(){const l=e(d);l&&l.download("Qrcode")}function b({ctx:l}){l instanceof CanvasRenderingContext2D&&(l.fillStyle="black",l.font='16px "微软雅黑"',l.textBaseline="bottom",l.textAlign="center",l.fillText("你帅你先扫",100,195,200))}return(l,q)=>{const m=x("a-button");return C(),y(e(v),{title:"二维码组件使用示例"},{default:o(()=>[i("div",h,[t(e(a),{title:"基础示例",canExpan:!0,class:"text-center mb-6 w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:n})]),_:1}),t(e(a),{title:"渲染成img标签示例",class:"text-center mb-6 w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:n,tag:"img"})]),_:1}),t(e(a),{title:"配置样式示例",class:"text-center mb-6 w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:n,options:{color:{dark:"#55D187"}}})]),_:1}),t(e(a),{title:"本地logo示例",class:"text-center mb-6 w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:n,logo:e(s)},null,8,["logo"])]),_:1}),t(e(a),{title:"在线logo示例",class:"text-center mb-6 w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:n,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}})]),_:1}),t(e(a),{title:"logo配置示例",class:"text-center mb-6 w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:n,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["logo"])]),_:1}),t(e(a),{title:"下载示例",class:"text-center mb-6 w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:n,ref_key:"qrRef",ref:c,logo:e(s)},null,8,["logo"]),t(m,{class:"mb-2",type:"primary",onClick:g},{default:o(()=>[p(" 下载 ")]),_:1}),k]),_:1}),t(e(a),{title:"配置大小示例",class:"text-center w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:n,width:300})]),_:1}),t(e(a),{title:"扩展绘制示例",class:"text-center w-1/5 mr-6"},{default:o(()=>[t(e(r),{value:n,width:200,options:{margin:5},ref_key:"qrDiyRef",ref:d,logo:e(s),onDone:b},null,8,["logo"]),t(m,{class:"mb-2",type:"primary",onClick:_},{default:o(()=>[p(" 下载 ")]),_:1}),R]),_:1}),t(e(a),{title:"Antdv QRCode",class:"text-center w-1/5 mr-6"},{default:o(()=>[t(e(u),{value:n,size:200})]),_:1}),t(e(a),{title:"Antdv QRCode 带icon",class:"text-center w-1/5 mr-6"},{default:o(()=>[t(e(u),{value:n,size:200,icon:e(s)},null,8,["icon"])]),_:1})])]),_:1})}}});export{P as default};
