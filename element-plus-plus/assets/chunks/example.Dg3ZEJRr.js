import{a as A,M as i}from"./index.CrQA5sbn.js";import{y,r as z,ag as v,z as h,A as _,Q as l,I as e,P as k,M as s,O as D,B as b,H as B,af as c,u as m,h as $,aA as M}from"./framework.CPxOa8kE.js";import"./index.DbdmvmR9.js";import"./index.CP2Q6oHD.js";import"./index.CUYJOHIY.js";import"./index.DkQxVQFo.js";import"./index.DRn0Mo3G.js";import"./index.DzqJ4u-h.js";import{b as I,f as r}from"./theme.CPYnN67Q.js";const q=y({__name:"basic",setup(w){const t=z(!1),d=()=>{t.value=!t.value},u=()=>{console.log("resizing...")};return(o,a)=>{const g=v("el-button"),f=A;return h(),_(k,null,[l(g,{onClick:d},{default:e(()=>[s(D(t.value?"Hide":"Show"),1)]),_:1}),l(f,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=p=>t.value=p),title:"非模态对话框示例",resize:"",onResize:u},{default:e(()=>a[1]||(a[1]=[b("p",null,"非模态对话框示例",-1)])),_:1},8,["modelValue"])],64)}}}),G=y({__name:"bounding",setup(w){const t=z(!1),d=()=>{t.value=!t.value};return(u,o)=>{const a=v("el-button"),g=A;return h(),_(k,null,[l(a,{onClick:d},{default:e(()=>[s(D(t.value?"Hide":"Show"),1)]),_:1}),o[2]||(o[2]=b("div",{class:"m-t-md"},"范围：左上角（0,0） / 右下角（1000,600）",-1)),o[3]||(o[3]=b("div",{class:"m-t-md"},"Range: Top-left (0, 0) / Bottom-right (1000, 600)",-1)),l(g,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=f=>t.value=f),width:"400px",title:"非模态对话框示例",boundings:[0,0,1e3,600]},{default:e(()=>o[1]||(o[1]=[b("p",null,"非模态对话框示例",-1)])),_:1},8,["modelValue"])],64)}}}),J=y({__name:"manager",setup(w){const t=()=>{i.get("my-modelesss-dialog").close()},d=()=>{i.show({id:"my-modelesss-dialog",title:"测试Manager",body:c(I,{description:"空内容"}),resize:!0,onResize:u=>{console.log("resize",u)},onOpen:()=>{console.log("open")},onOpened:()=>{console.log("opened")},onClose:()=>{console.log("close")},onClosed:()=>{console.log("closed")},onDestroy:()=>{console.log("destroy")},onCollapse:u=>{console.log("collapse",u)},onMaximize:u=>{console.log("maximize",u)}})};return(u,o)=>{const a=v("el-button"),g=v("el-space");return h(),B(g,{size:"large"},{default:e(()=>[l(a,{onClick:d},{default:e(()=>o[0]||(o[0]=[s("创建(Create)")])),_:1}),l(a,{onClick:t},{default:e(()=>o[1]||(o[1]=[s("手动关闭(Close Manually)")])),_:1})]),_:1})}}}),K=y({__name:"manager-api",setup(w){const t=z(""),d=z(!1),u=()=>{i.show({id:"my-modelesss-dialog2",title:"测试Manager，固定ID",body:c("input",{value:t.value,style:"border: 1px solid #efefef",onInput:S=>{t.value=S.target.value}}),footer:c("div",null,[c(r,{type:"primary",class:"m-r-md"},{default:()=>"确定"}),c(r,null,{default:()=>"取消"})])}),d.value=i.get("my-modelesss-dialog2").isShown()},o=()=>{i.get("my-modelesss-dialog2").toggleShow(),d.value=i.get("my-modelesss-dialog2").isShown()},a=()=>{i.get("my-modelesss-dialog2").toggleMaximize()},g=()=>{i.get("my-modelesss-dialog2").toggleCollapse()},f=()=>{i.get("my-modelesss-dialog2").close()},p=()=>{i.show({title:"测试Manager"})},C=()=>{i.collapseAll()},P=()=>{i.closeAll()},E=()=>{i.showAll()},H=()=>{i.hideAll()};return(S,n)=>{const V=v("el-tag"),x=v("el-space");return h(),_(k,null,[l(x,{size:"large"},{default:e(()=>[l(m(r),{onClick:u},{default:e(()=>n[0]||(n[0]=[s("创建(Create)")])),_:1}),l(V,null,{default:e(()=>[s("状态(Status)："+D(d.value?"显示(Show)":"隐藏(Hide)"),1)]),_:1})]),_:1}),n[10]||(n[10]=b("br",null,null,-1)),n[11]||(n[11]=b("br",null,null,-1)),l(x,{size:"large"},{default:e(()=>[l(m(r),{onClick:a},{default:e(()=>n[1]||(n[1]=[s("最大化(Max)")])),_:1}),l(m(r),{onClick:g},{default:e(()=>n[2]||(n[2]=[s("折叠(Collapse)")])),_:1}),l(m(r),{onClick:o},{default:e(()=>n[3]||(n[3]=[s("显示/隐藏(Show/Hide)")])),_:1}),l(m(r),{onClick:f},{default:e(()=>n[4]||(n[4]=[s("手工关闭(Close Manually)")])),_:1})]),_:1}),n[12]||(n[12]=b("hr",null,null,-1)),l(x,{size:"large",class:"m-t-lg"},{default:e(()=>[l(m(r),{onClick:p},{default:e(()=>n[5]||(n[5]=[s("创建多个对话框(Create Dialogs)")])),_:1})]),_:1}),n[13]||(n[13]=b("br",null,null,-1)),l(x,{size:"large",class:"m-t-lg"},{default:e(()=>[l(m(r),{onClick:C},{default:e(()=>n[6]||(n[6]=[s("折叠所有(Collapse All)")])),_:1}),l(m(r),{onClick:P},{default:e(()=>n[7]||(n[7]=[s("关闭所有(Close All)")])),_:1}),l(m(r),{onClick:H},{default:e(()=>n[8]||(n[8]=[s("隐藏所有(Hide All)")])),_:1}),l(m(r),{onClick:E},{default:e(()=>n[9]||(n[9]=[s("显示所有(Show All)")])),_:1})]),_:1})],64)}}}),W=y({__name:"reactive",setup(w){const t=z(""),d=$({id:"my-modelesss-dialog3",borderless:!0,bodyPadding:"var(--lg)",title:"测试Manager",body:c("input",{value:t.value,onInput:f=>{t.value=f.target.value}}),footer:c("div",null,[c(r,{type:"primary",class:"m-r-md"},{default:()=>"确定"}),c(r,null,{default:()=>"取消"})])}),u=()=>{i.show(d)},o=()=>{d.title="修改对话框标题"},a=()=>{d.footer=c("div",{innerHTML:"修改Footer Slot内容"})},g=()=>{d.borderless=!1,d.bodyPadding="8px"};return(f,p)=>{const C=v("el-space");return h(),_(k,null,[l(C,{size:"large"},{default:e(()=>[l(m(r),{onClick:u},{default:e(()=>p[0]||(p[0]=[s("创建(Create)")])),_:1}),l(m(r),{onClick:o},{default:e(()=>p[1]||(p[1]=[s("修改对话框属性(Modify properties)")])),_:1})]),_:1}),p[4]||(p[4]=b("br",null,null,-1)),p[5]||(p[5]=b("br",null,null,-1)),l(C,{size:"large"},{default:e(()=>[l(m(r),{onClick:a},{default:e(()=>p[2]||(p[2]=[s("修改Slot(Modify slot)")])),_:1}),l(m(r),{onClick:g},{default:e(()=>p[3]||(p[3]=[s("修改Panel属性(Modify panel properties)")])),_:1})]),_:1})],64)}}}),X=y({__name:"example",setup(w){const t=()=>{i.show({customClass:"example-modeless",title:"图片预览",width:"40vw",height:"30vh",body:c("div",{class:"image-example",innerHTML:`<img src="${M("/zen.jpg")}" />`}),resize:!0,onResize:o=>{console.log("resize",o)}})},d=()=>{i.show({customClass:"example-modeless2",title:"图片预览",width:"40vw",height:"30vh",body:c("div",{class:"image-example2",innerHTML:`
<img src="${M("/zen.jpg")}" />
<img src="${M("/zen.jpg")}" />
<img src="${M("/zen.jpg")}" />
<img src="${M("/zen.jpg")}" />
`}),resize:!0,onResize:o=>{console.log("resize",o)}})},u=()=>{i.show({customClass:"example-modeless3",title:"PDF预览",width:"40vw",height:"50vh",body:c("iframe",{class:"pdf-example",src:`${M("/example.pdf")}`}),resize:!0})};return(o,a)=>{const g=v("el-button"),f=v("el-space");return h(),B(f,{size:"large"},{default:e(()=>[l(g,{onClick:t},{default:e(()=>a[0]||(a[0]=[s("图片(Image)")])),_:1}),l(g,{onClick:d},{default:e(()=>a[1]||(a[1]=[s("多张图(2x2 Image)")])),_:1}),l(g,{onClick:u},{default:e(()=>a[2]||(a[2]=[s("PDF预览(Preview)")])),_:1})]),_:1})}}}),Y=`<template>
  <el-button @click="show">{{ visible ? 'Hide' : 'Show' }}</el-button>
  <epp-modeless-dialog v-model="visible" title="非模态对话框示例" resize @resize="resizeCB">
    <p>非模态对话框示例</p>
  </epp-modeless-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);

const show = () => {
  visible.value = !visible.value;
};
const resizeCB = () => {
  console.log('resizing...');
};
<\/script>
`,Z=`<template>
  <el-button @click="show">{{ visible ? 'Hide' : 'Show' }}</el-button>
  <div class="m-t-md">范围：左上角（0,0） / 右下角（1000,600）</div>
  <div class="m-t-md">Range: Top-left (0, 0) / Bottom-right (1000, 600)</div>
  <epp-modeless-dialog v-model="visible" width="400px" title="非模态对话框示例" :boundings="[0, 0, 1000, 600]">
    <p>非模态对话框示例</p>
  </epp-modeless-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);

const show = () => {
  visible.value = !visible.value;
};
<\/script>
`,ee=`<template>
  <el-space size="large">
    <el-button @click="create">创建(Create)</el-button>
    <el-button @click="close">手动关闭(Close Manually)</el-button>
  </el-space>
</template>
<script lang="ts" setup>
import { h } from 'vue';
import { ElEmpty } from 'element-plus';
import { ModelessDialogManager } from 'element-plus-plus';

const close = () => {
  ModelessDialogManager.get('my-modelesss-dialog').close();
};

const create = () => {
  ModelessDialogManager.show({
    id: 'my-modelesss-dialog',
    title: '测试Manager',
    body: h(ElEmpty, { description: '空内容' }),
    resize: true,
    onResize: (dlg: HTMLDivElement) => {
      console.log('resize', dlg);
    },
    onOpen: () => {
      console.log('open');
    },
    onOpened: () => {
      console.log('opened');
    },
    onClose: () => {
      console.log('close');
    },
    onClosed: () => {
      console.log('closed');
    },
    onDestroy: () => {
      console.log('destroy');
    },
    onCollapse: (value: boolean) => {
      console.log('collapse', value);
    },
    onMaximize: (value: boolean) => {
      console.log('maximize', value);
    },
  });
};
<\/script>
`,le=`<template>
  <el-space size="large">
    <el-button @click="create">创建(Create)</el-button>
    <el-tag>状态(Status)：{{ visible ? '显示(Show)' : '隐藏(Hide)' }}</el-tag>
  </el-space>
  <br /><br />
  <el-space size="large">
    <el-button @click="max">最大化(Max)</el-button>
    <el-button @click="collapse">折叠(Collapse)</el-button>
    <el-button @click="show">显示/隐藏(Show/Hide)</el-button>
    <el-button @click="close">手工关闭(Close Manually)</el-button>
  </el-space>
  <hr />
  <el-space size="large" class="m-t-lg">
    <el-button @click="create2">创建多个对话框(Create Dialogs)</el-button>
  </el-space>
  <br />
  <el-space size="large" class="m-t-lg">
    <el-button @click="collaseAll">折叠所有(Collapse All)</el-button>
    <el-button @click="closeAll">关闭所有(Close All)</el-button>
    <el-button @click="hideAll">隐藏所有(Hide All)</el-button>
    <el-button @click="showAll">显示所有(Show All)</el-button>
  </el-space>
</template>
<script lang="ts" setup>
import { ref, h } from 'vue';
import { ElButton } from 'element-plus';
import { ModelessDialogManager } from 'element-plus-plus';

const inputVal = ref('');
const visible = ref(false);

const create = () => {
  ModelessDialogManager.show({
    id: 'my-modelesss-dialog2',
    title: '测试Manager，固定ID',
    body: h('input', {
      value: inputVal.value,
      style: 'border: 1px solid #efefef',
      onInput: (e: InputEvent) => {
        inputVal.value = (e.target as HTMLInputElement).value;
      },
    }),
    footer: h('div', null, [
      h(ElButton, { type: 'primary', class: 'm-r-md' }, { default: () => '确定' }),
      h(ElButton, null, { default: () => '取消' }),
    ]),
  });
  visible.value = ModelessDialogManager.get('my-modelesss-dialog2').isShown();
};

const show = () => {
  ModelessDialogManager.get('my-modelesss-dialog2').toggleShow();
  visible.value = ModelessDialogManager.get('my-modelesss-dialog2').isShown();
};
const max = () => {
  ModelessDialogManager.get('my-modelesss-dialog2').toggleMaximize();
};
const collapse = () => {
  ModelessDialogManager.get('my-modelesss-dialog2').toggleCollapse();
};
const close = () => {
  ModelessDialogManager.get('my-modelesss-dialog2').close();
};

const create2 = () => {
  ModelessDialogManager.show({
    title: '测试Manager',
  });
};

const collaseAll = () => {
  ModelessDialogManager.collapseAll();
};
const closeAll = () => {
  ModelessDialogManager.closeAll();
};
const showAll = () => {
  ModelessDialogManager.showAll();
};
const hideAll = () => {
  ModelessDialogManager.hideAll();
};
<\/script>
`,ne=`<template>
  <el-space size="large">
    <el-button @click="create">创建(Create)</el-button>
    <el-button @click="modifyProp">修改对话框属性(Modify properties)</el-button>
  </el-space>
  <br /><br />
  <el-space size="large">
    <el-button @click="modifySlot">修改Slot(Modify slot)</el-button>
    <el-button @click="modifyPanel">修改Panel属性(Modify panel properties)</el-button>
  </el-space>
</template>
<script lang="ts" setup>
import { ref, reactive, h } from 'vue';
import { ElButton } from 'element-plus';
import { ModelessDialogManager } from 'element-plus-plus';

const inputVal = ref('');
const dialogProps = reactive({
  id: 'my-modelesss-dialog3',
  borderless: true,
  bodyPadding: 'var(--lg)',
  title: '测试Manager',
  body: h('input', {
    value: inputVal.value,
    onInput: (e: InputEvent) => {
      inputVal.value = (e.target as HTMLInputElement).value;
    },
  }),
  footer: h('div', null, [
    h(ElButton, { type: 'primary', class: 'm-r-md' }, { default: () => '确定' }),
    h(ElButton, null, { default: () => '取消' }),
  ]),
});

const create = () => {
  ModelessDialogManager.show(dialogProps);
};
const modifyProp = () => {
  dialogProps.title = '修改对话框标题';
};
const modifySlot = () => {
  dialogProps.footer = h('div', { innerHTML: '修改Footer Slot内容' });
};
const modifyPanel = () => {
  dialogProps.borderless = false;
  dialogProps.bodyPadding = '8px';
};
<\/script>
`,oe=`<template>
  <el-space size="large">
    <el-button @click="create1">图片(Image)</el-button>
    <el-button @click="create2">多张图(2x2 Image)</el-button>
    <el-button @click="create3">PDF预览(Preview)</el-button>
  </el-space>
</template>
<script lang="ts" setup>
import { h } from 'vue';
import { withBase } from 'vitepress';
import { ModelessDialogManager } from 'element-plus-plus';

const create1 = () => {
  ModelessDialogManager.show({
    customClass: 'example-modeless',
    title: '图片预览',
    width: '40vw',
    height: '30vh',
    body: h('div', { class: 'image-example', innerHTML: \`<img src="\${withBase('/zen.jpg')}" />\` }),
    resize: true,
    onResize: (dlg: HTMLDivElement) => {
      console.log('resize', dlg);
    },
  });
};

const create2 = () => {
  ModelessDialogManager.show({
    customClass: 'example-modeless2',
    title: '图片预览',
    width: '40vw',
    height: '30vh',
    body: h('div', {
      class: 'image-example2',
      innerHTML: \`
<img src="\${withBase('/zen.jpg')}" />
<img src="\${withBase('/zen.jpg')}" />
<img src="\${withBase('/zen.jpg')}" />
<img src="\${withBase('/zen.jpg')}" />
\`,
    }),
    resize: true,
    onResize: (dlg: HTMLDivElement) => {
      console.log('resize', dlg);
    },
  });
};

const create3 = () => {
  ModelessDialogManager.show({
    customClass: 'example-modeless3',
    title: 'PDF预览',
    width: '40vw',
    height: '50vh',
    body: h('iframe', { class: 'pdf-example', src: \`\${withBase('/example.pdf')}\` }),
    resize: true,
  });
};
<\/script>
<style lang="scss">
.example-modeless,
.example-modeless2 {
  .panel-body {
    height: calc(100% - var(--panel-header-height));
  }
}
.example-modeless3 {
  .panel-body {
    padding: 0;
    height: calc(100% - var(--panel-header-height));
  }
}
.image-example {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.image-example2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  img {
    width: calc(50% - 20px / 2);
    height: calc(50% - 20px / 2);
    object-fit: cover;
  }
}
.pdf-example {
  width: 100%;
  height: 100%;
}
</style>
`;export{Y as B,oe as E,ee as M,ne as R,q as _,Z as a,G as b,J as c,le as d,K as e,W as f,X as g};
