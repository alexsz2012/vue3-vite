
import { isDevMode } from '../env';
// System default cache time, in seconds
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

// Whether the system cache is encrypted using aes
export const enableStorageEncryption = !isDevMode();