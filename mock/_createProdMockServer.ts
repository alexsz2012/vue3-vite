import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
const modules = import.meta.glob('./**/*.ts');
const mockModules: any[] = [];
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return;
  }
  mockModules.push(...modules[key].dafault);
});

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
