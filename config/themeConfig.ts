// import { getThemeVariables } from 'ant-design-vue/dist/theme';
export function generateModifyVars(dark = false) {
  // const modifyVars = getThemeVariables({ dark });
  return {
    // ...modifyVars,
    // Used for global import to avoid the need to import each style file separately
    // reference:  Avoid repeated references
    // hack: `${modifyVars.hack} @import (reference) "${resolve('src/design/config.less')}";`,
    'primary-color': '#3860F4',
    'link-color': '#3860F4',
    dark
  };
}
