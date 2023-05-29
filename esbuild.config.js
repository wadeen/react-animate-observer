import * as esbuild from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

const build = async () => {
  await esbuild.build({
    entryPoints: ['src/entrypoint.ts'],
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: 'node',
    target: 'node16',
    plugins: [nodeExternalsPlugin()],
    format: 'esm',
    outfile: 'dist/entrypoint.js',
  });
};

build().catch(() => process.exit(1));
