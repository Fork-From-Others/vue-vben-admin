import{E as $,r as B,c as R,w as L}from"./entry/index-knrZR-Aq-1707633080187.js";import{d as T,f as D,r as F,c as m,u as e,w as P,o as q,x as A,k as l,_ as U,a9 as j,aa as u,E as H,a1 as N,a0 as f}from"./vue-lybwVHEG.js";import{P as z}from"./index-7h9eW91d.js";import{a4 as y}from"./antd-44joHPEW.js";import"./useContentViewHeight-qKddaaZq.js";import"./useWindowSizeFn-oYO-znZc.js";import"./onMountedOrActivated-C4XOXYty.js";const G={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},g="virtual-scroll";function a(t,o="px"){if(!(t==null||t===""))return isNaN(+t)?String(t):`${Number(t)}${o}`}const J=T({name:"VirtualScroll",props:G,setup(t,{slots:o}){const s=D(null),r=F({first:0,last:0,scrollTop:0}),c=m(()=>parseInt(t.bench,10)),d=m(()=>parseInt(t.itemHeight,10)),_=m(()=>Math.max(0,r.first-e(c))),E=m(()=>Math.min((t.items||[]).length,r.last+e(c))),I=m(()=>({height:a((t.items||[]).length*e(d))})),V=m(()=>{const i={},n=a(t.height),h=a(t.minHeight),S=a(t.minWidth),w=a(t.maxHeight),x=a(t.maxWidth),b=a(t.width);return n&&(i.height=n),h&&(i.minHeight=h),S&&(i.minWidth=S),w&&(i.maxHeight=w),x&&(i.maxWidth=x),b&&(i.width=b),i});P([()=>t.itemHeight,()=>t.height],()=>{p()});function v(i){const n=e(s);if(!n)return 0;const h=parseInt(t.height||0,10)||n.clientHeight;return i+Math.ceil(h/e(d))}function C(){return Math.floor(r.scrollTop/e(d))}function p(){const i=e(s);i&&(r.scrollTop=i.scrollTop,r.first=C(),r.last=v(r.first))}function k(){const{items:i=[]}=t;return i.slice(e(_),e(E)).map(M)}function M(i,n){n+=e(_);const h=a(n*e(d));return l("div",{class:`${g}__item`,style:{top:h},key:n},[B(o,"default",{index:n,item:i})])}return q(()=>{r.last=v(0),A(()=>{const i=e(s);i&&$({el:i,name:"scroll",listener:p,wait:0})})}),()=>l("div",{class:g,style:e(V),ref:s},[l("div",{class:`${g}__container`,style:e(I)},[k()])])}}),K=R(J,[["__scopeId","data-v-16482a0c"]]),W=L(K),O={class:"virtual-scroll-demo-wrap"},Q={class:"virtual-scroll-demo__item"},X={class:"virtual-scroll-demo-wrap"},Y={class:"virtual-scroll-demo__item"},Z=T({__name:"VirtualScroll",setup(t){const o=(()=>{const s=[];for(let r=1;r<2e4;r++)s.push({title:"列表项"+r});return s})();return(s,r)=>(U(),j(e(z),{class:"virtual-scroll-demo"},{default:u(()=>[l(e(y),null,{default:u(()=>[H("基础滚动示例")]),_:1}),f("div",O,[l(e(W),{itemHeight:41,items:e(o),height:300,width:300},{default:u(({item:c})=>[f("div",Q,N(c.title),1)]),_:1},8,["items"])]),l(e(y),null,{default:u(()=>[H("即使不可见，也预先加载50条数据，防止空白")]),_:1}),f("div",X,[l(e(W),{itemHeight:41,items:e(o),height:300,width:300,bench:50},{default:u(({item:c})=>[f("div",Y,N(c.title),1)]),_:1},8,["items"])])]),_:1}))}}),lt=R(Z,[["__scopeId","data-v-4bd1bb22"]]);export{lt as default};
