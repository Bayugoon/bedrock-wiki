import{f as t,u as e,g as a,h as n,i as r,o as s,c as l,a as i,F as o,j as u,e as h}from"./404.md.85e282a2.js";function c(t,e){return fetch(t,e)}const d={key:0,class:"inline-block"},g={class:"space-x-2 md:-space-x-2 md:hover:space-x-2"};var p=t({expose:[],props:{mentioned:{type:Array,required:!0}},async setup(t){const p=t,{page:m,site:f}=e(),v=async function(){var t,e;let a="https://api.github.com/repos/"+f.value.themeConfig.repo+"/commits?path="+f.value.themeConfig.docsDir+"/"+m.value.relativePath;const n=await c(a,{headers:new Headers({})});let r=await n.json(),s=[];const l=t=>s.filter((e=>e.login===t)).length>0;for(let i=0;i<r.length;i++)(null==(e=null==(t=r[i])?void 0:t.author)?void 0:e.login)&&!l(r[i].author.login)&&s.push(r[i].author);for(let i=0;i<p.mentioned.length;i++){a="https://api.github.com/users/"+p.mentioned[i];const t=await c(a,{headers:new Headers({})});let e=await t.json();l(e.login)||s.push(e)}return s};let w=a(await v());return n(m,(async()=>{w.value=await v()})),(t,e)=>r(w)&&r(w).length>0?(s(),l("div",d,[i("div",g,[(s(!0),l(o,null,u(r(w),(t=>(s(),l("a",{key:t.login,href:t.html_url,alt:t.login,target:"_blank",class:"h-8 w-8 transition-spacing ease-in-out duration-150"},[i("img",{src:t.avatar_url,class:"\n\t\t\t\t\t\th-8\n\t\t\t\t\t\tw-8\n\t\t\t\t\t\trounded-full\n\t\t\t\t\t\tborder-2 border-white\n\t\t\t\t\t\tdark:border-true-gray-600\n\t\t\t\t\t\tbg-white\n\t\t\t\t\t\tdark:bg-true-gray-900\n\t\t\t\t\t",alt:t.login,title:t.login},null,8,["src","alt","title"])],8,["href","alt"])))),128))])])):h("v-if",!0)}});export default p;