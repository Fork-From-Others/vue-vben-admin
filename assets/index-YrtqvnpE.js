import{aN as y,aO as B,C as r,a as N}from"./entry/index-knrZR-Aq-1707633080187.js";import{P as w}from"./index-7h9eW91d.js";import{d as D,f as P,a8 as u,_ as m,a9 as V,aa as a,u as t,k as e,E as l,a0 as $,F as A,a1 as E,ab as F,$ as L}from"./vue-lybwVHEG.js";import{as as M}from"./antd-44joHPEW.js";import"./useContentViewHeight-qKddaaZq.js";import"./useWindowSizeFn-oYO-znZc.js";import"./onMountedOrActivated-C4XOXYty.js";const O={class:"mt-2 flex flex-grow-0"},I=D({name:"TabsDemo",__name:"index",setup(G){const f=y(),n=P(""),{closeAll:_,closeLeft:p,closeRight:d,closeOther:C,closeCurrent:k,refreshPage:b,setTitle:g}=B(),{createMessage:v}=N();function T(){n.value?g(n.value):v.error("请输入要设置的Tab标题！")}function h(c){f(`/feat/tabs/detail/${c}`)}return(c,i)=>{const s=u("a-button"),x=u("a-input");return m(),V(t(w),{title:"标签页操作示例"},{default:a(()=>[e(t(r),{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:a(()=>[e(t(M),{banner:"",message:"该操作不会影响页面标题，仅修改Tab标题"}),$("div",O,[e(s,{class:"mr-2",onClick:T,type:"primary"},{default:a(()=>[l(" 设置Tab标题 ")]),_:1}),e(x,{placeholder:"请输入",value:n.value,"onUpdate:value":i[0]||(i[0]=o=>n.value=o),class:"mr-4 w-50"},null,8,["value"])])]),_:1}),e(t(r),{class:"mt-4",title:"标签页操作"},{default:a(()=>[e(s,{class:"mr-2",onClick:t(_)},{default:a(()=>[l(" 关闭所有 ")]),_:1},8,["onClick"]),e(s,{class:"mr-2",onClick:t(p)},{default:a(()=>[l(" 关闭左侧 ")]),_:1},8,["onClick"]),e(s,{class:"mr-2",onClick:t(d)},{default:a(()=>[l(" 关闭右侧 ")]),_:1},8,["onClick"]),e(s,{class:"mr-2",onClick:t(C)},{default:a(()=>[l(" 关闭其他 ")]),_:1},8,["onClick"]),e(s,{class:"mr-2",onClick:t(k)},{default:a(()=>[l(" 关闭当前 ")]),_:1},8,["onClick"]),e(s,{class:"mr-2",onClick:t(b)},{default:a(()=>[l(" 刷新当前 ")]),_:1},8,["onClick"])]),_:1}),e(t(r),{class:"mt-4",title:"标签页复用超出限制自动关闭(使用场景: 动态路由)"},{default:a(()=>[(m(),L(A,null,F(6,o=>e(s,{key:o,class:"mr-2",onClick:R=>h(o)},{default:a(()=>[l(" 打开"+E(o)+"详情页 ",1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})}}});export{I as default};
