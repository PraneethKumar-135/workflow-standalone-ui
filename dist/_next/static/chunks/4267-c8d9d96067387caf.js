"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4267],{34267:function(e,s,l){l.d(s,{Z:function(){return j}});var a=l(57437),t=l(43191),r=l(2265),c=l(97454),i=l(79171),n=l(16691),d=l.n(n),o=l(93046),x=l(70723),m=l(74898),h=l(24033),g=l(98297);let{TabPane:f}=g.default,u=[{key:"1",label:(0,a.jsx)("span",{children:(0,a.jsx)("div",{className:" flex flex-row items-center",children:(0,a.jsx)("div",{className:"input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ",children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex ",children:[(0,a.jsx)(d(),{src:{src:"/_next/static/media/PM.d117dffc.svg",height:48,width:48,blurWidth:0,blurHeight:0}}),(0,a.jsxs)("div",{className:"flex flex-col justify-start",children:[(0,a.jsx)("h2",{className:" text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32 ",children:"Project Manager"}),(0,a.jsx)("p",{className:" pl-2 w-32 text-left",children:"0 Members"})]})]}),(0,a.jsxs)(t.ZP,{className:"flex p-2 h-9 items-center gap-0 bg-blue-500",children:[(0,a.jsx)(m.Z,{className:"text-white text-lg"})," ",(0,a.jsx)("h1",{className:"text-white text-lg",children:"Add"})]})]})})})}),children:(0,a.jsx)(e=>{let[s,l]=(0,r.useState)({resourcePool:[{projectManager:[]}]}),[t,i]=(0,r.useState)([]),[n,m]=(0,r.useState)([]);console.log(n),(0,r.useEffect)(()=>{(async()=>{try{let e=await c.Z.get("/get_resource_by_role",{params:{designation:"Project Manager"}});console.log(e.data);let s=e.data;i(s)}catch(e){console.error("Error fetching data:",e)}})()},[]);let h=(0,o.I0)();console.log(n);var g=e=>{h((0,x.E4)({id:e})),console.log(e)},f=e=>{h((0,x.Hg)(e))};return(0,a.jsx)("div",{className:"flex flex-col gap-4 bg-white w-[100%]",children:(0,a.jsx)("div",{className:"w-[100%] px-2 flex justify-center rounded",children:(0,a.jsx)("div",{className:" w-[100%] ",children:(0,a.jsx)("div",{className:"flex flex-col gap-6",children:t.map((e,s)=>(0,a.jsx)("div",{className:"flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg",children:(0,a.jsxs)("div",{className:"flex justify-between items-center gap-6 pl-3 w-[100%]",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(d(),{src:e.image_url}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{className:"text-gray-800 font-segoe-ui text-base font-bold leading-normal",children:[e.first_name," ",e.last_name,(0,a.jsx)("span",{className:"text-blue-300",children:e.email})]}),(0,a.jsx)("h3",{className:"text-neutral-300 font-segoe-ui text-base font-normal leading-normal"})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"checkbox",onChange:()=>{g(e.emp_id),f(t)},className:"cursor-pointer"})})]})},s))})})})})},{})},{key:"2",label:(0,a.jsx)("span",{children:(0,a.jsx)("div",{className:" flex flex-row items-center",children:(0,a.jsx)("div",{className:"input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ",children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(d(),{src:{src:"/_next/static/media/UxDesign.893580c2.svg",height:48,width:48,blurWidth:0,blurHeight:0}}),(0,a.jsxs)("div",{className:"flex flex-col justify-start",children:[(0,a.jsx)("h2",{className:" text-black font-segoe-ui text-base text-left pl-2 font-normal leading-6 mr-5 w-32 ",children:"Ux Designer"}),(0,a.jsx)("p",{className:" pl-2 w-32 text-left",children:"0 Members"})]})]}),(0,a.jsxs)(t.ZP,{className:"flex p-2 h-9 items-center gap-0 bg-blue-500",children:[(0,a.jsx)(m.Z,{className:"text-white text-lg"})," ",(0,a.jsx)("h1",{className:"text-white text-lg",children:"Add"})]})]})})})}),children:(0,a.jsx)(e=>{let[s,l]=(0,r.useState)([]),[t,n]=(0,r.useState)([]),[m,h]=(0,i.Z)({resourcePool:[{uiDesigner:[]}]});var g=e=>{u((0,x.E4)({id:e})),console.log(e)},f=e=>{u((0,x.Hg)(e))};console.log(t),(0,r.useEffect)(()=>{(async()=>{try{let e=await c.Z.get("/get_resource_by_role",{params:{designation:"UI Designer"}});console.log(e.data);let s=e.data;l(s)}catch(e){console.error("Error fetching data:",e)}})()},[]);let u=(0,o.I0)();return(0,a.jsx)("div",{className:"flex flex-col gap-4 bg-white w-[100%]",children:(0,a.jsx)("div",{className:"w-[100%] px-2 flex justify-center rounded",children:(0,a.jsx)("div",{className:"rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0",children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"flex items-center justify-start py-6 pr-4 pl-4 gap-40",children:(0,a.jsx)("div",{className:"flex justify-between items-center gap-6 pl-3 w-[100%]",children:(0,a.jsx)("div",{className:"flex flex-col gap-6",children:s.map((e,l)=>(0,a.jsx)("div",{className:"flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg",children:(0,a.jsxs)("div",{className:"flex justify-between items-center gap-6 pl-3 w-[100%]",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(d(),{src:e.image_url}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{className:"text-gray-800 font-segoe-ui text-base font-bold leading-normal",children:[e.first_name," ",e.last_name,(0,a.jsx)("span",{className:"text-blue-300",children:e.email})]}),(0,a.jsx)("h3",{className:"text-neutral-300 font-segoe-ui text-base font-normal leading-normal"})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"checkbox",onChange:()=>{g(e.emp_id),f(s)},className:"cursor-pointer"})})]})},l))})})})})})})})},{})},{key:"3",label:(0,a.jsx)("span",{children:(0,a.jsx)("div",{className:" flex flex-row items-center",children:(0,a.jsx)("div",{className:"input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ",children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(d(),{src:{src:"/_next/static/media/UiDeveloper.2c88843c.svg",height:48,width:48,blurWidth:0,blurHeight:0}}),(0,a.jsxs)("div",{className:"flex flex-col justify-start",children:[(0,a.jsx)("h2",{className:" text-black font-segoe-ui text-base text-left pl-2 font-normal leading-6 mr-5 w-32 ",children:"UI Developer"}),(0,a.jsx)("p",{className:" pl-2 w-32 text-left",children:"0 Members"})]})]}),(0,a.jsxs)(t.ZP,{className:"flex p-2 h-9 items-center gap-0 bg-blue-500",children:[(0,a.jsx)(m.Z,{className:"text-white text-lg"})," ",(0,a.jsx)("h1",{className:"text-white text-lg",children:"Add"})]})]})})})}),children:(0,a.jsx)(e=>{let[s,l]=(0,r.useState)([]),[t,n]=(0,r.useState)([]),[m,h]=(0,i.Z)({resourcePool:[{uiDeveloper:[]}]});var g=e=>{u((0,x.E4)({id:e})),console.log(e)},f=e=>{u((0,x.Hg)(e))};console.log(t),(0,r.useEffect)(()=>{(async()=>{try{let e=await c.Z.get("/get_resource_by_role",{params:{designation:"UI Developer"}});console.log(e.data);let s=e.data;l(s)}catch(e){console.error("Error fetching data:",e)}})()},[]);let u=(0,o.I0)();return(0,a.jsx)("div",{className:"flex flex-col gap-4 bg-white w-[100%]",children:(0,a.jsx)("div",{className:"w-[100%] px-2 flex justify-center rounded",children:(0,a.jsx)("div",{className:" w-[100%] ",children:(0,a.jsx)("div",{className:"flex flex-col gap-6",children:s.map((e,l)=>(0,a.jsx)("div",{className:"flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg",children:(0,a.jsxs)("div",{className:"flex justify-between items-center gap-6 pl-3 w-[100%]",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(d(),{src:e.image_url}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{className:"text-gray-800 font-segoe-ui text-base font-bold leading-normal",children:[e.first_name," ",e.last_name,(0,a.jsx)("span",{className:"text-blue-300",children:e.email})]}),(0,a.jsx)("h3",{className:"text-neutral-300 font-segoe-ui text-base font-normal leading-normal"})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"checkbox",onChange:()=>{g(e.emp_id),f(s)},className:"cursor-pointer"})})]})},l))})})})})},{})},{key:"4",label:(0,a.jsx)("span",{children:(0,a.jsx)("div",{className:" flex flex-row items-center",children:(0,a.jsx)("div",{className:"input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ",children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(d(),{src:{src:"/_next/static/media/ApiDeveloper.cbe86e86.svg",height:48,width:48,blurWidth:0,blurHeight:0}}),(0,a.jsxs)("div",{className:"flex flex-col justify-start",children:[(0,a.jsx)("h2",{className:" text-black font-segoe-ui text-base text-left pl-2 font-normal leading-6 mr-5 w-32 ",children:"API Developer"}),(0,a.jsx)("p",{className:" pl-2 w-32 text-left",children:"0 Members"})]})]}),(0,a.jsxs)(t.ZP,{className:"flex p-2 h-9 items-center gap-0 bg-blue-500",children:[(0,a.jsx)(m.Z,{className:"text-white text-lg"})," ",(0,a.jsx)("h1",{className:"text-white text-lg",children:"Add"})]})]})})})}),children:(0,a.jsx)(e=>{let[s,l]=(0,r.useState)([]);(0,r.useEffect)(()=>{(async()=>{try{let e=await c.Z.get("/get_resource_by_role",{params:{designation:"API Developer"}});console.log(e.data);let s=e.data;l(s)}catch(e){console.error("Error fetching data:",e)}})()},[]);let t=(0,o.I0)();var i=e=>{t((0,x.E4)({id:e})),console.log(e)},n=e=>{t((0,x.Hg)(e))};return(0,a.jsx)("div",{className:"flex flex-col gap-4 bg-white w-[100%]",children:(0,a.jsx)("div",{className:"w-[100%] px-2 flex justify-center rounded",children:(0,a.jsx)("div",{className:" w-[100%] ",children:(0,a.jsx)("div",{className:"flex flex-col gap-6",children:s.map((e,l)=>(console.log("employ_id",e.emp_id),console.log(s),(0,a.jsx)("div",{className:"flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg",children:(0,a.jsxs)("div",{className:"flex justify-between items-center gap-6 pl-3 w-[100%]",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(d(),{src:e.image_url}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{className:"text-gray-800 font-segoe-ui text-base font-bold leading-normal",children:[e.first_name," ",e.last_name,(0,a.jsx)("span",{className:"text-blue-300",children:e.email})]}),(0,a.jsx)("h3",{className:"text-neutral-300 font-segoe-ui text-base font-normal leading-normal"})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"checkbox",className:"cursor-pointer",onChange:()=>{i(e.emp_id),n(s)}})})]})},l)))})})})})},{})},{key:"5",label:(0,a.jsx)("span",{children:(0,a.jsx)("div",{className:" flex flex-row items-center",children:(0,a.jsx)("div",{className:"input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ",children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(d(),{src:{src:"/_next/static/media/tester.7879d97f.svg",height:48,width:48,blurWidth:0,blurHeight:0}}),(0,a.jsxs)("div",{className:"flex flex-col justify-start",children:[(0,a.jsx)("h2",{className:" text-black font-segoe-ui text-base text-left pl-2 font-normal leading-6 mr-5 w-32 ",children:"Tester"}),(0,a.jsx)("p",{className:" pl-2 w-32 text-left",children:"0 Members"})]})]}),(0,a.jsxs)(t.ZP,{className:"flex p-2 h-9 items-center gap-0 bg-blue-500",children:[(0,a.jsx)(m.Z,{className:"text-white text-lg"})," ",(0,a.jsx)("h1",{className:"text-white text-lg",children:"Add"})]})]})})})}),children:(0,a.jsx)(e=>{let[s,l]=(0,r.useState)([]),[t,i]=(0,r.useState)([]),[n,m]=(0,r.useState)({Tester:[]});console.log(t);var h=e=>{f((0,x.E4)({id:e})),console.log(e)},g=e=>{f((0,x.Hg)(e))};(0,r.useEffect)(()=>{(async()=>{try{let e=await c.Z.get("/get_resource_by_role",{params:{designation:"Tester"}});console.log(e.data);let s=e.data;l(s)}catch(e){console.error("Error fetching data:",e)}})()},[]);var f=(0,o.I0)();return(0,a.jsx)("div",{className:"flex flex-col gap-4 bg-white w-[100%]",children:(0,a.jsx)("div",{className:"w-[100%] px-2 flex justify-center rounded",children:(0,a.jsx)("div",{className:" w-[100%] ",children:(0,a.jsx)("div",{className:"flex flex-col gap-6",children:s.map((e,l)=>(0,a.jsx)("div",{className:"flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg",children:(0,a.jsxs)("div",{className:"flex justify-between items-center gap-6 pl-3 w-[100%]",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(d(),{src:e.image_url}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{className:"text-gray-800 font-segoe-ui text-base font-bold leading-normal",children:[e.first_name," ",e.last_name,(0,a.jsx)("span",{className:"text-blue-300",children:e.email})]}),(0,a.jsx)("h3",{className:"text-neutral-300 font-segoe-ui text-base font-normal leading-normal"})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"checkbox",onChange:()=>{h(e.emp_id),g(s)},className:"cursor-pointer"})})]})},l))})})})})},{})},{key:"6",label:(0,a.jsx)("span",{children:(0,a.jsx)("div",{className:" flex flex-row items-center",children:(0,a.jsx)("div",{className:"input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ",children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(d(),{src:{src:"/_next/static/media/Uxresearch.f1a0f297.svg",height:48,width:48,blurWidth:0,blurHeight:0}}),(0,a.jsxs)("div",{className:"flex flex-col justify-start",children:[(0,a.jsx)("h2",{className:" text-black font-segoe-ui text-base text-left pl-2 font-normal leading-6 mr-5 w-32 ",children:"UX Researcher"}),(0,a.jsx)("p",{className:" pl-2 w-32 text-left",children:"0 Members"})]})]}),(0,a.jsxs)(t.ZP,{className:"flex p-2 h-9 items-center gap-0 bg-blue-500",children:[(0,a.jsx)(m.Z,{className:"text-white text-lg"})," ",(0,a.jsx)("h1",{className:"text-white text-lg",children:"Add"})]})]})})})}),children:(0,a.jsx)(e=>{let[s,l]=(0,r.useState)([]),[t,n]=(0,r.useState)([]),[m,h]=(0,i.Z)({resourcePool:[{uxResearcher:[]}]});(0,r.useEffect)(()=>{(async()=>{try{let e=await c.Z.get("/get_resource_by_role",{params:{designation:"Ux Researcher"}});console.log(e.data);let s=e.data;l(s)}catch(e){console.error("Error fetching data:",e)}})()},[]);let g=(0,o.I0)();console.log(t);var f=e=>{g((0,x.E4)({id:e})),console.log(e)},u=e=>{g((0,x.Hg)(e))};return(0,a.jsx)("div",{className:"flex flex-col gap-4 bg-white w-[100%]",children:(0,a.jsx)("div",{className:"w-[100%] px-2 flex justify-center rounded",children:(0,a.jsx)("div",{className:" w-[100%] ",children:(0,a.jsx)("div",{className:"flex flex-col gap-6",children:s.map((e,l)=>(0,a.jsx)("div",{className:"flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg",children:(0,a.jsxs)("div",{className:"flex justify-between items-center gap-6 pl-3 w-[100%]",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(d(),{src:e.image_url}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{className:"text-gray-800 font-segoe-ui text-base font-bold leading-normal",children:[e.first_name," ",e.last_name,(0,a.jsx)("span",{className:"text-blue-300",children:e.email})]}),(0,a.jsx)("h3",{className:"text-neutral-300 font-segoe-ui text-base font-normal leading-normal"})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"checkbox",onChange:()=>{f(e.emp_id),u(s)},className:"cursor-pointer"})})]})},l))})})})})},{})},{key:"7",label:(0,a.jsx)("span",{children:(0,a.jsx)("div",{className:" flex flex-row mb-5 items-center",children:(0,a.jsx)("div",{className:"input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ",children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(d(),{src:{src:"/_next/static/media/ci-cd.8673e923.svg",height:48,width:48,blurWidth:0,blurHeight:0}}),(0,a.jsxs)("div",{className:"flex flex-col justify-start",children:[(0,a.jsx)("h2",{className:" text-black font-segoe-ui text-base text-left pl-2 font-normal leading-6 mr-5 w-32 ",children:"CI/CD Specialist"}),(0,a.jsx)("p",{className:" pl-2 w-32 text-left",children:"0 Members"})]})]}),(0,a.jsxs)(t.ZP,{className:"flex p-2 h-9 items-center gap-0 bg-blue-500",children:[(0,a.jsx)(m.Z,{className:"text-white text-lg"})," ",(0,a.jsx)("h1",{className:"text-white text-lg",children:"Add"})]})]})})})}),children:(0,a.jsx)(e=>{let[s,l]=(0,r.useState)([]),[t,n]=(0,r.useState)([]),[m,h]=(0,i.Z)({resourcePool:[{cicd:[]}]});var g=e=>{u((0,x.E4)({id:e})),console.log(e)},f=e=>{u((0,x.Hg)(e))};(0,r.useEffect)(()=>{(async()=>{try{let e=await c.Z.get("/get_resource_by_role",{params:{designation:"CI/CD"}});console.log(e.data);let s=e.data;l(s)}catch(e){console.error("Error fetching data:",e)}})()},[]);let u=(0,o.I0)();return(0,a.jsx)("div",{className:"flex flex-col gap-4 bg-white w-[100%]",children:(0,a.jsx)("div",{className:"w-[100%] px-2 flex justify-center rounded",children:(0,a.jsx)("div",{className:" w-[100%] ",children:(0,a.jsx)("div",{className:"flex flex-col gap-6",children:s.map((e,l)=>(0,a.jsx)("div",{className:"flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg",children:(0,a.jsxs)("div",{className:"flex justify-between items-center gap-6 pl-3 w-[100%]",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(d(),{src:e.image_url}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{className:"text-gray-800 font-segoe-ui text-base font-bold leading-normal",children:[e.first_name," ",e.last_name,(0,a.jsx)("span",{className:"text-blue-300",children:e.email})]}),(0,a.jsx)("h3",{className:"text-neutral-300 font-segoe-ui text-base font-normal leading-normal"})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"checkbox",onChange:()=>{g(e.emp_id),f(s)},className:"cursor-pointer"})})]})},l))})})})})},{})}],p=e=>{console.log(e)};function j(e){let{result:s}=e,[l,t]=(0,i.Z)({});return console.log(s),(0,h.useRouter)(),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(g.default,{defaultActiveKey:"1",tabPosition:"left",onChange:p,className:"custom-tabs",children:u.map(e=>(0,a.jsx)(f,{tab:e.label,children:e.children},e.key))})})}},70723:function(e,s,l){l.d(s,{E4:function(){return t},Hg:function(){return i},N3:function(){return c}});let a=(0,l(82308).oM)({name:"addResource",initialState:{id:[{prjectId:{}}],resoucesInfo:[],UIUXDeveloper:[{resoucesInfo:{}}],FrontEndDeveloper:[{resoucesInfo:{}}],BackendDeveloper:[{resoucesInfo:{}}],SRE:[{resoucesInfo:{}}],DevOpsEngineer:[{resoucesInfo:{}}],AutomationTester:[{resoucesInfo:{}}],ProjectManager:[{resoucesInfo:{}}],UXDesigner:[{resoucesInfo:{}}],UIDeveloper:[{resoucesInfo:{}}],APIDeveloper:[{resoucesInfo:{}}],Tester:[{resoucesInfo:{}}],UXResearcher:[{resoucesInfo:{}}],CICDSpecialist:[{resoucesInfo:{}}]},reducers:{addResources:(e,s)=>{e.id.push(s.payload),console.log(s.payload)},addProjectId:(e,s)=>{e.id[0].prjectId=s.payload,console.log(s.payload)},addResourcesData:(e,s)=>{e.resoucesInfo.push(s.payload),console.log("resources Data: ",s.payload)},addResourcesPM:(e,s)=>{e.ProjectManager[0].resoucesInfo=s.payload,console.log("resources Data: ",s.payload)},addResourcesUxDesigner:(e,s)=>{e.UXDesigner[0].resoucesInfo=s.payload,console.log("resources Data: ",s.payload)},addResourcesUiDeveloper:(e,s)=>{e.UIDeveloper[0].resoucesInfo=s.payload,console.log("resources Data: ",s.payload)},addResourcesApiDeveloper:(e,s)=>{e.APIDeveloper[0].resoucesInfo=s.payload,console.log("resources Data: ",s.payload)},addResourcesTester:(e,s)=>{e.Tester[0].resoucesInfo=s.payload,console.log("resources Data: ",s.payload)},addResourcesUxResearch:(e,s)=>{e.UXResearcher[0].resoucesInfo=s.payload,console.log("resources Data: ",s.payload)},addResourcesCiCd:(e,s)=>{e.CICDSpecialist[0].resoucesInfo=s.payload,console.log("resources Data: ",s.payload)},removeResources:(e,s)=>e.filter(e=>e.id!==s.payload)}}),{addResources:t,removeResources:r,addProjectId:c,addResourcesData:i,addResourcesPM:n,addResourcesUxDesigner:d,addResourcesUiDeveloper:o,addResourcesApiDeveloper:x,addResourcesTester:m,addResourcesUxResearch:h,addResourcesCiCd:g}=a.actions;s.ZP=a.reducer}}]);