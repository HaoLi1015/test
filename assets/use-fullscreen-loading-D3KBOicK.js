import"./index-DwLlSbug.js";/* empty css                  *//* empty css                *//* empty css                   */import{au as m,n as _,E as d,s as g}from"./element-BD9IHJJo.js";import{v as f,x as y,y as E,M as n,K as a,a3 as c}from"./vue-C2mfnOEg.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vxe-gSuEEdzx.js";const x={lock:!0,text:"加载中..."},p=(o,e={})=>{let r;return async(...i)=>{try{return r=m.service({...x,...e}),await o(...i)}finally{r.close()}}},v={code:0,data:{list:[]},message:"获取成功"};function C(o){return new Promise(e=>{setTimeout(()=>{e({...v,data:{list:o}})},1e3)})}function S(){return new Promise((o,e)=>{setTimeout(()=>{e(new Error("发生错误"))},1e3)})}const k={class:"app-container"},A=`
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`,L=f({__name:"use-fullscreen-loading",setup(o){const e={text:"即将发生错误...",background:"#F56C6C20",svg:A,svgViewBox:"-10, -10, 50, 50"};async function r(){const s=await p(C)([1,2,3]);d.success(`${s.message}，传参为 ${s.data.list.toString()}`)}async function i(){try{await p(S,e)()}catch(s){d.error(s.message)}}return(s,t)=>{const l=_,u=g;return y(),E("div",k,[n(l,{shadow:"never"},{default:a(()=>t[0]||(t[0]=[c(" 该示例是演示：通过将要执行的函数传递给 composable，让 composable 自动开启全屏 loading，函数执行结束后自动关闭 loading ")])),_:1}),n(l,{header:"示例",shadow:"never"},{default:a(()=>[n(u,{type:"primary",onClick:r},{default:a(()=>t[1]||(t[1]=[c(" 查询成功 ")])),_:1}),n(u,{type:"danger",onClick:i},{default:a(()=>t[2]||(t[2]=[c(" 查询失败 ")])),_:1})]),_:1})])}}}),I=w(L,[["__scopeId","data-v-98343e93"]]);export{I as default};
