<template>
  <ALayout class="basicLayout-wrap">
    <Header/>
    <ALayout>
      <SideMenu v-bind="layoutConf" />
      <ALayout class="basicLayout-content">
        <a-layout-content>
          <a-divider v-if="routeMeta.breadcrumb" class="line"/>
          <a-card>
            <router-view v-slot="{Component, route}">
              <transition name="fade-slide" mode="out-in" appear>
                <div :key="route.name">
                  <component :is="Component"/>
                </div>
              </transition>
            </router-view>
          </a-card>
        </a-layout-content>
      </ALayout>
    </ALayout>
  </ALayout>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { clearMenuItem, filterRoutes } from './utils';
import { reactive, computed} from 'vue';
import SideMenu from './components/SideMenu.tsx';
import Header from './components/Header.vue';

const router = useRouter();
const origRoutes = router.getRoutes();
const menuData = filterRoutes(
    clearMenuItem(origRoutes).filter((n) => n.path.startsWith('/app/')),
);
const layoutConf = reactive({
    theme: 'light',
    menuWidth: 208,
    menuData,
});
const routeMeta = computed(() => router.currentRoute.value.meta);
</script>
<style lang="less" scoped>
  .basicLayout-wrap{
    height: 100vh;
    overflow: hidden;
    .basicLayout-content {
      height: calc(100vh - 80px);
      overflow-y: auto;
      margin: 0;
      padding: 24px;
      background: '#F0F1F4';
    }
  }
</style>