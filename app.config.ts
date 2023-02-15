import type { ConfigContext, ExpoConfig } from '@expo/config';

import { getEnv } from './config/config';
import type { ConfigType } from './config/index';

//@ts-ignore
const appEnv = process.env.APP_ENV ?? 'development';

const env = getEnv(appEnv) as ConfigType;

export default ({ config }: ConfigContext): ExpoConfig => ({
  name: env.name,
  description: `${env.name} Min Store`,
  slug: env.slug || 'min-store',
  version: env.version.toString(),
  orientation: 'portrait',
  icon: env.icon,
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#F75469',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: env.scheme,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: env.foregroundImage,
      backgroundColor: '#FFFFFF',
    },
    package: env.scheme,
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [['@bacons/link-assets', ['./assets/fonts/Inter.ttf']]],
  extra: {
    ...env,
  },
  ...config,
});
