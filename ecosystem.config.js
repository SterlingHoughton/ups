const path = require('path');
const basePath = path.join(__dirname, '/packages');

module.exports = {
  apps : [{
    name: 'Gateway',
    script: `${basePath}/gateway/server.js`,

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    // args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3000,
      DB_SERVICE_PORT: 4000
    },
    env_production: {
      NODE_ENV: 'production'
    }
  },
    {
      name: 'db service',
      script: `${basePath}/db_service/server.js`,

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      // args: 'one two',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 4000
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }]
};
