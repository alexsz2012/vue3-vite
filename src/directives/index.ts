import type { App } from 'vue';
import { setupPermissionDirective } from './permission';
import { setupRoleDirective } from './role';

export function setupGloabDirectives(app: App) { 
  setupPermissionDirective(app);
  setupRoleDirective(app);
}