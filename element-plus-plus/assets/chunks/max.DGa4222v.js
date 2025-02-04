import{E as t}from"./index.Drj9bgUe.js";import{y as a,r as p,z as g,H as r,I as l,B as s,O as _}from"./framework.CPxOa8kE.js";const h=a({__name:"basic",setup(i){const n=p([{url:"https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg"},{url:"https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg",title:"Avatar 2"},{url:"https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg",title:"Avatar 3"},{url:"https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg",title:"Avatar 4"}]);return(m,o)=>{const e=t;return g(),r(e,{data:n.value,indent:"-10px"},null,8,["data"])}}}),f=`<template>
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
`,j=a({__name:"max",setup(i){const n=p([{img:"https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg",name:"Jack"},{img:"https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg",name:"Musk"},{img:"https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg",name:"Mary"},{img:"https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg",name:"Tom"},{img:"https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg",name:"Dog"},{img:"https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg",name:"Cat"},{img:"https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg",name:"Banana"},{img:"https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg",name:"Pear"}]);return(m,o)=>{const e=t;return g(),r(e,{data:n.value,max:5,"url-field":"img"},{tip:l(({item:c})=>[s("h5",null,"Name："+_(c.name),1)]),_:1},8,["data"])}}}),d=`<template>
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
`;export{f as B,d as M,h as _,j as a};
