import { resolve } from 'path';
import { UserConfig, ConfigEnv } from 'vite';
import proxy from './config/vite/proxy';
import { VITE_PORT, VITE_DROP_CONSOLE } from './config/constant';
import { generateModifyVars } from './config/themeConfig';
import { createVitePlugins } from './config/vite/plugin';
import { configManualChunk } from './config/vite/optimizer';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  return {
    plugins: createVitePlugins(isBuild),
    server: {
      hmr: { overlay: false },
      port: VITE_PORT,
      open: false,
      cors: false,
      proxy
    },
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/'
        },
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/'
        }
      ]
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true
        }
      }
    },
    build: {
      target: 'es2015',
      // minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: configManualChunk,
        },
      },
      // Turning off brotliSize display can slightly reduce packaging time
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
    },
  }
}