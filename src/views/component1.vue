<template>
  component1
  <div><input v-model="count"></div>
  <div><span>{{ calCount }}</span></div>
  <div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onBeforeMount, onBeforeUpdate, onMounted, onRenderTracked, onRenderTriggered, onUpdated, ref } from 'vue';

const count = ref(0);
onBeforeUpdate(() => { 
  console.log('onBeforeUpdate');
})
onUpdated(() => { 
  console.log("onUpdated");
})
onBeforeMount(() => {
  console.log("onBeforeMount");
});
onMounted(() => { 
  console.log("onMounted");
})
// watch(() => { })

onRenderTracked((event) => { 
  console.log('onRenderTracked emit');
  console.log(event);
})

onRenderTriggered((event) => {
  console.log('onRenderTriggered');
  console.log(event);
})

// 响应式
const calCount = computed(() => {
  return Number(count.value) + 1;
})

let obj = { name: '张三', age: 20 };
Object.defineProperties(obj, {
  get: (val)=> { }
})

</script>