import{y as v,r as m,f,o as A,z as a,A as d,P as S,a4 as z,E as h,H as l,I as o,u,B as j,O as k,D as B,C as E,F as b}from"./framework.CPxOa8kE.js";import{w as C}from"./install.CDck28KX.js";import{E as _,a as M}from"./theme.CPYnN67Q.js";const F={data:{type:Array,default:()=>[]},indent:String,size:{type:[Number,String],default:"default"},fit:{type:String,default:"cover"},shape:{type:String,default:"circle"},urlField:{type:String,default:"url"},max:{type:Number,default:Number.MAX_SAFE_INTEGER},maxBgColor:{type:String,default:"black"},popoverProps:{type:Object,default:()=>({})}},x={click:i=>i instanceof Object},L=v({name:"EppAvatarList",__name:"avatar-list",props:F,emits:x,setup(i){const t=i,r=m(t.indent),s=m(),g=f(()=>{if(isNaN(+t.max)||t.data.length<t.max)return t.data;{const e={[t.urlField]:"LAST_NUMBER",maxNumber:t.data.length-t.max};return[...t.data.slice(0,t.max),e]}}),c=f(()=>{let e="";if(!isNaN(+t.max)&&t.data.length>t.max){const p=t.data.length-t.max;p<10?e="less-10":p<100?e="less-100":p<1e3?e="less-1k":p<1e4?e="less-10k":p<1e5&&(e="less-100k")}return e});return A(()=>{if(!r.value){const e=s.value.querySelector(".el-avatar");try{r.value=-e.offsetWidth/2+"px"}catch{r.value="0px"}}}),(e,p)=>(a(),d("div",{ref_key:"spaceRef",ref:s,class:"epp-avatar-list",style:h(`--indent: ${r.value}`)},[(a(!0),d(S,null,z(g.value,n=>(a(),l(u(M),b({key:n[e.urlField],trigger:"hover",disabled:!n[e.urlField]||n[e.urlField]==="LAST_NUMBER"||!e.$slots.tip,ref_for:!0},e.popoverProps),{reference:o(()=>[n[e.urlField]!=="LAST_NUMBER"?(a(),l(u(_),{key:0,src:n[e.urlField],size:e.size,fit:e.fit,shape:e.shape,onClick:N=>e.$emit("click",n)},null,8,["src","size","fit","shape","onClick"])):(a(),l(u(_),{key:1,size:e.size,fit:e.fit,style:h("background-color:"+e.maxBgColor),bordered:"",round:"",onClick:N=>e.$emit("click",n)},{default:o(()=>[j("span",{class:B(c.value)},k(n.maxNumber),3)]),_:2},1032,["size","fit","style","onClick"]))]),default:o(()=>[E(e.$slots,"tip",{item:n})]),_:2},1040,["disabled"]))),128))],4))}}),y=C(L),T=v({__name:"basic",setup(i){const t=m([{url:"https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg"},{url:"https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg",title:"Avatar 2"},{url:"https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg",title:"Avatar 3"},{url:"https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg",title:"Avatar 4"}]);return(r,s)=>{const g=y;return a(),l(g,{data:t.value,indent:"-10px"},null,8,["data"])}}}),D=`<template>
  <epp-avatar-list :data="list" indent="-10px" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const list = ref([
  {
    url: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg',
  },
  {
    url: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg',
    title: 'Avatar 2',
  },
  {
    url: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg',
    title: 'Avatar 3',
  },
  {
    url: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg',
    title: 'Avatar 4',
  },
]);
<\/script>
`,I=v({__name:"max",setup(i){const t=m([{img:"https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg",name:"Jack"},{img:"https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg",name:"Musk"},{img:"https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg",name:"Mary"},{img:"https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg",name:"Tom"},{img:"https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg",name:"Dog"},{img:"https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg",name:"Cat"},{img:"https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg",name:"Banana"},{img:"https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg",name:"Pear"}]);return(r,s)=>{const g=y;return a(),l(g,{data:t.value,max:5,"url-field":"img"},{tip:o(({item:c})=>[j("h5",null,"Name："+k(c.name),1)]),_:1},8,["data"])}}}),w=`<template>
  <epp-avatar-list :data="list" :max="5" url-field="img">
    <template #tip="{ item }">
      <h5>Name：{{ item.name }}</h5>
    </template>
  </epp-avatar-list>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const list = ref([
  {
    img: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg',
    name: 'Jack',
  },
  {
    img: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg',
    name: 'Musk',
  },
  {
    img: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg',
    name: 'Mary',
  },
  {
    img: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg',
    name: 'Tom',
  },
  {
    img: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg',
    name: 'Dog',
  },
  {
    img: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg',
    name: 'Cat',
  },
  {
    img: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg',
    name: 'Banana',
  },
  {
    img: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg',
    name: 'Pear',
  },
]);
<\/script>
`;export{D as B,w as M,T as _,I as a};
