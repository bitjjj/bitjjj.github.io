import{w as m}from"./install.CDck28KX.js";import{y as a,r as u,z as t,A as j,a4 as c,P as f,H as d,I as _,B as r,O as s,M as B}from"./framework.CPxOa8kE.js";const O=a({name:"EppAlias",render(){var e,p;return(p=(e=this.$slots).default)==null?void 0:p.call(e,this.$attrs)}}),x=m(O),g=a({__name:"basic",setup(e){const p=u([{obj1:{innerObj2:{prop1:"1",prop2:"2"}}},{obj1:{innerObj2:{prop1:"3",prop2:"4"}}}]);return(k,n)=>{const i=x;return t(!0),j(f,null,c(p.value,(l,b)=>(t(),d(i,{key:b,obj2:l.obj1.innerObj2},{default:_(({obj2:o})=>[n[0]||(n[0]=r("h5",null,"Inner Prop",-1)),r("span",null,"prop1: ["+s(o.prop1)+"]",1),n[1]||(n[1]=B(" / ")),r("span",null,"prop2: ["+s(o.prop2)+"]",1),n[2]||(n[2]=r("br",null,null,-1))]),_:2},1032,["obj2"]))),128)}}}),v=`<template>
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
`;export{v as B,g as _};
