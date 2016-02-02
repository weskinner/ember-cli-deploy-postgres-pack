module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    cloudfiles: {
      region: 'ORD',
      username: '____',
      apiKey: process.env['RACKSPACE_API_KEY'],
      container: '____'
    }
  };

  var localhost_postgres = {
    database: '____',
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    tableName: '____',
    user: '____'
  },
  remote_postgres = {
    database: process.env['DB_NAME'],
    host: process.env['DB_HOST'], // 'localhost' is the default;
    port: process.env['DB_PORT'] || 5432, // 5432 is the default;
    tableName: '____',
    user: process.env['DB_USER'],
    password: process.env['DB_PASS']
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';

    ENV.postgres = localhost_postgres;
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};