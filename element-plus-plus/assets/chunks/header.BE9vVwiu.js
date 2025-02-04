import{E as C,M as p}from"./index.CrQA5sbn.js";import"./index.DbdmvmR9.js";import"./index.CP2Q6oHD.js";import"./index.CUYJOHIY.js";import"./index.DkQxVQFo.js";import"./index.DRn0Mo3G.js";import"./index.DzqJ4u-h.js";import{b as _,e as D,h as V,c as T}from"./theme.CPYnN67Q.js";import{y,r as v,ag as m,z as M,A as x,Q as n,I as o,B as w,P as H,M as t,af as l}from"./framework.CPxOa8kE.js";const F=y({__name:"basic",setup(z){const a=v(!1),u=v("bottom"),k=()=>{a.value=!a.value},r=()=>{p.show({title:"无Snapshot",useDock:!0})},i=()=>{p.show({title:"自动截屏",snapshot:!0,useDock:!0,body:l(_,{description:"自定截屏测试"})})},d=()=>{p.show({title:"文本",useDock:!0,snapshot:"“历史将继续被书写，加油，法国队！”帮助法国队拿到欧国联冠军之后，姆巴佩在自己的社交平台上晒出了亲吻冠军奖杯的照片。今年夏天那个失意的姆巴佩，终于在国家队重获幸福。",body:l("span",["文字测试"])})},b=()=>{p.show({title:"图片类型",useDock:!0,snapshot:{type:"image",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},body:l("span",["图片类型测试"])})},g=()=>{p.show({title:"视频类型",useDock:!0,snapshot:{type:"video",url:"https://vjs.zencdn.net/v/oceans.mp4"},body:l("span",["视频类型测试"])})},h=()=>{p.show({title:"音频类型",useDock:!0,snapshot:{type:"audio",url:"https://www.w3school.com.cn/i/horse.ogg"},body:l("span",["音频类型测试"])})};return(j,e)=>{const s=m("el-button"),f=m("el-space"),E=C;return M(),x(H,null,[n(f,{size:"large"},{default:o(()=>[n(s,{onClick:r},{default:o(()=>e[5]||(e[5]=[t("无snapshot(no snapshot)")])),_:1}),n(s,{onClick:i},{default:o(()=>e[6]||(e[6]=[t("自动截屏(auto capture)")])),_:1})]),_:1}),e[16]||(e[16]=w("br",null,null,-1)),e[17]||(e[17]=w("br",null,null,-1)),n(f,{size:"large"},{default:o(()=>[n(s,{onClick:d},{default:o(()=>e[7]||(e[7]=[t("文本(Text)")])),_:1}),n(s,{onClick:b},{default:o(()=>e[8]||(e[8]=[t("图片(Image)")])),_:1}),n(s,{onClick:g},{default:o(()=>e[9]||(e[9]=[t("视频(Video)")])),_:1}),n(s,{onClick:h},{default:o(()=>e[10]||(e[10]=[t("音频(Audio)")])),_:1})]),_:1}),e[18]||(e[18]=w("hr",null,null,-1)),n(f,{size:"large",class:"m-t-lg"},{default:o(()=>[n(s,{onClick:k},{default:o(()=>e[11]||(e[11]=[t("显示/隐藏Dock(Show/Hide Dock)")])),_:1}),n(s,{onClick:e[0]||(e[0]=c=>u.value="bottom")},{default:o(()=>e[12]||(e[12]=[t("底部(Bottom)")])),_:1}),n(s,{onClick:e[1]||(e[1]=c=>u.value="right")},{default:o(()=>e[13]||(e[13]=[t("右侧(Right)")])),_:1}),n(s,{onClick:e[2]||(e[2]=c=>u.value="top")},{default:o(()=>e[14]||(e[14]=[t("顶部(Top)")])),_:1}),n(s,{onClick:e[3]||(e[3]=c=>u.value="left")},{default:o(()=>e[15]||(e[15]=[t("左侧(Left)")])),_:1})]),_:1}),n(E,{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=c=>a.value=c),placement:u.value},null,8,["modelValue","placement"])],64)}}}),P=`<template>
  <el-space size="large">
    <el-button @click="show1">无snapshot(no snapshot)</el-button>
    <el-button @click="show2">自动截屏(auto capture)</el-button>
  </el-space>
  <br /><br />
  <el-space size="large">
    <el-button @click="show3">文本(Text)</el-button>
    <el-button @click="show4">图片(Image)</el-button>
    <el-button @click="show5">视频(Video)</el-button>
    <el-button @click="show6">音频(Audio)</el-button>
  </el-space>
  <hr />
  <el-space size="large" class="m-t-lg">
    <el-button @click="showDock">显示/隐藏Dock(Show/Hide Dock)</el-button>
    <el-button @click="placement = 'bottom'">底部(Bottom)</el-button>
    <el-button @click="placement = 'right'">右侧(Right)</el-button>
    <el-button @click="placement = 'top'">顶部(Top)</el-button>
    <el-button @click="placement = 'left'">左侧(Left)</el-button>
  </el-space>
  <epp-dock-container v-model="visible" :placement="placement" />
</template>
<script setup lang="ts">
import { ref, h } from 'vue';
import { ElEmpty } from 'element-plus';
import { ModelessDialogManager } from 'element-plus-plus';

const visible = ref(false);
const placement = ref('bottom');

const showDock = () => {
  visible.value = !visible.value;
};

const show1 = () => {
  ModelessDialogManager.show({
    title: '无Snapshot',
    useDock: true,
  });
};
const show2 = () => {
  ModelessDialogManager.show({
    title: '自动截屏',
    snapshot: true,
    useDock: true,
    body: h(ElEmpty, { description: '自定截屏测试' }),
  });
};
const show3 = () => {
  ModelessDialogManager.show({
    title: '文本',
    useDock: true,
    snapshot:
      '“历史将继续被书写，加油，法国队！”帮助法国队拿到欧国联冠军之后，姆巴佩在自己的社交平台上晒出了亲吻冠军奖杯的照片。今年夏天那个失意的姆巴佩，终于在国家队重获幸福。',
    body: h('span', ['文字测试']),
  });
};
const show4 = () => {
  ModelessDialogManager.show({
    title: '图片类型',
    useDock: true,
    snapshot: { type: 'image', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
    body: h('span', ['图片类型测试']),
  });
};
const show5 = () => {
  ModelessDialogManager.show({
    title: '视频类型',
    useDock: true,
    snapshot: { type: 'video', url: 'https://vjs.zencdn.net/v/oceans.mp4' },
    body: h('span', ['视频类型测试']),
  });
};
const show6 = () => {
  ModelessDialogManager.show({
    title: '音频类型',
    useDock: true,
    snapshot: { type: 'audio', url: 'https://www.w3school.com.cn/i/horse.ogg' },
    body: h('span', ['音频类型测试']),
  });
};
<\/script>
`,Q=y({__name:"header",setup(z){const a=v(!1),u=()=>{a.value=!a.value},k=()=>{const r=p.show({useDock:!0,header:l("div",{style:"display: flex; column-gap: 8px; justify-content: space-between; align-items: center;"},[l("h6",{innerHTML:"Custom"}),l("h5",{innerHTML:"Header"}),l(D,{size:"20px",title:"点我折叠(Click to fold)",style:"cursor: pointer",onClick:()=>r.toggleCollapse()},[l(V)]),l(D,{size:"20px",title:"点我关闭(Click to close)",style:"cursor: pointer",onClick:()=>r.close()},[l(T)])])})};return(r,i)=>{const d=m("el-button"),b=m("el-space"),g=C;return M(),x(H,null,[n(b,{gap:"var(--md)"},{default:o(()=>[n(d,{onClick:k},{default:o(()=>i[1]||(i[1]=[t("Custom header")])),_:1}),n(d,{onClick:u},{default:o(()=>i[2]||(i[2]=[t("Show/Hide Dock")])),_:1})]),_:1}),n(g,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=h=>a.value=h)},null,8,["modelValue"])],64)}}}),q=`<template>
  <el-space gap="var(--md)">
    <el-button @click="show1">Custom header</el-button>
    <el-button @click="showDock">Show/Hide Dock</el-button>
  </el-space>
  <epp-dock-container v-model="visible" />
</template>

<script setup lang="ts">
import { ref, h } from 'vue';
import { ElIcon } from 'element-plus';
import { Hide, Close } from '@element-plus/icons-vue';
import { ModelessDialogManager } from 'element-plus-plus';

const visible = ref(false);

const showDock = () => {
  visible.value = !visible.value;
};

const show1 = () => {
  const dialog = ModelessDialogManager.show({
    useDock: true,
    header: h(
      'div',
      { style: 'display: flex; column-gap: 8px; justify-content: space-between; align-items: center;' },
      [
        h('h6', { innerHTML: 'Custom' }),
        h('h5', { innerHTML: 'Header' }),
        h(
          ElIcon,
          {
            size: '20px',
            title: '点我折叠(Click to fold)',
            style: 'cursor: pointer',
            onClick: () => dialog.toggleCollapse(),
          },
          [h(Hide)],
        ),
        h(
          ElIcon,
          {
            size: '20px',
            title: '点我关闭(Click to close)',
            style: 'cursor: pointer',
            onClick: () => dialog.close(),
          },
          [h(Close)],
        ),
      ],
    ),
  });
};
<\/script>
`;export{P as B,q as H,F as _,Q as a};
