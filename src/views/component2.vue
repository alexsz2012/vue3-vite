<template>
  component2
  <div>
    <button @click="handleBtn">array some 测试</button>
  </div>
</template>
<script setup>
const datas = ['users'];
const hasElement = value => {
  debugger;
  return datas.some(p => p.indexOf(value) != -1 )
}
let handleBtn = (event) => { 
  debugger;
  const result = hasElement('users');
  console.log("handleBtn", result);
}
// console.log("hasElement", hasElement('ss'));
</script>