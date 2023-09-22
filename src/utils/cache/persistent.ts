import { Memory } from './memory';
import { DEFAULT_CACHE_TIME } from '../settings/encryptionSetting';
import { PROJ_CFG_KEY, APP_LOCAL_CACHE_KEY } from '/@/enums/cacheEnum';
import { createLocalStorage } from '/@/utils/cache';
import { ProjectConfig } from '/@/types/config';

interface BasicStore {
  [PROJ_CFG_KEY]: ProjectConfig;
}

type LocalStore = BasicStore;
type LocalKeys = keyof LocalStore;
const ls = createLocalStorage();
const localMemory = new Memory(DEFAULT_CACHE_TIME);
export class Persistent { 
  static getLocal<T>(key: LocalKeys) { 
    return localMemory.get(key)?.value as Nullable<T>; 
  }

  static setLocal(key: LocalKeys, value: LocalStore[LocalKeys], immediate = false): void {
    localMemory.set(key, toRaw(value));
    immediate && ls.set(APP_LOCAL_CACHE_KEY, localMemory.getCache);
  }

}