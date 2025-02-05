import{E as l}from"./index.Dst_foRB.js";import{y as b,r as m,z as e,A as j,a4 as u,P as c,H as f,I as d,B as p,O as o,M as B}from"./framework.CPxOa8kE.js";const y=b({__name:"basic",setup(O){const t=m([{obj1:{innerObj2:{prop1:"1",prop2:"2"}}},{obj1:{innerObj2:{prop1:"3",prop2:"4"}}}]);return(_,n)=>{const s=l;return e(!0),j(c,null,u(t.value,(a,i)=>(e(),f(s,{key:i,obj2:a.obj1.innerObj2},{default:d(({obj2:r})=>[n[0]||(n[0]=p("h5",null,"Inner Prop",-1)),p("span",null,"prop1: ["+o(r.prop1)+"]",1),n[1]||(n[1]=B(" / ")),p("span",null,"prop2: ["+o(r.prop2)+"]",1),n[2]||(n[2]=p("br",null,null,-1))]),_:2},1032,["obj2"]))),128)}}}),g=`<template>
  <template v-for="(item, idx) in list" :key="idx">
    <epp-alias :obj2="item.obj1.innerObj2" #="{ obj2 }">
      <h5>Inner Prop</h5>
      <span>prop1: [{{ obj2.prop1 }}]</span> / <span>prop2: [{{ obj2.prop2 }}]</span>
      <br />
    </epp-alias>
  </template>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const list = ref([
  {
    obj1: {
      innerObj2: {
        prop1: '1',
        prop2: '2',
      },
    },
  },
  {
    obj1: {
      innerObj2: {
        prop1: '3',
        prop2: '4',
      },
    },
  },
]);
<\/script>
`;export{g as B,y as _};
