import esbuild from 'esbuild';

/**
 * @type { import('esbuild').BuildOptions }
 */
const buildOptions = {
  entryPoints: [ './lib/**/*.ts', './lib/**/*.d.ts'],
  tsconfig: './tsconfig.json',
  bundle: false,
  target: 'es6',
  outdir: './dist',
  sourcemap: true,
};

await esbuild.build(buildOptions);
