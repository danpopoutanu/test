module.exports = {
  apps: [
    {
      name: 'VFRO-NEXT',
      script: 'app/server.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      // args: 'one two',
      instances: 2,
      exec_mode: 'cluster',

      autorestart: true,
      watch: false,
      max_memory_restart: '1G',

      env: {
        NODE_ENV: 'production',
        ENV: 'development'
      },
      env_staging: {
        NODE_ENV: 'production',
        ENV: 'staging'
      },
      env_uat2: {
        NODE_ENV: 'production',
        ENV: 'uat2'
      },
      env_uat3: {
        NODE_ENV: 'production',
        ENV: 'uat3'
      },
      env_uat4: {
        NODE_ENV: 'production',
        ENV: 'uat4'
      },
      env_uat5: {
        NODE_ENV: 'production',
        ENV: 'uat5'
      },
      env_production: {
        NODE_ENV: 'production',
        ENV: 'production'
      }
    }
  ]
};
