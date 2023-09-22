import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { configMockPlugin } from './mock';
import { autoRegistryComponents } from './component';
import { AutoImportDeps } from './autoImport';
import { configStyleImportPlugin } from './styleImport';
import WindiCSS from 'vite-plugin-windicss';
import { configSvgIconsPlugin } from './svgIcons';
import { configVisualizerConfig } from './visualizer';
import { configCompressPlugin } from './compress';

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[]) = [
    vue(),
    vueJsx(),
    // 自动按需加载
    autoRegistryComponents(),
    // 自动按需引入依赖
    AutoImportDeps()
  ];
  // rollup-plugin-zip
  isBuild && vitePlugins.push(configCompressPlugin());
  // vite-plugin-mock
  vitePlugins.push(configMockPlugin(isBuild));
  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));
  // rollup-plugin-visualizer
  // vitePlugins.push(configVisualizerConfig());
  //  vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin(isBuild));
  vitePlugins.push(WindiCSS() as unknown as Plugin);
  return vitePlugins;
}
