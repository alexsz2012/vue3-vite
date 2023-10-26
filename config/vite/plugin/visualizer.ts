/**
 * Package file volume analysis
 */
import type { Plugin } from 'vite';
import {visualizer} from 'rollup-plugin-visualizer';
import { ANALYSIS } from '../../constant';

export function configVisualizerConfig() {
  if (ANALYSIS) {
    return visualizer({
      // filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      filename: "stats.html",
      gzipSize: true,
      brotliSize: true,
      // emitFile: true,
    }) as unknown as Plugin;
  }
  return null;
}