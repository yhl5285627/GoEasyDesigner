<template>
  <div class="属性表格">

  <el-form
      label-position="left"
      label-width="100px"
      style="max-width: 460px"
  >
    <component is="公用属性" :item="item"/>
    <el-form-item label="内容">
      <el-input v-model="item.内容"/>
    </el-form-item>
    <el-form-item label="尺寸">
      <el-select v-model="props.item.尺寸" style="width: 100%">
        <el-option
            v-for="(item, index) in 尺寸选项"
            :key="item"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="最大长度">
      <el-input v-model="item.最大长度"/>
    </el-form-item>
    <el-form-item label="提示文本">
      <el-input v-model="item.提示文本"/>
    </el-form-item>

    <el-form-item label="输入框类型">
      <el-select v-model="props.item.输入框类型" style="width: 100%">
        <el-option
            v-for="(item, index) in 输入框类型选项"
            :key="item"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </el-form-item>

  </el-form>
  </div>
  <component is="公用事件组件" :item="props.item"  :事件名称="事件名称"/>


</template>
<script setup>
import {ref, defineProps, defineEmits} from "vue";

const emits = defineEmits(["添加事件被选择"]); // 声明接受的事件
const props = defineProps(['item']);
let 尺寸选项 = ref([
  {"label": "自定义", "value": "custom"},
  {"label": "大号", "value": "large"},
  {"label": "小号", "value": "small"},
]);
let 输入框类型选项 = ref([
  {"label": "单行文本框", "value": "text"},
  {"label": "多行文本框", "value": "textarea"},
  {"label": "密码输入框", "value": "password"},
  {"label": "数字输入框", "value": "number"},
]);


let 事件名称 = ref([
  {"label": "在此处选择加入事件处理函数", "value": "在此处选择加入事件处理函数"},
  {"label": "被单击", "value": "被单击"},
  {"label": "鼠标左键被按下", "value": "鼠标左键被按下"},
  {"label": "鼠标左键被放开", "value": "鼠标左键被放开"},
  {"label": "被双击", "value": "被双击"},
  {"label": "鼠标右键被按下", "value": "鼠标右键被按下"},
  {"label": "鼠标右键被放开", "value": "鼠标右键被放开"},
  {"label": "鼠标位置被移动", "value": "鼠标位置被移动"},
  {"label": "获得焦点", "value": "获得焦点"},
  {"label": "失去焦点", "value": "失去焦点"},
  {"label": "按下某键", "value": "按下某键"},
  {"label": "放开某键", "value": "放开某键"},
  {"label": "滚轮被滚动", "value": "滚轮被滚动"}
])
</script>

