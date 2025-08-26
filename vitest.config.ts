import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // We'll defer to `@oclif/test` for console interception
    // so we can run assertions against console output.
    disableConsoleIntercept: true,
  },
});
