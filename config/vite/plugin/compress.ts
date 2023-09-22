import type { Plugin } from 'vite';
import compressPlugin from 'vite-plugin-compression';
import { COMPRESSION } from '../../constant';

export function configCompressPlugin(): Plugin {
  if (COMPRESSION) {
    return compressPlugin({
      ext: '.gz',
      deleteOriginFile: false,
    }) as Plugin;
  }
  return null;
}