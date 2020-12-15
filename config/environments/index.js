require('dotenv').config();
const DEVELOPMENT = require('./development');
const PRODUCTION = require('./production');
const QA = require('./qa');

const { APP_ENV } = process.env;

let currentEnv = DEVELOPMENT;

if (APP_ENV === 'production') {
  currentEnv = PRODUCTION;
} else if (APP_ENV === 'testing') {
  currentEnv = QA;
}

module.exports = currentEnv;
