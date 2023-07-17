const { createEnv } = require('@t3-oss/env-core');
const { z } = require('zod');

const env = createEnv({
  server: {
    ANALYZE: z
      .enum(['true', 'false'])
      .optional()
      .transform((value) => value === 'true'),
    SENTRY_DNS: z.string().optional(),
    BACKEND_API: z.string().optional(),
    EAS_PROJECT_ID: z.string().optional(),
    NEXT_PUBLIC_API_URL: z.string().optional(),
    CHROMATIC_PROJECT_TOKEN: z.string().optional(),
    NODE_ENV: z.enum(['development', 'test', 'production']).optional(),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    NODE_ENV: process.env.NODE_ENV,
    SENTRY_DNS: process.env.SENTRY_DNS,
    BACKEND_API: process.env.BACKEND_API,
    EAS_PROJECT_ID: process.env.EAS_PROJECT_ID,
    CHROMATIC_PROJECT_TOKEN: process.env.CHROMATIC_PROJECT_TOKEN,
  },
});

export default env;
