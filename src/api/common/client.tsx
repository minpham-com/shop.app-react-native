import env from '@config/index';
import Medusa from '@medusajs/medusa-js';

export const client = new Medusa({
  maxRetries: 0,
  baseUrl: env.API_URL,
  publishableApiKey: env.API_KEY,
});
