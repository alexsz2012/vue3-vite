// import { enableStorageEncryption } from '../settings/encryptionSetting';
import { CreateStorageParams } from './storageCache';
// import { DEFAULT_CACHE_TIME } from '../settings/encryptionSetting';
export type Options = Partial<CreateStorageParams>;

// const createOptions = (storage: Storage, options: Options = {}): Options => {
//   return {
//     hasEncrypt: enableStorageEncryption,
//     storage,
//     prefixKey: 'vue3_vite_admin_',
//     ...options
//   };
// };

// export const createStorage = (storage: Storage = sessionStorage, options: Options = {}) => {
//   return create(createOptions(storage, options));
//   return null;
// };

// export const createLocalStorage = (options: Options = {}) => {
//   return createStorage(localStorage, { ...options, timeout: DEFAULT_CACHE_TIME });
// };