// we only use this file to add typescript support to the config file
// unfortunately, we cant import  typescript config inside expo config file
import Constants from 'expo-constants';

import { getEnv } from './config';

export type ConfigType = {
  scheme: string;
  icon: string;
  foregroundImage: string;
  APP_ENV: EnvType;
  API_URL: string;
  API_KEY: string;
  version: string;
  name: string;
  slug: string;
  runtimeVersion: string;
};

export type Env = {
  development: ConfigType;
  staging: ConfigType;
  production: ConfigType;
};

export type EnvType = 'development' | 'staging' | 'production';

const Config = getEnv(Constants.expoConfig?.extra?.APP_ENV ?? 'development');

const env = Config as ConfigType;
export default env;
