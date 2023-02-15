require('dotenv/config');
const packageJSON = require('../package.json');
// default values
const SCHEME = process.env.APP_PACKAGE_BUNDLE ?? 'com.min';
const APP_NAME = process.env.APP_NAME ?? 'MinStore';
const API_URL = process.env.API_URL ?? 'https://dummyjson.com/';
const API_KEY = process.env.API_KEY ?? 'API_KEY';
const APP_SLUG = process.env.APP_SLUG ?? 'com-example';

const common = {
  name: APP_NAME,
  API_URL: API_URL,
  API_KEY: API_KEY,
  version: packageJSON.version,
  runtimeVersion: packageJSON.version,
  slug: APP_SLUG,
};

const development = {
  APP_ENV: 'development',
  scheme: `${SCHEME}.development`,
  icon: './assets/icon.development.png',
  foregroundImage: './assets/icon.development.png',
};

const staging = {
  APP_ENV: 'staging',
  scheme: `${SCHEME}.staging`,
  icon: './assets/icon.staging.png',
  foregroundImage: './assets/icon.staging.png',
};

const production = {
  APP_ENV: 'production',
  scheme: `${SCHEME}`,
  icon: './assets/icon.png',
  foregroundImage: './assets/icon.png',
};

const configs = {
  development: { ...development, ...common },
  staging: { ...staging, ...common },
  production: { ...production, ...common },
};

function getEnv(appEnv) {
  return configs[appEnv];
}

module.exports = { getEnv };
