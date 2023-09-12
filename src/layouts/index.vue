<template>
  <Layout style="min-height: 100vh">
    <LayoutSider>
      <SideMenu v-bind="layoutConf" />
    </LayoutSider>
    <Layout>
      <LayoutHeader ></LayoutHeader>
      <LayoutContent>
        <router-view v-slot="{Component, route}">
          <transition name="fade-slide" mode="out-in" appear>
            <div :key="route.name">
              <component :is="Component"/>
            </div>
          </transition>
        </router-view>
      </LayoutContent>
      <LayoutFooter>
        alexander Create!
      </LayoutFooter>
    </Layout>
  </Layout>
</template>
<script lang="ts" setup>
import { Layout, LayoutSider, LayoutHeader, LayoutContent, LayoutFooter } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { clearMenuItem, filterRoutes } from './utils';
import { reactive} from 'vue';
import SideMenu from './components/SideMenu.tsx';

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

</script>