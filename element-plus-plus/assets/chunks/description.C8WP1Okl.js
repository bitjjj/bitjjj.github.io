import{E as v}from"./index.B_-WkXPs.js";import{y as f,r as u,ag as r,z as p,A as b,Q as o,I as l,P as _,M as w,H as h,L as C,B as m,u as V}from"./framework.CPxOa8kE.js";import{g as x}from"./theme.DjBo4ZnZ.js";const H=f({__name:"basic",setup(g){const e=u(!1),s=()=>{e.value=!e.value};return(c,n)=>{const t=v,a=r("el-button");return p(),b(_,null,[o(t,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=i=>e.value=i),title:"This is Banner",effect:"dark"},null,8,["modelValue"]),o(a,{onClick:s},{default:l(()=>n[1]||(n[1]=[w("Show/Hide")])),_:1})],64)}}}),z=`<template>
  <epp-banner v-model="visible" title="This is Banner" effect="dark" />
  <el-button @click="show">Show/Hide</el-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);

const show = () => {
  visible.value = !visible.value;
};
<\/script>
`,T=f({__name:"container",setup(g){const e=u(!1),s=u(!1),c=()=>{s.value=!0,window.setTimeout(()=>{e.value=!e.value},1e3)};return(n,t)=>{const a=v,i=r("el-button");return p(),b(_,null,[s.value?(p(),h(a,{key:0,modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=d=>e.value=d),to:"#bannerContainer",effect:"dark"},{default:l(()=>t[1]||(t[1]=[m("b",null,"Some Container",-1)])),_:1},8,["modelValue"])):C("",!0),t[3]||(t[3]=m("div",{id:"bannerContainer",class:"m-b-lg",style:{height:"200px",position:"relative","background-color":"var(--el-color-primary-light-3)"}},null,-1)),o(i,{onClick:c},{default:l(()=>t[2]||(t[2]=[w("Show/Hide(Delay 1s)")])),_:1})],64)}}}),D=`<template>
  <epp-banner v-if="mounted" v-model="visible" to="#bannerContainer" effect="dark">
    <b>Some Container</b>
  </epp-banner>
  <div
    id="bannerContainer"
    class="m-b-lg"
    style="height: 200px; position: relative; background-color: var(--el-color-primary-light-3)"
  ></div>
  <el-button @click="show">Show/Hide(Delay 1s)</el-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
const mounted = ref(false);

const show = () => {
  mounted.value = true;
  window.setTimeout(() => {
    visible.value = !visible.value;
  }, 1000);
};
<\/script>
`,N=f({__name:"description",setup(g){const e=u(!1),s=()=>{e.value=!e.value};return(c,n)=>{const t=r("el-icon"),a=r("el-space"),i=v,d=r("el-button");return p(),b(_,null,[o(i,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=k=>e.value=k),type:"success",effect:"dark",dashed:"",closable:!1,timeout:5e3,title:"Custom Banner"},{default:l(()=>[o(a,{size:"large"},{default:l(()=>[o(t,{size:"20px"},{default:l(()=>[o(V(x))]),_:1}),n[1]||(n[1]=m("div",{class:"text-regular"},' Read full articles, watch videos, browse thousands of titles and more on the "Home page". ',-1))]),_:1})]),_:1},8,["modelValue"]),o(d,{onClick:s},{default:l(()=>n[2]||(n[2]=[w("Show/Hide")])),_:1})],64)}}}),E=`<template>
  <epp-banner
    v-model="visible"
    type="success"
    effect="dark"
    dashed
    :closable="false"
    :timeout="5000"
    title="Custom Banner"
  >
    <el-space size="large">
      <el-icon size="20px">
        <GoodsFilled />
      </el-icon>
      <div class="text-regular">
        Read full articles, watch videos, browse thousands of titles and more on the "Home page".
      </div>
    </el-space>
  </epp-banner>
  <el-button @click="show">Show/Hide</el-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { GoodsFilled } from '@element-plus/icons-vue';

const visible = ref(false);

const show = () => {
  visible.value = !visible.value;
};
<\/script>
`;export{z as B,D as C,E as D,H as _,T as a,N as b};
