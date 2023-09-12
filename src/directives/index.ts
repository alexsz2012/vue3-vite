import type { App } from 'vue';

export function setupPermissionDirectives(app: App) { 
  app.directive("auth", {
    mounted(el, binding, vnode) { 

    }
  });
}