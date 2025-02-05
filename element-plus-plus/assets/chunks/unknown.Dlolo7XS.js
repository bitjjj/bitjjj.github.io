import{b as C}from"./index.TpyptqBw.js";import{y as N,r as f,ag as k,z as y,H as A,I as m,Q as _,M as T,O as U,B as D,A as $,P as te,a4 as Qe,f as qt,ad as Kt,b as Qt,a6 as Zt,L as en,u as Ze,aq as tn,J as _e,o as nn,n as on}from"./framework.CPxOa8kE.js";import{E as ln}from"./index.B9Bsjv3i.js";import{q as an,r as Pt}from"./theme.DjBo4ZnZ.js";import"./index.Dst_foRB.js";import"./index.B_-WkXPs.js";import"./index.BYnzoGgo.js";import"./index.C-KQIWgH.js";import"./index.DkQxVQFo.js";import"./index.Chi0Z4HK.js";const jn=N({__name:"basic",setup(o){const e=f(!1),t=f([]),n=f(!1),l=f([{id:1,name:"柏庐",sex:"女",org:"某个公司",des:"来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计",otherInfo:{age:20}},{id:2,name:"军结",sex:"男",org:"某个公司",des:"经验丰富的前端工程师",otherInfo:{age:22}},{id:3,name:"钞洋",sex:"男",org:"某个公司",des:"90后交互设计师",otherInfo:{age:28}}]),a=f([{title:"#",slotName:"tableIndex",headerSlotName:"firstCol",width:"3em"},{title:"用户名",prop:"name"},{title:"年龄",prop:"otherInfo.age"},{title:"单位",prop:"org",align:"center"},{title:"简介",prop:"des",align:"center",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"操作",slotName:"handle",align:"center"}]),r=()=>{e.value?(t.value.splice(0,t.value.length),t.value.push(...l.value.map(d=>d.id)),n.value=!1):t.value.splice(0,t.value.length)},i=()=>{e.value=t.value.length===l.value.length,t.value.length>0&&e.value==!1?n.value=!0:n.value=!1},s=(d,c,h)=>{console.log("rowClicked",d,c,h)},p=(d,c,h,x,g)=>{console.log("cellClicked",d,c,h,x,g)};return(d,c)=>{const h=k("el-checkbox"),x=C;return y(),A(x,{cols:a.value,data:l.value,onRowClick:s,onCellClick:p},{firstCol:m(()=>[_(h,{modelValue:e.value,"onUpdate:modelValue":c[0]||(c[0]=g=>e.value=g),indeterminate:n.value,onChange:r},null,8,["modelValue","indeterminate"])]),tableIndex:m(({row:g})=>[_(h,{modelValue:t.value,"onUpdate:modelValue":c[1]||(c[1]=E=>t.value=E),value:g.id,onChange:E=>i(g.id)},{default:m(()=>c[2]||(c[2]=[T(U(""))])),_:2},1032,["modelValue","value","onChange"])]),handle:m(()=>c[3]||(c[3]=[D("a",null,"修改",-1)])),_:1},8,["cols","data"])}}}),Jn=N({__name:"border",setup(o){const e=f([{id:1,name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！"},{id:2,name:"李四",sex:"男",org:"某个公司",des:"来自中国"},{id:3,name:"张三",sex:"男",org:"某个公司",des:"来自中国北方的寒冷的城市！"}]),t=f([{title:"#",slotName:"tableIndex"},{title:"用户名",prop:"name"},{title:"性别",prop:"sex"},{title:"单位",prop:"org"},{title:"简介",prop:"des"},{title:"操作",slotName:"handle",align:"center"}]),n=f([{value:"borderless",label:"borderless"},{value:"border-x",label:"border-x"},{value:"border-y",label:"border-y"},{value:"bordered",label:"bordered"}]),l=f("borderless");return(a,r)=>{const i=k("el-option"),s=k("el-select"),p=C;return y(),$(te,null,[_(s,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=d=>l.value=d),clearable:"",placeholder:"请选择",class:"w-200 m-b-lg"},{default:m(()=>[(y(!0),$(te,null,Qe(n.value,d=>(y(),A(i,{key:d.value,label:d.label,value:d.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),_(p,{cols:t.value,data:e.value,border:l.value,padding:"0"},{tableIndex:m(({rowIndex:d})=>[D("span",null,U(d+1),1)]),handle:m(()=>r[1]||(r[1]=[D("a",null,"修改",-1)])),_:1},8,["cols","data","border"])],64)}}}),qn=N({__name:"padding",setup(o){const e=f([{id:1,name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！"},{id:2,name:"李四",sex:"男",org:"某个公司",des:"来自中国"},{id:3,name:"张三",sex:"男",org:"某个公司",des:"来自中国北方的寒冷的城市！"}]),t=f([{title:"#",slotName:"tableIndex"},{title:"用户名",prop:"name"},{title:"性别",prop:"sex"},{title:"单位",prop:"org"},{title:"简介",prop:"des"},{title:"操作",slotName:"handle",align:"center"}]),n=f([{value:"0",label:"none"},{value:"8px",label:"8px"},{value:"12px",label:"12px"},{value:"16px",label:"16px"},{value:"20px",label:"20px"},{value:"24px",label:"24px"}]),l=f("0"),a=f("0");return(r,i)=>{const s=k("el-option"),p=k("el-select"),d=k("el-button"),c=C;return y(),$(te,null,[_(p,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=h=>l.value=h),clearable:"",placeholder:"请选择表格填充",class:"m-b-md w-200"},{default:m(()=>[(y(!0),$(te,null,Qe(n.value,h=>(y(),A(s,{key:h.value,label:h.label,value:h.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),_(p,{modelValue:a.value,"onUpdate:modelValue":i[1]||(i[1]=h=>a.value=h),clearable:"",placeholder:"请选择单元格填充",class:"m-l-md m-b-md w-200"},{default:m(()=>[(y(!0),$(te,null,Qe(n.value,h=>(y(),A(s,{key:h.value,label:h.label,value:h.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),_(c,{cols:t.value,data:e.value,border:"border-x",padding:l.value,"cell-padding":a.value},{tableIndex:m(({rowIndex:h})=>[D("span",null,U(h+1),1)]),handle:m(()=>[_(d,{link:"",type:"primary"},{default:m(()=>i[2]||(i[2]=[T("修改")])),_:1})]),_:1},8,["cols","data","padding","cell-padding"])],64)}}}),Kn=N({__name:"hover",setup(o){const e=f([{id:1,name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！"},{id:2,name:"李四",sex:"男",org:"某个公司",des:"来自中国"},{id:3,name:"张三",sex:"男",org:"某个公司",des:"来自中国北方的寒冷的城市！"}]),t=f([{title:"#",slotName:"tableIndex"},{title:"用户名",prop:"name"},{title:"性别",prop:"sex"},{title:"单位",prop:"org"},{title:"简介",prop:"des"},{title:"操作",slotName:"handle",align:"center"}]);return(n,l)=>{const a=k("el-button"),r=C;return y(),A(r,{cols:t.value,data:e.value,"cross-hover":"",hover:""},{tableIndex:m(({rowIndex:i})=>[D("span",null,U(i+1),1)]),handle:m(()=>[_(a,{link:"",type:"primary"},{default:m(()=>l[0]||(l[0]=[T("修改")])),_:1})]),_:1},8,["cols","data"])}}}),Qn=N({__name:"stripe",setup(o){const e=f([{id:1,name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！"},{id:2,name:"李四",sex:"男",org:"某个公司",des:"来自中国"},{id:3,name:"张三",sex:"男",org:"某个公司",des:"来自中国北方的寒冷的城市！"}]),t=f([{title:"#",slotName:"tableIndex"},{title:"用户名",prop:"name"},{title:"性别",prop:"sex"},{title:"单位",prop:"org"},{title:"简介",prop:"des"},{title:"操作",slotName:"handle",align:"center"}]);return(n,l)=>{const a=k("el-button"),r=C;return y(),A(r,{cols:t.value,data:e.value,stripe:""},{tableIndex:m(({rowIndex:i})=>[D("span",null,U(i+1),1)]),handle:m(()=>[_(a,{link:"",type:"primary"},{default:m(()=>l[0]||(l[0]=[T("修改")])),_:1})]),_:1},8,["cols","data"])}}}),Zn=N({__name:"size",setup(o){const e=f([{id:1,name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！"},{id:2,name:"李四",sex:"男",org:"某个公司",des:"来自中国"},{id:3,name:"张三",sex:"男",org:"某个公司",des:"来自中国北方的寒冷的城市！"}]),t=f([{title:"#",slotName:"tableIndex"},{title:"用户名",prop:"name"},{title:"性别",prop:"sex"},{title:"单位",prop:"org"},{title:"简介",prop:"des"},{title:"操作",slotName:"handle",align:"center"}]),n=f([{value:"sm",label:"sm"},{value:"md",label:"md"},{value:"lg",label:"lg"}]),l=f("md");return(a,r)=>{const i=k("el-option"),s=k("el-select"),p=C;return y(),$(te,null,[_(s,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=d=>l.value=d),clearable:"",placeholder:"请选择",class:"m-b-md w-200"},{default:m(()=>[(y(!0),$(te,null,Qe(n.value,d=>(y(),A(i,{key:d.value,label:d.label,value:d.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),_(p,{cols:t.value,data:e.value,size:l.value,class:"borderless-last"},{tableIndex:m(({rowIndex:d})=>[D("span",null,U(d+1),1)]),handle:m(()=>r[1]||(r[1]=[D("a",null,"修改",-1)])),_:1},8,["cols","data","size"])],64)}}}),eo=N({__name:"resize",setup(o){const e=f([{id:1,name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！"},{id:2,name:"李四",sex:"男",org:"某个公司",des:"来自中国"},{id:3,name:"张三",sex:"男",org:"某个公司",des:"来自中国北方的寒冷的城市！"}]),t=f([{title:"#",slotName:"tableIndex",width:"4em"},{title:"用户名",prop:"name",width:"8em"},{title:"性别",prop:"sex",width:"4em"},{title:"单位",prop:"org",width:""},{title:"简介",prop:"des",width:""},{title:"操作",slotName:"handle",align:"center",width:"6em"}]);return(n,l)=>{const a=C;return y(),A(a,{cols:t.value,data:e.value,border:"bordered",resize:""},{tableIndex:m(({rowIndex:r})=>[D("span",null,U(r+1),1)]),handle:m(()=>l[0]||(l[0]=[D("a",null,"修改",-1)])),_:1},8,["cols","data"])}}}),rn={style:{"background-color":"#25303f",height:"240px",padding:"12px"}},to=N({__name:"list",setup(o){const e=f([{id:1,name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！",icon:"Briefcase"},{id:2,name:"李四",sex:"男",org:"某个公司",des:"来自中国",icon:"ChartPie"},{id:3,name:"张三",sex:"男",org:"某个公司",des:"来自中国北方的寒冷的城市！",icon:"Archive"},{id:4,name:"李四2",sex:"男",org:"某个公司",des:"来自中国",icon:"Archive"},{id:5,name:"李四3",sex:"男",org:"某个公司",des:"来自中国",icon:"Archive"},{id:6,name:"李四4",sex:"男",org:"某个公司",des:"来自中国",icon:"Archive"}]),t=f([{title:"#",slotName:"tableIndex"},{title:"用户名",prop:"name"},{title:"性别",prop:"sex"},{title:"单位",prop:"org"},{title:"简介",prop:"des"},{title:"操作",slotName:"handle",align:"center"}]);return(n,l)=>{const a=C,r=k("el-scrollbar");return y(),$("div",rn,[_(r,{style:{height:"200px"}},{default:m(()=>[_(a,{cols:t.value,data:e.value,"gap-y":"8px",list:"","fixed-header":""},{tableIndex:m(({row:i})=>[T(U(i.icon),1)]),handle:m(()=>l[0]||(l[0]=[D("a",null,"修改",-1)])),_:1},8,["cols","data"])]),_:1})])}}}),sn={class:"table-scroll",style:{height:"200px"}},no=N({__name:"fixed-header",setup(o){const e=f([{id:1,name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！"},{id:2,name:"李四",sex:"男",org:"某个公司",des:"来自中国"},{id:3,name:"张三",sex:"男",org:"某个公司",des:"来自中国北方的寒冷的城市！"},{id:4,name:"李四2",sex:"男",org:"某个公司",des:"来自中国"},{id:5,name:"李四3",sex:"男",org:"某个公司",des:"来自中国"},{id:6,name:"李四4",sex:"男",org:"某个公司",des:"来自中国"}]),t=f([{title:"#",slotName:"tableIndex"},{title:"用户名",prop:"name"},{title:"性别",prop:"sex"},{title:"单位",prop:"org"},{title:"简介",prop:"des"},{title:"操作",slotName:"handle",align:"center"}]);return(n,l)=>{const a=k("el-button"),r=C;return y(),$("div",sn,[_(r,{cols:t.value,data:e.value,border:"bordered","fixed-header":""},{tableIndex:m(({rowIndex:i})=>[D("span",null,U(i+1),1)]),handle:m(()=>[_(a,{link:"",type:"primary"},{default:m(()=>l[0]||(l[0]=[T("修改")])),_:1})]),_:1},8,["cols","data"])])}}}),pn={class:"table-scroll scroll-column"},oo=N({__name:"fixed-column",setup(o){const e=f([{id:1,name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！",no:"478343",level:"P8",years:10,field1:"测试字段1",field2:"测试字段2",field3:"测试字段3"},{id:2,name:"李四",sex:"男",org:"某个公司",des:"来自中国",no:"238343",level:"P6",years:3,field1:"测试字段1",field2:"测试字段2",field3:"测试字段3"},{id:3,name:"张三",sex:"男",org:"某个公司",des:"来自中国北方的寒冷的城市！",no:"178343",level:"P7",years:5,field1:"测试字段1",field2:"测试字段2",field3:"测试字段3"}]),t=f([{title:"序号",prop:"",slotName:"tableIndex",fixed:"left",minWidth:"50px"},{title:"姓名",prop:"name",showTooltip:!0,minWidth:"150px"},{title:"性别",prop:"sex",width:"50px"},{title:"工号",prop:"no",showTooltip:!0,minWidth:"120px",fixed:{position:"left",distance:"auto"}},{title:"职级",prop:"level"},{title:"司龄",prop:"years"},{title:"字段1",prop:"field1"},{title:"字段2",prop:"field2"},{title:"右自动固定",prop:"field3",fixed:{position:"right",distance:"auto"}},{title:"描述",prop:"des",showTooltip:!0,minWidth:"400px"},{title:"单位",prop:"org",showTooltip:!0,minWidth:"150px",fixed:{position:"right",distance:"auto"}},{title:"操作",prop:"",slotName:"handle",align:"center",fixed:"right"}]);return(n,l)=>{const a=k("el-button"),r=C;return y(),$("div",pn,[_(r,{cols:t.value,data:e.value,border:"border-x"},{tableIndex:m(({rowIndex:i})=>[D("span",null,U(i+1),1)]),handle:m(()=>[_(a,{link:"",type:"primary"},{default:m(()=>l[0]||(l[0]=[T("修改")])),_:1})]),_:1},8,["cols","data"])])}}}),dn={class:"table-scroll",style:{height:"200px"}},lo=N({__name:"fixed-row",setup(o){let e=0;const t={name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！"},n=f(new Array(22).fill(0).map(r=>Object.assign(JSON.parse(JSON.stringify(t)),{id:e++}))),l=f([{title:"序号",prop:"",slotName:"tableIndex"},{title:"姓名",prop:"name",showTooltip:!0,width:"100px"},{title:"性别",prop:"sex",width:"50px"},{title:"单位",prop:"org",showTooltip:!0,width:"150px"},{title:"描述",prop:"des",showTooltip:!0,width:"400px"},{title:"操作",prop:"",slotName:"handle",align:"center"}]),a=({rowIndex:r})=>r%5===0?{backgroundColor:"var(--el-fill-color-darker)",zIndex:10,position:"sticky",top:"48px"}:{};return(r,i)=>{const s=k("el-button"),p=C;return y(),$("div",dn,[_(p,{cols:l.value,data:n.value,border:"border-x","fixed-header":"","cell-style":a},{tableIndex:m(({rowIndex:d})=>[D("span",null,U(d),1)]),handle:m(()=>[_(s,{link:"",type:"primary"},{default:m(()=>i[0]||(i[0]=[T("修改")])),_:1})]),_:1},8,["cols","data"])])}}}),ao=N({__name:"fixed-all",setup(o){const e=f([{id:1,name:"费文轩",sex:"男",org:"14933867329",des:"安徽省六安市东港镇港下锡港东路8栋1204室"},{id:2,name:"刘林",sex:"男",org:"11381484641",des:"内蒙锡林浩特市北六门村南河街8栋1204室"},{id:3,name:"金玥傲",sex:"男",org:"15000688905",des:"黑龙江省北安市三岔路浦沅宿舍131号"},{id:4,name:"王武",sex:"男",org:"18102220035",des:"湖北省洪湖市东五条路林机小区948号"},{id:5,name:"卞嘉怡",sex:"女",org:"11022218210",des:"山东省招远市并州北路2条8号"},{id:6,name:"和文杰",sex:"男",org:"12548097666",des:"陕西省安康市金国里506号517房"},{id:7,name:"潘瑞堂",sex:"男",org:"12065726257",des:"安徽省天长市金霞街道国际商业中心121号"},{id:8,name:"关爽",sex:"女",org:"15570593023",des:"四川省简阳市前进路506号517房"}]),t=f([{title:"#",prop:"",slotName:"tableIndex",minWidth:"4em"},{title:"姓名",prop:"name",minWidth:"7em",fixed:"left"},{title:"性别",prop:"sex",minWidth:"6em"},{title:"手机号",prop:"org",minWidth:"10em"},{title:"住址",prop:"des",minWidth:"26em"},{title:"操作",prop:"",slotName:"handle",align:"center",fixed:"right"}]);return(n,l)=>{const a=k("el-button"),r=C,i=k("el-scrollbar");return y(),A(i,{height:"200px"},{default:m(()=>[_(r,{cols:t.value,data:e.value,border:"border-x","fixed-header":""},{tableIndex:m(({rowIndex:s})=>[D("span",null,U(s+1),1)]),handle:m(()=>[_(a,{link:"",type:"primary"},{default:m(()=>l[0]||(l[0]=[T("修改")])),_:1})]),_:1},8,["cols","data"])]),_:1})}}}),ro=N({__name:"load-more",setup(o){const e=f();let t=1;function n(){return t++}const l=[{id:n(),name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！"},{id:n(),name:"李四",sex:"男",org:"某个公司",des:"来自中国"},{id:n(),name:"张三",sex:"男",org:"某个公司",des:"来自中国北方的寒冷的城市！"},{id:n(),name:"张三2",sex:"男",org:"某个公司",des:"来自中国北方的寒冷的城市！"}],a=f(!1),r=f(JSON.parse(JSON.stringify(l))),i=f([{title:"#",slotName:"tableIndex",width:"8%"},{title:"用户名",prop:"name",width:"15%"},{title:"性别",prop:"sex",width:"8%"},{title:"单位",prop:"org",width:"20%"},{title:"简介",prop:"des"},{title:"操作",slotName:"handle",align:"center",width:"10%"}]),s=qt(()=>r.value.length<12),p=()=>{a.value||!s.value||(a.value=!0,window.setTimeout(()=>{const h=JSON.parse(JSON.stringify(l));h.forEach(x=>{x.id=n(),x.name=x.name+x.id}),r.value.push(...h),a.value=!1},300))},{arrivedState:d}=an(e,{behavior:"smooth"}),{bottom:c}=Kt(d);return Qt(c,()=>{c.value&&p()}),(h,x)=>{const g=k("el-button"),E=ln,Y=k("el-space"),K=C;return y(),$("div",{ref_key:"divWrapper",ref:e,style:{height:"200px","overflow-y":"scroll"}},[_(K,{cols:i.value,data:r.value,border:"border-x","fixed-header":""},Zt({tableIndex:m(({rowIndex:F})=>[D("span",null,U(F+1),1)]),handle:m(()=>[_(g,{link:"",type:"primary"},{default:m(()=>x[0]||(x[0]=[T("修改")])),_:1})]),_:2},[s.value?{name:"more",fn:m(()=>[a.value?(y(),A(Y,{key:0,size:"large"},{default:m(()=>[_(E,{size:"16px"}),x[1]||(x[1]=D("span",null,"正在加载...",-1))]),_:1})):en("",!0)]),key:"0"}:void 0]),1032,["cols","data"])],512)}}}),io=N({__name:"header",setup(o){const e=f([{id:1,name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！"},{id:2,name:"李四",sex:"男",org:"某个公司",des:"来自中国"},{id:3,name:"张三",sex:"男",org:"某个公司",des:"来自中国北方的寒冷的城市！"}]),t=f([{title:"#",slotName:"tableIndex"},{title:"用户名",prop:"name"},{title:"性别",prop:"sex"},{title:"单位",prop:"org"},{title:"简介",prop:"des"},{title:"操作",slotName:"handle",align:"center"}]);return(n,l)=>{const a=k("el-button"),r=C;return y(),A(r,{cols:t.value,data:e.value,hover:"","show-header":!1},{tableIndex:m(({rowIndex:i})=>[D("span",null,U(i+1),1)]),handle:m(()=>[_(a,{link:"",type:"primary"},{default:m(()=>l[0]||(l[0]=[T("修改")])),_:1})]),_:1},8,["cols","data"])}}}),so=N({__name:"sortable",setup(o){const e=[{id:1,name:"范xxxx",sex:"女",org:"某个公司",des:"来自安全应急UED的设计师来自安全应急UED的设计"},{id:2,name:"xxx",sex:"男",org:"某个公司",des:"经验丰富的前端工程师"},{id:3,name:"王ssss",sex:"男",org:"某个公司",des:"90后交互设计师"}],t=f(JSON.parse(JSON.stringify(e))),n=f([{title:"序号",prop:"id",headerSlotName:"index"},{title:"用户名",prop:"name",sortable:!0},{title:"性别",prop:"sex",sortable:!1},{title:"单位",prop:"org",sortable:"descending"},{title:"简介",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},sortable:"ascending"}]),l=(a,r)=>{console.log("soring...",a,r),r?t.value.sort((i,s)=>{const p=String(i[a]).localeCompare(String(s[a]));return r==="ascending"?p:p*-1}):t.value=JSON.parse(JSON.stringify(e))};return(a,r)=>(y(),A(Ze(C),{cols:n.value,data:t.value,onSortChange:l},{index:m(()=>[r[1]||(r[1]=T(" 自定义列 ")),_(Ze(C).SortableIcon,{sortable:"",onSortChange:r[0]||(r[0]=i=>l("id",i))})]),_:1},8,["cols","data"]))}}),po=N({__name:"filter",setup(o){const e=f([{id:1,name:"范xx",sex:"女",org:"某个公司",des:"来自安全应急UED的设计师来自安全应急UED的设计"},{id:2,name:"xxx",sex:"男",org:"某个公司",des:"经验丰富的前端工程师"},{id:3,name:"王xxx",sex:"男",org:"某个公司",des:"90后交互设计师"}]),t=f([{title:"序号",prop:"id",headerSlotName:"index"},{title:"用户名",prop:"name",filter:{slotName:"filterSlot",placement:"top",popperClass:"test-filter-slot"}},{title:"单位",prop:"org"},{title:"简介",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},filter:{slotName:"filterSlot"}},{title:"操作",slotName:"handle",align:"center"}]),n=f([]);return(l,a)=>{const r=k("el-checkbox"),i=k("el-space"),s=k("el-button"),p=tn("mode");return y(),A(Ze(C),{cols:t.value,data:e.value},{filterSlot:m(({close:d})=>[_(i,{direction:"vertical",size:"large"},{default:m(()=>[_(i,{direction:"vertical",size:"large"},{default:m(()=>[_e((y(),A(r,{value:"1"},{default:m(()=>a[0]||(a[0]=[T("条件1")])),_:1})),[[p,n.value]]),_e((y(),A(r,{value:"2"},{default:m(()=>a[1]||(a[1]=[T("条件2")])),_:1})),[[p,n.value]]),_e((y(),A(r,{value:"3"},{default:m(()=>a[2]||(a[2]=[T("条件3")])),_:1})),[[p,n.value]])]),_:1}),_(s,{type:"primary",size:"sm",class:"m-t-md",onClick:d},{default:m(()=>a[3]||(a[3]=[T("确定")])),_:2},1032,["onClick"])]),_:2},1024)]),index:m(()=>[a[8]||(a[8]=T(" 自定义列 ")),_(Ze(C).FilterIcon,{placement:"right"},{default:m(({close:d})=>[_(i,{direction:"vertical",size:"large"},{default:m(()=>[_(i,{direction:"vertical",size:"large"},{default:m(()=>[_e((y(),A(r,{value:"1"},{default:m(()=>a[4]||(a[4]=[T("条件1")])),_:1})),[[p,n.value]]),_e((y(),A(r,{value:"2"},{default:m(()=>a[5]||(a[5]=[T("条件2")])),_:1})),[[p,n.value]]),_e((y(),A(r,{value:"3"},{default:m(()=>a[6]||(a[6]=[T("条件3")])),_:1})),[[p,n.value]])]),_:1}),_(s,{type:"primary",size:"sm",class:"m-t-md",onClick:d},{default:m(()=>a[7]||(a[7]=[T("确定")])),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["cols","data"])}}}),co=N({__name:"highlight",setup(o){const e=f(),t=f([{id:1,name:"范xxxx",sex:"女",org:"某个公司",des:"来自安全应急UED的设计师来自安全应急UED的设计"},{id:2,name:"xxx",sex:"男",org:"某个公司",des:"经验丰富的前端工程师"},{id:3,name:"王ssss",sex:"男",org:"某个公司",des:"90后交互设计师"}]),n=f([{title:"序号",prop:"id",headerSlotName:"index"},{title:"用户名",prop:"name",sortable:!0,filter:{slotName:"filterSlot",placement:"top",popperClass:"test-filter-slot"}},{title:"性别",prop:"sex"},{title:"单位",prop:"org"},{title:"简介",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},filter:{slotName:"filterSlot"}},{title:"操作",slotName:"handle",align:"center"}]),l=(i,s)=>{console.log(i,s)},a=()=>{console.log("row-click")},r=i=>{e.value.setCurrentRow(i)};return(i,s)=>{const p=C,d=k("el-button");return y(),$(te,null,[_(p,{ref_key:"tableRef",ref:e,cols:n.value,data:t.value,"highlight-current-row":"",onCurrentChange:l,onRowClick:a},null,8,["cols","data"]),s[4]||(s[4]=D("br",null,null,-1)),_(d,{class:"m-r-md",onClick:s[0]||(s[0]=c=>r(t.value[0]))},{default:m(()=>s[2]||(s[2]=[T("选中第一行")])),_:1}),_(d,{onClick:s[1]||(s[1]=c=>r())},{default:m(()=>s[3]||(s[3]=[T("取消选择")])),_:1})],64)}}}),cn=["onClick"],uo=N({__name:"expand",setup(o){const e=f(),t=f([{id:1,name:"范xx",sex:"女",org:"某个公司",des:"来自安全应急UED的设计师来自安全应急UED的设计"},{id:2,name:"xxx",sex:"男",org:"某个公司",des:"经验丰富的前端工程师"},{id:3,name:"王xx",sex:"男",org:"某个公司",des:"90后交互设计师"}]),n=f([{title:"#",prop:"id",expand:{slotName:"index",hideLabel:!0}},{title:"用户名",prop:"name",slotName:"name",expand:{slotName:"nameExpand"}},{title:"性别",prop:"sex"},{title:"单位",prop:"org"},{title:"简介",prop:"des",showTooltip:!0,width:"40%",expand:{slotName:"des"},tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"操作",slotName:"handle",align:"center"}]),l=a=>{e.value.toggleExpand(a.id,"nameExpand")};return(a,r)=>{const i=C;return y(),A(i,{ref_key:"tableRef",ref:e,cols:n.value,data:t.value,"expand-row-keys":["1index","2nameExpand"]},{index:m(({row:s})=>[D("p",null,U(s.org)+" / "+U(s.des),1)]),name:m(({row:s})=>[D("a",{href:"javascript:;",onClick:p=>l(s)},"点我展开",8,cn),T(" / "+U(s.name),1)]),nameExpand:m(()=>r[0]||(r[0]=[D("p",null,"手工展开数据",-1)])),des:m(({row:s})=>[D("p",null,U(s.sex)+" / "+U(s.des),1)]),_:1},8,["cols","data"])}}}),mo=N({__name:"tree",setup(o){let e=1e4;const t=f(),n=f([{title:"ID",slotName:"tableIndex"},{title:"用户名",prop:"name"},{title:"性别",prop:"sex"},{title:"单位",prop:"org"},{title:"简介",prop:"des",width:"220px",showTooltip:!0},{title:"操作",slotName:"handle",align:"center"}]),l=(a,r,i)=>{window.setTimeout(()=>{i([{id:e++,name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市哦！",hasChildren:!0},{id:e++,name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！",children:[{id:e++,name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！"}]}])},3e3)};return Pt&&window.setTimeout(()=>{t.value=[{id:1,name:"王二麻子",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市啊！",children:[{id:11,name:"王二麻子11",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！",children:[{id:111,name:"王二麻子111",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！"},{id:112,name:"王二麻子112",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！"}]},{id:12,name:"王二麻子12",sex:"男",org:"某个公司",des:"来自中国南方的温暖城市！",children:[]}]},{id:2,name:"李四",sex:"男",org:"某个公司",des:"来自中国",hasChildren:!0},{id:3,name:"张三",sex:"男",org:"某个公司",des:"来自中国北方的寒冷的城市！"}]},100),(a,r)=>{const i=C;return y(),$(te,null,[_(i,{cols:n.value,data:t.value,load:l,"expand-row-keys":["1"]},{tableIndex:m(({row:s})=>[D("span",null,U(s.id),1)]),handle:m(()=>r[0]||(r[0]=[D("a",null,"修改",-1)])),_:1},8,["cols","data"]),r[2]||(r[2]=D("br",null,null,-1)),r[3]||(r[3]=D("br",null,null,-1)),_(i,{cols:n.value,data:t.value,load:l,"expand-row-keys":["1"],"first-column-index":1},{tableIndex:m(({row:s})=>[D("span",null,U(s.id),1)]),handle:m(()=>r[1]||(r[1]=[D("a",null,"修改",-1)])),_:1},8,["cols","data"])],64)}}}),fo=N({__name:"span-method",setup(o){const e=f([{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}]),t=f([{title:"id",prop:"id"},{title:"用户名",prop:"name"},{title:"Amount1",prop:"amount1"},{title:"Amount2",prop:"amount2"},{title:"Amount3",prop:"amount3"}]),n=({rowIndex:a,columnIndex:r})=>{if(a%2===0){if(r===0)return[1,2];if(r===1)return[0,0]}},l=({rowIndex:a,columnIndex:r})=>{if(r===0)return a%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}};return(a,r)=>{const i=C;return y(),$(te,null,[_(i,{cols:t.value,data:e.value,border:"bordered","span-method":n},null,8,["cols","data"]),_(i,{cols:t.value,data:e.value,border:"bordered",class:"m-t-md","span-method":l},null,8,["cols","data"])],64)}}}),ho=N({__name:"multi-header",setup(o){const e=f([{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]),t=f([{title:"日期",prop:"date"},{title:"配送信息",prop:"delivery",children:[{title:"姓名",prop:"name"},{title:"地址信息",prop:"address",children:[{title:"省/市",prop:"state"},{title:"城市",prop:"city"},{title:"地址",prop:"address"},{title:"操作",prop:"zip",slotName:"handle"}]}]}]);return(n,l)=>{const a=C;return y(),A(a,{cols:t.value,data:e.value,border:"bordered"},{handle:m(()=>l[0]||(l[0]=[D("a",null,"修改",-1)])),_:1},8,["cols","data"])}}}),go=N({__name:"foot",setup(o){const e=f([{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}]),t=f([{title:"id",prop:"id"},{title:"用户名",prop:"name"},{title:"Amount1",prop:"amount1"},{title:"Amount2",prop:"amount2"},{title:"Amount3",prop:"amount3"}]);return(n,l)=>{const a=C;return y(),A(a,{cols:t.value,data:e.value,border:"bordered"},{foot:m(()=>l[0]||(l[0]=[D("tr",null,[D("td",{colspan:"2"},[D("strong",null,"合计")]),D("td",null,"￥3232"),D("td",null,"￥1212.22"),D("td",null,"￥90.22")],-1)])),_:1},8,["cols","data"])}}}),bo=N({__name:"hide-column",setup(o){const e=f(),t=f([{id:1,name:"范xxx",sex:"女",org:"某个公司",des:"来自安全应急UED的设计师来自安全应急"},{id:2,name:"xxx",sex:"男",org:"某个公司",des:"经验丰富的前端工程师"},{id:3,name:"王xxxxx",sex:"男",org:"某个公司",des:"90后交互设计师"}]),n=f([{title:"#",prop:"id"},{title:"用户名",prop:"name"},{title:"性别",prop:"sex"},{title:"单位",prop:"org",align:"center"},{title:"简介",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"操作",slotName:"handle",align:"center"}]),l=()=>{e.value.toggleColumn(2)};return(a,r)=>{const i=C,s=k("el-button");return y(),$(te,null,[_(i,{ref_key:"simpleTableRef",ref:e,cols:n.value,data:t.value},{handle:m(()=>r[0]||(r[0]=[D("a",null,"修改",-1)])),_:1},8,["cols","data"]),r[2]||(r[2]=D("br",null,null,-1)),r[3]||(r[3]=D("br",null,null,-1)),_(s,{type:"primary",onClick:l},{default:m(()=>r[1]||(r[1]=[T("隐藏/显示第3列")])),_:1})],64)}}});/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Et(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);e&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable})),t.push.apply(t,n)}return t}function le(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Et(Object(t),!0).forEach(function(n){un(o,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):Et(Object(t)).forEach(function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(t,n))})}return o}function He(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?He=function(e){return typeof e}:He=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},He(o)}function un(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function ie(){return ie=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}return o},ie.apply(this,arguments)}function mn(o,e){if(o==null)return{};var t={},n=Object.keys(o),l,a;for(a=0;a<n.length;a++)l=n[a],!(e.indexOf(l)>=0)&&(t[l]=o[l]);return t}function fn(o,e){if(o==null)return{};var t=mn(o,e),n,l;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);for(l=0;l<a.length;l++)n=a[l],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(o,n)&&(t[n]=o[n])}return t}var hn="1.15.6";function re(o){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(o)}var se=re(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),We=re(/Edge/i),St=re(/firefox/i),Ue=re(/safari/i)&&!re(/chrome/i)&&!re(/android/i),xt=re(/iP(ad|od|hone)/i),Rt=re(/chrome/i)&&re(/android/i),Ut={capture:!1,passive:!1};function I(o,e,t){o.addEventListener(e,t,!se&&Ut)}function S(o,e,t){o.removeEventListener(e,t,!se&&Ut)}function et(o,e){if(e){if(e[0]===">"&&(e=e.substring(1)),o)try{if(o.matches)return o.matches(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e)}catch{return!1}return!1}}function Mt(o){return o.host&&o!==document&&o.host.nodeType?o.host:o.parentNode}function ee(o,e,t,n){if(o){t=t||document;do{if(e!=null&&(e[0]===">"?o.parentNode===t&&et(o,e):et(o,e))||n&&o===t)return o;if(o===t)break}while(o=Mt(o))}return null}var It=/\s+/g;function j(o,e,t){if(o&&e)if(o.classList)o.classList[t?"add":"remove"](e);else{var n=(" "+o.className+" ").replace(It," ").replace(" "+e+" "," ");o.className=(n+(t?" "+e:"")).replace(It," ")}}function b(o,e,t){var n=o&&o.style;if(n){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(o,""):o.currentStyle&&(t=o.currentStyle),e===void 0?t:t[e];!(e in n)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),n[e]=t+(typeof t=="string"?"":"px")}}function Se(o,e){var t="";if(typeof o=="string")t=o;else do{var n=b(o,"transform");n&&n!=="none"&&(t=n+" "+t)}while(!e&&(o=o.parentNode));var l=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return l&&new l(t)}function zt(o,e,t){if(o){var n=o.getElementsByTagName(e),l=0,a=n.length;if(t)for(;l<a;l++)t(n[l],l);return n}return[]}function oe(){var o=document.scrollingElement;return o||document.documentElement}function z(o,e,t,n,l){if(!(!o.getBoundingClientRect&&o!==window)){var a,r,i,s,p,d,c;if(o!==window&&o.parentNode&&o!==oe()?(a=o.getBoundingClientRect(),r=a.top,i=a.left,s=a.bottom,p=a.right,d=a.height,c=a.width):(r=0,i=0,s=window.innerHeight,p=window.innerWidth,d=window.innerHeight,c=window.innerWidth),(e||t)&&o!==window&&(l=l||o.parentNode,!se))do if(l&&l.getBoundingClientRect&&(b(l,"transform")!=="none"||t&&b(l,"position")!=="static")){var h=l.getBoundingClientRect();r-=h.top+parseInt(b(l,"border-top-width")),i-=h.left+parseInt(b(l,"border-left-width")),s=r+a.height,p=i+a.width;break}while(l=l.parentNode);if(n&&o!==window){var x=Se(l||o),g=x&&x.a,E=x&&x.d;x&&(r/=E,i/=g,c/=g,d/=E,s=r+d,p=i+c)}return{top:r,left:i,bottom:s,right:p,width:c,height:d}}}function Ct(o,e,t){for(var n=me(o,!0),l=z(o)[e];n;){var a=z(n)[t],r=void 0;if(r=l>=a,!r)return n;if(n===oe())break;n=me(n,!1)}return!1}function Ie(o,e,t,n){for(var l=0,a=0,r=o.children;a<r.length;){if(r[a].style.display!=="none"&&r[a]!==v.ghost&&(n||r[a]!==v.dragged)&&ee(r[a],t.draggable,o,!1)){if(l===e)return r[a];l++}a++}return null}function _t(o,e){for(var t=o.lastElementChild;t&&(t===v.ghost||b(t,"display")==="none"||e&&!et(t,e));)t=t.previousElementSibling;return t||null}function q(o,e){var t=0;if(!o||!o.parentNode)return-1;for(;o=o.previousElementSibling;)o.nodeName.toUpperCase()!=="TEMPLATE"&&o!==v.clone&&(!e||et(o,e))&&t++;return t}function Tt(o){var e=0,t=0,n=oe();if(o)do{var l=Se(o),a=l.a,r=l.d;e+=o.scrollLeft*a,t+=o.scrollTop*r}while(o!==n&&(o=o.parentNode));return[e,t]}function gn(o,e){for(var t in o)if(o.hasOwnProperty(t)){for(var n in e)if(e.hasOwnProperty(n)&&e[n]===o[t][n])return Number(t)}return-1}function me(o,e){if(!o||!o.getBoundingClientRect)return oe();var t=o,n=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var l=b(t);if(t.clientWidth<t.scrollWidth&&(l.overflowX=="auto"||l.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(l.overflowY=="auto"||l.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return oe();if(n||e)return t;n=!0}}while(t=t.parentNode);return oe()}function bn(o,e){if(o&&e)for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o}function rt(o,e){return Math.round(o.top)===Math.round(e.top)&&Math.round(o.left)===Math.round(e.left)&&Math.round(o.height)===Math.round(e.height)&&Math.round(o.width)===Math.round(e.width)}var Me;function Ft(o,e){return function(){if(!Me){var t=arguments,n=this;t.length===1?o.call(n,t[0]):o.apply(n,t),Me=setTimeout(function(){Me=void 0},e)}}}function vn(){clearTimeout(Me),Me=void 0}function Lt(o,e,t){o.scrollLeft+=e,o.scrollTop+=t}function Wt(o){var e=window.Polymer,t=window.jQuery||window.Zepto;return e&&e.dom?e.dom(o).cloneNode(!0):t?t(o).clone(!0)[0]:o.cloneNode(!0)}function $t(o,e,t){var n={};return Array.from(o.children).forEach(function(l){var a,r,i,s;if(!(!ee(l,e.draggable,o,!1)||l.animated||l===t)){var p=z(l);n.left=Math.min((a=n.left)!==null&&a!==void 0?a:1/0,p.left),n.top=Math.min((r=n.top)!==null&&r!==void 0?r:1/0,p.top),n.right=Math.max((i=n.right)!==null&&i!==void 0?i:-1/0,p.right),n.bottom=Math.max((s=n.bottom)!==null&&s!==void 0?s:-1/0,p.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var X="Sortable"+new Date().getTime();function xn(){var o=[],e;return{captureAnimationState:function(){if(o=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(l){if(!(b(l,"display")==="none"||l===v.ghost)){o.push({target:l,rect:z(l)});var a=le({},o[o.length-1].rect);if(l.thisAnimationDuration){var r=Se(l,!0);r&&(a.top-=r.f,a.left-=r.e)}l.fromRect=a}})}},addAnimationState:function(n){o.push(n)},removeAnimationState:function(n){o.splice(gn(o,{target:n}),1)},animateAll:function(n){var l=this;if(!this.options.animation){clearTimeout(e),typeof n=="function"&&n();return}var a=!1,r=0;o.forEach(function(i){var s=0,p=i.target,d=p.fromRect,c=z(p),h=p.prevFromRect,x=p.prevToRect,g=i.rect,E=Se(p,!0);E&&(c.top-=E.f,c.left-=E.e),p.toRect=c,p.thisAnimationDuration&&rt(h,c)&&!rt(d,c)&&(g.top-c.top)/(g.left-c.left)===(d.top-c.top)/(d.left-c.left)&&(s=wn(g,h,x,l.options)),rt(c,d)||(p.prevFromRect=d,p.prevToRect=c,s||(s=l.options.animation),l.animate(p,g,c,s)),s&&(a=!0,r=Math.max(r,s),clearTimeout(p.animationResetTimer),p.animationResetTimer=setTimeout(function(){p.animationTime=0,p.prevFromRect=null,p.fromRect=null,p.prevToRect=null,p.thisAnimationDuration=null},s),p.thisAnimationDuration=s)}),clearTimeout(e),a?e=setTimeout(function(){typeof n=="function"&&n()},r):typeof n=="function"&&n(),o=[]},animate:function(n,l,a,r){if(r){b(n,"transition",""),b(n,"transform","");var i=Se(this.el),s=i&&i.a,p=i&&i.d,d=(l.left-a.left)/(s||1),c=(l.top-a.top)/(p||1);n.animatingX=!!d,n.animatingY=!!c,b(n,"transform","translate3d("+d+"px,"+c+"px,0)"),this.forRepaintDummy=_n(n),b(n,"transition","transform "+r+"ms"+(this.options.easing?" "+this.options.easing:"")),b(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){b(n,"transition",""),b(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},r)}}}}function _n(o){return o.offsetWidth}function wn(o,e,t,n){return Math.sqrt(Math.pow(e.top-o.top,2)+Math.pow(e.left-o.left,2))/Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))*n.animation}var we=[],it={initializeByDefault:!0},$e={mount:function(e){for(var t in it)it.hasOwnProperty(t)&&!(t in e)&&(e[t]=it[t]);we.forEach(function(n){if(n.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),we.push(e)},pluginEvent:function(e,t,n){var l=this;this.eventCanceled=!1,n.cancel=function(){l.eventCanceled=!0};var a=e+"Global";we.forEach(function(r){t[r.pluginName]&&(t[r.pluginName][a]&&t[r.pluginName][a](le({sortable:t},n)),t.options[r.pluginName]&&t[r.pluginName][e]&&t[r.pluginName][e](le({sortable:t},n)))})},initializePlugins:function(e,t,n,l){we.forEach(function(i){var s=i.pluginName;if(!(!e.options[s]&&!i.initializeByDefault)){var p=new i(e,t,e.options);p.sortable=e,p.options=e.options,e[s]=p,ie(n,p.defaults)}});for(var a in e.options)if(e.options.hasOwnProperty(a)){var r=this.modifyOption(e,a,e.options[a]);typeof r<"u"&&(e.options[a]=r)}},getEventProperties:function(e,t){var n={};return we.forEach(function(l){typeof l.eventProperties=="function"&&ie(n,l.eventProperties.call(t[l.pluginName],e))}),n},modifyOption:function(e,t,n){var l;return we.forEach(function(a){e[a.pluginName]&&a.optionListeners&&typeof a.optionListeners[t]=="function"&&(l=a.optionListeners[t].call(e[a.pluginName],n))}),l}};function yn(o){var e=o.sortable,t=o.rootEl,n=o.name,l=o.targetEl,a=o.cloneEl,r=o.toEl,i=o.fromEl,s=o.oldIndex,p=o.newIndex,d=o.oldDraggableIndex,c=o.newDraggableIndex,h=o.originalEvent,x=o.putSortable,g=o.extraEventProperties;if(e=e||t&&t[X],!!e){var E,Y=e.options,K="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!se&&!We?E=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(E=document.createEvent("Event"),E.initEvent(n,!0,!0)),E.to=r||t,E.from=i||t,E.item=l||t,E.clone=a,E.oldIndex=s,E.newIndex=p,E.oldDraggableIndex=d,E.newDraggableIndex=c,E.originalEvent=h,E.pullMode=x?x.lastPutMode:void 0;var F=le(le({},g),$e.getEventProperties(n,e));for(var Q in F)E[Q]=F[Q];t&&t.dispatchEvent(E),Y[K]&&Y[K].call(e,E)}}var Dn=["evt"],G=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=n.evt,a=fn(n,Dn);$e.pluginEvent.bind(v)(e,t,le({dragEl:u,parentEl:R,ghostEl:w,rootEl:O,nextEl:xe,lastDownEl:je,cloneEl:P,cloneHidden:ue,dragStarted:Oe,putSortable:L,activeSortable:v.active,originalEvent:l,oldIndex:Ee,oldDraggableIndex:ze,newIndex:J,newDraggableIndex:ce,hideGhostForTarget:Yt,unhideGhostForTarget:Vt,cloneNowHidden:function(){ue=!0},cloneNowShown:function(){ue=!1},dispatchSortableEvent:function(i){B({sortable:t,name:i,originalEvent:l})}},a))};function B(o){yn(le({putSortable:L,cloneEl:P,targetEl:u,rootEl:O,oldIndex:Ee,oldDraggableIndex:ze,newIndex:J,newDraggableIndex:ce},o))}var u,R,w,O,xe,je,P,ue,Ee,J,ze,ce,Ge,L,De=!1,tt=!1,nt=[],be,Z,st,pt,Nt,At,Oe,ye,Fe,Le=!1,Xe=!1,Je,W,dt=[],ht=!1,ot=[],at=typeof document<"u",Ye=xt,kt=We||se?"cssFloat":"float",En=at&&!Rt&&!xt&&"draggable"in document.createElement("div"),Bt=function(){if(at){if(se)return!1;var o=document.createElement("x");return o.style.cssText="pointer-events:auto",o.style.pointerEvents==="auto"}}(),Gt=function(e,t){var n=b(e),l=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),a=Ie(e,0,t),r=Ie(e,1,t),i=a&&b(a),s=r&&b(r),p=i&&parseInt(i.marginLeft)+parseInt(i.marginRight)+z(a).width,d=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+z(r).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(a&&i.float&&i.float!=="none"){var c=i.float==="left"?"left":"right";return r&&(s.clear==="both"||s.clear===c)?"vertical":"horizontal"}return a&&(i.display==="block"||i.display==="flex"||i.display==="table"||i.display==="grid"||p>=l&&n[kt]==="none"||r&&n[kt]==="none"&&p+d>l)?"vertical":"horizontal"},Sn=function(e,t,n){var l=n?e.left:e.top,a=n?e.right:e.bottom,r=n?e.width:e.height,i=n?t.left:t.top,s=n?t.right:t.bottom,p=n?t.width:t.height;return l===i||a===s||l+r/2===i+p/2},In=function(e,t){var n;return nt.some(function(l){var a=l[X].options.emptyInsertThreshold;if(!(!a||_t(l))){var r=z(l),i=e>=r.left-a&&e<=r.right+a,s=t>=r.top-a&&t<=r.bottom+a;if(i&&s)return n=l}}),n},Xt=function(e){function t(a,r){return function(i,s,p,d){var c=i.options.group.name&&s.options.group.name&&i.options.group.name===s.options.group.name;if(a==null&&(r||c))return!0;if(a==null||a===!1)return!1;if(r&&a==="clone")return a;if(typeof a=="function")return t(a(i,s,p,d),r)(i,s,p,d);var h=(r?i:s).options.group.name;return a===!0||typeof a=="string"&&a===h||a.join&&a.indexOf(h)>-1}}var n={},l=e.group;(!l||He(l)!="object")&&(l={name:l}),n.name=l.name,n.checkPull=t(l.pull,!0),n.checkPut=t(l.put),n.revertClone=l.revertClone,e.group=n},Yt=function(){!Bt&&w&&b(w,"display","none")},Vt=function(){!Bt&&w&&b(w,"display","")};at&&!Rt&&document.addEventListener("click",function(o){if(tt)return o.preventDefault(),o.stopPropagation&&o.stopPropagation(),o.stopImmediatePropagation&&o.stopImmediatePropagation(),tt=!1,!1},!0);var ve=function(e){if(u){e=e.touches?e.touches[0]:e;var t=In(e.clientX,e.clientY);if(t){var n={};for(var l in e)e.hasOwnProperty(l)&&(n[l]=e[l]);n.target=n.rootEl=t,n.preventDefault=void 0,n.stopPropagation=void 0,t[X]._onDragOver(n)}}},Cn=function(e){u&&u.parentNode[X]._isOutsideThisEl(e.target)};function v(o,e){if(!(o&&o.nodeType&&o.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(o));this.el=o,this.options=e=ie({},e),o[X]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(o.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Gt(o,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(r,i){r.setData("Text",i.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:v.supportPointer!==!1&&"PointerEvent"in window&&(!Ue||xt),emptyInsertThreshold:5};$e.initializePlugins(this,o,t);for(var n in t)!(n in e)&&(e[n]=t[n]);Xt(e);for(var l in this)l.charAt(0)==="_"&&typeof this[l]=="function"&&(this[l]=this[l].bind(this));this.nativeDraggable=e.forceFallback?!1:En,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?I(o,"pointerdown",this._onTapStart):(I(o,"mousedown",this._onTapStart),I(o,"touchstart",this._onTapStart)),this.nativeDraggable&&(I(o,"dragover",this),I(o,"dragenter",this)),nt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),ie(this,xn())}v.prototype={constructor:v,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(ye=null)},_getDirection:function(e,t){return typeof this.options.direction=="function"?this.options.direction.call(this,e,t,u):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,n=this.el,l=this.options,a=l.preventOnFilter,r=e.type,i=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,s=(i||e).target,p=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,d=l.filter;if(Un(n),!u&&!(/mousedown|pointerdown/.test(r)&&e.button!==0||l.disabled)&&!p.isContentEditable&&!(!this.nativeDraggable&&Ue&&s&&s.tagName.toUpperCase()==="SELECT")&&(s=ee(s,l.draggable,n,!1),!(s&&s.animated)&&je!==s)){if(Ee=q(s),ze=q(s,l.draggable),typeof d=="function"){if(d.call(this,e,s,this)){B({sortable:t,rootEl:p,name:"filter",targetEl:s,toEl:n,fromEl:n}),G("filter",t,{evt:e}),a&&e.preventDefault();return}}else if(d&&(d=d.split(",").some(function(c){if(c=ee(p,c.trim(),n,!1),c)return B({sortable:t,rootEl:c,name:"filter",targetEl:s,fromEl:n,toEl:n}),G("filter",t,{evt:e}),!0}),d)){a&&e.preventDefault();return}l.handle&&!ee(p,l.handle,n,!1)||this._prepareDragStart(e,i,s)}}},_prepareDragStart:function(e,t,n){var l=this,a=l.el,r=l.options,i=a.ownerDocument,s;if(n&&!u&&n.parentNode===a){var p=z(n);if(O=a,u=n,R=u.parentNode,xe=u.nextSibling,je=n,Ge=r.group,v.dragged=u,be={target:u,clientX:(t||e).clientX,clientY:(t||e).clientY},Nt=be.clientX-p.left,At=be.clientY-p.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,u.style["will-change"]="all",s=function(){if(G("delayEnded",l,{evt:e}),v.eventCanceled){l._onDrop();return}l._disableDelayedDragEvents(),!St&&l.nativeDraggable&&(u.draggable=!0),l._triggerDragStart(e,t),B({sortable:l,name:"choose",originalEvent:e}),j(u,r.chosenClass,!0)},r.ignore.split(",").forEach(function(d){zt(u,d.trim(),ct)}),I(i,"dragover",ve),I(i,"mousemove",ve),I(i,"touchmove",ve),r.supportPointer?(I(i,"pointerup",l._onDrop),!this.nativeDraggable&&I(i,"pointercancel",l._onDrop)):(I(i,"mouseup",l._onDrop),I(i,"touchend",l._onDrop),I(i,"touchcancel",l._onDrop)),St&&this.nativeDraggable&&(this.options.touchStartThreshold=4,u.draggable=!0),G("delayStart",this,{evt:e}),r.delay&&(!r.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(We||se))){if(v.eventCanceled){this._onDrop();return}r.supportPointer?(I(i,"pointerup",l._disableDelayedDrag),I(i,"pointercancel",l._disableDelayedDrag)):(I(i,"mouseup",l._disableDelayedDrag),I(i,"touchend",l._disableDelayedDrag),I(i,"touchcancel",l._disableDelayedDrag)),I(i,"mousemove",l._delayedDragTouchMoveHandler),I(i,"touchmove",l._delayedDragTouchMoveHandler),r.supportPointer&&I(i,"pointermove",l._delayedDragTouchMoveHandler),l._dragStartTimer=setTimeout(s,r.delay)}else s()}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){u&&ct(u),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;S(e,"mouseup",this._disableDelayedDrag),S(e,"touchend",this._disableDelayedDrag),S(e,"touchcancel",this._disableDelayedDrag),S(e,"pointerup",this._disableDelayedDrag),S(e,"pointercancel",this._disableDelayedDrag),S(e,"mousemove",this._delayedDragTouchMoveHandler),S(e,"touchmove",this._delayedDragTouchMoveHandler),S(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||e.pointerType=="touch"&&e,!this.nativeDraggable||t?this.options.supportPointer?I(document,"pointermove",this._onTouchMove):t?I(document,"touchmove",this._onTouchMove):I(document,"mousemove",this._onTouchMove):(I(u,"dragend",this),I(O,"dragstart",this._onDragStart));try{document.selection?qe(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,t){if(De=!1,O&&u){G("dragStarted",this,{evt:t}),this.nativeDraggable&&I(document,"dragover",Cn);var n=this.options;!e&&j(u,n.dragClass,!1),j(u,n.ghostClass,!0),v.active=this,e&&this._appendGhost(),B({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(Z){this._lastX=Z.clientX,this._lastY=Z.clientY,Yt();for(var e=document.elementFromPoint(Z.clientX,Z.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Z.clientX,Z.clientY),e!==t);)t=e;if(u.parentNode[X]._isOutsideThisEl(e),t)do{if(t[X]){var n=void 0;if(n=t[X]._onDragOver({clientX:Z.clientX,clientY:Z.clientY,target:e,rootEl:t}),n&&!this.options.dragoverBubble)break}e=t}while(t=Mt(t));Vt()}},_onTouchMove:function(e){if(be){var t=this.options,n=t.fallbackTolerance,l=t.fallbackOffset,a=e.touches?e.touches[0]:e,r=w&&Se(w,!0),i=w&&r&&r.a,s=w&&r&&r.d,p=Ye&&W&&Tt(W),d=(a.clientX-be.clientX+l.x)/(i||1)+(p?p[0]-dt[0]:0)/(i||1),c=(a.clientY-be.clientY+l.y)/(s||1)+(p?p[1]-dt[1]:0)/(s||1);if(!v.active&&!De){if(n&&Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))<n)return;this._onDragStart(e,!0)}if(w){r?(r.e+=d-(st||0),r.f+=c-(pt||0)):r={a:1,b:0,c:0,d:1,e:d,f:c};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");b(w,"webkitTransform",h),b(w,"mozTransform",h),b(w,"msTransform",h),b(w,"transform",h),st=d,pt=c,Z=a}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!w){var e=this.options.fallbackOnBody?document.body:O,t=z(u,!0,Ye,!0,e),n=this.options;if(Ye){for(W=e;b(W,"position")==="static"&&b(W,"transform")==="none"&&W!==document;)W=W.parentNode;W!==document.body&&W!==document.documentElement?(W===document&&(W=oe()),t.top+=W.scrollTop,t.left+=W.scrollLeft):W=oe(),dt=Tt(W)}w=u.cloneNode(!0),j(w,n.ghostClass,!1),j(w,n.fallbackClass,!0),j(w,n.dragClass,!0),b(w,"transition",""),b(w,"transform",""),b(w,"box-sizing","border-box"),b(w,"margin",0),b(w,"top",t.top),b(w,"left",t.left),b(w,"width",t.width),b(w,"height",t.height),b(w,"opacity","0.8"),b(w,"position",Ye?"absolute":"fixed"),b(w,"zIndex","100000"),b(w,"pointerEvents","none"),v.ghost=w,e.appendChild(w),b(w,"transform-origin",Nt/parseInt(w.style.width)*100+"% "+At/parseInt(w.style.height)*100+"%")}},_onDragStart:function(e,t){var n=this,l=e.dataTransfer,a=n.options;if(G("dragStart",this,{evt:e}),v.eventCanceled){this._onDrop();return}G("setupClone",this),v.eventCanceled||(P=Wt(u),P.removeAttribute("id"),P.draggable=!1,P.style["will-change"]="",this._hideClone(),j(P,this.options.chosenClass,!1),v.clone=P),n.cloneId=qe(function(){G("clone",n),!v.eventCanceled&&(n.options.removeCloneOnHide||O.insertBefore(P,u),n._hideClone(),B({sortable:n,name:"clone"}))}),!t&&j(u,a.dragClass,!0),t?(tt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(S(document,"mouseup",n._onDrop),S(document,"touchend",n._onDrop),S(document,"touchcancel",n._onDrop),l&&(l.effectAllowed="move",a.setData&&a.setData.call(n,l,u)),I(document,"drop",n),b(u,"transform","translateZ(0)")),De=!0,n._dragStartId=qe(n._dragStarted.bind(n,t,e)),I(document,"selectstart",n),Oe=!0,window.getSelection().removeAllRanges(),Ue&&b(document.body,"user-select","none")},_onDragOver:function(e){var t=this.el,n=e.target,l,a,r,i=this.options,s=i.group,p=v.active,d=Ge===s,c=i.sort,h=L||p,x,g=this,E=!1;if(ht)return;function Y(ke,jt){G(ke,g,le({evt:e,isOwner:d,axis:x?"vertical":"horizontal",revert:r,dragRect:l,targetRect:a,canSort:c,fromSortable:h,target:n,completed:F,onMove:function(Dt,Jt){return Ve(O,t,u,l,Dt,z(Dt),e,Jt)},changed:Q},jt))}function K(){Y("dragOverAnimationCapture"),g.captureAnimationState(),g!==h&&h.captureAnimationState()}function F(ke){return Y("dragOverCompleted",{insertion:ke}),ke&&(d?p._hideClone():p._showClone(g),g!==h&&(j(u,L?L.options.ghostClass:p.options.ghostClass,!1),j(u,i.ghostClass,!0)),L!==g&&g!==v.active?L=g:g===v.active&&L&&(L=null),h===g&&(g._ignoreWhileAnimating=n),g.animateAll(function(){Y("dragOverAnimationComplete"),g._ignoreWhileAnimating=null}),g!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(n===u&&!u.animated||n===t&&!n.animated)&&(ye=null),!i.dragoverBubble&&!e.rootEl&&n!==document&&(u.parentNode[X]._isOutsideThisEl(e.target),!ke&&ve(e)),!i.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),E=!0}function Q(){J=q(u),ce=q(u,i.draggable),B({sortable:g,name:"change",toEl:t,newIndex:J,newDraggableIndex:ce,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),n=ee(n,i.draggable,t,!0),Y("dragOver"),v.eventCanceled)return E;if(u.contains(e.target)||n.animated&&n.animatingX&&n.animatingY||g._ignoreWhileAnimating===n)return F(!1);if(tt=!1,p&&!i.disabled&&(d?c||(r=R!==O):L===this||(this.lastPutMode=Ge.checkPull(this,p,u,e))&&s.checkPut(this,p,u,e))){if(x=this._getDirection(e,n)==="vertical",l=z(u),Y("dragOverValid"),v.eventCanceled)return E;if(r)return R=O,K(),this._hideClone(),Y("revert"),v.eventCanceled||(xe?O.insertBefore(u,xe):O.appendChild(u)),F(!0);var V=_t(t,i.draggable);if(!V||kn(e,x,this)&&!V.animated){if(V===u)return F(!1);if(V&&t===e.target&&(n=V),n&&(a=z(n)),Ve(O,t,u,l,n,a,e,!!n)!==!1)return K(),V&&V.nextSibling?t.insertBefore(u,V.nextSibling):t.appendChild(u),R=t,Q(),F(!0)}else if(V&&An(e,x,this)){var fe=Ie(t,0,i,!0);if(fe===u)return F(!1);if(n=fe,a=z(n),Ve(O,t,u,l,n,a,e,!1)!==!1)return K(),t.insertBefore(u,fe),R=t,Q(),F(!0)}else if(n.parentNode===t){a=z(n);var ne=0,he,Ce=u.parentNode!==t,H=!Sn(u.animated&&u.toRect||l,n.animated&&n.toRect||a,x),Te=x?"top":"left",pe=Ct(n,"top","top")||Ct(u,"top","top"),Ne=pe?pe.scrollTop:void 0;ye!==n&&(he=a[Te],Le=!1,Xe=!H&&i.invertSwap||Ce),ne=On(e,n,a,x,H?1:i.swapThreshold,i.invertedSwapThreshold==null?i.swapThreshold:i.invertedSwapThreshold,Xe,ye===n);var ae;if(ne!==0){var ge=q(u);do ge-=ne,ae=R.children[ge];while(ae&&(b(ae,"display")==="none"||ae===w))}if(ne===0||ae===n)return F(!1);ye=n,Fe=ne;var Ae=n.nextElementSibling,de=!1;de=ne===1;var Be=Ve(O,t,u,l,n,a,e,de);if(Be!==!1)return(Be===1||Be===-1)&&(de=Be===1),ht=!0,setTimeout(Nn,30),K(),de&&!Ae?t.appendChild(u):n.parentNode.insertBefore(u,de?Ae:n),pe&&Lt(pe,0,Ne-pe.scrollTop),R=u.parentNode,he!==void 0&&!Xe&&(Je=Math.abs(he-z(n)[Te])),Q(),F(!0)}if(t.contains(u))return F(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){S(document,"mousemove",this._onTouchMove),S(document,"touchmove",this._onTouchMove),S(document,"pointermove",this._onTouchMove),S(document,"dragover",ve),S(document,"mousemove",ve),S(document,"touchmove",ve)},_offUpEvents:function(){var e=this.el.ownerDocument;S(e,"mouseup",this._onDrop),S(e,"touchend",this._onDrop),S(e,"pointerup",this._onDrop),S(e,"pointercancel",this._onDrop),S(e,"touchcancel",this._onDrop),S(document,"selectstart",this)},_onDrop:function(e){var t=this.el,n=this.options;if(J=q(u),ce=q(u,n.draggable),G("drop",this,{evt:e}),R=u&&u.parentNode,J=q(u),ce=q(u,n.draggable),v.eventCanceled){this._nulling();return}De=!1,Xe=!1,Le=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),gt(this.cloneId),gt(this._dragStartId),this.nativeDraggable&&(S(document,"drop",this),S(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ue&&b(document.body,"user-select",""),b(u,"transform",""),e&&(Oe&&(e.cancelable&&e.preventDefault(),!n.dropBubble&&e.stopPropagation()),w&&w.parentNode&&w.parentNode.removeChild(w),(O===R||L&&L.lastPutMode!=="clone")&&P&&P.parentNode&&P.parentNode.removeChild(P),u&&(this.nativeDraggable&&S(u,"dragend",this),ct(u),u.style["will-change"]="",Oe&&!De&&j(u,L?L.options.ghostClass:this.options.ghostClass,!1),j(u,this.options.chosenClass,!1),B({sortable:this,name:"unchoose",toEl:R,newIndex:null,newDraggableIndex:null,originalEvent:e}),O!==R?(J>=0&&(B({rootEl:R,name:"add",toEl:R,fromEl:O,originalEvent:e}),B({sortable:this,name:"remove",toEl:R,originalEvent:e}),B({rootEl:R,name:"sort",toEl:R,fromEl:O,originalEvent:e}),B({sortable:this,name:"sort",toEl:R,originalEvent:e})),L&&L.save()):J!==Ee&&J>=0&&(B({sortable:this,name:"update",toEl:R,originalEvent:e}),B({sortable:this,name:"sort",toEl:R,originalEvent:e})),v.active&&((J==null||J===-1)&&(J=Ee,ce=ze),B({sortable:this,name:"end",toEl:R,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){G("nulling",this),O=u=R=w=xe=P=je=ue=be=Z=Oe=J=ce=Ee=ze=ye=Fe=L=Ge=v.dragged=v.ghost=v.clone=v.active=null,ot.forEach(function(e){e.checked=!0}),ot.length=st=pt=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":u&&(this._onDragOver(e),Tn(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],t,n=this.el.children,l=0,a=n.length,r=this.options;l<a;l++)t=n[l],ee(t,r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Rn(t));return e},sort:function(e,t){var n={},l=this.el;this.toArray().forEach(function(a,r){var i=l.children[r];ee(i,this.options.draggable,l,!1)&&(n[a]=i)},this),t&&this.captureAnimationState(),e.forEach(function(a){n[a]&&(l.removeChild(n[a]),l.appendChild(n[a]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return ee(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var n=this.options;if(t===void 0)return n[e];var l=$e.modifyOption(this,e,t);typeof l<"u"?n[e]=l:n[e]=t,e==="group"&&Xt(n)},destroy:function(){G("destroy",this);var e=this.el;e[X]=null,S(e,"mousedown",this._onTapStart),S(e,"touchstart",this._onTapStart),S(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(S(e,"dragover",this),S(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),nt.splice(nt.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!ue){if(G("hideClone",this),v.eventCanceled)return;b(P,"display","none"),this.options.removeCloneOnHide&&P.parentNode&&P.parentNode.removeChild(P),ue=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(ue){if(G("showClone",this),v.eventCanceled)return;u.parentNode==O&&!this.options.group.revertClone?O.insertBefore(P,u):xe?O.insertBefore(P,xe):O.appendChild(P),this.options.group.revertClone&&this.animate(u,P),b(P,"display",""),ue=!1}}};function Tn(o){o.dataTransfer&&(o.dataTransfer.dropEffect="move"),o.cancelable&&o.preventDefault()}function Ve(o,e,t,n,l,a,r,i){var s,p=o[X],d=p.options.onMove,c;return window.CustomEvent&&!se&&!We?s=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(s=document.createEvent("Event"),s.initEvent("move",!0,!0)),s.to=e,s.from=o,s.dragged=t,s.draggedRect=n,s.related=l||e,s.relatedRect=a||z(e),s.willInsertAfter=i,s.originalEvent=r,o.dispatchEvent(s),d&&(c=d.call(p,s,r)),c}function ct(o){o.draggable=!1}function Nn(){ht=!1}function An(o,e,t){var n=z(Ie(t.el,0,t.options,!0)),l=$t(t.el,t.options,w),a=10;return e?o.clientX<l.left-a||o.clientY<n.top&&o.clientX<n.right:o.clientY<l.top-a||o.clientY<n.bottom&&o.clientX<n.left}function kn(o,e,t){var n=z(_t(t.el,t.options.draggable)),l=$t(t.el,t.options,w),a=10;return e?o.clientX>l.right+a||o.clientY>n.bottom&&o.clientX>n.left:o.clientY>l.bottom+a||o.clientX>n.right&&o.clientY>n.top}function On(o,e,t,n,l,a,r,i){var s=n?o.clientY:o.clientX,p=n?t.height:t.width,d=n?t.top:t.left,c=n?t.bottom:t.right,h=!1;if(!r){if(i&&Je<p*l){if(!Le&&(Fe===1?s>d+p*a/2:s<c-p*a/2)&&(Le=!0),Le)h=!0;else if(Fe===1?s<d+Je:s>c-Je)return-Fe}else if(s>d+p*(1-l)/2&&s<c-p*(1-l)/2)return Pn(e)}return h=h||r,h&&(s<d+p*a/2||s>c-p*a/2)?s>d+p/2?1:-1:0}function Pn(o){return q(u)<q(o)?1:-1}function Rn(o){for(var e=o.tagName+o.className+o.src+o.href+o.textContent,t=e.length,n=0;t--;)n+=e.charCodeAt(t);return n.toString(36)}function Un(o){ot.length=0;for(var e=o.getElementsByTagName("input"),t=e.length;t--;){var n=e[t];n.checked&&ot.push(n)}}function qe(o){return setTimeout(o,0)}function gt(o){return clearTimeout(o)}at&&I(document,"touchmove",function(o){(v.active||De)&&o.cancelable&&o.preventDefault()});v.utils={on:I,off:S,css:b,find:zt,is:function(e,t){return!!ee(e,t,e,!1)},extend:bn,throttle:Ft,closest:ee,toggleClass:j,clone:Wt,index:q,nextTick:qe,cancelNextTick:gt,detectDirection:Gt,getChild:Ie,expando:X};v.get=function(o){return o[X]};v.mount=function(){for(var o=arguments.length,e=new Array(o),t=0;t<o;t++)e[t]=arguments[t];e[0].constructor===Array&&(e=e[0]),e.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(v.utils=le(le({},v.utils),n.utils)),$e.mount(n)})};v.create=function(o,e){return new v(o,e)};v.version=hn;var M=[],Pe,bt,vt=!1,ut,mt,lt,Re;function Mn(){function o(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return o.prototype={dragStarted:function(t){var n=t.originalEvent;this.sortable.nativeDraggable?I(document,"dragover",this._handleAutoScroll):this.options.supportPointer?I(document,"pointermove",this._handleFallbackAutoScroll):n.touches?I(document,"touchmove",this._handleFallbackAutoScroll):I(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var n=t.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?S(document,"dragover",this._handleAutoScroll):(S(document,"pointermove",this._handleFallbackAutoScroll),S(document,"touchmove",this._handleFallbackAutoScroll),S(document,"mousemove",this._handleFallbackAutoScroll)),Ot(),Ke(),vn()},nulling:function(){lt=bt=Pe=vt=Re=ut=mt=null,M.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,n){var l=this,a=(t.touches?t.touches[0]:t).clientX,r=(t.touches?t.touches[0]:t).clientY,i=document.elementFromPoint(a,r);if(lt=t,n||this.options.forceAutoScrollFallback||We||se||Ue){ft(t,this.options,i,n);var s=me(i,!0);vt&&(!Re||a!==ut||r!==mt)&&(Re&&Ot(),Re=setInterval(function(){var p=me(document.elementFromPoint(a,r),!0);p!==s&&(s=p,Ke()),ft(t,l.options,p,n)},10),ut=a,mt=r)}else{if(!this.options.bubbleScroll||me(i,!0)===oe()){Ke();return}ft(t,this.options,me(i,!1),!1)}}},ie(o,{pluginName:"scroll",initializeByDefault:!0})}function Ke(){M.forEach(function(o){clearInterval(o.pid)}),M=[]}function Ot(){clearInterval(Re)}var ft=Ft(function(o,e,t,n){if(e.scroll){var l=(o.touches?o.touches[0]:o).clientX,a=(o.touches?o.touches[0]:o).clientY,r=e.scrollSensitivity,i=e.scrollSpeed,s=oe(),p=!1,d;bt!==t&&(bt=t,Ke(),Pe=e.scroll,d=e.scrollFn,Pe===!0&&(Pe=me(t,!0)));var c=0,h=Pe;do{var x=h,g=z(x),E=g.top,Y=g.bottom,K=g.left,F=g.right,Q=g.width,V=g.height,fe=void 0,ne=void 0,he=x.scrollWidth,Ce=x.scrollHeight,H=b(x),Te=x.scrollLeft,pe=x.scrollTop;x===s?(fe=Q<he&&(H.overflowX==="auto"||H.overflowX==="scroll"||H.overflowX==="visible"),ne=V<Ce&&(H.overflowY==="auto"||H.overflowY==="scroll"||H.overflowY==="visible")):(fe=Q<he&&(H.overflowX==="auto"||H.overflowX==="scroll"),ne=V<Ce&&(H.overflowY==="auto"||H.overflowY==="scroll"));var Ne=fe&&(Math.abs(F-l)<=r&&Te+Q<he)-(Math.abs(K-l)<=r&&!!Te),ae=ne&&(Math.abs(Y-a)<=r&&pe+V<Ce)-(Math.abs(E-a)<=r&&!!pe);if(!M[c])for(var ge=0;ge<=c;ge++)M[ge]||(M[ge]={});(M[c].vx!=Ne||M[c].vy!=ae||M[c].el!==x)&&(M[c].el=x,M[c].vx=Ne,M[c].vy=ae,clearInterval(M[c].pid),(Ne!=0||ae!=0)&&(p=!0,M[c].pid=setInterval((function(){n&&this.layer===0&&v.active._onTouchMove(lt);var Ae=M[this.layer].vy?M[this.layer].vy*i:0,de=M[this.layer].vx?M[this.layer].vx*i:0;typeof d=="function"&&d.call(v.dragged.parentNode[X],de,Ae,o,lt,M[this.layer].el)!=="continue"||Lt(M[this.layer].el,de,Ae)}).bind({layer:c}),24))),c++}while(e.bubbleScroll&&h!==s&&(h=me(h,!1)));vt=p}},30),Ht=function(e){var t=e.originalEvent,n=e.putSortable,l=e.dragEl,a=e.activeSortable,r=e.dispatchSortableEvent,i=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var p=n||a;i();var d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,c=document.elementFromPoint(d.clientX,d.clientY);s(),p&&!p.el.contains(c)&&(r("spill"),this.onSpill({dragEl:l,putSortable:n}))}};function wt(){}wt.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,n=e.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var l=Ie(this.sortable.el,this.startIndex,this.options);l?this.sortable.el.insertBefore(t,l):this.sortable.el.appendChild(t),this.sortable.animateAll(),n&&n.animateAll()},drop:Ht};ie(wt,{pluginName:"revertOnSpill"});function yt(){}yt.prototype={onSpill:function(e){var t=e.dragEl,n=e.putSortable,l=n||this.sortable;l.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),l.animateAll()},drop:Ht};ie(yt,{pluginName:"removeOnSpill"});v.mount(new Mn);v.mount(yt,wt);const vo=N({__name:"dnd",setup(o){const e=f(!1),t=f([]),n=f(!1),l=f([{id:1,name:"柏庐",sex:"女",org:"某个公司",des:"来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计",otherInfo:{age:20}},{id:2,name:"军结",sex:"男",org:"某个公司",des:"经验丰富的前端工程师",otherInfo:{age:22}},{id:3,name:"钞洋",sex:"男",org:"某个公司",des:"90后交互设计师",otherInfo:{age:28}},{id:4,name:"钞洋1",sex:"男",org:"某个公司",des:"90后交互设计师",otherInfo:{age:28}},{id:5,name:"钞洋2",sex:"男",org:"某个公司",des:"90后交互设计师",otherInfo:{age:28}}]),a=f([{title:"#",slotName:"tableIndex",headerSlotName:"firstCol",width:"3em"},{title:"用户名",prop:"name"},{title:"年龄",prop:"otherInfo.age"},{title:"单位",prop:"org",align:"center"},{title:"简介",prop:"des",align:"center",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"操作",slotName:"handle",align:"center"}]),r=()=>{e.value?(t.value.splice(0,t.value.length),t.value.push(...l.value.map(d=>d.id)),n.value=!1):t.value.splice(0,t.value.length)},i=()=>{e.value=t.value.length===l.value.length,t.value.length>0&&e.value==!1?n.value=!0:n.value=!1},s=(d,c,h)=>{console.log("rowClicked",d,c,h)},p=(d,c,h,x,g)=>{console.log("cellClicked",d,c,h,x,g)};return nn(()=>{if(!Pt)return;const d=document.querySelector(".sortable-table > tbody");v.create(d,{disabled:!1,handle:"tr",animation:150,onEnd:c=>{const h=l.value;h.splice(c.newIndex,0,h.splice(c.oldIndex,1)[0]),on(()=>{l.value=h})}})}),(d,c)=>{const h=k("el-checkbox"),x=C;return y(),A(x,{cols:a.value,data:l.value,class:"sortable-table",onRowClick:s,onCellClick:p},{firstCol:m(()=>[_(h,{modelValue:e.value,"onUpdate:modelValue":c[0]||(c[0]=g=>e.value=g),indeterminate:n.value,onChange:r},null,8,["modelValue","indeterminate"])]),tableIndex:m(({row:g})=>[_(h,{modelValue:t.value,"onUpdate:modelValue":c[1]||(c[1]=E=>t.value=E),value:g.id,onChange:E=>i(g.id)},{default:m(()=>c[2]||(c[2]=[T(U(""))])),_:2},1032,["modelValue","value","onChange"])]),handle:m(()=>c[3]||(c[3]=[D("a",null,"修改",-1)])),_:1},8,["cols","data"])}}}),xo=N({__name:"empty",setup(o){const e=f([]),t=f([{title:"序号",prop:"",slotName:"tableIndex"},{title:"姓名",prop:"name"},{title:"性别",prop:"sex"},{title:"操作",prop:"",align:"center"}]);return(n,l)=>{const a=C;return y(),A(a,{cols:t.value,border:"border-x",data:e.value},null,8,["cols","data"])}}}),_o=N({__name:"unknown",setup(o){const e=f(null),t=f([{title:"序号",prop:"",slotName:"tableIndex"},{title:"姓名",prop:"name"},{title:"性别",prop:"sex"},{title:"操作",prop:"",align:"center"}]);return(n,l)=>{const a=C;return y(),A(a,{cols:t.value,border:"border-x",data:e.value},{unknown:m(()=>l[0]||(l[0]=[D("p",{style:{"text-align":"center"}},"可能数据报错了哦~",-1)])),_:1},8,["cols","data"])}}}),wo=`<template>
  <epp-simple-table :cols="cols" :data="tableData" @row-click="rowClicked" @cell-click="cellClicked">
    <template #firstCol>
      <el-checkbox v-model="selectedAll" :indeterminate="isIndeterminate" @change="selectAll" />
    </template>
    <template #tableIndex="{ row }">
      <el-checkbox v-model="selectedRows" :value="row.id" @change="selectRow(row.id)">{{ '' }}</el-checkbox>
    </template>

    <template #handle>
      <a>修改</a>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { ColumnType } from 'element-plus-plus';

const selectedAll = ref(false);
const selectedRows = ref<number[]>([]);
const isIndeterminate = ref(false);

const tableData = ref([
  {
    id: 1,
    name: '柏庐',
    sex: '女',
    org: '某个公司',
    des: '来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计',
    otherInfo: {
      age: 20,
    },
  },
  {
    id: 2,
    name: '军结',
    sex: '男',
    org: '某个公司',
    des: '经验丰富的前端工程师',
    otherInfo: {
      age: 22,
    },
  },
  {
    id: 3,
    name: '钞洋',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
    otherInfo: {
      age: 28,
    },
  },
]);
const cols = ref([
  { title: '#', slotName: 'tableIndex', headerSlotName: 'firstCol', width: '3em' },
  { title: '用户名', prop: 'name' },
  { title: '年龄', prop: 'otherInfo.age' },
  { title: '单位', prop: 'org', align: 'center' },
  {
    title: '简介',
    prop: 'des',
    align: 'center',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
  },
  { title: '操作', slotName: 'handle', align: 'center' },
]);

const selectAll = () => {
  if (selectedAll.value) {
    selectedRows.value.splice(0, selectedRows.value.length);
    selectedRows.value.push(...tableData.value.map((d) => d.id));
    isIndeterminate.value = false;
  } else {
    selectedRows.value.splice(0, selectedRows.value.length);
  }
};
const selectRow = () => {
  selectedAll.value = selectedRows.value.length === tableData.value.length;
  if (selectedRows.value.length > 0 && selectedAll.value == false) {
    isIndeterminate.value = true;
  } else {
    isIndeterminate.value = false;
  }
};
const rowClicked = (row: Record<string, any>, rowIndex: number, event: Event) => {
  console.log('rowClicked', row, rowIndex, event);
};
const cellClicked = (row: Record<string, any>, col: ColumnType, rowIndex: number, colIndex: number, event: Event) => {
  console.log('cellClicked', row, col, rowIndex, colIndex, event);
};
<\/script>
`,yo=`<template>
  <el-select v-model="value" clearable placeholder="请选择" class="w-200 m-b-lg">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>

  <epp-simple-table :cols="cols" :data="tableData" :border="value" padding="0">
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <a>修改</a>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    id: 1,
    name: '王二麻子',
    sex: '男',
    org: '某个公司',
    des: '来自中国南方的温暖城市！',
  },
  { id: 2, name: '李四', sex: '男', org: '某个公司', des: '来自中国' },
  {
    id: 3,
    name: '张三',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
  },
]);
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '用户名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org' },
  { title: '简介', prop: 'des' },
  { title: '操作', slotName: 'handle', align: 'center' },
]);
const options = ref([
  {
    value: 'borderless',
    label: 'borderless',
  },
  {
    value: 'border-x',
    label: 'border-x',
  },
  {
    value: 'border-y',
    label: 'border-y',
  },
  {
    value: 'bordered',
    label: 'bordered',
  },
]);
const value = ref('borderless');
<\/script>
`,Do=`<template>
  <el-select v-model="value" clearable placeholder="请选择表格填充" class="m-b-md w-200">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>

  <el-select v-model="value2" clearable placeholder="请选择单元格填充" class="m-l-md m-b-md w-200">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>

  <epp-simple-table :cols="cols" :data="tableData" border="border-x" :padding="value" :cell-padding="value2">
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <el-button link type="primary">修改</el-button>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    id: 1,
    name: '王二麻子',
    sex: '男',
    org: '某个公司',
    des: '来自中国南方的温暖城市！',
  },
  { id: 2, name: '李四', sex: '男', org: '某个公司', des: '来自中国' },
  {
    id: 3,
    name: '张三',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
  },
]);
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '用户名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org' },
  { title: '简介', prop: 'des' },
  { title: '操作', slotName: 'handle', align: 'center' },
]);
const options = ref([
  {
    value: '0',
    label: 'none',
  },
  {
    value: '8px',
    label: '8px',
  },
  {
    value: '12px',
    label: '12px',
  },
  {
    value: '16px',
    label: '16px',
  },
  {
    value: '20px',
    label: '20px',
  },
  {
    value: '24px',
    label: '24px',
  },
]);
const value = ref('0');
const value2 = ref('0');
<\/script>
`,Eo=`<template>
  <epp-simple-table :cols="cols" :data="tableData" cross-hover hover>
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <el-button link type="primary">修改</el-button>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    id: 1,
    name: '王二麻子',
    sex: '男',
    org: '某个公司',
    des: '来自中国南方的温暖城市！',
  },
  { id: 2, name: '李四', sex: '男', org: '某个公司', des: '来自中国' },
  {
    id: 3,
    name: '张三',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
  },
]);
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '用户名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org' },
  { title: '简介', prop: 'des' },
  { title: '操作', slotName: 'handle', align: 'center' },
]);
<\/script>
`,So=`<template>
  <epp-simple-table :cols="cols" :data="tableData" stripe>
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <el-button link type="primary">修改</el-button>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    id: 1,
    name: '王二麻子',
    sex: '男',
    org: '某个公司',
    des: '来自中国南方的温暖城市！',
  },
  { id: 2, name: '李四', sex: '男', org: '某个公司', des: '来自中国' },
  {
    id: 3,
    name: '张三',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
  },
]);
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '用户名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org' },
  { title: '简介', prop: 'des' },
  { title: '操作', slotName: 'handle', align: 'center' },
]);
<\/script>
`,Io=`<template>
  <el-select v-model="value" clearable placeholder="请选择" class="m-b-md w-200">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>

  <epp-simple-table :cols="cols" :data="tableData" :size="value" class="borderless-last">
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <a>修改</a>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    id: 1,
    name: '王二麻子',
    sex: '男',
    org: '某个公司',
    des: '来自中国南方的温暖城市！',
  },
  { id: 2, name: '李四', sex: '男', org: '某个公司', des: '来自中国' },
  {
    id: 3,
    name: '张三',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
  },
]);
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '用户名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org' },
  { title: '简介', prop: 'des' },
  { title: '操作', slotName: 'handle', align: 'center' },
]);
const options = ref([
  {
    value: 'sm',
    label: 'sm',
  },
  {
    value: 'md',
    label: 'md',
  },
  {
    value: 'lg',
    label: 'lg',
  },
]);
const value = ref('md');
<\/script>
`,Co=`<template>
  <epp-simple-table :cols="cols" :data="tableData" border="bordered" resize>
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <a>修改</a>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    id: 1,
    name: '王二麻子',
    sex: '男',
    org: '某个公司',
    des: '来自中国南方的温暖城市！',
  },
  { id: 2, name: '李四', sex: '男', org: '某个公司', des: '来自中国' },
  {
    id: 3,
    name: '张三',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
  },
]);
const cols = ref([
  { title: '#', slotName: 'tableIndex', width: '4em' },
  { title: '用户名', prop: 'name', width: '8em' },
  { title: '性别', prop: 'sex', width: '4em' },
  { title: '单位', prop: 'org', width: '' },
  { title: '简介', prop: 'des', width: '' },
  { title: '操作', slotName: 'handle', align: 'center', width: '6em' },
]);
<\/script>
`,To=`<template>
  <div style="background-color: #25303f; height: 240px; padding: 12px;">
    <el-scrollbar style="height: 200px">
      <epp-simple-table :cols="cols" :data="tableData" gap-y="8px" list fixed-header>
        <template #tableIndex="{ row }">
          {{ row.icon }}
        </template>
        <template #handle>
          <a>修改</a>
        </template>
      </epp-simple-table>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    id: 1,
    name: '王二麻子',
    sex: '男',
    org: '某个公司',
    des: '来自中国南方的温暖城市！',
    icon: 'Briefcase',
  },
  {
    id: 2,
    name: '李四',
    sex: '男',
    org: '某个公司',
    des: '来自中国',
    icon: 'ChartPie',
  },
  {
    id: 3,
    name: '张三',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
    icon: 'Archive',
  },
  { id: 4, name: '李四2', sex: '男', org: '某个公司', des: '来自中国', icon: 'Archive' },
  { id: 5, name: '李四3', sex: '男', org: '某个公司', des: '来自中国', icon: 'Archive' },
  { id: 6, name: '李四4', sex: '男', org: '某个公司', des: '来自中国', icon: 'Archive' },
]);
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '用户名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org' },
  { title: '简介', prop: 'des' },
  { title: '操作', slotName: 'handle', align: 'center' },
]);
<\/script>
`,No=`<template>
  <div class="table-scroll" style="height: 200px">
    <epp-simple-table :cols="cols" :data="tableData" border="bordered" fixed-header>
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <el-button link type="primary">修改</el-button>
      </template>
    </epp-simple-table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    id: 1,
    name: '王二麻子',
    sex: '男',
    org: '某个公司',
    des: '来自中国南方的温暖城市！',
  },
  { id: 2, name: '李四', sex: '男', org: '某个公司', des: '来自中国' },
  {
    id: 3,
    name: '张三',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
  },
  { id: 4, name: '李四2', sex: '男', org: '某个公司', des: '来自中国' },
  { id: 5, name: '李四3', sex: '男', org: '某个公司', des: '来自中国' },
  { id: 6, name: '李四4', sex: '男', org: '某个公司', des: '来自中国' },
]);
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '用户名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org' },
  { title: '简介', prop: 'des' },
  { title: '操作', slotName: 'handle', align: 'center' },
]);
<\/script>
`,Ao=`<template>
  <div class="table-scroll scroll-column">
    <epp-simple-table :cols="cols" :data="tableData" border="border-x">
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <el-button link type="primary">修改</el-button>
      </template>
    </epp-simple-table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    id: 1,
    name: '王二麻子',
    sex: '男',
    org: '某个公司',
    des: '来自中国南方的温暖城市！',
    no: '478343',
    level: 'P8',
    years: 10,
    field1: '测试字段1',
    field2: '测试字段2',
    field3: '测试字段3',
  },
  {
    id: 2,
    name: '李四',
    sex: '男',
    org: '某个公司',
    des: '来自中国',
    no: '238343',
    level: 'P6',
    years: 3,
    field1: '测试字段1',
    field2: '测试字段2',
    field3: '测试字段3',
  },
  {
    id: 3,
    name: '张三',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
    no: '178343',
    level: 'P7',
    years: 5,
    field1: '测试字段1',
    field2: '测试字段2',
    field3: '测试字段3',
  },
]);
// 序号 slot名称唯一 tableIndex。 width: 设置宽度。align: 对齐方式。showTooltip: td是否一行显示,超出tooptip
const cols = ref([
  { title: '序号', prop: '', slotName: 'tableIndex', fixed: 'left', minWidth: '50px' },
  { title: '姓名', prop: 'name', showTooltip: true, minWidth: '150px' },
  { title: '性别', prop: 'sex', width: '50px' },
  { title: '工号', prop: 'no', showTooltip: true, minWidth: '120px', fixed: { position: 'left', distance: 'auto' } },
  { title: '职级', prop: 'level' },
  { title: '司龄', prop: 'years' },
  { title: '字段1', prop: 'field1' },
  { title: '字段2', prop: 'field2' },
  { title: '右自动固定', prop: 'field3', fixed: { position: 'right', distance: 'auto' } },
  { title: '描述', prop: 'des', showTooltip: true, minWidth: '400px' },
  { title: '单位', prop: 'org', showTooltip: true, minWidth: '150px', fixed: { position: 'right', distance: 'auto' } },
  {
    title: '操作',
    prop: '',
    slotName: 'handle',
    align: 'center',
    fixed: 'right',
  },
]);
<\/script>
`,ko=`<template>
  <div class="table-scroll" style="height: 200px">
    <epp-simple-table :cols="cols" :data="tableData" border="border-x" fixed-header :cell-style="cellStyle">
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex }}</span>
      </template>
      <template #handle>
        <el-button link type="primary">修改</el-button>
      </template>
    </epp-simple-table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

let idx = 0;
const row = {
  name: '王二麻子',
  sex: '男',
  org: '某个公司',
  des: '来自中国南方的温暖城市！',
};
const tableData = ref(new Array(22).fill(0).map((_) => Object.assign(JSON.parse(JSON.stringify(row)), { id: idx++ })));
const cols = ref([
  { title: '序号', prop: '', slotName: 'tableIndex' },
  { title: '姓名', prop: 'name', showTooltip: true, width: '100px' },
  { title: '性别', prop: 'sex', width: '50px' },
  { title: '单位', prop: 'org', showTooltip: true, width: '150px' },
  { title: '描述', prop: 'des', showTooltip: true, width: '400px' },
  { title: '操作', prop: '', slotName: 'handle', align: 'center' },
]);

// 固定5倍数的行
const cellStyle = ({ rowIndex }: { rowIndex: number }) => {
  return rowIndex % 5 === 0
    ? {
        backgroundColor: 'var(--el-fill-color-darker)',
        zIndex: 10,
        position: 'sticky',
        top: \`48px\`, // 48为表格头的高度
      }
    : {};
};
<\/script>
`,Oo=`<template>
  <el-scrollbar height="200px">
    <epp-simple-table :cols="cols" :data="tableData" border="border-x" fixed-header>
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <el-button link type="primary">修改</el-button>
      </template>
    </epp-simple-table>
  </el-scrollbar>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  { id: 1, name: '费文轩', sex: '男', org: '14933867329', des: '安徽省六安市东港镇港下锡港东路8栋1204室' },
  { id: 2, name: '刘林', sex: '男', org: '11381484641', des: '内蒙锡林浩特市北六门村南河街8栋1204室' },
  { id: 3, name: '金玥傲', sex: '男', org: '15000688905', des: '黑龙江省北安市三岔路浦沅宿舍131号' },
  { id: 4, name: '王武', sex: '男', org: '18102220035', des: '湖北省洪湖市东五条路林机小区948号' },
  { id: 5, name: '卞嘉怡', sex: '女', org: '11022218210', des: '山东省招远市并州北路2条8号' },
  { id: 6, name: '和文杰', sex: '男', org: '12548097666', des: '陕西省安康市金国里506号517房' },
  { id: 7, name: '潘瑞堂', sex: '男', org: '12065726257', des: '安徽省天长市金霞街道国际商业中心121号' },
  { id: 8, name: '关爽', sex: '女', org: '15570593023', des: '四川省简阳市前进路506号517房' },
]);
// 序号 slot名称唯一 tableIndex。 width: 设置宽度。align: 对齐方式。showTooltip: td是否一行显示,超出tooptip
const cols = ref([
  { title: '#', prop: '', slotName: 'tableIndex', minWidth: '4em' },
  { title: '姓名', prop: 'name', minWidth: '7em', fixed: 'left' },
  { title: '性别', prop: 'sex', minWidth: '6em' },
  { title: '手机号', prop: 'org', minWidth: '10em' },
  { title: '住址', prop: 'des', minWidth: '26em' },
  {
    title: '操作',
    prop: '',
    slotName: 'handle',
    align: 'center',
    fixed: 'right',
  },
]);
<\/script>
`,Po=`<template>
  <div ref="divWrapper" style="height: 200px; overflow-y: scroll">
    <epp-simple-table :cols="cols" :data="tableData" border="border-x" fixed-header>
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <el-button link type="primary">修改</el-button>
      </template>
      <template v-if="hadMoreData" #more>
        <template v-if="loading">
          <el-space size="large">
            <epp-spinner size="16px" />
            <span>正在加载...</span>
          </el-space>
        </template>
      </template>
    </epp-simple-table>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, toRefs, watch } from 'vue';
import { useScroll } from '@vueuse/core';

const divWrapper = ref();

let count = 1;
function id() {
  return count++;
}
const data = [
  {
    id: id(),
    name: '王二麻子',
    sex: '男',
    org: '某个公司',
    des: '来自中国南方的温暖城市！',
  },
  { id: id(), name: '李四', sex: '男', org: '某个公司', des: '来自中国' },
  {
    id: id(),
    name: '张三',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
  },
  {
    id: id(),
    name: '张三2',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
  },
];

const loading = ref(false);
const tableData = ref(JSON.parse(JSON.stringify(data)));
const cols = ref([
  { title: '#', slotName: 'tableIndex', width: '8%' },
  { title: '用户名', prop: 'name', width: '15%' },
  { title: '性别', prop: 'sex', width: '8%' },
  { title: '单位', prop: 'org', width: '20%' },
  { title: '简介', prop: 'des' },
  { title: '操作', slotName: 'handle', align: 'center', width: '10%' },
]);

const hadMoreData = computed(() => tableData.value.length < 12);
const loadMore = () => {
  if (loading.value || !hadMoreData.value) return;
  loading.value = true;
  window.setTimeout(() => {
    const moreData = JSON.parse(JSON.stringify(data));
    moreData.forEach((d: any) => {
      d.id = id();
      d.name = d.name + d.id;
    });
    tableData.value.push(...moreData);
    loading.value = false;
  }, 300);
};

const { arrivedState } = useScroll(divWrapper, { behavior: 'smooth' });
const { bottom } = toRefs(arrivedState);
watch(bottom, () => {
  if (bottom.value) {
    loadMore();
  }
});
<\/script>
`,Ro=`<template>
  <epp-simple-table :cols="cols" :data="tableData" hover :show-header="false">
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <el-button link type="primary">修改</el-button>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    id: 1,
    name: '王二麻子',
    sex: '男',
    org: '某个公司',
    des: '来自中国南方的温暖城市！',
  },
  { id: 2, name: '李四', sex: '男', org: '某个公司', des: '来自中国' },
  {
    id: 3,
    name: '张三',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
  },
]);
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '用户名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org' },
  { title: '简介', prop: 'des' },
  { title: '操作', slotName: 'handle', align: 'center' },
]);
<\/script>
`,Uo=`<template>
  <epp-simple-table :cols="cols" :data="tableData" @sort-change="sortChange">
    <template #index>
      自定义列
      <EppSimpleTable.SortableIcon sortable @sort-change="(val) => sortChange('id', val)" />
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { EppSimpleTable } from 'element-plus-plus';

const defaultData = [
  {
    id: 1,
    name: '范xxxx',
    sex: '女',
    org: '某个公司',
    des: '来自安全应急UED的设计师来自安全应急UED的设计',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '男',
    org: '某个公司',
    des: '经验丰富的前端工程师',
  },
  {
    id: 3,
    name: '王ssss',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
  },
];
const tableData = ref(JSON.parse(JSON.stringify(defaultData)));
const cols = ref([
  { title: '序号', prop: 'id', headerSlotName: 'index' },
  { title: '用户名', prop: 'name', sortable: true },
  { title: '性别', prop: 'sex', sortable: false },
  { title: '单位', prop: 'org', sortable: 'descending' },
  {
    title: '简介',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
    sortable: 'ascending',
  },
]);

const sortChange = (prop: string, sort: string) => {
  // 仅作为示例，实际项目需要通过调取后台API实现
  console.log('soring...', prop, sort);
  if (sort) {
    tableData.value.sort((d1: any, d2: any) => {
      const result = String(d1[prop]).localeCompare(String(d2[prop]));
      return sort === 'ascending' ? result : result * -1;
    });
  } else {
    tableData.value = JSON.parse(JSON.stringify(defaultData));
  }
};
<\/script>
`,Mo=`<template>
  <epp-simple-table :cols="cols" :data="tableData">
    <template #filterSlot="{ close }">
      <el-space direction="vertical" size="large">
        <el-space direction="vertical" size="large">
          <el-checkbox v-mode="selectedItems" value="1">条件1</el-checkbox>
          <el-checkbox v-mode="selectedItems" value="2">条件2</el-checkbox>
          <el-checkbox v-mode="selectedItems" value="3">条件3</el-checkbox>
        </el-space>
        <el-button type="primary" size="sm" class="m-t-md" @click="close">确定</el-button>
      </el-space>
    </template>
    <template #index>
      自定义列
      <EppSimpleTable.FilterIcon placement="right">
        <template #default="{ close }">
          <el-space direction="vertical" size="large">
            <el-space direction="vertical" size="large">
              <el-checkbox v-mode="selectedItems" value="1">条件1</el-checkbox>
              <el-checkbox v-mode="selectedItems" value="2">条件2</el-checkbox>
              <el-checkbox v-mode="selectedItems" value="3">条件3</el-checkbox>
            </el-space>
            <el-button type="primary" size="sm" class="m-t-md" @click="close">确定</el-button>
          </el-space>
        </template>
      </EppSimpleTable.FilterIcon>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { EppSimpleTable } from 'element-plus-plus';

const tableData = ref([
  {
    id: 1,
    name: '范xx',
    sex: '女',
    org: '某个公司',
    des: '来自安全应急UED的设计师来自安全应急UED的设计',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '男',
    org: '某个公司',
    des: '经验丰富的前端工程师',
  },
  {
    id: 3,
    name: '王xxx',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
  },
]);
const cols = ref([
  { title: '序号', prop: 'id', headerSlotName: 'index' },
  {
    title: '用户名',
    prop: 'name',
    filter: {
      slotName: 'filterSlot',
      placement: 'top',
      popperClass: 'test-filter-slot',
    },
  },
  { title: '单位', prop: 'org' },
  {
    title: '简介',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
    filter: { slotName: 'filterSlot' },
  },
  { title: '操作', slotName: 'handle', align: 'center' },
]);

const selectedItems = ref<string[]>([]);
<\/script>
`,zo=`<template>
  <epp-simple-table
    ref="tableRef"
    :cols="cols"
    :data="tableData"
    highlight-current-row
    @current-change="currentChange"
    @row-click="rowClick"
  />
  <br />
  <el-button class="m-r-md" @click="setCurrent(tableData[0])">选中第一行</el-button>
  <el-button @click="setCurrent()">取消选择</el-button>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableRef = ref();
const tableData = ref([
  {
    id: 1,
    name: '范xxxx',
    sex: '女',
    org: '某个公司',
    des: '来自安全应急UED的设计师来自安全应急UED的设计',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '男',
    org: '某个公司',
    des: '经验丰富的前端工程师',
  },
  {
    id: 3,
    name: '王ssss',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
  },
]);
const cols = ref([
  { title: '序号', prop: 'id', headerSlotName: 'index' },
  {
    title: '用户名',
    prop: 'name',
    sortable: true,
    filter: {
      slotName: 'filterSlot',
      placement: 'top',
      popperClass: 'test-filter-slot',
    },
  },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org' },
  {
    title: '简介',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
    filter: { slotName: 'filterSlot' },
  },
  { title: '操作', slotName: 'handle', align: 'center' },
]);

const currentChange = (now: Record<string, any>, old: Record<string, any>) => {
  console.log(now, old);
};
const rowClick = () => {
  console.log('row-click');
};
const setCurrent = (row?: Record<string, any>) => {
  tableRef.value.setCurrentRow(row);
};
<\/script>
`,Fo=`<template>
  <epp-simple-table ref="tableRef" :cols="cols" :data="tableData" :expand-row-keys="['1index', '2nameExpand']">
    <template #index="{ row }">
      <p>{{ row.org }} / {{ row.des }}</p>
    </template>
    <template #name="{ row }"> <a href="javascript:;" @click="expand(row)">点我展开</a> / {{ row.name }} </template>
    <template #nameExpand>
      <p>手工展开数据</p>
    </template>
    <template #des="{ row }">
      <p>{{ row.sex }} / {{ row.des }}</p>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableRef = ref();
const tableData = ref([
  {
    id: 1,
    name: '范xx',
    sex: '女',
    org: '某个公司',
    des: '来自安全应急UED的设计师来自安全应急UED的设计',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '男',
    org: '某个公司',
    des: '经验丰富的前端工程师',
  },
  {
    id: 3,
    name: '王xx',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
  },
]);
const cols = ref([
  { title: '#', prop: 'id', expand: { slotName: 'index', hideLabel: true } },
  { title: '用户名', prop: 'name', slotName: 'name', expand: { slotName: 'nameExpand' } },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org' },
  {
    title: '简介',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    expand: { slotName: 'des' },
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
  },
  { title: '操作', slotName: 'handle', align: 'center' },
]);

const expand = (row: { id: number }) => {
  tableRef.value.toggleExpand(row.id, 'nameExpand');
};
<\/script>
`,Lo=`<template>
  <epp-simple-table :cols="cols" :data="tableData" :load="load" :expand-row-keys="['1']">
    <template #tableIndex="{ row }">
      <span>{{ row.id }}</span>
    </template>
    <template #handle>
      <a>修改</a>
    </template>
  </epp-simple-table>
  <br /><br />
  <epp-simple-table :cols="cols" :data="tableData" :load="load" :expand-row-keys="['1']" :first-column-index="1">
    <template #tableIndex="{ row }">
      <span>{{ row.id }}</span>
    </template>
    <template #handle>
      <a>修改</a>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { isClient } from '@vueuse/core';

let count = 10000;
const tableData = ref();
const cols = ref([
  { title: 'ID', slotName: 'tableIndex' },
  { title: '用户名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org' },
  { title: '简介', prop: 'des', width: '220px', showTooltip: true },
  { title: '操作', slotName: 'handle', align: 'center' },
]);

const load = (_: Record<string, any>, __: Record<string, any>, resolve: (data: Record<string, any>[]) => void) => {
  window.setTimeout(() => {
    resolve([
      {
        id: count++,
        name: '王二麻子',
        sex: '男',
        org: '某个公司',
        des: '来自中国南方的温暖城市哦！',
        hasChildren: true,
      },
      {
        id: count++,
        name: '王二麻子',
        sex: '男',
        org: '某个公司',
        des: '来自中国南方的温暖城市！',
        children: [
          {
            id: count++,
            name: '王二麻子',
            sex: '男',
            org: '某个公司',
            des: '来自中国南方的温暖城市！',
          },
        ],
      },
    ]);
  }, 3000);
};

if (isClient) {
  window.setTimeout(() => {
    tableData.value = [
      {
        id: 1,
        name: '王二麻子',
        sex: '男',
        org: '某个公司',
        des: '来自中国南方的温暖城市啊！',
        children: [
          {
            id: 11,
            name: '王二麻子11',
            sex: '男',
            org: '某个公司',
            des: '来自中国南方的温暖城市！',
            children: [
              {
                id: 111,
                name: '王二麻子111',
                sex: '男',
                org: '某个公司',
                des: '来自中国南方的温暖城市！',
              },
              {
                id: 112,
                name: '王二麻子112',
                sex: '男',
                org: '某个公司',
                des: '来自中国南方的温暖城市！',
              },
            ],
          },
          {
            id: 12,
            name: '王二麻子12',
            sex: '男',
            org: '某个公司',
            des: '来自中国南方的温暖城市！',
            children: [],
          },
        ],
      },
      {
        id: 2,
        name: '李四',
        sex: '男',
        org: '某个公司',
        des: '来自中国',
        hasChildren: true,
      },
      {
        id: 3,
        name: '张三',
        sex: '男',
        org: '某个公司',
        des: '来自中国北方的寒冷的城市！',
      },
    ];
  }, 100);
}
<\/script>
`,Wo=`<template>
  <epp-simple-table :cols="cols" :data="tableData" border="bordered" :span-method="arraySpanMethod" />
  <epp-simple-table :cols="cols" :data="tableData" border="bordered" class="m-t-md" :span-method="objectSpanMethod" />
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
]);
const cols = ref([
  { title: 'id', prop: 'id' },
  { title: '用户名', prop: 'name' },
  { title: 'Amount1', prop: 'amount1' },
  { title: 'Amount2', prop: 'amount2' },
  { title: 'Amount3', prop: 'amount3' },
]);

const arraySpanMethod = ({ rowIndex, columnIndex }: { rowIndex: number; columnIndex: number }) => {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2];
    } else if (columnIndex === 1) {
      return [0, 0];
    }
  }
};

const objectSpanMethod = ({ rowIndex, columnIndex }: { rowIndex: number; columnIndex: number }) => {
  if (columnIndex === 0) {
    if (rowIndex % 2 === 0) {
      return {
        rowspan: 2,
        colspan: 1,
      };
    } else {
      return {
        rowspan: 0,
        colspan: 0,
      };
    }
  }
};
<\/script>
`,$o=`<template>
  <epp-simple-table :cols="cols" :data="tableData" border="bordered">
    <template #handle>
      <a>修改</a>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]);
const cols = ref([
  { title: '日期', prop: 'date' },
  {
    title: '配送信息',
    prop: 'delivery',
    children: [
      { title: '姓名', prop: 'name' },
      {
        title: '地址信息',
        prop: 'address',
        children: [
          { title: '省/市', prop: 'state' },
          { title: '城市', prop: 'city' },
          { title: '地址', prop: 'address' },
          { title: '操作', prop: 'zip', slotName: 'handle' },
        ],
      },
    ],
  },
]);
<\/script>
`,Bo=`<template>
  <epp-simple-table :cols="cols" :data="tableData" border="bordered">
    <template #foot>
      <tr>
        <td colspan="2"><strong>合计</strong></td>
        <td>￥3232</td>
        <td>￥1212.22</td>
        <td>￥90.22</td>
      </tr>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
]);
const cols = ref([
  { title: 'id', prop: 'id' },
  { title: '用户名', prop: 'name' },
  { title: 'Amount1', prop: 'amount1' },
  { title: 'Amount2', prop: 'amount2' },
  { title: 'Amount3', prop: 'amount3' },
]);
<\/script>
`,Go=`<template>
  <epp-simple-table ref="simpleTableRef" :cols="cols" :data="tableData">
    <template #handle>
      <a>修改</a>
    </template>
  </epp-simple-table>
  <br /><br />
  <el-button type="primary" @click="toggleColumn">隐藏/显示第3列</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const simpleTableRef = ref();
const tableData = ref([
  {
    id: 1,
    name: '范xxx',
    sex: '女',
    org: '某个公司',
    des: '来自安全应急UED的设计师来自安全应急',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '男',
    org: '某个公司',
    des: '经验丰富的前端工程师',
  },
  {
    id: 3,
    name: '王xxxxx',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
  },
]);
const cols = ref([
  { title: '#', prop: 'id' },
  { title: '用户名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org', align: 'center' },
  {
    title: '简介',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
  },
  { title: '操作', slotName: 'handle', align: 'center' },
]);

const toggleColumn = () => {
  simpleTableRef.value.toggleColumn(2);
};
<\/script>
`,Xo=`<template>
  <epp-simple-table
    :cols="cols"
    :data="tableData"
    class="sortable-table"
    @row-click="rowClicked"
    @cell-click="cellClicked"
  >
    <template #firstCol>
      <el-checkbox v-model="selectedAll" :indeterminate="isIndeterminate" @change="selectAll" />
    </template>
    <template #tableIndex="{ row }">
      <el-checkbox v-model="selectedRows" :value="row.id" @change="selectRow(row.id)">{{ '' }}</el-checkbox>
    </template>

    <template #handle>
      <a>修改</a>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { isClient } from '@vueuse/core';
import Sortable from 'sortablejs';
import type { ColumnType } from 'element-plus-plus';

const selectedAll = ref(false);
const selectedRows = ref<number[]>([]);
const isIndeterminate = ref(false);

const tableData = ref([
  {
    id: 1,
    name: '柏庐',
    sex: '女',
    org: '某个公司',
    des: '来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计',
    otherInfo: {
      age: 20,
    },
  },
  {
    id: 2,
    name: '军结',
    sex: '男',
    org: '某个公司',
    des: '经验丰富的前端工程师',
    otherInfo: {
      age: 22,
    },
  },
  {
    id: 3,
    name: '钞洋',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
    otherInfo: {
      age: 28,
    },
  },
  {
    id: 4,
    name: '钞洋1',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
    otherInfo: {
      age: 28,
    },
  },
  {
    id: 5,
    name: '钞洋2',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
    otherInfo: {
      age: 28,
    },
  },
]);
const cols = ref([
  { title: '#', slotName: 'tableIndex', headerSlotName: 'firstCol', width: '3em' },
  { title: '用户名', prop: 'name' },
  { title: '年龄', prop: 'otherInfo.age' },
  { title: '单位', prop: 'org', align: 'center' },
  {
    title: '简介',
    prop: 'des',
    align: 'center',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
  },
  { title: '操作', slotName: 'handle', align: 'center' },
]);

const selectAll = () => {
  if (selectedAll.value) {
    selectedRows.value.splice(0, selectedRows.value.length);
    selectedRows.value.push(...tableData.value.map((d) => d.id));
    isIndeterminate.value = false;
  } else {
    selectedRows.value.splice(0, selectedRows.value.length);
  }
};
const selectRow = () => {
  selectedAll.value = selectedRows.value.length === tableData.value.length;
  if (selectedRows.value.length > 0 && selectedAll.value == false) {
    isIndeterminate.value = true;
  } else {
    isIndeterminate.value = false;
  }
};
const rowClicked = (row: Record<string, any>, rowIndex: number, event: Event) => {
  console.log('rowClicked', row, rowIndex, event);
};
const cellClicked = (row: Record<string, any>, col: ColumnType, rowIndex: number, colIndex: number, event: Event) => {
  console.log('cellClicked', row, col, rowIndex, colIndex, event);
};

onMounted(() => {
  if (!isClient) return;
  const el = document.querySelector('.sortable-table > tbody');
  Sortable.create(el, {
    disabled: false,
    handle: 'tr',
    animation: 150,
    onEnd: (e: any) => {
      const arr = tableData.value;
      arr.splice(e.newIndex, 0, arr.splice(e.oldIndex, 1)[0]);
      nextTick(() => {
        tableData.value = arr;
      });
    },
  });
});
<\/script>
`,Yo=`<template>
  <epp-simple-table :cols="cols" border="border-x" :data="tableData" />
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([]);
// 序号 slot名称唯一 tableIndex。 width: 设置宽度。align: 对齐方式。showTooltip: td是否一行显示,超出tooptip
const cols = ref([
  { title: '序号', prop: '', slotName: 'tableIndex' },
  { title: '姓名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '操作', prop: '', align: 'center' },
]);
<\/script>
`,Vo=`<template>
  <epp-simple-table :cols="cols" border="border-x" :data="tableData">
    <template #unknown>
      <p style="text-align: center">可能数据报错了哦~</p>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref(null);
// 序号 slot名称唯一 tableIndex。 width: 设置宽度。align: 对齐方式。showTooltip: td是否一行显示,超出tooptip
const cols = ref([
  { title: '序号', prop: '', slotName: 'tableIndex' },
  { title: '姓名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '操作', prop: '', align: 'center' },
]);
<\/script>
`;export{uo as A,wo as B,mo as C,Wo as D,Fo as E,No as F,fo as G,Eo as H,ho as I,Bo as J,go as K,To as L,$o as M,Go as N,bo as O,Do as P,Xo as Q,Co as R,So as S,Lo as T,vo as U,Yo as V,xo as W,Vo as X,_o as Y,jn as _,yo as a,Jn as b,qn as c,Kn as d,Qn as e,Io as f,Zn as g,eo as h,to as i,no as j,Ao as k,oo as l,ko as m,lo as n,Oo as o,ao as p,Po as q,ro as r,Ro as s,io as t,Uo as u,so as v,Mo as w,po as x,zo as y,co as z};
