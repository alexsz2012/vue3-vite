import { useAppStore } from '/@/store/modules/app';

export function useRootSetting() { 
  const appStore = useAppStore();
  const getDarkMode = computed(() => appStore.getDarkMode);
  return {
    getDarkMode
  }
}