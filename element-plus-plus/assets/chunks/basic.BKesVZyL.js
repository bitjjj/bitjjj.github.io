import{w as J}from"./install.CDck28KX.js";import{f as u,y as A,G as q,r as k,ag as j,z as y,A as P,B as x,O as F,Q as c,I as b,u as a,L as E,J as D,R as I,D as T,C as K,P as Q,a4 as W,H as U,F as X,i as Y,b as Z,o as ee,af as B,h as le,M as te}from"./framework.CPxOa8kE.js";import{y as L,a0 as H,e as R,s as z,a1 as ne,o as re,a2 as ae,K as se,A as oe,a3 as de,a4 as ie}from"./theme.CPYnN67Q.js";const G=t=>{const v=u(()=>{var f;return((f=t.props)==null?void 0:f.label)||"label"}),g=u(()=>t.nodeKey||"id"),l=u(()=>{var f;return((f=t.props)==null?void 0:f.disabled)||"disabled"});return{key:g,label:v,disabled:l}},ce={class:"panel-header el-transfer-panel__header"},ue={key:0,class:"panel-filter"},fe={key:0,class:"el-transfer-panel__footer"},pe=A({__name:"target-panel",props:{data:{type:Array,default:()=>[]},optionRender:{type:Function,required:!0},placeholder:String,title:String,filterable:Boolean,filterMethod:Function,props:Object},emits:["checked-change"],setup(t){const v=t,g=({option:n})=>n,l=q(),{t:f}=L(),o=k(""),d=k(!1),p=k([]),{key:s,label:m,disabled:_}=G({props:v}),M=u(()=>v.data.filter(n=>typeof v.filterMethod=="function"?v.filterMethod(o.value,n):(n[m.value]||n[s.value].toString()).toLowerCase().includes(o.value.toLowerCase()))),S=u(()=>o.value.length>0&&M.value.length===0),N=u(()=>o.value.length>0&&d.value?"show-close":""),w=u(()=>{var n,r;return!!((r=(n=l.default)==null?void 0:n.call(l)[0].children)!=null&&r.length)}),O=()=>{N.value==="show-close"&&(o.value="")};return(n,r)=>{const $=j("el-scrollbar");return y(),P("div",{class:T(["el-transfer-panel transfer-panel target-panel",t.filterable?"":"unfilterable"])},[x("div",ce,F(t.title),1),x("div",{class:T(["panel-body el-transfer-panel__body",w.value?"is-with-footer":""])},[t.filterable?(y(),P("div",ue,[c(a(H),{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=i=>o.value=i),block:"",fill:"",placeholder:t.placeholder,class:"el-transfer-panel__filter",onMouseenter:r[1]||(r[1]=i=>d.value=!0),onMouseleave:r[2]||(r[2]=i=>d.value=!1)},{suffix:b(()=>[x("i",{class:T(["input-close",N.value]),onClick:O},null,2)]),prefix:b(()=>[c(a(R),null,{default:b(()=>[c(a(z))]),_:1})]),_:1},8,["modelValue","placeholder"])])):E("",!0),c($,{class:"checkbox-scrollbar"},{default:b(()=>[D(c(a(ne),{modelValue:p.value,"onUpdate:modelValue":r[3]||(r[3]=i=>p.value=i),dir:"vertical",gap:"0",class:T({"panel-list":!0,filterable:t.filterable}),custom:!0},{default:b(()=>[(y(!0),P(Q,null,W(M.value,i=>(y(),U(a(ae),{key:i[a(s)],class:"item",label:i[a(s)],disabled:i[a(_)]},{default:b(()=>[c(g,{option:t.optionRender(i)},null,8,["option"]),i[a(_)]?E("",!0):(y(),U(a(R),{key:0,class:"item-close",onClick:V=>n.$emit("checked-change",i[a(s)])},{default:b(()=>[c(a(re))]),_:2},1032,["onClick"]))]),_:2},1032,["label","disabled"]))),128))]),_:1},8,["modelValue","class"]),[[I,!S.value&&t.data.length>0]])]),_:1}),D(x("p",{class:"el-transfer-panel__empty"},F(S.value?a(f)("hl.transfer.noMatch"):a(f)("hl.transfer.noData")),513),[[I,S.value||t.data.length===0]])],2),w.value?(y(),P("p",fe,[K(n.$slots,"default")])):E("",!0)],2)}}}),he={class:"panel-header el-transfer-panel__header"},be={key:0,class:"panel-filter"},ve={key:0,class:"el-transfer-panel__footer"},me=A({__name:"tree-panel",props:{treeProps:Object,placeholder:String,title:String,filterable:Boolean,optionRender:{type:Function,required:!0}},emits:["checked-change"],setup(t,{expose:v,emit:g}){const l=g,f=({option:n})=>n,o=q(),{t:d}=L(),p=k(),s=k(""),m=k(!1),_=u(()=>{var n,r;return!!((r=(n=o.default)==null?void 0:n.call(o)[0].children)!=null&&r.length)}),M=u(()=>s.value.length>0&&m.value?"show-close":""),S=se(n=>{p.value.filter(n)},300),N=()=>{M.value==="show-close"&&(s.value="",p.value.filter(""))},w=(n,...r)=>{if(p.value[n])return p.value[n](...r);console.error("tree method don't exist!!")},O=()=>{l("checked-change")};return v({callTreeMethod:w}),(n,r)=>{var $,i;return y(),P("div",{class:T(["el-transfer-panel transfer-panel tree-panel",t.filterable?"":"unfilterable"])},[x("div",he,F(t.title),1),x("div",{class:T(["panel-body el-transfer-panel__body",_.value?"is-with-footer":""])},[t.filterable?(y(),P("div",be,[c(a(H),{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=V=>s.value=V),block:"",fill:"",placeholder:t.placeholder,class:"el-transfer-panel__filter",onInput:a(S),onMouseenter:r[1]||(r[1]=V=>m.value=!0),onMouseleave:r[2]||(r[2]=V=>m.value=!1)},{suffix:b(()=>[x("i",{class:T(["input-close",M.value]),onClick:N},null,2)]),prefix:b(()=>[c(a(R),null,{default:b(()=>[c(a(z))]),_:1})]),_:1},8,["modelValue","placeholder","onInput"])])):E("",!0),c(a(oe),{class:"tree-scrollbar"},{default:b(()=>[c(a(de),X({ref_key:"hlTree",ref:p,class:"panel-list","node-key":"id"},t.treeProps,{"show-checkbox":!0,onCheckChange:O}),{default:b(({data:V})=>[c(f,{option:t.optionRender(V)},null,8,["option"])]),_:1},16)]),_:1}),D(x("p",{class:"el-transfer-panel__empty"},F(a(d)("el.transfer.noData")),513),[[I,((i=($=t.treeProps)==null?void 0:$.data)==null?void 0:i.length)===0]])],2),_.value?(y(),P("p",ve,[K(n.$slots,"default")])):E("",!0)],2)}}}),ye={modelValue:{type:Array,default:()=>[]},treeProps:{type:Object,default:()=>({})},titles:{type:Array,default:()=>[]},filterPlaceholder:{type:String,default:""},renderContent:Function,filterable:{type:Boolean,default:!1}},ke={"update:modelValue":t=>Array.isArray(t)},ge={class:T(["epp-tree-transfer","el-transfer"])},Ce=A({name:"EppTreeTransfer",inheritAttrs:!1,__name:"tree-transfer",props:ye,emits:ke,setup(t,{expose:v,emit:g}){const l=t,f=g,{t:o}=L(),d=q(),p=Y(ie,{}),s=k(),m=k(),_=k([]),M=e=>{e==="left"?s.value.query="":e==="right"&&(m.value.query="")},S=u(()=>l.titles[0]||o("el.transfer.titles.0")),N=u(()=>l.titles[1]||o("el.transfer.titles.1")),w=u(()=>l.filterPlaceholder||o("el.transfer.filterPlaceholder")),O=u(()=>l.treeProps.filterNodeMethod||(()=>!0));Z(()=>l.modelValue,()=>{var e;(e=p.validate)==null||e.call(p,"change")});const{label:n}=G(l.treeProps),r=u(()=>e=>{if(l.renderContent)return l.renderContent(B,e,"left");const h=d.treeNode||d["tree-node"];return h?h({data:e}):B("span",{class:"tree-node-label"},e[n.value])}),$=u(()=>e=>{if(l.renderContent)return l.renderContent(B,e,"right");const h=d.targetNode||d["target-node"];return h?h({data:e}):B("span",e[n.value])}),i=()=>{const e=!l.treeProps.checkStrictly,h=s.value.callTreeMethod("getCheckedKeys",e),C=s.value.callTreeMethod("getCheckedNodes",e);f("update:modelValue",h),_.value=[...C]},V=e=>{const h=!l.treeProps.checkStrictly,C=s.value.callTreeMethod("getCheckedKeys",h);C.indexOf(e)!==-1&&C.splice(C.indexOf(e),1),s.value.callTreeMethod("setCheckedKeys",C,h)};return ee(()=>{const e=!l.treeProps.checkStrictly;s.value.callTreeMethod("setCheckedKeys",l.modelValue,e);const h=[];l.modelValue.forEach(C=>{h.push(s.value.callTreeMethod("getNode",C))}),_.value=[...h.map(C=>C.data)]}),v({clearQuery:M}),(e,h)=>(y(),P("div",ge,[c(me,{ref_key:"treePanel",ref:s,title:S.value,placeholder:w.value,filterable:e.filterable,"option-render":r.value,"tree-props":e.treeProps,onCheckedChange:i},{default:b(()=>[K(e.$slots,"left-footer")]),_:3},8,["title","placeholder","filterable","option-render","tree-props"]),c(pe,{ref:"targetPanel",data:_.value,"option-render":$.value,placeholder:w.value,filterable:e.filterable,"filter-method":O.value,title:N.value,props:e.treeProps.props,onCheckedChange:V},{default:b(()=>[K(e.$slots,"right-footer")]),_:3},8,["data","option-render","placeholder","filterable","filter-method","title","props"])]))}}),_e=J(Ce),Te=A({__name:"basic",setup(t){const v=(o,d)=>o?d.label.indexOf(o)!==-1:!0,g=k(["2"]),l=k(!0),f=le({nodeKey:"id",checkStrictly:!0,showCheckbox:!1,filterNodeMethod:v,data:[{label:"xxxx自治区",id:"1",childrens:[{label:"城市1",id:"2",childrens:[{label:"区域1",id:"7",childrens:[]},{label:"区域2",id:"8",childrens:[]},{label:"县级1",id:"9",childrens:[{label:"测试乡镇测试乡镇测试乡镇测试乡镇测试乡镇测试乡镇测试乡镇",id:"8-1",childrens:[]},{label:"测试乡镇2",id:"8-2",childrens:[]},{label:"测试乡镇3",id:"8-3",childrens:[]}]}]},{label:"城市2",id:"3",disabled:!0,childrens:[{label:"区域1",id:"10",disabled:!0,childrens:[]},{label:"区域2",id:"11",disabled:!0,childrens:[]},{label:"区域3",id:"12",disabled:!0,childrens:[]}]},{label:"城市3",id:"4",childrens:[]},{label:"城市4",id:"5",childrens:[]},{label:"城市5",id:"6",childrens:[]}]}],props:{children:"childrens",label:"label"}});return(o,d)=>{const p=j("el-checkbox"),s=_e;return y(),P(Q,null,[x("p",null,[d[2]||(d[2]=te("filterable: ")),c(p,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=m=>l.value=m)},null,8,["modelValue"])]),c(s,{modelValue:g.value,"onUpdate:modelValue":d[1]||(d[1]=m=>g.value=m),filterable:l.value,"tree-props":f},null,8,["modelValue","filterable","tree-props"])],64)}}}),Me=`<template>
  <p>filterable: <el-checkbox v-model="filterable" /></p>
  <epp-tree-transfer v-model="value" :filterable="filterable" :tree-props="treeProps" />
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

const filterNode = (value: string, data: { label: string }) => {
  if (!value) return true;
  return data.label.indexOf(value) !== -1;
};

const value = ref(['2']);
const filterable = ref(true);
const treeProps = reactive({
  nodeKey: 'id',
  checkStrictly: true,
  showCheckbox: false,
  filterNodeMethod: filterNode,
  data: [
    {
      label: 'xxxx自治区',
      id: '1',
      childrens: [
        {
          label: '城市1',
          id: '2',
          childrens: [
            { label: '区域1', id: '7', childrens: [] },
            { label: '区域2', id: '8', childrens: [] },
            {
              label: '县级1',
              id: '9',
              childrens: [
                {
                  label: '测试乡镇测试乡镇测试乡镇测试乡镇测试乡镇测试乡镇测试乡镇',
                  id: '8-1',
                  childrens: [],
                },
                { label: '测试乡镇2', id: '8-2', childrens: [] },
                { label: '测试乡镇3', id: '8-3', childrens: [] },
              ],
            },
          ],
        },
        {
          label: '城市2',
          id: '3',
          disabled: true,
          childrens: [
            {
              label: '区域1',
              id: '10',
              disabled: true,
              childrens: [],
            },
            {
              label: '区域2',
              id: '11',
              disabled: true,
              childrens: [],
            },
            {
              label: '区域3',
              id: '12',
              disabled: true,
              childrens: [],
            },
          ],
        },
        { label: '城市3', id: '4', childrens: [] },
        { label: '城市4', id: '5', childrens: [] },
        { label: '城市5', id: '6', childrens: [] },
      ],
    },
  ],
  props: {
    children: 'childrens',
    label: 'label',
  },
});
<\/script>
`;export{Me as B,Te as _};
