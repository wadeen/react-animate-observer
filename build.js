const esbuild = require('esbuild');

// Build your application
esbuild
  .build({
    entryPoints: ['src/entrypoint.ts'],
    bundle: true,
    outDir: 'dist',
    minify: true,
    sourcemap: true,
    target: 'es6',
    platform: 'node',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    external: ['react', 'react-dom'], // Exclude react and react-dom from the bundle
    loader: {
      '.ts': 'ts',
      '.tsx': 'tsx',
    },
  })
  .catch(() => process.exit(1));
