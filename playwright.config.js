import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: 'tests',
  timeout: 30000,
  use: {
    headless: true,
    actionTimeout: 0,
    trace: 'on',
  },
  // Run your local dev server before starting the tests
  // webServer: {
  //   command: 'npm run start && npx wait-on http://127.0.0.1:8000',
  //   port: 8000,
  //   reuseExistingServer: !process.env.CI,
  //   stdout: 'ignore',
  //   stderr: 'pipe',
  //   timeout: 120000,
  // },
});