import type { ProjectConfig, MenuSetting } from '/@/types/config';
import { defineStore } from 'pinia';
import { ThemeEnum } from '/@/enums/appEnum';
interface AppState { 
  darkMode?: ThemeEnum;
  projectConfig: ProjectConfig | null;
}

export const useAppStore = defineStore({
  id: '',
  state: (): AppState => ({
    darkMode: undefined,
    projectConfig: {
      menuSetting: {
        collapsed: false
      }
    }
  }),
  getters: {
    getDarkMode(): 'light' | 'dark' | string { 
      return 'light';
    },
    getProjectConfig(): ProjectConfig {
      return this.projectConfig || ({} as ProjectConfig);
    },
    getMenuSetting(): MenuSetting {
      return this.getProjectConfig.menuSetting;
    },
  },
  actions: {
  }
})