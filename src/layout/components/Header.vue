<template>
  <a-layout-header class="header">
    <div class="logo-wrap">
      <router-link :to="{path: '/app'}">
        <img :src="logo" class="logo"/>
        <h1 class="title">{{ APP_TITLE }}</h1>
      </router-link>
    </div>
    <div>
      <SystemSetting />
    </div>
  </a-layout-header>
</template>
<script setup lang="ts">
import SystemSetting from './SystemSetting.vue';
import logo from '/@/assets/images/logo.png';
import { APP_TITLE } from '../../../config/constant';

</script>
<style lang="less" scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    height: 80px;
    padding: 0 16px;
    background: #ffffff;
    box-shadow: 0 1px 4px #00152914;
    z-index: 1;
    .logo-wrap {
      height: 100%;
      a {
        display: flex;
        align-items: center;
        height: 100%;
      }
      .title {
        margin: 0;
        margin-left: 12px;
        font-size: 18px;
        color: #000000;
      }
      .logo {
        width: 48px;
        height: 48px;
      }
    }
  }
</style>