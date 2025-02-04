import{E as _}from"./index.T8LKszAk.js";import{aw as w,ag as a,z as r,H as i,I as e,Q as n,M as p,L as b,y as d,u as f,B as u}from"./framework.CPxOa8kE.js";import{f as v,e as x,u as g}from"./theme.BKaFdXT3.js";const C={};function L(c,l){const t=a("el-button"),o=a("el-switch"),s=_;return r(),i(s,{"show-count":3},{default:e(()=>[n(t,{link:"",type:"primary"},{default:e(()=>l[0]||(l[0]=[p("操作1")])),_:1}),n(o),(r(),i(t,{key:0,link:""},{default:e(()=>l[1]||(l[1]=[p("操作3")])),_:1})),b("",!0),n(t,{link:"",type:"primary"},{default:e(()=>l[3]||(l[3]=[p("操作5")])),_:1})]),_:1})}const V=w(C,[["render",L]]),M=d({__name:"more",setup(c){return(l,t)=>{const o=a("el-button"),s=a("el-icon"),m=_;return r(),i(m,{"dropdown-props":{trigger:"click"}},{more:e(()=>[n(s,null,{default:e(()=>[n(f(v))]),_:1})]),default:e(()=>[n(o,{link:"",type:"primary"},{default:e(()=>t[0]||(t[0]=[p("操作1")])),_:1}),n(o,{link:"",type:"primary"},{default:e(()=>t[1]||(t[1]=[p("操作2")])),_:1}),n(o,{link:"",type:"primary"},{default:e(()=>t[2]||(t[2]=[p("操作3")])),_:1}),n(o,{link:"",type:"primary"},{default:e(()=>t[3]||(t[3]=[p("操作4")])),_:1}),n(o,{link:"",type:"primary"},{default:e(()=>t[4]||(t[4]=[p("操作5")])),_:1})]),_:1})}}}),S=d({__name:"expand",setup(c){return(l,t)=>{const o=a("el-icon"),s=_;return r(),i(s,{"show-count":3,"show-type":"expand"},{more:e(({hasMore:m,show:y,hide:k})=>[n(o,{size:"20px",style:{cursor:"pointer","margin-left":"16px"}},{default:e(()=>[m?(r(),i(f(x),{key:0,onClick:y},null,8,["onClick"])):(r(),i(f(g),{key:1,onClick:k},null,8,["onClick"]))]),_:2},1024)]),default:e(()=>[t[0]||(t[0]=u("p",null,"第一行内容(First Line)",-1)),t[1]||(t[1]=u("p",null,"第二行内容(Second Line)",-1)),t[2]||(t[2]=u("p",null,"第三行内容(Third Line)",-1)),t[3]||(t[3]=u("p",null,"第四行内容(Fourth Line)",-1)),t[4]||(t[4]=u("p",null,"第五行内容",-1))]),_:1})}}}),E=`<template>
  <epp-overflow-list :show-count="3">
    <el-button link type="primary">操作1</el-button>
    <el-switch />
    <el-button v-if="true" link>操作3</el-button>
    <el-button v-if="false" link>操作4</el-button>
    <el-button link type="primary">操作5</el-button>
  </epp-overflow-list>
</template>
<script lang="ts" setup>
<\/script>
`,T=`<template>
  <epp-overflow-list :dropdown-props="{ trigger: 'click' }">
    <el-button link type="primary">操作1</el-button>
    <el-button link type="primary">操作2</el-button>
    <el-button link type="primary">操作3</el-button>
    <el-button link type="primary">操作4</el-button>
    <el-button link type="primary">操作5</el-button>
    <template #more>
      <el-icon>
        <Film />
      </el-icon>
    </template>
  </epp-overflow-list>
</template>
<script lang="ts" setup>
import { Film } from '@element-plus/icons-vue';
<\/script>
`,z=`<template>
  <epp-overflow-list :show-count="3" show-type="expand">
    <p>第一行内容(First Line)</p>
    <p>第二行内容(Second Line)</p>
    <p>第三行内容(Third Line)</p>
    <p>第四行内容(Fourth Line)</p>
    <p>第五行内容</p>
    <template #more="{ hasMore, show, hide }">
      <el-icon size="20px" style="cursor: pointer; margin-left: 16px">
        <Download v-if="hasMore" @click="show" />
        <Upload v-else @click="hide" />
      </el-icon>
    </template>
  </epp-overflow-list>
</template>
<script lang="ts" setup>
import { Download, Upload } from '@element-plus/icons-vue';
<\/script>
`;export{E as B,z as E,T as M,M as _,V as a,S as b};
