import { viteMockServe } from 'vite-plugin-mock';
export function configMockPlugin(isBuild: boolean) {
  return viteMockServe({
    ignore: /^\_/,
    mockPath: 'mock',
    localEnabled: !isBuild,
    prodEnabled: isBuild, // 为了演示，线上开启 mock，实际开发请关闭，会影响打包体积
    injectCode: `
       import { setupProdMockServer } from '../mock/_createProdMockServer';
       setupProdMockServer();
       `,
  });
}