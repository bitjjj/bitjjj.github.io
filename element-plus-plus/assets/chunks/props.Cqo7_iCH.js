import{E as a}from"./index.CUq7zNHh.js";import{y as c,z as i,H as m,I as n,M as s,ag as f,Q as r,u as l}from"./framework.CPxOa8kE.js";import{d as _,c as g}from"./theme.BKaFdXT3.js";const D=c({__name:"basic",setup(u){const p=()=>{console.log("Make sure")};return(t,e)=>{const o=a;return i(),m(o,{tip:"Click Again",onConfirm:p},{default:n(()=>e[0]||(e[0]=[s(" Delete ")])),_:1})}}}),w=`<template>
  <epp-confirmable-button tip="Click Again" @confirm="del"> Delete </epp-confirmable-button>
</template>
<script lang="ts" setup>
const del = () => {
  console.log('Make sure');
};
<\/script>
`,y=c({__name:"slot",setup(u){const p=()=>{console.log("Make Sure")};return(t,e)=>{const o=f("el-icon"),d=a;return i(),m(d,{onConfirm:p},{tip:n(()=>[r(o,{type:"danger",class:"m-r-md"},{default:n(()=>[r(l(_))]),_:1}),e[0]||(e[0]=s(" Click Again for Deleting "))]),default:n(()=>[e[1]||(e[1]=s(" Delete? ")),r(o,null,{default:n(()=>[r(l(g))]),_:1})]),_:1})}}}),x=`<template>
  <epp-confirmable-button @confirm="del">
    <template #tip>
      <el-icon type="danger" class="m-r-md">
        <Discount />
      </el-icon>
      Click Again for Deleting
    </template>
    <template #default>
      Delete?
      <el-icon>
        <Close />
      </el-icon>
    </template>
  </epp-confirmable-button>
</template>
<script lang="ts" setup>
import { Discount, Close } from '@element-plus/icons-vue';

const del = () => {
  console.log('Make Sure');
};
<\/script>
`,A=c({__name:"props",setup(u){return(p,t)=>{const e=f("el-icon"),o=a;return i(),m(o,{"confirm-state":{type:"warning",text:!0,bg:!0},"popover-props":{effect:"dark",showArrow:!0}},{tip:n(()=>[r(e,{type:"warning",class:"m-r-md"},{default:n(()=>[r(l(_))]),_:1}),t[0]||(t[0]=s(" Click Again for Transfer Money "))]),default:n(()=>[t[1]||(t[1]=s(" Transfer "))]),_:1})}}}),M=`<template>
  <epp-confirmable-button
    :confirm-state="{ type: 'warning', text: true, bg: true }"
    :popover-props="{ effect: 'dark', showArrow: true }"
  >
    <template #tip>
      <el-icon type="warning" class="m-r-md">
        <Discount />
      </el-icon>
      Click Again for Transfer Money
    </template>
    Transfer
  </epp-confirmable-button>
</template>
<script lang="ts" setup>
import { Discount } from '@element-plus/icons-vue';
<\/script>
`;export{w as B,M as P,x as S,D as _,y as a,A as b};
