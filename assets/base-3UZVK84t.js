import{i as c}from"./mock-api-3lP0D2Fe.js";import{P as h}from"./index-7h9eW91d.js";import{b6 as a,G as D,R as p,h as i,Y as E,E as m,B as o}from"./antd-44joHPEW.js";import{d as f,k as u,E as e,i as y,f as g,o as T,u as B}from"./vue-lybwVHEG.js";import{u as F}from"./index-wDih8div.js";import"./entry/index-knrZR-Aq-1707633080187.js";import"./useContentViewHeight-qKddaaZq.js";import"./useWindowSizeFn-oYO-znZc.js";import"./onMountedOrActivated-C4XOXYty.js";function x(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!y(t)}const A=f({setup(){const{data:t,error:r,loading:n}=F(c);return()=>u(p,{title:"默认用法"},{default:()=>[u(a,null,{default:()=>[u(a.Paragraph,null,{default:()=>[u(a.Text,{type:"danger"},{default:()=>[e("useRequest ")]}),e("的第一个参数是一个异步函数，在组件初次加载时，会自动触发该函数执行。同时自动管理该异步函数的"),u(a.Text,{code:!0},{default:()=>[e("loading")]}),u(a.Text,{code:!0},{default:()=>[e("data")]}),u(a.Text,{code:!0},{default:()=>[e("error")]}),e("等状态。")]}),u(a.Text,{code:!0},{default:()=>["const { data, error, loading } = useRequest(imitateApi);"]})]}),u(D,{spinning:n.value},{default:()=>[u("div",{class:"mt-4"},[r.value?"failed to load":`Username: ${t.value}`])]})]})}}),P=f({setup(){const t=g(""),r=l=>{t.value=l},{loading:n,run:s}=F(c,{manual:!0,onSuccess:(l,d)=>{l&&(r(""),i.success(`The username was changed to "${d[0]}" !`))}});return()=>u(p,{title:"手动触发",class:"mt-2"},{default:()=>[u(a,null,{default:()=>[u(a.Paragraph,null,{default:()=>[e("如果设置了"),u(a.Text,{type:"danger"},{default:()=>[e(" options.manual = true ")]}),e("，则 useRequest 不会默认执行，需要通过"),u(a.Text,{type:"danger"},{default:()=>[e(" run ")]}),e("来触发执行。")]}),u(a.Text,{code:!0},{default:()=>["const { loading, run } = useRequest(imitateApi, { manual: true });"]})]}),u(E,{class:"mt-4"},{default:()=>[u(m,{value:t.value,"onUpdate:value":l=>t.value=l,placeholder:"Please enter username"},null),u(o,{type:"primary",disabled:n.value,onClick:()=>s(t.value)},{default:()=>[n.value?"Loading":"Edit"]})]})]})}}),k=f({setup(){const t=g(""),r=l=>{t.value=l},{loading:n,run:s}=F(c,{manual:!0,onBefore:l=>{i.info(`Start Request: ${l[0]}`)},onSuccess:(l,d)=>{l&&(r(""),i.success(`The username was changed to "${d[0]}" !`))},onError:l=>{i.error(l.message)},onFinally:()=>{i.info("Request finish")}});return()=>u(p,{title:"生命周期",class:"mt-2"},{default:()=>[u(a,null,{default:()=>[u(a.Paragraph,null,{default:()=>[u(a.Text,{type:"danger"},{default:()=>[e("useRequest ")]}),e("提供了以下几个生命周期配置项，供你在异步函数的不同阶段做一些处理。")]}),u(a.Paragraph,null,{default:()=>[u(a.Text,{code:!0},{default:()=>[e("onBefore")]}),e("请求之前触发")]}),u(a.Paragraph,null,{default:()=>[u(a.Text,{code:!0},{default:()=>[e("onSuccess")]}),e("请求成功触发")]}),u(a.Paragraph,null,{default:()=>[u(a.Text,{code:!0},{default:()=>[e("onError")]}),e("请求失败触发")]}),u(a.Paragraph,null,{default:()=>[u(a.Text,{code:!0},{default:()=>[e("onFinally")]}),e("请求完成触发")]})]}),u(E,null,{default:()=>[u(m,{value:t.value,"onUpdate:value":l=>t.value=l,placeholder:"Please enter username"},null),u(o,{type:"primary",disabled:n.value,onClick:()=>s(t.value,!0)},{default:()=>[n.value?"Loading":"Edit"]}),u(o,{danger:!0,disabled:n.value,onClick:()=>s(t.value,!1)},{default:()=>[n.value?"Loading":"Error Edit"]})]})]})}}),R=f({setup(){const{data:t,loading:r,run:n,refresh:s}=F(c,{manual:!0});T(()=>n("lutz"));const l=()=>{t.value=`${Date.now()}`};return()=>u(p,{title:"刷新（重复上一次请求）",class:"mt-2"},{default:()=>[u(a,null,{default:()=>[u(a.Paragraph,null,{default:()=>[u(a.Text,{type:"danger"},{default:()=>[e("useRequest ")]}),e("提供了"),u(a.Text,{type:"danger"},{default:()=>[e(" refresh ")]}),e("和"),u(a.Text,{type:"danger"},{default:()=>[e(" refreshAsync ")]}),e("方法，使我们可以使用上一次的参数，重新发起请求。")]})]}),u(D,{spinning:r.value},{default:()=>[u(E,null,{default:()=>[u("div",null,[e("Username: "),t.value]),u(o,{type:"primary",onClick:l},{default:()=>[e("Change data")]}),u(o,{onClick:s},{default:()=>[e("Refresh")]})]})]})]})}}),q=f({setup(){const t=g(""),r=d=>{t.value=d},{loading:n,run:s,cancel:l}=F(c,{manual:!0,onSuccess:(d,C)=>{d&&(r(""),i.success(`The username was changed to "${C[0]}" !`))}});return()=>u(p,{title:"取消响应",class:"mt-2"},{default:()=>[u(a,null,{default:()=>[u(a.Paragraph,null,{default:()=>[u(a.Text,{type:"danger"},{default:()=>[e(" useRequest ")]}),e("提供了"),u(a.Text,{type:"danger"},{default:()=>[e(" cancel ")]}),e("函数，用于忽略当前 promise 返回的数据和错误")]})]}),u(E,null,{default:()=>[u(m,{value:t.value,"onUpdate:value":d=>t.value=d,placeholder:"Please enter username"},null),u(o,{type:"primary",disabled:n.value,onClick:()=>s(t.value)},{default:()=>[e("Edit")]}),u(o,{type:"dashed",disabled:!n.value,onClick:l},{default:()=>[e("Cancel")]})]})]})}}),S=f({setup(){const t=g(""),{data:r,loading:n,run:s,params:l}=F(c,{defaultParams:["lutz"]}),d=()=>{s(t.value)};return()=>u(p,{title:"管理参数",class:"mt-2"},{default:()=>{var C;return[u(a,null,{default:()=>[u(a.Paragraph,null,{default:()=>[u(a.Text,{type:"danger"},{default:()=>[e(" useRequest ")]}),e("返回的"),u(a.Text,{type:"danger"},{default:()=>[e(" params ")]}),e("会记录当次调用"),u(a.Text,{type:"danger"},{default:()=>[e(" service ")]}),e("的参数数组。比如你触发了"),u(a.Text,{code:!0},{default:()=>[e("run(1, 2, 3)")]}),e(",则"),u(a.Text,{type:"danger"},{default:()=>[e(" params ")]}),e(" 等于"),u(a.Text,{code:!0},{default:()=>[e(" [1, 2, 3] ")]})]}),u(a.Paragraph,null,{default:()=>[e("如果我们设置了"),u(a.Text,{type:"danger"},{default:()=>[e(" options.manual = false ")]}),e("，则首次调用"),u(a.Text,{type:"danger"},{default:()=>[e(" service ")]}),e("的参数可以通过"),u(a.Text,{type:"danger"},{default:()=>[e(" options.defaultParams ")]}),e("来设置。")]})]}),u(E,null,{default:()=>[u(m,{value:t.value,"onUpdate:value":v=>t.value=v,placeholder:"Please enter username"},null),u(o,{disabled:n.value,onClick:d},{default:()=>[n.value?"Loading":"Edit"]})]}),u("div",null,[u("div",null,[e("UserId: "),(C=B(l))==null?void 0:C[0]]),u("div",null,[e("Username: "),B(r)])])]}})}}),I=f({setup(){return()=>u(h,null,{default:()=>[u(A,null,null),u(P,null,null),u(k,null,null),u(R,null,null),u(q,null,null),u(S,null,null)],headerContent:()=>u(a,null,{default:()=>[u(a.Link,{href:"https://ahooks.js.org/zh-CN/hooks/use-request/index",target:"_blank"},{default:()=>[e("ahooks")," "]}),e("useRequest 的 vue 版本，是一个强大的异步数据管理的 Hooks。"),u(a.Paragraph,null,{default:()=>[u("ul",null,[["自动请求/手动请求","轮询","防抖","节流","屏幕聚焦重新请求","错误重试","loading delay","SWR(stale-while-revalidate)","缓存"].map(t=>u("li",null,[u(a.Text,null,x(t)?t:{default:()=>[t]})]))])]})]})})}});export{I as default};
