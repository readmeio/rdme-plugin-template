import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/index.ts', 'src/commands/**/*.ts', 'bin/*.js'],
  // used in `bin/dev.js`
  ignoreDependencies: ['tsx'],
};

export default config;
